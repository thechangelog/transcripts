**Natalie Pistunovich:** Hi everyone, welcome to our episode about hacking with Go. This time we're not talking about Go and security, or things like that, but we have two hackers who are occasional members of the Go community, and we'll be learning how Go is used for things like hacking, whatever that means.

We are joined today by Joakim, who is a researcher. You're a security researcher at Intezer, and you became a gopher in 2016 and have been hunting bad gophers since 2018.

**Joakim Kennedy:** That's right.

**Natalie Pistunovich:** Great to have you.

**Joakim Kennedy:** Thank you.

**Natalie Pistunovich:** We also have JAGS...

**Juan Andrés Guerrero-Saade:** That's easy.

**Natalie Pistunovich:** ...who is a principal researcher at SentinelOne and professor at the Johns Hopkins SAIS Alperovitch Institute. What is that wonderful place?

**Juan Andrés Guerrero-Saade:** It's Johns Hopkins - we just started a new institute under Dmitri Alperovitch, with his blessing... So just trying to do cyber research, cyber security stuff.

**Natalie Pistunovich:** Super. It's very great to have you today. I am joined by my co-host, Mat.

**Mat Ryer:** Hello.

**Natalie Pistunovich:** You all know Mat, you hear him every episode, even when he's not around, because he has the song with Unpopular Opinion.

**Mat Ryer:** Hello!

**Natalie Pistunovich:** Mat, it's great to have you here. So what was the name of your first pet?

**Mat Ryer:** My first pet? LB.

**Natalie Pistunovich:** \[laughs\]

**Juan Andrés Guerrero-Saade:** And your mother's maiden name?

**Natalie Pistunovich:** And how do you spell that?

**Mat Ryer:** Yeah. Oh, I see what's happening... \[laughter\] I'm falling for it. What's your favorite security question, Natalie?

**Natalie Pistunovich:** Other.

**Mat Ryer:** Other. Yeah, it's a good one that. \[laughter\]

**Juan Andrés Guerrero-Saade:** This is a race to the bottom at this point.

**Natalie Pistunovich:** So gentlemen - please tell us what programming languages do you commonly use for hacking?

**Juan Andrés Guerrero-Saade:** Well, just to kind of put things in context - it's sort of charitable to put us in the context of hackers. We are very much in the security research side of the house... So as much as we're kind of interacting with hackers or their by-products all day long, we are more on the receiving end. So you wanna try to reverse-engineer whatever malware you find, figure out what it is that they're doing, do a little bit of thread hunting, and at least in my case, where I'm focused on targeting the attacks, and cyber-espionage, and kind of nation-state sponsored stuff, it really becomes more about going from hacks and malware to trying to understand campaigns, and who's doing what, and where.

So at least in my case - like, yeah, I do a little bit of coding in Golang, but for the most part, Go became this kind of interesting challenge of a new language, looks very different under the hood, it looks very different once you get past the linker, what the hell are we looking at, and how do we reverse-engineer this very sort of strange set of constructs and assembly.

So we could give you some answers about hacking, but I think it might be disappointing in comparison to our side of the house.

**Joakim Kennedy:** Yeah. I think I can add also - sort of comparing binaries produced by the Go compiler, versus like other languages... It is a gold mine when it comes to miscellaneous data that's in it, which makes sometimes our work maybe slightly easier... Because it sometimes includes information on the host where it was compiled. You get file paths, and things like that... So you then start to sort of track between maybe families that have nothing else in common in terms of the code, but you can see from unique folder names, and things like that.

**Juan Andrés Guerrero-Saade:** I guess we're kind of putting the cart before the horse, right?

**Joakim Kennedy:** Yeah.

**Juan Andrés Guerrero-Saade:** Alright. So in an attempt to address Natalie's question and hopefully bring everybody along with us, for the most part, when you're dealing with malware and just hacks in general, C tends to the be the most popular language; maybe some C++ if you're looking at some more kind of professional-grade malware... But you'll see malware of just about every stripe. Like, if you're looking at resilient banking Trojans, they almost always write them in Delphi; there's people who like doing compiled Python... You can find just about everything.

\[07:55\] What we end up doing is -- you know, you get a binary that's usually stripped, there's no context, there's no source code, there's no debug symbols, and you basically work backwards. We wanna take that compiled binary and reverse-engineer it, and figure out the functionality, figure out what it was the programmers intended to do, and then take it from there. It's a little bit of a Rubik's Cube; every time you come at a different binary, you're trying to figure out "How did they build it? What programming language? What linker? Compiler version?" and just start sort of building an understanding of layers and layers of abstraction, until you can go "Okay, yeah, this 2 MB binary in reality is just trying to hijack your browser, so that it can take your bank account, and these folks can try to steal your money." It's like, okay. That's your ultimate understanding. But between getting a binary and getting to that, it's just many layers of confusion that you're just kind of working your way through.

**Joakim Kennedy:** Yeah. And also add all of the sort of things that malware authors do to make that job even harder, with regards to obfuscating stuff, and encrypting payloads, and decrypting it in memory... When you first look at it, you don't see the original sort of behavior; you have to start working, and it's almost like the -- well, sometimes it can be like those Russian dolls, where you open it up, and open it up, and it just gets smaller, and smaller, and smaller, and eventually you get to the piece that you need.

**Mat Ryer:** You mentioned that Go has a lot of extra-data in there that makes it easier; it's like a gold mine of data in there. But how does that make it easier then? Is it about that that you're able to kind of un-pick it, in some way, and learn more as you dig into it?

**Joakim Kennedy:** Yeah, so what Juan was talking about first was - most of the times when we get binaries that are written in C and compiled, they strip out all the symbols and everything, so you don't have any names of the functions, or anything like that. And you can do the same for Go binaries, with the compiler flags. But that information is still there. It's available in other data structures, it's not in the symbols... So a lot of the tooling that we have and we use, we pool that information and we kind of recreate what would be the symbols, so we can get the function names, and stuff like that.

Some of us have looked into this more in detail, but - using some of the data that's not intended for what it's supposed to be, and we're sort of using it because it's available... I mean, the nice panic functionality, but you get the nice stack traces, which means it has that information... So it's just about knowing where to find it, and then you work your way backwards and you can align it.

**Juan Andrés Guerrero-Saade:** Recently, we released a little project called AlphaGolang. It was kind of a nod at alpha Go and sort of DeepMind's attempt to master Go the game, rather than Go the programming language... So compiling is kind of an entropic process, right? You're losing all this added flavor and syntactic sugar that makes programming understandable to human beings; all of that gets taken away, and you can't really get it back, unless you have all this extraneous information that comes with having to build the project yourself. And I think when folks first approached reverse-engineering Go, you had that absence of information, and you had a lack of understanding of the Go paradigm... Like, how different the programming was, a lack of understanding of all the magic that the linker is doing along the way to make even simple things work... Like, you know, in order to have multiple return values, which is a fantastic thing that Go enables - the way the linker manages that is that it peppers extra functions every time there's a function call, that creates a runtime stack in order to allow you to have somewhere to put those values when you're gonna come back, when you're gonna return from the function.

