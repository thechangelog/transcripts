**Angelica Hill:** Hello, and welcome to Go Time! In this episode we're gonna be exploring the tiny world of TinyGo, as well as Go's use for building hardware. We are joined today by three wonderful guest gophers, as well as my beautiful fellow panelist Natalie, who is an overall wonderful human being... And also, poignant to this episode, her first job was as a hardware student engineer at Intel, where she used Tcl and Perl, so she is more than qualified to talk about this topic. Lovely to have you, Natalie.

**Natalie Pistunovich:** Thanks, Angelica, for organizing this episode. Super-excited.

**Angelica Hill:** I'm very excited. And then on to our three lovely guests. First of all, we have Vladimir Vivien, who's a software engineer and a technologist who enjoys contributing to open source and working with Go, of course... He's the author of a book titled "Learning Go Programming", and currently he works at VMware on cloud-native related technologies such as Kubernetes. Hello!

**Vladimir Vivien:** Hello, hello.

**Angelica Hill:** Lovely to have you.

**Vladimir Vivien:** Thank you. Very excited to be here.

**Angelica Hill:** Secondly, we have Tobias Theel, also known as the "Always Developing Princess." I feel like we need to talk about that a bit more. He's a lead developer for the fintech Fino and the regtech ClariLab. He has 15 years expertise, including inter alia building digital solutions to automate KYC processes, and he is an extremely enthusiastic open source maintainer, contributor to several different projects, as well as being the author of "TinyGo: Creative DIY Microcontroller Projects with TinyGo and WebAssembly."

**Tobias Theel:** \[04:33\] Hello. I'm really happy to be here.

**Angelica Hill:** Glad to have you. We'll hear more about your book during this episode, I'm sure. And then finally, last but certainly not least, we have Ron Evans a.k.a. DeadProgram, who's an award-winning software developer and expert in robotics, IoT and computer vision, who's very active in the free and the open source community, as well as being a technologist for hire at the Hybrid Group. He's helped many clients such as AT&T, Intel and Northvolt, so some of the most difficult technical and business problems. Very excited to have you and your little friend with us today.

**Ron Evans:** Yes, I owe it all to Gopherbot. Gopherbot does all the work and I take all the credit now.

**Angelica Hill:** And that is all of our lovely guests today. So I wanna dive right in and talk about how did you get into this wonderful world of TinyGo and Go using hardware? I think we'll go to you, Tobias, first.

**Tobias Theel:** Oh, it's an easy one. A short story. A friend of mine called Lenny said one day "Well, I think Go is just too big for microcontrollers. You cannot have Go on microcontrollers." So I said "Challenge accepted!" and a day later I asked the mighty internet for an answer "Is it possible to have Go on microcontrollers?" and the answer was simply yes. I found TinyGo still in its early stages, but I was able to write a little program and deploy it into a microcontroller and then present it to Lenny... And well, Lenny, here you go. \[laughter\] That's my story.

**Ron Evans:** Nice.

**Natalie Pistunovich:** Wait, what did it do?

**Tobias Theel:** Oh, it was really, really simple. It was just a blinking LED, but I just had to prove my point that it works.

**Natalie Pistunovich:** Was it blinking the message "It works. See?" \[laughs\] In Morse Code.

**Tobias Theel:** I'm too bad at Morse Code. It was just a really, really simple blinky app.

**Natalie Pistunovich:** Cool.

**Angelica Hill:** I mean, that's still awesome... And then Ron, how did you get into this back in the day?

**Ron Evans:** I likewise wanted to run Go on microcontrollers for quite a long time, and I even went on Go Time in the early days, and was just begging the internets "Somebody needs to do this, and I will help you." A few people made some attempts, not too successful, and then -- I don't remember exactly how I discovered the amazing work of the creator of TinyGo, Ayke van Laëthem. Ayke had started -- I think this was his second attempt at creating a Go compiler that was small enough to work on microcontrollers... And I started sending these fan emails, like "I really love what you're doing. I really wanna help." First, he was a little freaked out, then he's like, "Oh yeah, GoBot is cool..." I'm like, "No, I really wanna help though. This is amazing." So people think I created it, but I'm just the biggest cheerleader.

Right from the beginning, I was that person who just discovered the existence of extraterrestrials, and is out in the street, just saying "No, they're real. They're already here. It's real." And people are like, "Wow, that programmer... He really lost it." But really, I'm still so excited about it, because it opens up just a huge panorama of new possibilities.

**Angelica Hill:** And then I know Vladimir you have worked a little bit in TinyGo, but predominantly working on hardware. I'd love to hear a little bit about how you got into that world.

**Vladimir Vivien:** Yeah, so as a dayjob I do what I consider to be, you know -- well, it pays the bills, but it's something I could do in my sleep... So I started to look into what else I can do with Go. I've told the story last time we talked... Of course, it was pandemic-driven, when we had a hard time getting cameras for a webcam, and I started to search to see if there's any way I could build my own... So I started looking into the Raspberry Pi that had just come out, with the HQ camera...

\[08:26\] And there was some stuff out there that shows you how to do it, and it's multiple steps, and of course, you have to build -- you needed a C toolchain to build the binary etc. But that got me thinking, "Hey, can't this be done with Go?" And it turned out that yes, you can. And it got me thinking what else programming hardware you can do with Go... Because what I've found out is that Go actually puts you closer to the operating system that - if you're just using Go for web or cloud-native, you don't realize how close you are to the operating system, and what sort of system programming you can do... And doing that work, I started a small project to basically do, if not every -- probably it's not gonna be every part of the the C API that allows you to stream video from using what we call the Video for Linux API, but at least a good chunk of it where you can build something useful using Go... Because I seriously think, when it comes to hardware and low-level programming, Go is grossly under-utilized... So we'll see.

**Angelica Hill:** So when working on that project, were you kind of forcing Go and TinyGo onto the project, or do you feel like it truly was the right fit for that kind of project?

