**Adam Stacoviak:** So Daniel, this is your first time being on Changelog & Friends. Now, we're friends of many years now, but mostly we just talked about curl. And I can't help but talk about curl when I talk to you, because it's such a big part of your life, for one... But then, back in March, just a few days after my birthday, you turned 26. So congrats.

**Jerod Santo:** Daniel turned 26?

**Adam Stacoviak:** No. Curl.

**Jerod Santo:** \[laughs\]

**Daniel Stenberg:** I'm 28... \[laughter\]

**Jerod Santo:** I was gonna say... Dang, if curl's 26, Daniel, I'm not gonna ask.

**Adam Stacoviak:** Good job, Daniel, being 26.

**Jerod Santo:** Yeah, happy - what do you call that? Post-dated? Belated. Happy belated birthday to curl. Everyone's favorite. I don't know how you call it. I was gonna call it a command line, internet fetcher. But that's not what it's called. It's so much more than that. Daniel, what's your -- what do you call curl these days? It's so many things.

**Daniel Stenberg:** Yeah.... I usually call it like internet transfer tool, or something.

**Adam Stacoviak:** Internet transfer tool. Okay. That's not very sticky though, is it?

**Daniel Stenberg:** No, it's not... \[laughs\]

**Jerod Santo:** I mean, I couldn't think of something sticky right off the bat. I was like, "What is curl?" I know it's like a --

**Adam Stacoviak:** Maybe an internet plumbing tool, I don't know...

**Jerod Santo:** HTTP client, maybe? Well, it's more than just HTTP, of course.

**Daniel Stenberg:** Yes, exactly. It does so much more than HTTP. That's why I go with internet transfers. But that's also a little bit vague and hard to sort of wrap your head.

**Jerod Santo:** Right. Internet transfer tool just doesn't sound so cool. I mean, everybody knows what curl is, though. It's kind of part of the substrate of the internet at this point. I mean, it's 26 years old.

**Daniel Stenberg:** Yes, it's been around for a while.

**Adam Stacoviak:** That's a good way to \[unintelligible 00:05:52.22\] the internet substrate mechanism, thing...? I don't know. That's a good thing, too. Substrate.

**Jerod Santo:** Yeah. So this is your fifth time on our shows, first time on Changelog & Friends... We usually do it around anniversaries, birthdays... "17 years of curl", I remember it was one of our episodes... And it's been three years since we've had you on, so why don't you catch us up? What's new in curl of late?

**Daniel Stenberg:** Yeah, three years is a long time in most aspects, and it certainly is in curl time as well... Even though I often have that reaction - I've probably mentioned it before - that people say that they used curl 10 years ago, and they use curl today, and you know, there's no difference. Has anything happened at all...? But I did a quick check the other day, and the last three years we've added 21 new command line options.

**Jerod Santo:** Oh, my gosh. Do you know how many total command line options there are at this time?

**Daniel Stenberg:** Yeah, I have a counter... So there's 263 of them.

**Jerod Santo:** \[laughs\] Gosh. This is why it's hard to define what curl does, because - I mean, so many things it can do...

**Daniel Stenberg:** Yeah. And then people like to say "Is that a good thing, really?" And no, it's not really a good thing to have a lot of command line options, because of course you'll get lost among them, and very few people actually use more than, I don't know, 10, 15, 20... But of course, everyone uses their own subset of them, so they all serve a purpose for some users... So it becomes a problem to document, and for people to understand, and find them, and so on.

But at the same time, you know, people come up with new things they want to do with this internet transfer thing, and then we have to -- how do you add the new thing? Yeah, you have to add a new option. Like, we add stuff like "Oh, you can set one of them--" For example, there's a header field in the IPv4 header. It's called type of service. You can set it now. It exists in IPv6 too, it's called traffic class. It's just a numeric field in the IP header. Okay, now you can set it with curl, because some people like to do that. Most people won't. But of course, we have to add a command line option to be able to set it if you want to set it... And stuff like that. So there's often -- these days, when we add new options, they're all these niche things for some users.

**Jerod Santo:** \[00:08:14.14\] Right. Yeah, that's the eternal struggle, I guess, of somebody who's writing useful software, is how to maintain and evolve it over time, that continues to serve new needs, but doesn't trample down what people came for in the first place. And I think when it comes to command line options, like you said, it's the documentation, it's the man page, it's the help where it really does get in the way. Other than that - I mean, it's invisible. I use curl daily, and I probably use 5.

**Daniel Stenberg:** Exactly.

**Jerod Santo:** And I don't know any of the new ones. They don't get in my way, they don't bother me... But they're useful to somebody.

**Daniel Stenberg:** Exactly. So when we do that properly, they're not in the way for those who won't care about them, so they'll just sit somewhere... And then one day five years down the line, when you want to do one of those things, you figure it out, and then you find out which option to use, and then you do it, and then you forget about it again and move on with your life... And that's how it's supposed to work, right?

**Jerod Santo:** Right. So you've added a bunch of command line options. I know you've been very ahead of the game and continuing to work on HTTP/3 stuff... What's the state of H3 these days?

**Daniel Stenberg:** Yeah, so just over these three years HTTP/3 three has really grown a lot, both in curl and in general on the web. So now we support much more H3 in curl. And -- well, it's still complicated to build curl with HTTP/3 support because of all the different components involved, and there are different maturity levels and different API's, and different... So many different pieces that needs to work together. So it's the juggle -- if you install curl in a Linux distro today, for example, I don't think a single one actually enables H3 by default, just because of the weird mix of different dependencies that need to add up for it to work. But we support it now, as we say, non-experimentally, with a set of dependencies called the ngtcp2 QUIC library.

**Jerod Santo:** Hm. That rolls right off the tongue...
**Daniel Stenberg:** Yeah, it's a mouthful... \[laughter\] And the best part is that it then requires the \[00:10:28.24\] library, too. So yeah, say that fast three times. Ngtcp2 and nghttp3 So yeah. And then when you enable HTTP/3, you can use the --http3 option, of course, with curl, so then you can actually try it against... You can run it against any server, really, because it'll try H3 in parallel with H2 and H1.

**Jerod Santo:** Oh, really?

**Daniel Stenberg:** So it'll just race them all against each other, and the one that wins, runs, pretty much.

**Jerod Santo:** So you would assume that H3 would always win, but I guess not, huh?

**Daniel Stenberg:** No, because it's such a problem with the -- but since it's based on QUIC, which is done over UDP, there's a certain amount of blockage going on in the world. So in a lot of cases it actually doesn't work. Just because your company or organization or something in between you and the server decides that UDP is bad, we shouldn't let it through.

**Jerod Santo:** Yeah, just firewalls or whatever it happens to be...

**Daniel Stenberg:** Exactly. Or just, you know, someone decided along the way that you shouldn't do this... So therefore it's a lot of that, you know, trying out if it works, and then you have to have a fallback, and use the older versions if that new one doesn't work.

**Jerod Santo:** So you fire off all three at once.

**Daniel Stenberg:** Not really. Well, because h2 and h1 you can negotiate on the same connection. So we do both at once.

**Jerod Santo:** Oh, so you negotiate that one. You can't negotiate H3, because it's over UDP...

**Daniel Stenberg:** Exactly. And to complicate matters, we also do Happy Eyeballs, so we do IPv4, IPv6 old, and IPv4 and IPv6 new. So we actually do four attempts at once.

**Adam Stacoviak:** \[00:12:06.17\] That's what they call it, old and new?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Not v1, v2? I mean, what in the world...?

**Daniel Stenberg:** Well, I call it like that.

**Adam Stacoviak:** Okay, gotcha. That's not the true nomenclature.

**Daniel Stenberg:** No.

**Adam Stacoviak:** Well, IPv6 is already hard enough to get \[unintelligible 00:12:17.24\] to understand it as a user, not an implementer. So...

**Daniel Stenberg:** Yeah.

**Adam Stacoviak:** If they called it old and new, that'd be even worse than v1, v2.

**Daniel Stenberg:** \[laughs\] Yeah, well, it's a complicated setup. And we work with several other backends to enable libcurl with other backends, too... A little bit depending on so that we can offer them on more platforms, and with more different TLS backends, pretty much. So it's a circus. We support four different QUIC backends.

**Jerod Santo:** That's what keeps Daniel busy.

**Daniel Stenberg:** And we do that a little bit so we don't have to pick a winner. We support all of them and see a little bit how they develop, and go, and become good or bad... Because when we pick them originally, we don't really know if they're going to be the good one in the end... Even though this -- I mentioned ngtcp2. That library is actually created by the same guy/team that created nghttp2 library before...

**Adam Stacoviak:** Gosh...

**Daniel Stenberg:** Another mouthful. But that's a very successful and very reliable library for H2.

**Jerod Santo:** You need get that guy a marketing team, help him name some projects so we could pronounce them...

**Daniel Stenberg:** They like that ng stuff, but it's really, really hard to say...

**Jerod Santo:** Yeah... Very literal. Is IPv6 arriving? I mean, it's been like the slowest transition in history...

