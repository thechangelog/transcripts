**Jerod Santo:** Today we're here to talk about a conversation that's near and dear to your heart, Adam, and something that I use, although I'm not quite as excited about password managers as you are... And you always bring up password managers, specifically 1Password, which we're not here to talk about 1Password, but we probably will talk about it in passing; we're here to talk about Buttercup... But do we bring up the conversation of like "Why password managers matter?" I feel like our audience is probably on board with, like, this is important stuff. What do you think, Adam?

**Adam Stacoviak:** I think maybe a small recap... Just the fact that through 20 years of effort we've successfully trained everyone to use passwords that are hard for humans to remember, but somehow computers can easily guess them - that's a direct quote from xkcd cartoon that I just recently read... I think it just makes sense to do a one-on-one on why passwords -- just having them, that are secure, and in managers, because hey, they have to be hard enough, right? 24 characters, 16 characters, a mix of digits and special symbols or whatever, but... Maybe just a 101.

**Jerod Santo:** Okay, very good. Well, we have Perry here. Perry, you're obviously all in on passwords being important, since you're working on Buttercup, a password manager... Maybe from your perspective, why are password managers something that is vital for people to understand and to use?

**Perry Mitchell:** Yeah, for sure. Password managers are a bit of a stand-in for memory, I would say. We basically understand the premise behind why you need passwords and why they need to be sufficiently complex, obviously. The more complex they are and the more unique they are, then the lesser chance of somebody guessing them, or basically...

**Jerod Santo:** Forcing them...?

**Perry Mitchell:** decrypting whatever protected content is behind them... Forcing them - yeah, of course. So a password is kind of like a stand-in, like a phonebook to remember all these things, in encrypted storage, where you can store these secrets. But the reason why it's so important is that, obviously, every password should probably be different, as well. There are so many security concerns that maybe people don't consider on a day-to-day basis, but having unique passwords across all of your accounts is also one such factor, and having a password manager kind of allows you to deal with that necessity, as well.

Obviously, today, if so many people have in the tens or if not hundreds of accounts online - it's so important to have those passwords stored somewhere where you don't really have to worry about the strength or the uniqueness there.

**Adam Stacoviak:** Maybe to you, Jerod - I'm curious if you use, as Perry mentioned, a different password for every account. Do you do that currently?

**Jerod Santo:** Yes.

**Adam Stacoviak:** Religiously...

**Jerod Santo:** \[00:04:10.21\] When you said "every account" there, I flinched a little bit, because I had to think, "Okay, EVERY account...?" I used to have a series of passwords that were phrases; they were good passwords, but they were based on a system I came up with... I'm a nerd, so I'm developing my own internal systems in my brain, and generating versions... Sometimes it used to be based on the domain name, blah-blah-blah. That was the bad old days.

I do use Apple's password management inside of macOS. So I'm on iOS, I'm on macOS, they have their keychain and they have their password generators, and I have been using them ever since they came out, which is probably only four or five years, I'm not sure exactly when that all launched... But before then, I used to have levels of passwords - my low-security password, that I'd use on sites I didn't care about very much, then I had my high-security passwords, which I would use on things like e-mail accounts, on things like bank accounts... I probably still have some of those floating around out there, but for the most part I do use a high-security fresh password on every website, and I just use Apple's built-in stuff, which works pretty well, and it completely falls apart when it comes to sharing and teams and those kinds of things, which we'll probably get into... Because that's where things get really complicated, like "How do we share--"

**Adam Stacoviak:** So you're really relying on iCloud then too, in that case...

**Jerod Santo:** Yup.

**Adam Stacoviak:** And obviously, our trust in Apple.

**Perry Mitchell:** I mean, you have to trust somebody...

**Adam Stacoviak:** Somebody's trusting Apple...

**Jerod Santo:** Yeah, I trust somebody... And on your side, Adam, you're a truster of 1Password, which is a very popular solution for these things...

**Adam Stacoviak:** Yeah. And I would say that's only because they've been around a long time; I would even contend they're one of the best... They're not open source, so my reason is simply because they've been around since forever, basically, and they've evolved their service over the years, too.

**Perry Mitchell:** Yeah, they've got great UI, great user experience, the whole thing is very fluid... Definitely someone to contend with in the password manager field. I would definitely say that the drawback for a lot of users that I speak to is definitely their pricing, but other than that, I would say that they're probably one of the biggest and the best to set your targets on, so... Yeah, I think that your trust is well placed if you're working with 1Password.

**Adam Stacoviak:** Yeah. We'll obviously earmark this for future conversation - I've stopped using the Dropbox sync just because I hated to have to have Dropbox installed into a new machine to then install passwords; it was always this "Well, I've gotta get into Dropbox" so it's my password there, and it was always some weird rigmarole to get in there, so I ended up actually using their hosted service now, which I agree, their pricing is a little bit -- hey, for security, right? I think you've gotta pay for security. If there's one area you don't skimp, it's security...

**Jerod Santo:** Or do you...?

**Adam Stacoviak:** Or, yeah, I guess, do you...? It's a question you can ask here...

**Jerod Santo:** \[laughs\] We're gonna find out here.

**Adam Stacoviak:** Either way, the 101 is definitely use secure passwords. More importantly, potentially even - depending upon where you said - make sure you use different passwords for each service... And then not to use the 1Password to rule them all kind of thing, but they, it's a good brand name. You usually have one password to get into your manager that has one key to all your kingdoms, basically. Would you say that's the same way Buttercup works here, Perry?

**Perry Mitchell:** Yeah, for sure. The whole idea of a master password, for lack of a better... One key to the kingdom, basically. One password which you explicitly should not use anywhere else for that exact reason, that it's super-valuable; it should be very personal, it should probably be written down and stored somewhere in case you have a lapse of memory, but... Basically, it should not be shared with anyone or any other service. That is - at a very low level - your encryption key to decrypt your content, no matter where it's stored, whether it's locally or in a cloud service like 1Password is hosting.

\[00:08:06.18\] At that point, if you can get around that, then I think that you're already doing very well... Better than the majority of users out there, unfortunately. I think that it's still such an issue communicating why this whole process is necessary for someone to follow. People don't feel like they're a target, but obviously, these sorts of things, these issues that happen with account hijackings and stuff like that happen en masse, and it's never really targeted.

**Jerod Santo:** Yeah, you don't have to be a target; you can just be one of a group of people who's passwords have leaked through some service that you once used, and if you are not having unique passwords per service and you use that elsewhere, then it's very easy at that point for somebody to just brute-force... Say "I have all these passwords on service A. I'm gonna run them all against service B and see who I can get into." That's something that's happened on the regular nowadays, especially with services used by millions, and in certain cases billions of people, with huge data breaches.

**Perry Mitchell:** Yeah, this gets back to the point of having unique passwords. This cross-pollination of services, using duplicate passwords, is such a huge problem. If you go to the very famous site haveibeenpwned.com, you just drop in an e-mail or a username and then it basically gives you a list of pastebins that your accredited credentials appear on... And I've got numerous pastebins where my credentials have appeared on in the past, and it's quite fun to kind of go through that and have a look, and hopefully you've updated your passwords since then, but... It's such a great example of why this whole process is necessary.

**Adam Stacoviak:** Yeah, because in most of those cases too, when they're doing those data grabs or those breaches, they are not only just getting your password, they're also getting other key information, potentially even things like middle name, usually the e-mail address goes with it, so other key information they can then also use to act as you, essentially, go along with that.

**Perry Mitchell:** Exactly.

**Adam Stacoviak:** If you're using the same password across different services, or having, like in your case, Jerod, what you said before, some sort of high-security that's reused... And I'm not saying you're doing that now, but I did that at one point too, where I had "Oh, this is my high-security password" and I just would reuse it here and there, or at least on high-security services... Meanwhile, you're trusting that they've got their data intact or their security intact, and if they get hacked, then you're essentially open to hacks as well, because... Yeah, it's how it works.