**Vladimir Vivien:** Actually, even more back-story... \[laughs\] I think last time we did something together you had asked me to -- because I've always had an interest in TinyGo. I think TinyGo is a great project, and I've even told Ron on Twitter that I think TinyGo is amazing, because you're taking regular Go code and you cram it down using LLVM into code that can run on microcontrollers. Great stuff... But I wanted to do something in TinyGo; it was for the ESP32 microcontroller, and what I wanted to do wasn't there yet, so I was like, "Okay, fine, I'll pause that." I still had the idea to stream with the camera, so I started to look into that. I don't wanna steal anyone's thunder, because I'm sure we'll get into it, but TinyGo works great in areas where there are no operating systems, like on a microcontroller... But if you do have an operating system, like a Linux, underneath your Raspberry Pi, you can do even more stuff. And what I've found out is once you realize how to work with the Go API and talk directly to the operating system underneath, you can do a world of things that you probably didn't realize you can do, like streaming live video content from a hardware that's connected to your Linux box. So that's kind of how I ended up there.

But the project is not necessarily TinyGo-specific, but it can be. As long as you have an operating system, specifically Linux, it'll work.

**Ron Evans:** I feel like jumping in, just because, Vladimir, what you're doing is really cool... And interestingly, long before TinyGo existed, before -- actually, a couple of times ago when I was on Go Time, I had mentioned one of the first applications of Go running on embedded Linux were video systems. When we first came out with GoBot a few years back, people started popping out of the woodwork saying "Oh, we're running Go on an embedded system for some type of video surveillance system, or video monitoring system", and I was like, "Okay, great. Open source it!" "Oh no, we can't do that. This is all proprietary." But it's really cool that you've been working on this... I think that's a really killer application for Go, is computing video.

**Vladimir Vivien:** \[12:11\] Absolutely.

**Ron Evans:** ...whether it's using Video4Linux, which is a very powerful subsystem... GoCV, which is another project that I've been really involved in, which is using Go as a wrapper around OpenCV... It's actually a project that's quite popular among industrial and commercial computer vision companies. We have a lot of users in China who are working on commercial systems that are deployed in production today using these things.

So your point, I think, is really right on - TinyGo is cool, and it has its place when there's no operating system, but embedded Linux is a great option, and it gives you all these capabilities... So Go really works there incredibly well.

**Vladimir Vivien:** Right. It does. Thank you for highlighting that.

**Tobias Theel:** Let me also have a question for you... So I remember in your talk for the Video for Linux stuff, you made use of cgo. And personally, I've worked for quite some years with Go now, but I never had to use cgo. So would you say cgo is a must to know when working with Go on hardware, besides any Go stuff?

**Vladimir Vivien:** No, no, no. So it's the reverse. What I'm doing - I'm not using cgo at all. So I'm making what we call ioctl directly to the driver. One of the blessings in disguise of Go is that the type system and the memory layout of the types in Go match one to one with C, for the most part. And what you could do is you can create data types in value in Go, and say "Here, ioctl API call. Here's my value that I created in Go." As long as you're not using any kind of esoteric type -- well, you can't in Go. You have to use the types that you have... But as long as it's the values that the OS is expecting, then you're good.

So what I ended up doing is basically follow what is done in Video for Linux API, line by line, looking at each call and saying "Oh, okay, this call - expect this value. Okay, I'm gonna go and encode that in Go, and as long as the data types line up properly, it should work." And it actually works.

So there's a suite of tools that comes with the Video for Linux call. The Video for Linux control - it's a line of CLI, and what I'm doing is looking at what that CLI does and trying to replicate a good chunk of it to see how far I can go. I mean, it's something I do on the weekends... It's a slow process, but I've gotten to a point where I can build a binary in Go to query the system and give me a list of video drivers, and all the capabilities etc. And obviously, we did a demo last time we got together, and yeah - you can actually stream videos as well.

**Ron Evans:** That's really cool.

**Angelica Hill:** So tell us, Tobias - I'm sure you created a lot of little projects as you were writing your book, and in your wonderful career, thinking about TinyGo... So tell us, what are some interesting projects you've worked on, or what are you working on at the moment?

**Tobias Theel:** I guess I'll just start right out and steal the show here...

**Angelica Hill:** I'm ready. \[laughs\]

**Tobias Theel:** Well, I guess the most fun project, and maybe also the most interesting one I've worked at or working on is a thing I also presented the last time on Go Bridge. It's myself trying to build my own smart home systems. I don't want to use some "Okay, Google" stuff, I don't want to use Alexa, or Siri, or whatever is out there in the world. I want to have my own smart hub. I have some microcontrollers from Arduino, the so-called Arduino Nano 33 IoT, which is capable of Wi-Fi communication... So I use lots of these to control, for example, an LED strip, or... I currently have one near my coffee machine to activate a power adaptor, which activates the coffee machine, so I don't have to get up from bed to brew a coffee, which is really important for me...

**Ron Evans:** \[16:26\] Okay, I need one of those. I need one of those. \[laughter\]

**Tobias Theel:** I'm also building a WASM application, also using TinyGo, where I can observe all my little microcontrollers around my home, and also control them. So if I want a coffee, now I can just grab my smartphone, open up my WASM application, which currently runs on a Raspberry Pi as a server on my local network... And I just say "Okay, activate", and I can hear the coffee machine starting to brew a coffee for me, which is really, really nice, because I'm lazy.

**Ron Evans:** That's for sure the lazy person's way to make coffee, "Okay, first we're gonna implement the server..." \[laughter\] Although, the thing that does tie those two things together, interestingly, is the very first video on the internet was monitoring a coffee pot, as I recall. The coffee pot at the MIT Media Lab, that could tell whether it was empty or needed to be refilled. In fact, I believe there's an RFC, there's a protocol for checking the coffee pot. You might go look into implementing that if you really wanna be fully internet compatible.

**Tobias Theel:** So you mean an actual RFC?

**Ron Evans:** I have to look this up now...

**Natalie Pistunovich:** This will be in the show notes, of course.

**Tobias Theel:** I guess doing coffee-driven development is really a root cause for many features in the world out there...

**Ron Evans:** So it's RFC 2324, if you wanna look it up... I make up a lot of things, but this one I did not have to make up. \[laughter\]

**Vladimir Vivien:** An actual RFC. Nice.

**Ron Evans:** They say it was an April Fool's prank, but I don't buy it. We're talking coffee; it's too serious for April Fool's pranks.

**Natalie Pistunovich:** The surprising thing is that there's so much around tea as well, right? There's the 418 HTTP status, but there's also in computer vision, a lot is about tea pots. So I feel that there's a serious competition between brewing coffee and brewing tea here.

**Ron Evans:** Well, do we really have to choose? Can't we all just get along...? Would you rather have an instant coffee, or a nice cup of tea? I'll take anything, under the right circumstances.

