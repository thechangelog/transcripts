**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International. I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well today, Daniel. How are you doing

**Daniel Whitenack:** I am doing awesome, because my favorite new data science thing is this thing called SLICED, and today we have Nick Wan and Meg Risdal with us from SLICED, so I am so excited. I almost feel like I'm on SLICED, seeing both of your faces... \[laughter\]

**Meg Risdal:** I've gotten that a few times, yeah.

**Daniel Whitenack:** Yeah, we don't have -- the podcast just has the audio, but we're seeing your faces now, so... Welcome!

**Meg Risdal:** Thank you. Yeah, super-excited to be here.

**Nick Wan:** Thanks for having us.

**Daniel Whitenack:** Yeah. Well, some of our listeners - I don't know how they could not know about SLICED, but let's just suppose that maybe some of them don't know about SLICED. Can one of you just give a bit of an intro for what it is?

**Meg Risdal:** Go for it, Nick.

**Nick Wan:** Alright. SLICED is a competitive data science game show that we have on my Twitch channel. It's for data scientists, and they receive a dataset that they've never seen before. And they have two hours to create predictive models, data visualization, find good coding practices, or random things that me and Meg have deemed important to do in the dataset, and all these things earn them points.

\[00:04:14.21\] At the end of the night, depending on how well your model performed, how good your data visualization was based off me and Meg's qualitative--

**Meg Risdal:** Whims...

**Nick Wan:** ...judging... \[laughter\] And how many of these things that we've buried in the dataset that you find, which we call golden features - these all add up, and the person with the most points wins.

**Daniel Whitenack:** That's awesome. So I have two follow-ups. One, why is this not yet on network TV?

**Meg Risdal:** Great question.

**Daniel Whitenack:** And two, could you give us just a little bit of a background? I know, Meg, you work with Kaggle, so I know that there's some background in competitive data science leaderboard-type things... Is that part of the inspiration, or how did the collaboration come about and get started?

**Chris Benson:** Yeah, where did the idea come from?

**Meg Risdal:** Yeah, so I think there's like a few questions to unpack there. Where the idea came from is really fun, so I'll talk about that first... So Nick has had this stream on Twitch that he's been doing, and a while back he invited folks for these kind of like data science roundtables on Wednesdays, where he just invites people like me to come and chat about whatever is current on our minds etc. And we kind of joked about -- you know, we both like cooking, and so we kind of joked, "What if there was something like Chopped, the TV show, network TV show Chopped, but for data science?" Where instead of a basket of ingredients you've got a dataset, and instead of an hour to create a meal or whatever recipe, they're creating predictive models. We kind of laughed about it, but then we're like "Well, why the hell not do it?"

So then we decided to do a pilot season on Nick's stream, and that was well-received, and it was a ton of fun, so... Yeah, that was kind of the impetus and where the idea came from. And then how does it kind of relate to Kaggle? I think Nick and I are both really interested in the data science community, so -- I do obviously work at Kaggle, very involved in competitive data science, but for me the bigger thing is the data science community, and I think that's what has really excited about Slice, and what's excited me about working with Nick on Slice, because he's just as excited as I am about that. But I'll let you elaborate on that answer, Nick, because I'm sure you have your own thoughts...

**Nick Wan:** No, that's pretty much all of it. I think the big thing in terms of coming together was also -- I don't know, I identified that there was like this missing sense of community in some ways... Something that's really -- I don't know if it's annoying, but something that kind of annoyed me was all these virtual conferences... And the thing that I loved about conferences was the networking, and the meeting new people, and being able to catch up with old friends, and stuff... But when all these conferences moved virtual for the pandemic, a lot of that stuff that I really liked about conferences got taken away, and so all of this stuff that I typically liked about tech and data science and all the different conferences that I went to kind of disappeared.

So I've been desperately seeking out what was that sort of alternative, and there was really no good one, so I figured "Let's just make one", and bring together something that everyone can rally around and cheer for people and become fans of people and data science, and things that you would typically find at conference socials, or conference networking events, things that people can get behind... And for whatever reason, it's worked...

**Meg Risdal:** \[00:08:18.20\] It's working, so far... \[laughter\]

