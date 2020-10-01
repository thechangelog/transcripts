**Adam Stacoviak:** Alright, we're back, Brett Cannon's back. We are so excited -- this is a two-time guest...

**Jerod Santo:** He's back!

**Adam Stacoviak:** Gosh, man... It's just such a good day, bro; I'm so glad to have you here, man...

**Brett Cannon:** I feel very privileged to have made it to the two-time guest level of The Changelog, so... Thanks for having me.

**Jerod Santo:** Well, that means you definitely didn't suck.

**Adam Stacoviak:** That's right.

**Brett Cannon:** Oh, that's good.

**Adam Stacoviak:** And not to give you too much praise, but we can get to four, maybe five... That's better.

**Brett Cannon:** What's the record?

**Adam Stacoviak:** Mike Perham is at four, I believe, right Jerod? Or five.

**Jerod Santo:** It's four or five. We have a few people at three, but Mike I think has the most.

**Adam Stacoviak:** Yeah.

**Brett Cannon:** Alright. New thing to strive for in life.

**Adam Stacoviak:** That's right, that's right. Either way, since the last time we talked, which was episode 318, some big news, some big things happened in the Python community. One of the biggest things was that the BDFL, Guido, stepped down. Maybe give us the lay of the land of how the community, how the language, how whoever is involved in Python has reacted to this.

**Brett Cannon:** It seems so far to have been well-received. When Guido retired -- well, I should rephrase. He phrased it as "taking a permanent vacation", so actually when he announced, there were a lot of conspiracy theories going around, and /hope that he was actually joking, or "Oh, he's just taking a break and he will actually come back. He didn't really retire." A lot of wordsmithing going on in that email...

**Jerod Santo:** So what did he do then?

**Brett Cannon:** Um, he retired.

**Jerod Santo:** Oh, okay... \[laughter\] So it seems like.

**Brett Cannon:** Yeah. At least as the Benevolent Dictator For Life for Python he definitely retired.

**Jerod Santo:** Okay.

**Brett Cannon:** I think the community has accepted it fairly well. When it first happened, a lot of people spoke out and said "Thank you so much for your time, and dedication, and everything you did." He received a couple awards subsequent, acknowledging his contribution to open source, and obviously to Python... And I think everyone's been fairly respectful of the reasons why, and obviously we can get into that. Yeah, I think it's turned out to be pretty well-received, and I don't think anyone's really held it against him in any way, shape or form.

**Adam Stacoviak:** Well, they shouldn't...

**Brett Cannon:** Oh yeah, God no.

**Adam Stacoviak:** \[00:03:56.15\] You can only have such a long term of service, you know? You can't be in it to win it forever... Despite the title.

**Brett Cannon:** Yeah... Well, he started Python December of 1989, so retiring in July of 2019 means over 29 years.

**Adam Stacoviak:** I look at that and think like Ken Griffey Jr. 1989, rookie card, upper deck...

**Jerod Santo:** That was my hero when I was a kid, but unfortunately he didn't have the stick-to-itness that Guido has shown.

**Adam Stacoviak:** That's right. That's the difference there.

**Jerod Santo:** Griffey got injured quite a bit, and didn't have the career that he could have had. Guido has been going on and on until a happy retirement from BDFL; at least it sounds like he's still somewhat involved, but... Undoubtedly there was a big reaction, because when you have a dictator for life, and then the life part doesn't happen to be true anymore, then it's like "What do we do...?!" and that's where you all were left, right?

**Brett Cannon:** Exactly. When Guido announced his retirement, as part of that announcement he basically asked the development team "So, what are you gonna do now?" He purposely did not tell us how to choose how to manage ourselves going forward. There was no succession plan, there was no specific guidance of "I think you should do this." It was very much "I am stepping down and taking a vacation. I'm still around..." He didn't unsubscribe from the mailing list or anything, or fall off the Earth, but he very purposely said "You all are going to figure it out on your own, and good luck", and I call it doing a mic drop, but basically he just left it to us.

**Adam Stacoviak:** I don't know him personally, obviously, but it seems like there's either a massive amount of trust, or this is a gigantic experiment to get it right.

**Brett Cannon:** Yeah, and it felt like both. I think he did trust that we would figure it out, but I think it was also kind of his way to say "I don't want to force anything upon you now. It is now your choice to decide how you want to run yourselves... So I'm gonna let you decide for yourselves instead of telling you how you should do it." I view it as a much more kind of stereotypical hippie decision of "Yes, you're all gonna choose how you're gonna want to run the commune now."

I think it was very much along the lines of -- I don't think he wanted to have his last act as BDFL be "And now you're gonna run your project this way." I think it was very much more like "I think it's now up to you all to decide how you wanna do it. You're the ones that are gonna be living with this (longer than he does), so it should be up to you to decide how you wanna do it."

**Adam Stacoviak:** Any chances there are any lost archives of scribbling from Guido, or something like that? ...that's like "The future of Python that has not \[unintelligible 00:07:10.17\]"

**Jerod Santo:** Scribbling, like on a cave wall, or something?

**Adam Stacoviak:** Who knows -- I'm just thinking like "Gosh, this guy must have so many dreams that may be just left under the table", and... I don't know. I'm just curious if we'll find some lost Guido archives, or something...

**Brett Cannon:** Probably not, actually, just because he's still participating. He is still providing advice. We are still getting Python Enhancement Proposals, and he's still providing input, so I think if there was something he honestly decided he really wanted, he could totally still do that and see that come to fruition. Honestly, even if there was something he wanted to get to that hadn't happened before his retirement, he still has the opportunity to do it... So I would honestly hope that he didn't have any regrets, going like "Darn, I didn't get to that one thing." I would hope that he'd still feel empowered enough to still get to see that happen.

**Jerod Santo:** \[00:08:13.16\] So the announcement came July 12th of 2018. We last had you on the show -- we recorded in October, and it was very much in progress what was going to happen. The PEPs were in progress. For those of us who are not deep in the Python community, for the uninitiated - explain what PEPs are, what that process is, and then once you do that, you can go into what happened July, August, September, moving forward to get to where we are today, which there is a new governance in place. We're gonna try to tell that story, and also peel back the why's behind what the decisions finally came to be.

