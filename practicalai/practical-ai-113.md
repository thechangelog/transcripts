**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well, Daniel. How are you today?

**Daniel Whitenack:** I can't complain. No complaints from this end. I had a good, restful weekend; as listeners might remember, I recently downloaded the new Tony Hawk Pro Skater for Xbox, and that's been filling my waking moments as I try to increase my combo scores to ridiculous numbers...

**Chris Benson:** I'm so jealous... You had a much better weekend than me. I had a weekend full of honey-do lists, and stuff. I was exhausted and happy to return to work on Monday morning.

**Daniel Whitenack:** I've got a pretty cool wife, she played with me, so... There are things on my honey-do list, but it was okay, because we were spending that quality Tony Hawk time together, so...

**Chris Benson:** Yeah. I kept hammering my thumb, and things like that. It was just terrible.

**Lucy D'Agostino McGowan:** Oh, no...

**Chris Benson:** Yeah, it was horrible...

**Daniel Whitenack:** That's rough, man...

**Chris Benson:** I'm just wounded. I'm the walking wounded now, man. That's terrible. Anyway, go ahead. You keep talking.

**Daniel Whitenack:** \[laughs\] Well, I won't go into the cause of you hitting your thumb with a hammer, but we're gonna talk about causes today, and causal thinking. Today we're really lucky to have with us Lucy D'Agostino McGowan, and she is an assistant professor in statistics at Wake Forest University. She's also very involved in the R Conference, and giving a talk at the upcoming Government and Public Sector Conference, which actually Practical AI is a media sponsor of... So welcome, Lucy. It's really great to have you here with us.

**Lucy D'Agostino McGowan:** Thanks, I'm excited to be here.

**Daniel Whitenack:** Yeah, it's wonderful to collaborate with you on this. We should say too that you are also the co-host of a podcast -- I think you're the co-host; there's another host on the podcast...

**Lucy D'Agostino McGowan:** Yes, Ellie Murray and I.

**Daniel Whitenack:** Yes, of Causal Inference.

**Lucy D'Agostino McGowan:** Casual. Casual Inference.

**Daniel Whitenack:** Casual Inference, I'm sorry.

**Lucy D'Agostino McGowan:** \[laughs\]

**Daniel Whitenack:** I'm getting mixed up with our topic for the day. Good call. Casual inference.

**Lucy D'Agostino McGowan:** That's right. It's a pun. We've gotta--

**Daniel Whitenack:** Yeah, all good. I kept trying to pitch pun names for our podcast, and none of them made it through the filter... I don't know what the reason is for that, but I'm all for pun names, so...

**Chris Benson:** They just weren't very punny.

**Lucy D'Agostino McGowan:** Oooh...! \[laughs\]

**Daniel Whitenack:** Okay...

**Lucy D'Agostino McGowan:** Yeah, I love a good pun. We have some segments that have pun names as well. It's a good time.

**Daniel Whitenack:** Yeah, for sure. We'll put a link to that in our show notes; definitely, I encourage our listeners to check out the podcast and see what they have over there. It's some really good content. Before we jump into all of the great things that you're involved with, and that you're passionate about in terms of data science, and R, and causal inference, and casual inference...

**Lucy D'Agostino McGowan:** \[laughs\]

**Daniel Whitenack:** ...if you could just let us know a little bit about your background, how you got interested in data science, and R, and other things, and how you ended up where you're at right now, and what you're working on.

**Lucy D'Agostino McGowan:** Yeah. So my background is in biostatistics; I have a Ph.D. in biostatistics from Vanderbilt. That's essentially statistics for the medical field. But while I was doing the work there, I had an internship with RStudio the first six months; as part of that -- I mean, biostatistics is a pretty applied statistical field, and so there's lots of programming and data science-like things involved with the training there. But then the software component was something that really interested me further than even what we were doing already, and so I pursued it more.

I got heavily involved with R Ladies, and did this internship under Jenny Bryan at RStudio, which really built up some of my coding chops and being able to actually do software development, and things like that...

**Daniel Whitenack:** And R Ladies, if you could describe that...

**Chris Benson:** That's what I was gonna ask.

**Lucy D'Agostino McGowan:** Yeah, so R Ladies is basically a global organization that -- there's the global kind of aspect of it, but it's mostly run by local meetup in different communities, and the idea is to increase the gender diversity in the R community.

I had started one in Nashville, and they exist all over the world. They do really excellent work in trying to sort of increase that diversity. And it's been great, it's been actually really successful. There's some really fun plots that you can see as sort of the couple. It started in San Francisco, and then it really has taken off since then, in the past couple of years.

**Daniel Whitenack:** Yeah, it's kind of all over the place now, isn't it?

**Lucy D'Agostino McGowan:** It is, yeah.

**Daniel Whitenack:** That's so wonderful, yeah.

