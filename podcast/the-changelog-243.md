**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode 243, and today we're joined by Jacob Hoffman-Andrews. Jacob is a Senior Staff Technologist at the EFF, he's also lead developer of Let's Encrypt, which is the free and open automated certificate authority.

We talked about the history of SSL, the start of Let's Encrypt, why it's important to encrypt the web and what happens if we don't, their project Certbot, and the impact Let's Encrypt has had on securing the web.

We've got three sponsors today - Linode, Toptal and Rollbar.

**Break:** \[\\00:01:10.09\\\]

**Adam Stacoviak:** Alright, we're back. We're talking to Jacob Hoffman-Andrews. Jerod, this is a show we've wanted to do for a while; we've been using Let's Encrypt, featured it in Changelog Weekly...

**Jerod Santo:** Yeah, just a huge ambitious project coming out of EFF, Mozilla and others, one that we're all behind and we are grateful for and huge supporters of the Let's Encrypt initiative and all the technology behind it. Jacob, thanks so much for joining us on the show.

**Jacob Hoffman-Andrews:** Yeah, thanks for all the kind words. I think one of the best things about the Let's Encrypt project is how much support we've gotten from the whole community out there.

**Jerod Santo:** So far we would definitely define it as a massive success - I would, at least, from my perspective. Of course, what is Let's Encrypt - it's free and automated certificate authority, and what do you do when you want something to be a huge and massive success? Well, starting off with free is a great way of helping that along. Jacob, why don't you just give us real quick for the audience's sake an idea of your role with the project and what you do with EFF?

**Jacob Hoffman-Andrews:** Yeah, sure. I wear two hats. One is as the technical lead for Let's Encrypt itself, which is an independent non-profit. My other hat is as a senior staff technologist at EFF. I write code for Boulder, which is the custom certificate authority software we wrote for Let's Encrypt.

**Jerod Santo:** So are you coding in your role often? I know you said you wrote Boulder - is that your main thing, your only thing? Do you have other things that you're coding?

**Jacob Hoffman-Andrews:** Yeah, it's a bunch of different stuff... And I'll correct that - I didn't write Boulder entirely myself; it's definitely been a collaborative effort from the very beginning. Most of my day is coding generally, although it varies quite a bit. Lately I've been doing some work on documentation, both user-facing documentation and... Certificate authorities have to publish this very formal document called a CPS, that details all the ways in which they validate certificates and issue certificates. We've been revising that so it's easier for everyone to read.

Some of my time is also spent engaging with standards communities. One of the interesting things about Let's Encrypt is it's based on a new IETF RFC which, to break through the jargony acronyms there, it's an internet standard, and it's getting close to standardization.

\[\\00:04:10.14\\\] The cool thing about that is someday other CAs will hopefully implement the same protocol, and you'll be able to use software that works with a number of different CAs interchangeably.

**Jerod Santo:** Let's go back a bit and learn about the history... We always love to find out what's the inception point or the origin story for projects like these, especially when they're big, ambitious projects. We just had a show all about the Atom text editor, and Adam and I were talking with Nathan about that, and we asked... It's such an ambitious goal when you're starting a text editor pretty much from scratch; it's a long-term thing, so how does it start and how do you plan out?

I would say that this initiative to encrypt the entire web, and then the machinations of how you actually go about promoting and doing that is even more ambitious. So can you tell us how it all started?

**Jacob Hoffman-Andrews:** Well, I'll tell you my personal story of how I joined the movement to encrypt the web. I have been a follower and supporter of EFF for many years... EFF had been promoting this notion of "encrypt the web, the whole thing; it's gotta be encrypted all the time to make users safe" for a while, and I'd been kind of following that along. Then in October 2010 I was working at Twitter at the time, and Eric Butler published this Firefox extension called Firesheep. It did this clever thing - it took an attack that everybody already knew about and made it really accessible and obvious.

The problem with HTTP, which is the non-encrypted version of HTTPS, is that somebody with network access can sniff your web browsing as it goes by, and that includes not only what pages you're visiting, but also your cookies. And your cookies, when you're logged into a website, are what authenticate you to the site; so if you can copy somebody's cookie, you can become them. Firesheep demoed this by -- you would install the extension and it would sniff the local network for people visiting Facebook, Twitter, a number of other sites - you could even write your own rules - and it would make it really easy to pop up not only people's handles, but their avatars, and you could say, "Oh, who's this? This person's on the network. I wanna become them." You'd just double-click on it and search their cookies, and suddenly you're in their account.

So I was thinking, "Wow, this is a really good demonstration of why we need HTTPS, and we're at this unique tipping point in the history of the web where HTTPS has gotten cheap enough to implement. I think Gmail had just recently enabled it for Gmail access, and had published a blog post saying "Hey, this is actually pretty cheap and easy." And combined with that, there was this demonstration of why it was so important. So I started working within Twitter to make all of Twitter HTTPS. I expected that to be a three-month project; it wound up taking about a year.

In the process I moved on to the security team and became a security expert, which I wasn't before.

**Jerod Santo:** Why did it take three times what you thought?

**Jacob Hoffman-Andrews:** There were a number of interesting obstacles. For any site moving to HTTPS, one of the tricky things is what's called mixed content. When you load a web page, it's not just the one URL; it includes a lot of other stuff. It brings images, iframes, video, Javascript, CSS... So you might have an HTTPS URL for a page, but an HTTP URL for the images, or the Javascript, or the Flash, even... Back then, Flash was more of a thing. \[\\00:08:15.11\\\] So browsers treat that specially, because they wanna be able to say, "This pageload is securely encrypted or not?" and if the main page is HTTPS but the Javascript isn't, it's not safe, because somebody can just man-in-the-middle at Javascript and replace it with something malicious. So if we had just gone straight to HTTPS right away, we would have gotten a lot of this mixed content warnings, so first we had to fix up all the internal URLs, so they would also be HTTPS.

But the big problem then was there was a lot of third party content. If you tweeted a YouTube video, for instance, or a Flickr image, the page would load Javascript and images from this third party source, so we had to make sure all those third party sources had HTTPS. Some of them didn't yet, so we had to go bug them. So that was on the mixed content front.

The other interesting thing was we were deploying a new load balancer at the time, and there was some concern about how load balancing HTTPS to the old frontends would work, so we waited on the deploy of that so we could really scale it up and be faster.

**Adam Stacoviak:** You mentioned the cost had become low enough to implement HTTPS. What's the actual cost behind that? Your example was Gmail, and they said that it had become low-cost enough to actually implement it; what's the cost to bear when doing this at that level?

**Jacob Hoffman-Andrews:** There's maybe three main costs I like to talk about. The one that used to be a big deal, that people thought was a big deal was CPU cost; encryption was expensive, and if you enabled it for all your users, you might see a big spike in the amount of CPU used, which would mean you'd have to buy more machines sooner. But computers were getting faster, so one of the key figures that Gmail published in their blog post was 1%. They found that the CPU usage went up only 1% after turning on HTTPS for all the users.