**Perry Mitchell:** Yeah, it's identity theft, basically, and then they can use your identity, which at the base level is usually your e-mail address - then they can use that to attack you further, or pose as you, or do whatever with that... So yeah, it's quite damaging, of course.

**Adam Stacoviak:** Clearly, they're important, right? Password managers and/or high-security passwords are important, but maybe more so in today's world than it was in the early days or beginning days with 1Password, since they're the Goliath around here, is that we're drawing more and more to open source software; not just software overall, but particularly open source software, and in lots of cases around security... So maybe take us back to some origination for you. You've got Goliath in the room; you've started this - from what I can tell - in 2015, so it's not like it was yesterday... It was three years ago. And you know 1Password is out there...

**Jerod Santo:** Not to mention LastPass, Apple's iCloud stuff... So there's big players in the market.

**Adam Stacoviak:** Yeah.

**Perry Mitchell:** The funny thing was - back in 2014-2015 I had a really atrocious practice with my passwords. I had some four-character passwords on some services which allowed it, so I had a very...

**Jerod Santo:** 1234? \[laughter\]

**Perry Mitchell:** No, a little bit more complicated. It was alphanumeric at least, but still four characters... Pretty bad.

**Jerod Santo:** Pretty bad...

3:\[00:11:50.08\] And I eventually got talked into using a password manager by somebody much more wise than me. I started using KeePass, because I was cheap and didn't wanna pay for other services, so... I quickly discovered how much I hated the experience of using KeePass, and how broken the interface was, and how lacking the cross-platform support was in terms of like a unified experience, and also the complete lack of syncing... Syncing my credentials between devices was absent there, so that was a problem. And then, obviously, I looked towards the competition and didn't find a whole lot which I love back then.

I felt this immense interest in the whole security aspect and the syncing aspect, and kind of fixing all of these loopholes... Doing all that, and then getting something for free. And of course, it's not free - it's my time - but it's kind of like a work of passion, and then kind of providing that for other people, actually, so they can go and get this application without all the fuss which I was going through to find something. So it's definitely to fill a personal need, Buttercup. It was kind of like my first big footprint in open source, which I wanted to get behind, and it's grown a lot since.

**Jerod Santo:** What's impressive to me about it when I came across it - first of all, buttercup.pw. Of course, it's in the show notes for those who wanna check it out while we talk... But the UI looks very nice. The breadth of the work that you all have done... There's a desktop client which is cross-platform, there's the mobile clients, there's the browser extensions... It just seems like there's a lot of work to do, and that has already been done, in order to compete in a place where, like you said, you wanna be synced across your devices, you don't wanna have just access here, or just access there. A huge undertaking. I know you haven't done it alone, but the other thing that impressed me is it seems like it's pretty much a team of two... Maybe you wanna tell us about the team besides yourself, Perry, and then how that's grown over the years.

**Perry Mitchell:** Yeah, sure. My colleague, Sallar - he's been obviously just a fundamental part of the whole process. I couldn't have done this without him and his motivation, his personality. I think that when you find the right people to work with, you'll know that it's key to getting any project off the ground.

We met when I moved to Finland. We both worked in the same ad tech job. Not super-interesting, but pretty technical. We got to know each other, and we got to know that we both enjoyed writing open source software. We spoke about the whole password manager situation, and he agreed, and... Yeah, we pretty much just got off the ground then; we started kind of throwing things around in Node.js and playing with the project there, and kind of fell in love with crypto and kind of building projects around that.

The first project to come out of that was the desktop application, with Electron and React. It was a huge amount of fun to build that. A completely new experience... Back then it was still a little bit broken, a little bit rickety; it wasn't completely solid, it wasn't super-friendly to build in, but it got things done and we were able to very quickly produce a cross-platform application... And yeah, it just spiraled from there. After that, we just became insatiated with that and went on to the mobile app, and then the browser extension.

**Jerod Santo:** Let's talk about the core... I think the integration points are interesting. I think talking about how you integrate into the operating systems is so important for these types of applications. One of the reasons why I didn't use 1Password back in the day, Adam, was because the integration into the operating system was just not there. And that's not 1Password's fault, it was really Apple's fault in the case of iOS, where they weren't providing the hooks into the OS in order for that experience to be integrated... So it was always one extra step, it was always fighting with my convenience. And I already had, like I said, this system in my head of doing these passwords, so I was just kind of limping along with a semi-good password system... Because I hated the fact that I would have to leave Safari to go to 1Password to get the thing, and then get back into Safari.

A lot of that has been smoothed over in recent releases... At least on the iOS side, and I'm not very familiar with the Android side. I'd love to talk, maybe down the road in this conversation, about those integrations, Perry, and how you work into macOS and how you work into Windows to make that feel seamless... Because it really needs to be part of the core of what you're doing on your devices.

\[00:16:17.21\] Let's talk about how Buttercup works internally. You said you've gotten very much into crypto... I have no idea how these things work. I assume you have some sort of secure vault that you're just encrypting based on this master password, but I wouldn't go any further than that. How do you build Buttercup from the inside out?

**Perry Mitchell:** Essentially, in memory, Buttercup is just basically an object store; it's just storing obviously all your entries in there, all your usernames and passwords, so essentially it's just plain text when it's in memory... Obviously, protected by the operating system at that point, but while it's open, it's mostly plain text. When it's closed, obviously all that is wiped, but what's being written to disk is actually a delta, so a list of history of your vault. So what happens is every time you change a password, every time you move it in the vault, you change a username, or something like that. So if you're updating credentials, this is very important.

The deltas are kept in text format. A huge list of all the previous changes, probably a few thousand entries over some significant amount of time. That's encrypted using AES and CBC modes, so it's just a really basic, but still extremely strong encryption, which I would assume most password managers use, or should be using... At least the big ones do. LastPass and 1Password probably use the same technique.

So we encrypt that, and we also compress it, so we gzip it as well. We try to make the file as small as possible. On top of that, we're obviously running key derivations, so obviously your password isn't directly used to encrypt the content. We go through a process of deriving encryption key from that, and that's where the security really comes in, because obviously if people are trying to attack your vault, they're trying to gain access to it, so usually they're brute-forcing it, or they have some sort of table of most commonly used passwords, things like this... So basically, when they're attempting to break your vault, they're usually trying to brute-force it, and that's where they key derivation comes in; we use 250,000, maybe 300,000 rounds of key derivation iterations before we actually use the resulting key to encrypt the archive. That's basically to prevent ultra-fast brute force attacks.

These are all pretty standard techniques, but what they result in is an industry standard (if not better), very strong technique to store the contents of the vault, in a text format, essentially.

**Jerod Santo:** Okay. So when I enter my master password in order to decrypt my vault and gain access to the password stored in, you're not hashing that; you're going through this derivation process... Is that right?

**Perry Mitchell:** Yes.

**Jerod Santo:** Is that when it happens - when I enter it, you go 300,000 times in order to get to what is eventually the hashed password?

**Perry Mitchell:** Exactly. And there's also various other values which are stored with the vault, such as a HMAC, which is authentication... It's basically to ensure that the vault hasn't been tampered with, which is another common crypto technique. So after your password is hashed, we also derive this HMAC, which is just another type of key, and we compare the two, and basically make sure that the vault hasn't been tampered with - there's no modification to the data before that payload is decrypted. There's a number of techniques we use there just to make sure that the vault is clear, not corrupted, not modified... And then, of course, we attempt to decrypt it. If the password is wrong, the decryption will fail, of course, but not after taking a substantial amount of time to derive the key... So obviously, you have to wait x hundred milliseconds for the key to be derived, which should hopefully prevent a huge, large number of attacks per second.

**Jerod Santo:** Yeah. It's always fascinating to me the desire for slowness. It's like the opposite of all other computation, right? We talk about cryptographic algorithms and which ones work well - most of the time you're going for speed, right? Like, "How can I get this encrypted/decrypted fast enough?" But in these cases, you actually want it to go slow enough that it's computationally expensive to brute-force. That's always interesting...

