**Adam Stacoviak:** I think, Jerod, for me this show goes back a while, because I met Daniel several years ago at GopherCon. He was in data science, and wowed me with his super-awesome ways; I think a while after that he came on GoTime, and we kind of struck a conversation of like "Hey, we'd love to eventually do something around data science regarding a podcast", and then now we're here, Practical AI.

**Jerod Santo:** Here we are... And we're not just joined by Daniel, we also have Chris with us. Hi, guys.

**Chris Benson:** Hello.

**Daniel Whitenack:** Hey, there.

**Jerod Santo:** So we're gonna talk about the show; this is gonna be very much a getting to know what this show is going to be like, and what it's going to be about... But we do know it's going to be hosted by you two. So let's get to know the hosts, and then we'll get to know why we're here and we're even thinking this is a good idea. So since Adam started with Daniel, I guess I'll start with Chris. Chris, why don't you give us a little bit of background and what makes you wanna do the show that we're doing?

**Chris Benson:** Well, I've been a long-time Changelog subscriber. I follow Changelog, I follow GoTime in particular, and one of the things that I have loved is being part of this community... So As a member of the AI community, that's racing along and developing - this has always been a missing part of that community. I've listened to other podcasts about AI, but it's never had the same dynamic and the same feel... And having gotten to know Daniel a while back, we were talking about that and it was really clear that this kind of podcast, this kind of community really needed to come into being for the AI world, so that people have a place to go and have a home. That has gotten us both very excited, and that is what I really want - I wanna have a Changelog-style community where every one of us knows each other, we welcome each other, we help each other along, and we're able to bring this amazing topic of artificial intelligence and machine learning and deep learning to the world at large, and make it possible for people to start participating in it, and understand what it means, and integrate it into their lives, because it's a technology that's going to affect every person on the planet.

**Jerod Santo:** What was your particular angle into this community and these topics and this work that you're doing now? How did you get here?

**Chris Benson:** \[00:04:05.03\] Well, that's a little bit of a roundabout way... I actually got exposed to it many years ago. I was in college, and believe it or not, my parents were in computer science; mom taught some computer science classes at Tech, and they were both engineers at \[unintelligible 00:04:21.25\] and they worked on the F-22 project, which is the Stealth Fighter, it's still the leading air-to-air Stealth Fighter in the world, and they were part of that core team.

They had these two prototypes that were out at Edwards Air Force Base, going through their maneuvers and kind of proving it out as this new plane; it was in 1992, and one of those prototype F-22's (it was called the YF-22 at the time) in the test flights, it was low down, and they were going through some maneuvers where I believe the pilot was trying to kind of crash the plane onto the runway and the avionics were supposed to prevent it, and unfortunately, the avionics did not do that...

**Adam Stacoviak:** Wow...

**Chris Benson:** And they hit the ground... The pilot was fine. There's a YouTube video you can go out and see about the event in 1982, but my dad was one of the people tasked to figure out what happened and how to solve this going forward... So as a college student, I came home, and they came home from work, and that was our evening talk for about a year, as dad was getting into neural networks, way back in the day. That was when I first learned about it. So I kind of got exposed to it very intensely for about a year in our conversations, and developed a passion for it.

Eventually, the problems got solved and they moved on, and it fell out of my life for a long time, but then as we've had this resurgence in deep learning, which is neural network technology has come back, I've come back into it, initially as a hobby, and then I turned my whole career toward this. So over the last few years, this is where I've arrived at, and it is my career going forward.

**Adam Stacoviak:** That's what I love about these intro shows, Jerod, because that shows that Chris - and I can't wait to hear what Daniel has to say, but that shows that Chris has...

**Jerod Santo:** Top that, Daniel. \[laughter\]

**Daniel Whitenack:** Yeah, no stealth fighters for me, sorry. \[laughter\]

**Adam Stacoviak:** Well, it just shows that it goes back generational. It's like legacy, it's part of the family, which makes it even cooler.

