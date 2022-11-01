**Jerod Santo:** Will, one of the things that you say right on the website Textualize.io is what motivates you is the realization that the terminal is a flat form. Can you just take that sentence and launch off from there and tell us more about what it means?

**Will McGugan:** So I did some research a while back about developers' attitude to the terminal, and what I've found was that 90% of people had a terminal open at least half of the day; 90% of developers, rather. many developers get up in the morning, and they open up a browser, and they open up a terminal, and both those apps stay open the entire day. So all these developers have this window staring at them, in front of them, and often they're using it. But people haven't seen it as a tool for delivering software, they see it as a tool for building software, as kind of an archaic tool for doing things to create the software, but they haven't seen it as a delivery mechanism for the software itself. And I think we can do a lot more with it. And I've been experimenting over the years to see what you can do with the terminal, and things have moved on so much.

Terminals can do 16.7 million colors, they've got lots of Unicode characters, which you can use to build various kinds of graphics... And they're remarkably fast. Terminals will use your GPU, so it can deliver fast updates, at 60 frames a second, which is crazy to me. Because 20 years ago, it was just simple green text that you typed into, and then you got a few lines of text back. But now it's using the same technology as video games. So there's very little code and projects out there to build sophisticated applications. Cursus is the most popular one; it's been around for decades. But that looks very rudimentary. I mean, it's very much rooted in technology of 20 years ago. So I've figured "What can I do to use all this power that's available in the terminal, and maybe bring some of the improvements which have occurred in the web world, see if I can bring it to the terminal, and then build applications inside the terminal." And it turns out that you can do quite a lot. And what we've built is Textual, which is a Python framework, which creates these applications inside of a terminal, and they look a lot more like web applications.

**Jerod Santo:** So when you say that it's a tool to build software, but it could become a tool to deliver software, are you speaking to the same people? ...meaning, do you think it could be a tool to deliver software to developers, or do you think it could be a tool to deliver software to the general population?

**Will McGugan:** Initially, developers, because it's kind of strange... It's a piece of software which is installed on virtually all desktop computers. And almost exclusively, it's only developers, and maybe some other technical people that are aware of it... So initially, we deliver software to other developers, but another thing we want to do at Textualize is have a bit of magic where you can flick a switch, and you can take those applications which were running inside the terminal and put them in a browser. So now you can build these applications, and regular people, not just developers, can use them.

**Jerod Santo:** When did you have this realization? How long have you been working on this stuff?

**Will McGugan:** \[06:05\] Well, I started working on a library called Rich; that was nearly three years, about two and a half years ago now... And it started off -- you know, first principles; I just wanted to get colored text on the screen. And then I kept adding various other types of data and formats where I could display, I could render tables, and progress bars... And I started tinkering with various other ways of rendering more sophisticated content than you're used to in the terminal. So it kind of built up from there; I realized that there's lots more you can do in the terminal, but it does require a bit of work upfront. It's not like a browser where you can just say, "Give me a table, a browser-rendered table." You've got to build it up from all the individual characters. But once the tools are there, you can do so much more with the terminal.

**Adam Stacoviak:** When you talk about these rich applications, for the web, in the browser, you have HTML, you've got CSS, and you've got JavaScript. What is behind the scenes of Rich and Textual that is similar? Is there a similarity in terms of like a markup language, a style language, and some sort of like smarts, like JavaScript is?

**Will McGugan:** A little. So most of the code is Python, and that's one of our selling points; because there's so many people coming to Python these days, whose background isn't software development exclusively -- excuse me, or they don't have any web development experience, or desktop experience... So we want them to build apps that are exclusively within Python. But the type of Python I've created is inspired a lot by JavaScript frameworks, like React, and Vue, and it borrows some of their techniques. So you can write applications using fairly web-like technologies.

And we've also built in CSS, because that's one thing that I don't think you can replicate with pure Python. So you can have a CSS file, which affects how the terminal application is rendered, so you can set colors and background, borders, you can set animation, and layout just via CSS. So it's a very hybrid approach of Python plus web technologies, plus CSS.

**Adam Stacoviak:** It's interesting to consider this as a delivery vehicle for software... Because I guess the first thing that comes to mind is one, how do you build it? ...because we talk to builders, right? That's the show. We talk to developers. But then the same people are the consumers, potentially, as Jerod said before. who's the end user of these things? I just think about how do you launch these applications? And maybe this is sort of part of the bigger story; maybe you're just sort of how do you build it right now, and how do you display them, and make them rich and usable? But I think about how do you -- like a browser, if you're similar to a browser, what a browser might do for delivering applications... That's pretty easy - you type in URLs, and you get to applications via the web? How do you get to the applications via the terminal if it's going to take some of the market share away from browsers, for example?

**Will McGugan:** Yeah. So eventually, the first stage is just to build a framework where they can build these applications. Initially, people probably distribute them, and like to do other Python libraries, so through PyPy, or possibly on Brew, etc. But pretty soon, we want to build this web technology where you can serve up a Textual application from another box. So it's just like typing a URL; there'll be some sort of command , textual run, you give it a URL, or a URL-like string, and then it would serve up the application. So you can have access to all these applications that run within the terminal, as if they were locally installed, but they would be actually running somewhere else.

**Adam Stacoviak:** \[09:54\] Right. Are you there yet, though? are you still at the building stage, or are you at the "how do you get access to them" stage?

**Will McGugan:** Yeah, we're still at the building Textual stage. We've got a release coming up in a couple of weeks, 24th of October, and...

**Jerod Santo:** A couple of days.

**Will McGugan:** Yeah. Not very far away. And I'm hoping that that will take off, and people will start creating applications. So the time when we do have this web service available to be able to flick a switch, and those applications that they've built, they will suddenly be able to be shared amongst other people without actually having to install the software.

**Jerod Santo:** I'd assume that would serve as well as distribution mechanism, but also discovery mechanism. Because one of the things that every good platform usually has is some aspect of a marketplace, or a community, or a way of discovering tooling, or marketing, or tooling... And so is that part of this long-term plan? Because if the terminal is gonna be a platform, it has to have more than just execution of apps, right?

**Will McGugan:** Yeah. So I guess it would be some kind of store; ideally a TUI of its own...

**Jerod Santo:** Like an app store.

**Will McGugan:** Like an app store.

**Jerod Santo:** I wouldn't call it that, though... You might end up in litigation.

**Will McGugan:** Correct. I'd probably get sued.

