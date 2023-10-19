**Jerod Santo:** We are here with Marcin Kulik, the creator of asciinema. Welcome to the show.

**Marcin Kulik:** Thank you. Thanks for having me.

**Jerod Santo:** Asciinema has been around a long time. For those who don't know, this is a service which allows you to record and playback your terminal. You'll probably have seen it in READMEs, on websites all around the world... 12 years I think you said in your email you've been working on this... Can you take us back to the beginning, why you built this in the first place and how?

**Marcin Kulik:** Yeah, it's been 12 years now. Why? That's a good question. I think it was just a hacker spirit. I was playing in my terminal with this old-school script command that some Unix systems have, like Linux and macOS... And it has its roots in the '70s, I think, and it just records all the terminal outputs into a file called TypeScript.

**Jerod Santo:** TypeScript?

**Marcin Kulik:** Not confused with the TypeScript language... Yeah, yeah.

**Jerod Santo:** Okay.

**Marcin Kulik:** This format predates the whole JS ecosystem thing.

**Jerod Santo:** Before it was cool.

**Marcin Kulik:** Yes.

**Jerod Santo:** It goes back to before TypeScript was cool.

**Marcin Kulik:** Exactly. So I was playing with it, and then it just felt so magical when I replayed it in my terminal without touching the keyboard... And it was just like everything was like a ghost would be typing. And it felt really cool, and I thought, "Well, not many people know about this. How can I share my recordings with my colleagues?" The immediate thing was "Well, I can send the TypeScript file over email, ask them to replay it in the terminal", and then it felt like "Yeah, that's just too much to ask." And I thought, "Well, there should be a way to share this on the internet, on a website somewhere, so I can just send a link to someone, so they can watch it.

And then I started experimenting on how would I replay such a file in a browser, on a website? And yeah, it was just me experimenting, but it was kind of my initial prototype was jQuery-based, replay inside a div element on a page; a div element with some span elements inside, with some styling etc. It was a proof of concept, it worked... So I thought, "Yeah, that sounds cool." And yeah, fast-forward 12 years, and it's kinda bigger than I thought, and a lot of people use it.

There has been many phases in this project; the early stages, and then the recent developments... It's been growing consistently, gradually. So it was just like a fun side project initially. I didn't even know if it would work, but I saw that it can work, so I just persisted.

**Jerod Santo:** \[07:59\] Well, 12 years is a long time ago, and it does seem like over those 12 years the trend of sharing your terminal with the world, whether you're demoing your new library or project, or your terminal tool you built, has been trending upward, dramatically. Even just sharing code snippets, sharing technical things in general onto various social networks is definitely -- and in READMEs, of course; even as open source tooling has kind of matured, to where people now release their open source tool and they have like a marketing plan. They have a go-to-market document, where they're like "Here's what I'm gonna do." And probably use asciinema to create a video is on a lot of people's list of like to-do's when they're going to launch their new thing. So you were definitely way ahead of that trend... And really took the hard bit. I mean, who did we have on, Adam, from Carbon? Remind me... The tool that allows you to have really cool, pretty code snippets, and share them with the world, and he made it dead simple.

**Adam Stacoviak:** I can't recall.

**Jerod Santo:** Anyways, we talked about the technical details of that, and how interesting it was... But in terms of problem sets - I mean, it's a static image, right? So Marcin, you really picked the harder of the tasks, right? Like, let's record disparate terminals on all these different computers around the world, and then provide some sort of way of hosting, and embedding, and playing back. So you bit off a big chunk. You said I started off as like a jQuery div replay thing... You were like manipulating HTML elements?

**Marcin Kulik:** Yeah. Well, that was just like -- the initial prototype was a Ruby on Rails application for uploading the recordings... And inside of the Assets directory on the Ruby on Rails project there was like a giant JS file, which was meant to replay that. It was kind of a hacky ad-hoc approach to just replaying that. It was not what the player is today, as a distinct, separate, full-featured thing... But yeah, how it worked initially, it was create a div on a page, and then go over recorded frames; frame by frames, I mean, timed chunks of data that was printed to the terminal at the time of recording, and then parse those chunks of data, and then try to render that on the page, with a set of span elements within span elements.

**Jerod Santo:** So you were taking the script and actually animating what the script was doing.

**Marcin Kulik:** Exactly.

**Jerod Santo:** You aren't actually recording a video.

**Marcin Kulik:** That's totally correct. So other than an ability to share the recordings easily, the other aspect that I focused on since the beginning was to solve the blurry screencasts that were -- video at the time, 2010-2011, was okay, but not as high-definition as these days. So when someone recorded a tutorial for you to put on their own website, by just recording screen, as in pixels, to an mp4 file or something like that - it didn't scale well. It was way too much bandwidth for how little essence is actually in there, right? By essence I mean the core information payload. Because it's just text after all.

\[11:51\] So the player -- back then, and still today, it's animating using HTML elements. It's animating the terminal. So maybe I go back a little, before animation. What happens is actually the player embeds a terminal emulator. So you have your iTerm, or Terminal app, or Alacrity, or XTerm... In order to correctly display how Terminal looked at the time of recording, it needs to be recreated at the time of playback. So the recorder doesn't record your terminal visually; it doesn't grab the text characters like a grid. It just intercepts the standard output, and everything that the applications -- like your shell, or other applications that are running in your shell are writing to the terminal. So it's just like a bytes stream. And so the player reconstructs that. Basically, it's a simple terminal emulator in the shape of something that looks like a video player.

**Jerod Santo:** Right.

**Marcin Kulik:** So at the heart of it, there's an actual terminal emulator. These days - it wasn't like that from the beginning, but these days the terminal emulator is written in Rust, and it's compiled to WebAssembly, and it's embedded in the JS player.

**Jerod Santo:** So some really cool technology. I'm learning this as we go. I just thought they were videos, dude. Like, I was looking at -- I'm inspecting an element, I'm watching it change the HTML... Talk about hard mode. Adam, did you know that these aren't actually videos? They just look like videos, but they're --

**Adam Stacoviak:** I suspected it was like character sniffing, essentially, and like recreating video out of it...

**Jerod Santo:** Okay.

**Adam Stacoviak:** Yeah, I suspected that, because I mean, that would make sense, because it's characters, essentially.

**Jerod Santo:** What else would make sense is you just record the screen, and then provide a place to play that back, you know? But maybe this was back when that was more difficult. You were trying to solve fuzziness, so here we have resolution independence. So that's pretty cool.

**Marcin Kulik:** Exactly. And that allows me to scale the fonts, for example, dynamically, automatically. So if you open any recording on asciinema.org, which is the primary hosting site that the community uses, if you resize your browser window, you can see how the player resizes, and the text at the same time, and you can select the text and copy and paste it, because it's just the text there. If you hit F key for full screen, you go to full screen mode, and then it fills your entire screen, and the text also scales up accordingly.

**Jerod Santo:** That's really cool. I thought it was simpler than that. That sounds hard... I'm sure you've worked on it over time and have improved it over time. I guess it's probably a huge data win too, because you're hosting these things at the end of the day. What does my computer upload in order to host that? Is it just the set of whatever I sent the STDOUT, like you were saying? It's probably just minuscule in comparison to if I recorded my screen for 30 seconds, or 60 seconds, and sent that to you.

