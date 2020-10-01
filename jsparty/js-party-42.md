**Feross Aboukhadijeh:** Hello, and welcome to another episode of JS Party. I'm Feross Aboukhadijeh, one of the hosts here at JS Party, and this is episode 42 of the show. It's the answer to the ultimate question of life, the Universe, and everything. We're actually discussing the decentralized web, also known as the peer-to-peer web, and we're also gonna be talking about the Dat Project and the Beaker Browser.

We're here with Mathias Buus and Paul Frazee of the Beaker Project. I actually think Mathias is joining us from the jungle. Do you wanna say hi, Mathias?

**Mathias Buus:** Hello, from the jungle.

**Feross Aboukhadijeh:** \[laughs\] And Paul, do you wanna say hi?

**Paul Frazee:** Hello, from regular Austin, Texas.

**Feross Aboukhadijeh:** Nice. Before we go further, I'm curious, why are you in the jungle, Mathias?

**Mathias Buus:** I'm spending some time in South America, and there's a huge jungle down there... So I was like "Why not?"

**Feross Aboukhadijeh:** And you can have pretty good connectivity from there?

**Mathias Buus:** Yeah. You know, if you go deep in, you don't; but if you find a cafe or... This place we're staying has decent Wi-Fi, so it's nice. Then you can go walk like five minutes and get eaten by a jaguar, so...

**Feross Aboukhadijeh:** Okay... If we lose you, we're just gonna assume the worst; we're gonna assume it's a jaguar and call the authorities.

**Mathias Buus:** \[laugh\] Take over all the modules. Sounds good.

**Feross Aboukhadijeh:** Nice. How about we get started with -- just sort of tell me a little bit, high-level, what is Beaker? Maybe Paul, you can start with that.

**Paul Frazee:** I'd just say Beaker is a browser for people who love the web and they miss the part of the web that was like in the '90s, when the web was really exciting and full of potential. We had this time when we were all saying "Everybody's gonna have their own website", and we started to kind of get that with Geocities... But then over time we started to go into these more structured experienced with things like Facebook, and it all became a lot more proprietary.

We're trying to wind the clock back, and get back to that original idea of the web, where everybody is not just consuming or using somebody else's platform, but you're actually building things. And in fact, the idea is that everybody is able to build a website, and to do that, we're using peer-to-peer tech, so that you can create websites and publish them from the browser itself. You can just click a button, just like that, you've got a website; you can share the URL with somebody, and there you have it, your personal website. And then from there, everything else.

**Feross Aboukhadijeh:** \[00:04:11.23\] So what makes these websites different than a website that I could put on AWS, or maybe even like a website that I could set up on one of those free website hosting platforms?

**Paul Frazee:** At the core, we're using the technology that Mathias has been building for some time, which is the Dat protocol. Mathias is gonna tell all about that. Sometimes we say it's like a BitTorrent 2.0. It's a way to publish files and websites right off your computer, and then when other people visit your site, they can actually help give bandwidth to keep the website online. So the whole network is like a distributed server that replaces one specific host, and that means that you can rehost these websites from any device, and the URL stays exactly the same.

**Feross Aboukhadijeh:** Okay, so it sounds a little bit like BitTorrent.

**Paul Frazee:** Mm-hm.

**Feross Aboukhadijeh:** What are the reasons why we would wanna do this? I know you said a little bit about like getting back to the way the web was in the early days, the '90s... Those were the good days; those were the days I first got on the web. I remember the web did seem different back then, somehow; different in some hard to describe way... Maybe it felt less corporate, maybe more diverse... There were just a lot of different, weird sites out there, and now it just feels like dominated by these big players... But what's a reason why a normal person should care about this? Because it seems like what we have today is sort of working.

Facebook is huge for a reason, because a lot of people like it. These big sites are all big because people are signing up in droves, because they're getting a lot of value from them... So why would I want to have my own website hosted in this decentralized way? Why decentralize the web?

**Paul Frazee:** You know, the web being weird is a good thing; it makes it more exciting, more fun, and when you open up the web to being (I think) what it was supposed to be, which is like these comments that everybody can contribute to, and not just like pictures and stories and videos and things like that, but the actual code that makes up these applications we use, you're gonna get something that I think is more exciting, and also fits people's needs a little bit better... Because when you're using Facebook, you're giving up control over all your data, you're giving up control over to the community and the moderation policies; you're locked into whatever Facebook thinks Facebook has to be.

If you decentralize the web and move it into kind of a peer-to-peer design, suddenly all the application logic is getting moved into the client, and you can just write these applications however you like, and you can work with other people and share the changes you make, and just kind of like let the community drive how all of these social applications work... And I think that's really important right now. I mean, we're messing around with how we're supposed to deal with social media now, with Twitter and Facebook, and all these controversies about misinformation, or harassment, and things like that, and I just don't think that the way that we're doing things now is really responding to the needs that people have... So let's just take all that control over the applications and start pushing it right back into the users' hands, so that they could be more fun and more exciting and more responsive to everybody, instead of being this one-size-fits-all that sometimes doesn't work out that great.

**Mathias Buus:** Yeah, I actually would also like to make the point - what I like about Paul's wording there is it's actually a very positive vision of trying to go back and have users make their own sites, and get their weirdness back again, if you can remember those times... Not everybody is as old as we are, I guess.

\[00:08:20.07\] This is a point I try to make a lot - the web is centralized today, but it's actually extremely centralized; it's centralized in a very few legal jurisdictions and very few countries, and it keeps creating problems for people who don't live there also. So there's also just like these big, legal, political arguments for why we wanna decentralize better.

This was actually shown pretty recently with some of the GDPR stuff in Europe, where it turns out that all the companies were U.S. and they had to deal with European laws, for better or worse... Those kinds of things also drive me a lot, and I think that's why we need decentralization.

**Paul Frazee:** Yeah, I mean, there's the political element of it, which is huge, but there's also just this really basic "Let's bring the fun back into it", which I really feel like has been drained out, since the early days... I wanna get back to that.

