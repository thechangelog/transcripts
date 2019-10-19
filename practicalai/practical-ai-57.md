**Daniel Whitenack:** Welcome to Practical AI. This is Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined by my co-host, Chris Benson, principal AI strategist at Lockheed Martin. How are you doing, Chris? I hear you just got off of a plane.

**Chris Benson:** Yeah, I just arrived in London via Heathrow, and I just got into the hotel room in time to record here, so... Looking forward to it. I'm in London because tomorrow I will be on a panel representing Lockheed Martin at the Royal Academy of Engineering for a panel discussion on artificial intelligence, of all things.

**Daniel Whitenack:** Oh wow, that sounds intense. I don't know if I've ever been involved in any Royal anything, so...

**Chris Benson:** It's scary. Put "Royal" in front of anything and it's either big, or scary, or both.

**Daniel Whitenack:** Right, exactly. I don't know if there'll be anybody in robes or wigs or anything in the audience... That's kind of what I have pictured.

**Chris Benson:** I'm hoping they'll let me do that. We can do kind of like the old movies...

**Daniel Whitenack:** \[laughs\] That'd be awesome.

**Chris Benson:** We'll all be up on the panel, talking about AI, with our wigs on, and stuff.

**Daniel Whitenack:** Exactly.

**Chris Benson:** That'd be perfect.

**Daniel Whitenack:** Yeah. Well, on a slightly different note, there's another event coming up relatively soon, which is a conference called All Things Open, which I've been to once, I spoke there. It was a great experience. A conference focused on a lot of different things other than machine learning and AI, but centered around the open source world... And one of the people talking there this year is Samuel Taylor, who is a data scientist at Indeed. He's talking about using open source tools for machine learning.

We definitely thought that that was practical for those of us trying to do practical AI, so we've got Samuel Taylor with us this week to talk about it. Welcome, Samuel.

**Samuel Taylor:** Thank you all so much, I'm really excited to be here, and really interested to be part of this project that you all have to make AI more practical and more easy to use for people.

**Daniel Whitenack:** Thanks. Yeah, it definitely seemed like your talk was in that vein, and we'll get to the subject of the talk, but maybe to start out, could you just give us a little bit of information about your background and how you got into data science and machine learning?

**Samuel Taylor:** \[00:04:03.07\] Of course. From some accounts, I've just always liked computers. There's a picture of me when I'm seven or years old, sitting at the family computer, and I have my hand on the mouse, playing some point-and-click adventure game... And I guess I just never grew out of that. I just always liked computers, and had really great parents who encouraged me to pursue math and programming, and I was able to learn a lot of that and practice a lot of that leading up into high school.

At some point in high school I saw a documentary on PBS, I think it was a Nova documentary, and they were talking about machine learning, I guess... Because they had an example where they showed a computer, a bunch of images of English letters, and then it could tell with a new picture if it was an A or a B or a C, or whatever... And that just blew my mind.

**Daniel Whitenack:** You've gotta love those Nova documentaries... It's good stuff.

**Samuel Taylor:** Oh yeah, totally. And like I said, it just blew my mind. Then when I got into college and started studying computer science, I realized "I can learn how to do that. That's really cool." I took some classes in that, and then after I graduated, I started doing more software engineering stuff and data engineering, and then at my current company, Indeed, we have this internal transfer program where I was able to transfer to a data scientist role at the company, which has been really good... So I guess that's how I ended up in data science.

**Chris Benson:** Congratulations.

**Samuel Taylor:** Thanks!

**Daniel Whitenack:** Yeah, I'm always intrigued by people's journeys and how it influences how they think about data science problems. Do you feel like your initial emphasis on software engineering and building up that side of your expertise - how do you think that's influenced your work in data science?

**Samuel Taylor:** That's a wonderful question. I think it plays a huge part in the way that I think about these systems, because I recognize that I am never going to be as good at applied statistics as someone with an astrophysics Ph.D. I just know that that's not my strength. So what I try to do is then understand these algorithms like I would any other algorithm, and try to treat them like any kind of other engineering system, and treat them with the same kind of rigor that I would in that way.

