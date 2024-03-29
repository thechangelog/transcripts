**Daniel Whitenack:** Welcome to Practical AI. I am Daniel Whitenack, data scientist with SIL International, and I'm here with my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great. How's it going, Daniel?

**Daniel Whitenack:** It's going really good. I spent some vacation time doing a little bit of backpacking in Minnesota, so just about the opposite from my day-to-day life, sitting in front of my computer screen. It was a really nice, disconnected time, so I'm happy to have that time. Did you have any good times over Labor Day?

**Chris Benson:** Yeah, I had a good time with the family over Labor Day. We went to a local lake in the Atlanta area, and did a little kind of a beach thing, which was nice. I too am looking forward to a couple of weeks of vacation coming up. I'll be in the U.K. My wife is British, so we spend a lot of time over there. Other than that, lots and lots of business travel, conferences, things like that.

**Daniel Whitenack:** Yeah, definitely. You're keeping busy, for sure. Well, today we have Sherol Chen on the show. She is an ML developer at Google. I met her recently, over the summer; she's doing some really awesome things, and has done some really different things while she's been at Google. I'm really happy to have her on the show today to talk about some of the things that she's doing with Google Cloud, and some other AI things. Welcome, Sherol.

**Sherol Chen:** Hey, nice to meet you.

**Daniel Whitenack:** Yeah, could you just give us maybe just a little bit of background about how you got into computers, and eventually AI, and programming, and ended up at Google, and doing machine learning, and all of these things?

**Sherol Chen:** Yeah, of course. Currently I work at Google, like you said, and my primary focus is AutoML, which has been this up-and-coming practice in machine learning, where you're basically given the label data, and at the end of it you get a predictive model, without having to do very much machine learning in the process.

What brought me here... I guess that story starts with my first computer, which I would actually say was the Nintendo, which kind of dates me, I guess.

**Daniel Whitenack:** \[04:13\] Oh, nice. The original Nintendo.

**Sherol Chen:** The original Nintendo was my first gateway into technology. I have a lot of memories of just playing hours upon hours of games, and being captivated by these virtual worlds, these very pixelated virtual worlds. Not only was it just wondering how it was possible that we could have the input/output, all that feedback coming out of my TV, but thinking and dreaming of how I could make it better. So naturally, I went to a high school that happened to have computer science, and I remember asking "What is computer science?" I was in a classroom eventually of like 4-5 students, that happened to have a particular interest. It wasn't a very widely popular subject area. Then of course, naturally, you go to college.

I think I'd forgotten that I loved video games at some point, or that that was kind of my motivator. And I was late to playing this game, but Final Fantasy 7 really got me back into thinking about these worlds and the stories that they told.

**Daniel Whitenack:** Nice.

**Sherol Chen:** So then I signed up for some research, and I did a research project looking at artificial intelligence and storytelling, which then led me to University of California Santa Cruz, where I studied under Dr. Michael Matthias. He was a leading expert in interactive intelligent dramas, he would call them. He created this game called Facade, which is this very life-like, reactive, natural-language-driven interaction or game, within this story of this couple that you'd go visit them and talk to them. At the time - that was like ten years ago - it was state of the art; there hadn't been anything like that before.

That really motivated me to go and pursue studies under him, so I went to do grad school there. And while I was in grad school, I thought I would be like an academic for the rest of my life; I thought I wanted to be a professor, and in some ways I still wanna be a professor, but... I was in Silicon Valley, and I took an internship with Google, because somebody asked me, like "Why not?", and it totally changed the way I saw the world. I thought of impact in a totally different way.

Like you said, at Google I did a couple different roles. I was at YouTube, working YouTube search as a software engineer, really looking at search algorithms, and the ways that little changes here and there could impact how people use the product. Then I wanted to be more publicly engaged, so I was doing developer advocacy at Google Cloud, working with the machine learning and AI tools. That was also around the time that the ML boom was happening; the big "Oh my gosh, look at all this progress! Look at all the abilities that weren't possible before, enabled with machine learning." That was probably like 2016.

Then I ended up doing a rotation with Google Brain, which is one of the premiere groups working in AI today, working on Project Magenta, which does music and machine learning creativity. Then as I'm digging deeper into these products, that led me to AutoML, which I explained at the beginning. But yeah, that's basically my journey from video games to working in ML at Google.

**Daniel Whitenack:** \[07:56\] That's amazing. One of the things you said was going to Google and experiencing that kind of reset your ideas about impact. Do you mean like in Academia you can have an impact because you can research new things, and release them into the world, in some sense? Is that the kind of impact you're thinking of? Or how do you view impact these days in terms of like the AI work that Google is doing?

