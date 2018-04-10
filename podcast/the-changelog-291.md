**Adam Stacoviak:** I think the best place to actually start is by talking about this tweet that you put out first, Jerod... It was huge. It was like 3,000 retweets or something, it was crazy.

**Jerod Santo:** Well, that might be hyperbolic, but it was definitely popular.

**Adam Stacoviak:** But that wasn't the first time at the rodeo - there was reddits, there was Hacker News, there was other stuff... The thing we're talking about is called Winamp2-js. You can find it at webamp.com. Is it .com? It's not .com.

**Jordan Eldredge:** .org.

**Jerod Santo:** Webamp.org. Let me share some coverage here, because I was actually looking this up as I was live streaming the other day, the hacking on this Winamp2-js... In the readme, Jordan has press coverage. He's been covered by TechCrunch, Gizmodo, Motherboard, The Changelog - which is a different section, but I understand... \[laughter\] And I was looking at the different dates and I was thinking "Do we scoop these guys?" So I looked at Motherboard, they covered it in like February this year - we scooped them. I was looking at TechCrunch - they saw Motherboard posted it, basically, and they covered, and I was like "February this year... We scooped them." And I was starting to feel pretty good about myself, and then I went to Gizmodo's coverage of Winamp2-js, and it was like February -- I don't know the month, but it was 2014... 2014. So props to Gizmodo for scooping this project up years ago \[unintelligible 00:03:23.12\] how long it's been around and how long you've been working on this.

Tell us a little bit of the story. It's four years later... What was this idea and what were you doing back in 2014?

**Jordan Eldredge:** Yeah, it's a funny back-story... I was sitting in my room, just -- I don't have any idea what I was doing, but a memory of Winamp skins came back to me, and I guess for anyone who doesn't remember, Winamp skins was the way that you could theme Winamp, and the implementation of it was just a zip file that contained bitmap files, which were sprite sheets.

\[00:04:07.27\] I guess at work I had been doing some stuff with CSS sprite sheets, and suddenly this parallel kind of popped into my head, that like "Whoa, Winamp skins were sprite sheets, and I'm used to doing sprite sheets in CSS now... I wonder if you could sort of reconstruct the Winamp UI using CSS." I was like, "Oh, that sounds really fun."

So I sat down at my computer and tried to pull up some bmp's, realized that "Hey, browsers can still show bmp's, just like any other image, and yeah, you could do it.

**Adam Stacoviak:** What's a bmp?

**Jordan Eldredge:** Bitmap... It's like a very primitive, non-compressed image.

**Adam Stacoviak:** Oh, okay, Bitmap, yes. I'd forgotten. Geez, it's been a while.

**Jordan Eldredge:** \[laughs\] Yeah. No transparency in Bitmaps. But yeah, that first little bit worked, and I was like, "Wow, that's pretty cool." Then I was like, "Well, how do you connect up the audio?" So I went and learned about web audio API stuff, and I got the main window... So Winamp is broken up into three different windows - there's a main window, which has like Play, and volume, and a little visualizer on there... And then there's an equalizer window, and then there's a playlist window. But I got just the first one working.

I tweeted about it, because I thought, "Hey, maybe my friend Jake would think this is cool", and yeah, it kind of blew up back then; it was 2014. I think that's when you were saying Gizmodo picked it up, and made it to Hacker News...

**Jerod Santo:** Yeah, it was on Hacker News, as well.

**Jordan Eldredge:** Exactly, yeah. I was someone who was fairly new to the mainstream tech industry; I was like over the moon that I got posted to Hacker News...

**Jerod Santo:** Sure.

**Jordan Eldredge:** It was kind of unbelievable.

**Jerod Santo:** And I guess maybe just that interest -- I was like, "Well, I guess I'll keep working on this." Then four years later I guess I haven't really ever thought to question whether I should stop... \[laughter\]

**Adam Stacoviak:** How much time do you have into this?

**Jordan Eldredge:** That's a good question. It's a long-term project, but it sort of goes in phases where I come back to it and work on it, and then sort of walk away for a while... I'm a person who likes to have a lot of different projects going in parallel, so that when I get blocked on one, rather than sort of being forced to solve a problem in an imperfect way, I can just sort of walk away until sometime in a shower two months later I'm like "Oh, that's how I could do it...!", and then I can come back to the project. So I really have no idea, but I probably often will spend three or four hours a week or more, and in busy times when I'm really feeling it, probably a lot more than that.

**Adam Stacoviak:** Wow. It reminds me of a tweet I saw recently, where it was a cartoon -- and we retweeted it, so if you follow us on Twitter you'll see this, but... It was a cartoon that was a brain, and saying "Hey, (to the person who owns the brain, essentially) are you gonna go to sleep?" and then in the next pane it says "Yes, now shut up!" (the person talking to the brain). And the brain says "I think I figured out how to debug your program" and then suddenly the next one is the eyes wide open... It's just like "You're up now! You've gotta go to work."

So it's nice to have those side projects where you can sort of like step away and do something different. In this case it's sleep, but... You get the point.

**Jerod Santo:** Take a shower...?

**Adam Stacoviak:** Yeah, take a shower... I like that. You've gotta give yourself room, and that's an interesting --

**Jerod Santo:** Do you like taking showers, is what you're saying...?

**Adam Stacoviak:** I think it's an interesting perspective to have a reason to have many projects ongoing, so that you can break from one on blocks, and still have fun and enjoy your craft, but not get stuck and be pulling your hair out.

**Jordan Eldredge:** \[00:08:06.29\] I think that's another big advantage of side projects - they enable you to work in that way where rather than being forced to solve a problem... If you don't have a good solution, you can just say "Well, okay, I'm putting that one on hold, and either I'll decide that it's important to come back and hack something in and move forward with something imperfect" or "Hey, I'll just sit it on the backburner and let it stew for a while...", whereas in work you've gotta ship, otherwise you're not gonna get your paycheck.

**Jerod Santo:** So there's two kinds of people, and probably a sliding scale between them. You've got people with a bunch of ideas and no time to do them, or maybe just enough time to work on one or two, and then you have people with a lot of time and no ideas. And then like I said, there's a sliding scale, but Jordan, you seem like the kind of guy who's got lots of ideas, and you also execute on some of them, at least. We've seen Winamp2-js, we'll also probably get around to talking about UrlMe.me, which is cool as well... Where do your ideas come from? Can you give somebody advice who's like "I can't think of a cool side project"? How do you initiate a cool side project?

**Jordan Eldredge:** That's really funny, because I spent a lot of time feeling like I was in that first camp, where I had all this time and I really wanted to be doing something cool, or to be participating, but I didn't feel like I had any ideas... And I think as you pointed out, now I've sort of transitioned into this other situation where I've got more things that I want to do than I have time in which to do them. And I was looking back at all these projects that I've done, and I'm definitely like a side-project-oriented person, and I've realized that the one theme throughout them is trying to do something in a medium in which that thing is surprising. With Winamp2-js, I think it's somewhat surprising that you can do as much as you can, that you can reimplement to the level of detail that is possible inside of the browser, which is a pretty tight constraint. And with UrlMe.me, which you said we might get into later, which is like a meme generator where the URL is the user interface, so you should be able to generate a "meme imagine" by just typing a URL... Again, I think it's a surprising thing that you could actually do that.

