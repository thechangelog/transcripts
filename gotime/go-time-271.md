**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about cross-platform graphical user interfaces. Joining me, my co-host, Natalie Pistunovich. Hello, Natalie.

**Natalie Pistunovich:** Hi, Mat. Happy Nowruz!

**Mat Ryer:** Thank you very much. What is that?

**Natalie Pistunovich:** Persian New Year. Which is on the first day of spring, which is the equinox day.

**Mat Ryer:** Ah, lovely. So this is where the days start to get longer now, for us in the Northern Hemisphere.

**Natalie Pistunovich:** The daylight hours start getting longer.

**Mat Ryer:** Yeah. Well, not for everybody, because we're also joined by Lea Anthony, staff software engineer for safety culture in Sydney and creator of Wails, and coming in live from Australia. Right, Lea? Welcome.

**Lea Anthony:** Thank you so much. It's good to be here again.

**Mat Ryer:** Yeah, it's good to have you back. Oh yeah, there's gonna be a delay, isn't there, with Australia?

**Lea Anthony:** There is, yes.

**Natalie Pistunovich:** It's because the nights are getting longer...

**Lea Anthony:** Yup.

**Mat Ryer:** Yeah, that's what's gonna happen now. Bless you. Well, this is weird... I'm sort of like not sure if I believe Australia yet. We'll get into that later. I've never been, but... Just skeptical. I like to just ask questions. That's all I'm doing.

We're also joined by Andy Williams. Andy is a tech leader in Scotland, software engineer and open source contributor for over 20 years. And Andy, you created Fyne, the graphical user interface package in Go, and you were a core developer on Enlightenment and Maven too, which is kind of amazing. Welcome.

**Andy Williams:** Thanks very much, Mat. It's great to be here. Nice to be with Lea and Natalie as well. Hope everybody's having a great day. I'm glad to hear that we're heading into more daylight, because - I mean, obviously, we're very far north here, so maybe that brings a little bit of sunshine.

**Mat Ryer:** Yeah, that's very good. Very polite introduction as well. I'd like a lot of our guests to pay attention to that for next time.

**Lea Anthony:** Noted.

**Mat Ryer:** \[laughs\] Okay, cool. So first of all, graphical user interfaces... How do you pronounce -- do you say GUIs? Do you say that?

**Andy Williams:** So I always said GUI, and I thought it was just the easiest way to get it over. Everybody knew what you were talking about. Until I saw somebody taking notes... I was talking about a GUI book, and they were writing down what to go and read, and they just wrote gooey, and I just thought, "Oh, wow, we've just increased the barrier to understanding by saying it that way."

**Mat Ryer:** Yeah, that's true. And also, a GUI book... No one wants to read that, do they? You can't put it down, because of course, you know... \[laughter\] Lea, do you say GUI?

**Lea Anthony:** I do. Is there another way?

**Mat Ryer:** Well, G U I. I've heard that.

**Lea Anthony:** Nah...

**Mat Ryer:** Natalie?

**Natalie Pistunovich:** GUI team.

**Mat Ryer:** GUI team. I like it. GUI. It's also -- I don't know, it's quite endearing. I have though -- I did work at a place where it was used as a kind of... There was a team where they had the very strong feeling that backend engineering was the grownup engineering, and then frontend were just putting nice pictures on things... And they used it as a hate term in that place, which was a shame.

**Lea Anthony:** Wow...

**Mat Ryer:** Yeah.

**Andy Williams:** I think I have heard people refer to graphical developers and maybe GUI as coloring pencil jockeys, but probably not endearingly.

**Mat Ryer:** Yeah. Yeah. I don't know why; it's interesting. And I do think this has changed, actually; like, this genuinely was a thing, where -- and you do sometimes see it on Twitter, it'll make the rounds, when someone wants some clicks, or they want some views, so they'll say something like "Oh, HTML is not real", or "CSS is made up", which is a fair point; it kind of is. But still... I mean, I think frontend engineering, in a lot of ways, is harder, depending on the problem. At least in the backend you've got kind of consistent ins and outs. The frontend - who knows what the users are gonna do? They're people, they're so unpredictable. They can click anything. Natalie, do you say GUI?

**Natalie Pistunovich:** I do say GUI, and I also think that sometimes machines can click interfaces, right? That's why we have those CAPTCHA checks.

**Mat Ryer:** Yeah, that's true.

**Natalie Pistunovich:** We don't want, for some reason, for machines to click on things.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** We're asking them to help us to check that they are human.

**Mat Ryer:** Makes me wonder whether on like programmatic APIs, whether we should have a thing that says, "Are you a human?" and you have to say no in order to pass it.

**Natalie Pistunovich:** You just invented the user agent. \[laughter\]

**Mat Ryer:** Okay, good. So I feel like we've got the important stuff solved then. We're going to call them GUIs. But you don't really associate Go with building GUIs, really, do you? Go tends to have a reputation as being sort of a systems language, backend services, APIs, that kind of thing. But you can use it, can't you, Lea?

**Lea Anthony:** That's right. You can. I think Go is a general-purpose language, like most languages, so why not? What is it about Go that would be bad about using Go for GUIs?

**Mat Ryer:** I don't know. I don't think it is bad. Andy?

**Andy Williams:** \[06:10\] Well, I mean, absolutely, I would agree. It's a really great fit. You do hear from a number of people say "Well, that's not what the language was built for." But like Lea says, a general-purpose language, the usefulness of it is not defined by its standard library, or what people necessarily originally created it for. Instead, what do people find that it fits well with, and where does it gain traction. And from what I've seen - and I'm sure I'm not the only one on the call here... Folk are just absolutely jumping in with it and finding that the fit is really good. If you kind of disconnect it from the idea that servers are what it was originally built for, and look at things like the memory management, the garbage collection, the static typing that helps you have really well-defined APIs, you've got something that's pretty solid. And then - I mean, if Go's got to be able to solve all these cross-platform challenges for us, then why would you not use it to solve one of the biggest challenges out there in graphical apps, which is just getting something onto all of these different platforms? I think that the fit is tremendous. Yeah.

**Mat Ryer:** Yeah. Maybe we could dig in a little bit to your projects, your respective projects, because they both provide this kind of capability, but they do it in quite different ways. Lea, for anyone that's not familiar with Wails, can you tell us how to spell it, and also what it is and how it works, please?

**Lea Anthony:** Yeah, so Wails is spelled W-A-I-L-S. It was a bit of a play on words back in the day. I found a project called WebView, and I wanted to be able to create a graphical application using HTML. And the reason for that was because I was using it in my day job, so it was something I was already familiar with. And I found something called WebView, and it was quite good, but I sort of wanted a higher-level experience with it. There was a lot of stuff missing, so I kind of thought, "Well, why don't I write some functions, and build the IPC out, and get the communication between the front and the backend; they're different worlds. So I spent a long time doing that, and it kind of felt like it was a bit like Rails, or Ruby on Rails... So it was kind of a play on words for that. It's one I semi-regret, but also not, as well. So yeah, so the project just kind of evolved, \[unintelligible 00:08:30.03\]

