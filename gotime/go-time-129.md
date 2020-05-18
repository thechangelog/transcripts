**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about Black Hat Go. We're gonna teach you how to steal billions of dollars while ensuring that your code remains simple, clear and maintainable.

Joining me today, Johnny Boursiquot. Hello, Johnny!

**Johnny Boursiquot:** Hello there.

**Mat Ryer:** How's it going?

**Johnny Boursiquot:** It's going quite well. I'm actually feeling pretty peppy. You might have heard about the -- there's this virtual Go conference going on in a few weeks... I think you might have something to do with it; maybe you're MC-ing, or something like that. I'll probably be making an appearance and giving a keynote, or something.

**Mat Ryer:** Awesome. That's gogetcommunity.com, right?

**Johnny Boursiquot:** That is correct.

**Mat Ryer:** On May 21st.

**Johnny Boursiquot:** Yes, sir.

**Mat Ryer:** Okay, great. Well, are you excited to learn about hacking in that?

**Johnny Boursiquot:** Oh, boy, am I!

**Mat Ryer:** Yeah, me too. I feel like this is gonna be quite an episode... Don't worry though, we don't have to do it alone, as usual. I'd like to welcome back Roberto Clapis. Roberto is an ex security consultant and penetration tester, now a Chocolate Factory Boffin at Google. Hello, Roberto!

**Roberto Clapis:** Hello, hello. Thanks for correctly pronouncing my actual job title. That's good.

**Mat Ryer:** Hm. Security engineer at Google is the boring version.

**Roberto Clapis:** Yeah... Who cares about that.

**Mat Ryer:** But what was that? The register called you a Chocolate Factory Boffin, didn't they?

**Roberto Clapis:** Yes, yes... We found some things in Safari and they weren't happy about that, and they decided to make a funny blog post about it.

**Mat Ryer:** \[00:03:57.09\] Okay, we'll have to put that in the show notes, and you can tell us more about it as well later... Because I need to welcome our final guest today. It's Tom Steele. Tom is one of the authors of the book Black Hat Go, and a research consulting directory at Atredis Partners. Did I say that right, Tom?

**Tom Steele:** Yeah, you got it good enough.

**Mat Ryer:** Close enough.

**Tom Steele:** Yeah, that works.

**Mat Ryer:** Welcome to the show!

**Tom Steele:** Thank you. Thanks for having me. I'm excited to talk about all manner of things, I guess so far.

**Mat Ryer:** Yeah, well let's find out what we're gonna talk about. It's exciting. First of all, it's nice to kick off, to get to know each other a little bit with any working from home tips. We're all working from home a lot more these days. Has anyone got any tips?

**Roberto Clapis:** The best tip that I can give you so far is to always have something to drink on your desk, and a lot. So you drink, you stay hydrated, and after a while it automatically reminds you to stand up and go somewhere else, like in another room in your house, so that you also keep the blood flowing.

**Mat Ryer:** That's quite a good little system.

**Tom Steele:** You can always tell how much work I've been doing by the amount of cups on my desk. They just kind of accumulate over the day.

**Roberto Clapis:** You should garbage-collect sometimes.

**Mat Ryer:** You know, I'm excited to talk about the Black Hat Go book, because it's not often you get a lot of technical books that have titles like -- and this sounds a bit like I'm just doing clickbait, but chapter seven is gonna blow your socks off... Is it called -- is it "Databases and file systems pilfering and abusing"? I saw it twice, it's something like that...

**Tom Steele:** Abusing databases and file systems.

**Mat Ryer:** Okay, so chapter seven is called Abusing databases and file systems. That is a great title for a chapter.

**Johnny Boursiquot:** I have the book right here, I can double-check for you if you want.

**Mat Ryer:** Yes, please...

**Roberto Clapis:** Oh, physical one?

**Johnny Boursiquot:** I know, right? \[unintelligible 00:05:48.27\]

**Mat Ryer:** I didn't know they did those. They just printed out the internet. \[laughter\] You should get Tom to sign it for you.

**Tom Steele:** Anytime. Later.

**Johnny Boursiquot:** Yeah, definitely. Later, yeah.

**Mat Ryer:** I don't mean like with a signature, I mean like add up all the characters in it and send a checksum.

**Johnny Boursiquot:** Oh, boy... Yeah, okay.

**Tom Steele:** There's something about that though...

**Mat Ryer:** Where does it come from, Black Hat Go, the name? What does that actually mean?

**Tom Steele:** You could probably ask a hundred different people and get a hundred different answers. We kicked around a bunch of titles for the book at first, and I personally wanted to stay away from Black Hat Go, from the name Black Hat... So I think our original title that Chris and I came up with was Adversarial Go, which is probably more descriptive of what we actually do on a daily basis... Because the term Black Hat - I wouldn't exactly describe what I do on a daily basis as Black Hat, because I'm obviously always doing it legally. People know I'm doing these things, they're paying me to do them on a daily basis... So I'm not doing them to illegally make money or anything like that, which is probably more what you would think of Black Hat.

But the publisher wanted to sort of relate it to Black Hat Python, which was a Python book that came out a number of years ago. I think they came out with the second edition. It's a really good Python book, too.

So in that No Starch ecosystem there's -- I don't think there's a White Hat, but there's a Grey Hat C\# who one of my co-workers actually wrote. That's a really good one, too. But that has a lot more parsing out maybe vulnerability management style stuff. It also has SQL injection, and those sorts of things.

So I think more along the terms of what No Starch was thinking, was like these are more like attacking-based tools, versus what a defender would use. But typically with white hat/black hat, that historically has been more criminal versus authorized type of testing. However, we all go to Black Hat, the conference over here, and most of us are not criminals anymore... \[laughs\]

**Johnny Boursiquot:** \[00:07:57.02\] Plus it'd probably boost sales too, right? \[laughs\] It's not dull and boring, it's more of "Yeah, you're going in the offensive. You're gonna poke holes in people's systems." That sounds way more fun to me.

**Tom Steele:** Yeah. So the goal for the book, when we got asked who the audience was, the audience wasn't people that know Go already. And I don't even think it's people that know Go, from the Go community. Certainly, if they wanted to go pick the book up and expose themselves to some things they might not be exposed to, that'd probably be a good choice, too. But the audience was really like the people that I work with in the security industry, or maybe people who are just getting started, or they wanted to learn a new language, and then they want useful tools that they can go apply.

If you pick up a programming book and it' just strictly "This is how you do X", like "This is how you handle arrays", or "This is how you do a for loop" - that's great, but if you give yourself projects that you can actively use in your work, those tend you help you learn the language quicker. So that was really what we were going for.

