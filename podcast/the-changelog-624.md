**Jerod Santo:** Alright, we are here with Elecia White from Embedded.fm. Elecia, welcome to the Changelog.

**Elecia White:** Hi. It's nice to be here.

**Jerod Santo:** Nice to have you. See, you are on the other side of the microphone, so to speak, as a longtime podcaster. I think you've done 491 episodes, if the most recent one on your homepage is, in fact, the highest number.

**Elecia White:** I think it's 492 today.

**Jerod Santo:** Oh. So there must be a new one out today. What's the most recent?

**Elecia White:** Octopus Army.

**Jerod Santo:** Oh, I see it right there. You know what? I scrolled right past it to "Oscillators Oscillating Other Oscillators", which is a great title.

**Elecia White:** Like you, we like our titles to be amusing.

**Jerod Santo:** I love that.

**Adam Stacoviak:** Yes.

**Jerod Santo:** And you're here today because of a Changelog++ listener; shout-out to Andrew O'Brien, who pointed us in your direction, a longtime listener of yours and ours, and thought "Hey, let's get them together and have them talk." So we're thankful to Andrew for pointing us your way, and we're thankful to you for coming on the show to talk all things Embedded.

**Elecia White:** That is my brand.

**Jerod Santo:** That's your brand.

**Elecia White:** I guess so. I never really intended it, but that's where it is...

**Jerod Santo:** \[laughs\] Well, you started a podcast called Embedded, so at a certain point you decided to embrace it, at least.

**Elecia White:** Actually, the podcast was originally called "Making Embedded Systems", which is the title of my book. But then everybody just kept calling it Embedded, and we're like "Fine, okay..." And then NPR came and said "We want to have Embedded, too." And we're like "No, it's ours." But actually, we just said "Can we please interview an actual NPR person? Because that would be so exciting." So that's what we did.

**Jerod Santo:** Cool.

**Adam Stacoviak:** What was their approach to ask you about having Embedded? What does that mean? What's the backstory?

**Elecia White:** Well, okay. Picture this. You are just sitting there and doing your work, coding away, and you get an email from NPR... And it's real NPR people, and they say "We'd like to talk to you", and you're like "Oh my God, it's my big moment. Finally, engineers are going to get to be on NPR, and we're going to get to talk about how exciting this all is." And they're just like "Yeah, so we're starting a show called Embedded, and we just wanted to know if you were going to have a problem with that." And we're like "We didn't trademark anything. You've got to be kidding me." Anyway. Yes, it was a huge disappointment, and yet, they did let us interview Kelly McEvers. And she had to keep leaving, because things were happening in other parts of the world that were actually important...

**Jerod Santo:** Like, during your interview with her?

**Elecia White:** Yes, yes. She was in the NPR studio, and she was like "Yeah, I have to go. People are doing this."

**Jerod Santo:** Oh, wow.

**Adam Stacoviak:** Huh.

**Elecia White:** So now we're Embedded, or Embedded.fm.

**Adam Stacoviak:** So they also have Embedded.

**Elecia White:** Yes.

**Adam Stacoviak:** There's two Embedded podcasts out there.

**Elecia White:** There are. One is about how engineering is pretty cool, and how technology is interesting, and how you can make cool devices that interact with the world... And the other is about all the depressing stuff that happens in the world.

**Adam Stacoviak:** \[00:08:10.19\] Well, that's a sad dichotomy.

**Elecia White:** I hope ours is the former.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Yeah, I would stop at one.

**Jerod Santo:** I was gonna say, I was interested in that first one.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It sounded cool to me.

**Adam Stacoviak:** What's interesting, I think -- what I think Embedded is, is this idea of creating... I would say more so in the last, I don't know -- maybe since the Raspberry Pi came out, this idea of "I can do things myself. I can take this small thing, that is just a single-board computer, and I can learn to program, or I can add servos, I can 3D-print now", because those are more ubiquitous, "and I can start to make my own thing in the world." And the system I put on there is not necessarily connected to the internet or the rest of the world, but it might be through Wi-Fi, or whatever. Is that kind of what you mean by Embedded? Like, this kind of world where you have standalone devices that are not really tethered via wire to that network, so to speak. How do you define Embedded?

**Elecia White:** I like to say that I write software for things that aren't computers.

**Adam Stacoviak:** Okay.

**Elecia White:** That pushes the definition onto "What is a computer?"

**Adam Stacoviak:** You've got my interest. Go.

**Elecia White:** If you're working on like servers, then developing an iPhone app is Embedded. But if you've been doing 8-bit microcontrollers, anything with an RTOS doesn't really feel embedded. So it is definitely a loose definition, but the whole software for things that aren't computers actually makes you think about your microwave, and your car, and your toys, if you have electronic toys for kids... There's a lot there. And it's huge. I mean, there's all the sensors that get interconnected for science, and for industry, and there's ICU devices. I mean, I did actually work on educational toys, and that was so fun. So it's a big field.

**Adam Stacoviak:** That's a good explanation of it, but I was thinking a very simple one from my recent Christmas holiday... We got my oldest son some eDrums. So he has a drum kit; as you can imagine, an eight-year-old going on nine, banging on some drums is cool. But it's also, as a parent, not always the appropriate time to bang on drums. And we want to encourage the obvious curiosity that is drumming. However, we also think that eKits are cool, because they're less loud, and they're cool because they have this controller... It's not a computer, but it is a computing device, because it has MIDI controllers, and all these different sounds for drums... So you can choose the metal kit, or the eRock kit. It's got all these different drum kits in there, it's taking the sensing input from the microphone on the eDrum into the controller, into your headphones, or your amplifier, or to your tracking device, and it's turning that into MIDI control sound. I didn't think about that being -- I guess I did, but I didn't think about it until this moment... That's not a computer, but also kind of a computer, that somebody wrote software for...

**Elecia White:** Exactly.

**Adam Stacoviak:** ...and maybe I could even write my own software for it, if there was a way to. Is that part of what you do as embedded, is like you start to find ways to add to the non-computer computer?

**Elecia White:** Well, I mean, I do it as a career. So most of the time people bring me ideas, and I help them build their systems. I may have taken apart a few toys...

**Adam Stacoviak:** For sure.

**Elecia White:** \[00:11:41.10\] BB-8 was one of my favorite ones when it first came out. Figuring out how to get its IMU data and maybe control it so that it did weird things... That was fun. So I don't do a lot of hacking and reverse-engineering, except for my own amusement. But the same tools are necessary. The way that I reverse-engineer a device is about basically debugging it without the code.

**Jerod Santo:** So what are some non-computers that you've programmed?

**Elecia White:** Well, I have a autonomous underwater vehicle that I worked on last year, and it wanders around its area. For example, one is in the Monterey Bay, in California. And it checks in with all of the various sensors that are on the seafloor. I also have worked on some of the sensors on the seafloor, measuring when we get big rainstorms, it changes how the mud moves... And that is really hard to monitor. So they dump a couple of smart rocks down there that have to live for years and years, so battery is a big issue... And it's not like I can go down there and push buttons and say "Update that firmware."

**Jerod Santo:** Smart rocks? Is that what you call them? Smart rocks?

**Elecia White:** Smart rocks, yes.

**Jerod Santo:** Wow. Okay. Never heard of that.

**Elecia White:** And then when something happens, when there's an event that causes a mudslide, or some weird currents happen, it monitors and it reports back to the little vehicle that wanders around the bay, and picks up all the data from all the sensors.

So - I mean, those aren't entirely my projects. Those are working with the Monterey Bay Aquarium Research Institute, which is awesome... And they do lots of science and ocean-based technology. Let's see... What else?

**Jerod Santo:** Can't top that one, can you?

**Elecia White:** Well, I worked on a gunshot location system, where you sprinkle sensors and microphones around the city, and automatically call the police when there's a gunshot.

**Jerod Santo:** Oh, that's cool.

**Elecia White:** That was really cool technology, and had some amazing applications. I'm kind of glad I left... I mean, I am comfortable with the level of privacy associated with it, but I am less comfortable with how the company started being run.

