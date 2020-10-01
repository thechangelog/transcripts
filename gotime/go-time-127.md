**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about real-time communication, specifically WebRTC and how we can get peer-to-peer secure communication going in Go.

As usual, I'm joined by a cohort of wonderful and strange people. Firstly - calm down, everyone, it's only Jaana B. Dogan. Hello, Jaana!

**Jaana Dogan:** Hello! Hi!

**Mat Ryer:** Welcome back.

**Jaana Dogan:** Yeah, good to see you again.

**Mat Ryer:** You too, welcome back. Don't worry, you don't just have to tolerate me, you also have to tolerate Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Wow. What an intro.

**Mat Ryer:** It's a nice one, isn't it? Well, it's different.

**Jon Calhoun:** You have to tolerate me, that's what I'm here for.

**Mat Ryer:** \[laughs\] And we're also joined by a special guest today, Sean DuBois. Sean, you founded the Pion project, is that right?

**Sean DuBois:** Yeah, and thank you for having me. So it's grown organically. I wouldn't really say "found". I committed 50 lines of Go code and I had no idea where it would go, but... Yeah, that's what my life has been for the past 2,5 years now.

**Mat Ryer:** We will get more onto that later, talking about what that project is, but maybe we could start with -- for anybody not familiar with WebRTC, what we're really talking about and what you can do with these kinds of technologies... Maybe you could give us a bit of an overview.

**Sean DuBois:** Yeah. So if you are a user of WebRTC, what you're probably used to is "Hey, I have two web browsers and I wanna send video between them. You wanna build a conferencing room application. That's the common use case, and that's what people first start with... But really, the technology underneath is so incredibly flexible and does so many things that you can build all these different use cases. I don't know if you've seen that Google Stadia is over WebRTC, people are doing web torrent over WebRTC, so you can download torrents in your browser... Another one is co-streaming; you'll see a lot of people that will stream videos together, like they'll perfectly sync up and distribute through WebRTC.

\[00:04:15.22\] So really what the magic behind that is -- the first is the peer-to-peerness. WebRTC allows two people to distribute a list of their known addresses. So I give you what my local IP address is, or what my public IP address is, and then we exchange this list and we find the best way to talk to each other. And that's the really cool magic behind it.

Most people may think like "Oh, I wanna exchange a file. I have to upload it to S3 and then I download it." But with WebRTC we exchange our list of peers, and then we connect directly to each other via this really cool thing called NAT Traversal, where you both punch temporary holes in your public IP so you can talk to each other.

So if anyone gets a chance and you're googling and following along, the first thing you wanna look up is NAT Traversal, to get you down this rabbit hole of RTC.

**Mat Ryer:** That's awesome. And is it just one-to-one communication, or can you do one-to-many, or many-to-many?

**Sean DuBois:** Yeah, so it's just one-to-one, and that's a super-interesting rabbit hole to go down. Let's say me and you establish our one-to-one communication, but most of the time what we have is like a conference call; you wanna talk to multiple people. So then you end up doing a one-to-one with every person in your conference room. Everyone does all these one-to-ones. So if you have four people, you're uploading your video three times, because you're doing this mesh topology.

That's the value-add of a lot of services like Zoom, and Hangouts, where you upload your video once to them, and then they fan out. But that also adds -- now, because you upload once to them, they have to decrypt your video, and then they fan it out. Essentially, you're in a WebRTC call, but with a WebRTC peer that's running up in the cloud. Your browser just thinks that it's talking to someone, but really it's like this heavyweight server running the cloud that's simulating WebRTC connections.

**Mat Ryer:** I see. So how does WebRTC relate to protocols that we are more familiar with, like TCP and HTTP?

**Sean DuBois:** WebRTC - everything runs over UDP, and it's super-important that it happens, for two reasons. One is the NAT Traversal attributes of it. So if me and you both wanna connect to each other, we can't really do NAT Traversal via TCP. With TCP it's like this one stateful connection. If me and you are both inside our private networks, how do we establish a hole to go through?

With UDP what you do is you send one packet out to what they call a STUN server, and then that STUN server responds and that establishes a temporary hole. So if anyone sends in on port 53000, there's a temporary hole where 53000 maps to your computer. If you ever set up your Xbox back in the day, and you remember having to do port forwarding, and stuff like that; this is basically automatic port forwarding.

**Mat Ryer:** Right.

**Sean DuBois:** So first you get that automatic port forwarding with UDP, and the other thing is an attribute of live video. If I'm trying to watch a live video - and you've probably seen this with Netflix, how it will flip the quality on the fly. That's called HLS, where they will upload a video in four different qualities, and you download it via HTTP. Instead, what WebRTC does is me and you are communicating real-time on the quality of the video. So I will flip between resolutions and bitrates on the fly, because we have this duplex communication. And that's super-powerful, because now I can pick what's the best quality for us to have this call in. For example, if someone else gets on your network and the network quality goes down, I can fluctuate on the fly.

**Mat Ryer:** So would it tell me to start sending it at a lower resolution?

**Sean DuBois:** Yeah, exactly. I send you statistics, like "This is the amount of package you sent me", and UDP, since it does the drops automatically, it says "Hey, Mat sent me 500 packets, but I only got 470." You say "Okay, I'm gonna lower my bit rate a little bit until I can get to a good quality of loss." So it has this really cool congestion control.

\[00:08:13.08\] The other cool thing is since the congestion control isn't built into the protocol, like TCP, you can decide on what you want. I can say "Okay, I'll do five seconds of latency, because I want perfect picture." Or "I wanna do 200 milliseconds, because I'm having a live call." There's just all these cool things you can do with WebRTC, because you get this flexibility.

**Jaana Dogan:** So is WebRTC just a protocol, or does it also contain some of the utilities, like some encoders for video and so on? Because you mentioned that you can switch back and forth between different qualities... I wonder if there's any utilities out there.

**Sean DuBois:** Yeah, so WebRTC itself is basically a bundling of all these existing protocols that have been around since the '90s. If you go look up ICE, and RTP, and SCTP - these are things that have been around, and WebRTC bundled it up. You can bridge with existing things. But then it's kind of left up to the user to implement it.

You can build a WebRTC implementation if you can parse RTP and you can send H 264. It's kind of like a soup; there's a couple implementations of WebRTC out there. There's these RFCs that define how it works, but then you go and you can grab -- Python has an implementation, Go has an implementation, there's a C++ implementation by Google... And the cool thing is they all work interchangeably and people are building stuff with them.

**Mat Ryer:** And Pion has a Go implementation of WebRTC, right?

