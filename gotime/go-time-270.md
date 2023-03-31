**Natalie Pistunovich:** So today we have a very exciting episode. I am personally excited about that, I think you can hear that. We will be talking more about hacking with Go, but this one will be with an angle of AI. And yes, today is March 14th, the day we're recording this. GPT-4 was just announced a couple of hours ago, so this is what we were talking about at the soundcheck before we started. This and breakfast.

I am joined by Johnny. Hi, Johnny. How are you doing?

**Johnny Boursiquot:** I am doing well, good to be here.

**Natalie Pistunovich:** Always nice to co-host together.

**Johnny Boursiquot:** It is indeed.

**Natalie Pistunovich:** And we have two awesome guests that this is their appearance number 7755 in our show, and we're always happy that you're back to tell us more interesting things about hacking - Ivan and Jax. Would you gentlemen like to introduce yourselves?

**Ivan Kwiatkowski:** Alright, so hello, everyone. It's nice to be back on the podcast. My name is Ivan Kwiatkowski and I'm a French cybersecurity researcher, and I work for Kaspersky.

**Juan Andrés Guerrero-Saade:** My name is Juan Andrés Guerrero-Saade, which is why Jax is fine... And I'm senior director at Sentinel Labs.

**Natalie Pistunovich:** So you both are hackers who are not using Go in your everyday life, but you have come across Go in your cybersecurity adventures, and you have interesting things to tell us about that. Maybe we will start with the latest malware that was written in Go.

**Juan Andrés Guerrero-Saade:** There's quite a bit of it.

**Natalie Pistunovich:** Yes. Please tell us.

**Juan Andrés Guerrero-Saade:** Honestly, I didn't think it would be this widely adopted at first for malware. Okay, so we've gotta kind of split it up a little bit. A lot of malware devs, in my opinion, are in two categories. You either have the old-school VX-ers, like we used to call them, that are using C, maybe C++, and the more you go higher-levels of nation-state sponsored guys, you're very likely to deal with guys and gals that are writing with C++, and these very well-established frameworks, and you can imagine, a defense contractor was involved with building, there's quality insurance to it etc. Or you get people who are just using compiled Python, or some Visual Basic AutoIt, really kind of garbage attempts at just sort of stealing things quickly... And then now we see Go and Rust picking up, mostly Go, in my opinion, which I'm actually grateful that it's not as much Rust... But I don't think a lot of you would be impressed with the caliber of stuff that you find in the wild. There's definitely a lot of Red Team tooling, which thankfully is not being used quite as much in the wild yet... But it's out there, right? So Go is becoming kind of like an essential, desirable platform for malware developers, I suppose.

**Natalie Pistunovich:** Remind us what does Red Team mean...

**Juan Andrés Guerrero-Saade:** Oh, my God... Yeah, sorry, I'm totally out of my element here. So normally we tend to define folks in the cybersecurity space under a few different-colored hats, but Red Teams are usually the penetration tests, the people doing "offensive" operations, but in a controlled environment. So you might hire them for your Fortune 500 company, they come in, they break in, they hack into it just for the sake of showing you "Look, there's all these vulnerabilities, everything is set up really poorly. This is how you fail."

And then you have the Blue Teamers who might be doing network defense, and -- I think we vaguely fit into the Blue Team side of things, but more because we're, I guess, doing AV signatures, and reverse-engineering, and hunting for malware... But I guess Ivan and I are kind of like weird ducks in that space...

**Ivan Kwiatkowski:** Yeah, I think probably they call that Purple Team, in a way. They are the guys that look at what the blue and red teams are doing together, they just watch the traffic and try to, I don't know, maybe count points, but also write signatures to try to detect everything that was taking place, and make sure that they don't miss it in the future. So it's kind of an observer role which I think we kind of fit in.

**Juan Andrés Guerrero-Saade:** Yeah. It keeps things fun. It also means you kind of get to judge everyone else's use of Go, which is, I think, nicer than having to write it ourselves in some ways... I actually love Go, but I won't pretend to be a competent developer. Go makes me feel a little bit better about what I output. But I'm a genius compared to some of the malware that you see floating out in Go. Especially, a lot of the Chinese groups have been picking up Go, or like during the invasion in Ukraine we saw a fake ransomware called PartyTicket that was written in Go...

**Natalie Pistunovich:** Hey, what's a fake ransomware?

**Juan Andrés Guerrero-Saade:** Well, so during the invasion in Ukraine there were a ton of pieces of wiper malware that were used, so just like --

**Natalie Pistunovich:** What's a viper malware?

**Juan Andrés Guerrero-Saade:** A wiper - so like you get on a computer and you just delete everything.

**Johnny Boursiquot:** What's a computer...? \[laughter\]

**Juan Andrés Guerrero-Saade:** It just wipes the whole system. Alright... Am on the wrong podcast. No, so -- that's what a wiper is supposed to do; it just gets on there and it wipes everything, and it deletes everything, and then the computer stops working. It's stupid when it's one computer, it's interesting when you get 3,000 machines at like the Ministry of Foreign Affairs that suddenly all go kaput at the same time.

\[06:06\] As part of the distractions of what was going on at that time they dropped a piece - what I said was a fake ransomware - because they clearly never tested it. Like, it clearly wasn't meant to be ransomware. They were never going to actually unlock anybody's device. It was just a distraction. And I say that because they committed the obvious concurrency mistake that I think every newb at Go has done at some point, where you just don't manage your threads the right way, and you see -- this Go ransomware just nukes the computer within four minutes, because there's just so many runaway threads, and...

**Johnny Boursiquot:** Too much. \[laughs\]

**Juan Andrés Guerrero-Saade:** Yeah. It doesn't even get to the point where it'll encrypt anything, it's just like a local denial of service attack. So it's not really ransomware, it just dresses up like one.

**Natalie Pistunovich:** Self-DDoS.

**Johnny Boursiquot:** \[unintelligible 00:07:00.06\]

**Juan Andrés Guerrero-Saade:** Yeah.

**Ivan Kwiatkowski:** I actually would tend to second that observation, in the sense that I've rarely seen actual good samples of Golang malware. The kind of stuff that we tend to see are existing groups that have their established malware \[unintelligible 00:07:17.11\] that they are still using to this day, but what they wanna do is have droppers or first-stage type malware that they can throw away on many computers, and then if that machine is interesting, then they will drag their actual piece of important malware there.

But those first-stage malware, those droppers as we call them, they tend to be kind of throwable. They write one of them in a week, in Go language, they write another one later in Rust, and then when they arrive on a machine, they start typing commands, they try to deploy something. If it works, great. If it doesn't work, then -- because maybe the antivirus is blocking the attempt, and they just pull another one from the shelf, and so on. So they try to create many, many different ones, as many as they can and in as many different languages as they can, and they do not master any single one of those languages. They just read some -- they piece together maybe some Stack Overflow questions until they get something working, and at the end of the day they add some piece of software that does something, but if you were to look at it from an engineering standpoint, probably you would be appalled.

