**Natalie Pistunovich:** So now that when I said crypto you all (some) maybe thought "Oh no, yet another scam..." Not that type. We're talking about a library, the standard lib? What is new in the crypto library? What is going on there? For maybe somebody who hasn't used it, we'll also cover a little bit on why was it added, what are some common uses of it, and obviously, what is new about that. And I am joined today by the security at Go experts, Filippo and Roland, who were and are on the Go team. Would you like to introduce yourselves briefly?

**Roland Shoemaker:** Filippo, do you wanna go first, or...?

**Filippo Valsorda:** Of course. Yes.

**Natalie Pistunovich:** A spooky awkward silence... \[laughter\]

**Filippo Valsorda:** So I'm Filippo, I used to be on the Go team, working with Roland, and I am now an independent maintainer, still working on the cryptography packages of the Go standard library... So of the crypto/ and golang.org/x/crypto. So in a sense, what we often say in the industry is same team, different company.

**Roland Shoemaker:** Yeah. And I'm Roland Shoemaker, I'm on the Go team, I've been for about three years; I think I was technically recruited by Filippo... And yeah, so I'm responsible for additional maintenance of not only the crypto libraries, but all of the libraries that have some kind of security impact on Go, and then also for responding to triaging security issues in the standard library; not just in security-specific libraries, but in everything. Before I worked on the Go team, I worked at the Electronic Frontier Foundation, and the Internet Security Research Group for five years, on the LetsEncrypt project.

**Filippo Valsorda:** One of my great successes right here, recruiting Roland to take on all of the security reports. \[laughs\]

**Roland Shoemaker:** Yeah, and then immediately leaving. \[laughter\]

**Natalie Pistunovich:** That's kind of how I started my way in the Go meetup in Berlin. I was invited to be a co-organizer, and then the co-organizer moved to London.

**Roland Shoemaker:** Great tactic...

**Natalie Pistunovich:** Yeah, it always works.

**Filippo Valsorda:** I can recommend it.

**Roland Shoemaker:** Yeah, I just need to find my replacement now.

**Natalie Pistunovich:** Well, if anybody's listening to this episode, you know where to find Roland.

**Filippo Valsorda:** Also, we need to make this into a pitch.

**Natalie Pistunovich:** It's like a blockchain that you sign the next person, right? Sorry...

**Filippo Valsorda:** Oh, no... \[laughter\]

**Natalie Pistunovich:** Spooky, spooky jokes. So when did the crypto library join the standard libraries of Go? When, why? Was it there from the beginning?

**Filippo Valsorda:** Yeah, very beginning. I think you can find it all the way back to when the tree was open sourced, I think... And originally, they were mostly written by Adam Langley, who pretty much did with me what I did with Roland... \[laughs\]

**Natalie Pistunovich:** Blockchain all the way.

**Filippo Valsorda:** So yeah, he designed a lot of the APIs, and we're now talking about 10-11 years ago, something along those lines. And for the time, it was amazingly modern as a set of APIs and selection of things to implement. Now, of course, 10 years is a lot of time, but it's been one of the major things we've focused on in trying to keep things modern, and a good example in terms of API design and implementation and reducing complexity, because that's what we were handed down from what existed already in the project.

**Roland Shoemaker:** I think it was relatively revolutionary at the time to have kind of cryptography code in the standard library, rather than almost every other language requires you to rely on some third party implementation of this kind of stuff... Which is for better or worse. But I think Go was really one of the first languages that really came with this stuff as like a first class implementation that you could kind of trust and rely on, and not have to go and find disparate implementations of all these different things.

**Filippo Valsorda:** Yup. And specifically, they made it about -- I think they didn't focus on making a cryptography library, but on what Go developers would need. So TLS, right? HTTPS... And I think they saw correctly that would be something that you would have to link into almost every program, because doing a get request to an HTTPS URL - that's something we do almost all the time, right? API calls, and all that. And for that, you need the whole cryptography stack. And it was important that it could cross-compile, and that it be native Go, and all that.

So from the beginning, the Go cryptography libraries are not about competing with other cryptography toolkits. So we don't compete on performance, or on how many different things we implement \[unintelligible 00:05:22.23\] but instead we focus on "Are we providing Go developers what they need to develop Go applications?" And I think that helped a lot with reducing complexity and keeping it focused; initially informally, and more recently with the Go cryptography principles, which were just a written-down version of what I've just said.

**Natalie Pistunovich:** And generally keeping the codes quite secure, kind of as a default...

**Roland Shoemaker:** Yeah, I think that's something that has saved us from a lot of security vulnerabilities, is that we don't implement everything. There's a lot of things we have explicitly kind of said "You can go and implement this yourself, but we don't think this is necessary in the standard library." And that has meant that every time there has been a huge security disclosure about some custom curve parameters or something, we have not been affected, because we have explicitly made those decisions to just not implement it.

**Filippo Valsorda:** \[06:17\] Yeah. And this is the part where we take the opportunity to apologize to everybody we said no to on the issue tracker... Because they're probably listening and being like "Yeah, tell me what's new, because my thing didn't make it..."

\[laughter\]

**Natalie Pistunovich:** Yeah, but I will say, jumping outside of the Go focus for one second, I'm preaching a lot the idea that I think Go is one of the languages that will survive this AI revolution; many reasons to back that, but one of them is that all the code that is out there is secure by default.

**Filippo Valsorda:** We try... We definitely try.

**Natalie Pistunovich:** More secure than others, let's say, right? You just need to not be the slowest person to run when a cheetah is chasing you. \[laughter\]

**Filippo Valsorda:** Exactly. Roland and I are always talking about the things that we wish were better... But it is entirely fair to say that Go has much better posture than the average language, for sure.

**Natalie Pistunovich:** So what is new in there in the crypto library for Go? And when you answer that - and I will say that we have a show notes document, and we have a very long list there, so many things that are new; we only have this one hour... So whatever you choose to tell us about, it will be interesting. Also, if you briefly say how it was and what is the change. So pick your favorite and just share away, and I'll be just asking you questions.

