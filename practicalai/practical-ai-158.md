**Daniel Whitenack:** Welcome to another Fully Connected episode of the Practical AI Podcast. In these episodes, Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss some of the latest AI news and we'll dig into some learning resources to help you level up your machine learning game. I'm Daniel Whitenack. I am a data scientist at SIL International, and I'm joined as always by my co-host, Chris Benson, who is a strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. Just enjoying the day, tearing through all the AI and deep learning news out there. Having a good time as always.

**Daniel Whitenack:** There's always interesting stuff, right?

**Chris Benson:** There is.

**Daniel Whitenack:** Yeah, and we're coming up on - here in the States, coming up on U.S. Thanksgiving, for those that are familiar with the holiday. So we'll get a little bit of time off, and I'm looking forward to that. It's been a long couple of weeks. I submitted a few conference papers to a deadline on — well, the deadline was Monday, but the deadlines for these research conferences are like midnight anywhere on Earth, or something like that... So actually, my timezone, it was 7:00 AM the next day was the deadline, right? So basically, that meant that there wasn't a lot of sleep that was happening from Monday to Tuesday morning at 7:00 AM, and I think some last-minute changes and submissions... So I think I'm still catching up a little bit on sleep after that, but I'm really happy with my team and what we've submitted. So that's good.

**Chris Benson:** Gotcha. Well, as you're looking in — I know our listeners can't see it, but as you're looking at the video feed of me, I'm the one in the center, okay? From the sleep deprivation, the multiple Chrises, and stuff.

**Daniel Whitenack:** \[04:11\] Yeah. Well, I appreciate that clarification. That'll help throughout. And you know, if you see me doze off, just send a virtual poke or something. You remember—

Chis Benson: Pokes? That was on Facebook.

**Daniel Whitenack:** That was like one of the first things in Facebook, right?

**Chris Benson:** I never figured out really how to use a poke the right way. It just never made sense. I think I poked one person and then I felt silly, and I never did it again. So I am not sure what it is.

**Daniel Whitenack:** Maybe it is worthwhile for our listeners to kind of talk a little bit -- I'm sort of taking note that conferences are happening again, and at least in a hybrid sense; of course, virtual conferences happened through COVID times, but normal conferences are happening again, and maybe it would be worth for our listeners to just kind of talk through a bit of the landscape of conferences... Because occasionally, I get questions about, “Hey, I'm starting my interest in AI” or “Our team is working in AI, and we've done some cool things.” I'd like to disseminate that somehow to the community, "How do I do that?" So some teams are getting into this, they don't know what conferences there are, and how to start involving themselves in that community...

So yeah, one thing to note is that there's sort of research-focused conferences that are primarily involving academics, although industry researchers as well from groups like Google or other places. And then there are kind of industry conferences — well, they used to have O'Reilly AI, but—

**Chris Benson:** Yeah, they stopped doing it, last I heard.

**Daniel Whitenack:** I think they stopped doing that one. There's like Open Data Science Conference; maybe you can think of some others. NVIDIA.

**Chris Benson:** NVIDIA is a big one. They have several each year.

**Daniel Whitenack:** Yeah, Nvidia, GTC, and other ones. So there's kind of a major difference between these two types of conferences, and people might not be aware of this. Some of the things -- like, recently we saw the BigScience working group come out with the T0 model, which we can talk about that later in the episode, but that's pretty cool... But that was submitted as a research paper to a research conference, and that is actually a sort of peer-reviewed process.

That's what I mentioned earlier on that we were submitting early in the week, is “Hey, I created a new type of neural network” or “I applied a neural network in a slightly different way that no one's ever done before” or maybe “I created a new dataset that is in a new language”, or it's different than what people had done before, or it includes different types of data, and I want to publish that as sort of original work, and have it peer-reviewed by experts giving feedback, and eventually accepted as a conference paper, which basically means that it's been peer-reviewed by other researchers in the field and deemed to be original and sort of scientifically and experimentally valid, at least based on the review. That doesn't happen in an industry conference, for the most part, where some talks are maybe invited... And in certain cases, there's a call for proposals for talks, but those talks that are submitted are not peer-reviewed in that way. So you might say, "Hey, I'd like to propose a talk about our AI infrastructure at SIL International" and I could talk about that. It's not like we're doing sort of original things necessarily that others haven't done, but it's useful in a practical sense for people to also hear that information, ask questions, have it be part of the topic in a practical way at a conference. I don't know if there's anything you want to add to that. I just thought maybe the listeners might not be familiar with that whole world.