**Jerod Santo:** \[laughs\]

**Will McGugan:** But in principle, that same idea.

**Adam Stacoviak:** You can call it The Terminal Store...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Probably a lame name.

**Jerod Santo:** A TUI store...

**Adam Stacoviak:** Yeah, I've been perusing your Twitter feed, and I've gotta say that the things I'm seeing are very interactive, very browser-even; very similar to a web application. There was one where you were showing off the design system behind... I think it was behind Textual's design system. And it's got a sidebar, and you can click, and it's -- this is not normal terminal behavior. Terminals are more like key commands, and things like that. Keyboard-related things, not so much mouse-related things. But you're clicking a sidebar, and you're scrolling fast, and you mentioned 60 frames a second... When you think about the underutilized power that is in the terminal, what kind of applications do you envision? What kind of things do you think will come about with that kind of frame rate available?

**Will McGugan:** So there's animation in there, and I think that just can make the user experience a bit nicer. There's kind of a range of animations. There's animation from helpful to gratuitous. So some of the stuff I post on Twitter is deliberately on the gratuitous side, in that it doesn't really add much usability, but it's at least kind of cool. But at the other end you've got things like smooth scrolling, which does add usability. If you scroll, it's nice to unmake that, so that your eye can track position; they can go from the bottom to the top.

So there's all sorts of other kinds of animations you can do. You can do blending; so you can fade something in to show it's more important, and then fade it out... So various other kinds of usability things you can do with animation, that people have been doing on the web for years, I've kind of like brought to the terminal.

**Jerod Santo:** So you're obviously a fan of the terminal, as are we; so we're all here enjoying terminals... I'm one of these people; I have a terminal open right now. I didn't even realize I did, because it's just always open on my computer, all day long, for whenever I need it. So I'm curious from your perspective, Will, what's virtuous about the terminal? What makes it so special or interesting? Why do people love it so much? And then on the flip side, once you do that list, what's lacking, what could be better? etc.

**Will McGugan:** I think you're in a kind of a context where you have all this power at your fingertips, and it's very focused; there's no extraneous details you've gotta worry about, like the browser. I mean, I love the browser, I love the desktop; I come from a web development background. But I don't think that switching and moving windows about, and hunting for things to click is always the most productive. But in the terminal, everything's there, at your fingertips. When you get good at it, you can power everything with the keyboard, which is what we want to do with Textual. So even though it can look a lot like a web application, which makes it kind of accessible and explorable, and you can find things.

\[14:13\] Ultimately, I want these applications to be keyboard-powered. So you could be in the terminal, stay in the terminal, but launch this app, operate it with a keyboard, and then return back to the terminal... And you never have to context-switch. I think you can be more productive doing it like that.

**Jerod Santo:** No distractions of Twitter, or Hacker News, or Reddit...

**Will McGugan:** Well, we might have a Twitter client one day, I don't know.

**Jerod Santo:** Yeah, I mean -- won't you just put Twitter in the terminal then? And then our context will be just as fractured, because we won't have a browser tab, we'll have a terminal tab.

**Will McGugan:** I think people go to Twitter because, in that case, you do want to be context-switched. I do it to get my head out of the code.

**Jerod Santo:** Sometimes. Sometimes you're switching to your browser because you need to google something, and you have Twitter in the opened tab, and you're "Oh, what's this? Oh, this cat is stuck upside down on a thing." And then all of a sudden you start scrolling.

**Adam Stacoviak:** That's not coffee, that's a cat.

**Jerod Santo:** Yeah. But yeah, so a lot of times we're doing it because we would like to distraction. But other times, I feel that just getting out of the terminal and into the browser - there are so many tabs there that just grab my eye.

**Will McGugan:** Yeah. But the terminal is your own little world that you have control over, and you can be more focused. At least that's my experience.

**Adam Stacoviak:** Well, it is one Cmd+W away, at least in Terminal app on my Mac; it's Cmd+W, similar to a tab in Chrome. So a similar experience, at least, in terms of how it tabs, and stuff like that. But this is something that should be obvious, to some degree, but I'd imagine that the terminal has a different kind of access to the file system, control mechanisms, operating system APIs, etc. than the browser does. What are some of the trade-offs and differences when it comes to the platform itself, and its access?

**Will McGugan:** Yeah, so on the terminal it's kind of native code, so you can do anything that any other application can; you don't have to go through a JavaScript API that someone's decided that you can have access to. So obviously, terminal apps, they may look like the browser, but they can do more system-related tasks. Anything that involves editing configuration files, you can run them with Sudo, if you wanted to; you could do any sort of tooling and configuration type of things.

**Adam Stacoviak:** The ultimate power.

**Will McGugan:** Yeah, yeah.

**Adam Stacoviak:** Given you have Sudo access, or administrative access, if you're not a guest user of sorts; then, obviously, you have limited powers. But if you have the power, then you have the power.

**Will McGugan:** Exactly. And that brings me to -- a segue is that you can run these applications on SSH, over SSH. So you can get like a full GUI, even though you're connected to the server, a web server somewhere, which would be harder to get up and running with a web application. You would have to install lots of software, configure firewalls, and routers etc. But these terminal-based applications can just be launched very easily, and they can be served over SSH.

**Adam Stacoviak:** You know, there's a lot of explosion happening in home labs. I think the Raspberry Pi's really helped this, Arduino has helped this... People that have not typically been curious on a developer, or terminal, or kind of like geekery that software developers tend to be in; people who are not typically a software developer, are tinkering and being more and more curious. Do you see how this kind of platform can aid in, say, Pi-hole, for example; rather than go into Pi-hole on the web, or Pi-hole.lan, or whatever it might be, going to some sort of SSH application to tinker with Pi-hole, or do different things that home-labbers tend to do; mess with home automation, for example. Rather than a crappy browser, maybe a more powerful terminal GUI.

**Will McGugan:** \[18:15\] Yeah, so it can serve up a nice GUI that you can explore. They tend to be more accessible to people who aren't experts... I mean, we all use a bunch of command line apps where we've used it a lot, and then we can become very proficient in them. But it takes quite a while to get there. But a good Textual user interface, you can explore it quite easily. So yeah, you could run it on a Raspberry Pi. We test on that, and it runs very well, actually, because it's a low, low footprint type of thing, so you can serve up a nice GUI from a tiny little Raspberry Pi, to do whatever you want it to do.

