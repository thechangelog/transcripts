**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technologies strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing fine. How are you today, Daniel?

**Daniel Whitenack:** Doing well. As we're recording this -- it was in the U.S. the day after a long holiday weekend, Labor Day... Did you get to spend some time with your family and relax a little bit, Chris?

**Chris Benson:** We did, we had good family times, vegan hot dogs, and such as that... Excellent stuff.

**Daniel Whitenack:** Yeah, yeah. We have a specific brand of veggie dog; afterwards we'll have to sidebar and discuss that.

**Chris Benson:** My wife's come up with a special recipe, so we can share that...

**Daniel Whitenack:** Oh, wow.

**Chris Benson:** Yeah, it's good.

**Daniel Whitenack:** Definitely, yeah. And I spent some of the weekend talking to my brother-in-law; if you've been listening, listeners might know that my brother-in-law lives with us, and we were talking about the new NVIDIA cards that were announced, and he's already spec'ed out a machine, of course. He's building a gaming machine... But we were talking about the price points and everything, and he was saying how much lower of a price you could get the level of the previous generation, which was way more expensive... And I was looking a little bit at the 3090 and what they're doing, and everything... It's pretty exciting stuff, I have to say. Are you following that at all, Chris?

**Chris Benson:** I am some, absolutely. As you're talking there, I've gotta ask - so is your machine, the one you built, all working and happy and everything?

**Daniel Whitenack:** Yeah, it's all working. I did a few different models on there, I trained those for a project we're doing at SIL, and that worked really well. No problems yet. There's not much installed on it. I basically have Docker installed, and that's how I'm running everything... So just using the published TensorFlow images and NVIDIA images and then training from there. It's worked out pretty good so far.

**Chris Benson:** \[00:04:04.14\] At some point you need to share your specs, and stuff...

**Daniel Whitenack:** Yeah, I will. I shared them in our Slack channel. Listeners know we have a community Slack channel, and you can find that at Changelog.com/community. We discussed it a little bit there, but I'm definitely gonna have to do a legitimate blog post. I just haven't done it yet, shame on me...

**Chris Benson:** Sounds good. Waiting for it.

**Daniel Whitenack:** Yeah, definitely. I'm pretty excited -- if you remember, Chris, way back in the day, actually episode four, we had Andrew Burt on. At that point we were talking about GDPR, and regulation, and some other things as they relate to AI... And we're really excited to have Andrew Burt and also Patrick Hall with us today. They're both from BNH.ai. Andrew's a managing partner there, Patrick is a principal scientist. This is a pretty interesting and new law firm focused on AI and analytics and other things, which is pretty cool. We'll talk about that a bit... But maybe first let's just get some introductions. Andrew, do you wanna start us out and tell us a little bit about your background? Remind us about your background and how you ended up where you're at now.

**Andrew Burt:** Yeah, happily. And thanks both for having me and us on. It's fun to be back and see how much things have changed in the last couple of years.

**Daniel Whitenack:** Yeah, we're still going. It's been crazy.

**Andrew Burt:** I know, yeah. You're still going. Despite all of the fame. The fame, and the fortune...

**Daniel Whitenack:** \[laughs\] Right.

**Chris Benson:** What to do -- how to find podcasting set up in your mansion.

**Andrew Burt:** Yeah. I mean, it's just really nice to see how it got to your guys' heads, you know... \[laughter\] Well, anyways, my background - I'm a lawyer and also a technologist. I've spent many years working at the intersection of law and risk in technology. I spent a few years for the FBI Cyber division, since 2016. I've also been with Immuta; last time in my capacity is with Immuta... And basically throughout all of this time I have been really the only lawyer in a room full of data scientists and technologists, and people wanting to do really cool stuff with data, oftentimes sensitive data, or data in regulated environments, and it has brought me to this conclusion which I've seen over and over, which is that the biggest problems with AI and machine learning in my view are no longer technical. In fact, a lot of it to me seems like it's been productized.

The biggest challenges - and I've seen this in practice, being the only lawyer in these rooms, is legal, it's ethical, it's policy related... So I've started to see these really big challenges stand in the way of really exciting technology projects. So all of that led Patrick and myself to start BNH.ai, which is a boutique law firm based in Washington DC. It's the only place in the country where lawyers and non-lawyers can actually jointly run law firms. We can talk about why that is, and why that exemption exists, but really we're the first to do this with data science.

Our core thesis is that the only way to do data science right, the only way to really get all the value and minimize all the risks is by really comingling these types of expertise - the legal and the policy really closely with the technical and the data science. So that's the 50,000-foot nutshell. We launched right at the end of March, so we're just about five months into our journey, and it's been a lot of fun.

**Daniel Whitenack:** Awesome. That's super-great. We're also really excited. Patrick, thank you for joining as well; it's great to meet you and get the connection through Andrew. Could you tell us a little bit about your background and how you ended up working together with Andrew on this?