**Mat Ryer:** And you're also from Wales.

**Lea Anthony:** Yeah. You think I would have thought about that, right? \[laughter\] But I didn't. It just suddenly dawned on me one day, "Oh yeah, maybe that's where I came from." But yeah, the project is for people who want to write HTML apps in Go, and so it provides a lot of tooling around that.

**Mat Ryer:** So you write like web, basically, almost like web frontends, don't you?

**Lea Anthony:** Yeah. So I think one of the spaces that Go is reasonably big in is for generating applications on the website, so websites and stuff like that... So there is sort of a little bit of affinity there between the two worlds, but yeah... I mean, it's kind of evolved into more kind of an Electrony thing, where there's \[unintelligible 00:09:21.01\] menus, application menus, dialogues, all that sort of stuff. It wasn't really what I was going for originally; it was kind of just to scratch an itch so I could build a \[unintelligible 00:09:31.28\] been running. So... Yeah, it was just so much fun building the toolkit that I kind of got lost in it.

**Mat Ryer:** That's amazing. But I like the fact, again, it's an example of something where, like you say, you were scratching your own itch, where you were solving your own problem... And you hear this again and again, and it's always my advice to engineers that want to do something, younger engineers maybe, or if they're new to tech, is always to that - solve a problem that you have, a real problem. Like, really solving problems is what we're doing here, and the tech is a means to do that.

\[10:12\] Andy, so Fyne... Fyne doesn't work quite like that, does it? It takes a slightly different approach.

**Andy Williams:** Yeah, absolutely. Just in case anybody doesn't know, we also picked a strange spelling. It's F-Y-N-E, so not necessarily what you would think out the door... But with a slight geographic connection. It's a place in Scotland, so it kind of worked.

**Mat Ryer:** Same like Wails, and Fyne... I mean, this is amazing.

**Andy Williams:** I know. Inspiration comes from funny places. No, but you're quite right, we took a different route to designing the toolkit when Fyne was being thought up. I come from a background where I've done a lot of native app development recently, but I'd also been working with cross-platform tools in the Enlightenment Project; that had its pros and its cons. Apple's toolkit, again, had some really great benefits to it, but it was basically single-platform at the time... And I'd seen a few things come and go, like Swing, and others, and I just sat down one day and thought, "You know what, actually? There has to be a better way to be able to write something with a programming language, and idiomatic code that just executes on any platform." And so that was the approach that I took, basically; a very simple architecture of how it might work was set out a simple API structure, and then actually it was when I had thought about that I came to the Go language and realized that it was a really great fit. It just so happened that I didn't find anything similar in the language, which of course was a little bonus... But you're quite right, this leads to applications that, at least for the end developer, is written in pure Go. So whether you prefer this approach or not, it fits quite nicely with the language, and you are just writing using the standard structs, interfaces, methods and functions. So that works quite nicely; it keeps your code maintainable, but it offers a few little benefits... Like, we get unit testing baked in, because it's really solid in the language, and we're using the language constructs.

So I think that the fit, at least for what I'm trying to achieve, has been pretty good there, and it's a route that I like to take... But it certainly does have trade-offs, because we don't get some of the things that you would with an HTML-based solution, like real-time editing. So we're definitely building applications like solid, engineered applications... But it is what Go is great at.

**Natalie Pistunovich:** How do the tests look like for the UI? What would you be testing there?

**Andy Williams:** So essentially, the widgets are broadly advertising like a behavior-based API. And so your unit tests are testing the behaviors. So you might create an entry, and then you might say, "type this text into the entry", and then you could validate that the text is correct. You could ask our test package to then double-tap the entry, and you could validate that the word is selected by checking \[unintelligible 00:13:02.28\] with some excellent unit testing frameworks. Of course, many are available; Testify may be the one that we're using, but there you go. So that basically is helping to validate, but superfast, that things are functioning correctly.

We've realized though that sometimes you do just want to see what's going on, so you can test the state of the rendering as well. You can persist it to an image, and do a graphical comparison and compare programmatically as well. Or, because anti-aliasing and other challenges make it a little imprecise, you could do that with an XML tree. But the really nice thing is it executes super-fast, because it's just STDIN-memory unit tests, so nothing displayed to screen at all, which is a nice benefit.

**Natalie Pistunovich:** And then when you test something, like you mentioned double-clicking a button - is it like "Let's pretend the double-click happened", and then something? Or do you have some external script that would double-click things for you?

**Andy Williams:** It doesn't go through any external systems. Because it's executing in-memory, essentially what's happening is we're loading a test driver which is simulating the application run. So your widget loads fully in an application that is in-memory and not rendered to screen. So when you say "Double-tap this widget", it is causing the event chain to kick-off, as though the user was double clicking something that was on the screen, without having to go through any operating system connection.

**Natalie Pistunovich:** \[14:27\] That is cool. I have to say that to anybody who's not watching the live but listening to this later, Mat has this camera that follows you around, and he's like moving back and forth, and then it just follows him around. So you can just watch that like a lava lamp... So this explains all the awkward silences from now until the end of the episode.

**Mat Ryer:** \[laughs\] Yeah, it's the it's one of those Apple Studio displays, and it just has a wide-angle camera, and then it uses software to track your face. And if someone else comes in, it'll zoom out... And it's okay, it's just that sometimes you want to be off-camera for a minute and you might forget that it's gonna follow you around, so...

**Andy Williams:** Now that Nat has said lava lamp, I can't unsee it, because Mat's red jumper is just really fitting that description very well... \[laughter\]

**Mat Ryer:** Yeah... I'm just like floating around like this...

**Natalie Pistunovich:** If this is not convincing people to start watching live, I don't know what will.

**Mat Ryer:** Yes. I think we're also on YouTube as well. You can actually watch the raw -- is that right, Natalie? I'm not sure about that.

**Natalie Pistunovich:** Yes, yes. We are on YouTube, and at least one person confirmed that is watching live. Hi, Mike Dodson. We appreciate that.

**Mat Ryer:** Oh, hi, Mike. Yeah, but this is essentially a podcast. It's not just for Mike...

**Natalie Pistunovich:** But we are talking about visuals today.

**Mat Ryer:** Yeah, we are talking about visuals as well...

**Natalie Pistunovich:** We can also talk about audio. I cannot help but notice that, Lea, in your description of the repo, you also mentioned all the albums that you were listening to while you were writing this...

**Lea Anthony:** Yeah, I don't know why I did that, but I think I saw it in some other repo and I thought "That's interesting. What an interesting way to kind of share maybe some lesser-known bands." I think that was just before streaming happened, so I think people kind of naturally find, through recommendations, or whatever... But yeah, I don't know. I don't know why I did that, but it was quite good fun. And it was interesting, because some of the people actually contacted me and said, "I've listened to this band, it's great." So yeah... Does anybody else do that? Have you not seen that in any other repos?