**Lucy D'Agostino McGowan:** It's definitely international. So that was excellent, and really formative for my interest in R. I was interested in R before that, but that really solidified that this was a community that, in addition to being a language that offers the type of statistical tooling that I'm gonna need, it also had that community aspect where there was a lot of support for learning and for developing, and things like that. So that was some of what branched me into this interest in data science more broadly.

Then I went on to do a post-doc at Johns Hopkins, in Jeff Leek's lab. My dissertation is very causal inference-related, and a big arm of what I do is still causal inference... But then through my post-doc I added a bit on data science pedagogy, so thinking about how to teach data science, and how that can integrate in with medical applications in particular. So I worked on some of that, and that sort of branched into this thinking about human data interaction problem, which is another big arm of my research right now, where we think about how people interact with data and how they conduct data analyses, and how we can potentially think about interventions to nudge people towards conducting a correct data analysis, as opposed to one that maybe would be incorrect in different ways... Or maybe getting kind of alignment between stakeholders and producers of data analyses, and things like that. So this is what brought me into the more data science-type space.

**Daniel Whitenack:** Yeah. I think that human data interaction is... Yeah, it seems to me to be like -- the really tough problems that data scientists deal with kind of live at that boundary. With the tooling now -- there's so much great tooling around, and it's fairly... I mean, of course, you need some context and some background knowledge, and some domain knowledge and all that to solve problems... But tooling-wise, it's fairly easy to actually create somewhat sophisticated systems... But that communication part in that interaction, the human-data interaction - all is for naught if that's not properly taken in to account and managed.

**Lucy D'Agostino McGowan:** Right.

**Chris Benson:** It's such a big deal, too. As you were talking about that a moment ago, every single day in my job I run into issues where there are challenges between how people are interacting with data and stuff, so I'm very excited to hear what you have to teach us in the minutes ahead.

**Lucy D'Agostino McGowan:** Yeah, it's a huge -- it's kind of neat, because it builds on the kind of foundation for this field of human data interaction; it builds on what people would talk about before they were talking about human-computer interaction, and I feel like in some ways we have mastered that. In a lot of ways, there's still a lot to learn, but I think that was happening a lot when things like Apple were coming about, and Google, and thinking about how we can help people interact with computing systems.

For some people, using a terminal is a great way to interact, and I personally love interacting via a terminal... But to kind of get the internet and everything into the hands of the average consumer, someone had to figure out that "No, we need to have something that has pictures, and words, and people can click things, and they don't have to be just sort of interacting via this text module." So that really launched a huge revolution, I think, when we were able to bring what computing had to offer to the average person, and I think that this human-data interaction is the next step on that.

So now we've got the computing, and we know how to get that into the hands of people who maybe otherwise wouldn't have been able to implement these different things... But making sure that now that they can do it, that they're kind of doing it correctly, and that they're interacting with the data the way that is gonna get to a result that is correct, and also aligns with the incentives of everybody involved I think is really crucial.

**Daniel Whitenack:** Yeah. And I think it's not only -- that's deeper sort of data interaction, but there's a lot of communication about data now in the media as well, and how people perceive that is very different depending on who you talk to.

I know even in the last week -- I think it's happened all in one week, there was like two or three companies that announced these sort of statistics about how good their Covid vaccines are gonna be. So this happened days ago, or maybe it was even -- I forget if it was this morning, the last one that came out; or yesterday, or something...

**Lucy D'Agostino McGowan:** I guess yesterday Moderna came out, yeah.

**Daniel Whitenack:** Yesterday, okay. Yeah.

**Chris Benson:** 95 I think was the thing they were throwing around in the news... 95%.

**Daniel Whitenack:** Yeah. I think one was 95%, and the way it was communicated on the other one, that I noticed, was like "90% or higher", or something like that.

**Lucy D'Agostino McGowan:** Above 90%.

**Daniel Whitenack:** Above 90%, yeah.

**Chris Benson:** And just as a real quick clarification for the listeners. At the point we're recording, we just heard the first two vaccine initial results, and everyone's talking about that. You're probably beyond us and you know more than we do by the time you hear this.

**Daniel Whitenack:** Yeah, this is late November 2020.

**Chris Benson:** There you go.

**Daniel Whitenack:** When you hear that sort of communication come out, do you get this sense that people are consuming that in a way that they are understanding the implications of those types of numbers, or what is your thought on that?

**Lucy D'Agostino McGowan:** This is such a good question, and it actually bridges essentially all of my research interests.

**Daniel Whitenack:** Perfect.

**Lucy D'Agostino McGowan:** Because we're talking about -- so Pfizer and Moderna I think are the two big ones that came out relatively recently, and these were both randomized control trials, so obviously the question of interest is the causal questions. It definitely covers my causal inference framing... And then it also covers the human-data interaction, and also the communication of statistical concepts. So it bridges it really nicely.

But one thing to mention in all this -- first, I think you said that it was 95% for Moderna, which is what a lot of outlets are reporting. The actual interim analysis reported 94.5%, and the thing that's interesting--

