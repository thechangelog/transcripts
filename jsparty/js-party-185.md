**Jerod Santo:** That's right, friends, it's JS Party time. I'm Jerod, I'm your internet friend, and I'm joined by a few of my internet friends - Adam, Nick, and special guest, but also regular person, Feross. What's up, guys?

**Adam Stacoviak:** Regular person...

**Nick Nisi:** Hoy-hoy!

**Feross Aboukhadijeh:** Hey, how's it going?

**Adam Stacoviak:** What's up?!

**Jerod Santo:** It's going very well. So Feross, Adam, Nick and I are here to grill you on Wormhole. So unlike the rest of us who just talk about technology, you actually build technology and launch it into the world. I'm just kidding, Nick... Nick, you do stuff...

**Nick Nisi:** You can't prove it...

**Jerod Santo:** And we like to bring you on to talk about the stuff that you build, because it's always JavaScript-based, it's always web-based, it's usually interesting... We've done a show with you about BitMidi back when you built that... I think we did a show about your annoying website as well...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** We talked about Virus Cafe, which I think you've renamed, because we all said "Hey, this is cool. Rename it." It's called SpeakEasy now... And now you're back with Wormhole. So let's dive into it. Tell us what Wormhole is and we'll go from there.

**Feross Aboukhadijeh:** Yeah. By the way, thanks for always having me on to talk about whatever I'm building. It's always good fun. JS Party is like the first stop on my way to launching anything new.

**Jerod Santo:** There you go. Happy to do it.

**Feross Aboukhadijeh:** Yeah. Or Changelog, I guess, because I think maybe one or two of those things you mentioned were on Changelog.

**Adam Stacoviak:** I think BitMidi was on Changelog.

**Jerod Santo:** Yeah. And we've done WebTorrent as well... So I didn't list all the things, but - yeah, we always like to talk to you. It's cool because there's context, there's reasons why you build these things, but also - you're usually building with interesting technologies, and kind of pushing the edge of the browser... So it's interesting both to see what you're interested in and what you're building, but also the how I think is very helpful, especially for those of us trying to build cool things, just getting inspiration of like what you can do with web apps. So tell us about Wormhole.

**Feross Aboukhadijeh:** \[04:05\] Totally, yeah. So the goal with Wormhole was to be the fastest way to send files on the internet. The way it works is you go to Wormhole.app, you drop some files on the page, it encrypts them with a key that's generated in your browser, and then it sends the files to your recipient. So you get a link, you can send a link to them however you want, and that's basically it. The trick is it's really fast. As soon as you drop those files on the page, the link shows up, and you can send it to your recipient even before the files have finished encrypting or uploading, and your recipient can just click to download them... And it uses streaming, which means that you could be like 1% uploaded and they'll be 1% downloaded. They can start to download it right away, before it's finished, which is something that I think is pretty unique as far as file transfer services go.

And then the end-to-end encryption is the other part that's really unique. We designed it in a way where you can't see your files, we don't wanna see your files, and we do everything in the browser on your end. So you're encrypting the files, and then the link that you send to the recipient contains a decryption key, which they use to decrypt the files. And it's all done in such a way that the server never sees the key at any point. So there's no way for us to do anything with your files, even if we wanted to. And that's kind of Wormhole, that's the TL;DR.

**Jerod Santo:** Yeah.

**Nick Nisi:** I'm curious how that works. Could you break that down a little bit for me, of how the URL contains the key, and I send that to somebody, and then - how do they request the file without sending that piece of the key? Is it broken off in the frontend of the recipient, or how does that work?

**Feross Aboukhadijeh:** Yeah, it's a great question. Because you know, your first reaction would be that "Well, okay, when the recipient clicks the link, they're gonna make an HTTP request. Their browser is gonna make an HTTP request, and that's gonna contain the key in it", so obviously our server would get that request and can look at the key. That's what you'd think. But we're using the hash part of the URL, which is the pound sign, or hash symbol, and we put the key after that symbol. What that means is that that's never sent to the server. It's funny, any time any app - it's not just Wormhole, this is not a thing we invented, but it's a common technique when you wanna make any kind of app that deals with security, you can put the key into that part of the URL... And it's totally an abuse of what that originally was meant for; that part of the URL was meant for scrolling the user down to a certain part of the page.

Usually, the way it works is the browser makes the request for the URL without everything that comes after the hash sign, and then once the page is loaded, then it looks for an element with an ID that has the same name as the part after the hash symbol, and then it scrolls the user to that part of the page. So it's a way to sort of jump -- it's like an anchor link thing, but it's really handy for creating apps where you want to have some piece of data that is accessible only on the client-side, and not sent to the server.

**Adam Stacoviak:** Obviously, anybody who has that link can get the file, right? It's not so much pinned to my IP address, or some sort of Mac ID, or whatever. It's totally based upon the link. So if the link somehow gets out there, then technically it's in the wild, right? Because the decryption key is in that link. So basically, trust whomever you give that to, otherwise the trust that you're trying to build with Wormhole is broken.

**Feross Aboukhadijeh:** Yeah, totally. So the link is like the password. It's similar to the way a Google Doc works, where the link is sort of the key into the document. It's totally the same. So if you're trying to send some super-secret files and you don't even trust the chat app that you're using to send the link, you think that someone is watching it or something, then you can't send the link through it, obviously. So it's kind of a chicken and egg problem. So in that case you can take the key out of the URL and send that maybe through another channel...

**Adam Stacoviak:** Right. The mail. Print it out.

**Feross Aboukhadijeh:** ...so that the two pieces are not in the same place.

**Adam Stacoviak:** That's a joke, print it out, because that still isn't even secure either... But some other -- you know, disconnect the "Hey, go get this here" and the "Hey, get this here with this key", separate those messages into two different conversations, so to speak, is a way you can build in security.

**Feross Aboukhadijeh:** \[08:19\] Totally. It's a very specific model of security that we're going for. We don't have accounts, we don't have any kind of notion of email addresses, so we can't do things like confirm who the downloader is by having them verify their email. We're not doing any of that. It's really simple, it's just - you get a link, and then the link is the thing that you need to access the file and to decrypt them.

**Adam Stacoviak:** This seems like a collection of really awesome ideas. One of the ideas that seems to be the best is around security, end-to-end encryption. I can recall talking to you on Twitter about this, and I even went back to Jerod, and I think even on Twitter I outed myself, like "Okay, so just because it's SSL doesn't mean it's secure." I didn't really consider what it meant to be end-to-end secure, or encrypted even. I use Dropbox, I'm a Dropbox user, so from that point of view, that end-to-end encryption and security was what piqued my interest. Because sure, Dropbox can scan my files, and because of their terms of service they can share that data with third-parties and affiliates. Now, they may not -- or they may, I don't know; there's a lot behind-the-scenes.

Dropbox isn't connecting with me on the daily on what they've done wrong or what they've done right. Those are obviously trying to be the least consumable post-mortems ever, right? But this is a culmination of awesome ideas - instant download because it's peer-to-peer; you've got a lot of stuff you're probably building upon... Your knowledge of WebTorrent, and the idea of peer-to-peer technologies which you've gotten a lot of... But end-to-end encryption seems like the hallmark here. Because of this, everything else fits together; it's the glue. Do you agree with that?

**Feross Aboukhadijeh:** Yeah, so I think a lot of companies use the word encryption in a way that makes people feel nice and safe, and nice and comfy when they see it. They're like. "Ooh, encryption." And in some cases, even like a Zoom, the video chat application was saying their app was end-to-end encrypted, which is even better, but it wasn't true. It was actually just false advertising.

