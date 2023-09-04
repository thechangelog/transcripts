**Jerod Santo:** Well, we're joined by Andreas Kling. Maybe you know of AwesomeKling on the internet, maybe you've heard of SerenityOS, maybe you've heard of Ladybird, maybe you haven't, but we're here to hear about all those things and more. Welcome to the show, Andreas.

**Andreas Kling:** Well, thank you.

**Jerod Santo:** This is a listener request, anonymous, they would like to remain anonymous, but I have to say probably not even the first time somebody said "Please talk to Andreas about SerenityOS on the podcast. So a couple of our listeners have been begging, dying for this particular episode, so your reputation precedes you.

I'm just taken aback by what you've taken on. I think Adam and I both agree with this... We were talking about this conversation yesterday, and we were both kind of like "Wow, an operating system and a web browser that runs on said operating system, I'm assuming... That's a lot to take on. Why? I think, Adam, I'm stealing your question. You're like "What I want to ask him is why?" and I was like "Dang it, I wanted to ask him that, too." So we both are asking you why, why are you doing this?

**Andreas Kling:** \[00:05:52.04\] Right. Well, it's a long and complicated story, but... I used to work on web browsers at Apple for many years, and at one point, I quit, and I didn't really know what I was going to do with my life, and I ended up doing drugs with my life. And that was not a very good life. It eventually led to me going to a rehab program, and when I came out of there, I found myself with so much time... Because when you do drugs, they tend to take up all your time; and then you stop doing them, and then suddenly you have nothing but time, and it's really, really strange how many hours there are in a day. I'd never thought about that before, but I really felt it then. And I wanted to just find something to fill my days with... And I kind of tried a bunch of different things. I tried to go to a literature class, and I wanted to learn some new profession, but I just ended up programming after a while, and I kind of started skipping my English literature classes, actually, because I was working on programming stuff instead. And yeah, it just quickly fell back into programming, which I had always loved.

I had a couple of things that I always wanted to do as a programmer, but never really engaged with properly... And one of them was building my own operating system. Because I think that's one of those things that everybody who programs, at some point at least, thinks "Well, what if I made all this stuff myself? How would that be like? Wouldn't it be cool if my computer had my operating system?" I don't know, it's just like an idle daydream I think everybody has at one point. And I was really just so desperate for something to fill up all my time. It's hard to explain for people that haven't been in that situation, but suddenly, building an operating system seemed like maybe that would take up some of that time.

**Jerod Santo:** Yeah. Lots of it, probably.

**Andreas Kling:** Yeah, so I just kind of started poking at it. And I didn't feel inhibited by the hugeness of the task in the way that you normally would. And it became kind of a therapeutic project to keep me busy, and keep my mind off of falling back into drug habits, and just do something wholesome with my time. And it was just me hacking away, in a little cabin, by myself, that I had -- I had rented a little place outside of town for a while just to have somewhere to stay, give everybody a break from myself, and just sitting there working on this... And after about six months or so, I made a little video about it, because that was when my rental agreement ran out on that cabin. And I thought, "Okay, well, I've gotta leave this place where I've built this thing. I'll make a little video commemorating what I managed to do." And I posted that video to YouTube, and I think the next day somebody had posted it to Hacker News. And people were, I guess, impressed with the level of detail I had managed to squeeze into this little thing in a fairly short time.

Looking back on it now, it's like incredibly primitive... But of course, at the time it didn't feel that way. It felt like an amazing thing, because it had a GUI, and networking, and I could log on to IRC and chat with people, and stuff.

And that was interesting, because it kind of showed me that there are lots of people out there who think this is fun and interesting, and they might like to help out. And sure enough, people started making pull requests to my GitHub project. I think the very first pull request I got was somebody adding a script to build the system... Because when it was first published, there was no way to build it. It was just like a big source code dump from my home directory. So overnight, I got a couple of thousand people seeing the system and learning about it on Hacker News, and people wanting to try it, and there was no way to do that. So I felt a little bit silly, but I just wasn't prepared for the visitors.

\[00:10:04.08\] Anyway, that's sort of where the whole thing began... And then slowly but surely a community formed around the project, and it's been growing ever since. We went from just by myself at first, and then like ten people or so over the next couple of weeks, and then more and more people kept joining... And today we are -- it's hard to measure, but we have over 900 contributors on GitHub, and on our Discord server there's, I think, over 8,000 people hanging out. Of course, not all of them active, but it still gives you a sense of the scale. And yeah, that's kind of what happened. And it started as a therapeutic thing for me, just as a way to keep myself busy, and I really love that aspect of it. And I wanted to give all the people who come to the project, I want to give them a chance to make it something like that for themselves. Maybe not necessarily exactly what I have, but just some kind of playground, or a place and a space to engage their curiosity about programming.

I always encourage people to implement something that they would like to know how it works, or just mess around with some kind of software that you don't know anything about. So we've had people implement TLS, and different compression algorithms, we have JPEG decoders and encoders, and stuff like that... And somebody made a spreadsheet... And there's just all kinds of stuff. And of course, within all kinds of stuff, you eventually also find a web browser, which I guess is sort of the second part of the greater story... Because at some point -- I didn't really want to make a web browser. For the longest time, people kept asking me that, because they knew my background in working on browsers at Apple... So people kept asking me on YouTube and on IRC, like "Hey, are you going to build a browser for SerenityOS? You know how to do it, so why don't you just do it?" And I always just told them, "Eh, I spent so many years working on browsers. I don't want to do that again. I wanna do something new here. Give me a break." But at some point I thought "You know what - all the texts that we have in SerenityOS is kind of single typeface, single font, single style, and there's no way to have rich text. And wouldn't it be nice if you could display rich text?" You know, with bold and italic and stuff like that. "Yeah, we should probably have a rich text widget of some type, so you can display that..." And what's a good internal storage format for rich text? Well, why not HTML? Like, that's rich text.

**Jerod Santo:** Yup.

**Andreas Kling:** And I just started hacking together a very simple little HTML display widget. And then I got a little bit like bitten by a bug while doing that, and I just kept adding stuff to it... So I eventually had like a CSS engine, and then it gained like network loading capabilities, and... I don't know, it just spiraled very quickly.

**Jerod Santo:** And now it supports intersection observer, which I just learned from your recent update. "Wow, intersection observer..."

**Andreas Kling:** Right. \[laughs\]

**Jerod Santo:** So you get into like the most minute web APIs at this point. Like, you're going for them all now.

**Andreas Kling:** Yeah. But really, for a long time, I genuinely believed I was not building a browser. I was just trying to make a rich text widget. And a very competent rich text widget, but still, it wasn't the browser. And I think the way that I convinced myself that it wasn't a browser for a long time was that we didn't have JavaScript. So I kept saying "No, no, no, it's not a browser, because then it would have JavaScript." And then for whatever reason, I think in March of 2020, I just started making a JavaScript engine for it, because it seemed it would be fun to do that...

**Jerod Santo:** Oh, gosh...

**Andreas Kling:** \[00:13:48.27\] I started building the thing in a YouTube video. So this whole time I was making random YouTube videos of just programming the system, and the one where I started just building a JavaScript engine from nothing ended up being like a crowd favorite, basically... Because people saw that and they thought, "Wait, this looks like something you can just do. Like, I could do this." And a lot of people just joined in to help out. So I got many pull requests just after that first video, of people adding new operators to the language, and implementing various APIs that you have in JavaScript... Like, very quickly, the community just kind of attached itself to this new thing I started doing. And that has been a theme in SerenityOS in general, that somebody starts building something, a little corner, and then people take notice and then they just gang up on that and help out. And it's kind of magical when you see it, because you'd think that these things are going to take a long time, or they're not going to happen... And then you just need that spark that lights the fire, and then people come and fuel it. And yeah, that's kind of what happened with JavaScript. And then at this point, it was hard to not admit that it's a browser. \[laughter\]

