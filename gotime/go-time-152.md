**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about GopherCon. GopherCon was the first Go conference which I was lucky enough to go to in 2014, and now it's the biggest in the world, and has inspired lots of other GopherCons around the globe; or if you prefer, on top of the flat Earth, for those believers.

Today we're joined by one of the creators of GopherCon, and the king of the lightning talks, or Thor's jester, as I like to call him - it's Erik St. Martin and Mark Bates. Hello, gentlemen!

**Mark Bates:** I'm trying to figure out who's who.

**Mat Ryer:** You're Mark. You should know who you are. That's one of the stipulations for being on the show.

**Mark Bates:** Hang on, let me check my script.

**Mat Ryer:** \[laughs\]

**Erik St. Martin:** So we're trying something a little fun here, too. I'm actually pushing this thing to Twitch. I don't know who's listening, but... We thought we'll get some viewers there, too. I'll try to read in chat as I see it, too.

**Mat Ryer:** Yeah, great. So this is multi-platform.

**Mark Bates:** Is it concurrent and scalable?

**Mat Ryer:** Probably, knowing us...

**Erik St. Martin:** I'm gonna drop the link in the Go Time chat too, so if people wanna see our mugs while we do this...

**Mark Bates:** Oh, whoa, whoa, whoa! Really?!

**Mat Ryer:** Well, it's Twitch, isn't it?

**Mark Bates:** Let me go put some clothes on. Hang on.

**Mat Ryer:** No, please. I've already sold seats for people to see you without them, Mark. \[laughter\]

**Mark Bates:** All they're gonna see is my bright, shining mug, with my nice Go Community T-shirt.

**Mat Ryer:** Yeah. You look good though, mate.

**Mark Bates:** Thank you. Well, you know, we should be talking about GopherCon, but I'll tell you why I look good; GopherCon this year has a really great -- because it's a virtual conference; we're gonna get into that. But one of the really great things they've decided to do is instead of giving their speakers some sort of GIF, they're actually working one-on-one with their speakers to look at their entire environment. Lighting, sound, camera, and everything, just to make their visual presentation and audio presentation so much better on the conference.

**Mat Ryer:** \[00:04:26.29\] Wow.

**Mark Bates:** And then they're shipping that gear to each speaker around the world, so that they can have just wonderful conditions. So these are my GopherCon lights that they've sent me. I've just set them up for this call, so I'm very excited. I think it's gonna be really fun, just based off of that alone. But anyway...

**Mat Ryer:** That's amazing.

**Mark Bates:** Yeah, it's a really great idea. It's a virtual conference, why not make everybody look and sound good? And they're literally doing it for every single person; they're not just sending one solution to everybody.

**Erik St. Martin:** I think that we make assumptions sometimes about people's knowledge about things... So just because you're speaking doesn't necessarily mean you're familiar with lighting, and all of these things. I've got key lights and everything here, and all of that stuff... So I think it's important to try to help our speakers adapt to new climate, too; try to help them learn a little bit about audio, and lighting, and cameras... So our producer has been kind of meeting with each one, making recommendations based on -- you know, if they already have a good mic, then let's talk about your lighting. So yeah, we've been making recommendations for a year, and sending gift cards to all of our speakers to be able to do that.

**Mat Ryer:** That's amazing.

**Mark Bates:** Really cool, isn't it?

**Mat Ryer:** Yeah. I mean, that speaks to the kind of attention to detail that you get with GopherCon. And when you're an attendee of a conference like GopherCon, everything kind of just feels effortless. And I suppose that's the point - it's meant to be a good show for people. But there's a tremendous amount of work that goes on behind the scenes, which we'll get to... But I'd love to first of all hear a little bit about the history of GopherCon, and where the idea came from originally, and what it was like that first time. Because it was back in 2014, wasn't it, Erik?

**Erik St. Martin:** May of 2013 is when Brian and I first came up with the idea.

**Mark Bates:** I still have my GopherCon pint glass from that conference. It's all faded, it no longer has any color, but it does say 2013.

**Mat Ryer:** I don't think so, mate. It was 2014 the first one.

**Mark Bates:** No. 2013, wasn't it? Erik just said 2013.

**Erik St. Martin:** No, so 2013 is when we started planning. 2014 was the very first event.

**Mat Ryer:** It's rubbed off his pint glass, and that's where he stored a lot of his information.

**Mark Bates:** \[unintelligible 00:06:40.25\]

**Erik St. Martin:** Yeah, so Brian and I worked together at a company, and 2011 was roughly when I started using Go. For a couple of years we had both been kind of going to tech conferences for other technologies we used, and kind of complaining about the fact that there wasn't one for Go... And then it was sometime April or May of 2013 where -- I think it was one of the members of Denver Gophers meetup group was talking about like "We really need a Go conference", and Brian and I are both like "We've been saying that..."

So that tweet went out, and they were basically like "You guys should do it." And Brian and I had a conversation in his office, and we were like "I mean, how hard could it be", right? \[laughter\] It turns out very hard... But yeah, we decided to put up some money for it, and sign some contracts that would not end well if people didn't show up...

It was really interesting, because we had no idea how many people would show. There hadn't been an in-person event yet for something like that... So if we got 200 or 300 people in a room, we were gonna be mind-blown.

**Mark Bates:** And the tickets were really cheap, if I remember. They were like $200-$250, weren't they?

**Erik St. Martin:** Yeah, that goes back to the "How hard could it be" thing... Like, "How expensive could it really be", right?

**Mark Bates:** Very...

**Erik St. Martin:** And then it turns out coffee is $75 a gallon...

**Mat Ryer:** Wow.

**Mark Bates:** I remember them being just dirt cheap, comparatively to conferences in general back then. It was a fun conference.

**Erik St. Martin:** \[00:08:13.14\] Yeah, it ended up being 700+ people, almost 750, the first year.

**Mark Bates:** Yeah. All in one big room. You remember - just one single room, one track conference...

**Erik St. Martin:** Yeah. I was really surprised with how fast it grew. And then year two was right around 1,200 people... And then it was right around 1,500...

**Mat Ryer:** We have the numbers here, actually, Erik... Because you're getting them wrong. \[laughter\] So in 2014 - 778. Then up to 1015, 1100... Yeah, so it is kind of growing. And this year would have been, according to Heather, this would have been over 2,000 in-person people.