So it's really worth looking into what exactly people mean when they say things are encrypted, and to really understand the distinction... And especially even the difference between encryption and end-to-end encryption. So those are not the same, they're not even close to the same type of guarantee for the user of an application... I'll just quickly explain the difference in case people aren't familiar.

So you can think of encryption like a lock. And let's take the case of Dropbox. So Dropbox stores your files, you send them to them over an encrypted HTTPS connection... So eavesdroppers on the network can't see the data. Once the data arrives to Dropbox though, of course, they can see the data you sent them. Then they promise to store it in an encrypted form on their servers. And they key to ask yourself whenever someone says they're encrypting your data is "Okay, who has the key to unlock that encryption?"

So encryption is just a lock. Literally, think of like a physical lock. And it's really important when someone's saying "Well, your stuff is locked up." Well, okay, who has access? That's the question. Who has the key? Who can open the data? Who can unlock it?

In the case of using Dropbox, they have the key. So it's good that they're locking it, it's good that they're not just letting it sit there unencrypted, but they have the key. And that's really important, because a few years ago, back in 2010, Dropbox had a terrible bug on their website, that made it so that you could log into anyone's account using any password. They just forgot to check the password to make sure the password was correct. So any string would let you into that account.

This was a real bug for like four hours. You could just get into any account. Rumor has it - I'm not sure this is actually true, but someone who had a friend who worked at Dropbox (so it's very through the rumor mill at this point) told me that it may have been Drew Houston himself that committed that bug...

**Jerod Santo:** That would \[unintelligible 00:12:01.28\] poetic-

**Adam Stacoviak:** That makes a good story at least, even if it's not true.

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** \[12:10\] It's through like two people, so take it with a grain of salt... But anyway, that was a real bug that they shipped. And of course, that's only possible because they have the key to your files, so you're trusting them to do a good job with it. And you know, most of the time they do, but there's all these risk factors that come from giving that access out to other people.

So if your data is encrypted and someone else has the key to unlock, then it's not truly fully in your control. So that's what end-to-end encryption is about - it's about doing that encryption in a way that you are the only one that has the key; so it happens on your device, the key is on your device, and then now, once you've done that encryption, the data goes across the internet, it doesn't matter what anyone wants to do, they can't access the data, they can't unlock that lock unless they have the key, and you're the only one that has it. And you can of course share it with certain people, but by default, it's just you who has it, and no one can see your data. So that's the key difference.

**Jerod Santo:** Yeah, it's tough to distinguish, but it means everything, when you really need that security, whatever it is. And we even have circumstances where federal agencies can coerce - or what's the word, when the government forces you to go ahead and make use of that key that you have... Even though, for other reasons, your business would never do that, but you can be forced to do that, in compliance with government agencies... Unless you don't actually have the key. It has to be not possible. If it's possible, then it can come back to bite you. So that's a huge part of what this is.

The other thing is like - you mentioned the speed, and I'll just say the ease of use. For a long time sending large files on the internet was kind of like the world of kind of like scurvy, spammy websites, where you had to --

**Adam Stacoviak:** It still is.

**Jerod Santo:** Yeah, I'm sure they're still out there, but - you had to either pay some money to send a file, which always is like "Who are these people?" and then there's a lot of email hand-offs, and redirects, and... It was just never straightforward to do until Mozilla came out with their Firefox Send, which was a really cool service that I was glad existed, and they eventually shut it down, and Wormhole kind of came in to fill that vacuum... But can you talk about the why? I mean, you mentioned why Wormhole is different and interesting, but why would you wanna build something like this? You have probably a thousand ideas... Why work on Wormhole?

**Feross Aboukhadijeh:** Well, I was really sad when Mozilla shut down Firefox Send, because it was such a nice, simple product... And I was like "There's no reason that this thing couldn't be rebuilt and done in a way that is sustainable." So that's kind of what we wanted to try, was to make a version of it that wouldn't get shut down. And it was also a really nice application of all the tech that I've been working on throughout most of my career. The peer-to-peer stuff from WebTorrent really does improve it, even beyond what Mozilla did with Firefox Send, because we can do that streaming that I mentioned, so the downloader can start downloading right away... The user experience stuff that we did too is actually another thing that Firefox Send didn't do.

Here's the thing - when you're building a security product, you can either sell it to people as going into all the security details about why it's great, like I just kind of did with you guys, and told you all about end-to-end encryption... And then you're gonna get some people who are like "Oh, I am worried about people getting access to my files, so I'm gonna use this thing that is more secure." But I think most people just care about the experience of using it... So I see this mistake made a lot when people are building, especially in the decentralized space, or even like in the cryptocurrency world you see this a lot, where people are making stuff that's so hard to use that they only get the true believers, the really ideological people, who would use it no matter how terrible and hard it was to use... And everyone else who's not really that bought into the ideology of "Oh, everything needs to be decentralized" or "Everything needs to be - whatever the buzzword is." Those people are not gonna be sold by it, you know what I mean? If you're making a Twitter clone, for example - a Twitter clone, but it's decentralized. But it's like ten times harder to use than real Twitter. You're not gonna get any normal people to use it, "normal people".

\[16:12\] So that was the thing I wanted to be really careful when we were building Wormhole that we didn't do. I didn't wanna be like "This thing is worse in a lot of ways, but it's most secure", and try to get people excited about that. It was like "It has to be better, even if you don't care about security." That was part of the challenge, like "Can you even do this?" Because usually, there's some kind of compromise when you're trying to increase the security or whatever... You're making it harder in some ways; it's more challenging from a technical perspective. And sometimes that tech leaks out in a way that the user sees it. Like "Oh, you've gotta save this key", or whatever nerdy thing you have to do in order to use it. We're trying to do it without any of that. So just be better, faster, simpler, quicker, get you the link right away, not at the end of the upload, all that kind of stuff. And then hopefully, they perceive that as being just way better. And then also, icing on the cake, it's end-to-end encrypted. We can't see your data. In that order.

**Break**: \[17:04\]

**Adam Stacoviak:** You mentioned your love for Mozilla Send. Did you talk to any of the team around that? Did you see any statistics on the usage of that? I'm just curious, how often do people send files without storing them? I use Dropbox in the sense that I already store my things there, and just share them because it's there... Less of like "Oh, I wanna share this file with this person" arbitrarily, or just out of nowhere. What are the statistics on this world? How big is the send files to other people? I imagine kind of big, but then you've got the whole - you might be sharing some... What was it you said, scurvy websites, Jerod, or just something like that? You might be sending some shady things, who knows...

**Jerod Santo:** Shady is a good word.

**Adam Stacoviak:** What's the space like, and did you talk to anybody at Firefox or Mozilla Send from that team around what they did or what they didn't do?

**Feross Aboukhadijeh:** I haven't actually spoken with anyone on the team - I probably should have - to learn a little bit more. I wanted to, but never got around to it. Files are fundamentally how data works on all operating systems. They're gonna be with us forever. But I do have to say though, on mobile devices they're not really exposed in the same way to the user... So files are kind of dying in some sense... I don't have kids or anything, but I bet if you ask an average kid "What is a file?" and they've only used iOS or something, they might not even know what a file is... That is kind of concerning in terms of the future of growing for Wormhole... So that's partially why we're thinking about expanding into other types of things besides files...

\[20:02\] Like, what if we get to end-to-end encrypted photos? What if we have a photo library that was really fast, and as good or better than other services, but we do everything in your browser, including the detection of what's in the photos, all the AI stuff you can do with WebAssembly in your own browser? And then once you've figured out what's in that photo, you can attach that metadata to your photo library and upload that into the cloud, but the cloud never sees what's in that library? So the cloud is just this dumb hard drive that's far away from you, that you stick stuff on, but it doesn't actually do anything that involves seeing your data. That's probably what we'll go with, because -- I mean, right now files are still used in a lot of places, like developers, creators especially actually are using files a lot, because they still work with raw video, and photos, and that kind of stuff, and all the apps still -- it's all on desktop mainly, so...

