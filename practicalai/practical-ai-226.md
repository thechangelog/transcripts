**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist and founder at Prediction Guard, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing fine. It's another exciting day in the AI world in 2023; probably the most exciting year in AI ever.

**Daniel Whitenack:** Yes. And our episode today is very timely. It's not Lately, although we are going to talk about Lately...

**Chris Benson:** Oh, God... You actually said that.

**Kate Bradley Chernis:** That's the best one yet, honestly. And I've heard a lot of them. \[laughter\]

**Daniel Whitenack:** Okay, good. Well, we have with us Kate Bradley Chernis, who's CEO at Lately.AI. How are you doing, Kate?

**Kate Bradley Chernis:** I am now tickled, so well done... I'm impressed for thee. We can be friends. \[laughter\]

**Daniel Whitenack:** Okay, great, I'm very happy about that, because - yeah, you've done some amazing things, you're doing some amazing things at Lately, and can't wait to hear more about them.

Before we jump into more specifics about what you're working in specifically, I'm curious because you have had experience for a number of years working in this sort of generative AI space, and especially on social media and content generation... I'm wondering what your feeling is about kind of this general moment that we're in with AI, and how it's shaping -- has it reshaped some of your thinking around AI? Has it proven things true that you've always thought about AI, or what's on your mind right now?

**Kate Bradley Chernis:** Yeah, I mean, it's so funny, because we actually didn't even know that we had built AI back when we had started building it. A mentor had to kind of give us the clue, and then they got us a grant with IBM Watson. This was in 2018. So my perspective on it has certainly changed over the years in so many ways. I mean, it was so hard for us to explain what we did for so long, and suddenly, everybody thinks they know what we do now. \[laughter\] So they're coming to us with this whole different perspective that we still have to educate. But what's exciting to me is there's been -- there's three waves we've seen that already happened, and there's another one that I believe it's about to happen. The first one was like "Holy s\*\*t, AI! Wow, this is amazing." Everyone just had a freakout. And then the second wave has been all around the legalities; a pullback. Copyright issues... You know, what are those kinds of court liabilities that are going to be up and coming?

And then the third wave is around the voicings, right? Like, okay, well, now that everybody has cliffnotes, essentially, like how do you make it your own? And then the fourth wave - and it's already here, really... We're seeing employees -- again, employee job descriptions, the need for prompt experience and expertise... And Lately, by the way, has been ahead of the curve on all of these, since the beginning; we're nine years old at this point. So it's funny and weird to be in a position of spending years trying to communicate to people what we were doing, why it mattered, what the value was, and then suddenly be riding at the top of this wave, where we've already built the future, and now everybody's just \[unintelligible 00:03:58.01\] onto it.

**Daniel Whitenack:** And you mentioned having -- so I'm reminded of Primer; I don't know if you've ever seen that movie, where they build a time machine in their garage... I don't think they're totally intending to do what they're intending to do. So you built AI without realizing what you were doing. So what was your original intention, or where was your motivations when you stepped into doing what eventually turned into what is Lately.AI?

**Kate Bradley Chernis:** Well, some of it is very boring, but I'll start with the exciting part, which is that - so I used to be a rock and roll DJ.

**Daniel Whitenack:** Nice.

**Kate Bradley Chernis:** My last gig was broadcasting to 20 million listeners a day for XM Satellite Radio. And my uber power is turning listeners into fans, or customers into evangelists. And I would leave stations, and then - I'll never forget, my program director calling me six months later and saying, "Hey, the Arbitron book came out, and you were number one. How did that happen?" Because it was shocking; I was in a format called AAA. We're always like 20 or 21, rock and pop, our number one... And evenings - it was totally unheard of. And I said, "I threw your playlist out the window", which was the truth. But I also was the production director. So I was in charge of all the sound in between the songs. And so it was like the me show for four hours a night. And I started thinking about -- I'd written thousands of commercials, I was a fiction writing major, and I really was excited about the theater of the mind. I'm gonna vomit on you guys here a little bit.

**Daniel Whitenack:** This is the place to do it. Vomit away.

