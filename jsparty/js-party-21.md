**Jerod Santo:** Well, the sound of that music means it's time, once again, for JS Party, where I think it's safe to say that we are throwing a party every week with Javascript. My name is Jerod Santo, and I'll be acting as your interim head coach this week, your part-time party planner, kind of like that dependency which just injects itself all up in your functions.

I'm here to have a party, and I'm very excited to introduce three new panelists. If you didn't listen last week, then you do not know that we've expanded our list of panelists and we have a bunch of awesome people whose voices you'll hear on the show from week to week. This week we have three brand new people, and I'll introduce them now. The first one is Suz Hinton. Suz, thanks so much for joining the party.

**Suz Hinton:** Thanks for having me, I'm very excited to be here.

**Jerod Santo:** And we have Kevin Ball... Kevin, what's up, man?

**Kevin Ball:** Hey! Kball here, excited to be here.

**Jerod Santo:** And last but not least is Feross Aboukhadijeh, if I said that right... Feross, how are you doing?

**Feross Aboukhadijeh:** That was perfect. I'm doing well, I'm hyped to be here.

**Jerod Santo:** Very cool. I've practiced your name enough times, because we've had you on the Changelog, and I've had the chance to read it and say it, and it's... It's actually kind of fun to say once you learn the -- it sounds like Bookin' a DJ.

**Feross Aboukhadijeh:** Yup.

**Jerod Santo:** So last week we were talking about Javascript, the relation to us and to the different panelists, things that we like about it, what its draw is, and one of the themes of that show, at least for me, was this idea of ubiquity, and really kind of the way that it has permeated different spaces... And I think the real thing about Javascript the language, especially once Node came around and enabled that is it's so versatile.

This week we really wanna highlight just how versatile Javascript is, and do that by having a discussion all about kind of the fringe, edge, weird, zany, awesome - different things that people do around the world with Javascript, and I think you all make a great panel to talk about this, because each and every one of you are doing something different and interesting than myself with Javascript.

So where should we start? Let's talk about just the craziest stuff. What are people doing with Javascript that maybe you would believe was possible 5-10 years ago?

**Kevin Ball:** I wanna hear about the IoT stuff. It looks like both Suz and Feross have been playing with that and I haven't had a chance yet, so what are you guys doing with that?

**Feross Aboukhadijeh:** I wouldn't describe what I've been doing with it as playing with it too much. I wanna hear what Suz has to say, because I've just got one of those free WebLights at a Chrome Dev Summit... It's like a Hello World for WebUSB - you plug it in, and then the browser recognizes it and it lets you change the light on the little device. So it's like proof that WebUSB works, but other than that, I haven't played with it.

**Suz Hinton:** \[00:04:09.14\] Yeah, it's really cool. I actually have a couple of those, too; Feross and I picked them up at the Chrome Dev Summit as well, and I've been handing them out to everybody, because I ended up with a bunch of them... Just to show people how magical it is, and for them to get their head around the fact that Javascript and hardware, now that it's a little bit more natively accessible in the browser, rather than having to do all of these kind of ridiculous hacks to get it to work, now people are kind of understanding where the benefits are with that. So I've definitely been throwing myself deep into WebUSB and trying to create my own devices that will redirect you to website, and you can start playing with it. That's been really, really awesome.

**Jerod Santo:** WebUSB - can you describe that and what it allows?

**Suz Hinton:** Yeah, that's a really good question. WebUSB is a new spec that is going to be hopefully a new API in the browser, so you can access it in a very similar way that you access things like local storage, or the Web Audio API, or even just the Fetch API... So it's supposed to be natively available in the same sense, and it's commission-based, so it's kind of like when you wanna do something with WebRTC, or video, or you wanna record somebody's audio on the mic - you have to ask for the user's permission to get buy-in for that. WebUSB is a very similar exchange in that way, where if somebody plugs in a USB device and it's WebUSB-enabled, then they can actually give permission and start interacting with it directly from a web page, which is sort of what that WebLight actually does., which is really cool.

**Jerod Santo:** It seems like the kind of stuff you could do with the USB is infinite; the types of calls that you could make into a USB-based device could be so varied. Is there like a minimal API into the devices, or is it just like a socket connection? What does that look like?

**Suz Hinton:** Yeah, it's very similar to the regular libusb API. If you've worked with the low-level USB API on just operating systems such as libusb, for example, it's very similar to that. So at the bare minimum you're able to connect with the device, you're able to set certain configurations on it, and then you can claim certain interfaces on that USB device, such as "I wanna claim the endpoint where I can write data to the device to communicate with it, and I also wanna claim the interface that allows me to read responses from the device itself. So it's actually pretty minimal, and it's very low-level, so you have a lot of freedom to build things such as Javascript drivers for hardware directly on top of those devices... So what I'm hoping to do and what I'm hoping to see the community do is that people are gonna be writing these drivers so that people have a little bit more high-level access to these WebUSB devices.

**Kevin Ball:** Does it handle USB hubs?

**Suz Hinton:** No, I don't think so... Unless it was a super smart USB hub. But the USB device has to have the right descriptives and things like that, just in order to be able to advertise that it has interfaces. So it still has to follow that USB spec. There are USB devices such as hubs that aren't necessarily what I would call smart devices, where they're not really trying to have a conversation with the computer other than just being a proxy, for example. So I'm not sure you could do much with that, given that it sort of just registers a whole bunch of different devices. But I would say that you could talk to the devices that are actually plugged into the USB hub.

