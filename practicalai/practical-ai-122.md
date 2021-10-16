**Chris Benson:** Welcome to another edition of Practical AI. We are the podcast that makes AI practical, productive and accessible to everyone. My name is Chris Benson, I am a principal emerging technology strategist at Lockheed Martin. I can't say my own title.

Unfortunately, Daniel Whitenack, my illustrious co-host, is not able to join today. We'll miss him, but I am pretty excited, because we have an interesting show ahead. With me today I have Elad Walach, who is CEO of Aidoc, joining me today. Looking forward to learning all about Aidoc and that industry. Welcome to the show, Elad.

**Elad Walach:** Yeah, thank you, Chris, for having me.

**Chris Benson:** To get us started, if you would let us know about yourself, who you are, how you got to the point where you're at... In a couple of moments, when we know you a little bit better, I'll ask about your company. But looking forward to finding out how you arrived where you're at right now, before we actually get to the topic at hand.

**Elad Walach:** Yeah. Again, thank you for having me. I'm really excited about this Practical AI podcast, because I come from the AI world. My background is -- I'm an Israeli, so everybody in Israel, we also serve in the military. I've had the pleasure of being in what's considered the most elite technology unit at the Ministry of Defense, the unit they call Talpiot. As part of that, I headed the AI at the Israeli Air Force.

**Chris Benson:** Okay.

**Elad Walach:** So no healthcare, no knowledge about CP imaging, or X-ray and to be honest, I didn't even know what's the difference when we'd started back in the day... But what we're really passionate about is utilizing the skills we learned, which is basically applying artificial intelligence to real operational problem, solving real-world issues, to the healthcare space.

**Chris Benson:** So before you even dive on -- you started with something so cool that I don't want to let that get by... So when you talk about that unit with the Israeli defense force, could you tell us whatever you can, a little bit about that? Because I've just never had someone say that before; it intrigued me. And then I wanna keep going with your own history... But you can't start with something like that without talking a little bit about what it does.

**Elad Walach:** Yeah, so I'll say what I can.

**Chris Benson:** Okay, fair enough. Say what you can, and I get that there's a point where you can't. I work for a Defense contractor, so I understand that.

**Elad Walach:** Exactly. I'll start with the grand vision of the Talpiot program. In Israel there was a big war called the Yom Kippur war, and Israel was technologically surprised. That was the key. Israel decided strategically "We need to always have the technology on top." And our idea was let's take 18-year-olds, when people are in their prime time, and let's make them the innovators of the Israeli Ministry of Defense. So let's take the brightest 30-40 people every year, screen them very rigurously, and give them a lot of benefits, but allow them, I would say, to serve their country.

So when I was an 18-year-old I was screened for that program, and as part of that I had to sign up for a decade at the Ministry of Defense. That's the service you have to perform. But the benefit is that they basically teach you everything there is to know about the military. So we visit all units, and they give you this very rigorous training in both technology and leadership, and then they catapult you into leadership position across the Ministry of Defense. And I was very fortunate to be at the Air Force in a time where it was just starting to pick up in terms of applications, computer vision, NLP and what can we make of that... It was just so much fun to look at the Academy and all the innovation and trying to apply them for real projects that help save lives.

**Chris Benson:** Sounds good. Okay, thank you for at least kind of getting us going on that. That sounds like a pretty cool start, a pretty cool way of getting into this. So now that I've rudely interrupted you, go ahead and pick up and tell us about yourself from that point.

**Elad Walach:** Yeah, so when I finished the service, after ten years I've met my two co-founders, which were both part of that program as well. One headed the Department for the Special Forces, one had been in the kind of Israel NSA... And we were just very passionate about the healthcare space. We saw that there was this massive pain point, with increasing amounts of data; we can talk more about that. We needed to know how we can use the toolset we got through our service to build a company.

