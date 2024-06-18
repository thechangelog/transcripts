**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am founder and CEO at Prediction Guard, where we're safeguarding private AI models, and I'm really excited today, because I'm joined by a friend who I've had the pleasure of getting to know a little bit over the past weeks in the startup community. We're joined by Ramin Mohammadi, who is the AI and ML lead at Tausight, and also an adjunct professor at Northeastern. Welcome, Ramin.

**Ramin Mohammadi:** Hi, and thanks for having me.

**Daniel Whitenack:** Yeah, yeah, it's great to have you here. It's been cool to visit the Boston startup community a couple of times, and participate in a few events together. I've been really fascinated to hear about some of the things that you're doing at Tausight, so I'm excited to dig into those a little bit.

I'm wondering if you could share a little bit with us about kind of -- you're really thinking deeply about the intersection of AI and privacy, but specifically as related to privacy and personally identifying information, but also personal health information. So PHI. So Tausight is thinking deeply about how companies are handling very private, sensitive data, and knowing about where that data is... Which is actually a huge problem. I'm wondering if you could talk a little bit about -- I was kind of shocked when I heard one of your presentations, and you were talking about just the size of this problem, and the scope of this problem related to PHI... So could you give us just a little bit of a sense of what PHI is, why companies handling PHI is kind of a problem, and some of the challenges related to that?

**Ramin Mohammadi:** Sure. I can do that. So first to give the introduction, what's the PHI, or personal health identifiables... So based on the HIPAA rule, they are 18 identifiable, which can lead to identify an entity or a person within healthcare organizations. And these informations are valuable, and being targeted by hackers. One of the reasons is that they have a high value, because they contain your sensitive personal information, such as your medical history, social security number and insurance details, which makes it very valuable on the black market. They also use this for monetary gains. So a hacker can sell this stolen PHI to criminals who use it for identity theft, insurance fraud, or other legal activities.

They also use it for exploitation and extortion, basically. They use this stolen health information to use for blackmailing individuals or organizations. So 133 millions healthcare data was breached in 2023, which means one out of three Americans' life was affected. This means about 160% increase compared to 2022, and about 240% increase since 2018.

**Daniel Whitenack:** So for our listeners, at least if they're in the US, one out of every three of those listeners has had some portion of their health information exposed in some type of breach. Is that right?

**Ramin Mohammadi:** That is correct.

**Daniel Whitenack:** That's crazy.

**Ramin Mohammadi:** That record came out in 2023.

**Daniel Whitenack:** Yeah, that's insane. And you mentioned hacking... How is this data being breached? Mostly by hackers, or by sort of mistakes of -- what is the combination of ways that this data is getting exposed?

**Ramin Mohammadi:** That is a great question. So actually, recently, the report in 2023, 78% comes from hacking of the network of storage, where the data resides in healthcare. And there's a small amount, which is about like 2%, that happens when someone stole a laptop, for example, and the laptop contained PHI, or sending an email via email, or basically phishing emails, stuff like that. So there's like a breakdown, but the majority comes from hacking, 78%.

**Daniel Whitenack:** And are these companies sort of mostly healthcare companies, or who has this data, and how is it given?

**Ramin Mohammadi:** That's really interesting, because technically, healthcare organizations like hospitals are only accountable for 30% of these incidents, and the remaining 70% happens by hacking through the business partners, like third party organizations that have some sort of softwares, or data storage to keep track of most medical data. But at the end, the cost comes to the healthcare organizations.

**Daniel Whitenack:** So that cost - what happens when this data is breached? What is the bad case scenario, I guess?

**Ramin Mohammadi:** Sure. So let me first tell you what the overall costs of this has been.

**Daniel Whitenack:** Yeah, it'd be great.

**Ramin Mohammadi:** So healthcare cybersecurity has spent about 28 billion over a five years span, and we are still not able to predict the PHI. And the way that it is, when an organization's getting hacked, or there's some data breach, depending on the states, there's some cap. For example, if you have been breached and you have lost more than 500 entities, or life basically data, you need to go public about it. And also, you will basically get sued, and also you need to also get a fine. So we have this wall, which we call it the Wall of Shame, unfortunately, and the government posts the names of the organization where they got hacked, or they lost basically PHI data. And this wall is being constantly updated, and the last things any CSO or CIO wants is to see their name on that wall.

**Daniel Whitenack:** Yeah. And their brand is hurt by that, but also there's fines for this sort of breach.

**Ramin Mohammadi:** That's right.

**Break**: \[00:07:02.08\]