**Feross Aboukhadijeh:** That's probably what you want anyway, right? You don't really wanna control the hub, you just want the devices plugged into the hub to work.

**Kevin Ball:** Yeah, if the hub is transparent, that's phenomenal, right? You could imagine setting up an entire show - just plug in your lights, plug in your sound, and go to this website and we're gonna have a party for you.

**Suz Hinton:** Exactly.

**Jerod Santo:** That sounds almost like a Javascript party. \[laughter\]

**Suz Hinton:** \[00:08:00.29\] I'm trying to do some pretty intense stuff with it right now. What I'm trying to do is build a proof of concept that allows you to write, let's say, Arduino code in the browser, and then instead of having to have a companion Chrome app or something that uses serial, you can actually flash microchips by writing C++ in like a CodeMirror instance or something like that, and it can compile it and then upload it to the device.

So instead of having Electron apps and things like that, and web sockets, which we've had to do in the past, you can actually do all that native in your browser, which means that people don't have to have these super complicated toolchains installed on their machine; they can just get going with hardware immediately.

**Kevin Ball:** That's so awesome... That's amazing. Being able to plug in a device and not have to install anything, and just have everything \[00:08:50.10\] through the browser... That's so easy to help people get started. Because normally you spend so much time in the installation phase and in the getting it set up phase... And you get like a new smartwatch or something, and then once you install its native app - that's poorly coded, probably insecure on your computer. Maybe in the future that could just be a web page and then we get the browser sandbox to keep us safe.

**Suz Hinton:** That's exactly what I want. I really wanna see the unification of those interfaces, where there are all these weird, bespoke, artisanal little C++ apps that you install on your computer and you never really open them again... And being able to just go to a web page, configure your device and then exit out again - it's almost like the npx of configuring devices, I guess. It would be really cool.

**Kevin Ball:** Well, and firmware updates suddenly become seamless. You don't have to download it and figure out how to get it on the device; just plug the device in and go to the website.

**Suz Hinton:** Exactly! I'm so excited!

**Jerod Santo:** That is awesome.

**Suz Hinton:** I feel like you are all getting it.

**Jerod Santo:** You guys are getting this so much better than me. I'm sitting over here thinking "What would that be good for?" and you're just naming off thing after thing... I'm kind of amazed. You mentioned it was permission-based... One of the things about the web is everything lives in the sandbox and in the browser, and it's almost like a separate little operating system that I can't poke through, and we're basically like poking a big whole right through our browser, into hardware. Does that concern anybody, or do you think the Chrome and the browser teams can just handle that no problemo?

**Suz Hinton:** There's definitely concerns that can be raised, and if you -- so the WebUSB spec is available online right now; the last update was actually last week, and there is a whole section on security, and that's definitely something that's top of mind for them. Part of the reason why we've never really had native serial, which is kind of a little bit different from libusb support in the browser is because of security concerns.

The WebUSB spec - which I wasn't expecting, because it is such a low-level complicated, not super high-level spec, but they do have some really great human readable sections in it, and one of them is actually security, so I definitely recommend you read up on that, but it is something that they're thinking about.

**Kevin Ball:** Suz, could you explain the part where you plug in the device and then it can advertise that is has a website that goes along with the device, so that you don't have to remember the URL to go to in your browser? ...so you just plug in the device and then it pops open a page in Chrome or whatever browser right away. How does that part work?

**Suz Hinton:** Yeah, that's actually really exciting and I'm sure that that was the magical part for you, Feross, when you plugged in the web library, because the WebLight does that really well. Yeah, so the spec is -- and I might be actually explaining this slightly wrong, but the high-level idea is that the WebUSB spec introduces a concept known as a certain custom descriptor that you can set on your actual device, so when you plug the device in, Chrome is going to look for that descriptor, and if it finds it, it's gonna say "Oh, this is a WebUSB device", and the descriptor is really just a URL string. So if you have a recommended website that someone goes to that you know that you've set up to work well with that device, you can actually have that device tell Chrome "This is where this person should probably be going."

\[00:12:10.24\] And it pops up as a little notification, very similar to -- well, it's just really a native browser notification that pops up, and it asks you if you'd like to go to that website. So again, there's a very deliberate thing where the user has to make that decision, and it's not just like the good old days of -- even Feross' most annoying website, where it just kind of pops it up for you, you can't actually make that choice to go there... And then as Feross said, you never have to memorize where to go to get your hardware driver or anything like that; you don't have to look at the manual, it's just there for you as soon as you plug it in, which is awesome.

**Jerod Santo:** What's this most annoying website you mentioned?

**Feross Aboukhadijeh:** Yeah, that's a thing I gave a talk about at dotJS last December. It's basically a collection of all of the worst web APIs that I could find, and... Not worst, I should say that; a lot of them are useful and powerful. Some of the APIs I found are really old, they're from the Netscape days, and it's pretty surprising that they still work today. But my goal was to basically collect all the different web APIs that I could find and put them into a single site that would try to be as annoying and obnoxious as possible... So if you can imagine getting prompted for your webcam, and your microphone, and storage on your computer, and having pop-ups come up everytime you interact in any way - any key press, or mouse down, or anything like that. You just get pop-ups that fire on your screen, and you barely can move windows around the screen; there's APIs for this... Window.moveBy() and Window.moveTo()