**Marcin Kulik:** Exactly. The file format the recorder uses is called asciicast, which is a JASON-based text format, which you can just open and read. Current version of the recorder uses \[unintelligible 00:15:24.25\] delimited format, where you have like a JSON document on every line. And those are small JSON documents. Calling them documents is not the right thing here. But it's like a kind of readable format. It's documented in the asciinema repository. So you can write your own recorder, you can write your own player, and then you can deal with those asciicast recordings.

\[16:02\] So how the recorder works is when you start asciinema recorder in your shell, it creates a thing called pseudoterminal. Unix systems have this capability, PTI, pseudoterminal, which creates an imitation of a terminal for the program which runs in it. So asciinema recorder creates pseudoterminal, inside of which it launches your shell again, and that shell gets recorded. And whatever you type in it gets recorded. So by being in control of this pseudoterminal, the recorder can intercept all the output that goes from your programs inside the terminal, as well as all the inputs, which is the keystrokes. But that's off by default. So you can actually capture keystrokes, and these would be also included in the asciicasts file.

**Adam Stacoviak:** Does it also record things like Vim? Like if you open up Vim, and different things like this... Does it record literally everything, and it recreates as if you're sitting there, watching my terminal? ...in the past, obviously, because it's a video.

**Marcin Kulik:** Yes, yes, it records everything... Like Vim, what have you there; like, anything -- oh, right now the only thing that you cannot really reproduce is like those newfangled things, like images, displaying like regular images inside Terminal.

**Jerod Santo:** Emoji? How about emoji?

**Marcin Kulik:** Emoji works. So the recorder and player speak UTF-8 natively, and so emoji also works there. Yeah. And the whole recording - let's say you record a short session, like five-minute long. It depends on what you do there, and how much activity is there... Roughly, it can take like 10 kilobytes of disk size. And if you would start a recording session, and want to make a coffee, and forgot about it for 10 hours, let's say, and you come back to your computer at night, and then it's still there, over these 10 hours it would write zero bytes to disk, because it only captures --

**Jerod Santo:** It's not capturing any action.

**Marcin Kulik:** Yes, it only captures when there is action. That's why the files are so small.

**Jerod Santo:** It'd be cool if Adobe Audition would do that, Adam... Because I've definitely stopped recording a podcast, but not actually stopped recording the podcast, and then left... And then the next day I've come to my computer to like a 17-gigabyte file, or more...

**Adam Stacoviak:** Well, in that case it is capturing though, because it's capturing the microphone...

**Jerod Santo:** It's capturing the silence of the microphone, yeah. I mean, it would compress well.

**Adam Stacoviak:** It is idle silence.

**Jerod Santo:** Not as cool as asciinema, that just is like "Hey, if you're not standard-outing, I'm not capturing anything."

**Adam Stacoviak:** Yeah. That makes sense. One thing I've noticed though, Marcin, is that even though you may delay... So in particular, let's say you're typing a command, you're walking somebody through NETPLAN. You want to reconfigure your network configuration. I just did this as a test. And you open it up in Vim. But while you delay typing new characters in, the cursor kind of continues to blink. So you're saying that in a scenario like that, while you're delaying more characters being typed, or tabbing pressed, or the command being completed, there's that delay. It's not writing anything, but the cursor continues to blink. And in the playback, you're mimicking the same time. You're mimicking or playing back that delay. How does that work, to not write anything, but also write the delay, I guess? How do you know the time? How do you not write something, but also know there's a delay in the user interaction with the terminal?

**Marcin Kulik:** \[19:57\] Yeah. So it's the right word, mimicking. There's just this trick that - I implemented cursor blinking at a constant rate of every half a second it switches from being visible to invisible, and it gets reset; the blinking cycle gets reset every time there is new output being rendered. This is actually how real terminals do it as well. Some of them stop blinking after some time, but in general there's an initial delay when you're typing, and the cursor is visible, the white block is visible all the time. But once you stop for half a second or a second, or something like that, it starts blinking. And this is a purely visual thing. It's not related to any data being written anywhere.

**Adam Stacoviak:** It's a playback thing, essentially.

**Marcin Kulik:** Yeah, a presentational thing. So the player is exactly mimicking how terminals do it.

**Adam Stacoviak:** What I find interesting too is that in this playback I can copy and paste from the video. Like you said, Jerod, you thought it was a video.

**Jerod Santo:** Right. I never inspected them; I just stare at them, and I'm like "Oh, that's a cool video." I guess I'd never thought about it.

**Adam Stacoviak:** Me, I've never really -- similar, I've never been somebody to figure out "How can I use this?" I don't do much teaching.

**Jerod Santo:** I haven't used it, yeah.

**Adam Stacoviak:** I don't do much demoing. So I'm usually a consumer, not a producer in regards asciima. Asciicinema. Gosh...

**Jerod Santo:** Asciinema.

**Adam Stacoviak:** Well, however you --

**Marcin Kulik:** \[laughs\] It's all good.

**Adam Stacoviak:** The first time I've said it out loud, actually, so... Forgive me.

**Marcin Kulik:** There's one funny pronunciation which shows up every few years, ascii enema.

**Jerod Santo:** Oooh...!

**Adam Stacoviak:** Oh, my gosh.

**Jerod Santo:** That's when it's time to beg to differ, when someone says that one. You can interject and say "Well--"

**Adam Stacoviak:** "That's where I draw the line. You have to choose one: ascii cinema, or asciinema." But I love that, because especially as a teachable tool, like if you're teaching with the tool, if you're recording your terminal and you're an educator... Or even just somebody helping a friend, or a co-worker, in any way sharing the knowledge you have, and you're recording your terminal, either for yourself and future playback... Sometimes I do documentation to teach future Adam what past Adam did, and why he did it. So in many ways, these could be like a version of a video to tell me in the future, through motion, rather than just static documentation, how to go through the process of setting XYZ up, and how it goes, and you actually not only get to see it, but you get to copy and paste from that. So it's not this video where you can't OCR the thing, or whatever. It's literally text.

**Jerod Santo:** Right. That's actually a good idea. I've never thought about that, but I've often just like gone through steps that I've painfully learned, "Here's the process", and I will like throw them into - whatever; notes, a markdown file, Obsidian... Sometimes into a .sh. I'm like "Well, these are just executable. I'll just put it into an actual script." But other times, I just want to know what I did, because I'm not gonna run it, I'm gonna modify it. And actually just recording yourself and just saving that for yourself later is probably a pretty compelling use of asciinema, that I had never considered.

**Adam Stacoviak:** The only thing I'd change though is the speed. I know that you do record -- or you record the delay, you recognize it. I'd love it if like when I type a command, it can be just like a certain speed.

**Jerod Santo:** Like speed it up to X?

**Adam Stacoviak:** Yeah. Because there's certain things -- like, you literally see it back in real time. So if you're thinking, or you're delaying...

**Jerod Santo:** Too slow.

