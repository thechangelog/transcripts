**Jerod Santo:** We are here to talk about code review anxiety with Carol Lee, who has a PhD. And yes, that rhymes. A clinical scientist, studying developer thriving and experience. These are things that we care about. Carol, welcome to the Changelog.

**Carol Lee:** Thank you for having me. I'm so glad to be here.

**Jerod Santo:** We are glad as well. Now, some people hop on podcasts and just talk about things, but other people go out and do actual real science. And so happy to have you here, because you've done some work on this topic. You're not just sharing your opinions, or waxing poetic, as some people might, even some people on this call... A paper published called "Understanding and effectively mitigating code review anxiety", something that I think us and our listeners are well aware of, and have lived through, or are currently living through every time we submit our code for review. But curious to hear about this topic from your perspective, maybe even before we get to your findings why did this interest you to put all this work in.

**Carol Lee:** Yeah, for sure. So you said, I am a clinical scientist. What that basically means is that my background is in clinical psychology. So my expertise is in how folks thrive, how folks cope with stress, anxiety, and then kind of come out the other side feeling okay. So code review anxiety was really interesting to me, because one, I have also submitted code before, and it is a very anxiety-provoking process. Definitely messed up the whole GitHub thing, and that was very embarrassing... So I felt code review anxiety.

Something that was super-interesting is that people are always kind of commenting on how it's a common occurrence, People say "Oh, we have this. I felt this." And then that's just kind of it. As a clinical scientist, I generally don't to end things at "This really sucks. Oh, well." I to kind of end things at "This really sucks. I wonder if there's something we can do about it." So I wass really interested in that.

So initially, the goal with this project was to really help people feel if you experience code review anxiety, you're not alone. Something that's really striking to me is that on software teams people don't talk about their code review anxiety. Something that happens when you don't talk about an experience is that it becomes really invisible, and when it's really invisible, you feel really alone in something, even though you're not alone in it, We all experience code review anxiety, but we don't talk about it, so now we feel we're the only person that has it. We're weird, we're unskilled, whatever.

So I wanted to make people feel "Okay, I feel seen. This is not just me. I'm not crazy or weird. This is something that we all experience. But as I kind of dove deeper into it, I came across some really harmful myths in the industry. So one thing is that a lot of people talk about code review anxiety as if it's this junior developer thing. "Oh, you'll just kind of grow out of it. Everybody experiences it to begin with." And that's not actually true. In my research, we actually see that folks across experience levels experience code review anxiety, whether that's about giving a code review, getting a code review, whatever. We had folks in my intervention who were principal engineers, folks who had anywhere between 1 to 65 years of coding experience, who were "You know what? I've had code review anxiety for 50 years, and I just never thought that this was something that I could do anything about. I was just "Well, it's too late now. That's embarrassing." I thought that was really striking, and I wanted to kind of share "Hey, this is something that impacts all of us." It's not dependent on how much experience you have.

And then the other piece of it is that folks often think about code review anxiety management as writing better code. So if you kind of just do a gentle Google search, and you're "How do I manage my code review anxiety?", you'll get people who are "Oh, here are 10 tips to write better code. Here are 10 tips to write cleaner code." And then they're "And then code review anxiety - done. Perfect." And that's not how anxiety works. You can feel anxious about things that you did super, super-well. I always say anxiety isn't merit-based. You don't earn your way out of anxiety. It just kind of happens to us. So I thought that was an important kind of thing to show with this research as well. So yeah.

**Adam Stacoviak:** Interesting. I wondered when you were sharing this background if GitHub is to blame, really.

**Carol Lee:** \[laughs\]

**Jerod Santo:** Git blame, and it's GitHub. Yeah.

**Adam Stacoviak:** Yeah. Because I know that was code review to some degree prior to GitHub, right?

**Jerod Santo:** \[10:07\] Sure. Yes.

**Carol Lee:** Yeah.

**Adam Stacoviak:** But I think by and large it's become more prominent as a daily, if not hourly occurrence in so many software developers' lives. It's a part of the flow, the GitHub workflow. And I really just want to know, can we just blame it? I'm being funny about that. Can we blame GitHub?

**Carol Lee:** I mean, I really struggled with Git when I first started using it, so I'm very happy to blame GitHub... Not really. Please don't hold this against me, GitHub.

**Adam Stacoviak:** We like GitHub. We like it.

**Carol Lee:** GitHub's great.

**Adam Stacoviak:** It's innovation. They can't do anything about it. But I think it hasn't been here in our daily practice to the degree that it is until they popularized social coding, and really the way we've all been writing for the last 15 years, 16 years, that has been GitHub has come on the scene, totally changed the way the global scale of software production happens, helped open source win, and now it is the way. GitLab is there, and others are there as well. They're not solo or alone, but by and large they've popularized literally the word pull request, PR.

**Carol Lee:** Yeah. Well, it's interesting you say that too, because you think about how we just kind of get used to, or integrate processes like reviews. And if you're doing let's say one review every month, or one review every quarter, it cues you to have a more thoughtful review, where you're like "Hey, this is my review to Adam. Here are the things that I'm seeing. Here are some areas where I can see some growth." It kind of makes you be a little bit more thoughtful. But when you're kind of pushed to do 10 reviews a day, or I don't know, however many you feel pressured to do, you see a lot of folks writing things like "Looks good to me", and then the other person's like "Does it...? I don't know." Or someone will say something like "Just change this", and you're like "Does this person hate me?" And that kind of elicits a lot of code review anxiety, because people don't feel like they have time to say "Hey, I wonder if you could change..." You know, kind of like couch things a little bit more when they are pressured to kind of churn these out. \[unintelligible 00:12:09.28\]

**Jerod Santo:** Let me come to GitHub's defense, and then a clinical scientist can tell me whether or not I'm just waxing poetic and don't know what I'm talking about... But code review has always been a thing as far as the practice of software development goes. I think what GitHub did, to Adam's point, is really normalized in scale open source software development, where the code review is not merely by your boss, or your colleagues, or somebody who you know personally, but it's by strangers on the internet... And it's often, and it's at scale. And that can be, I think, more anxiety-inducing, because now it's like "The world has seen what I've done."

Having said that, I don't know how you fix anxiety necessarily, but in my experience one of the ways that I do it is just do the same thing over and over again, and so slowly I get used to that. And I think code review at scale is that. So GitHub allowing you to not get judged once a month or once a week, but maybe constantly over the course of years, eventually you become numb, or callous to the judgment, and you're just like "It's not a big deal anymore." And so maybe in that way, GitHub is helping us fix our code review anxiety. What do you think?

**Carol Lee:** Oh, I love this so much. Yeah. I mean, okay, so what you say --

**Adam Stacoviak:** So here's the flipside, right?

**Carol Lee:** No, I love this. I mean, what you say is also very true. We call this exposure or habituation; you kind of get used to an experience, and you're like "Hey, actually, it's not so bad." So not to get too in the weeds or get too nerdy about anxiety - let me know if I am - the way that anxiety can develop some times is that yes, you do this thing a lot of times, but for some people, instead of thinking "Hey, here's my 100th pull request. Just same old, same old", right? They might engage in something called experiential avoidance, we call it. So this is when you kind of avoid the whole experience. You're just kind of like "I don't know, just press the thing." And so every time you press Submit, you're actually still feeling anxious, so you just never move past it. Or you might just have some really intense negative thoughts, where you're like "I don't know, Adam just hates me. I just know it. Adam thinks I'm so stupid. My gosh."