**Kevin Ball:** Yeah, yeah.

**Feross Aboukhadijeh:** Beware if you go to it, it's quite aggressive. It logs you out of all your logged in websites... It does lots of things that you would expect a page to be able to do. \[laughs\]

**Suz Hinton:** It's really funny, and I guess what I was trying to say was that WebUSB tries not to do that; it's just a little notification that suggests you go somewhere instead. It doesn't just throw you into something that's gonna destroy all of your USB ports. \[laughs\]

**Jerod Santo:** It kind of reminds me of the QR code movement... People slap a QR code on a lamp post, or anywhere around the world, expecting us to just point our phones at it, and there's no -- you have no idea what that's going to do, so why would you... Like, that just seems dumb.

Similarly, pop this USB device into your computer and now it's gonna take you to a website which you don't know what it is.

**Suz Hinton:** Exactly. It's a little bit magical.

**Kevin Ball:** You all remember how Windows had autorun for a while? Like you pop in a DVD or a CD and it would just start running the program on the CD?

**Suz Hinton:** Yeah... That was so scary. \[laughs\] Wasn't there a key you could hold down? Like, you'd hold down the control key or something and it won't, and then you can just go and not have that thing take over your computer...

**Jerod Santo:** Yeah, when I was in middle school -- when you first start learning a little tips and tricks that other people don't know, and you have lab computers at school... I think it was autoexec.bat on Windows back in the day; it was a batch file that will just auto-execute (I think) when the machine boots... And that's pretty much how we caused a ruckus on the computer labs in school, such things like "Let's just autorun this thing without any sort of reason not to."

**Feross Aboukhadijeh:** Oh my gosh, I have a story about that I have to share... You know the startup folder? There's a folder called Startup under Programs on Windows, and you could put shortcuts to applications in there, and it would start up automatically when the computer started up... And I made a script - a batch file - that just ran the Shut Down command, and put it in the Startup folder, so as soon you would turn on your computer, it would turn it off immediately. \[laughter\]

**Suz Hinton:** \[00:16:07.12\] Feross, your pranks date back a really long time, I'm impressed with this. Your commitment to continually screwing around with people is impressive.

**Feross Aboukhadijeh:** Yeah, it's just how my brain works; any time I see some system described, I just immediately see how it could be used incorrectly. I don't know why my brain does that; I have a problem, I guess...

**Jerod Santo:** There are certain people who are better at breaking things than others. They have a knack for knowing the exact wrong input in order to break a thing, and these become penetrations testers and whatnot... It sounds like you definitely have that knack.

**Kevin Ball:** Incredible QA team.

**Feross Aboukhadijeh:** Yeah. \[laughs\]

**Jerod Santo:** I just never have the cool ideas like "Let's just make this thing reboot itself", but I was always the guy who once Feross figured it out onto a computer, I would be like "Okay, let's run this on all 500 of these at a time." So I was always the catalyst to do more worse.

**Feross Aboukhadijeh:** One more question about WebUSB - I was actually thinking, if a vendor or if someone who made a device was doing WebUSB thing, so they're advertising with the descriptor that "This is a WebUSB device", is it possible for any web page to get access to that device? So in other words, say I didn't like the interface that the device vendor created - could I make my own and sort of reverse-engineer their protocol and then just have my web page talk to the device? Or can they someone DRM it and make it so that I can't do that.

**Suz Hinton:** Feross, I'm so glad that you asked. Technically yes, you can basically go and create your own thing if you really wanted to. That being said, if they are able to obfuscate let's say their Javascript and there's some kind of sneaky exchange that happens and they've got the device locked down, then you'd have to reverse-engineer that. But if you're able to do that, there's nothing stopping you from talking to a device, even if it's not the device that you've made yourself... So it's pretty cool. You can totally create alternative interfaces, which I think is probably the most attractive part of this.

I've seen this in the web community - when the web community is not happy with something, they'll just create something completely new to make a point and to improve on things, so I think that's something that we're gonna start seeing.

**Feross Aboukhadijeh:** That's awesome.

**Kevin Ball:** That's really cool.

**Jerod Santo:** The last question I have on WebUSB - it sounds like the kind of thing that won't be a reality any time soon... What's the status of the spec? I know we have it in Chrome to a certain degree, but what's the likelihood of the IoT manufacturers, people making these devices actually using this in the next couple of years? Is there a chance?

**Suz Hinton:** Yeah, that's a really good question. Right now it's available to approximately 56% of people globally, and what that actually means is who is using certain versions of like the latest Chrome, and who is using Chrome on an Android device, too. Right now you can plug the WebLight into an Android device if you just have the mini USB converter plug, and it works really well, which is really cool.

