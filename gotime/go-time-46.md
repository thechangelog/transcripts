**Erik St. Martin:** Welcome back everybody for another episode of GoTime. Today's episode is number 46, and our sponsor for today is Toptal. Today on the show we have myself, Erik St. Martin, and also on the show, who is the birthday boy today, Mr. Brian Ketelsen - say hello, Brian.

**Brian Ketelsen:** Is it really episode 46 on my 46th birthday?

**Erik St. Martin:** It is.

**Carlisia Pinto:** That's precious!

**Brian Ketelsen:** Wow...

**Marc-Antoine Ruel:** Incredible.

**Brian Ketelsen:** That's so special.

**Erik St. Martin:** And I'd say we'd sing for you, but we tried that once and latency was terrible.

**Brian Ketelsen:** No, we're singing, dammit! \[laughter\] There will be singing. Marc-Antoine will do it, he already told me. \[laughter\]

**Erik St. Martin:** And also on the show we have Carlisia Pinto - say hello, Carlisia.

**Carlisia Pinto:** Hi, everybody!

**Erik St. Martin:** And as Brian just said, our special guest for today is Marc-Antoine Ruel. Now, do you wanna give everybody a little bit of background - who you are and what you're working on? Then we'll get into your project which was recently released, which is -- do you just call it Periph, or do you pronounce the io in the domain?

**Marc-Antoine Ruel:** Excellent question, I actually have no idea how to pronounce it. \[laughter\]

**Brian Ketelsen:** He doesn't pronounce it because he never says it.

**Marc-Antoine Ruel:** Exactly. So yeah, I'm Marc-Antoine, I've been working at Google for 10 years now. Before that I used to work with many different companies that failed in various ways. Interestingly, I work in Python most of my job, but I really like doing Go, so for personal projects I do Go projects.

The one that has been the most popular is panicparse, which is a very simple tool to process stack traces. That's pretty much it. I live in the Ottawa region in Canada. It's a pretty nice region, I really love it here.

**Erik St. Martin:** Excellent.

**Brian Ketelsen:** We're all actually considering moving up to be near you, because we're all gonna lose our healthcare today. We hear Canada has a very nice healthcare system, is that true?

**Marc-Antoine Ruel:** Yes. Well, actually, it has its own kinks, but it's really only --

**Carlisia Pinto:** But you have it...

**Brian Ketelsen:** Yeah, but you have one. \[laughter\]

**Marc-Antoine Ruel:** But the funny thing is only really today I realized that in the United States you cannot have chemotherapy for free, and it was such a given for me... It was like "Oh no, people actually die because they cannot afford treatments?" And yeah, it's just sad.

In Canada the difference is that if you're rich you don't actually get to get that much healthcare, so yeah, there's different challenges.

**Brian Ketelsen:** It took me - how many minutes to get into politics?

**Erik St. Martin:** Right?! \[laughter\]

**Carlisia Pinto:** Wow... That was a record.

**Erik St. Martin:** He was just sitting on that button.

**Carlisia Pinto:** But today is a tough day...

**Brian Ketelsen:** It is a very tough day.

**Erik St. Martin:** So on a more exciting note, your project Periph -- I'm gonna say Periph.io... It rolls off the tongue better than just Periph, I think.

**Marc-Antoine Ruel:** That's true.

**Erik St. Martin:** So you haven't learned to pronounce it yet, so we're gonna make up the pronunciation on the show...

**Carlisia Pinto:** \[00:04:11.01\] You have heard it here first.

**Marc-Antoine Ruel:** Yeah, that's great. So the fun thing is that it started in 2014. Back at that time there was a company named GroupGet, and they wanted to test a platform; it was a small startup. And they started to do a googlers-only selling of the FLIR Lepton, which is an infrared camera. So I bought one and I was like "Yay, I have an infrared camera! Now what do I do with it?"

At that point I decided to say, "Well, I'm going to write a driver for it in Go, because I wasn't really happy with the code that was provided with the device.

**Brian Ketelsen:** Now, I have an important question for you - is this infrared camera heat-proof?

**Marc-Antoine Ruel:** No. It's actually designed to look at temperatures. The FLIR company makes infrared cameras to be able to read temperature via infrared images. So it's not like the low-light cameras that you can see in the dark, it's really just about looking at temperature.

**Brian Ketelsen:** Still sounds interesting.

**Erik St. Martin:** I already see where you're going with this, Brian.

**Brian Ketelsen:** \[laughs\] We'll get there.

**Marc-Antoine Ruel:** \[laughs\] Yeah... I actually know what your question is. I don't recall what's the highest temperature it can register...

**Brian Ketelsen:** It'll probably melt.

**Marc-Antoine Ruel:** \[laughs\] It'll probably melt. Yeah, so basically I started writing code for that in early 2015. I had a lot of fun with it, but the device was kind of tricky, the interface, and I had a lot of trouble with keeping a good signal, but on the other hand I started learning with websockets and a lot of things that I didn't know about before. So I used it as a learning experience, and it was really good.

Then in the summer I attended the first GopherCon, and I saw the Gobots room and then I realized that they existed, because I didn't realize before. But at the time it didn't support SPI protocol, which is needed for this camera, so I was like "Okay... Too bad." But then eventually I just dropped the project on the floor.

Later in the Christmas period Brad Fitzpatrick did his Christmas slide on \[unintelligible 00:06:44.04\] I was like, "Oh, that's a neat idea." So I bought a few LEDs... They are quite expensive in Canada. Amazon doesn't really have any roll of them, so basically I bought them on Alibaba. I bought 12 rolls of 5 meters each, and then sold a few back to colleagues, obviously, so I became a pusher of LEDs.

