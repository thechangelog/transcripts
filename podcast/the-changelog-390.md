**Adam Stacoviak:** So your post obviously caught my eye a few weeks back, "Why outbreaks like the Coronavirus spread exponentially, and how to flatten the curve." Now, "flatten the curve" has become this big term that everyone is pushing, obviously... You're a graphics journalist, but I have no idea what it takes to do that job, so kind of fill us in to what type of reporter you are.

**Harry Stevens:** Sure. It's a very multi-disciplinary type of job. People who do it tend to not be able to do everything, but everybody who does it can do a few different things. First of all, you need to be able to be a reporter, which means you need to be able to find out what a news story is; you need to understand how to frame a story and how to make people interested in what's happening. You need to be able to find sources and interview them... So all of that sort of basic stuff that reporters do.

Then, in addition to that, you need to be able to write a story, you need to be able to design graphics for that story, so you need to have studied information design... I mean, not in a school setting, but you need to have an awareness of what makes a good chart, or what makes a good visual... And then, in a lot of cases, you need to learn how to code, because so much of what we do now is online, and so it takes advantage of the fact that the web is an interactive medium... So a lot of what we do is interactive, and therefore built with code.

It used to be that if you did this job 20-30 years ago, you needed to be able to draw, and now I think most of us can't draw, but we can code, so that's kind of the new skillset.

**Adam Stacoviak:** The new pencil, yeah. The new paintbrush.

**Harry Stevens:** Yeah, exactly. A lot of people I work with can also draw. They're just very multi-talented people.

**Adam Stacoviak:** \[00:03:58.04\] Very cool. It's interesting, because this is an article that you've written, obviously, but it's also a Coronavirus simulator. So it's sort of like software, I supposed, embedded in an article. I don't know how to describe it, but it's just interesting that it's not simply an article.

**Harry Stevens:** Yeah. Generally, with my work, I strive to take advantage of the fact that, like I said, the web is an interactive medium, in order to explain something about the world in a way that couldn't be done just with text. So I just thought that it would be interesting to look at these balls bouncing around on the browser screen, so I incorporated that element.

I knew that it would not be possible to simulate that actual Covid-19. In fact, I had spoken to a woman named Lauren Gardner, who's like a computational epidemiologist, or something, at Johns Hopkins University... And she was describing to me the method by which they produce their forecasts for Covid-19, the actual Covid-19 in the real world. And she was like "Look, I've got a team of Ph.D's here, and we're all really good at math, and we run our simulation on a computer overnight, because it's so computationally expensive. It has to take into account such a wide variety of factors and complexities about the real world. And even then, when we get our results back, there's a huge range of uncertainty, because there's so much about Covid-19 that we still don't know. We don't know necessarily its transmission rate, or its fatality rate... We can't forecast what governments are gonna do with regard to their policies to shut it down... Any kind of forecast you get with Covid-19 is gonna have huge uncertainty bands."

And again, this is from people who do this all the time, and are professionals. So it's something that's clearly far beyond my ability to do. And in fact, I had this idea that "Wouldn't it be cool if we could make Covid-19 simulators in the browser, and allow readers to tweak the parameters and see how the different decisions might change with a likely forecast?" And in fact, the New York Times has since produced just such an article. It was a great article, that you should check out.

**Adam Stacoviak:** Yeah.

**Harry Stevens:** But even then, I think that it represents the forecast with a kind of precision that's not actually there... And they do give caveats, that there's a lot of uncertainty here. But anyway - for me, I was just like, there's no way that I'm gonna be able to do something like that. So that's what really pushed me towards doing this fake disease that I called simulitis, that spreads through--

**Adam Stacoviak:** Great name. Naming is so hard. That's a great name.

**Harry Stevens:** Thank you. \[laughs\] Better than Covid-19, I think.

**Adam Stacoviak:** Yeah...

**Harry Stevens:** Anyway, so I just thought "Make a simple simulation, just have these dots bouncing around in a room..." But even then, it kind of worked as a metaphor; not for forecasting Covid-19, but for showing how network effects worked, and showing how individual behavior can disrupt those network effects... Which I think is really what people were struggling to understand. Everybody is feeling kind of hopeless and anxious about what's going on, and they don't really feel like there's anything that they can do to improve the situation... So I think just by seeing these simple simulations where "Hey, if we stop some of these dots from moving around, suddenly the infection rate declines dramatically" gives people a sense of like "Oh, that's all I've gotta do, is just basically nothing, and suddenly I'm contributing to the solution."

**Adam Stacoviak:** Yeah. It really depends on your audience, right? If you were trying to be a scientifically extremely accurate variation of truly how Covid-19 is spreading, that's a different story. I think what you're trying to do - to me at least, it seemed like what you're trying to do is communicate and influence. Not that it is inaccurate, but you weren't striving for accuracy to the way Covid-19 truly spreads.

**Harry Stevens:** \[00:08:07.05\] Yeah. One, because I couldn't do it, and two, like you said, because the audience didn't really need that. I think that the real key to it was like -- so network effects have this property of exponential growth, where as something starts to spread, first there's one, and then two, and then four, eight, sixteen, thirty-two, sixty-four, and you see that exponential growth curve. And this is the case of things spreading through any network; it could be a meme on social media, or it could be an idea... In fact, I don't know if you ever listened to the podcast Hardcore History, but the host, Dan Carlin, sometimes talks about Marxism as this intellectual contagion, as this idea that's spreading through society... That's just his perspective, but anyway.

The language of disease is often intermingled with this idea of network effects... So I just think that it's kind of a tricky idea to visualize this exponential growth through a network. But then when you see it, when you see those bouncing balls, and you see the curve going up, it just becomes immediately clear what it is that people are talking about when they say "exponential growth".

Anytime that you have the opportunity to take something that's hard to understand with words, but easy to understand with graphics, that's sort of the ground that I like to plow when it comes to the job that I have.

**Adam Stacoviak:** That is, in essence, what a meme is, right? It's an over-simplification of a very complex idea.

**Harry Stevens:** Yeah.