**Daniel Stenberg:** Yeah, it's really slow still. And I don't know. Luckily, I don't really have to care. But from my point of view, that's why we do a Happy Eyeballs, meaning that we do both pretty much.

**Jerod Santo:** Do you say happy eyeballs?

**Daniel Stenberg:** Yeah, it's an algorithm. They call it like that. Exactly.

**Jerod Santo:** Okay. I thought you said that the first time, but I wasn't sure if I misheard you...

**Daniel Stenberg:** Yeah, it's an RFC. It actually exists in several versions. But it pretty much means that we actually start the IPv6 attempt first, and then a few milliseconds later you start an IPv4 attempt.

**Jerod Santo:** Okay.

**Daniel Stenberg:** And the one that succeeds first, that's the one you go with, and then you cancel the other one.

**Jerod Santo:** \[unintelligible 00:14:23.02\] because you're watching both, and whichever one comes back faster, the eyeballs are happy, or...?

**Daniel Stenberg:** I don't know where the name comes from. It's just a weird name. But I've sort of used it for so long, so I'm just used to it... But I don't know why it's called Happy Eyeballs.

**Jerod Santo:** We need to do that research. That's interesting. I've never heard that.

**Daniel Stenberg:** Hopefully there will be some happy eyeballs in the end, I guess. I don't know.

**Jerod Santo:** That's what I assume. You're kind of looking at both, and then get happy when one returns a response for something.

**Adam Stacoviak:** Could you give us a primer on IPv4 versus v6? I know that there was a terror that IP addresses will eventually run out, and that's why IPv6 -- like, how much do you know? Can you give us a primer on that, and the state of it?

**Daniel Stenberg:** Well, that's still the case. There's been a lot of patching and gluing things... So yes, we are running out of IPv4 addresses, and I think they are getting more expensive. In particular in certain areas they're really run out, so you have to be creative, or you have to pay a lot of money to get IPv4 addresses. So I think that is the real case. But I think also during this time people have come up with new ways on how to work around the problem, with different kinds of NATs, and carrier-grade NATs and everything, so that we can keep on doing these, we can extend our lifetime on IPv4 a little bit longer... Because most people, it turns out, don't really need their own IPv4 addresses, so we can come up with new ways.

\[00:15:54.06\] But of course, that is then also kind of a blocker for doing new kinds of innovations on the internet, because back in the at least '80s, '90s people thought about doing things peer-to-peer. You had an IP address in your client, and you knew the IP address and the server, and you could communicate between those two IP addresses. Nowadays you really can't, because nowadays there are so many different layers and translations, so you're not -- but that's just the reality now. I think that has made it so that the IPv4 problem hasn't become that big, so we managed to survive on IPv4 pretty good anyway.

**Jerod Santo:** Yeah. Now we're like layering NATs behind each other. So you have this one IPv4 addresses representing so many networks.

**Daniel Stenberg:** Yeah. And I think also another thing that has happened, especially compared to the '80s-'90s, that nowadays we build everything on top of HTTP instead. So we build so much protocol layers, much taller protocol stacks now than I thought we envisioned back in the -- well, when did they come up with IPv6? I think mid '90s, or something.

**Jerod Santo:** Yeah, I mean, if it definitely predates me. I remember I was in college, and - so this would be around the turn of the century. 2001 is when I graduated from high school...

**Daniel Stenberg:** Yeah, exactly.

**Jerod Santo:** ...and they already had IPv4, and they're like "But the new thing's IPv6, and everyone's gonna be using this, because we're running out of addresses", and that was 25 years ago, you know?

**Daniel Stenberg:** Exactly. And the story is exactly the same still.

**Jerod Santo:** It's the exact same story.

**Daniel Stenberg:** Yup.

**Jerod Santo:** Well, if I was the person issuing IPv4 addresses for a price, I'd kind of like this scarcity. It's helping me out. I can just keep raising my prices and issuing them... It's not too bad if you're holding the keys, right?

**Daniel Stenberg:** Right. I guess it's more of a problem if you actually want to start something new today, and you really need to have that connectivity to people in the world, and you really need IPv4 addresses. Maybe that is a problem. But at the same time, I think the entire internet infrastructure has also changed. We're doing everything over CDNs nowadays, that we really did not do in the '90s, and stuff like that. So we have changed how we do internetworking.

**Jerod Santo:** Well, that was one of the pitches, was like every device would have its own address, and not just your house or behind some sort of firewall, but you'd actually have -- your refrigerator would have its own address, and it would be publicly exposed, and that would be good for certain reasons, but obviously, also bad for other reasons...

**Daniel Stenberg:** Exactly. The privacy angle certainly was never discussed back then. So wait a minute, are you willing to know that my fridge is talking to your server?

**Jerod Santo:** Yeah, we were pretty naive about privacy for a long time.

**Daniel Stenberg:** Right. Exactly. Because at least when you're hiding behind a NAT, you don't know if it was my watch, or my fridge, or my printer that talked to you.

**Jerod Santo:** Yeah. And especially if you're having multiple NATs. I mean, we have oftentimes an IP address that exposes like an area of a city... But that's all you know. It's like "Well, somewhere in Bennington, but we don't know who it is." And sometimes that's problematic if you have actual malicious actors out there who are trying to hide, but it's also really nice for normal people who just want their privacy and no one to be tracked down to every single thing they're doing all the time. Well, they find other ways of tracking us...

**Daniel Stenberg:** Oh, they do. Yeah.

**Jerod Santo:** Okay, so there's IPv4, v6, H3, H2, tons of more command line flags... Anything else that's like super-notable in curl that our listener would be like "Oh, cool new thing that I can do now, that I couldn't do before"?

**Daniel Stenberg:** Well, I think we've only done minor things, really, when it comes to what happens in the end user layer. We support TLS 1.3 in more ways now. For example, you can do -- you know, curl ships with Windows since a long time nowadays, so it's built into Windows... And then when Microsoft ships curl, they ship it built with Schannel, which is the Windows TLS library native in Windows. And nowadays, for example, we can do TLS 1.3 with that library... Which is a fairly new thing. So stuff like that. But - I mean, most users won't notice. They'll just be happy that it'll actually survive longer and work better... But that's jut one of those things that you don't really see or know about in the engine.

\[00:20:20.06\] We now do more things. We can support -- over the last few years, we've done quite drastic refactoring of our way of building protocol chains internally in curl, I would call it... So how you stack different layers of doing protocols. Like, if you do HTTP proxies TLS, or doing TLS protocols and TLS and proxies in many different layers - nowadays, we can do that in a more flexible way, so that we can support more ways of creating protocols. Well, I call them protocol chains, pretty much setting up different -- for example, doing different kinds of protocols over different kinds of proxies in more combinations... Because that is also where we're going into the future, because nowadays we have so many different HTTP protocol versions, and we have a lot of proxies. And people want to do, you know, HTTP/3 over HTTP/1 or HTTP/2 proxies. Or you can do HTTP/1 or HTTP/2 over an HTTP/3 proxy. You get all confused in your head just thinking about that, but... Pretty much, to be able to offer all those different combinations of protocols versions, it becomes an explosion in how to handle that. So we had to change our internals so that we could build them dynamically, in a better way, so that the code could manage all of these new ways of building protocol chains.

**Jerod Santo:** Tricky stuff. It seems like not only has curl changed recently, but the world around curl has changed quite a bit since the last time we talked as well... And I know you have written somewhat extensively on the effect of LLMs on curl development... I'm trying to find it back in your backlog. The gist being you're getting a lot more low-quality PRs, issues opened by robots, security fixes that are not useful... Remind me, because it's way back there now.

**Daniel Stenberg:** Yeah, exactly. Yeah, I had this -- I think the one I blogged most about was one particular security report from some user who basically just fed it into an LLM. He claimed that there was a buffer overflow, and I asked him for clarification, and he just came back over and over, very friendly... \[laughs\] And then gradually changing the nature of the bug over the time, and then pretty much me concluding that I'm talking to an LLM here. Yeah, I've had a few of those, and I think they're problematic in that -- I mean, yes, they're crap, but they're pretty good crap, at least from the start...

**Jerod Santo:** They're trickier crap. They look less crappy.

**Daniel Stenberg:** The worst crap you can identify immediately, right? "This is crap." Close it, move on, and forget about it. But when it sounds correct, and it seems legitimate, you have to actually investigate, spend time and research. "What is this? What is it talking about?" And as I mentioned then, people then say that "Well, it's obvious that it's AI I'm talking to." But I'm also used to talking to people who are using translation services, right? So maybe I'm talking to a guy who doesn't know a word of English, so he's feeding everything he's saying through a translation thing. So I can't really judge his language. Sure, it sounds a little bit machine-like, but that could just be him speaking Korean into a voice thing that spits this out. I can't really just dismiss him just because his English is not perfect.

**Jerod Santo:** Is questionable. Right.

**Daniel Stenberg:** Exactly. My English suddenly is not perfectly either, so...

