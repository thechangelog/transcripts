**Jerod Santo:** So we have Mike Riley here, the author of Portable Python Projects. Run your home on a Raspberry Pi. It should be a fun conversation. Welcome, Mike!

**Mike Riley:** Thank you! Glad to be here.

**Jerod Santo:** Glad to have you. Happy to nerd out a little bit on some home automation topics. Adam, you're big on this stuff already, aren't you?

**Adam Stacoviak:** I would say I aspire to be big on it...

**Jerod Santo:** Right.

**Adam Stacoviak:** Not quite there yet. I think after peeking at Mike's book I feel like I should learn Python much more than I currently know it. I think so far I'm more of a Docker dabbler than a Python scripting automate-my-home dabbler. So I aspire to it.

**Jerod Santo:** Okay. That's a good place to be. We have an expert here who's gonna teach us all the ways. I also have aspirations, but I have not actually dipped my toe in the water whatsoever. I'm a guy who has a couple of ideas that I would like to do, and so happy to have you here, Mike, because I think one of my ideas is darn near directly in your book, or at least close enough that I could port it. But let's start with you, Mike. Tell us about yourself, tell us how you came to write this book.

**Mike Riley:** Well, this is my fourth book for Pragmatic Bookshelf. My first book was actually another home automation book called "Programming your home." That was written almost ten years ago, and that was at a time when Pi's were just sort of on the cusp. They hadn't really been put out there as a dedicated system that could be running these kinds of things.

\[00:04:07.17\] At that time it was Arduinos, and servos, and you didn't even have things like the home assistants like Alexa or Siri. So a lot has changed in ten years. But at the same time, some of the things haven't changed, and one of the big reasons I wrote the book was because as I saw this proliferation of different home automation kits that were coming out, that were closed environments; they were single, "Buy this from unknown manufacturer, with unknown support, and plug it into your home and just trust it to do whatever it's going to do, regardless of what data it's gonna leak, or where it's gonna send that data to." And I saw a lot of that, particularly - you know, you can buy things like that from Amazon and various other online retailers, that don't tell you about the risks that are involved with that, or doesn't give you much of an understanding of what is happening on the backend.

So I felt that it was time to revisit some home automation, and really put the power back into the end user. And the Pi is a great platform to do that, because it allows -- it's really designed for home enthusiasts, and it allows you to not understand the operating system that's running on it, but all the interfaces that are connecting to it. And because it's a learning system, it's really optimized for that experimentation, automation, exploration.

**Adam Stacoviak:** Yeah. I think the Raspberry Pi is a revolution. It's the beginning of a revolution, basically, because it really gives you this tiny little machine that doesn't require necessarily a screen and a keyboard and all the things; you can simple SSH into it now... It kind of provides that you are more in line with our core audience, which is \[unintelligible 00:05:48.17\] but this enthusiast is almost semi-developer, in a way. You can do some developery things. You can know that you have a terminal or a shell, or something like that in your operating system. It could be Windows, it could be Mac. But this idea of tapping into Linux... There's so much documentation out there for Linux. There's an immense amount of documentation and YouTube videos for Docker... So even getting to Docker Compose, and fiddling with a lot of the stuff you can do with a Raspberry Pi and a Linux machine like it is - it's just such a small piece of nothing, basically. I just can't even believe it's even possible, really. You used to have to build or buy this really expensive machine... And in terms of cost, maybe the Pi is expensive now, I don't know; or even hard to get, because of supply chain issues and whatnot... But it's generally like a sub-$150 all-in. $150 US all-in. Maybe you get your SD card, you get potentially even an SSD if you really wanted to, which isn't required... But for that little bit of money you get this tinkering machine that just really can open up the world to you.

**Mike Riley:** Well, in addition to that, you think about a rack-mounted server from 20 years ago; it is now somewhat equivalent to that Pi. So just like the old days, when they used to talk about computers filling a room, or being the size of a refrigerator - it's the same kind of miniaturization that's happened here, which is also great for letting it just run continuously, because the power requirements are so low so that it's something that you can have work for you while you're asleep. In fact, one of the projects in my book really compiles and does a text-to-speech audio translation so that it compiles various news sources or RSS feeds that you prefer, and puts that into an audio feed ready for you to listen to in the morning... And you did all that while you were asleep. I use that every day, actually.

**Jerod Santo:** \[00:07:52.01\] That's so cool. What struck me about the book is how much of the time you spend in the hardware selection, and like "Here are some hardware stuff you should know", and then the software setup... Because when Adam talks about not knowing that much Python - I was struck by how little coding you have to do. Like, there is code to write, but even your water leak notifier project, the test script is like 12 lines of code... You know, there's coding to do. But it's very accessible... You're really kind of gluing together other people's projects. I'm sure that your text-to-speech engine - you didn't write your own neural networks to get that done.

**Mike Riley:** Yup.

**Jerod Santo:** So a lot of it is like the know-how, getting started, getting it set up, understanding the command line, Linux a little bit, gluing some things together, and then kind of like step-by-step wading deeper into it, and writing a little bit of glue code... And then of course, once you get that working, your mind starts to really move and you're like, "Okay, now what can I do?" So it seems like it's both fun, and I think approachable. You don't have to be a full-time software engineer to do these kinds of things, right?

**Mike Riley:** Right. And in fact, that's the reason I also selected Python for the book, was because of the fact that it is so easy to get up to speed. As you commented earlier, there are literally thousands of actually pretty good tutorials on YouTube and various other sources on the web that teach you the basics of Python. And once you've got the basics down, you can pretty much put together a lot of this capability with just a few lines of code. And that's what I really stuck with the book, was to make it as simple and painless as possible.

The other thing I also stuck with was particularly on the hardware side - you know, the first book that I did had a lot of wiring diagrams, because you're actually putting the \[unintelligible 00:09:37.21\] wiring certain servos and other electronic products together to make certain things work. Well, again, now, ten years later, a lot of that stuff has been made relatively simple and straightforward. So for me, I was really trying my hardest to make sure that there was not going to be a breadboard or a wiring diagram anywhere in the book, and I think I've succeeded with that. Because most of the products are off-the-shelf, and you just plug it in and you're able to talk to the device.

**Jerod Santo:** Yeah. I think that's important, because on the hardware side, for me at least, and probably some other people as well, as soon as I see soldering, or diagrams, I'm pretty much just out. I'm just like, "Yeah, that's for other people that aren't me." I'm not an electrical engineer, I don't really have that tinkerer's spirit. I know lots of people do, and they love that kind of stuff... But I need a little bit higher up on the hardware side, and it seems like what the Pi has done is kind of brought that stuff to more people...

**Mike Riley:** Absolutely.

**Jerod Santo:** ...which seems really cool. So help us out with the hardware then, specifically -- maybe we could outline a few of the projects that are in the book, some things that we can use as talking points. I already talked about the water leak notifier, which is neat... You talked about the RSS feeder/announcer thing... Maybe outline a few of the other projects; generally, the kind of things that you're gonna be doing, the sensors that you need, and then we can talk about what Raspberry Pi do I buy, and that kind of stuff.

**Mike Riley:** Well, let's actually start with the Pi. If you can get your hands on it, I would recommend going with the Pi 4. And if you can get it, the 8-gig, just so that you future-proof yourself... Because I've found over the years, as I bought Pi right from the first version all the way up to the fourth release, that I've always run out of resources on it... It's just the nature of the Pi. Particularly if you've only got like one or two Pi's available. Now, I've got quite a library of my Pi's, and I've actually started to recruit some of my old Pi's that I have decommissioned a while back, because of the supply chain constraints.

But that being said, if you can't get your hands on it, you can try to go with the Pi 4. That being said, the book will work with a Pi 3, or even a Pi 2, but I do recommend at least a Pi 3 at minimum, because of the capability of running 64-bit applications. The days of 32-bit apps are like the days of 16-bit apps - they're going away, and most newer distributions and applications are 64-bit-enabled. That's just the reality of the world today. So if you can get at least the Pi 3, that's a great start. But preferably a Pi 4.

