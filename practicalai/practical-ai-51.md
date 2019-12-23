**Daniel Whitenack:** Welcome to another episode of Practical AI. I'm Daniel Whitenack, I'm a data scientist, and I'm joined by Chris Benson, who is chief strategist for AI and high-performance computing at Lockheed Martin. Hey Chris, how are you doing?

**Chris Benson:** I'm doing good, how are you today?

**Daniel Whitenack:** Doing pretty good, made it through the 4th of July without blowing myself up or anything like that.

**Chris Benson:** Always a good thing.

**Daniel Whitenack:** How about you? Did you have a good holiday?

**Chris Benson:** I did. Just family stuff, and I got kissed by a llama...

**Daniel Whitenack:** Oh, wow.

**Chris Benson:** I went to a friend's house and they had llamas, and the llama came up and planted one right on my face. So that was an interesting experience... I was not sure what to do about that. I declined to take it further with the llama; I decided that that was not the relationship I wanted to pursue...

**Daniel Whitenack:** Yeah, that's probably a good thing.

**Chris Benson:** But that was the highlight of my 4th, sadly.

**Daniel Whitenack:** Well, on that note, and maybe a more relevant note, given that this is Practical AI, in our community on Slack - which you can find by going to Changelog.com/community - often times we're asked maybe what are good practical ways to start learning about AI... Maybe from software engineers, or those with an engineering background who are getting into AI and data science... And pretty much I always tell them that a great place to start is with Joel Grus' book Data Science from Scratch. That was one of the instrumental things in helping me understand what data science is, and I frequently go back and reference that book.

Well, Joel has joined us today. I'm really excited to talk to him about his book, which now has a second edition, and also some things he's doing at the Allen Institute for AI in Seattle. Welcome, Joel.

**Joel Grus:** Thanks for having me here.

**Daniel Whitenack:** Yeah. Maybe you could start by just giving us a little bit of background about yourself. How you got into data science, how you got to Allen AI and what you're working on now.

**Joel Grus:** Right. Originally, I studied math and economics. This was a long time ago, well before data science was a thing... So what I did and what a lot of people with math backgrounds do is I went into quantitative finance - options pricing, financial risk, things like that. And I discovered I didn't like it very much.

\[00:04:10.27\] I was working at a hedge fund, and it went out of business and I got laid off, and I was lucky enough - this was 2006 - to get hooked up with a startup called Farecast, which was online travel site doing basically price predictions on airfares. They'd use machine learning, and you'd say "I wanna fly from Seattle to Los Angeles on these dates", and it would tell you "The best price is $300 on Alaska, and we predict the prices going up, so you should buy now" or "We predict the prices going down, so you should wait."

They were doing a lot of machine learning before putting machine learning in consumer products was \[unintelligible 00:04:43.02\] popular. I was not doing machine learning, I was doing BI, writing SQL queries, building spreadsheets, things like that... But as time went on, I started getting a little bit into the machine learning side of things, a little bit into the Python scripting side of things, and just started to grow my skills in that area and learn by osmosis from some of the data miners, as we call them.

By the time it was 2011 or so and data science was just starting to become a thing, I said "That's like what I've been doing, but better, and now there's a name for it." So I went on to become a scientist, and I sort of pushed myself in that direction, managed to talk my way into a data science job, and spent three years basically running data science at a startup called VoloMetrix. While I was at VoloMetrix I ended up writing a fair amount of production code, for better or for worse, because that was a startup doing analytics on enterprise collaboration data, so the data science kind of was the product. That meant that the data scientists ended up writing a lot of production code. And I found out that I really liked it. I liked building things. That was a lot of fun for me, so I wanted to look for opportunities to really grow out that skillset.

I had the opportunity to interview at Google, so I sort of crammed for a while, teaching myself all the computer science that I should have learned but never did, because I didn't study computer science... I somehow passed the interview, I went to Google for a couple years and really kind of leveled up in terms of software engineering, writing code, building things. But after a couple years there I sort of felt like I wasn't excited about the projects I was working on; building tools to help ad salespeople sell more ads, or writing back-end services in C++ to replace spreadsheets... Things like that.

I had the opportunity to interview at AI2, which is a research non-profit doing fundamental AI research, and I decided to move over here. I've worked on a couple different projects here; the first one was called Aristo, which is basically teaching computers to pass science exams... And now I work on a team called Allen NLP, which does fundamental NLP research, as well as we build a library called Allen NLP, which is a deep learning library for doing NLP research. So most of my job is working on building that library, supporting people using that library, adding features, adding models, fixing bugs, doing tutorials, giving talks, and so on and so forth.

