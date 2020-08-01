**Jerod Santo:** Hey-hey-hey, it's party time once again... I'm Jerod, I'm your friend, and I'm joined by three of my friends. Suz Hinton's here. What's up, Suz?

**Suz Hinton:** What's up? It's good to be back.

**Jerod Santo:** Great to have you. And Feross is back as well. What's up, Feross?

**Feross Aboukhadijeh:** What's going on, everybody?

**Jerod Santo:** Here for the WebRTC. And Mikeal, back from the dead, or back from wherever you've been - you're here! But where have you been?

**Mikeal Rogers:** I don't know if you've heard about this, but there's like a huge virus...

**Jerod Santo:** What?!

**Mikeal Rogers:** ...that's got everybody stuck at home. It's like a big thing, yeah.

**Jerod Santo:** We've had a long-time request, talking about WebRTC. Now, it's not the first time that we've done WebRTC on the show. It comes up from time to time, especially when Mikeal was a more regular panelist... And Feross as well. However, full disclosure, I know very little about WebRTC, so I always felt like -- what's the opposite of impostor syndrome, when it's actually accurate? I don't know... I just couldn't do a show on it, because I didn't have the expertise, and I was not about to go and acquire it. Instead, I waited for you three to all be available at the same time. I have some actual WebRTC folks, with lots of experience and insights and intuition, so we're gonna treat it the best that we can here today.

The first thing we're gonna do is just define it, give a little bit of the history, and lay the groundwork, followed by some projects that use WebRTC \[unintelligible 00:03:24.16\] hopefully to inspire and to show just what's all possible, because it's a very powerful API. But who's got the background on WebRTC? I know it's been around longer than I thought it has, which is nine years ago was the initial release. 2011. Does anybody know the history, or where it came from, and how it came into existence?

**Feross Aboukhadijeh:** I can take a stab at that...

**Jerod Santo:** Go for it.

**Feross Aboukhadijeh:** \[00:03:49.09\] So I first heard about WebRTC in 2012. It was an experimental, new browser API for letting you do peer-to-peer connections in the browser. So that means that instead of the normal way that the web has always worked, which is to have a client-server, where your browser connects to a server with a Fetch API or something like that, and asks for stuff, and the server responds, it's an API that lets you for the first time connect a browser to another browser. So my browser on my computer can connect directly to your browser, without going through a server... And then that gives you better performance for things like video and voice calling.

So that was the impetus for WebRTC - a few big video and voice vendors wanted to basically have the ability to do something like a Skype, but from your browser; so the ability to do voice and video calling. That was the impetus for the development of WebRTC. So how can we do that without having the user install something on their computer.

**Mikeal Rogers:** In the same way that YouTube and applications like that really pushed the browser to implement the video element, and not rely on these external plugins. The use cases around real-time talking to people and having video calls really drove the WebRTC use cases... So much so that when it was initially released, it didn't actually have a data channel. It was just video and audio, and we kind of had to fight to get a data channel in there, where we could just move data around, peer-to-peer - it was somewhat of an afterthought... And it's noticeable.

**Jerod Santo:** So it initially came out of Google, who acquired a company called Global IP Solutions in 2010, which was a video conferencing company. Now it's supported by Apple, Google, Microsoft, Mozilla, Opera etc. I'm curious why internet giants such as Google, such as Microsoft, such as Apple would wanna invest in a technology that removes servers from the equation, when they're so much in the middle of many of our conversations... Is there altruistic reasons for this? Are there strategic reasons why a Google would want that to be the case? Just asking obviously your conjecture at this point, but...

**Mikeal Rogers:** I mean, it's hard to find a server that is directly in between a number of people. Finding the optimal path between a bunch of people to do something in real-time is actually a very hard problem to solve if you're routing everything through a central server. So it's actually more efficient a lot of the time, especially if you're doing something real-time, to talk directly peer-to-peer. Like all of the early Skype stuff, and especially when WebRTC came out, Skype was all peer-to-peer, and it was the best that we had for real-time audio over the internet.

**Feross Aboukhadijeh:** Yeah... I mean, the simplest explanation is that if I'm calling somebody - I'm in California and they're in California, the fastest path is directly, with as few hops as possible. We keep that connection completely in California. But if you're forcing everything to go through a server, and that server is in Virginia, now you're sending this video data all the way to Virginia and all the way back to maybe your next-door neighbor who you're calling, and it's just less efficient. It's gonna lead to more latency. When you're doing real-time communications, every little bit of latency affects the quality of the call.

**Jerod Santo:** And so much of the cloud is in Virginia... That's where the cloud lives, isn't it? Virginia? \[laughter\] Suz, you were gonna say something?

**Suz Hinton:** I think it really has allowed companies to save money. It's made them able to offload bandwidth as well, which gets very expensive and very challenging to scale. But also, they can deliver a better product, because users aren't gonna sit around and go "Well, real-time is hard, so I understand why my video is really janky." That's not something that they should ever have to really be empathetic about, if we have better alternatives. So being able to just release a better product means better utilization of it... So it just makes business sense, which is why I'm always skeptical \[unintelligible 00:07:42.04\] in response to altruistic stuff.

**Mikeal Rogers:** I would also not underestimate how much prior art there was, and how much it was sort of obvious to people that you had to push in this direction.

**Suz Hinton:** Totally.

**Mikeal Rogers:** \[00:07:58.08\] WebRTC is not a standard where they were like "Oh, we have this use case, real-time video. Let's create something from scratch, or create something designed for the web, or something that is really from our values." It was literally -- WebRTC is built on top of RTP, which is like this protocol stack on top of UDP. I was working on RTP at Real Networks in 2003. It's an old technology, that has been around for a long time, to try to do low-latency video and audio... Back then over what would now be called feature phones, but back then it was just phones.

**Jerod Santo:** Is that RealPlayer?

**Mikeal Rogers:** Yeah, yeah. We were doing mobile video in 2003, on these little Nokia phones... So you had to push that over UDP, you had to have a protocol stack that could handle that, and that was where a lot of the early RTP development happened. And then that matured into 2011. So WebRTC was basically a web API slapped on top of this RTP stack and a bunch of other technologies that had kind of already been worked out... So much so that one of the reasons why it's not all that performant and has a lot of other problems is because there is just this huge protocol stack that there aren't many implementations of, and the browser vendors just kind of like took and built their thing on top of.

**Jerod Santo:** Right. So if this specification began obviously building on the shoulders of giants, on prior art, like you said, before that, but then it started around 2011, Feross heard about it in 2012... The official 1.0 release was about two years ago. So the question that I always had, especially with technologies which feel new, and feel like they're not used all that often, is "Can I use?" So what's the state of the world with WebRTC today? We're gonna talk about the intricate details, about like "Can we just use this somewhat willy-nilly and just expect it to be available in all the browsers?"

**Feross Aboukhadijeh:** So I think you can pretty much just use it. I think the one place where you run into a little bit of trouble still is on Safari and iOS. Safari was one of the most recent browser to get WebRTC, and I'd say their implementation is still a little bit buggy, especially on iOS. There's just a bunch of unnecessary limitations to the implementation on that platform. You can only request the camera one time; if you request it two times, you want two streams, maybe one in a higher quality and one in a lower quality, the second time you request it will just kill the first request, and you'll lose that stream... Just stuff like this.

You get stuff where you'll get a phone call in the middle of a WebRTC call, and then when you end the call, you go back to the browser and your stream is dead.

**Jerod Santo:** Just gone.

**Feross Aboukhadijeh:** Yeah. Or you put your airpods in and now you've lost your audio. Just all kinds of really -- anything that's basically not the happy path, you get weird bugs on iOS and Safari. But I will say, I do know that they're actively working on it. The main problem is I think they're just kind of an under-staffed team. There's basically one person working on it, and he's very actively fixing bugs, but it's just there's certain rate at which he can do it.