\[14:20\] And you just never consider "You know, Adam doesn't care what's happening. Adam probably is just living his best life." And so you don't consider that, and so you can imagine, the 100th time you have to ask Adam for something, you're like "Oh my God, Adam still hates me. I've asked him for something 100 times now. My God." The anxiety just builds.

So it really just kind of depends. I kind of take it as like "Let's not blame the tool." And I know I jsut blamed GitHub, you know... Very jokingly.

**Jerod Santo:** Adam set you up for it.

**Carol Lee:** Yeah. You know, it's not really the tool's fault. There are ways that we can kind of mitigate our own anxiety ourselves, and then there are also ways that we can mitigate people's anxities for them as well. We can take the time to write something more thoughtful.

**Adam Stacoviak:** Anxiety is a byproduct of fear, right? You fear an outcome. It can be true or false...

**Carol Lee:** Yeah, it's like the expectation of fear. Yes, yeah.

**Adam Stacoviak:** And so in this scenario, you assume that I'm not living my best life. Maybe I totally have hate for Carol, and she's just not the goodest person ever. Excuse my poor English there...

**Carol Lee:** It was perfect. I loved it.

**Adam Stacoviak:** Right. But meanwhile, I'm a fan. And I'm for you. But inside you, you have what you call experiential avoidance. You're avoiding something because you have fear that creates anxiety about an action, so then you procrastinate or just don't take the action, because you have a perceived or assumed scenario of outcome hat is or may not be perfectly true.

**Carol Lee:** Yes, exactly. Yeah.

**Adam Stacoviak:** I'm a dictionary, basically.

**Carol Lee:** I love this. No, I mean, not to get -- just gently get into some \[unintelligible 00:15:58.06\] I liken code review anxiety a lot to social anxiety. And this is actually based on a model of social anxiety, which is very common. It impacts 11% of the population. Fun fact. But social anxiety has to do with feeling like you're going to be judged, or just feeling anxious about any social interaction, or some sort of perceived performance situation. In code reviews you're interacting with people; that's social. And you're kind of like putting your work out to the world and being like "Here I am. Coder. Wonderful", which can feel like a lot of spotlight attention. And two major things that impact social anxiety and kind of socially relevant anxiety are like probability and cost biases. So these are two cognitive biases that folks experience, where they overestimate the likelihood that something bad's gonna happen - that's probability bias. So you're like "Adam's gonna say something mean to me. I just know it." And what's really interesting is that they overestimate the cost of that bad thing happening. That's the cost bias. So I'm like "Adam says something mean to me, and that means that I'm a bad coder, and I don't deserve to be here." It's not just like "Adam said something kind of rude. F that guy."

**Jerod Santo:** Right. It's on him, not me.

**Carol Lee:** Yeah. But you take it as something really intense and bad is happening. And then you also experience this thing called low anxiety self-efficacy, where - to the experiential avoidance point - you're like "I can't handle this anxiety. There's nothing I can do about this." So yeah

**Jerod Santo:** Which can be crippling, right?

**Carol Lee:** Mm-hm.

**Jerod Santo:** So when you talk about anxiety in the context of your study, I think it's worth narrowing in on it, because we've been talking about it, but actually, when I thought about code review anxiety, that term, I actually brought my own different anxiety, my own baggage to that term... And so it was interesting to read your study, because I'm like "Oh, it's specifically narrowing in on fear of judgment of my code." That's pretty much what code review anxiety is. "My code is going to be reviewed by someone. They're going to judge it. That makes me anxious", which makes total sense, and that's the context.

\[18:09\] But what I was thinking was like "There's other anxieties I have around code review." Like, my code is going to sit there and not get reviewed for a long time. And that makes me anxious. Or, on the other side, somebody wants me to review their code, and that makes me anxious, because I don't like to do that, I don't want to do that. I'm doing the avoidance thing, and now I'm a blocker for them to do their job, and that makes me anxious... So there's other ones that are kind of tangential that I was bringing to the table, but those aren't the things that you studied specifically, right?

**Carol Lee:** It's actually anxiety about your code, like asking for it. So it's actually about the code itself. It's also about the process of asking. So sometimes folks feel anxious about like "I asked for this weird", or they might say something like that... But it's also about the process of giving a code review, exactly what you were saying. A lot of -- I had several kind of staff level engineers who were like "You know what really sucks about being staff? It's that you feel pressured to give the best code review, and it has to be right." Honestly, I don't know if -- that's a lot of pressure. "It's just a lot for me", and they feel paralyzed, and they, as you say, avoid it, procrastinate etc. Yeah.

**Jerod Santo:** There's a lot of stuff that goes into that, because the person who's requesting that code review, you might actually look up to that person as a coder. And you're like "How am I supposed to review your code?" "I think your code's awesome most of the time. I don't know what you're doing here." And then there's like "I don't know what you're doing. This must be really smart." And then it's like "Well, is it though? Or do they not know what they're doing either?" There's so many question marks there. And then you have the size of the code review as well... There's an old joke that if you submit a 5,000-line code review, then the reviewer is going to give you an LGTM, and they're just like "Looks good." But if you submit a five-line code review, they'll write a treatise on your code style. You know, there's something weird going on there, where we don't mind analyzing \[unintelligible 00:20:00.27\] details... But a big view for us is like "I can't actually review this. I'm just gonna say it looks good." So there's so many facets to this.

**Carol Lee:** Absolutely, yeah. Yeah.

**Jerod Santo:** What did you guys actually do for this study? How did you conduct it?

**Carol Lee:** Yeah. Not to toot my own horn, but I'm pretty freaking pleased about this study. We did something called a randomized control trial. You see this a lot in health research. So when you think about "Does this medication work? Does this treatment work?", people use a randomized controlled trial. So it's a very rigorous experimental method. You don't often see it in applied research, and certainly not in applied software research... But that's what we did. And so basically, we put out an open call that was like "Hey, do you experience code review anxiety? Come join this study and learn how to manage it."

Basically, folks get randomized to one of two conditions. A control condition, or the treatment condition. And then ideally, folks in the treatment condition improve, and then control not so much; they didn't get the thing. And that's exactly what we've found. It was only like a two-hour workshop intervention. So this is kind of a common method to use in mental health experiences, where you're trying to reach a bunch of people at once. It's a little bit more scalable, you don't have to schedule a one on one with everybody... So we did that, I delivered these workshops, and the workshop had several major components. The first major component is we teach people how to just manage physiological symptoms of anxiety. I often talk about it as like if you are literally hyperventilating, the only thing you can think about is the fact that you're hyperventilating. It's really not useful for me to be like "And here are some other things you can do." You're like "I'm literally trying to breathe right now." So the first thing we need to do is reduce that hyperventilating. So kind of teaching things like that.

\[21:50\] And then the bulk of it is kind of thinking about what are your cognitive biases that you bring in, and then what can you do to kind of challenge them? It's a cognitive behavioral technique. So we worked on kind of teaching that, identifying biases... Folks brought up things like -- one that really always stuck out to me is one person was like "This review is going to be so bad that XYZ is going to leave the company." I'm like "Wow, this person hated your review so much that they left the org? Seriously?" So kind of things like that.

Or someone will say -- one person had a thought that kind of broke my heart a little bit, that was like "My team is never going to respect me or my code." That's a scary thing to walk into a code review with.