But when you don't have an understanding of how the linker works, how Go works, what you're really just looking at is "Why the hell is it calling another function every time we're going in it's returning and I can't find the arguments anymore... Where did all this go?" You're just kind of in this hurricane of information, and you have no idea what's happening.

\[12:07\] I think the myth that we wanted to dispel - and this comes years after the fact - is that in reality Go might be one of the easiest programming languages to reverse-engineer. Just by the way that the linker was designed, it'll actually break if you try to remove all of the debug information out of the binary.

So it turns out that if we get really clever with our reversing tools, you can actually get a pretty comprehensive understanding of what the binary is doing, without having to spend a whole ton of analyst time.

**Joakim Kennedy:** Yeah, I agree with you there. I've looked at so many Go binaries at this point, but I find it easier than other languages so what they spit up

**Mat Ryer:** You said that the linker needs that information to do its job... Could you not do all that, get the final binary, and then go and do some work to obfuscate more?

**Joakim Kennedy:** So what we use is -- for example, the type information is still there, and we can utilize that to actually reconstruct all the type definitions.

**Mat Ryer:** With the names as well?

**Joakim Kennedy:** Yes. Their names are there. It's used by the runtime. So there is like a shared structure, both in the reflect package and the runtime, and also in the linker, that is sort of just copied by text... And that's how all the type information is stored. You walk that table and you can reconstruct all the types. That goes from a struct type, to all its subfields, and everything; and you get that back, to remove that... Because every time when you're allocating memory for it -- so when you create a new object, there is a function in the runtime that essentially just called malik but that size of that struct, whatever it needs to allocate, is stored in that data structure. So you can't wipe it.

**Mat Ryer:** Right. It needs it in order to work.

**Joakim Kennedy:** Yeah.

**Juan Andrés Guerrero-Saade:** Yeah. I feel like we have to be kind of careful not to set up a challenge... It's not to say that someone couldn't get super, super-clever and...

**Mat Ryer:** Yeah.

**Juan Andrés Guerrero-Saade:** Because this happens on Windows, too... The folks that write packers, and obfuscators - there have been some really, really clever packers along the way, and that's kind of the way that polymorphism sort of grew into the antivirus, and the virus community was like "Well, you guys think you're so clever... Let's see what happens if this thing basically reshifts itself every time that you execute it." You're like, "Okay... Well, this isn't gonna be nice." However, I think you kind of have to weigh that against the value of writing malware in Golang, which is "Well, I just wrote this piece of ransomware once, and now I can cross-compile it. It has all these nice efficiencies, and concurrency is easy..." \[laughter\] Like, all the features that we like as programmers are suddenly a boon for folks that are doing not-so-great things.

**Mat Ryer:** Yeah. So do you prefer rubbish programming languages for that reason?

**Juan Andrés Guerrero-Saade:** Um, I don't know... I mean, I'm learning to love reversing Go, because it's drastically easier. First, I like writing Go; it makes a little more sense to me, and then also, we've written some scripts that allow us to undo the debug stripping that you can do with the compiler, that allow us to put all of the function names back into all the functions that we're sort of discovering through our reverse-engineering tools... Then we can sort all of those function names by package. So since Go -- like, I wish Ivan was here; I know Ivan was supposed to join us. He has this great expression, that Go was fascist Python.

That fascism - sorry to put it that way, but that fascism kind of allows us to do a lot. You can go "Hey, we can essentially separate everything that we know as part of the standard library, that's part of GitHub repositories..." And unlike any other programming language that you might wanna reverse-engineer, in this case we can literally sift down to what are the user-written functions.

\[15:56\] We were looking at malware like Sunburst, which is part of this really famous SolarWinds attack that happened a few months ago... When you look at one of those binaries, they're like, I wanna say like 40,000 functions that get discovered post-compilation. Because there's a lot of stuff that gets added by the linker, and things that you don't think about... So if you're looking at it blindly, it's like, "Oh my God, 40,000 functions and I have to figure out what the hell I'm looking at." If you run it through all of those processing scripts that we were talking about, you can actually get it down to like "Here's 22 functions that the malware developers actually wrote", instead of getting trapped in the runtime, and sort of losing your way in fmt, and all these other packages that you don't really wanna spend your time reversing.

**Joakim Kennedy:** You also have to add, too - I think the last time that I checked (it might have been Go 1.16), the Hello World had like 1,700 functions, and then one main function that just printed a line. You start with basically nothing; you get at the entry point, which is the small pieces of the Go standard library or the Go code that was actually written in Assembly - that's where you land. And then there's this bootstrapping of the runtime, and the scheduler, and all that stuff, which you don't need. And then somewhere in all of those functions, you need to find where does it call main.main. Because until you get to that point, you haven't even started your work yet.

**Mat Ryer:** That does make sense. Could you not just compare like a simple Go binary and do like a diff on it too, to see what's different? Could you make a simple Hello World and diff it with --

**Joakim Kennedy:** So that's kind of somewhat the initial techniques that were used when people started analyzing Go binaries. You would basically use the information that you could get from the strings, to kind of figure out which version of the compiler is this. "Oh, it's this, and it's using these imports. Let me just build a binary that imports all of those packages, and then I'll generate signatures for those functions, and then I put the signatures on top of what I have. And what is not detected - that's what I'm looking at."

**Mat Ryer:** Yeah, that's so clever.

**Juan Andrés Guerrero-Saade:** That's one way to try to go about it... And frankly, I think that's still part of a phase where we're kind of knocking about in a dark room and we don't know where the walls are, and we don't know where the light switches are... Because if you think about it, it sounds simple... Like, "Okay, we're gonna write something with the same packages, and compile, and so on", but then you start getting into the flavors of things... Like, "What versions of this were they using? What version of the compiler were they using? What did they link against? What was it built for? Target architectures..." The linker actually works slightly differently if you're on Elf versus MacO versus Windows...

So that's when you start to get into this world of infinite variations that kind of takes the wind out of your sails. And normally, it would just be kind of this slightly disastrous situation. Like, when you look at C++, there really aren't that many shortcuts for C++. There's flirt signatures and other little tools that we can use to try to get some of the functionality out of the way... But that entropy that gets involved in the compilation process means for example classes are gone; class definitions are gone. You have these virtual tables, we have no idea what references what, so you don't even have a perfect control flow, unless you're dynamically executing the samples.

So there's a lot of ways that you don't really have a clear path forward, and it takes a lot of work to try to reverse-engineer complex C++ binaries... And that's how it felt when you first got to Go. Eventually, we figured out that there are actually wonderful ways to rebuild Go binaries. Now we're looking at all the things that are not so nice. Now that it feels like Go is -- I won't say that we've bested Go, and reversing is super-easy, but it's so much more approachable, and now we're looking at things like Rust, and it's like "Oh my God, reversing Rust is awful." It's so much closer to C++, and now we don't really know what to do once again.

**Mat Ryer:** \[20:08\] That's interesting. I probably wouldn't have guessed that. I would have thought Rust would be in some ways more deterministic... So that's interesting.

