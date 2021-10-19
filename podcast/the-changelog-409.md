**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. I think it is a lovely day to talk about AI.

**Daniel Whitenack:** Oh, it is a beautiful day to talk about AI, and I was thinking -- we've done a lot of these Practical AI episodes, haven't we

**Chris Benson:** I think we have. I think we're actually hitting a milestone, possibly, at some point here...

**Jerod Santo:** HEY!!

**Chris Benson:** Hey, who was that?

**Daniel Whitenack:** Wait... Did we not lock down our Zoom?

**Chris Benson:** Oh, who has the password...?!

**Jerod Santo:** Surprise, guys! We're here.

**Adam Stacoviak:** Hey, what's going on?

**Daniel Whitenack:** What's going on?!

**Chris Benson:** Oh, my gosh...

**Adam Stacoviak:** We're bustin' in on this party.

**Chris Benson:** Oh, that's Jerod Santo and Adam Stacoviak of the Changelog... Who are kind of our bosses, you know, Dan?

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** Oh, please don't call us that...

**Chris Benson:** Are we in trouble...?

**Jerod Santo:** \[laughs\]

**Daniel Whitenack:** We've gotta be careful what we say...

**Chris Benson:** What's going on?

**Jerod Santo:** Well, we're here to say happy 100th episode, guys.

**Adam Stacoviak:** Yes... What a milestone.

**Chris Benson:** It is. Can you believe we've done that many episodes?

**Daniel Whitenack:** Yeah, 100 episodes talking about AI. Who would have thought there'd be that much to talk about?

**Chris Benson:** True.

**Adam Stacoviak:** Well, podcasting is hard... Doing 100 episodes is harder, so... Seriously, congratulations for sticking out, and...

**Jerod Santo:** Yeah, absolutely.

**Adam Stacoviak:** ...not just sticking out, but thriving. Congratulations.

**Chris Benson:** Thank you very much.

**Daniel Whitenack:** Yeah, it's been a lot of fun.

**Chris Benson:** \[04:14\] It's been a long time, so listeners who have been listening all the way since the beginning may recall that Adam and Jerod actually interviewed Daniel and me in episode number one, as we got going...

**Jerod Santo:** That's right.

**Chris Benson:** ...and they've finally come back. They've been here all along, but now they're back.

**Daniel Whitenack:** Yeah.

**Jerod Santo:** We're back, baby.

**Chris Benson:** So the team is all in line together.

**Daniel Whitenack:** We've gone full circle.

**Adam Stacoviak:** We're silent behind the scenes.

**Daniel Whitenack:** Yeah, you're always around, but... What was the date of that first episode? 2018, July 2nd. So it's been a little over a couple years.

**Adam Stacoviak:** What's funny though is the recorded date is April 20th, 2018; so I guess we took a lot to ship that.

**Jerod Santo:** The first one is the hardest.

**Adam Stacoviak:** Is that accurate, Jerod, do you think?

**Jerod Santo:** Yeah, probably...

**Adam Stacoviak:** Wow. I wonder what happened there.

**Daniel Whitenack:** Maybe we just didn't know how to tag them correctly at that point in time.

**Jerod Santo:** That could be the case as well.

**Adam Stacoviak:** I don't know...

**Jerod Santo:** Well, there was lots of stuff to figure out, like how to do the intro, what music to use etc.

**Daniel Whitenack:** Yeah.

**Jerod Santo:** Plus, we were also launching other things at the time...

**Chris Benson:** True.

**Jerod Santo:** Regardless...

**Chris Benson:** And we had to figure out if this whole AI thing was just a fad or not, you know...?

**Jerod Santo:** That's true. Well, so what's the consensus? Is it a fad? Is it over?

**Daniel Whitenack:** Oh, it's definitely a fad. \[laughter\]

**Chris Benson:** Definitely a fad, yeah. It's going away.

**Daniel Whitenack:** Yeah... I think it's sticking around. I don't know -- one episode that we talked about this, and maybe I've mentioned it a couple times... I'm kind of thinking of it at this point like another layer in the software stack; so just like developers don't necessarily have to be into all the weeds of DevOps, and CI/CD, and that sort of thing... But if you're gonna be a developer these days, you're gonna sort of interface with DevOps and CI/CD at some point. So I'm kind of started viewing it that way, where if you're a developer these days, even if you're not an AI practitioner, you're gonna sort of interface with AI-related something at some point.

**Jerod Santo:** Hm... What are the most bucketized or verticalized aspects of AI that are in products today? I know there's computer vision, there's natural language processing, sentiment analysis... What are the ones that people are using, where it's like "Yeah, this is kind of a little niche inside of AI, this little niche", or a product that people are actually putting into play?

**Chris Benson:** Well, those are certainly the biggest two right there, and in terms of commercialization showing up all over the place.

**Daniel Whitenack:** There's definitely a lot of areas, even of computer vision... So I would say certain things like facial recognition, or object recognition, are fairly commoditized in terms of major categories of detection, and that sort of thing. My wife and I just bought a building for her business and there's no internet there yet, so we bought these deer cam things, like trail cams that snap a picture if something walks by; that's my security system right now... And they have an option, it's like AI-integrated; if a deer walks through the zone of the camera, it will identify that it's a deer and ping your phone... Versus a turkey or other things that people shoot, I guess...

**Chris Benson:** They're great. I use those to catch lost dogs around here, because we do all this little animal stuff.

**Adam Stacoviak:** Interesting.

**Daniel Whitenack:** That's a better use maybe.

**Jerod Santo:** I hate to burst your bubble, Daniel, but deer are not dangerous, man... You don't need to protect yourself from deer.

**Daniel Whitenack:** \[laughs\] Yeah, I've even so far caught other things that I wish wouldn't have been in our building... But that's another story.

**Chris Benson:** I'm just envisioning the deer coming in from the skylight in a Tom Cruise fashion, you know...?

**Daniel Whitenack:** Yeah, maybe so.

**Jerod Santo:** Oh, yeah...

**Adam Stacoviak:** I should mention my side-project then.

**Daniel Whitenack:** Yeah, go for it.

**Jerod Santo:** Please do.

**Adam Stacoviak:** \[07:46\] So I live in a cul-de-sac, and I've got some cameras outside my house... So I've fed all my neighbors' faces into a little system, and then I can detect whenever there are people in my cameras that are not those people.

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** Oh, interesting...

**Adam Stacoviak:** I'm kidding! I want that. I can't make that, but that would be cool.

**Chris Benson:** Interesting.

**Daniel Whitenack:** Oh, you could totally make that.

**Jerod Santo:** Do your neighbors know you fed their faces into a system?

**Adam Stacoviak:** Jerod's like "Dang, dude... You're awesome."

**Chris Benson:** I thought you were saying you had done it, and I was like "I'm not telling him. \[laughter\] I'm keeping quiet." I'm in a cul-de-sac too, but I don't think any of them are listening to this...

**Adam Stacoviak:** Wouldn't that be so cool though?

