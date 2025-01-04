**Jerod Santo:** We're here with Mitchell Hashimoto. Mitchell, it's been literally forever, in literally the sense how Adam says it literally; not how I use it, but how he uses it.

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** Literally forever. Welcome back, man. Welcome to the show.

**Mitchell Hashimoto:** Thank you. Yeah, it's been 10 years since the last show, and then the first time, the only other time I was on, I think it's been like 13, 14 years. It's wild.

**Jerod Santo:** I still remember the day that you posted Vagrant onto Hacker News, I think, the first time. I remember that day.

**Mitchell Hashimoto:** That was 2010, I don't know. But yeah.

**Jerod Santo:** I don't know which day it was either, but yeah. I remember that, because I was like "Oh, this solves one of my problems I have in life", and I was very excited. As was the rest of us, right? I mean, Vagrant was a huge hit right away.

**Mitchell Hashimoto:** Thank you. Thank you so much.

**Jerod Santo:** But nowadays Ghostty - is that how you say it? Ghostty? Or is it GhosTTY?

**Mitchell Hashimoto:** No, I say Ghostty.

**Jerod Santo:** Okay. That's the first controversy I had in my head, because I was calling it GhosTTY, and then I was like "I bet people just say this Ghostty. What do you think, Adam?

**Adam Stacoviak:** Yeah, I would say Ghostty, but I can see why you would say GhosTTY. But that would just -- it's like HTTP. Like, why complicate things?

**Mitchell Hashimoto:** \[laughs\]

**Adam Stacoviak:** Well, I have trouble, because I speak faster... I have to slow down to say HTTP. I have to be very intentional to get it right. Otherwise it's not good. So why would I say Ghost TTY?

**Jerod Santo:** For the uninitiated, Ghostty is Mitchell's new project. It is a terminal. Or a terminal emulator... I don't know what the technical term is. Mitchell, I'm sure you know every little detail. Terminal emulator, terminal... What is it?

**Mitchell Hashimoto:** If you want to be pedantic, terminal emulator. But you really don't have to be. I think to most people terminal would make the most sense.

**Jerod Santo:** Yeah. Why a terminal, man? Reinventing the wheel, so to speak.

**Mitchell Hashimoto:** That's usually the first thing to ask, yeah. I mean, I think the important thing to know is I didn't set out -- a couple of things, I guess. I didn't set out knowing I wanted to work on a terminal emulator. And second, even when I decided, "Hey, I want to work on this", I didn't think anyone would actually care. But the Why really goes back to I wanted to, post HashiCorp, sort of get back into different categories of programming that I hadn't had the time to work in, and felt a little rusty... No pun intended. And for me, that meant non-infrastructure, non-server side, desktop side, software, using a GPU, something I never used while we were at HashiCorp; at least not too much. Graphics programming... You know, just everything -- the polar opposite of what you could think of what I've been doing. I wanted to get back and play around with it. And I poked around at a few things, but felt that a terminal emulator was a good combination of those things I wanted to play around with. And as I sort of spent more time doing that, recognized "Hey, I think terminal emulators can actually be a lot better, and I think there's an opportunity here to do something that people really love", and that turned into a much more serious thing, I guess.

**Adam Stacoviak:** Yeah. The terminal's been played with a little bit recently. We've got Warp, I believe there's Wave... Those are like the two most recent attempts at a terminal of the future, so to speak. You've obviously got terminal.app, which - I watched briefly some of your talk and you scoffed at the speed of Terminal, Mitchell.

**Mitchell Hashimoto:** It's not even speed. I'm not a big fan of the built-in one... But yeah.

**Adam Stacoviak:** Gotcha.

**Mitchell Hashimoto:** You know, I think that one thing I've always said about terminals is that I think if you compare them conceptually to a web browser, then it starts to make a lot more sense about why I care about terminals. And what I mean by that is the web browser has, for better or worse, just - I don't think it's controversial to say that it's won sort of the graphical interface ecosystem of the world. Like, if someone's building a graphical interface today, 9 out of 10 times, probably more than 9 out of 10 times, they're using a web technology, whether it's actually in the browser, or Electron, or whatever it is. And I think there's still a good place for text-based interfaces, and the terminal has always been the place for text-based interfaces.

\[08:21\] And sometimes the terminal lives in a browser - you know, if you're using like a web-based text editor, and stuff. But I think that if you look at web browsers, they get hundreds - maybe like a couple hundred if you're being conservative - new features and innovations every year. And if you look at a terminal, they get - I don't know, you can't probably count on a couple of hands how many they get per year... And I just don't think it's a very exciting, innovative platform for developers. And I just sort of am wondering, what happens if you do make it exciting? Or does it become exciting? I don't know. And to me the worst case, if it doesn't become exciting, is - we still use terminals every day. So at the very least, I think you've built a better terminal. So yeah.

**Jerod Santo:** Well, two tools that I use every day as a working developer is a browser and a terminal.

**Mitchell Hashimoto:** Right.

**Jerod Santo:** And all of us on this call have been around the block a couple of times... I mean, many people listening weren't there in 2010, when you first released Vagrant on Hacker News... And yet, the terminal is still adopted newly, to this day, by new technologists all around the world. And so it's not going anywhere, but I also have just been kind of happy with the way it works. I mean, I'm kind of set in my ways... So I wasn't looking for Ghostty necessarily, but having tried it out, it sure is a nice terminal, and you're just getting to 1.0. I know you've been working on it for a while... Where did you start, and how did you set out? I mean, you have to kind of stake your claim. Like, this terminal is going to be different than terminal.app, for instance, in these ways.

**Mitchell Hashimoto:** Yeah.

**Jerod Santo:** What were your initial goals?

**Mitchell Hashimoto:** Yeah, so what I like to say, especially for the 1.0 release, what I'm trying to do is build a terminal that is the best what I call existing terminal. I'm not trying to innovate too much on what a terminal can do. I'm just trying to make what terminals historically have done a very, very good experience. And the way I'm sort of carving out what makes Ghostty different for now, and what if any of these are important to you I think you would find a lot of joy in using Ghostty, is I'm trying to build something that's fast, and cross-platform, and native. And the ands in there are important, because there's a lot of terminals out there that are "fast, or." Or "native, or". Or "cross-platform, or." But I felt that I couldn't find one that anded all three of those properties. And Ghostty does that, in my opinion. I mean, that's what I set out to do. So it's fast, and when I say fast, I'm not trying to say it's THE fastest; depending on the benchmark, sometimes it's the fastest, sometimes it's number two... But importantly, it's very, very close to the fastest, and I don't think you could ever argue it's not fast to say, to say that.

Cross-platform, it works -- for the launch it'll work on Mac and Linux, and native on Mac. It's a native Mac application using Swift UI. The UI is written in Swift. On Linux -- there's no real definition of native, but it's a GTK-based application, and it'll feel... The way I describe it on Linux is if you use Alacrity, or Kitty, or WezTerm or something, you'll immediately notice the difference between that and Ghostty in terms of how it integrates with your desktop environment.

**Jerod Santo:** How do terminal folks define fast? Is it input lag? Is it --

**Mitchell Hashimoto:** \[11:39\] That's a great question, because actually when people say this terminal or that terminal is fast or slow, it actually really frustrates me, because it's so complicated how you define that. Because fast doesn't mean anything if you just say fast, unless you're saying in every category possible, which no terminal is. And so yeah, there's a few ways people tend to define fast... One of the ways is simply how fast it could read files, how fast text can go through your terminal. Some people say that's a useless metric... I think it's super-important, because tailing logs or accidentally catting a file is stuff we do all the time.

**Jerod Santo:** Oh, yeah.

**Mitchell Hashimoto:** And another one is something we call input latency. Basically, when you press a letter on your keyboard, how long it takes for the photons to appear on the screen. Another one is sort of rendering speed. What frame rate can you maintain while you're, say, scrolling through a Vim file or something... And that's slightly different from the speed it can read. And there's a couple more, but there's so many different dimensions here to speed, and we've tried to really be, like I said, not the necessarily THE best, but in the inarguable class of the best for every one of these categories.

**Adam Stacoviak:** What is it that you do to make it fast? Where does that begin? When you consider speed and the different paradigms you can consider, what are the permutations of that? Yeah, again, because there's so many dimensions to speed, there's also dimensions to how you do it... And one of the ways is being a native application, taking advantage of things that are hard to take advantage if you're not. For example, we spent a lot of time coming down to really the instruction level architecture of the program, and if you're on a Mac computer, a new Apple Silicon Mac computer, we take advantage of literal ARM instructions that aren't available elsewhere to make things faster. Likewise on Intel. I'm talking mostly about SIMD work to make read speeds and parsing speeds very fast... But from the rendering side, we use Metal directly on macOS, we use OpenGL on Linux. The Metal part is really important on macOS because there's very, very few terminals that use Metal. iTerm supports Metal, but disables it if you use ligatures, for example.

I think that -- it's either number one or number two. I think Ghostty is the only terminal that has a pure Metal renderer that also supports ligatures... And that's just important, because by using OpenGL on Metal there is an overhead, because Apple does not natively support OpenGL, so what it's doing is translating that to Metal. So there is an overhead, and you can actually notice that if you do render speeds between Alacrity and Ghostty, you get about a 10% frame rate difference on the same workload with Ghostty, under basic load, not even heavy load. And so those are just a couple examples of the things that we're looking into.

**Adam Stacoviak:** I love this idea of the terminal as a browser. We kind of touched on this a bit with like TUIs before, and the text-based interfaces, and just the ease of that. So obviously, version one is really getting the terminal as it is, that Ghostty out there, that version one is out there.

**Jerod Santo:** Drop-in replacement, right?

**Adam Stacoviak:** Right.

**Mitchell Hashimoto:** I do want to put an asterisk on that, though. It's the terminal as it is, but supporting all of the most modern features that have been created previously. And I think that -- my bias, but Ghostty is the most feature-rich in terms of terminal specifications, in terms of kitty image protocol, kitty-defined, and some other things that are all over. And we could talk about that later, but even though it's the best existing, I think we bring together all of the most modern things as well.

**Adam Stacoviak:** What I was trying to drive towards was this idea of the terminal as a platform. It's been there, it's been a tool. As Jerod said, it's a daily driver for me, for him, for many of the developers out there. But it's not always the platform for which you do things. Like, Vim is a thing, obviously, you've got many of the tools you use on the daily... But I'm thinking HTOP, stuff like that.

