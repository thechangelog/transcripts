**Jerod Santo:** Well, we're here today to discuss securing our local networks... Not necessarily from malicious hackers, but from things that we don't want in from the outside. And we are joined by another guy named Jared. Adam, you're gonna have to differentiate when you refer to us. We have Jared Henderson here. Welcome to the show!

**Adam Stacoviak:** I'll just say "Sh'ya boy!"

**Jerod Santo:** Oh, yeah. Well, he also responds to that.

**Jared Henderson:** Yeah, that's what my wife calls me.

**Jerod Santo:** \[laughs\] Well, we're happy to have you.

**Jared Henderson:** Yeah. Thanks for having me, guys.

**Jerod Santo:** Thanks for reaching out. The topic we're going to discuss is one that's been on my mind as a father, and a person who runs his local network, and tries to figure out how to do that well. There's all kinds of ways you can go about managing your children's internet access, and none of them are awesome. We've been making heavy use of screen time for certain things, and I appreciate that Apple puts ScreenTime in there. And the controls are fine-grained, but cumbersome, and not reliable. We find that it doesn't remain through iOS upgrades, and stuff. The worst thing that could happen is you feel like you're all set up and \[unintelligible 00:01:58.00\] and safe and secure, and stuff... And then an iOS upgrade breaks your settings, and all of a sudden you have a hole in your strategy. So we've found that with screen time.

**Jared Henderson:** Yeah, that just happened to me and my two oldest kids. iOS 17, I had their phones pretty well locked down to where I was pretty comfortable with it, and it had been going good for a number of months... And then they both just upgraded to iOS 17 without asking me; they were excited to, I don't know, make poster images or whatever... And there's kind of a major regression, from my perspective, at iOS 17, with the parental controls... And I ended up actually downgrading them back to iOS 16, because Apple hasn't fixed it yet. But that's the kind of thing that makes me feel bad for kind of non-techie parents, it's there's not really a happy path for downgrading iOS. You're not supposed to do it. So I had to kind of go use some of my programmer skills to kind of pull that off, and...

**Jerod Santo:** Yeah...

**Jared Henderson:** ...that kind of thing happens. But I agree with you also; I mean, a lot of the controls that Apple give are great, and there's just things like that where an upgrade comes out, a new release hits, and then all of a sudden, you're kind of like "What do I do?" You're stuck.

**Jerod Santo:** Yeah, we've had issue with the usage statistics, specifically. So our teenage daughter has had issues with overuse of her phone, as I'm sure many teenage, not just girls, but boys also have this problem. I mean, these things are so incredibly compelling, these devices, that even as full-grown adults, with - what is it Adam? ...our prefrontal cortex fully formed...

**Adam Stacoviak:** That's right.

**Jerod Santo:** All the things, right? Like, grown men can't even manage our own screen time sometimes. We have our own solutions for dealing with addiction... It's really difficult for teenage girls and boys to deal with that. And so she's had an issue with overuse, and so one of the reasons we use screen time is we can actually limit her use to specific times of day, to a certain time period, or max hours per interval... And we can also monitor, so we can see if it's being used when it's not supposed to be used... And the reporting has just been really bad, to the point where we can't even trust it. We're like, we have to trust her, or trust it... And it's like, at this point, she seems to be more reliable, because it showed her using her phone at 2:34am, and we just knew by circumstances that just wasn't even a possibility that that happened. And it also showed her using it while she was at volleyball practice, and the phone was here, in our laundry room... And it's just like, "Well, if we can't rely on the reporting, what's the point of it all?" It just completely self-destructs. So it's very frustrating as a parent to be able to handle these things.

**Jared Henderson:** Yeah, it makes you sometimes want to just kind of throw your hands up and say "Oh, it's too complicated. I can't do it", and just kind of hope for the best and cross your fingers... And that's something that I think, sadly, probably too many parents kind of end up doing. And it's not that I blame them. The tech is complicated, and it's buggy, and it's changing all the time... But yeah, that sort of feeling of like "This is overwhelming. It's too much. I can't do it. I can't trust it." Or the burden of kind of whatever restrictions you do put in place, or filters, or things like that, if they end up being complicated and hard to use, then it's just too easy to kind of give up, you know?

**Jerod Santo:** Mm-hm... So there's other things besides content that we also like to block. I mean, you have tracking, you have ads, you have all kinds of stuff that people want to send to you, that you don't necessarily want. And there's other -- so there's lots of solutions, too. So beyond just Apple devices. I know Adam and I have both been Pi-Hole fans. Adam got me into the Pi-Hole, which is a Raspberry Pi...

**Adam Stacoviak:** Wow.

**Jerod Santo:** You did, man.

**Adam Stacoviak:** All the way in, huh?

**Jerod Santo:** You said it enough times that I finally was like "Alright..."

**Adam Stacoviak:** Pi-Hole, Pi-Hole, Pi-Hole...

**Jared Henderson:** They're great.

**Adam Stacoviak:** Haha! I'm just kidding.

**Jerod Santo:** It's a really cool piece of software...

**Adam Stacoviak:** Jerod, I'm an early mover, and you just follow late with me, man. Like, that's just how it works. In some cases.

**Jerod Santo:** Eventually, I'm gonna watch Silicon Valley. Eventually, I'll watch it. But...

**Adam Stacoviak:** Not today.

**Jerod Santo:** Probably not. But I did get around to the Pi-Hole... And that's a really cool piece of software. Adam, how did you come across that? What were you trying to solve, and do you use it for content stuff, as well as just ad blocking?

**Adam Stacoviak:** \[00:06:08.26\] Man, I don't even know how I came about it. I don't know, honestly; I can't remember my origin story with it. I just did, and I was like -- well, I mainly wanted to block ads, like anybody might when they do find it. And so I'm looking for a solution, I'm like "Well, a network-level solution makes the most sense, because it's DNS." Like, if you try to do a DNS lookup and it fails, because it goes into the DNS black hole, then that to me made the most sense, because I didn't want to have to go from browser to browser, computer to computer, and do protections... Which I think makes sense on a home network, or even a business network, obviously. I've never ran a business network, to be like "Here's how you secure a network", but that's how I got into it. And I think the main way I use it now is mainly just to block ads and mainly to block tracking-related things.

I used to do more local DNS naming with different services within, and I just happen to be wearing the shirt today, Tailscale's T-shirt. Tailscale has replaced that for me. It's not an ad; I love them. They do sponsor us, they are one of our sponsors, but for me, Tailscale replaced the need to worry about specific IP addresses locally for services, because they're just in my tailnet, and I could just give them a name, and that name is resolvable by Tailscale's tailnet, essentially. So I used to do a lot of Pihole1.lan, for example, as a DNS entry in the DNS of Pi-Hole.

**Jerod Santo:** Using it as a DNS server, basically.

**Adam Stacoviak:** Right. For internal services mainly.

**Jerod Santo:** Yeah, for custom machines.

**Adam Stacoviak:** Yeah, exactly. And I just think Tailscale just made that obsolete, for me, really. I don't even need the feature anymore.

**Jerod Santo:** Cool. Well, I got into Pi-Hole because of you, and I set it up, of course, for ad-blocking as well. But what I really wanted was content restrictions, parental controls. And obviously, moving up the stack from the device to the network is really nice, because it gives you a central location to manage such things... It's still really hairy, and now you're talking whitelists and blacklists, and other kinds of lists... And you have to source them sometimes from like people's GitHub repositories, and you wonder if this one's up to date, is it good... All of these kinds of questions. And I ultimately heard about NextDNS, which is a really cool service...

**Adam Stacoviak:** Also not a sponsor...

**Jerod Santo:** ...that I am currently a user of... No, not a sponsor. In fact, we've never spoken with them. I've invited them on the show, just because I like what they're up to, and would like to learn more about it, but I haven't heard back. If anybody knows the NextDNS folks, we'd love to do an interview with them. But they're basically like Pi-Hole in the sky... And so they're gonna do that for you. You just point all your DNS records at them, and let them manage that. You can go in and configure, and adjust, and you can turn on different things... You can have it force YouTube safe... Safe browsing mode? What's that called? YouTube has a safe mode, which will turn off comments, for instance, if there's nasty comments going on... Which is really nice, except for at the network level, and when you run a YouTube account, and you want to respond to a comment... It's like "Comments are turned off", and so you start wondering, "How am I going to poke holes in this for myself?", and stuff like that. But they have those kind of restrictions, which is really neat.

Google Safe Browsing, they force that at the network level... Really cool stuff. And in my opinion, better than the Pi-Hole, because here's the problem that I had with Pi-Holes specifically... It was like, now my local area is "secured." And Jared, I know you're gonna take issue with that. We'll talk about allow lists versus deny lists, and kind of all the facts that you can get around a lot of these things with a little bit of effort... And we know that teens are the ones who have the time and the inclination to put the effort in, especially when their parents aren't tech-savvy.

\[00:09:47.28\] But for me, it was like "Well, the Pi-Hole is cool, but it's on my local network." And what happens when my devices leave my local network and they're on cell service, or they're on someone else's Wi-Fi? And there's hacky things you can do to get that to work, in order to like -- basically, VPNs, and it gets very... I mean, now we're getting super-technical. And the nice thing about NextDNS is that they do have like an app that you can just put on the kid's phone, and it's going to automatically route everything through NextDNS, and so you still have them even on cellular, on somebody else's Wi-Fi, you have at least that going through that service. So I'm a fan of that. That's so far been the best solution for me. But Jared, you can tell us what you've found, because you've actually got to the point where you started scratching your own itch and building something to solve this problem at your house. Do you want to tell us about it?

**Jared Henderson:** Yeah, sure. And NextDNS sounds interesting. I'd be curious, can your kids go change their DNS settings on their phones, though? Are they locked out of -- you know, as a parent, are you able to get them wired into NextDNS, and then --