**Chris Benson:** So that begs the question - for someone who has no seen SLICED, can you describe the experience a little bit? Both for the viewer and also for the person who's participating directly.

**Nick Wan:** Yeah, I could talk about it from at least the viewer perspective. I'll have Meg do the contestant perspective, but...

**Meg Risdal:** Sure.

**Nick Wan:** From the viewer - you know, I've been running my stream for a while now, I've been streaming since I was in grad school, back in 2015... So it's been a while for streaming, and the community in chat - they just really want interaction. They go into these streams, and a really fun things to do is being able to interact with the content creator, the streamer, and having that almost immediate response back, and having almost some say as to what's going on... It's really fun and clearly is directly engaging.

So when you put things in the context of like game shows or events, you almost feel like you're a fan at a sporting event. And if you have front-row seats or whatever, you're able to almost talk to the people doing the event, being able to see LeBron James, and having front row seats... And maybe he gives you a ball, or falls on you, or something. It's exciting just to be that close... And this is one of those things that I feel that people kind of respond to in chat - they're so close to being able to interact with the content that's happening live... And not only interact, but they actually are able to participate live as well.

We have the datasets available on Kaggle, the contestants are using the Kaggle platform to submit and get scored by the competition, as well as anyone participating... So they're quite literally doing all the same things as the contestants, and they're able to joke around with each other, and find each other, and make friends through the chat, make friends through the Twitter hashtag, and all sorts of fun stuff like that. So from the viewer perspective, I feel like there's a lot of engagement, and it's pretty natural because of just the platform which exists as it is today.

**Meg Risdal:** Yeah, I love the interactive -- different ways of interacting with SLICED \[unintelligible 00:10:46.00\] was pretty cool... But yeah, the perspective from the contestant is pretty different, of course... It's probably really stressful. Huge props to our 16 contestants this season for putting themselves out there and live-coding in front of...

**Daniel Whitenack:** That's scary.

**Meg Risdal:** ...a worldwide audience is what I like to call it. So yeah, the contestant experience -- Nick and I put a lot of work into recruiting contestants, so we've got 16 folks... So kind of like a little bit of behind-the-scenes, I suppose, is -- we do everything through Discord, so they're just doing screen sharing on Discord, and we have a little bit of kind of like a green room experience, 30 minutes where we do setup, kind of like the vibe check from the contestants, and I know it's some nerves, and they're kind of like swapping tips, and some ways that they're gonna plan to approach the challenge for the evening... So that's kind of cool behind-the-scenes to see.

\[00:11:50.09\] Then they kind of go dark. It's like two hours live-coding, which - they can be fairly isolated... So they can't hear anything, they can't see anything, we don't let them watch the stream etc. We do let them stream to their own channels if they have Twitch or YouTube, so folks like Jesse Mostipak and David Robinson, for instance, did their own streams on Twitch and YouTube respectively... \[unintelligible 00:12:14.21\] mode on Twitch... So they can be fairly in their own kind of lane for those two hours of live-coding, all while knowing that their screen is visible to chat.

I think a cool dynamic is the one-way kind of communication that we see from the contestants. They'll sometimes write comments in there, like Markdown, or -- a bit meta (I guess) has been memes... So one component of their points is chat vote. Basically, I think it's five or ten points (it has kind of varied throughout the season) that they can earn through winning a chat vote. So we poll our audience at the end of the episode and say "Who's your favorite?" basically.

So our contestants are doing things like throwing up really funny memes that they know the viewers can see, even though they can't necessarily two-way interact... So it's definitely a little bit of like a performance that they're putting on, in some sense.

So then they live-code, which is probably really stressful and nerve-wracking, I imagine, as far as like the experience goes... And meanwhile, I'm relaying messages and timechecks to them in Discord, just to make sure that they don't go totally off the rails and get in their own head... And then we invite them back to watch the stream at the end of two hours.

So that's always fun... They'll watch us do the judging portion... Nick mentioned that there's the points that we allocate for things like data visualization... Nick does the leaderboard reveal, we sum up all the modeling points... So they can watch that, and so it's kind of funny to see them then hop into chat and kind of start to interact with each other, interact with the chat, interact with us... So that's pretty cool to see.