So it just sort of spurred off of my history with Go. I started using Go -- I think 7-8 years ago might be the first commit to GitHub. We had a tool that was written in JavaScript using Node, and I basically used Go to rewrite that. That was my first introduction. After that, it sort of became the tool for everything. Obviously, it doesn't handle anything that we need, but I think it was most of the tasks. I became very productive with it, so after an extended period of time I felt like we could do a book like this. My co-authors Dan Kottmann and Chris Patten, they're also amazing Go developers as well, and the certainly -- the book wouldn't have come to a close without those guys. Certainly Dan pushed it to the end for us as well.

**Johnny Boursiquot:** So if I may give a review of this book, I've been having fun with it, honestly. It has shown me different use cases for Go, that I typically don't think about... I'm like "Oh, you CAN do that with Go..." And now I have a whole new appreciation for the net package... I'm blown away by some of the things you can do, and I've been having fun with it, extracting bits and pieces there, and meetups, and teaching people about writing port scanners, and building proxies, and things... It's been incredibly fun having these kinds of projects, where you're not just learning syntax, you're not just learning the mechanics of Go, but you have things to build that are kind of fun.

I've really been enjoying this book, so kudos to you and the others. This is a really great book, and I'm having fun with it.

**Tom Steele:** Awesome. Thank you. I think that's probably the most useful aspect of Go for us, is the ability to just interface with TCP, and do it very quickly, and start doing interesting things, like writing odd proxies. The amount of times that we've been trying to get out of a network how to write some crazy proxy to get around things has been -- we've done a lot, we've done quite a bit... So yeah, it's awesome.

**Roberto Clapis:** That has been basically my experience with Go. During a penetration test we needed to build a weird proxy. We needed to take a WebSocket on one side, and needed to downgrade it to a TCP connection on the other side, because that's what we got; because when you do a penetration test, you get going whatever you get going. So we needed to write a proxy, and I had just started learning Go... And I said "Well, \[unintelligible 00:11:28.23\], the other one is a readWriteCloser. I can just io.Copy them together and let's see if it works." And it worked.

It was my first experience with Go in writing a tool that I actually needed at work... And it's a blast, because you just use Go, stuff that is in the standard library. Actually, in your book I think most of the imports you don't even mention them, because just running Go import on your snippet would import all the right packages, because you just use a lot of standard library and some external packages here and there, which I really appreciate.

**Tom Steele:** \[00:12:06.21\] Yeah, you can get away with -- like you said, you implement a reader, you implement a writer, and all of a sudden you've got a tunnel.

**Johnny Boursiquot:** Yeah...

**Tom Steele:** And we've done that across various -- you can do it at any layer. So if you wanna do command and control over S3, and then write that back to a WebSocket, it's pretty much just a piping Legos together type of thing.

**Roberto Clapis:** Yeah. We used to use Python, but for capture the flag competitions and at work... But at some point it would just become so complicated to handle the multiple connections, and concurrency, and all the threadings... Plus, you need Python to be installed on the system that you are talking to, when instead with Go you can cross-compile to whatever weird, baffling architecture you find, and you just push the executable... Which was a big plus.

**Tom Steele:** Yeah, for sure. I think that's probably the most welcome feature, is obviously a lack of dependencies... You know, for people that are familiar with this stuff. So a lot of the stuff that we do, we work together as a team. The projects can range, different types of things, but one of the things that we do a lot is we're trying to attack a company; this is like a bank, or something like that, let's just say hypothetically... And we're not necessarily testing a specific application. We do a lot of that stuff too, but we're trying to get into this company by any means necessary.

So once we gain code execution on an end user's workstation, like a Windows PC, that's when the fun really begins, because you have to figure out how to get out of these networks that sometimes are locked down. That's where Go comes in handy quite a bit, is when you need something really quick, and you need to compile it to Windows with no dependencies. That's a great feature... So that's just been great.

Or maybe you're working with a co-worker and you have some little utility, and they need to run it right away. You're moving fast, sometimes having them install Python, and then install the dependencies, and to handle all that can be a nightmare... Because now you're not just saying "Here's my tool. Use it. Here's package management." Maybe they've never used whatever language you chose to write it in. I don't know, Ruby Gems seems to be the most historically awful one, but... \[laughs\]

**Roberto Clapis:** I was about to say, how much time did you spend trying to make a gem work for your Metasploit. \[laughter\] That has been one of the worst experiences in my life. And yeah, Go doesn't betray, in that sense... Especially after a while I started building a library that I just would use for scripting, because Go is also good for scripting... And in that library you had the utility functions, like some of the tunnels that you explain in your book. I would never dream of building in some of the things that you wrote about, but I have this utility library, and you just pull it in, and you call it, and it just gets you running in a short time.

It's also nice to see that it doesn't require that big machines, or beefy computers; it just runs from very low-hand hardware. I once had to do a penetration test from a Raspberry Pi, and I was grateful that Go was low footprint.

**Tom Steele:** Also, low compile times helps a lot, too.

**Roberto Clapis:** Yup.

**Tom Steele:** I've been playing a lot with Rust; we won't get into that, but it's...

**Johnny Boursiquot:** \[laughs\] This is a Go podcast, mate...

**Tom Steele:** ...it's just sit and wait. Yeah, for sure. For sure.

**Johnny Boursiquot:** So I kept thinking, when going through the book - and I'm still going through it - I've kind of been jumping around a little bit, and learning about the different projects, and whatnot... It kind of begs the question, how did you pick some of these projects? Because a lot of them are really fun. There's like credential harvesting, there's keylogging, there's building proxies to get around corporate networks, there's interacting with Metasploit over RPC, there's writing DNS tunneling... How do you pick those (to me) really fun projects? Do you pick the projects and say "Okay, what are we teaching here?", or do you say "Okay, we need to teach these things. What kind of projects would convey what we're trying to teach?"

**Tom Steele:** \[00:16:13.16\] I would say the majority of the chapters came from thinking about how do we use Go during our testing, and what kind of utilities have we written and do we know a lot about? And how was it useful for us? So pretty much every single thing in that book, we've used that. There might be something small that we've used.

Now, the hard part was taking perhaps a bigger project and then pairing that down to something that you can actually digest in the book. So the stuff in the book is really useful, but it's all basically getting you started on "What can I do in addition to this?" But everything in there is pretty much -- like, we had used that first; there's something in there that we had used for a test.

And then there's a few stuff that obviously some of the guys - they have a ton of expertise. Chris Patten wrote the steganography chapter, and I'm not the guy to talk about that, but he has a long history with that sort of thing.

