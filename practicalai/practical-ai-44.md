**Chris Benson:** Welcome to another episode of the Practical AI podcast. I'm your host, Chris Benson. I am the chief AI strategist at Lockheed Martin. Today I am recording live from the O'Reilly AI Conference in New York City. The date is Wednesday, April 17th, when we're doing the recording.

I have the great privilege today of having a conversation with Ben Lorica. Did I get your last name pronounced correctly?

**Ben Lorica:** That's perfect, Chris.

**Chris Benson:** Okay. Ben is the chief data scientist for O'Reilly Media. He is also the program chair for the Strata Conference and this AI conference. It's a pleasure to have you on the show.

**Ben Lorica:** Thanks for having me.

**Chris Benson:** I'm really hoping to cover a bunch of different topics, but I wanted to start out with - I noticed that you had put out a publication through O'Reilly called AI Adoption in the Enterprise. It's an eBook that I know our listeners can go and download; we'll put a link to that in the show notes... And I was just wanting to see if you could give us a little overview of what you're covering, and maybe do a couple of deep dives, enough to at least tease everyone on what you've hit in the book.

**Ben Lorica:** At a high level we wanted to understand the state of adoption of AI, which for the most part these days refers to machine learning technologies. The first thing we did was we tried to get people to self-describe their level of maturity. At a high level, we consider people with mature practice to be companies that have a certain number of years of having models in production, and then on the lower end we have companies who are just at the evaluation and exploring stage.

If we take these two buckets - mature and exploring - a couple of interesting things jump out. One is the planned level of investments. The organizations with the mature practice plan to invest a substantial amount of money compared to the ones who are still in the exploratory stage.

**Chris Benson:** And do you think that's mainly just because they're still kind of convincing themselves, proving out the technology and its usefulness, or...?

**Ben Lorica:** \[00:04:12.29\] Yeah, I think so. Before I dive into that - for us, that seems to indicate that maybe the gap between the leaders and the laggards may widen a little more insofar as machine learning. As far as what are some of the key bottlenecks that the respondents cited - again, there's a distinction between those in the exploratory stage and those with mature practice. The ones in the exploratory stage cited the problems identifying the right use cases, and company culture - convincing people to invest in AI technologies.

**Chris Benson:** Sure.

**Ben Lorica:** The ones who consider themselves more mature cite lack of data. So they may have an idea, but they haven't quite collected the right data to execute on that project, and lack of skilled people.

**Chris Benson:** Gotcha. So are you saying that even the more mature ones are struggling with lack of data at this point in the survey?

**Ben Lorica:** I think once you start down the machine learning and AI path, you probably start generating ideas and use cases, because you gain more confidence. For many of these use cases you may not have the right data yet, so you have to start generating the data and then execute.

**Chris Benson:** Taking that a little farther, could you describe maybe what a typical -- on the forefront, those who are leading the way and are making the investments, what some of those may look like, based on what the survey result showed? ...in terms of did you go into use cases at all, or just talking about whether or not they were making the investment?

**Ben Lorica:** We didn't have them describe their use cases, but I think at a high level, the more advanced companies are probably using more deep learning these days. I think companies who have existing machine learning products or applications have been evaluating how deep learning can either augment or replace their existing systems.

This applies not to the traditional areas that you associate deep learning with, like computer vision or speech, or even text, but problems that involve structured data, like recommender systems, and time series forecasting. I think companies are beginning to examine whether or not deep learning can play a role in improving those systems.

And then the really bleeding edge companies I think are beginning to examine machine learning against live data, and now you're starting to enter the world of reinforcement learning. I don't know if you were in the keynote this morning, but Tony Jebara from Netflix talked about their work in adding contextual bandits to their recommender systems. So now you're beginning to enter the world of reinforcement learning, which I think is super-interesting.

At this conference we had a tutorial on an open source project from U.C. Berkeley called Ray, from RISE Lab. It's a distributed computing framework that you can use for a lot of things, because it's got a certain amount of flexibility. The RISE Lab team have written some libraries on top of it, including one for hyper-parameter tuning. \[00:08:04.02\] They have a library on top of it called Modin, which for people who are familiar with pandas in the Python world - Modin is basically pandas on Ray, which means it runs faster on your laptop, and it automatically scales a cluster if you need it to; all you need is to add one line of code. And then it turns out the most popular library on top of Ray is RLlib, which is their reinforcement learning library.