**Brett Cannon:** Yeah... I mean, to give the plot away, Python did not collapse, so... \[laughter\] Obviously, it all worked out in the end.

**Adam Stacoviak:** Yay!

**Jerod Santo:** People aren't gonna listen till the end, Brett. You ruined it.

**Brett Cannon:** Yeah, I know. Oh well. But yeah, story time. So before July 12th, 2018, the way PEPs worked -- and PEPs are Python Enhancement Proposals, and they're very much based on the IETF's RFC system. Basically, what would happen is if someone had a major change they wanted to make to Python - typically, this is language-level; it can be module level, but it was kind of a gut feel of what really required a PEP and what didn't. But basically you would write this document that would give an abstract of what you wanted to change, a rationale of why you wanted to change it, and an explanation of exactly what that change was, hopefully implementation, discussions of backwards-incompatibility, problems potentially... And then also act as a historical document of what came up in the discussion of this idea... Because PEPs tend to lead to changes to the language, they tend to be fairly controversial with some people, and so the PEP also records rejected ideas and why they were rejected... And if it's in the middle of a conversation in the current open issues that are still open for debate. But basically, that's it - it just becomes the document that records a proposal for an idea.

For the faithful retirement day, what would happen was Guido would either choose to make a pronouncement himself, and either accept it or reject it, or in the last few years he added the concept of BDFL delegates, where basically Guido would say "Look, I don't have enough domain-specific knowledge in this area, but this other person does and I trust them to make a good decision... So I'm gonna delegate my BDFL powers for this one PEP to them", and then they would play that role. So they would be the one that you would have to convince, they would be the one that would provide the feedback, and ultimately they would be the ones that would make the call whether to accept or reject the PEP. That was basically it.

Anyone, technically, could make a Python enhancement proposal; it is open to the public. We do ask people to propose the idea first to a mailing list called Python-Ideas. Just make sure that it hasn't been discussed before, because obviously 29 years of history means there's a decent chance your idea has come up before... And then if the general people on that mailing list go like "Yeah, that's not a crazy idea", or are able to give you feedback as to why it's a crazy idea, you can then consider moving forward and writing a draft PEP, sending it to the list again, getting feedback, getting it tightened up, ready to go, and then get that sent to Python Dev and have the real serious discussion. So that's how the PEP process worked.

\[00:12:02.06\] Then starting July 12th that all came to a screeching halt, because we no longer had someone to make the BDFL decisions on a single PEP. So what happened is we basically put Python's feature development from a PEP perspective on hold. We literally put our forks down and said "Okay, no more. Pencils down. We are not gonna touch a PEP. No one is in a position of power right now to make a call on any PEPs, whether it's to actually make a decision, or to actually delegate to someone." We all just immediately agreed to that.

Day-to-day kept working, though. We still fixed bugs, and kept moving towards getting -- I believe we were still under Python 3.8 at that time... Yeah, Python 3.8 development would have started by that. So day-to-day was still going on, but the high-level stuff stopped. Then we started to discuss what the heck are we gonna do. As we discussed just a minute ago, Guido left it completely up to us to decide how we wanted to handle our governance, how do you run the Python open source project now from a development perspective.

So we very quickly agreed that we were gonna do it through the PEP process, if for any other reason than because we all agree on it, and don't reinvent the wheel if you don't have to... So we just decided at least we were going to be proposing PEPs on potential governance models. Then we tried to get initial -- I don't wanna say deadlines, because we didn't keep to them at all, but at least guidelines of when we wanted to aim for this stuff to get done... Because we realized we were in a very interesting position of we didn't want to rush this, because obviously there's the possibility for some of us to actually live with this for a long time. I've been contributing to Python now for 16-17 years, so whatever decision here I could have to live with for decades, so I didn't wanna rush it, personally... But the other thing is we also realized the Python community, specifically the open source community honestly as a whole was very much watching what we were up to, users especially, and not wanting to see us necessarily take forever, because having the language in what some viewed as a crisis of leadership, last too long.

So we were in this weird spot where it's like "Let's not rush it", but we don't wanna take too long, to give the impression that we don't know what the hell is gonna happen or what's going on, and that you should not use Python because who knows if it's gonna be around in a year.

**Jerod Santo:** Right.

**Brett Cannon:** So we more or less seem to have agreed that we were definitely gonna try to get it done - at least the major steps - in 2018. I think some of us were hoping to get it completely wrapped up in 2018; that didn't quite happen, but we didn't miss by too much. So with that squared away, we realized what people were starting to think about how we wanted to govern ourselves and make governance model proposals. We also had to figure out how to choose the actual model, because there's kind of a recursive problem here of "Alright, how do you choose?" "Well, you've gotta choose how you're gonna choose." "Well, how are you gonna choose how you choose?" "Well, you could choose how to choose how to choose how to choose..." And you've gotta stop somewhere. So we realized simultaneously while we were coming up with our potential governance models we also had to figure out how we were going to actually choose... Because once again, Guido did not provide guidance on that. He just said "It's up to you to decide how you wanna decide." So we also started a simultaneous discussion somewhat on voting.

\[00:15:57.15\] We are lucky enough that we all tried to get together for a week once a year in September at the Python Dev Sprints, where it's only core devs because we find we aren't very productive at sprints at conferences like PyCon, because we're trying to help newcomers get up and going, and answer questions for people, so it's not a good, productive time for us... So we started annually having a week where it's just core devs, so that only core devs are able to ask questions to each other, so that we can get more focus time.

In September 2018 it was hosted at Microsoft in Redmond, Washington in the United States, and we were able to get a bunch of us in a room who cared about voting, because obviously -- you can really nerd out a voting system, it turns out, and some people cared a lot and some people could care less... And some of us who cared got together in a room, and we just brainstormed and kind of like went "Okay, what feels right? What feels wrong? Where do we wanna do the voting? Where do we want it to go?"

