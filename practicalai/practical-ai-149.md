**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing very well. Glad to be here.

**Daniel Whitenack:** Yeah. You were just telling me before we started recording that you had an animal rescue emergency right before...

**Chris Benson:** I did, so I'm just glad to show up. I'm glad to be here today. It's a good day for me.

**Daniel Whitenack:** Yeah, for sure. And you know, even more good news - so I don't know if you remember 2019, Chris...

**Chris Benson:** That's like pre-pandemic, isn't it?

**Daniel Whitenack:** Pre-pandemic...

**Chris Benson:** That's a history book thing now.

**Daniel Whitenack:** I mean, yes, but pre-pandemic 2019 we had this great conversation about data labeling with Michael Malyuk of Label Studio... And Michael is back with us. How are you doing, Michael. How are you doing, Michael?

**Michael Malyuk:** Hey, guys. Doing great. It seems like we are post-pandemic now, so we somehow survived... \[laughter\]

**Daniel Whitenack:** Yeah, it's crazy that it's been two years since we talked to you.

**Michael Malyuk:** Right, right.

**Daniel Whitenack:** Different world, right?

**Michael Malyuk:** Yeah, it's insane. We first were on the podcast pre-pandemic, and now we're on the podcast post-pandemic. So if we ever make the third podcast, I'm kind of wondering what would happen in that timeframe.

**Chris Benson:** I don't know, but I'm so envious of you, because we're still having it here in the American South. I live in the Atlanta Metro Area, and it's right now as bad as it was in the worst of the previous thing... So we have some work to do here, but I am incredibly envious of you fellas being in areas where things are getting a little bit better.

**Daniel Whitenack:** \[00:03:59.19\] Yeah, I mean, who knows what the future holds...? Who knows what the next -- like you say, Michael, the next two years will hold? But the one thing that's true is people will need to label data. I think that's something we can all agree on.

**Chris Benson:** That was such a good transition.

**Daniel Whitenack:** You know, I try...

**Chris Benson:** Oh my gosh, that was great. I love the way you did that. \[laughter\]

**Daniel Whitenack:** So I'm curious, Michael, just from your perspective as you're day in and day out in the data labeling world, and through the pandemic, what has shifted or changed, or do you see maybe certain trends happening over the past two years in data labeling? What are some of those shifts that you're seeing?

**Michael Malyuk:** Yeah, good question. It depends how you look at the whole markets. What we are seeing from our side when we are talking to our customers and to potential customers is just -- previously, two years ago, five years ago, the market, they were thinking about data labeling as something that they just need to get done as quickly as possible, not paying too much attention to some of the gritty details of the labeling process. I think it's now changing; companies are realizing that labeling is actually a way of making your raw datasets into what I call a liquid asset... And because of that, they're starting to pay more and more attention around into the process, and everything that goes into the process, all the reports, analytics and metrics inside the labeling process.

I think previously it was kind of "Hey, we just need to get our data labeled and go to the next step as quickly as possible." Now it's something where they are actively investing resources into building the internal process and practices around labeling. We probably knew that for quite some time now - the accuracy of the model more or less directly correlates with the quality of your labeled datasets... And I think that now becomes more and more this common knowledge for the whole ML market.

**Chris Benson:** Do you think that's a sign of just this whole industry that we're in maturing, and recognizing that people are moving from that -- because I remember, I'm totally guilty of that, of "Just get it done. I wanna get through my labeling so I can get to my training. That's the exciting part", the way we were thinking back then. And now people are recognizing that labeling is kind of strategic to their business...

**Michael Malyuk:** Yeah, I think it's -- if you look at the whole ML market, it's pretty new, and there was a lot of really good developments in the infrastructure world. And because of that, the infrastructure for ML kind of becomes a commodity more or less right now... And where are your actual strategic investments \[unintelligible 00:06:45.10\] how you process the data and how you prepare the data, especially if you're working with data that requires some sort of expert knowledge to be labeled... So everything around how you capture those expert knowledge into the way of labeling data - that's a very liquid asset that you have on your hands after you are done.

**Chris Benson:** Back when we talked the first time, and the world was always about the GPUs, and everybody was buying the latest GPU coming out... But there's no competitive advantage, because that's available to everybody, and the same thing, whereas the way you label is something that you can create strategic advantage for your business, that's based on your expertise...