**Adam Stacoviak:** Oh, man.

**Carol Lee:** Right. If you're walking into every code review and telling yourself "My team will never think I'm smart. They never think this. It doesn't matter what I do", you can imagine you're actually creating a lot more anxiety for yourself. A lot of times we don't even realize we're telling ourselves these things. We just kind of go about our world, and we're like "Yeah \[unintelligible 00:22:49.09\] So kind of creating awareness and thinking about "What are the things I actually tell myself before I enter a code review?" And then identifying those, and then actually challenging them, to think about a more self-compassionate and realistic way to think about it. So asking yourself "Is this actually true? Do I actually have any evidence for this? Are there other possible reasons?"

A nice self-compassion technique is -- if this was someone you were mentoring, and they had this thought, what would you say to them? Or if this was your best friend, and they were like "Yeah, you know, everybody hates me", what would you say to them? And then moving from that, actually teaching folks how to actively engage with code reviews to reduce that avoidance. So yeah.

**Adam Stacoviak:** That one you were talking about, where you manufacture this idea, so to speak, this fear. It's called catastrophizing, right? I personally am a daily practicer of catastrophizing. I don't want to be, but I do. It's just something that you do. It's the gutter syndrome, or the gutter spiral, whatever you want to think. It's not a good place. You begin to assume certain truths are true, they're not true, but you've now just worked whatever it is up so bad that the outcome from this scenario is only the worst possible ever outcome. And that's the truth.

**Carol Lee:** Yup.

**Adam Stacoviak:** Catastrophizing is absolutely the worst place to be. I can say that, because I've been there, I've done it, and I've got the T-shirt. I'm not wearing it today, though.

**Carol Lee:** Adam, I am also a catastrophizer. So there's several kind of -- we call them cognitive distortions that we go through, and I kind of have everyone be like "Alright--" Chances are there's some of these where you're like "That one speaks to me." Some people are like "I am 100% a mind reader. I just think I know what everybody's thinking, and it's bad." But I actually don't know what this person is thinking at all. So it's kind of a fun thing to be like "Okay, you're doing the thing again, doing the mind reading again... Come on, Carol, get it together..." So I think that could be super-helpful, too.

**Break**: \[24:57\]

**Adam Stacoviak:** And you mentioned this in section 1.2 -- I'm gonna get very specific here.

**Carol Lee:** Okay...

**Adam Stacoviak:** You mentioned -- I think this is what it relates to. You say "Cognitive behavioral approaches elicit certain change. There are three key processes." Awareness is what you were talking about. "Okay, I'm thinking I'm a mind reader; I'm not really a mind reader, Carol. Calm down." And that's awareness. Awareness that you're doing something, and whatever you can do to sort of begin to undo that thing. It involves psychoeducation you say, self-monitoring, relaxation techniques, taking a bath, self care... I mean, even trimming your fingernails can be things that you could do to -- I mean, that's a random one, because I like to trim my fingernails...

**Carol Lee:** I was gonna say, like, "Adam, do you enjoy nailcare?"

**Adam Stacoviak:** Hey, \[unintelligible 00:28:31.05\]

**Carol Lee:** \[laughs\]

**Jerod Santo:** Did Adam throw hat one in, or is that in the paper?

**Adam Stacoviak:** My fingernails are really great. I keep my fingernails trimmed.

**Jerod Santo:** And that helps you to not get anxious? Stop catastrophizing?

**Adam Stacoviak:** Well, I don't know if I do it then, but I just thought of that randomly, so don't judge me.

**Jerod Santo:** Okay, fair.

**Carol Lee:** Adam just wanted us to know that he has excellent nails.

**Adam Stacoviak:** You're judging me, Jerod. Now you're gonna hate me forever.

**Jerod Santo:** I'm not judging you, I'm just inquiring more. I'm just curious.

**Adam Stacoviak:** I'm just kidding with you. No, I'm saying that as a joke in regards to the conversation.

**Carol Lee:** I took it very seriously. \[laughs\]

**Adam Stacoviak:** It's a catastrophe.

**Jerod Santo:** This is gonna go so poorly for you, Adam... I mean, no one's gonna listen to our show anymore.

**Adam Stacoviak:** This is it. Zero listeners after this.

**Carol Lee:** Every question is gonna be like "Can you tell me more about your nailcare?"

**Jerod Santo:** Yeah. They're like "I liked that show, and they started talking about nailcare, and I won't listen, ever again." \[laughs\]

**Adam Stacoviak:** I do have a recommendation for a nailcare kit...

**Carol Lee:** Oh, tell me.

**Adam Stacoviak:** ...that I recently got, that's super-sharp, off of Amazon. I was surprised by it. I actually cut myself the first time I used it...

**Carol Lee:** I don't know if that's a good thing.

**Adam Stacoviak:** I it a lot. It's only two parts, it's not very expensive, and I didn't do much research, I just bought it and liked it, so I can recommend one. There you go.

**Carol Lee:** You'll post a link later. I like it.

**Jerod Santo:** Affiliate link. Yeah, we'll get the affiliate link out there.

**Adam Stacoviak:** Let me get these three out there though. We're stuck on one. So there's three key processes. One is self-awareness, or being coming aware, the second is reducing biased thinking, and increasing constructive and compassionate thinking. And you go on. I'm not gonna read it verbatim. And the last one you say is reducing avoidance. And then you say exposure. So doing more of the code review, doing more of the thing that you're afraid of somehow - I don't understand this - somehow makes you less afraid. Can you explain these three things?

**Carol Lee:** Yeah. So it sounds like you're mostly curious about the exposure piece in particular, correct?

**Adam Stacoviak:** I'd say all three, really. I think awareness is super-key. You can only get better at something -- it's like measuring metrics. If you don't measure the thing, you can't improve the thing. And if you have a scenario or a situation, and you're not aware that there's a scenario or situation, you're not going to become better at it, because you're not aware that there's a problem, or a challenge, or an issue. And I think that's super-key. And reducing that biased thinking I think is super-key, because it's a symptom of catastrophizing. When you do that, it's biased thinking. You're thinking "It's the worst, it's never getting better, and once this is done, it's over." Some version of that is true in some way, shape, or form when you catastrophize.

And then obviously the last one, I think, which is the one I don't know much about, which is "How in the world can I do more of something that I don't like, to get better at it?"

**Carol Lee:** Yeah. I mean, like you said, awareness is really key. I always say, you literally can't do something about a problem if you don't even know the problem exists. That's just a fact. I think it's really interesting... I had a lot of folks who would say things like "Oh yeah, I always avoid code reviews." And I was like "Well, do you feel anxious about code reviews?" And they were like "You know what? I think I do." You just kind of avoid the thing, and you're like "Hm. It turns out I am anxious." it's like "Great, now we know why you avoid them, so now we know what to do, which is try to reduce that anxiety." And I think that's a really key piece. Same thing with those biased thoughts, like "I don't know why I feel so terrible about myself before a code review", and it's like "Well, you're literally telling yourself that you're terrible, and people hate you, so there we go." It's like "Oh, right. I am telling myself that." So kind of knowledge is power here.

Like you said, reducing physiological arousal helps with things, challenging those thoughts, asking yourself "Hey, is this actually true?"

