**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How's it going, Chris?

**Chris Benson:** Doing great, Daniel. How's it going today?

**Daniel Whitenack:** It's going great. It was a beautiful weekend after finishing a paper submission to a conference, so all was good. I got to relax and be outside a little bit, and feel the satisfaction of having that done. What about you?

**Chris Benson:** Sounds good. Just family stuff over the weekend. I had the satisfaction of both my daughter who's in second grade, who's into basketball - I think we raised the goal all the way up to the ten-foot mark. So she's learning that...

**Daniel Whitenack:** The big-time.

**Chris Benson:** And we transitioned her up to a larger bicycle as well. So both big daddy moments for me. So not AI-related, but it was a good weekend in that way.

**Daniel Whitenack:** That is exciting though, yeah. Cool! Well, I'm excited about the show today. We have a topic that is very interesting, related to conversational data and extracting insights. We're joined by Mike McCourt, who is a data scientist at Invoca, to talk a little bit about that subject. Welcome, Mike.

**Mike McCourt:** Hi, thank you for having me.

**Daniel Whitenack:** Before we jump into that, would you just give us a little bit of a background to help us understand how you got into AI and data science stuff? And then we'll take it from there.

**Mike McCourt:** Absolutely. My arrival into the AI world was totally fortuitous. I'd not planned on it at all, really. My original goal was to be a college professor, and I really wanted to study astrophysics and to do research in that field, and to teach studying how structure formed in the Universe and how we came to be here. So I worked for probably ten years dutifully towards that end. I majored in physics, and theoretical physics in college, and got a Ph.D. in astrophysics, and then I'd moved all the way across the country for a post-doc position, which was like a research position in science. Then I moved all the way across the country again for another one.

So I was dutifully working towards this goal of being a professor... I was getting less and less sure if that was the life I wanted, and at the same time I'd seen this new field of AI just take off and blossom.

**Daniel Whitenack:** And what year was this around?

**Mike McCourt:** I was in college in 2004 to 2008...

**Daniel Whitenack:** \[00:04:01.15\] Okay.

**Mike McCourt:** ... and I basically never heard of AI in that timeframe. I mean, I knew of some people in the computer science department who were doing research in AI. And then midway through grad school, 2010-2011, I started hearing more and more about it; it seemed interesting. By the end of grad school, to an outsider, AI was hot. And by the end of my first post-doc, AI was really hot. I saw how fast the field was moving, and new inventions were coming, and it seemed like it was advancing by leaps and bounds. Eventually, I got jealous and I wanted to make the switch.

**Daniel Whitenack:** Yeah, it's interesting... It seems like even the year -- so I was also in college 2004-2008, and then went to grad school in physics, so we've got a lot of similarities there, except I guess you had more perseverance than I did. I didn't make it through the post-doc, I jumped ship before then, into industry...

**Mike McCourt:** Yeah.

**Daniel Whitenack:** But it is interesting. I guess there's really a lot of astrophysics and also high-energy physics people getting into this space... At least that's my understanding now. I'm kind of more removed from it than you maybe.

**Chris Benson:** As the non-physicist in the group, I have to say I've noticed that it seems like AI is breaking out with physicists these days. It's a good thing, by the way.

**Mike McCourt:** Yeah, totally.

**Daniel Whitenack:** Yeah.

**Mike McCourt:** Yeah, so you jumped earlier than I did. I think you could see farther than I could... But yeah, I feel like almost all of my colleagues now from grad school are in data science or AI.

**Daniel Whitenack:** Well, it's definitely very competitive in terms of ten-year track physics positions right now... But the demand for AI talent and data science talent is so huge, that I think that's driving a bit of that.

**Chris Benson:** Before we dive in and talk about what we were planning to, I'm just kind of curious, with both of you here - any thoughts on if there's a natural progression these days for physicists to move into AI, a kind of natural synergy between the two?

**Daniel Whitenack:** I'll let Mike go there maybe. He was in physics longer than me maybe.

**Mike McCourt:** I've made the jump more recently, I think... Yeah, I think for me -- I felt like physics prepared me extremely well for the jump into data science. I think in physics what you're trained to do is to take some observation about the world, some fact that you'd like to understand and explain, and then you come up with a model that you believe could explain it, and then you have to grind through the math and turn that model into something that can make predictions. And in the process, you have to collect some data, you have to inform your model, you have to fit for parameters in the model, and you have to understand your uncertainty in all those.