**Joakim Kennedy:** The problem where this stemmed from is -- like, these newer languages, they kind of shifted from the dynamic linking to statically linking libraries. So that's where the major hurdle comes from - analyzing a dynamic-linked whatever is relatively easy, because you know it imports those specific functions, so you know what is gonna call at that point. But when you get a binary and suddenly it has SQLite, it has OpenSSL and all these other libraries inside it, and you just see a function call, you have no clue where you're at. So you can run into those too, with C and C++, but obviously, with Go and Rust that's the default. Every Rust binary in general will be like that.

**Juan Andrés Guerrero-Saade:** Yeah. I might be a little bit unfair to Rust, which is probably fine --

**Mat Ryer:** It's fine on this podcast.

**Juan Andrés Guerrero-Saade:** On this podcast it's perfectly fine; there are not Rustaceans that are gonna come and beat my door down... But I'll say we're probably being a little bit unfair, in the sense that if we had had this conversation about Go four years ago, we would have probably said the same thing... Like, "Oh my God, it's awful to reverse-engineer, we have no idea where we are... There's all this cruft of statically-linked code that has nothing to do with the program itself..." That's kind of what it feels like in Rust right now. I'm hoping that as we get more familiar with that paradigm, and our tools improve, that we'll also get into a better place with Rust... But there's nothing to say that that's gonna be the case. C++ has been C++ for the past however many years, and they're still -- I can probably count on one hand the folks that are genuinely proficient at reversing C++. There's like stars of reverse-engineering like Rolf Rolles but it's definitely not me or many of the folks that i get to reverse with... So there's nothing saying that that's gonna get better, we just have high hopes that we might.

**Break:** \[22:20\]

**Mat Ryer:** So when you're reverse-engineering things, you mentioned you can get the names of functions and the names of types... But how useful is that? Hackers - are they writing code and they've got a function called "steal credit card"?

**Juan Andrés Guerrero-Saade:** Yes...?! \[laughter\]

**Mat Ryer:** It can't be as simple as that.

**Juan Andrés Guerrero-Saade:** Sometimes yeah.

**Mat Ryer:** Oh, wow.

**Joakim Kennedy:** So I wrote a tool... I open-sourced this; I think it was two years ago... And what it does - you throw it a Go binary and it will extract that information, and it will print out like a source code projection. So you get a folder, file, and then functions, and then the line numbers where the function starts and ends. You print that out and you can look at samples. And many times, I'll just throw a bunch of Go binaries and it would just go through it and go Loader, Cracked, Ransomware. Oh, that's a new backdoor... Because you see the function names. Encrypt. Get key. Drop note. Walk filesystem. I see only encrypt, I never see a decrypt function. It's pretty clear what this is doing, just from the name.

**Natalie Pistunovich:** It's nice to know that hackers use good practices in software...

**Mat Ryer:** Yeah. \[laughs\]

**Juan Andrés Guerrero-Saade:** Well, more or less... Then you get into obfuscators, right?

**Joakim Kennedy:** Yeah, so there are some obfuscators, but I can tell you, I so far haven't seen a legitimate application or anything like that using an obfuscator. You see just garble letters. And also, the interesting part with all the UTF-8 characters being allowed - if you see a function name that is just a mixture between Cyrillic and Korean character set and Chinese character set, just mixed together, you go "Well, that's obfuscated."

**Mat Ryer:** Or it's a really smart person like Natalie, who speaks many, many languages.

**Natalie Pistunovich:** \[laughs\]

**Joakim Kennedy:** Yeah. When you have to start installing fmt just to be able to print out the characters... Because every other character is missing.

**Mat Ryer:** Yeah. But I think I'd throw you off the scent. I'd call the function "Don't steal the credit card information." \[laughter\] Haah!

**Juan Andrés Guerrero-Saade:** Just that reverse psychology in the binaries, right?

**Mat Ryer:** Exactly. It's reversing the reverses, essentially.

**Joakim Kennedy:** Yeah. One of the most interesting -- from like a reverse engineer's perspective, one of the weirdest things I've seen is this binary... All the strings are sort of hidden, but they are hidden as the function name of a function. And then what it does is it executes the function, it uses reflect to figure out where it is, to get its own function name, and then that is an xsword with a key to get the string back up. That's one of the most interesting kind of obfuscation techniques I've seen.

**Juan Andrés Guerrero-Saade:** Yeah, you start to get into a lot of cleverness... There are certain packers that are just like - you open a binary that's full of passages from Shakespeare, and what the packer is supposed to do is go through that passage, cherry-pick things, and rebuild dynamically. There's this big cat and mouse game, particularly in the Windows world, between malware developers and security researchers, and... You've got these strange metrics, right? We've been talking about reverse-engineering for understanding; like, we wanna know what the sample does. But from the perspective of a malware developer, their biggest initial concern is just not getting detected. So as a malware dev, you kind of have to walk a fine line between "How difficult do I wanna make it for Joakim or for me to understand what the binary is doing?" but also "How can I fly under the radar, so that an antivirus doesn't go "Hey, this looks super-weird. Detect."? It's a touchy balance.

**Natalie Pistunovich:** See, Mat, is trying to think of smarter ways for the functions, and also wondering what can be good...

**Juan Andrés Guerrero-Saade:** \[laughs\]

**Mat Ryer:** Well, that's what I realized, is that I was falling into that trap of now trying to turn it into a game...

**Natalie Pistunovich:** Yeah, yeah...

**Mat Ryer:** \[27:58\] And it is kind of fun, isn't it? In some situations it's a very serious impact that these things can have... But it does have that -- you can't deny it, it's the kind of cool area of coding, hacking. A lot of people grew up with popular culture around hacking, and I think some people probably get into programming for that reason. And you know, mischief at a distance was definitely a motivator for me when I started writing scripts... I'd do things like little pranks; mine would always be pranks. So on the autoexec.bat on a Floppy disk I would overwrite the wallpaper on the school computers, or something like that... So all I had to do is put a Floppy disk in, and the next time the machine booted up, the wallpaper would then change. And it would always be just prank things like that. But it is something that is very kind of enticing.

**Juan Andrés Guerrero-Saade:** The stakes have been ratcheting up. It's really easy to kind of look at it that way, and we don't wanna make it too dark or too heady, but now this is the playground of also a lot of nation-states and a lot of criminals, and if you're in the U.S, the ransomware epidemic is sort of unavoidable. You have to talk about it every day. And that's where things get less pretty. If you're at a hospital that can't help folks because all their tragically-outdated Windows XP systems are in a flat network, and all of them got popped at the same time... That's where you go "Well, yeah, that code was fun... I love the idea of just having these hacking super-powers, but there's a side to it that isn't quite so cute." And I think we're kind of walking that line all the time, where you go "Oh, this is fascinating", and you just get wrapped up in the functionality, and what somebody has been able to accomplish, and it's easy to forget, "Wow, this is actually a part of a much heavier game."

**Mat Ryer:** Yeah, absolutely. I think that's a very good point. By the way, I'd just change all the hospital wallpaper... \[laughter\] If I ever broke in, that's all that happened. That's how you'll know it's me. It'd just be my face, smiling, as well. Such an idiot.

**Juan Andrés Guerrero-Saade:** "I hope you feel better", yeah.

**Mat Ryer:** Oh, exactly. Yeah.

**Natalie Pistunovich:** But how often do you even reach the desktop? I can't imagine that if you have a computer at the reception of some hospital department... Like, how often do you really close everything and reach the desktop? You'll never see that, Mat. You're gonna have to come up with something better.