**Daniel Whitenack:** Just round up...

**Lucy D'Agostino McGowan:** I know... So what's very interesting about this is that there's been -- just from a communication perspective, even that has been a little bit controversial, because they're giving us a sense of precision where there really isn't that kind of precision. So the number of participants in this trial that received the placebo, that got sick - I think there were 90 that received the placebo and five that received the treatment, that ended up getting Covid... So 94.5% implies that there's this real precision, but we actually don't even have 100 participants that have reached that end point of getting sick.

**Daniel Whitenack:** Right. It makes you think that there's tens of thousands, and they were able to get really granular data.

**Lucy D'Agostino McGowan:** Right, yeah. I'm sure that there were -- well, I shouldn't say I'm sure; I don't know. Maybe there wasn't someone that thought about if they said 94.5% that everyone would round up to 95%, and then that this would sort of give some kind of sense of things that maybe wasn't exactly what was being represented by the data.

And the other thing that's really challenging to make sure is well understood is that in both cases these were interim analyses, so they're not the final result. And as a statistician involved on data safety monitoring boards, there's these different groups that actually come out with these estimates. First of all, it's not common -- I mean, in other certain circumstances, often interim analyses don't get the same kind of press that these are getting. I mean, sometimes they will get a press release, and they will see a little bit of a market change, but only for people who are really paying attention... And of course, now it's very different, because the whole world is paying attention, so how we communicate it has to be even more clear...

But it's not unusual to get a different result than an interim analysis as a final analysis. Certainly, you would expect, especially in both cases because they're closer to what their final end point is - they're closer to that than they are far away; so this isn't like a first look, they're closer to what the final result likely will be... So probably it's gonna be in the ballpark of what we're seeing, but it probably won't be exactly 94.5%, for example; it would be really surprising if it was.

Some of the concern is when those kind of precise numbers are reported in the news, and then it comes out that "Oh, in the end it was 80% effective", which is actually really great, people can start getting concerned.

**Daniel Whitenack:** Yeah, and then they can kind of come up with a storyline of their own, and one that maybe they're not comfortable with taking the vaccine for whatever reasons, because these people can't get their numbers right, or whatever it is... Which could cause actual health and safety issues.

**Chris Benson:** So having said all that, it raises kind of an ethical question, in my mind at least, to -- clearly, this is done for the marketing benefit. You know, the first one comes out, the second one gets out there to persuade the public, and yet, as you just instructed us, it might reasonably fall to 80% hypothetically... But that does change the way people are thinking about it. So any thoughts on using data in that way? There's a certain amount of manipulation potentially involved in that.

**Lucy D'Agostino McGowan:** Yeah, for sure, and it's really challenging to know what the right thing to do is. One thing that can certainly help - and I know some of the reporting that I've read, you know, they've been careful to include in there text; I was reading the New York Times piece on Moderna yesterday, and they did include that this is an interim analysis, and we expect these results to change... But unfortunately -- and maybe to no fault of the author, but that ends up being paragraph four, and the headline says something very different, and people tend not to read past headlines; so it's kind of hard to figure out the right balance of getting people to be able to consume this information, because it is good to have people see a light at the end of the tunnel.

**Daniel Whitenack:** There's a need for optimism.

**Lucy D'Agostino McGowan:** Yes, there's definite benefit to that. But then being able to balance it with the reality, and being able to articulate the uncertainty in such a way that when the numbers slightly change, it doesn't cause people to sort of lose trust... I don't know the perfect answer to this. This has been something that my lab has been studying; I have a student that's been running a study that's been looking at kind of if we randomize people to see health recommendations qualified with uncertainty, versus ones that are sort of said definitely when a follow-up recommendation is made that maybe reverses the previous one, and gives kind of the full context - are they more or less likely to trust it if they saw things with the proper uncertainty the first time, or with just a clear, certain statement.

It turns out - we're still in the process of analyzing this data, but it's challenging, because the first result, when you just look at people randomized to seeing a certain qualified recommendation, on average, people do tend to prefer the certain recommendation. They just wanna be told what to do, they don't wanna be told roundabout, "This came from a small study, and we aren't actually quite sure. This is the best that we know right now, but we're gonna be taking in more information as it comes."

So if you knew for sure that the recommendation or the numbers wouldn't change, that actually is the easier way to go to get people to do what would be in their best interest from a public health perspective... But of course, we don't know for sure; if we only had a small study, we really don't know that that evidence isn't gonna change. So you have to think about hedging that possibility.

And in the secondary piece, if you've said something with certainty and then you turn back and say the opposite, the lack of public trust is at a real potential to be lost, and that can really be negative. So thinking about this in the long-run, as opposed to in the short run is also really important.

