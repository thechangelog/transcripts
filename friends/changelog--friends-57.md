**Adam Stacoviak:** I'm going to steal your words, Jerod. How deep does the WebAmp/WinAmp rabbit hole go? That's what we want to know. Jordan, you're back. It's been too long. How are you doing?

**Jordan Eldredge:** Doing pretty good. It's a sunny day here in the Bay Area... Starting out a little early to meet with you all, but glad to be here and doing well.

**Adam Stacoviak:** What time is it for you? 8 a.m., I guess?

**Jerod Santo:** I was gonna say, are you a night owl or what?

**Jordan Eldredge:** Well, you know, 8 a.m., pretty early for software engineers...

**Adam Stacoviak:** True.

**Jerod Santo:** Fair enough. Glad you set your alarm for us this morning. Happy to have you. Still, after all these years, still hacking on Winmp, dude. Or WebAmp, or just the world of Winamp. You're still into it.

**Jordan Eldredge:** Yeah. So it's been my little side project. Started back in 2014, I was looking it up this morning...

**Jerod Santo:** It's a decade.

**Jordan Eldredge:** Yeah, exactly. That's crazy. I tried to replicate Winamp, this classic Windows/Napster era MP3 player in the browser... And yeah, ten years later, still fiddling with things, either directly on that, or building on top of it... It's been a little playground for me to explore all kinds of different things.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I'm sure we'll touch on this, but that's what I love most about the way you've leveraged this project, I would say. Leveraged is the proper word, because you've explored different, as you've said, sub-projects because of WebAmp/Winamp, and this fascination, I suppose, with the nostalgia of it, but then uncovering more and more "How can we take more and more of this to the browser? How can we take the animated cursors, and the different things that, and how it interfaces with WebAssembly, and TypeScript?" and all these different problems, I guess, that come about. And then, obviously, the partnership, which I guess you could talk about, with the Internet Archive and how that played out.

This has been this interesting project for you. I imagine you'll go down in some version of history as the WebAmp/Winamp person who just cared enough to take it there.

**Jordan Eldredge:** Yeah, it's been a little... I joke with some friends that it's been my back-filled university education in computer science.

I didn't go to school for software, and this has been, I said, a little playground, where anytime I'm interested in some topic, I'm able to draw a line... So be that playing with things, just the browser APIs when I was just getting started, all the way through to file encoding and decoding, and eventually compilers... I think it's just -- you have enough context in one area, and then whenever something new comes along, you're "Oh, I can connect that back to this thing." And I have some context there, which either gives me an excuse to play with something, or things that, and it's just been really great.

And yeah, it also led to all kinds of interesting collaborations and opportunities to do work, that actually ended up being kind of impactful in terms of -- I said, the partnership with the Internet Archive, where we're able to preserve Winamp skins, which are these themes that people could create for Winamp, and did, in vast quantities... And yeah, that's felt an actual meaningful thing to do, to take all this work that amateur artists and people just getting started in their careers, so many people who work in design now, or even software, got their start tinkering with this stuff... And to be able to preserve it has felt really cool. So both an education for me, and accidentally some useful outcome for others.

**Jerod Santo:** \[08:04\] Well, Winamp has a lot of nostalgia for many of us, especially - I would call us age mates; those of us in 30s and 40s, who grew up really in the Web 1.0 era. In the Napster era, for sure. Winamp and Napster were, for me at least, two programs that were just two peas in the same pod. You'd download Napster, and listen to it in Winamp, and... Too much free time as a youth, and not really a robust Internet, you know... There wasn't just streams of video content that you could just flip through and watch... So you really had to kind of tinker and toy to entertain yourself. So you're listening to that new album that you shared of your own CD, and then downloaded off of Napster from yourself, because it was all legal, as we all did... And then you're just tweaking your look. I mean, it was very much the digital equivalent of pimping out your ride. Although because it's on a desktop in the '90s, the only people that are going to see it are those who come over and sit down next to you. But still, it was still so -- what's the word? I don't know, just...

**Adam Stacoviak:** Fun?

**Jerod Santo:** Enjoyable. There's a word for you - it was just so much fun to do that. But I'm amazed at how many there actually are. I mean, the post that caught our eye, or Adam's eye I think this time, was the bizarre secrets you found investigating corrupt Winamp skins. And we want to, of course, hear all about that. But one of the things that you talk about is just how many Winamp skins there are. Like, your Winamp museum, your skin museum has 100,000 or something that? How many are there?

**Jordan Eldredge:** Yeah, so we started this partnership with the Internet Archive. So I was trying to find different Winamp skins to test my WebAmp project, and I was "Oh, I've got to find all these different Winamp skins to find all the edge cases." Because I'm basically reverse-engineering this file format. And it's not documented, so the examples in the wild are the spec. And that led to me collecting a few thousand, and then I was "Oh, these are falling offline." And websites that used to host them are -- no one's paying attention to them... And so I was "We should try to grab up as many as we can." And someone put me in contact with Jason Scott at the Internet Archive. And so we started a collection there, and they actually did an integration where the WebAmp player actually loads up on the Internet Archive itself. So you could actually listen to all their audio files in WebAmp.

But then that announcement created this flywheel where people were getting in touch and they're "Oh, I have a collection of these." And that's what sparked the Winamp Skin Museum. And yeah, we just crossed 100,000 unique Winamp skins. Now, that's unique based on their MD5 hash... So there are some re-encodings, or version 1.1.whatever... But yeah, it is a pretty -- I think a much larger number than I would have expected when I first started out on this journey.

**Jerod Santo:** That is a surprising number. And I wonder if those are all ancient, or if it's -- is there a retro Winamp skinning scene? Or are you just the one guy who's out there still doing this stuff?

**Jordan Eldredge:** I think to the extent that there is, it's three people in the WebAmp Discord... \[laughter\] But when we did the partnership with the Internet Archive, \[unintelligible 00:11:28.10\] who did some of the great classic Winamp skins... I think most notably there's a great Zelda one that he did... And he, to celebrate that partnership, he made an Internet Archive Winamp skin, which is an ode to the building that they inhabit in San Francisco. It's really great. So there are still here and there people come around and do one or two, but... Yeah, definitely dominated by historical artifacts.

**Jerod Santo:** And what makes up an actual skin? I read it's just as a zip file, but certainly, if you were to describe the spec, what would that spec say?

**Jordan Eldredge:** \[12:07\] So like many file formats, it's really just a zip archive by another name. That's the wrapper, I guess you could call it. And then there's a convention of files inside of it, which are actually just sprite sheets. So they're Bitmap files, and each file contains all the buttons for the main window, but in a very particular layout. And that's the main bulk of it, is these sprite sheet images. But then there's also some INI files for "What colors should the text be?" And there's even a region.txt file, which says "Define some polygons of which areas of the skin should be transparent." So there's a wide variety of just little different kinds of things that are in there, and they all have file names that they're expected to be located at.

**Jerod Santo:** And do how people figured that out originally? Did they reverse-engineer the default skin, or were there instructions on how to build a skin coming from the Winamp folks?

**Jordan Eldredge:** So I think the backstory is that originally they didn't have anything that. They just distributed it as a binary. And then people in the community started kind of game-modding. They would unpack the binary, find where these image assets were, modify them, and then redistribute it as a new exe. And they saw enough people doing this, they're "Well, this is a danger." \[laughs\]

**Jerod Santo:** I was gonna say, that's not safe at all...

**Jordan Eldredge:** Yeah. And they're "Well, there's this latent interest in doing this", which I guess speaks to what you were saying earlier about this era, and how we related to our music in that Napster era. And I think it really - you said, it's people of our generation that were coming of age, and having... I think as teenagers we have a special relationship to the music that we listen to in our teens.

And I think our generation had a very special time there, that Napster was this completely unprecedented musical transformation. And as we lived through that, our experience of that music and how we listened to it was really personal. And so it makes sense that people would want to tweak it out and make it their own.

And yeah, so that was the original. And then I think there was minimal documentation from the actual Nullsoft Winamp people, and the community just -- there was a canonical... I forget what it was called. A tutorial that everyone would reference. Maybe it was in the forum, or something, that that one user maintained.

**Jerod Santo:** Yeah. It's hard to overstate how groundbreaking and culture-changing Napster really was for us. It was the killer app of the internet for teenagers. It was the reason that I got a computer when I was younger. It was "I need to listen to music." And my friends were doing it. And the stealing part wasn't even the point... It was just all of a sudden you now had unfettered access... Which is what everybody has today, so we take it for granted. Like, of course if I could pay $9.99 or $15.99 or whatever it is a month, and be able to listen to every song, pretty much, in the world, I would have just done that instead of the whole Napster game... Because it was also a huge time sink, and failed downloads, and you'd get the file and it's a really low bit rate version, and you're "Ah..." And then you've got to spend all this time futzing with the ID3 tags to make it look nice... It was a ton of work for us. Thankfully, we had free time. But before that, access to music was not straightforward.

**Jordan Eldredge:** \[15:54\] Yeah. I think especially as a teenager, right? You were limited in your funds, and you have to make your really strategic moves as to which album you're going to get... And yeah, I think it really did completely change how we interact with music. And I think it was both the unfettered access to just everything, and obviously the price point was attractive...

**Jerod Santo:** Of course.

**Jordan Eldredge:** But I think also there was a feel of it, too. The way as a teenager you feel when you pull in one over on the man... And I think you tie that with music, and I think teenagers their music to be a little edgy, and counterculture...