**Adam Stacoviak:** Complex to convey.

**Harry Stevens:** Yeah, and I think that's one of the reasons that they spread so easily.

**Adam Stacoviak:** Yeah. Plus they're funny. \[laughter\] Sometimes.

**Harry Stevens:** Yeah, I mean -- sometimes they're false, and sometimes they are unnecessarily reductive, or they simplify the world too much, but they can also be really effective at communicating.

**Adam Stacoviak:** Yeah. Where did you begin, I suppose, with something like this? In the URL it's CoronaSimulator, so it's definitely intending to be some sort of simulator. It's in the graphics section, obviously, so you're obviously trying to visually convey an idea... Where did you begin, I suppose, with the idea of this post? Was it you solo? Give us the full story.

**Harry Stevens:** Yeah, that's interesting that you noticed the URL, because that is how our URLs on the graphic side get assigned, based on our GitHub repository. The GitHub repo that I made at the very beginning was called Coronavirus Simulator. I knew that it was gonna be some kind of simulator, I didn't know exactly what it was gonna be...

Basically, the idea for the story came from an edit meeting that we were having about two weeks before the story was published. I was in a room with a couple editors and a few other graphics reporters, just on the graphics team... And we were talking about "How are we gonna push our coverage forward of this emerging Coronavirus situation?" Because we had already had all these trackers up on our website, and I think you see every news organization has these trackers up, where we're using data that's a little bit squishy, because we know that there's under-reporting of cases, because--

**Adam Stacoviak:** Yeah, because of testing, and stuff.

**Harry Stevens:** Because of testing, and because a lot of people who have this disease are asymptomatic, or they don't feel that sick, and they're not gonna get tested, even if there's a test available. And then that varies depending on the country, so trying to compare countries is kind of hard... So anyway, it's like, for a data reporter it's kind of a nightmare, because this dataset is all we have, and everybody's using it, but it's not the best dataset.

\[00:11:46.20\] Anyway, so we were just talking about ways that we can do other things, other than using all these case numbers that may or may not actually represent reality... So I mentioned that I'd been -- this was like a year ago before this, I'd been working on some experiments with collision detection. Sometimes on the weekends I just kind of like to code, just for fun, or make graphics... Not with any story in mind, but just because I find it fun and interesting... So I'd been doing these experiments with like "What happens if you have two circles moving around at random angles, and then they collide with each other?" How to detect whether they've collided, and then what would their behavior be after the collision? Do they just swap angles, or what's the surface off of which they reflect?

I still had the code for that lying around, and I shared it with my editors, and I was like "Hey, look, we have these balls bouncing off of each other... What would happen if I made one of them sick, and then they could transfer a disease to each other? We could just show the state of the simulation over time." So we store data about every tick of the simulation - how many are sick and how many are healthy, and then we could show a chart of that.

So I kind of described the idea as it was in my head, and the editors were like "Yeah, sure. That sounds like it could be interesting." I went back to my desk, and worked on it for a couple days... There were a few bugs in my original code, and I ironed out the bugs, and I got the -- also, the original code didn't have any concept of sick or healthy. It was just balls bouncing off of each other, and it didn't store data about the simulation over time, so I added that...

**Adam Stacoviak:** Yeah.

**Harry Stevens:** And then once I got that working on my computer screen, I went back to my editors and I was like "Hey, I think this could be a pretty powerful tool to explain how things spread through a network." Then, over the course of the next week and a half or so, we refined it, edited it, and cut things out, and sort of settled on the final four simulations that we showed, with like the free-for-all, and the quarantine that kind of doesn't work out, and the social distancing.

I'm lucky to work on a pretty big graphics team, with a lot of editors with a lot of experience... The original design wasn't nearly as clean, but I showed a lot of versions, and people said what they thought worked and what didn't work, so little by little we kind of refined it to the final graphic that you saw.

**Adam Stacoviak:** Yeah, I think you and your team did a great job.

**Harry Stevens:** Thanks. Thanks, man.

**Adam Stacoviak:** It impressed me from a visual standpoint. Less like "Oh, this is cool code." At first, I was like "Wow, okay...", so you have this obvious free-for-all; that's how the world works anyways. The typical, normal world, sans virus, no threat, is the free-for-all. And then this idea of attempted quarantine means that - as you explain in your article - people, or a government, or some sort of authority will attempt to push a quarantine. But somehow, someway, the quarantine is broken, or thwarted, and then you can see the effects, and your visuals very much describe that.

Then obviously, we started to hear this brand new phrase in the world "social distancing". What's interesting more so about that is if you go back and watch the movie Contagion, that word, that phrase was said in that movie, so it's almost like foresight warning; it's crazy.

**Harry Stevens:** That's cool. I haven't seen that movie, but I should watch it.

**Adam Stacoviak:** If you have trigger warnings, just go with a grain of salt... Because it is very similar; obviously, embellished to a version of what we're facing today, because the illness in there I believe was EMV -- jeez, I'm forgetting it right now. It doesn't matter. That one there is far more quickly deadly... So it's interesting, I suppose, the biological physics involved for the spread... But the point was you start to see social distancing, and you mentioned moderate distancing, and even how that's ineffective... That you really need this extreme, this extensive distancing, and you're able to easily condense that idea in four graphics, that every new page refresh is a new simulation. To me, it's genius, because I can't imagine how many people it influenced...

\[00:16:10.23\] That's one part I wanna cover with you - is there measurable ways to track the influence of what you've written here to Saved Lives. Sure, you can't get it done to an actual Saved Lives, but you can to some degree -- maybe you can call your friends at Johns Hopkins and do some math, or something like that... But the point is it influenced me. I immediately showed it to my wife, I'm like "Listen, we're doing the right things here. We're not crazy. Harry says we're not crazy. His graphics say we're not crazy..." So there you go.

**Harry Stevens:** Well, thanks, man. Yeah, if it saved one life, that's...

**Adam Stacoviak:** It's enough.

