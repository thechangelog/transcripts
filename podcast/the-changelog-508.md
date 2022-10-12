**Adam Stacoviak:** Let's come closer to center, right? We're podcasters, we do audio pretty much for a living, and why not talk about the thing that sort of powers the metadata of -- not sort of, but totally does power the metadata of the mp3 that we famously ship around the world for people to listen to. The ID3 tag. So Lars is here. Lars, hey. Good to see you. Good to have you back on one of our shows. You've been on Ship It recently, now on the Changelog, talking about this dive into ID3v2, and v3, and v1, and vX, I guess with your... What is -- is it a plugin? What is what you created called?

**Lars Wikman:** So for your needs to ship chapters, I built out a library for decoding and encoding ID3 tags. And we focused on the 2.3 spec. I can enumerate the specs that you could possibly deal with; it's ID3, also known as ID3v1. It was the first version, before they had a versioning scheme. Then you have ID3v2.2. I haven't seen 2.0 or 2.1, so I don't know if they ever shipped.

**Jerod Santo:** Hm... It may have been quick iterations, maybe while they were drafting.

**Lars Wikman:** Then there's 2.3, and 2.4 being the most recent one. And I get the sense that it didn't get the full-on adoption of 2.3. So 2.3 Seems like the gold standard now.

**Jerod Santo:** That's the one that we're using?

**Lars Wikman:** Yeah.

**Adam Stacoviak:** 2.3.

**Jerod Santo:** It's kind of like Star Wars. Remember Star Wars Episode Four, A New Hope. when George Lucas first released Star Wars Episode Four, it was just called Star Wars.

**Lars Wikman:** Well, they didn't call it ID1...

**Jerod Santo:** That's right. ID3v1. So was there an ID2? Was there an ID1? These things are -- we'll never know. We'll never know the answer to these things.

**Adam Stacoviak:** It was always challenging for them to start, I guess, four episodes into a six-episode non-trilogy. Sixology? I don't know, what would you call it? Septology? That would be seven, septology. Right?

**Jerod Santo:** It ended up being three trilogies. But I'm not sure what you'd call that either... Ninetology, that's what I'd call it. It's kind of like Scientology, only different.

**Adam Stacoviak:** Let's not all do that. But hey, ID3 is this, I guess, interesting and non-interesting thing that has very unique takes... You wrote a blog post titled "What ID3v2 could have been." Very good deep dive. We tasked you with running this library, so that we can finally have chapters, which - Jerod, you've got a blog post pending. I don't know if it's gonna go out before or with this episode; we don't know. But check the show notes there, there might be a link there. Worst-case, follow --

**Jerod Santo:** It should be out by the time this goes out, unless something goes terribly wrong.

**Adam Stacoviak:** So we tasked Lars -- Lars... With -- since I'm having to say his name correctly, since I'm American; we get lazy. We say Lars, instead of Lars... But ID3v2, what could have been; but before this task, you had not looked into the spec. Had you messed with audio at all, really? I mean, I know you've done some stuff behind the scenes with Sonic Pi, and stuff like that... But at this level, messing with a file, writing its metadata - had you like looked into ID3 at all, ever, before this task?

**Lars Wikman:** \[05:48\] So I was familiar with the format, because growing up in the '90s and 2000s, it's like "Oh, this mp3 file doesn't show the right artist title." So I'd try to go into Properties in Winamp or whatever, and it's like this ID3... But I can set artist, and the title, and if I set those, they will be shown instead of whatever's in the file name. That was sort of where I started with ID3. And after a while, Winamp started to support more fields in two different tabs. That was ID3v2.

**Jerod Santo:** Yeah, it got complicated.

**Lars Wikman:** And that was probably the extent of my use of it. I didn't really spend any time with the binaries of it up until this point, really.

**Adam Stacoviak:** I had a similar path too, with Winamp, and then also iTunes. I've done a lot of futzing with -- back in the day, when we used to have iTunes, and actually have mp3, or potentially actual wav files that you've... I would rip my own CDs to digital so I can listen to them anywhere. This is when you had your own CDs, basically, that you would swap out like -- I don't even know what I'd call myself then, but like this manual process. Who wants to do that, right? To have this digital file and take it anywhere with you.

**Jerod Santo:** To be clear, ripping our own CDs that we purchased legally is the only way that any of us ever acquired any sort of audio files back in the 90s.

**Adam Stacoviak:** Truth. Truth.

**Lars Wikman:** Yes, because there was not a widely spread practice of carrying computers to other people's houses and downloading a sort of wandering MP3 collection, that for some reason had disproportionate amounts of Enya in it.

**Jerod Santo:** \[laughs\] Everybody loves Enya. You've gotta love Enya. Here's what was interesting about that for me... I had the exact same introduction to ID3 tags, through wanting a more pristine music library, but having gathered said library from the four winds...

**Adam Stacoviak:** Friends, friends...

**Jerod Santo:** Yeah, wherever that you get them... And if there was any sort of discrepancy, for instance, in the album title, between two mp3s that are on the same album, they would list duplicate in my player, whether it was Winamp, or even iTunes in the same way. But there was a satisfying moment when you took those duplicates and you reconciled to a single album title, without whatever punctuation or whitespace at the end, or you got rid of that weird Unicode character that wouldn't render properly anyways... That they would like collapse down and be considered part of their own album, instead of being two separate albums. So that very much tickles the nerd in my body... Weird sentence... And my completionist body as well. Just like, "I've gotta do this for all my mp3." So I spent lots of time inside those editors just tweaking ID3 tags, and just trying to get them all to be awesome.

**Lars Wikman:** I am not a completionist, nor a perfectionist...

**Jerod Santo:** \[laughs\] You're not a completionist... Adam?

**Adam Stacoviak:** Very much so, yeah. Very much. I guess the ones that drove me most nuts was when it was a compilation.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Like, it was multiple artists, so you couldn't group by artist. You had to go by album. And then when you want to listen to -- it was just a mess. So I would always be tweaking albums, artists, songs... It's just a never-ending battle. And I guess that's the beauty of the cloud, really, the music in the cloud, because it kind of does it for you, and you never have to do it again... Because I haven't done it since, pretty much...

**Jerod Santo:** Right.

**Lars Wikman:** But it also takes away the possibility of having a correct music collection, because Spotify will not give you the correct thing. It's like, "Oh, this is a great playlist I used to play." And now that I play it, they have a weird live cover of this entire band, instead of the original songs, because they lost them. Oh, Spotify doesn't have this track anymore. They'll just substitute something...

**Adam Stacoviak:** \[09:52\] A small tangent on that note... How interesting is it that we could be having a conversation here, we can remember a song from back in our heritage, our young years, or whatever, 20 years ago, and for the most part, we can probably pull up Spotify or some version of Spotify out there, iTunes Music etc. and we can probably play that song in a matter of seconds. Like, you would have to go out and own that music, which isn't like bad or good for the artists, but you'd have to have owned the thing, maybe have to go traverse and find the disc, put it into the disk player you don't own anymore, using old RCA cables, plug... Like, now it's all digital. It's HDMI, it's optical, digital etc. to plug these components in together... In a moment's notice, we can play Offspring from back in the day, right now.

**Jerod Santo:** That's hilarious, because that's the exact band I thought of when you said that... I was like, "You could play an Offspring track" and you just went to the exact same place.

**Lars Wikman:** Offspring was my first cool album. I had some cool ones before, but Smash... That was a good album.

**Jerod Santo:** Oh, can we play this? Why not... \[sample 00:11:10.19\]

**Adam Stacoviak:** You've gotta love self-esteem, right? I mean, in a moment's notice, we can play that. Ain't that crazy?

**Jerod Santo:** Well, go back even further and they had to wait for songs to come on the radio. And if you wanted to hear a certain song, you had to call in and ask them to play it for you.

**Adam Stacoviak:** And sit there all day and listen to the radio.

**Jerod Santo:** \[laughs\]

**Lars Wikman:** With a tape deck ready.

**Adam Stacoviak:** Exactly. And you'd have like a little bit of the previous song, the DJ, some sort of bit, and then the song. Wow...

**Jerod Santo:** Same -- Now looping back to Star Wars - it was the same thing. When I was a kid, to see Star Wars we had to wait for it to come on. Or we had to have a friend who had like a -- not even a DVD. They had a...

**Adam Stacoviak:** Laser disc?

**Jerod Santo:** No, not laser disc. What was the previous -- not Betamax? VHS tape.