**Adam Stacoviak:** And you have a large send, too. 10 gigs is the max file size right now...

**Feross Aboukhadijeh:** Yeah.

**Adam Stacoviak:** So that's gotta be a thing. Do you plan to be Dropbox-like at some point? What's the horizon, what's the outlook?

**Feross Aboukhadijeh:** Yeah, that's another direction that we're thinking about. Building a drive where you can put all your files permanently, instead of just what we do now, storing them for 24 hours.

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** That's a thing people keep asking for, like "I wanna use Wormhole for permanent storage."

**Adam Stacoviak:** That's where it takes significant investment, because that's a lot of long-term storage, you've got probably some assurances there...

**Feross Aboukhadijeh:** Backups.

**Adam Stacoviak:** ...some sort of agreement that your files won't be lost... This isn't long-term storage, however it is storage in general, so it should stay there and not go away... So there's just a lot of overhead, so to speak, when it comes to storing long-term files.

**Nick Nisi:** Not to ask you about a product you haven't built yet, but how would you even do key management with something like that?

**Feross Aboukhadijeh:** That's the thing about the current thing we did - we actually have the easiest problem in the world, because the link is the password, and if you lose it, okay, whatever; it was only gonna be stored for 24 hours. Anyway, you weren't putting your most precious files in here and hoping "I'm gonna download them when there's one hour left" or something. It's inherently ephemeral, so it's not a huge deal if you lose the key, or even if we lose your files... Which we're not gonna try to do, but if we did, it's still not the end of the world.

Things get way harder when you're trying to provide a permanent drive... I think the model that we would follow would be something like 1Password. If you've ever used 1Password, they have a browser version now, and it does all the end-to-end encryption in the browser, and they have sort of this user experience that they walk you through, where you save an emergency kit, just like a PDF with a key on it, and they have a combination of the secret key that you can't memorize with the master password that you do memorize... And the two together make this really strong key. That's a thing that I think they've done a really good job of like explaining to normal users in a way that it makes sense, but it's also still a pretty smooth user experience...

So if we did something like that, that offline emergency kit that you print out would be like your backup, and we could hopefully still have a pretty decent user experience. But that is a case where -- yeah, that's gonna be harder to set up and like just making an account with some service, and just having them be able to reset your password at any time. That is just fundamentally gonna be a worse or a harder user experience. But hopefully there's other benefits that make it better. I mean, in the case of 1Password, people are willing to put up with it, because that's a thing where they really don't want the provider to see their passwords to everything - their banks, and their files, and every single website on the internet... So it's worth it. That's kind of the idea... Does it make sense?

**Nick Nisi:** Absolutely, yeah. I use 1Password, and I've put up with that, and... I don't have to put up with it often, which is great. It's pretty much just like -- I don't know if it does some kind of like local syncing through iCloud or something between all of my devices with that stuff, but it's pretty simple to set up and it's overall a pretty simple solution to this problem. So yeah, I like it.

**Feross Aboukhadijeh:** Yeah. The reason why they do the secret key in addition to the password - do you know why they do that?

**Nick Nisi:** Security... \[laughter\]

**Jerod Santo:** Correct.

**Feross Aboukhadijeh:** \[24:07\] Yeah, that is actually correct. It's because in the past 1Password was purely local on your device, and so even if you picked a crappy master password, in order for you to get successfully hacked, someone would have to first steal your database for where your 1Password stores the files, so it would have to steal that database and then they would have to try passwords and try to break in. So that's two steps. But then once they started with the cloud stuff, now they have everyone's databases sitting on their server, and so if your password is hello123, that means that 1Password themselves could, if they turn evil, try all the common passwords, and hello123 would be very easy to guess.

So to help people who have terrible passwords, they combine that with a secret key that is completely long and randomly-generated, and the two together are guaranteed to be strong... Because the key is guaranteed to be strong on its own, so your password just adds extra --

**Adam Stacoviak:** That's smart.

**Feross Aboukhadijeh:** Yeah. And then the problem with that is --

**Jerod Santo:** It's like your password's a salt \[25:11\]

**Feross Aboukhadijeh:** Yeah, exactly. Your password is just an extra little bit of fluff at the end of the true password, which is the key... But then you have the other problem, which is that users can't remember the key, so that the app remembers it the first time you type it in, and then you just use your password as a practical day-to-day unlock of the app. So it's a really cool design. It kind of solves all the problems that you would worry about with the cloud service.

**Adam Stacoviak:** They've been committed to that for a while, too. I've been a 1Password user probably -- I wanna say at least a decade, at least. Probably longer than that. So they've been committed to that goal, which hopefully you and Socket Inc. and Wormhole has a similar aspiration to be committed to this goal of what you're saying here.

**Feross Aboukhadijeh:** Yeah.

**Nick Nisi:** One more question related to this potential future product... You're very much web-first with this, and I assume that that's kind of an aspirational goal going forward, too... So things like that randomly-generated key that would be attached to your password, if you were gonna do something like that - is that something that's safe to store in local storage?

**Feross Aboukhadijeh:** Yeah, it should be. I mean, if it's stored in local storage, then it means it is probably accessible to other apps on the machine, which I guess that is a weaker guarantee than -- I think 1Password might do something like storing it in a secure enclave if your device has some kind of hardware place to store stuff. I'm not actually sure... So that might not be accessible through Web APIs. I would have to check. That is a good point; it's probably a fine place to store it, but I'm not exactly sure what guarantees -- how it compares to 1Password, so I'd have to look into it.

**Nick Nisi:** I know 1Password has that 1Password X, which is just the extension... Maybe that offers some extra security, like being an extensions versus just being a web app... But if not that, then presumably they're storing it somewhere like local storage.

**Feross Aboukhadijeh:** You're right. And they even let you log in just purely with the web browser, without any extension... And the next time you come back to log in, you only have to type in your password. So the key is being stored somewhere in your browser storage.

My general thoughts are if it's good enough for 1Password, it's probably gonna be good enough for us, because they've been iterating on that for a while... So it's really inspiring to see them do it, because then you know -- I mean, it worked for a password manager, so it's probably similar \[unintelligible 00:27:28.06\]

**Jerod Santo:** It seems like there's iterative steps you can take between here and there with regards to Wormhole as it stands, which is drag-and-drop a file into a web app, and then copy the link and share it, and what we're talking about, the hypothetical future product, which is like a full-on Dropbox end-to-end encryption replacement with files in storage.

\[27:57\] One example would be some sort of a desktop integration similar to what Dropbox does, but not having to store the files in a synced drive. You could have a Right-Click "Share on Wormhole." And then it would just upload the file that you clicked on and get you that link immediately, and you kind of feel like -- I mean, when it comes to Dropbox, there's kind of two features there. There's the backup, the syncing across your devices, which kind of acts as a backup, and then the sharing, the collaboration. And you can get the collaboration pretty easily and make it feel more like something that you're using more regularly, where you could just have a file on disk and right-click and share it, without having to actually do the crazy stuff we're talking about. Not crazy, but the heavy-lift of what you were talking about, right?

**Feross Aboukhadijeh:** Yeah. Fun fact - we're actually a PWA right now, so that means if you're using the right browser, you can install Wormhole as an app on your computer... And if you're doing it on the right platform - because it's not on all the platforms yet - then you can...