**Daniel Whitenack:** Lucy, I'm curious - we talked a little bit about these numbers that are thrown around, and obviously, coming from statistical analysis of some type... And what I was thinking in my mind was there have been those times in my data science career where I've felt maybe a little bit uncomfortable with how some of the numbers that I've communicated kind of up the chain to stakeholders have been used... Like, maybe I have this new speech recognition model, and for this particular language it performs 5% better than the Google one. And then up the chain, maybe it starts to be used in marketing, like "Our speech recognition is 5% better than Google's version..."

There are situations where it's like "Oh, I never intended for my work to be taken in that way." Do you have any general recommendations for data scientists and statisticians and analysts in terms of how they deal with those interactions where you've done some analysis and now you're communicating to a different sort of audience, and it's maybe going up the chain? Any recommendations or general principles that you think should be kept in mind in that type of situation?

**Chris Benson:** ...so we don't have to be hostage to the marketing machine?

**Lucy D'Agostino McGowan:** \[laughs\] This is such a good question, and it's so hard, because in your example, the marketing team is at least within your own company so you have kind of constant communication with them...

**Daniel Whitenack:** Right, right.

**Lucy D'Agostino McGowan:** And often, what I see on the medical side at least, is someone will publish something, and actually there are a lot of examples from this from early Covid data, where there were papers that were published in our very top medical journals that some of the reviewers missed things. And I think the scientific community came together and found them pretty quickly, and the articles were either updated or retracted, and it worked... It worked on the scientific side, but the media ran with some of that, and the articles that ran headlines based on the original data often would get much more press than the updated ones, for example.

So I think that this problem is not unique to the setting that you describe, where you're trying to help a marketing committee understand the numbers in such a way that they can market them accurately... But it also happens sometimes where it's not even in your control, in the sense that someone totally outside your organization is the one running with it.

I have this talk that I've been working on for a while... I have some aspirations of sticking it in a short course, or something... But basically, I think of statistical communication, and probably just scientific communication in general, as on this kind of two-by-two grid. You could imagine this x/y axis, where you have maybe on the y axis whether or not something is true or not, and on the x axis whether it's interesting or not. So you have this quadrant of like "Interesting and True", which is where we want all of our communication to be, so something that is interesting to the marketing folks, but also conveys the actual truth... And next to that you have a quadrant that is not true, but still interesting, which sort of falls into what you were describing, where you saw that there was a 5% improvement in your speech recognition versus this other one in this one specific case, and the marketing committee ran with it and sort of implied--

**Daniel Whitenack:** Generalized.

**Lucy D'Agostino McGowan:** Exactly, generalized it beyond it. Anyway, so the picture that I try to paint is moving from interesting to -- or from not interesting to interesting is one dimension that we wanna move across... But then the other one, that sort of describes what you're talking about, is moving from not true to true, and sort of what are the pieces there.

So the ones that I've defined as on this journey to truth would be that it has to be mathematically correct, marketed correctly, disseminated correctly, and the audience has to interpret it correctly. So those are kind of the four main pieces that I think determine whether or not it's true.

So that one that you just said there fits in my second category, of being marketed correctly... And I guess, from my perspective even just naming that these are the things that need to happen with statistical communication is moving us forward, because I think that -- I haven't answered your question on how to get people to market it correctly, but I've at least named that these are things that can go wrong when you're trying to communicate statistics, and I feel like that's potentially a step in the right direction... Just knowing that that could happen, so being cognizant that even if the thing that you do is statistically correct, you need to make sure when you're passing it on to people and when you yourself are marketing it, that you're marketing it in the right way.

**Chris Benson:** Will you take a second and rename those four things? Because you started down and I got caught on the mathematical and I missed the other three..

**Lucy D'Agostino McGowan:** Yes.

**Daniel Whitenack:** Chris is always stuck in the math...

**Chris Benson:** Constantly. It's terrible. And then I also wanted to see -- I actually wanna follow up on Dan's thing, because I know you're gonna do it anyway... But can you take your grid and give us an example of how to use it? Because selfishly, when we are done recording this podcast and this is gonna go out for release, I wanna use this as a tool myself.

**Lucy D'Agostino McGowan:** Yes!

**Chris Benson:** You've just given me hope. So can you kind of walk us through how you would use the tool itself? What the four principles are, and then how we can use it day-to-day, so someone can listen to this and then they can go off and actually use it? Because I have the same set of issues - I work for a big company, and there's lots of different audiences, and they may use information in all sorts of different ways, like any other company... So I am all ears.

**Lucy D'Agostino McGowan:** Okay. So the four that I had mentioned are that it's mathematically correct, that's it's marketed correctly, so that you have given the correct marketing, that it's disseminated correctly. So that's slightly different than the marketing -- so you could yourself market it correctly, but then the way that it gets disseminated after you've provided that marketing could be--

**Chris Benson:** Kind of delivery-outward, the mechanism?