**Perry Mitchell:** \[00:20:18.03\] Yeah, it's a really fine line to walk... It's like, how slow do you make it before it actually gets annoying? And I think that we've skirted that a long time. It's been a huge challenge for us, because if you take your MacBook, for instance - it decrypts and encrypts insanely fast. It's ridiculous. So us using 250k or 300k key derivation rounds is actually quite low; it's recommended to be a bit higher. But the second you take that process and you try to run the same process on a phone, especially an Android phone from maybe 5-10 years ago, it's horribly slow, and the user experience is just not there at all... So you have to be considerate, but you also have to make sure that you don't just drop it down to an unreasonably insecure number... So it's a bit of a challenge.

**Adam Stacoviak:** Not only that, but now you have -- I don't know how this fits into derivation, but you have face ID, or touch ID, or different ID types aside from the password. So you've once authenticated to it, and now you get your face as part of the encryption process, which is a whole different thing; I'm sure that's at the iOS level, which we were talking about, Jerod, the integration level and making that more and more seamless... Which 1Password has done pretty well, on that front at least, with face ID recently; I've just started to use that. How does that key part fit into this derivation process? Is that one more layer you have to add support for, is that on the roadmap? Where are you at with that? How does that fit in?

**Perry Mitchell:** It's actually already done. I mean, not for desktop yet, but we have the face ID and touch ID working on the mobile app. So after you've logged into your vault for the first time using your encrypted password, you can immediately turn on touch or face ID, depending on the device. What that does is it basically stores your master key in an encrypted format, which is managed by the OS; so it's not OS-level things. At that point, iOS or Android is responsible for storing that, to the best of its ability.

So you have to have some level of trust to each step, depending on what you wanna do here, but of course, people obviously store their entire lives on their phones, so I think that it's a reasonable expectation to use something like touch ID or face ID, for convenience, at least.

**Adam Stacoviak:** It makes sense. You definitely have to hand over some trust. As you were talking through all this, I was thinking "Geez, should he be sharing exactly how they do things? Because somebody could reverse-engineer this, and..."

**Jerod Santo:** It's all open source, bro...

**Adam Stacoviak:** Well, yeah, of course, I guess so, but you'd have to dig. So you'd have to even be--

**Jerod Santo:** Perry, how hard do you have to dig to get at your guys' algorithms for this stuff?

**Perry Mitchell:** If you know what you're looking at, it's right in front of you, really. It's like the front page...

**Adam Stacoviak:** Is that right...?

**Perry Mitchell:** Yeah... And the thing is it's not -- people have raised that point over and over and over for us, like "Oh, open source - isn't that gonna make it more insecure?" and actually kind of the opposite intention we're having, trying to make it more secure. I enjoy crypto. I'm definitely not a professional by any measure; I probably wouldn't say I'm a hobbyist, but somewhere in the middle, basically... And this is where it comes in, is that I can't put all these people's trust in just myself or my colleagues. It has to be a bit bigger than that. And that comes back to the open source discussion - it's for everybody to look at, and for everybody to critique and modify and improve.

Obviously, we were very comfortable with what we first released in terms of being secure, but the intention is to kind of like make it better, and use as little home-grown crypto as possible and use as much as the operating systems we're building on's supply. We're trying just to be very smart with that critical part, because you only get one attempt at building a secure system like this. Maybe some of the big password vendors - such as LastPass, they've had a couple of successful hack attempts... I think that they've obviously still pulled through, but normally those things are incredibly damaging, so we need to make sure that we have our ducks in a row when it comes to the crypto.

**Adam Stacoviak:** How do you mean you only have one attempt to getting it right?

**Perry Mitchell:** \[00:24:08.13\] I've got a bit of a pessimistic view on the whole data breach thing. I think it's extremely damaging brand-wise, especially for someone like us, where we're starting out... The crypto and the security measures there are definitely a primary concern for us, just making sure that's all put together properly.

**Jerod Santo:** In line of that, did you have any concerns with choosing Electron and Javascript as platforms with regard to this, because of a lot of the transitive dependency problems that we've seen? I'm seeing that at least your Buttercup core is packaged JSON, and your dependencies here are very small, so that's great... Obviously, more dev dependencies that runtime dependencies, but I assume once you get to Buttercup desktop, this list is probably going to balloon. Are your concerns with regards to using third-party packages, or is it more about using the right crypto algorithms and not rolling your own crypto?

**Perry Mitchell:** That's an extremely good question. I think there's definitely a bit of concern on the table with the dependencies. Just today I got a message right before this, that there was another dependency injection farce that appeared on Npm, some event stream library, which had had some malicious code injected into the minified source. This happens all the time, and it is quite scary, but from what I've seen, it normally happens due to the fact that whoever is the author of the package has normally done something quite questionable, and normally handed over the ownership of the package to somebody else, or used terrible security practices, or something like that... So at least from what I've seen, it's been normal carelessness.

I have a bit more faith in the larger packages such as React, where it's a very strong community and a review-based progression model there. So I think that for the most part, f we stick to the core UI libraries and don't haphazardly install, you know, time saver dependencies, I think that we'll be mostly okay there... But it is a constant concern, and I would ideally like to reduce the list of dependencies down to something very manageable, something which is just bare bones and just what we need. At some point it'll just become overkill, of course, because... \[laughter\] You know, you can't make it perfect. At some point you have to use somebody else's software - you have to use Electron, you have to use React.

I think that you can get it to a point where it's of little to no concern, but it's the same thing as "Is the computer you're running on secure? Have you installed something which is questionable? Are you on Windows and did your mom or somebody else install some questionable package from the internet the day before?" All of these things are going to increase the chances of your computer being hijacked, your passwords being stolen, your secure information being tampered with.

I think you have to draw the line somewhere, but both the dependency model and everything else is definitely a concern for us. Easy with the core, but with Electron - obviously, it's gonna explode; you need a lot to get off the ground with that these days, so...

**Jerod Santo:** Yeah, exactly. The reason I thought that - first of all, it was also because of that, I don't know if it's a zero-day, that specific vulnerability that was pointed out with regard to an Npm module that was snuck on the Npm and propagated down... The difficulty with that - and I agree it's often the case, and in this particular case it was the main maintainer of the package gave contributor access to somebody who then pulled in another dependency which had this issue. These things are very difficult to manage, because you may not even be the maintainer of the project; it can be a maintainer of a dependency of yours, or maybe even a dependency of a dependency that was lazy or that was malicious. So these things are very difficult. That's one of the reasons why I thought of it.

\[00:28:09.24\] The other reason is because we've just recently interviewed Brian Bondy, who's the CTO of Brave, and they were maintaining their own fork of Electron. Brave is a web browser built on Electron, and they were maintaining their own fork of Electron, with specific security patches against Chromium that the Electron people weren't as interested or motivated to keep up to date because of the way Electron is supposed to be used; it's not necessarily built to be a browser platform. They had security concerns there, and I was thinking "Well, what about Electron in the context of a password manager?" Certainly password managers now have been exposed to as broad a swathe of potential attacks as a web browser is, but nonetheless, these are most definitely things that you are probably thinking about, since security is so important to you.

**Perry Mitchell:** Absolutely, yeah. Electron is actually probably the worst for us. Obviously, we have the browser extension which is all browser-based, so that's also concerning, but I would say that the desktop is probably the most concerning, because you're right, it's pretty much a full-blown browser when you look at it... So that's a bit tricky for us, but we do bundle everything when we release, which is very important for us, so there's a very small amount of dependencies which are installed when you actually install the application... So what we're actually releasing should stay relatively - well, mostly - untouched before it gets to the end user.

There are a couple of low-level dependencies which actually need to be installed on the host operating system to actually work, because they have OS-level bindings, C-level bindings, stuff like that. However, everything else, such as the UI libraries, all other helpers, the Buttercup core, stuff like these - these are all bundled with the application. These are not modified after you install them, so they don't have a chance to download something else, fetch malicious code... And we have - I would say - quite a strong review process. We check, obviously, the network access, we manage all the requests before each release, so... I mean, this will improve, obviously, when we flesh out a bit more of a larger team, that we can actually use to quality-assure the product we're releasing, but all in all I would say that I feel quite confident that the built product coming out on the desktop is still not changing so much when the user is installing it... So I would say the risk there is much more reduced based upon just the fact that we package everything before we release.

