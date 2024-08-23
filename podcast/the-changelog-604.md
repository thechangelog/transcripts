**Adam Stacoviak:** So we're here, talking about Ladybird. We've got a - I guess an OG in the house today, since episode 10, Jerod. That's before your time even here at Changelog.

**Jerod Santo:** That's forever ago.

**Adam Stacoviak:** And I'm wearing the old school shirt on purpose.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Like, this was the logo back when Chris Wanstrath was on the show. Episode 10, Chris. That's crazy.

**Chris Wanstrath:** Long time ago. I have one of those shirts.

**Adam Stacoviak:** Do you?

**Chris Wanstrath:** I've kept every shirt. Not in my drawer, obviously, but I've got all these boxes and storage of every GitHub shirt that we ever produced, that I got. All the free conference shirts from RubyConf and RailsConf, and I'm positive I have that exact Changelog shirt somewhere.

**Adam Stacoviak:** Fantastic. Well, that's good news. I'm glad you kept the shirt. Maybe you can make a blanket out of it, I don't know. That's what I heard is kind of cool, is like make a throw rug or something with it.

**Jerod Santo:** Yeah, you can quilt them all together.

**Chris Wanstrath:** Museum, right? I'm going to hang them up on the wall.

**Adam Stacoviak:** Sure. And of course, we have Andreas back, talking about Ladybird. And the last time we talked to you, Andreas, was I guess around SerenityOS primarily. And Ladybird was obviously part of that conversation, but it was kind of a sidecar to the main conversation. But now you forked it, and it's gonna become a bigger thing than it was before, something far more focused, and that's the conversation. So where's the best place to begin?

**Andreas Kling:** Oh, I don't even know. I guess at the fork, perhaps?

**Adam Stacoviak:** Okay. So we had SerenityOS, which people know about, and I've talked about it on the show before... And it was a great, fun, relaxing project for myself and a lot of people. But over time, it just happened that the Ladybird browser, which started as a tiny little component in Serenity - it just grew and grew until it became sort of bigger than SerenityOS itself, especially in terms of the amount of work going into it. And for the last year, I guess before we forked, it was the main focus in the repository. And not everybody liked that. It certainly was a pretty cramped way of working, trying to do an operating system and also doing a browser, all in one repository... So it kind of naturally came a time when it was time to fork.

And at the same time, I had been working with Chris secretly, for like almost a year at that point, setting up a --

**Adam Stacoviak:** Ah. Secrets.

**Andreas Kling:** Secrets, yes. Setting up a non-profit for Ladybird, where -- you know, we wanted to kick things up a notch and go focus on Ladybird for real, and turn it into a real product. And I felt like when we were getting ready to make the non-profit public, we just had to pull the trigger on forking Ladybird, because launching the non-profit and then having to explain to everybody "Well, you see, Ladybird is a component of a great operating system that has like 400 other components. But don't worry about that. This non-profit is about Ladybird." It was much easier to say "Here's the Ladybird Git repository. It has Ladybird in it." So I wanted to do that sort of spring cleaning before, and that's why the fork happened when it happened.

But it's been a great success, I think. Now people who want to work on operating system internals, desktop widgets and GUI stuff, they can do that, and they don't have to get trampled by people working on HTML internals and stuff like that. And vice versa, you know. But it's certainly been a crazy last two months. We launched on the 1st of July, I think...

**Adam Stacoviak:** What month is this, right?

**Andreas Kling:** Right. We're a week into August, and... Yeah, we launched on the 1st of July, and it was pretty wild. Got so many people interested in what we were doing, and I also learned that it might have been a mistake to launch while all the Americans were on vacation.

**Jerod Santo:** Why is that?

**Andreas Kling:** Because a lot of people didn't even find out about it until they came back to their computers, like the week later.

**Adam Stacoviak:** You could always relaunch; you can launch as many times as you want.

**Jerod Santo:** Yeah. Just keep on launching.

**Andreas Kling:** I guess so. \[laughs\]

**Adam Stacoviak:** The story was a little muddy though, because you were sort of embedded in Serenity, and it made sense to fork and consolidate the story into one that could be backed by a nonprofit. You mentioned this secret relationship for a year, though. How did you guys meet? What made the relationship blossom, or even come around?

**Andreas Kling:** So I guess I can tell my side of the story, which is that I was stuck in an airport in Denmark. And I had been up for 24 hours, and a bunch of flights had been canceled. I was just trying to get home. I had been to a conference for web engine developers. And I'm trying to stay awake desperately, so I'm on my phone just tweeting at people, liking stuff... And I don't know why it came to me, but I remember that Chris had tweeted about SerenityOS sometime earlier. I don't know if it was a couple of weeks before, or something like that... And I thought "That's cool. Why don't I direct-message him and say thank you for promoting the project"? So I just wrote to Chris saying "Thank you for promoting SerenityOS. That's cool." And then he was apparently at the computer, so we started having a conversation, and I quickly told him that I had been thinking about taking Ladybird more seriously, and spinning that off, and trying to make something real out of it. And Chris, I guess you can take over here and fill out your perspective.

**Adam Stacoviak:** You were on the computer, Chris. What happened from there?

**Chris Wanstrath:** I was on the computer. I barely remember that, because I was not in an airport in Denmark, under duress. Well, for me, I would say it starts a lot earlier, because after GitHub, I started programming again a lot. So I took some time off...

We sold GitHub to Microsoft; people think that I went to work at Microsoft - I never worked one day at Microsoft. So I just left, I was unemployed, and I started learning Unity, I started making games, I started writing Go, I started writing Rust, I started learning a lot of these languages that I didn't feel like I had the time to keep up with while I was in CEO mode at GitHub. The world had changed a lot since we spoke on podcast number 10.

**Adam Stacoviak:** Yeah, significantly.

**Chris Wanstrath:** So I wanted to learn the new technologies. Significantly. So I made a fake GitHub account, with a fake name, which is a trick I learned from TechnoWeenie, and I just started hacking on stuff, sending pull requests, getting really involved in whatever I was interested in. Weird, weird SO languages, Gopher, things like that. And along the way, I was getting into learning assembly, learning about CPUs, learning about binary math... Stuff that I'd never learned before, because I don't have a CS background. And that kind of led me to the SerenityOS project.

And here they are, building an operating system from scratch, they're doing it in C++, which was also a language that I'd never done before, that I was learning... And so I started following Andreas really early. I think I was one of the first Patreon subscribers as well on Serenity.

So I'd watched that for years and years and years, and I saw when LibWeb was created, and followed the JavaScript engine a little bit... But I separately had been really interested in open source web browsers. I was an early supporter of Firefox back when they -- I tweeted this recently, but Firefox 1.0, they had a campaign to crowdsource an ad in the New York Times. It was two pages. I think I was 18 or 19 years old, so I put in, whatever, 5, 10, 15 bucks, and got my name in the paper. So I was a huge Firefox supporter. At that time I was running Linux on all my machines. And obviously, Firefox has become a small part of what the Mozilla Foundation is doing. Meanwhile, Chrome and Chromium and Google have really taken over the web.

So I've been thinking for a while - not that I was going to write a browser, but I would love to find some folks who are interested in this, and get involved, and help in any way I can. And so I've watched Ladybird sort of evolve from afar, and when Andreas and I started talking, I felt like it was the perfect fit. I mean, because he had already been doing it, he had the experience, he had the team, he'd proven he could run a project already with Serenity... And I just felt like I could help fill in some of the gaps in terms of the legal side, the business side, and some of the funding. So it was really an amazing sort of coincidence and situation, from my perspective.

**Jerod Santo:** Yeah, a very cool story from both perspectives, and one that we were immediately excited about this... Because I feel like for the last 18-24 months we've been hemming and hawing talking about what if there was a young, fresh, new, open source, user-oriented-first browser? And it's kind of just a big undertaking, it's kind of just like a "Yeah, that'll never happen" kind of a thing because you've got to have significant funds, you've got to have people who have the know how, you have to have sustained effort, somebody who can organize and inspire and lead... And it seems like when I first saw -- and Andreas, obviously, when you were on the show last year, we talked to you about Serenity. And when we got to the end and started talking about Ladybird, my ears perked up, and I was like "Oh, this is very interesting. Could this be a thing?" But, of course, you had this much bigger project that you were also working on. And so just want to throw my hat in the ring to say I'm super-excited that this is coming together, and that it has been formalized, and it's been funded by you, Chris, to start off with. And obviously, it's a nonprofit, so trying to get other people involved as well.

Where does it go from here, though, Andreas, because I read that you're like multiple years away from a 1.0... Talk about having multiple launches. Obviously, people want to use the thing. The first thing you said was "Well, we have to break it free from Serenity. We have to bring it to other platforms." But tell us what the work looks like from here and onward.

**Andreas Kling:** Whenever I tell this to people, they usually have very different reactions, based on how much experience they have working on browsers... But we are aiming to do an alpha version in 2026. So two years out, roughly... Which, from my perspective, is incredibly ambitious, because we have to support the web. And the web has a lot of features.