**Daniel Whitenack:** That would be pretty cool.

**Jerod Santo:** Well, you'd have to get your neighbors' permission.

**Daniel Whitenack:** I mean, it's not that hard to build. You should go for it.

**Chris Benson:** It doesn't take that many photos to do it well.

**Daniel Whitenack:** I'm just looking at, for example -- I mean, Google Cloud, AWS, all these platforms have different things... So they have categories, like in Google Cloud they have sight, language, conversation, structured data and Cloud AutoML these object detection sort of things... Language... Of course, translation is very much used these days, but also transcription and speech recognition, and then there's conversation-type stuff, like chatbots, and like you're saying, sentiment analysis.

**Jerod Santo:** Right.

**Daniel Whitenack:** Those are all definitely pre-built solutions for all of those things out there, for sure.

**Chris Benson:** Can you tell that Daniel is a natural language processing expert?

**Jerod Santo:** \[laughs\]

**Chris Benson:** He just whipped those things right off the top of his head like it wasn't even -- he didn't even have to think about it.

**Jerod Santo:** Let me flip this question on its head then - what are some untapped areas, or some emergent areas where people aren't quite putting this into play yet, but it's going to be big once it reaches the masses?

**Chris Benson:** The first thing that comes to me is adversarial networks, which I know we recently had an episode on, but there are so many uses for adversarial situations, and GANs (generative adversarial networks).

**Jerod Santo:** GANs... So what are some uses of GANs that we could look forward to?

**Daniel Whitenack:** Deepfakes.

**Jerod Santo:** Deepfakes?

**Chris Benson:** Yeah, that's the most famous...

**Jerod Santo:** Aren't those here though? Or are they just not that easy to do?

**Daniel Whitenack:** I think what Chris is meaning is good applications of GANs, probably...

**Chris Benson:** I was going for good applications, but you are right too, Jerod. \[laughter\] You are right, too. You know, the nefarious thing there...

**Daniel Whitenack:** Right, yeah.

**Chris Benson:** ...and we're certainly seeing that.

**Daniel Whitenack:** There's some cool things though. People are using these generative networks to generate almost in a data augmentation sort of way... For example in healtchare - if you need to generate a bunch of example medical imagery of tumors to help you train other models that discriminate between cancer and not cancer, it's hard to get your hands on that data because it's all very private, there's HIPAA laws, all those things. So if you have a small amount of it, and then use one of these networks to augment your creation of other data, that can really be a benefit.

I'll also say, just because I'm always the language-related person, that even though language and conversation is on this sort of list on the major platforms, almost 98% of language of the world have no support. So I think also as the benefits of AI extent to emerging markets in the developing world, there's gonna be new applications or new challenges in language, but also there's gonna be other new challenges that are probably hard to anticipate, because most of AI development has been fairly anglo-centric...

So when you're solving problems in other contexts -- you know, I think there's cool stuff going on in agriculture... A lot of times when we think of AI in the U.S. we might think of driverless cars, or some cool tech thing like that... But for a lot of the world, agriculture is a big deal. So cool new stuff in agriculture or other areas, as AI kind of gets hopefully democratized, and the benefits of it extend to more than just the U.S. and Europe.

**Adam Stacoviak:** Is there anything like a Hippocratic Oath for those in AI? Because I'm thinking a GAN could be both good and evil, right? So is there any moral compass when you think "Okay, I wanna be a practitioner, or an expert, or somebody doing these things using these for good."

\[12:13\] I can see the tumor detection - totally a good reason to manufacture (for a lack of better terms) data to support medical research and whatnot, given the privacy of medical records, and individuals, and things like that... But is there anything out there like a Hippocratic Oath for AI?

**Chris Benson:** There is a rapidly-developing entire professional field that is addressing that, which is commonly called AI Ethics, or Responsible AI is another term for it; there are several terms that lend themselves to it, and they're tied into other terms, like Explainable AI... So yeah, there is definitely the recognition -- going back, Adam, to your determination to capture all your neighbors' images and enter them into the--

**Adam Stacoviak:** Yeah, I would do that with their knowledge. I would literally go to them with my iPhone and say "This is for my neural network to detect you, and not the (in quotes) bad guys or bad people that come into our cul-de-sac." Some realness behind that - our neighbor down the street... We live in a decent neighborhood, and our neighbor down the street got their tires stolen two days ago...

**Chris Benson:** Oh, wow...

**Adam Stacoviak:** Legit. He went out and his truck was on blocks.

**Daniel Whitenack:** That's disturbing...

**Adam Stacoviak:** You know what I mean? We have these things happening, and I think it's just a result of the economy, honestly. I don't think that people are generally that bad. I think that people get desperate, and these are things that happen in desperate time, and the economy is definitely suffering... So you have people that are willing to do things that maybe they're not more willing to do otherwise, but... I'm not saying thieves don't exist any other day, but I think it might be a normal occurrence or a more common occurrence. And I live in Houston, so it's a pretty well-populated city.

**Chris Benson:** Yeah... You know, if you take that condition and you put it in the context of AI, we don't have safeguards. So we have this field that's developing called AI ethics, but across the world we really have very little law or regulation that people are required to follow... So for the most part, it is other laws that are not specific to this, that have applicability.

GDPR is one thing that comes to mind in Europe, and that is really the only national-level law that I can think of off the top of my head. Am I forgetting something, Daniel? I know California has some laws...

**Daniel Whitenack:** Yeah, there's some other regional things, and I think probably there's others that exist now... But I think in general, people are still reliant on developing good principal statements and how that trickles down to the actual development workflow... Like, Google and Microsoft, IBM - all these companies have developed their AI principles... And that may or may not trickle down to the actual development work.

Also, I think there's still a perception that any sort of -- like, when developers hear "governance" or that sort of thing, it's just an assumption that it's gonna slow down all work until we can't do anything... So I think that feeling still exists there, although people would acknowledge that there's some important problems to address.

**Chris Benson:** You know, it's funny - I was on a call where I was having a conversation with some folks from the World Economic Forum about a week ago, and we were talking about this a little bit... There are so many companies putting out so many principles that it's becoming cluttered, and a comment was made that there are enough really good examples out there of AI ethics, and maybe this is a moment where before you go create your own, you do a little soul-searching in your organization and go pick one of the 100 great examples that are already out there, just to make it a little bit easier for people to keep track, and stuff. I mean, it's definitely a growing field, but it has a long way to go to mature.

**Jerod Santo:** \[15:59\] It's funny, Daniel, I was listening to your guys' AI ethics episode, which was just recently, and I very much identified with you when you said that -- because Chris, you light up on this topic; I can tell you're into this. This is where you play, thinking at this level... And as a listener and a producer of the show, I feel like Daniel is more boots on the ground, slapping the code against the data kind of a person... And he's like "When I hear governance, or I hear these things...", he kind of resonated, and I was with him; my eyes glaze over and I'm just like "Oh, here we go again..."

