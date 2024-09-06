**Angelica Hill:** Hello and welcome to Go Time. In this episode, I'm joined by some of our lovely Go community leaders, who are affiliated with a number of various meetups, community-based groups around the world. We have guests from Guadalajara, St. Louis, New York, and GoBridge Atlanta. And together, we're all going to explore the ins and outs of organizing meetups, the benefits of attending, how much fun you can have as a meetup organizer yourself, as well as diving in a little bit on the Go developer network, what is that, what do they do, and then the current state of the Go meetup community, kind of taking a pulse on, as we look at the global meetup and Go community vibe, what is it? Are we seeing excitement? Are we seeing people kind of post-COVID staying home more? So we'll dig in a little bit there. And then hopefully, all you lovely listeners will come out of this understanding some tips and tricks on how to either organize, or make the most of meetups going forward.

Right now, I'm going to introduce some of our lovely guests. So the first lovely guest is Hannah. Hi, Hannah.

**Hannah W:** Hi.

**Angelica Hill:** Morning.

**Hannah W:** Good morning.

**Angelica Hill:** Thank you for being on. So Hannah is a software engineer who enjoys conquering complexity in programming, and is a lead organizer of GoBridge Atlanta. She also likes to say publicly that "Mateus, you were right. I did like Go when I tried it." Called out, public statement. Well, I'm really excited to have you on the show.

**Hannah W:** \[06:11\] Thank you so much.

**Angelica Hill:** Next up, we have Jennifer Johnson, pronouns she/her. Jennifer is a senior software engineer, manager at Storj, an open source decentralized cloud object storage service written in Go, of course. She was one of the leads organizing for the Atlanta chapter of Women Who Go from 2018 to 2020, and now is collaborating to grow GoBridge Atlanta along with Hannah. And a fun fact is that Jennifer has three rescue pups. That's so cute. Hi, Jennifer.

**Jennifer Johnson:** Hi, thanks so much for having me.

**Angelica Hill:** What breeds are your three rescue pups?

**Jennifer Johnson:** They're all mixes, but Pitbull, Lab, Husky... All the things.

**Angelica Hill:** Gorgeous. We're going to have to share some pictures after this. They sound very cute.

**Jennifer Johnson:** Of course.

**Angelica Hill:** Well, thank you for being here. Next up, we have Guillermo Galvan, who is a passionate technologist and open source enthusiast, skilled at solving problems and converting data into products. And he is one of the meetup leads for Golang Guadalajara in Mexico. Guillermo, hello. How are you?

**Guillermo Galván:** Hi, thank you for the introduction, Angelica. Hi, nice to meet you all.

**Angelica Hill:** And thank you so, so much for jumping on with the time difference. We truly have a global representation here today. Now we have Matthew, who is from New Jersey. He's currently a staff site reliability engineer at Cockroach Labs, and he organizes NJ Code and Coffee and Platform Engineering New York meetups, as well as working closely with GoBridge and the GoBridge team on meetups and mentoring. And fun fact, which I was a little bit surprised to hear - he has willingly been pepper-sprayed. I'm not sure if that's a fun fact... Hey, Matthew. How are you, and why do you like being pepper-sprayed?

**Matthew Sanabria:** I couldn't say I like it, but -- thank you for having me on the show, by the way. I couldn't say I like it, but I did want to see how it felt, so I willingly asked my friends to do it.

**Angelica Hill:** And what was the conclusion? As someone who doesn't want to willingly be pepper sprayed, how did it feel?

**Matthew Sanabria:** You have like five to 10 seconds before it kicks in, and then it just burns. And the only thing that feels good is like air; just air. Not any wetness, or anything.

**Jennifer Johnson:** Oh, interesting.

**Angelica Hill:** Noted. I think after that, I will not want to be pepper-sprayed... Next up, we have Paul Balogh, who currently lives in St. Louis, but is - I'm told - relocating soon to North Carolina. So any of you lovely North Carolina gophers, you have a new community member coming over and joining you all. And he helps run the following meetups: St. Louis Go Meetup, Cloud Native Community Group and MO Reliability, he is a CNCF ambassador, software architect, and a developer advocate. He works with open source community around kind of cloud technologies, like K6, Kubernetes, and Kafka among some others, and you may have seen him on his previous talks on YouTube, hosting the Grafana office hours, or his channel for the St. Louis developer communities around Go, Kubernetes, and cloud native technologies. So not a stranger to being on the internet, Paul. Good morning.

**Paul Balogh:** Good morning, y'all. I'm getting ready for the move to North Carolina. So yeah, I'm going to try to do that. But yeah, let's see what happens when you let people write their own bios. You probably need a drink after all that. I'm sorry, you're probably parched, but...

**Angelica Hill:** You've gotta do it. You've gotta intro people how they want to be introduced.

**Paul Balogh:** Right? Right?

**Angelica Hill:** And for those of you who can't tune in live and see the video for this podcast, Paul has the most illustrious beard and mustache you'll ever see in your life. And if you ever get the pleasure of meeting Paul in person, has some really fun tattoos. So I highly recommend.

**Paul Balogh:** Yes...

**Angelica Hill:** \[10:05\] Well, thank you so much for joining us.

**Paul Balogh:** Thanks for having me.

**Angelica Hill:** Last but certainly not least, we have Wilken Rivera, who is based in South Florida, and is a GDN program lead. He's an open source software engineer by trade, with a passion for Go, mentoring and community building. When he's not coding, he leads the GDN, so Go Developer Network program as a contributing member to GoBridge, working to continue the mission of increasing diversity within the Go community, and empowering the next generation of Go developers.

And I know that that last sentence sounds like it's a lot, and I know a lot of people say they're an advocate for diversity, they're an advocate for inclusion, but I can first-hand experience put my hand on heart and say this is truly true for Wilken. I've known Wilken for a number of years, and he is one of the core people who brought me into the Go community. You can tell him off and get angry at him later for that, but... He has brought a lot of other wonderful gophers into the community, too. So truly, truly a joy to have you on the show, Wilken.

**Wilken Rivera:** Well, Angelica, thank you for having me on. Always a pleasure working with you, going back from New York, and to doing these video conferences... So happy to be here and break bread with everyone on the stream. I'm blessed to have met every person here individually and chatted with them, and had a beer or some food... So thank you.

**Angelica Hill:** No, we truly have an amazing panel today. I'm so excited to dive in. So we'll start with the kind of very basics. I'd love to hear a little bit about, kind of from each of you, maybe one or two words, a sentence on how you would describe the Go community, and kind of what makes it so special. I'll kind of go around. Maybe Hannah, we'll start with you.

**Hannah W:** Sure. I like how consistent it is about working with people. Good guidelines... You don't have to argue about the little details, because Go already has them built in.

**Angelica Hill:** Wilken?