**Juan Andrés Guerrero-Saade:** Yeah. Well, now they have GPT-4, right? So... No, I don't wanna say that, because I'm gonna fall into the same ambulance chasing that's been happening in cybersecurity, where everyone's just like "GPT-4 is gonna kill all of us." Every attacked now uses GPT-4, and... There's plenty of open source malware. They don't need GPT-4 at all. If anything, they're being lazy.

**Ivan Kwiatkowski:** Yeah. And also, where was this outrage when GitHub Copilot was released? Because it's probably a much more efficient way of writing software securely than just asking ChatGPT or whatever OpenAI API to output code page by page... Right?

**Juan Andrés Guerrero-Saade:** I feel seen right now... \[laughter\] I feel very seen.

**Johnny Boursiquot:** You asked ChatGPT to write your concurrency Go for you?

**Juan Andrés Guerrero-Saade:** So GPT-4 unlocked - what, 20 minutes before we got on this call? And I'm just like asking it a bunch of rapid-fire questions just to see "Are you doing better?" Like, it did some impressive things... But it does allow for peak laziness. It's just like "Okay, write me a deployment script for an entire Elasticsearch cluster in Bash. Go." And you're just like "I mean, I hope it works... We'll see if it works..." But on another level, as far as like lazy DevOps, there's something there.

**Natalie Pistunovich:** Well, the next thing in that set of actions is \[unintelligible 00:09:40.04\] "What's missing here? What's the pitfall? Improve that."

**Ivan Kwiatkowski:** Just ask it "Does your script work?" Maybe it knows... \[laughter\]

**Natalie Pistunovich:** "How can you improve that?" I mean, it does. It will give you ideas.

**Juan Andrés Guerrero-Saade:** It will. I think the thing that's missing - and I have no idea what OpenAI's plans are for the future, but the obvious thing that's missing is just having some kind of like a repl where it's writing the code, running it, writing the code... Sort of like decoding. Because if you just throw errors at it, you just copy-paste your errors, it'll just keep fixing the thing. As long as you keep it out of hallucination mode...

**Johnny Boursiquot:** \[10:16\] \[laughs\]

**Juan Andrés Guerrero-Saade:** ...which - there's no warning; it doesn't turn red. But when it starts telling you fake APIs, and then call functions that don't exist, packages that were never written... As long as you're out of that Uncanny Valley, you're okay; it's gonna keep fixing itself. So you need some kind of like langchain implementation that's just writing the code, and running it, and then debugging it as it goes...

**Natalie Pistunovich:** So when you say that the malware code that was going around is bad in concurrency and everything, I need to know - does it have any tests?

**Juan Andrés Guerrero-Saade:** Oh. Well, we wouldn't know, because we're getting the compiled, deployed version.

**Johnny Boursiquot:** Right. Those don't have tests in them, yeah.

**Juan Andrés Guerrero-Saade:** But I'm just gonna guess that there were no tests written for it. That said, I feel like we shouldn't be too harsh on developers that don't write tests, but that maybe -- I'm not trying to drawn any sympathy for our Russian war-time malicious operators, but rather for myself.

**Ivan Kwiatkowski:** I mean, if you mean unit tests, I'm going to go out on a limb and tell you that probably very likely not. If you mean testing return values and making sure that error is nil - sometimes you would get that, yes.

**Juan Andrés Guerrero-Saade:** I think you've had better luck, Ivan, because you did SUNBURST, and sort of like the interesting SolarWinds attack, that some folks may have heard about...

**Ivan Kwiatkowski:** Yes.

**Juan Andrés Guerrero-Saade:** That supply chain attack included malware. Ivan actually analyzed that one. And so I feel like that's one where you go "Okay, this is slightly better written." It definitely works, compared to some of the other things that you analyze.

**Ivan Kwiatkowski:** It does. Yeah, this one - it was actually my first experience with Go, so at the time I had no idea whether or not it was proper Go language... Although, experiencing Go, it felt like the language was kind of trying to prevent you from not using it properly as much as it could. But in retrospect - yeah, it does feel like Sun Shuttle was kind of a good student there. They were really actually testing for all the return values when they thought it was needed. Overall, the structure seemed to make a lot of sense... So yeah, I suppose it was on the higher end of Golang malware.

**Juan Andrés Guerrero-Saade:** Trying to put myself in the shoes of all these experienced Go devs who listen to this show... We must sound so silly right now. Honestly, we're dealing with a very different crowd. I think Ivan described it really well, when it's like, okay, you have certain well-established groups that want new components, mostly for the first stage. So they want a piece of malware whose sole role is to land on your computer, assess where it is, and then deploy more special malware. So for that, you can be super-lazy, right? You're just writing a loader in Go, you write a loader in Rust, and then you just see what's gonna run without the antivirus really going into a frenzy... And then you don't care, right? You deploy your .NET stuff, or whatever it is that you've already been sitting on...

I think it's few teams that are really adopting Go from the perspective of established, native Go devs... And that might actually just reflect some of like the government hiring cycles at some of the teams that we're dealing with, right? Like, how many brand-new grads that have done Go in university are now working in like the Chinese Ministry of State Security yet, right? And same with the Russians, and so on. There's almost like a generational thing that we're -- I'm not gonna say we're waiting on, but that I expect as having some effect.

Now we see Russian ops picking up with like Kubernetes and stuff, and you're like "Okay, those are not the same old dudes that I've been dealing with for the past 15 years." \[laughter\]

**Ivan Kwiatkowski:** \[13:57\] I'll go even further there... I would say that when we see those new droppers that \[unintelligible 00:14:02.04\] every other week, it really feels like this is some sort of interval hazing for all the interns that are coming in. They arrive, they don't have the clearance or ability to work on the serious stuff yet, so probably they are tasked with writing some quick dropper in whatever language they'd been learning recently, and this is what they do. And then maybe in six months, or when they are finally hired or so on, then they move to other stuff. But it really feels like this is the kind of, I would say, internal circuit that they are going through. Like, for a new hire, \[unintelligible 00:14:34.11\] then maybe if you did a good job, you can go and handle their actual operations.

**Juan Andrés Guerrero-Saade:** They're being hazed by Go.

**Ivan Kwiatkowski:** Exactly. Or Rust. Or by Scala, actually.