**Patrick Hall:** \[00:07:49.23\] Yeah, of course. I'm happy to be here. My journey was machine learning. I started many moons ago at SAS Institute in North Carolina, and I think that that was really formative for me. It seems like some data scientists don't even know about SAS anymore, but it's a roughly 3 billion dollar company that's been making billions of dollars off analytics and machine learning and AI for decades... And just being a part of that organization, which largely lives outside of the ML hype sphere, but makes more money than almost any other ML company, and just this awareness that there was a right way to do things, that's decades old, was really formative for me.

After that I joined this sort of topsy-turvy ML startup world at H2O, where I kind of led their efforts in responsible machine learning for 3-4 years, and we came up with a decent product. And I think, like Andrew, I came to the same conclusion, but I saw, like Andrew said, not only does the technology exist to sort of make machine learning more transparent and more trustworthy, hopefully more fair, but it's already being productized, so it's reaching a certain level of maturity... And really, what I see - like Andrew said, I think the next round of challenges for machine learning are not gonna be technical, they're gonna be policy and regulation and legal, and human interactions with AI and machine learning, and that's why I joined Andrew on this journey, because I saw a lot of the same things he did, and it was an easy pitch, actually, once he explained it to me.

I'm happy to be here on the podcast, and I'm happy to be here with BNH.ai.

**Chris Benson:** Thank you very much for joining us. It's nice to meet you. Having Andrew back is like having an old friend back, from our very beginning, as he mentioned... Andrew, you've touched on it already a little bit in your intro, and Patrick, you did as well, but can you -- you're at this really unique position of you have the entire landscape of law with the entire landscape of AI at this juxtaposition where they are starting to merge. Last time you came you gave us the general data protection regulation deep-dive as part of that, and we talked about the fact that there wasn't a whole lot in terms of laws and regulations out there... And then on top of that, since then we've really gotten deep into AI ethics. In my own case, I was leading AI ethics for Lockheed Martin for a while. I just stepped out of that position, but I learned a lot. So much has happened since we've had you on last in this space... Can you together, guys, describe what the space looks like, and what some of the complexity with the landscapes at large, given so many things touching, ethics, all of these together?

**Andrew Burt:** Yeah, happily. I'll start, and then there's a danger of me going on too long, so Patrick can jump in. Please do so. From my perspective, I guess from a very high level, what I have seen is the prospect of AI and machine learning - and for now I'm just using those two terms interchangeably; we can dive more into why we might wanna use one term versus the other.

**Daniel Whitenack:** I'm very happy with that, as Chris probably knows from previous of my discussions. Other people might not be so much, but... You're in a safe space.