**Sean DuBois:** Yeah. And the thing that excites me about the fact that Go is -- when I started working on it, I just loved Go for how easy it was to do things. I didn't appreciate everything that would come from it along the lines, but by writing it in Go, it's become so incredibly easy for people to contribute and learn, which I think is the hardest problem with WebRTC right now. I'm sure a lot of people are listening right now and they thought "Oh, I thought WebRTC was just so I can do video between browsers." You don't appreciate everything that's happening. But I'm hoping, because it's in Go, you can go and click through the symbols, and look at things. And then the ease of deploy...

And I think the big one that's gonna happen in the future is the security aspects. Everyone is running C and C++. I think that's really scary, to be running that stuff on the public internet. I still do C stuff as my day job, but running AddressSanitizer, and MemorySanitizer, and all this stuff. I constantly make mistakes still, but Go - I can sleep well at night, knowing that I won't find out that every service has been exploited and everyone can see the calls flowing in clear text. You can't convince me that someone out there doesn't have a zero-day we don't know about with existing RTC stuff.

**Jaana Dogan:** One thing that captured my attention - you said "I started with 50 lines of Go code", and I was really impressed... You know, for a new product only implemented in 50 lines. But then I was thinking, "Oh, with 50 lines actually I was able to bootstrap a lot of projects." Isn't that interesting - it's not a verbose thing, but you can get a lot of things done, very quickly sometimes.

**Sean DuBois:** Yeah, so the 50 lines was totally cheating. The 50 lines -- basically, how Pion started is the magic of cgo. And I know no one wants to use cgo, but what I did is all of these hard protocols, like SCTP, and SRTP - I just used cgo to make it happen, and then I slowly rewrote each implementation into pure Go.

**Jaana Dogan:** Yeah, it makes sense. That's such a common case, actually. Lots of people migrate over from C++ or C; if you're migrating from C++, you end up writing some trampoline functions... But you know, you just gradually do it. That's how I started to write Go...

**Jon Calhoun:** It's also so much nicer than "Let's wait till we've refactored or rewritten the entire thing to try it." It's like, "Okay, we can see how this is working, and make sure things are moving smoothly, and actually test it all." Versus the whole rewrite, which is almost always awful.

**Mat Ryer:** \[00:12:02.24\] Yeah, and you learn so much by that process. Sean, you just said you did it cheating, but actually, I think it totally makes sense to do whatever is necessary, hack away at something, because the understanding you get is really valuable, but you may not keep any of the code... And actually, sometimes knowing you're gonna throw code away really helps with that process, because you sort of don't worry about any of the practices or things that we do when we're properly software-engineering. You get to not worry about that too much. Does that spirit come easy to you, Sean? We were chatting a bit earlier about your background; I'm interested if that plays a part there.

**Sean DuBois:** Yeah, I think it does. My background was that I don't have any computer science education. I left high school and I worked at a VoIP company. I was lucky enough that they gave me a minimum wage job writing PHP scripts and just kind of hacking things up and learning stuff along the way.

And then also I learned so much via IRC. I would sit on freenode in the PHP and MySQL channels and I would just beg for answers. So now I feel for people who are on \[unintelligible 00:13:08.25\] I will never get upset at stupid questions, because I know I have pained so many people with my stupid questions... But it does come naturally. I've been very lucky to grow up with that mindset. I was never given "Hey, this is what the problem is, and this is how you're gonna do it. Go solve it."

I think Go's community is also really great about that, as well. People definitely don't fall into that "Perfect is the enemy of good" kind of problem. I think with a lot of other languages people are like "Unless it solves every single problem and it's perfect in every way, I refuse to use it." But a lot of Go developers and companies are like "Let's solve the problem we have, and then we'll go from there."

**Mat Ryer:** Yeah, I wonder if it's something to do with the fact that it's relatively new, isn't it? The community is relatively new, so it doesn't have a lot of baggage, or history, or legacy that other communities had. So it probably does allow us. I think also the way that the Go community does issues of diversity, and things like that, making it a really inclusive environment, I think maybe for the same reasons it does the same thing; it's able to take a fresh look and have fresh attitudes of things. It doesn't have all these legacies. That's really great to hear that, whenever people that come from other communities say that about the Go community; I always like to hear it.

**Jon Calhoun:** I wonder if, on that front, some of that comes from how the people use the languages... Because I'm thinking of like Ruby or JavaScript, where people tend to build these big frameworks that literally do everything for you... And you're like "I'm not switching to a framework unless it's doing all this for me", whereas Go has very much been a "Don't use a framework. Here are some building blocks. Put them together." Each one does something small, but it's not gonna give you the whole thing. It's kind of in that mindset of like "Use these building blocks", but you don't actually have to have something that does everything that you might want.

**Sean DuBois:** Yeah. And I love that, because it encourages intellectual curiosity. It's not like "Okay, drop this thing and it just does everything." Everyone's like "Oh, I'm using this little piece, but maybe I can do it better", so they go and rewrite it, and rip it into it. And that's what's been so exciting with Pion. We're getting close to 100 contributors. I think that's my favorite part of the whole thing, is the fact that these 100 people - and many of them are first-time open source contributors. They decided "This is a welcoming environment. This is a problem that I can dig into", and they just dove right in. And the Go tooling, and everything... Yeah, I don't have enough good things to say about how Go encourages people to be curious and get involved.

**Mat Ryer:** It's great. Was it difficult writing a WebRTC implementation in Go? Or did it sort of naturally fit in some way?

**Sean DuBois:** There was some stuff that is/was super-painful. I think the lack of libraries is definitely a hard one. So the big one - Go doesn't have a DTLS implementation, so there's not TLS over UDP, so we had to write one. There was no SCTP implementation, there was no ICE implementation... So it took us probably a year and a half to get to that point. But I don't think that's really a fault of Go. I really love how opinionated Go is.

\[00:16:06.10\] I feel as you add more and more people to a project, they all bring their opinions, and it was nice that I could just run GolangCI and be like "No, there's no discussion. This is how it reads, this is how it flows", and that's the end of it. Then we go argue about things that are actually important. I think humans love to argue, they love to have their things, but--

**Mat Ryer:** No, we don't. No, we don't.

**Sean DuBois:** \[laughs\] Yeah... I guess I just picked the most dysfunctional group of people then. I don't know what happened. \[laughter\]

**Mat Ryer:** No, I suspect not. It definitely makes sense.

**Sean DuBois:** Those are the only things that I have to say, but man, the upsides of Go are just so wonderful. The safety of the language, the portability... What's so exciting is that I can do go build, and site architecture, and all of a sudden I can throw my binaries on these little cameras, and the WASM stuff... So that's the other cool thing about PION, is that I can write one binary and I can deploy it to the web, and I can deploy it to my servers, and I can deploy it to my set-top boxes.

There's this one company, Strive, and they do a decentralized peer-to-peer CDN. So if you're sitting in an office building, why are you downloading the same video file multiple times? You should download that video file once and then you should distribute it to all your co-workers.