**Jerod Santo:** \[laughs\] A lot of if's...

**Feross Aboukhadijeh:** Yeah, I know. You can right-click and select Share on Wormhole and it'll actually do what you described.

**Jerod Santo:** Oh cool.

**Feross Aboukhadijeh:** Right now if you're on Android and you install Wormhole as an app to your homescreen on Android, that means it'll get added to the Share menu. So anywhere on Android, if you have a file, you can get a Wormhole link from it in a couple taps.

**Jerod Santo:** That is cool.

**Feross Aboukhadijeh:** And on Windows, too. If you use Edge to install it, then you get the same thing.

**Jerod Santo:** What's the hold-up on iOS? Because there's PWA's and there's also Share Sheet integration, but they maybe don't talk to each other.

**Feross Aboukhadijeh:** Don't get me started on iOS... \[laughter\]

**Adam Stacoviak:** Or do.

**Jerod Santo:** It sounds like you haven't gotten started on iOS.

**Feross Aboukhadijeh:** Safari and iOS is the worst browser by far for web development... And I'm sure anyone who's a web developer knows this. It's not just in terms of support of web features, but just in terms of even bugs, like in basic features that should be working good, it's just a disaster. I don't say this lightly, but it's really bad.

As an example, they completely broke IndexDB in the last version of Safari. Literally, it doesn't work. A basic web feature that's been in their browser for 2-3 years, they've just shipped it where if you call IndexDB.open it doesn't work. Nothing happens. The promise never returns. And then the workaround is - we've figured out apparently they're doing some kind of lazy-loading where the first time you mention IndexDB in your app it starts up a process, but it loses that first call that you make while that process is starting up... Anyway, the trick is you have to just say "indexdb" somewhere in your app at the top of the file, and then later on when you say IndexDB.open, then by that point the process has started, and then that second call will work. It's like, "What?!" And then they shipped that. I made a fuss about it on Twitter, I'm like "Guys, Safari literally just broke IndexDB" and then all the Chrome people were like -- because they actually have a really good Twitter presence. They were all in the replies, like "Are you guys okay over there in Cupertino? Are you doing alright?" \[laughter\]

You'd think a test would catch this. A basic test, like "Does it work?" Anyway, so then they fixed it... But then you're like "When are you guys gonna release this?" and they comment on the issue tracker "Apple does not comment on future releases." It's like, okay, so now everyone has to assume this is not gonna make it into until the next version of Safari, so we're dealing with this bug for the next year. They just broke a basic feature and they're not gonna hotfix it. It's like, actively -- if you had to imagine what could you do to sabotage the web, it would no look very different than what Apple is doing.

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** Say you support standards, but then actually subtly break them all the time. I'm not saying this was on purpose, but I'm just saying, it's not that different in the effect it's having on the web than if they were trying to sabotage it. I know they're not trying to, but that's just the effect that it's having. Anyway...

**Nick Nisi:** I think when it comes to tabs, they are doing that in iOS 15, so... \[laughter\]

**Adam Stacoviak:** Gosh...

**Nick Nisi:** \[31:57\] I'm running the beta so...

**Jerod Santo:** It's not even out yet...

**Nick Nisi:** I'm feeling the pain... \[laughs\]

**Jerod Santo:** Yeah. Well, don't run betas...

**Adam Stacoviak:** I've heard, but I have not seen personally myself the tab snafu \[ 00:32:05.13\]

**Jerod Santo:** \[32:07\] I'm just hoping it's fixed by the time the thing ships. Well, don't get me started on Apple Podcasts, because they've completely destroyed podcasts, and there's a bug in iOS 14.6 which destroyed downloads for every podcaster in June, and up to now, because they haven't released the fix for it. They've confirmed the bug; it basically breaks downloads, so a bunch of our listeners just aren't getting our shows, and... It may get fixed someday soon, real soon...

**Nick Nisi:** I heard that you move fast and break things in the Valley... \[laughter\]

**Feross Aboukhadijeh:** Yeah. So anyway, Safari is just -- I don't know what's going on there, honestly...

**Adam Stacoviak:** Which is terrible, because iOS so prevalent. There's so many people out there using this really expensive device they think is state of the art... Which it is, as a device. But then the device is only as good as the software it runs, and in many cases, I replace Apple software for the most part. I don't use mail, I don't use specific things... I'm just moving away from more and more of those things. And if you can't trust Safari, which I believe they even gate which browsers you could put on the iOS device anyways; they're all really based on Safari. Even though it's a Chrome--

**Jerod Santo:** The rendering engine.

**Adam Stacoviak:** Right, exactly. So there's something in there that's like always Apple.

**Feross Aboukhadijeh:** People need to know that, too. I think that's not a widely-known fact, but every browser on iOS that is not Safari is just a skin, basically, on top of Safari. That's the way to think about it. It's like a UI on top of WebKit, which is Safari. So even though you think you have choice and you're like "Oh, I'm gonna install Chrome", you're basically just doing that for the bookmark syncing and whatever other Chrome things like that... But you're still getting fundamentally the features that the Apple team decides to ship in their browser, and there's no alternative.

I don't know, it means that there's no competition. I mean, they can just do this, they can just break the browser, and then they can say "We don't have a monopoly on the App Store, because you can always make a website." In this anti-trust case in Australia actually, in their defense they mentioned that you can use PWA's as an alternative to the App Store. So you can actually make a website that's as good as an app, they claim... But then they fail to mention that they're also in control of exactly what features you can put into your PWA, and what things they're gonna support. So they don't support notifications, they don't support a storage system that makes sense... They just break it randomly. So it's not really a true alternative.

**Adam Stacoviak:** Back to the security though, I think one of the reasons they make this choice, or at least they claim they make this choice around WebKit and other browsers being formed around WebKit is usually they'll say it's a security reason, or it's for -- they're so focused on privacy. What do you think?

**Feross Aboukhadijeh:** I mean, that's a fake reason.

**Jerod Santo:** Well, you can't break IndexDB and say "We did it for security", you know?

**Adam Stacoviak:** Well, maybe not break IndexDB, but maybe you can limit the fact that you can only use WebKit. For some reason it's a security reason, it's a privacy reason.

**Feross Aboukhadijeh:** I think it's true, yeah. To some extent it's true.

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** If you prevent the kind of fast -- the JIT compiler basically is what they specifically prevent, and that's why no browser wants to ship a browser, because it wouldn't be able to be fast, because the JavaScript engine wouldn't be able to do just-in-time compilation... That's my understanding of why no browser has actually bothered to truly ship their own browser, because it would just suck if they did... But banning that - I guess there is some theoretical security benefit to that.

But I would argue the true security in iOS doesn't come from Apple reviewing things and deciding what code gets in and our of the store... Sure, that is one thing, but the true benefit comes from the other thousand things that the OS does, like sandboxing the app, preventing the app from just reading and writing files in random places, making it so the app only can touch its own files, and making it so that all the sensitive APIs have to go through these OS calls that bring up prompts for the user, that ask if the user wants to do that before it happens... All that stuff happens at the OS level. So even if an app was malicious, the iOS sandbox would do a pretty dang good job by itself of keeping you safe, I think.

**Adam Stacoviak:** \[36:06\] In two minutes, let's say, give me an answer on this - if the WebKit/Apple team/iOS team, somebody out there who cares about let's say the future of the web and all these things, they were listening, how would you fix iOS to be better, more PWA-friendly, better web-developer-friendly? What would you fundamentally change about the way they're doing things