One of the interesting things about cryptography is the computers getting faster means that they can do the encryption faster. It also means that somebody trying to break encryption can go faster and try to break it faster, but not at the same rate. So it's not like "Oh, encryption got twice as weak when the computers got twice as fast." I mean, in some very technical way you can brute-force twice as fast, but the margin of difficulty is high enough that we're still safe.

**Jerod Santo:** Yeah, the whole point of the process is it's easy to calculate on the one side and it's really hard on the other. Your processor speed - your wins are bigger than your losses in terms of that. The one that I always thought about was the network cost, or the connection cost. Is that your number two?

**Jacob Hoffman-Andrews:** Yeah, that's a good point, so I should bump the list to four. In terms of performance, what somebody sees when they're loading your web page, there's a bit of a performance cost for the handshake.

\[\\00:11:55.22\\\] Normally, when you connect to a website you do regular TCP handshake, which costs about one-and-a-half roundtrip times (RTTs); that can be commonly around 150 milliseconds, depending on your connection. When you connect to HTTPS, on top of the regular TCP handshake, you also need to do a TLS handshake. TLS is the encryption protocol than underlies HTTPS. That adds another one or two roundtrips to that first page load. That can be mitigated somehow for reconnects. If you're connecting to a web page for the second time, you can take advantage of some cached information and bring that down to one roundtrip time.

So there's a slightly increased time to load cost for HTTPS, on the order of tens to hundreds of milliseconds, depending on how bad your connection is. But you mentioned HTTP/2 earlier, and I think this is a really good time to introduce what HTTP/2 is. Do you wanna talk a little about HTTP/2?

**Adam Stacoviak:** Sure, yeah.

**Jacob Hoffman-Andrews:** So one of the big problems with HTTP/1 is that you only get to request one resource at a time. So you have to request it, and wait for the full response; then request another one, wait for another full response. So in order to load pages faster, browsers started opening multiple connections to the same host. So they would kind of get this simultaneous download advantage. This has a number of flaws, and I won't go into the flaws in a ton of detail; I think we could do a while show on HTTP/2, but the gist of it is we needed a protocol revision that would let browsers request a whole bunch of stuff, and servers to send it back as it came in. That allows a really big performance win.

So that protocol was originally called Speedy; it got standardized and it's now called HTTP/2. One of the tricky things about it is it's such a radical departure from how HTTP/1 was encoded that it wasn't really practical to deploy over HTTP, because you have a number of what's called "middleboxes" - these are machines that sit on a network and try to intercept traffic (especially HTTP traffic) and do something to it.

They might be caching, they might be \[unintelligible 00:14:39.16\] for inspection, they might be scanning for viruses... But a lot of these middleboxes screw up HTTP/2 in various ways, or they don't cleanly pass through things they don't recognize. So the implementers of HTTP/2 decided that it would only be supported on encrypted connections, because the middleboxes can't generally interfere with those. It was the only practical way to deploy it. What that means is today the incentives are a little flipped; you actually get a performance win from using HTTPS, because if you do, the browsers accessing your site can upgrade to HTTP/2, so you get all these great \[unintelligible 00:15:23.06\] wins.

**Jerod Santo:** That was a very nice summary, by the way. We do have a show - Adam, I didn't get a chance to pull it up... Ilya Grigorik has talked to us in a show about HTTP/2. For those interested, who wanna go deep into that, Ilya knows tons about HTTP/2. I don't have a show number... We do have a search function now on our website, which people have been asking for; just go there and search that, and you'll find that episode. It's very good.

**Adam Stacoviak:** \[\\00:15:49.09\\\] I've got the episode number for you... It's episode 161. So changelog.com/161.

**Jerod Santo:** Cool. Did you use our search function?

**Adam Stacoviak:** I did.

**Jerod Santo:** Very nice.

**Adam Stacoviak:** Well, the only problem is - I'll say it here on air - I had to put the slash in there. So there's two searches, technically, you could do: "http2" or "http/2"

**Jerod Santo:** Well, that's the people that named it's fault. So you were going through the costs, and I assume the next one's gonna be the cost to purchase a certificate. That's gotta be in there, so continue on that path. Then we're gonna get close to our break; we wanna get to a point where you've joined the initiative... So get us there. But tell us about that cost, because that's a big one - not for the googles of the world, but it's big for small and independent site owners.

**Jacob Hoffman-Andrews:** Alright. So it used to be the case that you had to pay a certificate authority, and there are only for-profit certificate authorities. You'd have to pay them to get a cert. When SSL - which is the predecessor to TLS - was first developed, certificate authorities were rare and it was uncommon to even get a certificate, so they charged a lot. It could be on the order of hundreds of dollars. In 2010 you could get a certificate from a commercial CA for around $15, which is a lot less, but it's still not nothing... Especially if you're running an open source project and you're not paid for it. You balance that against, "Do I really wanna bother?"

In 2010 there were a couple of commercial CAs that did have a free product, so you could get a free certificate from StartSSL. Actually, I think StartSSL was the only one at the time. WoSign started up later with their free offering. But it was really difficult to use, and that's kind of a nice segue into the fourth, and what I think is the most important cost of implementing HTTPS, and that's human time. HTTPS and TLS configuration is a really arcane specialty. Most people don't have that specialty, and shouldn't have to learn it necessarily. But with older CAs, you had to learn a certain amount about what even a certificate is, how to install it correctly and how to configure your cipher suites. And there's a lot of ways you can mess it up in ways that are really hard to figure out what's wrong. And it takes time.

Even if you spend the time to learn it, even for an expert... We actually did a couple of informal experiments. We had an experienced developer try to set up a certificate on their website during the leadup to launching Let's Encrypt, and it took him I think three hours. So at a certain point you just start to think it's not worth it.

**Adam Stacoviak:** It's a difficult task, that's for sure.

**Jacob Hoffman-Andrews:** Yeah. And this was all in the context of -- we started this branch of the conversation talking about working at Twitter; we had dozens of certificates we had to manage. We had a pretty big engineering staff at the time, but even then, we would screw it up from time to time; we'd forget to renew a certificate, or witness configure one, and it consumed a lot of time from some skilled engineers.

So those are the things that kind of got in the way, but eventually we turned it on. The cool thing now is if you use Twitter, you don't even have to think about HTTPS. It just happens for you.

**Jerod Santo:** So you spent that year at Twitter getting them on HTTPS, and then at a certain point the Let's Ecrypt initiative and the EFF either came to you, or you came to them...? Get us there.

**Jacob Hoffman-Andrews:** Yeah, so I came to EFF... I was thinking, "You know, I really wanna reach out and do more for the web in general.

\[\\00:19:55.18\\\] At the same time, I had been working on HTTPS; some folks within EFF and within Mozilla had independently been trying to get a certificate authority started, for kind of the same reasons. They saw the need to encrypt the web, they saw that the lack of free certificates from a non-profit automated CA was an obstacle, and they wanted to improve that. So I joined up and started working on the project, and in 2015 we launched; we started a beta I think in September or October (a closed beta) and then we opened it up to the public in December. Since then, it's just been kind of like a rocket.

**Adam Stacoviak:** On fire, yeah.