**Chris Benson:** This will sound really corny when I say this, but honestly - my dad has since passed away, but I actually feel closer to my dad working in this space, because it brings up memories of us talking through this in years past. So there really is actually an emotional attachment, a family attachment in this topic for me in that sense.

**Jerod Santo:** It reminds me of a Changelog episode that we did, and I can't remember who we were interviewing... Maybe it was TensorFlow, maybe it was somebody else, but they mentioned this thing which you just brought up back to me, Chris - how for a very long time these particular methodologies and the mathematics, they aren't new; they were in the land of Academia and research, and in the labs, but there wasn't a commercial viability to them for so long. And now all of a sudden it exploded, and everything changed overnight, and all of a sudden the place of R&D became Apple commercials, and products... And that's such a dramatic shift.

**Chris Benson:** Yeah, it's really amazing what's happened... When I think back, one of the thoughts I had going back to when he was doing it and I was still -- you know, this was 20 years ago, basically... And he had some advantages that I don't think most people had at the day, and he worked for a company that was invested in emerging technologies, and he had the compute power available for what it was that day, he had the background, and the dataset that came off the plane that they were trying to do - they were using the other prototype and generating data; they were flying around -- I remember my dad telling me that they were basically pulling data off all these sensors on the remaining prototype, and that generated a massive amount of data (on a per-second basis) that all these sensors are sending down, and that's what he was using for neural network training.

\[00:08:12.14\] In retrospect, he was in such a unique position to have both the compute, the big data necessary, and the algorithmic expertise to bring that together in 1992. That was such a rare case, and that's why it didn't really take off in the world at that point, other than these exception cases. So we're in a very different world now, where we all have this compute power which I'm sure we'll be talking about at length, and we have lots of big data around that we're using, and lots of algorithmic expertise, and it's continuing to develop on a day-to-day... So something that he was in a very unique opportunity to do back then is now available to all of us today, and that's one of the reasons for me that I wanted to have this podcast, is that this is now available to everybody.

**Adam Stacoviak:** Well, that's definitely what this is gonna be about - the exploration of all the missing pieces and all the pieces that are there now, to make it something that has become such a mind-blowing and crazy-growing industry, that just wasn't quite there before... Now it's like the magic moment, the special time for it.

**Chris Benson:** It really is. We're in the middle of a revolution.

**Adam Stacoviak:** Daniel, what about you? What's your story? How did you get into AI? I know you were in data science; I met you years ago at GopherCon... Kind of give the back-story to you and data science, and your perspective.

**Daniel Whitenack:** Yeah, definitely. It's just super-awesome to be here with you guys. Like you mentioned, Adam, we've been talking about this for quite a while, so...

**Adam Stacoviak:** I like that though...

**Daniel Whitenack:** Yeah. I mean, we went through various iterations of what this should be, and I'm really excited that Chris is kind of coming along here and has the same passions, and this is becoming reality. I'm super excited about it.

**Adam Stacoviak:** It's been at least at a year, maybe a year-and-a-half in the making.

**Daniel Whitenack:** Yeah, I think we might have met -- I was on GoTime in one of the first few--

**Adam Stacoviak:** In the first 20, I would say...

**Daniel Whitenack:** Yeah, something like that. So it's been a while.

**Adam Stacoviak:** I think it was around that time or not long after that I was like "Hey, you did great on that show! I know you're in data science and that we're expanding different things we're doing here... We should do something; there's no one really covering data science that well from a podcast perspective... Like, the stories and the nuances and the news and the changes and the people and the projects and all of the things that are coming from it." I mean, I learned about Pachyderm and data lakes that day on that podcast, and I was like "I had no idea there was even a data lake. That's so cool!"

I was like, "We should do a podcast about this", and here we are now, it's evolved into not just data science, but also AI, and machine learning, and neural networks, and all the in-betweens.