**Jerod Santo:** It does. And it's getting more all the time.

**Andreas Kling:** Yeah, exactly. We're not going to be able to support all of them, but for an alpha in 2026, what we want is a usable browser that could be a daily driver for developers like myself, but also for courageous and enthusiastic early adopter types; people who are willing to suffer a little bit to send in crash reports. That's kind of the first target. So two years out for an alpha, and then assuming that we get a ton of great actionable feedback, a beta a year later, and then a year later after that we would hope to do a general release. That's sort of the high level outline that I'm looking at at the moment. And there's a lot more detail, of course, of what goes into each of these steps to qualify something as a serviceable alpha, but we are working on a more detailed plan for that.

But yeah, so it's pretty far out in terms of time, which a lot of people have been telling me that "Why are you even talking about this now? If it's two years away, that's an eternity."

**Adam Stacoviak:** That's my internal question right now. That feels so far away.

**Andreas Kling:** It does.

**Adam Stacoviak:** Will the web change drastically between now and alpha?

**Andreas Kling:** Probably not drastically, but it will certainly change incrementally, thanks to the good folks at the other browser companies, who are always busy adding new features. It is a little bit of a complicating factor for us, that we have to keep up with that... But when you're in it every day, kind of in the trenches, just implementing these things, it's not so bad. It looks a lot worse from the outside. But when you're in the middle of it, it's sort of like "Oh, now Apple is adding this feature. Google is doing that. We can do that, too." It's not that bad. But yeah, from that from the outside I understand that this looks like a very busy mess.

**Adam Stacoviak:** Daunting, is my single word.

**Andreas Kling:** Daunting, one could say. Yes. It is it is daunting. I suppose it's a personal strength of mine, that I ignore these feelings of intimidation that you're supposed to have about this type of stuff...

**Jerod Santo:** Right.

**Adam Stacoviak:** Because it's such a big mountain, such a daunting task, maybe it's best to begin with why. Because you can have the ability, the skill, the financing, the friends, the organization, all those things. But what is the why? Why is it worth climbing this mountain?

**Andreas Kling:** Right. So I think everybody is going to find a different why, that works for them. I know Chris and I have pretty different whys. But there's a lot of overlap as well. So for me, it's personal, in many ways. I've loved browsers ever since I first used one back in like '95, or whatever. Connected to a local Swedish website and read a cartoon over the internet. I thought that was amazing. I was 10 years old, I think. Or 11. And I started working on browsers back in 2005, I think. So it's I've been at it for a while. And I've always just loved the idea of this giant hypertext network that we can all access. And the idea that I can work on the software that accesses that network? Why would I want to work on anything else if I can work on that thing? That's the coolest thing.

So for me, I love the browsers, I love the web, and I've worked as a browser engineer for many years, but I just didn't really fit into big tech, I guess. So after I realized that about myself, I left... And then it took a while, and I didn't know how I was going to get back into browser development again, until I just made a new browser accidentally, and now I get to be a browser developer again.

**Jerod Santo:** I hate it when you do that, accidentally make a browser, and then you have to be one, you know?

**Andreas Kling:** Happens to everybody. No, but it's personal. I just love it.

**Adam Stacoviak:** What about you, Chris? What's your why?

**Chris Wanstrath:** What's my why?

**Adam Stacoviak:** Yeah. Do you agree this is a daunting task, given the 2026 alpha? The web may change, browsers may become less useful, I suppose, potentially... I don't know. Because like the way people are using the web is changing, and we don't know what's gonna happen two years from now. Do you agree it's a daunting task?

**Chris Wanstrath:** No.

**Adam Stacoviak:** Okay, fine. \[laughter\] So what is your why then, I suppose, to even do this in the first place?

**Chris Wanstrath:** Well, start with two years is not a long time, I would say. I think maybe if you're a web developer it feels like a long time, because you can do an app in a weekend. You can you can launch a startup in six months. But for a lot of software projects, two years is like nothing.

And I think it feels a long time because years are years are years, but ChatGPT was released two years ago. Does that feel like it was six months ago or a year ago? Like, it was November 2022. So two years - there isn't a lot of change, really. They're still trying to figure out what's going on with AI stuff, right?

**Jerod Santo:** Sure.

**Chris Wanstrath:** So COVID was four years ago, feels like it was 100, the start of that. So now that I'm working with game engines, coming from a Rails app like GitHub, where we worked in terms of weeks and months, now we're talking about with games years; two years to release a game, four years to release a game, two years to release a game engine... These are sort of the timelines that you get into when you get into a different sort of software.

If you look at other places, like if you're an MCU fan, there's just been the big Dr. Doom announcement. That movie's coming out two years from now. So two years is actually a pretty reasonable amount of time, especially when you're older. So I don't think that that timeline is that ridiculous or that far away. As a consumer it sucks to wait that long, for sure. But I think it's a reasonable amount of time to build something ambitious. And in terms of the web changing - I mean, that's just like the name of the game. That's going to be true of anything you're working on for a long period of time.

So I think what we are thinking about, and what I'm interested in, is like 10 years from now. Two years from now is just to getting to the beginning alpha, but what's the web going to look like 10 years from now? And I think what we're seeing, and what we've seen is -- look at this app we're looking at right now. We're doing podcasting through the web, with video. I think the web is only going to become more ingrained, more powerful, more mission-critical. And this is a lot coming from one of the Electron people. But the web is far more now than reading AI-generated news articles on some s\*\*\*\*y ad-driven website. The web is a tool ingrained in so much of computing.

So I think if you look at -- you have like brain implants in the future... There's a good chance some of that's going to be running on the web, too. It's such a great technology, it's such a great playing field to put all sorts of new things into. So that's what it's about for me. I think the web is going to be around forever. I think it's only getting bigger, more ingrained in our life, and more powerful. And I think we need something that's not controlled by Google.

So yeah, I look at it like over 10 years. And I think 10 years from now, this could be -- maybe it won't be the biggest browser that consumers use, but I think the engine is also going to be a really big part of this, and people using the engine to build products, embedding it in things. So I'm not daunted, because I'm not the one doing the work, how about that? \[laughter\]

**Adam Stacoviak:** Okay, fair enough.

**Jerod Santo:** So as a game dev, Chris, another thing you probably think about is platforms, because that's a huge part of game development, is like "Well, where is this game going to run?" And of course, the web is a platform. But it runs on platforms, right? So you are breaking it free from Serenity; that's obviously important for a mainstream browser, to not be on a niche operating system. Bringing it to Linux and macOS. But for me and the future of browsing, it seems like it's going more and more mobile. Certainly not on your two-year plan, but is that like a 10-year plan, in terms of like "We have to be a mobile browser, too"? Maybe Andreas can answer first, and Chris can follow up?

**Andreas Kling:** Yeah, of course. We absolutely want to go mobile as well. I probably browse 50/50 mobile desktop myself, and I think most people probably browse even more on mobile these days. At least that was the wisdom when I worked at Apple; we learned that people were browsing way more on their phones than anywhere else. And we have to get on the phones. But we are currently in such a catching up state in our project; we're just catching up to be able to render the web at all. So we have to do that first before we can worry about luxuries like mobile, or Windows...

**Adam Stacoviak:** That's cool.

**Jerod Santo:** Fair enough.

**Andreas Kling:** But eventually - yeah, we totally want to get on iOS, Apple willing, and Android... And it looks like Apple is going to have to let us play on iOS, at least in Europe, thanks to the EU stepping in. I don't know if America will ever get arbitrary browser support on iOS, but... It's an interesting time. I will say that we do have the beginnings of an Android port, so we have a proof of concept where we can load a website on Android... But I don't think we can scroll, so it's a little bit limited. But we've seen it work.

**Jerod Santo:** That makes fold even more important, right? Everything has to be above the fold.

**Andreas Kling:** Right.

**Adam Stacoviak:** For now. \[laughter\]

**Jerod Santo:** Alright. Chris, obviously, you think mobile is important long-term. Do you think the project's in a good place to go there, get there? We're talking about team, funding obviously... There's a lot of work to be done. But you've thrown in personal money, hoping to get other people's money, I'm sure, to fund this... But where do you think it can go with like the current roadmap, or runway, as they call it in the startup world?

**Chris Wanstrath:** I think you have to start small for anything like this. I think it's a mistake to hire 100 people, something like that, and just go for it... Because you're just going to be then dealing with the organizational issues, and people issues instead of dealing with technical issues.

So from my perspective, I think it's great that they're starting to focus on only really the platforms that they're using, not even Windows right now... And trying to get the core foundation stable, working, and then thinking about growing it from there. And I think we're thinking about the team size and the funding in a similar way - slowly growing the team, getting it to a place where it's working and there's a foundation, and adding on from there.