**Mat Ryer:** Too busy, yeah. It's a fair point.

**Juan Andrés Guerrero-Saade:** You think they just wouldn't notice...?

**Natalie Pistunovich:** Maybe Mat already did that, and nobody ever knew.

**Juan Andrés Guerrero-Saade:** Nobody noticed, yeah.

**Mat Ryer:** \[laughs\] That would be disappointing.

**Natalie Pistunovich:** I mean, a fun thing to do with hacking, if you want to play with that more, is go and do CTFs right?

**Juan Andrés Guerrero-Saade:** Right. Alright, getting away from the dark side of the house - there's a good community of red-teamers and pentesters who like Go...

**Natalie Pistunovich:** So for those who are new completely to this terminology, what are all those fancy words?

**Juan Andrés Guerrero-Saade:** We would be on the blue team side, right? We're on the defender side, we're just trying to make sure that bad things don't happen. There is the red team side, which is more folks that are emulating attackers; like, "We're going to get paid to come to one of these hospitals and hack them on purpose, within certain constrained boundaries, to say "Look, here are the weak spots of your network. These are the things that you should be fixing now." So it tends to be kind of opposing sides of the house, but you know, we're all friends. And there is actually a strong community of folks who like doing that sort of development and red teaming tools on Go.

**Natalie Pistunovich:** Hold on just one second... So red team are the people who do pentesting.

**Juan Andrés Guerrero-Saade:** yeah.

**Natalie Pistunovich:** And blue team is the people who go get hired to fix whatever the red team people pointed out.

**Juan Andrés Guerrero-Saade:** Sort of.

**Joakim Kennedy:** Call it the defenders.

**Juan Andrés Guerrero-Saade:** Yeah. Broadly speaking, defenders.

**Natalie Pistunovich:** And where does white hat/black hat fit in all of this.

**Juan Andrés Guerrero-Saade:** All of those would theoretically be white hats. You get some cross-sections, but if you're working towards improving the general defensive stance of a company, or an organization, the government, whatever, all of that technically puts you under white hat, right?

**Mat Ryer:** \[32:05\] Yeah, that would be me. I'd be one of those, just gentle "I've proven your wallpaper is up for grabs to anyone who wishes to do it. Advertisers could do it, if you wanna promote something, pop that in all the hospitals... Do you know what I mean?" So definitely, that would be the side I'm on. I just wanna get that out there, on the record.

**Natalie Pistunovich:** This can also make a really good security question - what is your wallpaper?

**Mat Ryer:** Yeah. Or what color hat have you gotten? That's what you meant, that's a good one, too. So what's CTF? What does CTF mean?

**Natalie Pistunovich:** Wait, we were talking about the red and the white hat. And the blue.

**Juan Andrés Guerrero-Saade:** All color hats.

**Natalie Pistunovich:** All the topics

**Juan Andrés Guerrero-Saade:** Yeah. I think for the most part we are just in the business of tracking and trying to defend against black hats... A black hat's standard definition would be folks that are getting access to networks they're not supposed to... Nowadays, doing that for effects that are obviously undesirable, if not straight up illegal. So there's the espionage side of the house, there's the sabotage side of the house... Obviously, ransomware falls well within a long-established tradition of cyber-crime. Before, they used to just want to get access to bank accounts, or steal credit card numbers. Nowadays instead you infect an entire enterprise network and then demand 30 million dollars to release it once again. All those folks fall under the black hat category... And then ideally, all your blue teamers, red teamers, pentesters, whatever, are squarely in the white hat side, though some folks dabble... Not me; I don't have those skills, sadly... But it can be a really interesting space.

**Mat Ryer:** You wouldn't probably say that though, even if you were, wouldn't you?

**Juan Andrés Guerrero-Saade:** I'm learning your reverse psychology as far as hacking goes... "Definitely not malware" is the name of my package.

**Mat Ryer:** Exactly, yeah. That'd work on me.

**Natalie Pistunovich:** Yes, exactly. For those who do want to play a little bit with hacking, there are those competitions of CTF, of Capturing the Flag. So what is the flag worth capturing?

**Joakim Kennedy:** There's different kinds. So you have sort of those Capture the Flags that would fall more into the red teaming, which usually involves maybe compromise a machine that has some vulnerability, or it can also be a binary that has a vulnerability, and your goal is to then actually write an exploit that actually will fetch a flag to prove that you managed to do that.

Then you also have, in this CTF, the type of "Crack me", which essentially is a binary that you have to reverse-engineer, to maybe get it to run properly.

**Natalie Pistunovich:** And it's probably not written in Go...

**Joakim Kennedy:** Well, usually with CTFs they usually would write them in -- sometimes we get very esoteric languages, because no one would know it, and it increases sort of like the challenge.

**Juan Andrés Guerrero-Saade:** Lime Nim?

**Joakim Kennedy:** Like Nim, yeah.

**Juan Andrés Guerrero-Saade:** This year -- so there's a pretty famous (well, famous within our space) reversing Capture the Flag called the Flareon challenge. Mandiant puts it on every year... And this year the last level - like, if you made it all the way through the competition, it was actually a Go binary. I didn't make it all the way; I had somebody be like "Hey, look at this thing. I'm trying to rebuild this binary for much smarter folks to try to finish the competition..." But yeah, Go is getting up there as far as what reversers are thinking of.

**Mat Ryer:** Yeah. Is that a good thing for us?

**Juan Andrés Guerrero-Saade:** I don't know...

**Joakim Kennedy:** I think DevCon last year had -- part of their qualifications, they had a Rust binary that was part of it. You get the mixture, you know? We'll see when we get a Nim one.

**Juan Andrés Guerrero-Saade:** Yeah. I think it's more speaking to the new paradigm of programming languages. It's a cross-section of two things. First of all, the virus writers - they're aging out. There's a new generation of folks coming along... So you don't have as many people that learned Assembly in school, and were cracking software in Eastern Europe back in the day, when they couldn't get their hands on legitimate software. That was the old school of VX-ers and virus writers.

\[36:17\] Now I think this new generation is kind of kicking up and starting to get more involved, and they are spending more time with Go, and Rust, and trying to learn these new paradigms... And it doesn't seem that many of them are going back to just learn hard Assembly or C. So it's inevitable that we're gonna see this increasingly popular and more accessible languages start to become more prevalent as far as malware goes.

**Mat Ryer:** Yeah, it's very interesting when you think of the different languages and the different capabilities that we have, and how that then turns into -- like, when you come to reverse-engineer it... I'm thinking defer statement, for example, in Go, where a function runs after this function exits. Obviously, there's something in the binary that's just normal-looking code, I guess, or Assembly, that describes that in some way. Can you look at a binary and tell where something's using defer, or there's concurrency, or goroutines?

**Joakim Kennedy:** It's a different return call. Is it "deferred return", I think is what it's called? It was a function call un runtime that just has the pointer to the function that it will call.

**Juan Andrés Guerrero-Saade:** It's a lot easier... I would say it's easier when you're familiar with the paradigm. If Go has been as accessible as it was to me - you know, working at Google for a short stint, one of my better friends there, a mentor there, Mike Weisbach a huge fan of Go... And I walk in at Google, and within the first two weeks he's just like "Here's the Go programming language book. Figure this out."