And then, of course, Nick has alluded to the community on things like Twitter etc. So our contestants, even outside of the show on Tuesday nights, are also a big part of the community on things like Twitter, through their own YouTube and Twitch channels, blogs etc. So there's lots of participatory aspects, not just for our viewers, but for our contestants we've seen through this season.

**Chris Benson:** One thing you have said very early on as you started going through it was you talked about spending all the time in your recruitment process, which makes me wonder - can you profile a little bit about what you're looking for? So we have all these data folks that are listening to you as this goes out there, and some of them wanna be on your show... Can you give them some tips about what your profiling is?

**Meg Risdal:** Nick, do you wanna take that one?

**Nick Wan:** Sure. So we are looking for folks who understand what predictive modeling is, so being able to take a dataset and being able to put that through some sort of statistical or machine learning model package, and come out with predictions... Whether they're regression problems or classification problems. So be able to go from beginning to end with a dataset in to predictions. And then also be able to have some sort of data visualization skills, whether that's really basic, like if you're in Base-R, or you're using Matplotlib, or whatever it might be... Or if you are really fancy, doing things in Plotly, or doing things in Bokeh, or whatever it might be, crafting amazing interactive stuff. Whatever your data visualization skillset is, just have some.

\[00:15:48.09\] With those two components, that typically -- at least in my personal opinion, that usually qualifies most folks as data analysts or above kind of skillset. So that's sort of what we're looking for. Of course, the big component of all of this is you only have two hours to do all of it. So whether you're a 20-year vet in tech, doing software engineering and deep learning, or if you are a student, the time is really the limiting factor for everyone, so you can't really get so deep into the neural net architecture. You can't really develop a full, end-to-end, shiny app... But that does serve as sort of like "What can you do then?"

On top of all that, we are always looking for people who are interested in participating for the next shows, and we have that on our site... So it's not too dissimilar from like a problem set you might get from a job interview... But it really is just a double-check to make sure that you have the skills that would qualify you into SLICED. And also, we don't wanna bring in people who are just gonna do nothing, or do -- maybe they think it's one thing and it's not, and they have a tough time getting through an episode... We don't wanna put people in a situation where they might be embarrassed, or something. We just wanna make sure that if you could get through some of the more basic issues we've seen, that most likely will -- you know, we most likely will have confidence that you'll be able to get through the season.

**Meg Risdal:** Yeah. And I would say if people are interested, they can always follow along in one of our upcoming episodes after this podcast comes out... But they can also take any of the previous weeks' datasets on Kaggle and download the dataset, make submissions, and really walk in the literal steps that our contestants did during the show, and try to do that in two hours. That will give them a very real feel whether SLICED is something that they might be interested in.

**Daniel Whitenack:** Okay. So I watched some even last night, and I have to say -- we were talking about choosing some of the contestants and that sort of thing, and from my perspective in data science land there were some LeBrons there as part of the competition... So maybe you could just describe a little bit about some of those people on the roster.

Also these might be names some people have heard of, but maybe you could also comment about things you've been surprised, or felt like you learned about these people in the competition that maybe you don't get from just their public persona...

**Meg Risdal:** Yeah, I think -- so some of the names you're probably alluding to is folks like Julia Silge, David Robinson... I would put Jesse Mostipak up there as like a rising star, certainly on Twitch... I think we were able to recruit Julia Silge and David Robinson actually through Twitter... It got around that we were recruiting for SLICED on Twitter; there was some hype from the pilot season, and somebody kind of like egged on somebody else... I forget who started the egging on. Either Nick or I kind of jumped in and we were like "Yeah, we'd love to have you." And then it kind of snowballed from there. But they were both up for it. They already (I think) had started with some exchange of some meme banter, so I was like "I got some good vibes from this. This will be good."

And I've worked with Julia Silge in the past. Her and I overlapped some time while we were both at Stack Overflow. David Robinson has also spent time with Stack Overflow. He worked with Julia Silge and they've authored Tidy Text together...So certainly some networking. I also worked with Jesse Mostipak. She was at Kaggle for some time... So yeah, definitely just some reaching into our networks to recruit some folks.

