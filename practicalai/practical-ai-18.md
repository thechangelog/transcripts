**Chris Benson:** Welcome to Practical AI. This is Chris Benson, and with me is Daniel Whitenack. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. How about with you, Chris?

**Chris Benson:** Doing pretty good. I'm looking forward to going through all these cool new stories we have today. What have you been up to lately?

**Daniel Whitenack:** I've been doing a lot of learning myself... I've been doing a lot of learning about graph-structured data. I'll actually mention a couple of things related to that later in the episode. I've also been working and learning a little bit about Vega, the data visualization library. I think I mentioned it in a previous episode...

**Chris Benson:** Yeah, you did.

**Daniel Whitenack:** I've had a desire for a long time to learn D3, but I have no experience at all with Javascript... But Vega is this cool data visualization library that I think actually uses D3 under the hood, but essentially, the interface for the data visualization creator is JSON, which I am perfectly fine with... So that was a lot more approachable for me, and yet you can still get these really cool, interactive, appealing data visualizations out of it. So I've been kind of tailoring some of my graph data into that world, and that's been a lot of fun. What about you?

**Chris Benson:** Well, technically, I've had my TensorFlow tutorials tab open a lot this week, and I've been doing some of the tutorials that I hadn't gotten around to, that I've been meaning to for a while, procrastinated on... But I'm also getting ready to go to Nashville this weekend. Vanderbilt University, the Women in Computing Group sponsors the Emerge conference, where they talk about emerging technologies, they're talking about AI... I am really looking forward to going up there and talking about AI, and actually talking a little bit about the world that my daughter, Athena, is gonna grow up in. I'm really excited about that.

**Daniel Whitenack:** Yeah, that's awesome. That sounds like a great opportunity. I would tell you to get some Martin's Bar-B-Que, but as you and I both don't eat meat, that's probably not gonna do any good, but...

**Chris Benson:** Yup... Yeah, barbecue doesn't work... At least for me, for a vegan.

**Daniel Whitenack:** Yeah, for us both. But I'm sure you'll find some other interesting things.

**Chris Benson:** I will find suitable rabbit food to eat.

**Daniel Whitenack:** \[00:03:43.26\] \[laughs\] Let's get into some news and updates here. Again, for those new listeners, we do these news and updates shows to highlight some of the things that have come across our radar in the AI world. The first of those for me was this article - which I'm sure information is published about it elsewhere, but where I saw it was on NPR... They have this article titled "AI-produced portrait will go up for auction at Christie's."

Essentially, there's an art collective that call themselves Obvious. They say that they make paintings using artificial intelligence; they've been doing a series of these... And they have a picture of the painting; it looks like rough person, in an old masters sort of style... It kind of looks like a clergyman, or something like that. Then in the bottom right-hand corner of the painting there's this math formula... So that's probably one indication that it's not quite a normal picture, but... Anyway, there's this painting, and it's going out for auction, and like I say, they've already sold one of these, but this one is estimated to sell for around 7k-10k.

I think this is pretty interesting. What do you think, Chris? Would you hang this in your house?

**Chris Benson:** You know, I probably would. Now, I will say that I know nothing about art. I never took art history, so I'm just coming at it as your every day guy, looking at it... But if I like it, I'll certainly hang it up. I find this really interesting, and it's similar to some of the other things that we've seen lately about art and different creative pursuits being attempted in the world of AI.

A recent thing that I had heard - and I can't remember exactly where I heard it, but it was about AI-produced music being compared, where they were kind of recreating classical music that the great masters had produced. They would let people listen to it, and they would either buy some as the AI was maybe created by the human master, or vice-versa, and they were switching that up with different groups, and they found that people tended to follow their biases, and often times thinking that humans would always be better than AI, but if they switched them behind the scenes on them, they would stick with their biases, even though they were listening to the other one. I hope that made sense...

**Daniel Whitenack:** Yeah, it's interesting.

**Chris Benson:** It really made me start to believe that I think that there will be types of creativity that AI does very well at... And you know what, if it can create beautiful art like this, I would certainly hang it in my house, especially if it is less expensive than buying at the art gallery.