**Michael Malyuk:** Right, exactly.

**Chris Benson:** ...if you have a great tool to do that with. So I think that's really changed mindset-wise since we've talked last.

**Michael Malyuk:** Yeah, exactly. And that's a great point, because when you start paying more attention to the process and how you set up the process, the software that enables you to do that becomes very important. From the software perspective it needs to provide you with all sorts of reports around the labeling process, so we can understand all the metrics, where we are and where we're going. So you have very tight control over that.

**Daniel Whitenack:** \[00:07:59.19\] And those metrics around the data labeling process - do you see customers putting the importance on the quality of the labels? ...like, how consistent they are, how correlated they are with this or that... Or is it more important sort of quantity? Does what I'm asking make sense? In terms of quantity and quality, how have you seen people thinking about balancing those two things recently?

**Michael Malyuk:** Yeah, good question. I think it depends on where the company is in terms of their ML adoption. What is the product that we are building? Is it just out of the R&D stage, and it's something new and we need to test it out, so the quantity is more important over the quality? Or is it something that we are using, for example, in trading on the markets? Because there the quality becomes very correlated with the dollar impact that \[unintelligible 00:08:54.08\] is going to make... So it depends on the model and what is the company's actual business use case. I think over time quality will dominate over the quantity.

**Daniel Whitenack:** And you mentioned culture a couple of times. The culture around data labeling, and also experts within an organization participating in labeling... Something that I've sort of both struggled with and tried to move forward with, but it's been a struggle, is figuring out all of the best practices around how you present a labeling task to your labelers, how they view the task, how there can be so much variability between labelers, how different groups need different types of instructions, or onboarding, and this sort of thing... How does a company approach that type of situation and maybe start to build up a bit of that culture, and a bit of that knowledge internally around expertise and data labeling?

**Michael Malyuk:** It's a very good question and a very complicated one. \[laughs\]

**Daniel Whitenack:** I would love to know the answer, because I don't quite yet know the answer, and I need to, probably soon... \[laughs\]

**Chris Benson:** I think you asked a fantastic question there, Daniel, because I myself really wanna understand that; that's the hard part when you're getting in.

**Daniel Whitenack:** Yeah. It's a complicated set of answers maybe, but... Yeah, you're closer to this than we are, Michael. \[laughter\]

**Michael Malyuk:** You're very right, because when it comes to the data that is subjective in its nature, that's where we have all those struggles with labeling that... Because there can be so many different scenarios. For example, one of the more or less obvious things when you're dealing with subjective data, you want to distribute the same sample that you're labeling to multiple people, and look at their consensus... So what can happen next - you distribute that same sample to three people, you look at their consensus, all three of them agree. But that does not necessarily mean that they labeled it correctly. Because they may label that based on their knowledge that all three of them have, but \[unintelligible 00:11:06.21\]

**Chris Benson:** So there's a bias there.

**Michael Malyuk:** It is a bias, yeah. Basically, all three of them are biased, and they're biased in the wrong way. So there needs to be a verification step after that. But that's when you actually start labeling data. What comes before that is what you mentioned, instructions for the data labeling. What comes even before that, what we have found out working with large organizations is the teams inside large organizations - they can run multiple data labeling projects, they may use the same semantically-named labels, but the actual name of the label is different. So you can think about all the varieties, how you can use the label name for the first name and last name. It can be fname, firstname, it can be just name, and things like that.

So even on the company level, when you start and you launch the labeling project, it can be already inconsistent with how other teams inside the organization are thinking about it.

**Chris Benson:** \[00:12:07.29\] That begs the follow-up - if you're in a company that is wanting to move... You may have dabbled in deep learning, but there's so many organizations out there that are still not fully in, they're not at a mature level, they're exploring it still, and they're trying to understand how to be productive without wasting lots of money and focus on that. So how should a company be thinking strategically? So not just the practitioner who's doing the labeling themselves, but if you're leadership and you're wanting to invest in workflow and in infrastructure to support it, how should you be thinking about that in terms of what your company is trying to achieve, so that you get the best out of your practitioners when you have them go in and actually do the thing?