They have one codebase and it targets Android, iOS, web, servers... It's amazing the amount of things you can target. And it feels natural to me. I'm not frustrated using it not just on my servers. I guess I'm probably preaching to the choir. If you're listening to this show, you probably already love Go, so I don't need to sell it.

**Mat Ryer:** I like to think that we accidentally get onto some people's playlists, and they're too lazy to get up and change it... So yeah, for those people - welcome. Relax. Enjoy yourself. You're in for quite a ride.

Yeah, so it's really interesting then... Let's talk a bit more about the use cases, because -- WebRTC do think of video and audio chat, but are you limited to the kind of data that you can transfer in this way?

**Sean DuBois:** Not at all. WebRTC has two distinct things it can transport. It can transport media, which is audio and video, but it can also transport data. And the data - you can do all these interesting things. You can do out-of-order transfer... So if you're doing a video game, you don't wanna do that head of line blocking. You don't care where the player was 3 seconds ago. You only want the latest packets. And since it's over UDP, you can conditionally say "Okay, deliver my packets out of order to make them lossy", so you get the highest performance possible. So you can just send this binary data and have all these interesting attributes.

And because of these data channels thing that you can do, I see all these interesting use cases. The one that I really wanna see take off, in people doing ops and stuff like that, is getting rid of the bastion server. If you're a small company, you probably run an SSH server sitting on the outside of your network, you jump into that, and then you jump into your internal things. But with WebRTC, what you can do is you can do that temporary hole, and then you could just have all of your servers inside running WebRTC, and then you can hook to them directly without running a VPN, without punching a temporary hole... Because it has all these attributes of NAT Traversal, which I think is super-powerful.

So I'm excited to see what this can do. If I want two computers to talk to each other, they don't need to have public IPs. They can talk to each other without any kind of direct communication.

**Mat Ryer:** Yeah, I really can't wait to play with this. It does have that hackability sort of feel to it, doesn't it?

**Sean DuBois:** Yeah.

**Mat Ryer:** How does it compare with technologies like WebSockets, for example, where you've got the browser making a long-running connection, essentially.

**Sean DuBois:** \[00:19:58.29\] The WebSockets has two problems. One is the head of line blocking. Since it's over TCP, it's lossless. So if you're sending something that's large, you're gonna incur that penalty, that like as you do the retransmissions, it's gonna slow things down. And then the WebSockets also require TCP, so you have to be communicating with something that's directly addressable. If I'm using WebSockets, I have to connect to a public IP address, I have to be in the same networks.

But beyond that, using in-the-browser, using data channels and WebSockets feels exactly the same. You just call `.send` and send some stuff and it just magically shows up on the other end. So as an end user, you don't really care, it doesn't really matter. But as a hacker, and doing stuff underneath, there's a crazy amount of power. The one that I shared in the GoTime channel, that's one of my favorites, is the Cloud Games. So someone went and built something where you can play NES games, and all these Game Boy games and all this stuff, and basically they run an emulator on a server in DigitalOcean. And they send all the video frames to you, and then you send all your key press events via data channels back to them. So you can play NES games with someone else, you can do multiplayer, you can share your screen, you can persist your game state... It's basically the open source version of all these game streaming services coming out.

**Jaana Dogan:** There's one thing I wonder, since you've mentioned there's actually a lot of things to consider in terms of trade-offs and so on... Is there any sort of visibility, are there any debugging tools, or what's the good way to start maybe debugging? What do you have in terms of tools at least, at this point?

**Sean DuBois:** That's a tough one. I think that's probably the biggest problem with WebRTC right now - the education and the debuggability. For me, what I do most of the time is I sit with Wireshark, I grab packet captures, and then I export the actual keys from Pion. So if Pion if connecting to the browser, you have your TLS connection. I export those and I decrypt the packets. But for a lot of people, Pion is the way the way they debug. Because you can't really debug what's happening browser to browser. But if you do Pion to browser, I can just print the stuff that comes out.

With Pion, the way it works is you just get access to the video bytes directly. So instead of getting this on-track event and putting in a DOM element, you just get a stream of raw H.264 or VP8 or something like that. In my opinion, Pion is your best debugging tool, because it decouples everything and gives you the ability to peak, and poke, and play with things. And then it's great also for the load testing, and attacking your own servers, and figuring out where your rough points are, because you can spin up -- before, people would spin up 10,000 browsers to simulate what a load for a WebRTC service would look like. But now they can spin up 10,000 little Go processes that send precanned video.

**Jaana Dogan:** Yeah. Even from the perspective of learning, that would be useful for lots of people to just begin looking at, so I'll try to check them out. Thanks.

**Sean DuBois:** I think that's the thing I wanna encourage most out of this... Pion is an idea; it's not like a single software project, but it's like "I wanna get people into it, and I want to teach them that peer-to-peer is possible, decentralization is cool, both from the resiliency it brings to the internet, and for what people can build." And I want people to learn, I want people to get excited and bring a little joy to their lives.

**Mat Ryer:** I think that's great. I love these kinds of projects as well, because they're sort of borne out of either a love for something, or a real problem that you have that you wanna solve. And they're always the best projects, I think. When you see open source projects that are addressing something real, or built with that sort of passion, you can always tell, compared to where we've kind of set out to try and deliver a package, and imagine something.

\[00:23:57.14\] So I always think that's always worth pointing out, when any these projects are always like -- some people might consider the WebRTC API to be quite a boring read... I did read through it, and it's not an easy thing to read... So having this abstraction as someone that likes to play with different technologies and build little things is great. So thank you very much for starting the project and continuing your support and involvement, Sean.

**Sean DuBois:** Yeah. For me, Pion was born out of frustration with -- at the time, there was a C++ implementation... So when WebRTC came around, I wasn't involved, so this is all anecdotes or whatever I heard from other people... It's that Google wanted to bring WebRTC to the browser without plugins. So they went and bought this company called GIPS, and they went and bought On2... So they acquired all of these very great, very battle-tested software stacks and they've put them in the browser.

The hard part about -- if you've built Chromium, you know it's a very painful process. There's all these proprietary build systems... It's not what people are used to. And WebRTC kind of suffers from the same thing. So with Pion, my goals was also like "It's one go get away." Which is another fantastic thing about Go - if you wanna play with something, it's one go get. It doesn't matter what platform you're running, there's not "Install these libraries/Play with all this." It's like "How can you get stuff into people's hands?" So that's where the passion originally came from.

Now the passion is like "How can I get as many people using WebRTC? How can I get as many people into this system and have them owning their projects and getting them excited?"

**Jon Calhoun:** The go get thing is -- I feel like it's something people don't emphasize enough. I see people all the time who are like "If you write blogs, you need to put dates on them, because it goes out of date really quickly." And I think a lot of them come from backgrounds like JavaScript or something, where just trying to install something all of a sudden won't work anymore, and you're like "I don't know why, it's just not working." Whereas, like you said, with go get and everything else - they all tend to work, to the point that it's like "I really don't need to date most of these things, because they shouldn't break."