**Daniel Whitenack:** Yeah. I mean, I think this is something not totally new, in the sense that we've had computer and machine-generated music and other things in the past... A lot of that is digital signal processing, and other things that have been utilized to create new types of sounds, and soundscapes, and people seem alright with that. I think that this is kind of new for people, in the sense that this art collective -- I don't know what you would call the people in this case, if they're artists... I guess they're artists. The artists that created this AI that created the painting, they really wanted to give the AI a lot of free rein in terms of what it generated, and kind of take themselves out of the picture, I guess.

And it seems like they do give a little bit of technical explanation; it's not a technical article... Maybe there is another technical one somewhere that listeners can point us to, but... They do say that they fed into the system a dataset of 15,000 portraits painted between the 14th century to the 20th century. The generator makes a new image based on the set, then a discriminator tries to spot differences with the human-made image and the one created by the generator... So there's definitely kind of a feedback thing going on here with these models.

There does seem to be a lot of interesting tech behind it, and obviously, it is creating something of value, whether people wanna say it's a value or not... Because people are assigning it a value, right? $7,000 to $10,000. Yeah, it's super-interesting.

**Chris Benson:** \[00:07:59.16\] And just for listeners who may not have picked up on it, you were referring to generative adversarial networks, which are also known as GANs, when you were mentioning generators and discriminators... That architecture seems to be really leading the way in creative efforts here.

**Daniel Whitenack:** Yeah, definitely. Hopefully, we can have a show that talks about that sometime...

**Chris Benson:** That would be a great episode.

**Daniel Whitenack:** Yeah, it would be. I would be interested to hear the make-up of this team. Obviously, they have very technical people on the team. I imagine that they teach in art school, right? I would be really interested to hear the make-up of their team, if they have a combination of artists and data scientists, or AI people... I'm not sure. I would be interested to hear that, and hear how that maps to teams we see emerging in the industry in general.

**Chris Benson:** Yeah. I think this kind of AI-created art is gonna become very common in the days ahead... So it will probably become perfectly normal for us in the not-so-distant future.

**Daniel Whitenack:** Yeah, and speaking of AI-generated faces - or maybe not generated faces, but faces in AI, you ran across something we were just discussing before this show, that was pretty interesting, maybe more on the a little bit disturbing or alarming side... Tell us a little bit about that.

**Chris Benson:** I'm actually gonna lead with my last point and say this is another thing that I think is gonna become extremely common in the days ahead. There is a company called Magic Leap, who has a personal assistant that is very much like Apple's Siri or Amazon Alexa... It's kind of grounded in AI and augmented reality, and they have named theirs Mica. Apparently, Mica looks and acts human, and she can give you -- and when I say "she", if you look at the pictures that they have here, it is a woman... And if you interact with her, you can either do voice-only, or apparently they have a pair of augmented reality glasses called Magic Leap One. If you put those on, then you can actually see her in front of you, and you can interact with her.

Apparently - they note in the article that - people that are interacting with her in this augmented reality will often times... Like, if she leans in, they'll kind of lean back from a personal space standpoint, and truly act as though they are dealing with a human being beside them. Very interesting, and a bit creepy maybe for us... I'm betting that my six-year-old daughter won't find it so creepy when she gets older, because I think they'll be ubiquitous. I think she's grow up not knowing a world without them all over the place.

**Daniel Whitenack:** Yeah, and I think it's one of those things -- and I'm not a UI/UX-type person, although I do value design, but I know that there's this kind of principle (I forget, I think it even has a name), where if you try to make something look human and you slightly are off, then it comes super-creepy and weird, whereas if you just created something that was really avatar-like and obviously not human, but kind of mimicking a human, then that could actually come off a little bit better in the user experience. It's interesting to see people go both of those directions. I don't know which will kind of win out.

I don't wanna be interacting with a lot of Micas in the future, but like you say, maybe that's something that will just become commonplace.

**Chris Benson:** As we are approaching Halloween as this episode comes out, I'm going to challenge our listeners to either get a picture of Mica or any other human-like personal assistant out there and put in our Slack channel your version of the avatar for Halloween. In other words, make your change -- let's create a meme for the next week.

**Daniel Whitenack:** Sounds good. Moving on to a set of things that I have been running across, and really, I think I've been exposed to some of these things because, as I mentioned in my personal work with the non-profit SIL International, I've been doing a lot of work with graph-structured data, specifically in the language space, so language families and populations, how they're related, what countries they're in, what resources are available in those countries, who is writing those resources, where they're coming from, what countries they're coming from... So this very dense information that's represented in a graph structure.