**Mathias Buus:** Yeah, I love the fun argument, because it's like a positive argument. It's also why we're doing it -- not why we're doing it, but that's at least what drives me every day, the funness of it, all the crazy sites people put up, all the usual sites, and the power you feel when you put something up and the ease of use compared to using other things.

**Feross Aboukhadijeh:** Yeah, that's really cool. I don't like when I build something on someone else's platform, usually. I feel like I'm at their mercy, and that they could pull the rug out from under me at any given time. I built an app one time on the YouTube API, and one day they contacted me and said the way I'm using it isn't allowed. That kind of thing, where you're just like playing in someone else's sandbox and they can tell you to leave at any time - this is not cool.

I'm kind of curious, so how did you guys get started on this, working in this space? How did you get interested in it?

**Paul Frazee:** It's two different stories that converged halfway through. Mathias, maybe start with your story.

**Mathias Buus:** Yeah, I can go on about this for a long time, but for me, my personal motivation was first of all just like a technical interest in how stuff like BitTorrent worked, and playing around with networks. I remember when I went to university, by far the class i had that blew my mind the most was the first time a professor showed that you can connect two computers over a network TCP connection. I was like, "Whoa, what is this? This is crazy!" Basically, from there on I was driven on by decentralized tech and how to build it from a technical point of view.

I remember playing around a lot with BitTorrent - I know, Feross, you also have - and I was really amazed how from a technical level actually really simple a lot of it was, the BitTorrent, and how easy it was to get started with implementing, and how rewarding it was... You make something at home, a little dingy program, and now all of a sudden you connect with the world, and all of a sudden you can get all this content... It feels so empowering, building these decentralized things.

So that was basically my first motivation. Then, once you get past the tech part of it, you start to think of "How can we actually use this for things that are not just about the tech, but about the things we build instead?" I guess that's where we start thinking more about community, and stuff like that, and also how we could back then improve BitTorrent, which is kind of how a lot of the Dat stuff started happening, and how we ended up working together, I guess, Paul... That's like the long start and short ending story, I guess.

**Paul Frazee:** \[00:11:59.05\] Right, right. Yeah, so Mathias was working on that, while I was in the Secure Scuttlebut community... And then at one point I decided -- well, Electron got to the point where I was like, you know what, I think it's actually possible to make a browser off of Electron. So once I decided that was worth giving a shot, I stepped back and I was like, okay, if I'm gonna make a browser that's peer-to-peer, then I need a good tech behind it, and that was really starting to mature right at the same time, so I was like -- I dropped it in as a new protocol into the browser, and it worked right away... I was like "Okay, this is fantastic."

So I kept on working on Beaker more and more, and then eventually Mathias joined in officially, and the rest is history.

**Feross Aboukhadijeh:** Right, and you also have a third teammate, Tara, which she couldn't have joined us today...

**Paul Frazee:** Yeah, she's in Barcelona right now, giving a talk... So yeah, she couldn't join us.

**Feross Aboukhadijeh:** Yeah... So I'll just concur with what Mathias said - if people are interested in learning about peer-to-peer protocols, starting with BitTorrent is a great idea. It's actually surprisingly simple and possible to figure out how it all works, and it's quite elegant in its simplicity and what you can do with it. It totally makes sense that you'd need something better though for what you're doing with Beaker; BitTorrent just won't cut it.

So I guess I'm curious to learn a little bit more about what are people trying to do in this area, in the decentralized web... What are the different approaches that different groups of people are taking to achieve these goals that you've talked about, of decentralizing the web, and what are the pros and the cons and the different approaches that you guys are seeing out there.

**Mathias Buus:** Actually, just one quick note I wanna add to your comment that's kinda releated for Frazzee's sake. I think BitTorrent actually is a good example of how to get started, and also, that's the main decentralized thing people usually know, and there's actually a bunch of attempts already to make a decentralized web on BitTorrent. It's not that BitTorrent is bad or has many flaws, it's just that some of it is a little bit dated, but it's actually a really good protocol still... But for something like the web, BitTorrent just has -- it's missing some technical features that we like from the web, like mutability, and stuff like that. By mutability I mean that you can go to a website and it has a link, but you can get the latest website every time you refresh... And stuff like that.

So you could build a decent decentralized web on BitTorrent, but it would just be very static and very boring, because BitTorrent by itself is very static. So that's also where some of the motivations for the protocols I'm working on came from - basically, how can we make protocols like that, that are for the web?

**Paul Frazee:** Yeah, actually, BitTorrent Inc., before they got bought out, actually made their own browser, called Maelstrom, that had BitTorrent as a first-class protocol.

**Mathias Buus:** That's true.

**Paul Frazee:** But I think they had a different concept of it. I tried it out, and whenever you went to a torrent, it actually sort of acted like a typical torrent client, as opposed to behaving like a website. I don't know if they were quite tried to use it as a drop-in replacement to HTTP, which is what we started doing with Dat and that was one of the differences...

But back to Feross' original question, the good news is that there's a lot of projects out there right now that are attacking this problem. So for anybody that's really into decentralizing the web, you should be happy to hear that. A lot of it has to do with blockchains. Beaker and Dat - we don't use any blockchains; we're really actually just seeing how far we can get with Dat... And there's some technical similarities, because Dat has this append-only log behind every Dat archive, which retains all the history and it uses signatures on that log... But unlike almost every other blockchain, there's no decentralized consensus, which is the major feature of a lot of the cryptocurrencies.

\[00:16:23.04\] But the Ethereum project has been really explicit about how they wanted to build a next iteration of the web with their tech; they even started, I believe, the Web 3 Foundation.

You know, I guess almost all of the blockchain-based solutions have payments at the core of what they're trying to add to the web, which is cool... Payments are important; it's important that people can make money off of their work, and it's all sustainable... But the main difference, I feel like, between what we're doing and what the cryptocurrency-based projects are doing is that by not using the blockchain, by not having decentralized consensus, we actually reduced costs even more. You can do this all with hardware that already exists, you don't have to pay any money to transact on this network, and you end up getting a lot of the same kind of benefits, where you're detached from any proprietary cloud, which is really what's at the heart of all this.