\[00:12:13.28\] All that being said, in terms of hardware, you'd mentioned the water leak notifier, and I also mentioned about minimizing any kind of breadboard. Well, the water leak actually does have a detector that detects leakage, which is really just two metal surfaces that determine whether or not there's a connection between them. And of course, water will allow that conductivity, so that if there's water between the two sensors, then you've got a water leak.

So that actually has just two wires, but you can actually connect those wires directly onto the pins of the GPIO pins on the Pi. And I tell you which ones they are in the book, and it's really simple that you can then just poll those pins for any change, any state change. And once there is, then I show you how to cook that up to a notification mechanism which is for the most part email... Although I do do other projects where I use the Discord API to be able to send messages through Discord etc. But for the really simple stuff - again, try to keep it as basic as possible, so that there's not a lot of overhead, you don't need all of this additional knowledge or additional resources on the web to be able to utilize the surfaces. So just go with HTTP, SMTP, the basic protocols, and then when you're ready to start to go further, then you can hook into things like the Discord API, which takes a little bit of getting used to, but once you get a hang of it - I actually use that in two different projects in the book - it's actually pretty straightforward.

So just like everything in the world of development, DevOps, once you've done it once, it's fairly repeatable after that.

**Adam Stacoviak:** Mm-hm. There are a few flavors of the Raspberry Pi though. So you recommend the model B, 4. Is that what it is?

**Mike Riley:** That's right.

**Adam Stacoviak:** And they have, I believe, a compute module, where you can extend it and do different things; add a graphics card, and all this extra stuff. So you can essentially treat the -- I think the compute modules, like the Raspberry Pi 4 minus the IO, essentially. You've got Ethernet, USB... Those things go away, and all you simply have is just a compute module, which connects to other boards. And there's third parties out there, there's tinkerers out there and hackers out there that are building their own boards, that adapt, and work with the Pi and just extend... So if you wanna do Jeff Geerling, I'm sure you're probably a fan and aware of Jeff...

**Mike Riley:** Oh, yeah...

**Adam Stacoviak:** He's got an amazing YouTube channel, I've followed him for a while now... And if you wanna go to the absolute fringe edge of the Raspberry Pi and its capabilities - check out Jeff, because he's an adventurer, for sure.

**Mike Riley:** Oh, yeah.

**Adam Stacoviak:** But there's this landscape where you can start very simple, with the board that has the IO, which is the Raspberry Pi 4, or you can go the compute module route, which gets you additional possibility... Would that be the easiest way to describe it?

**Mike Riley:** Yeah... And again, the compute board is really for a different use case. But the Pi 4 has the various USB, USB-C, Ethernet, like you mentioned... All the ports that are necessary; plus, of course, it's got Wi-Fi and Bluetooth. Now, if either because of supply chain constraints you can't get a hold of Pi 4, or you're just looking for something that's a little less expensive... Because you know, even the top-end Pi 4, even before all the difficulty of trying to get a hold of this hardware, was still in the close to $100 range... Which, you know, still, for a full-blown Linux computer is fairly cheap, but then again - people with a limited budget, or they just wanted to start testing the waters, there's the Pi Zero 2 W, which is also a phenomenal piece of technology. It's about the size of a gumstick, and while you don't have the pins mounted on the board, they're easy enough to put on the board with either an attachment; or if you don't need them - you know, a lot of people, if they aren't interfacing with the GPIO pins, it's really not that big of a deal not to have those pins actually mounted on the board.

\[00:16:09.26\] But all the other limitations I can think of with the PI Zero 2 is the fact that it does not have on-board Ethernet. But if it's just a Wi-Fi device, I've got several of them throughout my house, just because of the fact that the Wi-Fi connectivity is...

**Adam Stacoviak:** Solid.

**Mike Riley:** ...solid throughout the facility.

**Adam Stacoviak:** Yeah. I can't trust the Wi-Fi-only versions. I have to have that Ethernet port myself, personally... In fact, the way I power my Pi's in particular is with a PoE HAT.

**Mike Riley:** Ah, yes.

**Adam Stacoviak:** And so --

**Jerod Santo:** I was gonna ask about that... Because I would love to have PoE on these.

**Adam Stacoviak:** Yeah, exactly. And that's what you're gonna wanna do. Raspberry Pi - they have their own branded version of it. I think there's some after-markets, or whatever... But they all work. I think I have an after-market version of it, and so...

**Jerod Santo:** So you call it a PoE hat? You put a hat on it?

**Adam Stacoviak:** Well, it's a hat because it goes onto the GPIO... What's it called, Mike? Is it GPIO?

**Mike Riley:** Yup.

**Adam Stacoviak:** Yeah, GPIO pins. So it sits on that GPIO pin and powers itself via that. So it accepts the power of \[unintelligible 00:17:07.15\] and I believe it's three volts, or something... Something less than five volts. It's not very much. And that's how it powers the Pi... Rather than going through the normal power route, which is the power adapter.

**Jerod Santo:** Right.

**Adam Stacoviak:** So I prefer that route, because it's less wires; it's just an Ethernet plug.

**Mike Riley:** Yup. Plug it in.

**Adam Stacoviak:** It's simple... I understand though if you really push the edges of this Raspberry Pi though, that if you're powering via PoE that you can have some power limitations... So if you have an SSD drive attached to it, or other things, or maybe a RAID of SSDs, for example, you're gonna probably hit some power issues, so you need to go power adapter. But for my use case, the main thing I use it for personally, which I haven't - as I said before, I aspire to get more tinkery and do this stuff... But thus far, I am simply a Pi-hole user, a Plex user, that kind of thing... Maybe a Portainer user, for example. That's the extent I've gone so far. I wanna get into home assist and all these other fun things, I just haven't found the time to really dig deep into it. But one can dream, basically.

**Mike Riley:** Well, you're a lot further along than a lot of Pi users.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** So it seems like - okay, so the Raspberry Pi 4, if you bought like a maxed-out one, would it be the kind of purchase where you could run three, four, maybe five different automation things on it? Does it have that kind of power?

**Adam Stacoviak:** For sure.

**Jerod Santo:** Or would it be like, "Well, I kind of run one per home automation project"?

**Mike Riley:** No, if you've got that 4 with the 8-gig, you'd be able to run all the projects in the book, and then some.

**Jerod Santo:** And then some.

**Mike Riley:** There's just plenty of growth space. And that's why I say, to be able to future-proof it, if you can get that 8-gig version, that's what I'd recommend.

**Jerod Santo:** Yeah. So it seems like the horizontal scaling, if you will - the buying of more Pi's - is more tightly coupled to your sensor distribution throughout your house. Like, if you wanna have a sensor in this room and a sensor in that room, you're probably gonna have to have two Pi's... Or I guess you could run long, little, low-energy sensor cables... Is that the way it is? Like, if you want one in your office and then one in your bedroom, sensor-wise, whether it's you wanna make sure there's no water leaking into your place, you've gotta have two in that case?

**Mike Riley:** Yeah. And again, that's where I use the Pi Zero now. Unlike Adam, my Wi-Fi is pretty solid, so I can for the most part trust that I've got a good, strong signal consequently.

For one of the projects in the book, which I've actually got in the back - that little fan back there... When things get a little warm in the room, it will automatically kick in. So it's basically a very simple, straightforward thermostat...

**Adam Stacoviak:** What...?!

**Jerod Santo:** Nice...!

**Mike Riley:** And so what I've got is that connected to a Pi Zero 2. Sitting on top of it is the temperature sensor that tells me when -- if it gets too warm, I'm going to trigger that Hue lightswitch that is going to enable the electric power to turn on the fan. And then when it starts getting cooler in the room, the fan will turn off.

\[00:20:06.16\] So all that is automatic. I don't even have to think about it. So it's a great little home automation that comes in quite practically.

**Jerod Santo:** That's a baller move right there.