**Adam Stacoviak:** Right. What you get with video is the ability to edit, and finesse the output... Whereas this, thus far it seems to be a one to one. Is that true? Can you edit these things? Is there finessing to this thing?

**Marcin Kulik:** \[23:53\] Yeah, yeah. There are two controls that you can use to make it more pleasant to watch. The speed of playback - the player supports changing the speed. So one way you can do it is when you self-host the player, which is available as an npm library that you can embed on your own website... There's an option when you initialize the player, an option called Speed, and then you can just pass number two, for example, and you have double the speed. Or .5 to half the speed. For the recordings on the asciinema.org website, when you have one open, you can append to the URL a parameter like ?speed=2, and then you will have it like doubled. So that's one thing; good, old speed control. On that note, one thing that's missing from the player's UI is the ability to change the player on the fly, just by clicking the UI, which is on my to-do list, which is always growing... But that's probably something that would be neat there.

So another control for making videos more pleasant is something called idle time limiting, which is a capability in the player for removing all the pauses, like idle moments where nothing happens. So you can use -- let's say you want to keep the max inactivity to two seconds. Then you can use this idle time limit parameter for the player, which you can also set in the Recording Settings page on the website, which essentially removes all the boring moments where nothing happens, compressing the delays between animation frames. So then, if you record something and you go make a coffee, come back an hour later, you still can continue and you don't need to rerecord, because after the recording you can apply this idle time limit option, and say set it to two seconds, and then it will be smooth and pleasant to watch, because the longer pause will be two seconds that you will see there.

**Adam Stacoviak:** As you were describing that I was in my settings, fiddling with that... And as you said, the unpleasantness of the player in the consuming of it went away. I've set it to 1.5, so basically it was very similar to how you would normally delay, versus like my true delay, which is about 10 seconds. You know, I was just fiddling with it. So it's sort of like took all that away to make the viewing experience more pleasant, because it pretty much went to the command quickly, it went to the next step, which was actually opening Vim, and actually showing off the configuration, and then exiting Vim, because I know how to do that... And all that good stuff. So it was kind of cool. I liked that.

**Jerod Santo:** Was that a humble brag? "I know how to do that..."

**Adam Stacoviak:** Well, you know, just in case you didn't know.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I'm not stuck in Vim. I'm out!

**Jerod Santo:** I'm out, baby.

**Marcin Kulik:** Yeah. And this feature is possible thanks to actually not having this in a video format like pixels, or like \[unintelligible 00:27:21.06\] the screen, but just like capturing write events, like all the events that the terminal produces, that applications produce, and then being able to manipulate them before presenting them.

**Adam Stacoviak:** The cool thing too is that you can change -- I was in the settings again... I changed the terminal theme to Dracula, shout-out to the Dracula producers...

**Jerod Santo:** Zeno...

**Adam Stacoviak:** Zeno Rocha. Amazing. I love Dracula. But you're able to change the terminal theme... And I'm a JetBrains Mono fan myself, so I chose the Nerd font...

**Marcin Kulik:** It's my favorite.

**Adam Stacoviak:** \[27:59\] I like \[unintelligible 00:27:58.14\] I'm not a hater. Just my preference is JetBrains Mono.

**Jerod Santo:** I'm a longtime Ubuntu Mono user, but no love lost...

**Marcin Kulik:** All good fonts.

**Jerod Santo:** Yeah, these are all good, man.

**Adam Stacoviak:** But you can change how it looks afterwards. I think that's just -- it's literally like you have a replayable terminal session, themable, totally changeable...

**Jerod Santo:** That's cool.

**Adam Stacoviak:** That's so amazing that that's even a possibility.

**Marcin Kulik:** Yeah, it's like Apple doing all these magic things on new iPhones with video, where you can do some changes after you recorded them, and they can look like different -- like, you play with depth of field, and stuff like that. This is a different thing, but you can do fun stuff with it.

**Break**: \[28:47\]

**Adam Stacoviak:** I guess my question is, with that capability, what is the limit? What is the possibility? Like, I know this is an open source project, I don't know how you maintain it in terms of your financial stability with it, the support... I know you have a sponsor or two, I know you have backers, I think through GitHub Sponsors probably, things like that... How do you vision the possibility of where this can go? This seems very capable of being more than what it is. Not that it's not enough, but it's got a lot of possibility, a lot of potential.

**Marcin Kulik:** Yeah. So as I mentioned, I have a huge backlog of things to work on... Both missing features requested by users, as well as some crazy ideas I dream up once in a while... Maybe I'll touch a bit on how the development progresses, and how I do it in terms of like time and the resources first.

**Adam Stacoviak:** Sure.

**Marcin Kulik:** \[31:40\] So pretty much since the beginning it was a hobby project. And it's still kinda -- now it's more than that, but it's been a side project that I've been working on in my spare time exclusively, while having a regular developer job... And there were phases where I had a little bit more time to spend on this project., and there were literally years that I had very little time for maintenance, not even for thinking of new features. So it's not a business, it's not a product, it's always been an open source project.

I have been over the idea that maybe turning it into a business would be something cool. Like, many times I've been over this. But I haven't decided to turn it into like a, let's say SaaS product, like software as a service, where I just offer like premium accounts, and try to monetize users. Maybe -- well, first, it's just too much fun to ruin it with money chase for me. It's a great place where I can learn new technology, play with some cool stuff, and there's no stakeholders; nobody can tell me that "No, you cannot rewrite this in the Rust", or something like that. So it's always -- it's been bringing me a lot of fun over these 12 years...

And another side of that is it's kind of a niche audience. Maybe I'm not good in this business thing, because I don't really believe that you could make decent money on such a niche thing... So yeah, I settled on this idea that I want to work on it, and be supported by the community, but still keep it as a pure, free and open source project, and keep the asciinema.org site free to use as well, like it's been for all this time.

Recently, I've set up a GitHub Sponsors program to support that, and I offer consulting services around the project. There are companies who use some parts of asciinema's tech in their system, in their products, who need some customizations or some missing features, and they are willing to pay for that. So that's how I'm trying to make it sustainable.

**Jerod Santo:** How is Sponsors working out for you?

**Marcin Kulik:** Well, I've set it up just a few weeks ago... Probably literally years too late. I should have done it like a long time ago. But some years ago I've been really busy with like a regular job, and was invested in that, so I wasn't really thinking about going full-time asciinema. But now - yeah, it's a few weeks, I have right now three monthly sponsors, and...

**Jerod Santo:** It's a start.

**Marcin Kulik:** It's a good start. But I think it's a pretty good start because one of those is a company which donates a significant amount of money. They just started donating two days ago, but it's a big thing for me, because it's not there yet where I can say it's sustainable for me to cover all the living costs and operating costs of the service, but it's a good start, I think. So I hope there will be more people who think that this is a cool project, and can just chime in a little bit.

**Jerod Santo:** Absolutely. The one thing that I feel like it's a big thing, but it also kind of changes the project perhaps, is - I'm sitting here watching Star Wars Episode Four, which is a really cool one, by the way; it's like 17 minutes. And I hate that it's episode four. It's like "Come on, guys. It's the first one." But okay, let's knock it off on Star Wars... A New Hope, as they renamed it to.