Looking back at all my projects, I think that's sort of the recurring theme... And the inspiration then I think ends up coming from understanding the technology and learning about the features of the technology, and then those ideas sort of bubbling around in your brain and overlapping with other things that you've come across in your life... So this example of Winamp being inspired really by this idea of CSS sprite sheets, overlapping with my memory of hacking on Winamp skins as a teenager... So I wish I had a direct like "Go do this thing and you will have great ideas...", but I think really it was when I started having a deeper understanding of technology and exploring the edges of obscure API's and things like that these ideas started coming to me more regularly.

**Jerod Santo:** Yeah, I mean, when I look at Winamp2-js, and Adam and I often discuss what makes something interesting and what makes it popular, or what resonates with developers, because other things that I think intellectually stimulate us - and obviously, we're in the arena of covering those kinds of things, and talking about them... And Winamp2-js specifically had two things going for it.

\[00:12:00.27\] The first was an extreme amount of nostalgia that it evokes to most people who were around either -- I guess in the formative years or older in the late '90s, early 2000's when it was very popular.

And then secondly, this little bit of a surprise factor that impresses you, that you can actually do this in the browser. It has two aspects to it, which makes it very -- I don't wanna say necessarily viral, but it had waves of coverage, and it has resonated with so many people.

**Adam Stacoviak:** It's sticky.

**Jerod Santo:** Yeah, it's sticky. Thank you.

**Adam Stacoviak:** It's sticky. You turn back somebody's time a little bit, especially somebody who has actually used this to play music, not just look at as this thing here, which is cool, of course, but somebody who has used it and managed playlists, and fine-tune the EQ to their favorite rock song, or whatever... You kind of bring out this inner child, this child-like joy that we don't often get to face, because you're stuck on a block, and you don't have enough side projects, or you've gotta ship, because you've gotta get a paycheck, like you said earlier... You give that back, and then you go one step further and dig a little further into this open source codebase that, if you wanna learn something - hey, this is how you learned it.

**Jordan Eldredge:** Yeah, I think the nostalgia angle is really huge. I think if I have any advice for how to come up with a side project that is going to generate interest, it's ride somebody else's coattails as far as possible... \[laughter\] Because really, that's what it is...

**Adam Stacoviak:** As far as possible...!

**Jordan Eldredge:** You know, this thing has gotten posted in a bunch of places, with comments, and every time I read through the comments, maybe 5% are actually about the project, and the rest of the comments are like "Oh man, Winamp...! I still use Winamp" or "Winamp was the best, and everything more recent is garbage." I think that was the same impetus for me doing it. I have, like you said, this sort of emotional memory of this MP3 player from a time that was formative for me, both as a person -- like, music as a teenager, which I think is probably the people with whom this is resonating the best... The way that you consume music as a teenager has got to make an imprint on you, because music is so important in your teenage and college years.

So I think much in the same that that's what has maybe driven the interest in this, it was also what drove my own personal interest in it - wanting to recreate those experiences. In fact, I said the original idea came from Winamp skins, and that was actually I think the first constructive thing I ever did on a computer... I went from a consumer of software to creating something from nothing, which is I think a really powerful moment for any -- probably almost any programmer can remember that first moment when you sat down at a computer and then sometime later a thing existed that didn't exist before, only out of your time and your brain. You didn't have to go to the store and buy parts; it was just your idea made something new in the world, and that experience, even though I was making the world's ugliest Winamp skin, that never saw the light of day and nor should it have... \[laughter\] But I think that was really formative, and I see a direct line from that experience through to writing software today. The experience of working on Winamp2-js definitely feels like that same kind of joy of sitting down at a computer and making something that didn't exist before exist, just from your own time and mental energy.

**Jerod Santo:** \[00:16:04.10\] Yeah. Winamp definitely has the same warm, fuzzy feelings for me as well. I didn't take it as far as you, I didn't actually create skins, but I do remember -- this specifically for me is attached to Napster in the timeline, in terms of what was happening at the same time... And it was like, you're waiting for your files to download, right? And they're taking forever, because the internet was slow back then... And while you do that, what do you do? Well, I'm just out there download Winamp skins and swapping them out, creating playlists, and just wasting hours upon hours.

I never quite made it across the void like you did, to like "I'm gonna create my own", but definitely down the road I had times where I peeled back the covers and saw the power of programming. Adam, were you a Winamp user back in the day?

**Adam Stacoviak:** I was, and actually your story reminded me - when you talked about skinning - of skinning forums. That was a huge thing. I can't remember the most well-known forum... Maybe you all might remember the brand name of it, but it was the most used, and skinning those and skinning Winamp was like the coolest thing, and I was never cool enough to do either. \[laughter\]

**Jordan Eldredge:** Yeah, I totally remember downloading these skins and just being like "Oh my god, the people who made these must be the most massive kings among men. Oh my gosh, oh to be one of those people who can make these amazing works of art..."

It's been interesting, I've actually been able to through this project end up connecting up with a couple people who were big-time skinners back in the day and had made some of these very cool skins, and it's really funny having a little bit more perspective in life, getting to talk those people. Certainly, the work that they did was pretty incredible, but the outsized presence that those people had in my mind as a teenager - it's really funny to look back on these days.

**Adam Stacoviak:** Someone out there is screaming vBulletin, because that's what it was called.

**Jerod Santo:** Was that a specific website, or was that just the forum software?

**Adam Stacoviak:** That's the forum software. I think that was the most popular, and a couple others that I recall, but... Envision I think might have been the other one...

**Jerod Santo:** PhpBB - what year did that come out?

**Jordan Eldredge:** That's the one I was thinking of, phpBB.

**Adam Stacoviak:** I was thinking Envision, and then vBulletin, and yeah, phpBB as well; that was in the mix, too. But yeah, you'd hang out on these forums, you'd find people to connect with... This is the old days of the internet. I guess you still do that, but that was the only way then; it was pre-blogs, where it was like on the cusp of blogs, and it was totally in the era of Napster and downloading music. You did it not because you wanted to steal, you did it because it was new. Maybe I was probably poor then too, so I probably had to, I couldn't afford it... But I don't think I did it because it was like "I wanna steal your stuff", it was more like "That's how you do it now, I guess. The world's changing, I don't know... Mp3's, give it to me."

**Jerod Santo:** That's right.

**Jordan Eldredge:** Yeah, I think it's hard to untangle the experience of Winamp from the experience of digital media, digital audio being available for the very first time, and sort of just sky-rocketing into the mainstream, and suddenly this huge availability of music and the ability to just ingest music from all over with very little friction... I think everybody who went through that transition from "Oh, you only get music at a CD store, where you can drop 10-15 bucks on a CD" to "Oh, everything is suddenly available for me at my fingertips." I think that feeling is probably a very important, potent part of the emotional reaction that people have to Winamp, I would guess.

**Jerod Santo:** \[00:20:18.06\] And not just music that you could buy at the CD store... Is that a thing? CD store...

**Adam Stacoviak:** When you said "CD store", I was like "CD store? That's interesting... It's not music store."

**Jerod Santo:** Yeah, what was that called...? Music store.

**Jordan Eldredge:** Or record store?