The other way it's been helpful is that it sets me up well to try to bridge the gap between some of these people who are brilliant statisticians and really understand data deeply. Sometimes, especially if they're coming straight out of school, they might not have as much experience in the software engineering side of things... So it can create this really useful knowledge share where I'm able to help some people with scaling up their software engineering, and they're able to help me get better at the stats side of things and introduce me to stuff I'm not familiar with... So I think it ends up just being really good to have that diversity of backgrounds. I think it's been really good for me.

**Chris Benson:** Now that you've told us a little bit about your background, and the fact that you're now at Indeed, to give context to our conversation, could you tell us a bit more about Indeed? I know obviously Daniel and I are very familiar with it, but there might be some people out there who haven't used it... Let them know what it is.

**Samuel Taylor:** Absolutely. Indeed is the world's number one job site, and the main thing that we emphasize -- I think I've seen this on at least half of the presentations that people give, even internally... Our mission is to help people get jobs. That's what we try to do every day. We have orange chairs in our conference rooms to remind us that the job seeker is always the important thing, and we need to try to do things to help them.

So at its core, Indeed has sort of a search product that is well-liked, where people will go and you can search like "Data scientist jobs in Austin, Texas", and it'll have a list of jobs, and there's all sorts of filtering that you can apply to find the right job for you.

**Chris Benson:** I'm also wondering here - how long has Indeed been investing in data science and machine learning, and what's their primary focus in that area?

**Samuel Taylor:** Definitely. As with any other large internet company, there's a mountain of data that you get just running an internet company, and obviously, if you can leverage that well, then you can do a lot of great stuff to help people get jobs better. I wasn't involved at the creation of the team, so I can't really speak too much to the early parts, the early days, but it's been at least several years of investing in data science at our company.

\[00:08:17.15\] Some relevant use cases - for instance, salary estimation is one that comes up fairly often, and for job seekers it's nice to be able to have some expectation of what the salary will be for a given job. Another example that ends up being useful in a variety of ways is training models that can determine how good of a fit a certain job is for a certain job seeker. That can be leveraged in a few different ways, but with the data that we have, we're able to come up with these useful models that we can apply in several ways, which has been really nice. By empirically testing, we've found that has really helped us be able to help people get jobs better.

**Daniel Whitenack:** At Indeed, is data science scattered throughout the teams that are working at Indeed, or is there one data science group that consults on different projects? I know that those are two common patterns that I've seen, and probably each have their advantages or disadvantages. At somewhere like Indeed, that I'm sure has a lot of different projects going on, how does that work?

**Samuel Taylor:** Of course. At Indeed we try to practice something that we call full stack data science, where one individual is in charge of everything, from coming up with an idea of some model that we could build, through to gathering the data up about it, and generating labels for it in some useful way, training the model, doing all the hyperparameter tuning, and then finally getting it deployed to production, writing that production code, monitoring it after the fact, testing it... That's the model that we try to practice, and we find a lot of benefit in that. That enables us to have a group of data scientists who all end up placed in various teams, and are able to really provide a lot of value to an individual team in that way, because they have a wide variety of skills and are able to get something all the way through from idea to actually in production.

**Daniel Whitenack:** Full stack data science... I've heard that term a few times recently. I don't know if it was from Indeed, but I think that that's starting to be used a little bit more widely. Have you heard that, Chris?

**Chris Benson:** I have. It's becoming a popular buzzword now, so we have formally introduced it on the show here... So we are in place.

**Daniel Whitenack:** I don't know if I can be considered a -- I think maybe based on your description, Samuel, I hope that I'm considered somewhat full stack, but I feel a little bit cringe calling myself a full stack data scientist. I feel much better if someone else called me that... But anyway, not to get side-tracked.

**Chris Benson:** Well, actually, before you completely eliminate the side-track - it's kind of funny you say that, because we came from software development; it sounds like all three of us have come from there... And once upon a time I did think of myself as a full stack software developer, so I wonder if we're gonna grow into the sense of being full stack machine learning engineers, data scientists, whatever.

**Daniel Whitenack:** Do I have to learn more Javascript to be a full stack data scientist?

**Chris Benson:** You have to do React with your AI at that point... \[laughs\]

**Daniel Whitenack:** I'll look into that.

