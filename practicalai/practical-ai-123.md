**Daniel Whitenack:** Welcome to another Fully-Connected episode of Practical AI. This is where Chris and I keep you fully connected with everything that's happening in the AI community. We're gonna take some time to discuss some of the latest AI news that we're run across, and we'll dig into some learning resources to help you level up your machine learning game.

I'm joined, as always, by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin, and I'm Daniel Whitenack, a data scientist at SIL International. How are you doing today, Chris?

**Chris Benson:** I am doing very well. We are kind of surviving the last bits, I think, of winter, as a winter storm blows across the nation...

**Daniel Whitenack:** Yeah, it's a crazy time here in the U.S. weather-wise... So for those maybe international listeners, you may have heard about it or you may not have - there's been a lot of winter storms in the U.S. lately... So for those listening in the future, we are in February of 2021... I know further South, some places in the U.S, they're getting weird freezing rain, and that sort of thing...

**Chris Benson:** Texas is having the worst weather in decades right now.

**Daniel Whitenack:** Yeah. And I get it, they don't have any infrastructure in terms of plow trucks and big stockpiles of salt to put on the ice on the roads, so it's just a giant disaster in there... It's so odd for that area that nothing is prepped.

People further up North - where I'm at, we've got probably between a foot and a half of snow... Which is a lot for here. But there's always snow, so we have snow plows, and they were working long hours, but it wasn't like they didn't have that stuff in place, and all that.

**Chris Benson:** \[00:04:21.01\] And here in the usually warm South, we do not have snow on the ground, but we actually did see \[unintelligible 00:04:25.09\]

**Daniel Whitenack:** Wow.

**Chris Benson:** There you go. And speaking of snow plows, that's such a rare -- I think I'm more likely to see a living dinosaur rumbling by than a snow plow. I think we can count the number of snow plows we have in our state on my two hands.

**Daniel Whitenack:** Yeah...

**Chris Benson:** Not many.

**Daniel Whitenack:** I've got a few aches and pains right now from shoveling myself, but that was a good workout, I guess.

**Chris Benson:** Yeah, you've got the cap on... I know listeners can't see, but you've got the winter cap on, and everything... You're looking good and rugged there.

**Daniel Whitenack:** Yeah, that's because right now I have my recording setup in the back area of our house, which is the furthest from the furnace. It's also really cold here...

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** So the hot air generally doesn't make it to this side of the house.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** So it's one of those things that's just a practicality.

**Chris Benson:** Yeah. We're at least up in the forties, which - while being fairly cold for us, is downright tropical compared to the rest of the country.

**Daniel Whitenack:** Sure. Yeah, it is. It's one interesting thing after another... But things have been going pretty well work-wise. I've got a lot of interesting things to work on, and as a principal emerging technology strategist, which is always a great title to say...

**Chris Benson:** \[laughs\] It's a long title.

**Daniel Whitenack:** It is a long time. I think we talked once that your title could be acronymed PETS...

**Chris Benson:** That's right. Which is very fitting.

**Daniel Whitenack:** Yeah, yeah, very fitting. So what emerging technologies are on your mind as of late?

**Chris Benson:** Well, there are actually a lot of cool -- you know, noting for people who may listen to this down the road, that we are still in the middle of a global pandemic, though maybe on the tail end, as vaccines are beginning to roll out... You know, there has been quite a lot of interesting research in the medical space, and there's a lot of AI being used at this point.

We talked early on about how there were some uses for AI for datasets regarding the pandemic, but we haven't really addressed it in many months at this point...

**Daniel Whitenack:** Yeah, that's true.

**Chris Benson:** Since then, I've seen quite a lot of deep learning being applied to various medical and health concerns, some pandemic-related and some not. So it's really turned the corner in that space.

**Daniel Whitenack:** Yeah, that's super-interesting. Obviously, there's gonna be a lot of applications in healthcare, both for new processes, new technologies, new applications of AI spurred on by this pandemic, which has sort of shown in a lot of ways how unprepared we are for certain scenarios. I'm sure that pain will prompt a lot of people to innovate.