So basically we built a huge list, and then we kind of paired it down to what we could actually fit in the book. There's some stuff that didn't quite make the cut, because it would have been a little bit too much background, a little bit too much lab setup type of thing... Like, some of the VoIP stuff you can do is really awesome, but you can't really set up a virtual environment for some of that stuff, right?

**Johnny Boursiquot:** Right.

**Tom Steele:** So yeah, I think that's how we went about it. For example the DNS proxy - we use a lot of tools to do what we call "command and control", which is basically like we have a payload that's running on a system that we don't control, and that's communicating back with us. You can do that over multiple protocols, but one of the great ones is DNS, because it gets out at most networks, and certain things... But a lot of the tools that are used there - they don't necessarily handle redundancy or proxying natively. You're basically client to server, that's it. But if you can use Go to write up a quick proxy that maybe fans those out, or at least gives you a layer in front of those, that's a great way to do it.

**Mat Ryer:** So when you talk about proxies then, is the purpose to intercept and sort of have a look at and spy into the traffic? Or is it to control it or modify it in some way? Or does it sort of depend on what you're doing?

**Tom Steele:** I think there's room for both with Go. I think there's been times when we've needed to -- say we're not doing this adversarial type of testing of an entire company; say we're just testing some software, and we need to get in front of the TLS stack and start doing interesting things there with inspection. Go is great at that, because you can actually -- it's so easy to copy the existing TLS package from the standard library, and modify that, and then use that in your own code. That's really easy to do with Go. It might be easy to do in other languages, but for me it was easy to do with Go. Very simple.

So we've done that before, where maybe some client's implementing TLS in a really weird way, and we've had to do that. But for the most part, for my use case and the stuff that you'll see in the book, it's more like shaping traffic, like being able to get in and out of networks, and around, and move things. So think like, you know, interesting style of reverse proxies type of thing.

**Roberto Clapis:** \[00:19:45.17\] Since you mentioned rewriting the TLS package, one thing that I wrote a proxy for was the Metasploit; when you use it -- Metasploit is a common suite that collects exploits, and you just take the exploit and you run it. It uses Ruby, and it uses a specific client hello. So when you connect via TLS, some firewall detected that is the hello that usually comes from Metasploit, and other things... And the firewall is going to drop it, regardless what you send .

So with Go it's quite easy if you write your own reverse proxy to just take whatever comes from Metasploit, rewrite some headers, rewrite the client hello, because you can do that, specify the ciphers that you do... So you can clone perfectly the Chrome handshake, and the firewall is going to let you through. That is one kind of proxy that you do to yourself, to make the tools behave, which Go is great at.

**Johnny Boursiquot:** I must say, that's scary, dude. \[laughs\] Honestly. I knew this was gonna be a fun episode, but really, some of the things you can do, and I've seen talked about in this book, and the stuff you're mentioning now - you can do that stuff with Go. It really blows my mind away.

**Break:** \[00:21:00.06\]

**Mat Ryer:** So it makes me wonder then, is this book potentially arming people with information that they could use to do some harm with?

**Tom Steele:** Probably.

**Mat Ryer:** And what's your ethical position on that, Tom?

**Tom Steele:** I'll put it this way... Oftentimes the best people that get into hacking - but I'll just call it the security industry, the offensive security industry - the best people often come from development roles. One of our guys, Ryan Hanson, he lives in Idaho with me... And when I first met him, he was a developer working in Boise, but he has become one of the best security people that I know, because he understood the software at a level that you just don't get by just only doing security. So all hacking is is really just understanding the underlying mechanisms and then thinking about how you can subvert them.

Showing someone how to do SQL injection, for example - that would be more like a script kiddie type of thing. You can go read about that stuff. But the best way to understand SQL injection is to go write your own SQL package. That's a great way to handle it, because now you know how to defend it and you know how to attack it. I don't have any qualms about ethically teaching \[unintelligible 00:24:04.28\]

**Roberto Clapis:** \[00:24:08.14\] There's one other ethical standpoint, which is if you put the book out there, the attackers and the defenders have the same amount of knowledge. If instead this knowledge is just shared across attackers, maybe the defenders - which usually are software engineers - don't get access to this, so they might not know about this stuff. I've found that putting information out there is usually good for defense, even if it is aggressive, or black hat, or adversarial knowledge.

**Mat Ryer:** Yeah, it sounds like that answer is legally watertight, Roberto, if you actually had a lawyer check over that sentence... Because I think you've nailed it. \[laughter\]

**Tom Steele:** Also, one of the things that we deal with a lot is bypassing an antivirus or EDR controls. So you have something running on your system that's supposed to prevent code execution and payloads from escaping, and all those things. I don't actually have a problem teaching people how to bypass those things, because if we bypass them, it's a game of cat and mouse; those companies will improve their detections, and they'll actually come up with detections that maybe work. Or they won't advertise detections that don't work, or are easily bypassed.

You can say "We have this machine learning algorithm that blocks all this stuff." And it's like, "Well, not really... Not really." It turns out if I just name my binary worldofwarcraft.exe, it just kind of works, right? Those sorts of things.

**Mat Ryer:** People just immediately click it, yeah.

**Tom Steele:** Yeah. I think the ability to identify and bypass these controls just makes the defenses stronger, and that's how we evolve.

**Mat Ryer:** Yeah. That defense could be used to excuse any crime... But yes, I do get your point.

**Tom Steele:** So true! \[laughter\] I have broken into physical banks before, and yeah, that's fun stuff, too. But you should always get approval prior to attacking a network or a physical location.

**Johnny Boursiquot:** Yeah, I was waiting for that bit after you said that you've broken into banks before... \[laughs\]

**Tom Steele:** Yeah, you don't wanna be doing this stuff unauthorized, set up virtual labs, and that sort of thing. That's definitely the way to go. I wouldn't say "Go attack random websites", but there are programs like HackerOne and Bugcrowd and stuff like that where you can go get approval to test those sorts of things, even if you don't have experience.

**Mat Ryer:** We'll bleep out the names of those pieces of software, although this book -- apparently, you can just use the book... \[laughter\]

**Tom Steele:** Well, those are sites where anyone can go sign up to do security testing of websites. They facilitate those types of things.

**Mat Ryer:** Gotcha.

**Roberto Clapis:** Yeah, those are collectors of bounty programs, in which you go there and you see which companies will pay you to do the tests on their systems. You attack their systems, and if you find a bug, you get paid for it. It's not usually that high of a pay, but it's nice when companies put it out there.

