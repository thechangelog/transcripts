**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode \#237, and today we're talking to Chris Lamb about reproducible builds and the importance of having a verifiable path from source code to compiled binary. We talked about all the details of the project, what it means to have reproducible builds, the challenges faced when implementing these best practices and the inherent security you gain from using them.

We've got three sponsors today - GoCD, Linode and our friends at Flatiron School.

**Break:** \[\\00:01:08.15\]

**Adam Stacoviak:** Alright, we're back. We've got Chris Lamb joining us today, Jerod. This show is one of those shows you have to listen to if you care about software security and making sure what your source code is matches the thing you actually embedded into your device or whatever you ship, that binary you put out there.

This came from a ping repo issue actually presented by Chris... What do you think?

**Jerod Santo:** Yeah, reproducible builds is the topic of the day and this show was very much Chris' idea, so you and I can't take any credit or any blame if there is any to assign... We'll see how it goes. Chris, pitch this to us. An interesting topic and one that you think more people should know about. First of all, thanks so much for joining us on the Changelog.

**Chris Lamb:** No problem at all, very nice of you to have me on here.

**Jerod Santo:** In the spirit of getting to know our guest a little bit before we hop into reproducible builds and why you believe they're so important, we like to get people's origin stories and kind of find out where they're coming from. Can you tell us how you got into software and how you got to where you are today?

**Chris Lamb:** Well, my software journey starts pretty early - I was brought up in the UK, so in primary school... I may have been around 7 or 8 when I started experimenting with programming on the school computers. But it wasn't until a friend of my mom's, a technical guy, who was clearing out his hacker shed of old equipment, and he was gonna take it down to the local place when you could get rid of all computers and stuff like that. But on the way, he unfortunately had a small car accident, and the computer that was on the passenger seat went right through the windscreen into the field. Police came etc. etc. and they brought all the equipment back to his house, they just put it all back in his car, whatever... He wasn't gonna continue on to "the tip", as we call it, for some reason.

Anyway, he went back, and his computer that was meant to be broken and old - he was this kind of person that, you know, "It would be absolutely magical if this computer now works", so he plugged it in and flipped the on switch, and lo and behold, for some reason, this car crash had actually resurrected this computer from the dead, and he took it as a sign, he could't throw it out then and, eventually it was basically in the way and being a door stop, so he manage to offload it via my mom onto me.

\[04:10\] It was this extremely old 8088 IBM computer. It was dreadfully old, even for the time I got it. It had no games or anything on it, it just had a copy of Turbo Pascal, and every tenth reboot, for some reason, it would revert to the BASIC programming language; there was a ROM built into the motherboard that for some reason if the main operating system didn't boot, it'd revert to a BASIC environment.

So I got some books out of the library and started programming my own BASIC things like that. Then eventually, on from there, I just sort of steady stayed up, moved into some Perl programming I guess, and by university I was programming Python a lot, and C, C++, and the usual JAVA, as university courses go.

After university, I joined a startup in London, and did that for two years. We were acquired, and because we seemed to work together quite well as a team, we decided to stick together and we did a Ycombinator, and I was with that company for four years.

**Adam Stacoviak:** Which one was that?

**Chris Lamb:** This was a company called Thread.com. It's still a going concern, really great guys, I just thought I'd had enough of London by then, and wanted a new challenge, and this freelance, digital nomad lifestyle was calling out to me, so I took a jump two feet into that and that's what I've been doing for the last couple of years, doing freelance projects, doing a lot of Debian work (the operating system Debian) and all sorts of really interesting, varied projects all around the world. It's been really fun.

**Adam Stacoviak:** Wow, digital nomad... That's a lot of fun.

**Chris Lamb:** Well, it's a pretty pretentious title, but yeah... \[laughter\]

**Adam Stacoviak:** Of course, I mean... It's the dream, right?

**Jerod Santo:** You're living a dream.

**Adam Stacoviak:** ...to travel the world and write code and/or seek out your personal hobbies and fun stuff like that, in all places. That's a lot of fun.

**Chris Lamb:** Yeah, it is really rewarding. I could recommend trying it, at least one time in your life.

**Jerod Santo:** And in fact you're calling in today from New Zealand, so quite a way.

**Chris Lamb:** That's right, I'm calling from Auckland, New Zealand. I'm looking over a beautiful bay right now. It's a little chilly here, but it'll warm up.

**Adam Stacoviak:** Going back to that origins story of yours, I can't help but notice that every tenth boot went back to BASIC; I was just thinking, Jerod, how much fun that might be to be having a computer roulette, so to speak...? What will that program today be, because of the computer? What will it force me to do? That's interesting, to some degree. I wonder if all computers did that... You'd boot your Mac today, and it's not a Mac, it's Windows, or something.

**Chris Lamb:** That'd be great. Or it goes the other way, where instead of reverting to BASIC, it says, "No, sorry today chaps, you can only program in Haskell. Noooo....!

**Adam Stacoviak:** So the origin story - that's a fun piece there. What got you into open source? Where did that happen for you?

**Chris Lamb:** Somewhere along the line I came across a book about Slackware Linux, and it came with a CD and things like that... This is before the internet was of any reasonable speed, so you'd pretty much have to send off all Linux distributions. All my computers were always very old, so I was never really playing or getting distracted by gaming, and things like that, so I played around with the Slackware thing, but even that was very old. There was a company in the UK called the Linux Emporium, and if you sent them five dollars' worth, they'd send you the latest Red Hat CDs, seven discs or something ridiculous.

\[07:58\] I'd heard of Red Hat - reputable, blah-blah-blah... But I sent off for that, and they also said, "Oh, we could include some free, extra CDs if you want." I was like, "Yeah, sure. Whatever. I'm 13, I have no money, so whatever... Send me as much free stuff as you like." Anyway, I went to install this Red Hat, and it said, "Sorry, you need at least 12 MB of RAM to install Red Hat", and I think I only had 8 on this rather lackluster machine. I got a bit annoyed, so I reached for one of these free CDs, which again, were old for the time; they were free because they were the previous releases. One of them was a very old release of Debian, and their whole operating system just completely clicked with me. Installing stuff was pretty simple, installing the operating system itself, and I ended up using that for many years just as a user, running my own little web server between me and my cupboard... Which was like, "Oh, this is amazing." \[laughter\]

Well, I didn't have internet, so I was like, "Wow, I can type in http:\\\\192.168.0.2".

**Jerod Santo:** But what would be on your web server that you could possibly wanna -- like, would you write up there and then read it later? Or what kind of stuff would you even access to your own house?

**Chris Lamb:** I don't really know that I wrote then, because that was in my own house, you're quite right. I think it was copies of software I'd seen on the internet at school... The Perl-based guestbooks, they were all the rage at the time, that might be aging where I was.

