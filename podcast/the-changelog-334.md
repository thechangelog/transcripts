**Jerod Santo:** Hello, and happy UTC time to you, wherever you are listening to this, whenever you are listening to this... Just adjust that to your locale. Hey, this is a little bit different Changelog today, a little bit of a hybrid. We are mixing and matching JS Party with The Changelog. We hope you like it. As I say on JS Party sometimes, if it's bad, then we apologize in advance; if it's awesome, well thank you in advance. So you can be the judge of that.

I'm joined today by an awesome panel, JS Party style.

First of all, we have a special guest, Kim Crayton. Kim, welcome to The Changelog.

**Kim Crayton:** Thank you for inviting me. I'm happy to be here.

**Jerod Santo:** Kim, you are the Chief Encouragement Officer (CEO) - I love that, Chief Encouragement Officer - for the under-represented and marginalized in tech. Now, if you haven't met Kim, you probably haven't been to a technology-focused conference lately, where she's been doing awesome keynotes, even dancing into the room sometimes... Really powerful, enjoyable, awesome talks. I bet everybody else, Kim, who has met you, knows exactly who we're talking to here.

**Kim Crayton:** Yeah, it's what you've just said - if you like this show, that's great (in advance), if you don't, we apologize in advance... I come with a disclaimer as well, so I'd just like to put that out... My slides - the first one has my top title, whatever I'm doing, the second one has my name and all my Twitter stuff, so you can follow, and my third one is a trigger warning - "My job is to make white people uncomfortable." So that's how we roll.

**Jerod Santo:** Okay. \[laughs\] Very cool, very cool. Well, I love people that who put it out there, like "This is what you're gonna get, and there's no surprises." That's awesome.

Now, Nick Nisi is here. Nick, this is not JS Party, but here you are. Welcome!

**Nick Nisi:** Thanks, I'm happy to be here.

**Jerod Santo:** Nick and I actually met Kim a couple years back at NEJS Conf. We were co-organizers of that conference, as well as co-panelists on JS Party... And Nick and I had Kim's keynote at NEJS Conf; Nick, you were dressed up as a wizard, isn't that right?

**Nick Nisi:** Always. I mean, especially that day, but typically...

**Jerod Santo:** Because it was Tuesday?

**Nick Nisi:** Yeah. \[laughter\]

**Jerod Santo:** That's your Tuesday costume. So a little back-story on that - Nick is the MC at NEJS Conf, and every year we have a different theme for the conference. And whatever the theme, Nick will dress up in a costume on theme; he's been a wizard, he's been a train conductor, he's been a safari leader... I don't know, what else have you been, Nick?

**Nick Nisi:** An astronaut. Those three and an astronaut.

**Jerod Santo:** \[00:04:03.15\] Very cool. Well, it wouldn't be The Changelog without Adam, so of course he's been waiting here silently to be introduced. Adam Stac, what's up, man?

**Adam Stacoviak:** Hey, man. How are you?

**Jerod Santo:** I'm good. I'm feeling a little odd. I don't know if I should do the Changelog shtick, if I should do the JS Party shtick, but...

**Adam Stacoviak:** Do them both, man...

**Jerod Santo:** Do them both. So we have a topic today, and our panel will take up the topic. It can be a bit of a touchy subject; it's definitely an interesting and a very relevant subject that all of us face on a day-to-day basis, in different ways... And it really has to do with our relationship with regard to our ethics, and our own morals, and that relationship with organizations, or corporations. The genesis of this conversation came from two different places. First of all, another JS Party panelist, Chris Hiller, aka b0neskull - b0neskull brought this up as a potential JS Party topic, and it is this idea of ethics with regard to software engineering, with regard to companies that we work for...

Let me just read a little bit about that, what he said with regard to this website that popped up called npmuninstallfacebook.com. He said "This is similar to conversations around ethics in software engineering. Traditionally (and he put a question mark there, so you know it's controversial), developers have felt exempted from asking these types of tough questions of themselves and the companies they work for, and in recent years many are saying "Yes, you have a responsibility to be ethical." At the same time, others vehemently disagree, but the interesting thing is does this same question not only concern the software that you yourself build, but does it also extend o the software that you consume?" That I think is maybe the new conversation that we're starting to have, which we haven't in previous years or generations.

So the other thing that kicked this off is a website which I previously mentioned called npmuninstallfacebook.com. We'll link to that in the show notes. So this is a list of open source projects that are alternatives to open source projects created or substantially backed by Facebook. This was put up by a U.K.-based designer Andy Bell, and has generated some controversy, some conversations about this topic. I'll read what Andy said here, just setting the stage for what we're all gonna discuss. He says:

"Facebook's relentless abuse of their position is making them difficult to support. Unfortunately, their products and open source projects have a large impact on our everyday life. Some people understandably want to distance themselves as far as possible from Facebook, so this site provides alternatives to well-known Facebook products, or products that are heavily reliant on Facebook technologies.

This is not a call to boycott Facebook or their open source contributions. People are, of course, welcome to make those decisions on their own etc."

So he has a website of alternatives, if this is something that you want to look into, and he says people are, of course, welcome to make those decisions on their own. I think that's the key bit, and that's really what we'd like to talk about - making those decisions and all of the different things that go into those decisions, and how we can make healthy decisions for ourselves or our friends and families, for the community at large, etc.

One thing I would like to note before we get into the thick of it is that while this website and a lot of this conversation will use Facebook as the example, we do not necessarily want this to become a -- we don't want to look at the particular aspects of what Facebook is doing and focus solely on that. We wanna use Facebook as a lens for the bigger discussion of organizations whose values, whose actions contradict or offend our own. I'd just like to put that out there. We have listeners at Facebook, we have Facebook contributing to open source; we're not here to trash on you, we're here to have a conversation... And Facebook has brought a lot of these things to the forefront because of things the company does, and because of the huge contributions to open source, and that dichotomy.

\[00:08:17.00\] With that said, I would love to start this conversation thinking about it from the consumer perspective. So consuming organizational products, and our relationship to organizations, whether it's Pepsi, Facebook, your local grocery store, whatever it is - where do we draw lines with regard to our use, our consumption of businesses, things, and the beliefs or the actions of the businesses themselves? I'll open it up for anybody to hop in.

**Kim Crayton:** I'm gonna start with -- there's a question that is even below that.

**Jerod Santo:** Okay.

**Kim Crayton:** And this is a question that why I'm so challenging in pushback in this space is because the vast amount of individuals who are asking these questions aren't in the position or have the experience or the perspective to even begin to answer these questions... And it is when we do not prioritize the needs of the most vulnerable in our community these things happen. And these are the questions we need to have.

I am not a diversity or an inclusion person, I am a business strategist, and I am always talking about "Lack of inclusion is a risk management issue." Lack of inclusion is a risk management issue.

We're looking at Facebook as the case study today... "Move fast and break things" - that was just a way to do this; it's how development was done then. You just kept going, you really didn't stop to think about what you broke and how it broke and how it affected people, you just kept moving on and on and on, and that is what is undergirded in our whole community currently. It is this "Keep moving, keep moving, keep moving at all costs", and so ten years later you have "Oh, crap. We kept moving", and now you're seeing the negative outcomes...

**Jerod Santo:** We broke things.

**Kim Crayton:** Exactly. But that was the intent though. The intent was to break things, but you just did not have the perspective of how those broken things were gonna impact a larger community. And that is the conversation I like to have... Because when you don't have the people who are gonna be the most vulnerable and have to deal with the impact of you breaking things at the table to have these discussions, you won't see it until ten years out. Because now what it becomes is -- all this stuff is like a parasite. It now becomes eating on those people who created it.

The marginalized groups have been talking about the pain of this for years. It's not just Facebook - it's Twitter, it's Reddit, it's all of these spaces; it's Stack Overflow... It's all of these spaces. We've been saying that we don't feel welcome, they're not safe for us, but now that it's bothering you guys, now it's "Oh my god, let's run from Facebook...", but we've been telling you it's been a problem. We told you that bots were out way before everybody started talking about bots. And these are the conversations we need to have.

