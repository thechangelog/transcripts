**Jerod Santo:** So we first talked Ethereum on the Changelog in 2016 with Gavin Wood. We then talked in 2018 about Gitcoin with Kevin Owocki, we then had Tim Coulter from the Truffle framework on the show, also in 2018... And we've done a show on Brave and BAT. And it seems like every time Ethereum and deWeb and Web3 comes up, I always end up asking "Well, what's the killer app?" or killer apps, plural, as we're gonna find out today... Because \[unintelligible 00:03:08.29\] what's gonna make people get into this, besides the money-grab aspect? And nobody really had answers. I mean, Brave and BAT is cool, but is it necessary? Is it gonna drive people in? And it seems like maybe this is a moment here, with NFTs. Mikeal Rogers, you're here... Thanks for coming on. Tell us about NFTs. What's the skinny?

**Mikeal Rogers:** Yeah, they're awesome. They're non-fungible tokens. \[laughter\] If you want an explanation larger than an SNL sketch, we can definitely get into it. But yeah, the idea is pretty simple - you have these digital assets, digital things on the internet, and you wanna have some notion of like "Okay, who owns that digital asset? Can we trade it around? Can we buy it?" And what it means to own it and what it means to be the token is all nebulous, and I think that we could definitely get into that... But just foundationally, I think that you have to put yourself in this new headspace of a decentralized web, and this new decentralized web movement.

\[04:11\] It kind of comes back to something that Tim Berners Lee has been saying since the late '90s, which is that the web doesn't have a data layer. We've got a presentation layer, we can link between applications and their views, but we don't have a data layer. And they tried to do Semantic Web, which didn't really work out, but now we're actually seeing decentralized networks that are on the internet, that we can kind of leverage as part of the web, and they have a lot of web-like characteristics to them... And now we're piecing together effectively this new data layer of a decentralized web. So you can make a web application just like you do today, but the backend data for that is not in Facebook or in Twitter or Instagram; it's not locked up that way. You're actually publishing data and building applications that work with data that is in public databases. Blockchains are effectively those public databases, along with networks like IPFS for doing the rest of the data delivery.

So the cool thing about NFTs is not -- you know, people sold one for 68 million, right? I don't have any comment on whether or not that's gonna retain that value of 68 million dollars. That's not my expertise.

**Jerod Santo:** Right.

**Mikeal Rogers:** But what I can say is that what people are doing right now - they're putting all of these little images into Ethereum, as NFTs, as art that they're selling. But what they've really done here is that they've basically created the decentralized Instagram. There isn't an application experience right now that looks like Instagram, but if you're thinking from a protocol standpoint where there's this thing that everybody's building on and transacting in, that's what's happening right now. People are putting photos into feeds, they're publishing them, and then people can buy them... And that buy, that ownership part is almost like just metadata in a database. You can think about it that way. And the value of owning it is gonna be determined by all these applications that build on that data. So every application that anyone ever builds that shows my gallery of my NFTs that are in my wallet is going to add value to those NFTs. It's a new experience that I get from them. And artists that are publishing them can create new relationships and experiences with those NFT holders and those users directly as well.

I don't know if you're always gonna have a 68-million-dollar image, but I do think that there will be something like Instagram, and every image in it will be an NFT that people own, and the average price might be like four dollars, right? \[laughs\] But if every image on Instagram was worth four dollars, that would be the economy of a small country. That's a substantial thing going on.

**Jerod Santo:** Right.

**Adam Stacoviak:** I don't think the value of that image is really the NFT thing. The NFT thing was the technology that enabled the transaction, so to speak. The value was not depicted or inherited to that art because it was sold via an NFT, or the ownership was established by that. That was just simply the mechanism in which they were able to establish the ownership or the transfer of ownership, essentially.

**Mikeal Rogers:** Yeah, yeah.

**Adam Stacoviak:** The art itself was valued. I mean, there's a lot of fanfare around this because it's this new fad(ish) potentially, or bleeding edge(ish) technology that's enabling this, but the value is in that art because of the art's perceived value, not so much because of the NFT... But also maybe that's layered onto it, too. I'm sure there was a percentage that was gained because it was sold as an NFT... But not just because it was an NFT. You know what I mean? I think that's where people kind of struggle, because you've got this technology, this future technology aspect look at it, and then you've got certain things now currently being able to use that technology to trade the value. And right now, art is the bigger way things are happening

**Mikeal Rogers:** Yeah, art is the easy first use case. You have to remember that these NFTs, these tokens are just pointing to hash addresses in IPFS, for these metadata files, and those metadata files--

**Jerod Santo:** Sometimes. Sometimes they're pointing at some server run by a startup who may disappear...

**Mikeal Rogers:** \[08:12\] We're working on that... \[laughter\]

**Jerod Santo:** Okay.

**Adam Stacoviak:** Don't get ahead of ourselves, Jerod.

**Mikeal Rogers:** You know, in an open permissionless network anybody can do whatever they wanna do... But the value of these assets is going to be determined by their interoperability, to some extent. So people have an incentive to do the same things, and already the big NFT minting operations are coalescing around the same standard.

At Protocol Labs we're working with them on doing the right thing. We have some best practices out. We also just created a service called NFT.storage, where we will actually take NFT data, either from the user, or we're also just literally pulling it out of the chain, and we will store that data indefinitely, and make it available on IPFS, back it with Filecoin... It'll be available indefinitely, and we're just gonna cover that, because it's sort of always been part of our mission to do stuff like that.

What is being produced -- it's really easy to poo-poo what's going on as like a bunch of GIFs or memes or whatever, but at the end of the day, this is human culture now; this is how we interact with and exchange culture, is through media sharing... And if media sharing is going to move to a public, decentralized web, we wanna preserve all of that human culture. That's always been part of our mission. It's like the internet archive, they're recording it because it's important for the future of humanity, not necessarily because they agree with every single thing that goes into the archive.

**Jerod Santo:** Yeah. So the art side, if we just stay there for a moment - because you're gonna take us beyond that, to talk about how these can be used for all kinds of applications, and you're kind of laying the groundwork for there as well... What's interesting to me - and I'm not poo-pooing it by any means... I mean, there's obviously a financial thing going on, but the fact that we've been able to, through this technology, reintroduce scarcity to digital goods is kind of amazing. And maybe that is a killer. That being said, it's kind of weird, because the scarcity is there insofar as I can own that piece of art, but it's kind of like buying the Monalisa and then donating it to a museum necessarily... Because you can also participate in that piece of art, I can own a piece of history, but all I have is like -- it's kind of like signed by "Jerod owns this", and I'm willing to pay however many Ether to get it, but there's a scarcity on the certificate or on the ownership of a point in time, or a URL, or a hash of data... But we can still all look at that data, we can still all do what we want with that data... It's kind of a weird piece of ownership. It's kind of like "I bought the Monalisa and I donated it to the world. My name's on it, but you can also have the Monalisa in your house."

**Mikeal Rogers:** You're right, it's a new thing. I don't think that it's entirely analogous to the way that we thought about this before... I've heard a lot of interviews with people, and he talks about how the Monalisa is more valuable because it's in a museum where everybody sees it, rather than in somebody's house, locked up. And I think that a lot of people's instinctive reaction is to think "Oh, if you own it and there's value in that ownership, it's because you've gatekeeped the access to it." And that's not always how value works.

**Jerod Santo:** Sure, but the ownership is your choice, because you are the owner. So you can decide whether you wanna -- you know, maybe I don't care about it; to me it's completely priceless. I don't care what you valued it at. I want it on that wall over there. I wanna be the only one in the world with -- so in that case, the metaphor does kind of fall down, to a certain degree, but it doesn't make it not cool and interesting. It just makes it different.

**Mikeal Rogers:** Yeah, it's not a great protocol or a great medium, right now at least, for creating assets where the value of it to somebody is going to be that they control that access to it, that nobody else has access to it.

**Jerod Santo:** Right.

**Mikeal Rogers:** You were talking about scarcity before, and it's like, a scarcity of "owning the resource", but not necessarily of access to the resource.

**Jerod Santo:** Exactly.

**Mikeal Rogers:** Like, what it's good at right now is the allowing anybody to have access, but only one person to have ownership with it. And to really understand what you can do with this as a developer - we wanna speak to developers here - one way to think about this is that there's an asset, and then there's value, and then the dollar amount that people are willing to buy is related to whatever the value is. I think that people look to the dollar value to say what the value is, but there's actually a missing piece here, where our perception of value, what people are willing to pay for something has all kinds of different factors to it. And the more experiences that we create around the notion of owning something - it's going to increase the value of having that thing.

\[12:30\] And even though there's a scarcity here by having one NFT, you can't think about the value of this being locked up the way that it was in the physical world. The value of some data that I put into Instagram is, to some extent, gatekeeped by Instagram. They're going to capture most of that value, and that's gonna stay within that application experience. And I get a lot of value out of sharing it with my friends and with the people in that medium, but there's not an opportunity for other developers to create additional experiences on that, that add new value to it. They really locked down the API and the things that you can do around it...

