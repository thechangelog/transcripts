**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack; I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technologies strategist at Lockheed Martin. Every time, Chris, I've gotta get those words in the right order. It's an impressive title, I have to say.

**Chris Benson:** It's a terrible title. It's a mouthful... It's funny, I'll go ahead and make fun of -- I'm hoping he's not listening to this... My boss will be introducing me in a meeting, and he can't even say it. No one's like "Who's this guy that joined us?"

**Daniel Whitenack:** Yeah, yeah... I mean, you could do an acronym, like PET Strategist. That sounds also animal-friendly, PET.

**Chris Benson:** That's very applicable, yeah.

**Daniel Whitenack:** Principal Emerging Technologies, yeah.

**Chris Benson:** Exactly. I love animals, for anyone that -- yeah, anyone who's listened for a while has heard me carry on about it.

**Daniel Whitenack:** So how are things going for you, Chris? Are you excited about Crazy Week, in the U.S. at least?

**Chris Benson:** Yeah... So as we record this, it's the day before election day, so I guess everyone is holding their breath, no matter what side of the aisle you're on... And we'll see what happens through the rest of the week, and maybe beyond, depending on how things go. I'm remembering the election of 2000. It went over months to get to a resolution... So we'll see. It'll be interesting.

**Daniel Whitenack:** We'll see, yup. Well, we decided that -- at least on my end, I wanted a break from anything political...

**Chris Benson:** \[00:04:09.22\] Thank goodness.

**Daniel Whitenack:** ...and a little bit of a chance to be practical, as we are here at Practical AI... So this week we've asked Lukas Biewald, who's founder and CEO at Weights & Biases to join us, and talk about a lot of the things that they're doing in terms of developer tools for ML, and maybe some other stuff. Welcome, Lukas. It's great to have you with us.

**Lukas Biewald:** Thanks so much! Great to be here.

**Daniel Whitenack:** Could we maybe start by just having you give us a little bit of information about your background, and how you got interested in AI and computing, and ended up where you're at now?

**Lukas Biewald:** Yeah, totally. I always was interested in AI, ever since I was a little kid, writing software to play video games against me... And then I wanted to go into Academia and study AI and machine learning, and I got as far as a master's degree, and did some research... Then I left to do more practical AI, so I love the title of this podcast.

**Daniel Whitenack:** Yeah, it's good.

**Lukas Biewald:** This is like back in 2003-2004, and it was super-fun, because it was the really early days of ML systems and deploying big ML stuff in production for Yahoo, back when that was a super-relevant company, and then at some startups.

Then I got really interested in data labeling, which - you'll probably understand, just because it felt like... Actually, in research and in industry it felt like the quality of the data labeling completely determined the quality of the ML systems \[unintelligible 00:05:38.27\]

**Chris Benson:** It oftentimes still does.

**Lukas Biewald:** Yeah, totally. So I started a company, originally called Crowdflower, that was changed then to Figure Eight - really maybe the first data labeling company for ML practitioners... And I ran that for about ten years. It sold to a company called Appen, which is a big Australian public company that also does data labeling... And then in that process, I saw deep learning take off, I saw suddenly, all these applications, these very awesome practical applications across tons of industries. When I was first coming out of school, it sort of felt like all the jobs available was ranking ads, or ranking search terms... Or going to Wall Street and being a quant. And those aren't horrible jobs, but I feel like the really practical stuff is more exciting to me. It felt like there were just so many real-world applications happening...

And kind of what I saw was the tooling just seemed nascent, and it felt like a lot of the developer tools that we all take for granted don't quite translate into machine learning applications, because inherently it's statistical, and - I could go on and on why... But basically, they don't seem to translate, and you know it, because you see ML practitioners not using a lot of software best practices... So me and my same co-founder from Figure Eight and actually a third co-founder - we decided to start a company that was just focused on making great tools for ML practitioners.

**Daniel Whitenack:** Yeah, and we should say too - so you mentioned the name of this podcast, but you've also hosted a podcast with a pretty great name, Gradient Dissent, so great work with the naming there...

**Chris Benson:** Excellent.

**Daniel Whitenack:** Yeah, so definitely check out that podcast as well; we'll put the link in the show notes. Has it been interesting in terms of, you know, kind of after being a practitioner, being a founder for a while? Has it been interesting having conversations on your podcast with other practitioners? Have there been viewpoints that have surprised you, or insights that you gained that maybe you didn't expect to as you started having some conversations with people in various parts of the industry?

**Lukas Biewald:** \[00:08:02.22\] Yeah, but you run a company, especially as a founder/CEO , and most of what you do is you talk to customers. It's a huge part of what you do... So the podcast is really kind of just recording the conversations that I was having, and giving me an excuse to kind of ask a little bit higher-level questions to people. We kind of get into the details really quick with the user, but we thought it would be fun to step back a little bit and just have open-ended conversations... Which we were kind of doing anyway when we were starting Weights & Biases, because at first we weren't really sure what the first best tool would be to make. So we had a lot of these, and it was so much fun we kind of thought "You know, maybe we'll record these and other people will find them useful", because we were citing them a lot.