Having diversity on a team is not a good-to-have, it is a business imperative, because at some point we are gonna start being held accountable legally for the breaking things and the problems we're causing.

**Jerod Santo:** Yeah, absolutely. So let's talk about the perspective of an individual with regard to relationships to these organizations who are moving fast and breaking things. From a consumer level, where are our levers, and when and how do we pull them in order to forward our own lives, and not contribute to the problem, but contribute somehow to the solution?

**Kim Crayton:** \[00:12:15.07\] Well, I'm looking at this list of things, right? All of these things that are on UninstallFacebook are things that only a sub-group of people can do anything with. When we're talking about your average consumer, where we made our mistake (I believe) as an industry, was the narrative that tech, computers and technology is always right, and "You're safe with us", so the average consumer did not ask questions, did not think that it was necessary to understand all these things that they were checking off.

When you get a new app and they're like "Do you wanna sign up with Facebook, or Google...?", because that's easier, the average person is gonna say "Yes." I'm always "No, we're gonna do e-mail", because then I can control these things; you're not gonna be connecting all these things up. But the average consumer does not know that, because they've been trained very well that this technology that we're creating is infallible; it is the thing that's gonna solve all these problems. So when you look at Facebook, that was it - they were trying to solve this problem, and they created so many more by doing that.

It's hard when you have a grandmother who lives in one part of the country, in one part of the world, to disconnect from Facebook when their grandkids are on the other side of the world and she wants to see them and talk to them.

**Jerod Santo:** Right. That's why I think it's fundamentally a little bit different conversations at the consumer level versus maybe the open source level. This NpmUninstallFacebook - these are open source project alternatives, so it's really just at a much deeper, higher level... Deep and higher level are opposites, but really, speaking to developers, what we can do potentially to disassociate from these projects, the consumer-level conversation - I know, Adam, you've been thinking about this a lot - is much more broad-sweeping, is much more difficult, and a lot of it I think plays into... It's very difficult to compete with free, especially when you can't afford to choose something that costs; like free Gmail versus "pay money for FastMail" or for an e-mail service that will protect your privacy, just for one example. As a person who has means, I can make that decision, because I can deal with the $5, the $20/month or whatever it is, but for a huge group of humanity free is the only choice, and when they aren't informed about what they're actually trading for that free, then they're undermined.

**Kim Crayton:** Exactly. Because I would assume that many of them, if they truly knew what they were trading -- I would pay $5/month. Because it's no different than when you had a phone plugged into your wall. We were used to paying for things, and when we couldn't, there were systems and programs available to help those who could not pay.

**Jerod Santo:** Right.

**Kim Crayton:** But when you attach free to that - you're right, people don't think about... And because we've trained them that "We've got you. We've got your best interest at heart." Well, Adam's best interest and my best interest I'm sure are not the same things... I'm gonna be honest; it's not that one is worse than the other, but we don't have the same lived experiences.

**Jerod Santo:** Right. But with regard to privacy do you think you have different best interests, for example?

**Kim Crayton:** Probably, yeah. Yeah.

**Jerod Santo:** Okay.

**Kim Crayton:** \[00:16:03.25\] With the work that I do with HashtagCauseaScene, I currently have people in my community who have made sure that I have the financial resources and otherwise to make sure that my personal information has been taken off all these brokerage things, so I don't get doxed. And many of you aren't thinking about that; that's not how you're living your life. I'm really pushing the envelope and I'm thinking -- because even when I'm speaking at conferences... When I spoke at your conference, my threat level has gone up. So I'm thinking when I'm going to conferences, when you bring me in to speak, "Have you thought about my security?"

**Jerod Santo:** Right. Okay, so I see what you're saying with regards to the magnitude of the need, but fundamentally, both of you have need for privacy, but yours is tantamount, whereas his is - just for an example, Adam - not as tantamount; it's not as paramount or compulsory.

**Kim Crayton:** Well, it's just different. He has different concerns. I have concerns like -- on Facebook, I have to make sure my mom and my cousins or whatever don't attach me as friends, so that people cannot go back and harass them; so they can't find me that way. These are the things I'm having to think about. Do you think about those things? If not, what you think about doesn't make it wrong...

**Jerod Santo:** Right. It's just different.

**Kim Crayton:** ...but that means you don't have the perspective to make those decisions when you're building these things out that will protect me.

**Jerod Santo:** Right.

**Adam Stacoviak:** I think anytime you build something you have a diverse set of people as concerns, you know? I may not be aware of the particulars of your concerns, but I think as software makers -- you know, we say often here on this show and others, and you've heard me say this here, "There's a human on the other side of this code, and we have to take that into account." Not a particular color person, or a race color person, or anything like that - it's a human, and as fellow humans, we have to take everyone's concerns at heart when building technology. It's responsible ways to build, so I'm fully with you on that.

**Jerod Santo:** Yeah, and it seems like the "Move fast and break things" is explicitly not doing that, right?

**Kim Crayton:** I would argue that they probably thought they were. Again, when I'm looking at Twitter and Facebook and how they're rolling out these new things -- okay, this is my role, to push back...

**Adam Stacoviak:** \[laughs\] Push it.

**Kim Crayton:** ...I'm gonna disagree, because just because it's humans, that is the problem. Whiteness assumes that everyone is having the same experience. We are not. We are not. Where you feel safe, I do not. So just human is not enough for me and my safety, and that's where we're missing the boat. So I'm not saying we have to just get rid of white guys; no, I'm saying we need to bring other people in and have these conversations that challenge this narrative, because "humans" is the same thing as "all white people." No, it's not the same. We have very different needs. And yes, we are human and we don't want to, at that level - it's a very broad level - not cause harm, but we see it happening every day, and I'm gonna tell you, I'm sure that Twitter had the same, "These are humans. You can see the stuff that they're rolling out and the people that they're now blocking", and it's like, it's activists. It's people who are raising their voice and saying "Hey, we've been hurt, but we're the ones that are getting blocked."

**Jerod Santo:** \[00:19:44.18\] Right. So the difficult part with corporations is that a corporation is a bunch of people acting as one, but it's also a bunch of people. So there's individuals in there, so it's very difficult - I've said this before - to attach either benevolence, or evil, or any sort of human characteristic onto a corporation. Now, we know that they have incentive structures, and the ultimate incentive structure of these corporations is the bottom line, because that moves the stockholder value, which is their ultimate goal. So that incentive structure definitely informs the way the organization works as a whole, which we know starts at leadership, but there's so many individuals that it's difficult to say "They thought they were doing the right thing." It's like, "Who are they?" Certain people probably did, certain people probably didn't... It's just very difficult to pierce that corporate veil and see the people inside there. Nick, you were gonna say something...?

**Nick Nisi:** I was gonna say something along those lines... But related to what Kim is saying, I think that maybe the problem sets that they're trying to solve for just aren't solving for the problems that Kim has, and other have, maybe because there is a lack of diversity, and that's just a well-known thing in this industry. So it's definitely stemming from that, or most likely stemming from that.

**Kim Crayton:** What I'm saying, and how people take it - it's not about moving resources or expanding more resources; when we focus on the most vulnerable, everybody is taken care of, everybody feels safe. That's just the way that is. So speaking to what Nick just said, it's about - you're solving the wrong problems; the problems you think are important... Every city now has scooters on every corner, but Atlanta is a car city--

**Jerod Santo:** Talk about dangerous... \[laughter\]

**Kim Crayton:** Atlanta is a car city. What business model is this? What problem are they solving, if they're not over by Georgia Tech, or by Emory? What problem are they solving?

**Jerod Santo:** I don't know.

**Kim Crayton:** Is that a problem that this community needs? And without those individuals at the table... So it's not about like getting rid of white guys, or flooding companies with people of color, even though that would be great - even just to move the numbers some would be great - but it's about have people... And not tokenizing people. Coming to these communities and saying, "You know what, we screwed up. We don't know how to fix this", because you don't. "How is the A affecting you and causing you harm in B?" Because you don't even see it. So it's not even about blame. I do not know what it's like to be a white guy. I don't what it's like to be a white woman. I don't know what it's like to be a person of Asian descent. I can only speak to what I know about my experience as a black woman who grew up in the South.