In terms of this platform, this TUI platform, are you thinking beyond version one is maybe more native ways to do TUIs kind of thing? What are your thoughts on beyond this realm?

**Mitchell Hashimoto:** \[16:03\] Yeah, that's exactly right. That's the way I would look at it. The question I've asked people is when they're not using a terminal for something, especially if it's very terminal-esque... So for example, the people I like talking to the most right now are people that use something like MacVim or NeoVim in a separate, native application, or something like that. I usually ask them "Why aren't you using Vim in a terminal? They're so close, so why aren't you doing that?" And even going further than -- I will ask people that simply use VS Code or a total non-editor; I mean, anything... "What draws you to using a graphical interface over a terminal one?" and right now that answer is really easy, in a lot of cases. There's really obvious reasons why the terminal version is inferior, and my goal is to look into how to improve that.

Concretely, for example, one of the things that people brought up with Vim is that in the terminal version you can't drag and drop things like images, or even things like files, to a certain extent. You can't just drag a file into Vim and have it open a new tab. Going a little bit further, if you right-click in Vim in the native app, you'll get a native context menu, and if you right-click in the terminal, you get this kind of funky block character drawn one, and that doesn't feel great. In the native Vim you could have native tabs. And so one of the things I'm actually looking into is how can you get a terminal program to be able to use native tab widgets, even though it's driven by one program, but it's showing up as multiple distinct tabs that you could pull out in separate windows, and stuff like that.

And one of the more extreme ideas I have, that a community member brought up is what if you actually also had a browser? Which seems weird, because I'm painting them as a dichotomy, but I don't think they're necessarily a dichotomy. The argument was if you're browsing documentation, which is often in HTML, right now you have to do a link that opens in a browser. In the same way that you could just draw text in a browser, what if you could just embed a browser widget into part of your terminal UI, so that the documentation part happens to just be normal browser technology. So you could like live in this sort of platform for reasonable overlap. I'm not trying to replace the browser, but just for a reasonable amount. If you're opening a PDF, why does the PDF have to open in a separate thing? It opens directly in the browser. Why can't a PDF open directly in a terminal? Stuff like that.

**Jerod Santo:** I think anytime you eject to do something is at least worth asking the question, "Why does that have to happen?"

**Mitchell Hashimoto:** Exactly. And I don't think every answer is "We have to make that work in a terminal.' I think the knowledge of knowing why and being critical about if you can maybe extend the point at which you have to eject is a useful thought exercise.

**Jerod Santo:** So Ghostty passed my sniff test immediately, because there was two things I wanted. And the first one was TMUX. So I was like "Okay, can I drive this daily?" And I've only been on it a couple of days, so there's probably warts and road bumps that I haven't quite hit yet, and I'll let you know next week... But so far it's like "Can it run TMUX?" "Yes." Okay. "Do I have to sign in to use it?" "No." "Okay... I'm good to go." \[laughter\]

But TMUX is a weird thing, because -- I've been using it for years, but really it's kind of a hack, a terminal multiplexer... Like, you'd think extending and making the terminal better - shouldn't that kind of functionality be part of terminals? I don't know. Your thoughts on that?

**Mitchell Hashimoto:** I think so. So there are terminal people out there that I don't need to shame, but they are sort of militant about disliking multiplexers. I'm not that person. If you want to use a terminal multiplexer in Ghostty, I want to make it work. However, I do think that terminal multiplexers make the terminal experience worse. But there's no better option right now, so it makes sense that you're using them.

\[19:58\] So the reason I think a lot of people don't think about this is a terminal multiplexer is itself a full-fledged terminal, where its UI is just text that's going to another graphical terminal. Like, you're running multiple levels of terminals. And one of the first places that causes issues is there's features that Ghostty supports, that because something like TMUX doesn't support, you no longer get.

**Jerod Santo:** You lose it.

**Mitchell Hashimoto:** Yeah. And a great example is the graphics protocols. We support graphics protocols, TMUX doesn't. You just lost that, because the terminal within the terminal has to understand first. And since it doesn't understand, it throws it away. And so if we could get rid of that, then yeah.

And one of the things I am thinking is the ability -- my dream is with things like Tailscale out there, and making it so easy to do private networking, I want to be able to run basically like a Ghostty host instance on my home computer, run it against your Tailscale network, and then anywhere you go, reopen, reconnect, and it's your same sessions. Like TMUX, but instead of just the text, it's actually like all your old windows and splits natively, perfect, the same size pop back up...

**Adam Stacoviak:** Get out of here...

**Mitchell Hashimoto:** And you could close all of them and it's all good, because it's all remote. And you own all your data, it's just running on your own machine; it's Tailscale. All that stuff like that is something I'm actively trying to do right now.

**Jerod Santo:** And TMUX would just be dead to me. It would just be dead to me, you know? "Get out of here, TMUX."

**Mitchell Hashimoto:** Yeah. I think the people behind Tmux and Zellij and stuff are great, but I think that philosophically I would love to see them disappear. Not the people --

**Jerod Santo:** Not the reality, but philosophically.

**Mitchell Hashimoto:** Not the people, but the software.

**Adam Stacoviak:** "Rendered obsolete" might be the better phrase. Rendered obsolete. I agree with that sentiment, because I think - and I haven't had this conversation with them, but to their credit, they probably are operating in a world they have to operate in. You've chosen to go a different route, which is to innovate on the thing itself, to make it a platform, versus obfuscate it into something by brute force, basically.

**Mitchell Hashimoto:** Yeah. And if I could get a little bit more nitty gritty, one of the things that -- I think Ghostty, obviously the way I've talked about it, the way we focused on it has been the application... But I think long-term what Ghostty actually becomes is what I call LibGhostty, which - I'm really trying to build this cross-platform artifact, this library that you could build terminal emulator applications on top of. So you don't have to reinvent the core of understanding all of the terminal stuff. You could just focus on sort of the UI part. And that's not theoretical, that's how both Ghostty apps work. They have a platform-specific UI that shares a common core, and that common core is actually a C library. I'm not ready to ship that as like a 1.0 yet, the actual core C library, but because the UI is pluggable, the community - we've already talked about, there should be a multiplexer like TMUX where the core is just libGhostty, and you just focus then on the stuff above it. And if you start doing that, we could do some sneaky things too where if LibGhostty detects that it's running within Ghostty, it could just stop. It could just pass through and you no longer pay for that anymore. But then the benefit of LibGhostty existing for other terminals is you could get all the modern features that Ghostty has, without every developer having to reinvent that.

So I guess the point being is I'm trying to come at this multiplexer problem from different angles, because I think it would take time for them to truly be obsolete.

**Jerod Santo:** You keep saying cross-platform... How important is Windows in a cross-platform world, or in your world?

**Mitchell Hashimoto:** In my personal world it's not super-important, but in the world of software it's hugely important. And I could go back to Vagrant for this one... I mean, when I really focused in, I actually -- one thing I did probably the year after we talked back in 2013 is I bought a Windows PC, a ThinkPad, and I used Windows full-time for a year... And that was because I really wanted to empathize with what the problems were with Vagrant on Windows. I didn't want to just get it working in a couple hours, one evening, and go away. I really wanted to live in that ecosystem and understand.

\[24:08\] And Windows got a lot better. I made installers, things like that... And the end result was that the Vagrant growth was absurdly huge, because the Windows software development ecosystem is extremely large, and they have a lot of paper cuts that they're dealing with. And so I think the same thing with terminals. I think that it's really important. It's hard enough for sort of me as an individual to do Linux and Mac sort of as a side project. Windows didn't make it for 1.0, but it's something I really want to do for future releases.

**Jerod Santo:** I ask that because invariably, somebody out there is thinking "He keeps saying cross-platform, but us Windows folks don't get any love." And so...

**Adam Stacoviak:** Yet.

**Mitchell Hashimoto:** Yet, yet, yet.

**Jerod Santo:** ...happy to hear that there's is importance there.

**Mitchell Hashimoto:** Yeah, yeah. And some people have got it working through WSL... And you can run Ghostty on windows through that. I just say it doesn't work, because to me, the Ghostty experience means that you're getting a truly native build, and we don't have that for windows yet.

**Jerod Santo:** It seems to me like building something to work well on a platform that you don't personally use is like jobby job kind of stuff. Like, Ghostty is a passion project, something that you want to have fun doing... I think we'll get into some of the technical philanthropy conversation later on in the show. I'd like to at least hear your thoughts on that more.

**Mitchell Hashimoto:** For sure.

**Jerod Santo:** But I guess what's your ambitions with Ghostty? Because you don't need to turn this into a business, or anything. So do you want to be building in windows support when you don't have to?

**Mitchell Hashimoto:** So yeah, I think the important part of the ambition point is that it's not financial. The ambition behind Ghostty is really terminals are a really fundamental part of a software developer's life. No matter what sort of ecosystem you're in, whether it's web technologies, desktop etc. Whether you're a student, or a professional... Basically, all these dimensions, terminals are very important, and I don't see that going away.

I don't feel like people have focused very hard on terminals, and - can I sort of be that person for a while, as the steward for a while, improve the ecosystem in some way, and sort of build a community that could then sort of carry that on later? But yeah, the real -- I guess, to put it into one word, the real goal with Ghostty is impact. And to that end, I think that windows support's important. But more importantly, that's why LibGhostty is more important to me, because I don't want Ghostty to be the one and only terminal emulator application. I don't want to build an iOS application, an Android application, or whatever future platforms exist. I want to enable others to do that, without having to reinvent the core.

And so LibGhostty to me is like the actual impactful thing that's going to happen over the long term. And we could get into licensing later, but that's sort of part of the reason why we ended up on the MIT license as well, is I really just wanted -- whether you're going to be commercial or open source or whatever you wanted to do with LibGhostty, I really just wanted to enable that impact no matter what.

**Jerod Santo:** I'm just reminded of Daniel Stenberg with curl. LibCurl is the reason why curl - not to curl the command line, but curl the thing - is everywhere. It's because of LibCurl more than it is because of the binary curl, although they're both used a lot. But, I mean, huge impact with LibCurl.

**Mitchell Hashimoto:** Yeah, it's a great example.