We came up with what we thought worked, we took it back to the mailing list shortly thereafter in September, while people were still getting proposals for governance models. There was back and forth on that, there was a lot of discussing... And it was kind of tricky, because as I say, we were trying to choose how we wanted to choose, but we had no one in a position to choose how to choose how to choose. So how do you choose what voting model? There's no one in a position to say "Alright, that voting model seems to win." Does that have more votes? Or how do you vote for a voting system?

It was a really odd position to be in, because it was done entirely by consensus and just sheer willpower of everyone involved to kind of go like "Okay, this seems like the voting system everyone mostly seems to agree on, but we have no real way to officially declare that", so we kind of all just went like "Okay, this seems to be what everyone chilled around, so we're gonna go forward with this. If you've got a problem, speak up."

I don't really remember anyone specifically speaking up, but honestly had they, it would have needed a large number of people to speak up to go like "No, that seemingly consensus is not right."

So we ended up on a voting system... It was based around the Condorcet method. Basically, it was sort of like ranked ballot. There's a whole thing, if we really wanna get into the nitty-gritty details, but it's all written down in a PEP. It is in, I believe, the PEP 8001. That PEP lays out how we did the voting.

So with that out of the way - and I believe we've decided on that sometime in October, maybe by the end of October... We had started to get kind of a coalescing of what models we wanted, and so come about mid-November I believe we set as the deadline, to get all of the proposals in and locked in. Then we held a vote from the beginning of December until mid-December 2018. Then we got a result, and then we all took a big, deep breath for having finally settled that one, the selected model... And we can discuss the models if you want later. It required some elections, so we had to hold those elections.

We held those elections from mid-January to mid-February. We did that, and the elections finished, and then the new governance model kicked in more or less that day, and we've been running under that model ever since.

**Break:** \[00:20:00.18\]

**Jerod Santo:** Brett, as you describe this entire process I can't help but wonder, do you like this stuff?

**Brett Cannon:** \[laughs\]

**Jerod Santo:** Governance, and voting, the models, the Condorcet method... Does this stuff get your juices going, or is it just drudgery in order to continue...? Because if it was me, I'd be like "I'd like to just do the features of the language, but... Here we are."

**Brett Cannon:** I have a masters degree in philosophy, and...

**Jerod Santo:** You like this stuff.

**Brett Cannon:** Yeah, I like political philosophy. I like the ideas behind it, and I like the thought problem of just thinking through the ramifications of the decisions, but I will fully admit that the whole process was a bit stressful, because I am vested to the level that I am. At this point, I am one of the longer-serving core devs that's still active, and so I felt kind of like a vested interest of making sure this went well and smoothly. The actual decision-making was a bit stressful, and trying to herd the cats, as it were, of like "Alright, let's try to get all this done by this date, so we don't drag on", and trying to keep the discussions focused and trying to do all that while not having people think that I was trying to play mini-BDFL and trying to become an overlord in the middle of all this, while still trying to somehow exert some good forcing motions towards reconciliation and actually ending it... It was kind of tricky. So yeah, learning about all the voting methods was interesting, the arguing about it was not.

**Jerod Santo:** Anytime that power leaves a scenario, there's a vacuum. You have the person who's been the dictator - as the acronym states for a long time - gone. Like you said, no succession planning, no handing off the keys to the kingdom to this person and now they're in charge... I would imagine that produces a power vacuum. Python is a very important language, a very important community, open source project, and undoubtedly there's lots of money involved, because it produces money for all the businesses that are using it etc. How heated were the debates, how heated were the arguments? Was it relatively civil, was there any -- not to name names, but were there moments where it was like "Wow, this is really intense"?

**Brett Cannon:** \[00:23:56.26\] You're right, there's a lot of money. I know of a bank that has billions of things trading daily thanks to Python. And that's just one example. I don't think there's a single Fortune 500 company that's not using Python somewhere. So there is definitely money behind it. But one of the very interesting things about Python is it's definitely the most popular programming language that is what I call community-based open source, versus corporate-based open source. It's not a Go or a Rust, where there is a very specific backer who basically acts as a backstop to make sure things happen. I'm not saying necessarily that they over-exert control, but that there is a backstop there to make sure things happen.

**Jerod Santo:** Right.

**Brett Cannon:** Or even JavaScript - they have ECMA there, and companies pay people full-time to work on JavaScript, so there is no worry of JavaScript disappearing. Python, on the other hand - I think now we can potentially claim we have a single core dev who gets to spend all his time on Python, and honestly he gets to do that because he just declared one day at work he was going to do it and no one said no.

I think he calculated, if you add up all the core devs who get any form of paid time, I think we might equate to three developers on Python. So it's very volunteer-based, which means pretty much everyone who's participating isn't really being driven by their employer. It's pretty much across the board driven by people who are choosing to put their time and effort into it.

I'm very lucky, I got made manager of my team in March officially, and as part of that I made a deal that any time I have that's not spent managing my team, I get to put into Python... So I can steal a good chunk of time when my team doesn't ask too much of my time, but I'm extremely lucky in that perspective; thank you to Microsoft for that, but it's not normal. So it means that there's no money in the management of the language. Everyone's pretty much acting as altruistically as they come... Which does mean though that it can become very passionate, because there's not this "Oh, I'm just gonna make sure this works for my company, but it's for the company, not me. I don't have to worry too much", versus "I'm putting my personal blood, sweat and tears into this project, so I very much care that this result comes out well."

It got kind of heated over the voting system, actually. The actual individual governance models - there was enough of a variety there that covered the gamut of what I think everyone expected as potential outcomes that there wasn't really any major heated discussions on that. But the voting system actually - there were times where it was like "Wow, okay, that person is really passionate about this specific approach, and really feels like there's gonna be potential disenfranchisement of people if we don't choose the right voting model." And that was an honest to God worry - if we choose a voting model that people disagreed with at a fundamental level as not being fair, that could delegitimatize the actual chose made through that voting system.

So there was heated discussion around the voting. It worked out in the end, and it wasn't horrendous. I think everyone also very much realized that this was a very unique situation, and everyone was a little stressed and worried about the outcome anyway, so I think everyone put in a bit of extra effort to try to stay civil and try to make it not horrible, basically.

