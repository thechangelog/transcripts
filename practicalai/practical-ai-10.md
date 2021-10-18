**Daniel Whitenack:** Welcome to Practical AI. I am joined by my co-host, Chris Benson, who is a digital transformation and AI specialist, and I'm Daniel Whitenack, working in AI for good.

We're gonna do another news and updates and learning resources episode for everyone. I think there's been a pretty good response on that; there's a lot of news to keep up with in the AI world, and always great to have a few more learning resources at your fingertips. Hey, Chris. How are you doing?

**Chris Benson:** I'm doing pretty good, I'm excited about it. We've got some cool stuff to talk about this week.

**Daniel Whitenack:** Yeah, for sure. As always, there's surprising things each week, and things that are sometimes expected, but it's always exciting regardless.

**Chris Benson:** Absolutely. What have you seen this last week?

**Daniel Whitenack:** The first one that came across my path was this survey that O'Reilly did, called The State of Machine Learning Adoption in the Enterprise. They have a blog post about it, but then you can actually download the full report. I think you have to put in your email to download it, but it's free... And it is pretty interesting.

If you're working in particular at a larger company and interested to know how the landscape of machine learning is playing out in larger companies, I think it's really relevant. They ask a bunch of different questions, everything from what people's titles are, where they're located, but also some interesting things... The one that piqued my interest was actually who is building the machine learning models within an enterprise company. The biggest percentage of that were embedded data science teams, but then it kind of went down the percentages from there through external consultants, all the way down to cloud ML services.

I was actually pretty surprised there was only 3% of people using cloud ML services, or at least that's how I read the information...

**Chris Benson:** Really?

**Daniel Whitenack:** That was actually really surprising to me. I don't know if you have thoughts on that. I would have expected that to be much higher, just because it's so easy to use these services.

**Chris Benson:** Maybe that's because we're in our little AI bubble and we think about this and interacting in it all the time... But I admit, we're hearing constantly from these cloud providers about their services, and I guess I'm a bit surprised too that it's not a higher uptick.

**Daniel Whitenack:** \[04:06\] Yeah, I don't know... I think for anyone out there, in particular if you're maybe in a software engineering role, or in a team with primarily software engineers, I think using these cloud ML services and black box sort of models from MachineBox, if you remember back to our episode 2 - using those sorts of things are incredibly powerful... You're writing an application and you can just think about "Oh, I wanna integrate speech-to-text" or "I wanna integrate image object recognition in my application" - well, you don't have to build the model, you can just utilize one of these services, and I think that's incredibly powerful, where you can think more about the functionality that you're trying to enable, rather than the neural network architecture or whatever it is.

**Chris Benson:** Absolutely. And for listeners - that was episode 2, on MachineBox, if they wanna reference that; it was a great episode. So I imagine that that will change dramatically over the next few years with everyone trying to get -- maybe this is one of those moments where companies are still certainly trying to figure out how to incorporate AI into their strategy, and maybe we'll see a much higher uptake when that occurs.

**Daniel Whitenack:** Yeah, for sure.

**Chris Benson:** So I ran across several articles, and the first one was called "AutoKeras: The Killer of Google's AutoML." Part of what caught my attention was probably the provokative title, but they start off telling, again, what Google AutoML is, and that it's based on the neural architecture service that Google developed, which is really about searching for an optimal neural network architecture or model to do a particular task on a given dataset.

I think the reason they introduce that is they wanted to say "Hey, there's this new thing called AutoKeras, which is an open source Python library", and that's what really caught my attention... One of the theses of the article was that in addition to this AutoKeras library just being a great library to get into, that it's open source; they really noted that if there's anything that could give something like Google AutoML a run for its money, it's the fact that as you get these high-quality alternatives in the open source world that are available, instead of paying Google $20/hour to use their AutoML implementation, that that is probably a trend that will be a powerful thing to come in the years ahead.

I know that both I -- I love open source, and I know you do too, so that really caught my attention.