**Harry Stevens:** That's crazy. I think a lot of people who get into journalism probably have some kind of idealistic streak, and then a lot of times you realize that it's not so easy to write the story that topples the government, or changes the corrupt system, makes the world better... It almost never happens. So if this did do that, then that's extremely satisfying to think about.

I mean, this definitely spread much farther than I could have ever anticipated or hoped for... In weird places, too. Somebody shared with me the Venezuelan dictator, Nicolás Maduro, sharing it on state TV...

**Adam Stacoviak:** What...?

**Harry Stevens:** That's weird... \[unintelligible 00:17:26.10\] the Venezuelan dictator sharing... Because we translated to Spanish, too. We translated also to Japanese, and then this Japanese soccer star - I think his name is Keisuke Honda - shared the Japanese version, so a lot of people were reading it in Japanese... And we got requests from random readers, who were like "I can read English, but my parents can't, so can I translate this into Turkish?" or whatever. So we ended up getting pro bono translations... It really struck a chord with people, I guess. I just really wanted to share it with everybody, so that -- yeah, like you said, we're doing the right thing.

I think what's so weird about this social distancing thing is that I kind of feel like we're a society under siege right now; we're dealing with this threat that's so far beyond anything that we've ever dealt with before... And when that happens, it's like you kind of wanna leap into action, you wanna do something to make the world better... And yet, what we're being told repeatedly is that actually, no, you're supposed to do nothing at all. It's so counter-intuitive.

**Adam Stacoviak:** Way counter-intuitive. It's almost like "What? Really?!" Thankfully, we have your visuals to show us that, but... That's what I'm trying to say here - the immediate action is some sort of action, some sort of doing... Whether it's panic, which has happened, obviously... In some sort of version preparing for you or your family or anything -- and how do you even prepare for this? There's really no way to truly prepare, because there's just so much unknown.

I did do a little googling real quick, and I found out the virus name in the movie Contagion was called MEV-1. I just had to close the loop on that, because I like closed loops. MEV-1 was the fictitious variation of -- I suppose a version of what we're dealing with today.

One core thing that you mentioned to is the translations into different languages. 13 languages, by my account. Basically, what you said - it sounds like there was a lot of voluntary operation there; people are offering to translate it.

**Harry Stevens:** Yeah. Not all of them were voluntary, but a lot of them were... Which was really cool. In fact, we ended up having to stop. We got a few more translation requests and we had to say "Thank you..." Somebody just did the translation in Polish, and I was just emailing with them, saying "We can't do any more--" Just because it takes time, unfortunately. We can't just plug it into a content management system and then publish a story. First we have to vet it, so we have to get somebody else to read through the translation, and then we have to...

**Adam Stacoviak:** \[00:20:07.14\] For accuracy, yeah.

**Harry Stevens:** Yeah, and then we have to program it all up again. All the code is there, but we have to change certain things... Because words in different languages take up more space in pixels, so sometimes we have to change a couple things. So it's not as simple as just like "Oh, we have a translation. We can publish it." It was taking up the time of other reporters, who really needed to get back to covering this enormous story... So we had to even turn some of the translations down.

But yeah, it was definitely really cool to see people wanting to share it so badly that they were willing to put in their own time to translate it... My wife is Bengali; she's bilingual, and her mother is a professor of comparative literature, so she regularly translates things from English to Bengali and other languages, too... So she helped us out with the Bengali translations. It was pretty cool. We got a little -- it was a family affair.

