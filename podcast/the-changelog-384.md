**Jerod Santo:** Matthew, we're here to talk about Matrix. Maybe not THE Matrix, but Matrix, which is an open source secure decentralized communication standard protocol software. There's a lot here... First of all, thanks for joining us.

**Matthew Hodgson:** Thank you very much for having me on the show. It's a privilege, and I'm really looking forward to trying to tease apart all the various different bits and bobs we have in Matrix... Because you're right there's lots of different bits there.

**Jerod Santo:** There's a lot going on, and a lot of buzz going on as well, especially since recently Mozilla adopting Matrix and killing off their 22-year-old IRC dependency. Before we get to that, maybe we'll talk about the idea itself, where it came from, and the birth of these bits and bobs.

**Matthew Hodgson:** Yeah, sure. And yeah, it is topical... I guess it's just yesterday that Mozilla turned off their Moznet, one of the older IRC networks. Honestly, we felt pretty sad about it... But we can talk about that in a bit.

In terms of trying to explain Matrix itself, as you said, it's an open source project and we provide an open standard for secure, decentralized communication. You could call it an open standard, or an open protocol, and you also get an open network out of it. What we've tried to do is to basically build the missing communication layer of the open web, because there are many different ways to communicate online these days, and almost all of them are proprietary, closed silos like WhatsApp, and Slack, and Discord, and Facebook, and so many other ones.

We had been building these as a professional team for about 15 years for ourselves... Typically building them actually for big telcos, so tier one telcos like TIM Brasil, the biggest mobile network in Brazil, and Singtel in Singapore, and other guys... I used to run a unified communications business unit for an outfit called Amdocs, who are a large multinational telecom supplier... And we got fed up with building yet more proprietary silos and taking this problem of all of these little islands which can't talk to one another, which go and trap their users into these silos... And instead replace it with something completely different, and try to do the impossible, follow the Holy Grail, build an entirely new communications protocol, put it out there, completely open, on the internet, for anybody to build on and to participate in...

\[00:04:20.19\] I hope that if we can pull it off, we might have something that could replace email, could replace the phone network, and be a new kind of common denominator way for people to talk in real-time. That could be instant messaging, it could be VoIP, video, it could be in virtual reality, it could be IoT data... Any kind of conversational real-time data, have a way to synchronize it from A to B.

So on one level, it sounds like a crazy moonshot, and a bit over-ambitious... And certainly, when we started it five years ago now - actually five-and-a-half years ago; September, 2014 is when we launched it - it felt totally nuts... But since then, we've just been plugging away at it, trying to make it all work, and so far it seems cautiously positive.

**Adam Stacoviak:** When you said "sad" regarding Mozilla and Matrix, was that because of IRC going away?

**Matthew Hodgson:** Yeah. I mean, I'm an IRC geek; I'm sure that many people here have spent their lives on IRC... I started admining a network back in '99. It was a Tolkien network, actually, because that's how cool I am(!)

**Jerod Santo:** \[laughs\] Cool to me.

**Matthew Hodgson:** It's still going strong now, 20-odd years later... And now I still have my IRC setup, I have my ZNC running, and all that stuff... Actually, I access it via Matrix these days, because we bridge into existing networks like IRC and XMPP from Matrix. But I really get the IRC thing. Earlier companies were founded from IRC. We started working together, but we knew each other on a university undergrad IRC channel in 2000, and '99 and '98 and so.

So we basically grew up on IRC, ended up creating Matrix... In some way, it is very heavily inspired by IRC, but built on 21st century technology and feature set, and with a slightly bigger vision, in terms of not just being a chat, but being an open fabric.

So first I'd say I've got a very soft spot for it, and I felt in some ways really sad that we were the reason that they turned it off entirely. Frankly, I wish that we'd left it going and kept it bridged, but they wanted to make use of all of the moderation stuff that we have in Matrix, and try to get the best possible starting point experience and try to minimize confusion due to somebody on IRC saying "Oh, I can't see that emoji, because my client doesn't do emoji" or "I can't do threads, because IRC doesn't do threads", and that sort of thing. So I see why they did it, but I still feel like we accidentally killed an old friend.

**Adam Stacoviak:** It's just funny to see you be sad, because we're so enamored with progressing that you don't often stop to see the dead, I suppose, to be very graphic... Dead technologies or things that fall by the wayside as we progress. We're so attracted to change, and the future, and modern, and 21st century, as you've just said, that we -- I was just surprised to actually see you be sad that IRC went away.

**Matthew Hodgson:** Yeah, well - as I said, it's sentimental value, and also... I mean, this is where we spend the entire show talking about IRC and feeling sentimental about it... \[laughter\] But I have a weird theory, that the lower the bandwidth you have to communicate, in some ways the more intimate and more emotionally connecting a communication technology can be.

**Jerod Santo:** Really?

**Matthew Hodgson:** Yeah, I think what happens is that the brain fills in the gaps. So if you're on a big, glossy, 1080p video feed like this, it's pretty unambiguous in what's going on. You can see each other's body language, you've got all of your amazing audio, and it's like real life, it's very high bandwidth.

\[00:08:10.12\] But then if you take all of that away, and you end up with a really low-bandwidth, minimalist thing like IRC, there were friends (particularly from the Tolkien network) who I'd never met in real life, that I became incredibly close friends with, and subsequently did meet in real life. I ended up introducing folks through there that then got married... It's not rocket science, everybody knows how online relationships work now... It was a little bit less obvious in the late '90s. I think the more minimal you are, the less bells and whistles, that has a certain appeal, and it's not just grungy retro things, because the Tolkien geeks I hung out with weren't techies; they were total randoms who just happened to like Lord of the Rings... Before the films came out, I hasten to add...

**Jerod Santo:** \[laughs\]

**Matthew Hodgson:** ...actually added just to be united for a commonality of interest in the books, and it was just really interesting that the more minimal, the more the mind -- it's like reading. The difference between reading and watching a film. Sure, you can watch a film, super-rich, and you have a shared experience with somebody, but it's never gonna be as vivid as the imagination you have when you read a good book. The more that is left unsaid, the more vivid your imagination is.

**Adam Stacoviak:** I can agree with that. There's been several books where I've read it, and -- I like the movie, because hey, you get an hour and a half bite-sized version of the book, and it's nice because they put a visual to things and kind of paint in what your imagination leaves out...

**Jerod Santo:** Well, don't they always disappoint you though? Because it's not what you imagined.

**Adam Stacoviak:** Kind of... The one in particular that I was still very happy with was Ready Player One. As a book it was amazing, but as a movie - maybe it's Spielberg, I don't know, but it was still amazing... To me.

**Matthew Hodgson:** It's a controversial one.

**Adam Stacoviak:** Jerod and I never agree on movies, that's why I said "To me" at the end there, because we almost never agree. I like movies he hates.

**Jerod Santo:** Well, I didn't see that movie, so I'm not gonna comment on it. I saw the five-minute clip you showed me in your home theater and I enjoyed that, because it was a spectacle... I just think that, in my experience, almost every time a movie has been based on a book that I previously loved, the movie has been a letdown versus your experience.

**Adam Stacoviak:** Yeah. And that's where I can agree with Matthews, is that what you see on a film may never be as vivid as what you can imagine... And I do agree with that.

**Matthew Hodgson:** I think the same is true, honestly, on IRC, and segueing beautifully into Matrix, where we have a much, much richer set of primitives to work with. You have your stickers, you have your emoji, you have your animated GIFs, in-line images, in-line file transfer, full video conferencing, full voice conferencing, and we've even done 3D video calling, NVR over Matrix, just to try to spell out to people that it's not just text chat...

**Jerod Santo:** Wow.

**Matthew Hodgson:** And also, you can't have a project called Matrix which doesn't have a VR element, let's face it... So we built virtual worlds in Matrix using Star Trek TNG Season 2 holodecks, and WebVR... And went and took iPhone 10 and I modeled it to WebRTC to support the dev channel, as well as a video channel. So you'd set up two video calls over Matrix, one for dev, one for the natural video, and then get a kind of .cloud/mesh of the person sitting in VR, just to spell out to people that "Look, you can use this for synchronizing any type of real-time data."

In this instance it was just the call signaling, it wasn't the actual call media, which goes over SRTP, the standard encrypted real-time protocol thing that I guess we're using to talk right now... But the rest of it, the same geometry was coming out of Matrix. Now, that's the other end of the spectrum; it doesn't get much richer than that, to be in a virtual world with somebody... And you put a VIVE on, or even use a Project Daydream style enhancer... And it was super-compelling.

\[00:11:59.17\] You could get eye gaze correction, line of sight correction, because in VR you just physically move your head around until your eyes are lined up with the other person. You don't need to mess around with Vudu like Apple tried and failed with FaceTime, to kind of slightly rerender everything... Ironically, they are actually doing it the same way that we were doing it, but humans naturally gravitate to fix their line of sight.