**Jerod Santo:** Once it has a JavaScript engine in there, yeah.

**Adam Stacoviak:** Is it or is it not a browser \[unintelligible 00:15:05.26\]

**Andreas Kling:** \[laughs\] Yeah...

**Jerod Santo:** He's not building a browser...

**Andreas Kling:** But even still, even still, it was only runnable on SerenityOS. And it stayed that way for a very long time. So in order to work on it, you had to work on the code on your host operating system, and then boot into SerenityOS in a virtual machine just to run the browser... Which was pretty cumbersome, but we worked on it that way for years, until last year, when I thought it would be kind of cool to have a shell for this thing on Linux, so I don't have to boot into the virtual machine every time. And somebody had already ported the web engine library and the JavaScript engine to Linux, so all we were missing was just like a graphical shell for it. We had a simple headless browser command which let you -- like, you gave it a URL, and it would render the URL as a PNG. And at that point, it's like, you almost have a browser; you just need the GUI with the buttons and the stuff. So I built that, and then suddenly, that was the start of Ladybird, which is now today sort of the name for the whole greater browser project that came out of this. And it's been a weird evolution, but in some ways it seems like I started building the operating system just so that I could eventually build a browser again, so I could go back to being a browser hacker, because that's what I just naturally want to be... And that's what happened. And now I'm just working on browsers all day again, and it's great. \[laughter\]

**Jerod Santo:** Full circle.

**Adam Stacoviak:** How do you install this? What do you install this on? Do you have to like build it on top of Linux, or do you have to build it on this virtual machine? Does it run on a Raspberry Pi? Help me understand like how you can get to an environment?

**Andreas Kling:** Right. So it depends on what you want to run. Do you want to run SerenityOS, or the Ladybird browser? If you wanna run the whole operating system--

**Adam Stacoviak:** The OS. I want the whole kitten caboodle. I want it all.

**Andreas Kling:** Yeah, the whole thing. That you can build on MacOS or Linux at the moment. And probably on Windows, if you have WsL. You check out the repository on GitHub, and then we have a build script that just takes care of everything for you. So you essentially run one command, and it takes a while, but once it's finished, it will spawn a virtual machine with the system running in it. So very, very little required from you. And it really -- it's slow the first time you build it, because we have to build a custom compiler for the system the very first time, so that ends up taking a bit of time. But if you have a modern computer, it takes maybe like 20 minutes, or something.

**Adam Stacoviak:** Does it only run on the VM then? Or is it meant to be a host operating system?

**Andreas Kling:** I mostly run it in a VM. Some people are really into running on hardware... So we have a sort of a sub-community that focuses on bare metal...

**Adam Stacoviak:** That's me. That's why I'm asking you this, because I'm like --

**Jerod Santo:** Yeah.

**Adam Stacoviak:** ...before I have more questions, I wanna know how I install it and play with it. So I don't see any ISOs to download, to... So I'm like "How do I get there? Do I have to build this? Why do I have to build it? Why can't you just give me ISOs?" kind of thing.

**Jerod Santo:** \[00:18:10.13\] You've got to be hardcore.

**Andreas Kling:** Yeah. You have to build it because we can't boot from an ISO at the moment. It's not something that we've really focused on. And from early on, we've tried to kind of have a little bit of a barrier to entry to keep tire kickers and sort of people who are likely to make more noise than contribution - just keep them at bay a little bit, because...

**Adam Stacoviak:** The freeloaders. I'm just kidding. \[laughter\] That was a tongue-in-cheek to some rel stuff. Anyways...

**Jerod Santo:** I don't know, Adam, can you make more noise than contributions \[unintelligible 00:18:40.00\] \[laughter\]

**Andreas Kling:** No, I just -- I've been in the open source world since... I don't know, however long; for the last 20 years. And I'm very familiar with the people that come and kick your tires... And when I set up this project, I was just a little bit tired of that, and I didn't want that type of energy, so I thought "What if I just say you have to build it yourself?"

**Adam Stacoviak:** Okay...

**Andreas Kling:** My hypothesis was this would keep out 90% of annoying people.

**Adam Stacoviak:** Not me. I'm gonna try it. I'm gonna build it.

**Jerod Santo:** Like distro hoppers kind of people. They just try out a new -- they think of it like a new Linux distro, or something.

**Andreas Kling:** Yeah, exactly. Exactly. But it's always been a hard thing to convey that in a friendly way, because it's not meant to be like elitist, or anything like that, it's just to keep our environment where we communicate with each other, like keep that focused on development, instead of helping people who are just like kind of casually interested. That was definitely an issue on our old IRC channel that we had in the past; people would just come in and dominate the conversation for half an hour with their build issues. And nowadays, it's less of an issue, but we still don't have the ISO.

I think, honestly, if somebody wanted to just add an ISO, and add a build procedure for producing these kinds of things, I wouldn't mind if somebody did that. It's just nobody has stepped up to do it. Because in our community, people just work on what they're interested in. We don't have any shared plans, or goals, or anything; everybody is invited to make their own plans, make their own goals. And because of that, focus tends to be kind of flaky, a little bit... But overall, it still seems to work out. Just things that you might expect in a system that's been around for this long might not be there, because nobody thought they were interesting.

**Adam Stacoviak:** Those questions kind of come back to the why... Because your why of why it exists is different than the why that it exists. Like, what does SerenityOS accomplish is different than the why that you made it. So your why is this therapeutic outlet, the obvious trauma in your life that you had to recover from, and thank God you did... But now SerenityOS has a different way, and so my question was the ISOs, because like "Hey, I want to check this thing out. Can I put it on some simple hardware like a Raspberry Pi, or just something Pi-like?" Because there's lots of orange Pi's, and you've got \[unintelligible 00:21:04.15\] you've got lots of little things you could do to allow tinkerers to sort of play in your sandbox. And the why of SerenityOS might elicit that.

**Andreas Kling:** Yeah. Sorry, I got lost in details.

**Adam Stacoviak:** That's okay. That's okay.

**Andreas Kling:** To your question, we have an ongoing port to 64-bit ARM architecture, but it's not super-stable yet. We can boot into the GUI desktop, and I think some people -- I've seen video of people booting it on Raspberry Pi, but not all the way to a usable GUI. I think one of the blockers is that we can't take keyboard input on those machines yet, because we don't support the USB controllers... So there's some stuff there too to implement.

**Adam Stacoviak:** Okay. So if somebody out there wants to learn how to support USB controllers on a Raspberry Pi, they can go to SerenityOS as an outlet to enable, to be the proving ground to hack on, right?

**Andreas Kling:** \[00:22:05.20\] Absolutely. Yeah.

**Adam Stacoviak:** That's kind of what this exists for, is just to tinker. It's not meant to be -- well, it can be a graphical user interface that pays homage to the old 90 days, that gives some of us that are in our 30s and 40s that nostalgic feel. The younger generation, 20s, is probably gonna get that nostalgically. They'll see it as -- I don't know, just something to play with. But that kind of gives us a chance to go back into that era of a GUI. But it's a playground, it's not meant to be -- well, it can be, but it's not meant to be a daily driver. You're not going to use it as your host OS to daily drive. It's meant to be a playground to explore, and to tinker, and to commune with other folks that have similar interests.