**Jacob Hoffman-Andrews:** Yeah. The main step we count is not the number of certificates we've issues, but the number of certificates active; there's some reasons for that around a certificate lifetime, but the number of active certificates issued by Let's Encrypt is about 30 million at this point.

**Jerod Santo:** Wow.

**Adam Stacoviak:** That's huge. That's 30 million sites and/or servers that previously were not being encrypted and previously subjected to this man-in-the-middle issue -- depending upon the service, obviously... But they were at risk.

**Jacob Hoffman-Andrews:** Yes.

**Jerod Santo:** Well, they could have been using other...

**Adam Stacoviak:** That's true, they could've been using others, but still, obviously, maybe half weren't.

**Jacob Hoffman-Andrews:** Well, actually a lot more than that. A colleague of mine actually did this analysis. We can talk about CT logging a little bit, but basically there's enough data available publicly to make an estimate of what percent of these certs are to sites that are newly encrypted, and he found that it was over 90%.

**Adam Stacoviak:** Wow! That's huge.

**Jerod Santo:** Yeah, excellent.

**Adam Stacoviak:** So I was right, Jerod. Pretty close to right. For the first time ever! \[laughter\]

**Jerod Santo:** You were pretty close! Pretty close. Cool. Well, we're hitting up against our first break. On the other side, we'll get into the nuts and bolts - what does it take to be a certificate authority, what is Boulder, we're gonna talk about the ACME's spec and Certbot right after this.

**Break:** \[\\00:22:14.09\\\]

**Jerod Santo:** Alright, we are back with Jacob. Jacob, I'm assuming it's a lot of work to set up a certificate authority... Is that fair to say? Take us through it. What all does it require and what work have you and everybody involved put into it?

**Jacob Hoffman-Andrews:** Yeah, you're definitely right, it's a lot of work. I'll go through a bunch of the stuff, and I should clarify a lot of this is not done by me. There's a whole team that spent a lot of work doing this.

To be a certificate authority doesn't mean much. You could become a certificate authority today. You can create a CA certificate on your own machine and issue your own certs, but nobody would trust them. If you loaded that on a web page, people would get a warning when they reached it. So you need your root CA certificate to be in trust stores. That's in operating systems, or browsers, or things like Java; on Linux there's usually a package called CA Certificates that ships down a bunch of these trust anchors.

\[\\00:24:10.08\\\] The problem is even if you were to convince all of those (we call them) root programs - the programs that manage who gets to be a CA and who doesn't - even if you convince them all simultaneously to let you in today, there's all the older software that doesn't yet trust your root CA certificate. The usual way around this is what's called cross-signing. You get somebody who's already a CA to sign your root CA certificate or an intermediate, and essentially vouch for you and say "This organization knows how to safely issue certificates and based on our existing presence in these root stores, certificates from them should be trusted." That's step one - finding somebody to cross-sign for you.

Let's Encrypt was very lucky to find IdenTrust, who was willing to cross-sign for us. Even if you are running an operating system that was built years before Let's Encrypt existed, your browser will still load Let's Encrypt certificates successfully because of that cross-signature. Now, in order to get that cross signature, you have to meet a certain number of requirements and pass a certain number of audits.

First, obviously, you have to generate your keys and your certs; you wanna generate those keys in an HSM (Hardware Security Module). The whole point of a hardware security module is to store crypto keys in a way such that even if somebody hacked you to bits, they still wouldn't be able to make off with the keys; they might be able to trick your HSM into signing something incorrectly, but they wouldn't be able to go make a copy of your private key.

So once you've generated those certs safely and written down all the steps you took -- or rather, first you write down the steps you're gonna take, then you follow them all on what's called a "key ceremony". You do it all on video, and you have auditors check that you did it all \[unintelligible 00:26:20.26\]

**Jerod Santo:** Really? It's all videotaped? **Jacob Hoffman-Andrews:** Yup.

**Adam Stacoviak:** Wow.

**Jerod Santo:** That's like a wedding.

**Jacob Hoffman-Andrews:** Yeah.

**Jerod Santo:** The key ceremony, the videotape...

**Adam Stacoviak:** That's true, Jerod... \[laughter\]

**Jacob Hoffman-Andrews:** I was telling our ops folks who perform this ceremony they should have robes and candles, but I don't think they did. \[laughter\] They might have set off the fire suppression system in the data center.

**Adam Stacoviak:** It seems like this process could get political too, since there's almost like a good ol' boys -- I live here in Texas, so that term is pretty common around here - "good ol' boys", or "insiders" or this protected ring or circle or trust, so to speak. Is that the case? It's pretty technical... Like, you had mentioned the different processes - is it political or is it technical?

**Jacob Hoffman-Andrews:** Well, I think there's a couple questions here. One is can you get a cross-signature, and two is can you get into the root programs, right? It's definitely possible to start a CA and not get a cross-signature, but just apply directly to the root programs and wait. But you're gonna have to wait many years before your certificates can be used in practice. Usually it's a matter of buying an existing CA or paying a CA to cross-sign for you.

I think definitely that it's a barrier to starting up a new CA, especially if you wanna be broadly trusted right away.

**Jerod Santo:** What about the capitalistic pressures from the other vendors, the other CAs, who are selling certs, and now here comes one that's gonna give them all away? Surely there was some pushback, or perhaps political machinations around the fact that "here comes a free one", right?

**Jacob Hoffman-Andrews:** \[\\00:28:06.18\\\] Yeah, we have seen some criticisms from other CAs, and actually I think more frequently from certificate resellers... Blog posts with lists of reasons why Let's Encrypt is bad. Some are inaccurate, and sometimes they are legitimate disagreements about what a CAs role is, or what's valuable. One of the big differences between Let's Encrypt and a lot of the larger commercial CAs is we only do what's called "domain validation", we don't do extended validation... So DV and EV, for short.

Domain validation is where to get a cert from Let's Encrypt (a domain-validated cert), you just have to prove you control the domain for which you want the cert. If you wanted an extended validation cert from another CA, you'd have to not only prove you control the domain in the cert, you'd also have to prove who you are, what sort of business entity you are, where you're based in, show them all the documents and so on.

**Jerod Santo:** \[unintelligible 00:29:09.16\] the browsers change how they do these things all the time, but at a certain point at least, they would make a big green thing in the address bar, as opposed to a little yellow lock symbol. So the incentive for a site owner to go through the extended validation is to make them look even more trustworthy to browsers.

**Jacob Hoffman-Andrews:** Right, yeah.

**Jerod Santo:** But you guys only do the domain one, because it's too much man power to do the EV, or...?

**Jacob Hoffman-Andrews:** Yeah, that's essentially it. Our whole thing is about being free and being automated and easy to use. If step 30 of the certificate issuance process is "Now fax your passport to this particular phone number and then we'll call your lawyers and they'll check at the Better Business Bureau if you actually exist" - that's not easy to use.

**Jerod Santo:** Hard to automate that.

**Adam Stacoviak:** Who needs that kind of level of a cert, though? I mean, it's there for a reason. Who needs that?