**Mat Ryer:** No, I've never seen that. And yeah, so if you go to github.com/wailsapp/wails...

**Natalie Pistunovich:** ...you'll also find that in the show notes...

**Mat Ryer:** You will find that in the show notes... But you know, who reads the show notes? Do you read the show notes? I don't read the show notes.

**Natalie Pistunovich:** I write them. \[laughs\]

**Mat Ryer:** You write them, yeah. \[laughs\] Yeah, thanks for that. Yeah, so the unit testing stuff's quite interesting. In Fyne, what does the frontend code look like itself? Do you end up having big, sort of nested objects essentially sort of describing the user interface?

**Andy Williams:** Yeah, I mean, you totally can, if that's your preference; you could set out the essentially like the object structure of your user interface as one big struct; we do support that approach to writing, as you can with any rich-structured dataset in your Go code. But also, the use of constructor functions helps us to break it down into smaller components, which I quite like. One of the design principles is to keep things encapsulated, so your widgets, the standard widgets or any third-party widgets could be reused in any context at all. So if you're doing it that way, then you might have a function that sets out to your main screen, and that might call different functions to insert panels into the parent container, at the right places, like "build my toolbar", or "set up my tree layout." And I like to encourage this because I'm a fan of clean code, and the idea of smaller functions that do just one thing, and it fits quite nicely in that way. But I would have one structure, like an application structure, or maybe one per screen of your application that's tracking the important aspects, anything that you want to go back to and check for, like an entry, or an output widget you might want to have, so that you can reference it later; that could be quite helpful.

\[18:21\] The benefit, really, of having these pluggable widgets fits very nicely with Go's ability to import third-party code from anywhere using the standard Git lookups on an import. So you can take a third-party component, drop that into yours via an import and a new constructor, and it just appears in your UI. So things like our terminal widget - you can drop a fully functional terminal into any Fyne application, just because that is a widget that you can drop in anywhere. And this is an unusual flexibility, I find, for native application development. It's another one of those things I cherish about the design; and it was down to Go, really, that this was possible.

**Mat Ryer:** Yeah. So Lea, in Wails, when you build the frontend, what does that look like? It's HTML, JavaScript... Is it CSS as well?

**Lea Anthony:** Yeah. So you just develop your application just like you would any website, I guess. You choose the npm ecosystem, or whatever ecosystem of your choosing. You can use whichever toolkits that are already existing... Yeah, there's not much more to say about it other than if you've developed a website before, then you can develop an app. \[unintelligible 00:19:34.28\]

**Mat Ryer:** Yeah. Yeah, I like this. I like this common theme of transferable skill. Obviously, there's going to be things to learn, but pretty much if you've got Go, if you've got a web frontend thing, you can pick up these tools and start to use them. I always think that's quite good, quite important, really. The developer experience for these things is quite important, because classically building, particularly -- nevermind cross-platform, but actually just building graphical user interfaces anyway, it's quite funky. I've written some bits for macOS trying to interact with the operating system, and it's difficult. It's not easy; you're outside the comfort zone often. And these frameworks kind of solve that.

But tell me a bit about the cross-platform... Because this is something that a lot of us may do for - whether they're GUI apps or not, like, writing for cross-platforms. Is that easy, just because Go builds for them all? And suppose you've got graphic \[unintelligible 00:20:46.07\] Is it easy?

**Lea Anthony:** Yes.

**Mat Ryer:** Is it? Just because you just write it once and it works? It can't though, right?

**Lea Anthony:** I think surely it can. It's the dream that we're both chasing. And absolutely, it's possible. I'm not gonna say it's easy for the toolkit, but the ambition is that that's exactly how it works. You have an application, and you can run it on your system, and know that it's going to run exactly the same on others, whether it's another architecture, another operating system; if your desktop, or maybe a tablet device, or a phone, or whatever it might be - if the platform is listed as supported, you've got basically guarantees that the app is going to work exactly the same.

**Mat Ryer:** Right, so for users of that. So tell me about building that then. So writing cross-platform code - whether people are writing GUIs or not, Go people, writing Go, targeting different architectures... Obviously, you can just build for any architecture, but when you're interfacing with the frontend components and things, that's different in every operating system, isn't it?

**Lea Anthony:** \[21:50\] I think the \[unintelligible 00:21:50.12\] the frontend isn't necessarily different on the operating systems, but I think the thing that's quite tricky is every operating system provides things that are a little bit different to the others. The file dialog, for instance; in one operating system it could be that you can create directories and folders in the native dialog, but in another one you might not be able to do that. So that sort of disparity between what the native toolkits provide - and I'm not talking about \[unintelligible 00:22:19.28\] because I'm talking about the stuff that the operating system gives you... I think bridging that is quite tricky. So the way that Electron does it I think is they essentially give you all of the options, and then next to each of the options you have to decide -- it will tell you "This is for Mac" or "This is for Windows only." I think it's a classic problem, right? There's no good way of solving that.

One of the approaches I took early on was if it's not on all of them, then don't do it, and so you get this kind of like it works on all platforms. But then people would come back and say, "Well, what about this?" A good example of that is \[unintelligible 00:22:58.14\] So the application icon in the tray in Mac can show text, but in Windows it can't. So if you write an application that needs to do that, then you've now got a real big problem in porting that to Windows. I'm sure there's plenty of other examples of that.

**Mat Ryer:** Yeah. So I think that that practice then of doing well in the abstraction, when you design an abstraction over anything - that's always the challenge you have... Do you go with the lowest common denominator, so that you know everything's going to work everywhere? Do you have like some kind of capabilities API or something, so that you -- like, if you call something that's not available, is that an error at runtime? How does it work?

**Lea Anthony:** I feel like we might have different answers...

**Andy Williams:** Yeah, yeah. I think it's not necessarily a runtime error, but it's just not supported. So if you open up a file dialog and request that \[unintelligible 00:23:53.22\] There's not much you can do about that. That's just what it is. So I think - yeah, the target binary will have slightly different capabilities on the different platforms, but the code could be the same. So the Go code would be the same, but... Yeah.

**Mat Ryer:** But what about for capabilities where you just don't have that concept? Are there any concepts that exist in one operating system that don't exist in others?

**Andy Williams:** So I was just thinking I could pick this one up, because it's slightly differently when it comes to what a native system can and can't do. We're not particularly lowest common denominator in Fyne. We do provide a lot of functionality replacing what the local system should be doing...

So for example, we have a file dialog that will display for the application built with our toolkit rather than the native, which means that you've got consistency and a completely usable application on systems that just aren't fully provided for. For a moment here I'm looking at \[unintelligible 00:24:55.26\] They're not really graphical platforms, but a Fyne application is going to load and run and be fully functional on them, out of the box. So we had to provide a bunch of functionality, like code it up ourselves to fill in these gaps.

