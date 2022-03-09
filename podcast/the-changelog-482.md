**Jerod Santo:** Alright, we're joined by JS Party regular, the mad scientist himself... It's Feross. What's up, Feross? Thanks for joining us on the Changelog.

**Feross Aboukhadijeh:** Hey, guys. It's great to be here.

**Adam Stacoviak:** It's good to have you here, Feross. I've been enjoying just knowing you and paying attention to your mad science over the years.

**Feross Aboukhadijeh:** Thanks. Yeah, I know, I love coming on Changelog and JS Party and sharing whatever I'm working on. I always launch my things by talking to you guys, it seems like.

**Jerod Santo:** It's a good way to do it.

**Adam Stacoviak:** We appreciate that.

**Jerod Santo:** Yeah. We like it, you like it... I think we met you all the way back in 2016, if this episode is to be believed, called "Mad science, WebTorrent and WebRTC." That means we've known each other for - gosh, six years.

**Feross Aboukhadijeh:** Yeah, it's been fun being on JS Party. I don't remember when I joined, but... Yeah, whenever we do those episodes, it's always a good time, and... There's always stuff to talk about in JavaScript, so...

**Jerod Santo:** Totally.

**Adam Stacoviak:** Well, that was a long time ago. 2016... Wow. Changelog \#227, which is also a 1980's, I think, TV show, 227.

**Jerod Santo:** Oh, really?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I hadn't heard of that show.

**Adam Stacoviak:** Yeah. That's a long time ago.

**Jerod Santo:** He's googling furiously to confirm...

**Adam Stacoviak:** Yes, May 6th, 19-- well, no, it was a long time ago. It was a cool show, I watched that. 1985 sitcom. Five seasons.

**Jerod Santo:** It's called 227. What did that refer to? Was it referring to Feross' episode of the Changelog?

**Adam Stacoviak:** \[04:14\] I think it was basically like -- they say it follows the lives of a group of middle class people living in an apartment building.

**Jerod Santo:** Was that their apartment number, 227?

**Adam Stacoviak:** Yeah. So it was like a lot of personalities in there. It's cool.

**Feross Aboukhadijeh:** Do you believe in numerology? The belief that numbers have...

**Jerod Santo:** Significant meanings?

**Feross Aboukhadijeh:** Significant meanings, yeah.

**Adam Stacoviak:** Not sure how much I believe in it, but I believe it's a thing.

**Jerod Santo:** Well, I did until I saw Lost, you know?

**Adam Stacoviak:** What did you say, Jerod?

**Feross Aboukhadijeh:** This episode is off to a great start... \[laughter\]

**Jerod Santo:** I said I believed in it until I saw Lost... Because they had the 248 thing, and then it ended up meaning nothing... I can't remember. I don't know, Lost lost me. Good first two seasons, and then just complete, utter disappointment from then on out.

**Adam Stacoviak:** Well, there you go. It's true.

**Jerod Santo:** And now we're just lost in this conversation. So let's loop back to Feross...

**Adam Stacoviak:** Episode 227. Go check it out though. Let's leave that there at least.

**Jerod Santo:** You mentioned that you come on and you talk to us about your creations... So we had an episode of JS Party about BitMidi back in the day; that was just you and I on that show... And then we also had you on JS Party way more recently - that was in July of last year - talking about Wormhole. Today we're here to talk about Socket, which grew out of Wormhole... So let's start with Wormhole, just a brief explainer of what that is, what it does, why you built it, and then you can tell us the story of how this new thing came about.

**Feross Aboukhadijeh:** Yeah, totally. So Wormhole is a project to help you send files securely, with end-to-end encryption. It came out of our desire to build a file sending service that didn't need to see your files. Firefox actually had a thing called Firefox Send for a while; I don't know if you remember that... And they shut it down at some point in 2020. So when we wanted to do this, we realized we would just have to build our own version of it.

At the time, we wanted to build it into kind of a bigger idea around end-to-end encrypting everything; like all the things - documents, nodes, collaborative, things like chat... And we wanted to start with files, because files are the easiest. They're static content, so why not start with that. So we built out this thing, and tried as much as we could to make it really, really secure.

We started off with kind of a fork of the Firefox Send codebase, and we were inspired by the encryption system that they used... And we added actually a bunch of improvements to it, and additional web security features. So we did a bunch of things, like - there's no third-party scripts in the site at all, we have a really strong content security policy to make sure that if something gets in there, that we can block those kinds of cross-site scripting attacks, and stuff like that... And we also added stuff around peer-to-peer, to make it actually faster to send files.

We wanted to really make the user experience really good with Wormhole as well, so we did this thing where you can actually start downloading a file before it's fully uploaded. So if the sender and the receiver are online at the same time, you don't actually have to wait for the file to fully upload; the downloader will start to be able to stream it directly from your browser using WebRTC. So we did a whole bunch of cool things like that in Wormhole. It's a really cool project, it's online at Wormhole.app, you can check it out.

**Jerod Santo:** And you can check out that episode for a long conversation about some of those cool tricks and hacks that you all did. It was a JS Party episode, but it had Adam on it, so it has very much a Changelog feel. That's episode 185...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[07:58\] ...of JS Party. Nick Nisi also joined us on that one. So you're building Wormhole, and doing cool stuff, and very security-conscious... Or conscientious, whichever word is correct. Or both. And you said one of the security things that you wish you could have done better was vetting of your dependencies. And it seems like what you're up to now, in addition to Wormhole, or kind of this new thing that you're doing because of Wormhole, or out of Wormhole, is a kind of a shift, or a change, or a new direction towards solving not just file encryption and sending problems, but this is like every developer's problem on the internet now, which is the whole dependency supply chain security problem, that nobody really has good answers for at the moment.

**Feross Aboukhadijeh:** Exactly, yeah. I think everybody feels the pain around dealing with their dependencies, and that's definitely something we experienced when we were building Wormhole. You know, there's so many dependencies in the average JavaScript application. The average dependency has 79 other transitive dependencies... So you install one package, you get 79 other packages. That's the average on npm right now, according to this paper that came out last year, that analyzed the registry. And there's also 39 additional maintainers that you trust when you trust a single package. So it's a pretty large attack surface. And for the most part it's fine; most maintainers are good, and the system mostly works. I mean, I'm a maintainer, and a lot of my friends are open source maintainers, and the npm ecosystem is a wonderful place, and it's full of amazing packages, and it's really awesome that everyone can just install this stuff and build apps really fast.

Open source is the reason why you can build an app with like two people, that would have taken like teams and teams of people before to do... So I'm not trying to -- you know, me of all people, I wouldn't be complaining about open source. But when you're trying to build an app for maximum security, you're faced with this really difficult trade-off. The safest thing to do, on the one -- like, if you had to just pick the most impractical position you could have, it would be "We're gonna read every line of code of our dependencies, and we're not gonna use anything that we haven't vetted ourselves." And that's actually appropriate for some applications. Like, if you're building Signal, that secure, end-to-end encrypted messaging app, they probably wanna know everything that's in every single one of their dependencies.

Big companies, Google - they're actually an example of this as well; they check in all their open source code into their own internal repository, they vendor it, and they consider it their own code, and they have a security team that actually vets it first, and they also vet updates. So if you wanna update to a new version, the security team is actually involved in that process; they look at the diff and they kind of decide when or if Google is gonna apply that update. So it's a very manual process. But obviously, for most teams, both of these approaches of fully vetting a package is totally impractical, both because of time and resources, but beyond that, even just the skill to even understand all these various projects, it's not necessarily the case that every team can even do that. I mean, part of the reason why you use dependencies is because you're trying to stand on the shoulders of giants and you don't wanna be an expert in all the stuff that you're depending on; to then require every single team out there to fully understand every line of code of their dependencies is really asking a lot.

\[11:38\] But the thing is that if you don't do that, then there is a small chance that you're gonna install a package which contains malware, a package that's just been hijacked, and that doesn't do what it says on the box anymore. And everyone's seeing more and more examples of this in the news... There was an incident literally last January where a maintainer compromised his own package, and we did an episode about that on JS Party... I'm sure Jerod is looking up the number right now... \[laughs\]

**Jerod Santo:** That's the faker.js and the colors.js I believe it's \#211, but it might be \#210. I'm still looking. But we'll get it in the show notes.

**Feross Aboukhadijeh:** Yeah. So that's one example. But there was another example before that in November, and another one in October of last year... This seems to happen nearly monthly now. In October and November it was Coa, RC and UAParser.js that were compromised. They had a Monero miner added to the package, as well as some malware that stole passwords on Windows from over 100 different programs on Windows, and also the Windows credential manager... So if you were unlucky enough to install one of those packages during the period where the bad version was on npm, then you would be compromised; you would have lost all your passwords, and you'd need to reset everything, and install your keys, and everything like that.