Oh yeah, the other part of the question was --

**Daniel Whitenack:** What did you learn about--

**Meg Risdal:** ...what have we learned about some of these folks...

**Daniel Whitenack:** Maybe surprising things that you didn't expect.

**Meg Risdal:** Yeah...

**Nick Wan:** \[00:19:59.07\] I learned that drob will stop at nothing to learn something.

**Meg Risdal:** yeah.

**Nick Wan:** He didn't know how to meme, and then he spent a week studying memes... \[laughter\]

**Meg Risdal:** Literally, studying memes...

**Daniel Whitenack:** So can he meme now?

**Nick Wan:** Oh, yeah.

**Meg Risdal:** Yes!

**Daniel Whitenack:** I'm pretty sure I saw some great examples last night...

**Meg Risdal:** He's a powerful memer, yeah. \[laughter\] And maybe he wasn't before. He definitely is now.

**Chris Benson:** He went from novice memer to master memer, just like that.

**Meg Risdal:** Yeah.

**Nick Wan:** Some might call him like a 10x memer.

**Meg Risdal:** Yeah, he's a 10x memer. \[laughter\]

**Daniel Whitenack:** Oh, for sure. Yeah.

**Meg Risdal:** We didn't know it before, yeah.

**Daniel Whitenack:** Full-stack memer.

**Chris Benson:** A full-stack memer...

**Meg Risdal:** Yes. I don't know if it's so much that, you know, this is something that I learned, but it was maybe rather reinforced for me... But just how much some of these folks like Julia Silge and drob (David Robinson) are willing to just give back to the data science community... And Jesse Mostipak, too. You know, just give back to each other...

Speaking of meme-ing, Jesse I think offered her coaching in meme skills to David, and I think they had some back and forth on different meme approaches. They have all kind of piggy-backed off of SLICED to create content and share content, learning and educational materials with their communities... So that's not necessarily surprising for those folks, but it's definitely reinforced what makes them really great members of the data science community... And I'm glad that SLICED has been a platform for them to do that.

**Nick Wan:** I do think one thing that's pretty universally interesting is through SLICED being able to see some of these rockstars of data science communication, being able to compete in something that's really foreign to everyone... I feel like it's a leveling, or normalizing, or humanizing even situation, because a lot of the times folks, maybe people listening to the pod right now, will know these names only through content, or know these names only through tutorials, or books, or whatever it might be... And they of them as like these masters of data science, or masters of engineering... And it's really hard to think like "Well, I'll never be able to do what drob or what Julia or what Jesse or what whoever is making \[unintelligible 00:22:36.10\] I'll never be able to get to that point. I'm all the way down here" or whatever. And through this show at least, being able to see them not necessarily coming in first place all the time I think has been really eye-opening.

**Meg Risdal:** Yeah.

**Nick Wan:** Because that's at least encouraging to some of the folks, not just the contestants, which - I mean, they've definitely thought that... \[laughter\] Like "I'm going up against drob. I'm gonna win."

**Chris Benson:** You make a great point there, and if you think about it, pre-pandemic conferences, when we were going and meeting, and so much of the conference was not just the talk or anything, but all the things that happen in the hallway, and dinners and everything - kind of that same point is that it gives you that chance to realize that these people you've aspired to are human, and they have to go through a thought process too, and sometimes, as you're pointing out, you get to see them in action, doing it. And it kind of humanizes and also teaches you along the way. So that's a fantastic benefit.

I do have a follow-up question. I'm curious about recognizing that these people clearly have the resources to do the job that they do, for the purpose of the contest. Do they bring their own GPUs, so to speak? Or is there any sort of leveling of infrastructure and equipment? How do you approach that?

**Meg Risdal:** \[00:23:56.25\] Yeah, so one of the things that we've put together in advance of the show is a little bit of like contestant guidelines... And with SLICED being a pretty new concept, we didn't wanna get super-rigid with every single minutia and detail, but rather we wanted to provide some kind of higher-level guidance. And one of the pieces of guidance was just don't bring your super-computer, don't fire up TPU's for these putzy little things... Just kind of like asking --