**Sherol Chen:** Yeah. I think you're right in that - what we do in Academia is that we write papers, and these papers hopefully are cited by future papers, and people receive them well... And it helps continue to advance the state of the art. And to me, that was very romanticized in my mind. When I went to undergrad, I thought "This is where everyone's just talking about ideas, and challenging one another to do better", and I found that in grad school more so... But then it was kind of all I knew. When you're looking up to your professors, and you're like "Oh, I'm gonna become that someday." You think, in addition to all that, about how you're gonna be a teacher, how you're gonna mentor people, how you're gonna grow a group that way.

I'm almost embarrassed to tell this story, but I honestly didn't know -- I didn't go into computer science thinking "I'm gonna be a software engineer." I wasn't influenced by the dotcom stuff. I really had no idea. I wanted to make video games. I would call up Nintendo's hotline. I think it's 1-800... I had it memorized, like 255-3700. I don't even know if that's right, but it was something like that. And I would ask them "How do I make video games?" That was how detached I was to how the non-academic world functioned.

So when I went to Google, I was really excited because there was a whole new world that I didn't understand a whole lot about. One of the questions they asked me was -- this is really embarrassing... How many users did I think YouTube had? And I was like "Okay, what's a big number?" For me, in research, having 100 users was like a lot of users; too many users. I remember the statistician telling me 100 users is too much data. "You collected too much."

**Daniel Whitenack:** Yeah, I don't think what I coded in grad school ever had 100 users, for sure.

**Sherol Chen:** Yeah, yeah. So the number I gave -- and sometimes I'll even multiply my guess by a factor of 10, because it's so embarrassing... I said "10,000." I didn't even think about it, I said "10,000." And the manager laughed, and then said "Never mind", and then moved on. \[laughter\]

**Daniel Whitenack:** "There's at least 10,000..."

**Chris Benson:** That's a good story.

**Sherol Chen:** Yeah. And that was how new I was, that was how little I knew about the product side of things, the real-world applications. Sometimes when I tell this story I'll say 100,000, because it's a little bit like "Okay, I could see that..." But no, I literally said "10,000."

**Daniel Whitenack:** Yeah, so the scale of the impact of YouTube, and anything you would integrate in YouTube, whether it's AI-related or not, is going to have an impact on a scale that's just totally different than what it is in Academia, basically.

**Sherol Chen:** Absolutely, yeah.

**Chris Benson:** Before I ask a question, I'm actually gonna throwback all the way to the beginning, when you were talking about your childhood and high school... And I think I might be slightly older than you, because my first computer game was the original Atari system... And in high school they were still teaching typing on typewriters.

**Sherol Chen:** Whoa...

**Daniel Whitenack:** Nice!

**Chris Benson:** That was just coming to an end there. I know, I know... And we didn't have a computer in the school at the time, so I'm slightly older than you, but just barely.

**Daniel Whitenack:** I think this is cool - I work with a guy who met his wife messaging back and forth on the University of Michigan mainframe.

**Sherol Chen:** \[12:14\] Wow.

**Daniel Whitenack:** There was no internet, so they let students access the University of Michigan mainframe, and they were two of the students messaging on there. They eventually talked and got married; I thought that was pretty great.

**Chris Benson:** That might be the only mainframe romance story I've ever heard of in my life. \[laughter\] Okay, so I wanna actually get a little clarification, because we are always hearing about everything AI from Google, and there's all these different things - Google Brain, Magenta, TensorFlow, Google AI, Google Cloud, you name it... So how do these different parts of Google that work in AI areas relate to each other? Are some of those the same? Is Google Brain and Google AI the same, or not? How does TensorFlow as a tool fit into that ecosystem? Can you give us a sense of where all these pieces of AI fit in at Google and how they relate?

**Sherol Chen:** Yeah. I would say that that's a really good question, and I definitely have a pretty good insight, having worked with a lot of these teams. Like any big company, there's always the research side and the product side. If you're looking to work in technology and you wanna be a research scientist, then you're looking at being the leading expert in your area. So you're good at doing image recognition, and you have all these publications. If you're looking to be on the product side, oftentimes you're looking for people who are straight up builders, so engineers; they are looking at people who have business sense, they're looking at people who understand users, things like that. In some ways, their objectives are very different. One is looking at being published at NeurIPS, or ICLR, these top machine learning conferences. On the other side of things, you're looking at people who want to create a tool that has a lot of users.

At Google - it's a big company, close to 100,000 employees. It's in the ballpark, I think, and it's all over the world, so a lot of these projects are really -- it's really an opportunity for people to see what really sticks, what's actually gonna show traction. You see a lot of organic emergence of different applications of technology, whether it's VR/AR, whether it's home systems like the Google Assistant, whether it's something like AI and ML. So what is the landscape.