**Jerod Santo:** Right, so it's a combination, in our case, of screen time plus the app. So they can't actually go in and change their settings. Now, are there workarounds for that? There probably are. I think, at a certain age and a certain skill level, they do need to have some agency and autonomy. Like, if they really want to get around things, they will. So mostly, we're blocking like "Don't make it easy, and don't make it accidental." A lot of our kids are at the age where they're out looking for this stuff; this stuff comes to them. And so we don't want the accidental stuff, because you can't unsee what you've seen... But that would be the combination that would keep them from changing their DNS servers. Obviously, on a PC or a Mac you can just do that kind of stuff. So there's many ways, many ways.

**Adam Stacoviak:** You said you're using ScreenTime to do this?

**Jerod Santo:** Yeah.

**Jared Henderson:** ScreenTime I think just keeps them out of the controls of disabling it. So with a lot of these things, as parents, you can kind of like turn some sort of protection on, but then you've got to make sure... Because iPhones don't have a concept of a less than privileged user, so you have to kind of use ScreenTime to prevent them from undoing... Maybe there are managed users, but those are like a little bit more complicated to set up, and usually in like an institutional environment.

But yeah, I think that the DNS layer stuff is awesome. I'm a huge Pi-Hole fan. I think I heard about it from Jeff Atwood's blog. I don't know if you know who he is, but...

**Jerod Santo:** Yeah, we know Jeff.

**Jared Henderson:** ...years ago. And I've installed seven or eight of them, because I tell my friends about them, and the problem with Pi-Holes is you've got to be a little bit able to go, install Linux, and kind of shell into something... So I've ended up doing that for a whole bunch of families, and love it. I consider it kind of like -- I don't know, with a lot of these tools, I don't know that you can ever find something that's kind of like a silver bullet, that's just gonna kind of take care of all your needs. So the mindset I've sort of developed over the years is defense in depth. You got - like, Pi-Hole is awesome; something like NextDNS sounds great. But you just don't want to put all your chickens in one basket, or whatever the term is. Just kind of multiple layers, including technical solutions, DNS-level solutions, filtering, blocking on the device that goes with them... But not even just that; not technical things, just some physical limitations. Maybe my kid doesn't have their device at night, or my kid does their homework out in the public space, instead of here or there. There's all kinds of different ways you can kind of approach this... And until there's some sort of super-single solution that's going to kind of do everything, I think what parents really need to do is kind of stack a few of these solutions on top of each other. And people who are more tech-savvy can maybe layer in some of the more kind of technical stuff... But if you're not as comfortable with that stuff, there's a lot of really useful and valuable things you can do just in terms of kind of normal, physical safety sort of rules, and just ways you live in your house, and stuff.

But yeah coming back to the -- I don't know, you were asking about like the Pi-Hole. I've used it for years, and I appreciate the ad blocking; I mean, the internet's almost unusable these days without ad blocking... But I also was trying to -- my kids, when I was initially setting up the My Pi-Hole, my kids were kind of getting into that age where I felt like I need to just start to be really cautious and careful. A lot of that's just because I remember getting into a lot of stuff when I was a late teenager, that I wish I had never gotten into... So I went out and like pulled down all those like GitHub gists, so these huge black lists of literally millions of domains. I think it sounds like, Jerod, you've looked into that...

**Jerod Santo:** \[00:14:17.21\] I've been there. Yeah.

**Jared Henderson:** Yeah. I've done all that, and I was pretty excited, and I thought "Man, I've got literally millions of domains of these --" hopefully up to date, the best black lists. And I had this idea of "Hey, it's open source. People are contributing to these gists, and these huge piles of black lists..." And I was kind of pretty hopeful that this was going to be a really strong solution. And I still think it's valuable, like I said, as a layer... But I mentioned this the other day when we were talking, that one of the things I did fairly early on with my Pi-Hole is I kind of went into pentesting mode, and I said "Okay, I've got millions of domains blocked on my local network. I wonder if I can find a way around this thing." Like, what if I were -- you know, I put myself in the shoes of 17-year-old me, and I had time, and inclination, and so I disabled images on my browser, and just started to see what I could find, and just started googling stuff. And I was pretty kind of discouraged when I found that it took me -- I don't know, I forget; 90 seconds or something like that to find something that wasn't on one of those lists, that was pretty awful... And that kind of was, in some ways, kind of like a formative experience for me, because I kind of realized, "Man, as good as --" Like, you can have the best, most up to date block lists in the universe, but it's just a problem that I don't think can be solved that way. There's so many websites, so many domains... And think about like people, purveyors of adult content - what's one of their biggest kind of Nemesis? It's these block lists, and these filters. And so there's this incentive on their side to continue to like proliferate new websites and new domains, because they're not going to be blocked.

And you may have heard that there's this .xx domain, and I'm not sure how much it's used, but my understanding is that people in that business really dislike that, because they feel like "Oh, that's just gonna make it so easy for people to block out a whole TLD."

**Jerod Santo:** Right.

**Jared Henderson:** And so because of that, there's this incredibly long tail of domains that are filled with adult content and other things... And I just kind of like realized, "I don't think that this approach works." I don't think that the block list in and of itself could ever be safe if you're trying to avoid -- accidental exposure is huge, totally. I think there's certain ages where that's probably the biggest concern... But there's also some other ages where you get kind of those -- like Adam was referring to, those motivations, those underdeveloped brains, those extra time, those hormones flowing, and then you get some really motivated people with time, and then it's just so easy to get around these things that work by a block list.

**Jerod Santo:** Yeah, I can definitely see that. And I do agree on the technical side of things, like with a Pi-Hole, or a lot of these solutions... Where I get distraught is like "Okay, I can get this working", and it was effort and difficulty. But I have so many friends who would also like to secure their home networks, and to protect their family from stuff they don't want to see... And this doesn't scale. I can't go to each person's house and manage their Pi-Holes, or whatever solution they have. And so you kind of throw up your hands at a certain point and say "Okay, do you have to be a technical person in order to even have a decent strategy?" Or even a strategy that has holes in it, but something. At least you're in the game. And I feel like for the most part so far - and maybe services like NextDNS, which are more approachable than a Pi-Hole... But still, most people don't know what a DNS is, and they have to learn that. And sometimes - well, you've gotta learn something to enable to protect your house. I suppose if you put in a security system, you've got to learn how that security system works, and you have to learn how to operate it, and so you go ahead and learn the villain, that is DNS.

**Adam Stacoviak:** The villain, yes.

**Jerod Santo:** \[00:18:08.27\] But it's just too hard. I mean, it's so hard to do well, or to even be in the game. So it's kind of frustrating.

**Adam Stacoviak:** It is frustrating. I think even -- I will concede that the Pi-Hole is not obviously a silver bullet.

**Jerod Santo:** No.

**Adam Stacoviak:** And it's not even like the best bullet, really. It's just a bullet.

**Jerod Santo:** It's a bullet. Yeah.

**Adam Stacoviak:** Right. It's got its own challenges, too. Lists... But it is a good line of defense. And I think employing many things that can protect, obviously screen time, something at the DNS level if it makes sense... Maybe something like your application, Gertrude, which we haven't really mentioned yet, but I think we will... That gives you other layers to do. And I think even with being techie, or being someone who's technical, I think at some point you become a just-in-time learner in life. You don't really learn the things you need to know until you need to know them. And if you need to protect your network, and you hear from a friend that Pi-Hole makes sense, maybe you get Linux-curious. Maybe you get Docker-curious. Maybe you don't. Maybe you just are like "I'm never going to do that, so I'm gonna go with NextDNS", which I think makes a ton of sense. But even with NextDNS you've got to install an application, you've got to have some understanding of the way that traffic flows in and out of a device. And I think you just have to bite the bullet, right? You just have to learn something about how the internet works, how the web works, how requests work, to have some level... I don't think a silver bullet will ever really exist. Do you think that's a possibility?

**Jared Henderson:** I don't see it coming anytime soon, at least. I don't know, maybe some AGI will take care of it in a few years but...

**Adam Stacoviak:** That's true. And at that point, it's a different story, right? An AGI...

**Jared Henderson:** Yeah. Then we've got other problems, I guess.

**Adam Stacoviak:** Yeah. That's a whole different situation... Like, "Hey, I'm protecting you." No, no, no, I kind of want to be there. Okay? This one's on purpose. \[laughter\] I'm kidding. I'm just kidding.

**Jerod Santo:** Just go ahead and raise the kids for us, okay?

**Adam Stacoviak:** Right. I even think about this... I know, Jerod, you and I talked about this... When I go on Instagram - which I don't do too often, mainly because it's just such vanity, and I just have despised... Like, aside from the people I follow, I don't like that they expose me to suggest the things that my friends -- like, the friends of friends think. Like, let my following, let my For You tab or whatever it is be what I want to see. My following. And now they make it the default is the For You, versus the Following... Which I just don't like. I want to select who I want to follow, and see that content.

But if I go to Search, which is technically browse, it is just a swath of content that is not something I'm trying to go and find.

**Jerod Santo:** Yeah, yeah.

**Adam Stacoviak:** And I think, in a lot of ways, it's like trapping. If you're a weak-minded person, with maybe low morals, or in a place in life where you're just willing to mess up, or you're susceptible to being messed up, then I think that search tab for -- you select any dude, and you go to their search tab on Instagram, I bet you it's got suggestive content in there.

**Jerod Santo:** A hundred percent.

**Adam Stacoviak:** Sexually suggestive content. Guaranteed.

**Jared Henderson:** Yeah. I mean, I don't even -- like, this might sound funny to people, but I don't even let myself on those websites, because...

**Adam Stacoviak:** Screen time, man... I'm just kidding. \[laughter\]

**Jerod Santo:** Screen-time yourself.

**Jared Henderson:** I mean, that's part of like -- we're talking about kind of managing our children, and trying to keep them safe, and stuff, and...

**Adam Stacoviak:** You've gotta manage yourself. You're right.

**Jerod Santo:** You do.

**Jared Henderson:** I mean, I do think there's a place for -- sometimes if you can't manage yourself, you should still be trying to manage your children, you know? But ideally, you want to manage yourself, and stuff like that. And there's huge parts of the internet that I just -- it's not useful, it's not valuable, time is too short... I don't want those -- I mean, we're always kind of like drinking in thoughts and ideas and images and stuff, and all that affects us. So it'd be useful if us adults would also maybe start to be really like thoughtful and careful about even what we allow in, and "Why am I going here to this website? Is there any real value that offsets anywhere close to kind of the torrent of stuff that it's pouring into my brain?" And so I just don't go there.