**Michael Malyuk:** Yeah, great question. So what I think from the company perspective, from the leadership perspective - take very small steps towards the goal. I think validating the use case with very little labeling, as little as possible, is the first step. And understand the process of \[unintelligible 00:13:10.04\] And this process would be different for every organization. It depends on a number of things. One of those is what type of data we are labeling. Is it subjective? Does it require subject matter experts? etc.

Another kind of dimension is what resources do we have to do that? Do you want to include people from the operations teams? Is it gonna be data scientist labeling for the most part? How are we gonna be doing the verification step? Who is gonna be doing that? So understanding this process to get you to consistently-labeled results I think is a critical part in thinking strategically about the data labeling.

**Daniel Whitenack:** And one of the things that I've run into a few times recently is even just the concept of data labeling. It's so common to us as data scientists or practitioners, and we totally get right away why we need this, and often the huge value that it provides... But then convincing other groups within your organization about an investment in this area, and thinking about this area... It's actually more difficult than I expect, in many cases.

**Chris Benson:** That's a good point.

**Daniel Whitenack:** Yeah. I mean, I don't know if they think "Oh, we're investing in AI, not data labeling", you know? Or whatever the thought process is.

**Chris Benson:** It's this label thing, yeah...

**Daniel Whitenack:** Yeah, I don't know... As the CEO of a data labeling company, I'm sure you have many of these conversations with maybe non-technical people about this process. Any tips for explaining the value of an investment in this area to people that are maybe not data scientists, or aren't using the data themselves?

**Chris Benson:** It's so central, and yet it's kind of invisible to people who aren't actually doing the work.

**Michael Malyuk:** It's more or less like that, because when you think about the data labeling and you think about the budget that you would need to invest into that, you kind of start thinking "Well, maybe we can figure something out." \[laughs\]

The way I'm thinking about it and the way I usually talk about it with our potential customers is we are right now in a pretty unique stage when ML and AI is being integrated almost into every organization in the world, one way or another. Products are being built based on the ML models, and for the companies, one of the easiest ways to improve their model performance is actually improve their data labeling processes. And improving your model's performance would mean that your product becomes more competitive on the markets. If your product is more competitive, you can capture more data with your product, and you can improve your model even further.

\[00:16:11.14\] I look at it from the way why Google dominates the search space... Because they were the ones to figure out the algorithm that would make their engines stronger, with more web pages that they crawl. And the same thing with the data labeling - you can improve the models and make the models stronger, more competitive, capture more data and keep improving. Basically, over time I think those companies that are investing in data labeling now will dominate their specific markets.

**Chris Benson:** That makes a lot of sense when you think about it, and I think that outside of our tiny community it's not really understood very well. Effective labeling can either make a dataset really, really useful and really productive across multiple things, and yet if you don't do it well, you can end up with very poor results with the same data.

**Michael Malyuk:** Right.

**Chris Benson:** Going to Daniel's comment a few minutes ago, I don't think that's well understood in a lot of executive ranks.

**Break:** \[00:17:06.08\]

**Daniel Whitenack:** I think we've done a good job at really diving into the value of data labeling and how people are thinking about it now, which is fascinating... But I'm curious, on the tooling side -- I definitely wanna get into Label Studio and what has progressed since then, because I have some thoughts and questions there, too... But in terms of the space in general, how are you seeing this space of tools around data labeling grow and shift over these past couple of years?

**Michael Malyuk:** It's pretty crazy. It's a very crowded market, in some sense. There's a lot of tooling. Even two years ago, with our previous podcast, it was already pretty crowded. Now there are more players and more tooling around the data labeling tools, which I think is interesting... So there are all sorts of data exploration tools as well that are now available...

On another hand, it's very exciting to see a lot of smart people put in a lot of effort into building all that ecosystem at the moment.

**Daniel Whitenack:** So with that, why don't you tell us a little bit about label studio itself, in case people haven't caught the previous episode, but also a lot has been updated since then... And I've got a little bit of a secret to tell Chris - I am not unbiased in this conversation, because I am a Label Studio fan and user... Our organization uses Label Studio, and I've used it on a bunch of different things over the past couple of years.

\[00:19:55.00\] So I am personally very happy that we had that conversation two years ago, because it's saved me a lot of work over the past couple of years, looking at Google Sheets where people have tried to label something, or something like that... Anyway, tell us a bit about what Label Studio is and how people can use it maybe.