**Andrew Burt:** Okay, cool. That means a lot to me. So I think the prospect of what AI can do, the value I think has only begun to increase over time, and I think there's a wide recognition, both in industry and by governments and regulators... And the way that I think about the value is that what AI does really well is it scales decision-making in volume and speed. So if you just think about that - we have this tool, it's been around for a while (let's say in the last five years), the value has become more clear, and it's become used more and more. You have this thing that can make huge amounts of decisions at really high speeds. So the progression is almost natural.

\[00:11:59.07\] So as that type of tool starts to be used more and more in the real world, there are a huge amount of concerns that are associated with it. The slightest bias in something like that ends up being magnified. The slightest security bug can be magnified. What you have is really the same things that make this technology so powerful, which is it can do so much in such little times, so efficiently, also mean that really any of the risks end up being greatly magnified. So I think over the last few years there has been this recognition that if we don't get this right, if we really don't refine what it means to manage all of these different liabilities, we're gonna be in a world of trouble... So that's what I have seen.

There's a really wonderful paper from Algorithm Watch called Paper Tigers, which - I can't remember the number, but it actually studied something like 120 (maybe more) ethical AI frameworks released in the last couple of years... And the title is called Paper Tigers because these frameworks don't really have teeth. So to me, the rise of the corporate ethical AI framework is a really good sign that we have an issue; something is wrong. On the other hand, studies like that, from Algorithm Watch, I think are also kind of indicative of the fact that we are nowhere close to solving it... Anyway, that's what this landscape looks like, from my perspective.

**Patrick Hall:** I'll jump in really quickly. First, I wanna echo Andrew's last statement, because I think that as a technologist, when I say things -- I think the technology exists to help with some of these problems. I wanna be very clear that technology alone will never solve these problems. Technology is just one of many necessary pieces. But to add on to what Andrew was saying -- and I also need to be very clear; I love machine learning, I've made a career of it, I don't bring these things up just to make data scientists feel bad... I've been sort of studying different failures in machine learning and AI and algorithmic systems, and if you watch, I see one or two every week now. And that's been going on for almost two years.

And so I study these things to learn about how these systems fail, so that we can help our clients and help other people not have the same failures... But surely, governments must be taking notice of the same level of AI incidents. So I think that's another reason why we see companies and governments -- so just this year, organizations like the Federal Trade Commission, and Financial Industry Regulatory Authority (FINRA) have issued these sort of long treatises on the uses of AI that Andrew and I think is sort of forecasting or telegraphing future regulation.

Andrew brought up the idea that the corporations are waking up to this, and I certainly agree with that, and I think that governments are also starting to notice the way that AI fails and react to that.

**Chris Benson:** I wanted to ask a follow-up to that, and that is - you know, when you talk about the failure of ethical frameworks for AI... They're very limited. They're aspirational. They kind of talk about these ideas that you want to constrain your operations with. But as you pointed out - I think the phrase you used was they have no teeth, and I certainly agree with that... I think one of the challenges that I'm expecting over the next couple of years is as organizations either create or adopt frameworks to utilize for that, the devil is gonna be in the details. The devil is in how you integrate that in with your legal structure at your organization, how you integrate that in with your operations and how you serve your customers...

So there's a great deal of work to do in terms of figuring out how you customize that framework down to your organization's specifics. Do you have any guidance on that at large? Would you agree that that is the case, and how would you advise organizations to think about it? So I've adopted a framework; what's next?

**Andrew Burt:** \[00:16:05.14\] Honestly, that's exactly why we exist. We just see this huge gap between the people, thinking about the laws and the policies, and then the data scientists and the engineers who actually have to go operationalize it. What we've seen in practice time and time again is these big frameworks, usually called Ethical AI, sometimes Trustworthy and Responsible AI - it makes everyone feel good and they're aspirational, and it's great, and then it gets to the folks in the trenches, in the business units, and they say "This is great, but I can't' do this." There's a chasm that we need to cross.

**Chris Benson:** It's hard.

**Andrew Burt:** Yeah, it's very hard, and so that is why we exist. I think one of our big things is that AI has been around for a while, and we don't need to start from scratch. There are a host of regulatory actual oversight documents, and then also guidance documents that actually are tried and tested; some are five decades old, dealing with discrimination, some are about 15 years old, just dealing with \[unintelligible 00:17:00.19\] risk... So there are actually lots of places that we can start with, and as a law firm, that's what we start with - how have regulators, especially in finance and in anti-discrimination, what have they done? What does the case law say? And it turns out there's a lot that we can work with. So that gap, that chasm - what it looks like is this huge gap - is actually not that deep and it's not that wide. I don't' wanna minimize how hard this can be, but there are a number of practical things that organizations have been doing and can do.

For whatever reason - I think largely because the lawyers and the technical folks just don't talk enough to each other - I think a lot of these methods are under-appreciated.

**Break:** \[00:17:43.23\]

**Daniel Whitenack:** I'm really interested -- I know that you came out with some things recently around an AI incident response checklist, which I'm super-interested to dive into the details a little bit... But before we do that, I'm just kind of curious to talk generally about AI incidents. Where my mind is going with this is -- like, we have some experience with software incidents, and there's certainly software that drives things that can make a huge impact on people, like software in a medical setting, or in a medical device or something; it's not AI, but if it malfunctions, someone's health could be at risk. Or you could expose private information or something like that... There's those things that definitely do exist out there. What are the sort of liabilities about AI applications in particular that might differentiate them from some of these things that maybe we've been dealing with for some time. Patrick, do you have any opinion on that?

**Patrick Hall:** \[00:20:05.02\] Yeah. And you know, I'm not a lawyer, so I'm gonna have to let Andrew comment on the legal liability side... But I can say - we see in the tech media and broader media, we see a big focus on discrimination. And of course, discriminatory algorithms, AIs is not something that we want out there in the world at all... But we also try to direct people to other problems, like privacy (you mentioned), data security (you mentioned). So when I look at some of these AI instants I've been tracking, I'd say they mostly break down into maybe four categories, discrimination probably being the biggest one, and we've seen some very troubling things there... But also consumer privacy, data privacy, security, people essentially being kind of sloppy with sensitive data that's used to train AI systems, or data that's generated by AI systems...

And then a final one that I see fairly often too is this idea of no intervenability in a machine learning system, or sometimes it's called "Computer says no", where the main failure of the algorithm was just that it's a black box. It's making decisions that impact people's lives that may or may not be correct, but the consumer of the decision has absolutely no ability to appeal the decision. I think that's a huge mistake, and another type of AI incident that I see fairly often.

So I'll leave it at those four categories that I observed, and maybe let Andrew chime in on the legal liabilities. Is that okay?

**Daniel Whitenack:** Yeah, that's good. I'm curious on that last one actually, because it's an interesting category... And of course, we've talked about the sort of interpretability issues and other things on the podcast before... In that last category, in terms of the incident itself, is the problem mostly more weighted on the side of interpretability and not digging into the model, or is it more on like "The computer has made the decision, and ther's no way to back out that decision. It just happens." Like, a person is denied insurance because they're deemed high risk, and there's no way for them to (like you say) appeal that, or something. Which side of those is it more weighted on?

**Patrick Hall:** I think what I see in practice is it ends up being the latter. And this goes back to the comment of technology can't really solve these problems. So the two biggest incidents in my mind when I hear "Computer says no", or no intervenability, no appeal or override capabilities is Compass, which is a risk assessment instrument that's used to help in pre-trial and parole decisions... And then the recent A-levels scandal in the U.K, where hundreds of thousands of students had their grades adjusted by an algorithm. And in both these cases it seems that the algorithm itself was at least well-tested and well-understood by its operators, but the way it was presented to its consumers was as this sort of unappeasable voice of God that's gonna ruin your life.

I've spent three years deep, deep, deep in explainable machine learning and interpretable models. I sadly don't think that that's the problem here. I think that, of course, that can be a problem, that the algorithm isn't interpretable, and that's something that I object to in almost all cases... But the big incidents that are coming to my mind are more process problems or more human problems.

**Andrew Burt:** Just to add to that, I think there's certainly this problem where there's an algorithm that's appointed in a public setting, where there's almost this tension between the authority of the algorithm and then everyone who's subject to it... And certainly there's a problem there. But just to get more operational in terms of day-to-day, one of the things that we see in practice involved in AI incident response is that that same dynamic can also happen between the developers of an algorithm or a model, and the model itself once it's deployed. So if something wrong happens -- so it's not just consumer decision to model...

**Patrick Hall:** \[00:24:19.03\] Really good point.

**Andrew Burt:** ...it's also if something bad is happening - if there is an incident, if there some instance of discrimination or potential hacking or data breach, then we have this problem where... Patrick calls this debugging, and I think it might be worth giving Patrick a proverbial soapbox and let him talk about debugging shortly... But if there is a situation where we have potential liability and the data scientists actually need to fix it, we have the same type of clash, and what we've seen in practice is it can take an extraordinary long period of time for the data scientist to 1) make the decision in the business units "Do we pull this from production? Is the liability greater than the business value, so should it be pulled from production? What do we do? How do we debug it?"