**Jerod Santo:** Record store, yeah. So it has been a while, hasn't it?

**Adam Stacoviak:** They're actually labeled by the media type - CD store.

**Jerod Santo:** \[laughs\] We used to go to the MP3 store. \[laughter\] But actually new music, like things that didn't exist outside of the digital... Like the covers and the remixes, and the MIDI stuff.

**Adam Stacoviak:** Bootlegs...

**Jerod Santo:** There was so much new... Yeah, bootlegs. But one thing I wanna ask both of you guys, I guess (open question), because as developers, even asking Jordan, like "What's some secrets to creating something that will resonate with the community?", thinking about Winamp -- I mean, in this case you're tapping into the love of Winamp to a certain degree... But if we're thinking about Winamp as a software product, and what people loved about it... We wanna create things that people love, right? That give some value and joy. Are there lessons that we can learn, aside from the one that it's attached to music, and that was also formative and important to people...? What was it about Winamp that we all loved about it? Was it the customizability, was it the interface? What do you guys think?

**Adam Stacoviak:** Right time, right place.

**Jerod Santo:** That's all?

**Adam Stacoviak:** I mean, it was cool, but what else competed? You might have had like Windows Media Player maybe? There was nothing that was like that, that was catchy, sticky, that allowed you, like Jordan said earlier, become the creator, something from nothing, that didn't -- I don't think Windows wanted you to change their media player, so that might have been the customizability of it, and the timing.

**Jordan Eldredge:** I think you're kind of spot on with the timing, but I think there's another aspect to it as well, which is that it was a little bit punk. I think at that time the Mp3 algorithm was still under -- you couldn't use it without a license... And then somebody leaked it, or something like that. Someone probably knows this story better than I do, but there was the Fraunhofer Institute, or whatever... Somebody leaked the source to an Mp3 decoder engine, and suddenly it basically became possible for anyone to integrate it, and I don't know what the legal implications of that were, but I think basically that patent suddenly became indefensible.

I think Winamp was one of the first to sort of jump on that and be like 'No, we're shipping this inside free software."I guess that's another thing that was a big piece of it, it was shareware, or freeware, whatever... Which I think was also another thing of that time.

**Adam Stacoviak:** Yeah, it didn't cost you anything. And it had the catchy song... Not the song, the tagline...

**Jerod Santo:** That does play into the punk, or at least it had attitude, right?

**Jordan Eldredge:** Yeah, and I think a lot of that is attributed back to sort of the main guy, Justin Frankel, who created it. Maybe your listeners know the story of him, that after he sold Winamp - or I guess he and Nullsoft - to AOL, there were a number of stories about his behavior within AOL, because he was then on contracted to stay on the project for some number of years... But he did not fit in at AOL at all, so he was releasing peer-to-peer file sharing software on AOL's website against his boss' wishes, and a bunch of stuff... You know, after they paid a him millions and millions of dollars payday.

**Adam Stacoviak:** Wow...

**Jerod Santo:** \[00:24:10.28\] Yeah, so according the history books, they sold it to AOL in 1999 for 80 million dollars. The nostalgia for Winamp 2 specifically - because you didn't build Winamp3-js or Winamp5-js, even though these things exist - is that once AOL took it over, it lost a lot of the things that people loved... There was a major rewrite, new UI, it was very AOL - which is very anti-punk, right? It's like the most mainstream thing company at the time.

Another reason why I'm thinking it's so nostalgic is because it reminds us of a better piece of software than currently exists... Kind of like the glory days.

**Jordan Eldredge:** Yeah. Well, you know, it was fast... And I think we have a lot of maybe -- as a Javascript developer, I feel this a little bit more cutting than others, but this sort of rebelling against modern high-level languages, which are comparatively slow and resource-heavy... It was fast, and it was graphically beautiful - depending on your aesthetic tastes.

The fact that it was a singular vision from a very singular person, I think, and then it was just well executed on top of that... And it wasn't compromised into any kind of corporate requirement. It was like, this was the thing that Justin wanted to build, and that I think has a lot of power.

**Break:** \[00:25:53.14\]

**Jerod Santo:** Jordan, you've been working on this off and on for 4+ years... Surely, it's taken different forms. I notice now it's built with React and Redux; those things didn't exist in 2014... So take us through some of the history of the software itself, maybe some technical hurdles or interesting bits, and we can talk about all that's packed into Winamp2-js.

**Jordan Eldredge:** Yeah, so originally it was written in jQuery, and I think it didn't last very long in that form... But I honestly didn't know Javascript at all when I started the project. I was trying to figure out, like "How do you make a class?", which of course is not a thing, or "How do you split this across multiple files?"

**Jerod Santo:** What were you used to coding in at the time? What's your original language...?

**Jordan Eldredge:** I was just writing bad PHP and bad jQuery, like stitching together plugins and whatnot... And it was really this project that taught me Javascript. I was curious about it, so I'd come home each night, eager to try to make it better, and as a part of that I ran up against my own limitations of knowledge. I kept having to learn, like "Okay, how do you actually (like I said) make a class?", or I'd learned about prototypical inheritance, and whatnot.

\[00:28:21.21\] So I wrote it all in jQuery at first. I was very primitive at that point, I didn't do very much, and then pretty quickly I realized that this wasn't really the right way to go about it, so I rewrote it all in what we call vanilla Javascript, without any framework at all. It existed in that form for quite a while, until then I started to run up against limitations of that, and having learned a little bit about React at that point, I realized that this sort of declarative nature of being able to, rather than managing transition between states, just managing state and then a projection of that state into a DOM state seemed like it made sense for this problem.

**Jerod Santo:** Were those bumps that you were hitting with the vanilla JS version? If you recall back then, what were the particular aspects? Or was it just like crazy amounts of state everywhere, and you're having to react to it? Gosh, pun unintended... \[laughter\]

**Jordan Eldredge:** Yeah, I think the main thing is when you don't have this declarative sort of React model of your UI being a function of your state, you end up managing the transition between every state, and so then the complexity of your application is exponential of the number of states that you have, because you have to manage the transition between all -- you know, any two states have to be able to go between them... And so I was running into that with -- as I was adding more and more detail, the pain of maintaining that was rapidly exploding, so I felt that a switch was necessary.

So yeah, I switched to React and Redux... I think from there -- it was a pretty good fit for that model, but I think the real technical limitations were not like in the framework decision, but some of these... You know, I think I said earlier about trying to do things which are surprising in a medium; the things that you can do in Javascript that you might not think you could do. Some of those technical challenges I think were a little bit more interesting.

I think the most interesting one is, you know, Winamp2-js actually loads actual skin files, and getting to do that inside the browser posed a bunch of interesting technical challenges, and I could go into that or not... But I think those kinds of problems were much more interesting than what framework to use.

**Jerod Santo:** Yeah, and that was a surprise to me... I assumed it was just going to be looking like Winamp, and like the Play button works and all that, but the fact that you can click the upper-hand left corner and swap skins was awesome. And then when I actually cloned the code down, because I was dorking around with it, and I saw "No, these are actually just skins. This is not some sort of -- like, he didn't remake these skins. These are the actual..." Can you go download off of Adam's old vBulletin forums? Can you go download an old skin and pop it into Winamp2-js and it'll work?