**Feross Aboukhadijeh:** I mean, probably faster releases would be the number one thing... Because there's all these things that you can see that are master on WebKit, that you have no idea when they're gonna be released, and usually that means it's gonna be a year. So I think faster releases would help a lot.

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** And also, just deciding -- like, if they want to use the web as their defense against why they're not a monopoly, then they should make sure that the web has all the features that the native platforms have, or else it's not a true defense. That's not really a thing that the WebKit engineers can decide; it's more of like an Apple strategy thing, but...

**Adam Stacoviak:** Right. Well, at least they can petition. If they care about their jobs, and what they're doing, and they have enough passion, they can either keep doing it under that guise, or fight back and say "Listen, this is the way we have to really open up the opportunities for web on iOS." There's a choice there.

**Feross Aboukhadijeh:** Yeah, totally.

**Jerod Santo:** Well, I'll just quote Steve Jobs when he said "We have a very sweet solution for you. They're called web apps." \[laughter\] Remember that? Before the app store existed. He put that big slide on the screen and he said "Here's our solution for apps on iPhone OS (back then)." "Really sweet solutions" is what he said - web apps. So Feross, they've been committed to web apps before the App Store existed, so I don't know what you're talking about.

**Feross Aboukhadijeh:** Yeah... I don't wanna turn this into me ranting only about Safari. I think that the engineers on Safari are great, and they're doing the best they can do with the limitations that they're given by the structure they're in.

**Adam Stacoviak:** I think the reason why you got into this position though, with this "rant" as you said, is because we're speculating about the future possibilities of Wormhole, right? We got there by talking about the opportunities of files, and iOS, and that kind of thing, so that led us down that road of talking about the different ways you can utilize Wormhole on an Android device, install it as an app, and the features you get from that... Or the flipside, iOS. That's where I think we're at.

And any entrepreneur is gonna have some speculation about the future of the thing they're building, and Jerod's question to you was "Why are you doing this?" And then Nick and I asked you what's the long-term of Wormhole - is it gonna be Dropbox-like, is it gonna be drive-driven, so how are you going to do that technically. \[\00:38:44.02\] So I think these are all valid concerns, because someone like you who in my opinion seems so forward-thinking about the technologies that power the web, you're gonna wanna push the boundaries. And if you can't push the boundaries on one of those prevalent platforms out there, then you're gonna not do it. And that's not innovation.

**Feross Aboukhadijeh:** Yeah, it's definitely holding back innovation, that's for sure. I still have an iPhone, which I'm -- I don't know...

**Adam Stacoviak:** Reluctant about?

**Feross Aboukhadijeh:** Yeah, maybe I shouldn't -- I mean, it is the thing that makes me the saddest about it, is the browser. As someone who loves the web, I probably should just get an Android device. But I'm too hooked into the ecosystem that even after all that ranting, I still feel like I still have to have an iPhone, so... What does that tell you?

**Jerod Santo:** They got you right where they wanted you. \[laughter\]

**Nick Nisi:** I do think the WebKit engineers do care about the web, and I think that they are working on it... And it seems like more and more lately they seem pretty active on Twitter, talking about things, and being open, and being on podcasts... They were on a podcast for the Changelog, I think, a while back, which is good...

**Jerod Santo:** Yeah, we've had a couple of engineers on the show, and I had always been very impressed with them personally, both their intellect, their obviously knowledge of the space, and what seems to me to be sincere desire to make the web better. So that's always the --

**Nick Nisi:** \[40:02\] That desire boots up against the services revenue.

**Jerod Santo:** Yeah, it does. It totally does.

**Feross Aboukhadijeh:** Yeah. I don't think that it's the decisions of the team. To be fair, there is probably some difference between the way the WebKit team sees the role of the web. I think they're much more in the camp of it should be a document-viewer. Not like literally think it should be a document-viewer only, but they're more on that side than the Chrome team, which things it should be a super-powerful application platform that can access all the devices, sensors, and do all the things. So you see this in their decision to not implement the Bluetooth API, or various other very privileged APIs that Chrome and Edge are fine implementing. There is some philosophical difference there that I don't think is just about resources, to be fair.

**Break**: \[40:50\] to \[42:26\]