**Jacob Hoffman-Andrews:** I think opinions differ on the role of EV and how important it is. For folks who really believe in EV, I think the claim there is it helps with phishing. One of the problems with phishing is basically if you type your password into a site whose domain name doesn't exactly match the domain name you thought you were typing it into, it's game over. Somebody else have your password and they can access your accounts. But people are notoriously bad at comparing domain names. You get a dot out of place, you get an L that looks like an I, and it's really easy to spoof people. With EV, folks wanna emphasize a business name, in kind of a natural language.

I think users tend to be relatively insensitive to additional UI...

**Adam Stacoviak:** Stuff. Yeah. Are you talking about how in the URL bar the business name would show up?

**Jacob Hoffman-Andrews:** Yeah, exactly.

**Adam Stacoviak:** So GitHub uses that, then. That's common for all of us. So they have an EV.

**Jacob Hoffman-Andrews:** I believe they do.

**Jerod Santo:** Definitely, yeah.

**Jacob Hoffman-Andrews:** So I would say for most sites I wouldn't really worry about EV. It doesn't affect the quality of encryption that you have on your site, and it also doesn't impact the quality of the validation of the domain names in the cert. So it's kind of the same process in terms of validating the domain names in that ownership, that's done for both EV and DV.

**Jerod Santo:** \[\\00:32:04.06\\\] Most users do not even know that there's a way they can identify a site as encrypted or not encrypted, let alone the EV versus non-EV encryption. So the goal is let's get all the sites encrypted, because people won't know one way or the other. The EV - I think it's a clout thing, or it's kind of like pimpin' your ride; \[unintelligible 00:32:27.26\] That's the only reason why I think it would be attractive to me, because like Jacob said, the encryption is the same. It just shows you went the extra mile to be audited more thoroughly than other sites did.

**Jacob Hoffman-Andrews:** One of the interesting points there - Google Chrome has done a lot of really cool user research on usability of security indicators, and one of the results they found, that I think other researchers have found is that users don't tend to notice the absence of a security indicator. People don't notice that the green lock is absent. They do notice when something is present that says, "Oh, this is actually bad", like if the safe browsing page pops up and says "This site might be phishing" or "This might be malware", they notice that.

So the long-term goal for Chrome (and I believe also for Firefox) is something called HTTP BAD. So instead of marking HTTPS as better, mark HTTPS as normal, and HTTP as unsafe.

**Adam Stacoviak:** I saw this article on Wired... I linked it up behind the scenes to Jerod. This may be something you're familiar with, Jacob... It was talking about this user experience of exactly what you're talking about - whether or not it's present, and how they can best go about making general web users aware of whether the site they're on is encrypted or not, or secure or not.

**Jacob Hoffman-Andrews:** Yeah, so both Chrome and Firefox recently rolled out phase one of HTTP BAD, which is specifically if a page has a credit card or password entry form, and it's HTTP, it will get that new marking that says, "Hey, this is unsafe."

**Adam Stacoviak:** I actually put in a username and password into a site that I've done the check, I know that the URL is correct, but for whatever reason, they don't have that page secure, and I'm like "Well..." I mean, I look at the value of what the service actually is and I say "What do they have of mine that I gotta worry about this?" So what do you say to something like that where even when a little pop-up comes up and says, "Hey, this is not encrypted. You're putting your password across the wire. Are you sure you wanna continue?", like "Okay!" \[laughter\]

**Jacob Hoffman-Andrews:** You know, I think you're wise to think twice about entering passwords in site like those. I'd recommend anyone who has need of a site that doesn't encrypt its passwords should definitely send an e-mail to their support stuff and say "This is a really big security problem. You need to fix it."

**Adam Stacoviak:** That's why Let's Encrypt is in place.

**Jerod Santo:** There's no more excuses.

**Adam Stacoviak:** There's no more excuses, get your cert. Do it.

**Jerod Santo:** Right. Let's move on a little bit from the CA requirements, because they are many, and interesting for sure... But just to keep moving along, let's talk about Boulder. Jacob, do you wanna go into Boulder? Because it's your guys' implementation of \[unintelligible 00:35:24.13\] There may or may not be interesting things to talk about there. It's up to you.

**Jacob Hoffman-Andrews:** Yeah, so to talk about Boulder, I think first we have to talk about ACME. We had a number of goals with Let's Encrypt, and one of the ones that gets the most attention is free certs and automated certs. But we also want to bring about interoperability. If Let's Encrypt becomes the CA that everybody uses, it's a single point of failure. If for whatever reason it fails, it's terrible news for the internet.

\[\\00:36:00.22\\\] Instead, we want an ecosystem of software that's able to automatically issue certs and keep them up to date, and can get them from a variety of CAs. That's kind of the birth of the ACME protocol; it's an backronym for Automated Certificate Management Environment. It's also a nod to the road runner cartoons.

**Adam Stacoviak:** Oh yeah.

**Jerod Santo:** All of Wile E. Coyote's stuff was ACME, right? All of his materials.

**Jacob Hoffman-Andrews:** Yes, exactly.

**Jerod Santo:** A backronym, that's when you start with the... You started with ACME, and said "What can we figure out that makes this work?"

**Jacob Hoffman-Andrews:** Yeah.

**Jerod Santo:** That's fun.

**Jacob Hoffman-Andrews:** ACME was developed alongside Boulder, and it's still in standardization at IETF. You can join the ACME working group and get feedback. We're in working group last call right now, which means we think it's pretty much done and we're kind of sanding off the rough edges.

So because ACME was a new protocol, of course we needed to write new code to support it. The most popular CA software out there in the industry is called EJBCA (Enterprise Java Beans Certificate Authority), but we decided to start from scratch, largely because we're implementing this new protocol. We wanted to use Go for both memory safety and performance reasons. Certainly we didn't wanna write in C; Java would also have been an option, but Go felt like the right choice at the time, and I'm glad we made that choice, because it's been a real pleasure to work with.

In the ACME protocol you have to create an account... This can be created automatically by a software running on your web server. Then you say "I want a certificate for these domains", and the service says, "Okay, great. Here's what you need to do to prove that you own or control those domains." There's three ways you can do it, that are called Challenges, in ACME. One is the HTTP Challenge. It says, "This is a file I want you to create and I want you to put it at a certain path on your web server, under /wellknown." So wellknown files are this newish spec to -- you know about robots.text, right?

**Jerod Santo:** Right.

**Adam Stacoviak:** Of course.

**Jacob Hoffman-Andrews:** Everybody knows where robots.text is, but we don't wanna keep adding files at the top level web servers, and everybody has to know they're special, and that should prevent \[unintelligible 00:38:37.14\] from uploading them. So now that place is /wellknown, so when protocols need to register a certain path, it's under there. So that's the HTTP Challenge.

**Jerod Santo:** Is there anybody else doing that besides you? It sounds like it's becoming standardized, but is there anything else that goes in...? Because this is the only occurrence for me personally of seeing anything get put in /wellknown.

**Jacob Hoffman-Andrews:** Yeah, there are a few. It's starting slowly, but definitely I've seen other new protocols establish that. It's a handy thing. There was actually a talk I just watched from Brad Hill at Enigma about better account recovery, and part of the protocol he was developing involved putting a certain file at a wellknown URL.