**Mark Bates:** Yeah, it was gearing up to be huge this year in Florida. We had a lot of just amazing speakers, and content, and the facilities... It was gonna be definitely the largest. And most of the gophers were going to be located on-site together, in one hotel, too... Which would have been really fun. I mean, it would have been a super-spreader event, but boy, it would have been fun!

**Mat Ryer:** \[laughs\] So when we talk about the work that goes in, what were the big surprises that first year when you did the organizing of this, Erik?

**Erik St. Martin:** There's a lot of coordination with speakers that takes place, especially if you want to be involved in all of that. And sponsors is a lot of work too, not just in the trying to acquire sponsors, but trying to facilitate the perks, and things like that. There was a lot of work in there. There's things you don't really understand, like banquet event orders, and all of these things that go in, and kind of considering dietary restrictions, and sometimes you might have to facilitate using external kitchens, and things like that... So there's a lot of stuff there that I don't think we realized in the beginning.

I don't think we realized even contractual stuff sometimes too, about the fact that if you don't sell the hotel rooms that you blocked, you pay for them. So if we say 1,000 people are coming and we book rooms for 1,000 people, and 500 people show up - they take their rooms back, but we still pay for those 500.

**Mat Ryer:** Oh...

**Mark Bates:** Yeah, that's one of the biggest gotchas or overheads in conference planning. It's those rooms. That's where they get you.

**Erik St. Martin:** Yeah.

**Mark Bates:** Because it's such a big liability, just sitting there... You're hoping and relying on the community to fill that, so you don't lose tens of thousands of dollars on these rooms.

**Erik St. Martin:** Yeah, so all of us are terrified, because all of you like to book your hotel rooms at the last minute.

**Mark Bates:** \[laughs\]

**Erik St. Martin:** So we look at it like this - several hundred thousand dollars that we are going to owe up into the last minute. Thank you very much. \[laughter\]

**Mark Bates:** And while we're at it, get your CFPs earlier than the last day! \[laughs\]

**Mat Ryer:** Yeah. There are like a series of things that you hear conferences asking people to do, and you sort of never really think about it, but yeah - get your talks in early, don't just submit them on the last day. But of course, if you give people a deadline... That's what happens.

**Mark Bates:** And a lot of people don't think or consider what does registration mean for the conference organizers. When you get there, they often offer off-peak times to do registration sometimes; usually the day before, or whatever. Try and take advantage of those, because that not only makes it quicker for you to get in and out, but also it kind of flattens that curve of a rush of people at 8 AM coming in and trying to do it. And try to get there early. Try not to wait till five minutes before the keynote, rushing in... I mean, this huge wave of people assaulting the staff. It's hard to take care of that many people, especially 2,000 people. Imagine checking in 2,000 people. That's a lot.

**Mat Ryer:** \[00:12:24.25\] Yeah, we don't want the attendees to be DDOS-ing the conference. So spread it out. \[laughter\]

**Erik St. Martin:** Yeah, there's a lot of stuff like that. The CFP staff - we had about 300 proposals a year, and 290 of them are submitted in the last 24 hours. \[laughter\]

**Mark Bates:** That's typical of every single conference. And we've definitely talked about that and the benefits of submitting early a lot... But let's get back to the conference. So I have been fortunate to have been to every single GopherCon.

**Erik St. Martin:** Me too!

**Mark Bates:** I should hope so. \[laughter\] And since year two, I've been fortunate to be a part of GopherCon, which has been so wonderful. We wanna talk about the organization of GopherCon, and I think Erik and Brian did a great job the first year for two very inexperienced people. It was this wonderful conference, we were all very excited about it... I could believe how many Ruby people I knew as I was walking through the door. I literally pulled up in a cab, got out of the cab, and there was Bryan Liles just standing outside the hotel... It was just like "Wow, I know all these people!" It was just this really fun event. But starting year two, like I said, I got to be part of it. But year two is when Heather came in, right Erik?

**Erik St. Martin:** Yeah, so actually her team was involved year one. We used them for all of the off-site events - speaker dinner, after party, things like that. And then year two, they took over some of the logistical components of the venue, and all of that stuff. So it's been kind of like a progressive relationship, where each year they've taken on more and more for Brian and I, which has been insanely helpful... Because I think if we had to put in the amount of work that we did the first year or two, I don't think that we would still be doing it. Or at least also being engineers at the same time.

**Mark Bates:** And not losing your mind either... Because it's such a crazy job. We work with Heather and Convention Designs, and they do all of this work... And you watch Heather at a facility, and it's amazing. So you walk around and your Wi-Fi is working at GopherCon - that's not an easy task. Anybody who's ever organized a conference knows that the conference Wi-Fi is a desperate \[unintelligible 00:14:50.07\] She makes sure. She wants that to be good.

You talked about the food earlier? What was it last year - seven different options? Something like that. It was like seven or eight different food options. There's so much involved in all of this. And when you get there and it looks so gorgeous and slick and beautiful and just seamless - you've gotta know that there's people like Heather and all at Convention Designs, and Erik, and Brian, and Mat, and me, and all the CFP people...

**Erik St. Martin:** It takes a lot more people than you'd think it would...

**Mark Bates:** ...there's dozens of people involved in this conference every single year. The workshops -- you know, that's not including the workshop instructors or the speakers. That's just the people who are doing all the legwork in the background... And it's been different this year, I would say. Wouldn't you, Erik?

**Erik St. Martin:** \[00:15:50.08\] Yeah, it's definitely been a learning experience, and trying to adapt, and a lot of scrambling... Because in the beginning we had contractual obligations, and everything. We had planned to hold an in-person event... So kind of the first stage was figuring out how do we move past all of that, and postpone it; all of this is when Covid first started coming out, and we're kind of hanging out, seeing what's happening... You're getting conflicting things about what's gonna happen - this is March - so there's a lot of struggle there, and just legalities of, you know, contracts were in, and deposits we've made, and things like that... And then we managed to shift it. Obviously, that didn't happen, so then we're going through the same process again... And then it's like "Okay, how do we do it completely online?", which is a whole new world too, right? We all do online things, but trying to do an online event is a whole other challenge.