It's always an interesting one for AI in the healthcare space, because of course, there's all sorts of privacy concerns with data, and interesting scenarios where you have ideas about how to apply AI, maybe to detecting certain patterns and medical imagery in lungs to detect Covid-related outcomes, or something... But how are you gonna get that imagery to develop those models?

**Chris Benson:** That's a good point. And we had an episode very recently having to do with radiology and imagery, so I would refer people back to that... I'll get the specific episode number and put it in the show notes; it's only been a couple back. And then today, as we address some of the things -- for those who have not listened to Fully-Connected, it's Daniel and I; we don't have a guest, we're just talking about things that we've noticed in the news, kind of catching up on this... So it's a very organic conversation.

**Daniel Whitenack:** \[00:08:20.02\] Yeah.

**Chris Benson:** And one of the things I was gonna mention was I saw an article having to do with CAT scans, and the fact that there are -- without getting deeply into the medical side, but there are different grades of CAT scans, if you will, with different utilities associated with that, different costs. I noticed that there was an article about using deep learning models to take certain types of images and increase their fidelity, so that they're more useful in that thing... Kind of diving right into the topic here.

**Daniel Whitenack:** So basically you're saying you take the cheap CAT scan and make it an expensive CAT scan, sort of...

**Chris Benson:** To some degree, yeah.

**Daniel Whitenack:** ...is the idea.

**Chris Benson:** Yeah, I think that is more or less along \[unintelligible 00:09:00.28\] I'm gonna pull it up. They actually took ResNet, and they were transforming -- and I'm not a medical person, so I'm just kind of reading this little blurb off... But a clinical singles-spectrum CT image to VM counterparts. And as I understand it, the VM part - I know we have some doctors in the audience and they can offer some comments after the fact, but the VM refers to virtual monoenergetic.

**Daniel Whitenack:** Yeah, I have no idea what that means.

**Chris Benson:** I don't either, but as I read the article, apparently, they are able to do some enhancement with this at different energy levels, and stuff... And I don't know that that's revolutionary in today's -- because we've talked about imagery a lot... But I think it's really notable. A while back, when we were talking about these things as we first saw them, they were very cutting edge, and now it's becoming almost commonplace. And I think that's the thing going into this episode that I was thinking about, was just how incredibly commonplace deep learning model deployments have become.

**Daniel Whitenack:** Yeah. There is a general trend of utilizing lots of low-fidelity or lower-resolution, or noise-filled data... So using lots of that data to get really good results, versus using small amounts of really high-resolution, high-fidelity data. I was just hearing on the radio, one of the shows I was listening to - I think the company or the technology they were talking about was persistent surveillance... This is a more creepy side of this, but essentially, they're just saying "We're not going to surveil certain areas in front of a store, where crime is maybe gonna happen." Because basically, if you put cameras around that have good resolution, you're kind of expecting to -- you're gonna put them in the best spots, because that equipment is expensive.

So they're on the whole other side of things, where they're basically saying "Well, let's just fly a drone around constantly over some city, and basically have a whole bunch of low-resolution video of essentially everywhere." So they're not capturing things with enough resolution -- and I think what they're saying is they're not capturing things with enough resolution to identify people in the video; so they can't say "This is you", or whatever... Although they probably can, in certain ways. There's always ways...

**Chris Benson:** I have no comment.

**Daniel Whitenack:** But that's what they're saying. There's a lot of noise, it's low-resolution, so they're saying "We're not tracking your face, or your identity... But if something were to happen, like let's say there was a shooting in a certain area or something, they could basically replay to that specific area and see the little blobs of people moving around, and say "Oh, this guy did come out of the store, and then this happened", and whatever.

\[00:12:11.05\] Of course, that's alarming and interesting in so many different ways that we probably don't have time to talk about it... But it's also an example -- like, where the mindset was typically "I just need to get better and better resolution surveillance cameras to be able to really capture every detail in my surrounding", they're sort of flipping that and saying "No. Just get really low-resolution imagery, but a whole bunch of it."

**Chris Benson:** It's the many imperfect considerations that go into the entire field now of AI ethics.

**Daniel Whitenack:** Yeah.