**Jerod Santo:** It's pretty good, Daniel. It's pretty good.

**Daniel Stenberg:** \[00:24:05.13\] So therefore, it becomes a challenge there. Sure, they say something -- the AI is kind of hallucinating... It seems reasonable. Yeah, it could be right. Maybe. But it doesn't feel right. And then you ask a few follow-up questions, and "Yeah, wait a minute. Yes, you're right." And then if provides more information. But the more information is also slightly off, and not actually answering the questions. So it's been a few of those that - yes, they certainly are time suckers, because I just spend a lot of time, and in the end it's just worthless crap.

**Jerod Santo:** Exactly.

**Daniel Stenberg:** One of those were at least good enough that they mentioned that in the first blurb they said "I asked Google Bard", or whatever it is he said, "and it found this security problem." There was at least a very good hint that maybe that's not the best thing to ask for problems to be found.

**Jerod Santo:** Yeah... I did find the post. It was back in January. I love the title. It made me laugh when I read it. And holy cow, this is on page four. You blog a lot, Daniel.

**Adam Stacoviak:** So much.

**Jerod Santo:** "It's the I in LLM stands for intelligence", which I thought was a nice turn of phrase. And you go ahead and write in detail about how it's basically just causing you nothing but pain, right? I mean, it's just additional time that you have to spend, and you're now negotiating with a large language model, and you're not sure if it is or not. You have to determine before you write it off.

**Daniel Stenberg:** Exactly. Because obviously, there's a user somewhere that is copy and pasting this into an LLM, probably. But it takes a while until you're really sure about it. And also, maybe it is okay to use an LLM, if it had been accurate. If it had been a genuine problem, then I wouldn't have minded at all. I mean, then I would have been fine. But it was a bit of a struggle to get to that point.

**Jerod Santo:** Yeah. They're just slopping up the curl factory, you know? They're just throwing their slop into the curl factory.

**Daniel Stenberg:** Yeah. It's certainly this sort of gravel in the machinery when they do that. Also, since security problems tend to be top priority, so that's when we drop all the other stuff and just focus on this... Because if it's a security problem, it's worth sort of dropping the other stuff for it. So it certainly trumps a lot of other work.

**Jerod Santo:** Right. Plus, there's money in the game now too, right? With a lot of the security stuff. So that makes it more of an attractive target for people to --

**Daniel Stenberg:** Exactly. That's why they do it. Yeah, they certainly want the money. And of course, I ask for it a little bit by saying that "We will give you money if you report --"

**Jerod Santo:** Yeah. Well, you're incentivizing it because it's important.

**Daniel Stenberg:** Yes, exactly. So I think in the end it is a win for us. But yes, we also get a fair amount of rubbish, too.

**Jerod Santo:** People that just want to -- they're basically fuzzing every bug bounty they can, and using whatever tool they can to scale horizontally. And LLMs is a tool to scale horizontally. I can email with Daniel without having to really think about it. I can try to get this bounty.

**Daniel Stenberg:** Exactly. I think it works like that, too. So they can run their tools against a lot of projects, and they just fire off those. So if they're lucky, they will get some bounty from X percent of those projects.

**Adam Stacoviak:** So many negative uses, I suppose that are out there... It's like, you want to see the positive, but then you also see this kind of thing, which is good when used good... But then it's like, well, you're just inundating folks with crap.

**Daniel Stenberg:** Right.

**Adam Stacoviak:** Or versions of it.

**Jerod Santo:** Pretty good-looking crap, too. That's the worst part.

**Adam Stacoviak:** Minutiae, I don't know. More to sift through.

**Jerod Santo:** You've got lipstick on the pig.

**Daniel Stenberg:** Exactly. It's a little bit of a denial of service attack... At least if it would scale up. Now it's just been -- I mean, it's been manageable, because it's not gone to a level that is unmanageable...

**Jerod Santo:** But it's early days, Daniel. I mean, this is gonna scale.

**Daniel Stenberg:** Exactly. I can easily see how it could scale up and become a much bigger burden and nuisance than it is now.

**Jerod Santo:** Have you considered fighting fire with fire? I mean, you have these tools at your disposal...

**Daniel Stenberg:** \[00:28:13.04\] Yeah, but... I really don't think I can do that in an effective way.

**Adam Stacoviak:** Well, that would go against some of the BDFL things you have in place.

**Daniel Stenberg:** I'm also very wary about how I appear and what I respond to, because I know that if I'm being, I don't know, unpleasant or unfriendly, people will hold that against me. Whatever we say on the internet, it'll live forever, so I always make an effort to stay on the right side of how to behave, and be friendly, and just be accurate and direct... But then, of course, I will also stop it as early as I can.

**Jerod Santo:** \[laughs\] Well, yeah, maybe just as a higher quality or more sophisticated filter, before things reach you, you know?

**Daniel Stenberg:** Yeah, exactly. We're using HackerOne as a service for this. They also actually have other -- they can actually enable more filtering. But in the past, I've also had problems with that, because then suddenly when I've had people actually submit a bunch of legitimate reports in fairly high frequency, they got caught in that filter. So I also had the other way. So yeah. But I think it's also one of these things we just have to learn to adapt to. So yes, I think now we get some problems with it. We will add more filtering, raise the bars a little bit to catch these a little bit better, earlier... So we'll see. I'm sure we will find a fairly good balance.

**Adam Stacoviak:** Do you think some of those things that you could do negatively in that scenario might go against these BDFL guiding principles you've laid out? ...which, as you mentioned there, you want to come off kind, open and friendly. That's number one of your ten guiding principles for curl as a BDFL. So does it make sense to kind of go down that list, or kind of dig into some of that? Is it important enough to you to sort of put it out there?

**Daniel Stenberg:** Yeah, absolutely. I think that that is one of the things. I want to make sure that I'm not dismissive. I mean, again, because they might not be an AI. At least in the first post, I don't know that it is an AI. It could just be that guy who just got an AI to help him actually phrase it, or produce a proper report. And that's fine. So I don't want to be dismissive. I actually -- I never want to be dismissive. I try to be -- I mean, of course, it's a challenge when people are explicitly and deliberately very rude, or just being very unfriendly. It's hard to not just bite off immediately. But I try not to, and just stick to the facts, and answer the actual factual or technical question or detail in whatever they're talking about, and then not drag it on, and stop it there.

**Jerod Santo:** So tell me more. What is this -- BDFL, for those who haven't heard of BDFL, benevolent dictator for life; Daniel has been and continues to be benevolent, and a dictator, and spending his life on curl... Full-time now for - man, half a decade, I think. Something like that. Full-time on curl, which is awesome.

**Daniel Stenberg:** Yes, exactly. A little bit over five years now.

**Jerod Santo:** Yeah, a little bit over five years. And so as a BDFL, he has, like Adam said, created these guiding principles, which means he's thought deeply about it... What are some of the other ones? So Adam mentioned the first one "Be open and friendly." What else do you aspire to as a BDFL?

**Daniel Stenberg:** \[00:31:49.17\] Yeah, what do I do? So of course, because people like to say that "Sure, I'm a BDFL", which means "Sure, I'm the dictator, so I could do whatever I want in the project", in theory at least... But of course, there's this difference between being a dictator in a software project and in a country. It's probably that if people wouldn't like the project, they would just go away and do something else instead. Maybe fork it, or at least not participate in the project. So there's every motivation to not be a bad dictator for the project.

So no, I don't think I have anything that is strange... Sure, I think, for example, that the quality of the products that we're shipping is one of the key things. And I know that that's one of the key things that people appreciate about curl and libcurl as a project, that we ship products that rarely cause people problems... A lot of people mentioned to me that they never experienced bugs in curl, which of course I think is fun, because we fix bugs quite frequently... But still. \[laughter\] We still work hard on making sure that it's a good, solid product, and that we don't break behavior, and we don't break user scripts, we don't break APIs at all... So stuff like that.

So basically, I want curl and the products we ship to be that -- I want it to be and work like it actually works now, right? It should be those pillars; you should be able to build whatever you want on top, and they should just continue to work like this... As they have been for a long time. And they should continue working like that. So that's what we really focus on in the project. And what I want it to focus on, too.

And then of course, we're everywhere, and then that makes us get a lot of eyeballs on what we do and how we do things. So that that's also why I want us to then, for example, do things properly open source-wise. I want us to make sure that we do open source -- pretty much follow all the best practices you can imagine for doing open source. Being open, being transparent, doing things the way you should do things open source. So if I would join a project or participate in a project, how would I want that project to be, and how would that be open sourcy the way I like it? I want curl to be that. So a lot of that.

And also not only open source-wise, but also code-wise and protocol-wise, because I know that since we have been doing protocols, and we are doing protocols, a lot of people will then copy the way we do it, either by copying our code, or just following the way we do protocols, or implement things. So therefore, it's also good and nice to be able to say that if you follow our way of doing it, it is at least thought through and should be a good way to do the communication like we do it, then it should be good.