But I would say it's been absolutely fascinating, and it's been really fun to step way back and ask questions... Because you hear surprising stuff. I'll say \[unintelligible 00:08:50.14\] from Lyft was a long-time customer of Weights & Biases, and he's a great guy, but he was basically like "ML is just the same as anything else. It's just a discipline of engineering", which I thought that was a bold statement from a guy running the level five team there...

Or I remember Jeremy Howard was like "Basically, Python can't possibly be the future of machine learning", which is another controversial topic... So it's funny, you ask people and usually they say the same stuff, but then every so often you get these gems and you really think "Huh. Interesting", and dig in.

**Daniel Whitenack:** Yeah, yeah. Statements that would provoke a lot of discussion in any conference, or anything like that.

**Lukas Biewald:** Yeah, exactly.

**Daniel Whitenack:** It's like, people just assume certain things, like "Oh, you're gonna use Python." That's kind of what people do. But people really thinking about the foundations of those things, and why we're using those things - it's really interesting. We've had those experiences here as well, for sure.

**Chris Benson:** I actually wanna take you back for a moment to your introductory bio a little bit, and hit a particular point that you kind of went right over there... When you were talking about founding Figure Eight, which used to be CrowdFlower, which is really how I think of it... Because I've worked for several companies which have been your customers...

**Lukas Biewald:** Oh, fantastic.

**Chris Benson:** So there you go. I'm just kind of curious - at that point in time, relatively early, certainly based on where we are with machine learning today, and Figure Eight is a well-known name in this industry, and you have a lot of big customers... But going back to when you founded it - at that moment in time, what was it that made you say "This is the thing I'm gonna go do"? What was the problem that you saw? How did you want to solve it? If you can take yourself back to that year and tell us a little bit about what that moment was like.

**Lukas Biewald:** Yeah, totally. I think it started in my masters program in grad school. I was doing research on a thing called word-sense disambiguation, where you try to figure out if plant means like the power plant, or the living plant. A kind of classic problem in NLP. And I spent all this time with a dataset that's called -- WordNet is the ontology, but there's a dataset of documents labeled with meaning into WordNet. And it turns out word-sense disambiguation is kind of tricky -- it's a tricky thing to know really what the senses of a word should be... And my personal opinion is WordNet makes way too many senses. They'll have like 15 meanings of plant. There are two main ones, like I said - plant, the living thing, and the power plant, but they'll also have like "plant a block into someone", like in football it has its own meaning, which is questionable... And all these kind of weird names--

**Daniel Whitenack:** Yeah, like domain-specific, or very niche...

**Lukas Biewald:** Metaphorical... I mean, it sounds of so obvious, the senses of a word when you talk about those two... But when you think about planting a block of planting your foot into the ground, it actually gets a lot trickier of like what meaning is different from what. And you only learn that once you've spent a long time with that ontology.

Anyway, what happened was I was finding all these patterns in the dataset, and I was really excited to publish a paper... And then I realized that actually what I was doing was not finding interesting patterns, I was basically figuring out who the annotators were.

\[00:12:13.06\] I was doing this cross-document classification and I was realizing if you could look at the classification in one part of the document, it can help you with the classifications in another part of the document. And I thought what I was doing was topic detection. But then actually what I realized I was doing was I was basically doing annotator detection.

**Daniel Whitenack:** Right.

**Lukas Biewald:** And it was so heartbreaking, because I had spent months doing this research, and it seemed really promising, and then suddenly I realized that I was just finding this artifact for labeling it. And the label shouldn't really matter for documents, but of course, it does... So that was really top of mind.

And then, when I was working at Yahoo, I was actually switching their search engine from a rule-based system to an ML system, and I was doing it in all these different languages... And it was funny, because each country that I'd go into, sometimes they'd be super-happy with me and sometimes they would be really pissed off... And it had nothing to do with me, because I was doing the same algorithm in each country... But it was totally based on how seriously they took the labeling process.

Some countries -- I guess now I can probably name names... China would totally not take the labeling process seriously. They were just trying to do it as fast as possible. They had all these mislabelings... So it was really hard to get a system out.

Whereas Japan was taking it very seriously, because for historical reasons, they just had a bunch of labelers that really cared, and they were labeling it much more carefully... So it was much easier to launch something there.

And I was sitting there, like "Hey, I'm the ML guy. I'm doing the same thing in each country, but you seem to have very different takes on it." So it's just been so obvious that the labelers are what matters. So I sort of felt like if you wanna make ML real -- that's something I've always really cared about. It's so exciting when you get something deployed for a real application. If you wanna do that, most of what you should spend your time on probably is the labeling process.