So that is a substantial amount of users, but it's not everybody. And the spec, if you look, it's still in draft status. The arguments that they make at the beginning of the spec are super compelling, about hardware manufacturers and how this is a cross-platform strategy to not have to create these programs that run correctly on everybody's computer; the browser is smoothing that over for you to a certain extent. So I'm hoping that advantages like that will attract manufacturers to offer that. As far as whether we'll see that happening, I'm not sure, and I will admit that I've been guilty of sneaking WebLight devices into the offices of Edge developers at Microsoft; no promises, but I've been trying some gentle persuasion.

\[00:20:08.24\] It's really up to people to advocate and to make things with this technology and make awesome things to show the potential of it, because what people need, as usual -- it's the same as CSS Grid, we need people to go out and do something with it and actually show that it's a very compelling thing to happen in every single browser.

**Break:** \[00:20:32.28\]

**Jerod Santo:** Alright, let's turn our attention towards a completely different use of Javascript, which is torrents and peer-to-peer networking in the browser. Feross, you've done a lot of work in this space - why don't you share with us what's up with WebTorrent and some of the work you've been doing with WebRTC?

**Feross Aboukhadijeh:** The goal of WebTorrent was to build a torrent app that runs in the browser, so the goal being to eventually build something like a peer-to-peer YouTube, or something along those lines. You can imagine going to a website and then it wants to fetch a video, and it can do that from other people who have that video. Those people could be people who are on the same web page as you, watching the same video as you potentially, or it could even be from someone running a native app on their computer, hosting that video because they wanna make it available to the peer-to-peer work.

In order to do that, in order to have different people's browsers talking to each other, or even your browser talking to a native app, we need a protocol to do that. So the browser gives us WebRTC for that. WebRTC was originally created to be able to do video and voice calling in the browser, so you can think of something like Google Hangouts or Skype in the browser... But there's also one component of it that is called the data channel. The data channel - you can basically think of it like a WebSocket; it allows you to get basically just a simple connection between you and another peer. This is the first time this has been possible. With the WebSocket you're connecting a client to a server, so a browser to a server, right? But with WebRTC you can connect a client to a client, or in other words, you can now connect the browser directly to another browser, without going through a server. That's the new capability that we got with WebRTC.

The interesting thing to me is WebRTC actually was mainly about giving this ability to capture the webcam, and to capture the microphone, and then to send that to another peer, and then doing quite a bit of complicated video and voice magic; the quality can adjust dynamically depending on how much of your CPU is being used for encoding and for how much bandwidth you have available... There's all these options and configurations and things that all video and voice apps need. So that's what the focus on WebRTC was. But as part of that, they introduced this peer-to-peer capability, because being able to connect directly to somebody is actually really good for latency, and you want low latency when you're doing a video or a voice call, because it makes the experience much better. You don't wanna have to send all the video and voice to some data center way across the world, and then back to someone who you're just talking to who's in the same city as you, as an example.

\[00:24:21.29\] So being able to just connect directly to them improves the call quality quite a bit. In that way, we were able to get peer-to-peer on the web, sort of via this backchannel... That's how I think of it. Anyway, the data channel is really cool, because you get this very simple WebSocket-like API that lets you build lots of different protocols on top of it. You can really build anything that you want to build; your imagination is the limit in terms of what types of applications we can build on top of WebRTC. WebTorrent is just one of those uses. We basically put the torrent protocol on top of WebRTC instead of what it's usually used on top of, which is TCP and UDP.

**Kevin Ball:** That's pretty interesting. So you can basically autoscale your ability to serve content or whatever it is based on how many people are interested, because everybody who starts using it and they just need a browser to use it, suddenly they become capable of forwarding that.

**Feross Aboukhadijeh:** Yes, yes. And the other thing that's interesting is there's no permission prompt for this. So it's not something that is considered worthy of a permission prompt, because you're not accessing the user's webcap or their microphone; the only thing you're really using is their bandwidth for this. But you can already create data in the browser with Javascript and then send it up to a server via an XHR request or a fetch request and use up all their bandwidth if you want to. So in terms of like new capabilities that the -- I know, I know, it's a funny way of thinking about it... I heard someone laugh. The point is that the thinking here is that this doesn't really enable a site to do anything it couldn't already do if it wanted to, so there's no permission prompt on there. That's pretty cool; it means the experience of using a site that's serving data this way is just as seamless as using a site that's completely centralized.

**Suz Hinton:** Feross, I don't know if you've been following some of the stuff that Surma from the Chrome advocacy team has been doing, but he was trying to use the data channel for similar things where he was controlling CSS in the background style and stuff like that (I think) of the other peer's web page, which is so cool. I'm really excited about this idea of using the data channel for actual communication and setting up your own protocols in order to have almost like this sneaky way of communicating without having -- well, you could still have eavesdroppers, but I just think it's a really interesting concept.

**Feross Aboukhadijeh:** I think I saw this, it was called Comlink; it's sort of like an RPC mechanism. One browser has a bunch of functions in it, and then those get exposed to the other remote browser as local functions that it can call, that return promises... Because it's obviously asynchronous. So in one browser you call these functions and they actually execute on the other browser, and then you get the return value from those functions as the promise, the results to that return value. So that's pretty cool.

But you don't necessarily need his Comlink library to do the same thing. You could make your own protocol and when you get a message event you could just eval() the text that you're given, and that's basically what it's doing.

**Suz Hinton:** What could go wrong...? \[laughs\]

**Jerod Santo:** Yeah, exactly. This is not legal advice, to eval() text as it comes in.