**Adam Stacoviak:** VHS tape, yeah.

**Jerod Santo:** Right? Their parents were wise enough to tape it when it came on at one time that year, and have a recording of it...

**Lars Wikman:** That particular family that daddy knew -- that had two VHS players.

**Jerod Santo:** Yes. \[laughs\]

**Adam Stacoviak:** That's right.

**Lars Wikman:** It's all piracy...

**Jerod Santo:** It's piracy all the way down, yes. So times certainly have changed. Well, let me get back to changing things... This spec change - we talked about ID3v1, which we all have nostalgic 90s memories of. There's an aspect of it which plays into this conversation, which is it's a fixed width format, right? Like, it's 128 bytes, and only so much is going to fit inside of those bytes. And inside of that, there's a specific number of bytes allocated for each field. So I think the album title could only be like 30 characters, or something. Or it maybe depends on --

**Lars Wikman:** 30 bytes.

**Jerod Santo:** Okay, 30 bytes.

**Lars Wikman:** Each. Yeah. So 30 bytes, 30 characters.

**Jerod Santo:** Yeah, exactly.

**Lars Wikman:** Each. For title, artist, album and comment. And that also means that a bunch of characters were off limits, because I think everything was Latin one or ISO88591.

**Jerod Santo:** Right. Yeah, no UTF8 back then for that particular thing. So if your album title was too long, you just had to decide where you were going to truncate it. So you have a bunch of just partial titles. The titles for a lot of our episodes, Adam, wouldn't fit in ID3v1. You'd have to just truncate it, and maybe throw the ellipses in there at the end...

**Adam Stacoviak:** Total sadness.

**Jerod Santo:** Total sadness. So there's obvious limitations. That being said, pretty cool how simple it is. Lars, maybe you remember, or you know why it's at the end of the file, though. It's like 128 bytes at the end of the mp3 file.