\[00:12:21.11\] Obviously, as I've been going through that, various ways that we could apply AI and machine learning have popped up, and I've been interested to see over the past couple weeks a bunch of articles from people that I didn't know were really working in graph data and machine learning pop up... One of those is this article which I actually saw on LinkedIn, but it's from Helena Deus (sorry for mispronouncing the name) from Elsevier, which is the company that -- at least one company that has journal articles and a bunch of other tech in Academia.

She wrote this summary stemming from the International Semantic Web Conference in Monterey, California... And her view on the state of things is that people are really interested in graph-structured data, and people are using machine learning on graph-structured data. She provides a lot of great links to things that people are doing, including helping people find relevant healthcare information and health data in knowledge graphs. There's also ones that are using graph-structured data to find effective drugs for incurable diseases, there's people using graphs to kind of analyze documents and find related things, of course, and find groupings within social networks and all of that stuff that maybe is more obvious to us... But then she also gives some references to people that are doing deep learning and machine learning on graph structures.

Another thing that I saw that's related to that is this Semantic Scholar Project from the Allen Institute for AI, where they're really using graph-structured data and AI to help guide people to relevant academic works and scientific works... Because it's really hard to find that, as you're searching through all these different papers from all sorts of journals...

**Chris Benson:** Oh, yeah...

**Daniel Whitenack:** So that's really cool to see. They provide a bunch of tooling around that. And then even from DeepMind. DeepMind came out and open-sourced this Graph Nets library. It's on GitHub at deepmind/graph\_nets. This is a library for using TensorFlow on graph-structured data. To be clear, this is not -- I mean, there's still a computational graph within TensorFlow in many cases, but this is actually using TensorFlow models on graph-structured data. So a graph is your input, a graph is your output. They have open-sourced this, but there's also some really cool things to play with. There's some collaboratory notebooks where they can show you how to figure out and learn the fastest or shortest path between things in a graph, like in a social network or a graph of health resources, or whatever it is... So I would recommend taking a look at that, and in general, take a look at some of this stuff going on with graph-structured data. I think there's a lot of interesting work going on.

**Chris Benson:** Yeah, and it's interesting - you just pointed out that this is to apply your own grpahs. We think of graph data a lot, but we tend to think of it as being part of the framework or the model, the architecture that we're in. So as you were talking, it made me realize that I actually have a lot to learn on that, so I'm definitely gonna dig into these links after the episode and try to ramp up on it myself.

**Daniel Whitenack:** Awesome, yeah.

**Chris Benson:** \[00:15:50.05\] So I ran across an article this past week from MIT - and it was actually on news.mit.edu - and they have announced that they are now going to build the new Stephen A. Schwarzman College of Computing. Initially, just hearing that, you may say "Okay, well, that's what MIT does - they do computing", but this is a little bit of a different approach to setting up a new college. They received a 350 million dollar foundational gift from Mr. Schwarzman, who happens to be the chairman and CEO of BlackStone. Then on top of that, they have what amounts to a one billion dollar commitment.

What they're trying to do here with this new college of computing is to build an interdisciplinary school around AI and the various fields that it touches on, to try to kind of drive things into where we're seeing the future go as we're living it right now. The AI world has really revolutionized education in that space, and some of the things that MIT notes is that they want to reorient - and I'm reading from the article when I say this - MIT to bring the power of computing and AI to all fields of study at MIT, allow the future of computing and AI to be shaped by the insights from all disciplines. They have 50 new faculty positions to support it, there's a shared structure with other schools that they're doing, and they're really looking at trying to produce students that can operate in this interdisciplinary approach.

Personally, I think that's fantastic, because in my own experience, AI touches on other fields almost every time you use it. It's never a standalone thing by itself, it always intersects other areas that you're using it on. What do you think, Daniel?

**Daniel Whitenack:** I think this is great. I'm glad that I came from an academic and a physics, and I really enjoyed physics, I'm really glad that I spent my time in that world... But what I tell people when I talk to them about Academia and different disciplines, different departments within Academia is that physics is almost in a lull, in the sense that there hasn't been really crazy paradigm-shifting stuff going on for a little while, so it's maybe not receiving quite as much funding, or having as much enthusiasm in terms of grad students going into physics, and all that stuff... But on the other hand, computer science, especially with AI, and then also in some ways biology, are really seeing this surge of enthusiasm, and I think this is one of the evidences of this. I mean, 15 new faculty members is crazy.