**Kate Bradley Chernis:** Okay. \[laughs\] You're doing a great job going with me. So the theater of the mind is when your imagination has to play a role in the act of the storytelling. So when you are reading, it happens. When you are listening, it happens. When you're watching, it doesn't happen, because all the pieces are there in front of you, so there's nothing for you to fill in the blanks. So that parallel was really interesting to me, and one of the things... I read that book, "This is your brain on music", where it dissects the neuroscience of music listening.

\[06:04\] So when your brain, Chris, listens to a new song, it must instantly access every other song you've ever heard before, in that moment. So what it's trying to do is to find familiar touchpoints, so it knows where to index that new song, and the library of the memory of your brain, and its tugging on nostalgia, and obviously memory and emotion... All the things that build trust. Trust is why we buy.

Similarly, Daniel, if you're writing me an email, or a Slack message, or a text message, I'm gonna hear your voice in my head. And your voice has that same idea, right? Like, there's this sound component to it. So if you're doing a great job, you're going to try to figure out how to write in a way that's tugging on nostalgia and memory, and emotion and trust.

So I took these ideas out of radio, and there's another story for when we're having a beer in the middle here, but suddenly, I had a marketing agency... And my first client was a little company you know called Walmart; this is the boring part. So I built Walmart one hell of a spreadsheet system that took these ideas and translated them into writing. And I got them 130% ROI year-over-year for three years. When we built Lately, Lately was designed to replicate the spreadsheet system I had built for Walmart. And at that time, the industry we were in - it was called Marketing Resource Management.

**Daniel Whitenack:** How exciting.

**Kate Bradley Chernis:** Yeah, I mean, really. The name of our company was Cloud MRM. So we were building an organizational system for marketing, is what it was. That's about as boring as you can get.

**Chris Benson:** I love that. I spent a decade in the marketing industry, and I'm so with you on this. I left it, so...

**Kate Bradley Chernis:** Oh, really? So you know, spreadsheet hell; you were there. \[laughs\] A waving eye. So I'm almost wrapping up this very long story... So we had built marketing resource management, we'd build a feature for every spreadsheet that I had built Walmart, and there's this one feature that everybody was using more than the rest, and the idea was you pasted in a URL of a blog, you clicked a button, and we would instantly atomize it into dozens of social posts. That was the foray of the AI we had built. Now we do much more, which we can talk about later, but that's how we got, at least to the beginning of that nine-year trip.

**Daniel Whitenack:** It's super-interesting that you say that, because I think maybe people kind of think that they can easily reuse content on all of these different platforms. And over time, as I've found out, mostly through failing, if I'm honest; the same content that you produce for your blog - like, it's not a trivial task to just take that and like create a really compelling LinkedIn post, or a really compelling tweet. It just doesn't work the same way, and also, of course, the algorithms are all changing all the time, and that sort of thing. So is that part of the education, or do you feel that -- maybe marketers probably feel this pain most, and that's who you're talking to... So your audience, are they mostly wondering "How does a computer do this for us?", because they know the problem and they see it as a really tough problem? Or are they mostly like "Oh, I could do this if I really sat down and wanted to do it, so why do I need a computer?" Which direction do you find people in most of the time?

**Kate Bradley Chernis:** Yeah, there's so many good thoughts in there. So the first one is it's like math. There's a reason you go to school and you learn algebra... Because when you're using a calculator, you need to be able to know if you've pressed the wrong button, because sometimes you do, and you get the wrong answer. So you need to have the background in your mind, so that you can use the technology to do the hard work for you. Similar with that, we've found that if you're a complete idiot, I can't change that. You have to have some --

**Daniel Whitenack:** Unfortunately, that AI does not exist yet.

**Kate Bradley Chernis:** \[09:57\] \[laughs\] Right. True AI does not exist yet. Magic doesn't exist, I hate to burst the bubble there... Because, I'm a huge Harry Potter fan. In fact, I saw a car at Target the other day, and I assume it was a man, but the license was \[unintelligible 00:10:08.24\] It's like literally telling everybody to go F themselves like all day, all the time, this guy..