**Johnny Boursiquot:** I'm finding the way y'all are talking about sort of state-sponsored security breaches, and malware, and all this... It's like a regular job, when you go to join a company, if you're a junior, straight out of school, you don't get access to the critical path stuff... Maybe you get put on some bug duty, or whatever it is, but there's a process you go through to get promoted into working with better stuff... But when we think of hackers, we think some kid in their basement, with Cheetos all over their T-shirts...

**Juan Andrés Guerrero-Saade:** Or the 400-pound hacker from like the Trump era...

**Johnny Boursiquot:** Right, yeah. This stereotypical stuff you see in the movies from the old days. But this is completely not what it is. This is like formalized -- like a job-job.

**Juan Andrés Guerrero-Saade:** It depends on who you're dealing with, right? I think Ivan and I, in a way -- we're not tooting our own horns, it's rather we focus on a very specific part of cybersecurity. You're analyzing what we call APTs, Advanced Persistent Threats, which is just a euphemism for "This is probably a government-sponsored set of hackers", because it's hard for us to make the attribution past like a little cluster of malware to saying "Okay, this is this intelligence agency", or whatever. But you get to see everything.

This year we've had hacktivists become a big thing again... And with those, you can have the basement-dweller children that are in Anonymous, and they just wanna DDoS a website, all the way to - you know, you have some hardcore black hat that nobody's seen in 20 years, who suddenly decides to hack a hacking team, or hack some big company and just dump all... Like the Panama papers, for example - random hacker that nobody knows, hacks into this place, steals all their data, posts it out there just for the sake of anarchy, and then everything melts down. So you get everything.

And for us, I think we tend to -- I don't wanna speak for you too much, Ivan, but I think we tend to focus a lot on the government side of the house. These guys tend to do more interesting things for the defense side of things.

**Ivan Kwiatkowski:** Yeah, absolutely. And the comment I would like to add on this is that - yeah, it's true that we have this vision of the hoodie-wearing hacker that has been fed to us by Hollywood, and we kind of want to believe it, because it's an appealing image... But at the same time, as Jax was mentioning, we kind of focus on those threat actors that tend to be intelligent services. And intelligent services - they might hire people that wear hoodies; that's their business. But at the same time, they have customers. There's an intelligence cycle; they have to produce information for other departments, other services. Maybe for the executive level. And this --

**Juan Andrés Guerrero-Saade:** It's a job.

**Ivan Kwiatkowski:** Exactly, it's a job. And they have to provide, they have to deliver at the end of the day, and so they really need to set up all sorts of processes where if Bob calls in sick one day, Alice needs to be able to fill in, so they have those repeatable processes. They have to have those programs that every operator knows how to use, and they need to be able to move around across people, because this -- it's like a production factory, right? The spice has to flow. They cannot ever stop... \[laughter\] Because basically, this is a job.

**Johnny Boursiquot:** \[18:10\] Right. That's beautifully put. \[laughs\]

**Juan Andrés Guerrero-Saade:** It changes country to country, too. We're so much more formal in the West, especially in the US, five I's in general. You can tell there's a production pipeline that involves defense contractors, and the defense industrial base. A Raytheon or a Northrop Grumman will get involved in that. And then you look at certain European countries and it's obvious that at some point, someone in an intelligence agency hired five hoodie-wearing French dudes in a room somewhere and they built a whole platform, right?

So country to country you'll get something different. The Chinese - the reason we get pummeled by so many Chinese attacks is they're really undiscerning in their targeting. So they'll go "Okay, we really need to get into this pharmaceutical company", and they'll pass that requirement to like the state-sponsored guys, to the random hoodie guys, these dudes that just do hack-for-hire over there... And you'll see 12 teams hitting the same target, and you're like "Please, this is -- be stealthy. At least pretend you're trying not to get caught." So it's culture to culture. Every place is a little different.

**Ivan Kwiatkowski:** I will say though, despite what Jax just said, eventually they manage to get in though.

**Juan Andrés Guerrero-Saade:** Oh, for sure.

**Ivan Kwiatkowski:** So we're having a laugh here, but at the end of the day, it works.

**Johnny Boursiquot:** I mean, if you have 12 teams trying to find a hole... I usually tell people "Look, security and reducing your surface area -- you have to think of these as mitigation efforts." If a group of people, or a state-sponsored situation happens to you, chances are they are going to find a way to get in. If it's not your security, or your software, or you file, whatever, it's going to be some weak link in a chain in terms of a person, who has some sort of vulnerability, or they fall for some phishing attack, or whatever. If somebody is after you, they will get in.

**Ivan Kwiatkowski:** Oh, yeah. Actually, it's never the firewall. It's always the phishing.

**Juan Andrés Guerrero-Saade:** Yeah, there's so much focus on "Oh, people are using these unpatchable zero-day exploits, and all this software", and you're "Yeah, sure. But what about like the 95% of attacks that were just like someone opened an attachment, someone put their credentials into like a fake Facebook website they got email from?" that is a lot of attacks, and people discount them, but look at what's happening now with the rise of supply chain attacks.

So my first unpopular opinion on this show was, software devs may have some of the worst security in all of the internet, because we -- I'm not gonna say "we". In this case, I will toss it on you guys... there's a certain amount of hubris, there's a lot of installing random stuff...

**Johnny Boursiquot:** That's true... \[laughs\]

**Juan Andrés Guerrero-Saade:** ...and a lot of reliance on package managers; no one wants to run an EDR/XDR/AV...

**Johnny Boursiquot:** Brew install... \[laughs\]

**Juan Andrés Guerrero-Saade:** Everything is root. But there's all the SSH keys and PGP keys and things that you use to change prod are on your laptop. So we've seen plenty of ops, and some that have been leaked and publicly-documented, where you're like "Okay, they were obviously going --" they were fishing through LinkedIn to get to the devs, they know these are like the sysadmins for the company... You walk in, you already have root passwords, you already have access to the entire environment, and you have the keys to hit prod... And that's the beginning of a lot of what you might consider supply chain attacks, right? If I can change your codebase, I can add malware directly to the update pipeline that you use, and I can hit every single downstream customer that you have. And that might have been esoteric like 10 years ago, but we're like knee-deep in it now. It's happening all over the place.

**Natalie Pistunovich:** \[22:04\] The Brew install was definitely spot on... But I do wonder if - Go being so conservative on libraries, and the repeating recommendations to just stick to the standard library... Is this in any way helping things, and making Go slightly safer?