**Andreas Kling:** Yeah, I agree with that, for the most part.

**Adam Stacoviak:** It seems like it. I'm not saying that's what it is; it seems like it based on your description.

**Andreas Kling:** No, I think that's basically how most people engage with it. And I'm really happy that it can be that for people. But for me personally, I do have a very long-term goal of using it as a daily driver. So I do tend to just focus on working on things that I want to use. So that's kind of how I ended up motivating myself to build a browser also... Because if you're serious about building a daily driver, you're gonna need a browser.

**Adam Stacoviak:** Okay.

**Andreas Kling:** Because daily driving happens in the browser, right? And this is a weird thing, but I get into a lot of arguments with people about this, because I keep insisting that an operating system today includes a browser. You can't have an operating system without a browser, because nobody would ever use that. But then there are like purists who say that an operating system is just a kernel, or just a kernel and a command line, or whatever. But...

**Adam Stacoviak:** Well, a GUI OS, I think, requires a browser. A headless OS, like Linux is used in most cases, does not necessarily require a browser.

**Andreas Kling:** Yeah, fair enough. Fair enough.

**Jerod Santo:** So it depends on what you're using it for. Yeah.

**Andreas Kling:** The important qualifier. You're right.

**Jerod Santo:** Well, I can see where you might say "Well, where do you draw the line? Where does an operating system end, and client applications begin?" You could definitely bike-shed the definition of that. But I think if you want to be -- and maybe you don't want to be a competitive operating system. But if you wanted to have people use you as a daily driver, you have to at least provide access to a web browser, right? Maybe it's not part of the OS, but it has to be an apt-get away, or -- I don't think there's a package manager, maybe there is, but... Like, it has to be installable, available, hopefully... I mean, right there pre-installed. I mean, most OS'es today... Even look at the newer OS'es. iOS comes with a browser. That's a new operating system in terms of OS'es.

**Andreas Kling:** Yeah.

**Jerod Santo:** Android - comes with a browser. So it's gotta be available... You probably can't apt-get anything; you probably can't rpm, you probably can't brew-install.

**Andreas Kling:** Well, we do have a ports system. So we have I think a couple hundred packages ported to the system at this point, although no graphical browser. We have a couple of text browsers... But the system doesn't come with any third-party software; that's kind of part of the whole spirit, is that we just insist on building everything ourselves, to the point of stubbornness, just because it's fun, and because it's challenging.

So we have a lot of stuff that we do that's incomplete, or not very fast, or just missing entirely, just waiting for somebody to add it... But that just kind of adds to the charm of the system, I think. There's just this endless supply of tasks that somebody could find and engage with. There's always a reason to join the project. We get new people joining all the time, picking up super-basic stuff to work on. And people ask me, "How do you recommend getting into this? What should I do to contribute?" And I always tell them, "Just mess around with the system until you find something that's missing, or something that bugs you, and then try to do that." And that's worked out beautifully, because everybody finds their own angle, and nobody ever picks the same thing as somebody else. I think a couple of days ago we had the first time ever that we had two pull requests solving the same thing. That had never happened before, and we've had thousands of pull requests.

**Jerod Santo:** \[00:26:14.02\] Was it a bug, or was it like a missing feature...?

**Andreas Kling:** It was a bug. Like, you would do some interaction in the spreadsheet application, and then it would crash... And then two people independently discovered that and fixed it.

**Jerod Santo:** Well, you're hitting critical mass at that point, you know?

**Andreas Kling:** \[laughs\]

**Adam Stacoviak:** That's right. Double the bugs...

**Jerod Santo:** Two people using the same part of the system... That's huge.

**Adam Stacoviak:** I was trying to think about an analogy though... I was trying to think, what if you stayed in a bed and breakfast, and when you went there, they didn't have your bedroom, so you had to build it?

**Jerod Santo:** Right.

**Adam Stacoviak:** Or like in daily driver mode...

**Jerod Santo:** Or like a coffee table...

**Adam Stacoviak:** Right. Or like a home... It's like "Well, I've gotta go to the bathroom, but... There is no bathroom. So I suppose I should build a bathroom." It's kinda like that. I try to think of some sort of analogy of just-in-time need, you know?

**Andreas Kling:** Yeah.

**Jerod Santo:** "So far we haven't needed a bathroom, but apparently you need one, so..."

**Adam Stacoviak:** "I'll build it."

**Jerod Santo:** "Let's work on that."

**Andreas Kling:** Yeah. And part of it is because it's fun that we're set up this way... But it's also heavily inspired by my background at Apple, because while working there -- I just worked on browser performance, but it was so convenient to have all the experts on everything, just all gathered in one place. And whatever issue I had, anywhere in the stack, at Apple... Like, somewhere in macOS, there was something making Safari slow. I could go and find the expert. He was probably in the next building, at worst; maybe two buildings away. And that kind of environment doesn't really exist in open source, I feel. At least not on the sort of macro scale, where you have an entire desktop, and then it's built in a cohesive way by a team that all communicate with each other, and have sort of a general shared philosophy...

And when setting up this system, I thought it would be kind of nice to build it in this way, that we control everything ourselves, and we take the pros and the cons of that and try to build kind of a very high-accountability culture, I guess, where whatever goes wrong, the person responsible is somewhere in our community. Like, you can never point a finger outside. And really, that has ended up working really well as well. The only time fingers ever do get pointed is somebody pointing either at the compiler or at the virtual machine \[unintelligible 00:28:28.14\] We have found bugs, both in compilers and VMs, but those are rare. 99% of the time, of course, it's our own fault.

**Jerod Santo:** You didn't write the compiler, did you? This is like off the shelf... What are you using?

**Andreas Kling:** Yeah, we're using GCC and Clang. So just standard open source compilers. We do also have our own language in the works, but it's not yet mature to the point where we're using it for this system. But a little over a year ago I started working on a new language, after kind of getting frustrated with C++, because I felt that other languages were making progress on memory safety, like Rust, and Swift, and these other modern languages, and C++ was not really moving forward on that particular issue as fast as I would like. And I teamed up with one of the Rust core team folks, my friend J.T, and we put together a simple memory-safe language that transpiles to C++. So you would write code in this sort of limited language that's memory-safe, and then it generates C++ from that, and then it would just fit into our existing C++ system. That was sort of the theory.

In practice, it turns out it takes a long time to get this working just right, so we haven't integrated into the system yet, but it is being worked on, and it's an interesting area.

**Jerod Santo:** Does it have a name?

**Andreas Kling:** \[00:29:59.01\] Yes, it's called Jakt. That's Swedish for Hunt, as in the hunt for a better programming language, I guess...

**Jerod Santo:** Okay. I like it.

**Andreas Kling:** Yeah. And then it turned out that -- I didn't know it when we started working on that, but it turned out that there were multiple similar efforts going on at the same time. So Google had a Carbon language, that works much in the same way, that they transpiled to C++... And one of the C++ Standards Committee folks, Herb Sutter, he was working on CPP2, which also works in the same way, transpiles to C++. So it seems like we kind of, I don't know, joined some frustrated with C++ zeitgeist moment there... And I'm still interested to see how that pans out, because as I said, I want to build something to use every day as my daily driver, and it seems sad to build something that is not safe; that has like all the classic memory-safety issues, and all those C language family bugs, and just dealing with those for the next 30 years... I don't know, it doesn't sound appealing. So I need an escape hatch out of that timeline.

**Jerod Santo:** Why not Rust then?