**Adam Stacoviak:** I'm glad it doesn't have to be a business. I was worried. I was like "What is the -- do you want to build another HashiCorp here?" But probably not with this... And to zoom out a little bit, I think it's kind of cool of you, I suppose, to -- some would say "Well, you don't have to do anything, Mitchell. You could just go and fly, as you do." You don't have to satiate any of these technical chops you have, or you want to play around in areas you've never had a chance to play around in... You could just simply just go and do something else. But instead, you're steeping yourself in an area where you really haven't had a chance to do so... And it will be impactful.

\[28:09\] I think the Wikipedia of the future for you will be so cool, because you could have had "Just walk away, do your thing." Family, whatever. And congratulations on the recent addition to your family, of course, but...

**Mitchell Hashimoto:** Thanks.

**Adam Stacoviak:** ...you don't have to do this. You want to do this. And to me, that's cool.

**Mitchell Hashimoto:** Thanks. Yeah. Whatever people write on Wikipedia, if there's anything, then fine. But I think part of the way I've described Ghostty is this idea of technical philanthropy. And one of the things I know about myself is -- I just love programming, and I love building, and I knew that wasn't going to stop no matter how much career success I had, or things like that. And so my thinking was "If I'm going to spend time on the computer programming anyway, is there a way to make that time meaningful?" And I'm sure there's more directly meaningful ways that I could spend that time, but I felt that doing this broadly-used category of software for free, and trying to make it good, I guess - for a blunt term, just good - could be meaningful. So yeah, it's definitely a part-time thing. I don't spend 40 hours a week. I spend barely maybe 10 or 15 on this. And it's just the way I could have fun and pursue my passion, but still feel like I'm helping something.

**Break**: \[29:35\]

**Adam Stacoviak:** Who's the 'we' behind Ghostty? I know that you are the obviously the inceptor of it, but who else? There's a community, how have you leveled up, who's involved...? Roles, responsibilities? I have to say, I didn't get, or somehow missed the email that you invited me personally - and Jerod, I'm sure too - into this beta... I went into the Discord like any other community member...

**Jerod Santo:** Oh, you did.

**Adam Stacoviak:** I did.

**Jerod Santo:** I got you in there, dude. I gave him your handle.

**Adam Stacoviak:** Well, I had to prove to Tragic that I was me, and that I wasn't just somebody saying "Hey, I'm going to podcast with Mitchell in like 30 minutes. Can you please give me the...?" It was like "Gosh, I haven't installed this thing yet. I should play with it." And I was like "I've just got to get that invite somehow..." Because my GitHub is connected to my personal email, not Changelog's email, for some reason, and I don't check that as frequently as I do business stuff. I really should change that. But anyways...

**Jerod Santo:** So there is a Discord, there's people in there that aren't Mitchell, that are doing things.

**Mitchell Hashimoto:** Yeah, the Discord is -- I don't know what it is now, but it's somewhere between 20,000 and 30,000 people. And that's way too many people, and so there's been a good volunteer community of moderators that work really hard, because it's also somewhat of a chaotic experience having 30,000 people in one text channel... And so they work really hard and do a great job... And not just contribute on that; a couple of moderators maintain the Discord bot that is used for a variety of things... In addition to that, there's been a couple hundred code contributors to Ghostty already. And the thing that stood out to me the most about that was I went back and listened to our 2012 Vagrant Changelog episode a week ago...

**Jerod Santo:** Oh, wow.

**Mitchell Hashimoto:** ...since I was like "I wonder what I was doing back then." And that really threw me back... And the first thing I noticed was we were talking about how Vagrant passed some number of stars, but I remember it had just passed something like 100 contributors. And it was already two years old, and pretty popular by the time we were talking... And we were talking about how I was so amazed by that, and I was thinking "Wow, the software developer ecosystem has gotten so much bigger." Obviously, due to some of my background, it attracts more people... But Ghostty in private beta has more stars and almost double the contributors that Vagrant had after two years being a public project. And so that was kind of like a mind-blowing thing, but yeah -- the 'we' is really the community... In terms of people that are working, I guess, even multiple hours a week on this, it's probably just me.

**Adam Stacoviak:** Just to close the loop, I have to share the levels of which I had to ensure Tragic that I was me.

**Jerod Santo:** \[laughs\] A driver's license?

**Adam Stacoviak:** This is a DM in Discord. "Hey--"

**Mitchell Hashimoto:** There's a funny detail to that, I think... Is that I thought for sure when I started working on a terminal more seriously that very few people, first of all, would care. But of those very few that cared, I thought that demographically, it would skew to a more mature audience. But what I've discovered is that a lot more people care about the terminal than I expect, and predominantly of those people, it is young people. And when I say young people, I literally mean teenagers in school, a lot of teenagers in school, up to early 20s, early career type people. And because of that, there's some shenanigans, I will say, within the Discord.

**Adam Stacoviak:** \[36:15\] Okay...

**Jerod Santo:** \[laughs\] Love it.

**Mitchell Hashimoto:** And so the moderators are very sensitive; there's been a lot of scams, a lot of phishing, a lot of stuff...

**Jerod Santo:** Oh, my goodness.

**Adam Stacoviak:** Dang.

**Mitchell Hashimoto:** ...people just trying to get into the beta... And it's not that important, but I think when you're younger, you're a little more zealous about these things.

**Jerod Santo:** Oh, yeah.

**Mitchell Hashimoto:** And so the moderators, I think, are very hardened to when someone comes and says "Oh, I know Mitchell. I need the beta", that they're very suspicious. So yeah.

**Adam Stacoviak:** Yeah, I was like "I'm about to pod with Mitchell. Can somebody help me get in the beta, please?" And so I ended up in DM with Tragic, and he says "Hey, can I get some kind of confirmation here that you're not impersonating anyone? It felt random if you're actually about to talk to Mitchell, lol." And so I was like "Okay..." I opened up the calendar app and screenshotted the calendar invite on my calendar that says we're about to talk.

**Jerod Santo:** There you go.

**Adam Stacoviak:** And he's like "Hm... Not good enough." \[laughter\]

**Jerod Santo:** Really?

**Adam Stacoviak:** Basically. I mean, he did the thinking emoji...

**Jerod Santo:** Oh, hilarious.

**Adam Stacoviak:** He's like "Just to be 100% sure, can you follow me on GitHub for like 20 seconds, and then unfollow me? Sorry for being excessive." And so I followed Tragic for -- and I'm still following him. I'll just go ahead and leave it. No big deal.

**Mitchell Hashimoto:** That's great.

**Jerod Santo:** That's hilarious.

**Adam Stacoviak:** So I had to go through a couple of hoops...

**Jerod Santo:** It's a real insider's club.

**Mitchell Hashimoto:** The hoops will all disappear soon.

**Adam Stacoviak:** Well, once I got into GitHub, it said you had the invite there. So once I was actually there, I was like "Hey, by the way, GitHub is telling me this... Mitchell invited you last week. You're an idiot. You didn't have to do all this." So there you go.

**Jerod Santo:** \[laughs\]

**Mitchell Hashimoto:** I'm surprised you didn't get banned, honestly... Usually, those types of things pop up, and they're sort of like -- because there's 10 moderators... Or less. I think there's seven moderators, and 25,000 people. Most of the time when stuff like that starts happening, moderators are just like "I don't have time for this" and they just ban you from the server.

**Adam Stacoviak:** Well, he didn't. They were very nice. Tragic was nice. And that's the loop close. But the question to get to this point was really "Who's behind Ghostty?" I mean, obviously, you started it. What's the plan for community? Do you have a governance model? How sophisticated and planned out have you gone with Ghostty?

**Mitchell Hashimoto:** Not as much as I would like due to time constraints, but it's something I'll keep thinking about. So for the 1.0 public launch, it'll just really be me and my side project. It's really my project type thing. A lot of community in terms of contributions, Discord moderators - I love all those people. But I think that longer term, I am interested in some sort of governance model, because I don't think I'm going to be working on a terminal the rest of my life. And I do want this to be impactful. So that's something I've definitely thought about...

The beta testers have been involved in this discussion we've had for almost a year, basically, on project sustainability... Because even though it's not something I want to pursue any financial gain for, I would like it to be sustainable for others.

And so we've talked about "Can we set up, whether it's -- is it sponsorships? Is it this? Is it that?" In order to -- I don't want any of that, but in order to pay the infrastructure costs, and also potentially in the future pay contributors as well. And so that's something that we're just talking about and we're not 100% sure about, but that's sort of the extent to which I've been thinking about this so far.

**Adam Stacoviak:** It makes sense. I mean -- so no BDFL. Temporarily BDFL.

**Mitchell Hashimoto:** Yeah. I mean, yeah, for now. It is definitely a BDF model for now, but -- yeah, BDFL for now.

**Adam Stacoviak:** Gotcha.

**Mitchell Hashimoto:** BDFLFN.

**Jerod Santo:** There you go. How long have you been working on it?

**Mitchell Hashimoto:** So the first commit was actually March or April 2022, but it's very deceiving, because I was still full-time working for HashiCorp, and you could just tell through the commit history I worked on it here and there. There was like a three-month period where I didn't do a single thing... It was very, very on and off, because it was really just me playing around with technologies.

I think I got a little bit more serious probably a little over a year ago... Yeah.

**Jerod Santo:** \[40:06\] Did you ever consider post-Hashi, like farming, or something? This is a cliché, but... Just not doing software for a while. Trying something completely different. I mean, we know you fly planes, but that's more of a hobby, right?

**Mitchell Hashimoto:** I do fly planes. I do. Yeah. That is a hobby. But I didn't get all pessimistic, like a lot of people get. I still love technology, and I think that technology is getting better, and I think that there's a lot that could be done with it still... So I knew that I was going to stick around and do something.

The important thing I did post HashiCorp was when I really formally really left, like I wasn't getting any sort of paycheck or anything and had to get healthcare on my own and all that sort of stuff - when I really left, my daughter was about two and a half months old... And so one thing I really wanted to do was just be able to spend a ton of time with her. So for the majority of this year - and that's a big part of why I didn't publicly release Ghostty right away... For the majority of this year I've been home and only working during naps, or at night, or whatever. Every time my daughter's been awake, I've been with her. And it's only been within the past month or so where that started to change a little bit, as she -- she's about 15 months now. She has more things that she's going to and stuff, and so I've been able to carve out more like dedicated - even though she's awake - working hours.