But of course, you do have things that aren't going to be available on all platforms. There are specifics that mobile has, that it can make available, that a desktop is no going to deliver, or the desktop would have. Actually, it's amusing that you mentioned \[unintelligible 00:25:24.03\] and the System Tray concept, because this is something that really mobile doesn't have. I mean, there's notification areas, and there's things that can technically be done, but the concept is not the same.

Actually, with the Fyne API we took her a note from type-checking here, and using interfaces to provide extended capabilities. So an application, the interface application provides all of the things that are guaranteed to work on any system; you know, you can show a notification, open a window, or open a URL to a local browser, or something like that. But the system tray isn't part of that, because we can't guarantee it's going to work.

\[26:04\] So we have a desktop package that defines an extension on the app, and so you can do a type-check in your code, so at runtime the implementation of the application is going to vary, but your code can be checked by the compiler to make sure that you're not going to do something that could crash at runtime, or that you're not using functionality that won't be available. I'm not going to say we get it right every time, and abstractions can be wrong, for sure, but we're working really hard to make sure that if you can autocomplete it in your IDE, then it's going to function.

**Mat Ryer:** That's interesting then. So these are interfaces then, and you literally use the type assertion and the second argument, the okay, to check, and then that's how you know if a certain capability is available or not?

**Andy Williams:** Yeah, exactly. So you could do a type check for a desktop.app type checker on your app instance, and that would then allow you to access system tray. I think if you did mobile.app, it would expose information about the device capabilities, like orientation, and other sensors that are not really built into a piece of hardware that sits on a desk.

**Lea Anthony:** Does that change depending on the platform you're developing on? So if you're developing on Windows, and you want to say "Do the text on the tray icon", and you hit the dot, do you see the same thing?

**Andy Williams:** That's a very good point. That does work if your IDE understands the target that you're currently testing for. So you would need to drop in the variables that adjust the IDE to the platform that you want to ask about, and that way you can kid it into thinking that the type assertion will work or won't, depending on the types that have been set. So maybe autocomplete isn't always the right way to go, but \[unintelligible 00:27:52.29\] it should still work, because it knows the interface, it just doesn't know if the type assertion is going to pass. So most of the time it should work. I'm sure there's instances where it's not quite as straightforward, but I believe -- no, for the most part it does.

People ask "I think I've found an issue. I did these things and it doesn't do what I was expecting, so this a known issue." And I'd like to be able to say, "Well, if you were able to tell it to do something in code and it didn't do it, then it's probably a bug, not some misconfiguration or user mistake", because we try to keep a pretty lean API, and something that's understandable and pretty much guaranteed to work.

**Natalie Pistunovich:** Did the introduction of generics make your life easier?

**Andy Williams:** The introduction of generics has not reached my life, I'm afraid... I know that it is going to make some things better, but I was quite happy to sit in the sidelines and wait for a while until a lot of folk had tried very hard to see where that really was going to benefit. So we have some data-binding APIs that help you to connect a piece of data with a graphical element on the frontend directly, so you don't need to wire any boilerplate code, you don't need to handle any events or changes. That internally at least would be improved by generics, because we do code generation at the moment. However, we're not in a place to be able to pick that up at the moment, because we support versions of Go way back before generics were a thing... Partly because I want people to be able to build their apps with whatever Go is installed on their system by default. And some systems are not yet fully up to date with a Go that is new enough. I think 1.15 is still standard on Debian stable, so we're kind of waiting until their next release, when it goes up to 18, I think...

But the other thing is we do still support the Go 1.14 API, because it was the last version that supported ARM-32 for Apple devices. And there's just a part of my heart that is not excited about condemning that millions of devices to the scrapheap because the compiler team agreed with Apple's assertion; those were legacy devices.

\[30:07\] So we're going to have to make the change, and people were pushing for it, of course, because the new language features are great... And so at some point this year we will be upgrading our lowest common supported version. But even so, I'm not entirely convinced that generics is going to make a massive difference to our API.

**Mat Ryer:** Yeah. And Lea, Wails has the same kind of idea where you can bind types. And I guess you just use interfaces at the moment. Will generics help there, or change things for you?

**Lea Anthony:** Yeah, I don't know, really. I think, like Andy, I've just sat back and wait to see what happens on the generics front. For me, generics - the best use case for it is things data structures, and some of the stuff you wouldn't necessarily deal with directly. Yes, there is some very useful cases where you want to reuse perhaps some functionality across different types, and you want to be able to reuse that... I haven't really seen that many places where that would be useful for me. I think there's perhaps one use case where I've been looking at the concept of developing a state store.

I'm a big fan of Svelte, and the state store in Svelte is so ridiculously simple and useful that I kind of like this idea that I'd love to use that in Go, but to be a kind of a bridge. And so you'd have this common state store. And I think the original implementation of that - I did do one once; it used the interface, the blank interface, and there was some problems with it. You put a lot of the onus on the developer to do type conversions for all of the different things, and what happens if you want to change that... And it wasn't a great solution. I thought generics may help with that, so you could maybe create multiple stores, and you'd store different things in them, and you could use the same code... I'm still looking at that. It's not something that I've really spent an awful lot of time on. I don't know, jury's still out for me.

**Natalie Pistunovich:** It's a bit of an unexpected answer, because in all the conversations I was listening to about pros and cons of generics, many times the examples of pro work "User input", and I was thinking that GUIs - I would hear two Yes'es and two Not Yet. But those are very refreshing answers.

**Mat Ryer:** Yeah, we need to do a dig-in on this; we need to do a Go Time episode on generics and sort of state of the union and see what's going on, and see how people are using it well, if it's been abused... Yeah, very interesting.

**Break:** \[32:41\]

**Mat Ryer:** So if you started again today with these projects, is there anything you'd do differently?

**Andy Williams:** Wow, I have an immediate thought that came to mind, because - so we made a stable API quite early on. We're now at 1.0, in possibly the second year of development... A lot of people criticized us, "That's far too early, you can't possibly meet the semantic API guarantee, and \[unintelligible 00:33:56.27\] Now, we did manage to; there's not been any unexpected breakages, but we needed to introduce a v2 package a couple of years ago for some breaking changes... And so obviously, the simple answer for me is I wouldn't have made those mistakes in the first API design, even though it took us a while to understand why. So underpinning it was realizing the complexity of the rendering something that's gotta work across different platforms when you just have such a massive diversity of screen output types; the difference in pixel density, sizes, and all sorts of things...

