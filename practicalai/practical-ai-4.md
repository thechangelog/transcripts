**Daniel Whitenack:** So Chris, are you terrified of the GDPR?

**Chris Benson:** I am loving the GDP R from my standpoint. I'm trying to learn more about it, but I think, though it might be imperfect, it's about time we finally start addressing this is a public manner.

**Daniel Whitenack:** Sounds great. Well, I brought Matt and Andrew from Immuta onto our show today. Welcome, Matt and Andrew.

**Matthew Carroll:** Thanks so much.

**Andrew Burt:** Thanks for having us.

**Chris Benson:** Welcome, thanks for joining.

**Daniel Whitenack:** I met Matt and Andrew back I think in the spring of 2017; we ran into each other at a bunch of different conferences, and I realized that these guys have pretty much all knowledge around AI and regulation and data and privacy, and I was just learning a ton from them. I think it's great to have them here to discuss some things around AI and how it should be regulated, how it is being regulated, what the trends are there...

**Chris Benson:** I have so many questions for them...

**Daniel Whitenack:** I know, I know. This is gonna be great. Just to start out, Matt, why don't you give us a little bit of a personal intro?

**Matthew Carroll:** Yeah, sure. By trade chemist, went into the U.S. government, deployed to Iraq, Afghanistan. I fell in love with technology enabling that mission, so I left the government, went and started a services company, sold the services company, and then eventually I got drawn right back into the government around the problem of "How do we make the law and data science work together, so we can solve problems at the speed of the business, but still maintain ethical and legal controls around our data?"

That kind of led in 2015 to the creation of Immuta. To date, I'm the CEO of the company. We're tiny, going on 37 people, but we're growing really fast and it's a great market, and I'm just excited to be part of it.

**Daniel Whitenack:** \[00:04:04.17\] I imagine that all the hype around GDPR and other things is definitely not hurting your business.

**Matthew Carroll:** No, certainly not. Quite the opposite. But I think the question really - and it'll be great to talk about that today - is what does it actually mean? I think that's really -- from a practical perspective I think sometimes we get a little ahead of ourselves.

**Daniel Whitenack:** Yup, awesome. And Andrew I believe is a lawyer. Is that correct?

**Andrew Burt:** Yes, guilty as charged. \[laughter\]

**Daniel Whitenack:** Well, tell us a little bit about how you fit into this story.

**Andrew Burt:** Yeah, so my title at Immuta is Chief Privacy Officer and Legal Engineer. The Legal Engineer part I think is particularly relevant for today's discussion. Basically, my charge at Immuta is to think about how law and data science overlap, and to think about what types of requirements law is placing on data science activities, that we can embed within the platform.

My background is I've been involved at the Yale Information Society Project for a while, I'm a lawyer, I've spent some time working for the FBI Cyber Division... Really kind of understanding this conflict between compliance demands and the legal burden associated with data, and all of the really new, really important projects that are going on in the data science community. So the goal is to figure out "How can we think about legal requirements and risk management in a new way?"

**Daniel Whitenack:** Awesome. Well, it sounds perfect for this discussion. Are you the only law engineer in the world, or are there more of those people?

**Andrew Burt:** Legal engineer.

**Daniel Whitenack:** Legal engineer, yeah.

**Andrew Burt:** That's a hard question to answer... I don't know any others, but that doesn't mean they don't exist. There's this kind of funky history around even the term legal engineering, and actually it was coined I think in the late 1980s by some folks at Stanford. So people have been thinking about what it would mean to embed laws within technology for a really long time. So you're a lawyer, but instead of writing a memo you write code. People have been thinking about that, but I think really in the last few years, with the intersection between data science and regulation, I think that we've seen a real need for this field of legal engineering. But I can neither confirm nor deny that I'm the only legal engineer.

**Daniel Whitenack:** Alright. Well, thanks for those intros. One of you guys - maybe Matt - tell us a little bit about... You mentioned Immuta - what is Immuta, what are you guys trying to accomplish? What does Immuta do?