Also, it was the beginning time of those short URL redirectors. This is when you had domain names like i.m... Basically a free redirection service like i.am.yourname, and it would redirect me. So I was writing Perl versions of those in CGI script.

**Jerod Santo:** The good old days...

**Chris Lamb:** Yeah, the good old days.

**Jerod Santo:** I know that you're quite a prolific open source -- you have lots of open source code. You've been working on Django quite a bit, you've been a Debian package maintainer, I believe, or at least involved in the Debian project since 2008. On your GitHub you have 216 repositories and 129 of those are source repositories, so you actually began all of these.

**Chris Lamb:** Yes.

**Jerod Santo:** What's the deal, do you just code all day and all night, or how do you get so many things going?

**Chris Lamb:** Well, a lot of these things are spinoffs from my projects, or perhaps some freelance work as well. A lot of the Django tools I've done have been like, "In the codebase, this should be modular anyway, and as it's a completely reusable component, let's just remove it out there, and then it can become a more generic abstract, other people can contribute to it etc." And it's good to share back, because etc. etc. That speaks to most of the Django ones.

The other projects, a lot of them are just scratching my own itch. I was looking for a new bike, and there's a sort of Craigslist in London called Gumtree; I knew exactly what size and what make I wanted, so I made a script to poll at every five minutes and to send me an email when something that matched my specifications arrived. So I was ringing up these people within five minutes of their advert going live. "Oh yes, is the bike still available?" "I've just posted it, mate... How did you get it so quickly?"

So a lot of these are scratching my own itch. Some of them people use, some of them people don't use, but I find putting the code out there keeps myself honest, and it also makes me follow through on projects a little bit better, because there's some sort of vague accountability if you're putting it on GitHub; not much, because no one's looking over your shoulder, but that's the basic idea.

**Adam Stacoviak:** \[12:04\] I wonder if everybody has the same -- I don't know how to describe it, but the fact that you do some freelance work (or you've done some freelance work over your career) and instead of simply writing it into that codebase that you're writing it into, you think in a modular way and you think about the community... I wonder if that's a common thought among developers... If they need to hear something like your story to think, "I should do that, too. I'm writing software for somebody. If I could bake that into my contract with them, like hey, if there's an opportunity for me to open source a module - obviously, I'll disclose that to you", but baking that into the ability to be a freelancer and actually give back to open source... I wonder if it's common knowledge to do that, or it's a common thing to do.

**Jerod Santo:** I think some of it depends on maybe your attitude and your outlook. From my own personal perspective, I've always felt like I should only open source the things that I think are great or useful or polished, and that always leads me to not open source anything.

**Adam Stacoviak:** The impostor syndrome, basically.

**Jerod Santo:** It's not really impostor syndrome, it's more like non-valuable -- it's not like I don't belong here, it's just like "Who would ever wanna use this?"

**Adam Stacoviak:** That's impostor syndrome.

**Jerod Santo:** I don't know if it is.

**Adam Stacoviak:** It's an edge case of it.

**Jerod Santo:** It doesn't really feel like "I don't belong here", it's just like... Maybe I just code for myself. So just to compare with you, Chris - just the other day I was writing a little script that was very similar to your bike script that would check every five minutes, only it's a cigar-bidding website; anyways, I like cigars, so I'm just writing this thing that's helping me get cigars at good prices, and I never even thought once to open source that. It will probably never leave my hard drive. But you, on the other hand, you're like "Oh, I'm gonna put this up on GitHub."

**Chris Lamb:** Yeah. I think it also immediately solves the "Where do I put this file?" as well.

**Jerod Santo:** \[laughs\] Good point.

**Chris Lamb:** Do I lose it in my random directory structure? If it's on GitHub, then it's kind of a backup, right? If you squint, it's a backup.

**Jerod Santo:** Right.

**Adam Stacoviak:** I hear you say, Jerod, "It's on my hard drive" where like if your hard drive dies today, Chris's GitHub hard drive does not.

**Jerod Santo:** Right.

**Adam Stacoviak:** And even if maybe somebody doesn't find it useful or even desire to fork it or contribute, still yet, like Chris said, there's a backup there. Worst-case-scenario somebody else is like, "Hey, that's a really awesome idea. I love cigars, too" and now you've got a new buddy.

**Jerod Santo:** Sure. And also, it uses a mechanized library and it logs in; it does a few things where if you would like to automate some things on the web, you could look at that little script that to me doesn't seem of much value and you could say, "Hm, here's how you might do that" and you could tweak it to your own use. It's similar to - maybe I could take your bike script and apply it to tricycles, or something. I don't know why I came up with that example, but... \[laughs\]

So now I'm talking myself into, "I should open source some more stuff", basically. We should all just be -- or probably sometimes we're just maybe heaving crap out there for other people to sift through, adding more noise to the ecosystem.

**Adam Stacoviak:** I think there's levels to open source. There's infrastructure open source, which is "important and useful", and then there's other things that are sort of like tinker tools, that are just embrace the inner kid in us, the playful manner, and there's the side of that playful manner that helps you get into the state of flow and helps you go beyond simply learning, and it's like now you actually absorb what you're doing, so it kind of brings up these different attitudes in the developer behind the code and those who interact with it. I think there's room for that. I don't think it should all just be so serious.

**Jerod Santo:** \[15:55\] Sure. In fact, shoutout to Cody Pearson who was our designer on Changelog.com, the frontender. He has this idea, which I'm sure everybody's had this idea, but he brought it to my attention that GitHub should have tags - arbitrary tags that you can assign to your own repos in order to provide context. You could tag something \#satire if it's a joke, or you could say "This is a one-off", or you could have all these different tags that would basically say, "Look, this was me messing around. It's not a serious project." The problem with tags is they're so arbitrary.

Point being is if we could classify our repos a little bit better in public, it might help. What do you guys think about that?

**Chris Lamb:** I think that would be really good, because then a lot of people wouldn't be making these decisions about that gray are of "Well, should I put it out there? It's probably not gonna be useful..." They'll just put it out there by default, not having to think about it; you can just shove one of your tags on it, saying "Yeah, this is a bit of a toy. It probably doesn't even work. It's broken now", but it certainly has more value out there than being on your hard drive; then it will eventually die and it'll get lost.

**Jerod Santo:** Yeah, absolutely. Well, let's get into reproducible builds. Give us the - I don't wanna call it an elevator pitch because it's not a business, but it's a concept, a best practice... It's something that, Chris, you think people should know about and do; it's also something you've been giving sessions on, you spoke at Linux Conf in Australia recently, which is kind of why you're in the New Zealand area.

So give us quickly an understanding of what reproducible builds is, and then we'll come back from the break and we'll dive into it.