**Chris Benson:** \[07:57\] No, I think that's really good, in the sense of being able to distinguish between the two and understanding what you're going to. Most of the conferences I've been at were on the commercial/industry side, as opposed to the research side, and they're very different cultures, as you just pointed out. And there's definitely, in the industry side, a desire to say, “Look what we've done from more of a business standpoint.” They may not be trying to sell you something, but they both do prestige, but they’re kind of a different approach to it, and different communities that you're selling it... And it makes it interesting to go to both, which I would encourage people to do, because they're very different experiences, going to the two.

**Daniel Whitenack:** Yeah, and that's not to say — that's a good point, Chris, because you don't even have to present something to go to either one of these types of conferences.

**Chris Benson:** Yeah, most people are not presenting; most are just listening.

**Daniel Whitenack:** Right, exactly. So, if maybe you're out there and you're thinking, “Well, how do I get connected in the AI industry or in AI research?” Well, look, maybe for a conference on the research side, like NeurIPS or ACL or EMNLP, something like this - you know, you could just attend, and ask questions, get connected with people, see how it plays out and how papers are presented, and what they look like... Or if you're on the industry side and you just want to do that networking, get connected, see practically how people are applying AI or doing infrastructure or something like that, just attend and you can learn a lot.

So last week, I went to a conference and I gave a -- it was just like a six-minute presentation... So I didn't have to prepare that much. For the other 3.5 days, I was just participating as a participant, and that was great. I really enjoyed it.

**Chris Benson:** I'll bet. It's been a while, because of the pandemic, since I've been to one now, and as the world opens up, and maybe we don't have a winter spike, if we're really, really lucky, then maybe we can get there sooner. I would also say that it's interesting that there's a different experience if you're a new conference-goer. So if this is your first conference or two, versus someone who's been to many, then you also - as you go more often, you learn the value of what's available that's not a session... And you end up spending a lot of time making friends and having really interesting hallway conversations.

I think most people who go the first time, they feel like they need to get as many sessions in as they can and see as much, because they think that that's the best way to get the value. But some of the best takeaways I've ever had, were from ad-hoc conversations. It's a moment where if you can get over any shyness that you might have, you should just walk up to a group of people and introduce yourself, and just be bold, and they will welcome you in... And you'll hear things that you can't hear anywhere else often, and people will share, in a small group, even in a small group of strangers, things that they would not say on stage. So I've had some really, really memorable moments that were not in formal sessions per se, and I would encourage people to do that. It's one of the reasons to show up in person, instead of it being a virtual.

**Daniel Whitenack:** You also get a sense sometimes of things that are really kind of hard to pick up online. Online, for example, I could research experiment tracking software for my AI projects... Like, "Oh, I'm going to queue up a job, it has this data, it's going to run, it produces these metrics, I'm going to track all that stuff." Well, I could research around and see, like, how are people doing that? What are they doing? Are they rolling their own? There's different types of those kinds of things out there... But if you're at a lunch table at a conference with 7-10 other practitioners, actual practitioners from a variety of organizations - I mean, that is a huge value, and if that topic comes up, asking the question, “Hey, what do people use for this?”, it's not like a complete industry survey, but even just in those few seconds, you get a real good sense about how often this is on people's mind, and what they're using in terms of specific tooling, and how important it is or not important it is in different organizations...

**Chris Benson:** \[12:08\] I actually want to follow up on that, because you've raised a great point. If you go with other people from your organization, and it's time for the lunch break or whatever, don't stay together. Everybody break up...

**Daniel Whitenack:** Yeah, that's a good tip.

**Chris Benson:** Yeah, everybody break up and go to an individual table that has nobody that you know in it, and fit in on that, and then start the conversation—join in on the conversation that's there, or start it if everyone's being too shy, and then have those rich conversations, and then go back later with your colleague, separately, when you're not doing that, and share what happened and share what you learned, and stuff.

