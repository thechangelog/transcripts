**Jerod Santo:** Well, Adam, it's just the two of us.

**Adam Stacoviak:** As it should be. As it should be.

**Jerod Santo:** Changelog without Friends.

**Adam Stacoviak:** I would actually call this Changelog News extended edition... With the both of us, not just you in the short form.

**Jerod Santo:** Yeah. The news, discussed.

**Adam Stacoviak:** That's right.

**Jerod Santo:** We did have a Changelog & Friends lined up for this week. We were hoping to get our new friend from OpenTofu, Josh Padnik, we had on the show last year, back on the show... And Josh wanted to come back on the show. However, because the matters between OpenTofu and HashiCorp are of the legal variety, Josh has been advised not to talk about such things right now... So we're not having Josh on the show this week, but he's gonna come on later in the year... Hopefully after the dust has settled, and talk OpenTofu then. That's why it's just the two of us.

**Adam Stacoviak:** Yes, it is just the two of us. And I think the place to begin might be this massive cease and desist letter. Did you read and click through to the actual cease and desist?

**Jerod Santo:** No. I did scroll OpenTofu's 46-ish page analysis of the source code origin. I didn't read the whole thing, but I scanned it, and looked at different headlines... But I did not read the entire cease and desist. So catching everybody up, for those who don't listen to Changelog News, this has been an ongoing issue over the last week or two, between HashiCorp and OpenTofu, the fork of TerraForm, around did OpenTofu in their desire to retain feature parity with TerraForm as a fork, did they copy HashiCorp's now BUSL-licensed code on a new feature into the fork? So the cease and desist, Adam, what you were gonna say about it - it's massive.

**Adam Stacoviak:** Yeah, I went ahead and assumed everybody was caught up, so thank you for clarifying the catch-up quickly, because you're good at that, and I missed that note... But I don't really have any deep analysis, aside from the fact that it's long... And if you've ever spent any money with a lawyer, anytime you see a ton of red lines, and note-taking, and all this stuff that's in this document... Like, I'm just wondering -- I mean, obviously HashiCorp has the money, or any corporation might have significant profits, potentially. There's a lot of redlining in here's. There's a lot of redlining in here, going through things, and just a lot of detail for a lawyer to draft this letter on their behalf. Because that's obviously what's going to happen there, right? So there's been 104 additions, 120 deletions, 90 moved from, and then 19 moved to. And that's basically the document tracking of how this document changed. And this is prior to being sent to OpenTofu.

**Jerod Santo:** So this is the version control on the letter to OpenTofu. This is not on the source code in question.

**Adam Stacoviak:** Right.

**Jerod Santo:** That's kind of cool. So they published the whole letter, that you can read even the revisions; you think they'd want to strike stuff.

**Adam Stacoviak:** \[06:00\] Yeah, I don't know why they would give the full... I think it's a legal thing, to provide all of the...

**Jerod Santo:** Transparency?

**Adam Stacoviak:** Yeah, they call them changes, I believe, or track changes is a terminology... There's 262 total changes in this document prior to being released to the accused, which is a.k.a. OpenTofu. And so just pointing out - how much money and time was spent in prep for this...

**Jerod Santo:** Oh, I know, it's serious matters. These are serious things, which is why it was like -- I think any lawyer would say, "Yeah, going on a podcast and just talking about something while it's in the process..." Because I mean, okay, so the cease and desist came out. And then OpenTofu issued an official response, which also had a lawyer's written letter. And now it's kind of in HashiCorp's court; the ball is in their hands. They might take them to court, they might drop it... I don't know what they're gonna do next. But it's very much an ongoing thing... And so the smart thing to do with ongoing legal matters as an individual involved is just not to talk about it and let the lawyers do all the red lining and the green lining and all the official words.

**Adam Stacoviak:** Yes. A lot of pages, a lot of pointing to different files in here. I really wish I'd taken the time to do this audience full-on justice, and have had a straight up analysis of this document... But it's linked to from OpenTofu's response, so feel free to dig in yourself. There's lots of pointing to particular files, dates... There's a lot of redactions in there too, in terms of I guess probably just like sensitive information, maybe names and stuff like that, addresses potentially... This is not the NSA document, this is simply a document from a lawyer to another lawyer. And they also -- I noticed they misspelled copyright. They dropped the t...

**Jerod Santo:** You're fired.

**Adam Stacoviak:** ...at some point in their MPL 2.0. Yeah, in the Mozilla Public License they had a misspelling of copyright. But whatever.

**Jerod Santo:** It's copywrong.

**Adam Stacoviak:** Copywrong.

**Jerod Santo:** Well, let's move from that drama to the other rug pull drama. So Redis now.

**Adam Stacoviak:** Well, let's also mention that we're gonna have a deeper conversation on this, which is why we're not going super-deep here.

**Jerod Santo:** Yes. Good call. So next week on the show, scheduled, Adam Jacob, our good friend who's been on multiple times, will be back for a grab bag of topics. He has strong opinions on many things, and one thing we'll ask him about is this particular drama, but also the term open source under fire, I'm sure... Our conversation with Scott Chacon I thought was very interesting...

**Adam Stacoviak:** I agree.

**Jerod Santo:** ...regarding his stance on open source, what it means, what it should mean. And one of the things I appreciate about Scott's stance is they came out business source - is it business source? Functional source.

**Adam Stacoviak:** Functional source, yeah.

**Jerod Santo:** Right. They came out non-open source from the start. And he specifically says they wanted to avoid a rug pull. And it seems like that's really the offense, is when things change on you. And now Redis having its license changed has caused quite a splash... And many forks. So we have a post here, which we'll link to, from Vicki Boykis, called "Redis is forked." And yes, she's using that tongue-in-cheek to talk about the condition of the Redis project in light of this relicense, and what's all going on. The skinny is forks are abounding, and people are looking elsewhere for their Redis needs... Specifically, there are two major forks. One's called Valkey, which is licensed under the BSD license, and led by previous contributors to Redis from AWS and other companies. So Valkey is a big one. And then another one called Redict. I don't know how you pronounce that one. That one's actually GPL-ed. It's led by an open source coalition headed up by none other than Drew DeVault, who we had on the show recently.

\[10:03\] So two major forks, both vying for your eyeballs... I don't know, your user-ish, to be their users... For your contributions, of course... And I don't know if anything has really shooken out, shaked out... Hard time with verbs today.... In terms of what's going to be what everybody goes and uses. But in addition to that, there's also not just forks, but people start to look elsewhere for Redis-compatible things. So not Redis forks, but just things where they can keep their API client code, everything that talks to Redis, and swap in some other data store in the backend.

Two that are interesting, one from Microsoft called Garnet, which is in C\#, and obviously has Microsoft pedigree... It's supposed to be very fast. And then another one I thought was pretty cool, which caught my attention, is called Redka. That is not a Redis per se, but it's a Redis-compatible Go program written by a fella who has been on Changelog News a handful of times recently. I think I might get him on an interview show... Anton Zhiyanov. And so he's built Redka in Go, which is Redis with an SQLite backend. So a pretty cool relational database, under the covers. Gonna be slower. He says it is slower than Redis, two to six times in his benchmarks... But still pretty fast.

So lots of, I guess, activity in the wake of this one. And people are trying to get out there and replace Redis. They do not want a non-open source Redis, it seems.

**Adam Stacoviak:** One thing that Vicki says that I thought was kind of notable... Because I think, okay, there's details here, but then what's the trajectory of Redis, and those that intend to be the official fork, or the new fork, or the new Redis, whatever it is. And she says, "The old Redis was for developers. The new Redis is for enterprise sales and for generative AI. It's true that is not yet entirely clear what all this means for the future of Redis software." So that's what I think about it, is like "Okay, great. Rug pool, bot cool." You can put them on a T-shirt.

**Jerod Santo:** Rug pull, not cool?

**Adam Stacoviak:** That's right.

**Jerod Santo:** It almost rhymes.

**Adam Stacoviak:** Rug pull, not cool. \[unintelligible 00:12:35.25\]