And so I think I did spend that time, but on the other side, I'm not someone that can't work. I love working, and my family knows I love working... And so finding that time, showing, being able to, as my daughter gets older, to see her dad working... That's important to me. And so that's all part of it.

**Adam Stacoviak:** "What are you doing, dad?" "Just writing some software over here." \[laughter\]

**Mitchell Hashimoto:** She's got a -- I know there's no video element to this, but I have all these stickers, Ghostty stickers... They're not finalized yet, but I just have so many of these things. And she's at the age where she loves stickers, so... I'll show it for you; you can see all these stickers.

**Jerod Santo:** Nice.

**Mitchell Hashimoto:** There's about a dozen. There's so many. And she has all of them, and there's Go stickers all over our house... And my wife jokes that -- she points at it and goes "Oh, that's daddy's work." Because for now, it is daddy's work. And so yeah, that's what it is.

**Adam Stacoviak:** That's cool, man. I I love that you -- I mean, to be in a position to take that time...

**Mitchell Hashimoto:** Right.

**Adam Stacoviak:** I think even if I was in your position, because my brain can't let something go -- like, even if I don't need to financially gain from it, my brain won't let go of the problem set, you know? So I would find that kind of challenging, not so much to not give my necessary time to my child that's newly born, but more so my brain. The separation of -- you can't help that. You can't help how your brain works, if you can't let a problem go necessarily... That would be my fear for me if I was in your position, to be like "You know what? I can't stop my brain from thinking about a problem set."

**Mitchell Hashimoto:** Oh yeah. I mean, even when I was just doing Ghostty, literally at night after the baby slept, I was actually doing it -- I require a lot less sleep than my wife. I've always been like a six-hour-a-night kind of guy, and so I was actually -- when she was an infant and waking up in the middle of the night, I was just not going to sleep before she woke up that first time. I was like "I will just work, and then I will handle the baby, and feed her the bottle and put her back to sleep, and then I'll go to bed after that." That was sometimes midnight or something, and I would sometimes run into -- my wife, when she was awake, I'd run over to her and have my phone out, and I'd be like "Look at this, look at this." And she's like "Oh, do you have a cute video of our daughter?" And I'd show her the video and it would be like font rendering. \[laughter\] She was so disappointed.

**Jerod Santo:** \[43:52\] I think if there was a nerd snipe bingo card, like if we were playing bingo for how you would nerd snipe somebody, and you had like "Prolific open source maintainer who builds unicorn business and retires, and then comes back to reinvent a terminal, and then chooses Zig as a programming language..." Those are all things where it's like -- I know why there's 25,000 people in that Discord. You have all of the different ingredients, which is really awesome... And that's just a way of setting up a question about Zig. Why did you go that route? Because that's an interesting choice, an interesting language, and a burgeoning one.

**Mitchell Hashimoto:** Yeah. You could find a tweet I did I think end of 2021, very early 2022, where I talked about how I was interested in Zig, but I had no time to use it... And it was always in the back of my mind of this interesting programming language. And I think, as important background to me - I was a professional, paid C programmer for a year or two of my life, somewhere between a year and two years of my life. And I like low-level system stuff. I actually like C, and so I wanted to -- HashiCorp was very close to getting all its software written in C, by the way. It was very close. It was between C and Go, and Go won, but it was very close to C. And I wanted to get back to systems programming, but I recognized the warts that C had, and I was looking for a better C... And Zig to me always felt like that. And years into using Zig, I feel the exact same way. I feel better about it. It brings me joy every day to write Zig... And so that's really it.

Later on I learned about the community. I like the community. The founder of the Zig programming language, Andrew, really -- we've now hung out in person multiple times; really awesome, kind person... And his technical points of view are fantastic. And so everything sort of came together where I'm just having a lot of fun. And that's sort of how it goes.

**Jerod Santo:** Did you try Go? Did you try Rust? Did you go straight to Zig, or did you start writing it in C at first, and then switch to Zig? How did it play out?

**Mitchell Hashimoto:** I knew Go wouldn't be a choice, because I knew I wanted to do something that really I owned every single allocation and every single instruction that would ever be run. And having an active runtime that was running and a garbage collector was never going to be an option. The real plausible option there was Rust. And I didn't try it with the terminal, because by then I had already had enough experience with Rust that I knew I didn't want to write rust every day.

The way I'd describe it philosophically, and as a technical achievement, I have absolutely nothing but respect, and I'm impressed by Rust. I think it's very impressive. But as a personal basis, it's very superficial. When I write and read Rust, I'm not having fun. And I want to have fun, and part of the joy is writing the code... And it's very much a stylistic choice.

I hate to put it in that perspective, because I think engineers want some sort of concrete, objective reason of why one versus another is better... It's really a vanilla versus strawberry ice cream flavor sort of thing for me. They're both great, they both are edible... But I choose one over the other. That's really what it came down to for me.

**Jerod Santo:** Has any of your work affected Zig, like upstream, as \[unintelligible 00:47:19.04\] fixed bugs, new features requests? I know you've done some donations to the foundation, so you're helping out in that way... But is there a symbiosis here?

**Mitchell Hashimoto:** I think so. I think so. And I think Andrew and people on the project would say the same thing. I mean, very directly, before the project I literally contributed to the compiler. So there's that very direct, personal relationship. But with the project -- I mean, Zig's such a new, burgeoning language that there aren't very many real world users. And I think having this real-world use case exposed a lot of - not just bugs, but ergonomic improvements and issues.

\[48:01\] A couple of very big things that popped up really immediately was the need for package management, which is now sort of solved and within Zig. And beyond that, the need to enable system packagers, which are separate. One of the things I'm doing with Ghostty is I'm not doing any of the packaging. I'm going to release the source... I'm going to do the Mac app, because that's kind of -- you need to kind of pay, and sign in, blah, blah, blah. But all the Linux stuff, if you want to Ubuntu app package or RPM or Nix package - I'm not doing any of that. And that's pretty classic. Open source packagers are other people. But Zig is such a new thing that I knew that would be challenging for those people. And so Andrew did a really good job of listening to my feedback about other real world projects, and building in this system packaging mode and guidelines into Zig, where I feel pretty good about when we go public that we're going to be in a place where hopefully Ghostty pops into Debian repos and stuff pretty quickly. But that's, I think, a good example of how things go.

And then just compiler stability. I mean, the Zig compiler moves super-fast, and I'll regularly just say Ghostty doesn't compile anymore, not because you made a breaking change, but because something's actually broken. And I believe they use Ghostty here and there as sort of a canary of whether the compiler is stable. Like, "Can Ghostty build and run?" If Ghostty can build and run, it's a pretty good sort of like big integration test for the whole compiler.

**Jerod Santo:** Have there been any features that you've built, or parts of Ghostty, whether it's because of Zig or because of some other reason, where it's like "This should be straightforward", and then it was just a minefield of trouble? Or any particularly hairy technical problems you've had to solve?

**Mitchell Hashimoto:** I have to laugh at that, because the joke I always make about my work on Ghostty is that what I really ended up building -- 70% of my time I'm just building font rendering, and the other 30% of my time is the terminal emulator. So I think that the really big, hairy thing is really font rendering. It is a minefield. And when I say font rendering, I don't mean just reading a font file and drawing a glyph. I mean everything from Unicode handling, emoji, skin tone emoji, East Asian languages, and then drawing them as well. I mean, that whole path is a crazy mess.

And even just today, just total coincidence today, I tweeted about a bug I found with skin tone emoji. And that's just a coincidence. But my life has been dominated by font rendering. But luckily, I've found a lot of joy when I get it fixed, but I've been shocked by how much time I spend thinking about it.

**Jerod Santo:** And it's not in the past. You're still working on it, right? ...because you've just found a bug today.

**Mitchell Hashimoto:** I thought it was in the past. I always think it's in the past, and here we are.

**Jerod Santo:** Right. You think it's done, and then there's another bug.

**Mitchell Hashimoto:** But today it's done today. We're good. Now it's in the past.

**Jerod Santo:** For today at least, yeah. What in particular is so stinking hairy about it? Because different environments render out differently, or what makes it so fraught?

**Mitchell Hashimoto:** There's a lot of layers, and it is to some artistic, the way fonts look, and stuff. And there's not a pixel-perfect specification that says that given this font and these characters, whatever, this is how it looks. It really is mathematical, with a lot of wiggle room in terms of how much anti-aliasing you use, the spacing, where it floats on the line... There's a lot of wiggle room.

And so I think, in addition to sort of the core technical challenges of so many different phases of fonts, there's also like people that just come up and say "It doesn't look good. Nothing's wrong, it's just I don't like the way it looks." And then you kind of have to dig into why that is, and Ghostty provides a ton of knobs for those people to get fonts looking the way you want. And then our gold standard has basically been we want our fonts to look like Mac default. So like text edit, honestly, is our gold standard. The way text looks in text edit is the way it's going to look in Ghostty by default.

\[52:09\] So yeah, that's been that... But I think also just finding all the layers I never thought about. I think the first one that shocked me, that I had never considered as an engineer, was "How do you pick a default font?" You have a monospace application; in a web browser, you say "Font family monospace", and the web browser picks it for you.

**Jerod Santo:** Right. It's like a fallback.

**Mitchell Hashimoto:** Yeah. That doesn't exist at the OS level.

**Jerod Santo:** It doesn't?

**Mitchell Hashimoto:** No. You have a list of fonts, they have different properties... Some are monospace - and not that's an easy one to just break down, but within the monospace now you have a bunch of different ones, and how do you choose which one you want to use? And it has to be deterministic, because if they launch their terminal every time and you choose a different monospace font, it's going to be a problem. And so yeah, it doesn't exist.

And so that was the first thing where I was like "Why am I thinking about this?" Because yeah, it feels like something the OS should do for me. And so that was sort of the first challenge.

**Jerod Santo:** What does Terminal.app do?

**Mitchell Hashimoto:** I don't know how they do it, but they tend to use -- I think they probably hardcode it.

**Adam Stacoviak:** Menlo.

**Mitchell Hashimoto:** Menlo, yeah.

**Jerod Santo:** Is it Menlo?

**Mitchell Hashimoto:** Yeah. I think they just use the Apple usual one. So Apple's kind of easy, because Apple does --