Then at the end of the day you have to make a prediction, and then you have to convince someone else to go run an experiment and test your prediction... And if your predictions \[unintelligible 00:06:53.11\] well, then you believe that you've learned something about the Universe, and you can publish that. I think that process in AI is pretty similar.

**Chris Benson:** Yeah, it's a great parallel there that you outline.

**Mike McCourt:** Yeah, so the focus is different. In physics we don't really care about the predictions on their own. The predictions are there to test our theories, and the theory and the model is really the product that we wanna give to the world... And working in AI, the model actually is typically something that we -- well, sometimes we hide it, or at least it's not really the focus. The internal workings of the model isn't what we care the most about. It's the predictions that we care the most about. But I think that process is broadly similar.

**Daniel Whitenack:** Yeah, definitely. I agree, and I think you expressed it much better than I could, so... It seems like you've also developed the important data science characteristic of being able to explain things and frame things well. I don't know if that's something you learn in physics or afterwards, but yeah, I appreciate that. So tell us a little bit more about how you got involved with Invoca in your path to what you're doing right now.

**Mike McCourt:** \[00:08:05.05\] I got very lucky landing at Invoca. Like I said, I had a laser-like focus on my physics career trajectory. I'd never really considered anything else until I kind of got towards the end, and realized AI seemed more interesting to me. So I was not really aware of what was going on in industry, and I made the jump a little bit blind. But while I was making major life decisions, I decided I wanted to work in AI, and I decided that if possible, I wanted to live in Santa Barbara. I'd always loved the city here. And I didn't know if there would be AI positions in Santa Barbara, so I just started searching, and I found this company called Invoca. Invoca does call analytics for marketing. I didn't know that much about phone calls and I knew almost nothing about marketing, but it looked like an awesome company.

Especially, what was really interesting to me was the dataset that Invoca has, because we study phone calls here... But an unusual dataset. Most of their research at least in AI now is not focused on phone calls. So it's kind of a unique problem and a big dataset, and it looked like a fantastic company to work for. So even though I came in knowing almost nothing about marketing, I was able to convince them that my skills as an astrophysicist would be useful to them, and landed a fantastic job at a really great company here.

**Chris Benson:** So you kind of led right into where I was about to ask you, and that is -- I had looked at Invoca's website and it talks about Invoca being this AI-powered call tracking and analytics platform... You've already talked a little bit about this interesting dataset, so I guess for those of us who are not in that particular field, could you talk a little bit about what call analytics mean? And also, I noticed on the web page it talks about campaign attribution, and it refers to some actionable data. If you could talk about how all those fit together and what they mean in this context, I'd really appreciate it.

**Mike McCourt:** Absolutely. So keep in mind I'm not a marketer, so I'll do my best at explaining the value proposition of what we do. I think now when a transaction happens online, marketers are used to getting all of this attribution information. So if you buy something online, they know who you are, they know what ads you've seen, they know what web pages you went to, and they can use this information to really analyze their marketing campaigns and optimize them, and try to make sure that they're spending money on ads that are driving business to the company, and hopefully that are relevant and interesting to consumers.

**Daniel Whitenack:** Yeah, so it's not just broadcast marketing. The trend at least now is very targeted marketing, right?

**Mike McCourt:** Yeah, it's changed a lot in the recent decades. But as soon as you pick up the phone, they lose a lot of that information about you. If you don't finally make your purchase online, but you pick up the phone and call them and make your purchase there, then a lot of that attribution is lost. And that's important, because a lot of high-value transactions don't happen over the phone. If you're buying a new sweater, you'll do that online; but if you're getting an air conditioner installed in your house, you typically wanna pick up the phone and talk to someone before you make that decision.

**Chris Benson:** That's a great point, in terms of how real-life works when you're doing that.

**Mike McCourt:** Yeah. So if you're shopping for mortgages, or home improvement things, or if you're booking a vacation on the cruise line - you know, big, high-value transactions, they still tend to happen over the phone. Invoca works to close that gap, so that marketers can analyze the transactions that happen over the phone, and link those to their marketing campaigns.