**Daniel Whitenack:** It's interesting that you've mentioned having to level up your computer science skills. I remember getting into data science from a physics background. I feel kind of similar to you; it was around the same time, a little bit later, but the data science hype was growing, and I felt similar, that I kind of talked myself into a position and then learned a bunch of these coding things later, and learned how to do a bunch of things on the fly. I'm not sure now if I was in the same place... Things are so competitive now in data science; there's really hard interviews, and all these things... I'm not really sure if I would have made it given where I was back in the day. It's interesting that you had a similar experience.

**Joel Grus:** \[00:08:02.08\] Yeah. Basically, my interview to be the data scientist at VoloMetrix was me meeting with the CEO, him handing me a printed out SQL query and asking "Do you understand this?" I said yes, and then he hired me. He hired me basically in like a contract-to-hire position, because it was so early in the company that they weren't set up to have full-time employees yet... So in that sense he wasn't taking a ton of risk, because he could have easily not converted me to full-time employee... But still, it was not a very rigorous process.

**Chris Benson:** You don't happen to remember that SQL query, do you?

**Joel Grus:** It was about five pages long.

**Chris Benson:** Oh, boy... Okay. Serious SQL right there. So I guess to turn toward the book, I'd like to ask you why do you think it's important to think about data science from scratch? ...since you use "From Scratch" in the title of the book. Why is that approach useful to get people into data science and AI? What's your take on it?

**Joel Grus:** The practical answer is that it's very easy to install scikit-learn, point random forest classification at some data set and spit out a result, and sort of have no idea what's going on... Which is good in some ways, and it's also bad in some ways. If it goes wrong, it's very hard for you to figure out why it's gone wrong. Or it's possible you've made some conceptual mistake, or you're cheating by looking at the test data, or things like that. So if you don't know those things, it's very easy to lead yourself astray. That's kind of the practical answer.

The moral answer is that - as I mentioned, my background is in mathematics, and one thing that's a very strong, almost moral principle in mathematics is that you're not allowed to use theorems if you haven't proved them yet. Math classes are set up so that in the first quarter we'll prove these theorems, and in the second quarter we'll build on them, and in the third quarter we'll build on them... So much so that when I was in grad school I had a year long class, but the professor changed between the first semester and the second semester; in the second semester he came in on the first day and he says "I'm so glad you proved theorem X, because I need to use it", with the premise being that if we hadn't gone through that proof, he couldn't use it, and then we'd be in a bad spot.

Somehow that burned really deeply into me this idea that you shouldn't use things like that if you don't really understand how they work. When I want to sit down and say "What is a linear regression? What is a random forest? What is a neural network?", I feel like I need to really understand under the covers what's going on here, what is it doing behind the scenes; otherwise I don't feel comfortable using those things. That's kind of maybe the moral (you'd call it) reason for doing it that way. I feel like it's a good approach.

**Daniel Whitenack:** I definitely get what you're saying. I remember someone telling me when I was in physics one of the ways that you can tell the difference between a math physics person and a physics person - there's this group of physics people called "math physics" people... Physics people are okay with just trying something, and if it works, they're happy, whereas math physics people - they would never use something unless they had proved that first.

So I definitely get that, but also I love how in this book in particular -- I've looked at some kind of statistical learning/machine learning/AI sorts of books that start from the beginning and explain everything, and it is all very mathy... Which is good, and it's good to learn those things as well, but then it's somehow disconnected from the coding side of things. I think one of the reasons why I latched on to a lot of your content was the code is right there and you can go ahead and see "Oh yeah, there's this abstract thing, but this is how it's directly connected to Python code", and I can see it's not that hard to implement this thing in a small number of lines of code, and it makes sense. Was that something you saw as a gap, and part of the reason why you wrote this book? Or why was it important for you to take this code-first approach.

**Joel Grus:** \[00:12:32.11\] Here's what I'll say... I think that when you put a lot of math equations in a technical book like that, people will zone out and not follow it. And for good reasons - you don't wanna be reading a ton of math equations in a tech book. But the other thing is that a lot of times those equations are actually not the best way to explain something if you're using it in kind of an applied context.

Basically, what I tried to do was "Okay, here's a mathematical concept I wanna teach, but instead of teaching it by giving you some \[unintelligible 00:13:04.06\] equations, I wanna teach it by writing code that embodies it. That way, hopefully you understand the math that's going on, but also you can see from a Python point of view exactly what's happening." So it's sort of this middle ground where I want the math to be part of the text and part of the pedagogy, but I also want the math to be framed in terms of Python code, not in terms of equations.