**Jerod Santo:** \[00:22:12.07\] Yeah, the algorithms are designed for engagement; they're designed, and they're really good at keeping you engaged. And they know what sells. And hey, sex sells. And so even if you're trying not to, there it is, and you're just gonna be attracted to it, and you have to be able to somehow turn that off. But I've found that even on YouTube shorts, which is probably the vertical video platform that I use the most, because we post there, so like it's part of my work, which makes it difficult to entirely just turn off... And I find that I train it to -- obviously, you have a few levers you can pull... Did my thing just make a bubble?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Did you guys just see that?

**Jared Henderson:** Yeah, I think I saw a bubble. Yeah, I saw it.

**Adam Stacoviak:** Because you thumbs-upped.

**Jerod Santo:** My screen just bubbled. What's going on? These computers... Sorry, it totally distracted me.

**Adam Stacoviak:** Mine doesn't do that, because -- I think you're probably on the newest OS, right? Did you upgrade?

**Jerod Santo:** I did upgrade. I'm on macOS... Sonoma? What's the new one?

**Adam Stacoviak:** Sonoma, yeah. That's a Sonoma thing.

**Jerod Santo:** And so when you move your hand it puts bubbles on the screen? What kind of feature is that?

**Adam Stacoviak:** Alright, so Jerod got derailed from his conversation because a bubble popped up in his video that no one is seeing, and they're like \[unintelligible 00:23:19.20\]

**Jerod Santo:** Talk about stuff you don't want to see... I don't want to see bubbles.

**Jared Henderson:** That's what they're working on in Cupertino right now. It's bubbles.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's right. It's the AGI behind the scenes knowing what we do and what we want.

**Jerod Santo:** The brightest minds of our day are putting bubbles on your screen when you raise your hand. Alright, so that's stuff you don't want to see either. But I was saying there's a couple of levers you can pull. One of them is obviously how long you watched the video. So if you don't want to see it, just swipe away right away... Which is why, by the way, people say things like "Watch to the end" or "Wait for it", or these kinds of things - because they want you to be on that video for as long as you can, because that helps them get boosted.

The other one's obviously the Dislike button. And I deploy those liberally, against anything. Like the girl who does the jump-roping, the Australian girl who does jump-roping - really, really high-quality jump roping, to the beat, and stuff, and she's really good at it... But it has the other angle of she's a tall skinny blonde, and she's not dressed appropriately for my tastes... And so I've got to swipe away, and yet it's kind of interesting. So I'm like "Oh, wow, she's really -- oh, swipe away, swipe away!" Dislike. Because I don't want it to come back.

**Adam Stacoviak:** That's right.

**Jerod Santo:** And then, over time, I've found that it'll go away, and then a couple of weeks later, without any prompting for me, here comes the Australian girl jump-roping again. And I'm like "Hey, I disliked it. I pulled all the levers." But it's just sticky content, and they know that people like it, and so they just keep sending it your way. So I'm always playing the meta game on these social networks, as you can tell, and seeing how it works on the insides... But it's frustrating that you can't entirely say "Nah, never show me the Australian gal again. I mean, she's really talented, but I'm just not interested." Eventually, they're gonna send it back your way.

**Adam Stacoviak:** I want to applaud them though one thing, because I have not seen this content at all.

**Jerod Santo:** You haven't seen the Australian girl jump-roping?

**Adam Stacoviak:** No, I have not seen that one. But this one is in like the video flow, whatever that is; like the main screen on the application, or even on the web. This was like during the election, when -- or I guess during the end of Trump's presidency, and like when things were just really getting very, very heated, like that last year and a half-ish of just like constant politics everywhere, nonstop... I'm just like "I'm just done with thinking about this, and being berated by the internet. I'm on here to check out mountain bike videos, barbecue videos, maybe the odd home lab video from my friend Techno Tim, or whatever... I'm here for that. That's my reason for being here right now." But I do have other personal interests, and sometimes they are financially-inclined, and so I care about the government, and who's in office, and how that's going, and how my friends are being impacted by it... And I blocked like Fox News, and CNN, and Sky News, and all these different things... But then you have these indie content creators that are almost, if not more reputable than the mainstream outlets. Like, as the climate changes for trustable content, so to speak.

**Jerod Santo:** \[00:26:20.06\] Right.

**Adam Stacoviak:** And so I blocked them. I can't see Fox News anymore. Like, I've never seen it again in my main feed. Now, I have seen somebody else talk about a clip from Fox News, so it still gets in that way...

**Jerod Santo:** Or remixing.

**Adam Stacoviak:** Right. Exactly.

**Jerod Santo:** With a reaction. The one where the person's just watching the other video, that you already showed you weren't interested in, but there it is...

**Adam Stacoviak:** That's why they have reaction videos, is to get past that. Because I've blocked Fox News, and CNN -- like, all the major outlets just parade this political climate content, this negativity, and positivity in some cases... I just don't want to see any of it. So I applaud them in the fact that I've never seen Fox, CNN, Sky News... And I'm just gonna, like -- I don't know who all, but like several of them, where I'm just like "I'm done. I don't want to see any more of you in this feed at all. I'm here for the barbecue, the occasional homelab stuff, and whatever else. That's it."

**Jerod Santo:** And the mountain biking.

**Adam Stacoviak:** That's right. Show me how to change a tire, man. Come on!

**Jerod Santo:** A microcosm of that is did you know that during the -- remember the Johnny Depp trial, which was probably 18 months ago now?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** The algorithms were so keen on that content, that actual other creators started to shift their posting away from whatever they -- I don't think Techno Tim did this, but for instance if you're a homelabber, content creator on YouTube and everywhere else, all of a sudden Techno Tim's talking Johnny Depp trial. It's like, everybody actually -- it was so juiced...

**Adam Stacoviak:** I've seen that. Our good friend from Heavy Spoilers, he did that.

**Jerod Santo:** Oh, he switched to the Johnny Depp trial?

**Adam Stacoviak:** He put out two videos. Yeah. Paul, from Heavy Spoilers. He put that. He was on a version of this show before, I guess... Backstage...

**Jerod Santo:** Yes.

**Adam Stacoviak:** Talking about Tennant, really... But Heavy Spoilers - he ended up in there. He was like "I don't really want to talk about this, but I have to." So I didn't notice that really, until you said that. Like, I knew that there was like some blowback from other creators getting affected, basically...

**Jerod Santo:** A lot of people were doing it, because they were getting so much more engagement and coverage and boosting of the algorithms, so they did that. Which to me just shows how kind of pathetic we are as a culture, and how -- I don't know, I guess we just serve at the pleasure of the king, and the king is the algorithm of whatever platform you're currently on. And so the incentives are really there...

**Adam Stacoviak:** Or who controls the algorithm.

**Jerod Santo:** Yeah, to do whatever you have to do to get into somebody's face. And as a parent, that's pretty scary, because they are highly incentivized to get in your kid's face. Jared, you were saying that you don't think block lists ultimately are good enough. So you've taken the other approach, right? It's just like, instead of saying all the stuff that can't come in, you're saying "Here's the only things that can come in." Is that right?

**Jared Henderson:** Yeah, that's been my thought. Now, I understand that there's lots of different people and families in different scenarios, different ages and different thoughts on this... And everybody's not going to land in the same place, for sure. But I think I'm not alone. I think there's a decent number of parents that feel like they want to be pretty darn strict and careful about what content their kids either accidentally or intentionally expose themselves to. And I feel like if you're kind of on that end of the spectrum, where this topic feels really important to you, and you kind of care about being really careful, then you really kind of have to flip it on its head in my mind. The whole concept of "Let's just try to block out the bad stuff. Let's trust that somebody's got a list somewhere." I don't think it works as well as people think. I mean, it works somewhat; it is better than nothing. It's one of those defense in-depth, or if that's kind of all you're up for, and that's the only appetite you have, I would say do it. I'm not against blocklists. But I would encourage every parent - if they're dealing with this stuff at home, or thinking carefully about it, I would encourage you to kind of take that penetration tester mindset and just -- if you think "Okay, I'm good. I've taken these steps, I've got this device over here, I checked these settings on their iPhone or their computer", just... I tell people to kind of put yourself in this sort of thought experiment. Take your kid's device, whatever they're using, and imagine that somebody would literally give you $100,000 if you could find something really inappropriate in the next 10 minutes. And I would wager that in the vast majority of the cases, you could probably find something. And I just --

**Adam Stacoviak:** \[00:30:36.20\] First 30 seconds.

**Jared Henderson:** Yeah, maybe 30 seconds. And I just kind of want to open people's eyes to that. And I don't want to discourage people, but I just want people to think realistically about that. I think sometimes the vendors, whether it's Apple, or the people who are selling kind of like safety stuff, sometimes I feel like they kind of sell us an illusion of safety instead of real safety. They say "Hey, don't worry..." All parents want to have this taken care of, but also, this is not the kind of thing that parents enjoy doing. Nobody like wakes up on a Saturday and says "I'm just gonna totally dial in my kid's devices. That sounds fun today." And so we're susceptible to this kind of idea of like "Hey, here's some marketing that says we're going to block 5 million websites." "Okay, done. Now I can move on and think about what I really want to think about." But I just feel like this issue is just so important, and probably not talked about enough, and not deeply considered enough. It kind of pays to have that mindset of saying, it's worth taking some time as a mother, as a father, and just saying "What do they really have access to? What could they get to if they wanted to? What could their friends share with them?" If you kind of open up that whole -- if you're willing to kind of like take the what's... What's that, the red pill or the blue pill? I forget...

**Jerod Santo:** One of the pills.

**Jared Henderson:** You take the pill, then -- one of those...

**Adam Stacoviak:** Red pill.