**Johnny Boursiquot:** So is it fair to say that the things that do make it into the book, such as this one, are the things that are at this point well known? Is there a new ground being broken? And I'm gonna go and assume yes, to some degree, but please do elaborate. Is there a new ground being broken in -- I don't wanna say black hat, but... Or is it like a remix of different exploits to get to new things?

**Tom Steele:** There's no sort of zero-days in this book. They're all well-known techniques. I did wanna put something in there that I was advised not to... It was how to bypass a certain product, and they were basically "Hm, you can't do that." I was like, "Okay, cool. I won't."

**Johnny Boursiquot:** We should ask our folks at Changelog how airtight are our legal stances... \[laughs\]

**Mat Ryer:** We didn't send Tom the link for this Zoom... So there's your answer.

**Tom Steele:** \[00:27:56.23\] So the book talks about things in generalities... And yeah, they're known techniques, they're known flaws. And I think if you're on the defense side, if you're doing software development, knowing the attacks is definitely better than not knowing them. For example, you wanna know how to do SQL injections, so that when you're writing your application, you don't develop with that.

I think if you're writing software, you always wanna be like "Well, what can happen if someone does this?" I think those are really good questions to ask.

**Mat Ryer:** Yeah, that might be why you say that developers make good security engineers, because when it's your job to defend against it and you realize how hard it is, maybe you just think "Do you know what? I'm just gonna go on the other side of this." I don't know if that in any way helps that, but...

**Tom Steele:** A long time ago, at a company I worked for, we were trying to basically bring up a bunch of people up to speed on web application security... And a typical way you do that is you basically just build a vulnerable web app, and then you teach them all the offensive techniques that you can. But I actually took it the other way, where I'd made them build a web app and then implement the defenses... Because I felt that was the best way to get an in-depth knowledge of how to identify and possibly bypass those defenses.

**Johnny Boursiquot:** It does.

**Roberto Clapis:** When you teach security knowledge to software engineers, and you see that a certain engineer maybe didn't have a certain concept, he just starts clicking into it and he goes like "Hm..."

Once I was out at dinner with a friend of mine, who is an extremely good software engineer. And I was talking about cross-site request forgery, which is one kind of vulnerability... And after a while, he was like "Hm. I have to go." And just walked out. \[laughter\]

**Mat Ryer:** I just have to go. Unrelated.

**Roberto Clapis:** It was like four people, and he walked out, and he deployed a fix, and he was like "Thanks for that. I didn't know about that." That was the best reaction.

**Johnny Boursiquot:** Okay, so I'm seeing a lot of parallels with operations. In my line of work - and I do SRE currently - I've found that developers and engineers tend to think of the operability of something towards when they start needing to ship it. It's like a concern, like "Oh yeah, I'll worry about that when I get to it." And then we sit down, and I'm like "Well, have you thought about this? Have you thought about that, before putting this thing into production?" They're like "Ohhh...! Yeah, let me go back and fix that."

So it's almost like security, and making sure that your software isn't vulnerable to some obvious things. It sounds like this is also one of those things where, you know, as an engineer, folks are building features, and then you go sit down with a security review team, and they start poking holes in your thing, and you're like "Ugh... Now I've gotta go back and plug those holes." The art of engineering requires so much more than just writing features, and I'm seeing \[unintelligible 00:30:47.22\] in this talk.

**Tom Steele:** Yeah, I agree. I think that you obviously wanna try to design your feature with security in mind from the beginning. However, I am very sympathetic to that, to basically having to just get something running. That's another flaw that you see a lot in the security industry too, is the exact opposite, where they come in and they basically go "This has no security", but they're not thinking about the fact that it works, or it needs to work first. So there's a lot that goes into building and just making a product run, that sometimes you need to be able to give up a little bit of security as well while you're getting that going. So I think there's a happy medium, and that medium is constantly moving, depending on your risk.

**Mat Ryer:** Yeah, I wrote an application once, and I did something wrong and basically couldn't sign in... It was the most secure application I can think of.

**Tom Steele:** Exactly. \[laughter\]

**Johnny Boursiquot:** So secure it's unusable.

**Mat Ryer:** But it just didn't work at all, yeah. So it was just a bit too secure. And that was how I was pitching it... "If anything, we've made it a bit too secure..."

**Roberto Clapis:** \[00:32:00.10\] Well-designed APIs are made in a way so that using them in a secure way is easier, and less effort than using them in a wrong way. That's usually what a library designer tries to do... Because otherwise people are going to go for the easy road, because they have to deploy.

**Mat Ryer:** Yeah, but they of course have to know what those things are, and that's where I think a book like this comes into play. Is Go good as a foundation for writing secure code? Because I've heard different things said on this subject. How does Go stack up when it comes to security?

**Tom Steele:** Yeah, again, you'll probably get a bunch of different opinions on this. My particular opinion - I think it does a lot of things correct, and I think the way people that are probably using it, I think it's probably a good thing to grab. The fact that you have to be pretty explicit about things helps quite a bit. The compiler will help you with a lot of bugs. And then the fact that it's statically typed, it just makes you be explicit. You have to explicitly handle lots of different things.

I'm not gonna get into this, but the lack of generics probably helps in some of those things. It makes the code easier to trace, and that sort of thing.

**Johnny Boursiquot:** Shots fired... \[laughter\]

**Tom Steele:** But yeah, and I think the Go standard library does most things correctly, as well. For example, code execution, calling command exec, the fact that there isn't a version of that where you can just provide a string with arguments, basically - that's a secure design in and of itself.

**Roberto Clapis:** Yeah, and also if you look at the SQL package and the HTML package - the SQL package makes you use prepared statements, or parameterized queries...

**Tom Steele:** You have to try very hard to write -- you have to basically pass the format strings, or something like that. You have to know what you're doing to screw it up there.

**Mat Ryer:** That is cool then.

**Roberto Clapis:** Yeah, the HTML template does \[unintelligible 00:34:02.24\]

**Mat Ryer:** Yes.

**Roberto Clapis:** I think Go was one of the first languages in the open source world that had it. Maybe there was a Java library by Google, but...

**Tom Steele:** If you go check out the documentation for that library, you'll basically see a reference to a paper about congestion aware encoding, and I don't think any other language read that paper and implemented it... I'll talk about it with one of \[unintelligible 00:34:27.05\]

**Mat Ryer:** So for anyone not familiar, this is where when the template is rendered, it knows if it's putting it inside, say, an attribute, versus in the body as HTML to be seen, and things like that. It does different things, depending on the context.

**Tom Steele:** Yeah. And interesting things can happen if you HTML-encode data into a URL parameter type of thing, or JavaScript.