**Daniel Whitenack:** Bold...

**Kate Bradley Chernis:** I know, it's pretty bold. So with Lately, let me explain what we do, and then answer your question. So Lately is able to learn your unique voice, Daniel, or Chris, or the unique voice of your brand, and you can customize that voice by region, say, for example, or any kind of subset. It also is able to tell you exactly what words, ideas, phrases, even the sentence structures that make up the highest possible for forming social media messages for you, specifically customized for your target audience, on any specific channel. Now, we're able to build that model in about a couple of seconds for you, and then once you have the model, you have to train it, and you train it with long-form content. So we just mentioned the URL of a blog. So it could be any kind of text, like a newsletter, or anything from a Word document. It could also be any kind of audio, like a podcast; it can also be any kind of video, so an interview with a CEO, or it could be a webinar, a Zoom call, whatever you want.

In the case of audio and video, we will also give you dozens of audio sound bites and miniature video clips that go with the text version of the social post, and then we teach you - and you can do this automatically - how to drip-feed that content over time. Because the long tail has payoffs that are exponential, as opposed to the one-off. So we're also working with marketers to educate them, as you were asking about, on postmo versus promo, right? So promo is great, but it's really hard to get butts in seats live. But the after-the-fact is much easier, and you get exponential eyeballs; it becomes -- pretty much everything is evergreen content nowadays, and if you think about that, which I'm sure you guys already have... Like, before you went into this interview - yes, it's timely, but generative AI is going to be around for a long time here, right? And these ideas, once they're living online, the SEO will be over the roof, over the moon, so to speak.

So the Who was your question... At first, we thought our target person was me - small agencies. I was charging Walmart 140k to do four months of work, and the idea was "Let's give you 140 bucks in your one-person." So we were trying to serve as SMBs. But the mistake we made was we had built this massive, robust platform that was very much an enterprise platform. And we didn't know that yet. And again, we met another kind of mentor; we were working with SAP, and they were like "Hey, we think you don't understand the power of what you built here. Let us help you out." And I'll just pause the story there. There's more, but... Does that answer your question?

**Daniel Whitenack:** Yes.

**Chris Benson:** It was a good story. I was all in it, and you like cut it off right there in the middle. I was like, "What's she doing?!"

**Kate Bradley Chernis:** Well, we'll get the rest... It's funny, because trends change, markets change, obviously, and you don't want to be loosey-goosey, but you also want to be flexible, and you want to be able to foresee those things, and then turn on a dime when you need to. And with us, because we had built marketing resource management, that window of sexiness was pretty small, actually. There was a company called Percolate, that was dominating the enterprise space, and here we are, this little company trying to be the SMB version of something that no SMB could really understand, honestly. And we were trying to sell to marketers, specifically like CMOs, and we discovered, after a lot of pain, actually, that they were very much threatened by being replaced... Which was kind of reasonable.

\[13:50\] And so we had to learn to reposition the product, we learned to automate it and create self-service, we learned to pitch to CROs... We built in a feature at Lately where you can actually syndicate the content; one button can push out months' worth of social posts across every employee's channel that they have connected, that you can imagine. So you can literally do all the influencer marketing for your entire business in like an hour.

**Daniel Whitenack:** So you mentioned voice quite a few times, which is definitely a loaded term within the AI space. So there's one part of voice which is - we've had Josh Meyer from Coqui on the show, talking about voice cloning, and style transfer of voices, or using your voice in another language, that sort of thing... So certainly, that element of that is relevant to content. But if I'm understanding right from a very non-marketing person's perspective, what you're referring to as voice is somewhat inclusive of that, but is much more. Could you kind of help those maybe without as much of a marketing background understand what do you mean when you say voice, and what do you mean when an AI system learns your voice? What is learned, I guess, in that process?