\[00:08:02.28\] We were passionate about the healthcare space basically for two big reasons. The first is that it's really a big tech area. We didn't wanna compete in -- you know, three guys in a garage. We wanted to build something that is a higher barriers, very defensible. And the other reason is more an emotional one. We just wanted to feel that direct connection. I think there are a lot of companies that bring value, but to be honest, I loved the fact that once a day we'd get a text message from a position that tells us "Hey guys, you've just helped somebody's life." I think that's what we were looking for when we started the journey all those years back.

**Chris Benson:** Okay. I guess if you could tell us a little bit about what it is in terms of the company that you've started, what the vision is for that... Where are you going, at a high level? Tell me what you're doing.

**Elad Walach:** Yeah. So we're utilizing artificial intelligence for radiology. Radiology, for those who don't know, is the science and art of interpreting medical images - CTs, X-Ray, MRIs... And in recent years we've seen a massive overflow of information. You have cheaper scanners, you have higher resolution, you have less radiation... So we do this more and more. And the problem is that each and every one of those images has to be interpreted by an expert physician called a radiologist.

**Chris Benson:** Yup.

**Elad Walach:** And unfortunately, they are stagnant, and have been stagnant for years, in terms of number of radiologists. And the situation today is almost absurd - Mayo Clinic did a research showing that today they have about two seconds to read an image. Think about it - a human has to look at an image, a massive image (we're talking big images), two seconds to detect if something is wrong with you.

**Chris Benson:** Right.

**Elad Walach:** Obviously, it's an error-prone process; obviously, it's very difficult, and obviously, we're starting to get delays. And because radiology is so critical to all the healthcare - even for a stubbed toe you now get radiology. So every delay, every error has massive downstream implications. And we see it impacts \[unintelligible 00:09:56.23\] errors, and patient lives, at the end of the day. So yeah, I'll pause here and see if that makes sense.

**Chris Benson:** It does make sense. It makes perfect sense. It's interesting -- without specifics, I have heard about AI being used to do radiology in terms of the interpretation. You said one thing though that I'm just curious about... It's totally a side note, but I can't help but ask... You mentioned that the radiologist has a couple of seconds to make that. Is it just costly, given that they're doing rounds and they have many patients or something, to spend the time? They're just expected to obviously see it quickly, but I'm just kind of curious what's driving the metric about how little time they have to make that, given the fact that that human in the loop right there, as they're looking at that image, has a huge downstream cost to getting it wrong? Is it just too few radiologists for too many patients in general?

**Elad Walach:** Exactly. It's kind of supply and demand of images. And another big factor that comes in is more data per image. So if images were small -- let's say a CT exam; in the past, they had 50 images, something like that. Today we're talking about thousands for a single patient, for a single exam.

**Chris Benson:** Wow.

**Elad Walach:** So that obviously factors in as well.

**Chris Benson:** I don't think I realized that. I was thinking when I'm in and they throw 2-3 up, and all that... But they have a whole lot more than that to deal with today is what you're telling me.

**Elad Walach:** Yeah, the analogy I heard from one of our customers - I love that - it's like phone cameras. First of all, you have much higher resolution, and you have all the different filters now, and you need to look at all that... And the other thing - everybody's doing imaging today; you have selfies all around. So CT images are like phone cameras - now everybody's doing selfies, and now you have a lot more resolution...

**Chris Benson:** Gotcha. It sounds like a good problem to scale with automation; that's what I have to say about that.

**Elad Walach:** Yes, yes. Or augmentation.

**Chris Benson:** Fair enough. So why don't you tell us a little bit about that augmentation? What is the business model that you're addressing here? How do you fit into that process?

**Elad Walach:** \[00:11:59.22\] Basically, our AI is a safety net to radiologists. So the AI constantly runs in the background; nobody needs to activate it, or anything like that, and searches for certain type of findings that we require productization. So the big problem we try to solve, or at least the area we started with, is critical care, because you have so many patients, and the big thing if you have more data and less people is that those patients can get treated much later. Our AI runs in the background and searches for these critical findings - stroke, bleed, pulmonary embolism, spine fracture. And if we find something, we basically alert the whole care team, the radiologist to the presence of a critical finding. This can shorten the time to treatment significantly; we're talking about -- even in ED settings, where time is really fast, we're talking about an hour or two... But for elective care, it could be sometimes days \[unintelligible 00:12:53.13\] in terms of time to treatment.

**Chris Benson:** So what does that look like? What does the relationship -- so you're doing the interpretation at this point with the AI... What does that look like?

**Elad Walach:** We're basically \[unintelligible 00:13:04.17\] for the radiologists. Still, the human is doing their interpretation; we're just helping him screen through the data, see what areas the radiologist should focus on first. And let me give an example of what it means without us or with us.

Let's say you have -- one example is the emergency department. A typical emergency department, especially at night, is very busy. You have tons of patients coming in, and you really don't know which of them are really critical or not. We have a patient, let's say, who fell down a few stairs, coming to the ED. They're even doing CT imaging for that patient, trying to see if that patient has a brain bleed. But unfortunately, today, just because of the overload, that patient could wait hours before anybody interprets the exam. That's the key bottleneck - looking at the exam and seeing if there's some bleed. So today you could wait a couple of hours, and we're talking about very time-sensitive pathologies. Time is \[unintelligible 00:13:59.25\] we all heard that... So we can basically reduce that time, because we'll look at the image, we'll say "Hey, there's a brain bleed here. Let's alert the radiologist. You should definitely take a look at that patient. Even though that patient is 50 on your list, that should be number one. Take a look at it right now, and get the patient the treatment they need."

**Chris Benson:** It's interesting, just to throw in, as you're describing this - I have a very specific context that I'm applying it. I have a step-daughter who is a fourth year Med School student, and she is right now working in an emergency room at a hospital near us... And that's what she does. She relays a lot of her experience - because I have no background in that - she likes to tell me these things, so it's very interesting. I'm envisioning how this fits into her world as she's been describing it to me over time... And she has talked about the fact that getting the image results can be a big delay in the ER when they're trying to move quickly, especially on like a Saturday night or something, when things are coming in at a very fast pace.

So you still have the radiologist directly involved in the process...

**Elad Walach:** Yeah.

**Chris Benson:** Is it essentially just speeding up their process, to draw their attention directly to what they need to focus on, to speed that up?

**Elad Walach:** Yeah, exactly.

**Chris Benson:** Okay. But you're anticipating, at least at this point in time, the radiologist is always the key to the picture still, along with the technology that you're providing.

**Elad Walach:** Yes.

**Chris Benson:** The two are partnered, essentially.

**Elad Walach:** Exactly, exactly. And I think that's key, especially this day and age, and right now. I think radiologists have to be involved. A, because it's really necessary. Because at the end of the day I wouldn't wanna have AI interpreting my full images. And then I'll add one more thought to that. The AI is really good. I've trained it to be the best brain bleed detector I can. But we have thousands of diseases that we can have; and where radiologists, where humans are really good at is that comprehensive picture. They know how to aggregate information, they know how to look and say "Something here looks wrong." That's what humans are very good at.

So we're not replacing them in any way, shape, or form. We're just providing this augmentation, so they could focus, if there is a critical finding, let's focus on that right away and let's make sure that we treat the patient very fast for that downstream impact.

**Break:** \[00:16:20.12\]

**Chris Benson:** Okay, so that's really fascinating... We've talked about how your technology fits in, in this case in the ER with the radiologist having to interpret that... Before we dive into the technology side, could you dive us specifically through the process? Maybe describe a little bit about the radiologist -- we've talked about the radiologist trying to interpret, and having to do that very quickly... How is the radiologist actually interfacing with your technology? What does that feel like to the radiologist and how does that change their process, if you could describe that? And after that, I'd love to dive into the specifics of the AI, whatever you're willing to share, to understand some of the cool underlying models that you're using to make all this work.

**Elad Walach:** Yeah. So I'll start with an anecdote... When we started the company, we had a conversation with a radiologist, a very known radiologist... And we talked with him about the workflow. He told us "Guys, radiologists are so bombarded with information. You have so little screen real estate... You really can't make us press buttons and click things. It has to be seamless." I told him "I get it. Great insights. So no more than one button click for the use of the product." He told me "No, I don't think you got it. No button clicks for the use of the product. It has to be fully seamless, automatically appear whenever I want it." And that was the challenge we faced when we started the company, because there really are -- you know, imagine that environment of the person that has 50 patients waiting for critical... Like, getting phone calls, having to interpret a lot of diseases... You really can't disrupt anything. So what we wanted to create is a very seamless workflow for them.

So it would appear automatically in their own systems. They're using a worklist, so it would just appear as a flag in their worklist. Just like a small pop-up. You know, a thing that's really easy for them. The challenge was, however -- we thought "Great idea." But the problem was that in healthcare there are so many legacy systems. Imagine a hospital using systems sometimes ten years old...

**Chris Benson:** I noticed that everytime I do have to go to a doctor's office, or hospital, or something, it feels like a step back in time if you're into technology.

**Elad Walach:** Exactly, exactly. And trust me, it's really no fun to integrate into all of those legacy systems.

**Chris Benson:** I could imagine.

**Elad Walach:** So that's basically the challenge we had, and a big focus for the company is actually -- you know, we're an AI company, but half of my engineering is on creating a very seamless workflow. And what we did - we basically created this very cool integration engine that allows to integrate directly into those different systems... So whenever a radiologist gets up in the morning, he starts seeing the results popping up within their own workflow, the same system they're already using. So if they were using a specific worklist in a certain viewer, we'll just start popping up within their existing systems to kind of highlight the finding.

\[00:20:14.09\] So what they do is they just do whatever they were used to doing to this date, so opening a worklist and then \[unintelligible 00:20:18.08\] We're just a small flag appearing there, saying "Hey, this is a critical case." A small priority flag. "Look at that first." Very seamless.

**Chris Benson:** To accomplish that -- so it sounds like you're integrating not only at a software level, but also at a hardware level, to some degree. Or am I misunderstanding that. Because you have this hot, new AI that you're trying to integrate with this 10, 15-year-old system that the doctors are used to using... How does that look? How does that merge? You're talking about moving into the workflow, but how do you affect that?

**Elad Walach:** Exactly. So the key -- it's still at the software level, but it's in a lower-level... You know, you have to really understand the different communication protocols and how they communicate between the systems. And there are some patterns that emerge once you get an understanding of that. But if you would naively just try to integrate vendor by vendor, it's just impossible. It's finding those ways that are very scalable and that work very well across those systems.

**Chris Benson:** So you're basically using networking stacks and software to integrate as best you can with these older systems, so that you get the most seamless workflow you can?

**Elad Walach:** Exactly.

**Chris Benson:** You're talking about really old stuff, blending with very new, modern stuff, to affect a user experience that's adding value to that... How does that change for the radiologist? They now have presumably the image that they would have looked at anyway... What are you doing in that workflow that changes it for the radiologist in terms of how their -- I'm using the word "use case", I guess, but how their workflow seems from their perspective? What's different for them?

**Elad Walach:** From their perspective, it's almost unnoticeable, I would say. And I think that's the beauty of it. We don't wanna disrupt too much, we wanna just create value in a seamless way.

We actually had a customer that they didn't even show the alerts; they configured that in a way that automatically updates their prioritization stuff. So they just see this as a feed, and it decides the chain of prioritization. But typically, for a customer, they get up in the morning, they come to their regular worklist, where they have prioritized patients, and they just see flags of our results. If they hover on a flag -- so just in their normal worklist they see these orange Aidoc icons, and if they hover on that, we show them a preview image of what the AI detected, and then they can basically choose that case if they see -- if the preview image looks like a prioritized case, then they open the case and then diagnose it.

**Chris Benson:** Gotcha. So to turn it a little bit away from the practitioner using it now, and talking a little bit about the underlying technology... I suspect we have a lot of people in the audience that are just craving to hear about which models you use. Are there CNNs, is there NLP? There's probably all of this, I'm guessing...

**Elad Walach:** Yeah.

**Chris Benson:** If you could take us through a little bit of high-level architecture about what you're using, and why, and maybe some of the choices that you had to make along the way. I realize that you have trade secrets, and stuff, but I'm hoping that you can tell us as much as you can without giving the secret sauce completely away. Maybe a tiny taste of secret sauce.

**Elad Walach:** Yeah. So the guiding principle for us was that theoretically, you could build any AI, any fully-connected layer to detect whatever you want, right?

**Chris Benson:** Sure.

**Elad Walach:** But that doesn't really work that way. If you wanna create an effective system, you have to steer the learning process in a way that it's most efficient to learning that specific domain. So the question we asked ourselves is how to train AI most effectively to solve the specific problems of medical imaging. I'll give a few examples, and then I can talk about what elements are we using.

\[00:24:01.07\] So the first issue that you get when you go to medical imaging is data scarcity. So you think about ImageNet, you think millions of images annotated, very easy, you do a Mechanical Turk or something, you can outsource people flagging... It's not the same with radiology. We have what we believe is the biggest annotated database in the world right now, and we have hundreds of thousands of images. We're talking about roughly an order of magnitude, hundreds of thousands, a million of studies. Each contains hundreds of images, so it's tens of millions of slices of images, but a lot of the imaging is 3D stacks, so you have one patient with 500 images. So that's one big challenge that we had to tackle.

The second is class imbalance. A small patient image is like a million pixels, something like that, and a disease can be on a 3 by 3 by 3. We're talking eight pixels out of a million. And that's in positive exams. If I'm talking Air Force lingo, I would say -- so if I'm creating an algorithm to detect bunkers, it's like it would give you a map of the world and tell you "Hey, there's a bunker in here somewhere. Go and have fun." So it really is trying to handle this class imbalance where you have all these normal areas. That's a big \[unintelligible 00:25:22.04\] challenge.

And the third challenge for us was that humans have a lot more information oftentimes, if the system is accessible. I'm talking about the clinical context. So radiologists cheat, in the sense that they look at historical exams, they look at patient data, and it helps them focus on what they really wanna do, and that's another thing that we really wanted to focus on. And those are just three examples of how we basically built the underlying architecture to support those pain points.

So basically what we're using - it's not totally different. It's a convolutional neural network on the medical imaging, but what we really innovated is on the training process to handle the class imbalance on some of the specific layers in the network, to try and replicate as much as possible how a physician would look at the image... And we added a lot of clinical information from other imaging, from other clinical sources, for the neural network to have as much information as possible when doing it. Before I dive any deeper, I wanna pause here and see if you have any questions on that.

**Chris Benson:** No, that's very interesting. I'm just curious, when you're looking at the world of CNN architectures out there, what are some of the architectures that you like, in general? And I'm not asking how you're using them in specific ways, but what is interesting? The reason I ask is Daniel and I often talk about the fact that a couple of years ago we were seeing all the evolution of CNNs, but we've heard more recently more about NLP, and transformers over the last year or two... And if you're looking at it from our perspective as doing interviews, we're hearing more about this other side of AI. I love the fact that you're taking us back into the CNNs; we haven't really heard how they've evolved as much from guests lately... I'd love to find out what do you think is fantastic out there in the CNN world, in terms of useful stuff? Are there things that you think of as old, and you wouldn't mess with them at this point, having used them a lot in the last couple of years? Just wherever your perspective is.

**Elad Walach:** Yeah, it's a great question. I would say that it's funny when we submit to the FDA... So every one of our products has to be cleared by the FDA. They ask us what architectures we're using as well, so it's important to them. And I always found it kind of -- I would say funny, but when we look at our domain, we typically don't just download architecture from... You know, I'm not downloading a GoogleNet, or a ResNet, or something and implementing that as is. We're taking elements and we're experimenting with them, but it's relatively like a new -- I can't say it's even similar to anything specific, because it's just so adapted to our domain. \[unintelligible 00:28:04.23\]

\[00:28:10.02\] We do love attention; that I think is a big one for us... Again, because of the class imbalance, and all of that... So that's a big thing. And the other thing we really like is file transfer networks for data augmentation. So anything around data augmentation for data-scarce elements - I love those as well.

So if I can pick two elements that I love and we use often, I would say those. But it's really hard for me to say like "This is an architecture I would just use", because it's so different. You pick a few elements and you really experiment a lot.

**Chris Benson:** Gotcha. And that was a great explanation for how you're seeing that. I like that. It really sounds like you're finding the competitive advantage there in terms of customizing a number of different things in a way that's unique to your business... You mentioned barriers to entry earlier, and I would imagine that creates substantial barriers to entry...

You also talked about the world's largest annotated dataset for this. Are you able to tell us how you developed that, where that came from? At what point did you see the need for that and how did you approach that? And you could take it from the perspective of there are other people in other industries and other businesses out there that are trying to figure out how to solve it for their business. They know that they need the data, they're not sure how to do it. I'd love to hear how you got to that point where you could affect the solution that you were striving for.

**Elad Walach:** Yeah, absolutely. I wanna add one more point regarding the last point we discussed, in terms of customizing the networks. There is a cost to it, by the way. I just wanna make sure that I'm sharing that transparently. If you are experimenting, you need to have a very flexible experimentation infrastructure. And we've actually invested a lot in developing our cloud experimentation... But even the small challenges of how do you run a thousand experiments a day and track those, and you do it \[unintelligible 00:29:57.20\] and recover experiments if they fail... That was a massive undertaking. Right now, I believe we're in a much better spot than we were, and we can run thousands of experiments every day, which is fun as hell. We just have an idea and go crazy with it. Even me as a CEO, I can just ask them to implement some -- "Hey, we didn't do A, B, C. Let's try it." But it's massive. It's one of those challenges we don't often hear about; it's the engineering of doing very efficient, scalable experimentation.

Regarding the annotations - as you can imagine, a lot of it is secret sauce, but I'll try and get the high-level elements. I wanna share two things. The first is that when people think about massive amounts of data, they just say "Oh, I just want as many images as possible." There's a saying by my CTO that I love; he says "Guys, what I want is not to have the most images. I wanna actually train most effectively on the least amounts of images, if I can do that." And how do you do that? By selecting the right cases for optimization.

In medicine in general, annotation costs are sky-high, because you need physicians for that. So you really wanna pick your battles. And the case selection methodology, even before saying about the biggest, which is something that I'm proud of, but he's saying we shouldn't be proud of that - I would ideally want to have the smallest set of imaging database, but the most effective one.

So the case selection - how do you pick the right cases, optimize the learning performance as much as possible? And again, let's take -- brain bleed I think is a great example. Am I taking a thousand pictures of patients with massive brain bleeds, which are obvious, or am I taking maybe only 50, but those 50 are those that reflect subtle brain bleeds that you can really train and improve the system with? I would tackle that challenge more than I would tackle the challenge of annotating very efficiently.

\[00:31:50.27\] And regarding efficient annotation, I would just say that the key we've found is having everything very tight. So outsource as much as possible. The connectivity between the data teams and the AI teams and the annotators, and the fact that we control all the bits and pieces, the annotation selection, everything... Everyone knows their parts and they can communicate. That was very efficient.

I heard about Google doing something for -- I believe it was for dermatology \[unintelligible 00:32:15.17\] and they had like a thousand-page manual for their annotators. That for me is ineffective. And the problem was the annotators were outsourced, so... Going through all that information and helping them -- inefficient. What we believe is key is having very high interactivity. A lot of feedback teams, a lot of "AI people, I want this", and data people, "Hey, this is tough for me to annotate. Do you really need that?" And all of those small bits and pieces we find really help accelerate the process. And I won't talk too much about how exactly we solved it, but I would say that's a big \[unintelligible 00:32:47.25\]

**Break:** \[00:32:44.03\]

**Chris Benson:** So you mentioned something a moment ago that I'd like to go back to, and that's -- you talked about the ability to do your experiments, you referenced your own workflow internally, the infrastructure that you had... And I'd really love to hear how you've approached that. Because people tend to talk about the AI; it's the sexy thing to talk about, and what you're doing, but they miss the fact that it has to fit into a larger software process, that can take you all the way from experimentation and figuring out where you're going, and then integration into your other software... Because a model has to sit inside a larger set of components that are software... And eventually, it has to be deployed out, to be usable in the real world. So how have you approached that? Everything from cloud, to buying your own equipment, which workflow, which vendor, which open source you're choosing... How do you approach these challenges, these considerations that you have to make, considering that each one has a fairly substantial impact if you don't get it right?

**Elad Walach:** \[00:36:09.05\] Yeah. So I think the first big element that is worth to note is team structure. I think that was actually the first consideration we took into account. Our head of AI did an amazing job. He actually interviewed a few companies, how they build it, how Google does it, how other people do it... And we figured out a structure where the AI algorithm engineers are actually a small part of the team.

I'll go through the evolution we had... So we started with having algorithm engineers just focusing on algorithms, but they weren't really focused on deploying, and anything like that. We then figured out that was a mistake. We want people that can take the product end to end, and take full ownership, and not do cross -- because things get left and it's really inefficient.

So we brought people in that are both very sharp algorithmically, but know how to project-manage, know how to deploy, know the software side, and are not afraid to have their hands dirty with implementation.

Then we kind of started figuring out "Wait, but that's also not very scalable. We need people that are even better at software and infrastructure." So we created a whole AI infrastructure team, with a ratio of about 2:1. So two infrastructure folks for every one algorithm engineer... And then they started working on the infrastructure. \[unintelligible 00:37:21.13\] There are so many of those challenges. How do you scale? This is the cloud, and the experimentation infrastructure, and deployment infrastructure, and monitoring infrastructure... It's also very important how you monitor accuracy in production... I would say that's how the team is built today, and we're scaling at it the same way.

We were always big fans of the cloud. We started on-prem, which was -- I don't know if it was a mistake back then; we didn't have as many experiments. But now for sure we can't do it on-prem, because it's just so much experiments. So if you really want to scale fast, you really have to \[unintelligible 00:38:00.12\] the cloud.

It's even "stupid" challenges. One of our challenges - we ran out of spot instances for GPUs. That's a challenge, apparently. Solving that -- and how do you make sure that you work in multiple regions, and how can you potentially transfer experiments between? So all those small things \[unintelligible 00:38:22.01\]

I think it's just like respecting the engineering side - that was a big thing that I learned. Just make sure that -- that's probably a bigger part of making it work in practice, versus science.

**Chris Benson:** Gotcha. There's so many different ecosystems; each of the cloud providers has their own ecosystem. NVIDIA with GPUs has their own ecosystem and workflow... There are a number of tools that are cross-ecosystem, in terms of -- TensorFlow will work in all these different places, as well as PyTorch and others... How do you evaluate a particular ecosystem or a combination of them to make that bet, to go down that road? Any thoughts, any guidance that you can provide us on that?

**Elad Walach:** For sure. First of all, we took the path of AWS, and we're very happy with it.

**Chris Benson:** Sure.

**Elad Walach:** And the main reason we chose AWS was that it is -- in medicine we say "standard of care." We'd say that's the leader at this point in time still. And that makes it very easy to hire DevOps people that know how to do it, all the new tools that go in that platform. So that was for us a big consideration. The other is just costs. When we picked, those were the two biggest ones - innovation speed and cost, and can we create the architecture.

The other big element in terms of consideration is who is available and can help you work through those challenges. Again, I think there are several companies that were really accessible, but we really enjoyed interacting with AWS. We had all the \[unintelligible 00:39:52.28\] and I think what I learned as someone that was technical, but not technical on the cloud side - I learned there's so many different elements, so many ways to create your architecture that you really wanna have a \[unintelligible 00:40:08.03\] through those challenges.

**Chris Benson:** \[00:40:11.20\] That was super-cool, about how you're trying to evaluate the software. I love hearing how people make those hard choices... And clearly, you have kind of an approach to how you're evaluating the possibilities out there that has worked very well for your organization... So as we look forward, there are so many things I wanna ask you - and wherever your thoughts are taking you on this... We have the growing world of AI, with all the tools on that. You're in an industry that we know is in the process of being revolutionized, and probably in the very early stages of this technology... And there are so many choices that you have to make, both as a leader of your organization, in terms of where you're taking the group, and how to evaluate a really complex landscape of what AI is in the world that we're at, and all the tooling. Where do you see the world going at this point? If we're looking over the next few years, in the relative short term, and maybe even farther, when we're talking about where we might arrive... And obviously, nobody can read the future accurately, but I'd love to hear where you think the world might be going down the road.

**Elad Walach:** Yeah, it's a fascinating topic, and because we're in such a fast-moving industry, we really have to think about that all the time. And I'll start with taking us back into the evolution we've had these past two years, just to understand what are we even talking about, and the speed.

AI in healthcare and in medicine has been in this frozen period for a few years. So if you would go three years back - not talking decades; three years back - almost no \[unintelligible 00:41:49.15\] Two years back, we're talking about 0.01% market share of AI adopted. We're talking two years ago. And to date, only us, we have hundreds of hospitals; the leading names you would know, they're already utilizing AI. So we're talking about massive adoption in two years.

And thinking ahead for the next few years, I think we're gonna see really probably everywhere, you're gonna see one AI or another, which I find fascinating. I love being in an industry that is so fast-moving. We broke that barrier, and then it's starting to evolve.

But I think right now AI is in that really first age of healthcare AI. And AI today is doing (what I would call) workflow augmentation. So AI right now is only helping to the humans what they either way would do, but better. In my case, it helps radiologists detect pulmonary embolisms faster. That's the assistance.

But if you ask me 3-4 years from now, it's going to start going into the predictive space. What do I mean by that? I mean seeing things that humans cannot see with their naked eye. So if you today can detect a stroke at point A, with AI you could detect it in A-2. Alzheimer, or early detection of cancer. And I think that's where the promise of AI becomes really exciting, where you're creating new diagnostic capabilities.

It's like, initially, you need to do a CT to even look at the bodies and understand \[unintelligible 00:43:23.22\] Right now we're talking about the next phase of that - seeing patterns that no one of us could predict. And I think that's the exciting next evolution for AI. I think it's very challenging, in that you need a very high level of trust, you need to mountains of data, we're talking about orders of magnitude more than it is today... But I think once we get that, that's the Holy Grail we're all aiming for. And I think it's not that far away. We're talking 3-4 years until we're gonna start seeing things, and really impacting in a way that is really impossible by humans today.

**Chris Benson:** That's really interesting to me. I'm 50. I don't mind telling people that. I'm kind of getting to that point where I'm thinking as a guy who doesn't care much about medicine in terms of my own body so much. I'm just doing my thing, getting out there, exercising, and I'm starting to think now about "Oh, I'm at an age where this is starting to matter." So it's really good to hear that as I move farther into my 50's, that those new diagnostics are coming out... Because I'm counting on you to keep me healthy, buddy.

Anyway, thank you very much for coming onto the show. It's been a fascinating conversation. And like I said, for my own selfish purpose, in terms of keeping myself healthy, and also in the perspective of hearing these ER stories and hearing how you're changing that whole picture, and changing how fast people can get care. I appreciate your work and what your organization does. Thanks for coming on the show.

**Elad Walach:** Thank you so much.