**Wilken Rivera:** Yeah, I want to say inclusive. I have yet to go to any event, at any conference, meetup, just outing for Go that I haven't met people who -- everyone I meet is just open to share what they've worked on, or their lessons, or their troubles... So I feel it's just very inclusive. I think that's the one word that comes to mind when I think about the Go community. Everyone is welcomed.

**Angelica Hill:** Agreed. Paul?

**Paul Balogh:** Yeah, I mean, I would expand on that about the welcoming. I mean, I go to like the GopherCon events, and just... I don't know, everyone is just very cool, and I enjoy speaking with them... And you can tell by this gray beard that I'm a little up there in the age, so all these young people - it makes me feel younger. So I don't know. It might be a midlife crisis.

**Angelica Hill:** No, I don't think so.

**Paul Balogh:** I don't know...

**Wilken Rivera:** I don't know if you're there yet, man. You've got a few more years.

**Paul Balogh:** I have this going on, I have... Yeah.

**Angelica Hill:** Jennifer. How about you?

**Jennifer Johnson:** Yeah, I would say, like, encouraging, especially like to beginners. My first GopherCon was 2018, I didn't know any Go, and felt very welcome... So still in the community today... And also like nonjudgmental.

**Angelica Hill:** 100%. I think beginner-friendly. So, so true. I, same as you, came into Go in 2018, having never written a line of Go in my life, and we're still here. Matthew, how about you?

**Matthew Sanabria:** \[13:50\] Yeah, I would say the focus on the people is what really gets me. Because Go is not a particularly exciting language, technically speaking. Not in a bad way. It's not like breaking changes all the time, and shipping features... It has a good 1.x compatibility promise... So the meetups and the community really focus around the people and how they're using Go in these different ways, and I like that a lot. Because other communities focus too much, I think, on the technical side, and not enough about how people are using the technical side.

**Angelica Hill:** Guillermo, closing us out.

**Guillermo Galván:** Sure, of course. Yes, I agree with that. It's very welcoming, and also inclusive. One thing that I noticed is that everyone is open to share their knowledge. Everyone is just helping each other, regardless of the experience level. And also, the spirit of collaboration is something that really sets the Go community apart.

**Angelica Hill:** For sure. And talking of collaboration, now we're going to kind of talk a little bit about what we're here to talk about, meetups. And I would love actually to stay with you, Guillermo, for this one... And then others, please jump in. We'd love to hear a little bit about how you got into kind of community meetup organizing, and kind of bringing people together in this way.

**Guillermo Galván:** Okay. Yeah. Well, in reality, it all started with a casual chat with my friends in a bar. We were having a few drinks and chatting when we realized that there was missing a community for Go in Guadalajara. So we started simple. We started with an announcement on internet. We got support from a local company, that offers us their office space. And yes, that's how it all began. We got positive feedback from the attendance, and also from that, we started doing some workshops and also more talks. I think it was a good beginning at that time.

**Angelica Hill:** No, I think that's amazing. I think the amount of amazing ideas that have happened over kind of a coffee, a random chat, a beer... I think that's where truly great ideas are born.

**Guillermo Galván:** Yes.

**Angelica Hill:** So, Paul, how did you get into this space? I mean, you organized quite a few, so...

**Paul Balogh:** Yeah. Well, mine started for completely selfish reasons. I started because I wanted to go and start trying to get people to come and work for me. So that was the thing. I was being the one like "Hey, you seem pretty smart. Have you got a job? Do you want to work for some place cool?" Because yeah, I was really looking for people to work for me on my team, and we were doing things around Kubernetes and all that cool stuff, which - it's written in some language that... Is Go...? \[laughter\] But yeah, so mine was for purely for selfish reasons. And the organizer, he was stepping down. He had started it, was working it for a couple of years, and I kind of picked up. And they had one event before COVID. Wa-wa-waa... \[laughs\]

**Angelica Hill:** I'd love to hear - yeah, Matt, a little bit from you.

**Matthew Sanabria:** No, sorry, I was gonna say, being an organizer is interesting, because what Guillermo said really resonates with me. I opened my mouth, and now I organize meetups. \[laughter\] That's literally how it happened. I was at a meetup and I was like "This would be nice, if I can not have to go to New York and have one in New Jersey." "Oh, do you want to do a New Jersey meetup?" "Oh, sure. Yeah, I think so..." And then a couple of my friends got together, "We like platform engineering. Oh, we should do a meetup." "Oh, we're doing this." "Okay..." And that's kind of how I stumbled into both of those.

**Angelica Hill:** I mean, the way in which you're framing, both Matt, Guillermo and Paul too, the way in which you're speaking about the process of going from "We should do a meetup" to it actually being a thing seems pretty - well, as you said, Matt, it kind of just happened.

**Matthew Sanabria:** Yeah, you just do it.

**Angelica Hill:** \[17:53\] I would love to hear a little bit about the ease of organizing meetups, and that process. Maybe Jennifer, hearing from you a little bit and your experience, both previously and now.

**Jennifer Johnson:** Sure. Yeah, so I guess backing up a little bit, I was thinking "Oh, I haven't thought about how Women Who Go Atlanta originally kind of started..." So I think that was 2018 as well, and I went to GopherCon, and I think there was a Go Developer Network mingle/mixer session. They were talking about different meetups... And a colleague and I were like "We should just start one in Atlanta." It turns out that there was another woman who was trying to get it started, so we actually found her -- I think we just asked around who was already involved in the Go meetup space. So we reconnected with her, I asked my company "Hey, do you want to sponsor our first meetup?" And they're like "Okay, whatever. Here's some money." And that's actually how I met Hannah. She attended our first meetup. And it was super-low key. It was at a restaurant and we all just got together and chitchatted.

So I think your original question, like the ease of starting it - yeah, I think it's just kind of like you set a date... You don't even have to have funding. You can do individual pay if there is a cost to it, and you just get some people together and start talking, and then kind of the ideas flow from there.

**Hannah W:** And I just want to add... I feel like reaching out -- because I think it was Wilken, or Paul, or... I ended up getting pushed -- I talked on the Slack channel about restarting Go Bridge, and I got an email "Hey you need to get this stuff started", and I was like "Okay." And they gave me all the information I needed to get started to do a Zoom chat, whatever. Everybody is so helpful if you just reach out. And the Slack channel was great at doing that. We ended up restarting Women Who Go as Go bridge.

**Paul Balogh:** That's Wilken. He's helpful. Me, not so much.

**Hannah W:** Well, you were the one who always \[unintelligible 00:19:59.26\] Zoom stuff, so... \[laughter\]

**Jennifer Johnson:** I want to add that the more established meetup organizers and workshop providers, for example like Bill Kennedy and Johnny Boursiquot - they actually came to our meetups early on. We just reached out, I think, to the GDN organizers and we're like "Hey, do you have anybody that we can invite?" They're like "For sure." So that was super-streamlined, and quite a privilege to have some big names come to our fledgling meetup.