**Kate Bradley Chernis:** I like it. So because we're able to surface you literally a word cloud of the words that make up the messaging that gets you the highest engagement, the most clicks and likes and comments and shares, we can see how you write, and we can see how when you're writing well, what's the DNA that makes up those messages. And we can learn how you write for your brand, or for yourself. When I write social posts on LinkedIn, I get 86,000 views, because I'm really good at writing, and I use a very specific "voice", style of writing. For example, in real life I swear like a sailor; I'm just so foul. And online, I try to do that less... So I'll make up a hyperbole like "holy hot pickled jalapeno peppers", for example. Now, when Lately is trying to write in my voice, it will insert things like that, because it knows me well enough to do that.

**Daniel Whitenack:** So part of me - kind of coming into this conversation, I see so many of these people that are making posts that are very formulaic... I don't know how many times a day on Twitter I see some tweet that says "What a week in AI! Here's seven things that you shouldn't miss. Tweet thread." Like, "Oh, my gosh, how do I -- like, I should be able to get through these."

**Chris Benson:** They're not using Lately.AI, I can tell you.

**Kate Bradley Chernis:** Right. They are not, yeah. \[laughs\]

**Daniel Whitenack:** Could you speak a little bit towards generative content and how that could be, or maybe is, in certain cases, formulaic, and how this sort of approach can go beyond that to maybe be more creative, certainly more personalized? I think you were talking kind of about this personalized voice. I assume we're not just talking about like generate the listicle or the tweet thread for Twitter type of thing, right?

**Kate Bradley Chernis:** Yeah. So what's interesting about your point is -- I mean, this is why humans are always relevant, because you quickly can see that there is a formula there, and it begins to wash over you. It's not tantalizing anymore. And the instinct that you have is not the instinct of the people who are still publishing those; they're still sticking with the old thing, because they haven't taken a moment to research, really, but even just use their instincts of like what's working. You have to experiment, you have to. The same way in radio - I mean, I spoke to a black room of no one for 12 years...

**Daniel Whitenack:** I know how you feel.

**Kate Bradley Chernis:** \[17:46\] You know how I feel, right? But what my mentors advised me back then was you imagine the listener in your mind, whoever it is. Imagine who the audience is. Now, online, I generally just try to entertain myself... \[laughs\] So let me back up. So that was sort of one thing, is like humans are relevant, and we'll get into that a little more why, and they will remain relevant, always, in sales and marketing. That will never go away. And I'll tell you why real quick. When we were talking about the theater of the mind, what happens there - if you are a good author, or you're good on the microphone, you're actually letting someone in. So I'm going to make you, Daniel, feel as though you're part of this story. Now, I've written it this way, so that you have to fill in the -- I know you have to fill in the blank. I have to allow for a third character. That is you, that's your imagination, and your brain. That's why when you read a really great book, it's so powerful, and then you see the movie and you're so pissed off, right? They're taking that ownership away from you. So it's the difference between a one-way street and a two-way street, and this is how you build fans. That mysterious thing is the human element in marketing. Marketing is often unexplainable. It is. People are always trying to science it to death, and you cannot. This is what makes it magical; which is why human training is something that we actually worked into our algorithm from the beginning.

**Chris Benson:** That was a fascinating point there, is kind of that unknowable aspect a little bit of what tickles a psyche. And that evolves, and people get used to the thing that was the past thing a moment ago, and whatever you're doing now will change in another moment, as we accommodate that in our brains and start ignoring it. So you've spent these years working on your algorithms to try to hone in on that, using your method, and try to get to a voice of what the messaging is in the different mediums. So now in the last year, all this technology change has been thrown at you and your company. Generative AI, and large language models, and all this stuff, all these cool tools - how has that changed how you're approaching the problem of kind of finding that magical nugget of voice in there? Because you have a whole new set of tools available to you now that you're presumably integrating into all this stuff. That has to have turned your world upside down a little bit, just because of the vast amount of capability you now have, in addition to what you had before.

**Kate Bradley Chernis:** A couple of things. Number one, there's more than one kind of generative AI. Now, the world is really only familiar with one, which is ChatGPT. We were in the closed beta four years ago of ChatGPT-2, so we're OGs with them. But I built an engine that's mine. It's proprietarily mine. So we like to think of Lately as a fully-loaded ice cream Sundae. There's a banana, and hot fudge, and a bunch of different flavors of ice cream and whipped cream... And I made this Sundae all myself. On the top, there's a couple of tiny, tiny chocolate sprinkles; I like chocolate. They could be rainbow. And that's IBM Watson, and Google Pegasus, and MeaningCloud, and ChatGPT.