I think at the time what was happening a lot was ML teams were kind of relying on some other function in the company that was already doing a lot of data collection to do the labeling... So the ML teams would be kind of divorced from the labeling process. So I think what CrowdFlower at the time (that then became Figure Eight) really did was it gave the ML practitioners control over the labeling process. So it wasn't like an outsourcing firm that was really \[unintelligible 00:14:29.14\] and then you're kind of like sneaking your project into their budget. It's like, now you actually are running a labeling process, and you're really looking at the data, and you're writing the instructions... And I really deeply believe that that's essential in almost every case for making a machine learning thing work in production.

**Daniel Whitenack:** Yeah, it almost seems like when you were doing your research work you really found these issues with the foundational, the underlying data itself, and the annotation process... And then, assuming you have some data to work with, it seems like the next sort of level up are these developer tools that were either non-existent, or really rough, or not being used, or something like that... And that seems like at the level of Weights & Biases. I'm curious of that's how your thought process went... Because it seem like a natural progression to me, but I'm not sure if after you had thought about the data and annotation problems for a while, your sort of next pain point or your next obvious layer in that stack was that layer up of developer tools.

**Lukas Biewald:** Well, I'll actually be a little more specific, since we're on a long podcast...

**Daniel Whitenack:** Sure.

**Lukas Biewald:** I normally skip over these details... But honestly, what happened really was I got kind of worried when I was running Figure 8 that I was getting out of date. I remember at my first job there was a big fight between rule-based systems and machine learning systems... And I remember looking at the mid-30's guys or 40-something guys who had kind of invested a lot in rule-based systems... And they were kind of like "Oh, this machine learning stuff is stupid. It's hard to scale, it requires a lot of training data, it's hard to deploy..." And I remember just looking at them thinking "You guys are idiots. You've just committed yourself to this one thing and you can't see that this new thing is better."

\[00:16:22.22\] I hadn't done a lot of training models in a long time; you know, I was running a company... And I was kind of saying the same stuff about deep learning. I was like "Is this really better? It seems really hard to deploy..." and I was kind of looking in the mirror, like "Man, I am out of date. I don't really know what TensorFlow does... I pretend I do, but I haven't messed with it..." I was feeling really bad about that, and then I got myself in an internship at OpenAI, where I worked for a really smart 24-year-old for a little while... And I just was like "Just make me do all your dirty work. I just wanna get back into doing something real." And it was kind of a shocking experience, I think, because I think the tooling had been bad for ML, but it's strikingly, shockingly bad for deep learning. I think it just sort of exacerbates the problems even more... So quickly, my entrepreneur brain is just like "I have to build tools to fix this up."

So I didn't last very long as an intern, because I just really wanted to fix these underlying problems for everyone else... But I'd love to go back. I mean, training models and doing research is so fun. I guess I just don't stick with it very well... \[laughs\]

**Chris Benson:** Before we go on from that point though, I just wanted to draw -- I mean, it's very insightful of you to recognize that that thing that you had noticed before about the older contingent at work, and then recognizing that you were in danger of doing that yourself... And I know I'm definitely older than Daniel, and have certainly found myself in the same position when I was younger, saying "Oh, look at those older people, what they're doing", and then when I got older, I did that, and I recognized it... And I think that's a great lesson for people out there - don't ever do that; no matter what age you're at, don't ever lock down on your technology, don't ever be in love with it, because it's gonna change, and there's gonna be a new best thing out there.

**Daniel Whitenack:** Yeah. I think that there's definitely a balance. Maybe I'm saying this because I'm too stubborn... But I think there's definitely a balance, because there's the side of things -- like, if you're not passionate enough about something and stick with something long enough, it takes a good amount of time to really make a difference in a certain area... But then also, you have to be willing to sort of jump ship onto other things occasionally. So yeah, I definitely think that there's a cycle with that, and...

**Chris Benson:** It's hard to do.

**Daniel Whitenack:** It is hard to do.

**Lukas Biewald:** It's hard to find that sweet spot of committing enough to becoming very good at what you're trying to get done at the moment, and knowing when to shift. It's not an automatic thing. I just wanted to draw that one, it was a great point you made there.

**Daniel Whitenack:** I'm curious if you could go on to -- we do like to get into the weeds sometimes here, but... In that state, when you were doing that internship with OpenAI, and when you were talking about "the tooling", what was your workflow like during that time, in terms of training models and that sort of thing? What were the tools at your disposal for you to use?

**Lukas Biewald:** Totally, yeah. It was funny actually, because I also was working for a 24/25-year-old, and I felt really embarrassed... I was using Emacs, which \[unintelligible 00:19:30.02\] "I'm gonna use VS Code. I'm just gonna use the latest stuff. I can't be seen using these crappy, old tools." \[laughter\]

**Chris Benson:** We're not offending any of the Emacs users out there... \[laughter\]

