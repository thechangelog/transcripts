**Jerod Santo:** So we're joined by Anna Pobletts, head of Passwordless 1Password. Thanks for coming on the show.

**Anna Pobletts:** Thanks, Jerod. Happy to be here.

**Jerod Santo:** Happy to have you. Excited to talk passkeys. This is something I've been reading a little bit about, and I'm excited to maybe implement it in some of what we do here around Changelog. Shout-out to listener Vladimir, who requested this show a long time ago. Hey, Vlad, we're finally getting around to it. Thanks for your patience. Passkeys... Where should we start, Adam? Just what are they, and why, or is there a cooler place?

**Adam Stacoviak:** I can't see -- where else would we start? Like, what are they, how do they work, why should we use them, why now?

**Jerod Santo:** All good questions.

**Anna Pobletts:** Yeah, those all sound great topics.

**Adam Stacoviak:** There you go.

**Jerod Santo:** Alright, Anna, launch into it.

**Anna Pobletts:** Yeah, so let's start at a high level. What is a passkey? From my perspective, a passkey is a new way to sign in to apps and websites without a password. There's a couple of reasons why that's a good thing. There's the security side of things, and then there's the user experience side of things. So we'll start with the security. The first thing there is that passkeys are completely unfishable, and they're resistant to any type of credential-related attacks. So all those things you hear about, of companies getting breached, and there's giant password leaks, and people are reusing passwords in all these different places - none of those attacks are relevant in a passkey world. So that's a huge win from a security perspective.

Then there's also the user experience side, where they're really easy to use for users. It really looks and feels just unlocking your device using touch ID, face ID, Windows Hello; whatever your device uses, that's what that experience looks like. And so I think this is the first time we've ever had both of those things happen at the same time, where there's a solution to log into websites that's better than passwords, that's both more secure, and easier to use. Usually, things are kind of only one or the other. You might have, "Oh, we can add MFA to a website, and that's gonna make it more secure." That's great, but that's extra steps; you have to get your app out of your phone, or check an email... Like, that's not actually making anything easier, and so people aren't really going to use it. No one really signs up for MFA if it's optional. And so this is the first time you actually get both of those things.

**Jerod Santo:** Yeah. So I love this, because I'm actually the head of passwordless here at Changelog... \[laughter\] And we've had passwordless for a very long time, but doing it the dorky way, which is just send them an email, generate a one-time string, send them an email... And I did that because I hated the opportunity for failure with credentials. I saw the email flow as your password recovery, reset your password; I was basically already doing it, so we already have these flows... Let's just send them an email, click on that, and then remember them for as long as possible. Our audience is smart people; our readers, they can sign out, and they won't be surprised if they're signed in for a very long time. That is cool, but it's dorky, because emails just don't come very fast every single time, and it's outside of our control. Like, we can pick the best email delivery offering and all these things, but it's sometimes you just get that one that just bounces around from mail server to mail server, and you're sitting there for 5, 10, 30 minutes, "Hey, where's my sign in email?" So it's not perfect.

**Anna Pobletts:** It's definitely not... But honestly, y'all are ahead of your time. A lot of people haven't really been even considering any passwordless options, whether it's magic links, or OTP codes, or anything that. And that's still a big win over a password from a security perspective. It's not a user-generated password that they're thinking of, it's really short lived... So that is really great. Like, definitely better from a security experience.

**Jerod Santo:** Yeah, nothing to lose.

**Anna Pobletts:** \[00:08:04.06\] Exactly. Definitely a little bit of an improvement, but I hate having to change context and go check my email to log into a site. Or if I'm on my phone, or my Apple TV, or something that, and I have to go find a different device... Like, it's just kind of a pain. And so I think passkeys are ultimately solving that UX problem. No one's going to adopt any of this stuff if it's not easy to use.

**Adam Stacoviak:** It's if you put the -- YouTube, for example, on an Apple TV. If you authenticate with YouTube, you have to open up your phone, or a device that has the YouTube app on it that is not your Apple TV. And that's not bad necessarily, because you probably authenticated to that. It's all about how many hurdles/hoops can I make you jump through to keep you secure. And I think we've kind of bandaided, if that's a word, over time, how to do this... And even OTPs. Like, every time I've got to pull out the Verify app from Unified - which I love. It's a great app, it's secure, I use it for my Unified network, and I that app over others... But every time I have to do it, I'm "Gosh, where's my phone? Let me get that thing out..." And it's biometric, so it's my face opening it up, because I use an iPhone... And that makes me feel secure. But it's -- well, that's what you said, context switching. It's more hoops and more hurdles to jump through, and over.

**Anna Pobletts:** Yeah. Jerod, you said something interesting when you were describing your Magic Link implementation, about how the success rate of sign in and things that, of just like, are people actually getting emails...? So Google announced passkeys on their services a couple of weeks ago. So on your Gmail account, now you can actually add a passkey to sign in. And in their blog announcement, they talked about some really interesting stats, and one of them that I hadn't really thought about before was success on first attempt. So how often does someone succeed to log in the first time they try? And with passwords, that number is actually pretty low. I think it was twice as high when you switched to passkeys, because the first time you're "Okay, crap, I think my password is "password". Or its "Password+Google", or it's "password123".

\[00:10:06.05\]

*My username is password, and my password is password.*

*Your username is password?*

*It was just easier...*

Or "Which of my passwords did I use?" And so actually your success rate on your first attempt, or the number of times you have to go do a Forgot Password is actually really high. And so kind of lowering that threshold as well was really cool.

**Jerod Santo:** Alright. So security win, obviously. User experience win; not so obviously, but it turns out it is. What are passkeys? How do they work? I hear it's PKI, Public Key Cryptography stuff... Tell us the details.

**Anna Pobletts:** Yeah. So behind the scenes, we're using public key cryptography; protocols that have been around, algorithms that have been around for decades, even very well-established protocols, just being used in a new way. So what happens is when you go to sign into a website, or sign up for a website for the first time, your device or wherever you're storing your passkeys - I'm sure we'll talk about this later, but you can also store passkeys in 1Password... Wherever you're storing those passkeys, you will create a public/private key pair, and you'll store that private key in your provider on your device, and it's never going to leave. So it's never sent to the website. Instead, you'll send this public key to the website, and that public key can then be used to verify any future logins.

So on a future login, you say "I'm Anna. I want to log into this website." The website will send you a challenge, and you will sign that challenge with a private key. You'll send that back to the website, and the website can verify it with the public key, and say "You're all good, you're authenticated."