**Roberto Clapis:** Yeah. I maintain the package, and every time I have to send a CL to fix some things, I always shiver a bit, because it's so precise and so well done, and has to have no bugs... Because any bug there can become a vulnerability. It is so disquieting to add code to that.

Also, the paper that you were talking about, Tom - I think it's like several tens of pages of schemes and very hard to read text, so...

**Tom Steele:** It's not easy.

**Roberto Clapis:** Yeah, it's not for everyone.

**Mat Ryer:** Well, the Go team read that kind of stuff for breakfast, don't they? That's what I like, because it solved for us, and as developers we get to just use it. So thinking about that then, are there any common gotchas? And actually, this was a question I got from Kamal on Twitter. He asks "What are the most common mistakes that developers make that lead to exploits and security vulnerabilities?"

**Tom Steele:** \[00:35:59.25\] Yeah, so I've thought about this... At Atredis we've actually tested quite a number of Go applications. We do a lot of software security type of things, and so the things that I see -- was gonna go into that, this is actually a nice feature of Go... For example, say you wanna take JSON and you wanna move that into a struct that you eventually wanna insert into a database; this is a very common thing... The nice thing about Go is that you're explicitly defining the fields that you want in that struct. So you're not gonna get random fields.

For example, if you're using something like Node, we see this a lot, where they basically take request.body, if you're familiar with that, and they slam it into a database and now you've got \[unintelligible 00:36:36.09\]

So what I see is that actually works quite well, because now you know the objects that you want; "objects" in quotes. And now you've also defined the field types; you know that what's coming in is gonna be a string. Sometimes it might cast \[unintelligible 00:36:54.27\] depending on the library that you're using, and that sort of thing, but you are defining at least the data types that you want coming in.

So the stuff that I see just from that end is sometimes you have a struct that represents something that's in the database, a user item. If you serialize that directly into the database, directly from JSON, you've got something called mass assignment, where you're basically not filtering the fields that you expect, because your form might take three fields to find the user; the first name, the last name and the email address. However, what if you have another field that's like a boolean, "isadmin", or something like this... Just because your form doesn't provide that value doesn't mean that the user won't provide that. And when you serialize that JSON or that form value even into the struct, and then you put that struct in the database, you've got a serious problem on your hands now, because now they're starting to modify objects, and things like this. So I see that quite a bit.

SQL injection - we don't see that a lot. Cross-site scripting, we don't see that. We've seen some really nasty bugs when people are writing their own templating engines; we've seen some particular nasty ones. One actually resulted in code execution...

This particular instance was basically they had a partial template that would load the user input from a database. Then that partial template would get rendered into a parent template. And because they took that value as trusted, you could put code in there, so you had this double eval type of situation.

But I think those are few and far between. I think most of the Go things that we're testing, people aren't actually using templates to render server-side anymore. They're mostly using a JSON or other services. However, I would probably stick to the standard Go template, or at least something that wraps that pretty thinly. That's just my opinion. But we don't see a lot of that stuff.

We see that mass assignment issue... For whatever reason, when you've cross-site request forgery, we see the protections implemented, but often incorrectly.

**Roberto Clapis:** Yeah. If I might add, I also saw that a lot... Because people don't have it in the standard library. It's an XSRF/CSRF token, so people don't see it, people don't know about it. So far, I've found that to be one of the most common vulnerabilities in Go applications.

**Mat Ryer:** What should you do?

**Tom Steele:** Be careful. \[laughter\] Yeah, go ahead...

**Roberto Clapis:** Basically, whenever you take a request that is state-changing for your server, so that afterwards your server will do something different... For example, if you take a search query, it's probably not state-changing. But if you get a submission of a subscription, or some user data, you might find that to be state-changing. You need to use the XSRF token package to protect your form.

Basically, there needs to be an extra parameter that you strip away, but it needs to be there, and it needs to be tied to the user and to the session. Otherwise, attackers can craft those requests. I will link the package in the podcast.

**Tom Steele:** \[00:39:57.18\] Yeah, and my advice there is -- yeah, the CSRF packages themselves are actually good. It's when you try to get clever. So my suggestion is be explicit. If you're building an HTTP application, build a handler that accepts only a post request. Don't process \[unintelligible 00:40:11.04\]. What I've seen is they protected the post verb with CSRF, but they will process ahead with the same value. That can be a big issue as well.

**Mat Ryer:** Hm. I'm just gonna go... \[laughter\]

**Johnny Boursiquot:** You'll fix some things... \[laughter\]

**Tom Steele:** Yeah, so some CSRF bypass stuff is one... You see a lot of -- like, they wanna implement core setters, and I've seen some really interesting bypasses there, where you're not using the correct regex... But a lot of that stuff has been resolved.

**Roberto Clapis:** Okay, but to be fair, CORS is hard.

**Tom Steele:** It's difficult, yeah.

**Roberto Clapis:** It was not made to be understood by humans. CORS was a big mistake, and it should never have been there in the first place.

**Tom Steele:** Yeah, every time I have to go explain one of these bugs, I go reread the Mozilla documentation, so that I don't say anything stupid.

**Roberto Clapis:** I do the same.

**Johnny Boursiquot:** I think we've already got Roberto's unpopular opinion... \[laughter\]

**Tom Steele:** On the idea of being explicit - if you are building your API to only take in JSON, don't accept anything else other than JSON. There's no reason to sit there and parse text/plain, or URL form encoded input if you are only willing to use JSON. And I haven't seen a lot of that in the Go web frameworks, where they require that level of explicity. I've written something that I can link later that does this on a per-handler basis, which I think is the way to do it.

I actually stole a lot of these ideas from the author of Hapi.js. If you wanna go look at a framework that implements a lot of things well, go look at that framework, Hapi.js. Eran Hammer has done an excellent job with that. But yeah, validate all your inputs, too. Don't just depend on the struct mapping. If you're expecting an email address, make sure that's an email address.

I'm not super-happy with the way the validator libraries in Go work. There is one that's pretty good. At least it gives you good definitions, but then you have to go and write your own wrappers, and things like that... Which - I don't know, that might be just the story of Go web development in general though, right? It's like, you've gotta implement a bunch of stuff yourself.

**Roberto Clapis:** One of the things that I hated the most is the content type. In Go if you don't set any content type in your responses, it will still work, probably... Because the Go server tries to guess, based on the response content, what is the content type, and will set it on the response for you... Which means that if an attacker can somehow make the server respond with something that looks like HTML but is instead JSON, the server will set an HTML content type, even if your endpoint only returns JSON. So as Tom was saying, you should only accept JSON if you expect JSON. Same thing the other way around - if you want to return JSON, set the content type.