So yeah, I'm definitely committed to being a part of this, and would love to have other people see the vision. And I think what's going to happen is when it gets closer to being something that people can use, they're going to become a lot more interested in it. We're in this tough spot right now where it's really a dream and a vision, and sort of a promise, right? Two years... We're not going to push that back... But I think when we get there, and people start seeing "I can use this every day", especially given the fact that things like ad blockers are about to go away on Google Chrome, I think we're going to get a snowball effect and a lot more support. So yeah, I think this is the right way to grow it. I think that they've got the leadership, the team, and sort of the energy to do it. I think it's the right plan, and I really believe in it.

**Jerod Santo:** Andreas, what does it take to get from Serenity to Linux and Mac, in terms of is \[unintelligible 00:26:30.09\] architecture, is it just surface area that needs to exist, that doesn't exist there? How do you get it from where it is to there?

**Andreas Kling:** It was really easy, actually, looking back on it... Because Serenity is a Unix-like operating system, inspired by Linux and macOS, for the most part. Not visually; it looks like Windows 2000. But the internals are all Linux and macOS kind of stuff. So lifting it over took, I would say, a couple of weeks, until we had it running... And at that point, we just kind of switched over from -- it used to be that we would develop the browser by sort of building Serenity OS, and then booting it up and testing the changes we'd made. And there was like a gigantic edit compile test cycle, which included the booting process of an entire operating system just to test the browser change. And the moment we could run it on Linux or macOS, it was such a productivity increase that I think everybody working on the browser just switched immediately. And looking back, maybe that was the moment that I sort of switched from Serenity OS to Ladybird myself as well, because I just became a Linux user of Ladybird at that point, or a Linux developer.

But yeah, so all the abstractions and things that we had inside Serenity OS, they just translated beautifully to other operating systems. Not Windows, which is why we talk about Windows the way we do, as a future thing. And we hear people say often that "Why not Windows? If you don't do Windows, this can never succeed. Most of the world is on Windows." And we acknowledge that; we just don't know any Windows experts at the moment who happen to also work on Ladybird. Sometimes people show up and they say that they're going to port it, and they're going to help us, and then they spend a couple of days doing that, and then they just disappear out the back door, when they discover how much work is involved... That's happened many times. And I don't blame them for it. It's real work... But it's real work that we will take on ourselves eventually, because we do need to get on Windows as well.

We want to make a browser for everybody, not just people who use the same operating systems that we do, or people who feel the same way we do about the web, or whatever... And especially now being a nonprofit, that's something that's very important to me, is that we have sort of a very neutral stance on this type of stuff, that we just have to make ourselves available everywhere, to everybody... Which is a bit scary, I will admit, because I don't know the first thing about Windows development. Last time I did Windows development was on 3.1, I think. So it's been a while.

**Break**: \[29:25\]

**Adam Stacoviak:** You'd mentioned I think in your FAQs really the use of third party libraries. Can you speak to, I guess, the freedom you may have now, comparative to Serenity OS's strict "no third party, we write it ourselves" kind of montage? Can you express how that's changing for you?

**Andreas Kling:** Yeah, so that's been a big change. And part of why it was so easy to lift Ladybird from Serenity OS to other operating systems was that Ladybird was like this big, dense package that just had the whole code stack in one pile. So once you figured out how to get pixels to show up on the screen, everything just worked. And it was like you took a window out of Serenity OS and just lifted it over to Linux or macOS.

But building everything ourselves was great in Serenity OS. It was great for personal therapy, and building a kindergarten for computer programmers. Those kind of purposes - great. But for shipping a product in two years, insisting on writing every line of code ourselves was getting in the way a little bit... And we decided that we're going to relax and say "Maybe we don't have to do everything ourselves. Maybe we don't have to say that we are experts at all of these things." Like, we don't have to be the expert at image formats, or encryption, or 2D-accelerated graphics on the GPU, or whatever. There are all these things that are not really core competencies of a browser, that we don't really need to do ourselves... And we decided to just let go of Serenity OS'es rule or mindset that everything has to be built by us. We said, "Everything that isn't really a web technology, we can just lean on the open source ecosystem, and take advantage of mature, high-performance libraries that exist." And this has been hugely profitable for performance, for productivity, and for correctness. We've been able to like just take ready-made components that do a lot of stuff that we needed to do, and they work better and faster than what we have. And we've been able to delete, I think, 150,000 lines of code, or something like that, just by lifting in libraries that everybody had on their computers anyway. So it's fantastic, really.

And there's been some social challenges to this, because a lot of people were really attracted to the project because of this mentality that we do everything ourselves, we don't care how long it takes, we don't care if it sucks, it's ours. It's attractive. A lot of people love that environment. I love that environment. I wanted people to have that. And that was also one of the reasons that the fork made a lot of sense, because then the fork could retain that way of working, where in Serenity OS still they have those 150,000 lines of code that we wrote ourselves. And they will continue to live on in that world, unbothered by the greater OSS ecosystem. But in Ladybird, we leverage existing stuff to make it possible to ship in this lifetime, basically.

**Adam Stacoviak:** Mm-hm. Another freedom that you have now too is to evaluate, as you say, a mature successor -- I'm quoting the FAQ. "A mature successor language." C++ was the language you chose for your purposes, it was a personal convenience for you, as you mentioned... But there's opinions out there, and I'm sure there's opinions sort of like "Well, now that you have the freedom, can you choose something different?" Can you speak to what this evaluation period might be, what that language might be? Thoughts, expectations etc?

**Andreas Kling:** Sure.

**Jerod Santo:** He doesn't like Rust. I remember you don't like Rust from last time, because of the lack of object-oriented... Right? Was that you who said that, Andreas?

**Jerod Santo:** That sounds like exactly what I would say.

**Chris Wanstrath:** It sounds like him. It definitely sounds like him.

**Jerod Santo:** I'll just throw that in there.

**Andreas Kling:** Alright. Yes. Okay. I'm preceded by my previous statements.

**Adam Stacoviak:** We have a transcript, too.

**Jerod Santo:** You can change your mind. You have the right to change your mind.

**Andreas Kling:** No, no, that's still accurate, but we still evaluated Rust recently... So what I've done is I've asked a bunch of people to "Please implement these things in a couple of different languages. And then we can talk about how that went, what you liked about each language, and which one you would like to work in every day." And what we ended up with was that people were initially excited to work in Rust, because there's a lot of hype, and it's like a popular language... And you would think that it's the greatest thing since sliced bread... And in many ways it is, if what you want is sliced bread. Or I don't know where I'm going with that. But it works well for a lot of things.

**Adam Stacoviak:** Sliced bread 2.0.

**Andreas Kling:** Sliced bread 2.0, right. But it turns out it's not ideal for building a browser... Because the browser stack sits on top of this API that was designed in the '90s, inspired by Java and XML and stuff like that at the time. This '90s API, and it set the core of the web stack. And it's super object-oriented, and it's just hard to express all that stuff in Rust, because Rust doesn't lend itself to object-oriented programming. It doesn't have inheritance, for example, which is a very fundamental building block.

And so what happened was I asked people to write in Rust, and they were initially excited, and then they came back frustrated. And nobody had a good time working in Rust, as far as I understood, when doing anything but trivial programs that like take an input and transform it into something else. The moment you try to model something, sort of in a browser space, it just became tedious.

So we looked at some other languages, and the one that everybody has liked so far has been Swift. So it's a bit of an unlikely candidate, but we decided to look at it, because it is a safe, modern language, that has great object-oriented programming capabilities. I would say it's even better than C++ in many ways. And it's a little weird, because it feels like an Apple product almost, but they've been making great strides on Linux and Windows. Especially now, the upcoming Swift 6 is looking like it's going to be a really good release on other platforms as well... So that's sort of where the ship is pointing right now. We haven't committed to it, because we're still figuring out how to do some things, but it's been really positive, and everybody's enjoyed working in it, myself included. It's been fantastic. So that's sort of what we're looking at.

**Jerod Santo:** That's quite a vote of confidence for Swift. Chris, do you have a dog in the language race over here? Are you involved in these details, or are you largely uninvolved in that kind of stuff?

**Chris Wanstrath:** I'm not involved. I'm a huge fan of Rust. I've written a lot of Rust. I don't think anyone should write web applications in it, unless maybe you're trying to scale to the moon.

Programming languages are tools, and they're suited to certain tasks. So it totally makes sense to me that Rust might not be the best for building what they're building. And you need these object-oriented concepts in the document model and things like that, and so you've gotta use the tool that is best for the job.

What I think I've told Andres from the beginning - and it's their decision, but... I'm a huge fan of the memory-safe languages. Huge fan of what Rust does provide in terms of safety. And I know Swift has a lot of that, too. So that's something that I really think the whole industry should be moving towards, and so I'm just happy with the decisions that they're making. Surprised about Swift, but my good friend is a huge Swift -- I don't know what you can call it anymore...

**Jerod Santo:** Swiftie...

**Chris Wanstrath:** Swiftie. Cultist. Rewrite everything in Swift. So we've been chatting about it, and he's super-excited about it, too.