**Jared Henderson:** The red pill. I think you might kind of be a little bit shocked. And that's where I think, if you kind of have this little bit of awakening and say "Okay, we've got to do something a little bit more intense than this." Right now, what makes sense to me, just kind of at a fundamental level, is you've got to flip it; you've got to block the entire Internet, and then you've got to just Safelist the parts that you want your kids to have access to. And different parents are gonna have different appetites. I'm kind of on the strict side with my kids. It makes sense to me. I have so many thoughts about this... But I think if some people knew how strict I am with my kids and their internet usage, they might say "You're a little bit crazy." But I talked to them a ton about why we do this with them. I talked to them about stuff that I got into as a kid, I talked to them about what I keep myself out of as an adult. And it's not just this kind of like comes from on high, of like "I'm gonna block you out of everything, because you're a terrible person." It's in the context of a lot of dialogue, and relationship, and I kind of... I think they understand it, and they become sort of allies with me. And they'll rush in and bring me their phone, or bring me their computer, and say "Hey, dad, I've found a -- this isn't working." Or "I've found this thing. Can you block this for me?" And they've kind of internalized that this is an important thing to do. But I'm kind of on a tangent...

But yeah, the idea of safe-listing instead of blocklisting I think is huge... And when you look out there in the market for tools to do that, there's just -- very, very few tools do that. And I think it's because it's complex, it's hard to do, it can be cumbersome for the parents, it requires some technical savvy that a lot of parents don't have, and it's just so much easier to kind of press the Easy button of "Block the bad stuff for me."

That's the experience I had... I knew I wanted to take this approach of blocking everything, and so I found what I thought was like the best thing on the market for Mac computers. That's kind of what my kids were mostly -- we're like an Apple household. And I'm like "Okay, for Mac computers, how do I do this?" And there's only a couple things out there that will even let you work in that mode. And I used one of them for a number of months, and just found it incredibly onerous, and difficult, and time-consuming. And like you were saying earlier about some of the ScreenTime stuff, like kind of buggy, and just weirdly stopped working... And as a programmer -- I guess most parents, they would probably just be like "This is terrible" and they would probably turn it off. But as a programmer, you're kind of like "That's not how I would have done it. I would have built it like this. Why can't this talk to an API? Why did they have to bring their computer over here onto my desk? Why do I have to type this domain in here? I would build this."

\[00:34:29.07\] When you have to use a piece of software you really don't like, you just kind of build up this wish list of "I wish I'd had this, and this, and this." And one day I just kind of -- we had one of these bugs, one of these failures where, luckily, my daughter came to us and said "Hey, this just stopped blocking the internet, and I can get to this, and this, and this." That kind of just like pushed me over the edge and I said "I've got a little extra time." Like, there's always that naive feeling when you haven't tackled a problem here, you're always like "How hard could this be?" And I just thought "I'm gonna give this a shot." And that's kind of how I got deeper into this world than I was back then.

**Adam Stacoviak:** So does this is work on iOS, or is this Mac-only for now? What's the -- it's a one man show, I'm sure, so give us some of the lay of the land of your footprint and where you protect and whatnot... Because I've got questions about iOS more so than the desktop, really.

**Jared Henderson:** Yeah, it's a good question. So yeah, it's mostly a one-man shop right now, so it's pretty small. And to be honest, I built the thing almost 100% for me at first. I knew I would use it and I knew my brother would use it. But that was -- I didn't even necessarily think that anybody else would use it. And so I'm mentioning this just to kind of answer your question about iOS, because I didn't have a need - and honestly, I still don't have a need for running like my own software on iOS, although that's slightly changed with that whole iOS 17 regression that hasn't been fixed yet... But my kids and their iOS devices I felt pretty good, about partially just because I don't give them devices until probably way later than most people. And that's just one of those simple - like, if you want a simple non-techie thing that parents can do to keep their kids safe, I'd say start by giving them a phone way later than most everybody else. It takes no technical skills, it just takes a little bit of courage.

My kids didn't get phones till they were quite a bit older. And then using ScreenTime, and all the really good stuff Apple gives you - I had those things super-locked down. They don't even have Safari. They can't even browse the internet on their phones, because their phones are for calling us, for texting, for a couple apps that I think are valuable... There's a little bit of like a mindset thing, like "Why do our kids have phones? Why do they need them?" Do we want our kids to have these devices that are just these unbounded portals to the internet for arbitrary exploration? I don't know that that's a great idea. There's some wonderful things about smartphones, and you can know where your kids are, and stuff like that... But I think sometimes we just don't think about it, and we just think "Well, other friends have a phone. I'll give them a phone", and we're okay with everything that comes along with it. And I know Android has some good tools in this regard, too. I'm just not as familiar.

But basically, my kids had their iPhones super-locked down, and I was comfortable. But what they needed to do is they were doing a whole bunch of schoolwork on computers. It was like during COVID, and we homeschool anyway... And more and more, as they got older, they're working on computers. So for me, it was like "I need something for a Mac. macOS." That was my target. And so anywa, I was totally just scratching my own itch and saying "I'm going to build this for me. And if it works for me, then I'll be happy." And so kind of the initial prototype of what's now called -- well, always it's been called, Gertrude. It's Mac-only. And that's where it still is today.

\[00:37:42.21\] But Adam, you were asking about iOS... I have users kind of reaching out to me and who've said -- it's a common thing, as people say "Oh, I want it. Why doesn't it work on iOS? Why can't you do it?" And I'm open to -- yeah, I don't know... There's some challenges there, just from the API surface of what Apple exposes for people like me, what you can and can't do. The core answer is I built a thing kind of for me to start with, and what I needed was a way to lock down Mac computers, not iOS devices. But I recognize that not everybody's in that same boat. And I actually have some -- real shortly I'm going to be doing some prototyping some experiments with kind of porting Gertrude to iOS. And I don't know if it's going to feel like "Yeah, this is worth it, and I should go there", but I'm at least gonna experiment with that. There's some aspects of what Gertrude can do that will work on iOS, in the parameters that Apple gives you, and there's some things that we do in Gertrude that I literally can't do. And so it would be kind of a different animal, you know what I mean? But I know there's an appetite out there for it, and I'm definitely looking into it.

**Jerod Santo:** What kind of stuff can't you do, that you're doing?

**Jared Henderson:** Well, for instance, Gertrude right now allows you to -- you can opt into this feature where it takes a semi-randomized intermittent screenshots approximately every so many seconds. So Gertrud really is like a combination of this sort of whitelist blocking of the internet that I described, plus a whole bunch of kind of like tools and concepts around remote administration of that, to make it easy for parents. But it also has monitoring in the form of they're totally opt-in, but there's two ways you can do monitoring. You can take screenshots, and we don't ever hide this from the kids. It's not like a sort of a creepy, scary, spy-on-you thing. If I've got that feature turned on, your kid is sees in their menu bar that Gertrude is recording their screen. So that's something like no matter what they're doing, no matter whether they're on a browser, or using some app, or doing homework, Gertrude can just take you pictures of what they're doing, and they upload it, and then kind of on the parents free time or whatever, just in the Gertrude web app, you can just sit there and thumb through and see all the stuff that your kid's doing.

I mention that because that's a thing that macOS allows you to do. Now, you have to grant permission one time for -- kind of like if you've ever used Skype, or anything that wants to record your screen, you've got to give it permission one time. But once you've done that, I can arbitrarily take screenshots and upload those for parents to review. And iOS just doesn't let you do that. They don't -- it's just a much more constrained environment; they're worried about privacy, they're worried about battery life, stuff like that. And so you can't -- if that were an option, then maybe I would have worked on porting Gertrude to iOS sooner... Because the whole screenshot feature is honestly -- it's like a fantastic tool for accountability. Not for spying on your kids; some people kind of get a little bit like creeped out about that, but it's not... But with their knowledge, it's just sort of like a transparent thing of "Hey, I'm giving you--" When I give my kids a computer to use for schoolwork, there's not an expectation of privacy. This is like a tool I'm giving you to do your school on, and I'm gonna be able to see what you do on it. And they can see that I can see... And it's just very -- it's very similar to like, if I had the time to, I could say "Hey, son/daughter, when you do your homework, I want you to sit on the kitchen table, and I'm going to be over here chopping onions in the kitchen, and I'm going to look up every so often and just kind of make sure you're doing what you're supposed to be doing, and you're staying where you need to be." It's just most parents don't have the ability or the time to kind of like pull that off. But anyway, Gertrude lets you do that. And it opens up actually some really fantastic kind of other properties that you can do as well, like turning off the filter temporarily for a little bit, as long as you have that oversight. But that's sadly something that just I don't -- I haven't fully fleshed out what iOS will let me do and what they won't do... I think there's some possibilities if I install a Safari extension that I might be able to take screenshots while they're on Safari, as long as I have code running inside of Safari at that time... But it's just a much more constrained environment, and the macOS compared to iOS is kind of more like the Wild West.

**Jerod Santo:** \[00:41:54.04\] Yeah, totally.

**Adam Stacoviak:** This is why VPNs exist. I mean, it really is... Because it's the easiest way to get to most of the controls you're trying to do. That's what they do at corporate levels. If you're on a corporate device DNS, you're usually VPN, and it's DNS, essentially; your VPN into a certain network that has DNS restrictions. And that's why DNS tends to be the primary lever pulled by most network security folks.

**Jerod Santo:** Yeah, I wonder if managed phones have those kind of access, to the camera, to these things, to run in the background, whereas a typical iPhone wouldn't. I could definitely see why Apple wouldn't want you to do that, because specifically battery life I think would be significantly affected if you were screen recording the entire time the device is in use. But I think that Gertrude would be useful for iOS folks even without that particular feature of the monitoring; just with the allow list, the blocker is a huge part of what it does. And I suspect many parents aren't as interested in the monitoring as you are, and would still use it without that particular feature.

What that sounds like to me is very much like -- I think schools have these things, where they're making sure you're not cheating; you're using a computer, and you could seriously cheat. Of course, they have all their restrictions on; you can't use this, or that, or the other thing... But at the end of the day, somebody watching you, or even just the illusion of somebody watching you is oftentimes enough to detract from the cheaters in school.

I know when you take the GED, they actually have somebody -- you can take the GED here in Nebraska remotely, and they have somebody who just sits there and watches you. You have to have your webcam on, and it's not automated. It's not a computer. It's like a human whose job it is to watch you while you're taking your GED remotely, and make sure you don't have a book open, or using a phone to Google things along the way... So I definitely see that as a very useful feature, especially in schoolroom scenarios, or people who are using these computers as tools and not as play things.