And UAParser.js is depended upon by React Native. So these packages had a lot of dependencies. Each of those three I mentioned had 30 million downloads a month each. So we're talking seriously popular packages that were compromised. And the UAParser one, just as an example - that one has 7 million downloads a week, and has three million GitHub repos that depend on it.

**Adam Stacoviak:** Wow.

**Feross Aboukhadijeh:** Just that one project, three million repos. And the way that one was compromised was I believe the maintainer, their account password was sort of sold on a Russian hacking forum. So there's this post --

**Adam Stacoviak:** Wow.

**Feross Aboukhadijeh:** Yeah, it's not like a hundred percent certain that this is the cause of it, but two weeks before UAParser.js was compromised, there was a post on a notorious Russian hacking forum... So on October 5th was when the post was done, and then on October 22nd, 2021 was when UAParser was compromised. And the post on the 5th said -- so this guy was basically selling an npm account with more than 7 million weekly downloads, which is a suspicious number, because that's exactly the number that UAParser.js has... And it said "There's no 2FA on the account, and I have the password." So that's enough for you to log in and change the email address. And they were selling this for $20,000 to the first bidder.

**Jerod Santo:** 20k.

**Feross Aboukhadijeh:** 20k for --

**Jerod Santo:** For the keys to the kingdom.

**Feross Aboukhadijeh:** ...access to everyone's builds.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Well, if the commons keeps growing, which we want it to... Like you had just said, you can produce some amazing software, if not a full-fledged company that could be worth billions, with two people, or less than ten. Who was it that -- I have to look up my notes, but somebody is super-bullish on like "With less than ten people you can build a billion dollar company." And that's totally possible. I think it's challenging, because that's a lot of revenue for ten people to manage, all accounts and whatnot, but... I digress. The tech - sure. The company may be harder to actually run with ten people.

**Jerod Santo:** I think WhatsApp famously did what they did with less than 50 engineers... And that was -- how long ago was that, WhatsApp's acquisition? Because that was a billion dollar plus acquisition. It had to be 7, 8, 9 years ago. And that was 50 people; 50 engineers. So I think we could trend down towards ten, just adding some evidence to that statement.

**Feross Aboukhadijeh:** And we're not going back.

**Jerod Santo:** Yeah, we're not going back, are we...?

**Adam Stacoviak:** Well, okay, sustaining a billion dollar company could be more challenging.

**Jerod Santo:** Sure.

**Adam Stacoviak:** The point being though is that you want the commons to grow. You want the commons to be there, because it's obviously super-valuable. And we're all humans. So you can only harden security to a certain point before just somebody's 2FA is not enabled, their password is less secure, they get socially engineered somehow... I mean, it's the last four of their phone number, you get their phone number... There's just unique ways you can get into different things with people... So since you can't solve for the human problem, you have to solve for it a different way. How do you do that?

**Feross Aboukhadijeh:** \[16:14\] I think it's worth looking at why is this becoming a problem now, and why has it not been a problem up until now, to kind of understand -- maybe that gives us ideas of how we need to solve this. And I think what's changed is kind of the way we write software; with the emergence of npm and newer ecosystem - even Rust I would include in this - the way that we write software has changed, so the number of dependencies that we have in an average application is just off the charts, and it's part of the reason why people always make fun of JavaScript, and say JavaScript programmers forgot how to program, they need to install a five-line package...

**Jerod Santo:** Their Node modules is heavier than the Universe, and all that kind of jokes...

**Feross Aboukhadijeh:** Exactly. So that whole thing - there's some truth to that. It doesn't seem ideal that we have so many trivial packages, and that the standard library is the way that it is in JavaScript... But on the other hand, in the aftermath of Leftpad, there were all these people posting "Oh, I can implement Leftpad in one line. Here it is", and almost every single one of those implementations had bugs. The actual Leftpad package actually did it correctly. So even for something as trivial as that, getting bug fixes and having the code be centralized in a package, and having it improve over time actually has a lot of benefits. So I don't think we're going back, even in that regard.

But I think the other thing that's changed -- so because of that, no one is reading the code, because there's just too many dependencies, and no one is actually looking at what these packages do... And they're relying on these tools that look for vulnerabilities, and sort of just calling it a day... Saying, "Well, we installed Dependabot, or something like that, so we're safe. Our open source is safe." But the thing is that a vulnerability scanner can only tell you so much about a package. It can only tell you if there's a known vulnerability. And a known vulnerability is something that a security researcher has found in a package - you know, they've found this problem, they've reported it to the maintainer, and they've published a CVE, and this tool can now tell you "Okay, this particular version is vulnerable, and you should update to such and such version to get a fix."

But that doesn't actually stop the type of attack we're talking about here, where a package is taken over by a maintainer and malware is inserted. That isn't gonna be in a CVE database; that isn't gonna be a vulnerability that is a known vulnerability. That is by definition an unexpected occurrence. So what you really need, in my opinion, is to actually look at the contents of the package to figure out what's inside the package; what is it doing? What capabilities is it using? Does it talk to the network? Does it read files on your file system? Does it run an install script? Was a new maintainer added recently to this package? That's the kind of thing that if you had that intelligence, then you could have caught all of the supply chain attacks of the last year.

**Adam Stacoviak:** You can catch outliers pretty early... Because if you had two new maintainers the last month, and it installs, it's a good candidate to check, to vet further...

**Feross Aboukhadijeh:** yeah.

**Adam Stacoviak:** ...rather than the ones who don't, of course. Just for those who may be uninitiated, what's a CVE, Feross?

**Feross Aboukhadijeh:** A CVE is a -- what does it even stand for...?

**Adam Stacoviak:** Common Vulnerabilities and Exposures.

**Feross Aboukhadijeh:** \[19:45\] Yeah. It's basically a number that is assigned by this organization called Mitre. When a security researcher finds a vulnerability in a software package, they report on that to the maintainer, and then they can get this sort of standardized number issued. And what's cool about that is it feeds into all this tooling, and so there's like a common way to refer to these vulnerabilities, with a common identifier... And when tooling reports about it, there's like a thing you can look up and know what vulnerability exactly we're talking about; because there's so many, we need to number them... So this is just like a central organization that coordinates this numbering.

It's also actually a government effort. So the U.S. Department of Homeland Security, Cybersecurity and Infrastructure Security Agency are the ones that run it... And all this goes into this thing called the NVD, or the National Vulnerability Database. So it's actually a U.S. government effort. And that's the thing that all the different tooling basically just reports on right now. And this is actually what npm audit does; the thing that you see every time you run npm install and it tells you "You have ten packages with vulnerabilities." It's really just doing a look-up into this database and telling you how many CVEs are known for the versions you are installing.

**Adam Stacoviak:** What you're saying though is you can't simply rely on that. Like, it's a good practice, of course, but if it's the only line of defense, that's where you have a problem with it.

**Feross Aboukhadijeh:** Yeah. I mean, take what we're doing with Wormhole - we were looking for this; we had Dependabot installed, and Dependabot will go ahead and send us a pull request if we have a vulnerability in our project, and we would update that and get that out as quickly as we could... And that's a great thing to do. But the thing we were specifically worried about was the kind of attack that would target Wormhole specifically, or one of these supply chain attacks that would just start doing random things on our server, like mining cryptocurrency, or talking to random servers.

You know, there was that eslint-scope bug - that was another attack that happened, where the malware actually stole your npmrc file, and it could publish packages as you... The list goes on. The things that can go wrong... It's like, you have this small probability of a really bad thing happening, because when you run npm install, you're basically just trusting that the code is gonna do what it says. And running this on your laptop, with all your personal files, your photos, all your documents, your social security number - all that stuff is on there. And then you're running it on your product server with all your user data; now, in the case of Wormhole we didn't store any user data, but our app needed to be secure, to not serve compromised JavaScript code down to our visitors. So that was our concern, that was what we were worried about. And once Wormhole got popular and we started getting over 100,000 people using it every month, and we started looking at the really basic statistics that we gather about the users, we saw a third of our visitors come from China, and they're using it to send files there securely...

So then I started to get pretty worried. I was like -- you know, we're not the biggest fish in the pond, but there is a chance that we could be the target of state-sponsored attackers who wanna know what's going on in those files... So it seemed like a thing that we should at least have a plan for how we're gonna deal with our dependencies, and how we're gonna vet these things... And when we looked around for tools for this, basically I didn't find anything. One option is I guess you could check in your dependencies into your repo... But then you're still not gonna be vetting them. I think basically what everybody does is they just kind of hope for the best, and they don't look at their code.

**Adam Stacoviak:** This is what I call "Trust the system", Feross. I made this up a long time ago. I wanted to make my wife -- we got married in Jamaica, and this is actually when I coined the phrase. "Trust the system, babe", I said to her. And my sister-in-law - future sister-in-law, because weren't married yet - "Hey, what are you doing with your bag?" "I just trust the system." It's a different country, it's not the USA. Things get handled differently. Not that you can't trust them, but there's just different things happen in different countries, differently than they do here.