Now, when I say "you", like, the user actually isn't doing anything here. This is all happening behind the scenes, between your browser and the website and your provider, your device, or your 1Password account, something that. So it's all really transparent to the user. All you're doing is essentially proving to the device that you own that device by doing your touch ID, your face ID. And then that's granting your private key access to sign that challenge. And so it looks super-transparent. It looks you're just doing Touch ID, but behind the scenes there's all this cool cryptography going on.

**Adam Stacoviak:** Can I pause there for one second? This sounds a lot SSH keys.

**Jerod Santo:** \[00:12:19.25\] Doesn't it?

**Adam Stacoviak:** I mean, it sounds you copy and pasted SSH keys in a way that everyone else can use, basically. Is that kind of what this is?

**Anna Pobletts:** Kind of... I said, it's really familiar cryptographic concepts. So we didn't invent a whole bunch of new crypto here. It's really just how we're using them, and how we're using them in a user-friendly context. So there's always a user involved, you verify your presence by doing that touch ID, and then you can authenticate. And so it's a very similar model, but there's actually an aspect of you being there at the device, at the moment of authentication that's important for application and website login.

**Jerod Santo:** So it's been a long time since I was in college, but I actually learned this in college. Tell me if it's true still today... That there's three ways to authenticate somebody. They can have something they know - so there's your password. Something they are, which is your fingerprint, your eye scan; biometrics. And then something you have. And so I have a passkey. So this is the "something you have" style authentication. And as Adam pointed out, nerds have kind of been doing this; I have an SSH private key and a public key for a long time. And it's better. If you signed into a machine without password, it's always been better. Of course, then there's the managing of that thing over time, and key rotation, and stuff... But we've been using something we have for a while. My guess is the ubiquity of mobile devices... Like, why is now the time that passkeys are suddenly something we can do, and not have to do something you know?

**Anna Pobletts:** Yeah, so it's been a long time coming... Passwords have, I think, been around since the '60s. What other technology do you use that's actually from that time period? Probably not much. But it's taken a long time. There's been a lot of attempts to replace it, a lot of proprietary biometrics, things along those lines, that are more the "Who you are" or "Something you have", but they always fail, because you have to have special hardware. You have to buy a thing, and carry it with you. Even security keys - they're great in an enterprise environment, but kind of challenging in more of a consumer, everyday user type of experience, because people just don't want to have to buy and carry something else around with them all the time.

And so about maybe three years ago, 2019-2020, Google, Microsoft, Apple all kind of came to this agreement that we're going to support these protocols and these APIs in our browsers and in our platforms, and we're going to give browsers and applications access to Face ID, Touch ID, other biometrics that are built into devices. And so that basically turned the thing everyone has in their pocket, a mobile device, into the equivalent of a security key, and made it possible to actually do this in a way that would scale, and reasonably, for consumer applications.

**Jerod Santo:** So the hard part about something you know is you might forget it. The hard part about something you are - this is the hardest part - is you can't change it. your fingerprint, right? Once that's out, it's hard to revoke your fingerprint. The hard thing about something you have is when you don't have it anymore... And that's been my biggest struggle with specifically the authenticator devices, right? ...which is the one-time passwords thing. You get that whole deal set up, and you have it on your phone. And then you upgrade your phone, or you lose your phone, or something, and you're just completely out of it. You have to go through an arduous reset process with a lot of these organizations, even so far as scanning your photo ID in order for them to be "This is actually you." Of course, they don't want some imposter to fraudulently claim that they're you. Is that a big problem upcoming with passkeys, where if it's something you have on your device and you don't have your device, you're pretty much - you're out of luck.

**Anna Pobletts:** \[00:16:04.25\] Yeah, it is by far the biggest technical problem with passkeys, I think, is how we manage account recovery. So the first time anyone heard about the term passkey was about a year ago. It was WWDC last year. And before that, this protocol still existed, it was called WebAuthn, and some websites were still implementing this... But it was every single passkey was tied to the TPM of a device, and there was no way to get it off. So if you lost that device, it was just gone. You could never get that passkey back; you had to go through the whole whatever that website deemed was a recovery process, and there wasn't really anything you could do about it.

**Jerod Santo:** Right.

**Anna Pobletts:** So the big announcement of passkeys is essentially saying "We're going to take those WebAuthn credentials that have been around for years, and we're now going to sync them. We're going to sync them across your platform accounts, across secure end-to-end encrypted channels." So now you can sync passkey through your iCloud account, or your Google account, or your 1Password account. And so yeah, I have an Android phone, I might lose my phone or get a new phone, but as long as I can log into my Google account, those passkeys will automatically sync. They'll also be shared across any devices that I have in the same ecosystem, things that to help you kind of have passkeys more accessible in different places, to help with the account recovery problem...

You know, it's still not perfect by any means, but it really was almost unusable before that. It was so much work to manage your different devices that had passkeys. With passkeys as they are now, where they're synced between devices, it's at least a little bit more accessible to people, and we can start to really focus on the more narrow account recovery problem.

**Adam Stacoviak:** This kind of somewhat reminds me of people who focus on backups, but not recovery. Like, you think, "Oh, I've gonna back this up", and you've got a great backup protocol. It's amazing, "Okay, let's recover that data." "Oh, we didn't think about that." So why was the recovery process an afterthought with WebAuthn, and now passkeys? Why didn't it go through the paces of actually thinking this through?

**Anna Pobletts:** I think they always thought about it, and we always knew it was going to be a problem... But the goal of WebAuthn and passkeys was phishing-resistant authentication. And so a huge part of that is tying a credential to a device, and also cryptographically tying a device to a domain. And so my facebook.com credential - you can't spoof facebook.com with using a zero instead of an o. That credential will simply not work; it will never be sent to that domain.

So all of these unphishable, really high-security properties are really important. That was the core of WebAuthn and of passkeys. But those are also the things that make it really hard to do account recovery. With a password you have one user, one password on any device. With passkeys or WebAuthn, you have one user and n number of devices or passkeys, depending on their laptop, and their iPad, and their phone, and all the different devices they might use, you have to kind of have a different passkey. So it just sort of comes with the protocol, but it was all kept with security in mind.

**Adam Stacoviak:** Is passkeys a "doing business as" name, where WebAuthn truly is the LLC or Inc, what you're doing business as passkeys?

**Jerod Santo:** WebAuthn DBA passkeys?

**Adam Stacoviak:** Yeah, like, how does this work? Is it now passkeys, or is it both?

**Anna Pobletts:** So WebAuthn is the specification from W3C. If you \[unintelligible 00:19:33.07\] a really long read, feel free to go check it out. Passkeys is the user-friendly term. Like, if I were to just go to my mom and talk about WebAuthn credentials, that's not a very approachable term. And so part of renaming them passkeys instead of just sinkable WebAuthn credentials was to make it accessible to people, not make them scared of it, be able to put that on my target.com website and say passkeys and not have people kind of just be really confused.