I have heard people say, "You don't want the outside-facing representation of what you do to look like your organizational chart." You don't want the team structure to be directly reflecting of what it is that you're providing for people in the public, to use and to see and to experience. I would say that the way that they're shaping that - and a lot of this is just being good storytellers, being good marketers, to put the tools in places where people need them and will be able to get them the easiest.

So we have Google Cloud - that's where they're moving towards providing business solutions, providing enterprise technologies, things like that. Things that will help your business. Then there's what we call Google AI. Within Google it's called Research in Machine Intelligence. It's basically less looking at how many users we have, but more looking at "Is the work that's coming out of here relevant to the state of the art, or advancing the state of the art?"

\[16:02\] Those are two of the bigger organizations, that we could dissect even further. But then outside of that, there's one more group, which is more of a collection of groups, where you have Google Assistant, Google Photos... A lot of these Google products use machine learning and AI to create better features, to create better user experiences, and things like that.

So Google Cloud I think is pretty straightforward. If you go to the Cloud website, you can look at all the different offerings, and things like that. I think Cloud AI and Google Research is probably where it's kind of like "Okay, where does TensorFlow fit, and where is the AI side of things?" It was Google I/O 2017, and that was when we moved to being an AI-first company.

**Chris Benson:** Yup, I remember.

**Sherol Chen:** Sundar was like "AI-first." I had just joined Google Brain at that time, and we were in a building that was like -- you know, Google is based in Mountain View. We have the Googleplex. It was in the main area, but not in the Googleplex, which is like a set of four buildings. The Google Brain team was actually across the street.

So I joined, Sundar announces "We're AI-first", and all of a sudden they're getting moved to the center of campus. I remember my desk was maybe 30 feet away from Sundar's desk because of that move. And of course, I never really saw Sundar, and there was a wall that separated us, and you couldn't batch into that side of the building. I'm just looking at the blueprints of the building, and I'm like "Oh, I'm pretty close to Sundar. We're probably breathing the same air, or something..." \[laughter\] But I didn't get to see him. Anyways, that's just to give you a sense of topologically how the feel of it is.

TensorFlow basically dwells, lives, it's being developed and improved within the Google Brain team. The Google Brain team was at the time run by this superstar engineer Jeff Dean, that - you know, he's a celebrity inside and outside of Google. I believe Andrew Ng and some other people also were responsible for starting this Google Brain effort... And when we became AI-first, it kind of got moved into a more central location physically, but also as far as focus goes.

Brain isn't the only thing in cloud AI though, right? Because we have groups like Machine Perception, and Descartes, which -- do you guys know Ray Kurzweil?

**Chris Benson:** Yes, absolutely. Yeah. Legend.

**Sherol Chen:** Absolutely, yeah. So Ray Kurzweil has a team, and that team isn't a part of Brain, but he's also doing incredible work. One of my favorite works that came out of Ray Kurzweil's group is the Talk to Books. Ray Kurzweil has these amazing, fantastical aspirations for technology... So his thought is like, you needed to know something in a book. What if you could just ask the book, and say "Hey, book, tell me what's the meaning of life?" and the book can just kind of spit out an answer. So every research lead would bring in their own flavor.

**Chris Benson:** Ironically, that's kind of how the rest of us think about just Google Search in a lot of ways. "Oh, we're just gonna go and find out what the answer is."

**Sherol Chen:** Yeah.

**Chris Benson:** So it's funny to hear it coming out of your mouth there.

**Sherol Chen:** \[19:45\] Totally. So in a team like that - they're thinking "What is the next evolution of search?" Right now it's just -- it's been this keyword pattern-matching, where you look for the exact pattern of characters that you've typed in. But what if there was more of like a semantic reasoning behind search and results that arise from those queries? So when you talk to your Google Assistant, you have the ability to -- it's kind of trying to reason more about your intent behind what you're trying to look for, so they've created this idea of like, you know, rather than keyword search, what about semantic search? And they created this game called Semantris, where you have a list of objects, and then you're trying to semantically match the meanings, and you can knock out different words if you can get a direct match, or there's a one degree of separation between meanings.

**Chris Benson:** Oh, cool.

**Sherol Chen:** Anyways, anecdotally that's something that I've found really delightful. Okay, so then Google Brain, run by Jeff Dean... \[unintelligible 00:20:54.06\] was originally the man in charge for research, but he has left, and Jeff Dean now is running RMI and doing a lot of the research leadership. Google Brain though at the time and now focuses really on how machine learning can make the world better, so there's a huge medical side of it. There are a lot of people looking at medical advancements, or medical use cases for machine learning. There's Project Magenta, which is under the generative models group, where they're looking at how we can generate not only just music and art, but text... And one of the cool use cases of that is generating Wikipedia pages, because you do have a large, well-curated dataset from Wikipedia. So how can you use that to generate text in intuitive ways.