**Daniel Whitenack:** Yeah, and I think it's what people don't realize though - and I don't think it's immediately obvious... In O'Reilly -- I forget who wrote the post. Maybe I can find it and put it in the show notes... But they wrote an article about doing good data science, ethical data science actually allows you to do better data science. I think that that is generally true in the sense that part of the whole governance aspect is understanding what data produced what AI model, that produced which predictions, at what time... And if you actually know those things, your development workflow can be sort of super-charged, because you're not duplicating your effort, you know what you did in the past, you can do some analysis to figure out what parameter space you've explored, and what issue popped up when you did what... So there is a lot of benefit there, and I think that's why certain of these practical tools plug in. We had an episode with Allegro AI recently, and they have an open source project called Trains, which helps you track a lot of these things...

And there's other projects like Pachyderm, which is an open source project that helps track some of these things... So I think there is developing some tooling around it. It's still not super-streamlined. So still when you're on the ground, doing the development, it's not just like there's not road bump when you try to integrate these things.

**Jerod Santo:** Right.

**Chris Benson:** Everyone has their own approach to it and their own solutions. There's no standardization yet. We're way before that. It's in TensorFlow, but once again, that team has done -- and I haven't used it, but presumably a really good job... But it's their thing that their community is for. So it'll be interesting to see how this rolls out in the years to come.

**Jerod Santo:** It's kind of like a code of conduct; similar concepts. You need one, you should have one, if you don't enforce it, it's useless... If you don't have the tooling to help you enforce it, then it's difficult to enforce; they're hard to write, so usually start with somebody else's... But if you don't internalize that somehow, then you're just cargo-culting somebody else's values, and they're not yours... So there's lots of things there.

I'm curious how the state of explainability has moved since you guys started the podcast... Because that's one big aspect of this. The scary, hard thing about machine learning and whatnot is the fact that you're basically putting data into a black box, training the model, and then out comes your response... There's not necessarily a policy that created that response; it was a bag of bias, or not bias, or whatever you put in. With algorithms, we can write an algorithm and you can go back and say "Who wrote this?" and you're like "I wrote that." "Why did you write that?" "Well, because my boss told me." "Why did he do that?" "Oh, here's the policy." "This is a bad policy, and it had these bad effects with these things. It's non-deterministic." You're like "I don't know how we got this result... It just happened." But as you talked about, there's progress on explainability, which is great both as an end user... "Why are you showing me this ad?"

**Chris Benson:** Daniel, you interviewed Darwin AI recently...

**Daniel Whitenack:** Yeah.

**Chris Benson:** What was your take-away?

**Daniel Whitenack:** Yeah, that's definitely a good episode to listen to. There were some things happening there in terms of explainability... But I think that there has been some progress. I am hesitant to say that I feel like there's been a huge amount of progress. There's still a huge amount of open challenges and open questions. There is more organized information now though, I think...

\[20:04\] There's a book which you can actually read online, it's called Interpretable Machine Learning, by Christoph Molnar. You can just read through the entire book, and he talks about all sorts of things, from counterfactual explanations and adversarial examples... We just had a previous show on adversarial examples... So there is gradually more tooling and organized information out there, but I don't think there's a consensus on this subject either, like how to approach it... But there's just a series of tools in the toolbox that you can use. People are still developing those and still actively researching them.

And it depends too a little bit on the type of data and model, and such... When certain things happen, like there's a model that enhances an image and you put in Barack Obama's image, and then the enhanced image turns out like he's a white guy, and this blows up on Twitter, and stuff - that motivates a lot of... Like, in computer vision I think they've been struggling with this for quite some time. In other areas, like natural language processing it's probably a little bit newer.

**Break:** \[21:18\]

**Jerod Santo:** So let's talk about what has changed since that 2018 April to July timeframe, episode one through episode 100... I've been listening, I've been producing alongside, so I do know one thing; I'll cue you up, Chris, because I'd love for you to say it again, or say it to me... One thing you've seen and you've said, which I'm not quite sure I know what you mean by it is that you think that we're moving into a post-deep learning era... Or not post, but beyond deep learning era of AI. Can you say what you mean by that and explain it to me?

**Chris Benson:** Yeah, and it's actually on my mind a lot these days. It's been on my mind today before we started talking about this, before we did the show... Because I'm having conversations with other people about this same topic. And to set it up, if you look at these last couple years, when we started the show we were still in the ramp-up stage, where deep learning -- I mean, there was stuff just coming out every day, because everybody was finally setting their focus to it, it was being funded, and we were getting some pretty amazing stuff coming out on a day-to-day or weekly basis... And some of those early shows - you know, Daniel and I, we would struggle to figure out which news items to include in the show and which ones to just not mention, because there just wasn't the time.

\[23:49\] So it was a very exciting, very Wild West, you never know what's gonna happen next kind of moment. We've matured since then, and so it's definitely -- we went through kind of the rise of computer vision and all its various things, and for a while there was a new algorithm every week coming out in that space... And then we transitioned into the NLP period, where we had tremendous progress there. Daniel has been right in the middle of that, I've learned so much from him... But also, we've matured quite a long way in a fairly short amount of time, and one of the things I'm noticing is we're still having things like -- I mean, GPT-3 just came out recently, and that was a big deal... But I don't see the every-week things happening.

So because we're seeing kind of an evolutionary progress, there's a lot of people in the space that are starting to say "Have we mined this for all the big new things?" Or maybe most of; I don't think we're there yet. But are we getting to a point where we had some maturity and we're having lots of just evolutionary improvements in the current space of deep learning? Because of that, a lot of people are turning back to AGI, which is Artificial General Intelligence - the idea of the AI that can kind of do multiple complex things, instead of this simple AI that we have, the narrow AI that is very good at doing one particular task.

So there's talk of something that if you would have said this to me two years ago when we started, I would have laughed, like "Ha-ha! There's no way." The idea of an AI winter at some point down the road - I don't think it's quite that, because... It may be that the research being in a slightly more mature area, it's focusing on lots of evolutionary things... But we probably have quite a ways to go before AGI. I think we might have a lot of commercialization over the next few years about what's already out here, because there's tons of industries that can use what's already been created and discovered... But how far are we from the next major step up revolutionary-wise, that's not just an evolution of the existing, but a new thing coming out...?

**Daniel Whitenack:** I always - and Chris knows. I kind of cringe a little bit when we talk about AGI and general intelligence, because I think what a lot of people mean by that doesn't mean what they think it means...

**Jerod Santo:** Hm... What does it mean, and what do they think it means?

**Daniel Whitenack:** Well, I think AGI is -- a lot of people just think of some type of singularity and Terminator incident, where now we cease to exist because AI has crushed us into the ground and we're no more, sort of thing... Which to me is inconceivable, but... You know, whatever.

**Adam Stacoviak:** You're so bullish on it being inconceivable though... \[laughter\] He's dead-set, he's sure of it.

**Chris Benson:** Challenge him on it, Adam. Challenge him.

**Adam Stacoviak:** I just don't know, man... I don't know if I agree with that. I'm not on the inside, but--