**Jerod Santo:** Right.

**Kim Crayton:** And there are particular things that are happening as we see it right now -- we're gonna talk about ethics... What we're seeing right now when it comes to -- we saw in the 2016 election, it amplified into 2018, and it's going crazy now coming up to 2020 with these bots that are mimicking the voices of black women.

**Adam Stacoviak:** I'm not familiar with this.

**Kim Crayton:** Exactly, exactly. This is what I'm talking about. There's been a lot of research on this. The Russian bots that were on Facebook in 2016 -- and I've said this before, what they were doing is they were targeting black communities with disinformation on both sides, but they were mimicking a black woman's voice, their vernacular and the things they were saying.

**Adam Stacoviak:** Like an actual voice, or written tone?

**Kim Crayton:** It was all textual.

**Adam Stacoviak:** Okay.

**Kim Crayton:** \[00:23:52.25\] So like trying to use how we say words, or whatever; the avatar was a black woman, and all the pictures on there were... And it's happening now big-time. There are two -- Cory Booker and Kamala Harris have announced, it has exploded, and you see it on Twitter. And when white dudes who are in info security come into my DMs bringing it to my attention because now they see it, there's a problem.

**Jerod Santo:** You know it's in big numbers at that point - is that what you're saying?

**Kim Crayton:** Exactly, exactly. And they're commenting on it, and they're like "Oh my god, what is going on?" and we're like, "We've been talking about this." Actually, two of my podcast episodes were called "Tech's attack on black women." Some people can attribute this to Gamergate, some people can attribute this to fandom; it's been happening in fandom circles, where they were testing out some of these bots, and now it's just on a huge scale.

**Adam Stacoviak:** Do we know who "they" are when you say that? Who is "they"?

**Kim Crayton:** Oh, yeah. Like I said, I did two episodes with a person who is -- one's named Asher; she and her group were attacked... They used to watch -- I forgot, it was a Disney show... But they had a fandom and then -- I did several... I'll drop it, because I did several episodes.

**Jerod Santo:** Yeah, give us those links and we'll put them in the show notes for this episode.

**Kim Crayton:** Yeah, because actually I did -- Digital Sisters is one, and then I went to two professors who are white individuals who have been studying this stuff as well. I've talked to the person who wrote Automating Inequality, I've interviewed the author of Technically Wrong... I've been hitting all these different things to get this message out that these communities are being inundated and being harmed by this stuff.

Now, I know I have a small community, but the fact that this is new to you, and this has been on the news, this has been in the press, this is one of the things that Twitter -- Jack went to Congress to talk about... These things are huge, and it started in the Facebook community.

**Jerod Santo:** Yeah. It's important that these things are brought up, because like you said, the fact that -- I knew that some of this was going on, I didn't know it was specifically targeted or imitating black women accounts or black women... The question that I always come to is -- everything starts with a conversation, so "What can we be doing about it?", well, we're having the conversations, we're bringing awareness to the fact that this is happening; that's a starting point, that's what you've been out there doing, causing a scene, right?

**Kim Crayton:** Yes.

**Jerod Santo:** You've been doing this work to represent the people who aren't here to talk for themselves, so that's awesome... When it comes to ethics and technology... I know you're not saying "Who's to blame?", but is it to Twitter to -- because we all agree that these bots are unethical and this is ridiculous, and if we had a red button we could push to stop this from ever happening again...

**Adam Stacoviak:** ...we'd push it.

**Jerod Santo:** 99% of us, everybody except for the guy who's running the bot account, we'd push that stinkin' button immediately and be like "This is ridiculous, push the button." But is there a button? Can Twitter fix this? How do we hold them to the fire? etc. I don't know.

**Kim Crayton:** Well, one of the things is -- let's get to the ethics things. I did a closing keynote at the 2018 ScotlandJS, my topic was "Do no harm" and I was talking about "We need a Hippocratic Oath." Tech goes across every industry, and this is why I stay optimistic though; because police don't think that I'm pessimistic at all. The fact that I'm in tech and I can have these conversations -- I can't have these conversations in law and medicine; it's only because tech is now grappling with these things that I can have these conversations, and I can be as blunt and honest as I need to be to get people to understand. And once tech figures this out, other industries will have to change, so I love being in this space, because I feel so empowered.

\[00:28:19.03\] So we need to talk about a Hippocratic Oath. And I'm not even talking about legislation, I'm not even talking about when people are talking about -- yes, there needs to be help for employees; I don't know if that looks like a union or what that looks like, but we've done a lot of things based on privileges that everybody didn't have in this space, because we could, because no one had our hands to the fire. So we need to go back and look at ethics - can we come up with a code of ethics that is universally just agreed on? Just like if you want to practice medicine, if you want to practice law, these are things you have to agree on. And when you are proven to have violated those, there are several sanctions or consequences to those behaviors. Right now we don't have that. We don't have anything that's worthy of "If I do wrong, will I be held accountable?" We don't have that.

You look at when they all went to Congress, and the questions they were being asked. Those senators have no idea what they were talking about.

**Jerod Santo:** They really have no clue, do they.

**Kim Crayton:** And so all of us techies are sitting there, watching, like \[unintelligible 00:29:34.03\]

**Adam Stacoviak:** The internet is a series of tubes. You get answers like that.

**Kim Crayton:** Yes! And so they're not even informed. So I don't want them making any legislation that curtails our abilities to innovate, no! I will rather us decide for ourselves that "You know what, this is not personal." As you said, I don't think there are tons of bad agents out there; they're just people who cannot make choices for other people, and that's why I put myself in that as well. If I'm a nurse or a doctor, if this is not my specialty, what do I do? I go ask someone else who specializes in that. Why is that so hard to believe, and why is it so hard for us to grasp, and why does that not equate to value in money? Why do people want to continue to talk to me about this and think I am supposed to do this for free, where if your direct deposit as a developer didn't hit your bank account you'd be really pissed off? That's another question we need to talk about.

**Jerod Santo:** Absolutely. But that does cross the line now in open source, because it's a whole different game...

**Kim Crayton:** No, that's not open source; I'm not open source, I'm a businessperson.

**Jerod Santo:** Well, I know, but when you talk about developers putting their time in without getting paid, you are talking about open source.

**Kim Crayton:** No, I was talking about people who work at a company; I said if their direct deposit did not hit their accounts.

**Jerod Santo:** Right.

**Kim Crayton:** These are people who are being employed as developers. I wasn't speaking about open source at that point.

**Jerod Santo:** Gotcha.

**Kim Crayton:** I'm talking about if your job is to go to work and write code and you get an agreed-upon amount, and that check did not go into your account on the first and the 15th, you have a problem with it. Why are my skills so downgraded as to "Oh, let's have coffee." "No, I'm not doing free consulting."

**Break:** \[00:31:37.10\]

**Nick Nisi:** So you say you don't want Washington to regulate this because they don't know what they're doing, and I totally agree with you there... But how can we do this? Would this be self-regulation, or what do we need? Twitter and Facebook--

**Kim Crayton:** Every industry starts with associations. Why don't we have associations? Why don't we have guilds? Why don't we have something that people -- just like this conversation we're having; you said we need to start with the conversations; we're not having the conversations, and we're not having the conversations in volumes enough and scaling enough for people to understand this.

I tell people all the time, I understand why the Google Manifesto guy was upset, I totally get it. He was being required to do stuff that he absolutely did not sign up for and did not want to do, and this is why his case was thrown out with the employment people, because what you did was not violate that, what you did was violate the company policies, which is when you sign that contract, what you said on using your company's equipment caused a problem for your company. That's why you got fired, not for what you said; it's how you said it and how you did that.

Why do we force people who have absolutely no desire to understand unconscious bias, to force them? It's not changing anything. We need to have these honest conversations. I need to hear him, or people like this. What about this do you not think is good for the bottom line? This is why I said I don't even talk about this from "This is the right thing to do" - no, this is about business.