**Filippo Valsorda:** Oh, we absolutely pregamed this, and we're talking about \[unintelligible 00:07:39.22\] So if we don't have time, what do we kill? And we were both like "Well, those are all very good things..." Kill Your Darlings, that did not quite work. \[laughter\]

**Roland Shoemaker:** It's not something we get to talk about all that often, so I think there's a backlog of very interesting things that we've done, that we all want to talk about, but we may not have time to get to everything.

**Natalie Pistunovich:** We can always have episode number two on the topic. We have 17 things here, so let's cover like eight.

**Roland Shoemaker:** Well, I think probably one of the biggest things that we've done recently - and this is something that you worked on - was the RSA backend change. We've had for a very long time an RSA implementation that was based on a big integer library that we have in the standard library called math/big, that because it's a generic, big integer library, it's very hard to use, and dangerous, and not explicitly designed for cryptography.

**Filippo Valsorda:** Yup. If you have the spooky music, this is where you put it on. \[laughter\]

**Roland Shoemaker:** Yeah. And that was the basis of our RSA implementation, I think since the beginning... Which caused a lot of problems.

**Filippo Valsorda:** And the same was used in the ECDSA implementation... It was a little bit all over the standard library, because we in cryptography often need to do things with big numbers. And it's tempting to say "Oh, great, I will use this library that's called Big Numbers." And then you regret it, because libraries that are not designed to be secure will optimize for things like feature-completeness, or performance, and will end up having 2,000 lines of code that have code paths that might be reachable by attackers, but not really looked at, because they are only used if the number is a specific module, or value module, something else, some very edge case, or something like that.

\[09:35\] So the result is that math/big was really not a robust basis for cryptography. So I set out to move math/big out of the security perimeter. The goal was even if there's a bug in math/big - okay, it's a bug. It's not immediately a vulnerability. So that meant producing a new bigint implementation that was specifically about cryptography, which we call bigmod, and that's started as an external contribution, and was rewritten almost entirely over to make it even smaller... And I think it worked out to 400 lines of code, something like that, down from the thousands of lines of math/big... And we used that to replace the backend of RSA, half the backend of the elliptic curve implementations, and so far, so good. You know, last famous words... Roland maybe even has --

**Natalie Pistunovich:** Spooky, spooky theme... I didn't find any spooky tunes that are a transition for it.

**Filippo Valsorda:** It'd be very funny if in a week a security release comes out and it has a vulnerability in it... But of course, Roland cannot tell us, so... \[laughter\]

**Roland Shoemaker:** I'll just give you a wink if there's anything... \[laughter\]

**Filippo Valsorda:** Oh, we're live on video too?

**Roland Shoemaker:** Okay, no... \[laughter\]

**Natalie Pistunovich:** \[unintelligible 00:10:52.03\] Okay, and this is from what? Like, if you want to use that, is it already available?

**Filippo Valsorda:** Yeah. So if you noticed RSA getting slower in Go 1.20, that was that. That was me, I'm sorry. And then I went and made it faster in Go 1.21. So RSA decryptions and signatures are now faster than we started at. But that's because they just use the new thing. But from the user point of view, nothing changed. It should still work exactly the same. It's just much more secure, maintainable, constant time, and so on.

**Natalie Pistunovich:** So all the under the hood.

**Filippo Valsorda:** Yes. It also helped us build a very visible change, which is the new package, crypto/ecdh. And that one is a whole new package to do the elliptic curve Diffie–Hellman, which is a key exchange... And before that package you had to use something even lower level, which you'll be like "ECDH already sounds like something extremely specific and low-level..." No, no, you had to just throw around --

**Natalie Pistunovich:** What does it stand for? When would you use it?

**Filippo Valsorda:** Roland, do you want to...? I've been talking a bunch.

**Roland Shoemaker:** We use it in crypto TLS. It's the basis for a number of key exchanges that we have to do intercompatibility. And yeah, right, before we just reached deep into parts of the standard library that nobody should ever see or touch, that were in hindsight probably a big mistake to add... But we have to live with our mistakes. And this new library replaces tens of lines of very scary-looking code with a single call to an API that is incredibly well-designed, thanks to Filippo... I think this is part of what we've been trying to do over time, is taking away the rough edges of the crypto libraries that we have accumulated over almost 15 years at this point, of design and experience with getting things wrong.

**Filippo Valsorda:** Yeah, exactly. For example here, the lesson is to not expose low-level concepts in the API... Because before -- so an elliptic curve point is a coordinate, X and Y; it's a point, to make this simple. And the current API just take some bytes that are an encoding, and if the bytes are wrong, we can check and tell you. The old API actually took numbers for x and y. So what happens if the x is too big? What happens if x is negative? It's not supposed to go negative. What happens if you pass in a negative number? The answers were not pretty. The answers are actually in the CVE database, in the list of vulnerabilities. \[laughs\] So the new API - you just can't pass in a negative number, because you can only pass in a bunch of bytes, and we decide what they are, and if they're valid or not... And there's no way for you to forget to validate something, because when you pass in the bytes, we validate them, because almost surely you didn't mean for us to skip the validation. The old API didn't let us do it in-line.

\[13:55\] So yeah, a lot of this rewriting was deprecating the old elliptic curve API, and designing the new one, writing new backends, just like with the RSA one... So everything is constant time, it uses better formulas, it uses generics... And it uses some formally verified code generator for the hardest parts, where there's a computer that actually knows how to count, unlike most cryptographers, and produces the code to do the arithmetic correctly, automatically. And that's machine-checked, and that's great, because every library introduces bugs in the \[unintelligible 00:14:30.22\] carry the one situations of arithmetic... So yeah, that's an exciting new thing that we're adding. But Roland said something about the fact that we can never change things. And I feel like that brings us to the next thing...

