**Natalie Pistunovich:** So we are here for episode number two on the topic of what is new in the crypto library. We have a really long list of things that we did not cover in part one... And to help us do this better this time, we also brought on board Nicola, who is joining Filippo and Roland. And for everybody who did not listen to the first episode, why don't we do another round of introductions?

**Nicola Murino:** Thank you for inviting me. I help Filippo and Roland in maintaining the CryptoSSH since July.

**Filippo Valsorda:** And I'm Filippo. I've been doing maintenance on the Go cryptography libraries since the 2018. I was doing it at Google with Roland, and Katie Hockman, and Damien Neil, and \[unintelligible 00:01:26.17\] until 2022. And I'm now doing it as an independent maintainer.

**Roland Shoemaker:** And I'm Roland. I'm one of the people on the Go security team. I've been around for... Some amount of time. Three or so years, I think... But I worked on Go as an outside maintainer for a while before that, as an engineer at the LetsEncrypt project.

**Natalie Pistunovich:** Filippo and Roland, did you meet Nicola at Latin class? \[laughter\] We were just talking before the beginning of the episode how you all learned Latin at school.

**Filippo Valsorda:** In Italy it's a very common thing, and we were talking about the fact that it's not that hard when the language is so similar. Roland may have had a harder time.

**Roland Shoemaker:** Yeah, I think the only Latin I remember is rather rude, so I won't repeat any of it... \[laughter\]

**Filippo Valsorda:** I mean, that's the secret, though... Everybody thinks of studying Latin as this rarefied, high discussions about the maximum systems of the -- no, no. Seriously, they were pretty crude.

**Roland Shoemaker:** Yeah. I know a lot of ways to insult Romans, but... \[laughter\]

**Natalie Pistunovich:** Like what?

**Roland Shoemaker:** Well, there was a comicbook that I read, that had the explanation for the acronym SPQR is Sono Porci Questi Romani... \[laughter\]

**Natalie Pistunovich:** Which means...?

**Roland Shoemaker:** Which, you know... "They're pigs, these Romans."

**Filippo Valsorda:** I am recording from Rome... \[laughter\]

**Natalie Pistunovich:** What did you have for lunch? Yeah, I guess that word is familiar from pizza menus... \[laughs\] Okay, so a brief recap of what we did cover in the first episode of what is new in the crypto library for Go is: TLS 1.0, we talked about math/big, about crypto/ecdh, about SHA1 and MD5 deprecation maybe, about Go bugs... About some things that are planned for the future, like safer higher-level APIs, and we briefly touched the SSH library, that is under x, to which we will go back later. But now we want to talk about moving from pre-quantum to post-quantum. And before we talk into that, I want to say that I looked up how to say \[unintelligible 00:03:57.26\] the middle, what is between pre and post, and this is nunc. So let's talk about nunc quantum. And then post-quantum.

**Filippo Valsorda:** I think everybody is starting to not like post-quantum, by the way, in the community, and they're starting to look for news suggestions, new words... So I'm going to suggest that.

**Natalie Pistunovich:** What is the meaning of quantum in Latin? How does that translate? I have ChatGPT here, so that's not a fair question... It's okay if you say you don't know.

**Filippo Valsorda:** I think it's a small unit, right? It's a singular unit.

**Roland Shoemaker:** Yeah. Often you will talk about a quantum of something. A quantum of data. But I don't think that has any relation to the actual technology. I think they just pulled this --

**Filippo Valsorda:** Because they think it comes from quantum mechanics, right? The mechanics of fundamental particles, and using those, you can make computers that do things a little weird, and they're superpositions... And I'm not qualified to explain any of this, in fact. \[laughs\]

**Roland Shoemaker:** I think it is all beyond all of our paygrades.

**Filippo Valsorda:** So yeah, that's the fun thing about post-quantum cryptography, is that we don't do it on quantum computers. The point is that quantum computers might come, and we don't understand much about them. But when they come, they might break all of the stuff we're currently doing with cryptography... And so we have to implement some older cryptography, that people who do know how quantum computers work, think are not going to get broken by quantum computers. And then there's bickering about what being broken means, and how to measure that, and we don't talk about that debate. \[laughter\]

**Roland Shoemaker:** Yeah, it's all very theoretical... But if someone does come up with a good way to break the current cryptographic primitives, we're in real trouble... So just on the off-chance that has been all of this work of trying to figure out new algorithms, which will not be susceptible to these very specific things that quantum computers are good at doing... Which leads us to the new NIST drafts. I don't know if you want to talk a bit about that, Filippo...

**Filippo Valsorda:** \[00:06:08.15\] Sure. So NIST has run a competition where a bunch of independent scientific groups submitted various proposals, and then they ran a bunch of selection rounds, and they finally selected \[unintelligible 00:06:21.23\] exchange. Two signatures... Two?

**Natalie Pistunovich:** The NIST is the National Institute of Standards and Technology.

**Filippo Valsorda:** Yes. Which does things like specifying cryptography like AES and SHA, but also, you can buy from NIST a sample of the reference peanut butter. It might be the most expensive peanut butter in the world, and it's exactly the reference peanut butter that you can use to configure your machinery that needs to process peanut butter, or something. I don't know, NIST is a weird institution.

**Natalie Pistunovich:** Cool.

**Filippo Valsorda:** But yeah, so just like they have the peanut butter person, they also have the cryptography people. And the cryptography people select algorithms, and they then make standards, which are the FIPS: the Federal Information Processing Standards... Which define how the government, the US government processes things. That's a fairly US-centric process, but the community kind of came together around this one. I think a bunch of the submissions are not even from US scientists. And European governments already signaled that they like the things that NIST selected, and that they're going to implement the same things. So the good news is no brain pool this time, no German-only curves, no \[unintelligible 00:07:38.18\] I don't know. There will be the Chinese and Russian versions... But hopefully, we'll standardize mostly on these few algorithms. And they do the things that our old algorithms did, they just do it with a lot more bytes, unfortunately, but also, hopefully, they're not broken by quantum computers. So... Pros and cons.

**Roland Shoemaker:** They're all significantly slower as well, right?

**Filippo Valsorda:** You know, I was about to say that... But they're not. Kyber is faster than X25519. I was under the impression that they were slower, but I don't actually think that's the case.

**Roland Shoemaker:** Well, that's good.

**Filippo Valsorda:** Yeah, my very unoptimized Kyber implementation is as fast as our very optimized X25519 implementation. And the slowest thing in Kyber is the hash, because they selected SHA3, which is very slow for no good reason. They made it do a lot of rounds of things, and... Anyway, that's a whole story. But yeah, it turns out at least the key exchange is actually faster. I was kind of surprised by that. However, with X25519, you had -- so these are key exchanges. So they are the things where you have a connection, like a TLS connection or SSH connection, and you want to establish keys to encrypt it. And you want to make sure that somebody who's watching and trying to intercept it cannot figure out the key. People might have heard about Diffie-Hellman... That's a key exchange.

