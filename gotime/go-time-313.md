**Natalie Pistunovich:** My name is Natalie and I'm joined again by the three musketeers: Roland, Nicola and Filippo. How are you doing?

**Nicola Murino:** Well...

**Filippo Valsorda:** We are fine, thanks

**Natalie Pistunovich:** What is your favorite fencing style, speaking of musketeers? \[laughs\] It can be instead of the unpopular opinion.

**Roland Shoemaker:** Yeah, the only thing I know about fencing is the term epee... Because it's used in the crossword all the time... But I have no idea what it actually means.

**Filippo Valsorda:** So my answer is \[unintelligible 00:03:41.07\] but I don't actually know if in English we also use the same name or not.

**Roland Shoemaker:** Yeah, the one with swords. I think that's probably right...

**Natalie Pistunovich:** There's three types of those. There's one where you can only stab specific parts of the body, there's ones where you can only get points if you attack, and one is all the rest. We can consider switching to unpopular opinion for that part...

Fun trivia - I used to be a fencer all through high school. I love talking about that. Plus, it's all for one, three for one, or something... Third episode. So exciting things will come with Go 1.23.

**Filippo Valsorda:** When you said part three, in my head I thought "Oh, maybe it's part three or five, and then we'll be done, and we will not need to make any changes anymore", right? \[laughs\]

**Natalie Pistunovich:** The security trilogy ends... Yeah.

**Filippo Valsorda:** But yes, as Roland was saying earlier, work is never ending.

**Roland Shoemaker:** Yeah, that's probably a good thing though... It provides a level of job security that is reassuring. \[laughter\]

**Filippo Valsorda:** Roland, we're not supposed to talk about this in public... \[laughter\]. Anyway - yes, Go 1.23, lots of nice

stuff coming. There's a bunch of crypto TLS things coming from Roland... So, you know, I'm getting you started.

**Roland Shoemaker:** Yeah, we can start with that. Yes, crypto TLS... I think it's probably one of the most used packages that we have in the crypto subtree, whether people kind of know that they're using it or not. If you're using a net HTTP client, you probably use crypto TLS without ever knowing, which is nice...

There hasn't been many major protocol changes for a while. The kind of big thing that is coming down the road now is what's referred to as "encrypted client hello", which is not a particularly great name if you have no idea about the semantics of TLS handshaking... And there was a precursor effort that was called encrypted SNI, Encrypted Server Name Indication, which is when you handshake, when you do a TLS connection, because in most modern web servers now you have a single server serving a lot of different websites, you could have -- there's a little field that happens during the TLS handshake that says which server you're actually trying to connect to. You're connecting to 1.1.1.1, but actually, you want to connect to dns.cloudflare.com. I forget what the hostname they actually use is, but... So you provide that little bit of information that lets the TLS stack know "This is who I'm actually trying to talk to." But privacy people quite rightly brought up the fact that this kind of leaks in plain text, who it is that you're trying to talk to.

So the network stack has slowly been trying to get rid of these privacy blind spots, and we now have secure DNS, so someone who is just watching your network traffic cannot see that you're looking up the IP address for cloudflare.com. But as soon as you do a TLS handshake, you're leaking this information, saying "Actually, hey, this is exactly who I'm looking for."

So the idea was to change TLS to allow you to kind of mask this information. So this is what is now called encrypted client hello, which - I won't get into the details of the actual protocol changes, because it's not particularly interesting, and it's very complicated... But I think this is a really nice change, that will for most people be completely transparent. The idea is that once we have support for it in Go, we will be able to wire up the net HTTP clients and everything that relies on that, so that assuming that you are using secure DNS, which is another problem that, while there is a solution for, who knows how many people are actually using it. There will be kind of -- we're slowly reducing the kind of privacy leakage that happens when you try and connect to servers, which is nice. And for 99% of users, this will just -- they will get this win transparently; you won't have to do anything. People doing strange things with TLS will probably need to make some changes, but they are thankfully in the minority of people.

**Filippo Valsorda:** \[08:18\] Yup. There's also an interesting API angle there, because ECH uses a different specification called -- oh, I pronounce it wrong every time. HPKE?

**Roland Shoemaker:** Yeah, Hybrid Public Key Encryption.

**Filippo Valsorda:** Yes.

**Natalie Pistunovich:** And ECH is...?

**Filippo Valsorda:** Encrypted Client Hello. HPLE is something that we'll probably end up wanting to maybe - I'm not committing to anything - expose in the standard library... And so Roland's first iteration is a useful starting point to figure out what the API should be. Because HPKE is one of those things where you can combine everything, with everything else. And we hate exposing those in the standard library. So we'll have to figure it out.

**Roland Shoemaker:** Yeah. Typically, we try -- this may sound kind of mean, but typically we try to give people as little options as possible... It turns out that making things highly configurable is often what leads to extremely painful bugs... So we try and provide APIs that are very easy to use, and don't require a huge amount of thought. The problem with HPKE is that it provides you a huge amount of options. And how to use it is complicated... So we are lucky that we're able to kind of land a first-try implementation, get some experience, and actually using it inside the standard library ourselves, and then see "How could you use this incorrectly?" And then slowly file away those edges before we publicly propose an API that everyone else will have to use. Because once we land something in the standard library, it's kind of set in stone. So we really want to try and get it right the first time as much as possible.