Unless you're using a third-party library and they make breaking changes, or release a major version, or something. But that stuff tends to be pretty rare, compared to other languages where that is more problematic. Or like you said, they have really big build processes, where so many different things can go wrong.

I think I talked to -- maybe I told you about it once, Mat, where I was working on a project where basically something in Brew got removed (Homebrew, for installing), and as a result, nobody on the team could rebuild on a fresh laptop to get everything up to spec, because we just couldn't get some certain library, or something. And it got to the point where we ended up having to do a bunch of work to move a bunch of things to upgrade stuff because of that... And that's a really painful process. So having those complicated build processes is a challenge.

**Sean DuBois:** And also it's like that broken Windows thing, where even -- a lot of people will say... There's this kind of arrogance of like "I don't care about new developers. I only want seasoned developers to come use my project, because I don't really care. This is like a full-time job etc." I think that's what a lot of these projects suffer from.

But even if a seasoned developer comes and uses your product, if it's hard to use and hard to set up, it just gets people on an awful mindset. You just start off using my thing upset, which I never want. I want people to be like "I had a wonderful Tuesday afternoon playing with WebRTC."

**Jon Calhoun:** A good way to put that is they wanna spend their time learning WebRTC, not figuring out how to install software, which they've probably already figured out a million times before... Even if they're seasoned, they've figured it out, and nobody enjoys that.

**Mat Ryer:** And just to be clear, you can do this on any day of the week, can't you, Sean?

**Sean DuBois:** \[laughs\] No, Tuesdays only.

**Mat Ryer:** Tuesday afternoon only, okay.

**Sean DuBois:** Tuesday afternoon, yeah. \[laughter\]

**Mat Ryer:** Yeah, that's quite an interesting way of rate-limiting your code.

**Jon Calhoun:** It's got a whole build process that tears down the whole repo. Everything just disappears, then it comes back up again...

**Break:** \[00:28:06.00\]

**Mat Ryer:** That's interesting, I think other projects could learn that lesson about the developer experience. There's a few little tricks you can do in Go. I like doing them like putting the test code in a separate package, so that you are accessing your package from the outside it seems, in your test code. When you do that, you get a kind of feel for your API. You're kind of experiencing as your users are gonna really experience it. And having that focus I think helps every project. Go, because of its minimalism, kind of encourages that... Because if minimalism is given, then you have to be really selective about what goes in, so then you really have to think about it.

So just having that sort of restrictive minimalist mindset I think does help us, and it's kind of trained in Go to think like this. Obviously, people -- you know, the languages do the same kinds of things, and none of the ideas are really necessarily even original, but it did get an early focus, and I think you can see signs of that.

**Sean DuBois:** That's my biggest fear with Go ten years down the line, that it's so easy to add things, but it's impossible to remove things. So I hope that Go keeps that minimalism. I think above the Go... I love that the Go community -- you write codebases, you throw them away, you rewrite, you do new things, but the line where Go starts... You can't change that forever. It's like an unbreakable contract. So I hope we keep that minimalism in the language and then allow the explosion of crazy ideas outside of it.

**Mat Ryer:** Right, yes.

**Jon Calhoun:** Earlier you talked about NAT Traversal and connecting to each other... So that very first thing, where they tell each other IP addresses - or I assume it's IPs; I'm not sure.

**Sean DuBois:** Yeah.

**Jon Calhoun:** How do they communicate that sort of thing? How does this whole process get kicked off? Can we get into the details of that?

**Sean DuBois:** Yeah, yeah. So what most people do - they call it signaling. It's two peers - they need to know the bare minimum details of each other. Most people will run a server up in the cloud, just like a little WebSocket server, and so you send up your details, I send up my details, and they get sent to each other. So there's like this little exchange. And you can do signaling via any protocol. Basically, I'm just sending a blob of key-value pairs that say "This is my IP, these are the codecs I support", and that's it. So it's just like "How do I get the minimum amount of information to each other?"

I've seen people that do signaling via WebSockets, I've seen people do signaling via IPFS, I've seen signaling via HTTP. You can do really whatever you want.

\[00:32:13.26\] So once you exchange that amount of details, you then go into this next step, which is like a full protocol called ICE, or internet connectivity exchange, where I have my list of details from that minimal blob that we've exchanged, and in time we just hit each other with pings and pongs to find the best route.

**Jon Calhoun:** So when you're doing that pings and pongs and stuff - I assume it's trying to find the quickest connection, in the sense of like if you and I are on a local network, it'll try to use that instead of going out to the web, that sort of thing.

**Sean DuBois:** Yeah, and that's the really cool magic about it, because there's also other attributes. What if we're on the local connection, but our local connection has a bunch of packet loss, but our web connection is actually better? So ICE can evaluate and say "Oh, even though this connected faster, maybe I wanna do this one", and then ICE also allows you to switch what they call "candidate pairs" at any time.

So let's say me and you are talking via Wi-Fi, and then I walk outside - I need to switch the IP address I talk to you on. I now need to switch to cellular. And then when I walk back inside I switch to Wi-Fi. It has all these really cool things where it can measure the network cost, it can measure the roundtrip time, and all these interesting attributes to figure out what's the best candidate pair for this call.

**Mat Ryer:** That's amazing. That's brilliant.

**Sean DuBois:** Yeah.

**Mat Ryer:** And does Pion do this?

**Sean DuBois:** Yes. I just went and implemented a spec, which made it really easy. This is all magic that has existed in WebEx, and Skype, and everyone else. Everyone's doing this, so I'm lucky I get to just go to the IETF and read the plain text and I'm done.

**Mat Ryer:** Yeah. You've kind of unlocked this though really for the Go community, because even if I'd just implemented the bits I needed, this isn't the kind of problem that you really have a chance in hell of being able to just build, and each person solve it. It's not like a router.

**Sean DuBois:** Yeah. And it's fun, because different companies and different individuals have come and brought their little improvements. The first ICE implementation was super-rudimentary. It said "Whoever connected first, that's who we pick." But people now define how long they're willing to wait for an internet route, compared to a land route... All these different rules. It's like, "How can you build this best ICE agent implementation possible?"

**Jon Calhoun:** When you were talking about connections that sort of -- you know, you jump from Wi-Fi to your cell network, and stuff... Does that mean that that's probably the type of technology that's being used behind Google Fi, that sort of thing? Or does that seem like a good use case for that, or would that be bad? I know that you can't say for sure what they're using, but...

**Sean DuBois:** I have no idea, but I think Google Fi is probably a level lower. I know Duo and stuff like that is definitely using things. Because Duo is just WebRTC, and Hangouts is just WebRTC. But I think Fi is probably a layer lower. I know nothing about electronics or any of that stuff, so... I'm just a simple software engineer.