**Chris Lamb:** Sure. Reproducible builds are a set of practices and a philosophy, and it's all designed to ensure that there's a verifiable path from the source code and the binaries that are being run on your machine. The basic problem is that also you can inspect the source code of free software - most Linux distributions, Android etc. provide pre-compiled binary packages, so you needed a way of being able to correlate the binary that's being run on your machine with the original source code. This is particularly important in the modern era, because there's incentives to crack build infrastructure. If you want to, you can go off to a lot of users by attacking the developers, and if you can get some malware into a developer's machine, you can infect all of their users in one go.

**Adam Stacoviak:** I've never really considered that part of it, Jerod, when we were doing the pre-call... The attack on the actual developers. I was thinking just simply the source code in the binary that gets put on whatever and runs, and how that gets circumvented, not the developer's machine or themselves.

**Chris Lamb:** Indeed, and there's a psychological angle to that, as well. I could hack a developer's laptop, for example, without their knowledge, but I also I could come around their house with a baseball bat. It's pretty crude, but "Please include this backdoor in your software" or blackmail, or things like that.

All of these things protect developers from that happening. It will be of no value to threaten a developer with such things, because anything they would do would be caught by the rest of the community.

**Jerod Santo:** Well, let's push the pause button real quick, and on the other side of the break we'll talk more about reproducible builds, why they're important, who's working on them, and what Chris thinks everybody should know and take away. We'll be right back.

**Break:** \[\\00:19:30.17\]

**Adam Stacoviak:** Alright, we are back with Chris Lamb, talking about reproducible builds. Chris, we gave it a definition before the break. Like we said in the intro, you opened up this idea of saying more people need to understand this as something that's important for various reasons. Can you reiterate a little bit exactly what reproducible builds is and then again why they're so important? Then we'll dive in from there.

**Chris Lamb:** Sure, no problem. So this isn't about reliable builds or repeatable builds or anything along those kinds of lines. It's really about ensuring that there is this connection, that a user or a developer can confirm that the binaries that they're running on their system correspond to the source code they're expecting to be run on their computer.

If you kind of wind history back to Richard Stallman's early ideas about being able to run software on your own computer, whilst you can get the source code or a free software operating system etc., most of these distributions are providing binary packages to you that are being compiled by someone else, or different build forms, and it's really important that no inadvertent, malevolent or accidental changes have been introduced during that code path.

There was an example given a few years ago of an OpenSSH binary that differed just by one-bit of one byte, which changed a great than or less than comparison to just a greater than, and just that one bit meant that you could have a root exploit. If you run it through a diff tool, you'd only see that one bit change, yet one would be hopefully secure and one would be hopelessly insecure with the backdooring. Reproducible builds prevent these changes being added behind your back, as a user.

**Adam Stacoviak:** At what level does the reproducible build take place? You've got your list of who's involved and it involves various levels of Linux, Bitcoin, things like that - is it us trusting them to say they adhere to reproducible builds and that's what gives us faith and trust? Or is it at a different level?

**Chris Lamb:** \[23:56\] I think it's on a different level. It's sort of a community set of tool practices and things like that. If you jump into the details, perhaps a reproducible build can be quite a misleading term. Code provenance might be a better way of phrasing it. The way we use the reproducibility is that we ensure that a compilation of any piece of software always has identical results. That means if you're on GCC on a C file, you get an ELF binary at the end, and if you rerun that compilation process, you'd get the exact same ELF binary - the MD5, a SHA-1 checksum would be identical.

Then what happens is that you ask multiple other parties to do their own builds of the same source code, and then you get together - hopefully electronically - and compare your results. If I got the result 1234 - assuming that's the checksum - and you got 1234 and everyone else got 1234, we can pretty much agree that if you compile the source code, you should expect this binary.

If someone came along saying, "Oh, I get 1235", you would have an inkling that something was different about his build environment. He could have been hacked, he could have something breaking his compiler, things like that - basically, there's something fishy going on that warrants further investigation. That's where the reproducibility comes from - the ensuring that everyone gets the same result is where the word "reproduced" comes in. Someone can reproduce your build, that's where that verb gets added there.

**Jerod Santo:** Hasn't it been for a very long time that when package managers or anybody who's precompiling binaries and releasing them publishes their checksums alongside the downloads, so that you can download the file and then run your checksum and make sure it matches theirs? Is that basically what you're talking about, or this is just another level of saying, "Okay, well that was two computers. We're gonna do it on thousands, and make sure that it's always the same"?

**Chris Lamb:** Yes, pretty much. I think when a developer has a checksum extra file, if it's just a SHA-1 checksum, for example, that's typically only to ensure that an end user can validate where the download completed successfully. For a very large ISO image, it's very useful to say "Oh yes, it did download correctly." So I think that's a different intention there, but you're right... If you had a hundred different checksums that people have provided, it is pretty much like that - "I built this piece of software, and I got this checksum", and then multiple people do the same thing.

It doesn't provide any authenticity, so you would need to pair that checksum with, for example, a GPG or PGP signature to sign that binary, to say that "I, Chris Lamb, generated this binary." So you need to be very wary about what these checksums are actually claiming about the source code.

**Jerod Santo:** Yeah, and just to explain it - and you can help me if I don't have it correct, but I think I'll lay out... In terms of the checksumming - a checksum is a one-way hash that's run on the binary.

**Chris Lamb:** That's right, yeah.

**Jerod Santo:** It will always produce the exact same fingerprint on the other side. The problem with that, especially as cryptographic algorithms get torn down over time, is that while that exact same binary will always produce the exact same checksum, depending on your algorithm, there are other binaries that can also produce that exact same checksum, and we would call them hash collisions. So that's why it's not giving you the level of confidence that it's secure; it's simply a tool that you can use, as you said, to say "Okay, I did get the file all the way downloaded. It's not corrupted, there's no issues."

\[27:55\] So while people think that those checksums are giving us some sort of security confidence, they actually aren't. Is that fair?

**Chris Lamb:** That would be fair, yes. But you can immediately make them a little more secure by providing multiple checksums, particularly from different families of cryptographic algorithms. The advice for years has been to stop using MD5, and things like that. And if you provide multiple SHA-1, SHA-256 checksums, you can start to be pretty confident that your download completed successfully, and things like that.

**Jerod Santo:** So give us the doomsday scenario... We all go away from this conversation thinking, "Well, Chris has an interesting point about this reproducible builds thing, but I'm not convinced. I don't care. Us as the community, we don't care." We know that's not the case, because we have the Core Infrastructure Initiative that's supporting this, and lots of distributions and a lot of people do care, but let's say that we just don't get it done and we don't have reproducible builds... What's the worst thing that could possibly happen in terms of hacks or security problems? Use your imagination... If we can't have this guarantee.