**Chris Benson:** There we go. So I'm trying to recall back... From HireVue we had Lindsey...

**Daniel Whitenack:** Lindsey Zuloaga, I think.

**Chris Benson:** Yes, that was it... And I think that was back in our late teens, maybe episode 17 if I recall... She was talking about bias in hiring and data, so... Samuel, I'm wondering, is that something that Indeed is working on as well? It's a pretty big issue out there. If you are working on it, where is Indeed taking it as a company?

**Samuel Taylor:** \[00:11:55.12\] Of course that's a huge issue. It's to the point where that kind of stuff is coming up at conversations at the national level; in the presidential debates, people are caring about bias in algorithms and bias in data... And there are people at Indeed working on that. I really can't speak to what they're doing, I'm just not super-familiar with what they're doing.

One area that I have found interesting, that can be somewhat related here, is working in cases where you have really imbalanced datasets, where certain parts of the population that you're looking at might just be really under-represented in your dataset, and trying to come up with useful techniques for correcting for that, or for making sure that your model is still doing well on those subsets of the data that are under-represented.

I find it really interesting, because I feel like that comes up all the time. You'll have a case where, for instance, your target variable could be 1%, or 0.001% of the smallest class, and then everything else is the majority class. I've found that to be a really interesting problem to try to attack. I don't think it's directly related to the issue of bias in machine learning, but I think there could be some benefit there to be had, for sure.

**Chris Benson:** I think that is probably the epitome of the type of area in terms of bias, and even its extension into the newfound field of AI ethics, and that is the one thing all of us are grappling with, no matter where we're at - the fact that we have these datasets and we're trying to create great models... And that's just a universal challenge. Just about everyone I ever talked to says that.

**Daniel Whitenack:** Yeah, definitely. It's hard to grapple with, for sure. Yeah, every time I encounter that, it makes you stop and take a step back and really think through your process, and how your data was generated, what the implications are of different sampling techniques, and all of those things. Yeah, it's hard every time I encounter it, it seems like,

Samuel, given that you work at Indeed, and given that data scientists are in demand, and machine learning and AI is all the rage, do you have any general - maybe just from your personal experience or patterns that you've seen, do you have any recommendations around "Hey, I'm looking for an AI job" or "I'm looking for a data science job", what are maybe some good things to avoid, or some good things to do generally as you're going through that hiring process?

**Samuel Taylor:** Definitely. Obviously, I can only really speak to what I know, and what I know is how I got into this... I think one of the biggest things that helped me get into this field was being able to work on side-projects, either after work, or on the weekends, or something. I know that's not always an option for people who are busy or have kids, but if you can, if you do have the chance to do that, i think that's a really strong way to both just develop the skills and run into problems that you're gonna run into in real life, but also to have a portfolio to show to people and say "Hey, look at all the cool things I can do with this."

People are a lot more likely to take you seriously if you have some sort of example that you can show them of "Here's the thing I built. Look at how neat this is." It can be a really good way to get on someone's radar if you can send them a link, for instance, to a website that you made, that does some cool machine learning e-thing, and they can play around with it and be like "Oh, this is fun." Even if that website isn't super-complicated, they still might end up being -- you know, it helps set you apart from the rest of the crowd.

**Break:** \[00:15:21.05\]

**Chris Benson:** Samuel, let's turn toward All Things Open. I'm familiar with it, and I know Daniel is, but there may very well be people in the audience that aren't. Could you tell people what All Things Open is about, and what organization backs it, that kind of stuff?

**Samuel Taylor:** Yeah, definitely. All Things Open is this just massive conference that takes place in Raleigh, North Carolina, and has several thousand - I think it's in the 3k-4k people - people that show up to this thing. I haven't gotten to go before; I'm really excited to, because conferences are always just a blast. Anytime you get around 3k other nerds and you're all just there to celebrate the nerdy things that you like, it's always a good time; there's always really interesting people. So I'm really excited to get to go.

**Daniel Whitenack:** Yeah, and I think especially -- I don't know if this has been your experience, Samuel, but at conferences that are very open source-focused and have a community vibe, there's just a lot of excitement there, and always interesting people to talk to, and really interesting random, but awesome projects that probably wouldn't get highlighted at very expensive industry conferences. Is that your impression as well?

