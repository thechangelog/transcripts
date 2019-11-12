**Mat Ryer:** Hello, I'm Mat Ryer, and guess what? It's only Go Time today! We are preparing ourselves for the robotic uprising, and \*spoiler alert\* it's gonna be adorable. Today we're talking about TinyGo and Gopherbot, and I'm joined by the creator of Gopherbot; I've heard him called "the Santa of Open Source." It's Deadprogram, a.k.a. Ron Evans. Hi, Ron. How are you?

**Ron Evans:** Hey, everybody. Actually, it's TinyGo Time today.

**Mat Ryer:** It's TinyGo Time.

**Ron Evans:** Yes.

**Mat Ryer:** Do you prefer Ron, or Dead?

**Ron Evans:** Well, I'm not dead yet, but...

**Mat Ryer:** So we'll go with Ron.

**Ron Evans:** Yeah, Ron is good. Ron is good. I prefer Deadprogram, in its entirety. Kind of like Prince - you don't call him Pri, you just call him Prince.

**Mat Ryer:** Yeah. Deadprogram. It could just be like a crash symbol, or something... But yeah, welcome to the show.

**Ron Evans:** Only if I have to do that due to a kind of disagreement with my record label.

**Mat Ryer:** \[laughs\] Which I can see happening, frankly, Ron.

**Ron Evans:** It's possible, it's possible.

**Mat Ryer:** Cool, yeah. So this is actually the first time we've done a show like this. It's gonna be a very intimate show; close up to the microphone, and it's all snuggle, it's just gonna be me and Ron today, talking about this.

**Ron Evans:** And the robots, of course. Just me and you and a bunch of robots.

**Mat Ryer:** Yes. And we're gonna learn a little bit more about those cheeky little robots, starting probably with TinyGo, because I think that's really where it starts, where Go's part of this starts... Doesn't it?

**Ron Evans:** Yes. Well, I've been on GoTime before, talking about some of the other stuff that I've been involved with in Go - robots, and drones, and computer vision, Gobot being the best-known of those... And then last year I was talking about GoCV, which is computer vision using Go, and OpenCV... But what I've always dreamed of, and what I've wanted since the very beginning, was the ability to run Go on the tiniest of chips, and on these microcontrollers. These are the little, tiny chips that are in everything, like keyboards, and mice, break systems... The small chips that connect up to the physical world and cause all the things to happen or not happen at the right times, hopefully, if everything goes well... But we've never been able to run Go on those small chips, because they're so small. And Go is a great language, it's very powerful, it does all these amazing things, but Go is not known for being small. The number of keywords is small, and the binaries are large, let's just put it that way.

**Mat Ryer:** \[00:04:21.00\] Yes. So Go was too big for those microcontrollers then.

**Ron Evans:** Yes, by orders of magnitude, in fact. Hello world in Go, when you compile it for a Linux operating system, is about 1.1 megabytes. And to be fair, it includes the entire Go runtime; it's got everything that you're ever going to need, to a large extent... A program that does nothing more than output Hello world, and a program that does some fairly sophisticated processing - they're not gonna be that different in size from each other once you hit that initial baseline. But when we're talking about microcontrollers, we could be talking about processors that have 64k of RAM to the entire processor, or even less.

So I've wanted this for a long time, but it's never really been possible, and people are like, "Oh, Deadprogram, you're crazy. It's never gonna be done." But there were a few people who tried, and did some really cool stuff. There was a project called Emgo, which basically took Go and transliterated it into C code that you could then compile with the GCC Compiler for different ARM-based embedded devices. That was a step in the right direction, but it wasn't real Go code. But a very cool project and a lot of amazing work done by its main creator... But it still wasn't getting me there.

I talked to a few other people, trying to convince everyone who I thought could actually do something about this problem of "How can we take and compile Go down to something that's so small?" And it wasn't until last year, about September timeframe, that I became aware of this TinyGo project, which was originally started by my main collaborator, Ayke van Laëthem. He is a contributor to a number of projects in the embedded space, in particular MicroPython, which is a version of Python that runs on microcontrollers.

His attitude was "Well, if Python can run on microcontrollers, and if JavaScript can run on microcontrollers, why can't Go?" But his take on it was really unique, and especially powerful.

Go, it turns out, is actually written in Go. The Go compiler is written in Go.

**Mat Ryer:** It didn't use to be, did it?

**Ron Evans:** No, no. Originally it was written in C...

**Mat Ryer:** Hm. Why didn't they use Go then?

**Ron Evans:** ...so you had to compile Go using a C compiler like GCC, and then once you had your Go compiler compiled, then you could compile your Go programs. So up until -- I can't remember exactly which version... Maybe 1.5, or something like that.

**Mat Ryer:** I think so, yeah.

**Ron Evans:** I can't remember the exact version, but you had to do some real work in order to compile the Go compiler itself. But eventually came a time when the Go compiler was written entirely in Go. That's really useful for the Go core team, and also for anyone that wants to contribute to the Go compiler itself, because you could read the compiler code if you can read Go... And that's been the problem, by the way, for some other really cool open source languages, like Ruby or Node.js, where people said "Oh, I wanna contribute to this", and they're like "Yeah, but it's not written in JavaScript. It's written in C++, and I don't know C++, so... Sorry, I can't contribute, really." So Go being written in Go, it does definitely lower the bar, but it also creates new possibilities.

\[00:08:21.21\] Because Go can parse its own language in Go, you could use Go's own libraries and tools to then take what's known as the single-static assignment, which is the -- when you take the Go text of the Go language, and the Go compiler is gonna take that and turn it into machine code, it takes it and it parses it, it breaks it apart and turns it into this SSA form before then the rest of the Go compiler toolchain turns it into the binary language.

**Mat Ryer:** Sure.

**Ron Evans:** So Ayke said "Oh, if I take this SSA form, I can then put that through the LLVM toolchain, and create my binary code using that." So LLVM is a set of compiler libraries and tools that has been around for quite a while. I'm not sure how long... I mean, I've used it for at least 12 years, but it's probably been around for longer than that... And it's become very well-known because there's some languages that a bunch of people are really interested in, that are using LLVM. One of them is Swift. Swift is a LLVM compiler toolchain language. Another one is Rust.

