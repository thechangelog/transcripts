**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is number 59. On the show today we have myself, Erik St. Martin. Brian Ketelsen is also here...

**Brian Ketelsen:** I'm so excited I can't even hold myself.

**Erik St. Martin:** Right?

**Brian Ketelsen:** It's just ridiculous.

**Erik St. Martin:** And Carlisia Pinto...

**Carlisia Pinto:** Hi, everybody!

**Erik St. Martin:** And our special guest today, that Brian and I are particular fanboys of, is Michael Stapelberg, who among other things is the creator of i3 window manager, which you've probably only heard us mention a handful of times.

**Brian Ketelsen:** A thousand times.

**Erik St. Martin:** Michael, I know you do a lot more stuff, too... Do you wanna give everybody a little bit of background on you, your history and software development, and in particular getting into Go?

**Michael Stapelberg:** Sure, yeah. The project that most people know me for is the [i3 window manager](https://i3wm.org/) by far. I started that project in 2009, so we're gonna have a nice ten-year anniversary pretty soon. The reason I started it back then was just that I was not very satisfied with the window manager that myself and a couple of my friends were using at the time, which was [WMII](https://en.wikipedia.org/wiki/Wmii) (Window Manager Improved Improved). As a little nugget for the listeners, that's also where the name i3 comes from, if you don't know yet... It is Improved Improved Improved, shortened to i3.

**Erik St. Martin:** Oh, nice!

**Michael Stapelberg:** So that's that. It is a tiling window manager for power users or advanced users or programmers, or however you wanna choose the audience, but the idea is that we don't target beginners, so we don't have to be intuitive. That sounds a little bit strange at first, but it allows us to optimize for not mastering the learning curve easily, but once you have it learned, you can use i3 very efficiently, and I think that is what many people appreciate about it.

**Erik St. Martin:** One of the things I hate about my Mac is that there is no i3...

**Brian Ketelsen:** Technically, there is, it's just not very useful.

**Carlisia Pinto:** Well, I use one and I'm very happy with it. I use it all the time; I can't live without it, actually.

**Erik St. Martin:** It's a tiling window manager?

**Carlisia Pinto:** Yeah.

**Brian Ketelsen:** Which one do you use? Moom?

**Carlisia Pinto:** No. I'm actually looking for it, because I just...

**Erik St. Martin:** I wanna say it starts with an A, or something... There's one I've heard of that I've heard people use; I haven't tried it yet.

**Brian Ketelsen:** I've tried all of them, and none of them are i3.

**Carlisia Pinto:** Well, it's definitely not i3, and I also have not used i3, but it is called Divvy.

**Michael Stapelberg:** Oh yeah, Divvy.

**Erik St. Martin:** I haven't even heard of that one yet.

**Carlisia Pinto:** I've been using it forever. If I get a new machine, it's the first thing I put in. I do it without even thinking that I'm doing things; I just move things around.

**Erik St. Martin:** So i3 of course is written in C, but it's amazing... It really is.

**Michael Stapelberg:** Thank you very much.

**Erik St. Martin:** So is your history mostly in C and C++ and things like that?

**Michael Stapelberg:** \[00:04:05.19\] Sort of. So I looked into C, of course, as the most natural systems programming language when you're using Linux or any other UNIX operating system. I have done a little bit of C++, but I don't like it as much, largely because it seems like too large of a language and I feel like I can't really master it as much as I can with C, and even more so Go nowadays.

I have done a fair bit of Perl; in fact, the i3 test suite is entirely implemented in Perl, which seemed like a good choice at the time and it's still an okay choice today, I would say. Sometimes contributors are a little bit put off, but now they also have to deal with Perl code, right? But I'd like to say there our Perl style is relatively modern; in fact, there's a book called Modern Perl, which we have in our header of each and every test case. Essentially, it's a like a little domain-specific language that you need to deal with. It's not like you need to be a Perl master, and we're happy to help... But given that we now have such a comprehensive test suite, it is very hard to change it, regardless of which language we would want to target. Once you have like 3,000 test cases, you can't really move easily in any direction.

**Erik St. Martin:** Yeah. You'd basically have to halt new development while you ported your test suite, and that's not valuable at all, and I can't see anybody really wanting to volunteer for that.

**Michael Stapelberg:** Yeah. I've done a couple of test suite-related refactorings in the last couple of weeks, and it's enough work as is without even changing any bit of the language.

**Erik St. Martin:** So you've done quite a bit in C and things like that... I'm trying to remember when this article came out, but it was probably a couple months ago you did a [blog post](https://michael.stapelberg.de/posts/2017-08-19-golang_favorite/) on why Go is now your new favorite language, and kind of having a background and building something as complex as i3 in C, I'd love to kind of hear your opinion on that and why you love Go now... And if you had to do it over again, if you were starting fresh today, would you build something like i3 in Go?

**Michael Stapelberg:** Right, sure. I'll try to remember all parts of the question, because I fear that the answer will be a little bit long-winded. I mean, after all, I've written a blog post about the subject, right? So I initially looked into Go in 2009, coincidentally the same year that i3 was started, right? But in 2009 it was the initial release that Google did, and it wasn't Go version one yet, there was no compatibility guarantee. So I looked into it and I played around with it a little bit, did the playground exercises, I wrote this little [IRC bot](https://robustirc.net/) which actually still lives and still works, largely untouched, which is a miracle... It must be one of the oldest throwaway projects that just still works, so I really appreciate that, and that actually gave me a lot of confidence in the language and the ecosystem over the years.

But then I sort of put it away for the next three years, until in 2012 the Go 1 came out. That was sort of when I sort of seriously started to look into it. At that point I had, mind you, four years of experience writing a moderately complicated project in C. It's not that I hadn't done any C development before that, but once you have a codebase that is in the tens of thousands of lines of code, your perspective changes a little bit. You get a feel for which mistakes are common and what sort of things you would want to look at. I think if you go out and read the blog post, what you'll realize is that not in a single word do I ever mention any language feature; I don't say "Oh, in Go you have channels and they're the greatest thing ever", right? I don't even care about that at all, because that's just such a superficial thing for me.

\[00:08:03.25\] Where it's really at is the integration at the tooling and the consistency and the language ecosystem and also the community. That is all where Go really shines. The language is simple, the ideas - some of them are not quite standard, I have to say, but if you look in history, you will see that none of them is really super new or super exciting on its own. I think that when you put it all together, that's where you really get an appealing language on its own, but then the tooling comes on top of it and the tooling is just so good. That's what I really appreciate in my day-to-day... Because language features and issues you can just sort of workaround; you just need to google it and you'll find a post by someone on Stack Overflow saying "Oh yeah, this is how you usually do it in Go, that's more idiomatic" is what we say, and then you adopt that and then you're done. But the tooling - you use it every day.

**Erik St. Martin:** That's I guess a point I didn't even catch in the article. You read the article, but it doesn't really shine through that that's the only thing. You don't actually mention a single feature.

**Michael Stapelberg:** Right, and I only realized this after I had actually completed the article. It's not like I set out to write an article that only goes on about how great the tooling is. It actually mentions more than just the tooling, so my point is not just "The tooling is great." That's certainly one of the important points, but the other points are roughly that it is very easy to get into Go code just by reading it, because the opinions that are prevalent in the Go community and in the style that people choose, at least largely for the standard library, which I would like to think of as a fairly consistent piece of work, but also in many other projects that I have read the source of - all of these opinions make it very easy to follow the code, I think. It is exactly the right level of comments, it is exactly the right level of identifier length, exactly the right level of abstraction.

So I don't need to read through a lot of the codebase in order to jump in and understand the little bit that I'm currently interested in.

**Brian Ketelsen:** Yeah, I think Go is THE most readable language I've ever used, and I've touched most of them... But I always love the readability of Go. It's very clear that they spent a lot of time thinking about how to read code, versus how to write code.

**Michael Stapelberg:** Yeah, absolutely. And one point that sort of ties into both of these themes is gofmt, of course, which autoformats your code. Just a couple of days ago I actually had a discussion with a friend of mine, where we were now getting together because we have this retro gaming event coming up next month in Heidelberg (a German town), and for that event we are using an old Commodore 128 computer, which is a computer that is older than I am. We programmed this little cash register program for it in C. I recently got back into the code, and essentially this is a codebase that has lived on for like seven years I think, but we only ever touch it once a year... Shortly before the event starts we're like "Oh, so what bothered us last year? We're gonna fix that." But what I realized was that the code was not autoformatted, so it wasn't consistent... And then I was like "Okay, I'm just gonna [clang-format](https://clang.llvm.org/docs/ClangFormat.html) this." and then I submitted the Travis hook so that it would always be clang-formatted.

Then inevitably I got into that discussion with a friend of mine who was like, "Yeah, so I think this is sort of a good idea, but in this particular file I don't like what the formatter does", and I'm like "Oh, this again..." Because once you start using Go, you kind of just put away this entire discussion. Nobody would ever come and argue, "Well, I just don't like what _gofmt_ does in this one file, so I turn it off..." It's just not something you hear, and I really appreciate that. The entire body of open source Go code and probably also most of the corporate Go code that there is is in fact auto-formatted.

**Carlisia Pinto:** \[00:12:10.21\] That is such an interesting comment, because if you think about it, nobody ever turns it off. There are no rebels that would do that. I think it's fixed to how much it makes sense to have it.

**Erik St. Martin:** If they did, they'd get caught in code review.

**Michael Stapelberg:** Yeah, absolutely. I think the only time I've ever seen code not autoformatted in the recent times is whenever people are working on a single project, like individually, without code review, and they just forget, because they haven't had their editor setup fixed yet. So the vast majority of their code is autoformatted, but this little one file that they've touched recently, they just forgot.

**Erik St. Martin:** Yeah, that's true. Or they're moving machines and they don't have their editors set up on their new machine to do it, something like that.

**Michael Stapelberg:** Exactly.

**Carlisia Pinto:** Yeah, but it's still good to have people not do it for whatever reason in code review... People code reviewing and not caring enough, but it makes so much sense there; even when we're reviewing code, we care that "Hey, this should be formatted. It must be formatted the correct way, the standard way."

**Erik St. Martin:** I think it's interesting though, because coming into it, like, people have preferences; they are zealots about it. A number of tabs, or spaces and things like that, and when you first come in, or whether the curly brace goes on what line, and things like that, and people are so stuck in that in their concerns with _gofmt_ that it's gonna irritate them, but it's funny how quick those thoughts wash away and you're just happy for the consistency.

**Michael Stapelberg:** Yeah, absolutely.

**Erik St. Martin:** I've never been that way... Has anybody here been like hard for tabs or spaces, or...

**Michael Stapelberg:** I have to think of the Silicon Valley episode recently, where that was an entire thing, right?

**Erik St. Martin:** Oh yeah, where he broke up with his girlfriend?

**Michael Stapelberg:** Yeah. \[laughter\]

**Carlisia Pinto:** Yeah, the perfect girl. \[laughs\] It wasn't just a girlfriend, she was perfect!

**Brian Ketelsen:** I've been in two or three day long meetings before... This was C\# back in the early 2000s, where we spent two or three days talking about what our code formatting style was, and I find that to be the largest waste of time ever.

**Erik St. Martin:** Yeah, that's true. I've worked for several companies that had style guides for every language that was used, and you would get caught in code review for style guide.

**Brian Ketelsen:** I think that's why we've adopted _gofmt_ as canon, because everybody's been there; we've all seen this ridiculous waste of time on formatting, and I don't even care if it matches my preference. It makes no difference anymore. I got used to it in a week, and now _gofmt_ is my preference, and there's just no arguing about it, there's no waste of time... It's so amazing.

**Erik St. Martin:** Can we make _gofmt_ work on other languages?

**Brian Ketelsen:** Well, it's funny that newer languages are starting to adopt this. Rust has a format program, Pony has a format program... I really appreciate the fact that others have seen this and they're taking it to heart.

**Carlisia Pinto:** As long as you don't have the option to customize it. It's either on or off, but if it's on, it's one thing.

**Michael Stapelberg:** Yeah, and I think that is actually the critical insight that _gofmt_ brought to the table... Because the idea itself is certainly not new. There used to be the indent tool, which we tried to adopt for the i3 codebase back in the days, and it didn't quite work, but we also made this wrong assumption that we wanted to configure the tools such that it would largely match our codebase, and now of course we all know that it goes the other way around. You just reformat it once and then you're done with it.

\[00:16:07.13\] But I didn't realize that at the time, and then of course you try to figure out exactly the correct indent parameters... And then clang-format came to the table, but it also supports multiple styles, so which one do you choose? It even allows you to derive from a common style, but then define exceptions to that, which is even more horrible, I think.

**Carlisia Pinto:** Yeah, you're basically just automating your opinions, but you still go through the process of which opinion is going to prevail.

**Brian Ketelsen:** Exactly, and that defeats the whole purpose.

**Erik St. Martin:** Add that to the list of things you shouldn't have to worry about before getting stuff done...

**Carlisia Pinto:** But you still want same looking code everywhere, so...

**Brian Ketelsen:** So I do find it amazing that we've been having a podcast and we've been talking 20 minutes with probably my biggest hero in the programming universe, and we've talked about formatting code, and that's the only real topic we've hit. Honestly, that says something big about Go and the tooling and the ecosystem. I truly love that.

**Michael Stapelberg:** I'm so flattered... So why don't you ask something that you really wanna know?

**Brian Ketelsen:** Okay, why can't i3 run everywhere? What's keeping us from replacing Aqua in MacOS with something that runs i3, and why can't I run i3 on Windows? What's wrong with those people?

**Michael Stapelberg:** The simple answers in order are Apple, Microsoft... Right? \[laughter\] No, seriously, I actually had this phase where I used a Mac, and I looked into Aqua, but you can't look into it; it doesn't have an API, it doesn't have the concept of a window manager. In fact, on UNIX, the fact that we have the [X11 server](https://en.wikipedia.org/wiki/X_Window_System) is the only reason why window managers exist and why there can't be different ones, right? Everything else, every other operating system that I've seen, to the extent that I've looked into the API's and the customization possibilities, it's just - there is a default window manager, and if you're lucky, you get to interact with it, and that's how you can build tools such as the one that Carlisia mentioned earlier, where at best you have a couple of key bindings and then it moves windows around and maybe resizes them, but the level of customization that you can achieve if you implement the entire window manager... It's just nowhere near that.

**Erik St. Martin:** So this might be interesting... It's not Go-related, but for people who may not be familiar with the difference -- like, what's the difference between a desktop and a window manager in a terminal like or console, \[unintelligible 00:18:38.23\]

**Brian Ketelsen:** That's a good question.

**Michael Stapelberg:** So what people would usually use these days is a desktop environment, where you have a couple of features such as (obviously) the desktop metaphor, which gives it the name, right? You have a couple of files and folders represented by icons on the arrangement, which is a desktop where you have multiple windows and then you can sort of have them interact with each other, or you interact with the windows even more so... But I think the crucial distinction between the desktop environment and the window manager is in the integration, because the desktop environment has a much broader scope; it should be possible for you to easily connect a printer and have it configured via the desktop environment of your choice, whether that be Gnome or KDE or what have you on other platforms (they're different, of course).

But a window manager is just that one little subset of a desktop environment, just the thing that is concerned with managing the windows, right? So typically features that are relevant here are keyboard shortcuts that directly do something with the window. The one that I canonically list is either Alt+F4, which of course everybody knows from Windows to close a window, or Alt+Tab to switch between the windows, right? And that is something that your window manager would implement, or at least play a large role in.

\[00:19:56.10\] I think the term "window manager" means more than just that nowadays on Linux, because you have these communities that sort of gathered around the minimalistic window managers, and they build various parts of the desktop environment. So when you say you're using a window manager, what that really means is you're not just using a window manager, but you sort of choose and pick a couple of tools from Gnome or KDE, or even standalone tools; there are sometimes replacements for the various features that a desktop environment comes with.

For example, for monitor configuration, in i3 you would either directly use the command line tool _xrand_ to access that API, or the more convenient standalone _arandr_ tool. But i3 wouldn't be concerned at all with your monitor configuration; it just adapts to whatever it is that you configure. So the separation of concerns is very clear, at least to somebody like me who knows how it is implemented. Sometimes people come and they don't' really get it yet, like what goes where, because on other operating systems all of this is very integrated, and as I mentioned, you can't even make the distinction between "Do I wanna use a desktop environment, or can I just throw all of that away and say I'm gonna start from scratch and I'm gonna build my custom environment?"

**Erik St. Martin:** I wonder with the Windows subsystem for Linux, I think that's only terminal VIM or would I be able to get X?

**Brian Ketelsen:** There's a terminal, but you can run an X server on Windows side and then i3 from WSL and view it in Windows, which was my [blog post](https://brianketelsen.com/); that's what I do.

**Erik St. Martin:** I may have to play with that.

**Brian Ketelsen:** It's really awesome, I'm not gonna lie. You get the best of many worlds.

**Erik St. Martin:** So what types of things are you working on these days, Michael? Are you mostly working in Go, or are you kind of jumping between languages?

**Michael Stapelberg:** I try to do most of my work in Go, both as a matter of preference and also just practicality... Because when you switch between languages, of course you need a little bit of time to adjust between the differences, be it in the tooling or be it just in the language, right? Of course, there are existing projects that I still care about, so for any sort of work on i3, of course I can't just say "Oh, we're gonna throw away everything, and I would like it to be in Go now." That just doesn't fly, so out of necessity, sometimes I need to use C.

I try to make it as similar to Go as possible, in the sense that I do autoformat it, I have a good test suite which is easily executable... Stuff like that. But certainly, my big preference for anything else but existing legacy projects where we can't just make the switch is to do it entirely in Go, or as much as possible in Go.

**Brian Ketelsen:** Nice. One of the things that you've been working on lately that I think is amazing is the [gokrazy](https://gokrazy.org/) user space for Raspberry Pi. Will you tell us what were your motivations behind that?

**Michael Stapelberg:** Right, sure. That's actually a fun little project that we started at the beginning of this year, actually. So the idea is that I was getting fed up with maintaining all of these little Raspberry Pi's. Many of us probably have a little Raspberry Pi at home, doing one thing or another in their home network, or a device that is comparable... A little Intel NUC computer, or an Atom-based little embedded device, anything like that. But the Raspberry Pi certainly is the most prevalent of these devices, so I figured it would make sense to just target the Raspberry Pi for now.

The observation was that if I write most of my programs in Go nowadays, why do I even need to maintain this entire Linux ecosystem on each and every one of my Raspberry Pi's? At the point when I started the project I had three of them running. I looked at them, and I logged in, and because of the custom image that I used on them, I saw that the last build timestamp for that image was in 2013... So at the point when I logged in, I saw that it had an uptime of four years without me changing the base system, and it had -- of course, security vulnerabilities accumulated over these four years, and that is a horrible state to be in and I really don't wanna have that on my home network.

\[00:24:16.24\] I wanna have all of my devices up to date, ideally with an auto-update. Ideally, it goes so far that I have gifted devices to friends of mine and bought a new device where the only difference in operation was that the device auto-updated.

An example of that is the Turris Omnia [OpenWRT](https://openwrt.org/) router, which I would recommend, because it is to the best of my knowledge the only OpenWRT-based Linux router that auto-updates. That just comes from working full-time.

When I was a student, I could of course still spend quite a lot of time administering all of these servers; I was running Debian testing on many of my machines and virtual machines and all of the little devices, and I would auto-update them sort of regularly... But at some point your priorities change and you just can't do that anymore. So I figured I would go at it from the other direction and be very strict about it.

So I wanna have devices that auto-update, and I wanna have devices that don't expose a lot of attack surface, both on the network itself and on the internet, of course. And I figured one way to do that would be to look into whether we could actually run a Linux kernel, and ideally, directly execute Go programs without any of the regular Linux distribution in the middle. Gokrazy is an implementation of this.

What gokrazy does is you give it a Go package that you have, be it like a little "Hello, world" program, or distinct bigger programs like the Prometheus Node Exporter if you wanna monitor your Raspberry Pi in Prometheus. You give a Go package to the gokrazy packer program, and what it does is it packs an SD card image with the Linux kernel and the Raspberry Pi firmware, and a minimal init system that comes with the gokrazy project, and then just the Go packages that you provide it.

These four parts are all that you really have in the image, and then you just copy that image onto an SD card and you boot your Raspberry Pi from it, and there is no other moving parts, there's no Linux distribution; it's not based on Debian or based on Fedora or anything like that. It has just directly the kernel and the firmware.

Another important part of this project is that all of these parts are auto-updated. For the kernel and for the firmware we have a cron job running on Travis, which every day goes and checks the upstream repositories for newer versions of what we have packaged. If there is, for example, a new kernel release - and I learned that the kernel actually gets quite a few releases; I never paid attention to it, but they do like a little point release... But anyway, so we have this little cron job which looks at what is the latest kernel version, and if the latest kernel version doesn't match what we have in our repositories, it goes on and downloads it and then builds it on Travis.

Then we have three pieces of automation which I'm not gonna cover in detail - you can just look at an existing presentation about gokrazy if you're interested - which sort of do this entire dance of "How about I take a pull request, I build a kernel, I amend a kernel into the pull request, I automatically test that new resulting image on an actual Raspberry Pi, and if it boots, I'm just gonna merge it." Frequently, when I wake up, in my inbox I'm gonna have this little GitHub email thread where it tells me there is a new version of the Linux kernel, "Oh, and by the way, I tested it and it boots. Oh, and also I merged it. And oh, I also deployed it onto all of your Raspberry Pi's." \[laughter\]

That's the ideal state for me. I wake up, I realize that there was a new Linux kernel release, because I'm already running it. Later on I read about it in the news and read the changelog.

**Brian Ketelsen:** That's awesome. That's automation right there.

**Erik St. Martin:** Do you have kind of like this split firmware, where in case it doesn't start up with the new kernel...? Because occasionally there's weird issues and the kernel won't boot.

**Michael Stapelberg:** \[00:28:05.12\] Yeah, that's true. One of these issues that we faced a while ago - and in fact the only one that we faced so far, and the project has been running, as I mentioned, since the beginning of the year - is that there's this little bit that needs to be set correctly, so that the kernel driver for the Ethernet card on the Raspberry Pi will pick up the correct MAC address. When it regresses, i.e. when it doesn't pick up the correct MAC address, it will fall back to just auto-generating a MAC address. That makes for a very weird problem to debug, because everything seems to be working fine, but then occasionally you wouldn't be able to connect to your Raspberry Pi because it would get a new IP address, and maybe your DNS name isn't quite updated yet to the new one while it's still cached or something like that.

These are weird to debug problems, but aside from that we haven't had any sort of issue. But to answer the original question, no, there's no dual BIOS functionality or anything like that, because unfortunately the Raspberry Pi hardware just doesn't provide any mechanism to implement that. Either it boots or it doesn't boot, and you can't really do much else than that.

**Erik St. Martin:** Yeah, unless you're writing a little Assembly in the beginning, before Linux kicks in, but who wants to do that?

**Michael Stapelberg:** True, yeah. If you're gonna enable the hardware watchdog on the Raspberry Pi early enough, then maybe you could recover from the failed kernel boot. In fact, we also looked into whether we would want to have any sort of automation around that. What you can do on a modern Raspberry Pi is actually you can boot it via the network, so we could actually give it a new image and look whether it boots, and if it doesn't boot, maybe trigger some sort of remote-controllable power strip to reboot it. But then we thought "Well, does that automation really pay off?" Because in the common case, what will happen is it will just boot, and then the device stays functional. In the case where it doesn't boot, you need to have manual intervention anyway, so we figured okay, maybe the failure mode is just the test Raspberry Pi that is running at my home, with the sole purpose of testing these images just doesn't boot anymore... And then I need to look at it and fix it up, and then I go on and push.

So as an end user of gokrazy, you wouldn't face a not-booting kernel, because the kernel needs to have booted on my Raspberry Pi. So I have sort of this sacrificial Raspberry Pi running at my home.

**Erik St. Martin:** I guess that's true too, right? We're talking about different worlds. This isn't some military-grade thing that's going to be running in a space shuttle; it's a Raspberry Pi in your home. If you have to pull out the SD card and manually copy over the files from the old version, it's not the end of the world.

**Michael Stapelberg:** Absolutely. And I think I'm just personally annoyed enough by it when it doesn't boot that this will not be a problem for anyone else. \[laughter\]

**Brian Ketelsen:** Well, it's an amazing project; I love the idea of getting rid of all of that extra user space, and just booting the app you need. Most of the time we single-purpose our Raspberry Pi's, and this has me thinking now, Erik and I use Raspberry Pi's for our barbecue grills, and this gokrazy would be absolutely perfect for that use case. It'd be 100% perfect and we could always keep it running and up to date. I just have to upgrade to a Pi 3 instead of the Pi 2 I have now... Which isn't the end of the world.

**Erik St. Martin:** More reasons to upgrade.

**Brian Ketelsen:** Right?

**Erik St. Martin:** I'm torn, though. I still wanna do some ARM stuff.

**Michael Stapelberg:** Well, what do you mean? You still can do ARM stuff on it, right?

**Erik St. Martin:** Well, so like actual embedded devices... I've got a Cortex-M4 (or something like that) that I've been running against an LCD screen. So I'm back and forth with whether to do a full-blown Linux install or not. But these things run so low-power now that it's -- I'm torn, because you can get development done a lot faster to ship with Go.

**Michael Stapelberg:** \[00:32:11.27\] Absolutely, yeah. I think it totally makes sense if you just wanna play around and have some fun with the embedded device to go that route, but as soon as you just wanna have an idea become reality in any reasonable timeframe, and have it stay working, it makes much more sense to go the higher-level route.

**Erik St. Martin:** Yeah, I guess that's right, too - time to market, right? If you're trying to build some sort of commercial product, then it makes sense to keep your bill of materials down and your costs down, and all of these things. But for most of us, we're building little trinkets for our house.

**Michael Stapelberg:** Absolutely, and I think if you can get it done in like a weekend, then that's gonna be much more motivating than if you will have to order things and solder them together and then come up with the firmware, and oh gosh, maybe even write it in C, right?

**Erik St. Martin:** ...which I've done. \[laughter\]

**Michael Stapelberg:** Me too, me too.

**Erik St. Martin:** And I will admit, I am not the best C programmer, nor embedded systems person, so...

**Brian Ketelsen:** Better than me.

**Erik St. Martin:** ...weird things happen. And if you want proof -- so Brian was cooking a whole pig one weekend and we literally just threw together something like this, like you said, kind of in a weekend and whatnot. And you can see proof of this through the way I did the serial connection between the Wi-Fi chip and the actual micro-controller; something is not right there, because you would see peaks where it would say it's like one million degrees, and then negative two million degrees. Like, "Hm... Whoops!"

**Brian Ketelsen:** Not quite right.

**Erik St. Martin:** This would have been so much nicer if I could just use a good library for this and I wasn't trying to cobble it together really quickly in a night.

**Brian Ketelsen:** Going back to i3 for a moment - I hate to do this, but after this show, Michael, I need to send me your mailing address, because I need to send you a bill for anti-depressants. It just occurred to me that the whole reason I can't stand computers anymore is because of i3. I only want to develop when I'm running i3. And if I'm stuck on a Mac, or Windows, or something else, it makes me unhappy, and therefore I have to take drugs. So I would like to send you a bill for that. It probably will be four or five thousand dollars for the last few years, I hope you're okay with that... But I hold you personally responsible.

**Erik St. Martin:** I think you should invert that... I think that you should have to pay him for not having to take them during the periods of time that you used i3.

**Brian Ketelsen:** \[laughs\] There you go. So that brings up a good point - I contribute monthly to several [Patreon](https://www.patreon.com/) accounts for open source projects that I truly love... Does i3 have a Patreon?

**Michael Stapelberg:** No, we do not currently have one. With a project where there's largely a single maintainer, but then so many contributors, it often becomes an issue of fairness, like "How do we distribute the funds?" If people approach me and say they really wanna donate, I usually accept their donations, which are in the low $10, or something. The funds that we accept, they go directly into hosting costs and merchandise costs like stickers, for example. I think I handed you one at Gophercon - that was paid by contributors... And things like that.

We're certainly not trying to cover any sort of development costs or make a living off of i3. It is a spare time project and it will remain a spare time project.

**Brian Ketelsen:** It's a labor of love. So speaking of the i3 sticker, you'll get a kick out of this - my mother came and visited two weeks ago. The day before she left, she looked into my office and she said "Are you using all of those laptops? Are there any spares that you can send home? Because my laptop is dead." I said, "Sure, absolutely." So I gave her a laptop, and it happened to be one with an i3 sticker on it... And she said, "What is i3?" so I had to show her, and she was lost... Completely lost. So i3 is not for everyone.

**Michael Stapelberg:** \[00:36:23.09\] Oh, absolutely. Yeah, absolutely.

**Erik St. Martin:** So you talk about all these projects that you're doing on the side - what are you working on for day job? What does pay the bills?

**Michael Stapelberg:** Currently, I'm lucky to be employed by Google in the European headquarters. In fact, I am working on Go in a capacity; not as part of the Go team itself, but we're working in this so-called Frameworks Go Team. That's a team where we wanna make it easier for other teams to develop software that runs well in production. So we're doing sort of a microservices framework, if you will. Certainly, there are comparable projects out there in the open source world, but I wouldn't really know, because I only have the inside look at it. I don't run stuff with a lot of open source software, I’m mostly concerned about how our internal production network looks like.

So we're trying to make it easy for them to run good Go code, and of course, Google has many years of experience in C++ and Java for running all sorts of applications, but in Go it's not quite there yet, so that's what I'm working on.

**Erik St. Martin:** Oh, that's awesome. So you mostly work with the internal teams...

**Michael Stapelberg:** Yeah, absolutely. Very occasionally, there are places where I cannot only contribute to something internal, but also something external, and then I happily do that. But the large part of it is focused on the internal stuff, yeah.

**Brian Ketelsen:** I read a really interesting article this morning, talking about Google's internal software infrastructure versus open source, and the article suggested that the software, the frameworks that Google uses internally are five to eight years ahead of open source equivalents... And if you wanna have a sense of what open source will look like in five years, just go look at Google's internal tools. Do you feel like that's roughly accurate?

**Michael Stapelberg:** I wouldn't be able to say exactly how many years it is, but yes, I definitely got the feeling when I joined that this is years ahead of everything that I've known up to that point. In fact, I would love it if open source would look more like what we have internally in a couple of years, just because it makes my life so much simpler... Because there's this huge divide between things that you experience at work and things that you experience in the outside, right?

As just one example, a different project of mine that I run is [Debian Code Search](https://codesearch.debian.net/), which is a regular expression code search engine for all of the open source software that is found in Debian. When I launched it, we had quite some trouble getting the resources for it, because you need storage devices that have a huge number of IOPS; you definitely need flash devices, maybe even RAM if you can afford it, which we can't right now. But you can't run it off of a regular spinning hard disk, and in 2012 when I started that project, I approached the Debian sys admin team and asked them for flash storage, and they flat out laughed at me. I was like "What's happening?", I just couldn't understand, because that was also the year when I joined Google, and when I needed flash storage, I would just ask for it and allocate it in a self-service way, and a couple of minutes later I would have the flash storage available to me... And I just couldn't fathom how there could be this huge divide between "Oh yeah, sure, you can do that. You don't even need to talk to a human to do that internally", and then externally it just would not be possible.

**Carlisia Pinto:** Is Google going to open-source a lot of the infrastructure or some of the infrastructure?

**Michael Stapelberg:** \[00:39:56.29\] I think that's definitely the trend. Infrastructure is always hard to really open source, as in infrastructure software and systems. But if you read about it, there was the release of [Abseil](https://abseil.io/) recently, which is sort of Google's base libraries for C++ and also for Python. It was released at CppCon just a couple of days ago.

I'm very excited about this release, because it means that other parts of Google will also be released. Because essentially, every project that we have uses the base libraries; that's why they're called "base libraries." If the base libraries are not released, you need to jump through so many hoops whenever you want to do an open source release. Now that that foundation is laid, I'm confident that more projects can be released soon(ish), I hope.

**Carlisia Pinto:** The reason I even know this is because [JBD](https://twitter.com/rakyll) is leaving the Go language team to work on the project to open source some part of the infrastructure, and I was wondering if you would know more specifically what that is.

**Michael Stapelberg:** Unfortunately, I didn't even know that she was moving, so... I don't know, sorry.

**Carlisia Pinto:** Yeah, more like what the plans are for open-sourcing... What parts of the infrastructure is what I'm curious.

**Michael Stapelberg:** Right. I think that is a decision that the individual teams actually need to make for themselves. I think in general the climate is pro-open source and people are encouraged to think about it and consider open-sourcing it, but ultimately there's no top-down mandate to open-source everything. That wouldn't fly, that's not how Google works.

I think if the team in question has the man power to do it and has the will to do it, they will now be much more empowered than they used to be.

**Carlisia Pinto:** Cool.

**Erik St. Martin:** That's awesome. And even just things like [Kubernetes](https://kubernetes.io/), right? That's not a direct open source release of an infrastructure tool of Google, but it's the recreation of one that's not so tied to Google's infrastructure, which is really awesome that we get to share in these things that Google's been doing for ages.

**Michael Stapelberg:** Yeah, absolutely. And in fact, Kubernetes was one of the things that I was so happy about when it was released, because I was like "Finally, there will be products like this, which offer Kubernetes as a service." That's really what I think will be very useful, because -- for example, for i3 we used to host everything ourselves. We used to have these little bots and helper tools, and even we had a custom code review tool. We've since moved everything to the cloud and it just makes our life so much easier.

We run part of it on [App Engine](https://cloud.google.com/appengine/). For example the bot that services GitHub issues runs on app engine. It would be entirely conceivable that we could run more of these services on like a public or semi-public hosted Kubernetes, like the [Google Container Engine](https://cloud.google.com/kubernetes-engine/).

I'm excited also for more service providers to step into that market. I think Microsoft in fact has an offering on Azure; you probably can just get a couple containers in Kubernetes... And I hope that this becomes much more of a commodity. I don't wanna manage all of these machines, much like in the gokrazy project; the insight is that I don't have time for this, and I don't want to do this. I just wanna run my application code. If I have a Go package, why is it so hard to run it on somebody's cloud, right?

**Erik St. Martin:** Yeah, just take my stuff and put it somewhere, please...

**Michael Stapelberg:** Exactly.

**Carlisia Pinto:** So the [expanderr](https://github.com/stapelberg/expanderr) project - obviously, super cool! For people who don't know, it's an automated way to add the `if error` statements. The tool automatically recognizes if your function returns an error, or the function you're calling returns an error, and then you can automatically trigger the `if error` statements. I see that's available for Emacs, which I imagine is what you use...

**Michael Stapelberg:** Yes.

**Carlisia Pinto:** Do you know of the other editors having plans to add it? Because I want it.

**Michael Stapelberg:** \[00:44:07.06\] Sure, yeah. To answer the direct question, and then maybe I can talk about how the project came to be... There is in fact a pull request by someone who is currently adding it to the Vim Go plugin; that all needs to be merged. I think [Fatih](https://twitter.com/fatih) is very busy with other projects currently, but as soon as he gets a chance, I hope we can make some progress on this. It definitely will be integrated into Vim.
I think we briefly brought up adding it to Visual Studio Code as well, and they were very receptive of the idea. It will be added to more editors as people make that little bit of effort and just integrate it.

**Carlisia Pinto:** That'd be awesome!

**Brian Ketelsen:** That's awesome!

**Carlisia Pinto:** Thank you for that tool. I mean, all the tools you do.

**Erik St. Martin:** That seems to be one of the common complaints too from people coming into Go, too... They feel it's super verbose to have to constantly do that, so I think that's gonna be an easy solve for a lot of people. "I hate typing the error checks!", but you don't have to.

**Michael Stapelberg:** Exactly. That was actually exactly the feeling that I had. I was writing a Go program, and I don't really mind typing these error checks whenever you're modifying an existing program, because they tend to not be so pervasive. But when you're prototyping something, especially something that interacts with your operating system, say you iterate over a directory, you open a couple of files, you do some transformation - typical stuff that you wanna do and get out of the way quickly when you're prototyping - some people would argue that you just don't need to do the error checking, but I would vehemently argue against it... \[laughter\] Especially when prototyping, it's crucial that you get good errors.

So I found myself typing all of these error checks over and over again, and I know that, for example, in the blog post by [Russ Cox](https://twitter.com/_rsc) at the beginning of the year he said that he will want to look into improving the error checking situation... So I figured, "Well, it's good that they're working on it, but in the meantime I would like to just have a little bit more automation in my editor", and I figured "Hey, I'm using Emacs, and it has all of these packages, and there's so many advanced features", so I asked on Twitter "So why isn't it a thing that when you wanna expand an error check statement, why isn't it type-aware and why can't it return exactly the right thing, and why can't it expand in the right way?" I hope that somebody would reply and say "Oh yeah, you just need to install this package", but nobody stepped up.

So at some point - in fact, shortly before GopherCon - I was considering doing this, and then almost as a joke, I started and figured "Well, could you do this? Could you write a little tool that when you invoke it, it just expands whatever is under the cursor?", and it turns out it is possible.
Then we had a Go meetup in Zurich. I wasn't still quite sure about the idea, because error-checking is such a hot topic in Go, and I wasn't quite sure whether other people would like it... So when we had the Go meetup in Zurich, there were a couple of presentations, and then after the regularly scheduled presentations they asked "Well, is there anybody who wants to do a lightning talk?" and in fact, Marcel from the Go team gave a little lightning talk about an investigation into an errors package that he had designed, and I thought "Well, now it's very to the point." I was like "Okay, why don't I show my little tool here?" and I demonstrated it and people were sort of like amused, but also interested... Most of all, Robert Griesemer from the Go team was in the room, and he didn't flat out laugh at me, so I figured, "Okay, I can release this now." \[laughter\]

**Brian Ketelsen:** \[00:47:47.28\] It must be alright. Yeah, it's fantastic. I love how smart it is. I'm watching the little video on the page over and over, and it's aware enough to return the right things when you change your function signature - that's brilliant, I love it.

**Michael Stapelberg:** Thank you.

**Carlisia Pinto:** Yeah, that's pretty cool. Now, what could Russ possibly mean when he said they will be looking into the error handling?

**Michael Stapelberg:** Well, that's just speculation, right? But it is entirely thinkable that...

**Carlisia Pinto:** Yeah, exactly, let's speculate!

**Michael Stapelberg:** Yeah, let's speculate! So it would be thinkable to add a new keyword, or a new syntax feature for it... Maybe, if it really pays off. For example, in Rust you have the exclamation mark for the error-checking macro, right? And I think that's actually a somewhat useful and elegant way of dealing with it. I think they've recently expanded it with even more syntax, and I was sort of turned off by that, because I thought adding a little bit of syntax is okay, but adding too much seems to go overboard.

So there is definitely a balance that one needs to strike here, and I'm fairly confident that Russ will come up with a good way that finds consensus, if that is the route that he chooses to go.

**Erik St. Martin:** Yeah, it's really interesting, because I'd love to not be as verbose, but I actually kind of like it too, because I can immediately see where the error states are and how this piece of code intends to handle them. If that's kind of abstracted away, you kind of lose that and you're back to exceptions, or you're walking through code and trying to picture which things throw errors and where they're handled... So it would have to be something really close, because I've come to admire that, and I actually really love seeing the blank identifier for the return of the error response, because you immediately see it... It's just like staring right at you, like "So, why aren't you handling that error?"

**Carlisia Pinto:** You love it meaning it doesn't obscure that there is something being returned, right? And then you know, "Okay, you're just skipping over handling it."

**Erik St. Martin:** Yeah, it makes it super clear that this call can return in an unpredictable way, where the actual legitimate response variable/value - that could be in some unknown state because of an error condition. That's the thing that I hate the most - if you do a file open and you don't actually notice that that errored out you can't really determine what your file pointer is, and then you go off with it and in some weird place it starts failing when you go to use it. So I like the fact that it's really explicit there and you can see it during code review that this can return in an error state and it can make the other values that are returns unpredictable, and they're ignoring it, like "Why is that not being handled?"

**Michael Stapelberg:** Yeah, and I definitely love what it does for the end user. I really feel respected when I get a proper error message from a program, and not just an exception that is, even worse, pages long, as frequently happens with Python programs where the programmers weren't careful enough or didn't do enough testing, and then something happens like your disk runs out of space, or the file that they really expected to be there turns out to not be there. Then you get this huge exception, and usually the exceptions come with language that isn't quite clear to the end user, because it is written from the perspective of the programmer, or worse, from the perspective of the programming language designer. Then you get a key error in Python, and it could mean anything. So that's why I really appreciate what the sometimes honorous error checking in Go means for the end user.

**Erik St. Martin:** Yeah, I've definitely seen that stuff before too, where rather than a "File doesn't exist" for open, you get a nil pointer exception somewhere down the line, because you're trying to deal with the file type.

**Michael Stapelberg:** \[00:52:01.18\] Yeah. And then usually, what I do is I just give up and I _strace_ the program. At that point I'm like "Why are we doing this?! There must be a better way."

**Erik St. Martin:** I think we are probably running a little late on time. Do we wanna jump into some interesting projects and news, and \#FreeSoftwareFriday?

**Brian Ketelsen:** Yes, let's! I think the number one interesting project for the whole year is the Space Gophers screensaver for Mac. [gitHub.com/apiarian/space-gophers](https://github.com/apiarian/space-gophers). You have to build it yourself, because whoever built it doesn't have an X-code developer Apple account thing... But it is the most adorable Gopher screensaver; they're bouncing all across your screen, and it's the Gophers from GopherCon this year, so they're little space Gophers. You have to have it. If you have a Mac, you have to have this. It's not optional.

**Carlisia Pinto:** I'm gonna wait for somebody who does have X-code to build it so I can install it properly... But it's so cute!

**Erik St. Martin:** I'm gonna have to make a Linux version... And quickly too, we mentioned last week there were security updates to Go, so if you didn't listen last week, please listen this week and update Go.

**Brian Ketelsen:** Right. You should be running 1.9.1, or 1.8.4 now, please.

**Erik St. Martin:** We'll wait. \[laughter\]

**Brian Ketelsen:** Yeah, we'll sit right here and wait.

**Carlisia Pinto:** Tell us when you're ready.

**Brian Ketelsen:** Let us know when you're done.

**Erik St. Martin:** So what else did we run into this week?

**Brian Ketelsen:** My [Golang UK talk](https://www.youtube.com/watch?v=mxlJqrVSalY&list=PLDWZ5uzn69eyM81omhIZLzvRhTOXvpeX9&index=8), I announced a tool called [Gopher Rocks](https://github.com/pkg/rock) that automatically tags your GitHub releases for you, so that everybody can start tagging their stuff. Mine was a pretty facile implementation, not very bright... There is a much better implementation at [gitHub.com/timberio/grease](https://github.com/timberio/grease), and it looks like it's a lot more functional than mine, of course... Because I wrote one, somebody had to have something much better. So Grease looks like a really nice GitHub tagging releasing kind of tool. I definitely recommend going to check that out, and I'll probably just stop writing mine now.

**Erik St. Martin:** Actually, I almost don't mind when that happens, because to me the fun part is the proof of concept. And then it's like once the problems are figured out, I wanna move on to the next problem. I rarely want to get stuff in the state that I would consider it shippable...

**Brian Ketelsen:** That's a good point.

**Carlisia Pinto:** Yeah... Sounds like software development. \[laughter\] So I ran into this post early in the week (a few days ago), and to complement Michael's blog post, which is -- we never mention the name, but it's named [Why Go is my favorite programming language](https://michael.stapelberg.de/posts/2017-08-19-golang_favorite/), and that's gonna be in the show notes.

This post is called [The 7 stages of becoming a Go programmer](https://opensource.com/article/17/9/seven-stages-becoming-go-programmer), and it's sort of hilarious... I was laughing.

**Brian Ketelsen:** It really is good.

**Carlisia Pinto:** It's written by this guy called Daisuke Maki. It's really clever. I'll just go through the stages, can I?

**Erik St. Martin:** Oh yeah, they're funny, and I follow right with it.

**Carlisia Pinto:** Yes, I think he hit it on the nail; he's experienced, obviously, but I think we share at least some of these stages.

\[00:55:53.07\] "You believe you can make Go do object oriented programming", that's stage one. Stage two, "You believe goroutines will solve all your problems." I had that too, I was thinking "Wow, you have to not just use goroutines, but also use channels, and then maybe \[unintelligible 00:56:14.12\] make it simpler." Stage three, "You believe that instead of object oriented programming, interfaces will solve all of your problems", \[laughter\] and then you're hit with the reality that abstractions are complicated. Stage four, "You believe channels will solve all your problems." Stage five, "You now believe Go is not as powerful as people claim it to be." \[laughter\] "This language sucks, it doesn't do whatever you want." Stage six, "You realize that stages one through five were all just your imagination." Stage seven, "You are now at peace", you accept the Go way.

**Erik St. Martin:** You are one with the gopher.

**Brian Ketelsen:** The author created a gist, and the description for stage seven just makes me happy. It says "You're now at peace. You write everything, including what you normally would have used Ruby, Perl or Python for in Go. You don't mind the `if err != nil` checks anymore, you only use goroutines and channels if you have to. You are one with the gopher. You feel its glorious chi, and cry when you realize his mercy for allowing you write code in such a majestic language."

It's so true. So true.

**Carlisia Pinto:** Yeah, I love it. And one thing that I say to people, yeah, Go has these weird things, and error handling is repetitive, but if you stick to it, you will change your mind. There is something about it, and I think it's the simplicity and how it makes your brain not jump through hoops to understand code. Once you get that, you realize "Oh, this is much better..."

**Brian Ketelsen:** It could be [Stockholm syndrome](https://en.wikipedia.org/wiki/Stockholm_syndrome) too, we're not gonna decide that. \[laughter\]

**Erik St. Martin:** We just came for the [cool mascot](https://blog.golang.org/gopher).

**Brian Ketelsen:** Sure. We came for the Gopher Screensavers, we stayed for the chi.

**Michael Stapelberg:** I read that so frequently on Twitter... People are saying "Well, I don't know about Go, but it has the best mascot", and I wonder if that's just a meme that actual gophers still carry forward, or if that's actually people who are just not into Go yet, but they think the mascot is really cute. So either way, I think it's cool.

**Carlisia Pinto:** We love it! I think everybody loves it... I think. From what I see, even veterans still love the gopher.

**Erik St. Martin:** To me it's really interesting how much we own it. We are more than happy to wear all kinds of swag... Grown adults with cartoon gophers on our laptops, on our shirts, on our backpack...

**Brian Ketelsen:** On our sweatshirts, we have it tattooed...

**Michael Stapelberg:** One additional thing that you guys and gals might not appreciate is that outside of the U.S. a gopher is not really a thing. Whenever I wear gophers on my T-shirts, people ask me "What sort of animal is that?" Then I give them the German name and they're like "I've never heard of this... This can't be the real thing", and they come up with animals that are sort of the same thing or similar, and then I need to explain to them, "Well, no... You know, it's a U.S. thing, but believe me, it exists!" \[laughter\]

**Erik St. Martin:** That had never occurred to me.

**Carlisia Pinto:** Yeah. I think I know a gopher more from American television - I didn't grow up in the U.S. - than from real life. I've never seen a gopher in my life, I don't think.

**Brian Ketelsen:** Like Caddyshack?

**Carlisia Pinto:** I don't know... But I was going to say that I heard of words of cosplay at the next GopherCon, people wearing Gopher costumes...

**Brian Ketelsen:** \[01:00:05.10\] We're all wearing Gopher costumes. Everybody's doing it, so get your costume ready now.

**Carlisia Pinto:** Oh, my god... Okay.

**Erik St. Martin:** You should start making stuff up when people ask that... Like, "What's a gopher?" and you're like "It's kind of in the same family as a chupacabra..." \[laughter\]

**Michael Stapelberg:** That's a good point, I'll remember that for next time.

**Brian Ketelsen:** Alright, how about \#FreeSoftwareFriday? This is one of my favorite segments, where we give a shoutout to a person or a project that we love. I'd love to kick this one off with a shoutout to [Ashley McNamara](https://twitter.com/ashleymcnamara), who is not only an amazing technical person and programmer, but she's out on the talking/speaking circuit right now, helping people feel good about contributing to open source in ways that aren't necessarily code, and I think that's a huge, wonderful message to be sending out, how it takes more than just programming to make a good ecosystem for a project. So a big shoutout to Ashley for spreading that word and for being such an amazing steward of our community. We love you a lot, Ashley.

**Michael Stapelberg:** Yeah, I would really like to echo that and stress the point that really, if you think you wanna contribute to open source and you don't know how to program, there's still so many useful skills that you can bring to the table, and I really wish we would have more non-programmers in open source. I think it would really benefit all of us.

**Carlisia Pinto:** I think this message also needs to be preached not only to beginners or people who are interested but not doing it, but also to veterans... Because sometimes we talk about making open source more accessible to beginners, and people say "Well, this codebase is so complicated..." If you don't have the stamina or desire or time or ability to make this really complicated code change, then why do we need to make it easier to contribute? If you don't have those things, you don't wanna contribute anyway... But they don't remember that things are very simple and straightforward that people can contribute to, like documentation, little examples... So you have to approach it from both ends.

**Erik St. Martin:** Even triaging, because sometimes people who post issues are fly-by posting. "It crashes when I do such-and-such", and it's not enough for you to figure out, and often those are the things that get ignored for the longest time, because it's gonna take a time investment just to figure out how to recreate whatever issue happened. So triaging issues and trying to recreate them and offer more context and logs and maybe environment information. There's a lot of things that you can do, even with no to semi-technical ability, not necessarily programming. And sometimes you can track it down; maybe you don't know how to fix it, but you know the area of code that's causing it to happen.

**Carlisia Pinto:** Yeah, and that reminds me to mention also that contributions to documentation might require less technical ability. At least at the beginning, you don't need to know a lot of technicalities about the project, but it's still hard and you still need to know the essence of what the project is about. It's not trivial, but it's more achievable than code, I think.

**Michael Stapelberg:** And also one point is you don't even need to know anything, because as soon as you post something that is wrong, as soon as you make a pull request that has a wrong documentation change, people will helpfully point out that it is wrong and what needs to be there. So the best way to get an answer on the internet is to post something wrong and wait for people to correct you, and that applies equally to open source. \[laughter\]

**Carlisia Pinto:** Absolutely.

**Erik St. Martin:** \[01:04:03.19\] "I was working on something important, but you posted something wrong and I must stop!" \[laughter\]

**Brian Ketelsen:** Exactly.

**Carlisia Pinto:** "I must correct you!"

**Erik St. Martin:** I had one of those moments the other night... My wife was heading upstairs to the bed or something, and I was like "I'll be up in a couple of minutes, I'm arguing with somebody on the internet."

**Brian Ketelsen:** Yeah, somebody's wrong on the internet; I'll be there in a while. \[laughter\]

**Carlisia Pinto:** Hey, I totally take advantage of that. I'm always "Hey, I think that that's how it should work." I have no idea, nobody corrects me. No, I'm kidding.

**Erik St. Martin:** Did you have anything this week, Carlisia?

**Carlisia Pinto:** No.

**Erik St. Martin:** And how about you, Michael? Did you have a project or a maintainer you wanna give a shoutout to?

**Michael Stapelberg:** Yeah, actually just today at work I was showing some of my colleagues an Emacs package that I've come to really appreciate, which is [magit](https://github.com/magit/magit). It is a Git front-end. It is integrated into Emacs, but you can also use it if you don't like Emacs at all, because it essentially defines its own keyboard shortcuts and stuff. Don't fear, just start Emacs and start Magit and play around a little bit; it has a very unique way of presenting all of what's going on in your Git working directory, for example which files are staged, what did you not yet push to upstream, which stashes do you have, and all of the operations that you wanna do are just so easy and accessible if you wanna stage just that one line of that one hunk, but not the entire hunk.

That is just so convenient and so easy, and I use it all the time and I've come to realize that even though I'm a big command line user, these days whenever I have a Git-related thing that I wanna change, like I wanna commit a new conflict file or something, I'm at the point where I just start my Emacs to use Magit. It's just the better Git front-end. So definitely if you haven't checked it out yet, check it out.

**Brian Ketelsen:** Wow.

**Erik St. Martin:** If only I used Emacs...

**Brian Ketelsen:** Yeah, I'm afraid...

**Michael Stapelberg:** You don't need to, that's what I'm saying. \[laughter\]

**Erik St. Martin:** Alright, so mine this week - and this is probably the perfect episode for it - is called [Alacritty](https://jwilm.io/blog/announcing-alacritty/), and it's a terminal emulator that's GPU accelerated using OpenGL. It's written in Rust, so... I haven't contributed to it or anything...

**Brian Ketelsen:** \[laughs\] Not yet.

**Erik St. Martin:** But I have to say it is ridiculously fast. Window managers, I don't rotate through i3's there, but I've still struggled to find a terminal emulator that I really like. It's super fast, and it renders fonts and glyphs really nicely.

No tabs. It's cross-platforms, so it'll work in all the places, but there's no things like you'd see out of iTerm2, like tabs and things like that. It really relies on your window manager to do that type of stuff.

**Brian Ketelsen:** \[01:07:00.11\] So if you are on a Mac, you have to compile this yourself, but if you're running Arch - like most good people should - you can just install this from the AUR, which is awesome.

**Erik St. Martin:** Yeah, I was actually kind of surprised that that was the only place that it was available as a pre-compiled package, because almost always Red Hat distributions and Ubuntu get it first, and you're usually the person who has to write the AUR...

**Brian Ketelsen:** Yeah. I'm curious, and I don't mean this in a derogatory way at all, but the last couple times that I've tried to do compiling Rust applications from source, I've been bitten by the fact that Rust is still moving really quickly. Has it stabilized a bit, so that cloning some software and compiling it will work without frustration?

**Erik St. Martin:** This is probably the only Rust thing that at least I've used knowingly, and I did compile it from source on an Ubuntu machine. You install (it's called) Rust Up first, and then that'll allow you to switch between the Rust versions, and that'll get you the latest stable release of Rust. And then this was just a single line compile.

**Brian Ketelsen:** Oh, okay.

**Erik St. Martin:** So it goes pretty quick.

**Brian Ketelsen:** It's good to know. And do you use this daily, Alacritty?

**Erik St. Martin:** Yes.

**Brian Ketelsen:** Nice. Good to know.

**Erik St. Martin:** Alright, so with that, I think that we are probably over-time, but I don't think anybody is complaining. It's been a ton of fun. We're so grateful to have you on the show, Michael... It's been a long time coming.

**Brian Ketelsen:** We're not worthy...

**Michael Stapelberg:** Thank you for having me. It was fun, thanks!

**Erik St. Martin:** For the listeners, we are @GoTime.Fm. If you wanna be on the show, you have suggestions for guests or topics, file an issue at [ping](https://github.com/GoTimeFM/ping). We should be back to the normal studio next week, for anybody who's listening live now. We'll be back to the Changelog.com/live for live listening, instead of the live Hangouts.

With that, we'll see everybody next week! Bye, everybody!

**Brian Ketelsen:** Thank you, Michael!

**Carlisia Pinto:** Bye! Thank you, Michael. It was great!

**Michael Stapelberg:** Anytime, bye-bye!