What's nice about this is now reinforcement learning becomes a library that you can just use if you're a developer. You don't need to write your own algorithms. So the experts can use Ray to write algorithms. In fact, they've designed Ray so that both users and reinforcement learning researchers can find utility in it. It's a great new project to pay attention to.

**Chris Benson:** That sounds great.

**Ben Lorica:** Also, one thing I should add is that actually Ant Financial, which is the largest unicorn company in the world - it's a financial services company in China... I don't know the exact valuation, but I think it's over a hundred billion.

**Chris Benson:** Wow. Big.

**Ben Lorica:** Yeah. So they're using Ray in production in multiple use cases. One of them is real-time personalization recommendation.

**Chris Benson:** Okay. You talked also about some of the ones that were just exploring still, and I know in this book that you guys put out you also talk about some of the things that are holding back adoption of AI... Can you talk a little bit about that? I know that we have a lot of listeners, and some of them have been doing it for a while, but we also have listeners who one of the reasons they listen is to try to figure their way into this space. What have you found on things that are holding back adoption of AI?

**Ben Lorica:** So the people in the evaluation stage cite problems identifying the right use cases, which to me points to one thing Chris said - I think sometimes we undervalue just the need to educate, not just your developers and engineers about machine learning, but your organization, so your managers and decision-makers.

Think about when we started talking about big data, and how data can drive decision-making. Well, you had to educate your workforce about how to make decisions using data. I think the same thing with machine learning and AI. There's a certain amount of education that needs to be done, so that your organization is aware about what's possible, what are the limitations, and what are the requirements for the technologies that we have today.

And then the second main bottleneck they cite is related to this as well, which is basically just convincing the rest of the company (company culture) about investing in AI.

**Chris Benson:** Sure.

**Ben Lorica:** One of the things that we found is that the companies that seem to have taken initial steps and succeeded in terms of using machine learning and AI, they tended to build on existing analytics infrastructure.

**Chris Benson:** Just kind of iteratively moving it \[unintelligible 00:11:33.08\]

**Ben Lorica:** Yeah, so you have data that you were using for something else, and maybe you start using it for machine learning and AI. You layer a bit of machine learning on top of your decision-making.

**Chris Benson:** So doing that iteratively in that way is probably one of those success factors, and instead of starting something entirely new, you're taking an existing team...

**Ben Lorica:** \[00:11:55.17\] Yeah, you might tell yourself "Oh, this computer vision is cool. Let's do a project in computer vision", but now you have to gather the data, develop the expertise on how to store that data... So maybe you're better off starting with things you are already familiar with, and the rest of the organization already appreciates whatever KPIs you have.

**Chris Benson:** Sure.

**Ben Lorica:** So maybe improve those KPIs by layering in this new technology.

**Chris Benson:** I know speaking from personal experience in industry, getting the data that you need -- without naming the company, there was a company that I was working for, and the CTO of the company said "We have all the data you could ever want." The thing that I found in reality was it wasn't the right data for doing the kinds of projects that we wanted. And then a lot of other companies simply don't have the data pipelining at all in position.

**Ben Lorica:** Exactly.

**Chris Benson:** Any thoughts toward what companies can do in terms of getting that kind of prerequisite work done, so that they can get to productive machine learning afterwards?

**Ben Lorica:** One of the things that I've been trying to socialize and evangelize is that if you wanna build an organization when you can have a sustainable machine learning practice, you can't ignore some of these foundational technologies that you described. Things that you might wonder "What does this have to do with AI?", like data integration, and ETL...

**Chris Benson:** Absolutely.

**Ben Lorica:** ...data governance, data lineage... So that's the data aspect of what you need to do. But then it turns out people are realizing machine learning requires some special tools for machine learning development. One of the most popular open source projects over the last year is a project called MLflow out of Databricks, which - full disclosure, I'm an advisor to...

**Chris Benson:** Okay...

**Ben Lorica:** It's a ten-month-old project, and it's basically a project which has three components, and you can use any of the components... But it's meant to facilitate ML development.

**Chris Benson:** Okay.

**Ben Lorica:** So within 10 months over 200 companies are using it.

**Chris Benson:** Oh, that's fantastic uptake.