**Daniel Whitenack:** Yeah, definitely. It's exciting. I'm excited to just learn from everybody on the show. It's gonna be great. So yeah, I can kind of give a little bit of my back-story. I actually started out in the physics world. I did my undergrad and graduate work in physics, and started out doing academic research in atomic and molecular physics, basically trying to calculate the properties of atoms and molecules from first principle. Basically, what that means is like, from first principles -- there's kind of two camps in this world. There's the camp that says "Hey, we're gonna figure out the equations that describe nature, and just using those equations calculate properties about these things."

Then there's the other side, which is like "Well, we're just going to create these incredibly complicated functions, and parameterize all of their various parameters based on experiments, and then they'll do good at predicting properties."
\[00:11:57.08\] I was in the camp of using - from first principles - just the equations that describe nature... Which now I see as incredibly ironic, because if you look at what AI is, it's basically the other camp from which I was in, creating these complicated functions and models and parameterizing them to describe reality... So I find that incredibly ironic.

It was during this time that I was actually exposed to machine learning to begin with, because if you think about that problem, people are trying to come up with all of these complicated models to describe how to calculate the properties of electrons, and eventually someone - a group in Berkeley, they said "Hey, let's just let the machines do it." So they started using machine learning methods to actually learn the exact solutions for these functionals to describe the properties of atoms and molecules.

It was kind of sad in one sense, because I was like "Well, that's basically the way we should be doing it, right?" but at the same time, I'm doing a whole PhD on not doing things that way... So it was just kind of funny in that sense. That was my first exposure to it.

But then I went into industry after Academia... I really didn't know what jobs were available for a theoretical physicist in the industry; it's not really that clear. And that was kind of at the beginning of the hype of data science... So pre-AI hype, but data science hype; just the beginning of that.

I found my first job working with this IP firm... Basically, helping lawyers understand math is essentially the job, which is incredibly interesting in certain ways... \[laughter\]

**Jerod Santo:** In which ways...?

**Daniel Whitenack:** Well, I think it was incredibly valuable for me, because in some ways it helped me try to really articulate complex things to people without as much of a math background. I think that's a hugely valuable skill...

**Adam Stacoviak:** You had to make it practical.

**Daniel Whitenack:** Yeah, exactly... Making it practical, being able to help people flesh out the flow of all of the different things they were doing... I think all of that built a lot in me that has really helped me since then. I think it was great. It also improved my writing skills greatly, because it turns out lawyers are rather particular about their grammar.

**Adam Stacoviak:** Yes, words mean a lot. The right word in the right place, or the wrong word in the wrong place could be very detrimental... Or very good.

**Daniel Whitenack:** Yeah. So eventually, kind of how I got into data science was I kind of worked with all of these people, and helped kind of explain their stuff, and I started to realize, hey, there are these data science people out there, data scientists who are doing things that are quite familiar to me, even though I didn't know people were doing them in industry. They are creating these models that are very similar to some of the mathematical and computational techniques that I've done, but applying them to different problems in business. That's where it kind of hit me, "Hey, I should be one of those people, because that sounds fun."

So I got a job as a data scientist at a startup, and have been one since. Now I'm working on a great project called Pachyderm, which I'm sure we'll talk about more on this show... But yeah, I'm just really excited to kind of take that full-circle, from initially being kind of trumped by machine learning in my academic research, to kind of coming full-circle and participating in the revolution, as Chris was saying. But no stealth fighters at all in my past that I know of, although I'm sure I've been spied on, but I haven't participated in any... \[laughter\]

**Jerod Santo:** \[00:16:09.03\] So the tagline for this show, for this podcast, is that it makes artificial intelligence practical, productive and accessible to everyone. Why don't you guys help the audience understand first of all exactly what that means, and then secondly, how we're going to achieve that... Like, what are we gonna go about doing here?

**Daniel Whitenack:** I would love to hear Chris' definition of AI, and maybe that will lead into "Make it accessible."