**Jerod Santo:** \[unintelligible 00:12:36.24\]

**Adam Stacoviak:** I rap, but I'm not good at it. That's cool that it's not cool to rug pull... It's your prerogative. Go ahead and do that if you want to. But where does it go from here? Does it simply -- can someone rewrite, like you said, in Go? Is there a reimplementation? Is it a fork and a takeover, or is it -- how does it live on? Should it be remanifested in a new way? Because there's ideas here that Redis did for caching, amazingly... But is the state of the current software the best implementation of it?

**Jerod Santo:** Right. And the cool thing about Redis - I mean, what is Redis'es innovation? What is its legacy? And the answer to that was it was a cache store that was more robust and useful than a typical key-value store, where you put a key in, and you get a value back out. And maybe you namespace it. Redis has rich data types, but not very many of them. So few, in fact, that Anton Zhiyanov could reimplement quite a bit of it - at least the API - on his own in what seems to be a short amount of time. I didn't check the history of his repository, but... That's what people love. It's like "Give me a fast data store, that has these rich data types: strings, sets, lists, maps etc." And that was cool, and it was well-written, and it was steady as software; it was very reliable. And that was Redis'es thing. And that thing is awesome, and brought a lot of joy to a lot of us, but it's not that hard to do again, with a different backend. Maybe a faster one, maybe a slower one. Maybe a simpler one, maybe a more complicated one.

\[14:17\] And so I expect a Cambrian explosion of Redis-like projects to come out of this, and then we'll see what happens. Certain ones survive, other ones don't... In the wake of Redis, perhaps, something better comes out, that developers love for years to come. So I'm kind of putting a fork in it, no pun intended there.

**Adam Stacoviak:** Oh, boy. Nice one.

**Jerod Santo:** I think Redis as a thing - I'm kind of thinking about it now in a past tense way; like, it was awesome. But no longer.

**Adam Stacoviak:** No longer... \[laughter\] There you go.

**Jerod Santo:** "What next?" That's what I'm thinking.

**Break**: \[14:56\]

**Jerod Santo:** What's next in the news?

**Adam Stacoviak:** Well, I've got an Instagram DM from my wife...

**Jerod Santo:** Okay. Newsworthy?

**Adam Stacoviak:** ...about a new humanoid that moves like no other robot we've ever seen before.

**Jerod Santo:** Yes...!

**Adam Stacoviak:** And you put in on your list, so I was like "Okay, this is great crossover", because Ars Technica covered this. I have not read this yet... But I will dig in with you, because - wow, that thing stood up so amazingly. And that was actually quite scary when I saw it do exactly that. So I was like "Worst dream ever, queue suspenseful horror music for movie" kind of thing.

**Jerod Santo:** \[17:49\] Exactly. So this is Boston Dynamics' latest humanoid. If you recall, they had their Atlas robot, which was this big, bulky, hydraulic-based thing that was really cool, and did a lot of impressive demos. It could even do flips. It could traverse difficult gymnastic --

**Adam Stacoviak:** Parkour.

**Jerod Santo:** Yeah, it could do parkour. And so it was like a favorite thing of the internet, to watch these little videos of Atlas. Now they have a new Atlas, and it shares the same name as the old Atlas, but that's about it. So instead of it being hydraulic-based, it's entirely electric, which makes it lighter, and removes a lot of the constraints of Atlas. So when you're pushing hydraulics through a system, you've got all these cables, and the cables have certain lengths; you don't want it to be too long, too short... And so that really limited how Atlas could actually move. It could only move in certain ways. But this new Atlas, which they've demoed, and there's like a 30-second video out there, of it standing up from a laying down position, is a) very impressive, but b) super-creepy. Actually, I should read the Ars Technica explainer, because it actually says specifically how it stands up, and it does a better job of it than I would off the top of my head. Let me read this...

Alright, so here's their explainer. "So the body is lying facedown, and the legs swing up into the air backward, and get placed down to the left and right side of the robot's butt, in a crazy contortionist's pretzel position." You've really got to watch the video. "Both feet get placed flat on the floor, and the robot completes the deepest squat you've ever seen, with the hips rotating something like 270 degrees. From there, the robot's body is facing away from the camera." We're not worrying about the head just yet... "And then it does the wildest robot turnaround you've ever seen. Just below the hip joint, there's another 360 joint in the thigh, with no human analogue, allowing each leg to longitudinally spin around. So without moving the hips or robot body at all, the right leg does a 180-spin in place, and goes from knees and toes pointing away from the camera, to knees and toes pointing at the camera, and then the left leg does the same. Then the whole torso does a 180, and suddenly, the robot is facing a different direction. It's a zero-radius turnaround. But even that doesn't seem like an adequate description."

It's crazy. I mean, I watched it like five times... But it very much -- I mean, in our last show with BMC I mentioned Terminator 2, right? One of the best sci-fi's. And the T-1000 could do things that humans couldn't do. Of course, he could melt through stuff, and do all kinds of crazy contortionists... And this doesn't give me T-1000 vibes, but it gives me Terminator vibes. Like, the way it moves is so powerful and interesting. Humans couldn't do it, because it has that turn radius. You know how some people can make their arms go out of socket, and they rotate them all the way around, and it looks so wrong when they do that? That's just the way this thing's built.

**Adam Stacoviak:** I think about all the software involved, and just... I would say probably sensors is the basic generalization of how to balance this thing. When it stands up, it begins to walk at you before it fully turns around. Like, it starts taking steps at you. And then just imagine - as you said, Terminator - a future where maybe we no longer have the control over this thing, and it has whatever the future of generative AI is there. The new Redis is powering its cache, of course...

**Jerod Santo:** \[laughs\] Of course...

**Adam Stacoviak:** \[21:45\] You know, all these things... That's to me is just like "Wow..." I mean, inside of our household, Jerod - I don't know if I told you this before, but I have a four-year-old son, so I go to bed with him every night... Well, Heather and I share. We switch. And I will often do interesting lookups. And my son loves, loves Boston Dynamics. We have watched that parkour video, and we call the other one the water one, where spot goes through -- it's a spot ad. It's a fantastic ad, because it's not at all an ad. We love that, right? Ads that aren't ads. And it's just amazing what they've done with the old generation. And if this is the new generation, I just think about all the software, all the sensors, all the things that went into making this kind of thing realistic. It stands and uses gravity to its best benefit. It doesn't wobble one little bit... Now, could this be a Devon situation? I sure hope not. I don't think Boston Dynamics is a Devon-like folks, because they've proven it before --

**Jerod Santo:** You're referring to the fake demo. Devon's fake demo.

**Adam Stacoviak:** Right. How true is this. But it didn't waver, is what I'm trying to say. All the things that went into standing up naturally, using gravity towards its best advantage... There was no clunkiness. Whereas old Atlas does have a little clunkiness to it. While it is - or was - state of the art, this new Atlas is uncanny.

**Jerod Santo:** Yeah. And it's a full-on replacement. Like, they're just done with the old one now. They're like "This one's better in every way." And they say this provides them a path towards commercial viability. Because it's battery-based, it's so much smaller and lighter. Of course, it'll still be prohibitive-- prohibitively... I can't say that word.

**Adam Stacoviak:** Prohibitively... I gotcha.

**Jerod Santo:** ...so prohibitively expensive... You know what I was trying to say.

**Adam Stacoviak:** I'm feeling ya.

**Jerod Santo:** But it's getting there. It's getting there.

**Adam Stacoviak:** How much do you think the batteries weigh? Just a guess. I don't even know. I'm asking what you think they might be.

**Jerod Santo:** In the realms of like 20-40 pounds... Something like that.

**Adam Stacoviak:** No way. Gosh. It's gotta be like two, three, four hundred pounds, minimum.

**Jerod Santo:** The batteries, I said. The whole thing?

**Adam Stacoviak:** I could be wrong... I'm basing this on what I know about batteries for solar, and I'm also basing this on a recent thing I watched, where they were talking about how basically impossible it is for these batteries to replace semi-trucks on the highway. That a single battery is like 8,000 pounds. So a battery to power this -- I suppose it depends on the longevity of the battery, too. But my guess is a couple hundred pounds.