**Samuel Taylor:** Oh yeah, definitely. I've gone to some other more community open source-y conferences, and the people you run into -- you'll sit down with someone and not know anything about them, and start asking "What do you do? What kind of stuff do you work on?", and they'll have this incredible project that they're using to build their rugby league, and recruit people for this... And you're like "I'm amazed that you came up with this." So it's always cool to both run into people, but then also see them featured in the program itself is cool, too.

**Daniel Whitenack:** Yeah, definitely. And I did look it up - because you know, the internet can help with these things - and it is OpenSource.org that is at least partially behind the conference; I don't know the exact structure there.

But yeah, cool, we're really excited that you're getting featured there, and also a lot of other machine learning things are getting featured there that I saw... But maybe just for our listeners - probably a lot of our listeners that maybe come over from the Changelog, or another one of the Changelog podcasts, might be familiar with open source and that community in general... But some data scientists and AI people may be coming from Academia, working in research - maybe it's a little bit less clear what open source means, and how you get open source software, and is it always free, what is the community around it, how is it created... Could you talk a little bit about that, just what is open source and how you were initially exposed to open source maybe?

**Samuel Taylor:** Open source software is this crazy, amazing collective of people who see a problem with something, or need to do something, and somehow come together and self-organize to create a lot of the world's software. I am sure that if you're listening to this podcast you are using open source software at some level, whether it's the server that's hosting this mp3 file, or if it's the actual software you're using to play it back... I'm sure there's some part of open source software in there.

**Daniel Whitenack:** Yeah, so it's not just like free apps, or something. In a lot of cases, it's tooling or lower-level things that are just available widely, that are integrated into all sorts of different applications. It may even be commercial applications, right?

**Samuel Taylor:** \[00:19:49.16\] Yeah, absolutely. I was mentioning web servers - a lot of web servers run on Linux, which is this amazing open source piece of software, that people have been building and maintaining for decades now... And it's really interesting to see the kind of collaboration that the internet enables, and the kind of governance models that people come up with.

Like you said, not all open source software is free. There are some discussions within the open source and free software communities about the differences between those. When people talk about free software, there's either the free as in "you're not paying for it" or free as in freedom, or free as in liberty kind of thing... And some people really appreciate that aspect of it too, because when you have software that is free as in freedom, that means that you have the right to change it, and if it doesn't suit your needs, you can go in and modify it. And there's some aspect of that that can be really satisfying for people who are using software and always wanna have the ability to make it work like they want it to.

**Daniel Whitenack:** Yeah, and we should mention, for those just getting into software, or AI, or open source machine learning tooling and all of this - most of the time, you can find these sorts of projects for example on GitHub; not always. There's definitely various NLP things, and other things that I've used where I just downloaded it off of some university site, or something like that... But for the most part, anyone can create a GitHub repo and open-source their project or the code associated with their research paper, or whatever that is. I'm curious, Samuel, have you open-sourced things, or been involved on that side of things?

**Samuel Taylor:** I have a little bit. There was a project that I worked on in college, where I at the time couldn't find a good recommender systems library for Python, and sort of hacked my own together and then put that onto PyPI... That is long since dead, but it was really informative learning how to package up Python software and get it out to where people could actually use it.

I think even if the project doesn't become a success, there's way better recommender systems libraries out there for Python now than that thing ever would have been... But despite that, there was still a lot of value in learning how to do that kind of stuff, because you're gonna potentially need to ship something to your internal PyPI at work, or something like that.

**Chris Benson:** It's interesting, unlike the original software development world, where there was a lot of closed source, and open source kind of grew over the years (and even over the decades), we've had this really cool situation where machine learning and AI tools have started off as open source. Some of the most popular in this area are TensorFlow, which was open-sourced by Google, and PyTorch, which was open-sourced by Facebook... So I guess my question is why do you think that having open source in the machine learning and artificial intelligence fields is important, and why do you feel that they probably started it off that way?