That's a really, really good way to get a solid investment out of those dialogues for your organization, is to bring them all back and let everyone benefit from it. Yeah, conferences are not the time to be a shy person. It's the time to put on your bold hat and go forward.

**Daniel Whitenack:** Yeah. Me as an introvert -- and introvert in a sort of strange way, where...

**Chris Benson:** ...that is a podcast host...

**Daniel Whitenack:** Yeah, I'm one of those introverts that genuinely enjoys having conversations with people, but it's incredibly tiring for me, right? Like, if I'm talking, if I have a full day of meetings, I'm just dead by the end of the day. So I do that at conferences. I intentionally go and speak with people, but then I also intentionally have some times where I'm like, “You know what? There's these few sessions happening for the next hour, but I'm going to go outside and walk to this place and get a coffee, and no one's going to bother me. I am going to step away for a second; I'm not going to miss much.” I need that sort of separate time.

**Chris Benson:** I agree. I don't think anyone ever expects me to say I'm an introvert, but I am. I have my public moments, and I need those, just like you said, I need that time to myself, and I'll do that as well during the day... Because you'll go through a couple hours and just be exhausted, and you just need your brain to reset. So go do something alone for a short while, reset, and then get back out there and have those conversations.

Just as an aside, we've been doing this podcast for a while now. It's been, what -- close to 3.5 years since we started all this, and the first time that I ever had someone walk up to me and say, “You're with Practical AI. It's nice to meet you, and all” was when I was having one of those quiet breaks. I was at a conference, and I walked away, and I was going to get my little private time, quiet coffee and just kind of reset my brain, and someone walked up. And it was a special moment; it went from private time to having a wonderful conversation. So I found some private time later, but I'll never forget that moment.

**Break:** \[14:47\]

**Daniel Whitenack:** Chris, speaking of conferences, last week at the conference I went to -- you know, typically... Well, I don't know if typically, but many conferences will have like a conference social dinner type thing, and a lot of those have a keynote speaker. And I won't reveal who the keynote speaker was at this one, but the topic was technology and automation and AI type stuff. And the keynote speaker did a really amazing job.

Keynote speakers who do that so often just really know how to bring a large crowd with them on a story arc, and kind of tie things together... So he did a great job, but some of the things he talked about I think were meant to kind of provoke people in a thought process... And I think he kind of coined some of his own terms in order to kind of make people think about new things. One of those things that he talked about was what he called Humology, which was basically the mash-up of humans and technology.

So it was a way to say -- he said, “Hey, there's humans and technology”, specifically talking about AI and automation, “...and I'm going to just sort of combine these into this really goofy word, Humology.” He had what he called a Humology scale. It was basically like a data visualization going from over on the left there's tasks that only humans do - you know, computers, technology, they don't play a part. And it kind of went all the way over to the other side, where humans are not involved. And there's kind of somewhere in between. And he was kind of trying to challenge people to think in their own business processes, if you were sort of over on the left-hand side too far, you're likely not leveraging AI and automation in the way that you should, regardless of what industry you’re in. You're not sort of leveraging the technology that's available in the marketplace to its full extent. And the example that he gave, I thought, was a really good one.

The example he gave was taking care of weeds in an agriculture field, in a farming context. On the left-hand side, at a certain point, you had humans doing that completely, right? Like, you just pay a bunch of people, they'd have a bag or something, and go into the field, they pick the weeds, put them in the bag, and you know, move along. And then at a certain point, you know, you had like weedicide... Is that the right word? Weed killer?

**Chris Benson:** We're talking about agricultural weed, by the way. For people, just to be very clear.

**Daniel Whitenack:** Well, I mean, you could be growing weed and using weed killer...

**Chris Benson:** Oh, well, I guess that didn't clarify it at all. I didn’t --

**Daniel Whitenack:** So it’s not mutually exclusive, I guess.

**Chris Benson:** There you go.