**Jerod Santo:** I would say overall, the entire robot, I would put in the 400 pounds range, just by watching it. I could be totally off on that. But yeah, it's getting there... It's got these big old meathooks... I mean, it'll be useful pretty soon. They do say - and then we can end with this... The official blog posts from Boston Dynamics says that in the months and years ahead they're excited to show what the world's most dynamic humanoid robot can really do in the lab, in the factory, and in our lives. So they want to bring this to a home near you, or for your home even, if you have enough money.

**Adam Stacoviak:** I'll stand corrected... I did google this right here.

**Jerod Santo:** Fact-check yourself.

**Adam Stacoviak:** Yeah. It says "Atlas, the prior version, weighs 89 kilograms, which is roughly 195 pounds, give or take."

**Jerod Santo:** Oh, wow. That's light.

**Adam Stacoviak:** So this is a fraction of that, Jerod, as you said. I mean, well, as they said; you said they said.

**Jerod Santo:** Right. Someone said it.

**Adam Stacoviak:** Right. If it's a fraction... And it says this, "It's a fraction of the size and weight of a hydraulic version." So if that's the truth, then let's just say a fraction is 20%.

**Jerod Santo:** Half? Yeah, I mean... Okay.

**Adam Stacoviak:** I mean, a fraction... I'm trying to give them -- maybe 33%.

**Jerod Santo:** Yeah. Okay.

**Adam Stacoviak:** To do thirds.

**Jerod Santo:** Sure.

**Adam Stacoviak:** So what is that? It's like 70 pounds?

**Jerod Santo:** Yeah. So then the battery's gotta be half of that probably... Ish. I mean, it's got a frame, and everything...

**Adam Stacoviak:** I could be wrong on that part, too. I'll admit that as well. Geez.

**Jerod Santo:** Anyways...

**Adam Stacoviak:** These batteries weigh a lot.

**Jerod Santo:** \[25:54\] Smaller and lighter... I mean, at less than 100 pounds, you could carry that sucker around, throw it in your trunk... Oh, could you imagine...? You open your back trunk, and that thing unfolds out of it, and starts walking towards you...

**Adam Stacoviak:** So I've got a little Plus Plus treat for folks I'll mention right here at the part of the show... And you can even leave for this, Jerod, unless you wants to stick around for it... But I have a story that I had Chat-GPT write my son.

**Jerod Santo:** Oh, you're not going to read it, are you?

**Adam Stacoviak:** And this is the prompt. This is the prompt. I said "I need a story for an awesome four-year-old that includes Boston Dynamics and the coolest robot dog ever, called Robotron." And it wrote me a story. And so the Plus Plus for this show will be me reading you that story.

**Jerod Santo:** You're going to read it?

**Adam Stacoviak:** I'll read it, yeah.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** Because we're talking about Boston Dynamics, you know? Why not...?

**Jerod Santo:** Love it. Alright, what is next? Let's run through some more news...

**Adam Stacoviak:** Last time I checked, Jerod, Zed is not dead. It's very much alive.

**Jerod Santo:** Zed is very much alive.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Are you a daily driver now?

**Adam Stacoviak:** I'm a driver when I code...

**Jerod Santo:** Which is not daily.

**Adam Stacoviak:** \[unintelligible 00:26:52.20\]

**Jerod Santo:** Yeah, fair enough,

**Adam Stacoviak:** It is the only editor I use... Although I do go back to Sublime Text for option mousing selections. Do you ever do that?

**Jerod Santo:** I use Sublime Text for a few things still as well... And it has to do with text selection, with multi-cursors, and the way you can do stuff. So yeah, Zed's not quite there yet for me. I think there's ways to accomplish it, but they're more cumbersome.

**Adam Stacoviak:** So I felt that pain too, and that's why I keep Sublime Text installed... It's why it's not gone yet. It still has use.

**Jerod Santo:** Same.

**Adam Stacoviak:** Only in that regard, though. Although my needs are not deep. I do find Zed pretty fun. And then our friend, Thorsten Ball, shared a post "From Vim to Zed." He had been a 20-year user of Vim...

**Jerod Santo:** That's a long time.

**Adam Stacoviak:** And now works at - what's the name of the company? Something Industries?

**Jerod Santo:** Zed Corp? I don't know. Zed Inc?

**Adam Stacoviak:** Is it Zed Industries? I thought it was something different than that.

**Jerod Santo:** Zed Industries maybe?

**Adam Stacoviak:** Oh, it is Zed Industries. Geez.

**Jerod Santo:** Nice call.

**Adam Stacoviak:** Sorry about that...

**Jerod Santo:** So Thorsten switched to Zed because he got a job there? Or did he get a job there because he switched to Zed?

**Adam Stacoviak:** Well, that I think was the question, was he had addressed that. He says "Some friends have asked me about the switch. "Now that you work at Zed, are you using Zed instead of Vim?" And so he wrote about it. So I think you would want to start using the editor you work for.

**Jerod Santo:** Yeah, totally.

**Adam Stacoviak:** \[unintelligible 00:28:17.09\] so it would totally make sense.

**Jerod Santo:** Totally.

**Adam Stacoviak:** But I've gotta imagine he used Zed before. It wasn't like "Oh my gosh, let me go work somewhere else. Oh, by the way, they make an editor. I should probably use it." I don't think that's Thorsten's thought process, just how I know him. Prior to this he worked at Sourcegraph. He's been on Go Time a couple of times, he's written compiler books... Very well done in his career, and very -- I'd say a very thorough thinker. I like the way Thorsten thinks, honestly.

And so he kind of covered some things he likes about Zed, in regards to coming from Vim. And obviously, Vim mode is the easy one... Vim proficiency - he said he's used them professionally, intensely, admiringly, loudly...

**Jerod Santo:** Loudly... \[laughs\]

**Adam Stacoviak:** ...loudly, for the past 13 years. So I would imagine the opinions he shares are pretty thick, and pretty on point given that rich history. What are your thoughts?

**Jerod Santo:** Well, I can definitely see it... And I've never been a fan of Vim mode myself, having deep Vim roots, but also enjoying nice, pretty GUIs editors. I've always turned Vim mode on for a few minutes, and then it's been uncanny valley, and there's stuff missing, and so I ended up turning it off... And eventually, I just got used to the way Sublime Text worked, and I was happy with that. So I wouldn't use Vim mode myself inside Zed. I do not use Vim mode inside Zed, even though I use Vim in a terminal throughout the week as well. But I can see how it would help people cross that chasm, and keep some of the speed they're used to by being keyboard-based nav.

\[29:58\] I mean, if you have all of Vim's keyboard shortcuts internalized, there's no faster moving than that. And so to use an editor like Zed, where you're tempted to take the mouse and point it at a spot and click on it, you're going to slow yourself down doing that. So I understand why they need to have Vim mode for adoption. I also understand why Vim users would want to have Vim mode. I've just never personally liked it enough. It's always kind of left me hanging, or it doesn't support my particular nav...

That's the thing about Vim, is you can create your own style of navigation based on whatever combination of keyboard strokes that you like. And people navigate in different ways. And so if it supports all of Vim's motions, which I doubt it, then it'd be fine. But there's always some lacking, and that was frustrating for me. But I am still, to this day, Zed daily driver. There are some things that bug me about it, but I do love how often it's updating. A couple of times a week sometimes... Relaunch and see what's new. And they're adding stuff that I want. So Emmet was recently added as a built-in extension, first-party supported extension. Emmet, for those who don't know, is the HTML text expander library, where you can type div.title, and it'll be div class = title. And you can say x3 and it'll do three divs class equals title. And you can get real fancy with it. I just use it for basic HTML text expansion.