\[36:02\] And I'm thinking "I would love to have the audio." And of course, when you're doing tutorials and stuff, the one thing that's missing is audio, right? But at the same time, I understand the purity of text only, and the fact that you can safely hit that Play button and not worry about it blasting... Or maybe it does blast, and I just have it muted. Is there audio in this thing? I haven't found it yet.

**Marcin Kulik:** No, there isn't.

**Jerod Santo:** Okay. I was starting to second-guess myself. I'm like "Oh, maybe it's there and I just don't see --" Because everything I'm seeing is just -- you know, it's text, and it's awesome.

**Marcin Kulik:** No, so the asciicast format is just for textual data, for what gets printed, and optionally for inputs like keystrokes. I don't think it would be a good fit trying to cram some audio inside of that. Well, obviously, we could invent a new format, or...

**Jerod Santo:** It'd be like a sidecar, or something. Like, you send two files, kind of a thing.

**Marcin Kulik:** Yeah, yeah. So actually, there are people who use the standalone player on their websites, and they do use it with audio. They record audio separately. And then the player has an API which you can use to control it, and it also emits several events... Like playing, paused, stopped... Kind of similar to HTML 5 video element on the page has; it can be controlled and inspected. So you can do it with the player as well. So I know about people doing it and just creating an audio element next to the player, and then coordinating those. It would be nice to have built-in support for optional audio file when you initialize the player, so the player would actually handle this... Because right now - yeah, you need to write a little bit of glue code to achieve that. But it's possible.

**Jerod Santo:** Right. And you also couldn't host it on asciinema.org. Like, you'd have your own player, and all that.

**Marcin Kulik:** Yeah, yeah, exactly.

**Jerod Santo:** Which is fine, but...

**Marcin Kulik:** And because the recordings are small, it doesn't cost much to actually host them out of my pocket. Because right now there is half a million recordings on the site. I store them all in S3 buckets, and I pay for that $3 a month. So that's really --

**Jerod Santo:** That's cheap.

**Marcin Kulik:** That's cheap for like a hosting site with half a million recordings.

**Jerod Santo:** Right. Now, if you were on RS - I'm not a Cloudflare representative, but we did switch ourselves to R2, because that zero egress cost for us makes a large difference when we're sending mp3s around the world. Even with a CDN in front of our bucket. So if you did something like that, where at least your outbound audio playback would be a zero, my guess is that would scale rather nicely, depending of course on how popular that feature is, and how long the audio recordings go, and... I fully admit this would be a large shift or addition to the product, but it would be an interesting dimension that you're currently not supporting.

**Marcin Kulik:** Probably on average if you have a recording right now, which is like 10 kilobytes, adding audio to it would be extra megabytes, or 10 megabytes, so like 100 to 1,000 times more than it is right now. So it would kill the lean aspect of all of it. So maybe that's also like why I'm kind of hesitating. But you know, you can do it; you can use a player, you can do it.

**Adam Stacoviak:** Do you need audio, Jerod, that's what you're saying? You need something audio-wise in there?

**Jerod Santo:** Well, I just feel like --

**Adam Stacoviak:** Maybe because you were watching the Star Wars Four version, which just begs for audio.

**Jerod Santo:** Well, it definitely begs for audio, but that was mostly just me -- that's a really cool one, by the way. We should link it in the show notes.

**Marcin Kulik:** Yeah, the Star Wars recording - it's been created in the late '90s, actually.

**Jerod Santo:** Is that the one where you can telnet to Blinkenlights, or something, and watch it?

**Marcin Kulik:** Yes, exactly.

**Jerod Santo:** \[40:13\] It's the same one. Okay.

**Marcin Kulik:** Yeah, yeah. So telnet Blinkenlights - I think it's defunct... Since last year.

**Jerod Santo:** Oh, it's defunct. This is a very old, cool hack that you could do, and you could tell your friends - if you telnet to... I think it was Blinkenlights.nl, I believe. Maybe that's wrong. Then you would connect and they had a Star Wars server, and it would actually just playback Star Wars A New Hope in your terminal. And that's what we're watching here, is that right?

**Marcin Kulik:** Yeah. So on that note, I wrote a blog post on asciinema blog called "Blast from the past", which is -- it's kind of technical, but it's also fun... Because the asciinema player has the ability, since a few versions back, to write your own parser for a recording file. So in addition to being able to play asciicast format, it can also play now the old-school TypeScript format from the '70s, which started it all for me. And also, there was a tool called - and it's still maybe used by some people - ttyrec; a similar tool for recording the terminal. And it produces terminal sessions in its own ttyrec file format. So asciinema player can now play back those formats as well, because in essence, they all do the same thing, those recorders - they capture the data stream.

So in that blog post, Blast From the Past, I show how you can write a custom parser for Simon Johnson's Star Wars asciimation. This is how he calls it.

**Jerod Santo:** Yeah, asciimation.

**Marcin Kulik:** He created this as like a txt file, with distinct frames there... So the asciinema player is also able to play stuff like that.

**Jerod Santo:** The reason why I bring up audio - and to answer Adam's question directly - is because when I look at what people use for their demos, it's either asciinema, or it's a YouTube video embedded. And YouTube videos have audio. So maybe if you want to put a cool soundtrack to your 45-second deal, or if you want to narrate and walk through what it is that you're showing off, it's just very handy to have an audio track. So I think that that's compelling, and I think there's a lot of people who use YouTube because they can do both. And I think that if asciinema did both, even if it was just default off, but you could get it done, I think that might be compelling for a lot of people. That's why I bring it up. Not that I need it, I just think it's a nice to have.

**Marcin Kulik:** That is a valid use case. Yeah, certainly. I noticed people do work around lack of audio by writing comments inside the terminal...

**Jerod Santo:** Oh, yeah, totally.

**Marcin Kulik:** ...clearing them... Which is a workaround. So yeah, having audio there would definitely be helpful in those cases. Another option - and this is a feature that's coming - is to have the ability to have some form of subtitles. So you could prepare a script of what do you want to show at certain timepoints, and it would show like a subtitle.

**Jerod Santo:** \[43:46\] Yeah. That would definitely be a nice addition that's more in line with the spirit of asciinema, which is text-based, roots in ascii, at least metaphorically... We know it's UTF-8, so yeah, more than just ascii... But roots in that world. And text, and a small amount of kilobytes, and like trying to really streamline, and make it... All those things. Same thing with captions - you can scale them up or down as you redraw, so you have that resolution independence with captions as well... That'd probably get you like 90% of the way there, I think, if it was easy to use.

**Adam Stacoviak:** What about things like embedding and whatnot? How do people use this as a true tool to -- I mean, I'm just on the Explore tab, and it begs for categorization, tagging of sorts... Like, can I just hang out in Elixir for a bit, and just see people do things in Elixir? I don't know, write some Elixir, or something like that. Or things where you're setting up particular things with spinning up an Ubuntu server, or something like that. Configuring Kubernetes, or whatever it might be. Things that are generally challenging to showcase, but asciinema offers all the flexibility in everything it does. What about things like that? If I did that, then being able to embed it in my blog - how does the user use this beyond the website, or beyond hosting their own player?