I've been testing out the iOS 14 beta and it's a lot better... So I think by the end of the year you won't need to do as many hacks to get it to work on iOS... But yeah, I would say that's probably the main reason why you see people doing native apps still for any kind of video conferencing or voice stuff.

**Mikeal Rogers:** Also I would say that just the quality is not gonna be consistent between browsers. So it's always gonna be there in most browsers, but the quality in general is not gonna be there, especially for video and audio. If you're doing the data channel, it's a little bit more consistent... But also something to be aware of is that the service that you use to set up the connection, this STUN/TURN server, if you don't have it set up to proxy data through that server, you're gonna have - what is it, Feross? Maybe 10% to 20% of the people that you try to connect to not actually be able to make a peer-to-peer connection; you just can't get whatever kind of port forwarding or whatever network issues are there. So it ends up falling back to just routing through that server...

So unless you have a server that you're willing to pay the bandwidth on for those users that can't actually make a proper peer-to-peer connection, the reliability is gonna be not as high as you would want. That's pretty far away from 100%.

**Jerod Santo:** \[00:12:05.25\] Gotcha. It sounds complicated. Well, let's turn to the happy side... There's lots of cool stuff you can build with this technology, and we all know the obvious ones are Google Hangouts, and Zoom uses it, and pretty much anybody doing video conferencing uses it in some capacity nowadays, inside web browsers or inside "native apps" which are browser-based technologies inside the native apps...

**Feross Aboukhadijeh:** Actually, just to add to that list too, Jerod...

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** Pretty much any native app that you see that has video and voice is using WebRTC, even if there is not a browser involved at all... Because the WebRTC library is like the C++ library that you can just download and include in your app. So basically, almost every iPhone app--

**Jerod Santo:** Something like FaceTime?

**Feross Aboukhadijeh:** Yeah, FaceTime, Facebook Messenger... They might not be using the exact -- you know, they might have tweaked the code a little bit for their own preferences, like maybe they tweaked the way the video works a little bit or something, but basically they're all using the same stack, which is WebRTC, even if there's no browser involved.

**Suz Hinton:** And there are React Native bindings for that, ironically, as well...

**Jerod Santo:** Oh, really?

**Suz Hinton:** So they use the iOS bindings in order to create the library for the React Native side of things.

**Jerod Santo:** Turtles all the way down on that one...

**Suz Hinton:** It's super-interesting, yeah.

**Mikeal Rogers:** Wow...

**Jerod Santo:** So is there an alternative? Like, is there a non-web -- is RTP (real-time protocol) still a thing? Are people using alternatives, or it's just like WebRTC took over the world?

**Mikeal Rogers:** There is a set of new protocols that are better at all this stuff, but what's probably gonna happen is that the WebRTC interfaces are just gonna be moved on top of those. QUIC is the underlying protocol for HTTP/3, and it's phenomenal.

**Jerod Santo:** Right. And it's all on UDP, right?

**Mikeal Rogers:** Yeah. And it's so nice.

**Jerod Santo:** It still scares me.

**Mikeal Rogers:** Yeah, somebody that I work with actually \[unintelligible 00:13:47.22\] works on the Go implementation of QUIC, and it's a phenomenal protocol, a phenomenal standard. It's really coming along really quickly. There's also a specification where people are thinking about and trying to work through what it would take to just put WebRTC on top of QUIC... So it wouldn't be HTTP/3 on top of QUIC, it would just be WebRTC on top of QUIC, and that'd be great. But that's a little ways off, probably.

**Jerod Santo:** Yes, and we're definitely getting ahead of ourselves as well... So let's talk about cool stuff people built with WebRTC. Present company included, I know that y'all have built some stuff; even if you no longer maintain that stuff and you don't want me to link to that stuff, you've built some cool stuff. What are the kinds of things -- I know it's not just video; there's peer-to-peer file sharing, there's audio applications, there's games... What's cool stuff that's out there?

**Suz Hinton:** I feel bad, because the stuff that I'm gonna talk about is partially something that I worked on at Microsoft. I hope that's okay...

**Jerod Santo:** It's totally fine.

**Feross Aboukhadijeh:** Of course.

**Suz Hinton:** There was a product called the 3D Streaming Toolkit, and this is something that I worked on during my time at Microsoft because of a customer need. Essentially, it uses WebRTC with virtual reality and mixed reality devices, and also mobile phones. So let's say you have someone with a low-power Android phone who's trying to use Google Cardboard; or let's say you have a HoloLens, which the entire processing unit is actually in the headset, so it's not connected to some \[unintelligible 00:15:04.17\] even though the HoloLens is actually a pretty performant device.

Let's say you're trying to manipulate lots of polygons in space; it's either a complicated game, or it's for a medical application such as being able to rehearse or understand some surgery you need to perform before you actually do it... A lot of these devices are just not gonna be able to crunch those polygons in real-time, so something that I worked on is called the 3D Streaming Toolkit.

What it essentially does is there is a central server that you have a WebRTC peer relationship with, and you're able to stream in real-time; it will render the 3D based on the data channel feedback you're giving it on pitch, and role, and how you're actually using the accelerometers on the device... And it is so fast that you don't get that motion sickness, because the feedback in the data channel going back and forth and saying "Okay, this person's now moved their head this amount" - it's able to do enough look-ahead and prediction as well, in order to render a 3D video in real-time and stream that back through the video channel back to the VR device.

\[00:16:12.12\] I hope that I've done that explanation justice, because obviously there are a lot of details that went into this... But I worked on the web client sample; even though my name is not in the commits, I was pairing with people on that... So that was a really exciting thing to see, because it means that people don't have to have these really high-end, expensive devices if you can use this protocol in this way, which I thought was really cool.

**Jerod Santo:** That's cool.

**Feross Aboukhadijeh:** That's super, super-cool.

**Suz Hinton:** Yeah.

**Feross Aboukhadijeh:** Can I ask a question about it?

**Suz Hinton:** Mm-hm.

**Feross Aboukhadijeh:** It's incredible that you could send the position data for your head over a data channel, and then render video and send the video back to you over the data... Is it also back over the data channel for the video?

**Suz Hinton:** No, I think the video is the video channel...

**Feross Aboukhadijeh:** Oh, okay.

**Suz Hinton:** I'm trying to remember... I actually could be wrong. It could have been all through the data channel as well, but I don't remember, just because it was a few years ago that I worked on this.

**Feross Aboukhadijeh:** Wow, that's super-impressive. I was wondering though - it seems like you used the data channel mainly because you wanted a UDP-type connection to the server... Is that right?

**Suz Hinton:** Yes, that's what a lot of it was. So it wasn't necessarily that there were bits about WebRTC holistically that made it make sense; it was really just to load the low-latency stuff. I think it's a very novel use case for it, because you wouldn't really think to couple this kind of thing with WebRTC, which is why I thought it was particularly cool.

**Jerod Santo:** That is cool. That's really cool. Unfortunately, that might be the coolest one, so all these rest - these are all gonna sound lame.

**Suz Hinton:** \[laughs\] That's not true, that's not true. \[laughter\]

**Jerod Santo:** Alright, Mikeal, top that. Come on!

**Mikeal Rogers:** I feel like there's sort of two buckets of projects that I see in WebRTC... One is kind of obvious - this is the only peer-to-peer protocol in the browser. So if you wanna do anything peer-to-peer ever, you have to use this. It's not like you can just open up a port and do something else, like you could if you were just running on Linux. So there's a lot of projects that are in that category, and I'll talk about those in a second.