**Daniel Whitenack:** Yeah, and maybe that is what is partly factoring into this trend of people not using the cloud ML services as much as we might have thought, simply just because there's so many great open source packages out there, and a lot of them, like you're kind of mentioning here, don't require you to think through an entire neural network architecture, but allow you to use a lot of things out of the box, utilize pre-trained models, utilize things as a service via a JSON API or whatever it is... So maybe that is partly why we're seeing that trend.

I noticed that this one is not from Google, but it is open source on GitHub, it's extremely active; it looks like it has over 2,000 stars... So yeah, good catch.

\[07:42\] The next one that I found kind of follows in that trend as well, of open source tooling... This one's called Netron - I guess a play on neutron, I assume. A lot of people are probably familiar with TensorBoard, which is like a visualization tool attached to or very tightly integrated with TensorFlow, which allows you to kind of visualize the architecture of your neural network, along with many other things.

This one caught my attention just because of how well-supported all of these different types of models are, from all sorts of various frameworks... Netron is also a way for you to visualize your neural network, the structure of it and various things about it. It says right now that it supports ONNX format, Keras, CoreML, TensorFlow Lite; it also has experimental support for Caffe, Caffe2, MXNet, TensorFlow.js and TensorFlow.

So this is really like a pretty cool thing, and a trend that I think I've mentioned on this podcast before that I'm really enjoying seeing in the community - this kind of idea of interoperability, where this is a tool for visualizing your own neural network, and it doesn't really matter which framework you're using, but there's interoperability with a whole bunch of them. So it's definitely worth looking at, especially if you don't wanna tie yourself into a particular framework or set of tools.

**Chris Benson:** Yeah, I'm looking at the GitHub page while you're talking about it and it looks pretty great. It has almost 1,400 stars and 131 forks at the time that we're recording. It looks very active in terms of there's a lot of recent updates to it... So in addition to all the different frameworks it supports, with models and stuff, I'm definitely gonna try this one out myself.

**Daniel Whitenack:** For sure.

**Chris Benson:** The next thing - we'll take a little bit of a turn... I'm often really interested in some of the non-technical posts as well about how AI is affecting the world in different ways, and I came across one that is from Harvard Business Review, and it's called "What's the purpose of companies in the age of AI?"

I'm often talking about digital transformation in general and how AI affects that, so that caught my attention... It was interesting to see Harvard Business Review seriously considering with these new tools how does that literally change the business functions - technology aside - that AI is introducing.

To summarize it, they kind of came down to that from a business strategy standpoint, AI was really gonna have an effect in one of the four following ways. One is really AI being used to exploit existing advantage, and to make that existing advantage more pronounced.

They also talked a lot about tradeoffs in terms of long-term and short-term, and we're all used to hearing about companies that get caught in the short-term for stock market, for quarterly reporting and stuff like that, but that AI can be used to figure out what tradeoffs make sense for moving companies more into a long-term perspective, and that there may be some insights there that would not otherwise be available.

The third one that they mentioned really appealed to me, and I know it's gonna appeal to you; they're talking about -- they define it as a moral or spiritual call to action, and I know you explicitly always talked about AI for good, and that's a big, important thing for me as well... As I think my future and the organizations that I wanna be part of, knowing that that organization stands for something more than just making a profit is a motivating factor... So I found it really interesting to think of AI being used to promote that bettering the world approach.

And then the final thing was really being the -- they use Steve Jobs and Elon Musk as examples... Is really people who are going to really meld the world into their own view, rather than trying to fit into the world. You might say that that is innovation for the purpose of creating value... But I just like seeing this conversation where companies are recognizing how important this is and recognizing it's not just another tech coming in, but it's actually something that is gonna affect the core way they operate.

**Daniel Whitenack:** \[12:06\] Yeah, this is great. I think this is a really great perspective, especially the things, like you mentioned -- you know the things that kind of pique my interest, and coming from AI for good perspective, and in particular where it talks about a moral or a spiritual call to action...

I know I'm motivated primarily by my Christian faith in terms of infusing morality into the technology that I build, and I had a lot of those conversations with people lately where the morality - if there is some - in AI is really driven by that of its creators... So to be a part of the development of AI is also to be a part of that kind of moral piece of it. We really need to be having those conversations and it's great to see that there's a lot of people having those conversations in various circles. It's great to see that.