Children's toys... That was fun. I got to take some of my toys to a kindergarten, just volunteering. And one of them that I hated - it was a karaoke, and it was the most annoying toy. It would just sing constantly. And there was a voice changer that did not make anybody sound better. And I thought it was a dumb toy. I was way more interested in this other toy that helped kids learn to write.

And I would take the toy to the kindergarten, and kids would play with them, and I'd watch, and it was fun. And then one of the boys, who was kind of behind, asked if he could take the karaoke home, and I was like "Good riddance." And a week later, he had caught up to his class. He had been really behind, but because singing was the way that worked for him... Yeah, it totally blew my mind that something so different than what I could have stood, worked.

I've worked on DNA scanners, twice now, actually... Once pre 1995, '98... Well, anyway, once when DNA scanners were really cool, and very hard. And more recently, when -- like, you can just make them on your desk. That progress has been just phenomenal and amazing.

What else have I worked on...? I worked on inertial measurement units, which used to be the way, when I worked on them, that I would make anybody I was sitting next to in a plane just stop talking to me. "Oh yeah, I work on inertial measurement units." I could have said "I sell home insurance. Are you interested?" No, inertial measurement units was so good. People were just asleep by the end of the words.

\[00:16:06.03\] But I didn't tell them what I was doing on this airplane... I was going to a racetrack, so that we could test them on high-speed vehicles, or airplanes, or any of the other places where inertial sensing becomes really interesting.

This was the day before Wiimotes. And so the whole idea of accelerometers and gyroscopes as being interfaces was very different then. Now you flip over your phone, it turns on. That's what you expect. But how does it even know? I think sensors are probably my favorite area of embedded systems right now.

**Jerod Santo:** You've done a lot of cool stuff. How did you get into this world?

**Elecia White:** By accident. I mean, isn't that how it usually happens?

**Jerod Santo:** Usually.

**Elecia White:** So in college, I took applied CS courses, because I couldn't see the point of theoretical ones... And theoretical engineering, because I didn't really like any of the actual engineering. And what that gave me was Fourier and signal processing, as well as the ability to develop products. I went to HP, and Netservers, big then cloud computers, and kept getting lower and lower into the hardware, monitoring temperature... The things that we monitor now in cloud servers. We were just starting to put in temperature sensors and alerts when things were happening, instead of just the bad old days of having computers that ran, or they didn't, or they caught on fire, and you found that out by going in.

And as I kept going lower and lower in the stack, eventually I wandered over to HP Labs, and that was when we made DNA scanners. And I didn't know what I was getting into. My boss was just like -- or my perspective boss was like "You'll really enjoy this. I promise." And I was just like HP Labs. That is the best location ever."

And the first time I moved a motor -- because I told it to, not just because I powered on it something. But the first time it was under my control, it was magical. It was like, software can touch the world. Software can change physical things. It's not just zeros and ones. It's "Move this here. Read what's actually happening." That physicality of embedded systems is what got me into it. And that's what's kept me there. I really like -- not blinking lights, but a lot of people get into it for blinking lights. A lot of the hobby things are blinking lights. And I appreciate it. I hate blinking lights, but I appreciate their enthusiasm. But for me, it's touching buttons and having things happen.

So that's how I got into embedded, is I found out you can actually write software that changes things, and not just other software.

**Adam Stacoviak:** That moment of discovery is the fun part, right? When you get that "Oh man, I had no idea that's what that really meant." When you kind of get that taste. And it sparks this perpetual curiosity, I would say... Because that's -- I mean, mine is not as cool as yours. I was writing CSS, and my mom was like -- and I was doing a blog, because I was far away from home... And she was catching up with me and my life via a blog, back - gosh, 2003, I want to say; 2004. And she was like "You are good at this. You should keep doing it." And because my mom said that, I'm like "Okay, this is kind of cool. I should probably keep doing this." And that's kind of like where my curiosity in software development began, which was just like learning CSS. But that initial moment is so strong.

**Elecia White:** Teaching people - it's always amazing to get to see that moment, or to see part of it. I like mentoring folks, in hopes that I can be there when it hits.

**Jerod Santo:** \[00:20:15.19\] On platforms like the web, it's so easy. You can get to that moment in minutes, because you can load up their favorite web page, and show them how to open up the dev tools, and change the background color, or something; or delete a line, and the title disappears. And you see that a-ha moment very quickly. And I know in embedded systems a lot of times now it's the blinking lights, right? It's the Arduino or whatever it is... And that moment of turning a light on, that's so cool.

When you mentor, when you teach, what do you do? How do you get people to that moment? What do you show them? And how long does that take? Because it has historically been considerably more steps in embedded than on platforms like the web.

**Elecia White:** Yes. I mean, teaching now, there are some simulators. There's one called Wokwi, and it will simulate an Arduino. And you can program it under C, or Arduino, or MicroPython; lots of interfaces. And it takes out that pain of wiring, getting the wiring wrong, blowing it up... All the things that can happen with embedded systems. It also takes away the pain of cross compiling. But in the end, it's on the web. And I agree, if you want to see that coding can do more than just -- it's not just typing. It's doing things. It's doing cool things. Changing web pages and interacting with simulators is still really the way to go. But yeah, it is sadly a little bit of a step function with some of the embedded systems, trying to get from "I opened a box" to "I'm doing something."

If anybody wants to try it today, we've said Arduino. Arduino is really great. It was the system developed for helping artists do installations. And so the whole system is very directed towards art, and making things accessible that way. They don't expect you to have 20 years of C experience. The other one is one of the MicroPython boards. That one - Python's a pretty easy language as far as languages go. It's not C. And it isn't compiled, so you can try stuff on the command line. And you get a MicroPython board, you plug it in and it acts like a thumb drive. You just take your Python file over, put it on the thumb drive, and then there are all these things, like motor.run, and suddenly it runs. And at that point, you do have to have things wired up, but there are a lot of kits for the MicroPython, and it's a good way to get started.

**Adam Stacoviak:** Wow.

**Elecia White:** And with MicroPython or CircuitPython, which are very similar things, you can get started right away, making bigger and bigger things. Arduino - I love Arduino. There's a lot of Arduinos, there's a lot of good things you can do with Arduino, but it's an old system, and it's really expensive for what it is. So I would recommend MicroPython for the future.

**Adam Stacoviak:** I pulled up the Wokwi, and I'm a couple layers deep, while you're talking...

**Elecia White:** \[laughs\]

**Adam Stacoviak:** And I'm on the Wokwi for VS Code, and I'm like "Wow, this is so cool." I mean, you can do it in the web too, but a lot of people are really happy in VS Code. I'm not unhappy in VS Code. It's not my favorite, but it's certainly a quite usable code editor... And I think it's a great platform for a lot of people.

\[00:24:09.03\] So the fact that you can have another tab next to your code in VS Code, and it's Wokwi, and you're kind of like programming in software what could be future hardware, and learning... That's so cool. I've personally been intimidated by, I suppose, hardware coding like this, or things that do stuff, that isn't software... Because I don't know how -- and I suppose everything's findoutable, right? The word 'findoutable'... But I just haven't found out or had the time to find out. So the burden and the hurdles to start in the way that I want to start seem so high. This Wokwi thing seems so cool. I feel like it might be a bit more accessible now.

**Elecia White:** It's a great system. Uri Shaked is the developer, and he's very responsive, and they've got a Discord... It's really fun. And we have an episode about it, if anybody wants to look up that.

The other -- and I feel you for "How do I get started without breaking everything?" Adafruit and Sparkfun are two companies that are for hobbyist electronics, and they both have boards you plug together. You're not going to solder these. I mean, you can, but the goal for them is you just click these things together and you don't have to worry about that "Am I providing enough power? Am I going to cause a small fire if I leave this on overnight?" So Adafruit and Sparkfun are the places you go to find these things out. They both have a really great tutorial system as well. So if you're thinking about getting into it, it's a good place to go.