Anyway, long story - basically, we've gone to the other extreme. But in the end, a lot of the most productive conversations are the ones which are completely indistinguishable from IRC. I think one of the reasons Mozilla liked Matrix is that the IRC routes are very visible, and if you wanna use it and play with it and hook up WeChat to it, there's a really nice command-line IRC client. Somebody wrote a really surprisingly impressively good Matrix module for it, complete with end-to-end encryption and typing notifications and all these sorts of things... And people can use it and pretend that they're in a kind of modern IRC. If they do that and it works for them, then that's a good result.

**Jerod Santo:** Absolutely. So I was trying to think back -- I couldn't find it on our search, Adam, but I was trying to find that conversation we had a couple years about the decentralized social web. We talked about the success of email and the failure of IRC in terms of mass -- not mass production, but what's it called...? Critical mass.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So email hit critical mass, IRC never did... And I remember we had a fun conversation hypothesizing what held IRC back and why email succeeded where IRC failed. And Matthew, I'm curious, because of your love for the ancient and nostalgia for it - and still, I agree that you can get a lot done with plain, old text... I'm curious of your thoughts on that. Do you think email had an advantage over IRC and usability? Or why do you think that email hit critical mass and IRC was always the dwelling place of geeks and nerds?

**Matthew Hodgson:** That's an absolutely excellent question, and it's something that we literally obsess about on a daily basis these days... Because you can only look to the past and learn from it to avoid making the same mistakes as we go and build our protocol out in Matrix. I mean, there are many aspects to it...

One thing with email is that there was nothing before it, as if you had to have a bootstrap first commonality to let people talk to one another... So whatever the first thing was that could bridge that gap in a global way would have amazing first-mover advantage, as we've seen. Secondly, it's open federation, whereas IRC is closed federation nowadays. In the very dim days of IRC, right at the beginning where there was only one network, it was actually open federation and anybody could just pitch up and try to peer in, or set up an S: line or whatever it is to go and connect to another server... And it was a disaster, because it didn't scale, and it got abused.

Then there was the creation of EFnet, which I think was the first fork out of the original IRC network, when they jupitered off a server called Jupiter I think, and so on and so forth. But it was basically a closed federation, so you couldn't just jump on board. Probably the other major thing is the lack of a killer app for IRC. When we look at where open standards for communication have happened before, like SIP for VoIP, and XMPP obviously for chat, and IRC; there's never for any of them been a no-brainer killer app like Netscape was for the early web, or like -- I hate to say it, but like Outlook Express was in the early days of email, relatively early days of email. Let's face it, every single Windows box had Outlook Express in there, and people used it...

**Jerod Santo:** I know...

**Matthew Hodgson:** And then obviously, Gmail has come along, and Hotmail came along, and people moved to the web.

**Jerod Santo:** I use it as well, in anger.

**Matthew Hodgson:** \[00:15:49.06\] \[laughs\] But my point is people were really taking time to bootstrap the protocol... I guess Pine would have been the early email equivalent, and Mutt to some extent... But Pine was pretty mainstream. When I was at university, every student had a Pine login, and it was expected to fire up PuTTY on their Windows box, or actually use a VT100 somewhere (at the risk of sounding ancient) to go and check their email via Pine. And people made clients that worked, that were usable by normal people.

I think there's an elitist thing, honestly, on IRC, that geeks think "Well, this just needs to be good enough for me and my developer mates. And in fact, the geekier it looks, the cooler it is... And I don't want any of these mainstream normies going and screwing up my special IRC network."

**Jerod Santo:** Right.

**Matthew Hodgson:** That attitude kind of prevails. On XMPP, similarly - nobody sat down and said "Right, I'm gonna write the Netscape equivalent for XMPP. So this is something that we very consciously tried to fix with Matrix. We built the protocol, but also invested more time than anything else on Riot, which is the reference/flagship app that we built as the core team to try to be something that looks and smells like Discord, or Slack, or WhatsApp. People don't give a stuff about decentralization, don't care about open standards, and the open web, or anything like that. They just want a secure version of Slack, that they have something that they can use.

So that's a reason why we might be succeeding better in terms of mainstream adoption than some IRC or even XMPP, and one of the things that email almost had to get right, in that the bar was so much lower at the beginning that any app that actually allowed you to do email, even if it's the original Unix mail client, the horrible command-line thing that takes one-letter actions - even that was a killer app when it launched.

**Adam Stacoviak:** Email is very personal, too. I mean, it still prevails, and many people build businesses around email newsletters alone... So it's still very much very personal, still very much a commerce opportunity, definitely a killer app. Would you say that that kind of bleeds into this idea that adoption is driven by ease of use? Would that bleed into ease of use, the killer app idea?

**Matthew Hodgson:** Yeah. It's usability.

**Adam Stacoviak:** Yeah.

**Matthew Hodgson:** I mean, obviously, it needs to actually be there for a purpose. Email is still the only commonality between any people out there on the net.

**Adam Stacoviak:** It's true, yeah.

**Matthew Hodgson:** You've got the phone network, so you can piggyback on top of that with WhatsApp or something, but if you're not piggybacking on top of the E.164 numbering system that you use on the phone network, you basically start with email. I think that we got in touch here with an email coming in, saying "Hey, do you wanna come on the show?"

**Adam Stacoviak:** That's right.

**Matthew Hodgson:** And if you wanna reach out to somebody, that's how you do it. Obviously, it needs to be usable, you need to have a usable app on top, too. And it's very true for us, because we're competing against these very glossy apps, like Discord, who don't need to worry about any of the standards, the APIs, the ecosystem, the open source, a governance model to let people contribute to how the thing evolves etc. They can spend all of that time and effort on glossy, interactive UI. We have to do that, and more, as well as the rest of it, to keep up, to succeed.

**Adam Stacoviak:** You mentioned that you got tired of building silos, right?

**Matthew Hodgson:** Mm-hm.

**Adam Stacoviak:** And Discord is a silo, right?

**Matthew Hodgson:** It is.

**Adam Stacoviak:** You make your own account, it's a silo. You can't bridge it to other things, you can't connect conversations from one community to another, you can't create public channels... It's missing all that stuff.

**Matthew Hodgson:** \[00:19:48.00\] It is. I mean, it's a nice experience, and they seem to be doing pretty well, but it's the epitome of a silo, unfortunately... And that's the last thing that we want Matrix to be. For context, Matrix has got about 40,000 deployments that we're aware of, one way or another, on the public network right now. Some of them are massive, with millions of users; some of them are a Raspberry Pi, like I've got a PC in the corner of the room here, with my personal server which runs on it... And it's the opposite of a silo. It feels like an ocean, or a web, if you will.

**Adam Stacoviak:** Yeah. Why are we as humanity then shortsighted when it comes to massive communities? You seem to have some deep thoughts on this stuff... So if you kind of got into Matrix and this solution by being tired of building silos, what are we missing as humankind when it comes to networks of large communities, with massive amounts of knowledge and silos?

**Matthew Hodgson:** I hope nobody is listening to this, hoping that we're gonna be geeky about HTTP versus CoAP, or JSON vs CBOR, or "What is the ratchet we use in our end-to-end encryption?" But no, it's an excellent question, and I'm very happy to talk about what we're missing as a species... Let me answer as a story, which is about two years into Matrix. It was kind of working; we've got hundreds of servers out there, and probably hundreds of thousands of users on the network... And we were trying to figure out where it would go from there. Honestly, we started to see some level of abuse popping up on the network. We started to see our first spam, we started to see people being unpleasant to one another.

As we started to introduce the end-to-end encryption, it became obvious that an open secure decentralized encrypted communication network that anybody can participate in without any restrictions whatsoever can encourage some pretty colorful (to say the least) behavior from the human species. And if this thing continued to scale - as it has since; we've got like 15 million addressable users on it now - you're gonna end up with a massive global community that just keeps growing. And if we do the right thing, it should be bigger than email.

And just like email, it's got massive abuse with spam, and all the various different flavors of spam that you see. Likewise, in Matrix we could disintegrate into an absolute firestorm of spam abuse, and everything in between. It was literally almost a light bulb going on - or almost a light bulb going off - that we thought that we were building a decentralized communication network. And we built one, and we realized that actually the problem that we have to solve has nothing whatsoever to do with decentralized communication, and absolutely everything to do with decentralized reputation. Going and giving users the ability to empower users to basically tune out the stuff they don't wanna see.

It might be that they don't wanna see porn, it might be that they don't wanna see political content, it might not be spam, it might be illegal stuff that they don't wanna see... Or if they might want to discover alternatively the best open source content, or the best tech content, or whatever it might happen to be. And that is an entirely separate problem in its own right, which has first of all nothing to do with Matrix.

It's a problem that permeates society in general. It's a problem that we see all over the internet and the web today. It's a problem that is biting Facebook monumentally on the ass, because they just haven't ever spent the time to figure out how to ethically and sustainably let their users choose what to see; instead, they algorithmically choose the optimal information that will addict them to come back and watch more ads... And it was this horrible realization that basically the success of Matrix is contingent on solving the problem of global communities, which is the problem of empowering people to basically control the filtering algorithms that select what they can see.