**Jordan Eldredge:** Yeah, you can just drag it from your desktop right on top of it, and it'll change...

**Adam Stacoviak:** Uh-uh...

**Jerod Santo:** That's so cool!

**Adam Stacoviak:** That's what I say when I'm in complete disbelief, "Uh-uh... You can do that?!"

**Jordan Eldredge:** Yeah...

**Adam Stacoviak:** Wow...

**Jordan Eldredge:** \[00:32:04.10\] It's hacks on top of hacks to get it to work inside the browser. Once I realized that Winamp skins are just zip files of bitmaps, and someone has written a Javascript zip utility, it's like, "Well, okay, you can do it, I guess..."

**Jerod Santo:** So it unzips them, and... How does that work? You said you had some hurdles there...

**Adam Stacoviak:** Yeah, what's the hacks on hacks?

**Jerod Santo:** Teach us some hacks.

**Jordan Eldredge:** So the first step is, of course, unzipping this binary blob, and then you get access to these bitmap files. Then of course you need to -- those bitmap files can't just be used directly, because those are sprites... And anyone who's done stuff with sprites might know that one of the limitations of sprites is that you can't do repeating tiles using sprites very easily, because you'll end up repeating the whole spreadsheet.

So we end up extracting the zip file, getting the sprite sheets out of the zip file, rendering those into a canvas, slicing the individual sprites out of that canvas into a data URI; then given those data URI's, you might think like, "Oh, I can just set these as like background images using Javascript", but in many cases you have to apply them to pseudo-elements, so like the hover state of an item, or like the handle of a slider, and there's no way to do that from Javascript.

So what it ends up being is we get these data URI's, and then we dynamically generate a CSS style sheet and then inject that into the DOM. So none of those things are particularly beautiful, but it does work.

**Jerod Santo:** Which with a side project "It does work" is pretty much what you're after, right?

**Jordan Eldredge:** Yeah, exactly. And I think actually the thing that was most interesting about it was not only does it work, but I feel pretty confident that even though it's not the right -- it doesn't feel like a clean solution... It is the only solution. \[laughter\]

I think having an excuse to do something terrible where you're still doing the right thing - I think that's when I know I'm having fun.

**Adam Stacoviak:** So when you drop the .wsz file - while you guys were talking, I was hacking on some fun stuff here... Is it actually uploaded into your UI and then depacked -- because it happened pretty quickly; I dragged one on there and it changed real fast.

**Jordan Eldredge:** Yeah, so I think one of the limitations I set for myself with this project is there's no server component; it's just Javascript. So everything happens inside your browser. When you drag the file in, I get access to a reference to that file, and I can get access to the bits in that file, and so it all goes from there inside your browser.

**Adam Stacoviak:** Wow... That was something you brought up actually, in your Twitch livestream yesterday, and I was thinking "That would be super cool", and then I was thinking "Where do you even begin? I don't know."

**Jerod Santo:** 1997 I think is where you've gotta start.

**Adam Stacoviak:** Yeah, you've gotta go back in time... \[laughter\] Where do you begin, Jordan?

**Jordan Eldredge:** I guess if you wanna make a skin, all you really need to do... I guess what you do is you go google "skinners atlas", which was in 1998 the canonical reference for how to write Winamp skins, and actually was hugely valuable to me trying to reimplement all this stuff... Because not only do I have to -- I have to really fundamentally know how these skins get used, in order to recreate the Winamp UI to a high degree of detail.

It's a bunch of bitmap files in a zip, that's been renamed, and then there's a number of config files in there as well... Some .ini files and whatnot, which of course I also have to parse.

**Adam Stacoviak:** \[00:36:17.00\] It's tangential of course, but in this journey of yours, having to go to all these obscure, and to some degree kind of older websites that have information that not a lot of people are actually looking for anymore, and you've gotta deal with all these ads everywhere, and this weird old-school web, too... Or maybe kind of new school; there's ads everywhere now. It's like, "Is that a Download Skin button or is that an ad?"

**Jordan Eldredge:** Right...

**Adam Stacoviak:** Both!

**Jordan Eldredge:** It has been an interesting experience understanding bit rot, and how these things that we sort of took for granted being around are not necessarily gonna be around forever, unless someone cares... And you know, as part of that, I actually -- this actually goes a little bit into one of the things that spun out of this project was I wrote a... Someone suggested I wrote a Twitter bot which tweets out Winamp skins. So if you go to Twitter.com/winampskins, I have a little bot there which once or twice a day will tweet out a screenshot of a Winamp skin and a link to webamp.org with that skin turned on... But just as an effort to sort of preserve some of these things that people put a huge amount of effort into and are really iconic of that era, and sometimes it's because they're just like really incredible in the craftsmanship that went into them and whatnot... But sometimes it's because they're pretty atrocious, and you're like "Why is there a worm protruding from an Mp3 player? That's a little bit strange..." But it's impressive, I guess.

So yeah, I certainly didn't set out on this project with any kind of noble ambition, but I think in retrospect if there is anything really valuable that has come out of it, it's that it does provide a way to take these artistic artifacts, which were becoming sort of increasingly hard to share or to experience, and sort of lower the barrier to entry there. And in fact, I've reached out to some folks at the Internet Archive and looking into maybe ways that we could have a collection of Winamp skins up there on the internet archive.

**Jerod Santo:** It's a great idea. Did they answer back?

**Jordan Eldredge:** I tweeted something, and a friend of mine tagged somebody else who I guess works there as a volunteer, and was like "Yes, give me all of them in any format." So I just have to follow up with him and figure out exactly what we can do. I think my main goal would be if we could get a great UI for experiencing them, and integrate it with Winamp2-js... But I don't know whether that's more than they wanna take on.

**Adam Stacoviak:** By checking out your tweets, it looks like you can actually inject a skin via URL.

**Jordan Eldredge:** Yeah, if you pass a carefully crafted JSON in the hash of the URL, you can inject either an Mp3 or a skin. Now, Mp3's and skins are both a little tricky because of cross-origin headers and whatnot. Something that a lot of users have asked for is this ability to -- and in fact, Winamp itself could do this; you could paste in a URL and it would play it for you... But alas, due to the cross-origin restrictions, more often than not, that experience is not gonna actually be good for the user, so I've opted to not expose it in the UI.

**Adam Stacoviak:** \[00:39:58.22\] As part of that, a side effect or a side conversation might be are you cataloging these things in an S3 bucket, or something like that? Because it looks like it's on Amazon AWS; it's just you collecting these as you tweet these?

**Jordan Eldredge:** Yeah, so I got some huge zip file of many thousands of skins, and I've been sort of reviewing them and looking through them, and picking ones that I thought were notable, I guess...

**Adam Stacoviak:** Pac-Man Favorite - that was super cool; March 10th. That's notable.

**Jordan Eldredge:** Yeah. There are definitely -- I try to pick the ones which are either interesting... Which are interesting not necessarily because they're great, but because they are interesting. So I try to include the ones that are great, and also the ones that are surprisingly not great.

Then I just push them up to S3, because they do have to be available somewhere, and that's a pretty fast server for me to host them there...

**Adam Stacoviak:** \[unintelligible 00:41:09.19\] this image for something malicious, or just whatever.