**Daniel Whitenack:** Could you talk a little bit about like - let's say that I'm a healthcare company, and I want to not be on that wall of shame... And I want to do the best practices, and all of that... What is the reality of -- I know that, of course, you have been thinking very deeply about solving these issues with AI, and machine learning, or some related issues... But let's just say that doesn't exist. What are the choices that a company has and what are the challenges that they face in terms of securing this data?

**Ramin Mohammadi:** So currently, healthcare organizations have a series of tools, some of them -- like maybe four or five tool sets that are going to do the same tasks. And the way that these traditional tools work is that they have a series of patterns, like a regex, for example... And when someone tries to download the data, if this matches, for example, with some regex that they have, it says "Hey, you transferred PHI" or "Hey, you downloaded PHI." So those types of files, which are coming directly out of EMR, Electronic Medical Records, are easy to detect. The problem is with what we call dark PHI. A PHI that resides on your network, on your machines, but you are not able to detect it, because the patterns that you're using are basically not capable of detecting that. We have, for example, organizations that have millions of patients in your network... And I don't know, you probably have written a regex before... A regex is always as good as the person who's writing it.

**Daniel Whitenack:** Yeah, yeah. And it also -- what is that meme...? You decide to solve a problem with regex, and then you just end up having another problem, which is regex. \[laughs\]

**Ramin Mohammadi:** That's right. So currently, from the prospects that we have talked with, updating these rules is costly, and requires dedicated engineers or IT professionals. And no one likes to write a regex. \[laughter\]

**Daniel Whitenack:** Very true.

**Ramin Mohammadi:** \[unintelligible 00:10:42.28\] So that's the problem. They have tools in place, but it's incapable of solving the problem.

**Daniel Whitenack:** And when you say dark PHI, is this -- I'm assuming there is like, okay, you might have a regex for a social security number, or something like that... But if I just think of like a doctor recording a dictation of a patient visit, or something like that, there's a lot of natural text in there about diseases, and all of those sorts of things... So is that more natural text, sort of health information? Is that what leads to kind of the dark PHI? Or does it also have to do with "Oh, it's easy to detect in this file format, because I know the pattern I'm getting", but then someone scanned in this document, and it's in PDF or something, and my script doesn't know how to scrape these different data types. Could you kind of go into -- I'm super-fascinated by this idea of this dark PHI sitting around...

**Ramin Mohammadi:** \[00:11:52.15\] So the first thing I'll point out is that 80% of healthcare data are unstructured. Unstructured means that from image, to audio transcripts, all sorts of PDFs... And what we have seen also on the healthcare - it's a variety of data extensions. So you will be surprised that the elusive file extensions that they don't exist, but what the clinicians or researchers do is that when they edit a file, the put dot the last name at the end. I think the last study we did, we found 8,000 extensions on our prospects' environment.

**Daniel Whitenack:** Oh, my gosh... So literally, the personal information is in the file extension.

**Ramin Mohammadi:** That's correct.

**Daniel Whitenack:** That's crazy.

**Ramin Mohammadi:** Personal information could be in the extensions, but also random file extensions that they might use in order to basically bypass some rules.

**Daniel Whitenack:** Okay, I gotcha. So they're doing a workaround... Because there's this annoying tool that prevents this data from being transferred around is blocking this file type. So if I just change the file type...

**Ramin Mohammadi:** That's correct. So one thing also here to point out is that healthcare lives on data. Clinicians need to access that data. And you should not stop them basically from doing their job. You just need to have a better way to detect, and basically, maybe, for example, encrypt the file. So if someone else has stole that file, they cannot open the file. Our goal here is not to prevent clinicians from doing something, it's just to make it more secure.

**Daniel Whitenack:** Yeah. And maybe that starts to get a little bit to kind of transitioning to how AI and machine learning fit into this puzzle... Before we exactly describe how it does fit into that puzzle, I think there might be a lot of listeners out there that are very intrigued by what the challenges might be of applying AI or machine learning in the context of healthcare... Like, what are the unique challenges -- if you're a data scientist, and you're building a model or wanting to use an LLM, or building your own model to use in a healthcare context, what's unique about that context that makes it more challenging to -- maybe it's on the deployment side, or the model building side... What are some of the challenges related to working in healthcare specifically with this technology?

**Ramin Mohammadi:** This is an interesting question... As someone who's keen on MLOps --

**Daniel Whitenack:** Exactly.

**Ramin Mohammadi:** ...I would say the main challenge is the whole project. But for us, these challenges are a bit more than some other AI technology due to the space which we are in. For example, we don't have access to real patient data to train our model on. And no healthcare organization will agree to let you use their data.

**Daniel Whitenack:** And probably if one of them agreed to it, I'm guessing you couldn't use that same model for a different organization, because you trained on specific data that's sensitive for one organization. Is that right?

