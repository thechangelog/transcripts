**Chris Benson:** Welcome to another Fully Connected episode, where Daniel and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news and we'll dig into learning resources to help you level up your machine learning game.

Welcome to the Practical AI podcast. My name is Chris Benson. I'm a principal AI strategist at Lockheed Martin, and with me as always is Daniel Whitenack, data scientist at SIL International. How's it going, Daniel?

**Daniel Whitenack:** It's going great. It's a beautiful day outside. Hopefully I can take a walk after this. I've been staring at my screen most of the day since like 7 AM, so I'm ready for a walk around the block, or something.

**Chris Benson:** That sounds like a good idea. I'm bleary-eyed from screentime as well, so... Get outside and enjoy it, especially now that -- at least where I'm at, in Atlanta, the worst of the pollen seems to be past... So that's good. No more yellow cars from pine pollen everywhere.

**Daniel Whitenack:** Yeah, that's rough. We need an AI model that takes in pictures of cars on people's driveways, and tells you whether it's safe to go outside yet because of the pollen levels...

**Chris Benson:** There you go.

**Daniel Whitenack:** I'm sure there's easier ways to do that, but...

**Chris Benson:** That's right; we'll have to prep people next year. We'll just ask everybody in the audience next year to send us your images of your cars covered in pine pollen, with a date/time attached to it, and we will have a great project to go on this.

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** Before we get going, I know that you've been doing some training classes. How have those been going?

**Daniel Whitenack:** They went really good. It was interesting, because normally--

**Chris Benson:** Teaching, by the way. Not taking.

**Daniel Whitenack:** Normally, when I do AI trainings in industry, or like at conferences or something, obviously there's normally like a whiteboard there, there's a lot of -- it kind of changes as the class goes on, because there's a lot of easy back and forth... So it was interesting to figure out the virtual dynamic, with everybody being at home.

I think actually it ended up having some benefits, because it sort of forced me -- normally, I write things at the whiteboard, I'm able to make changes as I go... But to have to sit down and work things out in a strict set of slides that I'm showing made me really think about "What is the proper flow to explain this idea and show certain things?" In that respect, actually it was a learning experience for me...

**Chris Benson:** \[00:04:11.02\] I bet.

**Daniel Whitenack:** ...because it helped clarify some of that logic, even in my own mind. But it went really well. The students had some great questions, that went all the way from "What is AI?" to convolutional layers and recurrent layers, and training cool things... So yeah, it was a good time.

**Chris Benson:** I've always found that no matter what the topic you teach, it forces you to assess everything that you think about, because you've gotta explain it to other people, and answer all that. Everytime I've done that, I've learned so much more about whatever it was I was gonna teach.

**Daniel Whitenack:** For sure, yeah. People ask questions that just never have come into your mind. Not because they're bad questions, it's just a different point of view... So it forces you to backtrack yourself and look at things from different directions.

**Chris Benson:** Well, that sounds interesting. I guess you lucked out, you got through your training classes right before NVIDIA this year at their GPU Technology Conference (GTC) made all their new hardware announcements, and the things that go with that.

**Daniel Whitenack:** That's true. It's interesting - I was spending the evening yesterday with my brother-in-laws who are living with us; so we aren't social-gathering yet, but my brother-in-laws are living with us right now while they're back from college... So they're not in computer science or anything like that, but they are pretty heavy gamers. We started talking about some of this stuff, and they had even seen the keynote from the NVIDIA conference even before I started talking about it; even though it was mostly AI-related, it was already a sort of a general meme. The NVIDIA CEO was presenting all of this cool GPU stuff from his kitchen, which was -- you know, you could see spatulas in the background, and some very interesting fresco above his oven, and such... So it was really interesting in that sense, that there was people -- even people that aren't in the space, it made some impact on their life, which was really interesting.

**Chris Benson:** That's a great point, that's worth talking about. We talk about NVIDIA, and Google, and other major players in this space often, because you can't really talk about AI in a lot of cases without talking about the biggest influencers. And in NVIDIA's case, they were this gaming company, and GPUs were originally to promote graphics; computer gamers were constantly using it. And now we're doing this in the AI space. Any thoughts or insight into how that evolution came about, and why we're using GPUs for all this stuff?

**Daniel Whitenack:** Yeah, and actually also demand from the Bitcoin mining space as well...

**Chris Benson:** That's true.

**Daniel Whitenack:** It's very interesting, if you look at NVIDIAs rise over time - of course, they existed for quite some time, but it's almost like -- so they existed for a reason, and they were really good at this reason... And then all of a sudden, the things that they were good at became the most important things in the world... That's kind of how it seems. They were already there, so they just exploded.