So we don't get to do Diffie-Hellman in the post-quantum world. We thought we were going to, and then somebody went and completely broke the algorithm that was closest to Diffie-Hellman, supersingular isogenies. We loved them while they lasted. And we have these things called KEMs, which are key exchange mechanisms, which do a thing that's close enough. So just like we used to use curve25519 to exchange keys, and Diffie Hellman... We can now use things like Kyber, which is now called ML-KEM, because we can't have nice things. The two things selected were called Kyber and Dilithium. Such good names...! And then they went and called them ML-KEM, and ML-DSA. Which one do you want to be saying? \[laughter\]

**Roland Shoemaker:** \[00:09:59.24\] Yeah, the Star Wars/Star Trek names are much better.

**Filippo Valsorda:** Right?! I'm not even a Star Wars and Star Trek fan, and I wanted those names. \[laughs\]

**Natalie Pistunovich:** Nicola, do you agree with the sentiment? Did you also prefer these names?

**Nicola Murino:** Yes. And Filippo, what do you think would be the performance impact of using SHA3 on a common operation, for example an SSH connection? Do you think \[unintelligible 00:10:25.04\] benchmarks in the past, and we chose to not include a SHA512-based algorithm, because the \[unintelligible 00:10:39.09\] So with the SHA3 what is the situation?

**Filippo Valsorda:** So I think the SHA512 algorithms were also using a larger Diffie-Dellman group. And that was the very slow one. So the hashes, I think, are not generally speaking the slow parts here... Except SHA3 is slow, so it happens to dominate the key exchange step... But to give some order of magnitude, I think that both X25519 and Kyber using SHA3 take, I don't know, I want to say... Okay, I don't actually remember an actual number, but let's say they take 10. Finite field Diffie-Hellman with a very large group is going to take like 1000. That's the gap there. Like, there's a 100-fold difference there.

I think SSH is going to be fine... Actually, I think that OpenSSH already has a post-quantum key exchange, except that they selected their before NIST selected one. So yeah, it's not the one we're implementing in the Go standard library, so hopefully they introduce a Kyber-based one soonish.

**Roland Shoemaker:** It seems highly likely that they will, just because that's what everyone else is implementing at this point.

**Filippo Valsorda:** Yeah. And also because, you know, FIPS-140. You want to be FIPS-140 compliant.

**Roland Shoemaker:** Yeah, exactly.

**Filippo Valsorda:** FIPS-140 is one of the standards. It was written for hardware, the things you put in a rack... And it said they have to be sealed, and it has to have an LED that does a certain thing... And when you turn it on with a key, it needs to check its circuits to make sure that it's not broken. And then they went and said "Yeah, that's the standard you should follow for cryptographic libraries as well." Now, can anybody think how you implement that LED in a library?

**Roland Shoemaker:** You just flip a bit. You have a magic bit.

**Filippo Valsorda:** No, actually, seriously... There's a bit in memory. Nothing can \[unintelligible 00:12:36.14\] but you set it to one when the LED should be on, and you set it to zero when the LED should be off. And then when the auditor comes and asks "Where is the LED?", you go "At that address in memory." And the auditor says "Good, good. You are compliant."

**Nicola Murino:** \[unintelligible 00:12:51.25\] global variable.

**Filippo Valsorda:** Yes, I'm not kidding. I'm not kidding. It's the worst. It's absolutely the worst. Anyway... And that's how much I'll say about --

**Nicola Murino:** Long life to global variable.

**Filippo Valsorda:** Exactly, exactly. Anyway... FIPS-140 is a standard you have to comply with if you want to sell your things to companies that want to sell their things to the US government. That's a lot of people, unfortunately.

**Roland Shoemaker:** Yeah, it turns out that's most people.

**Natalie Pistunovich:** Well, the link is in the show notes, in case anybody needs to meet that standard and is not familiar with it just yet.

**Roland Shoemaker:** I wouldn't wish that on anyone...

**Filippo Valsorda:** Exactly... \[laughter\] Anyway, going back to two Kyber... The very annoying thing about these new algorithms is that the keys and signatures and the exchanged things are so much bigger. And that's a problem. Like, with Kyber you're looking at sending on the wire something like 1,300 bytes; you're sending a kilobyte of data... Where with X25519 you are sending 32 bytes. Like, we used to be like "What's another Diffie-Hellman element? Just stick a few in there. Actually, let's make a ratchet where we go from element to element to element, and let's change keys all the time, and let's stick keys inside of keys, out of keys..." And now we can't do that. We get one if we're lucky. A packet might fit one key. Now, that's not great...

**Roland Shoemaker:** \[00:14:24.29\] Yeah, this is gonna be an even bigger problem for signature algorithms. We've been trying to figure out what the PQ, the post-quantum approach to certificate signing is... And the last decade or so has been spent trying to figure out how to make certificates smaller and smaller in terms of the number of bytes that need to be sent over the wire... And now all of the post-quantum signature algorithms result in keys that are -- keys and signatures which are orders of magnitude larger. So all of those gains that were hard fought for over the last decade have just been completely lost, and we now have certificates that are -- I think there were some suggestions where they would be megabytes in size.

**Filippo Valsorda:** Yeah, I don't think we're doing that.

**Roland Shoemaker:** No, I hope not...

**Filippo Valsorda:** Nut still, with things like certificate transparency, we currently have - what, three signatures in a certificate, right? There's the signature over the whole certificate, and then there's the signature from two certificate transparency logs, which are these public registries that sign a statement that says "I promise, I promise I will publish this certificate, so that anybody who wants to know what certificates exist can come look at the registry." Which is very useful, because for example you can sign up for a service like Cert Spotter, which - Cert Spotter is not sponsoring this, but we very much love the operator, because he does great work for the community. And you can sign up for that and say "Oh, I would like to get an email every time a new certificate is issued anywhere in the world, a certificate that would be trusted by browsers, for filippo.io", so that if my server gets hacked, or a CA makes a mistake and they issue -- not that CAs make mistakes, to be clear...

**Roland Shoemaker:** Yeah, unheard of. I don't know what you're talking about.

**Filippo Valsorda:** \[unintelligible 00:16:19.03\] I take it back. But you can get an email, and that's nice. But that means these statements went in the certificate. And since signatures were 32, 64 bytes, we were like "Eh, just stick the 64 bytes in there. What's the problem?" Now, signatures are going to be 1000 bytes, a kilobyte or two, and...

**Nicola Murino:** We must \[unintelligible 00:16:47.14\]

**Natalie Pistunovich:** That's why Berlin does letters... For security reasons, you will never get any password reset from your bank or credit card other than a paper letter, because - not enough internet for those things. Not a joke, this is real, how you have to reset your credit card number. Cipher suite ordering. Tell us about that.

**Filippo Valsorda:** Oh, yes. Okay, so this is a thing I'm a big fan of, and a lot of people hate me for it, I think... But this is about making things less configurable. Because that's been a theme - we talked about it in the last episode, we like to put fewer options in, and take care of things for user.

**Natalie Pistunovich:** For those who didn't listen, a one-line recap - what are we not configuring?