Whereas on the web -- the value of the web has never been the value of a website. This goes all the way back to the beginning of the web, and when the web was competing against content portals. AOL was better. If your goal was to just get content, AOL was doing a better job. If you liked Oprah, you could put in keyword "oprah", and then you'd get official content from Oprah on AOL. And if you went to do "oprah" on the web, you'd have to go through Yahoo! and then find a directory of a bunch of Oprah fan sites. None of those fan sites could compete with keyword "oprah", but as a network, all of those sites together linking to each other, linking to other content on the web - that network value was much more valuable than what you got in keyword "oprah" on AOL. And this is really what technology and networks are primed to do, is to create these multiplications of value

So when you think about what the value of an NFT is going to be, there's gonna be these network effects on top of that value generation. If everybody can do something with this data and your ownership of it is gonna be turned into all of these different experiences on these different sites, well then who knows what the eventual value of any of those things are...?

**Jerod Santo:** Right...

**Mikeal Rogers:** And it's not just application developers, it's not just gatekeeped by developers; it's also artists. Artists can have these direct relationships with their fans, and they can authenticate their fans. It's not just like "Oh, I sold my new album as an 100 NFTs, and people paid a lot of money for those, just to listen to it the way that they would in any other way." That artist can do follow-up content; they can do a concert and only allow NFT holders to get backstage passes. Now all of a sudden that NFT is your gateway into a longer-term relationship with that artist. And that artist is incentivized to do more of these relationships, because that will increase the value of their future NFTs, and even of their existing NFTs.

One thing that we haven't really talked about here is that the Ethereum contracts and all the chain contracts - they allow the artists to put in a percentage of future sales. In the physical world, once you own a physical asset, the secondary market never really goes back to that artist. Sometimes you have really complex legal relationships around the ownership, but for the most part, the fact that a painting that you did 20 years ago is worth a ton now - you might not see any of that money, ever. That's already gone.

**Jerod Santo:** Sure.

**Mikeal Rogers:** Whereas you can actually put "Okay, 10% of all future sales are gonna go back to the artist." So as all of these assets are getting more and more popular, that's also giving them continued income as people trade them."

**Jerod Santo:** \[15:54\] Right. If you can dream it, if you can code it, you can make that ruleset into whatever it is that you're assigning the value to. The reason why I go to the ownership and the gatekeeping and the "put it on my wall in my room" versus have it in a public museum is not to degrade what it is, it's to say "If you're saying that these NFTs and this network is kind of the data layer for decentralized web", that leads me to think "Well, is decentralized web inherently public and accessible to all, or is there any ideas of privacy and security? Can I have my data on the decentralized web that's not accessible by anybody else, or does it have to be this way?"

**Mikeal Rogers:** Well, one thing that we should all be very, very attuned to nowadays is that if the data is not encrypted, it's not private. It's just waiting to be hacked. So there's a lot of "private" data that's sitting in application databases, not encrypted...

**Jerod Santo:** It's either public, or future public.

**Mikeal Rogers:** Yeah, and that is eventually gonna get hacked, right? I think all of our social security numbers are just out there now, because the State Department can't maintain servers, apparently... And these leaks are just gonna keep happening.

So one of the nice things about this decentralized web is that in order to do any sort of permissioning, or have any of these assets in something, encryption has to be involved. So everybody has a public key that they're using for one of these wallets... And hopefully, there's a lot of decentralized identity work going on, so that we can have longer-term identities that are attached to us in social networks, as well as we can publish that we also have these particular public keys for these wallets in these different networks, and we can tie all that information together. But that gives us a lot of access to encryption utilities to make private data, and to then put that data and exchange that data in a lot of the same networks that we're using for public data, because nobody will be able to see it.

There are some additional concerns that you have to layer on when you do that, and there's some complexity here, too... Like, when somebody decrypts something, they have a copy of it, a decrypted copy of it. And this has always been true of all of these different services. You could have just taken screenshots of that data before somebody stopped your access to it, but in practice, people don't really do it. With NFTs, or with anything that you're talking about in one of these crypto chains, every time that you transfer it, you're gonna have to re-encrypt it for the new destination, and as it moves custody, each person who had custody of it would have had a decrypted copy of it.

But when you're thinking of other use cases on the decentralized web, like private messaging and stuff like that, these don't really apply. There's a bunch of private data use cases that are being worked on...

**Jerod Santo:** Gotcha.

**Mikeal Rogers:** I think that we should expect that the first thing that actually works on the decentralized web, the first set of killer apps that are coming out are around NFTs and around public data, because it's just easier to work with public data.

**Jerod Santo:** Yeah.

**Mikeal Rogers:** Doing additional auth and encryption and stuff is extra work, so we're gonna figure that out... But you really have to recognize how immature the whole space is. There isn't one blockchain that we're talking about or one protocol that we're talking about, we're talking about dozens of these things that we're wiring together, and often transferring assets between chains... There's a lot going on here, and there's not gonna -- just like on the web, there's not gonna be one winner at the end of the day. There's gonna be a lot of interop.

**Adam Stacoviak:** You have to be very future-looking to grasp what's happening, and this is infancy, really. If we're thinking in terms of maturity and age, this is a brand new baby.

**Mikeal Rogers:** Yeah, yeah.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** This is a newborn in terms of technology...

**Mikeal Rogers:** Oh, yeah.

**Adam Stacoviak:** ...and it will mature. The one question I hear though a lot is "What do you actually own?" And I like when you shared a sort of deeper look at what you actually own, where you might have access to future opportunities because of the ownership of an NFT, for example. \[unintelligible 00:19:39.26\] "What do you actually own?" If it's digital, in the Monalisa example, and everybody could still see it, what do you actually own then if you just own this metadata on the decentralized web, for example? It's pretty ephemeral in terms of what you actually own... But I like the idea of how you explained it, that you have possible future access to insider type stuff, which I think is valuable.

\[20:04\] So you may not really care about the value of that item, but you're willing to pay something for something, if you get something else in the future because of owning that something... You know what I mean? It's like an insider access thing.

**Jerod Santo:** Yeah...

**Mikeal Rogers:** So much of what we own is about broadcasting that ownership.

**Jerod Santo:** Sure.

**Mikeal Rogers:** People would not buy ugly fancy cars. There aren't really fast sports cars that don't look nice.

**Adam Stacoviak:** I don't know about that...

**Jerod Santo:** There's no accounting for taste... \[laughs\]

**Mikeal Rogers:** Yeah, yeah... So a huge amount of this too is that in public people can see that I own this thing.

**Jerod Santo:** Yeah, you're projecting.

**Mikeal Rogers:** And people can create those experiences that broadcast that ownership, right?

**Adam Stacoviak:** Sure. Is that where we're at right now then?

**Jerod Santo:** Well, a lot of it is to be a part of something bigger than you as well. If we look at the recent movements with the GameStop thing, and everything...

**Mikeal Rogers:** Right.

**Jerod Santo:** A lot of us are like "I wanna be a part of something that's cool and big, so I don't care if there's no value here..."

**Adam Stacoviak:** Right. A movement...

**Jerod Santo:** "I'm part of this movement, and I'm broadcasting that I'm part of this, because I have diamond hands", or whatever they say over there...

**Mikeal Rogers:** Yeah, and I think unlike how we build things on the current web, with centralized data repositories that are frontend by APIs, there's no permissioning to get access to this data. There's no permission involved in creating a new experience around this. So if there's an artist that I like and I wanna do a fan site where people can talk about that artist, but only people that own an NFT of that artist can actually talk, then I can build that, and I don't need any permission from the artist or the holders or anything. I just say "Come and prove that you have one of these wallets, and now you can talk. Now you can participate." Anybody can go and build those experiences.

Permissionless innovation is the cornerstone of a lot of big technology movements, and that's definitely what we're looking at with Web3.

**Jerod Santo:** Unfortunately, what it reminds me of today - and like you said, it's an infant... Do you remember how you could buy a star? Do you guys remember those businesses?

**Adam Stacoviak:** I do remember that, yeah.

**Mikeal Rogers:** Yeah.

**Jerod Santo:** You can put your name on a star... And I thought "Whoever came up with this business is brilliant", because they basically just had free, but finite supply of a thing that's just right up there, and now you come to me and I'll put your name on that star over there... Which is basically just a centralized registry; there's the difference - it's centralized. Where on that company's ledger, your name is next to that particular star. There is a line to draw there.

**Mikeal Rogers:** You can actually prove that you were the first one to do it here as well, right?

**Jerod Santo:** That's true.

**Mikeal Rogers:** These public chains have public timestamps.

**Jerod Santo:** That's right.

**Mikeal Rogers:** So if somebody goes and auctions off all the stars, and then somebody tries to do it again on a different chain...

**Jerod Santo:** Not gonna happen.

**Mikeal Rogers:** ...you can go "No, I have an older one over here..."

**Jerod Santo:** "I own that star." This is actually a good startup idea - sell a star on the blockchain. Boom. NFT stars. We should actually stop recording right now and start coding that... Because this dog hunts.

**Adam Stacoviak:** It does hunt. I like that.

**Jerod Santo:** Mikeal, can I ask you a personal question?

**Mikeal Rogers:** Sure.

**Jerod Santo:** Have you bought an NFT?

**Mikeal Rogers:** I came very close to buying an NFT, and then the transaction didn't quite go through...

**Jerod Santo:** Oh, no...! \[laughter\] If you thought centralized bugs were bad... Now we've got decentralized bugs.