So that would be probably the most significant difference between a lot of these projects - is there a cryptocurrency involved or not?

**Feross Aboukhadijeh:** Yeah, yeah... Sorry, I didn't mean to cut you off. Go ahead.

**Paul Frazee:** I was just gonna say, if there's no cryptocurrency, then usually I just call it a peer-to-peer project... But if there's a cryptocurrency, now it's a blockchain project.

**Feross Aboukhadijeh:** Ha-ha, yeah... I've noticed actually there seems to be this -- I don't wanna call it a rift, but it's definitely like some kind of a split in the peer-to-peer community. It seems to me basically there's people who want to use peer-to-peer technologies in a capitalist way, I guess, and those are the blockchain people, and then there's sort of like the "How about we just rely on kindness and people's goodwill in sharing?" because that seemed to work well enough in BitTorrent... So there's these two sides: let's sort of measure everything and put money in everything and incentivize things, which has its good arguments, but then there's like "No, we can actually get pretty damn far by just relying on goodwill and on exchange, and people just wanting to give things away."

It almost reminds me of how people say that Star Wars is like the capitalist story, and then Star Trek is like the socialist version of the same story, or something like that.

I don't know what you think about that breakdown...

**Paul Frazee:** Well, sticking with that metaphor - Star Trek capitalism feels out of place, because they have the ability to just materialize things out of the air, so why would they be capitalist in that society? I think the same kind of metaphor sticks here.

We all have our own computers, they're all able to transact with each other, we all have excess bandwidth and disc space to share, so why not go at it from an altruistic viewpoint, and keep this system kind of as low friction as possible, as opposed to having to require payments to be in everything, which is not always convenient for people, and you've gotta convince people to make that payment in the first place. I don't think it's a very good user experience.

**Mathias Buus:** Yeah, I also think there's like a big case to be made by -- you know, one of the things that the decentralized web does really well is make it easy for people to produce content and put content online, and the incentive to put your own content online is kind of there already, because it's your content, you want people to share it. That's why we use centralized services today without getting paid for it, because all wanna share our thoughts and tweets...

\[00:20:11.05\] So that's what I'm driven by - just allowing people to easily publish content. And then, sure, we can talk about incentive structures and stuff like that; that's an important discussion, but I don't think that's what drives the decentralized web. I think it's more about publishing.

**Paul Frazee:** I'm all about getting payments into the network, so that people that make content can make money. I'm completely on board with that. And when a blockchain gets to the level of maturity that I feel like it's worth using, I'm all about it, but I don't think that the infrastructure itself has to be driven by payments. I think that might be a step in the wrong direction.

**Mathias Buus:** Yeah, it's a feature modern protocol.

**Break:** \[00:20:58.20\]

**Feross Aboukhadijeh:** So I'm wondering if you guys could go a little bit into your product philosophy... As you're building Beaker, what is the approach you're taking? How are you deciding what features to include in the browser?

**Paul Frazee:** You know, a lot of what we do right now has mostly to do with "Let's find out how much we can get out of the Dat protocol." So it's a lot of features structured around that. There's a couple of things we've done that are outside of that, that are just things we like. I added a markdown rendering at one point, because I was just like "Everybody likes markdown, and it's crazy that browsers don't render it already, so let's get that in there." Actually, that kind of is the guiding principle - what would make creators happiest? That's sort of what we stick to.

\[00:24:09.19\] With Dat, what that ends up meaning first of all is the kind of two biggest things you get out of that is the ability to create a website by pressing a button; it amends a public key, and that becomes your new domain, and now you have a website you can share. The kind of secondary facet of that is that you can go to a Dat website and copy it, which we sometimes call forking the website... Because it's almost the exact same thing - you create a new public key, you take all the files off that website you wanna fork, you duplicated them over to your new website, and boom, there you go, you now have a version of the website that you control. So it's a forkable web now, which is pretty cool...

Then after that, it's a lot of web APIs, so that you can read and write files on these Dat sites, and also watch the files for changes, because it's a real-time, mutable networks. That ends up becoming the basis of a new application stack for building web applications that don't require any kind of server, and hopefully don't require any dev ops. You can just publish it, and it goes out and uses people's own computers to run.

**Feross Aboukhadijeh:** This is fascinating to me, because it sounds almost like what some people are pitching when they talk about serverless. It's like, "Just write your client-side web application, put all the logic into the client, and don't worry about the servers. We'll magically take care of that for you", but the truth is there's actually servers there, that are just someone else's servers, that someone else is running and managing, and you're paying for it... But this is almost like a similar or better developer experience, it sounds like, because you're building the whole app on the client side, and then there just is no server.

**Paul Frazee:** Right. It's super serverless.

**Feross Aboukhadijeh:** All the code is running in the user's browser.

**Paul Frazee:** Right.

**Mathias Buus:** Actually, one thing I really like about the approach also is that it's actually more welcoming for people who are not that technical to get into it, because it actually just follows the flow you kind of expect - you're making a website, the website is just an HTML page, you can probably figure out how to write something there if you google a little bit... To publish that, you just click on the create sign in Beaker and you get the link out and that's it. Then you just have to share that link, and people clicking on that link will see the same website, and if you make updates, they'll see the websites... So you don't really need to know how it works, it just kind of works that way... Versus any other kind of publishing where you need to know about servers, or accounts, or locking in, or stuff like IPs, and all this kind of stuff.

So in that way, it's super user-friendly from a non-technical point of view, which I find really interesting, because like walked about before, we tend to talk about peer-to-peer from a technical point if view way too much.