**Chris Lamb:** Well, one advantage is I don't have to use my imagination; some of them already happened, although in small isolation. For example, someone used social engineering to offer a backdoored iOS software development kit for download; or maybe they bought a Google ad that looked like the "Download here" - that kind of thing. So a whole bunch of developers downloaded this, and it worked completely like the normal iOS SDK, except it would replace their adverts (any adverts that the developer added) with the attackers adverts. The idea was just to make money.

So these developers making their iOS apps - they were happily making them, brilliant and fine, and then they went to upload them to the Apple Store and they signed them. So the signing process is completely accepted, Apple said, "Yes, this is you. The signing stuff checks out absolutely fine", but because their software development kit was backdoored, at the very last moment it would just simply replace the adverts with the ones from the attacker, and they only really noticed when they weren't really getting any ad revenue back.

But you can quickly imagine what would happen if the code wasn't necessarily to just replace adverts, which sort of sounds a little bit harmful, \[unintelligible 00:30:29.07\] but what if it was sending your address book, or things like that? The original developer would swear blind they're doing nothing wrong, and from their point of view they are innocent - apart from perhaps some rather lackadaisical security on their part, but you wouldn't really know who to point the finger at.

That's pretty much the worst case, where you have no idea who these attackers are, you have no idea where this software is going; it sort of seems to bypass a lot of security features that were put in place, like the signing, which is entirely designed to prevent arbitrary code being uploaded to these repositories, and things like that. That's pretty much the doomsday scenario.

Another thing that makes reproducible builds quite salient in modern times is that some of the Snowden revelations refer to using backdoored compilers in a similar way in order to infect machines, and things like that. This is something that the NSA -- we know for certain they've been looking at it, because of some documents released via Edward Snowden.

So yes, the doomsday is sort of here already in a sense, but we just don't really know how pervasive it is.

**Jerod Santo:** \[31:52\] It is particularly insidious that you're not coercing - you don't have a bad actor... The developer doesn't have to be the bad actor if you can infect the developer tools or the developer pipeline in any way. Then at the point that the attack is successful, like you said, it's very difficult to trace back to the original threat vector when the developer is ignorant of anything going wrong, and they're usually the one to blame.

**Adam Stacoviak:** Yeah. That's an interesting story, that you can do that with the iOS SDK, and do something, like you had said, so harmless, but it could have been something so harmful, like an address book or bigger exploits, or whatever... But that actually takes place. We all, day-to-day utilize some sort of software, whether it's open source or not, in a way where we just sort of like inherently trust it.

I don't know how often either of you do MD5 hashes or any of this thing that you could do to determine if it's truly what you should be using. How often do you do this, Jerod? Is this something you do day-to-day? How often do you check the software you're actually running?

**Jerod Santo:** I used to use the checksums, like Chris said, when I would download a large file. And I used to do it thinking it was a security thing; a lot of people believe that, and it's a little bit of a misunderstanding to think, "Oh, I'm more secure because I do this step." By the way, the other problem with that step of "I'm going to download a file from this web page and then I'm going to run the checksum to make sure it's the same" is that if a hacker actually hacked the web server insofar as they could replace the binary that you're downloading, they also could have very easily changed the checksum to match that binary.

**Adam Stacoviak:** Right.

**Jerod Santo:** So it's completely not a security thing, even though I used to think it was for a long time. That's more when I used to do it, but also back in the days where a 600-mb Debian ISO was like an all-day download. You wanted to make sure that it worked right, so I would do it back then, but I don't do anything... I'm very security-lax, sadly, in my current...

**Adam Stacoviak:** Well, how much binary code are you running these days that you would check it? How often are either of you using anything that's binary where this plays into where you take a source code down to one file, or something like that?

**Jerod Santo:** Well, nowadays Homebrew has a lot of pre-compiled binaries, and I assume Homebrew has some built-in -- I know there's some certificate checks going on there. Chris, you can probably talk to Debian's process, since you're involved in the Debian package maintenance... But what kind of security is in place around package managers, where people are pre-compiling binaries and/or downloading and using them?

**Chris Lamb:** The Debian and, by extension, Ubuntu and Ubuntu Mint etc., internally they use GPG and signing, so there's a known web of trust. So whilst it does validate the checksums of the files when it downloads them, that's simply for integrity. In other words, "Has the download completed successfully?" But there's an additional step, which is documented... I think if you search for "apt-secure", there's a quite interesting wiki page on the Debian Wiki about it. In a nutshell, it basically uses GPG signatures and a keyring of trusted keys to say, "Oh, okay, the checksum of this file is X, and we have a valid signature that's in the keyring, so therefore we can trust this file to that degree." You see what I mean?

**Jerod Santo:** Yeah.

**Chris Lamb:** Whilst you're completely right, that prevents your example of the attacker being able to get into one of the many Debian mirrors and replacing both the checksum and the binary. That would fail, because they would not be able to forge the signature, the extra step.

**Jerod Santo:** Right. So there's that, and if you go into the Apple side of things with the iOS App Store and what not, those are all developer signed. You have to have your own certificate and sign your binaries before Apple will accept those in, and there's a web of trust that they create in there as well. So there are things that are in place, but what you're advocating for with reproducible builds is even more guarantees not just that these binaries are trusted, but that we can verify their origin, the source code that originated them in a reproducible way.

**Chris Lamb:** \[36:12\] That's right, that's a good summary... Because using the checksum and the signature I know that I got this binary from, say, you, and it's that brilliant - I know exactly where I've got it from. There's no guarantee that that correspond to any particular source code that you claim it belongs to, I have to take your word for it.

**Jerod Santo:** You have to actually trust me.

**Chris Lamb:** Yes, for that sense. With the reproducible build setup, you could provide the source code in that binary, and I could not only compile it myself to say, "Yeah, okay, it does check out." I could also ask multiple third-parties to perform that same step, and then I can start to trust you and be saying, "Yes, this checksum with this signature does correspond to this particular source code." So it's sort of extending that one level back.

**Jerod Santo:** Right. So you gave it to us before, but now that I feel that we've kind of wrapped our heads around it a little bit more, explain it to us again in terms of the process - reproducible builds is not like a feature that you checkbox, it's a set of practices that you can operate under as a development community, that gives you this verifiable path back to the original source code. Describe it to us again, the steps that get put in place before we can say, "You know what? This is verifiably reproducible."

**Chris Lamb:** Sure, so the first step is you ensure that your source code always produces the same result, in a bit-for-bit identical way. This is removing any timestamps, any variations based on your timezone that you're in, any non-determininstic behavior, any randomness and things like that. Basically, if anyone took the same source code and recompiled it themselves, they would get the exact same binary out, that was completely, bit-for-bit identical.

Then you ask multiple parties or multiple build servers distributed around the web, different isolated environments perhaps, to compile that same source code. If everyone gets the same result and that same binary that you got, then you can start to say that, "Oh yes, this binary here corresponds with the original source code." Therefore you can make this claim that as it's very unlikely an attacker infected everyone simultaneously, that this really is the binary you get when you compile the source code; there isn't anything nefarious going on and nothing has been introduced along the development toolchain.