**Adam Stacoviak:** What about forms? Are forms easy to do in Textual? For example, a password change, for example. If I wanted to do profile stuff... I'm just thinking rather than some of these things like Portainer, or different things that home-labbers tend to kind of mess with, with virtual machines, or Docker, or whatever - rather than going to a web application, could you do these things in Textual, in a TUI - change your password, do different things, like security-related stuff, 2FA stuff even? Can you render a QR code, for example, in Textual?

**Will McGugan:** Yeah, absolutely. We've got text input that does passwords. We've also got a checkbox control, and buttons \[unintelligible 00:19:41.18\] scrolling windows... So yeah, you could easily to password change type dialog.

**Jerod Santo:** That's interesting, because a lot of self-hosted client server software has web UIs... You know, going all the way back to like PHP MyAdmin, or AWStats... I'm showing my age now. And the great Perl scripts with a web admin that was ridiculous to use... Even to today's things, like - I've been setting my Pi-hole thanks to Adam and his beating of the Pi-hole drum... I've got a Raspberry Pi, now and I've got -- yeah. So you set it up, you get it going, it launches itself, and then it's "Hey, go hit our web admin." And you have a local host -- not localhost, but a local network IP address you navigate to... And it's fine. It's a web browser; it does the trick. It's got cool, little charts, and stuff, it's got all the configs etc. And yet, I'm "This thing has to have a separate web server, it has to have an open port listening on 80, and 443..." And all because we can't have like a cool -- I mean, I can SSH in and do all the same things via config files. I can't do the charts, and stuff. I could probably find a way to get at the raw data. But how cool would it be if like Pi-hole shipped with a TUI, that was like full-featured, like their web admin, and I didn't have to have a separate little part of their infrastructure. That's probably not their expertise, is like probably building web apps... I don't know the Pi-hole folks, but they seem like they're firewall people, right? They seem like they're low-level -- like, probably have IP tables memorized, and stuff. And so now they've gotta build a web admin, which could be a security problem. A lot of times their interfaces are poorly made, just because of the, again, mismatch of skills... It'd be so cool if there could be a terminal-based, fully-featured admin for Pi-hole, that just like -- you just SSH in and run it.

**Will McGugan:** Yeah, I think that's a very good use case for it, because you can run it -- you can run Textual apps anywhere, and be kind of quite sophisticated. And for things like an admin portal, it can do almost anything you would need. You can even do some kind of graphs; you'd have like spark lines, and some basic plots... The only thing that I think TUIs can't do fairly well is images, or video. But for most admin interfaces, you don't need glossy images, or videos; you want text inputs, you want text, you might have sparklines, and checkboxes, other kinds of things. That could cover 99% of what you need. You have that software running on a router, or a tiny, tiny box, or a Raspberry Pi...

**Break:** \[22:33\]

**Adam Stacoviak:** So Will, you've got my attention, but what's step one? Let's say I'm on the Pi-hole team, right? I don't mind the web admin, maybe I don't like it, maybe I like it, whatever... What's step one? If I'm just using it as an example, what will be step one for someone like them to take up Textual, to build a TUI or an admin for Pi-hole? How does it work?

**Will McGugan:** So from the development side, it's a Python API; it should be quite familiar to Python developers. To create an app you import Textual.app and you extend the app class. And that's your TUI there. I wouldn't do much at that point. But then you implement a compose method, which returns widgets. And widgets are like self-contained components. If you're a web guy, essentially, it's a div with some elements in it; you can nest these widgets, so you can have containers and put widgets inside them and create a hierarchy, which is very much like the DOM, Document Object Model, in web development. So you can build up your interface with these widgets that contain other widgets, and then have leaf nodes for controls, like text, and checkbox, and text input.

And then you create a style sheet. And that stylesheet applies styles to these individual widgets. And that works just the same way as the web does. It's kind of like a simplified dialect of CSS. So you can create quite really beautiful-looking interfaces with maybe a page or two of CSS, so that'll create something which looks very nice, looks like an app...

\[25:58\] And then you write event handlers. Event handling, again, is quite similar to JavaScript, because I do come from a web background... So you write these event handlers for things like clicking for text input, and you can update the state of the app accordingly. So the code to generate a fairly complicated app, I think, is very readable, and it's also -- it's quite terse. I don't know if you've ever written any Cursus applications, but they're quite verbose, and somewhat technical. But Textual is quite high-level. You kind of stand back and you just say what you want on screen, what you want it to look, and then you connect up buttons, and things. There's plenty of docs. We've been working quite hard on the docs for the last few months. So if you do want to get started, all the information is up there.

**Jerod Santo:** So you've got to know Python, or you've gotta be willing to write some Python. And I think that's a great choice of a language in terms of trying to reach more people. You mentioned earlier in the show that there's a lot of people who know some Python, but aren't like capital S, software, capital D, developer, on their job titles. But I'm just curious about Python as a choice, both for yourself personally, in your work, and then also for Textual. We don't talk Python too much here on the podcast, so talk some Python to us, Will. Why Python?

**Will McGugan:** So I came to Python through video games. I was a video games developer, and a while back I was writing a game engine... That's a long time ago. I was looking for scripting languages, and I looked at all the scripting languages at the time. I didn't know much about them. I looked at Ruby, I looked at Python, I looked at Lua... I don't know if you guys have heard of Lua. It's quite popular for games.

**Jerod Santo:** Yeah.

**Will McGugan:** And at the time, I chose Lua, because it was perfect for video games. But I'd find myself dipping into Python a lot for tools and for small scripts, and I also found that it influenced the way I wrote C++. I was writing C++ and making it look more and more like Python. At some point, I figured, "Well, why don't I just work with Python? Because clearly, that fits my brain better." So I kind of engineered my career to be more focused on Python. My first 100% Python job was working for the Internet Chess Club.

**Jerod Santo:** Oh, really?

**Will McGugan:** I was writing a chess interface for them, so I got to write Python all day. And that was a long, long time ago. And since then, that's what I've been doing in my career.

**Jerod Santo:** Well, it makes a great choice for you then for Textual. The one question that I would have about it - you know, we had Toby Padilla from Charm on the show about eight months ago now; they're doing some similar stuff to you. I'd love to hear your thoughts on their work, and your work, and some of the overlap. Definitely spiritually aligned, the efforts. They're in the Go space, and one thing that Go has going for it - pun not intended - is that distribution is really nice and straightforward. And I've never found that with Python as an outsider who uses Python tools. I just am using Stable Diffusion command line last week, and so I had dipped my toe back into PIP, and all these things. It worked out just fine. It was good. But it wasn't "Hey, here's a binary. Throw it in your path and execute it." So I'm curious your thoughts on Python from that perspective - just distribution, etc.