**Adam Stacoviak:** Yeah, they solve some of that problem. They have those -- even in the web, they have some specific OS sans and monoface...

**Mitchell Hashimoto:** Yeah. And you could always -- Apple's easy because there's so much homogeneity across the platforms that you could kind of just say "I'm going to do whatever Apple does." Linux is the really hard one.

**Jerod Santo:** Okay. So what do you do?

**Mitchell Hashimoto:** Basically, I look for obviously a monospace font. That's an easy one. And then I look for one that has ASCII characters. And then I look for one that has more ASCII characters than anyone else. I sort of just apply the scoring algorithm to it. If it has emoji within it, it's even better, because it's likely the font designer made them work together... So I tend to score things with more glyphs in it higher, if it has more faces. So if it has italic and bold as well, then it gets scored higher than something that only has a regular... So yeah, you just apply all the scoring to it and hope for the best. And so far, the beta community has felt pretty good about it.

**Jerod Santo:** Did you consider just getting opinionated and just packaging your favorite one and saying like "This is Ghostty's default"?

**Mitchell Hashimoto:** I do.

**Jerod Santo:** You do as well. Okay.

**Mitchell Hashimoto:** I do as well. So if I don't find basically a font that I'm satisfied with, then we fall back to using the packaged font, which is JetBrains Mono, with nerd fonts already applied.

**Jerod Santo:** Great choice.

**Mitchell Hashimoto:** Thank you. All of the defaults of Ghostty, for the most part, are the ones that I would use. And so - yeah. But yeah, so we do that as well, because there are -- in particular a really problematic area of Linux is there's a lot of installations of Linux that don't have emojis, for example, and so we we package an emoji font, so that emojis just work out of the box. Again, these are things that don't happen on closed Apple computers, but on Linux we have to think quite a lot about.

**Jerod Santo:** Right. I ran into that because we have this little Node server that basically fires up Chromium, and loads some stuff into a browser, and then screenshots it... And we want to use emoji in there, because it's promotions for our shows, and stuff. And I developed the whole thing here on my Mac and everything was great, and I deployed it to Fly, and it's just using Ubuntu, that just doesn't have emoji. And so it was like falling back to some weird Unicode thing. I have to actually install an emoji font pack in the Docker file or whatever, just to get it to actually have an emoji in that remote Chromium browser. Pain in the butt, man, Linux. Pain in the butt.

**Mitchell Hashimoto:** Yeah. And stylistically, the sort of unburdened, licensed emoji fonts, I don't personally love. I don't think they look that good.

**Jerod Santo:** Yeah, same.

**Mitchell Hashimoto:** So I wish that Apple would license their Apple emoji, so that it could be used cross-platform. But you can't. Legally, you can't. There's people online, obviously, who have pulled it out...

**Jerod Santo:** You can find them, yes.

**Mitchell Hashimoto:** Yeah, so you could find it. But as a distributor of software, I cannot.

**Adam Stacoviak:** Can't do that. No.

**Jerod Santo:** \[56:15\] Totally.

**Adam Stacoviak:** It's ui-monospace is what you do in the cascade of the CSS font stack.

**Mitchell Hashimoto:** Mm-hm. One of my favorite things I tell people when they ask more and more about fonts is the best source of figuring out how to do anything is web browsers. Independently, every person I've run into that's done a lot of text work has landed on "Oh yeah, I read Firefox and Chromium source code, and Blink", and all these different things. And that is true of Ghostty as well. Whenever anyone has been like "I want to support this feature", and I think "How do you make that work?", you find the answer because web browsers have solved it, and they're cross-platform, and things like that. Yeah.

**Adam Stacoviak:** Not bad ideas, too... To have a default string essentially you can set, that says "Give me the OS's native version of the monospace font. Give me that."

**Jerod Santo:** Right.

**Mitchell Hashimoto:** Yeah.

**Adam Stacoviak:** Nice.

**Jerod Santo:** So what I've experienced from Ghostty is a) TMux works, b) no sign-in, and c) config. So this is where most people go, right? It's like, okay, how do I configure this thing? So if 70% of your time is font rendering, my guess is like the other 30% is mostly configuration... Because holy cow, there's a whole bunch of configuration things. Everything you could possibly imagine. And there's not really -- and maybe this will change between where we are, which is private beta, in 1.0; or maybe this is 1.1. I don't know. But there's no config built into the Mac app. It just opens up TextEdit on your /ghostty/.config, or whatever it is, the file. Thoughts on that? I'm sure this is a huge part of your work, is configuration, right?

**Mitchell Hashimoto:** Yeah. I mean, depending on the audience here, I think my thoughts on configuration are going to be loved or hated. I've created a good duopoly of people that either love HCL with Terraform, or think that I've crapped on the entire industry with this thing that people have to do every day. It's one or the other. \[laughter\] And no further comment on that, but I think because of that -- there's a lot of experience I have with configuration. Vagrant was Ruby, Packer has JSON, and supported JSON, and then now it supports HCL, and then Terraform is HCL... So I've sort of done the spectrum, and so I was coming into this with some experience and opinion. And Ghostty's primary -- so its configuration file is a custom, text-based, non-programming format. There's no conditionals... It's just key equals value, straight down. People have described it as very Any-like, but there's no categories like Any. It's just key equals value.

The principal why behind that - and I suspect I'm going to have to keep defending this over and over, but the principal why behind it is that the config file and the command line arguments are equivalent. So anything, any key equals value you could set in the file, you could do dash dash key equals value on the command line, and they perfectly match. So if you know how to do the CLI, you could do the config file and vice versa, and that's a very important property I want to keep. I think it's very educational friendly to a tool.

And then the other reason is because I could parse it, validate it, and load it in a single forward pass. So this was more of a performance thing, but I don't need to maintain an abstract syntax tree like you might have to with a YAML, or something. I could have an array of bytes, conceptually, an array of bytes, read one at a time... I only have to keep a small, fixed-size back buffer, move forward, and I could parse the config. And it is definitely a detail that's probably not super-important, but because of that, Ghostty has the fastest config parser. And you have to read the config every time you start Ghostty. It's something that I didn't want to waste startup time on, and so that's a big reason why I chose that format as well.

\[01:00:07.25\] But yeah, I mean, I really haven't gotten any -- from the people who have actually used Ghostty, I haven't gotten any pushback on it. It's hard to dislike... I mean, the only thing you might want is like conditionals and things like that, and and I just think philosophically I'd tell those people "You should be using WezTerm" or something that supports Lua. I'm never going to make initializing a runtime, loading files, evaluating code, part of the startup path of my terminal emulator. Like, it's not going to happen. So yeah.

**Jerod Santo:** Does that have implications for plugins, extensions, etc? Or is there plans for that? Does that exist?

**Mitchell Hashimoto:** It has implications... I'm not sure exactly for what yet. I mean, I think the one that popped up first was people wanted a different theme for light versus dark mode. So that was sort of the first conditional thing that popped up. We solved it in a different way. You can just specify a light and dark theme as separate config options, pretty straightforward. But there's other ones, too. So I think the one that's looming right now, that actually hits me, is that I want different key bindings between macOS and Linux. I'm somebody that spends a pretty 50/50 time between macOS and Linux, and so I want the key bindings to be slightly different... Because you know, there's no command character when I use Linux. So there's workarounds for that, that really aren't very ugly.

We have the ability to load additional config files only if they exist, and not err. Basically, only log if they don't exist. And so you could actually create Mac config, Linux config, and have it not exist on that platform, and that solves that problem to some extent... But I do want to solve that in a less duct-tapey way.

So there's implications, but I think that my view generally on -- I don't want to get too abstract here, but my view generally on problems is that constraints are good. And so I think we've defined our constraints, which is that I want to forward-pass a single, parsable thing, I want it to be fast, I want it to be isomorphic with the command line interface and config file... And I think those constraints are set in stone. And if you have some fundamental constraints, then you could actually start a discussion of how you solve it. I think that generally speaking about software in the industry that I see is too many people are choosing the most generic thing without constraint as the answer. Like "I'm just going to let you write arbitrary code to do this." Or "This is the do-anything machine." I feel better about constraints... So that's just a philosophical tangent.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What about things that's as simple as -- and I'm going to compare against Warp for now, because I use Warp on the daily...

**Mitchell Hashimoto:** Cool.

**Adam Stacoviak:** ...and I did sign in. I was not happy about it.

**Mitchell Hashimoto:** You don't have to anymore.

**Adam Stacoviak:** But we joined Warp back when you had to.

**Jerod Santo:** Yeah, yeah.

**Adam Stacoviak:** It's too late. It's like the --

**Jerod Santo:** We're fans of Warp. We're not haters of Warp, by any means.

**Mitchell Hashimoto:** I am as well. I am as well.

**Jerod Santo:** That was one of our main points of advice with Warp, was don't make a sign-in -- and I guess you don't anymore.

**Adam Stacoviak:** Yeah, I didn't know that. But I'm signed in, and I'm me... One thing I do like though is that whenever I -- and I'm on a Mac... So whenever I type something out onto the terminal, and if I want to like select it to erase it, it's command+shift, and then the back arrow, like I would in a text editor.

**Mitchell Hashimoto:** Yes.

**Adam Stacoviak:** I do like those kinds of features. And then when I do that, when I compare the same experience in Ghostty, I can't do that. It starts typing like d's, and stuff like that. Like different characters. So I don't know if that's like a direct mapping or maybe it's mature yet enough, and it's on your plan, on your roadmap... But those kinds of things I think really make that first experience key, that I can just treat the command line like a text editor. That's what I hate about Terminal app and other terminals. You've got to do special things to make it like a text editor, where you can jump around the text and do different things to be speedy. And now I'm hitting Backspace, and stuff like that, and it's just not cool.

**Mitchell Hashimoto:** \[01:04:08.10\] Yeah, yeah. I think you're exactly right. I think what Warp did with that is very good. I don't even know if Warp's open source, or anything. I don't know how they did that specifically. I know I have ideas. I know how I would do it if I did it, but I don't know how they specifically did it. But that is something -- so I guess there's two answers to that. One is it is on our roadmap to a certain extent, in the sense that a Mac - I assume you're on a Mac, if you're using Warp...

**Adam Stacoviak:** Yeah.

