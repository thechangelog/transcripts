**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well today, Daniel. How are you?

**Daniel Whitenack:** I'm doing well. Trying to catch up on first of year things; lots of planning, lots of new things going on, new projects at work... So it's an exciting time, but it's a busy time, for sure.

**Chris Benson:** It is. And it has been a crazy time out there in the world for everybody, certainly in the United States if you're listening here. No matter what your political persuasion, it's been kind of a crazy last week... Normally, I encourage people to come to the show just for the sheer exhilaration and excitement of AI topics, but I'm hoping with this they can just come and relax. Because everyone I know here is stressed out. We're gonna have a fun time today. We're gonna have a good conversation, and everybody can chill out and relax, and we'll talk some good AI stuff.

**Daniel Whitenack:** \[04:18\] Cool. Sounds good. Well, Chris, how is your sense of smell, would you say?

**Chris Benson:** Oh, I wish it was better. My wife loves cense; we have cense in the house, and she'll say \[unintelligible 00:04:26.22\] she'll put it my nose and I cough, or something...

**Daniel Whitenack:** Yeah, you're not like the sommelier; you've got the detecting the fresh grass and rubber water hose in--

**Chris Benson:** I know. I think this is the episode, knowing what's coming, that my wife will actually listen to... Because she's like "I don't wanna listen--"

**Daniel Whitenack:** There you go...!

**Chris Benson:** "The last thing I wanna do is listen to you for a little while..." So this might be the one.

**Daniel Whitenack:** She has to do that all the time, right?

**Chris Benson:** I know. She can't get rid of me. So yeah, this might be the episode that I pull her in.

**Yanis Caritu:** It's super.

**Daniel Whitenack:** Yeah. I have to confess, this one has a bunch of personal interest for myself. Our listeners might know that my wife owns a candle manufacturing business, and I know one of the things that they're always trying to do is compare different of their fragrances, they get a bunch of sample fragrances in, they analyze them... And through that, I get a chance to sort of smell all sorts of things. I don't think my sense of smell is so good, but I've had this conversation with people at work, that if there was a way to objectively or quantitatively look at odor or smell, then that would be a huge boost and a benefit to what they're doing.

I'm really excited today that we have Terri Jordan and Yanis Caritu from Aryballe with us to talk about digital olfactory and electronic noses, and all sorts of amazing things that they're doing in terms of odor analytics.

**Chris Benson:** This is so cool, isn't it?

**Daniel Whitenack:** It is cool.

**Chris Benson:** We haven't done a show like this.

**Daniel Whitenack:** It smells wonderful... So welcome, Terri and Yanis.

**Terri Jordan:** Thank you. Thank you so much. Great to be here.

**Daniel Whitenack:** So why don't we start out -- before we get into this really cool topic of electronic noses and odor analytics and the amazing things you're doing at Aryballe, if you could just give us a little bit of a sense of your background, and how you got to be interested in what you're doing now, and doing what you're doing. Terri, do you wanna start us out?

**Terri Jordan:** Sure. My background is actually not in anything like AI or machine learning, which - it's a great thing that Yanis is here. He's gonna be my ace in the hole for this one. But I'm more of a material scientist, so my background - I have a Ph.D. in polymer physics, and had many years in big industry, looking at new materials and introducing and solving material problems.

I got involved in more or less the divide side, let's say when you can activate and make things happen in the solar industry. So I started doing both startups and kind of device orientation in my commercial side when I stopped being a scientist, and let's just say stopped being a serious scientist, and stared being more of a serious commercial person... So that kind of got me interested --

**Daniel Whitenack:** We'll still consider you a serious scientist \[unintelligible 00:07:14.13\]

**Terri Jordan:** Thank you, thank you... \[laughs\]

**Chris Benson:** You have permission from us.

**Terri Jordan:** Okay, thank you. So that got me started through solar. Then I did UV-emitting LEDs, and also a startup, and then through the company that acquired the UV LED company I was doing portfolio and business analysis and found Aryballe. They were founded in 2014, and maybe we'll talk a little bit more about that, but they were just expanding to the U.S, and asked me through our interactions if I wanted to run the U.S. division, and I said "Absolutely." It's so cool, like you said, right? So cool!

**Daniel Whitenack:** Yes, definitely.

**Terri Jordan:** "Yes, you had me at hello." So yeah, very excited to be here; it's been quite an evolution for me in my career, but this is probably the most fun I've ever had in a position... So it's great.

**Daniel Whitenack:** It's so cool. Yanis, what about yourself?

**Yanis Caritu:** \[08:05\] On my side, I have a physics and optics background, and then signal processing, mostly... I've been exploring early neural network structures during my Ph.D, specifically on multi-sensorial systems... But of course, it was before the year 2000. Since then, I have always been in startups for developing what we can call augmented sensors. Always sensors with something physics to translate, a physical phenomenon to something in digital, and then apply artificial intelligence to learn many things.