**Filippo Valsorda:** The other thing that's coming to crypto TLS in 1.23 is post quantum connections. Did we talk about post quantum last time? I don't know.

**Natalie Pistunovich:** I think we talked about it in the first episode, six months ago. Alongside HPKE and elliptical curves.

**Filippo Valsorda:** Right. So I'll keep relatively short what post quantum is... Is just - maybe quantum computers are coming, maybe not. The maybe yes is a little too big to ignore... And if they can, they will be able to decrypt everything retroactively, and we kind of don't like that. So symmetric encryption is fine, so the ciphers are fine, AES is fine, \[unintelligible 00:10:42.19\] is fine. The thing we need to do something about are the key exchanges, which right now is Elliptic-curve Diffie–Hellman, so p256, or Curve25519, and so on.

So there are these new things, these new algorithms, they're called KEMs. What happened since six months ago is that NIST put out drafts for how the specification of the one they selected should work... And we landed an internal implementation yesterday, I think...

**Roland Shoemaker:** Something like that.

**Natalie Pistunovich:** Nice.

**Nicola Murino:** Two days ago maybe. \[unintelligible 00:11:22.15\] you sent a performance optimization, if I remember correctly.

**Filippo Valsorda:** Yeah, because I figured there should always be a CL waiting for Roland's review, just to keep him on his toes. Yeah, so we have an implementation in the standard library; I went specifically only for 768, which is one of the parameter sizes, which - I'm hoping everybody will just use that, and I'm hoping we'll get away with only supporting that for as long as possible, which is probably like a year or two. But anyway, we're not exposing that in the standard library in 1.23. The plan is to wire it into Crypto TLS, so that if you connect to another TLS peer that also supports these post quantum, by the way, that use both the new stuff and the old stuff, so that, you know, if we get the new stuff wrong, it's not worse than using the old stuff... And this is a whole debate, by the way, which we're going to elide here...

\[12:30\] And we're going to implement this, and... It does make handshakes a little chunkier, a little bigger, which hopefully is not too much of a problem. Hopefully, it's something that we can just turn on, people don't notice, and suddenly, their connections are sometimes post quantum-secure. But we're rolling it out just as an experiment initially, just like HPKE, and then thinking about what the right API to expose it is going to be.

**Natalie Pistunovich:** Are you collecting some metrics or feedbacks about that?

**Filippo Valsorda:** Metrics! That would be great. It would be great to have those, but we don't get to have those. So...

**Natalie Pistunovich:** So you're looking for feedback.

**Filippo Valsorda:** Yes, yes. It works like - we put things in the release candidate, and we tell people to test the release candidate, and nobody tries the release candidate, and then we make the release, because we say "Great, we'll not break anybody." And then the release comes, and everybody comes out and says we broke them.

**Natalie Pistunovich:** So you're asking now security people, anybody who has like extra focus on security in their tools to try the release candidate for 1.23?

**Filippo Valsorda:** No, that's the thing. It's not about security focus. I don't need anybody to -- I mean, if they also want to review the security of it, great. But no, no, we just need people who use crypto TLS - which, like Roland was saying, is everybody - to try the release candidate...

**Natalie Pistunovich:** Anybody who uses net HTTP to try the release candidate?

**Filippo Valsorda:** Yes. Everybody should always try the release candidate, because we're so happy when you show up with bugs during the release candidate, period... And so not as happy when you show up with bugs a month after the release. And not every bug can be found in Canary, but consider that the release candidate is what Google uses internally for production. So you can stick it on a lab machine, or to check if it still connects to your old firewall that's been living in a closet, with no power, and nobody really knows how it's still running, and everybody's afraid to ask, but somehow that one regex handshakes with the new post quantum stuff, and we would like to know before.

**Roland Shoemaker:** A large part of testing for this will really just be interoperability with other implementations of ML-KEM. I think Chrome has landed an implementation, I think Firefox has an implementation... OpenSSL almost definitely has an implementation. So it's more just figuring out "Is there some corner case between the Go implementation and one of the multitude of other implementations out there, that will cause something to explode spectacularly?"

**Filippo Valsorda:** We will be using the Go debugs that I think we talked about in one of the episodes... So whether we turn it on by default or not will depend on the Go line in your go mod... Which is something I feel like we should communicate much better, because you can install the release candidate, but you will still not be testing the thing unless you change the command line. But on the other hand, to test the release candidate, it's as easy as writing go 1.23 rc1 in your go mod file, and Go will automatically go fetch the new thing from the modules proxy, and will automatically run the new version. We really should write more about how all of that works, because I see Roland being like "Is that how it works?!" \[laughs\]

**Roland Shoemaker:** I was gonna say, there is a -- I think Russ Cox wrote a whole long blog post about this. I was just trying to figure out, can you put rc1 in your --

**Filippo Valsorda:** Yes.

**Roland Shoemaker:** Okay, interesting. I didn't know that. \[laughter\]

**Filippo Valsorda:** Yeah, it's a thing you can do. You can just change that line in go mod, kick off CI, and in theory it should just run the rc.

**Roland Shoemaker:** Yeah. I mean, this probably also tells you about how much I write actual Go modules, rather than -- my day is spent in the standard library in such a way that I'm slightly ignorant of how a lot of the tool chain works for normal people...

**Break**: \[16:18\]