**Juan Andrés Guerrero-Saade:** I think that it creates a central point of failure in some ways, but it isn't one that I think is bad, right? I think Go is in a much better situation because of what you're describing, sort of conservatively. There's still a way to get to it, but I think we'd be unfair to the Go users to equate it with something like PyPI. PyPI - it's true a \*bleep\* show. Sorry. And then -- it's really bad, and you have a ton of name/typosquatting, and like people stealing developer accounts, and then replacing well-known packages with trojanized packages... We actually discovered similar -- well, we worked on a similar supply chain attack for the Rust crates.io, and they were super-responsive, super-nice, like really engaged... But essentially, somebody created a fake developer profile that squatted on a known developer, and changed the Rust Decimal package in the hopes that people would, accidentally install that, it would pull a second-stage piece of malware that was designed to be on CI/CD pipelines. So it's like, you're trying to hit a production pipeline specifically for the purposes of hitting downstream customers eventually. It's wild, man... It's getting crazy.

**Ivan Kwiatkowski:** It is. I would say it doesn't have to be black and white though, right? Indeed, we have Python, where everyone can create an account and upload libraries. Actually, a former coworker \[unintelligible 00:23:48.08\] now working at a French company called Sequoia - he did some research recently where he found on GitHub some project that automatically backdoors a copy of an existing library and uploads it on Pip. It's automated; you can create hundreds per day if you want to. There's this, and at the other end of the spectrum you have something like Go, where I'm getting that there are too many outside libraries, or at least you are discouraged to use them, because it's all batteries-included. Like, maybe there is some middleground there we could reach, where you can get some trusted, or curated package or repository of libraries where people could download stuff without one pulling the whole planet with every LeftPadding, or something...

**Johnny Boursiquot:** \[laughs\] That never gets old.

**Ivan Kwiatkowski:** It never does, right?

**Natalie Pistunovich:** We should add that to the show notes, for those -- yeah.

**Ivan Kwiatkowski:** And then maybe when people upload packages there, they could go through some sort of review by the Golang team, if they have the resources for this, at least to curate some sort of standard extended library that could be useful to other people.

**Juan Andrés Guerrero-Saade:** I think you just suggested that we get our own crates.io, or PyPI.

**Ivan Kwiatkowski:** Maybe.

**Juan Andrés Guerrero-Saade:** I think that's how you end up there, right? You go, "Well, what if we had like a single, centralized way to like vet packages, and like the developers will thumbs up/thumbs it down...?" I think that's how you end up in that situation anyways...

**Ivan Kwiatkowski:** I meant it like maybe an Apple store. Like, don't make it open bar.

**Juan Andrés Guerrero-Saade:** Yeah. Well, that's how I think about the Google repo though... They do seem to have some more standardized sort of packaging there, and things are relatively well maintained... But I don't know; we can't really trust any of it. I think, to Natalie's point, it's cool that folks tend to rely mostly on the standard libraries; it's already packaged there. But there's some inevitability to it when you start like pushing GitHub repos, and everybody -- everybody pulls someone else's project at some point. I just think that it's - -I don't know, Go is not the prime target, I'll just put it that way. Go is not the prime target precisely because of what you're describing.

\[26:07\] That said, it's super-useful. And since we started the conversation with GPT-4, I think it's the best language to have ML-generated, because it's so fascistic, to \[unintelligible 00:26:18.02\] expression, sort of fascist Python, that it's perfect for an LLM. It's super-standard, right? You have the things sort of shaped the same way, the conventions are the same way... You don't need as much of a style guide, because there's not a lot of room for deviation, and you have standard patterns for concurrency, standard patterns for a bunch of things.

So personally, I find that GPT-generated Go code is, for me, most of the time compilable out of the box. Is it perfect? Is it doing what I want it to do? Not necessarily. In many cases, no. But it compiles, right? Which is more than you can say for a lot of Python, a lot of other code... At least up to GPT 3.5. GPT-4 I don't know yet, right? We've gotta go test; it's been alive for 40 minutes, but...

**Johnny Boursiquot:** So along those lines though, right? So if we can use these tools to generate the code that is doing the attacking, can we use these tools to generate code or to understand code that is attacking, and defend against these things?

**Juan Andrés Guerrero-Saade:** So personally, I'm really invested in some of the powers that LLMs are providing for defenders. It's not a one-to-one corollary. Ivan, you wrote one of the first, the most useful tools, I think; I don't know if you want to talk about Gepetto...

**Ivan Kwiatkowski:** Yeah, sure. Maybe I can go back to it after you're done, or I can talk about it right now...

**Juan Andrés Guerrero-Saade:** Sure. Yeah. Sorry, just to kind of couch the concept... It's not necessarily for building tools that we could really use LLMs, but actually for interpreting a lot of code when we're doing reverse-engineering; reverse-engineering malware is a fairly esoteric task. There's very few people that are good at it. So it's one of those talents that is just immensely in demand, and not easy to produce. You can't just go to a specific school or a specific program and you're going to walk out being like "Alright, I'm a reverse-engineer." It tends to come from a certain amount of some coding practice, being really into, I don't know, cracking game licenses, or making game mods.

**Ivan Kwiatkowski:** A few neuroses as well...

**Juan Andrés Guerrero-Saade:** Yeah, a few neuroses, a good stash of Adderall... something in there that sort of pushes you in that direction. So I saw Ivan's tool, which, I'll let you talk about, and ended up actually designing like a whole university course around the use of his tool, the use of just ChatGPT in general... Because what it ends up doing is being really good at that summarizing and interpreting C pseudocode in Assembly, and you can be like "What is this function doing?"

**Ivan Kwiatkowski:** Yeah, so maybe I can introduce it in a few words. back then, when ChatGPT was initially released, everyone was out there and being worried about whether or not they would still have a job in a few years... I was asking myself the exact same questions, and I was just wondering, "Okay, so can ChatGPT do my personal job?" So I took some pseudocode that was generated by my analysis tool, some code from malware that I don't own the source code of, but I took that and put it on ChatGPT and I was like "Okay, so this is a C function. What does it do?" Because basically, my job is to look at those functions, try to understand what they are, and then have a look at all the functions in an unknown program, and maybe I can tell my employer what the malware is actually doing.

\[29:49\] And to my extreme surprise, ChatGPT turned out to be quite good at this. Like, extremely good at it. And when you think about it in retrospect, it kind of makes sense, because ChatGPT is a language model; code is a language, and ChatGPT tends to be extremely good at understanding, interpreting and rephrasing that kind of stuff. And so what it does is you give it some unknown code that has been generated by automated tools, and the code will not have any variable names, it will not have any meaningful comments, or meaningful function names, that kind of stuff, but it's still code, and ChatGPT is able to extract meaning out of it and provide it as human language.

And so what I did then was, after my initial shock, create a plugin that directly pipes my work tool with OpenAI's API. Initially, it was the DaVinci-003 model. Now I switched to the latest one, which is GPT-3.5... So what I did was my tool now sends the pseudocode to ChatGPT, and the OpenAI model -- sorry, I know that this is not exactly the same necessarily, but anyway... OpenAI's API just returns to me a comment that is, "Okay, this function, this is what it does", and then maybe I have to check it a little bit to verify that it's consistent with what I'm seeing. But overall, I just press a combination of hotkeys, and then the AI is just doing my job, and then I have to piece things together. So it's really saving a lot of time, and I think it's seen a lot of adoption in the community, considering the activity on GitHub.