**Adam Stacoviak:** So let's talk about the association idea. If you have an association, is it a global association, is it "Hey, you cannot put code on this server and run it in certain capacities unless you agree to these oaths", or things like that? How do you see that playing out? Is it a country basis, is it a global basis? Because I do see, like you've got associations for dentistry, or you pick your trade and you've got some sort of association that may not be the only bar to cross or agree to to play, but there's some sort of enforcement, and that requires representation responsibility, and then clearly just the ability to enforce. How do you do that?

**Kim Crayton:** Well, at this point we still have people who are upset that we have codes of conduct. We need to get that across. That is a bare minimum.

**Adam Stacoviak:** I don't understand that...

**Nick Nisi:** Absolutely.

**Kim Crayton:** A code of conduct is so reactionary; that is putting the bare minimum... And that's what i tell people - please do not copy and paste a code of conduct; please do not put the code of conduct and thinking it's gonna solve your problems. A code of conduct is the very bare minimum of what it takes for everybody to feel that they can participate in any community. And we still have people who are arguing about that. We have people arguing that we should change the wording from "master/slave", and that's in open source. Why is it that an argument?

\[00:35:45.06\] I don't even think we're near an association, because we can't even have the conversations, and this is why when people are like "Why did you start HashtagCauseaScene?" etc. - because I got sick of people getting to the line of discomfort and backing up. Let's go through the discomfort, so we can get to the other side. Because right now we are causing harm to all stakeholders - people who work for us, people who invest in us, people who buy from us, and people who partner with us. We're causing harm to our global community that we should not be doing, and we need to have these conversations. Yes, they're uncomfortable. They're uncomfortable for me. Do you think I wanna have these conversations? No. Do you think I wanna have these conversations over and over again? No. But I do it because I recognize it necessary; also, because I'm an educator. I am certified special needs. I had students of all levels in my class. We all had to get to the same finish line, but I recognize that everybody wasn't gonna get to that same finish line the same way, at the same time.

**Jerod Santo:** Yeah. Repetition is the key to education.

**Adam Stacoviak:** The timing, too... I mean, sometimes people don't come to a conversation as soon as they could or should, or their awareness is behind others. There's always gonna be a trickle effect, so to speak, to your awareness to something, to Jerod's awareness and my awareness of it; and then at the same time how impactful it is to my personal life if I get involved in the conversation, or if I'm motivated to. So everybody has a version of that for themselves...

**Kim Crayton:** Exactly.

**Adam Stacoviak:** ...and I'm glad that you repeat yourself, because you need that remembrance and repetition in scenes like that... Because I may begin to follow your Twitter feed and get caught up today, whereas someone else has been following you for six months to a year (or whatever the number is) and they're more aware of these concerns. And for one, I applaud you for your courage to do this kind of stuff, because that's what it takes, and two, we want you on this kind of show to share these kinds of things, because we just don't know or we're just not that aware, and we need that as a community, not just as individuals.

**Kim Crayton:** And that's been the thing, and again, I'm gonna push back -- I don't do this because I'm courageous; I do it because it has to happen. It has to happen. What I can't abide by is, like I said, the grandma who all she wants to do is see her kids, her grandkids, and all her personal information is just gone; she had no say in it... And you can say she agreed to these terms - dude, come on now. Ain't nobody reading that. You already know that.

**Adam Stacoviak:** \[unintelligible 00:38:26.25\] documentary about that.

**Kim Crayton:** Yeah. This is where I start all -- and I don't know if I did it at that talk, because this is when I was really recognizing... I was morphing when I was at your conference, because I was really recognizing "Hm, I need to bring some education to this." So I start every talk with "Let's define these terms." So the terms are -- I start with privilege. Privilege is simply about access. People get so offended when people talk -- privilege is simply about who has the access. Some environments I have access where others don't. Other environments you have access. So it's simply about access.

Under-represented is simply about numbers. How many of something is there as a part of a majority? That is simply about numbers.

Marginalized is about treatment of a group. It's not about individuals, it's about the treatment of a group of individuals, and where they fit or are they marginalized or not.

The next one is about diversity, and that's just about variety. I use this as an example - when you're talking about crayola crayons - if my momma got me the box of four, yeah, I can draw some stuff, but it's gonna be ugly, because I can't do much. I'm not that creative. But if you give me that box of 64 crayons, it still may be ugly, but it's gonna be a colorful ugly picture, right? So it's all about variety, I have more to choose from. And inclusion is about experience, so it's about how safe or how included I feel in an environment, and you don't get to tell me if I'm included or not. I can only tell you that.

\[00:40:09.18\] This also goes back when people are like "Oh, I'm your ally." You don't get to tell me who is an ally for me. It's based on your demonstrated, consistent behavior. Do I feel safe enough to trust you, and trust that you will be consistent in your behavior to not harm me? That's what an ally is.

So for me, when we're talking about associations, when we're talking about all of these things -- look, we need to stop skipping steps. There are no simple solutions to these things. We need to go back to where -- because medicine didn't have this back in the day, when they were cutting off people's legs; they didn't have a Hippocratic Oath. But they had to go back and put all that in place.

**Jerod Santo:** Yeah.

**Kim Crayton:** But everybody wants these quick fixes... Because these things have been happening for a while, but the more we keep talking about blah-blah-blah, we keep doing harm. Can we go back and say "Hey, let's talk about square one. Where's the base level? What is the basic level of engagement?" and if you can't agree that a code of conduct is that, then man, you and I need to have a different conversation.

**Jerod Santo:** So can we imagine a world where we all agree on a code of conduct for a second? ...in an effort to move forward somewhere. So what's beyond that? ...because like you said, that's just a rudimentary, basic, reactionary thing. I get mad that we even have to have that -- I get mad about all this stuff, as a lot of people do. I can't believe that we even have to have conduct -- but we do. I'm not saying we don't need one, I'm saying it just makes me angry.

**Kim Crayton:** But why does that make you angry? Okay, going back to the classroom - my classroom management was so on point because every student knew what the expectation was. It was a very clear line, so that they knew if there was an infraction, what that infraction was, what the consequences of that was. Who wants to go in somewhere every day could be different? That's stressful. That's anxiety. So why are we viewing codes of conduct as anything different than "These are just the basic rules of engagement." And if people saw it like that, we might have a different conversation.

**Adam Stacoviak:** I think what Jerod may be describing was more along -- he said "man", I think maybe it's more like it's just sad that the world has to be that way.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Not saying that they don't have a place, because I'm fully with you on rules of engagement and expectation and clarity. I think that when you can participate in a group, whether it's a classroom or an organization or whatever, and you understand what the rules of engagement are, what's expected of you, what their lines are, what the rules are so to speak, I think that's so much more healthy than ambiguity. When you assume, we don't know what happens.

**Jerod Santo:** Right.

**Kim Crayton:** Yes.

**Jerod Santo:** A hundred percent.

**Nick Nisi:** I think that's the big problem - there's too much assumption. Too much of "This is the way that I work, and I see the world this way, so I assume..."

**Kim Crayton:** Exactly, exactly. Yes, and that's the problem.

**Jerod Santo:** And we are in more global, wide-reaching, really diverse community groups than we're used to. We're used to being hyper-local, often times inside your own family, where the established rules inside of your own family have been there implicitly or explicitly laid out by your parents when you were younger, but you know, just kind of like people don't need to have rules of engagement because they're implied, and when you move beyond those bounds, which... I mean, look at everything we're doing - it's at a global scale in terms of communities, and especially in open source. Everybody in the world (talk about access), everybody with computer/internet/network access - which I recognize is not everybody - there's lots of access which wasn't previously here... And so more than ever it's necessary to have these things, and like you said, Kim, it's relaxing or destressifying to have clear expectations... But I think when you asked about why do people care about the master/slave naming distinction - again, I think it goes back to the explicit vs. the implicit, or just the status quo, resistance to change... Obviously, there can absolutely be racist reasons as well, which I'm sure some people have, but a lot of it I think is just a lackadaisical status quo resistance to change.

