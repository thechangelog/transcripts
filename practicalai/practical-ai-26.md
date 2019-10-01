**Chris Benson:** Welcome to another Fully Connected episode, where Daniel and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news and dig into learning resources to help you level up on your machine learning game. I am your co-host, Chris Benson; I am Chief AI Strategist with Lockheed Martin RMS APA Innovations, and with me is my co-host Daniel Whitenack, data scientist with SIL International. How's it going, Daniel?

**Daniel Whitenack:** It's going great! How about with you, Chris?

**Chris Benson:** It's going very well, I am very excited about this episode. We've been talking about having one here around New Year's, give or take, and we are gonna talk a little bit about the year behind and the year ahead. We've had so much happen that I am fully, fully psyched about this... Not the least of which is hey, we have done essentially our first year of the Practical AI podcast, got some content out there.

**Daniel Whitenack:** Yeah. We started a thing, how about that?

**Chris Benson:** We did start a thing, and you pointed out to me a little while ago that we have 25 episodes out, and when you're hosting a show like this and we tend to get into our rhythm of putting them out - I think it just hit me that we had a lot of content out there, and a lot of stuff that I think we're both pretty proud of... Some pretty amazing episodes and guests that we've had this past year.

**Daniel Whitenack:** Yeah, so thank you out there to all the loyal listeners, those that have been with us from the beginning and also those that maybe you're just joining for the first episode... I'm really excited that this thing exists now, and that we're able to talk about AI practically, and bring on a bunch of awesome guests and have these conversations. It's been super-great... We've talked to people from NVIDIA, and Google, and all over the place. It's been a great year.

**Chris Benson:** One of the things I really love is the community that we've built up. A lot of our listeners have joined the Slack community, and joined us on LinkedIn, and give us feedback and suggestions... And I've gotta say, when you wake up in the morning like I did this morning, and we had a new listener who had joined the Slack community and was just saying "Hey, great job", and they say where they're listening from - it just feels amazing. I hope that more folks will engage us in a very direct way. This is not just a one-way conversation.

**Daniel Whitenack:** Yup. Looking forward to a great 2019 of episodes. If you have suggestions for topics you wanna hear about, please let us know on Slack or on LinkedIn. We're just really excited to get more plugged into the community and talk about the things that are on people's minds, and the things that they're having success with, the things that they're struggling with as far as AI goes.

**Chris Benson:** I guess to kick things off, what really stood out to you in 2018?

**Daniel Whitenack:** We talked about a ton of things on the podcast. Of course, we talked to a lot of people, both recorded and not recorded, as associated with the podcast, but also we were in the community, I've talked to a ton of people during workshops and other things, and I think one of the things that stood out to me this year in terms of what people were talking about when they came on this show, and what I heard people talking about at conferences and that sort of thing - it was really around transitioning from talking about AI and machine learning in a strictly supervised setting to these more complicated ways of framing problems...

\[00:04:09.05\] Things like semi-supervised learning, and generative models, reinforcement learning... We heard about this a lot - at least I did - both on the show and off the show. We talked to Wojciech Zaremba from OpenAI on episode \#14, talking about robots and reinforcement learning, and this came up several times in other conversations as well.

I think this is a general trend that we saw in 2018, people pushing AI and pushing it with these more challenging problem statements and methodologies, rather than just a strictly supervised setting.

**Chris Benson:** I think that's really insightful. The field of deep learning and AI in general has really expanded in 2018. When we were starting the year out a year ago, most of the conversations I was having were around supervised learning; we were talking about CNNs, we were talking about RNNs, and really I think there was discussion of GANs that were out, but not a lot of people that I was talking to knew what to do with them... And we've really seen an explosion of use cases for these new architectures this year, and what this technology can do in real life, in a practical sense has really broadened over that time period.

**Daniel Whitenack:** Yeah, that's well put, Chris, in the language that you just said... And speaking of speaking and language, I think that one other thing that really stood out to be over this year, which I think is really exciting as kind of a shift - almost a shift back or towards natural language methods.

We saw for a long time -- mostly what people were talking about with deep learning especially was image-based and video-based stuff... You know, style transfer, facial recognition and other things. But I think over the past 3, 4, 5 months - and really maybe throughout the year; maybe I just started noticing it recently, but there seems to have been a shift to a lot of focus on natural language processing. We had the episode where we dove into BERT, which was episode \#22, which seemed to be getting a lot of press at the time... Of course, there were a lot of other advancements in natural language, and I think that will influence what happens in 2019.

