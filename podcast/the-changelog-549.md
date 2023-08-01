**Adam Stacoviak:** So we're joined by Steve Yegge. Steve, you've had such a career... You're a ranter, a blogger, you upset people, you move along when it gets conservative and not innovative... Where is the best place to begin for you? Should we just go back as far as we can? What's the fun part for you?

**Steve Yegge:** Sure, sure, we could start anywhere. Go back to Amazon, or my early days in the '90s at GeoWorks, in the assembly language, or wherever you like.

**Adam Stacoviak:** Where do you think -- I'm sure that your entire history informs today for you, but where do you think things began for you in learning as far back in your history that sort of informs most of what's happening today?

**Steve Yegge:** Well, so I've gone through a couple of phases in my career where the learning was accelerated for one reason or another... You know, sometimes you go and you're just getting stuff done, but you're not really learning anything. You're just executing. And then you go through these periods where you're just faced with some incredibly impossible challenge, and that's where you learn, You learn when you're being -- like, you're in the fire, and you're screaming, and you're like "I'm learning!"

**Jerod Santo:** \[00:06:13.09\] "I'm learning!" \[laughter\]

**Steve Yegge:** Right?! I mean, seriously, you can feel it when you're learning. And one of the early -- I mean, it's embarrassing to call it an early one, but it was almost 30 years ago... I was writing a computer game, and I was trying to make it massively multiplayer, I had a big vision for it... And I was trying to do it kind of myself, and that's where you learn a lot. You're a founder, entrepreneur, a startup... And it's where I learned that I needed better dev tools, and it's where I learned that I needed better languages, and better frameworks... And I realized everything was like a dumpster fire. So that's one example. But there are others... I mean, obviously, Amazon was an unbelievable learning experience, working for uncle Jeff...

**Adam Stacoviak:** Uncle Jeff... How was Dread Pirate Bezos?

**Steve Yegge:** Dread Pirate Bezos, yeah... He was -- he is...

**Adam Stacoviak:** \[laughs\] That's hilarious..

**Steve Yegge:** It kind of defies description. You know how they say Jobs had a reality distortion field? I never liked Steve Jobs, but everybody said that he'd just come into the room and bend reality, right? And Bezos would do that, too. He would just sort of bend everything to his vision. And his vision was just insane, and none of us believed it. I mean, we all believed in it at some level, but when he kept walking around after four years, or five years, and we're super-successful, and we've got all these product lines, and he's like "It's still day one." And we're like "Come on, Jeff... Isn't it day two?" This is back in 2003, when our stock was $200. So yeah, he was right, and we were wrong.

**Jerod Santo:** So did he have the vision for AWS? It seems like he did. The services. And it seems like he kind of dictated "Everything's gonna be a service", and this turned into AWS. Is that how it worked, or am I reading it wrong?

**Steve Yegge:** So I had an insider telling me after I wrote my platform rant - because it got a lot of attention at Amazon. And there was a lot of truth to what I said. Certainly, Jeff -- we did have extra compute power, and off-cycles, and there were other reasons to do it... But the insider told me that one of the engineers said that, basically, Jeff was always afraid the company was going to die, and that he was going to have to do a D.E. Shaw. Remember, Jeff came from D.E. Shaw, I believe, before he went to Amazon. He was a Wall Street guy, one of those types that buys up companies and chops them into pieces and sells them off.

**Jerod Santo:** Okay...

**Steve Yegge:** And so he designed Amazon to be choppable into pieces. And the way you do that is you make everybody basically an autonomous business unit; every team is completely sort of self-contained, and they have their own API boundaries, and they're almost -- they're basically replaceable. And that led to AWS, actually, in addition to the technological advancements, and the compute power, and the other factors.

**Jerod Santo:** Yeah. One thing that you wrote recently for Sourcegraph on the "Cheating is all you need", is you wrote "Did I ever tell you about the time AWS was just a demo on some engineer's laptop?" No, you haven't told me about that time. I mean, you tell it in a paragraph there, but do you want to tell that story, flesh it out for us? I mean, it had to be -- you know, everything has meager beginnings, but did you know when you saw that demo, or when the people saw it and was like "Okay, this is gonna be huge"? Or was is it like "Oh, cool. Let's try it"?

**Steve Yegge:** We thought it was weird. \[laughter\]

**Adam Stacoviak:** Well, why?

**Jerod Santo:** What was so weird about it?

**Steve Yegge:** Why would you make a perfectly good RPC call, like a high-performance, binary call over some fat text protocol? We had performance drilled into us. Amazon was always the victim of scaling, because we were always growing so fast... So we were always crushed under the load. And it was like "Hey, let's try this slow protocol for RPCs, huh, guys?" And it really kind of went over like a lead balloon, at first. We were like "Huh... That's weird." But as we started to sort of like understand what it was capable of... And that was back during the SOAP versus REST wars, do you remember that?

**Jerod Santo:** \[00:10:02.26\] Oh, I do, yes.

**Steve Yegge:** REST was really cool, but everyone's like "No, SOAP, because we were all stuck in our old object-oriented --"

**Jerod Santo:** I was gonna say, why didn't anybody like SOAP? Most people were like "Ah, SOAP..."

**Steve Yegge:** No, but there was a time when SOAP was the thing.

**Jerod Santo:** Alright, so strong man's SOAP. Why was it cool? Give it the best argument for why SOAP was good.

**Steve Yegge:** It was familiar, right? It didn't require you to learn anything new. It was just -- it was sort of like CORBA, or any of these other ORM layers, or whatever they were, these Pub/Sub sort of systems... And it was object-oriented, and that's kind of what everybody was doing back then.

**Jerod Santo:** Right. And it was XML, right? I mean, it was a bunch of XML.

**Steve Yegge:** I'm surprised it didn't have XML and inheritance. \[laughs\]

**Jerod Santo:** Yeah. Okay... So people were liking SOAP... I think it was familiar. That's why we stick with a lot of things, because that's what we know... And REST was the new hotness... But this text protocol - not only unfamiliar, but not-performant with regards to the things that you're saying. So what were the virtues? It was weird, but it was weird-good, obviously. What were the virtues of this change, in retrospect, that turned into what it is?

**Steve Yegge:** Well, I mean, for starters - and I've saying this for 35 years, and I will continue saying it until I'm dead... And then I'll keep saying it; I'll come back from the grave and I'll haunt you with it...

**Jerod Santo:** Oh, my goodness...

**Adam Stacoviak:** You're right \[unintelligible 00:11:14.21\]

**Steve Yegge:** Yeah... Which is that text is king.

**Jerod Santo:** Okay.

**Steve Yegge:** And binary formats are wonderful, and have their purpose, and we use them all the time, but text is the ultimately flexible, ultimately debuggable, human-readable... It's a it's a currency. And we're seeing that even more now with large language models, right?

**Adam Stacoviak:** For sure. Yeah.

**Steve Yegge:** But even back then, there was two schools of thought. One was performance is everything, and put the burden on the backs of the engineers to figure out how those bits work. Right? I mean, seriously, we had people at Amazon -- I'm sorry, you guys are gonna get me ranting...

**Adam Stacoviak:** \[laughs\] Too late.

**Jerod Santo:** No, that's what we're trying to do. This is our goal.

**Adam Stacoviak:** Go!

**Steve Yegge:** No, I'm saving it... But I'm sure I'll really get going here in a bit... But there were guys at Amazon who were like "Don't ever use regular expressions, because they're slow!" And then they would write a 2,500-line C++ crappy parser that was actually slower... Or it didn't matter; I mean they had wasted all this time on this giant ball of legacy tech debt, right? When they could have just used a regex. But it was just - anyway. Yeah, that camp, the bits camp... And come on, I mean, I resonated with them. I worked at a company, GeoWorks, where we did nothing but 8086 assembly language. 8086. Not 8386. Not 80x86, with their fancy 32-bit registers... No, okay? We were working with 16-bit registers, and this awful, just -- you know, Intel architecture. We did this for five years, because we were like "Performance is king." And guess what? We died, because text was king!

**Jerod Santo:** \[laughs\] Performance was not king.

**Steve Yegge:** It's not.

**Adam Stacoviak:** It's important, but not king.

**Steve Yegge:** It's not king.

**Adam Stacoviak:** This should inform us though that - we look at things like SOAP, or REST, and this argument, gRPC over a binary protocol versus a text protocol - you can look at that too and juxtapose that to now, where people are naysaying the AI direction we're taking... Basically, just pushing down future; let's stay with the past, what's familiar, and not embrace the future... Which is just comfortable in the moment, but long-term short-sighted.

**Steve Yegge:** 100%. I even saw a comment on Hacker News in a discussion about LLMs... It might have been, actually, after my first cheating post... And somebody said, "I can't wait for all this LLM stuff to just go away, so we can all just go back to doing our jobs." I mean, it was almost like -- I couldn't have written a better troll comment if I had tried, right? It was like, what is he -- seriously, there's people who have their heads in the sand, and they're waiting for it to all just go away... Which is pretty funny, because I don't think it's going anywhere.

**Jerod Santo:** \[00:13:58.11\] No... Well, it's going somewhere, but away is not the direction that it's going. Yeah, it's amazing how disparate the reactions are to it. We just had a -- we play a silly game on our JS Party podcast, it's like Family Feud. It's called Frontend Feud. And so we survey the audience and we ask them how they feel about things, and what their favorite and least favorite programming languages are... And we asked them recently - this was back in November, so pretty big change... But it was GitHub Copilot. Like, what are your feels about GitHub Copilot? And the answers are all over the board, from like excited, surprised, can't wait, to like "Terrible. Doomer." Like, it goes so broad. And there's people all along the spectrum in the middle about what we're thinking about this. Not very many technology advancements have, I guess, that drastic of a reaction. I wonder if this AWS stuff inside of Amazon had the spectrum of support that we see for LLMs... You were also around when Kubernetes was first being worked on inside of Google... These major shifts. Like, did AWS have so many different opinions about it inside Amazon? Or was it kind of like "It's weird", but then eventually it's like "Yeah, this is the business."

**Steve Yegge:** Interesting question. Interesting question. You know, I wish that I could answer that, but AWS didn't really get kicked off until sort of when I left Amazon, in 2005. So I'm actually older than AWS...

**Jerod Santo:** Wow... Okay.

**Steve Yegge:** And it's funny, because for a lot of people, AWS was, of course, part of the fabric of the universe. But I can tell you that at the time that I left -- I mean, Amazon was, of course, a company that was just absolutely filled with opinions, but there was only one opinion that really mattered...

**Jerod Santo:** \[laughs\] Okay...

**Steve Yegge:** Any guesses whose it was?

**Jerod Santo:** Right...

**Adam Stacoviak:** This story you told that was pretty interesting, speaking about Jeff, and I guess a semi-dovetail from AWS, was that -- "A good day with Jeff", that post, I was really enjoying that. I didn't get to read every single note in it; I was looking for the bad guy moments... But one, you're a great writer. So kudos to your ability to write so well.

**Jerod Santo:** For sure. Yeah.

**Adam Stacoviak:** But then this story, all the details of how you got to this meeting, and it's back in like the boathouse area, and all the idiosyncrasies of that... Can you share just like a little bit of that, some of that story?

**Steve Yegge:** Oh, tell the story?

**Adam Stacoviak:** Not the whole thing, but a version of like this first meeting Jeff, and this figure that we all know so well, but you've met in-person, and got to sort of see that opinion live.

**Steve Yegge:** I'll tell you a story I've never written down before. You guys can get \[unintelligible 00:16:30.12\] How's that?

**Jerod Santo:** Oh, nice. Yeah, we'll take it.

**Steve Yegge:** This story was cool, but you can read about it. It was just basically we all went to Jeff's boathouse to talk about AI back in like '03... And it was premature, but it was a pretty fun story.

**Jerod Santo:** Go read it.