**Kevin Ball:** But kind of related to Feross' point, you could implement all this writing through a server too, right? There's nothing theoretically new in functionality there, because you could just use a server to pipe things through. What's really interesting is kind of the point about you're cutting out the middleman, you're cutting out the tracking, and things like that.

**Feross Aboukhadijeh:** It's worth pointing out though that to actually do a peer-to-peer connection with WebRTC you can't just know someone's IP address and connect to them, which is basically what you can do with TCP and UDP - find out someone's IP address and the port that they're listening on, and then I can just connect to them by opening a socket, and then now I can send them data and they can send me data.

With WebRTC the process is a little bit more involved. You have to get introduced to the peer, and this is because most of the time we're behind NATs - that stands for network address traversal, I think... It's basically like a Wi-Fi router; if you're behind a Wi-Fi router, you don't actually have a publicly addressable IP that someone can connect to - you have a fake, local IP that's given to you by the router, and the router itself has one IP that sort of everyone is sharing, if that makes sense. Basically you don't have a way to tell an IP address to the world that people can connect to, so there's this sort of mumbo-jumbo process that you have to go about to actually poke a hole into the NAT and have people connect to you. For that reason (among other reasons) the process is basically, I wanna connect to somebody, so I generate a blob of text, and then somehow get that blob of text to the peer I want to talk to, which is kind of a weird catch-22 because I wanna talk to the peer and I haven't connected yet, but now I have to get this blob of text to the peer that I'm trying to talk to. This is where you need to be sort of introduced to the peer... Someone who has the ability to get the text to that peer does that for you, so that's typically just a server that's the website that you're both using, which will have a WebSocket, and then you just use the WebSocket to get the text over to them.

Then they do the same thing in reverse, they generate some text and send it back to you, and that text contains all the information needed to connect. So now you've each given each other this blob of text, and now you can directly connect your browser together and you can get rid of the WebSocket and you don't need the server anymore; now you're directly connected.

**Suz Hinton:** Feross, is that like the STUN and the TURN service? The STUN is what does the IP stuff and the TURN is what negotiates the two peers that wanna connect?

**Feross Aboukhadijeh:** Sort of, yeah. STUN helps you discover your own IP address, which you don't know normally, because you're given the fake local IP from the router... So STUN is just a way to figure that out. Then the second part is actually called signaling; signaling is just sort of how you decide to help peers get connected to each other.

TURN is actually something different... There's all these acronyms with WebRTC, that's one of the problems with it; it's really confusing. TURN is actually what you use if you can't connect, which happens in some situations if you're behind an extremely restrictive firewall, which is sometimes the case in enterprises... Then the peers can't actually connect. When that happens, you can fall back to your own centralized communication approach, maybe using a WebSocket or something... Or if you want WebRTC to just handle that for you, you can specify a TURN server, which -- the easy way to remember is turn has the letter R in it, which stands for Relay. So this is basically a server which will just shut all the traffic between you and the peer in a centralized way, but in a way that it can't see what's going on, so it's encrypted through the turn server... The TURN server is just kind of an oblivious tunneller.

\[00:31:56.15\] Basically, how it works is each peer can connect to the TURN server, but they can't connect to each other. That's because the TURN server has like an IP address that's just public and easy to connect to. So you both connect to the TURN server and then it shuttles your traffic to each other. That's a last resort, because that sort of defeats the whole point of peer-to-peer, but it's useful for building a reliable service that will always work.

**Kevin Ball:** For that setup process, do you need a two-way exchange of information, or can I take that blob of text like it's an address and throw it up on Twitter and suddenly people can connect to me?

**Feross Aboukhadijeh:** Unfortunately, it's two-way. I really wish it was one-way. So yeah, if I want to, say, let anyone connect to me, there's no way for me to generate a blob of text and just post it online and then anyone could use that to connect to me. That would be so nice, because then we could build really nice peer-to-peer topologies using really cool data structures... For example, there's this thing called the DHT, which I don't have time to explain, but the DHT is sort of a way to find anyone you wanna talk to, and you can have millions and millions of peers, but yet you can sort of just given a name kind of find anybody and then connect to them if they wanna connect to you, and there's no centralized routing involved... So it's just a really scalable way to have a giant network of people.

The way that works normally is that you just sort of have an IP address and a port that you're listening on that you can just post to like the message board; you just post to it and say "Anyone who wants to find me, here's where I'm at." You can't do that with WebRTC, so it makes it really hard to build up those kinds of topologies. You need to have a two-way exchange, sadly.

**Kevin Ball:** Interesting. I wonder if you could use something like the TURN server approach where you have a server that is in a known place, and then you can sort of broadcast that and use that to set up your -- I don't know... Then you've got a centralized body again, but...

**Feross Aboukhadijeh:** Yeah... One thing you might be able to do is have like trustless servers, so that you don't trust them, but there's maybe like 20 of them, so they're just sort of serving a role of helping you out, but any of them could go away, none of them is essential to the system.

**Suz Hinton:** That sounds like a blockchain ledger. \[laughs\]

**Jerod Santo:** Yeah, but don't you need a directory then? And so now you have a centralized index of trusted nodes, so who controls the directory? ...type of a thing. It seems like a centralizing force.