But then there's things that bug me, like it only works if your document's set to HTML, which in cases that you have a templating language, you have it set to something else, and so Emmet's not available. It's just early days. I also don't like how it doesn't seem to detect correctly multiple languages in the same file. So if I have an HTML document, and I have some script tags in there, and I'm just writing some JavaScript inside the script tags, it's not syntax-highlighting them correctly, because it assumes this is an HTML document, I assume. I don't know. Stuff like that, where it just needs the polish... But we know Nathan and his team - they're going to polish this sucker up. And so every day it's getting better, and I love that. So I'm still using it, still excited by it, still using Sublime Text for a few things... I would love to sit Nathan down with my Sublime Text use, and be like "If Zed could handle this kind of stuff, then I'd be a super-happy camper."

**Adam Stacoviak:** Well, maybe we can arrange that at a YouTube near you, or something like that.

**Jerod Santo:** He did implement your feature, didn't he? Didn't he implement your feature request?

**Adam Stacoviak:** I requested it, I don't know if it got implemented... I think he may have. I don't know. One thing I'm actually noticing is that Thorsten did say "I work at Zed, because I used Zed and found it very interesting." So this switch from Vim to Zed is obviously part of his decision to work there. No mystery there, really. But he says he does still use Vim, but probably like I do, which is like I've SSH-ed into a machine, I'm not gonna use anything else... Vim is there, \[unintelligible 00:33:06.04\] Out, see ya, done. You know?

**Jerod Santo:** Totally.

**Adam Stacoviak:** So there you go. So Zed is awesome. I use Zed, I like it.

**Jerod Santo:** Up next, let's talk about something that Justin Searls is using, that most people are not using. And that's the Apple Vision Pro. Justin recently wrote a post titled "Vision Pro was a better deal than my Mac Studio." So he is all-in on Vision Pro. I know many people have moved on; like, it made a splash, it got all the reviews, all the memes, and the people walking around Times Square, stopping in the middle of the street and doing some sort of Vision Pro motion and then they keep walking... And they're like "This is what life's gonna be like now." And then the luster wore off, and many people are now writing their posts about how they're not using their Vision Pro anymore, and it's a failure. And Justin is, however, the voice of one crying in the wilderness here. He's saying he's still using his Vision Pro. It was a better deal than his Mac Studio, and he says he's been using it for no other purpose than Mac virtual display, and he uses it for that for four to eight hours a day, seven days a week. So he's spending four to eight hours, even on a Sunday, with this thing on his face.

\[34:34\] He says "Meanwhile, my brand spankin' new M2 ultra-equipped Mac Studio and 32-inch 6k monitor are collecting dust." This sounds a little bit like a humble brag coming from Justin, with the gear that he has... More than that, he says "I'm getting more done than at any point in my career." And he's more productive now, he thinks, with this thing strapped to his face than he was with any other setup in his life. What do you think about that, Adam?

**Adam Stacoviak:** I ain't mad at it... As my good friend says that runs Meat Church, Matt Pittman. That's something he says every time he makes something good, and he tastes it, he's like "Ain't mad at that." It's like, it tastes good. That's the response. So I don't disagree. He's a good tastemaker. I'm concerned about his neck, but I'm looking at the Mac Virtual Display video that's on the docs page that he links to, and I think it looks pretty cool. So I think if this was a scenario -- I can agree, I suppose, that this looks pretty cool; that you can do certain gestures, and you've got this virtual display... He talks about not having ADHD as a diagnosis, but talks about his ability to focus... And so I think that that's pretty spot on, I think, with a less distracting display... Because I find myself doing that. I mean, jeez, I'm like "I've gotta go to my email to get this information." And then on my way there to my email, I see a different email. And then I'm chasing this thing, because that was an urgent thing, or something that caught my attention, something that I should do --

**Jerod Santo:** Sure, it happens all time.

**Adam Stacoviak:** Yeah. And then 20 minutes in I'm like "What was I doing again?" And that's just the email. But I suppose that can happen on a virtual display as well, if I'm still virtually displaying my email. It looks pretty cool... Whether or not the Mac Studio will continue to collect dust, I don't know. And I'm not sure I can -- having not been a user, nor owner of this, four to eight hours a day, seven days a week seems excessive. I would shorten it by at least two days, and maybe two to three hours per those days you do give yourself. But yeah, maybe he's excited. He's the new kid in the candy store. He's got a new toy to play with.

**Jerod Santo:** Yeah, it sounds like he certainly is. He certainly is. He's doing it since February, so now it's April 18th as we record... That's a decent amount of time to continue something. He does say he has this, like you said, Mac Studio very fancy monitor which is five feet away from him... And he says he's barely touched it over the last two months. "Instead, I'm lounging in my knockoff Eames chair and typing with my MacBook Air on my lap, as I gaze straight ahead at a massive screen and sip my coffee." So he's painting a pretty nice picture. He says this helps with posture, and like you said, focus; even though he doesn't have ADHD, of course, he has the same thing we all have, which is the ability to easily get distracted.

**Adam Stacoviak:** Yeah, distractibility is out there.

**Jerod Santo:** It's so hard to beat.

**Adam Stacoviak:** Yeah

**Jerod Santo:** And so the overall gist is now he says instead of sitting at his computer for six hours and getting a few hours of work done, he's getting six really great hours of work done with this device, versus any other one. I can't argue with it, because I've never worn one, I've never tried it. Maybe he's living in the future, and we just haven't arrived there yet. Or maybe he's just the only one who likes this thing, and everybody else is back to their -- I mean, a 6k display is pretty nice, if you ask me...

**Adam Stacoviak:** \[38:07\] Well, I think my hinge for this is not its usefulness. I just worry about until it gets a smaller form factor. I think he's probably spot on with the usefulness. It's the ergonomics. It's pretty heavy.

**Jerod Santo:** Yeah, I couldn't imagine wearing that for eight hours. Even my headphones - you know, I wear big studio headphones when we record and when we edit... I take them off in between. If I'm not recording or editing, they're off my head, because I just do not want something on my head for that long. And I couldn't imagine even if it's in front of your eyes... But I don't know; it works for some folks, I guess.

**Adam Stacoviak:** Well, good on you, Justin, for writing this up and taking the plunge. I'm not sure I can embrace your feelings... Literally, feelings of it on your face, on your head... But I can embrace your productivity, so good for you.

**Jerod Santo:** Well, quick teaser for Justin in the future. Apple's next WWDC keynote is June 10th, I believe, and Justin is scheduled to join us on the show June 11th. So the day after we will have him on for Apple reactions. And of course, we can discuss this with him at that time as well. What's next?

**Adam Stacoviak:** I think what is next is how hard is getting to use and recommend Firefox. This is what somebody said... And I don't have much to say about this, but I kind of concur and agree, because every time we try to use certain applications - especially Riverside. We're on Riverside right now. You've got to use a Chromium-based application. You have issues with it, there's video lag, and issues... And I understand what Firefox has stood for. We've talked with Nick Nisi on this subject at least twice on a podcast, and we've expressed our love for Safari as Mac users. I don't choose it because it's the default browser, I choose it because I think it's the simplest, most cleanest, least distracting browser. Sure, it can be improved. We've tried Arc, he's tried Arc; I think he's tried it for more than a few days. He may even be an Arc user at this point, I don't know. But I am concerned about the free web, in regards to what they say, that Firefox represents that, and it doesn't have the market share anymore as a browser. That's a bummer.

**Jerod Santo:** I guess in a certain way I feel guilty for not using Firefox. I don't know about you... Have you ever heard Bill Burr's take on feminists and the WNBA.

**Bill Burr extract:** \[40:34\]

*Dude, look at the WNBA. Nobody in the WNBA got COVID. Nobody. They've been playing in front of 300 to 400 people a night for a quarter of a century. Not to mention it's a male-subsidized league. We \[unintelligible 00:40:56.14\] None of you showed up. Where are all the feminists? That place should be packed with feminists. Faces painted, wearing jerseys, going nuts, like the guys do, in the upper deck, with your big \[unintelligible 00:41:09.08\]*