**Filippo Valsorda:** Well, because we should do our job and know things about cryptography so that good developers don't have to do our job and know things about cryptography.

**Natalie Pistunovich:** So for example, things that are right now configurable, but this is making them less?

**Filippo Valsorda:** Well, before you could decide whether you liked better TLS RSA with AES 256 GCM SHA384, or TLS ECDHE ECDSA with 3DES EDE CBC SHA? Now --

**Natalie Pistunovich:** \[00:18:12.29\] That sounds like our next Twitter poll... Better than unpopular opinion poll. I will ask you to write that down in the show notes at the end, and we will make that a poll, just for the trolleybus.

**Filippo Valsorda:** Done! \[laughs\]

**Roland Shoemaker:** These cipher suites are so obscure, and which one is better than which is so obscure. Basically, in every guide of how to set up Apache or any server, one of the steps would be you go to the Mozilla website, and there's a tool that they had which would generate the correct list of cipher suites in the correct order to put into your web server. And everyone just went and used the list that they suggested, because there's no reason for any normal person to either know about this, or care.

But then sometimes something happens and then you have to change your mind, because the list order has changed, because - I don't know, something turned out to be more broken or less broken... And so you have to update your context, because your opinion has changed; because you had an opinion on those. And by the way, I picked those two as a trick. People might have heard 3DES and thought "Oh, but that's from the '80s. I know the answer. It's the one without the thing from the '80s." And you would be wrong. The one with the algorithm from the '80s is actually stronger than the other one. Why?

**Natalie Pistunovich:** That's gonna be the second poll. "When you heard that, did you think of the thing of the '80s?" \[laughter\]

**Filippo Valsorda:** I don't know, is 3DES from the '80s?

**Roland Shoemaker:** Something like that...

**Filippo Valsorda:** First published in 1981. And - yup, still doing better than the other thing, because the other thing doesn't have forward security... Which I could spend a bunch of time talking about. Or I could talk about how we took away the ability to choose the ordering for all of this stuff, and now we decide which ones are better. So for TLS 1.3 I actually somehow succeeded at pulling off not putting a config option in at all. You can't turn them on, or off, change the order... There's just not a config option. And people are kind of upset at me about that one.

**Nicola Murino:** That's much better in my opinion, because for example when I write an app, my \[unintelligible 00:20:27.07\] very obscure, even for me... I simply exposed them to end users. \[unintelligible 00:20:39.20\] They are not configurable, and the defaults are chosen by people who know what they do. So it's much better. I prefer this approach a lot.

**Filippo Valsorda:** And some people were upset, but you know, still, I think I pulled it off. For TLS 1.0 to 1.2, it would break too many programs to say "Oh, actually, we'll pick which ones to enable, and that's it." However, one thing we could take away was the order in which they're selected... Which might sound silly; like, what does the order matter? Well, the order matters, because if you're selecting five good ciphers and one bad one, I have to worry that there are applications out there that might have put the bad one at the top of the preference list. So any client that has support for that, for backwards compatibility reasons, will end up negotiating a very bad algorithm, when it couldn't use a good one. And so we would have to have these conversations where we'd be like "Well, do we remove it because it's kind of broken?" It's not so broken that you wouldn't want it ever, but you would definitely not want it if you had any other option. But we have no way to make sure if somebody is using it, because they don't realize; they just sorted them alphabetically maybe, or something... And so we would have all these difficult conversations around backwards compatibility... Because if you listened to the last episode, you know that the hard part of our job is neither quantum computers nor algorithms, but it is backwards-compatibility. \[laughs\]

\[00:22:16.07\] So we have all these very difficult conversations... And then instead now, with this change, the order is picked entirely by us. You can select them, but we know that if you selected anything else that's even slightly better than this, it will be used before we fall back to that. And that's important, because for example there are some old Android phones that will never get upgraded, because they were sold before Android knew how to force carriers to update phones. And you want your server to still serve connections from them, but you want to make sure that just because you serve connections to them, you're not going to be less secure when somebody else connects, right?

So with the fact that we handle the ordering, we can make sure that we will only go to the terrible algorithm that is the only thing Android phones support, only if it's the last resort. So yes, I get excited about the small things about backwards-compatibility, what can I say...

**Roland Shoemaker:** It also it also lets us do some fancy tricks about how we decide what the ordering is, right? We have special logic in to determine if your computer has hardware support for certain algorithms. We can increase the priority of those algorithms in order to make you get better throughput on your connections... Whereas if the user picked them, it would be a bit awkward to say "Well, actually, we've decided that we are going to reorder your specific ordering decisions, because we know better." But now we can just say "We always know better."

**Filippo Valsorda:** Yes. What Roland is hinting at is that there's this cipher which is called AES, which was selected by NIST etc, etc. And back then, cryptography was more about a thing you did in hardware with special chips, and with machines, with keys and LEDs, and FIPS 140 certifications, and all that. And so they designed an algorithm that's pretty easy to implement in silicon, where you can draw out a blueprint and make the paths go through here, and you go like "Yeah, electricity goes through here at the same time", and that's how you make things go fast and simultaneously.

And then the world changed, and now we implement most stuff in software. And implementing AES in software turns out to be very difficult, because you have to read something from a table, but if the attacker can tell a slot in a table you read it from, they can just \[unintelligible 00:24:51.29\] the key... Because as Swift on Security says, cryptography is math that cares what pen you use to write it. So the result is that --

**Natalie Pistunovich:** Wait, what does that mean?

**Filippo Valsorda:** Well, normally, if you just write the math, it's correct, regardless of what you use to write. And I think what Swift on Security was getting at is that in cryptography instead you have to worry sometimes about side channels, and stuff like that, where you might have written your program correctly, but since you took more time or less time, or maybe you accessed the cache or the memory in a certain order...

**Natalie Pistunovich:** Right \[unintelligible 00:25:27.22\]

**Filippo Valsorda:** Exactly. Now somebody who's observing what you did -- even if the result was right, like you didn't throw an error, you didn't do a panic... Your tests all pass, there's no way to test this. But since you did it in this way, you touched memory over here, and I know that if you touch memory over here, it means that the first bit of your key is one. And then if you touched memory over here, it means that the second bit of your key is zero. And then you keep going like that, and then you just extract the key, and that's bad. It's generally frowned upon.

\[00:26:02.08\] So the result is that AES is a major pain to implement in software. We kind of figured it out now with a technique called bit slicing, which is basically reimplementing hardware CPU, but in software. It's madness... I don't know if you've ever seen those videos of computers inside Minecraft. \[laughter\] You know, people building computers by using redstone, and switches, and torches, and so on... Right. So the bit slicing is sort of like that, which really makes me think we should get all these kids who build this stuff in Minecraft and ask them if they have nice ideas for fighting side-channel attacks in cryptography algorithms.

**Natalie Pistunovich:** That's actually not a bad idea. \[unintelligible 00:26:44.06\] right?

**Filippo Valsorda:** Right. Also, lots of people who start by reverse-engineering games, or by doing game mods then turn out to be security engineers. There's a pipeline.