**Lucy D'Agostino McGowan:** Yeah, exactly. And then the fourth part, which - I think this is one of the hardest parts, is that that the audience interprets it correctly. The example that I like to give for that is that just because you've done all these other parts right, if your audience misinterprets your result, then maybe you really need to be thinking about communicating it differently, even if you've actually communicated it in a correct way.

A somewhat relevant example for that, that made some rounds -- it's hard to know; I think I'm in an insular Twitter sphere, so it's hard to know how much this made it outside of my world...

**Daniel Whitenack:** Aren't we all...?

**Lucy D'Agostino McGowan:** Yes... \[laughter\] But in my world, this made kind of a splash... A while ago, back in July, there was a dashboard that was going around from Georgia, where they plotted this figure - it was a map - of the cases per 100,000 people.

**Chris Benson:** Yeah, I'm in Georgia. Trust me, that impacted us a bit. That was what we were talking about.

**Lucy D'Agostino McGowan:** Okay, so it's not just my Twitter sphere; this is good to know. So the intention behind this map was it was looking at which counties relative to the others are the worst. So that's what this map was trying to do; it was one of these maps that highlighted basically the ones that were in the top percentile.

But how audiences were using this - a lot of people were visiting this site every day and taking a screenshot of this map, and they were comparing this over time. And this particulation visualization is really not meant to be compared over time, because the bins are gonna change every time, because they're percentiles, or quintiles... So those bins are calculated relative to all the other ones. So this map doesn't tell you if things are getting worse overall in the state, it just tells you basically which counties are getting worse or better.

When I first saw this, people were a little bit outraged, because they were like "Look, they've changed the bins, so in the past two months it looks like we're the same, but we're actually way worse, even though these two plots look the same." And when I first saw this, I'm like "Yeah, but the people that made those maps did the right thing. That's how you make those maps. How could you possibly guess what bins to use two months in the future?" How could you guess how many cases there might be, so that you could set the colors in the past based on what you might see in the future, so that you could be showing this graph over time, unless you retrospectively did it? How could anybody do that? But the fact that so many people, the way they were consuming this information was via looking at this once a day, taking a screenshot and comparing over time - that was an important piece of information.

**Chris Benson:** Would it be fair to say it wasn't being interpreted correctly because it wasn't being disseminated with enough communication of how it should be consumed, to ensure that interpretation was occurring correctly?

**Lucy D'Agostino McGowan:** Exactly, yeah. And I think that the solution here as an analyst is that either you need to very explicitly say these maps are not meant to be looked at over time, and somewhere where it's like in the screenshot, that will end up on the screen... There was also a problem with if you were viewing it on mobile or a desktop; if it was on a desktop, it was a little bit clearer that these weren't meant to be viewed over time. If you were viewing it on mobile, there was a line that said "You can look at things over time"; that was corresponding to a different plot, that ends up not being in view on mobile.

So there were other pieces communication-wise that made this challenging. But what I saw from this was that either you need to make that explicit, or you need to just take away this map and use a different form of trying to show this result... Because people are gonna be doing what they're doing -- people are gonna consume information as they consume it.

Outside of Georgia, I've heard from lots of people that the way that they've been consuming information from like the Johns Hopkins maps and things is that they take screenshots and recording this over time, because there's some kind of fear that we're gonna lose information, and so they need to be holding it... So it's sort of a sociological kind of study, but just looking at "This is how people are consuming this information that we're putting out", and it's not necessarily how the people who are putting out the information would have consumed it themselves, but they need to recognize that if the masses are consuming it like this, we need to be adjusting... Because the whole point of putting out these dashboards is to make them consumable.

**Chris Benson:** So we totally need to get you on a consulting job as a side gig...

**Daniel Whitenack:** In Georgia...

**Chris Benson:** ...for the Georgia Department of Public Health... Because we have two million Georgians who are -- and now we're doubting... So we just need you there. We can fix Georgia.

**Lucy D'Agostino McGowan:** I know, it's a hard problem. I think it's not just Georgia.

**Chris Benson:** Get ready to come down here.

**Lucy D'Agostino McGowan:** \[laughs\] I'm not too far in North Carolina, so...

**Chris Benson:** There you go.

**Daniel Whitenack:** Yeah. It is interesting what you said about people don't trust that they'll be able to -- they think they're gonna lose this data, or they're gonna lose this information. It's like, this thing was generated by some expert somewhere, and who knows how long this website's gonna be around, or whatever... They're basically trying to do some data gathering of their own and come up with their own self-service data dashboard or something, that they think that they need...

Yeah, that's a really interesting psychological thing... I don't know what the solution to that is in terms of giving people more trust that they'll have access to things. If it's giving people the ability to self-serve themselves data more frequently, or I don't know.

**Chris Benson:** It's funny - I'll just not that in this particular example that we're discussing, that has happened... That lack of trust has happened, where lots of local media stations and other organizations in Georgia have been pulling data from Johns Hopkins, because they weren't trusting the Georgia data, and doing a whole bunch of graphing... Instead of pointing people at the institution that's supposed to be doing that, there have been a whole bunch of surrogates out there. So it's been interesting to see how trust affects that in a pretty big way.