*None of you went to the games. None of you. You all -- you failed them. Not me. Not men. Women failed the WNBA. Ladies, ladies... Name your top five all-time WNBA players of all time, come on. \[laughter\] Name five WNBA teams. Named the WNBA team in your city. You can't do it!*

**Jerod Santo:** And to a certain extent, I feel like that with Firefox. It's like, I'm pro open web, indie software... I mean, Firefox is not indie software \[unintelligible 00:41:58.28\] But it is the last third-party rendering engine, and represents privacy, and security, and open source, and all these things. And these are all things that I like. And yet I don't use it.

**Adam Stacoviak:** See, this is the classic example of the what, not the why. The why I think is challenging, because it's not the what. It has the privacy, it has the focus, it has the various things, but it's the why should you use it that really I think Chrome - the Chrome dev team, Safari's team even, in a lot of cases, have led the way with new and burgeoning web standards. I don't know if Firefox is innovating on those levels like Chrome has... Which is why applications like Riverside and others that leverage newer technology for the web, they're gaining steam and adoption. I can also say that Google is much bigger than Mozilla has been, ever... So how can you be this -- they're an incumbent, really. I mean, they conquered over Internet Explorer, and became -- didn't they have way more market share before Chrome came about, and then that all went...

**Jerod Santo:** Yeah, Chrome took a lot of their market share.

**Adam Stacoviak:** Right. But they had a lot of it, though. Didn't they have like a major resurgence for Firefox? It was the most used browser at one point, wasn't it?

**Jerod Santo:** No, it was a large minority. Like, I would put it in the 20%, maybe 15% to 20% of worldwide usage. This is off the top of my head about history. And now it's back down to like 3% to 5%, I think. But it got enough of a hold that it needed to be taken seriously, and supported by websites writ-large. And so that really broke the stranglehold of Internet Explorer, or as we used to call it, Internet Exploder. So it was significant, and it's definitely lost a lot of market share since then... But it never got to a majority.

\[44:04\] And I disagree about their support for burgeoning web standards. I feel like Firefox has always been right there with people in the game, writing the specs, implementing the features... Of course, different browsers have different priorities. Safari - there are certain things that the Safari team just doesn't want to build for business reasons. There are other places where Safari has been the first one to implement things, especially if they're things that Apple likes, like font loading, and performance things, and security things... So that's a tough one for me to really make strong claims about.

I think Firefox, Mozilla as a corporation, in the last 10 years has gotten distracted from Firefox, and hasn't funded its development, even though it's the cash cow of the organization, by pulling in that Google money for search. And so they've gotten distracted with like the mobile OS (Firefox OS, was it?), VPNs... Other things, other products that haven't got the usage that Firefox has. And so for that reason, I feel like Firefox has definitely got to where it wasn't. It used to be like nimble, fast, private, with extensions, and tabs. And that's what got it to where it was. And it still has tabs, and it still has extensions, and it still has privacy as far as I can tell... But it got kind of memory-hungry, kind of slow... It's always been, at least on MacOS, in my opinion, an ugly-looking piece of software. No offense to the people that work on it. I have much respect for you all. It just hasn't spoken to my sensibilities. And I don't know. But it definitely stands for a lot of the things that I believe in, and yet I don't use it.

**Adam Stacoviak:** Yeah. Well, let's lay that invite down one more time. Mitchell Baker, you are welcome here. We agree with the health of the internet being very important. That's why you exist. We don't disagree with that. And we'd love to talk to you about your mission-driven company focused on privacy, and a healthy internet, and all that good stuff.

Well, I think the one caveat that I can mention for this person that wrote the post - let me get their name in place... What is their name? The blog is called Technically a Blog. Person's name, I don't know yet. Nicole. It's Nicole. She says "I'm a software engineer, and I run Fedora on my personal laptop." So that might be potentially the problem. I love Linux, but sometimes video things and audio things, as we know, Jerod, on Linux can be challenging. She says "This particular bug", that she was referencing on why this is an issue, and you can go back and read the post, of course, "was on the latest version by running a bleeding edge distribution. I got cut. I didn't have the same issue on my work laptop running an LTS version of Ubuntu. So in some ways, it's a problem of my own making, and there was a workaround." So the reason for this post could have been potentially avoided, but I think the premise of the post is essentially that there are showstopping bugs that keep surfacing for folks on Firefox, that make them have to choose a different browser. And that's the challenge.

**Jerod Santo:** Agreed. A sidenote - Mitchell Baker is still involved, but no longer CEO there.

**Adam Stacoviak:** Is that right?

**Jerod Santo:** Yeah, she stepped down. I think she's like in charge of AI, Internet safety and AI... And they named Laura Chambers, who was already a board member, as the interim CEO. I definitely reached out to Laura Chambers and asked her to come on the show. I don't think she said anything back. But open invitation; we'd still love to talk to Mitchell on the show. I'm not saying for that reason we don't wanna talk to Mitchell.

**Adam Stacoviak:** For sure.

**Jerod Santo:** I'm just saying we'd also -- open invitation for...

**Adam Stacoviak:** Invite rescinded, Mitchell.

**Jerod Santo:** \[laughs\] Yeah. Take it all back.

**Adam Stacoviak:** \[47:55\] I'm just kidding. I should have noticed this too, because on the homepage it says "Executive chair of the board" now, not CEO. So that's my bed.

**Jerod Santo:** And I'm not sure how long the interim is going to last for Laura... But we'd love to have you on the show as well.

**Adam Stacoviak:** I would say whoever's leading Mozilla, that wants to talk about Mozilla and its direction...

**Jerod Santo:** A hundred percent.

**Adam Stacoviak:** ...and to lay a guilt trip just heavily upon us, to make us use Firefox or whatever again... Please, come on and lay it on us. We will welcome that. And we might argue a little bit, but we'll have fun doing it.

**Jerod Santo:** We'll argue from our emotions, probably.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Because that's how we choose software a lot of times. Isn't it emotional? I mean, I feel like it's so emotional. Are you utilitarian, like "The best tool for the job" every time? Analyze them, break them down?

**Adam Stacoviak:** No, \[unintelligible 00:48:32.02\] a little bit. I think the one morning I did not do very much was Alfred to Raycast.

**Jerod Santo:** \[unintelligible 00:48:40.02\]

**Adam Stacoviak:** Because I resisted Raycast from Alfred. I had bought a lifetime license. I never needed to spend any money again. I was good to go.

**Jerod Santo:** You were done spending money. Yeah.

**Adam Stacoviak:** My long-term investment was secured, I had the application, all things were well... And then I tried Raycast and I was like "Wow, this is just so much better, in almost every way. Take my money."

**Jerod Santo:** How does that happen to Alfred?

**Adam Stacoviak:** That's an interesting question. It's not on our list, but I'll give you that... I kind of brought it up, so I'll dig in with you.

**Jerod Santo:** Okay.

**Adam Stacoviak:** My hypothesis is - and maybe this is actually yet to be seen if Raycast will be successful long term. So in the short term they are. I would say Alfred seems to be a single developer, with not really a business model. There's no funding that I'm aware of. Great UI, great UX. Maybe a couple people on the team. I have no idea, really. My assumption is that because there's no story painted. And I think you mentioned being emotional... I think we get emotional because we buy into the story of what the software is; not just what it does for us, but who's behind it, and why they exist, and why it exists, and why use it. And I think for Raycast, they have a team... I just had Thomas on the podcast; if you go back a couple, you'll see it there. They started out with a different idea at Y Combinator, late into it... Out the other end came Raycast. Story's on the podcast, go listen to it. And they have a great team behind it, they are focused on being productive on a Mac... And they are writing native code to make sure it's super-fast.

And so all the intention, all the focus is on the most productive tool for someone who wants to be productive on a Mac; from launching applications, to doing \[unintelligible 00:50:20.10\] to doing Windows centering, to using Obsidian to create a new note... To all the things. I mean, all the things. Clipboard history...