**Marcin Kulik:** Yeah, sure. So there are a few options there. One option is if you record and upload to asciinema.org, you can just click on those -- there are two links on the recording page. One is Download and the other is Share. And if you click on the Share one, you have a few options of how you can share it with people, including embedding it. So you can just place JS snippets inside your HTML, which creates an embedded player inside an iFrame on your site. It's still hosted on asciinema.org \[unintelligible 00:45:54.26\] from there, but you can have it just by pasting a JS snippet. That's one option.

Another option is you can self-host the player. So you can use the player on your own site, and if you have a recording on your computer, you can just use it there. But also, you can download the asciicast file from asciinema.org, and include it in the assets of your own website, and use the player there. So that's how you can embed it.

There's also ability to -- so you can also have a link to the recording, which is like an image preview. In fact, it's SVG, because SVG is sharp, and can produce a nice-looking, scalable preview. So you can use like an SVG thumbnail thing, which shows one of the frames from the recording, and it links to the site.

**Jerod Santo:** Also --

**Marcin Kulik:** And another thing - also, yeah...

**Jerod Santo:** I think I know what you're gonna say...

**Marcin Kulik:** Yeah. And also, you can convert asciicast files to GIF files.

**Jerod Santo:** That's exactly what I was gonna say. Yes.

**Marcin Kulik:** Yes, and I pronounce it GIF.

**Jerod Santo:** \[laughs\] Correctly.

**Marcin Kulik:** Yeah. There's a recent project, sub-projects I created called AGG, Asciinema GIF Generator...

**Jerod Santo:** Are you sure it's not Generator?

**Marcin Kulik:** Um... \[laughter\]

**Jerod Santo:** It's a GIF Generator...?

**Adam Stacoviak:** You got him for a second. There was a pause.

**Jerod Santo:** He had to stop and think about that one. He did. He's like "Uhm..."

**Marcin Kulik:** "What happened...?" \[laughter\]

**Adam Stacoviak:** "Should I agree or not agree? Is he right?

**Marcin Kulik:** \[47:40\] AGG is like a second generation of the GIF generator I created. The first one, many years ago, was like - I glued together some parts of Asciinema Virtual Terminal Emulator with Image Magic and some other pieces of the Unix pipeline, to just generate a series of images, combine them with Image Magic and whatnot. But it was really resource-intensive. Slow... It used huge amounts of memory, and for many people it was impossible to convert medium-sized recordings to GIF files with that. So it was kinda like a prototype solution that people started using, and it couldn't be saved, so it needed rewrite. And since I had this Virtual Terminal Emulator written in Rust, I thought "I'll write this in Rust." So AGG is super-fast; it uses a very minimal amount of memory, and it can convert any asciicast file to a GIF file in a matter of seconds.

**Jerod Santo:** This is exciting for me, because as a person who routinely helps other people with getting eyeballs on their projects, I'm often looking for the GIF, or the image to help share what they're up to. And oftentimes, I'll come across a readme, they'll have an asciinema, and I'll think "Oh, this is actually harder for me to share than if this was just a GIF embedded in here." And I did not know about this until today. Is this a brew-install away, or how do I get this thing installed? Cargo install...

**Marcin Kulik:** Well, I think it may be in Brew...

**Jerod Santo:** Docker, Podman...

**Marcin Kulik:** You can try Brew.

**Jerod Santo:** \[unintelligible 00:49:35.11\] Brew install AGG. Let's see what happens.

**Marcin Kulik:** Yeah. Well, I had this funny relationship with GIF generation, actually, since GIF is a very inefficient format for video.

**Jerod Santo:** It is.

**Marcin Kulik:** It's like the worst. But at the same time, it's so easy to embed everywhere, so people just use it. So initially, I thought it's such a bad idea. It stands in opposition to what the project was meant to be - lean, tiny files, with sharp rendering. And people started asking for --

**Jerod Santo:** "I'm never gonna convert them to GIF..." \[laughs\]

**Marcin Kulik:** "How can I convert them to mp4?" and stuff like that. So after many, many people asked about it and tried various approaches, I thought "Okay, I can spend some time on that." So even though I always prefer the real thing, the thing in the player, where you can rewind, pause etc. I see how it's useful. And yeah, I still get asked "How can I convert it to mp4?" Really. People want to create videos. Which also I can understand, because if we leave that tiny file size aside, another nice thing that asciinema recorder has is the ease of recording. You're in your terminal, and you think "Oh, okay, I'm gonna record that." You just type 'asciinema rec', and then it starts recording. You don't need to go anywhere else, you don't need to click outside of your terminal window. So it's convenient.

And you can also automate this. You can, for example, put a snippet in your shell configuration file, which will start recording every shell, in every shell that you start. When you open new tabs in your terminal emulator, every tab would be recorded automatically to a file somewhere. You can do stuff like that. So the ease of recording, I think, is what people like, even though some of them want to convert it to a video, and probably some of them even uploaded this stuff to YouTube. That would be funny, but probably it happened.

**Adam Stacoviak:** \[52:02\] As I look at them, I'm just thinking "Why is this AGG not just built right into asciinema when you install it?"

**Jerod Santo:** AGG as a service.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Oh, you mean in the command line tool?

**Adam Stacoviak:** Right into it. Like, you can either export the ones you store locally, or built into the website, which is -- it uses AGG to export, essentially. And you can choose -- it's the exporter. It's really just a feature, not a whole new project, really, of the core thing... Because the next best thing to seeing it on your site or self-hosting it would be to export it and use it in a different way. It's now stuck that way; you have to re-export it if you wanted to do a different font, or themable. But you have your pristine source that you can just re-export new versions of GIFs, mp4s, whatever.

**Marcin Kulik:** Yeah, yeah. Before I forget, AGG as a service - that's actually a thing. I haven't worked on that, but there is one person, Mary - I don't remember where she worked, but they've created a web service which generates social media preview cards for various things... And many things that don't have it - like when you put a link to some resource on the internet on Twitter, or Mastodon etc. some of the sites don't include the necessary metadata, like the Open Graph tags, etc. So they created like a proxy web service thing that generates some previews on the fly, and they actually use AGG as a library. Because you can use AGG as a library in your own Rust code. And they generate GIFs on the fly there, for those previews. So yeah, it's a thing.

**Jerod Santo:** That's cool.

**Adam Stacoviak:** "It's a thing." \[laughs\]

**Marcin Kulik:** Yeah. But back to why AGG is not part of the initial package, or like the --

**Jerod Santo:** Yeah.

**Marcin Kulik:** Well, I guess it's like a historical thing. First, the recorder, the thing you actually run in your terminal is written in Python. And in order to generate a GIF, you need to actually visualize the whole thing after capturing the bytes. So in order to do that, you need to have some form of terminal emulation, some embedded one inside your software. So I have this one, asciinema's virtual terminal is a separate Rust library called AVT. And this one is embedded in AGG. So AGG takes the asciicast file, feeds all the events captured into this terminal emulator, and at each step it generates a picture of it, and then feeds it to the GIF generator library.