**Mitchell Hashimoto:** Mac has a bunch of standard text. I think Apple calls them actions, and they're named things like "Select previous paragraph", "Select next paragraph." They have like names. One of the open issues on Ghostty right now is to implement those actions, and just do them in some way. So part two is in some way, the challenge is that the thing that's actually doing the text editing is the shell, and not the terminal. And this gets into a layering thing that I think an everyday person doesn't care about. And I want them to not have to care about it. I'm just talking as an --

**Adam Stacoviak:** Yeah, I don't care about it.

**Mitchell Hashimoto:** Yeah, yeah. I'm just talking as an implementer, I'm just saying why this --

**Adam Stacoviak:** I'm just being funny.

**Mitchell Hashimoto:** No, it's all good. Most people don't care about it. But for me as an implementer, it's what makes my life hard, because it's really not my problem that I could easily solve. Because what a terminal emulator does is you enter characters, we encode them as some events, and we send them to the shell. We're actually not editing that prompt. The shell is editing the prompt, and the shell is moving -- when you hit back arrow, I'm not even moving the cursor. I'm sending a back arrow to the shell, and the shell is sending a message back to me saying "Move the cursor left by one." But it could do anything it wants. In the same way that when you hit the up arrow, it's not telling me to move the cursor up, it's telling me "Paint this text", which is history, that I don't know anything about, the shell knows about. So it's hard for me to solve because we don't own that text input.

There's very hacky things that Ghostty and other terminals do. If you Shift+click somewhere into the prompt, the cursor moves there. I think it's Shift+Click or Shift+Command+Click. I don't even remember off the top of my head. When someone suggested Ghostty support that, I gave him this answer of "I can't do that." They said "Oh, other terminals support it", so I went and looked, and I was like "How do these other terminals do it?" They actually synthesize arrow keys, is how they do it. They guess. You clicked one row up and four cells to the left... I'm going to send you one up arrow and four left arrows, and hope your cursor gets there. And it leads to all sorts of weird stuff. You could do this in Ghostty, you could do it in other terminals, where if you click up too many times, history will start showing up, because it's sending up arrows and history is actually showing up instead... And that's a terrible experience.

This is a long, rambly way to say it's not my problem, but I do want to solve it. I do want to help make it easier. And this is one of the areas where I want a terminal to provide better tooling to shells, so that we could actually do this in a very user-friendly way.

**Adam Stacoviak:** It's a great reason to get Warp to be open source, because the user experience with using Warp at the terminal level from an entry level and editing level of what's going into the prompt, bar none, is solid. I like it. It's fast on that front, it's fun to use... The community suggested this as an option, as a configuration option. I could solve it by separating out where the prompt is, and where the output is. But I think that's what Warp does. Your prompt input is like a totally separate box from where the output goes. And in that way, I could just defer sending stuff to the shell. I could actually own the input fully, and only when you hit Enter or hit Tab or hit certain control characters, I could actually flush it out to the shell and be like "Okay, what's the deal?" and sync back up. I'm not trying to over-trivialize that problem, or anything. I think what Warp did is really good there. But that's how I could solve it, but it would feel distinctly different for people that actually want a prompt that starts marching down your screen.

**Adam Stacoviak:** \[01:07:56.29\] Well, here's what happened, though... When I fired up Ghostty for the first time and started playing with it, this happened, this scenario where I'm trying to manipulate the text I'm going to enter into the prompt...

**Mitchell Hashimoto:** Yeah.

**Adam Stacoviak:** And then I'm like "Okay, I know config is my next step, because I've got to make Dracula my theme." That's the first thing I did. I'm like "Okay, how do I theme this thing?" So when I vim in and I put the path into the config file, and I entered it or I edited it, and then I saved it, it yelled at me and said it couldn't make the thing. I don't know why... So I had to touch the file first and then go edit it, which is not normal for Vim, because you can usually just vim to a path and it creates itself --

**Mitchell Hashimoto:** The directory maybe didn't exist?

**Adam Stacoviak:** I think so. I have a config directory, but not a Ghostty directory. So maybe it was the Ghostty directory not living... So I had to touch it first, and then go in and edit with Vim.

**Jerod Santo:** Right. Some of that is the new macOS stuff where it needs permission for all kinds of stuff, like the first time you run it...

**Adam Stacoviak:** I don't think so.

**Jerod Santo:** Okay.

**Adam Stacoviak:** But then I tried to manipulate the text and just tried to mess with it, and then I was like "Well, now I have to add config", so I'm back in the documentation trying to think "Well, I've got to add my own key mapping so I can have this jumping around." And I imagine that somewhere in the docs I would find it, but 20 minutes later we had this phone call, so I didn't have enough --

**Jerod Santo:** You didn't get there yet.

**Adam Stacoviak:** I haven't gotten there yet to solve that problem. So here I am, ranting... I think this is kind of crucial behavior, though. It's such a simple thing, but I think everyone's going to have a version of my problem when they first fire it up. They're going to have some version of input manipulation that's -- it's very important. And it's part of your speed as a developer on the terminal, is how you can manipulate what you put in. And that takes time where I have to like rejig my brain, or add config... Which I don't mind doing, it's just a matter of not knowing what to do out the gate.

**Mitchell Hashimoto:** Yeah, I completely agree. It's actually one of the last remaining discussion points before the 1.0, is some of these defaults that we want to set in that sense. Because the trade-off between these defaults is that if we put those key bindings as defaults or those behaviors as defaults, then things like TUI programs can't map them, because you're taking over them. So we're talking about whether that's important or not, or if it's more important that by default people expect what you just did.

And I think it's also important -- when I consider that, it's where people are coming from. If you're coming from terminal.app, or iTerm, or something, then this is likely to not really be an issue, because we behave almost identical to those. But if you're coming from something like Warp, then yeah, it's going to be a big issue.
And so I'm not super-sure... That discussion actually did lead to this sort of extreme path, which we're not going to go down, because it's too complicated, of inspecting their machine to be like "Are you a Zshell user? Is Warp installed? Should we behave more like Warp on first startup? Are we going to guess, basically, based on what you have?" And I'm not ready to go down that path yet. We do that for other things, but I'm not ready to go down that path for things like input manipulation... But it's unfortunately complicated, but I agree with you.

**Adam Stacoviak:** Yeah, I'm sure you do.

**Break**: \[01:10:55.14\]

**Jerod Santo:** This goes against the UNIX philosophy, but is this an argument for integration? Owning more of the stack? Because you know, it's not your problem, but it is your problem... And of course, you don't want to pick what shell people use. But is this like "Now we need the Ghostty shell", or something? Because you can solve that problem -- you know, you could have Ghostty be more than just a TTY.

**Mitchell Hashimoto:** I fight the nerd snipe every day of my life to write a shell...

**Jerod Santo:** \[laughs\]

**Mitchell Hashimoto:** That's something I'm holding strong.

**Jerod Santo:** When are you going to give in, man? Come on, when are you going to give in?

**Mitchell Hashimoto:** I'm holding strong, because there's so many bug reports, so many that I get, that I am like "This is a shell bug, not my bug."

**Jerod Santo:** Right.

**Mitchell Hashimoto:** But I don't just dismiss it. I do think "Can I as a terminal emulator mitigate this bug?" But ultimately, this is not my bug. And so yeah, it's a lot -- it's frustrating. It's also frustrating because all the cool new post 1.0 features we want to build, that we kind of touched on - it's going to be blocked on downstream adoption, right? It's like any -- you know, a web browser comes out with a feature, it doesn't matter until a website implements it. And so that's going to happen here, too. But if we have -- I've joked around building a Ghostty shell that only works in the Ghostty terminal emulator. So it's kind of crap, because you would never use it remotely... But it's more of a tech demo of like "This is what shells could be if they implement all the capabilities of Ghostty." It's kind of like a Chrome web experience, web experiment. We need the Ghostty terminal experiment, where people visit it, and -- with the Chrome one, I would visit it and be like "Holy crap, a browser could do this?" And then it changed my whole perception of a browser, sometimes years before any website behaved similarly. And I have talked with folks about doing the same thing for terminals.

**Jerod Santo:** Mm-hm. This TUI works best in Ghostty, you know...? \[laughs\]

**Mitchell Hashimoto:** That's already happening, I think more than people expect. I would say right now Neovim works best in Ghostty. It degrades great for other things... But I think almost the entire Neovim maintainership is in the Ghostty beta, and it's a collaboration between us implementing something and Neovim shipping it like two weeks later. And most people have no idea, because unless you're in Ghostty, a feature detects it, those things don't turn on.

**Jerod Santo:** That's crazy. So if you're using Neovim, you want to be using Ghostty. And maybe vice versa.

**Mitchell Hashimoto:** I'm biased, but yeah, I think so.

**Jerod Santo:** Are you Neovim user?

**Mitchell Hashimoto:** I am a Neovim user, and I don't know how many of the actual Neovim maintainers actually use Ghostty... They all have access. I don't know how many actually use it. But I know that more than one means Ghostty all the time. And so yeah, it's something that Neovim is always going to work in there, and we're gonna work really hard to make it to make it a great experience.

**Adam Stacoviak:** Do you pay attention to DHH, by any chance?

**Mitchell Hashimoto:** Here and there. If it's loud enough. \[laughter\]

**Jerod Santo:** Sometimes you can't help yourself but pay attention.

**Adam Stacoviak:** Well, not so much his voice and his words, but on YouTube he's given demos of Kamal and other things, and I think you always get to see his terminal and his text editor and stuff like that... And he's done some cool stuff. I haven't paid attention to it deeply, I just know it looks cool. I'm not even sure what he's -- my back of the brain to do is like "Go investigate what he's doing, because it looks cool." Like, whatever he's using. Is it Neovim? Is it something else...? And what I've seen too in screenshots you've shared for Ghostty, they look cool, too. And so I'm just curious, because they look cool.

**Mitchell Hashimoto:** I might be making this up, I can't fully remember... Okay, I'll start with what I know for sure I'm not making up, which is that I've gotten mentioned a lot on Twitter with DHH and others, with people telling him or asking him to look into Ghostty. That I know for sure; that happens actually fairly regularly, probably due to this stuff that you're talking about. What I don't know, what I can't remember is I thought he said that he only wants to use software that is publicly-available, that everyone could use, which is a totally, obviously good take, because he's shipping stuff that people want to use right away. And I don't think he said that directly in response to Ghostty. I think it was just like a general thing, where people are sending him stuff to use. But I imagine that that's a big thing holding him back, if he even knows about Ghostty at all. But I hope when it's public that he would at least give it a shake. I've always said, even if you don't use it, I would just like to know why you don't use it. That's perfectly valuable information.