**Chris Benson:** I think you're absolutely right. NLP really became part of the AI conversation in a much bigger way this year. I know that I was at a former employer in the beginning of the year, and the NLP conversation was really not an AI conversation; it was not about neural networks, it was about some of the older legacy techniques... And over the course of the year really deep learning took hold in the NLP world, for us - I'm speaking in a very personal sense... And watching that transition in a large organization that was moving into this new set of technologies to drive its business forward was pretty exciting. Then obviously with BERT's release the excitement around NLP has really skyrocketed in a big way.

**Daniel Whitenack:** Yeah. And I think the other thing that I've noticed skyrocket as of recent is fears about AI. Do you hear about this as you're talking to your -- as you were at the Thanksgiving table with your friends and family, were you talking about the fear of AI?

**Chris Benson:** Well, I wasn't at the Thanksgiving table because my wife has forbidden me from doing so... It's off-limits for me, lest I drive her insane, because I never stop... But I do hear about it. I know that we both do a lot of conference talks, and there's rarely conversation or a talk that I get into where that's not asked, or either the question of jobs, or the question of other fear-based things are out there... So I spend a fair amount of time trying to share with people what in my view is real and what's not, and trying to take the fear out of it so people can make rational judgments about how these tools can be used in all sorts of use cases.

**Daniel Whitenack:** \[00:08:11.01\] Yeah, and I'm thinking back to our episode \#25, the most recent one with Susan Etlinger, where we kind of talked about this kind of terminator or singularity thing really distracting from a lot of the real-world dangers of AI that we're experiencing now around bias and government use of AI and other things.

Those questions around consciousness and other things are interesting, and I think that someone should be having those conversations probably. In this year it seems to have shifted the conversation more towards those things, distracting from things that are really happening practically, that are problems for us as AI practitioners.

**Chris Benson:** I agree.

**Daniel Whitenack:** Hopefully -- I mean, I hope really that's a trend that is corrected, or at least expectations are set a little bit better.

**Chris Benson:** I think it started. I think that's gonna keep going for a while, because there's a lot of people out there whose lives are not nearly as entwined in AI as ours are, and they're just coming into the conversation. But I think the bottom line is to the best of my knowledge there's no substantial research pushing forward consciousness - that's not what AI is - in the foreseeable future. So that entire line of speculative thinking - there's not really a basis in fact for that at this point.

I suspect you and me and a lot of other people in this field are gonna continue to have to message that out to people that are just really learning about this new for that to get by. So I'm pretty tolerant with it; I think it's just a question of ongoing education.

**Daniel Whitenack:** Quiz, Chris... In my mind there were two huge things that rocked the AI and machine learning, software engineering world this year, that really stand out to me. I'm curious of those same things come to your mind. Do you know what I'm talking about?

**Chris Benson:** I can guess at it. We've talked a lot, so I'm probably guessing at least one of those -- I'm guessing it's the GDPR...

**Daniel Whitenack:** Yes, the year of the GDPR. It's very exciting, depending on your perspective, I guess...

**Chris Benson:** And for those who don't know, that's the European (in the EU) General Data Protection Regulation, which is the first large-scale regulation of data in AI technologies out there. It's certainly \[unintelligible 00:10:33.22\] It has people for and against not only it as a whole, but different aspects of it, but we're now in a world where regulation in AI is something to think about and consider, and maybe a reality. That definitely rocked a lot of people on their heels this year.

**Daniel Whitenack:** Yeah. There's definitely implications for machine learning and AI practitioners based on the GDPR around explainability of your models and what that exactly means... Some of the finer points and the details of that we discussed in episode \#4 with some individuals from the company Immuta. I think that was really instructive, and I learned a lot of what I should expect, at least in the near future, as far as GDPR, from that conversation. It made me consider that it's a serious thing, but maybe it tempered a few of my fears, I guess.

**Chris Benson:** Yeah, Matthew Carroll and Andrew Burt from Immuta - from my perspective, they definitely schooled me in that. I came away from that episode with a different perspective from the start of the recording, certainly. That definitely helped educate me along the way.

**Daniel Whitenack:** What do you think is the second thing that I was thinking of...?