**Matthew Sanabria:** You mentioned like you set a deadline or a date. I think that's super-important for meetup organizing, and one thing that can make it -- if you don't set a deadline or a date, it can make organizing very difficult, but if you do it, it kind of lights the fire under you and lets you go forward. And I know venues and speakers can be hard to find, but if you set yourself a date, you kind of put yourself into overdrive to meet that day. And it's a stressful feeling, but a good feeling, because you're doing something for the community.

**Jennifer Johnson:** Yeah. And I think one thing that can be a little stressful is seeing if anyone else will come, but usually, you get some people, and it's a good time.

**Hannah W:** And even -- GoBridge, especially. Not the \[unintelligible 00:21:11.01\] meetups, but GoBridge; the smaller it is, sometimes the better it is. The more intimate. Because you're more making connections with people who are more starting a lot... At least with GoBridge, it's a lot of people who are starting more. And it just is really great, because you get to know them a lot better.

**Wilken Rivera:** Yeah, absolutely. If I can jump in, first of all, I want to applaud all of y'all for starting meetups, because thinking about my story and how I got started organizing, I don't have it in me to actually start one. I'm all good hosting and running, but starting one - not so much. So I applaud y'all for that, because that's no easy feat. Thinking a little back how I got started, I'll be frank, I was really nervous about joining meetups. One of my first -- it was DevOps meetups that I was there, and I was like "Oh man, I have to talk to people here." And I was nervous. And then I thought for a second, I was like "Well, I'm pretty sure everyone else is just as nervous as I am to meet new people." And it was at that moment where I was like "Alright, I'm going to make this happen."

\[22:08\] So I started talking to people, and then I'm like "Well, if I want to get out of this shell, I should probably be on stage." And then one thing led to another, and I ran into the Go community, and they needed help in Golang NYC, I stepped up, and then the rest is history... Because I love meeting people, and I had an opportunity to meet everyone. And kind of going into that, how easy it is to get started, a lot of people just want to share their stories... So it was very easy for me, I felt, to ask them like "Hey, do you want to share something about what you're working on, or what you're struggling with?" And a lot of people signed up, which was great... And it made it easier. I won't say very easy, because it's not that easy, but it made it easier to host meetups in New York city and get that community feeling going, and making sure that people are just showing up to just partake and have fun... So I thought that's great. I'll stop there, because I forgot where I was going with that point. But nonetheless, I definitely want to applaud y'all for what y'all did.

**Angelica Hill:** No, a really admirable thing to kind of be that starting point where you can grow a community of excited gophers or other technologists... In terms of switching topics slightly, why you think people should go to meetups? I feel like I go onto meetup.com, I look at the Go community specifically, and we have a huge array of different remote, in-person meetups around the world... Why, from your perspective, should people take time out of their day, their evenings, potentially, to go to these meetups? What are the benefits for attendees?

**Wilken Rivera:** Can I jump on this one first, y'all? Is everybody cool with that? Alright. So I thought about this for a little bit, and it actually -- it kind of brings me back to when I grew up in New York city. In New York, hanging out on a stoop - it's the thing. Everybody comes to a stoop, they sit there, they tell stories... People walk by, they stop and they share their stories, you know what's going on. And thinking about that and looking at what meetups do, they give you that same level of community and perspective. People just come up in here and they share their stories, you get an opportunity to learn from what they are saying... And one interesting thing is we always say, "Oh, we learn from our mistakes", but I feel like meetups are a great opportunity to learn from other people's mistakes. Not saying that all mistakes are bad. Things happen accidentally. But it's a way of learning without having to go through it. And I think that in itself is a huge benefit of going to meetups. Because when you're on the day to day, you're working with your team and you kind of just know what you know. But when you start talking to other people, and you start getting perspective from their work, or from their cultures... All of that comes together and you have an opportunity to make something beautiful, because now you have all these types of inputs that you can use at your disposal. So that's how I see meetups and why I think they're super-important, on top of meeting new people.

**Matthew Sanabria:** Totally agree with what you're saying. I've done that, the stoop kids sort of deal, hanging out... And we could probably all think of a time where we hung out with friends or family and we just had like a really good time sharing stories... And there was no agenda. There was no agenda, we just shared stories. And we all probably walked away from that feeling motivated, and happy. And that's what meetups are to me, and that's why I think people should go to meetups... Because it's a motivating factor. And one thing that I see meetups kind of struggle with, and where I kind of draw the line a little bit is it's a meetup, not a showcase. It's not a place for you to just put speakers up and talk at the community. You need to give the community time to be a community. And if you don't do that, and you just have meetups that have talks and nothing else, you lose what Wilkens said, of that stoopness, that togetherness that you have. You lose that.

**Wilken Rivera:** Stoopness.

**Matthew Sanabria:** Yeah. Stoopness. I'm just thinking of Hey Arnold now. It's just in my mind. \[laughs\]

**Hannah W:** \[25:56\] Actually, my cousin had a good way of saying this... Like, going into those meetups, being able to talk to people kind of like you would -- especially if people are working remote now, you get that same feeling where you're able to actually talk about something freeform, and it comes. But I like how she says, "You're going to get an answer to something you didn't realize was a question in your mind." You're going in and you're like "Oh, I'm doing this thing." And then somebody will bring something up and it's like "Oh, shoot. I didn't even think about considering that. Oh, shoot." Well, that's the answer right there. that's exactly what Wilken was saying, I guess, almost.

But also, the ability to meet people who are like you, doing the same thing, was a great thing. When I went to Jennifer's first Women Who Go meetup, I was -- I worked with all men all the time. I had no person like me that I could talk with. And going to the Women Who Go was really great, because it's like "Wow, it's not all men." And that was such a big deal for me, because it was... I had worked at CareerBuilder for a bit, and I knew I could work with other people that were not men, but I've mostly worked in the startup area, and so I've always been the only person. So it was just amazing. And so having that ability to meet people that are like you is just great.

**Wilken Rivera:** 100%. And by the way, your cousin said it much better than I did. \[laughter\]

**Angelica Hill:** So you kind of touched on something that I think I've personally struggled with, thought about a lot, but I think for kind of new meetup organizers who are working out - like, what do they want to do? How do they want to spend this time? Is it just bringing people together to meet each other? No agenda, no talks, just kind of provide some food and drink, and have people chit-chat and get to know each other, more of a social hour? Versus let's line up four or five speakers, versus let's do a workshop, and then have breaks where people can socialize... I'd be really interested to hear kind of how you all think about the format of your workshops/speakers/social hours, your meetups... And if you've tried out different formats, I would love to hear what has worked well, what hasn't worked well... I might start with you, Guillermo. What is the format of the meetups that you all are organizing?

**Guillermo Galván:** Well, we started with an initial plan, but it's not something that is stick with the plan, because something happened and for some reason, or the situation, something changed, and then we have to improvise. So there is not like a way to follow a plan. I think that we are improving while we are doing the workshop or the meetup. And so yeah, it's mostly like that.