So it's been interesting in trying to figure out how to recreate what we have in-person... And I think GopherCon - my opinion is biased; I think GopherCon is a very special event, and how do we recreate that? I think the answer is probably that we can't. We can do the best we can, but it can't be this same exact thing, and we have to kind of rethink what an online version of it would look like, and not "How do we take GopherCon and put it online?"

**Mat Ryer:** Yeah. It's definitely gonna be different. And it's got a different name, hasn't it?

**Erik St. Martin:** It's just sort of like a hashtag, yeah.

**Mat Ryer:** Yeah, \#GoVirCon.

**Erik St. Martin:** It's something I said one time, and Heather loves it, so she uses the branding everywhere. \[laughter\]

**Mat Ryer:** How is it gonna be different then? Obviously, we're not all gonna be collocating and being in the same place... Which is a big part of conferences, isn't it? So we do lose something by taking this online.

**Erik St. Martin:** Yeah. And that's the difficulty. When we look at online content, it's never gonna be the same. When we go to an in-person event, all of us are essentially clocking out from work, from life, and we're moving somewhere and then we're kind of just fully immersed in it. But when we think about taking that and moving it to online context, it's not the same. We're all gonna be distracted. None of us is probably going to get -- well, I guess I wouldn't say I'd have the day off either; I'm gonna have a lot to do. But nobody is really gonna have the day off, right? They're gonna have it on a second monitor, they're gonna be kind of half in, half out... And that's just sort of the nature of this type of world.

So I think it's just kind of accepting that that's the way it is, that people won't be able to be 100% in... And trying to create as many opportunities as we can for interactions between people... So we're still exploring how to do all of that. There's obviously going to be all of the online content that's part of the ticketed attendance, that people will see... And of course, all that content will be released to YouTube later... But we're trying to create areas where people can interact and discuss the things that somebody was speaking about, or do kind of like voice channels, and Discord, or something, for like birds of a feather, where you might be able to meet new people... You just drop into a voice channel that's discussing Buffalo, or something. And then in addition to that...

**Mark Bates:** Why would we be discussing some city in New York? \[laughter\]

**Erik St. Martin:** Because they invented Buffalo wings.

**Mark Bates:** Oh, okay then. Never mind. Absolutely. Continue.

**Erik St. Martin:** Yeah, and so there's some other things we're doing, too... We're gonna take the lightning talks and push those to Twitch, so we're gonna open those up to basically everybody... And then I've been kind of chatting with a bunch of regular Twitch streamers that do Go stuff too, so we're gonna hopefully try to create a hallway track, where if you wanna just go hang out in the chat, and watch people code, and kind of pop in and pop out, and "What are you working on?" "Explain this bit of code for me", and things like that...

\[00:20:06.15\] They're not the same interactions, but they are new types of interactions that we're kind of learning. And I don't just mean we as GopherCon, but even we as people... I never realized how much I relied on interactions that I had while out at conferences, and stuff like that, until you're stuck at home for months in a room by yourself. This room looks really cool, but I'm sitting here by myself.

So some of these things - you look for some of those interactions, and sitting in chat and Slack... You know, it's interaction, but it's not quite the same. But in recent months I've actually found relief in going and hanging out in Twitch chats. Sitting there, watching somebody code, having a conversation with them while they're doing it, and stuff like that. It's not the same thing, but it kind of fills a hole that's there.

So how do we create new interactions, how do we create some interactions to get some of that back? Obviously, it's never gonna be 100%, right?

**Mat Ryer:** Yeah... It's funny, because a virtual conference is gonna be more like your day job, whereas, like you say, when you go to a conference, it's a completely different thing. But could that be advice to the attendees? Could it be that you recommend clocking off, and properly take the day off and be out of touch, like you might be if you were at a conference?

**Erik St. Martin:** I guess you could... But the likelihood that any of us are going to do that - lots of us have families, and things like that, so even being clocked in isn't being clocked in. We're all trying to find a new normal... So I think we have to accept that even if you got the day off for the conference, the likelihood that you're not gonna have to break away to help kids with school work, or meals, or things like that - it's going to be different, and we adapt. But yeah, I think the clocking out, and this just being my thing is probably not going to be...

**Mark Bates:** The way people consume the conference?

**Erik St. Martin:** Even just sitting in front of the computer is exhausting. Often we're energized by the people around us. Any type of event. You can be dead tired and go to a sporting event, or a concert, and then just find energy from the people around you. Me sitting here in this room in front of a computer for eight hours, watching people talk to me virtually - I'm not gonna get the same energy. It's going to get tiring. Eventually, I'm gonna walk away...

**Mark Bates:** We're speaking of ways for the community to interact... Erik, do you mind if I make a little bit of an announcement about what we're doing at GopherCon?

**Erik St. Martin:** Yeah, yeah.

**Mat Ryer:** Oh, breaking news...

**Mark Bates:** Breaking news, right here on GopherCon -- Gopher Time, or whatever the show is called...

**Mat Ryer:** Yeah, Gopher Time, yeah.

**Mark Bates:** Gopher Time.

**Mat Ryer:** Mark doesn't listen to the show. \[laughter\] It's not his cup of tea.

**Mark Bates:** I thought we were on the Rust Podcast for the first 15 minutes, to be honest... So who am I to judge? I thought I came in late to that podcast. So every year we do the GopherCon band, which is for me, one of my highlights; I just love it. We get all these fun people together, and we all get up on stage, we're playing music, and usually there's a big party... And again, talk about Heather going above and beyond last year in San Diego - we had the GopherCon band and the party on the deck of a battleship. It was a -- what do you call that?

**Erik St. Martin:** An aircraft carrier.

**Mark Bates:** An aircraft carrier, thank you. How amazing was that?! And it had the Gopher projected behind the band, on the ship, and stuff...

**Erik St. Martin:** We always try to find ways to one-up ourselves... And eventually, you're gonna run out, right? \[laughter\]

**Mark Bates:** \[00:24:00.19\] Yeah. We had some fun plans too for this year in Florida, but unfortunately, everything being the same... So we were talking about what we can do this year; we are doing, like we said, an hour of lightning talks each day, and like Erik said, we're gonna stream them live to everyone. So even if you don't have a conference ticket, you are welcome to join us for that hour and watch the live lightning talks, and Erik can talk a little bit about where you can find those, and how that's gonna work...