**Ben Lorica:** They have contributors from over 40 companies. What they're finding is the most popular component of MLflow is the component that helps you track and manage machine learning experiments. So then there's the whole tooling for helping you develop machine learning. But I think if you look ahead, if you use more and more machine learning, and machine learning becomes more and more important to your company, the models themselves will become kind of assets that you have to manage. Just like you have data and data assets, and a chief data officer, or data governance, data catalog, you'll have to have tools for model governance, model operations, monitoring, tracking alerts, dashboards for different personas - business users may have a dashboard for tracking models, the data engineers may have their own dashboard, the data scientists may have their own dashboard... But also just a catalog listing all of the models, their state, who built them... All these things.

**Break:** \[00:15:35.11\]

**Chris Benson:** To extend that a little bit, I've also seen that people - not only are they not necessarily ready for that as they're trying to get an operation up and running, but they also haven't really thought their way through how do you get the model back into a software stack and usable out there in a product service, whatever your target environment is that you're gonna get that model into, and what's the process.

So not only is there a whole aggregate the data you need, get the right data, get it into the right form, so that you can use it for training, but then afterwards when you have a model that presumably you may be iterating on, having that feedback loop that not only places the model out there into the target, but also is pulling it back in. Any advice on how people should be thinking about productizing their model, putting it into production?

**Ben Lorica:** Yeah, that's an interesting question, because traditionally data scientists have been somewhat not involved with deploying these models and these analytics products into production. In fact, a couple of years ago we started noticing in the Bay Area a new job role with the title "machine learning engineer." This role sits somewhere in between data science and data engineering and data ops.

The focus of this machine learning engineer is to productionize ML models. That means that they are stronger on the software engineering side and data engineering side, but they have enough data science knowledge to build some of the more routine models.

We started hearing about this role a couple of years ago, and then about a month ago, before our Strata Data Conference in San Francisco I threw up a Twitter poll, because I'd been hearing that data scientists were rebranding themselves somewhat into a machine learning engineer... Because a machine learning engineer anecdotally I think is higher compensated. The poll question was clear and simple, which was "If two years ago you were describing yourself as a data scientist, or using the title data scientist, what are you using today?" I found over a third said they're now using the job title "machine learning engineer."

\[00:19:58.12\] Now, it might be the case that some of the data scientists have upscaled their software engineering skills and become machine learning engineers, but there might also be a cohort of them who have rebranded themselves.

The other thing too is that the tools for going from a model that's a prototype to production -- so there are startups and companies trying to build tools to kind of blur that distinction, so that data scientists who are working on an internal data science platform where they can collaborate can take those models and deploy them into production systems. But traditionally, the production systems are run and managed by a different team; data scientists don't normally wear pagers and get paged when something goes wrong.

**Chris Benson:** That's true. \[laughs\]

**Ben Lorica:** So whenever someone tells me that you don't need to make this distinction, I always ask them "So do your data scientists wear pagers?"

**Chris Benson:** That's pretty funny, actually... You've kind of gone into talking about how roles are changing, so I'm gonna ask you a little bit about skills, and skill gaps; I actually wanna lead in a little bit... One of the things I have noticed in recent years as I've been part of organizations that have started to turn that corner and try to set up their own AI operations and make those happen was that in a lot of cases the data scientists that were already there had no experience or real understanding about deep learning as they were trying to ramp up, and it was certainly a distinct skillset from things they had done in the past... Speaking towards that, as well as the general set of skills that it takes to make all this stuff happen in this space - what are you seeing? What are the gaps? How are people managing that?

**Ben Lorica:** First off, the job title data scientist has kind of become confusing to some people. I will not name these companies, but they're in the Bay Area; one is in social media...

**Chris Benson:** \[laughs out loud\]

**Ben Lorica:** ...one is in ride sharing; I'm not gonna name them, but... Inside many companies, the term "data scientist" increasingly refers to two types of people. One is a business analyst, business analytics, mostly SQL type of work, and then the actual scientist who does machine learning. But to us on the outside, when we see bandits from \[unintelligible 00:22:47.26\] I've complained to my friends, I said it's confusing for us on the outside, because if you guys have really two different types of personas, then you should give them two different titles, right? But I think the fact that "data scientist" is a hot title, so then they have to incentivize their employees.

**Chris Benson:** One of the things -- it's interesting; I think when people talk about the need for skills in this area, and that they need more people to do it, I certainly sympathize with that; but I've come to a perspective where I'll disagree with people who say there's not enough data scientists in the world, because I think that's fragmenting. I think kind of catch-all position called "data scientist", that was once one thing, now that we're moving into this space is becoming a number of different specific roles that people are taking on in the future.