On the other hand, Wokwi lets you do things like have a robot army that you control from an Arduino, because you can put in 500 motors, and Wokwi doesn't care. If you do that in real life, you're talking about a lot of power, and figuring these things out. But if you do it on Wokwi, it's all just really fun.

**Adam Stacoviak:** I like the idea that, one, it is software, so you can scale, just like you said. Which is a great thing. But at the same time, it's like "Well, this isn't real. It's software." But the moment I feel comfortable literally buying or spending my cash on some hardware and some wires, and a kit or whatever it might be, I can take the thing that I've been playing with, iterating on, and get, like every other software developer's doing, and I'm learning those software development skills... But now, once I've kind of gotten to the point where I've got my really good version that I want to really make in the real world, I can translate that to - it seems like at least, translate that to the real world. Now, I've written the software for it. Now all I have to do is just pair it up with real hardware, versus this software version.

**Elecia White:** Yes. Yes, indeed.

**Adam Stacoviak:** That's so cool. That's dope. I had no idea it existed.

**Jerod Santo:** How big is the chasm between "I'm able to use a simulator in Python", or maybe it's even in C, or "I'm even able to get something onto some device and have it do stuff", and your world, of "I'm writing professional embedded software for autonomous vehicles that go underwater, and sense things"? How big is that chasm?

**Elecia White:** Everybody come to embedded says "It's not that bad. You just read my book. It's all fine."

**Jerod Santo:** \[laughs\] Right.

**Elecia White:** \[00:27:50.20\] The real me has to admit that over-the-air updates are never going to be easy. Security is never going to be easy. Low battery... All these things where you have -- like in toys, where you have to shave off pennies, so you end up with a processor that should not be able to do this much, but you are packing in every piece of RAM, every cycle is spoken for... And that optimization... People bring me their Arduino projects and they say "It works. All the features work, most of the time." And I look at it and see all of the things that isn't going to work. Usually, there's like "I just want it to connect to the internet, so I can get the data back." It's like, okay, so you have to have a database for the data you want, the cloud data; the cloud data of interest. But you may also need to monitor the devices, to make sure that they check in. What if this is a medical device, and you need the user to be using it? So if they aren't using it, you need to know. And then what if it's had some faults? What is the failsafe? Can you actually hurt someone? What firmware version is it on? And these are all cloud problems, but these are cloud problems that have to be solved with the device. And as you scale from one or two or three devices in your house that you're playing with, that you're building, or even 10 devices in your tiny startup office, into thousands or millions... I worked at Fitbit, and this was a huge problem as they scaled - I mean, orders of magnitude. That database became bigger, and more people had to access it, and yet you don't want someone to know where President Obama is right now because he tends to wear a Fitbit watch. That's the sort of data you don't want to get out. And yet you still need to know if every device is up to date, and if their batteries are degrading more quickly, because on the new firmware...

Yeah, there's a lot. There really is a lot. It's not insurmountable, and there are companies all the time that are trying to make it simpler. Do they succeed? Some of them... Some of them succeed pretty well. But it's never... Sometimes they talk about it being Lego blocks. Like, I used to have to develop a lot more stuff, but now I get my drivers from whatever repository I'm working... I get them from the chip vendor, or from the RTOS vendor. I don't have to write drivers anymore. And other pieces of code, like IMUs - most of that code comes from somewhere else. I used to have to write it. I don't anymore. It's really nice. But there's still the shimming of it together to try to get it all to work together, given the time constraints, or whatever other limitation there is to the embedded system. I guess that's another way that I have defined embedded systems, is that they are purpose-built for what they do, and so they don't have a lot of extra resources. Whether it's needing to live underwater for five years on one battery, or whether it's needing to live in your pocket overnight, on one battery charge. They don't have extra stuff. And that causes a lot of problems when you need to do extra stuff.

**Jerod Santo:** \[00:31:49.05\] Well, there's a sideways application of Parkinson's law here... Which, you know, Parkinson's law is the one that the scope of a project will expand to match the time allowed for the project. Something like this. That's a bad paraphrase. And I was just teaching my kids about budgeting this morning, and I was talking about how if you're not diligent, that your lifestyle will expand to match the size of your income, right? Sometimes beyond. It's just kind of a human nature thing... And I think our software expands to match the size of the hardware that it's running on. To use every last bit. And it has allowed for many of us, web developers like myself included, to be lazy, and do things the easy way, the fast way, the cheap way... But in that embedded world, where every resource counts and it's heavily constrained, you must have to know all of the optimizations, all the little tricks, the way to manage your memory so as not to bloat, or leak, or... Do you like -- I mean you must like that... I mean it's literally a constraint.

**Elecia White:** A puzzle.

**Jerod Santo:** The challenge of -- yeah, it's a puzzle. And to many of us that would be a huge bummer, you know? Because it's hard. And there's things to do. But you must like puzzle solving a lot.

**Elecia White:** I do, I do. I really like puzzle solving. And I'm not super-afraid of math. So if I need to add up where all of my memory is going, or be able to look at a memory map file and see hex addresses, those don't really scare me. I know that they're just addresses. They just look funny.

**Jerod Santo:** Mm-hm.

**Elecia White:** But I really enjoy the puzzle part. And like I said, I really enjoy the motor moving.

**Jerod Santo:** \[laughs\] Yeah.

**Elecia White:** And when the robot -- for a personal project, I wanted to do some higher level software, so I got a Jetson, which is NVIDIA's AI embedded system. It's a Linux system. It's a computer. I used it as a computer for like two weeks. And I wanted to get a really janky arm, a robotic arm, that could go up, and down, and grab things. And I wanted to make a typing robot. I wanted to have a camera that would see the keyboard, and then the robot would hold a little, I don't know, pin, tooth-like thing. And it would punch out "Hello", or whatever I told it to punch out. And it kind of worked. And I used some machine learning, and I did a lot of computer vision, which is an area I'm always interested in. But then, one day I'm telling it "Okay, type Hello" and it types "Help." And I'm like done. I'm like "This is the end of this personal project. I cannot make it any better. This is the best." And I forgot why I started this story, but I hope it was amusing.

**Adam Stacoviak:** Well, I'm wondering maybe if it wasn't a Fiona moment. My friends who are big fans of a very awesome TV show called Silicon Valley would know what I'm talking about... Because in this episode - spoiler, for those who haven't watched it yet - she asks for help. She is a robot. She needed help. I'm wondering maybe if your robot needed help.

**Jerod Santo:** \[laughs\] It might have.

**Elecia White:** It certainly did. \[laughter\] It was in the way of "How much software can I throw at a problem to make the hardware that is very bad better?" It turns out you can throw a lot of software at some bad hardware, and it still is bad hardware. But it can be really fun.

**Break**: \[00:35:48.09\]

**Adam Stacoviak:** I'm curious about the possibilities of embedded systems. Jerod, maybe your question regarding the chasm is "If I begin, how far is that dip, so to speak?" How far is it from beginner to potentially professional? How big is this embedded world? Is it an underserved world? Is there a lot of opportunity? Is there one place to go to learn? Is it all in university, or college? How do you get to be a pro? And if you do become a pro, or someone who's professional, earning their money and career via this route, is it big? Is it expansive? Is it growing?

**Elecia White:** You might've noticed that your home has more blinking lights than it used to.

**Adam Stacoviak:** Yeah. I'm sad about that.

**Jerod Santo:** \[laughs\]

**Elecia White:** Electrical tape.

**Jerod Santo:** There you go.

**Elecia White:** It is growing. Some things are becoming easier, some things are becoming more straightforward... But I see more job openings than people looking for jobs. So I would say that's pretty good. How do you get there? There are a lot of paths, because like I said, what is an embedded system depends on your perspective. There are quite a few embedded Linux projects that still are embedded, because they need to be very conscious of their constraints. And yet to most software engineers, it wouldn't look that different. It might be boring, because it's trying to figure out how to provision 100 small sensors with IP addresses, but the actual algorithms and such wouldn't be strange. It would be the interactions that were a little different, having to deal with actual boxes out there. But then when you start getting into higher -- I guess it's lower tolerance; things where you have to last for five years, or have to squeeze out every microamp possible, or even things where a firmware update is very hard, and if you do it wrong, things go very bad for you. Like a firmware update at the bottom of the ocean. Those -- you don't start with those. I think that's what I need to say; there are better places to start. And there are a lot of things that software engineers know, that embedded software engineers are still picking up. We are not really that good at CI/CD. If somebody could just tell us how to use Jenkins instead of making us figure it out each time, that would be great. I mean, I use Jenkins...