As for sign-up, what we're really hoping to do - because that's a big question people have over here, "How do I sign up for lightning talks?", we're gonna try to give it more of an in-person feeling. What we're gonna do -- one of the biggest problems we have with lightning talks is the technical logistics; getting laptops, and microphones, and all that stuff to work. And I can't tell you how many hours I've spent tap-dancing on stage, while I fix somebody's computer to work with the projector...

**Erik St. Martin:** I think Mark breaks them on purpose, just to--

**Mark Bates:** Just to get more stage time?

**Mat Ryer:** \[unintelligible 00:25:10.24\] "Oh, the laptop's not working again. What a surprise..." Oh, good. He's got his tap shoes with him.

**Mark Bates:** \[laughs\] Yeah, now I'm gonna have to learn how to tap.

**Mat Ryer:** Yeah, you should. If you can't already, you should.

**Mark Bates:** I think that's clearly the next evolution of Mark Bates, is the tap dancing. What we're gonna do is we're gonna try and do a kind of first-come/first-serve on lightning talks. You show up, you get into the room, and your AV hopefully should be connected... And we'll just build up a queue. So you've gotta get there early for each of the days, and we're gonna just go through them as fast as we can, just like regular lightning talks; we're cutting people off at seven minutes, just like we did before. We're gonna give warnings at one minute... All the rules that we normally have for our regular, in-person lightning talks, we're gonna do the same thing.

Like I said, we're trying to use that Go line-up on the side of the stage, by the stairs approach for the lightning talks themselves. So come with your laptop ready, open your slides, ready to go... And virtually stand in line by the side of the stage, and we'll call everybody up seven minutes at a time. It should be fun.

**Mat Ryer:** Yeah, so that's very different to the main content or the main talks that we see at a conference, and I'm always quite interested in this - how do you select the talks? Because the thing is the conferences, particularly GopherCon--

**Mark Bates:** We use a chicken system. We lay the numbers out on a field, and a chicken kind of goes along and just picks at them, and that's the speaker.

**Mat Ryer:** The speaker selector.

**Mark Bates:** Yeah.

**Erik St. Martin:** Yeah, so since the very beginning of GopherCon, Brian and I have always wanted to ensure that our speaker line-up was composed of -- we didn't wanna play favoritism and things like that, so we created a system where basically we do blind CFP. So there's anywhere between -- some years I think we've had eight people, I think some years we've had as many as close to 20 reviewers...

**Mat Ryer:** Is that where people have to submit the CFP in Braille?

**Erik St. Martin:** \[laughs\] Submit it in Braille?

**Mat Ryer:** Yeah. Blind process. No?

**Erik St. Martin:** No, no... More like statistical blinding of data...

**Mark Bates:** We're gonna get a lot of calls on that one, Mat...

**Mat Ryer:** \[laughs\] Don't have a phone.

**Erik St. Martin:** Basically, you submit the proposal, and it's wiped of any personal data. We don't know who you are, or anything about you... And there's a series of reviewers who will review it based on its technical merit... So if you are submitting a proposal, you have to remember that. Somebody - the only thing they know about you and your content and your knowledge on that subject is what you give us. If you give us three sentences that says "I'm going to talk about Buffalo", or whatever... I'm gonna just keep picking on Buffalo today.

**Mark Bates:** \[00:28:08.17\] Um, excuse me, that was an exact submission from this year. Almost verbatim. I don't appreciate your breaking my anonymity here.

**Erik St. Martin:** So you're gonna end up with a bunch of people who are like "Well, I don't know. I don't know whether they're gonna be able to write good content about this, I don't know how well they know the subject matter... And it's gonna get rated poorly." So I think it's important to make sure that somebody who knows nothing about you or anything would be able to read that and gauge how well you're going to be able to present this topic.

So after that, we take roughly the top third of submissions that are rated, and then we unblind it, and then we have a panel of people - the program chair, and Brian, and myself, and stuff like that. Then we'll sit down with that and try to formulate that into a diverse kind of line-up. And when I say diverse, I also mean subject matter. The top three talks could be all one thing; there could be five highly-rated gRPC talks, and you're like "Well, this isn't a gRPC conference, so..."

**Mark Bates:** It's quite often the case, too. It's usually hot technology of the day, and there's five or six all bunched together.

**Erik St. Martin:** Yeah. So we'll do stuff like that, and make sure that it's fair, in the sense that we don't have eight speakers all from the same company, or we have content that's targeted both towards beginners to the language, as well as more advanced content... So we try to finagle a program out of that.

**Mat Ryer:** Whatever the process is, it really works, because I always find that every talk I've been to, even on subjects where I don't have a particular interest or knowledge or anything, I find the talks to just always be of a really high quality. So there's a testament to that process, I would say.

**Erik St. Martin:** Yeah. And I think it's also important to do a couple of things... So the other thing we agreed upon to help with this is that all speaker costs would be paid for. I think that's important, because if companies are paying for you to travel, you only get people submitting who work for companies that will send them, or have the money to send themselves... So that reduces it. Plus, you also get a lot of companies -- this has gotten better in recent years, but it user to be really bad. Companies want ROI, so they send you to speak at a conference, and... Yeah, I think it opens it up to a broader community, I think it allows them to control their own messaging and not be beholden to ROI on the company that sent them, and all of those things.

**Mat Ryer:** Yeah.

**Mark Bates:** And from a personal note, I've attended quite a few conferences where they have provided no speaker support at all. Just none. No flights, no hotels, nothing. I went to one conference that made me pay to be part of the speaker dinner.

**Mat Ryer:** I think I went to that one as well.

**Mark Bates:** You did? You were also at that one...

**Mat Ryer:** It was really expensive, as well.

**Mark Bates:** It was 25 Euros, yes... Anyway, we're not gonna get into that. But GopherCon has always treated their speakers just wonderfully, and really have made sure that they don't need to worry about anything like that, like getting there, and being there, and any of the special circumstances that sometimes arise with speakers, too.

**Erik St. Martin:** And we try to leave stuff in their hotel room for them, little care packages and notes...

**Mark Bates:** Oh, there's always a nice little gift bag, and...

**Erik St. Martin:** I think it's important, especially for first-time speakers. You show up somewhere, you're very nervous, you don't know how things are gonna go... Sometimes you don't even know anybody. So I think it's kind of nice; you get back to your hotel room, you're tired...

**Mat Ryer:** Yeah.