**Jerod Santo:** Very cool. We should use those for our repos on GitHub, instead of the file files, like gemfile, dockerfile... Starfile. We should just have a .files, or something, and put everything in there. \[unintelligible 00:39:39.19\] sounds like a good idea. Definitely for web severs, though. Continue, we cut you off.

**Jacob Hoffman-Andrews:** Okay, so there's two others. There's the DNS Challenge, which says, "Put this special token value in a DNS text record under your domain." And then there's the TLS SNI Challenge, which is "Take this token value, wrap it in a temporary cert, and we're gonna attempt to connect over TLS to your site and ask for that, and we want you to echo back that value, plus an additional validation value, in the cert itself."

\[\\00:40:19.20\\\] So once you've proven control of your domain or domains, Boulder will then sign a certificate and send it back to you. Boulder also incorporates some of the other important aspects of what a CA does. OCSP is one of the important things we have to do. It stands for Online Certificate Status Protocol, and that's how you can find out if a certificate has been revoked. A CA will sign a blob of data that says "This certificate's still good" or "This certificate has been revoked", and you can request that via HTTP. So Boulder offers OCSP services, and it also sends out expiration mail when your cert's about to expire.

**Jerod Santo:** Very cool. So you have ACME which is the specification, you have Boulder which I think is the server-side certificate authority software, and then on the client side, the ones who are requesting certificates, you have Certbot. Tell us about Certbot.

**Jacob Hoffman-Andrews:** Yeah, absolutely. I would say actually there's dozens of clients, which is one of the really cool things about ACME - anybody can \[unintelligible 00:41:27.00\]

**Jerod Santo:** Yeah, because it's a spec, so anybody can read the spec and just implement the spec, and there you go.

**Jacob Hoffman-Andrews:** Yeah. But we're especially proud of Certbot. It was the first client, because it was co-developed with ACME and Boulder, and I think probably the most ambitious. Most of the clients tend to be focused on "Get your cert and then it's hands off." Certbot really wants to eliminate some of that human cost of getting and installing a cert, and in particular installing it. With Certbot, it knows about the config formats for both Apache and NGINX. So you can install Certbot and just say, "Give me the certs. I want the certs", and it will work with Apache and NGINX; it will actually reconfigure them to answer those challenges, and then once it's got the certs, it will stick those certs in the Apache or the NGINX config files. So you can have just a single command, run it and it works. That's pretty magical.

**Jerod Santo:** That's awesome. And including the 90-day key updating?

**Jacob Hoffman-Andrews:** Yeah. Certbot has this command Renew, so you just put "Certbot Renew" in your crontab - or if you're using a packaged copy of Certbot for your operating system, usually it will install the crontab itself. So that will run actually twice a day and say, "Okay, is there anything that's expiring 30 days from now? If so, get it again, renew it."

**Jerod Santo:** That's excellent. Certbot has a homepage at certbot.eff.org. I have a question about this... There's a little wizard around installation, where you pick which software you're using, which operating system you're on, and it will tell you the instructions for getting Certbot all set up, specific to your web server and your Linux distribution, or if you're on UNIX, or what have you... Very cool. We talked about how successful this effort has been and is being. At the top of the show I said, "Well, you make it free, that's a good start." You know, free + easy is usually a recipe for a win.

Certbot, as the first client - it started off not so easy. Of course, private beta, public beta... Things are buggy, things are more difficult... But it seems like you guys have really gone the extra mile, especially with like "You hit this page and you know exactly how to get Certbot set up for your specific scenario." It seems like you guys are really trying to make this easy on people.

**Jacob Hoffman-Andrews:** \[\\00:43:54.24\\\] Yeah, that's job one - make it super easy, allow more people to do it.

**Adam Stacoviak:** I could be just an idiot, but one time I did try to use Let's Encrypt on a DigitalOcean server when we were running WordPress (probably about a year ago), I was using a DigitalOcean tutorial to do it, and I got stuck. I could not do it. So I don't know if I'm the idiot or if the tutorial was just dated, but I was lost. So this is helpful now, the Certbot.

**Jacob Hoffman-Andrews:** Yeah, I think there's always more work to be done on Certbot, certainly there's a lot of places you can get stuck, and definitely there are a lot of tutorials from the early days of Certbot where a lot of stuff has changed since then. And they have a lot of pagerank because people were really excited \[unintelligible 00:44:43.20\]

**Jerod Santo:** \[laughs\] So pagerank can backfire sometimes.

**Jacob Hoffman-Andrews:** Yeah. I think now probably the best tutorials are on the Certbot page, but if you find one that you think is better, send us a pull request and make our documentation better, too.

**Jerod Santo:** Let's talk a little about the expiration and the renewing. So on the easy side, sometimes it's easy to get set up, but then you have this 90-day renewal, and if you don't have software that automates everything - because you want it to be automated, but there are circumstances today, for instance if you're on Heroku, if you're using S3, static web hosting, you still have to take the Challenge, upload the file to the wellknown directory and get that renewal... And because that's every 90 days, instead of perhaps once a year, for certain of our sites that I manage, it has kind of increased my overhead of how much time Jerod has to put into it... Which is fine for now, because I'm assuming eventually those will be automated, but tell us about the 90 days... What's the reasoning behind such a short window, and then let's talk about automation a little bit.

**Jacob Hoffman-Andrews:** So one of the things that's really unique about ACME of course is that it allows automation, and it in fact encourages it. So it's more feasible to do something every 90 days. Then there's also this question of "Is 90 days better?" One of the things that really motivated us in thinking about this was thinking back to 2014 when Heartbleed came out. Heartbleed was this terrible vulnerability in OpenSSL that would just leak memory out to random users on the web. It was figured out that this could include private keys. That meant that most of the private keys on the internet were potentially compromised at that time, but it was kind of impossible to know which ones specifically were.

A lot of sites rotated their keys at that time, but a lot just didn't get the memo, so for a pretty long amount of time there were still keys available on the web that had been served using vulnerable versions of OpenSSL. If you have a large ecosystem of Let's Encrypt clients that are reissuing every 60 days, with that 30-day buffer, the window of exposure to one of these internet-wide bugs was a lot less, assuming they're rotating their keys at the same time they renew. So it's a big benefit to 90-day certs.

It also encourages automation. I think what we've seen from a lot of hosting providers is that they have wanted to help automate this for their customers, because it's really a big win... Whereas if we had chosen the traditional year+ time window, you would see a lot of hosting providers saying, "Oh, we don't really care... You can go through this really tedious process once a year, of uploading the file and running the client yourself." That's really not the experience we want for people; we want hosting providers to just turn it on for you. We want most people to never have to think about HTTPS, and I think we're getting there. I think more and more hosting software is incorporating that.

\[\\00:48:07.00\\\] WordPress has a Let's Encrypt plugin now, and also WordPress.com, the paid hosted version of Wordpress, they're a Let's Encrypt sponsor, and they automatically issued for everyone who has a hosted domain with them. So if you use their service, you have HTTPS. You didn't even have to check a box. That, I think, is the future of the web - it just works.