**Jerod Santo:** Rebellious.

**Jordan Eldredge:** ...and this played into that, I feel like.

**Jerod Santo:** Yeah, for sure. But the alternative was terrible. I mean, you'd buy an album... I guess singles were a thing, but you'd spend $20 to $30 - okay, used $9.99 - for an album, and you would only know one song a lot of the time. You'd hear a song on the radio, and of course you can't just hit repeat or anything that. You've got to either call in and request it, or hope they just play it again.

**Adam Stacoviak:** Oh my gosh, Jerod. Can you remember actually calling into a radio station and waiting on hold to be --

**Jerod Santo:** Absolutely. Yeah.

**Adam Stacoviak:** Gosh, nobody in this world today gets that.

**Jerod Santo:** And I did it way less. I remember my sister did it more than I did, because she was three years older, and... I don't know. I had a fear of phones, calling strangers...

**Adam Stacoviak:** Really?

**Jerod Santo:** ...it was difficult for me at that age. Yeah. Not people my age, but older people. I don't know, it was anxiety. "I don't know what to say..." But calling in a radio station was pretty straightforward, because all you'd do is just request the song you wanted. Still, I didn't do it very often, but my sister sure did it quite a bit. And yeah, just hoping they play your track.

But then you think, "Okay, here's a song that I like... I'm going to go acquire that song so I can listen to it." And you have to go spend $20 to buy an album, and 9 times out of 10 that's the only good track on the whole album. I mean, that's why we love albums that are good so much, because -- it's amazing, back then, to go buy an album and be "Holy cow, I can listen to all these songs", when I really wanted the one I knew. And those are why I think our generation also has a album fetish, so to speak. We care about albums as an artifact, more than songs. Not more than songs, but in addition to the songs individually.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Whereas nowadays, a lot of new artists don't even release albums. They just release singles over and over again, and whatever works. But for us...

**Adam Stacoviak:** And they're called drops now.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** Right? Not releases, they're drops.

**Jerod Santo:** Is that what they call them?

**Adam Stacoviak:** I believe so. I believe so.

**Jordan Eldredge:** And all of that is downstream of this Napster, right? Now the unit of distribution is the file, and not the packaged CD. It was at some point inevitable the moment Napster came on the scene.

**Jerod Santo:** Yeah, there was no going back.

**Adam Stacoviak:** Do you have a favorite album, either of you, that you can know of "This is end-to-end, I can push play on track 1, and stop at track 10 or 11", which is usually the number of tracks in an album... Maybe a few more. Maybe it's 8. Somewhere between 8 and 12, that you can literally -- I mean, I have one in mind, so I'm curious if y'all have one in mind.

**Jerod Santo:** It's favorite movie. I can't do just one. If you gave me a genre, or an activity...

**Adam Stacoviak:** Classic rock.

**Jerod Santo:** Classic rock. See, I can't even do that. That's too big of a genre. But if you said "Okay, you're going to go lift weights", then I would probably say ACDC, Back in Black.

**Sample**: \[19:32\]

**Jerod Santo:** Because it's the perfect kind of meathead, weightlifting, rock/jock anthem. That's a perfect one, front to back, in my opinion. But there's so many that it's very difficult to say. But Adam, you have one in mind, so please do...

**Adam Stacoviak:** I'm curious about Jordan. I want to put you on the spot, Jordan. I don't mind telling mine, but I think it's the best ever. So...

**Jordan Eldredge:** Well, I guess in keeping with the Napster conversation, I feel my musical interests were always a little -- you know, not the jock anthem, but the off-the-beaten-track things.

**Adam Stacoviak:** Really? Okay...

**Jordan Eldredge:** And I think probably my favorite artist is - I don't know how well-known he is... He has a cult following, but Tom Waits, and his album Alice.

**Sample**: \[20:23\]

**Jordan Eldredge:** And actually my main love of file sharing was related to opera. So I studied music in college, and I was doing classical singing in high school, and so I was collecting all these opera recordings. If you were to ask my very favorite recordings on disc, it would probably be an opera recording.

**Jerod Santo:** Wasn't Tom Waits the guy that Heath Ledger was channeling for his version of The Joker? I've never heard that before, but I can absolutely tell you that that's likely true, having seen the movie.

**Adam Stacoviak:** Really?

**Jerod Santo:** Yeah. I think that's the case. I think he came out and actually said that he was inspired by Tom Waits, and the way Tom Waits talks and sounds... Which is a very distinct and very interesting just way of communicating with people. And yeah, once you hear that, then you watch The Joker, Heath Ledger, and you're "Oh, okay. It makes sense." But Adam, you were going to tell us the best album of all times?

**Adam Stacoviak:** I'm going to pause for one second and go one layer deeper on what you just said there... So quick cursory search lands me on, of course, the awesome website Reddit...

**Jerod Santo:** Yes...

**Adam Stacoviak:** And if this is accurate - it's two years ago - it says "A 1979 Tom Waits interview that some believe inspired Heath Ledger's Oscar-winning portrayal of The Joker", and this is showing it; so I'll put the link in the show notes, of course. And it says, "While Heath Ledger never confirmed this, the similarity between the vocals and mannerisms is uncanny."

**Jerod Santo:** I've seen that video.

**Adam Stacoviak:** I haven't watched it. I'm just kind of watching it in silent mode, so here in the live version of the show, while it's being recorded, I can't confirm this, but I'm going to --

**Jerod Santo:** Queue it up for yourself later. I've seen that video, and it is uncanny.

**Sample**: \[22:27\]

**Jerod Santo:** It's what convinced me. I thought maybe he actually came out and said it, but... Yes.

**Adam Stacoviak:** And he may have, because this is not -- I said, it was one...

**Jerod Santo:** It's Reddit, you know?

**Adam Stacoviak:** Yeah, it's one link. I just clicked one link. So there's at least some version of confirmation there. Okay, so my favorite album of all time - literally of all time; I can put this in, and it puts me in a mode. Led Zeppelin, album number four, Zoso.

**Sample**: \[23:39\]

**Adam Stacoviak:** Black Dog, Rock and Roll, The Battle of Evermore, Stairway to Heaven... I mean, it's a forbidden track. You can't play that on guitar in Guitar Center. They'll throw you out. Misty Mountain Hop, Four Sticks, Going to California, and Where the Levee Breaks. Eight tracks. Amazingness. That's their best album ever.

**Jerod Santo:** Sergeant Pepper's anybody? Come on.

**Adam Stacoviak:** I mean, I'm a Beatles fan.

**Jerod Santo:** That's too obvious for Jordan.

**Jordan Eldredge:** I'd probably go Revolver...

**Jerod Santo:** Oh, really? I can't listen all the way through to Revolver myself, but... There's a lot of variety in the Beatles. That's why everybody likes them. Something for everybody.

**Adam Stacoviak:** Side note, I did hear that Jimmy Page destroyed his voice because of his voice. There you go.

**Jerod Santo:** What's that mean? He destroyed his voice because of his voice?

**Adam Stacoviak:** Well, he sang -- Jordan, you probably know this, because you probably pay attention as a singer... But I've heard that Jimmy Page has this kind of screechy voice. He screams. He does some quite loud singing, and I think he destroyed his voice over the years. And as the band got older, they kind of had to stop touring, because his voice just wasn't the same that people showed up for.

**Jordan Eldredge:** Yeah, that's pretty rough. I think the voice is a delicate instrument, and if you've got a rough touring schedule and you're doing that ambitious, maybe not safe -- as a classical musician, you spend a lot of time figuring out how do you project over an orchestra without hurting yourself... And I think you blow up as a rock musician. I don't think you have any of that training, or also any of that patience, or willing to compromise on your sound. You've got to make the sound you want to make.

**Jerod Santo:** How did Mick Jagger do it? Because man, the Stones toured for so long. How does one man's voice survive that level of abuse? I don't know.

**Adam Stacoviak:** A lot of tea, with lemon, and honey...

**Jerod Santo:** \[laughs\] That's what I was thinking. Earl Gray...

**Adam Stacoviak:** And maybe, I would say a voice coach can help you utilize your voice...

**Jerod Santo:** Sure.

**Adam Stacoviak:** Jordan, this. I'm sure you've had voice coaches, or have been one yourself... The better you can understand the properties of your voice and how to protect them while utilizing them, I think is what some folks just don't get. But I can't imagine, why would Jimmy Page not have that? He's a rock star.

**Jordan Eldredge:** A whole lot of singers, I think -- it may be that part of your sound is the production mechanism that isn't healthy. And untangling how do you compromise -- you know, is it going to compromise your sound to make it healthy? And finding that balance between "What am I willing to compromise on in terms of how I want to sound, and how I want to be \[unintelligible 00:26:25.01\] Do I have the control over my physiology to do it?"

**Adam Stacoviak:** Yeah, there's certain sounds your voice can produce... I think what you're saying is there's things you can do that becomes your signature. And I was loosely saying Sia, because she's well known for those breaks in her voice. And those breaks is where obviously -- it's called breaks for a reason. I'm sure it's probably not good, because there's something happening in your vocal cords that is not good. But it's also part of her signature sound as a singer. That's why I her. I her because she can really hit those notes while also breaking her voice, and it has a unique, Sia-only sound. Yes, I am a Sia fan.

**Jerod Santo:** I already knew that much. I've got no problem with it, man.