I think once a model goes live, so to speak, there ends up being a very similar dynamic... So we see on a practical basis, in terms of thinking about risk and liabilities, we see a huge number of organizations doing things that are much smaller, decisions at much smaller scales, struggling with this, when something goes wrong.

**Andrew Burt:** And just really quickly - building out that AI incident response plan, just like you build out a response plan for other mission-critical computer systems, can help address a lot of those questions that Andrew is bringing up. A lot of these questions that we see teams struggling with internally, if you actually spend the time to generate that checklist, then you'll have better answers for this when the time comes.

**Daniel Whitenack:** Yeah, and you mentioned the debugging thing, which I definitely resonate with that a lot, so I don't wanna lose that, for sure. I know a lot of times when I talk to teams - I do some advising and training and stuff, and a lot of times I think people have in their mind like "Well, we trained this model. We wrap it in our API, or embed it in our API, and it operates." And the unit tests are around the API, and like "Oh, can I process this JSON payload?" It's not around the model itself. So apparently, that's something that you're passionate about, as Andrew alluded, Patrick... So Patrick, do you wanna say anything about that in terms of debugging, and the state of debugging, especially around incidents, when something goes wrong with an AI model or something unexpected happens?

**Patrick Hall:** Yeah, so if you guys will permit me, when I'm done chatting I'll put two links in the Zoom chat...

**Daniel Whitenack:** Yeah, we'll include those in the show notes as well, for the episode...

**Patrick Hall:** That'd be great. I hope they're useful. We've gotten some positive feedback on them. So yeah, I think there's two levels of debugging, two major categories of debugging, and you brought up one where you said you unit-tested the API. Great. Please, God, do that. I'd include that in just normal IT system debugging. Unit testing...

**Daniel Whitenack:** Yeah, something people have been doing for quite some time.

**Patrick Hall:** Yes. But - and I can't explain this aside from sort of a sad level of hype and exceptionalism in data science culture - people in general, in my experience, are failing to apply general software-based best practices to their machine learning. And like I said, I can't explain this except for sort of a sad and regrettable cultural phenomenon. So that's one main issue I see.

**Chris Benson:** Patrick, I'll say - I deal with that every day, trying to get our DevOps folks and our developers working with ML--

**Patrick Hall:** It makes no sense. It makes no sense to me. So machine learning is essentially -- you know, given its complexity, given its \[unintelligible 00:27:55.22\] characteristics, it's likely even more volatile than some other mission-critical software assets... And so why data scientists are given a pass on basic software quality I'll never understand. So that would be one thing to remedy, just ASAP.

\[00:28:15.14\] And of course, we debug our other mission-critical software assets. So we should be debugging our machine learning systems just using basic software, just best practices. So that's part one of model debugging. And I truly believe that there's no such thing as responsible AI or trustworthy AI without basic software best practices.

Then we get into actually testing the machine learning itself, and that's more difficult and much more sort of a new field. And I've got some ideas around that; I'm certainly not the only one... There was a conference workshop at ICML. It must have been last year, when we could still fly, or maybe two years ago - I'll put the link in the chat - where some of the world's leading academics got together and discussed this.

So I would say that just in general, debugging of the machine learning system itself comes down to - at least from a practical standpoint, sort of sensitivity analysis, "Where is my system unstable?", residual analysis, "Where is my system making errors, and can I try to understand those and reduce those?" Security audits... We're well aware that there are now attacks that directly affect machine learning systems, so doing red teaming, and bug bounties, and security audits on those known security vulnerabilities of ML... Of course, discrimination testing and discrimination remediation is a big one here...

**Daniel Whitenack:** Yeah, this is all resonating with me so much... I know Chris and I have talked, and I have conversations every day with -- you know, you're talking about probing the sensitivities, and all of that...