The exposure piece is super-interesting. So part of it actually refers back to what Jerod was saying earlier, where you do the thing a lot of times, and you kind of get used to it. For some people, they're able to say "I did this a lot of times, and I still feel anxious, but I feel like I can manage it." Or "I'm okay with the anxiety now. I'm chill with it." And then you being chill with it reduces your anxiety. It's very paradoxical.

\[32:19\] But there's also this way in which you -- like I was saying earlier, you kind of avoid thinking about the code review, and you're just focused on getting it over with. Maybe you open the thing up and you're like \[unintelligible 00:32:31.28\] and then you close it out. You're like "It's done. Thank God." And so exposure here really involves "Okay, let's practice that awareness during the entire code review."

So folks after the workshop get a toolkit to do during their next code review, and it asks you "Okay, what is your anxiety like now? What can you do to manage it now? Okay, keep working on your code review. What is your anxiety now? What can we do to manage that now?" And so it kind of gives you practice on saying "Hey, actually, my anxiety isn't in control of me. It's not this thing that I have to run away from, and therefore run away from code reviews. I can approach a code review and learn" - and this is a new learning kind of theory; you can learn that you can actually handle it.

So the more that you kind of actively engage with the code review, the more that you walk away learning "Hey, you know what? That wasn't so bad. I actually managed to reduce my anxiety, I managed to do the thing, the world didn't end..." Cool. Right?

There's also kind of a method here where proactively engaging also means that you're also expressing how you feel about your code. A lot of times - and people kind of do this and they shoot themselves in the foot, where they're really anxious about their code. And maybe they're super-confused; they don't feel comfortable with it. And they just kind of quietly put it out into the world, and they're like "It's done...!" And when you do that, people are like "Okay, this person feels confident. Let me just give them the review." It also -- I mean, it's really hard to remember... And I say this even as a psychologist. When you're working on a computer, interacting with somebody's work, it's sometimes really hard to remember that there's a person with feelings on the other side of it. You're like "Here's the code. I'm going to review it." But that code belongs to somebody, and that person has feelings, and maybe anxiety. So you can ask for a code review in a way that elicits some humanity. You can say things like "I'm just really not sure about this section. I'm kind of feeling anxious here." And oftentimes when folks read things like "I'm uncomfortable here", or "I'm feeling anxious", that cues them to be like "Oh, this person doesn't feel good. I should be gentle with them." In contrast, when you just kind of put it out there, people are just kind of like "Nah, you should change this." And then you read that feedback and you're like "This person doesn't like me." So you can actually elicit kinder code reviews by actually sharing that you're anxious. So I think that's just kind of an interesting way that exposure can work there, too.

**Jerod Santo:** It's kind of like awareness on the other end. You're making somebody else aware, and that helps them help you. Yeah, that's really interesting.

**Adam Stacoviak:** That toolkit it reminds me of the idea of front-loading. You know about front-loading, right, Carol?

**Carol Lee:** Say more.

**Adam Stacoviak:** So front-loading is whenever you have - at least to my knowledge; this is how I'm aware of it, or what the term means to me... Similar to you, Jerod, you don't want to go to the gym and play basketball without your shoes. So what do you do? You front-load. You prepare the night before. This toolkit is a preparation for anxiety reduction in the act of. So when you don't have your frontal lobe fully engaged, you're less rational thinking, you do the front-loading, the pre-thinking when you have rationality in a more key state for you, so that you can better plan. So when you're weak, you use the strength you had beforehand to empower you when you're not. So Jerod, you hate not taking your shoes to the gym, right? So what do you do?

**Jerod Santo:** \[36:07\] It was my socks in particular, but...

**Adam Stacoviak:** Sorry, your socks.

**Jerod Santo:** I appreciate that you're pulling this back. Carol, this is from a previous conversation we had.

**Carol Lee:** I mean, nailcare, shoes, socks... I feel like I'm learning a lot of really personal things, and \[unintelligible 00:36:15.15\]

**Adam Stacoviak:** Ah, I messed up. It sucks. It sucks...! \[laughter\]

**Jerod Santo:** It's alright. I mean, shoes and socks are two of the same. They go on each other. Yes, I do -- so to get everybody on the same page... I play basketball early in the morning, I'm not usually entirely awake as I'm driving to the gym. I can forget stuff. And one time I forgot my socks. Well, you go to the gym - and it's a 20-minute drive - to play basketball, and you don't have socks when you show up? That's a very bad morning. And so I had that happen to me once, and ever since then, I'm very anxious about "Do I have my socks in particular?" So much so that I'll check for my socks even though I know I have my socks. I'm getting to the point where it's like "Is that neurotic?" I don't know if that's neurotic behavior...

**Carol Lee:** It's like slightly compulsive now, but that's okay. Yeah.

**Jerod Santo:** Yeah, and intellectually I know, beyond a shadow of a doubt, that I have my socks. But you know what? I'm going to check anyway. \[laughs\]

**Carol Lee:** The sock trauma is real. I get it. That's fine.

**Jerod Santo:** That's what Adam was referring back to. He just happened to switch up the item of clothing. But...

**Adam Stacoviak:** Thank you for the background there, Jerod... And sorry I crossed over socks to shoes, but... It all makes sense to me in my brain. I was trying to get the story right.

**Jerod Santo:** Yup. It's alright.

**Adam Stacoviak:** But the idea of front-loading is that you plan ahead, when you can plan ahead, so that when you're weak - like, early in the morning you're less awake. You don't have that. And so smart Jerod, the morning before, or the night before, put the socks in the bag.

**Jerod Santo:** Yeah. He totally did.

**Adam Stacoviak:** And you know they're there.

**Jerod Santo:** Yeah, exactly.

**Carol Lee:** Yeah. I know. I feel like humans we really love to go with the flow, and chill, and really loose and wonderful, which is great, but also we thrive on structure. Structure helps. That's just the end of it. So yeah.

**Adam Stacoviak:** Right. It also gives yourself guardrails, too. It's like "When I was thinking thoroughly, in a comfortable setting, with no threats, lack of fear, or less fear, therefore no anxiety, I can more clearly define and plan the next time I'm in that threat zone", so to speak. Right?

**Carol Lee:** Yeah.

**Adam Stacoviak:** And that's what I call front-loading. You prepare for the times when you're weak. You do it with dieting, you do it with all sorts of things, is this pre-preparation whenever you have a more rational mind. Because it sucks whenever you're -- and me, Jerod, I'm back to my OMOD; so it's kind of crazy... OMOD is one meal a day, Carol. So I eat one meal a day. I fast all day long, I have a break fast, I call it a break fast, at like five-ish, five thirty-ish...

**Jerod Santo:** 5:30 AM?

**Adam Stacoviak:** PM.

**Jerod Santo:** Okay. \[laughs\]

**Adam Stacoviak:** And I break my fast at like 5 PM, 5:30PM, and then I have dinner with my family. And then I don't eat anymore until the very next day at that same time. But I can only be strong --

**Jerod Santo:** You're a glutton for punishment.

**Carol Lee:** That's where the nailcare comes in, you know? \[laughter\]

**Jerod Santo:** Yeah. Like, "I've gotta keep myself busy here."

**Adam Stacoviak:** Let me get my kit out here. Hang on a second.

**Jerod Santo:** I think it's funny you call it OMOD, because we all know the sound is MAD, because you're gonna be mad if you're gonna have one meal a day.

**Adam Stacoviak:** That's right, that's right.