**Matthew Carroll:** Yeah, so long story short is Immuta is a data management platform for data science. The creation of Immuta was really at the intersection of -- we have these three users that make up data science operations: we have data owners, and they control the data, we've got data scientists who wanna use the data to do something with it, to provide insight, and then we've got these governance and legal teams that need to oversee that process.

And the problem is that what we've found -- all of these three parties are kind of acting as antagonists to one another. It's a very human process, lots of meetings, very slow... And so there wasn't a way to really provide each one of them with a single digital platform where they can all work symbiotically, even if they don't know it.

So we had to create Immuta, because what we felt was data management for application development is very different than data management for data science operations, and there was a massive gap. So other than a few companies in the world, like Google or maybe even from the government side NSA, where you have thousands and thousands of people that can write code, that can request ad-hoc access to all these distributed databases - there's all these silos of data, and they could just write ad-hoc code to get access to it...

\[00:08:02.23\] Very few organizations in the world can do that, and the most successful can, but then there's all these others and they don't have people that can write code. They've built applications, and based on predicting the types of questions their analysts would wanna ask of the data, they'd throw BI tools up, they would throw their own custom maps on top... And so their version of data science was much more complicated as they brought data scientists in who need to ask ad-hoc questions across all these silos... They're managing their keys separately, so they've got hundreds of keys to get access to these databases. They're making lots of copies to the data and bringing it local, so they're potentially breaking rules by doing that... So it was very cumbersome and slow.

Immuta - what we did is we built a... Think of us as a data control plant where we can connect to any stored data in any storage system, we can then virtually expose that data in a read-only fashion to BI tools, data science platforms, IDEs, through generic access patterns versus custom APIs - do like file systems, SQL, Spark, Hadoop - and connect to any of this disparate data through a single connection.

And then finally, what we did was -- I think the most valuable thing that Immuta provides right now is we've then built an interface for lawyers to be able to implement rules on this data, and dynamically enforce those rules as people ask the questions. So what that allows us to do is data owners can virtually expose their data in a catalog, data scientists can bring any tool to bare, connect it to that data, and governance teams and general counsel can actually implement the law as it changes, on that data, without impacting any of the other parties.

So the idea is that we can actually streamline the process by which people can get access to data, so they can connect to it, they can control the data, depending on the current state of law or where they are, what region they're in, but then we can also prove compliance, and some of that isn't just, you know, your user rights, but it's also - and I'm sure Andrew will talk about this later - why.

For instance, with the Facebook data leaks or scandal (if you will), it's not just that people used the data - they legally could use the data - but it was around "Why are you using it? Is it for nefarious purposes?" So this concept of compliance and understanding who's using the data, what data is it, and why. That's Immuta in a nutshell.

**Chris Benson:** That's pretty fascinating. So you guys, having thought about this for the last few years, are probably way ahead of us in terms of thinking about kind of where regulation around AI and data is at this point, and kind of what the lay of the landscape is... Especially in the context with GDPR finally being a reality for everyone, and where in general regulation is going, and maybe even a bit about GDPR is kind of getting right or wrong - could you give us the lay of the lay of the landscape and maybe what we should see in the next months and years?

**Daniel Whitenack:** Yeah, and we should probably say that the GDPR is - these guys are gonna correct me if I'm wrong - the General Data Protection Regulation... Is that the right thing of the acronym?

**Andrew Burt:** Bingo, yes.

**Daniel Whitenack:** Awesome, yeah. So it's an EU thing, right?

**Andrew Burt:** Yes, it applies to -- so I'm happy to take this one.

**Daniel Whitenack:** Awesome.

**Andrew Burt:** The GDPR basically applies to any EU data that could be considered personally identifying. The standard, in practice, was the data generated in the EU, and could you use it to figure out anything about a human being? Could I identify your name, could I identify where you live? IP addresses are widely considered to be identifying, under the law... So if you're a data scientist and you're working with data that comes from the EU, the answer is that in practice this applies to you.

\[00:12:04.11\] I'm happy to talk about the AI issue; those are really big questions, so jump in or follow up... But I think, in a nutshell, every government in the world is realizing that the power of AI is new, it's a big deal, and they're talking about what to do about it.