**Tobias Theel:** Either we are happy and love each other or start a typical tabs versus spaces war just with coffee versus tea right now...

**Ron Evans:** Exactly. Unpopular opinion - coffee is way better than tea. \[laughter\] Oh, wait. Sorry, that was supposed to be later. I'm sorry, I got excited. \[laughter\] Maybe it was all the coffee...

**Natalie Pistunovich:** Striking the first one from the list.

**Ron Evans:** Yeah. We're just -- right into it.

**Vladimir Vivien:** Tobias, what microcontroller did you say you were using?

**Tobias Theel:** The Arduino Nano 33 IoT. Such a really long name for such a small controller... There are two Arduino Nano 33 microcontrollers - one with Bluetooth, and one with the awesome NINA Wi-Fi chip. So the one is capable of Bluetooth stuff, and the other one is capable of Wi-Fi stuff... And this Wi-Fi stuff really helps me, as I use it to send MQTT messages over the network, and so on. And also, this bot is really, really well supported in TinyGo right now.

**Ron Evans:** Yeah, with the -- I think it was three years ago, GopherCon.. We had a fantastic community hardware hack day... Well, actually, we ran the community hardware hack day every physical GopherCon, starting at the first one, when that wasn't even an official thing. It was just a community day... And I brought a bunch of flight cases full of equipment, because I had to leave directly from Denver to fly to Berlin, to do a conference there. Then also to Scotland... It was like this whole European tour. I just had a bunch of flight cases full of equipment. So I just popped the cases open, took a bunch of stuff out, on the honor system, like a library - you know, just "Play with it. Bring it back." That was the first unofficial community hardware hack day, and then that just became an actual official event.

\[20:26\] And the last one, it was so big that we actually needed an overflow room. It was really cute, the organizers were running around, "These fire marshals are gonna kick us out! You've got too many people!" "Oh... I guess we're sorry..."

But one of the reasons it was so successful was Arduino - fantastic company, in so many different regards... They're pioneers of open source hardware in terms of popularity. There may have been open source hardware before that, but really, Massimo Banzi and the whole crew over there - they really took and made it possible for not just programmer, but artists and creative people to create interactive installations. Really, that was a big part of their rationale and motivation; it wasn't "Hey, let's do cool hardware hacking, to be cool." But it was more -- so here's another unpopular opinion... What we do with technology is much more important than the technology itself. \[laughter\]

**Angelica Hill:** I feel you need to chill your beans on these unpopular opinions... This is gonna be a whole episode of unpopular opinions.

**Vladimir Vivien:** He did warn us...

**Angelica Hill:** He did warn us... \[laughter\]

**Ron Evans:** They actually used Go extensively over at Arduino...

**Vladimir Vivien:** Really?

**Ron Evans:** Not on the Arduino hardware itself, other than TinyGo, but all of their command line tools, and their tooling that they've rewritten in the last couple of years, it's all written in Go... The Arduino IoT cloud is all written in Go, and uses a lot of open source... So they're really, really active in the Go world, without necessarily getting a lot of attention for that... But they were so kind as to sponsor the community hardware hack day, so we had like -- I forget... 300 Arduino kits using that exact board, Tobias, that you have.

So one of the reasons why they're such great support is -- well, first of all, we had to do it, or else we were really uncool, but also, we had all these people, hundreds of people all at once, using these... So we got a lot of bug reports and pull requests. It was just a frenzy. It was so exciting and satisfying, and a lot of people who I really like and respect, who work at Google, came over, because their room was empty, sad, lonely... And our room was packed with people having fun, and doing all this cool stuff with Go... Thank you very much to the Go team, we couldn't do it without them. But that's one reason why it's a really well-supported board, is the community that is around Arduino just in general is really strong, and the TinyGo community has been really supportive contributing things back...

So combining those together - it really spread out a lot. Especially the Wi-Fi capabilities - that's a really important thing. I mean, it's internet of things - without internet, they're just things... Which - things are cool. I like things. But you need wireless things. So yeah, the Wi-Fi is really important. Even though the boards are named the same, the two boards that Tobias was mentioning are actually based on completely different processors. The Nano 33 IoT board is based on the microchip SAM D21, which is a very inexpensive but powerful chip that's used in a lot of boards. A lot of the boards from Adafruit, a lot of the boards from SparkFun, several different boards from Arduino, a lot of other manufacturers as well... So - a very cool little chip.

\[24:12\] But then the other chip that they have in their other -- the Nano IoT BLE, that's actually a Nordic Semiconductor chip, the nRF52840. So that's a really common Bluetooth chip. A lot of the Bluetooth dongles that you might buy for a USB port for a long time have been based on Nordic Semiconductor chips, or chips that license their stack... So - unfortunately, they're two different stacks of hardware, and they're not really compatible with each other. So if you have one chip, you can use Bluetooth; if you have the other chip... It actually does not have Wi-Fi built in. It's actually using what I think Tobias had mentioned, another chip - kind of a co-processor - for Wi-Fi, which is actually an ESP32, which Vladimir I think had mentioned, is wanting to have the support for. So that's a very common co-processor for Wi-Fi that's bundled on a lot of the boards... Which sort of makes sense as a pattern for hardware that you see... Similar to your notebook computer has many different processors in it. It's got a small microcontroller that does nothing more than deal with the keyboard, for example. And so on.

So combining these different chips together and creating a system out of them - that's really what the hardware is about; it's about combining these interfaces, and there's some standards that already exist for doing that. So kind of our overall story arc of TinyGo is the more of these standardized interfaces that we support, the more that we make it possible to do really anything that you can do with any C program, being able to do that with a Go program... Except, of course, it's memory-safe, you have all the cool tooling, you've got the concurrency... There's a lot of great things.

**Break:** \[26:11\]

**Natalie Pistunovich:** So I have a question... You've been mentioning very specific, detailed chips, and as somebody who once worked in hardware, I barely remember any of that, and I definitely don't know those ones... But if I want to try now Go for something with hardware, what are some known limitations I can expect? What should be easy for me to implement quickly, and what should I realistically say "Not yet with Go"?

**Ron Evans:** Well, first of all, go get Tobias' book. It's got a whole lot --

**Natalie Pistunovich:** When you say "Go get..." \[laughter\]