**Chris Benson:** I'm guessing you're thinking maybe Cambridge Analytica? Because that was big... Or am I on the wrong track?

**Daniel Whitenack:** You're reading my mind, yup.

**Chris Benson:** Am I? Okay. I wasn't as sure about that one.

**Daniel Whitenack:** Yeah. I think probably -- whether you were in AI or not in AI, you probably heard a lot about Facebook and Cambridge Analytica this year, and a lot of snapshots of Mark Zuckerberg, with kind of weird looks on his face, which was definitely an interesting period of 2018 for me.

**Chris Benson:** \[00:12:19.13\] In a non-technical sense, I think the thing that really stuck in my mind was watching some of the hearings associated with that and realizing that our U.S. Congress people really have a lot to learn...

**Daniel Whitenack:** ...have no idea.

**Chris Benson:** They really were clueless. I remember watching that on YouTube and just going "Wow... Somebody needs to educate Congress a bit."

**Daniel Whitenack:** Yeah, I think it's definitely an eye-opener, but I think it's one of those things where for us working in this industry, that utilize data in AI, I think we need to kind of reset our expectations for what we think people know about the technology that they use, and also maybe have a little bit more empathy as we're creating technology... Not really assume that people are totally aware, that they're always reading the terms and conditions, or they know or expect how we're using their data, and that sort of thing. I think that kind of reset that empathy for me, I think.

**Chris Benson:** Yeah. The other thing about 2018 that really struck me was the maturing process that the whole field went through. Everything from open source tools, to how organizations were entering into this new space and trying to figure it out.

Personally, previously I had been with Accenture, and then I went to Honeywell for a while, and then I'm currently with Lockheed Martin. These are large organizations, with commitments to these technologies, and as I've gone, the maturity of each one figuring out how it was going to do to have operations around these - I've seen a lot of advancement, considering how short a time it's been.

We're now seeing a lot of the larger organizations involved offering their best practices, and those are getting incorporated, and I know we've talked about that a number of times in our episodes... So we're just seeing a maturing of this industry going at just breakneck pace, as well as open source projects and frameworks that are advancing at lightning speed.

**Daniel Whitenack:** Yeah... I'm just reading a list -- we'll put a bunch of links from this show in the show notes, of course, but just looking at a list from one article about all of the open source projects that were introduced or significantly updated this year as related to AI... And of course, there were things like Horizon, from Facebook, for reinforcement learning, there were various libraries for graph nets and other things, from DeepMind... Just a ton of stuff happened and was open-sourced this year, and that's really exciting to look at, as a whole toolkit of things that we can use in 2019.

**Chris Benson:** Yeah, I agree with you. Compared to the beginning of the year, the number of different tools come out, and the number of different (I guess) constituencies that they were appealing to - not just data scientists, but software developers, people in different programming languages, different ways of approaching it, whether it be things like AutoML, and you'd hear people that were talking about TensorFlow, or maybe the upcoming TensorFlow 2, versus PyTorch and that whole discussion... It's really, really democratized the field in the past year, having so many new capabilities and tools to where there's now quite a lot of choice in how you might choose to get into the field.

**Daniel Whitenack:** \[00:15:57.01\] Okay, Chris, so in 2018 of course we talked about a bunch of amazing stuff on the show; we started the show, we recorded 25 episodes, we talked about everything from ethics, to natural language processing, to robots... What do you think we're gonna be talking about in 2019? Or what do you wanna see on the show in 2019? What are gonna be some of the biggest topics that you think are gonna be coming across our desks this coming year?

**Chris Benson:** I think a lot of the conversations that we have already started are going to continue to develop and grow and mature, not the least of which is the issues of trust, transparency... And there are so many aspects of that. There's bias, we've already talked about regulation, and different types of use cases on how you'd use these tools... We've just started down that path, and I think that's gonna be something we'll see a lot this year, and a lot in the years ahead.

Any thoughts, maybe on bias...? I know I've heard you bring up bias so many times throughout our episodes. I'd love to hear your thoughts on where that's going.

**Daniel Whitenack:** I think bias, and also government and large organization use of ML is something that I hope we'll be talking about a lot. I think it's one thing that I kind of think happened in 2018, as we already talked about, was people's eyes were opened somewhat through Cambridge Analytica and other things, about some of the ways that we're using data... And if we're using data in those ways to do these things, whether it's in hiring or advertising, or social media influencing and all of those things, then bias in our datasets really becomes a problem.