**Chris Benson:** And I'm just curious - I did spend a number of years as a technology person in marketing organizations... How do you actually make the link? Or do you, in this case? If they're starting online, and traditionally marketing has focused so much on analytics with online activity, and then they've totally moved over into this new medium, and you start your analytics there, which i guess we're about to learn about - how do you actually make that connection between the two?

**Mike McCourt:** \[00:12:17.25\] Yeah, that's an excellent question, and I have only a thin understanding of it. There's a whole -- this is kind of the core if Invoca's technology, and I just work on the AI part... But essentially, when you sign up with Invoca, you get a number of phone numbers, and then when ads are shown, a number gets swapped in to each individual ad, so that when someone calls the number, that number gets forwarded to your business. But the number they called can be used to see what ad they called in from.

**Daniel Whitenack:** Yeah, I think together we're getting there... I know at a previous employer - actually, the first data science position I had after leaving physics was with a telecom company... And I think most people don't realize this now, but it is super-easy for you to spin up even a thousand, a hundred thousand unique numbers and then destroy them right away after you've used them, these days, via APIs and things like this. So you can be very smart with your phone campaigns in terms of using unique numbers for even just a single purpose, like doing this link, which is pretty interesting.

**Mike McCourt:** Yeah, exactly. But then it starts to get complicated, because you wanna make sure it's a phone number that no one's used for a while... So there are a ton of people working on that there. I find it interesting.

**Daniel Whitenack:** Yeah, it is interesting, and I think also it's fairly transparent to the user, which is interesting. In a similar way too, most people don't realize that they're being tracked by Facebook when they're not actually on Facebook or Instagram. There's people that have this embedded thing in their website - or like most people should, that are doing any type of marketing - that links their activity on that website, assuming they're logged in to Facebook or Instagram, to their account. I think a lot of that world is kind of transparent to most people... At least it was to me before I got into some of these related things.

**Chris Benson:** That point you made a moment ago, about having so many numbers available - I don't think I have ever thought of using phone numbers in such a disposable way. It makes perfect sense, and I do do programmatic stuff with phone numbers. There are companies out there, obviously, where you can get phone numbers for your business and program them into your stack, and stuff... But I don't think I had thought about it in the context that you guys were discussing. It's an interesting thought there.

**Mike McCourt:** Yeah. I've had the same number since high school, so this --

**Daniel Whitenack:** Same here.

**Mike McCourt:** \[unintelligible 00:14:50.25\] has really surprised me. Yeah, it's amazing to see it work.

**Daniel Whitenack:** And I'm assuming -- I don't know, it was interesting for me as a physics person coming into this world that... Like, you were talking about some of these problems around "Oh, you don't wanna reuse the number too much", "What's the optimum amount to do that", "How many numbers do I need to spin up?", "What's the volume of that, and the geography, and targeting?" These are very complicated problems that aren't like the fundamental, pure science problems of nature, but they are really interesting problems, at least for me. I've found them interesting as a physicist just in terms of their complexity, and also their connection to real-life and how you can make a real-life impact for people. I don't know if it was similar for you...

**Mike McCourt:** Oh, absolutely. One of the really fun things that I learned as a physicist is that you can use math to make a model of something, and then optimize it, and then apply that to the real world and see it work. It's kind of amazing to me that I can listen to a problem, write something out on the checkboard, grind through the math, and then end up with something useful.

**Daniel Whitenack:** \[00:16:07.20\] Mike, I think we should probably transition to the more AI-related things that you're doing at Invoca, since this is Practical AI; we definitely wanna hear about those things. One of the things I know that was highlighted as we were talking before the show was this product called Signal AI and some of the things you're doing around that... Could you maybe just give us a bit of the motivation behind that product at Invoca, and how it came about?

**Mike McCourt:** Yeah, absolutely. As I mentioned, we do -- well, the core of Invoca is call tracking, so you can attribute a phone call to an ad... That would allow you to see which ads were driving the most calls. But really, as a marketer, what you wanna understand is what's driving revenue. And that requires understanding what actually happened on each of the calls. So you don't wanna just optimize for a marketing campaign to drive more calls, you wanna optimize for one that drives more calls of people who actually go on and buy something.

**Daniel Whitenack:** Yeah, you don't want vanity metrics, similar to how you wouldn't wanna optimize an ad for just clicks of the Like button on Facebook, or something like that.