It's kind of resource-intensive, and with Rust it works smooth and fine, but the recorder is in Python. So I would need to -- well, there are ways to embed Rust code as like Python-native extensions, inside Python, projects... There's one project called Py03, which allows you to call Rust code from your Python code. So that's one way. And it would complicate packaging, probably a lot, for many people. I'm not packaging asciinema recorder for like dozens of distros, and various other operating systems, and they would just like burn me on the stake if I just like made this like "You need a Python environment and all the Rust toolchain, and something else maybe to package it up." So I would be willing to rewrite the recorder in Rust instead of trying to combine those things into one package.

**Jerod Santo:** It'd be less work to rewrite than it would be to actually bundle and package those.

**Marcin Kulik:** Yeah...

**Break**: \[56:11\]

**Adam Stacoviak:** My install process -- I installed on Ubuntu, versus macOS, because I just happen to have Proxmox with a VM just chilling there to tinker with, so I just SSH-ed into it really quickly... And the process to install is via a PPA repository, which I believe stands for Personal Package Archive. This is like a special way you can essentially -- I'm not even familiar with this really, but the process to install is apt-add repository PPA, colon, and then essentially the namespace, and then the name of the thing you're installing. And I think if there's updates to it, I would get that when I do apt-get update. So that if there's new asciinema updates, then I just sort of get them I do typical Linux maintenance... Which is cool. But then I'm like "Well, I am happy to just install a separate project the same way", but I didn't even know it existed, until I had to go hunt it down. And it's a couple years old. So my recommendation isn't necessarily to combine them, but just don't obscure them, where I've gotta go and discover the world asciinema... Because it's an obvious feature for the usage of it.

**Marcin Kulik:** It is, yeah. I think Agg is not mentioned in the main asciinema readme even, maybe. I need to check. But yeah, discoverability is - yeah, probably... That's a nice feedback. Thanks.

**Jerod Santo:** So I brew-installed AGG. I did brew-install AGG.

**Adam Stacoviak:** Was it the right AGG?

**Jerod Santo:** And I got 1.4.3, which I believe is the latest version. And I downloaded the Star Wars cast. This is asciinema569727.cast. That's a 2.3 megabyte file. That's a long one; we said it's like 17 minutes, something like this?

**Marcin Kulik:** Yeah, this one is on the longer side.

**Jerod Santo:** And I ran AGG on it to generate the GIF... It generated in six seconds. And the starwars.gif is six megabytes. So three times the size, and that's at 582 pixels by 274 resolution. So super-small by default. I'm sure you can set that somehow with AGG.

**Marcin Kulik:** Yes, you can change the font size.

**Jerod Santo:** Yeah, you can change the font size. But just the default, here it is. And the GIF file, which was created pretty quick, six seconds on a modern Mac - three times the size of a cast. And it's this tiny little --

**Marcin Kulik:** Yeah, I know.

**Jerod Santo:** So if I got this thing blown up big to the way I want it, it's going to be massive.

**Marcin Kulik:** Yeah. And you can convert this to mp4 now, and it will be smaller, but it will be illegible, I guess.

**Jerod Santo:** \[01:00:06.04\] Illegible, yeah. \[laughs\] So you know, it is what it is.

**Marcin Kulik:** Yeah.

**Adam Stacoviak:** That's an extreme example though, because who's going to do that necessarily? Like, most things might be a terminal session where you're demonstrating something.

**Jerod Santo:** Who wants to watch Star Wars in their terminal...?

**Marcin Kulik:** Who would watch a 17-minute long GIF? Yeah, I can't imagine... \[laughs\] One which you can't really pause.

**Adam Stacoviak:** Yeah, exactly.

**Marcin Kulik:** And if you miss something, you can't rewind.

**Jerod Santo:** Oh, yeah.

**Marcin Kulik:** But note on that thing where you said, Adam, that you upload it, and then you need to export it to create a GIF from it. In fact, you can actually record it locally to a file, without uploading to the site. So you can just like asciinema rec demo.cast, and then you can convert that demo.cast to demo.gif locally, without --

**Jerod Santo:** The cast files; that's like your source file there, right?

**Marcin Kulik:** Yes.

**Jerod Santo:** Like, that's your source of truth. So...

**Marcin Kulik:** Yes.

**Adam Stacoviak:** Yeah, when you're done recording, you get the option to upload to asciinema.org, or Ctrl+C to save locally. And that actually saves still to my Temp directory, which is interesting... At least on Ubuntu. I don't know if this is like a setting or a config you can do for somewhere else.

**Marcin Kulik:** Yeah, you can; you can configure that. But it always records to disk so you don't lose your recording in case of -- let's say you end the session, and you hit Enter to upload it, and then there's a 504, or something. You don't have an internet -- so yeah, it always records in real time to disk, and then at the end, you can either upload it by hitting Enter, and then the Temp file gets deleted, or you can just Control+C out of it. And the file stays there; you can recover it from Temp if you want, or just leave it there and it gets cleaned up at some point.

**Adam Stacoviak:** Yeah. I'm actually seeing the details here now for a configuration file too, because - I guess this might be a Mac-only thing, I don't know. I guess you always have a home directory and a .config folder... And asciinema/config is where you can like set API things, record things, STDIN, environment file variables, and stuff like that. A lot of configuration here.

I see a lot of possibility with this. I mean, I want to be encouraging, because we're grilling you on how it works... Less to be like "Here's all the \[unintelligible 01:02:31.25\] that you have to go and leave this podcast and be like "Man, these guys gave me a to-do list."

**Jerod Santo:** He's gonna work on his audio support when he leaves here.

**Adam Stacoviak:** Yeah. It's less like that. I believe there's a lot of possibility. I don't see the exact path to get there, but you've built such an amazing tool; it is super-cool that you get this replayable, reexportable, non-static, dynamic option to record a session... And however you want to do it - whether it's an emulation of Star Wars the movie as ascii, or a demo. I think there's a lot of cool things there. And there's so many documentation websites that just lack that... I guess a GIF is static in that case, and there's a lot of documentation sites now that use dynamic code examples, and stuff like that. And maybe that's not the solution there, but there's a lot of options. I think that this does make sense to use, because it's such a -- it keeps the exact contents that you typed in. It's not a movie, it's not static and immutable. You can change it, so I love that about that. A lot of possibility, though.

**Marcin Kulik:** Yeah. I've been hearing from some people that they actually prefer -- when there's like an installation tutorial, that they actually do prefer just a list of commands, so they can copy-paste them and just like follow them by reading. So I have this feature in mind, actually, where I'm thinking about implementing a transcript view in the player, where you could switch from the regular player view, where you can seek, and pause, and play, to a text dump of it, which is scrollable, and just like have how you would see your own terminal at the very end, and you are able to scroll back and see what's there.

\[01:04:27.08\] This is something that could be like this alternative view, which you could toggle to. It could be like a best of both worlds, because you can record it, and then if someone prefers to just like scroll through it and -- I mean, scroll vertically, and just like see the output and copy paste, that they could do it. Or people who want to see this in a more lively fashion, like animated, they can keep using the defaults, the current view.

**Jerod Santo:** Well, I have a feature request, but I thought maybe we would save it for the post-show. It might be a little bit too nerdy to...