But one thing that I started exploring a few years ago - and it's not maintained, so don't link to it - is one of the cool things about this technology is actually that it's in the browser, so we can start integrating other browser technologies and other audio technologies into it. So I did this little thing called RoleCall. Basically, it was just like an audio-only thing, because video is too unreliable... But what happened is the \[unintelligible 00:18:29.25\] would come up, and -- I was using Canvas to render the levels of each person as they talked; similar to what you would normally see in a multi-track audio recorder.

You could drag and drop files into it and play those files into the call. That was a cool thing that you could just do with the audio element. The media recorder API had just come out, so you could actually record the media. So what I did was I used that to record everyone's individual audio, and send that through the data channel to the host of the call. Something we do when we record this podcast is everybody records their local stream on QuickTime...

**Jerod Santo:** Right. Local recording...

**Mikeal Rogers:** Yeah, and then we drop it into Dropbox. So this kind of automated that.

**Jerod Santo:** Uploaded through Dropbox, yeah.

**Mikeal Rogers:** Right, exactly. So this automated that. It actually took everybody's local track... So you could record a podcast and have the WebRTC audio be the monitor, but still have the multi-track at the end. So it was like a really fun experiment, and it pushed a lot of things together... But yeah, it's not maintained anymore. A lot of stuff has changed since then, and I don't think it works.

**Jerod Santo:** So we won't link to it... You might be able to find it out on Mikeal's GitHub, but --

**Mikeal Rogers:** Yeah, yeah...

**Jerod Santo:** ...don't open a pull request. Mikeal, I remember when you were writing that we were hoping to use that actually for our podcast; it was experimental -- and I was just always curious, were there limitations that made it just not quite get there? That's how I think a lot of WebRTC things are eventually... It's like, "Well, it wasn't quite there..."

**Mikeal Rogers:** \[00:19:50.11\] One thing that you figure out really quickly is that if you're taking in all of these high-quality audio channels, and you're taking them into one of the peers who is the host of the call, while the call is going on, then there's not enough bandwidth for the actual audio quality to be good... So you can really saturate your connection really quickly. So what you actually wanna do is just buffer that kind of locally, and then send it at the end of the call. But then if somebody closes the browser, then you don't have the audio... \[laughs\]

So actually, what it turns out that you wanna do is send this to a server. This is actually a place where a central server would be quite nice... And there are some products now that do this really well, where it's using a real-time audio channel, but then sending all of the background channel to a server... And then at the end you'll see that it's like "No, no, no. Don't stop yet. We're still uploading." So there's some UI around that that's really nice. I never really got to that part of it... And I looked into solving some of those issues with some other technologies. I looked at potentially using WebTorrent to do the file portion of it, and that didn't quite work, so I started looking at IPFS, and at that time - this was three years ago - IPFS wasn't quite ready.

The next bucket of projects, the peer-to-peer projects that use this because it's the only thing to use - there's a lot of cool stuff in that category. Feross was talking about WebTorrent, and WebTorrent is amazing... IPFS is something that I work on a little bit - it's really nice now; it uses that channel as well. And then IPFS is really built on some primitives that also take advantage of this. I work on IPLD, which is like the data structures... And we don't do anything specific with WebRTC, but if you wanna take our data structures and decentralize them, you would have to use WebRTC in the browser.

The whole networking layer behind IPFS is a project called libp2p, and this is really like a peer-to-peer networking stack. If what you're looking at is the whole problem of peer-to-peer networking, and content discovery on a peer-to-peer network, and if you wanna run this in the browser, in Linux, everywhere, and every kind of environment, you're gonna need all these kinds of fallback logic, and all these different protocols on different devices, and you're gonna have to think about this in a much bigger way than you would if you were just targeting one system. That's what libp2p kind of does.

So yeah, if you have that whole problem, it's a really good project. I think that if you wanna hack together a cool little web project, it's a little bit heavy for that one thing. Ethereum 2 is gonna be built on top of libp2p, because they have this whole problem...

**Jerod Santo:** Right. So where does libp2p sit in a peer-to-peer stack with regards to WebRTC? Underneath it? It's completely distinct from it?

**Mikeal Rogers:** No, so WebRTC is one of the potential protocols that you would use in the libp2p.

**Jerod Santo:** Gotcha.

**Mikeal Rogers:** And you can use other protocols as well. QUIC is one of the protocols that you can use in libp2p.

**Jerod Santo:** Gotcha.

**Mikeal Rogers:** One of the things that we should really talk about is if you're used to writing networking code on regular systems, you take your IP address and your port and you say "Hey, connect me on this IP address and this port." It doesn't work well with port forwarding, there's some issues with port forwarding, but for the most part you have this permanent identifier... Like, "I am going to be on this thing for a long time. Here is how you connect to me." And one of the ways that BitTorrent solved decentralized discovery was a distributed hash table (DHT), where people take my IP address and my port and they shove it into this table for a while, and they say "Hey, I've got this content. You can connect to me." WebRTC can't really do this.

The way that WebRTC works is that you effectively ask it for almost like a connection token; you can think about it like that. That's a one-time use, and you've gotta give that to somebody else, and then they give you a token that is specific to that pairing, and then you use that to connect to them. And behind the scenes there's all this STUN/TURN server stuff, and it's very complicated; Feross can talk a lot more about how painful this can be, I'm sure. But the main thing is that there isn't really an identifier that you can put into a distributed hash table (DHT), where you say "Hey, this is how you connect to me", because in WebRTC these are ephemeral connection identifiers. So yeah, there's a bunch of other problems that you have to think about solving in terms of peer discovery if you're using WebRTC in addition to other protocols.

**Break:** \[00:23:50.14\]

**Jerod Santo:** Alright, we are now going to do a WebRTC primer, but we're gonna do it as a team, and we're gonna build on each other's technologies, just like WebRTC builds on technol-- I don't know. Feross is gonna explain something, and then he's gonna pass it to Suz, and then she's gonna pass it to Mikeal, and hopefully it's good. But if not, at least it was fun... Otherwise it would have been boring.

**Suz Hinton:** \[laughs\]

**Jerod Santo:** So here we go, Feross... WebRTC in a nutshell, starting with Feross. Go ahead. Primer us.

**Feross Aboukhadijeh:** So I'm gonna start at the absolute lowest level. So we're gonna go all the way down the stack to IP, or the internet protocol. I'm sure most people have heard of an IP address; that's the level we're gonna be operating on here for the beginning of my explanation. So what is IP? IP is basically a way where you can take a message, a packet of data, and it's kind of like an envelope - you can sort of stamp a destination on the outside of the envelope and say to your router "Hey, please try to deliver this to this IP address." And every computer on the network, every device on the network is assigned an IP address, and the internet as a whole sort of just tries its best to route these little packets of information to the correct destination based on the IP address.

Okay, so that's the lowest layer. Then on top of that there's two main protocols that people have sort of added on top, which are called TCP and UDP. TCP is the more common of the two, and it gives you a bunch of nice reliability enhancements on top of IP. So you can sort of, as an application, say "I wanna send this giant chunk of data, in fact too big to actually fit in a single envelope", and your operating system will split that data up into little individual packets of information and send that across the internet... But it will do a bunch of nice things like stamp little numbers sequences onto each of those, so that the recipient can assemble them in the right order.

**Jerod Santo:** That's still good...

**Feross Aboukhadijeh:** Yeah, and it'll also ensure that if one of the envelopes doesn't arrive, that there's a way where the recipient can effectively ask the sender to send that data again... Something like that; I'm speaking really high-level here.