**Chris Benson:** And it's funny, I've seen so many articles... And for a while, as listeners may know, I was working directly in that field; I no longer am, in a direct way... But I still follow, and it's so complicated, in terms of there are so many use cases, and you're trying to figure out... And people will look at something that's a little bit more clear-cut, like the Chinese system.

**Daniel Whitenack:** The social credit system.

**Chris Benson:** The social credit system, where they're actively monitoring citizens, or anyone, for that matter... And actively recognizing who they are, and all that. So it is a level of surveillance that most people in the West are not at all comfortable with... Nor would I be, nor would you be, from previous conversations... But there's clearly benefits to doing such surveillance. So how much is enough, and too much...?

**Daniel Whitenack:** Yeah, I think that's the thing - the benefit that can be derived from the technology is not the only motivating factor. Just because something can provide beneficial results doesn't mean that it is beneficial as a whole.

**Chris Benson:** Exactly.

**Daniel Whitenack:** I think that's the hard thing to wrestle with.

**Chris Benson:** It's a really hard problem. And as companies are trying to wrestle with it - not just surveillance, but use of AI across the board; use of deep learning, I should say, across the board - the question is who's responsible for what, what does it do for liability... We've had whole episodes talking about some of this.

It is not going to be solved any time soon. There are no right and wrong answers explicitly, except on the extremes. It's something people will contend with. And periodically, it makes for a new story that we get to talk about, when something goes awry... And I think we're gonna see more and more of those over the years.

**Daniel Whitenack:** Sure. And it's not only privacy and security, that sort of thing... Automation is another big one that obviously has benefits...

**Chris Benson:** Sure.

**Daniel Whitenack:** ...but has a lot of costs as well. And we've talked about this balance before on our show, of automating away jobs, versus creating new types of jobs, or other things like that. We have a couple episodes on manufacturing things, and all that.

**Chris Benson:** Yeah, we have. I think I've said this before on the show; I'm sure that I've said it to you, between us... And that is the fact that I think as you look at all of the various types of industrial revolution that has happened over time, and moving from the horse and buggy into the automobile, and the airplane, and all the various things along the way - each one of those has taken away some opportunities, and it has also created new opportunities that nobody had envisioned to handle the new thing.

I think the unanswered thing on automation at this point is with it being cognitive in nature and being combined with robotics that can do things that do not require great cognitive overload, the question is how many new things are created for those that are taken away? As we really work into that over time, I think that's one of the great challenges of this century going forward. It's one of those fundamental things that we're going to have to do some restructuring to work our way through.

**Break:** \[00:16:09.01\]

**Daniel Whitenack:** Chris, I had an interesting email the other day... Actually, our friend Rajiv Shah, who was a guest on the episode 109, he came on the show and talked a lot about data leakage, which was a really great show, just discussing scenarios that can go wrong in your experiments, where some of your target data leaks back into your training, and things behave much better than you think they might... It's often hard to prevent this in a lot of scenarios, is basically what he's saying. You have to be extremely careful about this, and check yourself constantly...

So he emailed me -- he wrote this new article on DataRobot's website/blog called "Running code and failing models." And one interesting thing that I think he's drawing out is that just because you released your source code and people are able to re-run it doesn't mean that you have a successful or validated model... Which is interesting, because a lot of the code that I try to run that people release, I can't get to run... \[laughs\] So that's a first thing. Because I think there's this temptation...

**Chris Benson:** That happens, I think, to all of us.

**Daniel Whitenack:** Yeah. I was thinking about this while I was reading the article... There's this temptation - like, there's eight different implementations of this thing I wanna do, and I start trying out one, the first one doesn't work, the code doesn't run, the second one seems weird and it doesn't run, and the third one... And eventually I find that one, and it's like "This one runs all the way to the end. I can get my model out." I get that evaluation number... Maybe I have to tweak a few things, and whatever... But I'm so happy that basically I'm like "This ran, and it produced a result. I win." \[laughter\] Sometimes that's how I feel, because it's such a process to get any state of the art model implementation to run sometimes... Which is one of the reasons why it's great that things like Transformers from Hugging Face, or other packages out there have such a great model zoo, or other things that are validated and will run... Because sometimes it's just so hard to get these implementations to run.