**Jerod Santo:** It's not MOD, it's MAD. We all know that. But go ahead.

**Adam Stacoviak:** Well, you know, here's an example. So this morning or the evening beforehand I always prepare an oatmeal, kind of overnight oatmeal kind of thing. Oat milk, oatmeal, a little bit of frozen blueberries... But what that lets me do is it prepares me. That's my prethinking through this, so that whenever I'm weak, and I get home and I'm like "Gosh, I'm hungry, I'm ravenous", or I'm ready to eat, rather than grabbing a snack or something in high sugar or something else, I've preplanned, I've front-loaded my plan. And it keeps my discipline rails on rails. And you can apply that to code review, you can apply that to all sorts of things, but it's the idea that whenever you're weak, you make less wise choices.

**Carol Lee:** \[39:55\] Yes.

**Adam Stacoviak:** And so prepare and plan beforehand, and have a plan for when you're weak. And that's kind of what this toolkit you gave them - almost, but not fully; almost. It's a check-in during the process, but it's like, you have less anxiousness because "Do a little bit. How are you feeling now? Do a little bit. How are you feeling now?" It's something like that, that helps somebody in that moment of despair or crisis not have despair and crisis.

**Carol Lee:** Yeah, absolutely. I mean, we often talk about -- we also call it coping ahead. The worst time to start something, to start an anxiety protocol, is when you're in the middle of an anxiety episode. The worst time to start dieting is when you're extremely hungry. This just does not make sense. You have to kind of plan ahead. Yeah, yeah, absolutely.

**Jerod Santo:** How much does identity play into code review anxiety? And by that, I mean how closely I identify with my code. Because the fear of judgment often is stronger when it's personalized; like, I am being judged, not my code is being judged. And I've found that over time I have benefited by detaching myself from the code that I wrote, in order to not feel harmed by negative review of said code... Which took some time, but it allowed -- the framing I changed in my mind was instead of "I came up with a solution", it's like "I've discovered a solution." And it's not really the -- it's not me. It's just "Here's what I've discovered. Of course, I wrote it, but is this good?" It's like "Nah, maybe that's not the best discovery." "Okay, let's go find something else." And so that's helped me just to be like "It's not me. It's my code."

**Carol Lee:** Yeah. No, I love that. I didn't look at that in this study, but we've looked at kind of how much folks identify with being a developer; how that can impact things. How threatened you feel by AI, for example. So there is kind of this piece of how much you identify with something does have an impact. You say that over-identification piece... Absolutely.

**Jerod Santo:** Yeah.

**Carol Lee:** I love that you do that. Not to be \[unintelligible 00:41:57.15\] what you kind of do, we call this process decentering. It's like when you're able to kind of decenter from experiences, and not over-identify with them. It's a really top-notch thing. It's like a power mechanism that kind of aids you in dealing with stress and anxiety across time.

**Adam Stacoviak:** Dang, Jerod. Top notch.

**Jerod Santo:** This is a good code review. Yeah.

**Adam Stacoviak:** Keep going, Carol. He's liking in it.

**Jerod Santo:** Yeah. Tell me more. No -- well, here's how this is easy, I think, for software developers over time.

**Carol Lee:** Some software developers.

**Jerod Santo:** Okay, here's how it could be easy for all of us if we think about it the way I do. \[laughter\] Here's my pro tip. Over time you realize that code that you wrote six months, nine months, a year ago is so foreign to you, it is as if somebody else wrote it. This is a common experience for software developers. Well, if you just realize that all you're doing is delaying that foreign aspect of it, then code you wrote yesterday is pretty much written by somebody else also... And so you don't have to identify so closely with it. And then you just don't like the code; you like the features, you like the value it provides, but the code itself is a liability... Those two angles - why would you want identify with something that's a liability, and that was written as if by a stranger?

**Carol Lee:** I'm really loving Adam's facial expressions through this...

**Adam Stacoviak:** I'm liking yours, too.

**Jerod Santo:** \[laughs\]

**Carol Lee:** Were you looking at my face? I was looking at yours. \[laughter\]

**Adam Stacoviak:** Yes.

**Jerod Santo:** You were looking at each other's faces, just --

**Adam Stacoviak:** You were making that face at my face?

**Carol Lee:** I think so... Because your face was just like slowly -- slow disbelief...

**Jerod Santo:** Is this a weird way to think?

**Adam Stacoviak:** No, I actually like it. Let me toot your horn a little bit, Jerod.

**Jerod Santo:** Oh, gosh...

**Adam Stacoviak:** This is what I like about you. I think you're a pretty analytical and rational thinker for the most part.

**Jerod Santo:** Okay.

**Adam Stacoviak:** And I've gotta give you the "for the most part", because I can't give you the full 100%. It's not 10 out of 10. It's 8 out of 10.

**Carol Lee:** The sock anxiety is real, is what I've learned about Jerod.

**Jerod Santo:** It is not rational at all, I know that.

**Adam Stacoviak:** \[43:58\] And I get that. I totally identify with that, because I'm the same way with locking a door. I check the front door before I go to bed, I check the front door when I get home, I check doors that I know I've locked, again... I will get out of the truck and go back and confirm I locked the doors.

**Carol Lee:** I'm so sorry to your audience, because I feel like they're learning a lot about random things about you all today, and I'm so sorry.

**Jerod Santo:** You have brought out our anxieties, Carol...

**Adam Stacoviak:** Well, it is a podcast, and we do talk... You're inviting us to do so, so I don't mind it.

**Carol Lee:** I love it...

**Adam Stacoviak:** But what I like about this is that this is a good framework. And it's because you've been a software developer for a while, you have folks, I suppose, have the benefit of hearing from your experience. And so I think to be a seasoned, career-long, 20-year-plus software developer, you have to have frameworks for how to feel about what you do, especially in anxiety-inducing situations. And so your coping mechanism has been - and this is who you are - create a framework that you can repeat over and over, so it gets easier. Right? You said that already.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And the framework is "Well, if in six months I'm going to be detached from it, why not just immediately detach right now? Because if it's going to happen, it's already happened."

**Jerod Santo:** Exactly.

**Adam Stacoviak:** And that to me makes a lot of sense. And I think we benefit from that... I think we slash the audience benefits from that, because I think you're a pretty critical thinker of what you do. I don't think you make -- not so much unwise choices, but you think deeply about the choices you do make, and you analyze, and minimalize when necessary. So I think as a means of minimization and reducing anxiety and detaching, that's your way, and that makes sense.

**Jerod Santo:** Well, I guess that leads me to another question for Carol, which is that we create frameworks and tools in our minds and in our lives in order to deal with situations that we're anxious about, we are nervous about, we have a problem with, but we have to go through them. And there are other situations that we don't do that for. For instance, I'm also very anxious about jumping into a swamp filled with crocodiles. That makes me very nervous. So I don't do that, because there's no value there on the other side. I'm no Indiana Jones. So apply that to code review... Why should we then have all these coping mechanisms and building up exposure and do all this stuff so we're not so anxious? Is code review worth it, then? Because if it's not worth it, we could just do the avoidance thing, and that's actually a win... But is it worth it at the end? Is there research on this? Is that actually good?