**Daniel Whitenack:** \[20:02\] But at a certain point, you had weed killer, and people would walk through the fields and apply the weed killer to weeds. That also sort of brings in an element of technology or chemistry to that... And then at a certain point, they said, “Well, that takes a long time to apply with humans, so I'm going to drive this truck through my field, and just dump this weed killer all in the field”, which is maybe effective, maybe pretty terrible for the environment, but it's faster than humans doing it. Now, you sort of move to later or more recently, where there's actually implements on farm equipment that will drive through and it will use computer vision to see weeds, distinguish them from other plants, and spray them specifically. So you save a lot of money on weed killer, you're better for the environment, everything like that.

And then he showed a recent example where - which I hadn't seen before, but apparently, there are companies like John Deere and others that are working on autonomous machines like this. Because those ones that drive through and spray selectively still have a driver in them; but they're working on ones that are totally autonomous. So how he phrased it was, “It's not totally—even that is not taking the human out, because they still have to come back and get charged or refueled, and turned on and put out into the field." So a human is still involved in some way, but it's much more towards that other side of the scale.

**Chris Benson:** The weed spraying via CNN is actually several years old at this point. I remember in talks 3-4 years ago that I was giving, I was using that as an example. The autonomy, I agree, is more recent, but it only makes sense to go do that, and I think we're going to see that across in your Humology context. I mean, thousands and thousands of use cases. We already are.

**Daniel Whitenack:** Yeah. I like the line of thought that he gave, because it brought out a few things. One was, if you're not automating anything, you probably should be. Second is sort of doing a brute force application of technology can be harmful, right? There is that element in that story. But that sort of worked through, over time, at least in that example. But yeah, it's an interesting line of thought. I think it prompts a lot of thought, which is probably why it was good for that keynote. It brings up though this element of, is AI taking all of these jobs? That's another element of what it brings up, which I know that we've chatted about before in various contexts on this podcast.

**Chris Benson:** Which of course, it is, because we're evolving, and we're evolving at a fast—and when I say we, I mean, not just humans, but this Humology concept that you're talking about, because the technology is us, and we are the technology. There is a -- I don't mean in the sense of being a cyborg, but this is the fire that we invented. This is the wheel we invented. This is how the modern world is working, and how we're doing it. But as we are racing up the curve of new tool creation, ever more sophisticated, we have this trailing concern about how it's impacting us.

We've talked a great deal about AI ethics and such along the way, but that is certainly a trailing concern, because we go do things, we're a little bit like a child, running around, learning something new and not really understanding that that's a sharp knife that you're holding there, as they wave it around. It's something that we're trying to figure out as we go.

I don't think that's going to stop anytime soon. I think we barely even have a handle on the fact that as we are constantly finding these new applications, we're going to be making mistakes all over the place. And I think you'll see that. I mean, we've seen an unending series of stories, if you think about it, over the last 10 years, about data and AI applications going awry. But they continue to happen, and I don't see any end to that as we do that, and I think that's just part of our very, very fast evolution as we go forward.

**Daniel Whitenack:** \[24:27\] Yeah, so how do you and the conversations that you have with people on this idea of AI taking jobs and the benefits and downsides of automation - do you find that that comes up in your conversations with non-practitioner people, like maybe the people that you do wildlife volunteering with? Does that ever come up?

**Chris Benson:** It does. It comes up in just about every aspect of life, because this is now touching everybody, and it affects almost all jobs out there at some point or at some level. It may only be as a there may be some tooling, there may be data about those jobs, it may not be the primary job thing... But yeah, I'm seeing that a lot. There's a dissonance between humans and the tools that we're creating right now, in that we have biological brains that have always evolved, but evolved at a much slower rate than over the last few thousand years, and particularly the last few centuries, and particularly the last few decades, up to where we're at now, and it doesn't show signs of slowing down. So we're not used to this much change this fast, and yet, we are doing it. So yes, it's changing what it means to have a life.

I have, as you know, a nine-year old daughter at this point. We've had these episodes, I've said six-year old, seven-year old, all that stuff. Nine-year-old at this point. I am struggling as a parent to try to figure out how to steer her so that long after I'm gone, she has a good, productive life... And I think it is a fairly unique challenge, given the steepness of the curve of change right now, compared to any time in history. She's going to have to find a way to add value to the world enough to earn a living, and do that cooperatively, with all the technology things around her, that once upon a time my dad might have done that, but no more.