So anyway, that's TCP, and that's what most applications use. Then there's this other one called UDP, which is really simple. It's just like IP almost. You just sort of -- you stick an envelope in the mail; maybe it'll arrive, maybe it won't. It adds one additional concept on top of IP, which is the idea of a port.

A port is just -- like, when the recipient gets the packet and they open it up and they look at the data inside, there'll be a little port number attached, which says effectively which application on my computer should this packet be delivered to... And the operating system will, based on that port number, deliver the packet to maybe the web server on your computer, or the mail program on your computer, or some other program on your computer. That's basically what UDP is - it's a really light layer on top of IP.

\[00:28:03.01\] So where I'm going with this is just that these are basically what all the applications that we use are built with... And for many years, this is how you had to build -- you know, when you're building a native app, you wanna have it talk to some other computer, this is what you're gonna do. The problem arises when you start to think about the browser... Because in the browser you don't necessarily want random sites that you're visiting being able to send packets in this manner. I'll just give you one really simple example to think about why maybe you don't want this.

All the devices on your home network have IP addresses... So if you go to a site, and that site could send just arbitrary packets to any IP address, one of the things that could happen is say your printer is on your network; an ad on the website that you're visiting could send some packets to your printer and cause some pages to start coming out. That's just really un-intuitive for people.

**Jerod Santo:** Free coupons.

**Feross Aboukhadijeh:** Yeah... So basically this sort of boundary that has historically been in place here is that if you install an application on your computer, you're trusting that application to be able to do TCP and UDP. You sort of said "I trust this thing. I'm gonna let it talk to the devices on my network. I'm gonna let it talk to computers on the internet, no problem." But in the browser context, this is just -- because of historical reasons, all these printers and all these different devices have been built in such a sort of insecure way, they assume that if somebody can send packets to the printer, well then they must be a trusted person, because hey, they got on the Wi-Fi network and they were able to send me packets. And so because of that, we had to basically invent a whole new thing for the web, to be able to make connections in a safe way, and that's where WebRTC comes in... And that's where I'll turn it over to Suz, to go from there.

**Jerod Santo:** Very nice, Feross.

**Suz Hinton:** That is a beautiful hand-off, that dovetails nicely into signaling... Which is a concept for WebRTC that is set up in order for this trusted communication to happen. Is that right, Feross?

**Feross Aboukhadijeh:** Mm-hm.

**Suz Hinton:** Cool. So signaling is basically the process that happens right at the beginning, when two peers are actually trying to connect to each other. And these two peers might not even know of each other's existence at this point, and so it's really signaling session control messages in order to help set up the session, and also for things like peer discovery as well. And STUN fits a little bit into peer discovery as well; I might hand it to Mikeal Rogers for that later, but... We'll go back to signaling.

So if two peers want to connect, they need a way to be able to communicate a couple of different things. They need to be able to say "Where am I on the network? What is actually my location?" And then on top of that, they need to say "Well, I have XYZ capabilities, so I'm able to do video, I'm able to do audio, but I also want to receive audio and I want to receive video." Now, you can have any combination of those things, so signaling is a way for you to describe yourself as a peer, and that goes up to what's called a signaling server. The signaling server is able to help with these initial kind of session transactions, and it's responsible for basically allowing that trust, that first handshake I guess is a way to happen so that two peers have all of the information they need about each other, in order to start a direct communication with themselves... And their aim is for the signaling server to only be really just facilitating that end result, which is the peer connection.

So the signaling only really happens at the beginning, when you're telling the signaling server, "Hey, I'm up here. I wanna connect with these capabilities, and I'm able to do XYZ as well." And once it's kind of helped those two peers connect -- the signaling server is not part of the relationship after that... So it's just responsible for that beginning part. So it's just really allowing you to register yourself as what's called a candidate, which is I want to be considered as a candidate to have a peer connection with another peer.

So that is one specific external server that you need to actually maintain. There are public signaling servers that you can use, I believe... Again, they don't really have SLAs; this is where we're gonna talk about production and scaling later... But you have options; you can either set up your own signaling servers, or there are other public signaling servers as well... But you probably don't wanna use an actual public one in production; it's really just for messing around.

\[00:32:12.12\] But there is kind of a problem when it comes to signaling and trying to communicate your IP addresses, and that is that networks can be really complicated. Basically, network translation is a hard problem, and sometimes it can be difficult to actually glean what IP address appears actually behind, so that's where STUN servers come in... Right, Mikeal?

**Jerod Santo:** Very nice.

**Mikeal Rogers:** Yeah, so TURN-STUN, the entire system - one of the reasons why it works so well is because it's a foreign server, it can look at the request that you send it, and go "Oh, this is what this person looks like on the internet." Not what they look like to themselves, but what they look like on the internet. And then you can figure out "Oh, do I need to do port forwarding? Do I need to do NAT hole punching?" There's all this crazy stuff that you have to do behind the scenes to actually get the connection out. So what you get from that service is all this information about "Oh, this is what it would look like to connect to me", like get ready for this kind of a connection. And then if it can't make that connection, if you actually can't connect directly to these peers, it can as like a proxy between those two things, and let it break through.

And that's kind of like at a high level, as much as I'll go into that... Because there's something else interesting that happens once you have a connection. All of this is prelude to actually connecting to a peer...

**Suz Hinton:** \[laughs\] That's exhausting.

**Mikeal Rogers:** I know, I know... But once you actually have a connection to a peer, now I have to send data. Feross talked about the difference between TCP and UDP, right? And TCP guarantees that I get all these packets, and UDP doesn't. And there's actually an algorithm and a protocol for deciding how to retransmit those packets, and when to retransmit those packets. And it ensures that all of them arrive. So the cool thing about doing this on top of UDPis that if you're streaming video and audio, and you've actually lost the connection, you can say "Don't bother sending me all these things that I already dropped. Please just start sending me the new things."

**Jerod Santo:** "Keep going", yeah.

**Mikeal Rogers:** Like, "Let's just give up on the old data. Let's just take the new stuff." So that's like a really important aspect of that. But there's a bunch of other stuff, too. TCP does not have a pluggable algorithm for how it decides how to do retransmission. So even in like a data channel, where you do want all of the data, there's things about TCP that are actually not that great.

If you've heard of TCP Fast Start, the way that TCP works is that you just sort of send packets as fast as you can, until you see a packet loss, and then you sort of back off, and there's an algorithm to figure out how much you should back off. But that algorithm was written in the '80s, the '90s maybe... We did not think the networks would be this fast, so TCP Fast Start was like "Hey, let's ramp up a bit faster. Networks are faster now, let's do that quicker." But also only looking at loss is somewhat problematic.

There are networks - these things called mobile phones - where one of the things that the mobile phone networks do is that they actually buffer these packets. They keep them around, even if they can't retransmit them, to try and help these connections that are kind of going in and out. But nothing but loss is visible to TCP. It doesn't see that the roundtrip time for these packets are actually getting longer and longer because some mobile network is buffering them... So you get really poor behavior out of those algorithms. So UDP, and a lot of what the RTP stack behind WebRTC does, and a lot of what QUIC does is it comes up with a lot of new algorithms and new factors to look at in designing how you do the congestion control and how you really optimize the speed of the data, whether you want all of it or not. So that's in a nutshell how all that stuff works...

**Jerod Santo:** So if you were to differentiate and describe STUN versus TURN, what are those things? Mike? Okay, Feross... Mikeal looks away.

**Mikeal Rogers:** No, go to Feross. \[laughter\]

**Jerod Santo:** Something's over there! \[laughter\]

**Mikeal Rogers:** \[00:35:54.20\] I'm trying to remember which one is STUN and which one is TURN right now, so... I think that Feross should probably do it. \[laughs\]

**Suz Hinton:** Totally.