**Jordan Eldredge:** No room to talk, because being a Tom Waits fan -- if anyone hasn't heard him, his voice is like... If you look up quotes online describing Tom Waits' voice, there's a number of incredibly colorful descriptions... But it's "whiskey and broken glass", or something...

**Jerod Santo:** Yeah, it's not the most \[unintelligible 00:27:27.00\] enjoyable sounds that he makes... But I said earlier, it's just an interesting sound. It's different.

**Adam Stacoviak:** What is his most popular song? I've gotta admit, I've never, to my knowledge, heard of the name. I may have heard of the music and heard the music, but I just don't know the name.

**Jordan Eldredge:** Down in the Hole. I think the original -- if you watch The Wire, the intro music was a song of his called Down in the Hole. And I think each season they did a different artist covering it, but I think the first season was him. So that one might be more recognizable to folks. But yeah, it's this very Louis Armstrong-esque kind of raspiness. But it has a lot of character. Probably not great for his voice though.

**Adam Stacoviak:** \[28:12\] Yeah. Well I'm listening to his most popular track and it doesn't ring a bell. I'm gonna have to go back in time and listen to some of this, because I was just never exposed to Tom Waits, unfortunately.

**Jerod Santo:** There you go.

**Adam Stacoviak:** What a sadness, man. He sounds pretty cool though. Go ahead, Jerod. You've got a layer deeper? Go ahead.

**Jerod Santo:** Well, I was just speaking to Jordan's interest in more obscure art... I think that was one of Napster's strengths, that when Napster went away, and things that came after, specifically BitTorrent, for instance - we talk about the nature of protocols and how they inform certain things. BitTorrent is a protocol that was better the more people had the files.

Whereas Napster was a situation where you could find really obscure, different, live stuff on Napster. And then I found later on, on BitTorrent for instance - okay, if you have one person seeding, you could still do it, but there was kind of this crowd effect on BitTorrent, where everybody rushes to a thing... Which is really great for big crowds, because the more people are actually interested, the easier it is for everybody, the way it distributes out the downloads. You can grab this part from this person, this part from that person, and stitch it all back together again. I just found it really difficult to find obscure music, because I also have very eclectic tastes. I weird stuff that's out there, as well as the classic rock stuff ACDC. And man, you could just find anything on Napster. But then after that there was kind of this down period where it was harder and harder to satisfy that musical itch... Because you just get bored of the same stuff. Especially when I was young, I just got so bored. Whereas now, as an older person, I kind of just listen to that stuff that I found back then and I don't get bored as much. Nostalgia just carries me through. I'm still listening to the same stuff I found when I was 16, 17... But when you're young, you just want new, new, new, new, new. And first of all, more stuff is new to you, because you have less experience with music... But nowadays I wonder how it is. I guess everything is just available, so...

**Adam Stacoviak:** I think music discovery is so strangely -- I wouldn't say broken, but just never fixed. It's never been "Here's the way you find new music." I don't feel that's even possible. There's nothing in Spotify that attracts me. There's playlists that are made for me based on things, but they're still not helping me discover. I've never discovered Tom Waits, given that I'm a diehard classic rock, in that era fan... And I think he's probably in that realm, to some degree. Nothing's ever been great for discovery.

**Jerod Santo:** Classic, for sure.

**Adam Stacoviak:** Yeah, definitely classic. I'm not sure about rock.

**Jerod Santo:** More folky?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** How would you genre-fy Tom Waits? Maybe bluesy, folky?

**Jordan Eldredge:** Yeah, I guess the cliché would be that he transcends genre.

**Jerod Santo:** Sure.

**Jordan Eldredge:** But yeah, definitely blues, and rock, and...

**Jerod Santo:** Yeah, raspy...

**Jordan Eldredge:** ...maybe some barroom jazz kind of stuff...

**Jerod Santo:** Right.

**Jordan Eldredge:** Yeah, I think it's interesting how all our algorithms are designed to solve that problem. And I think to some degree they do. I feel if you ask Spotify to play some artist and it runs out of tracks for that artist, it'll be "I'm just gonna make up some more tracks to play for you, that I think are similar." And I feel I have discovered some things in that way, which is interesting.

I think we had these systems of libraries, and record stores, and they had some discoverability built in, but only as an accidental artifact of "We need to find somebody to let you find the thing you want to buy." And in the process we have to organize them, and then we're gonna end up with things organized by genre, and you'll stumble across someone adjacent to the thing that you're looking for. And I think you see this in bookstores too, where you're browsing along and you're "Oh, look." I'm in the sci-fi section and "I've never seen this before. This looks interesting."

\[32:16\] And then when we went online, and everything -- it's "Well, if you want the thing, you just go straight to the thing. You don't need to waste all this time browsing through." But along the way we shed this accidental piece of "Well, we had this browsing-based discoverability", and in the name of efficiency we let that go. Which I think is right. I'm not passing a value judgment on it. But we're now "Okay, well, we accidentally had a solution to that problem, that maybe wasn't ever designed and it wasn't necessarily perfect, but we dropped it." And now we're "Okay, how do we backfill that?" And I think this algorithmic solution is what has emerged.

But yeah, it does make you wonder if there's better, or maybe those algorithms will get better over time... But it is interesting that we had it as an accident, and now we have to design it from scratch as an actual solution.

**Jerod Santo:** Yeah. Plus we have a gluttony of riches at this point. I mean, there's so much music that there's something for everybody, and there's a lot for everybody. I mean you talk about going off the end of a playlist and it just keeps playing. I mean, I hear good new stuff all the time, but I don't really stop to catalog and be "Who's this person?" and I'm going to go ahead and dive into their whole back catalog, I used to. Maybe that's just a function of age, or time availability as well. But there's another good song coming on after this. And so maybe things are less sticky. Especially when you're listening to -- a lot of the music I listen to is while working or while coding, and... I mean, lo-fi and electronic and stuff -- like, that stuff all just kind of flows into one long live track, you know... I can't very easily break out individual pieces and say "Wow." Whereas back in the day it was just -- well, Sandstorm is all you had access to, so we're all going to Sandstorm, aren't we?

**Jordan Eldredge:** Yeah, in the album era you probably did form a much closer relationship with the artist, because you're "Well, this is my one album that I'm getting this month", or whatever.

**Jerod Santo:** Oh, yeah.

**Jordan Eldredge:** And so I'm going to live with it, and then I'm going to make a really intentional decision about what I'm getting. And now it is so "Okay, well, on to the next thing." It'll be interesting to see how the younger generations - I say as an old man - will have a really different relationship with music, that is maybe more track-based, and just "I this song. I don't even know who the artist is", or... I don't know, it'll be interesting to see.

**Adam Stacoviak:** I think there's also this connection... There was actually an announcement, I believe, between -- it was Meta's music deal. Jerod, you may have seen this in Snacks today. "Universal Music Group and Meta expand their partnership as labels lean on social media." So I think today's exposure for -- I mean music is culture, or it's representative of culture, at least... And the algorithm, and what I was talking about, discovering, to me is some version, some pulse towards culture. And that culture could be "Hey, I'm XYZ years old, so my culture and desire to tap into it is different than somebody else's." But it's this idea of connecting me to culture that I find relevant to me, or culture I find worthwhile pursuing, or understanding more of, or being curious about... But this Universal Music Group deal with Meta I think is representative of how -- I don't want to say young people either, but I feel just generationally how we tap into or come to know more music. For example, I didn't know the Watermelon Sugar song from Harry Styles until I heard it via TikTok, and then it was blended. And I'm going to put it in this -- well, maybe Jerod you can, because you'll do the show... The mastering at least.

**Sample**: \[36:09\]

**Adam Stacoviak:** We have a track that we inspired by Watermelon Sugar and Seaside. There's this remix that was only on social media, only really available on social media. It was never an official track. I'm not even sure if Harry Styles and this other artist that I have no idea who the name is of this person - talking about how we don't connect with the artist, because it just goes by so fastly... But at the same time, I thought it was a really cool blend between Watermelon Sugar and this song called Seaside. And anybody who hears it, you would think that that version, that remix is the original. And if you were me, the first time you ever heard it, you only heard this remix version, you're "That's the OG. That's the original." And that's not true.

But the point I'm getting at is that it's my exposure to this new music. Even Makeba... Gosh, who's heard the song Makeba?

**Sample**: \[37:14\]

**Jerod Santo:** I have...

**Adam Stacoviak:** Okay, good. I didn't want to be alone here.

**Jerod Santo:** Jordan?

**Jordan Eldredge:** I may have, but I don't recognize it.

**Adam Stacoviak:** It's very catchy.

**Jerod Santo:** Well, it's a viral thing right now...

**Adam Stacoviak:** It's a very catchy song.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** There's several that, that at least I've discovered, not through pushing play on Spotify, or WebAmp, or Winamp, or some different version of listening to music. It's been through a swipe, or a click, or something that, and it's been the track to someone building something, or someone making cookies, or whatever it might be. So that's kind of interesting, how music exposure has not come from pushing Play or an algorithm, or a playlist, it's come through interest, and following of different creators, or influencers, or whatever you want to call those folks. It's that cultural press, or swipe that happens, that the music comes with it. And I think the labels have now found the new Napster is a swipe away on social media. And it still is free. Like, you're not paying necessarily for TikTok or Instagram. You're there, and your data is the payment, so to speak.