**Daniel Whitenack:** Yeah. It's also just interesting in this aspect of knowledge discovery, and all that. Like, it used to be the problem -- if I think of even my parents’ generation, my mom growing up in very small town in Oklahoma, Miami, Oklahoma. Spelled Miami, but clearly Miami, Oklahoma. If you think about what information was available there - you know, there was no internet. So there was information available at the library. The access pattern to that information was looking up various subjects, finding the book, trying to parse through what information was there... So now even that pattern is really disrupted, because so much is available to us. The problem is not like, “I can't find information on this subject", but "I find way too much information on this subject, and either I can't verify what I need to verify, or I can't distill down the pieces of information that I need to distill down.” Not personally for me, in terms of like -- it's exciting that all that information is available, but it's also exciting that sort of AI techniques or machine learning techniques are starting to be applied in that realm as well, in terms of helping us find relevant things and connect the dots. Of course, there's a danger in that as well, in terms of bias and what's presented to us, but I think in its best form, it can be applied with really great benefit.

**Chris Benson:** \[28:01\] At risk of acting a little bit like father time on this, I'm going to leverage my old age, at 51 currently...

**Daniel Whitenack:** I looked up things in a library too, Chris.

**Chris Benson:** \[laughs\] I'm going to go there for one second, and just for some context. There were no cell phones at all until I was 20 years old; around 20, give or take. And I spent a lot of time as a kid at the public library, hoping that that little tiny local library, with its World Book Encyclopedia - you know, that was my way of getting to the world... And the reason I'm saying this isn't just to emphasize my geriatric state, but to point out that the world -- that's 30 years ago; the world has changed enormously in that time, and we tend to lose sight of that very easily.

There has been more change in the last 30 years than for centuries before that. And then if you add the last couple of millennia, for tens of millennia before that... It's accelerating so much that we are in a unique state. If you go forward in time, after you and I are gone, they're going to look back on this as pioneering days; we are the people sitting out across the American prairie, with a little backpack and horses. It's just in this case—

**Daniel Whitenack:** With only a single GPU in my computer.

**Chris Benson:** With only a single GPU to do your calculations, exactly. But that's where we're at right now as the world is changing dramatically, more dramatically than it ever has. I won't belabor this any longer, but it's worth once in a while remembering just how far we've come in just such a short amount of time.

**Break:** \[29:39\]

**Daniel Whitenack:** Okay, Chris. Well, we probably should mention a couple things that have crossed our paths in the news recently...

**Chris Benson:** Current affairs...

**Daniel Whitenack:** Current affairs in the AI world. One of the ones that I wanted to mention and also make people aware of more so, because it is an ongoing project, is this project that is being run as a highly distributed, collaborative research effort called the BigScience Research Workshop.

\[32:03\] Now, the BigScience Research Workshop I think, was inspired -- and first of all, we'd love to have some people from there on the on the show at some point, but I did want to make people aware of it. So 600 researchers from 50 countries, and more than 250 institutions. And what they're doing is they're getting together in a massive science collaboration project. In the same vein, as you know, some people from my world originally in physics might be familiar with the CERN project, or something like that—

**Chris Benson:** Absolutely.

**Daniel Whitenack:** —where there's a bunch of physics researchers that got together. What they realized is in higher energy physics, the scale of the experiment that we need to do is larger than any experiment that any of our institutions can do in and of itself. So now we need to have a massive global collaboration in order to create this new high energy physics accelerator and learn about the fundamental things of our universe.

Well, in the same vein, this kind of BigScience Workshop is a large workshop or research project focused on large multilingual models and data sets. So as we've talked about over the past however long, NLP has been advancing rapidly, and one of the trends are these big multi-lingual language models. Typically, at this point, those are so big that you need huge infrastructure to run them. You need a huge data governance and curation system and method to get all of the data together, to manage it, to distribute it across your trainings, and manage those trainings.