**Natalie Pistunovich:** We'll add a link to this in the show notes. And I have to propose the idea of what you just said as the very last step of gluing it all together and seeing how it works - use the fact that what was released today has a larger input size; like, you can put a lot more tokens into it, and maybe it will do that for you as well.

**Juan Andrés Guerrero-Saade:** I'm excited about it. To be honest -- I haven't said anything, Ivan, but I've been like fiddling with your tool so much... And then just sitting there being like "Okay, how can I use this recursively, so that we go from like interpreting a specific function, to going through a specific branch of control flow, summarizing the summaries etc. and then how do I get -- like, give me a summary of what this whole program does, right? It's like, getting to extreme levels of laziness.

**Ivan Kwiatkowski:** This is a work in progress. The main limit that I've been hitting is the number of tokens per request to OpenAI's API. There are ways, but it needs some fiddling, and it costs a lot in tokens every time you fail... Because when you go recursively in a program, then you can go very deep; it can be thousands of function calls. So I'm kind of fiddling with this myself, but haven't been able to find a way to get it to generate results that are meaningful enough that I would spend 10 or 20 bucks per request.

**Johnny Boursiquot:** But that's a matter of cost, right? That's just cost. Because if somebody is footing that bill for you... Say you have an unlimited budget - then what?

**Ivan Kwiatkowski:** But nobody is... \[laughter\]

**Johnny Boursiquot:** Well, you heard it here, folks; if you're listening and you want to sponsor Ivan...

**Juan Andrés Guerrero-Saade:** OpenAI needs to come and, open the purse for us. Honestly, it's not that expensive, but I can see how it can just be a runaway thing. Like, we definitely have to put some guardrails in there, again, just to make it accessible for folks. When you're reverse-engineering code, most of the time you've lost most of the labeling... Malware not generated by Go; it can be hard to tell what's library code, like standard library code... So you could easily go down the full path of reverse-engineering OpenSSL, that was statically compiled into a binary, which is terrible; you don't want to do that. And I think that's where you get into cost-prohibitive uses of ChatGPT possibly, if you're going to try to go through 45,000 functions, of which 70% of it was standard library code and there was no reason for you to do that... So we kind of have to build some guardrails there. That said - I mean, Go is a lot easier to reverse-engineer. On some level, I'd be pretty happy for a lot of malware devs to go the Go path.

**Juan Andrés Guerrero-Saade:** \[34:07\] Absolutely, because it just -- I love it. Like, I love reverse-engineering Go. It used to be a nightmare, and now it's -- it's a lot easier.

**Johnny Boursiquot:** And you have no idea how many Go puns you've just crammed into just one sentence... I love that you don't realize that, because you're not in the Go community day to day, like I am. You're just mentioning them and I'm just like "Bing! There's another. Bing! There's another one. Bing..." \[laughs\]

**Juan Andrés Guerrero-Saade:** I don't even have my own gopher. I'm not there yet. It's funny, we talked about -- I was talking to Natalie about like a recent publication we did. So Alex \[unintelligible 00:34:38.28\] who's on my team found this piece of Chinese APT malware that was written in Go, and for the first time ever, he caught them basically creating a really simple Go binary; it includes Yaegi, that Go interpreter. So it's some open source Go interpreter. So it's a really simple binary that just runs this interpreter and then it decodes all this Go source code that's being kept as like Base64-encoded string, and then gets the interpreter to run it live on the system.

So the idea is if an AV or whatever, an antivirus decides to check the malware, you're like "Well, this seems fairly innocuous", right? It looks like a repl, or whatever. It turns out to just be staged malware.

**Ivan Kwiatkowski:** Yeah, this is a good illustration of how in many cases good software development practices are very orthogonal to the objectives that the malware developers are trying to meet.

**Natalie Pistunovich:** If that's not a reason to follow the good practices... \[laughter\]

**Juan Andrés Guerrero-Saade:** I don't know, there's plenty of good Go offensive tooling out there. Most people haven't caught on. I'm okay with that. I'm not about to point them in the direction of it, but it's already there. Like, these people are just not looking at the right projects.

**Ivan Kwiatkowski:** Yeah, why are you still on Cobalt Strike, guys? Like, what's up with that?

**Natalie Pistunovich:** I will say that you were trashing the poorly-written Go one, and the well-written one you're still researching... So it really just goes to prove that point.

**Juan Andrés Guerrero-Saade:** You know... Make our lives more interesting, please... It's a bizarre situation to be in, right? Half the time we're talking about how we want to defend people, or we're trying to help people defend their networks... But there is some slightly evil streak where you kind of sit there and go -- it would be awesome to find this insane Stuxnet level piece of malware that no one has seen before, and spend all your time nerding out on it... It's like waiting for a train wreck to happen. It's like being really excited of a pile-up on the highway. There's something messed up about the whole thing.

**Ivan Kwiatkowski:** Yeah, we don't usually talk about that.

**Johnny Boursiquot:** \[laughs\] Like Bruno. We don't talk about Bruno.

**Ivan Kwiatkowski:** this is between me and my therapist.

**Natalie Pistunovich:** So Ivan, the tool that you wrote, Gepetto, which is in the show notes - you said that you recently used it for comparison of Go code with and without generics.

**Ivan Kwiatkowski:** So I did not use it in this specific case, because - well, first of all, I didn't really try to look at the code generated by the Go compiler under Gepetto, because I didn't have the chance yet... And I'm not sure how it's going to react, because again, the outputs of \[unintelligible 00:37:22.23\] compiler when it comes to Go code can tend to be a little bit broken, or extremely broken, depending on the Go version. So I did not try that too much. I'm not sure it's going to work very well. But in any case - yes, I was expecting that you would be asking me a question about generics, because this is something that you tend to do every time I show up on the podcast with you. \[laughter\] So this time, I came prepared.

**Johnny Boursiquot:** Wow...

**Ivan Kwiatkowski:** \[37:50\] So what I did was I created a very small program from the official Go tutorial, and looked at the -- I took the sample code, compiled it, and went to Ida to see the difference between a function that wasn't a generic, and the equivalent that was generic. And I was kind of expecting something, and it turned out to be the case -- before I spoil it, the reason why I was expecting something and wondering if it was going to be true is because, as I mentioned in previous podcasts, Go language tends to do things on its own, right? And if you're used to seeing something in C or in C++, and you'd look for it in the Go language, usually it's not going to be the same, because the Go developers look like they started from scratch, and they wanted to do things better, without sitting on top of the shoulders of very broken giants.