On the one hand, governments like France recently, and the U.K., are saying "We need to have an explicit strategy to promote this new technology", and then on the other hand, regulators like the ones that enforce the GDPR are saying "We need to control this", kind of like a "Not so fast." So the GDPR is really the first I think major regulation that's been implemented that is explicitly - or has parts of it that are explicitly - focused on AI.

In general, the way it's gonna impact machine learning models is that there are different types of requirements for explainability. You might refer to it as a right to explainability, which in my own opinion I think is a little bit too much, but the basic idea is that when you're using models that are deployed autonomously, or that might be inherently opaque - or some call them black box models - the people who are subject to these decisions, whose data is being processed by these models, have basic rights. Those rights are they should be able to understand how and why their data is being used by the model, they should be able to opt out or to say "I don't want a model to be making a decision, let's say, for credit score. Instead, I want human review." So those are the types of requirements that the GDPR puts into place.

**Chris Benson:** You alluded a moment ago -- you thought that in one instance they'd gone a little bit too far, or too much, and I'd really love your personal opinion on what do you think GDPR has gotten right, where could it be improvement, and maybe even speculate a little bit about where you think regulation outside the EU, or future versions of the EU might go, how will the U.S. respond, and just what are some of your thoughts there.

**Andrew Burt:** Yeah, so the Europeans and folks like us in the U.S. - we really approach regulating technology very differently. In the U.S., we tend to want specific regulations, focused on specific problems. That's why we don't have one national regulation that just covers all data. In the E.U., they very much like the opposite approach, which is they'll call it a principles-based approach to regulation. So they want overarching rules, and the downside is that those rules come at the cost of very, very steep ambiguity and vagueness.

I think there's a lot of good stuff from the GDPR and I think the intent is wonderful. I think the intent of trying to mandate certain levels of fairness in automated decision-making - that's wonderful, but when the rubber meets the road, I think it's gonna be very hard for a lot of data science programs that are heavily investing in machine learning. It's gonna be very hard, there's gonna be a lot of fine-tuning as to what some of these specific provisions actually mean, how specific does the explanation of the model actually have to be, and in particular when is it not specific enough, when is it vague enough, and when is an explanation not detailed enough that someone should actually be penalized.

Those are really hard questions. Legal departments everywhere are focusing on them, and we're gonna start to see how that regulation is enforced, and I think we'll start to learn from it.

\[00:15:59.10\] I would say that I think one of the strongest points - and this is something we've been really focused on at Immuta - one of the strongest points of the GDPR (and in some sense, the genius of it) is that it bets really heavily on purpose-based restrictions on data. Most regulations around data are focused on data at collection time, and a lot of that means that the emphasis is on consent. So "I consent at collection time to give you X, Y and Z of my data", and that's the traditional approach to data.

What the GDPR recognizes is that in addition to that, you need to be able to understand and restrict how that data is gonna be used as it's being generated. That's a really new type of concept, and frankly, I think we generate so much data it is frankly impossible for us as consumers and individuals to understand what types of insights we're giving up as we generate this data, which is the beauty of data science... So placing restrictions on that data's use as it's being generated - I think that is going to be the future of regulation for data.

**Daniel Whitenack:** Yeah, that's super interesting, and I guess it kind of leads me into my next question... While you were talking, I was thinking in my own mind "Holy crap, how do I make my models explainable?" I don't know if you've had the same thought. It's a realization I have every once in a while. Chris, I don't know if it's come to you yet as well, but I kind of freak out a little bit when I think about that... because I remember in my first position I wrote all of these PowerPoint (well, it was Google Sites) presentations on how my models were working and trying to explain it to just my own team, and it was incredibly difficult.

But it sounds like at least partially what you're saying in the near-term is a lot of the focus is gonna be on how your data was processed through the pipeline, to what end, not necessarily explaining a deep neural network to some random person. Am I getting the right sense there, or is that wrong?

**Andrew Burt:** Well, sadly the answer to both of those questions is yes. \[laughter\] It's yes in the sense that the GDPR is --

**Daniel Whitenack:** You're not making me sleep any better.