**Steve Yegge:** But there was another meeting with Jeff that -- it's a story I do love to tell, and I've never had the opportunity to write it down... It was my first meeting with Jeff, actually. And I was a technical program manager. It was in my first year at Amazon. So this would have been '99... Because I joined in late '98. And my boss was \[unintelligible 00:16:59.26\] She was the program manager. She's the best program manager on Earth, in history, actually. She taught me the art of being a TPM. And then we had Jeff Wilkie with us, who's one of the best leaders that I've ever worked for. Two amazing leaders, me and Jeff. And they told me to shut up. They were like "Steve, don't say anything at all, unless he addresses you, alright?"

**Jerod Santo:** Okay... Scary.

**Steve Yegge:** "Stay on your knees, keep your forehead to the ground", all that.

**Jerod Santo:** Speak when spoken to, yeah.

**Steve Yegge:** \[00:17:38.12\] So we're in this tiny room, in this Transylvania-looking castle building that we were in, the PacMed medical building in Beacon Hill, Seattle... It's big, intimidating-looking... And he's in the top-corner wing, in this corner office... A real small office, the corner window view of the \[unintelligible 00:17:53.06\] And we're sitting in there, at this tiny table, and Jeff's back is to the windows, and we're pitching him on my project, which is one that he asked for. It was what they call a two-pizza team. Jeff came up with these two-pizza teams, these Tiger Teams, basically... And it was for reducing customer contacts. And he wanted fitness functions. Now, this is a great way to run teams, having an objective function. I mean, seriously, if you can find a function that you can drive up and to the right, then it's a great way to run a team. But finding the right objective function is a really challenging problem for some problem domains. But for mine, it was really simple. It was like, "We're trying to reduce customer contact", so our function is customer contacts over time.

And it was the shortest fitness function that anybody had presented. A lot of people had been presenting Jeff with these really complicated mathematical functions of many, many terms, weighted terms, that are going to be "This is how the team's performance is tracked." And he would argue with them, and throw it out, and curse, and scream, and whatever... Not scream and curse; he was always very quiet. But you would feel him cursing and screaming at you somehow, in your mind... I don't know. It was very intimidating. And it was mostly because he was so smart that he would just pick holes in everything that you showed him. So we knew; we knew that we were going to bring this to him and he wasn't gonna like it. There was gonna be something wrong with it. They're like "Steve, don't talk. Don't talk. Okay? We've got this."

So Jeff listens to the pitch, and he asks one question, and he put them into a state of complete paralysis. Have you ever seen when you draw a line in front of a chicken?

**Adam Stacoviak:** Oh, my gosh... Yes.

**Steve Yegge:** And it thinks it's a snake, and it just freezes... So both of them \[unintelligible 00:19:32.26\]

**Jerod Santo:** So you have a chicken analogy here... It's not lost on us.

**Steve Yegge:** They froze, deer in the headlights, because Jeff asked -- he asked something that nobody had ever heard of before. Just out of the blue, he goes "Every fitness function has a yin and a yang. What are they for this one?" And they literally turned to stone. It was the wildest thing I'd ever seen. And I'm looking at him, and I'm looking at Jeff, and all the algorithms don't talk, you know \[unintelligible 00:20:03.15\]

**Adam Stacoviak:** Oh, gosh, yes...

**Steve Yegge:** But they weren't saying anything. They were just sitting there...

**Adam Stacoviak:** How long? Like minutes?

**Steve Yegge:** At least five to seven really uncomfortable seconds passed. Maybe 10. I mean, it was like long enough that I finally said, "I know what the answer is."

**Jerod Santo:** Okay.

**Steve Yegge:** And they all looked at me, and I swear to God, I swear to you, they looked at me like they were drowning, and I had thrown them a life support. \[laughter\] \[unintelligible 00:20:29.29\]

**Adam Stacoviak:** "Thank you for saving me..."

**Steve Yegge:** And Jeff, of course, kind of slowly turns to me like "Oh, it talks", right? And now all the pressure is on me. And of course, I had a total of five seconds to assess the situation, parse his question, come frame an answer, and so now I'm on the spot, right? First time I ever talked to Jeff. And I told him, I said, "Look, we could have done some fancy, complicated function here, that was tracking more accurately. The problem with this function is if we just say we're reducing contacts, then we can just route you to an automated system that takes care of your -- "You've got a free replacement issue? We'll replace it for you." Just self service. The contact goes away. It's not counted by finance, because no customer service person ever talks to it. But that would be the wrong thing to do, because we're not fixing the root cause. If we just give them a new sweater, then we haven't fixed the problem upstream, in the distribution center, or the supplier, or whatever, that caused them to get the wrong sweater in the first place. And he started nodding, and he goes, "Yeah, that's it." \[unintelligible 00:21:29.15\]

**Adam Stacoviak:** Oh, my gosh...

**Steve Yegge:** And you could see them defrost, and the conversation started to proceed again... And boy, it was wild, though. It was wild. He could he could take the most seasoned, brilliant leaders and just freeze them.

**Jerod Santo:** Huh.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Well, congrats on having an answer...

**Adam Stacoviak:** \[00:21:50.09\] Right?

**Jerod Santo:** Not being one of those chickens... But -- I'm so dense. I may not even have followed the yin and the yang. So the yin is that this is really simple, but the yang is like "Well, we can game it." Is that what you're saying? Like, it can be gamed without actually fixing the problem... Is that what you're saying?

**Steve Yegge:** Well, I mean, I wasn't --

**Jerod Santo:** I'm over here on the answer. I'm trying to understand the answer.

**Adam Stacoviak:** What's the logic of the question?

**Steve Yegge:** A hundred percent. That was approximately the level of -- I think he might have winged the question...

**Adam Stacoviak:** I don't know \[unintelligible 00:22:17.19\]

**Jerod Santo:** \[laughs\] It sounds like a question that's made up.

**Adam Stacoviak:** The way I would interpret that really is the way that yin and yang works is that it's two fish in perfect harmony, because they're chasing each other's tail. And they can never catch each other, so they coexist forever, in their pursuit of their pursuit. And so the same here - if you're just trying to reduce contact with customers, that's the one, the yin or the yang; pick one, basically... And the Yang is the upstream of "How did the problem exist in the first place?" And so that's what he was asking.

**Steve Yegge:** Well, that's really beautiful, Adam. I wish you had been there.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Well, I had more than five seconds, Steve, so... I can assimilate that.

**Jerod Santo:** And none of the pressure of Jeff Bezos staring at you. I mean, that's just got to --

**Adam Stacoviak:** I'm sorry, I have to do this, Jerod... I have to do this. Ring the bell. My answer really comes from watching Silicon Valley.

**Steve Yegge:** Yeah.

**Adam Stacoviak:** So I learned more about the term, yin and yang -- that's a joke.

**Jerod Santo:** Missed it.

**Adam Stacoviak:** Yin and Yang.

\[00:23:12.17\]

*"A lot of these guys come in here and they can do all the engineering stuff, and they get all hung up on technicalities. They can't just tell you what their vision for the company is. It's like, you need both halves of the brain. The Jobs and the Wozniak. The ying and the yang.*

*I think it's Yin.*

*Yin? Like Yin and Yan?*

*Nope. Like know yin and yang.*

*No, it's ying and yang. Their opposite.*

*So Pied Piper, drop it on me... What is it?"*

**Adam Stacoviak:** Because of Silicon Valley. That was explained in that TV show. Not to that detail, but the concept of yin and yang... Which I knew already, but it was just "Explain it to me like I'm five", explained in a TV show. So there you go.

**Jerod Santo:** Right... Well, I just want that power to just be able to make people freeze, and crap themselves in their desire to please me with some sort of an answer. I mean, that would be a superpower that I guess would be kind of fun to have. Don't you think, Steve?

**Steve Yegge:** I \[unintelligible 00:24:08.25\] It was wielded frequently. I'll tell you another story... I mean, seriously, every time I met with Jeff, it was kind of an interesting experience. For example, did you know that he had a survival keychain?

**Adam Stacoviak:** No.

**Steve Yegge:** In case he ever got trapped into earthquake rubble or something, he had some really fancy --

**Adam Stacoviak:** Earthquake rubble?

**Jerod Santo:** Yeah, tell me more. What is a survival keychain?

**Steve Yegge:** I don't think he ever showed it to me. I just heard rumors about it.

**Jerod Santo:** Okay...

**Steve Yegge:** And he took one photo every day, which was like a big deal back in the 90s, when -- I don't know, where would you put them? I don't know if.

**Jerod Santo:** S3?

**Steve Yegge:** There was a time when people actually thought that was like a big deal.

**Adam Stacoviak:** Yeah...

**Steve Yegge:** But the story I was going to tell it was I had to do a presentation to him. It was called "The Fundamental 50." It was a proposal that I had made to make our engineers kind of more broadly generalists, which something Jeff always wanted. Jeff's dream was that engineers were just chess pieces; not even chess pieces, because those are different.

**Jerod Santo:** Checkers.

**Steve Yegge:** Checkers pieces, right, that he could just move around fungibly, from project to project, because that's the easiest way to plan... But of course, it never works out that way in practice.

**Jerod Santo:** Right.

**Steve Yegge:** So anyway, I was trying to level everybody up with this sort of - effectively, a training program. And they liked it enough that they decided to put me in front of Bezos. And so I'm sitting there, but this time it was in a larger conference room, and I had about 10 or 12 of his lieutenants sitting around the table. All his cabinet, basically. And I don't want to throw anybody under the bus here, but I was a little disappointed, because I gave my entire presentation, and Jeff was very engaged. He was sitting right next to me, very animated... The way you give presentations to Jeff is you write a five-page presentation, because he doesn't like PowerPoint; you write five pages of text, and then you randomly remove 30% of the paragraphs, to let him fill in the gaps.

**Adam Stacoviak:** Is that right? \[laughs\]

**Jerod Santo:** Just to make it harder to read, or...

**Adam Stacoviak:** \[00:26:03.26\] Do you, like, put the blanks there? Is it like "There should have been a paragraph here..."

**Steve Yegge:** No, no. We just like literally skip stuff, and just cut stuff, and let him make the leaps. Franz Liszt - he used to be so good at sight-reading that he would -- only on the first read-through, he would play it correctly, and after that, he'd start embellishing. And Jeff's mind is just -- like, think about it. The dude is smart to begin with, but he also sits in meetings all day long, and basically gets opinions and perspectives... And you do that for a few years and all of a sudden you've got a general's view that nobody else has, and so they can spot things.

So we prepped and prepped and prepped for this stupid presentation... And you know we were excited about it, but I went to probably 12 principles and engineering directors and said "Vet this for me. It's going to Jeff." We all vetted it, and I showed it to Jeff, and he looked at the list and said, "So where's machine learning?" And I bust out laughing. I couldn't help it. I laughed my head off. And everyone stared at me in complete shock. His jury of cabinet members, all these VPs and senior VPs that were sitting in this room - they refused to give any facial expression until Jeff gave a facial expression. It was \*bleep\* disgusting.

**Jerod Santo:** They wanted to be on the right side of history... Of Jeff's history.

**Steve Yegge:** And they did not want to commit to liking my proposal or not liking it until Jeff had committed, which was the biggest pile of bullshit I'd ever seen. So to your superpower, the one that you wanted, which is make people freeze themselves trying to please you, you'd better be right. The thing is, Jeff was usually right, so that was good, right?

**Jerod Santo:** That's a good combo of powers.

**Steve Yegge:** Yeah. But if you're wrong, then you're just going to be super-wrong.

**Jerod Santo:** Who's gonna tell you?

**Steve Yegge:** And so this group, finally -- like, I laughed, and I said, "You got me." I said, "12 principles and indirects vetted this list, and we forgot machine learning. And you got me straight up." And I congratulated him, and he went, "Ha-ha-ha!" And then we moved on. It was no big deal. I said I'll get it into the list.