**Ron Evans:** Yeah, exactly, I hope you have the domain tobias'.book

**Tobias Theel:** I'm buying it. I'm buying it. No worries. \[laughter\]

**Ron Evans:** He did a really great job of going through a whole series of small projects, a bunch of which are projects that if you are an undergraduate student in computer science in a U.K.-based university, like one of my sons, a couple of those projects were literally projects they had done in the previous semester... And I'm like, "Well, sorry. I didn't know this book was coming out... Plus it's Go, and you had to do this in AVR Assembly language, just because -- I mean, you're a computer science student, kid... Toughen up!" But I would say that thanks to our community, most of the boards that you can get from Adafruit have software that you can run TinyGo on it quite easily. That would include all of their cool boards, like the PyBadge, a.k.a. the GoBadge, which - if you've ever seen me going around with a Go-powered badge, that's it. The Pi Gamer... Basically, they really are the sponsors of Circuit Python, which is a version of Python that's designed to run on microcontrollers.

And they've done such a great job of supporting that language, and actually paying full-time people to work on it as well, that all of the boards that they create have really well documented APIs and interfaces... So we've made a lot of efforts and a lot of contributors have done most of the work to make it possible that basically anything you order from Adafruit that they've made in the last 2-3 years is almost guaranteed to work.

Same true with Arduino, to a lesser extent, only because the chips that all the original Arduinos that were based on the Arduino Uno, for example - that uses an 8-bit microcontrollers, that has in many cases somewhere between 16k and 64k of memory. You can run TinyGo on that, absolutely. In fact, that's even larger than the smallest known target for TinyGo, which is an ATtiny85 chip, which is used in a little board called the DigiSpark. First of all, it's got Tiny in the name, so that means automatically we have to make it work... \[laughter\] I don't make the rules, but it's an 8-bit processor with only 8k of RAM. And you can do more than just blink an LED. You can control a whole WS2812 strip of RGB LEDs, and do other neat things. So it's incredible what you can do with 8k of RAM. Don't you feel bad now about these giant programs you've written? I mean, I do... I think like "Yeah, this program is really small. It's only 5 MB." I'm like, "Oh... Only 5 MB."

\[32:10\] If you don't have a brand new, shiny, cool microcontroller, you should go to your drawer of stuff that you've been meaning to play with for a few years, and just riffle around in there, find one of these boards, and if it doesn't work, we will try our hardest to make it work.

**Vladimir Vivien:** So the question I had, quickly - how would you compare Circuit Python and TinyGo?

**Ron Evans:** Well, Circuit Python has one big advantage - and Micro Python, which it is based on - which is it has a great developer experience. Absolutely fantastic. If you take one of these boards, like the BBC micro:bit or one of the boards from Adafruit, and you plug it into your USB port, and it pops up as a mass storage device, so it's just a drive... So you take your Python program that you've written in whatever text editor, and you drop it onto this drive, and it starts to run it. That is so beautiful. I mean, that kind of experience, for a person that maybe is intimidated by programming, or doesn't have a lot of experience, they're in a room with a bunch of hardware - they just plug it in, they drop a program on there with some simple Python, and it just works... That is fantastic. What better on-ramp to hardware hacking? I can't think of one. So that's a real advantage...

But the disadvantage is the same as the advantage. You've now used up a lot of the memory on this small chip just for the tooling. So if your program fits, you're great. But if it doesn't fit, you really can't do anything at all. That's the end of it. So that's one definitely difference. Python is a great language. It's one of these languages that, you know, if we were charting languages on one of these VC investment, Python is up and to the right, consistently... It's a hockeystick. So you're not like "Okay, I'm not gonna get rich on Python. Sorry", but on the growth of Python, in this hypothetical exercise. But it's just steady, year-over-year growth. It's your fixed income bond investment of programming languages. You can't go wrong with learning Python.

But it has also some drawbacks... And there was a really great talk -- I'm trying to think who gave it... It was at Gotham Go, I believe... Or maybe it was at Gopherpalooza... I can't think of which conference, but it talked about programming languages evolution and how Python's transition from Python 2 to 3 had been such a massive failure...

**Vladimir Vivien:** Oh, right.

**Ron Evans:** ...which Guido and the core team of Python readily acknowledge. I look at that and I think there but for the grace of God go I, not like HaHa, you messed up Python, but more like, "Okay, that is the future of our favorite programming language if we are not very cautious about the way that we develop it, and compatibility with things." That's one reason why TinyGo is not in a 1.0 release yet... Because when we say "Okay, it's 1.0", we take that responsibility seriously, about "Okay, now we're bound by the same covenants that the main Go implementation (if you will) has demanded of itself", of saying "You can count on this for the next 15 years as a stable platform to keep the world actually running on", since if the computers of the world stopped working all at once, it's gonna be really inconvenient for the people who are in flight at the time, for example.

**Vladimir Vivien:** \[laughs\] Yes, it would be.

**Natalie Pistunovich:** \[35:57\] Tobias, I noticed you were laughing when Vladimir asked the question. What is your opinion about the comparison?

**Tobias Theel:** \[laughs\] Hey, it's a little bit unfair to say that, but I was laughing at a stupid question.

**Natalie Pistunovich:** You don't have to answer if you don't want to.

**Tobias Theel:** I can answer. So I'm the greatest fan of Python in general. It might be a great language for people who just get into coding or start with coding, and similar. But personally, I love to have an statically-compiled language, with static types, and so on, where the compiler tells me "Oh, you did something wrong" at compile time, and not at runtime. I really, really love it, let alone we are having a great language server and IDE support, giving you great help while writing your code... In general, I prefer Go over Python, which is also why I would always prefer TinyGo over Micro Python...

**Vladimir Vivien:** A fair point...

**Natalie Pistunovich:** That's a fair answer.

**Ron Evans:** I think there's another aspect, of course, which is "Alright, so this all sounds like a great idea", and some top executive says "Yes, this is our new platform", and then they take this to some technical review team, and they're like, "Wait... You're saying you could just update the source code on the devices in the field? Are you out of your mind? That's exactly how we get ransomware or who knows what. Actually, we would like you to spend the next six months making sure that's impossible to do." \[laughter\] And without any joke, do you think security in your cloud is hard... Cloud security is trivially easy compared to device security, and look how insanely hard it is. It's insanely hard. Device security is so much worse, because somebody can just get a hammer and smash the cover off the thing and now they have access to the guts of the machine, and now they get started.