You're right, if you think about video gaming, or things you would want to do in video processing or graphics - for example, you might wanna apply a filter to some image or frame of a video, like to darken it, or to apply a gradient of color, or something like this... You're essentially applying some operation to the pixels of an image, which are set up in a matrix, and have even some depth, because there's a color dimension... So you have this matrix of numbers, and then you apply some operation on the elements of this matrix, or really this input volume...

\[00:08:13.11\] In AI, of course, with convolutional layers, you are doing almost that exact same thing, because you're applying a series of weights, and bias, and functions (activation functions) to individual elements of a matrix or an input volume. But even in recurrent layers, or fully-connected neural networks and that sort of thing, the types of networks that might be relevant to other things, like text, or just a general classification problem - even those take some input vector or matrix, and just apply a series of weights to those, apply activation functions like tangent and sigmoid and all of these, in an element-wise way. So you're really doing this sort of matrix operations that graphics cards were always good at.

It turns out that it's really good to use those sorts of graphics cards for those sorts of operations, which are done specifically in AI training. Of course, we're gonna talk maybe about inference today too, but I think it came about because these are the sorts of things that happen iteratively, thousands and thousands and millions of times when you do training for an AI model.

**Chris Benson:** That has to be the most accessible explanation to that evolution that I think I've heard anyone say. I think you did it better than NVIDIA says it.

**Daniel Whitenack:** Thank you. Well, they can pay me, if they like -- or they could send me a graphics card. \[laughter\]

**Chris Benson:** There you go.

**Daniel Whitenack:** That would probably actually be better. NVIDIA, if you're listening, hint-hint... You know, Titan RTX... I won't even take the newest one. Don't even give me an A100.

**Chris Benson:** No, give him the newest one.

**Daniel Whitenack:** It's just small potatoes, that $5,000, or I don't even know how much it is, the Titan RTX.

**Chris Benson:** Well, now that we have been pleading for free stuff, let's move on to some of the things that they announced, which many organizations around the world are going to be trying to evaluate and figure out how they're going to incorporate, buy into, and basically utilize this new hardware, and the supporting software capabilities that go with it.

**Daniel Whitenack:** Yeah, definitely.

**Chris Benson:** One of the things to talk about here - even before we get to announcements - are the types of GPUs that are currently available, and in what forms, what kind of off-brand GPUs are out there... Because NVIDIA isn't the only player in the space. Any insight into that?

**Daniel Whitenack:** Yeah, it's probably worth distinguishing a few things here. I guess first is accelerators that are out there, and types of GPUs that are out there... And also access patterns to those, whether that be locally, or in the cloud, or whatever.

At least from my perspective - and I'm by no means an expert on this, on the graphics card front; actually, probably my brother-in-laws could do a better job... But there has been a progression, and most of the time you'll see graphics cards referred to by some series of numbers, and acronyms... Recent ones have been something like 1080 RTX, or Titan RTX, or something... So those are the graphics processing unit that you would buy, and then you have to plug it into some computer.

Some people say "Okay, I'm gonna develop AI models, so I'm gonna buy a tower, a desktop computer, and then I'm gonna buy a graphics GPU", like one of these RTX GPUs, or something, "and I'm gonna put it in my PCI slot in my motherboard. And then when I do AI training, I'm gonna offload some of those training operations to the graphics card or GPU that's input to my computer."

\[00:12:16.14\] That's one of the first ways you might think about doing this - I'm gonna do AI development, so I can buy a computer, and then I'm gonna buy a graphics card and just put it in there. A lot of those, of course, come from NVIDIA; they make a lot of those cards... But there's off-brand ones that kind of are similar to the models that NVIDIA has. And then there's also other brands that have their own style of graphics card to them. Have you ever built or thought about building this sort of workstation for your home, to sit by your desk, or something?

**Chris Benson:** I think I'm way too lazy to do that. At this point I'd much rather go to a cloud provider, if I'm at home, and use what they've built. I've noticed that most of the people that had workstations specifically for their AI workflows seem to have moved off those in recent years; either in the cloud, or if they're big enough, into more of a data center, or at least a workstation level, where they're buying a workstation vs. buying individual GPUs.

One of the things I was thinking as you were just talking about that was one of our early episodes - episode 15, called Artificial Intelligence at NVIDIA - we had NVIDIA's chief scientist Bill Dally on the show, and he absolutely schooled us in the hardware architecture...

**Daniel Whitenack:** Yeah, definitely.

**Chris Benson:** Do you remember that? He really schooled us in the hardware--

**Daniel Whitenack:** Much deeper than we'll go on this episode, so definitely take a look at that.

**Chris Benson:** Yes. And we asked him to -- against other architectures... And he went there and described it. So if that aspect of it - not just the NVIDIA architectures, but how they compare to other things, I would encourage listeners to listen to that episode; he will absolutely school you in the fundamentals there.