**Ramin Mohammadi:** That's also correct. We have a huge data heterogeneity problem. For example, one organization is a cancer organization, the other organization is a dental organization. This data is different.

Other challenges that I can see is that you also cannot collect or transfer any data to the cloud. That means everything needs to happen at the edge. Data labeling is highly difficult. Even human-level performance happens about 8 to 10 percent labeling error for detecting PHIs. Again, for example, you have lots of types and extensions. Data normally contains bias, certain demographics have a higher amount of data than others...

\[00:16:07.09\] Model development is confined by first model performance, and then optimization metrics. And model deployment on the edge has its own difficulties, which we can talk about later. I think lastly, unsupervised model monitoring makes it more challenging to detect the rifts.

**Daniel Whitenack:** And just to kind of define a couple of those things... When you say the edge, what is your -- because people might have different definitions in their mind of whether that's some staff member's laptop, or a desktop in a lab, or something like that... Or like a phone, or a microcontroller somewhere. People have a range of that. So in the context of healthcare, what is the edge environment?

**Ramin Mohammadi:** Edge could be from a laptop that a clinician iss working with, from the desktops, it could be the tablet, for example, that you're using, and it could be the server storage, basically.

**Daniel Whitenack:** Gotcha. But all sort of on-site with some healthcare data center, or where staff are working on site.

**Ramin Mohammadi:** That is correct.

**Daniel Whitenack:** Gotcha. And when you say unstructured model monitoring, what do you mean around that? So what are you monitoring for? You mentioned drift, so I'm assuming that that has to do with like this PHI might also be changing itself in terms of what it's -- like, there's a new form type, or there's a new thing that starts being collected. Is that what you mean by model monitoring and that drift element?

**Ramin Mohammadi:** One of the things that we will see is the change in the distribution of the data. As you scan across different groups within the same whole organization - for example, there's a group for radiology, versus there's a group for like normal PCPs. And this data does have a different distribution, and we need to be able to detect any drift in that data distribution as early as possible. Sometimes you also might find something like concept drifts, where it's more like contextual; maybe a file that under certain scenarios considered as PHI, in some scenarios is not actually PHI. There are some rules over here which makes it more difficult.

**Daniel Whitenack:** Yeah, yeah. Contextualization, I guess, is a challenge. Interesting.

**Break**: \[00:18:38.22\]

**Daniel Whitenack:** Yeah, so maybe we could get a little bit now kind of into some of how you've been thinking about and approaching this problem, and thinking about it from the Tausight perspective. So in the context of this edge environment, in the context of this unstructured data, in the context of the constraints that we just talked about, how did you and your team specifically think about applying AI and machine learning in the context of detecting PHI? And maybe also what is your goal here? Is your goal to stop breaches? Is your goal to provide sort of insights about this PHI? How did you decide on what the main problem is you wanted to solve, and why AI or machine learning was relevant to solve that problem?

**Ramin Mohammadi:** I'd like to actually first tell a short story.

**Daniel Whitenack:** That would be great, yeah.

**Ramin Mohammadi:** Six months ago I was going to the AI Summit in Austin. I got to the airport and I was passing the TSA pre, where the TSA agent asked me to check my bag. It turned out that the machine picked up on this preworkout container which I had in my bag. The agent used this device on the box, and the result was positive. It was like "Oh man, I need to call for this special unit to come and check this." I was like "Sure."

Then this special unit with something like a Hazmat suit, they came and used a kit with a bunch of different reagent to more specifically test my pre workout. They started sampling from the pre-workout, and added to a bunch of these test tubes... Long story short, the agent was like "Yeah, you're good." He was like "This happened to my cousin also. These pre-workouts are causing false positives." So we are like that special unit, with a bunch of different models trained to find and protect the dark PHI... While current tools in the market are like the first and the second machine, which leads to false positives or unknown false negatives.

At Tausight, we do see this problem as a personal problem. It's our PHI that's being targeted, and clearly the current tools in the market cannot protect it. So a key part of security also is that - you must do a complete and true assessment of all your risks and vulnerabilities to ePHI. It is so fundamental to what we need to do. And AI is such a critical piece of taking advantage of the newer technology. Solving that used to be a labor-intensive problem, and that could be much easier if you can define the scope of the problem, and you can have machine learning models which can run effectively and accurately in a calibrated manner. That's what we do, we take advantage of the AI to find sensitive data.

I think we get to the point where risks and threats and vulnerabilities are going to be detected at the edge, using the AI... As opposed to "Gee, I have all these heuristic rules", which is how we do lots of stuff today when it comes to recognizing patterns.