Also, there's probably certain things that we really just shouldn't be doing. We brought up the use case of government use of facial recognition a few times on this show; of course, that's a big controversy right now... So I think people's eyes have been opened in 2018 to how their data is being used somewhat, and in 2019 I think there's got to be more reckoning around how we can actually develop trust in systems based on AI methodologies, and also I think it's gonna weigh on us as practitioners to make some of those methodologies a little bit more transparent and interpretable, especially as we're forced to more and more by things like GDPR. I think 2018 was a year of eye-opening, and 2019 maybe will be a year of practical reckoning in some ways, I hope.

**Chris Benson:** I think you're absolutely right... I hope you're right. I would even say that we talked about -- so much of the conversation in 2018 had been around fear of AI and such, and I think that this is a big part of the solution to that... If we can focus on trust and transparency much more so than we ever have had to do with previous technologies, and understand and explore what's possible, and then why we may not wanna go down certain paths, or how we do certain paths safely is really crucial.

I've been really happy this past year to see the ethics of AI be such a big part of the conversation, and I really think that's gonna continue going forward. I think the realization that that has to be right up there with your technical solutions in almost every conversation is a big part of where things are going in the months ahead.

You and I talk a lot about "AI for good". We try to illustrate all the amazing -- we've had so many guests that have done some pretty amazing things, in some cases life-saving techniques that they've used AI tools to achieve... I would like to see us do more of that going forward, and I'm hoping that if we continue to have these trust and transparency and ethical conversations about the toolset right alongside our technical conversations, we're less likely to make missteps, and maybe the worry about fear-based outcomes will start to diminish.

**Daniel Whitenack:** \[00:20:09.02\] Yup. Now, speaking of more trends for 2019, you and I have talked quite a bit, I have confidence that you're a real person, but our listeners have listened to us and never met us in person, so likely this last year they would have assumed that we're real people because we talk like real people, but I think in 2019 the AI assistance and the way that they're able to be conversational, and better generative voice techniques and text-to-voice techniques kind of combined with these NLP techniques that we already brought up around BERT and other things - I think that's all gonna be kind of a perfect storm to advance AI assistance and voice interfaces and such, where maybe in the end of next year there will be at least some conversations we have where it's maybe not as obvious whether we're talking to a computer or a person. What do you think?

**Chris Benson:** I totally agree, and we've already seen specific instances of those happening. We obviously saw the demo - I think it was Amazon...

**Daniel Whitenack:** Is it Duplex? Is that that thing?

**Chris Benson:** Maybe it was, yeah. We've had so many things this year... Where that AI system was indistinguishable; it sounded human, and there's a number of organizations working on that; when you combine that with what GANs (generative adversarial networks) have been doing, especially on image generation... Just last week I was sharing a post that had a whole bunch of you'd swear they were real people's faces. I mean, they were indistinguishable from a photograph, and none of those people were real. If you take that kind of capability and apply it within a video context and have this conversational capability that's evolved, then yeah, the ability for us to distinguish between us as real human beings and essentially AI assistants that appear to be, but maybe not... That obviously raises more of the ethical questions and how do you interact, what is that user experience, what should it be...

**Daniel Whitenack:** When should you know you're talking to a human.

**Chris Benson:** Absolutely. And it also reminded me of something else. I know that a stat that I throw out commonly at talks is that Gartner a while back was predicting that by 2025 half of all of our primary care in terms of medical attention would come through AI assistance. I know when they first put that out I was thinking, "Well, some of it... I don't know...", but I think they might be right, and maybe even most of our medical care. Because if you have this ability to have that visual and audio experience that is almost indistinguishable from talking to a human, all of the AI-enabled medical capability that might be behind that - then yeah, I think the way that we are living our lives in terms of seeking primary care and lots of other use cases might really change over the next few years, and we may see a lot of that this coming year.

**Daniel Whitenack:** Yeah, for sure. And a lot of that is going to come in the form of new products, and I think for us on this show one trend that I think has already started but I think it's just gonna be a huge trend in 2019 is a focus on practicality. And by that I mean less of a focus on what can you do with deep learning in terms of research, and more of a focus on "How can we take these techniques, develop good processes around them, integrate them into software systems, integrate them into APIs, integrate them into mobile apps? How can we train our data scientists, our AI people better, so that they're actually better at building things; not just good at proving out research ideas, but better at building things, and then also the development of system integrations and infrastructure that really support that infusion of AI products and the development of those AI products into a company's workflow.