Now, around the datasets, what's been exciting is there's this huge wave of "Oh my God, public data, copyright infringement", all that. And we only use a private dataset at Lately, your data, and we don't share it. And so we've been getting greenlit by legal, and so that kind of explosion of information is obviously really helping us a lot, because a lot of companies are now banning generative AI company-wide, because people are cheating at work, and they're worried about data being put onto the Google's public database, for example...

But the other thing, too... So generative AI, as we all know it - not me, but the world - is type in a few things, get a big, long thing out. That's the deal. Lately works the opposite way; you have to give us a very long thing first, like a video, or a blog, or an audio file, and then we're going to take that unique model we built from you and clip it up into dozens and dozens of very small social posts.

\[21:53\] And the way we're able to capture your voice, which ChatGPT can't do, because they don't have -- and we're not competitors with them in any way, but they don't have a data loop. But I do. You connect your social channels to Lately, I can read your analytics, I can see what's performing best, and I'm learning all day long, every day long, whether you're publishing through Lately or something else, and then every change you make, to anything you publish, if you edit it, if you add a picture, if you delete it, if you don't publish it, I'm learning. Right? So it's a tight loop.

The other thing here is now that there's been this explosion of words, the problem still remains, how do you cut through the noise? This is the problem always, of all social marketing and all sales enablement, whatever. Guess what the answer is? It's the same answer - be more human. Be more human. So when you build that into your algorithm - so I'll give you an example; we worked with Philips Electric, which is - they've rebranded to Signify, and we got them on average 124% more engagement on LinkedIn, we saved them 84% of their time, and I think it was 82% of their budget. And it's not just on creating content, but it's on creating content that works, right? This is the thing. Now, you can ask generative AI to create social media posts for you, but they'll have no way to know if it's the right ones to create, because there's no information to check that data.

**Chris Benson:** Let me follow up on something you said there... I'm gonna ask the dumbest question you've ever heard. You just said "Be more human." What does that mean when you say that? So when you're saying that's the thing to do - I hear you, and I think I know what that means, kind of, but I probably don't, because I think it means something very specific to you and the context. Can you share that a little bit what that means to you?

**Kate Bradley Chernis:** Yeah, thanks for asking. No one has ever asked that. They really should, right?

**Chris Benson:** I'm very good at dumb questions. I excel at them.

**Kate Bradley Chernis:** No, no, no, not dumb. Very smart question. So it's using that instinct. Because you can't science everything to death, it's predictive and it's a little bit indescribable. So you have to know whether that joke is going to land, right? Like a comedian. That's the deal. Sometimes the atmosphere is ready, and sometimes it's not yet ready; you can make a joke about that just yet, right? That ability to read the room, which is, again, something I did in the dark for years - I don't think that can be taught, to be honest to you. However, it does come from making mistakes. So the more mistakes you make, the more you learn from them. Being human on social can be -- it's funny, you see people experimenting on LinkedIn a lot right now, doing more personal things...

**Chris Benson:** I do incredibly personal things on LinkedIn, and people are like "Whaa...?!"

**Kate Bradley Chernis:** You do?

**Chris Benson:** Yes. They're usually having to do with animals. So yes, a lot...

**Kate Bradley Chernis:** Great. And is it working? Are you getting engagement from it?

**Chris Benson:** You know, the truth is I'm not measuring it... But it definitely is different from what everyone else is doing. Just for anyone out there, because people hit me -- I'm really bored with everyone self-promoting on LinkedIn all the time, and so when people hit me up with those messages or they're in my feed, I just turn off everything. So yes.

**Kate Bradley Chernis:** There you go. Yeah. So you're experimenting.

**Chris Benson:** Yeah. Anything that's not the usual may capture my interest; if it's the same old stuff, I'm asleep as my eyes glaze over your post.