**Natalie Pistunovich:** Before we go to the next thing, I want to say that I googled what ECDH stands for, and same as many things in security, it's just names of people. So it's Elliptic Curve Diffie–Hellman. Difffie I know it's Whitfield Diffie, but Hellman I don't know that person; the first name.

**Filippo Valsorda:** I do not know the first name of Hellman. Although Diffie still comes to the conferences. Sometimes you're just sitting there and sipping coffee, and you think "Yeah, that's Diffie. Huh."

**Natalie Pistunovich:** I share this excitement with you, and when I saw him once at a conference, I asked to take a selfie. I'm very happy you said that; I was like debating whether I should say it or not... \[laughs\]

**Roland Shoemaker:** Yes! You know, he kind of started the entire field of public key cryptography... I mean, different people can claim that, but he definitely has a claim to it.

**Natalie Pistunovich:** He once sat in the room, in a lecture room with Professor Shamir from RSA.

**Filippo Valsorda:** Yes. I have a very brief story about this...

**Natalie Pistunovich:** I love this \[unintelligible 00:15:50.22\] that's going on.

**Roland Shoemaker:** \[laughs\] Well, George Tankersley and I presented a thing - it's now called Privacy Pass - at \[unintelligible 00:15:56.13\] Crypto one year, and it was using RSA. And George said in the presentation that we would like to replace RSA, because for the obvious reasons you don't want to use RSA. And then somebody in the Q&A asked --

**Natalie Pistunovich:** You have to say what are those obvious reasons. Not everybody goes to crypto --

**Filippo Valsorda:** Well, no, no, that's the thing; he didn't. He just said that. And everyone in the room kind of nodded along, because you know, it's a little slower, and some implementations, some schemes built on RSA are not as secure... RSA is fine. It's just kind of building with legacy tools...

**Roland Shoemaker:** It's hard to get RSA right sometimes...

**Filippo Valsorda:** Yeah... And you can build much more fancier things on top of elliptic curves. And in a roomful of cryptographers, everybody wants to be using elliptic curves and not RSA. It's the new framework, the new JavaScript framework, that's, I think, the parallel. Anyway, in the Q&A somebody comes up and asks "So what is the problem with RSA, if you could elaborate?" And they were super-polite... And George goes "Well, it's old, and it's slow, and we'd like to use something better, and modern..." And the person goes "Yeah, that makes sense. Thank you", and then walks away. And somebody taps on my shoulder and goes "George was on the podium and he was in the backstage", and he goes like "Yeah." So that's \[unintelligible 00:17:17.02\] So yeah, that was great...! \[laughter\]

**Roland Shoemaker:** Yeah, but at least they know the limitations of their own invention.

**Filippo Valsorda:** Yeah, exactly. Of course --

**Roland Shoemaker:** They're not gonna shout at you about it...

**Filippo Valsorda:** Of course, \[unintelligible 00:17:31.17\] Ron Rivest being the R in RSA. Yeah, no, he was very okay with it. Anyway...

**Natalie Pistunovich:** You have to be a big person to take publicly criticism. And that's good to know. Okay, so we covered the three things that you wanted to pick...

**Filippo Valsorda:** Roland, tell us how we make changes without breaking the world... \[laughs\]

**Roland Shoemaker:** So Go has this great -- probably one of the greatest things about Go is the compatibility guarantee, which is that you will be able to take code that you wrote 10 years ago and compile it today, and in theory, it should basically do the same thing.

**Natalie Pistunovich:** Another reason for Go surviving the AI revolution.

**Roland Shoemaker:** \[18:14\] Yeah. I think it's one of the greatest properties of the language. The problem is sometimes you make the wrong decision, and you end up with an API that is unfortunately bad in some way. The double-edged sword of the compatibility guarantee is that we cannot fix a lot of these problems. The security team, technically, is the only part of the Go team that has the right to break things. We have the escape valves sometimes, but we try and use that as sparingly as possible. But for things like the elliptic curve API - in theory we could have designed a better elliptic curve API, but there's too many things that rely on the old implementation, and the ability to basically do whatever you want, for better or worse.

So a lot of the time, we kind of have to see what we can do behind the scenes to try and fix things as much as we can, while leaving the old implementation basically as -- make the change as invisible to the user as possible, which I think is harder for us, but makes the lives of users significantly better. You know, the RSA backend change is a great example of this. There should be zero -- the user should see nothing changed at all, except for maybe performance.

**Filippo Valsorda:** Yeah, I think that it's one of the things that are most easily overlooked is how much time the Go team spends discussing how to uphold the compatibility promise. Really, a major part of the job is figuring out what can we do that maintains backwards compatibility, which can be a whole new package, and just deprecating the old one... But again, deprecating does not mean removing it. And people will show up and be like "You can deprecate that. I'm using it", and we're like "That just means it says Deprecated on it now.

**Natalie Pistunovich:** That also means there's no more support. It's on you to maintain that; on the user who wants to keep using it.

**Filippo Valsorda:** Right. We will not add new features to it, yes. If you want a new --

**Natalie Pistunovich:** Will you patch things to deprecated --

**Filippo Valsorda:** Technically --

**Natalie Pistunovich:** \[unintelligible 00:20:25.29\] hard questions.

**Filippo Valsorda:** ...we have an out to not consider vulnerabilities in deprecated packages as vulnerabilities... But I don't think we ever exercised that.

**Roland Shoemaker:** Right. We will raise the bar slightly higher. If there's a vulnerability that isn't really bad, is something that could cause a program to panic, or something with a slightly lower impact, we may choose not to patch it, or just make it a publicly-known bug, and say "We're not going to patch this using the security patching process." But if somebody wants to fix it, we may accept a patch. But we still, technically, if something is a big enough security issue in a deprecated package, it's still a package in the standard library; people can still rely on it. So I think we feel like we should still be fixing those issues.

**Filippo Valsorda:** I don't think we ever faced it, and I can't quite speak for the policy of the security team anymore, but I think it would also depend on how long something has been deprecated. Things that we deprecated six years ago - I mean, maybe. Things that we deprecated this year...