**Adam Stacoviak:** How tethered is Swift to Apple? I think that'd be my only concern. I know it is open source, it's separate, but like... Contributions, are they open? I don't know much about the evolution of the Swift language, and how, I guess, contributable it may be, or literally open source it is, in terms of contributions and direction... Like, how Apple-tethered is it?

**Chris Wanstrath:** Open source on GitHub. It was maybe the first time Tim Cook said the word GitHub in a keynote.

**Adam Stacoviak:** Is that right?

**Chris Wanstrath:** It was a huge day for us, yeah. I got a Swift T-shirt, and everything.

**Jerod Santo:** Did you put it in your quilt?

**Adam Stacoviak:** Not yet.

**Chris Wanstrath:** It's in my quilt. It's in my museum quilt. Oh yeah, it's in there.

**Jerod Santo:** Awesome.

**Andreas Kling:** Yeah... No, I think they recently announced at WWDC this year that they are moving Swift from the Apple org on GitHub to its own Swiftlang org. So they're kind of stepping it out outside of the Apple company, and they wanna turn it into its own organization that can have people from other companies, other communities join and participate in the governance and evolution of the language. So that's something that seems like a great thing for us... And we haven't contributed code yet, but we have contributed bug reports. So we're looking forward to see how that process goes as well.

I think historically it's been pretty tied into Apple stuff, and it's still true that you do end up pulling in a chunk of Apple code, that you sort of have to use as the standard library in Swift. You have to use the foundation library, and like Grand Central Dispatch, and these kinds of things serve as the standard library in Swift. But outside of that, you are left to your own devices, and you can call C code.

And Swift, unlike Rust, actually has official investment in C++ interoperability, which is a huge deal for us, because we have half a million lines of C++ that we are carrying around, and it's gonna take time to do any kind of incremental rewrites or anything like that.

So in the reality where we're like doing a ship of Theseus maneuver on our project, having a successor language that actually tries to interoperate with C++ is essential. So what that means in practice is that Swift has facilities that allow you to call from C++ to Swift, and from Swift to C++. It's not always completely trivial to do so, especially if you have weird, complicated objects, with confusing ownership, but there's a way to make them talk to each other. And we didn't get the feeling that that's nearly as easy in Rust land, because - at the risk of being slightly controversial, I get the impression that people in the Rust land would rather make fun of C++ than help C++ programmers interoperate with Rust, which is unfortunate.

**Adam Stacoviak:** It is unfortunate. You are correct though... The new GitHub organization for Swift was announced on June 10th, so that is true. github.com/swiftlang.

**Andreas Kling:** Are you fact-checking me, Adam? \[laughter\]

**Adam Stacoviak:** Well, you know, I'm a podcaster. I'm behind the scenes, checking some things. I'm just ringing true what's true.

**Jerod Santo:** Following along. We're just following along.

**Adam Stacoviak:** Yeah, yeah, yeah.

**Jerod Santo:** Sure, sure. Good. That's good.

**Adam Stacoviak:** We're here to also point the audience to the right direction, not just having a conversation with you... So I'm confirming your facts are true, for the audience.

**Jerod Santo:** Well played, Andreas. Well played.

**Adam Stacoviak:** Yeah, I think this is all cool. I mean, obviously, I think when we zoom back out, we think Chris's response was "Okay, two years is a short timeframe in terms of alpha." I don't disagree with that. I think the mountain is daunting, but as you said, Chris, you're not coding it, so hey, you don't have to worry about that.

**Jerod Santo:** It's only daunting for Andreas, you know?

**Adam Stacoviak:** Right.

**Jerod Santo:** And he doesn't get scared of anything, so we're good.

**Adam Stacoviak:** This is his problem, not necessarily yours. And I suppose the team that gets hired, which is a small team now, and you're hiring at a pace that keeps an 18-month clip in the bank to have runway. But if you're thinking like a 10-year process, this next bet, if you do make a major native language change to the core code that's being written for Ladybird, it has to be the right one, right? So you want to -- as you said, the ship is pointing to a direction; it's pointing to Swift.

I think that was a cool process too, to kind of give that task to those who are daily writing Ladybird code, evaluate languages. Write something that you like and kind of report back, versus this other route. But it's kind of crucial, this next choice. I mean, it would kind of suck to be two years down the road and have to rewrite things because maybe Swift wasn't the right choice, or whatever wasn't the right choice. There's a lot of weight on this.

**Andreas Kling:** Yeah, which is why we've been taking so long, and we're still hemming and hawing a little bit... Because whatever we choose, we're going to be stuck with for a long time. There are other alternatives, but one that I like in particular is there's this guy named Sean Baxter, who is doing a weirdly heroic one-man effort to evolve C++. He has his own C++ compiler called Circle, and he has adapted the memory safety model of Rust to C++, and then built a compiler that shows that you can actually do this.

And he did it all himself, and he's been dabbing on people on Twitter, for lack of a better term, about how it is actually possible to do this... And he recently spoke to the C++ Standards Committee, showing them "Look, you say that this is impossible, but I did it. Can we talk about making C++ safe now?" And they seemed interested, but it's the C++ Standards Committee, so even if they're ultra-interested, this might get into a STDIN eight years, or something.

Who knows. So we want to ship something to users sooner than C++ can evolve, so we don't really have the luxury of waiting for that kind of thing.

And I think, as Chris was saying, memory safety is very important. It is unfortunate that this thing started as a hobby project for me to chillax, and I just wrote in C++, and then the whole thing snowballed, and we accidentally built a browser. And now we accidentally built one in C++, and we have to steer it towards safety. If I were to start over, obviously I would do it differently, but... We are where we are.

So what we have to do from my perspective is we just have to isolate the most security-sensitive parts of the program, where we're dealing with untrusted data from the network, stuff like that, and focus on converting those to a safe language first, and then over time other parts as well. And it's gonna be a daunting subtask of a daunting main task... So it's just more daunting, and... Who cares? We just have to do it.

**Jerod Santo:** Do you feel like you're treading water in the meantime, between now and this decision, and this eventual future? Because obviously, there's other things to be working on, but - would you want to go in two directions at once? You always have that deal of like "Well--" It's kind of like when you're waiting for the new phone to come out. You're like "Do I buy a new phone right now, or do I just wait until September? Because right now would be kind of a waste, and..." Are you having that in the meantime, before you pull the trigger?

**Andreas Kling:** No, not really.

**Jerod Santo:** Okay, good.

**Andreas Kling:** We're gonna be stuck with C++ for years anyway, whatever we do. Because we can't rewrite in any language fast enough that the alpha would be totally rewritten. So we're gonna have to just focus on converting the most important parts that we can, or the highest value items, where safety is valuable... And I guess there's also the part where using a safe language allows us to do concurrency. It's something that we don't really exploit very much in our browser. You may have 16 cores on your CPU, but we will only use one, because we are treading cautiously in C++.

Once we move to a safe language, we can do things in parallel and not worry about race conditions, and things like that. So that's an area as well, that we want to use a safe language to exploit. But I'm not at all concerned about having both languages in parallel. Reality is gonna be that way anyway. And we have tons of people just working on improving web support right now, and they're probably gonna continue working in C++ for the foreseeable future... And this is more of a long-term play to move to another language.

**Jerod Santo:** Awesome. Let's talk support. Chris, you kicked off the support, you and your family... There's also availability for sponsorship, there are some companies sponsoring now, your company as well is one of those... So can you lay out how the support will work, how it's working now, and how you hope it works down the road to get to this vision that y'all are building?

**Chris Wanstrath:** If you're listening to this, please donate to Ladybird.

**Adam Stacoviak:** There you go.

**Jerod Santo:** \[laughs\] Say more.

**Chris Wanstrath:** Yeah, I mean, we want it to be a nonprofit for a lot of reasons. One is that we want everything to be transparent, we want to focus on the development of the browser... But I think more importantly, we want this to be for the people using it. We don't want there to be corporate interest.

There's a lot of ways we could have done this. It could have been a startup. It could have been something privately funded. But I think it's really important that the sort of North Star, as VCs like to talk about, is building a browser for the people using it. And that's just not the case with any popular browser today. They all have different reasons for existing. They all have different things they talk about in their planning meetings and in their board meetings and whatnot. So it is important that we get donations from the people using it.

But like I said, I think my involvement is really to help get this thing started, and get the foundation in place, and get it going to an alpha... And I would love to see the support grow as more and more people are able to use it. I don't think we're going to have this massive amount of support this year that we can be able to hire all these people, because you really don't have something that you can use yet. But I think that there are people chipping in, which is super-helpful. They're going to help us get to that point. And once people can download this and use it, I think it's going to be a whole different game, and I think more and more people are going to be more willing to donate.

So yeah, I mean, that's really the plan, is to get us to the alpha, show that this is real, it's something you can use. At the same time, try to bring in more folks to help us build it, and then make it a real nonprofit.