**Jerod Santo:** Yeah. The social media, specifically TikTok/Instagram reels, and then probably in third place YouTube shorts... But as I post our stuff to these places, it's all the same content. People at this point are just posting it to everything. But that's definitely become the new exposure for new artists. You want to go to TikTok viral. And so that's changed the actual music as well, because now people are "Then what do we do? Well we feed the beast." And they're "Well, what does the algorithm want?" Well, these are the kinds of songs that are catchy, and short, and have 0.7 seconds before the drop, or whatever it is you're going to get. There's people out there trying to figure it out, and writing music for that... Which you can kind of say is a shame, because you want to write music for other reasons, but I think it's just a fact of history that the medium very much is the message, and it always has been. So when people were making albums, they were writing albums. And when people are trying to get TikTok-viral, they're going to make TikTok music. You know, it's just kind of how it probably always has been.

**Jordan Eldredge:** \[39:36\] Yeah, I mean, even going back to classical music, right? The publication of music to be played in the home - it's like, the original album was a book that you would buy and play at your home piano, and then that goes all the way through to, you know, how did artists write their music to fit on an album. Well, they had to think about their music as a cohesive, nearly hour-long piece, or whatever... And maybe that was great; maybe that inspired some artists who were great, and that was how they would have wanted to create anyway... But then we got to the radio play, and it's "Well, now you've got to write for the radio", and we're now in our new era.

But I think there's something interesting about the -- you were saying discovery of music being both personal, but I think there's also this longing for some kind of... You know, as we have gone, everything is personal on the internet. Everything is tailored to you, everything is exactly what you want, exactly tailored to your tastes... There's a gluttony of options available to you, tailor-made to exactly your tastes... But I think then we also crave this connection of "Well, what are the pieces that pull us together, that we can sit down in this podcast and have things in common?" "Oh yeah, the Watermelon Sugar song. Yeah, we all know what that is." And I think those are two different pieces. There's "What is the thing that is perfectly going to resonate with me?", but also "What is the thing that I'm going to get to talk about with my co-workers?", or in the schoolyard, or whatever it is.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Schoolyard. Nice. The playground. We're on the playground!

**Jordan Eldredge:** Well, for the youngsters...

**Jerod Santo:** For the youngsters out there in the schoolyard.

**Adam Stacoviak:** Gosh. Well, I mean, that brought up a memory, literally as you said that. When I actually -- I said playground; that brought the memory up, but you brought the memory up because you said what you said... Full backstory. I remember the very first Guns N' Roses album when I was in 5th or 6th grade, on the playground. Talking to my good friend, Jason Kolek.

**Jerod Santo:** Shout-out to Jason.

**Adam Stacoviak:** We were on the swing set, we were talking about Mr. Brownstone, or whatever... Like, that's crazy, how far back that goes for me to remember that album. And I'm still listening to that album, almost to this day. Not on the daily, but I will definitely turn on Welcome to the Jungle and be a very happy person. you said, Jerod, "Let me go lift some weights", or throw some kettlebells with that track, because it's very rocky.

**Jerod Santo:** For sure.

**Break**: \[42:03\]

**Jordan Eldredge:** Do you remember who told you about Napster? Was that on the schoolyard as well? I think for me it was in the yearbook, whatever room the yearbook class was in. I was talking with someone there and there was a computer, and they're "Oh, look at this thing!"

**Jerod Santo:** I remember mine as well... But even more distinctly, I remember my very first exposure to grunge music, and Nirvana in specific, because I went to a birthday party... I think it was 5th grade going into 6th grade, so going from grade school into middle school. And it was a birthday party with some people that I didn't know quite so well, so it was kind of a new group of kids. And up to that point, I was basically listening to what my sister was listening to. She's 3 years older, and a girl, and so she liked boy bands. I mean, it was New Kids on the Block, and that kind of stuff. Boys 2 Men, a lot of R&B, stuff that. So prior to that, my only tape - which now I'm dating myself, I had a tape... Of I think Aladdin, which - good tunes for Aladdin. But you know, that's the kind of music that I was listening to. Aladdin and New Kids on the Block.

**Adam Stacoviak:** Aladdin, the movie Aladdin?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Okay.

**Jerod Santo:** You know, it's got a great soundtrack.

**Adam Stacoviak:** It does.

**Jerod Santo:** You've gotta check it out, dude.

**Adam Stacoviak:** Yeah, I'm down.

**Jerod Santo:** Robin Williams is on that... Lots of good people.

**Jordan Eldredge:** I recently reintroduced that movie and album to my 8-year-old daughter, and it holds up.

**Jerod Santo:** It's really good. Yeah, really good music.

**Sample**: \[46:27\]

**Jerod Santo:** But I go into this birthday party and the very first time I heard Nirvana, specifically it was -- In Utero was the album. It was not Nevermind, which is what most people were spinning. Smells Like Teen Spirit. But this was In Utero. And I just couldn't believe. I'm "What are these sounds?!"

**Sample**: \[47:01\]

**Jerod Santo:** But I also had to act "Oh yeah, I know these guys." You know, just playing it cool. I had no idea. I was listening to Aladdin on the way over. And from then on out I was a Nirvana boy for two and a half years, until I found Pearl Jam, and Stone Temple Pilots, and the whole grunge scene really just swept over me when I was in middle school.

**Adam Stacoviak:** Oh, yeah. STP for life, man.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Pearl Jam for life. Absolutely. Evenflow, right?

**Jerod Santo:** Oh, yeah. Pearl Jam is still out there. They're still doing stuff.

**Adam Stacoviak:** Eddie Vedder, man. Slaying it still yet. I don't know how they do it.

**Jerod Santo:** Unfortunately, Nirvana and Stone Temple Pilots had unfortunate ends.

**Adam Stacoviak:** Yeah. I mean, that's how it works out, I guess. Speaking of tape, or a cassette tape, I should be more specific... That Zoso album was -- I owned it on tape. And you had to flip it, right? You had to get to track 5 --

**Jerod Santo:** And sometimes you had to stick a pencil in there and rewind it? Did you ever do that, when it gets --

**Adam Stacoviak:** I suppose. I think I had my Honda CRV -- no, CRX. Not CRV. That was the 1985 Honda CRX. It was red. Tape deck in it.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** I mean, just terrible speakers.

**Jerod Santo:** Jordan, did you ever own a tape deck?

**Jordan Eldredge:** I did. I had some -- I feel I was mostly like... I didn't think I had legit tapes. I had tapes that a friend copied off of his dad's tapes, or something that...

**Jerod Santo:** Sure.

**Jordan Eldredge:** And then I had -- you know, going to the eclectic musical taste, I think I had two Weird Al tapes. So definitely a lover of novelty music.

**Jerod Santo:** I still listen to Weird Al with my boys.

**Adam Stacoviak:** That was the era of parody, for him at least. He definitely did a great job of that.

**Jerod Santo:** He was the best. Best of parody.

**Adam Stacoviak:** You know, I've gotta admit this though... I didn't get to enjoy Napster you all did.

**Jerod Santo:** No.

**Adam Stacoviak:** And the reason why I was looking at this - because we now have LLMs, and you can ask it any question, and it will give you a pretty brief, but hopefully mostly --

**Jerod Santo:** Somewhat true...?

**Jordan Eldredge:** \[laughs\]

**Adam Stacoviak:** ...hallucinogenic answer.

**Jordan Eldredge:** Probably equally hallucinatory as our recollections of the past...

**Adam Stacoviak:** Well, let's see. Tell me if this concurs then. Because I just asked it "What was the year of Napster?" Because I was thinking, I do recall a time with Napster, but it was brief. And I was trying to figure out "Why?" And so Napster, according to GPT 4.0 was launched in June of 1999. It was one of the first widely used peer-to-peer, P2P, file sharing services, primarily known for sharing digital music files, MP3s... And it says -- there's only one more sentence. "Napster quickly became popular, but also faced significant legal challenges from the music industry, leading to its shutdown in 2001." And so the reason why -- first, does that translate to what you all remember in terms of timeline?

**Jordan Eldredge:** \[50:14\] That matches my hallucination, yeah.

**Jerod Santo:** Yeah, absolutely. I would have probably dated it a little earlier, but... It definitely is probably true. I would have been wrong.

**Adam Stacoviak:** So I was thinking one year later potentially in terms of its shutdown, but I could be wrong. 2002. But I think it's probably 2001. Okay, so the reason why was because I went into the military in 1998. And I don't know what you all know about going to the military, but we're deprived of most things that culture really gets access to. We're meant to be soldiers, we're meant to be focused and mission-minded... And so as a young 18-year-old, going on 19, I did not have the luxury of having extra cash for things. And so at that time, I think I actually bought my very first Discman. Yes, Discman.

**Jerod Santo:** Oh, yeah. Sony Discman.

**Adam Stacoviak:** Not a Walkman, a Discman. Walkmans were before that.

**Jerod Santo:** Discman was ,terrible because it just skipped all the time.

**Adam Stacoviak:** It did skip. But then you had the anti-skip, which meant it would have a 10-second buffer, which was amazing...

**Jerod Santo:** You would just sit there for a while, yeah.

**Adam Stacoviak:** The coolest tech ever, but it would still skip a little bit. So I'd actually bought CDs; not have a digital download. Didn't have a computer, so access to this connectivity was limited to a lot of people at that time. Although there was a large part of culture that actually had access. But I was in the military from '98 to 2001. So I was in this --

**Jerod Santo:** You missed a lot. You missed the best year in movie history... You missed Napster...