**Kim Crayton:** \[00:44:36.12\] But that speaks to your privilege also, and that's a whole other -- because you've never had to consider these things. Whiteness has never been under exam. Everybody else is an immigrant, or whatever; we've had to be examined. Whiteness is the default. So when we challenge that and say "Well, no, why is whiteness the default?" then that's when you get the pushback.

I say this all the time - our economy, we need to stop acting like we're building widgets when what we need to be doing is helping people build knowledge. Our companies need knowledge. It makes no sense for you to hire me; I don't feel safe, so I'm not gonna contribute, and anything that I learn, I'm not gonna share, which means organizational leaders are not gonna be able to leverage that for competitive advantage or innovation; and I'm gonna take that with me, so now you lost that. These are the things that we need to be thinking about. This is why I said I'm a business strategist, I'm not an inclusion and diversity -- and inclusion and diversity is necessary for good business strategy.

This is not the Ace Hardware on the corner where everybody in your community went to the Ace Hardware. We're building stuff for people in countries I can't even begin to understand the language or the customs of.

**Adam Stacoviak:** Let's talk about that for a second, because that's something I'm kind of trending on... It's like -- Gary Vaynerchuk introduced me, I guess, to this topic idea a while back, in terms of thinking of the internet as a teenager. This was like ten years ago I think he may have said this, where it was like 15 years old, and now maybe it's a 25-year-old. We're operating on a platform that is now considered the world's table, and everyone is invited to it when and as it's doled out, whether it's through economic abilities, or literal network abilities to become connected to this table. And I think we're in a unique position in humanity, and across all of time, where we now are hyper-connected in ways we never were, where these problems had always existed, but they were in microcosms and smaller or more compartmentalized, and now they're at global scales, and everyone is coming with their concerns, and we're learning how to communicate those concerns; because I don't wanna hurt you, Jerod doesn't wanna hurt you...

**Kim Crayton:** And that's the work that I do. I tell people I'm not here to convince or convert., I'm here to educate those who no longer wanna be complicit.

**Adam Stacoviak:** Right. But I think the hyper-connectedness cannot be removed from that...

**Kim Crayton:** No, not at all.

**Adam Stacoviak:** We're in a whole different world now where not only are we super-connected, it can be analyzed, but then at the same time you can participate if you want to, you cannot participate if you want to, which I think is what some people do with Facebook... I personally don't participate; I have a profile, but I'm not involved in Facebook. I don't even tweet that much. It's not because I'm a weirdo or a...

**Jerod Santo:** You're weird.

**Adam Stacoviak:** I mean, I'm slightly weird... And I don't have a tinfoil hat, I don't have these concerns, I'm not a conspiracy theorist or whatever, but I just don't participate, because I don't wanna be analyzed by these companies. I don't wanna dole over my privacy to them. But at the same time, this connectedness - now we all are able to in very fast ability to share information that took a long time before. I think it was a comedian who might have said this, and it's probably the worst person even to use as an example, but people used to die trying to send a message to someone.

\[00:48:16.17\] Send a message from here to there, and it may be several states away or several hundred miles away, and a baby would be born before the message was delivered. We don't have that problem now. Messages are delivered on demand, in an instant, without regard sometimes to whoever gets this message. And that message is then received by a brain that has such crazy neurological connections that can't even be counted, in the trillions... And we only use 10% of it. We are unique beings in a world that's hyper-connected, and we are acting a fool, in all ways...

**Jerod Santo:** \[laughs\] We are acting a fool.

**Adam Stacoviak:** ...and we're just trying to catch up, and be good people, and influence those who are being bad to somehow either step back and get away from the table, or hand over control, or ask people that are not there represented to come there, so we can build better software. That's my overarching perspective to craziness in today's world.

**Kim Crayton:** And it's so funny, because I can give you the exact opposite of that... Although I'm not on Facebook, because I got off -- I mean, I'm on Facebook only because my family is there, and so that's how we stay connected... But I shifted away from Facebook because I live on Twitter, and it's so interesting that I find -- and I'm not gonna call any names, but you'll see these Twitter white guys who are all developers, who have a hundred thousand more followers, talking about how bad Twitter is. Yes, Twitter can be \[unintelligible 00:49:42.13\] it absolutely can, but it's the one place that I found my community. I've been able to create an cultivate a safe space for me on Twitter that I can never have done anywhere else. I could never have gotten the reach -- most of my followers are white individuals who want to learn from me; this never would have happened if it were not for Twitter.

**Adam Stacoviak:** Absolutely.

**Kim Crayton:** So when people say "Oh, let's burn that", no. No. This is also where I connect with other advocates, and other people who are doing this work, where I feel "Oh my god, I'm not by myself. This is where my community is." And those are the things -- because we're here. We're here. That's it. We're not going back. Now, how do we improve the experiences of people who are already on these platforms and the platforms that we're gonna build moving forward?

And if we wanna segue into open source... I did two keynotes during 2017 at Node conferences, right after the big blow-up they had about individual -- they had a code of conduct, but they didn't believe that they can enforce anything based on what their code of conduct said, and that was one of the big telling things about writing a code of conduct, but with no teeth it means absolutely nothing.

So I spoke at Node Interactive... My talk was basically "When good intentions go bad." On the surface, if you're on Twitter, you thought it was about this one incident and this one person. In my research, it actually was based on something that happened two years ago that didn't get resolved. And that thing that happened two years ago was a blow-up because of something that happened four years ago that wasn't resolved. And this is what our open source communities have become; they are these spaces where -- because I talked to Ryan Dahl; he spoke at JSConf EU 2018 (I spoke there as well), and he was introducing a new project... Someone introduced me to him, and he and I had a conversation then, and then we had a conversation afterwards... Because I really wanted to do an experiment/research where you think about community and connection (what we just talked about) at the beginning of these projects, instead of just focusing on code and pushing code and what this thing can do. Because it's open source, it will inevitably have a community, let's think about community at the same time. So we're iterating code, and we're iterating community at the same time.

\[00:52:23.01\] He and I didn't reconnect about that, because he wasn't sure the project was gonna go anywhere or whatever, but that's still something I'm interested in, and right now I'm working with the Selenium community on that...

**Jerod Santo:** Oh, cool.

**Kim Crayton:** ...to put in a code of conduct, and seeing how we can make that community -- and that's a really welcoming community already, but seeing how we can make that community have more diverse contributors, and all these other kind of conversations. This is the work that needs to be done; everybody wants to speed this up, but it takes time... We've gotta go backwards, like "Okay, here's where we are. Let's stop for a moment, let's take a breath", like you had to do at the beginning of this talk show. Let's take a breath, and let's put some things in place, so then we can move forward.

We cannot keep our heads down and focus on code and think community is gonna take care of itself, because your house -- or I don't know who spoke about this and was talking about "In my house..." Your house and your neighbor's house are run totally differently.

**Jerod Santo:** Oh, for sure.

**Kim Crayton:** So we can't go by "how it was done in my house."

**Jerod Santo:** Yeah, exactly.

**Kim Crayton:** We have to come up with universal house rules.

**Jerod Santo:** Exactly. A couple thoughts on that... Super-interesting, I love the idea of what happens in open source projects when you put community, code of conduct - all these thoughts up front; it's similar to the security idea, so a lot of people will just build the thing and then they'll try to bolt on security afterwards... And security folks have learned that that's a really bad idea; in fact, it's darn near impossible to just bolt on your security later. Similarly, bolting on your community at the end seems like it's disastrous as well.

If anybody could have a successful project for the start, it'd be Ryan Dahl, the starter of Node. I think the thing he's working on now, Deno, has a great change; I don't know if he's made it to a public release yet, but...

**Kim Crayton:** That's the project he and I were talking about.

**Jerod Santo:** That's the project. Yeah, we haven't heard much about it recently, I don't think. Nick, have you heard anything about Deno since that talk?