**Jerod Santo:** Yeah. Yeah, yeah, yeah. I'd like to commend you on both of those fronts, especially I think on the open source leadership in terms of how you manage the project, because - you know, Adam and I have known you for a long time now, and we've been watching your work in the public space for many years... And you really I think are a guiding light for so many people, because you have been around a long time, and you do think deeply about these things, and you have been able to dedicate so much of your personal time, and now your full-time, to this project, and just maintaining it and sustaining it, and like community leadership...

A lot of times I will just look to see "Well, how does Daniel handle this?", because you've come across like many of the problems that so many people are going to come across. It's like "Well, here's how the curl folks handled it." Maybe it doesn't necessarily apply to you one to one, but it's a great place to start.

**Daniel Stenberg:** Right. And every project is unique, so maybe it doesn't apply to everything, right? But I think also sometimes it's a big benefit of being an old project, and have been around for such a long time, because we have had time to adapt and adjust and do things the way we should do... Because obviously, we didn't do everything right from the beginning. I mean, who does, right? But if you just stick around for long enough, we get time and ability and chances to just fix those, and make sure that "Sure, that didn't work. Let's do it this way instead, because this is the better way." So over time, a lot of things just fall into place, and end up being decent ways to do things. Decent approaches, and concepts, and policies, and everything.

**Jerod Santo:** \[00:36:16.27\] And you're right about it. That's the other thing. There's probably other people who are also making long-term decisions and managing a project for a long time... But like I said, you blog -- is "profusely" the right word? Maybe that sounds like too much. What's the word I'm thinking of...?

**Daniel Stenberg:** It could be too much.

**Jerod Santo:** Profusely. He refuses to stop. No, that's not the word I'm thinking of, but we'll just roll with it. Just documentation... I know it's also -- I'm leading into the next, or down the field here... That's one of your other principles, is like the documentation, how much you write about these things... The fact that we know what your guiding principles are, because you've taken the time to write them down... I mean, that's how you lead, right? You lead by example, but you also lead by stating why you do what you do.

**Daniel Stenberg:** Exactly. I like being able to also do that, not only so that I inform sort of how I view things, and that's why I think this is so important... So they sort of go hand in hand. And also, of course, this is not just me saying these things. I actually work on it pretty hard. So I hope that I'm sort of stating the obvious, really, because I've already delivered documentation for this to a pretty ridiculous level sometimes... So it should be obvious that I'm focusing pretty hard on making sure that everything is documented to a very detailed level, for example.

**Jerod Santo:** Quick follow-up on "profusely". I'm now doubling down. I think it's a great word. "Pouring forth with fullness or exuberance. Bountiful. Exceedingly liberal. Giving without stint." I think you do blog profusely. I think I've picked the perfect word there. Even on accident. I thought it has sort of like a negative connotation, like almost too much... But I'm not seeing that, at least in the dictionary. Maybe if I go to Urban Dictionary I'll want to redact that, but...

**Daniel Stenberg:** No, let's stick to that.

**Jerod Santo:** Let's stick with it. A profuse blogger... And you also want to remain independent. I think this one might be, of all those, maybe the hardest, right? Because this isn't necessarily entirely your decision, is it?

**Daniel Stenberg:** No, it's not entirely my decision. And I think I've been a little bit fortunate that it has been possible to do it this way... Sort of navigating how to do open source and how to actually do it for a living is not easy, and it's not obvious how to do that... So I'm not judging anyone who's taking decisions on how to do that, and making tough sort of choices on how to navigate forward to actually being able to sustain it somehow... Because you need food on the table at the same time as you want to produce something.

So I'm in a fortunate position when I can do it like this, and I'm happy to continue in this way. So I want it. And when I've managed to do it for this long, and for this amount of time, I imagine that I should be able to continue doing it as well. And I think it's pretty good, because it makes it -- we don't have to obey to anyone. Not even a umbrella organization, or anything. No company, no one actually decides what we need to do. We just decide what we need to do depending on what we think our users want, or how the internet goes, or what's an internet transfer really, and we can just base it on that. And I think that is good, because we don't have to bend to artificial whims.

**Break**: \[00:39:40.21\]

**Adam Stacoviak:** I wonder what makes you do this, really, at your core, as a human being. I get that you are probably in the best intellectual space to do it. You've done it for so long. But sometimes we do -- they call them "because". "I do this because", right? Maybe you do this because you want to see the substrate of the Internet to be something pliable, and usable. But like, really, why do you do this?

**Daniel Stenberg:** Yeah, exactly --

**Adam Stacoviak:** To this level of detail, and this level of quality.

**Daniel Stenberg:** Now, I think the why has changed over time. And now I want to use this platform that I had sort of already reached, and I've already done it to this level. Now I want it to remain this, and I want to have -- I want these products and this project to keep on facilitating doing internet transfers, and making sure that we do internet transfers properly, and that everyone can do them in an easy and good fashion, in a sort of stable transfers and good way. So then it just becomes a personal thing that I want it to continue to be that, and to continue to be a really good choice for all of these different services and platforms and tools and devices and languages... Because it's really cool. And I want it to remain that good and efficient. So it's a little bit -- it isn't harder than that. I just want it to be that good, and I want it to remain at that level of goodness.

**Adam Stacoviak:** Yeah. What do you do -- I don't wanna be speaking morbid by any means, and your involvement in the project doesn't have to be a morbid scenario... But what do you do, and what are you doing if that's your guiding principle personally, so that it remains, what are you doing so that you don't have to be the BDFL forever, in any scenario?

**Daniel Stenberg:** First, I think what I do now is just leading how I want it to be done. So I'm leading by example. This is the way I think we should do the project and how we should do protocols now, and what I think we should do. And then I pretty much just make sure that if I would go on an extended holiday tomorrow, everything necessary is already available, as in documented, provided, written down. I mean, I don't have any magic handshakes anywhere. There's no secrets; the word that is necessary for anyone. I mean, sure, there are some credentials for logging onto servers and stuff like that, but there's no project secret anywhere. There's nothing hidden. Everything is out there. Everything is documented, even to the level of how I do releases, how we do things, how we do governance in the project... So everything is there. So that's how I want it to be done. Show by example how I want things to run. And if I don't run it, everything's there for someone else to do it the same way, or another way. But if I go away tomorrow, there's nothing that's preventing anyone else from taking over tomorrow.

**Jerod Santo:** \[00:48:41.18\] Right. What about the last mile of that contingency plan? Like the credentials, the server logins, the DNS, maybe the password to log into the registrar...

**Daniel Stenberg:** Yeah, I have those sorted out too, but at a more personal level. So I have more of a wheel-like situation, so that I have relatives, or mostly my brother, who's into computers, pretty much like I am... So he's my next of kin. So if I would actually die, he would have access to all of that tomorrow.

**Jerod Santo:** Right. And then is there anybody else on the curl team or community where it's like they're an obvious "Daniel's gone now." Your brother has the credentials. "Hey, Daniel's brother is going to pass those credentials on to this person, who's going to take over leadership." Is there anything that's obvious like that, or is it not so clear?

**Daniel Stenberg:** It's not so clear. We don't have any -- there's not a dedicated heir, or anything. So I wouldn't --

**Jerod Santo:** No, I just mean like somebody who you'd have in mind. Maybe if you're on your deathbed, and you're like talking to your brother, like "Hey, give the credentials to this person." Is there anything like that?

**Daniel Stenberg:** Yeah, but my brother also has push rights in the project.

**Jerod Santo:** Okay, so maybe he's the guy then.

**Daniel Stenberg:** So he's already a maintainer in curl as well.

**Jerod Santo:** I didn't know that. That's cool.

**Daniel Stenberg:** So he's sort of tangential -- well, he's only marginally involved, but still.

**Jerod Santo:** \[laughter\] \[00:49:57.16\]

**Daniel Stenberg:** \[unintelligible 00:50:00.24\] I don't want to dismiss it either, but I mean...

**Jerod Santo:** I know, I know.

**Daniel Stenberg:** ...he has maybe like 50 commits, I have 18,000. So...

**Jerod Santo:** Right.

**Daniel Stenberg:** But still, he's around, and he knows the project, he knows a lot of the --

**Jerod Santo:** He understands these things.

**Daniel Stenberg:** Yes, exactly.

**Jerod Santo:** Well, that's good to know. So you definitely -- you've done your legwork on... I'm calling it contingency planning. Legacy planning? I don't know what you'd call it.

**Daniel Stenberg:** I think so. I hope so. Yeah.

**Jerod Santo:** Well, you never know, you know? These are things that I think people think about more as we do get older; we start to think "Well, you know..."

**Daniel Stenberg:** And actually, however silly it sounds, I get this question very often.

**Jerod Santo:** Do you?

**Daniel Stenberg:** Yes. So it's very good to actually have it sorted out, because then I have a good answer when people ask me about it. And people ask me about it because yes, I'm the BDFL, and people -- I think actually to a slightly larger degree than I deserve, people call it a one-man project, or something... Because I don't think it is. Because we're quite a number of people who actually contribute. I do half of every commit, but there's a significant amount of changes done by others. But anyway, so people still have that -- well, they think that about curl, and they think it's me. So if I'm gone, then surely curl will die, right? So that's sort of the connotation with the question.