**Daniel Whitenack:** This is my own opinion.

**Jerod Santo:** Right.

**Daniel Whitenack:** It's at least inconceivable that it would be sometime in our near future, or my lifetime... To me it's inconceivable, but...

**Chris Benson:** It depends so much though on how you're defining that, which I think is important when we define what AGI is... Because you can define it a couple different ways, and I'll give you completely different answers about what my opinion is on those...

**Daniel Whitenack:** And I think this comes back -- we had a conversation about NeurIPS, which is a big AI research conference, and in the keynote they were talking about AGI... And they were talking about it in much terms I could grasp... Certain things like the architectures that we've been seeing in natural language processing that involve attention and self-attention, and models that actually go beyond fitting parameters, but actually paying attention to certain pieces of data more than other pieces of data... And they tie that into saying "Okay, that's an advancement to generalization." And I can latch on to that; that seems like some interesting steps there... So yeah, I think it does depend on how you define it...

\[27:49\] And to Chris' point as well - I think that people are gonna start trying new sorts of things. I've just looked up Sasha Rush from Hugging Face - we had him on the podcast a couple weeks ago... He was one of the organizers at ICLR, which is another one of the huge AI research conferences... And he posted a graph. He graphed over the last two years - while we've had the podcast - the keyword "growth" for certain topics in research over that 2018 to 2020, and I was actually somewhat shocked. So the top growth was a thing called graph neural networks, which is a new way of constructing neural networks to work on graph-structured data.

So I think that that's an indication that people are -- they pushed the architectures that people are used to pretty far, and they're searching for something new and exploring new areas and new types of structured data, new types of data, maybe multi-modal types of data, where multiple different types of data are linked... So that's really what I think of when I think of people pushing the boundaries of it.

**Chris Benson:** Yeah. But it's deep learning, specifically. If you think of AI as a broader collection of technologies that are advanced, these are more deep learning things... And I think some of the luminaries in this field talking more about what AGI means to them and what they think about that... And then you kind of have the co-commercialization thing going. So there's a little bit of divergence in some areas between the research community and the commercial interest, the commercial community... Because we're seeing deep learning models and architectures deployed in many different areas, but that is separate from what leading researchers at Google Brain or OpenAI or something like that would be focusing on.

So you're seeing people kind of cash in on where we're at, which is good, and I think we'll see it everywhere, pervasively... But that's different from where things are going in the future. And going back to the AGI point, one of the things that I've learned in this two-year period - I think I was unclear on the idea that if you were to look into this somewhere down the road/future where AGI comes about - and obviously, we're a long way from that, but... If at some point -- I think people confuse whether or not consciousness is part of AGI or not. So I think we'll get to tremendous levels of intelligence that has no sense of self or consciousness many years before any breakthroughs on the latter, on consciousness.

We're already seeing models that in very specific areas can outperform any human in a particular task... So if you extend out that computation capability, then if you're defining intelligence as a form of computation, being able to solve a problem, then we're much farther down that pure computational road than we are -- you can have an amazing model that can outperform any human, but that doesn't mean that it's thinking "Wow, I wish I had a cup of coffee right now."

**Jerod Santo:** For sure.

**Chris Benson:** That's a big leap right there.

**Adam Stacoviak:** Self-awareness is the key ingredient missing.

**Chris Benson:** I'm not sure that's clear in most people's minds... Because if I have five different conversations on this topic with five different people, their idea of what they're starting from - all five can be very different.

**Daniel Whitenack:** Yeah. Maybe a good way to put it in one of the reasons why it's inconceivable to me is because the way that we're approaching this path to advancement in AI - we're going to destroy the planet way before an AI singularity happens. There was a study; it takes -- like, we release into atmosphere as much Carbon as five cars during their entire lifetime when we train one of these state of the art NLP models just once.

**Jerod Santo:** Wow.

**Daniel Whitenack:** So I think if we were to say "Oh, let's just kep rolling with this", we're gonna have to be living on Mars by the time that AI singularity happens. So that's like a whole other strain of things where it's like "Can we actually solve some type of the computational issues that are happening with AI?" And we can't just keep doing things status quo; we have to figure out more efficient and creative ways of doing what we're wanting to do, I think.

**Chris Benson:** To your point though, when we do get to that point where the singularity does come about and it's self-aware, it's gonna start off depressed as hell. \[laughter\] We'll have destroyed the planet... It will be like "Why did I wake up to this?"

**Jerod Santo:** \[32:22\] It'll just turn itself off. "I'm using way too much energy here..."

**Adam Stacoviak:** Snooze...

**Chris Benson:** And has anyone noticed we have a princess bride theme going here? We keep saying the word "inconceivable"...

**Jerod Santo:** That's true.

**Chris Benson:** ...and we were saying "I don't think that thing means what you think that thing means..."

**Daniel Whitenack:** I was hoping that someone would do some other reference after I said that, but...

**Chris Benson:** There is a princess bride theme going in this episode...

**Jerod Santo:** Anybody want a peanut? Oh, that was too non sequitur. Let's talk about GPT-3 for a minute, just to complete -- it's not actually a hard shift, because I think it plays into this concept that you're referring to, where it's like a plateauing... And a question that I have -- because what happens with us who aren't deep in the field like you all are is every once in a while we just get impressed with the results of some sort of new technique or model... And it has been a while; I've definitely seen a slowing for me, where I feel like I've seen a lot of the things, and it's like "Yeah, I've seen that before. That's cool." Different applications... I think the color transformation stuff is really cool, with the style transfer kind of things...

**Daniel Whitenack:** Yeah, super-cool. Like de-oldify...

**Jerod Santo:** Yeah, exactly. So you're just seeing like "Well, let's take that and apply it to X, Y and Z." And then every once in a while you get super-impressed. GPT-3 just made a splash this summer on the tech Twitter and the VC Twitter and in our space, by generating some pretty realistic, and even tricky sentences and phrases and blog posts even. And I don't know what GPT-1 or GPT-2 were, I don't know what GPT-3 is... I know it's OpenAI, I know it's the first time I've signed up for an AI-related beta; I'm like "I wanna play with this..." But is GPT-3 the next phase, is it an evolution of what they've been doing? Is it a brand new thing? Tell us your guys' take on that thing.

**Chris Benson:** Daniel's our NLP expert, so I'm gonna throw this to him...

**Jerod Santo:** Okay.

**Daniel Whitenack:** I think it's an amazing achievement, and incredible results... And also people just being really creative in their use of it. I don't think it's like a fundamental paradigm shift in terms of how we're doing modeling necessarily... And one of the reasons that they listed in not releasing the model publicly was the fact that it requires an extreme amount of compute to make it run efficiently and good, which people just don't have access to; like, normal people, maybe like us on the call. I don't know if I wanna call us normal, but...

**Jerod Santo:** Speak for yourself... \[laughter\]

**Daniel Whitenack:** ...and OpenAI people as like other than--

**Adam Stacoviak:** Everyday people.