**Michael Malyuk:** Yeah, sure. Label Studio is an open source data labeling tool. One of the key features that was a key feature two years ago and is still one of the key features today is that it's the most flexible data labeling tool. So instead of us giving you the interface that we think would work for your use case, you use the configuration language that we have created to build the interface for your specific dataset.

It's multi data type, so it supports a variety of data types. If you want to label for text, for audios, for images... And it's also multi-modal. So you can put the text and the audio, and multiple images on the same screen, and label them at the same time. To install, there is our website; you can google Label Studio. As I said, it's open source software, so there is a pip package, there is a Docker container... All of that you can get up and running in a couple of minutes.

**Daniel Whitenack:** Yeah. I love the fact that I can just launch the server. Chris, I'm gonna \[unintelligible 00:21:18.21\]

**Chris Benson:** Go ahead.

**Daniel Whitenack:** So I can launch the label studio server, and then it's available, and then I can build different data labeling projects within the one server... So it's not like I have to preconfigure my labeling task and then launch it. I can launch it and then build my labeling task in the interface, which was kind of fun... Because I'm not like a UI person, by any means. So being able to do that, and the sort of customization has been cool for us, because -- for example, the last one I set up was a question answering dataset labeling... And even if there's a preconfigured thing for question answering, it's like there's a question, maybe a context or a passage from which you're answering that question and you select the answer in the text, or something like that.

But for our task, we actually had nine different contexts, and we had to select the answer in each one of the nine different contexts. So in another tool that wasn't like this I would sort of have to shove all of that together in maybe like the same text, and then create little markers to separate them and do pre and post-processing. But here, I could just add nine different text blocks to label. I think for me that customization is a really key feature. Maybe you have stats on this, in terms of what people are using, or maybe you don't, but... You have templates, but do you see a lot of people in your Slack channel and other things? What are some of the creative ways that you see people customizing these tasks?

**Michael Malyuk:** I think one of the powerful features of Label Studio is that you usually just need around ten lines -- well, depending on the number of labels that you have, sometimes you just need ten lines of this configuration language to build a pretty complicated interface... And that's what we usually see in people coming up with the interfaces, with like 10, 20, 30 lines of code... But at one point I was on this interesting call with one of our potential customers at the moment, and they just shared their screen; they used 400 lines of configuration language, so basically almost built like a web portal inside Label Studio. It was crazy just to look at that... All the different things that they have put in there...

**Daniel Whitenack:** Like, how much time they've spent in that window, making that thing... \[laughter\]

**Michael Malyuk:** Right, right.

**Chris Benson:** That sounded almost like another mea culpa from Dan right there, like "I've done that..."

**Daniel Whitenack:** \[laughs\] We won't get into that...

**Michael Malyuk:** But it was interesting to see what are some of the extreme use cases that people have done with the tool.

**Chris Benson:** \[00:24:06.09\] So I'm gonna follow up... I've gotta tell you, Michael, I don't think I've ever seen him this just purely excited in one of our episodes about something, so I'm very impressed.

**Daniel Whitenack:** Oh yeah, I'm a total fanboy.

**Chris Benson:** And the listeners can't see, but we can see each other in the thing, and yeah - totally, man. I want to convert the excitement that Daniel has over to our listeners that haven't used it before. Can you take that and kind of talk a bit about your workflow for someone who hasn't had a chance yet, and they're sitting their in their car, they're in traffic right now and they're going "When I get to the office, I'm gonna open this up and go do it." What should they expect? What should they be thinking about? What's the workflow look like?

**Michael Malyuk:** Yeah, so in a nutshell, it's a web app. This is something that runs in your browser. This is something that you can launch in your EC2 instance, or whatever server you're running, on your laptop... It doesn't need a connection to the internet. You go to your browser and you can start creating the data labeling projects.

As I said, it's very flexible, so you can configure it specifically for your datasets, no matter what your datasets consist of. Images, dataset, if you're doing \[unintelligible 00:25:12.24\] audio segmentation... All the variety of the use cases. And then what's also interesting is you can start connecting the machine learning models to help you do the annotation, and the flow of that is very interesting, because you do a batch of annotations and you retrain your model; and then you do another batch, and then you retrain your model again, and you get the new predictions out. And you keep improving the model predictions this way.