Robotics is another group... So there's all these different use cases. And I think the reason why CloudAI came about was that, as you can tell, there's a lot going on under the hood, and CloudAI is kind of this landing spot, this portal where you can get the CloudAI stuff, where you can get into what Magenta is doing, where you can see what kind of research is coming out of the group in a more user-facing side of things, rather than if you're Jeff Dean, overseeing the research arms and limbs.

**Break:** \[22:21\]

**Daniel Whitenack:** So you've mentioned AutoML a couple times, or auto-machine learning, and I think it would be great if we jump into a little bit of detail on that, because it's definitely come up a few times on the show... But as we were kind of discussing prior to starting the recording, we haven't really talked about it in any sort of detail. So I'm wondering if you could describe AutoML generally, how it's different than how people are used to doing ML maybe... Because some people might think ML is kind of automated in some ways already, in the sense that "Oh, I can get a CSV and then I can go and use random forests from scikit-learn and choose the column that's the labels, and it seems like it kind of just happens for me." So how is AutoML different than that, and maybe also why is it needed in certain scenarios?

**Sherol Chen:** \[24:22\] Yeah, so... Practical AI, right? Let's be practical.

**Daniel Whitenack:** That would be great.

**Sherol Chen:** Yeah, yeah.

**Chris Benson:** Perfect!

**Sherol Chen:** "Now let's take this down the practical route..." So we have machine learning, we have AI - how does that impact the world? How does it affect the everyday person? A lot of people in the U.S. use smartphones, so now if they're traveling abroad, they could take a picture of a menu and get that translated on the spot. Or they don't even have to take a picture; within the computer screen, they can translate from Spanish to English... And a lot of this image recognition or language understanding comes from advanced \[unintelligible 00:25:10.22\] machine learning.

So on the user side there's already a lot of people using it, and what they've found is that a lot of these tools are useful if you want to be able to use voice commands. You don't need to necessarily retrain -- I don't even know how much data they used, but all the data that they require to train that voice model, that voice speech-to-text model, they don't need to necessarily have to go through... Like, every company that needs that doesn't need to go through and do that again. So Google having worked on this technology and using it in its own products makes this available for people.

So you can come in, you have an app that you wanna build, you want it to be voice-activated, or you wanna be able to take images and figure out if they are a kid-friendly image... There are these models that Google has pre-trained, and Google is ensuring that these models work well. So without any data, with just the desire to have this feature, you can already plug and play certain products that Google has in machine learning. Anything that requires vision, or audio processing, or natural language - I think these are very common use cases.

And then on the other end of things, like you were mentioning, you could set up your own Python environment, you could be coding in TensorFlow, you could train your own model, you could feature-engineer on your own, you could hyperparameter on your own, you can look at the models and the precision and recall, and assess how good these models are doing, and then you could do it all over again. And maybe you have something running in production - you can have all the control over every aspect of that. So that would be the other end.

Of course, enterprise cloud technologies - they provide the environments. You have Docker containers, you have virtual machines that can also satisfy that need. What AutoML does is it focused on the middle piece, or at least trying to figure out how you go from one end to the other. So in one end you have pre-trained APIs, where you have basically no control over how that model is making decisions, and then you have build-it-from-scratch, do it all yourself. For a lot of businesses, it's kind of hard to go sometimes from research directly to production, and so trying to find that middle point is what people working in AutoML are trying to figure out. Things like hyperparameter tuning; tuning these weights around to kind of get a feel. This is a highly intuitive thing, where you get a sense of whether this number should be bigger or lower. AutoML, one of the aspects is trying to figure out how to just simply do that.

\[28:02\] With the tools that we have now, it could just be a matter of thinking -- you might be able to figure out safe search, or kid-friendly images; it's something pretty universal for the most part, but maybe not for every culture. You might wanna label your own data, as like "This image isn't safe." Maybe it's not enough to know which pictures have cats in them. You can go to your Google Photos right now and do that. You can go into your Google Photos, type in "cat pictures", get all the cat pictures. But what if you wanna know what type of cat, or what if you wanna know different colors of cats? The specificity that these pre-trained, more general use cases may not provide.

So AutoML, in the most general use case, is basically giving you the opportunity to label your own data, and then feed that in. So you're getting customization without having to build everything out from scratch.