**Lukas Biewald:** Right, right. I gave up my .emacs files \[unintelligible 00:19:43.23\]

**Daniel Whitenack:** Now it's hardcore...

**Lukas Biewald:** People think it's hardcore, but come on, VS Code is good.

**Daniel Whitenack:** Yeah, VS Code is good, yeah.

**Chris Benson:** A lot of people have moved off of Vim and Emacs, finally, after resisting for years to VS Code. I mean, it's made a big difference in the industry.

**Lukas Biewald:** \[00:20:02.08\] I strongly recommend it.

**Chris Benson:** That's what I use. I moved away from the other stuff into that, so...

**Lukas Biewald:** But there's another one, where you build your .emacs file, if you don't' wanna give it up...

**Daniel Whitenack:** You've invested so much... \[laughter\]

**Lukas Biewald:** Yeah, yeah, exactly... So OpenAI was unique in that they had a ton of compute resources... But at the time, it was actually -- basic stuff like just trying to train across multiple GPUs was an enormous pain. Even setting things up was painful, and I think still is way more painful than it needs to be. You buy a GPU at the store, and then you wanna train a model on it... I mean, expect to wait a day while you go through the latest iteration... And then you have to find something that came out in the last 3-4 months, or else the instructions are gonna be wrong... And this is totally NVIDIA's fault.

**Chris Benson:** \[laughs\] Look at how squirrelly there! But yeah, the startup workflow definitely has room for improvement, absolutely. I've found that as well, over time.

**Daniel Whitenack:** Yeah... And you'd love for those artifacts or implementations from a year and a half ago... It seems like "This is exactly what I wanna do, but I've gotta start over, because of some compatibility issue, or something."

**Lukas Biewald:** Yeah, I thought I would never see a linker error in my life after 2006. But now you see them when you're just trying to get your situation set up... And I think CoLabs and stuff have really helped with this and made the onboarding smoother -- because even this is three years ago maybe; two, three years ago.

**Chris Benson:** Yeah.

**Lukas Biewald:** So, look at me, I'm out of date again. But this wasn't even the problem that I was trying to solve with Weights & Biases initially. The thing that was really striking to me was just that you -- it's really hard to go back and look at a run that you did in the past. This is something that's always been true with any kind of long-running thing, but I think with deep learning your runs often take days. So you want to get a sense for if they're working right away, and you wanna really have a good record of everything that happened, from system metrics, to exactly what was the last commit that went into your code...

Everyone has these notebooks - in their Emacs or VS Code, or maybe a Google Doc if you're really advanced - where they're just kind of typing, "Here's all the things I did, and here's what happened."

**Daniel Whitenack:** Or in file names. Extra-long file names.

**Lukas Biewald:** Yeah, yeah...

**Chris Benson:** You know, that's a really good point as well, the fact that as you move through the different phases of your workflow, are you're kind of doing your research in a notebook, and then you need to deploy it as a software component step, there's still friction in the process in terms of moving through each of those very distinct phases of trying to get your workflow from the very beginning to the very end, and deployed. And I think people still -- everyone kind of customized that quite a lot. There's another opportunity out there for someone.

**Lukas Biewald:** I think there are a lot of opportunities right now in the tooling space for ML. I think it's like -- you know, companies aren't really seriously doing it, and I think every step is basically broken... From visualizing your data, to tracking your data, to tracking your experiments, to gaining deployments with continuous integration, to production monitoring... I think all of these things are huge pain points, and I think there's gonna be a lot of really interesting companies that spring up, solving them in different ways.

**Chris Benson:** I think so.

**Daniel Whitenack:** I'm curious - you talked a little bit about wanting to go into this internship to figure out -- or once you started figuring out that there was this problem, you had to start somewhere with the tooling for a specific thing... Where did you end up landing in terms of the particular rough edges that you wanted to smooth off in the tooling? Where did you focus when you first started thinking about Weights & Biases?

**Lukas Biewald:** It's funny, so the thing that we first started focusing on is not the thing that Weights & Biases is known for... I sort of expected to do a couple different iterations, and hit walls, but I think this is an example of like, you know, the second time you do a company, when you've kind of been in the space for ten years, you have better instincts about what the needs are...

\[00:24:12.27\] So the thing that I started with, which was really what Weights & Biases is known for, is essentially tracking your training. TensorBoard was doing this, but it really only worked with TensorFlow at the time, and it was hard to look at multiple runs, which is really what you want... So they sort of have a way of putting hyper-parameters into the name of the run, which I think is kind of awful; I really don't recommend that... And then it's clearly not designed to show you -- it runs in the context of other runs.

The fact that your model has this accuracy after eight \[unintelligible 00:24:45.11\] it's kind of not that interesting. What's more interesting is how did the accuracy change from the previous thing you did, and then also being able to dive in and look at exactly what was that previous thing you did. That was sort of the core of the beginning of Weights & Biases, and still the thing that people appreciate most about us is saving all the metrics of a run, all the performance metrics - the system metrics and the accuracy loss, and those kinds of performance metrics, and being able to quickly compare them with lots of other runs.