Then I decided to start the project that I named \[unintelligible 00:07:13.28\] and I wrote my own driver for that. The reason I decided to go with this one in particular is because I wanted to do night lights for my children's room. These can go really dark -- actually, really faint in the brightness... Because they have two different PWMs that you can use simultaneously to lower the amount of light it emits.

Because of that, I was actually able to make them so that basically you can have very, very faint lighting that you can keep in the room for the whole night. It's pretty nice.

**Brian Ketelsen:** \[00:07:56.11\] That's fantastic. I have very long - maybe 15-meter - LED strips under the bunk beds in all of my kids' room, because underneath the bunk bed gets almost no light at all. So they even use those during the day time, but it would be awesome to be able to control the brightness of those.

**Marc-Antoine Ruel:** Yeah, that's cool. Because otherwise, depending on the kind of light, it can be very bright and then it's kind of aggressive, especially at night. So yeah, having the possibility to have a very faint light is really nice.

**Erik St. Martin:** Now, this is controllable through the SPI bus, or this is just like doing PWM, or something?

**Marc-Antoine Ruel:** No, it's SPI bus. One of the nice things about these lights is that each device has its own sets of PWMs. Actually, there's four PWMs per light, so one per channel - one red, one green and one blue, and then there's another one... So basically there's an overall brightness, and then one per channel.

So what I did in the driver is that I tried to use the channel PWMs, and one I'd go to the very dim coloring, then I'd start using the other ones. Basically, I use a \[unintelligible 00:09:13.04\] so that for example if you ask a 50% light intensity, in practice you get about 10% because that's how the eye sees the light. So one of the first things I did was to actually get this to roughly 13 bits of precision and put it back into eight bits of precision so that I could have 8-bit pixels, but by still extending the brightness as perceived by the eye. That has given really nice results.

**Erik St. Martin:** Nice. Now, do you have like a Raspberry Pi or like a BeagleBone running a Go process that controls this?

**Marc-Antoine Ruel:** Yeah, so I started with a Raspberry Pi. I really wanted it to run well on the Raspberry, and just for the fun of it I wanted to see if I could do performance optimization on that. Eventually, I just bought a fair chunk of Raspberry Pi trees. The main advantage of the tree is that it boots faster. So when the power is cut out or whatever happens, it's much faster to boot.

The way it works - it's really not Raspberry Pi specific at all. Basically, as long as you have an SPI bus, it just works.

**Brian Ketelsen:** That's very nice.

**Marc-Antoine Ruel:** Then I started to take a look at more serious projects. Once it started working - it was closer to summer of last year - then I decided to look at... Well, actually I started talking with Jana, and I saw that she had been working on standardizing an SPI protocol there, so I was like "Oh, okay, but I've been working on this other side projects" and then I decided to start looking at how we could reconciliate that. A lot of discussions happened during the summer, and eventually I got -- one of the things that I really wanted to have was to have a real driver registry, and one of the foundations of Periph itself is that you can really have a device driver in the light sense, in the sense that it's really just classes, Go structs, basically... But I wanted to have a way for them to just appear automatically and be discovered by the library. And that's really one of the foundations I wanted to explore.

One of the reasons is that actually in a previous library I used to do Kernel development on Windows at Matrox, a video card maker in the late '90s. I was doing \[unintelligible 00:12:03.22\] and it was really nice. I had 1,000 fps cameras, which was very amazing at that time. But I was working on Windows NT 4, so the tradeoff was \[unintelligible 00:12:25.17\]

\[00:12:31.28\] On the other hand, I got to learn a lot about terminal development. For example, Windows NT 4 didn't have any native support for plug and play, so it was really a pain to work with. But then Windows 2000 came out and it was awesome, obviously. At least \[unintelligible 00:12:48.07\]

Basically, this concept of managing discoveries of device -- well, actually, at the time I didn't want to have discovery of device, but I wanted to have a discovery of the functionality provided by the host. I experimented with that for many months, and I finally got something that I like, maybe in October or November of last year.

**Brian Ketelsen:** How do you encapsulate that sort of -- I mean, it's almost like service discovery for the host. How does that look at a conceptual level?

**Marc-Antoine Ruel:** Basically, I wanted to create a registry... What happens is that each of the drivers that you want to register, Periph provides a few - they are registered automatically - the driver specifies the dependencies it has. For example, right now I'm working on a DME controller driver, so basically it depends on the fact -- for example, for the Raspberry Pi CPU it's the BCM... I forgot the number, but 2735.37... It's not worth trying to load a driver, for example a DME, if it didn't load at least the GPIO driver, for example.

Basically, it registers a DAG. It's really \[unintelligible 00:14:14.19\] graph of all the drivers, and each of the drivers specify which other drivers they need to be able to be worth trying to be loaded. So the library makes sure that the DAG is actually good, valid, there's no cycle, things like that. And once it detects that it's valid, it tries to load the drivers in parallel as much as it can, based on the dependency tree. Basically, it calls the initialization function on each of them.

The driver can return three different states. Either it's ignored, because it's just not relevant on the platform... For example, the driver for the chip \[unintelligible 00:14:56.05\] if it's not running on the Allwinner CPU.