**Jerod Santo:** Sure.

**Elecia White:** ...but it's not -- some of the software engineers I work with, Jenkins is just like obvious. Every part of it is obvious. And to me it's like, I can do what I need to do, and when you ask me to set up a new project, I just go home and I, I don't know, turn off my computer for the rest of the day.

Design patterns was one of those things that I really wanted to bring to embedded systems. And I feel like I have kind of talked about it for the last 20 years, about how important it is to not keep solving the problems in new ways, but to start solving the same problems in the same ways each time, so that we don't have to rewrite all the code.

\[00:41:59.26\] And things like object-oriented programming... It's not new. And a lot of embedded people really understand it. And yet we mostly program in C still. I know the gasps, the horrifying screams... Yes, we still mostly program in C. But we don't usually program in an assembly anymore. We're making progress.

**Jerod Santo:** There you go.

**Adam Stacoviak:** There you go, yeah.

**Jerod Santo:** So what about open source? Has that permeated your crew?

**Elecia White:** Yes. There's open source -- I mean, the vendors of our chips have figured out that they don't really want to keep giving us their crummy software in ways that only they can manage it... So like ST and Microchip and Nordic all have big repositories, and they have examples of working with different sensors, they have their drivers there... And then we have things like Zephyr, which is an operating system that is kind of like you took Linux and you made it much smaller, and then instead of anything you could run at runtime, you hard-coded it at compile time. Which has some interesting things... The device tree is one of those things that most people in their first three months of Zephyr experience will start cursing. And once you have -- yeah, so Zephyr is huge, and FreeRTOS is now open source. Wokwi is open source; most of it, I think. There's a little bit that isn't.

The sensor vendors, the IMU vendors will give us code. And sometimes that's partially open source, and sometimes it is not. But the easy stuff now, the common filters that used tot be so complicated, now that's code they just give you. They tell you how to do.

**Jerod Santo:** What's that?

**Elecia White:** A Kalman filter is a way of -- I could talk about this for like three hours, so I'm trying not to... \[laughter\] Okay, accelerometers and gyroscopes. Accelerometers measure gravity. They measure acceleration too, that's what they say, but really, they just measure gravity. Gyroscopes measure spinniness; how fast you're turning. And it doesn't really matter whether you're spinning around a certain thing or whether you're spinning around a part of a thing. So you can measure how your arm moves with a gyroscope. It's not like it has to go around and around. It's just how much is it turning.

When you are in a car and you're going around a cloverleaf, you're spinning and you feel acceleration. You feel acceleration, the outward push of you as you're spinning around. An inertial measurement unit can use both of these sensors, and know which one is wrong. And it's kind of like your ears and your eyes. If you are spinning around in a circle and your eyes are closed, you're going to get dizzy much faster than if your eyes are open. The Kalman filter is a way to combine sensors with different error features, different error characteristics, into a way to get a much better response, because you can characterize the error when nothing's happening. Or you can characterize the error in certain conditions where you know one is good and one is bad, like on a cloverleaf.

**Jerod Santo:** Gotcha. And so the vendors of the device would provide a set of filters for you to use?

**Elecia White:** \[00:45:58.07\] They would provide the algorithm, yeah. And they would provide the base code for how good each of their sensors are.

**Jerod Santo:** Okay. Because they've done those tests and they understand the sensors and their error rates, and these other things.

**Elecia White:** Exactly.

**Jerod Santo:** Better than you do.

**Elecia White:** Better than I want to.

**Jerod Santo:** \[laughs\] Yeah. I mean, after a while you may understand them better than they do. But those used to be closed source, or they used to be unavailable to you, and now they're just provided.

**Elecia White:** In 1990, it was a patent I worked on.

**Jerod Santo:** So you helped invent these things.

**Elecia White:** Well, no, I helped implement them.

**Jerod Santo:** Okay.

**Elecia White:** It came out of a -- and to be fair, a lot of people started doing IMUs and Kalman filters in the early to mid '90s. And it exploded as to the applications... But a bunch of PhDs were done at that time. And so they became very, very popular because they solved the inertial measurement unit problem pretty well. And now they solve a lot of other problems that involve a bunch of sensors.

Usually, when we talk about self-driving cars, the GPS has one set of errors, mostly; it's really slow. The LiDAR or camera can have another set of errors, and it provides a different set of information, and the different types of Kalmans can put all of these together. And the idea is just you put the errors here and you put the data here, and you try to make the best out of the bad situation you have.

**Jerod Santo:** Gotcha. So you mentioned self-driving cars and you mentioned LiDAR... So I have to ask your take as an embedded person on Tesla's proposition that they can get to autonomous, or whatever level you need to get to, with cameras only. And then Waymos using LiDARs, other people using LiDARs. How important is the LiDAR, do you think? Pure opinion. Versus having a bunch of cameras and letting that be your only input, or your only data streams.

**Elecia White:** I can't picture doing it only with cameras.

**Jerod Santo:** That's what a lot of people say.

**Elecia White:** I mean, the argument is humans do it only with cameras.

**Jerod Santo:** Right. Like, all we have is eyes, right?

**Elecia White:** But we have a few other things.

**Jerod Santo:** Such as...?

**Elecia White:** Our eyes and our inertial measurement units are very well connected.

**Jerod Santo:** Okay.

**Elecia White:** So there is no disconnect that if you jerk the wheel, you know what your vision's gonna do.

**Jerod Santo:** Okay, I'm tracking you.

**Elecia White:** And as a human, I just -- cities and self-driving cars... I worked on autonomous vehicles, and not just underwater, but self-driving, large off-road vehicles. And we did it almost entirely with cameras. But part of our goal for the future was dealing with Stop signs and pedestrians. And I spent a lot of time with the machine learning systems and the reinforcement learning systems... And it's a hard problem. And I don't know how they're going to solve city driving in a way that is truly safe and doesn't have systemic failures.

That's one of the problems with medical devices. When we talk about doing embedded systems in medical devices, it's usually there's some element of "Oh my goodness, there's so much documentation. There's so much documentation the FDA needs." And that's primarily to make us understand the ramifications of the points we're making. And the reason for that is because -- oh, I've started this in the wrong place. Okay, moving backwards. If you work on airplane stuff, there are different levels of concern. If you take down a small airplane, a Cessna, it may crash into something important, like a school. And so you have a certain amount of damage you can do with a small plane.

**Jerod Santo:** \[00:50:23.26\] Sure.

**Elecia White:** You have a much bigger amount of damage you can do with a larger plane. Medical devices are a little confusing, because -- and safety critical devices, medical or vehicles, have a problem that you can have thousands of them in the field when they start to fail. And so your problem is not that you have hurt one person. Your problem is that your software has decided that the 29th of February is not a real day, and has gone nuts, and is now on its murdering spree. And that's what you need to avoid.

And so the thing with cars is that we keep trying to make them better in small ways, but I feel like we've kind of reached a local minima, that we're not gonna get better with just cameras. I'm not even sure we're gonna get better with just a LiDAR. But I don't know how to build in that feeling of where the car is, the proprioception that you get as an experienced driver. I'm afraid that cars will drive like 16-year-olds forever, and I don't know that that's what we want.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** As an outsider who - I'm not sure I would ever even venture into the world of what it would take to be on a team that creates autonomous cars... I'm a fan from afar, let's just say, of the idea.

**Elecia White:** Me too.