**Chris Benson:** So as an aside - I'm gonna pull you for a second out of this particular article... What do you think is really causing -- I mean, I've run into that, too. I think everybody runs into that problem. What do you think -- is it just sloppiness in putting the solution together?

**Daniel Whitenack:** No, I don't think it's intentional in a lot of cases. I think it's a combination of things. One of the things is people version-control the code they use to do something for their own internal purposes, or their own research project, and they actually don't intend to release that, thinking that people are going to try to reproduce what they're doing... So as a result of that, they make certain assumptions, like "Oh yeah, I know I have that always installed" or "I'm running on this type of environment" or whatever... And that's just sort of assumed knowledge on their part. And it's not like malicious, like trying to keep people from reproducing what they're doing; it's just they're really stuck because that's how they're managing their code. It's open on GitHub because they have a personal account, or they want it out there, for whatever reason... I think that's thing number one.

\[00:20:34.14\] Thing number two is it's just really hard with all of this technology constantly updating and being interconnected in so many weird and different ways... People will have a requirements file or something like that, that has certain packages, with versions... But they miss a certain dependency, or they don't provide that version number, and that thing makes all the difference, and breaks things in weird ways... And it's just hard. When you're trying to make things reproducible, it's actually very difficult.

**Chris Benson:** This is something though that in the software world we have tackled and done quite a good job, in that it is now typical to pass a workaround like that for containers. Is there an argument to be made that data scientists and deep learning engineers and other practitioners in the field maybe should ramp up on containers and pass these around... Because that way you're passing a unit of work, if you will, that has all the dependencies built in.

**Daniel Whitenack:** Yeah. I mean, all of our projects internally that I work on - we containerize everything with Docker, and that's how we run things.

**Chris Benson:** Me too.

**Daniel Whitenack:** Even our Jupyter servers, or whatever we're running - it's all run within Docker, also based off of oftentimes supported images from NVIDIA or the TensorFlow team... Or images that are supported and have documentation. You can get these from DockerHub, under the official and verified links \[unintelligible 00:22:11.12\] or you could get some from NGC from NVIDIA; it has a lot of really great, optimized containers. So yeah, we use that... It's probably not the only way though. I certainly know that there's a lot of data science people, AI people, researchers that just don't like Docker, for whatever reason. They can't get the workflow that they like. So there's other efforts, too.

I know we had a conversation about MLCommons recently, and they've got this project MLCube, which we'll link in the show notes... And that's part of the goal of that project as well, is solving some of these issues.

**Chris Benson:** Gotcha. And I had pulled you away from Rajiv's thing, and I was just wondering what the thesis was from his perspective. Sorry for pulling you away from that; that was a longer tangent than I expected.

**Daniel Whitenack:** No, but his conclusion -- he says sharing code isn't enough to validate models. So if you are lucky in one of those cases, and let's say they've provided the Docker image or something, and you can reproduce their exact training run and do the exact thing that they did, basically his comment then is that "Well, that doesn't mean that the model is validated, that comes out of that process... Because there's this whole other thing called data that is at play here." And what he shows, interestingly enough, in the article is that -- one thing that could happen is that the code that's part of what just ran, you got to run, actually creates some data leakage. He found certain examples of this...

And again, these are honest mistakes, and I'm sure there is a lot of these around. He just found some in some data science or AI books, and examples... But he also -- I think the one that struck me more was this \[unintelligible 00:24:05.15\] dataset, which is a shared task dataset based on predicting the movements of a robotic arm... And he said that he basically found that the hold-out dataset was straight-up built out of the training dataset. So there was overlap of 4,500 examples in the test set that are also present in the training set. And so yeah, you're gonna get some really interesting behavior of your models there.

\[00:24:35.02\] It just goes to show - you can obviously get your data from a trusted source. You're not gonna be able to reproduce everything. You're always gonna be standing on the shoulders of other people... But you've also gotta assume that those shoulders that you're standing on - they're also fallible people. There's definitely stuff that could be bubbling up from those things that you're building your project on, that have a little bit of issue in them as well, whether that be a shared task dataset, whether that be a library that you're using, or an implementation that you're referencing, or whatever it is.