**Jerod Santo:** Okay. Feross, go ahead.

**Feross Aboukhadijeh:** So STUN serves two purposes. The first is what Mikeal said already - your browser sends a packet to the STUN server, and the STUN server responds with a single thing. It just says "This is what your IP looks like to me." And this is useful because of what Suz mentioned already, this network address translation (NAT) thing that is going... And that's the way that most people's networks are set up, so I kind of lied when I said every device on the internet has an IP address. It turns out that IP addresses became kind of scarce, and so what people ended up doing is your internet service provider gives you an IP address for your whole household, but you might end up having 4-5 devices on that Wi-Fi network that are all sharing that single IP address... And the way that happens is that all your devices are given sort of fake IPs by the router, and they believe that that's their IP address.... And then when you send messages to the router, you actually say "This is my IP address", but the router is like "Oh, I know that that's not really your IP address. That's a fake one that I told you to believe." So when the message actually goes out to the true internet, it has to rewrite that and translate that in the packets that it's sending out... And that kind of messes with everything. It kind of breaks everything.

So now when you're trying to tell the peer you're trying to talk to in WebRTC "Hey, this is my IP. You can connect to me", your own computer doesn't even know its own IP address. It's being lied to, basically, by the router... So that's what STUN is for. STUN is like - I send a message to the STUN server, and the STUN server says "This is what your IP looks like to me", and now you've been able to discover that.

And then the second thing STUN does is that active you sending a packet out to a server opens up a little hole in the firewall, that's in the router, and that hole stays open for a couple minutes. During that time, the remote peer who you're trying to talk to can actually send packets that go through that hole and reach you. So it does this thing called hole punching. It opens up a little temporary hole in the firewall to let stuff in.

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** So that's what STUN is for. And then TURN is relatively simple to understand. TURN is like, if all these things fail, and somehow, even after doing this hole punching and doing this whole process we can't connect to each other, and then we give up, then we basically just go to this other server and say "Look, we couldn't connect directly to each other. I'm just gonna connect to the TURN server", the other person I'm trying to talk to, the remote peer - they're just gonna connect to this TURN server like it's any other web server on the internet, which you're always pretty much allowed to do... And then we're just gonna send our data to that server and it's gonna relay it. It's like a WebSocket server, or something...

**Jerod Santo:** It's like a proxy. So that's the case where Mikeal said 10% or 20% of the time that has to happen, for some reason...

**Suz Hinton:** Yeah. And talking about WebSockets - when you have WebSockets, if that WebSocket handshake fails for any reason, a lot of libraries have built-in polling, or some other kind of way of communicating. So in the same way in WebRTC we have to have a fallback as well, because networking is hard... So technically, if you will go into a TURN server, it's not really peer-to-peer anymore; you have some proxy in-between.

All of these servers are actually very simple in what they do, other than signaling - I feel like that's the most complex one... But really, they all have a role, and they're simple. It's just because the abbreviations are really hard -- TURN to me doesn't sound like the fallback. TURN sounds like signaling, because you're taking turns to say whether or not your offer is gonna be answered by someone else and accepted, and things like that... So I always used to screw that up all the time.

**Jerod Santo:** It should be like a HELP server. "Help me out here!"

**Feross Aboukhadijeh:** The way that I remember is that TURN has an R in it, which stands for Relay.

**Suz Hinton:** Oh, yes, I've been told that one, too. That's very clever.

**Jerod Santo:** So in a hypothetical IPv6 world, where addresses are plentiful and every device has its own address, and NAT is a thing of the past - which maybe it wouldn't be - in that world is a STUN server unnecessary then?

**Feross Aboukhadijeh:** Yeah, I think so. Because you don't need to be told your own IP address (you already know it), and you wouldn't need to poke a hole in a NAT, because there is no NAT. So STUN's entire purpose would be gone in that world.

**Suz Hinton:** I also just wanna correct myself -- again, I get confused over all the servers... So you can't really have a public signaling server, because there's just peers flying around, and you don't know who they are... So I need to correct that and say you don't necessarily have public signaling servers you can rely on, but you do have STUN servers that are public... So yeah, I just wanted to correct that as well. I forgot that signaling is more of a private thing. So there are commercial offerings, but most people just roll their own signaling, because there's not a lot of traffic.

**Mikeal Rogers:** \[00:40:19.06\] Also, one thing that we should note really quickly is that in your JavaScript code, when you get these signals back and you have to do something with them, you really need to make sure that you don't leak those signals and you don't post them anywhere publicly that people can see.

**Suz Hinton:** Yes!

**Mikeal Rogers:** Because private information is inside of those signals, like the internal IP address of those people.

**Jerod Santo:** Oh, really?

**Mikeal Rogers:** Yes, yes. Because the internal IP address is important for the whole punching part...

**Jerod Santo:** In order to keep that connection open.

**Mikeal Rogers:** Well, just to start the connection, actually. The signal is just there to start the connection. A lot of people have set up signal exchange servers; there's a bunch of different projects that different people have done in the Node community, for instance... And a lot of them just exchange these in plain text. So the server can actually always look at every single individual internal IP address, and that's kind of a problem.

**Jerod Santo:** I didn't know that.

**Mikeal Rogers:** So what you really wanna do is come up with an identifier for the peers that you're talking to that's like a public key, and then you could actually encrypt that signal and send it through a signal server without the server being able to see that private information.

**Suz Hinton:** That makes total sense. So it's easy, right? Everyone's gonna go out and implement all this stuff here.

**Mikeal Rogers:** Mm-hm.

**Break:** \[00:41:21.26\]

**Jerod Santo:** Alright, so that was a deep primer... Let's talk real-world, production-grade WebRTC gotchas, experiences... Feross, you have WebTorrent, which is an excellent example of something that's been out there in the wild, and for a while, and millions of people are using, which uses WebRTC. Can you tell us a little bit about that?

**Feross Aboukhadijeh:** Sure, yeah. So WebTorrent is an implementation of BitTorrent for the browser. Basically, it's a user of WebRTC because of what I was mentioning before, where you can't really open up a socket to do TCP or UDP in a browser. With WebRTC you can actually get this peer-to-peer connection going on. This means that you can do something kind of like a -- imagine a YouTube site where when you're watching video on the site, you actually can share that video with other people who are watching the same video as you... And there's actually a great project I wanna call out called PeerTube, which is doing this today.

So if you wanna host your own YouTube site, you can go download PeerTube and run it on your server, and then upload videos like you would to YouTube... And when people are watching video at the same time, it'll try to use peer-to-peer whenever possible; that's actually powered by WebTorrent. So that's an example of something really practical that people are doing with WebTorrent today.

But more generally, you can share any kind of data over WebTorrent. The way it works is it uses basically all the parts we've already discussed earlier. It has the signaling part, it has the STUN part, and basically, when I get all these peers that are interested in some piece of content to be able to find each other and to connect to each other.

\[00:44:04.23\] So we have the signaling server, where you basically tell the server "Hey, I'm looking for this file", and that server keeps track of who's looking for which files. So when somebody else comes along and says "Hey, I'm looking for this file" and it's the same file, then the server can introduce those people to each other through that signaling process that Suz described. And then now the peers can get directly connected.

And once they're directly connected to each other, they can sort of send whatever data they want, and that part is handled in a way that traditionally BitTorrent is handled, where you send a piece of the file to the person, and they can verify that it's correct, and then you ask for a different piece, and they'll send that piece to you, and you trade pieces, and eventually everybody gets the file. You can go read about BitTorrent if you're really interested in how that works... But yeah, that's basically what WebTorrent is. It's a real-world application that's using WebRTC.