**Roland Shoemaker:** Is there also a plan -- speaking of ML Chem, have the SSH people specified using ML Chem in Open SSH? Is that something we have thought about?

**Nicola Murino:** I think these will be added later. Currently, I know about AWS in its AWS transfer family for SFTP already supporting a post quantum algorithm. But Open SSH still not does ship this support. And we've spoken about this with Filippo some time ago, and we will try to support a post quantum algorithm, a post quantum key exchange after Open SSH ships with the release or ships to their Git repository for the foreseeable Open SSH. And since these new crypto algorithms are internal to Go it's also very important to move Crypto SSH from x/crypto to Go itself, so it can use the internal import to use these this new algorithm. It will be an interesting development. And also for SSH, it will be interesting to check the interoperability with other implementations, mainly Open SSH. The reading implementation, but also AWS and other implementations that we'll add post quantum support in the meantime.

**Filippo Valsorda:** By the way, Open SSH I think has a different algorithm that's post quantum, because they picked it way before NIST made that their choice. And they did not pick what NIST ended up picking, so we're not implementing the older one, and then Kyber, or ML-KEM - which is just the boring name for Kyber, because we can't have nice things, so NIST renamed it.

**Roland Shoemaker:** Yeah... Did they pick one of the lattice-based ones, or...?

**Filippo Valsorda:** Yeah, Kyber being the lattice-based... Oh, sorry, Open SSH. Yeah, Open SSH had NTRU.

**Roland Shoemaker:** Okay. \[laughs\]

**Filippo Valsorda:** Which is another one of the lattice-based ones. So really, there's no good reason to use one over the other. It's just a historical --

**Roland Shoemaker:** Yeah, they just got there first.

**Filippo Valsorda:** Yeah. And regrettably... Yeah.

**Nicola Murino:** I think it's already there since two years. It's a longer time. It's not recent as an addition.

**Roland Shoemaker:** And has anyone other than Open SSH implemented this key exchange, or...?

**Nicola Murino:** I'm not aware of any other implementations, but...

**Roland Shoemaker:** Okay... \[laughter\] That's not shocking, but...

**Filippo Valsorda:** Indeed. But Nicola mentioned something about x/crypto and crypto, which is a thing that we have two proposals out to get to. And maybe we'll start doing some of that in 1.23, maybe not... But my proposal is about deprecating a bunch of packages, because I still like to go around with my deprecation hammer. I'm not done yet. And there's a few things left in x/crypto that I did not get last time around, and I am getting this time around... And after that cleanup, it's partially aimed to making your proposal possible, Roland.

**Roland Shoemaker:** \[24:12\] Yeah, so the other big proposal that we have -- there's kind of this long history of the golang.org/x/crypto module, which everyone seems extremely confused about what the purpose is... It kind of exists as a historical artifact of people on the team at the time just needing a place to put code that they were working on. And then over time, it has slowly morphed into a selection of incredibly important packages that the standard library relies on... And then a handful of things of, let's say dubious quality, that we have slowly been trying to deprecate or freeze or kind of pretend like do not exist for the last couple of years.

So we've proposed that we will try and make this a slightly less confusing module. We will just move all of the code in golang.org/x/crypto that is important into the standard library. So you will no longer need to make the determination of, "Should I be using this thing from this /x repository?" Does /x mean experimental? No, it doesn't... But also, what it does mean is not particularly clear. So there are things in x/crypto, like x/crypto/, and x/crypto/ocsp, and x/crypto/cryptobyte... They are all things that we kind of rely on heavily in the standard library. And because of that, there seems like there is no good reason not to have them there.

So the idea is that we will slowly start to move packages out of x/crypto into the standard library, and we will leave those packages in x/crypto, but they will eventually just become wrappers around the packages that exist in the standard library. So this won't break anyone who is still relying on those APIs never changing, or that code never moving... But they will just transparently start using actually the standard library without knowing it, and will get all of the benefits of that.

**Nicola Murino:** But at the same time, we have also, for example for crypto SSH, to refactor several things. So the wrapper will be not exactly one to one, because we need to improve some things before joining with the standard library. And this is the reason this will not happen for one immediately, but for the next Go release, if all goes well.

**Roland Shoemaker:** Yeah. And we plan to do this in kind of a piecemeal process. It will not necessarily all happen in a single release. There are some things that we can just kind of copy and paste. The APIs are solid, we kind of don't necessarily need to make any changes. But like Nicola said, there are things that had hard life in x/crypto and have developed the way they have, and kind of when we move them into the standard library, we're kind of getting a second chance to think "Is there a better way that we can design this API?", which, I think for many things there are.

**Nicola Murino:** We can learn from the experience and from all the bug reports we receive, and so we'll try to do something better for the community. Always will be something unhappy from the change, but this is inevitable. We will try our best.

**Roland Shoemaker:** Yeah. And one of the great things about Go modules is if people are really upset about something that we do, they can just use an older version of the module... Unless it turns out there is some massive security vulnerability, in which case they may be on their own... But I try to push that thought to the back of my mind.

**Filippo Valsorda:** \[28:02\] Yeah, and we can remove old stuff, like old hash functions that... \[laughs\]

**Natalie Pistunovich:** It sounds like an internal joke is coming...