So what they did here is actually the same thing as C++. So in C++ when you have template functions, what the compiler does is it generates a copy of the function for each type that is actually using the program. And Go did exactly the same here. So if you have a generic function that can receive as arguments either an integer or a float, for instance, or maybe a string, whatever, then in the compiled program you will have one version of the function which receives an integer as an argument, and where everything inside the function is related to integers, and then you will have the exact same copy of the function, but with the different types. And then when the program is calling the specific function that corresponds to \[unintelligible 00:39:24.00\] type that has been used currently, then it just invokes the instance of the function that was generated by the compiler.

So in effect, it's doing exactly the same thing as C++, which is it creates the copies, and then since it knows which type is going to be used at compile-time, it just adds a call to the right function. So yeah, that's how it works.

**Juan Andrés Guerrero-Saade:** Real simple. You're like "Yeah, this is really simple..."

**Johnny Boursiquot:** Easy peasy...

**Juan Andrés Guerrero-Saade:** Yeah. It's funny, our tooling breaks really easily. There's a lot of things that are already rudimentary to the development community, that when it comes to the reverse-engineering community it's not great. Like, we don't have a lot of good maintenance of our tools. For example, Ivan mentioned IDA Pro, which is like the decompiler/disassembler that most reverse-engineers use. When it tries to handle Go, it just kind of breaks and doesn't do very well. It's because of really simple stuff - like, they never envisioned having to have multiple return arguments. Super-stupid. It cannot handle the multiple return things, so it has to do these function prologues, and just trying to handle how you're going to store this stuff, and... Yeah, you would think that it would be easier for us to patch our tooling... It really isn't.

**Ivan Kwiatkowski:** I think a more fundamental problem is that in this specific case of IDA, and I think also \[unintelligible 00:40:47.20\] the compiler is that they see some code and they try to decompile it as C. And they can only generate C code. And the thing is, it turns out that not everything can be expressed in C, especially Go programs. And so when they tried to go up one level, but they try to create the corresponding C code, then of course there is no way that they're ever going to be able to create some meaningful C representation of whatever they're seeing. And so of course, stuff ends up missing, or they create variables that don't exist... It just breaks down, because the assumption initially is just -- it turns out to be wrong.

**Natalie Pistunovich:** If anyone listening to this show is building a reverse-engineering tool in Go, please reach out. We want to talk with you on the next episode.

**Johnny Boursiquot:** Yeah, seriously.

**Natalie Pistunovich:** Many questions...

**Juan Andrés Guerrero-Saade:** Someone, please... Yeah, that would be amazing. I do feel a certain tinge of jealousy when I see all of the CI/CD developments, and like the community that comes around sort of building tools around the tools that you folks are using... Definitely a tinge of jealousy. We do not have quite as active a development community. I think it's more a reflection -- let me caveat that. I think it's more a reflection of how few of us there are working in the space. We tend to be very bogged down, and what you'll get is like \[unintelligible 00:42:00.25\] will release a cool plugin, and then he'll go back to doing work.

\[42:07\] So you don't have people sitting around and just iterating on tools, improving them, "How do I start this whole new project for reverse-engineering?" or like a new framework... Usually, that would mean that some really good RE has stepped away from checking out any malware for like three months to go develop this thing, and like there's this difficulty gauging whether that's the best use of their time or not.

**Ivan Kwiatkowski:** Yeah, it's true. For most of us, development is kind of a side job, and it's unclear that any of our employers would be willing to spend six months of our time to generate this awesome framework that would help the whole community. Maybe even for internal use, they might be reluctant.

**Johnny Boursiquot:** I don't travel the security circles like y'all do, but I've come across tools that seem like they were built for that intent, like providing developer workflow, developer experience, that kind of thing. The one I can think of is I think Ruby-based; I think Metasploit to me represents sort of that framework... It provides tooling and ways of hooking into things to make the job of doing that work easier. So is anything like that these days?

**Juan Andrés Guerrero-Saade:** What you described - you're absolutely right. It's a great framework; it's for attacking. So we don't get as many frameworks for like defensive --

**Johnny Boursiquot:** For defending.

**Juan Andrés Guerrero-Saade:** Instead, you got these like factory models, like "Oh, just run that Metasploit. Go to Cobalt Strike. Don't worry about it; it's just four options, and then it'll output new malware for you." And like we're on the other side, with like Soviet tools from like the late '90s, just trying to -- it doesn't... It doesn't -- there's no corollary there, right?

**Johnny Boursiquot:** \[laughs\] It's more fun to attack than it is to defend... Is that what you're telling me?

**Juan Andrés Guerrero-Saade:** I think it's more accessible. I don't know that it's more fun, but it's because I'm like the weird kind of nerd that just really enjoys doing reverse-engineering and malware hunting... So for me, I like that better. I think it would be really weird to be in the offensive security space but not attack anyone for real. And maybe that's a weird thing to say... Like, that might be my unpopular opinion, is just like, I don't know why you would go into offensive and then never break the law, and like never hack anybody for fun, right? It's just -- a bunch of paid engagements for enterprises sounds like the most boring use of superpowers ever.

**Ivan Kwiatkowski:** A lukewarm defense of recreational hacking. You heard it here first.

**Juan Andrés Guerrero-Saade:** Exactly. Well no, it's just like, you don't get Superman and then like all he does is just get cats off of trees. That's a nice side hustle, but the idea that you have superpowers, you can break into these systems, you can just traverse through places you're not supposed to be in, and get your hands on things you're not supposed to have... And you just kind of choose to rob a candy store. Right? It just -- it doesn't make that much sense to me. So I'm happy on the defensive... Like, that's the worst answer to -- I think it's much more exciting to be on the defensive side of things, but it's just like a Rubik's cube that's kind of turning itself.

**Ivan Kwiatkowski:** No, but I think you're essentially correct there. I think that probably most of the defenders know that they shouldn't be trusted with such a power, and all the attackers know it too, but they just do it anyway.

**Juan Andrés Guerrero-Saade:** And they're living on the edge, man... This is why you go work for like the NSA, or something, right? Like, they're recruiting super-heavy right now. But for anybody who lost their job at Google, or whatever, and is bored, and doesn't smoke weed, and wants to serve their country for less money than what they were making...

**Ivan Kwiatkowski:** And are US citizens.

**Juan Andrés Guerrero-Saade:** ...and are US citizens, and have not been arrested... There's a few different caveats there. But essentially, you can go serve your country at the NSA, and presumably do cool stuff.

**Natalie Pistunovich:** \[46:04\] Don't ask how this reminds me... I owe IKEA an apology. \[laughter\]

**Juan Andrés Guerrero-Saade:** The stage is yours...