It's interesting - one thing I'll say really quick is just that WebRTC is this big jumble of things that people can kind of confuse... There's a lot of parts in it. One part is it gave access to the webcam and the microphone in the browser. That's actually not used by WebTorrent at all. We don't use the webcam or the microphone. So that's one thing that people are really about WebRTC for. And you can use that part -- you can build something where you just get the user's webcam and you just do something in the canvas, and you don't even talk to the internet at all; there's no peer-to-peer involved at all, there's no networking. It's a completely local web app.

So that's one thing, but then there's also this other part where you can do these peer-to-peer connections, and when you're doing the peer-to-peer connections there's actually two ways to do that, that are embedded in that. One is to do video and voice calling, and in order to pull that off, the browser does all this fancy stuff, like figuring out when to lower the quality of the video, or when to give up on retransmitting parts of it, or all this codec and video magic... And that's another part of WebRTC that we don't even use at all in WebTorrent, because we're not doing live video, we're not doing lossy video transfers. The part that we use is this third thing called the data channel. That part is just like a web socket, but it's between two browser tabs, basically. And over that socket you can send any kind of data you want, and it's sort of gonna pop out the other end and it's gonna be exactly what you sent. So with that, you can think of it like it's a WebSocket, or it's a TCP socket, but it's actually in the browser, between two tabs. So that's all you need to basically build something like BitTorrent in the browser. Hopefully that makes sense...

**Jerod Santo:** Mm-hm.

**Mikeal Rogers:** So Feross isn't giving himself enough credit here... What Feross did, without politicking in standards for a decade, without bugging browser vendors for a decade -- Feross is like an individual developer on GitHub, and upgraded the whole internet, actually.

**Feross Aboukhadijeh:** Oh, God...

**Suz Hinton:** Yeah, the abstractions...

**Mikeal Rogers:** No, no, this is very true.

**Jerod Santo:** Please, explain that.

**Mikeal Rogers:** Okay, so in 2013, when this project started, I believe a majority (at the time) of internet traffic was BitTorrent. I think it was a majority. It was very high. It was like a noticeable percentage if it wasn't the majority; it was something like 30%-40%. So this is like a protocol that accounts for a substantial portion of what is happening on the internet... And the thing about BitTorrent at that time - and on some level still - it is a protocol that is not compatible with the web. Every part of it basically was incompatible with the web. The one part that you might be able to make work on the web is the torrent file format, and kind of breaking up the file... But the actual transport to \[unintelligible 00:47:26.22\] WebRTC. The tracker protocol is not a protocol that you could use in the browser either.

So what Feross did is he took the torrent file format, and then made it work on top of WebRTC and on top of a new tracker format using WebSockets. So now you have a web version of BitTorrent that wasn't actually BitTorrent.

**Suz Hinton:** But it feels like it, yeah.

**Mikeal Rogers:** \[00:47:55.03\] It feels like it, it feels like it. But this isn't like upgrading the internet; this is just like a RAD application. Then what Feross did is he implemented all of this in Node, and in Node.js you can actually talk to the real BitTorrent protocols; you can talk to the real trackers, you can talk to the real network, you can get on the DHT... You can participate in a network that everybody on the internet that is using BitTorrent is using.

And what happens when you use his library in Node.js, or when you run the desktop version of WebTorrent as an Electron app, is that you bridge these two networks together. So now all of the people just on UDP (in the old BitTorrent protocol) are not in a separate network from everybody who's in WebRTC. These networks are now bridged together. And this was so successful that they upgraded -- BitTorrent actually upgraded some of their protocols to include WebTorrent trackers as a thing in there. Now if you look at most BitTorrent files, you will see regular trackers AND WebTorrent trackers, all the major implementations... Even beyond Feross' Node.js version, a bunch of the other main implementations implemented support for all the WebRTC stuff, and they're also bridge nodes now. All of these changes have just been taken into all of the regular BitTorrent ecosystem, and that entire portion of the internet is now compatible with the web, and upgraded just because of the work that Feross did. So there we go... \[laughter\]

**Suz Hinton:** Have we embarrassed you enough yet? \[laughter\]

**Feross Aboukhadijeh:** I couldn't blush anymore than I am now... \[laughter\]

**Jerod Santo:** Well, let's see if we can fix that. So my soundboard is broken, but I do have an applause track on my soundboard that's broken; let's all just clap for Feross real quick... \[laughter\]

**Feross Aboukhadijeh:** Oh, thank you guys. Thank you. Oh, my God... Thank you, everybody.

**Jerod Santo:** Yaay! Okay, he's actually more red now...

**Mikeal Rogers:** \[laughs\]

**Jerod Santo:** So that's pretty awesome.

**Mikeal Rogers:** Yeah.

**Jerod Santo:** That's gotta feel pretty good, Feross. You upgraded the internet, man...

**Feross Aboukhadijeh:** I feel really good, yeah. \[laughter\]

**Mikeal Rogers:** I mean, nobody gave him any money for this, by the way... So the credit is all he gets. \[laughs\]

**Feross Aboukhadijeh:** Yup, that's true. The project has been really fun to work on though. I got to meet a lot of people around the world and give talks on this stuff. I made so many connections with people, and stuff... So it's been really good for me, even though I haven't made any money, like Mikeal said... \[laughter\] So it's been really fun.

**Mikeal Rogers:** I mean, you're fine, but--

**Feross Aboukhadijeh:** Yeah, exactly.

**Mikeal Rogers:** But for somebody who upgraded the internet, I think that you would think that there would be some kind of cash bonus.

**Suz Hinton:** Yeah.

**Jerod Santo:** Well, if you really wanna get paid, now you have to downgrade the internet and hold it hostage, and then you'll just upgrade it again for a ransom.

**Mikeal Rogers:** Oh, don't do that.

**Jerod Santo:** No, don't do that.

**Suz Hinton:** It's impossible for you to research this space and try to at least inject WebRTC into something that you're working on, such as - I have a side project that I'm working on, that uses WebRTC. It's like multicast, actually. One peer to multi-peers, which is really another interesting use case... But it's impossible to spelunk through open source land, looking for something to use, without finding something that Feross has either -- he's \[unintelligible 00:50:48.21\] or he's actually written the thing... So I think that's important to call out.

**Jerod Santo:** Absolutely.

**Mikeal Rogers:** And Matthias, too. Matthias Buus.

**Suz Hinton:** Yes, Matthias Buus is -- yeah, absolutely.

**Mikeal Rogers:** Yeah, a bunch of his libraries are always in there.

**Feross Aboukhadijeh:** Thank you, guys.

**Suz Hinton:** Matthias and Feross were very influential on me when I first got into Node, because it really made me understand what the community can actually achieve with this kind of stuff. I think it's really awesome.

**Feross Aboukhadijeh:** And actually, Matthias is the one who inspired me originally to even realize that you could do streaming in BitTorrent, because he made this amazing library called Peerflix. Do you remember that?

**Suz Hinton:** Yeah.

**Feross Aboukhadijeh:** It was like, "What if we just took the torrent protocol and made it into a stream?" So you could say like "Just start feeding me the first bits of the file, so I can start playing it back in VLC or in some kind of video player." And that was the first time I had ever seen that, and it was so cleanly done... Of course, WebTorrent - I just straight up copied that from his code, basically...

**Suz Hinton:** Yeah. I have memories of him showing this off at NodeConf EU, which I'm sure all of us -- I know that Mikeal was there.

**Mikeal Rogers:** Yeah, yeah...

**Suz Hinton:** It just felt so magical.

**Mikeal Rogers:** \[00:51:58.06\] So he did this really cool thing, and I can't believe that this didn't turn into a company, or something... But he did this really cool thing where he would take a Docker image and then share it over WebTorrent, and then mount it via FUSE.