**Samuel Taylor:** Yeah, let's do that in two parts. I have a theory as to why things are this way. My personal theory is that really high-level researchers, people who are advancing the state of the art, really like to be able to publish their work openly and be recognized for the cool work they're doing. So my theory is that because they come from this culture of Academia, where it is important to publish things publicly, that - "Well, then I'm gonna publish my code as well, because that's part of the research that I did." That's kind of my theory. It's not empirically validated in any way, but that's my theory on why that would be.

**Daniel Whitenack:** Spoken like a true data scientist. \[laughter\]

**Chris Benson:** What do you think about just trying to get uptake on your tool by making it -- for instance, back in 2015 if Google had not open-sourced TensorFlow, maybe it would not have gotten such tremendous uptake as it did, and subsequently Facebook as well. Do you think there's an intent of trying to capture mindshare in the community?

**Samuel Taylor:** Absolutely, yeah. I think that's really important to these large software companies. My understanding is that when Google wrote a bunch of these papers for what ended up becoming Hadoop, they saw the Hadoop world rebuild a lot of the internal tools they had... And it's good, because you sort of build that mindshare of knowing what MapReduce is, for instance... But then when you're hiring someone and they come in, it's like "Well, this is a little different from the MapReduce you're used to."

\[00:24:19.14\] So if they just start right out the gate open-sourcing TensorFlow, then when they are hiring new data scientists they are gonna know exactly what TensorFlow is, and already be using it. So I think there's a lot of benefit to it.

**Chris Benson:** I agree. I think that you hit on the point -- I remember that going around the community, that exact issue of Google saying "Wow, we kind of created this upfront, but since we didn't open-source it, somebody kind of turned it around and we had to react to them later on." I think that also happened, to some degree, with containerization with them... So maybe in that particular case, with that particular organization, maybe that was a lesson learned; they finally turned it right. And obviously, that must have worked well for them, because TensorFlow has a huge percentage of the market.

**Samuel Taylor:** Absolutely.

**Daniel Whitenack:** Yeah, and I think that there's such a wide range of open source things now... I can't imagine doing any sort of AI project without open source tooling of some kind. But it's even past TensorFlow and PyTorch now, where people are kind of sharing their pre-trained models, they're sharing datasets, and all of those things... And of course, this has also created a little bit of backlash, in the sense that OpenAI models and others have been kind of deemed dangerous, and "Oh, maybe we shouldn't be releasing this code."

It's kind of weird now that research is so close to applications. People release a paper and then there's like three implementations on GitHub the next day. What's your perspective on that, Samuel, in terms of like should researchers and data scientists always be open-sourcing things, or do you think that there's limits and boundaries within which we should work?

**Samuel Taylor:** I think of course there are times where it doesn't make sense to open-source something, or to release a dataset. For instance, I imagine if you're Visa and you have a fraud detection algorithm, you definitely don't wanna release that, because then people are gonna start doing really good credit card fraud to evade your algorithm. But there's other cases where I think it does help the species, humanity to get further along and understand how we can do certain things.

I will not pretend to be an expert about when is best... I can see that there's cases where it's good and cases where it's bad. I probably tend toward thinking that there's something noble about trying to advance the frontier of human knowledge... But at times, that isn't the right choice, and at times you have to make a difficult decision and not do that.

**Chris Benson:** I just thought I'd mention - I can give you an almost comical instance that I've just read about where maybe open source wouldn't be a solution... Which is strange coming out of my mouth, because I think all three of us are huge open source advocates. There was a push by the Government Accountability Office for Department of Defense to -- or kind of really all government agencies to try to open-source 20% of the code they write, which in general I love that idea... But there was pushback from the Department of Defense CIO - and I'm paraphrasing, I'm not quoting, because I don't have it in front of me... But he basically said "Well, our code is for weapons systems, so we're not gonna put the weapon system code out there in open source", which I thought was kind of hilarious, personally.

**Daniel Whitenack:** Yeah... There's definitely domain-specific situations like that. There is this side of research where it's like "Oh, we don't know exactly the implications of this, so maybe we're gonna hold off."

Anyway, moving past some of those caveats, I guess, what are some of the -- if you were to pick some of your favorite open source machine learning or AI projects that you use really frequently, what would those be, Samuel?