**Mike McCourt:** Yeah, exactly. At the end of the day, you need revenue. So Signal AI is our answer to that. It's a product that will actually analyze what takes place on the call, and tell you whether it was a purchase, or whether it was an appointment, or a cancellation, or whatever it is that you happen to wanna track, to attribute to your campaigns.

Signal AI is a supervised model, and what that means is that the model is trained by label data that's provided by the user. Let's say that you're a dentist's office, and what really matters to you is appointments. You're looking for new patients, new people to come in, and you want to increase the number of appointments you're getting per month. You would provide us with, say, 150 calls where an appointment was made, and 150 calls where an appointment was not made. And you can train a Signal AI model that would now listen to all of your incoming calls as they're routed through Invoca, and tag them as true or false for appointment. Then you can feed this information back into your marketing system to optimize not only which ad campaigns are driving the most calls, but which ad campaigns are actually bringing people into your office for appointments.

**Chris Benson:** So are you primarily classifying the call from the AI perspective, or are you doing more than just classification with the AI stuff? Can you talk about how that fits indirectly?

**Mike McCourt:** Yeah, so Signal AI - exactly, it's classification. Was it an appointment, was it a rescheduling, cancellation...?

**Chris Benson:** I'm just kind of curious, are there are any other aspects particularly around natural language processing (NLP) that you guys are focused on, aside from classification?

**Mike McCourt:** Well, I think for Signal AI a lot of the processing that we do -- you know, at the end of the day, what we want is classification. Classification is actually difficult on phone calls for a number of reasons that I find interesting. One is that phone calls range really widely in length. So if you listen to phone calls to businesses, a lot of them are three minutes long, or even less than a minute in some cases, and some of them can be two hours long. So a classification algorithm has to be able to handle all this wide range in lengths of phone calls... And that can be tricky, because if the classifier is looking for a particular pattern in a phone call.

\[00:19:50.08\] If the phone call is really long, the odds that that pattern is going to appear randomly increases. So it's tough for people to handle that range of lengths in phone calls, and then another thing that I find really interesting about phone calls is that, you know, English is such a rich language that no two people are going to express themselves the exact same way, even for something as simple as scheduling - sticking with the example of the dentist's office - an appointment for a cleaning at the dentist's office. That's a relatively simple thing to do. But if you listen to 100 phone calls where people are all doing the same thing, they have the same call, no two of them are going to use the exact same sequence of words. There's enough freedom in English that we can all express ourselves a little bit differently.

A classifier algorithm that's working on phone calls has to be really sensitive at pulling these patterns out of speech... But at the same time on phone calls there are certain things that are exactly the same for one call to the next. If there's a hold message on the call, if you call or I call, we're gonna hear the exact same sequence of words in the hold message. So if a classifier algorithm is too sensitive at pulling these patterns out, it'll get tripped up on these recordings that are present in phone calls.

**Daniel Whitenack:** Yeah, so I have so many questions... This is super-interesting. I guess the first is -- the other thing that I was thinking about when you were talking about challenges specific to phone calls, you were talking about the sort of structure of them, how they are maybe repeating things, but a lot of times there are varied links, and there's a lot of variance in terms of language... There's also the element of accent, and all of that, I'm assuming... So one of the things I was wondering was are you primarily in the system analyzing the raw audio, or are you converting that to text and then doing text-based methods to do classification? And along with that, I'm assuming that phone calls, for example, the audio is not gonna be as good of quality as our wonderful quality Practical AI recordings, or other audio recordings maybe... So are there also issues with that? Those are some of the things going through my mind.

**Mike McCourt:** Yeah, these are excellent questions. So by the time it reaches me, and on the data science team here, the phone calls are even transcribed, so I'm fundamentally working with text data... But they're transcripts of phone calls. So I don't personally work on analyzing the way \[unintelligible 00:22:29.05\] audio, and turn that into text... But you see significant differences with dialect and accent. The way that people will explain things varies quite a lot across the country. And again, doing classification, if I'm canceling -- let's say we have a model for appointment set, and it's trained on phone calls from people in California. Me as a Californian canceling an appointment, that might seem more like the \[unintelligible 00:23:03.17\] for appointment set, because I'm from the same region, than someone from Maine who's making an appointment. So we really do have to be careful about how we handle dialect and regional differences.