**Feross Aboukhadijeh:** Yeah, I mean... The big elephant in the room here is that we're accessing all this through a website, so there's a domain and there's someone who is controlling the website... \[laughs\]

**Jerod Santo:** Right, yeah.

**Feross Aboukhadijeh:** It's peer-to-peer, but there's still all this centralization that the browser and that the web kind of enforce on us.

**Jerod Santo:** Suz mentioned blockchains, and I can't help but think about that. I heard a comment - a lot of these teams are trying to rebuild decentralized social networks file sharing things, like DTube... It's like, "You know, DTube is censoring things. Let's have an uncensorable YouTube on a blockchain." And then there's another one I think called Steemit, which is like decentralized writing, with payment channels and all this kind of stuff... And I heard a comment that there already is a very popular decentralized social network for sharing files, and it's called BitTorrent, and it's been very active and very successful for years, and I thought that was a good point.

I can't help but think, in the case of WebTorrent, you're then introducing -- I know there's... What's the term in BitTorrent? Not the seeders, but there's like -- kind of like the TURN servers, where there's like a relay or there's a broadcaster of some kind...

**Feross Aboukhadijeh:** Trackers?

**Jerod Santo:** Yeah, trackers... With WebTorrent, are you -- you're required then, because you're using WebRTC, to have a little bit more centralization. Like you said, there has to be a website involved. Is that not necessary in BitTorrent, but it is with a WebTorrent implementation?

**Feross Aboukhadijeh:** \[00:35:56.16\] Yeah, so when BitTorrent was first created, they have these things called trackers, and they were basically a place where you go and announce that you are interested in a particular torrent, and you would post your IP address in your port so that anyone who also is interested could go there and find it. So it was basically a key-value lookup, where they key is the torrent's identifier, and then the values - there was just like an array of all the different IP's of people who were interested... Then they found a way to get rid of that using the DHT data structure I mentioned earlier.

With that you don't even need trackers, you can just find each other... And there's no server involved, you just sort of ask peers that you're already connected to to help you find the person you're looking for, and you just sort of get closer and closer, and you just keep asking different people until eventually you find the right one, and you can do that sort of provably quick, so it's not just like a hopeless cause that's gonna go on forever where you just keep asking random people... It's actually guaranteed to sort of terminate after a pretty short number of hops. So yeah, that is one downside of WebTorrent, in thatt we kind of reintroduced that centralized sort of introduction point between the peers. But on the other hand, it's a lot more accessible, because it's in the browser.

**Jerod Santo:** Yeah, for sure.

**Feross Aboukhadijeh:** It's like a tradeoff; you wanna make things easy for people to use, and you wanna put it in the browser so you don't need them to install things on their computer. So along the lines of the WebUSB stuff, I think it's similarly powerful in that way.

**Jerod Santo:** And I think I read recently - correct me if I'm wrong - that some WebTorrent stuff made it into Brave. Do you have an announcement around that, or am I misremebering? There's like native support inside of Brave, or something like this?

**Feross Aboukhadijeh:** Yeah... You know how browsers can usually show you PDF files? There's a PDF viewer built into the browser...

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** That's so that you don't have to open up an external program to view a PDF. Well, Brave decided they wanted to do that for torrents. So when you visit a torrent file, instead of needing to open an external program, it'll just open up directly in the browser. That's powered by the WebTorrent implementation.

**Kevin Ball:** Totally random, blowing things out - I'm wondering if you could combine WebTorrent with the WebUSB stuff we were talking about and just essentially ship a little USB device that knows how to connect via cell networks or something like that, and could be used to sort of do that setup process for you... I don't know enough about this space, but wondering if there's a way you can hop around that need for centralization by having a device.

**Feross Aboukhadijeh:** That's really interesting, maybe you could do it with Bluetooth Low Energy - can't you send data over that, by broadcasting stuff?

**Suz Hinton:** Yeah, you can set up mashes and stuff like that, which would be awesome.

**Jerod Santo:** Which opens up a whole new ball of wax around the scuttlebutt stuff and a lot of the scuttlebutt stuff and a lot of the decentralized stuff going there. I think we should do a show - not this show, but a show, about those kinds of things, because it's fascinating to me.

**Break:** \[00:39:09.15\]

**Jerod Santo:** So there are so many topics to talk about, but we don't have time to cover... Of course, there's tons of generative art going on, gaming, there's multiple projects for doing 2D and 3D games, even people doing stuff with React and Vue, with SVG -- people are making SVG do crazy things. We have people doing AR, VR at Javascript... The TensorFlow team now has TensorFlow.js, so in case you were sick of training your machine learning models on your server forum, you can use people's browsers... I'm sure there's good uses for it, I just can't think of why you'd want to do that. But we have other things to talk about--

**Kevin Ball:** Javascript all the things...!

**Jerod Santo:** Yeah, exactly. What is that - Atwood's law?

**Feross Aboukhadijeh:** Yeah, that's the reason...

**Jerod Santo:** Yeah. "If it can be written in Javascript, it will be", or something like that. I'm butchering it, but along those lines. Here it is, TensorFlow.js. But Kevin, you wanted to talk about DSL's, which is not a topic I would have thought of with Javascript. I definitely have used them lovingly and even tried to craft a few in Ruby, which lends itself very well to writing domain-specific languages... But this is a topic you're interested in, so why don't you kick us off and tell us what you're talking about here?