**Kate Bradley Chernis:** I love that. And that's a key thing to think about. So say if I want to promote something that I'm doing - sometimes I'm lazy, of course, but there's only two objectives on social media: click and share. That's it. So if you back into it knowing that that's the deal, I need to write copy that's either shareable or clickable. It's very hard to get to the clickable point, because that's a lot of trust you're asking from people, and time, and all that. But sharing is easy, because sharing is all about the ego, and if I give you content that's worth sharing, you look good, right? Kinda like if someone in college brings you the latest record from whoever, and then you play it for a friend, now you're the tastemaker. Same idea.

\[26:03\] So shareable content - like, Gary Vee is great at it; you can just spread joy with positive messaging. I find that any content that includes God does really well. Certainly negative stuff - like, I've posted in tears, getting a no from an investor. I mean, I was experimenting with all these things. I'm doing it on purpose, I'm trying these things out. I often will do things like I'll say, "There's an interview coming up with Chris Daniel and moi." I'll refer to myself as moi, because I like Miss Piggy, and you might not know that about me, but --

**Chris Benson:** I didn't, but I have a raccoon named Miss Piggy, for real.

**Kate Bradley Chernis:** So there you go, right? And it's not an obvious reference, but I'm looking for those nostalgic touchpoints we thought about before, right? And this backs up a little more to one of the questions that I didn't answer, Daniel, earlier, is that Lately - what it's lifting out, it's trying to lift out teasers that will get you just enough interested to click, without giving you the full kitchen sink. Or it's trying to give you a shareable, like those same things; that's what's behind the AI's brain, and what it's thinking of. So it's the same idea. And let me give you some proof in the pudding just around this idea, whether you're using Lately or not, to do it.

So Lately, as you guys know, we dogfood our own product. So I'm going to ask you for the file of this show, we're going to run it through our own AI, our AI model is going to run through, lift out all the quotes that you, Daniel, or Chris, or me say, that match up with my model, and my target audience, it's going to attach the video clips... It's probably going to give me 40 or so. My social media manager will run through them and make sure that Lately isn't off the rails, and kind of help it out if it needs to be helped out by making the edits, you know... And then we will publish those posts not only on our brand channels, but all of our employee channels as well, because the more, the merrier. We're all in this together.

Now, we do this and nothing else for marketing. This is all we do. I'm on a podcast once a week, sometimes I write a guest blog, or host a webinar, or something... And we have a 98% sales conversion.

**Chris Benson:** Wow.

**Daniel Whitenack:** That's crazy.

**Kate Bradley Chernis:** Because that's how good the AI is. It knows what you guys will share or click, right? My audience.

**Break**: \[28:16\]

**Kate Bradley Chernis:** You had said before we recorded silence is sometimes the best practice. And one of the things that my radio mentor Steve Zinn taught me was to leave silence on the air, as a tactic. This is that mistake. This is that humaneness. And so what happens when there's silence?

**Daniel Whitenack:** Thinking. Anticipation.

**Kate Bradley Chernis:** Thinking, anticipation... That's right. People turn up the radio, is what they do also. And thinking about how we're writing - and you've seen this tactic on LinkedIn as well, is like people leaving different space, putting in enter-enter-enter, or whatever... There's something about -- and it goes to your point, Chris, of doing the unexpected. What I learned about making fans, which are more valuable than just listeners, or customers versus evangelists... And by the way, let me put the proof in the pudding - not a day has passed in four years where someone hasn't spontaneously written on social media about Lately. Not one day. You don't want to be the megaphone, you want to be the magnet. And when you are the magnet, in order to truly be that kind of magnet, you let other people be the light. You show them how to be the megaphone; you put them on the pedestal.

**Chris Benson:** Can you define a little bit about what those are? When you talk about the megaphone versus the magnet, and the light in there, can you kind of clarify what that means?