**Adam Stacoviak:** WebAuthnn is so much cooler -- I'm just kidding, it's not cool.

**Anna Pobletts:** Exactly.

**Adam Stacoviak:** So who owns passkeys? Is it a branded term? Did Apple come up with this? Is there a copyright to this name, or trademark? Who owns passkeys?

**Anna Pobletts:** \[00:20:20.04\] I'm not actually sure.

**Jerod Santo:** She's not a lawyer.

**Anna Pobletts:** Yeah... \[laughs\] I don't wanna speak on that subject. I'm gonna get in trouble. I do know there's a group called the FIDO Alliance, which is an industry organization that is working to make passwordless authentication a reality. And they've been around for - I think this year was their 10th anniversary, actually. So all the major platforms are members. 1Password and other password managers are members; lots of websites who are interested in this... And we've all just been working to make this WebAuthnn technology real. And so passkey is a very natural evolution of that. We've put out a lot of guidelines about UX, and how to add this to your website, and things that.

So I don't know that they own any sort of trademark or IP about that, but they are doing a lot of work in that space, and trying to help people adopt it in a really consistent way. Because if you look at websites that have passkeys now, people call it different things, the user flows are all different... Everyone's kind of doing different things. So we're trying to make it a little more consistent, so that when you see passkeys in one site, and then you see it again on another site, you know it's the same thing. You can have confidence that this is a secure way to log in.

**Jerod Santo:** Well, it's a great name. I think it's awesome that these different organizations are coming together and rallying around one thing. This is kind of the utopic view of open specs, and everybody just comes to the table with their good ideas... I mean, I'm sure there's probably things going on around the fringes, but it sounds it's coming together really well. You have a spec, you have different -- I mean, the confluence of events of the ubiquity of mobile devices as kind of a baseline passkey holder... You have the support of the people who put the software on those devices, namely Google and Apple in the case of iOS and Android, and then you have folks yourselves, who are putting out software, how-to's, different things so that people can go ahead and build this flow into their website. I mean, I'm just super-excited, because I'm so done with passwords in my life, and everybody else's life... I would love to see a default passkey-based world out there. How do we get there? What does it look I guess maybe in the small, for a single website owner to implement something this? And then maybe what does the trend look maybe as a secondary follow-up?

**Anna Pobletts:** Yeah, that's a really good question. So it's definitely a little more difficult to implement into a website than passwords. I mentioned before, this sort of password model is one user, one password, works everywhere. With having to manage passkeys on different devices, it gets a little bit trickier, because every user can have a whole list of credentials. And they might be able to sign in with some of them on some devices, and not on other devices. So it's a little bit trickier. There are your web APIs libraries, all that kind of stuff to help...

This is a problem I've personally been thinking about for a while now, and at 1Password we have a product called Passage , that just launched a couple weeks ago, that's designed to help people do this. We're trying to be Twilio or Stripe for passkeys, and make it easy with SDKs and UI elements, things that, to let developers just implement passkeys in their website in a couple days, and move on. You should be able to get this without having to spend all your time, or understand all of the inner workings of passkeys. People shouldn't have to worry about that, they should just be able to kind of use it out of the box and get all the benefits.

**Break**: \[00:23:49.02\]

**Jerod Santo:** Is this 1Password's first move into developer services? Because you've always been a business-to-consumer, like "Buy our software" or "Subscribe to our software." But now this is like "We are going to be a Twilio, or we would love to be a Twilio for passkeys." That seems like a change in direction, or maybe just another direction.

**Anna Pobletts:** Yeah, so we do have some developer tools, actually. If you've never used them, you should check it out. We have a CLI tool for secrets management, and shell plugins, and all sorts of really cool developer tools. But you are right, it's a little bit of a different approach as far as where -- a different business line; like, where we fit in the organization.

It's interesting because 1Password's whole mission and goal has always been just "Make sign in easier for people." We're just trying to make it easier for people to log in on the internet. And so the password manager is doing that from the user's perspective. They're giving users a tool to sign in easier, to manage all their credentials. And then Passage is kind of taking it from the other angle, of "We want to make people more secure by helping businesses give their users the best possible authentication." And you can't really do one without the other. So if websites don't actually implement passkeys, users can't use them. And if users are intimidated by the technology, or they don't have easy ways to store their passkeys, then they're never gonna use them even if websites adopt them.

So the way we were thinking about it is both Passage and the password manager are working towards the same goal of just eliminating passwords completely as much as possible, and then also helping them transition. Unfortunately, passwords are probably not going away anytime soon; it's gonna be a little while. So 1Password is in a unique position to kind of help people with all the different credentials - you have passwords, you have OTP codes, you have passkeys... And just kind of help people manage that whole process.

**Adam Stacoviak:** I store my SSH keys in 1Password. I'm one of those people who uses the 1Password CLI. I believe it's called OP, or something like that. I don't use it often, but I have used it... Which I love, because I biometrically SSH into servers on the network, or on the internet, via having my stuff in there... Which I love. Biometrically getting into something to me is the way to go, it's the future, because you can't -- I suppose if you cut my finger off, then maybe you could be me. But that's really bad, and something bad's happened to me, so I've got different problems...

**Jerod Santo:** Yeah, if someone cuts your finger off, you've got bigger problems, right?

**Adam Stacoviak:** Yeah. I mean, they could steal my eyes, like they've done in different Sci-Fi movies, to get into --

**Jerod Santo:** That network-attached storage is not going to be your problem at that point, right?

**Adam Stacoviak:** No. We've got different issues.

**Anna Pobletts:** Yeah, "Not my SSH keys..."

**Adam Stacoviak:** That's my best effort though to be me, right? Like Jerod said before, I can't change my fingerprints, last time I checked... Maybe I could burn them off and put different ones on, who knows... But that's gonna be me forever. And my face is my face. As I age, it may change, but I think face ID is smart enough to go with that aging process as a human being.

**Anna Pobletts:** Totally. I do actually want to clarify one point about this, because I think it's important from maybe a privacy perspective. When we're talking about my fingerprint, or my face is being used to authenticate to these sites - that's true, but those are just being used to authenticate locally on your device. These random websites that you're signing into do not have your fingerprint data, or your face data, or anything that. So it's less about what you are, like your biometric, and more about what you have, your device. You're really just proving that you own that device through biometrics. And so it looks really easy, but I think it's an important distinction there, because I could -- totally reasonably people would get caught up in the idea that my biometrics are just being sent across the Internet, and that's not the case.

**Jerod Santo:** Right. It's like you have a key in a box, and the key's gonna get you into the room, but the box is locked. And to open the box you've got to put your fingerprint on there. That opens the box, gets the key out, and puts it in the door.