**Mark Bates:** It's wonderful. And like I said, this year they're taking care of all the speakers by giving them equipment, to actually make their virtual presence even better. We talked about it right at the beginning of the show here.

**Erik St. Martin:** It's theirs to keep.

**Mark Bates:** \[00:32:10.06\] It's theirs to keep. They're not sending it to make them return it; they're sending them lights, they're sending them microphones, they're sending them whatever they need to make their 45 minutes, or 20 minutes, whatever amount of time they get, the best it can be. And that benefits both the speaker, and it benefits the conference, and it benefits the whole community. When you put the level of detail into the conference that they do, it really makes a difference. And anybody who's even been at GopherCon can definitely attest to that.

**Mat Ryer:** Well, aren't you running the risk of ruining other conferences there by making it too good?

**Mark Bates:** That's why I'm here.

**Mat Ryer:** Yeah, you balance it out.

**Mark Bates:** I balance it out, I bring it down a little bit.

**Erik St. Martin:** This is kind of a hot take, but aren't they kind of ruining themselves...? \[laughter\]

**Mark Bates:** Wow... I'm not engaging in that.

**Erik St. Martin:** And there are some conferences that I'm not very happy with the way they're run, but... Yeah.

**Break:** \[00:33:11.23\]

**Mat Ryer:** So I asked a question on Twitter earlier... Twitter is a website where you post little tiny messages, and people can reply, correcting you and/or giving you hate.

**Mark Bates:** Isn't that The Telegraph?

**Mat Ryer:** \[laughs\] I thought we weren't having any political commentary...

**Mark Bates:** Yeah, what a terrible British joke...

**Mat Ryer:** Oh, yeah... Well, I had a message from -- I think his name is Gram Orsinium, which does sound like a precious metal from the periodic table... And he was saying that he came from Python to Go, and the community there has initiatives like PyLadies, and Django Girls, and things that focus on diversity and making sure that opportunities are open to everyone... This is something that I remember hearing from that very first GopherCon. There was a big emphasis on making sure that people that otherwise wouldn't be represented at conferences did get represented. So where did that come from, Erik, and how effective has it been to have that sort of focus?

**Erik St. Martin:** I think that came from just basic human decency... We all need to do a better job at this, right? So I actually kind of would like to take this opportunity -- I know that we do a lot for diversity initiatives, and it's something that's very important to us... But I also don't wanna take this opportunity to pat ourselves on the back either, because I think as a conference, we still have a lot more that we can do, and I think even as a tech community we have even more that we still need to do. So I think that we need to keep iterating, we need to keep getting better about this, and I think we need to keep making it a priority.

**Mark Bates:** \[00:35:58.05\] Yeah. And if you haven't already, go and check out things like GoBridge.

**Erik St. Martin:** Yeah. And Women Who Go.

**Mark Bates:** If you're looking to make a difference -- well, they've merged. So yeah, check out both, but - they've merged. One thing - I am notorious for touting these T-shirts, but I'm gonna tout them again. If you could see me, you could see that I'm wearing a Go community T-shirt. An Ashley Simpson original. If you go to womenwhogo.threadless.com, you can buy really nice, high-quality T-shirts like this, that have all these amazing Ashley McNamara designs all over them. They're $20, $25 and the money all goes to Women Who Go. It's a really fun way to add to your wardrobe...

I got comments on my T-shirts all the time. People just all the time go "I love your shirt. Where did you get it?" And of course, they have no idea what the Go community is, but Ashely did such an amazing job with logos, and the Gopher... So go and get some. It's a great way to stock up, add a little bit to your wardrobe. I wear them at conferences all the time; your not gonna -- not only you're not gonna upset anybody, but hopefully you're going to actually encourage people to get more of these shirts, and help these great initiatives. That stuff helps, but comes back and helps all these people go to GopherCon, and all sorts of great stuff.

**Erik St. Martin:** Did you see the eSports jerseys?

**Mark Bates:** Yes...

**Mat Ryer:** They look very cool, actually.

**Mark Bates:** I'm not sure they suit me, but they look very cool.

**Erik St. Martin:** I'm gonna be wearing one every day. \[laughter\]

**Mat Ryer:** Yeah, I do like your T-shirt actually, Mark... Just for the viewers, we don't know what's on the bottom. But you know, that focus of GopherCon having that diversity focus in the beginning... Because GopherCon has a big influence on the Go community... And I think it can take some credit for the fact that we do have a lot of diversity in the Go community. Of course, as we say, there's more that we can do there, but I hear a lot of people telling me that particularly the Go community just feels different; it feels better, because it makes that effort. And I do think GopherCon gets to take a bit of that credit. It was very early, and it was mentioned a lot in that first conference. I feel like it planted a lot of seeds there, that are flourishing now into beautiful trees of all different types...

**Mark Bates:** Well, that analogy broke down really hard, didn't it?

**Mat Ryer:** It did, didn't it? Yeah...

**Mark Bates:** Yeah, pretty hard.

**Mat Ryer:** The editors will put a better analogy in for me. \[laughter\] Yeah, they're good like that.

**Erik St. Martin:** I think it's important to do this stuff... And yeah, we continue to iterate. It's important. Some of this comes from, I guess, the Ruby community, too. Mark, you know this, too - everybody used to say the Ruby community is nice because Matz is nice... So I think it's important that if you put people first, you put the attendees first, you put the speakers first, and you make sure that they are all taken care of, I think they in turn treat other people the same way, and you kind of kick-start this whole process of everybody learning how we interact with each other.

If the people at the top, whether that be the people on the language team itself, the core team, whether that be the people who run conferences - if they are hostile, or they just don't care, I think that triggers the way we treat each other.

**Mat Ryer:** Yeah. Well, thank you for all that, because I think it does make a big difference. I hear people tell me that, too. Another response that we had on Twitter is from Paul Bert Pizza Emoji. Paul mentions that you're doing a lot of Rust lately, Erik... So although this is Go Time, I'd love to hear your views on Rust and what you've been doing with it, and also how it's better than Go in your eyes, and where it's not...

**Mark Bates:** And does it tie into GopherCon in any way?

**Erik St. Martin:** Yes, to all of those questions.

**Mat Ryer:** \[00:40:14.03\] That last question though, it's -- so obviously he knows something... Do you know what I mean? It's like when a really bad TV interviewer says "So, did anything happen to you on the way to the studio?" \[laughter\]