**Kevin Ball:** Yeah, for sure. So really, this comes from Babel. Babel is this incredibly powerful tool, and we've kind of just put it in our build chain and think "Oh, that's for building future Javascript. That lets us get to new versions of Javascript", but really it's a compiler where you can create new features of the language, regardless of what they are. We saw this a little bit with the React team at building JSX, and they did it as a Babel extension... So now you suddenly have an extension to this language that just works with Javascript. We could take that a lot farther. You could build out incredibly powerful domain-specific languages just as Babel plugins that are gonna compile down to Javascript, and as we've been talking about, Javascript can go everywhere.

Imagine having a USB-focused DSL. Imagine having a torrent-focused JSL. All sorts of possibilities.

**Jerod Santo:** \[00:41:53.25\] I'm now just thinking about it, a USB-focused DSL; I'm getting excited. Suz, is that something that you would be interested in? And especially with how much -- not research, but educational work you do with your livestreams, and kind of like bringing people to these technologies. It seems like a DSL for a specific use like that could be very powerful in your hands.

**Suz Hinton:** Yeah, I definitely agree. I sort of touched on this earlier, but I just think that this stuff is so low-level that that's what is intimidating people from getting started. People tend to come into programming quite commonly by learning Javascript, and then they feel like jumping to WebUSB might just be too big of a gap to jump at first. I actually really do like that idea of having a DSL for WebUSB.

**Jerod Santo:** Potential open source project for somebody out there... Just throwing ideas out. Go ahead, Kevin.

**Kevin Ball:** Well, in the break you all were talking about a really fun application, Parseltongue. Do you wanna get more into that?

**Suz Hinton:** Yeah, so there was a talk that was at JSConf AU very recently, and it was about ASTs. Craig Spence gave a talk called fantastic ASTs and where to find them. If you're a Harry Potter fan, you'll know that that's a riff on Fantastic Beasts and Where to Find Them... And he ended up inventing a new DSL or a new programming language called Parseltongue. It was just this delightful Harry Potter-themed journey through "Well, we don't just have to have Javascript transpiling down to Javascript, but we can make up our own programming languages and just insist on writing all about a web language, or a web functionality with a completely different language and never really have to think about the Javascript side of it." I thought that that was really funny.

**Jerod Santo:** For those of us who aren't super into Harry Potter, Parseltongue I assume is like a language that they use...

**Suz Hinton:** Yeah, and it's kind of funny, because Python is like our snake-themed programming language, I guess, in name... But this had things like "ss" means one thing, and then "ssss" means another thing...

**Jerod Santo:** Oh, just the length of your s's just changed it, right?

**Suz Hinton:** Yeah, it's just so funny... And every single kind of feature of the language generally started with some s's, so you had to sound like a snake while you were actually talking about the main keywords of the language, which was hilariously funny. So if you've seen a for-loop in Parseltongue...

**Kevin Ball:** Code reviews would be so much fun.

**Suz Hinton:** Yeah, it was just really fun.

**Jerod Santo:** I would have used 5 s's instead of 6 s's. Those are the kind of code review comments you get -- "How many s's are there?"

**Suz Hinton:** Yeah, imagine building a linter for that... Which I guess is what you would use an AST for, right? But I just thought it was cool, so I wanna know kball's thoughts on that specifically.

**Kevin Ball:** What's really fun about programming and what always drew me to Ruby in particular is the ability to kind of take your mental model and translate it into something that's actually gonna do something. I did Ruby before I did Javascript, and I loved in there that I could really shape the language to mesh the mental model. Now with Babel we actually have that capability. We can really extend this language, which -- I mean, Javascript now is pretty damn awesome anyway, but we can take it and really confirm it to match the models that we're working in.

As the language is right now, a lot of the features there are basic on the primary use cases, right? This language developed over the course of years and years and years, using it primarily on the web. But as we're opening it up to all these other possibilities, that way of thinking about things may not actually be the easiest way to think about things. If we extend our view of our applications, you'd not just be "Here's our application, and then our build chain is Babel and Webpack", or whatever it happens to be. Actually, I don't know if you need to use different build chains when you're in some of these -- if you're using TensorFlow.js, do you actually have to plug it into something else?

\[00:46:03.15\] And think about that build chain as part of the application, right? It's not just configuring a set of pre-existing loaders, but saying "Let's define our application language. It could be mostly vanilla Javascript, but maybe we wanna extend a few things because it's gonna make it more natural for us. Or maybe we wanna create a language for our domain experts to program in, that's just gonna compile down to Javascript, so we can run it with the same stack."

**Feross Aboukhadijeh:** Kball, could you give a couple of examples of that? I'm thinking of JSX, and that makes so much sense. Putting HTML into Javascript makes it so that you don't have to transform it into some weird set of function calls to make that work; you just see the HTML there. But what's some more examples of that for other domains?

**Kevin Ball:** Well, let's explore one maybe. What are the key primitives in, for example, WebUSB? We were talking about doing that as a potential for a DSL. What are the primitives that -- actually, maybe not even primitives; what are the sort of higher-level functionality that you might want to expose there, that right now you have to sort of dive down into the guts to do?