**Anna Pobletts:** Yup, exactly.

**Jerod Santo:** I've been playing a lot of Tears of the Kingdom, so... Sorry for bringing video games into this...

**Adam Stacoviak:** Well, we like that. It's part of it.

**Jerod Santo:** Yeah. You might have to ascend up through the \[unintelligible 00:29:57.24\] Keep going.

**Adam Stacoviak:** \[00:30:01.12\] Yeah. Well, the point is that whatever the process is - WebAuthn, passkeys, the DBA for this cool new biz... It's essentially I have to authenticate to my device first, and the device says, "Okay, this is truly Adam, so you can now passkey away." And that's what I love. Even now, being SSH-ing into machines with -- I know I'm not biometrically sending my stuff over there to the machine, but it's authenticating me to my device. "Yes, this is Adam. Trust this process. There you go." That's the future, to prove I'm me in the best way possible, and that's how you do it.

**Anna Pobletts:** Totally. And you don't even have to think about it. I think we talk about this idea of password hygiene a lot, and users having to think up passwords, and not reuse them, and all that kind of stuff... Like, people aren't trying to be insecure. It's actually hard. I have well over 200 passwords I'm keeping track of... That's really hard. And so the idea of "I'm just using my finger and I don't have to think about what I'm doing, but I'm just automatically secure, and it's built-in" is just so nice. To not have to put that burden on people.

**Jerod Santo:** Right. Can we just rant real quick about password requirements, too? Like, it must be between 8 and 20 characters, it must have a special character, it must have a number, and a capital... It's like "Just leave me alone." The only one of those that's legit is it has to be longer than x. And x should be like eight. Four to eight. Don't put a maximum limit on my password. Ridiculous. Don't require -- anyways...

**Anna Pobletts:** And for a long time they used to make you rotate them every three months... It's like, "I can't think of new ones that often..."

**Jerod Santo:** Right. And then some very smart people would keep a list of your most recently used ones, and they're just like "You can't just go back and forth between two." Like, "No, you used that one three times ago." Like, "Argh, I hate you!"

**Anna Pobletts:** That means they're just storing all of your old passwords.

**Jerod Santo:** I'm just trying to check my email, you know...? Anyways...

**Adam Stacoviak:** "Let me in...!" I was gonna mention Steve Krug's book, because this is the ultimate user experience. If you've ever heard of this book, stop me. It is called literally "Don't make me think." And it was about web, and web development in its original edition... I think it's been revised, a couple times at least. But the basic premise is there. If you've got passwords out there, you're making people who don't, like you said, want to be insecure, think about this process. And before password managers like 1Password and others, you literally had to keep a spreadsheet that was probably insecure, or a file with permissions on your local machine... I don't know how would you even manage these things. And then generate them, and then be more than 16, and have these special characters... Like, that's making me think as a user.

Now we're at a place with passkeys where you have to think less. There's still some thought in there, I'm sure, but it's minimized to almost the littlest possible necessary to think about being secure. And I guess it's sort of built into your devices now. So if my iPhone supports it, Apple supports it, then I don't have to think anymore about passwords.

**Anna Pobletts:** Exactly. You're just making the easy thing, the secure thing, no one has to think about it... It just works. That's all anyone really wants. They just want to go buy something from Target, or go read an article on New York Times. They don't want to think about how they have to authenticate.

**Adam Stacoviak:** How do we educate people - and maybe that's not the best way to describe it. So let me give you an example. I use Home Depot, it's my favorite place to go. I do not like Lowe's. Home Depot, if you want to sponsor us, I would gladly accept that.

**Jerod Santo:** I'm a Lowe's guy.

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** Just kidding... \[laughs\]

**Adam Stacoviak:** The great divide... The great divide...

**Jerod Santo:** Lowe's, if you'd like to sponsor us, we'd love it.

**Adam Stacoviak:** We'll deny that request, and replace you with Home Depot right away...

**Anna Pobletts:** If it helps, I'm Team Home Depot.

**Jerod Santo:** Oh, no...!

**Adam Stacoviak:** Okay, great.

**Anna Pobletts:** \[unintelligible 00:33:40.14\]

**Adam Stacoviak:** Two to one here. That does not help, Anna. Thanks for nothing.

**Adam Stacoviak:** So I obviously keep my credentials to homedepot.com and 1Password, because I am a tried and trued, many, many, more than a decade now, 1Password user. And so that's great. But every time I go there, I have to use this scanning thing to prove that I was in the military, to get this military discount they offer. And I have to do that every time I make a purchase. So I have to essentially authenticate with their website every time I'm a consumer, whether it's on the web, which is obvious, or literally in-person. I have to scan this code that's only the web, that's generated. It's like a QR code, essentially.

\[00:34:22.26\] So I have to authenticate all the time... And I have been resisting this other way they've said before, because they did not describe it as passkeys, they did not describe it as no password... They said "There's another way that you can log in faster", and I thought it was some sort of gimmick. So what I'm getting at is how do we describe to users in a world that's password-filled, to a passwordlesss world? How do we describe this? Because I spent a couple months resisting this passkeys world with Home Depot offering it to me. And now that I know about passkeys - and here I am, host of the Changelog forever, I should know these things. I do not know much about passkeys, and I resisted it. And the other day, I was like "Jerod, I just created a passkey today." It was three days ago. "And it was with Home Depot!"

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** But how they explained it was not normal, or I didn't read it, or they made me think... So how do we live in this world where we go from passwords being the norm, to passkeys, and how they work? How do you -- it's a marketing challenge, right? It's an uphill battle.

**Anna Pobletts:** It really is. It's a really hard problem. People are used to passwords. And so like I said, you're gonna just trying to go buy something from Home Depot, they're just trying to read an article. I'm not sure that that's the right time to be saying, "Here's some new fancy technology", right when they're in the middle of trying to do something.

We did some UX research as part of the FIDO Alliance, and that was actually one of the findings, was there are times to actually not tell people about passkeys, because they're kind of busy, and they're really focused on their goal. But what we've found is that users don't necessarily respond to the security benefits of passkeys. It's more about the user experience and the speed of the signing in, and not having to use a password, like explicitly saying things like "Sign in without a password" is a pretty appealing thing to people to at least go check it out.

So I think those things are moving in the right direction. We're doing tons of research on the marketing there. I also think it's just going to take some time. Google just implemented passkeys for Gmail and for personal accounts, and that's billions of people around the world who now might start to see a passkey experience. And it'll still take some time, but I think once people see it the first time - you've done it now, one time; aren't you just like "Wow, I want this everywhere This is amazing"?