**Andrew Burt:** No. I'm sorry not to bring easy news. The GDPR has a huge compliance burden; there's no side-stepping that. Data being used for any purpose - that needs to be documented. You're not gonna be able to use EU data at scale in a data science job without a plan for how you got the data, the legal basis for that data, what you're gonna do for it.

At the same time, there are also requirements on the types of models you use... Or I should say there are explainability requirements surrounding those models. So it's not that you're gonna have to be able to explain the weighting on every single neuron in a neural net, but you are gonna have to be able to say "Here is in general how the model is working, here's where it's getting data from, here are the reasons why it's being used."

It's not the type of explainability I think that might have you waking up in the middle of the night in a cold sweat, but still, you're gonna have to be able to provide very basic information about the models that you're using.

**Matthew Carroll:** I think the reason that you are concerned is that there's really no frameworks to automate this, so there's now this massive legal burden on the data scientist, who is typically not a lawyer, to expound on why they made certain decisions, what data was used, who potentially was in that data, for what purpose. So it's not just about data provenance any longer, but it's also what types of activities were taken to ensure that there was proper ethical curation of the data itself before the model is being trained. And then it's what are the guardrails put in place to ensure that you're controlling the model as it's put to production.

\[00:20:29.05\] These are things that -- historically, we've had guard rails in place through software, through SaaS; they've always had these guardrails in place, and other types of software kind of automated a lot of these controls. And now the problem is that the ability for anyone to be a data scientist and use the data and use open source tools - they just don't carry the rigor that's required, and I think that it's not just the GDPR, but we're seeing now even in the U.S., California is looking at enacting legislation around data privacy... This is something people care about, because what they're afraid of is the open source community in large organizations like Google, Microsoft and Apple are making it easier and easier for anyone to be able to design these models because they're incentivized to buy up small little AI companies... So we need to put rigor into guard rails around these pieces of software.

It's tough, and it's hard, and people aren't educated around the law, so that's what makes it even scarier.

**Daniel Whitenack:** Yeah, and one of the things I'm hearing from you, Matt - and also when you were talking about what you were trying to accomplish with Immuta - this spans a lot of different areas, all the way from data curation, to training of models, to deploying of models, to building APIs in which models are deployed, and with which they interact... There's a lot of different kind of teams involved in this whole process, right?

**Matthew Carroll:** Yeah, and the challenge is that they're traditionally - if you look at most of these organizations, because they're mostly Global 2000 organizations that are really trying to accomplish this at scale... These teams aren't sitting next to each other; they don't have the benefit of through osmosis to coordinate effects. A lot of them are operating on 5-10 projects, because there's not enough to have a scientist, there's definitely not enough counsel that's caught up in the space, so they're trying to get smart on how does each project function, what are they trying to build, and why... So it's all very slow and cumbersome.

And the worst part about it all is -- I think a worst-case scenario is you build the most fantastic algorithm that can really change the way a legacy business is operating... That's the whole point of this - we can do things better and faster, and then the whole thing has to be brought down because they have no insight into how it's working, and the whole business is then crippled by this, so that they don't wanna make the investment in these advanced technologies because they don't have the legal understanding or the internal engineering to be able to do this in an ethical manner.

That's the fear right now, and that's what the GDPR is for, I think. I don't think they wanna come around and destroy business, but I do think what they want to say is "Listen, there's an ethical way, and just like any engineering process, there's gotta be a governance end of it as well... So hey, Global 2000, if you're gonna use EU data, this is how you're going to do it."

**Chris Benson:** Well, I'll tell you what, you guys have really had an impact on me in this podcast already. I started off the show saying, "Hey, I'm excited about GDPR", and I think part of that is just as a consumer out there, and using many services, I am conscious of privacy... But as you've educated us on what the burden really is that we're going to all be thinking about, and the lack of tools to do that, I'm a little bit worried.

\[00:24:06.02\] I was wondering, would you mind delving into some of the maybe specific industries where you see an impact? Maybe health care, or transportations, or others, where you think that they're gonna have very specific problems to contend with?

**Andrew Burt:** Yeah, happily. Matt, is there any part of that question that you wanna take before I jump in?

**Matthew Carroll:** No. Go ahead, Andrew.