**Jerod Santo:** \[00:27:52.22\] So there were seven models proposed. The voting on which model to use you said was the one that was under debate, versus the voting on how to vote. The first one - that was kind of a soft consensus, but the actual voting on the governance models... Or was there a bunch of people in a room saying "Hey, 8012" "Hey, 8011". These are the PEPs 8010 through 8016, which by the way, the steering council model eventually won, which we'll talk about how that works... But these seven PEPs - was there advocates for each one and they describe why the commons governance model makes more sense, and somebody else would say why the external governance model made more sense etc?

**Brett Cannon:** Correct. I mean, because we use the PEP process, the author always acts as the advocate for that PEP. So when someone made the proposal that I wanted basically another BDFL, for instance, and that was PEP 8010. Barry Warsaw wrote that, and he by default became the de facto advocate for that. And there were discussions... A lot of it was around clarifications to try to work out exactly what PEPs were defining clearly. Because some of the PEPs were very specific about how things would run going forward, and some of them were very loose on purpose.

Because we had Guido as a BDFL, we have historically not had very strict rules about how things happen. It was always just whatever Guido said, which meant we've never really had to write down a lot of things. Things just kind of organically grew out of the project in terms of how to make decisions... And basically, if there was ever a disagreement, you just asked Guido "Alright, what's the decision?", and then he would make it, and that basically made that decision the rule of law. But we purposely as a group never wanted to get drowned in the minutiae of how certain things happened. But now that we had PEPs proposing new governance models, some of them were very specific on how things happen, so a lot of the discussion at that level was people wanting to get very clear clarification on what certain things did or did not mean.

Then after that there was some discussion of "So I like this because of this. I don't like this because of that." But actually, there wasn't a ton of back and forth discussion. Actually, some people got a little frustrated from that. Some people were going like "Okay, I don't have the time to keep up with all the little discussions of what each of the PEPs are. I'd like to hear people's opinions." And there were actually some discussions about whether people should come out and say "Okay, my name is Brett Cannon and I like this PEP because of this, and I don't like the other six because of this. This is my preference", because they felt that was kind of influencing; you'd rather have people actually read them themselves \[unintelligible 00:30:52.27\] I wanna hear other people's opinions just to see where they're coming from, to see if that sparks a \[unintelligible 00:30:59.12\] on my side... But it was very fluid in that regard. It wasn't a lot of that... Really the coming to consensus and trying to make a decision of the voting model (the 8001 PEP) was really it.

After that, it was just a lot of clarification, a little bit of people here and there occasionally stating "I like this" or "I don't like that", and you could read into it sometimes based on how they were asking for clarification questions... Like, "Well, you say this, but what does it mean in this situation?" They weren't really leading per se, but it was very obvious where people were coming from with their questions. But otherwise, it was pretty much at the end a "Here are the seven ideas. Go read a bunch of PEPs for two weeks and then we're gonna start voting in two weeks. Be ready to have a ranked choice order of what you like over what."

**Jerod Santo:** \[00:31:53.08\] As I said, the steering council model, which was PEP 8016, won out. Now that it's all said and done, you can go ahead and just tell us, was this your choice, or did you have to settle other people liked this one? Did you like another one more? Was this the one you were hoping for? What do you think about the models?

**Brett Cannon:** No, this was actually not the one I voted for. I actually voted for PEP 8011, the Python governance model led by a trio of Pythonistas. The one I personally wanted was one where we had a dictatorship model split across three people.

**Jerod Santo:** But then you got five.

**Brett Cannon:** Yeah, now we've got... Well, it's interesting though--

**Adam Stacoviak:** Still an odd number though, it's good.

**Brett Cannon:** Yeah. \[laughs\] Yeah, that was actually also discussed, like "Do we need to have an odd number? Does it really matter?" Because if you have a tie, you basically can just say "Well, then it fails." So there were even discussions at that level, it was like "Is odd numbers important? Is there such a thing as too big of a number, or too small of a number?"

So no, this was actually not my top choice.

**Adam Stacoviak:** What I like about it though is this ToP, Trio of Pythonistas. I like that.

**Jerod Santo:** Going for the acronym, yeah?

**Adam Stacoviak:** Yeah. Well, coming back from the military, you called the -- jeez, I'm showing my age here when I forget these things... First sergeant. The first sergeant was in charge of the unit, the whole entire brigade. And that person you would call top. It's just a term of endearment, a nickname, but it was meant to mean they're the person in charge.

**Jerod Santo:** They're the tops, man...

**Adam Stacoviak:** Yeah, ToP. I kind of like that for that reason.

**Jerod Santo:** So if Adam was voting, it goes solely on acronyms. He's like "Which of these models has the best acronym?"

**Brett Cannon:** \[laughs\]

**Adam Stacoviak:** Well, let's dive deeper into those details then. I like that aspect of it. What is the dramatic differences between 8011 and 8016?

**Brett Cannon:** How about this - why don't I go through all of them real quick, and that way I'll just call out the major differences?

**Adam Stacoviak:** Cool.

**Brett Cannon:** So 8010 was basically a elected BDFL, otherwise same thing. So really all that did was just dictate how do we vote in a BDFL and how do we throw out the dictator. That didn't win basically because there was a disagreement over whether that PEP needed to specify who the initial dictator would probably be, or whether or not that should be completely left out... And then after that was a general feeling that there was no single individual who could directly replace Guido's ability to lead the community, as well as have his technical acumen. So honestly, that very quickly didn't have any chance.

8011 was the trio, which as I mentioned, was basically BDFL but split across three, to kind of help take care of that issue of not having a single individual, but having at least across three people a good way to manage the community and all that, but also have the technical acumen to actually either make decisions, or to delegate as necessary.

8012 was actually Rust's governance model. That was very much everything is drawn by working groups, and working groups can form themselves, but then you had to get voted in, and then it was all about how to dissolve the working groups, and how to choose which working group handles PEPs. That one was very much a devolvement of power to more or less give everyone an equal chance to lead if they chose to, in their chosen area. That one actually came in second in the voting, and I will mention that the trio came in third. I don't remember if they were that close... All the voting results are public, by the way, so you can totally look at the actual voting results. But it wasn't a huge difference.