\[00:24:04.10\] So at Tausight we use AI, for example, to recognize when the sensitive data is in unstructured content. It doesn't require us to say "Hey, there's a keyword here, there's another key word here." That would be how you do heuristic programming. A combination of these three words must mean this; this combination of these four must mean this. Those -- you never get to do all the rules; you will never get to the variability you need. So in our model, for example - one of our models, with about 50 million parameters, that can be set to recognize this stuff. You will never in years of programming get that much logic into your regex.

Now, the other main factor for us is the ability to run these models right at the edge, where the data is being created, emailed, printed, copied or faxed. We bring the AI to the data, rather than taking the data to the AI, which most of the current AI solutions do that. By doing so, we can ensure that our data is always protected, agnostic of hardware specs or network connections.

**Daniel Whitenack:** Yeah, so all of what you said makes a lot of sense in terms of the approach and how you're applying AI and machine learning... But also, in my practical sort of data scientist mind, I'm like "Oh, man... That's really, really difficult", to sort of have these deployments of models, especially against sort of heterogeneous types of data, run them on the edge, run them across a diverse set of hardware.

From your perspective as a practitioner, where do you think was the most challenging of those issues? Was it having to do with like the deployment targets and the diversity of those? Was it having to do with the types of models that you could or couldn't run in those edge environments? Did it have to do with the actual training and labeling of the data? I imagine all of those are really difficult problems to solve, and you had to tackle all of them. But what were you maybe -- what was some of the hardest problems to solve with respect to those things?

**Ramin Mohammadi:** I definitely will say the first, but the most challenging problem is the data labeling and data creation... Because we don't have access to real patient data, so we need to create our own curated dataset, which we need to ensure that we don't introduce bias, creation bias in that data.

The other thing comes around the model training. So our solutions need to be able to live alongside other programs that are running on a given machine, within certain performance boundaries. One example I'll give you is that \[unintelligible 00:27:01.03\] has a set of rules; if an application surpasses certain memory, or CPU, it will block that application. So you need to be sure that all these ML models that you have, or this ML pipeline that you have always remains below this boundary.

**Daniel Whitenack:** And is that because these are essentially -- I mean, I might say "mission-critical", but these are sort of life-critical systems, right? They're using these to treat patients.

**Ramin Mohammadi:** That is correct.

**Daniel Whitenack:** So if you pull all the memory and the thing stops working, then it's potentially a life-threatening type of situation, or at least a very concerning situation in the healthcare context, right?

**Ramin Mohammadi:** That is absolutely correct.

**Daniel Whitenack:** \[00:27:48.05\] Gotcha. Yeah. And in light of those constraints, of course, some people now might just say "Oh, well, we've got all these LLMs now", and they're great at doing all these things, but I'm guessing a lot of those aren't sort of fitting for this sort of environment, these memory constraints... So where do you go with that? Is it looking back to sort of traditional NLP sorts of things? Is it model optimization? Is it a combination of those? How are you balancing the constraints, but also kind of looking forward to the these new generations of models, and that sort of thing?

**Ramin Mohammadi:** Regarding the LLMs, I was reading about this Phi 3 by Microsoft, the small model.. And even that model requires a certain amount of core RAM, or GPU.

**Daniel Whitenack:** Correct. Yeah.

**Ramin Mohammadi:** None of the healthcare organizations have computers with those specs. They all have like four gigabytes of RAM maximum, and some legacy CPUs. The other problem with LLMs is that they introduce some additional risk. In healthcare some clinicians or researchers, they're using tools like for example ChatGPT to copy-paste patient data to get summary extraction, which - that's not how it should be used. I know for example -- I know actually your company, Prediction Guard, you're trying to solve a problem like that.

**Daniel Whitenack:** Yeah. There's certainly a lot of people pasting things into chat interfaces that's very concerning, I'll definitely say that. Yeah, for sure.

**Ramin Mohammadi:** That is great. Now, when it comes to model optimization, we take a series of approaches to be sure that our models are optimized for such an environment. This could be from knowledge dissolution, or student/teacher networks, quantization and model pruning. We do technically a combination of all of these to ensure that every model that we have lives within a certain boundary.

**Daniel Whitenack:** Gotcha. Yeah, that makes sense. So it's very important... And I'm guessing the model architectures and the approaches that you -- you can only go so far. It's not like you're gonna take LLaMA 3, 70 billion, and do these optimization techniques and fit it into four gigabytes of memory, and run it on a CPU... So it's super-interesting, and I think... I don't know, what is your view -- as maybe you observe in the marketplace, people are exploring these open models, exploring bigger models... But at least in the space that you work in, the only way that you kind of move forward is with small models, or customized models, optimized models... How do you view that kind of shifting into the future? Do you think there will always be this sort of diverse set of environments in the healthcare space that you need to optimize models for? Will they eventually get over their hurdles of using kind of a cloud, or large models? How do you see that developing moving forward and into the future?