**Chris Benson:** Gotcha. That's interesting. One of the things as you talk about the fallibility of people doing that - there's a lot of manual stuff. Unless you're going all the way to containers or some other tool that kind of helps catch you up, there's been a couple of things that I've seen, that are almost the other end of the spectrum on that... And that is trying to do machine learning without code, to where you don't have all that --

**Daniel Whitenack:** Yeah, there's definitely this jargon of low/no code sort of deal...

**Chris Benson:** Yes. And that's really taken off lately, I've noticed. I've seen a whole bunch of different things, both on the software side, and now people -- I've seen multiple articles about Excel for doing machine learning, and stuff...

**Daniel Whitenack:** Things come full circle.

**Chris Benson:** It does. And I will reveal my bias, to say - you know, the first time or two I was seeing the Excel articles, I was kind of shrugging it off entirely... But they seem to be - depending on how you wanna define machine learning, and what level, and such as that, it's catching on a little bit. There's a strong interest, just as there is in the software development field.

I had a conversation just a couple of days ago with a good friend who was talking about all the no code approaches. And this is a programmer; someone who programs in many languages, talking about all the no code solutions, and some of them are quite good.

So having seen some of these promoting Excel as machine learning tools - what do you think? Is that something that would ever, Daniel Whitenack, enter into your mind, to get some work done?

**Daniel Whitenack:** Well, first of all, I don't have access to Excel at all, so I probably wouldn't use Excel...

**Chris Benson:** Okay, fair enough. \[laughs\]

**Daniel Whitenack:** ...just because I don't pay for it.

**Chris Benson:** Yup, got it.

**Daniel Whitenack:** I mean, I don't know if Google Sheets, or whatever -- maybe there's some of those things. There's probably some of those things there as well. But it's interesting that you bring this up, because even just last week I had a Slack message from one of my co-workers who's a product manager, not a programmer/developer type person...

**Chris Benson:** Sure.

**Daniel Whitenack:** ...but tries to keep up with various things. And she sent me a message just asking "Hey, what is this low code, no code thing? How does it relate to what we're doing?" And to be honest, I didn't know how to answer, because I don't know if I fully explored the low code, no code things...

The one thing that I had exposure to is self-service analytics, data science and something... I'm looking at their website right now... They talk about "Simply powerful, extraordinarily easy, automated analytics of every kind. Data science and AI without coding. Data quality in minutes."

\[00:28:09.10\] So I will say that I did some advising and consulting with the team last year, and for some of their data pipelining they use this tool... And I thought it was really cool, actually.

**Chris Benson:** Is it open source, or is that commercial?

**Daniel Whitenack:** No, it's commercial. And I don't think it's cheap, by any means... But it seemed to be very powerful for the things that -- I think it fits a certain group. A group that is doing this data pipelining, wanting to use reusable components that other people have developed to do tasks. They can define the task, they can define the business logic, but they don't know how to build those components or manage them in a robust way... And so they were sort of able to drag in like "Oh, here I'm gonna do this, so my data comes in", and then they drag in a little box that does some type of pre-processing on that data, and then they drag in a little box that creates a random forest model, or something like that, and does some classification, predicts some labels... And then they drag in another box that egresses that data to some database, or something.

So at that level it all seemed quite useful. I can't speak to the flexibility of it. What if I have a set of data that's very different from what they normally deal with? How many of those reusable components can I use? How can I customize them? And I think there are ways to customize them and bring in your own Python code, and all of that... But then the question becomes "Well, if I'm doing that customization, and not being able to reuse the reusable components, am I getting the full value out of the thing?" I don't know. That's a whole ramble of basically all I know about low code, no code, which isn't much.

**Chris Benson:** So I'm gonna make a bold prediction, my friend... I am predicting that deep learning eventually has many options in the low code, no code arena, and that some of them become quite good. And there are both commercial and open source. And there probably are already some that we're not aware of, that people are yelling at us as they listen to this, as they're running or whatever they're doing today...

**Daniel Whitenack:** Yeah, there's a lot, yeah.