**Break**: \[00:43:58.08\]

**Adam Stacoviak:** It sounds like though that Gertrude is not a preventative when it comes to the screenshots; it's like more information for the parent to use, or whomever is monitoring whomever. Let's just say this - it could be an older adult, a parent who is no longer that well off mentally, that's being scammed. You still have to protect somebody; like, it could not be just a child, it could be somebody you care about deeply, that doesn't have the expertise, knowledge or cognitive ability to really maintain themselves. It sounds like it's more of an information tool than a blocker; it's blocking the internet, but when it comes to screenshots, that's just giving you feedback on what's happening. That's information to go as a person deal with, not at a technical level deal with.

**Jared Henderson:** Yeah, yeah, that makes sense. And you're right. It works great for parents kind of watching over their kids, kind of being careful with their kids... But that's not the only relationship that -- if you have any sort of relationship where somebody's kind of looking out for somebody else... You mentioned elderly people, and scams, and stuff like that... But I had a Gertrude user reach out to me and say they were -- you know, I kind of market more to like parents and children, because that's what I made it for... But I had someone reach out and say "Oh, I'm using this with my fiancé", and they kind of were saying "Oh, this is the first thing that's really worked for us, because it's so --" You can remotely -- basically, whoever is like the parent in the relationship can kind of like remotely manage stuff. And that was one of the things that -- I was so frustrated about the fact that my kids... It's like, if I wanted to allow a website, the only thing they could do is literally bring it to me and I had to type it in. And this person reached out to me and said "Hey, I live across the city from my fiancé, and I was trying to like manage their allowed websites through this other thing, and we would literally have to drive to each other for me to unblock something for them." And that's just -- so they were kind of saying, just the ability to kind of remotely say "Hey, I get it a notification, I get a Slack, or a text when they need something, and then I can just do it from my computer."

That's kind of one of those things that I think takes -- I don't know, it's never going to be as easy to maintain allow lists as it would be to just block stuff out... But there's all these little things we can do to sort of chip away at the usability and the difficulty of actually succeeding with this approach. And the screenshots are kind of like one thing that really actually goes a long way towards that, because if you can see what your kids are doing, or the person you're helping protect, there's this real natural accountability. And I've found using it with my kids a whole bunch that I had a bunch of sites that they needed to get to for school every day, that I had unlocked, and they just used them and they just worked... But they had all these kind of weird little edge cases where, "Oh, hey, dad, I've gotta get on this Zoom call with my teacher, and they're gonna want me to go here and there, and they're gonna send me links to click", and I can't allow those in advance. I don't know what they are, and they might never need to go back there. And so I didn't kind of realize this when I first started it, but by having those extra layers of like monitoring, including screenshots, it allowed me to kind of build this feature where I could temporarily just turn off the filter... And that sort of came from just -- all this is just me scratching my own itch. I had this six-month period where my daughter, every single Friday at 1pm I would have to turn off her filter for an hour. And I would say to her "Hey, remember, I'm still getting screenshots." I'd kind of wink at her and send her back with her computer unfiltered." And then I thought "Why does she have to bring me my computer for this? Why can't I just remotely control this? I'd rather sit here in my office and just get a Slack message like I do with the other stuff." And so I kind of built that feature, and it's become super really handy for parents or for people protecting other people. They know, "Hey, I'm watching", and they know that they're being watched by somebody who's trying to help them. And that means you get these sort of like rare times where it's like "Oh, the filter's frustrating. I don't know where I need to go, but for a few minutes I need to go somewhere." You can just turn it off, but there's this sort of extra layer of safety of just like the oversight that something like screenshots or the other monitoring feature provides. And some neat things fall out of that, and that's where I'm so constrained on iOS; I've been wondering "Will it be worth it?" But I think it might be.

**Jerod Santo:** \[00:52:06.20\] If we can go back to that fiancée situation and just address it to a certain extent, I think that it's easy -- because I even had this natural reaction and had to kind of gut-check it... It's easy to think little of somebody who would be in that situation, and say "Seriously? You're gonna monitor the computer usage of your fiancée across town?" But as unseemly as it is to talk about, porn addiction is a very real phenomenon, and it can be very destructive, and it can destroy relationships. And one of the things that happens with that is lack of trust. And this could be a tool to help build trust, to provide accountability, and to help that person who is addicted. Addicted folks need help, that's why we call it addiction. And there's all sorts of backsliding, and problems... And even if you desire to be done with something in your life, your natural inclination is to fall back into that habit.

And so I think it's a great thing that you can provide that as an option for people who otherwise wouldn't have that trust; maybe that trust has been tarnished, and they're trying to rebuild that, to have that option. They can both opt into, and they can help each other, and they could really repair something that was potentially broken.

So I don't know, when you said somebody watching their fiancé, my gut was like "Ugh. Who would need that?" But then I had to stop and realize that people do need help, and that people do become addicted to porn, and sometimes they can't stop. And they won't without some sort of help. And so I just wanted to broach that, even though it's not the most fun topic to talk about.

**Jared Henderson:** I appreciate that. I think you're exactly right. Yeah, it's one of these things... Again no one really loves to talk about it, but I think there's a ton of people who are in really, really painful and destructive addictions to pornography, and they desperately want out. And I don't think a relationship like the one I described works without kind of both parties wanting it to work.

**Jerod Santo:** Right.

**Jared Henderson:** And so it's a little bit less -- like, I as a parent, I can just use my parental authority and say "Hey, you're not gonna get on the internet, except for in the ways that I allow you." But in a peer-to-peer adult relationship, I think there needs to be buy-in. But I can tell you that it's not just a couple people who want that. The algorithm, and the access, and just the ubiquity of what's available on the internet these days has -- I don't know, there's been a huge, huge cost to that for tons and tons of people. And not everybody, but there's a very significant number of people out there that I think are caught in a really painful, emotionally destructive relationship with pornography. And the tools for them are -- I mean, there's people out there building tools for this, and I wish them all the best, but I think we need more tools, and we need better tools. And we need to be willing, I think, to talk about this a little bit, and just acknowledge how big of a deal it is. We've just gone through this incredibly transformative period in history, of kind of going -- I think all three of us, when we were kids... Like, there was no internet. We had our problems, and we had different stuff that came our way, but the ease at which you can find stuff on the internet nowadays, and the quantity, and the -- I hesitate to use the word quality, but I think you know what I mean... Like, it hurts a ton of people; it really, really does.

**Jerod Santo:** Yeah. Well, you can imagine somebody who is addicted to alcohol, and they find themselves living next door to a liquor shop. These things are -- and the internet is a double-edged sword. I mean, it's so valuable, it's so useful. It's so necessary today, in 2023, for your life, that there's few of us that could just opt entirely out of the entire thing. I mean, most of them are like retired; they're like "Nah, I don't need computers. I'm retired." Most of us need to be there, and we need tools to help us to be there in a way that is beneficial for our life, and not destructive. How long have you been working on this? A long time?

**Jared Henderson:** \[00:56:14.29\] I should actually look at the day. I feel like it's about three years... Again, it started as kind of just this little hacky prototype of "Can I whip something together that'll just be better than what I was using?" And I think that was around three years ago, maybe three and a half years ago. I kind of got the pre-alpha version just installed on my kids computer, started using it. It had almost no configuration. I always knew from the beginning one of the core things I wanted to do is to be able to like remotely administer it as the parent. There were a couple things like that - I wanted to be able to do it from my computer, not their computer. I also knew I wanted to share... Like, if I was unlocking something for my one son, I wanna unlock it for my daughter a lot of the time, too. So I had a couple of the very sort of nascent key features I built in at the very beginning, but it was kind of like -- like, I took all these shortcuts at first. I had no configuration or real API. I had like JSON files in S3 somewhere, and I could just go and add my domains up there. I did that for a while, and just kind of proved out the theory a little bit, and said "Hey, this is actually -- this is pretty slick. I already like it better than what I was using." Not everybody is going to be able to manually edit JSON files for config, so maybe I'll build a proper UI with a database, and an API, and stuff like that... But just kind of incrementally, as I was building stuff for myself, and then like a few people who knew me pretty closely were like "Hey, can I use that?" And then every time a few more people used it, I would kind of have to like make it a little bit more friendly, and kind of wrap more sort of features around it, and stuff like that. But recently, I've been working on it most of the time, but like for a while, it was pushed really hard for a couple of weeks, got something kind of working, went back to what I was doing, and kind of let it sit for a while.

**Jerod Santo:** Why did you call it Gertrude? Is that your grandma's name, or something?

**Jared Henderson:** No, not my grandma's name... Naming things is hard, right? Actually, I happen to -- whenever I'm working on something, I tend to give them weird names; oftentimes people's names. But I happen to have been -- right when I started working on Gertrude, my second daughter, who I think was 10 or 11 at that time, I was reading this book with her called Gentle Gertrude. And it was all about this governess. And I thought "That's kind of a cool term." I thought about using the word Governess, but I didn't love all the implications. And then I just thought "I'll just call it Gertrude." So it's just a book I read.

**Jerod Santo:** Gotcha. That's an interesting strategy for a piece of software. I mean, we talk about naming a lot, whether a name is good or bad... And lots of names are functional, or they'll reference something; pop culture... Not too many proper nouns, like human names as a piece of software name. I assume that helps a lot with like namespace conflicts. Nobody else is calling their app Gertrude probably, so easy domains, easy branding... For some reason, I do picture kind of a nanny or something, like someone who's watching you; like a nun, perhaps. Is that --

**Jared Henderson:** Like a nice, matronly, grandmotherly figure...

**Jerod Santo:** Yeah. I think of a nun or something, who's running a classroom. I don't know which -- not necessarily a positive connotation in that regard, but nonetheless... Interesting name.

**Adam Stacoviak:** Well, that's kind of what it was. It's an obsolete term based on the internet. Governess is a woman employed as a private tutor, who teaches and trains a child or children in their home.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Often lives in the same residence.