**Andrew Burt:** Okay. So to start with, I think one of the most fascinating things about being a data scientist is that the work that you do can apply to so many different industries, and the same techniques can be incredibly powerful across healthcare or finance. So I think GDPR in general is meant to be as broad and as far-reaching as possible. So if you are an organization that really cares about data and is using data, the GDPR applies directly to you.

I think what we are seeing from the Global 2000 perspective is I think healthcare and life sciences, finance, transportation in particular - I think all of those groups, and then obviously advertising and marketing organizations, I think those groups are the first to kind of really get hit by the GDPR, or to take it seriously. But the bottom line with the GDPR is unlike in the U.S., where we try to do sector-specific regulation, where we have an FDA and the FDA only regulates specific drugs and products, this is really meant to touch everyone.

**Matthew Carroll:** Yeah, and to expand on that, I think the point of the GDPR - again, it's not designed to be punitive to business generally; we want the global economy to scale, and it's in our best interest for that to occur. I think that the focus though is they wanted to put teeth around the regulation, hence the 4% of your annual revenue for 20 million Euros and whatever is larger... They wanna show people, listen, there is a massive slippery slope when we start to use people's data at scale, and I think that there's a couple core pieces to this.

One is we've never had so many people in the world that are producing data than ever before. It's only going to increase as the internet proliferates and 5G proliferates throughout the world... So I think the goal here is this is a time in humanity where we can say "Listen, we've gotta put controls around this, because every industry is going to be impacted." Everyone wants to build algorithms, everyone wants to operate faster, and humans yearn for instantaneous gratification of all their apps.

Voice is the cool new thing, right? Very few people are now wanting to type in their search; they just use their assistant on their phone... So there's all these personal items that are being introduced to physical devices, and there's algorithms behind that, and no one really know how or why it's being used, and I think that's generally -- the concern is that's every industry, it's every business in the world, small, mid to large businesses. But I think the Global 2000 are gonna be impacted the most, because let's just be candid, they have the most to lose, and the data scientists in those organizations are now carrying the largest amount of risk.

**Daniel Whitenack:** \[00:27:31.08\] That makes total sense. I definitely, as Chris has mentioned, have appreciated the candor and the insight that we're getting, in the trends that you guys have been following and examining. I think as a data scientist or AI/ML engineer or whatever I am, what I'm thinking is, you know, as me or as Chris, who's a chief scientist, or as a software developer of AI apps, what are kind of some practicalities as far as "Okay, we get that this is a big deal... Give us some good news. What can we do?" What are some initial practical steps that would help us move in the right direction of being responsible in how we deal with people's data, even if we're not in the EU? What are some first steps that we can take?

**Matthew Carroll:** Andrew, go ahead. I think going through the big steps is just probably the best.

**Andrew Burt:** Yeah, happily. I think one of the biggest takeaways is that what makes for good governance actually makes for good data science. Basically, good governance I think translates into good data science...

**Daniel Whitenack:** That's great to hear.

**Andrew Burt:** Yeah, exactly. It should be reassuring in the long run. I think a good way to think about the GDPR is a little bit of a paradigm shift, which is right now a lot of data scientists end up operating at a little bit of a vacuum, where they say "Here's the project. Give me the data and then I'll get back to you. I'll play around with it and I'll tell you what we can do." That is good in one-off interactions, it just does not scale.

**Daniel Whitenack:** Yeah, you've summarized well so many years of my life... \[laughter\]

**Chris Benson:** Me too.

**Daniel Whitenack:** I used to frequently refer to myself as the data monkey, rather than the data scientist, because I felt like that was more appropriate because of the way I operated...

**Andrew Burt:** Yeah, because you're just kind of bouncing around and climbing things, and the view looks good from here, you climb a different thing...

**Daniel Whitenack:** Yeah... No flinging of poo, so that was good... \[laughter\] But in other ways, yes.

**Andrew Burt:** I was gonna ask, but thank you for clarifying. So I guess the really big takeaway is that if you're gonna do data science at scale and you're gonna run a program, you need to really have a sense of what data is available, how do I get access to that data as a data scientist... You need to have some way of documenting what it is you wanna do with it and what you've done with it, if someone else gets added to the project or if you leave... These are just kind of basic organizational measures to make sure that you can collaborate and that the documentation is there.