**Jerod Santo:** Who can use it today, Andreas? Is it people who are literally working on it? Chris, do you have it on your machine? I mean, is it even too early for Chris Wanstrath, or...?

**Chris Wanstrath:** I build it. I check websites in it. I check all my websites in it. I'm not using it as a daily driver or anything, but it builds on Mac, and you can definitely -- I mean, it's actually shocking how much you can use it. I will say, anyone using it will notice it crashes a lot, but in terms of what renders, it's kind of amazing how far it is.

**Jerod Santo:** Nice. Andreas, who should try it out this early? Developers only, early adopters, enthusiasts?

**Andreas Kling:** Definitely developers, and perhaps anybody who's curious about what a pre-alpha browser looks like. But if you try to use it as a daily driver, you will be completely disappointed very quickly. But if you are any kind of software developer, please use it. Please disappoint yourself, and then get interested in fixing the thing that disappointed you.

**Jerod Santo:** There you go.

**Andreas Kling:** Because it is actually really easy to get started. And Chris will tell you that it's really easy to build as well. I never had to help him build it, or anything.

**Jerod Santo:** Nice.

**Chris Wanstrath:** I have internal projects at unlaunched startups that are harder to build than Ladybird. And that is the truth.

**Jerod Santo:** There you go. That's a vote of confidence.

**Adam Stacoviak:** Yeah. The docs under the build instructions for Ladybird seem pretty clear. I mean, you've got a clear path, at least for macOS, which is probably a large population of developers. Obviously, Linux is a large population of developers as well, but... I'm just reading through the build steps and the process to get even a macOS system in place to be able to do a build... And it seems pretty straightforward. Now, I have not done it, but it reads well. So maybe it performs well in the build process. I don't know.

**Jerod Santo:** There you go.

**Adam Stacoviak:** I mean, that's kind of half the battle. It's like getting to a place where you can have people build it even on their own.

I suppose, even though there's an alpha stage for two years from now, what is the allergy to providing some version of even early pre-alpha releases? What's the allergy to at least providing maybe a slightly easier path than go build it yourself?

**Andreas Kling:** It's the observation that when you do that, you get a lot of low-quality, unactionable bug reports. More of that than anything else. And it is, I would say, kind of not fun to have to tell people "Yeah, I understand that that website you tried doesn't work. I'm sorry, it's a pre-alpha. Thank you for reporting the problem." And then you have to do that like 20 times a day. And we get one chance to make a good first impression, and I would prefer that we don't make that first impression today, because it's not gonna be great.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** The impression today is the mission, not the artifact.

**Andreas Kling:** That's right.

**Adam Stacoviak:** The artifact a year or two from now will be far more polished, far more impressionable. Whereas the mission, I think a lot of people will align with, which is why I kind of began the conversation with the why. Because I think the why is what attracts. We all get it. It's a browser.

**Jerod Santo:** At this stage.

**Adam Stacoviak:** Right. And I think the why is super-attractive, because being frank, Chris, you bring a great name to the table. Your pedigree and what you've done for software developers forever is amazing. Creating GitHub is a big, big deal. Leading GitHub to where it's at today is a major deal. And you've thrown your hat in... And I think it's the first time I've seen you in public. I've seen you on Twitter/X, but like you've even put out a video to throw your hat in the game. To me that's a big deal. So like the why and the perspective of "Hey, look at Ladybird", I think has got a nice spotlight on it.

**Chris Wanstrath:** Yeah. You know, I'm not an angel investor. I don't do a lot of things. And so the things that I do, I wanna make sure they're really meaningful to me, and that they're gonna be meaningful to other people. Because - yeah, I just feel like this matters, and it's important, and it could be big. And even if it's not the biggest, it can have a really big impact. So that's why I wanna be part of it. But yeah, I'm very selective with the things I get involved in. You will be seeing more of me in public over the next few years, I will tell you that... But this is definitely something where I'm just excited about it.

**Adam Stacoviak:** I've gotta imagine that even just your life, while the turnout for you has been, let's just say well above amazing, it took a toll on your mental health, your personal mental runway, your ability to show up, and you wanted sort of like retract and steep yourself into all the things -- like you had said, you were CEO-ing, you weren't able to daily code as much as you'd like to. I've gotta imagine that was a great thing for you to sort of step away, unplug from the system, so to speak, kind of re-immerse yourself in things that matter to you... And obviously, like I said, this is the first thing I've seen from you, your video for Ladybird, since I think maybe on stage with Satya, or that video with Satya announcing the GitHub acquisition. That was -- it's been a bit. That would have been June, 2018.

**Chris Wanstrath:** Yeah, are you asking me if I have post-traumatic stress from the GitHub experience? The answer is yes. It's a resounding yes. \[laughter\] And not to get too much into this, but it's one of these things where -- the role I was in as CEO, especially at the end \[unintelligible 00:57:36.14\] there's a lot of anxiety with that, because there's so much uncertainty, and you're trying to do the right thing, and you have all these competing sort of interests from the board, to the employees, to the users, to the different types of customers... And if you're not a super-secure person, that can be really hard. And I was steeped in insecurity, because in my mind, I'm a programmer, I'm a product person. And making this transition to CEO - it was a new thing for me, even though cumulatively I'd done it for over eight years there... It wasn't how I thought of myself. I thought of myself as a programmer, as a product person. So there was a lot of anxiety at the end. And I thought the day that I handed the keys over to Microsoft, the next day, the anxiety would be gone, and my mental health would be fixed. And that's not true. Anyone who's gone through this knows. You build up these habits and you start feeling anxious about other things.

So for me personally, I think I had to go through almost like a self-care period of figuring out how to be myself again, figuring out what mattered to me... Honestly, my email was Chris \[at\] GitHub for 11 years. And then all of a sudden, I don't have that email address anymore. So there's a lot of my identity tied up in being one of the GitHub people, being the GitHub guy.

So yeah, I wasn't sure what I would do after. And I certainly knew I wasn't gonna do enterprise productivity software or anything related to venture capital, San Francisco tech world ever again... But I just went back to what I love. And I love programming. I love the web. I love games. I love working with creators. I love helping prop other people up. And so a lot of what I'm doing now is in the world of game development, working with game developers, working with programmers there... But something like Ladybird - I mean, it's exactly what I'm interested in. It's exactly what I wanna be a part of, and it's exactly what I wanna see in the world as a consumer.

And having the success of GitHub and being in this position where - yes, I think we did a lot of things to make it successful, but we were also just like ahead of a freight train. I mean, it got so much bigger and better than I could have imagined... I feel like I have to sort of pay it forward. And it's my responsibility now to use some of my success and resources to help make other projects thrive. And Ladybird is one of those.

**Adam Stacoviak:** That's good to hear. That's a good sentiment, too. I think that -- I wasn't sure, really, how deep the PTSD might go.

**Chris Wanstrath:** Very deep.

**Adam Stacoviak:** From the outside, people think "Oh, money solves problems", right? Because I'm sure you got a nice paycheck from all of your hard work, which is what you're suggesting here. You're taking your resources and things like that, and even your donation from your family towards this nonprofit. And even putting your work into it and your name into it. Like, that's part of it. But I think you can probably agree that money doesn't solve all the problems. You still have that sort of inner -- I don't wanna say like ego in a negative way, but like this ego in terms of like who you think you are, what you think you can do. Now, I would just say maybe you can just resurrect Logical Awesome and kind of go back to that email address, I don't know. Versus --

**Jerod Santo:** Or air the blog, dude. Air the blog.

**Adam Stacoviak:** Right.

**Jerod Santo:** Bring it back, Chris.

**Adam Stacoviak:** Go back to your roots, potentially.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** But I do agree. Chris \[at\] github.com was part of who you were, and losing that was a change.

**Chris Wanstrath:** Definitely. I started GitHub when I was 22, and when I left I was 33. And so it's just a huge chunk of my life, and a huge chunk of my growing up. I mean, I don't know why anyone would listen to a 22-year-old CEO at this point, but that's what happened.

And yeah, I mean, money does solve a lot of problems, but at the end of GitHub, I didn't have money problems. I already had a bunch of money, you know what I mean? So my problems were not problems that were gonna be solved by an even larger paycheck, as great as that is. It was mental identity, sort of those sorts of anxiety problems. And yeah, more money doesn't solve those. In fact, it can make those problems worse.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah, because being alone, you're -- in quotes. I'm putting air quotes. You could be alone and you're crazy with a bucket of cash, and just freedom to do whatever, and that can be very...

**Jerod Santo:** Destructive.

**Adam Stacoviak:** Yeah, very destructive. Great word, Jerod. Yeah, very destructive.

**Jerod Santo:** Glad to see you dove back into the code, and now you're making video games. That seems like the perfect solution. I mean, maybe that's probably what I would do. I'd write some code and make some video games.

**Chris Wanstrath:** I mean, coding's fun.

**Jerod Santo:** Yeah, totally.