**Adam Stacoviak:** Can't wait till I can do it again, yes.

**Anna Pobletts:** Literally that. And so I think it's just getting people to that first experience, whether that's through the really big websites and players like Google, or giving people a really consistent experience. So the Home Depot login experience with passkeys, and the terms that they use are kind of different than Google, or BestBuy, or eBay, or any of these big sites that have passed keys now. Some of them don't even use the term passkey... So I think it's just kind of confusing. Like, you wouldn't necessarily know that those are all the same thing until you actually go through the flow and start to set it up. And so we've been talking a lot about "How do we make it more consistent? How do we give people parameters and assistance in the UX of this?", to make sure users are just like "Oh, yes, passkeys. I've heard about that. Let me go set that up everywhere I can."

**Jerod Santo:** Yeah. Well, shout-out to Home Depot for having the software at least rolled out... And then we could just tell them - if you're listening, Home Depot, just use the word "passkeys" on there.

**Adam Stacoviak:** They may have, Jerod. They may have.

**Jerod Santo:** Oh. So it's on you.

**Adam Stacoviak:** It seemed some sort of benefit from Home Depot directly... And you know, sometimes brands have other motives for making me change my common workflow and pattern. I just was resistant, I'm like "Whatever that is, I know how to log in with 1Password to your site. Leave me alone. I don't understand why you're asking me to do it." And it was a bother, because I'm trying to transact. I'm not trying to deepen my relationship, or become more secure, or become educated about this new-fangled thing. Get off my lawn, let me just do my thing here. So it was not the right time.

**Anna Pobletts:** \[00:38:15.22\] Yeah, I think that's where it can really come from people like Google, who have such a trusted place in people's lives; it's your email that they're protecting, it's not just a shopping site. And so there's a different level of maybe willingness to add MFA to that account, that will make you at least willing to read more about passkeys.

Like I said before, if you're going through a checkout flow, you're in the middle of trying to do something else, it's probably not the right time to tell you about passkeys. When you're already doing account-related activities. Like if you had to reset your password, that's a great time to offer someone to add a passkey, because you've just had to go through the pain of resetting your password. Letting people know in other ways, and not blocking their flow.

One of the big things we've seen is -- like, I expect eCommerce to be an industry that adopts this type of technology pretty quickly. We've seen people like Home Depot, and BestBuy, and eBay adopt passkeys pretty early. And there's really big benefits for those types of companies, because if you can get more people to sign in and convert, and they're not running into issues trying to check out, that's a huge win for your business. But what we've found is that if you do passkeys, if you implement passkeys wrong, it actually hurts your conversions. If you just put a button on your website with a passkey icon on it, that's not going to work. People aren't just going to click it, it's not really going to work. You're not sure what to expect. And so you really have to be smart about how you introduce the technology to people to give them conditional flows at certain points; only show them this button if they actually could log in with a passkey. Don't just always have this button here. And it's really small things that, that actually go a long way in making sure your implementation goes well. And that's a lot of what we spend our time thinking about at Passage , is "How can we worry about all that stuff for you, and make sure we're giving you the best experience?"

**Jerod Santo:** So how does Passage determine that, that this person can have a passkey? How are you doing it?

**Anna Pobletts:** Yeah, there's a lot of things involved in that, actually.

**Adam Stacoviak:** If else, then...

**Anna Pobletts:** One big if else statement... \[laughter\] Yeah, so every platform does passkeys a little bit different. The APIs are fairly consistent, but the way in which -- like, the support levels are different. Safari requires there to be a user gesture before you can do a passkey prompt... There's a lot of sort of differences between different platforms and different browsers, things like that. So that's a big part of what we ,do is manage, "Can I even use a passkey on this device?" And then we'll also keep track for users, what are their passkeys, and what platforms are they on, and where am I right now? And should I be able to log in on that? And so it's a lot of just conditional checking, and trying really hard not to let users see errors. We want to really minimize the times that a user runs into an error, because that's just going to scare them away from passkeys.

**Jerod Santo:** Right. How does it work when somebody signs up, but then switches devices? So let's say I come to example.com, which is powered by Passage, and I say "I'd like to sign up. I'm Jerod Santo. Here's my passkey", click a button, I sign up, it's all well and good. And then I come to it on my iPad later that same day, and I say I'm Jerod Santo, I'm on a new device. How do you know I'm me?

**Anna Pobletts:** Yeah, good question. So there's a few sort of levels to that. The first one depends on where your passkey is stored. So if it was on a MacBook, and your iCloud account is used on both that iPad --

**Jerod Santo:** Okay, so iCloud would sync it.

**Anna Pobletts:** Yeah, exactly. The iCloud will sync it, and it'll just be there.

**Jerod Santo:** Okay.

**Anna Pobletts:** The same is true for 1Password. So even if you store that passkey on a MacBook, in 1Password, and then you go to your Android phone, which also has the 1Password app, you would still have access to your passkey there. And so a big part of this synced passkey initiative is exactly that, to make passkeys available on all the different platforms. In the event that that's not the case, then Passage, or the website, whoever's doing it, will have a backup or a recovery type of option to let you either use a passkey on another device, or to add a passkey to that device... Usually through an email Magic Link, or something along those lines.

**Jerod Santo:** \[00:42:26.29\] I see. So on sign up, you've probably captured my email, and then you can say, "Okay, we don't know who you are. You're on a different device and you're not synced", or something this. I'm sure you'll be that kind in your copy... "Who are you, and what are you doing here?"

And then you'll say, "Okay, well, you don't have a passkey. Would you to generate one using your email address?" or something that, and then you'd go through kind of a Magic Link flow that would then generate a new passkey on my new device, and add it to my list of passkeys for that website.

**Anna Pobletts:** Exactly, if you want to. There's this flow - I don't know if y'all seen it, if you've used passkeys in this way yet, but if you create a passkey on one device and go to another device, sometimes it'll pop up with a QR code that you scan on your phone that has your passkey, and then it will sync it over Bluetooth, kind of...

**Jerod Santo:** Oh, wow.

**Anna Pobletts:** It's called a hybrid flow. It's sort of a new thing that we're experimenting with for cross-platform passkeys. And it's kind of confusing, but it does exist. And the idea is your iPhone has your passkey, and you can just kind of carry that around in your pocket and use that passkey on public computers, or shared computers, or places you don't want to store a passkey.

**Jerod Santo:** I see.

**Anna Pobletts:** And so there's a lot of these different types and formats of passkeys, but it's really hard to kind of keep track of all those different options... And so that's kind of what Passage does.

**Jerod Santo:** So is your phone then in that case - I know we're getting into the weeds on a very specific thing, but that's what we do here...

**Adam Stacoviak:** Necessary weeds. Necessary weeds.