It almost feels like teaching a child to do a certain specific task for you. This is something that I personally find very exciting, because for me it was like "Okay, I can see the actual improvements of the model and its predictions in real-time." And this is just one of the setups, how you can set up Label Studio.

Another one might be that if you're running some sort of human-in-the-loop types of ML pipeline, where if the model is not sure in its prediction, you send that to a person, and the person would be labeling inside Label Studio; as soon as they label, it gets back into their retraining phase. That's another use case.

We've put a lot of effort into making sure that the actual interface inside Label Studio is very intuitive and easy to follow... Because as data scientists, we always focus on ourselves, but we also put specific focus on non-tech-savvy users... Because those users can actually have a lot of very specific domain and interesting knowledge, and you wanna be capturing that. But if you build a tool that is very complicated, they would spend a lot of time figuring out how to use that. So we are trying to make it as simple as possible, but yet powerful. I hope that got somebody interested...

**Chris Benson:** I bet you did.

**Daniel Whitenack:** Yeah, and maybe that's part of going back to the hard questions that we discussed earlier about building that culture of data labeling, getting instructions right, setting up the tasks right, doing verification... All of these sorts of very hard things. If you don't have to add to that, like an interface that is very unfamiliar and they can't figure out how to use, then that's at least one less thing to complicate those muddy waters. So a web app and a browser, where people can just sort of click things. That's a nice scenario, I think...

\[00:27:47.14\] I'm sure you've looked at user experience, UI type things over time, Michael... What has that experience been like, as you've developed the frontend of Label Studio, and maybe things that you thought would work and didn't work, or maybe things that you integrated and people loved, but you didn't think would have been as big of a deal...

**Chris Benson:** He's smiling before the answers...

**Michael Malyuk:** \[laughs\] Many, many... What I think is interesting -- one other reason why we wanna give you this flexibility of building the UI is because you can keep only the relevant parts that are relevant to your datasets. And that minimizes the error on the annotators. So they don't have something that they actually don't need to use in terms of the UI elements.

Another thing on the UX and UI design - I wanna really praise our open source community... So we have had dozens of UX sessions with our open source users. We basically just \[unintelligible 00:28:48.00\] and we ask them to click around, and show them the prototypes. They've been very, very helpful in designing the application. We have right now more than -- well, not more than, but close to 2,500 people in our Slack, and some of those community members are very helpful. We can do ourselves only as much, but then the other bigger part comes from all the contributions in terms of how we may think about certain cases from our community.

On the mistakes part, we have done a lot of things that didn't really work, but we were quickly identifying those things that are kind of not really user-friendly, and just removing them. We have this tendency to really understand what doesn't work, trying not to clutter the application... Because again, we try to make the tool as simple as possible, but yet to have all those powerful features... Which is more of an art than a science, I guess.

**Chris Benson:** I'm curious - you've got me excited all over again. I remember the excitement of this, because I haven't been doing as much hands-on as Daniel has, but I went and started using that as well afterwards... I just don't know it as well. I'm wondering though, as you've done these improvements over the last couple of years and you're looking at a world where this is just gonna become more and more embedded in business, so it's not this off thing... And the amount of data, as people are finally starting to learn how to collect their data, and not have it transient and gone, and they're storing it, and the volume of that data goes up by orders of magnitude... And to some degree, for use cases, the quality of the data may vary tremendously on that - how do you envision the process of labeling going forward in the years to come, as the problem is solved in the sense of what you've done so far, but it's an ever-changing problem, and so you're constantly gonna have to chase that down... How are you seeing that curve into the future?

**Michael Malyuk:** Yeah, great question. I think in the future -- well, there are different vectors. First of all, with ML adoption itself we're just gonna have more and more use cases that ML can support, meaning that from a labeling perspective we would need to do a lot of the multi-modal labeling, and just different \[unintelligible 00:31:11.14\] of labeling that we were not thinking about right now.

Then from the perspective of the volume, we're gonna have a lot of the really well pre-trained models that \[unintelligible 00:31:22.13\] a vast amount of data automatically... And then basically, people would be concentrating on other edge cases, the main specific cases, and just cases where there are not good pre-trained common knowledge models available yet.

I think with more ML adoption in the business, we'll see that the need for labeling is only gonna grow, just because of the fact that ML is gonna support more and more use cases within the business.