That's really the goal of this project, and the reason why I bring it up now is that they released one of their first models recently, called T0, and a lot of people are talking about that, because it outperforms, in many ways - not in all ways, but in some ways it outperforms GPT-3, but it's also 16 times smaller than GPT-3, which is a huge model, of course. Really interesting. There's a couple other interesting things about it that I want to mention, but any initial reactions to that kind of strategy that they're employing to make this happen?

**Chris Benson:** I think that's a natural evolution of what we've been talking about. We're in those pioneering days from what we were saying a few minutes ago, and there's a point where to get progress, you've got to scale and you've got to try new techniques, and it can't be every little pioneer on their own. So I'm delighted to hear about this, and I want to learn a little bit more about what T0 can do. I don't know enough about it. What have you learned about it so far?

**Daniel Whitenack:** Yeah. Well, I wasn't part of the group that did this, although I’ve attended a couple of related things and one effort to get some of the data together; they're sort of hosting these different workshops to help get data together.

At least in my understanding, maybe the most interesting thing about it is that GPT-3 -- so an example of large language models like GPT-3, for the most part have been trained on proxy tasks like masking, which means like, I'm going to take some words out of various places and see if I can figure out how to slot them back in, into text... And that has been used as a proxy task in order to kind of help learn these really useful language representations.

\[35:53\] The strategy that they took with T0 had to do with prompts, which is quite interesting. So they took a whole bunch of different data sets that had to do with a whole bunch of different NLP tasks, like paraphrasing, or summarizing, question answering, named entity recognition, natural language inference. These are all different types of tasks that people do with language, and they reframed all of the labeled examples as prompts to the model.

What I mean by that is a prompt means like -- here's a couple of examples that I have pulled up. For question answering, it could be something like, “I know the answer to what team did the Panthers defeat is in blah, blah, blah, blah, blah. Can you tell me what it is?” So it's literally just like a prompt, like you'd give to another person, but it's flexible to other kinds of tasks. Suppose the banker contacted the professors and the athlete. Can we infer that the banker contacted the professors?

So that's more of a natural language inference thing, which has to do with logical agreement. You can reframe like sentiment, you could reframe summarization... Summarization would be "Blah, blah, blah, blah, blah. How would you rephrase that in fewer words?" All of these statements are just prompts paired with the corresponding output, and that I think is one thing that makes this kind of really stand out, versus other models that have been trained.

**Chris Benson:** For our listeners, I'm going to embarrass you and say Daniel really knows his NLP very well. He's quite the expert. I know you won't say that about yourself, but I've known you long enough to know that's true. What do you see as the advantage of that particular strategy relative to previous ones? What is the value that they are managing through that approach?

**Daniel Whitenack:** Yeah, so I think you have to think about how they're optimizing this model to be used. I think that they have recognized very significantly that this is the zero-shot thing that people want to do with modern language models. They want to give it their own unique prompt, and have it immediately know what to do.

**Chris Benson:** Okay.

**Daniel Whitenack:** So an example of this would be - recently, we needed to create a data set in our own work that showed some contradictions in text. But we had a bunch of text, and we needed to transform some of that text to where it contradicted itself. So what we did was we created prompts like this and fed it -- in that case, we fed it to GPT-3, because you can do a similar type of interaction there, where we kind of gave it a couple... In that case, it was sort of few-shot We gave it a couple examples of the prompts that we wanted, like, "If this is this, then this is not this" sort of thing. And it learned how to produce those samples for us.

This is the sort of thing I think this model is geared toward, where people can come up with their own unique, custom flexible prompts, and this should generalize quite well across a whole variety of tasks that people come up with. I think the advantage is that they're really focusing from the start in the training data around this zero-shot usage of the model.

**Chris Benson:** Just to ask a very basic question. This is yet another transformer approach, right?

**Daniel Whitenack:** Yeah. So I believe that the model architecture that they base this on was similar to that of T5, which was a text-to-text model that's transformer-based. So it's an encoder-decoder language model that I believe was from Google research not too long ago; correct me if I'm wrong listeners, and I'm getting the wrong information... But I believe it came out from Google. That's been around for some time, so that's why they called it, I think, T0, was partially it’s the first model that they came out with, so zero, and it's inspired by T5, this transformer-based encoder-decoder.