**Roland Shoemaker:** It turns out breaking the controls that developers put on their video games is really good training to break controls people put on secure systems.

**Filippo Valsorda:** It turns out... And it turns out if you can maintain software that's based on an undocumented API that you reverse-engineer every time a new version of a game comes out, and that is willing to break you without even looking back, you actually can be pretty good at writing regular software, too.

**Roland Shoemaker:** Yeah. Than working on a version of Java that's about 18 years old.

**Filippo Valsorda:** Exactly. And patching the JVM so that you can make your shader go a little faster so that you can make \[unintelligible 00:27:34.02\] sparkle, or something.

**Natalie Pistunovich:** JVM is my keyword to move to QUIC.

**Filippo Valsorda:** Yes, actually... \[laughter\]

**Natalie Pistunovich:** What is QUIC, and what does it have to do with a Go library?

**Roland Shoemaker:** I don't actually know what QUIC stands for. It's an acronym, but... So at some point people decided that the HTTP --

**Natalie Pistunovich:** Quick UDP Internet Connections. Not just any UDP. \[laughs\]

**Roland Shoemaker:** Yeah, that makes sense.

**Natalie Pistunovich:** That is a nice trolling.

**Roland Shoemaker:** Yeah. It originates from -- there was a protocol written internally at Google, that was used as kind of a prototype for what became QUIC, that was originally called speedy SPDY.

**Filippo Valsorda:** Oh, man, that takes me back...

**Roland Shoemaker:** And a lot of people who worked on that protocol worked on QUIC. And I think the idea was QUIC is open source SPDY. Or, you know --

**Filippo Valsorda:** IETF SPDY.

**Roland Shoemaker:** IETF SPDY, exactly.

**Filippo Valsorda:** By the way, I googled QUIC to see the acronym, and the first result is an Italian page that says "The QUIC protocol. What it is and how to turn it off." \[laughter\] Like, "Mood..."

**Roland Shoemaker:** A reasonable approach to QUIC... But it's essentially the next version of -- it's often referred to as the next version of HTTP... It's really a more --

**Filippo Valsorda:** Yeah, I think how they ended up splitting it off is that QUIC is the underlying transport protocol of HTTP/3. And HTTP three is both the new HTTP semantics, and...

**Roland Shoemaker:** And the protocol.

**Filippo Valsorda:** And QUIC underneath it. Something like that.

**Roland Shoemaker:** Yeah.

**Filippo Valsorda:** So it's a cake. There's HTTP on top, and that's HTTP/3, and then you have QUIC, where you would have TCP. A QUIC is basically a way to reimplement TCP, because TCP is implemented by your kernel. And people have opinions about that implementation, and then the kernel doesn't change it, and so they go like "Fine. I'll reimplement TCP with black--" No, "...with all of my features, and encryption", and they implement it over UDP, which instead is just packets, right? Because the internet ossified, and now there are two internet protocols, and those are UDP and TCP, and you cannot have another one. If you want another one, you build it on top of UDP, like we has to do back in the days.

**Roland Shoemaker:** \[00:30:01.28\] Yeah. If you look at the old OSI layer diagrams of the internet -- I think the whole point of QUIC is that over time the layers became incredibly complicated and necessarily needed to be interconnected... So QUIC just takes three separate layers and squishes them all into a single layer. The main useful thing to know about it is that it's encrypted by default. I don't think you can have unencrypted QUIC.

**Filippo Valsorda:** I don't think you can, yeah.

**Roland Shoemaker:** Yeah. Unlike HTTP/2, which was supposed to also be encrypted by default, but some people came along and figured out a way to make it unencrypted HTTP/2. QUIC is so ingrained that it is the perfect protocol.

**Filippo Valsorda:** I think this is called the end-to-end principle. The concept that all the layers move to the end points, because the endpoints have the most context about what you need to do. So the TCP stack has to work for every application, while the browser knows it wants to load a web page. So it can make different choices.

One of my favorite facts about QUIC is that it encrypts the headers. Not for privacy, but because they really don't want the network engineers to mess with them. So they just went like "You know what? We're going to encrypt the hell out of the headers, so that you don't get to have an opinion." If that's not the end-to-end principle, I --

**Natalie Pistunovich:** Does this in any way affect crawlers?

**Filippo Valsorda:** Crawlers are probably not smart enough to use QUIC.

**Natalie Pistunovich:** Okay. So this hiding the headers is not relevant.

**Filippo Valsorda:** No, these are the headers that say things like how big the packets should be, and how fast you should set them...

**Natalie Pistunovich:** Okay, okay. Different completely ones. Yes.

**Filippo Valsorda:** Yeah, these are the things like flow control, and all this stuff about TCP that I honestly don't understand.

**Roland Shoemaker:** What it really messes with is middleboxes...

**Filippo Valsorda:** Yes...

**Roland Shoemaker:** These hardware devices that awful companies sell... \[laughter\] I won't say awful. That companies sell.

**Filippo Valsorda:** You said it. You're on the record. "Googler Roland Shoemaker said..." \[laughs\]

**Roland Shoemaker:** But you know, interfere with network traffic to do things, often things you would rather they not do... And that break everything. And QUIC very nicely makes it basically impossible for them to do that.

**Filippo Valsorda:** Anyway, bringing it back to Go. What are we doing with QUIC in Go? So at the bottom of this cake of layers there's TLS, because they very correctly did not reinvent cryptography, and they just said "So we need some keys... So what we're going to do is run the TLS handshake over QUIC, and then we'll take keys out of TLS and then we'll reinvent cryptography and do our own cryptography for transport." But they had good enough reasons for that, and the hard part is the handshake. Once you've negotiated keys, the rest - you need to make little wrapper packets and put a bow on it... But it's easy enough.

So they run the TLS handshake over QUIC, and then they extract some stuff. Now, the problem is that our crypto TLS package was made to run TLS handshakes over TLS and over TCP. And we didn't want to have a fork in the QUIC implementation, because that's bad, but we also didn't want to add a million options to crypto TLS. So Damien Neil and Marten from Protocol Labs --

**Roland Shoemaker:** Yeah, Marten Seemann.

**Filippo Valsorda:** ...who is the maintainer of QUIC Go, which was the external implementation that did have a fork of Crypto TLS, which we did break regularly every release, which did cause a lot of breakage in the ecosystem, which was why Homebrew couldn't update to their Go version for a month every time a new Go version came out... So all of that was not great. So now there's a bunch of crypto TLS APIs that are a very small hook into the crypto TLS library, and that don't make me terrified of the complexity that was added, and they allow QUIC implementations, both the one that -- is it coming in standard library, is it not?

**Roland Shoemaker:** \[00:34:08.28\] It's in 1.22. I don't think you can really use it, but...

**Filippo Valsorda:** Oh. Wait, the QUIC implementation, or the TLS APIs?

**Roland Shoemaker:** Oh, the TLS APIs --

**Filippo Valsorda:** Yeah, the TLS API has been there since '21, I think.