**Mike Riley:** Yeah... And then that same Zero actually controls an older TV of mine that is not internet-enabled. It's got an old IR plaster that you turn it on and off... But again, I've made it internet-enabled by using the project in the book that I show you how to use a simple USB-based IR transceiver, that does both send and receive, but in my case I'm just sending... And then I send it the proper IR code to turn on the TV and turn it of. And I've hooked it up to my Google Home, so that I can just say "Hey Google, tap the screen." \[Tapping the power button on the TV and soundbar\] Yup, that was Google responding, saying "I've just turned on the screen for you."

**Adam Stacoviak:** There you go.

**Mike Riley:** So now my TV is on. \[Sorry, I didn't understand.\]

**Jerod Santo:** Oh, she's still listening to you. She's back there still talking. \[laughter\] That's awesome.

**Adam Stacoviak:** Cool. What's the connectivity from the Pi Zero 2 to the TV? Is that Ethernet? What's the connection?

**Mike Riley:** No, it's Wi-Fi. And then the transceiver, the USB transceiver is \[unintelligible 00:21:17.18\]

**Adam Stacoviak:** Okay.

**Mike Riley:** So it's all wireless.

**Adam Stacoviak:** Oh, I see. So it's actually doing the connection via the IR blaster, essentially.

**Mike Riley:** Correct.

**Adam Stacoviak:** Okay, interesting. And the Pi Zero 2 is essentially the smarts of the non-smart TV.

**Mike Riley:** That's right.

**Adam Stacoviak:** Okay.

**Mike Riley:** Just basically listening for that state change.

**Adam Stacoviak:** Yeah. This might push a little further, and maybe this is not even on that device, but at some point I guess you could probably -- is there like an Android Fire stick, or something like that? Is there a software version you could put on the Pi Zero 2, or would you somewhere else have a media server on your network?

**Mike Riley:** Yeah, you could do that. I mean, the Pi Zero 2 though doesn't have the processor capabilities. I see in certain projects run like a Gameboy emulator for instance on them - that really is pushing the capabilities of that processor. What I have done though is that on some of the Pi Zeroes that are just kind of sitting idle most of the time, like the water sensor, for instance - well, only on those rare occasions where I do have a water leaked trigger that it's actually gonna do some useful work. But in the mean time, what I've done is I've set up a Git server on it, so anything that I wanna post into my private network for whatever Git -- and that could be everything from code that I'm working on, or another book project, or just something that I'm writing up for articles etc, I can just make sure I've got a backup, so that it's always ready to go in case there's any kind of failure on my primary system.

So there's so many things in the multi-purpose capabilities of the Pi... Open it up to more than just specific projects, whether it's gonna be a media center, or if it's going to be a home automation sensor. Use it for a lot more things. And as long as you've got the resources available, take advantage of it.

**Jerod Santo:** So here's a question... Going back to your fan now. So here's a use case I have, which is we have a freezer in the basement, and every year we buy a quarter or a third or half of a cow, and we put it in that freezer. So I've got a lot of money wrapped up in that freezer, right? For a year, that's like our meat, for the family, for the year. And one of the things I desperately wanna know is if for some reason that freezer stops working, and I wanna know right now, before that meat goes bad - is that the thing you can wire up? I think you could use a temperature sensor to do exactly that.

**Mike Riley:** Absolutely. You got it. You basically take the same kind of approach that I did with the thermostat, with that fan. You just kind of reverse it. In other words, what you do is you take that temperature sensor, put it into your refrigerator or your freezer... And obviously, you would have to do some creative thinking about how you'd wanna do that, because the leads are fairly thin; they shouldn't interrupt too much with regards to the seal for the freezer...

**Jerod Santo:** The seal, yeah.

**Mike Riley:** \[00:24:00.26\] But once you've got that lead put into it, then it's just a matter of monitoring the temperature, and then if it reaches a certain threshold on that temperature, send yourself a notification, either whether it's a WebHook, or if it's going into one of these different IM systems, like Teams, or Slack, or Discord, send you a notification that way. Or just a plain email. And you'll know about it.

**Jerod Santo:** What's the easiest notification system for one of these? It seems like it'd be email, or maybe you could use Twilio for SMS, or something... But maybe SMS is the easiest.

**Mike Riley:** You could, although - again, anytime you start to rely on a third-party service, that's when things get... You know, not only do you have to worry about things like their availability, but you've also gotta deal with terms of service, and other aspects. A lot of these services, the reason they're giving it away for free is so that they hope that eventually you'll upgrade to bigger and better services.

**Jerod Santo:** Right. And the last thing you want when your freezer is broken is for your Twilio account to have been suspended, and you didn't notice.

**Mike Riley:** That's right.

**Jerod Santo:** And you don't get that desperate SMS message. So keep it simple, keep it local maybe, if you can...

**Mike Riley:** Yeah. Yeah, that's the other thing you could do - you could use another project in the book that utilizes the Philips Hue lighting system, so that if that threshold is exceeded, then you can have a light that turns on... And if you've got the colored lighting, you could make it a red light. You could even make it pulsating, so that when you come into the physical area, you'll see that red pulsating light saying "Oh, I've got a problem."

I actually wrote an article about this similar type of scenario... It was a Medium article. And it was basically using Grafana. Because I was making sure that I've got a constant internet connection. And if the internet connection went down - well, rather than hearing from my family, "Hey, there's no internet", I automatically get a red alert with the lighting that I have, strip lighting I have across my room here, which will pulsate red when Grafana says "Your internet has been down for more than a minute. You may wanna check on things." So I know about it visually before anybody else does.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Nice.

**Adam Stacoviak:** That's interesting.

**Jerod Santo:** I love that.

**Mike Riley:** Thank you!

**Adam Stacoviak:** I wonder - in Jerod's freezer/temperature scenario, if an alternate could be confirming the existence of power. Because if your power is non-existent... Because I have a similar scenario, Jerod - I have a fridge outside. It's not a year's worth of meat; sometimes it's champagne, sometimes it's wine...

**Jerod Santo:** Still. Perishables.

**Adam Stacoviak:** ...but obviously, we buy that. Yeah, it's very coveted perishables, basically. And it's in my outside refrigerator, so I'm not out there getting into it on the daily. It's more like once a week, or a weekender thing... Maybe it's got some kids' sodas in there, maybe it's got some juices in there, maybe it's got some beers in there... Who know. But it's an outside thing, and it's usually a GFCI issue, where it tripped it somehow; who knows why. I wonder if maybe there's a way to confirm power vs. temperature, if there's a flipside to that, essentially.

**Mike Riley:** Well, there are sensors that will monitor power. The problem with most of them though is either they are complete closed black boxes, which require some sort of subscription service, and it's actually a plug that goes into your outlet...

**Adam Stacoviak:** Between the two, yeah.

**Mike Riley:** Exactly. And then that's monitoring. But again, that's sending out to a cloud source, which - you don't know what they're doing with the data, because they're fairly opaque about what kind of data they're collecting, and what their terms of service etc. are.

The other thing I've seen is where it connects actually directly into, say, your fuse box, so that you can monitor power throughout your home. But that usually requires a little bit more electrical expertise, maybe even calling an electrician. And it's fairly expensive, too. I mean, it's not outrageously expensive, but it's something that we take a decent financial commitment to make sure that you're gonna actually use it and get your value out of it.

**Adam Stacoviak:** Yeah. I just wanted if the leads to create a leak; if there's an alternate route you could take. So if you determine plan A is leads in the freezer, however it does inhibit the ability to seal the freezer and there's a small leak... What are some alternate routes that you can do? What are different ways that you can think about the problem, basically?

**Jerod Santo:** \[00:28:12.29\] Yeah, yeah, yeah. I think it's a good way of thinking about it. Like Mike said, there are hold-ups there. My current solution is sub-optimal, which is I did buy this detector that goes in the freezer and it's built for this exact purpose, and it's wireless, and it speaks to this other device that's over there, that will actually -- you know, it's an alarm system.

The problem with it is it's run on AA batteries, so that's the problem with it. So you've gotta have power to that sucker, right? That's rule one of alert systems, is don't let the batteries run out.

**Adam Stacoviak:** Yeah.

**Mike Riley:** Right. And you know, you have the Pi... Not only could you have it so that it's constantly monitoring and sensoring, but then you could also have a backup that's monitoring that Pi. So if that is down, for whatever reason, you know that you've got a problem with your sensors... Which, again, after you start to acquire a few more Pi's, that's how you can put your Pi's to good use.

**Jerod Santo:** Right.

**Mike Riley:** One of the other things that I use with my Pi that is the one that is collecting my news feeds for the day is I have a Ansible server set up on it, so that it's making sure that all my Pi's are up to date, every day. So I don't even have to think about going in manually, depending on what distribution it is, whether it's \[unintelligible 00:29:16.16\] or if it's a sudo apt-get, it's all done for me automatically, so I don't even have to think about it.

**Adam Stacoviak:** Wow. Here I am, manually sudo apt-getting all these things for myself... SSH into this Pi, sudo apt-get... It's like, ugh... I do that manually.

**Jerod Santo:** Are you tinkering with your distros, Mike? Or how come you've got pacman going on one and apt-get on the others? You're setting up \[unintelligible 00:29:36.27\]

**Mike Riley:** Yup. You know, in the book of course I do recommend using the Raspberry Pi ls, just because it's the easiest one to work with. But as you get a little bit more comfortable and sophisticated, I've found that the one that runs the best most likely - that's the one I've got on all my Zeroes, because of the fact that it's got such a low footprint - is the Manjaro distribution that is available for installation directly from the Raspberry Pi OS installer. But yeah, it's an Arch distro that's extremely lightweight; it only puts on what you need to.

I do have to do some manual configuration when it comes to setting up Wi-Fi, so it's not for the faint-hearted. But once you've got that set up... Again, you can simply build an Ansible script that takes care of the rest of it for you... So - really simple.

**Jerod Santo:** That's cool. I hadn't heard of that one, Manjaro. We'll link it up in the show notes. "An operating system for everyone." Neat.

**Break:** \[00:30:30.15\]

**Adam Stacoviak:** So Mike, let's assume our listeners are excited about segment one and they're like "You know what? Shut up and take my money, give me a Raspberry Pi 4 if I can find one." You said you recommend the 8-gig version, because that's future-proofing... But what's a good next step? If they didn't wanna read the book, if they wanna listen to the podcast version only, what's a good next step once you get the Pi? What's that first step?

**Mike Riley:** Well, a lot of times when people first get that Pi, they don't realize that storage does not come with a Pi.

**Adam Stacoviak:** That's true, yeah.

**Mike Riley:** Now, if you buy these kits, which cost a little bit more, that include a power supply and a case, and maybe a few connectors, because not everybody has a USB-C to HDMI converter... So if you wanna spend a little bit more money for the kits that have all that typical stuff bundled in - that's probably a better approach, especially for newcomers who aren't aware of the fact that you've gotta have all these different attachments in order to fully utilize the Pi. If you don't do that, then you will have to get yourself a USB to HDMI adapter. Or if you've got a newer monitor that actually accepts USB, you can get a USB to USB-C cable that will allow that signal to come through.

You're gonna need power, so again, if you didn't buy the Pi with a power adapter, you're gonna have to make sure that you get the USB-C power adapter. In the earlier models of the Pi it was somewhat a proprietary choice on their part, on the part of Raspberry Pi Foundation... And it was not compatible with a few other USB-C power adapters. I know the newer ones have rectified that problem. But either way, you do probably wanna get yourself a power adapter and you wanna make sure that it's gonna be Pi-compatible. So you look for your fully Pi 4 compatible USB-C power adapters. The Raspberry Pi Foundation actually sells one. It's not that much more of an increase in price compared to some of the third-parties. So if you wanna stay safe, I recommend going the Raspberry PiFoundation's version of the USB-C power adapter.

Then after that you're gonna need a microSD card. You can get started with low-end, low-cost, a 32-gig, but if you're like me and a lot of other Pi users, you're gonna find out that that 32 gigs get consumed real quick, especially if you've got projects that are either looking at video, or you're processing a lot of data, you got it for storage needs, what have you. So I usually go with a minimum of 128 gigs.

Now, you can get those SD cards for under $25 these days, even cheaper whenever they're on sale. So the 128-gig is not that bad.

All to all though, by the end of the day, when you've got all those pieces of external accessories put together, that 8-gig Pi 4 is probably gonna cost you around $110... Which is still quite reasonable, considering the amount of compute power and the capability you're getting out of this computer. But once you've got that all connected, then obviously you're also gonna need a keyboard, probably a mouse if you've got the Raspberry Pi OS, which has its own GUI, which is Ubuntu-based... And then you're going to have to have a monitor, so that you can see what you're doing. Once you've got the Pi set up though, normally what I recommend is you try to get that on an SSH daemon as quickly as possible, so that way you don't have to have that Pi connected to your keyboard, your mouse, your monitor. So you've got a network connection, whether that's through your Ethernet wire connection, or you've already set it up for your Wi-Fi; it makes it much, much easier to just secure-shell into it and then be able to issue your commands that way.

\[00:36:03.07\] There's a couple of really nice add-ons for something like an IDE, like Visual Studio Code, that allow you to really easily remotely connect to a device like a Pi over SSH, and be able to browse the files, be able to modify them, to update your code in almost real-time... And it's almost like you're working locally on the Pi, but in fact you're doing it over this SSH connection. I talk about that briefly in the book as one of the recommended add-ons if you're using Visual Studio Code for your Python code.

**Jerod Santo:** Yeah. That's super-cool. Is there any world where a particularly skilled hacker - not like cracker, but like a person who's ready to rock, could get one of those Raspberry Pi Zero 2 W's, put it on their network and SSH to it without ever deploying a keyboard and a monitor to it to get it set up? I would love to just spend $15, get it out there, SSH right in, and be rockin'. Is that possible

**Mike Riley:** The only thing I can think of is if you prepare that SD card, so that you already configure all those Wi-Fi settings, and then you can just plug it in and it will automatically connect where there's a DHCP connection. Or if you wanna do static IP.

**Jerod Santo:** Yeah.

**Mike Riley:** I know that there's developments underway with the Pi 4, which is utilizing the Ethernet connection, to be able to detect \[unintelligible 00:37:24.29\]

**Jerod Santo:** Yeah, there you go.

**Mike Riley:** So it automatically picks up and downloads the operating system, so you don't have to do anything. You literally just plug it in. But I think that's still under beta, so that probably won't be available until later in the year.

**Jerod Santo:** That would be awesome, because you could have a base image that just gets Flash onto all your new Pi's as you buy them.

**Mike Riley:** Absolutely.

**Jerod Santo:** I would love that.

**Mike Riley:** Yeah, that's coming to the fore. Again, without having that Ethernet connection now, I suppose the other possibility is you could set up like a Pixie emulator and then plug into the Pi Zero's USB port, like a Ethernet adapter, and then plug that into your network. But whether or not that actually is gonna be existing on the Pi Zero firmware is another question. Whether it \[unintelligible 00:38:10.28\] which I doubt they probably would have put on the Pi Zero, just because it doesn't have any Ethernet port.

**Jerod Santo:** Right. Okay, so you've got SSH access, you have VS Code's fancy connect somehow and edit files remotely. You have it on your network... Then what do you do?

**Mike Riley:** Right. And then once you've got that, you pretty much can put it anywhere in your home. What I typically do with my Pi Zeroes or my Pi 4's that don't have an Ethernet connection is I get that into that state where it's completely wireless, and then I just do a shutdown command, so I can safely remove it. Now, of course, you don't have to, but it's good practice to make sure all your file sessions are closed before you just unplug your Pi. But you know, if you didn't have the patience for that, you could simply unplug it, and then find another power source somewhere in your house. You can even run it off of a battery. A lot of people do that for short-term uses of Pi's, where if they're wanting to, say, monitor something for a 12 or 24-hour period, you get yourself a really solid, large-capacity Lithium-Ion battery, you attach it to the Pi's power adapter, and then you're able to run it that way as well. But typically, most people are able to find a power outlet relatively close to wherever they need to set things up.

And once you've got your sensors attached, then you can pretty much continue to debug remotely, while you're sitting in front of your favorite PC. And it could be, you know, several doors down, it could be three floors away... But the nice thing is that from a development standpoint everything seems like it's right there, local, and you're getting immediate responses to whatever sensors that you're trying to poll. So it makes debugging really easy that way, when you're set up remotely.

**Adam Stacoviak:** \[00:40:04.22\] That's how I do it, is SSH. I just image with the Raspberry Pi Lite, move along, add the SSH file to the root, SSH into it, it gets an IP address from my DHCP server, so it's pretty simple there... If not, I can hop into Unify and see "Okay, which devices on my network was the IP address?", find it, log in via SSH, add my key, do some additional stuff... These are thing that -- I don't use Ansible, so these are things I could probably eventually automate... Like you had said, where you're updating your operating system, doing different things like that... But I'm manually doing things. Now, I have two Pi's, so it's not that hard, but...

The additional thing I do that's probably not necessary, but it's a nicety if you want it, is enable the VNC server inside the Raspberry Pi. I use a Mac, so I can use the screen-sharing tool, or the remote app that lets people remotely access other Macs on the network; I use that essentially to visually see the screen. You said before, with adding a monitor, HDMI - I skip all that. I buy the absolute base-level Pi. And SSD - I happen to go with 64 gigs, because I'm just slightly crazier than you...

**Mike Riley:** \[laughs\]

**Adam Stacoviak:** I power it however I want; in my case, it's a PoE HAT I put on the network like that, SSH into it... I literally never look at it again unless I have to go and physically unplug it to reboot it, because something went crazy, or the temperature is off the wall, which in most cases it's pretty nominal. Maybe 50-60 degrees Celsius, which is pretty hot; it does run pretty hot with no fan. I don't run a fan.

But that's the way I run mine... It's a pretty minimal kit. And at that point, it's Docker services, HP services, so I can access any visual that is actually running it, whatever service, via a web browser. And I happen to use Pi-hole, so I set up all my DNS via that. So if I wanna log into my Pi-hole, for example, I type in pihole.home.lan/admin, and that goes to my Pi-hole, despite it being 192.168.99.3. That's the link to that particular Pi on my network. I don't wanna plug in that IP address; I want a nice, known, kind of domain-looking thing.

So the Pi-hole really adds a lot of greatness to my local network... And if that thing is down - gosh, the world sucks, in my house, basically, because it does a lot for the network.

**Mike Riley:** Yeah, I know exactly what you're talking about. I use the Pi-hole for that exact same purpose. It's a really nice DNS server for local addressing, and makes being able to pull up local resources much, much easier than typing out a full IPv4 address, or having to help you if you've got an IPv6 network - even worse.

**Adam Stacoviak:** Right. Yeah. So I mentioned Raspberry Pi Lite, that operating system... Is that the one you recommend for most people? I know you mentioned -- what was the operating system you mentioned?

**Jerod Santo:** Manjaro.

**Mike Riley:** Yeah, the Raspberry Pi OS is the great starter for most people. That's the one that comes usually stock on a lot of the Raspberry Pi's that are prepared. A lot of schools use Raspberry Pi OS for just inexpensive workstations even. But if you're ready to move up a little bit further along the stack, there's Ubuntu, and Ubuntu has different flavors. You can get the full-blown 64-bit desktop... That one's a little heavy. I've noticed also performance-wise, particularly for video playback, it can exceed the processor capabilities sometimes.

I think they are obviously working on optimizations. If you're trying to use VLC on it, for instance, that's gotten a little bit better, and they're trying to \[unintelligible 00:43:39.11\] a little bit more with hardware acceleration. But the Raspberry Pi OS has got most of those optimizations built-in, which is why it took a lot longer for the Raspberry Pi OS version, the 64-bit version to come out of beta. So that's probably the best one to go with. But when you're ready to start to graduate - again, going with an Ubuntu server, or if you really wanna go lightweight, go with Manjaro.

I use Ubuntu server on three of my Pi 4's, because I'm running a Kubernetes cluster with Pi. Just because I can.

**Jerod Santo:** \[00:44:11.22\] I was gonna say "Why?" \[laughter\]

**Mike Riley:** That way I absolutely make sure that whatever applications must absolutely be running at all times, I've got that capability and that scalability. But yeah, it's mostly just for fun, and to say that yes, I can run a full-blown Kubernetes cluster with two nodes and a master on a primary server that is controlling everything internally.

That's also great for experimentation, because this way I can blow it up if I need to, or experiment, and I don't have to worry about any kind of AWS, or Azure, or any expensive, metered rate kind of scenario. And again, it gives me an opportunity to experiment and throw things at it and see what works.

The only thing I've found out, particularly when it comes to containerization, running like a Docker or a Kubernetes scenario on the Pi is that it's ARM-based. And as we all know, anybody who's worked with any Docker containers and images and such realized pretty quickly that while the universe has slowly started to expand for ARM-based images, it's nowhere near the x86, 64-bit Intel-based images that are out there. So a lot of people discover pretty quickly when they're running things like Docker on a Pi that "Why isn't this working?" Well, because you're using an Intel-based 64-bit image, and you have to look for ARM in order to run on it. And if wanting hopefully a 64-bit version of the OS, then you should be able to run either 32-bit or 64-bit images of ARM. But that's the trick that a lot of people discover when they get into running containers on a Pi - that it's totally doable, but you've gotta make sure it's those ARM... It's probably best to find an ARM v8 version of the image that you're looking to run in question.

The Pi-hole, for instance, has a nice image that you can run on the Pi... But again, you've gotta make sure that it's the ARM-based version that you're running.

**Adam Stacoviak:** Same with Plex. Plex is similar. I started Plex on the Mac, then tried and failed with the Raspberry Pi, and now I actually have it on a full-blown, 45 drives, massive Storinator AV15 set up, with just so many terabytes of storage. It should be absurd that you can actually do that, but... I tried to run Plex on there, and I run Portainer on that same Linux box. It could run on the Raspberry Pi, but I've found it was underpowered really for a full-blown media server, especially -- like, the use case for me that pushes it to a full-blown Linux box is the fact that I'm running 4k .mkv files, so those are just super-thick already. Minimum file size on a 4k image of a movie is like 50 gigs at a minimum, usually... And I also wanted it to be as less choppy as possible. I want the best viewing experience, so I just went full-blown, with lots and lots of RAM, lots and lots of storage, and lots and lots of CPU. It's a Xeon CPU on there, so it's plenty capable.

**Mike Riley:** Well, maybe when the PI 6 or 7 comes out, it will have compute capacity to handle that. But by then, we'll all be running 8k displays, so it won't really matter. 4k will be like the old 1080p.

**Jerod Santo:** That's right.

**Adam Stacoviak:** True. Which is really interesting, because I think the Pi has already gone so far at version four.

**Mike Riley:** Oh, absolutely.

**Adam Stacoviak:** I cannot imagine what the 5 is going to give us. I mean, they're already pushing so much.

**Mike Riley:** Well, it blew my mind that you can set up dual 4k monitors on a Pi 4. Now granted, your performance - you're not gonna get hardware-accelerated performance, but at the same time, if you have fairly straightforward, relatively static displays that you just wanna have for a couple of terminals up, you can have a full-blown deal-monitor 4k scenario that plugs directly into the Pi, and this little piece of hardware can power that. That just blows my mind. So you're absolutely right. It's an amazing piece of technology.

**Adam Stacoviak:** Yeah.

**Mike Riley:** \[00:48:13.01\] Where they're gonna take the 5 - I can only imagine it's going to continue to increase, both the CPU, GPU, and probably even some sort of a RAM upgrade. I can imagine they'll probably offer a 16-gig version, because they can. And anybody like me, who's really starting to get to that limit of the 8-gig will probably appreciate that, and once again, allow me to future-proof for another couple of years.

**Adam Stacoviak:** So when you push your Pi's, since you say you try to minimize how many you buy, or kind of buy the 8-gig version - do you simply go full utilization to each Pi? Is that the way you look at when you might pull out another one, or buy another one? Is it more like "I wanna fully utilize this single Pi here, and then maximize, and then feel like if I have more services to run, then it's a whole new Pi, I then begin to fill up and maximize?"

**Mike Riley:** Yeah, it's actually a combination of various factors. A lot of times it's resource constraints, but other times it's just I need a Pi in this location. Or I wanna experiment with one without having to disrupt my production Pi. I've taken a lot of time and effort to make sure that this thing is fully optimized, so if I'm gonna toy with something, I'd rather not use that on everything else that's running on the services.

**Adam Stacoviak:** Sure.

**Mike Riley:** But when I do notice that things are starting to slow down, or if I see that RAM usage on my Grafana dashboard is starting to get fairly high and consistent, then -- unfortunately, with the Pi, you can't just put in another slot of DDRAM. You can certainly increase your storage, but RAM is that hard ceiling. So when it starts to get to about 6.5 to 7 gig of RAM utilization consistently, that's usually when I say "Okay, time to start to decouple some of the things I'm running here, and distribute it elsewhere."

**Adam Stacoviak:** So you basically would have a dedicated Grafana Pi, basically, at that point?

**Mike Riley:** Mm-hm.

**Adam Stacoviak:** Or maybe it outgrows the Raspberry Pi and you've gotta get an actual Linux box behind the Pi for that reason.

**Mike Riley:** Fortunately, I haven't had to do that yet with my Prometheus and Grafana servers.

**Adam Stacoviak:** Okay.

**Jerod Santo:** As a matter of fact, what I recently did was I used to run Grafana on-site, on-prem, but they've got that Grafana Cloud... And I got tired of always having to upgrade anyways, so I just got lazy. They offer a free tier, you just have to be careful not to send too much data, otherwise they start to concatenate, so you don't have a large history to be able to fall back on. But the Grafana Cloud that they offer at the free tiers - you know, that way I don't have to worry about versioning and such, and it's just data that I'm spitting out from my Prometheus on-site server anyway, that's connected to that cloud. And it also allows me to check it wherever, on whatever device, whether I'm at home or not. And also, I've got the alerts set up so that if I do get threshold issues, CPUs running hot, whatever, I'll get the alert from the cloud, as opposed to on-prem.

**Adam Stacoviak:** Yeah. So you mentioned production, and you also mentioned the Kubernetes cluster - so is it a cluster sitting on your desk? Do you have these things rack-mounted? You have other gear, like networking gear and whatnot that's rack-mounted? I imagine you've probably got a server room or something like that in your house? In quotes, a "server room". Maybe it's a closet recommissioned as a server room. What's your setup for production?

**Mike Riley:** Yeah, actually - I'll be honest with you, I used to have a lot of hardware. And of course, I had to pay for the electricity to run all that hardware. But with the Pi's, especially with the Pi 4 - when the Pi 4 came out, it really helped to allow me to decouple and decommission a lot of that old hardware, because it just didn't make sense to run this hardware for 24/7, where I would just occasionally ping it. So I got myself a couple of Pi's, and even for the experimentation stuff with the Kubernetes cluster I put together - that's really just three Pi's stacked together.

\[00:52:17.00\] I've got a mounting kit from one of the Pi distributors. It's just a Plexiglas mounting kit with the brass mounts, and it looks really nice. I probably could go downstairs and pull it out of the wall and bring it up here, but then of course my cluster would go down and I'd get all these alerts now.

**Jerod Santo:** You can't have that.

**Mike Riley:** Right. \[laughs\] But it's really simple, and even those three Pi's running 24/7 doesn't even come near the expense of running one of my old Dell 1U servers that I used to have back in the day.

**Adam Stacoviak:** So networking-wise do you have a server closet that you've got like a couple switches in? What's your --

**Mike Riley:** I've got one switch, it's a Cisco switch, it's a one-gig managed switch, and it's a 16-port, very simple... Like I said, most of my Pi's, which are the Pi Zero W's, are running wireless. The only ones that I'm running wired are those Pi's that I absolutely have to have connected for fast internet connectivity and doing whatever kind of internet processing, pulling things down or being able to make sure that I'm getting solid connectivity upstream for things like my Prometheus server emitting to the Grafana Cloud, for instance.

But you know, in terms of wired devices, when we built the house I put together a wired network. Unfortunately, at the time it was Cat 5, so all that Cat 6 goodness -- that's all in the walls now. So I actually get better speeds out of the Wi-Fi 6 than I do out of my Cat 5's, which are topping out at 100 gigabits.

**Adam Stacoviak:** Wow.

**Mike Riley:** But hey, when you built something 20 years ago, you can only future-proof for so far in advance.

**Jerod Santo:** Mm-hm.

**Adam Stacoviak:** I was an absolute fool. I only went Cat 6 on certain rooms of my house, when I had the full ability to do Cat 6 anywhere I wanted to. But idiot me just did not know then. In retrospect, I'm like "Why would you do that? Why would you split your house some Cat 5 and some Cat 6?" It doesn't make any sense.

**Mike Riley:** You know, whenever Cat 7 comes out \[unintelligible 00:54:16.17\] then all that stuff is gonna be like old twisted pair copper wire from old telephone POTS systems.

**Adam Stacoviak:** Yeah.

**Mike Riley:** But hey, you can use it -- I've got a good 15 years of great utilization out of it before my cable modem said "It doesn't matter what your internal speed is. You're gonna be able to take advantage of the kind of throughput I'm pushing through this modem."

**Adam Stacoviak:** Yeah. This might go one layer deeper, but you mentioned Wi-Fi 6, you mentioned one single switch... How are you dealing with -- because you utilized the Wi-Fi more than wired. I'm just curious for those listeners out there who take your advice. Maybe some advice on the Wi-Fi setup. What particular setup do you use to get such good throughput throughout your house.

**Mike Riley:** Yeah, I use the pod peer-to-peer, so that I've got those spread out. And it's a continual mesh network, so that it's persistent and I've got a full bar across anywhere I go in the house. Now, it took me a little bit of tinkering to make sure that wherever I plug those mesh repeaters in, that I was getting a really solid connection, as well as being able to broadcast to all the available space in that particular location. Yeah, and it was a little bit expensive, because each one of those Wi-Fi 6 repeaters do cost, you know, some money. But if you wanna make that investment and you've got the Wi-Fi 6 devices to take advantage of it, that would be a recommendation to go with.

You could always go less expensive if you don't need Wi-Fi 6 throughput, but again, I always like to future-proof... So make the early investment first, and then you don't have to worry about it for another couple of years.

**Adam Stacoviak:** \[00:56:04.04\] Before you know it, you've got 15-20 clients on your network, maybe more, and you're like "I'm maxxing out--" not so much the actual bandwidth, but the multi-client bandwidth; how many clients can connect to one single point, and get decent throughput to that point, while also broadcasting to others. It gets heavy traffic.

**Mike Riley:** And you've also got clients in your home that are streaming 4k videos from various streaming sites, so... Yeah, that collapses pretty quickly if you don't scale accordingly.

**Jerod Santo:** What was the manufacturer that you used for those?

**Mike Riley:** Actually, I'm an Xfinity user, so Xfinity sells those pods. The one thing I didn't like about it is the fact that it's locked into that platform. But you know, beggers can't be choosers, so that's the one I went with.

**Adam Stacoviak:** Yeah.

**Mike Riley:** But it's pretty solid though. And fortunately, they've got their little Xfinity app that allows you to do full monitoring and tracking, and helps with replacement and such, so... It worked out pretty well. I'd say it was a decent investment. Not my idea investment, because I always like to go with a third-party that I can use outside of a lock-in network, but... You know, I was pretty much locked into their mode in many ways, so I figured I'd make it simple.

**Adam Stacoviak:** Yeah, at that point you're like "Well, I've got these Xfinity POTS, I've gotta do this stuff..." And then you've gotta deal with calling them every six months to get the best deal. Because if you go with the non--

**Mike Riley:** Absolutely.

**Adam Stacoviak:** And that's what drove me crazy. It drove me crazy. I was an Xfinity user, and - you know, great network, great service, but just having to call back all the time for the best deal... It was just like, I cannot pay the enormous price that is not the deal price, because that's just absurd. Nobody does that. Just give me one rate, I can pay monthly, I'll pay on time, and give me great service, and let's walk away. Almost nobody does that.

**Mike Riley:** You know, they're just Comcasting that way... \[laughs\]

**Break:** \[00:57:58.03\]

**Jerod Santo:** So all of the examples in your book are Python, but as we've been talking - because this is a general system, this is Linux machines, so pick your favorite programming language; this is a full-fledged, Turing-complete operating system. So you can write stuff in whatever language that you want. The thing that ties it all together though are the different sensors that you can plug into these devices, and then access the data off those sensors, and your mileage may vary based on your programming language du jour, how you access that particular information... And all of Mike's examples will show you how to get at it from the Python side of things.

What other sensors haven't we talked about? We talked about the water leak notifier, which is a particular type of sensor, a water sensor; we talked about temperature sensors, we've talked a little bit about power and how that's kind of a hard thing to sense... You mentioned Hue. We haven't touch on it directly. Hue lights. Do you wanna open us up more into the world of different things that you can actually plug into your Pi to get data off of?

**Mike Riley:** Absolutely. Again, with the Pi - it's already been recognized as a nice home automation tinkering device, and there's a lot of third-party... What they call Pi HATs, which are what those - we talked about them earlier, how you can put those add-ons and plug them into the GPIO pins. A lot of them are already situated so that they'll sit nicely once they're connected.

\[01:02:04.12\] There's one particular sensor board that I talk about in the book that has a whole range of sensors. The ones that I've focused on were really just the temperature sensors, but it's also got a humidity sensor, so if you wanna do, say, greenhouse monitoring, or just general humidity sensoring in the room that you're measuring - it's got that built-in.

**Jerod Santo:** Like a humidor. A cigar-holding pin.

**Mike Riley:** \[laughs\] Right. It's got a photo-sensor on it, so that if you have motion detection, you can do that type of thing. As a matter of fact, in one of the projects that I tie in the motion sensor along with another attachment that you can buy for the Pi, which is the Pi camera. That's sold by the Raspberry Pi Foundation. There's others you can buy too, with different kind of imaging quality. But the one that the Pi sells, the Pi Camera 2, is actually pretty good. It's got both video and still frame capabilities built-in. And they're fairly decent, even on low capabilities. So what I did in the book was show you how you can connect that motion sensor so that when there is motion detected, you can do a capture. And that capture - again, it could either be a video, or in my case, I just want it as a still image... And then you take that still image and you could email it as an attachment, but what I did was I tied it in the Discord API, so I could get an immediate notification along with the image, that shows me somebody just walked in the area that I was measuring. So if you wanted to protect your room, or you wanted to see if there's anybody stopping by in front of your home, or any other place that you wanna see, if there's motion detected... If you have a house pet that is looking to get into things - you could sit that up so that you would immediately get a notification on your phone or on your computer saying "This is what happened, this is what I saw", and now you can act upon that. So that's kind of a nice sensing capability.

Talking about the Hue, the reasons why I liked that so much for my lighting and electrical triggering needs is because they do have an open platform. In fact, there's Hue libraries not just for Python, but for Go, for Rust, for Java... Pretty much any popular language that's out there, Hue supports it either through third-party libraries that people have posted on GitHub... And it's just really -- again, it's a nice, open platform to work with, so you're able to interact with that Hue hub very simply. And I show in the book how it's easy to use this very popular Hue library called pHue, for Python. It's very comprehensive, very complete, and yet very easy to use, so that you can not only interrogate Hue to see what are the lights that are connected, including the names that you may have assigned them, but also to be able to trigger on auth connectivity... You can do dimming, you can change the color... So it really gives you a lot of flexibility. The deeper that you wanna get into, the level of sophistication is just really off the charts.

The other cool thing about all of this capability as you start to connect all these pieces together is the complexity that can grow out of a very simple project, and yet, because you were able to build it in stages, you're very competent on knowing exactly what's happening and all the dependencies that are connected to it. But at the same time, it's acting almost - not like a sentient system, but certainly you would never be able to do something as sophisticated, with those level of triggers and actions and reactions if you didn't have these capabilities and these systems in place.

So again, think about all the sensors that you can deploy, and all of the different feedback systems that you can enable. So based on all these sensors and whatever their values may be, you can act upon them and make them do things that you would not possibly be able to do, even with the very expensive automation platform that is custom-designed for those kinds of interactions, just because it's such a unique use case that you can't scale it to make it a commercial product. But for your own special needs, you can do some amazing things, and make it specifically tailor-made for exactly what you need to do, and that's why I think that Py platform and all these automation capabilities and these sensors really make a lot of sense for the home enthusiasts.

**Adam Stacoviak:** \[01:06:18.28\] Security's gotta be one thing... You mentioned leaking data in the first part of the call, and I think that's probably part of it, too. It's like, you could probably buy some of these things at Costco, or pick your nearby place that's got systems... And maybe you can do similar, cobble together, or duct-tape it together and make it your own... But at some point you have to think about the terms of service you've mentioned before, the privacy aspect of it, the data leak of it, and the closed box, the opaqueness of some of these systems... Where with a Raspberry Pi you may be venturing into uncharted territory; maybe you're a web developer and some of these things are pretty common to you. But if you're somebody who's listening to this show that's listening to this show that's not even "a developer", or just someone who's willing to kind of get dirty-handed in the terminal and do some different things and whatever, but you may not think of yourself as a developer, these are things that you can protect your household by not giving away all this data to these companies.

**Mike Riley:** And the other things that comes into play with these distance models that are out there - particularly in the home automation space - are they're subscription-based.

**Adam Stacoviak:** Yeah.

**Mike Riley:** And some of these companies - they may just banish over night. And I know that several have. And it has left all these people with these very expensive deployments completely out in the dark, because now all of that investment is absolutely worthless, because there's no mother ship for it to talk to. And if you did it on your own - well, there is no mother ship; you are the mother ship, so you don't have to worry about all of a sudden these services going dark.

**Jerod Santo:** Right. Are there options, are there Ring alternatives? I just recently got a Ring from my wife, and plugged it in, and... I don't think Ring's gonna disappear, because Amazon owns them now... Or is it Google? I don't know. They're owned... But they do give you video logging, and then after 30 days they're like "Hey, it costs $3/month for this", and I was like, "Wait a second, I already bought the Ring. Why do I have to buy--" And then I started thinking, "Well, I should have researched this more." There's probably alternatives that might be a little bit more open.

The hard part with that is it's there on your front door, or your front porch, and you want it to be a nice-looking device. They do have a great experience, so I'm happy with the hardware and the software. Are there things in the world of Pi's that are trying to compete with smart doorbells and camera devices and things like this?

**Mike Riley:** Yeah, but of course, they won't have that level of ease of installation, ease of use. Because you don't have a massive platform behind it, and a company that's willing to invest multi-millions of dollars into a fairly robust environment.

Like you said, Ring is probably not gonna go away anytime soon, so you probably don't have to worry about going dark. However, you probably do have to worry about it becoming obsolete at a point. Probably not in the next 5-10 years...

**Jerod Santo:** Planned obsolescence, perhaps...?

**Mike Riley:** Oh, absolutely, yeah...

**Jerod Santo:** \[laughs\]

**Mike Riley:** You know, while your Ring basic may be working at a certain level, if you want the new one with all the whiz-bang features, you'll have to upgrade to that. So that's their planned obsolescence roadmap, I'm sure. But then again, the other thing is a lot of people have talked about what the privacy implications of certain ring configurations may be... I think because of the pushback, Amazon's gotten a little bit more aware of allowing some users to dial some of that back. But there's certain areas, just like on today's smartphones, whether it's Android or iOS... You know, "Hey, why can't I see what's going on with that firewall? Why can't I see what kind of telemetry Google or Apple are sending back to the mother ship?" It's just maddening.

**Adam Stacoviak:** You could block that with a Pi-hole though. So there are some remedies there. You may get less service, but you can block -- there's a lot of Bugsnag on block, and there's a lot of telemetry on block.

**Jerod Santo:** As long as you never leave your house...

**Mike Riley:** Exactly. Don't leave your house. So forget about the mobile aspect.

**Jerod Santo:** \[laughs\] Adam never leaves his house anymore, so he doesn't know... In the wide world, Adam, you're on a cell signal. You can't Pi-hole that sucker.

**Adam Stacoviak:** \[01:10:18.21\] Well, that's true. \[laughter\] I don't know what you're talking about, but... True. The one thing, I think -- have you ventured into the world of locking your doors and stuff too then? Since we're talking about cameras and front-doors and Rings and whatnot... Have you begun to automate locking your doors, and real security level things, versus temperature and light and things like that? Which is more aesthetic in appearance and comfort, versus security.

**Mike Riley:** Yeah, that's a little bit of a more tricky proposition, because you have to figure out, number one, the power source for those locks. A lot of homes don't have some sort of electrical connection that goes -- and it looks nice, by the way. Of course, you can have it all exposed \[unintelligible 01:10:58.15\]

**Adam Stacoviak:** You have to unplug your front door before you open it. \[laughter\] It's like, "Let me unplug this thing from the wall."

**Mike Riley:** Right. Then you've got all the machining that's necessary...

**Adam Stacoviak:** "Is my door fully charged?"

**Jerod Santo:** That could be a defense mechanism on its own. Like, "Don't mess with this guy's front door", you know?

**Mike Riley:** Right. I mean, people who wanna go that route, I would suggest looking at some of the lock manufacturers like Schlage, for instance. They make Bluetooth-capable... But again, as far as I know - I haven't checked Schlage out in a few years, but I remember that when they first came out with their devices, it was tied to their platform. So you had to use their app to be able to communicate. It wasn't an open platform, I think partly because of some security, and also because it was first to market, so they weren't really sure how capable they were when it came to "Should we open this thing up and be beholden to the world coming down on us? We're trying to say it's secure, but all of a sudden there's all these security vulnerabilities that are discovered with this piece of hardware, and its firmware, and we can't update it... Then what do we do? So those are some of the more concerning problems.

There's certainly -- for those people who have an electricians' bent and they are woodworkers, yeah, they certainly could implement something like that. But it would not be for anybody who's just looking for a simple solution at this point.

**Adam Stacoviak:** Yeah. Well, you've gotta remember, your home is still production. If it doesn't work and it's not convenient, you're gonna get upset that your front door doesn't lock, or something's not working right...

**Jerod Santo:** For sure.

**Adam Stacoviak:** And if it's all cobbled together by you, you're the one who has to deal with it, and you're like "I just wanna be done with work, and here I've got more work to do."

**Jerod Santo:** Right...

**Adam Stacoviak:** So at some point, you've gotta minimize... But you know, maybe some others go further and they're content with it.

**Mike Riley:** Yeah, some of the things I have done and I've also seen implementations of on the web are people who are checking when their garage doors open. You can certainly put various sensors in place there. One of the easiest one is just looking for any kind of motion detection, so that if that garage goes up while you're away, you can immediately check on that status. And again, with a Pi, with that camera, you can instantly check "Gee, did I leave the garage door open? Well, let's find out." And you can just simply poll it and have it show up either on your Discord or whatever messaging platform you have, and just send it a quick message and say "Garage door", and it sends you a snapshot and showing "Yup, everything's closed and buttoned up."

**Adam Stacoviak:** Mm-hm.

**Jerod Santo:** That would be nice. I've always had that circumstance when you're like in bed at night, it's 10:30 or 11 and you're about to fall asleep, and you think to yourself "Did I leave the garage door open?" And you've gotta get up and go look... And I sure would like to stay in bed and just pop open the cell phone. I know there's commercial products for all these needs as well, but it's fun to do it yourself.

**Mike Riley:** Oh, absolutely.

**Jerod Santo:** It's fun to build it and hack it and figure it out. That's the joy in running your home with a Raspberry Pi. It's more holistic, and it's more fun, and you learn a lot.

**Mike Riley:** \[01:14:01.09\] And it's empowering, because once you feel the confidence of "Hey, I did this", then you're ready to go and build on that. So it's no longer this mystical black art, it's something that - I understand it, I can do it, and when I've got an idea, it's no longer something like "Where do I get started?" It's like, "No, I can just build on the knowledge I've already got, and easily scale it out."

As I said, with my home I've got a number of Pi's running, but they're all doing different kind of home automation that - I don't think I could actually purchase some of the things that I'm doing, but because of that knowledge base, I was able to build up, and the confidence that I got with working with the sensors. It just made it so easy and so -- for me, it was that empowering moment of saying "I can do this" and it's no longer anything that's gonna deter me from thinking what new ideas can I implement. And it's not a matter of "Can I do it?" but "How quickly can I do it?"

**Jerod Santo:** Yeah. Well, Mike, I am sold on the concept. I am going to build "My freezer is working" detector just as soon as a Raspberry Pi is available. I have been clicking through on their website to all of the various retailers; resellers, retailers? I don't know. The people that sell the devices. And they sure are sold out everywhere, with many places saying "We do not know when this is gonna happen." In the meantime, of course, you have the book "Portable Python Projects (Running your home on a Raspberry Pi).

Thanks to Jackie and our friends at PragProg we do have a discount code for the listeners. It is "PYPROJECTS". All one word, all caps. I'm not sure if the cops matter, but all one word... Take that code for 35% discount on the book, which is good for 60 days from the day that we publish this to our feed. So if you're listening to this within the next couple of months, and you wanna check out Mike's book, you can use that book and save 35%. So that's pretty cool, thanks to Jackie and her friends over there for making that available for our listeners. That's cool.

Anything we missed, anything we didn't talk about, any projects that you wanna highlight real quick before we call it a day? We know we're hitting up against your time here.

**Mike Riley:** Yeah, I think it's really just a matter of just get started. There's always that time when people get excited by this, but then it's always "Well, I'll do it when I have the time." No time is better than right now. So if you do have access to a Pi... And maybe if you really wanna get one, you may have to pay a little bit more on eBay, but there are Pi's out there. Or who knows, you may have friends of yours who have purchased the older Pi's and it's just sitting in their drawer somewhere, and then you've discovered "Hey, I've got this old Pi 2 or Pi 3..."

**Adam Stacoviak:** Put it to use...

**Mike Riley:** That's enough to at least get started. Absolutely.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And you know, just get started. It's one of those things where if you can just spend ten minutes a day to learn it, you'll find how tremendously productive you can be in just such a short amount of time. And once you've built your first project, there's no holding back. You're on a roll.

**Adam Stacoviak:** Mm-hm. Well, we've got Mike's book we'll link up, of course; you've got the discount code out there... We're also gonna put two more links in the notes. Jeff Geerling - I mentioned his YouTube channel is a wealth of information, and there's also Techno Tim. I follow his stuff. A lot of stuff on Pi there as well, especially with Kubernetes and automation, and Portainer... A lot of fun things around your home. It's really interesting stuff.

So between the book, blog posts Mike has written, and those two links there to those YouTube channels, it's gonna be a great amount of resources for anybody looking for that confidence in that first project.

Mike, thanks so much for the time, the wisdom in the book... We appreciate you. Thank you.

**Mike Riley:** Thank you so much. It's been a great time. I really appreciate the ability to talk about the book, and also just talk tech in general. I love it. Thank you.

**Adam Stacoviak:** Oh, yeah. It was so much fun. Thank you.