**Mikeal Rogers:** I've been so busy digging through the data, and setting up all of this extra stuff... I'm in the shovel-making game, not the speculation game. People are always asking me about crypto, because I do work at a crypto company, and I'm always like "I'm the only person who doesn't buy these things. I work at a company where they're granted to me as part of my employment. You get stock." So I'm the wrong person to ask about where to buy, and trade them, and stuff.

**Jerod Santo:** Yeah. Well, it's worth stating you're sincerely excited about these technologies, but let's make it clear, you have a dog in the hunt insofar as your employer is Protocol Labs, who has Filecoin, and there's NFT things going on. So this is very much related to your work, which is why you're knee-deep in the technicalities, which - we definitely wanna talk about the technicalities.

One of the things that I've noticed is a lot of the successful art place NFT things happening right now are by -- like, the NBA is doing one, like top shots; they're selling moments, and stuff... Kind of a cool idea, and it seems like it's working out. There's not a bunch of them, but... Is that part of the Ethereum network? Because they could just have their own database, and be like "Well, it's top shots. Buy an NFT", but they don't have to be doing it legit, do they?

**Mikeal Rogers:** \[24:02\] Well, so that application was built by Dapper Labs, and Dapper Labs has their own chain called Flow... So I believe that all of those assets are on Flow. I haven't validated that, but.. Dapper Labs are the folks that created Crypto Kitties, so they've been in this space a long time; they really know how to build applications. They built Flow kind of for their own use.

This is like a good segue into transaction fees and some of the problems that people have in Ethereum.

**Jerod Santo:** Yeah.

**Mikeal Rogers:** So Ethereum is getting a handle on this... But I think that on some level, I don't know if they're ever gonna catch up to the demand. There's so much demand to put things into Ethereum main net that the moment that you make it a little bit more scalable or a little bit cheaper, you just open the funnel of more people coming in... And all of a sudden, the fees are back up again.

**Adam Stacoviak:** Scale begets more scale.

**Jerod Santo:** Exactly.

**Mikeal Rogers:** Yeah, yeah. And again, this technology is so new...

**Jerod Santo:** Plus, because it's decentralized, even the development has a lot of players who are interested... And I think moving fast is probably way harder than it'd be -- if Ethereum was a startup, if it was like eight people in a garage, they could probably move faster than it is where you have probably governance issues... I don't know how Ethereum works; I know there's like a core team, but still, you have to get that rolled out to all the people running nodes, and validators... Tough. Slow.

**Mikeal Rogers:** It's a whole ecosystem. There's a bunch of other blockchains as well, there's chains that are very compatible, versus ones that have some difficulty with compatibility... It's important here to separate what is a technical limitation because we just haven't figured out what to do yet, but there's an incentive to fix it, versus issues that are actual incentive problems. The players in this industry don't want to do this, so it's not going to happen. There have been things floated to do in Bitcoin that would be good for the people that use Bitcoin, but maybe not good for the miners... So that stuff in Bitcoin is probably not gonna happen, and may happen in some of these other chains that are being created.

Transaction fees - there's nobody who wants all the transaction fees to be super-high, actually. The business model here is to mine new tokens, and the utility of those tokens is somewhat affected by how difficult they are to transact... So there's a real incentive to try and get that down over time, rather than up, because that's just not where you're making money; nobody is making money on that. They wanna get it down.

The same thing with the power consumption. Nobody wants to pay extra power bills. Everybody's trying to get the power consumption down. It's just literally a technical problem that we're iterating towards.

And Flow, for instance, like we just talked about, and NEAR Protocol for that matter - they already use proof of stake, and use way less power, and they have much lower transaction fees. Not because of that... Because of other reasons, mostly.

Anyway, if you look at the ecosystem as a whole, you don't really have a transaction fee problem because you have all these other chains that you can use that have very low transaction fees... And if an asset gets to a certain price, you can actually move it to Ethereum. And not every protocol has worked out exactly what this is, but one of the really popular things right now is called Polygon; it's the sidechains that are Ethereum-compatible, which means that they look more or less like Ethereum. And so if you ever want to transfer an asset from there to Ethereum, you can.

So there you can create assets for sub-penny, do all these transactions, and if some of them get to be like a million dollars and you really wanna put them in the more secure, stable, broadcasted network, you can then move them to Ethereum and pay that transaction fee. And I think the way to look at this evolving is that the way that you have to scale it is through more decentralization, not more centralization. So the solution is not to get everything into Ethereum and make Ethereum so good that it has sub-penny transaction fees, and is doing a billion ops a second, or something; that's not realistic. It's fine to just have these sidechains and to have the assets move around.

Protocol Labs, Juan Benet who started the company - he's always had a lot of vision about how this stuff works in the future and about this protocol interop, and we've been working on standards and protocols that are just open source, open protocols that we implement. A lot of people, I think, for a long time, thought that we were over-engineering. They tended to be like "Oh, why don't you just do your own custom thing, like we're doing over in this chain?" And we were like, "Because it's not about your chain, it's about the compatibility between the things", right?

**Jerod Santo:** Right.

**Mikeal Rogers:** \[28:12\] And now what you're seeing is IPFS is being used in all of these chains to talk about the data, because our addresses and our protocol is not tied to a specific chain. It's not even specifically tied to Filecoin, for that matter. You can put stuff in Filecoin and it matches all of our primitives, because we've built both of these technologies, but it's not like -- you can have assets anywhere in the world, mirrored for whatever reason, and available in the IPFS network, and participate. We're not gatekeeping that with one chain, and that's why IPFS has become so popular. We certainly have a vested interested in IPFS, but it's not like we sell it. This is an open protocol.

**Jerod Santo:** Give us the 30-second rundown, for those who don't know what IPFS is.

**Mikeal Rogers:** Yeah, so since we're talking about NFTs, the best way to look at it is to skip over some of the more file systemy aspects of it, and just think of it as addressing and availability in a peer-to-peer network.

So if you give it some data, then it's gonna be able to give you back a content ID, which is a hash with some other data in front of it, that tells you what you can do with that hash, and what kind of format it is. Again, we've really thought about future-proofing these technologies against future hash functions, and different use cases... So you get this address, and you have an URL scheme where you can actually even path into that address... So you have like have `ipfs://` that address and then you can path it into it and that is effectively a tree. When you do check-ins with Git, you get that hash back, right? And that hash is immutably the state of the tree at that time... That's what you get out of IPFS - you get the immutable state of that tree, at that time. And that's really important, because in the IPFSnetwork, which is this global peer-to-peer network for getting the content, you can say "Hey, who has this address?" And you can find anybody on the internet with that address, and you can pull it from them, and in a trustless manner you can validate that that content is the content that they said that it was, right?

And what IPFS does is it takes really large files and breaks them up into parts, and does all of that stuff... Like BitTorrent does, as well. If you actually look at a BitTorrent file, you'll see all those parts in it.

And that network functions a lot like that. Then we have up what are called gateways, Cloudflare has a gateway... There's a bunch of different gateways. But gateways are just HTTP endpoints where you can say "Okay, HTTP endpoint /IPFS" and then give it what was in that IPFS URL, and it will pull that data out of the network and work like a CDN basically for the current web. So if you don't have IPFS protocol support in your browser, like most browsers right now, you can just use these gateway URLs. And then we're working to get IPFS native protocol support into browsers. It's in Brave right now... If you wanna just try out what first-class protocol support looks like, you can try out Brave.

**Break:** \[30:56\]

**Jerod Santo:** So you can tell that we're dealing with nascent technologies because I'm a relatively savvy developer and my head's spinning just a little bit, and Mikeal's getting deep into the weeds... Break it down for us - simple terms, developer perspective, how do NFTs work? How would I issue one? ...or I don't even know how you talk about interacting with them, but how do NFTs work?

**Mikeal Rogers:** \[32:14\] Right. So if you wanna create one, you do what's called minting. To mint an NFT means you take the data, you put it into IPFS... You can use this project that I talked about, NFT.storage, and that'll handle getting all of the data in IPFS, creating the metadata file, getting you what you need to work with an NFT. But then you've gotta pick a blockchain you're gonna use, and what you're gonna do is you're gonna develop a contract around how that NFT is used, and then you're gonna reference that IPFS address for that metadata in that NFT. And then you're going to use the user's wallet. So the user that is minting the NFT, not the developer - this is the user's wallet - will then sign that transaction and put that on the network.

We can link to an example of how this all works, actually. That's probably a little bit better. There's a blog post about this little project called Minty, that we wrote at Protocol Labs, that does some minting. If you're pulling apart these different components, there's parts of this that are on the developer, and parts that are on the user; so the user has to have a wallet around, and there's different ways that different applications have approached having that wallet. There's a project called Metamask, which is a very popular wallet for Ethereum... You can use Ethereum wallets on a lot of other chains as well. It's a public-private key. But Metamask is really nice in that that stays in secure storage on people's devices. It's never shared with the application. So there's no man in the middle stuff, there's no custody issues. It's always the user's address. That's a really great one.