**Jerod Santo:** Is your phone that scans the QR code then - is it passing the challenge response over that? Or does it actually -- it's not taking the private key and giving it to this public computer, right? Like, it's doing the challenge on the phone and passing the response maybe...

**Anna Pobletts:** Right. It's getting the challenge from the computer that you're trying to log into, and then it'll sign it on your iPhone, or whatever, and then pass it back.

**Adam Stacoviak:** That's not much different than OTP really, in that case... Because it does require the other thing...

**Jerod Santo:** I terms of user experience?

**Adam Stacoviak:** Well, yeah... I mean, it's really a strange world. I'm gonna go back to Home Depot, because I have to; this is my only experience with passkeys. I have authenticated, because I'm mobile, in the store. I did it on my phone. And then I come back to my Mac and - I did this the other day, and now I have two passkeys, one per device, to Home Depot. And then now we're here on this call and I go back to just -- I logged out of Home Depot... What's the flow? So let's just use them as a potentially wise implementation poster child for this. So I plug in my email address, because they do require something to say "Who is this person?" That's my email address. "This is Adam." I click Continue, and then the native Safari - I'm using Safari as a browser - comes up and it says... Now it's got an issue. Just now I'm trying to do this again. Gosh, this is failing. Live demos fail!

**Jerod Santo:** Well, at least it's not our software.

**Adam Stacoviak:** Yeah, right? Well, it came up and it says, "Do you want to sign it with this passkey, or click this blue link" that says "There's other sign in options." And one of them was a scan, like you had just said, Anna, where you go on a different device and do that passage back and forth.

**Jerod Santo:** These guys are on top of it. They've got the hybrid flow already?

**Adam Stacoviak:** Yeah, they seem to... And then this other one - let me see if I can get this back up. Oh, now they're making me do it a different way. Now they have defaulted -- since I didn't do it the way they wanted me to, with a passkey, now they're making me verify the code via email again, which is okay, I guess, because I can still get in... My concern was if passkeys fail, am I locked out? Do I now have to only passkey on this device? Apparently, no. But long story short, there was another way to go in, it was scan a QR code... And I think the other one was -- I don't even know what it was. It was like three different options. Do you know what that third option might be?

**Jerod Santo:** \[00:46:08.03\] Mother's maiden name? Your first pet?

**Anna Pobletts:** Yeah, all your security questions...

**Adam Stacoviak:** Right. Mom's maiden name, etc.

**Anna Pobletts:** Yeah... I definitely think most websites - and definitely what I'm seeing is most websites are not implementing passkeys, full stop. There's always some sort of backup. So if you're using Passage, that backup is usually still passwordless. It's magic links or login codes, typically. For people -- just some people don't have devices that support passkeys, so we got to give them an option. For a lot of websites, like Home Depot, that have huge, large user bases, and are just like "I just want to test it out with a small subset", they'll keep their passwords, and then they'll just sort of add this as an option... And so you can always fall back to your password, or to an OTP code, or whatever, all these different options that they have to log in; it looks like they have quite a few. But I'm really seeing it happen as an add-on. You can opt into this feature, but it's not necessarily the default, or even something that they're really heavily forcing on people. It's like "Let's get it out there, let's give people who want it the opportunity to try it out, and then we'll kind of expand and migrate it over time."

**Break**: \[00:47:16.28\]

**Jerod Santo:** I just had an idea - only passkey-based sign up as a means of spam prevention. Because I bet the spammers are not on to this yet. They probably don't have the flows in their bots that will do -- because they'll click on a signup links; confirmation emails... They're that sophisticated now. They will get through your Captcha, then they will click on their confirmation email, and then they will spam your website. But I bet they don't have passkey flows all figured out yet, because it's just too new. So if you just require passkeys - I'm just thinking about us in particular; I wouldn't do this if I was Home Depot... Like, then you've got a real person, with a real passkey, and you don't have to deal with spammers as much, Adam. What do you think? Require it.

**Adam Stacoviak:** Um, yeah, I guess. If you're a sophisticated user, you can do that, sure. Because if you want to go the route of only passkeys, then yeah.

**Jerod Santo:** Well, I would only do that to stop spammers. I wouldn't do that otherwise, because I think it's too heavy-handed otherwise. I mean, most people out there.

Let's talk about transitions. I mean, we're in a password world... I do think as users, we're getting more used to passwordlesss because of the advancements... For instance, Apple Pay, Samsung Pay... We're getting used to the idea of just Face ID it, just tap it here, put your thumb here... And so I think we'll be just as a population ready to adopt these things. But we have to get there from here, and a lot of us have websites with hundreds, thousands, tens of thousands, hundreds of thousands, millions of users that have passwords that we're managing... What do you suggest for us in terms of - do we just add this as an option? Do we push it real hard? What do we do?

**Anna Pobletts:** Yeah, so from a business or developer perspective, I can kind of see both sides. I personally think it's kind of worth going fully passwordlesss, if you can, and still having those fallbacks of magic links or OTP codes, which are still a little bit better than passwords, even if they're not great. They're familiar to users enough, I think. But I also think it's important to give people the option to just add on to whatever they have right now. I think that's faster, it's easier, and if we want to incentivize developers and businesses to implement passkeys, we have to make it really easy. We can't make them lift and shift their entire authentication infrastructure. I just don't think that's reasonable. And so I think it'll be a lot of sort of like Home Depot has, where you have a password option. And maybe you even always register with a password, and then you can just add a passkey on top of that as a faster sign in. I think still getting people used to that user experience is what's going to lead the charge.

On the Passage front we kind of support both of those options. We have a product called Flex, that is basically that; it's like, we'll do the passkey management for you, but you still handle all your user management, your password management. Whatever other authentication you want to do, we'll just add it on top. And so I think it's a lot easier for websites Home Depot to go do than it is to maybe make that full switch if they're just not totally convinced of the benefits yet; they get to see it in action first.

**Adam Stacoviak:** These guys are ahead of their times, I'll tell you, that's for sure. So I finally got back at this; if you don't mind going back one more time...

**Anna Pobletts:** It's why they're better than Lowe's... \[laughs\]

**Adam Stacoviak:** Well, I'm all about user experience, and this is what it says. So going back to your thing, Anna, what you just said, which is provide the ability to sign up with a password, the typical way that everybody does, and then layer on more higher security. And that's the thing they gave me first, because they know now that I have a passkey with them on this device. So they're gonna say, "Well, Adam, hey, your back. Sign in with your passkey first. Oh, that failed. Let me give you the one-time password I just emailed to you. Oh, that failed? Okay, you can use your password." So it's like layers.