So I think what may have happened with Alfred is just that it was -- because I don't want to say this like it puts down a single developer, or an indie dev, because that's not what I'm trying to say. But I think if you have -- and I think this is a challenge we might face at some point. I've said this a couple of times... We like this business because it affords us the ability to have fun, and enjoy our lifestyle. And it doesn't make us have to become some sort of media conglomerate. If a media conglomerate came around that was more indie than we are, with more funding, they may destroy us.

**Jerod Santo:** How do you mean more indie, with more funding?

**Adam Stacoviak:** I don't know, Jerod. I mean, maybe they find ways to make more money. To have more funding --

**Jerod Santo:** Better at it than we are.

**Adam Stacoviak:** Yeah. Maybe they're better at the funding model than we are, I don't know.

**Jerod Santo:** I'm fine with that. Like, if somebody comes by and just gets better at it than us... I mean, I'm not fine with it personally. I want to compete. But that's just how you -- like maybe Raycast is just better at writing software than Alfred folks are.

**Adam Stacoviak:** Maybe. All their extensions are MIT open source, too. So they have a single repository on GitHub. So every extension other than the native extension, I believe, live in this repository. And so all contributions are MIT-licensed. So you can go today, Jerod, and from our API create a Changelog extension that says "Show me the latest episodes." And you can down-arrow to it, click it, and it can open up in Spotify, or in Music, or on our website, and they can choose that kind of stuff, and it would be open source.

**Jerod Santo:** \[51:56\] Who's building this?

**Adam Stacoviak:** You are. I just gave you a task.

**Jerod Santo:** Me? I didn't even know I could do that. Oh, this is an assignment. Okay.

**Adam Stacoviak:** This is an assignment.

**Jerod Santo:** Well, I'm not a Raycast user, but you're definitely -- you're talking to me. I do like to limit the amount of installed software I have. And I've always just -- I had a Raycast, I used it for a little bit, and I liked it. It just inserted itself too many times in ways where I was like "I'm just trying to get--" Specifically, I remember the address book. Like, if I just hit Command+Space and type "Adam Stacoviak", maybe I just want to get your phone number, and to copy and paste it or something, it doesn't do that anymore. Spotlight just gets you to the contact card. Raycast has this interstitial thing, and now I'm clicking over here... And I'm just like "Get out of my way. Give me what I want."

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So that's just one case where -- and it didn't provide me enough value for me to basically... I think I had it installed -- I think it's still installed, but I just unmapped it from Command+Space, which is how I use Spotlight. Because with Spotlight I can just do my app launching, I can do my math, this plus that, this times this... And that's what I use it for. I do have a clipboard history tool, and I have a window moving around/resizing tool. The clipboard history tool is called Maccy, and the window management tool is called Rectangle. And they're both great. But I would be happy to replace those with one thing that does everything great. I just -- I have solutions, so I'm not looking for a solution to that problem.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But I was never a big Alfred guy either. I mean, I tried it -- I liked Quicksilver back in the day... But I was much younger back then. I was way into super-optimizing everything I did with shortcuts, and workflows... And I don't really like to do that anymore. I'd rather just use what's there... Which makes me old, I think, and crotchety.

**Adam Stacoviak:** Sadness.

**Jerod Santo:** Yeah. Anyway, so that's why you picked Raycast over Alfred. One thing I love about open source, which has become more apparent to me now... I like to know, or at least be able to watch and know of the people who write the software that I use. I think it's cool. I'm using Atuin nonstop now.

**Adam Stacoviak:** Really?

**Jerod Santo:** Yeah. I'm a complete convert. And I think it's cool that we know Ellie, and she's an interesting person... And she makes that. And it just feels -- it's almost like the whole mom and pop shop kind of thing.

**Adam Stacoviak:** Personal software.

**Jerod Santo:** Yeah. It's so neat.

**Adam Stacoviak:** That's why it's so emotional whenever the thing changes.

**Jerod Santo:** Right. And it's not like I'm gonna therefore hit her up and ask for features, and... I'm not going to use that or anything. But just being able to know -- even if you don't know personally, know who that person is... Louis Pilfold, who is coming on the Changelog next week, who we just interviewed yesterday... People really support him on GitHub Sponsors. And the reason seems to be because people like him. He's a likable person. He couldn't come out and say that, but I can say that. People like the guy. And he's building Gleam, and it's cool. And he's cool. And it's fun to be part of it, it seems like. And I think that's just like -- there's something about that... And maybe the Alfred folks just didn't have any emotional connection for you, a personal connection, an emotional connection, so it's easy to swap them out for something else when it came along.

**Adam Stacoviak:** Yeah, I think that's the -- the lack of \[unintelligible 00:55:04.28\] was lack of connection.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Great tool. Phenomenal software, really. I like it. And whoever's behind it is probably amazing. No dis whatsoever. I just think that there was just no emotional connection. So I think if you're going to build something, you have to tell your story. You have to be personable. People like the Changelog when you and I are on the podcast, Jerod. Now, there's times when you go off and do your own thing, and they still like it... And same with me. They still like it, but they -- even guests say "I would rather reschedule if Adam or Jerod can't be there." That's a thing. And because they like us both. People like us both.

**Jerod Santo:** It's like peanut butter and jelly.

**Adam Stacoviak:** That's right, man. That's how it works. But I'm a fan of Raycast, as you know... And the one thing I think you might like as well is there's a single pane of glass to all the LLMs.

**Jerod Santo:** Yeah, that's cool. I just use ChatGPT in a tab.

**Adam Stacoviak:** \[55:54\] Yeah. And I did, too. Until.

**Jerod Santo:** And now you don't.

**Adam Stacoviak:** So it's not there yet. It doesn't fully replace it.

**Jerod Santo:** Okay.

**Adam Stacoviak:** So here's an example. I'll share some of my laziness with the audience here. I shared a prompt with the AI ChatGPT 4 inside of Raycast and said "Go to this post and give me 10 notable highlights, with direct quotes from each highlight." Raycast failed, and it was ChatGPT 4, so it wasn't like a lesser model. It said "I can't go browse the internet." And I'm like "Nah. I know that ChatGPT can browse the internet, because I do it all the time." So I went to legit ChatGPT, in my tab, and said "Do this", and it did it. So there was a failure there in that one case. And that's an AI thing, but I think there's UX challenges on their side as well... Because it's a sub-application. Jerod, you know about this; sub-shows, you know?

**Jerod Santo:** Mm-hm.

**Adam Stacoviak:** Sub-shows can't really shine very well. We know that. Now they can actually. We proved my initial hypothesis wrong. But it's a sub-application of Raycast. This is by no means deep on Raycast, but geez, this is how it works, okay? And so I find myself in the AI chat, but it doesn't have all the same features as an application. So I think they have possibilities. So I'm sticking around not because it's amazing at everything I want it to do now, it's because I know the people behind the thing are dedicated to getting where I want it to go. And they're also willing to hear this gripe. I had the same gripe -- when I go and I search "jer" and I don't find you in my list, I'm upset.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** I've then gotta go to Contacts and then say "Search those contexts." That's just dumb.

**Jerod Santo:** I agree.

**Adam Stacoviak:** That's the dumbest thing ever. So I'm with you on that.

**Jerod Santo:** Let's get that on our list.

**Adam Stacoviak:** I want to change it today. If I could read the code, I would. I would just go in and like "Boom, here's the code."

**Jerod Santo:** Is there an extension that says "Remove this feature?" An extension that takes another one out? That'd be cool.

**Adam Stacoviak:** So I think what it could be is -- it seems silly that you should have to go to a search prompt for contacts. Alfred, Spotlight, even Quiksilver indexed the contacts directly, \[unintelligible 00:58:00.00\] were first class citizens in the index. You didn't have to go to a subset to search only those things. So I'm sure there's a tweak behind the scenes you could do to make that a thing. I don't know why it's like that, but it's dumb.