**Natalie Pistunovich:** That almost feels like a spoiler to the security Go episode that we're gonna have in October. \[laughs\]

**Ron Evans:** If you need somebody with a mask to take a sledgehammer and smash a cover off of a device, I can help with that. \[laughter\]

**Natalie Pistunovich:** Or take a picture and try to do the 3D face recognition...

**Ron Evans:** Yeah, exactly. It was that program, all along... I would have gotten away with it if it wasn't for you meddling robots... \[laughter\]

**Vladimir Vivien:** So the question I have for TinyGo is how much -- because you mentioned that you get type safety... Do you get the Go runtime when you compile your code for the microcontroller? And how much of it do you carry over?

**Ron Evans:** So as you might suspect, the runtime that you have on your operating system generally will call the operating system, as it should. But when there's no operating system, what do we do? There is no help to be called. It's up to you. The problem in Go, the implementation of Go itself today is that there is a lot of coupling between the runtime and the standard libraries. Now, some of them are more well structured... And there's good reasons why this is not easy to achieve. It's not like, "Oh, they were so lazy they just couldn't do it." No, no. It's really hard to do. Really, really hard.

But we have to have a different runtime, but with the same API. So if you look at the way that TinyGo is actually built, it's written entirely in Go, first of all. So TinyGo is written in Go, and then it uses Go's internal tooling to do part of its work, and then it uses the LLVM framework, which is a framework for creating programming languages to do the other half of its work. So hopefully it doesn't sound like we didn't have to do anything, because actually getting those two things to work together - there's quite a bit to it.

\[39:55\] But you're not gonna get the same runtime, or even all the same standard library abilities when you have no operating system. A good example might be something you take for granted, which is I would like to read the file off disk.

**Tobias Theel:** \[laughs\]

**Ron Evans:** Alrighty, so let us begin - you have no disk. Also, no file system. So right there, you're like, "Oh, that sounds very interesting. What do you do about that?" Well, there are two different ways you store data besides on a fixed disk. One of them is an SD card, and the other one is Flash RAM. So how do you read from them and how do you write from them? Well, you have to do all these low-level hardware calls. Oh, that sounds very scary. That's way too much work. Luckily, we have interfaces in Go, and a lot of the internal types of Go's standard library are written using these well-defined interfaces internally. A good example would be all of the different ways that we can have readers, and writers, and reader/writer closers... So if we implement those same interfaces, but the actual implementation is perhaps talking to an SD card using the low-level protocols... This is not just hypothetical; this does already exist in TinyGo thanks to sago35, who's one of our most active contributors. He's really one of the main people in a group of TinyGophers in Japan, who have been doing amazing things with hardware, as well as things that are directly tied to standards using the automotive industry, for example.

So a lot of really interesting work happening there... But you have to do a lot of preliminary work to get to that point. Because that runtime that we take for granted -- I mean, even when you, let's just say, hypothetically, you wanna write some Windows software in Go, you've got the runtime that's talking to all of the lower-level Windows APIs to do the work that needs to be done, and you sort of take that for granted... Which, by the way, shout out to all the people who work hard on making Windows and Go work together. That doesn't receive the love that it should, but it's very hard work. There are a lot of people using Windows, especially people who are not located in Europe or the U.S.

One thing I've noticed with GoCV in particular is we have a huge community of people in China using Windows for industrial computing... Because Windows is the standard for industrial computing. If you go to a factory, it's all Windows machine everywhere. Not if you go somewhere like Northvolt, a company I consult for; that's all Go. But the vast majority of -- the 20th century of manufacturing is all built entirely on Windows PCs.

**Vladimir Vivien:** It sure is. It sure is. Thank you.

**Ron Evans:** I went a little off the track...

**Angelica Hill:** It was very interesting.

**Vladimir Vivien:** Yeah, it is.

**Angelica Hill:** We talked a lot about what you've worked on in the past, what's going on at the moment... So what's the future of TinyGo and programming for hardware? What is your prediction for where we're going?

**Ron Evans:** Well, Tobias bet a lot of time on writing a book about it, so I think he's all-in... Vladimir, you're still dipping your toe in, but don't worry, we got you hooked. The moment you were like, "I wanna try to get this thing to work in Go on hardware", we had you in one way or another. \[laughs\]

**Tobias Theel:** Yes.

**Ron Evans:** Well, the future of Go -- there was an actually very amusing article a few years back, a blog post that said eventually everyone ends up programming in Go. It was a person who did a hilarious eigenvector analysis with text processing of all of the blog posts on Reddit and Hacker News that were "Why I switched from X to Y", where X and Y are programming languages... So he basically took this and he put it through their models that they'd built, and they concluded that in only a few years everyone ends up programming only in Go.

**Natalie Pistunovich:** \[44:03\] This is awesome. You have to share the link to that. It has to be in the show notes. I need to read this.

**Ron Evans:** It's not me, it's the math.

**Tobias Theel:** Ditto.

**Ron Evans:** The machine learning - the AI said that you should program in Go. Sorry, Rustaceans. Sorry all you people using Elixir happily, or Rust, or Lisp... All you people using Lisp, you're doing it wrong. You should all use Go. There is only Go.

I thought that was very funny... But there was something to it, in the sense that there's no reason why only one language should exist. I mean, that's completely ridiculous. But the more languages you use, the harder it is for people to context-switch between them. I mean, some people have eidetic abilities to switch between languages, and I think that's really admirable... But the vast majority of people who do programming - they really like programming, and they wouldn't do it, but it's not their main passion in life. It's a really great job, where they could do good things. They're more excited about doing the things with the software than the software itself. The software is a means to an end. No... Means to an end?! It's an end in itself! What are you talking about, heretic?!

But TinyGo - I'm not supposed to say too many big things about TinyGo... First of all, Tiny... \[laughter\] But also, since I am on the core team and clearly biased. But Go is a very cool language; it's still growing rapidly. It has a big place -- it basically won the war for the cloud, just very peacefully, because it was doing great things. Things like Docker, that have themselves created entire ecosystems, could not have been created without Go. So all these things sort of layer on top of each other.

But the next frontier for software - what is that? Well, it's things like Web 3 and truly distributed computing; that's where WebAssembly and WASI come in... Unpopular opinion! \[laughter\]

**Angelica Hill:** Another one...