**Mathias Buus:** Yeah, I mean... It's like, "How do you make a website right now?" Well, step one, become a proficient system administrator... Spinning up a Linux box is crazy. So there's definitely a connection to serverless in terms of like getting away from dev ops entirely... But with the current serverless movement, it's really about abstracting away the server, which by the way, is cool (I definitely think it's cool), but this is like actually serverless, just completely getting rid of it.

**Feross Aboukhadijeh:** I mean, of course, there's another way to get rid of the server too, which is just use someone else's cloud service to host your HTML, but then you have all the problems of them controlling your digital life, basically.

**Mathias Buus:** Yeah, but also just from a user point of view, using any kind of thing in the cloud - it's a very technical thing; signing up to hosting sites is very technical. People who are not familiar with publishing on the web wouldn't know how to do that.

I think it's really interesting with this approach where everything is just in your app, and the app being your browser - it opens up the web in terms of publishing for a whole new audience that was only used to browsing before. So it's very decentralized, actually, in that way.

**Paul Frazee:** \[00:28:09.23\] Yeah, I was talking to one of the really good friends of the project, Peter Wang, about this, and he was saying "Is it still in the cloud?" and I was like "Yeah, but it's the non-proprietary cloud." The cloud is about commoditizing hardware, and that's still part of what we're doing here, but it's almost like making the web kind of a part of that commoditization of hardware.

**Feross Aboukhadijeh:** It's almost like -- if we wanted to use as many buzzwords as possible, it's like you're doing IoT, because you're dealing with all these devices that are out there and you're combining that with the cloud, right?

**Paul Frazee:** Yeah, can we get some AI in there? \[laughter\]

**Feross Aboukhadijeh:** Actually, this raises the question though - can my laptop or my phone really serve a website to all the people that might come to it? Because I make pretty cool sites, sometimes they go viral... What if a bunch of people come to my site and it's just on my laptop?

**Paul Frazee:** I mean, the answer is "Super-no!" Like, now way. A cell phone could not become a traditional concept of a server, and that's actually why peer-to-peer is so important. If we didn't have the bandwidth sharing, then you could have a video go viral and all of a sudden you're hitting the cap on your home upload allocation like in no time flat or just swamping your home network. That'd be crazy.

So with the peer-to-peer system, you not only have the network itself handling horizontal scaling, but you can also tap into traditional cloud services, or a home server or whatever, that can transparently in the background keep things online, but has absolutely no bearing on binding the site to that particular device.

**Mathias Buus:** It's kind of like how Java used to be run everywhere; this is like host everywhere. We don't really care who hosts this; the protocol takes care of the security parts, and that's the only interesting technical part of it, I guess... But you can just host it from anywhere - the cloud, your phone... The more, the merrier, the better it works. It's like a really fun metric also, in general. But it doesn't have to be super-decentralized; you could still run it in the cloud if you wanted to. It doesn't matter.

**Feross Aboukhadijeh:** Do you wanna say something, Paul?

**Paul Frazee:** I was just gonna say - you can't get around the fact that mobile phones are basically still thin devices, but you still can move... You know, effectively, what your stuff does is it moves control over the signing keys into these devices, so technically, you could even have an iteration of this tech where none of the storage and none of the hosting happens on the mobile device; you just keep the keys down there and have it acting almost like a really light cache, and still having the resources be put on a server somewhere, but you still get the exact same benefit.

**Feross Aboukhadijeh:** So have you tested how well this scales? If I did make a Beaker site and it was just hosted on my laptop, on my Wi-Fi that I have here, and then it did actually go viral... I know the protocol will make everybody who's downloading the site from me become hosters, but how well does that actually work in practice? Because usually, when you're making a centralized site, there's actually quite a bit of work involved in architecting it so that it can scale to all those users. Is there anything that someone as a creator would have to do differently to make their site really scale? Or is it really as easy as just "Don't worry about it. Just put it on Beaker and share the URL and it'll just work."

**Mathias Buus:** Well, I wouldn't say that we're there yet, in terms of like having it be that easy... You know, from a technical point of view it is; the protocol should be able to handle that. Like any other early product, we have quirks here and there, we're improving it... But if you know what you're doing, you can definitely get it to scale.

\[00:31:52.13\] I've talked to people that have done that, getting it scaled into like a big scale kind of situation... It seems to work pretty well. We've definitely had some popular sites that also have stopped working at some point, and started working again because we fixed some bugs... So you know, it's getting better every day.

My point is that at the end of the day it's something we as the protocol developers, every time we make an improvement, everybody in the network wins... So at the end of the day, you shouldn't need to care. That's the mission also, and that gets better and better over time. It scales better and better, but there's nothing stopping us from making this work really well in the future, as in like we have a Facebook scale. I would say that there's nothing stopping that in the future, but we're not there yet.

**Paul Frazee:** That's right. A lot of the work that you're doing, Mathias, has a lot to do with optimizations and the internal data structures, which is related to scaling, without a doubt... And Feross, you ran into this directly whenever you decided to put Wikipedia into a Dat; after a while we started to hit scaling limits on the number of files that can be inside of a Dat, and Mathias has been working specifically on optimizing that, getting in some trie structures, and stuff like that. So there's optimization that has to happen on the network in terms of getting people connected, and reliably finding each other, and then there's optimizations within the data structures itself, and making look-ups really fast, and making sure that it doesn't use a lot of memory to create a Dat site... But there's no indication right now that we're gonna start hitting limits any time soon.

**Feross Aboukhadijeh:** Nice. So I'm wondering now if you could just explain like as a creator what sort of happens when I'm making a site, what's actually going on...

**Paul Frazee:** Feross, did we lose you...?

**Feross Aboukhadijeh:** Oh, sorry, I was on mute... \[laughter\]

**Paul Frazee:** It's all good.

**Feross Aboukhadijeh:** I'm still a newb, you can tell I'm not a seasoned host. So yeah, I was just wondering what happens when I make the website in Beaker, what's actually going on, and then when a user visits my site, how are they actually getting it? Could you walk me through it?