**Daniel Whitenack:** Yeah, so am I correct in saying that AutoML encompasses what could be a lot of things? There's also all this other jargon that we're running across, like meta-learning, learning to learn... And then there's the transfer learning side of things, which is taking pre-trained models and either fine-tuning on an additional small amount of data, or maybe adding layers to a network, or something like that. So is AutoML kind of an encompassing term, that encompasses a lot of those things, or is it more specific or separate from those things?

**Sherol Chen:** Yeah, as we know in AI and ML, jargon is often very controversial sometimes. No, I would say so... The people who are -- you know, learning to learn; these are all groups for which AutoML is the product. They draw upon the findings. And the answer isn't like "How do we make machine learning better?", which is a research question. What it's really doing is trying to figure out "How do we deliver the best prediction model?" Maybe that prediction model is heavily rules-based. They basically figured out in like two if-statements you can figure out the best prediction for a certain problem.

I think AutoML - the goal really is to make sure that you're providing the most accurate results, given the data and the kind of outcomes that you're looking for.

**Daniel Whitenack:** Yeah, so it's kind of a general term that could encompass many different things. You were mentioning hyperparameters, right? There could be this sort of automated way of determining hyperparameters. I know there's maybe more complicated things, like figuring out the right types of nodes, or architecture of your neural network, and that sort of thing... So I guess all of that would fit into AutoML. Would that be appropriate to say, I guess?

**Sherol Chen:** Absolutely. There's this researcher on Google Brain who I'm friends with, so we joke a lot... And we joke that he uses up so much of the computing for the whole company... There's like a leader board for who uses the most computing, throughout all of Google. And one thing I always joke about - I'm like "Oh yeah, how are those hyperparameters doing?" Because it's kind of like minimizing the kind of work that he's doing by joking about that. But hyperparameters tuning is just such a fundamental -- something that people who get their introduction to ML know about, and they know that this is this thing that's been a highly human-intuited practice... So it's kind of this go-to "How would you automate machine learning" type deal.

\[31:56\] But whenever I joke about it, he's just like... I only do it in jest, to minimize it a little bit. It's a very common example to use, but like you said, it's way more than that. What kind of algorithm are you building? What kind of model are you training? What kind of approach? Even within RNNs, there's already so many different ways of applying and using and deploying RRNs, things like that.

**Chris Benson:** That almost takes right into what I had top of my mind anyway, and that is how is AutoML being used in production, and what makes it important for the future of AI and ML? If people are using it in some way out in the real world, where is that gonna lead for them? Where is that gonna take them?

**Sherol Chen:** That's a good question. I was actually talking to one of the gaming partners, a gaming company... And it's interesting, because on the one hand you think AutoML is trying to take a lot of that in-between the statistical work out of it. I was talking to data science teams, and I ultimately feel like AutoML's purpose should be to be able to extend the data scientists' abilities and intuitions... It should give them a sense of which features are the most relevant, things like that.