**Adam Stacoviak:** Yeah. Let's talk about trusting the data, because you'd mentioned a lot of math being done by Johns Hopkins University... They have a center for systems -- I guess they're doing a lot of different stuff. You mentioned Laura Gardner, and the visualization of the dashboard that's famous now... It's really interesting, because the screenshot that I took to cover that back on the sixth of March - these are staggering, staggering numbers when you think about it, but on March 6th that dashboard said 101,583 confirmed cases, and then today it's 911,308 confirmed cases. That same date, March 6th, it was 3,400(ish) deaths, and today (we're recording this April 1st), 45,371 deaths.

**Harry Stevens:** Yeah, that's exponential growth... It's crazy. It's hard to fathom, but this thing is just so contagious. I was reading about MERS last night. There was an outbreak in 2012...

**Adam Stacoviak:** Middle East Respiratory Syndrome.

**Harry Stevens:** Exactly, yeah. That one was way more lethal. I think it killed like 30% of everybody who got it... But it was not nearly as contagious.

**Adam Stacoviak:** You had to actually spend a lot of intimate time with people to get that.

**Harry Stevens:** Yeah, exactly.

**Adam Stacoviak:** You had to be really close to them, a lot of time with them... Deadly, but not quite as easily caught, contagious.

**Harry Stevens:** Yeah. So this thing seems to somehow have struck the perfect lethal balance in terms of - you know, it's not so lethal that it just immediately kills its host... And also, the fact that it can travel and be contagious in a person before they even know they have it - it just seems like it was designed to infect everywhere in the world, and of course, it has done that... But it's almost the perfect storm of attributes that you would expect to just become a terrible nightmare.

**Adam Stacoviak:** So you have something that's so contagious, or as you mentioned, this perfect storm of being contagious, and when we go back to this original idea of several -- I guess now it's about four weeks or so back, where you started to early visualize this thing... You were charged with influencing people in a visual way, to say "Something this contagious can spread this quickly." And you had the four different axes, I guess - you've got the different variations of how it's spreading; you've got free-for-all, attempted quarantine, moderate distancing, and then this extensive distancing.

If I'm reading this and I'm thinking from an author's standpoint, from a reporter's standpoint, you are sort of saying "Hey, the more extensive your distancing is, the more safer we all are, and this idea of flattening the curve."

**Harry Stevens:** \[00:23:59.03\] Yeah... I'm not a disease expert or anything like that. This is just for my casual reading, but it does just seem like this thing was designed to spread everywhere. You really couldn't have come up with -- I mean, I guess it could be more contagious or it could be more lethal (and wouldn't that be worse?), but this thing is just about as bad as you can imagine.

But yeah, this idea of flattening the curve also I think is an interesting visual concept. It doesn't really work unless you can see a chart of it. Actually, at the same time that I was making the simulations, it was also the week where a bunch of these "flattening the curve" graphics had been shared on social media; I'd seen them on Twitter. Those graphics I think are ubiquitous by now.

Or you see like "What would happen if no measures are taken to reduce the spread of the disease?" and you have that curve of just runaway, exponential growth... And then they say "Well, if we enforce certain measures to make the transmission rate less, like we shut down public events, and we ask people to stay at home, then we can lower that curve such that--" Basically, you just wanna keep that curve low enough so that the hospital capacity is big enough to deal with all the sick people.

So even if you have the same number of total sick people at the end of this thing, at any given time you don't wanna have more sick people than the capacity of hospitals to treat them... Which is sort of this crucial idea of flattening the curve.

The simulations that I made - they all run for the same amount of time; it's all like 1,500 ticks of your browser, or whatever... So I think that if you let them run for as much time as it took for either everybody to -- basically, for the virus to disappear, so no one's sick anymore, I think you'd find that almost no matter what strategy you adopted, that you're gonna get almost everybody getting sick.

And again, simulitis is not Covid-19; simulitis is way more contagious even than Covid-19. Anytime that two people come in contact where one of them is sick, the other one gets sick. Fortunately, Covid-19 is not like that. Not everybody is gonna get it. But even if a large slice of the population gets it, we just don't want us all to get it at the same time. Even if it's still around next year, and people are still getting it, we just don't want there to be so many people that the hospitals can't keep up with the number of sick people. That's the key thing.

**Break:** \[00:26:51.15\]

**Adam Stacoviak:** Let's talk about the visualization process... I suppose the visualization after the visualization. When you go to the top of the post that you've written, you sort of have this quadrant of each different distinct type... And I just think it's kind of interesting. I'm curious if this was your idea, or how this came about. I guess they kind of become icons, to some degree, and the timeline is spread for each graphic. I'm trying to visually describe this, so that listeners can grok this... But if you go to the link in the show notes, you'll get that much more easily. Basically, each icon represents that simulation for each different version, so Free For All, and all the different ones we've got here. \[unintelligible 00:29:02.27\] wipe in each of them.

This is interesting, because it's like "This is the time it takes, and here's an easy visualization of that curve." You mentioned "flatten the curve", and you can see in that first one, Free For All, where the curve is highly spiked. So many people have it all at once. Whereas the Extensive Distancing one in the bottom right - the curve is flattened. You can see that, as you'd mentioned, simulitis is more contagious than Covid-19, everyone over the timeline may eventually get the disease, but the curve is stretched over the timeline better than all at once.

**Harry Stevens:** Yeah... And I think that's one of the virtues of the graphics in the article - they're really simple. Pretty much everybody has seen an area chart before, where you have the change over time represented as these different areas of different colors. So what it's doing is it's leveraging the knowledge that people already have of this chart type, so you immediately get it. You don't have to learn a new chart type to try to understand what's going on. There's nothing at all complicated.

One of the things you learn when you're first learning how to make charts is that you should always, always have -- like, "Label your axes. Label your XXs, label your YXs. Let people know what the units are." But in this case, I could defy that advice. The XX - you know it's Time, and I kind of use the metaphor of a loading bar. People are familiar with loading bars; they fill up over time. But the actual unit is not labeled, because it doesn't represent any unit of time in the real world. It doesn't represent days, or months, or anything. There's no mapping between how long it takes the simulation to run and how long something might happen in real life. So it's the simplest possible chart you could imagine.

Even the vertical axis, which represents the number of cases out of the whole population, is also not labeled, and it doesn't need to be labeled, because it's just so simple and obvious what it means... And I think for a lot of people who design graphics - and I'm just as susceptible to this as anybody - we often wanna create new visual forms, experiment with how you can encode data with a different mark, or make some kind of crazy-looking thing, with different connections, and stuff like that... And it's fun to try to do that sometimes, but when you do that, you're asking your reader to learn a whole new visual language before they can even start to understand the content of your graphic. So they have to understand the form before they understand the content.

So one of the virtues of using these really simple graphics that everybody knows is that they can immediately just start to understand the content of it, rather than having to try to learn a whole new visual language. The only other charts besides those area charts is like there's one chart at the very beginning that just has a thing going straight up, just to explain what exponential curves are, and then there's these little tables that are at the top left of every one of the simulations... And those tables have three rows and two columns. It's the simplest thing in the world, everybody can read that. Like I said, there's no challenge to learn how to read it before you can start to understand what the content is.

**Adam Stacoviak:** \[00:32:17.21\] The whole thought process that goes into designing these visualizations to me, in many cases, is a lot like the way you would design an application or a website's user experience. The idea of keep it simple. Sometimes you add "silly" or "stupid" at the end of that; we're not gonna do that here, but... Just keep it simple, is a common thing. That's why Steve Krug wrote "Don't make me think." A lot of the same methodologies -- have you read that book, by any chance?

**Harry Stevens:** I haven't, but it sounds like something I'd really be interested in. I'm writing it down right now.

**Adam Stacoviak:** I would recommend it. It's really focused on, I would say, search, and information... And in a lot of cases these are the things you're dealing with too, but a lot of that same principles overlap here. The more simple you can keep the thing you're trying to communicate -- that's why memes, in many cases, are very simple, too. In many cases they're just very simple, but contain complex meaning... And that's what you're trying to do here. So I'm just curious, what are some of the things you do that are like prior to even designing. Do you sort of like start with the audience, what you're trying to communicate...? What are some of the early steps that go into visualizing these things? ...not just this one in particular, but anytime you're working on this kind of stuff?

**Harry Stevens:** There's this great talk that you can see on YouTube by Mike Bostock, which is probably the most popular JavaScript library for making charts... And the talk is called "Design is a search problem." He talks about the way that you create data visualization designs, and the point of the talk is that it's a really iterative process. So you don't know if something is gonna work until you see it, a lot of the times. You can picture what it's gonna look like, and you can describe it, but until you see it on your computer screen, or even on a piece of paper, it doesn't usually work, because you need to have the real data. So until you see it on your computer screen, you don't know whether something works or not.

And then also -- so what I do a lot is I'll make something and it'll take me a few days; I'll be looking at it all day while I'm making it, so to me there's no challenge in understanding what it is. So what a crucial step in every design process is is to show people.

**Adam Stacoviak:** Show somebody else.

**Harry Stevens:** Yeah, you've gotta show it to somebody else. In fact, you should show it to a wide variety of people. I work on the graphics team of the Washington Post, so everybody on the team looks at charts all the time, so they're familiar with strange chart types, so it's easier for them to understand certain things that a lay reader wouldn't... So I also show my charts to -- my wife is one of the best audiences for my charts, because a lot of times she'll look at something and she'll just be like "I don't get that. It doesn't work for me." And she won't' even necessarily be able to say why, but that's really useful feedback.

If something doesn't work for somebody, it means it doesn't work. It's not their fault for not being able to understand it, it's your responsibility as the designer to make something that's clear enough. And that doesn't necessarily mean that something needs to be stupid, or unnecessarily simple, but it just means that you have to eliminate whatever unnecessary complexity is there, so that you're communicating the idea that you wanna communicate as efficiently as possible.

With this graphic, for example, one of the early design ideas that I had was that it would be what we call scrollytelling. So the thing changes as you scroll through the story...

**Adam Stacoviak:** Oh, yeah.

**Harry Stevens:** \[00:35:55.27\] I thought that'd be pretty cool, to have the simulations advance as you scroll, or something... Anyway, so I showed it to people who I work with, and they're like "No, it doesn't work at all." And I was a little bummed out, because it took me a while to figure out how the code would work. Sometimes you get attached to your code, because you're like "Oh, it works so well. Look at it, it's doing what I wanted it to do", but it's like "Well, it's not giving you the effect that you want, so you've gotta delete that code and start over." That's just how it is.

**Adam Stacoviak:** Your process seems to -- you use paper, to some degree, but you're saying that you really need the data component, because you can't tell if the visualization is gonna work.

**Harry Stevens:** Yeah.

**Adam Stacoviak:** It sounds a lot like you kind of go right into -- maybe you spend a little time in concepting, maybe with pencil and paper or some sort of visual to get an idea, but it sounds like the faster you get to some sort of working code, the better.

**Harry Stevens:** Yeah, definitely. And it's really a trial and error kind of deal. If I do sketch something out -- so I have a notebook next to my desk, and it's like a really narrow reporter's notebook... And that's the best notebook for sketching out graphics that are gonna go on the internet. Because a lot of times you'll have this idea for some really cool graphic, maybe like a network diagram, with all these nodes connecting to each other, and then you realize "Oh my god, more than half of my readers are gonna be seeing this on a phone, and there's no way that this is gonna work." So if ever sketch something out, it's on a really narrow notebook, just to be like "Is this gonna fit into 400 pixels? Because if it's not, I can just throw it out right now."

**Adam Stacoviak:** Luckily, for this post for you, you've got the full page width, and then some. So you've got the full width of your words even. So you weren't limited to just a column. As much as your text has got, your graphics got. Maybe even more so. You went wider than the graphics, actually... At least on desktop.

**Harry Stevens:** Right. Yeah, so if you load that on your phone though, it scales really nicely into the size of a phone. It's just down one column. And it works just as well on your phone as it would on your desktop.

**Adam Stacoviak:** Let's talk about tooling a little bit then. So getting into the data - you've got a team, you've gotta share data, you've gotta share and collaborate. What are some of the tooling that you all use to 1) iterate on your own, to just be creative, but then 2) to share and collaborate?