**Jerod Santo:** So who else is involved in this process? I haven't mentioned it before, but you've been awarded a grant from the Core Infrastructure Initiative to work on reproducible builds. Is this something that the Free Software Foundation is working on, is it the Linux Foundation, is it Debian? Give us the lay of the land on what actors think this is important and are actually putting efforts towards putting these systems in place for a lot of our underlying operating systems and other things.

**Chris Lamb:** It's quite a diverse group of projects, really. You can find some of old mailing list posts about people attempting this in the mid-nineties, but it wasn't really on anyone's radar as a security vector for a while. After the \[unintelligible 00:39:38.08\] revelations and the iOS etc. a lot of people started getting interested in it. Debian was perhaps the forefront of the distributions and certainly putting a lot of the initial activity into reproducible builds, but now we're a completely distribution and project-agnostic initiative and endeavor.

\[40:01\] It's the Linux Foundation that are very generously funding my time and other's time to work on this, but there's all sorts of distributions involved now - SUSE, Fedora geeks, a bunch of BSDs as well... So it's not even a Linux-only operating system. We have Arch Linux, but we also have projects such as Bitcoin and Thor... I mean, you can imagine the incentive to crack the binary of a Bitcoin wallet. If you could upload a backdoored Bitcoin wallet and replace the developer's version, then you would become rich fairly quickly... You see what I mean?

**Adam Stacoviak:** Mm-hm. That's my plan.

**Chris Lamb:** That's your plan; that's your retirement fund. \[laughter\]

**Adam Stacoviak:** I don't even know why you're saying this. I mean, you're telling everybody my plan. I'm just gonna skim a little bit off of everybody's Bitcoin wallets and become rich.

**Jerod Santo:** Just a fraction of a cent every transaction, and they'll never notice.

**Adam Stacoviak:** Yes, sir. Yup.

**Chris Lamb:** But it's pretty scary. I mean, to go back to the psychology idea - imagine being that developer. You're sitting at home... How much money could you make by adding a backdoor to that Bitcoin wallet? How much would it cost to hire a bunch of heavies to go around at his house? I think the economics would work out; the moral economics perhaps wouldn't, but just in terms of money... Yeah, very scary.

If I was that \[unintelligible 00:41:21.24\] person, I wouldn't wanna put myself in that situation. I wouldn't wanna put myself at risk for being targeted in that way.

**Adam Stacoviak:** And before we go into the break, I wanna ask a hypothetical -- maybe I'm just being naive when asking this, because I don't do this too often, but it sounds like reproducible builds is a philosophy and a set of best practices that enables you to verify this binary from a source, and often we have the option to pull down a pre-compiled version of whatever we're using... Why not just opt to compile yourself? If you're compiling from the source, you're essentially doing the same thing as reproducible builds. You know what I mean?

**Chris Lamb:** That's right, absolutely. But it's a convenience factor.

**Jerod Santo:** Right.

**Adam Stacoviak:** People don't do that too often.

**Chris Lamb:** No.

**Jerod Santo:** Gentoo users would disagree, right?

**Chris Lamb:** They would disagree, but they would disagree on many things, \[laughs\] much larger than these... But for example, do you really expect your phone to compile a software before installation? I wouldn't want my phone to have to sit there and compile Chrome before it gets installed, for example; that would be a little bit inconvenient.

**Adam Stacoviak:** I'm thinking we're at the developer level.

**Jerod Santo:** It'll drain your battery, Adam.

**Adam Stacoviak:** I'm not thinking at the end user level they're gonna do that, because that's just too much to ask any user to do. I'm thinking like at the developer level. Maybe I'm close-minded and only thinking of this in one lens, but so far the concern here has been like installing a Linux version or iOS SDK... I was just trying to play the devil's advocate of why would you just not compile yourself. I guess if it's a developer tool...

**Jerod Santo:** Yeah, I think convenience is a huge aspect of that. I don't know when it was, but coming from the Mac side, Adam, like I said, Homebrew now has pre-compiled binaries for lots of packages that you install often. So if you have to compile Postgres from source every single time you have a point update, that could take, depending on your machine, ten minutes or forty minutes, who knows?

**Adam Stacoviak:** Right.

**Jerod Santo:** So if every single piece of software that you run, you're going to compile from a source, how far does that go? Do I also have to configure it myself and make sure I've actually configured it correctly? I think there's a huge inconvenience there.

**Chris Lamb:** We're maybe missing a bigger picture here, in that the security affordances that reproducible builds provide should apply to everyone, really... To all users on any technical spectrum. They don't want their to-do list app that they're just using as a thingy to have any backdoors in...

**Adam Stacoviak:** \[44:03\] I think the bigger picture there is just trying to figure out -- I'm just thinking, if I'm a developer and I'm going to use something that has a binary, why not just compile it myself? I know that the arguments you've made there of the conveniences and affordances, and if, I'm gonna... every point release of Postgres... I'm gonna recompile a new version of it, that's probably a big pain in the butt. I'm just trying to figure out, I guess, is reproducible builds, this philosophy, these best practices - is it enabling me as a developer to have the ability to reproduce it if I wanted to, and that's the security?

**Chris Lamb:** Absolutely.

**Adam Stacoviak:** Okay. So if I wanted to take the convenience hit to actually compile it myself I could, to prove that what I've gotten is coming from the source?

**Chris Lamb:** Indeed. And what our goal is in the reproducible builds project is that there are enough people out there already building the software that you can simply rely on those people to provide you with a checksum that has consensus across, say, 20 or 30 different people, and so you would never really have to rebuild anything yourself, because all of these 30 other people agree that the binary should be X. "You also have binary X. I'm happy with that, that's fine for me."

That also speaks to the end users as well. They don't have to compile software themselves necessarily, and if they want to... But if they just want to install a random app on their phone - you have some sort of to-do list, for example - they can trust that the 30 or 40 "rebuilders" as we might call them agree on a particular checksum, and as they've got that same checksum, they're happy installing that and saying, "Okay, cool. The binary I've got corresponds with this source code... There isn't any nefarious, nasty stuff being added somewhere in the mix along the line."

**Adam Stacoviak:** You're certainly giving me a speckle of fear when it comes to installing potentially nefarious apps from the App Store, because there are times I wanna use an application in a genre, like for example recently with music, or something like that; I'm just like, "I don't know if I should trust any of these people, because I don't know any of the brands, the design isn't that great", so there's some known trust factors you sort of apply to potentially trustworthy software... And that doesn't exactly define security or trust, by its look, but it certainly helps it if you care enough about its design that it's trustworthy. But just in general, you've given me this slight fear that somebody out there is using a hacked version of iOS that's replacing ads and/or stealing my data, and now I have complete fear. But let's not open that can of worms; my fear is out there, the world knows about it...