**Ben Lorica:** \[00:23:41.26\] Right, right. To answer your question about deep learning - when I first started focusing on deep learning in 2013, there weren't the open source libraries we have today, that are well-documented, with easy to use examples that you can get started with... So it was mostly confined to a few research groups; you literally had to apprentice with one of these research groups, because a lot of the knowledge was passed through oral tradition... These days of course we have good libraries like TensorFlow and PyTorch, and BigDL, and a bunch of other libraries that have documentation, and the researchers in the academic and the industry labs tend to publish their papers and have code that you can start to play with... So there's some notion of a running start.

**Chris Benson:** Yeah, I was just gonna say, since I can say that for you - you have media companies like O'Reilly Media, that are putting out great material on this to learn by.

**Ben Lorica:** Right, exactly. So then the question is "Is that material enough for companies?" I think that to the extent that the pre-built models, pre-built architectures and pre-trained models apply to their domains... For example, if what you need is a speech-to-text tool, maybe many of the existing off-the-shelf or cloud services will be enough. But take a data type like text - last year was a big, big year for natural language models and research.

**Chris Benson:** It's huge.

**Ben Lorica:** But if you drill down, many of the models were published with code; some of the models are even pre-trained, so you can use them... But then they may not be quite tuned to your domain.

**Chris Benson:** Sure.

**Ben Lorica:** For example, if you're in healthcare and you want to use one of these pre-trained models, well, even within healthcare and medicine, different areas of specialization have very different lingo and shortcuts for how they communicate with each other.

**Chris Benson:** Yes, that's true.

**Ben Lorica:** So you might still need staff who are capable of doing some of this tuning and retraining, and things like this.

**Chris Benson:** And how does domain knowledge about that - since that's what we're getting into at this point... How do you overcome that? My next question was gonna be "How are organizations using AI?" and all that, but you're pointing out... We've talked about several of the challenges on making all this stuff happen, and that is one, is being able to marry your domain knowledge in very specific areas, to the people, the teams of people in the data science space (whatever your team is calling those) that are doing this - ML engineers... How do you make that domain knowledge transfer happen in an efficient way, that keeps the business pushing forward?

**Ben Lorica:** This is part of the evolution of how some of these software systems are gonna be built. If machine learning will play a role moving forward in many of these systems, a lot of software development may start resembling ML development, which means gather data, train the model, evaluate the results, and then rinse and repeat. But then that might also mean consulting with domain experts who know what data might be useful.

Actually, honestly, in many cases the data is not perfectly clean in the beginning; you have to clean the data and prepare it, and again, that's where the domain experts might be helpful to you.

\[00:27:58.25\] One trend that I am seeing is in the case of data preparation and data cleaning companies are starting to use tools that actually use machine learning... Because you have a set of domain experts, they can label a few examples, and then maybe a system will automatically go through the rest of the data and try to extract similar examples.

So I think that domain knowledge at least is going to be essential to the extent that we're not talking about general intelligence here, we're talking about very narrow and tuned systems, that can help companies automate many very specific workflows.

Another example I like to cite is robotic process automation. I don't know if you're familiar with this term...

**Chris Benson:** I am, yes.

**Ben Lorica:** I think it's a mistake to think that robotic process automation is something that will be directed from above. I think it's gotta be from the ground--1

**Chris Benson:** I think it's a terribly-named field though... It's very confusing for most people to understand that.

**Ben Lorica:** Yeah, yeah. Because those workers who are in the front lines, who know which \[unintelligible 00:29:21.29\] are repetitive...

**Chris Benson:** Absolutely.

**Ben Lorica:** And if you explain to them enough at a high level about what the current technologies are capable of doing, they can help you identify which of these workflows lend themselves to automation or partial automation. Because maybe it won't be full automation, right?

**Chris Benson:** Sure. One of the things that I'm extracting from your explanation is there's this kind of democratization of the technology as it's becoming widespread, and finding many use cases, even within a given organization; but you're seeing it all over. Is it fair to say that this field - and I'm kind of talking about deep learning, as it's finding more and more use cases - is gonna become somewhat synonymous with software development, in the sense that you have ML engineers become part of that team as a standard thing. It's not longer the cool new hotness that you're doing, but it's just an everyday thing down the road... That neural computing is really kind of the future, versus the deterministic "I have all my if-then \[unintelligible 00:30:30.13\] statements" of the past; that neural computing will be part of many, many software stacks out there?