And everybody in the room relaxed, and sort of smiling, and clapping me, and clapped me on the back after the meeting, and came up to me going "I've been in a lot of meetings with Jeff, and they never go that well", and whatever. And it was like "Yeah, thanks for the support before he smiled..."

**Break**: \[00:28:18.18\]

**Jerod Santo:** How much do you attribute to your career success your ability to think on your feet and respond in the moment? Because it sounds like it was pretty key.

**Adam Stacoviak:** You're pretty good at it so far. Two for two.

**Steve Yegge:** Yeah, I'd say it's a pretty important survival skill, right?

**Jerod Santo:** Yeah.

**Steve Yegge:** Especially when things get heated. I mean, it's a leadership thing. You're always gonna wind up in situations where two people have pretty heated opinions that are diverging, or are not aligned... And you've got to be able to navigate those things and that solution space really fast; really fast. So yeah, quick thinking is good.

**Adam Stacoviak:** What's your analogy to that? Do you think it's like "Be like water"? Because water takes on any form its container is, and can go anywhere, really, if necessary... I suppose heat might change its ability to travel, because it changes state, but what's your analogy to advice for how to do what you do?

**Steve Yegge:** Oh, how to think on your feet?

**Adam Stacoviak:** Yeah, like "Be like water." I don't know, is that something? \[laughter\] I'm trying to feed that to you, Steve. Is that

accurate?

**Steve Yegge:** No, it's fire. Put your feet in the fire.

**Adam Stacoviak:** Oh, okay. "I'm on fire...!"

**Steve Yegge:** And then say "I'm learning!"

**Jerod Santo:** See, I expected Steve to have a good answer to that one.

**Steve Yegge:** I've been in a lot of fires.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Well, you wrote that they call you The Closer at Amazon. Maybe this lines up with that. Because you close sales? What was this idea with the closer?

**Steve Yegge:** No, I closed interview candidates. So we would frequently get candidates who had really fat offers from Microsoft, or Google, or whoever...

**Jerod Santo:** I see.

**Steve Yegge:** And Amazon didn't pay well at all. And probably still doesn't, because Jeff is cheap... And so we'd be dealing with, you know, super, super-big com packages.

**Jerod Santo:** Gotcha.

**Steve Yegge:** And honestly, the perks, too. Amazon didn't have any perks. Your perk was you get to work at Amazon, and pay for parking. Right? I mean, it was like, it was bad.

**Jerod Santo:** So how would you close them? I mean, it sounds like a terrible comparison.

**Steve Yegge:** That's the thing, is I got every single one of them to come to Amazon. Every single one. And then when I went to Google, I was a great closer too, and I had a track record that went for, I think, eight years of complete success. 50 to 70 people I had closed...

**Adam Stacoviak:** Complete success.

**Steve Yegge:** ...who had better offers. Yeah. \[unintelligible 00:32:36.08\] And then one day somebody said, "No." This is what happened to Amazon, too.

**Adam Stacoviak:** Did you just like try and pay them up, like "Listen, I've got a perfect record. You're ruining my perfect record"? What's the situation here?

**Steve Yegge:** No, no, I was just like "Why? Why?" There was one dude I was trying to get; he was really good... And I went golfing with him. Him and our mutual buddy. And I even had a deal with him that if I beat him on this one hole, then he had to come work for me. It was a par three, and I got two feet from the pin, and he got a foot and a half from the pin. It was nuts. So he went Facebook.

**Jerod Santo:** Wow. That only happens in the movies, Steve. That's not how it works out in real life.

**Steve Yegge:** Yeah, it was wild. We both tried really hard. I guess he really wanted to go to Facebook.

**Jerod Santo:** Yeah. I mean, he could have just disagreed... I mean, it's his life, right? \[laughs\]

**Steve Yegge:** But I mean, I come up with compelling arguments. I'm making a convincing story. Okay, here it is - you've got to be a storyteller.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Okay...

**Adam Stacoviak:** This is something Jeff believes in, I believe. I'm pretty sure that was in -- I think it was in the Working Backwards book, potentially... Just like the concept and ability to tell a story. Because that's kind of, I think, what they did with some of the reverse -- the working backwards with the Prime; the Prime membership. It was like, "You've gotta tell a story. You can't just put the press release out there first, kind of aspect. Tell the story, what actually happened, all that good stuff." Because if you just sort of like put some KPIs out there and some goals, and you achieve it, it's like, "Well, did we really do it well? How would this actually be to a customer in the end?" And it always seemed like storytelling is an important thing for that organization, for Amazon. Storytelling.

**Steve Yegge:** \[00:34:21.18\] I mean, it's important. Of course. I mean, every company should be doing it. Your story for your users. It's your user story. And we often make the mistake of putting something out there without a story, but it's like a lot of cool, flashy tech, or this or that. Jeff usually didn't make that mistake. But I will say that Jeff was not always right on his first try. Jeff would often -- like, I've written about this, but it's so important... The difference between Jeff and Google is that Jeff would continue trying after he had failed the first time, and Google never would. Never, ever. Google was like "Ah, it didn't work the first day. Kill it!" Because they were going for basically a shotgun approach, trying to get a billion users.

Eric Schmidt was the CEO when I joined, and he was a good CEO. I really liked working for him. And he was the let 1000 flowers bloom type. He wanted us to \[unintelligible 00:35:11.29\] an innovation factory. Basically, you put a bunch of brains in a jar and see what they come up with. There were problems with that approach. One was that there weren't truly enough of us, and we were also kind of non-representative of the engineering population... So our story was different from the story of the average dev. And so Google wound up building a lot of stuff was really only good for Google as a result.

Jeff would put stuff out there, and it would be awful. It would be awful. Did you ever read about the time the guy got evicted from his apartment because we shipped him that book?

**Adam Stacoviak:** No.

**Steve Yegge:** It doesn't ring a bell?

**Jerod Santo:** No.

**Steve Yegge:** Would you like to hear that story...?

**Jerod Santo:** \[laughs\] Well, I definitely want to now...

**Adam Stacoviak:** Please tell us...

**Steve Yegge:** So the most eye-opening thing that you can do is go work the customer service queues at your company. It doesn't matter where you work. That's part of the story -- because you're gonna get the tail end of the story from them. And Bezos was obsessed with this, and he would have a weekly meeting that I was in, because I ran customer service tools for two and a half years at Amazon, and built their Arizona system, their web-based system... We switched from command line tools to a web-based system. And he would review every week, what was the histogram of customer contacts? Where did these stories end? And were they happy endings or not?

There was one bucket for happy stories, which was positive feedback, and that was usually the lowest... But it was in the top 10. And then there was -- the number one was always "Where's my stuff?" Bezos had this idea, which I think every leader in every company should emulate, which is "Get your people--" Grab had this, too. It was called "Go to the ground." You get your people out there, using the product, talking to the customers, dealing with the people... Feel their pain. Feel their pain. Whether it's in the distribution center, or the call center, or wherever.

And so we got on these field trips, and one day -- and every single time I went out, there was some crazy emergency, which suggests that they're happening all day long at Amazon. So I'm reading this mail from this guy, and he's like "Dear Amazon - you know, longtime shopper, first-time caller... I just wanna let you know that I ordered a book from you, and it came, and I opened it up, and it was filled with ants. And they went to my bed, and I can't sleep there anymore. And yeah, I just wanted to let you know." So there was that story.

And then on the same day, there was an -- so that one actually led to me walking by a room with a bunch of VPs where there were ants written in giant letters on the board, right?

**Jerod Santo:** Yeah.

**Steve Yegge:** The reason for that one was that somebody had been eating food while they were packing the box, and food would fall in, it would sit in the post office, and ants would go in the box. So they'd put food away. This was at the beginning of taking everything away from the workers. It's horrible.

The other thing that happened was that this guy goes -- I mean, the long story short, man... We had an off bug with the bank, where we went into a retry loop where we would reauth -- like, you know on auth they put a dollar charge or whatever on your card...

**Jerod Santo:** Right. Then they revert it.

**Steve Yegge:** \[00:38:00.27\] And then you don't charge until shipping time. But you auth, and it does actually like freeze up a tiny amount, right? But if you get stuck in a loop -- and the auth at the time was probably more like three bucks, or something. So this guy got like just enough in our loop that -- he was using his debit card. So he bought a book, he got authed a bunch of money that wasn't ever gonna get charged, but it froze up the funds in his bank account, and all his checks started bouncing, and his rent check bounced, and he got evicted.

**Jerod Santo:** Okay...

**Steve Yegge:** And he called us. And the weirdest thing, guys, is that the people who get shafted the worst, the ones who get really, really, really hit hard by our bugs - they're always the nicest. And the ones who are screaming at us over a nickel, with froth coming out of their mouth... It's just so interesting to watch the dynamic there. But he was one of the super-nice ones, and so of course, we got the Blackhawk helicopters, flew out to the bank and basically held him at --

**Adam Stacoviak:** Don't say "at gunpoint". You almost said "at gunpoint", didn't you? \[laughter\]

**Jerod Santo:** \[unintelligible 00:38:57.00\]

**Adam Stacoviak:** So close!

**Steve Yegge:** You know, to make sure that they got this dude back into his apartment.

**Adam Stacoviak:** So you saved the day. Or proverbially, the you, the Amazon you, saved the day.

**Jerod Santo:** Well, they also caused the problem.

**Steve Yegge:** We ruined it in the first place...

**Jerod Santo:** Yeah, exactly.

**Steve Yegge:** \[unintelligible 00:39:11.14\] is they did this over and over again, on purpose... Because you'd call Amazon and you'd be like "You guys screwed me, and I'm mad!" And then we would say, "Oh, we are so, so, so sorry." And we had a pyramid of professional ass-kissers to deal with journalists, and stuff, that would get screwed by our bugs... And we would say "We're gonna make it up to you. We're gonna give you a gift certificate. Keep that one, we'll send you another one, and we'll give you a gift certificate, and a direct line to blah-blah-blah." And you come away going, "They were so nice to me. They really get me." And then you've turned this pissed off customer into a brand loyalist for life.

**Jerod Santo:** Right.

**Steve Yegge:** And it was because we had no QA. It was like "What was he thinking?" and yet it worked. It was just the most bizarre loyalty creation thing. \[unintelligible 00:39:58.26\] by being customer-first, it meant that if they had a problem, he would fix it. And sometimes the problem was pretty terrible.

**Jerod Santo:** Yeah, I think getting evicted from your apartment because you bought a book is pretty terrible... That's a bad outcome...

**Adam Stacoviak:** Ants? And frozen accounts? I mean, that's a double-whammy.

**Steve Yegge:** Yeah... I mean, we would do simpler stuff, like -- in the early days, the distribution center was just a big hash table, because you have way more \[unintelligible 00:40:24.13\] than you have space, and so you have random items sitting next to each other on shelves. And so inevitably, statistically, some religious family gets pornography, or whatever, because you just - sleepy, grab the wrong thing... This was in the early days. So a lot of people got the wrong thing, but sometimes you would get the really wrong thing.

But you know, stepping back, the way Bezos ran the company - I've talked about him over the years... He did so many things right, and then he did so many things that I've found just personally, just morally objectionable. It's nuanced. Same thing with Bill Gates. Bill obviously did a lot of stuff that even the government sued him over, and won. He was naughty. But he spent a lot of time trying to, I guess, maybe sort of make up for it and clear his name, like curing malaria, and stuff... But the way these folks led their companies - you kind of have to look at it and you have to say, "Well, are there parts that we can take, that lead to the success, without being jerks?" And that's honestly been kind of the crux of my leadership struggle... Because leadership is a struggle. Leadership is always hard... And it comes down to "How can I be as effective as Bill and Jeff, without being an asshole, like Bill, or a tyrant, like Jeff?"

**Jerod Santo:** Right. Yeah, it's tough, because especially when you do it -- if you do it publicly, or in the "town square", you have a lot of... When you speak with nuance, and you speak highly of certain aspects of a person, like you are... You know, like, this was really good for the company; this aspect of him.