So I finally got it to give me this prompt back... So I guess my passkey got obliterated, because I didn't respond fast enough with my fingerprint... So forget it, you can't have that option anymore. So now the only way I can get back into this thing is with my password, or the one-time code they gave me via email. So I did that. And as soon as -- the very next thing I did once I got this code back in my email, they said, "Okay, now you can sign in faster on this device." And it gives me what looks a finder type icon, with a face in it, which I think represents Face ID. Maybe that's the Face ID.

**Jerod Santo:** Is that the passkey icon, or the Face ID?

**Adam Stacoviak:** It might be the Face ID icon. I don't know that one very well. The fingerprint, and then a key, and it says "Enable face or fingerprint ID." And then below that, it says, "What is this?" and explains it. I pushed that big, orange button, because that's the color of Home Depot... My gosh, Home Depot, you should be sponsoring this show. Too much praise for you! And then they let me in. They didn't ever said passkey though. They never said WebAuthn...

**Jerod Santo:** Did they say bam?

**Adam Stacoviak:** They didn't say bam.

**Jerod Santo:** Okay. Did they spice it up a notch?

**Adam Stacoviak:** They did not say bam. They didn't even say "No password." They just said "Faster." They describe what you said before, which was the thing I want, which is ease of use, good user experience, and speed. So that's - closing the loop, thank you.

**Jerod Santo:** \[00:56:11.18\] Thank you for closing that loop...

**Anna Pobletts:** \[laughs\] Yeah. And I think people like -- okay, everyone's logged into an iPhone app with their face ID before, right?

**Jerod Santo:** Totally.

**Anna Pobletts:** Your banking app, or something that. So in that context, it's a pretty familiar thing to say "Log in with your face" or "Log in with your fingerprint." So I think they're kind of playing off of that familiarity that people have to something kind of like it, even if it's not quite the same... So they got you there eventually.

**Jerod Santo:** Right.

**Adam Stacoviak:** I'm back in. Passkey away.

**Jerod Santo:** Crisis averted. Adam is back into Home Depot. He was about to go to Lowe's, but he didn't have to.

**Adam Stacoviak:** I was never gonna go to Lowe's. No more lumber for me at this point. No more things, no more tools... What's some other brands I like? RYOBI. I like RYOBI.

**Jerod Santo:** You don't need to just name all these brands. They're not necessary.

**Adam Stacoviak:** I Rubbermaid. That's my favorite garbage can.

**Jerod Santo:** \[laughs\]

**Anna Pobletts:** I don't think they support passkeys on their website.

**Jerod Santo:** Yeah, not yet. Traditional padlocks...

**Adam Stacoviak:** Get us back on track, Jerod. Please, help me.

**Jerod Santo:** So the other area that we haven't really talked much about, which I think is burgeoning, because we're fresh off of the WWDC keynote... There were some Apple announcements around passkeys and sharing, I think... I think when you get into teams, you get into sharing; families... Just like a password -- you know, we have password problems around here. "Give me the password. Did you update the password? Yes. Can you give it to me again?" Write it on a scratch note, put it on my desk... I think all these problems are going to also be there with something that you have, which is a passkey. So is there a passkeys native solution to this, or is it all just like "Well, Apple is going to handle sharing, Google is going to handle sharing, 1Password is gonna handle sharing."

**Anna Pobletts:** Yeah, so it's that second one. It's gonna be on the provider to share in whatever sort of native way they have. So for iCloud, you can share it through Keychain. The same way - I think you can share other types of items in 1Password, you've been able to share passwords with people, or move them to different vaults for years... It'll be a very similar experience. And I think it's really important that all of those things still exist for passkeys. We can't reduce the functionality you get, or the way that you operate as a family or as a business to be able to share things just to get this higher security. You kind of have to go both ways.

WWDC was interesting this year, because they announced a few exciting passkey-related things, actually. One of them was around sharing, and teams, and things that... The other was support for syncing through external providers, so providers like 1Password. So Google announced this fairly recently as well. Once Android 14 and iOS 17 come out, 1Password will be a native passkey provider. When you get that passkey prompt on your phone, you'll be able to select a passkey directly from 1Password, instead of Google or iCloud, and you can kind of see all of those, and switch between them... Which is a really exciting update for us. It's really important for us, and we've worked very closely with those companies to be able to support things that. So we're personally really excited about being able to give that to our users.

And they also announced some cool work around enterprise passkeys, and being able to use passkeys in a managed environment. So if you want to enforce in your enterprise that passkeys are coming from a device that has an MDM solution on it, you can do that. So that's kind of a cool thing coming out of Apple, too.

**Adam Stacoviak:** What's MDM

**Anna Pobletts:** Like a mobile device management software. So my MacBook has - I don't know what it's called; we have some sort of software that we run right to manage our devices, and so that way I know it's a corporate device, it's not some random laptop that I've brought, and tried to authenticate with a passkey. I can say "This is an iCloud passkey for this enterprise", and you can kind of attest cryptographically to that.

**Jerod Santo:** \[00:59:56.00\] I assume passkeys has some kind of revocation process, similar to OAuth, where you can say "Kick out all current devices" or can you target a specific device and say "Throw this passkey away"? Is that all part of the spec?

**Anna Pobletts:** Yeah, so you can do it either on the client side, that you could delete a passkey from your iCloud account or from your 1Password account, or on a website you could go in, you'll see usually a list of passkeys in your profile, and you can delete them from there as well. So you can kind of have the website forget your passkeys, or you can delete the private key from your device. Either one would work.

**Jerod Santo:** Sounds good. Where do I buy one? \[laughter\]

**Anna Pobletts:** Hopefully, you already have one.

**Jerod Santo:** I don't know what else to say... I feel like we've covered so much, and I just feel like it's up for web developers to go out there and start implementing this... And people, tell your friends; we've gotta get the word passkey out there, and all the stuff and... The passwordless future is right here in front of us, it seems like. I don't know, are there -- that's just way too rosy. What are the drawbacks? Let's get some -- we're too excited. We have to settle down. Anna, tell us the cons. There have to be cons.

**Adam Stacoviak:** Gosh...

**Anna Pobletts:** There definitely are a few downsides... My coworker, Nick Steel, likes to say it's the hot girl summer of passkeys this year... So I do think it'll be like when everything kind of takes off... But I think that comes with time, and implementation challenges, and all these things we're talking about with Home Depot even, of like "Oh, okay, I did this, but it didn't quite work, and then I did this other method..." I think there's gonna be a lot of sort of confusion around that type of stuff at first. And that's why a lot of these websites are implementing them sort of slowly, alongside of passwords, because they just have to get people familiar with it, and educate people. And I think once they see that first passkey and get to use it, they'll want it places. But it's just going to take time for websites to feel comfortable implementing it. So we're all about just how do we help? How do we make this go a little bit faster, for businesses, for developers, for end users? Just get everyone comfortable with the technology, and able to get there, and then I think it's a big win. I think it's kind of a given that it's going to happen, and this is the direction the internet is going, but it'll just take some time, have some growing pains, for sure.