**Angelica Hill:** So do you kind of try and get speakers, and then have people socialize after your meetup, or is it more - as you said it changes; obviously, you need to have flexibility. Speakers drop out, plans might change... But interested in kind of the format historically that you've gone. Have you got speakers, or have you just had it be "Let's get a group of people together to chat"?

**Guillermo Galván:** We start first with a speaker, and then with the talk, and then we have a plan B, in case that something goes wrong. But yes, it's something like that. But at the end, everything is just - well, it went well, even though that we have the difficulties where the speaker didn't arrive, or something like that. People that are attending the meetup, also, they start to participate. Also, they give their own talks in order to fill that gaps. But yeah, it's more like participative.

**Wilken Rivera:** \[29:50\] I do want to say, it's interesting to hear, Guillermo, how you run it, because from the GDN perspective, I get a notification for every meetup that's being created in the GDN, so I kind of get an idea of who's doing what, and when. And I see a lot of activity coming out of Golang Guadalajara, so I'm always really impressed to see how consistent you have been, Guillermo, and Rodolfo, that whole team over there. So nicely done. So it's interesting to hear how's -- I guess probably that's why it's so consistent, because you always have a plan B, right? Which is good.

**Jennifer Johnson:** It's good idea.

**Guillermo Galván:** We always try, yes.

**Hannah W:** Is it okay if I chime in? The Atlanta area is kind of weird, because we have the main meetup, where we do a lot of talks.

There's a little socialization before, because the sponsors will buy pizza; Motion Recruitment, they buy us pizzas beforehand, and so you'll get people in like 30 minutes beforehand... But it's mostly talks. But we as GoBridge have taken in and decided to do a more social -- like, me and the person who started Atlanta Go, or the Atlanta Go meetup have divided up. We handle more newer people looking for more personalized help. And he's handling more of the people who have been in the business 5-10 years. He's trying to get like really high-quality, professional -- like, we've had Bill Kennedy, and we've had talks on how to contribute to Go... Talks for people who are not just getting into Go. And also having it be able to be remote for us, and they're doing in-person for the Go... We've really tried to have both ways of attracting people in by just dividing and conquering.

**Matthew Sanabria:** Yeah, I think there's a good mix. The two meetups that I organize, one is more like agenda-less, ad hoc. We do kind of like an intro circle where everyone kind of tells each other their name, where they're from, blah, blah, blah... And then we kind of just let it be, and let people self-organize.

Every now and then there'll be a workshop. But for the other meetup, that's geared more towards platform engineering, we do like 30 to 45 minutes of like social hour, where you eat and talk to people, and then usually we have like one or two talks that you sit for and you go.

There's two ways of addressing the meetup community, right? You want these high profile speakers to come in, because they draw your attendance in, and then you get a chance to address the entire community via the talk. But then you also want that agenda-less time, where the community can talk to one another. So I just see it as two different avenues of communication, and I like to make sure the meetups have both of them.

**Paul Balogh:** Yeah. With the St. Louis one we usually have a feature presentation, and of course, we'll have the pizza. Gotta have that. And a lot of interaction.

**Matthew Sanabria:** Yeah, if you don't have food, they're gonna be mad at you.

**Paul Balogh:** Exactly, exactly. And I'll be sitting there by myself.

**Matthew Sanabria:** "Okay, we'll swipe my credit card then. It's fine. It's fine."

**Paul Balogh:** \[laughs\] Actually, I have self-sponsored the food several times, but yeah... And we do a lot of -- so I like to livestream our events... And that kind of started because, like I said before, when I got in the organizer position, we only had one in-person event before COVID hit, and everything shut down. So it's like "Well, I just started this. I don't want to give this up." So I started doing a Crowdcast for our monthly meetups. So I would do that, and Angelica even spoke at one of our events as well, back in - I'm looking at the timeline. It was March of 2021. It's on the YouTube channel.

**Angelica Hill:** But you don't need to watch that. It's --

**Paul Balogh:** Be sure to like, and subscribe, and smash that notification bell. \[laughter\] Be sure to comment. But yeah, so as we started coming back to in-person events back in '22, I guess... You know, I didn't want to lose -- we had people that were actually attending and watching these things live, and we didn't have big names presenting usually. I mean, we had Angelica Hill, and then we did have Bill talk to us one time... But yeah, in-person it was pretty much only the local crew. And then St. Louis is big in introversion, or something, I don't know, because no one wants to speak. It's only me. And I'm actually an introvert. I just play an extrovert on YouTube. But yeah, so we try to do that.

\[34:20\] So I'll run around and be doing the camera, and all this stuff, and post editing, and all that. But yeah, I'm going way off the rails here... But yeah, but we usually try to stick to a feature presentation. And I keep trying to sway people into just "Commit to a lightning talk. Let's just have a quick five-minute, what are you doing at work?" And kind of just get that talk going if they didn't get in in the networking portion, where we're just kind of talking over pizza, and stuff. But yeah, I don't know. I still struggle with different things to do. I tried workshops... I don't think people really got the concept of what I was trying to do. But then again though, I was being selfish, and I started it at 3 p.m. And I said "Hey, I'm just going to be here from 3 to 7. Swing by. We'll work on anything that you've got going on", or whatever. And it was me sitting by myself. I was a lonely guy.

**Angelica Hill:** I would have attended.

**Paul Balogh:** Yeah. No, people didn't get it. But I was at a co-working location, so I was hoping the people that were there... I mean, we had -- CrowdStrike was actually in that facility. None of them came up.

**Matthew Sanabria:** Did you have food? Did you have food there?

**Paul Balogh:** No. \[laughter\]

**Matthew Sanabria:** They may have not come up, but they definitely went down. \[laughter\] I had to, I'm sorry... I had to.

**Angelica Hill:** So what I'm hearing generally is --

**Paul Balogh:** We can edit that out, right? \[laughter\]

**Angelica Hill:** So what I'm hearing generally is the consensus is there is no perfect formula for a meetup. It really depends on the specific community, it depends on the specific type of people, your location... But the three elements that I feel like - and please jump in if this is off - have worked are kind of food, having some food, beverage... If you're asking people to kind of spend an evening with you, possibly be missing dinner, because some of these meetups go late... You know, providing food, beverages.

Also, for people who maybe feel a little bit of apprehension, holding something I think is really helpful. Like having a glass of water, having like a can of Coke in your hand... I personally feel like I can't really talk to people without something in my hands, because otherwise I get really anxious. I do the whole like "Why are my hands like this? That's so weird. Why are my arms so long?"

**Paul Balogh:** "What do I do with my hands?"

**Angelica Hill:** Yeah, like "Why are my arms so long? Why am I standing so weird?" So I think there's also that.

**Wilken Rivera:** On the thing of food, have you ever met anyone that is unhappy when they're eating? I feel like we underestimate the idea of having food at these venues. When people are eating, they're in a happy state. They may not want to talk, but at least they're in a happy state, you know? So if anything, if you don't care anything about the talks, you can either say "Hey, this food is good or bad." At least you've got something to talk about. But I think for me, I think a good takeaway on the food front is - again, it's welcoming. No one is ever unhappy with what they're eating, because if they don't like it, they're going to put it down anyway. You know what I mean? So double down on food. That's a big thing. Food and drinks.