\[00:42:04.10\] There's nuance there. Like you said, you're not just with a broad brush saying "Therefore Jeff Bezos is awesome in every way, and I love him, and I want to be just like him in every single way." But it's hard to get that across sometimes, and you can receive criticism as if you're lionizing the man because you're zooming in on something that was net positive, and saying "Let's emulate this." It doesn't mean that you're vouching for every aspect, but so many people will just read it in that binary fashion.

**Adam Stacoviak:** Yeah, you have to be binary on these decisions, Jerod. That's how it is these days. If somebody's a villain in one way, shape, or form, villain in all the ways. There's no coming back.

**Steve Yegge:** We do tend to get that way.

**Adam Stacoviak:** We do, yeah.

**Steve Yegge:** Herd mentality, for sure.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So what you say though, Steve, about leadership and being hard - I think that, to the level that Bill Gates, the level that Elon Musk, Jeff Bezos, Steve Jobs, you pick your well-known FAANG organization leader, and at some point in their journey, they transition or already were sociopathic. To be in the meetings that Jeff's been with, these, like you said, seasoned veterans etc. that just crumble in his intimidation factor... You only hit the balls you swing at, right? And to hit that kind of ball, those kind of balls, at that level, you have to take a lot of swings. And I think at some point you skew towards, if you don't have the right grounding, into sociopathic behaviors. And that's kind of what you probably struggle with, is union concerns with Jeff in particular, I've seen you write about, and the bad, naughty things you mentioned about Bill Gates... I'm not sure which particular things you're talking about, because there's so many things that you could mention, some true and I'm sure some not true... But I just wonder if like at some level, at that level of leadership, to get to that point, what it takes to get there is somewhat sociopathic behaviors.

**Jerod Santo:** Well, we could find a counter-example maybe that would disprove the theory. Like, is there a really nice, down to earth, rational, well balanced person that's like the head of -- or founded and built a Fortune 50 or Fortune 100?

**Steve Yegge:** Benioff?

**Jerod Santo:** Maybe. I don't know.

**Steve Yegge:** I never met him, but I've heard good things...

**Jerod Santo:** Yeah, maybe.

**Steve Yegge:** Or the dude that founded Twitter originally, I think, maybe. I'm not sure. I don't know about that...

**Jerod Santo:** Ev Williams?

**Steve Yegge:** Definitely Benioff. I mean, there are examples.

**Jerod Santo:** Yeah. So it's possible, but it just seems like it's more rare.

**Adam Stacoviak:** Yeah. Benioff is Slack, is that right?

**Steve Yegge:** Benioff is Salesforce.

**Adam Stacoviak:** Salesforce. Okay. I thought so. I was like --

**Steve Yegge:** I mean, unless I'm wrong...

**Jerod Santo:** Yeah, they own Slack, so you're in the same ballpark there.

**Steve Yegge:** Yeah, yeah. But sociopathic - I mean, maybe. You certainly have to be thick-skinned. Because too much empathy has been my historic failing, and you really have to kind of dial it back a little bit. You have to have empathy, but you can't let it ruin you, because too much empathy is gonna stall you. I don't know anything about sociopaths other than that they exist, and I just don't understand how they work...

**Adam Stacoviak:** Here's a definition, to give some context.

**Steve Yegge:** Alright.

**Adam Stacoviak:** And sociopathic doesn't mean you have sociopathy; it just means you have a -- it's like an itis. It's like a version of it. It's described as a mental health condition in which a person consistently shows no regard for right and wrong, and ignores the rights and feelings of others. Which kind of describes Jeff, in some cases. Not in all cases...

**Steve Yegge:** Honestly, that would be a really useful life skill, I guess.

**Jerod Santo:** \[laughter\] That's something to strive for...

**Steve Yegge:** I guess... But I mean, seriously, the word that you used that really resonated with me, Adam, was grounded. They're not grounded, and maybe that's why they've become the way they are. Because of course, over time anybody can become jaded to other people's problems if they're not feeling them.

**Adam Stacoviak:** \[00:45:53.24\] Well, if you have a cadre or a jury near you that's well-seasoned veterans, that only facially express when you facially express, those are yes people. And if you surround yourself in no grounding, and no-no people, people that push back on -- that really know you and can push back against you, then you're not grounded. You're in your own Lala Land that you've made up. And it's easy to skew towards sociopathic, because you don't have that grounding, regard of right or wrong, or someone else is right, because you just are so far removed from somebody else's truth...

**Steve Yegge:** That's right.

**Adam Stacoviak:** ...that you can't empathize or react in that way. So you just naturally hurt them even if you don't want to.

**Steve Yegge:** And this is one of the many reasons that diversity at a company is so important, and getting a diverse set of voices and backgrounds and experiences to help ground it. Because -- I was gonna say, I was talking about Eric Schmidt, and his failing with 1,000 flowers. We weren't representative, because we were all super-homogenous Google engineers. And it was actually a lack of diversity that was holding Google back from innovating, I think, in the early days. We had a few minor wins, like \[unintelligible 00:47:00.18\] but most of Google's successes were actually acquisitions. \[unintelligible 00:47:05.22\] YouTube... I mean, I might be wrong about one or two of those, but a lot of them started -- \[unintelligible 00:47:11.09\] they bought it, it was in C\#, ported it to Java... Spreadsheets, all that stuff.

**Jerod Santo:** How long have you been outside of Google?

**Steve Yegge:** Oh, gosh, I've been gone for about - I guess it was 2017, so five, six years now.

**Jerod Santo:** Okay. What's your assessment now, in terms of innovation, the company? It seems like they've had such a lead on AI stuff internally, with DeepMind, and with all -- I mean, tons of effort going into it, and yet, at least from the outside, it seems like they were caught very much off-guard by ChatGPT specifically, but just by the general LLM movement here and transformers... And they have all hands on deck meetings, and trying to like come up with Google Bard... To me, it seems like they're very much threatened right now, and... I mean, search, their moneymaker is threatened by this... What's your thoughts on it?

**Steve Yegge:** Yeah, I mean, I think Google's never had to innovate, because they've found the moneymaker early on.

**Jerod Santo:** That's so good. I mean, it's such a moneymaker.

**Steve Yegge:** It was so good that they never felt any pre-- they wanted to innovate, because they're like "Well, we better come up with something just in case..." But that was about the amount of passion and energy they've put into it.

**Jerod Santo:** \[laughs\]

**Steve Yegge:** And so most of Google's focus forever has been on basically their ads monopoly. And yes, I did say monopoly, and you shouldn't edit it out. I mean, I do not think that Google has a monopoly on most things; having been there, I can see that we're desperately behind in most places cloud, and so on... But anybody can, in theory, write a search engine to compete. But the ads ecosystem is unbreakable, and that is a monopoly. But that meant that they didn't have any pressure to innovate. Amazon always had pressure to innovate, because the margins were so thin. In books, music, video days, they had high margins, but Jeff came to us one day and said "That's all going away, and we're gonna have to sell other stuff because digital. Nobody's gonna buy a CD anymore", he told us in '99. We were all like "What?! We Love CDs." \[laughter\]

**Adam Stacoviak:** \[unintelligible 00:49:03.00\] Holding onto the past.

**Jerod Santo:** You probably still have your collection. You've got a collection?

**Steve Yegge:** Yeah. And so Amazon was forced to be innovative, and forced to try in many, many things. And so Amazon got good at innovation. Google never really got good at it. They never did. Now, LLMs have kicked them in the pants...

**Jerod Santo:** I was gonna say, do you think that monopoly's really at stake in?

**Steve Yegge:** Well, honestly, the bigger threat to their monopoly is the EU, and I hope they're successful in breaking it up a bit... Because we need to have other players in the ads ecosystem. I don't think ads should ever go away. When you see an ad that's perfectly done, you don't know it's an ad.

**Adam Stacoviak:** Oh, yeah.

**Steve Yegge:** In fact, if you go on Amazon's mobile app, and just shop... Like, 80% of the stuff you're seeing there is ads.

**Adam Stacoviak:** I know.

**Steve Yegge:** It's targeted placements.

**Adam Stacoviak:** The ones that I'm looking for - like, I search for things, and there's a little video there... I welcome those things. Like, give me a great demo...

**Steve Yegge:** \[00:49:58.01\] If they know what you're looking for...

**Adam Stacoviak:** Exactly.

**Steve Yegge:** If I see a guitar ad, I will always be happy. So I don't think ads are going away, but the way ads are done today is very much dictated by Google and Facebook. Those are the two networks, for slightly different purposes. Amazon is, of course, actually passing them both... But again, so maybe Google doesn't have a monopoly on ads, because Amazon is making up so much ground. But still...

**Adam Stacoviak:** Well, even Amazon has competition too with TikTok's shop feature.

**Steve Yegge:** They do.

**Adam Stacoviak:** A lot of people find things via social and just want to go and buy it... The crater almost misses out on the attribution. It's hard to say, "Hey, use my links and I get a little bit back." But they literally put a Shop button there on the TikTok video, and you can just engage right then and there.

**Steve Yegge:** Easy money. Yup. It's disruptive. And every time we think the giants are done, and they've won, they get disrupted. And Google's getting disrupted right now, and it's by the LLMs that they invented... It's quite ironic and amusing, but I hear from folks that I talk to at Google all the time, that they've pivoted the whole company to AI, and every team is being asked to train models, and deal with AI, and \[unintelligible 00:51:08.28\]

**Adam Stacoviak:** Is that right?

**Steve Yegge:** Yeah. And it's kind of a dumpster fire in that you can't just take some random engineering team and have them fine-tune a model... Because you know, it's a very delicate operation, and apparently, it's not going very well. So they're in panicking, scrambling mode again, but they also have incredible infrastructure. They still have incredible engineers, and they have a lot of power to get stuff done. They've typically been their own worst enemy; they blocked themselves a lot... But I think maybe now with a fire lit under their butts, they might move a little faster. We'll see.

**Adam Stacoviak:** You've got a prediction?

**Steve Yegge:** Who's gonna win?

**Adam Stacoviak:** Well, do you think --

**Steve Yegge:** Open source... \[laughter\]

**Adam Stacoviak:** Open source.. The Easy button.

**Steve Yegge:** The easy button. The problem with open source is -- it's not the model, it's the data that makes the quality of the ultimate thing. So whether it's open source or not doesn't have as much really bearing as whether you've got really, really good, curated training pairs. And right now, the big, expensive guys all do. Anthropic, and Bard, and OpenAI.

**Adam Stacoviak:** Right. Let me ask more specifically - where do you think Google will be at, given this ad monopoly that you've described? The change that can happen there, the shake-up, the reaction... Give me a five-year. Where will Google be at five years from now? What will we -- will we be looking at the company clawing its way to relevance, remaining relevance? What's going to happen?

**Steve Yegge:** I think they'll be fine. I don't think that we're going to see this search market overturned. I do think that in a 10-year horizon that's gonna look really -- you know the old adage about how we overestimate and underestimate... Five years is pretty soon, but ten years is pretty far. It's a little weird. But in the five-year horizon, I see Google being fine. I don't have any hot takes there. They invented this stuff. And what they did was they immediately stopped publishing. They've been going back and forth on this for many, many -- for decades. "Should we publish papers? Should we share our discoveries with the world? Should we open-source things?"

**Jerod Santo:** Yeah.

**Steve Yegge:** You know, Tensor Flow, which was originally Google Brain... Or maybe it wasn't Google Brain, but TensorFlow was not called Tensor Flow originally... And Jeff Dean wrote it at Google, and it was the new hotness for training and inference. And Jeff published an internal memo -- Jeff Dean. We're talking about Jeff Dean. Jeff Dean is probably the greatest programmer of our generation, of our time. The most influential. Maybe Linus Torvalds... It would have to be between those two. Who else would there be, besides Jeff Dean and Linus?