**Andreas Kling:** Right, so that's a question that I get fairly often. So we actually evaluated Rust for a couple of weeks, and I prototyped parts of SerenityOS in Rust, and I just ended up not liking how Rust has taken sort of a stance against object-oriented programming. And our operating system is heavily object-oriented. It's just written in this classical GUI programming style, because it's a classical GUI operating system, as you can see from the way it looks... And that particular paradigm of programming is kind of -- well, I don't know what word to use; maybe shunned by the Rust language creators. They seem to have something very much against that way of programming, so they don't make it easy to write those types of programs in Rust... Yeah, in particular virtual dispatch, and inheritance hierarchies, where you can create a generic widget, and then a button is a widget, and these kinds of things. Those are very cumbersome to express in Rust, and that just became frustrating to me while we were trying to prototype stuff. And then I just thought "I mean, we're doing everything else ourselves. What's a language? How hard can it be?"

**Jerod Santo:** Right...? How hard can it be...? Here's what seems hard to me... It's 2023, you wake up in the morning, there's SerenityOS, there's Ladybird, there's Jakt... What do you work on, and why? How do you decide what to do? You've got like three - at least three; maybe there's more even - tools about major things in the works?

**Andreas Kling:** Yeah. So lately, I work on Ladybird, so the browser. And that's sort of become my focus over the last couple of months... I think for many reasons, but one is that I started seeing that we're making really good progress on it. Like, we're able now to render real websites, with not perfect fidelity, but like getting better and better. And we're able to run like complex JavaScript, and stuff... I don't know, it's just starting to feel like it can become a real browser.

**Jerod Santo:** I watched you render apple.com in your demo, and I thought "That's a pretty complicated website."

**Andreas Kling:** Yeah, it really is.

**Jerod Santo:** And they use a lot of technology to make it a really slick website.

**Andreas Kling:** Yeah. And you know, we lag when you load it, and there are little hiccups and glitches, but for the most part, we do get it right. And there's a million things that we need to improve, but I started seeing that we could actually build something here that could be useful to people. Like, not just fun to work on, but also useful. And as much as I love working on an operating system, and building that with my friends, the idea of making something that could be useful to others is very appealing.

\[00:34:10.01\] And I don't even know in what way it would be useful, and what the application would be, or whatever... But I think there is a lack of independent browsers, independent browser engines. Nobody wants to build browser engines anymore. Everybody just wants to package Chromium. And you look at what happened with Microsoft - they gave up on their engine, switched to using Chromium; Opera, they used to have their own engine, they gave up on that, switched to using Chromium... So you got these big players with essentially infinite money for these intents and purposes, and they just give up, and they don't want to do it. And I think that's really sad. So in some way, it's kind of up to hackers and enthusiasts to build new engines if we want to see new engines. I think there's a space for us here to do that. And even though it started with me just wanting to have a rich text display widget, now why not go all the way and just build a browser engine that people could use for something?

And yeah, it turns out this kind of resonates with a lot of people... So over the last couple of months, I've been reaching out to some folks, and asking if they want to fund Ladybird development, and kind of accelerate our progress, and I was able to get some quite big support from Shopify, for example. They signed up to sponsor our project. And I had a German real estate website called Ohne Makler, which gave us a nice sponsorship as well, just for making their website work in Ladybird...

**Jerod Santo:** What does Shopify see in the project? What would incentivize them to do that?

**Andreas Kling:** So according to Tobi, the CEO, he is really into more web engines. Just a diversity of engines. And we talked briefly about that, and he kind of sees it the same way that I do, that it's sad that everybody's consolidating on Chromium, and we need more. More is better; more is always better. And there was another guy inside Shopify named Mike Shaver, who kind of started standing up for this as well while I was in contact with them... And he's one of the original founders of Mozilla. Back when they started I think he was one of the first people there. And then I also got some large sponsorships from people who wanted to be anonymous as well... I wish I could tell you who they are, but maybe... Maybe someday I will.

**Break**: \[00:36:50.27\]

**Adam Stacoviak:** What was the sadness mentioned from Tobi or for you? I get that more is better, but why does the world need more browser engines? What's the permutations of how that negatively or positively affects, I guess, the web?

**Andreas Kling:** Well, I'll give you a concrete example... So when I logged in to the studio to chat with you two, it said "You have to use a Chromium-based browser." Because I tried to log in with Firefox at first, and they wouldn't let me. And I think this is exactly what happens when you have kind of a monoculture develop around a single engine... Because as we saw a couple of decades ago with Internet Explorer, that people just started targeting a single engine because it was dominant in the browser marketplace, you eventually get into a position where that browser just decides what the web is. And I think we're kind of heading towards that a little bit. We still do have Apple pushing against Google with Safari. Like, if Safari says no to something, they still control a fair bit, of especially the mobile browser market... But on the desktop, Chrome is so dominant that websites are now getting brazen enough to say "Well, you need Chrome to use this." And I think that is not a good state of the platform, and it's something that we do need to stay away from, so that the web can be I guess more democratically controlled, or at least have more than a single implementation, so that you have --

**Jerod Santo:** Yeah. It's kind of warding off the typical monopoly drawbacks, right? Like, if you get to a monoculture, the incentives to improve -- I mean, this was the Internet Explorer problem that we lived through. And really, Firefox helped bust that thing up, and have something else that you had to also pay attention to, and caused Microsoft to innovate etc. to catch up... And all the things, typical monopoly things. It's like "Well, what we say goes, because we're the only one that matters here." And as we've made Chromium dominant platform, "we" being like the world, I guess, of users who decided to install it, we see Google doing things inside of Chrome that are not in the user's best interest. Some are, some aren't, and you could argue about the individual things, but you just don't want that to be the only thing that matters, because then there's no checks or balances.

I think it's cool that Ladybird is like an opportunity to escape the SerenityOS and become like this more generally used piece of software, that you don't have to be an OS hacker, or tinkerer, or even a distro hopper; you can be just -- I mean, eventually, if you deliver on it, just a person who wants a browser that aligns with their tastes or desires... You know, like why we picked browsers in the first place. So it's pretty cool that you built this hesitantly; you weren't building a web browser... I mean, you kept saying it was not a web browser for yourself to use, and your friends... And it may eventually be more important than Serenity in the first place. That could be kind of a cool turn of events, you know?

**Andreas Kling:** Yeah, I guess so. One thing that we already have heard from folks who are doing web standards is that they appreciate what we're doing, because we are putting their standards to the test. Because it's been a long time since anybody picked up the web standards specifications and tried to actually implement them from scratch...

**Jerod Santo:** \[00:44:21.03\] Oh, I see.

**Andreas Kling:** And we've certainly found many issues that just don't come up if somebody is just working on like an existing mature implementation; but us having to do everything from scratch, we kind of discover missing things and inconsistencies, and stuff. So that's something that we're engaging with more and more, just the standards community, and trying to help improve the standards, just to I guess leave them better than we've found them, in a way, and help make it possible for other browser engines to come up as well. And I should mention, there is the servo browser engine effort as well, which started inside Mozilla, but eventually they, I think, laid off everybody working on that, which was pretty sad... But now, earlier this year, it started up again, because \[unintelligible 00:45:11.03\] the Spanish co-op company, they signed on a bunch of full-time people to work on Servo... Like, pick it up and bootstrap the community again. And I think that's fantastic, to see that effort continue and get revived. So it looks like we might have two new browser engines coming up in a space where there was very little new activity for a long time.