But a lot of these projects that are getting people to set up Metamask, getting people to set up these wallets is actually a big barrier to entry, so a lot of the NFT minting sites that you might go to will just create a wallet for you, and they'll hold on to the public-private key pair. And that can be problematic, because if they get hacked, your private key's gone... And also, they can kind of run off with it. You really want to have custody of your wallet in this ecosystem... But again, it's really young, it's really immature. The user experiences around wallet custody are not entirely worked out very well. There's a bunch of sites where you have an account with them and they have that wallet, and then they're handling a lot of the signature stuff for you when you mint these NFTs.

**Adam Stacoviak:** So maybe break down roles then. You've got this idea of a minter... Is there an artist role? Is that just only fadish maybe for now? Maybe an artist isn't actually there; maybe the creator, or the original owner. Then you said consumer, you've got a developer in there... There's a couple different roles in the process to mint, establish the contract... What do you think in terms of the different roles involved?

**Mikeal Rogers:** Yeah, so this actually changes per application a little bit. I think the best way to describe it might be author, rather than artist... Because there is a person creating the NFT, the tokenized part of this. And they may not be the person who created the original work. If you've seen these sites that do some minting of tweets, for example - a lot of that is there is actually money shared with the author often, like the person who created the tweet, but there's also a sourcer; that's not the word, actually, but somebody is digging through these and sourcing which of these might make good NFTs; which of these is worth the $20 transaction fee...

**Adam Stacoviak:** The curator. A curator is probably like that.

**Mikeal Rogers:** Right, right. They're sourcing these, so a percentage of that --

**Jerod Santo:** That's like selling stars though...

**Mikeal Rogers:** Yeah, yeah, yeah.

**Jerod Santo:** Like, "I didn't write this tweet. Jack Dorsey wrote the tweet. But I think it's good, and I'll sell it to you for $20." What's up with that? That's not cool...

**Mikeal Rogers:** So as long as you're the first one... Like, if you're not the first one, then that's \[unintelligible 00:35:54.28\]

**Jerod Santo:** Yeah, the first one!

**Mikeal Rogers:** But no, I think not every person wants to dig through all their tweets and pay $20 transaction fees for the ones that they think are gonna be worth it...

**Jerod Santo:** Okay, so there's the speculation, because I have to actually pay a fee in order to mint that, because there has to be entry onto Ethereum. But it doesn't have to go onto Ethereum, because it could be a different blockchain, plus I could go on one of these sidechains, so maybe I can get it cheaper, is what you're saying...

**Mikeal Rogers:** \[36:21\] Yup, yup. But when you're working on a sidechain right now, you may not be involved in some of the other auction sites. So right now there's a bunch of auction sites that are all showing you available -- or not even... I should say just sales sites, that are showing you different NFTs that are potentially available to purchase. And those sites are all working on the same database. They may have some information on top of that, like they may have some private information that they got from that user about what they might be considering selling it at, or something like that...

For the most part, this is an open network, and all of these little application features, like having a waitlist of people that might say that they would pay a certain amount - eventually, all of that will also make it on-chain as well. All of these little pieces of information can be put into the chain over time, as long as we figure out the right protocol.

So yeah, so you have a --

**Jerod Santo:** A curator...

**Mikeal Rogers:** ...a lot of applications, all looking at that data, and they might not be looking at the sidechain. You know that they're looking at Ethereum. So you have access to a much bigger market right now if you put it on Ethereum than somewhere else... And as these other sidechains get popular, there'll be more and more.

**Jerod Santo:** That's kind of part of the speculation even. It's kind of like "Which marketplace do I wanna be a part of?" "Well, Ethereum has more eyes, but it's also gonna cost me more to get on there."

**Mikeal Rogers:** Right, right.

**Jerod Santo:** So there very much is an economy around these things. Doesn't this make you wonder, like, don't people have mortgages? Or don't they have groceries to buy? People are just swapping money around on these networks to just buy and sell GIFs to each other. "Here's a tweet. I didn't write it, but I liked it. Do you like it? Do you like it for $20?" It's like, "I like it, but I've got groceries."

**Mikeal Rogers:** I mean, how much money are people spending in games right now though?

**Jerod Santo:** It's crazy...! \[laughs\]

**Mikeal Rogers:** People spend a crazy amount of money on in-game assets...

**Jerod Santo:** I agree.

**Mikeal Rogers:** ...and there's none of t his kind of security around it. Just thinking about in-game assets...

**Jerod Santo:** So surely, digital goods inside of games is probably a rich space for NFTs as well, right?

**Adam Stacoviak:** Yeah. Gosh...

**Jerod Santo:** ...because you could buy something inside one game, and then own it in the next version, or on a different game. Maybe it's that same -- you bought a blouse over here, and now you can use that same blouse over there. That's pretty cool...

**Mikeal Rogers:** Well, and there are already creators that build new in-game assets that are very popular... And those people are always seeing their works forged, and people saying that they have one, who didn't actually buy one from them.

**Adam Stacoviak:** I knew somebody who made their living from making things in a game.

**Mikeal Rogers:** Yeah, yeah.

**Adam Stacoviak:** They made their living from making art...

**Jerod Santo:** In Second Life, or...?

**Adam Stacoviak:** Yeah, in Second Life. No names dropped here, for scarcity and security and anonymity... But I knew somebody who literally made their income... It wasn't a ton, but it was enough to live on, from just making in-game art things that you can use, wear, share, ride, horses... All the things, objects in the game that you can use in some way that was unique, because it was by them. Scarce, because they could only make so many, and I suppose artistic, because creativity required.

**Mikeal Rogers:** Yeah. Really, the best use case that we have right now is probably this in-game stuff... And you can actually see how this ends up really decentralizing a lot of game development in general, and new games. If you can imagine - okay, we have a format for this in-game asset. And that game becomes really popular, and a lot of people have created these NFTs now... Well, if I created a new game and I wanted to leverage all of the assets that were already created, I just need to be compatible with that asset now, and I can look at that chain and pull all that data out, and everybody who comes in and authenticates with those wallets, I can say "Okay, you have those in-game assets in our game, too."

**Jerod Santo:** Totally.

**Mikeal Rogers:** And then you've got new people creating things in your game, and you're leveraging this existing game.

**Adam Stacoviak:** \[39:59\] Derivates, yeah. Authenticated derivatives.

**Mikeal Rogers:** Exactly. So now we're building networks of value, and the value of the asset is not just tied to one game. It's all the games that I could ever use it in.

**Jerod Santo:** Yeah. So now you're driving cross-compatibility, whereas the incentives for the game creators before that was to actually hoard everything. But now the incentive for someone who's an upstart is to be compatible, because they need to transfer that network, whatever your stuff is in, to make this game actually worth playing.

**Mikeal Rogers:** Exactly. Nobody who's making a ton of money right now having their own locked down in-game asset store is going to move all of that to a public platform other people can leverage...

**Jerod Santo:** Yeah. Why would I do that.

**Mikeal Rogers:** But you just need one to be popular, and then the next wave of games will build on top of those assets.

**Adam Stacoviak:** Can you go back to that minting process though? Because I wonder, is an NFT exclusive to digital? Because you said it has to be in IPFS. As part of the minting process you said "Put it in IPFS" as the first example.

**Mikeal Rogers:** You should definitely put it in IPFS, so that there's an immutable reference, so that people can't say that it's something else in the future.

**Adam Stacoviak:** Right.

**Mikeal Rogers:** If you made it an URL, then people could change that.

**Jerod Santo:** Which some of them are \[unintelligible 00:41:04.16\]

**Mikeal Rogers:** Yeah, we're working with them to stop doing that... But also, something that we're looking at doing is just - okay, when we see these on-chain, let's pull whatever's in that URL at the time that we see it on-chain, and put that somewhere... In IPFS we have this thing called immutable file system, so there's actually an immutable reference to the directory structure... And then we can just create basically a file for that URL, for every one of those assets, so that we have a backed up copy of whatever it was when it got minted. We're looking at doing that. We haven't built it all out yet.

**Adam Stacoviak:** So minting is a digital thing.

**Mikeal Rogers:** Yup.

**Adam Stacoviak:** Does it have to be a digital thing?

**Mikeal Rogers:** What you're minting is just some bytes.

**Adam Stacoviak:** Okay. So it requires something to be digital. Could it be a picture of the real-world thing, and that's the picture--

**Jerod Santo:** You could take your house title, take a picture of it...

**Adam Stacoviak:** Right, okay. So it somehow has to be authentically digital, in some way.

**Mikeal Rogers:** Yeah, yeah.

**Adam Stacoviak:** And as the minter, you are the owner of that minting, so there's some sort of original ownership of "I'm the original owner", or whatever the roles were you said before) as part of the minting process, that says "This is authentic from me, I am me, and I am whoever I am, and this is my thing, and I'm minting it." And now the new owner gets it from me, or the application, or wherever I auction this thing off at; they authentically buy it via NFT, via this process, to say they're now the owner of it. But me as the minter - I minted this digital thing, or this physical thing turned authentically digital, into IPFS, an immutable file system. I mint it, I'm the owner, and Mikeal, you bought it from me. Or you won the auction and now you're the owner. NFT proves that you're authentically now the owner, and there's that chain forever. And if ever you sell it or exchange it, on goes the ledger.

**Mikeal Rogers:** Exactly. I think it's important to differentiate what the protocol enforces and what it doesn't enforce.

**Adam Stacoviak:** Okay. Because you said there was a contract, right? There's a process to define what you can do with it.