**Carol Lee:** Yeah, there actually is. Yeah. I mean, you kind of have to assess "What is the benefit of here?" Agree. There's no point in doing an exposure to something if it's not going to benefit you... It's also not -- there's no point in doing any sort of exposure to something if you're like "I'm never going to come across this situation in my life. Why get used to this thing that I'm literally never going to have to do?" But code reviews, there is research showing that it does improve code quality, so there's that piece. So you may want to do that, or you may be asked to do it; you can't get out of doing it if you're currently being told to do it, for example.

**Jerod Santo:** Right.

**Carol Lee:** I think what's kind of really lovely too is that there's also some research showing that particularly for folks learning new kind of languages, or new skills, code reviews are a really valuable way to get mentorship, or to kind of create learning. So getting that feedback on something you've done is a great way to learn new methods, new ways of thinking. And so that is really cool. There's also research that shows that code reviews can create a sense of community between folks, which is quite lovely... So yeah, there's kind of these other benefits to code reviews outside of "You probably have to do it anyways", like you're going to be asked to do it. So in that case, yes, it makes sense to kind of cope with this.

\[47:47\] Kind of to bounce off on your kind of note about frameworks, right? The key thing about having frameworks or coping mechanisms is to learn how to apply them flexibly. You're not like "I am going to always do things that make me anxious, always from now on." No. Terrible idea. So you have to be flexible about that. But even with your framework of like "Hey, this code is basically - a stranger wrote it six months ago." You also don't want to apply that so rigidly that when someone's like "Hey, I really love this thing you did", you're like "Oh, someone else wrote that six months ago."

**Jerod Santo:** \[laughs\]

**Carol Lee:** That's how you don't --

**Jerod Santo:** I call that selective identification. "You know, I'll take this one..."

**Carol Lee:** Yeah. You wanna be like "Yeah, I did that. That was pretty cool, right?" And feel proud of yourself, and be like "Hell yeah. I'm pretty skilled, and I'm awesome." So you have to be flexible with that as well.

**Jerod Santo:** Yeah, that's fair. Take the compliments, and then when there are criticisms, you're just "That was somebody else. That wasn't even me."

**Carol Lee:** Oh, that was someone six months ago. I don't even know that person.

**Jerod Santo:** Yeah. I don't like me from yesterday.

**Carol Lee:** Yeah.

**Break**: \[48:51\]

**Adam Stacoviak:** I do like what you brought up though about the positive side of things... Because we've been camping out on this anxiety, because that's the whole entire point the research... But then there's the flipside, which is the not catastrophizing, the not-truth that you've thought it was, which is unification, better connection... So the easiest way to get out of conflict is to come together, right? You know this, Carol, because you're a psychologist. If you have disconnection, the only way to get connected is to connect, is to be around each other more. And so the code review process can be a very beautiful thing, and I would say with the caveat that if the team dynamic and framework is sound outside of the code review, you must have to also approach the teamwork, culture and aspects of what it actually takes to run the organization, and the teams, to ensure that a positive code review is possible. Because if you don't have respect, empathy etc. in that team dynamic, you're going to have anxiety-filled code reviews.

**Carol Lee:** Yes.

**Adam Stacoviak:** But if you have other things happening outside the code review that brings people together, and also the code review that brings people together, you're gonna have connection and not disconnection.

**Carol Lee:** Yeah, absolutely. So something that I really stress in these workshops too is that it's rational thinking, not positive thinking... Because you might have a thought, like "Jerod is gonna nitpick this. Jerod always nitpicks this." And maybe Jerod does always nitpick this.

**Adam Stacoviak:** \[52:12\] Sometimes Jerod nitpicks.

**Carol Lee:** Maybe that's just Jerod's thing.

**Jerod Santo:** I like to nitpick. \[laughs\]

**Carol Lee:** Or maybe you have a thought like "Jerod, doesn't me. And I actually know Jerod doesn't like me, because the other day he literally looked me in the eyes and said "I don't like you."

**Adam Stacoviak:** So harsh.

**Carol Lee:** It's not helpful to be like "No, he loves me. He won't nitpick it this time."

**Jerod Santo:** Right. Reality.

**Carol Lee:** Exactly. So in those cases you might be like, "Okay, well, Jerod is going to be mean to me. We know this. Jerod doesn't like me." So what are my thoughts about that? I might feel like that's personal. Like, because Jerod doesn't like me, and Jerod is going to nitpick, that means there's something wrong with me. So then you might think "Okay, this is going to happen. It sucks. It's going to happen. But that doesn't mean that I'm the worst thing ever."

It's really interesting, actually... So something that I really love about -- well, love... I know it's like a sad thing, but something I love about social anxiety is that with the other kinds of anxieties, we often talk - people overestimate the probability. And the probability is usually very, very low to none. So with panic attacks, you're like "If I hyperventilate, that means I'm gonna have a heart attack and die." And you're like "That's not gonna happen." But with social, you have these ideas of "People are gonna laugh at me." And it's like "You know what? They honestly might." The probability isn't zero with social situations. So it's kind of an interesting thing where it's recognizing the realistic probability, instead of saying it's not going to happen, and instead really hammering in on "Okay, what's the cost of this?" Like "Yeah, someone laughs at me. Does that mean I'm the worst thing ever? What does that mean?" Maybe this person is just kind of rude, I don't know.

**Jerod Santo:** Yeah, that's interesting... You have to put both of those factors into your equation, basically. Not merely the probability of it happening, but if it does happen, which you already have thought about the probability of that - but it could; and if it does, what's the actual real cost or consequence, or however you look at that. And not the catastrophized one. Sometimes you need somebody else, by the way; talking about connection. Sometimes when we catastrophize, it's helpful to talk to somebody else who's not currently catastrophizing, who also might have a penchant for that. Sometimes you get two catastrophizers together and it'll just go bad. It spirals.

**Adam Stacoviak:** Bad situation.

**Carol Lee:** It's a bad situation, for sure.

**Jerod Santo:** Yeah. But this is why it's nice to have a partner that counterbalances you. They can help you to say "Is that really what would happen? Aren't you putting an assumption on top of an assumption there, which is dangerous?" But if it does happen, what actually would be the fallout? Not the fake fallout I'm thinking of, but a realistic fallout, And it could be a high probability of it happening, but the consequences are like "Who cares?" Or it could be a low probability of happening, but if it does happen, "Wow. Maybe I could lose my job", and now we have to seriously think about it. So I think that multivariate thought process I think is very, very powerful and useful.

**Carol Lee:** I always encourage people to think about - okay, so let's say this thing happens. So what are you going to do? Because sometimes people will be like "I wrote a bad code review. They're gonna fire me." And I'm like "Okay, that probably won't happen because of a single code review. But let's say you get fired." Because people do get laid off, and people do get fired. So you got fired. So what? They're like "Well, that's just bad." And I'm like "It is bad. But is it the end of the world? What's going to happen here?" Like, "Well, I mean, I guess I have some savings put aside, so I'd be okay... And I'd look for another job, and tap into my network..." Okay, so it's not the end of the world, is what we're saying. I think sometimes taking that extra step, jumping off that cliff, so to speak, can be like "Now what?" "Oh, it turns out I had a parachute. Cool."

**Jerod Santo:** Is the toolkit that you provided during the study - is it published somewhere standalone, or online, or...?

**Carol Lee:** \[56:03\] Yes. I totally forgot to mention this. I guess I should also mention that the results of the study were good; people got less anxious, just to kind of put that out there... \[laughs\]

**Jerod Santo:** Awesome.