**Johnny Boursiquot:** More, please...

**Natalie Pistunovich:** Some episodes ago I was comparing poorly-written code to IKEA furniture...

**Johnny Boursiquot:** Oh... Ouch.

**Natalie Pistunovich:** Not as part of Unpopular Opinion...

**Ivan Kwiatkowski:** Did you get a cease and desist, or something?

**Natalie Pistunovich:** Um, no...

**Johnny Boursiquot:** That's what I was gonna ask...

**Juan Andrés Guerrero-Saade:** You're not allowed in Sweden ever again...

**Natalie Pistunovich:** It's not a Swedish company, as people think, apparently... No longer. It was, and still branded as one... But a friend of mine who is a cloud consultant was helping IKEA to migrate to the cloud, and to also adopt Go...

**Ivan Kwiatkowski:** Please don't say China...

**Natalie Pistunovich:** No, no. And then they mentioned to him that Go is nice and everything, but she trashed us on Go Time, and that wasn't nice. \[laughter\] So I apologize. I'm sorry about that.

**Johnny Boursiquot:** Oh, wow...

**Juan Andrés Guerrero-Saade:** It made it far.

**Natalie Pistunovich:** It was not cool for me... And I will do better.

**Johnny Boursiquot:** Wow... "She trashed us on Go Time."

**Juan Andrés Guerrero-Saade:** You have to shoulder the weight of responsibility that comes with wielding this microphone...

**Johnny Boursiquot:** Wow, that is amazing. That's such an amazing story. Well, hopefully, IKEA will hear a word that "Yeah, JK." Natalie didn't really mean it.

**Natalie Pistunovich:** I would love to have you on the podcast.

**Johnny Boursiquot:** Actually, yeah, we would. Yeah, if they're using Go for stuff, I think that would make for a fun episode. So there you go, IKEA... You've received a formal invitation from the folks at Go Time. Come talk to us about the things you're doing.

**Natalie Pistunovich:** And a formal apology.

**Johnny Boursiquot:** And a formal apology, there you go.

**Juan Andrés Guerrero-Saade:** Great meatballs. It's great. Everything's great.

**Johnny Boursiquot:** \[laughs\] Speaking of unpopular opinions... Could it be time to switch to some of that, Natalie?

**Jingle:** \[47:51\]

**Natalie Pistunovich:** Well, Johnny, as the person who brought this up, do you have one for us? Not to put you on the spot, or anything... I will say that as we were doing the soundcheck, there was one sound that was a bit off, and I did literally point fingers... So first this, now putting you on the spot... Sorry, Johnny. It seems like it's my apology podcast.

**Johnny Boursiquot:** Your apology tour...

**Natalie Pistunovich:** Yeah.

**Johnny Boursiquot:** Unpopular opinion... How about we circle back to me? Because I'm trying to think of how to articulate mine in a non-IKEA-offending way, like you've done... \[laughs\]

**Natalie Pistunovich:** That was not part of Unpopular Opinion. That's the worst part.

**Juan Andrés Guerrero-Saade:** I feel like I've dropped so many unpopular opinions just casually through the length of the show...

**Natalie Pistunovich:** It's true. Do you have one for wrapping up?

**Juan Andrés Guerrero-Saade:** I don't know if it's an unpopular opinion... Well, I can make it an unpopular opinion in the context of this podcast. I feel like Python 3.11 is trying to copy some of the better syntactic features of Go for relevance. And the part where I think it's an unpopular opinion is I could see a world where it continues or further dominates in like programming language market share by just stealing a couple of decent ideas, and continuing to live as the lazy person's scripting language.

**Natalie Pistunovich:** So if you have to summarize that into a tweet that we can vote upon...

**Juan Andrés Guerrero-Saade:** If I if I had to tweet this out, like 140 characters, it'd just be "Python 3.11 is going to kill Go."

**Johnny Boursiquot:** Okay.

**Natalie Pistunovich:** Which is probably going to make it high in the Unpopular Opinion board...

**Juan Andrés Guerrero-Saade:** Yeah. I mean, it's super-unpopular. It's not that I agree with it, but I'm saying - like, if you just steal a couple of ideas, and then the laziest fricking programming language that most people use to just kind of script their way out of a paper bag, suddenly has a couple of like the nice features of Go, and you go "I'll just stick around here until I'm ready to wade into the pool of being an actual good developer. I'm gonna just be cool over here", right?

**Natalie Pistunovich:** \[50:16\] The AI will change that, and we have to have another podcast about this. This is a topic we barely even opened, but we were definitely planning to. Ivan, do you have an unpopular opinion?

**Ivan Kwiatkowski:** Yeah, I tried to think of one, but it's kind of a completely different field from programming... So it kind of makes me feel inadequate now. But anyway... Yeah, the one that I thought off was, actually, I don't think that there is such a thing as free will. So I think that everything that you've ever thought, and everything that you will ever do is actually a chemical process in your brain that is a result of the state that was in your brain at T minus one millisecond. And in that sense, unless you can prove to me that there is some sort of soul or spirit or something, then you cannot -- I would not be able to place the location where this freewill would be located.

**Juan Andrés Guerrero-Saade:** You went broad, man...

**Ivan Kwiatkowski:** Oh, yeah, I did. Sorry.

**Juan Andrés Guerrero-Saade:** This is what security does to people. \[laughter\]

**Ivan Kwiatkowski:** Also, Java \[unintelligible 00:51:13.23\]

**Johnny Boursiquot:** Oh, wow. \[laughs\] He's like "Here's this other bomb I'm gonna drop..."

**Juan Andrés Guerrero-Saade:** "We have no free will, and screw Java", right? \[laughter\]

**Johnny Boursiquot:** Those things are related in his mind. That is beautiful.

**Juan Andrés Guerrero-Saade:** We'll take it. Straight nihilism, man...

**Johnny Boursiquot:** My unpopular opinion -- and I have a nasty habit of thinking my opinions unpopular, but they ended up being popular... Except that one time I actually did have an unpopular opinion. But anyways, my unpopular opinion is that - I think with the advent of these generative AI tools that can understand language and generate language and everything else, while it is easy to leverage these tools... And I speak from somebody who pays for GitHub Copilot, and I use it, and I like it... While these tools may make the act of building and writing code easier and faster, the responsibility still lies with you, the developer.