**Chris Benson:** Could you describe that a little bit, how that contextual comparison is realized, and how that's different from previous tools people might have used?

**Lukas Biewald:** Totally. And I think TensorBoard is the best comparison. Let's pick a concrete example - say you're trying to train a self-driving car; say you're doing perception in a self-driving car. So you're looking at these images and you're doing semantic segmentation, where you wanna label each pixel with what's in that pixel - is it a pedestrian, or is it a road, or what's going on? So the first cut of what you can do is as the model trains, you can look at the loss function; whatever that loss function is, you can see if it's going up or down, and hopefully it's going down, because it's what you're optimizing... And you might wanna compare that to other runs you did, maybe with different hyper-parameters, or a different state of the code... Say you have one at a higher learning rate and a lower learning rate - yeah, you wanna see which is better.

Now, what turns out - the second you start to do this, you realize that better or worse is more complicated than you think.

**Daniel Whitenack:** Yeah, how do you define that...?

**Lukas Biewald:** Exactly. So first you're looking at the loss, and you're like "Oh, great. This run has better loss." But then it actually might be that when you look at accuracy, which is a more actionable thing, it completely flips. So the lower learning rate has actually higher accuracy at the end. But then you might say "Well, what is accuracy really like?" Maybe it's just predicting that everywhere is a road, and ignoring the pedestrians, because there's not many pixels that correspond with pedestrians... So now you say "You know what - I don't wanna have anything with under 99.9% pixel accuracy on pedestrians." Maybe you didn't check that the first couple of times you trained your model, so you wanna go back and look at what those were... So the requirements as you do this in the real world - they keep changing as the business scenes change, and you realize that things are different.

So fundamentally what the core Weights & Biases tool does is it tracks all this stuff for you, and it shows it to you in graphs. But then why you might really want this is like, you know, six months from now you've deployed this model into a car, and the car crashes... Now you really wanna know, "Okay, what was that model trained on? What was happening in the training that made you think you could deploy it? Where could things have gone better?" If you don't do this in a systematic way, like with Weights & Biases, you could imagine it's gonna be really hard. If you're just tracking notes in your emacs file, it's probably not gonna include all the detail that you wish you had.

What we try to do is capture lots of stuff passively. We think that when you capture everything passively and you don't put a burden on the person training, you get a lot more useful information... Because usually, you want this information after the fact.

**Daniel Whitenack:** And when you say passively, you're meaning like you don't want a user to decide "Weights & Biases, save this parameter, and save this parameter, but not these other things."

**Lukas Biewald:** Yeah.

**Daniel Whitenack:** \[00:28:09.10\] You wanna enable or disable, rather than having a user click a bunch of boxes for all the things that they wanna save. Is that what you mean?

**Lukas Biewald:** Yeah, I'll give you an example. Fundamentally, the way this works is you import a library, and then a library basically collects lots of system metrics and other metrics as it runs. Kind of similar to TensorBoard, but we collect a lot more stuff. I'll give you an example of the passiveness of it. One thing you should probably do before a big training run is commit your code into Git. So it could just connect each training run you do to the commit SHA, and we do do that if you want us to.

But one thing we've found - because we're talking to people all the time - is most of the time people don't actually commit that code before it runs. So we capture not just the commit SHA, but also a diff against the latest commit SHA. So that way, every time you do a training run, we keep track for you the exact state of the code, the way it was when it trained. That way, a month later you wanna go back and look at something and be absolutely sure what the state of the code was; you can do that, but you never need to think about it.

Once you turn that on one time, now you'll be sure that every single time your model trains, there's a snapshot of exactly the state of the code. And you might say "Well, that's a waste of space", but come on, if you look at the size of training datasets, they're gonna be like petabytes. So you could do this all day long, capture every metric you might care about, all the state of the code, everything going on; you know exactly what kind of hardware it was on... You can capture all this without really making a dent into a modern machine's storage.

**Chris Benson:** Would it be fair -- as you say that, I know that certainly Daniel and I come from a developer background in addition to a data background, and something that we've talked about lots over time is the maturity of DevOps relative to the maturity of data ops. And as you were just explaining that, you're clearly addressing some of that... Is that maybe the core participants in those two arenas are coming from fundamentally different places, do you think? Or those of us who have been developers prior to doing machine learning - we're kind of carrying some of that in, and we try to put that in place... Is this just different constituents that this arises from, and maybe a data scientist wasn't worried about data ops because it wasn't a mature enough field prior to this, but now it's important? What's your take on that?