**Chris Benson:** \[00:24:16.01\] Totally. I think inferencing APIs, prediction APIs are going to become so standard in our software stacks that are running our organizations or enterprises, that it will seem almost funny to look back - not too far down the road - and think "Well, of course it was. It was kind of obvious."

I think a lot of people are still trying to wrap their heads around that right now. We're seeing a race to the bottom in terms of commoditization happening right now, and in terms of democratization of the field. We've already talked about the immense number of tools that came out in 2018; that only seems to be accelerating as we're going into 2019, and that's allowed a lot of people who are not strictly data scientists by background to get into this field.

As you start having some software engineers and developers that have an interest in this moving largely over into doing inference-based programming, it will no longer be the domain of just data scientists anymore, and I'm hoping to avoid the hatemail from data scientists, but I think that you're gonna see -- just as once upon a time you had computer scientists working mainly on programming, and then that democratized early as the internet came out... I think we're seeing the beginning of a similar trend, where it will be accessible to so many more people going forward.

**Daniel Whitenack:** Yeah, and in my opinion it's not -- so I do think you're right in terms of a lot of this kind of being a new layer in the software stack, that's accessible to non-AI experts, but I also think that there's gonna be a lot of pressure on data scientists and AI people themselves to really be more responsible with the way that they build things, and additional tooling around that.

We had the conversation with Joe from Pachyderm in episode \#23, which is really infrastructure for AI; there's projects like Kubeflow and others that are really meant to provide a platform for responsible and tracked and versioned and scalable both training and inference on common infrastructure like Kubernetes, which is a container orchestrator.

So I think that there's gonna be pressure on data scientists and AI people to not just figure out a good way to do this and do your research job, but to actually say "Okay, step into the role of actually building something that scales and can be integrated into our systems, and be more involved on the engineering side of things, and maybe less on the cutting edge research sort of things."

Although I'm sure that there will still be organizations that focus on research, I think people have figured out that yes, we can apply AI in the real-world, but we need some tooling and infrastructure around it, and I think that's gonna increase this coming year.

**Chris Benson:** Yeah, I think the thing that's really driving this field is the amount of money that is pouring into it, and the reason that money is pouring into it is because you're getting a return on your investment. And that is done by generating products and services where AI technologies are enhancing those, they're helping you better sever your customer. Because of that, research will continue to grow, but I think the explosion of numbers of people, practitioners who are getting in to generate their own products and services, just like we saw in the software engineering world, where they're no longer trying to figure out the new protocol, but they're saying "Hey, we have a bunch of great tools now. Let's go out and make stuff, and sell it to our customers" - that's really gonna drive it. And because of that, I think you're gonna see so much growth on the product and service creation side. Even though both are growing rapidly, it will almost eclipse the research side, because for every one that's doing research, you're gonna have many, many that are out there generating products and services that they can make a profit on.

\[00:28:04.14\] I think we're already starting to see us turning very much that way, and even just in 2018 I saw a substantial swing toward that direction. At the beginning of 2018 a lot of organizations were just thinking about getting into AI. As we get into 2019, many of those organizations are now trying to do it; they're at least starting.

**Daniel Whitenack:** And obviously, they can automate it with AutoML, which we talked about maybe a little bit this last year, but I think people will be talking about it more in 2019.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** What are your feelings on AutoML? For those that maybe are new to AutoML, there's a whole series of techniques that are lumped into this discussion around AutoML, which basically is kind of like machine learning on machine learning... Doing machine learning to adjust or modify your neural network architecture, the layers of your neural network, or doing machine learning to figure out the best sort of loss function, or way to do gradient descent, or updates, or whatever it is. There's a lot of automatic techniques to figure out these things. Up until recently I think a lot of those were experimental, but of course, there's products now built around AutoML. What is your impression about what AutoML will be in 2019, Chris?