**Samuel Taylor:** \[00:28:17.04\] I would have to start with Jupyter, because I think almost every data scientist has at least run into a Jupyter Notebook at some point. I don't know that I've had a day without using one since I started working. They're just incredibly useful ways to sort of see the results of your computation and experiment with things and prototype with things in a way that can be a lot less friction than traditional IDE. That'd be what I'd start with. Also, I have to give a huge shoutout to scikit-learn, because it has an incredible API, the community is really strong, the documentation is really good, and you can get a lot done with just everything built in scikit-learn. So those would be the two that I would give the biggest shout-out to. If you have Jupyter and scikit, you can do a lot of stuff, for sure.

**Break:** \[00:29:08.13\]

**Chris Benson:** I am assuming that Indeed is not paying you to make music recommendation systems, like you had mentioned in your ATO abstract... What kind of side-projects are you engaged in? What are you doing, what's fun, and what would you like to do that you may not have gotten to yet?

**Samuel Taylor:** Definitely. There are machine learning-related side-projects, and there are just sort of fun side-projects... As a fun one I'll start with, I do some volunteer coding instruction, and I think that's really enjoyable. That's one of the most fun things that I do that's not work.

As far as machine learning-related projects - and these are some that I talk about in the talk, actually - is working on some recommender systems stuff I think has been really interesting; trying to predict whether a certain musical artist will be liked by a certain user I think is a hard problem, for sure, but really interesting.

**Daniel Whitenack:** Are there open source datasets related to that?

**Samuel Taylor:** There are, yeah. There's a conference called RecSys that released this massive dataset that people gathered, Last.fm data... Last.fm is this social music sharing website where people's music client will submit that they're listening to certain music, and then some researchers went out and scraped a bunch of data and put it into this thing. Now that's part of the open record, and you can get this data, which is interesting.

**Daniel Whitenack:** So you had that data. In terms of doing the recommendations, how did open source factor into the way that you went about implementing a solution to that?

**Samuel Taylor:** Yeah, absolutely. The main thing I would say that was helpful for this specific problem was trying to do data exploration and visualization. I mentioned Jupyter earlier, and that was a big part in the prototyping phase of this project. Another thing that was really useful was Pandas, which is a really good library for dealing with tabular data. If you have data that is rows and columns, use Pandas. It's great.

And then also leveraging some tools like Matplotlib and Seaborn to do data visualization and try to see what correlations exist in the data to try to get a first pass at what might be a useful model to start to build. I think those tools ended up being really useful.

**Chris Benson:** Do you have any other projects in particular that you've worked on, or anything that you're aspiring to when you get enough time to?

**Samuel Taylor:** \[00:32:06.20\] Yeah. There's one that I started working on actually before I got at Indeed, where I wanted to use machine learning to find my next job. I just thought that was a really fun idea. What that ended up being was I made a spreadsheet and read just a ton of job descriptions, and pasted them in this spreadsheet and then rated them. And if I'm being honest, I definitely spent more time reading job descriptions this way than I would have any other way... But I'd read them and try to figure out if they were cool or not, and then have a training model to try to do this for me.

What I ended up doing -- I don't have this email going anymore, because I like my job, but what I ended up doing was having it do this weekly email where it would send me the top ten jobs that sounded the coolest that went up that week. I just thought that was a fun little way to make your own life easier. I think that's a great way to get started with these machine learning projects... And like I was alluding to earlier, when you are trying to build a portfolio, it's cool to work on something that you actually want to solve, because first off, it shows the potential employer what things you find interesting, and you can inject some of your personality into that. And then second off, that you will be more motivated to work on the project.

**Chris Benson:** That's a great point.

**Daniel Whitenack:** Yeah, definitely. I think passion is a big part of that, that really helps with side-projects. I think you mentioned maybe a third project in your abstract, having to do -- was it something with sign language?

**Samuel Taylor:** Yeah, so actually at a hackathon a friend and I built a little thing that would try to predict what sign you were making of the American Sign Language Alphabet. American Sign Language is a really interesting language that is not just English with your hands; it's much different from that. And a friend and I went to a hackathon and we had this little device that could read hand position data when you plugged it into your laptop... And we thought "What if we could teach a computer sign language? That sounds really awesome. Wouldn't that be cool?" And then we realized we only had 24 hours and that was not gonna work... But what we did realize was that we could at least start with trying to get it to learn the alphabet.