**Adam Stacoviak:** Isn't a browser engines similar to the way Linux is used, though? I mean, itself? Linux has a kernel, there's many flavors, many distros... Chromium is open source... I'm still not sure I understand why it's such an issue that we only have one dominant.

**Andreas Kling:** So Chromium is open source, but it's effectively controlled by like the hundreds of Google full-time engineers who work on it. And yes, they let other people in, but it's ultimately Google who decides what goes in the Chrome browser. And they have just way bigger power than anybody else over what happens over there. And some of the downstream consumers of Chromium are better about pushing back, or like removing some of Google's things. I know Brave in particular, they do change and tweak quite a lot of things about Chromium before giving you Brave... But even so, at the core of it, there's still the completely -- or not completely, but there's still the Google-controlled Chromium engine. And I think just like we don't want to have every car have the same engine, because that wouldn't be fun, in the same way we don't want to have every browser have the same engine.

**Adam Stacoviak:** Does having many engines mean repeating? Like, multiple JavaScript engines, that kind of thing. Wouldn't that produce more bugs potentially, or more breakpoints for the web? I think the one issue with the web as it's trended up, obviously - like, the internet has; it is the web. But specifically like web apps, web browsers, websites, apple.com even... We've been able to -- I recall days when it was just super, super-challenging to build for the web, because it was the early days, when there was bugs everywhere; multiple browsers... Wouldn't that just produce more breakpoints to make the job of a web developer that's already hard, even harder, because there's more diversity in engines, to produce more bugs and more breakpoints?

**Andreas Kling:** That's a really good question. It's funny, because in the last couple of days I've been messing around with 1997 Arrow browsers. So I got IE 4 and Netscape 4 on my computer... And then I've been just doing web dev as if it's 1997, just to amuse myself... And it's exactly -- like you say, it's impossible to get them to run the same scripts, because they were so different. And it was just a totally different time in the browser world where they were just aggressively pursuing what they thought would be sweet features.

\[00:48:09.10\] So Netscape thought, "Oh dynamic content should work in this way." And they just added their own elements for that, and their own APIs, and their own ways of doing it. And then IE came along, and they had some other ideas, and they added that... And I don't know if you did web dev back in the '90s... I was a just a kid, but I would call it --

**Adam Stacoviak:** 2000s.

**Andreas Kling:** 2000s, okay.

**Adam Stacoviak:** 2000s plus, yeah.

**Andreas Kling:** Yeah. So I had my first homepage I think in '96 or '97, and I definitely remember copy-pasting sweet JavaScript snippets... And they very often had like these big if statements where it was like "detect Netscape 4", "detect Netscape 3", "Detect IE", "Detect Mosaic". Everything had to be built in that way. But to your question, today standardization has come so far that there's a much, much greater consistency and interoperability between engines, and standards have become really, really good compared to the way they used to be. And that's actually one of the big things I would credit with our ability to even build Ladybird, is that standards have gotten so good that you can sit down and implement them... Whereas 10 years ago you would read the standard, and then you would try to figure out what browsers are actually doing, and then you would do kind of somewhere in between those things.

But today, standards are fantastic. And there's millions of tests written by the people who make the standards, and people who work on browsers. And there's even a shared effort between browser vendors called the Web Platform Tests, where - I forget how many tests exactly, but it's over a million tests, which are just unit tests that you can use to verify that you are interoperable with the way other browsers behave. And we haven't even begun to run that test suite properly yet, because we can only run parts of it... But given that it exists, I'm reasonably confident that if we can get to a point where we pass all those tests, or at least as many tests as other engines do, then you could argue that we are compatible, as far as you can measure at least, with one or more other browsers. And yeah, in the past I would have totally agreed that more implementations means more chances for bugs... But today, it's so much easier to verify that your implementation is correct, or at least if not correct, then still compatible; because correct is kind of a flexible concept in the browser world...

**Adam Stacoviak:** Yeah. So because web standards are so strong, and so well documented, and so vetted out, there's room for multiple engines, because -- and then you can only support X standards. Because I'm sure you don't support all the standards, as you mentioned already.

**Andreas Kling:** Yeah.

**Adam Stacoviak:** So you can have a grid similar to I Can Use, for example, like "Which do I support? Do I support these features or those features, or these standards?" It's similar to that, right? ...because the standards are so strong, that's why you're advocating for more engines.

**Andreas Kling:** Yeah, that's a good way of putting it. And I think more engines also means that the standards can become stronger, because more engines verify that the standards actually live up to their name, that they actually deliver on describing exactly how something should work. And yeah, it seems to be working so far... But at the same time, I don't want to pretend like we support all of these features, because we do have like a lot of partial implementations... And it's hard to say that "Oh, I support CSS Flexbox", because Flexbox has a lot of interesting peculiarities and edge cases... But it's much easier when you take sort of the total battery of tests from the web platform tests that cover Flexbox, and then you can say like "Oh, I support 89% of those tests." And we don't have a way to produce that number yet, so it'll be interesting when we do.

**Adam Stacoviak:** It will be interesting if that was like a feature of implementing the standard, because then that would encourage more engines, because you can easily, or in some way, standardize the way you would depict what percentage of the standard you support, you know?

**Andreas Kling:** Yeah.

**Adam Stacoviak:** \[00:52:09.18\] It's kind of interesting that we have Chromium and WebKit... And I'm not sure, because I'm not from elsewhere in the world, but at least here in the States where I live, and my experience in life is, my choice as a developer is to build on either of those two engines, essentially, if I wanted to do something. That's what Safari is built on, and everybody else, as you had said already, has kind of given up and they build on Chromium.

**Jerod Santo:** Well, you've got Gecko, and you've got Firefox.

**Adam Stacoviak:** Well, haven't they given up, too? I'm pretty sure they're Chromium, aren't they?

**Jerod Santo:** No, Gecko is a thing.

**Andreas Kling:** Gecko is still out there.

**Jerod Santo:** Gecko lives.

**Adam Stacoviak:** Is Firefox built on Gecko then still yet?

**Andreas Kling:** Yup.

**Jerod Santo:** I'm pretty sure.

**Adam Stacoviak:** I thought they gave up and went Chromium, too.

**Jerod Santo:** No.

**Andreas Kling:** No, Gecko is -- or Firefox in general is very well funded.

**Adam Stacoviak:** Is that right?

**Andreas Kling:** Yeah, they pull in a lot of money, because they still have the Google Search deal... So Google is paying handsomely for the privilege of being the default search provider, so... Of course, I don't know how long that deal will last, but at least for the time being, they are very well funded.

**Adam Stacoviak:** It says right here, "Firefox runs on our Quantum browser engine built specifically for Firefox, so you can ensure your data is handled respectfully and kept private." And that's from the Firefox FAQ on Mozilla.org. The question in the FAQ is "Is Firefox Chromium-based?" Firefox is not based on Chromium, it says.

**Andreas Kling:** Yeah.

**Adam Stacoviak:** So okay, I take that back. Three - we've got Quantum, WebKit, Chromium.

**Andreas Kling:** Sure.

**Adam Stacoviak:** So why not ship Quantum then, versus --

**Jerod Santo:** Because he wants to write everything from scratch.

**Andreas Kling:** Yeah, that's right. I want to write everything from scratch. For fun. \[laughter\]

**Adam Stacoviak:** We're getting to the whys here. We're getting to the whys here.