**Will McGugan:** Yeah, that is a problem in the Python world. It's kind of strange, because Python itself is such a very accessible language... But the answer to distribution isn't that great. It's not so easy to send your code to a non-developer and expect them to be able to run it. But there are some solutions these days which are much better than it used to be, and you can take a Python project and bundle it up, turn it into an executable, for all platforms, and send that around. So there are solutions.

And one of the things you want to look at is that model of distribution where you can bundle things up and just send one executable; something like -- I've forgotten the name of it... The popular app framework where you can bundle JavaScript apps with a browser...

**Jerod Santo:** \[30:13\] Are you talking about WebPack, are you talking about bundling JavaScript for the browser...?

**Will McGugan:** For browser-based applications. I forget what the framework is called.

**Jerod Santo:** Electron.

**Will McGugan:** Electron. Yes.

**Jerod Santo:** There you go.

**Will McGugan:** So I think we can build an Electron-like solution, because you can embed a terminal in the browser, and then you can bundle it up with the Python code, and then you could actually send a terminal app to someone who doesn't even have -- they might not even have a good terminal installed, but you could just send it to them. And they wouldn't have to know it was a terminal app if they're a non-technical developer. To them, it would just look like a web app that's maybe got less retro appeal.

**Jerod Santo:** Okay, that'd be interesting...

**Adam Stacoviak:** What about the pre-installation of Python, say, on Linux, or macOS, or Windows? Is there any sort of uphill battle with the pre-installation choices? For example, I think it's 2.7 for Python on macOS, and they suggest Python three, but you have to install it yourself. So this is back to non-developers, developers and software distribution.

**Will McGugan:** Is Python 3 now on macOS? I think a recent update --

**Jerod Santo:** I think there's two different executables. I think they're both there. There's a Python bear word, and there's a Python 3 command. it has its own -- either that, or Homebrew did that for me, but that's how it's on my machine. So that's either stock, or Homebrew-installed Python 3 separately? I don't know. I think they're either both there -- Python 3 is definitely there. It may not be like just the Python command, though.

**Adam Stacoviak:** Yeah. When I `which python3` on my terminal, I get a Homebrew path, so I don't know...

**Jerod Santo:** Okay, so Homebrew might have done that.

**Will McGugan:** It is a problem getting Started, especially for complete beginners. There's quite a lot of hurdles before you can even write Python. I mean, the Python interpreter is just the first one. There's lots of software you've got to download to get up and running. So that is a big problem, and I think, as far as Textual is concerned, we have to overcome that. You can't distribute this stuff to your mother. Maybe your mother isn't a software developer, but maybe you could send her an installer. So I think if we can solve that problem, that will make these types of applications accessible to just the general public.

**Adam Stacoviak:** Well, the good thing is that it's not a today problem for you.

**Jerod Santo:** \[laughs\] It's a down-the-road problem.

**Adam Stacoviak:** It's a maybe-problem, you know... If successful, then it's a problem, right? Because the initial audience is developers, and I think developers are willing to deal with those hurdles...

**Will McGugan:** That's right. But if it's just developers, it's fairly niche. It's a fairly big niche, to be fair, but a far bigger niche is everyone else.

**Jerod Santo:** Yeah, I mean, we're probably like 1%, or something, I don't even know, of the general population. Eight billion people, how many are developers? Probably not 1%.

**Adam Stacoviak:** Small percentage. Back to building the two -- the initial Textual application... I'm familiar with index.html, I'm familiar with some of the paths that you can have in an application... How does that work with Textual? Is there an index? Is there a path that you can traverse, so to speak, when you move around the application as you work?

**Will McGugan:** There isn't -- you mean like a URL where you could...

**Adam Stacoviak:** Right. you've got a route for a website, for example, and then /new is creating a new user. /signin is sign in, /admin is the admin, for example... Is there a path interface, so to speak, to a Textual application? How does it work?

**Will McGugan:** \[33:47\] There isn't that kind of similar concept to the Textual application; it's more like a mobile app. So you might have like modal dialogues, where you can go back, and possibly forward... But there's no URL layer yet, because they're not truly web applications. They're stateful, so they don't have a URL as such. But when we have the version, which does run in the browser, maybe we would want to respect the URL, so you could pop in the URL and return to a particular state. It's more like one-page applications, Vue and React, in that respect.

**Jerod Santo:** Right. So does Textual have its own state management tooling for you?

**Will McGugan:** Kind of. There's reactive variables... So you define a reactive attribute on your class, and then you just modify that state, and then the UI updates accordingly.

**Jerod Santo:** Okay. But in terms of persisting that state through different sessions, or... I don't know, do you just plug -- I mean, you're a Python programmer, so you just plug in SQLite and some Python stuff, or is there actual in-built, or even plans to provide some state management stuff for people using Textual? Or is that "Get another package for that"?

**Will McGugan:** No, I think we should have an answer to that. We've got a very kind of basic layer of reactive variables, but we'd like to have like a state object, like a big -- almost like JSON, where you could just modify a date, or a list, and then have the whole interface update accordingly. I think that'd be a really good thing, if we had an answer to that.

**Jerod Santo:** Yeah, I think so. So there's two sides to that. And what we see in the web world has been like a thousand state management libraries blossom, you know... And then it's kind of "Well, do we try this one, or that one? What's this idea, how's that idea?" There's a Redux, there's Flow etc. And then finally, over time, something starts to shake out, and it's kind of "Well, everyone's pretty much doing it this way right now, and here's why it's virtuous."

On the other side of that is well, the vendor, in your case Textual, just provides state management for everybody, and it's just a solved problem. Maybe we can mumble and grumble about Textual, maybe we can swap it out and say, "Well, I brought my own", but then you have something there that everyone uses, and it kind of standardizes around that.

**Will McGugan:** Yeah, there's both approaches. There's the kind of batteries-included approach, and then there's the approach where you can just slot in your bit of technology. I'm not keen on their approach where you can just plug in lots of little bits of technology, because they tend not to work harmoniously together...

**Jerod Santo:** \[laughs\] Yeah.