There's also it was valid and it worked, or it was valid and it failed to load. For example, on most platforms, if it's not running by default, most of the operating systems (Linux distributions) are not configured in a way where we can use, for example, SPI arbitrarily without running \[unintelligible 00:15:24.09\] or yourself modifying the access on the sysfs or divfs file or virtual files.

**Erik St. Martin:** So all of this is meant to kind of create an abstraction, kind of like layers? Because I noticed that you had some drivers for like maxim temperatures sensors, or the Dallas temperature sensors and things like that... So basically you would include one of those and then it tries to load the SPI driver, or something like that.

**Marc-Antoine Ruel:** Actually, it's the reverse. When you start it up, it tries to discover all the hardware features of the platform, of the host itself, but it doesn't try to discover anything attached to it, so to not start interfering, or anything like that. Then it's really up to the application, basically.

**Erik St. Martin:** \[00:16:15.06\] Okay, yeah. So it tries to discover whether things like SPI or I2C or UR is available on board, and then from there you kind of take control of those connections?

**Marc-Antoine Ruel:** Exactly. For example, if you take a chip, by default SPI is not enabled, so it will not be loaded, so then when you request SPI bus/ SPI connection, it will refuse because it didn't find any... If you then follow the instructions to enable it, then after that it would be available, and when you request one it will give you the first one available. Well, there's only one, so it's simple in this case.

The general idea is really about all the underlying platform support, to have that as automatic as possible, basically. So the part of the device drivers - basically, I started writing the device drivers because I felt that I couldn't implement the underlying host drivers without having something to test against. So I started playing with devices that had really tricky handling.

Good examples are the BME280. One of the reasons I decided to start using it is that it supports both SPI and I2C. But the way the protocol works in SPI is very different from I2C. I wanted to be able to write a device driver that would be able to talk both dialects, but in a way that would abstract out the fact that underlying there is a different protocol involved.

The SSD1306 - it's also a dual protocol device that can talk I2C and SPI, but the difference there is that it actually... First, it's a write-only device, but also when you write over SPI, you have to play with the (CS) line manually; it's kind of weird. Or you can use a 9-bit SPI protocol. I actually haven't finished yet, but that really helped me understand better what feature the SPI host driver had to expose, basically.

**Erik St. Martin:** Yeah, and one thing I saw too was you have 1-Wire support, which was kind of fun. I'm actually using that for some temperature sensors that I have, thermocouple sensors.

**Marc-Antoine Ruel:** Yeah. Actually, the 1-Wire hasn't been written by me at all. Thorsten wrote it. Gosh, I forget his full name... Thorsten von Eicken. He contributed a lot to the project. He was the one that did all of the 1-Wire codes. He started with the device that is connected over I2C and then can expose a 1-Wire bus over it. Basically, the nice thing about that is that if you're register this device, then the 1-Wire bus can be registered on the 1-Wire bus registry, and then you can access the 1-Wire bus transparently, without knowing that it's actually over another bus, and that just works...

He also wrote -- well, he actually designed the Periph-tester board. Basically, it's a board that has eeprom, and the device that exposes 1-Wire. Basically, you can test eeprom over SPI for \[unintelligible 00:19:51.15\] and eeprom over 1-Wire. This way we can make sure that all of these protocols are not broken by any kind of change, basically.

\[00:20:03.21\] It's really awesome. It's being tested continuously. Basically, every time there's a change pushed, the smoke tests are tested on this port.

**Erik St. Martin:** That's awesome. I think we are a little overtime for our first sponsored break, so let's take that, and then I wanna talk to you a little bit about some of that performance stuff. I know we chatted behind the scenes a little bit about some of the performance differences, like using this for doing things like bit-banging.

**Marc-Antoine Ruel:** Perfect.

**Erik St. Martin:** So our first sponsor for today is Toptal.

**Break:** \[00:20:34.16\]

**Erik St. Martin:** Alright, and we are back, talking to Marc-Antoine. Just before the break I wanted to hear -- we were talking about the performance differences, and we had talked a little bit about how you have the DMA (direct memory access) support, and you had done some things for performance of bit-banging.

**Marc-Antoine Ruel:** It's still a work in progress, it's not fully live yet. What I realized is -- and that's actually one of the reasons I've decided to go with this project - there's already C projects that do bit-banging \[unintelligible 00:21:41.16\] abusing the DMA controller (I think it's a better word) in user mode. Basically, the idea is that you memory map the GPU's and the CPU's DMA controller registers and you start messing with it live... Which is actually a very dangerous thing to do, but experience has show that it actually works. The idea there is that basically you tell the GPU to allocate physical memory for you - that part is working. Then after that you tell the DMA controller to take this \[unintelligible 00:22:21.04\] and bang it to the GPIO registers. This is kind of a funny idea.

Basically, it works in C; there's Python bindings, which is \[unintelligible 00:22:35.09\] I forgot the exact name, but it's for a popular library. And I basically said "Well, let's do one in Go, so that there's no other need for requiring any C libraries to do that.

So I started playing with that, and then I realized if I wanted to do this kind of stuff, I need to do it in a way that works on multiple CPUs. So then I started working on the Allwinner CPUs. I have a few boards based on Allwinner CPUs, and I started looking at them. I \[unintelligible 00:23:08.08\] very deep into the CPU architecture; I realized that this family of CPUs did not allow access from the DME controller to the GPIO registers, so actually this mechanism cannot work on this processor, sadly.

Someone on the RC channel \[unintelligible 00:23:32.26\] helped me with that, because otherwise I would have never figured it out. I forget the name of the person, but thanks a lot.