If you split that up, what that really looks like is as soon as a project begins, understanding kind of key objectives that you wanna achieve, key objectives that you wanna avoid... Another way of stating that is legal liability, so that's where lawyers can come in and say "Make sure you don't do this, or if you do this, make sure you're gonna mitigate it in some way..."

So that ends up really important, and then documenting it, so people can be added and subtracted from that project. Then there's very specific ways that you can examine the data you're gonna use and control -- Matt used the word guard rails... So kind of setting up some guard rails to think about potential biases embedded in the data, things you can do to try to compensate for it. As we all know, all data sets are biased, so the question is really just trying to prioritize what it is that you're trying to avoid.

I could go on here for a while... I think I mentioned to both of you before we started recording that Immuta is gonna be releasing a white paper with an organization called The Future Privacy Forum, and it's literally gonna be a white paper designed to be a practical guide for managing risk in deploying machine learning models...

**Daniel Whitenack:** That's awesome.

**Andrew Burt:** It's meant to speak to the data scientists and lawyers, and to give some real kind of depth to some of these suggestions.

**Daniel Whitenack:** \[00:32:02.24\] We'll definitely include that in the show notes, so that as it becomes available, listeners are able to find it easily.

**Matthew Carroll:** To deep dive into there, I think as Andrew said, good governance leads to good data science, and they kind of go hand in hand. I think the first thing is - and this is one of the things I learned in the government - lawyers are actually there to help you. They're not there to slow you down. And I think in a lot of these, especially if you're a data scientist that's working in a big organization, starting to align yourself into the governance organization and asking for support early and often is really key.

Understanding that most large organizations have gone through a some sort of semantic context around their data. They know what amount of data they have, and generally where it is, and what are the rules around that, and starting to understand risk levels. So bringing those people in and working in your programs - it seems so simple, but yet when we talk to clients, this is not occurring. It's on a one-off kind of relationship where every so often they ask for it.

**Daniel Whitenack:** Yeah, I've never seen that.

**Matthew Carroll:** Yeah, and it's unfortunate, because the thing that I learned in the government is they will very easily relieve a lot of risk off of you, and then you could start looking at it differently. The risk isn't on you; you've now brought in others - you've gone to counsel, you've gotten a review and you can start looking at that. It doesn't need to be technical, right? A lot of times it's like "Hey, I'm using this data, I'm using this data, I'm using this data, and I'm bringing it together. Where do you think my potential risk is here? Are there any regulations where -- you know, maybe it's not PI, but this is considered sensitive data or not...? Should we be doing masking on this data or not?"

Sometimes just the general rules change when you start bringing data together and mashing it up. So I think early and often bringing governance in and having a good working relationship, potentially even creating a working group to where you review different types of projects and potential risks is part of your development cycle.

**Chris Benson:** That's a fantastic idea.

**Matthew Carroll:** Yeah, and I think once you get to that point, then the second thing is it really comes down to what kind of data are you using? I think a lot of times we just tend to copy all data and then figure out what data we wanna use. We figure out how we wanna analyze a problem and then look at a bunch of data sets and bring it in... And I think at times we could do a much better job data engineering in the sense of planning it out, and looking at it in a generalistic pattern.

If I'm gonna build an algorithm to look at X-rays, do I really need all images with all the organs in there, if I'm just looking at bones? Is there any value of trying to automate a boxer fracture in front of you that had teenager angst -- a boxer fracture is when you punch the wall, or you punch someone's face... Hopefully you just punch the wall, because you're angry at your parents, right? It's a very easy break, and I've been on the wrong end of the wall a couple times... \[laughter\]

**Daniel Whitenack:** We won't go into that story.

**Matthew Carroll:** Yeah, we'll avoid that here... But the point is it's incredibly easy for an algorithm to look at your hand and look at the X-ray and see "Yup, that bone is fractured in such an angle that it's a boxer fracture. Here's the prognosis and here's what we can do for you." Very easy. But you probably don't need to see all the tissue, you don't need to see all these other things in there, where potentially it's like "Oh, there's classification, and there's this, there's that..." Well, why do you need that information? Does my insurance company get that information or not?