**Daniel Whitenack:** Yeah. It is an amazing achievement. I think it's an amazing achievement both computationally and scale-wise, and what they had to do to achieve that scale, and all of that... But I think it is a sort of paradigm shift in the way we're going about things, I guess. It still fits into this model of bigger and bigger general language models that people are training on huge amounts of data, using multi-tasks or arbitrary tasks to help the model learn about language, like filling in words, or question answering, or sentence completion or character completion, or predicting the next sentence, and these sort of tasks that people don't really care about that much, but are used to train these large models that are then able to be fine-tuned for very mini-tasks, maybe unrelated, like translating code from one programming language to another, or understanding queries to generate frontend components, and that sort of things. I know those were a couple of things that were shared on the Changelog Slack.

**Adam Stacoviak:** \[36:09\] Yeah. Could you maybe hypothesize what's after this first magic trick?

**Daniel Whitenack:** You mean for GPT-3?

**Adam Stacoviak:** Exactly. I'd say that's the first magic trick to introduce this new generation of language prediction model and what it can do... It's very impressive that that blog post was generated. And then on some ethical level, do I trust that blog post less because it wasn't actually generated by a human? So why do I just trust humans so much more than anything else? That's an aside, but... I think like "Okay, this is the initial magic trick." What are the actual applications of it? What's beyond this blog post for GPT-3?

**Daniel Whitenack:** For me, I'm mostly interested in how people go about interacting with this model... Because the standard has been in the past that people train a model and then at some point a serialized version of that model is released, and you can load it into your own code and do nifty things with it. That's not going to happen in this case, for reasons that were on purpose, that they're releasing this via API; they're running it internally, they can shut it off when they want to... There's interaction patterns that are governed by that API, which aren't just kind of "You can do whatever you want." I think it'll be interesting to see how that influences how people are using it.

Obviously, as you've already seen, there's a lot of creative uses already, but I think that -- I know these reasons why they did this, and that's within OpenAI's set of AI principles, but it also somewhat constrains or puts some boundaries on how you're going to use it. I'm mostly actually interested not so much in the application, because I think it'll be something similar to what we've seen in the past, maybe just leveled up a notch, but more how people figure out ways to use the API, or develop workarounds or creative uses, and that sort of thing. So workflow-wise it's very different.

**Adam Stacoviak:** Back to the inconceivable part though - this shows some level of fear from humans to non-human, in this case; the machine, so to speak. There is some sort of fear. Maybe it's a fear of how other humans will use this, but the governance and the API and the restrictions definitely shows either responsibility or fear, I'm not sure... Maybe it's both.

**Jerod Santo:** Well, it's a tool, and any tool can be used for evil or good.

**Daniel Whitenack:** Yeah.

**Chris Benson:** And we've had this conversation a bunch of times on the show... Like every technology - people always take technologies and most people use them for good ends, and there's always a handful of actors that use it for bad ends. And the worry here, obviously, especially if you combine this -- we're talking about GPT-3, and... First, it's been done, so people know -- even if they don't have they details, they now have seen it; it will eventually get out there, whether it comes from its point of origination or whether it comes from some other group that says "Oh, I think I could do that as well. I've seen the results, I have a pretty good sense." That's possible down the road, and we have seen that with previous models coming out and then other people kind of piling on... But if you combine that with obviously other aspects, like generative adversarial networks, and we're talking about deepfakes and stuff like that - there's room for bad actors to do stuff, so that is a concern.

\[39:46\] So when you're detecting that, I think it's less about -- you know, it's not that we're worried that we're about to hit the singularity and what do we do about these machines, I think it's more a question about "What do we do when the criminal mind out there or something decides that it's commoditized to the level that they can use it effectively and they decide to deploy it?" And it's part of the process, we've gotta sort that out.

**Daniel Whitenack:** That fear element - to me, it comes down to a couple different pieces. One, this is trained on so much data in a sort of programmatic way that -- like, when you scrape 80 million websites, you don't always know what's gonna happen if you train a model on that, and what your output is gonna be... So there is this element of "How do you probe all of the unexpected things that could be output from this model?" That's a hard piece.

The other thing - yeah, any tool can be used for good and bad, but if you think of different tools... Like, we can all go get a hammer from the hardware store, and I can choose to hang a picture on my wall with that hammer, or I can choose to hit someone over the head with the hammer.

**Chris Benson:** Don't do that.

**Daniel Whitenack:** But everyone can go get a hammer. That's democratized. I can go get a hammer, I can go get something else to hit you with. But with these AI technologies - for example, China is using these computer vision technologies to detect a person's ethnicity from a street camera based on their walking gait, to determine if they're a part of a minority population called Uyghurs, and so that they can track them and put them in concentration camps.

Those Uyghurs - they can't go out to some store and get that same technology. There's such an imbalance with this technology and who has access to it, and who has the compute, who has the money to run the compute, who has the facility to get the data, that the imbalance of power is really emphasized for these technologies in particular, I think.

**Chris Benson:** And there's a good point there when you talk about scale. To your point there, it's a powerful tool that is powerful enough to where nation-states are very interested in this, and they put a lot of money and effort into this... And that just amplifies how things can go off the rails. It's one thing if I get a mean streak in me and I go out and use a tool to go do something, but when people do it at that level... It's one of the challenges of our time.

I think it's not unique to AI, it's any tooling, but it's going really fast, in general... If you look at the fact that over just a decade we've made profound advancements in this area, that are usable... So this is part of society, this is part of culture. We have to get solutions to this, and it's not gonna stop any time soon; so rather than be afraid of it, we just need to be focused on answering it effectively. We need great minds to put their attention on it.

**Break:** \[42:50\]

**Jerod Santo:** So y'all have done 100 episodes, and I've been curious to ask you this for a while, which is that when we set out to do this show, we called it Practical AI, and that first word has really been a primary focus of the show, and maybe a guiding light, to a certain degree. I remember hearing Daniel oftentimes saying "It is Practical AI..." He'll use that as a way of turning the conversation into the practical aspects of deploying and using these technologies... But I'm wondering if you've felt like that's limited you, or made the show go in directions that you haven't wanted it to, or if there's maybe even an inkling of a regret of being pigeon-holed into the Practical AI podcast.

**Daniel Whitenack:** No.

**Jerod Santo:** Okay... \[laughter\]

**Adam Stacoviak:** No regret.

**Jerod Santo:** Dang it!

**Daniel Whitenack:** I don't know... I guess you could interpret practical as being practitioner, in the sense of tutorials and implementation tooling sort of things... But we have gone into things like ethics or like the use of AI for good, or telling stories, more so than just highlighting methods, I guess... And to me, that still fits within the practicalities. The same reason why you wanna see case studies or whatever when you're looking at a particular tool or a product, or something like that; you wanna get a sense of how people are using a thing, you wanna get a sense of how people are thinking about a thing that maybe you haven't thought about as much... So to me, I don't necessarily feel pigeon-holed. I think we have gone into certain of those things, but it's kept us away from... To me, it's brought a bit of focus, so that we're not always talking about Terminator, and those things...