**Harry Stevens:** It's different for everybody, depending on what tools you like to use. It's not like you have to write in JavaScript, or you have to use R to do your data analysis, or whatever. There's a lot of freedom with regards to that. We use GitHub for version control, just like about everybody does...

**Adam Stacoviak:** There you go.

**Harry Stevens:** ...so that helps us all work on a project together at the same time. In terms of developing interactive graphics for the web, JavaScript (I can say) pretty unequivocally is the way to do; it's the best language for that, just because it compiles in your browser, so you don't need a server. It just makes things a lot faster. So as a result, a lot of tools have been built in the JavaScript environment, like D3 and other things, to make it easy to make and interact with charts on the web. So I think a lot of us use D3.

For data analysis though there's a wide variety of tools... Because JavaScript right now is not that good at big data analysis. One of the big problems with JavaScript is that data is usually represented as JSON, and JSON is a pretty inefficient format for data. If you think of a JSON object, every column name is gonna be repeated in every row. So the same dataset represented as JSON is gonna be half the size as a CSV. And that's just one problem.

Also, browsers have memory restrictions, and things like that... And that's gonna be changing over time, and I hope that at some point JavaScript is just as agile as any other programming language for doing data analysis. So as a result, I think the two big ones that people use, at least on my team, are Python and R.

\[00:39:55.13\] It's kind of a funny breakdown... Some people are able to use both, but usually it's like you're a Python person or you're an R person. I'm personally an R person, and it's not because I think R is a better language. I don't. I've written a little bit of Python and I think it's really wonderful and elegant...

The reason I use R is because of RStudio. I'm a really visual type of person, and the design of the R studio coding environment is really good. Just the way it's laid out - it's laid out into four sections; you have your graphics down at the bottom right, you have your console at the bottom left, you have your program that you're running at the top left, and then top right you can see all the variables and data that you have stored. Visually, it's a really nice way to think about a program... Whereas Jupyter Notebook I don't like as much because it's a big, long list of things, and it's sometimes just confusing the order in which things \[unintelligible 00:40:54.01\]

So even though Python might be a better language... It's like, I don't really like R as a language, but I just like the environment in which I can write R. If somebody wrote an RStudio for Python, I'd love to switch over.

**Break:** \[00:41:15.06\]