On the other processors, for example like the BeagleBone, it could be possible, I just didn't get to that point yet. Basically, the idea there is really just that you can do bit-banging, and I've done it by the DMA controller, or the reverse is to basically have your own logic analyzer that can run without having to take a full CPU.

\[00:24:08.19\] On the other hand, because it's using memory map GPIO registers, you can actually read through really fast and basically you can abuse the system by taking a full core, and have this full core just doing a \[unintelligible 00:24:24.06\]. Then another core can just update that the UI, basically. That's one of the things I was actually looking at probably doing, where it's purely CPU-based, so it takes a lot more processing power, but on the other hand you don't need any messing with the Kernel, so that's actually a saner option.

**Erik St. Martin:** I know a lot of our listeners too probably aren't all hardware people, so maybe we can talk a little bit about what DMA is and why you would wanna use that.

**Marc-Antoine Ruel:** Yeah, sorry about that... \[laughs\] That's a good point. DMA means Direct Memory Access. It's kind of a small controller inside of your CPU; well, aside, but mostly in the chip. It can do bit shoveling, basically. It can copy memory from one page to another on the BF of the CPU. One of the big uses of that, for example, is when you're reading from a hard drive for a long time, the hard drive has been doing DMA for pushing the bits from the hard drive to the memory on the BF of the CPU, but without having the CPU to bother with it. And then at the end it just says, "Hey, I'm done. There's the bit on the page."

So it really helps, because then you can do these, which takes time, but without incurring any cost on the CPU side. It's very important on single core systems. For example, if you take a Raspberry Pi Zero W, you only have a single core, so in that case you really need to free up as much as you can... So that's one way to achieve that.

**Brian Ketelsen:** Now, while we were talking here I installed Periph.io on the Raspberry Pi that's running my barbecue grill right now, and on that particular board we've got pin 22 that controls the relay the turns the fan on and off, while the blower controls the temperature of the barbecue grill. And I just set that with a watch command on the terminal, and I'm watching the output of your GPIO-list command that comes with Periph.io. And it's so much fun just watching GPIO 22 go from out low, to out high, out low, out high, as the fan goes on and off. These are some really great tools.

There's three commands that are shipped with Periph.io. There's Periph-info, which I pasted the output of that into the Slack channel, and then there's headers-list, and then there's GPIO-list. All of them worked beautifully on the Raspberry Pi that I have. That's really cool.

**Marc-Antoine Ruel:** Yeah, actually there's even more than that. Let me paste that on the channel. One of the first ways that I decided to test devices was to write one executable per device driver. So you are not required to use them, but it's a nice way to figure out how to start your application, basically. So if you want to use, for example, the \[unintelligible 00:28:00.05\] 102, you can just look at it and it already has functionality, for example animating the lights based on the ping you made, or things like that.

\[00:28:13.13\] Most of them are really meant to make sure that your device works well. They are not necessarily exposing a lot of functionality, but enough to be able to get by. The GPIO ones are really useful and you just want to do a quick switch of value, just reading quickly. It's pretty nice.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** I think you had mentioned too that you had been playing with the pocketCHIP, too.

**Marc-Antoine Ruel:** Yeah, the pocketCHIP is kind of neat. It's a very low-power single core system, with half a gig of RAM. It runs a custom distribution that is based on Debian, and it actually exposes I2C, SPI and a few GPIO on the top of it. Actually, my goal has been to expose the -- basically, you can connect a FLIR \[unintelligible 00:29:12.29\] then you have a portable infrared camera. It's not fully working yet because I've been fighting a lot with the SPI driver on the chip, but beside that it's a pretty nice hardware. It has its own batter, and it can actually last many hours. I've been using it for like five hours and it was fine.

You can actually build on it, so I literally just start \[unintelligible 00:29:44.08\] and edit my code and build my Go projects on it... So it's a pretty nice device for that.

**Erik St. Martin:** Do you prefer it over a Pi?

**Marc-Antoine Ruel:** Well, it's different, because the chip is much cheaper than the Pi. It has Wi-Fi, which I think it got announced before the Raspberry Pi 3 which had Wi-Fi. So it's a different market.

The Pi is incredibly faster, but on the other hand you have to buy an SD card, while the chip already has 4 gigs of flash on board. Because of that, the total cost of the chip is much lower. And the fact that it has a battery connector included is also a plus. It's very easy to run it on a Lithium battery, and it can charge to a Lithium battery, too. Because of that, the use cases are slightly different than the Pi. Up to an extend it's closer to the Pi Zero, but still, the Pi Zero doesn't have a battery charger, as far as I know. Actually, I just got one in the mail, but I didn't have the time to open it yet.

So for embedded stuff -- not embedded stuff, but for stuff to be carried on, it's very nice. It's something I really like a lot. One thing I wanted to backtrack is when I started the project on Periph I wasn't sure actually if I were going to do it or not. Thorsten von Eicken, which I referenced earlier - he reached out to me in September or so of last year, and he wasn't really contributing to embed. And then he looked at the way I was discussing the design and he was like, "I think you have a point here", and it's really worked. So basically I used his knowledge in this area to be able to have someone to discuss with until the project became public, and he did all of the code reviews, which really helped me to structure the project.

\[00:32:03.20\] I decided to make it private for a long time, because I really wanted to refactor the hell out of it. Basically, when you have a project and you have no users, you cannot break anyone, so that's the best thing ever, because nobody's complaining if they are not using it. But the problem is that eventually we want to have users, so the line there was when to make it public, versus keeping the liberty of breaking the library as much as I wanted.