And yeah, as you mentioned, the audio quality varies widely. Somebody may be making a call from home and the audio quality is fantastic, and you can hear everything, and understand every word that's said, or they may be calling on a cell phone from driving on the freeway, and the audio quality is terrible.

**Daniel Whitenack:** What sort of real variance in impact does that make in the actual -- since you're the consumer of the text and it's already been transcribed, do you see a credible amount of noise in the text because of those issues, or is it fairly clean and then there's kind of outliers here and there?

**Mike McCourt:** \[00:23:57.02\] I think there's kind of a continuum, from transcripts that are nearly perfect, to ones that are almost \[unintelligible 00:24:01.00\] So we get the whole range. And we treat it almost as a quasi-linguistic phenomenon. When a word is mistranscribed due to noise in the audio, that's kind of like an artificial synonym. Words like "hire", "tire", "fire", "higher" - those might all be synonyms for the purposes of phone call transcripts, even though they have different meanings in the dictionary.

**Chris Benson:** I'm curious, as you go through this process - and I've been listening to you and Daniel, and Daniel's also a real NLP expert, so I'm trying to learn from both of y'all - are you using multiple models in your workflow as you're coming through this, or is there one master model? Which approach are you taking, and how do you account for variability within the different speakers, given the fact -- I know Daniel mentioned accent a few minutes ago... So as you run into all these variations that you can have -- I guess from an accent standpoint, that would be out from... Because you're only dealing with text, right? But at some point are you thinking about doing the raw audio, and maybe do things like sentiment analysis, or anything? I guess I'm running all over the place, but I'm just trying to understand...

**Daniel Whitenack:** Yeah, so are you using multiple models in your workflow for different types of calls? Like, calls of this accent type or of this dialect - it has one model, and then calls of a different accent or dialect have a different model... Also, you mentioned segmenting things, so like the hold music/message, and that sort of thing... So do you have different models that analyze the different parts of the call, or are you just saying "We have one big model that has enough complexity to handle all those things"?

**Mike McCourt:** Yeah, that's a great question, and it's a nice segue into a new product that we're working on at Invoca.

**Daniel Whitenack:** Oh, it's perfect then. Well done, Chris. \[laughs\]

**Mike McCourt:** Yeah. So just to quickly answer your question about one model or multiple models - another thing that's a little bit tricky about working on phone calls in our industry is that we have customers that might work in the healthcare industry, or in the financial services industry, or banking industry, where they're really concerned about privacy... So we have a policy with Signal AI where there's really one model per customer. So each customer's model is only trained on their own data.

We might do -- since we've transcribed millions of phone calls, we might do much better if we could, say, take a whole lot of that data and pre-train models that then get refined using each customer's data... But we've decided not to do that. So each customer's model is trained only on their own data.

Sometimes there's not that much data. We might have to make a model with only a few hundred phone calls, that has to handle all these different regional variations. So the way that we try to make that work in practice is partly by recognizing and stripping out hold messages as well as we can. Often, a hold message essentially plays advertisements. That can sound just like a purchase, and that actually be really confusing to our models. So we try to strip that stuff out as well as we can.

Then once the recorded stuff is removed, then we try to make our models really parsimonious. So they only include words and phrases into their predictions if there's solid statistical evidence that they really matter. I don't know if that answered your question.

**Daniel Whitenack:** It did. I'm kind of curious a little bit more on that... Like, given the privacy things that you're dealing with, and all of that stuff, and your limitation to have this model per customer, in your experience, how much data -- is 100 calls enough to create something useful, or how much is needed? And then I'm assuming - are you kind of updating this over time? Is there some sort of human in the loop element from the client who's able to help fine-tune things over time?

**Mike McCourt:** \[00:28:10.23\] Yeah, absolutely. A customer can upload some data and train their own model. Another tricky thing about our industry - or at least Invoca's models - is we decided to make them \[unintelligible 00:28:20.16\] So our models are not actually trained by data scientists, they're trained by the customer... So we really have to make them as bulletproof as we can.

A customer can upload some data and get their model up and running, and when their model makes predictions, every call that comes through Invoca gets marked now as true or false, let's say for appointment set. And then the customer has the opportunity to listen to some calls and correct them. If we mark a call as true, the customer can listen to that and say "No, that wasn't an appointment", and they give it a little thumbs down. Then through the thumbs up and thumbs down gestures, we retrain the model and it should get better over time.