**Erik St. Martin:** You all can -- because we're on a Zoom call, and anybody who's watching this on Twitch can see behind me; I've got like an Electronics desk back here... So Rust is something I've been wanting to learn, to do some embedded stuff on here... But we've had some projects at work kick up, that use Rust. One of those is a Kubernetes node agent that basically pretends to be a node in the cluster, and orchestrates Web Assembly to host, and stuff like that.

**Mat Ryer:** Sorry, you've broken my brain.

**Mark Bates:** He lost me at Web Assembly...

**Erik St. Martin:** Web Assembly can have some really, really unique...

**Mat Ryer:** That was at the end, Mark...

**Mark Bates:** Then you lost me at the beginning...

**Erik St. Martin:** So if we think about a container, we have to secure it after the fact... Whereas Web Assembly - we kind of get to rethink that, where it automatically has no permissions, and you have to allow every call, so we can kind of have like this actor thing. And each of those abilities can be cryptographically signed. Mat, you could have permissions to give applications this role, to run this thing. And Mark, you could have this... So each person would have to sign that for that to happen.

Rust has really good Web Assembly support, so that's why we were doing that. I can't really take credit for that project; we jumped in and helped with a couple of things, built a really funny demo where we basically recreated the scene from The Martian, where Matt Damon is stuck on Mars and he can't communicate, and I built this robotic arm that would point the flags, and stuff like that. It was really funny... So that's probably what he's referring to.

**Mat Ryer:** You didn't need to plant potatoes in poo for that, Erik, but you did that anyway.

**Erik St. Martin:** We did not. We skipped that, yeah.

**Mat Ryer:** Alright, that's good.

**Mark Bates:** I do that because it's the best thing to do with your leftover -- well, when you've got leftover potatoes and poo, what are you supposed to do with them?

**Erik St. Martin:** So that's probably what he's referring to. I don't know whether any of the other stuff I've been doing - unless you follow me on Twitch - has been public. I'm really bad about advertising myself, so I don't really post on Twitter or something like that when I do stuff on Twitch. But that's what I've been doing for the last month, and it's to solve two problems. One is Microsoft has like a Learn TV, which is basically just like linear television with scheduled content; a mixture between videos of a certain theme for the week, and live broadcasts. That's implemented in this really interesting way; it was put together as a prototype very quickly, but we're trying to productionalize that and do it differently, and trying to solve for doing online events.

There's a lot of great -- in all of this I've found that 1) people like to charge a crap ton of money for online broadcast things... And it blows $20,000, $50,000 and you're like "This is a pretty UI over NGINX, with an RTMP module. I don't understand..." \[laughter\]

It was actually pretty funny... We were talking with individual companies about what we were gonna use for our platform, and one of them was talking about something - I think it was Heather, or our production person, was like "You know, we're just evaluating... The owners of this business will probably just write their own", and the guy is just like "Wait, what?" \[laughter\]

**Mark Bates:** So fast-forward 30 days later and Erik is building his own.

**Erik St. Martin:** \[00:43:48.15\] Yeah, so there's a lot of places where you can take content, and this gets into a longer discussion about how broadcast works over the internet... But essentially, we use one protocol that is very low latency to get our stream somewhere, and then on the other side that's converted/transmuxed and transcoded into different resolutions, that are delivered over HTTP in a CDN, and you have kind of a smart player that fetches that. if you're interested in how that stuff works, ping me on Twitter, or find me on Twitch, because that's what we're streaming.

So that part is solved. How do I take my content and get lots of viewers to view it all over the world? That's a solved problem. But at the broadcast point you're stuck. So I can send there, but if I go offline to let Mark take over the channel, my stream goes offline. There's a lot of weird things like that. So our options for how do I switch between people and their streams tend to be like use Zoom, or Skype, and then route through somebody's house... And it's just awkward. I don't like that, and I have sort of a knack for taking on projects I'm totally unqualified to build, so I decided to tackle that challenge, to solve it both for GopherCon, like how do we switch between, you know, going to the MC, going to the speaker, and all of that stuff, while maintaining a linear feed.

And there's also things I wanna do, like measure bit rate. And if you drop out, then fall back to a pre-recorded version, roughly in the same time. There's a lot of cool stuff we can do. So that's sort of what I'm tackling... But there's two main libraries that we use for doing that type of stuff - Libav, which comes from FFmpeg, and GStreamer. Both are written in C. I don't want to write C. All of us have also seen enough talks about cgo for me to know that I probably don't wanna use cgo for this.

**Mark Bates:** Cgo is not real Go...

**Erik St. Martin:** And the bindings our out of date, and stuff... So it turned out that GStreamer, the library I chose, has really good Rust bindings written by core developers on the GStreamer team; they're actually writing some of the new elements in it in Rust... It seemed like the perfect opportunity for that. So yeah, that's why I'm using that.

But it's been interesting, because there's some things I really love about Rust, too. I don't love writing HTTP APIs in Rust. It's way more time consuming, and I will totally write them in Go. But it has some interesting language features that I actually really, really like. I like the borrow checker...

**Mat Ryer:** What is that?

**Erik St. Martin:** So the borrow checker basically tracks when memory is used. So if you pass it into a function, you either let the function borrow it for the time that the function executes, or you're transferring ownership. So only one piece of code can basically own any given piece of data at any moment in time.

**Mat Ryer:** So is that about making it thread-safe then?

**Erik St. Martin:** Yeah, and so all of it is basically checked at compile-time for you. You can't write race conditions, because it won't let you give access to this memory to two places without wrapping it in an automatic reference counted type, and things like that.

But looking at what they do for error handling, I really like that. Obviously, generics are a thing; people have been talking about it. I forgot how much I missed generics... But they have enum types where each variant of it can actually hold its own data. So one variant can just be its thing, one could hold a string, one could hold a struct, one could hold a tuple... And so when you match on these things, you can get the data contained in that variant. That's important, because the way they handle things - you can't have null. There's actually an option -- it's a generic type, but there's an option enum type where there's a variant that says none, and there's some that holds whatever your type is. So when you get the type back, you check to see "Hey, is this none or is it sum?" and get the thing out.