**Kate Bradley Chernis:** Yeah. I'm obviously an A personality. So I could walk into a room and dominate that room in a second. I can get on the stage and be like "Hey, look at me, hey, look at me." I could do that. Or I can lift you up and make you feel like everybody wants to listen to you, everybody wants to talk to you. When you are able to do that, people walk away, and they remember that you made them feel this way. It's like -- I was listening to Smartlist the other day, and Will was saying how a few years ago they were at an SNL after party, and Steven Spielberg, who he did not know, just walked over to him and said, "Hey, Will. I'm Steven Spielberg. I just saw your director's cut of XYZ, and I wanted to tell you it was really impressive." And then he walked away. Now, holy s\*\*t, right? That's how you do it. This is the God.

First of all, the best thing he did was he introduced himself. He didn't assume that everybody knew he was Steven Spielberg. I mean, that's pretty mega for a megastar like that. Also, he left before the guys had a moment to be like "Oh my God, we f\*\*\*\*n love you", blah, blah. He was just in and out. It was just that drop of Pixie Dust, kind of thing.

So the way you can do that on social is really easy. Here, I'll give you a tip - thank you is the best. We call it "thank you marketing". The more you thank somebody, the more they -- it's like husbands; the more work in the yard David does, the better I tell him how great it looks. Right? Because I want him to do it more. And thank you can come in the form of thank you - that's one of our biggest hashtags that Lately, is \#THANKYOU, because people reshare that content.

So with you guys, when I'm going to get your content, I'm going to drive all the traffic back to you, this full version. This is the ultimate thank you, right? And I'm going to tag you, and I'm going to drip-feed it out probably slowly over the time, so that every time you see it, you're inspired to reshare it, and you're not like overwhelmed by my over-tagging you, for example. But also, I don't need to drive the traffic back to me, because I'm not looking for that. I'm looking for the reach. I'm looking for the shares. We ride on word of mouth at Lately. That's what we ride on.

**Chris Benson:** I have a leftfield question for you, and it's a selfish question.

**Kate Bradley Chernis:** Great.

**Chris Benson:** And it may be a very simple answer of "No, there's no difference." But just in case there is - is there any difference in how you would approach, from like a nonprofit standpoint, versus a for-profit, commercial standpoint? Because you're trying to get to a different type of outcome; selling a product or service versus that. And as in my -- I have a day job, but I also have an unpaid job in a nonprofit. And so I'm very curious if there's any difference in that, or if it's all the same thing.

**Kate Bradley Chernis:** It depends... Because I've worked for a lot of nonprofits as well, including United Way Worldwide, and National Disability Institute, and the Walmart Foundation... So like I said, there's only two objectives on social, and this doesn't matter if you're a nonprofit or for-profit, or government; it's click or share. That's it. Where you click to, or what you're sharing - that depends. Ice Bucket Challenge - hello. Right? How human was that? They did a great job, but they raised money at the same time.

\[34:08\] Now, you and I both know that they have a grant to spend this money. And oftentimes, for a nonprofit, while sale isn't the objective, a lot of times it's just make some noise, to be honest with you, because the people giving them the grant want to see that visibility online a little more. But everyone has an objective, it's just a matter of breaking it down.

When I was working with the Walmart project, it was fueled by the nonprofit foundation, and this was so boring. I mean, I had a great time, but it was -- there was the IRS, Walmart, National Disability Institute, Bank of America, and AT&T, and United Way Worldwide, and they were working together... There was a free tax prep website that United Way Worldwide had built in tandem with Walmart. It was the first free tax prep online available. And we were trying to help lift the poor out of poverty through income tax credits and financial education. These people will maybe make $20,000 a year, so a $2,000 EITC credit is actually life-changing. Now, that's the boring part here, and there's acronyms galore... But we got the project with my method 130% ROI year-over-year for three years, and their ROI was taxes filed. That was their objective. So we still wanted people to click and share, but once they clicked, they'd start to file the taxes. So that was the whole... And by the way, one of the things we learned was how to take a national message and - this is what I was working on with them, or one of many things... To localize it. And the localization came through local hashtags. The cities, the college campuses, wherever we were, you know...