**Nick Nisi:** Yeah, I've been seeing a bit of activity on GitHub, with projects around that, and blog posts and such, so... It's still active and alive. I haven't personally checked it out though.

**Jerod Santo:** Yeah. Hopefully that's still a thing that's coming, because it's very exciting. One thought I had... I think one of the reasons why this does happen, like you said - when you start an open source thing, it's gonna have a community; most of us never think that way, because a lot of open source code has no community. It's just like, you build the thing for yourself, and you put it out there. And a lot of the people that we interview on this show, we find out they didn't necessarily expect any of this to happen. So it's hard to be intentional when you're just slinging some code that you wrote for yourself onto the internets, and then all of a sudden, fast-forward and all these people are using it, and now all of a sudden you're like "Holy cow, I'm not ready for any of this stuff."

**Nick Nisi:** That's a great point.

**Kim Crayton:** But that goes back to, again, when you're building a business as well. For me, again, as a business strategist, these are things... You were saying about stockholder value - many of these companies are already thinking about that at the beginning, so why aren't they thinking about these things at the beginning? So even if it's you're the one guy who is working on this thing, if you have made a decision to make this public, this is something you should be thinking about whether someone comes to it or not. This should be the baseline. If you're gonna keep it on your computer - that's great. But the moment you decide "I'm gonna put this out in the world..." Because you can't control it once you put it out in the world. So these are the things you need to start thinking about.

\[00:56:01.12\] And it's just like basic stuff, it doesn't have to be -- they're basic things you can think about. Let's say before you put this out here, "Hey, we're gonna put this out here... One of the pull request things we're gonna have - we're gonna have a code of conduct. If you want to participate in here, help me build this code of conduct."

**Nick Nisi:** But do you think that that's really the way to go forward with that? If you're an individual creating something, and wanting to put it out into the world, it's obviously solving something for you that's very personal to you, but at the same time, like we've talked about, that's only your perspective. It may have detrimental results for someone else...

**Kim Crayton:** Exactly.

**Nick Nisi:** So is it really setting a baseline welcoming standard like a code of conduct, and then from there trying to build the diverse community to come in, and then being receptive to like "This is a terrible idea" or "The way this is implemented could have--", I don't know...

**Jerod Santo:** Well, that sounds like open source, "This is a terrible idea..." \[laughter\] That's how we talk to each other.

**Kim Crayton:** Exactly, "That's a terrible idea! Go back to sleep!" \[laughs\] Yeah, exactly.

**Jerod Santo:** Yeah, "Take this off GitHub."

**Kim Crayton:** But yeah, it's the same thing when I'm working with companies - they stop whatever they're doing and we work on core values. Because when you do the hard work upfront, it helps inform your decisions in the back-end.

I'll give this example - I'm working with Tito. Have you heard of Tito?

**Adam Stacoviak:** Yeah.

**Kim Crayton:** Not the liquor. The events--

**Jerod Santo:** Conferences, right?

**Kim Crayton:** Yes, exactly. They're in Dublin, and they're my current sponsors for the podcast, but I love them so much and their product that I'm working with them on helping them build this out... Because this is, again, a business strategist; most of these things are products or services, they're not businesses. But we act like they're businesses because somebody makes some money off of them. A business requires processes, procedures and policies, those things in place that help you scale, recover and grow. That's what a business is. Most of what I see out here are not businesses; they are products and services that are making money.

So what I'm doing is working with Tito right now, and the two founders - we're sitting down and talking about... Because they've been rocking this out, and they can admit - particularly Paul, his head has been in the cold for so long; he hasn't even been able to look up. That's not how you run a business. That's how you create a job for yourself. So what we're working on are core values that will help him, his team, everybody who comes in contact with his product understand how to make decisions, so that they don't have to have their hands on everything. If we put these things in place upfront, your moderating job will be so much easier.

People think it's making more work... No, it's making less work! Because there are very clearly defined expectations, and then when you have those rare times when things aren't clearly defined, then those are the times we need to come to have a conversation about that. But we're not even dealing with the basic things.

I had a client who one of her core values was beautiful things. It was so important to her that -- and it's something that you can measure, you can gauge. She was like, "I don't understand how I'm gonna measure this." For her, beautiful things were so important to her company that if she's looking at toilet paper for her bathroom, she has to consider that through the lens of beautiful things. That was one of her core values. But every decision she makes has to come through that, which makes things so much easier, because - we talked about arbitrary - now they're not arbitrary. When you're making hiring decisions, when she creates e-mails, they have to sound and be a certain way to implement for her core value of beautiful things, so her customers see consistent beautiful things throughout everything, her employees see it, her investors see it, who the company partners with sees it.

**Jerod Santo:** That's gonna make it pretty hard for her to buy toilet paper.

**Adam Stacoviak:** \[01:00:02.12\] Pretty hard... \[laughter\]

**Kim Crayton:** Well, not really. She just can't get that single-ply -- the roll that doesn't have the perforations on it... She can't do that. \[laughs\] But for my company, because that's not a core value of mine - you know what? If you're using \[unintelligible 01:00:16.06\] gonna use whatever I'm comfortable with.

**Jerod Santo:** That's right.

**Kim Crayton:** But that's how core values dictate the... And that goes back to when we were talking about ethics - that's where your ethics comes from; that's how you communicate. It's not about writing the mission statement and slapping it on a wall, or putting it on your website and going from there and thinking that's all you need to do. These things can be measurable, they're tangible, data-driven, all of these things, but that's what we don't have. Because we have individuals who want to solve whatever problems they see fit, and then they just put that out there. So an open source project, if it's not just sitting on your computer, if you put it on GitHub and it's an open project, you should be thinking about community from the start, even if no one comes. Don't you buy health insurance, or car insurance, because they wanna make sure your car is covered, whether you had an accident or not?

**Jerod Santo:** Right.

**Kim Crayton:** Again, lack of inclusion is a risk management issue.

**Break:** \[01:01:29.28\]

**Jerod Santo:** So let's talk about the developer who has something they think is worthy of the world, it's been on their computer solely so far, but they think "Hey, maybe some people will benefit from this", and they've listened to this episode or they've heard your talks and they think "Okay, I know I need a code of conduct. I don't know if this thing's gonna be successful or not, I'm just putting it up there', and they do what many of us do with our code, which is we copy and paste. So it's kind of like the limping approach; net benefit, worst than not having anything at all...? What are your thoughts on that? Maybe they read it, maybe they didn't; they just thought "I know this is what I'm supposed to have." We do that with licenses a lot of times. "Choose a license." "I don't know... I'll just take the easiest one from over here, put it into my project", not being very thoughtful.

**Kim Crayton:** Yeah. For me now this is the community part, because that's what it is. So you shouldn't be doing this by yourself. Worst come to worst, if it's all white guys - okay, at least there's something, so you can bounce some ideas off of. But when you're talking about community, that's what community is - it's about community, and it's not a community if you're the only person making these decisions. So just informally, "Hey, I wanna put my project out here. Can I buy the four of you coffee? Let's go talk about this thing. What things should I be thinking about? What things have you experienced? What things have you seen? Have you seen any articles that talk about how bad this is?" Blah-blah. You have to do the research. You don't just sit down and start coding, you sit down and you put out a plan, you have an endgame. "What is my MVP gonna be?"

**Jerod Santo:** You're giving me too much credit. \[laughter\]

**Kim Crayton:** \[01:04:00.25\] Well, you know it's gonna do something... Or are you just coding? Are you just writing code?

**Jerod Santo:** I don't know... Nick, do you always have a gameplan when you start coding? Sometimes I do. On my better days I've got a plan.

**Nick Nisi:** Yeah, I have an idea that usually changes, but...

**Jerod Santo:** Yeah, exactly. It changes as you go. Yeah, I mean, there is some isolation aspect to open source, and I think it's getting better; again, we're talking about the hyper-connected world online... But many of us are isolated. Of course, there's the stereotype of the overweight person sitting in their parents' basement, coding, and that's been broken down, thankfully, but still is out there to some degree... But those stereotypes are rooted in some sort of figment of reality, and there's a lot of isolated programmers, there's a lot of people that don't have local community, or maybe they are very remotely located geographically, and they never get past -- just like building this thing for themselves and then open-sourcing it... And the community is like a surprise, because they'd never had it before... Which is a sad state, but...