**Lucy D'Agostino McGowan:** Yeah. I'm not sure about in Georgia, but I know in other states there have been cases where things were on a dashboard one day, and then they were not made available the next day...

**Chris Benson:** Yes. Here.

**Lucy D'Agostino McGowan:** Yeah, so I guess it's happened there, too. So I think that that kind of thing happening also can erode the trust a little bit, too.

**Break:** \[31:50\]

**Daniel Whitenack:** Alright, so we started talking into these Covid-related numbers with the vaccines, and then also talked a lot about data communication; all of that is super-useful... But I do wanna get a chance to talk a little bit more about that third piece that you mentioned was mixed into that original problem we talked about of the vaccine numbers, which was causal inference... And I know that at the upcoming R conference - this is the first conference that's gonna be focused on government and public sector, which is super-exciting. Chris and I are gonna moderate a panel there, which will be a lot of fun for us to join.

But you're giving a workshop there on causal inference, of course. That name has also inspired your podcast, and I see that sprinkled around throughout your web presence... So could you just give us a little bit of context for what causal inference means, why it's different than some of the other types of inference or prediction that we might perform as data scientists? I'd love to hear that, because I definitely think that we have not had that specific conversation on this podcast as of yet.

**Lucy D'Agostino McGowan:** Yeah, great. I love talking about causal inference. So the big picture with causal inference - essentially, it's exactly as it sounds; I guess I'm gonna use the word in the definition, which I know you're not supposed to do... But if you're trying to answer a causal question, so "Does something cause something else?", which often most of the questions we're interested in are in that framework... Although it is distinct from something like prediction, which would be a different kind of space.

But in the inference space, when we're trying to determine the relationship between different factors or different variables, a lot of times we talk about associations as a way to sort of describe relationships that we know maybe are correlated, but we don't wanna go as far as to say they're causal... But I would argue in most cases the human instinct is to want to talk about things causally; that's most of the time when we're studying relationships between variables, that's often because we wanna know if there's a causal connection...

So in randomized trials like the ones that we're talking about with Pfizer and Moderna, looking at different vaccines, they're not just interested in whether or not getting a vaccine is somehow related to whether or not you get Covid, they wanna know if getting the vaccine will actually cause you to not get Covid. So this is sort of the relationship that we are focused on in causal inference.

Randomized trials often are what people think of as the gold standard, although there are several ways that causal estimates can get skewed or biased in a randomized trial as well... So there are ways that you can actually need to do some more sophisticated analyses to get at the causal effect, even in a randomized setting... But then where my work mostly is is more an observational data, where we don't have a formal randomized trial; we're just sort of observing things.

For example, in electronic health records, or you can think of all different types of datasets that have already been collected, but you wanna try to determine if there's some kind of causal effect between different elements. To do so, you've gotta build this framework that involves both statistical modeling, but then also a lot of assumptions. So a lot of times, the way that we build up this causality is being able to state assumptions about our data that we're making; and should these assumptions be true, then we can assume that the effect that we're seeing is actually a causal effect and not just an association between two things. Does that kind of answer your broad question about causal inference?

**Daniel Whitenack:** Yeah, it definitely does. It's very useful, because I do think that it is the natural human reaction when we're doing any sort of modeling to assume like if these features that are fed into our model allow us to predict whatever it is - why one, why two, whatever those things are - then those things are somehow causing that response, or those labels, or whatever it is. It's a very natural reaction to think that.

One of the things I'm curious about is -- so you mentioned this process of defining your assumptions, being very careful about how you do that... I'm sure there's a number of things, but what are some of the common tools that people use in causal inference that maybe are kind of gold standard tools or very common tools that people use in this case?

**Lucy D'Agostino McGowan:** Yeah, so there's a lot of underlying assumptions and there's ways that people try to help get at them. My work uses something often called propensity scores. What that basically means - it's in the observational setting, where we don't have randomization to an exposure to some treatment... And so you try to kind of construct what we call a counterfactual framework... Like, all I know is that you got -- for example, if I'm looking at diabetes drugs and heart disease, all I know is that you received diabetes drug X; and I don't know what would have happened if you had received diabetes drug Y, for example, but I could try to construct what I think may have happened...

So I could basically look at all of your baseline characteristics, I could adjust for all of those, and then kind of adjust for other people who have the same baseline characteristics you could imagine on the other drug, and sort of assume that those two -- if you were to measure all potential characteristics, so there's nothing unmeasured that might be confounded, then you could compare those two groups, or maybe those two groups on average to each other, to sort of be able to build that counter-factual that we couldn't actually observe.

So in the randomized setting, because we're randomly assigning you to one or the other, the counter-factual is much easier to deal with, because we assume that all of those baseline characteristics on average are gonna end up being balanced, because we end up randomly assigning to one group or another.