**Adam Stacoviak:** Exactly. 1999. So I was in this multi-year deprivity because of the military, which was great in many regards, but I didn't have access. Now, towards the end of my military career my battle buddy had a computer, and we were doing some of these things... But even then, I didn't have time, really. I just didn't have -- my focus was elsewhere. But later on in 2001 I do recall Napster, downloading a bunch of stuff... Then, as you mentioned, Jerod, turning to BitTorrent... Then it was a thing called TrackerTracker. Do either of you recall TrackerTracker?

**Jerod Santo:** Well, there was a bunch of stuff. So right when Napster died - because the lights went out because it was a legal action and it was shut down. And when that died, there was a bunch of stuff that sprung out. BitTorrent was the eventual, I think, replacement, so to speak, of that kind of content... But there was LimeWire, and there was Gnutella, and there was probably TrackerTracker... You know, just when the lights come on and the cockroaches scatter... We were all scattering to find some other way of getting some music. There was tons of stuff.

**Jordan Eldredge:** Well, I think one of those examples, going back to Winamp, was -- Winamp obviously blew up and became very popular, and then eventually sold/sold out (but you've gotta do what you've gotta do) to AOL, for $10 million or something, which was huge at the time. And its founder, Justin Frankel, he went on at AOL to -- he sold out maybe, but he didn't sell out in his soul, and he was a troublemaker there at AOL...

**Jerod Santo:** Really?

**Jordan Eldredge:** ...at this time where they're trying to merge, or be acquired by, or whatever it was, with Time Warner. Obviously, a giant music catalog... And he was releasing peer-to-peer file sharing software on AOL servers, just an open source thing that he wrote, or freeware thing he wrote...

**Jerod Santo:** Wow...

**Jordan Eldredge:** And was "Here it is", and they're "No, you can't do that." He's "Hm, I don't know. I kind of just did." \[laughter\]

**Jerod Santo:** Is he still around? Is he still out there somewhere?

**Jordan Eldredge:** \[53:54\] Yeah, I got a chance to meet up with him and chat a bit with him about WebAmp, and about Winamp, obviously... And yeah, he's working on a DAW, digital audio software called Reaper. And yeah, he sort of has a small group of people, and they just work on this audio software, and I think he plays music, and is kind of living his best life.

**Jerod Santo:** Cool. I have to get him on for an interview at some point. I'd love to hear his exploits...

**Adam Stacoviak:** That'd be cool.

**Jerod Santo:** ...back in the AOL days, just going rogue at AOL... That's hilarious. Well, speaking of going rogue, we brought you here to talk about people who are just shoving random crap into their skins, right? Like, you went about unzipping folders and just found a bunch of weird stuff. Is that what happened, basically?

**Jordan Eldredge:** Yeah. So this was actually back in 2001... I was sort of collecting up all these files as part of the museum that I was putting together, and occasionally I would come across one that wouldn't parse correctly. I would try to load it up in WebAmp, and it would fail, for some reason. And of course, sometimes that means "Oh, it's a bug in my thing. I'm not correctly understanding the file format." And so I started to investigate "What's going on here?" And so at this point it's a hundred thousand things you have to get automated... So I had been downloading the skins, and then extracting them, and putting the information about them into a database... And so I had a collection of "Here's all the different things", and I can step through them with code. So I was "Okay, let's take a look at some of these ones that don't parse as Winamp skins." And you know, it's its own file format its own file extension, wsz. It's not a zip file. But yeah, I came across just a bunch of really weird stuff.

So I think the first one I found which I think just set the stage perfectly for what a weird adventure this was going to be... I was "Okay, I've got this thing... It doesn't parse. Let's open it up and look inside." And it just had a single PDF file, with a 8.5 by 11 advertisement for renting a giant bowling pin mascot costume. a 7-foot-tall bowling pin mascot. And I just -- like, can you think of a more random digital artifact to stumble across...? \[laughs\] Yeah, and it just was a rabbit hole going down from there.

**Jerod Santo:** Yeah. And you have a picture of that PDF on the blog post, which we'll link to...

**Jordan Eldredge:** It has a line drawing illustration of this --

**Jerod Santo:** A giant walking-around bowling pin man.

**Jordan Eldredge:** ...giant bowling pin guy. \[laughs\] Yeah.

**Jerod Santo:** He looks like the Stay-Puft Marshmallow Man, but he's a bowling pin.

**Jordan Eldredge:** Yeah.

**Adam Stacoviak:** I want to know why.

**Jerod Santo:** I do, too.

**Adam Stacoviak:** What made people do all these obscure things? Bob's car, and worm.exe...

**Jerod Santo:** Well, that one makes more sense.

**Jordan Eldredge:** \[laughs\]

**Adam Stacoviak:** That one does make more sense, but then it's not a worm.

**Jerod Santo:** Oh, it's not?

**Adam Stacoviak:** No.

**Jerod Santo:** Okay. That makes less sense now.

**Adam Stacoviak:** So what's the point? What are you trying to do here?

**Jordan Eldredge:** I mean, so there was sort of a large -- there was a variety of things. There were things the bowling pin one, where I have to assume someone meant that as a zip archive, and it got renamed somehow, and then caught up in the community's scraping efforts... Like, "Well it's got the right file extension..." So maybe someone was confused about what that file extension should be, or something somewhere caught it up in the, you know... Because obviously, it never would have worked as a Winamp skin.

And there was this one \[unintelligible 00:57:47.00\] where it's just you open it up and it's a guy's car. Not a particularly cool one. Just a guy's -- or a person's, I guess, picture of their car. So yeah, I think some of them are that.

Some were I think just Easter eggs that people place. I think that's another thing that we've gotten away from in our modern software era, this idea of Easter eggs. And even on albums, right? Remember, hidden tracks on albums... I don't think there's really much of an equivalent in the Spotify era.

\[58:22\] So I think some of them were someone's creating something, they're in this era of -- even Winamp itself had a bunch of little Easter eggs. Like, if you typed in a special pattern of characters, the title bar would swap out for a different title bar... And as a skin author, you could provide the Easter egg version of your skin. So it kind of makes sense, right? You're in that mode, you're designing your skin... Well, you get your chance to add your version of the Easter egg into it.

Sorry, I'm going to pause for one second. My mic has slipped precariously, and I'm hunching over...

**Adam Stacoviak:** Okay, the mic's back. Continue. Where were you leaving off at?

**Jordan Eldredge:** Yeah, so you were prompted as a skin author to add your own Easter egg. It was right there, in the file format. There was a little place for you to put in what your title bar was going to be in Easter egg mode. And I can imagine that put people in this mindset of "Oh yeah, what other little things should I hide in here for the curious to discover." And I guess probably for many of these that one curious person was me that finally found it.

So yeah, things text files... Some of them included encrypted zip files inside of them. That was one of the things I found. And it was just very -- yeah, lots of little hidden things. So I think that was another class, on top of just things that accidentally got renamed to be skin files. Yeah, very peculiar.

And then just things that -- just photos. There was one that's a photo of some friends hanging out by a basketball hoop. It's like, I don't know why you included that... \[laughs\]

**Adam Stacoviak:** I wonder though, because those are user-generated, if they're not just a way to share.

**Jordan Eldredge:** Yeah, could be.

**Adam Stacoviak:** I mean, I suppose you could have just emailed the photo; that might have been slightly easier. But maybe it's this reward system, or... I don't know, because I'm thinking -- it's like, it's not quite a hack, right? An Easter egg is not really a hack. It kind of is... It's really meant to be a reward for the enjoying parties. A creator put something in something... One of the most famous examples of - I think maybe even the first Easter egg in the world. Maybe not first in the world. Modern world maybe... It was the game Adventure from Warren Robinette. It was the -- and this is famously in movies, and in storylines, and elsewhere... It was for the Atari 2600. Like, if you didn't win the game, but you instead tried to find this path through the dark tunnel et cetera, you would land in this room and you've got truly what was meant to be the winning thing. I think there's a backstory to that and everything too, but... I just wonder if they were just trying to share obscure, weird things with the world... Not just simply be "Well, here's a photo of me and my friends at the basketball hoop." Maybe they were trying to -- I don't know; like, it seems strange, but share in a unique way with the world? Maybe reward in some way, shape or form the future Jordans, who will eventually spelunk all these Winamp skins, and find the corruption?

**Jordan Eldredge:** Yeah... I think also - and maybe this was just my friend group or whatever, as a teenager... But I think at that time in the early 2000s there was this sense of quote-unquote random, being a very funny kind of way to be, and quoting random things, or identifying things that are totally quote-unquote random... It was seen as very of the era... And I wonder if there was some element of that, "What's the weirdest, random thing I could include in here?" And I think, having been down the rabbit hole and found all these things, it's "Yeah, I guess a bowling pin rental flyer is a pretty random thing", so mission accomplished, I guess.

**Jerod Santo:** \[01:02:10.18\] If you found multiple skins with similar contents, I would then conjecture that some of these might be signatures... Because sometimes people have a calling card. And I imagine skin authors would author -- once you learn how to do it, and if you have a knack for it, it probably feels good to have your skin out there for people... And so I imagine there's people that did a handful of those. And who's going to see these files except for other skin authors, right? Those are the people who are trafficking inside of these files, and yourself, archaeologists... And so perhaps they're left there in certain cases for the other skin authors to see, or come across. And maybe it's a calling card, or maybe it's just a funny random, you said, "Oh, wait till somebody tries to see how I built my skin. They're going to find out that there's a bowling pin for rent." That one was totally corrupted, I guess... But didn't you find some that were just encrypted skins? It was just a skin at the end of the day, wasn't it? But it was just encrypted...