**Adam Stacoviak:** Harry, this post you've written was the most read post in Washington Post's history. That's massive. That's huge. Congratulation on that front. That's just massive, and that shows that to be a graphics reporter, like you are - we've talked about the different facets of your skills and the things you do, but just how influential you can be, especially at a time like this, when we need less misinformation and more clear communication... And I think that's what you've done here.

Visualizing Covid-19 in the way you've done to me was very impressive. It helped me grok a very complex idea into a very simple, actionable thing for me, myself and my family... And I think that's just super-cool, man. I don't even know what to say; that's just amazing to me, that this kind of post, this kind of thing you do has become one of the most read posts on Washington Post. It's massive.

**Harry Stevens:** Yeah, it's crazy. It's kind of like catching lightning in a bottle a little bit. I definitely couldn't have anticipate that it would do so well. If I published it a week later, maybe it wouldn't have. It was just kind of like the right time for it. When I published it, you were seeing videos of college kids in Florida on spring break saying "I'm gonna party no matter what." We're kind of moved past that now, I think, for the most part. So I think it was what people needed at the time.

But also, in general, I would say that the news business across the board is going through a crisis right now, because our sources of revenue have really dried up. Online advertising is not nearly as lucrative as it was to advertise in print... So newspapers across the country, across the world are cutting staff. And it's kind of sad, because -- so people who do what I do, a lot of times, are seen as like a frivolous extra expenditure. And in a way, I can relate to that view, because you know, if you don't have somebody who's covering city hall, or you can't afford someone to cover the local sports team, you're not gonna get a graphics reporter, so I totally get that. And a lot of newsrooms are going through really hard decisions right now.

But on the other hand, it is possible for a newsroom to pursue this kind of storytelling, where you're leveraging the interactivity of the web, and you're trying to take advantage of new ways of telling stories that can be more engaging to readers, I think it's a good idea to pursue that.

\[00:44:19.23\] I'm not a business person, I don't look at profit and loss sheets, and so it's probably easier said than done, but I do know that the places that have early on embraced interactive storytelling and digital storytelling have been more able to weather the economic storm that has befallen the journalism industry in general. You look at the New York Times - they were one of the really early adopters, and a lot of their most successful and popular pieces have been interactive graphics; it's the same thing with the Washington Post and a number of other places.

So it's not just my story... Like I said, I kind of caught lightning in a bottle, and this one happened to do really well, but I think a week after my story was published, different people on the graphics team published a story that was like a calculator where the 2.2 trillion dollar stimulus bill was coming out... So you could go to this calculator and tell it a few things about yourself and it would tell you how much money you could likely claim from the stimulus package. And that's just news you can use. Everybody is wondering this, it's a really simple design, and it tells you important information...

That one also just got a ton of traffic, which is great for our readers, because obviously they've found it useful, and it's also great for the company, because it's subscriber-based and advertiser-based, so you wanna have more of a readership. So I think that these sorts of interactive stories can be really, really successful.

**Adam Stacoviak:** I agree with you on the timing thing... Because 1) great visual idea. Very simplistic in its delivery. 100% the right kind of content, because if it were similar graphics with a whole different problem, less people would care. So it really is perfect timing in many ways, and perfect story in many ways, and perfect visualization in many ways, to sort of create this perfect example of an article on the Washington Post that could outperform every other post in all of its history. That doesn't happen often; it is a unique kind of timeframe for that...

One interesting thing to that, when you mention the outlook on journalism, or outfits like yours in this sort of coming storm, as you'd mentioned - what I noticed was that this post wasn't gated... And some of the posts on the Washington Post are. I use a Firefox web browser; I'll often get yelled at whenever I go to pretty much any -- the New York Times, the Washington Post, I get yelled at essentially for using an AdBlocker. I'm just using a browser; I didn't actually turn it on, it just does it for me. But the point is that this post was not gated, while other posts around Coronavirus/Covid-19 are gated. Were you a part of that decision behind that? What made this one be that -- I mean, obviously it being non-gated helps its virality and its views, too...

**Harry Stevens:** Yeah, definitely. These are decisions that happen over my paygrade, but we have removed the paywall for a lot of Coronavirus content, in an effort to -- you know, this is vital information, and we want our readers to be able to see it without having to pay... Also, it's a way to expose the Washington Post's great journalism to a wider audience, which is gonna be good for the business.

But yeah, I think broadly speaking, with regard to paywall, one of the things that's happening right now is that there's a lot more traffic to news sites in general... Because people are at home, and also because people are freaking out and want information.

\[00:48:10.21\] But a lot of news sites are not able to take advantage of the increase in traffic, because even though they're getting more traffic, advertisers don't have as much money as they used to to buy ads. So if you're a news site that's 100% advertiser supported, the increase in traffic isn't really doing that much for you. But for news sites that have been able to successfully move over to a subscriber-based model, like the Post, and the Times, where you're actually asking your readers to pay some kind of fee to access your content, then they are able to take advantage of the increase in traffic.

So again, not a businessman. This is just kind of like me and my random thoughts, but I really like the idea of a subscriber-supported news organization, rather than advertiser-supported news organization... Because it aligns the goals of your reporters with the interests of your readers. It's like, you're collecting news and you're reporting on news for the people who are reading it, and they're telling you that they like it by paying for it... Rather than "I'm just gonna make some clickbaity things to get the most random eyeballs, so that it pleases the advertiser." I think this Coronavirus situation is really further exposing the difference between those two models.

**Adam Stacoviak:** I couldn't, because of this paywall... And I'm not a subscriber to the Washington Post; sorry about that.

**Harry Stevens:** That's alright...

**Adam Stacoviak:** Maybe at some point I will become. I'm just one of those people who I guess don't; I just don't, I don't know what to say. I feel bad, now that you are sort of indirectly shaming me. I'm just kidding, you're not...

**Harry Stevens:** \[laughs\]

**Adam Stacoviak:** I'm just being funny. I couldn't see how much you've written beforehand. So you mentioned before lightning in a bottle, perfect timing, things like this... Earlier this last year -- you hadn't been at the Post for six months maybe, right?

**Harry Stevens:** Yeah, six months. Something like that.