**Chris Benson:** In the book, when you're building from scratch, what do you start with and what is that order upon which you're building layer after layer, so that the reader is groking it all in their head? How do you approach that?

**Joel Grus:** It took me a long time to figure out a good order for doing this, but in essence, the structure is a brief introduction to Python, and then now we've got Python, let's talk about linear algebra, which is mostly just working with vectors. I went serious from scratch, where we're gonna represent vectors as lists of floats, and we're gonna do arithmetic on a list of floats. Starting from pure Python and what is a list, now we've got linear algebra - I can take vectors, I can multiply them, I can do their dot product - and now that I'm equipped to do those things, I can say "Let's start talking about doing statistics", so take the mean of these factors, and I can start talking about probability, what it means to have a distribution over things, and I can start talking about hypothesis testing and drawing inferences, and just building step by step.

Once I've spoken about all these things, there's a slight detour and I'll talk about "How do I get data? How do I work with data? How do I clean data? How do I process data?", and because of the machinery we've built, we can talk about things like "Okay, now I wanna do a principal component analysis. What does that mean?"

Now once I've done linear algebra and statistics and probability fundamentals, and once I'm done working with data fundamentals, now I can start to push into machine learning. What is machine learning? What do I need to understand about machine learning, independent of what model I'm using? And then just start building up - okay, what is simple linear regression, what is multiple linear regression, what is logistic regression, what is a decision tree, what are neural networks.

Once you build up all those things, then you can start talking about even further applications. What does it mean to do natural language processing, what does it mean to do recommender systems? Things like that. That is pretty much the progression of the book.

**Daniel Whitenack:** And why the second edition? Were there things you felt like were left out? I know that of course now we're in -- I don't know if we're past the data science hype, but we're definitely into the AI hype. I think if I'm not mistaken you have a little bit more content about neural networks, and that sort of thing. Was that part of the reason for the second edition?

**Joel Grus:** \[00:16:04.23\] There was one overriding reason for the second edition, and that's that the first edition was written in Python 2.7...

**Daniel Whitenack:** Oh, that would do it.

**Joel Grus:** ...and basically, I told people to use Python 2.7, and every day I woke up and felt guilty as hell that there's a book out there with my name on it, telling people to use Python 2.7. So I said "I'm going to do a second edition that's Python 3." So that was 99% of the reason I did it.

Then once I was doing that, I was like "Okay, now maybe I'll add a chapter on deep learning, because that's a pretty important thing to know. And let me flesh out some of the other chapters and add some new stuff. And I'll take the time to clean up the code", and so on and so forth. But really the Python 2/Python 3 thing was 99% of my motivation.

**Chris Benson:** I like your answer, by the way. I like the mea culpa. That's funny.

**Joel Grus:** I don't even wanna call it a mea culpa, because I think at the time the first edition came out, probably Python 2.7 was the right choice. What I should have done is I should have written the code in the first edition in a way that was compatible with either Python 2 or Python 3... Which wouldn't have been a ton of work, but I didn't do it. That was a bad call on my part. But the reality is that even if I had written a Python 3 version, it would have been Python 3.4 maybe, at the time I wrote that book (or 3.3) and that's not a great long-term version to be on anyway, so...

**Break:** \[00:17:31.17\]

**Daniel Whitenack:** Joel, we've talked a little bit about data science from scratch, and what you've put into the book, and the code-first approach... I've also noticed with some of the other content that you've put out, both in the book, but also in talks that have gotten a good bit of attention - like, "I don't like notebooks", and I saw another one, "Writing code for NLP research" - it seems like you put a lot of focus on bringing good software engineering practices into data science and AI. Is there a particular reason why that's become a passion of yours, and a driving force?

**Joel Grus:** Yes, that is my big pet cause. The selfish reason is that I've become over my best judgment, sort of a software design geek. And what I mean is I spend a lot of time thinking about what is the difference between good code and bad code, even if both work? And in particular - as someone who uses code to teach, I spend a lot of time thinking about "What is the clearest way I can express the idea I'm trying to express in code?" And what I've found is that going through that exercise over and over again has really drilled into me the importance of doing that, and has spilled over into my actual work; so even when I'm not teaching data science or I'm writing code for my job, I'm still always thinking "What is the clearest way I can express what I'm trying to do? Because in a month I'm gonna come back and look at it, or someone else is gonna come back and look at it, and if it's not clear, they won't be able to understand it." So that's the selfish reason.