\[23:42\] So long story short, my sister-in-law did not have her bag. And thankfully, she checked one, because then she actually had clothes and she could actually go to our wedding and do all the fun things we had planned. But I came up with this term, "Trust the system." And that's what you do. When you npm install, you trust the system.

**Feross Aboukhadijeh:** Yeah, but I like "Trust, but verify" better.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Okay, "Trust, but verify." Touché.

**Jerod Santo:** We also have Dependabot installed, and have long been a user of intrusion detection systems in the past, and monitoring systems; and these are vulnerability scanners... And their technology solutions ultimately for me they've come up short, because of the noise. Because of the false positives, because they're not smart enough to know that actually that vulnerable package never runs in a production context, it's part of my build process... There are seven reasons from Sunday why it doesn't apply. And when I hear your solution of "Well, what we need to do is be looking for these other things, such as this project has two new maintainers" - well, that's an alert I'm gonna ignore immediately... Right? Because aren't we just adding more noise to the potential signal that we're trying to get out? Or maybe there's a different way that you're going about this that makes it special.

**Feross Aboukhadijeh:** Yeah, it's a great question. I'm very sensitive to the noise issue, so I definitely wouldn't wanna use a tool that added noise... So that's definitely not what Socket is gonna do. We're being very careful with the types of things that we will alert you on. If you install the GitHub app for Socket, it will currently just warn you about typosquatting, which is the number one supply chain attack happening right now in npm.

**Jerod Santo:** Explain typosquatting real quick.

**Feross Aboukhadijeh:** Yeah, so typosquatting is when somebody registers a package name that is one or two characters off from a popular package, and they hope that people will accidentally install the typoed version, the typoed name, and get the attacker's code.

Say you registered the name React, but you swapped the location of the r and the e in the name React, and you just hope that a couple hundred people are gonna make that mistake and install that typoed version. And then once that runs, the attacker's code is in there and it can do whatever it wants. And we see that 60% of malware on npm uses an install script, so that means that just you hitting Enter on that is enough to compromise you. So you're gonna type npm install, typoed version of React, you hit Enter, and then even before you've imported it or whatever, it runs code on your machine. That's the install script attack vector that you see most malware use. And then what is it gonna do - of course, it can do whatever it wants at that point.

But they're just hoping -- they're basically just kind of riding on this popularity. The thing that's crazy is there's so many of these that even -- you know, I've found for example there's this package called Browserslist. Have you heard of it before?

**Jerod Santo:** No.

**Feross Aboukhadijeh:** You probably use it though... It's this thing that lets you define the browsers that you wanna support in your application... So you can say like "I support IE11", or -- God forbid, hopefully you don't have to support IE11. But you know, "I support the last two versions of Chrome", or whatever... And you can put this into a standardized file in your repo and then all the different kind of tooling that you use can refer to that file and use that for automatically generating polyfills and stuff like that. So all the different tools can rely on one place where you define the browsers that you support for your whole app.

Anyway, but it's a weird name. It's called browserslist. I constantly make the typo, I type browserlist, instead of browserslist. It's a very easy typo to make. And if you look up that typoed package, you'll see that the oldest version that's been published in there is a security holding package from npm, which is usually - you'll see that when a package used to be malware at some point, and then it got removed, and they put up kind of a blank package to hold the name so that bad guys can't register it in the future.

\[28:03\] So I don't know for sure whether that used to be malware in the past, but it seem like it may have been... And if you look at it now, the current owner of it has published kind of a one-line package that just throws an exception and says "Hey, you shouldn't install this." Like, he really meant to install the other one, which is a nice service that they're providing to people... But if you look at that, it's still installed 700,000 times a year, the typoed version.

**Adam Stacoviak:** Wow. Of course, yeah.

**Feross Aboukhadijeh:** Yeah, there's no tool that's telling people that they're installing the wrong version, and that this is a source of unnecessary risk. So we've found this, and we've looked at what packages were doing this, and we've found the popular Preact library was installing browserlist, the wrong package. So Preact was vulnerable. It wasn't an actual vulnerability, but it was an unnecessary dependency that was just adding risk for no benefit.

And we've found other stuff -- I mean, there's all kinds of... Browserfy - there's a typo called Bowserfy; it's literally Browserfy, but with extra --

**Jerod Santo:** For Nintendo.

**Feross Aboukhadijeh:** Yeah, for Nintendo fans, but also with extra code injected into your bundle.

**Jerod Santo:** Oh.

**Adam Stacoviak:** Sure.

**Feross Aboukhadijeh:** Like, that's all they added.

**Adam Stacoviak:** Why not?

**Jerod Santo:** A little bonus.

**Feross Aboukhadijeh:** It's the same thing, but with extra code.

**Jerod Santo:** It's like a power-up.

**Adam Stacoviak:** Yeah.

**Feross Aboukhadijeh:** I don't know what it's doing; maybe it's fine, but... It's just these weird things out there. And remember, npm is kind of a Wiki; anyone can publish anything.

**Jerod Santo:** Sure.

**Feross Aboukhadijeh:** So there's no guarantee that these random typos that only have like 100 downloads have ever been vetted by anybody. So you really don't wanna run that stuff on your computer. Anyway, to answer your question, Jerod - that's an example where if we were to tell you in a pull request, "Hey, you installed a typo. It appears that you installed a typo, because we've found this other package that's one letter different, that has a million times more downloads than the one you chose", and it just asks you to double-check... Like, "Hey, are you sure you meant to install this one and not this other one?" We see that as -- it's probably not gonna be a noisy alert. It's probably not gonna happen that often. But if it even happens once every three months that it catches a typo, you're just really happy that it did that, right? You're not gonna complain that this bot warned you about this typo.

**Adam Stacoviak:** Yeah.

**Feross Aboukhadijeh:** So that's the kind of level of things we're trying to catch with the bot. Anything noisy - we're not gonna include it. It's just not worth it.

**Adam Stacoviak:** Isn't there a thing too where when you read a sentence you can remove the vowels, so you can rearrange the first and last letter... I'm totally making this up, but there's something that's like -- you can read a full-on sentence that's totally jacked up from a character organizational standpoint. It doesn't even have to be spelled correctly, and you can still read it, because that's the way the human mind works. It completes itself, so to speak... And I don't know the exact study; if y'all know, then for sure share it, but... While you were talking there about browserslist, plural, I googled it and landed on browserslist.dev, and I was thinking, "How do I even know if this is the right site?" Because it could totally be the misspelled version of it and put a very similar site up, and it can look very good. It can look just like browserslist should be.

**Jerod Santo:** Especially since the source code for browserslist.dev is probably open source on GitHub. You just copy theirs, and make your changes, and re-publish, and it looks almost like the real thing.

**Feross Aboukhadijeh:** Yeah, I mean the thing that makes this hard too is that a lot of these names - it's not clear... There's things like blahblahblah-proxy, or blahblahblah-proxied. What tense of the word are you supposed to use? There's a lot of this kind of stuff that you see in these typosquatting attacks.

Another common one is the js suffix. Or in other ecosystems there's the .py suffix. Like, is the library called standard, or is it called standard.js? Well, it turns out both of those are available on npm...

**Adam Stacoviak:** Oh, wow.

**Feross Aboukhadijeh:** ...and if you installed the wrong one, it's some random garbage that someone published; nothing to do with the original project. And sometimes the js version is the right one, and sometimes the one that's missing it is the right one. It's hard to know apriori what's the correct one.

**Break:** \[31:57\]

**Jerod Santo:** So if we were to focus in on your typosquatting detection algorithms, are you using other heuristics besides download counts? How do you decide "Alright, we're gonna go ahead and open that PR, because we think this is a typo"? You've gotta be putting some work into that whole aspect of it. Help us through the thought process.

**Feross Aboukhadijeh:** Yeah, so for typosquatting we basically say "Okay, any package that has at least 50,000 downloads is probably not a typo. It's gotten popular enough that --" Actually, we're still tweaking it. It could be 100,000, it could be some amount of weekly downloads where we say "This package has reached a critical mass of people downloading it that we don't think that this is all typos, so we're just gonna not even consider those to be typos."

But then if the package is less popular than that threshold, then we say "Okay, does it have a name that's similar to any other name of a package in npm?" And we do this thing called levenshtein distance, which is an algorithm for basically just counting up the number of characters that have been added, removed or replacements that have happened in a string. So it's like a way to sort of describe the distance between two strings. You can assign a number to it, like how far are these from each other.