**Tom Steele:** Yeah. Being explicit is definitely helpful.

**Johnny Boursiquot:** Okay, so when you say that, there's something that immediately comes up to mind, and that's the fact that most developers basically -- there's always this bias towards "Oh, easy to get started, easy to get going. Just grab this thing, drop it in your code, and if you run into any issues, go to Stack Overflow, copy-paste whatever you find, and go. Get the job done!" There's all this emphasis on "Easy, easy, easy", and not enough on "Do you know actually what it is that you're putting in your codebase right now?"

So the frameworks tend to hide and make things easy, and I remember back when I was doing Rails work, there were articles about how Rails basically prevents you from shooting yourself in the foot from a security standpoint. You can't get a little Bobby Tables kind of situation in your system if you're using Rails, because you're hoping that the framework is gonna take care of these things for you.

\[00:43:57.20\] At the same time, when I think about it I'm like "Well, shouldn't I know as a developer why something is working \[unintelligible 00:44:02.11\] is working?" In order to be explicit - which is the advice we're giving here - that means you have to dive deeper; you have to go lower. Basically, leave the abstractions of the framework behind, get deeper, in order to know exactly what's going on. There must be some sort of happy medium there. I'm not sure where it is in the context of this conversation, but is it your advice to default to the explicitness, versus relying on packages and frameworks?

**Roberto Clapis:** Personally, I think that if a framework is well-designed -- for example, Rails gives you a hand in Ruby. If a framework is well-designed or a package is well-designed, like the HTML template package, you should not know. You should be able to use it and not have vulnerabilities. That's how a framework should be done.

But then if you want to do an extra step... For example, in the HTML template package there are some types that tell you "These might cause a security issue." It's written in the type. "If you use this type, you're exposing yourself to a risk." That's the time when you need to go back and reread the entire thing and understand the threat, understand how those features combine, and everything else... Because at that point you're on your own.

**Tom Steele:** I definitely think there's things that you shouldn't implement yourself. I think you should rely on packages that you trust, if you can, from trusted sources. But you've gotta remember, if you import something, you're now responsible for it.

With Go we've seen some interested things where some packages were overriding the \[unintelligible 00:45:45.01\] and HTTP clients and things like this, and you don't know that it's doing that. Or they're opening files in the background and you don't even look, because you're just like "This does the thing that I wanted it to do." But I don't think that you should implement everything yourself. When I said "be explicit", I meant more "Be explicit in what you accept as valid input from an unknown source." Don't trust the input coming in, and interrogate it as much as reasonable before processing it.

In relation to that, we see good encryption, good use of encryption. No one's writing their own version of AES. But then I also see people using it incorrectly. The difficult thing with Go is people aren't writing -- typically, if they're leveraging Go, they're doing something probably pretty interesting, pretty difficult, as far as like they're breaking new ground in their application... Because this isn't just like "Well, I can just use WordPress and write a little plugin that does it." They're breaking new ground and doing something tough, so you might have to use encryption there.

So yeah, I do see quite a bit of basically using encryption without validation - yeah, stuff like this. I don't really see hashing used incorrectly. For whatever reason, people seem to be pretty good with that.

And then I guess the individual flaw that you won't see in other languages for the most part is unbound concurrency. It's huge. What I mean by that - I'm gonna put this in context of HTTP, just because it's the easiest one for me to relate to... You have an HTTP handler and you accept an array, and then you launch a goroutine for every item in that array, and process that. We've seen that quite a bit, and that always leads to...

**Johnny Boursiquot:** Trouble.

**Tom Steele:** ...trouble. I think the request limit on Go is 10 MB, so you can imagine an array of 10 MB; you can generate quite a bit of goroutines that way.

**Break:** \[00:47:43.02\]

**Mat Ryer:** It's funny, because you think of this stuff often as like hacking, and it's all low-level... If you believe the movies, of course, it's like 3D cubes that have to fit together. When it all lines up and lights up, you know you've hacked in somehow...

**Johnny Boursiquot:** \[unintelligible 00:49:10.22\]

**Mat Ryer:** Yeah, you sort of think of it as being a very alien process... But when you talk about that, that's a very everyday thing. I'm sure most of our listeners will have dealt with JSON coming into some endpoint, and done exactly the kind of things that you're talking about.

So it's interesting that it's worth thinking of just the very practical ways of abusing something, as well as things that are down at the TCP layers that you might not be exposed to too often.

**Tom Steele:** Yeah. I think when you get down to the TCP layer, if you're talking about the in-the-movies type of thing, \[unintelligible 00:49:46.08\] buffer overflows and memory corruption vulnerabilities. You just don't have those in Go. Of course, you would want to audit and be careful when you're calling C libraries from Go. If you're using unsafe - it's called unsafe for a reason, right? If you're taking in input from an untrusted resource and then passing that to a C library that you're wrapping, that could be disastrous. I don't see a lot of that though. For whatever reason, we don't see a whole lot of the need for people to wrap C libraries, and I think that's because Go makes it so easy to work with--

**Roberto Clapis:** Cgo is terrible.

**Tom Steele:** Yeah, cgo is pretty terrible. I wasn't gonna say it... \[laughter\]

**Mat Ryer:** What's that? It's more secure?

**Tom Steele:** It's not too bad... I use it quite a bit. It's not too bad, but it's definitely not easy. But yeah, I just don't see a lot of that. I think most people if they find themselves reaching for a C library, they're just rewriting the bits and pieces that they need, and processing those binaries by themselves... Which is good to see.

**Roberto Clapis:** Yeah, and one thing that I also like is that people are using the race detector when they test their code, which is a -- so Go is memory-safe, which is great. But one thing that people don't know is that it is memory-safe until a race condition happens. If you have race conditions in Go, you might get memory corruption and remote code execution. So build your code with race.

**Mat Ryer:** Could that be abused, or is it just gonna be random?

**Roberto Clapis:** It can be abused. Actually, in Google we host a CTF every year, and one of the challenges of the finals last year was to exploit a Go server by using a race. So you could exploit a race on the server and get remote code execution by just abusing this race. So it's doable, people did it. I think six teams solved it... So yeah, use a race detector.

**Mat Ryer:** And what about fuzzing? I feel like fuzzing is also gonna be really useful when it comes to this.

**Roberto Clapis:** Fuzzing is going to be really useful, and also I think that the second or third most voted proposal on the Go public repo is about fuzzing. I would love to see it in the standard library, because fuzzing also makes it very easy to spot easy bugs and panics. I mean, a denial of service is usually a bad bug. It's not a memory corruption, it's not an RCE, but you don't want your server to go down. And the fuzzer will try to feed complicated input to your APIs, so you will find it EOS.