\[00:47:53.29\] And then for error handling, there's one called result, and it's okay or error. Okay might actually contain some generic type, whatever you stored in there, and then error would return your error. It's a really, really interesting way you can do that. And then most people will end up using enums for the error variants that you could match on those, too. But yeah, so there's a lot of cool stuff in Rust that I actually really, really like.

**Mat Ryer:** Are there other ideas that you think Go should borrow? I know that Rust has borrowed some ideas from Go, hasn't it?

**Erik St. Martin:** Yeah, so they have channels, and things like that. They're implemented in an interesting way; I'm trying to remember exactly... I think it uses a lot of macro stuff, but I'm obviously not a Rust expert. But yeah, so they exist there; they're just not implemented into the language. But a lot of this is because Rust's whole design is based on zero cost abstractions. So anything that you use should be just as efficient as if you handwrote code, and they have the requirement where you should be able to run this without a runtime. So it just creates some unique challenges... But that's where you get into kind of like why Rust does things like monomorphism, which is basically you use generic types, and the compiler generates the code.

**Mat Ryer:** I see. Oh, cool. Well, if you blog about that or anything, I would be very interested, Erik.

**Break:** \[00:49:24.22\]

**Mat Ryer:** We were already kind of talking about Rust, we were already at risk of treading upon our next regular section, because it's time for... Unpopular Opinions!

**Erik St. Martin:** Unpopular Opinions. Okay.

**Jingle:** \[00:51:27.02\]

**Mat Ryer:** So do we have any unpopular opinions?

**Erik St. Martin:** I probably have a lot of them... Which ones are appropriate to say on...

**Mark Bates:** Yeah, I'm in the exact same boat.

**Erik St. Martin:** ...on a medium that's going to exist forever? Yeah, I've got a few of them... Tech-wise, full-stack developers are a myth. I think that you can find people who can do all of this stuff, but -- I used to be a senior web developer, and a junior backend developer. Now I'm a principal backend developer and a junior web developer. It's really hard to stay up on all of these topics; so as you evolve in one, you're naturally gonna fall off in others. So I think it's important to -- you may be able to operate on all levels of a stack, but you're not the same level at all levels of the stack; and if you are, you're an amazing human being, and you deserve all of the money.

**Mark Bates:** \[00:52:41.20\] Thank you.

**Mat Ryer:** Yeah, thanks. \[laughter\]

**Mark Bates:** Sorry, I tuned in at the end, and I just assumed you were discussing me.

**Mat Ryer:** Yeah, well - that is an interesting one. It's that thing of specializing, the specializing point, which I think is a good point. Okay... Mark, have you got one?

**Mark Bates:** I do, actually...

**Mat Ryer:** Do you?

**Mark Bates:** I do... I think as developers, we tend to prioritize build over buy.

**Mat Ryer:** Oh, really?

**Mark Bates:** And we need to do a lot less of that. It's so easy sometimes for us to get caught in fixing a problem, or coding it ourselves... And that's great, but sometimes it's also just like "Let's just buy." I realize that may seem like I was just hitting Erik, but that was not at all what I was thinking. I was actually thinking of something completely different. But yeah, for the most cases we do tend to do that, and I think we need to try to resist that urge a little bit as a developer. Not everything needs to be coded by hand. It's not artisanal code, it's not farm-to-table Wi-Fi... So get out of the business of writing a new text editor. \[laughs\] We don't need one. Just write some code.

**Erik St. Martin:** Is that another shot at Microsoft? \[laughter\]

**Mark Bates:** Well, these are Unpopular Opinions, Erik... While we're at it, let's talk about your hair. I don't like your haircut, grow it out!

**Erik St. Martin:** I didn't think they need to be unpopular with me. \[laughter\]

**Mark Bates:** No, that's it... Recently, in the last few weeks, I've seen a lot of different things, and I've been like "Oh man, we really just need to get better at it." Mostly from Reddit. \[laughs\] I'll leave it there. How's that? I also don't care for bacon.

**Mat Ryer:** Right. When you're babysitting bacon, you're negligent. Is that what you mean?

**Mark Bates:** I mean, you've met my kids. Clearly, I'm negligent. \[laughter\]

**Erik St. Martin:** Shots fired at yourself...

**Mat Ryer:** It's true. They're like they've been in Jumanji.

**Mark Bates:** They do. At some point I'm gonna have to teach them how to speak... But I'll tell you, you should see them pick the nits out of each other's hair. It's quite fascinating.

**Mat Ryer:** It's beautiful.

**Mark Bates:** It really is. It's something to behold... Yeah, I just don't see what the fuss is with bacon; it's okay.

**Erik St. Martin:** I'm pretty sure that's unamerican.

**Mat Ryer:** Yeah, it might be treason.

**Mark Bates:** It's alright... I'll take sausage over bacon any day.

**Mat Ryer:** Okay, that's the marketing --

**Mark Bates:** That's a real unpopular opinion, how's that.

**Mat Ryer:** Well, we actually test these now... So the @GoTimeFM Twitter will be putting out a poll on these to find out once and for all if they are indeed unpopular. And if they're not unpopular, then the punishment is you have to come back on and do another episode of Go Time with us.

**Erik St. Martin:** And apologize for the unpopular opinion...

**Mark Bates:** That's why I'm on all the time...

**Mat Ryer:** Yes, yes... Okay, well this has been great. Can people still get tickets for GopherCon?

**Erik St. Martin:** Yup, they are still available on GopherCon.com. It's $100 for access to everything. Again, videos are gonna be released shortly after the conference, so really all you're doing there is helping us seed deposits for the next in-person conference, and everything like that.

**Mark Bates:** \[00:56:07.05\] And you get access to tons of live content and exclusive content around the conference which you don't get on YouTube.

**Mat Ryer:** Yes. And we're all gonna be hanging out... Go Time are doing some special shows, some special episodes...

**Mark Bates:** Right, I'm excited to do this.

**Erik St. Martin:** Yeah, we didn't talk about that, yeah.

**Mark Bates:** Should we mention those really quickly?

**Mat Ryer:** You can...

**Mark Bates:** Well, why don't you talk about them? You're the Go Time person, Matthew...

**Mat Ryer:** Oh. Well, don't give me work...

**Mark Bates:** Well, sorry. We can't just sit here and be content-generating monkeys for you all episode. You have to put a little effort in...

**Mat Ryer:** You haven't generated a single monkey.

**Mark Bates:** That is true.