So what we do is - if the number is too close, the distance is too close... And it depends on the length of the package; the longer the name, the more chances for typos there are, so we scale it a little bit by the package name. Then we also take into account common endings, and things like .js, or .py, or whatever... Or swapping orders of things. Because sometimes there's like a package called nodecanvas - but is it canvasnode? So things like that, where you swap the order of words. We consider that to be -- that's like one change. Even though technically a ton of letters are moving around, we consider that to be an easy mistake to make; so that's like a one cost change.

So once we do that and we figure out "Okay, these are all the packages that have similar names", then we say "Alright, are any of these a thousand times more popular than the one that you installed?" So it has to be vastly more popular. That's the current algorithm we use. Now, we're still tweaking it and improving it, but that seems to kind of work so far, and it catches all the stuff that we know for sure are typos. We're sort of just going with that and tweaking it as we notice more cases that it triggers false positives or false negatives... But it seems to work pretty well right now, that approach.

**Jerod Santo:** \[36:15\] How are you QA-ing that? Are you just doing a bunch of typos yourselves and trying to see how it works, or do you have -- I guess is Socket being used by anybody, where you start to get real human feedback, like "Ah, this is not a typo, sorry", and you can work that into your sample set, or what?

**Feross Aboukhadijeh:** Yeah, we're working with design partners, so like early customers that are using this on their repos. We have a bunch of different people using it - Brave browser, Expo (that's the React Native tool), repl.it, Passfolio, and a couple of other ones that I can't mention. One of them is an end-to-end encrypted messaging app that you may have heard of.

**Adam Stacoviak:** Okay... \[laughter\]

**Jerod Santo:** It's not Wormhole...

**Adam Stacoviak:** It's not Wormhole, exactly.

**Jerod Santo:** I can put the message in a file and send the file, and now it's a messaging app. Boom.

**Feross Aboukhadijeh:** Oh, no, no... It's not Wormhole... \[laughs\]

**Jerod Santo:** Yeah, yeah... You can't mention it, but it happens to be Wormhole, yeah...

**Feross Aboukhadijeh:** There are people that are using it, and they're giving us feedback. It's a thing we're trying to improve and get feedback on, because it is early. I mean, this is a new thing we've built, and we're just trying to see what people think of it, and what the right thresholds are for all this stuff.

**Adam Stacoviak:** And there's no tool out there that currently does this, right? Like, looking at the author changes or the contributor changes, looking at typosquatting type scenarios where you have, sure, a thousand ways to do it, but obviously, I would imagine similar to maybe the way Richard Hipp might answer it with SQLite - their sweet spot really is their test suite. So SQLite is open source, but the test suite is not. So I'd imagine that over time this test suite you have to test this algorithm for the typosquatting will probably be behind the scenes.

**Feross Aboukhadijeh:** Yeah. I mean, right now we're testing this through spot-checking it, and through really, really basic tests, and then just like reports from users... But building out our super-thorough test suite is definitely on our roadmap.

The thing is, we don't wanna ever block a developer, so even in the worst case where you do get a false alert from this, it's a comment on a GitHub PR, so it's not gonna stop you from -- you know, the goal is not to stop developers from doing their jobs; the goal is to just give you information that can help you make a better decision. Nobody wants to have a tool that stops them from doing their job, stops them from shipping code. We've gotta keep things moving, we've gotta move quickly. Nobody wants to install a tool that stops them from getting work done. That's why it's important to keep the bot really high-signal as well, because we don't want people to get annoyed with it and turn it off... So it's currently just stuff that's really high-signal.

**Jerod Santo:** So typosquatting I can see being high-signal, low-noise. Permissions creep is another thing you mentioned; new maintainers, or new permissions on maintainers for a project. That's the one that I brought up; to me, it seems like I couldn't possibly care less, until I do. So I'm curious, just the implementation of that one... Because that one seems like it's even more tenuous to get right.

**Feross Aboukhadijeh:** Yeah. So first of all, I should mention we have a website that you can go to to look up the results of the analyses that we have. So we have 70 of these analyses on there, and you can see exactly what they are. If you go to socket.dev and click on the issues tab at the top, you can see the list of things that we can find in packages. So we're actually running analyses of every npm package that's published, and looking for all these things. You can think of it like a linter kind of; it's sort of just like hunting down these issues. And then when we find stuff, we put it onto the page for that package. And then separately we have this GitHub app. And there's the question about what things do people wanna know about while they're on GitHub. So we don't necessarily take all the 70 things we find and put that into the app, because that would be a little too noisy. So this example we have about like a new maintainer isn't by itself an interesting thing. But if you combine that with -- well, also it seems obfuscated code was added in this version, right? So maybe obfuscated code being added, plus a new maintainer, plus eval being used. Maybe the three of those things rises to the level of "This is noteworthy, and this version may require some further investigation."

\[40:30\] And it kind of goes back to what Adam said earlier, where you have a limited amount of time to spend on vetting your dependencies. Right now people spend zero time on vetting their dependencies. The big companies, like Google, spend a ton of time and money vetting their dependencies. But for everyone else who's in between the two, that wants to do a little bit more than nothing, but doesn't wanna quite go to the level of Google, then having a tool that can point you to when a particular package has changed in a way that is suspicious, and potentially malicious, so that you can spend your time vetting that one dependency and looking at the diff for that one update. That's a good use of time. And then you can ignore the rest. You can say "The rest - no new maintainers, nothing interesting happened, the code hasn't changed in any significant way... So what's the big deal? Let's just update."

So that's kind of the idea... It's a balance. Factors like adding a new maintainer are not by themselves suspicious, I think, to warrant most people's attention... Although, again, for certain projects I could see them actually caring about that, a lot. So this needs to be configurable.

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** So we're working on a .socket.yaml file that you can use to configure exactly what things you wanna get alerted about, but we wanna have really sensible defaults for that.

**Jerod Santo:** So to give the listener an idea, if they're not going to socket.dev, if you search for a package that you use in any of your projects, it's pretty cool - it'll give you the readme for that project, as well as an overview of what it is, and then you all provide this kind of scoring system of 1 to 100 for supply chain security, how it rates for quality, maintenance, vulnerabilities, and licensing as well.

I plugged in umbrella.js, which we have on our site, which is like a lightweight -- it's like a 3 kb jQuery kind of thing, for those who still like jQuery style DOM manipulation, but in a light sense. It has a 76 for supply chain security; not great. Quality is high, 95. Maintenance is 50. I think it's probably kind of a done package; it has one maintainer.

So it's definitely a place where you can start here if you're just vetting dependencies that you're considering, right? But you don't have to use it in the GitHub app, AlertMe and open PRs kind of style; you can just use it as a source of information.

I'm looking at LeftPad... Oh, "Package is deprecated. Package has a non-OSI-approved license. Package has not been updated in more than a year."

**Feross Aboukhadijeh:** Yeah, you see the kind of alerts we find? So yeah, it's using apparently a WTFPL license... \[laughter\]

**Jerod Santo:** Low score...

**Feross Aboukhadijeh:** Yeah, it gives it a low license score, and that's a big red flag. And then -- yeah, it's also deprecated and hasn't been updated in more than a year. So those all show up as big alerts at the top of the page.

**Jerod Santo:** Yeah, that's pretty cool.

**Adam Stacoviak:** Yeah. There's a particular recipe for nefarious activity, and you're detecting -- like Jerod had said, he's like "Well, I don't really care if a maintainer changed necessarily." But like you had said, Feross, if you combine that with a recipe of potential nefarious activity, then you do care.

**Feross Aboukhadijeh:** Exactly.

**Adam Stacoviak:** A license change, or as you'd mentioned, maybe there's more permissions this time.

**Feross Aboukhadijeh:** Yeah, the permissions one is really big. If you look at a lot of the supply chain attacks... You have a package like UAParser.js, which is literally a user agent string parser. It doesn't need the file system, it doesn't need to talk to the network. It's a completely self-contained package. And then suddenly, this new version came out, that was downloading an executable file, and then running chmod to make it executable...

**Adam Stacoviak:** Wow.

**Feross Aboukhadijeh:** \[44:09\] That's a shell command, right? And then it runs the file, and then that talks to the network... So you have all these things, like shell, file system and network, that are in a user agent parser. That's like a pretty dead giveaway that something's changed here. Maybe don't update to this version quite so eagerly. So that's the kind of thing we wanna catch, and highlight, and draw people's attention to.

**Adam Stacoviak:** This is probably jumping the gun a bit, but how then do you scan all this open source? It must be an expensive activity. How do you do it? What's the process? Give us a walkthrough of how you pull down new code, pay attention to new code... Are you only paying attention to master or main? Is it simply a pull from GitHub? What's the mechanics?