\[00:35:50.25\] So these are the leading issues. We see where there's derived information out of the model itself that could potentially be misused against you, so only provide the data that's really necessary. Really plan this out and think it out. Use mind-mapping, like "I only need bone to this. Why do I have any other data in there? Why don't I remove out tissue out of the image itself? How do I isolate the bone?"

Those are the types of things that I don't think people really think through when they're going through their models, because I think they're super positive (which is great) about why they're building something. They're looking at the upside, which is "Hey, I'm gonna be able to solve this problem for a radiologist" and they can focus on really complex issues, not realizing that there's a potential nefarious use of the derived result of that model itself... So how do you keep that out? And then building that exercise into data engineering is just as critical as the data cleansing and the data preparation that goes into the model and feature building itself.

**Daniel Whitenack:** That's super interesting. Maybe you guys have seen this trend too, but I think we've kind of gotten into this trend of kind of pawning off a lot of the intuition around the features in our models into deeper, more complex models that kind of figure it out on their own, and we never really go back and say "Well, these features or this data that we've put in isn't really necessary. Why are we using it? It's both causing us potential compliance issues, but also it's just making things harder because it's more data, and all of that."

So yeah, I don't know... That's definitely one trend I've seen.

**Matthew Carroll:** Yeah, more data isn't better. That's why I've always kind of despised about big data - just because you have a lot of data doesn't mean you should use it. The point is - I think this is just generally good data science; actually, just generally good science... You're usually on a mission to solve or answer a question or solve a problem, and then work backwards - "What do you need for that?" But I think just throwing more and more data at a model for it to figure out intra-model potential patterns and useful features out of the data itself isn't necessarily useful holistically to the consumer. It's useful to you, not necessarily the consumer, and I think that's the challenge - we have to take into account who's in the data just as much as the problem we're trying to solve.

**Chris Benson:** It almost seems like maybe if you look at the AI space versus more traditional data science like just analytics or ETL or visualization, as you talk about feature engineering and the fact that more data isn't always the right way to go - is that a particular concern that I guess we're gonna see in the AI space going forward? Given the fact that we're used to throwing so much data at our models and letting the neural network figure out which features matter... Is that something that AI practitioners need to be particularly concerned about do you think, or is it really just the same level as the others?

**Matthew Carroll:** I'll let Andrew chime in on this, but we have to stop being lazy. Lazy is bad. We're engineers for a reason. There's a process, and laziness leads to bad actions, and there are bad actors out there. And as we move to a world which I think is fantastic, where machines can provide the necessary intelligence to augment human decision-making, it's on us collectively to ensure that we hold ourselves to the highest standards...

Just randomly throwing a bunch of data in there just because we are able to collect it, process it and make decisions on it doesn't mean it's the ethically right decision. I think what I'm concerned about is - and maybe this is just a broader theme - people are really afraid of the Amazons of the world, the inertia behind an organization like that, and I think people are willing to take shortcuts to try to catch up through augmenting business operations through machine intelligence, whether that's AI or just a simple linear regression...

\[00:40:12.17\] They're trying to automate as much as they can, because they feel like that's the only way they can compete against an Amazon, so I think that's gonna lower the barrier of entry to deploy into production, and that's my biggest fear, honestly... I'm not worried about Skynet, I'm really not; I'm more worried about we're gonna start making bad decisions without understanding the potential repercussions to the direct consumer... Not that AI is gonna take over, but rather our AI is incorrect and all of a sudden we're not providing mortgages to a subset of Detroit, or insurance premiums are going up for the 30k-60k/year socio-economic sector.

We tend to, based on the data we have, isolate and polarize, and that's based on bad data governance, in my opinion.

**Chris Benson:** So you might summarize it as bias versus Skynet...