**Roland Shoemaker:** Yeah.

**Filippo Valsorda:** Cool. And also QUIC Go now uses the new TLS API in Go 1.21, so now you can upgrade QUIC Go and it will not break. Well, you can upgrade Go and it will not break QUIC Go, and we're all very happy about that. Now with that, and the fact that Brad's package that breaks non-moving GC doesn't break anymore, I think we can go back to upgrading Go and nothing should explode.

**Roland Shoemaker:** Fingers crossed...

**Filippo Valsorda:** Because our job is about...

**Roland Shoemaker:** Backwards compatibility.

**Filippo Valsorda:** Correct. \[laughs\]

**Roland Shoemaker:** And now forwards compatibility as well.

**Filippo Valsorda:** Oh, boy...

**Natalie Pistunovich:** Just finding the right link, because apparently when you search for the show notes, if you want to add the link to the Go implementation, or like the official Go implementation, it's not in the first five results. But I bet I will find this. I've found something on a package TLS.

**Roland Shoemaker:** I think, yeah, a lot of the QUIC stuff is currently hidden away in an internal package, so that you can't mess with it too much... Because it is still -- it's still almost definitely a work in progress.

**Natalie Pistunovich:** So what would be a good practice for this?

**Roland Shoemaker:** I'm not sure. I think we have an issue somewhere that discusses the roadmap for QUIC, but... It's a very good question. I could find the link for you and send it to you later.

**Natalie Pistunovich:** So just not use this here, just know about this, or what would be your recommendation?

**Roland Shoemaker:** Yeah. QUIC is unlikely to be something that most people directly interact with... It is something that should mostly be completely transparent to users. You will make an HTTP request and our underlying implementation will use QUIC if the other endpoint also supports it...

**Natalie Pistunovich:** For the network engineers, I'll leave the link there.

**Roland Shoemaker:** Yeah. I suspect most people will just be happy that it's happening, and won't have to do anything. Fingers crossed.

**Break:** \[00:36:18.12\]

**Natalie Pistunovich:** Alright, let's talk then about the new pathbuilder and the parser.

**Roland Shoemaker:** We can do this very quickly... \[laughter\]

**Filippo Valsorda:** Roland. All yours.

**Roland Shoemaker:** These are old -- not old, but these were major X.509 changes that we made for TLS -- the authentication layer of TLS uses X.509 certificates, and X.509 uses an encoding language called DER, the Distinguished Encoding Rules... Which we've had a -- Adam Langley, who wrote a lot of the original crypto libraries, wrote a parser for it that uses reflection, which is something we offer in Go but is... I can't say terrible, but it's quite slow. It's a very interesting language feature, but it's kind of painful. And he wrote it using this because - he said to me, the reason he wrote it using reflection was he had never used the language that had reflection before, and he thought it would be an interesting thing to use reflection for.

**Filippo Valsorda:** I did not know this...

**Roland Shoemaker:** Unfortunately, this turned out to have been a bad decision. And it was very slow, in part because it had to allocate a lot of small bits of memory all over the place. So I think it was in 1.20 or 1.19, we changed -- we have this new library called Cryptobyte, which is a way to write explicit passes, where you know the structure of your data and you can very efficiently pass it... So instead of using reflection and needing to support every single type in the Go typesystem, we could write an explicit parser that says "I know exactly what the format of this certificate should be, and I can just pass it in one fell swoop."

**Filippo Valsorda:** Yeah. For comparison, \[unintelligible 00:39:53.24\] you would make a struct with an int, and a byte slice, and with some tags... Which is like JSON does. Instead, with Cryptobyte there's a function that says "Hey, read an integer from the string. Great. Now read this other thing from the string. Great. Now read another value from the string." And you just call those one after the other and you put code in the middle if you need to check something, and it's much more explicit. A little more boilerplate, but this is Go. We like boilerplate.

**Roland Shoemaker:** Yeah. And because it knows exactly what it's doing, it needs to allocate a lot less, and it's a lot faster. So the top-level takeaway here is that we managed to speed up certificate passing by something like 80%. It got incredibly quick, which took away a big amount of overhead for TLS connections, which was very nice.

**Filippo Valsorda:** And solved problems I had left behind, like "Oh no, we are parsing certificates in a hot path, and we don't know what to do about that. We'll have to add caches, or do very smart things", and then Roland came along and made it all faster, and now it's not a problem anymore. Cheers.

**Roland Shoemaker:** Well, we still \[unintelligible 00:40:57.23\] anyway... But that's another story. But maybe we should move on to SSH. I think X.509 is my pet project, but I think I'm one of about 15 people in the world that finds it interesting, so...

**Natalie Pistunovich:** Okay, Nicola, what are you excited most about in the upcoming changes for SSH?

**Nicola Murino:** \[00:41:20.03\] Yes, there are a lot of changes we added in the last month. For example, \[unintelligible 00:41:26.21\] So recently, we added a new implementation to avoid passive network \[unintelligible 00:41:53.24\] The idea is simple, because the client can just emulate a keystroke at a fixed interval. If there is no activity, for example if you stop typing, the client can send some packet. So since SSH is a client-server protocol, there are already a lot of messages defined to exchange the data between the client and the server. And the client may use one of the existing messages to emulate a keystroke. This will be the simplest thing. Unfortunately, this does not work, because the existing packets, the existing messages have two limitations. The first one is their size. They are too big. So a network observer can detect if a data is a keystroke or not the keystroke.

Another limitation is that there isn't a message allowing to send a sequence of bytes, and retuning the same sequence of bytes. For this reason, OpenSSH, the leading SSH implementation, added the protocol extension at \[unintelligible 00:43:19.28\] classical ping. You send some bytes, and the service sends back these bytes. So a client may use this pig message to emulate the keystrokes. Obviously, a client cannot send this \[unintelligible 00:43:43.28\] unconditionally. There is the need to advertise this feature.

**Filippo Valsorda:** Because as usual, our job is about... Backwards compatibility. \[laughs\]

**Nicola Murino:** Yes. We cannot break fix, because people are very angry if we \[unintelligible 00:44:03.23\] So we cannot do things like this. And for this reason, the protocol, this new extension is advertised using the standard \[unintelligible 00:44:18.25\] and the extension is called ping@openssh.com, version zero. Soon after the this featured shipped in OpenSSH, after a few days we added it to our Crypto SSH library. Generally, we are not so fast. But this time...

**Filippo Valsorda:** Yeah... That's something I'm very proud of, and for values of proud where I'm proud of the work other people are doing... Because the ex Crypto SSH package didn't have an active maintainer I think for the past year and a half, couple of years... And so --

**Roland Shoemaker:** I think perhaps longer than that...

**Filippo Valsorda:** Perhaps longer than that, yeah... And so how it was maintained was that I would just go and extinguish fires when they were really, really big, and otherwise nothing was happening. It was so far behind Open SSH, which, as Nicola was saying, drives a lot of the progress of the protocol. And instead, this one - I think we actually merged it... We had the CL ready before the Open SSH release, and merged it just a few days after it came out.