**Chris Benson:** You can't bring your own DGX for the contest, just for yourself...

**Meg Risdal:** Right. Yeah, so just kind of like asking \[unintelligible 00:24:37.08\] here's the spirit of SLICED, this is the spirit of the competition." We just ask that you keep that in mind when you think about what is your workstation, what's your setup, what are you gonna use as far as resources. And if we ever get to a point where SLICED is on network television and we do have literal -- like, LeBron James becomes a machine learning engineer and competes on SLICED, then maybe we will have to get a little stricter. Maybe we can provide resources to literally level that playing field... But for now, we've really wanted to invest in really solidifying "What is the spirit of the competition? What is the spirit of SLICED?" to make sure we convey that above all else.

And yeah, so far it hasn't been a problem. We've got a lot of people who are using resources already, like \[unintelligible 00:25:29.06\] which does -- you know, resources like that do help to level the playing field and equalize access to data science resources, not just for your contestants, but for folks who are following along. I also should mention folks could be using Kaggle notebooks as well, which provides free resources for compute... But yeah, that's been our thought process. It hasn't been a problem so far that I'm aware of.

**Nick Wan:** The thing about resources in general - even if you'll have super-computing at your fingertips, because like... You know, one of our contestants, Landon Buechner, he just graduated as an undergrad. So it's not insane to think that if a student is on a campus that has access to a supercomputer, and knows a little Linux, and has access to whatever supercompute cluster they have - that's fine and dandy. But you only have two hours. So at the end of the day, if you get to a point where your training is gonna cost you hours and you could limit that to minutes through super-compute, then okay. Fair. That might be little overpowered. But our datasets are also curated in a way that the training is never gonna usually be more than minutes.

Me and Meg do a lot on the backend to make sure that the datasets are a particular flavor. We're looking at tens of thousands of rows, we're not looking at millions of rows. We're looking at tens of columns, we're not looking at hundreds or thousands of columns. So even the nature of the data that folks are receiving doesn't necessarily lend itself to things like supercompute... Where in essence, if you did try to do that, you'd actually be losing time.

So a lot of it is me and Meg making sure the QA on the backend is pretty good; shout-out to the engineers doing QA practice... So lots of QA. But also, that plus the time definitely limits the resources and how powerful they can really be.

**Meg Risdal:** We'll see when we do the SLICED computer vision spin-off though...

**Daniel Whitenack:** Oh yeah, that could be good. Self-driving SLICED...

**Nick Wan:** Oh, yeah... \[laughter\]

**Daniel Whitenack:** Speaking of those tasks themselves, I know the one last night -- Chris is gonna love it if he doesn't already know about it, because he's an animal lover... But can you describe, maybe just highlight a couple of the tasks to give a sense of what are these tasks that the contestants are working on?

**Meg Risdal:** \[00:28:10.22\] Yeah. So last night's dataset was our first multi-class classification challenge that we gave our contestants this season. We gave them a dataset of animals that were in animal shelters, and they had to predict the outcome, meaning was the animal adopted, was it transferred, or was it something else? So there's three classes that they had to predict, and it was a dataset of about 70,000 or so (it was in the tens of thousands of observation), and they had information about what type of animal... Most of them were cats or dogs, they had information about the coat color, whether the animal was spayed or neutered, how old the animal was etc.

So yeah, that was the dataset from last night. Maybe I'll talk about one other, one of my favorites, and then Nick maybe you wanna share one of your favorites, or something... But one that was a big fan favorite, as well as a contestant favorite, was a dataset about Airbnbs in New York City. They were predicting -- this was a regression task, so they were predicting the Airbnb price. I believe this was a fan-favorite for a few reasons. Really the diversity of the dataset, the data types in the dataset are really great fodder for creativity, which really plays out in things like data visualization, but also feature engineering...

So this dataset had text fields, it had geospatial fields... So there was just a lot of really rich data types in the dataset that our contestants had a lot of fun with. And I believe this was also the challenge where we used RMSLE as our evaluation metric for the first time. So our contestants and folks following along in the audience as well had to write custom evaluation metrics for this challenge, which apparently a lot of folks found really fun and interesting, and led to some great content outside of SLICED as well, like implementing RMSLE in tiny models was a blog post that Julia Silge published, I believe... So that was a great dataset just for its richness and the creativity that it enabled.