\[00:23:53.09\] Now, it's probably not the answer you were expecting, but in terms of where I see the problem with large, global communities - it's because they rip to shreds, both in real life and online, if they end up being fed propaganda and disinformation designed to addict them, designed to keep engagement at the cost of the individuals... And people don't see it coming.

People have finally wised up to it in Facebook and Twitter, to some extent, in the last couple of years, but we were panicking about this 4-5 years ago, before the Cambridge Analytica stuff, saying "Oh my god, if we don't go and figure out a way to stop..." Well, you know, it's even just gonna be total chaos and explode, or it will get taken over by nasty folk and be considered a dark web, kind of bad reputation, where Matrix is the place you could go if you wanna find bad stuff, which obviously is gonna impact its ability to go mainstream, not to mention just make the world a worse place...

So we've been spending an awful lot of time thinking about solving the small problem of disinformation, abuse, propaganda and fake news on the internet... Because if we don't, the project fails.

**Break:** \[00:25:11.29\]

**Jerod Santo:** Matthew, you called it a moonshot, and you also described all the ways in which it's hamstrung versus proprietary competitors for that moonshot, which is the foundation, and the encryption, and the decentralization, and all the things of open source governance... So you have effectively a hamstrung moonshot you're trying to make. The question that comes to my mind is how do you fund a multiple-year hamstrung moonshot like this? How are you going about it?

**Matthew Hodgson:** Good question. You're right that it's harder to do this in a conventional model, and ironically, we have a side-by-side comparison between the same team who were building these proprietary silos originally... And in some places they were more sophisticated than Matrix. We had things like streaming file transfer, so you could livestream video as a file upload and watch it in real-time as it downloaded. Really cute, really fun. Then we did Matrix, and I'm guessing it's about 6-10 times more manpower required, and time and effort to build something we had already built, but this time do it as open source and do it in public, do it with open governance and open standards.

So in terms of the funding question, we were lucky in that the first couple of years we did it inside Amdocs. We took the unified communications team wholesale and suddenly pivoted overnight, with the blessing (of course) of the powers that be, to go and create Matrix, on the basis that if we were successful, Amdocs can one day go to AT&T and say "Hey guys, do you wanna buy a billion-dollar carrier-grade Matrix deployment from us?" And with any luck, there will be good reason for AT&T to stop messing around with this 150-year-old PSTN stuff, and actually come and jump onboard Matrix instead. They reasoned that if anybody would pull this off, it would be an existing, proven team, who were profitable and successfully delivering carrier-grade telco stuff.

\[00:28:11.23\] So that's how we were funded for the first 2-3 years. Then it got to the point that we were successful enough that other folks were building on top of the protocol... Particularly, Ericsson spun up a business unit called the Contextual Communication Cloud Business Unit, who were providing enterprise communication tools based on top of Matrix.

Also, Thales, the French defense company, was spinning up a unit called Citadel, who provides military-grade communication on top of Matrix... And Amdocs were saying "Well, guys, congratulations. You're slightly hamstrung, but not very hamstrung." Moonshot is wildly successful, and why the hell are we the only people paying the bill for this? \[laughter\]

Also, more practically speaking, the thing would never ever work if it had a single corporate sponsor who was funding and driving the entire thing... Because it would be as if AT&T had invented the internet and never quite taken their talents out of it. So it was mutually beneficial to part ways, and set up the Matrix.org foundation as a non-profit legal entity which enshrines the governance model of the project and is the owner of all of the open source intellectual property inside an asset lock, and has a neural board of "guardians" (as we call ourselves), who are practically speaking the directors of the non-profit foundation, of which two are myself and my co-founder Amandine, who came up with the idea of Matrix back in about 2013 with me... And then three independents. We've got the Marconi professor of communication from Cambridge Univeristy over here, where a lot of the team started out, and also we've got Ross, who is a decentralization privacy expert lawyer in Washington, who works for New America as a policy expert in this space... And also Jutta Steiner, who is the CEO of Parity in Berlin, who are one of the major players in the Ethereum Blockchain space... And it turns out that Parity as a company runs entirely on Matrix, and has done so for about 3-4 years now... Which is petrifying, given how immature we were 3-4 years ago... \[laughter\]

But basically, we got independent people from the community to come onboard and look after -- basically be custodians, to make sure that nobody screws it up, including myself, including Amandine, as founders and the creators of it... Because yeah, we need to keep the lights on, and the way we do that is to then set up a standalone startup called New Vector. It was originally called Vector... Vector, the Matrix - get it? Then we spun out of Amdocs - or parted ways, should we say, with Amdocs... So we were on a new vector, so we called it New Vector. It's a terrible name.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Well, naming is hard, so we don't blame you.

**Matthew Hodgson:** Yeah, it is.

**Adam Stacoviak:** Just add the word "New" to it. They did that in Silicon Valley, the show... They were spinning off Silicon Valley startups in China as a whole thing; it was funny. It was like New PiedPiper. It wasn't anything special... \[laughs\] Anyways.

**Matthew Hodgson:** I hate to say that I've never watched an episode of Silicon Valley, because as far as I can tell, it is way too close to the truth, particularly the whole decentralized stuff...

**Adam Stacoviak:** Oh gosh, it was so good... You missed out, you should do it.

**Jerod Santo:** Well, I'm here thinking about New England, I'm thinking about New Mexico... This is an established naming convention.

**Adam Stacoviak:** Yes.

**Matthew Hodgson:** Possibly even New York!

**Jerod Santo:** There you go.

**Adam Stacoviak:** Yeah, New York. There you go.

**Jerod Santo:** It works for them.

**Matthew Hodgson:** \[00:31:51.22\] But I suspect we won't keep the name forever, to say the least... But for now it's done okay. And we got the whole team, apart from one guy, in the end, to come over to basically be hired by us to work on it, and we keep the lights on by providing professional services and SaaS hosting for Matrix, because everything is open source - Apache license, you can run it yourself... Often it's just easier to ask the guys who wrote it to run it for you, so we've got a big Kubernetes deployment which kind of leverages the economies of scale and all the expertise we have in running the servers.

For instance, we host Mozilla's server for them. They could obviously run it themselves, but the fact that they have the option to migrate off at any point and run it themselves is kind of good enough. It's a safety net. They're not being trapped into a vendor like Slack or whoever it might be, and that's the value prop that we provide on the SaaS platform, which is called Modular.im, by the way, if anybody is interested in getting an excellent Matrix server hosted by the creators and the experts.

And then separately, we do professional services, consulting work for anybody who is doing large-scale Matrix deployments and needs advice on how to get it right. That started off with the French government; he reached out a few years ago now because they realized they had a security risk, that everybody was using Telegram for their internal political and public sector operations, which has some fairly questionable encryption heritage, in terms of using a Russian communication app; if you are yourself a nation-state, surely you should be using something that is under your own control and you don't have to trust anybody sitting in a different country.

So they went and googled for decentralized communication systems, or self-sovereign encrypted communication, and we're basically the only one (even now) who comes up. So they pinged one of our Android developers on GitHub - that well-known way for the government to tap you on the shoulder... And he said, "Oh my god, Matthew, I have no idea who this is, but they say they are from the government." \[laughter\] He's based in France, so it was literally his local government reaching out. He's like "It's the ministry of digital, saying they want to use Matrix everywhere. Help, help!"

So we went over to Paris and met with them. A really nice bunch, an amazing first conversation with them. You think everybody's gonna be very political and public sector... And I think the conversation began with one of the folks in the room asking how we did antivirus... Which is a good question, because if you're end-to-end-encrypted, how are you gonna get an antivirus server in there to go and check where the attachment runs. You're gonna have to start running client-side...

You're gonna install Norton Antivirus on the Android, or how are you gonna do it? And it turns out that he'd gone and set up Fuse as userspace filesystem on his Matrix server, and put it through an antivirus layer there... Not for the end-to-end-encrypted stuff, but basically to independently be the first person I knew who would actually integrate an antivirus properly into Matrix... Which I thought, "Oh, this is gonna be a good relationship if you're coming at it from you've hacked up your own Fuse-based Matrix distribution."

So we've had a lot of fun working with them, and we provide a lot of services to them; we're keeping their deployment running, which is now 60 servers split over all 16 ministries, and it targets 5,5 million employees, because it turns out more than 10% of France works for the government. Who knew...? And it's probably our biggest success story so far in terms of getting people off WhatsApp and Telegram, and email, for that matter, and just having a massive cross-organizational encrypted system. They've had E2E actually turned on by default from the outset. They were the first people in the Matrix environment to do so.

A good example is that we built out their enterprise E2E stuff for them. We did do it server-side, and what we do is to send the single message key -- not even the message key; the attachment key for the attachment that needs to be scanned is sent to the antivirus server, which is completely operationally separate from the communications server.

\[00:36:06.21\] So you do break the E2E in the most strategically-limited manner possible, just to let the AV server scan that one file and then give you a result as to whether you're allowed to proxy it through to the device or not... And that's an example of the sort of things we do for them.