**Natalie Pistunovich:** Still fresh.

**Roland Shoemaker:** An example of this would be the OpenPGP package. There are known issues in the OpenPGP package, and minor security issues, but they're the kinds of things that cannot really be fixed without breaking the API; it is like an inherent problem with either the design of the OpenPGP package or the design of OpenPGP in general. So there's not much we could do there. And in those cases we've taken our hands off that package.

\[22:07\] And there is an open source maintained alternative, which is another reason -- when there are publicly-known workarounds that a user can apply themselves, such as using a different package, or holding an API in a slightly different way, it does mean that -- it lets us reconsider whether we need to be the people fixing the problem.

**Filippo Valsorda:** However, there are times when we just can't do without visible changes. And those are, for example, the default changes of... As time goes on, and protocols advance, and hashes get broken - which is less of a thing now; it's been 5 years since a hash has been weakened significantly...

**Roland Shoemaker:** Fingers crossed...

**Filippo Valsorda:** Yeah... \[laughter\] I wonder how many \[unintelligible 00:22:52.00\] and be like "Filippo couldn't shut up, could he?" \[laughter\]

**Roland Shoemaker:** \[unintelligible 00:22:56.10\]

**Natalie Pistunovich:** Oh, the internet, the connection's breaking... \[laughter\]

**Filippo Valsorda:** But for example, there are things like supporting MD5 and SHA1 in crypto X519, for those certificates, or TLS 1.0 and TLS 1.1, that we have to at some point change. And we tried to do that as this low-staged rollout as possible. For example SSL v3, which was the very, very, very broken version, which - SSL v3 is the one before TLS 1.0, because cryptographers can't do marketing for the life of them...

**Roland Shoemaker:** Blame Netscape for that. \[laughs\]

**Filippo Valsorda:** Yeah... That was a fun time in cryptography... I wasn't around. Anyway, that one we first disabled by default, and then removed the code years later. And now we're doing the same with TLS 1.0 and 1.1. We go look at how many clients we'll need there, how many would break, and we are inching towards disabling it by default. I think it's already disabled by default in clients, and that's the thing I had the courage to do. And now Roland is having the courage to push the disabling by default on the server side, which I chickened out of the last time...

**Roland Shoemaker:** \[laughs\]

**Filippo Valsorda:** And applications can still turn it back on by setting min version. So this is just about the default. And that's such a constant tension, because we both want the defaults to be secure. You shouldn't be able to just say "Hey, make a TLS connection" and not know anything about what I just said; what the hell is a TLS 1.0? ...and truly not have an opinion on TLS 1.0 versus TLS 1.2. That's our job, not the application developer's. But at the same time, if we change defaults, we change behavior. And if we change behavior, we break applications that used to work. And that's not great, because then people don't upgrade, and then they find us at GopherCon and they are lovely people, and we absolutely love them, and I'm not kidding... But still, then the conversation becomes "Hey, so that SHA1 deprecation thing..." So yeah, so there's a new mechanism. Roland, do you wanna talk about godebugs? That is the thing we talk about every time we are together, so... \[laughs\]

**Roland Shoemaker:** Yeah. I think SHA1 was the first thing we tried to deprecate that ended up being a real painful experience. But godebugs kind of did save us there. And godebug is this idea that you can -- it's a kind of out of band way of enabling behavior in the Go runtime or the standard library via environment variables. So we can add a new behavior, and then gate it on the presence of a special go debug flag.

**Filippo Valsorda:** Yeah. Which, by the way, is a terrible name for this mechanism, but is a historical artifact. There was already a godebug environment variable; it's the one you use to say "Hey, I want to know about the garbage collector pauses", or things like that. So we just kind of piggybacked on that, to be like "Oh, if you want to turn SHA1 back on, you can do it --"

**Roland Shoemaker:** \[26:15\] Yeah... It was already there...

**Filippo Valsorda:** Yeah... \[laughs\]

**Roland Shoemaker:** We probably shouldn't have, but now everybody uses it...

**Filippo Valsorda:** Yeah. So now it's called godebug, and it's a much wider mechanisms. Sorry, I interrupted you.

**Roland Shoemaker:** Yeah, and it's used all over the standard library now. And there has been a lot of work to make this kind of THE way... We also have the Go experiments flag... Really, it would be probably -- well, maybe there's a third name that we could have come up with, but you know, it's a really useful way for us to be able to preserve behavior. Because there's often things that we want to change the default for, or change behavior for in general, because it provides a better experience for the user. And often with these things there's no elegant way to make it configurable through an API. Maybe that's because the API is designed in such a way that we cannot pass additional information, for a number of reasons, but we know that making the default change will break somebody. And often there are valid use cases for things that we think aren't the thing that everyone should be doing. For TLS 1 and TLS 1.1 there are servers out there and clients out there that do not support higher versions of TLS. And we should provide a way for users to support those use cases, we just don't think it's safe for everyone to do that.

**Filippo Valsorda:** Also because sometimes leaving something enabled is dangerous, even if it's not used. This is the thing with TLS cipher suites. On the one hand, we recently took away a little bit of configurability with the automatic cipher suite ordering, which I'm so proud of, by the way... Basically, you can still turn on and off cipher suites, which are the different primitives, the different encryption methods used by TLS, with the tls.config.ciphersuites. So you can still use that to say "I want to enable that one, I want to disable that one." But it used to be that the order you put them in was important. You were supposed to express an opinion about whether you like \[unintelligible 00:28:18.23\] You know, pick a favorite. Which one do you like better? \[laughs\]

**Natalie Pistunovich:** It can be another unpopular opinion vote, the answer to this... \[laughter\]