\[00:20:07.05\] The practical reason is there's a lot of bad data science code out there, and I think some data scientists even take pride in "I'm a data scientist, I write data science code", and I think that's unfortunate, for a couple reasons. One, I think that by not understanding software engineering best practices or how to write good code, you're basically putting yourself in a position where you cannot contribute to - or you should not be contributing to - production code (say) at your job... And you get this artificial division where "I'm the data scientist; I'll write a model, and then I'll hand it off to someone who's not a data scientist to put it in production or make it work in code." I think that's unfortunate, for a couple of reasons. One, I think data scientists can have a lot more impact if they can cross that divide, and I think they also become better data scientists if they can cross that divide, because the ideas from good software engineering kind of flow back.

A second reason why (or maybe third) it's really important, I think, is that a lot of the things that are software engineering best practices are intended to help you 1) write correct code, and 2) get better at writing code. And those are both things that are equally important for data scientists. If you're a data scientist, even if you're writing code to run some experiment or something, you want that code to be correct, and you should be writing unit tests for that code, because unit tests all make sure your code is correct... And you should be getting code reviews on that code, because code reviews are a second set of eyes, and they'll find bugs, and they'll point out things that maybe aren't wrong, but you could have done better, or "Hey, did you know that scikit-learn has this thing that would have done that for you?" All of these best practices will make you a better data scientist.

**Chris Benson:** It's funny -- I'm sorry, keep going.

**Joel Grus:** No, that's it.

**Chris Benson:** I was just gonna say, I actually sympathize tremendously with that take on it, because I came into this from a software development, software engineering background, and as I moved fully into the AI space and started working with data scientists, in a lot of cases straight out of school and into the job, and they were weak on the programming side - that definitely created a tension that I noticed, where you had people that had different skillsets, working and bringing different things to bear... That certainly was the case for us. As we were thinking about the product of what we were doing having to be productized, and getting into the data science pipelines that had been created at the company I was at at the time... That tension - have you experienced that, where people are like "Well, I'm a data scientist, I just don't care"? It sounds like you may have... How did you get through those dynamics in terms of dealing with those different perspectives together?

**Joel Grus:** I think you really have to do a sales job, so that's one thing I've been trying to do in some of my talks... And also in the second edition of my book, to some degree. I said "Look, writing a unit test sounds like a hassle, doing code review sounds like a hassle, but I'm going to show you how your life will be better if you adopt these practices." I think it's really hard to convince people to do it without having that sales pitch. This is going to make your life better. And that's not me talking BS; I do think as a data scientist it will make your life better to do those things.

**Daniel Whitenack:** Yeah, I remember when I was in my first data science position and I realized -- people started talking to me about not cutting over to master before you have a review, and a passed test, and all of these things... And I was very confused by a lot of that, because I did not come from a software engineering background, so I was terrified when I first went into code reviews... But over time, I realized that yeah, I could skip those things, and then the whole system crashes down and it's my fault, and then it's a big situation where I caused this big thing... Or I could go through a code review and have some assurance about how this thing -- have some knowledge sharing, but also have some assurance that my logic was sound on this or that. Now I don't feel good pushing anything into a place where it's gonna be used without having someone review it. I think it is a shift of perspectives. I'm glad that there's this effort going on to educate people on these things.

**Joel Grus:** \[00:24:25.19\] That's one angle. Another angle is that by doing code reviews you learn a lot, both in terms of having a second set of eyes on your code, that can tell you "Here's another way you could have done this", or by reviewing someone else's code and saying "Wow, I never would have thought to do it that way, but that's a cool way to do it." So doing code reviews is a great way to keep learning and building skills and getting better at what you do. And hopefully, if someone's a data scientist, that's something that they're interested in.

**Daniel Whitenack:** Yeah. Hopefully, a lot of people in this field have that passion for learning. And it's definitely true that as you have a more diverse set of people and ideas working together, you can definitely learn a lot of things that you wouldn't have learned otherwise.

So in particular with your Writing Code For NLP Research talk - I was looking through that as we were preparing for this interview, and you talk about how to write code in a way that facilitates good science and reproducible experiments... Given that this is practical AI, that is a lot of our focus - giving people practical discussions on this topic - I was wondering if you could just give us maybe some of the most important points from that talk, or maybe other talks, in terms of what are some immediate wins that you can have in terms of writing code that is reproducible, or writing code that facilitates good science.

**Joel Grus:** Yeah, so that talk is actually a tutorial from EMNLP last year; it wasn't just me - I presented it and wrote it with two of my colleagues here at AI2... But since then, I've sort of gone on a circuit of academic AI conferences, sort of beating this software engineering practices for AI researchers drum, with reproducibility in mind.

So the first thing is just what I've said before - write unit tests. And that sounds weird to say, write unit tests for your research code, but if your model is not doing what you think it's doing - that's bad science out of the gate. If your model is accidentally ignoring one of its inputs, then it's not gonna be doing the right thing.