So now I'm chief software officer at Aryballe, and I joined the company two years ago. Of course, at Aryballe we have multiple skills - chemistry, physics, optics, micro and nano-electronics also we need... And signal processing, and of course, artificial intelligence. That multi-disciplinary context is very exciting, and especially for applying this to odor sensing, of course.

**Chris Benson:** So I'm gonna ask some really novice questions, because I'm completely new to this... And I guess I'd like to start out by just kind of -- if you could lay a little bit of background for those of us who are not in this industry... I know that over the years I have seen things having to do with scent, but I'm also peripherally aware that it's evolving over time... Could you talk about how digital or electronic smell - that industry and those types of technologies have evolved a little bit over time? ...to give us a little bit of a sense on where you've arrived as an industry right now and what the technology is looking like, before we dive into today's technology. Just give us a little history on that.

**Terri Jordan:** Sure, yeah. So digital olfaction is generally defined as digital capture and production of aromas. If you think of our odor and our sense of smell, it's similarly to visual. As human beings we have these beautiful slits we call eyes, and we see things in two dimensions and we form a picture in our head that makes it perceptual, and turn it into three dimensions, and then put it back out. We do that from the time we're kids.

We do the same thing with our noses - we have two slits, and we call those nostrils, and there's biology in our noses, and then there is electronics in our brains. So there really is a perceptual piece of this as well... And so unlike the visual, where there's clear standards, and there's colors, and there's RGB definitions - almost none in odor. You asked about the history - actually, if you look at what people have tried to do (they're called bio-electric noses), it really begins with analytical chemistry; something called gas chromatograph (GC-MS), where you're identifying specific molecules. So it's kind of common from there. There are some general classes of molecules that have certain earthy, or musty, or skunk smell. There's a molecular chemistry to it, but it's not perfect. It really is something that our brains have kind of contributed to. It's an evolutionary kind of a science.

So it is something that is very well-addressed with machine learning. We're not trying to analyze chemicals, we really are not. We use peptides, which are -- and tell me if this is too specific, but peptides, which are kind of like miniature proteins that are mimicking what's going on inside the nose, so that we can get at the machine learning which is going on, which is kind of our brain.

So that's a little bit -- again, still, we're analyzing the gas, just like in the old days of GC mass spec, but we're doing it in a way that we learn... And we learn, and we learn, and we learn. A bio-electric nose is nothing if you don't teach it. So we teach it using something that is mimicking the human nose and the human sense of smell. I don't know if that helps, but that's my answer.

**Chris Benson:** \[12:07\] It does, it does. Just as a follow-up comment to that - I love how you drew the distinction with visual, because it never occurred to me... I have been programming for years, I'm so used to using RGB and stuff as a mechanism to understand that... But then as you were talking, I started thinking "I don't have that for all of my other senses." So it's a good way of showing that gap.

**Terri Jordan:** Yeah.

**Chris Benson:** And also, you're forcing me to go back to all my intro biology/chemistry classes, all those years ago, and try to remember. You said peptides, and I'm like "Oh my God, I remember something about that."

**Terri Jordan:** Yes, right. And that is one of the things that makes us unique. There's other e-noses that are trying to mimic smell through other means, like solid-state -- you know, different kinds of electrical impulses... But we're one of the few - if not the only one - using the short-chain peptides to mimic what's going on biologically as well. Would you add anything to that, Yanis?

**Yanis Caritu:** I can complete also... And I like this parallel with the vision also. If the question is at the same level of "What is the digital vision, the history?", I'm trying to make a parallel... It's very interesting, and what we can say is that this domain of digital olfaction is in fact very large. Today, all the engineering activities is really focusing on enabling the capture of odors information, thanks to the specific technology of sensors... Which are not always the same, but things are comparable, because they are playing with materials, with different biosensors like at Aryballe... And how it works is we record and store something coming from the interaction between molecules, just as the animal nose is doing, and then the question is what we can do with that so that would have real use cases.

Here is where artificial intelligence can help... But digital olfaction may be compared just in a certain way to vision, because as it is a sense, we have now also the digital world, which is very helpful.

The respective history, vision and olfaction, along with artificial intelligence, are really not the same. So the situation in which we are right now, if you want, can be compared as if we had the benefits of all the artificial intelligence and all the digital world facilities we have right now, but when the photography in the past proposed to us images, when you were able maybe to differentiate people from objects, but due to the low sharpness of the images, when it was still hard for instance to recognize faces, or to detect a red flag in a black and white picture, something like that.

So I would say that we have the chance that right now we have artificial intelligence -- they are almost commodities, we can say that, because of course, there are progresses which have been made...

**Chris Benson:** Absolutely.

**Yanis Caritu:** ...and it's a revolution for the industry. But the main difficult part of digital olfaction is maybe to grab/capture, and to capture it in a more reproducible way. And also displaying, because today we have screen for image, but we don't have a very sophisticated diffuser of odors, so that once you store an odor, you can restitute exactly the same, just like an image file on your hard disk, and you can play it of course on the screen, and you can recognize it even a posteriori. It is not the case with the odor. You need to say "This is smelling green grass" as soon as you capture it.

**Daniel Whitenack:** Yeah. That's really interesting. So based on what I said at the beginning, our listeners probably know that I'm interested in this and I have some ideas in my own mind. But for those out there that are thinking "Why would we want to digitally represent odor?" What are the main end goals or use cases that you're running across? Could you just give them a sense of the main use cases that you're seeing right now?

**Terri Jordan:** \[16:09\] Yeah, this is what gets me really excited, so I'd like to go first on this one, too. So food and beverage I'm seeing increasingly. When you think about raw material quality verification, think about all the places grain goes, or corn, different kinds of corn. So really having quality corn. We have one use case where we're looking at where we can differentiate between good corn, musty corn and mildewy corn, or sour corn.

So looking at raw material supply, and raw material quality verification. That goes into not just food, but also the entire fragrance industry. As you can probably imagine, we're working with a very large fragrance supplier that supplies to all of your consumer product goods, and all of the hand sanitizers that we've been using so much of in the past year, as well as in fine fragrance. So all of that requires really fine raw material, but also product consistency on the other end, so process control. So did I switch out a batch of orange blossom for vanilla? That's an extreme case. Did I bring this out of the right vat, and does this look like it's supposed to look?

Those are some of the obvious ones, and we term those kind of things as cost of quality. So if you're off-quality, you're costing a lot for a manufacturer of any of those, whether it's food, flavor or fragrance.

But some other ones that I think are interesting, that are coming up, that were surprising at least to me when I started is in the automotive industry. So in the future, and really to a certain extent even in the present, we're seeing more autonomous, and lots of ride-share. So ride-sharing has become more or less ubiquitous, in some form or another, whether you're talking about a fleet of Hertz/Avis type of thing. Or you're talking about the Zipcar kinds of things, where you're actually literally sharing a same car with somebody else and it doesn't have a place to go after.

So what the automotive industry is finding is that they need a way to take that subjective experience of getting into a car and it smells bad, or it smells like new plastic, or it smells like somebody's had their pet in here... And we need to automate that. Especially when you think and you go forward into mobility and the autonomous space, there's not gonna be a place -- you know, that subjective thing; you don't want to use your customers and clients as your sensor, as your detector. You wanna sense that beforehand.

So both for safety and preventative maintenance, but especially for the comfort and experience of driving, all of the automotive tiers are looking at ways to standardize and create sensors that can speak back to the cloud and go back to wherever the controls are for that experience. So that's been really fun. We've smelled all kinds of bad odors in that case, so we could share stories about that. That's been fun.

And then consumer appliance industry as well. You know, food spoilages and food conservation has become kind of a mega-trend in a way... So food storage monitoring, whether it is on the large-scale supply chain of shipping food, or your own refrigerator... We're looking at applications where you could imagine in the future it's saying to your smartphone or Alexa "Hey, am I out of cucumbers? I'm at the store. What do I have?" And be able to really pick up the odors of what's in your refrigerator and be able to dissect that. Or you might get an alert that you should be using your meat within the next couple of days.

So detecting odors in the refrigerator for a consumer, as well as in somebody's larger supply chain ones. And yeah, even automated cooking. We did a use case where you could tell when the chicken is done, when the cake is done... Those kinds of applications as well.

\[20:01\] So there's a lot of spin-outs from that, including lots of personal care and cosmetic examples... A little bit more, slightly more in the future is more health examples, where you can imagine wearing a watch and breathing into it and having it tell you "Yeah, you should go maybe get checked for strep throat" or something like that. Certain diseases have - particularly diabetes and whatnot - have by-products that end up in our breath or in our skin, so in terms of our roadmap, that's in our roadmap as well. But the first few examples I gave you are things we're working on right now, with \[unintelligible 00:20:33.26\] early adopters in the industry.

**Break:** \[20:42\]

**Chris Benson:** I would like to actually talk a little bit about the actual -- and I don't know, I'm gonna leave it to you to define it, but the electronic nose device that you have... And I'd really like to hear, because you both have interesting perspectives on it, if you could both contribute from each of your perspectives what that device is - both as a data producer, and as kind of from the olfactory science aspect of it... And then maybe as part of that, Yanis, you could talk about what data you're pulling from that, that's going into models for development, or inference, or other software uses, and stuff. But I'd really like to get both sides of what it is that you're doing.

**Terri Jordan:** Great.

**Chris Benson:** I'll leave it to you all to decide who goes first.

**Terri Jordan:** Yeah. Well, we say we're hardware-enabled software dataware. That's how we define ourselves as a company... So I'll go very briefly and say that our hardware is currently - and this year we'll be launching a product in the market, silicon technology. So we're grafting these peptides onto a silicon chip, so it's basically kind of everything silicon photonics, that you do or don't know... It's really a silicon photonic technology stacked on a chip where we use those peptides in the coding process. Everything else about it is just kind of \[unintelligible 00:22:51.29\] processing and pretty standard technology. The new part is the peptides, which I spoke about before. So that's my short piece. The rest of it is what you do after, so I'll let Yanis go from there.

**Yanis Caritu:** Yes. And generally speaking, when you are talking about odor information, we're entering something which is quite complex, because an odor is a complex mixture of different molecules that provoke in your nose some activities... But the interpretation of the odor is in the olfactory cortex, so not at the same place. We have to cope with that, so our first focus is on delivering a sensor that will be repeatable in the term of activities, so that this information is quantified once for all, and you inject this in the machine learning. And maybe you will mimic also the human brain, but not sure, because interpretation of odors depends also on your history, and so on.

\[24:01\] We are playing artificial intelligence as soon as we get data from the sensors. And these sensors are just like a fingerprint sensor, because it registers patterns when you apply some odors, and this is what we try to classify, to recognize, and so on.

\[unintelligible 00:24:19.06\] plenty of application within different areas, but within this area you can find recognition problems, you can find \[unintelligible 00:24:27.10\] so you can for instance detect which kind of odor is in this car, but you can also detect where is the source of this odor, because it's something you want to know to solve the problem... So there are plenty of opportunities to apply artificial intelligence with those outputs.

So now the sensor is providing to us a panel of figures, just numbers, which is approximately, one hundred figures, which is revealing the nature of the odor.

We have plenty of pre-processing things to make it clear, to do what we call the normalization, so that you get rid of the concentration of the odor, because you have to cope with that also. A different concentration. you may have a different signature. But we find a way also to get rid of this concentration and to access to the very nature of the odor. Just like face recognition, you need to have the face within the specific, one by one, for instance. That's the kind of operation we are doing on the signature.

Then we have contextual data to embed information more than the signature. So you get what we call the annotated database for training, and then with this annotated database, within a universal folder, like Terri was mentioning, you have the possibility to create a model which is a small brain with a small universe of odors, but may be a big universe of odors also. Then you can recall with this model the odor that your sensor is experiencing right now.

**Chris Benson:** I've got a quick follow-up question, because one of the things that you said along the way - you raised it and I didn't wanna interrupt you, because what you were saying was fascinating... But I'm gonna go back for a second. When you were talking about that data representation - and this may be too abstract to easily describe, but I'm kind of curious... Obviously, the numbers are representing things - you've talked about a hundred numbers, or whatever it is... Is that a proprietary model? Is that something that is an industry standard that already existed? In my head, I'm thinking about the way I tie visual to RGB when I'm programming and when I'm dealing with devices... So I'm trying to find some sort of analogy, aside from just going into the model, how might I conceive of the representation that you have and tie that to what I'm smelling. I'm trying to make a connection between the real world and that digital representation of it that would make sense to me.

**Yanis Caritu:** Yes. And thank you for the question, because this is the right question, and it's not so easy...

**Chris Benson:** Well, thank you.

**Yanis Caritu:** I will try to not be too much technical, but as you pointed - we need to find something which is equivalent to an RGB image, or like the frequency in the odor, and so on. So what we are measuring are quantum of molecules with different properties, and so it's difficult to have sensors that are on a unique dimension. So collecting all this data within the specific universe of odors to limit a bit the complexity - you can find what we call orthogonal axes in representation of data, so that you have virtual sensors, which are not exactly the sensors you have, but you try to find the different axes which are not correlated, and which put you in a world which will provide you with something that is not so one-dimensional.

**Daniel Whitenack:** \[28:08\] It's kind of like principal components, or something...

**Yanis Caritu:** Exactly.

**Terri Jordan:** Principal components, exactly.

**Yanis Caritu:** And this is the first step - to differentiate like the first component, which is frozen, because you decided what are the reference odors. And then trying in the future - it's not yet there, but trying in the future - to interpret the axis when you are closer to specific odors... Because when we are talking about odors, we like to think about odors for flowers, odors for fruits and so on. But today it's more on a chemical point of view that we can decide -- when you are moving into this specific space, you are going for instance towards a specific chemical group or chemical family.

**Daniel Whitenack:** Yeah, that's really helpful. I know some of our listeners may be familiar - when you have a machine learning problem and you have many dimensional or many different features of a problem, a lot of those can be correlated, and so that's where one of these dimensionality-reducing methods, or even just orthogonality methods like principal components come in to help you figure out what are those independent features that are gonna help you describe the information of your problem.

**Terri Jordan:** Yeah. The other thing to emphasize there - what Yanis talked about is reference molecules in the universe. So you talked about RGB, and we don't have that in smell, and it's why we limit ourselves. Let's say we're gonna talk about fine fragrance universe, or we're gonna talk about automotive universe, which is really concerned with malodors, bad odors...

**Daniel Whitenack:** So it's like a domain.

**Terri Jordan:** A domain, right. We're defining that field or that domain, which are kind of the endpoints or the relevant ones, and we can fine-tune that as well... But I'm being somewhat simplistic there. And then from there we can determine how far are we away, and from there you can start to use just regular statistics to do things like confusion matrix - are you likely to be confused that these two are the same? That may be a framework that your listeners are used to.

**Daniel Whitenack:** Sure.

**Terri Jordan:** And we can tell the difference between -- I think one of the things that's fascinating as a non-machine learning, non-AI person is lavender... Let's say lavender, or rose - there's a number of things that you can take very disparate chemical structures... Again, being a polymer, chemist, physicist myself, you can take things that chemically look dissimilar, but then they smell like lavender. And our technology, because it's not trying to reproduce something specifically chemical structure-wise, but more that structure of interaction with your nos - those tend to be grouped together in our technology. So lavender smells like lavender in our Neose, in Aryballe's technology, rather than the old-style GC mass spec, which is - it's only gonna group together if it's chemically similar.

**Daniel Whitenack:** Right. Interesting.

**Terri Jordan:** So I think it's important, that concept of making sure you're defining what is your universe, that you wanna know about, and we do that use case by use case, generally. Sorry, Yanis, I maybe interrupted or co-talked over you there...

**Yanis Caritu:** It's okay. Also, at Aryballe we have of course many research and development labs, but also we have engineering activities, because it's also our mission to assess a sensor of odor. And we were talking about standardization some minutes ago, and I think one thing which is important is when talking about electronic nose, we should have a tool to assess the performance and to be able to compare to other sensors. That's a quite heavy activity, but what is specific here is that compared to other sensors I experienced in the past, is that the stimulus you have to put on your sensor is very combinatory. You have a lot of combinations of different molecules to have an odor, to get an odor. It's not the same as having pressure sensors, where you apply some pressure and you know where you are, because you have your gold. Here it's not quite the gold; the gold is indirect. So you need to specify the world of odors you are playing with to be able to compare sensor to sensor and apple to apple.

**Daniel Whitenack:** \[32:22\] Yeah, it almost seems like there's this sort of transition where if I think about computer vision or something like that, we're used to -- like, on a manufacturing line, if I'm putting in... We talked about this with one of our guests - if I'm putting in a chip on a board or something, computer vision at that point would be like "Oh, I'm gonna detect edges. Once I know where this edge is, then I can move my chip over and put it in in the spot." In that case you're not detecting "This is the socket here", like "I'm detecting what it is." You're detecting edges, and making some inference off of where it is.

Here, we're used to -- you would detect a certain combination of chemicals, or molecules, and sort of deduce - like Terri you were saying - "This could have to do with lavender. It's consistent with that." But you're not really detecting lavender smell.

**Terri Jordan:** Correct, right.

**Daniel Whitenack:** Here it's actually more of a perception type of deal, which is really interesting. For the benefit of our listeners, I just wanted them to have in their mind this electronic nose that we're talking about... At least the one I see in your pictures - and maybe it's been updated since, or this new version is coming out, but it seems almost like a sort of... If people imagine one of those older-style brick cell phones - about that size, with a little screen on it, and it's got a little... I don't know what you would call it - a nozzle, or orifice, something that... I guess the sniffing mechanism?

**Terri Jordan:** Right. That's the \[unintelligible 00:33:51.03\]

**Daniel Whitenack:** Sure, yeah. So it's got a little screen on it, and you can kind of bring it around... One of the interesting things as I'm looking at that, I'm hearing what you're talking about, and also thinking about other machine learning problems... Like, if we think about, for example, speech recognition. Speech recognition gets confused as soon as there's multiple speakers in the environment, and there's noise in the environment... Or in the case of computer vision, I could detect maybe a person or a sign, but as soon as I bring other things into the picture, or apply a filter, or something like that, then I'm all confused.

So I'm curious, as you're sort of bringing this electronic nose around and detecting odors, how that sort of environment plays into the whole thing, and how you can achieve that robustness as you're moving around. We all know that all of what we smell all day is a combination of things, not just one thing, right?

**Terri Jordan:** Yeah, that's a great one for you, Yanis. \[laughter\]

**Yanis Caritu:** Well, to me there are two different ways to take this. Some people are using artificial intelligence just as black box; we are not, and we cannot here at Aryballe, because there are so many variables also in the environment once you are in the use case... And you don't want to learn all these variables moving.

So because it's a too large database, and as I have said before, it's easy to have millions of cat pictures, for instance, and to annotate them afterwards; it's not easy to collect hundreds of odors or thousands of odors and to have an annotation on it. So we just need to reduce the space of the variability, so that's why we have a large work and charge efforts on trying to keep what we measure on the same normalization space. That's the first one.

Also, when it comes to source separation, as you mentioned with the multiple speakers for speech recognition, one way to find against this is to find the correct equilibrium into our chemistry between some peptides that would be specific, and some other that would be not specific.

\[36:13\] So this is a question also of having some improvement in the sensor, so you can look at the reality with another angle, to bring more and more information. That's the simplest way to do it. But then if you have more issues with the useful signal, you need to practice - let's say the humidity. You are okay with having a humidity sensor also, because that's commodities. So you can use a humidity sensor to solve many problems.

We have plenty of tricks on the system, and it's still a miniature system, because all what we are talking about are chips on silicon to have this solved along our progress and development.

**Terri Jordan:** And maybe for clarification for your listeners - when we talk about specific and non-specific interactions (that's particularly in regards to the chemistry), we say that by and large the peptides have an affinity for an odor, an affinity for a gas that's going over it, but not a specific interaction. The way to think about that is strong or weak interactions, and not particular to any particular chemical grouping, polar/non-polar, but specific, let's say, to fluorine, or to nitrogen. So there's a way we can combine some of those... And I don't know if that's clarifying possibly for some of your listeners.

**Chris Benson:** It is.

**Yanis Caritu:** And there are really two ways of coping with that. The first way is very pragmatic, "Okay, what is my use case?" My use case maybe can be very simple - it's quality control etc. but it's a classification problem with maybe five different classes, that's very easy... So let's do it, it's okay.

And the other part is understanding what's happening there, what our sensor is measuring exactly, how to understand that so that we can improve also the chemistry which is inside... Everything is under our development, and we improve the sensor, just like the photography has done in the past.

**Terri Jordan:** And then taking that into the practical, for a moment... So an example where this comes up for us in a use case is automotive. In automotive we have a consortium/group of people and we're working together towards automotive solutions. One of our partners put together 20-something cars, and the question was -- okay, so this background... What does the car smell like? Before you introduce the mal-odor, what is the smell of a car, and are they all gonna be the same?

We looked at 20-something cars and did a whole range of replicates and repeat studies, and the long and the short of it is, with the exception of a brand new car, which does have new car smell, and I think we're probably familiar with that odor, all the cars not only had the same nominal level of intensity, they had the same -- what you heard Yanis call "signature". This very specific pattern of "This is what a car smells like."

So on a nominal level, a car smells like a car, unless it's new or unless it has a freshener in it. We had those two outliers - one that had a cinnamon freshener and one that had a new car smell, and it was more recent.

So now we can start to experiment with "Let's impart odors." And some of the fun pet odors I talk about -- you know, we actually have real doggie doo doo. So that's a day in the life of yours truly in the commercial world.

**Chris Benson:** You're talking to a guy who has nine dogs in his house right now. \[laughter\]

**Terri Jordan:** Oh, so we can smell doggie doo doo...

**Chris Benson:** That just made it very real for me... \[laughter\]

**Terri Jordan:** ...but we can separate between teenage girl perspiration and aged man perspiration. So these are some of the real things that we've done with our customers; we'll spend a day in the life at an automotive OEM, and after smelling it with the digital olfaction device, my customer will say "So do you wanna go in there?" and I say "No, I'm good. I'll stay out here." \[laughter\] But we literally put those four smelling things inside chambers...

\[40:11\] Those are the kinds of things that we just do, and we look for differences, just like in any statistical problem; if they're different, is it significant? How many pieces of shirt do we need to add before it is significant, and how does that compare to human panel? ...not Terri panel, but another human panel that came in before or after.

So those are the kinds of things that we do, just taking what Yanis was talking about and turning it into practical AI for your listeners...

**Daniel Whitenack:** Yeah, you need to develop some type of parallel to what they have in self-driving with the simulated worlds, and simulated real-world environments, so that you don't have to bring in as much doggie doo doo and smelly shirts... \[laughter\]

**Chris Benson:** I've got all the doggie doo you need, though. If you need samples, I'll just start shipping them to you, so we're good.

**Terri Jordan:** Okay, great. To be clear, there are--

**Chris Benson:** Saturday afternoon, poop-scooping the yard.

**Terri Jordan:** Poop-scooping... That's exactly what our customer did to bring in the doggie doo. But to be clear - so we do have those real-life cases, but there's also a really great body of knowledge with some of our top partners that understand the chemical make-up. Let's say there's mimetic molecules; there's molecules that mimic certain smells, and we do quite a bit of testing with those things as well. So just to be clear, it's not all real-world testing. \[laughter\]

**Chris Benson:** Fair enough. I'm gonna turn it back to Yanis for a second, because you've got into something a moment ago... You were starting to talk about different uses of machine learning and different approaches, and we kind of hit a little bit of it... I'm really curious, what all applications -- you might think of it as applications of machine learning approaches, or use cases that you're using it, but anything that you haven't covered that might be interesting for our listeners to hear how you're using machine learning in the process... If you've already covered everything, that's fine, too; I just thought I'd throw out the last thing to see if there's anything that's been missed.

**Yanis Caritu:** Yes, you mean practically?

**Chris Benson:** Yeah, just like different types of models, different architectures... Anything that you can see "Oh, for this we do that. For this we do that", that kind of thing.

**Yanis Caritu:** Okay, so first, and very practically, we are coding in Python, for sure. We are using some very well-known library, because as you said, it's commodities. It's around scikit-learn and TensorFlow sometimes.

As we are not really today in big data things, we are trying some deep learning, but most of the time it's a pipeline of different processing to reduce the dimension first. First analyses could be discriminant analyses, or principal components... And then we have some very simple analyses when it is a few others which is analyzed, like logistic regressions sometimes, which is working much better than some neural networks, depending on the data.

So our strategy is to use a bench of algorithms to classify, for instance, for recognition, and to take the best one, in fact. Most of the time, to be honest, they are very comparable. It's some few percentages of accuracy if you want to compare, and sometimes, for some specific universe of odors. It will not have the same algorithm that it is the best. So it really depends on the use case we have. We have a data scientist to make this happen.

One thing also which could be a challenge is to deploy the models, because we are talking about a sensor that will embed any electronic products in consumer electronics; we need to add this model play on board, but also with a connected device, IoT for instance... And all this software logistic is quite large to do.

**Daniel Whitenack:** \[44:11\] I know from our previous discussions you have the detection and classification piece, but Terri, you were talking about a data platform or data that kind of allows you to explore what you've detected, and a sort of space of odors that you're dealing with, and their signature... And I was wondering if you could talk a little bit about those. So there's maybe like a first-order level of algorithms that you're doing in terms of detection and classification, but then maybe a second-order level around clustering those together, or you mentioned detecting when something changes in a refrigerator, or something like that... That seems more of like a time series sort of deal, where that's kind of an online thing that's happening on a second-order level, as compared to the detection and classification. So could you describe a little bit that sort of platform and applications?

**Terri Jordan:** I think that's for you again, Yanis. I mean, yes, those are the things we've done and implemented in terms of proof of concept with various customers, but I think how we do that time-lapse data analysis and signal processing - that's still for you again, Yanis.

**Daniel Whitenack:** So it sounds like that there's really sort of two levels of applying machine learning and AI in your system. I know, Terri, you talked about the sort of data platform and dashboard for people, about how they're analyzing the smells that they've detected... And that's like detection and classification. But there's also these other things that happen, like smells change over time, and so maybe doing time series analyses, or clustering and figuring out what smells are like what other smells. Could you describe a couple of those second-order applications, Yanis?

**Yanis Caritu:** Yes, sure. It's true that we are not in a completely constant world. The odors are evolving, so the pattern is changing, along with time. If you think about it, it's really good information. You have not a picture of the odor, you have kind of a video of the odor. And this video - you can apply the same way the machine learning, to have a state of when do you have to harvest fruit in a field, for instance... Or you can also have this trajectory of odors. You can get from cooking, for instance, to know exactly when you need to stop the cooking, when it's done... So there are many ways like this, what you call the second-order applications.

Also, because we are talking a lot of time about supervised learning, but you may have applications with unsupervised learning, just to understand/detect how many odors I can have in my raw materials, for instance. You apply different stocks. I don't know if it is coffee, or \[unintelligible 00:47:03.26\] and just let the system learn the different package of odors you can get from this, and also how many. It's not because you have ten bags of odors that you will collect ten bags of coffee, that you collect ten odors.

So we have plenty of mathematic tools to get to this kind of application. But to be honest, a large part of the applications are still on detection and recognition.

**Chris Benson:** So I guess as we start to wind up here -- I've learned so much, because I knew nothing about this topic before we got on, so I really appreciate you guys educating me on this... But I'm really intrigued about where this industry is going now. I have so many ideas popping into my head about ways of using this technology going forward... I'd really love it if you would both kind of wax poetic for us a little bit about your take on the future over the next few years, and the exciting things that we're likely to see, and I'd like you both to address it, just so we can get both of your perspectives on it, if you would. Yanis, do you wanna start us off? And then we'll go to Terri.

**Yanis Caritu:** \[48:06\] Yes, I am fascinated by home appliances, because it's close to our environment, and we want to be safer when we eat something... For instance, we want something which is not -- the cooking which would not depend on the whole system you have just by the odor. Just know where you can stop your cooking, and it's very facilitating for the daily life. But also, we are thinking more than that, and further.

I think that healthcare is of very great interest. Today the main issue is that when you exhaust an odor from a body, today you need to be a dog to smell it. You need to have a very low limit of detection. So the challenge we have to cope with with the sensor, because we are talking about not what we call the PPM, like the concentration, not the PPB. It's far lower than that, sometimes.

So the biological activity that exhausts some odors that could witness a specific disease you have is very exciting, and that's something which is very promising to me for odor sensing.

**Chris Benson:** Alright. Thank you. Terri, do you wanna take it home for us?

**Terri Jordan:** Yeah, I'll take it home, and I'm gonna give you two examples of this, if that's okay... Because there's a very pragmatic side of me that just is super-jazzed, especially for 2021, because we really will have an expansion in the market. So we're really introducing the solid state; we've been using, like you said, the big cell phone, the agent cell phone version. We're kind of miniaturizing everything down to silicon photonics.

So the market traction, I think, in all things, everything from coffee, to fragrances, to appliances and to cars - you'll start to see that building over, and I think that you will begin to see that maybe beginning in 2022, depending on what kind of field you're in. And then I find it personally and professionally super-energizing and exciting. So that's kind of the near term.

But I'll end with more or less the story of, let's say -- I have three adult kids, and asking them what smells evoke for them; I asked them that as I was preparing for this call, and all of them just coming off a Christmas, said "For sure, pine needles and cookies."

**Daniel Whitenack:** Classic, yeah.

**Terri Jordan:** And also, for some reason, my tomato sauce. So who knew...?

**Daniel Whitenack:** Nice!

**Terri Jordan:** And I bring out that story, and I think that you can do this as well, and your listeners could do this as well - smells evoke in us an emotional response. And when I ask my kids about what is a smell that evokes that emotion, they immediately know. So now when you think about yourself, let's say walking through a field, or going through a hike, as I love to do, and just go \[inhale/exhale 00:50:54.24\] and you just wanna capture that smell - there is a very futuristic application, which is you can capture, literally capture that smell, in that moment. Get your signature, bring it back, and send that into -- you know, it looks like Shazam for odors. Just send that in and say "Can you please reproduce that orange blossom, or that pine needle, or this combination of douglas fir and roots and hummus and all of that that we find in the woods?"

\[51:24\] And you can consider recreating that in a very real way. We're working with our fragrance partners with that kind of futuristic possibility as well. It's a very real possibility in future years as well. So those are some of the things that excite me. It's a mix of the pragmatic and the super-emotional.

**Chris Benson:** It becomes part of the memory. Not just a video on your cell phone, but the smells of that as well.

**Terri Jordan:** Exactly. And there's nothing more evocative than smell to capture us in memories. There's really great science and studies about that. So feeling literally, certainly our perception of that is bringing us right back to a place... So that kind of excites me as well. So those are a couple of examples for you.

**Yanis Caritu:** And also, if I may add maybe something personal, but I am always thinking about a hope, something which is a hope... That the human being is progressing conversely to animals. It's well-known that we forget the sense of odor. My hope is that with such systems - and a very spread system, when you have plenty of consumer products that could embed this sense - again, maybe it will take some time maybe, but we will have, again, this sense of smell, which is important to feel, to have sensation, emotions and so on.

And I think it's also not a mission, but it may be a benefit in the future that we are focusing on the specific digital sense.

**Daniel Whitenack:** Yeah.

**Terri Jordan:** As a way to connect us.

**Daniel Whitenack:** Yeah, that's so wonderful.

**Chris Benson:** It's a beautiful way to finish there. I love that. That's great.

**Daniel Whitenack:** So wonderful. Yeah, this has been a fascinating conversation, and I appreciate you both taking time out of your busy days to join us. It was really wonderful, and we're really excited to follow all the things you're doing. We'll give some links in our show notes about all of the great things you're doing and where people can find out more. I encourage people to check it out, because it's really fascinating stuff. Thank you both.

**Terri Jordan:** Super. Dan, we'll connect offline, right?

**Daniel Whitenack:** Yeah, exactly.

**Terri Jordan:** Your other business. Okay, great. Thank you so much. It's been really fun, guys. Thank you.

**Chris Benson:** Thank you very much.