**Chris Benson:** I think a lot of organizations are just starting to look at it. When it came out, it rocked the world in terms of people going "Oh man, this is a totally different way of thinking about this field as a tool", and it was a revolutionary thought... But I think it was the first of many innovative tools that we're gonna be seeing in the coming years, a lot of them in 2019, that is making this field more accessible. I think early on there was a naivety that because of the mathematical underpinnings, and because of the technical barriers to entry, a lot of people assumed that there would be a fairly narrow set of people that could engage in this, but you're seeing these innovators - in this case, AutoML, it's Google - just doing amazing work to make this set of tools more accessible.

I'm a big fan of AutoML, I think it has a long way to go, and I think it will grow a long way, as will many other similar tools, but this is one of the reasons I really believe that this field is opening up. It's becoming so much more accessible.

**Daniel Whitenack:** I think AutoML is cool (disclaimer), but I'm also skeptical about its widespread use in 2019, practically. I think that it's interesting, I think it will be utilized in a certain limited set of scenarios in the real world, maybe those that are more standardized, but I am a little bit skeptical about its widespread use. Hopefully I'm not offending very many people out there.

In my mind, the thing that would drive much more democratization of machine learning and AI is transfer learning. I think that's - at least in my mind - in 2019 a lot of what's going to drive application of complicated machine learning models in industry... It's transfer learning, which is the ability to take a model that was trained for one task, and then transfer it to another task via some fine-tuning. That's my personal opinion, I'll get that out of the way on this show.

**Chris Benson:** I think that's a fantastic point, and we have discussed this in the past. To reiterate, I know that in my own experience transfer learning is almost the gateway into implementation, because in reality, a lot of people as they get into this and they are not neural network research scientists and they're going off and creating their own architectures from scratch -- you might go into Google Brain and that is a very common thing for people at that level, but for a lot of mid-sized companies, where it's a couple of people speculatively getting into it and trying to talk their managers into it, what they're really doing is they're taking their framework of choice and they're looking through the example of capabilities and saying "You know what, this thing my boss wants me to do - it's not so dissimilar from this example I see here." And they take it and they try to make the adjustments to get that to work in their own world and move in. That's how it's done in real life for most people.

**Daniel Whitenack:** \[00:32:33.23\] Yeah. And you've kind of brought up cultural shifts in that statement, and that would certainly maybe be one cultural shift. Are there others of those that you -- I mean, you're probably more in a standard enterprise setting than I am, or have been over the past few years; what do you see with regard to those cultural shifts in that setting?

**Chris Benson:** I'm definitely seeing that, and I was at a lot of smaller or mid-sized organizations for a while, but in recent years I've been with these larger organizations, and very much by design. I'm super-happy with where I'm at now because of that, but... What I'm really seeing is that as the maturing of this field is coming about so rapidly, these data-oriented possibilities are getting to a point where they can affect the bottom line; it's really changing how organizations are seeing this.

For a long time, your analytics teams and data science teams were kind of a very back-office function, and now we're seeing it move into the C-suite. A lot of organizations are creating positions for chief data officers, and chief artificial intelligence officers, and such. And they have a seat at the big kids table, where they can really inform the rest of the leadership team how that's doing, and that cultural shift is making its way all the way through the organization... Especially in the various technology sectors, but even moving into some that are not traditional technology sectors. You're seeing data-oriented strategy and AI-oriented strategy being prerequisites. You can't do strategy without considering that going forward. And when you're looking at the competitive landscape in the organization, you have to assess not only what your capability is, but what are your competitors gonna do on behalf of your customers and their customers.

It's really changing a cultural mindset we're seeing in organizations, and also allowing more specialization. You don't just have an analytics team, but you might actually drive to where you separate your AI team from your traditional data science team, from your analytics team, which might be doing more reporting, or even something as specialized as prognostics. I work at Lockheed Martin and prognostics is a big thing, since we're dealing with aircraft and other vehicles.

I've seen huge shifts in a very short amount of time, and I think that's gonna trickle down into smaller organizations. I don't think you have to be a Lockheed Martin to be thinking that way anymore.

**Daniel Whitenack:** I think for me maybe 2019 will be the year of stopping to use various loaded terms, like machine learning and AI and analytics and data science. Maybe I shouldn't say that, since I co-host the Practical AI podcast, but all of these terms are kind of -- maybe they will become clear this year, but I think there's so much terminology out there... Maybe we should rebrand as Practical Data Stuff, I don't know... \[laughter\]

**Chris Benson:** It doesn't sound as sexy though.

**Daniel Whitenack:** No, I guess not.