**Jerod Santo:** Right, right. Can you explain the financial arrangement? Like, how did you get to financial independence and exactly how it works for you?

**Daniel Stenberg:** Sure. It's actually pretty easy. So the curl project is completely separate and standalone. So I don't do business with the curl project. I support curl stuff. But I do that separately. So I sell curl services. There's an American company called wolfSSL. And my primary curl business is just support on curl. A little bit an insurance thing. I sell a number of issues per year, and I have a guaranteed response time. So my customers, mostly actually big American tech companies, they have paid me a yearly subscription, basically, and they file issues, and I help them when they have issues. So I make sure that their curl use is uninterrupted and works well in their products.

\[00:52:25.14\] Usually, companies where curl use is deemed important enough for them to do this. Even though I usually, of course, try to tell a lot of my potential customers that it's much better if they pay me to do that, rather than spend time for their developers to try to figure out how to fix curl... Because I probably do it much faster and much cheaper than they having to waste engineering time on figuring out how to do things, figuring out even just how to, or just finding or fixing bugs even more.

So that's what I do. And then of course, in addition to just supporting, it's also more feature development and contracts, more working closely with the product development teams really, and how they use curl, and debugging their applications using curl. Because very often it's not a problem with curl, but maybe in how they use curl, or in the area between; it's hard sometimes. And having an NDA and contract in place makes them feel safe to share their code with me. They wouldn't dream to sometimes submit extensive explanations in the public bug report, because they're scared that they're never really special source code would be something special for the rest of the world to see. So it works pretty good. Still a challenge to sell support, so something that is free, because it's free. So why would I pay you when it's free...?

**Adam Stacoviak:** Well, we had a conversation in Twitter DM about this, and I think it's actually the first DM you and I had, Daniel... October 9th, 2001. And I said to you, I said "Are you aware of how crucial curl is to the Netflix architecture?" And you said "I'm not. I'm aware they use or used libcurl for a few years, but I'm not up to speed with their current usage." Now, thanks to a prolific influencer/developer/persona in our industry, \[unintelligible 00:54:31.03\] which I'll link up in the show notes; there's a video. It says "Working at Netflix. What my job looks like." And he essentially goes through the Netflix architecture and says the TV OS they ship submits requests to Amazon via HTTP, via... Curl. And so I'm like "Well, this is obviously crucial." I just responded like "Hey, if you check out this video, at this point you'll see that it seems to be a core underpinning." I mean, if every time I push play on Netflix, there's a curl call to AWS, that's pretty crucial, wouldn't you say?

**Daniel Stenberg:** Yes. Yes, of course.

**Adam Stacoviak:** Okay, good answer.

**Daniel Stenberg:** But I've come to the point where -- sure, there are 200 million Netflix devices; that's just a drop in the ocean when it comes to curl installations.

**Jerod Santo:** A baller stat right there...

**Daniel Stenberg:** I don't mean to sort of get on my high horse about that, sure... But then there's also Roku, and there's Apple TV devices, they all use curl... And YouTube has it bundled in the YouTube app on all phones. So everything like that is using curl. And nowadays, every TV has it, every car has it. Pretty much every printer has it, every fridge, dishwashers, washing machines, and trains, motorcycles, and keyboards, watches, and robots, and computer games... It's really big in a lot of high-volume games... I guess because they want it to be portable. I don't know exactly why the games like it so much...

\[00:56:12.13\] So actually, I think I underestimate when I say 20 billion installations. It depends a little bit on how we count. But curl pretty much runs on -- since it's not provided as an API in mobile operating systems, a lot of the mobile apps ship their own curl installations. So in an ordinary mobile phone it's installed like 5, 10, 15 times, because a lot of the high-volume apps have their own installations.

**Jerod Santo:** Right. They just bundle it. Well, you know what we call that, Daniel. We call that total world domination. That's what we call it. I mean, where isn't curl? At the bottom of the ocean. And we know it was on Mars, right? We knew that

much.

**Daniel Stenberg:** Yeah, exactly. I actually have the discussion sometimes with potential commercial customers; it's actually in the lower end, in the really, really tiny devices... Because then they think curl is too big.

**Jerod Santo:** Are you gonna have a curl lite? Are you gonna have an embeddable version?

**Daniel Stenberg:** Yeah, I actually have an effort I call TinyCurl, which is pretty much a way to scale it down as much as possible... Pretty much disable a lot of -- well, optionally disable as much as possible to make it as small as possible to fit on the just a few megabytes devices.

**Jerod Santo:** Well, that version hasn't found critical mass, or people don't know about it? How come these people aren't using it then? Do you know?

**Daniel Stenberg:** Well, they are using it. I'm actually having customers using it, so it it is happening. But then I end up in a fun situation usually, because when you talk about people writing code for really tiny devices, they usually end up with an example HTTP client from some vendor of their development board, or something. That's usually pretty much how curl started 25 years ago. 200 lines of really, really stupid code. And sure, it might work for them occasionally, or mostly... And that's the competition then. Then they say "Oh, look at this code. It's only 200 lines. Why is curl 50k when I build on my target, when I can use this 2k code?" So that's the struggle I have then. And then I have to talk about API stability, protocols, blah, blah, blah.

**Jerod Santo:** Right. Yeah, 48k of security hardening in there, and all kinds of things that you're not taking care of...

**Daniel Stenberg:** Yeah... And you know, which API do you get, and which API will you have in 10 years? Will you have the same API then, or won't you? And stuff like that.

**Jerod Santo:** But you don't have to sell too hard, because you already have total world domination. I mean... \[laughs\]

**Daniel Stenberg:** Yeah...

**Jerod Santo:** You've 20 billion devices. I mean, Adam just told you it's at the core of Netflix, and it's like "Drop in the bucket. Drop in the bucket."

**Daniel Stenberg:** Sometimes it feels like -- sure, if you want to argue about going with just a silly example code, or you want to go with curl... Sure, go with the silly example code, and call me again in two years when it's broken and you want to have some serious help, and you want it to... I mean, it ends up a silly discussion oftentimes. So no, I'm not losing sleep over that. But my TinyCurl effort is basically just at least a way for me to offer something that is at least in a much smaller footprint than the regular one.

**Adam Stacoviak:** Well, the conversation we were having in DMs at least, it was one, bringing to your awareness if you were not aware the level of usage in Netflix; and I imagine that they're just one of many, but they're also a fairly well-funded, fairly successful... They're the N in FAANG, whenever you say that term... We were talking about really how you sell support, and I was asking you like "Are you intimately involved in selling support?" wolfSSL has salespeople, you said yes, you were... And I was like "Well, is selling support a priority?" And I think we've talked about this a little bit the last time we talked. wolfSSL was early for you. Now it's sort of three years, at least, later. How does it work selling support? How challenging is it? Do you have a large pipeline? What do you optimize for? I don't know, answer any of these questions you like.

**Daniel Stenberg:** \[01:00:20.02\] There are things in motion that I should not talk about. But selling support in general for curl is actually hard, because it's an old, established, very functional and actually rock-solid product. So a lot of those people -- and you mentioned Netflix. Netflix is a fun example. They don't use -- at least they didn't use to use curl for the actual film/movie transfer. They just used it for UI and things related to selecting the actual, whatever you're streaming. But there are other companies - I know at least two - that have much, much, much more higher volume of curl use. This company with the blue logo, they did -- I talked to some people seven, eight years ago, they did 1 million curl requests per second on average. And that's a high-volume use of curl. You would imagine that those guys would be willing to buy curl support. But so far, I have not managed to get support from them, because it just works for them. They think it's sort of -- why would they buy support? It's been working for I don't know how many years, and they think it's good.

So it is a challenge. But yes, I know it's used everywhere, and of course I'm getting help, because I'm worthless as a business myself. So I realize my limitations here. I'm not the business guy. I'm not doing most of the sales conversations. I leave that to actual sales people. But sure, we try to interface and talk to pretty much anyone we know that is using curl in high volumes, and in sort of mission-critical situations where it is really crucial for them that curl continues to work.

And it goes up and down... And sure -- I mean, I still work on curl full-time, so it at least pays me so that I can continue doing this.

But we also explore other ways to charge money for curl-related things. So there are, of course always -- maybe not just selling support is the only way we should do this, and maybe it's not even the best way. I don't know. I alluded to it, I have some other things in motion; there will be some other things going forward, curl business-wise. So I think it is a pretty good brand, it's a pretty good product... I think there should be ways to sustain a business around it.

**Jerod Santo:** So two more of your BDFL principles seem like two sides of the same coin. One is to stay on the bleeding edge, and the other one is to keep up with the world. And they seem to have different angles, but they sound very similar. Can you explain those two?