**Filippo Valsorda:** And the thing is, no application developer cares about this, and that's not strictly true, because people obviously yelled at me for taking away that configurability... But most application developers don't care. So now we'll take the hint on whether you turn something on or off, but then we will decide which ones are the better ones and which ones are the worse ones. So we'll take the priority order ourselves. And that helps us, because it lets us keep enabled things that are not as secure, because we know we'll only pick them as the very last resort. And that helps us keep things enabled. But on the other hand, there are things that just by being enabled expose you to security risks, even if nobody uses them. And these are the RSA cipher suites. Those give an attacker the opportunity to try to mount a specific attack, the Bleichenbacher attack... Is it the Coppersmith or the Bleichenbacher?

**Roland Shoemaker:** The Bleichenbacher, yeah.

**Filippo Valsorda:** Yup. The 98 one, because Bleichenbacher has so many attacks that we have to use \[unintelligible 00:29:46.06\]

**Roland Shoemaker:** It has resurfaced a number of times...

**Filippo Valsorda:** Oh, yes.

**Natalie Pistunovich:** Can you just elaborate about the two? That is such a -- I was like "Are they saying things to see if I'm following?"

**Filippo Valsorda:** \[30:00\] So they are two very different attacks. The Bleichenbacher 98 attack, which is -- Bleichenbacher is just the name of a cryptographer.

**Natalie Pistunovich:** As it is common in the field...

**Filippo Valsorda:** Yeah. He found a way to attack RSA in such a way that if you don't do everything in perfectly Constantine - so it needs to be impossible to tell apart whether a decryption succeeded or failed... Which, you're saying "Wait, but if the decryption fails, you return an error, right?" Well, no. No, no. That will be very bad, because if the attacker can see the errors, or even just time the operation and be like "A-ha! I saw you exited earlier, because there was an error, so now I know that this was not valid", it can keep sending invalid things until it hits a valid one, and then move to the next one. You know how in Hollywood sometimes they figure out the combination of a safe one thing at a time, and it just goes like very fast, 1, 2, 3, 4, 5, 6, 7, and then - oh, it hits the right one, locks that one, and moves to the next?

**Natalie Pistunovich:** And it clicks...

**Filippo Valsorda:** Yeah, exactly. So that's actually a thing in cryptography. A bunch of attacks work like that. And the Bleichenbacher 98 one works like that.

**Natalie Pistunovich:** So it searches when is it not the same time, basically; then it knows that that's an error.

**Filippo Valsorda:** Exactly. Yeah. And instead, the Bleichenbacher 07 is an attack against signatures. In that attack, basically you can make an approximate value that looks like a signature, but has some garbage in it. And if the implementation ignores the garbage, then you just made a fake signature. And it's another very fun one that keeps resurfacing from time to time.

**Natalie Pistunovich:** Wait. Will it accept it, or will not accept it? If it's a correct one with garbage, is it considered fake?

**Filippo Valsorda:** Well, no, that's the thing... Anybody with only the public key, without the private key, should not be allowed to make a signature. Because only the person with the private key should be able to make a valid signature. But anybody can make something that's close to a valid signature, but has a bunch of garbage in one of the fields. Imagine a JSON struct that has an additional entry with some garbage in it. That one anybody can make. So if you don't check in the verification code that there isn't extra garbage anywhere, then you will end up accepting fake signatures that were generated by people without --

**Natalie Pistunovich:** Mm-hm. Because if you generate enough fields, you get all the right ones and lots of trash.

**Filippo Valsorda:** Yeah, basically -- so the math behind it is that signatures are a cube root of a number, and you can approximate one by just doing the cube root like you do it on pen and paper cube roots, which is not something I actually know how to do, but you can google it and find out how, which is what I do when they have to implement this stuff... And that one will come close. But close is indistinguishable from right, with some garbage at the end. And so that's the Bleichenbacher 06. I myself made a vulnerable implementation for the youtube-dl self-update code, and was saved by the fact that I had added some extra safeties that saved youtube-dl... But yeah, it turns out --

**Roland Shoemaker:** You hardcoded the exponent?

**Filippo Valsorda:** Yes, I hardcoded the exponent to the 65k one, so... \[laughs\] I remember the panic when years later I realized "Wait, I remember years ago writing a from-scratch implementation of RSA for youtube-dl, because we couldn't use any dependencies", and it was just this self-contained Python script... And I was like "Oh, I must have gotten that wrong." I was like 17... So I went back and - yes, I had gotten it wrong, but I had saved myself by... \[laughs\] Anyway.

**Roland Shoemaker:** Making better decisions than professional cryptographers at the time, so... \[laughter\]

**Filippo Valsorda:** \[34:00\] I've got nothing nice to say. \[laughs\] So yeah, godebugs allow us to make changes like turning off these RSA ciphers that allow the attacker to mount the Bleichenbacher 98 attacks, and turning off TLS 1.0 and so on, while giving people a way to escape.

Also, I don't know, Roland, if you want to explain how they relate to Go versions, and the new backwards-compatibility policy... You were explaining it to me earlier.

**Roland Shoemaker:** Yeah. This is a very nice new behavior where when you introduce a new Go debug flag it enables some behavior by default for everyone. And if you look in your Go module file, there is this line that specifies what version of Go this module is supposed to be used with. And the new policy for Go debugs is that we record which major version a Go debug flag was introduced in, and then the toolchain can kind of emulate older versions of the toolchain by saying "If this Go debug flag was added in a version later than the Go version recorded in your module file, the toolchain will act as if that Go debug flag is enabled by default." So you get the old behavior. So your toolchain acts as if it is -- you're using Go 1.20, but it's acting as if it's Go 1.19... Which preserves the backwards compatibility decree, because it allows you to kind of get the old behavior that you were expecting. For some things that's good, but some things we need to try and figure out a better way to handle security issues... But that's on the roadmap to figure out.

**Filippo Valsorda:** Yeah, I'm very excited about it, because it allows us to make these sorts of changes with much more confidence that we're not just springing it on everybody, and people can upgrade and notice when something is not working; there's metrics connected to it, so you can get a metric that warns you "Hey, you're doing the non-default thing here, so you're probably going to break." And if you revert it, then you have a metric that when it goes to zero, then you can say "Oh, great. We don't have a need for that legacy behavior anymore."