I think we're entering an age where you are going to learn not really how to write code, but how to proofread code. Because if you can have machines, like a model generate code for you, then the only thing you're doing is verifying that it's doing the right thing. And right now, I find that about 50% of the things I'm generating from something like a GitHub Copilot, I have to tweak, because it's not quite what I want... But that's still 50% of typing that I don't have to do, right? So it does help me and it has given me a boost of productivity, no doubt, and I'm glad to pay for it... But a responsibility of understanding what it is that it's generating... And to me, it's like back in the day where I would look at a website and I was learning how a website worked; I'd do View Source... Corollary here being that you can get the equivalent of View Source - you can get source code from the cloud, from something in the cloud... But it was still up to me to understand what HTML tags were, what does the p tag do, what does the image tag do, if I add this attribute to this type, what does it do? Like, you still have to understand -- you've got a leg up, but you still have to understand what it is that you're getting.

So just because you're gonna get tools doesn't mean the responsibility of said code, either the productivity, whether it's the benefit or the chaos that ensues from you using that code, and shipping it into production, and all that stuff - you are still responsible for that code, right? And I would probably be harsher on you as a developer who commits generated code and doesn't really verify it, proofreads it, and fix it... I'd be much harder on you, knowing that's what you did if you actually wrote the code yourself, right? If you wrote the code yourself, I know, "Okay, it's human error. Maybe we need better practices for code review and everything else." But if you're just blindly generating code and getting it in there and shipping it, then I'm gonna be much harsher on you.

**Juan Andrés Guerrero-Saade:** \[54:19\] The BuzzFeed listicles basically write themselves, right? Like, "This developer checked in random ChatGPT code to Google 3, and took down like half of ads for like 45 minutes, right?" There's ways in which you can see the laziness kind of like potentially kicking in... I think you're right. And it's interesting, because you see certain -- I see certain developers on YouTube... I'll still watch people who can actually program, even if I can't, who are just talking about like "Oh, well, there's this productivity boost from Copilot." There's also this drag that comes with having to like sit there and interpret code.

**Ivan Kwiatkowski:** Welcome to my world.

**Juan Andrés Guerrero-Saade:** Yeah, exactly. Like, that's what we do all day. There's no problem. Again, I don't know how much you do, Ivan, but personally, I don't write that much code. Most of the time I'm trying to interpret code. So the idea that I have a thing that's going to write 70% relevant code for me, and I could just template that... That's massive on my end. But yeah, I don't know how it actually affects the sort of day to day, and the ritual, and the process of folks that are more caught up in generation, than for us, right?

**Ivan Kwiatkowski:** Yeah. Although - I mean, from my perspective, your opinion, Johnny, seems to be extremely popular.

**Johnny Boursiquot:** I told you... \[laughs\]

**Ivan Kwiatkowski:** I can't, for the life of me, imagine some guy breaking stuff because he pasted code from either StackOverflow or GitHub Copilot, and then complaining, and then getting a positive response from Reddit or Twitter. Like, I don't see that happening, ever.

**Juan Andrés Guerrero-Saade:** I remembered my unpopular opinion, and I'm actually glad that I'd forgotten it... I think we're good.

**Johnny Boursiquot:** Oh...!

**Juan Andrés Guerrero-Saade:** Let's let Natalie --

**Johnny Boursiquot:** Let's let sleeping dogs lie...

**Juan Andrés Guerrero-Saade:** I'm okay, I don't need the hate mail. It's fine.

**Natalie Pistunovich:** So my unpopular opinion is about music, specifically Eurovision. And it has some background story. So last year there was a band that was --

**Ivan Kwiatkowski:** Did you offend them as well? Oh, you're about to. Okay.

**Natalie Pistunovich:** No, no, no, no. I love them. No, no, I like them. So there's a great band that's called - their new name is an Electric Callboy. And in the beginning, they had the name Eskimo Callboy, they applied for the Eurovision, many people loved them last year, 2022... They were rejected, partially because of the name. That's one of the reasons they changed it. And then they ended up not making it to the Eurovision to be the German entry. For all the American listeners - Eurovision is like a competition of all of music between the European countries and some additions, like Australia...

**Juan Andrés Guerrero-Saade:** It's like The Voice, but with nationalism?

**Natalie Pistunovich:** It's something that started after all the World Wars as like "This is where we all laugh at ourselves, in a good way." So it's always glamorous and amazing. It's always around May, or so. And then the winning country gets to host it, and so on. And every year, the entries is a wide range. It's super-fascinating, fun. Love it.

\[57:18\] So the German band Electric Callboy - they did not make it, and then there were petitions to allow them to be the entry, and this was... Germany generally works, in the sense that if enough people sign the petition, the government has to take it seriously and discuss that. This is not a government issue, but Germans do petition, so there was a petition; this was not accepted by the Eurovision committee for Germany, whoever is responsible... And they were eventually rejected. There was another entry, which was nice, but made it super-low, and was an okay song, not really Eurovision material, if you ask me...

And then this year's entry is a -- it's a good band, it's a nice band, I did know them... It almost feels like another version of this rejected band. And this is probably where I'm offending them... I think you're nice; you're not as good as Electrical Callboy. And here comes the unpopular opinion. Germany made a mistake here, and they should have corrected this year, but they solved it in a patch. Here's the long unpopular opinion. Good luck summarizing that into a tweet.

**Juan Andrés Guerrero-Saade:** I was trying to duck out of the screen... Just be left out of this one...

**Johnny Boursiquot:** Well, hey, if we have a Twitter blue, we can actually post a whole book in a tweet now, so... We'll figure it out.

**Juan Andrés Guerrero-Saade:** You can basically do whatever you want on Twitter now. The rules are out... They can't use the API, but for $8 you could probably take a tour of the data center at this point.

**Natalie Pistunovich:** \[unintelligible 00:58:48.16\] an apology next episode?

**Juan Andrés Guerrero-Saade:** No, no. This one's fine. We're okay with this one. We don't know if Twitter will still be here for the next episode, so...

**Ivan Kwiatkowski:** They don't have a PR department anyway, so there's nobody to complain. \[laughter\] It's true. It's true.

**Juan Andrés Guerrero-Saade:** Oh, God...

**Johnny Boursiquot:** Yeah, maybe Elon will hear your rant, and maybe Elon will show up on the show... Elon, if you're listening to Go Time - and you should; this is very good content, Mr. Musk... If you do hear...

**Natalie Pistunovich:** We know that many of your companies use Go. Please join.

**Johnny Boursiquot:** We do. So yeah, come join us for an episode. We'd love to host you.

**Juan Andrés Guerrero-Saade:** We'll all smoke weed and just talk about Go, and not make fun of Twitter. It'll be perfect.

**Johnny Boursiquot:** We can't promise some of those things, but... It'll definitely be fun.

**Natalie Pistunovich:** Alright... Many thanks for joining. Still some open conversation topics, so maybe in episode five coming up, who knows? Have a great rest of your day, everybody who listens, or will listen to this later... And thank you, Ivan. Thank you, Jax. Thank you, Johnny.

**Juan Andrés Guerrero-Saade:** Thanks, guys.