**Jerod Santo:** This is the why. What's interesting about it is there's an educational angle at this, I think, which is very valuable for us humans, those who want to learn how to do these things. How a web browser works is a complicated thing, and if you wanted to learn about it, having a simple web browser - and I'm saying "simple" in terms of just length of life, because the longer a software lives, the more complex it becomes, just by the nature of change... And so my imagination is that Ladybird is quite a bit simpler than even Firefox, which is an open source thing that you can go and read and look at, and probably has masses and masses of dead lines of code and everything else in there over its lifetime. I'm not saying it's not good software, I'm just saying -- you could probably learn a lot from Ladybird, just because you could probably grok it better than you could grok... And the same thing probably goes for Serenity. Do you think that's the case, Andreas? Do people come and learn a lot about systems programming, learn a lot about how a web browser works, how an operating system works? Because what you have is, okay, somewhat bespoke, and according to your desires, so maybe not full-fledged... But you have a kernel and a base of applications that don't have like thousands and thousands of developers over many, many years, and just the legacy code.

**Andreas Kling:** Yeah, that's absolutely true. Yeah, yeah, yeah.

**Jerod Santo:** Yeah. I think that's cool.

**Andreas Kling:** Yeah, one of the big draws for people, I think, is that they get to learn about systems programming, and they get to develop themselves as programmers... And one of my weird pleasures in life is seeing people learn new things, and get better. I didn't know I had this passion when I started building SerenityOS, but over time I've seen it happen again. Especially young people come in and they just have been programming for a couple of years, and never really worked on anything big, and then they come into our project and they engage with these big things, and they push themselves and they learn, get really good, really fast, and it's so cool to see, I think... I don't know, it makes me really excited about the next generation of programmers, because... I was programming when I was very young, but information was so scarce back then. And likewise with community; I didn't have internet access until I was in my early teens, but I was programming long before that.

\[00:56:14.01\] And in terms of books, I had whatever books I could find at the local library, but they had to be translated to Swedish, so there was that... And nowadays, kids around the world who are interested in programming, they can find infinite reading material, and they can find infinite communities, who are super-excited about programming as well. And you can really see the difference and just the pace that they learn at these days. It's so cool to me, and to get to sort of provide a space where some of that development happens - that gives me tremendous joy. And yeah, I just love to see that, young people getting into programming and going berserk with it. It's so cool.

**Jerod Santo:** Well, I'm just trying to grok the Gecko versus Quantum thing as we talk here... Speak to complexity - I mean, just the Wikipedia page about how Quantum is a new project, that encompasses Gecko plus the CSS thing, some Servo stuff, and it's like, if I was to say, "How does a web browser work?" and if I was going to go download the Firefox source code, my guess is I'd have a harder time picking up exactly how it works, then if I would having downloaded Ladybird and read through it.

**Andreas Kling:** For sure. For sure. Yeah. And you mentioned sort of accumulating cruft over the years, which no doubt has happened to Firefox and to WebKit, and Chromium as well... Although I know - at least I know from experience that WebKit and Chromium have very, very strong, sort of continuous refactoring cultures, where they aggressively add tests, and then they aggressively refactor; whenever somebody thinks of a better way to do something, they're not afraid to go into this deep refactoring... But even so, a codebase that's decades old is bound to be heavy and clunky. So we do have that advantage. And I think one of the ways that we try to maintain as much of this advantage as possible is that we try to write code that's as close to spec as possible... And that's something that - it wasn't obvious to me, because from my background in WebKit... In WebKit not everything is written the same way it says in the spec to do it. WebKit happily invents their own things, and their own concepts... And I think all the major engines are that way; somebody puts a spec in your hand, they tell you to implement this, and you're like "Oh, well, I know how I can do this..." We have been far more meticulous about just sticking to sort of the precise architectures described in specs to the extent possible, and our hope has been that will make the code easier for new people to work on, because you put the spec side by side with the code, and it's kind of "Here's English, here's C++", you can easily see what maps to what... But also that it will allow us to continue to work on this over a longer period of time, because these specs, they're alive; they have people working on them every day, and changing little things here and there... Which is really weird when you see it for the first time. These things are not static documents; you load the HTML spec today, and then you do it again in two weeks, and it's gonna be different.

**Jerod Santo:** Well, that's gotta be frustrating, right? That's a moving target. You're coding it up, and all sudden it's different. You're like "Wait a second..."

**Andreas Kling:** Yeah, it's definitely frustrating. But it's the nature of the platform; it is a living standard.

**Jerod Santo:** Which is nice when you can provide feedback. You said you're working with them to a certain degree now.

**Andreas Kling:** Yeah.

**Jerod Santo:** If you can have a voice there, that kind of makes up for the frustrations of the moving target, because it's actually a target that you can influence for the better for the implementers.

**Andreas Kling:** Yeah, for sure. For sure. And at least I believe that by sticking as close to spec as possible, and trying to track... Like, when specs change, we try to update our implementation, so it matches. Sometimes it takes a while to catch up, but by doing that, it just makes it easier to stay on top of the situation. Whereas if we would implement a spec once, and then just leave it alone and work on other stuff, it's harder to get synced again in the future when some new feature comes in, and then you want to implement that, and then the spec talks about all these things that you don't have sort of an architectural equivalent of, if that makes sense.

**Adam Stacoviak:** \[01:00:29.28\] How do you diff that? How do you diff your implementation versus the ever-changing spec, rationally? Is it just like a literal diff, or do you have to like grok it as a human, and then determine and then implement?

**Andreas Kling:** In practice, you have to grok it as a human. So that is probably the hardest part of continuous work on a browser engine, is that you have to read a lot of specs, and sort of internalize how they work, especially when it comes to --

**Adam Stacoviak:** Which is tedious, man... Right?

**Andreas Kling:** It can be really tedious.

**Adam Stacoviak:** Fraught with error, or possible error, right?

**Andreas Kling:** Yeah. But that's why we have tests. So...

**Jerod Santo:** TDM is one of the things that programmers are most used to, right?

**Adam Stacoviak:** Well, what I'm getting at, I suppose the reason why I'm asking this question is not that I suggest you do it, but what if the path to multiple engines was the ease of that diff? If you didn't have to grok it as a human, and read it and discern... What if there was a way to say "Here's my implementation, here's the spec", we're back to that percentage. How easily could I programmatically reproduce my adherence to the spec?

**Andreas Kling:** Yeah.

**Adam Stacoviak:** Because if you could do that in a programmatic way, and you knew without having to waste your mental cycles, one, you'd probably like your life better, and two, you might encourage more folks to build more browser engines. Because it gets a little easier to diff the implementation to the spec.

**Andreas Kling:** For sure. I don't know what the answer is to that, or why they don't work that way. One thing I have heard from somebody who worked on specs was that they prefer to keep the spec sort of language-agnostic, to encourage the widest range of implementations. Because the tighter you spec something, the harder it becomes to sort of come up with shortcuts, and optimizations, and things like that. If you hammer it down too tight, then there's no room for cleverness anymore. And I know that it's been a complaint when some specs have been too strict, and like demanding that certain things happen in a certain order, for example... And then browser vendors complain, because they say "Oh, well, there's this optimization opportunity. If we didn't have to have this specific order, that we could do these things in parallel. But because of the spec, you're not letting us do that." And I know that has been a complaint, but I don't know -- I personally agree with what you're saying. I think it would be better if specs were closer to programming language that you can actually just take and implement...

And if you look at JavaScript, the JavaScript specifications are closer to what you describe. They have sort of a stricter syntax for their pseudocode. And in fact, we actually had somebody just this week who has been writing a JavaScript specification parser that reads the JavaScript spec in English, and then produces a parse tree. And now we're going to see if we can turn that into a code generator that would just generate the C++ for our browser...