**Break:** \[00:30:43.21\]

**Adam Stacoviak:** I guess the next layer of security is "Am I installing something that is, in fact, secure?" and then you kind of go back to this idea of reproducible builds, which is essentially the concept of "You build it once, and you give me a binary, and I can confirm that binary relates back to its original source." Then, obviously, once it's running, you have runtime concerns, but where are you at with reproducible builds in that security level?

**Perry Mitchell:** This is something that w obviously care about; it's not just from a security point -- I mean, that's the most important, but obviously, from a stability point, having reproducible builds is very important. Having a whole lot of things which change dynamically on install time is generally not super-nice to debug and play with... So yeah, this is something which is important for us, and Electron has a really great system here.

Obviously, it has a whole lot of bundling support, so you can bundle everything using Webpack or whatever you want beforehand, which we do... So that creates static files, for the most part, which is great, because then they don't change. They're what we run, and what we test, and then what we release, and then ultimately what we sign as well... So that's all well and good. And then, obviously, there are still a couple of low-level OS integrations which need to be installed, file system connections, things that Electron has which patch into the OS to give the look and feel of a native application.

These things we can't avoid, we obviously can't bundle, so unfortunately they need to be installed at install time. But we can kind of obviously restrict the semantic versioning there and be quite strict with the versions that we're installing, so at least if we're locking to a particular version on Npm, then that should be the same code that everybody gets. Obviously, again, the trust is moved elsewhere - it's moved to Npm, it's moved to the fact that they can run a secure firm there. The buck has to stop somewhere, of course.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Random, somewhat related question... I'm just wondering about Electron, because there is so much pulled in - now that we're talking about dependency management, there's so much there... What was the original reason for Electron? Was it because you know web technologies and you wanna go cross-platform? That's what I assume would be why you selected it, but why not write every line of UI from scratch, right? Why not remove that dependency?

**Perry Mitchell:** Yeah, true. I actually started my development career, my hobbyist interest in development actually with QBasic, and very quickly moved on to things like Pascal and Delphi, and did a lot of raw interface development there... And I can see the value behind it, because it's so easy to get off the ground and build very powerful applications, and it's got native performance, which is something which I really value... It's the whole stinging feeling of using a web-based application when you can kind of tell it's not quite as responsive as you would hope... So that's a crucial point for me.

But at the same time, after all of that, I'm left with the Windows application, which can run on a couple of versions of Windows and nowhere else. And of course, there are other cross-platform systems which allow you to build cross-platform native applications, but I've seen so many of them and they don't really look super-good. We wanted something which looked beautiful, worked really well, and was obviously less work for us, because there's only two of us -- or only two of us working full-time. Obviously, we have a lot of really great contributors, but at that point in time it was important that we could get it done and get it done quickly, and then have a lot of code reuse... And then, most importantly, a UI which is uniform across the operating systems.

We've got three operating systems for the price of one, minus the bugs, of course, and the quirks with the UI... But apart from that, it was super-easy to get off the ground, and Electron was really coming into its prime then, so for us it was an obvious choice. And both of us were React developers, so it just made sense to kind of couple all of that UI work that we were playing with with Electron, so... It worked really well.

**Adam Stacoviak:** So if the Electron team is listening, what could they do to make your job easier from a security front?

**Perry Mitchell:** \[00:35:57.29\] I think that having as much eyes on the security aspects in the regular updates... Because obviously, Electron uses Chromium under the hood, and being as up to date with the actual base there, the upstream is so super-important... Because obviously, the funding levels are a little bit different; the effort going into each is a little bit different, obviously... The interest and directions, like you mentioned earlier, are a little bit different, but ideally, security should come first. It's so important in the browser landscape to have something which is secure, and this comes back to the runtime security as well. It's like, "Do I trust Chrome to be secure in terms of runtime attacks, and stuff like that?" Yes, for the most part I would trust it to be quite secure, but it's never going to be perfect... But it's so important that -- there are so many applications now being based upon this platform that it's more important than it's ever been that it's more secure. It's not just a browser anymore, it's the base for a huge swathe of applications, and obviously now password managers... So yeah, we're very interested in the development cycle being kept very tight.

**Adam Stacoviak:** Is there a case where you would ever move away from Electron if they -- or is this just good enough for now, where it gets you to a certain point because you're a smaller team, or...? We'll have more to talk about later, but your pre-funding, or your revenue at this point, or you've got some sort of service ideas or business around this to sustain it in the long-term, but... Is this good enough for now, where you eventually think "We should probably build most of this on our own" after a certain point?

**Perry Mitchell:** Super-good question. That also relates strongly to the mobile application, which is built in React Native. It's very much related to this topic, so... I think that, yeah -- would we build them native if we had the had the resources in mobile? Absolutely, yes. I'm done with React Native. It's a beautiful system to get off the ground, it's a lot of fun to work with in the beginning, but to maintain over the long-term it's been a huge pain in our neck, especially with crypto... And I'll get to that later.

In terms of Electron - Electron has treated those really well, and it's been very enjoyable, but I think that if we had the development resources, I think that we would definitely strongly consider building native, obviously, to reduce security risk... And also to reduce package size, because right now our installer is around 55 MB. It's gigantic for what it does, and obviously that's because you're packaging a whole web browser and Node.js with it, so... If you could get rid of that issue there, you'd end up with a faster, smaller, more secure application... But obviously, that involves a lot more work than we're capable of putting in right now, before we actually get funding and be able to work in this full-time.

**Jerod Santo:** This is probably a crazy idea, and it's probably also a bad idea, but there's so many Electron-based applications running on any given machine on a regular basis... It's almost like you should have a dynamic-linked library that is Electron -- or like a single instance of Chromium, or something, that all these Electron apps would be running against that shared memory... That's probably pretty stupid, right?

**Perry Mitchell:** I think for most applications it probably would be okay, but then the emphasis is on how much security is actually--

**Jerod Santo:** Yeah, it's worse for security, but it's better for user experience memory...

**Perry Mitchell:** Yeah, and especially with shared memory. The second there's any vulnerability, then you've just opened the doors for an attack factor there. And of course, if you explain that process to people, they're only gonna criticize Electron more than they are already today, so...

**Adam Stacoviak:** Yeah...

**Perry Mitchell:** I think that for the small increase in performance it's probably not worth the bad publicity, I would say.

**Adam Stacoviak:** I was thinking the same thing, Jerod. I was like, "That's not a very smart way to \[unintelligible 00:39:40.24\]

**Jerod Santo:** You were smart enough not to say it out loud though... \[laughter\]

**Adam Stacoviak:** Well, I was thinking that though, because I was like, "Well, that's the case... If you can remove Node.js and if you can remove Chromium, but if you had a trusted local source..." But then that only makes it more and more niche, right? That's not gonna be everybody.

**Jerod Santo:** Well, right...

**Adam Stacoviak:** \[00:39:57.23\] Like, not everybody's gonna do that, even if you can.

**Jerod Santo:** You'd have to have a full build, and then a linked build.

**Adam Stacoviak:** Right.

**Jerod Santo:** Like I said, it's probably a bad idea, but I thought I'd throw it out there... Because I was just trying to solve this problem, and it seems so silly that you get this new application, and because of the same reasons that you picked, Perry - they wanted to be cross-platform, they understood web technologies, they wanted these things that were so easy... A lot of people are building Electron apps, and as an end user, I don't care so much about cross-platform, as long as it's in my platform, which is the same for everybody, right? But on my platform I just do not want to have a new Chrome instance for every single app that I'm running, and I all this memory bloat and stuff just seems like overkill, so I'm just trying to come up with ways of solving it...

**Adam Stacoviak:** ...for you. \[laughs\]

**Jerod Santo:** Well, just for me, but yeah...