**Adam Stacoviak:** I like the idea, but I think it's -- this is lame, and this is from the outside. It seems perpetually flawed, because it's not a closed system. There's just so many flaws in the system that you can almost never predict. You can predict a lot of the various ones, but you can't predict all of them, ever. And because it's not a closed system that you control, then it seems like you're perpetually gonna be flawed. No matter what, there's always gonna be something that changes the game, potentially catastrophically, that you can't circumvent.

**Elecia White:** As a human, you can't do either.

**Adam Stacoviak:** Right.

**Jerod Santo:** Yeah, I think your point about the horizontal scale, Elecia, if that's just the way I'll say it, is that we have crazily bad 16-year-old drivers, but it's not like at a specific moment in time this percentage of all cars on the road are gonna turn into that.

The error that happens spread across a fleet of cars all running the same software, for instance, that makes the same mistake all at once is catastrophic. Of course, the famous or infamous -- I think this was the first Tesla that killed somebody... That was in FSD mode. It was because it came over a hill and the sun was coming up, and the sun shone into all the cameras at once. I'm just giving my depiction of what happened... It's roughly that. And it couldn't handle it. Well, of course, a human couldn't handle that either, because your eyes are completely blinded. And so likely, maybe the same result in that one instance. But if something like that happens across 50,000 cars at the same time, that is a catastrophe. Of course, it's a tragedy when one person dies. But when this fleet suddenly goes bad... I mean, the stakes are way higher, right?

**Adam Stacoviak:** Yeah. I mean, I've been that human, Jerod, that's coming up over hill with the sun.

**Jerod Santo:** And you're 16?

**Adam Stacoviak:** \[00:53:57.20\] And I can emp -- well, not even at any age, really. I mean, period. As even a good driver, I would say, a marginally good driver. I think I've had -- the most recent accident I had, which was like the one I didn't cause... The deer hit me. And this was like a year-ish ago.

**Jerod Santo:** Well, some things can't be avoided.

**Adam Stacoviak:** I mean, this deer wasn't like random at nighttime, when you would think a deer would be out. It was nine in the morning, in town. Like, where other cars were at. It wasn't a time when deers should be running necessarily.

**Jerod Santo:** He was looking for your car.

**Adam Stacoviak:** Ran right into me. And then the other time was - geez, probably 20 years ago. And it was just wet. And I just didn't stop in time. Like, I stopped, but my car decided to skid, because that's what happens.

**Jerod Santo:** It slid a little bit.

**Adam Stacoviak:** Yeah. And sure, I could have been paying a little better attention... But I'm a pretty good driver, is the point of the last 45 seconds.

**Jerod Santo:** That's the point you're trying to get across?

**Adam Stacoviak:** I'm a pretty decent driver.

**Jerod Santo:** Right.

**Adam Stacoviak:** But I've been in a scenario where the sun has completely overtaken my vision, completely... I do recall, seconds beforehand, what was in front of me... And so I went now from literal memory, with confidence of my next driving maneuvers straight, and around the bend a little bit... Because I was going from my memory before my sight was taken away. In the case of the cameras, the thing was freaking out... I don't know what happened there. Maybe it was like a literal panic mode. But in my own body, I had a panic version. But I just didn't crash. There was no Adam BSD, or BSOD. There was just continued driving. I was safe.

**Jerod Santo:** One of the reasons why I've been tentatively positive about this progress is because of how many accidents there are, and because how distracted and bad we are at driving, even though we are amazing, Elecia, to your point about the actual physicality of observing the world that we're in, and that connection between our hands and our eyes being just grounded in, I don't know, biology. We're pretty amazing computers. But I don't think these cars have to get so good to be better than us, because we have so many failure rates already. The failure rate's very high. That being said, it does seem fraught. It's always been 18 months around the corner for the last 10 years. There's progress being made. I mean, Waymo is opening in new cities; it seems like maybe a city-by-city rollout. And I believe they have LiDAR involved as well. It's working. They also -- I think they have a call center, I believe... And I could be spreading fake news, but I think they have actual humans, not in the loop, but available in order to take over a car if need be. That seems like a good fail safe. There's progress being made. But it does seem -- I don't want to call it an impossibility, but at this point I just don't feel like we're close.

**Adam Stacoviak:** Can we go back to my idea of this closed system? Like, is that even a possibility? To your point, Jerod, can we create a closed system?

**Elecia White:** Freeways and trucks.

**Jerod Santo:** Yeah.

**Elecia White:** Self-driving on freeways and trucks, I think, is a better possibility. Freeways have a much smaller number of things that can go wrong. And it is more of -- it's not a closed system, but it is a differently constrained system.

**Jerod Santo:** Right. And a smaller problem set.

**Elecia White:** I mean, if they had their own roads, it would be much simpler. Then it would be truly closed. And in the meantime, I think we can get closer on freeways more than anything. I mean, there have been a lot of -- most of the new cars now will have lane keeping, and keeping up with the person in front of you... All of the things that the initial full self-driving Tesla did, we can do now in my new Bolt. It is progressing, whether or not we call it self-drive, or if we just call it new safety features.

**Jerod Santo:** \[00:58:15.25\] Yeah.

**Elecia White:** I think it's getting there. And I like the idea of a closed system, but at some point you do go back to being a train.

**Jerod Santo:** And so you're laying track.

**Elecia White:** Or laying pavement that can only be used by this form of self-driving.

**Adam Stacoviak:** Right. Some sort of guardrail, parameters, boundaries, something that says "This is where you should be. And if you're not here, then you can no longer operate", or something changes to no longer be the danger possibility, so to speak.

**Elecia White:** We'll put sensors in the roads. We'll have it monitor the car in front of you. And humidity conditions. And then the sensors in the roads will talk to the cars. "Wait, wait, let me scribble this down..." \[laughter\]

**Jerod Santo:** I need to invest in a smart rock company, because we're gonna be selling a lot of smart rocks.

**Adam Stacoviak:** Yeah. Well, as we're knee-deep in this conversation, I was just thinking, one of the most probably globally known, most people have bought one at least at one point in their life, or want one, an embeddable system - is like a GoPro, for example. That dude who founded that company was just surfing, and was like "Man, I would love to film this." And he went away and did his thing, and now GoPro exists. And I'm just thinking like "Wow, this must be a proving ground for not just innovation, but potential future founders." This seems like a good place to go and not so much get rich, but like change the world in dramatic ways. I think GoPro has changed the world in dramatic ways. It's given you, let's just say, a camera view, obviously, of something dangerous. But then you have that GoPro effect, like "Oh, that doesn't look that steep", until you get there and you're like "That's pretty steep." This embeddable system world seems like if you want to go and invent something, this is a place to go and invent something. Because it's real. It's physical.

**Elecia White:** Yes. There are lots of times when it's like I have a problem, and I know how to fix it because I know how to wire things together. But I also have that same feeling in software, that sometimes I can invent something just pure software. I do origami, and I write Python scripts. I write very long and complicated NumPy scripts for doing origami. And I love that.

**Adam Stacoviak:** That's crazy.

**Jerod Santo:** What do the scripts do for you?

**Elecia White:** They create crease patterns, which I can then use a laser cutter or Cricut or other device to pre-score paper. Then I can fold along the wavy lines, which will give me origami that is not flat, that is patterned, and weird and wavy, in organic methods.

**Adam Stacoviak:** Does this exist in the world? Can you do that? Can you go buy that product right now?

**Elecia White:** No.

**Adam Stacoviak:** Well, then you just invented something.

**Elecia White:** I mean, there's curved origami out there, yes. Yes, there are other people who do curved origami.

**Jerod Santo:** This is just a world that I have not been introduced to, so I don't know it exists.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But yours is custom curved origami, that you want to make. And so your scripts give you the crease lines.

**Elecia White:** Yes. The scripts give me the crease lines, and they let me combine straights and creases in order to get tucks and weaves. And - I will go off the rails here... \[laughs\]

**Adam Stacoviak:** Go off the rails! You're allowed.

**Jerod Santo:** We're with you. We are with you. I'm listening.

**Elecia White:** \[01:01:58.23\] Adam was saying how you can invent things.