But in the observational space you don't have that luxury, so actually constructing something that can help you achieve that balance between the two via something like -- propensity score is the tool that I use most often. Essentially, that's just a summary score of your baseline characteristics. So you essentially are estimating the propensity that you would get one treatment versus the other, and then you can use that as an adjustment tool in various ways, like weighting or matching, to be able to get comparable groups. And then once you have comparable groups, you can start making some more causal assumptions.

But of course, the big piece here is that you can't have anything unmeasured, which in a randomized setting you're less worried about, because we assume that things are gonna kind of be balanced in the long-run. In an observational setting you have to either feel very certain you don't have anything unmeasured, or do some sensitivity analyses to see how bad things would be if you were missing an important variable.

**Chris Benson:** Where do most people go wrong with this? Maybe they aren't thinking explicitly enough about it. They might be an experienced data scientist, but aren't really focused on implementing a counter-factual framework; that's not part of their thinking. Where do you see people go wrong where it kind of takes that process off the rails a little bit?

**Lucy D'Agostino McGowan:** I think the first place where people kind of -- it depends, because people of all levels of experience go wrong on this... So it's not even just beginners. But I think that the folks on the beginner side - it tends to be this unmeasured confounding piece and thinking about the plausibility of it. I think it's really easy to do a sophisticated analysis that adjusts for many things, and assume that you're really capturing all of the variability. And you see this a lot with electronic health records. Because I do biostatistics, that's the data source that I tend to be thinking about, but... You've got tons of information in electronic health records, but that doesn't mean you have everything that's important. And it also doesn't mean that you're gonna end up with an unbiased result.

So I think that there could sometimes be confusion between "I adjusted for lots and lots and lots of things" and "I have everything that's important." Those are two potentially distinct pieces of information...

The example that we talk about in healthcare a lot is for a long time there were studies that looked at hormone replacement therapy and heart disease... And it used to be recommended that hormone replacement therapy was actually protective against heart disease. This was based on several large observational studies that were all kind of conducted around the same time, and that did adjust for several things... And they were seeing these consistent results.

So you could do a meta-analysis across all of these studies, and they all were sort of showing that it looked like it was probably protective. And then a randomized trial came about and it showed that it wasn't really protective, and in fact, there was a chance it could have even been harmful.

This threw a bit of a wrench into things. Some more studies were done, and it turned out -- there's some nice plots that you can look at for this, but the observational studies that adjusted for socio-economic status were showing null effects or even potentially harmful effects, and the ones that didn't were showing protective effects. So essentially, the large part of the effect of this hormonal replacement therapy on heart disease that was being thought to be protective was mostly driven by socio-economic status, which just wasn't adjusted for in these original models.

So while they adjusted for other things, they didn't adjust for that important variable... And it turned out that was actually a huge driver. So women who were from higher socio-economic categories - they had access to different healthcare, so they were less likely to get heart attacks, or have these cardiovascular events that didn't have anything to do with the hormone replacement therapy itself.

I think that type of example is what the first -- you know, relying on previous knowledge in an area doesn't always save you from this unmeasured confounder piece, and I think that people who are first new to a discipline, your default might be "Okay, everybody that's fit this model before has included these variables." This is what we do, and it looks like we're getting the same kind of effect that people see, so it must be right... And I think that's kind of not always the case.

**Chris Benson:** I like the term for that too, unmeasured confounder.

**Lucy D'Agostino McGowan:** Yes, unmeasured confounder... \[laughter\]

**Daniel Whitenack:** That'd be a good podcast name, if anyone else is planning to start a... \[laughter\]

**Chris Benson:** That's what I'm gonna be next Halloween. I'm gonna be an unmeasured confounder for Halloween.

**Daniel Whitenack:** Yeah, that would be a great Halloween, yeah. That'd be a good one. \[laughter\] On that note, not the Halloween costume, but the confounder note. I'm curious - I could see myself getting into a state where I'm a little bit gun-shy in the sense of like "Oh, I'm in this situation, I'm trying to do some causal inference, but how do I know when I've..." You know, I could see myself always thinking "There's gonna be another confounder out there. How do I know when I'm ready to pull the trigger and actually give some results to someone?" There's so many different things at play in here in this situation, and I think I have accounted for everything, but I don't know if I've accounted for everything; how do I know when I've accounted for everything? ...or at least enough things to where I can have some confidence. Do you have any thoughts there?

**Lucy D'Agostino McGowan:** Yeah, it's a great question, and unfortunately, there's not a test or something for "Have you accounted for all the things?" Unmeasured confounding is one that's specifically onerous, because there's not a way to know for sure... One of my dissertation papers was on building tipping point sensitivity analysis for unmeasured confounding. So the idea is that you can do your analysis, and you do the best you can. You state the assumptions that you're making, and then at the end you can do one of these tipping point analyses that -- we basically show mathematically... It's a pretty simple formulation; there's an R package called Tipper that can do it for you.