**Lars Wikman:** I'm pretty sure that was done to avoid tripping the MPEG parsers. I recall having seen something about why it was there, but I don't recall -- yeah, okay, [Wikipedia tells me](https://en.wikipedia.org/wiki/ID3#ID3v1)... "Some players would play a small burst of static when they read the tag". So yeah, probably not have it at the start.

**Jerod Santo:** \[14:02\] So the first second of your song is like \[static 00:14:02.23\] and you're like, "Whaat?!" and then it starts.

**Adam Stacoviak:** It's not an ideal listening experience, that's for sure.

**Jerod Santo:** So that's kind of like a backwards-compatibility thing.

**Lars Wikman:** Yeah. But more modern players will correctly skip it. And that's good, because IP3v2 moves it to the start of the file... Which makes it better when you're streaming the audio, for one thing, which means you can read all the metadata, and then start playing it. And I think that's what most pocket mp3 players that existed for a long while, but no longer do - they don't keep the whole song in memory, I don't think. They're very, very dumb little machines. But they can probably read the ID3 tag to show the title and keep that in memory. But yeah, if we were only supporting ID3v1, this would have been a two-day project, I think...

**Jerod Santo:** Maybe less... \[laughs\]

**Lars Wikman:** I mean, tests, and then documentation...

**Jerod Santo:** So one part of this -- so we hired Larsen to do this work, and he did a great job over the summer of getting this done. This is so that I wouldn't have to do a much slower, much worse job of trying to accomplish the same thing and never actually get it done, which is historically what we had done with chapters. And part of that was like me being your customer, right? So you got to do all the standard consultant customer relations... It's fun for me to be the customer, because I can ignore you for a long time, and then suddenly be like "Let's work on this!" and you're supposed to be nice to me anyways, and be like "Yes, sir. Let's work on it right now, when you want to, because I'm the customer." So maybe we can talk about that dynamic.

But part of this was like me saying, "Well, our specific needs are important here", and one of the tiny little things that I wanted to do was when we mix down a WAV file into an mp3 file inside of Adobe Audition, which is our workflow, Audition adds some lame ID3v1 stuff. And then when you throw that through some sort of a parser, such as a command line tool like the ID3v2 command line tool that we're using to test, it will display that stuff even after we've written our own good ones. And I was "Can't it just also strip that?" And you're like, "Well, it's at the end of the file. Does it really matter?" And I was like, "No, not really..." And then the nerdy completionist in me was like "Yeah, but I really do want it to be out of there..." So I wrote this little function - you can see it in our mp3 kit - that just removes v1 tags. And it's like seven lines of code, and it took me like 25 minutes... And sure, I'm just removing them, I'm not writing them. But it was like literally a 15-minute deal. And so I think if that was the goal, I think a) we probably wouldn't have hired you. But b) you probably would have accomplished it in like the time it takes to eat lunch.

**Lars Wikman:** I mean, it's one pattern match in Elixir... Since it's a static length, it's always 128 bytes. So that's one line in Elixir.

**Jerod Santo:** Yeah, it really is nothing in Elixir. Elixir is really well suited for this kind of work. Maybe you can speak to that as well at some point.

**Lars Wikman:** Yeah.

**Adam Stacoviak:** Does an mp3 have to have one of these tags? So if Adobe Audition takes a wav file and mixes it down to an mp3 and puts this lame ID3v1 version in, does an mp3 have to have ID3 at all?

**Lars Wikman:** No. The mp3 MPEG standard has no metadata system. That's why ID3 was introduced by some enthusiasts...

**Adam Stacoviak:** So why? I mean, we don't ask that there'll be to put anything in there.

**Jerod Santo:** Well, they just want to...

**Lars Wikman:** No, I think there'll be -- Audition writes two things. So it probably does an ID3v1, that Jerod removes, but it also does an ID3v2...

**Jerod Santo:** Correct.

**Lars Wikman:** ...with proper, the more likely metadata. But you can have both. So it probably adds both for safety.

**Jerod Santo:** It does. And then your library overwrites theirs on the v2, but it'll let the v1 be a dangling 128 bytes...

**Lars Wikman:** \[17:59\] Yeah. And the library can overwrite both the 2.2 and 2.4, because it's very easy to parse the parts that are required, to sort of capture the tag and strip it out. But there's a bit more nuance when you start parsing version 2.4, and then what's in -- since you didn't need it, it wasn't worth putting the time in. Welcome contribution though, since it's open source.

**Jerod Santo:** It is open source. You can go out and you can install it in your mix file, and it's out there on hex.pm, and it's also out there on GitHub for the source code... So I encourage people to use it.

**Lars Wikman:** And I think that's a very classy approach of you all, to actually hire someone to do the job, but turn it open source and take on maintenance.

**Jerod Santo:** Yeah. Well, it's basically just replacing me with you on the bootstrap, like on the parts that you're good at, and I would be less good at, and then just like treating it like it's our own thing, which is exactly what we would have done without you. I would have built a library, released it open source and maintained it. And so happy to just bring you along for the ride, get a better library than I could have written, faster, while I'm also working on other stuff... You get some business out of it, so that's good for you and your consulting firm... And we all get the benefit. I mean, why not?

**Lars Wikman:** Yeah, I think it's a classy move.

**Jerod Santo:** Yeah, I try to keep it classy around here. I appreciate that.

**Lars Wikman:** But we all only mentioned sort of titles and albums and artists.

**Jerod Santo:** True.

**Lars Wikman:** ID3v1 only had that, and some genre, and a comment of 30 bytes, I guess... But ID3v2 added so much more. And a bunch of the things are just very reasonable things like "Oh, the year it was released and published, and who the publisher was, and who the composer, and the writer, and the lyrics by... sort of things... So just more metadata that you could add, that were simple text fields. But then you start getting things like artwork; you can bring some artwork in there. Pictures, URLs... But as you go into implementing this stuff, you find the fun and weird tags. And that's sort of what prompted this blog post. Because it's absolutely fabulous stuff in there.

**Jerod Santo:** Yeah, there is fabulously interesting stuff in there. And I wish we were like a fly on the wall of the meetings of the spec writers... Because it seems like to me, as I read your posts, I'm like, "This seems like almost like maybe ID3v1 was just written maybe in a weekend, by some enthusiasts, and then like serious business people came along." And I'm just completely making this up. I don't know the history.

And then I was like "You know, what we need is everything and the kitchen sink." And it's almost like, all these different frames or tags, these specific types of frames you can put in your tag - each one seems like somebody's pet project. Like star ratings - isn't that in there?

**Lars Wikman:** Well, if we want to talk ratings, we should probably first talk about the play counter...

**Jerod Santo:** Okay.

**Lars Wikman:** ...because the ratings build on the concept of the play counter, and the play counter is--

**Jerod Santo:** The play counter is actually the funniest one. Tell us more.

**Lars Wikman:** So that's the PCNT frame. So every field in ID3v2 is a frame, and you can have an arbitrary number of them, up to like 256 megabytes of tag...

**Jerod Santo:** Wow.

**Lars Wikman:** ...which will outstrip most audio files you've ever seen.

**Jerod Santo:** I was gonna say, if you had like 192 kbps song, how long would that song have to be 256 megabytes? Like, five, six hours maybe.

**Lars Wikman:** It'd be a chunk of a song. That's a decent podcast.

**Jerod Santo:** Maybe like a Grateful Dead concert.

**Adam Stacoviak:** Sure.

**Jerod Santo:** Like a whole concert from the Grateful Dead... I don't know, just guessing.

**Lars Wikman:** \[21:54\] Yeah. But the play counter frame is a very, very short frame. It has the identifier that is the play counter, and then it has a number. And the idea was that the player you use to play your file would increment that with one, when you've started playing the song... Changing the file forever.

**Jerod Santo:** Changing the file forever. Yeah, so this is like when you almost feel violated; like, "This thing changed me." Shouldn't a audio player be like read-only on a file? I just feel like that's just classy; talk about keeping it classy... It's just weird; like, you're gonna change the actual thing that you're --

**Lars Wikman:** But it was also a different time.

**Adam Stacoviak:** Yeah. I was gonna say, what's the timeframe of the implementation of this? Because this was probably back in the day when I was managing my iTunes library, and it was mainly me listening to my mp3s.

**Lars Wikman:** And if you look at those types of libraries, they would have like a SQLite, or other metadata database where they kept their play counts. I don't think iTunes wrote the ID3 play count. It might have, but I doubt it.

**Adam Stacoviak:** I doubt it, yeah. But you've gotta wonder where the spec was trying to go, what it was trying to solve. Somebody put this out there... Like you said, Jerod, there's some businesses -- maybe some programmers initially, \[unintelligible 00:23:06.05\] "How can we put our composer in there, and give everybody credits? And how can we get credit for the record label? How can we get all our names in this file so that we get marketing?" This may have been like the old -- not so much social network by any means, but like how do you distribute who you are to the world? And you embed it in these mp3 on the internet.

**Lars Wikman:** Yeah. And it's clear if you read through the spec that they considered this metadata to be sort of a significant thing that would communicate a ton of information, and potentially carry data. This play counter is a weird one, because almost no one can see how that would be good... I speculate in the blog post that it might turn out to be sort of a cool, hipster thing if this had caught on, so that all the mp3 files out there had play counts. Could you find that Enya song really close to the source? Could you find an OG? Like, is it 2 play count? then it's probably close to the rip, right?

**Jerod Santo:** Or just somebody didn't like the song very much.

**Lars Wikman:** Yeah.

**Jerod Santo:** They listened to it once and bounced. Accidentally had it on repeat.

**Lars Wikman:** It definitely feels like sort of like a silly frame. But then we have one that is actually used when reading songs. I think Windows File Explorer preview can actually show the popularitymeter stars.

**Jerod Santo:** Is that how you say that? I've been reading that, and I've been reading it the popularimeter...

**Lars Wikman:** Popularimeter... I don't know. Popularitymeter is what I'm going for.

**Jerod Santo:** I liked the way you said it, popularimeter.

**Lars Wikman:** It allows storing an arbitrary number of up to the max frame size of 16 megabytes, probably, email and rating pairs. So this is personally identifiable information.

**Jerod Santo:** Oh, it's your email alongside with your rating. I didn't realize it till your email. Wow...

**Lars Wikman:** So we can get a Jerod rating, we could get an Adam rating, a Lars rating... And that's fantastic.

**Jerod Santo:** That's fantastic... \[laughs\]

**Lars Wikman:** And it also bundles in a personal play counter. So you can know, was this rating all BS? Have they even played the song?

**Jerod Santo:** Oh, they never even actually played it...

**Lars Wikman:** I mean, you'd care more what someone who plays the song 100 times has to say about it, I think...

**Jerod Santo:** That's similar to like the Amazon reviews certified purchaser tag. You know, like, "Well, this person reviewed it, and we can verify that they purchased it", which is a nice little added information. Here it's like this person rated it five stars, but they never actually listened to the song.

**Lars Wikman:** Of course, there's nothing to stop Winamp from showing a UI where you can just edit your play count...

**Jerod Santo:** Right. My favorite part about this whole thing is it relies upon this concept, I guess -- like, if this was going to finally make its way back around to the record label, or the artist, it assumes that it had some sort of mechanism by which they could collect all of these mp3 files, right?

**Lars Wikman:** \[26:14\] So I don't think this is signal back. I don't think this is feedback. I can only imagine it being a sort of trading thing, where files are passed around.

**Jerod Santo:** Yeah, but you can just write whatever you want into the -- you can just download Lars' open source Elixir library and just change the values.

**Adam Stacoviak:** Yeah, because there's nobody saying you can't change the value. If you can edit the thing, the metadata, you can--

**Jerod Santo:** Well, if it makes it more collectible, why wouldn't I just do that?

**Jerod Santo:** Right. Well, I mean, I can change your rating. You could have put a five-star rating, or whatever the... Is it zero through 255?

**Lars Wikman:** Oh, yeah. 0 to 255. That's a good rating system... \[laughs\]

**Adam Stacoviak:** That's a massive range... If you have rated it 100 out of 255 - like, is that good or bad? I don't know... \[laughs\]

**Lars Wikman:** Like, this song is clearly a 143...

**Jerod Santo:** Right. Like, "Well, I disagree. It's more of a 144." \[laughs\]

**Adam Stacoviak:** It's a wide range, that's for sure. Don't get Brett Cannon on that range. He'll be upset.

**Jerod Santo:** I was gonna say, we need somebody who can formalize what each value means, so that we can actually have an objective measure.

**Adam Stacoviak:** You've really got to think about what the idea was though, because if this can be edited by anybody... If in the spec process - and this is before the times of ubiquity of Spotify, and streaming music versus shared files via unknown places to share files, etc... What was the idea? Like, what were they trying to solve for, really? I mean, it seems to have no utility in retrospect.

**Lars Wikman:** So I imagine this is a speculative feature, a hundred percent, where they figured, "Oh, if something like Winamp implements this..." Because this was probably launched around the heyday of mp3 exchanging in the more manual sense... Then, if Winamp displayed these things, or you could build a way of exchanging these and seeing these ratings... Like, let's say Napster would show these ratings; then suddenly you'd actually see -- you get some signal; you could index some of this and see, "Oh, I only want five-star songs, essentially." Or 255 rating songs, you know?

**Adam Stacoviak:** That's right.

**Jerod Santo:** So just to pin this to a timeframe - because we're kind of guesstimating around... According to ID3.org, the version 2.3 was authored in February 1999.

**Adam Stacoviak:** Oh, yeah.

**Lars Wikman:** In 1999.

**Jerod Santo:** So even maybe older than I was thinking. Maybe it wasn't at that point being used yet, maybe it was just finalized and the people had to start implementing it... But it goes way back. We're talking 25 years.

**Lars Wikman:** Yeah, so it's not new. So it is really predating a lot of our conceptions of what an audio file should act like, I think.

**Break:** \[28:56\]

**Adam Stacoviak:** So the correlation to a well-known exchange of mp3 platform was June 1st, 1999. So timeframes were pretty close; maybe they were both speculating on where this file format could go/would go. I don't know.

**Lars Wikman:** And a lot of the frames that are slightly unusual in this spec are also pretty decent web citizens. So in many cases, they are required to reference either a URL where you could find a contact email, or directly a contact email, when there is a source that they want to reference. You know, "Go here, because we can really just include a ton of information in this... But over here, this is where you find the information about who this is from."

For example, the commercial frame -- and this should be interesting to you. Monetization - this is something that podcasts work hard at.

**Jerod Santo:** Okay, now you're talking my language.

**Lars Wikman:** The commercial frame. This frame enables several competing offers in the same tag by bundling all needed information. So every offer has a price, specified in any number of currencies...

**Jerod Santo:** Oh, wow. \[laughs\]

**Lars Wikman:** A date for how long this offer is valid...

**Adam Stacoviak:** Wow...

**Lars Wikman:** A contact URL for reaching the seller, and a "Received as" field that can indicate if it's delivered -- for example a standard CD with other songs, a file over the internet, or a stream over the internet, or a ton of other things.

**Adam Stacoviak:** They had some high hopes for this file format, this spec. I mean, there were some far-fetching ideas here.

**Jerod Santo:** So this is definitely where the business guy came in and decided he needed his frame...

**Adam Stacoviak:** Yeah. This made me think a little bit, like, could the mp3 format and this ID3v2.3 be used to share information under the radar? Like, "Ship mp3s around this world where people are exchanging mp3s." Maybe there's a Trojan horse in there, maybe there's a virus in there, maybe that's espionage, maybe it's corporate secrets... I don't know. Could you shove information in what you think is an mp3, but it's not -- it is an mp3, and you can play it as an mp3, but it's really meant to deliver something else.

**Lars Wikman:** So you have, for one thing, attached file as a frame. And you can go up to 256 megabytes.

**Adam Stacoviak:** Yeah. "This is a really big mp3. Wow." Does the length of the mp3 suit the file size of the mp3?

**Lars Wikman:** "How many mp3s can we nest?" That's an interesting experiment...

**Jerod Santo:** That'd be a good way of smuggling. You could smuggle a whole album by just putting all of the other songs into the one songs attached files.

**Lars Wikman:** That's true. You could probably fit -- you could definitely fit a whole album into a song.

**Adam Stacoviak:** But how would you extract an album out of the tag, the frame? Well, you need to use a library, wouldn't you?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So you'd have to have some programming skills, or some access.

**Lars Wikman:** Or a tool that parses for that particular tag... But I don't think anyone uses that for anything. There's also custom comments, which you could use and abuse for many things, custom URLs...

**Adam Stacoviak:** Wow.

**Lars Wikman:** So you could ship anything in this.

**Adam Stacoviak:** So you could do a lot, really. You could do a lot. You could put a database in there... I think you said an SQLite database can go in there...

**Lars Wikman:** Oh, yeah. That would be convenient...

**Adam Stacoviak:** An mp3 file... An ISO... Could you put an ISO in there?

**Lars Wikman:** Yeah. I mean, it's an arbitrary file. You could do anything.

**Adam Stacoviak:** As long as it's under that file size, you're good to go.

**Jerod Santo:** 256 megabytes... Yeah, I guess it's small enough--

**Lars Wikman:** And I wonder if many parsers actually enforce that... Because there's no reason to enforce the file size of the tag you're trying to read.

**Jerod Santo:** Right. All you want to do is get to the part that you're interested in, right? That's a parser.

**Lars Wikman:** \[34:10\] Yeah. And you read the fixed -- so when you're parsing these frames, you look for a frame header. And in that frame header, you have "Oh, what kind of frame is this? How big is this frame?" So if it's a frame you don't understand, you can just skip that number of bytes from the frame header, and then you're at the next frame, you can read that instead.

**Jerod Santo:** Gotcha. You can get to the next one.

**Lars Wikman:** So I think any parser implemented for this would honestly just look at those sizes, and probably not care about the size of the actual tag. There's nothing fundamentally stopping it.

**Adam Stacoviak:** You could break the rule then.

**Lars Wikman:** I would expect most parsers break the rule, because there's -- "Oh, I wonder if it's actually the size field of... This is probably the size field of the tag header." So the first piece of the ID3 tag indicates how big is this tag.

**Jerod Santo:** Which lets you skip the whole thing if you're not interested in it.

**Lars Wikman:** Yeah. So that's what we do when we're parsing. We know that we don't need to read more than that length of file. I don't think we actually read the full file, because we just start looking at frames and then read as much as we need... But we use it, for example, when we need to replace a tag, because then we can see, "Oh, how far do we need to skip? How much do we need to throw away?"

**Jerod Santo:** To slice off the front, yeah.

**Lars Wikman:** But this commercial frame also lets you include the seller's name and an embedded logo...

**Jerod Santo:** \[laughs\] I love it.

**Lars Wikman:** And -- I mean, I could see this as a use case, if there was an mp3 player that really respected this, where "Oh, we're selling mp3s online." I mean, there have been a ton of businesses that do that. "Oh, here's the sample." So you can get a sample of the song. And then you embed this commercial data in it for buying the full thing. And then you could get that offer right in your client, right? I don't think anyone ever implemented this, but I hope someone did.

**Jerod Santo:** Yeah.

**Lars Wikman:** And then when you've bought the song, you could get offers for the shirt.

**Jerod Santo:** Ooh... An upsell.

**Lars Wikman:** Yeah. I mean, you could get current offers. You could get at-the-time-of-purchase-relevant offers... But at least there's an expiry date.

**Jerod Santo:** You, you'd be able to expire that sucker. It's interesting that we don't even think about -- just kind of going back to Adam's thing with his immediate access to a song from the '90s... Except for maybe some of us nerds and people in the audio world - like, we don't think about the files so much anymore when it comes to listening to music, or listening to podcasts. I mean, we wouldn't even care if our job wasn't to write mp3s out and ship them around the world as podcasters, right? That makes us care. And we wouldn't care about any of this stuff, except for that it's just interesting intellectually, if we didn't want to add chapters to our podcasts. Like, we don't want to add chapters to our mp3 files; we couldn't care less. But we do want chapters in our podcasts, which means we have to add them to our mp3 files. It's a means to an end, for us even. But most people don't even think about like "Oh, my new episode of Beam Radio showed up. I'm so glad that I downloaded the mp3..." I mean, even inside podcasting, they're not all mp3 ease. You can ship AAC, you can ship mp3... It depends on what the players support. You can probably ship FLAC...

**Adam Stacoviak:** Ogg Vorbis.

**Jerod Santo:** Ogg Vorbis... Many of our listeners probably exclusively listen to Ogg Vorbis-based podcasts. I guess -- that can't be true, because they're listening to this one here. So that's a bad speculation. But point being is we've kind of -- at least when it comes to audio, to a certain extent, culturally, we've kind of transcended the file paradigm.

**Adam Stacoviak:** \[37:54\] Isn't that the case for most things though, really? I mean, you take pictures all day long on your phone, and you don't think of them as files necessarily. You think of them as an image. You upload it to whatever platform you prefer, or share it via iMessage, or AirDrop, or whatever... You don't think of it as a file, really. I think the file paradigm really is like becoming erased.

**Lars Wikman:** I think files exist for PDFs.

**Jerod Santo:** Yeah, I was gonna say, business stuff. I was kind of thinking like, where is it that you still think about files? It's like, "Will you send me the attachment to that Word doc, or to that PDF?" And now we're thinking files, aren't we? But I agree with you, images - you kind of don't think about it that way very often.

**Lars Wikman:** Yeah, it's really getting lost, the whole idea of a file... At least the file you edit. Because a PDF is typically still a file, still a document, but you don't edit it. And edited documents are getting rarer with things like Google Drive, and Office 365, and the cloud. Docx is still a thing, but it's less of a thing than it has ever been before.

**Adam Stacoviak:** I love it when people send me a docx file which is editable, and say "Fill this out." It's like, "Well, I don't have the fonts you had... You're gonna get it back all jacked up." Plus, I'm on a Mac, you're on a PC, or something like that... Like, did you think this through? I can add my signature in my PDFs via Preview, which is -- I love that feature. Like, you scribble your own signature and you drop it on any PDF you want... It's mainly contracts, PDFs, the occasional docx file, where they're like "Fill this out", and it's like, "Why? Just give me a PDF? Or send me the DocuSign." Who in this world sends somebody a file and says, "Take this thing and sign it, and then send the file back to me signed."

**Lars Wikman:** I had a background check run on me by a client at some point, and they needed me to send a release to the Swedish police authority... They're a fintech, so it was sort of normal. But I had to print a form, sign it, stick it in the mail... It's like, them and the Swedish IRS are the only people that get me to do that these days. And the IRS my wife takes care of, thankfully. The best CFO I could imagine.

**Adam Stacoviak:** I love it when they see "We need real ink on this thing." Really? Like, what?! I mean, I guess, if you can't prove I did it... Like, real ink.

**Jerod Santo:** Back in the day weren't there people that actually would forge other people's signatures? And maybe it was just in the movies. Like, you'd hire somebody who would -- they would study a signature, and they would forge it, and you could compare it... The judge or the jury or whatever always compared the signature, and be like "Is this really Adam Stacoviak's signature?" And it's like, "Well, here's a comparison." That always struck me as weird, because my signature is never the same. Every time I sign it, there's like these subtle differences... And we're getting to the point where I have it saved inside of Preview, and so I can just slap it on stuff... It's like, it's never been less representative of a person than a signature, and yet we still -- at least here in the States, we're still asked to sign for stuff if we don't have Apple Pay or whatever on a credit card deal... Usually at restaurants, because they want a tip, so you've got to write the tip, then add your signature... And it's like, you can just do squiggly marks. It doesn't matter.

**Adam Stacoviak:** And I do.

**Jerod Santo:** Is forgery dead?

**Adam Stacoviak:** It's never my real signature. It's always some sort of scribble.

**Jerod Santo:** Can you not be a professional forger anymore? Has that business gone by the wayside?

**Lars Wikman:** I think they get into NFTs now.

**Jerod Santo:** \[laughs\] That's funny... I mean, there is NFT vibes here, isn't there? I mean, going back to the spec... Isn't there NFT vibes going on?

**Lars Wikman:** Yeah. So this is actually something we could pitch for your subscribers, because I've seen that in my Changelog++ subscription it says "For Lars Wikman." Oh, nice. And you could also additionally tag my mp3s with the ownership frame.

**Jerod Santo:** Oh...!

**Lars Wikman:** Then you could put the name in there.

**Jerod Santo:** We could make you the owner of that particular mp3.

**Lars Wikman:** \[42:04\] Yeah. You could even ship a user frame, which is the Terms of Use...

**Jerod Santo:** Hah! A EULA. Do you have to sign it before it'll play? "Before you listen to this podcast, please click you agree to these terms in the..." There's a terms frame... Okay. Owner frame is kind of cool. Like, what if we do that, just because?

**Lars Wikman:** I don't think you want extra copies of your mp3s for every one of your subscribers though...

**Jerod Santo:** Right. But if we're doing dynamic ad insertion style moves - you know, there's people that are actually stitching their mp3s live on request; we could certainly do that. I agree, we do not want to do this, but you can get it done if you're serving a new mp3 for each Changelog++ member. That would feel concierge, wouldn't it, Lars?

**Lars Wikman:** Yeah. I just wish we could get the parsing into all the podcatchers...

**Jerod Santo:** Yeah, true.

**Lars Wikman:** ...so it would show your mp3.

**Jerod Santo:** Yeah, you could even match it with like your SSH public key, and be like "Wow, this really was signed, sealed and delivered."

**Adam Stacoviak:** Actually, that's a good idea, Jerod. If you put the public key in there, you could ensure that only Lars could listen to the file.

**Lars Wikman:** So there are cryptographic mechanisms for encrypting the entire file using ID3. There's also methods for just signing a group of frames, or part of a file to ensure that the ownership, for example, hasn't been tampered with... And I guess that's sort of where you get into NFT territory, aside from not being uploaded anywhere.

**Jerod Santo:** \[laughs\] I love how we can make up ridiculous things and Lars is like "Actually, there is a frame for that." Everything that we think of, they've got it covered.

**Lars Wikman:** More useful maybe would be synchronized or unsynchronized lyrics, which you could use for your transcriptions... Like, unsynchronized probably. I don't know if you have timestamps in your transcripts.

**Jerod Santo:** Not as granular as we'd want. We have timestamps that are just like every once in a while, but they're not like phrase by phrase, or word by word.

**Adam Stacoviak:** Yeah.

**Lars Wikman:** I think you could probably use synchronized then. You probably want to use both... But yeah, I'm not sure anyone uses these.

**Adam Stacoviak:** But there is room then in there for a transcription?

**Lars Wikman:** Oh, yeah.

**Jerod Santo:** Oh, yeah. \[laughs\] That's just text. There's plenty of room.

**Lars Wikman:** Yeah. I think there's an extension spec that covers more accessibility features, and I think that one has specifically captions. So maybe that's what you'd want to go for. Chapters is an extension chapters. Chapters and table of contents - those belong together. And those are an extension of the ID3v2 series of specs.

**Adam Stacoviak:** But all this assumes there's a client, or a parser or library, something out there that can consume it. Like, it's one thing to put it in there, but it's another thing to make it useful by having software that can render it, use it... You know, make smarts around it.

**Lars Wikman:** Yeah. Almost all these frames are dead in the water.

**Jerod Santo:** You know what would be a really cool hack project? It's like, build a cross-platform -- like use Tauri, or something; build a cross-platform mp3 player that just supports every ridiculous frame in the ID3v2 spec. And it has all the features. That would be so cool.

**Lars Wikman:** I've been so keen to try.

**Jerod Santo:** Yeah. I would use it for 10 minutes, for sure.

**Adam Stacoviak:** 10 minutes... \[laughs\]

**Lars Wikman:** But listen, my idea is even more grand, because--

**Jerod Santo:** Okay...

**Lars Wikman:** ...it could be backed by mp3 files that are only on the server. And this mp3 would be the database for ratings, for play counts... So you get this single source of truth. And it would, of course, be able to show the commercial options, so you can monetize this player.

**Jerod Santo:** \[45:57\] Okay...

**Lars Wikman:** And you could even add -- so there are audio events. So there are ways to embed cues in the metadata like this; for example, "Fire the fireworks here" effects... I think that might be used in certain types of staged productions. I'm not sure. The capability is there, at least.

**Adam Stacoviak:** Wow. So much.

**Lars Wikman:** So much...

**Adam Stacoviak:** Just so much. You just said fireworks...

**Jerod Santo:** "You just said fireworks..." \[laughs\] Completely straight-faced, too.

**Adam Stacoviak:** I mean, an mp3 having an event that fires fireworks.

**Lars Wikman:** So I think that frame has wide use it, and it also has some very simple uses, like "This is the chorus. This is the bridge. Oh, guitar solo." Like, you can specify things that happen in the audio. But you can also add cues if you want to provide cues for something else. And this is where monetization really comes in... Because then you can actually decide which commercial frames -- and this is not in the spec, but I see no reason why you couldn't sort of build a slightly ad-hoc solution for this... But you could queue up your advertisements from the commercial frame based on these events throughout the file.

**Adam Stacoviak:** Is this the best place for this data? I'm thinking like --

**Lars Wikman:** In the mp3 file?

**Adam Stacoviak:** Yeah. Because --

**Jerod Santo:** Well, of course. That's why they've put the frame in there for it.

**Adam Stacoviak:** Well, I guess I'm thinking -- maybe this is wrong... Spotify is obviously the most ubiquitous place you can listen to music; that and Apple Music, of course, because Jerod's an Apple Music person and every time I say Spotify he's like "Cringe. I don't use that. I use Apple Music." Anyways... Platform aside, would they be interested in using these frames in those ways? Because wouldn't their individual mp3 somewhere on disk be what you say, which is their database? Is that the best place to store the data to do these things? Or is that even a good use case for them? I'm just trying to find, like, how could you actually provide usefulness around this?

**Lars Wikman:** I would probably assume on Spotify every song is backed by one single mp3 on one disk somewhere... And the play count and everything that's used to calculate how much they owe artists and all of that - that's just stored in ID3. I assume that's the case. And that sounds like the optimal --

**Adam Stacoviak:** No way... Do you think they're doing this?

**Jerod Santo:** \[laughs\]

**Lars Wikman:** No, I absolutely do not think they're doing this. And it would be absurd.

**Adam Stacoviak:** Exactly. Like, this is the worst place to put the data, right?

**Lars Wikman:** One of the things I find delightful about the play count is that if you have a practice of hashing your file to keep track of whether it bitrots, or if anything's wrong with it - I mean, it would change the hash every time you add one to the play count.

**Jerod Santo:** Yeah. That's why I was going back to like "You don't mutate my files. You're just an mp3 player", right? Just read-only, please; please don't change my MD5 sum, or whatever.

**Lars Wikman:** But maybe Winamp wants to add some commercial offerings into your mp3 files...

**Adam Stacoviak:** He's really on this commercial kick, isn't he, Jerod? He's just really pushing this commercial kick...

**Jerod Santo:** He is. He's trying to find a way of making this viable.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I actually like the idea of Spotify/Apple Music backing their entire play counts and ratings by modifying their mp3 files... Because what they're doing is they're introducing bloat into their network fees... Because they're actually increasing the size of the audio by modifying the ID3 tags each time. I mean, once you hit that 255 limit - where are you gonna go from there? You've got to create another frame, or I don't know; I don't know how it works, but...

**Lars Wikman:** Yeah, you have to stream 256 megabytes before you get to the audio...

**Jerod Santo:** Exactly. So that is, to me, I think the best place to...

**Adam Stacoviak:** So is this a combination of just failed dreams on the ID3 spec writers? Like, they had a lot of vision for where it could go, and they were just way off? The usefulness of these features is just not there?

**Lars Wikman:** \[50:07\] Many of the frames are perfectly useful. So the absolute majority of frames are text frames, which is just a general -- like, this can be a string, and from ID3 version 2.4 it can be multiple strings. So if for some reason you suddenly support multiple titles, which is either great or terrible... Any number of titles.

**Adam Stacoviak:** "We really couldn't choose the right title, so we just gave it two." I can see us doing that one time, Jerod... Or you could A/B test it, which one gets played more.

**Jerod Santo:** I do like that they have a frame for mood now... So not only can you apply a genre, like blues, but you can apply a mood... Like blues... I don't know, sad.

**Adam Stacoviak:** I've got the blues. Not listening to the blues.

**Jerod Santo:** Right. So that's cool. But yeah, most of them are just text, and most of them are -- I mean, I guess the interesting one that isn't just text... We talked about attached a picture; so that's what people use for putting their cover art, or their album art, shipping that with the file, which is nice... That's useful. But really, chapters is the one that actually is like -- people use this. This is cool.

**Lars Wikman:** A lot of clients or a lot of encoders also add some kind of comment, like "This was encoded using blah-blah-blah."

**Jerod Santo:** Isn't there an actual field for that?

**Lars Wikman:** Well, there is a comment you can add, and then there's probably also one for the tool. I don't remember. But I bet there is.

**Jerod Santo:** I think we're doing that one, if I recall... Let me pop open the code to confirm

**Lars Wikman:** Software, hardware and settings used for encoding would be one.

**Jerod Santo:** So the ones that we are setting are: artists, title, subtitle, album, year, date, genre, publisher, and encoder.

**Lars Wikman:** So one of the good things about these frames is the frames you're not using, you don't add to the tag, at all. So there's no dead usage. And that way, they could take a stab at a bunch of frames that were maybe not realistically going to work. We tried to support them in our encoder and decoder regardless, but...

**Jerod Santo:** You were going for 100% coverage on that? Do you have a commercial frame?

**Lars Wikman:** I believe we have the commercial frame. There are some frames that I don't think we've merged yet, or added yet. But the tricky thing is we haven't been able to test these frames, because there's no other implementations that I know of that do these.

**Jerod Santo:** Right. Well, even with the chapters, I guess - some of that we did talk through on Ship It, so for those who are curious, Ship It 70 has some more details on more of the chapters and Changelog side of things... But we definitely did hit -- I guess that's where I came back in, was like you were kind of building this thing in a vacuum, an Elixir vacuum, where you would encode it in Elixir and decode it in Elixir, and test it with your encode and decode, doing your best, but it actually hit the reality of "Will other tools parse this? Will podcast apps parse this?" That's when we actually had to do some QA, and some bug fixes, and realize that I guess maybe the test suite wasn't quite as comprehensive, or would you describe it as rigorous as it needed to be?

**Lars Wikman:** Yeah. So when we implement the test, which is we use the library to encode this, and then we check that it's the binary we expect - in the end, that just means that we read the spec twice, and ideally, those two readings match up with our implementation. The problem is, we could introduce the same bug twice, and that can fairly trivially happen. Most of the issues we've had to track down to fix have been one stray null byte.

**Jerod Santo:** Those are the easiest ones to find, right? The one stray null byte. At least it's easy to see... How would you go about finding one straight null byte? What were you actually -- were you going frame by frame? Were you reading -- was it like The Matrix, where everything merges into one to you now?

**Lars Wikman:** \[54:01\] Yeah, so I just look at the hex and just feel it. No...

**Jerod Santo:** Yeah, just kind of feel where the -- like in Severance, you can just feel where the bad ones are.

**Lars Wikman:** I don't have a ton of experience with hex editors, and sort of staring at that and figuring it out... So what I ended up doing was typically trying to figure out, trying to drill down to "Okay, this is the problem area where our encoding differs from, for example, whatever forecast has encoded this episode of ATP", that we used a lot for comparison; because they have chapters. So in some cases, I decoded their implementation, re-encoded the results with ours, and checked the differences. After a while, I started building out a whole slew of small functions that just stepped through the binary and gave me the differences, and helped me sort through them... And sort of "Oh, I know it's after the first thousand bytes, so let's hop to that."

There's a lot of drilling down and just figuring out "Oh, this is the problem frame", and then finding, "Oh, the only difference in this one is that we encoded correctly, with UTF-16, and they encoded correctly with ISO-88591." It should support both, according to spec. But if you do it this way, Overcast just won't show it, at all, and then your chapters don't exist.

**Jerod Santo:** Yeah... Thankfully, we didn't run into any sort of mutually exclusive encodings, where one app would support this, and not the other, and vice versa. Like, what if Apple Podcasts requires UTF-16 in that particular frame? We didn't run into any of those, thankfully. And then we tested it in probably half a dozen or so actual apps, to make sure that it was working...

**Lars Wikman:** Yeah. After we had it working in Overcast and Pocket Casts, I haven't seen any others that had issues now.

**Jerod Santo:** No. And I've been asking people to report if it doesn't render in their particular podcast app, and no one has said that. One person confirmed it worked in Podverse... I'm going from memory now. But nobody has confirmed it doesn't work in theirs.

**Lars Wikman:** And after this process, we also introduced a tool called ID3v2 - that's a command-line tool - and FFmpeg into the test suite. Now, both of those cover a subset of the frames, so we still don't have a comprehensive test suite, because there's simply no implementations that I know of, that we can rely on. But for example, FFmpeg covers chapters pretty well, and ID3v2 covers a lot of things that are not chapters quite well, at least decently... So yeah, that's about what we can do to ensure that we're doing the thing. If you know of reference implementations or good test suites, please do chime in in the issues, because it would be sweet to have more reference.

**Jerod Santo:** Or if you do build that cross-platform Tauri-based mp3 player app, that'd be a great reference, because you're gonna implement all these features. Maybe if it has like a command line, we can shell out to it. And also have a command line, please.

**Break:** \[57:17\]

**Adam Stacoviak:** How does any of this change, as we look at like podcasting 2.0 initiatives - does any of this current or future stuff play into that?

**Lars Wikman:** So they jam most of their stuff into the RSS feed, right?

**Jerod Santo:** Yeah. Yeah, so they have chapters in the RSS feed.

**Lars Wikman:** And that's probably a good approach, honestly. I don't think they want to extend ID3 or hack things into ID3. Now, I think ID3 has absolutely served many more purposes than they intended building it in the late '90s. I mean, many of the frames that are currently used with great success by podcasts were established in the late '90s; like album art, and all that. Chapters are later. But still, it has served podcasting well... But not everything needs to live in the file.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I mean, for me - I watch a lot of YouTube stuff, and I absolutely love when they have chaptering in YouTube videos, especially when it's at least 10 minutes or more. Like, who wants to listen to the whole thing? Just let me go to the thing that is the point. I use YouTube in a lot of cases for awareness, reviews, how to's... So knowledge-based, you know, gathering... Whether it's financial, whether it's software, whether it's tech, or hardware, or networking, whatever it might be. I'm always thankful.

So having this in our -- I personally have enjoyed it tremendously. And the one thing -- I'm not sure this is a byproduct, Jerod, of us doing start and ends for our chapters... You remember how we speculated, "Should we just put the start time with the chapter, and never worry about the end?" Because obviously, the the beginning of the next chapter is theoretically the end of the previous one.

**Jerod Santo:** Mm-hm.

**Adam Stacoviak:** In at least Overcast, I like the visual of knowing how long a chapter is. I don't know, is that a byproduct of the start and end or is it just assuming that based on the start of every chapter? What do you know about that?

**Jerod Santo:** \[01:01:54.01\] I haven't actually tested it. I assume it's there every time. So start times to chapters are required, end times are not required... Which makes sense. We include both. And I would assume, if I was writing that app, I would say, "Okay, if I have the metadata that shows me the start and the end time, I'm going to use that for my calculations. But if I don't, I'm going to use the start time, and I'm going to use the start time for the next chapter, and use that for my calculation." So I would use the end time if it was there and fall back.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I don't know if that's how it's doing it... But that's how I would do it.

**Adam Stacoviak:** But I've been appreciating that; like, just going back to some of the conversations we have on our shows, and just knowing "Okay, this segment is two minutes and 32 seconds." That's pretty interesting, how we can break it down... And then it also is a feedback loop for us as creators, I think. Because like when you think about respecting your listeners' time, being concise in your thinking, conducting a good show - it's evident in the length of a segment. If you've got one that's six minutes, it doesn't mean it's bad. But when you're listening to it, you're like, "Is all those six minutes pretty good signal? Or was there a lot of like side tangent stuff, that really didn't belong?" Maybe it's the culture and love of our show, who knows, but it just makes you look at your production differently when you know the length of each segment or chapter. At least this is what it's been for me, it's like "How long is this intro? How long is that ad spot? How long are all these parts? Does it really make sense to be that length? Could we be more concise? Could we be more? listener-first aware of time?"

**Jerod Santo:** "How long are they gonna talk about HBO's Silicon Valley? When are they gonna change subjects here?"

**Adam Stacoviak:** That's right! Please...

**Jerod Santo:** "Why does Jerod keep bringing up Star Wars? It doesn't make any sense." No, I think it does -- as creators, it is a signal back to us, I guess, to tighten things up maybe, and to also realize that some shows are way different than other shows. This one's, I would say, meandering for me in a good way, but it's gonna be hard to chapter this, because we just kind of talk about stuff... And other shows it's like "There's this part, then there's this part, then there's this part." And so the actual chapter creation process, which I do write about somewhat in the announcement blog posts - because it's interesting if you're into the inside baseball; and if not, then it's not. But it's a challenge, and it's an interesting part of it. It's like, you can't just add chapters, and then it's good. You have to actually make them good chapters, otherwise they're not worth anything. In fact, I haven't added the chapters into Practical AI yet, just because of the way our production flow works. We don't have good contextual chapters there. They're just kind of like "Here's the first segment, here's the second segment, here's the third." And for me, it's like, that's not even good enough to be worth putting them in. And so as of today, that's our only show that does not have chapters, just because we've got to get it to a place where our editor can actually put those in there in a way that's meaningful.

So the creation process for chapters is an interesting one as a creator. I don't know -- as a listener, I appreciate being able to skip down to that one part I was curious about, and not listen to the part about Silicon Valley, or whatever. I don't know, Lars, do you use chapters? You're a podcast listener...

**Lars Wikman:** Not very often, because most of the podcasts I listen to, I both want to hear what everyone's saying. Some of them are straight up conversational, and some are more sort of guest interview... But then it's still -- I feel like I lose track if I skip around. If it's a multi-guest podcast, then I wouldn't mind skipping, probably. I actually listen to a sort of mainstream podcast today, non tech nerdy - or I guess cyber; I guess it's tech-nerdy, but I think it's targeted at the mainstream.

**Jerod Santo:** Okay...

**Lars Wikman:** And this is the first time in ages that I heard dynamic ad insertion. So jarring...

**Jerod Santo:** Oh, yeah...

**Lars Wikman:** It switched to Swedish and started talking about a local electronics chain...

**Jerod Santo:** Oh, wow.

**Lars Wikman:** Or a Swedish electronics chain. Not that local.

**Jerod Santo:** That would be jarring, if it switches languages on you.

**Lars Wikman:** Yeah. That was so weird. I was like, "Ah, is this what podcasts are to people?" Because I just listened to this artisanal silliness...

**Jerod Santo:** \[01:06:07.06\] Right. We're definitely in that same bubble with you. I think there's one or two podcasts where I listen to them and I know they're doing dynamic ad insertion...

**Lars Wikman:** But I assume your ad rates are going to go up now that you can add a link and a logo to the ad read.

**Adam Stacoviak:** We haven't added the logo yet, but we've done, obviously, the link and the chapter for it.

**Lars Wikman:** They're credible cash flow options...

**Jerod Santo:** Yeah. I don't know if the ad rate's going up, but it's definitely a value-add. I mean, I think it definitely is something that our advertisers would like to have, especially if you're sitting there listening to it, and you can click over and check it out there while you're listening. I mean, I do that all the time when people put the links in.

**Lars Wikman:** It's nice. I don't think anyone thinks it'll move the needle much, but...

**Jerod Santo:** No.

**Adam Stacoviak:** This is definitely a sweat-the-details kind of move... We've wanted this for years. It's one thing you said Jerod, to put non-useful chapters in, and Practical AI is example... Like, it's just challenging now to get that in there workflow-wise and editor-wise and context-wise. But this to me is like a sweat-the-details move. And I think more than anything, one, getting a chance to buddy up with Lars and have this kind of feedback loop, and open source out there, and then this conversation from it, and then finally get to having chapters, and then executing on those chapters... Like, I've enjoyed the process of chaptering our shows, even though as part of the process of creating these podcasts, there's that, you know, "Here's the record time." We're all here an hour-ish; there's that time involved. Then there's the mastering time, and putting the show together, and telling the episode online... A lot of moving parts. And then to bolt on or add on one more, highly visible to a listener, and a UX factor, really, to a listener, to the listener, to us and to the listeners, is this chaptering part... You know, at first -- I've always wanted, but I thought, "Man, when we get there, it's one more thing to do in all the process to get to an ending artifact of producing a show and shipping it around the world. Wow, it's gonna be a lot of work getting there."

But now I've really enjoyed that process, because we truly are a -- I would say, not just because we say this, but we actually follow through on it, is we sweat the details. And this to me is one of those details where like when we're doing the chaptering of a show - at least for me, and you could speak to your process, Jerod, and how you do it, and how you feel about what you do... Like, I really enjoy it, because I feel like I'm giving a listener a superpower into listening to our shows; like a secret key. Should their client just support the feature into the good parts of the show, if they want to just jump around, or jump to their favorite part of that episode? Because there's a lot of shows people go back to and listen to again, and again, at least maybe twice or three times. Like, if you do that, then here's these really good waypoints. Hopefully, we've done our job good, and give us feedback if you don't think we have... But I think it's a sweat-the-details kind of move.

**Jerod Santo:** Yeah, and because we implemented them in the admin versus only in the mp3s and wav files. Because we could have done this as just one step in post-production, and use a tool like Forecast or something, to write those tags and then upload the file from there, and be done. But because we do it in the admin, it's a centralized source of truth for the chaptering information for an episode, and so we can emit that in multiple places. And why that's cool is that you have the exact same chapters on the website.

So if you want to deeplink to a chapter - like, you really liked this conversation we had, or this thing this person said was interesting and you want to link to that, there's deep links on the web page directly into that chapter, that you can share. So now chapters are shareable... Which is just a neat little byproduct of having it there, versus having it somewhere else, is we can put it there, we can do the podcasting 2.0 RSS feed style, which we support as well, we can put it in the mp3 via Lars' library, which we do as well, and we can also put it in our email as it goes out, as we do... So it's just like, that's cool.

\[01:10:14.20\] Yeah. So it's a cool thing, and we couldn't have done it without you, man. We really appreciate the work you've put in on it, and the quality that came out of it, the fact that it works... And for you putting up with me as a customer... Do you have any comments on me as a client? You know, I did client work for a decade, so I know what a client should be like.

**Lars Wikman:** Your description about going away and showing up checks out... But it's also weirdly that you reach out about these projects... So the last time we worked together on some projects was also when I was just heading into parental leave; I was this time as well... And when you get really, really busy, so you surface like once a week at best... And usually, you're quite responsive in general... But yeah, during these projects, that's also during your crunch time. I think Adam was on leave, and you were handling a lot of production, and all that... So ideal client in the sense that not particularly hanging over my shoulder, or getting too involved... But also maybe not the quickest turnaround on responses... Which has been fine.

**Jerod Santo:** Yeah, which was fine. That's my luxury, that's my prerogative as the customer, is to be less concerned with your time and more concerned with mine... Even though I don't want to be like that. But I think the only feedback I gave you code-wise was at one point I said, "I would like this to be a little bit higher-level API." That was pretty much all I ever said in terms of the end product. And then obviously, I tried to use it and it was like "Hey, how do I use this? It's not working." I'd say stuff like that. But I tried to provide as much information as I could, as like a good technical client.

**Lars Wikman:** Yeah. I think once you were available, and actually trying to use the thing - which took a little bit, but I think we were both quite busy so I was happy not to get too much feedback too early, because I had a one-month-old kid then, and it was easier when he was two.

**Jerod Santo:** Yeah. So you got the bulk of the work done by mid-July, maybe early July, and I literally didn't touch it until the first or second week in August. I just was like "Cool, I'll take a look", and I just never took a look. And I was building out the backend, too. I really wanted to be able to have the data in there, so we can start capturing it... And we actually captured the chapter data for a month and a half or so before we had the feature, so that we could go back and just like retrofit... Which I've done now, Adam; that's all those old mp3... Old as in going back to June. They all have chapters in them.

So I wanted to get that done fast, so we can start adding the chapters and figure out the workflow, and then I wanted to actually get around to your tool, and so I sat on my hands for a while doing that. And then I was like -- Ship It was coming up, Kaizen 70, and I'm like "We've gotta have this sucker done, so we have something to talk about." And then I was like "Lars, where are you? I have questions. I have problems. Answer me immediately." Hopefully, it wasn't too bad...

**Lars Wikman:** \[laughs\] No, no. It was all good. Now, it shows that you've dealt with clients, because the information I get out of you is much, much better than the average level of a non-technical client.

**Jerod Santo:** I even submitted a pull request at one point...

**Lars Wikman:** Yeah. Pull requests, GitHub issues...

**Jerod Santo:** I actually fixed a bug, but then you didn't like it. You did it yourself anyways.

**Lars Wikman:** I think I rewrote most of what you had touched at that point, yeah.

**Jerod Santo:** Yeah, you already touched that. But I was like "You know what - I'm sick of just complaining. I'm going to actually contribute a fix", and I did. And then the--

**Lars Wikman:** The spirit of it has been merged.

**Jerod Santo:** The spirit of it has been merged. Is that like a non-code contribution? Do I get any credit for that in the readme? "The spirit of Jerod's code exists."

**Lars Wikman:** I mean, you're listed as the maintainer...

**Jerod Santo:** \[01:14:04.08\] \[laughs\] That's only nominal, you know? You're gonna have to sign up for my GitHub Sponsors if you want any bug fixes. Just kidding...

**Adam Stacoviak:** Will this become a /thechangelog library? What's the plan for the actual code long-term?

**Lars Wikman:** It's going on the Changelog repos that's already owned by the Changelog org on hex.pm, which is the Elixir package repository.

**Adam Stacoviak:** We have tried, listeners, to get /changelog on GitHub...

**Jerod Santo:** We've talked to all the people...

**Adam Stacoviak:** Sadly, it's probably never gonna happen, so we have to be /THEchangelog on GitHub, sadly. It is a hard life and you can't get just /changelog somewhere, like -- we've got it on YouTube, you know... We almost have it on Instagram...

**Jerod Santo:** Yeah. If you want to check out all the new stuff on YouTube, go to youtube.com/changelog; you can check out there Changelog highlights... Well, anything left uncovered? Anything we should say before we call it a show?

**Lars Wikman:** I think I can and just add that we are planning a bit of a technical dive into the structure of ID3 tags and how we tackle the parsing and encoding of them... So there should be another Changelog blog post covering that. If you want to read the blog post we're talking about, that's a lot fluffier, and mostly about the thoughts that we've discussed here, which were awoken in me while I was reading the spec.

**Jerod Santo:** \[laughs\] Well, it was a fun, nostalgic, deep-dive into some ID3 esoterica, as I called it in the working title... Lots of fun chatting with you, Lars. Like I said before, I appreciate your work you've done on this. Really cool. It's got to feel good, at least as a listener of our shows, to -- or at least when you glance at the chapters in your app, even if not using them, and be like "Hey, my code. My code does that." It always feels nice.

**Adam Stacoviak:** Not just a listener, but a Plus-Plus subscriber.

**Jerod Santo:** That's true.

**Lars Wikman:** Of course. I wanna be closer to the metal.

**Jerod Santo:** And a fellow podcaster. Give a quick shout-out to your podcast, Lars.

**Lars Wikman:** Yeah, so the one I should shout-out is Beam Radio. So beamrad.io. I came up with the domain and I'm slightly proud of it. That covers Elixir and Erlang and the ecosystem overall, and it's me and a number of much, much more fantastic co-hosts.

And then I have a podcast, Regular Programming, but that one (RegProg.com) is currently sort of on hiatus... But if you want to hear me talk about programming in the very general sense, there's a bit of a backlog that you can go through. Otherwise, it's blogging and newsletters and the YouTube channel right now popping off.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** What's the handle? How do you search for -- is it Underjord?

**Lars Wikman:** Yeah, I go by Underjord.io.

**Jerod Santo:** Underjord... Say it again?

**Lars Wikman:** Underjord.

**Jerod Santo:** I won't try. I like it though.

**Lars Wikman:** It means "underground" in Swedish.

**Jerod Santo:** Oh, okay.

**Lars Wikman:** Very suspicious... My mother had notes on my company name...

**Jerod Santo:** Hah! Who's gonna trust you...?

**Lars Wikman:** Yeah, exactly. "Mom, I'm being cool on the internet!"

**Jerod Santo:** \[01:17:11.25\] \[laughs\] Classic, classic...

**Adam Stacoviak:** Well, speaking of the Plus-plus subscribers, I do want to mention something... So we often ship bonuses to our shows. And so what I love most about this new feature is it lets us give you a direct click - or tap, depending upon your platform - right into those bonuses. So we have a chapter called out for the bonus, and then for the more recent episode there's a another chapter after the bonus, which is a thank you chapter. So if you want to go find that one, the most recent episode that I'm talking about is episode \#506. So special chapters just for Plus-Plus members, directly to the bonus and the good stuff.

**Jerod Santo:** And a personal thank you do you... Did you embed each person's name into their own mp3 file, by way of dynamic thank you insertion?

**Adam Stacoviak:** That would be amazing, honestly.

**Jerod Santo:** Yes, dynamic thank you insertions.

**Adam Stacoviak:** I'll do a thank you in my voice, and then Stable Diffusion other voices, because that's the thing coming for each -- and I can do it, you know, accent, or dialect or language... That'd be--

**Jerod Santo:** Oh, and if you fill out your language of choice in your profile, we could send you via Ppen API's Whisper library, we can send you a thank you in your own language.

**Adam Stacoviak:** That's right. Yes, more...

**Jerod Santo:** More fun stuff to hire Lars to build for us.

**Lars Wikman:** Yeah, so I'll clear my calendar...

**Adam Stacoviak:** Anything else, Lars. Anything left unturned/unsaid?

**Lars Wikman:** No, I think we'll we've thoroughly covered what needs to be covered about ID3 tags. I'm also sure that there will be people who spend their whole lives focusing on the perfect curated mp3 collection, that are like "You've missed the most important part!!" But that's okay. I really only care about the podcast thing.

1:If people are interested in hiring you, should we send them to - pronounce in English terms - underjord.io? Is that the best place to send folks?

**Lars Wikman:** Yeah, sure. And probably the most appropriate thing to send my way right now is companies that are looking to hire Elixir developers. Not necessarily to hire me, but hire others. I have been helping a number of companies recruit, which is an interesting thing to do as a developer rather than a recruiter... Because many developers don't like recruiters.

**Jerod Santo:** Right. So you're saying you're a recruiter now?

**Lars Wikman:** Technically, yes.

**Jerod Santo:** \[laughs\] Technically...

**Lars Wikman:** Technically yes, which is the worst kind of yes...

**Jerod Santo:** Yeah. You started off trying to be cool on the internet, and you ended up a recruiter. So maybe your mom was right the whole time.

**Lars Wikman:** But I seem to have a decent approach to it, because the developers come to me. I don't actually hunt people down on LinkedIn. It's more that I post a job posting, and then people reach out, and then I talk to them.

**Jerod Santo:** Okay. So on the other side of the coin then, if you are an Elixirist who wants some work, maybe reach out to you as well.

**Lars Wikman:** Yeah. You can also check out the site. There are postings under the Jobs section.

**Adam Stacoviak:** Very cool. We'll link all that up. Check the show notes for those links, for jobs, or for hiring Lars and team for consulting... But Lars - hey, thank you so much for working with us. I've been mainly on air support for Jerod and the rest of everybody involved in this; the desire, I suppose, of this feature for many years now... But it's nice to see it actually in production, in use, using it every single week to deliver chapters to our listeners, and we couldn't have done it without you. Thank you so much. It's been awesome talking through what could have been with ID3v2...

**Lars Wikman:** It's been a pleasure.

**Adam Stacoviak:** Thanks, Lars.