There's also opportunities to collect more data and upload it. Let's say as time moves on, the business grows, the conversation drifts or changes over time - you can upload new data and update the model that way.

So in practice, I think 100 calls -- it's awfully hard to train a model on 100 calls. That's also often what people are willing to give us at first. It's a hard sell to say "You can have this great model if you listen to 1,000 calls and label them."

**Daniel Whitenack:** Yeah, who wants to do that...?

**Mike McCourt:** Exactly... Even though that would make my job a lot easier, ultimately we serve the customers and we have to make do with what the amount of work that they're willing to do.

**Break:** \[00:29:57.02\]

**Chris Benson:** Mike, a moment ago you were talking about the fact that you have this customer self-service part of your process, and I've found that interesting; it's an interesting choice that you made that, and not something we hear all the time... And I was really wondering if you would take a moment and tell us a little bit about how you've made that work for you, what that customer experience is like for them to do it, and the fact that they can update - what does it mean that they can update their model, from your perspective?

**Mike McCourt:** When a customer signs up with us, they go through a process of determining what outcomes on calls are important for their business, whether it's appointments and cancelations, or purchases, and new customers... And then they curate examples of training data that they then upload. Once that happens, our models train on that data, kind of behind the scenes. We typically have a few different varieties that we try out and train, and then we measure how well each of these models is performing.

**Chris Benson:** So as they upload the data itself, are they able to initiate training, or is that essentially just kind of flagging that there's new data there, and you or somebody else on the team would then address the data, and prep the data, and get it ready? How automated is it between the point where they're offering the data and you're actually training on the data? I was just curious, in terms of -- it seems like there's a whole bunch of tasks that would have to happen in there.

**Mike McCourt:** Yeah, from my perspective on the data science team, it's totally automated. We don't initiate anything or okay anything. The customer uploads the data, the models train automatically, we do model selection automatically, choose the best-performing one, and then offer that to the customer with some summary statistics. "This is how accurate the model is", whether you're sensitive to false positives, or false negatives... These are the relevant criteria for you.

Then once the customer sees this summary of the model, they can decide whether to go live with it or to wait and get more data, to try to improve it.

**Daniel Whitenack:** \[00:35:52.04\] I'm curious, coming from I guess a less speech perspective and more of a text perspective, I know that sometimes with text documents from chatbots, or assistants and that sort of thing, you can do unsupervised topic modeling and determine computationally what are the topics that the model is finding on its own... And there's a few different ways to do that, but I was wondering if you've explored those sorts of ways to ease the burden on the customer to do the labeling, and that sort of thing... Or maybe suggest to them, "Oh, it seems like there's different things happening here than over here in your data. Have you considered these things?" and being proactive in that way.

**Mike McCourt:** Yeah, it's like you read my mind. So the Signal AI process where a customer determines what's useful to them, labels data, uploads it and gets the model - that process works well for a lot of people... But you know, we always wanna understand what's difficult or what are the pain points for customers, and two of the main questions that people came up with was 1) Can I avoid having to label data myself? And 2) This Signal AI - it only tells me what I ask it to look for. I want AI to tell me what I don't know about; I want AI to tell me what I should be looking for. So we've recently come up with an unsupervised model - exactly like a topic model, as you mentioned - that will chew through call automatically, without any human labels, and it'll just ingest calls from a customer, and kind of passively analyze them and look for recurring themes that take place on the calls, and then present those as kind of a summary to the customer. Like "Hey, we analyzed 20,000 calls, and this is what people talk about when they call your business."

**Daniel Whitenack:** First of all, you're right in that basically every time I go into a project, I don't wanna label data and I'm saying "Do I have to label data?" Most of the time in my projects the answer is always yes. But the one thing I've found as I've tried some of these unsupervised methods - it may be hard to understand what the clusters or what the topics correspond to, even though computationally they're distinct. Has that been a problem as you've tried to develop these methods, and how have you faced some of those challenges associated with unsupervised methods in terms of "How many topics do I consider, and how do I represent this to the user?" and that sort of thing.