**Jerod Santo:** \[01:19:54.21\] Sure. So to that point, we asked on X for people to add questions for you, and it seemed like the overwhelming question is the age-old question, is "When is this going to be available to the public? When is 1.0 going to drop?"

**Mitchell Hashimoto:** Yeah. So we're recording this in December, and I promised they would be released in December. And the plan -- everything still looks good for December. So sometime this month. I don't have a day. I really don't. It's just sometime this month. I think the software is in a pretty good place. There was a few blockers that I had, and one of them was the icon that I wanted to -- I wanted a fresh icon for the 1.0. That's done. I tweeted that out, and it's in the beta builds already, and that's all done.

Another one that I'm waiting on is sort of like web design and website docs work... That one -- you know, it's all volunteer. I'm not the best at web technologies right now, especially frontend, so I have friends helping me with that... And I don't want to pressure them. It's the holiday season, things like that. If the website doesn't get done in December, my plan is probably to publicly release without it, and just say that's coming later; probably make a bunch of Markdown files to kind of help people in the repo with docs. But we'll see about that. But I'd say that's the major thing blocking right now.

And then the third thing is sort of some amount of release management. We have nightly builds right now, but I haven't actually written the GitHub action automation stuff to tag and build like a numbered release... And so I'll have to do that for the 1.0. And obviously, that's not a huge blocker. That's probably like a day of focus. So we're still looking good for December.

**Adam Stacoviak:** You said the icon is in the beta build, so that means what I have open is the plan to be released version? The icon?

**Mitchell Hashimoto:** The winking ghost? Do you see a winking ghost?

**Adam Stacoviak:** Yeah.

**Mitchell Hashimoto:** Yeah, that's it.

**Adam Stacoviak:** I had to open terminal.app as well, just to sort of side by side, because I'm like "This looks..." As my son would say, "We've been here before."

**Mitchell Hashimoto:** Yeah, that's on purpose. That's on purpose.

**Adam Stacoviak:** I like it. It's an homage. You can tell it's darn near the same, except for the thickness of the outside border is a little bit thicker for Ghostty.

**Jerod Santo:** And the background is bluish, instead of blackish...

**Adam Stacoviak:** Yeah, obviously. There's obvious differences.

**Mitchell Hashimoto:** I would say if you can, open the terminal icon, then the 512 or thousand pixel version, and open the Ghostty one in the 512... One thing we did with -- the designer who did this is a well-known, really awesome designer. I've been a fan for so long, so I was actually really excited to actually get an icon designed by this person that I've been a fan for the icons... But one thing he does really well, which is very Apple-esque, is that the level of detail in the icon differs based on the size of it. So if you're looking at it in the doc versus the big version, it's different. So look at the big version and compare, because it's super an homage to terminal.app, but we tried to add a level of depth and reality. So things like the aluminum border has texture, the pixels, you could see the individual pixels of the screen, and they were warped, because the screen is curved... There's a soft glow around the ghost, and things like that. So yeah, I just want to call it out, because he worked hard on it, and I think it's cool... And I think it also shows sort of the level of detail that we've been thinking about with this software.

**Adam Stacoviak:** I've got it open now. The little dots, the little pixels are really cool; little subtle details. What's the designer's name?

**Mitchell Hashimoto:** Michael -- I don't know how to pronounce last name. Flarup. His company is Pixel Resort, I think. Yeah, you could see his whole portfolio on that. He's done hundreds and hundreds of icons over more than a decade, and I'm a really big fan of his work.

**Jerod Santo:** To this day, after decades using computers, I still nerd out on a really cool app icon. I just -- I love the beautiful app icons, and like just the people that make them. So I don't know this guy, but I appreciate him, and I'm sure I would love to go to his website and look at all the things he's made.

**Adam Stacoviak:** A lot of good stuff.

**Jerod Santo:** I mean, just eye candy; just pure eye candy. And you know how hard it is to do that well.

**Mitchell Hashimoto:** Yeah. And he's still doing a little bit more work for Ghostty, and I'll just hint -- I mean, it's going to be more than a hint.

I'll talk about what it is. It won't be in for 1.0, but probably shortly afterward... We're making it so that the icon -- we're going to dynamically change the color to match your theme. So on disk, it's always got to be sort of the default. But when it's running, Apple provides APIs where you could add a custom image, and we want to make it so that the bluish color will actually be your actual background color, and the text and things like that. It's just going to happen automatically.

**Jerod Santo:** \[01:24:21.07\] Nice. So how much Swift UI is in here? How much percentage of the codebase?

**Mitchell Hashimoto:** I don't have it open in front of me, but I think something like 10% of the codebase is Swift right now... Which is kind of scary. Yeah. And that's why I think that -- I've harped on this so much, but that's why I think libGhostty is so important, because it shows the amount of work that goes into building, you know, an end state app is how much code is required, and stuff. So yeah, I think there's a lot of Swift in there, a lot of Apple-specific functionality.

**Jerod Santo:** So you imagine over time that percentage goes down, I would imagine. It would have to, as you support other things, add stuff to the core... Or do you think that you'll continue to sling Swift in the --

**Mitchell Hashimoto:** Well, I think we'll always have the sort of flagship implementation consumer of Ghostty, which will probably be like the Ghostty Mac app and Linux app... And so the Swift code will only increase, but I'm not sure percentage-wise what that looks like as the core functionality changes, and stuff. I'm really not sure.

**Jerod Santo:** Right. What were your other major blockers before the 1.0? You announced it was coming - I think that was a couple of months ago. But what were things, besides a rad icon update, that would like block it, the website you mentioned, from failing to launch in December?

**Mitchell Hashimoto:** There was a number of features that -- there was a certain amount of stability, obviously. Stability is hard to quantify, though. It sort of is more of a feeling of when you get enough beta testers that aren't reporting bugs. That was sort of a vibe. But in terms of features, there was a list of features that we wanted to implement, and performance metrics we wanted to hit... So just things like supporting image protocols, and ways to input, and making sure -- I basically went out and just looked at all the available functionality the terminals have, and asked myself whether it's important to have it. And that was sort of a marker. Because that 1.0 goal was to be the best existing terminal, you kind of have to do most of what existing terminals do. I drew the line at terminal stuff, not UI stuff, because there's a lot of terminals out there that'll do SSH libraries, and double-click, and you can just go straight in, and things like that. I sort of drew the line where -- when I say existing terminal, I mean the functionality below that line. But that was sort of the goal.

I mean, I think the one feature that was always -- there's two things that were always, to me, a release blocker, that I've not given up on, I've just let go in terms of blocking the release, but we're going to still do it. One of them is a totally graphical configuration mechanism... Because for Mac and Linux users, for the vast majority of users, they don't want to be editing a text file to do their configuration. So we do want to build a native UI to manage your config, and that's still coming, and for sure something we'll do.

And then the second thing, which is I think a really big deal, and I think a lot of people will probably be not very happy about with the 1.0, is search. I don't know if you noticed that yet, but Command+F doesn't work. It doesn't do anything.

**Jerod Santo:** Oh, wow. I have not noticed.

**Mitchell Hashimoto:** Surprisingly, we have something like 5,000 active beta testers right now... Really surprisingly, it's not been a big issue. I thought within the first month of beta testing, when we had 50 people, that people would say, "Oh, this is not usable, because there's no search."

**Jerod Santo:** Yeah.

**Mitchell Hashimoto:** I don't use search in the terminal, clearly, because it hasn't been built yet... But I thought that would really pop up. And we're 5,000 people in and I think that issue by far has the most upvotes. It has something like 120 or 150 or something, but it hasn't stopped a considerable amount of people from using it. So that's what changed my view on "Let's just slip this post 1.0." It's an important thing to add, but I think there's a huge number of people that'll still get value without it. It is something you'll see in the 1.0 release blog post, so I'm going to call it out directly, because I don't want people to think I'm trying to make some message about not supporting search. We'll support it eventually, but yeah.

**Jerod Santo:** \[01:28:12.13\] Well, I didn't notice that, because I guess I don't use search either. I just use Control+R.

**Mitchell Hashimoto:** Use Tmux.

**Jerod Santo:** Yeah, I use Tmux, and Atuin, and just the tools inside the shell there.

**Mitchell Hashimoto:** Yeah, so any Tmux user wouldn't notice, because search doesn't work in any terminal with Tmux.

**Jerod Santo:** RIght. Cool. Well, what else? Is there anything that you were expecting us to ask you about, that we haven't, or that you wanted us to? You're just waiting for it and we just haven't delivered it yet?

**Mitchell Hashimoto:** Waiting, waiting, waiting... There was a question actually on X that I saw, that I was like "No one's actually ever asked that", and I'd never thought about it before they asked it.

**Jerod Santo:** Was this the Neovim one?

**Mitchell Hashimoto:** Yeah. Yeah, yeah, yeah. And he made me think, and I was like "That is an interesting question."

**Jerod Santo:** Let's give him a shout-out. I do have it... Mark Jakewith, or Jackwith. "Are there any specific features besides speed that make Neovim better in Ghostty?" Is that the one you're talking about?

**Mitchell Hashimoto:** Yeah. And I think it's a good question, because we have talked about how Neovim is good in Ghostty, but I think more generally the question to me was "What makes a terminal interesting that you wouldn't really notice, I guess, until you actually used it?" And I think that's something that people don't realize a lot. I think the biggest one is there's so many terminal.app users. Serious, very online developers that are using terminal.app. And it's funny to me, because it's such a bad terminal. And just to be very concrete about that, it only supports, I think, 256 colors. And there's so many people out there that don't realize that terminals for over a decade have supported 32-bit color. And you don't realize it because almost all terminal programs do such a good job of gracefully degrading, and just realizing what environment they're in and working. And so if you only ever ran something like Neovim in terminal.app, it obviously works great there. You would only ever see 256 colors. And then you run something in Ghostty, and suddenly you're like "Wait, why does syntax highlighting look better?" or something like that. It's because you're using full RGB, with some transparency, and things start popping in...