**Jerod Santo:** Nice.

**Andreas Kling:** Which would be super-cool, if that's possible.

**Jerod Santo:** Yeah.

**Andreas Kling:** And I would love to see same capabilities with other specifications, but I don't know why it's not that way. I imagine that there's a reason that they don't want to work that way.

**Jerod Santo:** So your long-term goal for SerenityOS is to be your own personal daily driver, right? Along the way tinkering, joy, education, hacker... Ladybird long-term goal - I mean, 10% global market share? What are you thinking? What would be success for Ladybird?

**Andreas Kling:** \[01:04:02.07\] I think success would be if I can give it to my family members who are not programmers, and they can do all of their browsing with it, and it would be no real difference as compared to if they were to use Safari, or Firefox or Chrome. And I think it's obviously unrealistic to expect that we could compete on performance with a trillion-dollar-funded team of hundreds of engineers at a big tech company... But to build something that has sort of acceptable performance on typical web content that my family members would browse - that to me would be a huge, amazing success.

**Jerod Santo:** Well, with the increased performance yields from ever better hardware, at a certain point slow software is less slow than it used to be; maybe just fast enough for the majority of people on the majority of websites, to the point where -- eking out those performance gains don't matter quite as much as they used to maybe.

**Andreas Kling:** True, yeah. It's a shame we didn't get those superconductors, but...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I know, right?

**Jerod Santo:** It was debunked, wasn't it?

**Andreas Kling:** Yeah.

**Jerod Santo:** It's not all that it cracked up to be.

**Adam Stacoviak:** For a moment there we were all so happy.

**Andreas Kling:** For a moment, yeah.

**Jerod Santo:** Yeah, it was an interesting week or two, and we were all excited and hopeful, but...

**Andreas Kling:** Yeah... No, I think that sort of the success metric that I have is that it just becomes something that's useful to a non-programmer.

**Jerod Santo:** I like that, yeah. I think that's achievable. I think that's still a lot of work...

**Andreas Kling:** Definitely.

**Jerod Santo:** Where would you say it is? If that's 100%, what percentage is it along the path of a potential roadmap to that?

**Andreas Kling:** Oh, that's a great question. I feel like we're at about 20%. So there's a long way to go.

**Jerod Santo:** More ahead of you than behind you. More ahead than behind.

**Andreas Kling:** Yeah, yeah. Because the devil's in the details, I think... And there's gonna be a million little things that we're gonna have to get right... And it's easy to paint with the big strokes, but to get all the details to look good, you're just gonna have to get down in the details and the weeds with a million little spec issues, and stuff, and especially go out and test big, complex websites... There's going to be issues like "Oh, if I'm halfway through this YouTube video, and then I try to seek to this point in the video, then it doesn't work right." Those kinds of things can take a long time to debug, because you have to understand how their player works, and how the scripts interact with that... I know from experience of working on Safari that those kinds of issues end up taking a long time. But I also know that they're perfectly approachable, perfectly solvable issues; they just take time.

I guess I'm hoping that browser developer is not like a magical skill that only some people have, but it's something that -- it's like a gift I can give to everybody; if they want to, they can learn browser development by just joining up and participating, and doing it until they learn how to do it.

**Jerod Santo:** Does it currently support the video element? Can you put a video element into the page and have a video play?

**Andreas Kling:** Yeah, you can. You can. And we can play VP9 video. So we have - Gregory, one of our developers, wrote a VP9 codec, so we can play those. And we have video elements, audio elements, but we don't support a lot of video and audio formats. But we can always add more. It's just, it is hard to implement those things, because it's a lot of math and a lot of tedious work, one might say... But there are some people who just love that type of work, and eventually they find out what we're doing, and they'll come implement more video formats, and stuff.

It's interesting, because it would obviously be a lot easier to go and just take a bunch of third-party code, glue it all together, and we would have a working browser much, much sooner.

**Jerod Santo:** Absolutely.

**Andreas Kling:** But then we would lose something, I think. We would lose that stubborn, amazing feeling of having built this whole thing by ourselves.

**Jerod Santo:** \[01:08:15.04\] \[laughs\] Which is kind of the whole point, right?

**Andreas Kling:** Yeah.

**Jerod Santo:** You would miss the forest for the trees. Yeah, you get there faster, maybe it'd be better code or software than you're gonna write personally, or your community, but it's not the point. Like, it's completely missing the point.

**Andreas Kling:** Yeah, yeah, exactly. And sometimes new people join the community and they ask this question, like why don't we just take this thing? And then somebody explains to them what we're doing, and why it's awesome, and everybody always understands, and then they become one of us.

**Jerod Santo:** They either get it, or they're out. They're like "You know what? I like that. That's cool. I'll hack on a VP9 codec."

**Adam Stacoviak:** For sure.

**Andreas Kling:** Yeah. We have just an amazing community of people who are interested in such a diverse range of things... And they just come and work on random stuff that they are interested in, and we patch it together, and we make it into an operating system, and into a browser. There's an interesting amount of code sharing between an operating system and a browser... There's a great symbiosis or synergy between the two... Because you would -- you might think that those are two separate things, but a browser is built on top of like a huge stack of operating system libraries. It's just like core stuff, like inter-process communication, and 2D graphics, and loading image formats, and fonts, and all kinds of stuff. So even though I've been working mostly on browser issues recently, that still ends up benefiting the whole operating system anyway, because I'm working on libraries to use throughout the operating system, which is nice.

**Adam Stacoviak:** You've been saying "we" a few times, or at least most times... Can you quantify, can you extrapolate on maybe Ladybird in particular? ...because that's what you're working at currently now. I know you mentioned community a few times... But can you express some of the "we" behind Ladybird in particular, and then maybe Serenity at large?

**Andreas Kling:** Yeah. So we have hundreds of contributors who have contributed code throughout the years, since we started five years ago. Of course, not everybody's active, but... We recently passed 900 individual contributors on GitHub, but I think in an average month we tend to see code from about 100 people or so make its way into the project. And we all hang out on Discord all day, and talk about programming... And it's a lively, vibrant community of nerds from around the world.

I recently -- because of the funding I mentioned earlier, from some new browser supporters, I've been able to hire a full-time engineer to work on just the browser. So there's sort of a new form of "we" starting to take shape as well, because I'm kind of building a little company... And now I'm looking at hiring a second engineer as well. And then we'll see what happens, because you know, money is finite, and I don't want to oversubscribe the funds that I do have... But I'm optimistic that I will be able to provide some jobs, for some people at least, to work on this stuff.

There are just a lot of different interests among the people who come. Most people don't want to work on the browser, for example. This is kind of a niche within the SerenityOS community. Most people have some other thing that they want to work on. I just ended up talking about the browser a lot, because that's what I work on, but I think -- like, people actively working on Ladybird, that's less than 15, I would think, at least month to month. And then we have tons of people working on random other things.

\[01:12:13.24\] So it's a diverse community, and it's hard to not be, because we have such a huge scope of what we're doing. We have the operating system, with all the different GUI applications, and we have a kernel underneath that, with device drivers, and all kinds of stuff... And we have the language, and we have the browser...

**Adam Stacoviak:** It's a lot.

**Andreas Kling:** That is a lot, yeah.

**Adam Stacoviak:** You mentioned company... Cool for you to be able to hire somebody, and cool for them to be able to be hired to work on, to some degree, a toy. A fun toy for folks to play with, and learn, and eventually, maybe it becomes something different, with a long-term goal. How does the company play into that, to be able to hire somebody, to be able to have -- do you have company goals? Does licensing matter? Will people eventually get rugpulled? I'm just explaining some of the ways that open source transcends as you get down the line of company, and influence, which is probably not where you're going, but you know...