**Jerod Santo:** I'm trying to think of somebody here... Yeah.

**Steve Yegge:** Right? That's the thing, it's hard to pick individuals. Things aren't solo efforts anymore. Everything is a team effort. Look at the \[unintelligible 00:53:58.12\]

**Jerod Santo:** Ken Thompson, but that's not this generation. That's the previous generation.

**Steve Yegge:** \[00:54:03.15\] Yeah, exactly. Ken Thompson, Dennis Ritchie... Dennis Ritchie wrote the first Go compiler at Google when he was 72 years old. So yeah, but that was the previous generation. Jeff is a generational talent, and he had to write a memo internally saying "Why we are open-sourcing Google Brain." I remember it was actually called Google Brain, because he said, "Why are we open-sourcing it?", which became TensorFlow. And he had to basically like mandate, sort of by fiat, which he had never done before, that we're going to do this because there was a big resistance to sharing stuff. But Google was falling behind, because you lose thought leadership if -- what happened, what Jeff outlined for us was that we kept inventing stuff, publishing a paper on how cool it was, and how cool we were... And then the open source world would go "Wow, that sounds really good. Thanks for not freakin' giving it to us Google... But thanks for showing us how you did it, so we're gonna build our own." So we had MapReduce, and they had Hadoop, and we had this, and they had that... And all of a sudden, Google was the proprietary assholes for everything, because of our policy of not open-sourcing. And Jeff was like "Done with that", and so we open-sourced TensorFlow and it was very successful.

So the pendulum has swung back now, and it's like "No more papers, no more papers", because they had somehow managed to --

**Adam Stacoviak:** "We're giving them our ideas! They're eating us from the outside!"

**Steve Yegge:** Well, Transformers was Google's idea. So was Bert. I mean, most of it -- it was only up until Sam Altman crazily said, "We're just gonna shove it out there and see what happens", because Google was too conservative with it. All the big names \[unintelligible 00:55:29.01\] the users really badly. This is why Sourcegraph has been able to kind of do something cool that's been harder for Microsoft to do. I'm not saying they can't do it, and they very well may, but we went hog wild when the LLMs came out. We said "We're gonna live with the occasional hallucination, and the wrong answer and whatever, because --" Like, if you've got a metal detector that can find rubies, and some of the time it's finding dog poo that you step in, but whatever. You clean it off --

**Adam Stacoviak:** Calcified dog poo.

**Steve Yegge:** Whatever, you're still finding rubies once in a while. A lot of it depends on your tolerance, your threshold, your pain tolerance for how -- like using regular expressions... Once you start using one, you've got two problems now, right? And so it is for some people, and it's not for others, but we decided to just open it up and say "Look, this is a developer tool. We think it would be really cool." And Microsoft and the bigger companies are kind of unable to do that, because they need to curate, curate, curate, and make sure the experience is really polished, or else their users will be jarred, and "Oh, whatever", and it makes it harder to innovate and be bold. Because we can go out and try things, and see what works... So again, I would say I learned a lot more from Amazon than I did from Google when it comes to leadership and products and finding product-market fit. Because again, Google wasn't forced to innovate, and Amazon was. And so I watched Bezos try and try; he wouldn't give up. He'd be like "I know there's something here."

You can count probably on one hand the projects -- the Google graveyard is thousands of projects. But Amazon's is pretty small. Because Bezos will keep changing the shape of it until he finds the fit. The only really big one I've seen him fail at was the Fire --

**Jerod Santo:** Oh, the Fire stick. Not the Fire stick --

**Steve Yegge:** The Fire Phone.

**Jerod Santo:** The Fire Phone, yeah.

**Steve Yegge:** Yeah, that was a fail, because the market was just too crowded, or whatever.

**Jerod Santo:** I heard they're divesting in Alexa, and Echoes, and stuff. I'm not sure if that's true or not...

**Steve Yegge:** Well, yeah, there's no money in it. There's no money.

**Jerod Santo:** I think the idea was they're gonna sell more retail, but...

**Steve Yegge:** I mean, look, I was talking to some Amazon insiders recently, and they were making fun of the poor Alexa team... Because how do they monetize? Whenever Alexa says, "You have a new notification. Would you like to hear it?", what she's really saying is, "I'm running out of money. Would you like to help?" \[laughter\]

**Adam Stacoviak:** That's an interesting one though, because there's so much application for Alexa, that I just wonder why they haven't been able to land the plane, because...

**Jerod Santo:** Well, and they got penetration; like, into the households. They got in there.

**Adam Stacoviak:** \[00:58:09.07\] Oh, yeah. They just had to give so many away, and...

**Steve Yegge:** I mean, look, I'll have to imagine that the ML, the sort of step-function improvement in ML - they probably were not using large language models before; they were using their own models, and with LLMs they're probably revisiting and wondering... I mean, Alexa series and the Alexas of the world are probably going to have to take a big... I think they're gonna get dramatically better. If they don't, then there'll be one on your desktop that you can talk to, that's dramatically better. They're gonna get replaced if they don't get better at this point.

**Jerod Santo:** This is why I was saying Apple needs to do something with Siri. I mean, it's so embarrassing at this point... I thought they would announce something at WWDC, because everybody's just talking about theirs, and they're so much better. Siri is so embarrassing, and yet not a peep at WWDC. They're just not doing anything with it. It's just like, what?!

**Steve Yegge:** I'm sure they are internally working very hard on it.

**Jerod Santo:** They have to be.

**Adam Stacoviak:** They probably are. Here's a question for you, Jerod... We just had this conversation, and it was kind of to you - and Steve, you can participate, because you're here... And thank you for being here, by the way.

**Steve Yegge:** Yeah. Gee, thanks. \[laughter\]

**Jerod Santo:** Steve, you can also answer if you want.

**Adam Stacoviak:** No, you could totally answer. Well, they call it AI. I mean, they resisted calling it VR with the Vision Pro... They literally danced around the buzzwords. Will they use AI? Will they say AI?

**Jerod Santo:** I don't know. I'm not gonna answer. They're so particular with the way they say things, and name things... To a fault. I mean, the way they refer to iPads just bugs me to death.

**Adam Stacoviak:** They category-create.

**Jerod Santo:** They won't say "the iPad", they'll just say "iPad." Like, that stuff's all very intentional and calculated, and to me that makes me not like them as much... Even though I like them for lots of reasons. It's just like, there's something weird about that. So I don't know what they're gonna call it, because they probably have meetings upon meetings about what they're gonna refer to it as. They did say transformers a few times... They stopped saying machine learning, and they started saying transformer, so I feel like that's kind of a nod to us nerds, to be like "What are you using there?" on their autocomplete, or something. So that's my take. I Have no idea... Steve, you probably have a better take on that.

**Steve Yegge:** No idea.

**Jerod Santo:** \[laughs\] Yes! I tied him. I tied him.

**Steve Yegge:** That's right.

**Jerod Santo:** Same exact response. I want to go back to this Google thing for a minute... I thought maybe this is a better way of casting it, which might be enjoyable to think about... So 10 years - cultural significance. So we can talk revenues, and we can talk monopolies, and stuff... But today, and it has been for probably 15-20 years, you google it. "Did you google that? Just go google it." I'm starting to hear "Did you ask ChatGPT?" Like, will "Google it" be culturally significant in 10 years, as it is right now? Or will there be something else that's more like asking AI, that's like "That's what we do now. We don't google it anymore, really. Or if we do, we don't say that. Now we're saying this other thing." What do you think? That might be a proxy for their success over the next 10 years.

**Steve Yegge:** Well, I mean, the pundits have been saying the search bar is dead, right?

**Jerod Santo:** Yeah.

**Steve Yegge:** And it ain't dead yet, but I guess it's mortally wounded at this point... So I expect that Google will look very different in 5-10 years. You'll still google things, but it will be a much friendlier experience. And by the way, I don't think they like -- it's funny... I mean, of course, it'll never change, but I don't think they like using googling as a verb for whatever the trademarking reasons, you know what I mean? Because people would be like "I googled it on Bing."

**Jerod Santo:** I know. But it's kind of like "Sorry, guys... I hate being the de facto standard that everybody refers to."

**Steve Yegge:** Right?

**Jerod Santo:** Right? It's like \[unintelligible 01:01:28.15\]

**Steve Yegge:** Tied again.

**Adam Stacoviak:** Well, for this call I did not ChatGPT your name, I googled your name, and dug through links, because that's what I wanted. So contextually, I wanted a list of links. I did not want a dissertation of who Steve Yegge was. Because I'm sure they can be --

**Steve Yegge:** \[unintelligible 01:01:47.00\] can give you that.

**Adam Stacoviak:** Right. And ChatGPT isn't gonna give me a bunch of -- I mean, it can maybe give me resources and cite some things, but I've never actually had it give me a link, that I'm aware of. I could be wrong.

**Steve Yegge:** \[01:01:59.14\] Yeah. I mean, the thing to keep in mind here is the models don't know -- I mean, they don't know everything. They've looked at a lot of stuff, and they're very good at pattern detection, and completions, and all the other things, but they don't actually have perfect memory and recollection of everything they've looked at. It's almost like taking a person and letting them read a bunch of books. And they'll remember stuff about the books, but they won't even always be accurate. If you see the Gettysburg Address printed in 100 different books, then they'll eventually memorize the text of the Gettysburg Address. But for the most part, they're just kind of -- so what they need is they need other data stores. And Google's is like the biggest. Google has all of these really bespoke custom fine-tuned backends for every possible knowledge topic... And so it's really just a rejiggering of the form factor for Google. Putting a more AI sort of interaction model in front of what already exists as very mature search infrastructure. That's why I don't think Google has any trouble.

**Adam Stacoviak:** I'll tell you what - I know exactly how they win. If they're listening, they should do this. This is exactly how they remain relevant ten years from now.

**Steve Yegge:** \[unintelligible 01:03:03.06\]

**Adam Stacoviak:** Want me to tell you? Their cash cow is the ad monopoly. And the way you win there is with relevance, and quality. When I search, I ignore, because it's not relevant or quality. If they increase that relevance and quality, the way that Amazon has, the way that Instagram has, or even TikTok in some cases - they're not ads, they're just creators being paid on there. They make a living on there, so they're kind of ads... They're kind of like walking ads, or living ads... Relevance and quality. If they become Bezos-obsessed on relevance and quality in their ad department, in every way, shape and form, they can win.

**Steve Yegge:** Interesting. I bet they've never thought of that before. \[laughter\]

**Adam Stacoviak:** I guarantee they haven't. You know why they haven't? Because it sucks already. Relevance and quality is not there, ad-wise.

**Steve Yegge:** My hypothesis is that because there's a third dimension that they've decided to optimize for, which is money...

**Jerod Santo:** Right...

**Steve Yegge:** Which is another form of winning, I guess, but yeah, it would make for bad ads.

**Adam Stacoviak:** I would pay more as an advertiser if you let me deliver relevance and quality, that also equated to money for both of us.

**Jerod Santo:** I think the advertisers all want to pay less, though. You're probably unique.

**Adam Stacoviak:** Maybe you actually pay less that way. You force relevance and quality. The people who want to be low-quality and low-relevance, who need to be there, literally need to pay to get views, or eyeballs, or whatever you call it... They'd probably pay a lot more than those who truly are relevant and truly are high-quality. So maybe you optimize for those who really need to claw to get there, and the ones who really deserve and have that kind of quality - maybe they pay less. I don't know, but relevance and quality are levers.

**Steve Yegge:** I'd say quality comes at the expense of privacy in ads.

**Adam Stacoviak:** It does. Well, how does Instagram do it? How does Amazon do it?

**Steve Yegge:** They trample your privacy like sociopaths.

**Adam Stacoviak:** Okay...

**Jerod Santo:** Right. And there's the uncanny valley of quality, where when it gets too close to home, which is too good, specifically Instagram - now you start having people say, "I think they're listening to me. I think they know."