**Will McGugan:** So at the moment, we're building all the widgets, and we have quite a large widget library, but we do want third-parties to build widgets. But I think there's something like a core bit of technology managing the state. If we do that at all - I kind of suspect that we should do it, hopefully after we got feedback regarding how people actually want to use it. Because these are not web apps; they're kind of web-app-but they're more like desktop apps in the way you operate them. So I'm not sure... That's something I'd revisit in the future, after people have a chance to play with it.

**Jerod Santo:** Well, if you look at desktop apps - so we just focus in on macOS, because that's just the platform that I know the best... You have the core frameworks, and they provide their own layers, like Core Data, for instance; I'm sure there's newer ones that Apple provides... And then they're also "...and you can just have a SQLite database." And so then you can just manage it yourself, like "Plug this one, and plug that one in. This one provides two-way data binding", or whatever. "This is the Textual way of doing it." But of course, it's in the spirit of open, and open source, and stuff. Making it batteries-included, but like swap those batteries if you want, or "Here's a different place to come in", I think is a nice balance, where it's like you don't have to bring your own, but you can bring your own if you are just disgusted by what Will and this team has come up with. \[laughter\]

**Will McGugan:** \[38:07\] Yeah. Well, I mean, it is a Python application, and you do have all these Python libraries at your disposal...

**Jerod Santo:** Oh, yeah, there's just a huge community.

**Will McGugan:** Yeah. So you could attempt to plug anything in, and some of these things will fit in very nicely. Python has a built-in SQLite interface, so that'd be -- I can imagine people wanting to use that.

**Adam Stacoviak:** So we have a launch of sorts coming up for October 24th. A couple days away. But is there any Textual applications in the wild that are not built by you? Who's using this currently? What's out there that we may have seen? What's the state of usage so far?

**Will McGugan:** Okay, so the version that's in master has been in there for quite a while, and I started building the CSS technology, but I had to leave the version master for people to use. I didn't want to break it, and people have been using it. There is a lot of applications out there. We created a gallery, which you can find on Textualize.io. And there's lots of apps already, and they're using a much earlier version of Textual. What have we got? We've got things for managing Apache Kafka, we've got a to-do app, a static website generator, we've got machine learning monitor... Yeah, there's quite a lot of applications out there, and they're growing already... But we hope that once the CSS stuff is in there, that that will really explode.

**Jerod Santo:** So the CSS stuff is what's dropping on October 24th, or is that a new project? What's going on with that?

**Will McGugan:** That's the big feature the next version. Once that merges, you'll be able to use CSS and all the other features we've been working on. We've got tree control, we've got a nice data table, we've got text input, check boxes... So already, there's quite a number of widgets that you could use to build some sophisticated apps, and we're really excited about that.

**Adam Stacoviak:** So let's say I'm browsing your gallery, and I'm "You know what? TipTop looks pretty cool. It's a version of Top, but it's not Top." How do I go there and be "I like that thing. How do I use that thing?" What's step one for that? Is it like a developer, where you have to develop Textual applications? How do you differentiate between creating and using? if I want to just use TipTop, for example, do I have to do the developer steps to build Textual applications? Or can I just use--

**Will McGugan:** It depends whether the developer has gone through the effort of packaging it already. I mean, at the very basic level, if it's on there, then yes, you've got the repo, you could check it out, and you could follow the instructions and run it.

**Jerod Santo:** For this one, in the readme, it's pip-install TipTop.

**Will McGugan:** Yeah. And if you have Python, then that'll put the tiptop command in the path for you. Other projects might use Brew, or Chocolatey, or one of these other package managers, which puts it a command away.

**Adam Stacoviak:** Gotcha. Okay. So in most cases, there can be some sort of readme, either in the future gallery, that might get more sophisticated if this becomes a not-App-Store app store... A Textual store, or something like that... To instruct the user on how to get that thing, essentially. And in most cases, it's probably Pip, or Homebrew, or some sort of package manager that's pretty familiar, pretty well-known.

**Will McGugan:** Yeah. Familiar to Python devs, certainly. And hopefully, in the future we'll have an answer to a much simpler way of getting access to all these apps that doesn't require you to like go into the repo and read the instructions, and doesn't require you to have the right version of Python, and dependencies, and all that.

**Jerod Santo:** \[41:57\] Right. It'd be cool to have some sort of universal packaged binary in this way that you talk about that could be that Textual platform, similar to Homebrew, where it's once I have Homebrew, it unlocks for me a whole list of other things I can do, right? So the first step is you get Textual, and then Textual is a TUI, which is a way of discovering and installing other TUI apps. That'd be beautiful.

Now, you could also side-load... I don't know, maybe we'll get that into the business model. "There's no side-loading...?" No. You can also sideload and just install them with Pip, or whatever, but that would be a really cool way of providing that right there in your terminal... So people would just say, "Oh, do you have Textual installed?" "Yes." Well, then just pop it open and find TipTop.

**Adam Stacoviak:** Textual, install... Yeah.

**Jerod Santo:** Hit Enter on it, it installs it for you, it manages all your Python dependencies, makes sure your environment is all set up etc. If not, then you've gotta do your own Python; pip install also works. But that would be a really cool end goal, realizing that you're ten yards off of the starting line of this sucker, and building the foundation is like 80% of the work, and then there's the other 80%, but... That would be neat.

**Will McGugan:** Yeah, that would be fantastic.

**Adam Stacoviak:** I liked that, Jerod. It's similar to like Homebrew lists. You list the things you've installed with homebrew. Why can't you do the same thing with Textual? Textual list, or Textual install, and...

**Jerod Santo:** Homebrew could have a really sweet TUI if it used something like this, that's better than just Homebrew list, where it's like "Here's a vertical list of things", you know...

**Will McGugan:** You could actually write a Textual TUI for Homebrew.

**Jerod Santo:** That would be cool.

**Will McGugan:** Yeah. They have a GitHub repo where you've got all the Homebrew projects, and it's open source, so you could write a TUI which just basically browsed that repo...

**Jerod Santo:** Yeah. I have a hard time with Homebrew sometimes, because brew search basically is your interface into -- unless you already know the package exists... But sometimes -- for instance, we've been building some ID3-based stuff, and I'm like "I need some ID3 tooling out there. I'm just gonna brew search ID3." And then there's like casks and there's these, and maybe it wasn't called ID3... So it's literally just searching the title of the packages in Homebrew. It would be cool to have a Homebrew portal or discovery platform where you could actually browse, you could type in ID3 and these people could provide non-title-based tags, or whatever, topics, that allow you to just find things, and discover better... That'd be a cool standalone Textual app; it would be like Homebrew Browser, or something like that. I'm just describing that well, because maybe somebody will build it for us, that's why.