**Jerod Santo:** What about at the web server level? During the breaks we were talking about Caddy, which is a Go web server that has integrated Let's Encrypt. We had shows with Matt Holt on Caddy, both on the Changelog and on GoTime. So that's a great instance of like, "Well, if Caddy has it, then you just get it for free if you're using Caddy as your web server", but what about the big ones? Can you get it integrated into NGINX? Can you get it inside Apache? You don't even have to have a separate client that integrates into them, you just have it inside of your NGINX.

**Jacob Hoffman-Andrews:** Yeah, Caddy is great. I really think that's how we want the Let's Encrypt experience to work. It's HTTPS first, and that's considered a core part of the web browsing experience. We've definitely talked to folks from the Apache and NGINX projects and they're supportive. So far I think the approach has been "This is most appropriate as kind of this external configurator for now." I think there's some obstacles in the Apache module system that make it relatively hard to give as smooth an experience as Caddy would. But in the long term I would like to think that's a possibility, that the major web servers could just integrate ACME support and it just works.

**Adam Stacoviak:** We're hitting up against our next break... When we come back, let's talk about next challenges being faced, maybe even some public awareness in terms of how the community can step in and help this mission of encrypting the web. We'll take this break and we'll be right back.

**Break:** \[\\00:50:07.29\\\]

**Adam Stacoviak:** Alright, we're back with Jacob Hoffman-Andrews, going deep on this idea of securing the web. What a fun mission. Sometimes, Jacob, to know where you're going, you kind of have to know where you came from. In the breaks I asked what I thought was a dumb question, and it turns out it's actually not that dumb... It goes like this: why didn't we start with security first? Why didn't we start with -- I know you don't like the term SSL because that's going away, but why didn't we start with a secure internet, versus an insecure internet?

**Jacob Hoffman-Andrews:** \[\\00:52:03.13\\\] Well, actually you've got two questions there. I actually have no problem with the term SSL. I tend to use TLS myself, but I think in the battle of convincing people to change their language, I don't think we're ever gonna win that one, and I don't mind. On Let's Encrypt website we call it "Free TLS/SSL certificates", so people can actually find us with the terms they use...

**Jerod Santo:** Yeah, you gotta do that for Google searches, right? Because people are gonna be searching for SSL even if that's not necessarily the protocol being used nowadays.

**Jacob Hoffman-Andrews:** But I also try to say HTTPS more than either of those, because that's the thing that people who are not technical recognize more, and it's the thing that shows up in their URL bar.

**Adam Stacoviak:** If I'm being honest, the reason I don't say it is because I can't say it; it just never comes out right. HTTPS - it's always jacked up, so I just speed through the two T's, and the S is sort of like slurred... That's why I'm happy about H2 - you can shorten HTTP/2 to H2; there's no version of that for this.

**Jerod Santo:** HS...? No. \[laughter\]

**Jacob Hoffman-Andrews:** So when the first web protocols and other internet protocols were developed, it was in this very trusting environment, it was like a very small group of people in academia... You know, the idea that somebody would be malicious was not unconsidered, but was relatively distant in most people's mind. But I think the much more interesting question is the point we're at today, why didn't we get here a lot earlier? SSL was developed in the '90s and later became TLS... Why didn't it just take off like wildfire? Some of it was CPU cost, but I think a big portion of the blame lands at the feet of the U.S. government, and something we call The Crypto Wars.

**Adam Stacoviak:** Oh...!

**Jacob Hoffman-Andrews:** ... or now we have to call them The First Crypto Wars. So NSA, GCHQ and other spy agencies were kind of used to having a lock on cryptography. They were the cryptography experts. Ordinary people wouldn't have access to encryption; they wouldn't even know the algorithms. But with computers really taking off, you had a lot more academics researching these questions of "How do we make things safe?" and they started discovering good crypto algorithms. Some had already been secretly discovered inside spy agencies, some were new.

The U.S. government decided "These secrets, these abilities to keep secrets are too dangerous for us. We don't want people outside the U.S. to be able to keep their stuff safe, so we're gonna pass Arms regulations. We're literally gonna say cryptography is a munition, and it's governed under ITAR (arms export rules)." So if you write crypto software, or even if you write about cryptography, you can't export that from the United States unless it's intentionally weakened to the point where we think the NSA can break it.

**Adam Stacoviak:** Wow.

**Jacob Hoffman-Andrews:** So if you downloaded Netscape in the '90s, you had this awful experience where it's like, "Do you wanna download the safe Netscape with all the strong cryptography in it, or do you wanna download the unsafe Netscape with the bad crypto algorithms in it? And if you wanna download the safe one, you have to really be sure you're in the U.S. and you're allowed to do this." This created obviously a ton of uncertainty and doubt in the software community, of whether they were legally safe to implement crypto algorithms, and if they did, would that limit their market? So it really held back implementation for a long time. It also meant that a lot of protocols like SSL built in these non-secure fallbacks, so you could negotiate a really weak cipher suite with SSL, because you might have to if you were talking to a web server that wasn't allowed to use the strong crypto.

**Jerod Santo:** \[\\00:56:10.27\\\] Right.

**Jacob Hoffman-Andrews:** So this was actually a really big issue area of the EFF in the '90s, and to this day. We took the position that code is speech, and it's actually a violation of the First Amendment to say "You're not allowed to tell people outside the U.S. how to do cryptography."

**Adam Stacoviak:** Wow... That's crazy. I've never heard that story before.

**Jerod Santo:** It's always the government's fault.

**Jacob Hoffman-Andrews:** It's always the government's fault, right. Not always, but in this case for sure.

**Adam Stacoviak:** Is this new news to you, Jerod? Or is this something you've heard of before?

**Jerod Santo:** No, I've heard of this. I studied information assurance in college, so I got a little bit of the history of the whole InfoSec thing, cryptography, read a couple books... I haven't thought about it for a long time, but as Jacob was saying that, I was like "Yeah, you know what? I remember all that."

**Jacob Hoffman-Andrews:** So we fought a really important court case. Daniel J. Bernstein vs. the U.S. government. I said "we" - I wasn't at EFF at the time, but EFF fought this case. We won some victories... It wasn't the perfect victory we had wanted, but now you do have the ability to export strong cryptography, and that really opened a world where people can develop open source software and include strong cryptography and not worry about violating these rules.

So that's been really important. I think that's a big part of why now cryptography has been burgeoning. And it's a really remarkable thing, having lived through that time, to realize that what we have in our web browsers is close to as good as it gets. These are some of the strongest algorithms out there; we believe they are strong enough to withstand government-level decryption attempts, which is why when you look at leaks of how people are attacking communications, it's often "We're gonna hack into somebody's computer, so we get the bits before they're encrypted."

**Jerod Santo:** Yeah.

**Jacob Hoffman-Andrews:** So I mentioned... Okay, now we have to call them The First Crypto Wars...

**Jerod Santo:** Yeah, I was gonna say... You teased that at the beginning, and I was like "Oh, that's a good one", and I've been sitting here waiting ever since for you to get to the current crypto wars.