The underlying problem was I had thought that the output type would be an int to address pixels on screen, because of course, pixels are pretty standard, and if we were scaling up, we would follow, I guess, Apple's assertion that you've got one times, two times and three times images for the greater pixel density screens. And we've modeled that for a while and it worked okay, and then it started to fall apart, because we introduced an animation API which would transition something from one place to another place if you used a move animation. And when you have the integer-level precision for the output device and you're scaling it up, the intermediate values just don't exist. We jumped, jumped, jumped, and so we had to move it to a float-based numbering system instead. So I wish I hadn't made that mistake, because it was the one that truly was a breaking change where we had to upgrade.

But it's incredible when you get into the complexity that is overlooked when you don't understand the domain you're getting into... And in case, of course, any young, impressionable people are listening, don't build your own graphical toolkit. It's just safer to walk away.

**Mat Ryer:** Or if you do, maybe your advice should be "Always use floats."

**Andy Williams:** Well, I'm not too sure that I would -- I don't think I'd stand by that; somebody would probably take away my software engineering license if I said to always use floats.

**Natalie Pistunovich:** We will also take hardware off your hands, like FPGAs.

**Andy Williams:** \[36:06\] Yes.

**Mat Ryer:** What about you, Lea? Do you use ints and floats?

**Lea Anthony:** Well, it's interesting that Andy said that, because part of going into the Apple toolkit, I noticed they do use floats for a lot of things that I wouldn't expect. And so I didn't really know why, so thanks, Andy. I learned something. That's great.

**Andy Williams:** \[laughs\] Excellent.

**Lea Anthony:** Yeah, I mean -- I think if I was to start again... I think the biggest mistake I probably made in developing Wails was, with all good intention, it's in making the developer experience as easy as possible. And so it wasn't just the library, it's all of the tooling around it, and all of the things that you try and make easier. You try and address problems like "How do I stand up a project quickly? How can I develop certain aspects of the application? How do I develop this at runtime? How can I run it and alter it in real time? How do I alter the UI in real time?" And so there's a lot of tooling built around that, with all good intention. And for the most part, it's worked pretty well.

The ability to be able to open a browser and use whatever extension for your language of choice, or your toolkit of choice - it's great. So it was great to be able to do all of that stuff, and be able to provide all of those things. However, I would say that probably 90% of bugs reported are in the tooling and not in the actual library, right? So we were actually looking at kind of rolling that back a bit, so instead of the tooling being sort of a bit of a black box, and doing all of these little things for you, and working in ways you don't expect, we're actually just going to move a lot of that as a single sort of -- single operations. So if you want to convert your icon, say, it's a single operation. And what we're going to use his Taskfile; I don't know if you've seen Taskfile, but it's a bit like make, written in Go. And we're using that to basically orchestrate all of that stuff that you would normally do. So hopefully then that gives a lot more power back to the developer, and being able to have that flexibility of choosing whatever tools that they want to use, and develop the build pipeline in whatever way they want to do. So that would be -- yeah, that's probably what I would have started with in hindsight.

**Mat Ryer:** Yeah, that's interesting. I mean, I do love this focus on the developer experience. I think that is a lesson that anyone that's building really any package they expect other people to use... They're your users, so user experiences is kind of vital.

**Lea Anthony:** It's about the experience that other people are having using your tool, which led me to say just one more I would have done differently... And it applies for any library - get a bigger community involvement really early on. Don't try and build something that demonstrates what you're doing. Try and get people involved in the concept who can collaborate at the early stage of the design. Whether they've got expertise in the area or if they're absolutely completely green and have no idea whatsoever, both are going to have really good feedback on what you're trying to do, and probably will help you try to do it as well. Our community - in fact, the whole Go community is so supportive and encouraging; they love to get involved and help out. So it's great that they're here, but I think I did not make enough of that early stages. I thought "I'll just build a first version to prove that it's possible."

**Mat Ryer:** I can understand that, but I think that is such a good point. And that, again, is a lesson that applies in lots of different places, I think. And also nice for anyone that is sort of new to tech that wants to get involved in something. Because they often feel like "What could I do? What use am I?" But actually, your perspective is really valuable. They don't realize how valuable that is, because sometimes if you've been around a long time, you have all this knowledge you don't even know about really, and that colors a lot of what you end up doing. So it's an asset. Everything -- yeah, it's a superpower, really, if you're brand new, and you don't know something, or you don't know enough about something. So you should never feel like you're useless.

**Lea Anthony:** \[40:19\] Just take that one step further... So while this is probably -- like, it's basically the first open source project I've done. So I'm a software developer, I'm not a community maintainer, and I have learnt the hard way how to deal with certain aspects of doing. And I think if you're going to start off, one of the things you should nail down pretty early on is how that interaction works. So if you want a feature, or you want to report a bug, there should be a process for that. Because getting all of these opinions is a two-edged sword. It's a wonderful thing, you can harness some really good creative energy, but you also need to be able to put in some guards and some guidelines on how that process works to depersonalize perhaps part of that process... Because you're not going to accept everything, you're not going to accept everybody's ideas. You're gonna think some of them are good, you're gonna think some of them are bad. And I think you have to have kind of like a framework in place to be able to manage that. Otherwise your project could go in weird directions that is very hard to maintain, or you have very specific features for one edge case. I don't know how you've dealt with that, Andy, but yeah, I mean, it's an ongoing challenge for us.

**Andy Williams:** You're absolutely right. It's difficult, it's crucial, and not everybody is going to be excited to be on the side of a conversation where something doesn't get landed. Unfortunately, it can get personal quite quickly. I think it's really important to talk about the idea or the concept separate to who created it. So if you are in a conversation about something, if you've got two or three people discussing pros and cons of the approach that you could take, be sure to be describing and discussing the idea rather than referencing "Oh, this was the one that that person stated", because you can disconnect the personal.

I think other than that, like you say, defining these things carefully - community guidelines, contributor guidance - so that when you do have to push back on something, you can say, "Okay, well, because of these reasons here, it doesn't really fit with how we do things." And I suppose one of the mantras I try to have in this area - this goes for core contributors and first-time contributors alike - if we can't find a way, a thing to point out, one of the rules or guidelines that indicates what it is that we're not seeing the alignment of, that we're not happy with, if we can't find the right reason to say "This isn't good enough because...", then our rules need to be updated. Because it should never be a subjective judgment whether you accept something or not. "The quality isn't good enough because we expect this bar", or "That API doesn't fit with how we do things because this is how we design our APIs." And that definitely helps.

It's not going to work in every situation, and sometimes you just have it at the back of your mind. And I think this may be a like a maintainer/creator type of thing... I think it could be done a better way, or a different way, or something that I've had percolating for a while... But in that case, maybe you can help the contributor, get their code to a place where it fits better with what you thought was going to be a future, or the right route for something. It doesn't happen often, and it does sort of verge on subjectivity, but often you can say, "Well, because of this other thing that we're planning on doing, that potentially conflicts. So could it be explored in another way?" And I think people usually understand that, because they don't have, especially if they're new to a project, the understanding of all of the things that are coming. But even in that case, the more you share, the less surprised they'll be, and the better directed contributions can be.