**Nicola Murino:** We started to work on this feature basically \[unintelligible 00:45:40.20\] was ready before Open SSH released this feature. And it was merged just after they released the latest Open SSH merge.

**Filippo Valsorda:** And the reason this is happening, by the way, is that Nicola is now working on maintaining that. Thanks also to all the funding from my clients, which -sorry, I'm not going to say the whole names. This is not a sales pitch. But yeah, I'm so happy we could get Nicola to do that maintenance work.

**Nicola Murino:** \[00:46:14.06\] Of course, I don't work alone on these. Filippo helped me a lot, Roland helped me, Russ, others Go team members helped me in the approval process, because there is a very formal approval process before the shipping a new feature... Because we have to keep backward compatibility. \[laughter\]

**Filippo Valsorda:** Because our job is about... Backward compatibility.

**Nicola Murino:** Sometimes you cannot to be too fast to ship a feature, because we have to think about the impact on our users, and if this feature introduces a breaking change.

**Filippo Valsorda:** Yeah. Before Nicola was around, one of the things that developed into a big fire was SHA2 support. So basically, SSH, the protocol was hardcoding SHA1 in some places, and SHA1 is a hash that has a collision issue now. You can make two things that hash to the same SHA1 hash... Which might sound like a party trick, but it's actually very annoying, because the security properties of some things rely on that not happening. So we've been moving off SHA1 for the past 20 years, I think... 25 by now... And OpenSSH finally moved off and started turning off the SHA1 things. And guess who had not implemented SHA2 yet? Well, not SHA2 in general; we've had SHA2 since the dawn of time... But did not implement the SHA2 extensions to replace SHA1 in SSH.

**Nicola Murino:** \[unintelligible 00:47:47.15\]

**Filippo Valsorda:** Of course!

**Nicola Murino:** \[unintelligible 00:47:58.19\]

**Filippo Valsorda:** And then at some point they -- I think GitHub was about to turn off their SHA1 support, and they had this nice blog post being like "Here's our roadmap. If anybody's still not supporting SHA2, they should probably do something about it." And I wanted to find the engineer who wrote those and ask if there was a between the lines "Looking at you, Go..." \[laughter\]

**Roland Shoemaker:** Well, it wasn't just GitHub, was it? It was also OpenSSH that ended up removing--

**Filippo Valsorda:** OpenSSH had turned it off months earlier, but all of the distros had turned it back on in their configs, except Fedora. So we were actually already broken on Fedora. But it turns out that being broken on Fedora does not get people with the pitchforks out, but not being able to connect to GitHub --

**Nicola Murino:** Also \[unintelligible 00:48:42.08\] On ARC I was the first one who noticed these breakage. Initially I didn't understand what is happening. "My test case on continuous integration systems works fine. On my PC it doesn't work anymore... What's happening?" \[laughter\] It was really funny.

**Roland Shoemaker:** Yeah. Also importantly, the version of OpenSSH bundled with macOS was updated to the --

**Nicola Murino:** Yes. Indeed, Filippo added this support as soon \[unintelligible 00:49:18.00\]

**Filippo Valsorda:** So yeah, it turns out, break the maintainer. That helps. \[laughs\] But yeah, so I shipped initial support for that, but then foreshadowing - Nicola, you were the first one to notice the breakage, but little did you know that it would become your job to then clean up \[unintelligible 00:49:40.16\] Because it was such a painful upgrade, actually. Nicola, do you want to tell us about it?

**Nicola Murino:** Yes. Basically, the feature support was something \[unintelligible 00:49:52.02\] because it took some time before people realized that there was another breakage. So it was something to do.

**Filippo Valsorda:** \[00:50:07.14\] In my defense, OpenSSH itself implemented this wrong for the first five versions.

**Nicola Murino:** This is exactly the breakage I'm thinking about, because after the initial support we started to get reports because all the OpenSSH versions don't work properly, because their bug, also some old version of gpg-agent, stopped working... And so we added a lot of new \[unintelligible 00:50:37.19\] Basically, our problem was that we have a senior interface that was unable to advertise the supported algorithm... So you can just assume that all algorithms are supported, but this is not applicable anymore. So we needed to introduce a new interface, a multi-algorithm to the senior, and advertise the supported algorithm so you know the supported algorithm and you can choose the one to use for signing. This is our way to fix the issue, because supporting the multi-algorithm signing allowed us to provide the ability to restrict and choose client-side, server-side, and also a certificate signing algorithm... Because one of the biggest issues with OpenSSH are the certificates that are a different standard from X.509 certificate; it's something different, and this introduced a lot of issues with the old OpenSSH versions. Since a few days we merged the latest fix, so I hope we have a normal regression in this area... At least for a while.

**Filippo Valsorda:** Don't say that... Don't say that... \[laughter\]

**Nicola Murino:** \[unintelligible 00:52:10.25\]

**Filippo Valsorda:** Do not say that... I mean, we joke that our job --

**Natalie Pistunovich:** Christmas freeze is coming...

**Filippo Valsorda:** We joke that our job is backwards compatibility, but the OpenSSH protocol has been at two point something since 2006. I just checked. So there's a reason they have so much complexity layering and layering... And they did a better job than TLS did at the time, but some of the results are maddening. Because for example, the change Nicole was talking about had to deal with the fact that there used to be just key types. You know, if you use the RSA key type, you make RSA signature, and that's it. If you use a ECDSA key, you make an ECDSA signature. But then they went like "Well, you might want to use the RSA key to make a signature that uses SHA2, not SHA2." And so we got key type algorithms, and signature algorithms, and those started being separate, with a one-to-many mapping. But then sometimes that key is actually part of a certificate. So are you negotiating the algorithm to say "I support certificates", or are you negotiating just the underlying key? But when you make a signature, it's not a special certificate signature, it's just a signature. So sometimes we refer to the key type, sometimes we refer to the key type but also certificates. Sometimes we refer to the signature algorithm, and sometimes we refer to the signature algorithm, but also the certificate algorithms.

**Nicola Murino:** This is \[unintelligible 00:53:39.06\] at least two or three times before I started to understand something. I don't know if you remember why \[unintelligible 00:53:51.18\]

**Filippo Valsorda:** \[laughs\] And I also remember that every time we go back and we change something similar, we get on a call and we're like "Wait, is this an underlying algorithm or is it a key type? Wait, no, this is one can be a certificate, right?"

**Nicola Murino:** \[00:54:11.13\] We absolutely need to do something to fix these, because it's really -- we have two choices. The first one is not change any \[unintelligible 00:54:19.29\] code, never... \[laughter\]

**Filippo Valsorda:** No more bug reports.

**Nicola Murino:** No more. No more.

**Roland Shoemaker:** That sounds good to me...

**Filippo Valsorda:** Done. Alright. I think this was quorum and majority for...

**Nicola Murino:** Okay, perfect.

**Filippo Valsorda:** We'll file a proposal that the whole libraries are now frozen.