**Daniel Whitenack:** Do you get any sort of weak signals off of what people are doing with Label Studio in terms of the different domains of machine learning, AI, in terms of people's focus on NLP, or people's focus on audio, or new things with computer vision? Do you happen to see trends in that, with new people coming into Slack, wanting to do, all of a sudden, something like that?

**Michael Malyuk:** \[00:32:23.25\] Yeah, it's a good question, but it's not that easy to answer... Because what we see, for example - we are one of the very few tools that supports time series labeling... And the majority of the people that are doing time series labeling, they use Label Studio. So we see a lot of those people. But then on the other hand, we se a lot of people who are doing labeling for computer vision, and -- well, they're not comparable; there's more people doing computer vision. But we have more competitors in terms of the computer vision data labeling tools.

So I would not be able probably to say that there is a one dominant data type that we see people using the tool to label... Again, because of the flexibility of the tool... And over time I don't think that we see a lot of the change, because the data types are distributed more or less equally, just from the fact that people usually use a few of the data types at the same time, on the same screen. You can think about audio, and then there is a transcription for the audio, and you kind of wanna have the audio on the same screen, just for the reference, and then you labeling the transcript... So it's hard to pick something and identify the change, just given the flexibility of the tool and what it provides to the end user.

**Chris Benson:** Are there a lot of use cases for having kind of that multi-modal approach? If you go back a couple years and people would tend to be either really focused on NLP, or really focused on labeling convolutional, but they tended to be one or the other, in my experience... And what I've seen since then is a lot more integration and less emphasis on what it is. Are you seeing more of that in the tool, and how does the tool accommodate that workflow as it's evolved into this kind of mesh of different approaches together?

**Michael Malyuk:** Yeah, totally. I think there is a clear trend for multi-modal being on the rise... And from the tooling perspective - yeah, because you're building the interface yourself, you can put as many data types on the same screen as you want. And because you have this ability, even if you don't do the multi-modal labeling - you label, let's say, just the text, right? Having the audio for the context, if the text is not clear, because the transcription was screwed, you still would wanna do that. So the tool kind of naturally supports this type of use cases. But yeah, I agree, I think that we are definitely moving into more of the multi-modal world.

**Daniel Whitenack:** So we've talked a lot about the tool itself... It is an open source tool, and I'm always curious in terms of people that are building a business around open source, whether that be Label Studio, or Hugging Face, or the sort of Grid.ai people with Apache TVM - all of these different cases. It seems like people of course are always playing with that model and figuring out how it works... So you've got the open source tool, but then also you're dealing with a lot of data, and open data is very much a topic right now... So how do you think about building your business in the space around the open source tool, and has that been a struggle in terms of that balance?

**Michael Malyuk:** For the open source company it's always a struggle. Because it's open source, you have to identify what you actually wanna sell as a product, so that's always a complexity... But I think there are some really strong advantages to being an open source company. One of them is the community. You get a lot of insights from the community. They help you improve your software the way you would not be able to improve your paid product.

\[00:36:04.12\] Another one - because of the community, you have one of the largest community of testers of your software, meaning that your software becomes so well-tested, just because of the pure adoption of that. You have one of the most stable tools out there, which I think is great... And also an advantage is, I think, at least to myself, they compound over those disadvantages, where you have to struggle sometimes to identify if this needs to go into the open source, or that goes into the paid product...

Then another one that I think is really important from a company perspective is all our developers have direct access to the users of their software. That makes them really happy, when somebody is getting a lot of value out of it, and they talk about you on Twitter, or somewhere else, and they just tell you how great is the tool that you have built for the developers. It's basically the best they can get. They get very excited about that.

I think at least for myself the advantages of being the open source company clearly beats all those disadvantages that we may have.

**Chris Benson:** We've seen a lot of the tooling in the larger AI/ML space start as open source, which was very different - and I can say this, because I'm on the older side - from the way the software world started off. It was all commercial, and open source kind of came in, and it was small for a while, but it grew and took over. We've had the benefit in ML of being able to start from that. Do you think that that will continue to be the model, just because of the benefits that you've just now drew out, that it allows you to kind of accelerate and be totally connected with your user base?

**Michael Malyuk:** I think there are gonna be -- I hate to hypothesize on what the future holds for us... If two years ago you would have asked me about the future, I would probably not be able to predict the pandemic coming...