**Chris Benson:** I'm gonna surprise and embarrass you - note to our listeners that Daniel is speaking at an upcoming conference that has a faith-based perspective on technology. What is it called, Daniel?

**Daniel Whitenack:** It's called Faith Leads. It's in Nashville. I'm having a lot of great conversations recently with people in that context. It's gonna be a great conference, so I recommend you check that out if you're at all interested in that kind of intersection... But I know that there's a lot of people having these conversations; I've seen a bunch of articles with people talking about how your worldview and how your morality is kind of infused into the technology you build, and not only is a separate piece of who you are, but it actually can kind of mold in very naturally with the technology that you build.

I think that helps people also feel like they can put their whole selves into the technology that they're building and create a lot of passion for the things that they're building, which is super important.

**Chris Benson:** And to finish that up, it's so good to see -- when I saw that you tweeted that, I wasn't surprised, and I was very happy... As we look, and other people we know in this space are really focused on using AI for good, I think it's a fantastic counterpoint to the predictions of AI as a scary thing in so many people's minds.

I just love seeing these great use cases for using this technology to better the world, and I hope that our listeners will help us spread that across the AI industry in general.

**Daniel Whitenack:** Yeah, for sure... And I definitely recommend -- I mean, I think there's a couple of great links as well in our episode 3, when we talked to Amanda and Latifa and Peter about the great work that they're doing with TensorFlow, helping African farmers. If you're at all interested, I just encourage you to listen to that episode; it's incredibly inspiring just to utilize the skills that we have for helping people improve their quality fo life in a real and practical way.

**Chris Benson:** And literally saving lives in Africa... Literally saving lives. It was an emotional episode... So yeah, absolutely they should go listen to that.

**Break:** \[15:27\]

**Daniel Whitenack:** Well, I'll bring us into the next thing that I've found here, which is not totally unrelated, but in a different vein... And that's that Julia, the Julia team - if you're not familiar, Julia is another programming language that's very prominent in scientific computing, and in certain communities, especially more on the academic sense, but it's kind of starting to filter into the industry... They just released version 1.0.

First of all, congrats to the Julia team. That's really great.

**Chris Benson:** Wooohoooo!

**Daniel Whitenack:** I have to say, if you haven't taken a look at Julia, just try a few examples; I think that you'll appreciate what they're trying to do. I was at Julia Con (I think it was) last year, and the community is just really doing some amazing things in distributed computing, large-scale scientific computing, but also in terms of machine learning and utilizing GPU's and a bunch of different things.

So we'll link to the blog posts about Julia 1.0, but I just encourage you to give the team a congrats on Twitter and also try out a few examples if you've never used Julia.

**Chris Benson:** Alright, I will definitely leap into that. That's a huge congratulations to hitting 1.0. I've also been watching Julia develop over the last few years and it's just an impressive language and it's coming along in a perfect time for that.

