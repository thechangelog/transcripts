**Jerod Santo:** Hello, world. I'm your internet friend, Jerod, and I'm here for a React Jam. And Nick Nisi is here with me. What's up, Nick?

**Nick Nisi:** Hoy-hoy. Excited to Jam with you.

**Jerod Santo:** Do you like Jam?

**Nick Nisi:** I do, depending on the flavor.

**Jerod Santo:** Do you like React?

**Nick Nisi:** Yes... I almost said I love React. That's a little strong.

**Jerod Santo:** Yeah. And we're gonna turn that into your second beloved \["His beloved TypeScript..."\] Well, I'm glad that you love

React, and that you like Jam, depending on the flavor, because that's what we're doing today, we're talking about React Jam. We're joined by two guests, the winners of the previous React Jam, Gustavo Vituri and Jason McLeod. Guys, thanks for joining us.

**Gustavo Vituri:** Thanks for having us.

**Jason McLeod:** Yeah.

**Jerod Santo:** So React Jam... This is an interesting concept. This is an online event where React developers come together to create games in 10 days. So there's a new version going on right now as we record, as well as live when this episode ships out; the fall 2023 edition is online worldwide, and last summer - this summer, I suppose - was the first one, that you guys happen to be the winners of. So congrats, I guess, and tell us the story.

**Jason McLeod:** Yeah, thanks. Yeah, so I found out about the React Jam -- some sort of like targeted ad popped up in my Google feed or something...

**Jerod Santo:** Oh, wow. Those things work.

**Jason McLeod:** Right? Yup. I'm not as bad about buying things as I am clicking through and seeing things, but... They do work. But yeah, Gustavo and I have been I guess internet friends for a while. Like I said, he's all the way over in Brazil. He and I had already been kicking around different games and stuff, and so when this thing dropped, I was like "Hey, do you want to do a game ham?" And actually, I think right away it was kind of like "Oh, we're busy. Maybe we can, maybe we can't." But then - what was it, Gustavo? A few days before? ...you were like "Are you still doing that game ham?" And we got together right away.

**Gustavo Vituri:** Yeah, I think that was pretty much it, actually. Jason approached me with the idea; he just dropped it into Discord, and I was like "Yeah, sure. We can do that. Yeah. Uh-huh." And then the day before it went live, I was like "Well, heck yeah. Let's do it!"

**Jerod Santo:** Good thing you did. You ended up being the winners. If you had not done that, where would you be today? I guess we'll never know, because you did do it, and you did happen to win. Now, the previous jam was all about partying together... I guess they had a better JS Party theme actually the previous round... A multiplayer challenge. This theme this year is cool, it's take a classic game and reimagine the gameplay, or art style, by giving it a unique twist. So each React Jam comes with a theme. Your guys's was multiplayer. What did you build, and how did you win?

**Jason McLeod:** Yeah, so we kind of had this ideas board that we expected to draw from right away. Like, "We're doing the jam, it's coming up, we don't know the theme... But surely, it'll fit one of these things." But then when they dropped the theme, and they dropped the games that it's similar to, or like suggestions of "Alright, here's the theme, and you may use this theme to make a game like..." and they listed a bunch of games. So on that list was the game "Keep Talking and Nobody Explodes", which, for folks who aren't familiar with that, it started as like a VR game where one person's in the headset, and everybody else has like printed instructions, and so you're supposed to work as a team to help defuse a bomb. So it's like asymmetrical, it's pretty neat, but what he and I both really liked about that game was just how insane and chaotic it can get whenever someone's like "Alright, it says here to do this. Oh, wait, no. It says to do that."

So we took that sort of energy and said "Alright, what could we make that would work on the room platform, that would introduce that kind of chaos?" So we built a game called Chop-Chop, and if you've ever seen the game Overcooked, there are certainly some parallels. Chop-Chop is for one to four players, it's collaborative, like a cooking game. So you get these orders that need to be filled. The ingredients are passed around to all the connected players, but you don't know who has what until you communicate it. And then everybody is put at a station, but you can move around. You can't take a station that's already been occupied, but you can easily just swap to another station, and it's just like tab-driven. You don't actually have to move around.

\[00:07:54.11\] But yeah, then you basically work together, you can pass items to each other, and players will take the raw ingredients, they'll put them on whatever station makes sense, so like a tomato that needs to be chopped - you'd have to be at the chopping station. Then you chop up the tomato by hitting the action button a few times, and then now you've ended up with chopped tomatoes. So then you can pass the chopped tomatoes to somebody, or you can move to a different station and use the chopped tomatoes in the rest of the recipe.

So yeah, it's basically just a collaborative, chaotic cooking game. And then it ramps up slightly in difficulty over time, and if you fall behind on orders, you can get into situations where your inventory is full, and you can't take items, and you end up having to go and like spend your currency that you've been getting from completing orders, and buy ingredients that would have been given to you if you had the space, but you're too far behind. So there's a few different mechanics that work together to make it chaotic, and that was certainly the goal.

**Jerod Santo:** Gustavo, anything to add or subtract from Jason's description?

**Gustavo Vituri:** Well, I'd say one of the most important parts is that everything is shared, besides your inventory. So currency is not given to a single player, it's given to the group itself. So if you spend a lot of the money, \[unintelligible 00:09:08.21\]