**Chris Benson:** So I think that we'll go that way... Because I think one of the interesting things that helps in this way is that we are also seeing -- if you listened to the show a couple of years ago, we were talking about totally new algorithmic approaches to deep learning all the time, and right now there is a conversation within the community about "Well, we're seeing the same classifications and models or architectures that were used over and over again." And I'm waiting for the next really big breakthrough, I'm looking forward to that. But it's been a little while. We're seeing a lot of evolution. And we can talk about it in the negative, but I will say, it helps the tooling catch up, to some degree, so that people -- as it gets commoditized... Because that's what we are seeing - we're seeing a lot of productivity on very diverse and massive commoditization of deep learning architectures, into many, many use cases. So the tooling will catch up.

So the way I'm measuring that - I have my software development workflow, which is I think fairly mature, as is for other software developers, and then our deep learning workflows have been maturing steadily as new things have come out the last couple of years. I'm looking forward to the day when those two are able to merge in the way that I want it to merge, meaning it is a sensible, comprehensive approach. I'm excited about that, and if there is some level of no code, low code built into that, I'm okay with that. I'm not gonna push it away.

**Daniel Whitenack:** \[00:31:48.23\] Well, Chris, I recently have been working on spec-ing out and getting some quotes for a new server for some of the research that's going on in our organization... And I was looking through all sorts of different options, and I talked to all sorts of different people... Thank you to -- if there's anyone out there that helped me through that, thank you.

But after all of our conversations on the podcast, I thought "Yeah, I kind of know enough to pretty instantly figure out what we need." And then I started looking at these different options, and the thing that got me -- so I knew a lot of the things that we needed, but then I had this thought of envisioning the multi-GPU jobs that were gonna need to run. And looking at the different systems that were available, I started questioning "What sort of machine do you actually need to run a multi-GPU job?" Because there's all of these different acronyms and things that are promoted, like the NVLink, NVSwitch from NVIDIA...

**Chris Benson:** Sure.

**Daniel Whitenack:** And there's these little NVLink bridges that bridge directly between GPU cards... So I was unclear -- like, I just kind of hit a roadblock and I was like "What do I actually need for the type of multi-GPU jobs that we're gonna want to run?" which are mainly training speech-related models. So in doing that, Lambda Labs, which builds and sells GPU workstations and servers and pods - they have this really interesting set of benchmarks that they've done, which we'll link in the show notes... And they break out for both PyTorch and TensorFlow, and they have these interactive graphs... So you can have at a chart, or a table, you can look at different metrics, different precision, different number of GPUs, all sorts of different models, like transformer models, ResNet, WaveGlow, Tacotron, BERT large SQuAD... All sorts of different models. And see for all of these different combinations of GPUs the throughput numbers, essentially, is what I came down to.

One interesting thing - if you go to four GPUs, you all of a sudden see some really interesting things. For example, if I'm looking at let's say four GPUs and I look at all models, I can see - okay, there's the 4x A100, and one has PCI-e, one has SXM4, the difference there being the way that the GPUs interconnect.

Essentially, if you start looking through these -- like, if I go down to two and look at the numbers, some of them say NVLink, some of them say PCI-e explicitly... And after doing some exploring, I started to realize a lot of these numbers didn't have the NVLink or NVSwitch interconnect, which made me start to question "Well, do you really need NVSwitch to do multi-GPU jobs?" If I get a bunch of cards and then they're not linked within NVLink and NVSwitch, can I just do nothing? Is it gonna be absolutely terrible?

What I ended up finding was yeah, you do get a slight boost with this NVLink/NVSwitch, but in a lot of cases, and even for some of these models, it wasn't significant at all. And in some cases it was significant. I found that sort of interesting, that -- like, yes, you do get a sort of performance hit if you don't have the interconnect... But in some cases it's not that much, because you're only updating those parameters between GPUs when you update your gradients, which isn't happening all the time. I just thought I'd share that while we are discussing things, because I hadn't fully got through that train of thought before I explored these things.

**Chris Benson:** \[00:36:16.29\] So clearly, at the different levels that you can buy in in terms of hardware, from NVIDIA or other vendors, clearly they're pushing NVLink and those interconnect technologies...

**Daniel Whitenack:** Sure.

**Chris Benson:** What you're saying, if I'm understanding you, is it really depends on the architecture that you're deploying, and the dataset that you're using...?