**Chris Benson:** It's kind of funny, that has evolved for me over time. You can look at different people, how they relate AI and define it with machine learning and deep learning - I've evolved as well on that... And where I am right now is I think of AI as almost a holding term for whatever is the current technology that you're defining that with. So if you were to go back when my mom was studying AI back in the early 1980's at Georgia Tech, the things that she was working on, which no longer exist today - it was called Symbolic AI, and that is essentially a field that is no longer with us, but that was what people meant when they said AI... And today, as we are recording this, AI is almost exclusively in most people's minds deep learning, and that's how people refer to it...

That realization made me understand that AI was a term that evolves over time and evolves with us with the technology advancements that are occurring... So it made me realize that AI in 2030 may be something that is different from deep learning as we define it today. I've almost disconnected what it means -- it's kind of like, if you're thinking about it as AI being a variable and you're setting that variable to a value, that that value changes over time. It's not a constant.

In my view today - and this is not the truth, it's just the way I see it - I really largely associate deep learning with what AI is today, deep learning being a subset or sub-discipline of machine learning. If I say AI, I'm almost invariably referring to deep learning. There's debatably a few other machine learning technologies that you might define in that category, but that is it for me.

I also go forward with that expectation that how I'm defining AI is going to evolve. What we talk about down the road may be a bit different, as new technologies arise and are put into practice.

**Adam Stacoviak:** So do you have to define artificial intelligence based on the definition of deep learning?

**Chris Benson:** I think right now it is, but I think overall, we are in this long-term trend over decades of trying to bring more intelligent solutions in to being, and that brings the word "Intelligent" in, which is itself in this context a little bit mushy in terms of how we're defining it... But we're trying to get to where our computing capabilities are becoming ever more sophisticated, and require ever less explicit programming from us. Today, the place I've arrived - I kind of think that AI is the current state of the art of how you get there, and largely associated with self-learning in terms of how you would approach it.

\[00:19:54.06\] It's funny, I was at the NVIDIA GPU Conference a few weeks ago, and the CEO of NVIDIA, Jensen Huang, had a line in his presentation that I've really taken to, and that is that AI is the new source code, and he really sees it as redefining not just data science, but specifically software development itself... And that it is a new way of getting where you wanna go, where you are letting your systems find that best path forward, instead of a programmer explicitly using "If-then" or case statements to get to that same place, and they have to think of every edge case.

So AI is to me \[unintelligible 00:20:37.19\] that statement has colored in the last few weeks how I'm looking at as it's the next generation of software, it's a revolution in software programming that we're going through, and it's not just something that belongs to the data science world. It's a fusion of them.

**Daniel Whitenack:** I'm really glad to hear that perspective from you, Chris, and I expected -- the reason why I asked that is because I think it kind of leads a lot to how we answer Jerod's original questions around the show, and that sort of thing... And the fact is that AI and this space is constantly evolving, and there's so much happening and will happen over time that will change how that's even defined... So I think part of the show is bringing people along with us on that journey, and kind of bringing them into the current state of the community, introducing them to what new things are coming online, and how we're navigating this constantly changing thing called AI.

At the same time, I was kind of poking Chris, because if you ask that question at some AI conference, it's guaranteed to get you like two days of intense discussion and argument...

**Adam Stacoviak:** We were pretty close. The answer was longer than I expected, that's for sure, but I liked it.

**Daniel Whitenack:** Yeah, I actually just listened to the Changelog show on ElasticSearch - or I guess Elastic is the company now, but you were talking about ElasticSearch, and I think a great comment was made in that show about no one wants just data, right? They want insights from the data, which has led the ElasticSearch team to create these great tools around full-text search... And they kind of have implemented that as a way to get insights.

I would say no one wants data; they want insights from the data, right? And in so many cases either we don't want to or we can't define the relationships between the data and the insights in an easy way, right? And in my mind, AI is filling that gap. It's filling the gap between data and these complicated, complex relationships that eventually lead to some insight, whether that's detecting objects, or whatever it is. I think that's why (like Chris mentioned) it changes so much over time - those insights that we want might change, but our data also might change, and we might develop new methods for defining those relationships. Now we have examples like using machine learning to figure out how to do machine learning, and define those relationships. It's a lot of exciting stuff.