**Mike McCourt:** Yeah, this really sent me down a road where I did a lot of math. I think it's an interesting case that often you can run an unsupervised algorithm -- and just to be clear, an unsupervised algorithm is one where no human has provided labels or provided any indication of what the model should be looking for; the model just chews through raw data and looks for patterns to identify... Often, these unsupervised models can find patterns that make sense to a computer, and they're useful for prediction and they're useful for clustering, and all this sort of stuff. But if a human looks at what the patterns are, they're completely unintelligible. They make sense to the model, they make sense to a computer, but as a human, you can't make sense of them.

So we try to design an unsupervised algorithm where every element of it would be human-interpretable. And we did that by imposing a lot of restrictions on the model. We looked at some linguistic features that seemed important for phone calls, and we made sure that we had a mathematical model that could reproduce those features, and then we put those constraints on our model at essentially every level.

**Daniel Whitenack:** \[00:39:47.29\] So you did have labeled data and you tried to recreate your label data with the unsupervised method to validate that you're creating clusters or topics that actually made sense... Is that the kind of strategy?

**Mike McCourt:** No, so there are no labels that are made by humans, but there are statistical properties of language...

**Daniel Whitenack:** Oh, I see.

**Mike McCourt:** ...we think are really important.

**Chris Benson:** Could you guys for just a second address what may be an example of what a couple of those might be, in terms of the characteristics you're looking for there?

**Mike McCourt:** Yeah. Are you guys familiar with Zipf's law?

**Daniel Whitenack:** I'm guessing that you should probably just give a brief definition.

**Mike McCourt:** Yeah. I think this is fascinating... Zipf's law - it turns out that if you look at a big corpus of text and you count up the occurrences of every unique word that appears in the text, and then you sort them... So you know, how often the most common word is - that word is typically "the", in written text; it's not in phone calls. So you take the most common word, and you see how often that appears. The second-most common word will appear about half as often as the most common word, and the tenth most common worth will appear about a tenth as often as the most common word, and the hundredth most common word will appear about a hundredth as often as the most common word, and so on.

So language really sorts itself out into this interesting relationship, and that's called Zipf's law. I think that's important for two reasons. One is that -- on the Wikipedia page for Zipf's law there's this amazing part where someone has analyzed all of the English language Wikipedia pages; they have made this plot for English, and of course, it follows this relationship, because that's how the relationship was discovered... But then they went and did it for Spanish, and for French, and German, and Croatian... I think they did it for 30 different languages; Latin-based languages, and Germanic languages, and Asian languages, and amazingly, all of them obey this relationship.

So there seems to be something really fundamental about human communication that creates this behavior, where there's some words that are really common, and they appear all the time, and then there's a long, long tail of rare words. The rare words tend to be really specific words, that have a lot of meaning. So language tends to sorts itself out into this relationship, and I don't think we fully understand what creates it, but it is clear that it's a common property across language. So that's an example of something that we really wanted our model to be able to recreate... And it's also interesting, because a lot of statistical models that are implicitly assumed in some common machine learning algorithms are kind of under the hood; they assume that distributions are roughly Gaussian(ish), that things roughly follow the normal distribution, and this distribution of words is completely unlike that. It breaks that assumption really violently.

**Daniel Whitenack:** So with these patterns that you know should be exhibited in language - let's say that you have these 20,000 phone calls, like you mention, and you could do some sort of topic modeling to break them up into however many topics... Let's say there's five topics, as an example. Would you then impose that sort of test on each of those clusters of calls, on the transcripts, to see if they follow that? Or how does that test fit into the clustering or the breaking up of topics?

**Mike McCourt:** Yeah, so the way that our model is laid out - and again, it's designed so that not only a computer can understand it, but it's designed so that a human could look into the model, at any piece of it, and try to be able to make sense of it... We sort of laid it out hierarchically. So if you think at the very bottom we have the data - all of the phone calls; and the phone calls have all these properties that make them hard to analyze. So the word choice follows Zipf's law, this funny distribution, and there's all this uniqueness, and dialect, and all that...

\[00:44:07.19\] So the phone calls at the bottom are really messy, and then we wanna move up through layers of abstraction... And so at the very top of the model, we wanna "This is what has to be common across all of the calls in the dataset." If they're speaking English, that's gonna be the dictionary; it's gonna be the list of words that can be spoken.