**Jerod Santo:** It's difficult when you have like a single prompt, or a single pane of glass that tries to provide so many different sub-programs; it has to then say "Hey, okay, here's my query... But which sub-program were you targeting this query to? Was it an LLM? Was it the OS? Are you trying to launch an application?" And so they have trade-offs there. They have to decide what gets the bare query, the empty one, where it's just a word, or just a phrase, versus - I'm sure you can put a little prefix there, with a colon or whatever, and like use a sub-part of Raycast, or something. And I'm just talking completely hypothetically, because I don't use it, but... That's a challenge as a UX designer, is like "Well, what gets top-level search, and what doesn't?" And because macOS spotlight really is an operating system level thing and nothing else, it's just like, it's gonna search its built-in Apple apps, and that's usually just what you need. But I do feel like that particular use, like "Hey, this is just a name", you know... Just like pass it off to the Contacts app automatically. Why not? Alright, we've beat this horse dead...

**Break**: \[59:25\]

**Jerod Santo:** Beeper no longer indie... I don't know if it was indie before. It was probably a startup. Now part of Automattic. So this is April 9th, Beeper's CEO Eric Migicovsky, now the Automattic head of messaging, writes "I'm excited to announce that Beeper has been acquired by Automattic. This acquisition marks the beginning of an exciting new chapter", that's what they always say, "as we continue our mission to create the best chat app on Earth." So if you haven't heard of Beeper before, this really made its name, because it unified the green bubbles and the blue bubbles on iOS. So you could be an Android user, install Beeper, and chat over iMessage with a blue level.

**Adam Stacoviak:** No way.

**Jerod Santo:** Yes.

**Adam Stacoviak:** You can masquerade...

**Jerod Santo:** Yeah. It was called Beeper Mini; you can't anymore, because Apple said no. Apple basically kicked them out for it. They found a very good technical way of getting it done. I don't remember the details. I feel like there was a Beeper middleman, like a Beeper server somewhere in the mix, but they found a way of bridging the TLS and stuff... I don't know. But it was seamless to the end users that you could be on an Android, and as long as you're using Beeper, which is a universal chat app - like, bring all your chats into one place - you could chat on iMessage and nobody would know you as a green bubble. And that got tons of users, like right away. Bam. That was called Beeper Mini. Briefly available. It was a briefly-available app. And so Apple basically put the kibosh on that, and now Beeper still is this universal chat app, but with only 115,000 users, which - you know, nothing to shake a stick at, but not massive by today's startups. And so very much an uphill battle for them. And now Matt Mullenweg and company decided to buy them out, and as part of Automattic. What do you think?

**Adam Stacoviak:** Well, a couple questions... I guess one is an observation, and then a couple of questions. First, an observation is on the homepage of Beeper I think it's super-cool they've got this announcement, one, that they're being acquired, but the interface of showing off Beeper to display what it is - they have notifications, I would say, in the UI, in the abovefold, this hero image, so to speak. And then the little announcement says "Beeper's joining Automattic." I just think that's so cool. The subtle love and detail... Like, it's part of the marketing, but it's also embedded. That to me is a good touch. It's a thoughtful touch.

**Jerod Santo:** Yeah. I think their reputation was that they were -- I'm using past tense as if they don't exist anymore, but Beeper as a company is no longer standalone. Their reputation was very good, and it was like software that worked really well, with those touches, and had solved this huge problem of the green bubble/blue bubble social stratification.

**Adam Stacoviak:** And I would say equally an observation... There's no mention of Beeper on the Automattic homepage yet. So who's winning here?

**Jerod Santo:** Who's winning...?

**Adam Stacoviak:** Who's updating their homepage faster? Like, Beeper made it. I mean, that's probably big news for them. But I think if you acquire --

**Jerod Santo:** It's probably a bigger deal for them.

**Adam Stacoviak:** \[01:05:40.11\] Yeah. But at the same time, their whole entire homepage for Automattic is a list of all the things they do. Gravatar, Newspack, Akismet... I mean, everything. Jetpack, Wordpress.com, of course... Maybe not everything - I could be wrong; I mean, they probably have more than this, potentially... But it's not there. So that's just an observation.

And then my question is what exactly will Automattic not acquire, and what is their purpose? Do you know much about what their goal is as a company? Are they an investor? Are they a "buy it and take over and make it amazing"? Because I don't know about Tumblr these days... That was amazing back in the day. I mean, Tumblr was revolutionary to change the entire way social blogging worked. And maybe a lot of today's social media is inherited from the progress made with Tumblr.

**Jerod Santo:** Sure, yeah. By the time they bought it though, it was basically a shadow of itself.

**Adam Stacoviak:** It was.

**Jerod Santo:** They got Tumblr in a fire sale from Yahoo. It was Yahoo, I think...

**Adam Stacoviak:** Yes.

**Jerod Santo:** And so Matt said -- he came out and said they wouldn't have bought it unless it was affordable. And it was. And I think they -- I couldn't find the quote, but I feel like he recently said that Tumblr was a mistake, or that they haven't been able to do with it what they thought they would be able to do with it. And they had layoffs recently at Tumblr, in December. A big portion, like 100+ people of a small organization laid off... And I think Matt has said they've been unable to find a way of having Tumblr make money... So I think Tumblr was a bad buy. But he's bought a bunch of stuff, and done really well with some of it. I mean, PocketCasts, for instance, is thriving. And they open sourced it, and they've left it pretty much alone... But Automattic ones PocketCasts, which is a great podcast app... And they seem to support things that are open and webby, and... I don't know the exact mission of Automattic, or what they say their investment philosophy is, but it seems like they like to buy different webby things and run them. I don't know, like WordPress.

**Adam Stacoviak:** Well, I just wonder, is this amazing news for -- I suppose, in quotes, any acquisition is a good news? Maybe that's not true... Probably not true.

**Jerod Santo:** No, probably not.

**Adam Stacoviak:** But it's probably good news for Beeper, because they're proclaiming it, right? They put a blog out there about it. We haven't even talked about the announcement post yet, but I guess you did allude to some of the user base based on what they said in there, too. 115,000 users...

**Jerod Santo:** Yeah. What about Beeper as a piece of software? So it's a universal chat app... So you use one app to send and receive messages on 14 different chat networks... Which I think is a real problem that we have. I don't know about you, Adam, but certain people in my life use certain chat apps, and not the other ones... And so I basically -- like, I have a WhatsApp, because I have a few friends who use Whatsapp only. And I have iMessage; of course, that one's built in. I use -- I don't use Facebook Messenger, but I find myself using LinkedIn messaging now, somewhat, mostly for work. But it's like all these different chat apps. And then there's Telegram, and there's Discord, then you've got Slack, and you've got... It goes on and on.

**Adam Stacoviak:** Right.

**Jerod Santo:** And so we all have all these apps on our phones, and all these accounts to manage... And we have to know -- do you have to think about certain friends like "Oh, this person's over here"?

**Adam Stacoviak:** Totally.

**Jerod Santo:** "This person I talk to in Slack, this person I talk to on iMessage..."

**Adam Stacoviak:** Yup...

**Jerod Santo:** So I kind of like that idea. Like, "Let's unify all that into one place."

**Adam Stacoviak:** Yeah... I think the idea is great. I really do. And I just wonder if it's possible to do it well. Because every unique application scenario has a unique application UX. And that's both good and bad. Like, we've talked about LinkedIn; I think it's not the best -- I talk to a lot of people there, in long form. And realistically, only there. And it might as well be my email thread with them, because that's how much we talk there. And I don't find the experience to be amazing. Would it be simplified or better if it was in Beeper? I don't know. Maybe.

**Jerod Santo:** Right.

**Adam Stacoviak:** \[01:09:51.29\] I think trying to unify all the crazy chat worlds is a challenge. Maybe they did it well. And as a non-user, I can't say for sure.

**Jerod Santo:** Yeah, exactly. I haven't used it either, but I was just giving you what I've heard a lot of people say. They do like to use it. I used Pidgin back in the day. Did you ever use Pidgin? This was an open source --

**Adam Stacoviak:** I did not.

**Jerod Santo:** Okay, so Pidgin was a very similar thing, only it ran on your desktop, and it would bridge like Jabber... So if you had some XMPP things going on, it would bridge G Chat... Is that what it was called, inside of Gmail?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Google Chat. That was actually a thing. People were using that.