The way we tend to write tests is take a data set like the one you want to use, get a very small version - maybe it has 2-3 instances in it - and now write a unit test that takes that data, reads it in, puts it through your models, checks that the output looks right, that the model can run on it without crashing, checks that the model can learn to predict it perfectly (because if you have three instances, your model should be able to learn it perfectly), things like that... And you make these actual unit tests that run along with your code. That gives you this really simple, but basic guarantee that the code is doing at least sort of what you think it's doing. So that's one really important aspect.

Another aspect is that typically you're going to run a lot of experiments, maybe with an amount of variations; I'll vary some hyper-parameters, or I'll try different kinds of word embeddings, or I'll try a different number of hidden units... And so what you wanna do is you wanna structure your code in a way that makes it easy as possible to run these experiments. What that speaks to then is making a real clean division between what I'll call library code and experiment code.

I want one code that's like "This is the details of how my model works, and this is the details of how data gets \[unintelligible 00:27:46.04\]." I want this code in a module that's well-tested and is not gonna change. And now I want to run an experiment, and maybe that experiment needs to point at this data path, and it needs to use some other parameters, various other parameters... And I want the experiment code to lean very heavily on that module, and all it's really doing is taking the parameters that I fed in and calling that model.

\[00:28:15.08\] When you separate things out this way, it makes it really easy to run an experiment. You don't have to be saying "Oh gosh, when I did this one, what version of the code was I using? When I did this one, what version of the code was I using?" In all cases you're using the same code, you're just feeding in different parameters to it.

So this was one of my gripes against notebooks - notebooks don't really lend themselves to this kind of division very easily. Either you have to pull all your library code out into a module, in which case you're only half-working the notebook and half-not-working the notebook... Or you have to do something really elaborate, like the system that Netflix uses, where you parameterize your notebooks and have a 50-piece system that runs them, and instantiates them, and saves them, and so on and so forth. So I think making that clear division is another one.

**Chris Benson:** Not letting the notebook be a crutch, in essence, to where it's inhibiting you in terms of good practices.

**Joel Grus:** Yeah... I could talk about that in various other contexts at great length, but yes, that is certainly one aspect of it. The other one is sort of obvious, but a couple more - one is write good instructions for how to use your code... Obviously, because someone's gonna want to rerun it and reproduce it, and if it's not obvious how to do that, then that's no good.

And finally, the other one that's important is Python dependency management, like in most other languages, is a real pain in the ass, and whatever experiment you're running, it's going to depend in very intricate ways on "Oh, you know, I use this version of PyTorch, and I use this version of SpaCy..." And being as clear as possible about "Here's how to set up the environment..." - that can be a requirements.txt, that could be a Docker container... It could be anything like that. But if you go out and look on GitHub at data science projects, you can find a ton of them where there's literally no indication of "How did I set up the environment to do this?" It just starts with "Import PyTorch", and it goes from there. Your chances of being able to reproduce that are very small.

**Daniel Whitenack:** Yeah, I definitely have felt that pain. I was curious on another point, too... You've mentioned tests a couple times -- when I'm teaching workshops, a question that comes up a lot of times when we start talking about testing... People will tell me "Well, machine learning and AI is kind of different, because there's these non-deterministic pieces, and there's randomness, so you're not always gonna get the same answers, so how do you test that?" Or they give the example - in software engineering you could have a bunch of table-driven tests, and you expect all of those things to pass, but when you're testing on a test set in machine learning you don't expect all of them to pass, and that sort of thing.

I kind of take issue with that, because if there was no way to test randomness and non-deterministic processes, then physics wouldn't exist, basically... But I was curious to hear your perspective on that.

There's definitely cases where you have some randomness and other things in your code, but it seems to be a point that people get hung up on when they start talking about testing.

**Joel Grus:** There's a couple of answers to that. One is that there are a number of things you can test that should be -- they're invariants of your code that don't depend on the randomness. For instance, given an input, it should run without crashing. That's not a function of randomness. Given a model and an input that has the right shape, the output should have the right shape, and it should have the right field, or whatever. Again, that's not a function of randomness; that should be an invariant of your code. So those things are easy, and they don't depend on randomness.

As I've mentioned earlier, there are other things that depend on randomness, but you can test them in ways that are sort of randomness-invariant.

\[00:32:06.03\] I train my model on a small dataset for 10 epochs, and I checked that the loss goes down each epoch. So is it possible that there's some weird, random setup that would make that not be true? Possibly, but that test is basically always gonna pass. And if it's gonna fail one time out of a million, you mark it with a @flaky decorator, and that's fine.