\[00:36:13.26\] 8013 was kind of interesting, because that was basically "Let's run Python like an enterprise." When you go to your VP with an idea, you sit in a meeting, you tell them what your idea is, you pitch it to them, you try to convince them in that meeting that's a good idea, and then if they like it, they say "Okay, great. Go do it", or they will sit there, pepper you with questions, hopefully good questions, and then say "No, go back and go fix it." That's basically what this model laid out.

The other interesting thing about it though was it specifically said the council members could not be core developers... With the idea being that you want someone who is impartial and has no specific pre-existing leanings that would cause them to make a bad decision because they just have a pet project/change they wanna see happen. That didn't happen, because basically a lot of the core developers said "No, I don't trust it \[unintelligible 00:37:20.18\] how the project necessarily works and how to handle thinks appropriately in the Python community" etc. So that didn't really go anywhere.

PEP 8014 honestly was anarchy. I'm not joking. Jack Jansen actually admits in the PEP that he would have used the word "anarchy", but it's such an overloaded term with negativity that he didn't feel like he could say it that way... But basically, all it said was to choose on PEPs there should be a vote.

**Jerod Santo:** That's all it says?

**Brett Cannon:** More or less. And then there's a council to decide the result of the vote, and that's it. And it says the council should decide the result of the vote based on how the vote finished, who voted, how those people voted... It was very much like "We could have a vote among the core devs, we could vote with the community, we can look at who voted and how they voted, or we could not care..." Basically, all there was was an election council to validate the results of the election, but they were allowed to interpret the results of that election almost any way they want.

**Jerod Santo:** And the blurb on that - by the way, PEP 8000 has all these blurbed out, and 8014 it says "Instead, this is determined by the Council of Elders." Sounds kind of cool.

**Adam Stacoviak:** Yeah. I like that.

**Jerod Santo:** Does it at least describe what an elder is? How old do you have to be?

**Brett Cannon:** No, there is no age limitation?

**Jerod Santo:** 80? \[laughs\]

**Brett Cannon:** Everyone suddenly start nominating their grandparents.

**Jerod Santo:** Yes... The council of elders.

**Brett Cannon:** "My granddad should be on this because he's old enough and he still has his wits about him."

**Jerod Santo:** That one - it sounds like you have to go on a spirit quest out into the mountains, or something...

**Adam Stacoviak:** And come back different.

**Jerod Santo:** Yeah, come back different... \[laughs\] With your PEP all written up.

**Brett Cannon:** \[unintelligible 00:39:14.15\]

**Jerod Santo:** It didn't actually place last, though. That one actually ranked fifth out of the seven, so it wasn't last. The external council came in last.

**Brett Cannon:** Yeah. And actually that one had the best quote from Monty Python and the Holy Grail at the end... If you've seen the movie, when King Arthur runs into the commune, collecting muck, out in the mud - that was basically the model he was going for... Having an autonomous commune run Python.

**Jerod Santo:** That would have been a nice experiment.

**Brett Cannon:** \[00:39:54.23\] Yeah. 8015 was an organization of the Python community... That one said there was gonna be a council, and the council either chose a BDFL delegate, or there would be a vote. And that's basically what the council did. Otherwise, the expectation was everything was gonna be done in working groups otherwise. I don't think that one, because it wasn't quite strong enough in a specific position because there was still choosing delegates... But there were still working groups and votes, and honestly, after all of this, I think there was some voting fatigue, after all the discussing of voting and what has to happen for a proper vote, that I think some people were going like "Yeah, I don't wanna have to vote every time there's a new PEP... Please don't ask me to vote that much." I think that's partially why that PEP lost.

Then 8016, which has actually become PEP 8013, and PEP 8013 is the actual official governance model PEP - that was the steering council one. What that basically said was "Every release of Python we will elect a council of five people. There can be no more than two people from the same company, to make sure that no company can basically own the council, and the council has absolute power, except for changing PEP 8013, which dictates how votes are handled and who gets to vote."

Then the other little interesting bit at the pep is it basically says "The council has absolute power, but looks to use it as little as possible." The PEP itself says the council should try to find consensus among the core developers. And I will admit the reason I personally didn't like this PEP is that felt a little too wishy-washy to me, and too ripe for abuse of power, if that was what people were worried about. Because if the council has absolute power, they don't have to listen for consensus from the core devs; it's just kind of a hope... And I felt like if you were just gonna hope for that, you should just go ahead and just do the trio and keep it simple.

Subsequently, since we've done this, I've actually had people quote that part of the PEP to me, at least twice, that the council was supposed to find consensus. So it's there, but it can't be ignored, but the council is not trying to ignore it... So it's put it in an interesting perspective of like the council can basically do what they want, but they try not to, but it also means that almost any action taken by the council, if it hasn't had a full-blown discussion before, can be questions as not trying to reach consensus. So that was one of the reasons I vote against it. But it won, and we have not collapsed, so it seems to be working... And those are all the models.

**Jerod Santo:** Is there an escape hatch built in? Like, if the steering council model is an utter failure, can there be -- not an overthrow of the council, but an overthrow of the model, and say "Let's revote and try a different one of these seven, or a new one that somebody else proposes." Are you stuck with it for good?

**Brett Cannon:** Well, not necessarily. What the PEP specifically states is what the definition of a core developer is, and very specifically what an active core developer is. You have to have contributed to Python in the last two years to be considered active, so that makes you eligible to vote. And then through approval voting we vote in anyone who has put themselves forward to run on the council. It can be a core dev, or it can be an external person who is sponsored by a core dev, I believe... So that also lets people who are not core developers participate, although everyone currently on the council is a core developer.

\[00:43:56.10\] You are allowed to call for a vote to throw out a council member, and that can include the entire council. People can also propose changes to PEP 13, and that calls for a vote from other core devs. So technically, what you could do if you were not happy with this model is propose a change to PEP 13 that basically completely rewrote how the model worked, called for a vote, and as long as the council does not veto -- actually, we can't even veto this. Basically - yeah, if you propose a change to PEP 13 that says "You know what, we're gonna go back to a dictator", and a majority of core devs voted for it, that would change the model.