**Patrick Hall:** Yes.

**Daniel Whitenack:** It's so important, and actually, in a lot of cases it doesn't require that much extra work... And I think something that people don't realize as well, to some degree - a major component of this is doing these sort of tests actually allows you to be a better data scientist, or produce better work... Because you actually understand the behavior of your model more, and you're finding those places where it misbehaves, and you're able to deal with those in a sort of confined test space, and the end product actually becomes better; your model is actually better in the end, and more robust.

**Patrick Hall:** Thanks for allowing me time to pause and google my last model debugging practical thing, which is benchmark models. Having a simple, trustworthy, interpretable model to compare your more complex against I think is another super-important thing there. Just to echo your comments, sometimes it's a lot more work, sometimes it's not a lot more work - it will make your work better.

But seriously, when we're talking about data scientists who are on average paid very well, even if it's a lot of work - you know, with great power comes great responsibility, and we just need to start taking more responsibility for the systems that we're making.

**Chris Benson:** I actually wanna swing things back over to Andrew for just a moment... Andrew, I've been sitting here as we've been talking, pondering something that you said a few minutes ago... You were talking about case law, and I guess that's opposed to statutory law; things that I don't normally think about on a day-to-day basis, but I know you do...

**Daniel Whitenack:** Can we just define those terms, too? Because I think there's probably a lot of people that are maybe confused a little bit...

**Chris Benson:** And then I'll ask after that. Go ahead.

**Andrew Burt:** Okay, happily. Yes, so especially in the U.S, which is a county law system, the way that laws work and the places that laws come from vary. So there can be a regulatory agency, which will propagate rules. You can think of like the FDA; they are in charge of food and drugs. You can have congresses and state legislatures, which will pass a law that is like "Doing X is a crime. So don't do X, or bad things will happen."

\[00:31:53.02\] And then there's also case law. And case law kind of evolves over time from the courts. A case law basically arises on a decision-by-decision basis. So there'll be a case, there'll be a controversy that lands some party in court, and then the decision that's made as that issue is being resolves comes from just a larger body of case law.

One of the things I think I was thinking about in the world of anti-discrimination is we have all of these regulations, both from regulatory agencies, and we have statues from Congress saying basically don't discriminate, and don't discriminate in these environments... But it turns out it's really difficult to figure out exactly what counts as discrimination in a society that's really just marked by profound inequities.

So a lot of the give and take and a lot of the figuring out what exactly does this mean and how do you balance the usefulness of a model with its potential discriminatory impact - that weighing comes from case law and it comes from courts. So we can look at the guidance that comes from government agencies as we try to figure out what the right way to approach these issues are... And then we can also look from specific cases and say "Okay, at this one specific time this group ran into an issue, and here's how the judiciary solved it."

Hopefully, we can get the Schoolhouse Rock!, the Bill - we can feature that also in the show notes...

**Chris Benson:** \[laughs\] You're gonna sing that at the end of the show, right?

**Andrew Burt:** Yes, exactly. And anytime I talk to anyone, I put on a cane and a top hat.

**Chris Benson:** Perfect, okay. You'll have to get pictures of that to \[unintelligible 00:33:29.02\] Anyway, so you've already covered part of what I was gonna ask, and that is - you know, we've talked about the fact that there's not a lot of AI-specific statutory law... And so it sounds like you really start with regulation and case law and kind of connect that in with the AI data context; is that a fair way in terms of how you would operate in this space?

**Andrew Burt:** So just like Patrick can't explain why data scientists hold themselves to different security standards than traditional software developers, I can't explain why there isn't more awareness of just the liabilities that existing laws plays on AI. It's true there's no national AI law; there are very few laws that say "Those creating artificial intelligence shall not do this." So you're right that it's not that direct. But there are a huge number of ways that existing laws impact AI systems.

So one of the things that I feel like I say over and over again is that the liabilities are not new, and we've been dealing with a lot of these for a while. I'm happy to list some... I think the three most obvious are security, and privacy, and discrimination. If an AI model discriminates, serious liability can ensure. If there are privacy violations -- so basically, those can happen in all sorts of ways, but just as simple as using data for the wrong reason when it was collected for one reason, but then used to train a model for another; that's a privacy violation. Security violations - I think it's fairly intuitive how you can... I think at a high level the attack surface for AI is just very much different than traditional software. So an adversary might be able to manipulate the model, or steal data, or gain access... So those are kind of the intuitive things, and there are laws governing all of that.

At the same time, there are things as basic as negligence standards. So if you create an AI model and it goes and someone is harmed, either physically or emotionally, or something breaks, we have all sorts of negligence and product liability laws. And just because they don't say AI doesn't mean that they're any less applicable. There are a whole host -- and I should say, new laws are clearly coming, like Patrick said. The FTC in particular, the commissioner gave a speech; I actually have it somewhere on my desk, I can pull it up. But she gave a speech in January, and the FTC has been doing every couple months something similar... And she basically said "We're coming for AI. AI is responsible for a huge and growing amount of harms", and the FTC is gonna regulate it even more.