**Feross Aboukhadijeh:** Yeah, so we have a pipeline that can do analysis tasks, and we feed in npm packages. We do this on every package published that happens on npm; so we have a program that's tailing npm, following all the publishes in real time. And then whenever a new package is published, we download the tarball, we save the metadata about it, and we then kick off our analysis job to give us -- to basically run all these tasks. We've written, like I said, about 70 of these analyses for a package, and so we kick that off. It runs, and it actually takes -- we're actually quite efficient. Each one is taking us five seconds or ten seconds for a package... And then packages might have transitive dependencies, so we might be doing this on -- however many things they depend on, we're gonna have to analyze those as well, because we don't wanna just analyze the top-level package. That's gonna miss anything nefarious that's added in a dependency of a dependency. So we run this on all of them, and then we save the results, and that's pretty much it.

We designed it in a way where we can also do this lazily. So we didn't need to sort of sit down and just crunch through in a batch job, we didn't need to crunch through the entire registry. So we actually have the capability to wait until a user visits the page for a package, or requests the score for a package, or does a look-up to actually then run that analysis, so that we can actually do it lazily if we need to.

So we're doing that now in some cases for the really, really not popular stuff. We're not gonna necessarily go and run an expensive analysis on all that stuff until someone looks it up, and then we'll do that in real time for that package.

And we've done it in a really cool way, where we actually built it as -- we did our own custom pipeline system. We didn't wanna use something like Apache Spark, which requires you to use Java, and is kind of slow and clunky, and has a little bit of latency for running these jobs. We did it with our own JavaScript pipeline that we wrote, and it actually can cache the intermediate results of these analysis tasks, so that you can build a task that depends on other tasks.

Say one task is like "Download the code for this package." You can cache that forever once you've done it. There's no need to download that tarball again. It's not gonna change. A version is immutable. And then you can have a task above that, takes in the tarball, and then untars it. And then you can cache that forever. And then you can have a task above that, that takes in the result of that and parses it into an AST for the JavaScript, and then you can cache that. So you can kind of construct these tasks can call into other tasks. But then when one sub-task is done, it may need to never be run again... Whereas like maybe the top-level analysis we're doing - that actually might change more often, and so we can change that freely without having to worry about recomputing or redoing all that work below, if that makes sense. So you can think of it like a tree structure, basically. So it's kind of nice. And then we can store these immutable blobs into a storage system that can store them forever. I don't know if that was too much information, but I think it's cool.

**Adam Stacoviak:** \[48:02\] No, it is cool.

**Feross Aboukhadijeh:** It's a cool advantage that we have with our design. It helps us run this stuff lazily, in real time, and not have it be too slow.

**Adam Stacoviak:** I'd imagine you wanna do it lazily until -- like, once people see Socket as a proactive security source, you may not wanna lean on lazily. So maybe while you're proving the model, start-up mode let's just say, that's okay. But in the future, once you become the beacon of light for security - which I believe will happen, because I believe in you, Feross, and I like what you're doing here - I think then maybe you throw lazily away. But maybe that's more venture capital, maybe it's a larger user base, maybe it's an acquisition, who the heck knows... But this is -- you're doing something that hasn't been done before. That to me - I think the recipe for nefarious activity is uniquely done here. And the way you think about end-to-end security, and the way you think about certain bits is just unique. So I love the fact how you just mapped it all out. That totally didn't make sense, but it also made lots of sense.

**Feross Aboukhadijeh:** \[laughs\]\]

**Jerod Santo:** I didn't completely track you, but I'm also over here just typing in package names, trying to find out how good my stuff is...

**Feross Aboukhadijeh:** Maybe my explanation wasn't very good...

**Jerod Santo:** No, no, no. I mean, I was half in, half out. That's my excuse for not following. This is super-cool... One thing I did notice is when you get to a package, it's socket.dev/npm/package. So as an information architecture nerd, I'm noticing there's like this npm subdirectory field going on, and I'm hoping that means you have future plans to expand beyond the JavaScript and npm world, and provide similar services for other ecosystems - Go, Rust, Ruby... Is that on the roadmap, too?

**Feross Aboukhadijeh:** Totally, yeah. The problem with supply chain attacks is not JavaScript-specific. It happens in all the ecosystems. It's just that usually JavaScript experiences the problems that other ecosystems experience, but a couple years earlier. JavaScript is just a little bit bigger, and a little bit more chaotic, and it has more beginners in it than other ecosystems, because there's so many newbies always learning and joining... So it ends up kind of hitting the breaking points a little bit sooner than other ecosystems, so that's kind of why we started there. Plus, I like JavaScript, so I wanted to start there.

**Jerod Santo:** Sure.

**Feross Aboukhadijeh:** But we're gonna do all of them eventually. Honestly, Python and Rust are at the top of my personal list. But there's a lot of people asking us already if they could use it for Java at work, or Go... So we'll see what we prioritize. I guess if you're interested in using this for a different language, and you wanna reach out and let me know which one you really wanna see, we can maybe use that as an input to decide what to prioritize.

A lot of the stuff around the maintainer behavior, that stuff we can apply pretty directly to other ecosystems. But the specific static analysis for each language is gonna need to be redone. So there's a little bit of work there, but we can do it.

**Jerod Santo:** Yeah, I imagine each new language will be a separate lift, with some separate tooling, and analyzing, and usually in tools and languages that support that given ecosystem. You'll probably have a diverse set of skills and/or engineers by the time this thing is worldwide and global.

**Feross Aboukhadijeh:** Yeah, we're gonna need -- there's a lot of work to do, that's for sure.

**Jerod Santo:** Are you up for that? I mean, that sounds like a huge undertaking.

**Feross Aboukhadijeh:** Yeah, but I think it meaningfully makes security better. I think we need a mindset shift in the industry for how people think about their dependencies. Dependencies are not this magical thing that you can just show up and use as many as you want and there's no downsides. It's not this infinite buffet of open source that you can just take and there's no costs to it. Eventually, you will pay a cost for it. It's not a matter of if, it's a matter of when. And I think that automatically looking for changes in a package that are nefarious is a very low-cost, no-brainer thing to do to help with the problem.

\[52:20\] So yeah, I don't think that there's really anything better than this that I could be working on to improve the security of the ecosystem. I mean, what else -- yeah, I just wanna make a difference and make this stuff more secure, and I'm trying to think what... I wish that we could all just agree on the best packages to use, and we could vet those, and we could bless them and call them a standard library that we just use, but with 1.8 million packages on npm, and millions more on all these other languages, it's just too much. We're not gonna ever be able to read it all, so we need tooling to help us.

**Adam Stacoviak:** And when you involve a human in this scan analysis, it's fraught for error. It's going to happen. Like we said with reading a certain sentence. You can read it without the vowels in it, and things that happen when an individual sits down and reads a bunch of code - it's too large of an undertaking to read the code that was produced today, let alone tomorrow and the next day and the next day. It's just not gonna happen from a human perspective. But I think what's quite beautiful though is how this came out of Wormhole, where you had this mission to be security-minded, you vetted your packages - or lack thereof - very aware of your security footprint.

And to desire a tool like this, and for it to not be in place, for you to then build it... And I don't know which one will be bigger; I have some bullish ideas about Wormhole itself... I'd love a better Dropbox. I love Dropbox, I think they're great, but I think that they've sort of gotten -- I don't even wanna call them lazy by any means; I think there's a bunch of great people working there, so I don't wanna belittle their work by any means... But I feel like there could be some good directions for the project and they kind of lost their way. And this idea of end-to-end security and what you could do with Wormhole really impressed me and piqued my interest... But I'm wondering if because of just simply the size of Snyk for example, hundreds of millions of dollars in venture capital raised, billion-dollar company from when I last checked their valuation... I mean, that's the kind of potential that you have here with Socket. I think when Jerod said "Are you ready for that?", are you ready for that, too? Because if you keep going this direction, that's what's going to happen.

**Feross Aboukhadijeh:** Yeah, it's a huge opportunity, for sure. I mean, I don't think Snyk solves this problem today. They just do vulnerabilities, and we need to actually look at what's inside the packages and go beyond that. So yeah, I would love for this to be the next Snyk. I think we're on the track to do that. I think if people want to be early adopters and use this in our current form, then we'll grow into a complete solution eventually, that will compete with Snyk and do the job better. Right now it's very focused on this thing that we do differently, that's uniquely differentiated. We actually analyze the package and look for these issues in the code of the dependency, and tell you whether you need to worry about the dependency or not... But eventually I think we'll grow into a full thing and do all the stuff that a solution like Snyk does.

**Adam Stacoviak:** Sure.

**Feross Aboukhadijeh:** But yeah, it's gonna be a journey, for sure. I think we wanna keep -- we'll keep working on Wormhole as well, but I definitely think Socket, this security thing is a bigger solution, because it's a problem that every company has...

**Adam Stacoviak:** Mm-hm. The world at large.