**Kim Crayton:** Yeah, I get it, I empathize, but I'm gonna say I don't care. Because again, we're hyper-connected, you can find... It's about effort. I tell people all the time, at this point we need to get comfortable with being uncomfortable. So if you want to create something that is about community, it has to be about community, and one person does not make a community. So if you're hanging out on Reddit, find someone you -- even this stereotypical fat, slobberly-whatever-thing person, they're playing video games, they're doing something. They're not that isolated, I don't believe... And especially as geeky as we are, we find fellow geeks very easily.

**Jerod Santo:** Sure.

**Nick Nisi:** Well, that's another problem with technology moving forward, because sometimes -- technology has made it easier for these small, isolated groups to find each other, that are not there for good intention.

**Kim Crayton:** Yeah.

**Jerod Santo:** Bad actors...

**Kim Crayton:** Yeah, and my thing is though -- and again, this is why I remain optimistic... They are not as many as we think they are... Because up until this point they've been the only one with the power, and the privilege, and the mics, and the platforms, and we're seeing it change. The more conferences like yours, and platforms like this podcast invite people like me on here, it emboldens other people like me to say "Hey, I can do this too." And there are more of us than they are of them. There are always gonna be bad actors. I'm not gonna run around trying to put out every fire.

**Jerod Santo:** Right...

**Kim Crayton:** I was having with a group of women yesterday, and I talked about the law of attraction - the more you focus on something, the more of that you get. So I'm gonna focus on the things that I can proactively do. Also, I don't like being reactive; that takes a lot of energy. So I'm gonna be proactive when I can, and that scales for me. HashtagCauseaScene came out of nowhere in March of last year, and I'm profitable. That's scale for me.

