**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist at SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well today, Daniel. How's it going?

**Daniel Whitenack:** It's going great, it's a nice, cool day here, so no complaints. Over the weekend the internet has been crashing at my wife's business, and it's because the access points couldn't handle the number of devices. It wasn't so much of like a bandwidth issue, it was access points... So we just went full-in, and I ordered -- some people might be familiar with Ubiquity or Unify network appliances, and that sort of thing, so I got a new gateway, plus a 48-port switch, plus a network video recorder, and four cameras, and a bunch of cable, and two new access points... It's something ridiculous, you can have like 500 people, or something, on these access points. So I might have gone a little bit overboard, but...

**Chris Benson:** You? No...

**Daniel Whitenack:** \[laughs\] It was really fun. It was a nice, different sort of tech thing, that I'm not qualified to be interacting with at all... But it was fun.

**Chris Benson:** \[03:59\] Yeah, the weather's been really nice; I'm enjoying the fall weather. Things are cooling down. I spent the weekend outside as much as I possibly could doing that... And then we're into this week, and just as an incidental note, this is the GPU Technology Conference Week for NVIDIA, so we've been kind of watching the announcements and some of the talks on that... So lots of cool new things for us to talk about going forward, as people adjust to this year's announcements... But I'll leave it there for a point where we're actually gonna dive into that.

**Daniel Whitenack:** Yeah, definitely. People should check out our episode number 106, where we had Will Ramey on, talking about the GTC Conference and some of the things related to that. So if you're at GTC, that would be a good one to listen to, as well.

**Chris Benson:** There you go. It's all virtual this year though. It's a virtual GTC.

**Daniel Whitenack:** Yeah, it is all virtual. It's good, yeah. But I'm sure GTC people are virtually exchanging some LinkedIn requests to connect back and forth, and of course, we're all used to that at this point, and that's part of our lives. They're doing a lot of cool machine learning and AI stuff at LinkedIn, and I'm really excited today to have Suju Rajan with us, who is senior director of enterprise AI at LinkedIn. Welcome, Suju!

**Suju Rajan:** Hello! Hey Daniel, hey Chris. Thanks for having me here.

**Daniel Whitenack:** Yeah, great to have you. I know I could look on your LinkedIn and look at your whole background, but for the sake of those listening at home, could you give us a sense of your background, how you got interested in AI and machine learning, and eventually ended up where you're at right now?

**Suju Rajan:** Wow. It goes back a very long way, right back to my undergrad, where I had a professor and I was taking a class on image and signal processing with him, and one of my undergrad senior year projects was on using bi-directional associated memories for recognizing digits... And it actually worked very well. But compared to these days, when the scale of the data is huge, it was like this tiny computer in which I had my MATLAB code running out all of these different \[unintelligible 00:06:12.18\] architectures and whatnot.

So that resulted in my getting admitted to UT Austin, under professor Joydeep Ghosh, whose lab was doing data mining. It kind of dates me now, but data mining was what it was...

**Daniel Whitenack:** Do people still label themselves as doing data mining now?

**Suju Rajan:** Is it cool anymore? I don't know... \[laughs\]

**Daniel Whitenack:** I don't know... Maybe it's--

**Chris Benson:** No... Sadly, I was there with you. It's not cool anymore.

**Suju Rajan:** It's not cool.

**Chris Benson:** They make fun of us.

**Daniel Whitenack:** But people still data-mine.

**Suju Rajan:** I don't think it'll ever go away, but let's not call us data miners...

**Daniel Whitenack:** Okay. \[laughs\]

**Chris Benson:** I just want the listeners to know that once upon a time, data mining was in fact cool, and we wanted to do that... But that's a different story.

**Suju Rajan:** Yes, and we had NSF funding. We had that.

**Daniel Whitenack:** Exactly. \[laughter\]

**Suju Rajan:** So at UT Austin - again, it was a very interesting application. It was to analyze satellite images, and it was very hard to get labeled data for these images. So you would have these marshy lands in Botswana and all of those places, and you had to identify what was the sort of vegetation that grows.

**Daniel Whitenack:** Interesting.

**Suju Rajan:** And we've collaborated with the Center for Space Research, and they'd actually fly out people to go walk and record that "Hey, this is the sort of vegetation that is growing" and whatnot.

**Daniel Whitenack:** Talk about annotation \[unintelligible 00:07:36.22\]

**Suju Rajan:** Seriously, right? \[laughter\] No mechanical turkers to fly out to Botswana. But over there, my thesis was on knowledge transfer, because you kind of wanted to learn from seasonal data to some extent, so you can extrapolate to satellite images in the future. Also, from related geographic regions as well... Basically, to bring down the cost of annotation, while maintaining good performance. So that was what I did; I had a very fun time.