My next article is actually kind of a counterpoint to the Harvard Business Review I just mentioned before... This one is a blog post by a person named Ian Hogarth (if I'm pronouncing that right) called AI Nationalism. The crux of it is whereas the Harvard Business Review talked about the changes that companies are having to think about in terms of their operations, this blog talks about geopolitics and economic concerns and how AI is really going to be driving entirely new types of geopolitics in the years ahead, to the point where it will transform not only economies, but military strategy and thinking.

The author actually goes so far as to suggest that AI policy may eventually be one of the most - if not THE most - important parts of government policy because of the profound impact that it has on government operations.

We're in this moment where not only in the United States, but around the world we're having all sorts of tumultuous politics with people on different sides, and obviously it's at times very hotly contested; we seem to have left the period of politics being a slightly kinder, gentler thing to do in the past... As we think about how AI may affect this, I just found that an interesting thought process.

He goes on in this article in quite a lot of detail in a bunch of areas, far more than we can cover in the podcast, so I would certainly encourage listeners to take a read and be thoughtful about it.

**Daniel Whitenack:** \[20:03\] Yeah, and I definitely will take a look at that and take that perspective in. It's always good to have those checks and balances and make sure you're hearing different sides of the story. I would agree with you in the sense that especially in light of -- I think all of us when we are watching, for example, the Facebook hearings at Congress, we're just kind of... At least all of us who work in this industry and are maybe of a younger generation - we're just cringing at the fact of how little is understood at the government level about these new techniques and what's really driving decision-making in an industry which is so different... And as that filters into government, I can't help but think that there's really gonna be some profound changes at every level of government in terms of how they go about their decision-making and how they manage companies that are utilizing these technologies as well.

**Chris Benson:** Yeah, I agree. I remember a big part -- aside from the actual reporting on the hearings themselves, some of the senators really took a beating when it became how apparent it was that they weren't familiar with the implications of these technologies.

We live in a time where we can't really afford to ignore these things anymore. They're not just technology, they affect the way we live our everyday life and what can and cannot happen.

**Daniel Whitenack:** For sure. So now onto what really matters in the global context, which is video games... \[laughter\] I don't know if you're a video game connoisseur. I haven't been a big video gamer since the days of Super Nintendo, but there's this very popular game called DOTA. Probably most everyone has heard of it, so I probably don't need to mention anything about it... But OpenAI developed five -- my understanding is that it's called OpenAI Five, which is a team of five neural networks.

This a team game, so they have a team of five neural networks called OpenAI Five... And what happened is they played a tournament recently where they played against the team -- it says of the 99.95 percentile DOTA players, so essentially some of the best in the world... And they won, I think, two out of three (correct me if I'm wrong in our community).

But yeah, I think there's a lot of interesting things about this. It's just kind of entertaining in general, as these things are, along with AlphaGo and other things... But I also think it's pretty interesting that it has that teamplay element; it also has an element in the game which is like drafting, which I guess is considered to be a pretty hard challenge.

So there's a lot of facets to this that are pretty interesting... So either if you're interested in DOTA or if you're interested in these sorts of gameplaying neural networks, this is a really unique one and one to look into. There's some videos online, and all of that good stuff that you can dive into.

**Chris Benson:** That's really interesting. It's funny how -- and I'm not a big gamer either, so I won't really go too far, because I'm out of my depth, but we've seen so many demonstrations of AI capabilities in recent years through gaming, in a different way, different capabilities, so I'm always wondering what's next... This is a fascinating one.

Do we want to move into some learning resources at this point?

**Daniel Whitenack:** Let's do it, let's learn something.

**Chris Benson:** Okay, sounds good. Do you wanna go for it?

**Daniel Whitenack:** \[23:50\] Sure, yeah. What I was gonna point out this week for people to try out is the PyTorch tutorials. If you just search for "pytorch tutorials" -- of course, we'll include it in the show notes, but search for that...

The reason why I mention this is I'm actually going through some of these now, and have been for a bit, in preparation for some workshop materials that I'm putting together, and some online course materials which hopefully I'll be sharing in a future learning resources episode...

But yeah, this has been really great for me to learn a little bit more about PyTorch, which I've thoroughly enjoyed working with PyTorch so far. It's been very natural, at least for me in my background. The tutorials really help with that. They have a bunch - deep learning with PyTorch, a 60-minute blitz, PyTorch for former Torch users... There's probably not a ton of those; or maybe there is... Maybe there's more than I think. But there's also learning PyTorch with examples, Transfer learning tutorial, Data loading and processing tutorial... It's really practical things, and they give you patterns... What I love is they give you patterns that you can kind of reuse in your PyTorch programs, so you're not always starting from scratch; you kind of do a lot of copy-paste and go from there.

**Chris Benson:** Yeah, this is a really rich set of tutorials that they have here as I'm looking through it. As we've talked about different frameworks over time -- we really have a great set of resources by each of the frameworks; this PyTorch one is awesome. We've talked about TensorFlow and Keras and various others in the past... But if someone out there is listening and thinking about looking at this, see one that feels right and just dive into it. There's so many great examples where you can take whichever framework (PyTorch or others) and start doing stuff. Just jump into the pool and start doing stuff and you'll find that you can get productive pretty quickly there.

**Daniel Whitenack:** Yeah, just jump in and try to run something that works, and then go from there. You don't have to feel like you need to understand every little piece of it before you run something... Just take one of these and try it, run it, see if it works, and then try to start thinking about "Oh, when can I use this with my own data?" or "What if I modify it to do this, or that?" Take that approach, I think it's really useful.

**Chris Benson:** Okay. I ran across something about -- it's almost meta about learning. It was on Lifehacker and it's "How to get started in machine learning and robotics." Before we go on, next week we're going to be interviewing Chris DeBellis on robotic perception using Mask R-CNN, and with that in mind as a future thing and thinking about crossing machine learning and robotics - this was interesting not only because I knew that was coming, but also because it talks about these two gentlemen... And I'm not gonna say their names, because I'll butcher it terribly; the link is in the show notes... But I noticed that one of them at least was 20 years old (maybe both of them), and they were trying to get started in this; they were involved in a hackathon and they just kind of talked about some of their lessons learned about how to get started in this field, and there's so many people, whether you're 20 or 40 or 60, there's so many people that are starting to move into this that I thought that they had a really great perspective.

A couple of the key things that they said, that if you're starting out -- they referred to it as "cross the streams", and what they meant by that is to think out of the box, and not think about the problem you're trying to solve in the way everybody that came before you might have solved that, with previous technologies... With new advancements happening so fast and with robotics - it may not just be from an algorithmic standpoint, it might be the sensors that you're using and where sensors are applied and how they're combined, and stuff...

They basically said "Go for something that other people aren't necessarily doing and see if you can make it work." Then the next thing they said is "Get an assignment", and that is to make it real. They were involved in a hackathon, and in that perspective they had a set time limit to knock some code out. With that time approaching quickly, you have to produce whatever you can in a short amount of time... But that forced them to really think quickly and act on it quickly, and see what they could produce. That assignment, they said, made a big difference.

\[28:17\] And finally, when you have your assignment, they said, break down your project; instead of being overwhelmed and saying "Oh my gosh, we've taken this very ambitious assignment in terms of how we're gonna approach it, and we have a set timeline..." They just said "Break it down into pieces", just like you would if you were a software engineer or any one of many other things. It's a project, and a project is a big thing that's composed of lots of little things. They said that they would basically divide it and conquer the project, and were able to use open source tools like Pandas, which I know you mentioned in our last conversation... And they were able to turn out a good product.

I just thought it was a great attitude with some great practical advice for doing practical AI at an entry level, and I wanted to share that with our listeners.

**Daniel Whitenack:** Awesome. Yeah, and there's a bunch of resources... Maybe you don't have a hackathon near you, or something like that; if you're looking for a project to get started with or you feel like you've built up some skills and wanna try them out, there's a bunch of ways to do that remotely as well. Of course, you can try out different competitions and stuff, but there's also things like DataKind... If you're not familiar with that, that's a way to volunteer on real projects related to social good - things like poverty and global warming and public health...

There's a lot of ways to get involved, and if you're interested and need some help in finding some of those opportunities, make sure and pop over to our community; we have a Slack channel, and you can find that at changelog.com/community. There's a practical AI channel in that Slack, and we'd be happy to talk through some of those things... Or if you have interesting news coming your way, keep us up to date with what you're finding interesting and we'll look forward to hearing from you.

**Chris Benson:** Yeah, we do have a great group of listeners that are active on those, in Slack... Also, on LinkedIn we have a Practical AI group which we actively monitor, and we're on social media... So there's a lot of great ways of reaching out. We are very accessible, so don't hesitate to reach out to us and give us your feedback, suggestions, and we're looking forward to those conversations.

**Daniel Whitenack:** Alright, sounds good. Well, I'll see you or talk to you next week, Chris, about Mask R-CNN, and I'm looking forward to figuring out what that is and having that discussion.

**Chris Benson:** Me too, I'm looking forward to it. Have a good week, Daniel.

**Daniel Whitenack:** Yeah, you too. Bye!

**Chris Benson:** Bye!