**Filippo Valsorda:** No, just me teasing Roland about the fact that we've been -- actually, teasing both of them simultaneously, because Roland has been working on getting SHA-1 out of crypto/x509, which is the certificates of verification library, and Nicola has been working on getting SHA-1 out of x/crypto/ssh. And they have both been extremely painful...

**Roland Shoemaker:** Yeah... I think in -- SHA-1 signatures and X509 certificates have been "banned" in public certificates, i.e. certificates trusted by browsers, for... It must be five years now. Something like that. It's been quite a long time. People kind of saw the downfall of SHA-1 coming, and started trying to replace them with more modern variants... But it turns out that -- and when it was kind of announced that this would happen, and most certificate authorities had transitioned to using SHA-256-based signatures, we decided "Oh, well, we can just get rid of SHA-1 signatures. We can just remove support in the Go X509 library for this, and it will cause no problems, I'm sure." Which we did, and then immediately got a lot of people shouting at us, because it turns out that people rely on a lot of private-public key infrastructure; enterprise certificates still use SHA-1, or they were connecting to people using point of sale terminals that had been designed in the 1990s, and hadn't been updated since, that were relying on SHA-1 signatures... And stuff like that. So we ended up adding a Go debug flag that let you opt into SHA-1, still verifying SHA-1 signatures. 99% of people transparently just stopped needing to support them, and had the support removed. And then we offered this flag and say "If you really need this, we will allow you to opt into retaining this behavior." And I think we added that flag about three years ago. And I believe at the time when we added it, we said "Oh, we will remove this in one or two major releases." I believe it's been about six major releases since we've said that.

We have finally, finally got to the point where, as far as we can tell, there is no major either organization or software project still relying on this behavior. So the goal is that in 1.21 we won't make any code changes, but we will make an announcement that in 1.24 we are going to remove this flag, finally... And you will no longer, regardless of what you do, be able to verify SHA-1 signatures. That's technically not true. If you write a bunch of code, you can verify SHA-1 signatures yourself... But I'm not encouraging anyone to do that. If you need to do that, you need to go and think hard about what you're doing. And then in 1.24, we will just \[unintelligible 00:31:10.08\] And it will be the end of a very long journey...

**Natalie Pistunovich:** Can you get ISO compliance using SHA-1, or do you have to show you're not using that?

**Roland Shoemaker:** It's possible...

**Filippo Valsorda:** So for FIPS, SHA-1 is not an approved algorithm anymore. It's allowed for legacy purposes when you're verifying existing signatures. So if you have like a thing that's already signed, you can use SHA-1 to verify it, which means it's not disallowed from being in a module. But if you still sign things through SHA-1, that is not okay.

**Roland Shoemaker:** No new signatures.

**Nicola Murino:** \[31:58\] In SSH instead we still have SHA-1 enabled as a default. There are very old devices relying on it, and one of the points to move crypto SSH within the standard library is to allow to disable SHA-1 using an environment variable, so we can make the same transition described by Roland. So in the first time there will be an environment variable allowing to reenable it, and then after some release, we will remove this environment variable. Anytime after the recent developments in crypto SSH, we now allow to completely disable SHA-1. But users need to configure themselves. In some pending work we have exposed the supported algorithm, and we divided the algorithm in secure, and supported and unsecure, if you have to explicitly enable unsecure algorithm to have SHA-1. So if you import the supported algorithm, you will have SHA-1 and the other unsecure algorithms disabled.

We also worked to improve the things in other ways. For example, we are working on exposing \[unintelligible 00:33:31.07\] and supported algorithms, so our user can see what device needs to be updated before disabling an algorithm, so that they can plan that update. And we also simplified finding the algorithm by exposing in the algorithm negotiation errors. With the algorithm negotiation errors you will exactly know what algorithm negotiations failed, what are the supported algorithms, and what are the recasted algorithms from the client or from the server. And this information before this change that we are still working on were available as a string within the error message. Now instead they are more structured. The error will expose a proper list that our users can search, and match with the algorithm we exported. So it will be much more easier to understand what device, what clients or servers need to be updated, and report the errors to our users.

**Filippo Valsorda:** Yup. Also, I know that we just recently managed to fully round out support for the new hashes... Because SSH used to say "Oh, if you're using RSA, you must be using SHA-1." That's just completely tied. And you know, SSH is a protocol that has 20 years. We've learned a few things about how to do protocols since, and it's actually very impressive that it's still secure and still going well after 20 years. But one of the problems it had was that you had to use SHA-1 to use RSA. So then they split it and they said "Okay, so you can use a key of type RSA, but that you can use with different algorithms. It can be with SHA-1, or with SHA-56" and so on. And that turned out so many bugs, because all over the place things that were supposed to send the algorithm were sending the key type, and mixing them up, or when some certificate wasn't used, hitting edge cases... We think we hit the last one today... \[laughter\]

**Nicola Murino:** \[35:51\] Yes. Hopefully the last one will be merged in the next few days. And it was the last problem when a client needed to validate the server response for the public key. And it turned out the Open SSH implemented -- there was a shortcut in the Open SSH implementation. They don't validate the algorithm sent from the client \[unintelligible 00:36:18.28\] receive it. They just validated the key type. And it was a bug we had for a lot of time. There are at least four or five open issues about this. And because initially this bug was noticeable only with a proprietary server, only recently a user reported \[unintelligible 00:36:44.25\] using a Node.js-based SSH implementation... So we can really understand what is going on, compare with Open SSH code which was working, of course, and apply the same workaround that violates the specifications, of course. \[laughter\] So that's strange.