**Jerod Santo:** Wow...

**Mikeal Rogers:** So here's the amazing thing about this -- what Feross has talked about, where you would get a WebTorrent thing as a stream. Something about the BitTorrent protocol is like, as you're getting every part of a file, you don't prioritize one part of the file over another, and then at some point somebody realized "People like to just start playing these files..."

**Jerod Santo:** The beginning is important.

**Mikeal Rogers:** ...so maybe let's get the first parts first.

**Jerod Santo:** Exactly.

**Mikeal Rogers:** So what they did was they changed the protocol to get the first parts first... But what Matthias did was he said "Well, if you're just request parts of the file, let's just prioritize those." So it could really be any part of the file. So when you did this FUSE thing and you mounted like a 4 GB Docker image, and you had none of it, it would boot really quickly, because all you needed to boot it and all you needed to do to actually start running it were these very unpredictable parts of the file system.

**Jerod Santo:** Yeah, exactly.

**Mikeal Rogers:** So you could boot these huge images really quickly, and just kind of fill in the rest of it while it was going. I still cannot believe that this is not part of somebody's deployment infrastructure somewhere.

**Jerod Santo:** That's amazing.

**Feross Aboukhadijeh:** It's super-cool. I still remember the part where he typed "node" and hit Enter, and it freezes for like two seconds or three seconds while it's going and getting the part of the file system where Node is installed... And then eventually the prompt comes up. And then after that it's just instant, because it's now cached locally. But it's this idea of just-in-time fetching the parts of the file system that you need is so cool.

**Mikeal Rogers:** This is actually one of the points in time where Merkle trees really clicked for me...

**Suz Hinton:** \[laughs\] Yes...

**Mikeal Rogers:** The underlying data structures that are here for this are called Merkle trees... So I had worked on CouchDB and I wrote PouchDB, and one of the problems that I always ran into was "How do you do partial replication of a data store?", because it's not predictable which parts of it that you would need. So how am I just gonna be syncing back and this data structure where I don't know which parts that I want. And this sort of demo that Matthias did showed me that "Oh, if you use these Merkle-based data structures, then you can actually just wait for the reads to come in, and then just access the parts and sync around the parts that you're accessing in real time." And you don't need to build a sync profile for every user on every device ahead of time, you can actually just wait to see what they do, and then make that the profile. There's like a straight line from that to me working on this IPLD now.

**Jerod Santo:** That's really interesting stuff. Let's talk about one quick -- we're bumping up against our time... Let's talk about one quick -- it seems like the biggest gotcha... Mikeal, you mentioned it in the first segment, which seems that this TURN server becomes a relay for clients that can't connect directly... So I think a production gotcha that many people will bump up against and maybe they didn't see it coming is massive bandwidth costs... Because you have to host that or pay for it somehow. How does WebTorrent work around that? How do people who run video-conferencing things -- I mean, do they run their own TURN infrastructure?

**Suz Hinton:** I have that challenge, too.

**Jerod Santo:** You do? Tell, us about it.

**Suz Hinton:** Yeah, with the multi-peer.

**Jerod Santo:** So how do you handle that, Suz?

**Suz Hinton:** I've bought a really big computer in an Arizona data center...

**Jerod Santo:** Oh, you did?

**Suz Hinton:** ...that has terabytes of bandwidth every month, and a lot of RAM to handle all the peers, and such...

**Jerod Santo:** Okay...

**Suz Hinton:** It costs me $200/month.

**Feross Aboukhadijeh:** Are you serious?!

**Jerod Santo:** Oh, that's not too bad... You're serious about this project then. Are you using it for your streaming, or what's the \[unintelligible 00:55:24.27\]

**Suz Hinton:** Yeah, I don't wanna reveal too much, but it's a stream-related thing, because I wanna move off third-party services to my own.

**Jerod Santo:** Gotcha.

**Mikeal Rogers:** No, tell us the IP address. Put it out there in public. \[laughter\]

**Suz Hinton:** I should do time-share on it, honestly... It has so much RAM, it's not even funny.

**Jerod Santo:** Oh yeah, because if you're only using it for your own streams, then it's tons of non-peak time.

**Suz Hinton:** Well, I don't use it now, but I'll only technically use it on Sundays, so I could just time-share this, or do research \[unintelligible 00:55:53.00\] and I really should be doing this.

**Jerod Santo:** That would be awesome.

**Suz Hinton:** Anyway, sorry, Mikeal...

**Jerod Santo:** \[00:55:59.12\] What about WebTorrent? Is TURN involved there, or is it just not connected to those peers, or what?