**Chris Benson:** To be honest, and since you asked, I haven't thought of it that way... But I'm gonna actually say "Occasionally", just to give a different perspective. I would imagine that anyone whose listening to us for a while has heard me -- between the two of us, I tend to be the one that gets out there into the speculative realm more often...

**Daniel Whitenack:** Yeah. I'm the downer that always is like "I don't know how to implement that for my terminal, so... I'm out."

**Chris Benson:** \[laughs\]

**Jerod Santo:** "I'm gonna need step by step directions..."

**Chris Benson:** Daniel's like "If I can't deploy it to Kubernetes, it doesn't count."

**Jerod Santo:** Yeah, exactly.

**Chris Benson:** I definitely have an interest in looking out there into what is essentially speculative, even philosophical realms. Part of that is probably not because of my job, because that's not what we do at my company, but just as a person myself in the defense world. If I go give talks -- Daniel and I have talked about all these talks we've given over the last few years, and I commonly am asked about these speculative things, because people make the assumption, incorrectly, that being in Defense and doing AI that I must be thinking about Terminators all the time... It's something I do think about that idea; it's not real-life, it's not real-life in the Defense industry or the DoD, but I will confess that I can't help wondering about a future like that, and putting some thought into it. It occasionally creeps out in the podcast, and I think Daniel does the right, as he quickly goes "Well, it is Practical AI..."

**Daniel Whitenack:** It's good to have the balance...

**Chris Benson:** Exactly. And he pulls me back to reality on that.

**Daniel Whitenack:** As you can probably tell from a hundred episodes, I'm maybe not the speculative, philosophical type...

**Jerod Santo:** Right.

**Chris Benson:** He whips me into shape immediately.

**Daniel Whitenack:** \[48:01\] I do struggle in those planning/strategy meetings at certain points in organizations, where it's like "Well, how does this fit with our vision? What are our transformational things that are gonna happen in the world based on this stuff?"

**Chris Benson:** He's snoring...

**Jerod Santo:** Yeah.

**Daniel Whitenack:** So I think it's good for me to be pushed into those areas; it's definitely good for me to be pushed into areas where I'm looking beyond my Vim window, but... You know, I also always like to go back there.

**Adam Stacoviak:** I kind of see the name as less of a restriction and more of a North Star... Rather than "This is the direction you're going", you can go into the fringes to -- because it's always good to entertain possibility, but maybe a better way to define it might be what you think practical actually means. I think practical means possible and useful.

**Chris Benson:** I do, too.

**Adam Stacoviak:** What's the allure to the word "practical" for you both?

**Chris Benson:** I think that we keep it, for the most part - and even me, despite my confession a moment ago - I think this is real life. When we were starting AI, it was still very young and cool, and most organizations didn't have that as a capability in-house; and that's still developing. But right now, it's no longer the thing where it's the strictly aspirational intent. It's now something that a lot of organizations are incorporating, and they have really practical problems to deal with, like "Okay, we now know how to address an architecture and produce a model that can be deployed, and how do I get that into our deployment methodology? How do we get it out to our customers? How do we do that?" I think that's where 99% of AI is and should be, I think. And for most people, if you're not strictly a researcher.

So I think my sense is that we've given a platform for that, for people to talk about it, and to come on the show and to help others, and I think one of the things that might have set us apart is that we're always thinking about "Is this gonna be meaningful for listeners who are trying to do it themselves out there?" I think that's where Daniel's "Well, this is Practical AI...", drawing us back on the line, is really important... Because it's fine to dream a little and it's fine to speculate a bit, but for the most part, people are trying to figure it out and get work done, and I think that we actually help them get there.

**Daniel Whitenack:** Yeah. I think "useful" and "meaningful" are two words that have been mentioned in the past a couple of minutes that are to me important... So there are useful and meaningful things that are not code, or implemented on GitHub. There's things that influence our workflow and the problems that we solve that are still useful and meaningful, but not talking about a framework, or a specific open source project, or something like that... So yeah, I agree with that.

**Jerod Santo:** Over the course of 100 episodes surely there's been highlights and lowlights, there's been successes and struggles... We didn't prep you guys, like "Bring your favorite episode" or anything like that, but if you would just think back on what have been some of the struggles of the podcast and what have been some of the successes for y'all?

**Chris Benson:** Do you wanna go first, Daniel?

**Daniel Whitenack:** Yeah, sure. Put me on the spot.

**Chris Benson:** I did. See how I did that?

**Daniel Whitenack:** I think one of the successes for me is this sort of -- and I think we can always do better in getting a variety of guests, and we're always trying to cover different things that we haven't covered, but I do think that we've had guests on sort of a range, from students just getting into AI and giving their perspective, all the way up to people like Stuart Russell and others, that have been luminaries in the field... So I think it's really cool that we've got that diversity of perspectives, and a whole lot of different topics covered. Looking back, I think that's one of the things that I'm pleased with, is that kind of variety of perspectives that we've brought, all kind of bringing their unique spin on whatever they're talking about.

\[52:24\] Also - I don't know if this was specifically a thing that we set out to do when we started - I don't think it was - but even from the very start... It was one of the very first episodes, where we talked about a TensorFlow project that was helping African farmers with this app, where they took pictures of their cassava plants, and it helped them--

**Chris Benson:** That was really early, yeah...

**Daniel Whitenack:** ...identify diseases... That was one of the first episodes, I forget... Ever since that point, it seems like we've always had it in the back of our mind, specifically highlighting AI for good episodes. I think those are really the ones that stand out for me.

There was one representing a project from DataRobot, where they were trying to detect water line issues, also in Africa... There were recent ones about Covid-related data, and question-answering systems related to that, or getting scientific knowledge out there to scientific researchers about Covid... So those AI for Good ones are really some of the ones that stand out to me.

**Chris Benson:** Yeah, I would agree. Going back to what you were saying before, some of these folks that have come on are just luminaries in the field. You mentioned Stuart Russell a minute ago...

**Daniel Whitenack:** Wojciech Zaremba...

**Chris Benson:** Oh, yeah...

**Daniel Whitenack:** A lot of different people.

**Chris Benson:** Bill Dally from NVIDIA... We had Anima Anandkumar I've probably just messed up her name, and I apologize for that - on the show, from NVIDIA... Just these people that have really wowed me, and to some degree have been heroes for us. But at the same time, we bring on people that have never been out there at all, but they have great ideas, and they have great insight, and they're hungry and they're doing really amazing things, and it's been a platform for them to come out and share that.

So I think it's been, from my standpoint, a really good balance that we've struck, in terms of not just going with superstar people or whatever, but being able to get all those different perspectives into the show. I think that's good for the AI community. I wish that there were many channels within the AI community to do that.

One of the things that I admire from another Changelog show, which is Go Time - for those who don't know, that's for the Go programming language - is the Go community has really rallied around that podcast, and I love that sense of community. That's been one of our aspirations here, is to give the AI community a place to rally, to be real, to have this chat, like what we're doing today, and what we've been doing all these episodes.