**Suz Hinton:** I think it would be things like even just representing specific byte sequences that mean something, right? You have these really kind of obscure things that you need to do, and even just the methods that you're calling, such as transfer in and transfer out, and I'm imagining that there's probably a more ergonomic way to be able to express those behaviors.

**Kevin Ball:** Yeah, so right now -- to think about this in a DSL way... So to deal with a set of byte sequences in vanilla Javascript, you'd basically define those as const somewhere, and then you'd set up a bunch of methods for transferring in and out of those, and you'll probably be passing those constants around, and things like that. But if those actually represent functionality, you could essentially wrap those up as primitives in your language, and just say "This is something that's always there." We don't have to import the constants and have a central file, or whatever. This is just -- it's part of the language.

**Suz Hinton:** That would be so good, because I have to write a lot of helper functions when it comes to this stuff, because some protocols expect you to frame every single package that you're sending with things like checksums on the end, and stuff like that. So you're basically writing a bunch of helper functions that doesn't really encapsulate exactly what you wanna do, or you use inheritance, or something like that, and I think a DSL would probably make more sense. But I'm still trying to wrap my head around the potentials of this. I think that this is a really good point that you're making.

**Kevin Ball:** If we think about it -- I mean, it's all code at the end of it. It's not enabling you to do something that you couldn't do otherwise. It's about ergonomics, it's about matching the code that you write to the mental model that you want to have, and that you want to think about it, but that then enables you to be thinking about this stuff at a higher level.

**Suz Hinton:** How would you do this with torrents? I'm now wanting to go over to Feross' side of things.

**Feross Aboukhadijeh:** So part of the torrent protocol is -- I mean, the torrent protocol itself is pretty low-level and has the same types of magic byte sequences that WebUSB has, so I could imagine that just being part of it, part of the DSL. I'm wondering though how is it to actually change these DSL's? Because I can jump into the code for sending stuff to peers and look at the protocol and sort of change the constants and stuff because it's just Javascript, but if this is part of the DSL and I wanted to change what gets sent over the wire, I'd have to modify the DSL's code. Is that harder to do?

**Kevin Ball:** Conceptually, it's -- once again, it's still just code, right? So you're thinking about this as a library that you install, but instead of it being a library of utility functions that you then have to import and call and whatever, it's a library that gets applied essentially extending the language at compile time.

\[00:50:15.09\] So it comes back to, in some ways, how are you managing that code, right? If it's a third-party library, it's gonna be something where you're either gonna submit pool requests to change it and fork it... If you control it, this could actually live in your code base. Your Babel config can reference local packages and things like that to compile. So it could just be a different way of organizing your own code base.

When I've used DSL's -- coming back, once again, I've done this much more in Ruby land... There you usually use it for a library of some sort; so you're using this library and it has a particular way of interacting with it... And because Ruby the language itself is able to do the same sort of -- like, you can change fundamental pieces of the language in a way that you can't just raw do in Javascript... It can expose an interaction form or a language that reads English, or reads whatever the DSL or whatever the domain language is that you're trying to model there. So there it's just another library you import; here it's a library, but it goes into your build step, rather than into your -- like, it's extending that view of your stack; it's saying "Okay, my stack now goes down to the level of 'I can plug additional things into Babel."

**Feross Aboukhadijeh:** I just had another thought - could it be used for games? I know in a lot of games you specify the layout of the level, usually in some weird kind of 2D array structure, or some long multi-line string where you put like a 1 or a 0; 1 is there's a wall there... like if you're making a grid game, there's all these weird things you do. Could you make something that's like part of the language where you just more naturally specify that structure?

**Jerod Santo:** That's the cool thing about DSL - once you have the tools for creating the DSLs, which I think is what Kevin is saying about now with Babel, you can basically create a DSL for anything... Heck, even a fictional snake language. If you can think up the actual language, you have the tools to build it.

**Suz Hinton:** I'm trying to think if the creator of Spelunky did that or not. I might actually be remembering that wrong from the book that he published about how he was generating those maps... But that's a really compelling idea.

**Jerod Santo:** I didn't write a DSL, but I did write a little bit of a wrap for this show, and I thought I would do it as an outro. What do you guys think? Will you humor me and listen to this rap I wrote? You are all mentioned by name.

**Feross Aboukhadijeh:** Oh, wow... \[laughs\]

**Kevin Ball:** I don't think anybody has ever written a rap for me before.

**Jerod Santo:** Well, then this is your day, my friend.

*"There ain't no party like a JS Party,*

*Because the JS Party don't stop...*

*Unless we're on hiatus, because the schedule ate us,*

*But now we're gonna finish on top.*

*Suz is here, she's a no-op cat,*

*She live-codes on Twitch - you know I'm down with that!*

*Kevin Ball helped lay the Foundation,*

*Now he's here to party with the JS nation. My man Feross, the mad scientist,*

*No one knows what his last name is.*

*See you next week, same time, same place,*

*If you can't make it, punch yourself in the face!"*

**Suz Hinton:** Yeah, I'm more impressed than I thought I was gonna be.

**Jerod Santo:** Well, I don't want you think that I -- it took a long time to write that, but I've been crafting it all week long. Nah, I'm just kidding.