**Tom Steele:** \[00:52:25.03\] Yeah, that was gonna be my unpopular opinion, was that denial of service is worse than you think. It's more critical than people think it is.

**Mat Ryer:** Well, we'll get on to that. Before we do though, Thomas, I wanted to ask you one last question. What was your mother's maiden name? \[laughter\] Okay, good. Now you've passed the test.

**Johnny Boursiquot:** Date of birth.

**Mat Ryer:** Nearly. Now you've passed -- it's too quick. It's too good. It is good. It's actually time, speaking on unpopular opinions... It's time for our regular slot, Unpopular Opinions.

**Jingle:** \[00:53:07.14\] to \[00:53:26.26\]

**Mat Ryer:** So Tom, you were saying your unpopular opinion...

**Tom Steele:** My unpopular opinion is that denial of service is a big deal.

**Mat Ryer:** Oh...

**Tom Steele:** And that's because if you build this awesome service and no one can use it, you're probably gonna lose quite a bit of money if it's profit-generating. And sometimes that can impact companies more than code execution can.

**Mat Ryer:** Yeah, of course. I think that's a fair one. I mean, do people think denial of service is just not something to worry about?

**Roberto Clapis:** Yes.

**Tom Steele:** Yeah, most of the time. Most of the time people's eyes glaze over when I start showing them bugs in their code with that.

**Mat Ryer:** Oh...

**Johnny Boursiquot:** Or they assume it's gonna be handled at the edge of the network or something, by the provider or something.

**Roberto Clapis:** One of my worst moments - I was presenting a vulnerability to the client and I showed that with a single packet I could make it backend-generate several tens of thousands of packets, and take it down. And they said "Well, it only goes down..."

**Tom Steele:** It comes right back up?

**Roberto Clapis:** Yes... \[laughter\] Why did you build this? If it's fine if it goes down, why is it up anyways? Turn it off."

**Mat Ryer:** I thought they were gonna say "Don't send that bit." Don't send that byte, or whatever it is.

**Tom Steele:** Well, why would anyone do that?

**Mat Ryer:** Yeah, no one's gonna do that. Tell us some other things that people say that's infuriating when it comes to security? Because honestly, it's good to hear... And it's actually quite useful for people to learn.

**Roberto Clapis:** I think I'm blessed at Atredis... The customers we work with - they actually get it, and I don't get too much pushback anymore. I think we're evolving, and that's really a nice thing to see. I think we're evolving to where security and software development aren't as adversarial as they used to be. I think we all want the same goals, and at least for the most part the developers I work with and talk to a lot - they really do care, and they wanna fix things, and they do take things seriously... But yeah, so I don't really see much of this "Well, why would anyone do that?" type of thing anymore.

**Johnny Boursiquot:** So it doesn't take much convincing then to tell people "Hey, because of that code you wrote this way, you have a problem." You don't have to prove to them that they have a problem.

**Tom Steele:** Sometimes... That's another debate, too. We call it illustrating impact. If you're describing a problem, versus having an actual proof of concept, proof of concept will be better.

**Johnny Boursiquot:** I'm gonna borrow that, "illustrative impact."

**Tom Steele:** Illustrating impact, yeah.

**Johnny Boursiquot:** Nice... Nice.

**Roberto Clapis:** I've had different experiences, probably with different clients... Because the most questions that I got was "Yeah, and then what?" You just prove that you can run arbitrary code on the server, and the answer is "Yeah, but then what?" You're like, "No, that's it... It doesn't go further than this." \[laughter\]

**Mat Ryer:** \[00:56:02.12\] Is that not bad enough...?

**Roberto Clapis:** Yeah, exactly. It's like, "But what is it that you want? It makes you coffee, but it's made with milk. What do you want from me?!" \[laughter\]

**Mat Ryer:** Yeah, I'm looking forward to -- I'm gonna get the book. I'm really looking forward to number seven, the abusing databases one. I don't know if I'm gonna be able to learn anything. I've spent lots of years abusing databases... I've screamed "Blue murder" to Postgres, for example.

**Tom Steele:** Yeah, I'm working with the publisher for getting a discount code for everybody too, so...

**Mat Ryer:** Oh, that would be sweet. If we pull that off, we'll put it in the show notes for everyone. Nice one.

**Roberto Clapis:** Isn't it the other way around, that the database abused you, in that case?

**Mat Ryer:** Yeah, actually that's a good point. That's why I want revenge.

**Johnny Boursiquot:** Yeah, it's the database's fault.

**Mat Ryer:** Yeah. But what sorts of things...? I mean, obviously, a SQL injection and stuff like that is kind of well known, I think... But are there other things that you have to look out for?

**Tom Steele:** Look out for as far as databases and security?

**Mat Ryer:** Yeah. Are there any common gotchas around databases that people--

**Tom Steele:** Don't store your encryption keys alongside your cipher's text.

**Johnny Boursiquot:** Nice.

**Roberto Clapis:** And do not expose that to the internet. Those are two steps you don't have to make, especially together.

**Tom Steele:** Yeah. Don't just do everything as root. Use permissions, and use the least amount of privileges you need. Don't store your encryption keys in the database... Yeah. Also, \[unintelligible 00:57:28.19\] that you store in the database, too. Don't assume that just because it's in the database it hasn't been tainted with.

**Mat Ryer:** That's a good point.

**Tom Steele:** Yeah.

**Mat Ryer:** Another tip I like to do is I always have a field called Password, that I just put fake stuff in and I just don't use it. So if anyone ever does look in the database... \[laughter\]

**Johnny Boursiquot:** It's like a honeypot.

**Tom Steele:** Yeah. Don't encrypt passwords, hash them. Don't use a secret key to encrypt the passwords.

**Mat Ryer:** Yeah. I always get worried when a web service -- if I've forgotten my password and then they just email me my password. They must have been storing it in some way that they can --

**Tom Steele:** Well, it's also great when you dump a database and then you see 500 of the hashes, of the passwords as the same thing. Then you know they've got a default password, right?

**Mat Ryer:** Ooh... Monkey.

**Roberto Clapis:** Mat, you should put "Nice try" in the password column, instead of the random stuff.

**Mat Ryer:** I feel like that's just gonna make the attackers angry though...

**Johnny Boursiquot:** Yeah, that's an invitation.

**Tom Steele:** I'll give you guys a good security bug that everyone probably wants to go check their code out for...

**Mat Ryer:** Oh, yes...