**Jerod Santo:** Lots of multiplayer incentives in there... Okay, interesting. Very cool. You mentioned Rune. I don't know what Rune is. Can you tell us what Rune is and how that plays into this particular game?

**Jason McLeod:** Yeah, for sure. So it's funny that you mentioned that, because like I said, when I got the targeted ad to React Jam, I load React Jam and then I'm introduced to Rune. And I honestly don't know where the line is drawn between the two teams, the two organizations, what have you. But Rune is -- how do you introduce it? ...because when I found out about it, there was a lot of like single player games in Rune. And I think that the thing that we're trying to do is almost like the Roblox model, where it's like, load our client, connect with people, play games with those people... There's leaderboards, and things like that.

But literally days before the React Jam, the platform turned into -- like, they kicked out all of the single player games, and it was just a handful of multiplayer games... And so I believe that Jam was kind of it put there to just breathe new life into their product and put some extra games out there. But to a developer, Rune is a -- it's a server backend that you don't have to worry much about. So you have this logic tsfile that you can put the game logic in, and then you initialize a client, and then you start dividing the actions up to say "This is a server-driven thing", or "This is a client-driven thing." But it really abstracts it away to where you don't have to overthink the situations like "Oh, how hackable is this? How exploitable is this?" So it actually surprised me with how well it all worked. But yeah, just to close up on that, basically what the Rune product is is an app you download on your phone or your tablet, and then that would be how you would launch Chop-Chop or any of the other games that are on there. So they more or less have a platform that our game now lives inside of.

Yeah, it's definitely a neat technology, and I think we got in at the right time, because like I said, after they moved all the single player games out, we were one of just a handful of multiplayer games. So we get a report each week on how many hours have been played, and stuff like that... So you can imagine, especially having won the thing, that our hours are up there. So that's like so motivating, and just so exciting to see the report. Yeah.

**Nick Nisi:** \[00:11:48.05\] Yeah, that's really cool. I'm looking at Rune, and kind of looking through their developer SDK docs... And I opened up the Tic Tac Toe example game that they have, and the one thing that I don't see in here is React. So I'm curious how that plays into -- is this just for React developers, but not with React, or...?

**Jason McLeod:** So I know that in the first React game, at least the first one I heard of - I think it was their first one - that folks did things in there that may have not been React. Their SDK allows you to drop the package, or even like a CDN script into it... And I don't imagine it's just like "Drop in and ship it, you're done." There's gonna be some molding and stuff to get it to behave in there... But I don't think you have to use React. In fact, there's a guy in the Discord who's really pushing for some Svelte. I think he even went so far as to make like a Svelte boilerplate. So Rune works without React, I'm pretty sure.

**Jerod Santo:** "I'm pretty sure..."

**Jason McLeod:** Yup.

**Jerod Santo:** What about React Jam? Do you have to use React for React Jam?

**Jason McLeod:** Well, yes and no. I think yes to qualify for the prize money. But again, I think there were some folks -- like, somebody went through and made... And it could have been like with Three Fiber or something, but somebody made like a whole 3D game... And I don't even know that it ran in the Rune client. And it's funny, because when Gustavo and I were talking about doing React Jam, I was just looking for a Jam to do. I had probably had my heart set on using React, but I didn't have my heart set on using Rune. Actually, during the Jam I tried this, like, "Alright, what if we one day want to eject from Rune? What does that look like?" But yeah, I think that Jam is just a Jam, but if you want to get the most out of it, and you want to color inside the lines the most, then yeah, you should be using Rune and you should be using React.

**Nick Nisi:** I imagine it added a lot, because you said you got started a few days before the deadline... Is that right?

**Jason McLeod:** No, so we had some ideas that we thought we might take into it...

**Nick Nisi:** Yeah.

**Jason McLeod:** ...but I remember the way that, like -- they have a countdown on their site, and I remember... The same thing happened this morning, actually, because like I said, today they're kicking off the other one... But I woke up earlier than the kickoff, and I was like "Oh, I'm wide awake. It must be time." And no, it's 2am. And in my time, it started at like 7am. Basically, between like 5am and 7 I was just like taking little five-minute naps until the time to kick it off came around. But yeah, I think that when we started pretty much right at the beginning.

**Jerod Santo:** As of recording, there's 10 days left of the current one, and it just kicked off, like you said. So did you guys have basically 10 days to do this? Was it similar?

**Jason McLeod:** We have 10 days. I think I've got some commitments coming up the last few days of it, so my family will probably not like it if I blew those commitments... So we're calling it a seven-day Jam.

**Jerod Santo:** Oh, so you're back for more. Round two.

**Jason McLeod:** Oh yeah, we're definitely back.

**Nick Nisi:** Rune is probably giving you a lot of that magic, things like the multiplayer stuff and the collaboration, so that you don't have to spend -- me, I would spend 12 of the 10 days on that, probably...

**Jerod Santo:** \[laughs\] Yeah, totally.

**Gustavo Vituri:** Yeah, I think that makes it all easy for all the developers. Jason has a lot of experience with multiplayer, really. We've worked in games together before that, that were multiplayer. He did all the backend, and stuff. But for new developers - and there were a lot of them in the Rune Discord, asking about multiplayer... They never, ever had made any game in multiplayer mode. And then they have this SDK that simply did all of it for them. So it really increased the amount of players in that game, in the React Jam itself.