**Daniel Stenberg:** Yeah, they're really similar. But what I really like, because I think it's a really fun position, is to be on the bleeding edge, so that we can be early with development on new protocols. Like, we support HTTP/2 really early, actually, an HTTP/3 also very early... Because it becomes a good sort of spiraling -- we get it in early so that people who actually implement and deploy servers and proxies can use curl to exercise their code and try their servers, and they can then help us make our code better. Because I think that's fun, and it makes us polish and streamline our implementation early on, and sort of make better decisions earlier in the process on how to do protocols, really. And also then, of course, it's just fun to have that position so that we can help others make sure that they get their implementations done better.

\[01:04:10.10\] So that's what I mean with bleeding edge, because I think it's a fun place to be at, and listening in what the internet wants is more -- that's what I mean there, is I want to make sure that we offer the ways of doing internet transfers that the internet seems to be wanting. The protocols curl supports, I want them to be done in a secure way, in a modern way, and the way we want to do. So if you want to do internet transfers for your application, you want to implement a car infotainment system, you want to transfer data for that, you want it done in a modern way, which means this current protocol's current security, the current mindset of how to do things. So that's what I mean. That's what I mean with keeping up with how to do things; that means the cipher suites, and TLS, and versions with HTTP, and how to do authentication, things like that. Because I think it's important, because I think the internet is moving quite fast, almost all the time... So if we wouldn't keep up, we could easily just be left behind.

I think we have a role, and that role should be providing service and how to do things in the proper way. And also because a lot of users are just using curl already, so we make sure that a lot of things are doing correct in security internet transfers by using curl. So that's also a reason... To make sure that curl does things properly, we help securing the internet, really.

**Break**: \[01:05:44.11\]

**Jerod Santo:** What's your take on the internet these days? The state of the internet. I mean, do you like it? Do you dislike it? where are we? Because we've gone places, and now here we are... Yeah, like if you were gonna give a Daniel Stenberg state of the internet, how's it looking out there?

**Daniel Stenberg:** I think -- that's a very...

**Adam Stacoviak:** "Why did you ask me this question...?!" \[laughter\] "Take it back...!"

**Daniel Stenberg:** Right. After an hour, you hit me with this... It's a tricky question to answer, because I think it goes up and down a little bit over time, and I think... I mean, sure, sometimes it seems that we're going the wrong direction, sometimes in the right direction. So I think it's -- yeah, it comes and goes, I think. So I don't think we're necessarily going in a bad direction, but it's certainly not always in the good direction either.

**Jerod Santo:** Yeah.

**Daniel Stenberg:** I mean, with encryption, and all sorts of governments and China and firewalls and whatever happening everywhere... So I think it's -- yeah, there are certainly bad signs every now and then, but we seem to usually get around them and come out in the better way... But it seems like a struggle that just continues and keeps on, so we just have to keep an eye on where we're going, and stay vigilant to see where we're going with these backdooring encryption algorithms, or inventing crazy things because of thinking of children, or whatever. But I'm generally sort of an optimist, so in general I think we're going in the right direction.

**Jerod Santo:** One reason I ask that is because we had Paul Vixie on the show a couple of months back, who has been instrumental in the DNS area of the internet stack, if you will... And Paul seems more pessimistic. I mean, he described DNS as a series of patchwork, that is stuck in the past, and --

**Daniel Stenberg:** I've had my interactions with Paul, I know exactly where -- so yes, compared to him, I'm certainly the optimist.

**Jerod Santo:** Okay, cool. Alright. Well, he painted a pretty bleak picture... And Adam and I, we kind of get blown in the wind a little bit on these things. And we have our vantage point as well, but we aren't down in the weeds of any particular thing. And you are clearly on the bleeding edge of the technical weeds of internet transfer, which is pretty much what the internet is for... And so happy to hear that you're slightly more optimistic than Paul is. But there's also the social side of it. The silos of the platforms, and now this revolt against social media, and then we have the rise of the LLMs... There's a lot of things happening at the application layer that are also the internet, but they're not down where you operate the internet.

**Daniel Stenberg:** No, exactly. That's why I kind of refrain from commenting on that, because it seems like - sure, we can talk about that, but it's not really about internet transfers, really. That's really the human, social side of things. And I agree, even in there as well we seem to be going both in the right and the wrong direction at times. So sure, banning social media or not... Yeah.

**Jerod Santo:** Have you looked into Activity Pub? Are you interested in that protocol, or this whole idea of a federated social network of...?

**Daniel Stenberg:** Well, I'm pretty much only on Mastodon, I'm not on Twitter anymore...

**Jerod Santo:** Okay.

**Daniel Stenberg:** But I haven't really looked at the protocol. I have a feature request for support for the message signature algorithm they're using, because apparently there's an RFC \[unintelligible 01:12:53.12\] or something. And apparently, the Fediverse is not using that exactly.

**Jerod Santo:** Okay... Fun.

**Daniel Stenberg:** That's as far as I've come to the details in the protocol. And we don't support that either.

**Jerod Santo:** But you can't post to your Activity Pub stream via curl directly. Of course, there has to be some sort of a server involved anyways, but...

**Daniel Stenberg:** Yeah, but you can do it with curl, but you just have to do some massaging of some headers, and stuff.

**Jerod Santo:** Gotcha.

**Daniel Stenberg:** Because I've seen people do it with curl. So yes, it's HTTP in there.

**Jerod Santo:** So at the social level, though - I mean, we respect your opinion at all levels, Daniel. I was kind of reading into that with keeping up with the world; I was kind of thinking like "Stay on the bleeding edge. There's your technical side. Keep up with the world. That's kind of more of the social side." Maybe that's not the way you were framing it, but in terms of the Fediverse idea, do you think that's a good idea? Are you a proponent? Are you just like a user who's like "Well, I don't want to be on Twitter, and so I'll use this, and I'm not really happy"?

**Daniel Stenberg:** \[01:13:53.21\] No, I really think it's a good idea. When it comes to social media, it is certainly one way to manage the load, and how to manage just people, and content in general... So that we don't have to have those central silos deciding what is right and wrong, and what is truth or false, or what is allowed and not allowed, so we can spread it out... Just like we've done with emails, and since the beginning of time.

So I really believe in that, even if I understand that having things like this is also probably not the businessy side of things... So I figure it's going to be hard to do that as a business. That's why no business does it, because they like the silos, and building walls around it so that they can extract the maximum amount of money out of it... So I guess that's also why it's going to be this struggle between the technical benefits of doing it like that, and the financial benefits of doing it the other way... So which way is the best way? I mean, you also have to have money involved, because it needs to be run, right? I think we're already seeing that, because if you read at least between the lines, some of the bigger Mastodon instances now have a huge bill to pay every month, because they get a lot of traffic... And how do you finance that? It was possibly easier when you had one silo called Twitter, but it's going to be harder when everything is federated and distributed.

**Jerod Santo:** Yeah. That's why the Threads integration is interesting, because it's such a big business... The thing that's interesting to me with Fediverse stuff right now is how a lot of the small publishing platforms are adopting. So you have Mozilla, you have Flipboard, for instance, Medium... You also now have Ghost... And these are like small businesses in relation to big tech. But then you have this gargantuan giant thing that is Threads glomming itself on. And some people love it, some people hate it, maybe it's validation, maybe it's evil empire, and we don't necessarily have to get our opinions on that aspect of it... But there is the business side kind of coming to the Fediverse.

**Daniel Stenberg:** You're right. Yeah. And that is interesting. I guess the challenge is to see how that goes over time.

**Jerod Santo:** Yeah, exactly.

**Daniel Stenberg:** Threads versus Fediverse. I guess it's fine, as long as they are the elephant, and the Fediverse is the ant... I mean, they don't care about the ant here, because it's just an ant on an elephant... But maybe if the growth of the Fediverse explodes and Threads isn't, maybe it'll change the equation. Or maybe not. I don't know. You're right, it's an interesting balance there. They're at least trying it out.

**Adam Stacoviak:** I'm just thinking about your thoughts there on the business coming to the Fediverse. Like, what does that actually look like? Given that it's pretty much been disparate users there, or really folks revolting against big tech social media...

**Daniel Stenberg:** Yeah. Yeah.

**Adam Stacoviak:** Is Threads welcomed back in there? ...while they may or may not support different protocols with it, how does business then sort of hop into this Fediverse world with welcomed arms? Will it actually improve it? Is that what's required to get to the feature set that does improve the Fediverse for mass adoption, beyond where it's at?

**Daniel Stenberg:** And how do you get the business to -- I mean, how do you get a business in there really focused without sacrificing something? I mean, you're not going to see anyone wanting to add ads in there. But the businesses -- I mean, sure, you can get some kind of marketing value of being there, and everything... But as the network is growing, it's going to be more and more expensive for everyone involved. So somewhere, someone has to get money in there.

**Adam Stacoviak:** Right. Well, businesses go where eyeballs are, too.

**Jerod Santo:** That's true.

**Adam Stacoviak:** That's where I think the precipice happens.

**Daniel Stenberg:** Yeah, but not only -- you want those eyeballs to do something.

**Jerod Santo:** You have to convert.