**Mat Ryer:** \[44:09\] But what about issues of personal taste, Andy? Sometimes there's just a choice, and it's not clear if there's a particularly right or wrong way, but you just prefer a thing. How do you deal with that?

**Andy Williams:** I think it comes down to agreeing that there is something that is preferred by the community, and it's written down. Now, of course, if we were just an older project, using a language that was less sophisticated, we could say, "Well, should it be tabs or spaces?" But we've been lifted free of this burden, because there is a standard that everybody just agrees is the right way to go. And honestly, I don't think the Go code is formatted how I used to format code, but I don't really care too much, because it's the right way to write Go code. And if you can express all of the things that could be subjective in that kind of way, and say, "Look, this is just how this community is, and these are the rules for contributing. If it's not what you like, we completely understand... But kind of go with it our way, or we're going to turn back the PR." Because honestly, it's a terrible thing to accept somebody's work and then modify it so it fits. For one thing, it's extra work for the people who are working on other things in the core project already. But also, I've heard contributors be very downhearted, because they put something in and then it was immediately modified, and they feel like their work has been questioned, or adjusted to fit a higher standard that they weren't helped to achieve in the first place.

**Mat Ryer:** Interesting. Yeah. Do you have to say no a lot?

**Andy Williams:** Yes... \[laughs\] However, I try to say "No, because..." Or if I can, say "Well, I have an uncertainty or a concern in this area", so it's not actually a no, but it's not a yes either.

**Mat Ryer:** Very diplomatic.

**Andy Williams:** Well, when you have this much gray hair, you go through this quite a lot and you learn these lessons. Somebody in the community that I'd worked with over a number of years was trying to describe contributing to a project that I was leading on before, and he said to an individual, "You know, there's going to be feedback that might appear a little bit difficult, but it will be well-reasoned, and important to understand. And if you're willing to take on board the guidelines and update the code to fit, then you'll be welcomed into the community. And if it's not something that you're going to take on board, then honestly, work on your own fork. Contribute something into a different community, or maintain your own project alongside." And people do, and that's one of the great things about open source - you can be in the core community, or you can be alongside it, you can maintain a fork, or components that other people can contribute to and make use of... You don't have to agree to the way that a community is structured at all.

**Mat Ryer:** Hmm, that's lovely. Lea, I imagine you're much more brutal.

**Lea Anthony:** \[laughs\] Why do you say that?

**Mat Ryer:** I know you.

**Lea Anthony:** \[laughs\] No, it's difficult. It is difficult. There was a time, fairly recently, I think somebody had created a PR without opening up an issue, and it was very much a preference PR. And in the end, I had to just say, "Look, we're probably not going to do this for this version. This is something that is interesting, but this is also something that I'm going to need to maintain, which is an often overlooked aspect of PRs, is who's going to maintain that. And so I'd say feel free to run your own fork and use this in your own fork." And as Andy says, that's the beauty of open source. You're not limited by the project's direction or opinions; you can decide to do things your own way, and that's fine.

**Andy Williams:** \[48:08\] I have in the back of my mind a conversation with another excellent community leader I worked with in the past, who saw the project I was trying to undertake when I started the Fyne project, and I said, "We're gonna have a clean API. It's going to be super-simple for everybody to take on and build their own applications. It's gonna be excellent. We'll add lots of features, and it will never have been easier to build applications." And they sort of looked at me and went, "Okay, that's great. I can see you're off to a really good start. But you come back to me in 10 years and show me that the API is just as simple as it was when you started." So I try to think -- and sometimes the no is just "That's outside of the scope of what we're trying to achieve here." However, because it's part of a wider community, you can have add-ons, bolt-ons, extras alongside the main project. We started to do that in Fyne; we have an Extensions repository, much like the Golang does. It's a good model, actually. It works quite well. So you can have things that might be part of the future, but they're outside at the moment. And the stuff that we're focusing on, like Lea said, is what the core team is willing to maintain going forward.

**Lea Anthony:** That's the approach we're going forward with version three - it's plugins, so people can develop their own features.

Yeah.

**Mat Ryer:** Yeah, it's particularly tough when -- I mean, they're usually not like mad suggestions. So they're sensible. And sometimes, for me, on projects, if you can do that thing in user land, if you can solve that outside of the toolkit, even though yes, it might be a bit more work to do it like that, sometimes that's the answer... And we kind of focus on enabling that, rather than adding every feature in. And I have a little tiny -- you mentioned Testify earlier; I appreciate that, by the way...

**Natalie Pistunovich:** Show notes...

**Mat Ryer:** Show notes... \[unintelligible 00:49:55.27\] Yeah, let's put it in.

**Lea Anthony:** What's testify? \[unintelligible 00:50:01.20\]

**Mat Ryer:** What does Wails use?

**Lea Anthony:** Is.

**Mat Ryer:** Is. \[unintelligible 00:50:06.13\]

**Lea Anthony:** Have you heard of it?

**Mat Ryer:** Yeah, I was about to talk about Is. The idea behind -- I think you're talking about the same one... It's a mini-version of Testify. And the idea was to have the smallest possible API. Testify's API grew quite a lot, because it had the approach of really just like trying to -- yeah, it was about developer experience; we wanted to make the tests so easy to read and reason about, so we ended up adding lots of capabilities. I don't know that we've got any sort of like instrumentation around that; we don't really spy on people, but it'd be quite interesting to know which of that API people use, and what they don't use. And actually, you could probably write that, thinking about it; you could probably have tooling that did that. I'm sure someone's got a project \[unintelligible 00:50:49.08\] just thinking about that.

Okay. So anyway, Is - the idea was it was Testify off steroids, and it was a tiny API. And the PRs that that project gets are about sort of adding common things that people like to do. But one of the things you can do is just say "is true", and you can put any statement in there, and things like this. So it's like, you can solve a lot of problems in your test code, and then it keeps the is API smaller. And that's kind of preferred. But that's always a tough conversation, because the ideas and the contributions that people want to add - they're great ideas, it just sort of goes a little bit against the mission. So I think you're right about being clear about the mission of what it is and the principles that you're playing to.

**Andy Williams:** I would 100% agree with this, the concept of extensibility. Absolutely. If people can build something themselves, then it might get added later, but it unblocks their application here and now. And we try to make the widgets that we have extensible to some degree. We don't want to make them complicated because of it, but you can extend them. But at the bottom line, we're not using native widgets, we're drawing everything ourselves. And all of the widgets in our standard package are constructed with the same public Canvas API that everybody else has access to.

\[52:16\] So if you do want to do something a little bit different, you absolutely can implement it in your own code. It's not going to be just a couple of lines, because you are doing something non-standard, but it helps in the cases where their businesses are just saying, "No, we must do something like this" or "This must be added." With a little bit of help on the first time they write a custom widget perhaps have absolutely got their app off to a start that they would otherwise be stuck behind.