Similarly, it's true that I have a big neural network and randomly who knows what it's going to do, but again, if I take a dataset that has three examples in it and I train that dataset for 100 epochs with this big model, I can be sure that that model is going to learn to predict perfectly on those three data points. It just has to.

So again, you can come up with these tests in a way that gives you some confidence that the model is doing what it's supposed to do, and are robust enough that they don't care what the random initialization of the weights happened. They should work regardless of that.

**Break:** \[00:33:05.06\]

**Chris Benson:** Turning toward Allen AI - could you tell us a little bit about the purpose of the organization, what its mission is, and the types of problems it's oriented on?

**Joel Grus:** Yeah. Allen Institute is a non-profit research institute. It was founded by Paul Allen, and it's funded by him, and I guess now his estate.

**Chris Benson:** Yeah, you may wanna note who Paul Allen is, just in case there's anyone out there who's not familiar with him.

**Joel Grus:** Paul Allen was one of the founders of Microsoft, so he got pretty wealthy that way. Then he left and started a company called Vulcan, which does a million different things... And he was a big Seattle person, he was a big everywhere person... So our mission, at least if you look at the sign on the website, it says "AI for the common good." What that means is a little bit vague. I once interviewed someone who was very disappointed to find out that it didn't mean that we were working on the homeless problem, or anything like that... But what we do is fundamental research in various areas of AI.

As I mentioned, the team that I work on is called Allen NLP, and we work on fundamental research in NLP. So not super-different from what people who are NLP researchers in a computer science department would be working on. In fact, we collaborate with them, we go to the same conferences they do, we present with them... Things like that.

There's another team called PRIOR, which works on problems in computer visioning, and visual reasoning. We have a project called Semantic Scholar, which is an AI-enabled search engine for academic papers, where it indexes the academic papers, but it also tries to figure out what papers were influenced by this one, and what information can I extract from the paper programmatically, and things like that.

We have a project called Aristo, which I mentioned earlier, which does science question answering; so can we get an AI to answer science questions.

We have a project called Mosaic, which tries to get an AI to do common sense reasoning. So you can ask questions about -- a science question is like "When a plant makes their own food, what is that called? Photosynthesis." But the common sense reasoning is more around understanding folk physics and folk psychology. "Billy did XYZ. Why is it likely that he would have done this?"

So those are the different areas that we focus on.

**Daniel Whitenack:** So at Allen AI there's obviously a lot of academic-like research going on, but there's also -- you've mentioned projects like Allen NLP, and I guess there's products like Semantic Scholar that people are using out there... So there's obviously some mix of researchers and engineers. I was just curious how the teams are structured there, and how that might be different from maybe regular academic research. Maybe things are more geared towards open source, or... I don't know. I was curious what that looks like.

**Joel Grus:** I would say 1) it varies a lot by team. My team, Allen NLP, is actually very researcher-heavy; it's mostly researchers and only a handful of engineers... Whereas Sematic Scholar - they're running a website that has to be up, so they have a lot more engineers, they have to be on call, they have a lot more front-end people and things like that, that we don't really have. So it really varies by team.

In terms of comparison with the academic department, I would say the engineering support that the researchers get here is (I would say) mostly not comparable to what people get in an academic research department. The engineers here are -- I'm ex-Google, other people are ex-Google, ex-Amazon, ex-Microsoft and so on. And my understanding - I've never been in a computer science department, but my understanding is that if you're working as a professor in a Computer Science department, typically you don't have these kinds of engineers who are there to collaborate with you and support you. I think that's a really deep difference between the way we do things and the way that an academic department does things.

Now, if you go to somewhere like Google Research or Facebook AI Research or Microsoft Research - those places do have this kind of engineering support.

**Chris Benson:** \[00:39:57.23\] I'm looking at the web page for Allen NLP, and you were talking about that being your own project... And it describes that "It's an open source NLP research library built on PyTorch." I'm wondering who is that geared for, what is the audience for using it, what are the main use cases that you might apply it to... Any thoughts there?

**Joel Grus:** Officially, the target customer is someone doing NLP research. Originally, our target customers were the researchers here at AI2, but it was always an open source project from day one, so then we quickly started taking on as customers researchers over at the UW, researchers at the universities, people at more corporate research institutes... And then the line between research work is really narrowing a lot, in a lot of ways. There's a lot of companies that you can go to them - startups, or big companies, or whatever - and they're doing things that are (say) at the cutting edge of NLP for their own problems. So their workflows for solving these problems look a lot like the workflow of an academic researcher trying to solve an NLP problem. So we do have some customers who work in companies, but still use it anyway... And it's an ongoing source of debate to what extent we should be actively soliciting, supporting more corporate customers, versus academic customers.