**Jerod Santo:** So Jason, you said you were looking for a Jam more than you were looking for a platform like Rune, and you wanted to build a video game, and you wanted to use React; you were more into that side of it. I don't think about video games when I think about React. They aren't exactly peanut butter and jelly in my mind... So I'm curious where the disconnect is between me and you when you're wanting to build a game in React. Why, how etc.

**Jason McLeod:** \[00:16:01.28\] Yeah, it's a good question. I guess I'll say this - I've certainly downloaded Unity, I've downloaded Unreal, I've downloaded Godot. All those things can and probably do produce better games. But the learning curve on some of those things - I have a tough time negotiating that in my brain. Because the way I look at it -- like, I spend my days writing software in TypeScript, and in Node. And so if I can do something that I like, which is making games, and make use of all those things I already know, and then of course, take what I've now learned in working on the game and then apply that to work, it just feels so much more -- just like a better use of my time. And I use it as an excuse to not have to feel intimidated by Unity, and Godot, and things like that.

**Nick Nisi:** Yeah, by doing it in something you really like, or that you know really well, it takes a lot of those sharp edges away.

**Jason McLeod:** Oh, yeah.

**Nick Nisi:** Specifically C\# edges in the case of Unity.

**Jason McLeod:** 100%, yeah. Actually - funny story, because like Gustavo said, I've messed around quite a bit for years now... I think I downloaded Node when it was in beta. And I used to live in Charlotte, North Carolina, and I went to a JavaScript meetup there... And it was right after an event called Node Knockout - not to be confused with KnockoutJS - and that was a 48-hour hackathon of game jam... But not a game jam, because you could build software if you wanted to. In fact, I think we were probably in the minority for building games instead of building software. But at any rate, they mentioned that they were going to be giving folks time to demo if they wanted to, what they built for Node Knockout. So I showed what I built, which is like a multiplayer, like pretty much just like a little MMO game, and two guys pulled me aside afterwards and were like "Wow, you're using Node, and we need that where we work. Would you be interested in coming in for an interview?" So it kind of is this weird circle, because I started -- I've always been a JavaScript guy, but like writing code and making games led to me getting a job, and doing all of those same technologies. And then it just keeps going back and forth between using it for games, using it for work. So I love it. You mentioned earlier, Nick, that you weren't sure if you were gonna say you loved React, but I think that I do love React.

**Nick Nisi:** I do too, I just don't want to give that ammunition to Jerod...

**Jerod Santo:** He just doesn't want the soundbite. He'd split the words up and say them in a different order to get the message across, but he does not want to go on the soundboard, I think is the situation. Gustavo, do you love React?

**Gustavo Vituri:** Oh, my. Well, here's the thing, Jerod - I am a .NET developer, so...

**Jerod Santo:** Okay...

**Gustavo Vituri:** Yeah, I'm kind of an intruder here, right?

**Jerod Santo:** Okay... That's alright. There's no imposters here.

**Gustavo Vituri:** So Nick kind of took a stab on C\# there, but... I mean, I kinda like it.

**Jerod Santo:** \[laughs\] He stabbed you with that C\# content.

**Gustavo Vituri:** Yeah, I mean... I've messed with it before. Even in React Jam, you know, I've browsed around the codebase really... We got a \[unintelligible 00:19:08.10\] going, and you know, Jason is always trying to push React to me... No, just kidding, Jason. I've actually tried to learn it before, but then life gets in the way somehow... But then in this React Jam I did get in touch with it a little bit better, because Jason uses Typescript, and that's aligning much better with C\#.

**Nick Nisi:** Did you hear that, Jerod? Did you hear that...?

**Gustavo Vituri:** I'm not trying to create any, you know --

**Jerod Santo:** I quit paying attention. \[laughter\]

**Gustavo Vituri:** Yeah, I do like React though. It's really easy to get into it. It doesn't take a long learning curve to get into it. And yeah, I plan on learning it someday, I guess...

**Jerod Santo:** \[00:19:59.07\] Very cool. Well, like I said, last year the multiplayer was the big deal. This year it's not necessarily that; it's classics with a twist, although there is a specific multiplayer challenge, which has its own prize as well. Tell us about this year. I mean, can you guys divulge? Well, here's the situation. As we record this, it's 10 days to get it in. As we ship this, it's gonna be three days to get it in, and you guys are already going to be done. So if you're listening to this in the produced version, and you want to jam, you've got to get moving and get a game out there quickly, because you've got a couple of days to get going... And the prior winners have quite a headstart on you. But classic games with a twist, right? So it's take a game, reimagine the gameplay.

This reminded me of something that we're doing right now... Actually, by the time this ships out, I can officially announce that we've also taken classic games and added a twist... If you go into Spotify, or Apple Music, or you YouTube Music, or all the music places, and search for Changelog Beats, you will find an album there called Next Level. That album is a collection of all of our video game-inspired tracks that you've heard on JS Party and other podcasts over the years. We've put them together, we're releasing full-length albums now with Breakmaster Cylinder... And so we have tons of video game-inspired soundtracks for you to go listen to as this goes out... That will also be official; as we record they're out there, but we haven't announced it yet, so keep it between us...