**Daniel Whitenack:** Any favorites from your end, Nick, in terms of tasks?

**Nick Wan:** You know, I see it more like a big-picture thing. I feel like all the datasets are -- you know, we're gonna be doing 12 episodes. We did four episodes before. And for me, the consistency that we're hitting on datasets is the global thing for me, in that every show has been pretty close to the same competitive spirit, competitive advantage for everyone... So there's not any particular dataset that I have my personal investment in. My previous line of work was baseball, so the last week we had a "Predict home runs" dataset. So that was like near and dear to my heart...

**Meg Risdal:** That was cool.

**Nick Wan:** ...but for the most part, they're all really fun datasets, and the QA and all the drama at the end in terms of judging - that's where I get my energy from. So no real particular favorite, I would say.

**Break**: \[00:31:30.09\]

**Chris Benson:** So we've been talking about the competition, these contestants, and the way they're doing it, but we haven't talked in-depth about how you're doing your scoring and how the winners -- I know that they have two hours to do it, but you have these amazing data scientists that are competing against each other... I imagine that some of them are everyone solving, or multiple people are solving... So how do you get to that winner in this game? How do you come out on top against these other super-stars?

**Nick Wan:** You know, so many people have different approaches to the modeling... And just like any game, just like any sport, there's like a meta, or whatever you're most effective tactic available. I believe that's what meta stands for. \[laughs\] So whatever the best strategy is usually is what many of the people will do. Right now, we've seen a progression from gradient-boosted models out of the box, to \[unintelligible 00:33:25.10\] models... And then now we're in this Bayesian optimization grid search meta, where the best models tend to be models that have Bayesian parameters on top of your typical grid search parameters.

So right now, in terms of the modeling side, you see a lot of heavy-duty grid searching, which - to be completely honest - I didn't think we'd ever see in SLICED when we did the pilot season. I thought people were just gonna be like "Out-of-the-box models! Try a bunch of them and see what works." But now people are diving really hardcore into model tuning in the show, which is pretty impressive to me.

And then usually, it's like splitting hairs at the end. We've seen everything from arbitrary weights ensembling model predictions that just like gain a slight play advantage in your log loss above someone else... So people will try some risky, maybe not exactly best coding practices, but maybe good for the contest; ways to reduce loss... So on the modeling side there's that. But then there's this whole data visualization judging side of things, and that's where things get really tough for me and Meg...

**Chris Benson:** Can it get subjective, in the sense of like you can have different strategies from different contestants, and then at the end they have different visualizations? That has to be tough.. And when you're doing it live, on the spot, how do you manage that?

**Meg Risdal:** It's very stressful.

**Chris Benson:** I imagine...

**Nick Wan:** It's super-stressful, because we're watching them paint it in front of us. It's very different than just walking into a museum and seeing it there, like \[unintelligible 00:35:16.19\] and seeing them there... Like, the layering and iteration - it really gives you this other appreciation of this data viz. So at the end, you do get pretty differing or even polarizing opinions as to who has better visualization than others... And me and Meg, although maybe like half the time we're kind of in sync with points, there's a lot of the time where me and Meg will differ, and I'll let Meg tell you all about that...

**Chris Benson:** Yeah, how do you guys resolve that? It sounds like you \[unintelligible 00:35:50.08\]

**Meg Risdal:** \[00:35:50.05\] We don't. We just move on. \[laughter\] I think over time we have become more in sync, I wanna say... I don't know; maybe that's just wishful thinking, or something... But yeah, it's 100% subjective, and we have written out in the contesting guidelines that I mentioned earlier, we have given them some sense of things that we look for... But really, I think there's like three approaches overall that I've seen our contestants take to the data visualization portion. The easiest is probably just like volume. Some contestants just go for like "I'm just gonna go for like basic, all over the board kind of like EDA kind of stuff", just looking at different cuts of the data in visualizations, and kind of otherwise keep things very basic.