Ayke took the SSA form created by the Go compiler toolchain, and then TinyGo - this compiler project - then takes that and turns it into the LLVM intermediate representation, so it can then be compiled for whatever targets are supported by LLVM. Some of those are microcontrollers, like the Arduino, which uses the AVR microcontroller. All of the ARM-based microcontrollers, like the circuit playground, Express from Adafruit, which is a really cool microcontroller... All of the new Arduinos are based on these types of ARM microcontrollers, like the Arduino Zero and the MKR1000. So there's a lot of pretty much most of the interesting, small, inexpensive chips are based on these types of microcontroller architectures, and if we can compile this code down...

In this last February I presented the first [talk about TinyGo at FOSDEM](https://video.fosdem.org/2019/K.1.105/go_on_microcontrollers.mp4) in Brussels, and then it was really, really exciting. Ayke was there, he came in from the Netherlands, which is where he's from, and some of the other contributors from other places... We also had the first Birds of a Feather session right after my talk, but the organizers of FOSDEM were kind enough to put the talk into the main room, so I actually gave the first main room talk ever about Go at FOSDEM. That was kind of amazing. I'm like, "I think you guys should have picked one of the real Go people first, but... Hey, TinyGo! Let's do this!" But it was really exciting to get to share the results, and we had the first release of the software.

The demo I showed -- I showed a bunch of demos, but the one that really got a lot of people's attention was I compiled a TinyGo program that was 500 bytes in size, that ran on an 8-bit microcontroller called the ATtiny85, that has only 8k of RAM.

**Mat Ryer:** Oh, wow.

**Ron Evans:** So I can compile a Go program for an 8-bit microcontroller that has 8k of RAM.

**Mat Ryer:** \[00:12:04.04\] That is tiny.

**Ron Evans:** That is tiny. I picked it basically because the name of the microcontroller had tiny in it, I'll admit.

**Mat Ryer:** Yeah. So the Go source code gets turned into this SSA, and then the TinyGo toolchain takes it from there and creates these tiny things... So what's the trade-off then? What do you lose? What's not in that 11k Hello world that is in the 1.1 megabyte?

**Ron Evans:** Well, that's really the trick - we're not able to take 100% compression to 0% information, I believe, by definition...

**Mat Ryer:** Right, yeah.

**Ron Evans:** It's not the full everything that's in Go. One of the big differences is the runtime is different when you're running on a bare metal, with no operating system... So we have to implement the runtime calls differently.

Another challenge is the standard library of Go. A lot of the standard library we can compile, but a bunch of it we can't, because it's very tightly coupled to the runtime itself.

**Mat Ryer:** Yeah.

**Ron Evans:** So in those cases, we have to implement a slightly more operating system-agnostic version of some of the standard library. So there are some trade-offs involved. And we're not able to compile all Go code yet... Nor is that really the primary objective of what we're trying to do.

The Go core team is doing really great work. We're not trying to replace, like "Oh, Go is bad. TinyGo is good." No, nothing like that. Quite the opposite. Really we're saying, "Wow, Go is such a cool language. There's places where we'd like to execute Go code. Can we come up with another implementation of the Go runtime and standard library, while still keeping the same Go programming language? And for that matter, how much of the same standard library can we still continue to use?" Maybe all of it, maybe most of it; certainly, much of it.

So there are trade-offs because of the environments in which it needs to execute, but one of the big benefits is we're not bringing along all of the extra things. No one's using the entire standard library all at once. If you are - wow... That's one heck of a piece of code you've got going there, friends!

**Mat Ryer:** Well, you certainly wouldn't want to run whatever that was on Tiny edge sort of hardware probably, but... Some things are obvious, like the OS, opening files, and things like that - they might be different in a situation where you don't have much of a file system. I don't know if that's a good example.

**Ron Evans:** That's actually a great example. On a microcontroller you don't have a filesystem at all, right? But you could... We don't actually have this implemented yet, but it's on our roadmap. There's a lot of small devices that will typically have either flash memory, or an SD card interface. Those devices will typically use the SPI interface, which is a low-level hardware interface, where the microcontroller can then talk to that. So that device could have a filesystem on it. Very commonly FAT is the default file system of a lot of these devices... So when you get an Adafruit Circuit Playground Express, it has a 1 MB flash drive built onto the board itself, that you can use for storing different kinds of data files that you might want to read from your microcontroller code. Eventually -- we don't have support for this yet in TinyGo, but it's on our roadmap; you could have, for example, wav files, which you then playback using digital to analog converter (DAC) that's also built on... So you could play back wav files as a part of some of the interesting interactions. Or you could record data remotely... You know, devices that are not cloud-connected all the time, or are not meant to be; you would maybe still want to be able to save data.

**Mat Ryer:** \[00:16:21.22\] Right.

**Ron Evans:** Maybe you wanna train your device to recognize your voice, but you don't wanna actually put any of that data on the cloud; you're gonna need some type of local storage. So these are low-level interfaces to things that you need to implement. Some people are doing that using things that are called real-time operating systems, which are -- it's not a full operating system, but it maybe has some of the capabilities... You know, some of the memory allocation capabilities, and some of the file reading and writing, some network capabilities... But we're really trying to use the Go standard library wherever we can.

**Mat Ryer:** So in that example then, would TinyGo have to have its own OS package that you write, that just does completely different things, but maybe copies the interface of the standard libraries' OS package? Is that how you would address it?

**Ron Evans:** That is actually what we are doing, in several cases. One example is we've been working on adding MacOS support, in order to implement that in an agnostic way. But even a better example is the bare metal, where we need to be able to say "Oh, there's no operating system primitives at all", so we have to either implement them ourselves, or leave them unimplemented in some fashion.

We have a [wiki page](https://github.com/tinygo-org/tinygo/wiki) on the TinyGo repository, where we talk about the main challenges we have with how Go itself is currently implemented... And that's one of them - this tight coupling between the runtime and the standard library. And there's actually been some really good talks that were done -- I was at one of them talking about design of Go 2.0... It was Ian Lance Taylor who did the talk, [talking about the Go 2.0 transition](https://www.youtube.com/watch?v=LqKOY_pH8u0&list=PLeGxIOPLk9ELbB1JEbThGPffhQvNlIpPa&index=2&t=0s). He's actually done a few talks about this; I caught the first one at [GopherPalooza](http://gopherpalooza.com/), I believe, in San Francisco. That was a really cool conference that took place last year. But talking about how the runtime and the standard library are a little too coupled, and some proposals for decoupling that... That way, if you implement the runtime correctly, then ideally all the standard library would still continue to work.

So for TinyGo this is a real challenge technically, but we're able to get around this by sort of reimplementing some of the primitives in ways that are logical, in the context of - you're running on something that has very little memory.

There's also some other important differences, which is how microcontrollers really work? Well on microcontrollers you have registers, and these registers are typically used for very low-level hardware-based communication. It could be turning on and off LEDs using the GPIO interfaces, or it could be communicating with other chips that are connected directly to the microcontroller, like the SPI interface in our little flash example, or the I2C interface, which is what's used by a lot of sensors like digital compasses (magnetometers, more officially), accelerometers (which are motion detectors), thermometers... There's a lot of different sensors that use this I2C interfaces.

\[00:19:49.11\] One of the most important things that we've been doing with TinyGo is creating drivers which provide standard interfaces - again, defined in Go - so that you can write some code that if it uses the same LIS3DH digital accelerometer that's in the Circuit Playground Express board, that same code could be ported... You know, there's a project that's on Hacker News and a bunch of websites about a Homebrew smartwatch - I don't know if you guys saw that today - that uses the same digital accelerometer. So we could potentially -- I haven't gotten that hardware and I haven't looked that close, but if it's one of the processors that TinyGo supports, we could theoretically run TinyGo on this watch, and then connect to the same sensor that it's already got, without changing the code very much, if at all.

**Mat Ryer:** Oh, that's awesome.

**Ron Evans:** Yeah, this hardware abstraction layer is really important, because you don't exactly always know what kind of target hardware you're going to want, so we can sort of decouple the drivers that know how to do standard functionalities, and reading the temperature, or detecting the accelerator's motion from whichever chip it's running on, whether that's one that's coming from a microchip, or a Nordic Semiconductor, or NXP, or Intel, or whoever... And by doing this -- that's in the spirit of what Go is doing as far as it's trying to be operating system and architecture-agnostic; we're just extending that into Go OS no operating system... That should be our ideal use case.

**Mat Ryer:** Yeah. You mentioned interfaces there... Does that mean that that would be a place where you could potentially write unit tests? If you're dealing with an interface in Go, is that an opportunity where you could write code that wouldn't have to have the physical hardware? You could just test it against this interface.

**Ron Evans:** Yes, that's absolutely the case... And a few things on that - first of all, testing. Absolutely essential in any modern software development.

**Mat Ryer:** No doubt.

**Ron Evans:** And yet, here we are, it's the 21st century, and most embedded software is using ad-hoc style manual/functional testing primarily. You know, the joke goes something like "Hey, I just looked into this program. It's 10,000 lines of code, no tests." "What?! Unacceptable!" "Well, it's an embedded program." "Oh, okay. Never mind. Ship it."

**Mat Ryer:** \[laughs\]

**Ron Evans:** "Don't worry, it's only on like a jet airplane, or maybe on like a laser that's used for brain surgery... Nothing too important." "We don't actually know. We just sell these chips to someone who sells some boards to some people, who then use them for something."

**Mat Ryer:** Exactly, yeah. It's not their problem, is it...?

**Ron Evans:** "The problem all works out", you know... So this is not an acceptable way to approach software development, so by trying to tie into -- first of all, as you said, we can use the interfaces so that we can test things not necessarily with the physical hardware attached. We do some of that right now using QEMU, which is a software emulator of some hardware. Then there's some other cool projects... There's one from Antmicro whose name escapes me right this second, but its specific purpose in life is to provide software emulation of specific microcontrollers. So there's a lot of things that we can do for comprehensive testing, in-depth, of different embedded systems, by using modern languages and modern compilers that really -- if we're talking about software reliability, it's just that much more important when we're talking edge devices where safety is obviously one big concern... But also, there's second-order effects; if it gathers information incorrectly, that could cause us to ignore problems... You know, the sprinkler system may not be mission-critical, but if it wastes a bunch of water, in the long-term that's very bad.

**Mat Ryer:** \[00:24:06.07\] Yeah.

**Ron Evans:** And in the short-term it's really bad, because you've just got a massive water bill. So these are things that we can do something about by testing. Another is temporal testing. So if we wanna test our sprinkler system, and we wanna make sure it works correctly, and we have nothing but physical functional testing, then each iteration we're gonna let the thing run for a whole week to make sure it turns on and off at the right times.

If we can write some unit tests where we can test that it actually is triggering the events at the right times, we can accelerate -- I mean, this is normal, iterative software development, with the proper mocking of things, and proper interfaces can lead towards better architectures anyway, if we combine these things together. That's really our only hope of writing the kind of software that we need to be for touching the physical world.

**Mat Ryer:** Yeah.

**Ron Evans:** The last millimeter.

**Mat Ryer:** Yeah, touching the physical world is a great point at which I can now talk about our great giveaway that we're gonna do today. What we're asking people to do is either review the podcast (positively, ideally), share it, tell your friends about the podcast, and in particular this episode... So once this is in the podcast, if you share this on social media or wherever, or just recommend it to a friend. And if you want to be entered into the quiz, just take a little screengrab of the thing just to prove it, and send it to GoTime@Changelog.com. The information will be in the show notes, but you will want to check this out, because I think the prize is pretty awesome. Ron, this might be a good time to talk about what that prize is, and we can delve a little bit into that project.

**Ron Evans:** Yeah, we're gonna be giving away a Gopherbot. So what is Gopherbot? Gopherbot is a robotic gopher plushie which is programmable using TinyGo.

**Break:** \[00:26:05.28\]

**Ron Evans:** A bunch of people have these really awesome gopher plushies that you've gotten over the years at Gophercons and other cool events... So collaboratively with my brother Damon, who is also a hardware hacker, and he designed a 3D helmet that I then installed a bunch of LEDs and sensors and things into... And people really liked it. So we thought "Wow, what a great way to help raise money for our open source efforts, and at the same time create a really cool, programmable, collectible robotic plushie toy." So Gopherbot is our expression of that. It uses an awesome gopher plushie from Golang Market, combined with a 3D-printed custom helmet.

There's two different plushie colors, and there's ten different helmet colors. I haven't decided on how many different LED colors there are yet... I haven't even told people that they could choose LED colors yet. That's gonna be a surprise once the campaign ends. So it's got built into it -- it uses an Adafruit Circuit Playground Express microcontroller, which is a really cool circular microcontroller from Adafruit. Awesome company out of New York, doing really innovative stuff with hardware and with software as well.

In the helmet there is RGB LED array that gives you 15 different LEDs, each of which is individually controllable for its RGB colors. We have the blinky LED on the end of a spring, which in fact is springable. You can go "Boing!" and it still works.

**Mat Ryer:** That's my favorite bit. If you go to [Gopherbot.com](https://gopherbot.com/), there's a gif that I assume you made, Ron, and it shows off the project, and it shows the little Gopherbot. And then one of the scenes is just a cutaway of Ron just dinging the spring on top of his head. It's brilliant, so you should definitely check that out on Gopherbot.com.

**Ron Evans:** That took the most engineering - an LED that could be on the end of a springy spring, and still continue to flash while going "Boing!"

**Mat Ryer:** \[laughs\] Yeah. I mean, as far as requirements for a task as software goes I think that one's gotta be up there. You see, I'm really pleased that this happened, because I've seen some talks about TinyGo, and whenever software reaches out into the real world, I get really excited... Because I was basically a web developer my whole career. So when I heard about TinyGo, I was thinking "How can I play with this? I wish there was a kit that I could put together and start to actually write code, and things..." And then, of course, Gopherbot comes along, and that's exactly what that is, isn't it?

**Ron Evans:** Exactly. The kit includes the LED helmet, the spring, the circuit board, a backpack to attach it to... Inside that circuit board are a bunch of sensors. There is a light intensity sensor, there is an accelerometer which can detect motion in X, Y and Z axes, or it can detect when it's moved around... There is a built-in MEMS microphone, which uses the I2S interface for sound recording. There is a digital to analog converter, which has got a little tiny speaker... It's got nine more of those NeoPixel LEDs, so you could control the colors on them individually...

There's a bunch of videos that we posted on the Instagram for Furriebot, and we have a bunch of videos showing different -- I mean, it looks like it's all filtered, but literally not one of those photos is filtered. They're all taken on my Android phone, just in different positions. There's poses with a bunch of other famous robots, or toys, parts of my collection... I really like toys.

**Mat Ryer:** What's the Instagram for that again?

**Ron Evans:** [Furriebot](https://www.instagram.com/furriebot/).

**Mat Ryer:** \[00:32:14.02\] I'm surprised that that was available. So would you be able to then write TinyGo code, and then flash it onto the Gopherbot? Is that how it works?

**Ron Evans:** That's exactly how it works. You write the code on your computer, you compile it, you transfer the code onto the microcontroller, the little Circuit Playground Express Board, and from that point you can disconnect from your computer, because all of the Go code is running right on the little circuit board.

For example, if you wanna make a little Tamagotchi-like toy, where you take the thing around, or you wanna go to a party and you wanna be able to have it pulse its visor in time with the music, or something, and run on batteries - you could do that. There's no wireless communication capability built-in the Gopherbot as it comes, but you could add that very easily.

One of the demos I showed at the FOSDEM talk was connecting an ESP8266 Wi-Fi chip to the microcontroller, so that it then had Wi-Fi capabilities. But that's not something that we've got built-in. I think people don't necessarily want connected toys, but they do want programmable toys.

**Mat Ryer:** Yeah.

**Ron Evans:** Those are two different things. One is sort of "Well, Hello Barbie is listening in on you, and telling your deepest, inner-most thoughts back to our corporate headquarters..." You know, not necessarily good. The other one is you can program Barbie yourself to do different things. Barbie creators might be like, "Oh, what if Barbie says something we don't like?" Well, that's the trick, isn't it?

**Mat Ryer:** Yeah, that's the point.

**Ron Evans:** Programmable toys are going to be used for things that the creators did not imagine, and exactly, that's the whole point; that's what makes them fun.

**Mat Ryer:** That's right.

**Ron Evans:** We've seen -- there was some sad news about Anki. Anki is a really cool robotics startup, that was super-well funded. They were kind of the darling of Apple's WWDC a few years ago with their Bluetooth-controllable race cars... But they announced that the company was folding all of a sudden, which is too bad. Sad news. But one of the problems, I think, with the products they made was they made programmable toys that were not open. The toys could only do whatever it was that their APIs inherently provided, and you couldn't go any further, so all their software development efforts were on their own teams to achieve. And furthermore, if you wanted to exceed those capabilities, you either couldn't do it at all, or could only do it similar to what we had to do with the Tello Drone, at a cost of a massive amount of reverse-engineering. If it wasn't for six of us basically kind of being out of our minds with the Tello thing, like "Oh, I've gotta make it fly, so I'm gonna dedicate hours of my life to writing Lua scripts, and things", it wouldn't exist.

Is it really in the interest of the toy manufacturer to limit you like this, when with a bit more effort -- to me, all toys should be programmable. All toys should be hackable. Certainly if it has programmable capabilities of its own, those should be opened up. If nothing else, that way we can confidently look at it and say "Oh, actually no, it's not surveilling us and sending back information to the Gopherbot headquarters." \[laughter\] And it's programmable; you can add that capability yourself, but that's not something we're planning on doing.

**Mat Ryer:** \[00:35:58.19\] \[laughs\] No. But you're right, and actually I think that applies to everything. Making things hackable, so that people can take it and play with it - that's the fun, isn't it? That's all the fun in it. And for toys, I always did anyway, when I was young, after I'd played with the toy for a while, for a few months maybe - I would definitely be looking for any screws to take off, because I wanted to know what was going on inside. So we're gonna do it anyway; they might as well make that happen.

**Ron Evans:** Yeah, right. I bet. How many of your toys made it one hour without something being taken apart? We have to ask your parents to be sure. \[laughter\] I would bet that very few of them survived the first couple of days of prying them apart, because they weren't meant to be, right? What if they had actually said "Yes, this toy can be taken apart and put back together, and still continue to work"? Wouldn't that be great?

**Mat Ryer:** Yes. On the other hand, the opposite is LEGO. LEGO is rubbish, unless you build and hack with it. It's just a bag of bricks otherwise. So yeah.

**Ron Evans:** Exactly. It's a hazardous thing to step on.

**Mat Ryer:** Exactly. And actually, there's only one thing worse than it in our country, which are the power socket plugs in the U.K.

**Ron Evans:** Oh, yeah.

**Mat Ryer:** They naturally are extremely dangerous. They naturally fall with the spikes up, so... \[laughs\] A lot of us have harsh memories of standing on plugs. Actually, I just wanna say this, Ron, it's interesting... Justin Clift on Slack -- and by the way, listeners, if you listen to the live show, you can join in on Gopher Slack or on the \#gotimefm channel... Justin Clift's in there - he's just been talking about WebAssembly, and actually somebody tried it, and a 2.5 megabyte Go WebAssembly binary with TinyGo is 575 bytes, apparently, which is pretty good.

**Ron Evans:** Yeah, we said we weren't trying to take over all of the use cases for Go, and that is true, but there's a few of them that maybe we could do a little tiny bit better (pun...). I could now make Tiny and Go puns, and ideally in the same sentence.

**Mat Ryer:** Well, that's amazing.

**Ron Evans:** That's the triple entendre. It's very rarely attempted, and only ocassionally pulled off, but I'll see if I can get there.

**Mat Ryer:** Only occasionally pulled off is only a double one.

**Ron Evans:** Yeah, exactly. Well, WebAssembly is extremely interesting. For those of our listeners who are not at all familiar with it - I'd be surprised, but WebAssembly is the new attempt to create a new web runtime, where inside of a web browser the ability for code to access more native capabilities for faster processing of things, to make it more efficient... Not to replace JavaScript in the web browser really, but to enhance it for a number of reasons, performance being a really important one, certainly in a lot of cases.

So there's a number of languages that are able to compile to this WebAssembly, which is actually an instruction set which is designed to execute inside this sandbox... So LLVM, which is the compiler toolchain - which you may recall from the beginning of this as the one that TinyGo is using to generate its code... LLVM can generate WebAssembly as its back-end.

We have a couple of people who are focused on the WebAssembly parts. I know surprisingly little about it. I'm really learning. Justin Clift is working on it. Johan Brandhorst, who gave a really great talk at DotGo a few weeks back, where he included TinyGo as part of it, is one of our TinyGo team members now, helping to make the web safe for TinyGo.

Going back to -- Go is awesome, Go is powerful, but Go is too big, and having a 1 megabyte download to your mobile device is kind of a no-starter, especially if we're talking about remote locations where bandwidth is expensive and limited, and maybe not even possible.

\[00:40:18.00\] So if we could compile Go code which is intended to be executed inside of places where WebAssembly can be executed, and we could take advantage of the much smaller executable size while still preserving the things that we like about Go syntactically, as well as capabilities - wow, that's a really huge development for something so very small. So that's a big, important area for TinyGo. Microcontrollers is one, WebAssembly is another, and then there's two more that I'd like to just briefly mention.

Justin is in there, in the Slack channel, saying "It compresses down to 408 bytes with gzip", so yeah... At some point, you're like "How small can we get it?" You've gotta save a couple more bytes, just because you can... But also because it's important. We're used to being very consumptive these days. The largesse of our use of technology is incredible.

One of the most amazing things I ever saw as a young kid programmer was this thing on a Commodore 64 called GEOS. It was actually a full windowing operating system that ran in 64k or RAM. Absolutely incredible. I met one of the creators of it one time, and I was a total fan. I was like, "How you could do that was just incredible." And then I thought about how much waste we're all throwing around, thinking "Oh, well, no big deal. Computing is cheap." Well, computing is not cheap. It's just the costs have been externalized. The cost of generating the power, the cost of cooling it - a lot of those costs are just being shunted off to the environment right now, as opposed to actually being paid for by anyone.

As time moves forward, efficiency in computation is going to be even more important because of utilization of resources on the one hand, and because of our increased desire for computation on the other. We want machine learning algorithms to be able to execute on edge computing devices where they can actually do some good. As cool as the stuff that Machine Box has done, it's not gonna help with a drones collision avoidance algorithm, just because we have to execute that right on the drone itself, or else it's not gonna do as much good if we have a bad Verizon connection that day, right?

**Mat Ryer:** Yeah, right.

**Ron Evans:** There's use cases for all these things. It's not either/or. That's a false dichotomy. TinyGo's mission is to say "There are places where Go has not yet been able to go. We want Go to be able to go there", because any sufficiently mature language has more than one implementation of it. Look how many implementations of Python there are. Look how many implementations of C are there. There's a bunch of C compilers. How many C++'s are there. How many JavaScripts are there. We've only had one Go until TinyGo. I mean, there's a few others that have tried to do this, that I've seen, but none have really said "Let's use Go itself to write a new kind of Go, that's still Go, but is able to do some things that are important."

And then the last big one is the future. The future... \[singing\] The futureeeee... \[laughter\] We're really in the most exciting time for computing that I've ever seen. No joke. Why? Because we're literally on the first step of a Cambrian explosion of actual custom silicon.

\[00:44:15.29\] We've talked for years about "Wouldn't it be great if you could create chips that were specific to a particular purpose, so that you could do certain kinds of processing more efficiently, or more cheaply?" But there's no practical way to do that. You need to get chip designers that know esoteric knowledge, and you have to pay big licensing fees to companies that provide -- not just because they make you, because of patents and stuff, but because you can't actually do it without their help. Like, "I'm looking to build a new chip." Ten years later, "Yeah, we're gonna build a new chip." Like, "How far did you get?" "Well, it's really hard to do that."

RISC-V is a technology that some people have heard of, and other people have just heard the buzzword... What it really is - it's an open source set of silicon designs, so that you can build your own custom chips the same way that we've been able to build our own custom operating systems; either pieces of Linux to create their own Linux distros - we'll be able to do the same exact things with custom silicon. So TinyGo is gonna be able to run on RISC-V because of using the LLVM back-end... And I'm just waiting for my Sci-Fi prototype board to arrive. I meant to actually have a demo running of this before I told anyone, but I got really excited, because so many people are really doing cool stuff with RISC-V, and here I am, waiting for my shipment... I just can't take it anymore, I have to talk about it.

**Mat Ryer:** \[laughs\]

**Ron Evans:** But if you think about what that means as far as the new possibilities for creating custom chips for solving problems that were too expensive to solve, because we're gonna need too many censors to do it, or too difficult to solve because the places we need to put those sensors are too far away from everything... And you know, the problem I'm talking about of course is climate change. It's the brilliant [Bret Victor](https://twitter.com/worrydream), known for amazing experimentation in new styles of programming interfaces... And if you're not following what's going on at -- I think it's called [Dynamicland](https://dynamicland.org/)... It's a really bad name for an unbelievably brilliant technology of doing real-world programming using physical objects... Absolutely stunning what they're doing.

**Mat Ryer:** Wow.

**Ron Evans:** I can't believe I forgot the name right now... Embarrassing. But he's got a great blog post called "What can we as technologists do about climate change." This is obviously the number one most important factor of our times as far as changes to the physical world which are gonna impact the world we live in. And what we as technologists can do about that - he's got a list of different technologies, whether that's better visualization and scientific analysis technology... That one's a little far away from me, just because I'm not a scientist (I know a few), and I have no peer-reviewed papers... But I am a technologist, so one of the areas in particular is we need better technologies for controlling the physical world, for monitoring and controlling the physical world as a part of our broad response to these changing environmental conditions.

What we're gonna need to be able to do that is we're gonna need to be able to first of all repurpose a lot of the existing technology we have right now. There's a lot of chips already out there - we need to be able to recycle them. So that's one reason -- for example, I've spent a lot of time working on TinyGo's AVR (Arduino) capabilities. It's a very old architecture, it's really lacking in a lot of capabilities, but there's a lot of chips out there and a lot of boards, and they can be repurposed to do useful things that we're gonna need to be able to do.

\[00:48:27.05\] Every sufficiently advanced technology starts out in the form of a toy. That's paraphrasing Chris Dixon, I think... But you start with toy ideas and playing with concepts. That way, when you say "I'm playing with it", you're not on the hook to actually do anything useful or even working, right? "I'm playing with WebAssembly." That means "I'm not actually responsible for writing a working WebAssembly program. I'm just checking it out."

**Mat Ryer:** Yeah.

**Ron Evans:** So no pressure. I'm free to learn and experiment without a requirement for any particular thing. At some point I either put it aside and play with something else, or I cross the chasm over from "Are you still playing with it?" "Yeah, I'm using it now for X", where X is some useful task. This is where it all begins. So the toys are our first step to acclimating our minds as developers - going back to something Matt said... You know, you're a web developer; you know a lot about web technology, you've thought a lot about it... Now you can apply some of those same principles towards edge computing, and solving some of those problems. That's where the pool of humans that we're gonna need to work on these problems are gonna come from. There's no mysterious pool of roboticists that are gonna spring out somehow fully-formed, ready to go. We have to work with the humans we have here right now. We are it. There is no rescue coming, we are the rescue party.

**Mat Ryer:** \[laughs\] And that's why I love the Gopherbot project, actually, because it gives everyone that. It gives you the thing to play with, and it's everything you need. So yeah, I recommend people head over to Gopherbot.com.

Ron, are you gonna be at [Gophercon](https://www.gophercon.com)?

**Ron Evans:** Yes, actually this year's Gophercon is going to be the biggest and best Gophercon ever. It's in San Diego, which is...

**Mat Ryer:** Hot.

**Ron Evans:** ...Southern California, where my family lives, so you might meet my parents... But more importantly, on community day -- so Gophercon is a four-day conference. The first day is the tutorial and workshops. There's some really great ones happening. Mark Bates is doing a cool one on testing... Mat, are you doing one?

**Mat Ryer:** No, I'm gonna be speaking though.

**Ron Evans:** I know Johnny is doing one, Bill Kennedy is doing one... There's really great training. Then the second and third days of the conference are all of the talks, and those are gonna be full of great learning, and great interactions... But the last day of the conference is by far the best one. If you don't make plans to stay for the last day, you're messing up. It's the community day, and every year we've done a hardware hack session; we call it "Gobots and other flying objects", and every year it gets bigger. Literally, physically, it takes up more and more space. They give us like a double-wide amount of area. We have a drone zone, where you can do Go-powered flying of drones...

Last year we did GopherCar, which was based on Donkey Car, which is a self-driving car using Raspberry Pi's, that was Go-powered, using cameras and combining Gobot and GoCV... And we had a bunch of kits for doing sensor hacking, and things, supplied by different sponsors. So you don't have to bring any hardware of your own; we bring lots and lots of it. We have tons of giveaways, activities, fun... So it is absolutely incredibly great, and if you don't go, you're totally blowing it... Because not only will you learn something, but you'll have fun, more importantly.

**Break:** \[00:52:21.22\]

**Mat Ryer:** Ron, something that occurred to me as well - when we talk about TinyGo either in the web browser, or wherever it is running on these microcontrollers, how does garbage collection work? Because that's part of what makes these binaries big and fat, is the runtime that's going on it... So how does TinyGo deal with garbage collection? Just a technical question that I wondered about.

**Ron Evans:** TinyGo has relatively limited support right now for garbage collection. On some of the architectures, like on the ARM Cortex microcontrollers, there is a very simple mark and sweep style garbage collection that's implemented. On AVR microcontrollers like the Arduino there's no garbage collection implemented at all. Part of that are the limitations of the 8-bit processor, and also I believe that the data and the instructions are not actually in the same memory space, or something like that. There's some weird things about the AVR architecture I probably have wrong, but it's not currently implemented there yet.

It turns out though you can write useful code without garbage collection. One way is to use structs that have members that include the memory that you're going to need. Another one is to use global variables that exist in the -- we have some implementations of some things like a ring buffer, that are to a large extent what you will often need for doing various kinds of IO... So you can definitely write useful code without garbage collection. That said, it is an objective of TinyGo to be able to support garbage collection, and several different kinds of garbage collection algorithms and back-ends.

One thing that we wanna do is be able to plug TinyGo in, so that it can use a real-time operating system's memory allocators and deallocators; that way, if you're going to run some other code, some C code that you wanna call from your Go code -- and by the way, on that, one big advantage of compiling and linking using LLVM is we don't have all of the things that you would need with cgo in the normal, main Go implementation; they're just function pointers to us ultimately, so we're able to make much faster calls between Go and C, because it's all just binary code here, in TinyGo, at the end.

**Mat Ryer:** That's really cool.

**Ron Evans:** And the current version of TinyGo - we've spent a lot of time simplifying the installation process and removing extra dependencies that you need to install. We didn't get rid of all of them. If you wanna compile for these microcontrollers that are based on ARM Cortex, you still need the Clang compiler. But the next version of TinyGo will eliminate that, so you'll actually be able to compile your Go and your C code all using just the TinyGo compiler.

\[00:56:16.16\] That will take us into a really exciting space, where -- there's existing C code that runs on these different microcontrollers that you need. Some of it are SDKs for things like the real-time operating systems; that way we can use Zephyr, and FreeRTOS, and Riot OS, and some of the others.

Another is there's closed source code that has open APIs, but the implementation all closed like the Bluetooth low-energy implementation on all the Nordic semiconductors like the BBC micro:bit; it's a really cool little board. All the kids in the UK got those boards a few years ago, and there's a bunch of them... Mat, you probably have one that you nicked off some kid in the neighborhood...

**Mat Ryer:** \[laughs\] No, I got it lit through legitimate means.

**Ron Evans:** Yes, I'm sure you did, sir. I'm sure you did. \[laughter\] But the BBC micro:bit has a built-in Nordic Semiconductor nRF51 chip, which includes a whole Bluetooth low-energy stack if you can call into these closed codes libraries.

One of our big objectives is we wanna be able to combine all of this code together, execute it, very small, very fast, still using Go's concurrency... Because we're able to run goroutines right on these microcontrollers, which is in itself kind of amazing. I mean, that blinky LED on the end of a spring is actually in its own goroutine in our Gopherbot demo kit.

**Mat Ryer:** Oh, wow... That's amazing. So it supports goroutines.

**Ron Evans:** Yes. Now, there are a couple of differences and limitations. The TinyGo implementation of goroutine uses the Clang coroutines, which are another concurrency execution module that is able to do much of what we expect from goroutines. We do have an implementation of channels already, however there are some limitations in that, the biggest one being we do not yet have the select statement implemented. Once select is implemented, then channels are gonna become a lot more useful... But you can use them right now. And there's also a branch that's a work in progress with some implementations of sync/atomic; that way you can do some synchronization between some of these goroutines that may require it.

**Mat Ryer:** That's brilliant. If there are people listening that want to get involved in this, and maybe they like the idea of implementing channels or select capabilities somehow, what sort of help are you looking for and how can they get involved?

**Ron Evans:** Well, we're looking for Tiny gophers at every experience level, including (and especially) no real experience. If you have never tried any of this before, we want you, because you are the perfect person to give it a try and help us smooth on that onboarding process, make it a lot easier for people to get started, trying to actually make things with TinyGo, whatever those happen to be. You know, your own cool devices and gadgets, games and toys, or even for that matter industrial-type systems, whatever those happen to be.

The other part of it is contributing to TinyGo itself. We've spent a fair amount of time working on improving the process for people who want to install TinyGo from source code directly. We have some make tasks, that way you can install the latest LLVM directly from source, and it makes it a lot easier for people who want to delve in and try to add something to TinyGo.

\[01:00:11.14\] One of the most interesting is [Carolyne Van Slyk](https://twitter.com/carolynvs), who's been working on adding TinyGo tests. That was we can actually use TinyGo to execute the tests themselves. That's gonna be really useful, and learning about the internals of how Go does its implementation of Go tests is also terribly interesting.

**Mat Ryer:** Hm. I bet.

**Ron Evans:** So there's really no better way to learn how these things work than to try to enlist them into building something else that uses the same tools, that's for sure.

**Mat Ryer:** Yeah, brilliant.

**Ron Evans:** Oh yes, I'd like to also mention - for people who want to really understand some of the low-level stuff, Ayke published a great blog post yesterday at Aykevl.nl. It's called [LLVM from a Go perspective](https://aykevl.nl/2019/04/llvm-from-go). It talks about taking some very simple examples in Go code, and how those translate first to Go, SSA form, and then also to LLVM IR form. So it's a great way to get some ideas about how -- whether you're interested in helping contribute to TinyGo, or you just wanna understand a little bit more about how modern compilers work under the hood... Great blog post, really. I've been reading it repeatedly, just like "A-ha! That's how that worked."

**Mat Ryer:** It'd be a good talk, as well.

**Ron Evans:** Everybody thinks I do all the hard work, but I think everybody else does all the hard. I believe that's called a virtuous circle. Naturally, the power of open source is if we all collaborate together, whether that's directly by "Here's some code", indirectly by "I tried it and it didn't work. Here's what didn't work..."

There was a great talk - I can't remember who gave it - a few years ago, I saw it in London, from a woman was involved in doing some IoT-related stuff... I can't think of who it was right now, but she had a really great point about people who were first getting started and wiring. When you're doing electrical wiring, it's very common that the red wire is the positive, and the black wire is the negative, right?

**Mat Ryer:** Okay.

**Ron Evans:** But if you don't know that, you will not realize that the colors matter; that it's kind of custom. Nobody explains that to you. This is really key information, so when you're first getting started you don't have any key information. You don't even know an information that is key. So you're really helping us out just by -- like, if you struggle trying to get something to happen, you're not alone, and we wanna know about it, so that we can help everybody else who's gonna run into that problem... Because maybe we know too much. We already have it all installed. Maybe there's an installation problem we don't know about.

**Mat Ryer:** Yeah, actually that's a good point. So whether you've got any experience or not, or if you even feel like you're ready to contribute, have a look, because you might be surprised. I think that's great advice, Ron. It's nice that projects like TinyGo and Gopherbot -- like TinyGo, it's nice that the contributors and the maintainers are welcoming of other people as well; that's really important, and it's a great thing for the community.

We talked a bit on a previous show about in interviews, one of the bits of advice I always give to people is if you don't have anything else that you can talk about in an interview, get involved in some open source stuff, and this TinyGo is a great example because it crosses over into the real world as well, which is always an interesting and an exciting thing to talk about. So that's just my advice for any kind of ultra-junior, or people that are just getting into it.

**Ron Evans:** Oh, that's absolutely true... Plus, you need an edge. That edge could be that you made an LED blink on some hardware. The uninitiated are quickly impressed by your newfound skills. Even you are impressed by your newfound skills.

**Mat Ryer:** \[01:04:07.27\] Yeah, I'd be impressed by that.

**Ron Evans:** Right? And that can give you the confidence to think "Oh, I can go learn these other things, because it turns out that most of the internet of things and robotics and drones is just turning things on and off at the right times, and that's it. If you do that, you're golden.

**Mat Ryer:** You make it sound so easy, Ron.

**Ron Evans:** Turn off the laser right before it shoots you in the face. That's my motto.

**Mat Ryer:** By the way, I knew that red wire was the positive thing, because of all the James Bond films. They make that very clear... So hopefully, we're alright.

**Ron Evans:** Remember that movie "The Abyss"? They're under the ocean, all these got is one of those glow light sticks, and they can't tell what the colors of the wires are, to cut the right one?

**Mat Ryer:** What a nightmare...

**Ron Evans:** That's the story of my life right there, man... Story of my life. \[laughter\] Which wire do I cut? I don't know, cut them all! \[laughter\]

**Mat Ryer:** Yeah. I always think about when they're defusing the bomb, it's like "Ooooh...!" I'm like "Software basically never works, so it's probably not gonna work anyway... Just mess around with it, it'll be fine. It's not gonna go off." That's my advice, but I don't work in bomb disposal.

**Ron Evans:** Yes. Well, it's definitely good to try with an LED before you connect the cutting laser.

**Mat Ryer:** Yeah, exactly.

**Ron Evans:** Good piece of advice I got once.

**Mat Ryer:** Very good.

**Ron Evans:** Just to be sure... You know, just to be sure. \[laughter\]

**Mat Ryer:** Will the LED on the top of the spring ever turn into a laser, do you think? Or will it be the eyes...?

**Ron Evans:** I think that it's very possible for someone to do that, but I may or may not actually do that myself, because it will be pointed straight up and it will probably hit someone in the eye. And I will be that someone.

**Mat Ryer:** Yeah. But that's a good way to go out, ain't it?

**Ron Evans:** Keep your lasers pointed down, you know...?

**Mat Ryer:** Ron, you're definitely gonna die by your own creations somehow. There's no doubt about that in my mind.

**Ron Evans:** Well, you know, there's two kinds of people - the people that build the robot, and the people that fear the robot. So you kind of have to decide which side are you on.

**Mat Ryer:** Yeah.

**Ron Evans:** But would you rather the robot just instantly disintegrate you? Or would you rather it hesitate for a few microseconds while its facial recognition identifies you as one of your creators, and then disintegrates you? I prefer the latter.

**Mat Ryer:** Yeah, so we do want Machine Box!

**Ron Evans:** Exactly, exactly. You're gonna need that at some point.

**Mat Ryer:** Yeah. Have you got any advice for people that are building robots that could eventually take over the world? Because you're doing that really, aren't you?

**Ron Evans:** Well, you know, the world's a very big place, and there's plenty of room for robot empires. Mars right now is the only planet in our solar system inhabited entirely by robots, which is why it's such a peaceful and good place...

Well, the most important thing I think -- well, there's two parts. The first one is many people know very little about any of these things... So do not be intimidated to experiment and explore. And you don't need the latest and greatest, cool hardware to do this. Literally leftover Arduinos that you can come up on anywhere. If you have hardware sitting in the drawer somewhere, get it out and give it to someone before it turns into hazardous waste, so that they can learn... But don't be afraid to experiment a bit, because it's, again, a playful, cool way to learn.

But on the other side is - let's not forget about why we're doing these things. We can build a world of killer robots, or we can build a world of helpful robots. Really that's up to us. Right now calling it artificial intelligence is a bit of a misnomer; it's a bit more like intelligent applications. Programs that have some small amount of intelligence built in in very specific areas, but that don't have any general intelligence... Nor is there any indication we're gonna actually get general intelligence any time soon.

\[01:08:04.23\] If you read people like Roger Penrose, we will never have that. Does that mean it's not useful? It's still very useful, but we must be very careful, because the biases that we bring as humans into the equations can have a direct impact in the physical world. The immediacy of that is something that we really have to think about. "Should we build it?", we need to think about that before we build it, not after we build it.

The same technologies that can do good can also do harm, sometimes unintentionally, sometimes intentionally, when usurped by bad actors... So we really need to think about these systems very carefully when we're deploying them into the real world, because they have consequences that we don't expect.

Also, physical systems are gonna be installed for a long time further than originally planned. Anyone who's ever worked in a factory, or in a retail store - they install something and it's there for years past its expiration date. Part of that is because they're too cheap to replace it, other is because they forget it's even installed... So we really need to think about this when we're putting devices out into the edges of the world. At least in a server room we can go around, rack to rack, and say "Oh, what's this doing? What's that doing?" These devices that are out in the physical world, we may not even know where they actually are. We've seen the number of cases where seemingly innocuous devices were taken over to do very bad things, like the Mirai botnet...

So it's important for us to apply very serious architectural and industrial strength thinking to distributed devices before we put them out there, not afterward; we're like "Oh, there's no way to update these. Well, too bad..." That's not an acceptable answer. It's really about ethics in device-oriented development.

**Mat Ryer:** Yeah, but it's real. It is real. Well, on that bombshell, all that's left for me to say is that's our show. Thank you so much to Deadprogram, aka Ron Evans, for educating us about TinyGo, and sharing his passion about Gopherbot.com. Definitely check that project out. And don't forget about the quiz. If you wanna win a Gopherbot kit, including all the bits and pieces you need so you can write TinyGo code and create your own Go plushie robot, then check out the show notes for the quiz, and you just have to share the podcast, essentially, and send an email to gotime@changelog.com.

That's it, we'll see you next week. Thank you very much.