**Steve Yegge:** They do. Yeah, 100%. You can talk about some random topic in front of Alexa, and you'll start seeing ads for it.

**Jerod Santo:** So there you go. I mean, that's quality though, because it's exactly -- it's so relevant to your life.

**Steve Yegge:** It is, because quality means intent, really. And relevance. They're all related. It's intent if you search for something.

**Jerod Santo:** Right.

**Steve Yegge:** Yeah, we all want relevance and quality. And of course, Google wants to give you, and all these advertisers want to give you the relevant, high-quality ads.

**Jerod Santo:** But we don't want creepy. So there's this weird rub there, right?

**Steve Yegge:** That's the problem.

**Jerod Santo:** Exactly.

**Steve Yegge:** That's exactly the rub, man... Is that they need to know a lot about you, potentially through mechanisms that you don't really want them to be using, in order to show you something that's relevant to you. And that there is the crux of the problem.

**Adam Stacoviak:** How do we bake -- I mean, this is not a show on search relevance, but how do we bake-in opt-in relevance then? Because I would certainly opt into some relevance. Like, at my own discretion. Don't be sneaky about it... Give me a chance to tell you what relevant to me. And then I would happily take --

**Steve Yegge:** \[01:06:02.09\] I mean, opt-in relevance is called a click... Like, click the ad.

**Adam Stacoviak:** Click the ad, or search something... If I search something, or if I engage with something, that's kind of -- like, if I knew that as a user, like "Hey, when you engage on my platform with X, Y or Z, that's opt-in relevance, and I'm gonna give you more, because you're gonna want this. This is how the platform works, so get used to it. If you're here and playing, you opt by these rules, you play by these rules."

**Steve Yegge:** I can't believe that you guys got me talking about ads. I hate ads. \[laughter\] I've done ads twice in my career I've said "No, never again", and then done it again. Maybe three times.

**Jerod Santo:** Alright, here's a good transition off of ads then... So five years at Google -- or five years ago, sorry... 2017, you joined Sourcegraph. This was like -- did you come out of retirement to join Sourcegraph, or was that just a kind of a cool way of saying it? Were you actually retired?

**Steve Yegge:** Yeah.

**Jerod Santo:** You retired. So after Google, you're like "I'm done."

**Steve Yegge:** Yeah, I was working on my house, mostly.

**Jerod Santo:** Okay. Building a house...

**Steve Yegge:** I built a really nice studio. I'm sitting here, I can see nine guitars from where I'm sitting.

**Jerod Santo:** Nice...

**Steve Yegge:** A piano, and an ukulele, and a mandolin and...

**Jerod Santo:** Alright, so --

**Steve Yegge:** I was living the dream.

**Jerod Santo:** So the dream turned out to not be so hot? I mean, how come you came out of retirement then? Why didn't you just live dream?

**Steve Yegge:** I guess it's possible to start climbing the walls, even in your own private castle, with all the guitars you'd ever want... You climb the walls.

**Jerod Santo:** \[laughs\] Okay...

**Steve Yegge:** I miss people. I'm a bit of an introvert, but also, I miss working with people, I miss solving great problems... And I know a bunch of folks that did exactly the same thing I did. Retire for two years, and then they're like "I've gotta get back into this." Honestly, and truthfully - and this is just my personal opinion, and it could be just complete astrology, but I think that there's maybe a correspondence between having a purpose - and work can give you that purpose. Of course, there's other things that can as well, but I don't feel like I'm ready to sit down and just start writing novels all day long yet... And that purpose will, I think, help you live a longer and fuller life. I really do. Retiring at the age that I did might have actually wind up aging me prematurely. But who knows? Who knows...? In any case, I'm having fun.

**Jerod Santo:** It was two years that you were tired?

**Steve Yegge:** Yeah.

**Jerod Santo:** And how long have you been back in it?

**Steve Yegge:** Gosh, I think it's since late September... So yeah, going on 10 months maybe.

**Adam Stacoviak:** How old are you?

**Steve Yegge:** How old am I? I'm 54.

**Jerod Santo:** Okay. And after these 10 months, you're in it, you're back in the game, you're working... Do you feel more satisfaction? Do you feel more fulfilled? Do you feel better?

**Steve Yegge:** Yeah. I've lost weight, I've had more energy... It's interesting, retiring turned me into sort of a video game drooling zombie, and I didn't like that. And I was kind of reminded of Bourdain, saying that he has to spend all this time coming up with stratagems to keep him from turning into that guy that sits on the couch and plays video games.

**Jerod Santo:** Right.

**Steve Yegge:** And so I was kind of inspired by that. That's a part of why I came back out of retirement.

**Adam Stacoviak:** That's crazy.

**Jerod Santo:** It makes sense. It's just funny timing... We just had a show with Kelsey Hightower, who just retired from Google, at age 42, I think he is... And he's like literally in week two now, at this point. He's like "I'm gonna see how it's going, but you know...

**Steve Yegge:** We will see. When I retired, I was like "Man, I am done!" And my buddy Mark Porter is like "I give you two years."

**Jerod Santo:** \[laughs\] He drilled it.

**Steve Yegge:** He's retired twice, and both times his wife said "You need to get out of the house!"

**Adam Stacoviak:** Yeah, for real. I mean, having something to truly push up a mountain is fulfilling. We like struggle; struggle's necessary for life. You need -- some people get upset when they have fear, or they have doubt. Those are just feedback mechanisms. Or even anxiety is a feedback mechanism for your body. Pain even. It's just a feedback, it's not bad. You don't want to remove pain, you don't want to remove fear, or even anxiety. These are things you need. It's calculus - when a car goes on a road, it doesn't not feel friction against the wind. It needs that. It's aerodynamics; it holds it to the ground, and it gives it ability to hit the turn hard, or whatever it might be. Same thing for human beings and their purpose. You need that pushback to life, you know?

**Steve Yegge:** You sound like a great leader, Adam. "You need fear!"

**Adam Stacoviak:** You do! That's what I tell myself. I lead myself. I somewhat lead Jerod, to some degree. I mean, we co-lead each other, as you've said before...

**Steve Yegge:** \[01:10:18.27\] I'm kind of kidding though, because I mean, it is important, basically, training data for your brain. When I said feet to the fire - you learn with your feet to the fire.

**Adam Stacoviak:** Right. People want to remove it, though. They want to remove these things. They're like "I don't want fear. I don't want to anxiety!" Those are feedback mechanisms. Leverage them.

**Steve Yegge:** Right. When they disappear for two years, they're replaced with Cheetos.

**Jerod Santo:** Well, like you said, Steve, at the beginning - those moments when you're learning, when your feet are to the fire, you're actually growing. It hurts, it's scary, it's pleasant, but you're growing as a human being; you're actually expanding and becoming better. One thing I say often is that nothing notable ever happens when you're sitting home, watching Netflix. You never go out and tell your friends the story of the other night, when you watched yet another series on Netflix. The stories of your life happen at the uncomfortable, outside of your comfort zone, weird times. Those are the ones you want to tell your kids later. So it's all part and parcel of the same thing. You're back in the game now... Okay, so why Sourcegraph then? I mean, did they -- you probably could have went anywhere. You could have gotten a job --

**Adam Stacoviak:** Literally why, and literally how? How did you get wooed back to the game? The exact story.

**Steve Yegge:** I mean, there wasn't much to it... My buddy -- you know Temporal? Or Cadence? It used to be called -- I think it's Temporal now. Really cool system... The CEO is a buddy of mine; he introduced me to Quinn and Beyang, and we chatted, and found that there was a lot of alignment and overlap and interest. I mean, they just cool. I mean, Sourcegraph is just super-cool. Honestly, once I realized, "Man, I've gotta get out of the house \[unintelligible 01:11:56.02\] and get out of retirement. Mark was right."

Then I started talking to companies, and I talked to 21 or 22 different companies. And I'm talking about like interviewed with 21 or 22 different companies, and had the conversations with them, for a bunch of executive positions, and heads, and VPs, and blah-blah. A lot of them were banks, oddly enough, and a lot of them were ads-related, which I really didn't want... I was just trying to find something that I can be passionate about; something that wouldn't be work. You know what I mean? It wouldn't feel like work; it would be work, but it would be rewarding enough. And I don't feel like working at a bank would do that for me, honestly. Even a cool one, like Capital One, because they're very tech-savvy, and easy to \[unintelligible 01:12:36.19\] and whatever.

So ultimately, I took a look at the options and I was like "Yeah, I mean, they're pre-IPO, series D, they've got money in the bank, they've got an incredible culture, they've got really cool tech..." I looked into their tech, and it had finally reached the point, after ten long years... Because they focused on search first, which is a huge \[unintelligible 01:12:57.25\] problem... And then eventually, they came around to code intelligence, and that's when they started talking to me, when they had that stuff off the ground. And that's the stuff I did at Google. And it dovetailed really nicely. And right after I joined -- I joined in September, did some sort of cultural maneuvering to make sure that everybody knew that we were going to be a high-performance culture going forward, but without the tyranny... And everybody actually wound up being super-excited about that, and we wound up with a really cool, high-functioning team. And then in November, LLMs landed. ChatGPT landed on November 30th. At which point we kind of looked at each other -- because we'd already been working with AI, with natural language code search, and that actually set us up to basically build Cody in a couple of weeks, v1. And so yeah, it was just -- I was lucky. I was lucky. I was unbelievably lucky fit for, I think, all --

**Adam Stacoviak:** Really?

**Steve Yegge:** Yeah.

**Adam Stacoviak:** It seems so premeditated. I mean, based on your history.

**Steve Yegge:** Well, they say that luck favors the prepared, right? I mean, I talked to 21 companies, so maybe it wasn't luck. Maybe it was hard work and hard searching, but... I'm grateful that I found Sourcegraph, and I'm really, really, really excited to be on this journey with them, because it's gotten crazy this year.

**Adam Stacoviak:** \[01:14:10.10\] Your selection criteria is good, though. The pre-IPO, series D, great, relatable founders... We both know Quinn and Beyang. We've known Beyang for years, I've known Quinn for at least a year or so... And I've had great conversations with both of them. They're down to earth, easy to talk to... Just - not strange people.

**Jerod Santo:** Not sociopaths, or...?

**Steve Yegge:** That's a good point. I don't usually list reasons for why Sourcegraph, but I did talk to a lot of C-suite people in my journey, and Quinn and Beyang are definitely a different cut from the rest.

**Adam Stacoviak:** They are.

**Steve Yegge:** Like you say, unbelievably down to earth. They're just like us, they just want to get cool stuff done, and hack, and have fun, and change the world. And that resonated a lot with me. So we clicked, the three of us, and that had played a huge role.

**Adam Stacoviak:** Where is this going? Now that you've built Cody in two weeks, which was probably six months ago, seven months ago now... Ish...

**Steve Yegge:** Cody 2. Hasn't Cody 2 just come out, or something? I saw a blog post...

**Steve Yegge:** Yeah, we did just launch -- well, it was really kind of Cody 1. So it's the first time that anybody can just like use it.

**Jerod Santo:** I see.

**Steve Yegge:** Because we have to pay for GPUs for you, basically. So it was a bit of a logistics challenge to actually get Cody out to everybody. Next step is we're going to make it an even more lovable experience. I mean, like I said before, a lot of your experience with any AI coding assistant, including Copilot, is going to come down to your tolerance for it making mistakes... So we're putting together an unbelievable world-class AI team, that's pairing up with our code intelligence, our code graph, which is the thing we've spent ten years building. It's the external store. Remember I mentioned Google is going to be fine, because they have all this incredible search infrastructure that the LLM can use? We're in the same boat. We've got fantastic technology, so we can start improving Cody's quality.

Because ultimately - look, Cody is great right now if you have a question about your database, about some stuff you haven't seen, it's new code you haven't seen... But for day to day, where you already know the code, and your IDE is helping you, and stuff... And maybe Cody doesn't come to mind as your very first stop, so my goal is, in very short order, we want to make it so that Cody comes to mind first when you're thinking of a much broader class of problems. And we do that by making it really, really good.