**Adam Stacoviak:** That's kind of what formula.brew.sh is, because you've got search there... And a lot of the data isn't a web application. I'm almost like thinking like "If Textual does take off, and become really usable, easy to distribute, easy to install, will packages like Homebrew migrate to TUIs, rather than this web-based version?" They can maybe have the database in an API maybe, or something like that, where the data can live in both places... And I think, Will, you said that you'd have Textual on the web... Did you say that?

**Will McGugan:** Yeah, definitely. Yeah.

**Adam Stacoviak:** Okay... So the web will eat you, and you will eat the web.

**Will McGugan:** Right. It did seem like a more natural place to be able to search for this software that you're going to install on the command line. If the interface for searching had a button that said "Install", you just clicked that...

**Jerod Santo:** Yeah, exactly.

**Will McGugan:** ...then run a process... That'd be nice.

**Jerod Santo:** Right. And another one that says, "Rate and review", and then the other one says "In-app purchases", and then... \[laughter\] Now I'm getting ahead of myself...

**Will McGugan:** And I get 10% off the top, that'd be amazing.

**Jerod Santo:** There you go, Will. \[laughs\]

**Will McGugan:** Not really, not really.

**Jerod Santo:** We're just trying to come up with business models for you. No, it's 30%, Will. It's 30%. Come on, you have to be an oil baron, an app baron.

**Break:** \[45:57\]

**Jerod Santo:** So Will, I've been pitching your business ideas... Or just one. I've just been re-pitching you an app store idea over and over again, until you launch it... But we are curious, because you have raised money, you're making a real go at this thing... And whenever you convince somebody to part with their hard-earned money, they have some sort of an idea of what that money could turn in the future, which is more than what it is. So surely, you've put some thought into what Textual could be, not just as an open source platform, or framework, whatever you're calling it, for building these TUIs, but also so much more. So can you give us some version of that pitch? Like, what's the big-picture idea?

**Will McGugan:** Sure. Yeah, okay. So I'm in the business of what you call open core. It's where you've got an open source project, and then you have a commercial add-on to it. So Textual will always be open source, and you use it like you would any other open source project. But then we're building this web interface where you can flick a switch, and then you can take those applications which you'd built for the terminal, and all of a sudden they're web applications. And from there, you can send a URL around, and people that are not particularly technical could use it, and they might not even know that's a terminal application.

\[49:56\] So once we have this service, there'll be like a very generous free tier, but if you're an organization, you might want to have authentication built on top of that, and that would be a service that we could charge for. And also, if you have a lot of users, at some point, you'd be using up a lot of bandwidth, and then that would go into a tier where we could charge you.

And there'll be like additional services on top of that... Payment gateways, files serving... Anything -- the kind of services which web developers will pay money for. We'll carve out this little niche where we're building these TUIs, and other people are building these TUIs, and we provide various services which they will need if they want to use their apps for some kind of like critical infrastructure. They might want to install it on older servers for some sort of web application, and then they can use a TUI to configure and monitor it. So there's a fairly broad market there for people that want an interface, they want to build it quickly, and then they want for us to take over the managing, that kind of thing.

**Adam Stacoviak:** It's different than what your initial pitch is though, which is "Long live the terminal", essentially. It seems like it's the backwards version of that, which is "Long live the terminal, but also the web."

**Will McGugan:** Yeah. If you imagine it, it's kind of like a Kindle. People think that would kill books. But for me, the book isn't the device which it's running on. It's the words. So these TUIs - they may not be running in a terminal, they'd be running on the web, but they're still TUIs. They still work like the web. They still have the similar kind of keyboard-focused interfaces.

**Adam Stacoviak:** I guess I'm just surprised that you're -- if I'm being completely honest, I'm surprised, I guess, that your business model is built on the other side of it, which is gonna be an uphill battle to get people to build TUIs. I think people want them, but whether or not Textual is the best way to get there remains to be seen. And that your business model is built on taking those TUIs that people might build, and turning them into web applications that have services. That's a surprise to me.

**Will McGugan:** Well, if you think of it -- so I'm enabling people to build TUIs, but the TUI part is almost incidental. I'm enabling people to build user interfaces with Python, without requiring web development skills. I mean, I'm a web developer by trade, and I know that to do even an adequate job for a web application can take some time. There's quite a big maintenance burden, and it requires quite a lot of skills to do. But I'm saying, "You can be a Python developer, know nothing about web apps, know nothing about desktop apps, and you can use just your Python skills to build sophisticated user interfaces." And the fact that they run in the terminal is almost incidental, because you might want to run them in the terminal, on the web, on desktop, you can store them as PWAs... So the pitch is "I'm going to let all Python developers build user interfaces by lowering the barriers."

**Jerod Santo:** I see. So it's as if Textual will have two rendering destinations. It's not like you're putting a terminal UI into the web; you're actually having the web as a separate deployment target. Is that what you're saying?

**Will McGugan:** Yeah. So you can build an application, distribute it through PyPy, or brew. That's fine. If that's all you want, that's terrific. We're doing a lot work with that. But you can serve it, so that it runs in the browser, and you can distribute it to other people. And they won't even know that it's a terminal-based application. I think it'll look so good. Now, you might notice it's a bit retro; they do have a distinctive look about them... But in general, they've got scroll bars, buttons, checkboxes... If you're not a developer, you could be forgiven for thinking it just actually was a web application.

**Jerod Santo:** \[54:17\] So you're letting developers who know Python build terminal apps, and then later, you're gonna say "This is also a web app. Surprise!"

**Will McGugan:** Yeah, pretty much. But we're talking about it now, so hopefully, people will know that in the future.

**Jerod Santo:** Well, you know what I mean... Yeah, they'll have an idea of that future, but the surprise was just kind of like the -- it's not a flip of a switch, but it's like a happy ending. I don't know what you call that...

**Adam Stacoviak:** A curveball.

**Jerod Santo:** Yeah, curveball. There you go. I guess a curveball is a surprise, unless you know it's coming. It's like you yell at them "Hey, I'm throwing a curveball", but then you still throw the curveball.

**Adam Stacoviak:** \[laughs\] Well, you know the pitcher is throwing the ball.

**Jerod Santo:** That's interesting... That was a curveball for me. I didn't see that one coming.