**Jason McLeod:** You must have mentioned somewhere, because I know I heard some Sonic the Hedgehog sound, and stuff.

**Jerod Santo:** Yes, I did tease it on the front of JS Party.

**Jason McLeod:** Yup.

**Jerod Santo:** And we're making the official announcement on Monday, but they are out there today, and you guys can go listen to them. We just haven't actually done a launch announcement. Pretty cool... We have a lot of Sonic-inspired stuff; Nintendo, Genesis... All of that. You can kind of tell, because the track titles will often sideways-reference the game that they were pulled from. So a lot of Zelda, Castlevania, Megaman, Mario... All of our classics are inspiring brand new music from us and Breakmaster Cylinder. So classics with a twist definitely speaks to me; if it speaks to you, and you like that kind of music, go out there and listen to that.

\[sample 00:22:14.27\]

**Jerod Santo:** What are you guys thinking about for this year? They're saying "Take a retro game like Asteroid, Space Invaders, Donkey Kong, remix those." You guys can probably tell us what you're up to, because by the time this goes out, who cares, right?

**Jason McLeod:** Yeah. And honestly, who cares anyway? Like, Gustavo and I, we don't really join these things to really run off and just kind of keep it to ourselves. We don't do them to win. I mean, we do, but we don't, because I do them to learn, I do it because they're a lot of fun, and I do it because I get to meet people... I mean, last jam -- it's a small community, but it was a really neat community, because they're all helping each other. I remember getting on a Discord call with one of the other teams and being like "Alright, I think I can help you solve that problem." So it was all for just the community and just like the vibes.

But yeah, this year -- or... This year -- it's the same year; it was only a few months ago. This time around we had this idea that we've been kicking around, and really going crazy in Figma, and being like "Alright, and then this mechanic, and then that mechanic. And then if this situation arises, here's how we'll solve it." So we have this enormous mind map... And we knew there was a theme that would drop, and we knew that we may or may not easily be able to adapt our game to the theme... And then this morning me and Gustavo were like waiting for the theme to drop, and waiting and waiting, and dropping emojis in their Discord... And then all of a sudden, the theme drops. And we weren't on camera, but I know that we both just had like a jawdrop moment, because it was like "Uh-oh... We don't fit the theme."

**Jerod Santo:** \[laughs\]

**Jason McLeod:** \[00:24:09.00\] So it's okay though, because --

**Jerod Santo:** Pivot.

**Jason McLeod:** Yeah, exactly. Exactly that. So we got on a call, and we were like "Alright, our game's most like these categories. And without changing our game, how many other things is it like?" Because we were trying to just figure out, "Can we use the original idea and then find the twist?" But then maybe - gosh, what was it? Like 15 minutes into it, we went back to our ideas board, because Gustavo and I have a very unofficial game company... It's just the two of us, Pixel Party Games; I had to drop that... But we went to our board and it was like "What if we took this game and we applied it?" And the game that we had kind of been noodling around with was actually something we anticipated adding to the Rune platform even before we knew there'd be more and more jams. Because Rune will let you pump games to their platform, independent of a jam. I think they would love that.

So if you guys are familiar with the game Pipe Dream - it probably goes by a lot of other names, but the idea is that you're given pieces of like tile-based, like pipe, and then you have to place those pipes in a formation that would allow the liquid to make it either from point A to point B, or as far as you can, without \[unintelligible 00:25:19.27\] back on itself, that kind of stuff. So this time around, we're gonna be making a multiplayer version of that. But the twist is there's not just a queue of pieces that just appear; you have to run around and grab those pieces of pipe from somewhere else on the level, and then run them back, navigating the current pipe layout like a maze, and place them in a position to where the line can keep going.

So yeah, we had that \[unintelligible 00:25:45.18\] and thought that idea up, and at least I left that one kind of relieved, because we have a really hard time making really elaborate scope, and then telling each other that we should reduce it, but then secretly not reducing it. And I'm like "Remember that thing you said we didn't need? Well, I went ahead and implemented it." But yeah, this time around we're definitely sticking with multiplayer, because I think that's what Rune is going to fit well for us, what they offer us, that SDK for that... But yeah, the classic pipe dream game, with a twist of multiplayer.

**Gustavo Vituri:** Yeah. That came out of nowhere, too. I mean, Jason had already told me about this game, and I'm pretty sure I've played it... Like, in those big, tubular monitors, I had this one. But yeah, it just popped out, and it works much better than our last idea, because it's much less scoped.

**Nick Nisi:** That's awesome. So I'm trying to figure out -- you know, you just got started, so you probably don't know, but I'm just curious, as you're thinking about this, how React will fit into that. What pieces would you anticipate being built in React? Would you have like a pipe component that is used to kind of throw around with different shapes, and things like that? Or what's that look like?

**Jason McLeod:** Yeah, that's a good question. And I'll be honest, I think our other idea probably had a lot more compatibility with React. I'm using a library called Phaser, which is just like a 2D rendering engine plus, right?

**Jerod Santo:** Yeah. I've heard of that.