Eventually, I got the pressure to actually release it, because eventually I just wanted to have something -- people wanted to use it, but at the same time I still feel that it's not... I feel right now that it's not good enough in the design and I really want to change a lot of features. For example the SPI driver \[unintelligible 00:32:58.01\] with the current design of the interfaces.

**Brian Ketelsen:** So you mentioned a gohci - is that a CI system that you've built specifically for this package? Can you describe how that works?

**Marc-Antoine Ruel:** Yeah, so the gohci is basically my CI system for the cheaps... For the cheap people. \[laughter\] Basically, what happens is that I was at the point where I had to decide if I would pursue that as a project or just leave it there, \[unintelligible 00:33:32.22\] I really felt that if I wanted it to be a real project, it needed three things. First, the design - I could be happy with it long-term. Second, a way to ensure that the quality of the code itself stays good, and third, a website to host the documentation.

So I worked on the quality of the code with a gohci. Basically, it's really a cheap hack. It runs a service... Basically, I started via SystemD, and it exposed a web server, which basically you would trigger GitHub webhooks, and when there's one that based on the \[unintelligible 00:34:18.22\] based on the commits on the PR or the commit that is referenced by the webhook... And basically what it does is that it runs a predefined set of commands. So basically it's the same as \[unintelligible 00:34:34.12\] that you can also run locally.

The other thing is that I didn't want to pay for a server, because I'm super cheap, so what I decided to say is w ell, actually on GitHub you can save a Gist, and it's actually free, and you can save multiple files inside a Gist. It could be just \[unintelligible 00:34:59.12\] out of the commands being run. So I started playing with this idea and I just wrote a hack in three hours, and I realized that it was actually working well... So I generalized it slightly more, but not too much, and I really wanted it to be a solution specifically for hardware testing, which you cannot use with \[unintelligible 00:35:24.04\] or any other kind of services. Well, actually, probably \[unintelligible 00:35:27.22\] but I wanted to try with the free implementation.

The nice thing with it is that every time there's a commit, it will run, but the tests are specific to the hardware it's running on. For example, if the board running gohci as a tester board, it will run the smoke test related to that. Otherwise, I can run the GPIO smoke test to make sure that edge triggering is good, or things like that. So there's actually a fair number of smoke tests, and the smoke tests test all kind of logic in the library that is better tested when you have hardware to test against.

\[00:36:10.17\] They're still unit tests, and the unit tests are run on Travis, and it works great, but sometimes you're testing also the operating system underneath, and the hardware itself. I really wanted to have a distinction between the hardware testing and the unit testing, and it's kind of the side effect of my work, my day job basically, where I'm working on the Chrome infrastructure, and I've been working on that since 2008.

Chrome is a really large project and there's a lot of unit tests and a lot of smoke tests, too. The current scale at which Chrome runs is pretty intense. There's over 200 commits per day, and a single test can represent up to around 30 hours of tests for a single commit. So the scale at which it runs is very high, and I was like "Let's do the complete reverse", something very simple to see how far it can go. That's basically how it happened. It's a very focused project for a very single purpose job, but it fits the deals fine, so I'm very happy about it.

**Brian Ketelsen:** That sounds amazing. It sounds like it would be a really good blog post.

**Marc-Antoine Ruel:** Yes, I should. I'm really not good at writing blog posts... Which brings me to the website - I had a lot of pain to create the website, and one of the funny things is that I realized that there was the freebie Google Cloud VMs that you could get - the very cheapest one, which acts like a fifth of a CPU - and I was like, "Yay, there's something free!" \[laughs\] So I started playing with it, and one of the hacks I did is I used... There's an image there that is based on Chrome OS, and they call it Container OS, but basically the idea is that the only thing you can run on it is Docker.

So basically what I said was "You know what? If it can run Docker, it can run Caddy." My idea was "Let's see..." and basically what I did is I fired up a VM, I looked at all the paths that were mounted as executable and I just SCPed Caddy there and tried to run it, and... I've used it! It worked because of Go's static linking. So basically I completely abused the operating system there to be able to run Caddy out of a Docker image, and it works incredibly well, actually. That's pretty neat, because the operating system takes maybe 150 megs of RAM, and Caddy itself takes maybe 15 megs of RAM as resident RAM, so it's a very low-memory system; it works great in this situation.

But writing the website -- because I knew that the website was very important and that documentation mattered, but at the same time I'm not that good at writing documentation, so a lot of iteration went on that before making the project public. One of the nice things is that I asked my daughter to draw the mascot, and at first she was kind of afraid of doing it, but eventually she accepted to try it out... So she drew a small mascot there, which I really like. I'm very happy that she did.

**Erik St. Martin:** Yeah, that thing is adorable.

**Marc-Antoine Ruel:** Yeah, it is.

**Erik St. Martin:** It's got its little wired up backpack and the LED...

**Marc-Antoine Ruel:** \[00:40:08.21\] \[laughs\] Yeah... Another thing that I did was doing outreach to people. One of the first persons I tried to talk to was Jana -- actually, I kept contact with her for pretty much the whole cycle. I also discussed with Ron, the maintainer of Gobot; he's a busy guy, but I was able to get a hold of him for an hour and a half, and I was very glad that he took the time to talk with me. We've discussed ways where the bigger picture \[unintelligible 00:40:47.25\] has been that I actually don't care that much about writing device drivers.