**Jerod Santo:** Very cool. It sounds like you have the old-fashioned way, you have customers. Beautiful.

**Matthew Hodgson:** Yeah, I mean... When we set up New Vector it was 2017, and it was right at the peak of the ICO frenzy, and an awful lot of people were saying "Oh my god, you've actually got a working decentralized product. If you put a token in that, you can be gazillionaires." And we did consider it, honestly, quite seriously; in fact, I even sat down with the team at one point and said "Guys, we're not doing very well at finding seed funding for New Vector. We're gonna do an ICO", and everybody kind of head-desked and looked unsuitably cautious and worried about it. I'm glad we didn't, honestly, for many reasons... But it's nice honestly to do it the old-fashioned way, with good old-fashioned customers, and avoid Matrix ever being a kind of pay per play thing where people are speculating or gaming it to try to get more of the magic beans.

**Jerod Santo:** Right. That being said, you do have a decentralized network that's sending encrypted communications around the world, especially now in governments even, so... Very important data, even though it's not financial transactions. So there has to be some aspect of trustlessness in there... Or I'm curious how the decentralization occurs and how you trust the servers, or if it's a thing that you sign up as a Matrix server and there's a centralized trust factor, or... Maybe at that point we're getting into the nitty-gritty of how Matrix runs and how the network operates, so go ahead and let us have it.

**Matthew Hodgson:** Sure. Very happy to talk the nitty-gritty. So the decentralization aspect of it was shamelessly ripped off Git. And in fact, at a data structure level, the chat room in Matrix is almost identical to a Git repository. It is a Merkle DAG of objects which are assigned into a directed acyclic graph. And you start off with the origin block, effectively the origin event, which is called an m.room.create event... And then as people participate in the room, they add nodes into that graph.

If there weren't any races, it would be just a linear list of nodes, but in practice you get races all the time, because people talk over the top of each other, and you have netsplits, and somebody might go offline, and their server might not be able to talk to the rest of the network... So you actually end up with quite interesting tree-shaped tags as the conversations bifurcate, and then rapidly reconverge again.

The novelty on Matrix is that the conversation is replicated over all of the participating servers... So just like in Git, everybody has a clone of the same repository, and is constantly pushing and pulling commits between copies of the different repositories. In Matrix every server, every node on the network maintains a copy of the conversations its users are participating in. So it's decentralized in that the conversations are decentralized over the servers.

In some ways, this is pretty old hat. It's very similar to Usenet. Anybody familiar with NNTP and Usenet should be familiar with the idea of conversations being replicated over a whole bunch of participating servers. Obviously, for Usenet it was done almost as a flood globally, and it didn't have the cryptographic integrity that you get from assigning it into a signed data structure like a Merkle DAG or a Git repository. I'd like to point out that we have nice hash agility in Matrix on our Git.

\[00: .25\] That's basically the way it operates, and the clients can be very thin. The simplest Matrix client is curl, and if you want to receive a message, you curl /sync on your Matrix server, and it will block until there's a message to receive, and then it will return the JSON of that message. The message can be anything you like; it's just freeform JSON. And likewise, if you wanna send a message, it's a single HTTP hit from curl. curl -X POST to send a message and you give it a message type you want to send, and some JSON body, and you send it into the room where you asked it to go.

There was a joke a few months ago on Hacker News a few months ago... I wrote a four-line or five-line Matrix client in bash and curl just to really try to spell out to people that your Matrix client can be as stupid and simple as possible. It's the equivalent of telnetting into an IRC server and everybody says "Oh, the reason email and IRC are so great is that I can telnet into it, and I say: Well, for Matrix, you probably could telnet if you really want to, but you'd have to type out the HTTP headers - so why not just use curl. But it's the same idea.

On the other extreme though, you could have a really thick client, like Riot, which has got offline support, it has local caches of your conversations, it has end-to-end encryption built in obviously into the client, and all of this good stuff, at which point you're up in the hundreds of thousands of lines of code... But the nice thing about Matrix is that it can be anywhere in between, depending on where you want to put things.

To actually answer your question (heaven forbid) on the decentralization piece, the big novelty other than replicating these conversations between the servers is how you stop people misbehaving... Because it has to be buzzing time fault-tolerant. If I spin up a Matrix server and I deliberately add a bunch of bugs into it, and I inject an event that says "Hey, I've kicked you from this room", everybody needs to decide whether I was allowed to kick you or not...

**Jerod Santo:** Exactly.

**Matthew Hodgson:** So can I ban you, have I got ops - all this sort of things. And for that we have a proof-based consensus mechanism... It's not quite a consensus mechanism; we call it State Resolution, because the primitives you get in each room is first of all the history of the messages and the timeline of that room, the conversation itself, and then a subset of those events are key/value data. Those are things like who's in the room, what permissions do they have, what's the name of the room? What's the topic of the room? And again, it's freeform; you can put any key/value data you like into it. But it's the key/value data that's important semantically for the events in that room.

Basically, if I were to kick you from this conversation if we were having it in Matrix rather than Zoom, then I would go and say "Hey, I'm gonna kick you", and the reason I can kick you is because I was given ops at this point by this guy who created the room. And you have to always provide the proof, a chain of events - the auth events, as we call it - the proof that you're allowed to do the operation that you do. And in fact, you do it on everything you do. When you send a message, you can say "Hey, I'm sending you a message. And by the way, the reason I can send this message is that I was invited by this guy. And he was allowed to invite me because of that", and it goes back to the beginning of the room. Typically it's like 5-6 events in the chain.

Everybody executes the copy of the auth chain against there via the room, and if they conclude that yes indeed, this event was allowed to happen, they accept it into their copy of history. And if you get a conflict in terms of some kind of race, some kind of contradiction, then we have state resolution kick in, which goes and defines how you merge together these key-values in a deterministic manner, such that everybody ends up concluding the same state of the room. And that's hard...

We got it wrong the first time, and it was a couple of years before we realized that it was exploitably wrong, and some really lovely people both discovered the vulnerabilities and then started to break rooms and exploit them... And we had a fairly stressful summer back in 2018, going and doing an emergency rethink of the merge resolution algorithm to fix the thinko and the thinkos that we had.

There were three or four shortcomings, things like having got a tie-break incorrect, also having a parameter called depth that should have been untrusted, but we were trusting it a bit more than we should, which was liable to people then lying about it, and abusing... And so forth.

\[00:44:20.10\] So we shipped at the beginning of 2019 state res v2, which gets it right, and is what Matrix uses today... And so far we haven't seen any disasters with people discovering that they can inject malicious events in order to hijack rooms.

Again, it felt a lot like the early days of IRC; if you ever saw a netsplit, where after the netsplit half the people got ops, and they come back and there's a race before the ops get taken away, but if they script it during the race, they can hijack the channel... It was literally "Oh my god, we've reinvented the mistakes of EFnet... 1998 all over again." But just like IRC finally got its act together, we did too.

**Adam Stacoviak:** I can't even imagine what it takes to build or test that. Something decentralized -- how do you even test state resolution?

**Matthew Hodgson:** Yeah, again, excellent question. On testing it we have a tester called SyTest, which has got about 850 integration tests. It's a totally separate codebase to any of the servers, and it exercises one or more servers and clients to basically go through as much of the API surface as we can. And in terms of APIs, you have the client-server API, which is the one I explained earlier, for implementing clients. Then you've got the server-to-server interface, which is the much more exotic one, which has got both the cryptographic hashes flying around at the Merkle DAG, as well as state resolution. And there are three other ones. One for identity lookups, one for push, and one for application services... Application services being clients on steroids that can bridge you into other networks and link through to IRC and XMPP and that sort of thing.

So SyTest primarily tests -- well, it actually tests all of those these days. It's a bit of a weird project. It's written in Perl; it's not entirely deliberate that it was written in Perl, but it's one of these things that began in Perl and has stuck, and before you know it you've got 850-odd tests which are critical to any development to the platform... Stuck in your CI system; everytime somebody commits something to one of our server implementations, it gets run through the gamut.

As it happens, it doesn't have that much in the way of state resolution tests, and we actually have separate test checks for that... And it's very topical, because we have a next-generation server implementation going on at the moment called Dendrite. Our first one was written in Python and it's called Synapse. It's lots of Python and Twisted. Dendrite is written in Go, and it's ended up being written by almost totally different people to Synapse... And it had a hiatus of almost two years when we realized we didn't have bandwidth to both work on it and work on Synapse... But we're now at the point that Synapse is stable enough and we have enough manpower to actually work on Dendrite.

For the last week, one of the lead developers on Dendrite, Neil Alexander, has been implementing state res v2 for Dendrite, playing catch-up with where we were a year-and-a-half ago on in Synapse... And he's been writing a lot of unit tests, lots of test gigs running SyTest against it, also writing more documentation...

I don't if you've ever read the git-merge documentation, but somewhere in the Git source repo there's a doc that explains how their three-way merge thing works. It's the equivalent of our state resolution. It's surprisingly involved, and terse, and if you get it wrong, the whole thing just kind of falls apart in an absolute firestorm.