\[00:36:13.04\] So new laws are definitely coming, and I think that that is not controversial to say... But the laws on the books right now already do impact AI quite significantly.

**Patrick Hall:** And I think I can add that some of the work in just the very first months of our law firm has been AI violating local laws. Not these big, federal ECOA (Equal Credit Opportunity Act) or FCRA (Fair Credit Reporting Act), but concerns about AI violating more local laws that I never would have thought of. I mean, Andrew probably thought about it, but I never would have thought about it.

**Break:** \[00:36:56.25\]

**Daniel Whitenack:** We've got into a little bit of the sorts of liabilities and incidents that can happen, and I'd love to kind of switch gears a little bit and talk about this incident response checklist that you've developed; I think that's a pretty cool thing. And maybe we could start out by just asking how this came about. Was this something that you envisioned even before starting the law firm, or did it come out of your initial conversations with clients, or how did this develop as something useful?

**Andrew Burt:** This was not the first thing we had in mind when we launched the firm. I think we assumed that we would be involved in lots of preventative work, way before something back happens. And frankly, coming out of the gate, we started to see that people were reaching out to us once something bad happened.

**Daniel Whitenack:** Interesting.

**Andrew Burt:** Frequently. We don't recommend it. Call lawyers, call risk folks before you're in trouble.

**Patrick Hall:** When you start building a critical machine learning product. That's when to call legal oversight, ethics people in.

**Andrew Burt:** Yeah, so we very much want to help \[unintelligible 00:38:57.05\] us as an example, we wanna help folks way before we're actually needed. What we've learned is sadly that's not how things work in practice, and very frequently it takes something bad happening for data scientists and lawyers to say "Oh, crap. We have a gap."

I used to work at the FBI Cyber division. I actually got certified as a traditional cyber incident response handler... So I was very familiar with the six stages of incident response. And one of the things Patrick and I did very early on is we went through the traditional textbooks that I'd been trained on, the traditional incident response, and we said "We're gonna look at all of the bad things we're being exposed to, that we're seeing clients struggle with, and all of the other liabilities that can happen with AI, and we're just gonna go through and see how does current incident response practices measure up?" And also, in our experience, the answer is they don't. AI is shiny, new and different, and there's this hype cycle, and as a result, the incident responders - it's just out of their purview.

\[00:40:03.00\] So we went through and we realized that there could be a very severe AI incident, creating huge amounts of liabilities. In fact, one that we are involved in now is for a Fortune 100; the board is deeply involved, the CEO's butt is on the line... And we went through the traditional incident response, and you could go through that, checkmark by checkmark, and everything would be okay. They wouldn't have even known anything was wrong with the AI in question.

That kind of woke us up to the fact that this is something different, this is something new, and also there's really no guidance on how do you respond when there's an incident... So we put this together.

**Patrick Hall:** And we love model risk management practices that are mostly in financial services, and highly related to this guidance from the Federal Reserve called SR 11-7, which is a masterful treatise on model risk management... Neither did model risk management as it exists today - I'm sure it will mature to include this - but model risk management as it exists today also did not include exact ways to react to AI incidents. So there was nothing in traditional cyber-security response, and there were things in model risk management that would help, but nothing that actually told you how to respond or to prepare to respond.

**Daniel Whitenack:** I'm curious, what were, as you went through those things that are existing and best practices that are even developed, what are a couple examples of where maybe existing incident response plans just wouldn't cut it, or would leave something out in terms of AI and machine learning?

**Andrew Burt:** There are many ways that there can be AI incidents, and I'm actually getting a little concerned that I think people are just only assuming that the worst that AI can do is discriminate, because there's so much in the news... And frankly, about 15 years ago there weren't mandatory breach reporting guidelines; there are legal requirements now that say if there's a breach or a hack, you need to report it. So now we know all the bad stuff that's happening. Before those, no one really did, and we're in an analogous situation with AI, where all this bad stuff is happening, but there's no incentive for anyone to share it. So the public is in the dark.

So at the risk of doubling down on discrimination, let's say you have an Apple/Goldman situation, which - their credit model was reportedly discriminating females... There are many different ways that AI can discriminate, but let's just say you have something that's discriminating; let's say it has been deployed and exposed to hundreds of thousands, a million consumers. The question is how do you know that that model is discriminating, and how do you know the depth of that discrimination? So that would be an incident.

Let's say you have a model that's been deployed against a million people, and let's say 20% of those decisions have been in some shape or form discriminatory. That's bad. There's lots of liability, it's a huge incident. 200,000 people. In practice, we're seeing that the numbers are even higher. But huge amounts of people can be impacted, and traditional incident response would say "Okay, well is the model available? Has its integrity been broken? Has anyone breached the confidentiality? Is the data being used in line with privacy policies?" All the traditional questions just don't get at this really huge liability.

So what can happen in practice is an organization will deploy a model like this, and then frequently, the media will discover there's something wrong, or there's be a Twitter posting saying "Wait a minute... I'm a member of a disadvantaged community, and my spouse is not, and the model treated us differently." And then suddenly the sky is falling on these organizations. So that model in itself is a signal that something's broken.