**Adam Stacoviak:** Yeah. Well, I guess instead of letting my inability to see your vision be the conversation, why is that the best business model for Textual? Why is that route the way you build the Empire?

**Will McGugan:** So it's quite difficult to -- it started off, I didn't have a business model. I was just building some technology that I want to build, because it was cool...

**Adam Stacoviak:** Right.

**Will McGugan:** Yeah. And I had to come up with my commercial add-on. And for me - I was a web developer, and I often wished I had a UI which I could use to navigate the file system. Click a file, edit the configuration, and have a button to restart a server, or something. So that's what I was thinking of right at the start, that I could build that and distribute it. And I realized that those type of applications are gonna be useful to quite a lot of people. So I wanted to come up with a way of not just building TUIs, but also getting them into the hands of non-technical people, which is where this web service comes in.

**Adam Stacoviak:** Yeah, that was my initial question in section two, which is how do you distribute these applications... And I said it's okay to punt that for a while, because we don't have that problem now. But your business model assumes the problem, and that's the solve for the problem.

**Will McGugan:** Well, I think that people will really start building applications with Textual. I did a poll on Twitter about what people would use TUIs for if they existed... And it was for every use under the sun. It was for everyone's little pet project, pet problem that they want to solve... And when they build it, they're gonna want other people to use it. And that is a problem with TUIs and these kinds of packages in general, that they're only for developers. But I'm hoping that there'll be a market out there for non-developers.

**Adam Stacoviak:** What's the size of this market? What's the total addressable market for this? I know it can be big, but how--

**Jerod Santo:** 8 billion.

**Adam Stacoviak:** 8 billion? \[laughs\] Well, I suppose, yeah. I mean, everybody who's not a developer could be using this. But I think--

**Jerod Santo:** Well, I guess every internet-connected person.

**Adam Stacoviak:** Well, how will TUIs, or how will this play into mobile? Because for the non-developer, mobile devices obliterate a desktop, for the most part.

**Will McGugan:** Yeah. I mean, they will be able to run it on mobile devices. You can have terminal-like experiences running on mobile. You could put it on a tablet, and you'd still have touch, and gestures, and things... We can build an interface for that, so it would run quite well, I think, on a tablet.

**Jerod Santo:** So if you're enabling developers to build user interfaces with Python, and not have to deal with the difficulty of web app development, but then you're building in CSS... Like, wouldn't they also have to know web app development then? Or is it just like some basic CSS stuff, it's not that much?

**Will McGugan:** \[58:02\] It's a much reduced dialect of CSS. I mean, CSS and the web is enormous; you have to have a lot of skill to wield it. It's much more reduced, because the rules are much simpler. You've got color, and border, and some other styles, Link colors etc. So it's much easier to learn than it would the entire of web CSS.

**Adam Stacoviak:** There's a lot to be embraced, I would say, from the web platform, and even what it uses to get built. I know that you said widgets and containers - or I can't recall the exact terminology you used - were similar to divs, and you have CSS and whatnot... There's a lot of frontend web developers out there that know HTML, CSS and JavaScript and can build full-featured web applications, but would also love to build TUIs... And now they have to essentially abandon a lot of that direct skill set and learn Python, and unlearn web, to build TUIs in Textual's world.

**Will McGugan:** Well, the thing is, the people whose job it is to write web applications - they shouldn't be worried about losing the job, or being forced to work on Textual. It's for the people that --

**Adam Stacoviak:** Well, I mean to use it. I think it's really cool. I think more people want to build with it, and I think a captive audience would be the ones who are most fluent with interface building, and that's frontenders. They're gonna know those skills, but you can't take HTML, CSS and JavaScript and apply it to Terminal.

**Jerod Santo:** Well, I think they have options... Because I know there's like a tool that builds -- Inc maybe... It builds terminal apps with React, and stuff. So I think that market has people building tooling for them to take their frontend skills over. I think there's another large, large community that Will is part of, which knows Python, and doesn't know web, and would love to build some UIs.

**Will McGugan:** I think of these Textual applications not as replacing what people use web applications for, but I think because it lowers the barrier, those applications which simply weren't being built because it would take too long with a web application, or they didn't have the skills - I think a lot of these could be built with Textual, because you just need Python skills, which a lot of people have, and it's just easier and quicker to build them. So I think there'll be not cutting off a part of the market, but creating a new market for applications which just were never built in the first place.

**Jerod Santo:** I wrote Python for about six months a decade ago, and I had never written any before... And it took six to 12 hours of just like dinking around to where I could do some basic -- having already know how to program, right? Like, I was a Ruby programmer. Moving from JavaScript over to Python is not a leap. Of course, Python has this huge breadth of things you can do, but we're talking about just core functionality. I don't think it'd be a big leap for somebody if they wanted to make that leap. But like I said, you probably don't have to; there's probably JavaScript tooling for this exact kind of thing. But to get into the Textual world, if you wanted to, Python is a very -- Will was talking about it earlier on, it's a very approachable programming language, which is kind of a weird, ironic thing with it not being approachable from a distribution perspective historically...

So I don't think Python is going to hold them back... Yeah, getting people interested in text applications in general is probably a bigger selling point. How long do you have, Will? Do you have a runway calculated out with your current burn rate? You know, startup stuff... "We can work on this for N years, or N months before I need to have some sort of an income."

**Will McGugan:** \[01:02:03.07\] So we've got five employees, including myself, and assuming that level of staffing, we can keep going for 3+ years, which is great.

**Jerod Santo:** Nice.

**Will McGugan:** Because Scottish people don't like to spend money... \[laughter\] So I'm using that money wisely.

**Jerod Santo:** So they're all Scottish, the whole team?

**Will McGugan:** One is Portuguese.

**Jerod Santo:** Okay.

**Will McGugan:** He works remotely.

**Jerod Santo:** Okay. Are the rest of you all collocated, like hanging out in the same office, and stuff?

**Will McGugan:** Yeah, we're all in Edinburgh, apart from the Portuguese guys.

**Jerod Santo:** That's cool.

**Will McGugan:** We'll probably be more remote in the future, but I kind of like having people in the same office, that you can bounce ideas off of. I find things move a bit quicker if you've got a core that's like physically near each other.

**Adam Stacoviak:** Are you still hiring? Or are you capped?

**Will McGugan:** Not right now, but we probably will in six months.

**Adam Stacoviak:** Gotcha. What kind of skill set do you think you'd be looking for in six months? Like, what kind of ideal candidate comes to your table?