**Jordan Eldredge:** Yeah there were a few that were... So zip has its own encryption option built into the format; there's the option to encrypt. And there were a few that were just named .wsz, but were actually encrypted zip files. And knowing what people's notions of passwords were back in the day, I was "I bet these could be cracked these days."

So going back to my point about this has been my education - you know, I've always been "Man, I'd always to know, how do you crack passwords?"

**Jerod Santo:** So you have some rainbow tables... Brute-force that sucker.

**Jordan Eldredge:** Exactly. I know there are cool tools, and brute-forcing, different techniques... It's like "Maybe I'll get to play with that." And so I downloaded some of those things, and read up on them, and was able to get them running... And I think the password on the first one was just "Honda". Which obviously was like in the in the dictionary.

**Jerod Santo:** Right. Easy to brute-force.

**Jordan Eldredge:** Yeah. And that was just a skin that somehow had been encrypted, and I have no idea, maybe someone thought it was clever... I don't think Winamp -- actually, I know for a fact Winamp would not prompt you for a password, or anything. Or maybe it just got swept up in something else... Yeah, I don't know.

But then there were some that had a readme file in them that said "You discovered the secret. The password is XYZ." And then alongside it in the archive was another zip file, that was itself encrypted.

**Jerod Santo:** And now we're having fun.

**Jordan Eldredge:** Yeah. But the password didn't work when I tried it. I was like "I've got a text file telling me the password, and I've got an encrypted zip file. I'm so close to discovering the super-cool secret inner thing..." And then it turned out that it was a case-sensitivity issue, and they had written the password in caps, and I just needed to try it in lowercase.

**Jerod Santo:** Okay...

**Jordan Eldredge:** Yeah and so then I was able to unpack it, and it just had a bunch of music visualizer plugins inside. But like you said, it was the reward for the people who were digging deep. But the in terms of signatures, it was conventional to include a readme file, text file in each one... And so that has actually served the museum really well, because I'm able to -- you know, I'm not the site that they uploaded these things to, so I don't have their, like "Oh, I uploaded it and I'm going to write my description, and I'm going to give my author name, and I'm going to give it a title." And so being able to access those readme files has let me index them. And so now if you search, we can search through all the contents of the readme files. And so even though I don't have that side metadata, they are discoverable. But yeah, people definitely had their signatures, and sign-off lines inside those readmes...

**Adam Stacoviak:** I was looking at this one where you mentioned the fellow's playing basketball, or at least holding onto the hoop... And they're drinking Canadian beer. It's literally a beer from Molson. It's called Canadian.

**Jordan Eldredge:** \[01:06:15.29\] Yeah, it's so funny --

**Adam Stacoviak:** I mean it's a beer called Canadian. There you go. It's very popular in Canada. I don't know if it's still popular to this day, but I know this era of photo -- it looks like it may have been early 2000s, or '99s... Obviously, because it's a Winnipeg skin...

**Jordan Eldredge:** As this post of mine made the rounds, it was really interesting reading the different comments people had on it. And that photo in particular, which is the most nondescript photo... It's like not an action shot, but just some friends hanging out by a basketball hoop, and it's called... What's it called again? You have it in front of you?

**Jerod Santo:** Standingaroundthehoop.jpg.

**Jordan Eldredge:** Yeah, standingaroundthehoop.jpg. And it was really interesting how many people in the comment sections of various places this was being discussed latched onto that image, and they're like "That feels like my teenage years. That feels like my friend group." There's something -- because it wasn't published in a magazine, it wasn't... It's just some random people's photo that they took of themselves hanging out... And yeah, it is so funny how many people have latched onto that. They're like, "That touches something about my childhood, that I haven't thought about in a long time." Maybe just because it is so unproduced.

**Adam Stacoviak:** Yeah, something about it is just like "Yeah, that's a snapshot that we can all relate to." I say "we all" meaning people who were really in this era, that feel the nostalgia, not just the new, that is from the old. I mean even things like these pictures from Dom's baby, Joe. What's up with that? Dropping photos up in this thing... Here's Ellie. Ellie's in front of some sort of obscure wall, coloring maybe... It looks like she's painting it, and she's got a rack behind her of some sort of gear... I don't know, I could speculate maybe she's a school teacher, or something like that... It looks like maybe it's school, potentially. Some sort of building... What the heck is Ellie doing?

**Jerod Santo:** She's painting the wall, although I'm not sure why.

**Jordan Eldredge:** I think the relatable thing is -- and I think the reason that these have been so fun to poke apart, but also to preserve, is that these are created by just regular people. And I think there's something very human about it. These are not professional designers; these are teenagers, or 20-somethings or whatever, in their copious spare time, putting these things together... And there's something really unique about - I guess you can call it art; it's a type of art, that is of the people... And as part of that, you get this snapshot of real life tucked in the corners of it.

Yeah, just like random people... Someone put a picture of someone painting a wall. I don't know why... But there it is. Maybe that was an important person to them, or they thought it was random... I don't know.

**Adam Stacoviak:** It could have been included by accident... I mean, it's not impossible. I don't think that's true, but it's possible.

**Jerod Santo:** You know what's cool?

**Adam Stacoviak:** What's cool, Jerod?

**Jerod Santo:** I'm going to take stayingaroundthehoop.jpg and ellie.bmp - although now it's a PNG - and I'm going to embed those as chapter data into our episode... And so those files are going to live on inside of an mp3 file. That's kind of cool, right? There's like a whole new life for these files, because they were dug up and enjoyed, and I think that's cool.

**Adam Stacoviak:** Now there's new life. A new embed.

**Jordan Eldredge:** But now you've spoiled the Easter egg by telling people. You've gotta keep it hush-hush.

**Jerod Santo:** Okay. Let's just make a weird voice-over noise during that whole sentence.

**Adam Stacoviak:** We'll change your voice.

**Jordan Eldredge:** Actually, speaking of voice-over, there were some audio files, too. And I think these were some of the most --

**Jerod Santo:** Oh, really?

**Jordan Eldredge:** And maybe these could be in the podcast itself, I don't know.

**Jerod Santo:** Oh yeah, absolutely.

**Jordan Eldredge:** There's one called cool.mp3, or something like that... Which is, again, the most -- if you ask someone to imagine the most random sound you could... You would come up with this.

**The sound:** \[01:10:27.04\]

**Jordan Eldredge:** So that was very random, of course.

**Adam Stacoviak:** Let me tell you how the story of cool.mp3 came about then... Because I know it.

**Jordan Eldredge:** Please, please.

**Adam Stacoviak:** I'm going to hypothesize, but I'm going to act as if I know it.

**Jordan Eldredge:** Okay.

**Adam Stacoviak:** Some kids, 16-year-olds, 14-year-olds, were just horsing around, maybe listening to the Jerky Boys, making some prank phone calls, maybe listening to some Napster tracks...

**Jerod Santo:** Oh, for sure.

**Adam Stacoviak:** ...downloading, very slowly, and "Hey, while we're waiting for this file to arrive, the multi parts of this file to eventually arrive", they just are messing around like kids do. They make this thing... The other friend is tinkering with this Winamp thing, making themes here and there, or he thought he could... He's like "I'm going to put cool.mp3, this thing we just made today, in this theme, and let's see if somebody finds it, eventually and they're like "What the heck is this?" That's how cool.mp3 became a thing.

**Jordan Eldredge:** I think you're right. I think you're right.

**Adam Stacoviak:** Yeah, it's totally people just messing around. This is a snapshot of just people messing around. Just pushing the buttons of whatever the buttons are... And in that era it was Winamp skins, finding files -- like, today there's no real recollection of files for tracks, for song tracks. It's kind of erased, in a way. It's hidden behind -- I suppose you can still download... Do people still download from Amazon Music and Apple Music? Or is it pretty much just gone? It's just streaming, right? Like, Who's buying the mp3s?

**Jerod Santo:** There are some hardcore people probably...

**Adam Stacoviak:** I mean, I would be buying them if I didn't have a subscription.

**Jordan Eldredge:** Yeah, I don't' think anyon -- you know, even when iOS came out, it was eye-opening to me that they're so actively deprioritizing the idea of a file. That was an implementation detail that users shouldn't need to think about... And so yeah, I don't think we're encouraged to think in that way.

**Adam Stacoviak:** Yeah, it's an absolute shame, because... I don't know if it's an absolute shame. I think it's --

**Jerod Santo:** \[laughs\] Progress.

**Adam Stacoviak:** I'll stick to my guns, it's an absolute shame...

**Jordan Eldredge:** Kids these days...

**Jerod Santo:** Yeah, exactly. Now we're old men who yell at clouds.

**Jordan Eldredge:** Oh, quite literally yelling at clouds...

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Well, I mean, just being able to create a literal file, and distribute it in some way, shape or form. This form of creation and sharing is becoming owned.

**Break**: \[01:12:51.19\]