So we're constantly redocumenting it. I think we've now got five different write-ups from different members of the team; each one advances the state of the art to better explain how it works... And I think there's also a formal proof written in LaTeX (so it must be true!) to explain the algorithm and provide a formal justification as to how state res works.

\[00:48:06.01\] So it's by far the -- it's the only academically-complicated bit of it, and I think that we've got it right... Just like Git in practice is quite complicated, but it works very well in reality, Matrix is also quite complicated, but hopefully it's kind of necessarily complicated; it's not over-engineered for the sake of navel-gazing. It's the minimum level of complexity needed to be able to merge together decentralized chat rooms in a deterministic, consistent manner.

**Break:** \[00:48:44.21\]

**Jerod Santo:** Matthew, let's imagine I want to enter the matrix... Pun totally intended.

**Adam Stacoviak:** You went there.

**Jerod Santo:** I did. I had to. I didn't have to, but I had to. The geek in me had to. We have a Slack system, people are on Discord... Hey, some people are still using IRC. And of course, the question always comes down "This is cool, this is interesting. I like decentralized, I wanna be self-sovereign. I have all these things that I like", but what's it actually like to use it? And what does switching look like?

From our perspective, we have a Slack community, we've been on Slack for years now, and it's what most Slack communities are like. It's got channels, it has people in those channels, you can invite people to join, they join etc. What is Matrix like to use as a user? I saw there are communities, there's rooms... Explain it to us.

**Matthew Hodgson:** It depends on the app that you use... Many people use Riot, which was the flagship app that we built to give people an easy onboard... And you can install that on Android off Google Play, or F-Droid, or iOS, or the web... Or as currently an Electron app on desktop, on all the various desktop operating systems. And it looks and smells a lot like Slack, honestly.

You have lots of group chats, you have public chats, more like you'd get on IRC, you have direct messages, you have private DMs and private group chats... You can group them into communities, but this is a horribly badly implemented feature, at the moment. We're about to rip it out and fix it, but we don't recommend people go anywhere near communities at the moment. We only keep them around because people have used them and depend on them, but... It's something that we're working on fixing.

\[00:52:00.19\] And then within that you have all the building blocks you would expect out of a modern chat system. Typing notifications, read receipts - really important, to have little chat heads which go Tetris patterning down the right-hand side of the screen to show you who has read up to a given point, that Slack doesn't have... I have no idea how Slack survives without it, because it's so useful to know when people have read your messages... And you have file transfer.

End-to-end encryption is the other big unique thing that most people aren't used to, that you can turn on encryption, which uses the signal style encryption Double Ratchet Algorithm. We actually extended it with something called MEGOLM to support large encrypted group conversations; whereas WhatsApp and Signal I think only go up to 256 participants, we're good for at least some thousands of devices thanks to MEGOLM.

So you have the slight surprise when you enable this of needing to verify that you're talking to the people you think you're talking to. There's not much point in encryption if it turns out that you were talking to some attacker all along, who was pretending to be the other person.

First we got the UX for this terribly wrong, and went and forced everybody to have to manually verify every device they ever spoke to, which gets very tedious very quickly. It started off being kind of comparing public keys, then we switched to comparing at emoji; so you calculate a shared secret of emoji between the two devices, and check that both people are looking at the same shared secret... And then more recently, we've done a huge sprint of work - it's been like 4-5 months now - going and implementing cross-signing... Which means that if I verify one of my devices and you have verified me, then you will automatically trust the new device. So it starts to feel a bit more like PGP, where if you want to be sure that you're talking to the right person, you verify them once, but then it should last for the rest of time, unless they go and revert their keys and start over with a new identity.

It turns out it's hard to do in a decentralized world, and also the UX around it, to try to make it friendly to non-technical users; the idea that you scan a QR code on an existing device in order to kind of cross-sign it and verify the ownership is hard to get right... But we're almost there.

We also have to do it across all the platforms simultaneously, and as it happens, Riot is a totally different app in codebases web, iOS and Android. We deliberately didn't use React Native or Flutter or anything, but instead have built it from the ground up, independently, with different teams of people in each place, mainly so that we can modularize it and factor out the SDK as a component other users can build on for their own Matrix apps... But it ends up being a lot of work. But that's one of the other big differentiators, whatever things would people find...

Lots of work to be done around the Room directory, which at the moment is unfiltered, so you get a lot of random stuff...

**Jerod Santo:** Is there just a single namespace for rooms? So I created a JS Party room, and it's like \#jsparty:matrix.org. Is that global?

**Matthew Hodgson:** That was global. However, it's a bit unusual, in that because the rooms get replicated over the servers, you can define multiple aliases, as we call them... So it could be that alias on Matrix.org, but the same room could also be tagged as \#whatever on Mozilla.org, or on Gnome.org, or KDE.org, or any of the other Matrix servers flying around the internet, if there are users participating in that room from that place. So you get a local namespace on that server, but the rooms themselves are spread across the whole thing.

**Jerod Santo:** \[00:55:55.25\] I see. So the room exists across the entire network, but this particular way of referencing it is local to the Matrix.org domain, or server...?

**Matthew Hodgson:** The domain, yeah. And you get one server per domain, at the moment.

**Jerod Santo:** And are there sub-silos? Now I'm thinking about Mastodon a little bit - I'm trying to have a frame of reference - where there's sub-sections of that. Maybe that's the community's idea, but it's not baked out yet. For instance, in our Slack setup we have Changelog is our top-level Slack community, and then inside there we have rooms; so those are local. Is there any sort of namespacing in that way, where you could say -- maybe it's at the domain level, like "This is Mozilla's domain, so all the rooms are Mozilla's."

**Matthew Hodgson:** You're right, that's how communities are supposed to act. So it's not like Mastodon, where you have a server which really sets the tone for what goes on on that server... It's a lot more islandy, with links between the islands when you need them. Whereas in Matrix - again, it's more like Git, but it's not like a Git repository on GitHub has a particular flavor due to being on GitHub; it could equally well be GitLab, or Gitea, or whatever.

**Jerod Santo:** Okay.

**Matthew Hodgson:** Instead, here you have to create your own communities to group these rooms together... And you can do that by just using your server as a way to gather together a particular namespace... And that's a pretty clunky way of doing it, and you can only have one namespace per server by just saying "Hey, all the aliases on gnome.org are probably gonna be to do with Gnome." The communities are basically a way of maintaining these room directories, and also groups of users, which can span multiple servers.

The thing that went wrong with them is that we implemented them in a bit of a rush as a new API. It was like "Quick, quick, quick! We've gotta add communities, because this is unusable without them, so we need to have an API that allows you to create a group, and allows you to invite people into the group." And in the API they're groups, rather than communities.

So you create a group, and you invite people, you kind of need a way to ban people, you need to have moderators in there, and it needs to have a name, and a topic, and it's got a set of rooms associated with it... And we went and implemented all of this as an entirely new API surface, before kind of realizing one day that "Hang on... We've got rooms already; they've got members who you invite, they've got topics, and names, they've got power rules, and they're decentralized..." And it was at that point the whole thing kind of ground to a halt, having realized we'd done it horribly wrong... And we went and focused on other things, and we are literally now coming back to it, to rip it out and at least experiment with the idea of what we call rooms as groups...

So you just create a group, and you nest rooms in it in a beautiful matroska way... And if you kind of then join the top-level of the room, then you would get a room directory that shows you the other rooms which are nested within it, and it becomes a much more powerful way to have hierarchies of communities... And you can see that it can map onto an active directory tree, or LDAP, or whatever other hierarchy of users you might have, or hierarchy of rooms you might have flying around. It could be your IMAP hierarchy, it could be newsgroups, it could be a Discord server split into different partitions, or whatever Discord calls them.

**Jerod Santo:** Okay. The bridging content we spoke about a little bit, but this is the idea... I'm just going through some of the jargon used around the Matrix.org website, trying to understand all your bits and bobs...

**Matthew Hodgson:** Sure.

**Jerod Santo:** So bridging is bringing in other protocols, or other networks?

**Matthew Hodgson:** Yeah, precisely.

**Jerod Santo:** So this is how you have access to traditional IRC...

**Matthew Hodgson:** Yeah. There are about 60 or 70 of them now, most of them built by the community. On the core team we started with IRC, because as I mentioned, we kind of like IRC, and we also wanted to bootstrap it with the IRC community... And in some ways, the IRC bridge is the most sophisticated one. Lots of people on IRC use Matrix as basically a great, big, decentralized bouncer in the sky... And I think we do about 25% of the traffic on Freenode these days, much to the -- I think Freenode are a bit nonplussed about this. On one level, it means that people are using Freenode, and IRC lives on another level; I suspect they'd probably prefer if they were just talking on IRC, rather than coming in from another land... But it is what it is, and people seem to like it.

\[01:00:21.26\] We also did XMPP via Bifrost, which is a next-gen bridge kind of toolkit, which is actually an application framework to build bridges. So you implement your bridge for, say, XMPP, as a module that plugs into a general, all-purpose rainbow bridge like a Bifrost in Norse mythology/Marvel mythology would look like.