**Carol Lee:** They also felt like they could handle their anxiety more, and they were more self-compassionate. So really good findings all around, for our pretty rigorous design. So because the study results were good - I wouldn't have done this if the study results were like "This doesn't work." I actually created a workbook. So me and my co-worker \[unintelligible 00:56:29.09\] Kristin foster marks, we created kind of a self-guided workbook, so that you can work through the intervention yourself if you wanted to. And then with this workbook, the kind of minitoolkit is also there as well.

And then we're also actually in the process of working on a themed retrospective template. So we've got a few requests from folks who are like "I want to talk about could review anxiety with my team, but I don't know how to do that." Well, we can write you a little template on how to do that, for example. So yeah, both of those things are publicly available. I can provide a link, and folks can kind of check it out if they want.

**Adam Stacoviak:** Aside from this research and this workbook you mentioned, have you, or is this - I suppose "have you" is one question, but then is this practice formalized in any way? Because I'm thinking like "Gosh, you could probably go out there on your own and make a killing." Just go into team to team to team instantiate culture, love, respect, empathy, etc, those things that are connection-forming at the team level... And then also just like in a lot of different ways. Because I think we have a show that's on hiatus, maybe forever, called Brain Science. And this was part of my goal with that show. So we produced the show, 30-ish episodes. My counterpart was a doctor in clinical psychology, so very much similar to your type of role and your background. And I was the layman. I was the layperson. I was just curious about brain science, and behaviors, and all these different things. And so we navigated lots and lots of conversations. I think you would actually really enjoy it based on this conversation, but... One of my thoughts with that was that there is just so much missing out there. Almost so much that there's missing in your field, in your expertise, and the ability to apply it, and the ability to framework it, and educate, that people just basically are walking around sick. Teams are sick; they're infected, in a way. And without someone like you coming in with this workbook or this research to kickstart this idea, they will remain sick. And if they don't listen to this podcast, they're not aware. To go back to one of the key aspects, the very first one, which was awareness; raise awareness.

So I guess my question to you is, if it's not formalized in any way, shape, or form, are you the kind of person that could formalize it to de-sickify a lot of these teams and people, to give them some ammunition and awareness to better cope with PRs, code review, team culture, and just ultimately create better teams to create better software, that creates better companies, that creates better... On and on and on?

**Carol Lee:** Yeah. I mean, I would say that that's the broad mission of our lab, the Developer Success Lab. I'm the clinical psychologist, but we've also got a social psychologist, a neuropsychologist, kind of working together to kind of help software teams... Because as you say, we have this whole wealth of human science, and it's not really applied to developers. Sometimes people will apply things like "Take a personality test." I'm like "That doesn't do anything. Move on."

**Adam Stacoviak:** Enneagram. You hear that a lot. And I believe in those things. Those are good things, but on their own, they're not the solution. It's a framework of solutions.

**Carol Lee:** Exactly. Yeah. And so we do our best to kind of provide the science for it. I mean, if there was a way to formalize it, yeah, I would totally jump on that. I do a lot of -- I mean, I'll speak at conferences, and I always end up chatting with folks one on one, where they're like "Can you help me with this?" and I'm like "I mean, can I eat lunch? But also yes, let's talk while I'm shoving this sandwich in my mouth." So I think things like that happen a lot. So you're right that a formalized process would be really cool. I'll tell you what, Adam - you find the people and I'll do the thing, and we'll get it together.

**Adam Stacoviak:** \[01:00:16.28\] Is that right?

**Carol Lee:** Yeah.

**Adam Stacoviak:** Okay. I was gonna put it all back on you. So my response to your "If it could be formalized" was "Guess what, Carol? It can be. And you should do it."

**Jerod Santo:** \[laughs\] Adam likes to assign homework as part of our show.

**Carol Lee:** I know, seriously. Okay.

**Adam Stacoviak:** I believe in you.

**Carol Lee:** Thanks.

**Adam Stacoviak:** This is great. This is great research. I think you're very smart. The way you think about this is exactly the way I think it should be thought about. I mean, I'm again the lay person in the scenario, going back to my Brain Science scenario with Mireille Reece, who is an amazing human being; I love her to death. She's awesome. And she was a great co-host with me on that podcast. We did a lot of great work, but it was unfinished work. And I don't know if we are able to finish that work, but I believe in the work required, and what can be done. Because the journey with that podcast was just simply where we got. It was way more than where we got. There was so much more to do. And the reason I was so motivated by it was because I had a curiosity. I think that's where you begin. But at the same time, there's so many people out there that don't connect their brain to the humanity they embody. Me and my brain - and there's certain things about the humanity of human beings, and being a human... Like, okay, I get upset because I'm human. I'm hungry. Okay, that makes sense. It's not because I'm a terrible human being, it's because I'm hungry. That's why I'm upset. Let me eat this --

**Jerod Santo:** Because you only eat one meal a day.

**Carol Lee:** I know, I was gonna say, because OMAD, or whatever...

**Adam Stacoviak:** OMOD.

**Carol Lee:** OMOD, yeah.

**Adam Stacoviak:** Hey, I'm not angry right now.

**Jerod Santo:** Are you hungry?

**Adam Stacoviak:** No.

**Carol Lee:** I know, but it's getting close to that time you're getting your food... Like, I would be hungry. I'm sorry, I shouldn't have brought it up.

**Adam Stacoviak:** Two hours-ish. But see, I'm a strong human being. I'm strong because I have my framework.

**Carol Lee:** Oh, yeah. Sorry, sorry.

**Jerod Santo:** And he front-loaded...

**Adam Stacoviak:** I front-loaded. Thank you, Jerod.

**Jerod Santo:** And he trimmed his nails.

**Carol Lee:** That's the key. And he has socks.

**Adam Stacoviak:** I'm wearing some socks, yeah...

**Jerod Santo:** Ready to rock, baby. Ready to rock.

**Adam Stacoviak:** Yeah. But I believe in you. I think it can be done, and you should do it.

**Carol Lee:** You know what? I think -- it's funny, my coworker, actually my manager, Kat Hicks, we always say "You know, there's agile coaches, but what people really need is a psychology coach for a software team." Every team just needs a psychologist coach, like really. But you know, until that's something -- I don't know if that's something people would actually invest in, but if they did, I would be there.

**Adam Stacoviak:** I think they would.

**Carol Lee:** Thanks, Adam.

**Adam Stacoviak:** I really do. I mean, I have that belief because of my history with this show. We did this show -- when did we start that show, Jerod? Four years ago... Pre-pandemic.

**Jerod Santo:** Let me see, slash one. I'm doing a slash one, and I got Episode One, published August 6th, 2019.

**Adam Stacoviak:** There you go. So I've been thinking about this idea for a while, and I know this challenge is out there, because that's why we're having this conversation. You know it's out there, because you did the research. You did the six long workshops, one hour each, and you did all the data, and you wrote this paper...

**Carol Lee:** Two hours each, Adam.

**Adam Stacoviak:** Sorry, two hours each.

**Carol Lee:** Give me the credit. Yeah.

**Adam Stacoviak:** My bad. Thank you. Two hours each. So I do believe there is this challenge out there, and I think that it begins somewhere, to solve the problem. And I think this paper might be your --

**Carol Lee:** Right. Well, okay, listeners, if you want it, drop a line. We'll start it there.

**Adam Stacoviak:** What's the best way to get in touch with you?