**Ben Lorica:** I would say machine learning... Right now, of course, deep learning is very successful in many areas; it affects companies in computer vision, speech recognition and text... But if you follow the history of machine learning, there are things that go in and out of fashion, although right now we're not seeing anything coming close to challenging deep learning in a variety of tasks, right?

**Chris Benson:** Sure. I agree with you.

**Ben Lorica:** But that's not a given. I think the workflow will probably remain the same; to the extent that machine learning is a part of software development, that workflow will be the same.

**Chris Benson:** Yes. It's becoming a part of everyday life that companies are using it in production for all these areas.

**Ben Lorica:** Yeah. Actually, one of the things that we aspire for in this conference... In the O'Reilly AI Conference we have a business summit, so we have content for decision-makers and managers, so they know what other people are doing, so case studies, and we also give them high-level overviews of important topics through executive briefings... But we also have content for developers who are not data experts, who just want to build things. Then also we wanna show people the bleeding edge, so we have researchers and machine learning experts.

\[00:32:14.09\] One other area I've been trying to emphasize is this notion that when it comes to machine learning, I think companies are coming to realize that it's not simply trying to optimize some business metric or some statistical metric; there's other important considerations. Over the last year I've been trying to give talks around this notion of managing risk, and I've been collecting a bunch of these other considerations like fairness, and bias, privacy and security, safety and reliability, explainability.

If you take any one of these considerations in risks, and you imagine yourself as a company that has begun to use more and more machine learning, then you start realizing "Oh, I really need the foundational technologies." For example, you look at security... Your machine learning model gets attacked by an adversary, or starts behaving weirdly - well, now you've gotta retrace back, so I need tools that will allow me to go all the way back and audit; maybe now we're talking about data governance, data lineage, so where did this data come from? And things like this.

A lot of these foundational technologies are not just important because you want to do more and more machine learning, but it also will allow you to manage risks that come with having a lot of machine learning.

**Break:** \[00:33:56.27\]

**Chris Benson:** Referencing back to the eBook, I was noticing that you had some sections on building block technologies and data types, and I was noticing within that you list the respondents, what they were using; some of them -- supervised learning was right there at the top, and deep learning, and then it shows the usage of each... I noticed down here that reinforcement learning was still fairly low on the list, and yet we're talking about it so much out there in conferences and talks. We've really seen an enormous interest here over the last year or so, maybe two years, in reinforcement learning. Do you see deep learning and reinforcement learning together going forward? Do you think we'll see that rise up on the list? I'll leave it a little bit more open-ended - what other technologies are you seeing in the future as likely use cases?

**Ben Lorica:** \[00:35:40.13\] I would say reinforcement learning right now - as I mentioned earlier, the tools are improving, and becoming more accessible, so that might let companies play around with it some more. Then I think over the next 6-12 months we're gonna hear companies share what they've done; that's always inspiring. Because it's one thing to hear that reinforcement learning is being used for AlphaGo, or for a self-driving car, but if you hear an enterprise in your own industry using it - that may cause you to take pause and try to understand "Okay, so how did they do it? What did they use? Can we do it ourselves?"

I think we need companies to start talking about how they use reinforcement learning, and we're going to begin to see that. As I mentioned earlier, Ray already has use cases in production; the team from Berkeley RISE Lab is gonna start trying to convince some of these users to write blog posts, and some of them are enterprise users, so that might inspire people to jump in.

I think in the short-term more companies are probably gonna start playing around with deep learning, because that seems to be at a point where you can really relate -- if you're in a specific industry, chances are there's some company who's using it that you can really relate to.

**Chris Benson:** So you mentioned -- you went back into tools, and having those use cases that companies are doing out there... So would it be fair to say that one of the reasons for deep learning that maybe things like reinforcement learning need and probably will get in the near future are having a set of tools out there that are accessible and easy to use, so that they can start experimenting along with probably datasets that are applicable to that?

**Ben Lorica:** With reinforcement learning actually - it usually involved a simulation environment...

**Chris Benson:** That's true, that's true.

**Ben Lorica:** ...because it's more of an agent interacting with an environment, and you have a reward function, and you're trying to learn a policy, which is basically what to do given the certain settings of the environment. So it's a combination of tools. You have Ray, which I mentioned earlier, which will give you the RL, which will allow you to learn the policy, but you need to have a simulation environment in order to play around. Or the ability to simulate data.