**Adam Stacoviak:** I mean, I don't want to turn this conversation to the dark side, but the creation mechanism, to some degree, lives -- I mean, I'll go one step further and go back to that thing I mentioned earlier from Snacks, and I thought it was pretty interesting because there was one layer deeper on this... Which was the takeaway. The labels need social media fees to succeed. So we're going back to the day of Napster, when they're like "Damn you kids sharing files accidentally, or unpurposely, in this way, shape, or form that subjugates and subverts our ways of profiting." And then you fast-forward 22 years-ish later and now there's a headline that says, or at least a sub-headline, a takeaway headline that says "Labels need social media fees to succeed." And they took a large hit. This is UMG, one of the most popular labels out there. They had Q2 results that were down. They would take a $10 million per quarter revenue hit. This is just paraphrasing some of the thing in there, but...

**Jordan Eldredge:** I feel like it's gotten -- the creativity though has actually maybe gotten more so... Like you were saying, the creation of a file - we sort of lost that artifact. But at the same time, I feel like we're now in the area where everyone is a content creator, right? The idea of creating something and sharing it with the world is second nature. It's been definitely commoditized, in a way... But also, at the same time, I think we've gone to a world where there's just so much creation going on. But because there's so much creation, there's so much content to see. And so the ability to -- well, you know, if there's 50,000 people creating things every day, probably not all of them can make that their profession. And again, the role that the labels were playing in terms of paying the upfront cost to get artists recorded... It's like, well, the cost of actually recording something has gone way down. The cost of marketing artists - well, the way you market now is totally different, and is much more based on social media. So the whole - like, what role they're playing I think has also changed dramatically.

**Jerod Santo:** That's why I'm over here thinking, who needs a label? No wonder they need the social media platforms, because who needs them anymore? I'm sure there are things they bring to the table, but nowhere near what it used to be in order to get your music out to people. Now, yes, there's more noise than there ever has been, but it's always been the case, at least in American history, that very few people could make their living by making music. I mean, it's not a mass market job. It's a very rare person that can get that done. I would argue it's easier today. There's probably more people making a living off of their music creations than in the past, because it's easier to find your 1,000 true fans. And you're not maybe going to be a multimillionaire, but you can probably make a living that way, because you don't have to go city to city to actually literally find them.

Now, once you've got your fans, it is harder to make money, I think, which is why touring, again, has become the way that artists are making a living now... It used to be their album sales, and the tour was kind of to promote the CD. Now it's the music promotes the tour, and the tour is how you make money, and you sell merch, and you can make a living that way... It's a hard job. A lot of people burn out and don't survive touring. It's not an easy life to live, although it's probably a very exciting life. So I just wonder, what are the labels bringing today, in 2024, that is of value compared to what they extract? I don't know what that equation looks like.

**Jordan Eldredge:** Yeah, I think it's really hard to know. There certainly is an ideal role that they could play in producing albums, giving artists the time and the space to be in the studio, to take the time to write their music, and to not have to be working their other job... But increasingly, it feels - like you said - like they need the social networks. They're only signing people who already have meaningful followings...

**Jerod Santo:** Exactly.

**Jordan Eldredge:** \[01:20:05.15\] And so it is kind of a question mark, like "What value are they really providing?" But your point about like, you know, there's more people making music today - I think it's absolutely true that there's a lot more music and art and content being created by people. But I suspect you end up with a lot of people, a really long tail of just people making stuff that maybe it's not their profession, \[unintelligible 01:20:30.04\] their side time... And maybe that's good, that we have more people being creative, more options as a listener to hear things, even from people who don't make it their full-time job... But then I suspect that there is a flattening where there just are fewer people who are able to make it their living. That's my suspicion. And I think it is all downstream of Napster, right? Spotify had to emerge as a competitor to Napster, and they just couldn't extract the same amount of value as the record labels could before. They had to be competitive with free, which is a pretty tall order.

**Jerod Santo:** Yeah, absolutely.

**Adam Stacoviak:** My thought on labels is they probably compress the time, potentially... There's a convenience factor in there, there's maybe a network factor in there, where "Hey, we have XYZ producer, who produced for X, Y, and Z." And so the artist is like "Yeah, I can go take my time and try and find a producer." Maybe they can, maybe they can't. But then, like you said, Jordan, maybe the label is like "Hey, you don't have to work for these next month and a half while we're just pampering you to create this album", or this next drop, as I said earlier.

**Jerod Santo:** Right. Well, they cut you that upfront check. That's pretty much what they're doing.

**Adam Stacoviak:** Yeah, they take out the hard part... I'm just hypothesizing, clearly, from what I think may be occurring, but potentially they're just enabling this space for creation, and access to different talent, to different studios, that have just thousands and thousands of dollars worth of gear, just already set up, fine-tuned, a repeated pattern of success... It's almost -- I wouldn't say it's foolproof, but I'd imagine it's pretty well-oiled, because they've just churned so many folks through this process that it's almost on repeat; like automation, in a way.

**Jerod Santo:** But like Jordan said, they're only signing people who've already arrived. Once you've made it, then they're interested in you. And so you already know how to make music that people love. And so I understand access to producers, I understand the allure... I think what they're bringing is a legacy institution that has a lasting... I don't know what you call it - clout around it? That's probably not the best word. Like an allure to it, similar to mainstream television. Everybody would love to see themselves on TV, even if they're -- like, YouTube stars have all these millions of followers, and then finally they're on NBC. And even for them, that's a moment, because there's this thing about being on television. I think there's a thing about being signed by a record label, which is very attractive because of the history of what that meant. And I think it means less and less, and I think that's going to wear off over time, but it's probably still a trailing indicator.

And I think people want that upfront check, because now they've "made it", even though there's so many strings attached to that check that you better check yourself.

And they also want the street cred of like "I've been signed by RCA" or whatever it is, and that just gives them this instant clout, which is just because of the history of what those institutions were.

**Adam Stacoviak:** I just wonder, even things like Swift, Taylor Swift. She was very, very popular, and now she's the name you hear everywhere. And I don't think it's just because of her music. I think it's -- and this is totally hypothesation, or whatever you want to call it. I'm hypothesizing how this may have happened, but... I've gotta imagine these labels not just having access to the studios and the producers, but they also have their hands in the pocket, or literal ownership of media... Which is message distribution. It's idea implanting, right?

**Jordan Eldredge:** \[01:24:11.25\] I don't know...

**Adam Stacoviak:** You don't think so?

**Jordan Eldredge:** I think Taylor Swift is unique in that she was the first megastar to realize the power of social media, and that she could own her own audience without needing the labels. And that's what went into her Taylor's version releases, where she reclaimed all of her content back from her labels by re-releasing everything. They owned all the masters to the original tracks, and so of course anytime they got played, they got a cut of it. And she was like "Nope! I can go on Instagram and I can say "Hey, all my Swifties, stop listening to the old version. I re-released it. Listen to this version now", and they're like "Yup, I'm on board." And she didn't need to go on a talk show, or a radio, a morning chat show or something to reach those people. She's got a direct line.

**Adam Stacoviak:** Point taken. I understand that.

**Jerod Santo:** I think they used to do that, and I think that's probably what I'm talking about, this trailing legacy... Because it used to be -- like, the old formula was you toil away in obscurity, and you play in dive bars, and weddings, and whatever you've gotta do. Open mic nights... And eventually, some talent scout from a record label comes and discovers you. That's the person who just understands what raw talent looks like, you know... And they discover you, and they bring you in, and then they sign a deal with you, and then they push you out to the world. And that's a great story, and it used to be true, and I just don't think it's as true anymore as it used to be. But there's just this wake of that being the case for so long, that everybody still gives them more credit than they currently bring. But we're all just prognosticating from the outside. I'm sure if you're inside the industry, then you are probably thinking "These fools have no idea what they're talking about..."

**Jordan Eldredge:** I feel there's a parallel with internet venture capital, where the record labels were historically the venture capital of the music industry, where they would identify someone who wasn't a sure thing, and they would produce a lot of albums, with a lot of upfront costs, and most of them would fail, and most of them would not become superstars. But a small number of them would become superstars, which is like the VC unicorn, and that would subsidize all the losses they took on producing all those other records.

So a lot of artists who didn't end up becoming successful did get records produced as a byproduct of that, which probably was good for overall our ability to hear interesting music. But now in the social media era, where it's like "Well, we're just going to wait until you've already proven that you have a resonance", then maybe those albums that aren't commercially viable maybe never get produced.

**Jerod Santo:** Yeah. The distribution, I think, is really what changed most. And now the record labels are downstream of distribution, which is why they're trying to go sign deals with the social media companies... Because they are the distribution at this point. Whereas it used to be cutting a bunch of CDs, and shipping them around the world to be sold in record stores and all that - it was a lot of cost for any band or individual. Too much to do. And the record labels had that. But yeah, now that it's been flipped on its head with distribution, who needs them? That's all I'm saying. Who needs them?

**Adam Stacoviak:** Explain to me this... I've been thinking about this. This is today's pop culture. How was Snoop Dogg the mascot/person, the front person for the Olympics? That wasn't because he was like "Let me do this." I think that was a job. Somebody offered that to him. And that had to be -- it could have been Kevin Hart. There's times when, you know, different comedians or different people within culture...

\[01:27:58.02\] And it's not that Snoop is irrelevant. The guy makes wine even. I think there's all these different things these artists get their hands in. But I wonder, is that part of a label relationship, or has he transcended this need for a label, to be like "Okay, there's a job out there, Snoop." You want this interview to be the front person for the Olympics this year, and you've gotta be there. And obviously, he's gonna enjoy it anyways.