**Daniel Whitenack:** Yeah, I think it does. Here's one way to put it. You may be able to get more cards that are not linked with NVSwitch, but are the later-gen architectures, that will actually perform faster than last-generation top-tier cards that are connected with NVLink or NVSwitch.

**Chris Benson:** That's interesting.

**Daniel Whitenack:** Yeah. So it's not just like if you're doing multi-GPUs you need this special interlink infrastructure; you kind of have to also weigh in the generation of cards that you're looking at... Because if you go down to one GPU on the Lambda benchmarks, you can see that the 3090, which is a consumer card and is very cheap as far as GPU cards go, gets you halfway to the training on that throughput, as the A100 that's listed there.

**Chris Benson:** Really?

**Daniel Whitenack:** So that's pretty incredible, actually, right?

**Chris Benson:** It is.

**Daniel Whitenack:** So if you then go to two GPUs on the benchmark, for example, you could have two 3090s that are going to be more throughput on their benchmarks than two RTX 8000s connected with NVLink. And those are pretty hefty cards, and they're connected with NVLink... But two 3090s that are just connected with PCI-e, no NVLink, are gonna outperform it in terms of this particular benchmark, for cheaper.

**Chris Benson:** Using this, did you arrive at a spec for your own purposes?

**Daniel Whitenack:** So we have a couple different ones that we've spec-ed out. The 3090s - they're consumer cards; so if you're getting an enterprise server, they're likely not gonna be spec-ed out with an enterprise server... But yeah, we did come up with a solution, and I think our solution was to get one server that had a bunch of cards that weren't NVLinked, didn't have the fancy NVSwitch, because we were gonna do a lot of single GPU jobs, and get the later-gen cards, because they're gonna be so fast for that stuff...

**Chris Benson:** Right.

**Daniel Whitenack:** And then just get a second server with maybe two of the later-gen cards that are linked.

**Chris Benson:** Gotcha. You split the difference, sort of, on your decision...

**Daniel Whitenack:** We've kind of split the difference, yeah...

**Chris Benson:** ...by use case.

**Daniel Whitenack:** Because it's gonna depend. It basically depends. Yeah, I've found this all very interesting. Maybe going into all those details - no one's listening; it's like, "Why is he talking about this?" But it was very--

**Chris Benson:** We had a whole episode about this not too far back.

**Daniel Whitenack:** Yeah. It was very surprising to me how much I thought I knew going into that, versus what it actually took to really understand what was the optimal setup for our team, in terms of the generation of the card versus the linking, and all of that stuff.

**Chris Benson:** \[00:39:56.08\] And we'll link it in the show notes -- I don't have the episode number off the top of my head, but we did an episode where you talked about your process of putting together your first server, and all the decisions that you made... So if this conversation is of any interest to someone listening, then they should definitely -- if they haven't already listened to it, go back to that episode. It was excellent. We'll put it in the show notes to give you a quick link to it.

As we look forward, I ran into an -- IEEE Spectrum is a publication of IEEE, and they had an article here called "Deep learning at the speed of light", where they were talking about Lightmatter, which is a company who is putting together photon-based computing using light in its chips to do accelerated deep learning. Kind of an interesting thought there... I don't know where the competition is, I don't know where NVIDIA is on that, but it definitely was an interesting idea about the idea of doing that. Any thoughts? If you had an affordable chip that you could use for your purposes and there was advantage to it, would you consider doing a light-based solution for your computation?

**Daniel Whitenack:** Yeah, of course. I could so nerd out with that, with my physics background... It's like, "Oh, you're using NVIDIA 3090? I'm using a Mach–Zehnder interferometer..."

**Chris Benson:** I mean, who needs electricity when you've got light?

**Daniel Whitenack:** It just has a different ring to it...

**Chris Benson:** Yeah, exactly. Totally. It'll be interesting to see if the market hits a point where that becomes a commonplace thing, and not a novelty.

**Daniel Whitenack:** Sure, yeah.

**Chris Benson:** I just thought I'd ask, since -- I wasn't even gonna bring that up, except that we were talking about chips here...