**Adam Stacoviak:** I know, I'm just joking, because it makes sense to be selfish in that way. We talk about this in Apple Nerds all the time - certain applications just blowing up the RAM, or blowing up the CPU... And this is why, because you have multiple builds, or whatever... Or just basically waste chillin' there, and... You know, we're particular.

**Perry Mitchell:** Yeah, of course. That's a big concern of ours, as well. I think that both of us are very perfectionist in terms of getting the best out of it we can, and obviously sometimes to our fault of not being able to release things fast enough; we'd like it to be as perfect as possible, and one pain point as such is definitely the UI. We feel like we love the look of it and love how it responds, but in terms of the resource usage, it's a huge pain. That would be something which would be great to get rid of, but at the same time, having this unified deployment and build process and everything means that we can also release fixes and updates much quicker. It's maybe like half a day to get a brand new feature in, all cleaned up and released, instead of spending a couple days on one OS, and then going across to Mac and Linux and doing the same build process, which would be a huge pain.

You really need a team to do that simultaneously, especially in terms of security of releases, and stuff like that... You can't afford to have a long release cycle at this early stage. Electron has kind of helped us with that, but I can see that we might outgrow it at some point, but at the same time I can see Electron improving by leaps and bounds in the not so distant future... So I'm optimistic that it will get smaller and faster and lighter and more secure all the time, but of course, that's just a pipe dream at this point, so...

**Adam Stacoviak:** So if you had your rathers you'd rather, as you just said, rather than move on to native builds for each...

**Perry Mitchell:** Yeah, I definitely prefer the process. Like you said, I'm a web developer, so for me it makes a lot of sense. We kind of started this whole project as like a Javascript project. It was the Javascript password manager... Kind of like really embracing the community there, so everything is built with Javascript, bar the mobile application's crypto stuff, because we actually released the first version of the mobile app with the Crypto Browserify library, so basically the Node.js compiled crypto libraries, which were gigantic... And they were terribly slow on mobile, didn't work very well, crashed on a lot of devices... So we basically rewrote those in native Objective-C and Java, and built a bridge across to the app to use those.

That was a great thing, because the speed increased, and the size of the app went down. But that's also a huge pain to maintain. Every time we find something we wanna add in terms of crypto support, we have to do the Javascript modifications - a lot of painful testing on the React Native - and then we have to do the native code in Objective-C and Java, and obviously do tests for that as well, so... It's a huge development process when we have to manage those native builds.

**Jerod Santo:** Are you actually writing those crypto libraries, or are you importing and statically linking them?

**Perry Mitchell:** Yeah, so we were using the built-in crypto stuff in Objective-C that Apple provides, and the same in Java, that Android provides... And we've just recently actually moved across to Rust; so we've removed all of that, and now the crypto library is built into Rust, and it's the same one which is deployed to both Android and iOS. But that is using Rust's core crypto library, so again, nothing that we've rolled our own; it comes with the base system. We're very confident that we're using the best and the safest there, but now we're back to having one build for multiple devices, so it's a little bit nicer to work with.

**Jerod Santo:** \[00:44:21.24\] And from React Native - let's talk about them a little bit, because you're frustrated with React Native, and it sounds like a lot of that is because of running the Javascript-based crypto stuff on phones... But it sounds like it's providing you at least the ability to call into that Rust code or the compiled output of the Rust code to do these low-level things in kind of a cross-platform fashion. Tell us about your experience, maybe some of the reasons that you are frustrated with that platform... Without just trashing people. \[laughter\]

**Perry Mitchell:** No... Actually, to be honest, I love React Native. It's been a fantastic experience, and I really feel it's still somewhat unrivaled across the other development environments for mobile. I've worked with Titanium, and a little bit of Ionic, and PhoneGap, and Cordova... I played with all of them, and just the infrastructure was not there. React Native offered a familiar interface, obviously, through React-style building of components, and that really appealed to me, and I gave it a bit of a go and it worked amazingly well immediately, on both platforms... And we just thought "Hey, this would be a great way to start." That felt like a really good idea up until we had to do the crypto stuff. Then we realized our mistake. But at that point we just kind of said "Okay, there's no way around this. At some point, the crypto is very performance and security-heavy, so it needs to be native in most cases", so we just bit the bullet and built that natively.

I think that the biggest pain point for React Native is just the debuggability. Sometimes it gets you into a position where you've got some really gnarly transpiled and minified code running, which you're debugging on a virtual phone on your computer, which is using all of your memory and CPU... It just gets to the point where it's' like "Why am I doing this this way?" It just feels very counter-intuitive, but... Either walk away from it and have a think, and come back to it and then it's okay, or you delete all of the work that you did over the past day and start again, but... We've gotten through with the mobile device and we have something which we're quite proud of, but I think that would be the first thing that we would rebuild in separate native applications, had we the time...

**Jerod Santo:** One small statistic which maybe is an outlier or a red herring, which you can speak to, is Buttercup desktop has 42 contributors - that's the Electron-based app - whereas Buttercup Mobile has just three contributors... Speaking of code contributions, realizing that there are many other contributions besides code, but maybe this shows the difficulty of working with React Native, or maybe just the learning curve. I'm sure two of those three are yourself and Sallar, so just one third-party contributor on that one? Maybe the age of the repo also plays a factor, but has there just been less community focus on that application?

**Perry Mitchell:** It really has. We've tried to stir up focus on it. We've had some bounty source items open on the mobile application, we've had lots of outreach on Twitter trying to get help with it, and... Yeah, very little feedback. Not for lack of trying, but there's just been so little interest. If you look at our users as well, right now, we have 350,000 downloads on the desktop application, which includes some updates of course, but that's probably our biggest number of active users, coming through the desktop application. Then comparatively to the mobile application, maybe we have just a few thousand, compared to that, so... It's a much smaller interest group to start with.

But at the same time, I just think that the reward in developing in React Native is just not there. Everyone I know around me that uses React Native is doing it for work; they're getting paid, their salary comes from their work on React Native... Whereas so many people I know that work with Electron, they're doing it for hobby projects and really enjoying it... And I love it as well.

\[00:48:10.07\] I feel like it's just a very different environment, and I think it's such a steep learning curve in terms of actually getting everything to work, getting all the libraries installed, getting the perfect environment, getting Xcode to a point where it doesn't want to update when you open it... Yeah, it's a huge lot of work to get that working, whereas Electron is very much just plug-and-play; you install everything and you run it and you have a working application. So yeah, it's vastly different, and that does show in our contributions. It's much harder for us to get the mobile application to a point where we're as happy with it as the desktop applications.

**Adam Stacoviak:** Jerod mentioned some concerns really about integrations. That's always been a stickler for him in terms of like user experience, and even using a password manager in the first place. What are the gotchas on mobile around the experience in terms of integration? I know with iOS you have the up arrow that lets you choose other services when you're on like a password login page, which -- I'm not sure that's a standard or not, or if it's because I have 1Password installed, but that key icon that lets you then choose or launch something I believe it's just 1Password; I could be wrong, but... Maybe you can walk us through some of the UX concerns you may or may not have around mobile for you.

**Perry Mitchell:** Yeah, that's a good point. If you're talking about the key, I believe it is at some point an iOS-level feature. In iOS 12 they have the new password manager integration, which is really funny for Apple to do, because for them to acknowledge the password manager community as something which needs a direct integration like that is actually really cool.

So yeah, obviously you can integrate with that, and you need to build it into the application, which we haven't done yet, because it requires some low-level native code to do that integration, which is still beyond us at the moment; so that's kind of in-progress, but we haven't released it yet... But that's obviously very helpful, and that bridges a huge gap in terms of usability, because you don't wanna switch applications, like you said earlier; you wanna just have it at your fingertip. This is where 1Password is really pushing things forward here, because to my knowledge, they were the first ones that announced the integration. So yeah, that's definitely where we wanna be, as well.

Those are very tricky, because these are things that React Native will never be able to do, in my opinion. I just don't think it's gonna be a focus for the community to build. It requires a lot of low-level native integration, and testing, and making sure it works... It's not available in every iOS version, so it's gonna be something which you need to write the Swift or Objective-C code to get working, so... That's a bit tricky there, but it's still a very important point for a password manager to be usable in terms of having the connection from the interface that you're currently looking at logging into.