\[08:08\] I converted into an internship at Yahoo. Yahoo Labs, Yahoo Research, lots of different names... But it was a fantastic nine years as an individual contributor/applied machine learning scientist, call it what you will, but got to work on a whole bunch of different machine learning applications, and I think it was right at the point where ML was kind of taking off, big data was taking off. MapReduce was starting to come in, but when I started we didn't have it yet. In the beginning it was still all of the single models that you would build to build classifiers, better keyword clustering for sponsored search, targeting for advertisements and whatnot. So I had a lot of fun.

Eventually, it became larger and larger data, and we had to do news clustering within a few hundred milliseconds, and so on and so forth. We had to have all of these models that were tens of twenties milliseconds to be able to figure out if someone's going to convert for an ad, or read a news article, and so on. So I had a lot of fun doing that.

I eventually switched into managing a group that worked on, again, personalization across a whole bunch of Yahoo products. This was on the apps, on video recommendation, news recommendation... I really got a good sense for what would work as a consumer-facing machine learning product; how do we measure interactions... Following which I went to Criteo, where I headed the Criteo AI lab. This was my full deep dive into computational advertising.

Now, if you talk to anyone about machine learning for advertising, they immediately think of CTR prediction... And hey, it's kind of done, it's sort of already there; there's nothing interesting going on in that space... But given the amount of money that is spent on advertising, there is a lot more that's got to do with the causality of the models, because the people who are funding these campaigns want to know that something useful is coming for that money that they are spending... So how do we show that our models actually work was an interesting phenomenon.

And more than anything else, I was working at this company which was sort of like a demand-side platform... So you're kind of listening to all of these publishers who want to put ads on their different pages, and you have all these advertisers that you're synchronizing with... But if you ever had a deep dive into that world, there are so many players; there's this waterfall model that they have. The first party publishes the first dibs. If they cannot do it, then it goes to the exchanges, and so on and so forth. But all of that entails a very, very, very tiny window in which you need to make that bid, and then assemble the ad unit to be shown, and so on and so forth.

So it was a very interesting time, where I learned quite a bit about the real-world constraints. It's not as much about the technical complexity of the model, but hey, can it work in this specific constraints, in terms of the latency in which you have to operate.

Okay, so that was Criteo AI lab... I also got to show that there were lots of cool problems in computational lab that I see, so we established the lab as a pretty strong presence in Europe.

And of late, a little over a year now, I've been at LinkedIn, where I head what we call Enterprise AI. So think of all the business-facing applications LinkedIn has, one of which is talent solutions. This is where recruiters come to LinkedIn to look for candidates, and we also have all of our members who are trying to find the right jobs... So how do we make sure that this marketplace works well. That's one aspect of it. Of course, there's the advertising aspect of it, the sales navigating ocean where folks who want to pitch their cool new products and services to LinkedIn members - how do we make sure that it's relevant and there is value on both sides? So these are some of the NAI for all of these different business-facing applications is what I'm working on right now.

**Daniel Whitenack:** \[12:08\] Super-interesting. So you've definitely always been at the forefront of these different fields, as they really have so much momentum. Does it seem like the sort of current hype and influx of people into machine learning and AI - does it seem like faster-paced, or more momentum than in the past to you? Or does it just seem like a sort of new area that people are putting focus on and switching to from other things?

**Suju Rajan:** For better or worse, we began a cool area to be in... \[laughter\]

**Chris Benson:** That's funny...

**Suju Rajan:** A lot of media coverage on what AI can unlock...

**Daniel Whitenack:** Right.

**Suju Rajan:** But it is true - maybe ten years ago it was behind the scenes and nobody really talked about it. "Hey, why do you see the results that you do? Why are you being shown the ads that you have?" It was not really a part of the discourse, but I think all of these interesting innovations in terms of -- I wanna call it the PR events that some of the big companies sort of set up... They helped the field get the recognition that it perhaps deserves to have, given how integrated some of these models are into our daily lives. You know, the fact that whether I get a home loan or not perhaps has a machine learning model behind it; it's important for folks to be aware of it.

I would say it's a combination of both. It feels like a new space because there is a lot more recognition of the fact that it is very integrated. Data-driven decisions and AI models are never going to go away from now on, so how do you wanna think about this field from a societal standpoint I think deserves conversation, and that's how we make sure we don't make the wrong choices.

At the same time, open sourcing has become a big deal, with TensorFlow and PyTorch and all of these larger companies "democratizing" it, as they call it... Like, "Hey, get onto AWS and you have SageMaker and the whole lot of it. Just give us your data." And the fact that it is becoming a lot more accessible means that a lot more folks are also interested, without having to -- you know, in the past it used to be you had to go to this lab, you had to get a Ph.D, you had to publish papers before you can even think about machine learning. The barrier for entry is a lot lower these days.