The dictionary may be an infinitely long list, because people can invent new words all the time, but it's at least a countably-infinite list. That's the stuff that's common across all of the datasets. And then our model works by kind of starting from the dictionary at the top, and moving through these layers of specialization. We have this list of words that make up the dictionary, and then we know while we're speaking language and language follows this Zipf's law, where there's some really common words, and some really rare words, but that are still important... And so we have to derive a probability for each word that follows this parallel relationship. I call it a lexicon, but it's essentially the words with their associated probabilities.

Then where the topic modeling comes in is we say, okay, well the dictionary defines the language you're speaking. That lexicon now defines kind of what an average phone call looks like. That's gonna vary from one customer to the next, or from one industry to the next. You're gonna use different words if you're calling a car dealership or a hospital. But then that lexicon - it's still too abstract. It's just how any average call looks like.

So that lexicon is gonna go through, again, several layers of specialization, and each of those are gonna be these power law type distributions, but it's gonna split that lexicon into "Well, these are the words that you use if you're making an appointment, or if you're canceling an appointment, or if you're a new customer who's enrolling for the first time" and so on.

**Daniel Whitenack:** Gotcha. So you have the commonalities of the language and how words are used in the language... It sounds like your goal in developing the unsupervised method is then to take those steps lower where what you're really trying to develop are the probabilities or the power laws associated with the words associated with reservations, or the words associated with purchase, or with making an appointment, or whatever the thing is.

So you have these sets of calls that have a certain more distinct statistical relationship amongst themselves that allow you to separate them out. That's the goal that I'm picking up on... Did I say that right?

**Mike McCourt:** \[00:47:01.07\] Yeah, that's exactly right. We want our topics to kind of float above the data. Because all calls are gonna be different, and everyone has their own dialect and their own individual problems... So none of the conversations are gonna be the same. We want the topics to be something that kind of floats above that dataset, and represents the themes that are consistent throughout it. And we do this through this sort of process of hierarchically splitting the dictionary into these probability distributions.

Then to try to make sure that our models are interpretable, we don't wanna fit those topics directly to the data. So we take the lexicon and we split it into the topics that you talk about, and then each topic, we say "Well, this is a phone call. You've got a caller on each end, and they have totally different roles in the conversation." So if I'm calling to make an appointment, all the words that I say are gonna be totally different from the words that the agent says... So we go through another exercise of this splitting. And then to handle individual dialects and regional variations across the country, we also actually take a really extreme step where all of those caller-side topics are then split, and every caller gets their own personal variant of each topic.

**Chris Benson:** Gotcha.

**Mike McCourt:** So that's the process by which we're looking for patterns that are consistent all the way across the dataset. So we've got the data at the bottom, that's totally nasty and totally idiosyncratic; it has all this rich, interesting information, but it's too much information... And then at the top we've got the dictionary, which is kind of uninteresting, we can all agree on that; there's not that much information there. And then we go through these successive layers of specialization to get these two ends to meet. Then at the middle - that's where we have the topics and that's what we present to the customer.

So by doing that and by tuning the math pretty carefully to match the Zipf's law, I think we made something where we end up with really interpretable results.

**Chris Benson:** So I guess as we wind up here, what are you excited about in terms of the future of unsupervised language methods, and AI and conversational data or other related topics? What does it look like for you going forward?

**Mike McCourt:** Well, something that I'm actually really interested in now -- you guys mentioned earlier the possibility of having some label data and using that to inform the topic model... That's actually something we're working on prototyping right now, and I'm really excited about. That's a case where we could have a semi-supervised model, where -- let's say, going back to the Signal AI problem, if someone says "Appointment set is important for me, but I'm only gonna give you 100 calls", I may have 100,000 calls that are unlabeled, and so designing a model that's semi-supervised, that can accept some labeled calls and some unlabeled calls, use the labels to inform the topics, so that I get not just the words and phrases, but all of the conversation topics that are relevant to this, and using that to make a more powerful predictive model - that's the direction that we're headed at the moment.

**Daniel Whitenack:** Cool. That sounds exciting, and something that I could talk with you about for many hours... But unfortunately, our time has come to an end. Hopefully we can stay connected and keep the conversation going, but I really appreciate you joining us to talk about this stuff and chat about how to develop insights from speech and conversational data. It was really interesting, and I appreciate you joining us, Mike.

**Mike McCourt:** Thanks so much. I really enjoyed it.