**Chris Wanstrath:** It just is. The act of it, making ideas become real... I'm not a person who paints, I'm not that kind of artist, but I feel like when I hear people talking about painting or something like that, it's therapeutic to them, you know? It's something that you can work on for a long time, maybe sometimes two years, and you appreciate the process and you appreciate the end result. And that's what coding is for me.

So I like working on toys, but I think -- the other thing I identify with Andreas is, you know, Serenity is a great project, but ultimately it's sort of a hobbyist project. It doesn't have this sort of "take over the world" end goal. It doesn't have this goal of even, I think, being used by tons of consumers, or replacing anything... It's really for knowledge and community and fun. Whereas Ladybird's a little bit more serious, you know? And I think people are drawn to something like that. You're drawn to something like that as a creator, to feel like what you're doing every day is gonna matter and make a positive impact in the way you can. And I'm as drawn to that as anyone. So it's one of the reasons that I've been working on a -- not just games, but a game creation platform. Because it's fun to work on open source projects with an anonymous GitHub profile, but it's even more fun to build something serious, that lots of people can use, and can help them achieve their goals.

**Jerod Santo:** Are you still anonymous on GitHub? Or are you also -- have you come out, "It's me"?

**Chris Wanstrath:** Well, a couple people know. I made a couple of friends through that. Probably it was the first -- you know, it was the first pull request I ever sent, that the person receiving it didn't know I was one of the creators of GitHub. So that was an interesting experience, to get into these communities. And I will tell you, being a part of GitHub, being a part of seeing customer support, hearing lots of complaints, and hearing what people don't like, and where they want you to go, a lot of the community is very welcoming, and it's very positive, and it's very inclusive. And so maybe it's part of my mental health struggles and I was focusing on the wrong things, but when I first sent my first pull request as an anonymous person, they were just overjoyed to have a contributor. And it was a community I got pulled into...

So I made a lot of friends that I eventually pulled off the mask and told them who I was. But now I'm not really contributing to open source presently. Everything I'm doing is closed source, a lot of it with the intent to become open source in the future. So I'm basically not sending PRs to random projects right now.

**Jerod Santo:** Gotcha. So I love that you're putting so much behind Ladybird, but I wonder with your coding chops, why don't you throw in? Why don't you ask Andreas if he needs any help? Why don't you get in there and get in the action?

**Chris Wanstrath:** We've talked about it. I mean, I've done a ton of programming languages as hobbies... I did the Crafting Interpreters book, and building an interpreter in Go, building a compiler in Go... I did the MAL, M-A-L project on GitHub, Make a Lisp, where they just give you tests, and they give you the Lisp file, and you implement the Lisp in your own language and get them to pass... I did the From Nand to Tetris course that's available online. That was the thing I put a lot of time into. And I've made just tons of programming languages that are like 40% to 20% complete. \[laughs\]

So the JavaScript stuff they're doing really interested me, but I just -- there's a lot of responsibility. If I'm programming for fun right now, I'm making a game that no one's gonna play. That's sort of where I'm at.

**Jerod Santo:** Right. Well, Andreas, it's a lot of responsibility. I mean, you were making a toy OS, but now you're making a serious browser. I know you're not daunted, but the rest of us might be.

**Andreas Kling:** Sure, yeah. But it's also really familiar for me, because I was a professional browser developer for most of my adult career... So it's really like going back to something nice and familiar, and just running a victory lap almost, in a way... But it's a very long victory lap, because we have to build the whole thing. But yeah, it just feels good to be back in that business. And the fact that I've been able to build a community of people around it as well is super-cool, I will say. And I do always want to give credit to the people who have been developing it with me, because it certainly hasn't been a one-man effort.

I sometimes read about myself on the internet that I'm doing "a heroic one-man effort to build a browser." And it's very tiresome, because there are over a thousand people who have contributed to the repository on GitHub. So I just want to call out and say that it's super-cool that I've been able to get all these people interested in browser development just by sheer force of my enthusiasm for the field, in some ways. And even Chris was drawn into it in some way. And I think it's a beautiful thing that GitHub enables. So it's just a nice synergy of things.

**Jerod Santo:** Yeah. Well, I'll say Andreas, you have a nice kind of tractor beam effect, I think. You just naturally pull people in with your -- maybe it's just your relaxed ways, but also your skills and your applied work, and your ability just to continuously show up and toil away at minor things that build into bigger things. I think that's very laudable and admirable.

We keep talking about this 2026 alpha, and I keep wondering, "Well, what does that even look like?" Have you defined what an alpha looks like? I know there's test suites that you can try to get 200% on with the specs and stuff, but is it like "X number of websites will render without crashes", or is it just like "The time is up. We said 2026, we have to ship something"? What's that alpha gonna be defined as?

**Andreas Kling:** So we have a giant document with things that we want the alpha to be able to do. And the document is too large at the moment, we have to whittle it down a little bit... But a large part of the document is a list of websites that we want to work, and sort of what we want these websites to be able to do. So you have things "I wanna be able to go on Facebook, and make a post, and like somebody else's post." And then you also have things like "I want this benchmark to have this score at least." It's just a mix of things that we kind of believe will together form a useful browser. But it's a really hard problem to decide what makes a useful browser, because everybody out there uses a slightly different set of websites every day. I'm sure that we all check a couple of ones that we all have in common, but then one of us goes to a Taiwanese basket weaving forum that nobody else goes to. And then that has to work for that one person. And for the alpha, we are focusing on the things we have in common, I'll say that. But it is probably the case that our own developers will just naturally test with their own favorite websites... So a lot of random things will be in there as well.

In terms of performance, that's probably the area where we are going to do the worst. What we are primarily focused on at the moment is compatibility. We want to be compatible with a large number of websites and use cases where you can do your daily tasks. And if we are slow at that, but it works, we're gonna probably still go ahead, because compatibility right now is the name of the game. There are just so many features that we have to figure out how to implement. Getting them to go fast is not gonna be terribly complicated once we have everything in place. It used to be my main responsibility when I worked on Safari for six years, was like "Make it go fast." And I know most of the tricks that you do to make a browser go fast. And we haven't done any of them yet. So that's just a task for the future.

So compatibility and stability... And then there's also an issue that I know is sensitive for a lot of people, which is just automatic crash reports or telemetry, which is something that we want to be extremely careful with, because not everybody wants to have their browser send usage statistics and whatnot to other people over the internet. So it's something that we're going to be taken very seriously, and not mislead anybody about our browser like being completely private if it does indeed send some kind of usage statistics. That's one of the main things I've heard from people about, that they're worried about, that the browser would phone home. I think that's -- yeah, it's a sensitive issue for a lot of people. And I know from working at Apple that telemetry can be tremendously useful, because Apple gathers a lot of telemetry about how Safari is used, and then that is used then to prioritize work and learn about which websites might not be working right, things like that. But they have the advantage of scale, which we don't have. So they can do this thing called differential privacy, where they sort of use the sheer number of users to anonymize using statistics. And then Apple actually never learns which websites you looked at, and they are still able to gather actionable data. We're not gonna have that, but I think that we will be able to find something and then we will be honest about how that works, and give people the option to enable it or not.

**Break**: \[01:11:23.22\]

**Adam Stacoviak:** Are either of you guys a fan of the movie Click from Adam Sandler?

**Andreas Kling:** I haven't seen it.

**Adam Stacoviak:** Chris, I know you're a fan...

**Chris Wanstrath:** I've not seen it.

**Adam Stacoviak:** No?

**Chris Wanstrath:** Never seen it.

**Adam Stacoviak:** What?! No way...

**Jerod Santo:** I've seen it, but I don't like it... No, I haven't seen it either. I do know that it's the one where he can change the channel and it changes his world, instead of the TV... Right?

**Adam Stacoviak:** This is a left field type of way to open it up, but it does land, I promise. So I'll paint a plot picture for you, just briefly, to set up the question. So Adam Sandler's character, Michael Newman, he goes into this store... Christopher Walken is the opposing character, that shows him this magical universal remote that allows him to control time. And he essentially gets to fast-forward through things, whether they're bad or good. And the question really is, if you had this click remote and you can fast-forward past this daunting next few years, or the hard parts, to the five-year mark of Ladybird being out there... It's almost a magic wand, and you can wave this magic wand, what would the browser world look like with Ladybird being available, polished, amazing, all the things, whatever your dreams might be? And why would people choose or care that Ladybird exists?

**Andreas Kling:** So my hope is that we can make something that some people just love to use. It doesn't have to be the best browser, or the fastest, or the fanciest, or any of those things. We don't have to beat Google and Firefox. But it will be something that some people just gravitate towards, because they like that indie spirit of it, they like that it's independent, they like that it's user-first, let's say, truly user-first... And they just vibe with our mission.

And I would love it if the browser is almost like a generic thing, that just -- it's just a browser; you don't even necessarily know that it's Ladybird that you're using. I think at least one of my parents refers to the browser as the internet, not by its name... And I think that's pretty cool, if somebody would refer to Ladybird as the internet. Kind of like how you buy a hammer, and you probably don't know what brand of hammer it is. If we can make a browser that allows somebody to access the web without even caring what the browser is, then I would say we've done a good thing.