But I think the main thing is that what motivates companies is seeing their peers use something, and seeing how much reward -- the reward function of their peers. So if you're in financial services and you hear Ant Financial has used Ray to do real-time recommendations of users, interacting and learning from live data, then you might be more motivated... As opposed to hearing about it being used for AlphaGo.

**Chris Benson:** Gotcha. I wanted to actually also go back to something else you mentioned earlier - you were talking about risk in general, and there are different variations. There's bias, there's the ethical and moral considerations of how you're using data...

**Ben Lorica:** There's security, and adversaries, and privacy...

**Chris Benson:** Absolutely. The concept of AI safety, how you use it in benevolent ways...

**Ben Lorica:** \[00:39:37.00\] Or not just benevolent ways; AI safety also refers to systems. If you have AI in mission-critical situations. We don't have them yet, and I probably won't ride a plane yet that completely relies just on deep learning and not control theory, but you can imagine deploying these systems in environments where they can kill people. You need error bars, and robustness, and really the same types of discipline that a lot of these fields of engineering have had to go through and learn.

**Chris Benson:** That's true. And for the record, the FAAdoesn't actually allow, they will not certify a neural network at this point because of the black box component. So that's one of the big challenges... I'm working for a company that's in aeronautical, at Lockheed Martin; that's certainly a big challenge - being able to pass all the certifications well enough, both for ourselves and for FAA requirements.

**Ben Lorica:** Actually, the notion of explainability is interesting, because people think about it in terms of the need to understand what the black box is doing, from a variety of angles. One is think about it from the end user's perspective. If the end user has some level of understanding about what the system is doing, they're more likely to use it, probably. More comfortable. But also maybe their explainability might help you if things go wrong and you have to audit the system and go back and understand how you can improve it, and things like this.

There's a bunch of startups working on explainability for machine learning and deep learning, and I've always tried to get them to think about it more ambitiously, which is don't aim your tools at the model builders and the data engineers and machine learning engineers and data scientists in the back-end, and helping them understand how their model is working, and therefore help them improve their model, which is great, but make yourself have a role for the end user. So if I have a machine learning product in the enterprise that I want more people in the company to use, maybe there's an explainability widget that allows them to get more comfortable, so that they end up using the system more.

**Chris Benson:** \[00:42:13.18\] Gotcha. As we kind of wind up here, I wanted to ask a very pie in the sky, open-ended question. You have this opportunity to talk to so many different companies, and get perspectives... I'd love it if you would just share how you think this field is going to evolve over the relatively near future, over the next few years. I'm not asking for long-term prediction, but where do you think we're going, as an overview, in a summary? How do you see this field evolving?

**Ben Lorica:** I think on the research side, the researchers will continue to publish at a furious pace, and a lot of that research is now in the open, usually with code in open source libraries, so people can take advantage of that research. On the enterprise side, I think companies will continue to struggle if they don't understand the limitations of these technologies, and understand how they work and how these models get built. I think there's a certain level of education that needs to take place across the company, not just the technologies.

And then I think as companies become more comfortable with machine learning and AI, they'll realize they need to build some of these foundational pieces... But also the industry needs to help companies by building better tools for machine learning development, model governance, model operations, and frankly, automation as well.

It's no surprise that one of the areas in technology where you're seeing a lot of automation is in data science and data engineering itself... Because these are the people who understand this technology, and what are they gonna do? They're gonna automate the things that they can automate.

**Chris Benson:** Absolutely.

**Ben Lorica:** So to the extent that you're studying data science today, don't be surprised if by the time you graduate, some of the things you studied have been automated.

**Chris Benson:** Yes, I would agree with that. I think that process is accelerating, too. Well, thank you very much; it's been a great conversation with you. As I've watched you, you've been very busy through this conference as the program chair, so thanks for taking a few minutes to talk with me about this.

If listeners wanna reach out to you, how can they access you? Are you out on social media?

**Ben Lorica:** Yeah, my Twitter handle is impossible to remember, it's @bigdata.

**Chris Benson:** That's a hard one.

**Ben Lorica:** And then if you wanna reach me on e-mail, I have an impossibly hard to remember e-mail address - datascientist@gmail.com.

**Chris Benson:** Those are two fantastic handles there. Thank you very much, and I'll let you get back to the conference.

**Ben Lorica:** Thank you.