**Lukas Biewald:** I'll say a couple things on that... First of all, I think data science trains you to be bad at DevOps. It's actually a different thing than engineering, and most of the code you write as a data scientist or an ML practitioner - most of it is throw-away. I can really relate to this, because I came from this world and I was surprised... I remember I got to Yahoo and I checked in some code that actually crashed the search engine, and they were like "Man, you are a moron!"

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** It's a claim to fame though...

**Chris Benson:** That is. That's a good one.

**Daniel Whitenack:** You can work that in to conversation now...

**Lukas Biewald:** Yeah, I mean -- they should have put some more controls around me, honestly... But you don't get trained in testing, and not only that, but what you do get trained is that most of your stuff is throw-away, so you have this very 80/20 rule. "I just wanna write a lot of fast code. Kind of figure out what's going on, and then toss it over the fence to someone to harden it." I think that that breaks now that AI is getting used in so many mission-critical applications, and even applications where someone can get seriously hurt or really bad things could happen.

I think the other thing that happens is that DevOps doesn't really understand machine learning and data science that well, and they're not really prepared for the statistical nature of it. For example, continuous integration tools - they crash if any test fails. And that totally makes sense, from a normal engineering perspective. But it's just not realistic to have a suite of real-world continuous integration tests for a machine learning thing.

\[00:32:02.28\] The machine learning stuff that we put into production - we know that it has a failure rate that's non-zero, so instead we have to deal with that, versus trying to drive the failure rate down to exactly zero... So I think there's a real culture gap, and there's very few people trained in both DevOps and machine learning, and those people make tons of money, as I've seen...

So it's cool when someone has both skills, but it's natural that people don't have both skills... And I think the skills in a way teach you very different styles of development.

**Chris Benson:** As a two-second follow-up to that - as we get to where we're deploying out there, and you're addressing it with the workflow that you guys have been creating, how do you address the use cases, the variability in the use cases in terms of if it is something that is more just kind of typical consumer, then I totally see your point, but there are use cases where you have these models that are starting to go into life and death issues, where people's safety is becoming depended upon it, and they are trained, 99% is not gonna be acceptable... Is there a point there where you evaluate or cross over or acknowledge that in some way? Whether now or in the future, how would you address that kind of variability? You're starting to get models in some many different real-life situations that you have to account for that issue...

**Lukas Biewald:** Well, Weights & Biases mission is to support the ML practitioners to see what's going on. We're not trying to tell you if 95% accuracy is good enough. What we're trying to be sure is that you know what you have, and you know if it's 95% or 99%, and then you can also dig in and say "Okay, this is 99% on roads, but only 8% on pedestrians. I should flag it."

**Chris Benson:** Got it.

**Lukas Biewald:** I also think it would be nice -- it's hard to acknowledge, but I think the industry does have to acknowledge that 100% accuracy in most applications is not attainable, even in life-or-death ones. So I think it's really hard to come out and say "Look, this self-driving car is gonna get it wrong 0.01% of the time", or whatever. People talk about miles between intervention, and it's not infinity miles between intervention. And humans also, by the way, are not 100% accurate, so...

**Chris Benson:** Good point.

**Lukas Biewald:** ...so that's a little bit outside of the scope of what we try to do. But I think fundamentally, as we do more and more complicated things, it's better to acknowledge that errors are inevitable, and have plans to deal with them, than try to claim that there are no errors.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** I'm curious about a different side of variability... Not so much on the performance of the actual model side, but as a package that someone imports into all sorts of different workflows, there's such variety now in terms of the tooling that people are using for their ML workflows... And I see on your website you're talking about integrating Weights & Biases into all sorts of workflows - TensorFlow, PyTorch, Keras, scikit-learn, Hugging Face, Transformers, all sorts of things... Could you speak a little bit to that challenge in terms of -- I'm sure as a company and as a product roadmap it is extremely difficult to understand and navigate how tightly you're integrated with various things versus other things, and how to reasonably support the variety of tooling that's out there in AI right now... How in general do you think about that and approach that?

**Lukas Biewald:** Well, it's a conversation with our customers. When you sign up for Weights & Biases, we really only ask you 2-3 questions. One question is how often do you train models, and if you answer that you train models frequently, then we take very seriously your answer to the next question, which is "What frameworks and other tools do you use?" When we see something like JAX being used by lots of people that train their models frequently, we say "Okay, we should prioritize a good JAX integration.

And you're right, it's tricky. It's nice that you appreciate the work that we do... A lot of people look at what we do and it's just like we generate these graphs really quickly, and making these graphs -- I hope that it's kind of a simple experience for the user, but it's a tough challenge for engineers to make sure that those all kind of reliably generate in a way that's useful to our users, regardless of what framework... I mean, if you've got a framework, Python version -- PyTorch and TensorFlow are both incredibly cavalier about making breaking changes to their libraries, so it's definitely a challenge...

**Daniel Whitenack:** Yeah.

**Break:** \[00:36:33.09\]