I really would like to see us be more successful in the next 100 episodes for trying to bring people on board and make it a conversation, and recognize that AI is just now part of life, like so many other things, and that there's room for every voice involved.

**Adam Stacoviak:** We've seen great success there, especially with JS Party and Go Time, in terms of community representation, diverse voices, diverse perspectives, polite disagreements... We love that. We think that's a welcoming place for good dialogue like that, and conversation, and those two shows are great examples of us iterating towards that "greatness". I don't wanna call us great, Jerod, but - doing a great job there. Those shows are very representative of two diverse spectrums in software - JavaScript, Go, of course, and all the ways those two languages and communities tend to go out to do what they do. I'm happy that both of you are inspired by that, impressed by that, and desire that, too.

**Daniel Whitenack:** \[55:59\] Yeah, definitely. And I think one of the cool things that I've seen is there are people that are active on our Slack channel, on LinkedIn, on Twitter, and are interacting with both Chris and I a good bit. Even today I was getting show suggestions, or like "Hey, I was looking for a show about this, but it doesn't look like you covered that yet..." All of that is really cool. I think there's been a lot of things throughout the episodes where people have suggested something, we tried it, or we've covered a gap that people wanted to talk about... So one of the things that I maybe didn't quite expect was that sort of ongoing, continual, throughout the week, outside of the podcast conversation with a lot of the people out there that aren't guests on the show, but are involved in the community... And that's really cool to see, people having discussions that are useful for them, even outside of just listening to the podcast on these different channels.

**Chris Benson:** The reach, I think -- Daniel and I came into this not having ever done this before. And Adam, you and Jerod have been doing this for years, and you're real pros at it. I think it was very surprising to me when -- it wasn't a big deal kind of thing, but when I joined my current employer, and I'd meet some people and they'd say "Oh, I really enjoy your podcast, by the way. I just wanted to let you know that", as we're meeting... It was a quiet thing, and no big deal, but it was like "Wow, the reach is really there, and the conversation that that creates is really there." And I've ended up away from the podcast, having a lot of conversations about topics that we address, because you'll meet people out there and they're like "By the way, you did this episode on this topic, and it just really struck a cord with me", and you'll end up spending 15-20 minutes just kind of redressing it, it might have been an episode from many months ago...

That's had a fairly profound impact on my awareness that that sense of community is not always completely apparent, but we have developed that. And AI is getting there, it's following other technical communities in that way. The need was recognized, and people are choosing to opt in, and that's something that's truly gratifying, from my standpoint.

**Jerod Santo:** So my interview skills failed me once again... I asked two questions, allowing you to slip the second question... But my persistence pays off, so I'll ask that one again - struggles. Doing podcasts is hard, getting to 100 is hard, most people fade, and there's a lot of work involved. What have been some struggles along the way. We know we had life problems, guests problems, scheduling problems... You know, it's not all roses and rainbows, so what have been some of the struggles along the way?

**Daniel Whitenack:** I felt like for quite a while when we were starting, when we were reaching out to guests... I mean, I knew certain people in the community, and certain of them were easy to make connections... But when you're starting out a podcast and you don't have a long history of things, it's like, I feel pretty much like a creeper, reaching out to these people on Twitter, or whatever... \[laughter\] Sending them a message like "You have no idea who I am..." Thankfully, people are mostly gracious, but there was a lot of no response. There is that time period where you feel like "Is this really gonna pick up?" I know some people are listening, but every time I reach out to people, it's like explaining this thing we're trying to do, and I'm kind of coming out of left field... So I think that was a bit of a hard period for me. And of course, I've learned over time that any time I listen to myself, which I try to do -- not 100% of everything I say, but I try to listen to what I'm saying... I think it's various things that you do that make you cringe, and then you replace those things... You're like, "Alright, I'm gonna work on that", and then there's various other things that you just replace that thing with, that also make you cringe... It was a little bit of that, too.

\[01:00:04.19\] And you know, life happens. Chris and I have both had times where I tell Chris, I'm like "I need you to push this forward for a couple weeks, because I am not gonna be able to do it." Thankfully, I don't think either one of us have had one of those times where we both needed it at the same time, but there have definitely been times like that where we flip-flopped back and forth.

**Chris Benson:** Yeah, I would agree. We rely on each other. Daniel said that about me, but - without going into all the specific, listeners who have listened know we've has some challenges this year that have certainly affected my family, and Daniel stepped right in and just took care of things, and that was good. All of us that are doing this - we have day jobs, so we need the people that we work with to make allowances and accommodate, to some degree; we have families who are supportive. We're all doing these podcasts out of our houses, and families having to recognize that you need a little time, a little quiet space to get some stuff done... I know for ours, we have a house full of dogs, and a young daughter, and that can be pretty challenging.

And then frankly, there's a burden that I didn't appreciate back when I was listening to The Changelog, and Go Time, and JS Party, before we started this... I don't think I understood the burden of trying to provide a great hour or 45 minutes of content, week after week after week. I've learned to really appreciate that as I listen to other podcasts - it is hard work to do that... So I've developed - as still an amateur in this, compared to you guys who are the real pros - an appreciation for the amount of effort that goes in, and at the bottom what it comes down to is serving your audience and trying to help people get what they need out of it. They're choosing to listen to you for a little while, and they should rightly expect something from that.

So I think that's what I would finish with - there's always the burden for Daniel and me to make sure that we have content that is good for people to listen to... So for those of you out there listening - please keep coming at us with social media, all the places that we like to engage you. We are listening, we are welcoming your ideas; you are giving us our ideas for our future shows, and we wanna serve you.

**Daniel Whitenack:** And finally, after a year of doing the podcast, I got to meet Chris in real life, and he's a real person... \[laughter\]

**Chris Benson:** Sort of... \[laughs\]

**Jerod Santo:** I'll have to take your word for it...

**Daniel Whitenack:** We hadn't actually met in person before we started the podcast; that happened way later, which was kind of funny.

**Chris Benson:** That was only in the beginning of January, right before the Covid stuff set out, so most of these hundred episodes were done -- Daniel and I had never been in the same place, at the same time before. We became friends through the podcast.

**Daniel Whitenack:** We just started our Covid life early. \[laughter\]

**Chris Benson:** We did. But it's worth mentioning, it's remarkable that it is through these episodes that everyone listens to that Daniel and I have become very dear friends, and we had never met in person until January of this year.

**Jerod Santo:** It's amazing.

**Adam Stacoviak:** Well, these struggles illustrate why we're here today, which is to celebrate...

**Jerod Santo:** Yes!

**Adam Stacoviak:** One, Jerod and I are both proud of you guys. You guys have done a great job with this show. It takes, as you've said, a lot of work to produce, on all sides. So one, congrats on a hundred episodes. Two - we're proud of you guys. You guys are doing a great job. Keep doing it, don't stop.

**Daniel Whitenack:** Yeah, thanks for believing in us, and keeping us on track. It's been awesome, truly.