**Patrick Hall:** \[00:44:03.07\] I can summarize my comments really quickly... Typical computer incident response doesn't address machine learning security yet, in what we saw. It may soon in the future, but it doesn't yet. And then model risk management typically - not in all cases - doesn't address security and privacy and in some cases discrimination issues, like Andrew mentioned. So there's just kind of a gap in the two main practices... Which are both great; we're not saying anything about these. They're both great, but they just have a little bit of a gap when it comes to AI. So I think that's where that AI incident response checklist comes in, because we try to fill in those gaps.

**Chris Benson:** We've talked about the checklist itself, but one of the comments you've made a little while ago was the time to connect with us is really before that happens.

**Patrick Hall:** Yeah.

**Chris Benson:** So if you're a company out there and you have limited resources, a limited budget, and you're trying to justify why they should engage you before an incident happens, to try to work through their operations ahead of time, what are some good justifications? What are things that you've seen, where you're like "If you come in ahead of time, you're gonna save money, you're gonna save a lot of heartache"? How do you approach that?

**Patrick Hall:** I'll try on this one, and Andrew can kind of jump in and correct me... So one, all models are wrong, some models are useful. Your machine learning model is going to be wrong. So when it's wrong, something bad can happen. So the question is really "How prepared are you for that bad thing to happen, and what will the cost in terms of human value or monetary value be when that bad thing happens?" So we try to just sort of gauge AI incidents by the organization's preparedness, and by the materiality of the incident.

So your machine learning model will be wrong, so you just have to get ready for that. That's where I'll leave it, except to say that in our experience it's much cheaper and much easier to deal with it before you're on the frontpages of New York Times, before you have letters from senators. It's a very reasonable expense, and companies are probably already budgeting for, in their traditional software budgets... Whereas it can explode on the other side of the incident. As Andrew likes to say, on the right side of boom, the cost can explode, because then you're talking about reputational problems, potential regulatory problems, potential litigation problems... So I'll let Andrew chime in and correct me if I'm wrong on any of that.

**Chris Benson:** The right side of boom...

**Andrew Burt:** Yeah... So in the national security world there's a left of boom, right of boom. Boom is the bad thing, and left is before and right is after. So your question is one of the most frustrating parts of some of what we do, and I think in terms of folks in information security and data protection writ large, which is there's kind of this intuition, "Well, if something bad hasn't happened already, why should I be spending time and money on it?" And I think that is even worse in the world of AI, because AI is subject to so much hype... And we still see people who have this kind of belief "Well, my AI could never be wrong. My data scientists are so expensive, they could never do --" And honestly, it's a real problem.

So what we typically say in practice to our clients who haven't yet had a bad thing happen, \[unintelligible 00:47:39.14\] - well, there are two answers. One is, like Patrick said, you need to at least be prepared for the bad thing to happen. You need to know what the bad thing is, so that when it happens, it doesn't occur for a year until someone tweets about it, and then there's an investigation. So you need to be able to know what it is that you wanna avoid, how are you gonna be looking for it and measuring it, and then what are you gonna do when you measure it.

\[00:48:09.11\] That's the starter package. That's really the baby steps, and any organization deploying AI needs to have those things worked out. One, it's the right thing to do, and it's just responsible, but two, it will save them from a world of hurt if and when something goes wrong.

The second thing that we say is that, honestly, just in terms of the financial resources, it just does not cost a lot of money to prepare, and it costs a huge amount of money to respond. One of the things that we'll do is we'll say "You're investing in AI because you believe it's transformational, because you believe it has so much value... And the liability is directly tied to the value." The greater the value, the higher the chances that if something goes wrong, it's gonna be big. So you really can't separate the two.

So if you believe that AI is worth investing in and you believe it's gonna change your business, it is just - one, I would say, irresponsible. We don't tell that to clients; we typically don't, unless it's really bad. But it's just really misadvised, and ill-advised to be making such a big bet on something, and kind of doing that blind.

There's a quote that I love, that I keep stealing from Patrick, which is that even microwaves have troubleshooting manuals. Something as small and as simple as a microwave... And yet, AI is deployed in practice all over, without troubleshooting manuals, without plans for what happens when something goes wrong. So I think at minimum there's this basic level of preparedness that organizations should be willing to invest in... And then hopefully, they never have to pour money into a response. But it's a real issue.

**Daniel Whitenack:** Yeah. And there's definitely -- I can see in this topic people could also argue "Well, I can't anticipate all the bad things that could happen", but at the same time, there are some simple things that you can anticipate, right? You can create adversarial examples pretty easily to test the sensitivity and robustness of your model. Also, I think it was Andrew - you were talking about like when your model goes wrong, which users were impacted by this... A lot of people will just throw their model up like model.pb on S3, and that's the name of it, and then when they update it, they just overwrite that file, right? And of course that's gonna create all sorts of amazingly terrible issues when you have to figure out something, like what you were talking about.

So even just a simple thing like "Hey, could it be conceivable that I would need to know which model operated on which data from users?" Yeah, that's probably fairly conceivable. That's something I've seen; people tend to make that excuse, too.