**Roland Shoemaker:** And that will eventually allow us, with -- the telemetry proposal kind of covered some of this, but this will eventually also allow us to decide... You know, currently, Go debug flags are kind of there forever. Sometimes we say "Oh, we've added this Go debug flag", and it will remove it in X number of major versions... But often that doesn't happen, because it turns out that it's really hard to figure out who is using Go debug flags, whether they're actually still necessary... So these metrics, the idea is that eventually these will be collected somewhere and exposed for analysis, so that we can figure out -- you know, maybe we don't need the SHA1 reenable flag anymore, and we can finally remove it. I don't expect that will happen for a couple of years, but... \[laughs\]

**Filippo Valsorda:** No... But I've got a bottle for that day.

**Roland Shoemaker:** Yeah, exactly. We'll have a party. I think it will happen about 10 years after we thought it would happen, unfortunately.

**Filippo Valsorda:** Alright, so talking about certificates, there is one thing that we added, that I'm always excited to tell people about... And by "we" I mean you. The fallback roots.

**Roland Shoemaker:** Yes... This was a long time coming. Go is kind of unique. For languages that provide a TLS stack, Go is slightly unique in that it doesn't -- well, it still technically doesn't provide a bundle of root certificates that it trusts. Most languages that have a TLS stack will come bundled with the set of root certificates that your computer should trust when making a TLS connection to a website. And that's been a -- we use the system roots when we do that. So Windows has its own root store, Apple has its own root store, and Linux is very complicated in that it has 18 different root stores, depending on what distribution you're using.

**Filippo Valsorda:** And none of them are good...

**Roland Shoemaker:** \[laughs\] No, they're all bad. Well, some of them are better than others.

**Filippo Valsorda:** \[38:08\] Fair.

**Roland Shoemaker:** But this has been a problem for a long time, especially for people who use Docker... Because if you build a very lightweight Docker image, often you will not end up with a root store. And when you try and write a Go program, and you drop it into your Docker image, your lightweight Docker image, and then you try and connect to a web server that uses TLS, all of a sudden you're getting all these failures, and it's kind of confusing why. So in 1.21 I think we added a new API that allowed you to register a default set of root certificates to trust. So if you don't get anything from the system, you will get this special extra bundle of certificates that you will fall back on. And this has, I think, solved a problem for a lot of people, but maybe introduced new problems for us, in that we now have to also provide a bundle of certificates... Which we have done as a separate module in the golang.org X crypto module. It's a special sub-module, which provides the Mozilla bundle of certificates.

**Filippo Valsorda:** Yeah. The trick is that we actually want nobody to use the new API, except that one package that you can import. If you import it, it automatically registers the bundle. And it's a separate module, because that way it can be updated separately, and that way it can be flagged in Govuncheck, the vulnerability database, so that we can tell users when they really need to update it because the roots have changed. And then Roland wrote a whole bot that yells automatically to update the list, and I get these emails being like "No changes. Abandoned." Or "Oh, yeah, a bunch of roots changed." Or "Yeah, we have gone and deleted all of the roots..." \[laughter\]

**Roland Shoemaker:** Yeah. It turned out that I had forgotten to check the HTTP status code on the response that I got from the server that serves the text file and contains all the certificates. So it was 404-ing, or 500-ing or something, and I was just like "Oh, okay, that just means there are no certificates." But we fixed that.

**Filippo Valsorda:** Yes. And to be clear, that just sends an automated PR, so no harm was done.

**Roland Shoemaker:** Yeah. There's still needs to be two humans who look at this before we actually make any change.

**Filippo Valsorda:** Well, two Googlers. Anyway, moving on... \[laughter\] Moving on to --

**Natalie Pistunovich:** Are they already AI people? Google AI bots? Two Bards...

**Roland Shoemaker:** Oh, that would make my life so much easier. \[laughs\] Well, maybe not, I don't know...

**Filippo Valsorda:** Yeah, I don't know...

**Roland Shoemaker:** That's job security... \[laughs\]

**Filippo Valsorda:** Yeah, we do like having jobs...

**Natalie Pistunovich:** I think I will ask this at the end... Okay, I'll ask this now so you'll think about this for like the next couple of minutes in the back of your head... But at the end, I will ask you what do you see the development of the security role in the world of AI.

**Roland Shoemaker:** Oh, God...

**Natalie Pistunovich:** Think about it and we'll come back to that.

**Filippo Valsorda:** This is gonna be an extra unpopular opinion... A bonus one.

**Roland Shoemaker:** Yeah. I think a good thing to follow on from the Go debug discussion would be - you know, we try and keep everything as compatible as possible; we have this great way to introduce behavior that may be breaking, but I think there's also a discussion about what we want to do in the future, where there are APIs we cannot change. They are what they are, and in those cases our only real option is to introduce a completely new package. And this has been done very sparingly in the standard library thus far, but I think it is probably -- the world has changed a lot since not just the crypto tree was written, but a lot of the packages in the standard library were written. And we're kind of looking at this point to what does not a Go 2, but a v2 of certain packages in the standard library look like. And the first big one that this has happened for is the math/rand package. I don't know if you want to talk about that as well, Filippo...

**Filippo Valsorda:** \[42:13\] Yeah, so math/rand is one of the things that ended up on every presentation about Go footguns, because there's crypto/rand, which is good, and there's math/rand, which is bad. And they are both called rand, and they both have a read method. So you might be excused for using rand.read to generate your session ticket keys, and then find out that actually, you are importing math/rand in that file, and so you ended up using math/rand to generate keys, which - why is it bad? It's bad because it's completely predictable. And I'm not just saying it has a bad seed, or anything like that. I'm saying if I look at a few of the outputs, I can predict the future ones. There is no secure way to use math/rand up to now. But math/rand is getting a v2, and the v2 critically doesn't have a read method, so it can't be mistakenly used as easily in place of crypto/rand. And it's switching its default, and this is -- I think here I can only claim credit for lobbying for this, but Russ Cox then went and did all of the actual implementation... But I think I convinced Russ to make the default ChaCha8, which is this reduced round version of the ChaCha20 thing that you used in TLS sometimes; it's a cryptographic cipher, so it's actually secure, and it's almost as fast as the non-secure fast thing. So it will default to that, so that if by mistake you use math/rand, you'll actually not have done that much damage. It will probably still be secure. And I am so happy about that... And we're getting that in the v2. And v2 will have a default source, which is this, and it will not be locked to a specific sequence of outputs... Because that was the other major thing that was a problem in math/rand, it could never change what outputs it returned, because programs had come to rely on those, and that's how seriously we take the compatibility promise.