**Ron Evans:** Another one... So I did not say this myself; I'm just repeating what someone else said. But basically, without TinyGo, Go doesn't even have a place in WebAssembly. It's just too big.

**Vladimir Vivien:** Hm. Interesting.

**Ron Evans:** It's just too large.

**Vladimir Vivien:** It is.

**Ron Evans:** So there's actually a whole bunch of -- I have a whole list of projects that are using TinyGo today, with WebAssembly, in all sorts of different contexts. That sort of edge computing - I've been on record with saying "That's not real edge computing. That's just a data center nearest you." Real edge computing is the last millimeter. The hardware that you literally touch with your fingertips, that's edge computing. But that's not strictly true, I know. That was just a really funny thing to say. There are many edges.

But there's a lot of really cool projects going on right now. Astro, if you've heard of that project... Astro's build is all built using TinyGo for WebAssembly; that way they could reduce the necessary runtime for their application from, I think, 6 MB to 600k, something like that.

**Vladimir Vivien:** Oh, wow.

**Ron Evans:** Suborbital - they're doing a lot of stuff with TinyGo and WebAssembly. The Proxy WASM project, which is the ABI specification if you wanna run WebAssembly on proxies like Envoy, or Istio - the only way to use Go from that is TinyGo. And they have reasons why they tell you that, largely to do with the main Go implementation not providing the necessary APIs, as well as being too big. So we've got that. Vecty, which is frontend development in Go. TinyGo.

\[48:10\] Just recently, there was a really cool project that came out called WASM 4, which lets you build retro-style gaming on a web interface. Kind of a fantasy console. It's language agnostic. They have Rust, and Python, and C++, and - oh yeah, TinyGo...

**Vladimir Vivien:** Sweet.

**Ron Evans:** So that's really cool. Then there's actual people doing the same thing, but in hardware. One of the coolest articles I saw recently was writing a Gameboy Advanced game in Go. And naturally, they had to actually run it on their actual Gameboy Advanced hardware, not just in a WebAssembly simulator... So naturally, I had to go and get some hardware to do exactly that myself. So in an upcoming episode of my stream that I do on Fridays from here at la peep, I'm gonna be doing some GBA hacking, just because -- I just wanna do it. It's just too cool.

But those are some of the things that are happening right now as far as places where the TinyGo communities already surpassed the wider body of the Go community... Although I will say, we do not view TinyGo as separate from Go. TinyGo is Go. I know cgo is not Go, but TinyGo is Go, because Go is a programming language. There's also a runtime, there's also a standard library... But ultimately, it's a programming language, and if you have a compiler from a programming language, it's not a different programming language unless it's a different programming language. I mean, there's many C compilers.

And ARM, that little company that's had a small influence on the world of technology... So there's a very interesting project that I've just heard about coming out of ARM, which is providing really great support on ARM-based microcontrollers for LLVM. And their first target is C, because the idea is they wanna replace the GCC compiler with something that's a bit more open. By open I mean somebody can make some money, since you need a job that pays you to actually work on some of these things, or else you just can't spend the time necessary to do it. That's why Go is so great - there are full-time paid maintainers. That's why LLVM is so great; there are people who work at Apple, there's people who work at Google, there's people who work at Intel - their full-time job is to do nothing but work on LLVM. If it wasn't for all of those people, we couldn't do the things we do... So kudos.

But there's another unpopular opinion... \[laughter\]

**Angelica Hill:** Oh, my gosh...

**Ron Evans:** Open source could not exist without big companies.

**Tobias Theel:** Is that really unpopular?

**Ron Evans:** I'm not saying people don't agree, but it's for sure unpopular... \[laughter\]

**Angelica Hill:** Can you say a bit more on that?

**Ron Evans:** Well, the first time an open source project becomes important is as soon as somebody starts making money with it. Up until then it's just a hobby, it's an experiment, it's a cool thing. As soon as company A tells you "Hey, Vladimir, we wanna pay you to work on this thing", and you're like "Um, okay. Cool. TinyGo? Yeah, I totally know that." You know... But you read Tobias' book on the way to the job interview... \[laughter\] Only now does this open source project actually matter. I mean, really matter. Before that, it's like it's fun, and it's cool, and I don't wanna talk down on people's vanity projects, because it makes them feel good, or on people's love projects, because they just need to share. Because those are wonderful things.

\[52:01\] But you need to have a pretty understanding boss to be like "Yeah, I'm gonna go fly halfway around the world to go do this conference, to go talk about this way to make games... And I know we're not a game company... And in fact -- no, I'm not spending too much time on it, really. I swear." \[laughter\] Until you have somebody paying.

In the capitalistic society in which we live, there is no way to have a sustainable project. Somebody has to come up with some money at some point. Unpopular? Yes. But not disagreed with, probably. An example from our direct experience - there's a whole bunch of people who work at Fastly who are working very diligently on contributing to TinyGo. I can't tell you exactly what they're doing right now, but they are doing a lot of really interesting work. They're helping the broader community quite a lot. And I doubt that they would be able to devote that much time and energy if it wasn't their day job.

**Vladimir Vivien:** Do you see a day where TinyGo is on par with the regular flavor of Go as far as popularity, adoption?

**Ron Evans:** I mean, it serves a very different purpose. I think WebAssembly is the only thing that can maybe change that equation... Although there is the thriving ecosystem of building out cloud-native, the amazing other things that are happening with other applications of Go... Go in the UI, whether it's Gio or Fyre... I mean, there's so many interesting things that are happening in Go, that -- for me to say "Oh yeah, TinyGo is the most important", I don't think I could really say anything is THE most important. But I will say, hardware development is too important to be left to hardware developers.

**Vladimir Vivien:** That sounds like another unpopular opinion...

**Ron Evans:** Possibly. But as there's more and more small devices just out in the world doing things... Like, what are they doing? Well, we don't know. But maybe it's very bad things. We've heard lots of -- not to complain about Google in particular, but because of the success of things like Nest and Ring, suddenly they're the bad people. Because they're doing bad things. So how do we prevent that? Well, we have to have more people doing hardware development, that way it's less siloed...

If you go to a conference that specializes in hardware development, like Embedded World, it's a bunch of older, grey-haired men. And if you go out to some of them and you say "Have you heard of Go?", they'll be like "No. We use C. We've been using C since --" Like, they say "C was good enough for my grandfather, it was good enough for my father..." And it's not just a figure of speech. They're like, "Yeah, my grandfather was using C." Wow, amazing. I would say C has killed more people than any other programming language... \[laughter\]