**Jaana Dogan:** I think it's more of like an L2 type of switch...

**Sean DuBois:** Yeah, that's my favorite part of WebRTC - the reactivity of it. Being able to choose "What's the best bit rate? What's the best connection route?" I like to picture it in my head like the little decentralization thing, where it shows a graph, and picking the best route to talk between two people.

**Mat Ryer:** Yeah, it's nice that it does that for you... But what's that interface like for a Go programmer? How do you access that kind of capability? What does it literally look like in code?

**Sean DuBois:** Yeah, so for WebRTC itself, all you do is you generate that bootstrap blob, and then you basically call "create offer", and I send my offer to the other side. Then the other side calls "create answer" and then sends the answer back, and you're done. You now have a full peer-to-peer communication that does all the things.

\[00:35:57.21\] But we also expose all of the underlying technologies as their own individual packages. So this ICE things, it just implements -- I think it's an io ReadWriteCloser. So I push on a list of my remote's IP addresses, and I send my remote a list of my IP addresses, and then they just find each other, and that's it. You can slap that in front of anything.

I forget -- I know some people have slapped VPNs on it. At WireGuard someone built an implementation, they call it WG VPN. If you get a chance, go look on the awesome-pion repo. But they took the Go implementation of WireGuard and married it with ICE, and now you have a NAT Traversing WireGuard implementation.

**Jaana Dogan:** So in terms of packages, what is an application developer's responsibility, in terms of let's say the buffer size? Or what are some of the points left for optimization?

**Sean DuBois:** Right now, what you do is you listen for data channels, you listen for the back pressure. Since it's like an async protocol, you can call `peerconnection.send` and send it a gigabyte, and then it will slowly make sure that data gets to the other side. But what you do is then WebRTC has this callback that says -- I forget the exact name, but basically you listen for the back pressure, and it says like "Okay, I'm done sending everything you've requested that I send. Go ahead and send more." And then WebRTC also has an API called getStats, where you can poll and see the quality of the connection. You can be like "Hey, this is like the average bandwidth between you and the other peer." So you can choose what you wanna do.

**Jaana Dogan:** Yeah, so on the fly you optimize things... That sounds really cool.

**Sean DuBois:** Yeah. The other interesting thing about WebRTC - or I think some people are frustrated by - is the... In Pion's implementation we took the WebRTC API that's dictated by the browser -- so the API isn't very Go-idiomatic. It's very callback-heavy, it feels very JavaScript. But it has two benefits. One is if you're already comfortable with writing WebRTC in the browser, you can go use Pion and you feel very comfortable.

And two, we learned from all the research and all the hard lessons that people learned writing that API. I think it's so easy to jump in and build an API, but to have an API that has ten years of experience in the browser - we got a lot of stuff for free, because all of a sudden someone comes and they're like "I have this crazy edge case I need to solve." I'm like "Well, WebRTC luckily solves it in the corner, with this knob", and I would have never anticipated that. I would have painted myself into a corner.

**Mat Ryer:** That's really interesting, yeah. Because I hear a lot the advice of "Don't copy other languages if you're doing a port" or something. But yeah, that's actually quite a compelling thing to think about, when people are forced to make that decision.

**Jaana Dogan:** Yeah, I've worked on a lot of projects with multiple language support, and all this turns out to be the biggest advantage; you can easily see the future parity in all these edge cases, like utility libraries and so on, to build... And it's also somewhat easier to track progress. If there's a new API coming up, you can basically go and implement it in the other language. So there's definitely some advantages.

**Jon Calhoun:** It's also -- like, if you happen to have some sort of bug or something, sometimes somebody who's worked on something similar in another language can more easily jump into your code and help out. Because there's been several projects I've seen -- Stripe is an example where their API libraries tend to be very similar across languages, even if it's not necessarily the most idiomatic for that language... And at times it's frustrating and at other times it's very helpful, because it's like "Okay, I feel at home, because I've used it in this other language before."

So I can see the arguments from both sides, and I definitely think that there is an argument to be made for keeping the same design that's there if those benefits are gonna be useful.

**Sean DuBois:** \[00:39:45.18\] And listen to this magic... Since Pion does the WASM, so you write -- if you call "create peer connection" and "create offer", "create answer", when you compile to WASM, it's basically just outputting the JavaScript that runs in the browser. It lets me write my Go code, but then evaluate against the browser's implementation. So I can check "Does Pion's pure Go implementation behave exactly the same as Pion, but then compiles and runs in the browser? ...so it allows me to ensure that I implement WebRTC the same way as the browser does, but in my pure Go implementation."

**Mat Ryer:** That's great.

**Jaana Dogan:** Talking about that compliance - what is the overall story like? Is it you run a bunch -- like, you convert them into unit tests, and compare the results? Or what else do you do?

**Sean DuBois:** So the nice thing about WebRTC is it's 100% standardized. So you just go to the IETF and you look at the specs and you implement them. What I do right now is I run Pion against Chromium, I run Pion against Pion, and then we have all those individual parts. I think when you say WebRTC, there's very little new stuff that WebRTC adds. WebRTC is basically hooking all of these existing technologies. So if you can go prove that ICE and SCTP and RTP works right, there's really not much to do in WebRTC. I think the WebRTC package of Pion is probably one of the least complicated parts.

**Jaana Dogan:** In some cases, some projects usually have some sort of like a testing binary, which makes a call against your peer, just runs some of the basic functionality and then checks the responses for compliance... I was wondering if WebRTC has something similar.

**Sean DuBois:** Unfortunately not. We were going to do this at the IETF in Vancouver. Tim Patton had organized this thing where all the WebRTC implementations were gonna sit down at a table and we were gonna write a little test suite that would run implementations against each other, and then make it easier for people in the future to write new implementations. Because someone's trying to write an Erlang one, someone's trying to write a Ruby one... They should be able to write a new implementation. But unfortunately, with the whole Coronavirus thing the IETF got canceled and it didn't happen.

It's something I definitely wanna do, because there's a lot of detective work that went into doing Pion... Because there's a lot of things that are specified, but there's a lot of things that are just edge cases in the Chromium codebase, and you look and it's just like "//do this because x", and it's not saved or written anywhere else.

**Mat Ryer:** It's a shame that conference got canceled. It's a shame that there isn't a way to somehow communicate remotely.

**Sean DuBois:** Not that I'm aware of. Yeah, someone needs to build something for that, I think.

**Mat Ryer:** Yeah.

**Jaana Dogan:** I think this is one of the cases where you actually wanna sit at the same table... You just really need that in-person connection.