I learned to love it, and then when it came time to reverse it, things made sense that otherwise might not have... Like channels, and the defer statement, things like that. It was easy to map those concepts, because they were already familiar to me. The biggest, steepest challenge getting into reverse-engineering is usually training yourself to recognize what are C-level constructs by staring at Assembly. You're basically just trying to get familiar with how different compilers are going to represent some C concept that might not be that complicated. "Oh, it's a switch statement." But how does that look in Assembly? And sort of like learning to go back and forth. And it helps to have those concepts, which is why I say, maybe Rust will get easier for folks that understand Rust to come in and write some scripts and write some tools. I don't find Rust very familiar right now, so when I try to reverse something in Rust, it's like being lost. Like you don't have any coordinates. You have thousands of functions with no names, you have no types, sometimes the strings are mangled... You're just dropped in the middle of a large binary, with no map.

**Mat Ryer:** So when you think of those features - and by the way, it's very interesting, because I basically never look at the Assembly that gets generated... So I kind of only really think of those features at the level of the language itself. It's very interesting to imagine... Because of course, they feel quite magical in some ways. Channels, when they work right, they work brilliantly, and you sort of forget, I think, that it's just doing boring things underneath... But what about when new language features come out into Go? Like, Go 1.18 - we're gonna get generics. Is that gonna be a bit of a headache for you, when that lands?

**Juan Andrés Guerrero-Saade:** Probably... \[laughter\]

**Joakim Kennedy:** The biggest question is gonna be how many of the tooling will break... One of the problems we face is that we parse internal data structures that are not exported, so they change all the time. I can't remember how many times the internal map structure has changed... And when you're parsing that, you need to have the exact right structure that you read in the binary, otherwise your whole offset goes off afterwards. You go off and read somewhere else, and then you get lost. And it's not announced when things like that change...

**Mat Ryer:** \[40:15\] Right. This is like the interface to those things stays the same; the language is the same.

**Joakim Kennedy:** Yeah.

**Mat Ryer:** But of course, the compiler is free to really do whatever it needs to do. And this is one of the advantages really of using a language like Go, is that people are doing work under the hood, making changes that we don't have to even think about. But of course, you do have to think about those things.

**Joakim Kennedy:** Yeah.

**Mat Ryer:** But do you just not have the tooling tagged to each version of Go? Is that essentially what you end up with?

**Juan Andrés Guerrero-Saade:** You kind of can, and to some extent we do, just out of necessity, in the way things are built up. It's more that no one is calling us up and saying "Hey, do you remember that magic header that you were relying on to figure out where the pcln symbol table is?"

**Joakim Kennedy:** "We changed it."

**Juan Andrés Guerrero-Saade:** Yeah, "We changed it in 1.16." Which they did, right? "We changed it in 1.16. Good luck." You know, it's part of the very nature of reverse-engineering, that you're kind of stealing bits of information out of the air, and there's nothing to say that that won't change the next time around... And there's usually good reasons for it. If you figure out a more efficient way to get through a certain algorithm, of course you're gonna wanna implement that. Nobody's sitting there thinking "Well, how do we help the reverse engineers get their bearings again?" It is sort of living on a series of heuristics that can and will change over time, and it's really hard to maintain the tooling and make it able to continue to do what it does for different versions, but also recognize the new things, new conventions, their different variations across different compiler settings, and different target platforms, and so on.

**Joakim Kennedy:** One of my most, the bugs that sort of stumped me, The Go 1.7 beta 1, the data structure - I know this because it's only one version that was released that has this data structure in this format. This data structure for the methods -- the methods for types. There's a couple of fields that tell you the offset from where it would locate it... And in this version, the size of that int is a 32. I think it's an int 32. The beta 2 switches to a 16. And after that, it sort of hasn't changed. So there's one beta version where that size is completely different than any other version... And yes, I came across that in a malware that was compiled with the beta version, and it threw off the complete -- you know, it just ran through it.

**Mat Ryer:** Oh, wow. That is so interesting. Does the fact that Go is open source not help? I mean, could you not literally build some tool that looks at the code and alerts you if something's committed and something's changed there? Anything you could do there?

**Joakim Kennedy:** In theory, you could... In theory. But that's where you start to get into over-optimizing. We see a lot of Go malware now, but it's still not the majority of what we're dealing with. So you get into this situation where if Go were the ultimate malware-writing language, and we knew we were gonna see Go malware indefinitely in its majority, then it's absolutely worth it to maybe even go kick up a startup and just dedicate yourself to reverse-engineering Go. But these days, there's Russian threat actors that will just rewrite their code in a different language every other week, in the hopes of evading detection.

There's a group called Zebrocy that first they wrote their malware in Delphi, and then they ported it to Python, and they ported it to Go, they ported it to Rust, they ported it to Nim... They've done it in basically every other language. And for them it's just kind of a joke. You just wanna get your first-stage loader undetected. For us, if you sat and tried to build tooling for every possible variation, you're just never gonna get ahead of the curve.

**Mat Ryer:** Yeah. Some companies do that as well, by the way. They just keep rewriting things in different languages, and stuff. They're not trying to evade any -- apart from themselves... \[laughter\]

**Break:** \[44:26\]

**Natalie Pistunovich:** You mentioned that there's an increasing number of malware written in Go... Is there some special malware that you liked something that they did, because they utilized a special feature in Go, and did something interesting?

**Joakim Kennedy:** I've seen a lot of them... The majority of the stuff that I've seen - it's something they either designed to load shell code, so load another malware, or encrypt stuff. It's a lot of stuff that's targeting Linux and servers and stuff like that. It's used to drop miners, and stuff like that.

One of the more interesting ones I've seen - if you're familiar with the IPFS project, the Interplanetary File System... So it's a startup that tries to do the distributed internet. IPFS.io is the website. They've released their peer-to-peer library for Go, and found a botnet that used it. So the botnet sits on top of the IPFSbotnet, so to speak; their peer-to-peer network. And mainly, they were using the invention to sell a proxy service. But I think the interesting part there is layering a botnet on top of a legitimate peer-to-peer network.

**Mat Ryer:** \[48:16\] Hm. I thought IPFS was Internet Protocol File System. But you're right, it's Interplanetary -- how many planets are they on at the moment? \[laughter\]

**Juan Andrés Guerrero-Saade:** I think it's interesting to raelize that the standard proficiency of Go developers probably listening to this podcast is pound for pound much higher than what we tend to see for Go malware devs. Like I said, it's still a new paradigm. In some cases you get the sense that the authors are just not that familiar with Go yet. Like, they're trying... Especially you know the Zebrocy side, they're trying to master a bunch of different languages, and obviously, they never do. But you also get interesting situations, like - a lot of ransomware is trying to embrace Go, because concurrency is a fantastic feature for speeding up encrypting a bunch of files.

**Joakim Kennedy:** And also the encryption libraries on Git. And easy to use.