**Jordan Eldredge:** Right, exactly.

**Jerod Santo:** So here's an idea... I'm still stuck on a Changelog skin, so I'm trying to think of ways of getting this done...

**Adam Stacoviak:** I knew it...!

**Jerod Santo:** Here's the plan, to the listening audience... This episode of the Changelog, Jordan has agreed to host it indefinitely at Webamp.org, which is his website for Winamp2-js (maybe we'll talk about names in a second)... Webamp.org/changelog. We'll link that up in the show notes. When you go to that page, you can listen to this episode inside Winamp2-js. Now, how cool would it be if somebody, anybody out there, created a Changelog skin that we can use \[unintelligible 00:41:58.01\] so it's branded... Super-cool, right? So if you have skills -- or even if you don't have any skills; if you've got time and you wanna try this out, contact us, we would love to work with you. We even have a brand guideline you could use, so you have all of our colors, our fonts, everything you need...

**Adam Stacoviak:** Yeah, or you could just pull all the colors from our style sheets too, on the .com.

**Jordan Eldredge:** I'm totally on board with this... I think this would be great.

**Jerod Santo:** Awesome. So that's skins... Let's talk about other features, because it's really quite functional. You can separate the different segments, drag them around separately, you can resize... What all is in here that maybe people don't know, not just by looking at it first?

**Jordan Eldredge:** Yeah, I think it's taken on the form of like a puzzle box; you open it up and it's like "Oh yeah, I can click Play", but under the hood, the more you dig, the more little details (that I guess just bothered me enough that I decided to do them) will reveal themselves. So I think the simplest one is you play and there's like a visualizer, right? So there's two different kinds of visualizer. If you click on it in the main window, it will go between this sort of bar graph visualizer and a line graph visualizer, and that's all hooked up to the web audio API.

The equalizer works, so you can tweak all the different levels, the different frequency bands... And again, that works actually pretty simply through the web audio API. Once you workaround a bug that I discovered in Safari, which depending on how you ordered things in the web audio API, it would just like hard crash, like segfault Safari. That took me like three months to figure out.

\[00:43:50.25\] But those are good ones, and then I think the window management has been interesting, too. Like I said, I released this first version back in 2014, and it was just the main window at that point... And then going from one window to two windows, suddenly there was a huge amount of additional extra layer of work required. So you can drag these windows around, but they -- Winamp had this great feature where most of the time you probably want them stuck to each other; you want the windows sort of arranged, but you wanted them to form a single unit... So it had like snap; so if you drag two windows close to each other, they'll sort of align directly. Getting that to work was quite a bit of effort, and in fact just recently... Another piece of that is the windows have this shade mode, where they'll collapse down to just their title bar.

And Winamp, again, has this interesting UI feature where if you have two windows one on top of the other and you put the top window into shade mode, all the lower windows will sort of travel along with it. So getting that to work was another bunch of effort.

Let's see, this laundry list of other things... It can parse the binary equalizer format files that Winamp can generate, and it can also generate them; if you set the equalizer to a particular level, you can export that as a binary file, and then drag it in to bring it back to that level. The playlist works, and you can export your current playlist as an HTML file, which again, Winamp could do.

**Adam Stacoviak:** What's this file type .eqf?

**Jordan Eldredge:** It's pretty simple... I had never actually had to do anything with a binary file format, so it was my first entry into that kind of world, which is good; I learned a lot. But it's very simple, it's just a name and then like 11 values between 0 and 255.

**Adam Stacoviak:** So why can you save a preset for the equalizer and not the playlists? Is it completely different? Is it like just a JSON -- would you kind of modernize it, or would you still go old-school with it?

**Jordan Eldredge:** So you're saying like why can't you save the export of the equalizer but you can't export your playlist?
**Adam Stacoviak:** Yeah, exactly.

**Jordan Eldredge:** I think Winamp has this .m3u format... Yeah, it's another thing people asked for, and the reason is that I don't have direct access to your file system. So if you had dragged in your Matrix soundtrack to listen to, and the you tried to export that playlist...

**Jerod Santo:** Nice choice.

**Jordan Eldredge:** \[laughs\] And then you load up that playlist again, I can't go look on your file system and find those files for you. So while I could certainly read and generate .m3u files, I can't actually do anything useful with them. It's again one of these limitations of the browser, where you can do a lot, but you can't do everything.

**Jerod Santo:** Now, here my memory isn't serving me, but this snap you mentioned before, when the different panes snap together - that just seems exactly how Winamp used to work. Is that exactly -- I mean, as much as you can... Or am I just having backwards nostalgia where I think this is like the real thing, the snapping?

**Jordan Eldredge:** Yeah, I mean... As much as possible, I've tried very carefully to recreate everything exactly. And partially, it's just because it's kind of fun to do, but also it's actually kind of freeing, as an engineer, who -- even with the most well-defined spec, I think any project ultimately ends up being a lot of judgment calls as an engineer of like "Okay, how should this thing actually work to be the best?"

\[00:47:52.16\] There's something kind of liberating about not having to make that decision ever, and just knowing like "Okay, the spec is this thing. I want it to behave exactly like this, for better or for worse." So I was literally slo-mo screen-capturing actual Winamp in a VM to see how many pixels away it is until is snaps...

**Adam Stacoviak:** Wow...

**Jordan Eldredge:** And for better or for worse, there are some cases where Winamp has bugs where things don't behave in a quite sensible way, where I've actually gone ahead and reimplemented those bugs, just because for me that's kind of more interesting than trying to make the best Mp3 player, just to make the one that already exists.

**Break:** \[00:48:43.25\]

**Adam Stacoviak:** I'm thinking about how this works... It actually works. Not just looks like it works, but it actually works, and you've thought through all this cool stuff, and even recreated bugs, and I'm thinking like... We're talking about usefulness, and exporting playlists, and equalization, and all that fun stuff, but could this be like a front-end to, say, Spotify's API, for example?

**Jordan Eldredge:** Yeah, there have been a lot of people who would pull it up and they're like "Oh my gosh, you can really drag in Mp3's? That's so cool! Let me go find an Mp3. Oh yeah, I don't have Mp3's anymore..." \[laughter\] So there have been a lot of requests for like, okay, how do you take this thing which is really just a gimmick, right? It's a web page that you can go to and you're like "Oh, ha-ha! Neat." and then you move on with your life. But there have been a number of people who have thought like "Okay, how do you turn this into something that's actually useful?"

I think the ones that I've seen are, like you said, the Spotify people want it to integrate with Spotify...

**Adam Stacoviak:** They want it?

**Jordan Eldredge:** Yeah, yeah.

**Adam Stacoviak:** Okay, this is them approaching you. Alright, cool... Let's hear more.

**Jordan Eldredge:** I'm not saying Spotify wants it, but...

**Adam Stacoviak:** Oh, the people of Spotify, not Spotify the company.

**Jerod Santo:** The Spotify users. Is that like "people of Walmart?" People of Spotify...

**Jordan Eldredge:** So Spotify itself actually did have a player called Spotiamp, which was a C Winamp clone that you could run on your desktop if you have a Spotify Premium account. I wish I could remember the guy who did that, because he's a notable guy... But he was working at Spotify and he built this Winamp clone that you could download and run and it would interact with Spotify...