But given the ubiquity of the application, I think it's important for everyone to understand what AI can do, and the implications that it has. So - for the better, but I wish we didn't have as much media attention. \[laughter\]

**Chris Benson:** You sort of answered the thing I was about to ask you, and that is - since you did your Ph.D. and you did one in machine learning... And just to put things in context - it was unusual, I would argue, for lots of people to have machine learning Ph.D's at the point where you did in 2006, and you were done with that program, and stuff... And obviously, you've seen this change... Did you ever have any inkling where this might go in terms of the evolution? You've talked a little bit about the change over time, but just your perception of machine learning as you came out of your program, versus your perception of it now - what really strikes you? What were the big things that when you do look back, you're kind of like going "Wow. I never saw that coming"? Or "I told you so..."

**Suju Rajan:** \[laughs\] I told you so... So the fact that a lot of problems -- I don't think it's fully there yet. I think the biggest thing folks somehow forget is for any machine learning or AI to work on - at least this is my personal take - you have to have enough data to make it be meaningful. Otherwise, it's handcrafted rules, you do some tiny things here and there, of course you could overfit like heck the NN. But I think what changed - I don't know if it is necessarily a change; the rise of all of these companies like Facebook and Amazon, the Microsofts of the world, the Googles and whatnot - that managed to get as much user data, and hence were required to deploy machine learning models. Did I predict the rise of these platforms as much, and that they would aggregate these massive amounts of user engagement that it would be required? Perhaps not. But Google was sort of taking off at that point when I was doing my Ph.D. as well, and Yahoo was one of these forefront companies...

\[16:33\] But within Yahoo, for instance, the fact that everything from news recommendation, to figuring out what tags to put on your email, to what ads to show, was driven by a machine learning model. So that aspect was always the case... But that there would be these few centers where it's just gonna explode, and the democratization aspect of it, that it is also good for these companies to open source their -- not necessarily what is running in production; I know for a fact it cannot be the same the same models, because you're struggling to adopt some of these frameworks when you're outside of Google and whatnot... But in that sense, opening that up I think was a change that I didn't necessarily see coming.

You would think that this would be a secret sauce, this is something that we kind of want to keep internally in our company, because this is the thing, but that there is so much learning and sharing of what machine learning is... As a field, the accessibility of it and the opening up of it to more and more people - that I didn't see coming.

**Chris Benson:** Just to make a point that you just said there... If you put that in context, as you were describing that, I was thinking back - about the time roughly that you were getting out of your Ph.D. program, we were doing MySpace. And if you think about the evolution of social media from the days of MySpace as the first major platform that did not survive in a meaningful way, to where we are today, with LinkedIn and Twitter and Facebook, it's quite a change. And in terms of the data aggregation, as you said, it's a completely different world.

**Suju Rajan:** And even how we shop, how we get information, how we look at videos... This much acceleration in how humanity lives, packed into such a short period of time - sometimes I think I'm lucky to be a part of this, and you're always excited to see what it looks like. But on the other side, I guess with anything that gets accelerated, then comes all the challenges. Are we thinking about this right? It's good that we've started asking these questions, but there are no clear answers. That's why we are here, right? Our answers are also interesting to think and ponder and make sure we are doing the right things on.

**Break:** \[18:43\]

**Daniel Whitenack:** Suju, we've talked a lot about the AI industry in general, interesting shifts that have happened, and all of that... And I'm sure some of those are even visible within LinkedIn. I was thinking while we were talking how many people have switched their title from "Data mining person" or "Data scientist" or "Data analyst" to "AI engineer" or AI whatever... So that's super-interesting.

\[20:15\] But I think more to the things that you're working on personally, I'd love to hear -- particularly, you brought up some ideas around recruiting, and that sort of thing... Maybe before we jump into the specific things within LinkedIn, could you give us a sense of how machine learning and AI are starting to influence recruiting in a more meaningful way?

**Suju Rajan:** Sure. Historically, how would recruiters hire - it came down to your network; of course, it was a physical network. You probably had your Rolodex, you'd go through contacts to say "I'm hiring for these candidates" and so on and so forth. Or you'd engage in some external job sites, and whatnot. But the burden then -- I think this is under-appreciated, to some extent... There are a lot of noisy applicants that might come through, and you do not want to, as a recruiter, send noisy applicants up to a hiring manager. That's not going to set you up for success. It also limits the number of candidates that you can give your bandwidth to. You can't talk to 100 people in two weeks in any meaningful way to close them.

So for sure, there are more and more jobs that are not at this current point in our existence, but in general, as more and more jobs--

**Daniel Whitenack:** I would say we're living in an anomaly... Yeah, that's probably true. \[laughter\]