**Jason McLeod:** But the UI, basically, all the UI, I'm going to drive with React. So any of the loading screens, any of the stats... You know, how far through the level you are, whatever your score is - all those bits will be rendered in like a div that's just hovering over the top of Phaser. And then, like I said, Rune's designed for mobile, so for the touch controls, I'm using some React libraries for like a joystick, and things like that. So it's definitely using React; I'd say it's probably like a 60/40 split; maybe there's probably more Phaser code going in than there will be React code. But we're also using -- it's not React, but I often pair them; we're using Redux to keep things in line, too

\[00:28:04.08\] So even Redux for updating the whole game state. The way Rune's callback functions basically work, it's almost like no effort... Because I had this hunch, that like what if you could just use Redux on the server? And seemingly, that's what the Rune team has done. They give me the state objects, and I just push that into my state object, and everything's synchronized.

**Nick Nisi:** Nice. I'll admit, I haven't used Redux in a long time... And so I don't really know the difference between what Redux offers, versus just the plain old \[unintelligible 00:28:33.04\] use reducer that React now ships with. But I'm curious, what pieces of it does Redux make easier for game management?

**Jason McLeod:** So, quickly, I'll say this - when I first heard of Redux (this was years ago), I was learning about at the same time as RxJS, which I am not a big fan of... And I dismissed Redux altogether. I was like "I don't want to know what either of those two things that start with an R are." But it works really well with the way Rune's laid out, because what you get from Redux, instead of just like React state, is you don't have to worry so much about who is going to consume it, typically like in a use state situation. That's that component. And if you want to pass that state around, you've got to drill it through props, you may have to put a context in there... There's ways around it, right? But then Redux just lets you say "Alright, you have a global store, and you can trust that as long as you follow the handful of rules about dispatching your actions and things like that, you get the whole state everywhere." And when you pair that up with the way Rune works, if Rune says "Here is your state snapshot, here's your users, here's your resource nodes..." You control what the state is, but it ships it to you on every game update. So instead of me having to figure out which nodes need to be updated and how many use states I did, I just get to throw the whole thing in Redux, and Redux is going to propagate those changes out to any of the elements that make care about them. So it makes that whole thing like two lines of code to get the synchronization done.

**Nick Nisi:** And that all runs -- like, another problem I was just thinking of with that is if you were just going to use something like a hook that's \[unintelligible 00:30:13.05\] that's all going to be within a React context, right? But Redux is its own global state thing as well, so you could use it outside of that?

**Jason McLeod:** Yup.

**Nick Nisi:** Okay.

**Jason McLeod:** Yeah. Whether or not you're supposed to, that's how we've done it, and it's worked.

**Nick Nisi:** That makes sense.

**Jerod Santo:** What are the most challenging parts of shipping a game in 10 days?

**Jason McLeod:** Oh, man... Well, Gustavo is the one who took us all the way to the moon with market penetration... Why don't you take that one, Gustavo?

**Gustavo Vituri:** Yeah. Well, first of all, React Jam was my first Jam ever. I have never ever competed in a Jam. So that was already a challenge in itself. But yeah, I mean... I think it wasn't really a challenge, because I just hit some friends up, and some people I knew; I even asked my wife to -- she's a teacher for high-schoolers, and I asked her to propagate the game throughout the school, and they were all playing...

**Jerod Santo:** \[laughs\]

**Gustavo Vituri:** I don't know if I should be saying that, but...

**Jerod Santo:** That's a grassroots campaign right there.

**Gustavo Vituri:** It worked pretty well. It wasn't much effort, but it did pay off. I don't know code-wise, because I was basically the artist dev; making the art was quite a challenge, really, because again, we do those jams because we want to learn, we want to experiment, we want to try something new... And in that jam, besides it being my first game ever, I had the greatest idea ever of doing something that I'd never done before, which was digital freehand drawing. I'm usually making pixel art, but super low-resolution pixel art, eight by eight stuff... And then I went out with my drawing board and I just did it. It was incredible to see the progress made during the jam, really. The first assets we made were kids stuff; those cartoonish drawings with fake outlines, and solid colors, and that kind of stuff... And then by the end of it, we had some really amazing stuff that even I was amazed by myself.

**Jason McLeod:** \[00:32:19.29\] Yeah. I mean, I don't know, you're not giving yourself enough credit, Gustavo, because I remember saying "Oh, we're gonna do this in pixel art, right?" And you were like "I don't know, I might go with illustrations." And then you showed me two images, and I was like "Okay, never looking back. We're going all-in on the illustrations. Pixel art - we'll do it again later, but you're sticking with this illustration idea."

**Gustavo Vituri:** Yeah. And we're doing pixel art in this one, so... Back to the roots.

**Jason McLeod:** Yeah. But yeah, I would say the toughest thing about designing a game in 10 days is you've got to figure out if it's going to fit in your real life... Again, because I'm using web technologies, everything I learned while messing around with game dev is easily applicable to the work life. So I don't feel like I'm stealing my brain power by having thought about React state in the evenings when I'm messing with the game. And then the next day, when someone is like "Hey, my state's having a problem", "Oh, I ran into this last night." But you've got to figure if it's gonna work in your time, with just whatever else you've got going on in life. You've got to figure out how to balance your scope, your prototypes, and then your play testing. Because I've done a number of Jams, and I've come up to the wire, and been like "Okay, now it's time to deploy it", and there's problems. And now it's time to test it, and there's problems. Now it's time to figure out if it's even any fun, and there's problems.