**Filippo Valsorda:** You've gotta love the archaeology aspect of this... Because what happened is that the spec was changed, then Open SSH implemented the spec correctly on one side, but on the other side, to make their job easier, they made it more lenient. But you know, that just means that they supported more things. So so far, so good. But since Open SSH supported that, older implementation started making the mistake, and Open SSH would not catch them, so nobody would notice. And then they would use Go against that, which does the right thing. And that would end up in a bag for us. There's just a whole history of protocol evolution that led us to this moment. \[laughs\]

**Nicola Murino:** Let's hope we have fixed all the bugs now, regarding this mismatch between key type and algorithm type. I hope it's the last one.

**Filippo Valsorda:** We've been waiting to write up the triumphant announcement that you can finally turn off SHA-1, and that SHA-56 is completely supported, and we've had this endless tale of bugs...

Speaking of protocol bugs, something I'm very excited about and that I was supposed to do years ago, and I haven't done yet, is for TLS instead setting up our tests to run the BoringSSL Test Suite against our implementation. The test suite is called BoGo. And Roland, you were just working on that...

**Roland Shoemaker:** Yeah, it's really interesting, I think... TLS is a really complicated specification, and it's kind of additionally complicated by the fact that while it over-specifies a lot of things, it also underspecifies some things... So there's a lot of corner cases where you kind of get weird interoperability bugs. And BoringSSL is kind of the de facto TLS implementation now, basically because it is what Chrome runs. So it has probably handled more TLS handshakes than arguably any other software; and someone will probably argue with me about that, but... And so it's kind of the golden implementation for TLS. They have this giant test suite that was originally just for BoringSSL, and it would test every single protocol behavior that they could think of, and had kind of regression cases for tons of bugs that they had seen... And at some point, David Benjamin, one of the engineers, worked on it to make the test suite applicable to other TLS stacks. So you can wire up this complicated system to run a Go TLS client or a Go TLS server against a kind of modified version of it what it turns out is the Go TLS stack... Which is written in a way to kind of introduce bugs and cause strange behaviors, so that you can kind of see "Is your TLS stack actually doing the right thing?"

\[40:25\] We've had this long-running plan to kind of integrate this to test the real Go TLS stack... Because it's really hard to test. It turns out that there are so many different things in TLS that you could do either correctly or incorrectly... And trying to manually write unit tests for every single possible behavior across three or four different versions of TLS, and with three or four different types of keys, or certificates... All of this is impossible for a single person to do. So BoGo is hopefully going to eventually replace a lot of our TLS tests, and instead of kind of writing individual unit tests ourselves, we can then go and contribute tests to the BoGo Test Suite... Which tests BoringSSL, but it is also used for Rust TLS, which is one of the largest Rust TLS stacks... And I think one of the Python ones also uses it. There's a handful of people who are using it... So it lets us kind of not only test ourselves better, but it also kind of allows for the TLS ecosystem to slowly converge on what is the right answer for some of these things.

When I first ran the BoGo test suite there were a number of real bugs, which we fixed... But the vast majority where - you know, when you encounter an error in TLS, you send what's called an alert, which is like a single \[unintelligible 00:41:56.24\] that indicates what it was that went wrong during your TLS handshake. And in the TLS specifications a lot of these are under-specified. It's like "Oh, you abort the connection, but no one ever says what alert do you send." So when we ran these tests, we got like 100 or 200 errors that say "You're sending the wrong alert when this thing happens." And I went and I talked to David Benjamin, who wrote a lot of these tests, and I said "Well, why did you pick this alert?" And his response was "Ehm... It's just what made sense..." \[laughs\] And I could probably sit down and argue for a good hour or so about why some of the alerts we picked were better than the alerts that he picked... But in reality, this is not important to anyone; it's probably more important that we do the same thing that BoringSSL does, than being semantically correct about which alert you're sending...

**Filippo Valsorda:** In general, I'm a very big fan of this sort of test sharing, because I really think that things that have specifications, which - in cryptography, a lot of things have specifications - should share test vectors. Because there's no good reason what we do is not useful to others. Especially in cryptography, there is no good reason that what we test is not useful to others, and what others are testing is not useful to us. There are a couple of projects like that... One is Wycheproof, which is named after the smallest mountain in the US, in the spirit of setting achievable goals... \[laughter\] Which was a project that was started at Google by Bleichenbacher and others, and has now moved into a community project that I'm part of, called C2SP. And we're going to try to make that into a repository to share test vectors across implementations. And BoGo, I think, is a very good example of that working out.

**Roland Shoemaker:** I will have to correct you very quickly... It's not America. Australia.

**Filippo Valsorda:** Wait, really?

**Roland Shoemaker:** Yeah.

**Filippo Valsorda:** Mount Wycheproof is in Australia?

**Roland Shoemaker:** Yeah, it's in Victoria.

**Filippo Valsorda:** Huh.

**Roland Shoemaker:** Very important.

**Filippo Valsorda:** I think I've been saying this for a while now... I've been spreading fake news.

**Roland Shoemaker:** \[44:19\] I think it's also Wycheproof, but... \[laughs\]

**Filippo Valsorda:** Oh, that we can chalk up to my Italian accent. Whatever.