**Jared Henderson:** Yeah, people should use the proper noun naming. My old business, we had all these internal tools, we could never figure out what to name them. We had this reporting backend, and we called it Bob. And then we had this other thing that kind of did all the business logic in our web app, and we named it Tim. So I don't know, maybe it rubbed off on me from just naming stuff after random names... But it works.

**Adam Stacoviak:** \[01:00:07.22\] I choose -- for my machines at least, I choose usually some sort of ship from a movie. So Endurance is my kind of primary, beefy machine. I have another one called Homestead, which is actually not -- it is in my home, and it is my homestead, but it's actually the ship from the movie Passengers. They were flying on the Homestead, going to their destination, or whatever. I'm like "That's kind of cool." It doubles up. It's like in my home, as a primary machine, and it's also called Homestead.

**Jerod Santo:** My favorite naming convention of all time was when I did all of the names from the TV show MASH... Because there's a bunch of good names. So you had Radar, and that was our Nagios box that was watching the network... You had Hawkeye and Trapper - those were the mail servers. You had Hot Lips Houlihan...

**Jared Henderson:** I was just gonna ask if you used Hot Lips.

**Jerod Santo:** We did. It was the xmpp server, so maybe a little bit going after her there with the Jabber, because she was always running her mouth.. And then we had -- oh, we used them all. I can't remember them all now. But what was the doctor, the stuffy guy? Not Winston...

**Jared Henderson:** Yeah, I can picture him, but I can't think of the name.

**Jerod Santo:** The bald guy. Anyways. Eventually, that network outgrew the show MASH, and I got angry, because I was like "Ah, now what am I gonna do?" I think we might have switched to Seinfeld, or something at that point. But... The good old days of treating our servers like pets. I like cattle, you know? Alright, cool. So Gertrud, macOS only for the time being. It apparently has a web app component, so I assume that you're Swift on the macOS side, and... What are you running on the server side? What are your tools of choice?

**Jared Henderson:** Yeah, so it has a web app, you're right. That's kind of the parent or the person who's functioning as the parent in the relationship. They use a web app, so they can kind of administer and review stuff, and unlock things for their kids no matter where they are, as long as they have a web browser. I am actually running Swift on the server too, which is not a terribly common thing to do, but yeah, the whole Mac app is written in Swift, partially because I was learning and kind of getting into it and kind of enjoying Swift. I thought "Maybe I could --" Swift on the server was kind of a thing, and sort of a new area, at that time at least. It's a little more mature now, but I kind of jumped in in fairly early days, where there weren't a ton of libraries, and it's not like everything was already solved for Swift on the server... Which a little bit appeals to me, because I'm a little bit of a guy who likes to roll my own things sometimes... But yeah, the API is written in Swift, and that allows me to actually share some code, which is nice. That was one of the -- some of the core types that are shared kind of between the API and the macOS app, they're literally the same Swift code, and they're just an SPM module, and both the server app and the macOS app can import that and share that stuff. And then, of course, the web app's built in TypeScript. But I do some interesting stuff -- interesting to me at least, about like typesafe \[unintelligible 01:03:02.07\] a little bit like GraphQL. I do some kind of my own deal, where I kind of take some of the types that live in the Swift world and kind of generate TypeScript types for them. I know you're not a big TypeScript guy, Jerod...

**Jerod Santo:** No, I'm not...

**Jared Henderson:** You'll get there one day, but... So yeah, we're kind of heavy on the TypeScript side for the whole web app world, but that it's like a ton of Swift other than that.

**Jerod Santo:** That's cool. So I had never met somebody doing Swift on both sides. I've heard it's a thing... Are the website frameworks, and everything -- you said you started off there, it was kind of rough... Are you using anything that's like a major framework? Or is it all libraries that you're gluing together? How does it feel from that perspective?

**Jared Henderson:** Yeah, I'm currently using something called Vapor, which is probably the most well known Swift server web framework. Although if I were starting again today, I actually might -- there's some other ones that have... It's a little bit more batteries included, full; it's a little bit aiming to be kind of like the Rails of Swift, and I personally lean a little bit more towards -- I would rather kind of have pick and choose some smaller parts. And there's some more slimmer frameworks. There's one called Hummingbird out right now, that I kind of have my eye on a little bit... But yeah, I use Vapor, although I don't use a ton of it. It's got a templating language, and it's got an ORM, and I actually ended up sort of slightly rolling my own Swift ORM for talking to Postgres.

\[01:04:25.23\] The ecosystem is pretty decent, and it's growing all the time. There's fewer holes now if somebody were interested in doing Swift on the server. I think honestly the thing that draws the most people I think to Swift on the server is if they're in some sort of situation like I was, where their primary thing they're building is either an iOS app or a macOS app, and they just have tons of code and tons of logic and business types kind of in Swift. It's pretty compelling to be able to just say we can share a lot of this code, and we don't have to have our server written in Go and our iOS app written in Swift, and then do the three language thing... It's a pretty great language, too. I've actually enjoyed it quite a bit. It's got its warts, like they all do, but...

**Jerod Santo:** Sure. The isomorphic application, you know? Everybody's going after the JavaScript isomorphic apps, but it turns out Swift also can play that game. That's pretty cool. Have you considered open source, or self-hosted? I know you're trying to make a little bit of money off this, but it seems like some of your audience are the kind of people who would love to self-host. And then there's plenty of people who you could still make money off of, who are just regular Joes who want the solution. And so I don't think it necessarily would detract from your sustainability story by allowing the nerds like us... Because Adam wants to go self-hosted with everything. So have you considered that? Like open-source the web app side, or self-host it, kind of give to the indie hacker community at all?

**Jared Henderson:** Yeah, that's an interesting thought. I've never actually seriously considered it. Yeah, I mean, at this point I'm trying to make a little money. Right now I'd just be happy if I stopped losing money on it... \[laughter\] That's where's where I'm at, to be honest...

**Jerod Santo:** How much you got into it, if you don't mind us asking?

**Jared Henderson:** I mean, not vast treasures, or anything. I would have to -- it's an expensive little side project right now, and the number of users that is not really offsetting yet kind of the...

**Jerod Santo:** So you're currently bleeding at the moment.

**Jared Henderson:** Yeah, I'm bleeding a little bit. But it's alright. I wonder how much of an appetite there would be for like a self-hosted -- like, you're saying like basically the API and the web app, if somebody could host that, put that on their own domain, make sure their Gertrude Mac apps talk to that API...

**Jerod Santo:** Yeah, exactly. Like maybe you add a config screen that nobody normally sees, but they could just change the backend in the Gertrud apps on the desktops, and then use their own... Just because autonomy is of interest.

**Jared Henderson:** Sure. Transparency...

**Jerod Santo:** Yeah, all the things.

**Jared Henderson:** Well, let me ask you this question... Because one of the reasons why I've been -- like right now, the web app is not a public repo on GitHub. But one of the things that's kind of made me reluctant to do that is I'm building a piece of software for security and safety for your kids, and I had this thought that if it gets moderately popular, and someone says "Oh, you know that like the Gertrude parents website is like on GitHub?" and then I've got people crawling all over, looking for things that I didn't realize, little security holes, trying to reverse-engineer something, or find some route where I forgot to do my authentication correct, or something... I think I got all that stuff nailed down pretty good, but I love doing open source stuff, and it's many of the things that I can just do -- I've got this whole other world I work on, and that's 100% open source. But whenever I've thought about it with Gertrude, I've thought "Oh, this is just not something that I think makes sense to be completely open." But do you think that my intuition is wrong in that regard?

**Jerod Santo:** I would tend to think it is. I understand the intuition. I think it's the devil you know versus the devil you don't know. I think if you Gertrude becomes popular, you'll have as many or offsetting contributors and smart parties who are helping you with security, as you will have people who are coming against your security. So you'll have more eyes on the source. Of course, that means potentially people will find you more problems, but also means people fixing more problems.

\[01:08:15.06\] And I think today's attackers are significantly good enough that they don't really need your source code in order -- like the fuzzers are good enough... They can just bang on your API in all the weird ways, and find bugs, where especially if that's all you're exposing as a service, I think they're not necessarily going to find too much that they couldn't find themselves just by banging on it. So not a guarantee, but I think "It needs to be secure" historically has been an argument for not open-sourcing things. I think there's a lot of things that need to be secure that are out there, in the open source world, and there's studies and stuff that prove that they're potentially even more secure than they would have been otherwise. I can see both sides of that, but I think it's more of a coin flip than it is like you're screwing yourself by doing it.

**Adam Stacoviak:** I think it kind of depends on the long-term vision too, really. Let me ask you a couple questions, I guess, to understand your long-term vision. Would you work on this full-time if you could?

**Jared Henderson:** I would. I think so. Because I care about it. Because I think it legitimately could be helpful. It feels worth doing. I know that maybe sounds a little like I'm singing Kumbaya or something, but I really do feel like there's a... Some of the stuff we talked about, about people hurting, and addictions, and also just young people kind of getting into addiction when they shouldn't even have access to those sorts of things. Like, those things kind of feel really important to me, to be honest. And so if Gertrude filled a little niche that was legitimately helpful to some people, I'd be -- yeah, I'd be pleased to work on it full time. I mostly am already right now, but...

**Adam Stacoviak:** Mostly. Well, have you thought much about the business model? Have you thought at all about the business model? Because you just said you'd be happy to not be losing money. So I'm curious what you've thought about the business model.

**Jerod Santo:** There is a model currently.

**Jared Henderson:** Yeah, you've got to pay me five bucks a month. That's the model.

**Adam Stacoviak:** That's the model. Okay.

**Jared Henderson:** Maybe that's a naive way to think about it, but... Yeah, I just thought a monthly subscription is kind of enough to pay for start there. I've always kind of been the "Have people pay for it from the beginning", kind of bootstrap it. I'm pretty averse to like -- not that anybody's knocking on my doors with VC money or anything, but my first sort of small business that I made, I built a thing, and I charged for it from day one, and that sort of like ethos kind of always appealed to me. A little bit like the 37signals, their early literature about "Hey, build something, charge for it, and bootstrap it." That always kind of fit with what I wanted to do.