**Daniel Whitenack:** Yeah, for sure. I described the graphics card or GPU, which is a lot of times what people think of when they think of a GPU or accelerator in the AI world - they think of one of these GPUs, or a series of them... But there's other options, too. There's the TPU, or Tensor Processing Unit from -- is it Tensor Processing Unit or TensorFlow Processing... I don't know if they've put the brand in there. I think it's Tensor Processing Unit.

**Chris Benson:** I believe it is, from Google.

**Daniel Whitenack:** The TPU that Google developed, which is another type of accelerator... But there's even other architectures out there, other than CPU, GPU, TPU. There's FPGA, and other things... Yeah, there's a lot of options out there. And like you said, there's options also -- so I kind of described, "Okay, if you're developing AI, you could just buy one of these computers to have at your desk..." But there's also - just like how other forms of compute have been commoditized via the cloud, there's easy access to cloud resources for GPUs too, in all the clouds, and in even special-built GPU cloud services, like Paperspace, and others.

I know when I was looking around a while back for a project -- I don't know if it's still the case, but I was trying to find "What is the cheapest rate to use a GPU in the cloud?" and I ended up going with Paperspace. I don't know if it's the cheapest anymore. I do use Google Colab, as I mentioned a lot of times on the podcast... And of course, you can have access to a free GPU there. There's trade-offs, because it's in a notebook, and that sort of thing... But anyway, there's a lot of ways to access them which aren't buying a computer and setting it on your desk.

**Chris Benson:** That's true.

**Daniel Whitenack:** That's definitely nice.

**Chris Benson:** \[00:15:55.02\] So why don't we dive into some of the announcements that NVIDIA made at GTC. As we're recording this, I think it was about roughly a week ago that they made the announcement; it'll be another week as it rolls out. I'll start us off... They started in -- I'm gonna probably butcher the pronunciation, the NVIDIA Ampere Architecture; did I get that right? I've read it, but I haven't watched the video to see how he's pronouncing it.

**Daniel Whitenack:** Ampere.

**Chris Benson:** There you go.

**Daniel Whitenack:** I think in reference to Amp in electronics.

**Chris Benson:** There you go. I didn't make the connection there. Okay.

**Daniel Whitenack:** I don't know, at least that's how I was saying it.

**Chris Benson:** I know that essentially this is what they've used to replace the existing architecture and expand it. They're really focusing on (I think) a more realistic, in the sense of -- I say cloud, but when I say cloud, I don't necessarily strictly mean cloud providers. If you're putting together a data center with a whole bunch of GPUs or GPU servers in it, they're really focusing on not only the performance side, but the usability, as I was reading through it.

**Daniel Whitenack:** Yeah. And what I was gathering also in talking with some other people about this - so the generation before this latest one was focused more on the ray tracing elements, which is the RTX in a lot of these cards... Which, to be honest, I'm not a big expert on ray tracing.

**Chris Benson:** Nor am I.

**Daniel Whitenack:** That has implications, of course, in graphics, and that sort of thing... But it wasn't a huge advance in terms of the size and capabilities of the graphics processing unit itself; it was more of this generation of additional ray tracing capabilities... Whereas this next architecture which they're releasing, which they're calling the A100, or the Ampere Architecture, which includes this A100 card or GPU - this is a fairly significant jump in the size and capabilities of the graphics processing unit itself. I think part of that has to do with the way that they've laid out the transistors and all of that on the substrate. It's much more dense, in my understanding.

**Chris Benson:** Am I recalling it was something like 20 times performance improvement over the V100?

**Daniel Whitenack:** Yeah, so it's 20 times greater flops, which is like a measure of -- actually, you probably are better versed in the acronyms, but this is like a common way to measure the performance of super-computers, and that sort of thing. So 20X greater FLOPS for AI, although they do give some benchmarks, which is pretty nice, just for reference. What I was looking at - they give some benchmarks for training BERT large-scale language models; we have an episode on BERT as well, if you'd like to learn more about that.

**Chris Benson:** Yes, we do. We've mentioned it in several, actually.

**Daniel Whitenack:** Yeah, it's good that we ended up having that conversation... But the BERT models are these very large language-related models, NLP models that have just tons of parameters. Actually, these large language models have even billions of parameters now; I forget how many BERT has. But they give some benchmarks, both for the training and inference on speed-ups, on training BERT.

On BERT itself, they're saying that above the V100 -- so if you go to Google Cloud, or if you go to Paperspace, or one of these platforms, at least right now I think the best GPU that you can get access to is called a V100, which is the previous generation. It's pretty wicked fast. I've used this in a couple projects, and it's quite astoundingly faster that an entry-level GPU.