So we gathered some training data, and then did some model selection and found a model that worked reasonably well, and now I get to tell people that I taught a computer sign language. It's not true - the computer doesn't actually know sign language - but I can at least say that I, with a caveat, was able to teach this computer something about sign language... Which is cool.

And what we ended up doing was turning this into a little learning game. We call that kind of like a Rosetta Stone, but for sign language, where it would show you a picture of a hand sign and say "Hey, make an A." And you would make a little hand sign of an A above this censor, and then once you got it right, it would say "Great job!" and give you some points.

So that was a fun hackathon project. It was really interesting, and ended up having surprising applications to the real world of like defining a limited scope, and working iteratively, and ended up surprising myself with how useful that project and the things I learned on that ended up being.

**Daniel Whitenack:** Yeah, I'm so happy for you to share that... Obviously, as our listeners know, I'm very much involved in the world of AI and language, and especially minority languages, which include sign language... And yeah, I think if anybody out there wants a really cool, innovative and highly-impactful project to work on, working on sign language tech is really interesting AI-wise. I know a couple people that are working in that area and just doing amazing things, like processing video from three different directions, and reconstructing hand motions in 3D, and all sorts of amazing stuff... So I'm glad you were able to share that.

That was at a hackathon... How much time and how often are you doing side-projects? I'm kind of curious about that.

**Samuel Taylor:** \[00:35:58.22\] Absolutely. Since I've got some things working, like I'm married and I have a volunteering thing that I do weekly, I don't put a ton of time into side-projects at this point, just because there's other things that I'm choosing to prioritize. But I think they were a really great way to scratch that itch for wanting to learn how to do machine learning by practice... Partially because of other time constraints, and partially because of the fact that I get to scratch that itch actually at work now, I don't feel as much need to do that outside of work. But every now and again, something will come up where I'm just like "I need this thing. I'm gonna go build it."

**Chris Benson:** So what do you think makes a good side-project? A lot of people I know do that. We have what we do at work, and then we have our own little things... What do you think makes it worthwhile? What lends itself to being a great side-project?

**Samuel Taylor:** The ones that I have found most fun to work on, and the ones that other people seem to think are the coolest, are things that are sort of tangible... As an example, I have a website where you can go and type in a word, and it'll try to make up puns based on that word. So if you time in "Sam", for instance, and you click "Give me some puns", it'll say "We're all in the Sam boat. Ha-ha-ha!" It'll give really bad dad jokes like that.

**Daniel Whitenack:** It sounds really useful for my life, actually... \[laughter\]

**Samuel Taylor:** Yeah. It's a fun thing to work on, because it has an element of humor and joy to it... And then part of what's enjoyable about working on a side project is showing it to people. When you have something like that and you're able to get it out into the world... Anyone can go to Puns.samueltaylor.org and try out this thing. Anybody can. And you can show it to your friends, and say "Hey, type your name in this, see what comes up." It's really fun. So I think that's part of it - the joy of getting to share it with other people is really fun.

In other cases, I think side-projects don't have to be broadly useful. If you can find something that is extremely useful to you, that's definitely a great place to start, if you can have this job email, for instance. That was really applicable to me at one point in my life, and it was really useful, and the time was well-spent and I learned a lot from it. And you might be surprised to find out that things that are extremely useful to you end up being useful to other people as well.

So I'd say those are the first two things, and then the last one which we've already talked about is something that you just find interesting, and you feel an itch to scratch that thing.

**Daniel Whitenack:** Let's say you're working on a side project, or in your main job you have some sort of machine learning AI project going, and you say "Okay, I have this issue" or "I need to do X, Y, Z. I need to do recommendation" or "I need to parse this type of data" or "I need to scrape this type of data" or "I need to train this type of model..." There's so much open source out there; how do you go about finding the right tool for the right situation, and also validating -- especially if you're doing this for your job, how do you go about validating if this thing actually works as it's supposed to, or will be stable for any period of time, or robust in any sort of way... If you're just kind of grabbing stuff off of GitHub, what is your process for doing that? Because I know I've learned certain things over time, but I'm curious what your perspective is?