**Adam Stacoviak:** Is the goal of Passage to provide these SDKs so that they don't have to implement it on their own, or themselves? I don't even know, Home Depot may be a Passage user... You may not even know. Who knows.

**Anna Pobletts:** They're not, unfortunately. I wish.

**Adam Stacoviak:** They're not. Gosh, Home Depot. Get it together! Sponsor this show, and use Passage.

**Anna Pobletts:** Exactly.

**Adam Stacoviak:** If they use Passage though, they will get the blessed way. You all put all the work in to ensure the workflows are right, to ensure if I didn't put my fingerprint down in time, it didn't obliterate my passkey and make me go back to some other method... It's like "Hey, Adam gets a chance to try it later." They can use all the blessed ways you've tested, tried, put out there. That's the reason Passage exists, right?

**Anna Pobletts:** Exactly. 100%.

**Adam Stacoviak:** Okay. What's next then? How do people use Passage?

**Anna Pobletts:** Yeah, so it's free to sign up. Developers can just go to passage.1password.com, check it out. You can sign up, start building apps with it... We have a few different options and ways to do it. We have a Discord you can join if you want to chat with us. But our goal is to just let you go build stuff; you don't have to talk to us or anything that, if you don't want to.

If you're just a regular user - Adam, you were saying you've only used a passkey one time, basically, on Home Depot. We also have a fun website called passkeys.directory, where we have a big list of all the websites that have passkeys. So if you haven't used passkeys yet, go check it out. You'll probably find a site that you've used before, and you can actually go add a passkey and see what it's like for the first time.

I think, especially as developers, once you see that, of course you want to give that to your users. And so I think it kind of helps to see it in action. A lot of the different user flows we've talked about are kind of confusing when you're just talking out loud. But once you see it happen for real, I think it just clears a lot of things up.

**Jerod Santo:** \[01:04:03.24\] It also looks there is a fair number of repos on GitHub... I'm sure if you go out and you're using Rails, there's probably somebody who's laid some groundwork for Ruby on Rails. If you're using Next.js, there's probably some people who've laid some groundwork for Next.js. Even just the passkeys topic on GitHub has 54 public repositories... So I think there's probably a lot of resources, a lot of tools, a lot of starting places where folks can get started with this on their particular platforms.

**Anna Pobletts:** Yes, tons of open source, repos, libraries, examples... Lots of good places to get started.

**Jerod Santo:** Yeah. And a lot of these are actually called WebAuthn still, so maybe the word passkeys is just burgeoning, but not quite there, especially on older implementations that maybe you don't want to use it directly, but can just be your inspiration if you're going to hand-roll something.

I would love to see how it works inside of our Elixir and Phoenix framework, to do it by hand, or to do it with Passage, and maybe even compare the two differences. I think that'd be super-cool. But yeah, lots of resources; we'll definitely link up those things in the episode show notes. Anything else, anything left unsaid that we haven't asked you or talked about, Anna?

**Anna Pobletts:** Adam, you were talking about your mobile military ID, or something like that, that you use at Home Depot... This reminded me of a really cool thing that is kind of post passkeys. It's probably a while out still, but I think it's the future, and it's a really cool thing to think about, called verifiable credentials. And it's basically verified mobile IDs, and things that. And so letting you store your verified military ID in your wallet, in your iPhone wallet, or in your 1Password, and using that to verify over the internet, without you having to scan your phone all the time. And it's very much similar to a passkey type of protocol. It's sort of like the next evolution of that, and something that's kind of coming after passkeys, and I think it's cool how there's just so much exciting identity-based new technology coming out in the next few years, I think. It's just a lot of cool stuff to make your life easier on the internet. And the fact that you brought that up just kind of reminded me of that.

**Adam Stacoviak:** Yeah, for sure. They make me do it every single time. Every time. So yeah, whatever could make that easier, it'd be great. They have it built into their site, though; it's like, I have to authenticate with Home Depot. They're getting so much press this time around... I was looking on passkeys.directory too, and sure enough, Home Depot is listed there. So...

**Jerod Santo:** There, you're really closing the loop.

**Adam Stacoviak:** So, so many Home Depot mentions on this show. I can't wait to see the transcript, it's gonna be amazing. So nothing left unsaid, no directions for our listeners... Obviously, go to check out Passage.. Where's the best place to find resources, or just to learn? Is it Passage in your Slack, or Discord, or different places? How can developers get educated on passkeys at large?

**Anna Pobletts:** Yeah, so we can definitely help as much as possible. We have a lot of resources on our website. There's also a great resource called passkeys.dev, that is I think largely the FIDO Alliance, along with Tim Kapali from Microsoft, who's put together a lot of developer-focused resources just about WebAuthn and passkeys. That's really, really great. That's the other one that comes to mind.

**Adam Stacoviak:** Passkeys.dev. We'll link all these up, as Jerod mentioned, in the show notes. Anna, thank you for schooling us on -- literally, schooling us on passkeys. We had no idea; I had no idea. Jerod may have had half of an idea, at least it sounds like it...

**Jerod Santo:** I did. I had about a half, maybe a third of an idea.

**Adam Stacoviak:** I just can't believe you're a Lowe's fan. Gosh...

**Jerod Santo:** I just said that to spite you.

**Adam Stacoviak:** Of course, that's right. I forget that you have to be against what I'm for...

**Jerod Santo:** I always do that. I just take the other side. Well, you were so for it... I just feel we need a balance on here.

**Adam Stacoviak:** It's orange.

**Jerod Santo:** I like \[unintelligible 01:07:47.22\]

**Adam Stacoviak:** Okay...

**Jerod Santo:** Do you guys have that?

**Adam Stacoviak:** No.

**Anna Pobletts:** I don't know what that is...

**Adam Stacoviak:** Ace. We Ace around here. Ace is the place.

**Jerod Santo:** Ace is a good place for just like -- if you have to have the most obscure bolt, or some weird-shaped nut, and you've gotta just buy one of them... You go to Ace and you pay like 17 cents. They always have it.

**Adam Stacoviak:** Ace...

**Jerod Santo:** Brought to you by... Hardware stores! \[laughs\] All of them!

**Anna Pobletts:** Who would have thought?

**Adam Stacoviak:** Yeah. Well, thanks, Anna. It's been awesome.

**Anna Pobletts:** Yeah, this was fun. Thanks, guys.