**Juan Andrés Guerrero-Saade:** Right. So you've got good, strong encryption libraries; you're not going to accidentally -- you're not gonna roll your own crypto and then somebody can recover the keys, or whatever... And concurrency is relatively easy. So you see them starting to play with channels, and you see them trying to kind of build these lists on the fly, and try to do all this quick crypto... But then they'll do other stupid things, like they interface with Windows using OS-specific libraries off of GitHub... So it's like, "Well, you've spent all this effort and you went for an easy to cross-compile language, and now you've made it impossible to cross-compile. And you're like, "Okay, thankfully you're not that good", but there's kind of a missed opportunity sense to it, right? Like, if you were a slightly better dev, your revenue stream would be much more expanded. \[laughter\]

**Mat Ryer:** It's so difficult... How do you not antagonize people by saying things like this even, or having these conversations?

**Juan Andrés Guerrero-Saade:** Oh, we do. \[laughter\] InfoSec Twitter is just a cesspool of hot takes and insults, people sort of going at each other... It's a great community in some ways, and in others it can be very spiteful.

**Mat Ryer:** It doesn't sound like Twitter...

**Juan Andrés Guerrero-Saade:** Right? It's modern community.

**Mat Ryer:** Yeah. Modern community with anonymous accounts. There you go.

**Juan Andrés Guerrero-Saade:** Yeah. Civility.

**Mat Ryer:** And your name comes up JagAss on this...

**Juan Andrés Guerrero-Saade:** Right.

**Mat Ryer:** \[laughs\] But you've been so polite.

**Juan Andrés Guerrero-Saade:** I'm even being helpful with that, right? I don't want you to have to struggle through my two double-barrel names...

**Mat Ryer:** Oh, I see. Thank you so much. I wish Natalie Pistunovich had the same sort of --

**Natalie Pistunovich:** We might have talked about this, Mat, when we started without you.

**Mat Ryer:** Oh. Well, that was before the show, wasn't it?

**Natalie Pistunovich:** Yes.

**Mat Ryer:** Okay. Say it again then. No...?

**Juan Andrés Guerrero-Saade:** Sorry, are you talking about my name?

**Mat Ryer:** Oh, I am interested now you've mentioned what your name is... But if you'd rather not, that's totally fine.

**Juan Andrés Guerrero-Saade:** No, it's fine. My name is Juan Andrés Guerrero-Saade. I just figured it's a lot easier for folks to just --

**Mat Ryer:** That is amazing, by the way. Can you just do it one more time?

**Juan Andrés Guerrero-Saade:** Juan Andrés... Guerrero... Saade. Again

**Mat Ryer:** Amazing.

**Juan Andrés Guerrero-Saade:** Again, JAGS is fine. Juan is fine. No one's got the time for it.

**Mat Ryer:** Yeah. I've got my new password sorted. Anyway...

**Juan Andrés Guerrero-Saade:** There you go. Right. \[laughter\]

**Mat Ryer:** No one's gonna get that.

**Natalie Pistunovich:** I wouldn't even try. I think I would somehow mispronounce something. That is such an interesting conversation... That's like all the things that you always look at when you think of Go, like cross-compilation... "Oh, wonderful", and then suddenly, when you said that this is so useful for hackers, that was completely mind-blowing for me.

**Joakim Kennedy:** You see it a lot. I mean, there's -- especially when you're targeting Unix systems... If you've found one that's for x86, you're guaranteed to almost find ARM and MIPS and all the other ones that you eventually do.

**Juan Andrés Guerrero-Saade:** Yeah, I think the big test is are you gonna see a lot of cgo in it? And if not, then chances are you're gonna be comfortable sort of porting back and forth.

**Joakim Kennedy:** \[52:12\] Yeah.

**Juan Andrés Guerrero-Saade:** I will say this, and I try not to talk about this publicly too much, but the malware dev community in Go is not that good, but the red teaming community is. So it's kind of surprising that the actual bad guys haven't just been picking up the tooling that the pretend bad guys are building. Those dudes actually understand Go fairly well, they're doing quite a bit of trickery that, you know -- I don't wanna give anybody ideas, but they're developing good stuff. But the actual black hats haven't taken the time to kind of study the ecosystem and see what's out there... To our benefit. It's not like we really want them to get that much better.

**Mat Ryer:** Yeah. I don't know how many of our audience falls into that description. I can't imagine people like hackers -- I can't imagine a cool hacker person popping a podcast on... Can you? \[laughs\] Maybe they do. Well, you're welcome to Go Time...

**Juan Andrés Guerrero-Saade:** You never know. That's the other thing - are these full-time hackers, or are we talking about folks moonlighting? Every once in a while you get some interesting tidbit where it's like "This is a Kubernetes dev, someone who has a full-on real dev job, and then they just so happen to decide to try something..." I think it's the psychology of white collar crime. You think you can get away with things because you're clever and it doesn't feel like real crime... And it happens. It happens sometimes that folks think that they dip their toe in and it's not really gonna come back to fight them... And sometimes it doesn't, and sometimes it does.

**Joakim Kennedy:** Sometimes you leave breadcrumbs and you find their LinkedIn profile and you go "Great."

**Juan Andrés Guerrero-Saade:** "Hi, friend." \[laughter\]

**Natalie Pistunovich:** Interesting.

**Juan Andrés Guerrero-Saade:** It happens...

**Mat Ryer:** Yup. We'll post a link to those in the show notes. \[laughter\]

**Juan Andrés Guerrero-Saade:** One bit of advice, if you decide to go down the malware route with Go - if you have great coding practices, and you are using Git to write your malware incrementally with nice version control, maybe don't leave your name in the -- like, maybe don't have it all built under your actual name in your own GitHub repo. It's amazing how much people don't realize that standard, strong coding practices also in many ways violate that principle of trying to anonymize this thing. So you'll get some really clever malware, but you're like "Man, it's the same handle for this GitHub repo" as the account you've been using for the past ten years... I'm reading like your live journal, trying to understand all your feelings, because I ran into one of your samples.

**Mat Ryer:** Oh, wow...

**Joakim Kennedy:** One of my favorite finds is the path where the project was located was /users/first-name-of-the-person/go-project/source/keybase/keybase-team. Just one-lining out everything.

**Mat Ryer:** Wow...

**Juan Andrés Guerrero-Saade:** Yeah... It's nice when they're organized.

**Joakim Kennedy:** Yes. \[laughter\] Good structure of the source code and things like that, but... You may not wanna keep that in the binary.

**Mat Ryer:** Are we helping them, really? Do you think by having these conversations in public it does help?

**Joakim Kennedy:** It's pretty obvious -- those kinds of things get published... I mean...

**Natalie Pistunovich:** Or basically somebody on Reddit already said that.

**Juan Andrés Guerrero-Saade:** \[55:33\] The info is out there, and it will be out there, and folks are gonna figure stuff out... I'll be honest with you, I'm not that stressed about two bit criminals figuring out how to better use Go... I am very curious for when we're going to see the nation-state-sponsored attackers start to pick up and productive Go and Rust for malware properly. Because C++ is usually what we see, let's say with U.S. or five eyes malware the best stuff you can find tends to be C++, very highly quality-assured code, you can tell that there's a certain amount of infrastructure and tooling that's been built around producing these things...