**Adam Stacoviak:** I don't really mind app-switching. I mean, I guess I'm less a Jerod and more an Adam in this case, because I would actually deal with the security over convenience factor... Although I can remember a day when -- I've been a 1Password user for a very long time, so that's my perspective I'm speaking from; not so much keeping to marketing them, but there was a day when that integration wasn't there, and I would app switch from my login screen or the app login screen back to this thing, and copy the password and remember the username, and immediately type in one piece, but then paste the other...

**Jerod Santo:** Ugh...

**Adam Stacoviak:** \[laughs\] See, that's turning Jerod's stomach, he almost threw up in his mic right there...

**Jerod Santo:** \[laughs\] I swallowed it.

**Adam Stacoviak:** I mean, I was okay with that, but it sounds like what you just said was that you would have to move away from React Native to get that kind of feature set.

**Perry Mitchell:** Well, no... I mean, we could do the same thing with the crypto, basically... So you basically build the native integration in Objective-C or whatever the codebase is, and then you have to build another bridge to the React Native. So the Javascript is calling an asynchronous bridge to the native code, and that becomes very fiddly, because testing that is pretty much impossible. It comes down to acceptance testing via the UI, and then maybe unit-testing either side separately, but... It's a huge pain to manage that, and debugging it is very painful, because you can't just write logs on the native code, so I don't expect to see them in your console.

**Adam Stacoviak:** \[00:52:15.05\] This is why I thought eventually Apple would just buy the Goliath in this space... And maybe this is what's drawn me to it, but I could be wrong... But I've always speculated that Apple would eventually buy 1Password and just be done.

**Jerod Santo:** \[laughs\] Just be done...

**Perry Mitchell:** Yeah... I mean, of course, it's a huge target, and you're buying so much when you look at these companies - you're buying a huge expanse of users and operating systems and integrations, and I think that it would be quite a smart move... But at the same time, Apple also doesn't shy away from building things themselves and having fully-fleshed products, so it wouldn't surprise me if they went either way with that. It seems like they're already taking quite the route of doing things themselves with password management anyway, so...

**Jerod Santo:** I'll say 1Password is a power user tool, and it's for teams, and it's for advanced situations. Apple's iCloud Keychain stuff completely suits me as just a regular user that just wants my stuff -- my password is just there.

**Perry Mitchell:** Yeah, you're right. Apple definitely looks more focused towards the end user, not so much the teamwork side of things.

**Break:** \[00:53:29.03\]

**Jerod Santo:** We're talking about mobile integration, and the main thing that you need on your mobile device, that you also want on your desktop, that you also want (I don't know) on your wristwatch, or wherever else you need passwords, is the same vault. You need that sync. This was one of the main things that I think you started off saying you wanted, Perry, so tell us about the sync story with Buttercup and how it works to get that vault propagating around.

**Perry Mitchell:** Yeah, this was one of the points which actually got me started on Buttercup... Obviously, maybe KeePass wasn't the best decision for me to start with, but it was a great start - it was free, it has a lot of open source applications around it, so that was kind of my starting point, and I noticed that there was no syncing... I mean they have some sort of basic, really hard to set up web server which you can use to kind of sync your accounts, but just not very user-friendly there at all, so... That kind of propelled me into building Buttercup in a way which would be easily synchronized.

Buttercup writes the vault files, like we spoke about earlier; they're just text, basically, so they're really easy to store and send, and very lightweight, while being secure... So I immediately thought, "Okay, where can I put this? Where can I put it where it's accessible everywhere?" And I happen to be running my own cloud server at home, which is called ownCloud, which is a fantastic, free, open source software... But obviously, not everybody does that, so immediately we also built a Dropbox connection as well.

\[00:55:59.19\] Pretty much everybody knows Dropbox, it's a household name. It also happens to be free, and the fact that we're encrypting the content before we store it there kind of negates, in our opinion, any risks that might be associated to using a cloud service provider. Not all of them, of course... I mean, again, we're still trusting a vendor, but at the same time storing it on your own computer, storing it in your cloud server... Like, at least Dropbox has a team of professionals behind it, so that was an obvious choice for us.

So we started with those two in terms of syncing the archive, and made it available via a web interface to all of our applications. It's very easy to load it up in each device, decrypt it, run it, save it, write it back to the host there.

**Jerod Santo:** So I'm feeling like a failure, Adam... As a Changelogger, I have never heard of ownCloud. How about yourself?

**Adam Stacoviak:** It's a first for me, man. I'm with you.

**Jerod Santo:** We missed it, so maybe an upcoming episode on ownCloud. That's something you think is pretty cool, Perry?

**Perry Mitchell:** Yeah, it's really cool. It's a PHP-based system. It has a couple derivatives also - NextCloud, which I wanna give a shout-out to... Those guys have been amazing, helping us with integrations. All of it is open source, it's as good, if not better, in my personal opinion, than some services similar to Dropbox, obviously because it's free, but it's also very fast. They have all the clients, mobile applications, and you pay nothing for it.

Of course, you need to be relatively tech-savvy to set it up yourself, but other than that, these services are a lot of fun to work with, and can teach you a lot about cloud storage as a whole. And it just seemed like a natural start for us.

We also added WebDev support, which many online web hosts support -- I'm not sure whether Amazon Drive does anymore, but many of these cloud services support WebDev, which is a great way to integrate with cloud storage, which we also support.

**Jerod Santo:** At the beginning of the show, Adam, you were mentioning that you used 1Password with Dropbox support, and then you upgraded to some sort of paid version because you didn't enjoy the experience with Dropbox specifically... Buttercup, based on Dropbox, or ownCloud, or WebDev, but I'm curious what -- remind me, Adam, what the issue is with Dropbox, with your password sync?

**Adam Stacoviak:** Well, I always had 2FA going on there. I obviously had some sort of crazy long password to get into Dropbox, because hey, it's Dropbox, right? I wouldn't want anybody in that thing, so my password--

**Jerod Santo:** You don't want a password to your Dropbox...?

**Adam Stacoviak:** Right. My password would be in 1Password, so to install it, I would have to read this super-long password from my phone, that did have access to 1Password, so that I can install Dropbox just to sync it... And then, of course, I would get tons of stuff in my Dropbox, so it's like "How do I prioritize what to sync to a brand new machine?"

**Jerod Santo:** I see...

**Adam Stacoviak:** That whole song and dance just got more and more troubling, so I was like "You know what, I love Dropbox sync for most things, except for brand new machine installations", which was -- the first thing you're gonna install is gonna be your password manager, because you're doing lots of stuff.

**Perry Mitchell:** Yeah, there's a lot of friction there, obviously, with logging in... I've done the same thing a couple times - log into the vault on my phone, and needing the password to the storage host that I'm storing it on, so I need my desktop computer and I need to open up the password there so I can kind of type it in my phone... That's kind of unavoidable, unfortunately... Unless, of course, you have a paid hosted account with whatever provider you're using, such as 1Password... But of course, we would like to still circumvent that somehow. We have some plans to release a secure QR code, which you can just scan on your mobile app. Basically, if you've got your computer nearby, you could instantly connect to the same vault and the same source just by scanning with your phone. That would alleviate some of the typing in of multiple passwords, and kind of getting that to your device.

So we have some ways to get past it there, but ultimately, yeah, we'd wanna end up with a lot of people using our eventual hosted service, which would alleviate a lot of these self-storage issues with using providers like Dropbox and other ones.

**Adam Stacoviak:** \[01:00:01.10\] From that perspective it sounds like - I'm assuming this, and I'm hoping you'll answer it, however you feel like it, of course - you're in this for the long haul, and we've had this great conversation about some really thoughtful stuff on how you've built up Buttercup... A lot of thought has gone into various layers of this, tons and tons of hours of your time have gone into this, and it seems like the next step past sync is this service, which could be the next step to some sort of long-term gain for you. What does that look like for you?