**Feross Aboukhadijeh:** ...the world has, yeah. And it's something that I feel like we're uniquely suited to do as open source maintainers and developers ourselves. It's like a rarer set of understanding and skills that it takes to build something like this well. I think a lot of the tools that you see in this space are made by these outsiders that come in like "Oh, we're gonna tell everybody how to do security", and then they kind of impose this top-down tool on everybody, on all the developers, and kind of tell them how it's gonna be, and no one likes to use it, and it's annoying, and there's all these false alerts, and stuff...

We as maintainers ourselves building this kind of understand the burden of all this stuff, this tooling, these false reports, and all this stuff... And we know what developers wanna use; we're developers ourselves. So I think we can really build something that's good here, and really meaningfully improve security for people.

**Adam Stacoviak:** \[56:25\] Touch on that then. What's the adoption story? If someone's listening to this and they're like, "Okay, fine, Feross, I believe in you. I believe in what's going on here." And maybe it's just JavaScript at the current timepoint, so npm packages... What's the adoption story? Walk us through that.

**Feross Aboukhadijeh:** Yeah, so Socket is super-easy to use right now. You go to the website, you click Install the GitHub App, you select the organization or the repo you wanna install it on, you click Install. You're done. That's it. So it's really easy. There's no configuration files... I made StandardJS, so I'm a fan of no configuration by default. So it's really easy to get started.

Once you install the GitHub app, it will monitor your package.json file for changes, and any pull request that adds a dependency or updates a dependency will analyze that, will figure out what exactly is changing, and will tell you in a comment on that pull request anything you need to know. Primarily, we're starting with these typosquats today, but we're adding more and more of the 70 detections that I mentioned earlier into the bot, as we're confident that they're not gonna be noisy.

So we're starting with typosquats, because those are rare and they're always important to see, and there's never really a case where you don't wanna see that you may be installing a typo... But some of these other things we've talked about - we're integrating those into the GitHub bot over time. So if you install this today, over the coming weeks it will continue to grow and support more and more types of supply chain attacks that it can detect and stop. So that's kind of the plan there.

**Adam Stacoviak:** What about price point?

**Feross Aboukhadijeh:** So it's totally free for open source repos. And then for private repos it's also free right now, but I think eventually we're definitely charging for that, because that's sort of the model that a lot of these tools use - if you have a private repo, we wanna charge you for that. So we want it to be something that everybody can use and be affordable. I think we'll probably even do a thing where if you have five users or less, then you just also get to use it for free, even if it's a private repo, just because we want small teams to be able to use it.

But if you have like 30 people working on a private repo together, or hundreds or thousands or whatever, then you definitely will have to pay for it eventually. That's the plan.

**Adam Stacoviak:** So business model pending, basically. There's some thoughts and inroads, but business model pending.

**Feross Aboukhadijeh:** \[laughs\] No, I think we like the model of -- do you remember Travis CI? Everyone's kind of switched to GitHub Actions these days, but I really like this model of free for open source, and paid for private. Because it encourages people to open source stuff as much as they can, and it really charges the people who can afford it, and it gives it away to the community. I really like that model for pricing, and I think that's kind of what we'd wanna do.

**Jerod Santo:** It makes sense, because if you're going to be working on something privately, it's probably proprietary software that you're making money off of... So you can pay some money to make some money. But if you're willing to open source it and let it be in the world, or if it's for other people, as well as yourself, then it's open source already, and it's free in that sense. So I think it scales alongside usually the way people make money with software... So I think it's a good model.

**Adam Stacoviak:** I think I should clarify pending then... Because instead of pending I would have probably used "still in the works", still working out how it will actually play out in terms of the metrics and heuristics. It's mostly in place, but not so much pending, so I take that back. Thought through, but more work is happening.

**Jerod Santo:** Any active business is probably working on their pricing at all times, right?

**Feross Aboukhadijeh:** Yeah, I feel like early startups basically always change their pricing every 3-6 months in the beginning, because they're just trying to figure it out.

**Break:** \[01:00:08.24\]

**Jerod Santo:** So up until Wormhole all of your projects your entire life have been open source projects. Wormhole was when you shifted strategies a little bit. You talked about that on JS Party. I'm assuming since Socket is a startups as well that you're keeping this one closer to your chest... Or is Socket going to be open source? What's the story with Socket itself?

**Feross Aboukhadijeh:** Yeah. We're gonna open source as much as we can of the application, but I think we need to have some part of this be like a server-side component that -- because we're doing this analysis on the full npm dataset, and it's like 15 terabytes of metadata, and in order to actually look at the maintainer behavior and figure out what's going on across all this metadata, we need to do some of this on a server, with access to the full dataset.

We're gonna make APIs for all this stuff and make it available, but there's just no way you could do that locally. So that's the kind of stuff that there's not really an easy way to open source that and make it actually useful to people.

But then there's other stuff that we can open source, analyses that you can run on a package locally, and we'll try to open source as much of that as we can. But yeah, for now it's primarily all this processing happening on the server-side. So you know, it's an API we'll provide for free to people... But yeah, the code is proprietary.

**Adam Stacoviak:** Are you hiring?

**Feross Aboukhadijeh:** Yeah, definitely hiring. We have a team of --

**Adam Stacoviak:** Always?

**Feross Aboukhadijeh:** Yeah, we have a team of five right now. It's really cool. It's all open source maintainers. We're working with really cool people, it's awesome. We have just different Node maintainers that you might know. Mikola Lysenko, Bret Comnes, Alex Morais, who’s a co-maintainer with me on WebTorrent, and then John Hiesey who also did WebTorrent and Browserify. So yeah, a pretty cool crew. I think collectively we have like a billion npm downloads a month, or something crazy like that.

**Jerod Santo:** Nice.

**Feross Aboukhadijeh:** But you know, npm downloads are all inflated anyway; they're all just CI bots triggering it...

**Jerod Santo:** CI bots, yeah, pretty much...

**Feross Aboukhadijeh:** \[laughs\]

**Jerod Santo:** But it still feels good.

**Feross Aboukhadijeh:** It sounds good. It feels cool, doesn't it? \[laughter\]

**Jerod Santo:** That's a JavaScript developer's badge of honor, is their npm downloads number.

**Feross Aboukhadijeh:** Yeah, it's super-funny how many of those are downloads from CI bots. I would say it's like 100x inflated probably... What do you think? Or 1,000x maybe.

**Jerod Santo:** I think 100x is fair. I wouldn't be surprised if it's 1,000x, but I think 100x is definitely in the order of magnitude. 10x is not enough. 10x doesn't do it. But still...

**Feross Aboukhadijeh:** Yeah. I think even if you just publish a package and no one downloads it, you automatically get like 500 downloads, just from all the --

**Jerod Santo:** npm just hands them out like Oprah Winfrey. "You get 500 downloads! You get 500 downloads!" \[laughter\]

**Adam Stacoviak:** "You get a download! You get a download! You get a download!"

**Jerod Santo:** Just publish a package and just get 500 downloads for free.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** Hilarious.

**Feross Aboukhadijeh:** I mean, part of that is us; we're downloading every package, so we're adding to that number, right?

**Jerod Santo:** Yeah, exactly.

**Feross Aboukhadijeh:** It's actually a lot of worker servers that are running now, that are chugging through all these packages. We're trying to do what Adam said and pre-process as much as possible, so we can proactively catch issues. So we're still scaling that up right now... Right now it's hybrid. Some of it is pre-done and some of it is lazily --

**Jerod Santo:** So do you have a stash of cash that you're just burning through as you run these EC2 instances, or wherever you're running your backend? Are you just spending money right now, or what?

**Feross Aboukhadijeh:** It's not too bad right now. We're spending -- it's in the thousands of dollars per month on hosting... But yeah, it's not like totally gonna bankrupt us in the short-term.

**Jerod Santo:** \[01:06:20.04\] Okay.

**Adam Stacoviak:** Could you future-cast for us a bit?

**Jerod Santo:** I was gonna ask that...

**Adam Stacoviak:** What would happen -- let's see if our questions are the same then, Jerod, so you can have your own future-cast if it's not.

**Jerod Santo:** Okay.

**Adam Stacoviak:** When you move from JavaScript to other ecosystems, what would happen to make you feel like you're going the right direction to take on Rust, Go etc?

**Jerod Santo:** Python.

**Adam Stacoviak:** Python.

**Feross Aboukhadijeh:** What do you mean by that?

**Adam Stacoviak:** Well, what would happen between now and then so you've got some assurance that you're going the right direction? What would happen with the platform to make you feel like "Okay, now is the right time to take on the next ecosystem"? What would have happened?

**Feross Aboukhadijeh:** Yeah, I think I'd rather focus on doing one ecosystem super-well and trying to be the best at JavaScript before we go on and just try to do breadth for breadth's sake. Right now we're doing all this stuff in JavaScript that no one else is doing, we can catch all these issues, we're looking at all this stuff in a way that none of the other tools are... But I think there's even more we could do in JavaScript land, even before we move outwards to other languages.