One thing that happened with Firefox when that came out was that tech people got super-excited about it. And I was one of them. Chris was one of them. He even paid to be in the newspaper, promoting it. I was so excited about Firefox 1.0 that I told everyone in my family that "We're gonna use Firefox now."

**Adam Stacoviak:** Yeah, that's right.

**Jerod Santo:** Same.

**Andreas Kling:** Yeah. And I would love it if we can do something similar with Ladybird, where it's something that tech people get excited about because they understand what we're about. They understand the mission, they understand the value of a totally independent browser. It's like this independent implementation that doesn't have any loyalties to the advertising industry, and all of this good stuff... And then they can go and tell their families, "Hey, we're a Ladybird family now." And then all those family members will go on the internet with Ladybird. That's what I would like to achieve. Chris, how about you?

**Chris Wanstrath:** I'm most looking forward to the blockchain integration and the AI-powered features, I think...

**Jerod Santo:** \[laughs\]

**Chris Wanstrath:** That's what I'm looking forward to.

**Andreas Kling:** Right. We forgot to talk about those...

**Chris Wanstrath:** Yeah, no, it's gonna be a huge part of it. And then the in-browser monetization scheme. Look, I'm not a browser power user. I just use the browser that seems the fastest and the most stable on my machine. I don't have a ton of plugins. The only plugin I swear by is the one that prevents websites from disabling paste, because I have to use a lot of bank and HR software websites, and they always try to make you type in numbers by hand, and that drives me nuts.

**Adam Stacoviak:** I hate those things. My gosh.

**Chris Wanstrath:** So for me, if it's lightweight, if it's stable, if it's fast, I'm switching to it immediately. And I just haven't really found that in a browser today. And I think the privacy concerns are real. I think they're getting worse. And so if I can use a browser where I trust the code and what the vendor is doing with my information, that's really appealing to me. But personally, my needs are very simple, and it would be very easy for me to switch from what I'm using today to something new.

**Jerod Santo:** What's your daily driver right now?

**Chris Wanstrath:** The internet. Actually, let me check. No, the internet. Yeah, I just use Chrome.

**Adam Stacoviak:** Surprising. That is a good base, really... Just a browser that works, that cares about your privacy, that is independent, that has this nonprofit aspect to it... And I think the nonprofit aspect means that you don't have ties, like you had said, to the advertising world, or these loyalties that are in basically every other browser world.

I think being called the internet is kind of cool. I think we all got behind Get Firefox when it was getfirefox.com. I think that was the domain for Firefox for the longest time, right? That's pretty cool. I think that's really admirable.

There's things I think people care about too, beyond that. I'm a Pi-hole fan, a network-level DNS blocker. I think there's new services out that you can tap into, that -- we have a Slack community. There's like 7,000 people on our main channel. There's always conversations about homelabbing, and TV shows, and sci-fi books, and coding, obviously... But one thing that was mentioned there was like different DNS privacy services. Is there room in this world, or care in this world for Ladybird to kind of at the browser level - maybe not like local DNS level, but like browser level, to protect people's privacy? Because I feel like every browser out there somehow violates this privacy.

**Andreas Kling:** I think there's room for a lot of interesting privacy features, and it's certainly an area where we want to innovate. But at the moment, we don't exactly know what that picture looks, because we're so caught up in just the compatibility with random websites... So we haven't really differentiated in any interesting technical way yet. But specifically to your question about DNS privacy, that to me feels like something almost like extensions could provide, as long as you give extensions a way to provide that. And I don't know exactly how that would work technically, but we can find a way to make that work.

**Adam Stacoviak:** I suppose less like how can you do it, but more like is that part of your motivation, too? Because if it is, in quotes, the internet, then people go there expecting it to be the internet. And you've got tech users who will get Firefox installed on their random friend's computer, or mother's, or whomever's computer, because "Hey, it's got tabs, and it's better", which is what we said 15 years ago or more, when we were all excited about Firefox. If you want that same thing to be transplanted, or a version of it, then those people may gravitate towards it if it inherently has privacy related features like that, that protect people from when they use, in quotes, the internet, they're always protected. Is that a motivation, I suppose, more than just can you implement it?

**Andreas Kling:** I would say I'm keen on the idea, as long as that doesn't mean that we suddenly get all that information. I wanna make sure that we don't become a middleman in any kind of privacy scheme, because I feel like that's not a responsibility that we should have, nor should anybody else. But if there's some sort of decentralized scheme that allows private access to DNS, or private access to whatever you need through your browser, I would say that's very interesting for us.

**Adam Stacoviak:** It's almost like a built-in mesh net. I mean, I have no idea how this will work, so I'm literally just throwing buzzwords out, so forgive me... But it's almost like you have this inherent mesh net behind it. Almost like Tailscale, but it's always pointing at a DNS that's safe. And if that DNS -- if the logs go to dev null, then hey, you're protected. To some degree, you could just point, "If you're using this browser, we're pointing you to this DNS. You can opt out of it if you want, and you can go into the settings. But by default, this is how we do it." And it's maybe a feature where you promote that, and you say "This is who we are, and this is what we do", and the logs just go to dev null. But you've got safe DNS that doesn't log you, that's just built into "the internet".

**Andreas Kling:** Defaults are tricky.

**Adam Stacoviak:** Well, features are defaults though, aren't they?

**Andreas Kling:** Right, but what I'm thinking here is maybe the right thing to do is just offer the user a choice on first startup. We explain as non-techie-friendly as we can, "Please choose your way of accessing DNS. Would you like your things to go via this trusted thing that will throw away all of your requests? Or would you like to use your home network's default setup, or whatever?" I'm very wary of choosing anything for the user. I think that's sort of where the browser industry went wrong in many ways, that they've discovered that they could monetize certain defaults... And it's a billion-dollar industry where people sell browser defaults. Actually, just in the last couple of days it was determined to be an illegal billion-dollar industry. But that is a whole other story.

**Adam Stacoviak:** Yeah.

**Andreas Kling:** So yeah, I'm a little bit scared of that... And we are trying to be very cautious with defaults, and not promoting any kind of service over any other.

**Chris Wanstrath:** I will say though, right now a lot of the emphasis and thinking is around the alpha and getting out a browser. There's a world where when this is released, we are thinking about marketing, and we're thinking about positioning, and we're thinking about maybe not what the default features are, but what's the mode you turn on, or what's the premier extension? A lot of times an extension is almost like a killer app; a reason to switch to something. And for me, the privacy stuff is super-important. I think it's only gonna get worse in the sort of LLM world that we're in right now, and the tracking... And so I think people are going to gravitate towards whatever keeps them private. And selfishly, that's what I want. I'm happy -- in terms of ads and stuff like that, I pay for YouTube premium. I might be one of the only people on the planet. I pay for Apple Music. I'm happy to pay to turn off ads. But the general searching of the web and the tracking and the fingerprinting and things like that - it's just awful. So if we can offer a private mode or something different than incognito mode, that you could opt into... Apple recently did this with the private relay, where "Do you want to turn this on? We're going to run all your traffic through our servers and anonymize it", and that sort of thing. What you're going to get is a little bit slower browsing experience.

I think that in the future that's definitely a conversation we can have, about what to offer, what sort of packages that there are, what sort of extensions we promote, and how we distinguish ourself in the market towards regular consumers. And for me, I'm definitely going to push to at least have privacy extensions developed, and made premium, and kept up to date, because that's what I want.

**Adam Stacoviak:** That's why I asked that, because I asked you about the click remote, and this perfect world, this future five-year -- I'm assuming five years, is like some version of iterating towards a perfection world, where you've got a browser with features that you are marketing, you have a message, you've got features, and like you mentioned, premier/premium extensions that you want to have, not so much as default, but they are promoted as like "This is what we think is the best to use. Obviously, choose your own, but this is what we like." Or we've developed it native, in-house, and this is opt-in, as an extension always is... But it's this world where you care. Because if you're this nonprofit that is independent, that is untethered, unloyal to the privacy tracking, fingerprinting folks, then you have the option and the possibility of being the default, simply because people want privacy, and they don't want to be "private", they want to literally be private, and have their privacy. And I think there's a lot of quoted privacy out there.

I think Apple's main brand really is around privacy, but there's a lot of things they do as well that doesn't always lead to privacy. And it's the nature of the beast when you're that big, really, and you have different motivations financially, or product-wise; it's just how it works.

**Chris Wanstrath:** Absolutely. And one of the awesome things about Ladybird is Andreas is a great leader and has a vision and can make hard decisions, but he also really listens to the people, the contributors, the people that are building it and the community. He said he's frustrated that he gets all the limelight... Well, they're not only building it, they're giving advice and opinion, and he's taking that into consideration.