**Jennifer Johnson:** Then you have like an easy entry, small talk topic.

**Wilken Rivera:** Yeah, yeah.

**Angelica Hill:** And make sure, if you can - obviously, budget-allowing - that you have options for everyone. If you're not going to ask people their dietary restrictions, make sure you have vegan, veggie, gluten-free... Make sure that you have the basic allergies covered. And up to you, but I personally feel like... Just don't have nuts, just in case. Because I feel like that's one of the more typical allergies.

\[38:13\] So I do think -- like, think it through. It's wonderful if you provide these lovely six-cheese pizzas, but make sure that you have everyone covered. Because this -- I'm going to put my hands up, this has happened to me before. I've gone to a meetup and I can't eat anything. I'm like "Uh, okay... I'm sad." So do think that through.

**Wilken Rivera:** Yeah. So on that -- and it's funny, because Hannah and I were talking about gluten-free before we started doing the mic check... When I did my first event, my first Go Bridge workshop in Brooklyn, I did exactly that. I provided gluten-free options for pizza, regular pizza, meatless, so on and so on. Breakfast... Same spread. At the end of the tutorial, I got some tips on "Hey, what I could have done better", but everybody's like "Man, thank you for the food. It was great, and the fact that you had options for me was awesome." And I think that's an important thing, because when they walk away from those events, they felt like they were taken care of, and they had a lasting moment. So the next time you do it - yeah, I will support this person. I'll stop rambling... I know you were kind of going down your three, Angelica...

**Angelica Hill:** No, this is perfect. It just shows how important this first one is, and it's about inclusion; it's about making everyone feel welcome in this space, and making everyone feel like they've been thought about.

**Jennifer Johnson:** Yeah. Even for like a small gesture like food.

**Hannah W:** But I mean, Jennifer, the first time she invited us out for the Women Who Go event a long time ago, she didn't have a sponsor, so she just was like "Well, let's have a dinner, and everybody can pay for themselves." And so even if you're -- she can talk about it more, but even if you don't have a lot of money, you could say "Hey, we're going to go out and have food, and chat, and stuff." So you don't have to, for your first meetup, have $100 worth of food.

**Angelica Hill:** Yes. So food's very important.

**Matthew Sanabria:** Or the New York $1,000 worth of food.

**Angelica Hill:** Yeah, New York is difficult, honestly... I have organized the Go New York City meetups now, and we have like 50 people or so, 50 to 80... And I'm like "Oh yeah, we'll just grab like a couple pizzas." And I'm like "Oh, cool. This is really expensive." So getting sponsors is --

**Paul Balogh:** Can I say I'm jealous?

**Angelica Hill:** You're jealous of my expensive pizzas?

**Paul Balogh:** No, no... Usually our crowd is like 15 people... So I'm so jealous of those large numbers.

**Angelica Hill:** If I'm honest, sometimes I think meetups that are smaller, and more intimate, tend to be more impactful. I think it's great when you have a load of people, but again, bringing it back to the feeling welcomed, feeling included, also kind of going to your point, Paul, a lot of people in our community in general, in tech, are pretty introverted. Like, there are a lot of people -- I personally also identify as a little bit of like an introverted extrovert, which anyone I tell to in the community is like "Wait, no. That's ridiculous, Angelica. You talk to everyone." I'm like "No, because you put on--"

**Paul Balogh:** It's an act.

**Angelica Hill:** You feel welcomed, so you can come out of the shell, you know? And I think having so many people bustling around sometimes can be more overwhelming, than like an intimate group where you can truly talk to every person in the room.

**Paul Balogh:** This is true. This is true. They all get more Paul time.

**Matthew Sanabria:** I was gonna say, especially for like the speaker, and like the host... Because a lot of the attendees of the meetup want to go talk to a speaker afterwards, or want to go talk to the host afterwards. And when you have a larger meetup, that's a lot of people. And it's exhausting for you as the host to receive the communication, and also the people giving it. So it's like, sometimes the smaller meetups are a little -- they're welcome, you know? It's like "Ah, this is... I could breathe easier."

**Guillermo Galván:** \[42:00\] Also, it's worth to mention that - well, depending on the number of people that attend, also is the number of people of organizers... Because in our case, we are just three people who are organizing the meetup. So if we have more than 20 people, it goes sometimes problematic, because we lose sometimes control of that. Because organizing, and also to attend them, and something like that. Yes.

**Angelica Hill:** Yeah, for sure.

**Paul Balogh:** That's definitely something... Don't go it alone.

**Angelica Hill:** Don't go it alone. Have a community of organizers, too.

**Paul Balogh:** Co-organizers. Yes.

**Angelica Hill:** Awesome. So food is very important. Being welcoming, making sure the space is inclusive is really important. Kind of a mix of workshop, talk, but definitely social time... I feel like I've heard all of you speak about how important it is. You have these people in the room together... Let's just not have them all facing towards the front, not talking to each other. I'd love to hear kind of from you a little bit, Wilken, given your involvement with like GDN... First and foremost, for those who don't know, what even is GDN? What do they do? And maybe you could give us a little bit of kind of from your viewpoint where the Go community is at right now in your mind.

**Wilken Rivera:** Alright, so there's a couple of questions there... So before jumping into the GDN, what it is, where it is, where the community is, I want to touch a little bit on the mix. Having that blend of speakers and social aspect. I think from speaking to different meetup organizers throughout the GDN, I've come to learn that having that mix is crucial to having a sustainable meetup. Because what you do is you're sort of incentiv-- or you're creating a habit for people... Like, you have speakers, so people show up for the speakers, but then when you have the ad hoc sort of meetups, you create a habit for people to just naturally step up, or kind of speak, or give a lightning talk.

So over time, when you find yourself "I can't find speakers, because no one wants to talk, or no one wants to travel", you'll find that your community kind of steps up. And I think - and Rona, I apologize now if I get the group wrong... So Rona's out in Berlin, and I believe it was the Women Who Go Berlin group. But when I chatted with her, I know she had mentioned that the group had a really good ad hoc sort of ability for people to just show up and just like ad hocly start things up. And they're also really good at having featured speakers. And it was about that community. And I think they did a good blend of that. So I guess that's my way of \[unintelligible 00:44:31.05\] meetup organizers.

Do both. It works. It's not easy, I'll give you that, and we're here to support you as best as we can as part of the GDN... But if you can do it, I would try to swing to do both.

Alright, so that's my spiel on that. What's the GDN? Okay, the GDN - it's an abbreviation for the Go Developer Network. So a little history on the Go Developer Network... It's an initiative that was started back by GoBridge and Google. And I definitely want to take a moment to thank Google right now, because they've consistently -- Google, \[unintelligible 00:44:58.20\] Go team, have consistently sponsored us, and they sponsored us this year again for another round of $150,000, because they believe in what we do as part of GoBridge and GDN. And so I really want to thank them and anyone else who's interested in sponsoring, who rely on Go, or want to be part of the Go community... We're always welcoming new sponsors. You can reach out at support \[at\] gobridge.org.