So yeah, I mean, I think that one of the things that stands out immediately is because Ghostty supports modern input protocols, for example, you could bind every key. And there's a ton of people I've talked to that don't realize you can't bind in every key, not because they haven't tried it, but because they tried it, it didn't work, and decided "That's just how it is. I'm never going to do that again." But realizing it's just because most terminals are built on a 50-year-old input stack. But if you look at Kitty or Ghostty - I think WezTerm also supports it... Alacrity does not. But if you look at those three, for example, then you can now bind things like - Backspace and Escape could be separate. Before, if you bound Escape and you press Backspace, it would trigger Escape. Now they could actually be distinguished, and things like that. And I think that that enables a lot more functionality, and things like that.

So I guess my view is there's a lot of people out there I've talked to who are just like "I'm happy in terminal.app", and I'm happy they're happy, but it's one of those things where -- I describe it like a Retina screen that Apple shipped. You don't realize how good it is until you use it. And I'm not even pitching Ghostty here. I'm pitching any modern terminal. Just give it a shot, because I don't think most people know what they're missing out on.

**Adam Stacoviak:** Yeah, I concur with that. Jerod was -- do you still use Terminal, Jerod?

**Jerod Santo:** I do.

**Adam Stacoviak:** Okay, so you can really speak to this well.

**Mitchell Hashimoto:** I'm speaking to you directly.

**Jerod Santo:** No, I'm happy to hear it.

**Adam Stacoviak:** It's because he has a different way of thinking. He wants to use Mac...

**Jerod Santo:** I'm a minimalist, so I don't want to install unless I have a good reason to. I'm not against -- I used iTerm2 for a while, and I was like "What is this doing for me?" And maybe it's because I've been "Ignorance is bliss", over here in the ignorant land of 256.

**Mitchell Hashimoto:** I think TMUX requires extra config in order to take advantage of some of these modern things, which is unfortunate, because they are detectable... But yeah, that might be part of the reason, too.

**Jerod Santo:** \[01:32:07.07\] Yeah, possibly. So I have good things to look forward to now that I'm using Ghostty. One thing I did notice, which I used to use way back in the day - I think on Linux - and I love is you've got this... I called it Visor mode. It's like, fly down from the top.

**Mitchell Hashimoto:** Yeah, yeah.

**Jerod Santo:** That's a cool thing. I loved that when I was in college, because I'd make everybody think I look cool when I was like \[unintelligible 01:32:25.14\] you know? They'd be like "How'd you do that?"

**Mitchell Hashimoto:** Yeah.

**Jerod Santo:** That's a cool feature.

**Mitchell Hashimoto:** That was definitely -- I won't lie, part of implementing that feature was like the... I'll just say like the marketing factor of it; just like the cool factor, for sure, but really also was how many people came and said they must have that to use this terminal, because iTerm supports it. And I think iTerm is the only terminal that supports it.

**Jerod Santo:** I think so, too. I think that's the one thing I lost when I switched back. I was like "I don't use it much anymore", because it was kind of a novelty... But it's cool. And now that I'm back to it, I'm like "Oh, I should use this now." Can you map that to like a global hot key, so you don't have to be --

**Mitchell Hashimoto:** Yeah.

**Jerod Santo:** Okay.

**Mitchell Hashimoto:** Yes, you can. And there's actually a couple of beta testers... It blows my mind that they are full-time professional software engineers, and they exclusively use that as their terminal. They don't use -- they have no floating windows.

**Jerod Santo:** I would love to watch them work.

**Mitchell Hashimoto:** I did, too. So they're coming from iTerm, and they're like "I only have one terminal", and in Ghostty language it's called the Quick Terminal. It's like, I only use the quick terminal. So they're finding some really interesting bugs. They're sort of getting fixed now, but they're using it so heavily... But I never imagined people would use it without another floating window, which complicates -- like, if you have three screens, which screen does it float down from? And things like that. They're finding some good stuff. And that's all going to get fixed before 1.0. But it's very interesting how diverse the user base is out there.

**Adam Stacoviak:** Let's test your config knowledge, Mitchell. I have the config open... If I want to bind a key to this Quick -- what is it called? Quick what?

**Mitchell Hashimoto:** Quick terminal.

**Adam Stacoviak:** How do I do it?

**Mitchell Hashimoto:** Okay. Well, one, if you don't want to bind a key, it's in the menu. So if you just wanted to see what it looked like, it's in the menu.

**Adam Stacoviak:** Oh, really? I've played there, yeah. I've done that.

**Mitchell Hashimoto:** It's in a View, I think. Yeah, View Quick terminal. That's not very practical as a way to use it. It's more of a discovery mechanism. Do you still want to know the config to bind?

**Adam Stacoviak:** Yes, I do. That's why I asked.

**Mitchell Hashimoto:** Okay... So keybind, all one word, equals, space or no space, I don't care... Equals, and then let's just bind it to something dumb. Let's just type the letter j, colon... Yeah, we'll bind it to j for now. You could replace that later. J, colon, and then toggle underscore quick underscore terminal.

**Adam Stacoviak:** Okay.

**Mitchell Hashimoto:** And then save it, and then hit Command+Comma. That'll reload your config. And then hit J.

**Adam Stacoviak:** I must have fat-fingered it, because my -- oh, wait. The config opened up, or something.

**Mitchell Hashimoto:** You might hit Command+Shift+Comma?

**Adam Stacoviak:** I think I might've done that. Yeah.

**Mitchell Hashimoto:** Oh yeah, Command-Shift+Comma is actually what you need to reload. Command+Comma does open it.

**Adam Stacoviak:** Yeah. I was like "What is this...?"

**Mitchell Hashimoto:** Yeah.

**Adam Stacoviak:** Oh, I fat fingered it. Configuration errors.

**Jerod Santo:** Speaking of stealing from the browsers, I also just found your terminal inspector.

**Mitchell Hashimoto:** Yes.

**Jerod Santo:** Which is very much in the spirit of dev tools. Like inspect element. Inspect terminal. This is cool.

**Mitchell Hashimoto:** I'm surprised I forgot to mention that. Yeah, I am going to age myself a bit here, especially given my Discord community, but I remember the pre-inspector days, and specifically I remember when Firebug launched.

**Jerod Santo:** Firebug, baby.

**Mitchell Hashimoto:** Yes. And I was an active Rails developer, web developer when Firebug launched... And yeah, overnight, web development got so much better, and I felt like you could do so much more because of the visibility it gave you... And the terminal inspector still has a long way to go to get there, but that's what I was thinking of when I built that, was like "I want this to be a text platform where people could build applications." And to do that, you need good debuggers, and debugging tools. And I felt that with a terminal inspector, similar to Fire -- we needed the Firebug of terminals. And that truly was the motivation for that.

**Jerod Santo:** \[01:36:12.04\] Yeah. Super-cool. Nice and simple... Dev tools has gotten very feature-rich over the years when you fire it up in Chrome... And it's pretty complicated at this point. I mean, there's courses on how to use dev tools. And Firebug was so simple. I mean, it was game-changing, but it was basic compared to what we have now. And I like how straightforward and basic this is, just to even -- I just grokked it immediately, even just as a non-developer on this thing. It's just -- it's sweet.

**Mitchell Hashimoto:** Yeah. It's cool. And I think it educates people more, too. I don't know if this will be true about terminals, but I suspect it will, because with the inspector I've had non-developer friends find that feature in browsers, and just like click around... And they've sort of mentioned to me "Oh, I realized I could change the color of this thing, and that's how that works."

And it's just like some sort of education, and I'm hoping that there's terminal users that aren't ever going to build a terminal application, but will open that inspector and just kind of mess around and be like "Oh, that's probably how that works in a terminal", and... Yeah.

**Adam Stacoviak:** I'm stoked. A new terminal option has arrived.

**Jerod Santo:** That's right.

**Adam Stacoviak:** THE terminal option has arrived.

**Jerod Santo:** It's the AND terminal. There's no ORs here.

**Adam Stacoviak:** Yeah, that's right.

**Jerod Santo:** You get this, and that, and that.

**Mitchell Hashimoto:** I love it.

**Adam Stacoviak:** I love the icon work, too. Very good.

**Jerod Santo:** It's the MIT license... I mean, what's not to love about this?

**Mitchell Hashimoto:** I don't know. \[laughter\]

**Jerod Santo:** That's why everyone's so excited, Mitchell. I guess it's the lack of availability... Of course, if you're listening to this, it's probably out there, unless you're listening to this the day that we ship... Because this is coming out mid-December. If you're not listening to this, if it's late December... If it's January, go download Ghostty right now.

**Adam Stacoviak:** What will the URL be for Ghostty ?

**Mitchell Hashimoto:** It's gonna be Ghostty.org.

**Adam Stacoviak:** Okay.

**Mitchell Hashimoto:** I already have it, and that's what it'll be. To match the GitHub org, it's Ghostty.org. So... Yeah.

**Adam Stacoviak:** Gotcha. Just replace the dash with a dot.

**Jerod Santo:** Well, you're doing it right, Mitchell.

**Mitchell Hashimoto:** Thanks.

**Jerod Santo:** I appreciate all this, open sourcing it... The technical philanthropy, reinventing an awesome terminal from the ground up...

**Mitchell Hashimoto:** I appreciate it.

**Jerod Santo:** I'm here for it. You've got me out of terminal.app. We'll see if I stick around. I probably will, especially because I can just like bring this quick terminal down and impress all my friends again.

**Mitchell Hashimoto:** If my greatest social good is getting people out of terminal.app, then I will die happy. \[laughter\]

**Jerod Santo:** Impact, baby. Impact.

**Mitchell Hashimoto:** Thank you very much. Yeah, I'm happy to be back. Like I said, I listened to that episode from 2012, and...

**Adam Stacoviak:** Yeah...

**Mitchell Hashimoto:** So it's funny to be here, 13 years later.

**Jerod Santo:** Like a time capsule.

**Adam Stacoviak:** It is. How wild is that...?

**Jerod Santo:** It's cool.

**Mitchell Hashimoto:** My wife was listening as I had it playing, and she said I sound like a child. And I was a child. So yeah, maybe I'll look back in 13 years and say I'm now a child right now, but...

**Adam Stacoviak:** You've grown up, man.

**Jerod Santo:** Hopefully.

**Mitchell Hashimoto:** It's crazy.

**Jerod Santo:** Alright, thanks again. Bye y'all.