And so what this is going to look like post-alpha, in five years - we can't know, because it's going to be shaped by people who haven't even sent their first PR yet. And so really a lot of it's going to be like "What do the people building this care about?" and that's where we're going to shine the light. And I think that's an awesome thing. And it means like it's a good thing for the future when the people building it, the people most invested are the ones shaping it.

**Jerod Santo:** Yeah. Which - I think right now is a great time to be talking about it to our listeners specifically, because we are the people who can help shape Ladybird for the future. Whereas if you were talking to a more mainstream -- you can't say "Go download it today and give it a try." Obviously, two years from now, five years from now, you go on other shows and you maybe have marketing pushes towards the mainstream audience, who can just use the browser... But right now what you all want, and what we all want are awesome builders to help Andreas build this thing.

**Adam Stacoviak:** Yeah. Next Wednesday we're going to tap a ton of developers around the globe with this sentiment.

**Jerod Santo:** Don't let us down, y'all. Get involved. Andreas, where do we send them? Where do we send them to try it, to talk to you, et cetera?

**Andreas Kling:** Right. I guess come to ladybird.org, and read more about it. And really, if you are a developer, just - you can go straight to github.com/ladybirdbrowser. That's where you'll find us. And as Chris was saying, we are a project where everybody has a voice, and there is room for all kinds of developers. We're welcoming new people every day. It is dizzying sometimes. I go look at our Discord server and it has 50 new people since yesterday... And people are just really excited to be working on this. And you could be one of them. If you've never worked on a browser, that's fine. This'll be your first browser that you worked on.

And with regards to your click remote, I will say that I would never press that button, because we are currently living in the good old days, and I wouldn't trade that for anything.

**Jerod Santo:** Well said.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Says the guy who loves the toil.

**Andreas Kling:** That's right.

**Chris Wanstrath:** I will say that when we were starting GitHub, we were using Braintree. And so now we're in the world of Stripe. I bet someone could have started a new online business during this podcast. But we had to give them a bunch of our business information, we had to apply in order to accept credit cards. And we launched into beta in January of 2008, and the site was basically ready in March to go live. And for us, that meant charging money. But we weren't approved by Braintree, and we didn't get approved until April, which is why we launched on April 10th. And that gave us some time to do some polish, and we had three new features that came out: the network graph, commit comments, and services. But we did those because we had time.

But the point of the story is from March until April, I wanted that damn clicker every day. I just wanted to fast-forward to the launch, and go into cryo sleep, and be like "Is this thing gonna work? Have I wasted the past six months, or is this gonna be what I think it's gonna be?" That was the only real time in my life I just wanted to go to sleep and wake up a month and a half later.

**Jerod Santo:** There you go. Well, you survived it. You lived those 45 days, and --

**Chris Wanstrath:** Somehow...

**Jerod Santo:** ...it all worked out anyways. And you got three new features out of it.

**Chris Wanstrath:** Yeah. Commit comments, which - I don't know if people remember the OGs well, but before pull requests - because pull requests weren't there at the beginning in the form we know them today - the only way you could do code review on GitHub is you could go to a commit and then you could comment on a specific line, which was groundbreaking. It was groundbreaking at the time. No one had done it that way, and I came up with the idea because the Django book, the Django documentation was online, and they let you leave comments on each paragraph. And so I was like "Wouldn't that be amazing for a commit to be able to do that on lines of code?" So we did that, and then that evolved into pull requests, and now you can still do that on pull requests today. But that was -- I guess the lesson there is just steal everything. In some ways that was an original idea, but in many ways that was not an original idea.

**Jerod Santo:** There you go. Well, probably somebody else thought of it before the Django folks. They took it from someone else, you took it from them... That's just how the world goes around.

**Chris Wanstrath:** Absolutely.

**Adam Stacoviak:** That's right. Steal everything. You heard it here first. And I suppose that those who are trying to sponsor/donate, the same call to action: ladybird.org. Find a button to donate, find a button to sponsor... You're keeping all these sponsors unrestricted... They don't get board seats; you can't buy a board seat. There's no direction that you can purchase. You can simply support and be promoted as someone who cares about supporting Ladybird. That's the whole purpose of a sponsorship; it's not buying a board seat or getting power, and having the clicker.

**Chris Wanstrath:** No. Your money goes directly to caffeine that goes into a programmer that produces code. That is exactly where the money is going right now.

**Adam Stacoviak:** Okay.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Well said. What's left unsaid? Anything else left before we call this Ladybird show a done show?

**Chris Wanstrath:** If you are interested in building video games, now or in the future, or if you've tried it before, and like many of us have realized it is not as fun as building websites or building browsers or building servers, go to void.dev. That's the website. Put your email in, and I will email you either later this year, or early next year with something that I think you'll enjoy.

**Jerod Santo:** A shameless teaser style promotion. Those are the best kind. Love it. Void.dev, we'll throw that in the show notes as well. Andreas, anything from you before we call it a day?

**Andreas Kling:** I will take this opportunity to promote my wife's music.

**Jerod Santo:** Okay.

**Andreas Kling:** She is Katalin Kult on YouTube, and Twitter, Spotify, all of these places... And she makes ambient music in the room next to me, and I'm living in this relaxing, chilling soundscape all day, every day, and it's very, very nice.

**Adam Stacoviak:** There you go.

**Andreas Kling:** Programming music being made live next to me. And now you can listen to it, too.

**Jerod Santo:** Can you send us a soundbite and we can play it as the outro?

**Andreas Kling:** Absolutely.

**Adam Stacoviak:** This is Adam here in post... Stay tuned after the Plus Plus teaser for Cozy Lo-Fi from Andreas's wife. The track is called Ghost Whiskers.

**Chris Wanstrath:** I have one more. I don't know if people know this... You probably covered it last time, but Andreas also has a YouTube channel. And I think this is one of the things that makes him a good community leader, a good open source leader, is he's not just in the comments, in the issues. You can hear his thoughts, you can watch him program. You can watch him do the most boring things sometimes. But I've watched so much of him converting, adding JIT to the LibJS, and just like emitting assembly with the C++ API... And it's really cool. It's really awesome to watch. I don't think you do it anymore, but he used to have this commuting car series where he would be in his car, and just share thoughts, answer questions... And so for me, coming from the world of blogs and everything being texted on Twitter, and then you saw people at a conference, it's really awesome now to see programmers talking, and over video, and watch them code, but also hear their thoughts... It's definitely one of the things that drew me to the Serenity Project, was getting to the context around it, and hear the way he was thinking about it. So check out his YouTube channel.

**Andreas Kling:** Thanks, Chris.

**Adam Stacoviak:** That's interesting to share. Definitely had the YouTube link pulled up. It's @awesomekling on YouTube, so same as anywhere else, @awesomekling. We'll link it up in the show notes, for sure.

**Jerod Santo:** Alright, guys, thank you so much. This has been a blast. We are very excited, and we're counting the days. Give me that clicker. I'd skip ahead and see what Ladybird looks like in 26, but...

**Adam Stacoviak:** ...and then come right back.

**Jerod Santo:** I don't want to steal that from Andreas. I want to let him have his moment. But we appreciate you guys coming on and what you're working on.

**Adam Stacoviak:** Yeah, thanks guys.

**Andreas Kling:** Thanks, indeed.

**Chris Wanstrath:** Thank you. Yeah, we'll see you in two years?

**Andreas Kling:** I guess so... \[laughs\]

**Break**: \[01:35:19.29\]

**Jerod Santo:** github.com. Land on a repo page, right? Pjax, probably beloved by you to this day, right? Pjax, was that your creation? I believe it was.

**Chris Wanstrath:** That was me.

**Jerod Santo:** That was you. So this is the way that you can navigate pages without actually reloading the full page. DHH and Rails ended up pulling it off as Turbolinks. The concept, obviously. I don't know if they took the code or not, but this was how GitHub worked for a very long time. You would click on a file in the repo, and it would slide in from the side, and it would not reload the page... And it was like pseudo single-page app, but it was not a single-page app. It was like a multi-page app. That's what they're calling them nowadays. We just called it a website back then. But now they're called MPAs.

But recently, they're rewriting... I don't know if you've noticed or if you paid attention, but they're rewriting the frontend in React. They're changing the way things work. And I'm just wondering if you have feelings about that. I think that it's kind of sucky right now. It's buggy, and... I don't know if the Pjax stuff is gone-gone, or it just feels like it's gone, because I haven't paid that close attention or inspected elements or anything. But I do know that the React rewrite is underway, and I do myself feel like it's got some issues. But I wonder if you pay attention to those details now as just a user, or if you try to ignore that kind of stuff... Your thoughts.

**Chris Wanstrath:** So if we were at a conference, I would repeat the question. So the question is "Do I think GitHub sucks now?" \[laughter\]

**Jerod Santo:** No, that's not the question. Specifically, the part that I'm talking about.

**Chris Wanstrath:** Specifically the frontend innovation of mine that they rewrote... I will say this.