**Chris Benson:** Yes. And it's the basis for the DGX line of servers as well. Or was, prior to this release.

**Daniel Whitenack:** \[00:20:03.08\] Prior to this, yeah. And they're saying there's a speed-up between 3X and 6X in the training for the BERT large-scale training. And the difference between the 3X to 6X has to do with the precision of the floating point numbers that you're using in the model.

I'm stepping way beyond my bounds into computer science land, where I don't deserve to step... But in the models, obviously, you have all these weights and parameters, and the matrices that you're transforming in these models, and... Computers work with numbers, and those numbers have to be represented in some form, in some precision. If you're representing Pi, you're not gonna represent all digits of Pi; you're gonna have to cut it off somewhere. This is having to do with that precision of the numbers. If you reduce the precision of how you represent numbers, you can sometimes speed up your performance. So that's what they're talking about there, with that difference of 3X to 6X.

**Chris Benson:** Yeah. I'm looking at their inference and I know they're saying it's a 7X speed-up on inference. So it's substantial in that case.

**Daniel Whitenack:** They say this card, this A100 accelerator - they bring up this idea of... What do they call it? I don't know if you say \[unintelligible 00:21:29.24\] I'm thinking of like the fighter jet... But the multi-instance GPU, which is a really intriguing idea.

**Chris Benson:** Do you work for us now, in that way?

**Daniel Whitenack:** Yeah... \[laughs\] They're saying it's a multi-instance GPU, which in my understanding you can basically treat the GPU as seven GPUs. Is that what they're saying?

**Chris Benson:** So I was wondering that myself... A big topic that I spend my time at work is around multitenancy in your workflows, and the accessibility of compute in those... And I was taking it in that way. But I'm not sure, because they're a little bit ambiguous in the way they use some of the terms.

Another one that I've noticed - they talked about the need for no code changes, and I'm assuming CUDA code changes in this case... But they're not always as specific as they might have been in terms of their explanations here.

**Daniel Whitenack:** I was wondering about that as well. Of course, there certainly are ways to make changes like this transparent, but there's a change somewhere, right? It's just maybe at the abstraction level you're working with in TensorFlow, or something. You don't have to make a change in TensorFlow, but in the underlying libraries somewhere it seems like there's some type of change.

**Chris Benson:** Yeah... On the multi-instance GPUs, as I'm looking through that, it's talking about seven different isolated GPU instances running different applications simultaneously.

**Daniel Whitenack:** Yeah. So it seems like when they say 7X speed-up for BERT-large inference, and they have under there in parentheses 7 MIG (multi-instance GPU)...

**Chris Benson:** They're using them all?

**Daniel Whitenack:** What I'm assuming that is meaning is they basically are running seven inferences in parallel, on the 7 GPU... Which seems to be the same performance that they're indicating for as the V100. So inference-wise it seems like the change is that you're able to run things in this parallel way, whereas on a V100 or something maybe you couldn't do that, so there wasn't that speed-up. I'm making some assumptions here...

**Chris Benson:** That's true. I know for a fact that there are folks at NVIDIA that listen to the podcast, so hopefully if we're getting this wrong, they can...

**Daniel Whitenack:** Yeah, clear us up.

**Chris Benson:** They can clarify for us and we'll come back at a later time, on a later episode and say "We were wrong." We're happy to do that. So we're making the best of it.

**Daniel Whitenack:** \[00:24:02.27\] We were wrong, and if you send us a GPU, then we'll prove that we were wrong, on our own local system.

**Chris Benson:** \[laughs\] Oh, boy... You're back to begging. Uh, uh...

**Daniel Whitenack:** But it seems pretty cool. I like the idea that if you've gone from a stage of training to inference, basically - whereas before maybe you had this full powerful GPU that you were basically running inference on, but not like soaking up all of the goodness of the GPU and the computer, here they're basically saying "Okay, well you can sort of parallelize the inference over that and still utilize this whole compute capability..." But now you just have this ability to split it up in nice ways. So I definitely think that's pretty cool.

**Chris Benson:** It's interesting with the parallelization of this, there was an image that I saw NVIDIA had put out, where they were kind of comparing the old architecture with the new A100 architecture, and they basically had one little server for the new, that was the equivalent --they were showing rows of racks of servers, in terms of its productivity. But it was definitely an impact. It was something that me and some folks I work with were passing around... So yeah, gotta keep up with times, I guess, if you're gonna keep driving forward on compute. Anything else on the architecture at large before we talk about DGXs or dive into the processors themselves?

**Daniel Whitenack:** I think the one thing you mentioned about the speed-up without code change - they do introduce this new idea where... These people before talked about floating point 16 and 32 numbers, where again, these are having to do with the precision with which you're representing numbers... They introduced this new idea of TensorFlow 32.

