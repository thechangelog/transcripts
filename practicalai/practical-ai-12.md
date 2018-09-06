**Daniel Whitenack:** Hey, Chris. How's it going this week?

**Chris Benson:** Doing great, I am super-excited about the next few weeks; we've got some cool things coming up, which we'll talk about...

**Daniel Whitenack:** Yeah, definitely. So I'm here, joined by my co-host, Chris, and we're going to bring you some news and updates from the AI world today, and then also some learning resources to help you level up your AI skills in a practical sort of way... But yeah, there's a lot coming up, Chris. I know I'm traveling over the next three or four weeks quite a few times, and I know you've got some travel too, so there's a lot of exciting stuff coming up.

**Chris Benson:** There is, and there's so much happening in the news right now... I am gonna just leap on into the first one, if you don't mind.

**Daniel Whitenack:** Sounds good.

**Chris Benson:** Okay, so I came across something that I thought really defined what I've been noticing in the industry, and that is it was an article from VentureBeat called "How AI is Decommoditizing the Chip Industry." It was a cool read, because it really was pointing out something -- it seems like for years, as you had before the era of AI and chips and the commoditization of different things coming out in computing in general, and now AI has kind of reversed that trend to some degree, in that processing devices, CPU's and the like (GPU's etc.) are really becoming more and more specialized, and that is creating all sorts of entrepreneurial opportunities for different companies.

So we're seeing lots of chips startups, instead of just software startups. Some of these companies, like Nervana, whom some people may know from Intel at this point, Graphcore, Cerebris, \[unintelligible 00:03:13.20\] There's a whole slew of them, and they're really challenging the big incumbents, which certainly in the AI era has been NVIDIA kind of leading the way, but Intel has come in hard, has come back from the CPU world into the new AI-oriented chip world... Microsoft has theirs, AMD, Qualcomm, Google TPUs and IBM - all these big players are getting huge challenges.

\[00:03:40.05\] NVIDIA really came in with early dominance with the GPU, as they moved from consumer gaming into AI, and they had been kind of the poster child for the AI world... Even they at this point are having to watch some of the new risers coming in, because of what is called ASICs, which is Application-Specific Integrated Circuits, and that is chips that are designed specifically for a particular application; they're completely optimized for that, and that's just fascinating when you think about it, because even though NVIDIA has their Vault architecture, Intel has Nervana, Google's TPUs, at the end of the day, this article is suggesting that the future lies in ASICs, rather than commodity hardware. What do you think about that? Do you think they're right?

**Daniel Whitenack:** Well, I first of all think that you did an amazing job saying "decommoditizing" correctly on the first try, which I think is maybe one of the more impressive things that I've heard recently... \[laughter\] But in all seriousness, I don't have as much exposure to the application-specific type circuit world; I think it'll be interesting to see that develop. What I do have exposure to is definitely the kind of resurgence of specialized hardware in the context of things like -- you know, another company that Intel owns now, Movidius, has things like these Neural Compute Sticks, and one of the things that I really like about them is they've kind of found a new niche that they're filling, but it's also enabling really interesting new types of applications; they've got these little VPU (visual processing unit) USB sticks that you can plug into a Raspberry Pi or into a drone, or other things, and run your neural networks on this specialized architecture in a very low-power, at the edge sort of scenario.

I'm at GopherCon this week actually, and I've just had a conversation before I walked over to record this with someone who said "Oh, it's so cool - I've been doing all this drone stuff, and now I can just plug in these sticks into my drone and have them follow around specific people based on their facial recognition, and all of that stuff..." So people are really excited about these things.

**Chris Benson:** You have a great point there, and I've used a Movidius and I know so many software developers who are not data scientists, they're not coming from the traditional backgrounds leading into AI; they're software developers, they have started in other areas, they might have been web developers and such, and they've moved into this, and having something like a Movidius stick or similar devices has really opened up this space for them.

Since I was halfway thinking about suggesting you and I go create a startup where we create an AI chip that's designed around AI for good... I say tongue in cheek.

**Daniel Whitenack:** Yeah, I would be happy to do that.

**Chris Benson:** There you go.

**Daniel Whitenack:** You provide the funding. A couple things that I've found this week actually had to do with more the research side, which was kind of -- I don't know, kind of different for me, because I'm usually more on the non-research side... But I've really found these interesting. The first is this new paper that came out on the archive from some people at Grenoble University in France, and there's also a PyTorch implementation of this network.

What it is is it's a kind of new type of sequence-to-sequence prediction... So if you're not familiar, that's a very common type of neural network that's used in things like machine translation of text, and taking sequences of something to other sequences... Normally, what happens in those is there's kind of an encoder and a decoder stage of those networks, and this paper showed that they could kind of combine those two things into a single two-dimensional convolutional layer, which I think is really -- after you see it, it's like "Oh, that's a really great idea", but it took someone to kind of come up with that in a natural step... So it's cool to see, even in things that are utilized in production so often, there can be this sort of innovation and refining happening.

**Chris Benson:** \[00:08:05.13\] You know, it's funny, because when you think about sequences, most people automatically turn to RNNs, but I know over the last year or so I've seen so many CNN applications for sequential applications... It's interesting to see how versatile different architectures in the larger convolutional neural network space have been, going beyond just the visual thing that we tend to associate with them normally.

**Daniel Whitenack:** Yeah, definitely. And like I say, there's an implementation of this already on GitHub, in PyTorch, which I love working with PyTorch, so I'd love to try out some other examples, and you guys can, as well.

**Chris Benson:** Gotcha. Well, I am going to turn briefly toward the medical world, where it intersects with AI. There are a couple of articles that I've run across... One is called "John Hopkins researchers use deep learning to combat pancreatic cancer." That one really struck a nerve with me, because incidentally, I'm on my second marriage, but in my first marriage I lost my mother-in-law to pancreatic cancer. We watched as she went downhill very rapidly, and in doing that, it made me very aware of how bad pancreatic cancer is in terms of only 7% of patients that are diagnosed make it another five years. It has the lowest survival rate of any form of cancer out there.

This really caught my eye... They're basically saying that early detection could lead nearly a third of all diagnoses to be made 4-12 months earlier, which could save a lot of lives, or extend a lot of lives out there. In our ongoing theme of AI for good, I really am encouraged by that. They use deep learning in combination with a CT scan to look for minute textural changes to the tissue.

So that was pretty amazing... And then the other thing I saw which was on the pharma side was a system that they call ReLeaSE, which stands for Reinforcement Learning for Structural Evolution, which uses these two neural networks - one that's kind of a teacher neural network, and one which is kind of a student... And they say that the teacher knows 1.7 million active molecules in great detail, and the student is able to learn from that, and then actually create new molecules and evaluate those new molecules with properties that researchers specify.

This is where you're seeing deep learning being applied to pharma to create designer drugs much more rapidly... And between the diagnosis of cancer, and the life-saving aspects of that, and being able to get to new life-saving drugs sooner, I'm just really impressed with how deep learning is revolutionizing medicine in general.

**Daniel Whitenack:** Yeah, definitely. I think that especially coming from a background where I was exposed to computational chemistry and those sorts of methods, I think people don't -- you know, when you say all of those molecules and those sorts of things, maybe people don't fully realize that for even a single molecule, a small molecule like Oxygen, if you ignore the protons and neutrons, you still have a bunch of electrons (six, I believe, if I haven't forgotten everything), and each of those are in a three-dimensional space, and there's a time element, and there's potentially external fields... There's just a lot of variables that happen in these sort of computational chemistry scenarios... And if there's anything we know about deep learning, it's pretty useful in high-dimensional spaces sometimes, so I think it's really interesting to see more of those methods come out.

**Chris Benson:** What else have you seen this past week?

**Daniel Whitenack:** \[00:11:56.25\] Well, I saw this super-creepy video, which I shared with our listeners in our Slack channel...

**Chris Benson:** I saw it... \[laughs\]

**Daniel Whitenack:** It's this new work from Berkeley. Essentially, the video that I saw - and maybe there's multiple out there, I'm not sure - is a guy dancing, it's like a Bruno Mars song, and what they did is they kind of taped two individuals moving around in some space, to kind of train on their movements and their body structure, and then they generated a video of these two individuals dancing in the same way, as in the Bruno Mars and then a ballet video... It's just amazing.

I think you mentioned when you first showed some people, they didn't even realize that it was generated videos of people; they thought they were actually dancing, synchronized in that way.

**Chris Benson:** Yeah, it was actually my six-year-old daughter Athena -- after you posted it in Slack I saw it, and she heard the music on it, and she comes running up to my laptop, and we were looking at it, and I'm marveling because they showed the video (people can see in the show notes) of the source dancer... In one case it was kind of a funk-type dance, and then there was a ballet dancer, and these two people that they were using to super-impose the motion on, and they didn't always line up... So you'd have these brief, subtle moments where the body was doing things the body couldn't do, and it was enough for me -- I kind of knew what I was looking at, but my six-year-old daughter never realized that it was generated. She's growing up in a world where this is normal. AI doesn't even phase her at her age, because she's seen it from me, and just like mobile technologies and everything else it's normal...

Later on I said, "You realize those people weren't actually moving like that. The computer made them do that", and she goes, "No, I had no idea." I'm just thinking, just two or three years down the road, where is this gonna go? You'll be unable to distinguish generated motion from real life.

**Daniel Whitenack:** Yeah, I think -- not to give away all of our startup ideas, and I guess you can scoop us if you like, but another startup we should create is the computer-generation of music videos, where we kind of make obsolete all of the music video dancers and just get their training data, and then we can reuse the same dancers in any sort of video, in any sort of background, and make it seem realistic. That's my second startup proposition.

**Chris Benson:** I'm all over it, but just so long as it doesn't involve the two of us out there dancing. So long as we're not the models used in any of this stuff.

**Daniel Whitenack:** Yeah... Well, I'm sure you could do better than those dancers in real life.

**Chris Benson:** I don't know about that... My wife would tell you not so much.

**Daniel Whitenack:** The last thing that I wanted to share with everybody is that Chris and I are going to be at the O'Reilly AI Conference in San Francisco, which is I believe going on -- when this airs, it will be going on this week... So if you are at O'Reilly AI in San Francisco, come find us; we'll be walking around, doing some interviews, we'll have stickers, we'll have some nice swag, and all sorts of stuff... So come and meet us, we'd love to hear from you, we'd love to hear about your ideas and discuss whatever topics you'd like... So come find us there. I'm really excited to attend.

**Chris Benson:** And I second that. We are just there to meet everybody and to have conversations, to do a bit of recording, so don't be shy. We're looking forward to meeting lots of people in San Francisco.

**Daniel Whitenack:** Definitely. Well, let's go ahead and move on to some learning resources. This is the part of these type of shows where we just kind of share a couple things that we've run across that have been useful in terms of learning new things within the AI ecosystem, or new frameworks, or new techniques, or whatever it is.

\[00:16:03.26\] The first one that I've found this week, which I don't think is totally new, but it was new to me, is the site that kind of creates a data visualization map of all of these different data science and machine learning books. It's called Hands-On Machine Learning, and it's kind of like a little roadmap of all of these different books that have been released on different subjects, like deep learning, and Python in general, and beginner books, and expert books, and it kind of guides you to the different sections that you might be interested in. So if you don't know where to start or what books to look at, that might be a good place to just kind of explore what's out there, and maybe avoid an expert book if you're looking to begin and start out in AI, or maybe you're looking for a book specifically about deep learning, or something like that.

**Chris Benson:** I think this is great, I had not seen this before... I'm looking at the link at this point, and after we're done recording, I'm gonna go snoop through it and see what I need to go get.

**Daniel Whitenack:** Sounds good. What have you got for us this week, Chris?

**Chris Benson:** So there's a Udemy course that I decided to put that's pretty good. It is a paid course, and the price typically -- this is one of those things where I've never seen it at full price; it's always at some kind of discount... Currently, it's $10 to get it, but it's called "Complete Guide to TensorFlow for Deep Learning With Python." It is quite lengthy actually, and you can kind of pick and choose, but it has 14 hours of on-demand video. So if video is your thing in terms of learning...

It kind of takes you through everything from -- the beginning is kind of what is machine learning, to an introduction in neural networks, TensorFlow basics, CNNs, RNNs, various other topics that are kind of ancillary... Autoencoders, reinforcement learning, and even generative adversarial networks (GANs).

It has such a breadth of topics that it was covering that for $10 I thought it was a pretty good investment to get people into... So if you like to use Udemy as a platform for learning, then I recommend this one. It has 4.5 stars out of 6,500 ratings as I read this on their website right now... So that's what I found; I thought it was a good thing for a beginner to get into.

**Daniel Whitenack:** Awesome. Yeah, I should mention too that if anyone out there is looking for books on specific subjects, or looking for specific types of courses, or maybe just a GitHub repo that has some relevant examples, go ahead and jump over into our Slack channel; you can join the Practical AI and Changelog Slack team by going to changelog.com/community, and there's a Practical AI channel in there... And just send us your question and we'll do our best to point you to whatever resources we know about, and maybe some other resources that our other listeners know about... So make sure and leverage that.

Otherwise, we'll reconvene next week. We're talking with Susan Etlinger about AI ethics, which I'm really excited about, and I know you are, Chris, because our listeners have expressed to us a lot that they wanna hear about this topic, and I wanna hear about it as well. Susan's an expert who will also be talking at O'Reilly AI about the same subject, so make sure and join us next week.

**Chris Benson:** Yup, she is super-impressive. I can't wait for that conversation. As this gets released, I will be seeing you within a couple of days at O'Reilly AI, and we'll meet a whole bunch of our listeners and do some recording as we go, so I'm looking forward to this coming week.

**Daniel Whitenack:** Alright, see you there.

**Chris Benson:** See you there, talk to you later.