**Jerod Santo:** Touching on it a little bit, looking down on the show - let's say we've been doing this for six months - what do you guys imagine are some of the topics that have been covered, or maybe even some of the guests that you've had on? What are some conversations that you just can't wait to have, and that people can expect from practical AI?

**Daniel Whitenack:** That's a great question. I kind of view multiple different categories of shows and interviews that we'll have. We will have guest interviews that will be focused on certain applications of AI to really interesting things, like detecting new planets, identifying cancer, and other things like that. That's something I would expect.

\[00:24:08.15\] I would also expect us to have guests on that will help us pick apart these complicated topics, because we really want more people in the AI community. We welcome you and we want you, and we as well want to learn about all of these complicated topics in a very accessible way, and don't want it to be intimidating, which AI might be to certain people. So we'll have some learning shows like that.

And then finally, we'll just kind of have some topical shows. There's a lot of general areas in AI - Chris mentioned deep learning, which if you're not familiar, has to do with these very deep neural networks, so in essence a very, very complicated, non-linear function that you parameterize to do something like object detection. I'm sure we'll talk about that as a topic, but there's a lot of other interesting things like AI ethics - what if your self-driving car runs over someone? And malicious AI, and other things. And what infrastructure do people use for AI? How do you do AI on a phone? There's all sorts of interesting topics that have to do either with the application of AI, or actual technology around the practical implementation of AI.

**Chris Benson:** There are so many different levels to answer that question on... In terms of what I'm looking for, to cover a couple real fast -- I know that Daniel and I will have joy when we see people that maybe were intimidated, that don't necessarily know how to enter into the field, understand that the tools are accessible, understand how to get started in it. That data scientist or that software developer who says "Wow, it seems like I might have a really good problem to solve. If I only was able to do that...", and to help that person get started, understand where to go, what the resources are, how to think about the problem in just a very pragmatic sense... Which is just how all of us have entered into so many other technology areas.

This is just another one at that level, because the availability of tools and the explosion in terms of resources out there, tutorials and stuff - it's just overwhelming in terms of what I see coming across my news feed... And to help find really good material and push it toward people and say "Hey, I think this is a useful thing." That's one.

And then beyond that, one thing that's unique about this field is that as AI does evolve beyond where it's at today, someday, this is potentially a technology that takes on characteristics that no other technologies have ever achieved. There's the speculation on self-awareness, and super-intelligence and consciousness that are parts of just everyday language; you don't have to be in AI to be discussing these. There are questions that I get asked all the time, and they're fascinating to think about.

Daniel mentioned the ethics concern - I think this is a huge area where you have a tool set that is so powerful, but we're just starting to understand how it can be used, and there are so many things that we don't know about where we're gonna go with it. So these questions of using it responsibly is gonna be a really big topic going ahead.

\[00:27:59.03\] So you don't just have the technical side, you have the societal impact, you have the ethical concerns that are associated with it, and you have it as "How do you merge this technology into humanity in the years ahead in a productive way? In a way that helps people rather than hurting them." There's so much opportunity for conversations on all of these different levels, that I'm really excited to welcome people into this conversation and have that kind of diversity of thought on this.

Some shows, I would imagine, are very hands-on, and others are debating these larger issues.

**Jerod Santo:** Well, as you all can tell, we are very excited, all four of us, as we continue on... I'm excited to listen, because this is very much an area of software development and the industry that I'm on the fringe of, and I think podcasts are an excellent way to learn these things in a non-pressure-filled -- you don't have to perform; you can do it while you're mowing the lawn, while you're commuting, or what have you... So I definitely intend on listening every week, and accessing myself some AI as well. I'm looking forward to it.