As I've said before, most of the devices I wrote were really just to test the underlying code for the host operating system drivers. I tried to position the library as much as low-level that would fit under Gobot. That said, it's not a given that there's a way to make everything work as much as I'd like, but that's definitely the goal I'm trying to aim for.

As I wrote in the web page, as an enabler, to be able to access as much functionality as it's exposed by the operating system. I'm hopeful that we'll continue working together.

One thing, actually - I'm trying to make work gohci with pull request better, and I'll probably fire up the first Gobot worker there. If that works well, it's going to be great.

**Brian Ketelsen:** That's really cool, I'd love to see these two projects work together more, if possible. Gobot is a great project, and Periph.io looks pretty darn amazing to me.

**Marc-Antoine Ruel:** Yeah, one of the reasons I decided to start my own stuff instead of contributing upstream directly is that actually I didn't know what I wanted, and I didn't know how it would look like, and I felt that I really needed to experiment a lot. If you look at the history of the commits, you go back in time and you'll see all the packages are different, and the interfaces have been shoveled around a lot. I don't know, maybe I'm just a visual person, but I really needed to have a tangible view of the interfaces, to see if it felt right or not. And doing so is basically just killing the usability for your users, because you're continuously breaking people.

So at the beginning, most of the work was soul searching up to a point, where I really wanted to explore all the different kinds of designs and see the ones that I felt were the best ones. For example, the registries - there's a lot of small registries, and these registries really help, for example, to have a domain-specific set of know devices. For example, there's a GPIO registry, but there's also the registry for each of the buses.

I don't know if in the end people will actually think it's a good thing, but I think it is, so I decided to do it. I feel that it's of neat, because afterwards you don't \[unintelligible 00:43:35.29\] for a specific board anymore. That's one of the things I really like - all the boards are really abstracted away. You just have a string for the name of the GPIO you want to use, and you can use the string of the pin from the board name or brom the CPU name, or any other kind of aliases that you want.

\[00:43:59.22\] That's the only string you need to change to be able to run on a different kind of hardware. I felt it was pretty neat, because you don't need to reference packages that are board-specific. They are there if you want to use them, but you're never required to use them. That was one of the key points I really wanted to focus on.

**Erik St. Martin:** So you had mentioned you were playing with some other things for hardware-based projects, too... I forget what episode it was, but a few episodes ago we had talked about GoKrazy, which was an interesting way of creating Go applications and just deploying them out to your Raspberry Pi without thinking about it.

**Marc-Antoine Ruel:** It's kind of an impressive project. I played with it a bit. Periph sadly doesn't work on it yet. I tried to commit on fixing it, but I didn't. But there's a lot of challenges on this project, because you obviously need to write a ton of code to make it work. But I really like the idea of just getting rid of C completely. As an ex C++ developer, I'm fully behind that. \[laughs\]

So that's a very interesting route. My big question is is it going to be able to attract enough developers to be able to make it into a fully supported platform? If it can for dedicated devices, it's very neat, because at first it implements the developed partitioned mechanism that is used in Chrome OS and also used now in Android, where you basically have two copies of your operating system. And when you upgrade, you just upgrade the copy that is currently not used, and you reboot and you just switch the pointer to the other partition. That's really amazing, because you can do upgrades in a way that is very safe and very simple to do. Then you just mount as third partition to be the partition that you have your user data.

So that's basically the mechanism it uses. I think it's something that is the way of the future, basically. It's just that implementing the way of the future takes a lot of work. I really hope that it's going to become more popular.

**Erik St. Martin:** CoreOS also does the two partitions where it upgrades the kernel into one, and then switches them and fails back.

**Brian Ketelsen:** Actually, they use Chrome's update system to do that.

**Erik St. Martin:** That's true, yeah.

**Marc-Antoine Ruel:** Yeah. Actually, it's also based on ChromeOS. Chrome OS is a great operating system, you know? \[unintelligible 00:46:48.24\]

**Erik St. Martin:** Carlisia, is your Chromebook purchase sounding better and better now?

**Carlisia Pinto:** Yup. \[laughs\]

**Brian Ketelsen:** Is that called -- what's the name of that update system? Omaha - is that right?

**Marc-Antoine Ruel:** I'm trying to recall... Good question. I forget... I recall the server code, but yeah... I'm trying to recall what's open source and what is not. \[laughter\]

**Brian Ketelsen:** Secret thing, secret thing... You know what I ran into on the internet two days ago? I was doing my typical late-night surfing through GitHub thing, looking for interesting projects to star and talk about on the show, and I ran across a fork of CoreOS that Jessie Frazelle maintains, and it looks very clearly to me, in her fork of CoreOS's build scripts, that she is using CoreOS as a desktop OS, because she's added X11 and all kinds of other stuff to it. I can't wait to find some time to talk to her about that - maybe at GopherCon - and find out what that looks like.

\[00:48:06.25\] That is crazy, because CoreOS - it's got Chrome's updating system, but it's Gentoo in the background... So it's really powerful how you could build the whole OS just by changing a couple of config files and rerunning a script and waiting a couple hours.

**Marc-Antoine Ruel:** Yeah, but my main feature request for ChromeOS would be to be able to run Docker images. That's kind of aligned with the idea. I think it would be a great idea, but I failed to convince the leadership to get that...

**Brian Ketelsen:** Just build our own.

**Marc-Antoine Ruel:** I could... \[laughs\] It's more work. The foundation there is really good, and that's a very interesting project. It's funny, because right now I'm using a MacBook Pro, and the only reason is that it's the only laptop where you can connect three different monitors to it. That's literally the only reason... I only run a shell terminal to another workstation, and Chrome, and that's it. It's kind of sad.