**Chris Benson:** \[40:07\] Let me ask you a question, while we're on this line of conversation. In recent years, we've really seen - you know, transformers came out and have just completely revolutionized the NLP space. In your view, would you say that's really the only thing that matters right now? Because that's what we've been talking about the last couple of years, every time we hit, is "Is there anything outside of that transformer approach that you've seen that is still valid?" Have we eclipsed some of the older model approaches at this point, or is there still any diversity there in terms of completely different mechanisms?

**Daniel Whitenack:** Yeah, it's a good question. I think there's a lot of people doing interesting things, neural network architecture-wise. I know in the natural language type of space, in particular around speech, I've seen some of the recent streaming and space-efficient speech models utilizing various new kinds of convolutional architectures. So I think that's still -- you know, we kind of talked about with the weed spraying thing in the fields. That's what was used at that time, quite some time ago, and it's still finding new, slightly different applications.

But then there's also other new things that people are exploring to either combine multiple kinds of data, multiple modes of data... You know, video, audio, text. There's things that people are doing with natively graph-structured data and graph neural networks, which I think is pretty fascinating stuff. So I think there's a variety of things that — I wouldn't phrase it as transformers is all that matters, but I think transformers have been, no pun intended, transformational.

**Chris Benson:** Transformational?

**Daniel Whitenack:** It's also -- I mean, it's impacting video and computer vision and that sort of thing too, because it's now being applied in those spaces. So it's definitely been a big deal.

**Chris Benson:** Sounds interesting. Well, that was a fascinating conversation there.

**Daniel Whitenack:** I'm glad to have prompted it. My puns are getting worse, or my jokes are getting worse as the episodes going along...

**Chris Benson:** Well, we're almost at an end. I was going to say, we'll get on the hook of going into some of those new approaches; the multimodal sounds fascinating, so we'll have to have an upcoming episode to dive into that.

**Daniel Whitenack:** Yeah, for sure. You know, in each of these episodes, we like to provide some learning resources for people. I think that you've found a couple... It seems like both of us have been seeing quite a few things recently from IEEE Spectrum. So great work, if any of those working on those articles are out there. It seems like you've been doing good recently... But this "How deep learning works, inside the neural networks that power today's AI." I appreciate you forwading this along to me. So what caught your attention about this?

**Chris Benson:** Just -- it was another take. For a long time, we had seen introductory articles out there, but over the last few years, as things have progressed, we haven't seen as many of those lately, and so it was kind of nice. This was a fresh one. This was a new one, and it still just hits the basics... But there are people coming into our field everyday right now, that are just learning the basics, and I like the idea of throwing out one that takes another take at the basics and tries to communicate it well. It was as simple as that, it’s keeping it fresh with the new material for people who are just coming into the field.

And then I saw another one, which is "Five deep learning activation functions you need to know." I remember, back when I was learning this, understanding what the activation functions are, not just mathematically, but then knowing how to use them and where to use them is one of those things that sometimes catches people. It caught me a little bit when I was trying to learn it, and so the article basically kind of walks you through a quick summary of each one and talks about where you could use them. I thought that was also -- as an introductory article would be a really good thing for people to get to, because it knocks over one of those hurdles quickly. So I just wanted to throw out those for the people that are just coming into the field - welcome. There's lots of good material out there, and some of it remains brand new.

**Daniel Whitenack:** Yeah, I would echo that. It's worth getting into the weeds a little bit if you're getting into this field and understanding things like activation functions. As time goes on, the tooling gets easier and easier, so you can just pick stuff off from the shelf and use it... But there is a real value I think and getting some intuition around these things. So, great finds, Chris. I really enjoyed our conversation today. I appreciate your thoughts on all the subjects.

**Chris Benson:** I did, too. It was a good one.

**Daniel Whitenack:** We'll talk to you soon, and I look forward to new guest next week and carrying on the conversation.

**Chris Benson:** And have a very good -- I know you're taking a little time off around Thanksgiving, so enjoy your vacation.

**Daniel Whitenack:** Veggie turkey day for us.

**Chris Benson:** Absolutely. Talk to you soon, Daniel.

**Daniel Whitenack:** Happy Thanksgiving. Bye.

**Chris Benson:** Happy Thanksgiving.