We also did Slack, and we did Gitter, and I always forget the last one... Those are probably the important ones, to be honest. And then everything else, Telegram, Discord, GroupMe, Facebook, Signal, WhatsApp -- all of this stuff comes in from the wider community. The bridge is super-easy to write, and the Slack bridge is about 50 lines of JavaScript, because it's basically just taking webhooks from Slack, turning it into the Matrix HTTP API, and then back again.

They also vary massively in quality, and also methodology. We always try to go for what we call double-puppeted bridges, which are ones where on the remote side the users are pupppet Matrix users, so you can't tell that they're not real Matrix users. And likewise, the Matrix users puppet other side users, so the people on the other side aren't aware that they're talking to people on Matrix.

For instance, there is a Slack puppeting bridge where you can give the bridge your Slack credentials, and it basically logs into Slack as you, and it mirrors everything it sees in Slack into Matrix, and vice-versa. So it's the ultimate vibe, that people don't realize that you're a dog.

**Jerod Santo:** I like that term, double-puppet. I've never heard of that before.

**Matthew Hodgson:** Well, we had to make all of this up, because nobody had ever gone into bridging at the same level of detail that we had. I actually wrote a blog post in 2017 called "How do I bridge thee? Let me count the ways...", which tries to enumerate about 5, 6, 7 different flavors, which goes from the worst bridge bots, which you just have a bot that joins the room - and I'm sure you've seen that on our IRC, that somebody joins it from Discord and you have a bot called "DiscordBot", and it just goes and blathers out whatever is happening on Discord, and you can't really see who's talking, and it dumbs it all down... Then the next level up would be using virtual users, so that you actually create IRC connections to represent the people on Discord, and then it goes all the way through to double-puppeting and single-puppeting, and all that stuff.

So bridging is tough, because it's really useful, but it's always a bit of a compromise; there's always an impedance mismatch between the capabilities you get in one protocol and the capabilities you get in Matrix... So we have people who go from IRC to Slack via Matrix, and from IRC to XMPP. And it works pretty well, but you're always going to lose a bit of the experience along the way. Also, operationally, there's a lot of hops for the data to go through, and all it needs is for the bridges to be running on different servers. You can basically easily end up with 4-5 different hubs between the users, which inevitably starts to rack up in terms of latency and risk of things going wrong.

So it's a thing... At the moment we've got one guy working full-time on them. We're trying to hire somebody else to come and join him. Sometimes they are invaluable, sometimes they're a pain in the ass. Sometimes they really upset people, because they are not as native as a real thing, but... They're also why we called Matrix Matrix, as some kind of structure in which to bridge together the existing silos. Matrix is Latin for uterus, rather unexpectedly...

**Jerod Santo:** Really?

**Matthew Hodgson:** \[01:04:05.16\] It's where something grows, it's also where the word "mother" and "maternal" and "maternity", "matrix" - it's all the same root etymologically... So yeah, we wanted to basically build a substrate on which things would grow, and link together the other things which were out there to bridge the island.

**Adam Stacoviak:** Well, given you came from a world where you were like "Well, we're building a bunch of silos" - now you can actually build silos, but bridge to them. Hey...

**Matthew Hodgson:** Yeah. I mean, whenever anybody comes up with any protocol and very enthusiastically says "Ha-ha! We are creating the one true messaging app!", we said "Oh... Okay, that's cool. Good luck with that, and we'll bridge." \[laughs\]

**Jerod Santo:** "And we'll bridge..."

**Matthew Hodgson:** And we do. If we don't, then somebody in the community is gonna do it... It's certainly one approach to take. Obviously, in an ideal world we would all be natively doing the same thing, but we're not on a crusade to force everybody to use Matrix. We're a lot more pragmatic. I think that XMPP suffered a bit from hoping that everybody would get natively on the network, and everybody would have Jabber IDs on their business cards... And we are much, much, much more pragmatic.