So you have to -- if you're an agile guy, you have to lay it out in like sprints, so you give yourself enough time to do all those important things... Unless you're just there to learn it and you don't care about shipping it. I mean, I know I've joined Jams and not shipped things... But yeah, I would say the hardest thing about making a game in this period of time is just figuring out your scheduling, and making sure you give each of those things enough time.

**Nick Nisi:** So do you go for like two-hours sprints, rather than \[unintelligible 00:34:04.00\] or...?

**Jason McLeod:** Yeah, it does sometimes break down into like days. I remember the last -- maybe it was the last two days of the prior Jam... We have a Trello board, and Gustavo makes a new category called "The final stand", or something. And so we start sliding things over to it, or we start getting really desperate and we're just like "Figure out a way to show the wind state", whatever it takes. And then the next day it's like "The final, final stand." So you certainly start looking at those structural goalposts-style thinking in the later days of the Jam... I'm a procrastinator, so I have all the optimism in the world that I'm gonna finish it... But yeah, you have to break it down into those chunks, and day sprints, hour-longs, or like two-hour sprints, like you said... That's definitely the idea.

**Break**: \[00:34:53.21\]

**Jerod Santo:** I built a game in two days one time, and it was a disaster.

**Nick Nisi:** I did, too.

**Jason McLeod:** Nobody had to know about it, though.

**Jerod Santo:** Did you? Did we build it together?

**Nick Nisi:** No.

**Jerod Santo:** Okay. They were just two separate disasters?

**Nick Nisi:** Well, call yours what you want... \[laughter\]

**Jerod Santo:** Oh, you said you did, too. Oh, yours was good? Tell us about it, Nick. What did you build?

**Nick Nisi:** I did it also kind of at a game -- well, it wasn't a game jam. It was something called Startup Weekend, and we kind of bucked the whole premise of creating a startup. We were like "We're just gonna make a game." And so we made a game, and then we sold ad space in the game to the other startup weekend participants. So we actually made like $11, or something.

**Jason McLeod:** $11?

**Jerod Santo:** Wow...

**Nick Nisi:** Yup.

**Jerod Santo:** Okay...

**Jason McLeod:** What did you spend it on?

**Jerod Santo:** That's in the positive right there.

**Nick Nisi:** It did get us another game though too, which was awesome. So we made two games. But we used a tool called Impact.js, which was like a game engine... It was like a pay game engine. But now it's -- I just looked it up, it's free, and it's very old, in terms of like it's not modern JavaScript at all. But we quickly put together a game called Startup Weekend, the game, where you just had to walk through -- it was a 2D platformer, and you had to walk through a level, and there were people that would come up and pitch bad ideas to you, and you had to run away from them... But then people who pitched good ideas to you would give you coins if you hit them.

**Jason McLeod:** I love how meta your brain works. You did Startup Weekend and sold ad space to the other people. And then you made a game about how that draw -- because I've done the Startup Weekend a long time ago. Around the time Impact.js was very prevalent. And just making a game out of like the crowd that draws... Because there are people who go to that and they're just dead set on like "Oh, yeah, I'm definitely getting funded tomorrow, and to the moon." And then there are people who are like "Alright, what are you nerds up to?", you know?

**Jerod Santo:** Yeah, totally.

**Nick Nisi:** Tell us about yours, Jerod...

**Jerod Santo:** Yeah, so the one that I've built, the details are scant in my brain. I actually built it with our friend Zach Leatherman, the author of the Eleventy static site generator... And it was a hackathon. We were at Hack Omaha, probably a decade ago, where it's a -- I can't remember who puts it on, Nick.? Is it the World Herald? I don't know, somebody in Omaha --

**Nick Nisi:** It was at the World Herald.

**Jerod Santo:** It was at the World Herald, okay. There's a group in Omaha that puts public data out, because you know, we own the data, because we're the public, but sometimes it's really hard to actually do anything with it... And so this was like to get citizen journalism kind of going, I think, was kind of the idea... And so they had these different datasets that they had released from government data, and they had this hackathon where you were supposed to come together and do something cool from this set of datasets that you have. And Zach and I took the crime dataset, and we decided to build a game where we'd put up the picture of what was stolen, and then it's like The Price is Right, you have to guess the value. Because we had both the description of the items stolen, and then the perceived value or what they decided the value of that was, for insurance and whatnot. The funny thing is, we didn't have any of the pictures, we just had the descriptions. And so we like literally did Google Image search, I'm Feeling Lucky, with the description, and we put that picture up, which was super-dangerous...

And we also decided to use Meteor.js. So you know this concept of innovation tokens, like "Don't spend too many innovations on one project." We hadn't built a game before together; we hadn't really coded much together. We'd never use Meteor.js. And we had two days to get it out there. And it was a disaster.

**Gustavo Vituri:** Yeah, I'm glad that me and Jason didn't really know about this innovation token thing.