Essentially, what it'll do is it'll take your effect that you're assuming to be causal, and it'll tell you the size of an unmeasured confounder that would be needed to tip that analysis. So I think that that's kind of the best-case scenario for what you can do. If you've done all that you can to account for what you have, then you can just explicitly state that "We think that this effect -- we feel like we've done what we can." These are the assumptions that we've made. If there were an unmeasured confounder out there like this, that was related to the exposure and outcome in this manner, it would make our result no longer significant. It would nullify our result, or make it inconclusive. And so I think that's the best that people can do... I think that just doing that would really move the field forward in a lot of ways.

One thing that that can do is once that's been stated explicitly in a paper write-up, or whatever it is that you're doing about this causal estimate that you're working, then content matter experts that come in from all different areas can see that, and some may say "Hey, that actually is plausible because I actually have seen that this particular variable that you didn't account for can have that kind of impact on your exposure, or have that impact on your outcome that really would tip your analysis... So doing that work for them where they can see what a confounder like that would need to look like, and then they could map that back to their own content expertise; I think that's what can help with this. So that's my best recommendation on that front.

**Daniel Whitenack:** It's very helpful.

**Chris Benson:** It's pretty good. Excellent. So I guess as we wind up, what are things that you're excited about? It could be in R, it could be about causal inference, it could be trends that you're seeing... What are the things that you're looking forward to doing over the next couple of years, versus the stuff that you have been working on?

**Lucy D'Agostino McGowan:** I'm excited about so many things... \[laughs\]

**Chris Benson:** That's fine. Let's hear it. Go for it!

**Lucy D'Agostino McGowan:** One the causal side, I'm excited that this has been getting a lot of attention recently. We had Roger Peng - he hosts a podcast called Not So Standard Deviations with Hillary Parker; he also hosts one called The Effort Report with Elizabeth Matsui, and I had him on our podcast a little bit ago, talking about his thoughts on causal inference... And he talked about how he sort of -- at one point he had implied that maybe it's a fad, but essentially, that people are interested in this... And I think that it's true. I think that it's something that people are gaining more and more interest in in terms of understanding the methods, as opposed to just trying to make causal claims.

As we've discussed, human instinct is to want to make causal claims, and so that's something that people have always been interested in. But the interest in incorporating the more rigorous methods has been going up, so I'm really excited for that to continue.

In that space I think we're starting to see better and better introductory-level information on how to conduct causal type analyses, and I think the gap still is sort of in that intermediate spot. I think that we have lots of people who are very competent on the heavy, heavy methods, and lots of people who are working on the introductory, and I think we've got this nice middle spot that has a lot left to be contributed. So I'm excited about that, because I think that there's potential there.

And then going back to the science/communication piece that we were talking about before, I'm also excited -- I think that a lot of the scientific process has been brought to the forefront with just the pandemic response, and thinking about how this was done, and how it was communicated... So I think that we have a lot of data and information now on how people have tried to communicate things and where that has potentially failed, or maybe where it's succeeded... So I think going forward we have a good horizon for being able to improve on how we're communicating results, which I think is only gonna be something that's better for everyone, both on the scientist side and on the general public side.

So those are two things I'm excited about... I could probably come up with others.

**Chris Benson:** It was good!

**Daniel Whitenack:** You've made me definitely excited about those things as well... And if our listener are - I'm sure they are - also excited about causal inference and these things that we've talked about, I would encourage you very much to check out the upcoming R conference. You can go to rstats.ai/gov and find out all the info there. Lucy is giving a workshop there on causal inference, so it's a really great opportunity to dig deeper than we can during this period on the subject. The conference is December 2nd through the 4th. The workshops are on the 2nd, and the conference is December 3rd through the 4th. Our listeners have a special discount code, so make sure you use "practicalai20" is the discount code, and you'll get 20% off all of the ticket types, including the workshop that Lucy is giving. So make sure and check that out.

Chris and I will be there as well, moderating a panel, so it's gonna be a great time. I would encourage everyone -- the R community is so welcoming and awesome, and I really encourage people to check that out and hopefully see Lucy and both of us there.

Thank you so much, Lucy, for joining. It's been a pleasure.

**Lucy D'Agostino McGowan:** Yes, thank you. It's been great. I'm so excited that you've mentioned that workshop. The propensity scores that we talked about - you'll learn how to fit those types of models, and you'll also learn about conterfactuals, and things. So exactly the methods that we've talked about today - you'll be able to actually implement those from the comfort of your R consoles. \[laughs\]

**Daniel Whitenack:** Awesome! That's so perfect! It was great timing this discussion, because those numbers came out just then for the vaccines, just a couple days ago, and then we've got the R conference coming up, and people can just follow this whole story arc and get trained up in causal inference and go do all of these exciting things that we've talked about... So thank you so much, Lucy.

**Lucy D'Agostino McGowan:** Yeah, thanks for having me.