**Adam Stacoviak:** So how many times have you had your own personal \[unintelligible 00:50:07.12\] on a post out there?

**Harry Stevens:** I haven't done too much stuff, because it takes me a little bit longer -- \[unintelligible 00:50:16.16\] reporter can just file stuff every day. I've gotta code stuff up, and it takes a little longer. But I've done a few stories; maybe ten stories, or something like that. I'm not sure exactly how many. But yeah, nothing even close to the kind of response that this thing has gotten.

That's something that I've been thinking about a lot - what is the metric by which we evaluate how good our work is? Because as somebody who has been focusing on improving my craft, I wanna keep getting better and better... And now it's like, okay, if traffic is the metric by which I evaluate my own work, then it's probably gonna be tough to top this... But of course, web traffic is not the only way that we evaluate how good our work is. There's how well do I think that I communicated whatever idea it was that I was trying to communicate.

So even after the Coronavirus story is over, and people aren't reading the news as much, and they don't feel the urgency to share this thing, I'm still gonna be doing my job, and I'm still gonna want to be trying to get better at it... So it's almost been like a personal crisis to me, because throughout my career it's been important for me to keep trying to improve, so I've just been thinking about "How do I keep improving when I've done this story that was so popular?" And the way that I think I've come to conclude is just keep focusing on what the craft is, like "What makes excellent visual communication?" and focus on that, rather than this external metric; there's so many factors that you can't control about that anyway.

**Adam Stacoviak:** \[00:52:00.05\] Yeah, it's all about outcome goals. We've actually mentioned Brain Science earlier; we've talked about this around habits, and goals, and things like that... And there are things about certain goals that you just -- you have no influence over the outcome. So the things you can do that sort of stimulate you and keep you in a good spot is by focusing on the process. If you could show up and iterate on the things that you find valuable, the things you do well, and things that influence well, then those are things that are gonna be pushing the boundaries.

I mean, yeah, you may spend the rest of your career chasing the influence you've had here, and that might be true, but that doesn't mean that the rest of your career is no better than it has been, right? Because how often do you get a chance to hit a grand slam, in the most crucial part of the game? The world series, something like that; I'm using a baseball analogy here. This is a grand slam, right?

**Harry Stevens:** Yeah.

**Adam Stacoviak:** I wouldn't spend the rest of my life if I were you chasing this story.

**Harry Stevens:** It was the ball that never came down.

**Adam Stacoviak:** Yeah. I mean, in a lot of cases... And I never really thought about that until you mentioned it, like "How do you keep improving your work when you've done your best today?"

**Harry Stevens:** Yeah. But you're right, it's about the process. And also about -- I think a lot of times you've gotta be the final arbiter of what is good and what is not good. There are gonna be external indicators that something worked and something didn't, but that's not the final judgment. The final judgment is you. You know what's excellent and what's not, and what does the process of improving at this craft involve... And that's really all you can control, so that's what you've gotta focus on.

**Adam Stacoviak:** Yeah. What's next for you? Has any new opportunities opened up for you? Not so much elsewhere, but within the Post. Have you gotten some initial credit for this great work, have you gotten more pats on the back recently? Have you gotten invited into secret meetings where new data is shared, that no one knew about before, that you can now creating amazing visuals? What's happening for you?

**Harry Stevens:** Well, people have been really nice in terms of just being supportive and encouraging, because it's like when you're rounding third base and coming into home; your team comes out and gives you a pat on the helmet... So definitely that's been real nice.

But yeah, we just kept working. After this, I did -- I just published a story yesterday about how the president has changed his position with regard to how to deal with the Coronavirus since he first began talking about it in January... Until the end of this month, where he's been talking about how we're at war; so he began by trying to assure people that it was not a big deal and that it would go away, but then as cases mounted, he's really changed his attitude... So we showed that story in a visual way, with cases increasing...

You know, it's kind of like -- sometimes I get assigned to do stories, sometimes I come up with my own ideas, but... You just keep going. Unfortunately, that story is behind the paywall, so...

**Adam Stacoviak:** That's why I can't speak to it very well, because I got hit with the whole "Hey, you should be a subscriber, Adam... What's wrong with you...?! Stop using Firefox and blocking our ads. You're a bad person! Aaaargh!" \[laughs\] It's like, "Sorry about that, Washington Post. I'm not a subscriber... Yet."

**Harry Stevens:** Yeah, well that's okay. You've gotta do what's right for you. If you're using Firefox, that's not a bad idea.

**Adam Stacoviak:** It's interesting this world we are in though, too. Everything is a subscription away. I don't reluctantly share my money with Netflix, Disney, and a couple others for content on the entertainment side, but for some reason on this side of consumption, people are more reluctant to share their dollars. I don't know why that is. You should look into that. You should do some visualizations around that maybe.

**Harry Stevens:** \[00:56:08.15\] Well, I have a theory about it... So I remember ten years ago if I was gonna watch a movie -- well, let's not say me; let's say one. If one was gonna watch a movie, they might download it as a torrent, from BitTorrent, or something.

**Adam Stacoviak:** Yeah.

**Harry Stevens:** And it was a little annoying to have to do that. You knew that you were pirating something, which you weren't supposed to do... But it was free, and it did work. Now, that option is still there; you can get it for free, using a torrent site, but a lot of people are paying for Netflix, and Amazon Prime, and Disney Plus, and all this stuff. And I think the reason is that the difference in quality between Disney Plus and BitTorrent is just huge. Or Netflix. It's so much easier to navigate Netflix, and they have a pretty good content selection... So you're like "Yeah, I'll pay for this. Even if there is a free option, I'll pay for this." And then of course, there's also the fact that, well, the free option is pretty inconvenient, and also illegal... So a lot of people don't wanna do that either.

So it's not a perfect metaphor for the news industry, but -- so there's this huge, huge amount of free content out there, which is not illegal to access, and it's really easy to access. But the idea is that if you want people to pay for the news rather than use the free option, the paid option has to be that much better than the free option. Your paid option has gotta be Netflix to BitTorrent, and that's really hard to do in the news industry, because like I said, the free stuff is so easy to access, and there's still a lot of pretty good free stuff out there. It's not like BitTorrent. It's pretty good.