If I wanna find somebody on Matrix, I look them up based on their phone number or their email address, because those are the IDs that people already have in their address books. You can also use the Matrix ID, which is @matthew:matrix.org. Ideally, we wouldn't be relying on those. Similarly, sure, we'd like to see people natively on Matrix, but some of the best communities I'm in are half Slack and half Matrix, and all of normal people sits on Slack and all the geeks sits on Matrix, and eventually hopefully Matrix will get so good that people will naturally come and join us in the wider ocean, rather than being trapped into proprietary Slack land... At least because Matrix hosting is about five times cheaper than Slack; just dropping that in there.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Yeah. Well, that's what Jerod left out when he mentioned our Slack history, is that we're on a free Slack, so we obviously have a lot of limitations in terms of integrations and just different things that we can do, because even history - we lose a lot of history; and if you're trying to foster a community with history (because that's important), you kind of miss out on that if you're on a free Slack.

**Matthew Hodgson:** Yeah.

**Adam Stacoviak:** So at some point we start to -- while we don't expect Slack to give us free, because it does cost money to run, we'd love to find a more affordable way. We just can't afford the affordable even; it's quite expensive.

**Jerod Santo:** Right, because they charge per user, and we invite everybody to freely join our community, so... If we were gonna play $6+ per user per month, we would not be able to invite everybody to come join.

**Matthew Hodgson:** That's crazy expensive, and that basically is just holding your history hostage. From a businessman, capitalist perspective, I appreciate very much the model they have, but from an end user perspective it's the least open and pleasant thing imaginable on the web.

You could just go and use a free Matrix server; you can use the matrix.org one as you're using them today. The disadvantage is that it tends to be a bit overloaded. It's got easily 100,000 concurrent users at any given point, and the Python codebase does not scale as well as it should. We haven't yet migrated over to the Go one, so... That's the disadvantage. Also, it feels a little bit like a public swimming pool; lots of people running around, and sometimes the kids go and wee in the pool.

**Adam Stacoviak:** \[laughs\] Sometimes? Every time.

**Jerod Santo:** That's a good analogy. Just expect it. It's gonna be there.

**Adam Stacoviak:** That's right. Somebody told me "If you ever get a pool, expect them to pee in the pool. It's gonna happen."

**Jerod Santo:** \[laughs\]

**Matthew Hodgson:** You know, the terrible, terrible thing about chlorine - the reason that your eyes go red with chlorine in the pool isn't actually the chlorine; that's because it reacts with urine. \[laughs\]

**Jerod Santo:** No, I didn't know that.

**Adam Stacoviak:** Oh, my gosh...

**Matthew Hodgson:** So the next time you get red eyes after going in the swimming pool, that's what's going on.

**Adam Stacoviak:** That's why I wear goggles on my eyes, or I just keep them closed.

**Jerod Santo:** \[01:07:59.19\] I'm never going swimming again, so I'm not gonna have that experience. \[laughter\]

**Adam Stacoviak:** Well, you mentioned earlier in the call we've got Mozilla who recently made this transition from IRC to what you're doing with Matrix, and very publicly -- you mentioned the French government... What are some other big adoption, big wins that you've gotten under your belt? Where are you at, I suppose, with your happiness with adoption?

**Matthew Hodgson:** We're pretty happy. In terms of growth, it's good. As I said, we're up in the tens of thousands of users, 15-million-odd addressable users; in terms of active users it's hundreds of thousands daily, and I have not checked the monthly ones, but it must be similar to that.

All of those are guesses, because it relies on people phoning home with reports and stats... And when you install your Matrix server, it allows you to opt in or not to do that, and we guess at least half of the people say "Hell no! Why would I tell them how many people are on my server?" So we're running a bit blind, but those are the lower estimates.

In terms of big ones, France is not counted in those stats. They have hundreds of thousands of daily active now. They're not quite up at saturation with their 5,5 million users, but it's growing pretty steadily. Other countries have followed them. Germany has got several Matrix initiatives going now, including the Ministry of Defense, or the Bundeswehr, as they call it.

They unexpectedly announced themselves on Christmas Eve, thanks to I think a freedom of information request from a journalist who heard something about it and asked them to clarify what they were up to, and it turns out that they were in the middle of a trial to deploy Matrix in that context. And also, the Federal Data Protection minister, who's (I guess) the head of GDPR for Germany, has taken a shine to Matrix and has been enthusing about how there should be a pan-European government Matrix network, so that all the governments and public sectors can collaborate together. That would be nice.

Wikipedia has a Matrix server. GNOME and KDE have them also. Red Hat - I'm not sure we're allowed to talk about, but they do phone home stats, so we do know that they are running a big Matrix server, or at least they have have at points!

**Jerod Santo:** Just don't talk about it.

**Adam Stacoviak:** \[laughs\]

**Matthew Hodgson:** Some of the Rust community went to Matrix, rather than Discord... I'm hoping that the rest of the Rust guys will see the light and come back, eventually. So it's honestly a weird mix of open source -- lots of cryptocurrency projects, like Tezos, and Status, Ethereum, obviously Parity (that I already mentioned), open source cryptocurrency types... Also activists and people who really care about privacy and encryption, and then on the flipside governments... And that's kind of the main uptake right now. And we haven't yet shifted into the more mainstream people who are using Slack today, but that is the big challenge that we're tackling really over the course of this year... Trying to get the UX glossy enough in Riot, trying to make sure that features like Communities are there.

In terms of first-time user experience right now there's quite a lot of wtf moments, so to speak, for new users... We just haven't quite polished it as much as we should, or we've let a bit of the protocols shine through into user interface. For instance, right now you can invite users in DMs. If you're used to it, it's really useful. Somebody DMs you, and you think "Aah, you're not talking to the right person!  Let me invite in the right person to direct you to!" Or if you want to invite a bot into your DM, so that it can translate it for you, or something like that. It's actually kind of useful.

But the level of panic that some people have when they're coming over from Slack and discover that the one-to-one that they were having with somebody can actually be magically upgraded, not even into a DM, but into a private chat, and it can even be made a public chat if you wanted to, just because you can, is a classic example of "Just because you can doesn't mean you should."

**Adam Stacoviak:** \[01:11:55.17\] Yeah.

**Matthew Hodgson:** So lots of work, basically, on UX, to make it more mainstream. And we've just hired two more designers to join our existing, very long suffering one; both of them have experience in the professional app design space for communication apps... To try to de-geek Riot and make it more mainstream.

**Adam Stacoviak:** You've mentioned the cadre of people behind Matrix.org foundation, but you hadn't really enlightened us on your team size, and things like that. Can you share a bit more about who's doing -- I can't imagine you're doing all this work, so...

**Matthew Hodgson:** Oh, God no...

**Adam Stacoviak:** ...who else is with you?

**Matthew Hodgson:** ...I don't think you'd want me to. So the core team, when we set up New Vector as the spin-out in 2017 was 11 people. Since then we have scaled up to 41, I think, as of this morning. So we've taken on funding, as well as the revenue I mentioned earlier. We've taken on funding, both seed and from Status, the Ethereum decentralized communication project. They wanted to support us, because they like decentralization and wanted the project to survive.

And then more recently from VCs in London, specifically Notion, Dawn Capital and Firstminute, who -- I think we're very lucky to have these investors, because they get the mission and the idea, as well as see the commercial possibility, in that we could become the Netscape of the Matrix ecosystem... And if Matrix takes off properly... It's a bit of a long shot -- as we said, it's a bit of a slightly hamstrung moonshot, but we're quite close to the moon at this point, and assuming we don't overshoot or crash into it, hopefully we'll have a beautiful landing... And that's allowed us to scale up the team significantly.

For the foundation we don't hire anybody; it's just the directors basically looking after the governance and the IP and the evolution of the protocol... But for people paid to work full-time on Matrix, that's what we do, is New Vector... And then lots of other contributors from other companies, and individual open source contributors. Probably 600-700 into the core project, and easily thousands into the wider projects which people happen to have built on top.

**Adam Stacoviak:** If you can wave a magic wand and a year from now magical things happen, I guess regarding adoption...

**Jerod Santo:** Moon landing...

**Adam Stacoviak:** ...the future, where you're going to - what would happen to make the killer app, the killer use case, whatever it might be? What would be the next big step for Matrix?

**Matthew Hodgson:** By far the biggest thing that we can do right now is to fix the first-time user experience in Riot... And it's tantalizingly close. If we can go and get the UX, so that people will try using it rather than Slack, and think "Oh, this is actually a bit better", then... Ignore all of the open source, all the decentralization, all of that stuff... Just from a pure, pragmatic user perspective, you've gotta have that. That's more than anything else what I'd like to have happen.

Secondarily, we'd need to fix the reputation and abuse challenges. We've made some good work on that. We have the concept of shared blocklists, so that if there are abusive folks, you can choose to ban them from your room or server or community or user, and then kind of pool that information together... A bit like email blacklists, but hopefully a little bit more nuanced. That is improving things a bit, but it needs to be a lot more nuanced if it's gonna solve the kind of grayscale things. If you ban somebody for spamming a room, it's pretty concrete. But if you just happen to want to dial down the NSFW content in a room, that's getting a bit more gray as to what somebody considers safe for work etc. So we need to have that subtlety to support that.

\[01:16:00.20\] And finally, end-to-end encryption has been an epic to make work. We are the only decentralized real-time encrypted system that I know with end-to-end encryption, and it turns out people don't tend to do that. It's really hard to get the edge cases to work, and people are very unforgiving or random messages that don't decrypt, because there was a race between sending the keys, or one of the servers went down in the middle, or there was a netsplit and the server who sent you the message didn't know you were even in the room, so of course it didn't encrypt it for you. From a user perspective, if you don't get the message - that is, you know, the one thing you had to get right.

So we've spent so much time trying to get that right and turn it on by default. We got a lot of flack in the privacy space for not having it on by default, particularly as WhatsApp, and Wire and Signal are obviously all encrypted by default these days... So we aim to get it on for the end of January. It slipped. The best quote I heard is ten days from now is the next mission... But we're still working through that work, so I really hope a year from now that's old history, and everybody is used to everything being end-to-end encrypted.

Other than that, on the commercial side obviously more governments and big players adopting it to the extent that it becomes the default way to do chat in an industry, rather than email or phone calls, or jumping on Slack and paying huge amounts of money, would be a good outcome.

I've already mentioned France and Germany, the U.S. is also using Matrix in production in various public sector environments... Unfortunately we can't really talk about them, but some of them are really, really interesting; places where the decentralization is super-useful. In fact, what we can talk about is the Texas Department of Emergency Management and Public Safety, where they previously were using WhatsApp for coordination in the field, and they're very extensively using Matrix now to coordinate in a disaster scenario, working that domain.

It would be great if open source projects didn't use a proprietary thing like Slack, they'd instead use Matrix... And if governments did it too, then between the geeks that FOSDEM and the public sector folk, or whatever the open source conference equivalent is for the public sector... They actually do have open government conferences, which as pretty interesting, as all the people compare how to build open public infrastructure... Then perhaps the rest of the world would meet in between, and it would just keep growing.

Oh, the other thing I'd wave a magic wand is to migrate to Dendrite and kill off our Python codebase and move to Go, because the scalability nightmare we have on Python... Not Python's fault, but we just built it as -- it doesn't scale horizontally, whereas the Go thing is very horizontally scalable, and is shamelessly inspired by some of our high-volume competition in the proprietary space. That would be great because we waste far too much time debugging Python, when I would just like it to be efficient.

**Jerod Santo:** How big of an undertaking would that be?

**Matthew Hodgson:** Well, for the Go migration?

**Jerod Santo:** Yeah.

**Matthew Hodgson:** It's pretty close. It's really frustrating, actually. We probably got 80%-90% of the way there before we just had to pull people off to focus on the fact that France was going live on Synapse, and we had to do this, this and this, and a whole bunch of other commitments like that... And it's only in the last 2-3 months that we have rehired people who can focus exclusively on it. But frankly, they're on fire.

Ooh, there's an entire thing I haven't mentioned *at all* which they've also been working on. One of the ways we got Dendrite development going again is for peer-to-peer matrix, rather than client server. So as of today - and you heard it here first - we had our first ever live traffic over peer to peer Matrix. What we did was to take the Go codebase, compile it to WebAssembly, run it in a service worker on your browser, and stick it into Riot. So you literally just go and pull the server to run client-side peer-to-peer.

\[01:20:18.08\] We used libp2p from the IPFS Protocol Labs guys as the network transport. You just spin it outright, and it is a real paradigm shift; it's really trippy, in that you don't change a single line of the client code. It's just talking to an invisible Matrix server, and it has a URL and everything, and the service worker intercepts those outbound HTTP requests, and suddenly wormholes it into WebAssembly and gets Dendrite to run locally to service the traffic.

So that's been the slightly unexpected route that we've taken in order to get the Go thing finished, by saying "Hey guys, this is not just a boring version two of Synapse which is gonna run faster. This is a whole different beast. It's a tester for peer-to-peer experimentation." And suddenly, woosh! ...we've made huge progress.

So it's probably only a matter of months until Dendrite is good to go in production... Although migrating over the 40-odd thousand Synapses to a totally new experimental codebase -- it's a bit like Apache versus NGINX is how I think of it. Apache is gonna be around forever; it's not that fast, everybody knows it. It's very mature. It's got lots of random things built on top of it, and meanwhile the cool kids would just go and build on top of NGINX. I see the same thing happening with Synapse and Dendrite.

**Jerod Santo:** Are you able to use TinyGo for that? I would think that the WebAssembly executable thing would be rather large... But maybe with TinyGo it's not.

**Matthew Hodgson:** It is. It is 25 MB of WASM at the moment, which is...

**Jerod Santo:** Yeah, so not usable from a client perspective.

**Matthew Hodgson:** Yeah. I'm not a Go expert by any means myself. I haven't looked at TinyGo. But if it compiles down to WASM, why not? It could be interesting. One of the biggest challenges we had is storage, because Dendrite was written specifically for Postgres originally, and used lots and lots of Postgres-specific SQL features, like sequences and returning keywords and stuff... And you're not gonna be running Postgres in the browser, client-side. That would just be -- it's silly enough to do Dendrite without Postgres...

**Jerod Santo:** \[laughs\]

**Matthew Hodgson:** So what I ended up doing was to write a SQLite driver in WASM that actually calls over the JavaScript gap into the browser to go and use SQLite, ironically, in WASM... Running in SQL.js. First of all, that turned out to be relatively easy, to go and write a Go driver for SQLite that would go and terminate in the browser... But the hard thing was to then rewrite all of Dendrite to not use assumptions that it was running on Postgres. The guys finished that in the last couple of weeks, and cleared it all together using P2P on the JavaScript side... So it ends up being an unholy mishmash of Go and JavaScript... And I was shocked and stunned, but it does actually work.

Right now there is a testnet with two people on it, talking to one another over peer-to-peer Matrix, pinching themselves to believe that it actually exists... But that is gonna just change everything when it becomes mainstream, because you no longer need a server. You don't need to pick your Matrix.org, you don't need necessarily to pay for hosting, although obviously we hope that people will still want a permanent home somewhere for their data... And it would in some ways make it more valuable. It's a useful thing to have.

We'll watch this space to see how that evolves. Lots of unsolved problems, particularly in routing and scalability and discovery, and all that sort of stuff, but... Good problems to have.

**Jerod Santo:** \[01:24:01.11\] Well, I'm glad you remembered that part, because that's super-interesting, and definitely exciting. So Matthew, we're hitting up against our time... Thanks so much for joining us today. All the hard work you've been putting in for many years on this slightly hamstrung, but much more pure moonshot that you're on. We hope you have a good landing on the moon, everybody's safe and sound, and you hit your goals. It looks like you're well on your way.

Matrix is very interesting, very cool. All the links to all the things related to what we talked about, of course, are in your notes, listeners, so check those out. What's the very best place for somebody who wants to get involved, from a developer perspective? Maybe they wanna check out this P2P stuff... Is there a waypoint for community members/collaborators, or is it all inside of Matrix's guardians of the galaxy thing? What's your guardian ship? Is there collaboration points for people?

**Matthew Hodgson:** It's super-open collaboration. I mean, the guardians are a safety net. They're not gatekeepers, they're just the safety nets, so that if somebody did go rogue, that they can step in and say "Oi, we're not gonna accept these evolutions to the protocol."

So if you wanna get involved, come on to \#matrix-dev:matrix.org... That's one of the main developer hangouts. Or even just \#matrix:matrix.org, the first-ever room on Matrix. It's a little eclectic, as all sort of randoms find their way into Matrix for the first time, but it's pretty cool.

**Jerod Santo:** Last question, how did you get the Matrix.org domain? Because that is an awesome domain.

**Matthew Hodgson:** Yeah. Honestly, we were thinking of names for Matrix... It started off being called Synapse as a codename, but we ended up keeping that for the server... And we're just trying to think of something that really described what we were doing. I thought of Matrix, and I thought "Oh, I can't possibly call it that, because of the film. It'd just be silly." And then realized it's been already at that point 16 years since the film, which is -- now it's been 21 years or something, if you really wanna feel old... And realized that actually perhaps it might be alright. "Is the domain available?" I went onto it and it was parked on Sedo or something. We paid 3k for it, from memory... Which seems ludicrously good, honestly.

**Jerod Santo:** Not bad. I would expect it to be like 50k.

**Matthew Hodgson:** Yeah, I was guessing 50k-100k, but for whatever reason - possibly because it used to be unfortunately a hardcore porn website at some point... So I think its reputation--

**Jerod Santo:** Oh...

**Adam Stacoviak:** Old back-links to get you...

**Matthew Hodgson:** Yeah, honestly--

**Adam Stacoviak:** Get some interesting 404's...

**Matthew Hodgson:** The SEOs, and I saw all the referrers coming in... They're quite special.

**Adam Stacoviak:** Exactly.

**Jerod Santo:** \[laughs\]

**Matthew Hodgson:** But I don't know if that really ever factored in, or we just got super-lucky... So I'm happy. It's a good name.

**Adam Stacoviak:** Yeah. Well, you're about to get another spike, because Matrix 4 is in production.

**Jerod Santo:** That's right.

**Matthew Hodgson:** If you incognito search for the word "matrix" on Google right now, I think last time I checked -- not that I do this every night before going to bed, because that would be sad... Last time I checked, a few months ago, we were up at number 11, so almost on the front page... And to be competing against fundamentals of mathematics and Keanu Reeves is no mean feat... So we thought we were almost there. But obviously, Matrix 4 is just gonna knock us completely off the search rankings forever...

**Jerod Santo:** \[01:27:21.23\] Yes, it will.

3 But if you search for "matrix chat" or "matrix communications" or "decentralized communication", we'll come up. At least Riot's got a really memorable and unique name, which isn't ever gonna get confused with anybody else, so... That helps a lot, too.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Well, if the new movie is as bad as the last one, maybe it'll just go by the wayside and you'll still--

**Matthew Hodgson:** You reckon straight to video? It's possible.

**Jerod Santo:** \[laughs\] I mean, I hope not. I hope it's good. But I've gotta have my doubts.

**Matthew Hodgson:** Yeah. I don't know, it might work out... But I was hoping against hope that they might pull it back together in the third one, but it really wasn't to be, unfortunately...

**Jerod Santo:** No.

**Adam Stacoviak:** It just kept going down.

**Matthew Hodgson:** Yup. But let's see. They might do it.

**Adam Stacoviak:** Hopefully, four is on the way up, and John Wick/Keanu Reeves and all this fanfare of the last several years - the last decade, really - will have brought back some new desire for Matrix movies... The Matrix movies.

**Matthew Hodgson:** I hope so, for their sake... But on the flipside, I hope we don't get Warner Brothers phoning up, saying "How dare you?!"

**Jerod Santo:** Right.

**Matthew Hodgson:** It's a dictionary word, so hopefully it'll be alright. We haven't got our VR stuff properly off the ground yet, so... Hopefully nobody will take offense. And if Warner Brothers are listening to this or googling it, then please just ignore this whole piece of the conversation.

**Adam Stacoviak:** We do have transcripts, so it might be possible to find it via text search... \[laughter\]

**Matthew Hodgson:** Indeed. It's fine...

**Jerod Santo:** It won't be on page two though. It's not gonna hit page two.

**Adam Stacoviak:** Well, Matthew, thank you so much for I guess really just your excitement for this. It's so cool to see someone like you be so knowledgeable about these protocols to lead this, and be a guardian of it, so... Thank you for your time today.

**Matthew Hodgson:** Yeah, I'm easily excited, and luckily not doing much in the way of actually building it these days. Thank you so much for having me on and for enduring my long-winded and off-topic answers. It's been a pleasure, really fun. Thank you!

**Adam Stacoviak:** Same here.

**Break:** \[01:29:38.04\]

**Adam Stacoviak:** I almost asked this during the show, but this might be good for a break, or a teaser, or a treat at the end... If one wanted to move away from Slack at some point, and they were on the free plan, could they subscribe to the paying plan for one month, get their history and move away, and stack all that history into Matrix?

**Matthew Hodgson:** Good question, and I'm glad you didn't ask it, because the answer is that we don't yet bridge history. We should do, and I think there are some importers... Actually - you know, you're right; I think somebody has written an importer now that will pull in your history, and that might work as a way to get at your history... But I need to double-check it. The bridge itself doesn't do it; you would have to do a kind of GDPR export and then rehydrate it in Matrix land.

**Jerod Santo:** Right.

**Matthew Hodgson:** But it's surprisingly hard at the moment in Matrix to retrospectively do history, because of the DAG thing. It would be like rewriting Git history. You'd have to rebase the whole thing in order to rewrite time... And theoretically, as practically, I'm not sure many people do.

**Adam Stacoviak:** I guess that's the downside of it being Git, right? That difficulty. If it wasn't for that, then it might be a little easier.

**Matthew Hodgson:** Yeah... But we can work around it. One think you can do is to actually start going backwards in time. So rather than progressing the DAG forwards in time, you can create a branch and have it chronologically go backwards, so you can kind of splice it in that way. It's a bit of a headscrew, but...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It could be even be like -- I mean, since it's immutable, it's not gonna go anywhere. They basically go back and edit their stuff. Maybe it's a way to a nested archive, or something like that... Like an embedded archive into...

**Matthew Hodgson:** Oh, yeah.

**Adam Stacoviak:** Something like that, where it's like it's done. We stamped it, it's done, but we wanna bring it with us.

**Matthew Hodgson:** That's interesting.

**Jerod Santo:** Yeah, but... I mean, your bridging move is awesome for adoption, but at a certain point what you're gonna have is a bunch of people wanting to jump ship, and better than bridging is escaping.

**Matthew Hodgson:** Yup.

**Jerod Santo:** So you can provide an escape hatch with history, and make that as painless as humanly possible, you could get a lot more adoption off of people that are like "You know what - I'm done with Slack." Boom.