The second approach I would say is people who really go for the insights, which I think those are the folks that are looking for the data visualization points... So I would say people who stand out in this regard are folks like David Robinson, also one of our contestants, Josh Pohlkamp-Hartt, who competed in yesterday's episode, really do a lot of work to iterate and draw out true insights from the data, which is something that we look for and really appreciate. They spend time customizing their plots to really make them really readable, and following best practices as far as data visualization.

And then there's the third category, which is folks who are driven to look for golden features. And we haven't talked a ton about golden features yet, but golden features are another way our contestants earn points, which is basically a couple of things that Nick and I have buried, so to speak, in the dataset...

**Daniel Whitenack:** Easter Eggs?

**Meg Risdal:** Yeah, they're like Easter Eggs, kind of... Like what's a good example of a golden feature...? Speaking of the Airbnb dataset, one of the golden features was to take some of the meta data about the Airbnb listings and extract the number of bedrooms and bathrooms. So it was to do a little bit of like text processing.

Other times it's to create some kinds of data visualizations. One dataset we had them create a \[unintelligible 00:37:58.14\] dataset. So if they happen through the course of their two hours of live coding to create one of these plots, or engineer their features in a certain way or whatever, they'll earn extra points.

So a lot of folks are really just kind of going for this scattershot approach of "I'm just gonna find some golden features and hope that Nick and Meg \[unintelligible 00:38:22.05\] or want to see me do this or that with the dataset." So it's a little bit like -- you can tell that they're getting creative, and sometimes you see them bend some rules of data visualization where it's like "That's not maybe the most intuitive way to display that data, but you're just kind of trying to fit a square dataset into a round golden feature hole, or something like that, just to earn some points."

So I would say that kind of summarizes the strategies that I think I've seen from our contestants as far as trying to earn points from data visualization... But I like it best when we see folks really looking for insights, because I think that's the purpose of data visualization, the same way that the modeling portion, the purpose is to get the lowest log loss, or whatever the metric is.

**Chris Benson:** I have a little bit of a tongue-in-cheek follow-up, and that is, for the contestants, which one of you are they most worried about, do you think?

**Nick Wan:** Oh, it's Meg? \[laughter\] We know it's Meg.

**Meg Risdal:** Yeah... I think I somehow earned some reputation early on that was reinforced through chat. I wanna say I gave one of our contestants just one point in data visualization. At that point maybe we had like 15 points to allocate across the four contestants; now we allocate 20 points across to contestants... And I gave one of our contestants one point, and I said something like "You did data visualization. You checked a box. You created one plot." So it was kind of like a conciliatory, like "Just one point for doing it, but otherwise it was crap." \[laughter\]

**Chris Benson:** \[00:40:04.20\] What's the guy's name? Simon Cowell, or...?

**Nick Wan:** Yeah.

**Meg Risdal:** Yeah...

**Chris Benson:** A little bit like that maybe? Just a tiny bit?

**Nick Wan:** Meg is the Simon, meg is the Gordon Ramsey of data viz... \[laughter\]

**Meg Risdal:** Yeah... There was another time that was very painful for me to give -- it was Julia Silge, I had to give her two points, and I said "I'm gonna have nightmares about this", to give Julia Silge who's -- I revere her, she's incredible; she creates such beautiful data visualizations, when I worked with her. She's incredible. Her blogs... Such beautiful. And then I ended up, you know, like "I'm evaluating on your performance tonight on SLICED. Two points. I feel terrible..." But yeah. So I'm willing to be a harsh grader, I think, when it comes to data visualization.

**Daniel Whitenack:** So you've mentioned that there's some unique aspects of learning that have come out of SLICED, and I actually like how you tie -- you know, the inspiration of this came out of Chopped... Because even in the past I think, here with Chris on the show, I've sort of more compared data science or AI development in the real world more to cooking than to -- like, people think you're sort of in your room with a chalkboard and you're writing really cool equations on the chalkboard or whatever, but I've always found it much more like cooking, in the sense that "Hey, here are your ingredients and a set of tools that are some good, some maybe not good. Figure out how to bake something that's not terrible."