There's a lot of things where people are taking software, and -- everyone wants a monthly subscription, and I feel like there's a lot of software where it's like "Really? This is a monthly thing?" where they're kind of shoehorning it into that. Whereas I feel like this seems really logical, of like a --

**Jerod Santo:** It makes sense.

**Jared Henderson:** It's natural. I've got to keep the API running, I've got to pay all this stuff on S3, and I've got to be able to text you, and I've got to do all these other things, and so I need a little flow of steady, as long as you're using it. But I've tried to be really generous, too. I know parents -- like, right now, if you sign up for Gertrude, you can protect your whole family. I don't have a limit right now. You have 12 kids? Protect them all on your monthly subscription. Maybe that won't be sustainable, and maybe that's why I'm not earning any money yet. I'm not maybe the best business guy, but... \[laughs\]

**Adam Stacoviak:** Where we're getting here from is Jerod asking you about open source, and your concerns for like does it make sense, because it's a security tool... And then I think about things like pfSense, which can be deployed on AWS, you can protect, in the cloud, with a - in their words - a secure open source firewall that everybody can trust, security starts here kind of thing. And I just wonder if the model of open source might make sense, because of the distribution and the freedoms. And so if you found a way to do that -- now, I'm not ideating on the business model necessarily, but one of pfSense's ways to make money is through support and management, and things like that. I think that's part of their business model.

\[01:12:13.25\] I just wonder if there's ways that you can help families deploy this for themselves, provide support... That also means more people potentially, but I just wonder if open source, that route gives you the distribution and the freedoms within the software to reach the widest market globally, because it's simply out there free, and you provided a hosted service. So you consume the open source, you host the open source service with things up around it, but I can easily also stand up my own version of that with Docker on my network, or whatever. Or on a cloud, on a VPS; I can one-click Deploy Digital Ocean if I don't want to manage local infrastructure with whatever, and all I'm doing is API calls to my $10/month thing at DigitalOcean.

I'm just thinking out loud here, because -- I'm not saying all those are good, or right, or bad, it's just, are there freedoms that come with it being open source, and distributions that come from open source, that kind of are at the core of what you're trying to do anyways, which is provide a useful tool to the world, that might also be more secure because of more people knowing about it, caring about it, pouring back into it etc.

**Jared Henderson:** Yeah, that's interesting. I'm really sympathetic to that. My wheels are already spinning a little bit, and just thinking "Yeah, why don't I open--?" I mean, not so far as to immediately go to like building a self-hosted version, just because that's a lot of work, but like just a simple step of "Hey, I could go open-source this stuff. It's probably just as secure." That actually sounds really good.

I think that there's a possibility of long-term kind of like allowing self-hosted stuff. That'd be great. Because if they want to self-host it and take on themselves the expense of like maybe put it on a $5 DigitalOcean droplet, that's great.

**Jerod Santo:** Yeah.

**Jared Henderson:** The one thing I would sort of push back on that is there's a pretty small percentage of -- like, we're not talking about a developer tool here. Like, if we were talking about this is like -- and you guys normally talk to developers, and your people building tooling for companies, and engineering teams, and stuff. Gertrude's a thing for normal parents, and I would guess it's a very, very small percentage that would have any sort of idea to think "Oh, can I host this on my own Docker instance?" And you guys are super-technical and knowledgeable about that stuff, and it just clicks with you, like "Hey, I want to run it myself." But honestly, one of my main sort of passions about this whole thing is I really feel bad for ordinary parents, with ordinary computer skills, and just this sense that most of them are completely overwhelmed by this. And I would like to put a lot of time and effort basically into helping normal parents succeed at keeping their kids safe. And to me, that feels more compelling than -- I don't mean to say that you're not important too, Adam, but like that small percentage of people that might...

**Adam Stacoviak:** I know I'm not...

**Jared Henderson:** ...potentially run their own, you know? I'd love to do both, and maybe I will, but I just think - ah, the soccer moms out there, and just the... Whatever. I want them to not feel overwhelmed, and so that's what I'm working towards.

**Adam Stacoviak:** My thought is this, is that you don't have to choose one or the other. I think you can do both. I think that Gertrude, the hosted version of it is for "the soccer mom", or somebody who just doesn't seem to be that connected to technology, spinning up a Linux box, or managing a VPS, or whatever it might be. These things that we know, because we're technologists, and we play with this stuff because it's fun for us. That's where I think that comes into play.

Linux is widely distributed because of its model, its open source nature. It's many distros of many flavors. pfSense is widely used because it's open source. It's also a security tool. Imagine if they kept pfSense behind the scenes and said "Okay, this is not open source. This is only a paid for product." Would it be the same pfSense? It is probably arguably one of the most deployed firewalls out there, aside from say UFW, because that's like free, and an apt-get away; it's pretty easy to install that and configure it. But pfSense is a tried and true router, firewall, all these different things rolled into one. And you can deploy it on cloud, you can do it many different ways. It's the core software, I think... And again, back to how we got there - it wasn't me advocating, "Hey, open-source this", but more so the security measures. Can you be more secure? Or can you have potentially better software that meets the needs of the world if the world uses it, if the world can give back to it and care just as much as you care? ...but still give you the freedom to spin up Gertrude, the hosted version of it, which is for the everybodys, essentially; the non-techies.

**Jerod Santo:** \[01:16:46.09\] This is how I would look at it, is that Gertrude is in no way -- what's the word? ...threatened by an open source self-hosted option, because of the reason that you stated. If it was a developer tool -- I think developer tools need to think more seriously before they open-source, because they are more directly cannibalizing their line of income than you are.

**Jared Henderson:** Yeah.

**Jerod Santo:** Because 98% of the people that need Gertrude don't know what open source is, or Swift for the server, and are never going to stand up a self-hosted version. Or Docker, for that matter. So you're not really in a position to cannibalize a potential income stream, which is one of the things open source can certainly do; if everyone just self-hosted, they don't hire you to host it, then why would they pay you any money? So I think that's not a threat for Gertrude.

So then what's the upside, on the other side of the equation? Well, you said there aren't very many people who are technical, and have this problem, and maybe understand Swift... But, I mean, you're talking to somebody from not halfway around the world, but halfway across the country, who even shares your exact same name. And I'm technical, and I can code Swift, and I have the same inclinations that you have. And so you've found at least one other person, and Adam also, where the potential -- like, the world is big, there's a lot of people... And what you could find is maybe you find nine more Jareds out there, people of like mind with you, who also want to hack on this... And maybe they're the only ones who ever care about that open source version, but now you've multiplied yourself times nine, and you have a community of folks who have their own ideas, and their own skills, and maybe they can fill gaps that you don't have... And you can hack on it together with them. And they self-host theirs, you host yours... I mean, it could be a very Kumbaya moment. Maybe that doesn't happen, but it's low risk, I think, and there's an extreme upside of realizing "Actually, there's hackers out there", and you just might attract them. And maybe all of a sudden, Gertrude gets better than it ever would have been, because one of those hackers has a great idea you never thought of... And by the way, he opened a PR while you were sleeping, and all you've got to do is hit the Merge button.

I mean, there's potential high upsides, and I think in your case, the downsides are relatively low. So I would encourage you to think about it... And I think - no guarantee that that happens, but that's how communities are built, and communities can do amazing things.

**Adam Stacoviak:** It's more possible that way than it's not though, right? Like, if you do the open source route, it's more possible to gain technically free labor contributors. Ideologically you're aligned, so they're giving their thing; that's how open source works. But you're more inclined to get it going that route than you are not, because you can't not being open source. You have to be open source to get that gift right back to you.

**Jerod Santo:** Right.

**Jared Henderson:** Yeah, that's really interesting. I'm definitely open to you guys being right about that. And like I said, the fact of even just the code not being open source is kind of against my inclination to begin with. So yeah, I'm intrigued by that. And you're right, I don't see it being like a threat. Even if it were a threat, I don't -- that's not why I'm doing this. So yeah, there's not a huge downside. Really, the main downside is prioritizing the time and investment of just like -- you can't just wake up one day and say "Oh, I have a self-hosted version." It's a whole bunch of work to put in... And I just need to ask myself, would it be better for me to work on an iOS app before that, or build in more things for the core Mac app experience? But I'm really sympathetic, and I appreciate the insight on that.

**Jerod Santo:** \[01:20:21.17\] I would certainly open-source it before I set up a self-hosted. Actually, I'd open source it, and on the readme be like "If you want to self-host this, I'm accepting scripts, and pull requests, and whatever." Because that would be the first thing I would do as a guy who wants to self-host it. If I see it's open source, I'd be like "Okay, is there a Docker image? Oh, there's not a Docker image. Well, that's an easy pull request for me. I'll go build the Docker image, and see if Jared likes it." And so you may start getting those kinds of contributions to where you never have to build a self-hosted version, because that's maybe what the community does, for instance.

Now, you'd have to build stuff into the Mac app as well, so I don't want to act like it's zero work... And I definitely think the iOS app is probably higher priority, but... How much do you have to do to open-source a thing? I mean, that's a question people probably ask themselves... And it's like "Okay, a code review, a license selection, a readme, make sure there's no secrets in there", that kind of stuff. Maybe clean up the ugly parts, if you have an ego as big as most people's... And that's about it. \[laughs\]

**Jared Henderson:** Yeah, it's pretty -- I feel like I could basically click the button in GitHub today if I wanted to...

**Jerod Santo:** Make public. Yeah, exactly.

**Jared Henderson:** Maybe I will. Because I've been pretty careful about environment variables...

**Jerod Santo:** There you go.

**Jared Henderson:** It would help me keep in the free tiers of some of these services I use, too. It's frustrating... You know, you go off this cliff when you've got a private repo...

**Jerod Santo:** That's true. Free for open source. Bam.

**Jared Henderson:** Right. So... You guys are talking me into it.

**Adam Stacoviak:** Let me blow your mind with one idea though, too.

**Jerod Santo:** What, you've got an idea?