**Roland Shoemaker:** Yeah, you know... If you show that to an American, that's probably what they would say as well, so... \[laughs\]

**Filippo Valsorda:** Fair enough. Fair enough. But yeah. Huh. I placed it completely on the wrong side of the world. Oops... Cool. I'm trying to think what other Go 1.23 things are there... And I think there's the crypto rand changes, and I can't think of anything else. And crypto rand is the package that you use to get random bytes out of. And it's mostly fine... Like, it's not really one of the things that makes me think "Oh no, I wish I could change things in the standard library" so much. But it also has a few things we can make a little better, and I'm thinking of doing just a single pass in this release, and just clean up all the things.

The first one is that -- it was actually an idea that came from Russ Cox, which was very entertaining, because I was like "Hey, Russ, can I make a new API in crypto rand that doesn't return an error and just panics if it gets an error? Because it will be much more usable, and --" I'll tell you what API was. But usually, he's the one that argues for being more conservative, right? And so I expected him to be like "Well, I don't know... How often is that going to panic?" And instead, he was like "Hm. Really? Why does crypt rand ever return an error?" And I'm like "Well, yeah, that's a good point... We're using the system calls on modern Linux, and... Well, I guess \[unintelligible 00:45:52.14\] could be a problem." And he basically told me "Look, if you can fix it so that it almost never fails, we could just make it throw." And if you've never heard about what a throw is in Go, and you're about to say "Wait, Go doesn't have exceptions. There's no throwing in Go", no, no, there is a function called throw. It's an internal runtime function that just crashes your program, and there's nothing you can do about it. \[laughter\] Because that's to make sure that nobody tries to set up a recover around it. Because there's nothing to recover.

And I went in there, and they changed how we'd get random bytes on macOS, because I texted friends at food companies that shall go unnamed, and I asked "Okay, so what should we use on your platform?" and they're like "Yeah, that one is much faster, and never returns an error." Would you look at that. And so now we have random bytes that basically never return an error. If you're curious, there's this long proposal that spells it all out. And so we're just going to make a throw and crash the program if you're in a very weird corner case in which you misconfigured your system so much that even with all of that, we can't get random bytes. And that makes me deeply happy. \[laughter\]

So that's gonna be fun. Then I want to make it a little more efficient by not causing it to escape the byte slice you pass it into the heap, so that you can avoid allocations... I want to make it not import math big, or at least I want to make an internal version of crypto rand that doesn't import math bag, so that I can stop some packages in the standard library that need random bytes, and don't need math big, which - we talked about it in the other episode. I can make sure that they don't import it at all.

And yeah, a few little changes like that... I feel like there was a listener one... Oh, yes, and there's the new API, which is going to be something you give it char set, and can give you a random string made of those characters. So you can generate things like passwords, and tokens, and stuff like that. And I want to make it an API that you don't configure at all; you just give it the char set and it gives you back a string using those characters that's long enough to be secure. And then if you know what you're doing, you can slice it down and make it shorter, because it doesn't return an error. So you can just put the slice \[unintelligible 00:48:21.16\] right after, and... Yeah, fun stuff with crypto randomness.

**Natalie Pistunovich:** \[48:27\] I'm thinking of all the weird password requirements that I've seen on website. It's like, it can only have one digit... \[laughs\]

**Filippo Valsorda:** Oh, wow. Yeah, if it can only have one of something... Oh, actually, my position on those is that the answer is that --

**Natalie Pistunovich:** It's a bad idea. Yeah.

**Filippo Valsorda:** I mean, it's a bad idea, but also, you solve that by just generating a password that's just alpha letters, and at the end you put an exclamation point, a one, and a capital A. And if anybody gives you grief for it, you can tell them Filippo said it's okay. \[laughs\] They can be pissed at me.

**Natalie Pistunovich:** "If you have these rules, this is okay." Yeah. I can get behind that.

**Roland Shoemaker:** Yeah, speaking of how arcane those rules are, I ran across a very fun - I forget where this was - browser game that somebody wrote... Where the goal of the game was to input a syntactically valid password, and each time you got it right, it would introduce a new, even more arcane rule that you had to follow. Like, all of the numbers in your password must add up to a prime larger than... You know... Something... It got really hard. I don't think I ever finished it. But I have seen some pretty crazy rules on passwords, so... It's good training.

**Natalie Pistunovich:** Yeah, there's also that game of prompt hacking, that you have to convince it to tell you \[unintelligible 00:49:52.10\]

**Roland Shoemaker:** Oh, God...

**Natalie Pistunovich:** I like those games. They're good. Many things are included in 1.23. We've covered a lot.

**Roland Shoemaker:** Yeah. When we started this, I was thinking "Oh, we don't actually have that much... This is a pretty boring release cycle." But we've managed to fill an hour, so that's a good indication that maybe there's actually more than I thought there was...

**Filippo Valsorda:** I do this every time, too... I learn that we actually did a bunch of stuff as I prepare either these episodes, or the cryptography State of the Union talks... Which, by the way, I just got the email yesterday that it's going to be part of the program at GopherCon US. So if you want to hear basically all of this stuff, but again, with slides, and - I don't know, just me being very excited on stage, that's an option.

**Roland Shoemaker:** Yeah. Filippo wearing a suit.

**Filippo Valsorda:** Yes, also that. With a gopher enamel pin on the lapel. \[laughs\]