Okay, so that's that. So what is the GDN? What do we do? I mean, we're here for the community. We're here to help build the community for Go. We work with all of the meetup groups across the globe, and try to provide initiatives and support to help them get their communities up and running. I think some of you mentioned that we've met, we've chatted before on Slack, on email... If you want to start a new organization, a new group, you can reach out to us and we'll provide you with some guidelines on how to get started, some general ideas on what your first topic can be... And then make the connections. We try to connect you with speakers, or sponsors that can assist your local communities, so that you can grow a successful meetup group.

\[46:06\] A few benefits on the GDN side is, one, from a meetup perspective, we cover all the meetup fees. When we first started, that's what we were doing, we were covering up all the meetup fees. So as long as you consistently have meetups, we'll gladly keep paying. But we've sort of expanded on that, because it's more than just paying meetup fees. We know that in order to be a successful community, you need to have the right level of support and speakers. So we've branched out and we try to do, again, more of those connections and building those relationships across the community, so that you can reach out to the whole sort of Go ecosystem to help bring up your local community, and make connections. So we offer sponsorship services, we connect you with speakers, we're going to be looking at doing workshops for this upcoming year... Sorry, my phone is behind me, ringing.

So that's the GDN in a nutshell. I'll pause for a second, because I feel like I said a lot. Is there anything you want me to clarify, dive into a little deeper there, before I go into the next question?

**Angelica Hill:** No, I think that's clear. And where online -- if people want to kind of dive in, learn a bit more, where online can they find more information?

**Wilken Rivera:** Yeah, so our website, gobridge.org. You go there and we have -- on our main navigation bar you'll see a link for each of the main programs. For sponsorship, for the GDN, and everything else that GoBridge does. If you don't want to visit gobridge.org, you can hit us up on our GitHub, which is where we manage everything. So it's github.com/gobridge/gdn,

and in there you'll find our program charter, you'll find out the requirements for being part of the GDN. You can open an issue if you need to open up, if you want to request a Zoom, or if you want to create a new group... And then also in Gopher Slack, we have the gdn-meetup channels. Gdn-meetups, with an s, that's our channel. That's where we live, so you can always reach us there. If you have any questions or you want to reach out.

Alright. I'll take a swig of water, and then I'll go into the next question, which is like current state of the Gopher community. Cool, so where are we? Current state of the Go meetup community. We have about 370 or more organizers. I feel like we just added another meetup group two weeks ago. And with 100 plus groups - at one point we were up to 200 - and now we're down to 109. We sort of did earlier -- maybe about two years ago we kind of filtered out the groups that weren't active, and then doubled down on the ones that are active, because we want people to go and find active groups. There's nothing more defeating than to log onto meetup.com or say "Hey, there's a meetup, there's a community next to me", and then you go and then it's like inactive. So we're just trying to limit or filter down that surface area, so people can get active groups.

So we've added a few new groups... I think we've seen a bit of a dip post-pandemic on in-person groups. I want to say for obvious reasons, but I don't know, because I don't really know what that means, because I think some groups are still very much active in the in-person space... But we've definitely seen an uptick in virtual meetups, and I think that is probably where we want to go moving forward. I think right now there's a lot more interest in people joining remotely than they are in person. I would love to know why, other than just commute... But I think if there's something there, or post-pandemic -- yeah, I don't even know what I'm trying to say there. I would love to know why.

But I think the community is still very much vibrant, and I think we're all here, we all met each other, we spoke to each other in-person at GopherCon this year... So I think it's still very much doing what we intended to do, which is to build these bridges, and bring up all the local communities. I've been talking with Guillermo and the Go Guadalajara group for, I don't know, over three years now. So these connections are happening, they're still very vibrant. Maybe not as prevalent as they were when we first started, but they're still very much active, and doing what we want to do. Does that --

**Angelica Hill:** \[49:58\] Yeah, yeah. No, I really appreciate you kind of giving that -- kind of taking that pulse, giving that overview. So as we kind of come to the second to last section of our episode, I would love to talk a little bit about kind of advice; ways that people can get involved, advice for people who might be nervous to attend their first meetup, or if they're wanting to speak at a meetup...Or kind of advice on if you're thinking "Okay, I have this crew of people that I have a beer with or a coffee with, we all like Go, we don't have a local meetup... How can we start one?" Or "We're nervous about starting one." I would love to hear advice for any of those people from each of you. I'll kind of go around, start with maybe - Guillermo, I would love to hear kind of what your advice is for people.

**Guillermo Galván:** Sure, of course. I think it's completely normal to feel nervous about attending to any meetup, especially if we are not sure what to expect. But I think my advice is to remember that meetups are designed to be a welcoming space. So I think we have to be relaxed, and just attend.

**Angelica Hill:** Cool.

**Paul Balogh:** Yeah, just know that the people that are going to these meetups, that you're going to be meeting with - they're all in the same boat, for the most part. I mean, everybody wants to either -- they want to learn, or they want to share, and just feel part of the community. Because that's really what it's all about, is learning from each other, and sharing each other's experiences. And then if you're speaking, don't worry. Don't try to be perfect.

That's the good part with the meetups, is these are real people. It's not going to be some polished demonstration, or something like that. Things happen. But yeah, don't worry about being perfect. And I know that's hard to do, being a -- yeah, kind of obsessive person myself. So yeah...

**Angelica Hill:** I think meetups are a great place if you're thinking of like applying to speak at a conference, or a larger meetup... Going to a smaller meetup or kind of your local meetup and kind of doing a test run; do whatever talk you're hoping to submit. It's a great chance for you to get feedback, for you to like get feelers, and make edits before you're presenting at one of these larger conferences.

**Paul Balogh:** Exactly.

**Angelica Hill:** So I agree. I think definitely no need to be perfect. I feel like I once tried to present something, and I had to restart like five times, because I like messed up... I was like "Oh, I want to try that section again. Do you all mind?" And they're like "Yeah, go for it." I was like "Okay, give me feedback. I'm going to try it out." And I did the same talk like five times, with slight edits. And then I went around afterwards and I was like "Which version did you like the best?" So that active workshop in my conference talk... So agreed.

**Paul Balogh:** Yeah. You can maybe even do the Scooby-Doo time machine. Go back in time and do over; it's all good. And you might find your next passion, too. I've found that I actually enjoy doing some of these talks, and sharing my experiences, and kind of teaching, dare I say... But yeah, I don't know.

**Wilken Rivera:** That's a stretch, my friend. That's a stretch.

**Paul Balogh:** Yeah, I know. I feel like I'm more like stand-up comedy, or something like that. But as long as I get laughs, I'm all good. I always used to say, I want to be the Mat Ryer of the U.S. for the Go community, so...