**Mikeal Rogers:** Yeah. So the Ethereum VM lets you do some cool stuff. And there's a specification for how these non-fungible tokens work, and what some of the metadata says. But one thing that you really need to keep in mind is that the reference that you put into the NFT that's minted on chain is a reference to a metadata file. It's not the hash of the content necessarily, it's metadata about that and then the hash to the thing. So if you alter that metadata a little bit, you get a new hash, and it effectively looks like an NFT.

So the enforcement of uniqueness is not really happening at the chain level, it's happening at like a reputational level on top of the chain. This is all in a public database somewhere, and I as the artist notice that "Oh, there's a bunch of forgeries in my thing out there", we will have an open reputation system where they can say "Here are all the forgeries." And now everybody who's building applications around it will note that the forgeries are not the real thing. But that's not enforced on chain.

\[44:08\] What can be enforced on chain though is if people transfer this asset for money, if they say "I'm selling it to you for this amount of Ethereum", then percentages of that fee, of that cost can go to different wallets that were preconfigured into that.

**Adam Stacoviak:** Okay. You've gotta bake it into the process. Wherever I sell it, 10% comes back to me as the owner, because hey, I wanna have royalties.

**Mikeal Rogers:** Exactly.

**Adam Stacoviak:** The idea of royalties, or something like that. I wanna kind of maintain capital wealth coming from whatever. Or value.

**Mikeal Rogers:** Right, right. There's a workaround here... You could do an offline deal with somebody for money, and then transfer for one Ethereum, or -- one Ethereum is a lot of money, actually... Like, you know, just for very little money; there is a workaround when an asset--

**Adam Stacoviak:** The current value of 1 ETH is $2,300, from my understanding...

**Mikeal Rogers:** Yeah.

**Adam Stacoviak:** Okay, so that's still a decent change.

**Mikeal Rogers:** Yeah, yeah. So there are sort of like these offline workarounds, but in practice, nothing but really specialized use cases are gonna fall into that, because you have these open networks of different people offering to rate and buy these. And everybody can transact in that system.

So if you really wanna get rid of something, if you really wanna sell it, you're not gonna try to score some kind of offline deal; you're gonna make it available on all of these sites, that all can sell it, because that's how you're gonna get the most amount of money, and reach the largest number of people.

And I think something really cool that we haven't really talked about here is that the experiences that we create around all of this can have new types of feeds and new types of events happening when assets trade, and what their value is. This is all just metadata in a database effectively, if you think about it that way. So if I'm following you on Twitter, I will see anything that you create, and anything that you buy, and also maybe when you trade it. Or maybe something that you owned years ago, that got traded, and that's interesting; that dollar amount is interesting. Or not just looking at a tag, but any tag that is selling for over a particular amount.

You can take all of these different pieces of metadata and think about -- shove them into a relational database and creating all kinds of web experiences around them. And I don't think that we really have a full understanding of really what is available to people when you do that. Not to mention, I can just decide to create a new experience around a set of NFTs that have been sold. I really liked this collection of stuff; I wanna offer something to just those people. I can just say "Here's the NFTs that the holders have access to X, Y and Z." These are entirely new ideas that are coming about, and are made practical.

**Jerod Santo:** So you don't have to sell them, you can give them away.

**Mikeal Rogers:** Yeah, yeah. I mean, a lot of the most expensive ones right now were given away. A lot of the original CryptoPunks were just given away for free, or for pennies.

**Adam Stacoviak:** And the fact that you can contract in with the minting process some sort of kickback as part of it all. You know, the original creator, or the minter, or whatever roles are involved and how you can code that, if that's the possibility, as you said, in the Ethereum VM.

**Mikeal Rogers:** Right.

**Adam Stacoviak:** That makes it uniquely interesting, because you have a vested interested, I suppose, in the history of it, the ongoing history of something too, as it travels from obscurity to notoriety, to importance, to infamy, whatever it might be.

**Mikeal Rogers:** Right, right.

**Adam Stacoviak:** In all these different ways, something can become more or less popular or valuable to people.

**Mikeal Rogers:** Right, right.

**Adam Stacoviak:** And I guess the interesting part is you can -- because it's metadata in a database, you can pay attention to it and trigger things, and things can happen because something else happens, or thresholds are met, or whatever. You can really programmatically exchange and pay attention to the digital world in the future.

**Mikeal Rogers:** \[47:53\] And because all of these are protocols, and because they're all cryptographically secure, there are new things that we could do that we weren't able to do before around securitizing them. You can literally do something like create a sort of decentralized autonomous organization (DAO), and say "Okay, this DAO is going to get this amount of money from these people to buy these NFTs, and then it's going to sell them on this particular cycle, and then that money is gonna come back to those people." And you can even wire up decentralized finance into these systems. So people can trade assets related to the entire lifecycle.

**Adam Stacoviak:** This is super-complex. It can get really deep. I mean, I'm fine, keep going, but I'm just commenting that it can be really entangled.

**Mikeal Rogers:** Yeah, it can get really crazy. But you can have basically automated versions of royalty programs, where investors are investing in and speculating on the value of these royalties over time. And you can literally securitize that into shares that pay out on particular cycles.

It's a very interesting, brave, new world of what you can do in a completely trustless, decentralized system. And a lot of the primitives that you need for that stuff to really work is still being worked on. This is not something that web developers are just gonna pick up after bootcamp and go into...

**Adam Stacoviak:** Right. It's constantly moving.

**Mikeal Rogers:** ...these more advanced financial stuff. But it's getting easier every day. And in the NFT space in particular, what we're seeing is that a lot of new developers have come in, and a lot of these new developers have figured out the right ways to just plug some of these gaps. And again, this works really well when all the data is public, and all of that. We move around some of the other problems that are still being worked on, but as this matures, you're just gonna see more and more of this stuff happen.

**Adam Stacoviak:** I have to say that this explanation of it is much better than SNL's version of it.

**Mikeal Rogers:** Well, they did that quick. I mean, it was--

**Adam Stacoviak:** Yeah. Obviously, it's meant to be comedy, but...

**Mikeal Rogers:** Yeah. Mine is not a rap.

**Jerod Santo:** Although maybe it could be.

**Adam Stacoviak:** But even going back to Bitcoin - I can recall Bitcoin two Christmases ago, when SNL did that skit on it. It was like, somebody got slapped at the kitchen table... I can't recall the skit, but it didn't do a good job of explaining Bitcoin. It actually made it--

**Jerod Santo:** Well, it's a joke though, right?

**Adam Stacoviak:** Of course it is. But there's always explanation in comedy.

**Jerod Santo:** So they're not trying to explain it. They're trying to make fun of it. \[laughter\]

**Adam Stacoviak:** But sometimes the best way to learn is through comedy, right?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It's an emotional charge.

**Jerod Santo:** That's the one where it's the 50-year-old-ish moms that were just talking about Bitcoin, and they're like "It's Bitcoin! You've gotta buy some!" I can't remember -- and like, that was it.

**Adam Stacoviak:** Right. "I've put all my savings in Bitcoin." "You did what?!"

**Jerod Santo:** Yeah.

**Mikeal Rogers:** I mean, they made a lot of money though, if they did do that...

**Jerod Santo:** Yeah. If you would have bought Bitcoin that day that that came out and just held it...

**Adam Stacoviak:** True that.

**Jerod Santo:** ...then you would have been as smart as those women.

**Mikeal Rogers:** I mean, the market is volatile. It's up and it's down, it's up and it's down, and we've seen three or four crashes at this point... But every crash has a higher floor. If you look at it over time, it's done incredibly well. I mean, Bitcoin has been like over $50,000. It's crazy.

**Jerod Santo:** Yeah. Well, it's interesting how larger -- specifically on the NFT train, which is running in parallel to the Bitcoin train, but on different tracks... The NFT train - it's interesting how quickly large organizations are hopping on this one... The skepticism level is much lower. Like I said, NBA is doing their top shots, and then you have -- was it the New York Stock Exchange, or was it the NASDAQ? They just announced they're gonna start selling the moment that a new company IPOs. You can buy that moment. So today is actually the Coinbase IPO, and you could have bought the Coinbase IPO as an NFT. They're selling those things.

Part of it is because it's easy money right now, but also, there's no skepticism from - it's either NASDAQ or NYSE; I'm not sure which one. They're just like "We're in. Let's do it. Let's sell some times." So it's interesting.

**Mikeal Rogers:** What does it cost them to do that, right?

**Adam Stacoviak:** Zero.

**Jerod Santo:** Exactly.

**Mikeal Rogers:** \[51:55\] I think that it's even bigger though when you're looking at artists and content creators... Because what they do already is create content. And it has been so difficult to figure out what the monetization model is for that content... And we've seen a lot of companies try to show up and be the right intermediary for that. And some of them have done a really good job and are quite good. I really like Substack, and I think they've done a lot for those writers, and stuff... But you can't make money on Spotify unless you're like the biggest artists in the world.

A lot of the way in which we do media now - you can't sell the actual digital production. The thing that you create digitally isn't something that you can actually derive a lot of money to you... And most of the value is actually captured by intermediaries. So this is really a sort of new, amazing thing for artists, where they can create something and they can have direct relationships with their fans who want to buy it and own it, and they can continue to create value and experiences around owning that over time. And everybody can participate in that. It's easy for them to go like "Okay, great. I'm creating stuff. I'll create more stuff. I'll create stuff that's an NFT."