I'm giving a tutorial on Allen NLP and NLP more in general at the O'Reilly AI conference in September, which is more of a practitioner-focused conference, not an academic conference... And when this was mentioned -- someone asked me if we're focusing on those practitioners now as customers for the library, and I'm like, well, we've always sort of \[unintelligible 00:41:44.28\] that those are our customers, but they're not officially who we're focused on, but we want them using it, too.

**Daniel Whitenack:** I'm just trying to think workflow-wise... If I'm an NLP researcher, where might Allen NLP fit in? A comparable - people might be familiar with something like SpaCy, or something like that... SpaCy has pre-trained things that are available. I can do some types of NER, and other things, and it's all pre-trained... But I can also train custom models, but I'm not really messing necessarily with a lot of the architectures of the neural nets, or something like that... Is Allen NLP kind of like a level down from that, to where you have more of the ability to mess with your models and all of that sort of stuff? I'm just trying to gauge where it sits.

**Joel Grus:** Yeah, that's exactly right. Allen NLP is not, for the most part -- it would not be a substitute for SpaCy. Instead, it would be a substitute for someone who's doing NLP stuff in PyTorch or in TensorFlow and says "You know what, there are a lot of problems that are caused by my working with text, so I would like to use a library that has in it abstractions that are really intended at people tackling NLP problems, and allow me to not worry about some of the nitpicky details around masking, and padding, and recurrent layers, and things like that."

But working in Allen NLP is much more similar to -- I mean, when you work in Allen NLP, you basically are working in PyTorch; you're just working in a PyTorch that has a bunch of higher-level abstractions in it.

**Chris Benson:** Gotcha. So it's built on PyTorch, essentially.

**Joel Grus:** Yes.

**Chris Benson:** So if you are coming at it from TensorFlow, do you need to go learn PyTorch first and then move into it as an intermediate thing, or what would be -- with all the people out there that are also doing TensorFlow in addition to PyTorch, what's the migration path that you would see into that?

**Joel Grus:** \[00:43:49.18\] That's an interesting question. You would want to learn some PyTorch, because Allen NLP is not really insulating you from understanding how PyTorch works. The way I would describe it is - and this is gonna be a terrible analogy, and I'm gonna regret saying it as soon as I say it... But imagine you have a big bag of Legos, and only the squares and the rectangles. And then you're building houses, cars, or whatever, and you build everything using the little square box. Then someone comes in and says "Hey, you know what - I notice you're making a lot of walls, so here's a piece that's just a wall. Now you can use this one piece to make a wall, instead of having to build these walls out of little blocks." That's my analogy for what we're doing.

So now I don't have to worry about walls, or now I don't have to worry about doors... But you still have to know how Legos work, and you still have to know how to build with Legos... You know what I mean? Does that make sense?

**Chris Benson:** I do, and it's a good analogy. I have a seven-year-old, so we have Legos all over the place. That was perfect for me.

**Daniel Whitenack:** I'm kind of curious -- I've been involved in certain open source projects over time, but always geared towards the regular software engineering community... What have you found to be unique challenges of creating an open source project for the AI community, or more for the research side of things? Have there been unique challenges with that?

**Joel Grus:** This is the biggest open source project I've ever really worked on. In fact, it's probably the only multi-person open source project I've ever worked on, so it's hard for me to say whether the challenges we face are unique. Some of the challenges that we face are people who submit issues without enough information about what they're doing, or how to reproduce the problem they ran into, but I imagine most open source projects probably face that issue.

The one that we struggle with a lot is that we have extremely high coding standards. We have just a ton of continuous integration checks before you can merge your code. We use Python 3 type annotations, and we actually run mypy on the codebase. So if you submit a PR that doesn't type-check for mypy, the CI system will spit it out.

And we use Pylint with -- Pylint is sometimes the bane of my existence, but again, if you don't format your code right, Pylint is gonna choke on it. And we have some code to make sure that you've actually written Sphinx documentation for every class you've added.

Basically, in order to maintain this very high bar for code, that means contributing to the library is sort of a pain in the ass... Because most people who wanna contribute - they might not know about mypy, they might not know about Pylint, especially if they're researchers. So getting them over that hurdle can be pretty difficult sometimes. So that's one aspect.

The other aspect that I think we always struggle with is when you own an open source project - and it's an open source project, but it's also our project - you have to support people and you have to maintain it. So every time someone wants to contribute something to the library - someone who's not on our team, say... Like, on one hand, that's awesome; I love that you wanna contribute to my library. On the other hand, you're putting this piece of code in the library, and now if it breaks, I'm the one who's gonna have to fix it in a month, and maybe I didn't even understand it when you wrote it... And when people have questions with it they're not gonna go to you, they're gonna go to me.