**Natalie Pistunovich:** Well, but most of the medical devices are built in C, so that would be some sort of a bias...

**Vladimir Vivien:** That's right.

**Ron Evans:** Thank you, Natalie. Exactly. I was hoping somebody would see the logical fallacy in this argument. But does that mean we have to keep doing it that way? I hope not. Should it be TinyGo? We want TinyGo to be an option. Should it be Rust? We want Rust to be an option, too. Rust is really cool, and a lot of interesting people are doing smart things with it.

**Vladimir Vivien:** Very interesting things, yeah.

**Ron Evans:** What about Elixir running on embedded? What about even languages that we don't know about yet? Those could occur. It's hard to say where the next exciting tangent -- although I know Tobias' unpopular opinion, so I'll let him say that one.

**Tobias Theel:** Thank you. At least this one... \[laughter\]

**Ron Evans:** I told you I have a lot of unpopular opinion things. They just started flowing out... I couldn't stop them. I was like, "Oh, I feel so light." \[laughter\]

**Angelica Hill:** Well, not to worry, because I think we are in fact going to dive into unpopular opinons now... So hold that thought.

**Ron Evans:** Oh, I've run out. \[laughter\]

**Jingle:** \[56:13\] to \[56:30\]

**Angelica Hill:** Great, so we're gonna be going straight to you, Tobias, because we've been waiting in anticipation for this unpopular opinion.

**Tobias Theel:** Yeah, after we heard hundreds of unpopular opinions from Ron right now... \[laughter\]

**Ron Evans:** That many? Wow.

**Tobias Theel:** I'm not quite sure where on the scale of popular or unpopular I'll end, but I'll throw it out now... So I'm of the opinion that there has been nothing significantly new in software development in the past 20 years. And additionally, it's always the same cat, just with a different hat on it.

**Ron Evans:** Hm. Well, I'm gonna disagree with you, Tobias, in one regard. \[laughter\]

**Natalie Pistunovich:** Perfect. Congratulations.

**Ron Evans:** It's way more than 20 years.

**Vladimir Vivien:** That's what I was thinking too, I'm like "Is it just 20...?"

**Ron Evans:** 20 years is not enough.

**Tobias Theel:** Okay, it's easily way more than 20 years... And I can also give a little explanation why I'm of this opinion. Let's have a look at all of these development browsers, frameworks, like Extreme Programming, and Kanban, and -- I don't know, there are thousands of them... And more or less, they all boil down to the same few basic concepts. The Agile Manifesto thing has been written I guess around 20 years ago, and all of these frameworks still reside on these same principles... And the same is for everything else in software development. There's a new cool architecture structure for your software; they won't call it onion architecture, layered architecture, clean architecture, whatever architecture, hexagonal architecture, but it all boils down to the same few principles... So I'm saying there has been nothing new in software development.

**Vladimir Vivien:** Interesting. Actual software development.

**Tobias Theel:** Yeah.

**Vladimir Vivien:** The practice of software development. Okay. Interesting.

**Natalie Pistunovich:** We'll see on Twitter...

**Angelica Hill:** Yeah, I'm excited to see where that falls...

**Natalie Pistunovich:** ...what the followers will say.

**Angelica Hill:** How about you, Vladimir? What's your unpopular opinion?

**Vladimir Vivien:** It's interesting, because it kind of lined up with what Ron and Tobias have been saying... Mine is "Our industry takes pride in disqualifying folks because they don't use a favorite antiquated tool like your C, Vi, Emacs, Bash etc." And my unpopular opinion is that we should stop. There's a level of walled garden or some kind of ivory tower around these tools, where if you're not using C, or if you're not using -- and hopefully, we don't get to that point with Go or Rust, but... People who are using or developing in software like JS, we tend to not look that as a real language; we have billions of dollars of value being written in JavaScript probably every day...

So that's my unpopular opinion, is that we need to stop disqualifying folks around these -- and I call them antiquated because those tools are very old. So yeah.

**Ron Evans:** Yeah, I have Emacs macros that are older than I am.

**Vladimir Vivien:** Yes, exactly.

**Ron Evans:** Yeah, that's a really good point. I guess my biggest struggle with Rust - not to pick on Rust in particular... But let's pick on Rust. I feel like - and I'm gonna misstate it - the philosophy of Rust says "Let's make it so hard to write programs that you can't write them anymore, and therefore there won't be any bad software." You know, not literally that, but... You can't write bad programs. Sorry, you cannot write them. That sounds really good if I think about it from like a really far away distance... Like, I'm looking at the planet from a telescope... But when I get up really close to all of these people who are just trying to -- I mean, a lot of people whose lives have been changed by learning to program. I know we've talked down about bootcamps and things, but -- forget the bootcamp thing. Let's just say a person who decided to read Tobias' book, figured out how to write TinyGo code, went to a job interview, got the job, and is now making three or four or five times more money and can actually pay their bills... Suddenly, they can take care of their obligations to their family. They have so much less anxiety in their life, so much less stress...

**Vladimir Vivien:** \[01:00:25.25\] Absolutely.

**Ron Evans:** ...they can participate in things they couldn't participate in before, whether that's civic things, family things, personal things... That person's life has been changed. If it's JavaScript or if it's a spreadsheet -- okay, my unpopular opinion, another one... \[laughter\] Spreadsheets are the most important development ever in software. The spreadsheet is the highest evolution of software to date.

**Vladimir Vivien:** Yes,

**Ron Evans:** Because it has let the most human beings do the most with computing about a problem they were just trying to solve. We're too cool for that, I know... Like, I don't use spreadsheets; I just hide them. \[laughter\] But I just think there's a barrier between the professional programming priesthood and the regular human being. That is exactly what I don't want; for me, myself, why I am in software is to do things to stop that from happening. And if some of those people do things with the software I don't expect - well, that's how life works.

There's another one... Once you publish your open source software, you have no control over what people do with it.

**Tobias Theel:** That's true.