**Jerod Santo:** Yeah. It's like the asset isn't rare, but the artists themselves is rare. The relationship with the artist, and the association with the artists themselves is what the value is. Sure, this song is also on Spotify, you can go stream it right now; or this song can be by this artist, owned by Mikeal Rogers.

**Mikeal Rogers:** Right, right, right.

**Adam Stacoviak:** And going back to who owns my NFTs songs, that list is probably somewhat short, at least; it's more finite than the listeners on Spotify, for example. Millions of listeners potentially, or more, on Spotify, for a given popular song, but only a small handful of owners NFT-wise of my tracks.

**Jerod Santo:** Well, if you sell your NFT to a million people, then you're shooting yourself in the foot. That's not the point, right?

**Adam Stacoviak:** True, yeah.

**Jerod Santo:** Or maybe it is. I guess that's the point with the decentralized web. You can just do whatever you want.

**Adam Stacoviak:** But is there gonna be an NFT strategist sometimes soon though?

**Mikeal Rogers:** Oh, that exists.

**Jerod Santo:** I'm sure that exists... Yeah, consulting. Of course, Consulting services. Someone's offered them.

**Break:** \[54:01\]

**Mikeal Rogers:** I mean, honestly, this whole space is really gonna blow up. This is Web3. This is what we're talking about. And Web3 - everybody's been talking about like "When is it gonna hit? When is the killer app gonna happen? When is the moment going to happen?" And I think this is really it. You're seeing a huge amount of adoption and a huge amount of new applications being created. And regardless of what happens with the NFT craze as a thing or as a buzzword, all of the development tools and practices and understanding of how to work with these things and how to build these experiences - that experience is just going to accumulate with the people that are early. And those tools are just gonna continue to set the standard for what people are doing in the future around Web3 and de-apps.

So even though it is early and it could crash again for a little bit, I think the technology and the tooling and the knowledge that you get by being there early is really invaluable. I really encourage people to come into this space.

**Jerod Santo:** \[56:16\] Well, like I said, we've been covering Ethereum for years, and Bitcoin a little bit, with Bisq, the decentralized exchange; we've been tracking these things... And the technology has always been very fascinating, and it's always been a bit inscrutable and hard to wrap your head around, and I've always been saying, regular people aren't gonna use this; something has to draw you in, because it's too hard yet. And it's getting easier and easier.

The market cycles have happened. I've been along for the ride, watching it. The waves, they crash... But that whole time, the community - they just keep on developing, they just keep on coding, they keep on improving... And it's gotten better and better and better, to the point where like "Okay, it's starting to get pretty compelling. This use case - it's a new thing. It's different, and it's compelling. I mean, people are doing it. And there's gold in the hills, and now also artists have some sovereignty over their creations, which is new... And they're gonna go ahead and collect some value; they've been putting all this value into the world; they're gonna start collecting some...

So the market cycles will continue to cycle probably, and generally in an uptrend so far... But I agree with you, the technology is getting more and more compelling. That being said, challenges are all along the way, and it seems like so far the challenges have been energy use and scaling, and then just like user interface or user experience.

**Mikeal Rogers:** Yeah. I mean, the scaling stuff is all being worked on and it's all making progress. That's one of the parts that I worry about least, to be honest. Where I really get more concerned is like, okay, how quickly and how can we parallelize connecting real web developers today and what they can do, and what their capabilities are, with interacting with these protocols.

If you were a web developer in the mid-'90s, you knew HTTP. You had to figure that out. That was a part of your workflow.

**Jerod Santo:** Sure.

**Mikeal Rogers:** Web developers today don't necessarily need to know how HTTP works. Not to the degree that I had to learn it, right?

**Jerod Santo:** They don't?

**Mikeal Rogers:** They understand that it is like a thing, and that it is in their URLs, but they don't know--

**Jerod Santo:** They have to know headers, they have to know verbs...

**Mikeal Rogers:** ...they don't know that there's a misspelling in the refer header, right? They don't need to know that... \[laughs\]

**Jerod Santo:** Yes, they do. Come on, Mikeal... Give them credit now...

**Mikeal Rogers:** \[laughs\] You are not talking to people that just came out of a bootcamp, man...

**Jerod Santo:** No, I'm talking to you! \[laughter\]

**Mikeal Rogers:** One of the things that really makes web development web development is that everyone is new. It's growing so fast all the time that everybody has just come to it...

**Jerod Santo:** That's true, yeah.

**Mikeal Rogers:** ...and we're constantly just making it easier and easier. I love what's going on in the no-code community, where it's just like "Let's just take programming out of it, actually. I think that we can just embed a widget here, and just be done." And I think that is in a lot of ways where things are kind of going. What I really wanna see in this technology and where I feel like I can really provide the most value, to be honest, is where do web developers touch these protocols, and how do we very quickly make the protocol just an implementation thing that you don't really worry about anymore? If you look at NFT.storage, that's really what we've done. We've kind of just taken all of the work out of encoding the asset, getting it available in IFPS... Or storing it in Filecoin on your behalf; you don't have to interact with \[unintelligible 00:59:27.14\] in Filecoin, we'll handle that.

But I can't make the Ethereum transaction stuff different. We are not a wallet provider, so we can't solve that specific problem... So what I'm really looking at right now is "Okay, how is everybody solving this problem? What are the best practices and things that have kind of shown up as real outliers in terms of user experience?"

One that we've found three weeks ago -- I mean, we'd seen it before, but we didn't realize how rad it was... Have you ever used Magic Link for anything? The Magic Link service.

**Jerod Santo:** No.

**Adam Stacoviak:** No.

**Mikeal Rogers:** \[01:00:03.28\] Man, if you've ever dealt with auth tokens, if you've ever had to involve yourself in that mess and write that from scratch, which I'm sure you have, actually, Magic Link just handles auth tokens. It just deals with this whole problem for you. And so whether you wanna have a Login with GitHub button, or Login with Twitter, or you just wanna email somebody a Magic link that just gives them a JWT token, as a developer, you don't have to set up that infrastructure, you don't have to deal with all of that stuff. You can just use their toolkit. They also though added support for just wallet signatures.

So if one of the things that you wanna accept rather than having people login with GitHub, just have them sign with their wallet, and get an auth token that looks like one that you would have gotten in any other way, you now have that as well.

**Jerod Santo:** That's cool.

**Mikeal Rogers:** Yeah, yeah. So that's a really nice way to say "Okay, now we can provide literally widgets that anybody can put on any website. And you don't have to have a developer token with a service; you can just sign it with your wallet and we'll take it." That's a really powerful thing.

**Jerod Santo:** I love that.

**Mikeal Rogers:** The real value of open protocols is that you get to build an ecosystem that solves all these problems once, and then everybody leverages it.

**Jerod Santo:** Yeah, as earlier when you were saying "We'll have a reputation system." First of all, who's "we", and where's this reputation system?

**Mikeal Rogers:** Somebody will build it, and then one of them will win.

**Jerod Santo:** All of us, eventually? Somebody will build the reputation system?

**Adam Stacoviak:** Trusted ecosystem.

**Mikeal Rogers:** Yeah, yeah.

**Jerod Santo:** Who wants to build a reputation system though? Come on...

**Mikeal Rogers:** Look, I was one of the first people to do Node.js development, and there were no libraries, and there was no npm, and there was nothing... But it was also a really fun experience to be a part of that ecosystem and filling in those gaps... And then when you see that ecosystem take off, when you see what people can build and how many more people flood in once you just solve a couple problems and people can leverage it in an easy way... The whole ecosystem is just gonna go gangbusters.

Just something as simple as "I wanna have a gallery show of all of the things in somebody's wallet." Well, only one service needs to solve that problem, like indexing all the chains and showing that \[unintelligible 01:02:00.10\] We're gonna build one, but we may not be the winner of that. But who cares. That's not our mission. We just want people to build apps.

So now anybody can have this no-code widget, or anybody can have this React component where you just give it a wallet address and you have the list now. How many more people can build applications now that they don't have to spin up a database to index all of the content that's happening in the chain, right? You've taken a whole piece of infrastructure and a lot of work that people used to have to do.

So it's not just about "Okay, great, we all get to leverage the same data layer." It's like, "No, we also as developers get to solve problems that are on that data layer once, and everybody gets to leverage that." And we see a lot of applications doing comparable experiences.

**Jerod Santo:** It seems like if and when browsers themselves have the wallets built in, that will be way better than this whole Metamask loading extension. I mean, I'm a nerd; I don't want Metamask running in my browser. I just don't.

**Mikeal Rogers:** I mean, it's a fine thing to run...

**Jerod Santo:** I'm not against it. I don't have a reason not to. I'm just like "Nah..."

**Adam Stacoviak:** "I'd rather not."

**Jerod Santo:** I'd rather go use a different website.

**Adam Stacoviak:** Yeah.

**Mikeal Rogers:** I think one of the scary things about the wallet stuff - it really has nothing to do with the technology or even the setting of it up... It's just the idea that if I lose this, I lose everything. It's that feeling...

**Jerod Santo:** Yeah, it's so important.