**Will McGugan:** So at the moment, we've hired some very technical people, the type of people that can get involved in the nitty-gritty and design APIs. I think the next phase will be kind of developer relations. So we want to sell Textual as like a serious proposition for building interfaces... So I imagine it'd be people that are particularly good communicators, people that could produce videos, that could write blog posts, that kind of thing. So I think they call that developer relations. That'd probably be the next hires we'd have.

**Adam Stacoviak:** Very cool.

**Jerod Santo:** Well, I guess speaking of public relations, we should mention a thank you to our friend, Simon Willison, who gave us your name, Will, and said that you're a person we should definitely talk to you. One of the things he was praising was how you're building everything out there in public; you're probably lead DevRel at this point for Textual. Do you want to speak to your philosophy around that, maybe even the way you go about it, or anything with regards to your constant stream of output?

**Will McGugan:** Sure, yeah. So when I started doing this kind of thing nearly three years ago, I had no idea that it would turn into a funded startup. I just wanted to share what I was working on, and it turned out it was quite visual. Rich is quite visual, so I could create a screenshot and I could post that and I could discuss it. Initially, I didn't have many followers; I might get a few likes here and there, but people didn't seem to appreciate that kind of content. So I kept it up...

Well, before the funding, I was really posting videos and screenshots, and that's probably what got me noticed by the venture capital firm that I went with, was the fact that I had built up an audience. These projects got a lot of stars, and that was in part due to me just sharing what I was working on. I'd share the successes... If I was really proud of something, I'd post a screenshot. And I'd share fails.... If something didn't work out, and it just was all garbled, I'd share that as well. And I'd share technical information, just whenever it came to mind. It's kind of cathartic.

Software development can be kind of like a solo activity, especially if -- I wasn't working on a team, or working with a team at that point. It was just me, and I liked the idea that people were interested in following along. So I kept doing that, and built up an audience that way... And it seems to be beneficial. I mean, we're still a small company. I haven't got an advertising budget; I'm not going to take out adverts on buses, or the news, or anything. So this is how I reach my audience, and potentially customers in the future. And I quite enjoy doing it.

**Adam Stacoviak:** Yeah, I think, obviously, what you've done has worked so far, to reach an audience. You've got the attention of folks with money, and have a shared vision, obviously, because you wouldn't have taken their money otherwise... And you've got Simon's attention... I think Simon's a pretty smart fella.

**Will McGugan:** \[01:06:09.21\] He's terrific. I always appreciate his perspective, and his take on software. He's got a good eye for what good software is, and who's building good software... So we took his suggestion of having you on the show pretty highly, of course.

**Will McGugan:** I appreciate Simon doing that, and I love his content. He shares everything he learns; he puts it on Twitter or on his website. He's got like a huge corpus of various articles on little technical details, and then big issues. So yeah, there's lots of terrific stuff on his website.

**Adam Stacoviak:** Is there anything that we haven't asked you as part of the show today? I know Jerod and I had a couple of different angles that we came to the show with, and some investigation... But what may we have not asked you that you want to share here as we close out?

**Will McGugan:** Um, I guess I could share -- I don't know if I said, but this is my plan B. So plan A - I was working on Textual and realized I got a bit of a following, and I had this idea for the web application. And at the time, I was a bit down on my day job, and I figured what I'd do is I'd take a year off. I've got some savings... I would just live frugally, live off my savings, and some income from sponsorship which I was getting the time... And that would have happened. If it was this point, I would have been running low on money... But that's when the venture capital firm got in touch with me, and we discussed it, and I discussed my plans, and came up with a business plan, a pitch deck, and turned everything around. So it was as much a surprise to me as it was to anyone else.

**Adam Stacoviak:** So your current trajectory was a plan B. You were just expecting to take some time off, live off the savings, and just enjoy your craft, essentially.

**Will McGugan:** Yeah. I was just gonna be me. I'm always happy to tinker, write some code over the year, and then if I did come up with something end of the year which was good enough, I could take that and then try and build a company, or income out of that. Worst-case scenario, I would just return to my regular day job. But things turned out quite differently.

**Adam Stacoviak:** What's the most exciting thing and the most scary thing, I guess, of this unexpected turn for you?

**Will McGugan:** I guess I'm excited by what people are going to build with it. If I can enable people to build things which they weren't building before, that's exciting to me. If there's a lot of applications that exist in the future, which wouldn't have existed without Textual - I get quite a lot of buzz about that.

Scary, I guess, is the amount of work. Plan A was to allow me to reduce my stress levels. I could just focus on myself, and write some code, catch up with my reading, get a bit of exercise... But now I've got so much going on. Life's a bit crazy. I'm working quite a lot, and my stress level's a bit higher, but also, I'm enjoying things a lot more. So it kind of balances out.

**Adam Stacoviak:** \[01:09:15.01\] Yeah, an unexpected Plan B, with venture capital, and the possibility of building something that can be a business around this - it does have the struggle... Because you're the one with the idea, you're the one with the vision, you're the one with the responsibility in a lot of the cases here... So you are carrying almost, if not all the burden.

**Will McGugan:** Yeah. And having employees - that's not something I'd thought a great deal about in the past. I want to build a company which works for them, which they enjoy working for, and can help them meet their goals. I can kind of build the company that I would have wanted to have worked for earlier in my career... So that's a whole load of things which I hadn't thought about even a year ago. So that's all kind of exciting.

**Adam Stacoviak:** Yeah. Well, Will, thank you for sharing that part of your journey, and that part of your story, as well as all the details around Textual, how you got there, what the future might be... I really, really appreciate you being courageous to take that step. It's one thing to be able to create, and then one thing to put it out there, like you have. Building in public is -- you know this, because you see it every day... You put something out there, it's a bad or a good thing... It's hard. That's hard, to be vulnerable with the world, and you've done that.

**Will McGugan:** Yeah. It's also quite cathartic. I would actually recommend it to people. If you can get over that phase where nobody seems to be paying attention to you, and just post things, eventually, people will actually find your content and hopefully follow along. So it does kind of lay yourself bare. Sometimes you get criticized, sometimes... But most of the times you don't, people appreciate your content. So yeah, I'd recommend it to anyone who's building something, to just tell other people about it.

**Adam Stacoviak:** There you go. Alright, Will, thanks so much.

**Will McGugan:** Thank you.

**Jerod Santo:** Yup, thanks.

**Will McGugan:** It's been great. Cheers!