**Mat Ryer:** Okay. Well, it's that time, it's that special time... Natalie, you know what time it is, don't you?

**Natalie Pistunovich:** \[singing 00:52:51.11\] This is where it should continue...

**Mat Ryer:** This is it, everybody... Brace yourselves. It's time for Unpopular Opinions!

**Jingle:** \[53:04\]

**Mat Ryer:** There we go. Wow, what a bop. I'm exhausted. Okay, what's your unpopular opinion, Lea?

**Lea Anthony:** So my unpopular opinion today, Mat, is that the best tool for the job isn't always the best tool for the job.

**Mat Ryer:** What?!

**Lea Anthony:** Now, what do I mean by that...? Yes, how unpopular will that be...?

**Mat Ryer:** \[laughs\] Yeah. Saying something isn't the thing it is is going to be quite unpopular, I think.

**Lea Anthony:** Controversial, one would say. So as engineers, we always try and use the best tool for the job, because we want to do a great job. However, if you're paying for your own time, that's fine. But if somebody else is paying for your time, then is the tool that you're designing the best tool for the job as a whole? I was made aware of this recently through an article that was written by a guy I do not remember the name of right now, who basically said that he had a new manager who came in and they wanted to implement - I don't know, like a queue, or something. I can't remember exactly what it was. And so they were like "Oh, well, let's go get this Kafka", or like some technology that's designed for that.

**Mat Ryer:** Oh, I thought you meant a pool cue.

**Lea Anthony:** Oh, well, I'm a big, big, big, big fan of pool; big fan of playing pool. We can definitely talk about that.

**Mat Ryer:** Do you swim much?

**Lea Anthony:** I swim. I've got a pool. So that's good.

**Mat Ryer:** Have you? Have you got a pool table?

**Lea Anthony:** No. I should though.

**Mat Ryer:** Have you got a pool, really?

**Lea Anthony:** Yeah. And I've got a table next to the pool, but I don't think that's what you're asking, is it?

**Mat Ryer:** No, you'd have to put it in for it to count, I think.

**Lea Anthony:** Well, I'll tell you what - I'll send you a photo later.

**Mat Ryer:** People living in Australia just having pools \[unintelligible 00:54:53.18\] It's mad. Okay, sorry to interrupt...

**Lea Anthony:** That's alright. Where was I? Oh yeah, so the new manager came in and said, "Well, what are you using currently?" and I think they were using Postgres, or something. And he said, "Well, for this use case, let's build it in Postgres." And the engineers were like "What are you talking about? That's crazy." But they did. And the reason why it was such a good idea was because it was a technology they fully understood, they had all the controls in place, so that if something went wrong, they could deal with it. Based on their use case, it was completely adequate enough. It was more than they need it. So whilst it's not the best tool for the job, it was the best tool for the job. And so that's an interesting -- that's something interesting I learned recently.

**Mat Ryer:** \[55:39\] Yeah. I'm really into this, actually. And I would say also in that case it was not adding a new technology as well. So not just they understood Postgres enough, but you just have then one less thing to maintain and to operate, and I think that also is valuable. We do spend a lot -- like, I think a mistake we make is we forget about the maintenance, because I don't know, you just think of it as like background noise to the main event of building and deploying and adding a feature, and getting really excited about that. But often, for projects that are successful especially, maintenance is a far larger cost than the initial build, and having less in your infrastructure is simpler. So I'm kind of into this. I wonder how unpopular that's gonna be.

**Andy Williams:** Nice. Yeah.

**Mat Ryer:** Any others?

**Andy Williams:** Yeah, I have an unpopular opinion that I could contribute here, I guess...

**Mat Ryer:** Oh, then please do then.

**Andy Williams:** So my unpopular opinion today - and I didn't realize this was unpopular, but I've been... I mean, like I said before, we have a fantastic community in Go, in Fyne, and Wails, and beyond, I'm sure. We're very lucky to have some sponsors to help make the project possible, and that's obviously the same for Go Time and other fantastic places... But I've tried to find ways to support the project even more going forward, to increase the reach. And at this point I realized that perhaps not everybody was in agreement with me that - here's my opinion - developers will learn a new programming language to benefit from a useful toolkit. Because I assumed the right tool for the job, you pick up the technologies alongside the tool, and you learn what you need to. And once you've learned a couple of programming languages, another one isn't really that big a deal, especially one that's so familiar in its basic syntax. So I was absolutely confident that people would pick up Go to use some of these excellent, new graphical app technologies. But apparently, some folk out there think this is not necessarily obvious, and it's a bit of a risk. So there you go; apparently it's an unpopular opinion.

**Mat Ryer:** There we go. We will test these opinions on our Twitter account @gotimeFM and we'll tell you, Andy, whether indeed that is unpopular or not. But that is interesting. I certainly would do that. I certainly would learn. The thing is, I kind of love learning new languages, for example. Programming languages, obviously; I'm British, I don't speak any other language. We're idiots. So I'm into it. I kind of like -- I'm nostalgic for when tech was hard. So when something gets easy, I sort of lose a little bit of... And I like that drive when it's hard and you can't do it, ao I kind of like that. But yeah, that's interesting. I don't know. Any thoughts on that, anyone?

**Natalie Pistunovich:** I'm so much trying languages, programming languages, or writing things with AI that I can't see almost a barrier in trying something new. Like, write this thing in this language; use this tool, or this kit. And then maybe a benchmark will be fun. \[laughs\] It's almost the opposite of what you said, Mat, of you went through the hardship of studying of trying a new language. I slowly start to struggle seeing the benefit of that.

**Mat Ryer:** Yeah. Well, I'm not saying there's a benefit to it... There's not a benefit to most things I do.

**Natalie Pistunovich:** If this is for fun, then yeah. 100%.

**Mat Ryer:** Yeah. Well, so you get the AI to write code for you instead?

**Natalie Pistunovich:** Yes.

**Mat Ryer:** Is that not cheating?

**Natalie Pistunovich:** I don't know. Do you use any plugins in your IDE? Do you use any code completion?

**Mat Ryer:** No, no, no...

**Natalie Pistunovich:** No, you use pen and paper. \[laughter\]

**Andy Williams:** He has punch cards all the way down.

**Mat Ryer:** I'd love that. Yeah, I miss it when tech was rubbish. I'm nostalgic for that, for those years when --

**Natalie Pistunovich:** Just stop using Go. \[laughter\]

**Mat Ryer:** Gotta switch to Java. Sorry, Java people... No, I don't think Java people listen to this, do they? I don't know.

**Lea Anthony:** Ex Java people probably do.

**Mat Ryer:** Well, \[unintelligible 00:59:50.08\] they're gonna be offended, are they?

**Lea Anthony:** Probably not, but you never know.

**Mat Ryer:** Probably not. Yeah. Well, anyway. So Natalie, then - when you're coaching junior engineers or people that are new in tech, do you advocate for that? Do you sort of advocate for learning other languages and things?