**Carol Lee:** Um, you can email me, carolslee \[at\] gmail.com.

**Jerod Santo:** There you go.

**Adam Stacoviak:** We'll put that in the show notes. So if you have a team that could use a psychologist, or just some of the workshop or workbook, you want to be a guinea pig for the beginnings of this -- what was it, the Design Lab? What was this lab?

**Carol Lee:** Developer Success Lab.

**Adam Stacoviak:** Oh my gosh, you've got a name, and everything. That's amazing.

**Carol Lee:** I know. We're a whole lab.

**Adam Stacoviak:** Developer Success Lab. If you want to be the guinea pig in Developer Success Lab's very first workshop for getting your team together, reach out to Carol. Links in the show notes.

**Carol Lee:** \[01:04:00.09\] Let's do it. Yeah.

**Jerod Santo:** Alright. So Carol, you have learned from us multiple anxieties that we hold and cherish... \[laughter\]

**Adam Stacoviak:** Gosh... We really out ourselves.

**Jerod Santo:** You and I shared much of your own anxieties. Here's what I think --

**Carol Lee:** I also know what Adam eats for breakfast, so I'm feeling really good about this.

**Jerod Santo:** Yeah.

**Carol Lee:** No, I love it.

**Jerod Santo:** I'm curious, as a clinical psychologist, do you ever get anxious because of the expectation of people have that you, of all people, should have everything together all the time? Because you have all the answers about how to --

**Carol Lee:** That's such a good question. I love that.

**Jerod Santo:** Have you ever thought about that?

**Carol Lee:** Yeah. So this is something that you learn very early on in grad school, because you absolutely feel like you have to have your \*bleep\* together in order to do the thing... But you do not have to have your \*bleep\* together, you just have to be aware of what your \*bleep\* is. So I keep saying that. Sorry, person bleeping things...

**Adam Stacoviak:** We'll bleep it three times, no big deal.

**Jerod Santo:** It's alright. Just three bleeps. It's easy.

**Carol Lee:** So yeah, I mean... I feel anxious. Absolutely. I experience anxiety. The other day I stayed up late, because I was like "Oh God, did I do the thing correctly? I don't know... Should I check my email? No, I should just let it go." We all have these moments. I think that's very normal, that's very human. I kind of think of it as a psychologist isn't someone who doesn't experience stress or distress, because that would be inhuman, and that would be super-weird... Also, why would you ever want to talk to a psychologist who doesn't experience stress? They can't relate to in any way whatsoever. That would be weird, right? But I think about a psychologist as someone who's aware of it, and knows how to manage it. They don't manage it perfectly every time, but they try, and that's the best that we can do as people. Also, you're always going to be better at helping other people than you are at helping yourself. That's just how we are. So...

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Can I out myself real quick here? Because I may have layered that on for you in this podcast...

**Jerod Santo:** Yeah, because you just declared her to be the expert for everybody.

**Adam Stacoviak:** Well, that just now, but at the same time, I stated something, and because I assumed she's a trained psychologist, I said "You know this, Carol." I said that twice at least.

**Carol Lee:** I mean, yeah, that's okay.

**Adam Stacoviak:** I noticed that, in retrospect; I'm like "Maybe I was putting that pressure on you..."

**Jerod Santo:** Because if she didn't know that, she wouldn't feel free to have said "I actually don't know that", because you had already assumed...

**Adam Stacoviak:** Yeah. My front-loading...

**Jerod Santo:** Did you hear that? Did you feel that?

**Carol Lee:** I didn't feel that. I didn't know that term, but once you started talking about it, I was like "Oh yeah, I know what you're talking about. Yeah." Which is why I said "Say more." I was like "Say more about this thing."

**Jerod Santo:** That was a very savvy way of responding, I thought, given a he front-loaded front-loading on you.

**Carol Lee:** I know.

**Adam Stacoviak:** That's right.

**Carol Lee:** Yeah. No, I did not feel that pressure.

**Jerod Santo:** "Say more", that's actually one of my favorite questions.

**Carol Lee:** I love saying that.

**Jerod Santo:** It's one of my interview -- I don't have very many pro tips, but we've interviewed lots of people over the years... And tell me more or say more is one of the -- you pull it out of your back pocket every once in a while and you'

re just like "Tell me more." Because you know there's more in there, and they just stopped, and they're waiting for you, and you're like "No, just keep going."

**Adam Stacoviak:** That's similar to my "How do you mean?"

**Jerod Santo:** Yeah, it is very similar.

**Adam Stacoviak:** It's similar. It's adjacent to that. It's not the same, but it's similar.

**Jerod Santo:** Yeah. "How do you mean?" is more directive. It's like trying to get an explanation out. Whereas "Say more" is like literally...

**Carol Lee:** Just like "Expand on that."

**Jerod Santo:** Expand.

**Carol Lee:** Yeah. Tell a story. Define it. Whatever makes you happy.

**Jerod Santo:** There you go. Well, this conversation made me happy. I don't know, Adam, are you feeling happy?

**Adam Stacoviak:** Very, very happy. I dig it. Is there a URL for Developer Success Lab?

**Carol Lee:** Yes. It's devsuccesslab.com.

**Adam Stacoviak:** Okay. Go there, and we're gonna do what we can -- we may look back at this podcast as history in terms of the spark. Where things began. We can look back at this as like "That's a version of where it began."

**Carol Lee:** Yeah. If this takes off, I'll come back on this podcast, and we can be like "Remember that time...?"

**Jerod Santo:** Totally.

**Adam Stacoviak:** Absolutely.

**Carol Lee:** Yeah. It could be excellent.

**Adam Stacoviak:** Absolutely. I believe in this a lot. I think this is super-cool. So go there. We'll put the link in the show notes. Carol, anything else we can say in closing? What did we not ask you? Is there anything left to be said?

**Carol Lee:** I would say anxiety is normal. You're not crazy or weird for having it. There's something you can do about it. Yeah. You're not alone. The end.

**Adam Stacoviak:** Nice. You're not alone. Thank you so much, Carol. That's awesome.

**Jerod Santo:** Yeah, thanks. Awesome.

**Carol Lee:** Thanks for having me...

**Outro:** \[01:08:16.26\]

**Adam Stacoviak:** Are you familiar with the term "margin"?

**Carol Lee:** No. Can you say more about that?

**Adam Stacoviak:** Thank you. I will say more about that. There is a book... Let me make sure that this ChatGPT is not hallucinating on me in terms of the author of the book. And I learned it from this book called Margin, literally. And it's by Dr. Richard Swenson. And loosely, margin is defined as the space between our load and our limits. So in terms of some of the things we talked about on the podcast, there's a certain amount of capacity someone has. And sometimes you're at your margin; you have no additional contingency, no additional capacity, and so the spiral may or may not happen as a result of that. So I was just curious if you had that, because it leads to stress, burnout, anxiety, catastrophizing... All these things we talked about in the main show, is this idea if you can manage your margin, ensure you have room, so to speak. You mentioned anxiety about an email. Well, maybe if you had less to do and your margin was more, you might not have that anxiety. So I was curious if you knew about this concept of margin.

**Carol Lee:** I was not familiar with this before, so thank you for bringing this up. I don't want to knock on this person, because I don't know this person. This person is very smart and lovely and amazing. I think that when it comes to things like load, we often kind of over-index on it a little bit. There's this misunderstanding that if we have too many things to do, we're always going to --