**Mat Ryer:** At the lunchtime sessions we're gonna be having live Go Time recordings, and then on the 13th we're gonna do a special game show, which I think is gonna be a lot of fun. It's nice, because you know, the talks are gonna be quite serious, and deep, and we wanna try and bring some levity in the lunchtime sessions.

**Mark Bates:** So who's gonna be on the game show? Come on, I wanna know. Who are the contestants?

**Mat Ryer:** We'll have to wait and find out. It's a surprise.

**Mark Bates:** Do they get a prize?

**Mat Ryer:** We'll see. You'll have to wait and find out.

**Mark Bates:** A new car? A years' worth of Turtle wax, something like that?

**Mat Ryer:** Yeah, they sound like great gifts.

**Mark Bates:** I'll trade it in for door number one.

**Mat Ryer:** \[laughs\] Behind door number one, "Go Programming Blueprint", by Mat Ryer. Congratulations, Mark! I know you've already bought six of them...

**Mark Bates:** Arrrgh... Well, I guess if there's another toilet paper crisis in the winter, I'll be all set.

**Mat Ryer:** \[laughs\] You can learn about Go as you go.

**Mark Bates:** As I go. Go on the go! It's a new series of Mat Ryer-based toilet paper, ladies and gentlemen. I'm gonna start selling it. Go on the go. It's got a picture of Mat and a little piece of Go code next to it.

**Erik St. Martin:** Little programming idioms on each...

**Mark Bates:** Exactly. \[laughter\] Go on the go, by Mat Ryer. We might have broken Mat, by the way, on that one.

**Erik St. Martin:** Yeah, so we're gonna be doing AMAs too, and all of that stuff will actually be open to the general public.

**Mat Ryer:** Okay, great. Yeah, so even if you don't have a ticket... There's plenty, but we won't be able to get tickets.

**Erik St. Martin:** Turn it into a Week of Go. Let's all get together, celebrate as best as we can at safe distances... But let's just turn it into a whole week. Not just for the people who are attending, but for the broader Go community. Because I know everybody looks forward to the hype around the conference, and everything...

**Mark Bates:** Well, there's usually lots of great announcements, and releases, and all sorts of great stuff at GopherCon, so it's always a fun time to be a part of that live, to hear the Go team do their keynotes, and stuff like that live, versus waiting a month, or just hearing about it on Twitter. If you're really curious as to what's gonna happen... You watched the Apple event today; why not watch Go Time? Come on.

**Mat Ryer:** But the Apple event is pre-recorded, from what I could tell... And this is not. GopherCon is live.

**Erik St. Martin:** The talks are pre-recorded. They kind of have to be, right?

**Mark Bates:** Well, they don't have to be...

**Erik St. Martin:** Some people can do live. However, not everybody is in places with stable bandwidth connections... There's some challenges.

**Mat Ryer:** GopherCon, when it's an in-person conference - is that live, or are they pre-records as well? The people on stage. Because they look real. \[laughter\]

**Mark Bates:** They're holograms.

**Erik St. Martin:** Yeah, it's the hologram. It's revolutionary new television. We record everybody in holographic.

**Mat Ryer:** That's brilliant.

**Mark Bates:** Dave Cheney hasn't been there since year two. It's just the hologram walking around. It's all AI-generated Dave Cheney content.

**Mat Ryer:** Yeah. On the blockcheney.

**Mark Bates:** That would be the Chave Deney, by the way, I think.

**Mat Ryer:** The Chave Deney. \[laughter\]

**Erik St. Martin:** Yeah, so all of these things are challenges we have to work through... If we rely on people having dependable internet and all of these things, then we further reduce the number of people that we can have, and the opinions that can be shared, and things like that. Yeah, it's easier to do that. And some people actually prefer it that way. They can do multiple takes, and things like that.

**Mat Ryer:** Yeah, the quality could be--

**Erik St. Martin:** \[01:00:13.04\] Some of us love doing it live.

**Mark Bates:** I love doing it live. I do not like pre-recording it. I want that energy, that feeling that at least there are hopefully somebody -- people are sitting at home, listening or watching, even if it's just one or two people, but I like that energy of knowing that there's that. But others don't, I guess. To each their own.

**Mat Ryer:** But the lightning talks are gonna be live.

**Mark Bates:** The lightning talks are gonna be 100% live, yeah. Streamed to everybody at the time. So yeah, that will be really fun.

**Mat Ryer:** Yeah, so anything could happen. Because you want a bit of danger, don't you?

**Mark Bates:** Exactly, yeah. That's why you like the live setting, it's that danger. You never know what's gonna happen.

**Mat Ryer:** But the talks are gonna be of the highest quality then for sure. There's not gonna be any live demos that fail, or anything like that...

**Mark Bates:** No demo gods gone bad?

**Erik St. Martin:** This is true. How are we gonna get our fix of broken demos? \[laughter\] I guess we can hope that somebody just leaves it in, right?

**Mat Ryer:** Yeah... So if you're going to GopherCon, try and take some time off, try and dedicate yourself to it... I don't know if you're allowed to tie your kids up in your country where you're listening to this from. If you are, maybe do that. Give yourself a break.

**Erik St. Martin:** Tie your kids up... \[laughs\]

**Mark Bates:** I might need to check into the laws around Massachusetts.

**Mat Ryer:** Yeah, check with your local--

**Mark Bates:** Is the trunk of the car okay?

**Erik St. Martin:** Mark, are we now accessories? \[laughter\]

**Mark Bates:** Maybe.

**Erik St. Martin:** Are there any lawyers listening right now? Are we accessories?

**Mark Bates:** "No, my kids are in the trunk of the car, they're not tied up. C'mon..."

**Mat Ryer:** \[laughs\] There you go. You can always guarantee Mark will say something worse, and then lets me off the hook. That's my defense in court.

**Mark Bates:** That's your defense? "He's worse"?

**Mat Ryer:** Yeah, someone was way worse.

**Mark Bates:** \[laughs\] Well, okay. Thank you.

**Mat Ryer:** Thank you. And thanks so much for joining us today. Unfortunately, that's all the time we have. I could just hang out all day here, but you know, it's not appropriate. But thank you so much for joining us, and Erik, thanks for all your work. Mark, I can't wait to watch those live lightning talks.

Thank you very much, and we'll see you next time.