**Angelica Hill:** If anyone's going to be the Mat Ryer of the U.S., I think it should be you. \[laughter\] Wilken, I would love to hear your advice specifically for people thinking of starting a meetup.

**Wilken Rivera:** Starting a meetup.

**Angelica Hill:** Yeah.

**Wilken Rivera:** Become an organizer.

**Angelica Hill:** Yeah.

**Wilken Rivera:** \[54:01\] Just do it. To kind of quote our good friends over at Nike, "Just do it." It's either going to work or it's not. And you're going to learn why it doesn't, and then you're going to find that maybe other people are going to help you bring it up. I think we're in a better position now to help anyone interested in starting a meetup group. You could always reach out to GDN \[at\] GoBridge.org and we'll help you get started. And if you have some time that you want to invest, it really is -- I would just say just do it, because either way, you're going to learn from it. So if you take anything away from what I just said, just email us. Email GDN \[at\] GoBridge.org. We'll help you get started, and then kind of figure out what the next steps are. And then you could ask yourself if you really want to do it. I feel like we had someone email and said "Hey, I want to start a group." And my response was "Okay, great. This is what it entails." If this sounds like you're up for it, let's make it happen. If you're not up for it, then we move on. So I think that's the first piece of advice. Just reach out and say "I want to do it", and then we can kind of walk through the logistics, and then you can really determine whether you have the time and effort to make it happen.

**Jennifer Johnson:** I wanted to add on to about like not having a fear around starting the group, and a fear around if people are going to show up. Sometimes it might only be a couple of people, and that's a really valuable experience for that small group. If it's just you, then maybe it just didn't work out time and place. Don't take it personally, just keep on going.

**Matthew Sanabria:** For sure. I want to tackle the three points really quickly. Everyone's nervous to do new things. We're nervous to do this podcast. And Angelica brought up earlier that you hold something when you want to speak, your little fidget toy...

And most of us here held up something that we're holding in our hands right now. What I want to tell people is you're going to be nervous going to meetups, but so are the organizers. It's okay. You're in good company, so go ahead and attend. Don't be the lurker, go attend. And if you want to speak at such meetups, you're already not speaking at them, so you know what that side is. So why don't you try something new and speak at these meetups, and talk to the organizers. Say "Hey, here's a couple of pitches I have for things I want to talk about", and the organizer will help funnel that, filter that down into something that's going to be helpful for the community that they have.

And the last part about venues and such, venues and funding... If you're starting a Go meet up, there's funding for you. Reach out to Wilken, GDN. We already talked about that. Venues are hard, I'm not going to lie to you. Venues are very, very difficult. And a lot of companies, especially after the COVID, ZIRP era, they've pulled back a lot of strings. They don't want people in their spaces. They don't have the funds or the capacity to deal with that. But Jennifer and Hannah gave a really good alternative. Sometimes you can just start with a dinner. Or just go to an escape room together, or something. I don't know, you can start with just an activity, and bring your people together, and you'll just naturally talk about some of that tech stuff. That's a perfect start to a meetup. And then from there, you can build up and find a real venue, and whatnot.

**Wilken Rivera:** Matthew, 100%, man. And I feel like this is a great opportunity to say, find a stoop. Stoopness is a thing. If anything, if you can't find a venue, find a cool-looking stoop, sit down, everybody bring their own drink, and then just talk.

**Angelica Hill:** Does it have to be like a stoop that you're in, though? Am I just going to like take the \[unintelligible 00:57:17.29\] train to Brooklyn, find a random stoop, and sit on it? And then this poor person is going to come out of their home and be like "What are you doing?"

**Matthew Sanabria:** It's stoop as a service, of course. It's a product now. It's a product. \[laughter\]

**Wilken Rivera:** Well, this is it. As Jennifer said, just do it. Go, show up, and just get past that fear, and have people show up. Sit on the stoop, and people will be like "Why is this lady sitting on the stoop?"

**Angelica Hill:** I'll bring all my gophers, all the gophers around me.

**Matthew Sanabria:** If I saw you sitting on the stoop with gophers and I didn't know you, I'm going to be like "Hey, what's up?" I'm talking to you, for sure.

**Angelica Hill:** I'm going to give it a go. I will bring all my gophers, sit on a random Brooklyn stoop, and see how many people. Hannah can join me, with her lovely gopher hat...

**Matthew Sanabria:** \[58:04\] I mean, I know we're laughing about it and joking about it, but think about that for a second. You wear a shirt that says something. And people are going to comment on that, right? Or you have a cool hat, or a bag, or whatever. People are going to be like "Hey, nice bag. Nice sneakers. Nice hat. Nice shirt." It's the same concept. You've piqued someone's interest enough that they now want to stop and talk to you about it, because they know they have at least one thing that they can interact with you about. And then as they talk to you, they'll find more and more and more, and then boom, you just grew a community. Wild to think about that, right?

**Wilken Rivera:** Yeah, right there. Facts, my friend. You're on this morning.

**Matthew Sanabria:** I slept for once. I actually slept.

**Angelica Hill:** Last but not least, Hannah, I want to hear your tip.

**Hannah W:** I wanted to talk about giving a talk... Because actually, he Women Who Go one was the first talk I'd given, because they needed one. And it took me a minute to -- nobody else volunteered, and I was like "Well, what can I give a talk about?" And I realized, you can give a talk on the smallest thing. You can give a talk about something that you have horribly messed up. And people are going to learn from that, especially newer engineers. You can give on something small that you've done for work... I ended up giving it on cryptography, which was not small, but something I've been doing at work a lot.

The point being is there are tons of things, if you just sit down and think about it, that you can give a talk on. You just have to... I even gave a talk once on -- because I worked on an ATS, on working on your resume. It can be even peripheral. It doesn't have to be hugely technical. It can just be something that somebody else can learn from you. And as long as you've touched some lines of code, there's something someone can learn from you. Because there's somebody out there who hasn't touched code before.

**Matthew Sanabria:** Very well said.

**Angelica Hill:** Yeah, well said. Right. This does bring us to the conclusion of our conversation about meetups in the Go community. But if anyone has any final thoughts, final closing statement that they absolutely must get off their chest, this is your moment.

**Matthew Sanabria:** I just want to reiterate the two things I said before. One, it's not a showcase, it's a meetup. And two, lurkers are not a community. So be active in the community. That's the only two things I really want to say. Sorry, I know Wilken and Hannah or others had something to say, too. I saw the lights go up, so that's why.

**Angelica Hill:** I think you closed us out.

**Matthew Sanabria:** No, I'm so sorry.

**Angelica Hill:** Really nicely, honestly.

**Matthew Sanabria:** No...! \[laughter\] Where's the unpopular opinion jingle? Just play it. Just play it.