**Sean DuBois:** Yeah. I think the other thing is that the longer I've been doing this, the more I appreciate that it's all about personalities and relationships and emotions... Because if I go in and say "Look, Pion is the best. This is how it should work", it's gonna irritate a bunch of people and we're not gonna be able to work together. But at the same time, if I let someone else come and do that, then it'll hurt WebRTC... So it's all about coming together and finding out what compromises are we willing to make; what technical compromises are we willing to make for the sake of relationships, which ones are we not willing to make, and how do we get to middle ground? Because emotions are so tightly coupled with what we build.

**Jon Calhoun:** Open source in general is like a challenge on that front. There are times where I'm amazed that certain projects survived, given that -- like, Linux is a pretty notorious one, in the sense that, you know, there were certain people who were very opinionated (that's how I'll put it), and I don't know if that would work nowadays. I feel like people just go find another project and be like "I'm not gonna mess with this."

I'm not trying to say anything bad or anything like that, I'm just... It's interesting that now that we have a lot more open source stuff and it's a lot more common, that it almost feels like it's a completely different ball game as to how you manage it, managing that community. It's probably improved things in a lot of ways, and gotten a lot more perspective that wasn't there.

**Jaana Dogan:** \[00:44:00.15\] And I think we are better in terms of identifying these issues in the beginning. Linux wouldn't be this successful probably if people were paying attention to these type of issues back then. So there's definitely some sort of change. People just don't necessarily support a project if they see that the leadership in the project is really toxic.

**Sean DuBois:** Yeah. I don't think software matters that much. At the end of the day, every project is gonna come and go. Someday Linux won't matter, someday Pion won't matter, but people's emotions - that's their entire life. I want people to be happy, and I want people to come in and feel good about what they've done. So yeah, I'm totally willing to make technical compromises in this for people's emotions, because it matters more to me than a couple lines of code. We can write more unit tests, we can add more linters, but it's not worth being a jerk.

**Mat Ryer:** That was well said. It's a shame that WebRTC isn't really a topic for new programmers to jump into... And maybe you'll tell me I'm wrong. Because I think that sort of attitude, where you're able to foster this community that is inclusive, like you've been talking about, that helps people -- that doesn't just treat people like some weird, remote resource, or something... I think that's great. But is it a good project for people that are new to programming to come and look at? Certainly to use, I suppose, but what about contributing to the project?

**Sean DuBois:** Yeah, so there is a huge backlog of problems that need to be improved. I think the other one that I encourage people to do more is like take Pion and go build something with it. What are you passions? Because I think open source projects are successful when they're built with passion, because that's what makes you wanna work on it on a Thursday night, compared to just going and playing video games, and watching a movie. Maybe you're not interested in contributing to Pion, but go build something with Pion. And if you tell me about it, I will spam Twitter, Hacker News, Reddit, Slack with it. I will promote your project for you, because I want Pion to be successful. I want to show people that Pion lets people build things.

So I'm much happier seeing everyone with all their little projects than thousands of programmers descend on Pion. But I'd love to have you as well. Please, come contribute. No conversation occurs in private channels; everything's on GitHub. I try to make everything as easy as possible to get involved. That's my elevator pitch on new programmers... And that's the reason I'm here, why I was annoying you via email at one in the morning. I'm desperately trying to get into -- I've had a lot of luck getting people to talk to me in the WebRTC community, but in the Go community I haven't had as much luck, because WebRTC isn't hot right now. It's much easier -- if I was doing something with Kubernetes, or DevOps, or something like that, I'm sure I could get on to more conferences... But I have not had any luck with WebRTC. But this is the year that I annoy everyone and break in.

**Jon Calhoun:** You'd think it would get more popular now that -- I feel like pair-programming applications and that sort of thing almost have to take off a little bit more, because there's not great options; at least it doesn't feel like there's great options for a lot of this stuff.

I did have a question when you were talking about -- Matt was asking about beginners getting involved. I noticed that a lot of your repos have a difficulty tag that you put on all your issues... Has that been hard to manage? How has that helped is far as allowing people to get involved?

**Sean DuBois:** I don't think it's really helped that much. It's really hard to just go to a random issue and pick it, because you're not passionate about the project. I think it's pretty idealistic to think "Today I'm gonna sit down and I'm gonna get involved, because I wanna get involved." I think you have to figure out what is the itch you're trying to scratch, because that's the only thing that's going to motivate you in the end. There's no reward at the end of this. You're not getting paid... It totally has to come from your own personal happiness. I tried that, and I do it a little bit, but I haven't seen it pay off that much.

**Jon Calhoun:** \[00:48:03.25\] One of the things I think Mark did with Buffalo - I think he had people doing documentation type stuff. I think it was people who were learning Buffalo and then building stuff with it. Sort of like you said; you wanna build stuff with it first. And as things were less clear to them or they got confused, they'd sort of ask questions in the Slack, or whatever it was. And as that got hashed out and they actually got a good idea of what the description should look like, then it'd be like "Okay, well why don't you submit an issue that has this documentation improved a little bit? That way you can get involved." And it's not necessarily code, but it's still helping the project just as much, and it sort of gets you involved in that process, and everything. I think that can help, but I definitely don't know the right way to get developers involved in a project, because that's a challenging thing to do.

**Sean DuBois:** I'm gonna have to pick Mark's brain on that, because I'm trying to do that right now. I give people access to the wiki and I say "Go edit it." But it's tough, because it's async; so if I'm not there to give immediate feedback and say "Great job. That's right", I lose them. I've had at least 3-4 people start this whole documentation push - they were learning WebRTC - and I'm gone for 24 hours because I've got work, or family stuff going on, and that green circle stays grey forever. It's tough to keep people. Yeah, I don't know.

**Jaana Dogan:** One thing that works sometimes is weekly meetings, if you have time to go over "These are the certain things that we are thinking about", so people tinker and brainstorm about certain things. Everybody gets their point of action items, and just go and do... But it requires time, and it has to be consistent. You are creating that support system, and you can't really take it away... So it's really up to the community and how much time you have.

**Sean DuBois:** That's a fantastic idea. I think I'm gonna do that. I'm gonna schedule like once every two weeks, "Here's an hour that I'm just gonna be in Hangouts", and people just join and talk about what's important to them. Because I think that's a big thing that's been lacking right now with the project. People are able to do their single-track things that they're excited about, but it's really hard to build multi-person momentum.

**Break:** \[00:50:19.07\]

**Mat Ryer:** Well, you said a lot of very popular things today, Sean, but it's time for our regular slot of the show... So sit down everyone, if you're stood up, and relax, or stay stood up -- just whatever you were gonna do. It's time for unpopular opinion!

**Jingle:** \[00:51:54.17\]

**Mat Ryer:** Alright, Sean, do you have anything unpopular to say?

**Sean DuBois:** I don't know how much people are gonna care, but the one that always starts flame wars is I think that the GPL is a freedom-restricting license.

**Mat Ryer:** Oh, really?