And the thing about industry is it's always in a given period of time, right? You have a milestone, or... You're likely not going to have 6 or 12 months to refine the first version of your predictive model, or something like that...

**Chris Benson:** Because you have a boss.

**Daniel Whitenack:** Yeah, you have a boss. So I don't know, how has the community engaged with that element of the learning? The ones that are not featured as contestants - have you heard anything from them as they're also participating in this challenge, in that timed way?

**Meg Risdal:** That's a great question... I know anecdotally from Twitter -- Nick and I religiously follow the SLICED hashtag; it's probably embarrassing if we were to admit how much we follow it... But yeah, I certainly see people are learning from the show and kind of going through the motions themselves.

I think though we are seeing the same thing from our contestants too, and I think that is actually significant. It's bigger than I could have guessed or imagined. Just last night Ethan Douglas, one of our contestants, at the start of the season -- you know, we're in the play-offs now; at the start of the season he kind of just described himself as a data analyst, and didn't have a tremendous amount of experience as a professional data scientist writing predictive models... And he shared with me in kind of like the pre-show green room, so to speak, that he has really matured as a data scientist more in the last couple months through SLICED than he has in the last few years as a self-taught coder... And he considers himself now a data scientist.

**Daniel Whitenack:** \[00:43:26.19\] That's so cool.

**Meg Risdal:** So he has really evolved and learned a ton from the show. Our contestants - some of them - are doing a lot of practice in-between episodes, where they're making appearances, and it's obviously a very strong potential embarrassment in front of a worldwide audience watching you live-code. It's a very strong forcing function to learn. So I think for folks out there who are hoping to glean the same thing from SLICED, I think the message is to just like put yourself out there and set some timeboxed goals for yourself and go through -- this apparently is a great set of motions to go through to learn how to do data science end-to-end. It's a motivator.

**Daniel Whitenack:** Yeah. That's awesome. So you have a championship coming up, is that right?

**Meg Risdal:** Yes...

**Daniel Whitenack:** When is the SLICED championship?

**Nick Wan:** That is August 17th.

**Daniel Whitenack:** And how do people find -- I mean, I don't know how they could not find SLICED, on Twitter at least, in my feed, but... Yeah, how do people find SLICED and make sure that they tune into the championship?

**Nick Wan:** You can tune into SLICED on Tuesdays. We have the semifinals next week - that's August 10th - and then we have the championship on August 17th. And that is Twitch.tv/nickwan\_datasci.

**Daniel Whitenack:** Awesome. And we'll put that link in our show notes as well, so make sure and click and watch and go to the previous competitions too in the datasets as well, for sure, like has been mentioned.

And can we look forward to future seasons of SLICED? Will this continue? Can you give us a little insight there?

**Nick Wan:** Yeah. We have some stuff in the works right now, and hopefully we'll be able to share that really soon with everyone... So we're looking forward to not just SLICED Season 2, but different forms of SLICED even...

**Meg Risdal:** SLICED in Space. He's talking about SLICED in Space.

**Nick Wan:** Yeah. \[laughter\]

**Daniel Whitenack:** I assumed that.

**Meg Risdal:** Just wanted to make sure it was clear.

**Chris Benson:** \[unintelligible 00:45:35.02\]

**Nick Wan:** That's right. Maybe you can hook us up with some Lockheed Martin help to get us there.

**Chris Benson:** There you go. Maybe so. \[laughter\]

**Daniel Whitenack:** Yeah.

**Nick Wan:** But yeah, we've got some SLICED news probably in the very near future, and SLICED Season 2... We'll take a breather and then we'll regroup and we'll figure out when we're gonna launch that, sometime next year.

**Meg Risdal:** Yeah. I think needless to say, Nick and I have been really blown away by the reception to SLICED, and we're having a lot of fun. I wanna keep doing SLICED Season 2.

**Daniel Whitenack:** Awesome. Well, I hope you both do, and I know I will tune in, and I'm excited to tune in for the championship... It's really exciting. So thank you both. I appreciate you joining us after a big day yesterday with quarterfinals... And yeah, see you on Twitch.

**Nick Wan:** Thanks y'all.

**Meg Risdal:** Thank you.