**Chris Benson:** I saw that.

**Daniel Whitenack:** Which apparently with float32 -- obviously, if you have more digits, you can represent more numbers; there's this range, but it's not as fast as using floating point 16, in some cases. What they're saying is they're trying to balance the two, in that they have a wider range of numbers they can represent in this representation, but with lower precision, such that they can speed up training?

Again, hopefully I've represented that well in terms of how they're thinking about it. There's an image of this on a blog post that we'll link in our show notes if you wanna understand how the floating point 16, 32 and TensorFlow 32 compare. But this is definitely a new representation on this chip that I don't think has happened on any other architecture yet. That might be worth pointing out.

**Chris Benson:** Yeah, totally. Another thing that we probably should mention from the architecture is that they've gone to the new, third generation for NVLink and NVSwitch. That manages the network scaling of how you're moving your data around through the chips, and I think it's something like a ten times bandwidth, if I recall, in terms of what it can do... Or it may have been ten times more than PCIe generation 4. I think that's what it was, that I was recalling reading.

**Daniel Whitenack:** I'm gonna get the number wrong, but they said there were so many terabytes per some insanely small time. It was like a bunch of data you could transfer back and forth very quickly via these links.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** So the NVLink - that has to do with communication of data between GPUs. Is that the idea?

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** That's what I've always assumed. I don't have the opportunity too often to run my training on 32 GPUs, so this is where I'm getting to the edge of my understanding... But I did watch a YouTube video, and I think that's what they implied.

**Chris Benson:** \[00:28:06.00\] Is that like staying at a Holiday Express?

**Daniel Whitenack:** Yeah, I've stayed at a Holiday Inn Express, exactly.

**Chris Benson:** There you go.

**Daniel Whitenack:** Yeah, I've watched the YouTube video. So my understanding was -- because people also build these Bitcoin mining rigs, and they have all these GPUs on top, and they're running all the time... And the way they do that is they basically connect a bunch of them to PCI slots on a motherboard, and to do that they have these little adaptors called Risers, that come out of the motherboard... But apparently, those are very slow in terms of communication between the GPUs, and PCIe is slow in that way... At least that's what they're implying, that NVLink and some of these other things from NVIDIA help facilitate that communication of data, and like you're saying it helps scale out to like - now if you have 32 GPUs in your data center and you're trying to run some computation across them, you're gonna need to have very quick communication for scientific applications, or AI applications that are not just Bitcoin mining, which is just running operations; there's actually a communication that's needed.

**Chris Benson:** If I recall correctly - and it's been a while since I've delved into those, back when they originally released the architecture - I believe that NVLink connects GPU to GPU; it gives you that interconnect between the two.

**Daniel Whitenack:** Yeah.

**Chris Benson:** And essentially, that mesh is something that NVSwitch then connects at a higher level, combining the different NVLinks, too.

**Daniel Whitenack:** Oh, I see. So NVLinks - GPU to GPU, and NVSwitch... We'll call that now, but listeners, if you know we're wrong, let us know and we'll put a note in the show notes, or something. That's good to make that connection.

**Chris Benson:** Okay.

**Daniel Whitenack:** And of course, these - because they're connectable and scalable in this way, it seems like this is their new way of replacing what they did have in the DGXs; the DGXs were the sort of boxes that they put in data centers... GPU data centers to scale up, like an AI super-computer of some type.

**Chris Benson:** Correct. Or a cluster of them, which is becoming more and more common. In the earlier days, when the original DGX 1 came out, and it had 8 GPUs in it, people would get that, and that in itself - people were calling it a super-computer. We talk like that's such a long time ago, but it's only been a couple of years. Then they moved to DGX 2, that was 16, and then they've actually scaled back... In just a moment, let's talk about that.

**Break:** \[00:30:52.08\]

**Chris Benson:** So now we have this new NVIDIA DGX A100, which they've kind of broken the paradigm of their labeling... So they went from DGX 1 originally, to DGX 2, and now they've gone to DGX A100.

**Daniel Whitenack:** Maybe you'll get one. I don't know if I'm gonna get one...

**Chris Benson:** We'll see...

**Daniel Whitenack:** Yeah, yeah.

**Chris Benson:** Sadly, I'm not in charge of procurement, and I'm certainly not in charge of procuring one for my own personal use. We'll see.

**Daniel Whitenack:** I'm guessing that my non-profit is not gonna go on, but if you happen to be getting your DGX A100 and you'd like me to run my training on it, I would be more than happy to do some benchmarking for you.

**Chris Benson:** Gotcha. I'll talk to my bosses' bosses' boss and see what's possible.