**Roland Shoemaker:** It's the most important draw.

**Filippo Valsorda:** \[unintelligible 00:50:51.18\] Also, we're still waiting to hear about lightning talks... But Nicola, you submitted a lightning talk, right?

**Nicola Murino:** Yes. A lightning talks to speak about the state of crypto SSH... But I still haven't a reply from GopherCon. I hope it will be accepted, so I can speak also there about crypto SSH, and the improvement we are doing in year, and the new API for the new version that we'll hopefully include in the standard library. Let's hope.

**Roland Shoemaker:** Fingers crossed.

**Natalie Pistunovich:** Yeah, there will be also a talk by Zvonimir, on the analyses that were done around Go vulnerabilities. Lots of security this year. I think it's really good. All the conferences are going to be putting this important focus on things.

**Roland Shoemaker:** That talk in particular will be really interesting. We've been putting a lot of work into vulnerability analysis, and I think -- not to toot our own horn, but I think Go currently has probably the most advanced vulnerability analysis tooling out there. And it's still essentially in beta, so I think there will be a lot of value there for developers.

**Nicola Murino:** \[52:17\] People are often worried about not real vulnerability. For example, I remember some people asking us to update net HTTP in x/crypto repository. But it was basically unused. So even if that package was vulnerable, that vulnerability is not exploitable in the crypto SSH. It was used only marginally in the package. This is very hard to explain to people, because they run an automatic scanner, and the automatic scanner triggers a vulnerability, and they are alarmed. They want all the vulnerabilities fixed very quickly. But by doing so, there is the risk that we introduce untested features, because we are always on the bleeding edge, or we always use a new package that people haven't enough time to test, and about regression, and such things.

**Filippo Valsorda:** Yeah. This is a basically an ad for govuncheck. I think I can do it in like radio style... "Do you have issues with a lot of vulnerability reports clogging your pipeline? Do you wish your signal to noise ratio was better? Call govuncheck. That is go vun check." \[laughter\] Anyway...

**Roland Shoemaker:** Coming to the Go tool chain at some unspecified point in the future... \[laughter\]

**Filippo Valsorda:** Ask your engineer if beta software is right for you. \[laughter\]

**Natalie Pistunovich:** But do test the release candidate anyway.

**Filippo Valsorda:** Yes, please... \[laughter\]

**Roland Shoemaker:** Yeah, especially if you do strange things. The stranger your code is, the more you should test the release candidate and tell us when you break things.

**Filippo Valsorda:** "Were are you harmed by a release candidate? There might be compensation for you in the form of bug fixes. This conversation might not be available after the date of the release." I've gotta stop now...

**Nicola Murino:** An interesting thing I discovered recently is for example on Debian there are fixable vulnerabilities and unfixable vulnerabilities... Because Debian developers choose to not backport some vulnerability fix. Initially, I was really surprised, because the vulnerability scanner for my Docker image - the image for my open source project - reported a vulnerability. But I check it, and I found that all the updates were already applied. So I was so surprised to see these vulnerabilities. Then I discovered these things about Debian. So basically, everyone publishing your Docker image or things like these is forced to use something like \[unintelligible 00:55:19.19\] because this way you only ship your Go application with the Node dependencies, and so you avoid these fake vulnerability \[unintelligible 00:55:30.21\]

**Break**: \[55:35\]

**Jingle**: \[57:34\]

**Natalie Pistunovich:** So who has an unpopular opinion?

**Nicola Murino:** Okay, my unpopular opinion is that you should pay for open source software you rely on. Of course, you can use open source software for free. But maintaining it and evolving it - it's not free. It requires a lot of time and effort. And you should learn to recognize the value of this work. If you use an open source software at your company, then it would make business sense to sponsor that project, to assure it is healthy and well-maintained. You should not think "I will use it for free, and someone else will pay for me, too."

Let's look at a recent \[unintelligible 00:58:30.05\] What do you see? Maybe the \[unintelligible 00:58:33.17\] Now you understand what can happen if an open source software is not maintained, or poorly maintained. Open source maintainers are generally passionate developers, who enjoy sharing their work with the community. But if they can't pay their bills, their problem could be passed on to you and your company. And you can lose money. A lot of money. What do you do if you find a critical problem in the open source software you're using? Do you open a GitHub issue? Why don't you start to support their work instead, and establish a channel or mutual access and trust? This way you will make your business interest, because the open source project will be sustainable in the long run. And what will happen - developers will work on it full time, and therefore you'll get an even better software. This is a win/win. This is a something really easy to understand, but many people in companies miss it.