**Perry Mitchell:** Yeah, I mean... This is still obviously a hobby for us, at some point, but we've gotten to the point now where we realize that we're extremely serious about what we've built, and the community has been super-supportive and really positive about what we've been providing so far, and a lot of people wanting to get in on it and use it, and we've received a lot of compliments... Already that's kind of fueled our desire to actually make something of this and keep it afloat, and as much as we enjoy leaving our day jobs and coming home and then spending several hours on Buttercup - which we will continue to do, of course, no matter what - I think that it would be great to make this a full-time thing and actually have a team behind it and see where this will go.

We have plans to release a hosted service, hopefully sometime in the first half of next year, where we could host people's vaults online, similar to the other services. However, we're trying to create a really low barrier of entry for people, and we're intending to have a free hosted service for single, personal use vaults. So there won't be any charge to host your vault on the site, due to the fact that they're so super-small. And obviously, that's gonna be great for adoption, in our eyes, if it's not gonna cost anything... But we intend to also have a team-based cost model behind that, which will hopefully drive some sort of company which will support the development of Buttercup in the future, including the open source, of course.

Our intention is to build a company behind it, and have that also support the open source community in whatever way we can... So it's just gonna make the whole project a much stronger entity.

**Adam Stacoviak:** Are you going that route because you think it's the great way to take the business the next step, or is that the preferred route to some sort of sustainable funding? Because there's other ways you can go about sustainability. I'm just curious if that's the route you chose to go because of some sort of grand vision in the future.

**Perry Mitchell:** We've looked at other ways of funding this, and we've had a lot of talks with some great investors around Helsinki as well, and... I don't know, I think that we've chosen it because we would actually like to see it built into a company. It would be nice to have some full-time employees around and actually have some sort of process there.

We've tried things like Open Collective, which has worked exceptionally well, but I just don't think it's going to scale to a level fast enough where we kind of need the growth the way we want it now. I think that getting some funding, getting us off the ground and actually getting some people which are building these things on a daily basis - I think we're gonna see some great growth, and we're gonna get away from all these pain points which we're seeing now, in terms of actually release times, and not being able to devote the full day of work to it. Once those things go away, I think that Buttercup is definitely gonna catch up and be someone to contend with.

**Adam Stacoviak:** Just to harken back to Open Collective - you have, from what I can tell, a $283 estimated today's balance. So you've got an annual budget of $285.

**Perry Mitchell:** Yes.

**Adam Stacoviak:** I can see how that's not gonna scale to employees...

**Jerod Santo:** It's not gonna do it.

**Perry Mitchell:** \[01:03:42.16\] \[laughs\] Yeah. I mean, we also haven't spent anything on marketing really, so it's kind of hard to say right now where that would go... And people have been really supportive already doing that, but of course, if we want to hire a full-time developer, which would be the first place we'd probably wanna start... I mean, developers aren't cheap anywhere you look, so I think that having some high-level funding behind that is gonna be crucial to getting off the ground. If we had someone working even just full-time on Buttercup, that would be an immense help for us, pushing out new features and getting these low-level integrations in mobile devices, which are slowly needed... So yeah, I think that's the direction we're looking at taking at this point.

**Jerod Santo:** Just from an outsider's perspective - I'm not a domain expert on enterprise security, but it seems like having a hosted solution could potentially lend itself well to an enterprise play, wherein you could go on-premise... Because if you think about what an enterprise needs, or what plays well financially at the enterprise level, mission-critical things that are infrastructure and security-focused, where they'll wanna run it on their own networks and potentially pay a premium to have a self-hosted version on their own networks... Yeah, potentially some options there.

**Perry Mitchell:** Yeah, for sure.

**Jerod Santo:** Definitely interesting potential future. What kind of service would it provide? What kind of features? Obviously, it's gonna be syncing without the need to have a Dropbox or an ownCloud, but are there team features, are there other things that you're thinking that will be offered, that Buttercup core or Buttercup non-hosted or self-hosted won't do?

**Perry Mitchell:** The sharing thing is something we're gonna have to work on, because the way that we've built the vaults is quite complex... But we feel that the sharing aspect of things is gonna be fantastic for us to actually have as a paid feature, because I think it deserves that, of course. But at the same time, having like an array of vaults where it's just gonna seamlessly synchronize between users, being able to invite people easily, having your family in there, and then having the ability where people can modify the vault at the same time... But it's still, at the end of the day, stored in the one same spot, under the same encryption key, and I think our vault structure right now lends itself to being very easily merged.

We have conflict management built into the core, which is gonna play very well for sharing, and also offline vaults as well. For instance, if you're on a plane or something, and you update a password or add an entry or something like that, then you go online and you want to merge your changes, these are things which need to be thought about, and I think that our structure actually lends itself quite well to that, and to the sharing aspect. And of course, there's also the benefit of encrypted media, such as maybe you have a photograph of your passport in your vault, or your driver's license, or something... These are things which we also need to consider storing securely.

So yeah, there will be many features which we will release, both in the free, public, open source version, and obviously some to enrich the business side of things, but... Yeah, primarily it will be team-based, it will be hierarchical if that's what you choose in terms of your company structure, so different permissions for different vaults, maybe read access, stuff like that. There's a huge amount we could do there, but once we get off the ground and we have the free version released first, then we can look at what we want to do with the teams.

**Jerod Santo:** I did see a Notes field in one of your UI screen grabs; is there currently the ability to store additional metadata or non-passwords, maybe SSL certificates or API keys that aren't specifically passwords, and use those in different ways?

**Perry Mitchell:** Not in a user-friendly way. We do support it, but we haven't updated the interface yet. That is currently in the works... But yeah, we have the intention to first store basic things, basic text files like SSH keys, but I think that one of the most request features which we have yet to release is the ability to store media like images and videos and documents... And that's very tricky, because we're trying to manage a very performant encryption process on mobile and different devices, and when you're encrypting media, you need to be obviously very careful how you transfer that around, and how we store that as well on a cloud service - do we bundle everything in one file, or do we split the media based upon what they stored? There's a lot of questions we have to answer there, and we need to choose wisely before we release that, just to make sure that we have the future in mind in terms of performance.

**Jerod Santo:** \[01:08:07.17\] One thing that's cool is you guys have an open source roadmap repo, with an overview and all sorts of stuff in there, so you're very open with regards to where this is heading... But I'm just curious about, you know, as a side project that you work on at night, after you're done doing your 9-to-5 coding, how do you prioritize, how do you get motivation? What do you decide to work on on a Thursday night, after you've just finished work? Do you have a prioritized list of tasks and you're just working down them? Is it whatever you feel like...? Sometimes a side project is like "What do I feel like working on", right? Because it's about fun anyways. How do you make these decisions?

**Perry Mitchell:** It's been the biggest learning process of this entire procedure really, just kind of figuring out what motivates me. This has been an amazing teacher in that regard, because until you undertake project anywhere near this size, you don't really realize what is a superkill joy for you and what actually kind of really gets you up in the morning... And the crypto thing kind of started it off, but you very quickly realize, "Oh, this isn't so fun. I don't really wanna come home and do this", so you work on something else.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's funny.

**Perry Mitchell:** And I think that Buttercup has been a lot of that, actually. We kind of worked around the edges to start with, around the things that we love, and then at some point you have to build the meat of it to kind of get it going. It's been so much like Sallar and I kind of bouncing things off each other, picking each other up... If we didn't have each other to get through this, without us motivating each other and kind of getting us psyched about what we're building, it would be so much more difficult... But I think it's about who you surround yourself with, and then it's also the feedback loop you give yourself online, as well.

When you're giving this to people and when you're talking about it online, you're setting yourself a realistic feedback loop for enjoyment; you're setting yourself realistic goals, not goals which are too far in the future, and kind of get the small things done, and then kind of take solace in the fact that "Hey, I've got this done. This is amazing." And doing that over and over and over again for days and days and days on end, until you actually have something that you want. It's just "make everything smaller" has been the key for us, and it worked, obviously, because we've gotten three large-scale applications out, and we would not have been able to do that if we set off day one wanting to build three large-scale applications. You have to start super-small and just keep building on the building blocks, and just keep focused, and try not to go off and start something new every day... That's been a huge battle for us.