**Chris Benson:** Nor did any of us... \[laughter\]

**Michael Malyuk:** But I think it's gonna be a mixture of both. I think there's gonna be a huge market for the commercial-only, closed source solutions, and there's gonna be a market for the open source. It's just that they are different models, and I think both of them have their advantages and disadvantages. So I'm kind of not thinking about commercial being in the way of open source. I think they can just go in parallel.

**Daniel Whitenack:** Yeah, and data labeling I'm guessing will always remain fairly challenging. There will always be an opportunity for people to build a business out of those things, just because it is so challenging.

**Michael Malyuk:** Right.

**Daniel Whitenack:** I like what you were mentioning earlier, about one of the things you're sort sort of keeping track of is people using models to see their labeling, so pre-trained models to do that... That's definitely something that has benefitted us, so it's cool to see that you're integrating some of that ML layer within Label Studio.

I'm curious, as a user - maybe not as futuristic of a question, but what does the roadmap look like for label studio? What are those things that you're really getting a lot of requests for, or are really at the top of your mind in terms of enabling in the tool?

**Michael Malyuk:** First of all, we do have a public roadmap on our GitHub. I'll share one that I think is probably the most exciting one... In the next couple of months we're gonna be releasing the support for video. Right now you already can do the video classification types of tasks, but we'll be releasing the one where you'll be able to do the object recon.

**Chris Benson:** That's cool.

**Michael Malyuk:** Yeah. This is gonna be huge. With the introduction of this proper video labeling, we'll be covering all major data types. That was our goal for the labeling tool. So that's pretty exciting.

**Daniel Whitenack:** \[00:39:56.14\] Yeah. I know that there's cloud video editing tools and stuff now... I'm sure that that does definitely put a bit -- maybe more of a strain on the tool in terms of its performance than other things. Is that coming last because that major category that you're talking about coming last because of some of those challenges, or is it just sort of like the growing need for that, and that's what sort of came next?

**Michael Malyuk:** It's a mix of both. It's both challenging from just the complexity of video labeling is very high. Then we see more need in terms of our users asking us about labeling... And then we just started with the images, audio syntax, just because the founders of the company \[unintelligible 00:40:42.28\] we all were coming from exactly these backgrounds ourselves... So the video labeling, for some reason, it comes the last one. But I think it will be a good thing to get all of them under the one hood.

**Chris Benson:** It's interesting to me that you said that, and they announced that, because I think it puts pressure maybe on an area in software that wasn't really thinking of themselves as having to worry quite so much about ML. It's not central to the thing. It's ancillary in some, but there's a whole new arena that you're gonna be moving into in that sense.

**Michael Malyuk:** Yeah, totally. And I think what's also exciting is because -- again, you can put different data types, and we try to make them talk to each other, there are very interesting use cases that can be uncovered by that. One of the use cases that was very much request by our community is for example when you're doing the time series labeling and you wanna have the reference with your video stream... Because when you think about labeling those plots, they may not provide you enough information by themselves to do that labeling, but when you have that video stream that acts as a reference for what for example the \[unintelligible 00:41:59.23\] was doing, then you can effectively label a time series.

I think this kind of merge of different data types on the same screen supporting each other opens another box of the use cases that will be available to the community.

**Daniel Whitenack:** Awesome. In two years from now, when we are having this conversation again, what do you think we'll be talking about?

**Chris Benson:** No more pandemics though...

**Daniel Whitenack:** Yeah, hopefully no more pandemics. Maybe the data labeling world will be fully taken over by Label Studio, but... Yeah, I certainly hope that we have that conversation.

**Chris Benson:** I think he's gonna have Steven Spielberg sitting next to him at that point. \[laughter\]

**Michael Malyuk:** Maybe I already have him. \[laughter\]

**Daniel Whitenack:** Well, it's been super-fun, Michael. I really appreciate it. I'm looking forward to that conversation in a couple of years, so thank you so much for joining...

**Michael Malyuk:** Likewise.

**Daniel Whitenack:** And we'll make sure our show notes include all the links to great Label Studio stuff, so all of you who are listening definitely check it out. We'll talk to you soon, Michael.

**Michael Malyuk:** Thanks, guys. Thanks for having me.