**Jacob Hoffman-Andrews:** Yeah, so there's been rumblings in the government now again of "Oh, this crypto is scary. The idea that people can send stuff that we can't read is scary, so we wanna put restrictions on that, and we wanna limit cryptography in various ways." Most likely, this second time around is not gonna look like the first. It's probably not gonna be a matter of Arms Restrictions. We don't know yet exactly what that attempt will look like, but we're definitely ready to fight it and fight for people's right to keep their stuff safe.

**Adam Stacoviak:** The bad part -- I guess it depends on your perspective of seeing it the bad part when I say that, so don't take that as a really bad thing... The point I'm trying to make is that it could be the good guys, or it could be the bad guys that want to keep their stuff safe, that want to keep it hidden. It's a really fine line of saying, "I think everybody should have access to security, secure internet and secure transmissions of their messages... It just sucks whenever it's the bad people trying to hurt you", you know what I mean? So that's a very tough position for any government to be in; I'm not saying that they're right or wrong in their convictions or reasons for \[unintelligible 00:59:39.11\] They have a very tough job to keep a nation safe, whether it's our nation or another.

**Jacob Hoffman-Andrews:** \[\\00:59:47.11\\\] The way I like to think of it is like the right to whisper. You can always lean over and whisper to the person next to you and have a relatively private conversation. We would never dream of telling anybody, "Look, whenever you have a conversation, you need to have it through a megaphone, just in case you might be a bad guy and the government wants to collect data of your wrongdoing." I think there are plenty of avenues besides weakening cryptography that are available to the government in law enforcement activities.

**Jerod Santo:** Yeah, agreed. Let's talk about the future a little bit. This ambitious goal, encrypting the entire web... I recently saw an article - and I haven't found it again, but I believe it was within the last two weeks; maybe we're about 50% there - 50% of the sites are HTTPS. Jacob, do you have other data than that, or does that sound about fair?

**Jacob Hoffman-Andrews:** Yeah, that's correct. If you go to the Let's Encrypt website, we have a stats page, and there's two main graphs that we care the most about. One is how many certificates we've issued and for how many domains; that shows how many people we've helped. But the other one that's arguably our most important metric is what percent of pageloads happen over HTTPS? We get that from Firefox Telemetry data.

Firefox users can say, "Yes, I wanna share some data with Firefox to help to make the product better", and one of those is how many of their pageloads are over HTTPS. We've been tracking that for a while now, and it finally crossed 50%, I think in February or January. It's now up around 51%, which is really heartening.

Someone asked me the other day, "How will you know when you're done? How will you know when you've succeeded?" and easy answer - when that number reaches 100%.

**Adam Stacoviak:** Yeah, exactly. Complete saturation.

**Jacob Hoffman-Andrews:** May I live that long.

**Adam Stacoviak:** Hopefully you do.

**Jacob Hoffman-Andrews:** But I think that rate of change has been going up, and I like to think Let's Encrypt has had a big part in that.

**Adam Stacoviak:** Well, to get to that kind of position though, even to get to 100% or even 50%, it takes a lot of effort, and I guess a question behind the scenes here is like "How does this happen financially? How do you fund making this possible?" Is it through donations, non-profit? Collaborative partnerships with companies like Mozilla or others that you mentioned in this call here? What powers Let's Encrypt, what makes it happen?

**Jacob Hoffman-Andrews:** Let's Encrypt is an independent non-profit. The non-profit name is actually ISRG (Internet Security Research Group)... But basically ISRG and Let's Encrypt are synonymous. ISRG gets all its funding from donors and from sponsors. We started out with some pretty big sponsorships from large companies - Akamai and Cisco got us off the ground. Once we launched, a lot more companies came in and have been really supportive and have given us big donations. So that's where a lot of our money has come from.

We don't wanna be solely funded by companies and web hosts. We love them, we love how they're broadening HTTPS adoption, but we really wanna also be accountable to users, so we do also solicit donations from individuals. We ran a crowdfunding/fundraising campaign this winter; we raised a whole bunch of money from individual contributions, and we're planning to keep doing that on an ongoing basis.

**Adam Stacoviak:** Well, on that note, you can go to letsencrypt.org/donate if you'd like to do that now. There's a lot of options - $25 through to $2,500 for whoever's got that kind of money, or a one-time custom, which could be a million bucks; who knows...

**Jerod Santo:** Especially if previously you were paying annual fees for certificates, you could just take that money... Now you're saving it every year because of Let's Encrypt; give a portion or all of it to them instead, and it's a win/win.

**Adam Stacoviak:** I would say a win/win/win, because there's a lot of winning going on here.

**Jerod Santo:** \[\\01:03:52.17\\\] Who else is winning?

**Adam Stacoviak:** Everybody.

**Jerod Santo:** The users are winning, as well.

**Adam Stacoviak:** That's right.

**Jerod Santo:** So 100%... Let's talk about 100% real quick, because I have a little side-topic with regards to the small sites. You have a homepage, I have a homepage - they both have blogs, and they're kind of programmery homepages, right? Yours is encrypted and mine is not. Now, I'm an advocate for encryption... What's the upside...? JerodSanto.net has got some tutorials, maybe an About section... There's nothing really there; we're not taking logins, there's nothing. It's just my own page. What's the upside for me to encrypt that?

**Jacob Hoffman-Andrews:** I think there's a number of reasons in terms of upside. Access to HTTP/2, as we talked about earlier, can make your site faster, and you need encryption for that. If you wanna use advanced features (powerful features they call them), for instance full-screen in HTML or geolocation data, browsers are starting to require HTTPS for that. And there's also an aspect of reading privacy. If you want people to be able to visit your site and click around and not necessarily have spies know what they're reading, HTTPS helps protect that.

But I think the larger idea here is herd immunity. I think there may be a lot of smaller sites for which it may not be effort right now to implement HTTPS, but for the health of the internet ecosystem, we'd like the vast majority of websites to implement HTTPS, because that allows us to treat HTTP as less secure. But of course, in order to get there, we have to lower all the costs of HTTPS practically to zero. We have to make it so when you're weighing cost and benefit, you're like "I might as well check the boxes as HTTPS." So we wanna make it zero effort.

**Jerod Santo:** Yeah, I think that's exactly on point. I'm just thinking about my specific website. It's a DreamHost thing (shared hosting) and I have SSH access so I could go in there and geta free certificate with Certbot, get it all set up with -- I believe it's Apache, but I don't even know or care. Ehm... I might do that; I haven't yet, so apparently those upsides aren't strong enough for me to do that. If I gotta renew it every 90 days myself I'm definitely not doing it. That being said, I could just go into my DreamHost control panel and click the box. Like you said, the cost is zero to me. So I really feel like once you guys get a lot of these middlemen - the hosting providers, the herokus of the world to integrate the ACME protocol into their services, it's gonna really help that 50% get to 100%.

**Jacob Hoffman-Andrews:** Well, I happen to know that DreamHost actually does have an ACME integration...

**Jerod Santo:** Sweet!

**Jacob Hoffman-Andrews:** ...they do have a box you can check. I don't know if that's -- it sounds like you have a VPS with shared login, so it might not work on that.