\[00:51:42.11\] And I think first they had some licensing issues with it, and then I think ultimately there was a whole to-do about - people were using the underlying library which that thing used as a hacking monetization model. So they were creating fake Spotify accounts, and then they would hack into arbitrary people's computers and play tracks on those Spotify author accounts tracks, and then make revenue from having their tracks listened to a bunch. So eventually Spotify had to shut down that, or they chose to (I guess) shut down that thing.

So yeah, Spotify itself I think - or at least some people within Spotify - would like to see a Winamp interface, and they do have this API that's available online... And I don't know for sure, but I think it might have something to do with the new DRM-enabled API's in the browser; that's a whole other conversation. But because of the DRM, we can't get direct access to the audio stream, so there are some features which don't work. The equalizer can't work, because we can't twiddle the bits the way that we need to, and the visualizer can't work, and the balance can't work...

So for now, and unless maybe a bunch of these things get added on top of the existing web API's, for now those things can't work; someone has a copy working, and once I think that solidifies a bit, I'll share that... But because it basically can't work fully, I think I'm not gonna include it in the core. But today there's Dropbox integration, so if you go to the options menu, if you say "Open a file..." or "Play file...", you can pick from your Dropbox folder.

**Adam Stacoviak:** Can you actually point it at a Dropbox folder and that becomes a playlist?

**Jordan Eldredge:** Yeah. Dropbox has a little file picker UI, and you just pick from there and it will populate your playlist with a directory of files.

**Adam Stacoviak:** Wow. While you were talking about that, I was also thinking about alternate ways to use this; that would make a really sweet-looking iPhone interface or even mobile interface, because it's vertical, and the playlist can be -- you know the top two sections are essentially the same height, and then the bottom is... It's the same height too, but I guess it's variable in the fact that you can scroll to see more playlist; that could be one more place to take it.

**Jerod Santo:** \[unintelligible 00:54:22.21\]

**Jordan Eldredge:** Yeah, I've done some work to make sure it works on mobile, and it does work, but I think the touch target issue is pretty devastating...

**Adam Stacoviak:** Bummer...

**Jordan Eldredge:** You can't really click on anything... Although it does bring to mind -- back when the iPhone was still like a myth, when people were doing all these mockups of what an iPhone would look like based on what a mobile phone look like and what an iPod looked like... But someone did this mockup of like a hardware Winamp, which is -- I'll see if I can track it down maybe so you can stick it in the show notes, but it's pretty incredible. It's literally just like a little candy bar-size hardware device that looks like Winamp UI on the top, with like a headphone cable coming out of it.

**Jerod Santo:** Yeah, definitely share that with us and we will add it to the show notes. Let's talk about the name - you've just mentioned Webamp again... We've been calling it Winamp2-js. Surely, there's a story there. There's always a story with names.

**Jordan Eldredge:** Yeah, so Winamp2-js was I guess the name I came up with originally just because I thought it was the most terse explanation of what the project was, right? ...it's Winamp 2 in Javascript. And shortly after I tweeted it that first time, I got a tweet response from Tom Pepper, who I guess was one of the very early people at Gnullsoft, along with Justin Frankel... And he said "Hey, congratulations from Gnullsoft! We have these domains if you want them." So that was webamp.com, .org and .net.

**Jerod Santo:** Nice.

**Jordan Eldredge:** \[00:56:04.17\] And I guess they maybe had some internal project or something like that; at some point they had been doing some kind of web thing and it never came to fruition, and I don't know how he came into possession of those domains or whatever, but... Yeah, I guess long story short - there might have been some legal complications about getting me those domains, but I have them now... Except for .com, which I got scooped up, but...

So I thought it was very cool to 1) have a much more shareable URL than \[unintelligible 00:56:33.08\] on my own JordanEldredge.com domain, with three subdirectories down... So I thought I might as well take advantage of this domain, because it seems like a cool place for it to live. But I guess I haven't fully committed to changing the name and introducing the complete confusion of, like you said, news articles and other things that talk about it as Winamp2-js, and then that not being the canonical name anymore.

**Adam Stacoviak:** It could be like a codename, or something.

**Jordan Eldredge:** \[unintelligible 00:57:04.26\] the new name, but I guess it's too late now. There's gonna be confusion, it's just a matter of "Where does that confusion live?"

**Adam Stacoviak:** What's crazy is that you create this thing, you tweet about it, and then the originators of Gnullsoft -- what did you say his name was again?

**Jordan Eldredge:** Tom Pepper.

**Adam Stacoviak:** Tom Pepper. I love that name, too. It's such a cool name... Tom Pepper reaches out to you and says "Hey, we have some domains we can probably give you..." So why did you not get the .com? What happened there?

**Jordan Eldredge:** Let's see, how do I phrase this...? So he wasn't able to actually give me the domains, but in the intervening years they did expire, rather conveniently, but I wasn't watching closely enough.

**Adam Stacoviak:** I see.

**Jordan Eldredge:** It's a bit delicately put, but that's what happened.

**Adam Stacoviak:** Yeah, I'm reading -- and everybody else read between the lines there, we're not gonna repeat it, because it's just too close... It's too close. But this is crazy though - so a long time ago you kind of got nostalgic and you wanted to play with this back in 2014 (when you released this), and now you're doing this... I think this is such a crazy journey. This is open source at its best.

**Jordan Eldredge:** It really is. There haven't been a ton of contributors. I can say there have been people who have popped in and done a thing or two that they thought was interesting... I mean, I think most notably the addition of actually parsing the skin file in the browser, using that Javascript library, was a very early pull request. But I think the amount of input that has influenced how it's evolved has been really tremendous... Just people popping in and being like "Hey, did you know this obscure thing about the Web Audio API that would allow you to do this other thing that you would probably want to do?"

While most of the code has been commits that I've written myself, a lot of the core ideas or breakthroughs did come from people in the community. The attention that it got has really enabled that in a way that I certainly -- without people knowing about it, their ability to come in and lend their particular expertise, I don't think would be possible.

**Adam Stacoviak:** It may not be open source traditionally, in the fact that you said that you said there's not that many contributors... However, it's not as if this is code you have behind the firewall that nobody can see, and I think that is inviting for those with knowledge to contribute, whether it's a direct code contribution or a "Hey, did you know about...?" Being open source, in the open, with no (at this point, I assume) commercial intentions, that's the cool thing... Like, why would you do this not open source? It would only make sense to do it open source.

**Jordan Eldredge:** \[01:00:01.09\] I think a lot of people who are friends of mine and whatnot have seen like "Oh man, you've got..." -- I think when it got on TechCrunch, that was like... It felt pretty hilarious to me that something like this would get written up in a publication like that. But you know, when I was telling my friends how cool that was, and they were like "Wow, now you've really hit the mainstream..."

**Adam Stacoviak:** "You've made it!"

**Jordan Eldredge:** "Are you gonna start putting ads on there? What's the monetization strategy?"

**Adam Stacoviak:** Okay, wait, wait... What's the monetization strategy? How are you gonna make money from this?

**Jerod Santo:** I know what it is... You just sit there and wait for AOL to call. It will happen. \[laughs\]

**Adam Stacoviak:** They're like, "No, wait... Don't we already own that?" \[laughter\]