**Ron Evans:** Don't slap a license on there saying don't do evil, It's like, "Ha-ha!" I laugh at your license and I use it to write ransomware with, you know...? I mean, not me personally, but... I just don't think that you have that kind of control over your software. Once you release it into the world, like your children, you hope you've given it a good foundation, but you no longer have any control over whatever they do. I explained this to my parents... It wasn't your fault, mom and dad. It was just -- I read the wrong book at some point. Any more unpopular opinions from anyone else?

**Angelica Hill:** Natalie, have you got one?

**Ron Evans:** I'm just trying to channel my inner Mat Ryer... \[laughter\] Like, I hear Mat and I just think -- first of all, Mat, I miss you, man. I've gotta come over there... If they let people from Spain come to the U.K. again, I'll come and visit. But okay, another unpopular opinion - this one is for Mark Bates... Mark, I saw your recent photo with your beard... Great beard. You look great, man. But my beard is so much more distinguished. \[laughter\] Sorry, Mark. Yours is thicker, fuller, but mine has got that distinguished... What does that mean? I don't know.

But I did have another, more serious unpopular opinion...

**Tobias Theel:** \[laughs\] I'm dying...

**Angelica Hill:** What is your final unpopular opinion? Use your final unpopular opinion wisely, because you only get one more.

**Vladimir Vivien:** Now he's changing it.

**Angelica Hill:** I'm cutting you off.

**Vladimir Vivien:** He's changing it.

**Ron Evans:** Human beings are more dangerous to other human beings than AI will ever be.

**Vladimir Vivien:** Yeah, that's understandable.

**Ron Evans:** Human beings have caused and will cause more harm to other humans. AI is just an excuse. "I didn't know the gun was loaded" kind of thing.

**Tobias Theel:** I guess that's not very popular underneath the tinfoil hat people.

**Ron Evans:** Maybe that was kind of a joykill... Like, "Oh, it was so fun, up until like "Oh wow, Terminator." Not the Terminator; the person flying the Terminator remotely. That's what you've gotta worry about.

**Angelica Hill:** Yeah. Our final unpopular opinion. Natalie.

**Natalie Pistunovich:** My unpopular opinion is about Zoom fatigue. People want things to be in-person again because of that Zoom fatigue. And while I totally get that, my unpopular opinion is that I hope that events will stay hybrid, at the very least, if not fully online. Probably not fully online... And the reason is that it's more environmental-friendly, but it's also a lot more accessible to everyone else.

**Vladimir Vivien:** \[01:04:14.17\] Oh, yeah.

**Natalie Pistunovich:** Conferences, meetups, hackathons... Everything.

**Vladimir Vivien:** Agreed.

**Natalie Pistunovich:** No, no. You should be disagreeing. I talked about Zoom fatigue on Twitter. You cannot agree with my unpopular opinion, I'm sorry.

**Ron Evans:** I miss the real world, my friends... But also, it's like -- we need name tags that say "Handshake", "Hug", or "Don't even touch me" options.

**Angelica Hill:** Yes.

**Natalie Pistunovich:** Elbow.

**Vladimir Vivien:** Right. Color-coded.

**Ron Evans:** Yeah. Just to make sure there's no embarrassing, like, one kiss, two kiss, no kiss...

**Angelica Hill:** We'll have a whole color-coordinated scheme, where you walk into an event and you grab a red beanie for Stay Away, a blue beanie for a Hug etc.

**Tobias Theel:** What happens when you take on the full rainbow?

**Angelica Hill:** Then you're just open to whatever the other person would like.

**Vladimir Vivien:** Whatever happens, right?

**Natalie Pistunovich:** And a tinfoil hat?

**Angelica Hill:** Yeah. \[laughs\]

**Ron Evans:** The only drawback to virtual events for new speakers - I've gotten feedback from maybe a dozen people whose first experience at presenting was online, and it was very, very hard for them... Because your first presentation experience is quite hard, generally... It's really hard because "Oh, I'm scared to get in front of people." It's even worse when there's no people there. So you're like, "Hello? Is this thing on? Testing, one-two-three..."

I feel a great deal of compassion for the people who are just getting started to present some interesting things they're doing, because I think you have to work a lot harder to try to find the -- it's about contact, it's not just about "Here's information." It's about some type of human touch to it, and it's very hard.

**Natalie Pistunovich:** Also, networking is very hard online... And my thought is that it should not be solved by going back to what we know, but by improving this new situation. And we're still not there. There's all sorts of platforms that are trying all sorts of ways of doing that... And I just think we should try harder.

**Ron Evans:** Oh, yeah.

**Vladimir Vivien:** It's definitely a technology problem. A lot of it is a technology problem.

**Ron Evans:** So there was a conference called Roguelike, that I believe last year they did a brilliant job of creating a whole MUD for their conference. They had virtual items, and the virtual bar, and when you walked in one of the salons that the talk was in, then it would bring up the streaming video... I just thought that was absolutely brilliant. I'm not sure it was the best user experience or not. I did not attend it, I just saw it. But I thought "At last, another approach towards how to do this." Just to riff on Natalie's take - yes, let's try to explore the medium and find different forums.

**Vladimir Vivien:** Yeah, agree.

**Angelica Hill:** A hundred percent. Keep on experiment. Awesome. Well, I'm gonna close with my unpopular opinion, which you've all heard, on a lighter note... I think that this obsession with pumpkin in the U.S, as soon as Labor Day is over, needs to stop. \[laughter\] I don't need pumpkin on every day... Like, pumpkin spice latte, pumpkin bread, pumpkin cheese... Everything suddenly becomes pumpkin.

**Vladimir Vivien:** Pumpkin cheese... \[laughs\]

**Angelica Hill:** I literally saw a pumpkin sausage in the supermarket... \[laughter\] Everything suddenly is orange, and we feel the need to put pumpkin in it.

**Ron Evans:** Which you drink a pumpkin beer with, of course, yes...

**Angelica Hill:** Yeah, no joke, there's pumpkin ale...

**Natalie Pistunovich:** Pumpkin lather soap...

**Angelica Hill:** Just pumpkin everything. I'm like, "What is this?" I get it, it's fall, but I don't need pumpkins... \[laughs\] On that light note, thank you all. This has been a wonderful conversation; so many interesting things have come up. I certainly know I'm gonna be googling things for days after this conversation. I really appreciate your time. Thank you, Natalie, as always, for being my wonderful panelist... And I hope everyone listening and watching enjoyed.

**Natalie Pistunovich:** Thank you, Angelica.

**Vladimir Vivien:** Thank you.