**Daniel Whitenack:** Infrastructure, yeah. Cool. Well, as we kind of get to the end here, we always like to share a couple of learning resources with people... And I know that you've found one deep learning course that's online now. Do you wanna talk a little bit about that one?

**Chris Benson:** Yeah, so one of the -- I assume you're talking about Yann LeCun's course?

**Daniel Whitenack:** Yeah.

**Chris Benson:** Yeah. Yann LeCun, who was at Facebook -- I forget his title; Chief AI, or something. I don't have it in front of me. But he is also one of the legends of the field. So he is one of the top minds in the field, and he released a deep learning course that is free... And it's really had quite an uptake on it. It's called Deep Learning DS-GA 1008. It's part of the New York University Center for Data Science, and it's accessible by all.

By signing up for this course, which is released in the spring - I think spring 2021; we'll be signing up shortly, if not already... But you'd get to learn from one of the great minds of the field. We've seen a few other major figures in the field release their own courses, and we've taken some... But definitely, the depth of somebody who is one of the leading thinkers on where the field is going, not just as a practitioner, but as a researcher - I don't know, it adds a little zest to it. It's a course that I'm definitely gonna look into myself, just to see what's on Yann's mind.

**Daniel Whitenack:** Yeah, that's awesome. The one learning resource that I wanted to share was this sort of new format that the TensorFlow team is doing for their -- in the past they sort of did this TensorFlow Dev Summit, which is a great event. I also watched it livestream... I'm not sure how that all will play out, and what formats they'll eventually do, but this year they're doing this thing called TensorFlow Everywhere...

**Chris Benson:** Yup, I noticed that.

**Daniel Whitenack:** We'll link it in the show notes. I think this is really cool, actually. So they essentially have TensorFlow Everywhere, which is a series of global events that TensorFlow is hosting, with all sorts of different content... And I think it's really cool, because they have events that are geared towards certain geographies; so the timezones match up well for people. It's not like people have to livestream at midnight, or 1 AM, or something like that... But also in a number of languages. I see events in Bahasa/Indonesia, Chinese, Korean, Vietnamese, Turkish... Different languages. So people are actually getting that content in a language they value most... At least a little bit more than they were before. There's 7,000 languages in the world, and there's only a handful here... But I think it's a great step in that direction as well.

\[00:44:32.26\] I thought it was really cool, the way that TensorFlow is doing this. You can go to the website, figure out which event is in your geography and works for your timing. They're kind of going on actually right now... There's some that have already gone on, but then they're stretching out through March as well. And the ones in North America, which is where we are - it's the 27th of February. I'll probably be tuning into that one. But yeah, definitely check this out.

**Chris Benson:** That sounds really good. Just as kind of a closing comment on that - there's so many, obviously, very enormous negatives having to do with the pandemic, but one thing that might be a small positive is the fact that there has been some interesting innovation with the whole world kept away from one another... And us still having the need to have commerce, to conduct business, to see each other and to talk, and communicate and learn. There's been quite a bit of innovation in terms of how we've approached it... So I'm curious, as we potentially are at the beginning of the end of the pandemic in terms of vaccine rollouts, and maybe at some point in the months ahead having the ability for large numbers of people to return to normal life, how do you think that'll change? Are we all just gonna fall back into our old habits and go to the conferences? Do you think more things will stay online?

**Daniel Whitenack:** I think there'll be quite a few people that will be eager to do that, but I'm also hoping that people have found at least some ways to save on travel and those sorts of things... But also, I'm really hopeful that it ends up that there are lower costs and more inclusive ways of involving people, especially from Africa, from Asia, from Latin America, from other places, in the events that were primarily North-American and Western-European based.

**Chris Benson:** Yes.

**Daniel Whitenack:** That's the part that I really hope survives - enabling that access for people. And also enabling those people to contribute... Not just be consumers, but actually realizing that they have valuable things to add in these events, and giving them a way to do that. Those are the things that I'm hopeful will survive.

**Chris Benson:** I'm 100% in agreement with you. You cannot possibly have a better note to go out on, so I think we should stop right there.

**Daniel Whitenack:** Yeah, sounds good. This has been fun, Chris. Thanks.

**Chris Benson:** It has been a fun conversation.