One of the things that I'm hoping - they do talk about education here, and I'm hoping that along with some of the stuff that MIT has already released, that they're able to release some of these resources, whether it be lectures, or tools, or documentation, or other things to the community at large, so that we might be able to benefit from this work as well... Because I know I love schooling, I love learning, and I'd like to maybe go back to MIT and get this degree, but I imagine that probably where we all intersect with it is with whatever resources they release to the community.

**Chris Benson:** I really envy the students that are just going into college or graduate school this moment in time, because just in the last three years, education around computing and AI and related fields has changed so dramatically and really taken off, that if you came out of school five years ago, the curriculum that you went through has already changed since then. So the rest of us that are past school at this point are having to continue to learn and catch up and do that, so I almost wish I could transport myself back to the beginning of college right now and just experience this, because it's hard for me to imagine a better way to spend the time.

**Daniel Whitenack:** Yeah, definitely. And speaking of spending our time in community stuff, in our last news and updates show I mentioned a few conferences and CFP's that were open, and I wanna continue to do that. I'd really encourage our listeners and encourage myself to make the effort to get out into the community, to meet in real life and have discussions with your AI community, learn from some of the people that are working in the space hear some great talks...

\[00:20:07.09\] The conference that I wanted to mention this time around is csv,conf,v4, which is going to be May 8th-9th, 2019 in Portland, Oregon. This is a conference that actually I was aware of last year, but I think I had a conflict with some other events, so I wasn't able to go... But it's one that I'm definitely interested in attending this following year. It looks like their CFP is open, you can submit a talk, and it looks like just a really great, fun conference. They even have a mascot, the Comma Llama, which seems pretty exciting...

**Chris Benson:** That is cool!

**Daniel Whitenack:** So if you're a fan of data or llamas, this is the conference for you. But yeah, it's not only about CSVs, and maybe you're thinking of spreadsheets or something, but I think it's a non-profit community conference, which is really great, and there's a lot of diverse topics. They're talking about data sharing and data analysis from science, journalism, government and open source, and I think it would be a really great conference to go to to get exposed to a lot of different ways that data analysis and AI is being used across the industry, how data is being shared, all of the subtleties that go along with that... I'm excited, and I'm gonna try to submit a talk and hopefully I can make it there.

**Chris Benson:** That sounds good, I think I'll do the same. You brought up a good point a moment ago, and that is just getting involved in your community, to take a second and share an experience I had... Back in late 2016 I was deeply interested in this space, and I happened to be in Atlanta, so I looked around at different meetups and different groups, and no one was really tackling what I was interested in directly in these meetups... And I thought, "Well, I'm gonna start a deep learning meetup. I have no idea if anybody will ever show up, but I'll go ahead and give it a shot, and if it doesn't work out, it doesn't work out." It has been hugely successful, and that's just one case.

The AI world, deep learning, machine learning, data science world - there are so many people... You don't have to have a Ph.D. in these fields to be able to enjoy it, and so I would encourage anyone - do what I did, and you might be surprised at how many people will come out. I was shocked that we would have 60 to 120 people show up in person at any event. It was almost overwhelming, and I wasn't sure anybody would show up when I started.

Wherever you happen to be, I would encourage you to go out and either start a meetup or some similar group and get to know the people in your area or your region that are interested in this, and you can help each other get along. So thank you, Daniel, very much for bringing up that suggestion.

**Daniel Whitenack:** Definitely. Yeah, I totally agree with everything you just mentioned.

**Chris Benson:** I will dive into the last article before we go into learning resources... Periodically, we will talk about the world of medicine being impacted by AI; it's come up in several episodes prior. The physics world had an article called "Deep learning algorithm identifies dense tissue in mammograms." The Massachusetts Institute of Technology (MIT) and the Massachusetts General Hospital developed a deep learning algorithm working together that assesses breast density in mammograms, and it does so very reliably. This provides a tremendous tool for mammographers - if I'm saying that right; doctors in this field - to be able to use to help save lives.