You would be shocked at how much low-hanging fruit there is. I mean, you look at Cody and it does make a fair number of mistakes, but the ability for us to fix these things is extraordinary. Everything that we've tried has made it better. So in other words, we're starting with kind of the worst possible implementation of Cody. It's OpenAI, generic, sort of Wikipedia embeddings... I don't even think they're code-oriented, you know what I mean? So yeah, it's gonna go out better.

Where are we going with it? I mean, long-term... Look, I want Cody to be your first stop when you're coding. Look, one of the things that I was always jealous of, truly envious, about VPs with executive assistants, as I was going through my career, was that they were always like a team of two people. And they were always incredibly productive, and the VP never had to go to the printer, never had to do any of the expense reports and stuff that engineers are always having to do. The VPs were always freed up. I mean, honestly, that's what Cody should be for a developer. It's like "Oh, man, I've got some stuff I need to get done, that I really \[unintelligible 01:17:32.17\] that I'm struggling with. Let me just have the AI help with it." Honestly, that's where I want to take it. And it's so early days right now. I mean, it's really raw right now. It adds a lot of value if you play with it. But still, I mean, you probably find that it also has a lot of mistakes. But the way I see it - I mean, this is inevitable. This is an inevitability. It's going to happen. It may take a year, it may take five years before we're all using it every 10 minutes... But it's inevitable.

**Adam Stacoviak:** \[unintelligible 01:18:01.01\] you're gonna say it's inevitable. You can't put that word out there and not snap your fingers. "I'm inevitable!"

**Steve Yegge:** I forgot about that.

\[01:18:12.20\]

*"I am... Inevitable..."*

**Adam Stacoviak:** Yeah, that's really -- I mean, I do agree. I think the reason why we -- and I say we as a royal we, where it's not really my opinion... The pushback against it is that I never thought it would happen in my lifetime, I guess. And so it seems so sci-fi, all you can do is -- you really have to suspend your disbelief. This is what you do in sci-fi films. This is what makes them magical, is you suspend your belief to believe that Star Wars was possible; that you can shoot lasers at each other, have these laser swords. Like, that's not going to happen -- maybe it would happen, actually. I have to suspend my disbelief on that one.

**Steve Yegge:** I really like that framing. I really do.

**Adam Stacoviak:** That's the problem, is everyone is having that trouble. It's like, "I never thought we would truly have what is considered, buzzword or not, artificial intelligence, in my lifetime." And the fact that it's here, and we have to explain it on podcasts, and be seasoned engineers that have done major things, and have innovated... And it's here. It's here, in our lifetime. That's kind of unbelievable.

**Steve Yegge:** I love the way you framed it. I love this, Adam. Sorry, go ahead. What's the "and"?

**Adam Stacoviak:** That's it, really. I'm just in disbelief that that's -- that's why it's so hard to believe that it's really here... But now that it is, the point is it is inevitable. It's here, it's not going to go away, the boat is landing on the land, and all the trolls or whatever you want to call them in this boat, this analogy of a boat, are coming off and they're getting on land, and they're gonna start invading. This LLM invasion, that's what's gonna happen. It's inevitable. We're gonna have a future that's going to have artificial intelligence in it. It's going to be the case. It's not not going to be true.

**Steve Yegge:** And it'll be polished, right? I mean, look at your journey on this show, from Skype and mailing USB sticks around from your guests, to Riverside today, right? Stuff gets better. And a lot of engineers are young, and they don't see that the world used to not have AWS and Kubernetes. They don't see that -- and that makes it harder for them to suspend their disbelief. I love your framing, Adam... Because, right now, if you look at it, you'd be like "Well, it's wrong sometimes." That was a huge stumbling block for IDEs in the early days. A lot of Java programmers wouldn't -- any strongly-typed language wouldn't take an IDE, because they weren't accurate all the time, until they finally evolved to the point where they were... And during that period, there was a big war between the command line folks and the IDE folks, for 5-10 years, before finally the IDs were good enough, and everybody was using them. Coding assistance is exactly the same. It's early days, we're basically getting the early adopters, bleeding edge, but it's going to improve in quality and refinement until it's pretty obvious that you have to use it, or else you're behind.

**Jerod Santo:** And the current state of affairs is kind of like "The future is here, but not evenly distributed", and the distribution is like your ecosystem. So if you're coding Python, if you're coding Java probably, things that are well established and have tons of public resources, you have a better experience today than if you're coding in a niche language, a less popular language. I know this personally, because I'm an Elixir programmer, and they're not good with Elixir. They just aren't. I see things in other languages, I'm like "Oh, that's cool. I wish it could have the right answer for me. So many of the answers are wrong." I don't want to be the skeptic, who's like "This will never be good for me", but I do want to be realistic and say "For me today - it's not there." It just doesn't provide very much value. I can see the potential value, and I can see the demos on the social networks, where it's like "That's awesome." But it's not evenly distributed. I'm not writing that mainstream language. And so that stuff will obviously -- everything will catch up, eventually.

**Steve Yegge:** That's right.

**Jerod Santo:** \[01:21:51.23\] But I believe you that there's so much low-hanging fruit... It's gotta be fun, because low-hanging fruit is the best. It's easy to pick, it has the biggest impact... It's the funnest moment. It's like, I can make huge advancements with not very much effort.

**Steve Yegge:** There's been magic times... I've witnessed -- and I've rarely been in one myself, but I see them. Like, Borland in the '90s - they were the kings of programming languages compilers. And it was a magical time, because all the best compiler writers in the world... Not all, but probably a big chunk of them kind of congregated at Borland. Then Microsoft bought them all, right? And was like "Ha-ha!" And then they all went to Microsoft, and there was this innovation, magical time then when they built .NET, and C\#, and that whole stack. And those don't happen very often. There were a few at Google... Things get built by small teams, in a hurry. And then there's just a lot of shipping, and polishing, and deployment, and engineering, and stuff. But it's hard to get those magical innovation loops, you know what I mean? Everybody's always too busy to innovate. And so when you can catch them and get people together, and there are low-hanging fruit in the space, and you're in this innovation loop, it's incredible, because every week it's demo, everybody's demoing to each other... It's exciting. You're seeing meaningful, incredible advancements week over week. That's where we are today. That's where we are today at Sourcegraph, and it's just incredibly, incredibly fun and gratifying. But it's also -- we're turning the car, the vehicle we're in so hard that we're starting to strain the chassis a little bit... But it's been a lot of fun.

**Jerod Santo:** Well, I'm excited. I don't even work there, but just the fact that y'all are doing this... And you're not the only ones doing it. I mean, there's people innovating... There's tons of excitement right now.

**Steve Yegge:** Yeah. I love it.

**Jerod Santo:** And it's gonna be goodness coming out on the other side for everybody, so... That's exciting. Anything else we didn't ask you? You're like "Man, I've been waiting an hour and a half for these guys to ask this question, but they're... They're too dense. They didn't even think about it."

**Steve Yegge:** No, this has been a lot of fun. I love that you guys let me tell us some of these crazy old Amazon stories...

**Jerod Santo:** Did we miss any? Are there any other stories where you haven't told them yet, and you're like "I'll just shove this one in at the end?" I'm here for it.

**Steve Yegge:** Oh, gosh. Yeah, let's see if I can find a good Amazon story. You know, I've made Jeff actually laugh. You've all heard Jeff Bezos' laugh, right? "Ha-ha-ha-haaa!" That's actually curated, of course... It's part of his brand image...

**Jerod Santo:** Is it part of his thing?

**Steve Yegge:** Yeah. Because I've made him giggle.

**Jerod Santo:** Oh, he has a giggle. \[laughter\] Oh, nice. So that's breaking news...

**Steve Yegge:** It sure is.

**Jerod Santo:** If you had a soundbite of that, you can put it against that picture of him with his shirt off... You know, the one that's popular now, where he's all ripped and jacked... And you could have just him giggling to counteract that.

**Steve Yegge:** I actually remember the joke where I made him laugh, too. I was in a meeting with Jeff and 40 or 50 people. It was all of his leadership. And I was giving a presentation, and I stopped, and I said "Let's talk about the elephant in the room." And suddenly, everybody was staring at me, including Jeff. And I said "I'm not the elephant", and he just lost it.

**Jerod Santo:** Nice.

**Steve Yegge:** Winging it...

**Jerod Santo:** Just winging it.

**Steve Yegge:** Yeah. So yeah, I don't know... I could probably pour more customer stories of people who got completely screwed, but...

**Jerod Santo:** \[laughs\] That could be its own podcast; it's almost like that could be a recurring podcast.

**Steve Yegge:** It totally could. I think somebody should, to be honest... I mean, somebody from ex Amazon. Because there are so many stories that are just going to be lost to the annals of time, that would just be wonderful to share about things that can go wrong, that are just unexpectedly, like, almost emergent bug behaviors... And then how do you clean it up as a business, and then monetize on it? Because Grab didn't learn this lesson. I'm serious. I went to Grab -- we didn't talk about Grab. Grab was an amazing Southeast Asia adventure... It was a lot of fun. And they emulated Amazon, and very successfully. They are kind of the Amazon of Southeast Asia. But they never really got that particular lesson.

**Jerod Santo:** \[01:25:56.16\] We've imagined a podcast of post mortems, where everybody can learn from the mistakes of everybody else after an incident, or after something happens... And it's always kind of been stuck at "Well, who wants to come on the air and like air their dirty laundry of this \[unintelligible 01:26:09.17\]

**Steve Yegge:** They don't. You know what, I tried to do that at Grab when I first got there. They had a horrible outage, because of Etcd. It had a huge meltdown, and it's terrible to restart... And Grab didn't know how their service dependency graph -- they had circular dependencies, and they didn't know how to restart their whole system if it went down. So it's hours and hours... And of course, Grab in Southeast Asia, when the system goes down, people can't get to school, they can't get to work, they can't get to church... And they start throwing rocks. And then the governor calls, and then the president calls, and it's a big deal.

**Jerod Santo:** Oh, my goodness...

**Steve Yegge:** Yeah, I could tell you all kinds of Grab stories. When Grab makes changes, people kind of through bricks through their windows.

**Jerod Santo:** Oh, my goodness.

**Steve Yegge:** Yeah, very different --

**Jerod Santo:** That's high stakes.

**Steve Yegge:** So they were like "We should do a post mortem and tell everybody what happened here." And so I wrote a really good, entertaining, funny, post mortem about what happened with Etcd, and the history of how we were trying to diagnose it... I was ready to publish, and they were very uncomfortable with it. And the leadership was like "I just, I don't think we should --" And they eventually pushed back and didn't want me to -- and I was new.

Partly an Asian thing, but also partly a people thing... There are definitely tech culture differences that we butted up against from the Westerners, as the outsiders.

**Jerod Santo:** Sure.

**Steve Yegge:** And they're not big on vocal self-criticism. That's a core value at Amazon, and is an anti-pattern in Asia. Do not be vocally self-critical. And I was basically being vocally self-critical with this post mortem post, and they were like "No."

**Jerod Santo:** Not doing it.

**Steve Yegge:** So we never learned the lesson. This is a problem. This is just like the problem of genomics and medicines. They can't make good medicines, because they can't get trial data, because of privacy. It's always a data problem lurking in the back here.

**Adam Stacoviak:** Well, I have one more question about Cody. You've got a couple -- I think this might be one of the... Yeah, this is the second episode. I couldn't find episode one. "Cody is cheating." This is from "Cody is cheating." Why don't you explain this to me? Because you said "In this episode, I'll explain our moat." And these are -- we talk about moats... What's somebody's moat? How does Google lose their moat? How is this gonna lose their moat? What moat do they have? It's all about the moat. I feel like Seinfeld right here.

**Jerod Santo:** What's the deal with the moat?