So one thing I would really like is that actually one of the sister projects, which was named \[unintelligible 00:49:20.19\] I don't have much details to give but one, which is really nice. What they did is they \[unintelligible 00:49:30.14\] the Raspberry Pi from the network. I don't know if they \[unintelligible 00:49:34.25\] to talk about it, but the idea is basically you create a really small boot partition that basically just mounts over \[unintelligible 00:49:43.14\] file system, and then you boot from there. And one of the nice things with that is that then you can basically boot all of your Raspberry's. \[unintelligible 00:49:55.00\] is extremely fast because there's almost nothing on it. And then you just connect your Raspberry Pi's and then they just boot the operating system from your server, and whenever you want to update the operating system on the Raspberry Pi's, you just update the OS image shared over NFS, and that's it.

That's actually one thing I would have liked to do with gohci, because then I would lose the problem of persistence on the workers, but then I would have to do it for a lot of different boards, and it's work... And work is hard. That's the problem I'm facing right now.

**Erik St. Martin:** So one other cool thing that you were working on was actually in kind of like a VI clone in Go, and now it's in Rust, but... How did that turn out? Most all of us wish we could get rid of Vimscript and just write a new Vim.

**Marc-Antoine Ruel:** Yeah, I hate Vimscript with a vengeance. I don't know, it's just a \[unintelligible 00:50:58.00\] language. I love Vim Go, but I cannot make any sense of Vimscript otherwise than that.

**Erik St. Martin:** I feel for Fatih for the amount of Vimscript he has to write to make it work.

**Marc-Antoine Ruel:** Yeah, it's incredible work... Oh, my god. Actually, I've been experimenting with that six or seven years ago, and that's something I have in the back of my mind, but I knew that it was a lot of work to try it out. Basically, I wanted to do an experiment. The experiment basically was to have a client server version of a text editor, where the frontend is a client, and then the backend is actually the one doing the I/O for the files and things like that...Which is kind of hilarious when you think about it and you're now to the point where your text editor is a client server architecture, but it's a great idea!

\[00:52:03.16\] The reason I wanted to do that was my feeling was "Well, then you can just go get all the plugins you want", and you make the plugins as out-of-process plugins, and you just communicate with the plugins with -- I was using net/rpc with gob encoding, but the idea was you make sure that the interfaces fit or are exactly the same, so basically I wrote a hashing algorithm of interfaces through reflection. Basically, it's kind of a COM GUID, but with hashes, which is where really my Windows experience shined through.

The idea is that you use reflection to enumerate all the methods in the interface, and if it references a struct, you also go into these structs and hash all the public member of the struct, and you recourse until you go to the end and you have only basic types. Basically, you hash each of the names and the types, and you add zeroes and \[unintelligible 00:53:11.00\] in there, and you basically generate a deterministic hash in the end, and that represents a way to communicate with another party that the interfaces that you're using are exactly the same. So then you get a form of binary compatibility, because you know that both are using exactly the same structure of definitions.

I started experimenting on that, and then out-of-process plugins and things like that, but the problem is that I forgot to actually work on the editor part. So basically, the editor part was really crappy, but the rest was really great. And then \[unintelligible 00:53:52.11\] started working on -- so basically I named the \[unintelligible 00:53:57.12\] because it was like a follow-up of VI, and it was kind of a pun on that. And then Ralph said, "You know what? I really want to try it in Rust instead."

Basically, the thing is that actually \[unintelligible 00:54:12.26\] so he started writing it and it's pretty amazing. The core idea is slightly similar, except that it's in Rust... But the thing is that he's using JSON-RPC instead of a binary format, and the thing is that the encoding in JSON is trivial compared to everything else, so it's actually not a performance issue at all. But on the other hand, you don't actually have any kind of language lock-in, so because of that you can write your plugins or your frontend in any language and it doesn't matter anymore. So it's actually a net win. It's much better in practice. So yeah, I just need to learn Rust though, and I haven't gotten to that yet.

**Erik St. Martin:** I wonder whether gRPC would be a good option as well, because they have support for a number of languages now.

**Marc-Antoine Ruel:** Yeah, but I don't recall if we looked at it, but I would have stuck with JSON-RPC too, because the thing is that most of the time it's \[unintelligible 00:55:25.29\] I mean, you're running the frontend and the backend on the same system, so bandwidth is not too much of a problem. Then there's the performance of the amount of data - gRPC is more compact than JSON-RPC, but on the other hand, gRPC implicitly depends on an HTTP/2, where JSON-RPC is very easy to just do over a \[unintelligible 00:55:53.10\], basically over stdout and stdin.

\[00:55:59.06\] So in practice, it's simpler to use JSON-RPC, and because of that, it's simpler to do it in languages like using Node.js, or things like that. I think I will use the same idea; I wouldn't use gRPC because of that.

**Erik St. Martin:** gRPC would be fund though if you could have a UI on your local box, and then just post the server-side somewhere else. Because if you're going client-server, they don't necessarily have to be on the same host, right?

**Marc-Antoine Ruel:** Yeah, I think it's actually a Go. I haven't tried, personally... I would have to try out, but I think it's one of the Go \[unintelligible 00:56:34.04\] people to do that. For example, actually one of the nice advantages of doing the way it's done right now is that actually the frontend could be a web page, basically. So then you get to the Cloud9 territory, or things like that... But the nice thing is that then your plugins are still running on the host, they are not running on the web server itself.