**Adam Stacoviak:** Wow.

**Brett Cannon:** So you can still do it, potentially.

**Adam Stacoviak:** One thing to pay attention to is the sheer amount of detail in each of these proposals. I can only imagine -- this is the comprehensive list; how was this formed? Did you reach out to those that cared enough and said "Hey, propose a new model"?

**Brett Cannon:** Well, what happened was -- we obviously knew some \[unintelligible 00:45:11.28\] based on various people who participated in other open source projects. Actually, if you look at PEP 8002, it's actually a survey of other open source projects and how they govern themselves... So it's actually an interesting document, just to read in one place how other projects do their own governance. But basically what happened was we just went "Okay, if there's a way you feel we should be running the project, please speak up and write a PEP."

Basically, 8010 was obvious, because that was a dictatorship. 8011, which was the trio, made sense to those who thought there was no singular individual who could replace Guido. The community governance model was basically Rust, so that was already known. The external governance model was a unique one... The commons governance model was anarchy, so you could say that was unique, or you could just say that was obvious as an option... And then the organization of the Python community as this hybrid approach was a unique one... But it was very much just us going to ourselves "What would we want?" and some opinions just very quickly came and bubbled up, and then some came along -- like, 8016 was not actually originally a proposal. It came up in October based on various discussions that sparked Nathaniel Smith (and I believe some co-authors; yeah, Donald Stufft) to come up with a proposal. It was based on what they were hearing and where they thought things could potentially go.

So yeah, we didn't specifically reach out to anyone other than some people specifically going out and researching what other communities did and how they handled themselves, and then just kind of taking a step back and looking at if anyone's felt inspired to then take the time and effort to write up a PEP to propose it and advocate for it.

**Break:** \[00:47:15.15\]

**Jerod Santo:** So let's focus in on PEP 8016, because that's the one; it's the one model to currently rule them all. The steering council model - there's five members of the steering council. You've been talking about it a little bit.

One of the things I found interesting is the duration and the term. So there's no term limits, but a new council is elected after each feature release, and I'm curious of that's a known quantum, or you guys are on like a six-week cycle, or does it just depend on how Python features roll out?

**Brett Cannon:** That is a roughly known quantity. We release every 18 months for new feature releases.

**Jerod Santo:** Hm. That's a good duration for a steering council, it seems.

**Brett Cannon:** Yeah. So the 18 months - we occasionally discussed we wanna switch to a year, do we want longer...? And because we kind of got into Linux distros early as a thing, the 18 months just seemed to have always worked out as a good number, and it's continued to work out... Although there have been rumblings of what if we did it annually, like some languages...

So it's not locked down every October 15th, or every March 15th we do a release, but it's roughly around those months... And we do know this initial group is gonna be truncated, because the next release of Python is later this year, so this initial council's gonna have a shortened cycle... But yeah, so it's roughly known that basically if you end up, you will be on for 18 months.

Now, as you did point out, Jerod, there is no term limits, and that was somewhat on purpose... The idea being that if people felt people were doing a good job, there was no reason to kick them out. We do recognize there is institutional knowledge in just running things, but it does allow to bring in new blood, because people will come on and come off, as necessary.

We did look at the Django Software Foundation and how they run things, and out of their original council I believe they have three that are still on, so there is some churn... But there is full recognition that basically people -- I don't wanna say people are lazy, but honestly if people do a reasonable enough job, people will keep revoting in people, if they think a reasonable job is occurring... And so there was an acknowledgment that the initial group of people, unless they stepped down, chances are they will keep being on it... And people seemed honestly fine with it.

The lack of term limits so far been a problem, but then again, we haven't had a second election, or a third, or a fourth, or a fifth. Come back in a decade and then we'll see if people have a problem with the lack of term limits.

**Jerod Santo:** We should mention that you're a member of this council. Congratulations...

**Brett Cannon:** Thank you.

**Jerod Santo:** Yes, and the twist ending to this story is Guido's back. He's on the list.

**Brett Cannon:** Yeah, so it was funny... I put my name forward; as I said, I feel invested in Python at this point. I am lucky enough to have a lot of friends in this community, so I want to see Python keep going, if for any other reason, to just selfishly make sure PyCon continues to happen, so I get to spend a week hanging out with good friends of mine somewhere around the world... But Guido actually emailed me asking if I thought it was okay for him to run, because he did say when he retired that he didn't want to completely walk away from Python and didn't wanna participate; he just didn't want to be the sole person in charge anymore.

\[00:51:57.17\] I think I've heard him in an interview kind of related to sending your kids off to college; they're still your child and you still talk to them and try to help out, but they're not living under your roof anymore and they're not coming to you day-to-day with all their problems, and you don't have to make them lunch anymore. I think that is basically where Guido is coming from.

He felt he still has technical insight to provide, and he still wants to help out, he just didn't wanna have to run all the political stuff, and all those kind of decisions... So I personally told him that I thought it was reasonable and a good thing to do. And I think it also helped with validity of the council, so there's good optics, honestly, to be able to go like "Okay, Guido may have stepped down as BDFL, but he's on the council that someone helped legitimize it."

I know some people have been worried, like "Are we just a mouthpiece for Guido and he's still pulling the strings behind the scenes?" and the answer is no...

**Adam Stacoviak:** That was my next question.

**Brett Cannon:** \[laughs\]

**Jerod Santo:** Guido told you to say no.

**Adam Stacoviak:** That's right.

**Brett Cannon:** Yeah. It's really all deep state and it's really a shadow government for Guido, and it's totally just so we can take blame for everything. \[laughter\] No, so Barry Warsaw, Carol Willing, Nick Coghlan, and myself, plus Guido - we have weekly meetings, and Guido is just another participant. He takes notes, just like the rest of us have taken notes in the meetings; he gets non-special treatment. If he has some technical thing to say, we listen to him, just like anyone else would listen. Obviously, he has some very deep knowledge of how the language is structured, so obviously we listen to him as someone who's been working on Python for 29 years, but... It's not like we aren't willing to go against him in a decision. We've had one thing that kind of split the council, and I personally went against what Guido wanted, and it just was what it was. It was nothing personal; he knew that, and I knew that, and it was just a thing. The decision was made, and it was no big deal.