**Nicola Murino:** Perfect. So no more backward compatibility...

**Filippo Valsorda:** Oh, actually, perfect backwards compatibility. We'll never change anything...

**Roland Shoemaker:** If never implement anything... \[laughter\]

**Natalie Pistunovich:** Throwback to Kelsey Hightower's No Code...

**Filippo Valsorda:** Yes. That's the dream. By the way, speaking of changes, this is a bit of a hopping topic, but I just saw an email arrive during the recording...

**Natalie Pistunovich:** Are you doing something else, Filippo...?

**Filippo Valsorda:** Yes, I cannot manage my attention... \[laughs\] But \[unintelligible 00:55:19.25\] just got merged, and now math/rand in Go 1.22 is going to be cryptographically safe by default. The default random number generator is switching to chacha8, so that if by mistake you use math/rand instead of crypto/rand, at least it will not explode in very pure technical ways.

**Natalie Pistunovich:** And for more details, episode one. We've got a lot of information about that there.

**Filippo Valsorda:** Exactly. We talked about it...

**Natalie Pistunovich:** And now the magic happened.

**Filippo Valsorda:** The merge happened exactly during \[unintelligible 00:55:49.11\] Sorry for the interruption, but I'm just so happy about this.

**Natalie Pistunovich:** Oh, that's great news. Shall we celebrate the end of the episode on this festive spirit, saying in one feature, no explanation, what is your favorite change in SSH that is upcoming, that we did not mention yet? If we've covered them all, then we go to the unpopular opinion.

**Filippo Valsorda:** I think Nicola probably has a list, so we'll think about it...

**Nicola Murino:** Yes. A feature I like a lot is the ability to make -- we can now make every algorithm configurable. So for example, there are many people that complained about FIPS; we spoke before... We have \[unintelligible 00:56:32.06\] We have to provide a FIPS mode also for SSH. But FIPS can now be achieved, because you can configure every algorithm. You can also disable, for example, completely SHA1, even if for backward compatibility we still use SHA1 by default for some algorithm. But the important thing is that you can configure all the algorithms as you want. This was important also for my work as an open source maintainer for my project. I now can disable anything SHA1 \[unintelligible 00:57:14.10\] by default. This is very important.

**Filippo Valsorda:** The project Nicola is talking about is sftpgo.

**Nicola Murino:** Yes.

**Filippo Valsorda:** I picked him out of sftpgo maintainership, and that's how I knew he could maintain \[unintelligible 00:57:29.24\]

**Nicola Murino:** I got in touch with Filippo with my project, because I needed some feature in OpenSSH library, and I started to send \[unintelligible 00:57:40.22\] by Filippo. He called me and he said "Do you want to become the new maintainer?"

**Filippo Valsorda:** So it turns out if you get a bunch of bug reports, you can make it that person's problem... \[laughter\]

**Nicola Murino:** Yes.

**Natalie Pistunovich:** The next GPT is just saying "Thanks for your bug report. Please fix it." \[laughter\]

**Filippo Valsorda:** \[00:58:06.13\] Oh, by the way, we are talking about how -- I think we started saying how not having configurability is good... And we're closing with how we are happy that there's more configurability... I want to call it out, but there is an important difference. In the first one we liked the defaults. In the latter one, the defaults were so bad that being able to configure them off is a step forward. A v2 of the API can remove all of the configurability, and leave only the good things behind, but when you have so much bad stuff, the fact that at least you can turn it off - big thumbs up.

**Nicola Murino:** But another important difference, in the SSH world there are \[unintelligible 00:58:45.02\] All modern browsers are updated, so you can remove all the algorithms more easily. I frequently get reposts of a client unable to connect because they maybe use also something \[unintelligible 00:59:04.18\] No more than one year ago I got -- a person asked me how they can enable ARC4. That is an algorithm from at least another era.

**Filippo Valsorda:** '80s, for sure.

**Nicola Murino:** Yes.

**Filippo Valsorda:** Alright, I'll pick a very quick one. One thing that I think might be waiting for my review - sorry about that, but that's coming - is much better tests that test \[unintelligible 00:59:41.23\] against OpenSSH, so that we don't have to wait until it breaks on my laptop or on GitHub to figure out that it's not working with the latest OpenSSH. Nicole is building a whole harness that will run the SSH binary, and make recordings of the connection, and make sure that it's always doing the thing that's expected... And that's just great.

**Roland Shoemaker:** Yeah, I was gonna say the exact same thing... I think this is one of the greatest changes that this library is gonna get, because it will make our lives easier for the next five years.

**Filippo Valsorda:** You can see how jaded Roland and I have become, where we go "Oh yeah, man, I'm so excited about tests... There's gonna be so many tests. Yes!" \[laughter\] I mean, I gave a whole GopherCon talk, and it was not about cryptography or post-quantum or anything like that. It was like "Wanna see some really neat tests?" \[laughs\]

**Nicola Murino:** I also \[unintelligible 01:00:37.10\] There was a report of a Windows test that is only on Windows 11, it seems. I cannot reproduce \[unintelligible 01:00:47.27\]

**Filippo Valsorda:** Oh, no...

**Nicola Murino:** I have a Hashi Go maintainer noticed this breakage, so I have to investigate it. There are some tests against OpenSSH that does not work on Windows 11.

**Filippo Valsorda:** Don't break the build. Hashi will find you.

**Nicola Murino:** But I think that this is not a bug in my code, because it's related to permission. \[laughs\]

**Filippo Valsorda:** It's still your problem if you broke the build...

**Nicola Murino:** It's another problem, I'm quite sure. It's a problem over there.

**Filippo Valsorda:** If your comment is the one that broke the deal, your comment is the one that gets reverted. \[laughs\]

**Nicola Murino:** No, the build broke after my comment. After they upgrade the test environment. \[laughs\]

**Filippo Valsorda:** Oh, then it's definitely Hashi's problem, yes. \[laughter\]

**Natalie Pistunovich:** Consensus. So now let's move to Unpopular Opinions.

**Jingle:** \[01:01:47.14\]

**Nicola Murino:** Yeah, I think I'm the older here... I'm more older than all of you... And so my unpopular opinion is using all the \[unintelligible 01:02:13.18\] very loudly when you do a keystroke.

**Natalie Pistunovich:** Is this good or bad for hacking, hearing the keystroke?

**Nicola Murino:** Very good. It is not good for your neighbors. They know when you're at work.

**Filippo Valsorda:** That's what unpopular about it... \[laughter\]

**Roland Shoemaker:** Yeah, if you have any roommates, or...

**Filippo Valsorda:** I like that we went immediately to roommates, and we forgot the existence of offices... I think all three of us have not worked in an office for years now...

**Natalie Pistunovich:** Four...

**Filippo Valsorda:** Four? There you go. \[laughter\]

**Natalie Pistunovich:** Yeah.

**Roland Shoemaker:** Yeah, my cats get very annoyed at me when I type very loudly on my keyboard.

**Natalie Pistunovich:** \[unintelligible 01:03:09.21\] I get that. I'm on their side. You should reconsider it. Do you have an unpopular opinion?