**Daniel Whitenack:** Lukas, I would be curious to hear a little bit -- so we talked a lot about experiment tracking, which is, like you say, where you started with this journey, and maybe what Weights & Biases is most known for... But as I'm exploring the website and the feature set that you're supporting, there are some other things. In particular, I see Sweeps, which I think is related to hyper-parameter tuning... And then Artifacts, which is related to dataset versioning.

I'm really curious about the latter one, actually. I'm really passionate about data versioning, actually... So I was curious, when this came about - it seems to me like maybe a couple years ago if I was talking about data versioning, people just had no idea what I was talking about, and now there is this sort of acknowledgment that there's something here, and maybe that's fed into the support of that in Weights & Biases... So could you tell us a little bit about your support for that, and also your thought process around data versioning and how you think about it?

**Lukas Biewald:** Sure. I would say all the things that we add are 100% customer-driven. If you're a practitioner and you want us to make tools for you, come into our Slack channel and talk about what you're doing, and tell us what you need, and we'd love to make things to support that. So that's how all this stuff came about.

I would say hyper-parameter search or hyper-parameter Sweeps - we built it because everyone kept telling us... Yeah, we know this is best practice, we know there's a lot of tools available, but when you'd ask them "Okay, which of these tools are you using? How are you doing it?", they'd all just be like "I'm kind of doing a random search with my own homegrown stuff." When I hear that as an entrepreneur making tools, it's like "Okay, these tools aren't working for you. Why aren't they working for you?", and I think it's because the reality of hyperparameter search is messier than the theory of it.

The math behind doing \[unintelligible 00:39:24.09\] optimization or things like that - it's not so complicated. What is complicated is the real world, where you start to do it in a distributed way, and six of your runs break, and then you decide to change the code mid-way through your search, but you don't wanna throw away your old data... So we've really tried to focus on that, and making it simple to do it simple, to see what's going on.

In fact, you can use other optimization libraries that would even tell you maybe better than ours. You can use Ray Tune, which I think is a fantastic library to do advanced stuff that you can't do with us. So that's how we think about that...

\[00:39:58.19\] I would actually say data versioning is almost the same thought process where people know that they should be versioning their data, they know that it's dangerous to not version their data... You know that you can't have real reproducibility unless you version your data, but I think that all the existing solutions were kind of causing problems. I think Git has the large file store system, which seems like it should be made for this kind of thing, but when we talk to practitioners, most of them weren't actually using that. We kind of dug into why, and it's like - well, a lot of datasets these days are in object stores, so supporting an object store is incredibly important for versioning data, I think.

And then another detail that shouldn't be overlooked is most ML practitioners are not super-fluent with Git. They find Git to be kind of a scary interface. DevOps people find it trivial. In fact, my co-founder Shawn comes from less of an ML background and I'd say more of a DevOps background, and he just constantly makes fun of me for how bad I am at Git. In his view -- I just kind of type in random commands into Git until I break everything, and then ask him to fix this stuff...

But I think it was a little bit eye-opening for him when he was designing the versioning, because he's like "I have to really dumb this down to make something that Lukas can understand and use..."

**Chris Benson:** \[laughs\]

**Lukas Biewald:** Yeah, I think it's a real thing.

**Chris Benson:** You're representing your customers in that way, too. There's something to be said for that.

**Daniel Whitenack:** I remember a couple years ago the R Conference New York, which - they're gonna be having another one here soon, which Chris and I are gonna lead a panel, or moderate a panel on... I remember in that conference they had a Git workshop sort of deal, and it was one of the most popular -- people were just so into it, because there is this sort of like "Yeah, I can create a repo and maybe make an initial commit", but then all this stuff happens, and I have no idea, and get scared...

**Chris Benson:** It gets scary...

**Lukas Biewald:** Yeah, and when stuff gets weird, it's just like "Ugh..." \[laughter\]

**Chris Benson:** No, really - if you haven't been doing professional software development for a while, Git is scary. It really is. I've seen a lot of people getting into the field and they struggle with it, and stuff. So I'm very empathetic to people who are coming from a data science background and they're trying to figure out how to do this, either Git, or something similar to that. It's a new concept, so there's a cultural barrier that has to be surmounted there.

**Lukas Biewald:** Right, right.

**Daniel Whitenack:** Yeah, definitely. So when you were kind of seeing -- and I was looking through your website, there's lots of good stories, and that sort of thing on there... But in terms of success stories with Weights & Biases and the workflow that people used, could you tease us with an example? I know I'm putting you on the spot, but in terms of maybe a team that was trying to roll on their own before, and then was able to switch over to some tooling, maybe a combination of what you offer and other things to accomplish something... Do you have one of those stories you could share?