So no, he's not running the council behind the scenes in any way, shape or form. There's already been decisions where others have disagreed, and it was no big deal, because we're all basically friends anyway, and it's just "Okay, this is what it is. No big deal."

**Adam Stacoviak:** I'm not intimate with the contributions history of Guido, but one of the stipulations is having non-trivial contributions in two years. Does that mean that he will continually actually write code for Python?

**Brett Cannon:** Yeah, I mean, he still participates; we have not officially defined what that represents yet. I actually am in the middle of writing some code to try to hopefully automate how we calculate that based on contributions to certain repositories... But Guido still participates in PEPs; he's still been named BDFL delegate on a couple PEPs at this point. He's made PRs and merged them, so he's still participating.

**Adam Stacoviak:** It seems like his succession plan was not a succession plan that was a succession plan...

**Brett Cannon:** \[laughs\]

**Adam Stacoviak:** ...in the fact that he wants to be involved, but it seems like maybe some of his underlying motivations might have just been to resolve himself off of some of the pressures and responsibilities that the BDFL model requires of the dictator.

**Brett Cannon:** Oh, very much so. The key catalyst to this was that Python introduced what we call "Assignment expressions are the walrus operator", and it was a very controversial decision. It introduced new syntax, where there is definite benefits, but it was one of those things where it's a marginal benefit in several cases that you might scatter about in some places, but it didn't introduce a new capability to the language that was not somehow doable without it being there... And at this point, people very much like Python's size, because we have a phrase that "Python fits your brain", and whenever there's new syntax that doesn't open up a new avenue of abilities that weren't possible before, people very much worry that that feature is going to lead to a potential cascade, or that will be the feature that finally pushes some other aspect of the language out of their head.

\[00:56:25.04\] And because of the amount of negativity he got over that PEP, he just finally said "Forget it. I don't want to have to fight that hard for one of my decisions ever again." He just went "Enough is enough. I just don't want to be that kind of focal point." And I think the best way to point that out is if you look at what the hierarchy used to be, it all funneled to him; all the pressure of all of the development more or less funneled to this one individual very decisively. And now that he's no longer doing that, the pressure is alleviated not only among all five of us -- it does not mean there's five more BDFLs, so we have five times more capacity, as some people have suggested... But also because the PEP specifically we have to get consensus, it also falls a bit more on the overall development team to have to come to an agreement and participate and make decisions as well.

That also helps alleviate some of the pressure; it's like "Well, we tried to get consensus, but no one could come to a consensus, so we're just gonna let it go", unless we feel as a council something is very critical and we need to make a decision, and we really think this is for the benefit of the team, and thus we have to potentially make that unpopular decision that not everyone's on board for, because we honestly think that it's important enough to make that kind of call.

**Jerod Santo:** I'm curious why the number five is the magic number... I know the other one was three, this one was five... I haven't read the details enough to know if there was a specific reason for five... But then I'm also curious if the council itself has been stressed at all in terms of decision-making so far. I know it's only been a couple of months that you all have been active, but has there been any difficult decisions where you haven't reached consensus, or struggled to get there?

**Brett Cannon:** For the number five, if I remember correctly, it was mainly it's an odd number, and it's enough that reaching consensus means there isn't any specific way to hopefully directly influence people to get what you want, but it's not so big that actually reaching consensus is difficult. Basically, five is the magical number, without feeling like "Oh, there's this magical little cabal."

**Jerod Santo:** I could see with three, where you could just turn one person to your side, and basically strong-arm the third, where with five you'd have to convince two others, so it requires a little more effort there in order to get a vote to go your way.

**Brett Cannon:** Yes. In terms of any controversy so far - yeah, we purposely try to present any decisions we make as a council; we don't say "We voted this way, and thus the result is this." So I don't wanna necessarily point out any specifics in terms of splits... But I will say there has been at least one where we've split 3/2. But as I said, no one felt like "Oh my god, this is such a horrible decision. Why are we doing this?", who didn't get their way. It was just like, "Oh... Alright, that's too bad." But that was it.

We have had at least one decision we made that was viewed as somewhat controversial. Part of the controversy was honestly we were a little sloppy in the process. I think it was last month - basically, we accepted a PEP to move our issues over to GitHub, and the PEP that outlined the reason behind the decisions wasn't updated fully, and it had some factually inaccurate statements that needed to get fixed. It doesn't necessarily change the decision, but it was just kind of a sloppy way of handling it... So people called us out on it, and it was totally rightfully so to be called out on, and we do plan to fix it. That was somewhat controversial.

\[01:00:31.05\] There have been other times where things have been stated or suggested, and as I said, I've had people quote back at me, "You didn't ask for consensus" etc. Honestly, that was typically just people not noticing that something else had been discussed somewhere else, so it was usually just a misunderstanding. I was able to say "No, it was actually brought up over here", and people didn't object. That usually settles that pretty quickly.

So it hasn't been too tumultuous, really. We all got elected February 4th, I think. I was in New Zealand at the time, on vacation, so I was off by days in the Western hemisphere anyway, so I don't even remember the exact technical day... So \[unintelligible 01:01:17.24\] it seems to be working out pretty well. People seem t be more or less happy with the way things are going. People have not been going like "We need to overthrow Brett Cannon, or someone else on the council, or the whole council." There has not been a crazy thing.

I think we've all agreed that in about three years' time we're going to have a little retrospective on this, and go "How do we think this has worked out? Do we think this is the right thing? Do we need to tweak something? Do we need to completely replace it?" Jerod, much like you asked earlier - how do you completely replace it? Well, we can change PEP 13. So we've already decided as a group that in about three years we're gonna come back together and have the discussion like "Everyone okay? Is it all good? Do we wanna completely throw this out and try again?"