**Roland Shoemaker:** Oh... I think I have a contemporary unpopular opinion, which is that as much as I think AI is a real pain in terms of code generation, I think it generates terrible code, but I love it, because I think it is creating job security for security engineers. \[laughter\] And it will be for the considerable future.

**Natalie Pistunovich:** Cool. We just held in Berlin like two weeks ago a BSides, which is a security conference, and we had two out of the nine talks about AI. Cool. Filippo, do you have an unpopular opinion?

**Filippo Valsorda:** I mean, I'm tempted to counter your unpopular opinion with an unpopular opinion that I do use Copilot in cryptography code, but only to write error messages, because I hate writing error messages. But no, no. So I think my unpopular opinion - and I will probably get yelled at for this one...

**Natalie Pistunovich:** That's your goal.

**Filippo Valsorda:** Yes... There's a reason open source maintainers don't get donations, and I think the companies are not wrong. Like, asking for donations - companies cannot do donations. That's not a thing they know how to do. That's not the thing they're even supposed to do. How do you justify it to your board if you start making donations by the tune of like hundreds of thousands of dollars to support all your downstream dependencies?

**Natalie Pistunovich:** I think as a tax entity you cannot give donations to something that is not a nonprofit.

**Filippo Valsorda:** There you go. Exactly.

**Natalie Pistunovich:** There's a legal definition to what can a company donate to.

**Filippo Valsorda:** Exactly. And then I have maintainers who I truly understand the plight of, because - like, hi... \[laughs\] And then they come to me and they're like "But I have all of these users, and they make so much money out of it, and they don't donate any of it to me." And I'm like "Yeah. Yeah, they don't donate money. That's not what they do." Send them a PDF, send them an invoice, offer them something; it doesn't have to be much. Logo on the page, support hours... I mean, I actually have a whole idea of what you can offer them, and there's a Changelog podcast episode if you want to hear about that... But the unpopular opinion is not about everybody should be doing what I'm doing. What I'm doing is kind of weird, and we'll find out if it works. But donations are not it. And getting angry at companies for not donating money - I don't know on the moral level if it's right or wrong. Capitalism might be all wrong, and I will probably agree with that argument. But since we do live in capitalism, donations will just not work.

**Natalie Pistunovich:** Technically, it doesn't work for companies. It's true that you have to offer something.

**Filippo Valsorda:** There you go.

**Natalie Pistunovich:** Offer a sticker for 1,000 bucks, but offer a sticker. Sell something.

**Filippo Valsorda:** \[01:06:08.08\] Yes. And then send them an invoice, a PDF, sign up for bill.com. It's fine. It's a web UI. I promise, you will be okay.

**Nicola Murino:** Developers don't like paperwork. I have a solution... Make my wife do all the paperwork and send the PDF. This is my solution.

**Natalie Pistunovich:** Yeah, marrying a responsible adult is a great strategy in life. Kudos. You hacked it. You won. \[laughter\]

**Filippo Valsorda:** The thing though is that I never heard a dentist say the same thing. I never heard a dentist say "You know, I really like teeth, but I really don't like paperwork. So I don't deal with anybody." Like, no...?

**Roland Shoemaker:** Yeah, we have to make enough money to hire somebody to do the administrative work, which I think is -- it's a chicken and egg problem.

**Filippo Valsorda:** Fair enough. You're saying dentists also hire somebody to get them to do the paperwork?

**Roland Shoemaker:** Oh, exactly.

**Filippo Valsorda:** I guess that's fair. Yeah.

**Roland Shoemaker:** They hire people whose specifically job is to do like insurance billing...

**Filippo Valsorda:** Oh, right. The US. I had forgotten about all that. Sorry, I have forgotten that for every doctor you have like five administrative people. Yeah, it's a little different over here... \[laughs\]

**Natalie Pistunovich:** Well, my unpopular opinion is in also the non-software world. Cooking. I think kitchens are overrated, and I think most households, all they need is a multicooker. Specifically, I can recommend for my personal use the Ninja Foodie. I forget, 16 in one, or something; 15 in one. I can remove my kitchen. If it would be less of an effort, I would just throw away the entire kitchen, take one square meter, put the pot there, and that's it. That and the disher.

**Roland Shoemaker:** I think it's very brave of you to say this in the presence of two Italians.

**Natalie Pistunovich:** I know. I'm sorry. \[laughs\]

**Filippo Valsorda:** I mean, honestly, I was here thinking that if it can make pasta, I might be down.

**Natalie Pistunovich:** It can do anything. It can make the sauce. So today what I did is the sauce for tomatoes, like vegan meatballs. So I took the vegan thing, fried it there, then put the tomato sauce there... Everything in one pot, and then it goes into the dishwasher. Not like -- you know, if you have a special fancy pan, you will have to hand-wash it, you're gonna have to have two pots maybe... No.

**Nicola Murino:** I'm Italian, but I'm completely unable to cook.

**Filippo Valsorda:** I'm actually also a terrible cook. I can cook pasta, which - okay, by Italian standards, I'm a terrible cook. By US standards, actually, I've always cooked pasta and risotto and be like "Oh yeah, I'll cook dinner for everybody. Don't worry", and then people would be like "Oh, yeah, this is so great. This is Italian pasta."

**Natalie Pistunovich:** It's with parmigiano.

**Filippo Valsorda:** Yeah.

**Natalie Pistunovich:** It's not parmesan. That's what makes pasta good. \[laughs\]

**Filippo Valsorda:** I mean, pretty much... The fewer ingredients, the better. So the easier, the better.

**Natalie Pistunovich:** Exactly. If this is your approach, a multicooker is all you need in life. Throw away the rest of the kitchen.

**Filippo Valsorda:** I am listening. My landlord might not appreciate that, but we'll tell him after I've done it. \[laughs\]

**Natalie Pistunovich:** The thing in Germany is when you move into an apartment, it's empty. It does not have a kitchen.

**Filippo Valsorda:** Wait, really?

**Natalie Pistunovich:** Yes. Unless you move into a fully rented apartment, the standard, like a normal apartment is a) long-term, so there's never a deadline in the contract, but there's also no kitchen. There's also no lamp. There's like a cable hanging from the ceiling. You're lucky if there's a bulb. But usually, the first thing you do when you've signed a rental contract, which is like three months in the future, you also order a kitchen, because that also takes three months.

**Filippo Valsorda:** That does make sense.

**Natalie Pistunovich:** So especially for people with such setups, it's amazing.

**Filippo Valsorda:** Yeah.

**Natalie Pistunovich:** A sink is something that has to be in the apartment.

**Filippo Valsorda:** Okay, so you do get a sink. Nice. No, in Italy if you get something unfurnished, it might not have the lamp, but it will have the kitchen... Which I guess says something about Italians.

**Natalie Pistunovich:** And Germans... \[laughter\] Alright, let's see which unpopular opinion wins. May the odds be in our favor... Thanks everybody who joined in, and let's pretend this is the outro tune..