Sometimes I feel like a lot of this -- there's ML engineers, there's data scientists, they work together (and sometimes they're working separate), but I do think that ultimately it's the data scientist that's kind of serving that AutoML role, for specifically structured data. We're talking about tabular, spreadsheet-like data. I feel like a lot of that work -- the human intuition has been coming from data scientists at large. And the question is "Does AutoML meet the standard of the data scientist? Does it extend the capabilities of the data scientist? Does it give the data scientist, who has been this expert stewarding this area, does it give the data scientist the ability to do more? Do they get a better sense of what direction should we go in in making these decisions?"

I think that when we talk about these problems, we think -- if you're a gaming company and you're looking at use cases for whether a player is plateauing, and really the game is just not enganging anymore, at what point that is, and you're trying to make a prediction that after these actions, this next thing is happening. How do you correct course, so that you make something that is more satisfying to the user? Things like that, where a data scientist would sit and go through "Here are the signals, here are the signs" - I think AutoML would be an additional tool to be able to help arrive at those conclusions in a more efficient way.

**Daniel Whitenack:** So there is some level of expertise that's needed to use AutoML. I was looking at one of the -- I'm not sure where I was seeing this; I think this was one of the examples when I was looking at AutoML on the Google Cloud site... But my life right now, at least, is all about AI and natural language, and I think I was seeing one of the examples or use cases they were talking about was like "Oh, you have this machine translation model maybe that's pre-trained for some language pair, like English to German, but really you need some very specific types of vocabulary translated...", like maybe it's legal vocabulary, or some domain that's not covered well by the data that the model was trained on, so you need to get that model fine-tuned a bit to that vocabulary that's not general vocabulary.

So I'm assuming that to structure that data, to get it in the language pairs that you need it in, to understand and evaluate if your model is doing well, even if you're not setting all the hyperparameters or you're not coding all of the neural network architecture, there's still a level of expertise that's required to set up that experiment, and be able to know if it's working... Is that right?

**Sherol Chen:** \[36:25\] I would say that it really -- we were talking about tabular data earlier... I can kind of walk through a little bit of how that would look... But I would say, to answer your question, that you really need to -- I think the expertise really comes in once the model is trained, because you need to have a sense of whether the model is doing well enough for you. In production, every feature, every use case is gonna be different; and sometimes if you're 99% accurate, that's good. For some of them, that's not good enough.

But I would say the expertise comes in with also -- say the model needs to better, or some change needs to be made; to be able to understand how to engineer or shape the data in a way that's gonna give you a better outcome. There's two different ends of it - you could just trial and error it, and you'll give it data, train it, and then run the predictions and see how well it does. And if it's good enough, from your sense, I would say that that's kind of the bare minimum.

But I think to hold these higher standards and to oversee - what I've said earlier - what the state of the art is doing, I do think it's important to have somebody with data science or statistical understanding or machine learning understanding to be able to see whether... Like, to kind of just not let it run in the wild. This is something that people talk about... AutoML - this is true democratization, because all you have to do is just have the labeled data; show it lots of examples, and then it's gonna make the prediction.

I've talked to the product side of TensorFlow - going back to the research side - and what they would sometimes say is "Is that truly democratization? Because at the end of the day you're relying on Google Cloud AutoML tables to make this decision", and you're controlling these two ends; you get to decide what data goes in and you get to decide whether this prediction model goes into production. But arguably, TensorFlow, this open source tool for machine learning - it's ultimately giving you all the control, and all the power; it's just the learning curve is much higher. So there's the cost benefit of that. But yeah, I would say that I could teach a 13-year-old, with no machine learning understanding, somebody who understands how to point and click and load in files, how to train their own model, and give them kind of an intuition of how that should evaluate and how to test that out.

**Chris Benson:** One of the things I'm wondering... I'm pretty interested, and I know in a few minutes I'm gonna ask you to take us through an example, if you would... But before we get to there, what are some of the disadvantages maybe for AutoML? Would interpretability be one of those, and are there certain kinds of domains for which it might not be the most suitable things? And I guess, since I'm talking about what is it potentially not best suited for, what are some of the biggest research areas, the biggest open questions that you guys are taking AutoML into? What's it challenged on and where do you see it going in the future in terms of applicability?

**Sherol Chen:** \[39:57\] Yeah, I guess in the spirit of AI, I'll throw out more buzzwords, like "humans-in-a-loop", and "mixed-initiative co-creative systems." \[laughter\]

**Daniel Whitenack:** Differential privacy.

**Sherol Chen:** Yeah. I think the question I get asked the most when I'm working with data scientists, or showing teams, customers, partners, people who are already or want to use machine learning - when I show them these tools, you get kind of a range of questions. If somebody is more on the data science/machine learning side, they'll say things like "What if I wanna be able to get in there and make some changes?" Honestly, this tool launched -- AutoML tables for tabular data launched in April of this year. So it's changed a lot already since then. It's not been that long, but it's constantly changing.

But right now what is available to you is once the model is trained, you can call a REST API; you can export the model as a TensorFlow package, and download it onto your own machine and run it from there. There's things like that that you can do. But what we get asked often is "Can you give us more information? We want more analytics, we wanna see how well the features are doing in more detail...", and that is totally under the hood. You don't have access to that. If you wanted to, you couldn't really tune the hyperparameters in this case. It's really just giving you the endpoints of machine learning, from training to inference.

So I would say that that's probably one of the drawbacks - you're ultimately not getting the amount of control that you would if you were building your own model from scratch. And that question of control, or at least intuition - you said interpretability, and understanding why it's making these decisions - is even more abstract. It's almost like by design it's trying to reduce complexity by not showing you these things.

But again, this concept of humans-in-the-loop, or understanding what kind of controls do we want... The whole point of machine learning - and it is almost seen in researches - the more humans are involved, the more they're gonna mess it up. But as we reintroduce -- Project Magenta was focused on creating generative tools, extensions of humans. So this concept of what kind of control the human wants is very important. The problem is that machine learning can get very complicated very quickly... So either people are just overwhelmed with the burden of choice that they have, and not really understanding how it all works together, or it's like we're kind of taking that away, so they can still make decisions without taking for granted all this stuff that happens in between, if that makes sense.

**Break:** \[43:01\]

**Daniel Whitenack:** So I've never used AutoML, other than just kind of browsing around the website and looking at some examples, in very general detail. I was wondering if you could walk us through -- if I'm going to go implement my first AutoML application or workflow, what are the steps I go through? At least with Google's AutoML tools.

**Sherol Chen:** Yeah, of course. And yeah, Google is not the only company that's offering these capabilities... But yeah, it definitely starts with what you've been saying earlier about how you have a certain language - say you're a German doctor and you need a tool that recognizes that context; or you're searching for -- cat and food pictures is general, but maybe you're an automotive manufacturer and you have all this label data of car parts, that isn't gonna show up in the more general use cases of the pre-trained models.

So what you need to do is -- you have this dataset, and you know this dataset is good and accurate. What you would do -- and in this case let's use... I've talked a lot about tabular data. So we're using spreadsheet data. Spreadsheet is something that almost everybody uses today... But in this case, what feature we're looking to establish within a spreadsheet is the ability to select a column in a spreadsheet, and say "Given all these other columns, can you predict what the value of this column is gonna be?" It could be categorical, it could be numerical...

The example that I've been using a lot is -- one of the open datasets that we have is a banking dataset that shows different types of banking customers, and things from how often they deposit, to what their income is, to what kind of jobs they have... And then trying to infer which banking customer is most likely to turn on direct deposit, so they're gonna have their paychecks directly go to the bank. So what you would do is you would find, first of all -- we talked about CSV files; of course, this is Google, so you could have your data in BigQuery, and you just give it the BigQuery ID.

You go to AutoML tables, and you would load in that dataset; you would import it, and it will be labeled, it will be either categories, or numbers, or text... And from there, you have the opportunity to look at the different column names. From the column names you can then nullify or select your features. In this case they have things like age, education, balance, housing, loans... Things like that. From there, you look at each of the column types and you select one to be the target. In this case we're gonna select direct deposit. This is like a true/false, like "Does this person use direct deposit or do they not?"

Then there's other analytics you can look at. It gives you the opportunity to see the spread, or whether there's any columns that have missing values or invalid values, things like that, where you can remove -- and this is where a data scientist \[unintelligible 00:47:22.03\] these kinds of tools actually are very useful, because they often have data... They have lines and lines of data, for which some of the data might not even be valid. So being able to detect that automatically would be very useful for them.

From that point on you would just then train the model, and the selection you'd make there is "How long do you feel like training for?" Usually one hour, honestly -- these are approximations, and it changes case-by-case. But an example, for this case - I would say for 4,000 lines of input, you could train for an hour and you'll get a decent result. You'll get 95% accuracy for predicting whether or not someone has direct deposit.

\[48:10\] Once it's trained, you select that threshold. If it finishes earlier -- of course it's gonna detect things like over-fitting, when it's just kind of reaching diminishing returns, so it will terminate early as well, if it needs to. But at the end of that you get an evaluation. So you look at -- there's the recall, there's precision, there's looking at the true positive rates and the false-positive rates, there's the accuracy... So in this case, this model that I'm just gonna pull up on right now - this model has an accuracy of 91%, which is pretty good.

Again, case-by-case - what is your use case? What is your threshold in production? And it's gonna differ. It'll also show you feature importance, how the labels are doing, and you can then -- basically, you could deploy it right then and there; you could just deploy it within AutoML and then you can run online predictions, you can run batch predictions, or you can export the model. Like I said earlier, you could export it; it will be a TensorFlow package. You can run the model in a Docker container, you could take that Docker container, you can download it onto your local machine, or you can just not do any of that and just use the REST API, and be able to make predictions that way.

So that gives you the end-to-end -- basically, once you load it in and you click Train, and the training completes, you're basically ready to... And you have to deploy it as well, but you're ready for online predictions after those few steps.

**Chris Benson:** Just to clarify, to make sure... I know Daniel and I have come at things from more of a framework perspective, and using TensorFlow or PyTorch or one of the other frameworks over time... In this case that you're talking about, you're not really doing that at all, right? AutoML is its own process, and you're selecting the data from BigQuery or elsewhere, pulling it in, and essentially producing a product at the end in the form of a model that you can go use? Is that fair, that it is a parallel path, versus an integrative path with whatever framework you're using?

**Sherol Chen:** Absolutely, yeah. You're loading the data, you click a button that says Train, and then an hour later you have this model and you can look at the stats for it, and then you're online after it's deployed. So it's a few clicks. I mean, getting the data is non-trivial, I would say, and then makign sure that the model is actually performing the way you want it to is also non-trivial. But yeah, it is a few clicks away.

What you would normally do if you had maybe even like a TensorFlow notebook - you would still have the ability to choose the type of approach you wanna use, and then change the values around a little bit. But in this case you don't really have that. You get to select the target of what you're predicting for. But that's about it.

**Daniel Whitenack:** Yeah, I definitely see what you're saying about the expertise that's needed... Because if you're looking at a screen and you're getting first of all a package out, or a Docker container out, you need to understand how to work with those things; or like REST APIs. So there's engineering expertise there, of course. But even if you're presented with a screen and it says "Oh, here's precision, and recall", and these different things, there has to be a level of understanding of those things to be able to understand if your model is really doing what you want it to do, like you said.

\[51:50\] If I'm thinking about my AI workflow or machine learning workflow, there's of course always the data side of things, which is still gonna be in some cases hard, like you're saying here... Because the data quality is gonna influence things. There's the training process, which if you do it manually, it might involve, like you were saying, hyperparameter tuning, trying out a bunch of different architectures or models, and that sort of thing, to where you get something that works... Then you have to evaluate that and then put it into production. It seems like here -- you're really greasing the wheels around that training process side of things, where you don't have to think as much about the architecture, the specific model, the hyperparameters... And then you're also helping a bit in terms of productionizing that, in the sense of making a REST API available, and that sort of thing. So you can spend a lot more time thinking about the data and the type of model that you want out, rather than those sorts of architectures, and other things.

**Sherol Chen:** Yeah, that's the idea, is to make that more accessible, to give people the opportunity to use it at that level of abstraction. And I think at some point we're trying to look at the full sense of how much control, and what kind of control we wanna have as we create these models as well.

**Daniel Whitenack:** Cool, yeah. To wrap up here - I think this has been great; I've learned a lot going through this.

**Chris Benson:** Me too.

**Daniel Whitenack:** I definitely want to try out some of these things... So I guess to end up with some useful things, I was wondering if you could just kind of recommend -- thinking about someone that's maybe wanting to try out these sorts of AutoML techniques, what the easiest way for them to try out those things are. Maybe there's tutorials, or notebooks (I don't know what the interface is) to try those things. And then also, if people are interested in learning generally about maybe the methods behind AutoML, and learning to learn things, and automated hyperparameter tuning, if there's any specific places that you could point them to?

**Sherol Chen:** \[54:11\] Yeah. For people who wanna know about AutoML in general, GoogleAI, the portal - they link to one of the groups. One of the researchers that I hear a lot working in this area is Quoc Le. He's a Google Brain research scientist that has a team of people working in auto-machine learning. So anything under him, any of his publications I think would give you an understanding of the state of the art within that area.

For people who wanna try it out - if you go to cloud.google.com/automl, it'll bring you to all things AutoML that is available as tools for people to use. It gives you a list of the different applications or verticals. There's a site where you have AutoML vision, AutoML video intelligence; this is - again, you're providing your own labeled data. There's language, so AutoML natural language, AutoML translation, and then structured data, which is what we've talked about today - AutoML tables... There's a few customer testimonies, we can see how it's being used, and a little bit of a description. Then if you go to structured data there's a video narrated by me. I pulled together this data for explaining the basics of it.

**Daniel Whitenack:** Oh, sweet.

**Sherol Chen:** But if you wanna try it, again, you would choose from those categories. So if you choose AutoML tables, there'll be the opportunity -- it'll kind of pull up the UI in the cloud console, so of course you'll have to have a Google Cloud platform account... But you can train for free for up to a certain amount, to kind of try it out for yourself. And then actually the cost isn't very much. I'm not on the sales side, so I actually don't know the exact numbers... But every time I've talked to a solutions engineer and heard them quote, it's very low amounts of money once you actually wanna get it going. But yeah, I do know that there's an amount that you get to use for free.

So if you just wanna check it out, try it out yourself, it's pretty accessible. And even if not that, if you wanna even try some of the pre-trained APIs, like you wanna upload a cat picture and see if it knows your cat is a cat, you can just do that within the web. So if you just wanna see how well these pre-trained ones work, they have online demos within the website as well.

**Daniel Whitenack:** Awesome. Well, thanks for pointing those things out. We'll definitely share those in the show links, so make sure and check out the show links. We'll put those links there and you can try out AutoML. And definitely consider joining our community somehow; you can go to Changelog.com/community, and we have a Slack team where you can chat about AutoML, and Practical AI, and all those things. We also are active on Twitter and LinkedIn, so make sure you engage with us, tell us what you're using AutoML for, or where you've found it useful, or what research you're interested in.

Thank you so much, Sherol, for joining us. Really great conversation, it was really great to hear your story, hear about some of the things you're doing, and the things Google is doing in AutoML. Thank you for taking time.

**Chris Benson:** Thanks a lot.

**Sherol Chen:** Yeah, thank you.