**Chris Benson:** I have seen people actually looking at the responsibilities in these different areas and what they're trying to accomplish on behalf of a customer, and there are different ways of segmenting it, and you could apply different labels if you wanted... But I've seen different functions/responsibilities start getting segmented out, and then people will put the best label on it that they can for that. I doubt we're gonna get out of that in 2019. I think we have a ways to go.

**Daniel Whitenack:** \[00:35:47.24\] Yeah, yeah. I mean, we've already kind of talked about one other trend that probably is gonna characterize 2019, but maybe just to emphasize a few elements of it - we talked about the voice interaction element, conversational bots and that sort of thing. I think there's gonna be a lot of changing relationships between humans and automation, or humans and services, and different things... Like robots, that's kind of taking some first steps; IoT devices that are all through our houses now, and smart speakers, and watches, and other ways of interacting with things... And of course, a lot of augmentation of jobs. We always like to stress on this podcast that it's not really about automating jobs away, but augmenting people to do their jobs better. Like in healthcare, with doctors, trying to get them to be more efficient or have a higher accuracy of diagnosis. Or salespeople getting more efficiently to high-priority leads, and things like that.

There is gonna be a lot of infusion of these updated interactions with machines in 2019, which is something we've already seen and there's first steps towards that, but it'll continue to be a bit of transformation and augmentation of the way that we do day-to-day things, I think.

**Chris Benson:** Yeah. Coming from this field, that's what the data is showing us - it's showing us not that we're just replacing people wholesale, but we're augmenting them with tools that make them much more capable than they ever were before, and that is a theme that I'm seeing recurring over and over and over again in a lot of different settings.

We're already seeing IoT things -- IoT is almost losing its meaning, in my view, because everything can be IoT at this point by putting a microchip and network connectivity to it, and doing some cool stuff in the programming, but... Robotics are really finally becoming cheap. I have a six-year-old who is in first grade, and for Christmas she's gonna get her fourth robot. This weekend I was showing her how to use Scratch, the programming language from MIT, to control a little Tello drone. It's actually my drone, but we were sitting there and she was pulling things onto it.

I know as a parent, it's changing the way that I'm thinking about raising my daughter, and ironically, it's tied very much into what I'm doing for a living here. So I'm actually thinking about "What do I teach my daughter, so that she will be the best of whatever it is that she wants to be going forward?" and it's certainly changing -- I have two grown kids, and the way I'm raising my first-grader is very different from the things I was teaching my now grown kids, because the world has changed out from under us.

So we're really incorporating ourselves with these technologies on a day-to-day basis. So far, I would argue we've seen very much in that good; I know people worry about that, but I'm seeing some pretty amazing things happen, so I'm pretty encouraged, actually.

**Daniel Whitenack:** Yeah, and I think that's a good place to kind of wrap up our perspective on 2019. I'm super-excited to talk about all of these things in 2019 on Practical AI; I don't know about you, Chris. It's gonna be a really great year ahead, talking about all of these things that really are impacting the industry, and new things in AI, exciting things, things that are really making an impact on our day-to-day lives.

I'm glad that our jobs of hosting this podcast won't be automated away, at least this year, and I'm really excited to talk about all of these things. As you look forward to 2019, please let us know if there's any topics you want to hear about on Practical AI; definitely let us know in Slack. Join our community on LinkedIn. We'll be really excited to hear from you and interact with you this coming year.

Congrats again on 2018, Chris.

**Chris Benson:** Congrats, again. We made it through this year. I know when we started it, we were both new at this, and we've come a long way ourselves, so I am really stoked.

**Daniel Whitenack:** And a big thank you to Changelog for helping us get started with this podcast, and doing a lot of the really hard work around editing and production and marketing and all of that. A big thank you to them for getting us up and running in 2018. Definitely check out their other shows, as well.

**Chris Benson:** \[00:40:08.20\] It's totally a team effort, I'm really glad you said that. Everyone just hears you and me talking from week to week, but there's a whole team behind us that makes this whole thing work, and I'm immensely thankful. I never realized what a team effort it was until I got into this.

**Daniel Whitenack:** Awesome. Thanks for the review, Chris, and I will talk to you in the new year.

**Chris Benson:** Talk to you in the new year, Daniel. Take care. Happy new year!

**Daniel Whitenack:** Happy new year!