**Marcin Kulik:** Go for it.

**Jerod Santo:** Go for now?

**Marcin Kulik:** Yeah.

**Jerod Santo:** What do you think, Adam? Should I do it now, or should I do it for maybe a Plus Plus thing?

**Adam Stacoviak:** Just go for it, I guess...

**Jerod Santo:** \[laughs\] This is an AGG feature request. And one that, if you would help me, if it's feasible and you would help me, I'd be willing to open a PR on AGG. Or you could just code it up yourself, just you let me know. But I would be willing to help on this. You agg space, input file name, output file name; that's the standard deal. It should be able to accept, alternate to an image file name, or an input file name, it should also accept an asciinema.org URL. And if it detects an asciinema.org URL, it should resolve where that cast file is, download it, and create a GIF. All in one step.

**Marcin Kulik:** It's there. It works.

**Jerod Santo:** Oh, really?!

**Adam Stacoviak:** See? \[laughs\]

**Marcin Kulik:** Yeah, yeah. I think it should be in the readme as well. I don't remember --

**Adam Stacoviak:** I didn't see that either. I was curious about that.

**Jerod Santo:** It's not in the help. When I -- hold on, let me try this.

**Marcin Kulik:** Agg, and then paste the URL, and then the name of the output GIF file, and you will get it.

**Jerod Santo:** Okay...

**Marcin Kulik:** Yeah, try it. It's all there.

**Jerod Santo:** I like you a lot, Marcin. I like the way you think. It's all there.

**Adam Stacoviak:** It's all there.

**Jerod Santo:** I'm gonna try it.

**Adam Stacoviak:** No pull requests required.

**Jerod Santo:** Copy-paste... Yeah, I mean, that's the best kind of code there is, the code that's already been written by somebody else. AGG... Boom. Test.gif... It worked. It doesn't say much... Test.gif... And it's a duck pond, which is what I downloaded, duck pond. Cool, man. Good thinking. That's a good feature.

**Adam Stacoviak:** I would definitely recommend though giving installation instructions.

**Jerod Santo:** Okay, yeah, a smaller request - and I would definitely help with this - is we could put that into the help documentation, so that you know that it works.

**Marcin Kulik:** Oh, yeah. Yeah, good idea.

**Jerod Santo:** Like, if I just type agg, it doesn't tell me that.

**Marcin Kulik:** Possibly not.

**Adam Stacoviak:** Oh, like \[unintelligible 01:07:03.11\] that like generates from just typing the prompt itself, the command itself?

**Jerod Santo:** Yeah. Like, you just type agg with nothing and it says "The following required arguments were not provided: input file name, output file name, usage, options, input file name, output file name." Right there it could say "Input file name or asciinema URL."

**Marcin Kulik:** Yeah.

**Jerod Santo:** You know what I'm saying? And agg--help might say it...

**Marcin Kulik:** This help message is generated by the library, for command line parsing. \[unintelligible 01:07:30.02\] library. But I'm sure there's a way to just modify it in some way.

**Jerod Santo:** Cool. I can code that up for you, Marcin. I can fix that help message for you.

**Marcin Kulik:** Oh, awesome. Awesome.

**Jerod Santo:** If you'll accept me.

**Marcin Kulik:** Oh, yes, of course. Yeah.

**Adam Stacoviak:** Contributor...

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** It is October too, Jerod, so -- you can't get a T-shirt this year, but you can get your...

**Jerod Santo:** The more T-shirts for Hacktoberfest.

**Adam Stacoviak:** I wanna see if the, I suppose input/output to open source this year changes because of that. Because of the incentive.

**Jerod Santo:** \[01:08:06.15\] My guess is it's going to be way down, because everybody who's found out there's no free T-shirt, they're all just like "Meh..."

**Adam Stacoviak:** Yeah...

**Jerod Santo:** Sorry, digital rewards just don't get us.

**Adam Stacoviak:** Yeah, I think that -- yeah, definitely the incentivization needs to be better.

**Jerod Santo:** But to their credit - I mean, they were printing 50,000 T-shirts and sending them around the world. Can you imagine the operation? I mean, I wouldn't want to do that.

**Adam Stacoviak:** Yeah, and the gaming... I think it really --

**Jerod Santo:** But then maybe you just think to yourself "Maybe we just shouldn't do Hacktoberfest, I guess."

**Adam Stacoviak:** Well, either way, I'm sure you'll still be motivated, right? Because you love open source.

**Jerod Santo:** I don't know. Off topic, off topic...

**Adam Stacoviak:** It is off topic. We're bikeshedding a little bit. I want to come back to -- maybe less to say what you should do, but more like what do you want to do with this? Like, given the possibility and the potential here, if you could just wave a magic wand, what would it be like? Would it be you don't work anywhere else, and do different things, and you find a way to convert this into a lifestyle business? Maybe you have one or two employees? What do you want from this?

**Marcin Kulik:** I would like to be able to just work on it, and not really imagining myself turning it into a business, but just like really keeping this as a free software, and something that people really enjoy to use and admire... Because I'm constantly hearing how people are amazed by this, specifically like how it works. And this just keeps me going. I really enjoy it. And I've been programming my whole life, and I've been doing it just for fun. And I want to keep it that way.

So if I could wave a magic wand, I would love to have enough sponsors, patrons that would allow me to focus on this for as long as possible. So that's my dream. That would be great. I've put a lot of work into this project over the years, and I can't really stop. It's so fun... And then I have some upcoming new cool things that -- well, I can share a little bit what I plan.

**Adam Stacoviak:** Tease them, if you can. Can you tease something?

**Marcin Kulik:** Yeah. So one thing I've been working on is live streaming, like a Twitch for terminal nerds. So just being able to stream your terminal in real time, share the link with people, and they watch it, and then you just do some coding, or some stuff like that. I haven't implemented it in the server, which is the server side is Elixir, Phoenix... And I have the WebSocket driver inside the player. So basically, instead of playing from the file, it can play from a live source. And I have a streaming component that you locally run together with the recorder, that forwards the whole stream to the server, and the server distributes it to the players of the viewers.

So I have this almost ready, I've been just like busy with other things... But I hope to release it quite soon. And I'm still kinda like on the fence, because the streaming component is also written in Rust, and it makes even more sense for this one to be part of the initial package of the recoder. But I have the same problem with merging this Rust piece with the existing Python codebase.

\[01:11:47.03\] So right now you can combine the asciinema recorder with the streamer, just piping one to another, and it will just forward this stuff to the viewers. But I'm thinking about just - yeah, it all points to a Rust rewrite of the recorder... Because then I could have the existing code of this streamer thing inside it, inside the recorder, and I could also merge AGG into that... So it could be like one single executable for all of it. But that's -- yeah, that would be some work.

The recorder codebase is not huge. It's a relatively small Python codebase. Actually, I've rewritten it seven years ago into Go, and then after a year or so, it turned out to be not the best choice for the project, so I went back to Python. But now... Who knows...?

**Jerod Santo:** Why is that? Why wasn't it a good choice?