**Adam Stacoviak:** Just more of an observation, really... I think about the long view of this; you know, 10-15 years down the road, let's just say, which is not impossible to consider... The internet's gonna be there, people are gonna be there... Hopefully there's been no World War threes, or fours, or whatever, to make that... So assuming none of those things happen, we're still here, the internet is still here, people are still here... Today's child is tomorrow's mother or father. Like, if this is open source and it has a long life, and they were once in their past protected by their loving parents, and in the moment they didn't realize all the details... But I know it's hindsight. Like, I think back to my mom all the time - things she did, and things I didn't like as a kid, but now I appreciate as an adult... The ways that she covered me, and protected me, or guided me... And I think "Wow, that software protected me when I was younger. I didn't agree with it, but it's still there today." It's like Linux, it just keeps growing. And it's just there, and it's known; it's got the brand equity from being available. I don't fully agree with the name Gertrude, so let's maybe workshop that one, but... \[laughter\] Either way, the idea is that today's child is tomorrow's parent, right? They have a past of being protected, and a future where they're like "Wow, now I've got some kids", or "I've got this fiancé situation" or "This accountability partner situation", with someone from their community, that they're just trying to help be more safe... Because of this choice back in the day, that made the long-term where possible, you have this lifetime of a legacy in a way.

**Jerod Santo:** That'd be cool.

**Jared Henderson:** Yeah, that'd be great. Yeah, I like the thought of -- the generations are going to turn over; it always happens. And that's one thing, I feel like a little bit we're living through this weird transition period where -- like, our parents didn't need to really... I wish they had kind of been a little bit more careful, but the internet was such a brand new thing in 1996 when I was getting in trouble that they had no clue what I was even doing... But we've kind of like move past that, and we're raising kids in this environment, and they're gonna be raising kids in this environment. I hope we can kind of like as a society sort of figure out a better way to kind of navigate this. And I don't think kind of doing nothing, or just sort of hoping for the best is a good approach.

\[01:24:08.06\] I think that we're gonna have to gain some wisdom, and then we're gonna have to pass on some wisdom. And it'd be great if -- like, I've seen some teenagers and adolescents who their parents have been really, really careful with them, and I think it's borne really good fruit. And I've seen them transitioning into adulthood, and it makes me really hopeful for kind of what they might be able to do, and sort of passing on that wisdom. So yeah, I love the thought of people kind of using Gertrude multi-generational. It sounds awesome.

**Adam Stacoviak:** It's either that or go work for Apple, and solve the problem at the top layer. That's like a version of DNS solving, because -- you know, I really think a lot of this should be built in as ubiquitous as Apple is, and as privacy and safe as they say they are. I think there's so much to be done with ScreenTime, so much to be done with even the idea of profiles. With an iPad, for example; I know we're talking about iOS here a little bit, but you don't have that notion in that kind of device, where you have layers of security, essentially. You just don't have that.

**Jerod Santo:** Right.

**Adam Stacoviak:** And I think that's -- it should be dang near outlawed. It'd be different if they were a minority. They are a majority. And so influential in leadership.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I don't understand why schools can have protections, but parents can't, or households can't. There's almost no paying attention to household operations from a security standpoint. We have to rely on open source tools like Pi-Hole... Which is super-awesome, but it's got limitations. We've got to rely on ScreenTime, and it's poor reporting, as Jared mentioned... Jared 1, or ya' boy, Sh'ya Boy, that Jared... And it's just fraught with error. It's not meant to be a toy. It's actually called ScreenTime. It's not called Security Time. It's just meant to sort of give you the necessary initial levers to do some things to monitor your screen and the time you spend on it; not so much like security time or screen time, it's only scratching the surface. They may have even done it just because they had to. It's not like they went the depths necessary. And I have no idea... If there's somebody from Apple listening to this and they're like "Adam, you're wrong. We've gone super-deep. We have a freaking division built around this. We spend a billion dollars a year doing this." I'm sure it's probably true, but... Talk to us.

**Jerod Santo:** I would say that ScreenTime is very well built out in terms of like feature set, and they thought of a lot of aspects of it. So I think it is almost to the point where it's difficult to do right, because there's so many little sub screens... And is it content restrictions, or is it app limits? It could use some work, but I do appreciate how much they put into it, because it does give you at least one layer, as we've been talking about, that you can deploy at the phone level.

I'm curious about the PC side, the Android side, the Linux side... So if you're at the macOS level; your big market, at the desktop, still is Windows, right?

**Jared Henderson:** Sure.

**Jerod Santo:** So Gertrude for Windows is probably next on the list after Gertrude for iOS, I would assume. Isn't it, Jared?

**Jared Henderson:** Yeah, I'd be lying if I said I hadn't thought about it... But I'm also, like I said, mostly a one man shop at this point. I've got my nephew helping me with a bunch of the website stuff, but...

**Jerod Santo:** There you go.

**Jared Henderson:** And my son a little bit, too... Both of whom have been protected with Gertrude. It's pretty funny, I've got two people working on Gertrude who are a little bit less now as they've gotten older, but who were being protected by Gertrude while helping me build Gertrude. It was pretty cool.

**Jerod Santo:** Be careful now. That's where the real security holes come from. Always from the inside. \[laughs\]

**Jared Henderson:** Yeah... But I've thought about Windows -- because that's the thing, again, I've built it to scratch my own itch, and we use Mac computers. And sometimes I tell people, I'm like "I built this thing" and they're like "Oh, it's great. How do I put it on -- my kids use Windows." And I'm like "Ah, I've got nothing for you at this point." But I'm open to it, and there's some -- you know, I have hopes that if I were to ever look into that, that there's a lot of like core business logic, and code even... I mean, you can compile Swift down with LLVM, and it just turns into machine code; you can run it on Windows. In fact, the Arc browser is about to come out with a Windows version, and that whole thing is written in Swift.

**Jerod Santo:** \[01:28:22.15\] Interesting.

**Jared Henderson:** And they've actually got a guy who is on the core team of Swift, who's working on there. Swift on Windows is a little bit like -- it's lagging behind, but it's coming there. That's one of those areas where I think Rust is ahead of Swift; their cross-platform story is better... But Swift has some pretty nice properties, that make it good for -- theoretically good for compiling for different targets. So I've been watching that world with a little bit of interest, and wondering -- of course, there'd have to be a layer that's independent, at some level, where I have to talk to Windows APIs, instead of the APIs that Apple gives me for network filtering, and stuff like that... But I've had thoughts that if this kind of gets a little bit of a life of its own, and it feels right, and enough people kind of want it on Windows machines, then I'd definitely be open to looking into that.

**Jerod Santo:** Not to beat the dead horse, but that's another area where an open source community -- that's the kind of thing, it's like "I want this on Windows." "Oh, we're a little bit busy over here, but we would certainly help you get that going", and then somebody else is actually --

**Jared Henderson:** PRs welcome.

**Jerod Santo:** Yeah, somebody else is taking that on; if they have an API they can hack against it. They could self-host, or something. So I'll drop it. I've made my case, but...

**Jared Henderson:** Point taken. I get it, I get it.

**Jerod Santo:** It's true. It's just true. Like, whenever you don't have enough stuff to do... It's also a nice excuse, like "Well, we'd love a Windows support, but we don't have the funds, so... PRs welcome." Alright, anything else, guys, before we call it a day? Gertrude.app...

**Adam Stacoviak:** Yeah, Gertrude.app is the place to go, right?

**Jared Henderson:** Yeah, head over there.

**Adam Stacoviak:** How do you spell Gertrude, Jared?

**Jared Henderson:** How do you spell it? G-E-R-T-R-U-D-E.

**Jerod Santo:** Dot app. I love the .app domains.

**Jared Henderson:** I'm sorry, I -- I told you I'm not a good marketer. Yeah, please go to Gertrude.app. But yeah, check it out... I mean, it's -- I don't know. I think a little bit the audience of this podcast - we're almost all techie people, mostly software engineers and stuff, and I think in some ways it's because some of the complexity involved with kind of the approach that Gertrude takes, doing an allow list instead of a block list, it's like, it'd be easier, I think, for developers to kind of like check out. I think they could probably grok it quicker than most people at this point... Although, like I said, I really care about the average parent; that's who I'm working towards. But I don't have all the things built that I want to, and I think that developers could actually probably more easily get some use out of it for now.

And I also think we have a little bit -- you were talking about how we can't install Pi-Holes on all our friends' houses, and that's true... But I also think that we do have a little bit of responsibility that falls to us to help the people that we have close relationships with... And if you're gonna spread out your time of technical things, maybe let's all do a little bit less fixing our neighbor's printer, and maybe kind of help them with this stuff instead. I think long-term it's so much more important to help people feel like they have control, and that they're kind of guarding the hearts of their kids as they grow up. That's a thing I would encourage people just listening to this; if you're probably in the top 5% in terms of like tech-savvy, or top 1%, just consider helping a few people figure this out. I think it'd be time really, really well spent.

**Adam Stacoviak:** For sure.

**Jerod Santo:** Well said. Adam, any last words from you?

**Adam Stacoviak:** No, I just want to commend you on the website, too. It's a great website, a lot of good information there. I love the visual of the losing game of the amount of websites on the internet. I think that's just super-cool, how you've visualized that. You mentioned the help you got from your nephew. I think you're all doing a pretty good job for being an upstart, a single-person/extra-helper upstart. I think that's pretty cool. Definitely better than most out there to show off who you are. You've thought through a lot of stuff... And you also offer a 60-day trial, which is very generous of you.

**Jerod Santo:** Nice and long. So you're saying he's a good marketer... Is that what you're saying?

**Adam Stacoviak:** I think he did a pretty good job, honestly. I mean, this is pretty solid. It's a good base to build from, for sure.

**Jared Henderson:** I appreciate that.

**Adam Stacoviak:** It's not a boring single-page that's not -- it's got a lot of great information on there. It's compelling. If you have this problem, this is a compelling page.

**Jared Henderson:** I appreciate that. If any part of it looks good, it's my nephew's doing. He's named Kai. I've got no design skills whatsoever... But he's good at that stuff.

**Jerod Santo:** Shout-out to Kai. Get him working on that Windows app. Come on.

**Jared Henderson:** Yeah, that's right. I'll have it on my desk next week.

**Jerod Santo:** \[laughs\] Alright, that's all for today. Thanks for hanging out with us...

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Bye.