Let's break and when we come back we'll talk about other advantages beyond security, things like that. So we'll break here, and when we come back we'll go into that with Chris. We'll be right back.

**Break:** \[46:56\]

**Adam Stacoviak:** Alright, we're back with Chris Lamb talking about this awesome thing called reproducible builds. You need it to have secure software, and maybe it's just a pain in the butt to compile from source, as I learned that today - you can't do that every day. Chris, take us through some other advantages. Obviously, you've got some security advantages here... Where else should we go for this to help explain to the community why this is so important?

**Chris Lamb:** \[48:07\] Yeah, I think the biggest non-security advantage is given that every time you rebuild a software you should get the same result, it means that if you make a tiny change to the source code, you should expect there should be a result in the resulting binary. And only those changes should be apparent in there.

If you wanna do a new release of software and you wanna make sure that this new release only contains the changes that you want, reproducible builds make it very easy to analyze that your new version with the previous version, and if you compare them, you should only see the changes that you expect.

We've even written a very good tool for this called diffoscope, which can recursively unpack binaries and look inside them and provide a human readable view on a particular binary. For example, it will decompile Java files and things like that in pretty print Python source code and JavaScript source code and things like that, which makes it very easy to say, "Okay, I've released a bugfix release for this particular thing, and only the changes I expect are in this new release, so that's fine, I'm happy to push it out."

This is a massive boon for anyone doing security releases, for example, but it's also if you just wanna have really good quality assurance; you wanna ship something to your users and you don't wanna have any inadvertent changes, like "Oh, yeah, it pulled in this extra dependency. Whoops! And now it's broken everything. So sorry..." If you just change one line of code, you should just see that reflected in the resulting binary.

The other advantage when things always build with the same result is that just by design you get better cache hit ratio; when you speak to the guys at Google about this and they're saying this is saving them thousands and thousands of dollars, it's simply because when they compile a large piece of software many parts of it haven't changed, and as they're reproducible, they will always produce the same result, so therefore it just says, "There's nothing new to compile, so therefore I don't need to do anything", so you can reuse the previous result.

This not only saves developer time, it's saving the company money, but also it's saving the environment in a sense, because you're not wasting CPU cycles and generating CO2 and things like that.

Other technical advantages are by design it removes any unreliable or non-deterministic behavior in the development process. If you really wanna get the same result, your build can't rely on anything that's based on timing. Any "unit tests" that are for example using time to check whether something should run in a particular speed or in a particular ratio of inputs to output time - algorithmic complexities, as it were - that becomes unreliable and therefore non-deterministic and therefore can't be part of a reproducible build.

It's a good way of finding bugs in uncommon timezones and low calls. But the few times that I've come across it it's been Ruby libraries, so I'm not sure if it's a few Ruby libraries that have been designed to manipulate dates and time. Their test suite fails when you run it, for example, in UTC+14, which should be a little worrying, because this is a library that a developer might be using to say, "Okay, I know timezones are difficult and date processing is difficult, but I'm gonna need it to this library" and the library doesn't actually work, it's be strange low calls, and things like that.

**Jerod Santo:** How would the reproducible builds help you track down that specific timezone-based bugs then?

**Chris Lamb:** \[52:00\] Within the Debian project we have a reproducible torture chamber test. What we do is we build every piece of software in Debian, and there's 23,000 different source packages there, to give you a scale of what we're talking about. We build it twice, one after the other - the A build and the B build - and we try and vary as many things between those two builds as possible.

For example, the second build will be on a different CPU type, it will be done a few years in the future, we just set a fake time; we change the shell, we change the path, we change all the environment variables we can possibly change; your username... Anything we can think would change the file system; basically anything you think of, we try and change. This hopefully surfaces as many differences that would affect reproducibility.

We want to make sure that any end user can compile a software on their own machine, regardless of their own local environment, and get the same result. This is a way of reducing the set of variations that would actually result in a variation in the end binary. This also shows up some of these QA advantages as well.

**Jerod Santo:** That would help compile time differences, but what about runtime? I'm thinking about things that are JIT compiled, like Ruby, for instance. How does it sort out those problems, if you're packaging Ruby things?

**Chris Lamb:** You're quite right. As that JIT compiles, what gets distributed then is the Ruby source code. So although you have to squint, the binary for a Ruby package is actually still text-based Ruby code.

**Jerod Santo:** Alright.

**Chris Lamb:** Saying that, it can still surface interesting things and this one happens to be security-based. There was a repository browsing tool that had an open IDE based login system, and during the build process of it, it was generating an open IDE secret; you know how it's based on a secret of the private key that the server knows about, and uses public key encryption, Diffie-Hellman, etc., style cryptographic algorithm to validate logins as secure.

So during the build it would generate a random number, and that would get put into the binary package. Unfortunately, this meant that every installation of this browsing tool would share the same secret.

**Jerod Santo:** Yikes!

**Chris Lamb:** Yes. This was surfaced in our QA torture environment, because in the A build it would generate secret 1234, and in the B build it would generate the secret 1943 or whatever, and we would flag that up as, "Oh, it's different between the A and B build. What is different? Ah, it's some sort of secret key. Oh, dear, this should not be the same for all of the packages that get built."

**Jerod Santo:** You guys have a reproducible build torture chamber - that sounds terrible.

**Adam Stacoviak:** I like the name.

**Jerod Santo:** It definitely conjures thoughts and visualizations. Probably it sounds like it's well-named if you're changing so many things, you're putting it through torturous things.

So this is the Debian project, you guys have a great setup, you've put the time and money into this... How do other people do it? There's a set of best practices, you've described the process, which seems relatively straightforward (there's a few steps), so tactically, how do you go ahead and say, "You know what? Our group is interested in reproducible builds. How do we get from where we are to where we want to be?"

**Chris Lamb:** \[55:49\] A lot of the work is being done with liaising with compilers and other toolchain-based utilities that are introducing non-reproducibility. We speak a lot with the GCC developers; for example, C developers will know the \_\_date and \_\_time macros, c-preprocessor macros, and previously they embedded the date and time directly into the source code as macros. This affects reproducibility because obviously every time you rebuild it, it would put the current time in, and so therefore every time you build you've got a different binary.

A lot of the time we are speaking to developers in those kind of areas, rather than developers of - should I call them niche packages... Ones that depend on other packages, rather than where packages are depending on them.

The documentation generators are another example of upstreams that we're speaking to quite a bit. In terms of just getting the word out about the potential problems of a world where we can't trust the binaries that are running on our own computers - that's a lot of what we do, and talking about the problems and talking about the doomsday scenarios, as we outlined before.