**Adam Stacoviak:** Yeah.

**Elecia White:** And I think you can invent things in software, too. And it's some of the same impetus, that you invent them because you want them. I had a stuffed animal that would Wi-Fi through the cloud to another stuffed animal, and when you padded it, the other stuffed animal would light up. And you could have this sort of communication to someone else.

**Adam Stacoviak:** What did the other animal do?

**Elecia White:** I would pat mine, and theirs would light up. They would pat theirs, and mine would light up.

**Adam Stacoviak:** Ah, I see. So there's like a --

**Elecia White:** It was like a goodnight sort of thing.

**Adam Stacoviak:** Yeah. Maybe for like brothers. They're in different rooms, like "Goodnight, brother" kind of thing. Not a walkie-talkie, it's more like "I'm petting mine, you're petting yours."

**Jerod Santo:** Right. You just know that somebody else is there, doing something. It's a connection.

**Adam Stacoviak:** Because it's a two-person system. Yeah, it's a peer-to-peer, with two peers.

**Elecia White:** Well, this actually went through the cloud, so it was more like you're in college and you're telling your parents you're going to bed.

**Adam Stacoviak:** Yeah. That's cool.

**Elecia White:** But yeah. All kinds of just... Yeah. Two people connecting quietly.

**Adam Stacoviak:** I think I'm liking this idea more now that we're talking about. I mean, I've always liked this idea, but... This idea of software paired with hardware that creates these newer experiences that isn't software-only. Like an iPhone or a computer screen or a browser software, which is like - maybe that's the kind of software I'm thinking of. But then I'm also thinking not just like GoPro, but I use -- so if you didn't know this, Elecia, I like to barbecue. And so I own a Traeger. A Traeger is a smoker, but it's basically a computer. It's an embedded system. Somebody wrote software to have sensors that says "How many pellets should I push through to maintain this temperature? What temperature is it in the ambient? What temperature is it at the burner?" And this thing that I just push the button, turn the dial, set it to 275 and wait an hour or two - that's a computer, an embedded system that somebody invented. Because they were like "Well, doing it with the old wood method was too cumbersome." It wasn't ubiquitous enough, because too many people didn't want to tend to fire. And so now Traegers exist as a smoker to give way more people access to push a button, oven-like control of a barbecue system.

**Elecia White:** Exactly.

**Adam Stacoviak:** That's crazy. I never really thought about this Traeger as this embedded system until this conversation. Obviously it is, but I'd never thought about the fact that I could have made that.

**Elecia White:** You could have made it.

**Adam Stacoviak:** If the things were more accessible. And I think a lot of this conversation is like how accessible is this technology to people, to lay folks like Jerod and I, or - we're seasoned in software development, but not in embedded systems necessarily.

**Elecia White:** But with an Arduino or one of these little micro Python, circuit Python boards, think about what you would need to do. You would need to -- okay, so mentally build the system architecture... You need to push pallets, you need to be able to tell time, and you need to monitor temperature. If you went online and looked up "How do I get a thermistor? How do I tell temperature?" Really easy. Like, that would take you three minutes. Wiring it is going to be easy, powering, it is easy... Doing the timing - a little bit of research on that will probably turn up that, you know, you don't care whether you're doing two hours in one minute, or one hour, or 58 minutes. So you don't have a big constraint between really good time, versus kind of crummy time, either way, as long as you're around two hours.

\[01:05:52.19\] And now you have to figure out how to push the pellets in in a way that's probably metal, because you don't want it to burn in plastic. You're not going to 3D-print this. And now you need a motor subsystem. And that's where things get a little complicated, but motors are very common, and you can buy the kit that just says "I want you to move here, and I want you to move there." And so you push the pellets in... Maybe you have another door closer thing. Now you're getting into the mechanical. And I do get intimidated by mechanical, but you have a unit that works. You can start to look at it and see "How does this work? What are the mechanical pieces that I need to be able to push, and close doors, and scoop pellets?" And it becomes -- you want to build this, so you build each piece, and then they all work together, and then it's done. And then you want to do firmware update, and you call me. \[laughter\]

**Adam Stacoviak:** Yes.

**Jerod Santo:** Love it. It seems like the -- you said you get intimidated by mechanical, and it seems like the pusher would be the hardest part of that. Maybe you could utilize gravity to just have an opener and shutter, versus a pusher, and then you're dropping the pellets in. I'm not sure how Traegers work, but...

**Adam Stacoviak:** Well, I know exactly how it works. I'll tell you. So there's a hopper. And the hopper, you fill it up. It uses gravity to --

**Jerod Santo:** So it just drops.

**Adam Stacoviak:** Yeah. As the pellets fall down, it falls into this space that there's an auger, and the auger just turns. And so it slowly just moves the pellets along the system. And so you fine-tune the temperature within the firebox based on the speed of the auger. So if you slow down the auger, no pellets feed it. If you speed it up, it speeds it faster. And you probably have some - maybe an algorithm or machine learning of like how the speed of the auger versus temperature control... And you're obviously maintaining temperature, but it's just literally a turning mechanism. It's not even smart, aside from knowing speed and temperature, and how speed affects temperature.

And the hopper is just the pellets are falling based upon gravity. So gravity did the work there. Thank you. No pusher necessary. And there is a sensor inside the hopper that will tell me if it's low, but I'm smart enough to know how much I put in there. I know when it's low. And my cooks are never that long where I need to literally monitor it, ever. I've never had to know if it's low. I think it's just a gimmick, really.

And in terms of time, I'm the timer. I mean, Traeger does have an iPhone app and an Android app that controls it, and you can set time, and stuff like that, and you can tell it to turn off... But that's a rich person's feature. Not everybody needs that. You really just need the ability to maintain a temperature for a sustained amount of time. Any barbecue person will tell you "All I'm teaching you is time and temperature. I'm not teaching you anything special about cooking food. Just time, how much time do you need, and at what temperature." So that's the recipe for cooking, is like you know time and temperature. And so the Traeger just basically does those two things. It's time and temperature.

**Elecia White:** And that mechanical is so much smarter than what I was coming up with.

**Break**: \[01:09:05.26\]

**Elecia White:** So Adam, what do you want to build next?

**Adam Stacoviak:** Geez, let's see... Birthday cards.

**Elecia White:** Birthday cards...!

**Jerod Santo:** Say more.

**Adam Stacoviak:** Yes... My family is a fan of singing birthday cards. And my son loves to take them apart; later I'll tell you a story. So my son is curious like this. He loves to take things apart and figure out how they work. And so he took apart a birthday card we got him. And obviously, you open it up and it starts to play the song, or whatever it's supposed to do. Well, he decided to take it out of the back of the package, discover the sensor, and discover this thing and this mechanism, and he decided to pull the wires out and put them in different places. He made this birthday card do things it wasn't intended to do for us. It was just meant to be open, do the thing, and it's a closed system in that regard. But he found out you can pull the sensor out, or whatever the mechanism is, and rewire it... And he made it do something different. He's like "Dad, look at this." I'm like "What is that?" He's like "It was my birthday card." That's kind of cool.

**Elecia White:** Okay. Chibitronics. C-H-I-B-I-tronics.

**Jerod Santo:** Okay.

**Elecia White:** This is away from the software, although they have little microcontrollers that it works with. So we can get to the to the music and whatnot. But what they've done is they sell these kits that have a copper tape, and you copper-tape around and you can make little buttons by having pieces of paper touch each other. You can make little sensors by having patterns of copper tape do different things. They sell stickers that are LEDs. So you put your copper tape up to one side, your copper tape to the other, and then you put it to power and you have a little battery. Usually the clips - what are they called? What would you call a clip like this...? Binder clip.

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** Binder clip. Yup.

**Elecia White:** You put a binder clip with the battery, and you make your own card like that. And it lights up, or you can have it do music... They have all of these different neat sensors. This is more on the electronic side. This is how people understand how do you go from battery through a circuit. And you don't need to know Ohm's law, and all of that. Kirchhoff's laws... That's not that important for this. It's really about you follow the copper tape to the different pieces, and you make neat lit things. And you can add a controller, which can then even add a little tiny motor, which can either vibrate, or it can move... Like, you do a paper engineering cut out of a butterfly, and it will gently wag the wings... Yes. Chibitronics. They're super-fun.