**Jerod Santo:** Oh, you haven't? Yeah... So this is the idea of when you start a new project, you allow yourself usually like one or two innovation tokens, and everything else has to be something you've done or used before. And so you can only have one new thing per project, or maybe two, if you're feeling lucky... A brand new framework, a new language, a new server side thing... That would be your innovation token is spent, and now I can't change too much in my tool set. And so that's kind of the concept of just like limiting yourself. But...

**Gustavo Vituri:** Right. I think we went negative in the React Jam, so...

**Jason McLeod:** Yeah, it seems like a really level-headed thought... I'm gonna get it out of my head right now.

**Jerod Santo:** Yeah... Well, when you're having fun, you're there to have fun, right? So... That's more like -- people use that actually at their jobs... But that's what we were thinking. Like, "Well, we're together for 48 hours, and we're coding something. We might as well learn something and try something we've never done before." It's not like we're gonna turn around and sell this to the other participants, Nick... But it was fun. It was so much fun.

\[00:41:53.15\] I love hackathons. I wish I could still do them. You guys are doing them different. That was like 48 hours in the same building kind of a thing... But this is like all online. Obviously, you guys are in different countries, and it's asynchronous, and it's a little bit longer. So I think that's more feasible. But you're still probably putting in massive amounts of work in a small amount of time, right?

**Jason McLeod:** Oh, yeah. Gustavo picks on me, because I'll be like, I'll wake up and I'll ping him, and I'll be like "Hey, so while I was asleep, I had these ideas." So I'm either not sleeping well, or not sleeping at all during a game jam. And last game jam we actually did two back to back. I don't know where that energy came from, but... Yeah, you have to give yourself time to sleep. But in the 48-hour ones, I'm bad about not sleeping, and I pay for it later. But yeah, 10 days is like the sweet spot. Because 30 days is too much, two days too short... 10 days is the spot.

**Jerod Santo:** Really cool. Well, now I'm feeling kind of self-conscious, because I feel like you guys are like wasting your time on our show right now, when you could be working on this... \[laughter\] So I guess we're very honored, but I also feel rushed to get you out of here, so you can get back to working on it.

The other thing that Zach and I didn't necessarily have was like clear delineation of who's doing what... And so that had to be negotiated. This happens a lot with startup weekends as well, where it's like you have four people, and like different skills, and who's gonna do what... And so you have like this mini, sometimes power struggle, but just confusion on communication on who's gonna actually do what. I think, Nick, if you and I were to hop into React Jam together and say "Let's do this", I think we'd have that problem, like who's doing what... But it seems like Gustavo on pixels and art and Jason on code is like a pretty good and healthy setup. Is that pretty much how it breaks out?

**Jason McLeod:** Yeah, I think so. And Gustavo is really, really good at laying out the mechanics and recognizing "Alright, if we introduce this mechanic, it either negates another mechanic, or it requires another mechanic." So I'll request that we kick off that document, and then I'll go heads down, and the next thing I know, that thing is just growing out of control in Figma, and I'm like "Oh my God, I wish I hadn't seen this, because now I'm not as optimistic, because you've shed light on things that I was probably going to get to, but I want to know that we can finish it. Don't show me all the details of what we actually have to do." So I think we work well in that way. We have that commonality of design, and just what makes the game fun... And then we can both kind of stay in our lane. I'm learning about art while he's doing it, he's learning about code while I'm doing it... But we're both able to just charge, with no impediments down our path.

**Gustavo Vituri:** Yeah, I completely agree. I can't see that being a problem. Like, if I were to code too, especially due to the difference between us in regards to career progression, right? I'm really new to programming; I don't have a background in programming, really. I'm a biology graduate, so...

**Jerod Santo:** Oh, really?

**Gustavo Vituri:** Yeah. Right? And then I got into --

**Jerod Santo:** I thought you were a C\# developer.

**Gustavo Vituri:** Yeah, I guess... \[laughs\] But yeah, that would be crazy. I would just be starting at it, and Jason would be cruising. But it just worked, right from the get-go. On other game jams and projects we did well, too. Each of us give our idea, we all get each other's idea, and see what falls from the tree, and just keep going.

**Jerod Santo:** Just keep going. That's really cool. Nick, if you and I did it, I think you would be on the code, right? You'd write all the Typescript, and all the React, and I would just be using Stable Diffusion to generate images, and throwing them at you, like "Here, can you use this?" I would be the prompt engineer, because I don't have the artistic talent of Gustavo.

**Nick Nisi:** I was gonna say that we would get to the 37th hour, the 37th straight hour, and we still hadn't decided between JavaScript and TypeScript, and we're just having a breakdown...

**Jerod Santo:** \[laughs\] And just turn our multiplayer game into a poll, where you just pick one or the other. It's like hot or not?

**Jason McLeod:** \[00:46:00.22\] Oh, man... Take me back. \[laughter\] No, it's funny you mentioned that, because you can tell, in like a development sense, who hasn't done a jam, because they'll obsess over making the perfect architecture. And it's like "Man, we've got 10 days. You need to get your spaghetti going, and just get something that will run." There are some friends of mine who I think are brilliant, but I think I know better than to bring them into a game jam, because we'd be sitting there, figuring out if we want CamelCase or Pascal case, stuff like that.

**Jerod Santo:** Right. Just bike-shedding the entire time.

**Jason McLeod:** Yup.