**Matthew Carroll:** Yeah, I think inadvertent bias. There's always bias in our data... Otherwise there's no statistical relevance, right? But I think bias for the wrong reasons, without us knowing it, is potentially increased based on the more data we throw at it... Because it's not possible for humans to run through all of the data, and I just don't think that algorithms aren't good at looking at risk where humans are, so we need a good way to quantify the risk based on the type of model we're using, on the type of policies and the existence of regulations and law on that data, and the potential negative outcome of the algorithm itself. We need to merge that together to really think about quantifying risk in a different way.

The days of perimeterization around data to quantify risk are over. The data is too big and vast and complicated, and so it's really outcome-based decision-making is really our future in the AI space, and it all starts with good governance and understanding what data is going in, and why we're using it, and based on that, choosing the right models to attack the problem.

**Andrew Burt:** Yeah, and let me just add in... I think what Matt said is 100% correct, and one of the reasons why I think more data is not just kind of blanket "always better" is I am worried about both bias and any potential failures, and I think what we're looking at is a world in (let's say) 2-5 years (mid-term future) where no one fully understands where all the models that are deployed have gotten their data from.

So if there's a problem, it's gonna be really hard to identify exactly why that problem occurred. So I think the type of tech debt that we're looking at when we're in a world where machine learning is something we're really relying on is gonna change the paradigm. It's gonna mean that we need to do a lot of this governance and risk management up front, otherwise we simply won't be able to fully understand failures when they start to emerge.

**Daniel Whitenack:** Yeah, this is great. I thought for a long time -- I mean, software engineering and software engineers have had a long time to kind of come up with their standards and process around responsible software engineering, and we haven't really done that with AI and data science, and I think a lot of what you guys are saying is super relevant to that discussion, and are great takeaways - be ethical, don't be lazy with your models and your data, talk to your lawyers early, write docs (which everyone should be doing anyway; docs with regard to explainability), think about and quantify fairness on the outcomes and policies that you're trying to enforce in your outcomes...I think all of these are just super helpful.

\[00:44:13.29\] I know we only have a little bit of time here to discuss all these things; I think you guys have done a great job at giving us kind of a crash course into regulation around AI and practical steps we can take.

Where can listeners follow up? You mentioned that there's this white paper that you guys are coming out with; I'm super excited to read that. You mentioned some institute that was associated with that as well... What are some other places, if our listeners who are out there in the trenches, developing models and developing software - where can they start out there to try to get some more practical info about this that they'll be able to consume and hopefully bring back to their teams in their discussions?

**Andrew Burt:** Yeah, sadly there's not a lot out there, and that's one of the reasons why we wrote this white paper and why frankly we're so enthusiastic about it... Because I think there's this real need for guidance, practical guidance, and it's really hard to find.

So that's gonna be released - the plan right now is mid-June. The organization we're co-releasing it with is the Future of Privacy Forum, and that'll be on the Immuta website. We're giving a talk at Strata New York on basically exactly this, on practical ways to govern machine learning. I believe that's in early September.

Matt, are there other places you'd recommend that listeners go to get more info?

**Matthew Carroll:** No, I'll kind of second that - there's not a lot on the open web, there's not a lot of formal reading out there. What I would say is this though - in each domain there is an abundance of proper governance frameworks, specifically to verticals, different regulations around management of PI, and I would say look internally... You know, for those who aren't individuals or small companies, but reside in large companies, I think the place to start is meeting with your internal governance team. Ask what type of documentation exists out there, and then also talk to application teams as to what has their documentation process been, what is their standards as to how they work with governance teams and with internal data stewards, and potentially even internal data protection authorities. I think the data protection officer is becoming a real title now, where people actually -- that is their job. So I would say look internal first.

Externally, of course, there's this thing called Google and you can search it, but yeah, Andrew is right, it's a shame, but there isn't a lot out there to really get started.

**Daniel Whitenack:** Alright. I appreciate that. Definitely come see these guys at Strata, check out their white paper... I know that I've learned a ton from them already, and hope to see you again at a conference soon and maybe go out afterwards and avoid those boxer fractures, for sure. \[laughter\]

I appreciate your guys' wisdom here, it's been super helpful for me.

**Chris Benson:** Thank you so much.

**Matthew Carroll:** Thanks, gentlemen. I appreciate it.