**Ramin Mohammadi:** A report by Schneider Electric indicates that currently 95% of AI workload operates on data centers. They have forecast that this number to go to 50%, between edge and cloud, by 2028. When you're monitoring the current developments in the market, you can see that most of the chip manufacturers are moving towards creating much stronger chips or machines where they're allowed to run the AI at the edge. For example, Intel's Meteor Lake, or the AI PC.

But it will take quite a while for healthcare organizations to have that change adapted, because it requires budgets... And I think healthcare organizations, they go through a machine update once every five years. I don't think they do it over all data machines; only maybe certain machines. But definitely, I do see the future that you can bring much larger models right at the edge, but I don't think we are there yet.

**Daniel Whitenack:** \[00:32:16.17\] Yeah, I appreciate that perspective, because some people, I think, in our listener base, they're constantly overwhelmed by this news about these new big models... But it's harder to get this sort of story of a practitioner on the ground working with specific companies, in certain constraints. There's still quite a diversity of constraints that a practicing data scientist or AI engineer has to work within... So I think that viewpoint's very important.

As you kind of look at what you've done with Tausight and these tools that you've built in detecting PHI, helping companies know where their PHI is, reducing false positives, figuring out how to run these models on edge devices and all of those things, do you have anything that stands out in your mind in terms of -- you don't have to mention specific customers or anything, but success stories or really things that you're proud of, that you're glad that you've been able to be a part of in terms of helping protect this PHI. Any sort of case studies or use cases that pop into your mind?

**Ramin Mohammadi:** Yeah, I can give some examples without naming anyone...

**Daniel Whitenack:** Sure.

**Ramin Mohammadi:** We were in this meeting, and this CSO was on the call, and he's like "I had this laptop that was stolen, and I don't know what's on that laptop." But because we have our software on that laptop, we can do an inventory, and it turns out the laptop contained lots of PHIs. So they never have that view on this type of scenarios, that where the PHI is, or who has access to it, but we can basically give you that.
I was on another customer call, and it was like "We are happy with the tools that we have. They have less false positives, but unknown false negatives. And we are quite unhappy for writing the rules."

**Daniel Whitenack:** Yeah.

**Ramin Mohammadi:** "It takes us a while." But when you use our two, there's no rules that you need to write; it's basically out of the box, after installing our products. It will start scanning all the files, and also monitoring what's happened on the machine. So if someone copying or pasting, for example, PHI into an email or into another file, we can read that. We can detect that. If someone's faxing it, we can basically detect that.

So these customer calls that we have been on, they also can be positive, and sometimes scary, with customers, because we are able to find really detailed information around your network.

**Daniel Whitenack:** You're pulling the curtain back. There's work to do once you understand it. Yeah, well, maybe as we kind of draw pretty close to a close here, as you are kind of plugged in both on the academic side, you're plugged in on the startup side, with Tausight, you're investing in this healthcare industry, from the perspective of AI and ML, what gets you excited as you look to the coming year? Maybe it's things with Tausight, maybe it's things more generally in the AI community... What are you excited about, and what do you think is some of the positive things that you're seeing kind of develop over the coming year?

**Ramin Mohammadi:** I think there are two things that I'm really interested in. One is this development around these large models, and the fact that they're getting smaller and smaller. I am looking for the day that I could work with SLMs, small-large models, and deploy those on the edge...

And I think the other thing that I'm quite interested in and right now actively working on is the federated learning. I know federated learning is kind of in the background. Not many companies actively are doing it due to all the challenges that it has, and also some security concerns... But for a domain like healthcare, where you cannot transfer data, and you cannot see the data, I've found that absolutely necessary, for your models to be able to train themselves and update themselves. So I think those are the two main things that I'm looking for the upcoming is.

**Daniel Whitenack:** That's awesome. Yeah, I'm definitely excited by both of those things as well. And I know Chris and I on this podcast have mentioned federated learning for four years... I hope that it kind of comes more to the forefront as people figure out paths to do this. I think that will be interesting.

Well, Ramin, it's been great to have you on the show. I think we'll see each other again in Boston before too long, I think... But yeah, it was great to have you on the show, and thanks for taking time out of your schedule to share some of these insights with us.

**Ramin Mohammadi:** Yeah, thanks for having me, Daniel, and see you soon in Boston.

**Daniel Whitenack:** Sounds good. See ya.