**Brian Ketelsen:** That would be really nice, I would enjoy that a lot.

**Erik St. Martin:** Having a way-based editor?

**Brian Ketelsen:** No, just having the server being a different machine... I could have a Linux desktop or Linux headless server running all of my code, but the editor be on Windows or Mac.

**Erik St. Martin:** Or your Chromebook, or...

**Brian Ketelsen:** Yeah, absolutely.

**Marc-Antoine Ruel:** Yes, I think it's basically the route to the future. I don't know, it needs to happen, basically... It just needs to happen. I just need to get out of Vim, eventually. That's really something that needs to happen, eventually. It's funny, for example I'd get to a Raspberry Pi, \[unintelligible 00:57:42.17\] I can't start working on it right away, and I don't want to mess with all of that baggages. So if I can just \[unintelligible 00:57:51.01\] and start being proactive, it's going to be awesome.

**Erik St. Martin:** Okay, so I think we are just about out of time... One thing we like to do at the end of every episode is we do something called \#FreeSoftwareFriday, where all of us give a shoutout to a project or a maintainer - and it does not have to be Go - of an open source project that makes our lives easier. Does everybody have a project they want to...? And Marc-Antoine, if you have one - that's awesome. If you don't, that's cool, too. Carlisia, did you have a project you wanted to mention this week?

**Carlisia Pinto:** I do. It's called docopt. I think it's called docopt.

**Erik St. Martin:** That'd be my guess, too.

**Brian Ketelsen:** Yes, it's docopt \[doc-opt\].

**Carlisia Pinto:** docotp \[doc-opt\] - I knew there was something there that I wasn't doing right. I just thought it was a really well organized project. I love that when you fetch the arguments you specify right there if it's supposed to be used as a boolean or string... I might use it next time I need to do a CLI.

**Erik St. Martin:** That's really awesome. How about you, Brian? Did you have anything?

**Brian Ketelsen:** I do. I played a couple days ago with wxGo, which is a wxWidgets wrapper for Go. We've been bemoaning the lack of GUI capabilities in Go for a long time, but this repository which is at GitHub.com/dontpanic92/wxGo is incredibly complete and works beautifully. I tested it on Mac, Linux and Windows using a really small app that I wrote, because I'm not a wxWidgets expert... But the exact same code compiled and built and looked native on all three platforms. I don't know what else people could possibly need out of a GUI than that.

I was really impressed. It's nice to work with as far as writing evented window-management things Go, and very complete. No panics, no crashes, no runs, no drips, no errors.

**Erik St. Martin:** Nice. How about you, Marc-Antoine? Did you have anybody you wanna give a shoutout to? Or any projects?

**Marc-Antoine Ruel:** \[01:00:06.17\] I think you talk about it every week, but Caddy is really awesome. I wouldn't be able to live without it. The other thing is I actually started playing with Shiny from Nigeltao, and it's pretty cool. In my case, it's actually to be useable on the pocketCHIP, and it made it really trivial to people to just open a full-screen window and start drawing onto it, which is very useful for my use case.

**Erik St. Martin:** Cool. What library is this?

**Marc-Antoine Ruel:** Shiny. It's actually on the ex repository on Golang. I'll just paste the link...

**Brian Ketelsen:** Yeah, that's the experimental GUY layer...

**Marc-Antoine Ruel:** Yes. It's very experimental, but it works, and that's good enough for me.

**Erik St. Martin:** The one I have is actually something I recently came across. Here's a pronunciation thing, and thankfully on the readme they tell you how to pronounce it. It's called hecate, and they call it "The Hex Editor From Hell!" I can say that on air because it actually says that in the slogan, so it's not me swearing.

It's like a tabbed interface, a hex editor, but the cool thing is that you can use Vim commands to move around it, and most of us on the show love Vim movement keys. Basically, you can hit key combinations to switch the endianness or the way the bytes underneath your cursor are interpreted. So you can look at them as like integers or as strings and change the endianness around. It's actually really cool for looking at just a file of bytes, trying to reverse-engineer what it is. I'll post a link in the GoTime channel for that.

With that, I wanna thank everybody for being on the show this week, especially thank you to Marc-Antoine, and happy birthday to Brian...

**Marc-Antoine Ruel:** Yeah, happy birthday!

**Brian Ketelsen:** Where's the singing? I heard there was gonna be singing.

**Carlisia Pinto:** I thought we agreed we were never gonna sing again.

**Brian Ketelsen:** I was promised singing!

**Erik St. Martin:** The latency was so bad! \[laughs\] We need a -- I don't even think Jonathan Youngblood can save us in the editing for that. \[laughter\] He does amazing work, but I don't think that's fixable. So huge thank you to Marc-Antoine for coming on the show, shoutout to our sponsor Toptal for helping to make this show possible. I definitely encourage everybody to share this show with fellow Go programmers. You can subscribe by going to GoTime.fm. We are @GoTimeFM on Twitter. If you wanna be on the show, have suggestions for guests or questions, topics, hit us up on GitHub.com/gotimefm/ping. With that, bye everybody! We'll see you next week.

**Marc-Antoine Ruel:** Thanks a lot!

**Carlisia Pinto:** Happy birthday, Brian! Bye, everybody!

**Brian Ketelsen:** Thank you!.

**Marc-Antoine Ruel:** Happy birthday!

**Brian Ketelsen:** Thanks for coming on, Marc-Antoine!

**Marc-Antoine Ruel:** It was great!