**Adam Stacoviak:** Chibitronics.

**Elecia White:** They were directed towards women at one point, getting girls interested in storytelling through electronics... But I don't think they are as gender-specific anymore, because I've been seeing lots of their new sensors and new systems being a little louder.

**Adam Stacoviak:** Okay. Since we're here then, I have to ask you... I'll just say one brand, and I want a reaction from you, Elecia. Crunch Labs.

**Elecia White:** Nothing. I'm terrible.

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** Nothing... \[laughs\]

**Adam Stacoviak:** Well then...

**Jerod Santo:** Ah, that's great.

**Adam Stacoviak:** So I don't know his name. I'm going to google real fast... Crunch Labs. The fellow that runs -- this is a very massive YouTube channel, but it's not a YouTuber, like a... I don't even know how to describe it...

**Elecia White:** Oh, I've seen this guy.

**Adam Stacoviak:** Oh, yeah. This is the coolest stuff ever. This guy used to work at NASA, and he is all in STEM, and all kids-focused, but he has his subscription box that you can get to like build different stuff. And as you're describing this - how do I pronounce this? Chibitronics... I'm thinking like "Wow, here's more kits that entertain and educate these --"

**Jerod Santo:** Oh, is this Mark Rober.

**Adam Stacoviak:** Yeah, Mark Rober. Thank you, Jerod.

**Jerod Santo:** Yeah, everybody loves this guy.

**Adam Stacoviak:** Yeah, I love Mark Rober. He's the coolest. I mean, he is -- I don't even know how he does what he does. He's amazing. He's living his purpose, for sure. But my son loves Crunch Labs, is so entertained about this stuff, and has become smarter because of Mark Rober. I mean, educational, curiosity, STEM, embedded systems, I'm sure, electronics... Rube Goldberg things etc.

**Jerod Santo:** Sure.

**Adam Stacoviak:** Just all this cool stuff. So I thought you might know Crunch Labs.

**Elecia White:** I don't, but I'm gonna sign myself up. I love the little robots. And they had a crossbow... How do I get the crossbow? \[laughter\]

**Adam Stacoviak:** \[01:16:03.18\] "How do I get the crossbow?" That's great. And these kits - they come on this, frequently. So I was thinking -- what made me think about Crunch Labs was the monetary accessibility of the Chibitronics... And you know, building these things that no one else seems to be doing, to -- I mean, at some point you've got to want more people in your field, right? You're probably lonely, to some degree, in your field. You want more folks who have the same drive and curiosity as you do... And the only way you get there is by inviting them in.

**Elecia White:** Yes. And my field was so lucky to have Arduino, because it really drew a lot of folks to be interested, both in electronics and embedded systems, but also in software. And there are the Chibitronics, and some of these other robotics kits... First Robotics is just wonderful. That's the competition for middle and high school students. And what the kids learn is just -- I just want to hire all of the First Robotics engineers. Because once they get into the robotics and they start understanding how the mechanical and electrical and software all work together to make the robot move, they get a systems understanding that's really hard to teach.

**Jerod Santo:** We've gotten so many amazing links from this conversation. Are there others, if we're like "Elecia, what's another cool thing?" You just showed us Chibitronics first... This firstinspires.org is the First Robotics people. Adam pointed us to Crunch Labs... Of course, we have MicroPython, Adafruit, the Wokwi... What else have you got?

**Elecia White:** Hackster.io, Instructables.com, and Hackaday.io.

**Jerod Santo:** Oh, Hackaday I'm well aware of. What was the first one you said?

**Elecia White:** Hackster.io...

**Jerod Santo:** Hackster.

**Elecia White:** ...and Instructables.com. And I'm grouping these all together. Even though they have very different flavors, they are all places you go and tell people about your projects.

**Jerod Santo:** Nice.

**Elecia White:** As an engineer, it's like, okay, I'm learning to document. This is why I tell people to use these sites, because I want them to learn how to document and reproduce their projects. But as somebody who's doing it, as somebody who's excited about it, it's getting to show off what you did.

We don't always get to go to these hackathons, or to these hack meetups where you get to bring your project... But this lets you connect to people who are maybe in the same boat. Maybe there's a competition for a Nordic dev kit, and so everybody's looking at the same set of sensors... And you get to see what other people's ideas are. But you also -- you know, they all have community aspects, where you can talk about what you're doing and talk about what you want to be doing... As well as demonstrations where other people have said "This is what I did, and these are the steps so you can reproduce it", in case they have a new project.

**Jerod Santo:** Love it.

**Adam Stacoviak:** Where's this going? This kind of thing. Showing off is kind of cool, right? I'm looking at this one here on Instructables, in the Circus section... Because it lets you see things like crafting, and cooking, and living... So there's more than just simply this embedded world there. It's a sleep cycle lamp, and I'm seeing this lamp with a common shade, probably a similar -- or sorry, a very small board beneath it that's powering this thing, and probably basing it on time it's doing different sleep cycles, colors, tones etc. But I'm thinking like "Man, where could this world go, where you have infinitely accessible Lego-like things?" Not so much Lego itself, but how you can take this part, pair with that part, and make a product, or create something new, or invent something new. Where can this go? Where's the future going for this?

**Elecia White:** \[01:20:20.10\] Like you have this idea and you want to market it?

**Adam Stacoviak:** No, no, no. More like you. Where do you think -- I mean, given your knowledge of embedded systems and where you've seen it go, what's next for, I suppose, this world of... From the simple hobby project to underwater things with sensors, looking at dirt moving around... You know what I mean? It's such a chasm, but like, where is this going? It's a big question, I'm sure.

**Elecia White:** I mean, it's going everywhere. I fought against the term internet of things for so long, but that's what it is. Like, everything wants to be on the internet, wants to help you be better, or do something different. And I don't love all that. I mean, I don't need everything I have to be on the internet. But having two stuffed animals essentially on the internet, talking to each other over distance - it turns out to be kind of cool. The applications turn out to be really interesting. The ability of my doctor to see if I'm using some medical device they've prescribed... Okay, that gives them more tools. If it's not okay with me, then I make it not okay. But it gives other people the opportunity to engage with us if we want to, or to monitor elderly folks. Or to teach kids to read, or... Adam, I have to say, it's going everywhere.

**Adam Stacoviak:** Yeah.

**Elecia White:** And I'm not sure that's the best thing, but it's also going into all kinds of science. One of the projects that I worked on a year ago, two years ago, that's going out this year, is they're just gonna chuck these boxes into various rivers around the country, and be able to monitor the environmental DNA. So they would know if an otter moved into this river before anybody could see if they were actually there yet. And they can also monitor things going wrong... Like, human DNA being in the water too much is bad. The Internet of Things... That's where we're headed. And it may not be great, but some things will be great.

**Adam Stacoviak:** So embrace it, right? You've lamented your fight against IOT, but... Just embrace it, basically?

**Elecia White:** Be aware of your security. Be smart. You don't let strangers into your house just willy-nilly.

**Adam Stacoviak:** Yeah.

**Elecia White:** Maybe look at the names of the companies you're letting into your house, and make sure that they have nice friends, and good references, and all of that... Because you don't want to create bot networks or allow people to spy on you. So when you do engage with the Internet of Things, do so wisely. And it's not just people in their houses, it's companies, and UAVs. You need to know where you get your UAV from, because some of them report back to their home countries. And that's kind of scary, depending on what you're doing. If you're using it to take pictures of the beach, who cares? If you're using it to map your new mining prospect, I don't know if you care.

**Adam Stacoviak:** \[01:24:12.17\] Yeah.

**Elecia White:** But you should think about it. Security is unfortunately the downside of IoT. It's also the S in IoT, which is to say "You really need to think about it for yourself."