So for news companies that want a subscriber base to be good enough to differentiate themselves from the free stuff, it's a huge challenge... And I think not very many places have been able to do it.

**Adam Stacoviak:** Yeah. It is a very interesting challenge. Let's influence some people. There's definitely some listeners out there thinking "Gosh, I've got some skills here... I've never considered being a graphics reporter." Would you suggest this is a fun career to do? What are your thoughts on this? I haven't even asked you this yet. Do you like what you do? Do you enjoy it?

**Harry Stevens:** I love it.

**Adam Stacoviak:** Enough to say "Hey, you should do it, too!"

**Harry Stevens:** I mean, I think it's awesome. I've never really thought that much about doing anything else. I don't know what a software engineer gets paid. It's probably more than me... So I don't know. But one of the things I like about my job is you do get to interact with the public. You get to publish stuff that people see, and that might change their minds, and make their lives better... So that's a really satisfying goal to set every day.

Also, a cool thing about it is that you get to think about new things all the time. I mean, it's hard to believe, but earlier this year, in January, the big story was these fires in Australia, so I was doing a story about the wildfires in Australia... And then I was doing a story about the impeachment trial, because that was the biggest story. I've done stories about all kinds of things, like space, and climate change... So it's sort of fun to come to work and get to learn new things, and work on new problems all the time.

So I think if you are a little bit public-minded and are sort of curious about the world, it can be a great career path for somebody who has software developing abilities, and a knack for communicating ideas to people. It takes practice, too.

**Adam Stacoviak:** It does. That's the interesting thing too, and I'm glad you said that, because most things that are skill-driven take practice. You don't suddenly wake up tomorrow and become an amazing visual artist or a graphic news reporter; you've gotta put in the work, the years, the time. It's tooling, it's skillset, it's passion, it's ambition... It's all these different things that sort of mix up into one, that make it even possible.

**Harry Stevens:** \[01:00:13.22\] Yeah, I mean... The first stuff that I made was not good. The first visual stories I tried to make and the first charts I made were bad, because I didn't understand the theory behind it about how to communicate ideas to people visually, and I didn't have the technical skills to make something that was good. So when I started out, I knew -- the first JavaScript charts I made were with this Google Charts API, which doesn't give you that much control over the final outcome. It's like a really simple thing. Basically, you plug the data in, and here's a bar chart. And I just made bad charts. I made a lot of bad charts. If I go back to my old stories, I'm like "Oh man, this is not very good." But you know, you just keep doing it, and you get better over time.

**Adam Stacoviak:** Here's a closer for you... If you can rewind a few years, or just think back -- if somehow you can send a message to five years ago Harry, what would you tell yourself, to give you the courage to keep persevering?

**Harry Stevens:** I think I would go back farther than that, because five years ago I was doing journalism, and I'd kind of gotten into doing the graphics thing... And at that point I wasn't very good, but I didn't know how bad I was. I had an unearned confidence that actually probably was good for me at the time... But what I wish is I could go back 15 years, or like 20 years even. Because I was a pretty bad student in school, and one of the reasons for that is that I didn't really like anything that I was learning, and didn't really see the practical application of any of it.

And I use math in my job every day now, and I just wish that I had been exposed to computer programming at an earlier age... Because it's really opened up a lot of options for me intellectually. It's really made me interested in math, and algorithms, and all sorts of things that I never thought I'd be interested in... Because when you can program it, you can kind of see it and feel it a little bit more closely than if math is just represented on paper.

So I don't know, I think I would go back to myself and say "Hey, you should try to learn how to program, because you're really gonna like it." And if I had started earlier, then I'd have an advantage now.

I didn't study computer science at all, so there are certain people I work with, or people I know from the internet who did, and there's just a big gap in knowledge between me and them, in terms of certain things. Not like the most important things, but just in terms of familiarity with certain concepts that I just wish that I had learned when I was younger.

So that would be the only advise I would give to myself - the school thing seems really boring to you, but it's because you're maybe doing it wrong.

**Adam Stacoviak:** What's doing it right then? Just paying a little more attention? How do you even get that foresight from that long ago? How would you have done school differently then?

**Harry Stevens:** I don't know... And I don't really have too many regrets, because things turned out okay. But I think that I would have tried to expose myself to computer programming earlier. I had no idea that it's something that I would like so much; I only started doing it when I was in my late twenties. If I had started in my teens, not only it would have given me something to do in an academic environment that I would have liked, but it might have also started my mind on this path of wanting to learn more, which I didn't really have until later.

**Adam Stacoviak:** Yeah. Well, Harry, it's been interesting to talk to you, through your history as a graphics reporter, but then this lightning in a bottle post you have. Congratulations on it being the highest-performing post ever on Washington Post. That's an amazing achievement. I hope that your future endeavors are as profitable personally and professionally as this one has been for you, and thank you so much for just -- I mean, it was influential to me, and I'm sure it influenced a ton of people throughout the world...

In this time right now we need clear information, not misinformation, and that was just such a perfect thing to visualize the change of the world. Everyone was already in the free-for-all. We needed to understand easily and concisely the visual aspect of extensive distancing, which we've all begun to practice to flatten this curve, and to hopefully make it through - I've heard this thing so many times - these unprecedented times...

**Harry Stevens:** Ha-ha! Yeah...

**Adam Stacoviak:** How often have you heard the word "This is unprecedented times"? It is, it is, but everybody says it. I hear it ten times a day at least. If you watch the news, you hear it ten times a day, at least.

**Harry Stevens:** Yeah... I mean, nobody has lived through something like this. Even our grandparents had not lived through something like this, so we're all kind of flying by the seat of our pants right now.

**Adam Stacoviak:** Yeah. That's well-spoken words, my friend. Thank you so much, Harry, for sharing your time with us. We appreciate you. Thank you!

**Harry Stevens:** Thanks a lot, Adam.