**Daniel Stenberg:** Yeah, exactly. You want to convert them somehow. Well, maybe you can do that by posting, I don't know.

**Adam Stacoviak:** \[01:18:02.23\] Ads. Gosh, they're just everywhere.

**Jerod Santo:** Yeah. I mean, whether you're selling --

**Adam Stacoviak:** Even in this podcast there's ads.

**Jerod Santo:** Yeah. Whether you're selling socks, or a subscription to a journal, or an author, you want people to know that you have things to offer. And the internet was a great way of doing that for a long time. And then social media came around and Facebook said "Actually, the eyeballs are over here. Come build your following", and people did that. And then they sold you access back to the following that you built, and then we all got burned by that. And that happened to Instagram, and it happened to Twitter, and it happens at LinkedIn, and all these other places... And people are just sick of that. They're just like "If I build up some reach so that I can tell people what I'm up to, and then they can visit my website and buy some socks, I don't want someone intermediating that relationship and then just selling it back to me. We don't want to get burned again. We got burned once. And so let's not do that." And so I think that's attractive for businesses. The question is "Can the Fediverse actually provide the reach to the people who are there to see what you're up to, and to actually talk with you, and those things?" And so far it's been -- part of it is... It's not siloed, but it's federated, and so it doesn't work the way the silos work. That's why they have the better user experience. Right?

**Daniel Stenberg:** Exactly. And I guess in one way it can't be prevented, since you can just invent a way to just nag about your socks all day long. If the other instances just think you're too annoying, they will just block you, or just not federate with you, and that's fine. So yeah, I think it'll be interesting to see if the businesses and the brands will show up to a significant amount.

**Adam Stacoviak:** Well, the gateway is always content, right? If you create compelling content, that matters to people, and you take it to the people... Rather than saying "Hey, I have a website. Come check out my website. The content's here", you take the content in unique ways to the places where your future potential possible buyers would be. And you do it in a way that is not just "Hey, I make socks. Come buy", but it's more like "Wow, we work directly with these cotton farmers in XYZ, and this is how we sustain that region, and this is how we've enabled an uplifting community there", or whatever it might be, and that's their brand story... That I think is how brands engage, obviously, in meaningful ways.

**Daniel Stenberg:** I think you're right. But I think given what we've seen on the web, is that - sure, that works for a subset of the content producers. They think like that. The other guys, they think "Hey, SEO is a good thing. We should just pepper our website with weird keywords, because this is the way they will find us. Not by producing content", because just spewing out keywords is much cheaper and faster than actually doing that good content.

**Adam Stacoviak:** Absolutely. And you could use an LLM to generate those, too. Like "Hey, I have a business in XYZ sector. Can you give me keywords?", and it will give you keywords all day long.

**Daniel Stenberg:** And if you then use your LLM and sell more socks than the guy who did that nice content for his sucks... What kind of incentive is that...?

**Jerod Santo:** I call it an SDoS. That's a sock denial of service. Yeah, so there we go. We're kind of like "Kind of good, kind of bad." Kind of promising, also fraught... I mean, none of it's straightforward, and that's why I think we're at a very interesting point in internet history... Because we have had a bit of a revolt. I think many people's eyes are open. You look at the backlashes on Reddit, the backlashes on Stack Overflow to these content deals... The users of the internet are not very happy with their platforms right now. And so people are willing to maybe suffer a little bit of reduced user experience, and maybe like a fractured reach in order to have more autonomy and a little bit more ownership. And so maybe there's a chance. I don't know.

**Daniel Stenberg:** Yeah. And my impression is that people have at least started to learn that maybe we don't need to be everyone at the same place, either. So maybe it's better, because we might get better content by not trying to be there where the entire population of the world is, because it's not going to scale. It's not going to work, really.

**Jerod Santo:** Right. It didn't work. It hasn't worked for so many people. I mean...

**Daniel Stenberg:** \[01:22:25.14\] Right. Every time someone tries, it fails eventually.

**Jerod Santo:** Right. Well, there's your state of the internet report. We dragged it out of Daniel...

**Daniel Stenberg:** \[laughs\]

**Jerod Santo:** You know, I'm somewhat optimistic as well... I think that there's obviously problems; some seem insurmountable. Some are larger than others. I think when you have a worldwide network, and then you have individual countries operating on a worldwide network, you obviously have a lot of concerns that don't cross international borders, but they crossed the network borders... And so that's always problematic. And it was from the start, it's just that we've matured into where the stakes have risen to where everybody cares more, and so nation states and large tech and these companies are trying to establish themselves and make their rules fit everywhere... And it's messy out there.

**Daniel Stenberg:** Yeah. And I think we see some troubling tendencies there sometimes when you try to make your borders mean more on the internet, like "Suddenly, within our country, this is the rules for how we do things", because it's going to be really, really messy if we want to try to enforce that. I mean, sure, China is an example, but even more when the EU comes up with things the US does... And if we're actually going to try to enforce having different rules for different countries, it's going to be really hard to do things. But at the same time, I think sometimes we also see this as a danger, but it hasn't happened as much as we maybe think it might do...

**Jerod Santo:** Well, a good example is EU with Apple, and the way Apple approached their compliance with a lot of the EU regulations was localized to the EU. And of course, I'm in there -- as an engineer, I'm in there with the Apple engineers thinking "How fractured is this codebase now?", where they have very specific and completely different rules based on region. How many if statements are in this codebase that don't need to be there? They're just there for regulatory purposes.

**Daniel Stenberg:** Exactly. And it begs the question then -- so sure, they did that for the EU, but are they going to do that for more areas as well? Or are they going to hold off on that? Because you would otherwise imagine that you would -- you know, the GDPR pretty much affected how they do business in the whole world.

**Jerod Santo:** Everywhere.

**Daniel Stenberg:** Yeah. Because that's just more convenient.

**Jerod Santo:** Or like they had to do with their hardware, right? Like with the USB-C ports. They could just put it in all the phones.

**Daniel Stenberg:** Yeah, exactly.

**Jerod Santo:** But when it comes to software, they're like "No, we're not going to do it for everybody. We're going to do it just for the EU."

**Daniel Stenberg:** I guess that tells us where there's a lot of money involved.

**Jerod Santo:** Yeah. It costs less to put in all the if statements than it does to actually do it for the whole world.

**Daniel Stenberg:** Right. It's worth complicating the software to that significant amount, just to keep it --

**Jerod Santo:** Good old fashioned tech debt.

**Adam Stacoviak:** Potentially -- do you have time for maybe a can of worms, potentially?

**Daniel Stenberg:** Hit me.

**Adam Stacoviak:** Well, curl is verified. You know this, because you wrote the post, and you've done the work... But I think given the install base, and the fact that curl is pretty much everywhere curl could be at this point, people will question whether or not there's ever a possibility of curl being xz-ed. I don't think so, given the things you've done, but I think what's important to talk about is the ways -- and maybe some of this is in your BDFL manifesto, or 10 commandments, or however you want to frame it... I don't think so necessarily, but in what ways are you preventing or working against securing, bolstering your security to never have even a social engineering attack? How do you protect yourself? How do you protect curl, and what it is?

**Daniel Stenberg:** \[01:26:04.09\] First, of course, the xz attack was pretty amazing, in both sort of the engineering that it took to do it, but also in how they selected the target... Both in a project that was mature for their attack, but also technically the correct project in that they had payloads in Git, for example, that they could infect with encrypted binary stuff. So they could hide a payload in Git. So they had a lot -- they did their due diligence really good when they selected that target. So not only were they a skilled team, they selected the perfect target for that. I don't think curl is as perfect a target for such an attack.

So if we're studying that -- so one way that xz was good is that they could insert huge payloads that were just encrypted, because they wanted binary blobs to test their compression. Or failed test compressions, or whatever it was. So one way we should then make sure that we don't have anything hidden in Git, we don't have binary blobs in Git; everything should be motivated and understandable, right? There should not be any big binary blobs that no one can understand. So you should be able to review everything. And ideally then someone actually reviews everything. I guess that's sort of the \[unintelligible 01:27:31.17\] Given enough eyeballs, all bugs are shallow. But how many eyeballs do we actually have? Probably not too many, because we all just think that someone else is doing the reviewing... But at least we've had a few security audits of curl. We actually had a few recently even; within the last few years we have had two security audits. So actually someone at least, independent security professionals actually reading a lot of curl code and figuring out if we have any hidden issues or problems somewhere... So at least we have that.

And then we just do the normal things, like making sure that every change is done as a pull request on GitHub. We review as much as possible. I think I review every pull request someone else provides. I have to admit that I merge code that I write, that no one else actually says Okay on. That's just me, because I want to move faster than someone else is actually saying thumbs up. So I'm just reviewing my own code. And sure, that's a vulnerability in the process, really. But I trust myself to that degree.