**Patrick Hall:** I'd really like to jump in here, and I'll try not to be too negative... You know, having spent four years in Silicon Valley, data scientists are paid a lot; a lot more than a general practitioner physician. And I'm starting to have sort of personal emotional problems with this idea of someone who makes 200k-300k a year saying "I can't think about how this system is going to fail." Well, one, just take some time and google about it, and see how systems like yours have failed. And just open the newspaper. There's evidence of discriminatory machine learning all over the news.

So again, I'll bring up this idea of studying AI incidents much like people study airplane crashes, and continue to study airplane crashes. I use the analogy of nuclear power plants and nuclear reactors and airplanes, and I know those aren't exactly right; the barrier to entry is a lot higher, the impact of a failure is a lot more immediate... But there's things to be learned there. So we studied the ways that airplanes crash in an effort to make them safer, and that was just part of the profession of aviation. And I'm really personally becoming tired of why data scientists have some kind of out for this... Like, "Oh, I get paid too much to do this." That doesn't make any sense.

**Chris Benson:** \[00:52:20.12\] So I guess as we come to the conclusion today, I was wondering if you could kind of tell us, as insiders at this juxtaposition of law and AI, what you're expecting to see over the next few years. Clearly, this is a new field, it's growing rapidly... What are you seeing and what do you expect to grow into as you move forward with your new firm?

**Andrew Burt:** Yeah, so I would say -- and it's been interesting, because we also coming out of the gate have been in discussions with a whole host of regulators. I think there's a direct connection between the headlines about things happening when AI goes wrong - and those are only a fraction of what's actually happening out there - that public concern about this, and then regulatory reaction.

So regulators are going to up the ante, so to speak, in terms of what the liabilities are... So I really see two futures, and they're both probably better than the present. The one that I'm gunning for, and why Patrick and I launched this BNH.ai law firm, is because I think there's an opportunity for data scientists to work together with policy folks and legal folks and get this right, and be proactive rather than reactive. Our aim is to help that happen.

So I think that's one future, where before there's any real major incident, we as this -- I was gonna say community, but it's not really a community; it's not like a legal and a -- but as a group, we can start to build that best practices... And even, Dan, what you were saying about just documentation, and not overriding models when they're updated, or at least just some basic best practices... I can see a future that is frankly a lot less bumpy, and where maybe the hype of AI can actually be met in practice.

\[00:54:13.16\] I also see another future, which is probably most likely, and I think what Patrick's frustration is indicative of, is where regulators just say "This is not good enough", and kind of slap down some much more spirited standards. That's where things appear to be heading, although it's not inevitable. But if I had to guess, I would say just like we were with -- frankly, I was gonna say GDPR, but I think CCPA is a little bit more stringent. CCPA is this very overbearing privacy regulation that came through California, that now basically affects almost any big organization using data in the U.S.

I think the likelihood, if we're not careful, is that there's gonna be the same type of thing, and then every single data scientist is gonna have specific additional trainings, and they're gonna have specific additional forms, and they're gonna have lawyers breathing down their neck, who might not necessarily fully understand all the nuances of their day-to-day.

So I think no matter what, the life of a data scientist is gonna change. Risks are increasing, it's gonna be harder just to deploy models without illustrating how those risks have been reduced, and I think how that happens is really up to us.

I think smart companies - I'm obviously biased, but I think smart companies and organizations will start to think about this stuff now, so that they're not surprised when all this happens.

**Daniel Whitenack:** For sure.

**Patrick Hall:** Yeah, sadly I think I'm more aligned with Andrew's second scenario. I think we're in for a bumpy road, where AI and ML are on a collision course with the law over the next decade or two. I think it's important to mention in this topic that we see government agencies, internationally, of course - Singapore, U.K, all over Europe - issuing very detailed AI guidance... But we also in the U.S. just this year and end of last year saw FTC, CFTC, CFPB, FDA, and probably several more that I can't remember off the top of my head sort of releasing draft guidance or other sort of steps towards regulation.

So I do think regulation is imminent, and sadly, I expect it to be a bumpy road, but I hope Andrew's first scenario is what actually happens. That would be a more pleasant scenario.

**Daniel Whitenack:** Yeah, hopefully we've got a good number of listeners on this episode who are interested in the practicalities of this, and I think this is super-practical, in the sense that hey, this is a call to our listeners - before we go down that second path, let's take stock of what we're doing and institute some responsible practices in our own workflows. There's simple things, like we were talking about, that you can do.

I've taken down the links that we've been chatting about, super-practical things that we'll link in the show notes. Specifically, there's a great page that BNH.ai has put together, with a lot of links contained in that page, and the AI incidence response checklist. We'll include that right at the top of our show notes, so definitely check that out and take stock of how your organization is approaching this, and hopefully, we can follow that former, happier path as practitioners. So yeah, definitely check that out.

Thank you both, Patrick and Andrew, for joining us. This has been super-interesting and a really important discussion, so we appreciate that and wish you luck with the new firm and all the great things you're doing.

**Andrew Burt:** Thank you so much. It's been fun as always, and I hope we've been helpful to your listeners.

**Patrick Hall:** Yeah, thanks for having me. This was a fun discussion.