**Natalie Pistunovich:** Wait, they rely on math/rand being --

**Roland Shoemaker:** Yeah, deterministically random.

**Natalie Pistunovich:** Okay.

**Filippo Valsorda:** So math/rand will always return the same outputs if you give it the same \[unintelligible 00:44:28.01\]

**Natalie Pistunovich:** Yeah, but companies relying on math/rand to be persistent is the thing I needed to hear twice. Okay.

**Filippo Valsorda:** Oh, yes. You change the sequence, and things break. It's great. Really, open source maintenance is great, and if you were looking for something that's more mind-bending, I can recommend standard library...

**Natalie Pistunovich:** Is that your other unpopular opinion?

**Filippo Valsorda:** \[laughs\] But yes, I'm excited about v2, and we are starting to think about what v2 of packages in the crypto -- well, of the crypto packages would look like. Because there are things like AADs, which are just a fancy name for the thing that encrypts stuff, like AES256-GCM, or ChaCha20-Poly1305... So you have a key and a message and you want to encrypt it. And right now, the API is kind of hard to use; you have to separately generate the nonce and have opinions on how to generate the nonce, and then where to put it... And nonce is a number used once, so it has to never never, ever repeat. And what happens if it repeats? It depends; it depends on what we're using. It could be catastrophic. It could be -- most of the times it's catastrophic. But sometimes it's okay. But how do you know? You don't. So we want to make higher-level APIs for that, and things that just say "Yeah, we'll take care of generating it, we will prepend it to the ciphertext... You don't even have to know that it exists. You don't even need to know it's a thing. And then we'll pick primitives where we can do that instead of having to ask the application to respect some strict rules, or else. And so that means, for example, making new APIs that expose XChaCha20-Poly1305 instead of ChaCha20-Poly1305, which - should anybody care about the difference between the x and the non-x? Nobody should, but it is very important, because it will make the difference between you're allowed to encrypt at most a couple million messages, which sometimes you have more than 2 million files, or not having that problem.

**Roland Shoemaker:** \[46:33\] Right. We shouldn't require users to kind of know these arcane details in order to make secure decisions. I think that's one of the real problems with a lot of -- the cryptography libraries are good, but they assume you have a lot of knowledge in order to use them safely.

**Filippo Valsorda:** Which - still less than order cryptography libraries. I feel like we tend to be a little too doom and gloom, the two of us, because we want it to be better...

**Roland Shoemaker:** I think that's because the bar is already so high for the Go standard library, right? We made good decisions; we didn't make the best decisions... But in the grander scheme of things, we're still doing a lot better than a lot of \[unintelligible 00:47:12.19\]

**Filippo Valsorda:** Yup. Well, yeah, I'm excited. I think this is one of the most exciting times to be working on the cryptography libraries, because we get to make the mistakes that will haunt us for the next 10 years. And that's fun.

**Roland Shoemaker:** Yeah. Well, and you say that with kind of probably the biggest thing that will come in the standard library; the crypto part of the standard library in the next two or three years will be post-quantum algorithms, which are very cutting edge at the moment. We will get -- like you say, we will get to make API design choices that may come back to haunt us in 5 or 10 years time. We don't have the 20 years of design experience or usage experience of these algorithms that we have with RSA...

**Natalie Pistunovich:** This sounds like an episode number three on the topic, where episode number two is the second half of this list, and episode number three is all the quantum things that you're planning to put in it.

**Filippo Valsorda:** Yeah. Or all the mistakes we've made, and... \[laughter\]

**Natalie Pistunovich:** And you will be making. This is the list of the mistakes that I plan to do...

**Filippo Valsorda:** Yeah. \[laughter\]

**Roland Shoemaker:** Right, yeah.

**Filippo Valsorda:** Indeed, there was a lot more stuff on the list, because it's exciting also, because we're now getting to work on things like SSH, and there are more people on board... There's \[48:35\] now, who's working on the golang.org/x/crypto/ssh package, which - possibly one of the underestimated packages in our purview that really needed a maintainer...

**Roland Shoemaker:** Yup. It's second perhaps to the TLS package as one of the most important packages that nobody thinks about.

**Filippo Valsorda:** Maybe because it works a little too well, but that's not to forever. \[laughter\] Our SSH package had started to rot. I remember just scrambling because it was about to stop working with GitHub... And that would have been bad for all of the CI companies, for reasons you can imagine... And so we had to roll out very quickly the changes. Nut now instead we're much more ahead of the curve. I think we implemented a thing like support for keystroke obfuscation at the same time as OpenSSH added it... Which is six years faster than we've usually been able to do. So I'm very happy about what \[unintelligible 00:49:32.19\] is doing. Maybe we will have Nicola on for episode two, for part two.

**Natalie Pistunovich:** Yeah, that sounds like a good plan. What else sounds like a good plan?

**Jingle**: \[49:45\]

**Natalie Pistunovich:** So gentleman, what did you bring with you as an unpopular opinion?

**Roland Shoemaker:** I have an opinion that is tactically chosen to annoy the most people possible... \[laughter\]

**Natalie Pistunovich:** Everything is legit in this section.

**Roland Shoemaker:** Okay. So there is one of the ongoing debates between software engineers is "What is the best terminal text editor?" Filippo is making great face... \[laughter\]