**Natalie Pistunovich:** \[01:00:10.09\] I definitely advocate for learning things like concepts, like design patterns. Design patterns, things like this, algorithms - you want to know those; those are across all languages. A language is a tool to implement good ideas or concepts or reproducible things. And so the things that you can carry over languages, you should know. Learning exact syntax - less and less sold. This is not the unpopular opinion, although it might be.

**Mat Ryer:** Well, we'll see. I don't know. But you do have an unpopular opinion then...

**Natalie Pistunovich:** I have another one. I wonder if what I previously said is also counting as one. I'll have to try that in another episode. But for this one, the unpopular opinion came at the tech test we had before this episode, when we were talking about today being an equinox day. So in some languages, "day" means not -- there's different words for day, the 24-hours hours go between midnight to midnight and the daylight. English is not one of those languages. And I'm curious to see how unpopular is this, but I think we're missing out here. We need two words for those two concepts.

**Mat Ryer:** Yeah, but -- so sometimes you might say like... If I said "Was it day or night?" If I asked you that, I think --

**Natalie Pistunovich:** I would be very confused. Is this a 24-hour period, or is this a night?

**Mat Ryer:** Right. That'd be quite an odd question though. That's like saying, "Do you want some food, or a burger?" Yeah, it's quite confusing.

**Andy Williams:** Especially - if you have a window, you can sort of solve that question pretty easily as well. Not the burger one, sorry; the daylight one.

**Mat Ryer:** By looking outside, you mean.

**Andy Williams:** Exactly.

**Mat Ryer:** Yeah. So Natalie, what's an example then of another language that has this distinction?

**Natalie Pistunovich:** Hebrew.

**Mat Ryer:** And what are the words?

**Natalie Pistunovich:** Midnight to midnight is the \[unintelligible 01:02:00.11\] and morning to evening is \[unintelligible 01:02:04.02\]

**Mat Ryer:** Okay. So yeah, that is kind of cool. But I don't think it's held us back. Like, I've never noticed -- do you know what I mean? I don't think I've ever --

**Natalie Pistunovich:** Because it's the same thing in your mind. But I do notice that. I cannot recall a situation right now, but I remember being in situations and thinking, "But why? Why do you want to lose this concept?"

**Mat Ryer:** That's amazing.

**Natalie Pistunovich:** Especially English being so rich and having so many words to describe so many similar things.

**Mat Ryer:** Yeah, but we just haven't bothered with that. I've got an unpopular opinion. This one I think might upset some people... Hopefully. I mean, not hopefully, but... Hopefully. My unpopular opinion is the Wails logo, the Wails app logo is the best app logo in the world. If you haven't seen this beautiful red dragon... What's the story behind this, Lea?

**Lea Anthony:** Yeah, so I wish I could claim it. I have the design skills of a two-year-old, so I had to outsource it. So the original logo was something I saw as a kind of tattoo style -- you know, there's sort of the tattoo style dragons that you get... And the reason for that originally was because it sort of looked Asian, but it also sort of kept that dragon link \[unintelligible 01:03:21.23\] And for version two, I thought "You know what, I just want a really impactful logo. It's a big release, and I just want to make it into something a little bit bigger, and something a little bit more special."

\[01:03:38.12\] So I asked around, I put on Twitter "Does anybody know any graphic designers?" And eventually -- I mean, don't ever do that, by the way. My goodness, you get an awful -- it's like saying you've got a job for 300k a year. You'll just get so many respondents. And one guy in particular sent me some portfolio, and it was really good. I thought "This guy's probably out of my price range." But we had a little chat, and had a bit of back and forth, and he just came up with this brilliant logo. And I was like "Yeah, there's not much really I want changed on this. This is impactful." It was really good. So yeah, so that was the story there. I just started using it, and I've had some great feedback about it. But yeah, I can't claim it, unfortunately. But yeah, brilliant work.

**Mat Ryer:** No, brilliant work. And we should say that the Welsh flag - it might also be the best flag in the world. I don't want to get into this --

**Andy Williams:** \[unintelligible 01:04:32.23\]

**Mat Ryer:** Flags need poles, so that's good.

**Andy Williams:** Well... \[laughs\]

**Mat Ryer:** But have you seen the Welsh flag, everybody? Natalie, have you seen the Welsh flag before?

**Natalie Pistunovich:** Googling right now.

**Mat Ryer:** Google it. You won't believe it.

**Natalie Pistunovich:** I probably did, but I'm gonna Google this right now.

**Mat Ryer:** We'll put a link in the show notes to the Welsh flag. You won't believe this is a real flag. And it is.

**Natalie Pistunovich:** I like the dragon. It's also a red dragon, and it's walking on grass, and has clear white sky above.

**Andy Williams:** Yeah, that's the clouds.

**Mat Ryer:** Why is it white?

**Natalie Pistunovich:** It was a bit cloudy that day.

**Mat Ryer:** Just a sunny day, is it?

**Natalie Pistunovich:** It's the fog.

**Mat Ryer:** The water flag. Okay, well, I'm afraid that's all the time we've got today. But thank you so much. It was so interesting to learn about Fyne, and Wails, and cross-platform coding, and community open source, running open source projects... Andy Williams, thank you very much. By the way, love your soundtracks that you make. I know you did Jurassic Park. Classic tune now.

**Andy Williams:** It's too good to be true. You've got to mix all this stuff together. Creativity is a big part of software engineering, after all.

**Mat Ryer:** Yeah. What is Spielberg like?

**Andy Williams:** Honestly, he doesn't have as much time for me as I would have thought given the close relationship that I've read about in the press.

**Mat Ryer:** That's a shame. That is a shame.

**Andy Williams:** Maybe we could reach out one more time and trying to make -- maybe get his input on the next GopherCon, see if we could really make something together.

**Mat Ryer:** I mean, the intro, the promo video would be pretty amazing, wouldn't it?

**Andy Williams:** Absolutely. Yeah, I can't wait to see it already, actually. Let's just get it sorted.

**Mat Ryer:** Absolutely. Lea...

**Lea Anthony:** Hey!

**Mat Ryer:** Lea Anthony. Oh, this was meant to be an outro.

**Lea Anthony:** Hello.

**Mat Ryer:** No, not hello. It's the goodbye bit now.

**Lea Anthony:** Ah... But I just don't want it to be goodbye. I just enjoyed myself so much.

**Mat Ryer:** Yeah, that's good. That's a good lie, that is, because...

**Lea Anthony:** Yeah.

**Mat Ryer:** That's gonna make the edit. Definitely something you said will make the edit now. Now you've said that...

**Lea Anthony:** Can you make that my unpopular opinion? \[laughter\]

**Mat Ryer:** Lea Antony from Wails, and the Wails Project, Andy Williams, and Natalie Pistunovich, of course. Thank you very much. See you next time on Go Time!