**Daniel Whitenack:** Exactly, yeah.

**Chris Benson:** I'm there for you, my friend.

**Daniel Whitenack:** I'm really into the mooching today.

**Chris Benson:** Totally, I got it. I'm good. We're there to support you. I'm there for you. But yeah, with this new architecture it's much more performant, but they've actually cut the number of GPUs in the server back down to 8 from 16... But it has the enhancements that we just talked about, that are at the processor level architecturally.

**Daniel Whitenack:** Yeah. It's interesting that they've kind of cut that down, but they have this multi-instance GPU capability. Actually, they say you can run 56 GPU applications...

**Chris Benson:** Right, seven per GPU.

**Daniel Whitenack:** Seven per GPU on the DGX. And like you were saying, even though there's fewer here, because the size increase of A100 - they kind of show this picture in the keynote, which people can watch... But supposedly, you can reduce the size and footprint of your data center, because you're doing more computation per box, per DGX, than you were before.

**Chris Benson:** Correct.

**Daniel Whitenack:** And this is interesting... They were saying each box - I think the price they said was like a million dollars. So it's not what I'm gonna be putting on my desk. But certainly within the range of compute budgets for some companies. Each one was that expensive, but you could do the same that you could if you spent previously 11 million dollars on your data center. Scaling-wise, you can do more with less - I think that's the idea.

**Chris Benson:** Yeah. When I was originally looking at these announcements as they came out - I think one of the callouts here, and this architecture does start to address that... But I think people in organizations that can afford to get DGX systems, and they do choose to invest in those, they underestimate what it takes to get productive with them. They kind of just think "Oh, I can go buy a DGX and everything's gonna work out after that."

**Daniel Whitenack:** "And then all my training will complete in three days and I'm done."

**Chris Benson:** Exactly. But I think the challenges when you're scaling up to one or more DGX systems, then you are talking about - and I'm not just talking about a DGX architecture, I'm talking about in overall systems and software architecture in your organization, and specifically data architecture that can support moving a lot of data around through training, in an organized way, that flows in with your business processes... And that is a big challenge. And being able to make all that work in your own organization is where a lot of organizations are struggling.

\[00:36:11.01\] I know NVIDIA works hard to throw them a bone; they recognize that. And there are a lot of tools that they put out there to try to help you through that process... But I think this architecture has kind of accounted for some of those pain points of the past, and they're trying to make it easier to utilize n number of GPUs across multiple DGXs... Which is good, because there are very highly-scaled cases where you might be doing a lot of experimentation with hyper-parameter optimization, and you wanna try just an insane number of different possibilities when you're doing your training, and have the ability not just to train one time, but to train many times; thousands, or millions even. I think they've understood that, and this architecture is starting to address that highly-scaled use case.

**Daniel Whitenack:** Yeah, I think that gets to the point of -- you know, maybe something that is on people's mind as they listen to this is "Why not just the cloud, just use GPUs in the cloud?", which you can certainly do. If you wanted to run 1,000 experiments to test all your hyper-parameters, you could spin up 1,000 GPU nodes in Google Cloud, or Amazon, or wherever... But if you're doing that at any sort of frequency or length, the bill is gonna add up pretty crazy fast on that.

So if this is something that a company actually wants to do, and AI is central to their strategy, to their products, and they want to get that very best model, and they want to do that experimentation over and over and over again, if this sort of DGX system is capable of supporting the usability side of things, like you're talking about, then they could run those over and over again, as much as they are able to, usability-wise.

For some people -- I keep joking that I'd love to have access to this, but I probably wouldn't just me myself, since I'm the AI person, doing a lot of the AI things on my team... I don't have a team of 40 different people trying to run things all the time... Then I'm pretty okay with using a GPU instance in the cloud when I need it, because I might run a training for 48 hours, or even four days, or something, but I do that not very often. And it's just me. But if you've got a team of 40 people, or you've got multiple teams throughout your organization and they all need to run that stuff, that adds up really quick.

**Chris Benson:** It does. I have been pleased -- just in general, when you combine the advances in NVLink and Switch, when you combine that with the multi-instance GPUs that these A100s are at this point, the scalability technology, which without diving into it, is called Mellanox ConnectX-6, if I'm saying that right... It's a nice blend of architectural considerations to get you there. And we haven't even talked yet about advancements on the edge... And that is a huge, huge area at this point.

**Daniel Whitenack:** I'm glad you bring that up, because it's probably -- even though I may not get access to the DGX system, I am thinking about various applications at the edge. In fact, I had a conversation earlier today with another guy who's working on totally different stuff in manufacturing; they're not a large company, but they do stuff at the edge, in the manufacturing setting, with low-power devices already. Think like a Raspberry Pi, and that sort of thing... But if you could bring the power of this sort of GPU right to the edge, to a machine, where you're doing computer vision to detect anomalies in your manufacturing process or something like that, that's a pretty major advantage, and that brings that sort of capability to those sorts of people that are working on smaller teams, and have that specific use case for running AI at the edge.