**Mikeal Rogers:** ...like, "How do I back this up? Am I really printing out this thing and putting it in a safe? Is that happening?" How do I quickly just get this on a lot of devices so that I never lose it?

**Jerod Santo:** Did you commit your 12 words or whatever they are to memory in case you ever end up traveling the world and being held hostage, or something? Or how are you handling your private keys there, Mikeal? Give us the tips.

**Mikeal Rogers:** I am not going to disclose my personal security practices on a podcast... \[laughter\]

**Adam Stacoviak:** "Reverse-engineer own keys..."

**Mikeal Rogers:** This is the first rule of Fight Club, you don't talk about your personal security on a podcast.

**Jerod Santo:** Just give us the first letter of each word, that's all we want. We don't need them all. We can figure out the rest.

**Mikeal Rogers:** \[01:03:55.04\] Yeah, yeah... I remember at work they were saying "Maybe you don't wanna be super publicly associated with working on this technology", and I was like "Okay, this ship has sailed." \[laughter\] I am already...

**Jerod Santo:** You are exposed.

**Mikeal Rogers:** Right, right.

**Jerod Santo:** Well, you can have multiple wallets, right? You can have your trash wallet... Just like you have multiple email addresses, like the one you sign into the shady sites with, where you're not quite sure if they're gonna be -- and then you have your bank password. There are certain levels.

**Mikeal Rogers:** I may or may not have several layers of security and indirection around this... \[laughter\] That I will not be disclosing.

**Jerod Santo:** We're not gonna get anything out of him, Adam...

**Adam Stacoviak:** Nope.

**Jerod Santo:** Okay...

**Adam Stacoviak:** He's a lockbox.

**Mikeal Rogers:** Yeah, yeah. \[laughs\]

**Jerod Santo:** So let me ask you this - and I assume the answer is yes. Can you create an NFT for an mp3 file?

**Mikeal Rogers:** Oh yeah, absolutely. That's easy.

**Jerod Santo:** Do you wanna do one? You can show us the best practices, you can use NFT.storage... When this episode ships, you can take the episode, the mp3 file, put it on NFT Storage, set it up as an NFT, and then we'll see how it works... Because you can show us best practices or a good way of doing it, right?

**Mikeal Rogers:** I mean, you probably just wanna go to one of the sites that do minting, and they'll walk you through the whole process. There's a bunch of sites that do this for you.

**Jerod Santo:** No, I was hoping to make you do the work...

**Adam Stacoviak:** He wanted you to do the work, Mikeal...

**Jerod Santo:** Yeah, I don't wanna do the work. You don't know me well enough... I'm trying to get you to do this. \[laughter\]

**Adam Stacoviak:** Delegate. Delegate.

**Jerod Santo:** Come on, you're the enthusiast. Show us how to do it.

**Mikeal Rogers:** You're gonna wanna go to one of these sites. You're not gonna wanna build this by -- I know that it is like the developer thing to be like "No, I wanna code my own thing and make it work..."

**Jerod Santo:** No, no, no. I want you to code it for us. You're not tracking, you're not tracking... \[laughter\]

**Mikeal Rogers:** I'm a manager now, I don't write any code.

**Adam Stacoviak:** He's saying no, Jerod. He's saying no. \[laughter\]

**Jerod Santo:** He's a manager... \[laughter\]

**Adam Stacoviak:** He's saying no.

**Jerod Santo:** Well, we've come to an impasse, because I also don't write code anymore, so... There we go.

**Mikeal Rogers:** \[laughs\] Yeah. But there's a lot of great sites that will mint NFTs for you. Everything from Foundation, to Rarible, and all these different sites. And honestly, your use case will sort of direct you to the one that makes the most sense. If you're working on an image, for instance, there are places that are doing a really good job, and have the whole experience around selling those images. There are some that specialize in things that look like trading cards, and they do card format.

**Adam Stacoviak:** What about mp3's?

**Mikeal Rogers:** That is a good question... There are a bunch that I've seen that do mp3's. I don't know which one would be the favorite one. I haven't walked through the flow of minting it yet, but there's a few that have been doing it.

**Adam Stacoviak:** Yeah. What you said though about how it's not so much the value of the thing, the NFT, the value of it to buy it; it may have some sort of value, but this whole idea that owning that can enable you to have access to other things - that is really the clincher for me to really understand the value of NFT... Because for a long time there I'm like "What are you actually owning? What are you actually buying?" But in the case where - Jerod, since you've mentioned it - NFT-ing mp3's, if we (just hypothetically) NFT-ed every single mp3 we ship as a podcast, our fans can buy into those; we can contract x NFT abilities of it, however you term that, however many times you can NFT it, sell it, or whatever the term that is... And then we can also share maybe the intrinsic value of that back with our guests.

So in future sales, not just Jerod and I or Changelog Media our company profits, or whatever gains from it, but guests can also take some part in that. There's some shared ownership of this shared, collaborative content we create, and then - you know, whatever. Our fan base can buy those, and we can do things where it's like an event, or something more cool than an even, just for people who own Changelog.com NFTs. Just an example. I like that. It's interesting.

**Mikeal Rogers:** I said earlier that what we are already seeing is the Instagram as an open protocol... But that actually kind of under-sells it. It's not just photos, it's any digital media. So it's also podcasts, it's also Twitter, it's also blogging... These feeds can have any digital asset that you ever wanna associate.

\[01:08:06.13\] I think the thing that turns it into a podcast is really just having an agreement about the format and the metadata, so that we can create a unified experience around everybody doing this. And this is one of the problems that we're looking at just kind of coalescing all of the metadata best practices. So we can just work together and figure out "Okay, what is all the metadata that you care about in a podcast? Let's back it somewhere, and then let's just go off and mint a bunch of these and sell them."

**Adam Stacoviak:** Wow.

**Jerod Santo:** It sounds cool.

**Mikeal Rogers:** Yeah, let's do it.

**Adam Stacoviak:** We've got a thousand mp3's to give you, Mikeal... Let's get you cracking... \[laughter\]

**Jerod Santo:** "Let's get you crackin' on this... \[laughs\]

**Adam Stacoviak:** Let's get you crackin' on this...

**Jerod Santo:** Can you give this back to us in like two weeks? \[unintelligible 01:08:39.25\]

**Mikeal Rogers:** \[laughs\] And all the money goes into your wallet, and I do all the work... Is that it? \[laughs\]

**Jerod Santo:** No... You're the guest, so we're gonna give you a third.

**Adam Stacoviak:** That's right. We're gonna share some of that with you.

**Jerod Santo:** Two thirds, one third, since there's two of us and there's one of you.

**Adam Stacoviak:** We're writing the contract. \[laughter\]

**Mikeal Rogers:** There we go.

**Adam Stacoviak:** Go ahead, Jerod... You were taking us somewhere more serious.

**Jerod Santo:** Well, yeah, the sky really is the limit.

**Mikeal Rogers:** I'll follow up with you guys.

**Jerod Santo:** Mikeal's gonna follow up.

**Mikeal Rogers:** Again, I'm a manager now; I'm gonna hand you off to somebody else to actually do the work.

**Jerod Santo:** That's totally fine with us.

**Adam Stacoviak:** I really do -- I'm being totally honest; I really do think that's an interesting way to consider how you can extend value.

**Jerod Santo:** It is.

**Adam Stacoviak:** Because there's obviously value in us producing this podcast (and podcasts). There's obviously value in our following, people who follow us, or people who pay attention to what we do, and everyone who participates with us in the various podcasts we produce now and we'll produce in the future... And I think that that's the authenticness of it, I suppose, and the ability to contract and design that contract... And I don't know, it's just kind of interesting. I didn't think I'd come on the show today and understand more deeply NFTs, and want to mint any.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I didn't think that was gonna happen.

**Mikeal Rogers:** \[laughs\] I think once you start doing this by default, once this is part of your regular publishing flow, I think it leads to very different relationships that you have as a creator, to your content and to your fans, and what they think of buying these when they come out. Some of them might be just like $100 because "Hey, I really like that episode, and I just wanna show you that I like that episode."

**Adam Stacoviak:** Sure, yeah.

**Mikeal Rogers:** But then the ones way back in the past, people are saying like "Oh, wow. This is actually the first time that somebody talked about this project. I really like that project. I wanna own that NFT." And then you get to watch people trade them, and you get to see what trends are going on. And also, it encourages you to create more content, because the more that they're out there and being traded, the more money is coming back in.

**Adam Stacoviak:** What is it called when an NFT has multiples? So when you could buy more--

**Mikeal Rogers:** Yeah, you can fractionalize it.

**Adam Stacoviak:** Fractionalization? Okay.

**Mikeal Rogers:** There's another specification that builds on the NFT specification, that talks about how to fractionalize them. And then there's a few people that have actually built secondary protocols on just regular NFT tokens to fractionalize them. Different people are working on that in different ways. I think that is hasn't quite shaken out which one is gonna win. If I was gonna bet, I'd say ERC-1155 would be the thing that wins. The spec...

**Adam Stacoviak:** Wow, that's very specific.

**Jerod Santo:** That'd be my bet, too... \[laughs\]

**Adam Stacoviak:** I'm with you on that one, Mikeal...

**Mikeal Rogers:** Okay. \[laughter\] One of the tricky things here is that if you do this really early and you do the thing that doesn't become the popular thing, then you won't be compatible with all of those experiences in the future.