**Adam Stacoviak:** Did it support Piper Chat?

**Jerod Santo:** I don't know what Piper Chat is. What's Piper Chat?

**Adam Stacoviak:** That's from Silicon Valley.

**Jerod Santo:** Oh, gosh... We almost made it! We almost made it to the end.

**Adam Stacoviak:** I baited you, man. You teed that one up. I had to.

**Jerod Santo:** This episode was pure. Now it's been soiled. Bonjour \[unintelligible 01:10:42.12\] so you can put IRC in there...

**Adam Stacoviak:** Oh, yes.

**Jerod Santo:** AIM, so your Instant Messenger, your AOL Messenger...

**Adam Stacoviak:** I just feel bad for the developers that have to support all these protocols.

**Jerod Santo:** I know. And they were an open source deal.

**Adam Stacoviak:** I'm actually reading them off, I'm like "Oh, my gosh. IRC support in a messaging app?" Wow. That must be --

**Jerod Santo:** Oh, yeah. ICQ... Do you remember ICQ?

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** You could do all those inside of Pidgin. And I used it, and it was cool... And I couldn't believe it was free software. This was one of the reasons why I fell in love with open source, because I was like "Who writes this for free...?" So Beeper reminds me of that. And that being said, I haven't used Beeper, just because - I don't know, I don't mind having multiple apps. It's a thing, but it's not like a serious thorn in my side. I think if I was on Android, and I wanted the blue bubble -- like, that's what brought all the kids to the yard. It was like "Can I have blue bubbles on Android, please?" And when that got shut out by Apple, that's when I think Beeper probably said "Okay, we need a sugar daddy to get us there."

**Adam Stacoviak:** Yeah. WhatsApp, Facebook Messenger, Twitter, Android SMS, Google Messages, Telegram, Signal, Matrix, Slack, Google Chat, Instagram, IRC, Discord, LinkedIn.

**Jerod Santo:** That's a lot.

**Adam Stacoviak:** That's what they say when it says "Which networks can be used with Beeper?" So that's most of what I use. Instagram's in there...

**Jerod Santo:** Would you want to manage all those integrations? I mean, I just think of the headache of that software.

**Adam Stacoviak:** No, I would not...

**Jerod Santo:** I would never want to be a Beeper engineer.

**Adam Stacoviak:** If you're a Beeper engineer out there and you love your job, please email us.

**Jerod Santo:** Yeah, we'd love to talk to you.

**Adam Stacoviak:** Editors \[at\] changelog.com.

**Jerod Santo:** We'd love to hear about how it all gets wired together.

**Adam Stacoviak:** We're not talking smack. We're just trying to have empathy.

**Jerod Santo:** Absolutely. Well, hopefully Automattic and Matt Mullenweg can help them get somewhere awesome. I think if anybody can, I don't know, why not Matt Mullenweg? They do say in the post that Automattic has deep relationships at Apple, at Google, etc. And they imply that that's going to help them get maybe better support from Apple... And I just find that to be completely baseless and hopeful. I just can't imagine a world in which Apple says "Sure, let's go ahead and let the green bubbles masquerade as blue bubbles, and ruin our stranglehold on iMessage." I just don't think Apple's ever gonna let that happen, unless the governments of the world force them to... Which could happen.

**Adam Stacoviak:** Yeah. I suppose one more note too for this is what Eric says at the end. Eric is the former Beeper CEO, now Automattic head of en -- I almost said head of engineering... Head of messaging.

**Jerod Santo:** Okay.

**Adam Stacoviak:** He says at the end of the post "This is a big bet. Automattic is doubling down on chat after acquisition last year of texts.com, a messaging app with a similar mission." So doubling down... I mean, literally, by buying two. Right?

**Jerod Santo:** Mm-hm...

**Adam Stacoviak:** And if you go to texts.com, it still is a standalone app. Eric says they're merging worlds. He's now head of messaging for Automattic. So maybe they have a big mission here, where they will have the best end-all-be-all all-in-one chat app.

**Jerod Santo:** Well, let me put one prediction out there, just based on recent history. Open source Beeper coming soon. Maybe within the next couple of years. I think they might go ahead and -- maybe it'd be called something else, but... They open sourced PocketCasts. That was cool. Matt loves open source.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And so if they're trying to build one messaging app to rule them all, why not open source that sucker and get the goodwill that comes along with it?

**Adam Stacoviak:** \[01:14:13.07\] He does say they're staying under the Beeper brand.

**Jerod Santo:** Okay.

**Adam Stacoviak:** He says it's gonna take a little bit of time to --

**Jerod Santo:** Well, there you go - open source Beeper. I'm staking my claim. I think that's gonna happen.

**Adam Stacoviak:** Well, let's put out another invite. Eric, you are welcome on the show as well. Come share the future mission of Beeper. I think it's the coolest absolute name ever for a unified app. I mean, if you didn't grow up in the '80s and '90s, and think about your -- well, it was probably more like '90s. '90s was the era of the beeper. But if you grew up in that era and you literally had a beeper, you know how cool the name Beeper is. And if you're a wannabe that was born in the 2000s or the 2010s and you think Beeper is cool because what's old is new again - well, hey, you're welcome here too. But Beeper is a cool name.

**Jerod Santo:** A hundred percent.

**Adam Stacoviak:** Is that it?

**Jerod Santo:** That's it. it.

**Adam Stacoviak:** My gosh. Well, in closing let's mention Markdown, that thing you've found, that Vercel app. I think that's pretty cool. Go check that out. Did you mention that news yet.

**Jerod Santo:** I don't even know. I think I've just found it. I think it's probably going to come out in News. It'll probably be in next week's News.

**Adam Stacoviak:** I don't know much else besides it. I mean, I've been using Turndown for so long... Which is now at mixmark-io.github.io/turndown. I've been using Turndown forever.

**Jerod Santo:** Does it do the same thing? Or is it doing something slightly different?

**Adam Stacoviak:** It's kind of more full-featured. You have a -- left side is the HTML; so you paste the Markdown. You don't get a chance to paste a URL. You have style changes, so you can determine the heading style, the horizontal row style, the bullet style, the code block indent style... So you have a lot of control over it. So I guess maybe in many ways this is better than that.

**Jerod Santo:** Right.

**Adam Stacoviak:** But you can't point it at a URL. You have to have the HTML. And in most every case, I've got the HTML.

**Jerod Santo:** So you are talking about Turndown, the one that I'm linking up. So this is a cool tool that I've found this week. MarkdownDown is what it's called.

**Adam Stacoviak:** Double down.

**Jerod Santo:** As you mentioned, it's on the Vercel platform, as a subdomain web app. "Convert any webpage to a clean Markdown, with images downloaded." And so I'm looking at Turndown now for the first time. Yeah, I think it's more full-featured in terms of you can control the output a little bit better. This one has a few options... But you can just paste a URL to this sucker, and it'll actually go out there and fetch the HTML and all the images and everything, and it will separate them out and turn that into Markdown. I just find that to be very useful, and something that I haven't -- I've just found it, so I'm probably going to be starting using it... Because - how many times do you want some HTML and just turn it back into Markdown?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So a cool tool. We'll link that one up in the shownotes.

**Adam Stacoviak:** One quick plug for this fella... \[unintelligible 01:16:49.16\] I'm going to assume that's how you say his name. His Twitter bio says "Build something people don't want." But it also links up what he does in his Twitter bio from his homepage, and he is making something called Playroom. Join Playroom.com. So check that out. It's "Build multiplayer games in minutes." I don't know much more than that, but check it out. Let us know if you like it.

**Jerod Santo:** Alright, that's that. Thanks for hanging out with us, everyone... Next week we will be back with more changeloggy goodness. Any final words, Adam?

**Adam Stacoviak:** I can't wait. I'm so excited. Let's do it.

**Jerod Santo:** Alright. Bye, friends.

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Stick around for Adam's story, Plus Plus people.

**Adam Stacoviak:** Here it comes.