**Suju Rajan:** Taking that (hopefully) outlier out of the picture, how do we help our recruiters have to spend their time on (let's say) those candidates that are necessarily worth spending their time on? Because it's not like just because you call up someone, they're going to immediately drop their job and move over. You still need to work on the storytelling, as our recruiters call it, to convince them that this company is worth it.

So if they called in some form or fashion, make the hiring offer members be that much more efficient - I think that is the change that we are trying to drive as well. There is also a lot - these days for sure - and LinkedIn is also trying out some of these interesting elements, where maybe it is not all about going on-site, and proving over and over again, going through the same code exercises over and over again to show that "Hey, I can do this job." So what if you could have your credentials, in some sense, assessed by a platform? So we have all of these skill assessments that you can take, which I'm sure you've seen in some of these other places, like \[unintelligible 00:22:48.29\] But think of it as your credentials that sort of travel with you. If you could then not have to prove yourself on these same elements over and over again, but what really matters, what is a differentiation for this recruitment company, or this particular job, that would make you that much of an ideal fit.

So it's a lot more about, given the enormous number of candidates that have their profiles online, how can we make it that much faster for the recruiters to hone down that smaller set, and then spend their time in converting them.

The same is true on the seeker side as well - there are lots of non-traditional roles now, there are lots of options to switch careers. You are not a career employee anymore. People take these very interesting paths. So how do we sort of help our seekers understand, "Here are all these career trajectories one can have", what are the skills that you require. Say if I wanted to switch to becoming a PM instead of being in the AI field, for design or some such thing. So what would that path look like?

\[23:56\] Helping our members also be aware of "Here are the opportunities, here are the skills that are required", and in some ways even tying it up with LinkedIn learning, to say "Here are the courses that you could take if you wanted to switch gears." I think that is where we want to think about recruitment moving forward.

Technology is interesting, it keeps changing... So can we automate the re-skilling and the up-leveling of our members, and continue to show to them all the opportunities that come with a new workforce, new marketplace? I think that's where it's headed.

It's also gonna be a lot more data-driven. A lot of our hiring managers and whatnot want to understand the landscape, like "Hey, I'm trying to hire this particular profile in Lafayette. So what is my probability of getting someone with these skillsets? Do I need to broaden my search? What is the typical salary band that is being paid in some of these other places that I'll have to compete with? And maybe even this world, after we all come out of this Covid situation, what does the future of remote working look like? What are the payscales that we will all have to think about at that point?

So it's also a lot more of trying to understand from the broader trends that are happening in the industry... So it's not as niche as it used to be. These tools are being made available in a data-driven way. So yeah, hopefully that answered some of it.

**Daniel Whitenack:** It's really interesting to think about, like you were saying, the path that someone takes to a certain position, and the changes that go along with that... Because there are so many unique trajectories, particularly into machine learning and AI, into those positions. You've got people coming from science, people coming from engineering, people coming from even other places - philosophy, liberal arts, economics, business... So there are so many unique trajectories, and I often get asked when I'm doing a workshop, or just talking to someone, doing mentoring or something like that, what are the steps I need to take between where I'm at now and this position that I want or have in my mind - what's the pathway there?

I of course have my own biased opinion about that, but it is really interesting to think about mapping out the trajectories and helping a person understand from where I'm at now to where I want to be, how do people typically get there, where do they jump off from and to? That's super-interesting to me. And it also makes me think sort of like a graph structure coming up. I think somewhere -- and I heard or I read about LinkedIn's knowledge graph, and I was looking through a couple of the links in one of your blog posts with the papers, and I saw some graphs... So yeah, that seems like a very interesting relationship, where you've got people who work for companies, who are in places, who are in industries, and there's of course time in there, and all sorts of things... It seems like there's definitely even a unique data structure that's going on with the LinkedIn data. Is that correct?

**Suju Rajan:** Yeah. I think LinkedIn has been very open about calling it the economic graph. So how do we see the whole job space evolving? And to a point - yes, it starts with industries and companies, what are the skills that our members are requiring, what are the sorts of educational qualifications people are getting, what are the titles that we have? And sort of standardizing all of this and normalizing it, if I may, into an internal representation, so that I can look at Chris' trajectory and then map it down to a --

**Chris Benson:** Oh, gosh. Oh, don't do that to me.

**Suju Rajan:** \[laughs\] Or figure out how can we learn broadly that hey, this is the movement en masse, in terms of it's no longer things that used to be in MATLAB anymore, it's more of these are the sorts of tools that are becoming that much more popular. And being able to make sense of all of this data. As you can imagine, not everybody writes the same things in their job postings or on their profiles, so how do we - if I may project it down, even though that's not exactly what we're doing, but into a common vocabulary, that we can try products and machine learning systems across LinkedIn, is what we do.

\[28:18\] And besides internal LinkedIn, the economic graph is also used in lots of different forums to give insights into what are the fields that are hiring, here are the top things that candidates or members are interested in, here is how skills are changing across the world, and so on and so forth. And sometimes you also get very interesting insights in terms of behavior, and how women behave, how men behave when they approach a job, and whatnot. So it unlocks a whole bunch of value, and I think that is the most remarkable asset that we have - all the members sharing their career journeys. And of course, from the marketplace of hirers, how is the job landscape changing, how are the skill demands changing, and so on and so forth.

**Chris Benson:** That's super-cool. To continue building on what you're doing, because I love where this conversation is going, as you've laid out how you're looking at the problems that you're trying to solve going forward... If you start thinking about where AI technology is today, and these types of problems, where are you matching up various AI architectures, or even approach in general, to solving problems that LinkedIn and LinkedIn's customers care about? Where does AI fit into that large set of tasks that you guys are addressing?

**Suju Rajan:** Well, I wanna say in almost all product surfaces that we have, just given the scale of the data. We're talking 700 million plus members; any given day, 14 million to 20 million job postings... Even in my small domain - there are things like hey, do we show job opportunities to people; how do we rank things on the feed, given the number of users who up and so on and so forth. But maybe just talking about the talent space itself.

Now, making sense of these member trajectories, as an example - and again, while one view could have been let's just parse and code all of these features and try to build some sort of a simple model which says "Hey, am I gonna apply to this job posting?", and of course, that is restrictive - then how can we not have to do with these sorts of standardized categorical features? If I want to look at the entirety of the text that the job posting has, can we leverage some of these recent fine-tuned versions of \[unintelligible 00:30:29.18\] to give us some of these semantic meanings? Because not all job postings are created exactly the same, even though they might be talking about exactly the same jobs.

So putting all of these into play, basically, to -- at this point we are leveraging a more deeper understanding of member career trajectories, plus whatever is available on the job posting sites, to be able to do more than "Am I just going to click on that particular job posting?" It's even more of "Am I going to apply? If a recruiter is going to reach out to me, as an example, and I'm going to accept that recruiter's connection", to get to that notion of understanding what the job posting is really about.

We've taken a little step further in our recruiter-facing projects, where as a recruiter you perhaps don't need to give very explicit signals in terms of "Here are all these boolean operations I want to do on the member places to get me that narrow set." Just identify a few of the candidates that you're interested in, and behind the scenes we are able to then say "Hey, this is the role that the recruiter is looking for, given their interests they have shown, so let's organically start pushing some of these matches (which we call recommended matches), down to our recruiters." So that's something that we're working on.

Underlying all of these I'm not gonna say are incredibly complex models; at some people we could even set this up as an oral problem. Like say "Hey, Suju's benefit of whatever the thing that she wants to optimize in her life is maximize her career potential, or economic potential", or some title potential, or whatnot. Now, given that it's my long-term strategic play, what are the \[unintelligible 00:32:16.21\] of short-term actions that I need to take? To be able to almost be a coach to a member's career trajectory is my personal dream of where I want to take this thing.

\[32:28\] But the interesting part is LinkedIn is just one view of it, in the sense that I can say "Hey, Suju's applied to this particular job post", \[unintelligible 00:32:38.13\] and we get very delayed feedback... So maybe after four months if I'm an active LinkedIn user, I change my profile, and then it's like "Hey, this actually worked", and now we are able to get these sorts of positive signals.

So coming up with all of these proxies, and trying to make RAI models be smart enough where at least we are efficient from a matching process is where the current focus is on. But is there scope to do 20 times more? Definitely yes, and this is where we want to take the thing.

**Chris Benson:** So as you look at all this possibility, and all the things that you can apply different AI architectures to, it made me wonder as you were talking "How much crossover is there?" I realize you guys are owned fully by Microsoft, and yet LinkedIn remains its own brand... How much crossover is there between the AI teams at LinkedIn as a subset of Microsoft, and the various Microsoft AI teams as a whole? And just to ask - you probably don't have anything you can announce yet, but we're all interested in the fact that GPT-3 just came under license from OpenAI. Do you foresee some interesting use cases going forward with GPT-3 and LinkedIn?

**Suju Rajan:** I'm not gonna comment on the larger \[unintelligible 00:33:53.06\]

**Chris Benson:** That's why I was giving you the out right there, so I recognize that...

**Suju Rajan:** Thank you. \[laughs\]

**Chris Benson:** But I've just gotta say, I can certainly think of some interesting things to do there.

**Suju Rajan:** Exactly. I think the biggest benefit of all of these models, especially in terms of how we want to represent the text that you must generate, or even images, or even how we want to think about knowledge overall, in some senses... But the cost of doing that, of course, is non-trivial. So in these cases, it can be go this fine-tuned approach sort of route, where we start with these pretrained models and get it into the LinkedIn-specific context, and then see "Hey, end-to-end, if you were to optimize for an outcome of hiring, are we able to see more benefits?" This is an active piece of work that is constantly ongoing in LinkedIn... So trying to make sense of these GloVe embeddings, at some point \[unintelligible 00:34:49.16\] And of course, as this space evolves, the heavylifting is done maybe once or twice, and then it's more about adapting these architectures to your internal use cases and seeing what the benefit is. I think it makes a ton of sense.

And it seems also wasteful in some senses for all of us to be doing these massive trainings over and over again, but piggybacking on some of these methodologies to see what is the value that it unlocks, for sure.

I think the dream case is for us to show up at LinkedIn and say "Hey, I want to get to be X in the next two years. Help me!" Now, can we make use of everything that we understand about members' journeys, about the skills that they have acquired...? You know, in some interesting world, if companies for instance are willing to participate, like "I want to up-level my talent to this kind of a place", like "I want to up-skill all of these folks" - now, how do we have these personalized recommendations for folks in the career trajectory space? Can we learn globally and say "Hey, this is what a career transformation looks for someone in the automobile industry"? I think it's definitely doable, in some ways...

**Chris Benson:** I need some help here, you know...?

**Suju Rajan:** Okay... \[laughs\]

**Break:** \[36:21\]

**Daniel Whitenack:** I would love to get into a few of the practicalities of some of this work at LinkedIn. I've read a bit through some of the information about the recruiter systems and all of that... It seems like there's maybe a couple of different areas that have been drawn out in what I've read. One of those is kind of the search side of things, and representing candidates, and then the second side is more of a personalization side of things. I was wondering if you could touch on those two, and if the representation side of things -- like, are you developing embeddings of candidates within the graph of LinkedIn, and that's what you're leveraging in part to maybe pre-compute that and get search done? How does that tie in?

**Suju Rajan:** Building off of the standardized version of us looking at the data that we have... Daniel, exactly to your point, we do have a notion of what a member embedding needs to look like. The data for LinkedIn comes from LinkedIn profiles. So in this sense, understanding that "Hey, this particular member has a -- in that space, it looks like people who are in this technical industry, in this location, and here are the sorts of jobs that they apply to", as much as we can represent them in that member embedding space.

Likewise, we have things that are on the job and they're inside as well; someone asking for a data miner, maybe because they were under a rock, is also still asking for an AI scientist, so how can we bring that job embeddings view into it.

And in some senses, being able to scale this. Because if you think about where -- there was an earlier question of "What are the different services in which we have AI?" There is the search aspect of it, and we also organically recommend jobs to people - something that we call instant jobs, where you want to be the first to apply... So members actually sign up for alerts, to say "Hey, the moment you see a job come into our system, then send me an alert right away." So we need this to be high, high, high precision, as an example.

Then on the flipside, on the recruiter search as an example, it's all about matching members to get jobs. So we're trying to build this notion of what we call these two-tower embeddings, which represent the member side and the job side, and bring that together along with more near-line and real-time features, to sort of then personalize it to what that particular member is also looking for, to do ad matching.

Of course, if it's on the search angle, then you also have the query context that comes into play. On the recommendation side it's a lot more just based off of your activity signals, and so on and so forth. We try to infer intent, to be able to make those recommendations.

But to your point - yes, on the underlying surface we do have these embeddings, and we are going to be writing a blog post pretty soon about this particular data layer in our talent solution systems.

**Daniel Whitenack:** Awesome. Thank you for explaining that. And for listeners that are maybe new in this space as well, when we're talking about embeddings, we're talking about -- you know, you could think about representing a candidate or a member in this case as a series of numbers, you could encode them, and you could define how those numbers should be yourself. You could encode that in a certain way.

\[40:02\] But you could also say "Well, I may not be able to pick the right encoding for this candidate for my task. I'll let my model learn how to encode or how to represent this certain entity or this set of data" - in this case a set of data about a candidate... And that learned representation or learned set of numbers that represents in this case a job or a candidate we'd call an embedding... So thank you for mentioning that.

**Chris Benson:** I'm kind of curious, as we've been talking about this, and within the context of LinkedIn is very good - if you look at its long evolution, from the very beginnings, when it was basically just an online resume, and over the years you've developed that into really finding the person in that resume, and showing those different aspects... Do you have any thoughts on -- and I'm not pushing you in an exact direction, but any thoughts on how you find that personality, those soft skills, beyond just "Good at presentations" kind of thing, that are not strictly like a hard skill, like doing Python? ...but finding the person and trying to fit that personality type into different types of cultures and jobs?

I would imagine that that's pretty complicated, and maybe any thoughts on how AI might be able to be used or anything, that y'all might be able to share on that?

**Suju Rajan:** So LinkedIn per se tries to -- what we do at LinkedIn tries to learn from career transitions, so that's something that we have as a signal in our recommender models as recently, to say "Hey, this is the career trajectory that this person has. Went from here, to here, to here." In some senses, you could start thinking of how long did it take for this person to get there, to say "Hey, this person is like an outlier/superstar, or this is an average career path." That could be something that recruiters may be interested in.

But you're asking an excellent question in terms of "Hey, how can we factor in more latent aspects of what a member brings to a table?", not just "Hey, look at my Python proficiency" - cool, but this person is really motivated executor of tasks, kind of a thing... Not yet. This is not something that we are able to leverage right now, but again, what we are trying to do in some of our recruiter-facing projects - we call this our Recruiter Systems Connect - this gives LinkedIn an inside view into how the candidate is progressing through their different interview funnels, as an example. And now maybe from understanding -- and at some point, if all the interviews are moving to video interviews, we already have a notion of what we called video introduction... And this - to your question also - makes use of Microsoft technology to try to figure out "Hey, how is the--" today is with the intention of giving feedback to the candidate, to say "Hey, speak with more confidence. You had all these uhms and ahs" and so on and so forth. So to enable the candidate to prepare further.

Now, with the permission of the candidate, and of course the company which is gathering all of this data, can we at some point then learn from all of these behavior signals? But I think it has to be more than just your resume at that point. You need to have all of these other data points flowing into the system... So we are making smaller steps, but still within the world of what is being collected for the purposes of recruiting. Or I can visualize a case for someone wanting to say -- in some very ambitious world, if he could then say "Hey, how is this person interfacing within the company?" How quickly are you able to start collaborating with your teammates? How quickly are you able to be up and running and being able to get something shipped to production, and so on and so forth? Does this data exist? Of course, it does exist. Now, do we think we'll be able to drive the right decisions? Do we think we'll be able to build the right models to tease apart the latent signals?

\[44:04\] Again, the idea here should be to want to do something to propel everybody forward, at the expense of nobody else, in some ways. Would we do it well? I need to think about this a little bit more. I want to say we want to get there, and more so more than anything else there is inefficiency in the interview process. Like "Hey, I've spent 20 years working. How are you going to judge whether I'm going to be good for my job?" Of course, there is some skill and art to it, but it's also exhausting that you have to keep taking and talking about these credentials, establishing this credibility over and over again, every time you want to switch to something else.

So how can we package that into something more than assessments, to say "Hey, here is this candidate" - and might I call it a credit score of sorts, if I may, that you can sort of carry along with you. We are ways from there, but I think the building blocks are being put in place, so we take \[unintelligible 00:45:01.21\] Sorry, it was a little bit of fiction and a little bit of reality... \[laughter\]

**Daniel Whitenack:** I like it.

**Chris Benson:** No, it's good. I appreciate the answer there. As I was asking it, I was imagining if anybody was thinking about this, it was gonna be you guys. I imagine you guys are gonna be leading on this, given your position... So thank you for tackling a tough question for me there.

**Daniel Whitenack:** And I have kind of a selfish question... I think from your perspective it seems like you've spent a lot of time transitioning a lot of bleeding edge AI technology into the enterprise, into practical usage, into production usage. Even at LinkedIn, I'm looking at some of these blog posts about the search and recommendation and recruiter product, and there's links to research papers... And to some degree, you're tasked with bringing that bleeding edge research stuff into actual practical usage... And I'm just curious about your perspective, or any recommendations that you could provide to other people out there who are wanting to use some of these maybe new AI technologies or new models that are published, in terms of like the tech debt that comes with them, and the things that you need to think about as you're transitioning some of this technology into an actual practical use case.

**Suju Rajan:** Thank you for asking this question. I think a lot of us get fascinated by the technological advances in AI; the fact that we can ask questions out of an AI agent and express then a meaningful and maybe almost human-like response. When it comes to actually putting these systems into production, I want to say that AI in some sense is an engineering discipline... But I think we are very much far away, and it's for a reason. It's not because we are unwilling to do so. It's just that the inputs are not as deterministic as some of these other systems. So whenever you have a change in your data distribution or something happens, then how do you put in quote the right unit and regression test to make sure that you're going to be able to catch some of these errors? How do you keep track of the number of people?

I can easily tell you the number of instances where a team deploys a feature, and then there are 20 other teams unbeknownst to you who are starting to use this feature... And the next time you make the change, all hell breaks loose. So how do you have that discipline...? And of course, many simple things that we possibly haven't spent enough time on in terms of feature lineage, when something goes haywire, are we able to quickly monitor, alert, track, roll back to a previous version system? How do we recover from that particular point of view? Do we keep going back to \[unintelligible 00:47:58.06\] Because it's very interesting as a machine learning researcher to keep on adding "Here's some set of new features, here's some set of new features", but at some point you want to sort of take a step back and say "Hey, holistically, how much have I improved this particular platform? Have some of the changes \[unintelligible 00:48:17.29\] some of the other changes that we would have pushed out otherwise?"

\[48:23\] And even within the field of metrics, there is one layer of things that maybe we are pushing in the right direction... But then when you take a step back and say "Hey, but what about long-term engagement? Is this something that they have been able to holistically measure?"

So the more the field progresses, I wish a lot of us were a lot more diligent and cognizant of what it takes to maintain a machine learning system in production, especially if you're supporting a large organization, where there are lots of customers and outputs of your model could be used in many interesting ways... So how do you have the right contracts in place?

At least in some machine learning teams the idea is "Hey, here is this nice thing that the PM comes up with", and you quickly work on it, things work well, everyone celebrates, and then you move on to the next thing. But now who maintains, understands, or even figures out "Hey, has this model drifted with time?" And as much as I want to say AI has been democratized, people who are not familiar with what to expect out of this system don't even know what a rollback for this model should look like, or how do you even diagnose the state.

So there's been some good work from folks like in TensorFlow, with TensorFlow \[unintelligible 00:49:34.10\] and these sorts of paradigms where we talk about AI metadata which we need to be very religious about, which we need to start having health assurance, and model monitoring, and these sorts of things on... But as a discipline, as much as we want to train folks in terms of all the latest and greatest in tech, I wish we also had courses which talk about machine learning model maintenance and tech debt in schools as well... Because as this is going to just grow larger, it's going to become that much more important.

**Daniel Whitenack:** Yeah, and it sounds like maybe at least at this point -- hopefully that will change in the future, I certainly hope so, but it sounds like maybe in the interim it's up to us who are maybe leaders on teams, or leading certain projects, to really insist and ask hard questions around this, and anticipate into the future what we might need to monitor, and where sources of bias are, and what happens over time when we need to trace back what happened with a certain model...

Do you have any other practical tips for maybe team leaders who are trying to push their team in this direction, and are maybe struggling?

**Suju Rajan:** Well, I want to maybe plug a paper... Machine Learning Debt is the paper that came out a few years ago out of Google... But more recently, they also released a framework of machine learning test scores, which basically is a very simple thing which looks at the minimum score you could have gotten along either your monitoring feature help, about your modern monitoring, and so on and so forth... Which sort of gives you a simple rubric to figure out how good is your system. Is it a house of cards which is going to collapse the first time something goes on? Or is it a robust thing that can be deployed into production?

\[51:22\] I think even adopting such a framework -- and most of these things perhaps are not even automated, but if you have been in the weeds and you understand how your model has been set up, you should be able to come up with this simple checklist to say "Yes, I think we are going to be robust to something catastrophic happening", because it will. There is no reason to think that anyone's gonna be an exception.

That would be a first start to even figuring out with respect to, if I may, the health of something that is being deployed in production. Now, this is 101, the basics of what you need to keep in mind... But Daniel, you also mentioned something even more fantastic, which is about -- there is like model biases and data biases in the data, and then there's all the choices that our models make... Because we were going after a particular product objective. Now, what is the longer-term impact that this may have overall in our user base? Is it going to be unfair to some segments of our population? That's an even bigger ethical fairness question that I think is becoming more and more pertinent these days...

But it's interesting, on one hand we're talking about pure health and just monitoring of the system, and on the other hand we are in the crossroads where we are even having to think about societal impacts, which I think speaks to the rocket ship speed at which this field has grown...

**Daniel Whitenack:** Yeah, yeah.

**Suju Rajan:** ...but something for everyone getting into AI to be aware of.

**Daniel Whitenack:** Yeah. I think that's a really good perspective, as we kind of come here to a close. I really appreciate you bringing us in on a couple of those practical things, because obviously you've developed a lot of great systems that have made an impact over time, and it's great to get that perspective. We certainly appreciate you joining us on the podcast and taking time out of your busy schedule to join us. Of course, all you people out there on LinkedIn right now, make sure and post this episode when it's coming live on LinkedIn, and get that in the LinkedIn knowledge graph for all time...

Thank you so much, Suju, for joining us. It's been a real pleasure, and I hope we do get to meet at some type of networking even in the future in the real world. Thank you so much.

**Suju Rajan:** Of course. Thank you, Chris and Daniel, for having me. It was very nice talking about the future and the present of \[unintelligible 00:53:45.05\] Thank you.