**Lukas Biewald:** Yeah, totally. I'll tell you one of my favorite ones, because it's so practical and just so great... Although it's been told -- the application has been told a couple of times, so you may have heard of it before... But I feel really proud of it. This is a team at John Deere called Blue River... They basically make a system that looks down at \[unintelligible 00:43:20.12\] in tractors, and if it sees weeds, it sprays the weeds -- I believe it's with fertilizers, so it burns the weeds, and then it becomes fertilizer for the lettuce. So instead of blanketing the fields with pesticides, they aim a sprayer at the weeds.

**Daniel Whitenack:** Yeah, I've seen those videos. It's amazing.

**Lukas Biewald:** And they did a whole case study with that, so I know I can go into detail, and you could maybe post the case study where they actually show their Weights & Biases runs and how they think about it... But when we went in there, they were having the problem of they were training tons and tons of models, and trying to keep track of which models they were making and what they were learning, and then also what was getting put into production... Because it's very high stakes. If you're a farmer, you can't have your crops get killed by your AI weeding machine.

**Daniel Whitenack:** \[00:44:08.23\] Yeah. And a single percentage over hundreds of thousands of acres is not trivial.

**Lukas Biewald:** Yeah, yeah. They're a super-smart team, super-technical... Actually, I remember when we went in there... We had this funny feature where we would try to pull up a web browser to do authentication, and they actually had links installed on their system. This is like a Unix terminal-based web browser \[unintelligible 00:44:30.06\] and I thought "Oh man, there's a bug!"

**Daniel Whitenack:** I know what you're talking about...

**Lukas Biewald:** \[laughs\] So it was kind of a rough initial meeting with them... But they got it working, and then the whole team can look at what they're doing. And I should say, maybe the most important thing for them is that each unit of work, each thing that they try, they put it into a report which they attach to a pull request... So they can go and they can look at -- and it's not necessarily one run. It might be like "Okay, I tried this new thing, and I tried ten different sets of hyper-parameters. I tried a new dataset... Maybe it was a new camera that picked up UV light, and then I tried these ten hyper-parameters with it. Here's what I concluded. The camera was good, we should explore it further." So they'll actually kind of write that all into a report, and then attach it -- and actually put an example report that they gave to \[unintelligible 00:45:19.07\] for a case study. It's really cool to look at; you can see they're trying different types of gradient descent on their dataset.

So that was like the initial case, was them using it to track their experience like that... But then they started to use it to look at their datasets too, because they have so many different datasets and it's constantly being collected in these fields. So they use a versioning system and they attach it to our experiment tracking system to really know the end-to-end reproducibility of the stuff that they're deploying intro tractors.

**Chris Benson:** Pretty cool. As we start winding up, if you could wax poetic a little bit for us for a moment about what you are aspiring to in terms of future of tooling, what are some of the things in your head that you have this vision for, you would like to move into, you're not there yet, but you realize what a big impact it would make... I'd love to see where the future of tooling is going, because I know that will directly affect both Daniel and my lives... Any insight there?

**Lukas Biewald:** Totally. I mean, what I love to do is make simple tools that really help the day-to-day lives of people trying to do practical AI... So I would say the thing that we haven't done, that I'm kind of dying to do, but it's a huge undertaking, is stuff around production monitoring.

We do have some stuff today -- a lot of customers use us implicitly for continuous integration, but we don't support that case explicitly yet; I think that's a big deal... Because AI safety is so important, and I really believe that all the ML practitioners are good people, that care more than society gives them credit for AI safety. I actually think it's really hard. I think these ethical issues are real, but they're hard... And I think actually tooling can help here by showing people what's going on.

It's like developers, when you deploy a bad piece of code... You should improve the systems. I think a lot of the tooling is missing for ML practitioners, and so it's dangerous. So continuous integration is a big one. Production monitoring - detecting things like model drift, or data drift, and things like that... I think that makes me nervous, and should make anyone nervous.

\[unintelligible 00:47:22.17\] had this really evocative talk he gave at one of Figure Eight's conferences, around sort of like a new IDE for ML, that I keep kind of kicking around in my head, where it's like "What would that really mean, to really be able to tweak all the things that go into the model? Not just the hyper-parameters and the code, but maybe even the data that flows into your model."

Those are ideas I have, but these ideas always take forever to actually get into the world, so I don't know... I don't know when we'll get to--

**Chris Benson:** That's what we were looking for... Not today, but down the road; what are people aspiring for today that they might work on in the future without commitment. It's always interesting to hear that.

**Daniel Whitenack:** We'll definitely link to the website of Weights & Biases, and some articles, and other things... And of course, your awesome podcast, which people can find and listen to. I definitely encourage people to do that. It sounds like Weights & Biases has a Slack community that we can link to, where you can connect with them. If you're having trouble finding that, you can always reach out to us as well on our Slack community; you can find that at Changelog.com/community, or on LinkedIn, or Twitter, or anywhere...

I really appreciate the insight today, Lukas. It's been a real joy to talk to you, and I'm looking forward to all the great things that will be coming from Weights & Biases. Thank you so much!

**Lukas Biewald:** Thanks so much! That was fun.