**Chris Benson:** And yeah, you guys have been right there... Even though you're not there from the listeners' perspective, you're invisible to them in most episodes, you're actually there every episode. And I cannot count the number of times that Daniel and I have thought "Oh, at least we have a great post-production team that can clean up whatever mess we've just created during that." That's really important.

**Daniel Whitenack:** \[01:04:01.07\] Yeah, and do cool promotions on everywhere, and keep the wheels moving... It's awesome.

**Chris Benson:** Yeah, it's a team effort, totally.

**Jerod Santo:** Well, I'm not just a producer, I'm a happy listener, and I fall into the category of the AI curious, which - we know that Practical AI listeners kind of fall into a couple of categories... You have the practitioners, then you have the curious... And I'm very much in the curious. I've never used any of these things in a useful context. What was the other word? Useful and... Valuable?

**Daniel Whitenack:** Meaningful?

**Jerod Santo:** Meaningful, yeah. I've never used it in a useful or a meaningful kind of--

**Daniel Whitenack:** Oh, "possible". "Possible" is a good one, too.

**Adam Stacoviak:** That's what I said, possible and useful.

**Chris Benson:** Inconceivable.

**Jerod Santo:** Yeah, I've definitely used it in some inconceivable fashions... But I know more about this stuff than I ever thought I would just by osmosis of listening along and producing, and I'm a conversational AI enthusiast at this point. I can talk to anybody about it and trick them into thinking that I know what I'm talking about. That's a valuable skill in life.

**Adam Stacoviak:** That's right.

**Daniel Whitenack:** Yeah. Whenever you need a large salary, you can go out and really score high on that interview, I think.

**Jerod Santo:** I probably could. So what's next for the podcast? What can people expect soon? Where is it headed?

**Chris Benson:** For me, I was thinking about this as I was coming into this, and one of the things that I really would like to hear more about is how people are incorporating these AI technologies into their lives and into their work. We hear that to some degree, and we know the breadth of the stuff - it just could be pervasive in every industry, and I'm really curious to learn more. I think partly that may be because I'm in my own job and I spend so much time completely absorbed in trying to get my own work done, but people are using this stuff on really cool applications... And I think I would like to go out there and understand where it's being applied and what are some of the things that I never would have thought about... So I'm pretty excited about that.

**Daniel Whitenack:** Yeah. I mean, there's still a lot of gaps that we haven't covered. Even today I was talking to a listener who was saying "Hey, let's cover something about drug discovery and pharma with AI." There's just tons of areas that we haven't covered yet, so I think getting some people on from there... And also developing more good relationships with the leaders in the field, and hearing their perspective over time is something that you can continue to expect, along with those up and comers.

I think there's really cool stuff as well that's happening all around the world outside of the U.S. and Europe with AI, both in South-East Asia, and Africa, and Latin America... One of the things that I really have a passion for and would love to see on the show is us continuing to try to get those guests who are really innovating in those areas, and bringing the benefits of AI to the whole world, really.

**Adam Stacoviak:** One of the best ways to circle back is to invite the listeners. We've mentioned community a lot, so one easy way -- I'm sure if you're listening you may get the outro, and occasionally we'll say it in the outro, which is "Hey, there's a community", so Changelog.com/community... But there's a Slack, there's lots of people in there. If you wanna share your story, these stories, the ways you're tinkering, the ways you're practitioning etc. in AI, you can do that there. So the invitation is there, Changelog.com/community, the Practical AI channel. Hit that up. Daniel and Chris always hang in there, we're in there... All that good stuff. And there's lots of other people there, too. Come and hang out.

**Chris Benson:** Another one of the things I wanted to mention was I think we're at a point now where it's been commoditized enough to where it's not all about business. In the spirit, Adam, of you talking about your cul de sac, camera identification--

**Adam Stacoviak:** Yeah, I'm serious about that.

**Chris Benson:** I believe you, I believe you. There's so many places where we can bring kids into this and do weekend projects; we've talked about some of that at the beginnings of some of our episodes, where you can bring people in, you can take it into your schools, as schools are opening up, as Covid gets under control...

There's just so many opportunities to do this. You don't have to be a top scientist, you don't have to be a data scientist professional; you can do it at your house. I've heard so many little home projects that people have gotten into over the last year or two. Actually, I would like to highlight some of those. So if you're a listener and you're doing something cool over the weekend, especially if your kids are involved in it, please let us know about that. I'd really like to share those ideas. I have an eight-year-old daughter and it's a perfect time for kids to get into this. And it's cheap enough, and you can get the equipment cheaply these days... So yeah, bring your family endeavors; it's not always just about work.

**Adam Stacoviak:** It's like you said though, it's real life. It's not gonna go anywhere.

**Chris Benson:** It's not going anywhere.

**Adam Stacoviak:** Not so much like "Hey, let's teach our eight-year-olds because we have to", but more like because it's interesting, and it's curious.

**Chris Benson:** It's fun! It's really fun.

**Adam Stacoviak:** Who would have thunk it, to actually make AI practical to everyday users? That's the thing, right? I literally wanna learn about AI to the point where I can do something to help defend my cul de sac from nefarious people who are trying to steal our wheels... Like, come on...! There's gotta be an easier way than that, and I have no idea...

**Daniel Whitenack:** And there's tools out there.

**Adam Stacoviak:** I can get a Raspberry Pi and stuff like that, so maybe I can arm myself with an R Pi, and a camera, of course, and different detection, and maybe my neighbors will let me take their picture and put them into my model, who knows...? That's shooting for the moon there, but it could be fun. I have no idea where to start, really.

**Chris Benson:** If you're protecting everyone's tires, why not...?

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Right, that's what I'm thinking.

**Jerod Santo:** It's like neighborhood watch, only with no people.

**Chris Benson:** Exactly!

**Jerod Santo:** Well, guys, thanks so much for sticking with it, having an awesome, and thanks for letting us crash.

**Daniel Whitenack:** Thanks for interrupting, yeah.

**Jerod Santo:** Yeah, we're happy to join you for this one and celebrate with you.

**Adam Stacoviak:** Gosh, it was a fun crash. I loved that.

**Chris Benson:** If you hadn't interrupted, who knows what this episode might have been...?

**Daniel Whitenack:** Wait and see, I guess...

**Chris Benson:** That's right.

**Jerod Santo:** I'm curious...

**Outro:** \[01:08:24.21\]

**Adam Stacoviak:** Did you all hear my kids there for a second? I guess something fell out there and my son was like "Noooo...!"

**Jerod Santo:** I heard it...

**Adam Stacoviak:** I was just chuckling, because I'm like "I know you guys have gotta hear it, because I can't stop it..."

**Chris Benson:** I'm half blind and deaf anyways, so...

**Adam Stacoviak:** I dropped a marker though; you can totally see in the timeline the little spike there...

**Jerod Santo:** Yeah, I heard it...

**Adam Stacoviak:** That happens occasionally and it gets edited out... Thankfully, no one gets upset... But hey, that's how it works.