So we're aware that it is kind of experimental still, and we're all still trying to figure things out. I mean, everyone is. It's one of those things where because it's a new model, everyone's trying to figure out where -- or at least I think the development team is still trying to figure out where they want the council to fit in and be, and where those boundaries of which of the council \[unintelligible 01:02:31.17\] versus when should we try to specifically get consensus... And then even at that point, there's always gonna be the question of "Was that consensus or not?" It's always gonna be a little hazy, and there's always gonna be those times where decisions are made and it's like "There seemed to maybe be consensus, but not clear consensus", and "Is that acceptable?" And obviously, people are people, and there will always just be some people who disagree... It just is what it is.

**Adam Stacoviak:** How do you think all this will play out for the future of Python? When we look at its impact, its ability to garner newcomers, grow as a language, as a community etc. One of the concerns was the BDFL mode, where you have a dictator instead of a committee or some sort of proper governance model like you have now... How do you think the long-term benefit to the language and those using it will play out? Maybe some speculation here...

**Brett Cannon:** I'm hoping that it will actually -- I don't wanna say accelerate, but I'm hoping it will open up some avenues to some things that we haven't been able to try before. I don't think it's gonna hurt the popularity of the language. I think we've reached COBOL level of integration into companies, where there's no chance in hell people can get rid of us at this point, so Python will always be around, whether or not the name Python is used in hatred or in love \[unintelligible 01:03:59.02\] but hopefully it stays love. My hope though is by having five of us, it kind of opens up the potential for having ideas of how to try to move things forward.

\[01:04:15.00\] I kind of view the council as if everyone were to quit volunteering tomorrow, there's at least five of us to make sure something functions somewhere, and we can somehow kickstart the project again. I view the council now as the backstop. And as part of that, I'm hoping as a council we can work towards focusing the community's energy towards improving things.

Python 2, for instance, has been a long-running -- I don't wanna say albatross, but it's been a weight on us in terms of maintaining it and dealing with that transition in the community, and that's all ending on January 1st, 2020. That's when Python 2 is gonna officially be retired.

I think the hope is all that energy that's been put behind migrating people over will suddenly be freed up, and hopefully the council is gonna help focus it towards things that we think can help the community continue to grow and be a wonderful, welcoming place for everyone.

To give actually a concrete example of that, Adam - we're currently working to potentially get a product manager through the PSF to help out with some things. The initial thing we're thinking about is the sunsetting of Python 2. That has a very hard deadline, and there's some things we'll probably need to work out; there's communication on that, so we're hoping we can actually hire someone to do that kind of work, because Lord knows, I don't wanna have to \[unintelligible 01:05:37.20\] website and find a reference to Python 2 and rip it out. That's just not what I wanna do with my Sundays.

We're also talking about having a vision document with just expositorily saying where we do we see Python in ten years, where can be potentially (as I said) funnel the energy of the community towards things that we think will have a beneficial payout to keep the language relevant going forward, and something people wanna use... Because we don't wanna end up in a position where we are just comfortable with where we're at, and then we lose sight of where the community is going, and then we have to be left behind by our users because we just aren't where they need to be.

So that's my hope, is that the council will enable that... Because before, Guido just didn't have the bandwidth on his own to do that kind of thinking, and now that there's five of us, I'm hoping we can spread that around enough that we can actually see those kinds of things come to fruition, and have a positive impact going forward.

**Adam Stacoviak:** Yeah, it's a hard burden to bear solo. It's much better to have a team.

**Brett Cannon:** Yeah, exactly.

**Jerod Santo:** Brett, one last question for you... I'm curious about the Python Software Foundation, its role in the new governance, if it has any at all... Can you explain how they play a role? I don't know who they are, or you are... Go ahead.

**Brett Cannon:** Yeah, so the Python Software Foundation as a non-profit has basically evolved since its founding in -- oh god, I don't remember... I was elected to it in 2003, so that's when my memory starts... It basically holds all the IP for Python, and all the trademarks, and then it also does all the community outreach. But it has already been run very independently of the Python development team, such that if the Python development team has something they need monetarily, like infrastructure, we can go to the PSF and ask for it, but otherwise the PSF doesn't dictate anything to the actual development team.

\[01:07:33.20\] So for us, actually part of PEP 13 specifies that the council acts as the intermediary between the development team and the PSF. For instance, we've started this conversation with the PSF about "Hey, could you potentially hire a contractor to be a PM for the development team, to handle the Python 2 sunsetting?", and that sort of thing. The PSF helps organize and get funding together to fly core devs together for our \[unintelligible 01:08:02.12\] every year, in September. But otherwise, they stay out of it. Basically, they just say "Hey, you come to us with what you need, and otherwise we are never going to try to influence the development of Python itself", because that's viewed as like a political wing kind of coming in and influencing the language, and that's just not how the PSD is structured, or its mandate anyway.

So to us it's acting more -- I don't wanna say a piggybank, because that discounts the great people at PSF and how they've always been very helpful when we've needed stuff, but... Basically, they just say "Come to us with what you need, and otherwise we're gonna leave you alone and let you do what you want."

**Adam Stacoviak:** Well, Brett, it's been awesome catching up with you. This PEP talk -- whoops, sorry; that was a good pun... It has been a lot of fun catching up with you for one, but then also just seeing -- I didn't rehearse that; it was on the fly... Catching up with you has just been a lot of fun. It's good to hear that the Python community is taking the right steps thanks to Guido foreseeing (I guess) his own future for one, and the pressure on him, and then how to provide a new way... And even better, to not actually put it in writing at first, and let you all figure it out. I feel like that's really been the best \[unintelligible 01:09:15.00\] Would you agree with that?

**Brett Cannon:** Yeah. I mean, I think it's worked out for his personal well-being, and I think it's gonna work out well for everyone. I'm hopeful for the future.

**Adam Stacoviak:** We'll have to maybe to something like more often too, where we talk about the underpinnings of Python and the community, and how the council is working out. Maybe the three-year check-in, as you mentioned.

**Brett Cannon:** Yeah. Hey, I've gotta do what I can to get my next four guest spots on, so I can \[unintelligible 01:09:42.19\]

**Adam Stacoviak:** We'll get you your ring soon enough.

**Brett Cannon:** Happy to be on here if you want.