There's so many things you can do with taint analysis, and analyzing data flows through these modules... There's a lot more complicated analyses that you could do. And some of this stuff is really gonna help unlock catching even more issues in the future.

**Adam Stacoviak:** Well, all software has licenses though. You have licenses, you have maintainers, you've got certain things that are at large open source, regardless of the ecosystem, right? Maybe there's a way you can carry a certain feature set for everyone, but maybe you go deep on JavaScript, but surface on a majority.

**Feross Aboukhadijeh:** Hm... Yeah, there's definitely a lot that is an overlap. A lot of the stuff around repository health is reusable. Stuff like "Is the package maintained? Does it have a security policy? How are the maintainers doing? Are they active, are they inactive? What's the health of this thing? Is it published by a trusted source? Is it a typo?" All that stuff is pretty reusable, that's for sure. Yeah, that's true.

**Adam Stacoviak:** That's why I asked that question, because I see this as being highly useful, and it does give me pause to hear you say you wanna go deep on one particular ecosystem right now... But I can understand why. I can understand your desires for it. But that almost reminds me of perfection versus progress kind of thing... So if like progress is sort of like a base layer for all open source, and perfection would be going deep on JavaScript. I could be wrong.

**Feross Aboukhadijeh:** I guess what I mean is I wanna make sure that it's useful to people before I move on and try to sort of boil the ocean. So it doesn't necessarily mean that we need to have the same feature set in all languages. You're totally right, it's probably better to provide some value to people who write Python, or Rust, or whatever language, rather than just telling them "Sorry, come back later." But I wanna make sure that what we've shipped in JavaScript is really solid first. So that's kind of what I meant. We're still taking feedback from people who are using it and making sure that the signal to noise ratio was right, and we're still adding these new detections to the GitHub bot... So we still have a little ways to go in JavaScript before we get into those other languages later this year.

**Jerod Santo:** I think if nothing else, it will be a useful operational structure of your business as your engineering team grows, to break out based on language support. So at a certain point -- I mean, you have all JavaScript devs now, so at a certain point you could easily say "Well, here's our team that works on the npm ecosystem. Here's our team that works on the Python ecosystem."

\[01:09:50.26\] Did you say that that feature where you're detecting like "Hey, this package now has IO that it didn't have, or it now has network requests that it didn't have" - is that done and baked, it's in there, or is that something you're working on?

**Feross Aboukhadijeh:** That's something that we're working on for the GitHub app. So that's not quite ready yet.

**Jerod Santo:** Stuff like that I don't think is going for perfection; I think that's going for like "This is how we are different than other people."

**Feross Aboukhadijeh:** Correct.

**Jerod Santo:** That's super high value, and I think that's like depth first versus breadth first, as opposed to trying to make it perfect. So I think you're on the right track there... Because I think the other stuff is nice, and I like it -- especially, I really like just browsing the website and just vetting different packages, because it just makes me feel smarter than I used to be, to be like "Wow, now I know about this." It's kind of like when maybe your son or daughter brings home a potential suitor, and you're thinking like "Okay, what's up with this fella/young woman?" Maybe I'll ask their parents, maybe I will run a background check, maybe I'll see what their stance is on some things... It just feels like you can just vet a package and have a better idea in an instant. It's super-cool.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But I think that ongoing stuff, as long as it's not too noisy, of letting me know like "Hey, you have this charting library in your package, and all of a sudden it's calling to a third-party it didn't use to yesterday, but now it does" - I mean, that's the kind of stuff that really saves your tail.

**Feross Aboukhadijeh:** Yeah, and we've found surprising instances like that already. There's a package called Angular Calendar which does -- it's a calendar widget for your website to pick a date... And it does a bunch of stuff you wouldn't expect, like shell scripts, file system, network access, install scripts... And when I saw that, I was like "What is going on? This is a web component. Why does it need to run some shell commands on my computer when I install it?" So I got really suspicious about it. And the cool thing is when we find these alerts, we actually link you directly to the line inside the package that triggered it, so you could see what exactly it's doing.

**Jerod Santo:** Was it legit?

**Feross Aboukhadijeh:** It wasn't outright malicious, but it was definitely worth pointing out what it was doing.

**Jerod Santo:** \[laughs\] It wasn't the best idea ever... That kind of a thing?

**Feross Aboukhadijeh:** Yeah, it's --

**Adam Stacoviak:** It can reduce your trust in the package, really, more than the security issue.

**Feross Aboukhadijeh:** I'm really conflicted about it, because it was -- so it uses this dependency that does analytics for the maintainer to figure out who is using their package, and they're gathering information about the environment that the package is running in, basic information about the --

**Jerod Santo:** Controversial take... We know Homebrew went through a big ordeal when they added that kind of a feature...

**Feross Aboukhadijeh:** Exactly, exactly. So it's a useful feature for the maintainer, but I would say it's a little bit invasive, and I could see how some people wouldn't want to do that, so they would wanna know there's a way to opt out, or they would wanna know the package may reach out to the network and do this kind of network request.

So I would say our tool served its purpose, it pointed out this to use, and we could look at it and decide for ourselves if this calendar widget is something we wanna use in our app or not. But I feel conflicted, because I also want maintainers to get paid and to know who's using their package, so they can know who to reach out to... So it's one of these things where every company is gonna wanna make their own decision about "Do we allow this in our company? Do we wanna allow packages to do telemetry or not?" That's something actually down the line that I think we could support as an additional feature - setting a policy for your organization, like "Do you allow packages to do telemetry? Do you allow packages to use install scripts or not?" and enforcing that, so that a random developer at your company can't necessarily go in and just add something that is against the policy of the company. So it's like a linter for your dependencies, basically.

**Jerod Santo:** Well, can I do my future-cast now?

**Adam Stacoviak:** Yeah. Was mine the same as yours, Jerod, or what?

**Jerod Santo:** No, slightly different, so I'll ask it.

**Adam Stacoviak:** Okay.

**Jerod Santo:** So walk five years down the road, turn back and look. You've got Wormhole, and you've got Socket. Which one's bigger? Which one's more successful?

**Feross Aboukhadijeh:** \[01:14:01.14\] I think Socket.

**Jerod Santo:** Why?

**Feross Aboukhadijeh:** Well, I think because it's enterprise software, it's just a lot more straightforward what to build next, because you have customers that are telling you what they want... And so I just think that' a really nice thing about building something for paying customers, instead of for -- I guess consumers can be paying, but it's a little different when you're going for scale, and you're going for mostly free users. So I think I just have a little bit more -- not a little bit; a lot more confidence that Socket is gonna be the...

**Jerod Santo:** The bit hit. So let's imagine a world where you're correct and Socket is a big hit. Does Wormhole just -- do you kill your darling? Does it go by the wayside? Do you open source it? What do you in that world? Do you keep a team working on it for the love?

**Feross Aboukhadijeh:** Yeah, I think we're definitely gonna keep working on it. I mean, like I said, it has hundreds of thousands of people using it every month, so there's no reason to shut it down. It's not that expensive to run, because most of the data is peer-to-peer. We store the files for only 24 hours... You know, the end-to-end encrypted files, we store them for 24 hours, so the data cost is pretty low. So there's no reason to not continue running it.

If we were to consider shutting it down or whatever, we'd definitely open source it before we did that. And we might even open source it anyway, just proactively, because it's a thing -- it's useful for people to be able to run their own instance of it, or whatever... So we're thinking about it. It's just a matter of time; someone has to go and do that. And then there's the burden of pull requests, and issues, and then you've gotta run a community...

**Jerod Santo:** Yeah, totally.

**Feross Aboukhadijeh:** ...so that's kind of the other thing in the back of my mind; I don't necessarily want another thing to maintain.

**Jerod Santo:** The other part of open source.

**Adam Stacoviak:** What about how much attention you can give to things happening in your life? At some point you've got a certain amount of RAM to devote, and focus is a super-power.

**Feross Aboukhadijeh:** By the way, the other thing I wanted to mention - if you're poking around the site, another thing you might wanna look at is... If you go to the footer, we have this cool page called Removed Packages. I don't know if you saw that...

**Adam Stacoviak:** I did. I tried to look at it.

**Feross Aboukhadijeh:** Yeah, the UI is a little iffy on it, but what it does - it's really interesting. So remember how I said we save every package that's published to npm as soon as it's published? Well, what you can do if you do that is you can actually then see when npm takes down a package, it actually gives you a nice way to highlight the sketchy packages. So you can just see what are they taking down, and then you've already saved a copy of it.