**Marcin Kulik:** I'd written a blog post about that on the asciinema blog, but it's been -- so one thing with this Python implementation is that it only uses things from Python's standard library. And because this pseudoterminal PTY module is there, it's stable, and it works on all platforms, even on Android, or some obscure systems... So it was kinda like packaging was kind of solved, because you just packaged like a py file and distribute it to systems which have this standard library, and it's covered. So there was a problem with the Go implementation, that some low-level systems stuff needed to be implemented, or tweaked for every platform. And at the time, Go packaging was kind of in a weird state, in my opinion. I know that it's better now, but it was different options of how you vendor libraries, or package things... And then the maintainers of asciinema, for different distributions, they had some troubles with it as well. And then in the end, I kinda of didn't like Go. \[laughter\]

**Jerod Santo:** Well, that's a valid reason. I mean, if you don't like it, you don't like it.

**Marcin Kulik:** Yeah... For me, it was -- well, there was one other reason. You can read the blog post, there's many more there. If it would be just one of them, I would probably stick with it. But there was like a bunch of reasons. But now I have a bunch of reasons to do a Rust rewrite. So maybe I'll find time for that, and then all will fall into place, and maybe unifying this stuff would open more possibilities.

**Adam Stacoviak:** Let's try and wave that magic wand. What would it take? I know that you said what you would do if you could, and you mentioned GitHub Sponsors, and you mentioned patrons... Do you have a Patreon too, or do you just focus on GitHub Sponsors?

**Marcin Kulik:** Right now just GitHub Sponsors. Yeah.

**Adam Stacoviak:** Okay. And I noticed that you've got a five monthly supporters goal. It's 60% there's, so you've got - I don't know how many... Four. So you've got four sponsors right now, which is pretty awesome for just being a few weeks into being sponsorable. How many does it take? What does it take for you to step away from your existing gig? What is that -- not so much the details, but what does it take? How many sponsors does it take? How can we ask the community that's listening to this podcast just to shower you with sponsors, with whatever it takes to get you to that next -- what are the next levels? What are the next milestones?

**Marcin Kulik:** Definitely it would help if there were some corporate sponsors. I have on GitHub Sponsors page profile, I've set up some monthly tiers, where I offer some perks for sponsors... So those higher-level tears would really help, because - yeah, that would allow me to focus on that, and not worry about living costs, and other things like that. Of course, individual donations are more than welcome... But yeah, I'm really new with this sponsorship thing. I never did that before... But yeah, I think monthly sponsors, not just one-time donations, would we change it. Because it compounds.

**Adam Stacoviak:** \[01:16:16.09\] Very cool.

**Jerod Santo:** Well, it's a very cool project. I have cloned AGG, and I am looking for the correct places to submit my pull request soon... So stay tuned for that.

**Marcin Kulik:** That's one more thing I want to implement, hopefully soon, which is full-text search on the website... Because it's all text, so I can index that with ElasticSearch, or something like that, and then search all the recording content.

**Jerod Santo:** How many recordings did you say you have up there? Half a million?

**Marcin Kulik:** Half a million recordings, yes.

**Adam Stacoviak:** What's the size that, your S3 bucket?

**Marcin Kulik:** Oh, that's a good question...

**Adam Stacoviak:** Three bucks a month, it can't be much.

**Marcin Kulik:** That is in some tens or hundreds of gigabytes, but not more.

**Adam Stacoviak:** Okay. We have some friends we can introduce you to. TypeSense... Similar to Elastic, maybe easier to use, and I'm sure they're willing to talk to you in some way, shape, or form. I can't make any promises, but happy to make that intro. We are big fans of TypeSense. Jason Bosco and team do a great job of leading that project. It's open source, they also have a cloud-supported version of it, and they're one of our sponsors, so... This isn't a paid plug, but we just like them a lot, so... When we get a chance, we tell people about it. That's what we're doing here now.

**Marcin Kulik:** Awesome. Thank you.

**Adam Stacoviak:** I agree with that. I think full-text search would be super-cool. There's a lot of things you could do on site to categorize even the Explore experience, to provide discovery. A lot of reasons people use tools is distribution of ideas. So not just a tool for me to communicate, the one to one I already have planned, but how can you help me meet and reach the masses that I don't even know, that are interested in what it takes to go from zero to ZFS, for example? And if I did a terminal session of like zero to ZFS, what is that like? Or what is it like to configure static IP addresses in a bonded nature for XYZ on Ubuntu? These are things I've done recently, for example. And I'm like, I want to share that, but static documentation is kind of boring. Is there another way? And I've always known about this, but just didn't know how to use the tool, and wasn't really sure of your plans, but if we can get some sponsors to you, and you're dedicating more of your time to this, and this is what you want to do anyways, and it gets better as a tool, maybe it becomes something that people can use beyond its current usage, which is, like you mentioned, live streaming. I think that's super-cool, the idea of like live-streaming the terminal to people... That's an interesting idea.

**Jerod Santo:** Yeah, agreed.

**Adam Stacoviak:** There's legs to this idea, more so than it's there now.

**Marcin Kulik:** Yeah, there's tons of ideas in my head, and ideas in GitHub issues from people... It's just, time is needed. Time and focus.

**Adam Stacoviak:** Well, you mentioned an email. Do you mind if I put your email here on air? You mentioned it in your Sponsors page. That's kind of public. Do you mind if I mention it right here? Is that cool?

**Marcin Kulik:** Oh, yeah, sure.

**Adam Stacoviak:** Okay. So listeners, if you're nodding your head to the things that Jerod and I are probing Marcin about, and just ideating with him, and you've got more, reach out to him: marcin \[at\] asciinema.org. We'll put that in the show notes. That's also on the Sponsors page, so if you've got any questions about that and you want to support him, go check that out...

But I've gotta imagine there's times, Jerod, when people leave these episodes we do, that are maybe slightly smarter than you, and maybe half as smart as me... And they come back with better ideas, and they email the people, and they go and -- like the recent thing with Pokey Rule. That was cool, that thing in Slack. Like, that's cool how that happened from that podcast, that whole entire video... Which the listeners aren't aware of, but you are. And that's kind of cool, how people riff and munge these ideas. So get in touch with Marcin if you've got some thoughts, and... Best worst-case scenario? Just say hello and say you like the tool.

**Jerod Santo:** Amen to that. Marcin, anything else that we've left unsaid, that you wanted to bring up before we call it a show?

**Marcin Kulik:** I'm not sure... We've covered a lot. Yeah, so we have a matrix room...

**Adam Stacoviak:** Oh, yeah.

**Marcin Kulik:** ...where we hang out. So the community is there; we discuss stuff. Just join and say hi. You can find the link to the matrix room on the website, in the footer.

**Jerod Santo:** There you go. Pop into their channel and say hi if this is something that interests you. Well, thanks so much for coming on the show, and sharing all about this really cool project. I learned a lot. I thought I knew what it was, and I didn't even know how cool it was.

**Adam Stacoviak:** I agree.

**Jerod Santo:** So hopefully, our listener also learned a thing or two... Very cool, and we wish you all the best with continuing to work on this.

**Marcin Kulik:** Thank you very much. Yeah, thanks for having me.