**Adam Stacoviak:** Focus is key. We learned over the years just how important focus really is. It's pretty easy to be squirrel or shiny object-focused, I guess, which is sort of the anti-focus, but... Geez, being able to focus on one core thing for the day, or one or two primary things... I like to call them "What's my primary mission for today? What can I do today to make it successful?" and try to camp out there. Once I've gotten that done, it's like "Okay, now I can move on to more squirrel-based operations", where it's like "What's the most pressing or shiniest thing that I could do next, now that I've done my primary thing I had to do today to make today successful?"

**Perry Mitchell:** And it also comes down to building something that you want to use, something you want to do. So many people say "Okay, you should probably find a market for what you're actually building if you really want it to be successful", but I'm the complete opposite - forget the market, pick something that you want to do, and then find the market later. Obviously, not really the right way to go about things in terms of business sense, but you're not gonna get it done if you don't really enjoy it. You have to love what you're doing to actually get there... So kind of pick what you're interested in first, and eventually you'll come to the point where you actually build something that you want to actually use.

The day where we woke up and realized that "Hey, I'm actually using Buttercup as what I wanted it originally", probably a year later from when I actually set out doing it, was a woke moment for us. It's quite rewarding to get to that point already. And obviously, we've gone past that and we have bigger goals, but it still comes to the fact that every day I use the application which I started building, and I think that's such a rewarding experience, no matter how big or small that is.

I think that if you can pick something which you want to use and something that you want to do, it's gonna mean success in some level of measure.

**Adam Stacoviak:** \[01:12:15.18\] Let's tee things up for the audience that's listening, because I'm sure that there's at least 20,000 people psyched to hear this show, and hackers chomping at the bit to come and help if they can, so... You've got roadmaps, you've got goals, you've got your own focus so that you can focus yourself. Can you focus others? Maybe. I don't know, we'll see, but... How do you help on-ramp others to come in and help out? Is this a project that you're inviting others to come in and help, or is that primarily around security-related things? How can you invite the community to play a part, to ensure that Buttercup has a next step?

**Perry Mitchell:** Yeah, I think that at least everybody who is at all interested in tech, and stuff like that... I mean, you use computers every day, you probably have hundreds of accounts, and this is something which affects all of us - how easy this process is going to be, of staying secure... And it should be enjoyable, I think, because it's something you do so often that it should be something which you don't think about, or something that you look at and go "Yes, that's how it should be. That's really nice." We want Buttercup to be that. We can all benefit from this process, so yeah, we really appreciate people jumping in and giving us their opinions, and redesigning things and saying "Oh, you could basically remove 3-4 clicks from this whole process." We would love that.

There are so many things that we haven't thought of, and so many people which have had these really strong opinions over their entire time of using a password manager, which they bring to Buttercup, and it just blows our minds; it's just like "This is fantastic!" I think that Buttercup has a really low level where they can just jump in and give us their opinions and actually see them implemented quite quickly. There's probably not a huge amount of places where you can take these to actually have some real effect, but we're willing and waiting to get these great ideas and to move forward with them. I think that Buttercup is in the perfect position now to actually have all these things implemented and tidied up, and add all these cool features which are going to make it a pleasure to use.

**Adam Stacoviak:** I like too how you've got in your issues, at least for Buttercup core, where you've got Effort, Priority, Status and Type in terms of tags. And then obviously for the Effort you've got Low, Medium, High, and same thing for Priority - Low, Medium, High and Status being Available or Unavailable, or if it's Type, then Enhancement... We're only seeing Enhancement for Type, but that's interesting too, that you've made it a little easier to jump in there. A lot of these issues you and Sallar generated, or are they community-generated? What's the makeup of some of these issues and how do you drive people to the right issues and invite them in?

**Perry Mitchell:** Yeah, that's been quite a big learning process for us, as well. Core is probably the oldest repo in Buttercup, so it's probably got the most mature label set out of all of them... And I would say that core has been probably mostly our internal issues - I mean, with a few contributors externally, but I would say that the desktop is the complete opposite; the majority of the issues are from the community, which has been really good... Their opinions, their discussions, their ideas coming from them; very few are actually ours, which is really good.

So obviously, you can see a lot of people are using the desktop applications, saying "This is great, but..." and then making a couple of issues. We get a lot of PRs there. We have localization, working with tens of languages on the desktop, which we still need to integrate into the other ones, so obviously the second that we open up the localization, we have maybe like 5-10 PRs immediately for different languages... That was fantastic.

So yeah, we're trying to basically make it easy for people to find it and get into these, and we've tried a couple times marking like "These are easy to start issues, if you haven't looked at Buttercup before."

\[01:15:56.20\] We're on Spectrum, which is an amazing chat system which allows threaded discussions in a little bit of a faster manner. It's a little bit easier to use than GitHub, and easy to connect with, and the guys over at Spectrum have been giving us a pretty good rundown of how to use this system and kind of giving us a little publicity there... So we have several channels between Twitter, GitHub and Spectrum where we can actually help feed people into the right areas if they wanna help and share ideas...

**Adam Stacoviak:** We're coming close on the time, but I have one last question and a suggestion. We'll start with the question - the question is we haven't asked you about the name. Buttercup - what's Buttercup?

**Perry Mitchell:** In 1987 my favorite movie was released, called The Princess Bride...

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** Yesssss...

**Perry Mitchell:** Fantastic. I absolutely love the movie. Very, very special place in my heart. I watched it day in, day out, every day, for several years. Just a fantastic piece of film.

**Adam Stacoviak:** You're either a Pirate Roberts fan or a very romantic person... Which are you?

**Perry Mitchell:** No, probably the former... I just think it really spoke to me. Actually, funnily enough, I was actually a huge fan of Cary Elwes at that point... And Mandy Patinkin, obviously. He just really stole that part... And obviously, André the Giant... I mean, the whole cast was just incredible, and the movie was amazingly, and definitely a very warm and happy movie. And because I was so fond, the name kind of came from there. Buttercup was obviously the name of Robin Wright's character. That just kind of really spoke to me, and the name stuck; it was unique, it sticks on the mind. It was kind of used jokingly at the start, but at the same time it just stuck, so yeah, Sallar was very accepting of it, and it just took off. So it started there, and it's got a pretty funny beginning.

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** Great answer.

**Adam Stacoviak:** It's the most amazing move ever. How André scaled that wall I will still never know...

**Jerod Santo:** \[laughs\] Very easily...

**Adam Stacoviak:** Alright... So that's a good answer for the name then... So we'll close with a suggestion. You mentioned your distaste for marketing, at least in terms of choosing to code instead, or tackle a new focus or a new feature... One thing I would suggest is to create a list for those to join - or e-mail, or something like that - so they can say "Hey, I'm kind of interested in your future sync platform that you plan to have", because 1) it will help you with marketing it really easily, and then 2) once you do get to it, you've got a nice base of people to say "Hey, we're open for business. Come check us out." Because I'm ready, I wanna add myself to that list, so this is kind of self-serving, but you know, we're on a podcast, so we might as well make it for everybody... But I'd like to add myself to a list that says "Hey, when Buttercup has My Buttercup up and running fully for syncing and hosted, or maybe even future team services, that I can check it out", because that's the key feature that I personally need.

**Perry Mitchell:** Yeah, that's a fantastic idea, and I think that's definitely gonna be an important first step for us. We actually want to have a select group of users alpha-test the platform as well, so I think that that list would also play into that very well... So yeah, fantastic idea. I think that we'll definitely chase that one.

**Adam Stacoviak:** There you go. Well, Perry, thank you so much for your time today, man. It's been a pleasure talking through this with you. Clearly, you're passionate about it. We also share in your passion for the desire for more secure, more performant applications like this. Thank you so much for sharing your time, and thank you for doing what you do. Thanks for coming on the show.

**Perry Mitchell:** Thank you so much for having me. It's been a pleasure, really.