**Andreas Kling:** Right. The company that I have is just kind of a necessity to be able to pay taxes correctly in Sweden, where I live. So it's not a company that aims to make any kind of product. It's more just a way for me to pay my dues with the government, and do everything the right way. But it also allows me to pay other people to work on stuff, which is a very recent phenomenon. For the longest time, I was making just enough to scrape by.

**Adam Stacoviak:** And this is through GitHub Sponsors, primarily?

**Andreas Kling:** Through GitHub Sponsors, and Patreon, and some individual donations as well... Which is what I've been living off of for the last two years. And then when I decided to try fundraising a little bit for Ladybird, it just turned out to be immediately successful. So it kind of changed the whole situation and what was possible for me. So I've just been adapting to this over the last couple of weeks. And it's all very new, and very confusing, but pretty cool. And as you say, it's super-awesome to be able to pay somebody to work on a toy...

**Adam Stacoviak:** Yeah.

**Andreas Kling:** ...but also to start to think of it as something that could be more than just a toy, even though it's very far out. And I'm definitely not trying to kid myself about it, and get ahead of myself about the current quality and potential of what we're doing... But I think if you look at like ongoing projects that are attempting this, we're definitely making more progress than anybody else trying to do it... Next to Servo. They're also quite far ahead, but they just have different goals, a different focus than we do. I'd like to imagine that it can become more than a toy, and...

**Adam Stacoviak:** Yeah. What do you call a non-capitalistic product? Right? I mean, because that's what -- it is a product, but it's not in the sense that it's capitalistic, where you're trying to gain profit necessarily. The profit really is the value to the community, to support the project, to continue, at least insofar as we know of its current state, right? So it's a non-capitalistic product.

**Andreas Kling:** Yeah. When I was young, we'd call it freeware.

**Jerod Santo:** Yeah, freeware... I would say it's a gift.

**Andreas Kling:** Yeah, it's kind of like a gift.

**Jerod Santo:** A good gift. Like, you've put work into it, you've put thought into it, you've probably put money into it... And then you give it to somebody. That's a non-capitalistic product. Like, here's a product, you take it. And that's really what's going on with open source in this pure form, is like, it's a gift to the world.

**Andreas Kling:** Yeah. And I personally am --

**Adam Stacoviak:** I was feeling bad for calling it a toy as well. I was trying to try to give myself some flex there, because I didn't want to necessarily call it a toy, because it doesn't sound --

**Jerod Santo:** \[01:15:52.09\] It sounds like you're belittling it to say that.

**Adam Stacoviak:** Yeah, it sounds like a pejorative, like I'm not trying to be kind to it. It's an unkind thing to call it a toy, which - it's not just a toy, it's... But to say it's an uncapitalistic product is too long-winded. I'm not gonna do that.

**Andreas Kling:** No, gift is good. But I also think of it as kind of a gift not just to the potential users, but it's also all permissively licensed. So all the code is under a BSD license, so if anybody finds anything that they want to use in our codebase, for any reason, they can just grab it. That's something that I wanted from the very beginning, to just make this thing maximally available to anybody who would find it useful. And that was from experience working at companies where I was not allowed to use GPL code. That was irritating to me, and I don't want to do that to anybody else.

**Jerod Santo:** Yeah. So engineers at Apple could take Ladybird, put a nice wrapper around it, and have their next version of a browser, or something.

**Andreas Kling:** If they wanted to, they would be welcome to.

**Jerod Santo:** \[laughs\] Well, Andreas, anything that we didn't ask you that you were hoping that we would? You've been waiting around for us to just ask about this, or a particular angle into your story, or anything that we haven't covered yet today?

**Andreas Kling:** I don't know... \[laughs\] I think it's all good. I hope that I did alright. I feel like I was -- I'm up much later than usually, so I hope I wasn't too low-energy here...

**Jerod Santo:** Well, we apologize for that. We could have flexed on the time, we could have gotten you --

**Andreas Kling:** No, it's all good. It's all good.

**Jerod Santo:** We could have gotten you on earlier in the day. I felt like you delivered on all of what I was expecting, and very thoughtful, very interesting stuff. You make me want to go play with it, but I'm also kind of afraid to go play with it, because I might just be too newbie to --

**Adam Stacoviak:** You might get the bug bite; you might get bitten by the bug.

**Jerod Santo:** I might.

**Adam Stacoviak:** Next thing you know, you're quitting the Changelog and slinging SerenityOS. Building out a browser, or something.

**Jerod Santo:** I'm just joining Andreas' Motley Crew of hackers.

**Adam Stacoviak:** Come on now.

**Jerod Santo:** Hey, that'd be a story.

**Adam Stacoviak:** That would be a story. Let's plug some URLs. So you've got SerenityOS.org. That's the homepage for SerenityOS. And then you've got Ladybird the browser, which is Ladybird.dev. And then you've also got your sponsors page, which you mentioned this is how you're -- at least one of the many legs that you potentially have to gain financial support from the community. And that's at github.com/sponsors/awesomekling. All that'll be in the show notes, of course; you don't have to go there now. But I want to verbalize that, to really put a pin for our listeners to say, "Hey, if you find value in supporting this kind of thing, check it out, go support it. Do what you've got to do."

What else did I miss in terms of where they can go? Do you still have the Patreon? What's the best place to just sort of concentrate the funding, or the donations, or the support?

**Jerod Santo:** The Discord maybe...

**Andreas Kling:** So people have different preferences, and I try not to judge... But from my perspective, GitHub Sponsors is preferable, because they take the smallest fees.

**Jerod Santo:** There you go.

**Andreas Kling:** So if somebody wants to make sure that their gift is --

**Jerod Santo:** Maximum impact, yeah.

**Andreas Kling:** Exactly.

**Adam Stacoviak:** And many tiers there. You've got the monthly, obviously, and you've got the one-times... So if you want to give monthly, there's five or six different tiers there. Or you can do one-time. Everybody knows how GitHub Sponsors works, I'm sure, but... They do make it pretty easy, and I'm glad that they take less fees so that they can support fun, non-commercial, non-capitalistic products like yours. The gifts. The gifts of open source.

**Andreas Kling:** The gifts.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** What about my code? If I want to donate my code, is it just github.com? Is it the Discord? Where's the best place to engage with you all in the community and become a Serenity hacker?

**Andreas Kling:** Right. So the best place to come chat is on our Discord server, which is at discord.gg/SerenityOS. And if you have code to contribute, then come hang out with us on GitHub as well, at github.com/SerenityOS/Serenity.

**Jerod Santo:** Perfect. That's the Easy button. Of course, as Adam said, we link up everything in the show notes for y'all, so you can just click through and get where you want to go. Andreas, thanks for coming on. We appreciate our multiple listeners who asked us to have you on the show. You might not have crossed our paths otherwise, but definitely, I'm very interested in this project. I'm especially kind of bullish on Ladybird, and I want to see where you take that to the masses. 10% global market share, that's my goal for the product...

**Adam Stacoviak:** Gosh, Jerod...

**Jerod Santo:** \[laughs\] How cool would that be? That'd be the most amazing story. Okay, I'll go 5%. I'll take a 5%. But even if it's just our friends and family, I'd be happy with that as well, but... I love the project, I love hearing about it. It's pretty cool.

**Andreas Kling:** Yeah, thanks for having me.

**Adam Stacoviak:** Thanks, Andreas.