**Jerod Santo:** That's what I was just thinking, because there's like a permanence aspect to this, and yet it feels like such shifting ground right now. Things are moving and changing, and we don't know what's gonna shake out. You said you're coalescing formats... It's like, "Well, in the meantime, I might just get coalesced with my format." You know, like "Oh, you didn't consider mine? Okay, I guess I'm out here on the island." So it's somewhat speculative, even in technology choices and stuff.

**Mikeal Rogers:** Yeah, yeah. I mean, some stuff, like the metadata file, and some of the base properties - those are really well established, and people have already built compatibility around them... So we're looking at just extending all of those for things like podcasts, video... All the other media types. We just wanna figure out what the properties look like, publish a spec so that people mostly fall in line with it. That part of it is really easy.

**Jerod Santo:** \[01:12:12.00\] Yeah.

**Mikeal Rogers:** But when you look at fractionalization, you need to look at that data on chain, and be able to expose an experience of some sort around that fractionalization that may be different than owning an entire token... And how does that work, right?

**Jerod Santo:** Yeah...

**Mikeal Rogers:** Like, when I fractionalize a piece of art, do I really show that piece of art the same way in everybody's gallery, or is there something that says \[unintelligible 01:12:33.03\]

**Adam Stacoviak:** You get the last ten minutes, you get the middle ten minutes, and someone else get the ten minutes at the start. You break it up into thirds. Cut you mid-sentence even.

**Mikeal Rogers:** There's a few ways to look at fractionalization... One is to say "Okay, why don't you just do a series of individual NFTs that all have things slightly different with them?" rather than relying on the protocol to fractionalize it.

**Adam Stacoviak:** Sure.

**Jerod Santo:** Right.

**Adam Stacoviak:** You could even have tiers, too.

**Mikeal Rogers:** Yeah. I mean, CryptoPunks - each one is a unique punk, but there's thousands of them that were all published at the same time. If you think about publishing a new album, you can just do cool variant covers with artists that you like, and people will buy the different variant covers. You can do this with comicbooks. They already do that with comicbooks.

**Jerod Santo:** Totally, yeah.

**Mikeal Rogers:** Just sell each one as an NFT; the value of it is gonna skyrocket, because there's only one, but you can do variant covers when you're doing a big release.

**Jerod Santo:** I'm excited to see what people do with this, because the ideas just start flowing, and we're just at the beginning... So I think it's gonna get exciting, and just probably weird, insane... You know, it's gonna get weirder; it's already kind of weird.

**Mikeal Rogers:** Oh, yeah. You're gonna have super-weird stuff. It's gonna be great.

**Jerod Santo:** There's a very much -- like, it's so web. The cool part of the web is just like what people do with this new idea.

**Mikeal Rogers:** Yeah. One that I saw recently - and I haven't bought one yet, because they're like $150; so you can get an NFT for three emojis. So you line up three emojis together and then you get an NFT for that.

**Jerod Santo:** So you pick your three.

**Mikeal Rogers:** Yeah, yeah.

**Jerod Santo:** And no one else can do those three, or anybody can?

**Mikeal Rogers:** You're the only person that's ever gonna get those three, because of the way that they --

**Jerod Santo:** Oh, I've gotta get to work... \[laughs\]

**Mikeal Rogers:** Yeah... But they're like $150 apiece, so you've gotta be picky...

**Jerod Santo:** Yeah, that's too much.

**Mikeal Rogers:** But you can imagine something like that -- if that really took off, that could be something like a Gravatar service. Those are really showing up next to people's profiles as \[unintelligible 01:14:21.11\]

**Jerod Santo:** It's like your signature.

**Mikeal Rogers:** Yeah, this is their emoji signature.

**Jerod Santo:** Right. Can you negotiate? Can you be like "I'll give you $75 for it."

**Mikeal Rogers:** I believe this site is standardized on that for the base price of them.

**Jerod Santo:** Okay.

**Mikeal Rogers:** I think that any of the people who have already minted them are probably in the secondary market, going for more than that.

**Jerod Santo:** \[laughs\] I love the idea of a secondary market for...

**Mikeal Rogers:** Everything? \[laughs\]

**Jerod Santo:** ...three emoji.

**Mikeal Rogers:** There's a secondary market for everything now.

**Jerod Santo:** I'm gonna come up with a new idea. It's called fouremoji.com.

**Mikeal Rogers:** \[laughs\]

**Adam Stacoviak:** I've got a new one... 5-minute abs. Nah, I'll do 3-minute abs.

**Jerod Santo:** Exactly.

**Mikeal Rogers:** Oh, man...

**Jerod Santo:** Okay...

**Mikeal Rogers:** Nobody's gonna get that reference, but I love that you've put that in.

**Jerod Santo:** \[laughs\] Well, we're just trying to crank up the value of this NFT on this episode.

**Mikeal Rogers:** I don't think that -- like, people younger than 35 maybe have not seen something \[unintelligible 01:15:10.27\] if you were the right age in that year, you saw it... But it's not something that people really go back to.

**Jerod Santo:** Also, my references fall dead on the ears - especially on JS Party, even all the panelists, they're always like "What are you talking about?" I'm like, "You had to be there, I guess. You have to be in your late 30's to get it, or older." So I'm glad you're here, Mikeal... And Adam, of course. Him and I are right in the same wheelhouse.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Well, anything else we didn't cover? Did we do it justice? Is there anything that we missed?

**Mikeal Rogers:** Yeah, I feel like we got into everything.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** The only piece that I think is maybe missing is people's concerns around climate change and around the energy use, and that kind of thing. This perceived non-valuable piece of art, sold for X, but it actually costs X in energy... And \[unintelligible 01:16:00.07\]

**Mikeal Rogers:** \[01:16:04.26\] First of all, coming back to that, differentiating between problems that are current technical limitations versus things that we actually have an incentive to solve... Everyone has an incentive to reduce the energy consumption. It is only a cost center. And if you look at what's happening broadly in blockchains, we have figured out how to get the energy cost down. Those algorithms exist, they're implemented in several chains... Ethereum is planning on moving to one of them, so Ethereum will be on one of these that uses significantly less energy...

It is totally unclear to me how and when Bitcoin would ever do something like this... So Bitcoin may be just always using this much energy, and maybe that's the downfall of the protocol. Maybe that's why people stop using it at some point, if they can't make that migration... But I think if you're looking at the ecosystem overall and the technology overall, we're already moving past that particular problem, and we're getting the energy consumption much closer to just what you use in cloud computing and mobile and stuff like that.

I don't know when your first computer was, but mine had a power supply the size of about 20 iPhones, and it consumed about as much power I think as 20 iPhones maybe, for a fraction of the compute. That went down, and this is all just kind of coming down over time.

**Adam Stacoviak:** I'm glad I saved that for the end then... Because that's the less fun part of it. It's important to talk about that though, but I think that's why maybe it gets the least amount of attention paid to it... Because it's just not the fun part. Developers wanna develop, not talk about energy consumption... Except for maybe as you correlate your compute power of your computer to the battery power of, like you'd mentioned, your first computer, for example. That's interesting to think about. But generally, plug it in; does it work? Okay, cool. Let me work.

**Mikeal Rogers:** Yeah. And if you're just worried about your actions potentially contributing to this problem - which I think a lot of people are worried about - don't use Bitcoin, and pick a chain that's already on proof of stake, that's already low power consumption.

**Adam Stacoviak:** What's proof of stake?

**Mikeal Rogers:** So rather than proof of work, which is like proof of this nonsense computer operation, it's a proof of your stake in the network, essentially. I won't get into the details of what stake means, because it tends to mean something slightly different in different chains...

**Adam Stacoviak:** It's fungible?

**Mikeal Rogers:** \[laughs\] What that means in different contexts and different chains kind of varies, so I wouldn't wanna get really, really specific about that. But the NEAR protocol flows on a proof of stake. Ethereum is moving to proof of stake.

**Adam Stacoviak:** Gotcha. It's been a fun journey, NFT land...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Hey, check them mp3's out in the near future. You might have some fun experiences and NFT action for you listeners.

**Jerod Santo:** Follow Mikeal on Twitter for when he announces our new NFT \[unintelligible 01:18:43.21\]

**Mikeal Rogers:** Yeah... \[laughs\] I don't tweet much, so that would be one of the few tweets.

**Jerod Santo:** Perfect. And then we'll sell your tweet as well, so \[unintelligible 01:18:52.07\]

**Adam Stacoviak:** That's right.

**Mikeal Rogers:** There you go, there you go...

**Jerod Santo:** That's how you really make that ETH...

**Adam Stacoviak:** Oooh... I like this.

**Mikeal Rogers:** Well, I'll have to get a share of that tweet, I think...

**Jerod Santo:** Exactly.

**Mikeal Rogers:** \[unintelligible 01:18:59.16\]

**Adam Stacoviak:** We'll write it in the contract, don't worry.

**Jerod Santo:** \[laughs\] \[unintelligible 01:19:03.06\] the contract, didn't you?

**Adam Stacoviak:** I appreciate you, Mikeal. Thanks for sharing this journey down the NFT land. It was a fun trip, thank you.

**Mikeal Rogers:** Yeah, awesome. It was a great time