**Feross Aboukhadijeh:** So it really matters what your use case is with WebRTC, to decide whether you really need to worry about these peers that can't connect. In the case of like a video call where you're trying to (let's say) do a Google Hangouts with somebody - if you can't connect to that person and then it just fails, that's a really huge problem... Because from your perspective, the app is just broken, right?

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** But if you're in a system like WebTorrent, where you're trying to download a file and there's maybe 20-30 people who have the file, and you can't connect to a few of those people, then it's not the end of the world. So you can just say "Oh well, I'll throw my hands up. I'll just have fewer peers to download from." But it's not really the end of the world.

So it doesn't really make sense for WebTorrent as an open source project to be running a big relay server for all these random people out there to be sending their traffic through...

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** And especially, we don't really wanna be involved in that business anyway, because...

**Suz Hinton:** Yes...

**Jerod Santo:** It's not a good--

**Feross Aboukhadijeh:** Yeah, we don't know what torrents are being downloaded, and stuff like that.

**Suz Hinton:** Exactly.

**Feross Aboukhadijeh:** So basically, in WebTorrent we just don't include the TURN server by default. But if you really want to -- say you're using... I'll give you an example - we have a site that we run called Instant.io, which is basically a place where you can drop a file and then get a URL and share it with your friends... Similar to Firefox Send, or something like that. And it uses WebTorrent behind the scenes, and then that's how it does the file transfer... But in that situation you really wanna make sure that when you send a file to somebody, that it's gonna arrive, and you wanna only have one person who's seeding that file. Like, I'm trying to share it with YOU, Jerod, and so you'd better be able to connect to me, right?

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** So in that situation you would want a TURN server. So we actually do run a TURN server on that URL to help their connections to succeed... But that's not built into the WebTorrent library that anyone's just gonna pull off the shelf. That's like an option you add in.

**Jerod Santo:** Okay. So another production situation that you have is your Virus Cafe application. That's WebRTC, right? How are you handling the TURN in that situation?

**Feross Aboukhadijeh:** That's, again, just a TURN server that I'm running.

**Jerod Santo:** So you're just paying the bandwidth costs.

**Feross Aboukhadijeh:** Yup, paying the bandwidth costs.

**Jerod Santo:** Well, if that's the way people go about it, that's what I'm trying to get at.

**Feross Aboukhadijeh:** That's what you have to do, yeah.

**Jerod Santo:** Is that prohibitive for you?

**Feross Aboukhadijeh:** Nope. I mean, in my case there's not enough people online. I'm paying $5/month for my server, so... I'm not as popular as Suz. \[laughter\] Suz is precisely -- what is that, like 80 times more popular, or something? 40 times?

**Mikeal Rogers:** When \[unintelligible 00:58:23.12\]

**Suz Hinton:** Oh, that's amazing... Oh, my God, yeah.

**Jerod Santo:** Okay, so it is the buddy system at this point.

**Suz Hinton:** Yeah, I mean -- managing that many WebRTC peers is very expensive, and it uses a lot of memory, so yeah... 300 peers connected to one peer is a lot, so that's really where my traffic is coming from, really.

**Jerod Santo:** Gotcha. Another solution - I'm sure there's commercial TURN providers out there that are probably cheap to get started and then scale up astronomically. Suz, is there a reason you went with the hardware solution, versus turning to a provider? I think Twilio has a TURN service. People like that.

**Suz Hinton:** It's mostly because the live video is powered by WebRTC, but it's not necessarily something that I wanna maintain. Does that make sense?

**Jerod Santo:** Yeah.

**Suz Hinton:** I used a Java application that does absolutely all of that for me... TURN is not super-duper relevant, but the Java application also provides HLS streams too, which is not WebRTC. So it's a whole package, if that makes sense.

**Jerod Santo:** Gotcha.

**Suz Hinton:** So the WebRTC is just the low-latency version, so that people can -- I can respond to people within a second of them chatting with me. That's why it's so important to me to have that low latency.

**Jerod Santo:** Awesome.

**Suz Hinton:** Sorry, that did not answer the question, but I'm just not concerned with that stuff, because I have something that handles it for me... But yeah.

**Jerod Santo:** Yeah, well - if you don't have a problem, don't solve it.

**Suz Hinton:** I'm still gonna have a lot of bandwidth, because I am still the peer that's multi-casting, so I kind of am acting not like a TURN server, but I have the same challenges as a TURN server has.

**Feross Aboukhadijeh:** \[00:59:57.25\] That's fascinating. I wonder how much of your bandwidth bill is because of the other stuff that your server's doing, versus the TURN part, specifically... I would be curious to know that. Because in my experience, the -- I was paying a lot of money to Twilio, and I was using them as my TURN; then when I switched to running it myself, I'm now running it on like a $5 or $10/month Linode server... But I've probably given Twilio 5k or 10k over the years for the TURN service. Now I'm paying $5 or $10/month on Linode. I don't know why it was so expensive on Twilio, to be honest.

**Jerod Santo:** Right. Even the multicast, 300 peers, 10% of those people need TURN - it's 30.

**Suz Hinton:** That's the thing, yeah. So you know that I have 300 peers, yeah. I have usually on like a good day (on Sunday) 300 people, but that can spike, depending on if something like \[unintelligible 01:00:43.29\] retweets me - I had 600 that day. So I've been trying to optimize for up to 1,000 viewers, and I've just been basically setting up ridiculous Kubernetes-powered load testers, so that all these Puppeteer instances are trying to connect by WebRTC... And just doing a lot of calculations of my bandwidth to make sure that I don't end up going over my bandwidth requirements. So it's not that it will be a rising cost to me, it's just that I have budgeted $200 to cover what the maximum is that I probably need.

**Jerod Santo:** Yeah, your peak.

**Suz Hinton:** So it doesn't vary; I get like a limit, if that makes sense.

**Jerod Santo:** Mm-hm. That's super-fascinating stuff. Once you go public and are using it, I trust you'll be publishing something that we can read, because it's sounds fascinating. Your setup--

**Suz Hinton:** Yeah, I plan to write about... Because I had to obviously look at all the cloud providers that do similar things, and make a choice whether to run my own...

**Jerod Santo:** Yeah, that'd be great.

**Suz Hinton:** ...so it's been a very long journey to get here.

**Jerod Santo:** Let's wrap this up real quick with some learning resources for folks who are just getting started. Obviously, you all have been deep in this for a long time, but if you can go-- well, Suz laughs... Feross and Mikeal have been deep in it a long time? Suz not quite so long?

**Suz Hinton:** Not as much.

**Jerod Santo:** It seems like a long time. How did you learn this? And maybe even a better question, what's the best way to learn today if you don't know it? Are there resources where you can point people to in the show notes?

**Suz Hinton:** I have some beginner resources that I can recommend... First of all, there's a really good WebRTC infrastructure article on html5rocks.com. Every time I forget all the bits, I just go to that article, and I'm like "Okay, cool, I remember this now." But if you want something that is less heavy - because that's actually a dense article, even if it is a primer, which is just an unfortunate fact of life with WebRTC - there's a really cool stop motion animation on YouTube that is basically... I forget what it's actually called, but we do have a link to it... And it just explains all of these concepts in the most delightful way, and you'll get to the end of the video and you're like "Oh, I get this now", and you'll be ready to kind of explore on a deeper level.

**Jerod Santo:** Awesome. I'm linking that one up now. Any others out there, Feross or Mikeal, that you'd like to point people to?

**Feross Aboukhadijeh:** I agree with Suz's recommendations. I'm pretty sure I've read that same infrastructure article on HTML5 Rocks many times...

**Mikeal Rogers:** Yeah... There used to be a set of Mozilla demos that they had put together...

5: Yes. I remember that.

**Mikeal Rogers:** \[01:03:00.23\] It was tying WebRTC to other things. I don't know if they've been kept up to date. I don't have a link to them in handy, but maybe we can get it into the show notes. But those were really useful for me when I was trying to figure out exactly how to take a media recorder and pipe it into here, or take an audio element and integrate with WebRTC. So when you're doing that part of it, that's really useful.

**Feross Aboukhadijeh:** I'll just add - and I'll be a little bit self-promotional here, but the Simple Peer library that I created.

**Suz Hinton:** It's awesome.

**Feross Aboukhadijeh:** Thanks.

**Suz Hinton:** Sorry. \[laughter\]

**Mikeal Rogers:** Everyone uses it. If you're in JavaScript...

**Suz Hinton:** Yeah, literally everyone uses it.

**Feross Aboukhadijeh:** It's basically a way to get started with WebRTC without having to learn all the intricacies of the API. Basically, all the stuff we discussed earlier, all those little steps you have to handle by hand... But if you use Simple Peer, it kind of calls all the methods and stuff for you, and gives you a little bit of a simpler interface to it. That's pretty useful if you're just getting started, I think.

**Mikeal Rogers:** If you're only doing data and you're concerned with other languages and other environments outside of the browser, I would point you at libp2p as well. This is like a really massive, complicated problem once you start to get beyond just only the browser... And yeah, they're really kind of taking it all on. And there's implementations in multiple languages that are actually tested to be compatible with each other, so...

**Jerod Santo:** Awesome! Well, links to all of those things are in your show notes... Next week we have another great show. Mikeal, do you wanna tease next week's show? You're doing your journey to ESModules. Do you wanna give us a tease?

**Mikeal Rogers:** Yeah, so ESM got unflagged in Node.js, so now you can write native ES modules that work in Node, in both LTS 12 and also current 14. I've been diving into "Okay, now that we can write agnostic modules, what does that look like? What does it actually look like to write code that runs in the browser and in Node without a compiler?" And actually, I have some code also running in Deno now as well; so what does it look like to actually write code in ESM that can run everywhere, without a compiler, and what is the new landscape of tools going to look like on top of native ESM? And it is a bigger change than I think people are ready for.

**Jerod Santo:** Awesome.

**Mikeal Rogers:** I think almost 6-9 months ago we did a show on ESM, and one of the things that came out of that was a lot of people think that they've been using ESM for a long time, because they've been using the syntax through compilers, but native ESM is actually a very different thing... And this is gonna be the most disruptive thing that's happened in our ecosystem. A lot of what we have on Npm is not going to work well or make the transition.

**Jerod Santo:** You betcha. So that's next week. Fred K. Schott will be joining us, Chris Hiller will be there, and it should be an excellent show, so stay tuned for that one. This is JS Party for this week. Hey, that was a lot of fun. Y'all are super-smart on this stuff, and I enjoyed learning from you; hopefully, the listeners did as well. Thanks, Suz, thanks, Feross, thanks, Mikeal. We'll talk to you next time.

**Mikeal Rogers:** Awesome!

**Feross Aboukhadijeh:** See ya!