And what you're dealing with is layers upon layers of really good engineering that have gone into producing implants that are hard to track, that might do a lot of those relocations, that are having custom packers, that have encrypted payloads... All this stuff that's going into it. And that's all productized in a way that's sort of repeatable and avoids mistakes that we're talking about. So far that's not the malware that we're seeing. It's still kind of the early days of people going "Oh, how do we play with this?" And maybe it's out there. Maybe we just haven't found it yet. But I'm kind of on the lookout to say "When are we gonna see some government-quality Raytheon wrote this kind of malware?" versus somebody that's just sort of moonlighting.

**Natalie Pistunovich:** This opened so many questions... Do you expect a next episode about AI-generated malware...?

**Juan Andrés Guerrero-Saade:** Right...

**Joakim Kennedy:** There's been a pick-up of nation-states using Go, especially in the last year and a half. Prior to that it was really rare.

**Juan Andrés Guerrero-Saade:** Yeah.

**Mat Ryer:** Do you know which states they are?

**Juan Andrés Guerrero-Saade:** Definitely the Russians and the Chinese. There's a proliferation of groups for both countries, and our attribution is always take it with a grain of salt... So something that happened - without getting too inside baseball and threat intelligence, but something that happened over the past couple of years is, particularly on the Russian side, there was so much attention paid to these different Russian state-sponsored groups, particularly with the summer of election hacks in 2016 and everything that followed from there... They got so much attention that these groups kind of were forced to do a lot of retooling. Like, major, major retooling and reorganizing. And they dumped most of the toolkits that we were used to them using, a lot of which were written in C and C++.

And interestingly, now we're seeing Russian state sponsored groups who like Go, and who actually rely on Kubernetes. You see malware that now includes gRPC, and you're like "Oh my God, you guys are getting a little more professional with this." So it's interesting. It's actually cool at the same time. It's daunting... The kind of resources that start to go into that are quite daunting.

**Mat Ryer:** Yeah. Are there any written in JavaScript?

**Juan Andrés Guerrero-Saade:** Yeah, of course. A lot of the malware on the web, the crypto miners, and even landing pages - JavaScript is really useful. When you think about an attack chain, if somebody's gonna use an exploit or they're using something very specialized, they actually really need to know a lot about you before they can use that. Like, I need to know what Mat's computer is running, what browser, what sort of software stack I'm dealing with before I can try and kind of fancy exploitation. And JavaScript tends to be the go-to, first stage, like "Let's land here. Maybe we don't even serve you anything, but we take a moment to profile your system", and the next step will be giving you something very specialized. So JavaScript tends to fuel a lot of the early stages of malware ops.

**Mat Ryer:** Yeah. I remember the Love Bug, which is probably one of my favorites... It was VBScript.

**Joakim Kennedy:** Yeah. Microsoft had -- was it JScript? ...which is kind of a flavor of JavaScript. So you have malware written in that.

**Mat Ryer:** Yeah, but that runs on the system properly, doesn't it? That's not just in the browser, that one.

**Joakim Kennedy:** Yeah.

**Mat Ryer:** VBScript - the Love Bug was VBScript, I remember. This was where it would use the Outlook automation APIs, essentially, to email itself to all of your contacts... I think that's all it was doing, actually. And then it sends an email saying "Oh, I love you. Check out this file", and it was iloveyou.vb, or something, which people would happily just double-click, and it would then send it -- you know, it was literally this virus...

**Joakim Kennedy:** I mean, you can... If you really wanna write a malware in JavaScript, you can just package it with Node.js; it has a bunch of packages that will spit out a single binary and you can send it... But if you're okay with the user downloading a 20 to 40 MB file and run that... You know, it works. You get V8, and everything else.

**Natalie Pistunovich:** \[01:00:18.25\] Mind-blowing. This is such a fascinating episode. Thank you for sharing all the insights with the community, and hopefully it's inspiring only the right people.

**Juan Andrés Guerrero-Saade:** The other side of this is gophers are, by and large, great devs, and our space - the larger InfoSec community could really use much better engineers getting involved. Reversers and threat-hunters - we have a certain set of skills, but we don't usually come from strong engineering backgrounds. Some of us do, but some of us don't, myself included. We come from the international relations space, philosophy, physics, whatever; if you just have a mind for solving puzzles, you kind of get into it and learn to reverse-engineer... And it tends to mean that a lot of our tooling is just cobbled together Python scripts.

So if this serves to do anything, hopefully not inspire more malware authors, but rather to say "If more Go developers, robust Go developers want to get into the security space, there's a lot of opportunity for startups", a lot of opportunity for just coming and revolutionizing a whole software stack that is horribly aged, and in disrepair, and that a lot of the well-being of the internet and the general ecosystem sort of relies on. So it would be great to get more gophers coming our way, instead of working on ads, or whatever it is Google has been working on.

**Mat Ryer:** And where should they go to if they are interested?

**Juan Andrés Guerrero-Saade:** So a couple different places... If you're particularly trying to get into the threat intel side of the house, I know Ninja Jobs is a good place to try to find jobs in the security space in particular. Honestly, if you have the right mind for it, you might really just wanna kick off a startup... Not to make it sound so simple, but a lot of the tooling that we rely on is just old-school. It's way too old school.

I think security is the land of opportunity. There's a ton of investment and a ton of need, and none of us really seem to know what the solution is... So even if you make incremental improvements for things that people really need, like understanding DNS, even -- you know, nobody wants to touch operational transforms... Like, Google Drive, Google Docs might be the only operational transforms project anyone ever wants to take on, and never again... But that means we have no collaborative platforms to use, and things like that.

**Mat Ryer:** Would open source work for that kind of tooling? Would that be okay, or would that give the hackers an advantage?

**Juan Andrés Guerrero-Saade:** I think it's okay. A lot of security detection relies on Osquery, for example, and that's open source... You've got a lot of open source stuff that goes into our stack, and if anything, you have a healthy services industry that's risen around it. Osquery is free, but a lot of people will pay other companies upticks and so on to set that stack up for them and maintain it. I'm speaking more to the business side of the house, but it's just to say - you know, there's incentives, like "Come our way. Come work with us."

**Mat Ryer:** Yeah, definitely.

**Natalie Pistunovich:** Well, that sounds like a popular opinion...

**Juan Andrés Guerrero-Saade:** \[laughs\]

**Joakim Kennedy:** It may seem like magic, some of this stuff, but a lot of it is just fundamentals of computer science, in the end. Think back, if you took computer science in school, and - JAGS was talking about DNS, and stuff like that... I've looked at a lot of RFCs in my days. And I'm not a developer, but it's all about looking and understanding how protocols work. There's a lot of stuff that's shared between developers, and what we do.

**Natalie Pistunovich:** Great tips. Thank you for this new perspective and for like a sneak peek into this wonderful industry, and for also the tips for those who do want to jump into the water. I guess the last question to you would be "Are you ready for Unpopular Opinions?"

**Juan Andrés Guerrero-Saade:** \[laughs\] Sure.

**Jingle:** \[01:04:16.21\] to \[01:04:32.23\]

**Natalie Pistunovich:** So I heard you have two.

**Juan Andrés Guerrero-Saade:** Yeah, I'm trying to pick one's worse; like, which one is gonna be more incendiary to this crowd. \[laughter\]