I don't think he was by any means acting in terms of his zeal and excitement for what was going on... But he was on camera, it was very much Snoop Dogg... How does that happen? Is it because just Snoop Dogg and his agent is like "Hey, I got a job opportunity for you"? Or is it because there's some larger conglomerate connection that has paid media access, that gets a job, that suddenly Snoop Dogg is now even more embedded into today's pop culture, than he was prior to the Olympics, for example.

**Jordan Eldredge:** Are you signing up for next year? Are you putting in your bid to take Snoop Dogg's place, in four years?

**Adam Stacoviak:** Yeah, they're gonna be like "Yeah, let's get Adam in there."

**Jordan Eldredge:** \[laughs\]

**Adam Stacoviak:** "Adam who?" "I don't know. I mean, he just -- he applied."

**Jordan Eldredge:** I guess at some point, you -- like Taylor Swift, you transcend from a musical artist to cultural personality. And then you can go --

**Adam Stacoviak:** Do whatever you want.

**Jordan Eldredge:** Yeah. And I guess if you're good at it, too.

**Jerod Santo:** Snoop Dogg has stood the test of time beyond rap. By the way, Snoop Dogg has put out so many tracks in his life.

Lots of bad music. Just one man's opinion. He's got some good music as well... But there's a guy where quantity has always been higher than quality. But he's just transcended culturally because of his aura, or whatever it is. That's who he is.

I don't know the details of his label relationships. I do know that in the rap game, especially when he was coming up, you work with a label long enough until you can create your own label. And so there's a lot of label battles, and hatred between rappers, and a lot of labels taking advantage of young rappers... And so I would be surprised if a label deal was involved in this deal. I think probably NBC went to his agent and said "We want Snoop." I don't know.

It was a great idea by whoever thought of that, because he really did add something to the Olympics that just has never been there before. It was kind of strange... But it was kind of like a sideshow Bob kind of a thing. Like "Oh, and Snoop's there, and he's dancing." And you're like "Who's not gonna love Snoop Dogg dancing and cheering?" He kind of oozes joy, doesn't he?

**Adam Stacoviak:** It was cool. Did that happen before? Was there ever that kind of front person for the Olympics? I don't know if I recall.

**Jerod Santo:** I don't recall...

**Jordan Eldredge:** I want to say Snoop did it before -- or there was... I don't know. I'm definitely not the expert in this arena.

**Jerod Santo:** No, none of us are experts here. We're software developers talking about culture.

**Adam Stacoviak:** Yeah, we're not talking about the Olympics necessarily, but a lot of interesting things this year for the Olympics. Some controversial, some not controversial, some absolutely hilarious, like the breakdancing...

**Jerod Santo:** Oh yeah, the Australian breakdancer.

**Adam Stacoviak:** And this "We're all Ray Gunn" article out there, I believe... I just saw my buddy John Daniel Trask, who is the co-founder of literally Raygun, the software... Not paid, but they're error tracking. We love them. They're awesome. At least I do. I think it's raygun.io is their URL. I believe.

**Jerod Santo:** Are you sure that wasn't paid?

**Adam Stacoviak:** That was not paid. I just know that.

**Jordan Eldredge:** That seemed pretty paid.

**Adam Stacoviak:** John Daniel Trask is a cool dude.

**Jerod Santo:** "I think it's raygun.io..." \[laughter\]

**Adam Stacoviak:** It could be raygun.io... It could be...

**Jordan Eldredge:** Raygun.io/changelog.

**Jerod Santo:** Yeah, exactly.

**Jordan Eldredge:** "I think that's a domain, if I think about it..."

**Jerod Santo:** /adamstacoviak...

**Adam Stacoviak:** \[01:31:35.28\] Well, if there's a connection there, maybe they'll come back and sponsor again. I know we were contacted recently, but... We're not haters. We're not haters. We're here to promote a lot of folks out there. We're the dev rel for the dev world. Yeah, I think it's kind of cool what Snoop did. I think you're right, he did bring some really interesting pieces to it... And I think, like anybody who transcends, I think - Jordan, you've transcended simply just your role on the Relay team at Meta, to this Winamp world, this WebAmp world, really, where you're sort of spelunking all these unique things... And I think it's interesting how you've been on the front page of Hacker News for using SQLite in production, and just all these different things that have allowed you to push the edges. Even work with the Internet Archive. All these cool things you've gotten to do just because of our history and nostalgia for Winamp, and the skins, and all the things you've learned as a result of just spelunking this intense, crazy Winamp world.

I think it's wild how you've gone deeper into TypeScript, deeper into WebAssembly, uncovered secrets in these skins, this corruption stuff... And I think, to even give one credit here, you added, I believe - what was it, 56 additional skins, that were skins within skins that you've found... And 54 of them were not already in the museum, so you were able to upload those as well. So now we've got 54 more potentially bad, potentially good skins to enjoy. But still yet, your commitment to this is uncanny. We had you on the show - how many years ago was it, Jerod? Five-ish?

**Jerod Santo:** 2018.

**Jordan Eldredge:** Yeah, it was 2018.

**Adam Stacoviak:** Too long ago. And then I've found this article where you're talking about corrupted skins, and you obviously shared a few more things with us, which - we'll link all these up in the show notes of course, but... It's just wild how something as simple as taking Winamp to this idea of WebAmp, how it can be such a rabbit hole to explore and discover. I think it's wild. You've done such a great job.

**Jordan Eldredge:** Oh, thanks. Yeah, it's just been really fun, and I think there is something about it that touches on a lot of people's nostalgia, but I think also a lot of people's frustration with the current -- you know, what the internet has become and what we maybe imagined it to be in its infancy. And so I think every time I've been able to share something that I've worked on in this vein, I feel like it's had an outsized resonance in terms of how it gets talked about, because of what an important role Winamp played, and what an important role the user-generated themes, these skins played... Yeah, it does feel like it resonates.

So it's been a great experience for me to have this thing to come back to, and have a little playground to try out all different things that I'm curious about... And then yeah, I think the way that it resonates with other people is a lot due to just what an interesting piece of software Winamp was, and at an interesting time, and perhaps in stark contrast to where we are now.

**Jerod Santo:** Do you think you've plumbed its depths, or do you think the rabbit hole goes even deeper?

**Jordan Eldredge:** Probably... Well, let's chat again in another six years and we'll find out.

**Jerod Santo:** \[laughs\] Sounds like a plan.

**Adam Stacoviak:** So the museum is at skins.webamp.org. I was slow there for drama. skins.webamp.org. Very dramatic.

**Jerod Santo:** \[01:35:08.02\] Very dramatic. /adamstacoviak sent you... \[laughter\]

**Adam Stacoviak:** That's right. Well, there's some UTM data on there that we'll somehow find a way to put in the voice there... Yeah, I'm just enamored by what you've been able to do with this. I think it's really just so cool. I think the only last question - maybe this is a good closing question... I'm on your GitHub ,profile and either I'm blind and I don't see it, or it doesn't exist, but you're not taking any sort of sponsorships for this. Now, I imagine you've got a job, so you're okay with that... But I'm sure there's some way, not so much so you can profit from this, but at least get back money for your time... Is there a reason why you haven't set up a sponsor page, or allowed the community to do anything to support your efforts?

**Jordan Eldredge:** Yeah, I think -- I actually have been well rewarded for this work over time. I think I've always found that -- I mean, very directly, I first published the WebAmp project and it got picked up on Hacker News, and shortly thereafter a recruiter from Facebook at the time reached out, and that ended up in a job offer, and it's something I've been doing for the last seven years, which has obviously been pretty good in terms of compensation for that work...

And so yeah, I think I've found that the compensation comes more in just the opportunities it's led me to in my career. Both in terms of where I work, but also what projects I get to work on, and things like that. A lot of stuff that I've learned through this project...

So yeah, actually the Skin Museum does have some costs in terms of hosting and whatnot... I've done my best to try to minimize those costs. But yeah, I think I'm happy to subsidize it for -- certainly, I've been rewarded just fine. And to celebrate all the artists who made all these really cool pieces of art, I think it feels a little bit nice to have it just be a thing that's clean, and free, and just a thing that's done out of goodwill.

**Adam Stacoviak:** Well said. I dig it. Skins.WebAmp.org. Less drama this time around, but you can endlessly scroll skins, click on them, find out more details, see them animate, do some cool stuff... I think it's cool that you've done this, and I think it's cool that you got that job offer. I didn't recall that detail, that you published WebAmp and then got an offer or a connection to Facebook - then Facebook, now Meta - on the Relay team. I do know that part of your history, but I didn't know it was connected to the publishing of this. Not many people are happy to subsidize, though... I mean, some are, some are not. But when there's such an easy access to sponsorship... I don't know. You do you, man. You do you.

**Jordan Eldredge:** \[laughs\] If you want to sponsor me, you can donate to the Internet Archive. I think that's a great way to do it.

**Adam Stacoviak:** That is a good way to do it, I'm glad you said that. At the same time, you can go to WebAmp.org, not just skins dot... Because that's where the project lives at. I'm just wondering, maybe -- I'll leave this one for the bonus. We'll give this to the Plus Plus folks. Let's say goodbye, because I've got one thing for you... At least an idea; maybe you'll it, maybe you won't. Who knows. What's left? Anything left?

**Jerod Santo:** I think all that's left is for us to say is "Bye, friends."

**Adam Stacoviak:** Yes. Thanks, Jordan. Bye, friends.

**Jordan Eldredge:** It's been great to be here, thank you.