Apparently - and I wasn't aware of this specifically before I read the article, but dense breast tissue apparently masks cancers on mammograms, the common mammograms that people are getting every day these days. It makes the screening more difficult, and apparently that can be an independent risk factor for breast cancer, the presence of it. In this case, the researchers trained and tested the algorithm on a data set that was 58,000 digital screenings that were mammograms. They divided that up into 41,000 for training and 8,600 for testing, and then during the training, the algorithm was given random mammograms to analyze, and in doing so was able to predict the most likely density category, which enables these doctors to save lives.

\[00:24:10.23\] This inspires me. I come from a family full of women; I'm the only boy, I have four sisters, and I have a daughter as well, and my wife, and my mother, and I see the impact of these things in their daily life, so I was truly inspired by what's happening in this field, and the fact that these doctors are getting better and better tools every day.

**Daniel Whitenack:** Yeah, this is awesome. One of things I was just reading through while you were talking is there's a quote in an article that says "Then when radiologists view a scan at their workstations, they can see the model's assigned rating, which they can accept or reject", and I think one of the big things that is emphasized here which I'm really glad to see is that this is really an AI augmentation of something the radiologists are doing; it's helping them actually do their job better, and it seems like the radiologists are very accepting of that. They want to do their job faster, they want to make better predictions, because obviously they care about their patients, and there's a lot of pressure on them as well. This is really a welcome AI augmentation, it's not an article saying "We're going to replace all radiologists with this sort of modeling." It's an augmentation that is actually very welcome, and makes things faster and cheaper and easier and better. I think that's a really important point to mention.

**Chris Benson:** Yeah, it's AI for good, and it shows the fact that it doesn't have to be an either/or proposition. It's not humans versus the AI, like so many people are always putting out there; it's humans + AI make a much greater capability. I love seeing these examples of AI for good that can truly have a massive impact through our society.

**Daniel Whitenack:** Awesome. Well, let's turn now to learning resources, like we do in each of these news and updates shows - we provide some learning resources. I was just talking to a student the other day, and I think that there is a kind of stereotype that us working in AI, we've got all the knowledge built up in our brains and we're never having to consult the internet for things... But I always have Stack Overflow open in a tab, and my Slack channels are open in a tab, and forums and GitHub issues and all of those things... We all need to constantly be learning from one another, and we wanna share some of those resources with you.

One of the ones that actually came up this week... I'm teaching a corporate workshop, and one of the students in that workshop - we were going through learning rate, rate regularization, and some of these concepts that can be hard also in terms of just the jargon that you have to build up... And one of the students, they found the Neural Network Playground at playground.tensorflow.org, and was saying that it was really helpful for them as they were thinking about the different components that go into defining your model and the training process - number of epics, number of hidden layers, regularization, regularization rate... And I agree, I think that this Neural Network Playground - it's been around for a while, actually; I remember it--

**Chris Benson:** I used it, I remember.

**Daniel Whitenack:** Yeah, it's been around for quite a while... It is kind of interesting in the visualization - it's a really nice-looking visualization, but I think even more so as you're learning a lot of this jargon, it can really help you firm up what is regularization rate and learning rate - how are they different? There are these two rates - what does one do, what does the other one do? Those sorts of questions I think can be answered really nicely in this visual way, and you can modify things, and update them, it's all interactive, and so definitely a really good resource.

**Chris Benson:** \[00:27:49.24\] Speaking for myself, I am a visual learner, and I remember when this came out... It's a fantastic tool, I'm playing with it right now as we're talking... It graphically shows you as you've changed those different things, what that means to your architecture and what that output is, and it was one of the things that helped me grok how things would come out if I chose tanh or ReLU for instance, because it will do it instantly for you there.

So it's just a great way of if you've read up on something, then you can go play with the idea and see it right there... So I highly recommend it. It certainly helped me.

**Daniel Whitenack:** Yeah, and the other one I wanted to mention here quickly actually comes from Lindsey Zuloaga, who was our guest in episode 17 (our last show). Of course, she did an amazing job at explaining bias in AI and how to fight that, and she mentioned this toolkit from IBM, called The AI Fairness 360 Open Source Toolkit."

**Chris Benson:** I remember.