**Jerod Santo:** And privacy too, which those two are, you know, kind of eternally linked, aren't they now? Because being able to throw a smart rock into a river and monitor things is awesome. But being able to throw it into my pool and monitor my swimming, maybe not so much. Just for instance, you know?

**Elecia White:** Yes, there are a lot of downsides to this.

**Jerod Santo:** The internet of things... And also, for IoT makers out there - just leave us physical buttons. Let us opt out every once in a while and just use the dishwasher without having to launch an app, for instance...

**Elecia White:** Oh, yes...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** For instance, yes. I take it your dishwasher requires you to use an application or something, Jerod?

**Jerod Santo:** No, that was just a for instance. I'm sure somebody's does.

**Adam Stacoviak:** Yeah. Well, I have LG washer and dryers, and I can tell you when my washer is done and when my dryer is done. And I can tell it to start drying something right now, if it's on. So that one's safety -- security and safety. Maybe the similar S'es... It's that I can't control it from afar or remotely if it's not on currently. I can't power it on and power it off. I can only instruct it if it's been previously human-touched, like recently, kind of thing.

**Elecia White:** And would you have paid for those features?

**Adam Stacoviak:** Apparently, I did.

**Elecia White:** I know. We did too, but I would have never meant to pay for those features.

**Jerod Santo:** No. I never want almost any -- like, sometimes you're like "Oh, this actually is kind of nice." Once you start using the feature. You're like, "Yeah, I kind of appreciate this." But it was never --

**Elecia White:** When the dryer's off, it's kind of nice.

**Jerod Santo:** Yeah, it never has sold me on any piece of appliance.

**Adam Stacoviak:** So the one thing I would say about that that I've appreciated - because I try to be not the person who only complains, I try to be the person who appreciates pretty much any scenario. I do my best; I'm always the greatest at it... It's that it's a different interface to a simple interface that doesn't make any sense. And so the iOS application actually makes a bit more sense to use its advanced features, like the dry clean version. There's a dry clean setting on the dryer, for example. It hooks to the water, and it can humidify the air kind of thing. It can do some cool stuff. That feature is not easily accessible on the device itself. I mean, you can; it's just harder to like map your brain to like "Okay, push button, go." Whereas the iOS app is a bit more easier to use. I think of it like a different interface to this thing.

The notification is -- I turn that off in most cases. I actually don't have it on, unless I'm washing clothes personally. And when I say that, I'm like -- I don't usually wash our clothes. So I'm that person who gets to just sit back and enjoy life, for the most part.

**Jerod Santo:** You'd better not be complaining then...

**Adam Stacoviak:** Until I have no more underwear, and then I'm like "Oh my gosh, I have to wash my own clothes now."

**Jerod Santo:** Then you're checking the status at all times.

**Adam Stacoviak:** That's right. Notifications on, thank you.

**Elecia White:** I mean, the app does give you more information than could possibly fit on the front of your washing machine.

**Adam Stacoviak:** It does. Yeah. So that's how I look at it. It's like, I wouldn't have paid for that feature. I think I did because I bought it, obviously... I didn't buy it because of that feature, and I'd say that it's a nice to have, not a need to have... But it is nice to actually have, because I've used some of the advanced features via the iOS app, and I've -- it's just a different way to interface with the device, that's actually better and easier.

**Jerod Santo:** \[01:27:53.28\] But you know, those bits of information that they're showing to you can also just seep out of your local area network, and into the hands of somebody.

**Adam Stacoviak:** Adam is washing his clothes again. Get him.

**Jerod Santo:** You know? Someday you're gonna get an email from a hacker and he's gonna be like "Adam, you're out of underwear."

**Adam Stacoviak:** Yeah. "Hey, listen, you probably should wash your clothes... It's been about two months since your dryer's dried anything. Clearly you're out of underwear at this point. I've checked your Walmart checklist for your underwear, or wherever you buy your --" I don't buy my underwear from Walmart, but I just said that.

**Jerod Santo:** TMI, dude.

**Adam Stacoviak:** Just so you know, okay?

**Jerod Santo:** Alright, Elecia... I assume the website is embedded.fm. Where else can folks connect with you?

**Elecia White:** You can get Embedded from any of your regular podcast sites. And if you are faced with one that is Embed in all black and looks scary...

**Jerod Santo:** Don't do it.

**Elecia White:** We're the one with the robot.

**Jerod Santo:** Look for the one with the robot.

**Elecia White:** It's like a little robot head; robot head, slash radio, old-timey radio... So that's us.

**Jerod Santo:** Nice.

**Elecia White:** You can get my book. It's called Making Embedded Systems, and it's in second edition. It's from O'Reilly. It's on normal Amazon and bookshop sorts of places. If you're interested in making embedded systems, it's a -- the goal is for hardware engineers to understand more about software, and for software engineers to understand more about hardware, and how to design and make embedded systems.

If you want to contact me for consulting, I think the answer to that is please don't. \[laughter\] Please don't...

**Adam Stacoviak:** Please don't? Is that right?

**Elecia White:** We're booked... We're booked for like a year. It's great.

**Jerod Santo:** Congrats.

**Elecia White:** And yet I always love to hear about neat things people are making. So if you want to tell me about your embedded system, hit the Contact link on embedded.fm, or email me at show \[at\] embedded.fm, and I'm just fascinated by the technologies coming out.

**Adam Stacoviak:** Very cool. Any conferences or like IRL places? I know you mentioned several digital ones, which we've definitely collected and we'll put in the show notes... But is there anywhere that's like common? Like, is there an Embedded Conf or something like that, where it's, you know, international or accessible to folks?

**Jerod Santo:** Like the one you can't miss kind of event?

**Adam Stacoviak:** Yeah, like you must go there. If you're really getting into it, you must go to this conference kind of thing.

**Elecia White:** This is another one of those areas where there is a good hacker subset, and there's a professional subset, and they don't quite overlap. I will be keynoting the Embedded Online Conference in May of 2025. Please don't ask me what my talk is about, I don't know yet. But I will really soon.

**Adam Stacoviak:** Embedded things.

**Elecia White:** Probably sensors. And for the hobbyist, or - see, it isn't just the hobbyists. I've gone to Supercon from Hackaday; I would happily go to Teardown. There's Open Hardware Summit... There are a ton of really fun places where people will show you how to get into embedded systems, or hacking devices, or making cool things.

There aren't as many professional conferences, unless they're about certain topics, like Zephyr, or security. Hardware.io is one of the international conferences that's pretty popular, and more security-based. I can't think of any other ones, but I know I will when we get off, so I'll send you an email and you can provide links.

**Adam Stacoviak:** For sure. I know IRL is important to folks... We can obviously shell out lots of digital locations to hang, but IRL - can't beat that, right? Real humans, real people, real fun.

**Elecia White:** \[01:32:05.00\] Really?

**Adam Stacoviak:** I think so.

**Jerod Santo:** \[laughs\] Really?

**Adam Stacoviak:** Maybe not. Maybe not.

**Jerod Santo:** To each their own, as they say.

**Elecia White:** I'm kind of an indoor cat.

**Adam Stacoviak:** We'll have to get some sensors for that, and maybe a motor to judge it.

**Jerod Santo:** There you go. Or one of those things you can touch that we know Elecia is still there.

**Adam Stacoviak:** That's right.

**Jerod Santo:** And she can just send a sensor to the conf.

**Adam Stacoviak:** "Still here."

**Jerod Santo:** Like light up a light. You know, blinking lights. We hear you like those.

**Adam Stacoviak:** Yeah, for sure.

**Elecia White:** As long as they're blinking for other people...

**Adam Stacoviak:** Well, Elecia, thank you for your curiosity, too. I know that sometimes you're going alone, right? Sometimes you're just in the dark. But now you're not, obviously... You're book-solid with your business, you've written books, you've come on this podcast, and you're doing cool stuff, so thank you for sharing all that with us. It's appreciated.

**Elecia White:** Thank you for having me. Your podcast is a lot of fun.

**Adam Stacoviak:** Well, thank you.