So it's this constant tension between "Yes, I love that you wanna contribute to the library, but at the same time, do I want your contribution to be something that I'm going to sign up to support and maintain forever, basically?" That's another ongoing struggle that I don't think we've found the right answer to exactly.

**Chris Benson:** It's funny, that last answer... I had a question for you, but I'm actually gonna ask you two, because since you're working on a team that is -- you know, it's more than just yourself, and you have to juggle multiple people, and their perspectives... What I was gonna ask you, which I'd like to address, but I'm gonna tag onto, is what is the team working on right now, and what are some of the cool things, but also, as an individual on the team, what are you excited about in terms of the future for AI and natural language, and the types of things you guys are working on? So a team perspective, and also your own, I'm curious...

**Joel Grus:** \[00:48:06.15\] Our team, like I said, is mostly researchers, and they're doing research around things like paragraph understanding, semantic parsing, question answering, language modeling... It's a wide variety of NLP topical research kind of things.

Like I said, we have a lot more researchers than we do engineers. What I'm working on right now is mostly -- I don't know if you had a chance to check out the Allen NLP demo, but we have this demo.allennlp.org with these interactive demos for a lot of our models. That's one of the value propositions to the library - once we've trained the model, we make it sort of easy to get an interactive demo. One of the things I'm working on right now is basically once we've trained a model, basically for free you can get a really ugly demo, which is like text in and JSON out. "How can I make it so that you can get for almost free a beautiful, interactive demo, that's like text in and widgets out, and make it so that someone who doesn't know a ton of JavaScript or React can get it working very easily?" That's kind of one of my main areas of focus.

Right now we have other people who are working on things like "How can I train more efficiently? How can I speed up these models? How can I use less compute?", as well as just adding various other stuff.

**Daniel Whitenack:** Well, I for one would love to see this demo functionality that you're talking about. I would be super-excited to use that. It would make me seem way cooler than I actually am, so...

**Chris Benson:** You're cool, buddy!

**Daniel Whitenack:** I always appreciate things like that. To wrap up - first off, thank you so much for joining us. As I already mentioned, I've been a fan for quite some time, so it's been a real honor to get to chat with you a little bit and get to know you a little bit. Just as we wrap up, where can people find your book, first of all, and then maybe also what's the best place where people could start learning about Allen NLP? I know it's probably on GitHub, but are there other places? Do you have a website, or are there Slack groups, or anything like that? What's the best way to get engaged?

**Joel Grus:** Yeah, so you can get my book anywhere books are sold. I went in a Barnes & Noble a couple weeks ago and they had a copy there, so I took it out from where it was hiding and put it right at the front of the rack, very prominently...

**Daniel Whitenack:** Of course.

**Joel Grus:** You can get it from Amazon... O'Reilly shut down their bookstores, so you can't buy it directly from them, but if you want to buy a PDF version, apparently those are sold through something called Ebooks.com, which is where you can buy PDFs of O'Reilly... But really any online bookstore, you should be able to get it.

If you wanna find out about Allen NLP, the best place to start is just our website, allennlp.org. That will take you to demos, and tutorials, and so on. If you wanna look at the actual code itself, that's on GitHub, at /allenai/allennlp. You can go there and see our enormous backlog of issues and pull requests, and laugh at us for having such a big one...

**Chris Benson:** \[laughs\]

**Joel Grus:** Can I pitch all my other presences?

**Daniel Whitenack:** Yes, please do.

**Joel Grus:** I have a website - it's just my name, JoelGrus.com. I blog very infrequently, but when I do, it's pretty good. I am on Twitter all the time, @joelgrus. You can find me there. And it so happens that I have my own podcast with Andrew Musselman called Adversarial Learning, which we rarely record, but sometimes we record it. That's at adversariallearning.com.

**Daniel Whitenack:** Awesome. And I must say, both on the blogs and the podcasts, when they do come out, I highly recommend them. Thanks for sharing those.

**Joel Grus:** Oh, and one more... I like to make live-coding videos, and those are all up on YouTube. I think that's just youtube.com/joelgrus. So if you wanna watch me live-coding, frequently problems that I haven't looked at before I started live-coding them, go there and check those out.

**Chris Benson:** Cool!

**Daniel Whitenack:** Awesome. We definitely will. Thanks again for joining us. I hope we can meet up at a conference sometime, but I look forward to more great content online, and thank you so much for the discussion.

**Chris Benson:** Yeah, thanks for having me.