**Daniel Whitenack:** Yeah, and I went ahead and took a look at that after the episode, and I was pleasantly surprised in the sense that this isn't just an open source toolkit that you go to a repo and look at it... They have a whole page full of demos, full of videos, papers, there's tutorials and example notebooks to help you understand where bias creeps into the models, and also fairness metrics and state of the art techniques and algorithms to help you mitigate bias in your algorithm, so you can actually create more fair and better models.

So I would highly recommend taking a look at this resource, watching some of the videos... I think it's a great place as you enter into a new project -- it's really a good thing to revisit and think about "Okay, what fairness metrics or what bias mitigation can I apply in this new project?"

**Chris Benson:** It looks really great here. I had not looked at it prior to you bringing it up; it was on my to-do list. There are dozens of different topics to explore on this page, so I'm looking forward to -- I'm gonna leave this tab open (I have dozens of tabs open) for after the show to go exploring.

**Daniel Whitenack:** Awesome. What learning resources do you have for us this week, Chris?

**Chris Benson:** Well, I wanted to start off with one -- and it wasn't one that I was typically thinking of as a learning resource, but I found myself... It's a Medium site, as in Medium.com, the publishing platform. It's called Towards Data Science, and it has different topics, like data science, machine learning, programming and visualization... And I find myself reading different topical posts on this site all the time, and have for quite a while.

**Daniel Whitenack:** Yeah. I have, too.

**Chris Benson:** Yeah, and I actually had a few tabs open this week from some of the articles that I was looking through, and it occurred to me that this was a learning resource. For me personally, it's often where there'll be a particular topic that will get covered in a post, and I may not have a lot of experience or exposure to that topic prior to reading... It's a starting point, it's a launching point for me to say "This is something I wanna go learn more about", and then I'll go find other resources on it. It's just an easy read, you can do it anywhere, you can pull up your Medium app in your car -- well, maybe not in the car; I was thinking when you're stopped, but...

**Daniel Whitenack:** Hopefully.

**Chris Benson:** \[00:31:01.19\] Yeah. Don't go reading Medium while you're driving, folks. I'm sorry I said that. But yeah, it's a great place, and it's fun to read... So I recommend Towards Data Science. I believe it's .com at the end of that.

Then the other thing is I often get asked - running the deep learning meetup, and things like that - how reinforcement learning fits in, and what exactly is it, and how is it related to deep learning... There was a Forbes article that went around all of the different feeds this week. I have a whole bunch of feeds in the AI space that I read from, and it came up in several of them. It's called "Artificial Intelligence - what's the difference between deep learning and reinforcement learning?" This is in Forbes, it's a non-technical explanation that's very accessible, where the writer introduces the topic... He starts off with what is deep learning, and he offers a few paragraphs on what that is, and then he goes into what is reinforcement learning, and kind of gives that, and then he covers the difference between deep learning and reinforcement learning and finishes up by talking about how you may use deep learning as a component in your reinforcement learning.

It's a quick read, you can probably do it in two minutes, I'm guessing, but it might give you a start, and if you're one of those people who are trying to figure out how these different things fit together, it's another good starting point, particularly for the non-technical folks in the crowd, so I recommend it.

**Daniel Whitenack:** Awesome, yeah. I think that just the article's title in and of itself kind of tells that there is a misconception that reinforcement learning and deep learning are necessarily different things or mutually exclusive, or how do they fit into one another, and I think that that's really great to clarify.

I would also recommend - we had a great discussion with Wojciech Zaremba one of the co-founders of OpenAI, and he gave us a great introduction to reinforcement learning, and robots, and how they're using it in robotics. That was episode \#14, included in the show notes and everything... That's another great resource for reinforcement learning.

**Chris Benson:** He is a brilliant person, and I personally learned a lot from that episode. I was very impressed that you got him onto the show. He was a fantastic guest, and one of those that I keep going back and listening to over and over again.

**Daniel Whitenack:** For sure. Thanks, Chris. I really enjoyed digging into these things. I also have a bunch of tabs open and I'm gonna do some reading afterwards and look up a few of these things that you mentioned. Until next time, I'll try to keep my learning up and then we'll talk to you next week.

**Chris Benson:** Sounds good. If anyone happens to be in Nashville this Saturday, then I'm looking forward to seeing you at the Emerge Conference. I will talk to you later on, Daniel.

**Daniel Whitenack:** Alright, take care.

**Chris Benson:** Bye-bye.