**Daniel Whitenack:** I get this feeling inside sometimes that we're starting to generate so much content using automated methods, using AI... And despite all of that, having it sort of like -- having a voice, or personalization. I'm wondering, a lot of the creative things that I see online - I don't think they're generated by AI yet. So how do you see, going into the future - as we see more generative AI content driving social posts, how do you see things shifting in terms of the creative trends that we'll see online, and maybe the opportunities within marketing? How do those opportunities change, and how would someone balance "Oh, I could do this at scale with AI", versus, "Hey, I want to do something completely new, that no one's done yet, that might break some trends" or something like that? How do you see that balance going forward, and do you have any recommendations for people out there that are maybe in the midst of trying to generate content with AI, whether that be text, or audio, video, whatever?

**Kate Bradley Chernis:** Yeah. I mean, I think my first advice would be just calm down, everybody. Hold on. So think about humans - we're the only mammals that when we come out of the womb, we're completely helpless. We can't feed ourselves, can't defend ourselves, can't stand up; can't even hold our heads up. Nothing. If AI was a human, it'd be about three months old. So I think that's just one important thing to remember, is that human guidance is required.

Certainly, as we talked about at the top, the prompting expertise is going to be something that people are looking for as well, because in order to get the robot to do what you want, it has to be asked just the exact right questions; what are those questions?

With technology, as you guys already know - I mean, technology happens; it'll continue to happen, and it'll continue to improve lives and replace jobs... And jobs will evolve. And we're in the same boat here. This strategy piece is where humans are still really absolutely necessary. AI is not sentient. Unfortunately, Hollywood really has given us a grave misunderstanding of what the definition means. I think it maybe it was Paul Roetzer from Marketing AI Institute, but they said "AI still lacks emotional intelligence." Which is also true, you know.

\[38:22\] And then another quote, and I don't know who said this, but it's "If you're not using AI, you're going to be falling behind." But the people who are using AI in tandem with the work they're doing - just like that calculator we talked about before - they are the ones that are going to be getting ahead of the game. So you have to figure out a way to obviously embrace it. And I think it's so funny that companies are abandoning generative AI, because remember when everybody banned Facebook? I think there's still government entities that can't use Google Docs. And you're like "Are you kidding me? Get with the program."

**Daniel Whitenack:** I think that's a really good way to set a good foundation as we kind of draw close to here, for people to remember that... And we probably need to be reminded about that every week these days.

**Kate Bradley Chernis:** Yeah.

**Daniel Whitenack:** As we close out here, maybe just take a moment and share what are you excited by specifically as you look forward over the coming months, in terms of either think new things that will be possible, or where things are headed with Lately, that sort of thing? Take an opportunity to kind of share some of those things that you're excited about.

**Kate Bradley Chernis:** Thank you. I'm excited to close the fundraising round that I'm in the middle of doing...

**Daniel Whitenack:** Yay, I hope so. Yeah, that's awesome.

**Chris Benson:** Congratulations.

**Kate Bradley Chernis:** Yeah, yeah, so if anyone's interested, feel free to reach out to me. kate@Lately.ai. That will help us kind of continue the plans we have. The voice learning that we talked about earlier is something that we are focused on at the company, on sinking our teeth into this year. And figuring out other ways -- this is so boring, but if Lately spits out a piece of content that starts with "and", how can we start recognizing those non-sequiturs that happen, and we can remove them for you before you even get to it? Or once we have the transcripts in the background, instead of you having to Ctrl+F and clean the uhms out, how can we do this stuff more automatically? Because obviously, it's harder to train video and audio than it is text, because with text you work on it for so long, so it's coming to me pretty much ready.

We're also working on sentiment... So the ability to push a button and say, "Make this post funny", or "Make this post stern." That kind of idea. The biggest request we get from our customers is how to take Lately and apply it to paid ads. So that's a big one we're working on.

**Daniel Whitenack:** Cool. Well, keep up the good work. This is awesome.

**Kate Bradley Chernis:** Thank you.

**Daniel Whitenack:** Thank you so much for taking time to join us. I'm very excited to dig into this topic a little bit more. We'll look forward to seeing all of the tags that I'll get over your drip campaign in the coming weeks.

**Chris Benson:** Great conversation today.

**Kate Bradley Chernis:** Thanks. Love you guys. We'll talk soon, alright?