**Adam Stacoviak:** "How exactly Cody is differentiated", this is what you say, "over all the other coding assistants." And you said, "Hey, they're going to be here. They're not going to go away. They're inevitable." And you go on to say "including Copilot and why we will always be the leader." Those are strong words. You say it in episode three, and then you come up with something else. But then you said this; you said "Did I mention I'm lucky? Well, this is the world poker tournament." I love the word you use when you write, by the way... "This is the world poker tournament of software showdowns. This is the big one. And I've got pocket rockets, because there's truly no comparison to Cody. We're so far ahead, it's blowing people's minds at Copilot shops. You'll see soon enough." Give us that soon enough. That was two months ago, basically, this post.

**Steve Yegge:** The "soon enough"?

**Adam Stacoviak:** Yeah, the soon enough. You say you're so far ahead...

**Steve Yegge:** Software does take time to build, so you're gonna see us iterate towards this... But what I was talking about here is -- it's funny, it's sitting in a tab right next to the one that I'm in right now. It's a 1000-page research paper that just got published on the intersection of knowledge, graphs and LLMs. We have a knowledge graph about your code, and not just your code, but the metadata around it; like ownership, and security vulnerabilities, and a bunch of other stuff. That's what Sourcegraph does, is they just learn everything about your environment. And that is the defensible part, because it took a very, very long time for me to build that at Google, and I knew that it was going to be almost impossible to build it for the world, because the world uses Git, and Perforce, and SVN, and they use different languages more than Google does, and different build systems more than Google does...

\[01:29:49.26\] So Sourcegraph tackled an extremely difficult problem. Quinn and Beyang went after what I wanted to do when I was back at Google, which was to offer grok and code search to the world. And Quinn and Beyang did it. And kudos and respect, because they had to handle all the enterprise scaling, and all the build-up to that. Now, that's what they have. That's our moat. Because what you can do is you can use that graph data in many, many, many ways. This is what I was talking about, about that low-hanging fruit. You can inject it into your embeddings to improve their quality, very trivially, you can inject it into your prompts for in-context learning, you can generate few-shot examples with it, you can validate the outputs to the LLM... It goes on and on. That graph is an amazing asset that Sourcegraph has.

There other people in the space - I don't know, I don't really follow them, but there's a bunch of really cool, cool-looking, slick coding assistants... But really, all they are is a proxy to the LLM. They don't have this independent, authoritative source of compiler-grade metadata about your codebase that Sourcegraph has, that the LLM can also use. Cody can go look up stuff in the graph... It knows GraphQL. In fact, I don't even need to know GraphQL. I ask Cody to do the queries for me. So that's our moat. I hope that makes sense.

**Adam Stacoviak:** Yeah. You said, "Why we will always be the leader." That's an absolute. Always.

**Jerod Santo:** You're putting your stake in the ground.

**Steve Yegge:** Well, of course, leaders - of course, another one that could mean various things.

**Adam Stacoviak:** Sure. Not "The best."

**Steve Yegge:** This comes back to a point that I made earlier, which is that big companies are necessarily, because of the entire Gordian knot that gets created around the investors, and the sales, and the shareholders, and the quarterly earnings reports, and the expectations, and commitments, and the quality that people expect... They are stuck. It's called The Innovator's Dilemma. They cannot be as aggressive as we can. It'll actually -- like, it'll be problematic for them in a number of ways. Now, they may try. I'm sure they can try. But my prediction is that we're always going to be a little edgier, going out with things that are a little more raw, a little less polished, but still very powerful. And that's what I mean. I think that we have more, as a smaller company -- just like we have to watch out for the 10-people startups, because on UI and stuff, they're iterating faster than we are. If you're smaller, you can iterate really fast. And thank goodness, we have this 10 years of code graph behind us that we can use as building blocks in this race, which is truly going to go on for the next 5, 10, 20 years. It's begun. The race is on. It's just started, it's just firing, and it just went off.

**Adam Stacoviak:** Okay, so given that, let's imagine now... Let's just say I'm prompting you, okay? This is what I tell ChatGPT sometimes.

**Steve Yegge:** I'm an LLM.

**Adam Stacoviak:** \[unintelligible 01:32:37.27\] Imagine, act as if you're a doctor of programming. You have a piece of paper in front of you, and you're gonna write a prescription for all developers. And from this podcast - they're listening; they're on the edge. They're like "Man, okay... Steve's gonna tell me what to do." This is inevitable. It is the future. You may very well be - you being Cody, and Sourcegraph - a leader in this future. What should developers do today to ensure they follow the letter to this inevitability? ...from this podcast. Is it go play with Cody? Is it go play with everything out there? What's the prescription you can write for the majority of software developers to not be left behind today?

**Steve Yegge:** Well, I mean, obviously Cody's the easy button there, because you can just download it and use it, and it's free. But I have written this prescription for several people recently, and I know what the prescription is. The prescription is "It's time. Learn AI." I put it off for my entire career. I learned linear algebra, and a little bit about neural nets way back in the day, and then went for 20-25 years ignoring it, and you can no longer safely ignore it as an engineer. It is going to start overlapping and intruding into your life more and more, and you're not going to be able to separate AI from engineering here pretty soon. Look at what's happening at Google - all the engineers are being told to learn AI. It will happen to kind of everybody at some point. It's like, AI has been mixed into the atmosphere, and there's no getting it out.

**Adam Stacoviak:** \[01:34:06.22\] It's like salt and pepper in a shaker. In the same shaker. You can't separate the salt and pepper.

**Steve Yegge:** It is. You can't unmix them. But it's different than it was 20 years ago. It's leveled up; today you don't have to learn assembly language, you don't have to learn machine code, or whatever that stuff is below assembly language.

**Adam Stacoviak:** GraphQL.

**Steve Yegge:** \[unintelligible 01:34:25.08\] GraphQL either. So learning this stuff is easier, but everybody, every engineer needs to familiarize themselves with the foundational concepts that are in play with LLMs today. Because first of all, it will make you more effective; you'll just be better at like pulling off the shelf tools, including the large language models, for your own work. But second, it's just -- I mean, look, the broader form of my prescription is "Learn. Keep learning." I've said this my whole career, and I don't think it's anything new - you should be always reading papers, reading books, catching up... College was not the end of learning. College taught you how to teach yourself. So now everybody should just be continuing to take time to teach themselves. And I took it upon myself to finally -- I told you, I'm 54; my brain ain't exactly as springy as it used to be... And it's been 30 years since I took a linear algebra course. And yet I forced myself to learn as much as possible, and I continue to force myself to learn this stuff, and become an AI guy. Because it's time. It's here. Don't ignore it, or you'll be in last place. That's my prescription.

**Adam Stacoviak:** Okay. Let's get a second prescription to this then. Once they learn it, what should they do then?

**Steve Yegge:** \[laughs\] Go play with Cody... Well, they'll know. You'll know. You'll just know. You'll be like "Oh, well, I could do that..." That's what you'll say.

**Adam Stacoviak:** The reason why I asked you this is because I'm talking to companies and people, and they're like "Well, I've gotta put AI." So I have lots of conversations around the scenes with would-be and potential sponsors and partners and different things we do... And more recently, I talked to Abi Noda, who is founder of DX. And he knows he needs to put artificial intelligence in it, because it's essentially surveys to improve developer efficiency. Sourcegraph may even be a customer, I don't even know. But the point is, it's all text, it's all learning. But it's so hard to parse that. You want to take this large survey that everybody gave back, and you want to inject AI somehow. Well, then you've got to take your prescription, say "Okay, I'm willing to learn artificial intelligence, I'm willing to go to the ground with it, and get it all." But then it's like "How do I apply?" And everybody sort of needs to inject or embed AI into their product in some way, shape or form. And you say you'll know from this learning. I was hoping for more of a silver bullet if you had one. Like, specifics.

**Steve Yegge:** I mean, AI is always the same. AI is a very well-established -- even with LLMs, it hasn't fundamentally changed the basic game, which is you establish benchmarks with human evals that's say "This is good, this is bad. Let's teach the computer what's good and bad." These are the foundational concepts you need to learn. Because then you have an idea. Let's say you have an idea, Adam; you're like "My product is a photo browser. I'd love it if the AI could make recommendations based on my photos of - whatever. Something I should buy, or something I should eat, or whatever." Knowing the foundational concepts that I just learned as a middle-aged, old dude, this year -- because the resources are unbelievable. It's not like it was 20 years ago, or 15, or even 10 years ago; you've got YouTube, and you've got all these amazing tutorials, and visualizations, and all this stuff. It's very accessible now. Once you learn the foundational technique -- whatever it is you're doing, it's basically going to be evaluation and experiments... And you say, "Did it work? Did it improve my benchmark?" That's it. And you just iterate your way.

And it's so quantitative that there are leaderboards for it. You guys know Hugging Face, right?

**Adam Stacoviak:** \[01:38:00.10\] Yeah.

**Steve Yegge:** Literally, it's a giant -- it's like video games. Literally, everybody's like... There are leaderboards. AI has been a big gamified competition for 20 years. And so once you're in AI, you realize how it works, you're like "Okay, this is what we need to do - we need to make our product better in the following ways, we're going to \[unintelligible 01:38:14.12\] experiments, and we're just going to keep picking the one that worked the best." That's it, there's nothing to it. After that it's just learning the tools and the names, and stuff.

**Jerod Santo:** Nothing to it but to do it, and the time is now.

**Steve Yegge:** So the prescription - I know it feels like a bit of the suppository, but it really is... It is something that I strongly recommend that people do. I know everyone's kind of lazy and kind of doesn't want to do it, but seriously... And it's fun, too. I mean, I didn't -- seriously, I ignored AI, even at Google, for so long. And I'm telling you now, you shouldn't ignore it anymore. You guys both sound exceedingly disappointed by this... \[laughs\]

**Adam Stacoviak:** No, no.

**Steve Yegge:** What do you want my silver bullet to be? You wanted a silver bullet.

**Adam Stacoviak:** No, no, no, it's not that, really. No, I think any answer is great. You've got a lot of wisdom, and I think your prescription was spot on. Your second part of it was mostly there, but we'll improve it over time, right?

**Steve Yegge:** Yeah.

**Adam Stacoviak:** No problem there.

**Jerod Santo:** Iterate. Come back and give us another prescription. Come back and give us another one.

**Adam Stacoviak:** It's really been fun going through your history, and hearing this experience...

**Jerod Santo:** For sure.

**Adam Stacoviak:** Because one thing that I think Jerod and I both love about this show is we have a diverse set of people on this show, from all sorts of different backgrounds. Young French dudes who make an Oculus Rift open source version of it, like that kind of thing, from folks like you, that have a lot of experience and history... And not just years, but diverse. "I've been here, I've been there, I've been there..." And you've been bold enough to push back, you've been bold enough to get Jeff Bezos to giggle, and then also leave whenever the criteria no longer met your desires. "This no longer innovates. This is too conservative. This is not \[unintelligible 01:39:56.09\] anymore." And I think people need to hear stories like yours, because that's how we all sort of learn. We hear stories - back to the storytelling... That's what's key, and that's what the real magical thing of this show is, is like there's no perfect Steve Yegge episode here, or at least the first one... I'm hoping and sure we'll have you back to share more.

**Steve Yegge:** Thanks for having me. What you're saying is resonating. I really do think that we need to share more. Companies tend to be really closed up, but... We're just people. Let's share more.

**Adam Stacoviak:** For sure. For sure, for sure. So Sourcegraph.com. Sourcegraph.com/cody. We're fans of Sourcegraph here. We've been sponsored by Sourcegraph before, we've been fans of Sourcegraph for many years... And I'm rooting for you all. I like your moat. I hope it gets bigger, and I hope it gets fortified. So good luck on that.

**Steve Yegge:** Well, thanks so much. Thanks, guys.

**Jerod Santo:** Thanks, Steve. This was awesome.