**Jerod Santo:** So we've outlined a little bit who's involved, and you mentioned all these different projects doing it, working hard on this - Arch Linux, Bitcoin, Debian, FreeBSD, NetBSD, Tor... Who's not involved that should be? If you could get their ear and say, "You guys need to be doing reproducible builds, and here's why." What are some groups, or some people, or some companies that should be doing these things, and as far as your knowledge they aren't.

**Chris Lamb:** One thing we know they aren't in it - basically people outside of the free software space. For example, what made the recent Volkswagen emissions scandal possible is software that has been designed to lie about the sensors in a lab environment. If you had the source code under public scrutiny, adding some sort of misfeatures would have made that impossible. Without reproducible builds, it's hard to confirm that the binary code installed in the car was actually made during the source code that then verified \[unintelligible 00:58:06.01\]

**Jerod Santo:** Well, nobody has access to the source code anyway, so...

**Chris Lamb:** Yes, that's should be another--

**Jerod Santo:** So anybody who has proprietary source code, they're not gonna be doing reproducible builds as far as the public community has access to them, because they're source code is private anyway

**Chris Lamb:** That's true, but because of things like the emissions scandals and things like that we may see more legal-based...

**Jerod Santo:** Yeah, mandatory...

**Chris Lamb:** ...requirements for these things to be... And then even if someone did provide the source code for a piece of software, along with the binary - in other words your car - you would still need to be able to verify that one came from the other.

**Adam Stacoviak:** Well, you would think the EPA might step in there, Jerod. General public may not have access to source code, but maybe because of this emissions scandal a new law or something is put into place where the EPA has to have access to the original source code to produce a reproducible build to confirm that the software installed in the car matches the result they got from the source.

That's a possibility there, rather than saying, "Open the code up to the world", because it is proprietary -- certain security levels might have to be in place. \[unintelligible 00:59:15.04\] \[laughter\]

There's something I wanted to ask... We were talking about who should be involved, but I was thinking maybe -- I was almost gonna interrupt you, Jerod, but now that I have the chair here I can ask it. Going back to the example originally with the iOS developer who got circumvented and pulled down the wrong version of the iOS SDK, what could that person have done differently, to prevent them using a scrutinized iOS SDK?

**Chris Lamb:** Well, one, the obvious things of ensuring that they downloaded from a reputable source. Assuming that Apple are not gonna release the source code for the SDK, which is probably given, there's very little they can do, and that's basically the "risk" you take when you run proprietary software.

\[01:00:03.14\] What hopefully would have happened is that if they were in a free software world and they released the source code for their software, it would have been very obvious very quickly that the binaries they were producing did not match with their source code, and they would never have matched because of the way that their SDK was introducing the change of adverts, and things like that.

So hopefully very quickly when a third party recompiles their piece of software, they would say, "That's interesting... You're distributing checks A, B, C, D, but when I compile it myself, I get D, E, F, G. What's going on here?" and questions would be raised very early.

**Adam Stacoviak:** So in the case of this SDK, they pulled an iOS SDK downloaded from a reputable source, which seems to be a logical first step... But let's say they didn't; since it's proprietary code, they can't essentially leverage this best practices of reproducible builds because they don't have access to the source code and they can't learn from that.

**Chris Lamb:** Indeed, yeah.

**Adam Stacoviak:** So they're screwed, basically. They're forced to use this nefarious version because they downloaded from somebody's hijacked website, not apple.com/developers or something like that.

Back to who should be involved... Because I had that thought in my head, but I didn't wanna go to far there, but I do wanna get back to who's involved. We've got a list here... I think the URL is reproducible-builds.org/who and you can go there and see everybody involved. Jerod's question was specifically who's not involved in this that should be involved in this?

**Chris Lamb:** Well, I wouldn't want to embarrass anyone in particular.

**Jerod Santo:** Oh, come on!

**Adam Stacoviak:** Well, maybe it's not an embarrassment, it's just more like a call-to-arms. "Get in the pool!" \[laughter\]

**Jerod Santo:** Yeah, convince them. Don't embarrass them, convince them.

**Chris Lamb:** So someone who's not really represented here is Ubuntu, and they do have a large installation base that would obviously be great leverage and would provide a lot of reassurance to a lot of users if Ubuntu got involved. We have actually spoken to them, and they are kind of waiting to see whether the Debian toolchain etc. kind of settles down, because it's a little bit in flux at the moment.

They have no philosophical objection to it, it's just not on their radar right at this second. Hopefully, that will change in the next three or four months, and we'll start to see some of the Debian reproducible builds' work trickle down into Ubuntu, like a lot of the other work that's shared between those two projects. So I think that will be the main one that's missing in terms of user leverage.

In terms of people who don't really care about it, I guess anyone in proprietary software can't care about it. It doesn't really work you if you don't--

**Adam Stacoviak:** They're not forced to, at least.

**Chris Lamb:** Yeah, indeed. So I can't really speak to them. I mean, it'd be nice if more Windows developers had that kind of mindset, but there's still a lot of free software that's being developed for Windows; I mean, things like Putty, a whole bunch of browsers or free software released on Windows operating systems... So perhaps more in that space.

**Jerod Santo:** Microsoft themselves could definitely get involved when it comes to open source developer tools in their ecosystem. They have many... .NET Core, Visual Studio Code and many things that have been open source for a while. And people who are actually developers are relying on them as their toolchain... So they could get involved.

**Chris Lamb:** That's true, they could certainly help ensure and certainly make it easy for developers to make their builds reproducible. That'd be very nice to see.

That will be another great source of leverage there; it'd be one company getting involved... That would help quite a lot of developers and users

**Jerod Santo:** What about the individual level... Jane, web developer and Joe, game developer, Linux users, people like Adam and I, our listeners out there that maybe -- I mean, we take security seriously - maybe we could do better, but what could we do to help this initiative?

**Chris Lamb:** \[01:04:19.10\] One thing is you can ensure that any source code you do release can be built reproducibly. This means removing any timestamps from the build, ensuring that it produces the same results in as many different environments as possible and it doesn't have any varying behavior... Things along those lines.

Most software would not require any of these things, but a lot of software likes to include, for example, the version, which is based on the current date, or they like to include the machine that it was compiled upon.

Removing those sort of things is pretty much the first step, and for most software the only step required to make the build reproducible.

The other thing you can do is to occasionally check whether the code that you're running does match the source code, and if it doesn't, raise a red flag to whoever is producing that binary and the source code and say, "Hm, that's interesting... You're providing this binary and this source code; they don't seem to match. What gives?"

**Adam Stacoviak:** Would they compile their own version, would they use this torture chamber you were mentioning? What's the step they take to ensure that?

**Chris Lamb:** I think right now they would compile it themselves; that would probably be the easiest way of getting a single checksum, rather than setting up a torture chamber, because that requires isolated environments, changing clocks, and things like that.