**Sean DuBois:** Yes. Here's the one, if people care. I get the argument that I should use my power to ensure that someone else keeps their freedom, but at the same time the act of taking away someone's autonomy - that's freedom removing in the first place.

This is a constant argument, and hopefully this is exciting enough for your audience, but that's the one I like to bicker with people about... Because I'm a big free software kind of guy, and it ties up with getting people involved, but I feel very strongly about what GNU is trying to do, and encourage individual ownership, and that we shouldn't have these giant companies own all software... But at the same time, the GPL is a very frustrating, tenuous topic for me. So if we wanted to argue about, that's the one that I'll get fired up and irritate people over.

**Mat Ryer:** What license did you choose for Pion?

**Sean DuBois:** MIT.

**Mat Ryer:** So what led to that?

**Sean DuBois:** For me, I think that people rise -- like, if someone's gonna do something bad, they're gonna do it no matter what. So even if I do the GPL, someone's gonna break the GPL, and they're gonna distribute stuff and they're gonna cheat system, and there's nothing I can do to prevent it. It's the same way I see fraud. You can add thousands of rules, but bad people are gonna be bad. But I want to encourage good people to be good.

So I say "Hey, you have the full freedom to go do what you want. And if you don't wanna contribute back, that's fine. If you don't wanna share what you've done, that's fine, but I want to--" There's so many programmers that are using it, and they're able to get it approved because they can use it. I think that's what was important to me. You can add rail guards and try to make people better, but at the end of the day, people are gonna be who they are.

**Mat Ryer:** So what if, in a hypothetical situation then, a company took Pion, and it was a startup, and they just built some phenomenal software that just went crazy, it became a unicorn, and people are making a lot of money on this technology - how would that feel for you?

**Sean DuBois:** It's already happening. There's a couple big users of Pion that are using it, and some are coming out pretty soon, actually. These are like billion-dollar companies, with their big things. I wish I could get hired and get paid a million dollars to be a principal engineer there, but it's just not the way it works.

For me, I'm gonna come and go; someday I will not be alive anymore, and was it really worth it? I would rather see the total good in the world increased, even if I miss out on something. It is what it is. If I hadn't done the GPL -- I'd much rather have the unicorn making people's lives better, than not Pion existing at all. Now, I think I would be hurt if I found out that the unicorn was putting people in cages. Then I'd probably be like "Man, I think I've made the world a worse place", but again, my arguments comes back to "What can I really do?" They're gonna do it no matter what. People are gonna do the wrong thing. I can help the good people, but I can't prevent the bad people.

**Jon Calhoun:** I think that's something that's hard though, because we tend to focus on the bad... Versus just all sorts of cases where you just focus on the potentially bad things people can do and how to prevent it. And I see this all the time, with stuff where -- to give you an example, I have Go courses, and some of the things that are sometimes challenging is some people will try to buy, download everything, and then immediately ask for a refund.

So you're like, okay, do I get rid of the refund policy because of that, or do I add some clause to it that's like, "If you do this, then you don't get a refund"? But then overall you're like, well, that means that anybody else who's a legitimate person doesn't -- you know, they don't wanna read through this clause of what applies, what doesn't... So I'm just like, "Alright, at the end of the day it's probably better off just to say the refund's there", and those bad people - I have to ignore them.

\[00:56:08.12\] And it sucks, because when it does happen, you feel frustrated, and you're annoyed, and everything else. But at the end of the day, like you said, you can't focus on that, because they're probably gonna do it or find some way to do it. Because even if you don't give them a refund, they'll probably do a chargeback, or something. Like you said, they'll either commit fraud, or something. There's no way to stop that, so just focusing on it is probably not worth your effort.

**Sean DuBois:** Yeah, I don't know what the right answer is. I guess at the end of the day you just have to find what's the total happiness you can do out of this day... And for me, I get my happiness out of helping/empowering the good people.

**Mat Ryer:** Yeah, the really strange version of this is where you end up with software they've done extra work to make the software worse for some people... And it's kind of a crazy thing. It makes sense, because you think of course "Well, there's a light package that's free, and it's limited, you can't do as much with it, and then you pay to unlock more features, or whatever..." But it is a very strange thing that we're doing, which is putting effort in to making it worse.

**Sean DuBois:** Yeah. I do hear arguments that for DRM it's worth having the basics... Like saying "Go get out your manual and type in the seventh letter of the ninth paragraph." But it's not worth doing the crazy DRM, because you just can't beat it. You can beat the 10-year-olds who are sharing the game between each other, but you can't beat the 25-year-old who's gonna sit and reverse-engineer and beat it no matter what. You can't beat them, but you can beat the easy ones. I don't know.

**Jon Calhoun:** So we probably should have asked this earlier... Specifically what about the GPL is it that you don't like? What specifically does it force people to do, that they-- because I'm guessing not all the listeners have read the GPL or are that familiar with it.

**Sean DuBois:** That if you make changes to the software, you can't distribute -- like, you have to distribute the source code. And I've seen that even go further with the Affero GPL, where if you are hosting something and someone uses your service, they have to have access to that service. But a part of me is like -- I don't think it's worth it, because I think people will then not build stuff with Pion. It will stop ideas from being built. So I would rather see people go do that, and go build something exciting, and then I think they'll do the right thing. I think the one that encouraged me was John Carmack's approach to open source, where he built Doom and Wolfenstein 3D, and then he just kind of threw the source code over the wall, to encourage people to learn and make things better. That's my outlook on it - just give people the freedom to do what they wanna do, and that's gonna bring out their best selves. So that's my issue with the GPL.

The other one is I'm not a big fan of restraints. Just the idea that you have this big license is frustrating to me. I think that that encourages bureaucracy and that encourages more structure. It's not helping software developers, it's not helping people. It's encouraging these giant systems that I'm not really benefitting from.

**Jon Calhoun:** Well, like you said before, I feel like it's also one of those -- if you're a big org, you can definitely tell which license it is, and what you have to do when you get it. But if you're an individual developer and you don't really know for sure, I feel like (like you said) it can scare them off, because they don't have the resources to actually figure out "Am I okay doing this or not?" They definitely don't have the money to go to court and defend themselves, or anything like that. So they're just like "I've gotta skip this, because I'm not really sure what this clause of the GPL means, or how it applies to my stuff."

**Sean DuBois:** Yeah. And that's the same why I'm against patents as well, because patents I think only protect the big players. The big players amass these big war chests, and if you're a little guy, they come to you and say "Hey, sell to me, or I'm gonna crush you." So I think the GPL is the same way. It's the right intention, but what all of these systems do is they help the big players.

\[00:59:54.07\] The big one that I heard is in the E.U, when we're adding all these protections, there's a reason that these big companies are encouraging it, because now it's building up their moat. So I can't go compete with a big company that's doing X, because they've built up this big moat, and there's all this regulation.