**Wilken Rivera:** Before we go into that, I do want to say this... I was going to say the same thing that Matthew said. So that's covered. But no, what I do want to say is we are working with the Go team to try to add a question to the Go survey this year, the next one coming up, about meetups, and whether you're engaged in meetups, and what may be preventing you from joining meetups. If that question does come out, I would like to encourage all of the listeners to please chime in and give some input, because that would definitely help us better understand how we on the GDN can better serve you, and kind of help cater meetups a bit better for all the attendees and future speakers. So if it comes down the wire, please respond.

**Angelica Hill:** Don't just lurk and look at it. Engage. Fill it out. \[laughs\] Well, it's been an absolute pleasure spending this past hour or so with you all. We're now going to turn over to my favorite part of the show, because this has all been fun and games about community... Now we're going to get a bit spicy, and turn over to unpopular opinions, where I don't know if we're all going to remain this cordial.

**Jingle**: \[01:01:39.13\]

**Angelica Hill:** Alright, we have first up to the unpopular opinions plate, Hannah.

**Hannah W:** Okay, this is probably going to be a little unpopular, but I have worked in Go for a while, but I still really like PHPUnit more than I like the regular Go testing. Even testify, to an extent. I just -- it just works better.

**Matthew Sanabria:** That's fair. That's a preference.

**Angelica Hill:** It's a preference... \[laughter\]

**Matthew Sanabria:** Yeah, I can't say it's correct. Yeah, it's a preference... It's like the moms \[unintelligible 01:02:32.24\] "That's, that's nice, honey", and they pat them on the head...

**Angelica Hill:** I think you've fulfilled the brief of unpopular opinion.

**Matthew Sanabria:** Yeah. 10 out of 10, no notes. Good job.

**Angelica Hill:** I think the best unpopular opinions are the ones where you squint your eyes, tilt your head, somewhat like a golden retriever, and go "Hm... Let me think about that for a minute."

Jennifer.

**Jennifer Johnson:** Okay, so this is maybe less unpopular, because we did just talk about food for a while... So you know how trending restaurants these days, they keep telling you like "This $15 dish is made to share", and then it's like two pieces... And you've got to stop doing that. Tell me it's the sample of \[unintelligible 01:03:23.02\] If it's to share, it's got to be like feed six people, like at a Chinese restaurant. Stop telling me to share my two bites. So maybe that's more popular than unpopular, but... That's my two cents.

**Angelica Hill:** No, I love to have spring rolls to share, and just have one. That's ideal.

**Matthew Sanabria:** It's when you ask the waiter or waitress too, and they're like "Yeah, this would totally fit your group." No, it doesn't. Why did you lie to my face? You just lied to me.

**Angelica Hill:** I think the one thing I would say that's good about that is if you are in a group setting, bring -- I know we're out of the meetups section of the show, but for like a meetup, if you get a load of little dishes, then it's potentially less food waste, there's more selection... You don't have to buy like a huge plate of, I don't know, vegan dumplings, where there's only one vegan, and that poor vegan feels social pressure to eat like twice their weight in the dumplings.

**Jennifer Johnson:** Fair enough.

**Angelica Hill:** Not speaking from personal experience at all, of course.

**Jennifer Johnson:** They should just say how many there are, yeah.

**Angelica Hill:** Yeah. Like, if you have a meetup of a couple people, and like each of them have their unique dietary requirements, that actually more turns into like a little share a plate for each person. But I don't know.

**Jennifer Johnson:** Yeah. Okay, fair enough.

**Angelica Hill:** You do have a point, though.

**Jennifer Johnson:** I think I've just been disappointed recently from...

**Angelica Hill:** I'm sorry.

**Jennifer Johnson:** \[laughs\]

**Angelica Hill:** \[01:04:55.23\] When we have the pleasure of going for a meal together, I will ensure that I ask exactly how many pieces will be on that sharing platter.

**Jennifer Johnson:** Alright, thank you.

**Angelica Hill:** Alright. Next up, Matthew.

**Matthew Sanabria:** Cool. Yeah. I have two quick ones. One's about Go, one's more general. The Go one is, I believe that the variable name for the receiver of methods should just be self. I'm glad that we were able to like change it to whatever we want, but it should just be self by default. I don't want to deal with it. That's my Go one popular opinion.

The general one is the short form of mathematics is math, not maths. I don't want to hear it. It's not up for debate. \[laughter\] So yeah, those are my unpopular opinions.

**Angelica Hill:** Geez, cooling us up on our grammar.

**Matthew Sanabria:** It just doesn't sound correct, like, spoken.

**Wilken Rivera:** I want to hear the backstory on this math...

**Matthew Sanabria:** I don't know, it just never sounded right. When people say "Oh, I'm doing maths today." I'm like "You said one extra letter you didn't need to say. Why did you do this?" I don't know. It never clicked with me. But it makes sense, I just -- I don't know. But then it doesn't, because you're supposed to shorten it. But you shortened it, and then took some words out, and then put an s at the end. I don't know.

**Angelica Hill:** So you know that it's a good one, a good unpopular opinion, because you yourself, Matthew, as you spoke it, did the tilt of the head and the "Hmm..."

**Matthew Sanabria:** Yeah.

**Wilken Rivera:** He was dropping a hint for the setup.

**Angelica Hill:** Yeah. And then finally, we have Paul closing us out. What's your unpopular opinion?

**Paul Balogh:** Well, I was just gonna -- Matthew, I was almost going to think there that next thing you know you're going to be saying something like it's a zee, not zed.

**Matthew Sanabria:** This is true.

**Angelica Hill:** I mean, I for one don't say zed. I say zee. Zee for zebra. Not zed for zedbra.

**Matthew Sanabria:** Okay, you know, we'll allow this one. You're the host. It's fine.

**Angelica Hill:** \[laughs\] Sorry. Paul, you gave me an unpopular one. What's your --

**Paul Balogh:** Yeah, mine's a non-Go one. Mine's kind of non-technical really, but everyone should learn to read a map. For directions, it's like "Ah, just... Damn you Google for being so good in making people lazy."

**Hannah W:** I don't know if you could say that on this talk, considering they're sponsoring part of it.

**Paul Balogh:** Ooh, sorry. Sorry. I thought we were being sponsored by Nike this time. I heard Wilken say something.

**Matthew Sanabria:** Just for our listeners to clarify, you mean HashMap, right? Like, that's exactly what you mean?

**Paul Balogh:** Exactly. Concurrent. Yes.

**Angelica Hill:** Oh, my gosh.

**Matthew Sanabria:** Yeah, turn left at the McDonald's that doesn't exist anymore. It's fine. It's okay.

**Angelica Hill:** Oh, my gosh. Well, it's been an absolute pleasure to spend this time with you all. I hope you have a wonderful rest of your day. I appreciate -- for those who don't know, we did record this very early in the morning for some of us, so I appreciate them spending that morning with me... And hope to speak to you all soon and see many of you at meetups very soon. Have a great day.

**Jennifer Johnson:** Thank you.

**Matthew Sanabria:** Bye everyone.

**Paul Balogh:** See ya.