**Samuel Taylor:** Definitely. I'm gonna cheat a little bit and say that the easiest way to do this is to find someone you trust and ask them about that. If you have other data scientists that you work with, you can walk up to them and say "Hey, I'm running into this issue. Do you know any packages that might be helpful?" And if they know something, hopefully they vetted it. That's the cheating way.

If you can't do that, one of the things that I actually try to instill in the talk is when you run into the kind of data that you don't know how to represent, just google it. Search "how do I do text with machine learning", for instance, and you'll get a lot of results. You might have to wade through a little bit and figure out what seems to be the most popular way of doing that, and figure out "Oh, I'll use TF-IDF", for instance.

\[00:40:04.07\] The third way, if you're looking at projects on GitHub - and this is still cheating, but you can do some amount of validation by looking at how many stars something has and how many forks things have... If something has a lot of activity related to it, it's a good chance that it is well-maintained.

**Daniel Whitenack:** Could you describe a little bit more how that activity is represented on GitHub, for example? You mentioned stars, activity... How is that activity represented, or what could you be looking for?

**Samuel Taylor:** Yeah, of course. When you go to a GitHub repository, in the top right(ish) of the page there'll be a thing that says "Stars" and a thing that says "Forks", and they'll have little numbers next to them. You might see a project that has 27 stars. What that means is that 27 individuals have landed on that page and thought "Oh, this is cool. I'll bookmark that for later" and they click the little star button. That's all it means. It's not a vetting of the quality necessarily, but it is some amount of measurement or proxy for popularity. Generally, if something is more popular, you'll generally have more eyes on it and more people depending on it, and people to run into bugs before you do, and that kind of thing.

The activity that \[unintelligible 00:41:19.07\] On GitHub you can do what's called "forking" a repository, which is you basically make a copy of it in your own space, so that way you can edit code, and modify it, and fix whatever bug you ran into, for instance. You can use those forks as a way of seeing "How many people are actively working on this project?"

**Daniel Whitenack:** Yeah, also sometimes what I'll do is go to a repo, and if I'm considering actually integrating it into a project, actually look at the commit history. When you are working on a piece of code and you make a change, there's a commit that happens... And if the last one that happened was in 2014 or something, probably less likely that the code is actually getting updated. Although that's not always a bad thing. If it's a simple package that doesn't need updating, maybe that's something different.

But yeah, I guess we're kind of coming to the end of our chat here, but... I know you mentioned Jupyter and scikit-learn are really great projects; are there any other projects that you'd like to highlight as we wrap up here, that people might wanna check out?

**Samuel Taylor:** Oh, yeah. There's too many to name. One other that I will talk about that we haven't gotten to mention yet is Facebook has a library called Prophet, which is really good if you run into time series data. As it turns out, time series data has some odd particularities that often show up, and you can leverage a lot of people's knowledge who understand those particularities very well by using this package. I think that's another one of those great things about open source software - it often embeds the knowledge of a large group of people.

**Chris Benson:** I've got one last question for you... I'm curious (and I ask people this all the time) what software -- obviously, people like TensorFlow versus PyTorch, and others along the way... What kind of workflow and what tooling to support that have you chosen for your own personal workflow?

**Samuel Taylor:** Absolutely. When you're choosing between different implementations or different packages, my opinion is that the best thing to do is to make a prototype of something in both, and make sure you understand what the benefits and disadvantages are of each one. If you can, ship both to production, have them behind some feature flag or something, test them in some way, and try to see which one matches your use case better.

**Daniel Whitenack:** Awesome. Thank you for sharing a little bit of your workflow, sharing a little bit about what you're passionate about in open source. It's been really great to have you on the show. I know we've mentioned a lot of open source things in the past, but it's been really great to have someone just share their perspective on open source and machine learning in general. We hope you have a great time at All Things Open, and hope that the talk goes well and you have just an awesome experience there. Thank you for taking the time to talk to us!

**Chris Benson:** Thanks a lot!

**Samuel Taylor:** Yeah, of course. Thank you. I'm so glad that you enjoyed, and I had fun talking to you all, too. Thank you so much.