So if you poke through our site there, you can actually see examples of malicious packages that npm has taken down... This is stuff that could have been reported by anybody, or maybe they even take it down proactively... But you just see the amount of stuff that's on there. It's like thousands of things. Some of it is spam, some of it is malware, some of it is pentesters... Some of it is just completely obfuscated blobs of code. It's like, who knows what it does; you can find all kinds of interesting stuff poking around through there. So yeah, if you're curious, it's really interesting to just click around and see what's in there.

**Jerod Santo:** I'm doing it right now. I'm distracted looking at this feature... This is pretty cool. Especially for people who are just curious what's going in. Airbnb-fejax has a bunch of versions, now they're all gone... It looks like a package.json and a distribution folder... And yeah, some real shady code in there, it looks like... Okay...

**Feross Aboukhadijeh:** If you go into the Dist folder, you can see what it's doing. Sometimes you see these ones that have company names in there, package names, and that's a dependency confusion attack. That's where a company has their own internal npm packages that they publish to their own private npm registry inside their company, but then if they don't register that same name in the public registry, then an attacker can go and publish something there, and then if their tools aren't careful, they may accidentally install the public version instead of the private version. So the attacker can use that to basically get code into the Airbnb app, in this case. I don't know if that's exactly what happened here, but usually these company name ones are something to do with that.

**Jerod Santo:** \[01:18:09.21\] Yeah, this one's certainly some kind of an Ajax wrapper library that allows you to do some sort of Ajax calls. I don't see anything immediately that's like "Oh, and now it's phoning home here" or doing anything, but I'm also just scrolling through the code, so... Some of these things are harder to see, but yeah, it definitely seems like it's attacking what is a real Airbnb library.

**Feross Aboukhadijeh:** Oh, I already see the part where it "phones home" here. It's kind of obfuscated...

**Jerod Santo:** Where is it?

**Feross Aboukhadijeh:** At the bottom of the file there's a this.fetch line, and you can see xml http request. I don't know if you clicked the same version as me, because there's multiple versions of this... But it's sending some data.

**Jerod Santo:** Yeah, I see a few fetch calls there. I do see the one at line 278, but now we're getting way deep into the weeds on this file.

**Adam Stacoviak:** Let me pull us out of the weeds a little bit then. So what you're doing with Socket is not prevention, it's awareness... Because I'm looking at the post you shared with us as part of your thesis for pitching this show to us, and it's like, colors in faker, breaking thousands of apps, library hijacked to steal user passwords, crypto mining installed... So you're not gonna prevent those things, you're gonna make the open source users, the devs, aware of what's happening in their repos. You're not - at this point in time at least - preventing. That's npm's job.

**Feross Aboukhadijeh:** No, I don't think so. Obviously, it is npm's job; I'm not disagreeing with that part. But I think npm historically hasn't been able to stop these things before they happen... All these attacks, October and November, January, the ones we've talked about - they were all on npm for hours before someone caught them and took them down... And if you look at research that was published last year in various security conferences, they find the average malware is on npm for 300 days before it's taken down.

So for whatever reason, npm is not taking this stuff down quickly. In some examples they do take it down within hours, if it's like a really big package and people find it and all this stuff... But there's so many instances where it lasts on npm for a little bit longer than hours. So I would love for them to be able to do this stuff faster, and I'd love to work with them. If we find stuff, we're definitely reporting it to npm and getting it taken down for everybody...

**Adam Stacoviak:** Sure.

**Feross Aboukhadijeh:** But I think there's definitely a space for Socket to actually prevent this stuff. Because if you're getting a Dependabot pull request, let's say... Dependabot is trying to update you to some new version that just came out yesterday; it's very easy to look at that PR and say "Okay, my tests pass, the changelog looks pretty good, it looks they've fixed some bugs... Let me go ahead and just click Merge." That's what I do. That's pretty much what I've always done. "It's probably fine. The changelog looks good, the tests pass..."

**Adam Stacoviak:** Trust the system.

**Feross Aboukhadijeh:** Yeah, trust the system. Click the green button, right?

**Adam Stacoviak:** Sure.

**Feross Aboukhadijeh:** And what Socket could do in that instance is it could tell you "Before you click that green button, there's a comment here we posted that says "Hey, this package is now doing X, Y or Z." And that might make you think twice before you click the button if it's something --

**Adam Stacoviak:** But that's still awareness though.

**Feross Aboukhadijeh:** Yeah.

**Adam Stacoviak:** It still lives on npm. That's what I mean by awareness. Because my original question before I even asked it, I answered it in my own head, which is "Okay, if you've got this list of nefarious things that have happened out there, does a future with Socket in it prevent them?" And my initial answer is probably no. I just know what you've described, what you're doing so far. It's more of an awareness to developers before they clicked the green button and integrate, or install a package etc. It's not a prevention system; it's going to live on npm, you're not preventing it from existing, but you may have tooling that npm can use as prevention. But so far, you're awareness.

**Feross Aboukhadijeh:** \[01:21:59.09\] Yeah, I think that's fair. Yeah. I think we wanna get to a place where we're actually sending our insights to them in real-time, so that they can take stuff down and you don't have to use the Socket GitHub app to be protected. Because you are right, if we do flag something as being a suspicious update and we warn people, the next step is --

**Adam Stacoviak:** Broadcasting that.

**Feross Aboukhadijeh:** ...broadcasting that information, exactly. And we don't want 20 different teams to all get the same comment that says "Hey, maybe you should look at this update." Someone should just look at that update and say "Oh no, this is actually bad" and then block it for everyone using the GitHub bot, and also get it taken down from npm in parallel. So that's kind of where we need to go to, is to be able to make everyone duplicate all this work.

But in the meantime, obviously, we wanna still give people the tools to see these suspicious updates and do something about them on their own... But there is an element - eventually, we're gonna wanna not have everyone duplicating that work, and we're gonna wanna just kind of summarize it for them and say "Yes, it's true that this package everyone uses, like React, is now doing a new thing... But we already looked at it and it's fine." So for most people, we could suppress that and not bother them with it if it's something we think is expected.

**Adam Stacoviak:** Yeah. I almost imagine a world where there's a future with you having a team that maybe does that on an ecosystem's behalf. Maybe one, three, five... A small team. I'm not sure how big the team needs to be. I'm not trying to describe your company or how you should hire or grow... But I can imagine at some point these threats become so important to broadcast and to potentially prevent, where maybe now you're sort of in the awareness arena, but you could skew into the prevention, and a more corporate prevention, rather than just simply an individual team awareness piece, where you can have that alert bubble up... Maybe it's to an internal team initially, and you have them do some of their deeper analysis, things you don't wanna -- this is their noise to deal with, that turns into signal for more people. So you can have sort of a higher signal threshold on a user basis, because you've got an internal team dealing with the noise, potentially.

**Feross Aboukhadijeh:** Absolutely, yeah. Absolutely.

**Adam Stacoviak:** Well, I'm excited, Feross. I'm always excited for your mad science activities. I think what you've got going on here definitely gives me hope. I think what you're doing here certainly gives us, I would say, a sound footing on open source. If open source has one, which it has, and if open source enables two people to build a potentially billion-dollar company, or in the future the ten people can do that, if that finally comes down to that number, then open source is totally a part of that. And securing that commons is a great endeavor, and I applaud you for doing it. I'm so glad that you've -- you know, through all the iterations of your skillset in your career... I know you don't see yourself like that, and maybe you wanna self-deprecate, but let me just say - I know Jerod shares my feelings, too - that we believe in you, we think you're awesome, and we think you're doing something cool... And I'm so excited for Socket in the future. So don't stop, keep going.

**Feross Aboukhadijeh:** Yeah, you guys have always been the most supportive, so it means a lot to hear that, and always get your encouragement and support on things. Yeah, I think that we're on to something special with this, and I definitely wanna help make the whole ecosystem more secure for everybody. And I think it's important for the future of open source, too. If this stuff keeps accelerating as it has been, I think the trust will suffer and we're just gonna get to a situation that's untenable eventually... So it's better to be proactive about that and do what we can now.

**Jerod Santo:** Well, we talked about how many downloads there are, per download. But think about how many vulnerabilities there are per vulnerability that we know about, right? How many exploits there are that we don't know about... And tools like Socket are going to help us know about those things faster, sooner, better... And I agree, it has to happen. It's getting more and more dangerous, the stakes are rising. $20,000 for an exploit -- that wasn't even an exploit; for a password that will get you the keys to the kingdom... I mean, serious money getting thrown around, state actors... It's never been more serious of a game, so I'm thankful we have you on our side, Feross. You're out there fighting the good fight for all of us, and I also hope you have lots of success with this.

**Adam Stacoviak:** I agree. Feross, it's been awesome. Thank you so much.

**Feross Aboukhadijeh:** Yeah, thanks, guys. I really appreciate it. It's been an honor, as always, to be on your show.

**Adam Stacoviak:** Thank you.