**Jerod Santo:** Awesome. Thinking about the bad actors - there's always gonna be these small, isolated units... It brings me back to the thought that I was thinking of, Adam, while you were talking about the hyper-connected world that we live in now, especially as software developers, and I think I've said this before - not sure where - but we really live (I'm talking about access), as software developers, at the height of human leverage, in terms of our ability to leverage... Meaning a small amount of people can now affect a large amount of people, like they never could in history.

**Nick Nisi:** \[01:08:07.23\] And I love it.

**Jerod Santo:** And that's awesome and terrifying, right? So Twitter, because of the platform it's provided, it's provided both the good and bad actors in any context, to amplify their messages... So when we talk about the ethics in software development, Kim, you rightly brought up other fields, which are important, such as medical fields, in terms of the oaths and whatnot; even more than that, one person can affect the entire (connected) population. It goes back to the old Spiderman, "With great power comes great responsibility." And I think where you were driving at, Kim, when I was pushing back with my isolated developer stereotype, it's like, that person has a responsibility to everybody else to not be that person, to not be completely un-networked, completely ignorant of these things, and to know that their software will affect the world, and it's gonna affect it in ways that they don't realize, because they do not have the advantage of everyone's shared experience.

**Kim Crayton:** Well, there are two points to that. One is it's gonna affect them as well, and they don't understand that. And the second one is, when I talk about the law of attraction and focusing on what I want and letting that expand, I also believe in starving the oxygen off things that don't need my focus. So although there are, as you say, both good and bad actors on Twitter, the bad actors have always had the privilege on the platforms, whereas people like me have not. I could not afford -- as long as I have internet and a mic and my Twitter, I can say whatever I want to. I never had that freedom before. So the bad actors have always had the platform and the power to craft my narrative. I for the first time can tell them, "No, dude. That's not how this is gonna work. You're no longer speaking for me." Then there are us coming in volumes. Where other people see chaos, I see liberation, I see movement, I see these great things happening. If you know anything about change, it does not happen when people are comfortable.

So these people who wanna continue to be isolated, they're gonna further isolate themselves until they're starved from oxygen. And that's how I just look at it. I have this thing, I'm not gonna debate you; I'm gonna debate you about my lived experience. I'm not trying to convince you about it. I'm gonna say what I have to say, and there are people who wanna hear that, and then those people will influence the people that they wanna influence, and that's how that grows.

I try to be as apolitical as I possibly can, but I'm gonna tell you, I live in Georgia, which is a traditionally red state. The fact that a black woman almost flipped this state to blue couldn't have happened without the internet. The fact that we wouldn't have known about how many ways that votes were being disenfranchised couldn't have happened without the internet.

**Adam Stacoviak:** Let's key in on that access you have to Twitter that empowers you. I think you said earlier that you don't use Facebook, you use Twitter, and Twitter is -- I can't recall the exact words you said, but it's basically your platform for putting your voice out there and shaping things for you, that is run by a corporation that has shareholders, and particular people, it does have a Terms of Service that you said a minute ago that you can say whatever you want, until a certain point, because there is an opportunity for them to disagree with you and remove you and block you and change the access and power you have...

\[01:12:05.21\] But what's interesting about Twitter in particular is that it's become a global utility for sharing small ideas. And what I mean by small ideas, not so much in their grandiose of the idea itself, but more or less how you communicate it; 240 characters or 280 characters I believe now is the limit (it was 140), and you do it in micro-ways, or in tweet streams, and things like that. You know, I'm describing Twitter to people who know Twitter... \[laughter\] I'm kind of giving the full spectrum here...

**Jerod Santo:** Tell us more! How does this work?

**Adam Stacoviak:** How does Twitter work? Yeah, you get what I'm saying here, but the point I'm trying to make here is this question is more particularly for Kim, but I definitely welcome others to join in here on this one, but what do you do when this thing that is a utility to so many is backed by a corporation and we have the similar we've had and talked about with Facebook (distrust) or other large corporations, or really anybody? We did this conversation through the lens of Facebook and the mistrust that we have had for them because of clear things out there... What do you do when this utility is no longer available to the masses, or it changes the rules?

**Kim Crayton:** I don't know if you're gonna like this answer, but it is what it is... Marginalized people are used to that. We have the skills and the -- what's the word I'm looking for...?

**Jerod Santo:** Fortitude?

**Kim Crayton:** No, it starts with an r... We have the resilience.

**Jerod Santo:** Ah, there it is.

**Kim Crayton:** Our lives have been what you've just described, so we adapt. We are very good at adapting. And Twitter has been that one thing where we've been able to adapt to our needs. Are we treated unfairly on that platform? Yup. Do we have to - whatever? Yup, yup. All of those things that we see in our everyday -- see, Twitter for us is just a microcosm of what our lives are like. We just get to share it, it just doesn't stay in our communities anymore. So if they change the rules, we'll adapt. We figured it out every single time. So it becomes this thing where "Oh, we get frustrated? We get on there, we'll cuss and fuss, but we're not going anywhere." Unless they shut us out, we're not going anywhere.

**Adam Stacoviak:** I'm glad you said that then. That's keying in on the very first thing we talked about, which was if the ethics of something you're involved in change so drastically that it's completely against your morals, do you continue to participate or do you adapt? How does that change your answer?

**Kim Crayton:** Well, let me be clear - when I say adapt, I'm not adapting my core values. I'm adapting how I now use this thing based on...

**Jerod Santo:** Tactics.

**Adam Stacoviak:** Right, your tactical approach.

**Kim Crayton:** Yes, because it's all strategic for me. So I'm gonna change my strategy on how to use this thing, with the understanding that it is immoral; but again, we say "Whose morals?" Because personally, it's not immoral, because they have a business model that is about shareholder value. They lost shareholder value that one month when they closed over 50 million fake accounts. Their price dropped. It showed right there, if anybody is interested, that it is not in Twitter's best interest financially to fight any of this. But we know that. See, that's the thing - the white people on there get so upset about that; we know that. The marginalized people on there who are advocating and getting to the other - we already know this. It is not in their best interest to shut down bots, to shut down racists. It is not, at all, because we saw the data when they did it and they put it and when it became public. Their stock prices dropped because now it's not showing growth. Even if these accounts were fraudulent, shareholders didn't care.

**Jerod Santo:** \[01:16:19.10\] Yeah. Couldn't that be shortsighted though?

**Kim Crayton:** It's all shortsighted. I mean, the whole business model--

**Jerod Santo:** Well, when you say it's not in their best interest, but you really mean it is in their best interest, right? It just isn't short-term, according to the shareholder value.

**Kim Crayton:** Yes, exactly. It's not in their best interest as Twitter to do this. They have no incentive to do it, let me put it that way. They have no financial incentive to do it, except for the fact that -- again, this is when you get into the "right" thing... Who's right? Who's defining what the right thing is? That's why I don't like code of conducts where people talk about "nice." Everybody has a different idea of nice. That's not something I can measure, that's not something I can hold you accountable for. Right now, with Facebook, with Twitter, with Reddit - all these platforms, there is nothing tangible that we can hold them account to, because they're the arbiters of what those decisions are.

First of all, I don't block anybody, and I have a strategy for why I don't block anybody... Because the work I do - my audience - is to educate white people. White people need to see how bad I have it. You need to see what I have to deal with on a daily basis. You need to be just as uncomfortable as I am, because it's the only way I can wake you up to "I am not having the same experience you are, period." I don't block anybody, so you can see anything on my timeline. I only will report if someone says something threatening, and I've got notes back from Twitter saying "Oh no, that's not what that was." They get to make that decision.

**Adam Stacoviak:** Yeah, they've been notoriously bad at identifying that stuff.

**Kim Crayton:** Exactly. So they get to make that decision. I mean, the shooter - I forget which shooting it was - who sent the message... It was a mass shooting, but he had sent a message the week before to a black journalist, who reported it to Twitter that he had been coming after her; they said it wasn't, and the next week he shot up a whole bunch of stuff.

We know what's out there, so our best interest -- it's just strategic. I'm gonna make sure I've protected myself physically as much as I possibly can. Because there's that variable out there. So I'm gonna do as much as I can to protect myself physically, my community is gonna do whatever they can to help me with finances or resources or whatever to make sure I'm physically protected. Someone's giving me a new laptop next week and he is amping up the security part of that, that I have no idea about. He's like "I've gotta put some more security stuff on there before I even send it to you."

So that is our lives. I've always been a person who walked out the house, and my race has always been an issue. That's how I've lived my whole life. So Twitter becomes this thing for marginalized people of -- although it's quite unfortunate, and it's quite threatening, and it can be very scary at times, that one or two or a thousand people does not negate everything else I've created on this platform. And so at some point - again, lack of inclusion is a risk management issue - Twitter is gonna have to deal with that. And you're seeing it now. Just like with all the people who are coming out of the woodwork, "Oh my god, I was did black face", and it's like every day now; everybody was made a black face and it was normal in the '90s. I'm like, "I was in school in the '90s and I don't recall this being normal, but okay." So this is what's happening.

These platforms can be for good. They are unearthing all kinds of stuff that people are having to face. They're having to face the things that they've done, or the things that they're doing, where they never would have been able to do it before. They've been in these enclaves, they've been in these quite little corners, doing and saying whatever they want to.

\[01:20:14.04\] So yes, Twitter can be problematic, but for me it's less so because I have a strategy. I could say that. That's what saves me a lot and why I don't get burnt out on Twitter, because I only retweet or comment to very specific things, when I know that is gonna educate my audience. Everybody else, I'm just gonna leave it there so y'all can see what people are saying to me.

**Adam Stacoviak:** I like that. It's like you have your own personal code of conduct of how you do, and you've got your rules of engagement, basically.

**Kim Crayton:** Most definitely. I have a policy of "Do I wanna be right or do I wanna be happy?" And I wanna be happy most of the time. So when I'm finding myself trying to force myself to be right, it's coming out of ego and I have to back off. Yeah, so I have very clear -- again, I walk my talk. That's how I navigate all of this.

**Jerod Santo:** One small question before we tail off and call it a show... I was just thinking about code of conducts again, I keep coming back to that; I'm just curious - because you mentioned bad ones - do you have a good... This is totally like a developer question, like "Can I copy/paste your code of conduct?" Do you have a good starter place for people who want to have a code of conduct that doesn't say things like "Be nice", but actually says actionable, engageable, clear things? Because a lot of us aren't very good at these kinds of things, and we'd love to have something like that.

**Kim Crayton:** I would start with the -- and I always get the name of it messed up... The Covenant?

**Jerod Santo:** The Contributor Covenant, something like that?

**Kim Crayton:** Yes, The Contributor Covenant by Coraline Ada Ehmke. Has she not been getting attacked... The stuff that she's dealing with -- I'm checking on her often, because of the stuff... And it's just a code of conduct. She is not telling people to adopt it, people are adopting it. So I can say for me that's a good one to start. Just to start. Now you've got to go through line by line, and based on what you want to experience in your community, what your community wants to experience, then you go in and tailor that. But I say that because it's so universal and so many people are using it... But you can't use it at face value. And that's another problem - there's no one-size-fits-all answer for this. I personally write my own codes of conduct with my clients. We write our own thing. It's very unique to that community or what that company is doing... Because every community is different. That's why people are like "Can you answer--", no I can't answer just one question. No, it's not gonna be easy, because every community, every organization, every event is different; they're dealing with different things, they have different people in there.

Even in my pricing I do a five-hour needs assessment before I even say what the strategy is going to be... Because I need to go in and see exactly what's going on. And again, this is the work that people don't wanna do. Everybody wants to do the "Let's get back to the code, because that's the most important thing."

**Jerod Santo:** Well, before we close, Kim, let's get you paid a little bit here - go ahead and tell everybody how they can contract with you, your business, how they get a hold of you, how they contact you to hire you to help them out with these things.

**Kim Crayton:** You can find me at -- right now we're combining two sites. Kim Crayton LLC I think is going down pretty soon, because we're gonna combine that... Because again, HashtagCauseaScene was something that came out of nowhere and that I had to go back and start putting processes to... But you can find me at hashtagcauseascene.com. Anybody can find me on Twitter @kimcrayton1, I'm on Instagram, I'm on LinkedIn, which I hate LinkedIn because it's nothing but a bunch of sales pitches... Oh, I hate LinkedIn. If I get one more thing, somebody asking me do I want a job doing something that I don't do -- it's like, "Dudes, please..."

\[01:24:13.08\] You can follow my podcast, I put out a lot of content. Just know that I'm gonna be real. I'm gonna get you where you need to go, but it's gonna be a challenging process. I have private clients - these are individuals who are now just realizing that they have been complicit, they have friends and they're like "Oh my god, I can't believe I said this thing and I didn't realize I did it", all the way to enterprise clients who are trying to shift their culture. Or communities - like I said, I'm working with Selenium, I'm working with Tito (which is a startup), I worked with event organizers who wanna make sure their events are as inclusive as possible. I'm currently working with Global Diversity CFP Day, with Peter Aitken. He actually ran ScotlandJS and ScotlandCSS. CFP Day - on the 2nd of March around the world we have 80 locations so far this year, the second year doing it, where we're taking people from marginalized or under-represented communities who wanna do their first CFPs, we're doing a day of that around the world, and I helped him craft that code of conduct.

So there's a lot of things I do. Because I work for myself, I have my own business, I like the creativity in it - so if you have an interesting project that I'm interested in, I might be interested in working with you. So there's no one-size-fits-all, I'm not like that about how I've created this space for myself.

**Jerod Santo:** Very cool. Well, listeners, as you know, all links in the show notes. We'll also make sure we grab Kim's podcast episode she referenced earlier. Kim, drop those to us and we'll put those in the show notes, and all of Kim's information.

Thanks so much for joining us. Folks, this has been a fun conversation, a challenging one and an entertaining one for me. I like to be challenged. Kim, thanks for joining us, Nick, thanks for being here, and we'll see everybody next time.

**Kim Crayton:** Thank you for having me.