**Jerod Santo:** No, they sold it off. They'll buy it again.

**Adam Stacoviak:** "We'll buy it again! One more try!"

**Jordan Eldredge:** I very strictly do not have any interest in that. I guess the answer to my monetization strategy has been to do something really interesting, hope that people who know or who care see it, and then that that has a positive influence on my career trajectory. That actually is directly true, in that my current job at Facebook was the result of a recruiter reaching out who had seen this project, and then in my interview loop I think two of the engineers I talked with had seen it, so it gave us something really interesting to talk about.

So I guess don't discount just having something be visible as a monetization strategy by just improving your career... And of course, I think all of that is secondary to all the things I learned working on the project.

**Adam Stacoviak:** How much of this overlaps with the things you do day to day? How much has what you've done at the day job, either at Facebook or elsewhere, kind of led back into this, or vice-versa?

**Jordan Eldredge:** Yeah, I think the vice-versa is actually more the case. I started working on this project, and then I got really into Javascript, and in order to do some of the things that I wanted to do here I had to dig pretty deep into understanding the language, and some of the web API's and whatnot... And I got really fired up about Javascript, and at my previous company, the state of the Javascript codebase was a little bit lacking, so then I sort of got on this warpath about improving things there.

Then that led to me sort of evolving into a very Javascript-centric role there, sort of heading up the Javascript infrastructure at that company, and then of course that had a feedback loop to learning a lot more... So I think it really was like -- this project gave me the impetus to go really deep on some of these things, which then had value in my career, and then there was a feedback loop on top of that.

**Adam Stacoviak:** And what you're not condoning is that the only way you get hired is by having side-projects, right?

**Jordan Eldredge:** No, I'm not condoning that, but I do think--

**Adam Stacoviak:** But you're saying that it could help...

**Jordan Eldredge:** I do think that finding something that you're passionate about, and certainly ideally you should do that at your work, and ideally you can do both of those things, too... You can have a project at work that you really care about, and you can have other things on top of that if you wish... But I think in the interview process having something that you're really fired up about and that you've thought about in that sort of all-consuming way - I think it comes across. And whether that thing is because you were able to find that alignment with your day job, or whether that thing is something that you found on the side is certainly a personal choice.

**Jerod Santo:** So I'm a big fan of experimentation myself, and in fact if people listened to our previous episode - probably two episodes back now...

**Adam Stacoviak:** Suz...

**Jerod Santo:** \[01:03:58.25\] ...about live-coding on Twitch with Suz Hinton, you'll be happy to hear that she has convinced us to actually begin live-streaming some code, and I've had a couple of sessions now; I'm committing to doing some experimentations every Monday afternoon roughly, U.S. time.

**Adam Stacoviak:** Two o'clock - you've been on time, too.

**Jerod Santo:** So if you're interested in that, I guess...

**Adam Stacoviak:** Well, two o'clock CET, so...

**Jerod Santo:** I'm a punctual guy, I like to be on time.

**Adam Stacoviak:** Yeah, Monday...

**Jerod Santo:** That's right. Which is like 4 AM Australia time, so... Which I found out by one of our Australian friends on Slack, who was a bit disappointed, but I think he understands. I think if you live in Australia, you're kind of used to a lot of stuff happening in the U.S.

**Adam Stacoviak:** Well, the cool thing is you've got the playback, though. You've got the videos going on. So the first one you didn't, but the second one you did, so that you can get the playback.

**Jerod Santo:** That's right. So if you're interested in that, Twitch.tv/changelog\_

**Adam Stacoviak:** Hey Twitch, if you know us and you like us, give us /changelog, please. Somebody out there, help us!

**Jerod Santo:** \[unintelligible 01:04:56.28\] Nobody wants it. For the time being, /changelog\_. Of course, you can also just go to our website and \[unintelligible 01:05:04.14\] click on that, follow us on there if you want to live-code with me on Monday afternoons... And I've been hacking on Winamp2-js. Jordan had a sweet idea, which has kind of morphed into what we talked about earlier, with the Webamp.org/changelog view, but how could we get a specialized player, maybe even on changelog.com? So we've been experimenting with getting Winamp2 loaded onto our site and running, and I'm happy to report that that worked, and it played one of our episodes served locally...

But we hit some road bumps... As Jordan said, there's people that are hacking on this, but not too many outside contributions. So the thing that we hit first and are still kind of stuck at is there doesn't seem to be much of a public API; it seems like the way you built it it's very much for the single use of "I'm loading a single page with \[unintelligible 01:05:59.13\] Because instead of it being in the middle of the viewport, it's actually in the middle of the page, and you're not used to there being a scroll; well, our page is quite long, so it took me 15-20 minutes to realize "Oh, it's actually working... It's just completely outside of the viewport.

**Adam Stacoviak:** That's funny. I missed that live-stream, so...

**Jerod Santo:** Yeah. The video is out there, I think it's about like an hour and four minutes or something. I linked it into our Slack. It made for one of those joyous programming moments when you realize something is working, and then you also realize you've just wasted half an hour, thinking that it wasn't working... But anyways.

**Adam Stacoviak:** Jordan's laughing over there, he's enjoying it.

**Jerod Santo:** \[laughs\] Well, Jordan was actually kind enough to hop into that livestream, and actually give me some feedback as I was dorking around with the code and trying to figure out how to use it, so that was fun as well. But if we talk about what's coming down the roadmap, my hope is some sort of API so that we can at least invoke it from an outside party, maybe pass it some metadata and a track, or a playlist, or something.

**Jordan Eldredge:** Yeah, I think the common wisdom is that open source works really well for libraries and not very well for applications, and I think this is sort of in that middle ground there, where it's not quite low-level enough to work with most of the abstractions that open source relies upon, and having an actual UI widget that works on other people's pages, that people can just like npm install, is I think not -- I guess Web Components was supposed to try to solve this, but this is not a problem that's very solved...

Like I said earlier, I actually have to inject style sheets into the DOM in order to get this thing to work, and while I try very hard not to step on anyone else's toes, there are certain things that are just a little bit hard to figure out how to do on other pages...

\[01:08:13.12\] But yeah, it's something I'm very open to, and I think there are people who are playing with it -- What is it...? Let me see if I can find it... 98.js.org - there's a guy who has done a really amazing Javascript clone of MS Paint, and he has this entire Windows 98 clone going on, at 98.js.org. He has included Winamp there. There are some other projects that are similarly trying to pull it in...

I'd love to get it to work, and it should, and we do have some kind of public API where you can load it pre-populated, but I think there's a little bit of a question as to like "Okay, well it's its own UI... How should you be able to control it from another UI?" I think at this point I'm looking for people who have use cases that they can show to me and say "This is how I want to use it", and then I would really like to add those API's, as necessary. Because all the logic is there, it's just a matter of exposing it in a way that doesn't expose internals that I want to be able to change in the future.