\[00:40:19.05\] Along with the A100 they have the EGX A100 which they're releasing, which seems to benefit from some of these things that we talked about with the A100, but they also talk a lot about security. Security, and then end-to-end encryption of AI models; they encrypt all the things. I have some ideas about why that may be important at the edge, but... Do you have any thoughts on that?

**Chris Benson:** Well, we live in a time where we've had so many episodes where we talk about malicious actors, and they could be anywhere from a state level, all the way down to teenagers that are savvy and having some fun... And we're in a world now where you just can't really assume that you can put anything that's not secure out at the edge. And that doesn't have to be in the defense world, where I live; that can be really anywhere, any industry at this point. So they have had obviously their previous edge-oriented offerings, and we like to -- there's the smaller-scaled stuff that we'd like to play with. They have the NX out now, they've had Nanos out the last couple of years, and stuff like that...

But as industry really gets serious about pushing inference out to the edge, and having it both widespread and pervasive, having kind of a comprehensive and sophisticated security model that they can deploy onto these platforms is pretty key. I think at this point it's no longer a specialty thing; it's now something we're all having to acknowledge.

**Daniel Whitenack:** Yeah. If you think about some products that have come out over the past years -- like if you think about a drone that's come out... I think there's multiple drones now that have come out, that have some sort of AI model running on them, that does something -- like it follows you around, or whatever the thing is; it does some operation, object-detection or something. If you're thinking about releasing a product that has this sort of edge GPU running inside of it, whether that be in a manufacturing sense, or like the drone, or robot sense or something, really the AI model that you're releasing with that is part of your IP, and you've spent hundreds of thousands of dollars into it.

So you've got the malicious actor side of thing, but you've also got the fact that "Oh, if I buy a cool thing to strap on my manufacturing machine", that has one of these GPUs in it, and it's doing something sophisticated - well, if they're giving me the model in this product that I'm buying, why don't I just unscrew the hatch and plug my computer in and just take the model off of it and now I don't have to pay them for that product anymore?

So we've gotten to a point where the actual AI model is a piece of IP and is extremely valuable, so you wouldn't want your client or your competitor especially to just be able to buy one of your products, unscrew the thing and copy \[unintelligible 00:43:24.12\] from the machine over to their machine, and then they've rid themselves of their need for buying your product.

**Chris Benson:** I was just gonna say, it's funny - I've noticed this a lot lately, when we talk about the fact that you're now seeing models being deployed to the edge, just in massively parallel, deeply-pervasive in whatever your business is... As you know, I have a daughter who's young; we just went through her birthday, and the toys that you can buy these days are now incorporating this stuff in.

**Daniel Whitenack:** That's crazy.

**Chris Benson:** \[00:44:02.15\] You can actually buy toys that have convolutional neural networks in them, you can buy ones that have NLP capability... And I think that's the moment where I find myself surprised, because we're so used to talking about it in these business-oriented contexts, but then that's also someone else's business, is to make these toys... And I keep being surprised at these toys that she unwraps, and they have these capabilities. Of all people, I should not be surprised, I suppose, but I am, just to see it in that context.

**Daniel Whitenack:** Yeah. Well, and especially in that case, depending on the age of the child, it would be important for that AI model to run offline on the device. Let's just keep that thing offline; it's good if it acts as a toy, but let's not connect it to the Wild West of the internet just yet. You'd wanna run that sort of model at the edge itself and upload it to the device, I think.

The other thing I wanted to mention is -- you mentioned the Nano... So if people are thinking about Raspberry Pi -- and this gets down maybe where it does bring some accessibility to a lot of people... So there's Raspberry Pi devices, which are like single-board computer devices, which have been of course wildly popular... But NVIDIA released a Jetson Nano, which is like a single-board computer with a little GPU on it. And I was actually thinking about getting one of those, but I don't know if it was in this series of releases, or just very recently... They released this Xavier NX, which is like a next, greater version of this. They actually call it a little AI super-computer. It is a single-board computer; it's got something like a 10x compute, or something like that, of the Nano.

So when I was going to get that one, I just ended up getting the other, because it seemed pretty awesome. I think a couple of things struck me about this... One is - I'm always trying to think, for example, the cases that we work with, and the people that work in our organization around the world, of course, work in a disconnected setting a lot of times, because they're out in the field... And of course, a lot of people around the world don't have internet. But then also, we're not flowing with money; so what is a way to get things running at the edge in a reasonable way, in a disconnected offline way, but also at a cost-effective way? I find it really interesting that some of these things are coming out that have sort of a GPU capability. And the Xavier NX - it's interesting that it's got the GPU and you can run inference on it, but you can actually update your models as well.