And another thing - maybe my real unpopular opinion is that often I get as open source maintainer (and I think I'm not alone) emails like these: "We would like to pay for this feature to be added", depending on the price, obviously. But this is really annoying. You should pay for ongoing maintenance, not to add the nice feature that is only useful to you, and maybe only works for your specific use case. And at the same time, you try to negotiate the lowest possible price.

And after this feature is \[unintelligible 01:00:20.10\] what happened? It happened that the open source maintainer have to maintain it forever. Most people in companies are unable to understand this thing. I'm sorry if I was too passioned, but as an open source maintainer, this is something that I deal with every day, and what I feel inside.

**Filippo Valsorda:** Alright, since we're going on open source maintenance, I will pick one that is not about elliptic curves, and I'll dovetail on that. I agree with Nicola. The other thing that often annoys me, which I think lots of people who are very well-meaning step into it, is when people say "Oh, we want to help the project, so we always contribute our patches up." And I can see Roland going like... \[laughs\] Yes. That's the thing... That does not make the project more sustainable. That sometimes makes the project less sustainable, because now the maintainer has to review the patch. And if it's a feature, like Nicola was saying, has to review the feature and maintain the feature forever.

Now, it's a good thing about open source. You're contributing to the general open source community and ecosystem, and it's a good thing, and I think we all here are drawn to open source as this collective activity. But it's not helping the project itself; it's not helping the project maintainers, because they will still have to review it, will still have to do a bunch of work later on. So it's a good thing, but it does not solve the same problem.

\[01:02:00.23\] And this comes up often, because I say things that sound like what Nicola said, and then people are like "Oh yeah, we agree, we care a lot. We always contribute our patches." And I'm like -- which is not to say that you only have to send money. There's a lot of things you can do to help the maintainers. You can go through issues, and do the initial triage, you can figure out what is the correct behavior for an issue, you can find out what the spec says... Sometimes I just look at an issue and decide that I am not looking into that today, because it's way too complex. And then I come back a week later and somebody went like "Oh yeah, that happens because of this code over here does this thing. And then the spec says that, but actually, Open SSH before that version and after that version, or Open SSL does that with TLS, and that's what's happening." And that's great. When that happens, that actually does make the load on me as a maintainer much, much lighter.

**Roland Shoemaker:** Well, I feel like we've had two incredibly important and philosophical opinions here, and I'm gonna just be incredibly silly now... \[laughs\] I have a very basic unpopular opinion, which is I feel like becoming more and more unpopular as time goes on, which is that I think for 90% of time I spend on the computer, I would prefer to use a desktop PC, or Mac, or whatever, than a laptop. I kind of like -- part of what I hate about laptops is that they're portable, and that you can take them anywhere, and use them at any time. I really like just having my computer in one place, and heavy enough that I cannot pick it up and put it in my bag and be forced to do work down the street, when I go to do something else. \[laughs\] Less time on the computer perhaps is better.

**Natalie Pistunovich:** Then there's the GitHub app...

**Roland Shoemaker:** Yes... \[laughter\]

**Filippo Valsorda:** I like it. Put the computer in a box, close the box... The box is a room. We do not go into that room. We do not speak of that room.

**Roland Shoemaker:** There was a period where I was strongly considering buying one of those time-activated safes that I could put a computer into, but... \[laughter\] Unfortunately, I do still get paged sometimes, so... This could be dangerous.

**Natalie Pistunovich:** Open that safe only with a code from the pager.

**Roland Shoemaker:** Yeah.

**Natalie Pistunovich:** And then it's only when you really have to.

**Filippo Valsorda:** That's a product that \[unintelligible 01:04:26.02\] A safe with Pager Duty integration.

**Roland Shoemaker:** I would be surprised there's not already something like that.

**Natalie Pistunovich:** My unpopular opinion is around pigeons. I recently read a tweet that changed my entire perspective on them... Because for the longest time I was looking at pigeons as like - it's not nice to say, but flying rats. But then that tweet was very long, and was describing how humans used pigeons for hundreds of years, and breeded them exactly to be like our mail carriers, until one day we got technology to fix that, and now they just like depend on us, but we didn't do any proper offboarding, let's say. So actually, it's not their fault. Pigeons are okay.

**Filippo Valsorda:** I'm with you on that one. I'm team pigeon. But also, rats are nice... What's the --

**Roland Shoemaker:** Yeah, what's wrong with rats? \[laughter\]

**Natalie Pistunovich:** When it's a rat pet of yours, that's cool. But if it's a rat that eats into the foundation of your house, or just lives in the inner garden of your building, then it's too much hygiene questions, unfortunately. But yeah, if it's a pet rat, that's cool.

**Filippo Valsorda:** Living in New York, I still remember Mike, the rat that used to live at the 59th Street Station... \[laughs\] It was so reassuring. I would see him most of the times I would go to work....

**Roland Shoemaker:** Right. Japan has the loyal dog that stays at the station. New York has the loyal rat. \[laughter\]

**Filippo Valsorda:** Yes.

**Natalie Pistunovich:** Cool. Okay, that was a very interesting episode, the third one in our series. Six months after the first one. And I hope the next one will be in like two or three months, when we can discuss cool stuff again.

**Roland Shoemaker:** I'm sure there will be more...

**Filippo Valsorda:** It never stops...

**Nicola Murino:** We must align with the Go release cycle.

**Roland Shoemaker:** Yeah, I think we essentially already have...

**Filippo Valsorda:** Yeah, Roland and I are not admitting to it, but really, we're doing this instead of release planning... \[laughs\]

**Natalie Pistunovich:** You can just say like "Release notes - link to this episode." You're good. \[laughter\]

**Filippo Valsorda:** Yeah, we get into the episode and we talk about stuff, and then we look at the notes, and that's what we're going to work on.

**Natalie Pistunovich:** If you have questions, meet me at GopherCon. \[laughs\] Well, thanks everyone, and thank you three for joining us.

**Roland Shoemaker:** Thank you.

**Filippo Valsorda:** Thank you.

**Nicola Murino:** Thank you.