And also, in addition to that, we have a lot of test cases. And then if the test cases actually work, and they prove that curl works to this degree - so you actually have to do a pull request that actually runs through all those test cases. And someone did the math, and we do \[unintelligible 01:29:00.28\] somewhere around 140,000 tests per pull request. So there's a lot of testing. So when all of those tests go through green, we know that all the functionality that we test for is there. So it's really, really, really hard to plan the backdoor, or land unintended functionality there. Bugs - sure, stuff that we don't test could obviously land every now and then, because we fixing bugs all the time. But actually, genuinely land a backdoor in this code, I insist, is really, really hard.

Talking about what people ask me... People ask me that quite often, if I ever have detected anyone trying to land a backdoor in curl. And that might just be because I'm stupid, because I've never detected an attempt to land a backdoor in curl. And I think that is because it's so hard to actually do that. So I don't think people, in general, try that. I think they did that with xz because that was a different project, and they could do it. I think it's much easier -- if anyone actually wants to attack curl, it's much easier for them to find a bug, or exploit something that we already did unintentionally. Like a security vulnerability. Find that and exploit that. I think that is hard, but I think it's much less hard.

And in the end then -- so if everything we land in Git is tested and it gets reviewed, there should actually be a very, very slim risk that we actually land something there that is bad. And then in the xz case, they added attack code when they produced the release tarball. So they actually added code that wasn't in Git. And that's the final step we do; we do releases the same way. We actually generate files that we put into the release tarball. And those generated files are not present in Git. So we could actually do the same kind of attack with curl if I was a malicious, well, release manager. And that way, we pretty much make sure that we have a reproducible process to do those release tarballs. So nowadays, I do them with a Docker image, so anyone else can produce a binary identical copy of the release tarball.

So ideally, hopefully, someone verifies my release by doing an identical copy of the release, to make sure that the process actually works. And if every single step there holds, then there should be no room. Sure, every process, of course, has flaws. I mean, we can do mistakes, and there are humans involved, and humans do mistakes every once in a while... But hopefully, we have enough checkpoints, enough process or procedures to make it really, really hard. And if one of those tiny things go wrong, it won't be enough to actually land a backdoor.

So I think we have a lot of checks, a lot of processes... So it should be hard to land a backdoor. I will never say never, but it's going to be a challenge. There's going to be -- they need more ingenuity and effort than they did for xz to land it in curl.

**Adam Stacoviak:** Yeah, it's about putting those hurdles and breakpoints and just frustration points in there that if there's enough in the chain, then it becomes less and less of a desired target, because it's just generally hard. So we talked to Jacob DePriest, VP and Deputy Chief Security Officer at GitHub... Actually, if you're listening to this, it's in the feed already. So we're releasing it tomorrow, officially, from our record date. But in terms of ship data of this podcast you're listening to, it's already in the feed, so go check that out. But one thing he talked about was this idea of attestations. Artifact attestations. And I know that you play I guess in the GitHub sandbox, to some degree, and they may even talk to you early on. Are you involved in any way with that? Are you familiar with that feature set they're bringing out? It's in beta, but are you planning to use that? What do you think about it?

**Daniel Stenberg:** I have just sort of read up about it, so I don't know. I haven't sort of been missing any feature in that area, so that's why I haven't really kept up with exactly what it means and how we can use it... Because I think I have my T's crossed and my checkboxes crossed pretty well, and I do all this and I sign my releases, I have the same signature and my keys public since a long time... So I think I have a lot of these already covered. I'm not sure exactly what else they offer in this regard. So I haven't really followed it, so I can't comment too much.

**Adam Stacoviak:** Can you say the word attestation?

**Jerod Santo:** \[laughs\]

**Daniel Stenberg:** Attestation.

**Jerod Santo:** Oh, good.

**Adam Stacoviak:** Because we've found that to be the hardest part of it, was the lack of stickiness of the word attestation.

**Daniel Stenberg:** Yes, it's a hard word.

**Adam Stacoviak:** To attest. I think the idea though is pretty straightforward, and the fact that they're leveraging GitHub Actions as a part of it, it's basically a way to generate and verify signed attestations for anything you make with GitHub Actions. So I think you're deeply on, obviously, GitHub, and you're probably using GitHub Actions in many ways, I don't know for sure...

**Daniel Stenberg:** \[01:34:21.20\] I do, but we don't do releases with GitHub Actions. We don't do releases with any CI. So that's why I don't -- in our case, all our CIs, all our jobs we run there. They're just throwaway machines. They just run tests and verify -- they just say "green checkbox", then they're done and we throw them away. So we never use anything that they produce. So therefore if you attack our CI services, it doesn't matter for us. I'm sure you can make our own CI jobs fail, or fake that they work. That could possibly be an attack vector. But you cannot affect or sort of inject anything in our releases, because we don't build releases that way. I build them locally in a Docker image on my machine, but in a documented way, and then I sign them and I upload them to my server.

**Jerod Santo:** That's why you're the best, Daniel. Personal, hand-cut releases. After all these years, he still -- he's handcrafting his software.

**Daniel Stenberg:** Exactly. 259 of them, or something.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Good stuff, good stuff. Well, is there anything burgeoning, anything upcoming, anything that you're up to that you want to make sure that our listener knows about before we let you go?

**Daniel Stenberg:** I don't think so. When it comes to curl stuff, we're just chugging along, adding things... Since we do releases every eight weeks, we always just keep adding small things. It feels like we never add big things, because we always do these iterative, smaller things, on and on and on, never ending. And since we don't break APIs, we don't break user scripts, so we just continually add and polish things... And that's what we're going to do, continuously. So yeah, that's what I'm planning on continuing doing going forward as well.

**Adam Stacoviak:** I guess we'll talk to you in three years and see if you're still doing just that thing.

**Daniel Stenberg:** Yeah.

**Adam Stacoviak:** Or sooner or later. I don't know.

**Jerod Santo:** We've gotta have him back sooner. Now that we have Changelog & Friends, we have another episode every week that we can actually just bring you on, I feel like we have to interview you. We've got to get you on more regular, Daniel. Because every three years - I mean, let's do better than that. Come on.

**Daniel Stenberg:** Yeah, we can certainly do a different cadence. Exactly.

**Jerod Santo:** Maybe annually, at least... Come on.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Cool. Well, we always appreciate your perspectives on everything, man.

**Daniel Stenberg:** Oh, right... I forgot to mention, by the way - what happened during these three years is that I added in a new command line tool to my sort of agenda. So nowadays I also make a tool I called trurl. Talk about hard to pronounce... Completely impossible to pronounce. But I pronounce it TrueRel.

**Jerod Santo:** Yeah, you throw an e in there.

**Daniel Stenberg:** It's just a small command line tool for doing URL manipulations on the command line.

**Jerod Santo:** Oh, okay... Trurl.

**Daniel Stenberg:** So just another command line tool just to fiddle with URLs, because it's really hard when you write shell scripts and you want to do things with URLs... Like change the query ports, or change host names, change... Yeah.

**Jerod Santo:** I see.

**Daniel Stenberg:** They are tricky to manage in shell scripts, so now I have a tool for that.

**Jerod Santo:** Very cool. Very much fitting in the Unix philosophy here. You can just use trurl and --

**Daniel Stenberg:** Yeah. And also, another more important underpinning to that is that one of these things that happens over and over - there's been actually several times during the last decade people have pointed out, written papers about the problems with having different URL parsers in different layers of your system... Pretty much if you write an application and you use another transfer library or third thing, and they all parse URLs... And since the URLs are such a weird base, so there's no good spec for what the URL is or isn't... So all URL parsers have their own definition or opinion what a URL is. So basically, that means if you're using two different ones, it's a big risk. So there's a big risk that one of them treats it slightly different than the other, and that's one way to sometimes smuggle things through... Because what's the hostname in one might be an invalid hostname in the other, and vice versa.

\[01:38:33.11\] So that's also one way why I wanted to have this tool to manage URLs, because it uses the same parser as curl does. So if you want to write a shell script that understands URLs, it understands URLs the same way that curl does, so it sort of removes that friction that you might actually handle the URLs differently, in different parts of your setup, pretty much.

**Jerod Santo:** Gotcha. Now, is trurl just as easy to get your hands on as curl in terms of apt-get, dev install?

**Daniel Stenberg:** Yes, it's getting there. It's only a year old, so it's not completely everywhere, but it's getting deployed in most of those popular package managers now.

**Jerod Santo:** Well, we will link that up so folks can check that one out. Neat tool, terrible name. \[laughter\]

**Adam Stacoviak:** Gosh, Jerod...

**Daniel Stenberg:** Yeah, but it works out, because it ends with URL, and it works with URLs, and it's also a little bit like the tr tool - you know, the shell command for transposing, or whatever it's called... And it's similar in spirit to tr. So trurl - it works, sort of... Maybe...

**Jerod Santo:** I like the way it looks on GitHub, \[unintelligible 01:39:47.06\] It rhymes with curl. So I can see why you selected it, but...

**Daniel Stenberg:** Right. But you know, naming is hard.

**Jerod Santo:** It is. It really is. Well, come back soon. We'll talk more.

**Daniel Stenberg:** Well, thank you.

**Jerod Santo:** That's all for now.

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Bye, friends.