**Tom Steele:** Maybe you guys can answer - so when you're gonna email a password reset email to a user, how do you get the domain name that you're gonna email the link from?

**Mat Ryer:** \[00:58:49.24\] Oh... So I assume you don't just get it from the email address...

**Tom Steele:** Let's say the password reset - you're gonna take in the user's email address, and then you're gonna generate a link to your domain for your application with a reset token. Let's say you're securely generating the token and everything's good there. How do you decide how to generate the URL?

**Johnny Boursiquot:** That's some sort of configuration in your application, right?

**Tom Steele:** Yeah, for sure.

**Johnny Boursiquot:** Maybe you pull that from a database, or from some sort of YAML file that gets pulled, or at runtime you read it and then Boom!.=

**Tom Steele:** Yeah, that's the correct way.

**Mat Ryer:** Oh, you nailed it.

**Tom Steele:** What we see a lot is people using the Host header.

**Johnny Boursiquot:** Oh, bad move.

**Tom Steele:** That way it works in \[unintelligible 00:59:26.26\]

**Johnny Boursiquot:** Yup.

**Roberto Clapis:** What!? Ahh...

**Mat Ryer:** And what's the problem with that?

**Tom Steele:** That the attacker can control the Host header, and then it generates a link to their domain. So the user clicks that.

**Johnny Boursiquot:** Hey Mat, what's the host name to your new app you're working on? I'd like to try out some of these things from the book...

**Mat Ryer:** Yes, I'm not gonna--

**Tom Steele:** The book mostly focuses on like once you've got access to a database, what do you do?

**Johnny Boursiquot:** Pilfer.

**Tom Steele:** Yeah, you pilfer. That's right. You find the ciphertexts, and you find the banking data, things like that.

**Mat Ryer:** Yeah... It's good stuff \[unintelligible 01:00:07.18\] We're approaching the end, but we've got a bit of time...

**Roberto Clapis:** I have an unpopular opinion.

**Johnny Boursiquot:** Another one?! Roberto... You're on fire!

**Mat Ryer:** Roberto, let's hear yours.

**Roberto Clapis:** Go would benefit from enums. That's it, I want enums.

**Mat Ryer:** Okay. So you want to be able to specify a type where there's only a set number of allowed values compiler-checked.

**Roberto Clapis:** And I want the switch to be exhaustive. Because in many Go applications I've found a way to bypass security by just specifying four, in an enum that only expected three values... So you end up in the default, and the default does other things. So enums would be a big security benefit, in my opinion... But that's my opinion.

**Mat Ryer:** It's a good one.

**Johnny Boursiquot:** Yeah, that's not unpopular. I think that's fair.

**Mat Ryer:** Yeah, because you can do them; you create a type and then you use the Iota to const block. So it's possible to do, but it's not the same, is it?

**Roberto Clapis:** Yeah, and then you parse the form, you take the integer, you convert it, and where has your type gone?

**Johnny Boursiquot:** Right. So you want proper enum support.

**Roberto Clapis:** Yup.

**Mat Ryer:** Proper enums... Yeah, fair enough. That's a good one. That could be popular or unpopular, I don't know. I'm afraid we just don't know... But we'll find out for you, Roberto, and let you know... Shall we? \[laughter\]

**Roberto Clapis:** Thanks. Put it in the links.

**Mat Ryer:** Yeah, we'll put it in the links. Okay, well I think that's all the time we have today. Thank you so much to our guests, Roberto Clapis and Tom Steele... And Tom's book is available... Roberto, are you selling anything?

**Roberto Clapis:** No...

**Mat Ryer:** Okay, Roberto's not selling anything, so that's fine... No, but seriously, Tom, where can we get your book if we're interested?

**Tom Steele:** I think the best is No Starch Press.

**Mat Ryer:** Cool.

**Tom Steele:** Or it's on Amazon too, if you wanna go that route.

**Mat Ryer:** And there will be a link in the show notes.

**Roberto Clapis:** NoStarch.com/blackhatgo.

**Tom Steele:** And I should be getting a discount code for everyone, for the eBook at least.

**Mat Ryer:** Well, that would be great if we could pull that off.

**Johnny Boursiquot:** Nice.

**Mat Ryer:** That'd be awesome, Tom. Thank you so much. Well, that's all the time we have today. Thanks for listening, and we'll see you next week.

**Break:** \[01:02:46.28\]

**Jerod Santo:** I went back and watched The Neverending Story. It doesn't hold up, guys. It doesn't hold up at all.

**Mat Ryer:** What do you mean? Which bit?

**Tom Steele:** I haven't seen that in a very long time...

**Jerod Santo:** The movie. The movie. \[laughs\]

**Mat Ryer:** I thought it was ad time...

**Johnny Boursiquot:** The graphics, you mean?

**Jerod Santo:** The movie doesn't hold up.

**Mat Ryer:** I thought it was logically sound.

**Roberto Clapis:** I think the main issue is that it ends... \[laughter\]

**Jerod Santo:** You never want it to end...

**Johnny Boursiquot:** You liked it that much?

**Jerod Santo:** This is just false advertising, right?

**Roberto Clapis:** No, it's just that it's fake.

**Mat Ryer:** Fake news. It's clickbait, ain't it?

**Jerod Santo:** My issue is that it didn't end fast enough.

**Johnny Boursiquot:** A flying dog... What kind of nonsense is that?

**Mat Ryer:** Yeah, it's a lovedragon, but...

**Jerod Santo:** \[laughs\] Mat's personally offended at this point. \[laughter\] He's like "Come on, guys..."

**Mat Ryer:** It's my childhood.

**Jerod Santo:** I mean, it was awesome during my childhood, so I was excited to watch it with my kids... I'm like "Come on, kids, this is gonna be amazing." And then I sat in there and I was like "What is going on...?"

**Mat Ryer:** Yeah, but it can't compare to the Avengers stuff.

**Tom Steele:** No, not at all.

**Mat Ryer:** If you have kids, you have to show it to them in real-time, as you experienced it. You have to rate-limit. We could just do an episode on the Neverending Story, but we're gonna need a bit more time. Dylan on Slack just said that Artax drowning in the swamp was the saddest moment in movie history.

**Jerod Santo:** In movie history?

**Mat Ryer:** It's almost as sad as when the Terminator slowly goes down into that lava...

**Johnny Boursiquot:** With the thumbs up.

**Jerod Santo:** The thumbs up is hopeful...

**Mat Ryer:** Yeah, but it gets you, doesn't it? Because you think "Aww... It's really sad that that terminator is dead. That machine sent in the future to murder people. I feel really bad now that it's dead." \[laughter\] So it works.