They talk about doing transfer-learning, which is like an update of a model; so you're redoing some of the training. Maybe you're training some of the layers, or you're training additional layers that you add on to your model... So I'm curious, when this comes in - it should be coming in today, so I'm kind of watching out my window right now.

**Chris Benson:** Yeah, I'm gonna reveal -- before we started the episode, when Daniel and I were talking, he was watching out the window for UPS to show up with it.

**Daniel Whitenack:** I'm stationed right by my front window.

**Chris Benson:** We might possibly get a package opening here on air \[unintelligible 00:47:19.26\]

**Daniel Whitenack:** Fingers crossed...

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** So I'm curious to kind of try -- what I wanna try actually is just to start with a small model, and see how the training compares with a better GPU, in Paperspace or something. Try it all the way up to, like, "How far can I push the training on the NX?" How big of a model can I train from scratch on it? And then how big of a model can I do transfer-learning on? Because yeah, I find that incredibly interesting.

\[00:47:58.04\] The other thing that they talk about with NX's cloud-native things at the edge - and I know both you and I are really big fans of Docker, so... I find it interesting - whereas before I didn't see them emphasize a lot of things about using Docker at the edge to run AI-related workflows, now they're saying "Well, this is how you should do it in this device." I find that really interesting.

**Chris Benson:** And not only Docker, but Kubernetes as well. I know we've talked about this on other episodes when we were hitting slightly different topics, but really this whole AI revolution that's happened, especially if you're looking at the last 3-5 years - we've really benefitted from the revolution that had just swept through the software development world, and software systems deployment world out there... Docker and Kubernetes became THE systems to build on, and we landed on top of that and just took that over.

So it's really good to see all of the hardware, whether you're talking about the lower-end GPUs such as the Nano that you talked about, all the way up to the latest tier, this DGX A100 - all using the same architecture. So if you learn at one place, you can use it from the most scaled down to the most scaled up version... And you can use it in the data center, and you can use it in the edge, and that is a wonderful, wonderful thing that we've inherited.

**Daniel Whitenack:** Yeah, I totally agree. I've really enjoyed talking about all of these things... I've got a lot to learn on all of these fronts. If you're thinking like "Oh, all of this GPU stuff, and accelerated AI is very new", don't be afraid; I didn't come from a computer science background, but there is tooling that's accessible for you to get into some of these topics. One learning resource - a lot of times in these Fully Connected episodes we like to mention learning resources...

So actually NVIDIA themselves have what they call the Deep Learning Institute, and they have a series of courses that talk about everything from getting started with AI on the Jetson Nano - that's that little single-board guy that we were talking about... All the way to more advanced topics, with high-performance computing, high-performance computing with containers, they talk about various GPU-accelerated frameworks like Rapids, and AI in the data center, and all sorts of topics. So if you're interested in this sort of accelerated AI topic, you might check that out. We'll definitely link it in the show notes as well. I know I have a lot to learn there myself.

**Chris Benson:** I'm gonna go slightly off-topic, but it just occurred to me as we were talking about this... For the learning resource I'm gonna throw out there, it's gonna be one that a friend of mine mentioned just earlier today...

**Daniel Whitenack:** Good. Relevant.

**Chris Benson:** ...that he has utilized. For those of you who may be familiar with the learning site Udemy.com, there is a course on there called Docker and Kubernetes, the complete guide. It's not expensive; there's a lot of coupons, and you can get it at a very low price, like $10, $12, $13.

This person had gone through that course and was like halfway, two-thirds of the way through, and just thought it was fantastic to ramp up on it. Given that recommendation, I'm gonna recommend that to everybody, and we will put a link in the show notes. Because if you're gonna be in the AI world, it really pays to understand Docker and Kubernetes well.

**Daniel Whitenack:** Awesome. Well, check those things out, reach out to us on our Slack channel or on our LinkedIn or Twitter with any questions or thoughts that you have... I hope that this has been a fun episode. It has for me.

**Chris Benson:** It has been!

**Daniel Whitenack:** We will see you next week. See you, Chris.

**Chris Benson:** See you later, and I apologize to the NVIDIA people who are going "Oh my gosh, those guys... They need to know more about it before they talk."

**Daniel Whitenack:** \[laughs\] We accept feedback in the show notes, and everything is on GitHub, so you can submit a PR...

**Chris Benson:** Okay...

**Daniel Whitenack:** So yeah, feedback welcome.

**Chris Benson:** See you next time, Daniel.

**Daniel Whitenack:** Bye.