So the first step would be just to recompile it on their own machine and see what they get, and compare it with the result that's being distributed by the original source code maintainer.

**Adam Stacoviak:** I feel like that's still a hurdle that most people will just be like, "Whatever..." Maybe I'm just being agnostic against it, but I feel like we're back to the same original problem where we said "You're just verifying a checksum, essentially", which is what you want, because you want to reproduce a build by compiling, which is the question asked in the middle there: "Why don't we just compile the software ourselves?" and that's essentially what we're doing to confirm we have the right thing.

So if they're not gonna do it to use it, I'm just wondering if there's an easier hurdle to put in front of people to get over, versus that one.

**Chris Lamb:** I suppose one difference here is that checking the checksum not only helps Jane developer, it also helps -- when they are validating a checksum, they're also checking it for the rest of the community as well, and they're also checking on behalf of the original distributor as well; it's not just helping them. So if they've built all their binaries themselves - it's too strong a word, but it would be somewhat selfish to do that, because only they would reap the advantages of doing that recompilation.

But if they recompile and check with the upstream's version of that binary, what they're doing is helping the community at large saying, "Yeah, I've confirmed that this binary matches this source code at least" \[unintelligible 01:07:10.25\] It's a bit more friendly in that sense.

**Jerod Santo:** I'm just trying to think of ways that we could actually get people to do something on this, because I agree that the ad-hoc "check a binary here, check one there" type of a thing probably doesn't have legs with people... But it seems like there could be some community tooling built around some sort of reproducible build Chaos Monkey thing, somewhere like how Netflix has on their internal networks, where you could just build a system that pulls a random GitHub repo - maybe it has to be language-specific, spins up an EC2 instance, runs the build, gets the checksum, checks it against the published, and then as a web page, with people with red X's and green checkboxes, or something where it's automated, but...

**Adam Stacoviak:** Accessible.

**Jerod Santo:** Accessible, and a community effort... I don't know, Chris, is that...?

**Chris Lamb:** \[01:08:06.15\] Indeed, yeah.

**Adam Stacoviak:** When he said recompiler earlier, that's what I was gonna ask, before I was getting interrupted. Chris, didn't you mention something about recompilers a farm or something like that earlier in the call, that we didn't go into?

**Chris Lamb:** That's right, yes. I think referred to them as rebuilders.

**Adam Stacoviak:** Rebuilders, yes.

**Jerod Santo:** That sounds cool.

**Chris Lamb:** Yeah, I think it's a pretty cool idea. It's quite interesting philosophically as well, because you would want as many different and diverse groups of people recompiling the software, because if you did offer community effort whilst you've removed the original building of the binaries, you have a central community way of doing this; you've essentially then recentralized the confirmation of all these checksums. So you want as diverse a group as possible building all this software all of the time. For example, you might have servers in Greenpeace's data center, and the Department of Defense's... They are people with rather different views of the world, but if they can agree on the final checksum of a binary and they have different motifs in this world, then you can start to say, "Oh, I can trust this. Yeah, cool."

**Jerod Santo:** It'd be kind of like SETI@home, only the results would be actually useful.

**Chris Lamb:** It would be very much like SETI@home... I never thought of it that way, yeah.

**Jerod Santo:** Rebuilder at home, there it is. Somebody go out there and build that thing, while I'll just dedicate CPU cycles at night-time when we're sleeping to making sure all of our software is secure.

**Chris Lamb:** That's be amazing. I'll get onto that.

**Adam Stacoviak:** That's what I was getting at, this hurdle to do the thing that does what we're trying to do with this conversation and this entire initiative in this best practices... That last step, as Jerod said, is gonna be less likely to be done by the general public if it's just sort of like -- If I think Jerod's doing it and he thinks I'm doing it, neither of us are doing it. Maybe a few, a small handful, and those are the people getting burnt out, those are the people giving talks, those are the people running meetups, those are the people that are getting pulled every which way forward, and those are the people getting burnt out, and it doesn't scale, it doesn't sustain. We have a Heartbleed issue or we get an emissions scandal going on because this rebuilder process is just too hard to put on the individuals of the world.

**Chris Lamb:** Indeed, yeah. That's probably our weakest point at the moment, how we can really translate the reproducible builds efforts down to the end users. For example, providing end user tools to say, "Oh, you're about to install this particular binary, but we don't believe it's reproducible, so what do you wanna do about it?" We don't have tools for doing that yet, we don't have these automated or at least semi-automated rebuilders yet. It's certainly in the pipeline, it's just that we are still not quite there as a project in terms of we'd like to move the reproducibility effort on a little bit further before we attack those angles.

There's a few unresolved questions, as well. Just for one example, say we had ten different builders - Greenpeace, Department of Defense, you, me etc. all publishing their checksums for their binaries... What would be the algorithm the end user tool used? Would it say, "All ten have to agree? Do nine out of ten agree, is that okay?" What if I'm a malicious actor and I upload ten thousand checksums that are all bogus? Would they outvote the others? There's these difficult questions that haven't really been resolved yet in terms of policy.

**Jerod Santo:** Put on the blockchain. Blockchain solves all problems it's the new spade card or trump card. Just say blockchain and then that's the answer.

**Chris Lamb:** \[01:12:02.04\] Well, blockchain will be part of this thing, to ensure that someone could not unpublish their checksums. So yes, we are actually ironically thinking of using blockchain-like technology.

**Jerod Santo:** I'm full of good ideas, I'll tell you what... That's two in a row. \[laughs\]

**Chris Lamb:** I feel like you should join our project.

**Jerod Santo:** Maybe I will.

**Adam Stacoviak:** Well, Chris, in efforts of closing up here, what closing thoughts do you have to share? This is the last on the show to get that final person who's like, "You know, I really like this idea - what's the next step?" What final closing thoughts do you have on this?

**Chris Lamb:** I suppose the next -- if someone's vaguely interested in the project, they should totally check out our website; it's got a bunch of talks, a bit more background information, some recent presentations with some more interesting gotchas about interesting things that we have surfaced QA-wise in the reproducible builds effort. We also have a mailing list and some interesting -- as I mentioned, our diffoscope tool. So one thing that everyone can try right now is a website called try.diffoscope.org, where you can upload two files and it will recursively unpack them. If you give it two ISO files, it will unpack the ISO files and look for meaningful and human-readable differences between those two files.

That software is also available on your desktop, but this is just a web-based interface to it. So that would be the next thing to check out if someone's interested in the project.

**Adam Stacoviak:** Well, we'll certainly leave links in the show notes to reproducible-builds.org, which is the site that Chris is referring to. The talks, resources, tools, events... Even the news stream you have there is great, great documentation, so I would encourage those who are listening to this and interested to check that out, check the show notes for that. Christ, thanks so much for joining us on the show today, man. We really appreciate it.

**Chris Lamb:** No problem at all, thank you for having me on.