**Adam Stacoviak:** That kind of leads into maybe what we can expect. If you're a listener out there listening to this, obviously, you're like "Hey, what can we expect from this show?" and I think we have some ideas. Obviously, those ideas may change; we're all about iteration here. The rough idea is obviously sharing news, resources, and as Daniel and Chris mentioned, making them very practical, maybe even demystifying things that are very complex or hard to understand, or giving people inroads who are intimidated... But you've also got this other side where you wanna do either topical interviews, or straight up interviews, or having people that are really innovating in this space sharing what they're working on and how they're working on it. I think that that's something that the listeners can expect.

This is definitely going to be a weekly podcast, so expect something in your ears every single week. If we're not doing that, then we're dropping the ball and we're not gonna do that. Any closing thoughts from Chris or Daniel? Anything else you wanna leave on the floor here before we close out this first intro show?

**Chris Benson:** I certainly do... First of all, I wanna thank both Adam and Jerod for believing in this idea of the community around AI and giving Daniel and I this opportunity to engage the community. I'm really looking forward to what we can build ahead.

On top of that, I'm really hoping that the listeners engage us. Daniel and I are both very active on social media, on Twitter, and this is a dialogue... The reason we wanted to get this going is to have a community that you can come to, feel welcome in, take a risk in - you don't have to know everything - and explore it with us as we go forward. So I'm looking forward to that feedback and that conversation with our community as we build that up. I'm tremendously excited to do that.

**Adam Stacoviak:** On that note, I also wanna mention - since you said the word 'community' - you can go to changelog.com/community and that dialogue can happen in Slack. So if you go to that URL, you'll see a sign that says "Join the community." Click that button. It costs you nothing. You can get in Slack, you can talk with us in the AI channel, or any other channels we have going on there about certain topics. I'm sure Daniel and Chris will be in there. If that's something you're interested in, you should definitely do that right now.

**Chris Benson:** Absolutely.

**Adam Stacoviak:** What about you, Daniel?

**Daniel Whitenack:** Yeah, I kind of will echo Chris' thanks to everyone, and also just reiterate - we view the development of practical methods in AI and the practice of AI as something very important as this trend grows, and we want you to be part of things.

\[00:31:55.15\] I would just encourage you if you're starting out in AI, or maybe you feel like you need to level up in AI - get your hands dirty; we're here to help. Just hack on something and get something working or not working, and then come grab us in Slack or on Twitter, and reach out. That's how we all got started, and I certainly hope that you'll just try to get hands-on and try some things. We can't wait to see what you build.

On that note, I'll also emphasize - we're gonna have some great guests on the show from all sorts of places, like Google and other places, but we also wanna hear from people in the trenches, working in startups, trying to build products around AI, or maybe just doing amazing side-project work that's open source. We wanna hear from you, so if you've got something really interesting going, an interesting project, and maybe you're doing something not for profit, but just for your own interest or for some greater good, these are the things that we'd love to hear about and we'd love to feature - we'd at least like you to comment, share those with us, and hope to discuss those things.

**Adam Stacoviak:** There's two URLs I can suggest for that. Actually one, sorry. One's an e-mail, one's a URL. You can e-mail us at any time for things like this (show suggestions), editors@changelog.com. Our preference is our open inbox, which is on GitHub. It's a repo called ping, so you can go to github.com/thechangelog/ping, and we have labels in there for all of our different show, so if you wanna mention any particular suggestion for us to key in on for Practical AI, go there. Or if it's something you just wanna e-mail us and say hey, e-mail editors@changelog.com. We'll get that in the right place. So if you've got ideas like Daniel was mentioning here, just reach out.

Fellas, thank you so much for -- this is gonna be a fun ride; I think that's probably what I'm thanking you for. This is gonna be an adventure, it's gonna be an exploration, and to you, the listeners - you're gonna come on this ride with us... Just hang on, this will be fun.

**Chris Benson:** We're psyched, man. Totally psyched.

**Daniel Whitenack:** Yeah, it's gonna be awesome.

**Adam Stacoviak:** Alright, we'll leave it there.