**Jerod Santo:** So we talked a little bit about how Wormhole works with regards to the sharing of the URL, the key being put in (I think it's called) the fragment identifier, after the fragment identifier and the URL... A little bit about how those things work... You mentioned it's peer-to-peer insofar as WebTorrent is involved, but can you break down -- give us all the boring details, like what technology, JavaScript libraries you're using, from the ground-up how does Wormhole work.

**Feross Aboukhadijeh:** Sure. So we're using a bunch of fun things to make it work. Let's see, where do I start though...? There's a lot of directions we could go.

**Nick Nisi:** Well, you're using TypeScript...

**Feross Aboukhadijeh:** Nah, I wish we were... \[laughter\] We actually might switch to it, because I'm on a team now with like two other people, and maybe even growing... By the way, we're hiring...

**Jerod Santo:** It sounds like a fun job.

**Feross Aboukhadijeh:** So yeah, it does help to have TypeScript in those kinds of environments, versus when you're just hacking by yourself. So I'm seriously considering it. So if you're familiar with WebTorrent, that's probably a good place to start, because that is the underpinnings of the way that the file transfer stuff works... So maybe I'll just quickly explain that for people who aren't familiar.

So when you use the WebTorrent library, this is an implementation of BitTorrent. The key idea about how that works is you take a file or a set of files and you wanna produce this torrent file, which is basically a metadata file. And what's in there is a list of the filenames, and then their hashes, effectively; a hash of each of the files is a way to think about it. And what's cool about that is that means now I can share this metadata file with people, and they can now accept file pieces from anybody, and then reconstruct them together on their computer, hash the file, and then compare it to the hash that they were expecting, and then if it's the same, then they know that they got the file they wanted. And they don't have to trust the person sending them the file.

\[44:22\] So we use that for the file transfer part of Wormhole. That means when you send that link out to somebody, that share link, they're actually downloading the file pieces from your browser and using the whole \[unintelligible 00:44:33.20\] bittorrent protocol under the hood. That means you get nice behavior swarming. So if you have 3-4 people trying to download at the same time, then the downloaders can actually share the partial file pieces with each other, and that all just comes for free from using WebTorrent. So that makes it faster. It means that you're not the bottleneck as the uploader, sending the same file five times to five people. You can send this piece to that person, another piece to this other person, and then they can share amongst themselves, which is another nice little performance benefit.

So that's WebTorrent... And then we layer on top the end-to-end encryption. So what we do is before we put the files into WebTorrent, before we create that torrent file, we have to end-to-end encrypt the file using a key that we generate on your device. So for that, we use the WebCrypto API, which is this built-in browser API that lets you do things like generate keys, make secure random numbers, hash things - all that stuff is just built into the browser. We implemented this streaming encryption, and that was based off of the Firefox Send design; we just sort of copied -- they made an RFC and explained how this thing works, and we sort of just said "Oh, that's great. That's exactly what we want." So we implemented the same RFC that we published. And it's streaming, which means that we don't need to have the entire files in memory in one big buffer in order to work on the file... So what we can do is we can actually read it in a little bit at a time from your drive, and then encrypt it as we go. So there's this huge pipeline that's going on.

So first we read it in from your disk, then we encrypt a piece of it, then we feed it into WebTorrent, which produces hashes of the data that it's consuming, and then in parallel, that entire pipeline is going up to the cloud and uploading to our storage systems as well... Because we want the link to work even if you close your browser, so we also store a copy of it for 24 hours so your link works. That's all happening in parallel. At the end of that you end up with this metadata file, this torrent file that describes what is in that share link. And then we encrypt that as well and upload that to the cloud.

So what the cloud sees is we have this set of encrypted files that you've uploaded to us, and then we have this metadata file that's also encrypted; that means that we can't see the file names, or even the sizes of any of the files, or anything like that. It's just all in this big blog. And that's basically what happens on the uploader's side. Any questions? \[laughs\]

**Jerod Santo:** I do have a question, but I'm not sure exactly how to ask it... You said that there's a pipeline, which I understand - take the file, read it in from the operating system; as you're getting the file read in, you're creating the torrent for it... I guess the order of operations is what I don't understand. You're doing three things - you're torrenting it, you're encrypting it, and you're uploading it to your cloud servers. You said those are in parallel?

**Adam Stacoviak:** Torrents first.

**Jerod Santo:** ...or what order is that?

**Feross Aboukhadijeh:** Well, first we have to encrypt it, and then after that we take the encrypted data that's coming out of that stream and we upload it to the cloud, and we feed it through a thing that creates a torrent file. So all that thing does is it just sort of reads the data in and then hashes it and produces this list of hashes. That's what I mean by creating the torrent. It's not actually sharing it with anybody, it's just producing the metadata file that describes what you're sharing.

**Jerod Santo:** And that torrent file isn't really ready for sharing until it has the entire manifest, right? It has to have all the information before it's actually useful.

**Feross Aboukhadijeh:** Yes. This is one limitation of torrents that -- we'll probably switch away from WebTorrent at some point, but for now it was the quickest way to get something working in a secure way... But that is one limitation that we have to deal with - a torrent is immutable, which means it can't change, which means all the files have to be read into it. And then when you're done, then it's sort of finalized, and you can't add files to it easily, you can't remove files from it. It is what it is... And if you wanna make even any change to it, all the hashes change and the whole thing has to change, which means you've gotta read everything in again. So it's not very good for modifying. That is one limitation of our design right now.

**Adam Stacoviak:** \[48:22\] I just have a side question to this, but why would you go through the encryption and then upload to your 24-hour hotseat so to speak, and then not actually webtorrent it first? Why wouldn't your cloud essentially be a client to the WebTorrent?

**Feross Aboukhadijeh:** Well, we could do that...

**Adam Stacoviak:** What's the limitations there? Is it simply just speed, or is it simply -- I just wonder what the reasoning is for that.

**Feross Aboukhadijeh:** Yeah, great question.

**Adam Stacoviak:** And then also, later on, does your long-term or your 24-hour storage act as a client of -- and I'm probably not speaking perfect WebTorrent terms, so correct me where that's necessary...

**Feross Aboukhadijeh:** That's fine.

**Adam Stacoviak:** ...but does that end up being one of the places that you pull from? So you said swarming... If you've got five people out there, does your 24-hour hotseat act as one of those people, or act as one of those endpoints?

**Feross Aboukhadijeh:** Yeah, it's great questions. Totally great questions. So the reason that we can't just have the cloud storage be a peer that downloads the files is that we're using Backblaze for our storage backend. They have this thing called Backblaze B2, which is kind of like Amazon S3; it's just a place to stash some file data... And we could put stuff into those buckets ourselves, but what we do for efficiency and also for cost reasons is we just give the client, the uploader, we give them a key that they can use to directly upload into Backblaze from their browser... So that prevents us being in the middle of that.

So they have a key that we give them that authorizes them to write into a specific bucket, a specific folder in our Backblaze storage, and they upload all the data into it directly from their browser. So for that reason it just has to use plain HTTP, because Backblaze doesn't understand torrents, so the client has to just upload it into there.

We could make it go through us, but why introduce extra steps? Why do we wanna have all that bandwidth going through us and have our bandwidth costs go even higher for no gain? So we just tell a client to do that.

And then your other question was on the downloader side, does the downloader treat this Backblaze cloud as yet another peer? And it does. So that uses this thing that torrents can do called a web seed, which is basically a peer that is an HTTP server. So it's not speaking the torrent protocol, it's just a server that has some files on it, but your torrent client can treat it as a peer. So it can be like "Oh, that's a peer that has everything." It has the whole file already torrented, because it's sitting on a server there. And then it can just treat it as yet another peer.

So maybe it gets some data from these peers, and then it sees "Oh, these peers are kind of slow. Let me go grab data from the server peer." It's a big hybrid model where it can get some from the server and some from the peers, depending on the network conditions that it's experiencing.

**Jerod Santo:** That's a pretty cool feature. So take us to the receiving end now... You went to wormhole.app, you put a file on there, you got your URL immediately... Let's say it's a 10-gig file, max file size. So you're sitting there, you're still uploading it, but you sent me that link right away. I go post that link into my browser... What do I see? "Stand by" or "Downloading in progress."

**Feross Aboukhadijeh:** Yeah, yeah, so the first thing is that the URL contains two pieces. It contains the room ID (is what we call it). It's just the ID for the files (the data that contains the files) \[51:46\] and then it contains that secret key that's not sent to the server. So you make a request to the server for that room ID, it tells you "Yeah, there's a room here, but I'm not gonna tell you anything about the room until you prove that you have the key."

\[52:00\] Even though everything, like I said, is end-to-end encrypted, you could imagine -- we could have designed it so like if you show up and you say "Hey, I know there's a room with this ID. Give me the files for it, please." We could have just said "Sure, here you go", because we know they're encrypted. We're not worried about your data getting out there.

We don't wanna even give the copy, even of the encrypted files, out to random people, so we add this extra layer of security where you as a downloader take the secret key that's in the URL up there, you take that and you derive a new key from it. So this is a way to sort of take a key \[52:28\] and make a sub-key, and -- how do I describe it...? Basically, all you need is that main key, and then you can always get to this sub-key. You can always deterministically produce the same sub-key. But given the sub-key, you can't go back to the master key. So what you do is --

**Jerod Santo:** The one-way hash kind of thing...

**Feross Aboukhadijeh:** ...yeah, you can think of it kind of like that, yeah. There's no way to tell that they're related either. They're completely unrelated, as far as the person looking at the two keys can tell. So then what you do with that is you show that to the server, and the server -- by the way, the uploader did this originally. The uploader produced the sub-key and told the server the sub-key, so now the downloader does the same thing - they produce the sub-key, and then they can show that to the server, and the server is like "Oh, you must have the master key, so I'll answer all your API requests." So you need that to do anything. We call it a reader token, because it sort of authorizes you to do all the -- you can read basically everything about the room if you can prove that you have that token or that sub-key.

So what that means is we're not gonna answer anyone's API requests unless they actually do have the true URL, but we also as a server we don't need the URL to know the key to know that you have the key.

**Jerod Santo:** Yeah. You get the room ID plus this sub-key. Is this formalized? Is this a thing that has a name, or is this something you all came up with?

**Feross Aboukhadijeh:** It's just called deriving a key from another key; I'm not sure if there's another name for it, but that's how we call it.

**Jerod Santo:** Okay. So I have my room ID, my derived key as the request... And if I don't have that derived key or it doesn't match, you're not gonna say anything to me... Like, you know, GTFO, or whatever.

**Feross Aboukhadijeh:** \[laughs\]

**Jerod Santo:** And if I have the sub-key, the uploader person - they had both the private key which is in the URL fragment, and they created the sub-key as well, and since those are deterministic, they're the same. But you can't go from the sub-key back to the master key, so you're still on the server side... All you know is "This is the person that is trusted." You don't know anything else, and you can't actually decrypt that information, even though I can, because I have the key.

**Feross Aboukhadijeh:** You have the master key. Yup, exactly.

**Jerod Santo:** Well, that's cool.

**Feross Aboukhadijeh:** Yup.

**Jerod Santo:** So let's say the file is not there yet though... So I have proven to you, "Hey, Feross, send me this URL. I've got the key right here, the sub-key" and you're like "Hey, this is the room, you've got the sub-key... What's up?" But the file is not ready. Is it just like \[unintelligible 00:54:50.00\] sleep for a second and check again, or what happens?

**Feross Aboukhadijeh:** Yeah, it's kind of like that, actually. I'm not even kidding. \[laughter\]

**Jerod Santo:** Because that's how I would do it.

**Feross Aboukhadijeh:** Yeah, it checks every five seconds to see if -- this is another limitation from using torrents that we're gonna work around once we switch to something that's custom... But right now, like I said, we need that full meta-data file, we need that torrent file in order to start doing anything, because that's just how torrents work. You need to kind of have that; it tells you how to make requests and how to validate that the file you've got back \[55:20\] is what you expected... So the downloader is sitting there, waiting for that encryption process to finish on the uploader's side. So it needs to fully read everything and encrypt it. And that shouldn't take that long. It takes maybe a minute at most if it's ten gigs... So it's not too bad. But during that time that the downloader is just sitting there waiting for -- the nice thing is the link works; they can click the link. They don't have to worry about "Oh, the link isn't ready" or something. The link is ready, it's just - the browser is gonna sit there, waiting for that torrent file.

\[55:49\] Once it's available, then the server provides it to them, and then they decrypt it locally, using the master key that they have... And now they can look inside and be like "Oh, these are the files I'm gonna download." So at that point we can show the user in the UI the list of files they're gonna be able to download. At that point, they can also start to connect to the sender using WebTorrent. So it's a peer-to-peer connection; they can connect directly to them and start to download stuff. Meanwhile, the uploader is still maybe uploading stuff into the cloud, but who cares, because we're connected directly to the person with the files and we can just get whatever we want right away.

**Adam Stacoviak:** The cloud is just the backup in that case, right? It's just meant to be -- once it's fully uploaded, if that peer goes down, then the cloud becomes the primary.

**Feross Aboukhadijeh:** Exactly, yeah. And then all the requests that the downloader makes from the seeder are all for encrypted data, so the data needs to be decrypted as it comes out of the torrent. So everything inside there is also encrypted, so you've gotta basically feed it through that -- there's a decryption stream that decrypts the data. And we support decrypting at any point too, which is really cool. That means that we can have a video tag on a page, and if you seek halfway through the video, that causes WebTorrent to realize "Oh, we don't need the pieces at the beginning. We need the pieces at the middle." And your browser will make requests for those pieces that it knows that the video tag needs \[57:11\] and it will get the encrypted data, and then encrypted data \[57:14\] is halfway through the encrypted file, and yet we can still figure out how to decrypt that based on how it's designed.

**Adam Stacoviak:** Interesting.

**Feross Aboukhadijeh:** Yeah. So you decrypt it from the middle. Because sometimes some encryption doesn't work that way; some encryption is just --

**Jerod Santo:** Front to back, yeah.

**Feross Aboukhadijeh:** You start at the beginning. You can't jump into the middle. But we can jump into the middle, and then decrypt it, and then play it back for you. And that's all done using a service worker, which is another kind of cool trick. So basically, what we do is we make like a video tag and make the source of it, instead of being like an HTTP URL for an actual server on the internet, we make it a specific URL that we know that our service worker is gonna intercept... And the server worker sees that and it's like "Ah, that's a request for some data from this torrent", so it intercepts it and then it basically provides exactly the range that the video tag is asking for... So that means that you can sort of seek around and it'll just magically make the right range requests, the service worker will see those ranges, it'll ask the main page -- it'll say "WebTorrent, give me these ranges", and then WebTorrent either will use the cloud or use the peers or whatever and get those ranges, provide it back to the service worker, and the service worker feeds it back into the video tag.

**Adam Stacoviak:** This is crazy.

**Feross Aboukhadijeh:** Yeah. \[laughs\]

**Jerod Santo:** So the service worker is like a proxy between your video element and your HTML, and your WebTorrent.

**Feross Aboukhadijeh:** Correct.

**Jerod Santo:** Got you.

**Feross Aboukhadijeh:** Because you see, the video tag is designed -- there's two ways you can use the video tag. You either provide an HTTP URL - that's the normal way, and you've probably used it before... And the other way is this thing that it was designed for YouTube-style adaptive streaming... Do you know what adaptive streaming is? It's like, when the video quality changes, and you're watching Netflix and then suddenly it lowers the quality or it raises the quality - that's a thing that these video streaming services needed, so they made a special API where you can sort of... If you're Netflix, you can sort of monitor how the download is going -- network doesn't just do "video source = whatever TV show". It doesn't just do "video source = some URL" and that's the whole episode of whatever you're watching. They do something fancier. What they do is they use the Fetch API to fetch a little chunk of the video, and then they monitor the speed of that... "Oh, is that going well? Is that slow or is that fast?" If it's going fast, then they can be like "Alright, the next piece we ask is gonna be higher quality, because this person's internet is fast enough. We can actually ask for a better quality piece for the next five seconds of this video."

So then they ask for a better quality one, and then they need a way for the video tag to sort of stitch the different qualities together. This is called a media source API, and it's just designed to let these services basically do this thing where you can kind of take different mp4 files and sort of make them seamlessly play as if they were one, even though the details of the files are changing, the resolution is changing, the quality is changing...

\[01:00:01.21\] So that's one way we could do it. We could have done that, and use that same API to get these blobs of video data and then feed them into the video tag with an API, where we just say "Here's the next piece, here's the next piece..." But the problem with that API is that it expects the files to be in a very specific format. You have to produce the mp4 files in a very specific way, with specific options that you pass to FFmpeg or whatever you're using to make your videos... And most files that you find on the internet, like random videos that run on your computer, are not gonna be designed in this specific way for streaming... So that means that if we try to use this approach, it kind of fails.

So that's why what we need to do is we wanna use the first approach, where we just do "video source =" and then an HTTP URL, because then the browser can just sort of treat it like any other file that it finds on the internet, it can just sort of make requests for different parts of it, and then all we've gotta do is be the service worker and just intercept those requests and be like "Here's the data you need." And then we don't have to do anything special - we don't have to convert your file, we don't have to process it, we don't have to tell you we can't play that kind of file... So we can support anything the video tag supports, even like mkv's and weird .mov, .whatever, all the different extensions that the video tag supports. We don't have to have special code to process different types of files, or anything like that.

**Nick Nisi:** That's cool. So that service worker approach lets you treat it like a URL, but you're still doing the client-side decryption without you ever having to know any of the metadata about the file that's actually being transferred.

**Feross Aboukhadijeh:** Yes, correct.

**Nick Nisi:** Okay.

**Feross Aboukhadijeh:** And we do it in a way where the URL that's requested is a random ID. The way it works is the video tag says like /downloadstream or whatever thing that we're gonna intercept, / and then a random ID. And the service worker sees that request and then it asks all the open Wormhole tabs, it says "Which one of you was responsible for this URL request, this random ID?" and then whichever tab was responsible responds and says "Oh, I was. And here's the data." And what's cool about that is if for some reason the service worker fails and it doesn't intercept that request, if somehow that requests makes it to our server, which we really don't want that to happen, but if it does, the server is not gonna have the file data anyway, because the URL is gonna 404, because it's a fake URL, designed for the service worker just to intercept it... But what's cool is even if it makes it to the server, the URL just contains a random ID that means nothing. So it doesn't leak your file name, it doesn't leak anything. It's just like "Oh, someone's service worker failed." This doesn't happen often, but it can, and we just wanna design it so that even in the failure mode we don't learn anything about your files.

Anyway, that's probably a lot of stuff... Does that kind of make sense about how it all fits together?

**Jerod Santo:** Yeah, man. It's fascinating. The only thing I'm over here wishing is - I wish I could just look at the source code and just grok it for myself, but... You've gone partially open source with this one. I know you have some open source stuff on your Socket.dev org. It looks like the wormhole-crypto is out there, and some other stuff you had to build for this... But maybe someday; maybe someday we'll have a peek at the source code. Until then, we'll just have to take your word for it...

**Feross Aboukhadijeh:** Yeah, that is the part I wish I could give you a better answer for right now... Okay, here's the thing - I've open sourced everything I've ever worked on in my entire life, basically. It's all on my GitHub. And with this project, we wanted to make sure that it could be sustainable from the beginning... Because you know, when you're hosting tons of files - we're paying bills to Backblaze for this stuff, we're paying for servers... And if we grow it to be ten times bigger, that's gonna start to be a really meaningful amount of money that we're paying to host the service. So we need to find some way to charge for something in order for this to be sustainable. So we're working on a pro plan right now that you'll be able to pay for, that'll give you extra features, like larger files, customizable expiration times, so you could change it to be like seven days, or a month, instead of just 24 hours... Stuff like that. And eventually, we'll have maybe the Drive features as well, and then you'll be able to store all your files, forever.

\[01:04:02.20\] I'm just not sure yet if open sourcing it would somehow be a problem for the business. I don't want someone to just make a clone of it and then say -- I don't know, it somehow causes the whole thing to not make sense, and then we have to stop working on it... So it's just at this stage where -- you know, you can't un-open source something, so just erring on the side of... I open source the cryptography code so that the security community could take a look at it and make sure that there's no flaws... And we have a bug bounty program for that. So if you find any problems, you can make up to $1,000 finding bugs in that. And same thing with the Wormhole website itself - if you identify vulnerabilities in the Wormhole website, you can also make $1,000.

So that's the place we're at now. I honestly think we might end up just open sourcing it, it's just that I just wanted to be a little bit thoughtful about it and not just do it that way from day one... I hope that makes sense. I just really wanna make sure that it's a thing that we can keep doing going forward and not have this be like some kind of strategic mistake from --

**Adam Stacoviak:** I think you're playing it smart, honestly. I don't think you should feel bad about not open sourcing it. Jerod is a developer, and curiosity is what's asking for that; less about "Hey, this should be..."

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Because I think until you know "This is the secret sauce", it should just be secret sauce for you to figure that out... Because until you get the right partners involved... Because if I haven't said it yet, I believe this thing could be a big thing, and I think it's a wise move to just ensure that the source code needs to be where it's at currently, so that any future investment, anything that could happen for the company can happen without being hindered.

And then if it makes sense to be community-driven and open source, then that's still a vehicle you can drive, because you've been there before. It's not un-open to you, because you didn't open the door. So I think it's a wise move.

**Feross Aboukhadijeh:** Thanks. Yeah, I mean - the only thing is I really wish that we could show people the code so they could have even more assurances that it's doing what we say it is. That's the part that I think we're gonna try to solve by doing an audit; we're gonna hire an actual team of people who know what they're doing, who do security audits for a living, to take a look at the code.

This is also what 1Password does, because they're also closed source, and they're security software, so people need to know that the design -- well, they did open source their design docs, which we've also done, to some extent. We have information on our website about the design of the crypto. All the things I just talked about are all on the website. So the design is there, but the actual implementation itself - the best we can do for now is just to audit it, just like 1Password does.

**Adam Stacoviak:** Well, you have told us your entire secrets here on the show; you've told us exactly how it works, the entire workflow. It's a matter of having the smarts and the technology behind the scenes to put that together yourself... If somebody wanted to clone you, for example. So the idea is freely shared here today.

**Feross Aboukhadijeh:** Yup, that's true. That is totally true.

**Jerod Santo:** Well, ideas are darn near worthless, it's all about execution...

**Adam Stacoviak:** That's right.

**Jerod Santo:** \[01:06:48.19\] So you've got a good headstart, anybody executing on this... It's very technically impressive. I think as an application, you can't see any of that stuff. So that's maybe the catch-22 with simple products - it's so simple for the end user, and that's beautiful; that's your goal, right? But then some of the stuff that's impressive, it's just like under the covers. So I super-enjoyed you coming and sharing those things with us, because we are curious and interested and impressed with some of the hacks and the solutions that you've put together to get this thing done. I definitely think it could be big as well. I'm looking forward to where you take it from here.

This is not like your other side-projects, right? This is like a company. Because you had some side-projects, and you said "This is a side project." The Annoying Website is not something that you're ever trying to monetize, I don't think... Maybe as ransomware, you know? Get your computer back... \[laughter\]

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** But you're taking this one seriously, so I think that is wise as well, to take it slow, make your moves strategically... And like you said, you can't undo the open source; you can open source it at any point, but you can't un-open source it once it's out there. It's like putting toothpaste back into the bottle. It doesn't work.

**Nick Nisi:** Yeah. And from a tech standpoint, it's been fascinating to hear about all of these hurdles that you've gone through to keep it web-first, and these really creative solutions for doing that. Things like the service worker, and crypto on the client side, and doing all of that, and storing the key in the -- what did you call it, Jerod? The fragment part?

**Jerod Santo:** I called it the fragment identifier. I'm not sure if that's the technical term, but it's close.

**Feross Aboukhadijeh:** I think it is.

**Jerod Santo:** Okay.

**Nick Nisi:** Just really intuitive and really appreciative that you're showing the limits -- not showing the limits, but you're showing the capabilities of the web, without having to just say "Screw it" and go with a native app, or anything like that. So that's really cool.

**Jerod Santo:** You're making Steve Jobs proud, with a really sweet solution. \[laughter\]

**Adam Stacoviak:** You know, I can really appreciate too, Feross, that you've been able to build upon what you've already put out there before. You're not starting from zero with this one. You're sort of layering on the things you've already given out there freely in open source, and you're also layering on your personal knowledge base to build this next big thing... I think it's really admirable, so congrats on that.

**Feross Aboukhadijeh:** Thanks. Yeah, I'm working with two really cool people to build it out. So it's much more of a team effort than other things I've worked on in the past... Because it's a real company. The two people I'm working with are John and Alex, and they're both really great. It's fun to work, it's fun to be on a team and have another level of seriousness to a project, and have it be a company instead of just a side-project. So that's been a really nice change of pace, too.

**Jerod Santo:** So shout-out to John and Alex. Thanks for letting Feross skip stand-up today, so he could be here with us... \[laughter\]

**Adam Stacoviak:** That's right.

**Jerod Santo:** That's all of our time... In fact, we've probably spent more time than we usually do, but there's just so much to dig into... Plus, you can't stop a good Apple rant. Let it happen. Just let it happen. So we hope you all enjoyed that as well. Wormhole.app is the website; Feross is hiring... Where is the contact there for people who are interested in getting involved maybe from a hiring perspective? Where do they do?

**Feross Aboukhadijeh:** So the company is called Socket, and our website is Socket.dev. So if you go to Socket.dev, you can see there's an email there for hiring... We're looking for JavaScript and security experts. So if you're a JavaScript wizard or a security wizard... The thing we've put on the website is "If you can make computers do things they are not supposed to do, then get in touch..."

**Jerod Santo:** There you go.

**Feross Aboukhadijeh:** So that's what we're looking for.

**Jerod Santo:** It sounds like a fun job to me. Adam, thanks for hanging out with us. Nick, it's always a pleasure. That's JS Party for this week, and we'll talk to you all next time...