**Jerod Santo:** Yeah, I do... I guess it's not shared hosting; I have a VPS, so... That being said, that's a great step. I'll go check. I'll see if I can just turn it o.

**Jacob Hoffman-Andrews:** Cool, sounds good.

**Adam Stacoviak:** It might just be a little toggle there, man. All so easy. I mean, that's the way - you've gotta make it for mom-and-pop web hosts or website owners that run a small business, and they're like "Well, my site's just a brochure, so there's nothing special happening on there. It's just how you get to my location and who we are, and you can see pictures of our shop." They're not commerce, and they don't even know what the web is; they're just like "We have this thing on the thing, and it's the cloud, or whatever. You can go there and find out about us." You've gotta make it so much easier for those people.

**Jacob Hoffman-Andrews:** \[\\01:07:53.21\\\] So there's one other feature topic I'd like to talk about if you guys feel like we have time.

**Jerod Santo:** Sure.

**Adam Stacoviak:** Do it, man. Open it up.

**Jacob Hoffman-Andrews:** So one of the things I see as the most exciting thing in the future of HTTPS is called CT (Certificate Transparency). One of the things we've seen in the past is sometimes certificate authorities screw up. They issued a cert that they shouldn't have, or they get hacked, and how do we know about that? The CA ecosystem is a little funny, because CAs can issue a certificate independently, the don't have to tell anybody, and it's trusted by billions of browsers all around the world.

It's possible that if you were issuing a malicious certificate, a fake cert for, say, addons.mozilla.org, you could serve that to only a small set of users, such that no one else in the world would ever see it, and for those users you'd be able to man-in-the-middle what should be a secure connection and serve them some malicious software, or steal their passwords. So one of the big examples of this - this actually happened; somebody issued some malicious certs for addons.mozilla.org, mail.google.com back in 2010-2011. And there have been any number of mis-issuances since then, and they're caught in various ways, but kind of by chance and happenstance, or in some cases because Chrome has telemetry that will notice certificates that it doesn't expect for certain sites.

But ideally we wanna generalize that, and when you issue a cert that's gonna be publicly trusted, you should have to tell the world about it. Certificate transparency is based around a scheme of logs; when a CA issues a certificate, they can log it to a number of CT logs, and those logs are kept honest by essentially a blockchain; they use a Merkle tree internally to give themselves this append-only property, so that if a log is malicious and they try to pretend that they received a cert but not actually show it to anybody, they in theory would be detected.

This is relatively new; it's been in the works for a few years now... There are CT logs out there, and logging to them is voluntary for most CAs; for CAs that want to be trusted in Chrome for EV it's required, and for a few other CAs that have had recent mis-issuances it's also required by Chrome. As of October 2017, Chrome is expanding that requirement. So if you want to issue a certificate that's trusted by Chrome, you will have to log it to multiple CT logs and include proof of that in the certificate itself; or not necessarily in the certificate itself - there are a couple of ways to deliver it, but you'll have to be able to prove that that certificate was logged.

**Jerod Santo:** So I assume this will be coming to Boulder real soon, if not already...?

**Jacob Hoffman-Andrews:** Yeah. Let's Encrypt really believes in transparency, it's one of our core values, so from day one we were voluntarily logging to multiple CT logs. One thing we don't yet do is we don't embed the proofs in the certs, so that a browser can verify, "Yes, the cert was definitely logged." Embedding that proof is something we're planning to do.

**Jerod Santo:** Very cool. And blockchain \[unintelligible 01:11:40.26\] people have found so many different uses for blockchains... This is a great example of that.

**Adam Stacoviak:** Great time for it. We have a much bigger need for it now, and now that the care and technology around blockchain is getting more and more mature, it's a great time for it.

**Jacob Hoffman-Andrews:** \[\\01:12:00.08\\\] I'm gonna super nerd-out here for a minute and say it's not exactly blockchain, it's like a blockchain.

**Jerod Santo:** Oh, blockchainesque. We're running short on time, but do a real quick diff for us between blockchain and 'like a blockchain'.

**Jacob Hoffman-Andrews:** Fundamentally, both use Merkle trees underneath; that's the construct that enables them both. Logs are single operator, so they're just maintaining a list of things for themselves that are append-only, whereas blockchains are usually distributed consensus.

**Jerod Santo:** Oh, it's not distributed.

**Jacob Hoffman-Andrews:** Right, so you have multiple logs, but each log is a world onto itself.

**Jerod Santo:** Oh, I thought that all these CAs would be sharing one common...

**Adam Stacoviak:** It'd be so much cooler as a blockchain... \[laughter\]

**Jacob Hoffman-Andrews:** Yeah, there's some tricky tradeoffs there around availability.

**Jerod Santo:** Yeah, for sure. But as long as a log gets you where you need to go, then...

**Adam Stacoviak:** That's right.

**Jerod Santo:** That's a weird sentence I'd never thought I'd say, "As long as a log gets you where you need to go..."

**Adam Stacoviak:** That's right.

**Jerod Santo:** Like we're lumberjacks.

**Adam Stacoviak:** Well, Jacob, let's close out with this... I'm sitting here thinking we've got all this great information from this show with you, and I'm kind of curious -- aside from donating, because we've talked about that; we talked about how you're moving funding forward in terms of support to Let's Encrypt; you have corporations supporting you, you have an option for the caring public to donate to support you, but for the developers out there listening to this show, they wanna step in, they wanna help... They care enough, they wanna step in and make an impact - aside from simply donating, what other avenues do you have available to those listening to this show that say "Hey, I love this mission. What can I do to make this go further?"

**Jacob Hoffman-Andrews:** Yeah, so first off we're an entirely open source project, it's part of the reason we're on this show. Boulder, Certbot - all of the stuff we rely on is available on GitHub. We have Help Wanted tags or Good Volunteer tags on those repositories, so jump in.

**Adam Stacoviak:** Awesome.

**Jacob Hoffman-Andrews:** If you've used Certbot and found it lacking or difficult, file documentation bugs, or bugs on how we can make it better; that's always super welcome. And if you maintain a website and it's not yet HTTPS, go and do that. And if you use a website that's not HTTPS, e-mail them and say "Why aren't you HTTPS yet? I really wanna see this." And if you use a hosting provider that doesn't offer easy, automatic HTTPS, tell them to do it. And especially if you work for a hosting provider, enable HTTPS; make it an automatic thing that's on for everybody by default, and we'll get there.

**Adam Stacoviak:** So advocacy is a huge part, then.

**Jacob Hoffman-Andrews:** Exactly.

**Adam Stacoviak:** Just sharing the message.

**Jacob Hoffman-Andrews:** Yeah. I mean, Let's Encrypt has played a big role in getting us this far, but way more than that it's just all the hundreds of people who have advocated for HTTPS over the years.

**Adam Stacoviak:** Well said. Alright, Jacob... Let's close there. Thank you so much for coming on this show, it's been a blast. I really appreciate all that you do; don't stop, keep doing it, man!

**Jacob Hoffman-Andrews:** Thanks very much, it's been great being on the show.