**Mat Ryer:** We'll test them both... So please, feel free.

**Juan Andrés Guerrero-Saade:** Particularly this crowd, I actually think that software developers might have some of the worst security posture of all internet users.

**Mat Ryer:** Really...?!

**Juan Andrés Guerrero-Saade:** Nobody likes that idea, particularly any of the really persnickety Linux devs, who think they've got their stuff locked down... But none of them run any kind of endpoint security, nobody believes in any security solutions working on that space... And we tend to use a lot of shoddy package managers that just shove code into our environments all day long, but isn't audited, and nobody knows what's going in there. There's a lot of name typos squatting for packages... So you know, Brew, and Npm, and Pip - all these things are actually quite scary mechanisms that we all rely on, that are being targeted, and we don't really realize that the substrate of what software developers tend to rely on is actually quite porous.

**Mat Ryer:** That's so interesting, because you genuinely would not think that. You'd think most software developers at least have an idea of security, and they'll use 1Password, and things like this... But yeah, I mean... That's very interesting.

**Juan Andrés Guerrero-Saade:** Sorry... \[laughter\] Sorry, guys.

**Joakim Kennedy:** That one hit deep. \[laughter\]

**Mat Ryer:** Yeah... It burns! Which would you say are better though, software developers or grandmothers? If you had to pick, what would you do?

**Juan Andrés Guerrero-Saade:** It just depends on the effects, right? Like, it's easy to look down on the grandmas, but --

**Mat Ryer:** Because they're little?

**Juan Andrés Guerrero-Saade:** No, because it's like -- you know, you're talking about a different generation, and they're not necessarily the most savvy, and it might be easier to kind of scam these folks, and a lot of that happens. But I think that the difference there is they tend to be very casual internet users. So at most, what you're defending is a few passwords, and maybe some pictures of your family, and things that are emotionally impactful, but that aren't that important in the grand scheme of things. Whereas software devs - like, sure, it might be easier to scam a software dev or social-engineer them, but if you do get on their box, they have SSH keys for all these different services, and they've got full privileges for this whole source code repo that an entire company relies on... So the impact tends to be drastically different.

**Mat Ryer:** Hm... I'm pleased I said that silly comment now. That was very interesting.

**Juan Andrés Guerrero-Saade:** \[laughs\] Gotta defend the grandmothers here, man...

**Mat Ryer:** Yeah. Note to self - say more silly things. Joakim, did you have an unpopular opinion?

**Joakim Kennedy:** Yeah... This is gonna hit a little bit on the community that's running Slack...

**Mat Ryer:** Get 'em!

**Joakim Kennedy:** Yeah... I don't think that an open source community should be hanging in a commercial product. Instead, they should embrace the open source projects that are around, that are similar.

**Mat Ryer:** That's a very good point. Do you wanna elaborate a bit more.

**Joakim Kennedy:** Do I need to?

**Mat Ryer:** Because it's free to use, right?

**Joakim Kennedy:** Yes, it's free to use, but you do end up in that lock-in kind of scenario that you are dependent on a commercial entity.

**Mat Ryer:** \[01:08:00.27\] So I'll just interrupt you there... We'll be back after these messages. Sorry, we needed that break. What were you saying? \[laughter\]

**Joakim Kennedy:** And especially now, when there's some really good open source projects trying to break that apart... Matrix is a really nice thing, in the sense that it is decentralized; they can go away, and it doesn't take the community with it.

**Mat Ryer:** Yeah, but the problem with Matrix is you have to have that thing installed in your skull, to plug it in... And a lot of people are against that. \[laughter\] I had it done very early, when it was still Floppy disks... I was a very early adopter, which I regret now, but... At the time it was --

**Joakim Kennedy:** But it does teach you Kung Fu pretty quickly though...

**Mat Ryer:** Yeah, well -- that comes on eight Floppy disks, so it does take a bit of time... And it's quite difficult to reach around to do it. You need a friend to help; Morpheus, or whoever... Trinity... But no, that is a very good point, actually... Yeah, that one will be very interesting to find out if that is unpopular, actually.

We test these, of course, on Twitter - another commercial platform - by doing a Twitter poll and asking people whether these are indeed unpopular or not, so we will find out.

**Joakim Kennedy:** I guess that community just isn't quite so cypherpunk as before, right? Like, if you think about most common software development environments - you are saving all your stuff on a Microsoft-owned product, you're looking for your new job on a Microsoft-owned product, you're communicating about it on Slack, and putting all your stuff up in like Google Docs... You're basically trusting the biggest corporations on Earth to fuel and support your newfound endeavors. It's just a very different community than what it might have been in like the '90s...

**Mat Ryer:** Yeah, that is very true. Did you have another unpopular opinion though? You mentioned you had two.

**Joakim Kennedy:** I do. I think it's more incendiary to especially the European audiences than it is to the Go community in particular.

**Mat Ryer:** Is it just gonna be like "America is great. America is the best."

**Joakim Kennedy:** Woooh!

**Mat Ryer:** U.S.A! That's your unpopular opinion...

**Joakim Kennedy:** Full jingoism. U.S.A. number one! No, it's actually something that we're quite touchy about in the security space, which is GDPR... So I don't know how familiar folks are with GDPR; imagine anybody who's anybody, who's handling any kind of PII is having a sort of nightmare go with GDPR, but what's likely to be a very unpopular opinion is that GDPR is just feel-good security posturing. It has next to no genuine value as it stands, other than to make people feel warm and fuzzy. It's a nightmare for folks to maintain, it's impossible to be compliant, and on the security space it's actually made it really hard to maintain really important telemetry that we tend to rely on. So yeah, I'm very opinionated about GDPR.

**Mat Ryer:** Oh, wow. Yeah.

**Juan Andrés Guerrero-Saade:** You're just sad that you lost the whois information. \[laughs\]

**Joakim Kennedy:** I am upset that I lost whois information. It's like, the whole argument was like, "Oh, we're gonna save people from spam." It's like, they're not saving us from spam at all, and now I can't tell who owns this server.

**Mat Ryer:** Yeah...

**Natalie Pistunovich:** I think this is gonna win... This is my bet for unpopular opinion for the next Twitter poll.

**Mat Ryer:** It manifests by every website asking you to accept the cookies.

**Joakim Kennedy:** Over and over and over again.

**Mat Ryer:** There's another button, which is you can go and configure it, and then you enter this big preference --

**Natalie Pistunovich:** And then it loads, and loads, and loads...

**Mat Ryer:** Yeah. Or enormous settings, and... Yeah, it's just -- you can't even tell the browser whether you want cookies or not, and then it just answers for you. You literally have to--

**Joakim Kennedy:** "I'll be nice..."

**Mat Ryer:** ...tap the button every time... And basically, people just go "Yeah, accept cookies", just to get past this annoying screen.

**Natalie Pistunovich:** Well, that was fascinating, that was very interesting, and I hope all the people who joined learned new things and got inspired. I'm going to say, first of all, thank you very much JAGS and Joakim for joining, and thanks Mat for co-hosting... And definitely see you all in an episode about AI-generated malware.

**Joakim Kennedy:** AI-generated malware...

**Juan Andrés Guerrero-Saade:** Someday. Thank you both.