**Natalie Pistunovich:** It's a scary body language.

**Roland Shoemaker:** Right. Typically, this argument is between people who really enjoy Emacs and people who really enjoy Vi or Vim. I take the third position... I think that they're both terrible. And that in fact, the best text editor is Pico, which is a wonder -- it's incredibly lightweight, it tells you all of the shortcuts that you need... You don't have to find a secret manual somewhere. It just does what you want. And it's on almost every system.

**Filippo Valsorda:** I strongly disagree. I actually think the best one is Joe, which is the only one I ever learned to use. \[laughter\]

**Natalie Pistunovich:** I'm gonna have to add links to both of them in the show notes for people to know what are you talking about.

**Filippo Valsorda:** Oh, Joe is an even simpler and more for beginners version of --

**Natalie Pistunovich:** Great for people who are programming in Dr Scheme. \[laughter\]

**Roland Shoemaker:** I think my opinion is very much formulated by the fact that the very first -- I learned how to use email from my mother, who had an email account from her university, and would telnet into a server at the university and use Alpine, which is a very old email client that is -- Alpine is actually terrible... But Pico is a text that it's a based on the semantics of Alpine.

So when I first started actually doing software engineering, and I was using -- I was like "Oh, I can only --" Now I use an IDE, because I'm a normal person... But at first I was like "Oh, I have to use my terminal text editor, because that's what all the cool people do." And Emacs and Vim both make me cry. I've tried multiple times to use both of them, and I just cannot get my head around it. And Pico was just great, because you'd just typing in it like you would in a normal text editor, and it has shortcuts, but it has a little bar at the bottom that tells you what the shortcuts are. So if you forget, it's very easy to figure out. But I don't -- this is not something I will tell people. I am exposing my greatest secret right now.

**Filippo Valsorda:** No, I truly enjoy that. We spent like an hour talking about the intricacies of cryptography, and being like "Oh yeah, the Go security team..." and then we just went all out with "We disagree on which editor is the best", because we used two of the simplest editors possible.

**Roland Shoemaker:** Yup.

**Filippo Valsorda:** \[laughs\] This is like when people say "Oh, real programmers use keyboard shortcuts for everything. They don't touch the mouse", and Rob Pike answers "I guess I'm not a real programmer then." Yeah, because Plan9 is entirely mouse-based. Well, not entirely, but you do a lot with the mouse... Because you know, 2d input is actually kind of nice.

**Roland Shoemaker:** \[53:27\] Yeah, it turns out the mouse was a good invention.

**Filippo Valsorda:** Yeah, it's okay. It's totally okay to use the mouse.

**Natalie Pistunovich:** Or a keypad. We're not judging.

**Filippo Valsorda:** Yes.

**Natalie Pistunovich:** Filippo, do you have an unpopular opinion? Or have you been just sharing them throughout the episode?

**Filippo Valsorda:** I'm gonna go with one that's more topical this time. This one I think will have the opposite effect of Roland's. It will make very upset, but a tiny amount of the listeners. So there's these elliptic curves that are the NIST elliptic curves, the ones standardized by the National Institute of Standards and...

**Roland Shoemaker:** Technology.

**Filippo Valsorda:** And Technology. Thank you. And it's a US agency, and they have collaborations with the NSA... And there are people who think that they're clearly in cahoots, and clearly trying to sabotage all of the cryptography, and including the new post-quantum stuff, and so on... And then there's these older curves, which half of their selling point is that they're not made by NIST, who's evil. And my unpopular opinion is that the NIST curves are great. They're absolutely fine. They used to have the problem that we didn't have good formulas for them; very specifically mathematical formulas. And then - was it \[unintelligible 00:54:49.15\] I think? Anyway, in 2016 or something like that this cryptographer just published a paper with better formulas for them, and now we have good formulas for them... And now they're great. \[unintelligible 00:55:02.05\] curves, they are generated from a hash... Do we know what the hash is? No. Trying to work on that; if anybody finds it, I have $12,000 for them. I'm not kidding. I actually have $12,000 earmarked as a challenge. You can search NIST --

**Natalie Pistunovich:** Filippo is joining \[unintelligible 00:55:22.06\]

**Filippo Valsorda:** Not quite liberally, but yes. Honestly, if you want to make it a suitcase delivery, if you've found the seeds, I will deliver the bounty to you in a suitcase.

**Roland Shoemaker:** What about a burlap sack with a dollar sign on the side? That seems more appealing to me, but...

**Filippo Valsorda:** I'm a theater kid, I will absolutely go for such a drama. \[laughs\] You would just make me happy. There is the thing where you can't cross borders with more than 10k. We will figure it out.

**Roland Shoemaker:** Yeah, with more than $10,000.

**Filippo Valsorda:** We'll figure it out. I'm Italian, I'm sure I can --

**Natalie Pistunovich:** You can work something out.

**Filippo Valsorda:** I can work it out. But anyway, do we know exactly all the history of it? No. But they are safe enough, they've been secure for years, and they actually have less problems than alternative curves these days. So actually, NIST curves are fine. And this will sound like the least unpopular opinion to a bunch of people, and then a few other people instead will scream in my mentions in like two hours.

**Natalie Pistunovich:** Okay, let's see if the unpopular opinion and the prediction were working. I'm coming with an unpopular opinion that is not fun and not easy and sure is loaded, and affected by the situation recently... Or everything that's been going on. I've just started talking about how I'm coming out of the quiet hard two weeks... So I think that taking hostages, babies and little kids should be condemned by everyone and should not be associated with one political opinion, another, or the lack of it. Good luck to me having this on the Twitter poll... But I do want to say that.

And I want to say thank you very much to you both for joining...

**Filippo Valsorda:** Thank you.

**Roland Shoemaker:** Yeah, thank you for having us.

**Natalie Pistunovich:** There will be episode number two on the second part of the list; there will be an episode number three on the quantum stuff. And until then, have a happy Halloween!