**Nick Nisi:** There's a really valuable lesson there, just like in the power of constraints. Like, when you really constrain yourself like that, the creativity can just shine, because you have something to bash it against, ad then you see what comes out, and it can really unlock things. And games are really powerful, too. When I was doing that Startup Weekend game, I remember the first night; it was like 3:30 in the morning, I'm at somebody's office because they had a key and we could go up and all work there, and I got like the sprite, like actually walking back and forth on the screen... And it was the coolest thing ever. And I didn't care that it was 3:30 in the morning, and I hadn't slept in forever. I just was having so much fun.

**Gustavo Vituri:** Yeah. Getting those first stage POCs is just pure satisfaction. Jason is so good at just shooting them up; give him an hour and he will have Chop-Chop version 0.0.1, you know? And this was fundamental to our progression during the Jam, really. He would shoot up like two, three POCs during a single day, and we will just test it out and get things right.

**Nick Nisi:** Yeah. And just like doing something that is not just like forms on a web page, or you know, a web page at all... Like, "I'm writing to Canvas, and it's doing this, and it's \[unintelligible 00:47:51.26\] Just getting out of your comfort zone on that is -- ah, it's so fun.

**Jason McLeod:** Yeah. And it goes a long way to know that what you're working on is -- that you control the scope for it. And if you have to make code smells and hacky code, it's like, "It's okay, this is Game Jam. I'm here to learn. I'm not going to have to support my family on these lines of code later." So it being able to make it disposable really helps you get past that "It has to be perfect" situation.

**Gustavo Vituri:** Yeah. Sometimes we do \[unintelligible 00:48:24.10\] really. React Jam - we left ourselves some time to read the rules just at the end of it. When \[unintelligible 00:48:33.19\] contacted us and was like "So, about the rules... Did you guys even read them?" We had a file that was three times the size permitted to the Jam, and... Yeah.

**Jerod Santo:** Oh, wow... Yes, please do read the rules. That's usually a way of knowing how to play the game. But you're just there for the fun anyways, right? Build a game and hope it complies to the rules. So the current Jam - this is the fall 2023 - is happening now; 10 days left, as we record. It just got kicked off. If you're listening to this in the feed, that means there's probably three days, maybe a couple of days left... Maybe too late to have a real run at it, but probably time at least to check it out, maybe start hacking on something, and maybe learn a thing or three, so when the next one comes around - which, it looks like they're happening more often than annually - then you'll be prepared to really make a run at it.

\[00:49:29.09\] The theme this time is classics with a twist. Some real cash prizes... So first place gets 1,000 bucks, 500 the second, 100 bucks to third. And that's based on playtime, which I think probably is sort of the best way to do it, because now you're talking about people's actual interest, versus just what they say they like. That being said, it does put more emphasis on Gustavo's high school hack move to get the high schoolers playing... But there's also the best game prize, which is based on the highest score across fun, theme and presentation. That requires judges, of which I am one. So guys, if you want to start buttering me up now, feel free. Submit compliments here. Just kidding... Because we are in support of React Jam this year. We are sponsoring by providing -- in addition to that, you get a Changelog Plus Plus one year free subscription, which is our membership program, which gets the ad-free feed, as well as bonuses, and all kinds of cool stuff. I think you also get a license to Wallaby.js and Take Us to React Brussels. So lots of community folks throwing stuff in to sweeten the pot.

Fellas, anything else we didn't talk about that you wanna make sure we get out there? Or do you want to just hop out of here and get back to jammin'? What do you think?

**Jason McLeod:** Oh, we're always jammin'... No, I don't know. I think that we talked about some of the other projects we've worked on... Gustavo and I are working on a little -- that browser MMO game. It's called Brave. It's at brave-game.com. It's all written in React and Node. So it definitely qualifies for a lot of the same technologies that we cover here. But yeah, I think we're really stoked to have the opportunity from the Rune team, React Jam team, and of course, you guys. Chop-Chop was a lot of fun for us. We didn't expect all the networking that would come from it, but here we are on a podcast... So it's pretty cool. I'd say anybody who's on the fence about joining a Jam, definitely do it, even if all you plan to do is learn something... Because we certainly have.

**Jerod Santo:** And Nick, what do you think the name of the game that you and I develop together is going to be?

**Nick Nisi:** Hm... I should have been thinking about this.

**Jerod Santo:** No, I like to put you on the spot. It's way more fun.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** It's official, we are not developing a game this year. When we think of a name, we will maybe throw our hat into the ring. But besides, I'm a judge, so you know, conflicts of interest and all that. Alright, let's call it a show. ReactJam.com. Links to all of Jason and Gustavo's games in the show notes; probably the easiest way, so you can check out Chop-Chop, as well as the MMO they're working on, and the other stuff they're doing as part of their two-man game company. Fellas, best of luck building out your pipe dream. I hope it becomes a reality. And Nick, I've stalled for long enough. Did you think of one?

**Nick Nisi:** \[laughs\] Oh, I'm going in so many places... Ruby... Like Ruby, like between a rock and a hard place...

**Jerod Santo:** That's our show, folks. \[laughter\] For Nick Nisi... I'm Jerod Santo, this is JS Party, and we will catch y'all on the next one.