So I sat down and I really wanna do the right thing. I'm adding regulation because I believe I'm making people's lives better. But at the end of the day, regulation is just abused by people with malevolent intent. And you can't beat them. Whatever system you make, they're going to abuse, so it's better not to have it at all.

**Jaana Dogan:** Yeah, even if a large company's GPL is such a scary thing, because it's basically like software patents, you keep it as a leverage to sue another company in case you need to sue them, or for some other reason... Because you wanna destroy their business, or something.

**Mat Ryer:** Yeah, I'm with you on patents, and stuff. I don't know if I'd advocate to abolish all laws, which seems to be what you're suggesting, Sean...

**Sean DuBois:** \[laughs\] No, I'm not... I think where I come down -- I am all for laws that encourage community ownership and direct representation. But anything that empowers people war chests and large organizations, I am totally against. That's like a bigger ideological conversation, but a lot of my decisions are made off of that - how can I empower the little person? That's what drives everything - how do I encourage individuals to live a happy life. Because I think the U.S. was the best when there were more small businesses. You look back, and in the '40s and '70s you had more small businesses, and that directly ties to -- people had better lives because of that. That's my two cents.

**Mat Ryer:** Lovely.

**Jaana Dogan:** I can't imagine publishing any of my open source projects if Google was telling me to use GPL. Because if I'm using MIT or Apache2... as soon as I leave, I still can take it and convert it into a business, or something. I don't own the IP, which is also a ridiculous thing in the U.S. If you're working for a company, the company owns the IP, not you as the main contributor. And on top of that, if it's been licensed as GPL, then Google just basically owns me until the end of my life. So that doesn't really give individuals any power at all.

**Jon Calhoun:** That one's also so weird, in the sense that -- like, if you do it on company time, on company property, it's theirs. But if you can someone prove that it was on your own laptop, on your own time, not using -- like, there's all these hoops you have to jump through, and it's like, what person can really defend against Google?

**Jaana Dogan:** Exactly. And it's more extreme than that. In order to have IP, you have to stop using old resources, including talking to people. So you can't really go and talk to your co-worker about your project if you wanna own the IP. It's basically not very practical.

**Mat Ryer:** It's funny, yeah. I understand how that happens inside companies, but it is a shame. Another thing on patents that I've seen... I've written some patents, and one of the things -- at some point I found myself in a meeting with a lawyer who was basically saying "Other people can essentially just violate this patent, because it's about enforcement. So if no one's gonna go after them, then people are free to do it, basically." But you're an author of it, so you definitely have knowledge of this patent, so you absolutely cannot use any of that technology. So there is a kind of penalty to individual developers and individual IP creators if you do write a patent for the company.

I always think companies ought to do something extra for people that are contributing, if they're doing patents, and stuff... But yeah, ideally we wouldn't have software patents. And I think anyone that loves open source can see that.

**Jaana Dogan:** Large companies just kind of like give these grants, which is like $5,000 or $10,000, and there's all these lawyers... You just basically come up with an idea to the lawyer, and the lawyer just converts it into a 30-page patent, they submit it...

**Mat Ryer:** That's mad.

**Jaana Dogan:** It is mad, yeah. This entire system is just so broken...

**Mat Ryer:** You just go into a meeting--

**Jaana Dogan:** ...and it's all for leverage.

**Sean DuBois:** \[01:04:09.02\] Yeah, you literally go into a meeting and somebody's like "What did you do in that project that can be patented?"

**Jaana Dogan:** Exactly.

**Sean DuBois:** It's not like you come up to somebody and say "We've found something novel." People literally hunt you down, like "Do you have anything that can be patented?" and you're like "I don't know."

**Mat Ryer:** Yeah, "I don't know... I used paths. Has that been done, paths...?" \[laughter\] I'm saying that as a joke, but genuinely, I have a patent which essentially describes paths.

**Jaana Dogan:** \[laughs\] Well, there's a patent for double-clicking... So I would completely believe that that would be legitimate.

**Mat Ryer:** Yeah, a double-click... Imagine that, someone just got into a meeting and gone "What if we click twice?" I bet the bloke that invented the click was really annoyed, wasn't he?

**Jon Calhoun:** I mean, Jaana is really hurting us. Now I can't write software that takes a double-click, because I know about the patent.

**Mat Ryer:** Oh, Jaana... And everyone listening.

**Jaana Dogan:** Yeah, I revealed a secret...

**Sean DuBois:** I feel successful, because the GoTime channel on Slack has gone off about my GPL comments... So I think I did it.. That was my only goal.

**Mat Ryer:** Yes, it turned out to be somewhat popular. And you also came out of this section looking like a saint, Sean... And that is not the purpose of Unpopular Opinion. It's meant to have the opposite effect. I want to damage careers, not help them...

**Sean DuBois:** \[laughs\] No, I took months of preparation. I knew I was gonna be cornered.

**Mat Ryer:** Yeah, exactly. You managed to do that trick you do in an interview, when you're asked for a weakness, and you go "You know what - I'm too good at work."

**Sean DuBois:** "I care too much, man. That's the issue. I care too much."

**Mat Ryer:** "Yeah, my code's just, if anything, too good. And it upsets people. It upsets all the people on the team." It's crazy.

**Sean DuBois:** \[laughs\]

**Mat Ryer:** Well, you can't say it's thieving. "Have you got a weakness?" "Yeah, thieving."

**Sean DuBois:** "I don't really show up to work and I steal stuff from the supply closet."

**Mat Ryer:** \[laughs\]

**Jon Calhoun:** "And it's not really a weakness if you're not getting caught..." No, I'm just kidding. \[laughter\]

**Mat Ryer:** Well, that's all the time we have today. Sean, thank you so much. Please do come back, and anyone interested in Pion, check it out. It's literally GitHub.com/Pion, and you can start hacking on it.

This has been great, thank you very much. I'm gonna wind up the show, unless there's other bits we wanna talk about.

**Sean DuBois:** Thank you very much for having me. Hopefully, if you're interested in coming on, please jump in our Slack channel, open up our thing. I wanna have you involved and I wanna see if we can make either your life or other's a little better. And thank you very much for having me. I'd love to come back on, even if it's not about Pion.

**Jon Calhoun:** What is the Slack channel.

**Sean DuBois:** There's \#pion.

**Jon Calhoun:** Just \#pion in the GopherSlack?

**Sean DuBois:** Yup, exactly.

**Mat Ryer:** Brilliant. Are you on Twitter, Sean?

**Sean DuBois:** Yeah, @\_pion is the Twitter. I don't have one myself, but it's just me running it. So if you see any opinions on there, you can blame me.

**Mat Ryer:** Okay, we will. \[laughter\] Thank you very much. Thanks for listening, we'll see you all next week!