**Jerod Santo:** Sure. I'm happy to report that in terms of CSS clashes or anything like that, it worked surprisingly well. There was a little bit of a z-index issue, where some of our avatars are on top of it, and in the console I just changed the z-index to a really high value on the Winamp, and that fixed that. It's the positioning that was problematic, and I'm sure I could probably overwrite some CSS to fix that as well, and then really just the ability to pass it a track and say Play... As opposed to like, right now the only way you can do that is on initialization. It'll probably be enough for us, but yeah, our use case -- I don't know if you'd ever even ship it; I would have a hard requirement of lazy-loading it when somebody invokes it from our on-site player, because I wouldn't wanna ship that with every page load, because 0.1% of our users would ever click on it.

So I would love to get it working, and I probably will continue to hack on it in the upcoming Monday afternoon sessions.

**Jordan Eldredge:** Yeah, it's a thing I've been thinking about for sure, and it actually has influenced somewhat the architectural choices that I've made. So I actually do -- there's like a Winamp class internally, which then I consume on the page itself. For example, the Dropbox integration is not actually part of the core library... But that's an API that I exposed to myself, such that I could inject it on the webamp.org page.

**Jerod Santo:** Very cool. Anything else, aside from me bugging you to add API's, that you have planned? Like, "This is where I'm taking it." Are there aspects of Winamp 2.9 that it doesn't do? Are there grand plans for the future, or are you feeling like it's good to go?

**Jordan Eldredge:** Yeah, I'm definitely approaching the limit of getting everything of these main three windows working... On the one hand, that's exciting, but on the other hand it raises the issue of like "Okay, what's next?" There are people working -- or there's at least somebody working on an Electron app, which would be one interesting place to take it... I'm a little bit skeptical that something that's like "Wow, that's so cool!" in the browser, as soon as it's an Electron app, the response would be like, "Ugh, god, Electron... Javascript... Everything is sloooow! I remember Winamp - Winamp was fast; this is not fast", and that there's gonna be this sort of like an uncanny valley... I don't know if you know that notion in 3D rendering, that as things get more and more real, eventually they reach a point where they're like so real, but not quite real enough, that they become very disconcerting, and I worry a little bit that if this does actually get packaged up as a desktop application, that something which felt like a very detailed and accurate reimplementation in the browser is gonna feel like jarringly not quite right on the desktop.

\[01:12:23.09\] So that's one thing that I'm thinking about. The other one, of course, is that Spotify thing, although I don't think that that can ever quite be right, due to the DRM limitations... But the thing I'm actually more interested in is there's this -- one of the other iconic things about Winamp was the visualizations; there were these very ornate visualizers. I think the most notable one is called MilkDrop, which would do these psychedelic visualizations of your music in real-time, and you'd sort of see the screen ondulating in beat with your music... And all that stuff should be possible in Javascript, and in fact it is; there's a guy here in the Bay Area who's done a project called Butterchurn Visualizer (butterchurnviz.com). It's basically a Javascript reimplementation of MilkDrop, which was one of these visualizers.

We've gone back and forth a few times. I think he's interested in trying to integrate it, but he's been busy, and his project is not open source, so I can't just jump on it. And the other main visualizer which I think was built into Winamp was called AVS; I don't know what it stands for... But that actually did get open-sourced as Nullsoft sort of got acquired, or whatever. The C (or C++) source code is out there, and there are some people working on a Javascript port of that, and there's also someone working on like a Web Assembly transpilation of that.

**Jerod Santo:** I was just gonna say, that might be a good use of Web Assembly for that.

**Jordan Eldredge:** Yeah, so there's some talk of trying to get that to work, and I would really love to see that, because the AVS work with these presets, which were these declarative files that people -- I guess in the same way that skin authors would be distributing these skins they had made, these preset authors would be distributing these visualizations, and similarly, there's no place to go experience those anymore... So it would be really cool to offer a home for those things that could be revitalized on the web.

So those are the things I'm thinking about, but I would love to see if anyone else has any other ideas of places that we could take this, or other things like that.

**Adam Stacoviak:** What a journey... Just one side-project away, and the next thing you know, down the rabbit hole, all this fun, Facebook, archiving the web, going back into history, hitting up old forums, resurrecting skins, tweeting them even and loading them via URL... That's an interesting path. And then also, like you said, the vice-versa on the learning process of like taking what you've learned here and applying it to stuff you do at work - it's crazy; it's just crazy. I'm impressed very much.

**Jordan Eldredge:** It's been pretty amazing I think how much it has unlocked contact with different people. I think that really has been the one thing that -- I'm a self-taught engineer, and I've spent a lot of time doing contract work outside of what I felt was sort of like the developer community... And in fact, it's funny, I have to mention this - I remember listening to this very podcast before I really had any friends in the industry, and being like "Oh, this is what real engineers are talking about."

**Adam Stacoviak:** So you're talking about this podcast...?

**Jordan Eldredge:** Yeah, the Changelog Podcast.

**Adam Stacoviak:** \[01:15:57.07\] Whaaat...? Alright...

**Jordan Eldredge:** Yeah, I'm serious.

**Adam Stacoviak:** Tell me more, I'm listening.

**Jordan Eldredge:** \[laughs\]

**Jerod Santo:** Not this episode, I hope...

**Jordan Eldredge:** This is not a time-travel story. \[laughter\]

**Jerod Santo:** I wish it was. \[laughs\] Not that your story is not good. Please, continue.

**Jordan Eldredge:** You know, and feeling very isolated and not knowing whether I'll engineer or not, or whether these PHP, WordPress websites I was slinging were garbage, or whether I was actually learning anything... And going on this journey of having done something and then getting feedback from people on GitHub, and then getting to meet actual other engineers who had thought about these things, and connecting up with people... I think that really the human network has been the long-term benefit of this project - the people I've been able to meet, the people I've been able to learn from... Because that's stuff that you can't self -- there's certain things you can't self-teach without learning from other people...

**Adam Stacoviak:** No amount of money can buy that.

**Jordan Eldredge:** Totally! Yes, exactly. So having this community and getting to build this community of all these people who have related interests has been pretty incredible.

**Adam Stacoviak:** That's awesome. I'm glad it's come full circle here and you've been able to 1) be a listener... Bummer on being isolated, but thank you for letting us be a resource for you to not feel so isolated... And 3) just kind of continuing on that journey and then ultimately coming on this show and sharing this cool story. I'm kind of touched, man. That's awesome.

**Jordan Eldredge:** Yeah, when you guys reached out on Twitter, I definitely was like, "Play it cool, play it cool...!" \[laughter\] But yeah, I think finding your community is really important, and for me a big part of that was podcasts and other things like that, blogs and whatnot... And as you do more things and get more things out there, being able to connect up with real people and not being afraid to reach out and say like "Hey, what's up? Let's talk!"

**Adam Stacoviak:** Yeah. "Hey, what's up? Let's talk", I like that. Well, Jordan, thank you so much. This ending here is super special because I didn't know that you were a listener, and what we've just shared there. That's really cool, and I'm so glad that Jerod and I get the honor to host this show and then have listeners like you and others listening to this show, and being changed, being transformed, being welcomed, invited by it... Because that's what we're trying to do ourselves, and that means a lot to me to hear that.

Thank you for sharing your story. Anything else you wanna share before we call this show done?

**Jordan Eldredge:** No, I think... Like I said, I'm very grateful to be on here, and thanks for all the work that you guys do.

**Adam Stacoviak:** Cool. Well, thank you. I'll call this show done. Thanks for listening, everybody.