**Mathias Buus:** I can walk you through the first part, and then maybe Paul can take over the last part. Basically, when you create a website, the first thing Beaker does -- you click on the Create Website button, and it creates a new Dat, and Dat is basically just a shared folder on your disk, that you can put files in, that Dat will watch.

The way that works is that it creates a Dat link... It's just like this 64-character link that's all hex; basically, protects public key. The secret key is just signing a Merkle tree (I've gotta say Merkle tree now) that's being generated off the data that you put in, from a technical point of view.

We can do a whole podcast of that also, but it's basically just a Dat that's verifying the data, but from the user's point of view it's just putting data into a folder. The cool thing is that if you're online -- this works even if you're offline. If you're online, or when you're online, Beaker will start announcing on what we call Discovery Network, which is a couple of techniques to get this out into the world that you have this Dat, and all the people that have that same key, then they can put it into Beaker, you'll connect through the network and verify the content, and basically they'll start loading your index HTML page as any other web server, and they'll start seeing the content.

**Paul Frazee:** Yeah, so from an end user's perspective, there's a really big "Everything is a file" kind of vibe here; maybe not in the way that UNIX talks about it, because we're not mapping any kind of device drivers or anything to the file (at least not yet), but the interface of Dat is just a collection of files, and that's the website. And websites have always been files, so it maps pretty nicely.

Then all hidden away are these signed -- basically, this append-only log, which is addressed by the Merkle tree, and it's signed by the key.

**Mathias Buus:** \[00:36:09.08\] I just wanna add here also, because it's something that I often get asked about... So this link that your Beaker site has, this gnarly-looking hex string that nobody can remember - that's not very nice if you're actually publishing, Feross, your website... You don't wanna have just like a 64-character string, because nobody's gonna visit your site... So we actually support naming these through DNS; we can just make a DNS record that has an alias text record to this link... So people can put in Feross.com, or .org, and Beaker will check if there's a DNS record for that link, and then it will resolve it over Dat... But you can still have these normal-looking addresses on the web, which I think is super-important for any kind of person to use this.

**Paul Frazee:** Yeah. I'd like to say that we use Dat as a drop-in replacement to HTTP; in a lot of ways, it works exactly the same. The URLs look really similar. The most fundamental difference is that just rather than using an IP address, we're using the public key. As a result, you get one extra step in the whole downloading of a website, which is whenever you go to a public key, you're gonna go to a DNS address, and then that DNS address gets resolved to the public key, and then the public key goes into the discovery network to find people that are hosting the site. That's the one extra step that the peer-to-peer network brings in.

**Feross Aboukhadijeh:** Yeah, that makes sense. So is there a way to get rid of the DNS step? Because DNS is -- we're back to servers again, right? Is that something that you think is important to get rid of, I guess?

**Paul Frazee:** Not really, actually.

**Feross Aboukhadijeh:** \[laughs\] Okay.

**Paul Frazee:** It would be one thing if we had a really good solution to replacing DNS, and some people feel like they do have a good one, with blockchains, and stuff... And we toyed around a lot with a web of trust-based DNS, but the reality is that these domain names - you expect them to be global and map directly to one entry. That means you really need to have a global registry that has global consensus, which of course, it makes sense to use a blockchain for that, at least on some level... But I'm not yet convinced that any blockchain is actually a major improvement over the existing DNS system. DNS has all these organizations flowing from ICANN, that are designed to maintain the value that DNS provides... So I just don't think we have a really good DNS replacement yet, so let's not bother with it.

And I would point out also, these public keys are a really good fallback from the DNS system. It'd be one thing if the DNS entries couldn't -- let's say a DNS entry goes away tomorrow, for a site that you love; you can record the mapping to the public key and fall back to that known mapping. In fact, what I suspect will end up happening is a web of trust that doesn't do DNS, but actually gets more into PKI, starts getting into certifying that the name mapping to a public key is correct... And then once that kind of thing exists, you could basically query a bunch of people who have said "This is the mapping, that's the mapping that I saw." And you could ask them, "Okay, the DNS entry went away. I don't know why, and it doesn't matter why, I just know that it did. What did you have for that address?" and then they could tell you "Oh, it was this public key." So it's possible to create better resilience in the network on this system.

**Feross Aboukhadijeh:** \[00:39:46.02\] It also sounds like maybe the browser could expose a way for people to just get that public key... I'm gonna use a metaphor that the people listening to this podcast probably would understand - when you're on GitHub, you can look at a file, but then if you just link somebody to that file, if the file changes or is renamed or moved to a different folder or something, then the link will change, right? But there's a way where you can copy the permalink to the file at a specific commit, so that it doesn't change. If there was a way to do that in the browser, then I wouldn't need to worry that the DNS entry would change or go away and break the link... Is that right?

**Paul Frazee:** Yeah. I mean, we've been talking about that as -- I think the term we've been using is "strong links." That's something Mathias has been working on. So Dat is versioned; whenever you make a change, you can actually go back in time and look at old versions of a website... So that is the point where you might start to bring in this kind of no-DNS form, where you get the public key, and then you have a version number, and then you have a hash to verify specifically that 100% yes, this is the right version... And then you would have exactly what you're talking about - a really permanent link. It's not gonna be as pretty, but it could use some good guarantees.

**Break:** \[00:41:17.04\]

**Feross Aboukhadijeh:** Alright, we're back, and we're gonna discuss -- I'm curious to know what sort of stuff is built on Beaker, because I hear a lot about all these different projects, these peer-to-peer projects, and a lot of them seem like vaporware sometimes. So is Beaker vaporware? That's my question... \[laughter\]

**Paul Frazee:** No. The answer would be no. There are people making a lot of cool stuff... We've had podcasts, music albums released on Dat... One of the first things I remember seeing was actually one of the coolest ones, and that was Rotonde. There's this hacker named Devine, who lives on a sailboat, which is apparently the very cool hacker thing to do these days, is to live on a sailboat...

**Feross Aboukhadijeh:** I think it's actually a requirement; you have to live on a sailboat to be a true hacker... \[laughter\]

**Paul Frazee:** Or be in the jungle. I'm here in Austin, Texas... Like, man, I've got no cred anymore. Yeah, so he made sort of like a hybrid between a blog and Twitter, in a way, that had this really kind of neat, edgy style that he puts into a lot of his work. And the idea was if you wanted to join into this thing, what you would do is you'd go to his site and you'd fork it, and then you'd have a copy that you can edit, and then you could follow each other... And it had this kind of like hybrid command line GUI style of doing things.

\[00:44:16.21\] When that came out, it absolutely crashed Beaker really hard... \[laughs\] Because it was still the early days. So I was having to furiously fix -- put up bug fixes just to make Rotonde work. But that was really neat, because what ended up coming out of that was since everybody would fork their version of the app, it was a social network, but it was a social network where everybody had their own website where they could change anything about it, which is exactly what we wanted to see out of this kind of stuff.

So when you went to somebody's site, you'd see basically the same homepage that they had, and you'd see their feed, and you'd see all the UI work that they had done, and any kind of features they'd made.

**Feross Aboukhadijeh:** Oh, so it's like MySpace... They could style it like their MySpace page.

**Paul Frazee:** It's MySpace -- like, even more MySpace, because all the code and everything was right there.

**Feross Aboukhadijeh:** So what else... Is there anything else that you guys --

**Paul Frazee:** That's it. There's nothing else. \[laughter\]

**Feross Aboukhadijeh:** That's it. Just download Rotonde.

**Mathias Buus:** Actually, one thing I really like about all of this stuff that's been built -- there's actually been a ton of stuff built on Beaker... It's like, it's all very different; it's not just like -- you know how some technology comes out, and people make the same app over and over again? The crazy ways people will bend Beaker and Dat to do something is just -- you know, I think that's one of my favorite things about the community in general.

There was recently an art exhibition in Moscow, at the Modern Museum of Art over there, where somebody did an exhibition on the Dat/Beaker network, about collaboration and stuff like that... The exhibition was peer-to-peer itself, but also in a physical location. I would never have imagined that when we started building these things, that people would start doing those kinds of things. That was just like very -- that was also what I love about this. That's what I tried to say earlier with decentralized - it really enables a whole new thinking of these apps, that we don't tend to see on the normal web.

**Paul Frazee:** Yeah, a lot of artists have been doing cool stuff. There's a lot of really neat zines that are being made, which is fun. There was one recently that was called Yin & Yang, and it was two different Dat sites; it would look at the peer count, and if you put the two sites side by side, whoever had the most peers caused this black square to grow into either the Yin side or the Yang side. It was like a battle between the two sites, which was really cool.

There was a collaborative poem, where to participate you would fork it, and then you would add your bit to the end, so it makes this chain of people making changes, and on and on and on. So there's been a lot of cool little art projects.

**Feross Aboukhadijeh:** That's so cool, yeah. Enabling art sounds like something that -- you both seem pretty happy that your early users are artists, versus other potential early users... Is that right?

**Paul Frazee:** Yeah, because they're the people, I think, who have the skills to create artistic stuff, but again, they're not out there doing sysadmin stuff... So they're exactly the kind of people we wanna be helping out and giving better tools to do what they do.

**Feross Aboukhadijeh:** So do you think that there's gonna be one killer app that brings everybody to the decentralized web, or to Beaker, or is it gonna be more like a bunch of these smaller things, enabling all these artists, enabling some other people to produce sites?

**Mathias Buus:** \[00:47:55.18\] I think that's really interesting about the peer-to-peer decentralized web here - basically, no matter how you build an app on Beaker, you always end up owning your own data, because that's how the protocol works. The way you make an app is you have some data, that's usually just JSON data, and then you're loading an application that then loads your data and renders it in a way that you can consume it. A social network on Beaker is just a bunch of JSON files of whoever you follow, and what you're posting, and stuff like that.

Technically, it puts the data at focus, but also own the data, which means that we won't have one social network; we can have a ton of different social networks, all operating on demand, as you pass your data into it and render it. I think that's really exciting, because that kind of changes the formula a little bit about how we might not end up with the one app people love, but we might have, without them knowing it, they might all have the same data scheme but all be using different apps in the same space. I think that's super-exciting. The question is a little bit hard, I think, for the decentralized web.

**Paul Frazee:** Well, in a way, it's almost like the web itself is the killer app. It's not any individual app, it's that you have all these different websites that are now networked together. They're all part of this one web, and they can read each other's data, they can publish data that the other ones can read...

Something that I kind of like to say jokingly is that the DWeb is the RSS killer. The reason I think that actually touches on something is that RSS basically turned blogs into a decentralized social network. It was a way to aggregate together all these different blog posts, all of them published independently, all in their own domains, and you could aggregate them together into a reader. That was the right track; that's how you get decentralized social networking. But RSS just had a little bit of trouble accomplishing what it wanted to, and I think it took a little bit too much coordination to get going. The readers didn't have the same kind of features that the services were putting out, like the ability to see who was following who, and the ability to like things, and reply, and all that kind of stuff... So RSS just didn't really survive, and then of course, Google really killed it whenever they killed their Reader.

But in a way, what RSS made possible is really easy to do now on the DWeb, because you make your personal site -- let's just say you have a blog on the DWeb; you're publishing the files, probably actually as JSON, right? You're pushing all these JSON posts that are like a micro blog post, and then other people can publish their posts as JSON that cross-link... We have a Twitter Fritter that does it exactly like this, and it's got Likes, and it's got Reply threads and everything like that, and the way it works is that there's not -- it doesn't take as much coordination as RSS, because we just know what the JSON formats are, what the schemas are... You crawl around to all the sites that you're following; you just go to their site and you pull down their files that are relevant, and you index them, and there you have it; you have this little social network. So the coordination required is way less than what RSS required, and you're getting better results.

**Feross Aboukhadijeh:** That sounds really cool, yeah. It sounds almost like RSS is a precursor to Beaker, in a way. The way Fritter works, as far as I understand it, is it's pretty similar to -- it's almost exactly that same model, where you just download everything to your local client reader type thing, and then it just shows you everything; it shows you all the content, and it's just a local experience.

**Paul Frazee:** Yeah, because really it's all files, and it's all JavaScript that's running on the client, so it's really easy to create -- I mean, basically, anytime you make any sort of site on the DWeb that's publishing files, you have de facto created a new distributed sort of content protocol... So anybody can go out there and make their own JavaScript, or use the JavaScript you used to read those files, and you can watch the files for changes, so you can get real-time updates, and you just pull in those JSON objects and integrate them into a feed, or a thread, or whatever you need, and there you go, you've got your social app.

**Feross Aboukhadijeh:** \[00:52:08.22\] So what features are missing, do you think? What types of sites or apps are not possible to build with Beaker, and are you gonna address that?

**Paul Frazee:** That's a good question.

**Mathias Buus:** There's definitely some... I think where people run into limitations right now is when they try to rebuild existing centralized ideas on the decentralized web. That's not necessarily a bad idea, but that's where you probably feel like there's most things you would need. Right now it's very much like the publisher has a lot of power, and the users are mostly just consumers, for a site. We recently added the Lobby stuff to it, and I guess that kind of makes it more collaborative in that way.

**Paul Frazee:** Yeah, that was designed to help with this. Dat is a pull based protocol... So you have to ask for any data that you're willing to get. An example of how that limitation shows up is if -- let's use Fritter as an example again... It looks and behaves a lot like Twitter, but if somebody follows me on Fritter, I'm not gonna know about it, because they have no way to push information to a stranger. I have to be asking for that information. That limitation ends up being a little bit tricky.

Another example is Google Docs, right? If you create a share link for Google Docs and hand it to somebody, they'll land on it and now you're in this space together... And that is not 100% there yet, but what we have started to do is putting in ways to open up data channels to other people that are on the same site as you, so that you can start to communicate bidirectionally. That's kind of an experiment that we think will need to be refined a little bit more over time... But that's kind of where the biggest limitation comes in right now.

**Mathias Buus:** Yeah, actually I also think some of the limitations -- a limitation also for example would be like let's say you want to build a website that hosts pictures; even if you have a lobby system for the pictures to be hosted, somebody would need to review them and add them. So it's like a classic human scaling issue there.

I'm looking forward to these kinds of websites that are not always on, but they will be in only viewing mode for a while, because they're decentralized and the people maintaining them are not around right now because they're sleeping. Then they'll get online and push out a change, and it's like "Now we're online, now we accept new pictures", and stuff like that.

We need to rethink that idea about the web a little bit more, I think, for these applications... But I think it's actually really exciting, because it's just much newer ideas; we need to be a little bit more novel, I guess.

**Paul Frazee:** Yeah. And there are ways that we'll work around those limitations... Just like you say, one thing you could do, of course, is to have it so that the person has to come online and pull in updates that people have created, and then publish them, so it's very personal.

You can use crawlers as well, almost like Google does, and just spider around the web and aggregate together things, and then look at the results of the crawler... But probably the thing that I'm gonna be focusing on in the next six months is getting a social graph created between people's personal websites... Because once you have a bidirectional following relationship between two people, you're gonna be able to communicate with each other. You've got a reliable asynchronous channel now. That will end up becoming a really effective backbone for building a lot of different applications.

If I can get PaulFrazee.com published and I can follow MathiasBuus.com and he's following me, we can have all sorts of applications that take advantage of that following relationship between our two sites, and build anything we want. So the social story will actually work out pretty well.

**Feross Aboukhadijeh:** I have a listener question for you both... What does success look like for Beaker and the team, or for each of you personally?

**Mathias Buus:** \[00:56:03.19\] That's a good question. It's actually an interesting question, because I've been involved in this for a while, and also just in the peer-to-peer space for a while, and it's such a moving goal post what success is... Because when we first started out with this, "would anyone even use it?". I recently hit this milestone a couple months back, where people are building things on the network that I don't know about, that I've never tried, but other people are excited about it. That was also a huge milestone for me.

The next milestone for me is just probably that the network grows, obviously, we keep getting more people on it, more and more interesting apps, and get more and more communities on it that would normally be in these kinds of tech communities. We talked a lot about how we have a lot of artists on there now, and more stuff like that I think is interesting, outside of also just more mainstream adoption, obviously, which is always nice.

**Paul Frazee:** Yeah... Echoing what you're saying there, success mode I think is when it runs away from us a little bit, or a lot. We're trying to influence the direction of the web platform, and what we're putting out there is what we think ought to happen with the web to make it a fundamental improvement to how the web works. So I'll consider success to be whenever we have web standards that are getting adopted that follow this tech.

**Feross Aboukhadijeh:** Is there any progress on that front, actually? Are current browsers interested in what you're working on? Have they talked to you about maybe implementing some of the APIs that you've added to the Beaker browsers, or anything like that?

**Mathias Buus:** There have been a couple of milestones there, I guess, of varying degree. We recently had one where the Dat protocol and other decentralized protocols were accepted as a valid protocol; not implemented, but just like as a valid scheme, that means that you can do certain security things in the browser on those. That means it's a thing that's interesting, which I think is pretty big.

There's also been some work about making all this stuff work with extensions to kind of prototype it.

**Paul Frazee:** Yeah, Mozilla has been probably the most vocally interested. But even then -- I mean, everything moves pretty slowly in this world... But what Mozilla has been doing - they opened up the registering Dat protocols; that was the first thing they did. Now they have an experimental project called Lub DWeb, which -- I don't know where that is in terms of its rollout; I think they're still kind of taking their time and evaluating it, but the idea of what they're pursuing is adding some enhancements to the web extensions APIs, so that protocols like that can become extensions to the browser, which would open up not just the technology we've been working on, but all the other projects out there, all the other decentralization projects would be able to use that same stack and integrate into Mozilla without Mozilla having to explicitly say "We now support one or the other." I think that's a really smart way to kind of let this stuff grow.

**Feross Aboukhadijeh:** Yeah, I also know Brave has been pretty (I guess) receptive. At least they added WebTorrent support; they hired me as a contractor to actually do it. And then I know that -- I guess Chrome has this thing happening now... I don't know if you guys have heard about it; there's a new spec that they're working on called Web Packaging. It's like a way to have a website served by anyone, but be proven to be signed by a particular producer or author.

\[00:59:50.01\] So I think they're interested in the context of AMP, because they basically want to be able to serve a cached version of a news article that comes from let's say CNN.com, but they wanna serve it from the Google server, and have it sent to the browser as like a packaged bundle that is signed by CNN, so then the browser can say "Okay, even though this is coming from Google.com, we're gonna show CNN.com in the URL bar, because it's actually ultimately proven to be from CNN." And I know there's maybe some peer-to-peer use cases -- I mean, it seems pretty applicable, right? I'm curious what you guys think about all this.

**Paul Frazee:** Yeah, Web Package is cool. It's a little bit crippled compared to having a full peer-to-peer network. If Web Package ended up being where all this stopped, I'd be somewhat disappointed. I think the major reason is that Web Package doesn't have the same effect of opening up the end user to do publishing. It's great for AMP, but not so great for moving data control and code control into the user's hands.

**Mathias Buus:** Yeah, I agree. It's interesting, but it's mostly just tech-interesting, it's not this other stuff... I would kind of wish it'll go way further in terms of the peer-to-peer capabilities of the browser if we wanna really make this work well; that would be my preference.

**Feross Aboukhadijeh:** Interesting. It sounds a little bit like in the same category as WebRTC maybe, where it's almost like the peer-to-peer use case wasn't really the intended use case for the spec, but you'll probably find people who are hacking that use case out of it, even though it's not really meant for it.

**Mathias Buus:** Yeah... I mean, from a personal point of view, I think it's a good analogy you say there, because it seems very use case-driven, more than bit picture-driven... Kind of like WebRTC, we need to make web recording work well on the browser, and this means we need to make AMP work better, or AMP-like things, instead of big picture, like "Oh, it'd be cool to have more decentralized stuff in there, so we can make this whole new network." It's hard, I understand why.

**Feross Aboukhadijeh:** Cool, so what's next for Beaker? What's on the roadmap for the next -- I know, Paul, you said for the next six months you're gonna be working on the social networking tools, but what about like maybe the dApp protocol? Mathias, what's coming next for Dat?

**Mathias Buus:** We have an ever-changing roadmap, as any project, but we have a lot of new collaboration stuff coming out. We've been working alot what we call multi writer. The original publisher right now is the only person that can modify the data, and we've been working on ways that allow the publisher to invite other people to take part in the data. That's a bigger focus iteration we're doing.

Then just a ton of small improvements here and there. We've been shipping a lot of just ways of making it faster and scale better, because there are a lot of people already using it, so that helps a lot. We ship those almost weekly, so I'm gonna keep doing that also. I think that's the main ones for Dat right now... Stability and more collaboration features.

**Paul Frazee:** \[01:03:12.16\] Yeah, multiwriter is gonna be pretty important. It's great for collaboration, because then you can say "Hey, Mathias, I've got this website I made. I want you to be able to write files to it", so I'm gonna add Mathias as a writer. That's obviously got a lot of value... But it's also really valuable for handling multiple devices, because right now you have to use the same device that you created the site with, and when we have multiwriter, you'll be able to add in your other desktops and you'll be able to add your mobile phone, and stuff like that... So multiwriter will be a really big improvement to the protocol.

**Mathias Buus:** Yeah, it's true. You just did that thing where I talked about it from a technical point of view, and you actually put it into users' terms... But it's so true - it's a pretty big limitation right now that you have to use the same device, especially in this environment where everybody has a phone, and stuff like that... So that's gonna be huge, for sure.

**Paul Frazee:** Yeah, I hear a lot of people saying that's something that they're waiting on, which makes a lot of sense.

**Mathias Buus:** Yeah.

**Paul Frazee:** From the Beaker perspective, we're playing what I like to call a groundball, because we have been sort of exploring how the make the tech work, how to build the applications and so on and so forth, and I think we've actually gotten out of that exploratory phase. We're pretty sure about how all the pieces are supposed to fit together...

So now it's about stepping through every step in the flow of somebody sitting down for the first time and wrapping their head around the tools, and then successfully creating a site and having it stay reliably online, and have a nice domain name, and all that... So we're gonna be spending a lot of time in the next six months working on that, and then working on the tools that help people network their sites together. The tools that help people network together, the API I'm working on is called Citizen, so keep an eye out for that.

**Feross Aboukhadijeh:** Nice. And I know Tara was working on docs. I saw the updated docs on the Beaker site, that are way, way better than what was there before. It's really cool. \[laughter\]

**Paul Frazee:** Yeah, yeah.

**Feross Aboukhadijeh:** What is she gonna be focusing on for the next foreseeable future?

**Paul Frazee:** It's actually, in a lot of ways, an extension of that. Her big focus is making sure that we're communicating really strongly with people, documenting things, explaining everything. Also, she is a big hand in making sure that things look good. She has just such a better eye for UI design that I do, so she's gonna be working on that.

**Feross Aboukhadijeh:** Nice. Well, I think this is probably a good time to start to wrap it up; we're approaching an hour... So I just wanna say I think this has been really fun, and it's just really impressive what a small team of -- you guys are just three people... What you've been able to accomplish with Beaker browser, and what you've been able to ship on such a shoestring budget, and just how useful it is and how promising it seems.

Thanks for taking the time to talk with me today, and for sharing all of your knowledge with the JS Party crew.

**Paul Frazee:** You bet! Thanks for having us.

**Mathias Buus:** Yeah, thanks!
