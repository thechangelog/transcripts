**Nick Nisi:** Hello, party people! Welcome to JS Party. I'm your host this week, Nick Nisi. Ahoy-hoy. And with me, as somewhat regularly, always, is Amal. Amal, how's it going?

**Amal Hussein:** Hi, everybody! Happy to be here. Excited to learn about passwords.

**Nick Nisi:** Password...

**Amal Hussein:** Gotta get rid of a lot of password and passwords in general. It means I've gotta get rid of a lot of post-its in my house.

**Nick Nisi:** \[laughs\] Send them my way. But to talk about passwords, and specifically a singular password, or 1Password, we have some members of the 1Password team here. First off, we have Mitch Cohen. Mitch, how's it going?

**Mitchell Cohen:** Hey! It's going awesome. Thanks, guys.

**Nick Nisi:** We're excited to have you. And with us as well is Andrew Beyer. Andrew, how's it going?

**Andrew Beyer:** Hi! I'm Andrew, I'm here to... Party?

**Nick Nisi:** You've gotta tone that down, I'm sorry...

**Andrew Beyer:** Okay, I'm gonna tone it down. Gosh...

**Nick Nisi:** \[laughs\] Despite the party in our name, we're very serious.

**Andrew Beyer:** I see, I see, I see...

**Nick Nisi:** No, we love to have a good time, and we're very excited to have a good time with you, talking about passwords. And specifically, 1Password, and the product that you work on. It's a product that I have used I think since I got a Mac, probably in 2008. I don't know if the company has been around that long, but around that time. And it's been the holder of my deepest secrets for a long time. So I'm really excited to talk to you about 1Password and where we're going. I guess we have to start it off with why you're here on a JS Party/JavaScript podcast, talking about 1Password, which has traditionally been the Mac and iOS app that I know and love. So why are you here, talking about it on a JS podcast?

**Mitchell Cohen:** We made a new version of our app, which we do every once in a while. And when we do that, a lot of people wanna talk about it. And sometimes the reasons people wanna talk about it are different from why they wanted to talk about it last time; I think that is the part that's the most relevant to your question.

**Amal Hussein:** Well, actually, before we get into 1Password, can we just do little intros? Mitch and Andrew, what are your roles on the team, and what do y'all do or not do?

**Mitchell Cohen:** Totally. So we're both kind of all hats. I've been at 1Password now for 7.5 years, back when it was just a handful of people. I knew them all by name. And I joined actually as customer support, and kind of had a whole mini-career at 1Password. I'm now a product director, and I've been through the highs, the lows, the fun parts, the crazy parts, and I'm just so excited to be here to talk about yet another interesting chapter in the life of 1Password.

**Amal Hussein:** \[00:04:17.09\] That's so cool. You know, people that come with a customer support background - they make the best engineers and product people... So you must be really, really good at your job, because you have that heavy user empathy.

**Mitchell Cohen:** Apparently. This story happens a lot, by the way. We have a ton of people who joined to do support, and then took on roles in the company, and that's actually true for Andrew Beyer as well.

**Andrew Beyer:** I am Andrew Beyer. I've been here, at 1Password, almost five years. I actually come from a background -- I've spent almost a decade in the United States Army, working on communication security, and some air and missile defense... And I've joined 1Password for two reasons. One was I had been using the app, I had been using 1Password for like 13-14 years now; I've kind of lost track at this point. So I really wanted to work at this company where I really did enjoy the product. It was super-useful to me when I was in the military. You know, you deploy overseas, you'd have to use some public computer, and you couldn't install apps or anything, so I had my (I don't know) iPhone 3GS or iPhone 4, or something, with the 1Password app running on it, and I would be able to get my password and actually use the internet.

But I joined 1Password because I loved the product, and I was at the time looking for a remote job. I know now everybody just knows what remote work is like, but I wanted to do the digital nomad lifestyle, and I had gotten sick of not moving around in civilian life, so I was like, "Oh, I'll join this company and I'll be able to travel the world", which didn't quite pan out the way I wanted, but working at 1Password has been really awesome.

Currently, I am in charge of our browser experience engineering organization, so ultimately in charge of the browser extensions, everything about filling and saving on the web, so I get to run the teams that deal with all of the web developers out there who wanna make login forms and credit card forms differently, and then we're starting to expand some of that reach into our web client as well, so how you use 1Password as a web client.

**Nick Nisi:** Do you find that web developers are just finding fantastic ways to break your work?

**Andrew Beyer:** Yeah, we used to joke around that there's only a couple "bad" web developers, and they just jump from company to company and copy and paste their login forms, and put it somewhere else... But to be honest, you'd be surprised. Even in the five years I've been here, the web standard and web design and a lot of web technologies have gotten so much better. Nowadays there's HTML autofill attributes that help password managers and help your browser understand more about your form, and I'd be happy to teach a class or talk about that more, but I know that's not quite the reason why we came today, so...

**Amal Hussein:** So cool. Yeah, so before we get into some of the changes around 1Password, and you've made some exciting architecture changes, like moving to Electron, which is like a Chromium/Node kind of desktop app support system... I don't even know how I could describe Electron in a sentence. But before we get into that, can you explain to us a little bit about how 1Password works? What is it exactly, how is it secure, and how do you guys protect yourselves from data breaches? Because you're the company that has everybody's passwords. How does that even work in terms of your security management? If you could give us a little overview, that would be awesome.

**Mitchell Cohen:** Absolutely. So at its heart, 1Password is a password manager, and it's since grown to become kind of like an everything manager. Anything you need to keep secret, you need to keep safe. You can put it in 1Password and trust it'll be safe there. And in the past few years, it's expanded to become actually sort of a collaborative version of that. So not only can you keep your secrets in there, you can also share them securely with other people who need access to them. That's been a major focus of us as we've sort of grown out the product.

\[00:08:08.08\] And the thing that keeps it safe is something that's actually been in the news a lot lately, which is this concept of end-to-end encryption, where regardless of who we are, our relationship to you, we don't have access to the secrets you put in 1Password. We don't even have access to the security keys you would use to get access to those secrets. And as long as that remains true, effectively you can't attack 1Password to be able to get access to the data that people keep in 1Password. We're very proud of that, and that's been fundamental to everything we've built for decades now, and it will be going forward as well.

**Amal Hussein:** That is so cool.

**Andrew Beyer:** Yeah, the story I like to tell is a lot of people assume - you know, you go to 1Password and you sign up for an account, you're entering your password into this website and they assume, obviously, 1Password has that, right? And that is where we years ago fully embraced web technologies, and with the advent of web cryptography and web crypto APIs, we can actually download you a little JavaScript client right there on the web, when you create your account sign-up. We never actually send that password across the internet, ever. It always stays on your device. We provision those crypto keys, they live on your device, and from there on, throughout your 1Password journey, you're always using your secret key and your account password to do what we call secret key derivation, or 2-key derivation, and we basically kind of make the unlock keys for your account. So I think that's one of the really cool aspects, is we're so ingrained into the web, but you never have to send us any of your secrets. You only ever send us the encrypted blobs for the secrets that you hold on your side.

**Nick Nisi:** Yeah, so everything is always encrypted going to the -- like, if you're using the Family Plan, or things like that; it's always encrypted, and you have to decrypt it locally, whether that's with the client or in the browser.

**Andrew Beyer:** Yup, a hundred percent.

**Mitchell Cohen:** Yeah. And when you mentioned the Family Plan - what's remarkable about that is you can have transactions between two family members where they're able to share with each other, but we have no insight into what they're sharing, and no ability to access it. And it's kind of challenging to set up that environment, but we've figured it out several years ago. And honestly, it's industry-leading. Very few others can say that they have this kind of sharing system that's so secure.

**Nick Nisi:** Wow.

**Mitchell Cohen:** Yeah. And it's all thanks to private-public key encryption. We basically provision these vaults, they all have separate keys, and then from there, a family member from their own device can essentially ensure other family members have access. So yeah, along the entire way, essentially, it's encryption all the way down, which is really cool.

**Amal Hussein:** Super-cool. So is this architecture -- and the keys are unique by device, right? So even if I'm one person with two devices, I'm using different keys... How does that work actually, if I'm using the same account across multiple devices?

**Andrew Beyer:** The keys to unlock your account, or essentially what we call the master unlock key (easily named) is unique to you. It is unique to you and your account. So your account password and your secret key derives the master unlock key. And from there, it's just a whole host of other keys. So you'll have a key per vault, and those kind of things. They aren't unique to a device; so when you have two different devices, you're using the same secret key and your same account password, and that's essentially how we ensure the end-to-end encryption there.

We do offer some authentication on top of that, so every device has a unique identifier, and we use that just for the server to know the devices out there that it can download the encrypted blobs of your 1Password items to... And we can do things like multi-factor authentication that way, where you're doing -- the base authentication is all done through encryption, but if you wanna add on another layer, you could add on Ubikey, or a time-based one-time password, and that's where that device UUID, on the server, it can perform that MFA.

\[00:12:08.18\] And really, the only protection that adds is if someone were to obtain your master unlock key, or your account password and secret key, they can't use that on a new device to download your encrypted information. So it does add kind of a different layer of making sure that nobody can add to, remove from your account, download your account on new devices.

**Amal Hussein:** That is so cool. And I'm assuming this architecture pattern has probably replicated across other password managers, but 1Password were the first major player in this space, from my understanding...

**Mitchell Cohen:** I don't think any of it is fully replicated across anywhere else I've seen. We do document it, it's in our white paper, so people are free to take a look at our whole architecture... But we're really pioneering in so many areas here, especially over the past years, with our sharing features. And honestly, where we'll be a year from now - and we're gonna get to that later - is even more exciting than what we're able to talk about now.

**Andrew Beyer:** That is one piece of advice - if you aren't using 1Password and you're looking at other one password managers, you really need to dig into the implementation details. Most people don't care about implementation details on stuff... But when it's something where you're relying on it for your entire security of your life, you really do need to dig in and find out how are they doing this. Because obviously, the worst-case scenario is they're just some database running somewhere with all of your passwords in it in plain text, and there's varying levels of security from there.

**Amal Hussein:** That makes a lot of sense. Honestly, we could talk about that one topic for the whole show... But we're kind of here to talk about stuff that's changing. So what's changing in 1Password? I think we've kind of alluded to that a little bit with Electron... So can you tell us about what prompted that change, why Electron?

**Mitchell Cohen:** Sure. So we're releasing a new set of desktop apps, and we're calling them 1Password 8, because the previous version was 7. And we did something that probably you should never do, but we did anyway, which is that we wrote all our apps from scratch, starting from the very foundation. We picked our tech stacks sort of clean slate, we wrote all the logic, all the user interfaces, built all the features, and ended up to a point where we had something that was just way cooler and more performant and even more secure than what we had in the past. And when we were ready to share with the world, we announced it actually in early access. And the reason we did that was because when you are trying to recreate an app that's been around for over a decade, it's gonna take a while to make sure you've met every user workflow; even though you have really cool, new workflows that you're excited about, you wanna make sure that users can install it and continue on with their work, because 1Password is so important to their lives.

So that's exactly what we did... We sort of built our new tech stack into these apps, and announced them for early access, and that's where a lot of the interest has been.

**Nick Nisi:** And to that end, what was it before? My experience has only ever been on Mac and iOS devices, but 1Password has existed on other platforms as well, like Windows and elsewhere. Were those all just separate, native apps for the previous version?

**Mitchell Cohen:** They were a hodgepodge of different things. And that's true about any sufficiently large piece of software - you end up with all sorts of bits and pieces built over the course of years, kind of connected together. But one issue was that they all felt very different. So the way I started to think about it was it almost felt like someone was making third-party, fan clients for our service, even though we were the ones making them... And definitely, that was something on our minds when we set out to build our new tech stack, and of course, our new design language and feature set that accompanied that tech stack.

But the other interesting thing about them is that they also all had web technologies in them, and we always have used web technologies heavily and pioneered them... So as Andrew already alluded to, we used web crypto very early on to power our web service and to make sharing possible over the web. But even on the desktop apps and mobile apps, we had web views, we had web-based integrations. And in fact, the most important part of our desktop app, which people interact with every day, has always been web-based and very heavily so. And that of course is the browser extension.

\[00:16:16.19\] So it's interesting to see people think of what we're doing as sort of like a move, or a shift, when really it's just taking something we've always cared about deeply and continuing to use it in our product for the things that appeal to us about it.

**Nick Nisi:** I can see that perspective though, because I -- definitely, when you say that, 90% of my interaction with 1Password is through the browser extensions and \[unintelligible 00:16:38.12\] to open that up. I guess I just don't ever think about it as like "Well, it's really just this thing", and I'm never really opening up 1Password proper, unless I'm doing more in-depth searching, or things like that. But usually, most of it is just straight through that web thing, and when I t thought about that, it never really came to my mind that that was my primary interaction with it.

**Mitchell Cohen:** And that's a great observation, because it's something we both notched and heard ourselves, that people were saying "The part of 1Password that I actually use is the part in my web browser." That informed what we're doing with 1Password today, first of all because we wanted to bring some of what made the browser experience so special sort of into the rest of our app... But we also want to move faster, so that we can give you a reason to open that desktop app more often, because we think that is a great place to organize, to share, to understand your security. And if people are only opening it to troubleshoot - well, we have to do better there.

So one thing we're very excited about with 8 is actually making it so that you do interact with all of our service and our apps, not just the \[unintelligible 00:17:46.24\] So that's really on our minds.

**Nick Nisi:** How so? How would that change my usage of going to a site and wanting it to auto-populate? How would it bring in the desktop version?

**Mitchell Cohen:** One example is we actually have a new dashboard for our Watchtower service in the desktop app, that shows you your security situation as a whole, which is something we didn't have before. Now you can see exactly what passwords you need to go fix. The interface helps you understand that and make progress there. And that's something that, of course, is more fit for a desktop app. Whereas the browser is very good at helping you use your passwords, we wanna give you ways to also sort of organize and work on your security situation. So that's one example.

Another would be our sharing features, which - again, the desktop app is a natural place to have sharing; both the ability to share, and also to understand what information is being shared with whom. And a lot more of that is now exposed in the new desktop apps than it was before.

**Nick Nisi:** Nice. Okay, that makes sense. I did download the early access, and was comparing it to the old version... And I was like, "Oh, this Watchtower thing is cool." I thought that there was that in the old app, but there wasn't... And I really like that dashboard a lot. I only have six terrible passwords, by the way...

**Mitchell Cohen:** Well, that's fantastic... And that's funny too, because we've had several people point out things that they don't like about the new app that weren't in the old, so... It's always interesting to see how people remember what was there versus what they have now, and in some cases the grass is always greener... But we know, we have the data, we can do this side by side, and we're specifically focused on improving a lot of the experience, in big and small ways.

**Andrew Beyer:** Yeah. And discoverability was a big piece of this project. We wanted as part of this -- essentially, a complete rewrite of the client app experience. We wanted to make sure that we were building a product that was modern and discoverable in this day and age. And we had a lot of problems there, whether you were on a Mac and switched to Windows; at the time we didn't even have a Linux client... There were parts of 1Password that felt, looked and acted differently. And a lot of that is because of our origin story. We had two founders that started this company over 15 years ago, they built the first Mac app, and essentially built the company from the ground up that way... And when the time came to add Windows, they just hired someone to write a Windows app. They joined the company, started building up a small team; same for Android, started with one person...

\[00:20:13.05\] We've grown in size of just like the ecosystem, the complexity of 1Password adding on memberships and sharing and all of those things, where it's no longer just one individual developer adding something to the app, that they think is a good idea... We have a more well thought out design and engineering process now, and a lot of that comes down to how can you capture those thoughts, have your own design language, and then share that across your entire ecosystem.

**Break:** \[00:20:44.26\]

**Amal Hussein:** Alright, y'all, so that was really incredible, learning about some of the reasoning behind those decisions, which really, for me seemed very obvious at this point, right? We've seen successful platforms like Xamarin enable cross- platform development for mobile apps, where you're able to ship to the iOS store, and the App Store, and the Windows Store, writing one language; it's easy for dev teams to have end-to-end ownership of all of your apps... And then nowadays Flutter has kind of taken over that industry... Maybe the best in class for cross-platform apps, although Flutter Web has failed pretty hard (thank God). And obviously, we've seen Electron for the past decade just really kind of take off and really push forward what you can do with the web across desktop apps... Linux-included, which is great. But I'm curious - there's still this gap of browser extensions, where you're still writing something for Chrome, for Mozilla... So you're still writing these different things. And then also, the security around browser extensions is quite horrible, the ecosystem is quite sketchy, to say the least... And I'm just curious, what's that like for y'all, having to kind of navigate in these murky waters, and also, how do you trust other extensions that are on your users' browser, in terms of snooping and whatever else; they're constantly fixing security holes, so I'm just curious how are y'all dealing with that. Because there's still fragmentation, and there's also bad security, right?

**Andrew Beyer:** That is a lot of questions in one question...

**Amal Hussein:** Sorry...

**Andrew Beyer:** ...so I will try to start at the beginning, and you let me know which ones I don't answer. Browser extension - great example. And it's actually the origin story for 1Password 8. So a few years ago, I wanna say a few friends got together - and this is one Mitch and I actually worked as developers directly together - and we rewrote our browser extension, with a lot of different goals in mind... But one of the really important goals was we wanted a browser extension that could work without a natively-installed application on the machine. And there's a lot of reasons for that. One, at the time we had no Linux app, so that was a part of the market where -- like, I've been using Linux since YellowDog on my original iMac... Whether I'm using Linux now or not, I always wanted 1Password on Linux; and this was a really easy way to make something that would run on Linux immediately.

\[00:24:23.00\] The other thing is you have this thing called ChromeOS, which is this system -- it runs Android apps sometimes, but it's another place where a lot of things are done on the web, they're done within Chrome... It's a great place where you want a web extension or a browser extension that doesn't need a Mac app running, or something like that. That is kind of our starting point of where we built something that was a web-based 1Password client. It can run completely by itself inside of your browser, and it has a React app frontend, and all of this is done in TypeScript, because we get a little scared of JavaScript. And I don't honestly understand people who don't use TypeScript; TypeScript is freakin' awesome, especially in this day and age...

**Nick Nisi:** Did you hear that, Jerod?

**Andrew Beyer:** ...with browsers just constantly evolving, and JavaScript platforms, and all of that... Holy cow, TypeScript is awesome. So that's kind of like what we at the time branded as 1Password X. We did that because we had two browser extensions; now, with the 1Password 8 transition, this is the browser extension. And what's awesome about it is it really is better for your everyday user. Like Nick said, 90% of his time is done in the browser. I would say as a new 1Password user, probably about 100% of your time should be done in the browser. You go install 1Password - all you really need is the browser extension to start saving and filling logins, generating passwords with our smart password generator, those kind of things.

Once you get more than three of these things, or ten, or twenty, or fifty of them, you wanna start sharing them, you wanna start managing them in different ways, you wanna start adding new, different and exciting item types... That's where it really makes sense to download the app, start digging deeper into 1Password. So that was kind of the goal of the browser extension, and why it's so important to 1Password.

The cross-platform thing I will push back on a little bit and say that's getting better. It started with Google, they created this thing called Web Extensions. It's not an official platform API. And then Mozilla finally kind of converted over Firefox. Edge for a while were working on this Web Extensions API... What was a real shocker to us was - Safari always had this thing called an App Extension. And two years ago, they actually launched support for the same Web Extensions API, and then one year -- well, actually three months ago, they launched support for the Web Extension API on iOS and iPad OS, which... I don't know, it's like a billion plus devices. So Apple is actually heavily invested in "We're gonna support this Web Extensions API technology."

**Amal Hussein:** That's great.

**Andrew Beyer:** So I will push back and say - it's not 100% standard across the board, like everything on the web is, but essentially, if you can write something in JavaScript, if you can learn and use the Web Extensions API, you can actually build a web extension or a browser extension that works in all of the major browsers... Pretty much everything is Chromium nowadays, then you have Firefox, and then you have Safari, and it will work everywhere.

You know, there's a lot of caveats to that, where "Okay, Safari supports this", you've gotta package it into a macOS app and ship it on the Mac App Store... There's all sorts of distribution issues.

For example, for 1Password we have to work with Google to distribute our browser extension, we have to work with Mozilla to distribute our browser extension, we work with Microsoft to distribute our browser extension, and we work with Apple. So it's pretty much all of the major companies. So it's not as easy as like, you know, I have DNS and a domain name and now I have a website. You do have to do a lot of work to get there... But there is a standardization of the ecosystem for browser extensions, and honestly, it's really good for us, and it's really good for anybody who wants to build an application that will run everywhere. There's not a lot of apps out there that can say that. It will run on ChromeOS even.

\[00:28:11.28\] So I think it is getting better. Security-wise - you are correct. Web extensions, browser extensions, they have a ton of power inside of the browser. This is managed by way of a permissions system, so when you install a browser extension, it'll basically tell you "Here's the creepy permissions that your browser extension will have", but it's not language that users --

**Amal Hussein:** Nobody reads that.

**Andrew Beyer:** Yeah, nobody reads that, and it's not really --

**Amal Hussein:** Also, Incognito Mode is another thing that's scary... Sometimes they're still listening in Incognito Mode, unless you explicitly tell them not to, or you have to explicitly disable some things in Incognito Mode... I mean, it's crazy all the verticals that they have.

**Andrew Beyer:** Yeah. And to that point, I think one of your questions was "How do we trust other browser extensions?" and the answer is "We don't." We essentially -- our company policy is you're not allowed to use any browser extension that we don't use. And the reason for that is because it is a very scary ecosystem; you install one of these things and it could essentially be scraping every website you go to and throwing that up on a server somewhere.

**Amal Hussein:** Correct.

**Andrew Beyer:** So you have to be extremely careful in what browser extensions you use, and you have to trust the company that is creating them. So we've been essentially creating browser extensions since before there were browser extensions... So Dave and Rustem are founders --

**Amal Hussein:** Since before browsers!

**Andrew Beyer:** Well, they would actually swizzle Safari and inject some creepy code, that was legit, into your browser, to make 1Password work on Safari. And Safari saw that and they were like, "We need to add something to not get people to go down this road." So my friend Rustem actually demo-ed the very first version of 1Password as an extension at WWDC 2010, or something; or 2005, I don't know. Back before I even worked in development that much.

But to be honest, browser extensions are super-scary. I don't use a ton of them. I'm very careful with them. I use different browsers or different Chrome profiles if I do need to use an extension that I don't trust as much.

**Amal Hussein:** Right.

**Andrew Beyer:** But I am happy to say, this is a known problem, and people are working on it. Apple and Google are sharing a new W3C community group for web extensions, and Google is pushing this new - what they call Manifest V3 changes, which do dial back some of the permissions, and they really change the overall architecture to browser extensions.

**Amal Hussein:** That's awesome.

**Andrew Beyer:** Apple is also code-sharing that, and if anybody listening to this podcast or watching live is interested, we need more people to join that group. That is one of the ways -- like, 1Password has a whole bunch of people in there, but we need that diverse community helping to drive the next revision of the standard, but within diversity in people, but also diversity in markets, and engineers, and that kind of thing.

**Amal Hussein:** What's it called? Is there a link to the group, and stuff like that?

**Andrew Beyer:** Yeah, I can post it in the chat, but you can also go on W3C.org. There's a GitHub repo to go read the charter and open issues, but also there's a community that you can go join. They meet bi-weekly and essentially are like -- it's new; within the last couple of months new... But that is gonna be -- in my opinion, a year or two from now, that will be a really solid web standard. You basically have Apple and Google behind it, Mozilla is participating as well, and then there's people from your favorite ad blocker companies, your favorite password manager companies... We're all trying to come together as a community...

**Amal Hussein:** All the security nerds...

**Andrew Beyer:** ...and drive a standard that works for us, but also helps make the end user more secure.

**Amal Hussein:** The web a better place.

**Andrew Beyer:** Yeah.

**Amal Hussein:** \[00:31:53.20\] Yeah, totally. That's amazing. And yeah, kudos to Google for doing that. They're so great at pushing standards forward, and I think nerd herding -- similar kind of initiatives happened with DevTools... But DevTools in Chromium were developed as like an interfaceable API, such that you can connect with DevTools in VS Code, and you can have that same protocol in Edge... So it's really great to see things like that kind of get standardized; things that are kind of outside the box, that we typically interact with like we're in the browser. That's awesome.

So I think maybe my last question on this is really now that you've done this shift to cross-platform, and you're able to (I'm sure) leverage your own abstractions to manage the same codebase for all these different extensions, because you can write your own abstractions... But I'm curious, how has your development cycle changed now that you are basically shipping in one language, one stack, across all these platforms? Are you still supporting "the old stuff", all the native apps? Have you had to retrain your dev teams? I'm sure there's a ton of velocity that you've gained, but I'd love to hear about this from your own mouths, I guess.

**Mitchell Cohen:** So I wanna push back on this idea of native app, because it comes up in every conversation these days... We've done a ton of research, a ton of interviews, and to the normal who doesn't watch this show and isn't part of our Twitter tech community, a native app is an app that has an icon on your dock, that has keyboard shortcuts, that you can download and install on your computer...

**Nick Nisi:** And a preferences panel that opens up in its own window, right?

**Mitchell Cohen:** We're building that, and we're building that in a big way, and we're building it for every platform we support. And I mean, we're going deep into platform features. We're doing things on Linux that no one's ever done before, for instance having biometrics and browser extension integration, and integration with the system keychain... The Linux community has been really grateful and appreciative of that, and me too, because I love Linux. And on Mac - I can go into detail forever. There's a ton of native code in this app, and native integrations, from support for touch ID, to Apple Watch, to all the keyboard shortcuts you can think of, to text transformations, to interaction with the system clipboard for secure copy and paste to the universal clipboard sharing setting... It goes on and on, and we're always going to do that, because the app isn't very useful if it doesn't integrate well with your computer.

But the buttons are not \[unintelligible 00:34:19.07\] And that's where I'm just -- I don't really care anymore. I wanna build a great product, with great features, and I think that's true for all of us. So that's basically what we're doing.

**Nick Nisi:** Yeah, I think that that's a really good vision to have. You care more about the result than how you got there... And I do, too. All of those features that you listed - those are the things that I absolutely love about 1Password. And if this changed to somehow not let me use touch ID, or the Apple Watch 2 unlock, and things like that, then it would be a big step backward. But it's not, because it does support that.

And kind of shifting a little bit, I wanna talk about the technology and actually getting into the weeds a little bit about that... So kind of to tie this up, I'm curious, are the browser extensions - are they still going to be fundamentally the same codebase going forward? And did the new Electron style native app - did that get borne out of the original 1Password X code, or how did that happen?

**Mitchell Cohen:** It's a bit of both, actually. Some of the heritage of the app is 1Password X, especially the React components that we share between them... Some of it is actually in code that was originally written for our older Windows app, which was written in Rust, which is an important foundational element of the new app... And a lot of it is brand new. So we have such a huge iceberg of a tech stack behind us that we can pull the pieces that have worked best, and then innovate in areas where we haven't had anything before.

**Nick Nisi:** "Your much older Rust app..." For some reason, that's just not computing to me. I don't see Rust being old enough to have old apps yet... But that's just me. \[laughs\]

**Andrew Beyer:** \[00:35:57.20\] Yeah, so 1Password 7 for Windows had a ton of Rust code. That team was kind of early adopters into Rust, and they were essentially like "Why are you looking at all this other stuff? Rust is awesome."

Rust got really interesting to us, because we were actually doing this cross-platform code thing for quite a while, and our infrastructure is written in Go, so we were big Go fans. We still are; our infrastructure still is. And for a while, we were writing cross-platform code in Go, and using it kind of cross-platform all the way to the browser, using this really cool library called Gopher.js, which will transpile your Go code into JavaScript. It has some ramifications there, which is you get an entire Go runtime, garbage collector, all of that running in JavaScript. So you get a fairly large bundle, but it does work. And as like a browser extension where you're not loading it on the web, you're kind of downloading it maybe once a week, or once a month.

The Gopher.js approach kind of worked for us for a while, but we ran into those performance limitations. And so that's why we really looked heavily into Rust, is because they had - and probably still do; I don't wanna get into any debates about it, but they had a really incredible WebAssembly toolchain, and folks working on WebAssembly support. And so a lot of the code that you see running natively in 1Password 8, from things like how we compute time-based one-time passwords, to how we generate your passwords - all of that code, even in our browser extension, isn't actually run in JavaScript. It is Rust running natively on your system in the case of the Mac and Windows apps, and Linux, or it is Rust code that's compiled to WebAssembly and used within our browser extension. And that is one of the ways that we have this whole new "write it once, use it everywhere" mentality... Or - the way we look at it, as kind of project managers and developers, is all of your bugs exist in one area of code. So if there's a bug in one of these things, whether it be URL parsing, any of this backend business logic of the apps, it's gonna be in one place, no matter where you find it in the apps.

So we're very heavy backend in Rust to WebAssembly for the web, but we're very heavy frontend in languages like TypeScript and frameworks like React; we even use Svelte from time to time when it's interesting. For example, our in-page suggestions - we needed a really fast JavaScript solution there to draw a menu on the page, and so that's written in Svelte.

So we kind of toy and play around with pretty much every possible solution. And that's one of the reasons why the desktop apps landed on Electron, was we looked at every framework; we tried everything, and Electron just happens to be the industry standard, and the best. We went from basically almost in a single night - well, maybe it was like two nights - the very first version of 1Password 8, we took some React components, we took some of our backend code, we threw it in Electron, and we had a desktop app in it. It was ugly. I wish I had a screenshot of it, but it worked in basically a day. And that is what's really amazing about it.

**Mitchell Cohen:** The funny thing about Electron is it's actually the most boring part. And I know everyone wants to talk about it, but there's not much to it. It's effectively a glorified packaging format. It just takes a web frontend, and a native backend, and connects them. And actually, in our case we're connecting them with a really nice tool called Neon, which has done a lot, which has done a lot for us. And if you do wanna use REST inside an Electron app, I strongly recommend checking out the Neon project. But there's not much to say about Electron itself. I'm sure something eventually will come along that does what it does better, or makes a more compelling case. But until it happens, there's not much use to be gained out of railing against Electron on the internet. You're not gonna get much from the development community.

**Amal Hussein:** It's pretty much like your unified client, and you ship a bunch of different binaries with it that are native. Is that right? I'm just trying to understand... What's it like hooking into that? Because there's -- Node is supported by default, right? So what are you using to connect that Node layer to run your binaries? Are you using C++, or is that where the Rust support comes in? I'm just really curious to understand that architecture. It's a little fuzzy in my brain right now.

**Mitchell Cohen:** \[00:40:08.27\] So that's what I was just referring to, which is we write our code in Rust, and actually compile it to your system; not just in native code, but to architecture-specific native code. For instance, if you took our Mac Electron app, you couldn't take the resources and run them, never mind on Windows. You can even run them on an Intel Mac, because it's compiled to the native Apple Silicon machine code. And it's very fast, by the way. We hook that up to the frontend with the Neon project, which basically exposes an FFI (Foreign Function Interface) to allow JavaScript to talk to Rust. It's a nice developer experience. It kind of lets us get past that part, and focus on the app and what we wanted to do. So it's good.

**Andrew Beyer:** Yeah, and then the cool thing about this architecture, and one of the reasons why I would advocate looking at web technologies is - if you write your frontend in a web technology, not only can you use it in the browser, but a lot of these cross-platform frameworks and utilities and packaging and all that stuff will essentially support this stuff going forward. So we're not really coupled to Electron in any way. It's the smartest way to package and ship the app today, but it probably won't be in 5-10 years, who knows.

We're actually funding a couple projects to see if one day we can do this all in native system webviews, and those kind of things.

We're actually very interested in driving this approach of like write a cross-platform app using web technologies, because it's awesome. You get to dictate your own design language. I don't know if anybody has been paying attention, but CSS and JavaScript has gotten really freakin' good in the last 5-10 years. It's a whole different world from when I was trying to write websites back 20 years ago. It's a really awesome technology stack to work with, and it's very developer-friendly, I would say.

**Nick Nisi:** Yeah. I was gonna ask about the choice to go with TypeScript there... Was that an easy choice, or was there some kicking and pulling?

**Amal Hussein:** \[laughs\] Always looking for a TypeScript angle, Nick...

**Mitchell Cohen:** It was the easiest choice we've ever made, as a company...

**Nick Nisi:** Yeah.

**Amal Hussein:** If I had had a dollar for every time I heard that question from Nick, you know...

**Andrew Beyer:** It's pretty funny, Mitch used to toy with me... He'd be like "Once you need TypeScript, you can use TypeScript", when we would start a little project, or whatever, in JavaScript. But honestly, even now, in my side-projects, everything I do in JavaScript, I start with TypeScript. It is amazing tooling for what you get. Just even the compiling it to run on different platforms, and that kind of thing. It's really awesome.

**Break:** \[00:42:33.29\]

**Nick Nisi:** So let's dive deeper into the architecture a little bit, and the native and web interface, where those two meet. I wanna dig and understand a little bit more about how it all kind of works together, and why it's the best decision for 1Password.

**Andrew Beyer:** I think the question we're looking for is like the architecture -- and this is, I'll be honest, one of the places where I think we as 1Password probably didn't have the best messaging out the gate, when we first launched 1Password 8... Because we did go heavily into the architecture, which is - look, a lot of your app is running native, and that is true. The vast majority of your app is either native code running in the backend, all the business logic, or we have a ton of Swift and native API code tying stuff together.

I'm not 100% -- I'm still waiting to see, is there another Electron app that does unlocking with Apple Watch? We might be the only one; I haven't found another one. But we spent a heck of a lot of effort into the actually making our Mac app as good in 1Password 8 as 1Password 7. And unfortunately, I think one of the messaging approaches we had was to talk about that; we were really proud of that, and we still are, obviously... But what people see between Electron and something that's written in AppKit or SwiftUI is a lot of times they're kind of looking at like the Mac-native UI. Mac-native UI is really the -- when I click into like a dropdown menu, does it look like the dropdown menu on other parts of my system? And the truth of the matter is you can actually do a lot of that stuff in Electron. One of the things you brought up was the permissions dialogue not being in a separate window; we actually at one point had the app do that. That is something you can absolutely do; that's not an Electron feature, or a problem with Electron that prevents you from having multiple windows. We made a conscious design choice to bring the 1Password design language into these new apps. So in a lot of places where it didn't make sense to use native UI for your system, whether it be for consistency, for things like when you switch platforms, consistency and support documentation - just all of those kind of reasons... And we think that we've developed an incredible-looking 1Password design language; a look and feel to it where whether you're using a desktop app, whether you're going on to a web client, whether you're using our browser extension, you're gonna get the same exact experience, and that is where web technologies really help us. What do you have to add to that, Mitch?

**Mitchell Cohen:** \[00:48:20.21\] So a lot of this conversation has been about what Mac users expect. And it's always like a hypothetical Mac user. People tell us "This is what Mac users expect." It's interesting to me - first of all, I've been a Mac user for as long or longer than the people telling me this, and I know what I expect. I know lots of Mac users.

**Amal Hussein:** Wait, are you Steve Jobs? Because you guys have been inventing browser extensions before browsers, you've been using Macs since before Macs... I mean, you know... \[unintelligible 00:48:48.01\] Steve reincarnated.

**Andrew Beyer:** He may or may not have a Lisa in that room...

**Amal Hussein:** Oh, nice...!

**Mitchell Cohen:** I actually have an Apple Lisa sitting on my desk over there.

**Nick Nisi:** Oh, man...

**Amal Hussein:** O...M...G... That belongs in a museum. That's incredible.

**Mitchell Cohen:** It doesn't turn on. I'm still working on it.

**Amal Hussein:** That's cool.

**Mitchell Cohen:** Yeah... The wonderful thing about Steve Jobs, by the way, is that he was not nostalgic, which is --

**Amal Hussein:** Well, I think you should just go to his grave and get a drop of his blood, or a piece of his hair, and it'll turn on, you know... Just kidding. \[laughs\] Alright, I'll stop now.

**Mitchell Cohen:** I love the Mac, I love the platform, I love every Mac that comes out. I'm sitting here on this wonderful M1 MacBook Air; it's the best computer I've ever had. And the Mac has succeeded vastly beyond where it was when I joined this company, when we were making just a Mac app... And that's wonderful. And when you look at people who use Macs today, they're not part of that community that wanted a very specific kind of Mac app. They're just normal, everyday people. You go to a Starbucks, a college campus, you just look at your friends, family and co-workers, and they love their Macs. But you look at the software they're using, and it's normal software. It's cross-platform software, web-based, a lot of times just inside of a web browser... And they don't really think about it that way. They don't ask for apps that look like Apple made them in the '90s the way that I think a lot of people kind of want us to go back and do that. And regardless of what technology we use, we're not gonna do that. We're going to make an app that looks and feels like the experience that we want, just like every other developer effectively is doing in 2021. I mean, really, you look at the apps that come out now - they have their own, very strong branding, their own design language, their own user interface... And that's just kind of what people expect.

I actually think that for the average college student, for instance, who uses a Mac, they'll think of something like Discord or Slack or Notion and say "That's what a Mac app looks like. That's how it works." They're not going to point to these apps that came out decades ago, that sort of are the standard bearers for what a native Mac app is supposed to be. So I have these users in mind as much as myself, and sort of the culture that I came from, when I'm thinking about how our app should look, how it should work, and what its relationship is to the host platform, which is macOS, in this case.

**Amal Hussein:** Yeah. How challenging is it to work for or on a platform that is so closed, in many ways? In terms of community feedback, and having your input actually heard, and having an opportunity -- like, it's a very different company than Google and Microsoft, right? Google being on the far left, Microsoft being somewhere in the middle, and Apple just being far on the right in terms of community engagement and taking people's inputs, and also the extensibility of the platform is fairly limited... So I'm just curious what that's like for you.

**Mitchell Cohen:** I think this is almost a different question if you're talking about macOS versus iOS.

**Amal Hussein:** macOS, I guess... I mean, I'm not familiar with the differences between the two though, so I don't even -- yeah.

**Andrew Beyer:** \[00:51:49.09\] It's kind of a hard question to answer, because I don't honestly really feel that way, especially on the Mac. I think that in this day and -- honestly, macOS, at the time OS X 10 was one of the coolest innovations the Mac platform has ever had, and there's a reason why we're still on that foundation. You take something like a Homebrew package manager, and a terminal... And I don't really feel like I need Linux. I use Apple platforms because I love the ecosystem; they do work really well together, whether it be receiving notifications on your Apple Watch, and those kind of things... It sounds silly, and if you're fortunate enough to be able to afford kind of a more expensive ecosystem - like, that is one of the downsides, it is a little bit more expensive. But working on Apple products and using Apple products I think is very open and inclusive.

I don't know how many developers know this, but when you go to WWDC (the Worldwide Developer Conference for Apple), they give developers time with Apple engineers. Three months ago, when they announced iOS web extensions, I had three separate sessions with engineers directly working on those APIs, and we were able to say "Hey, here's what we need, here's the problems we're encountering, here's what we're working on." And you do have a lot of input there.

Also, Apple is very open source and open in the community as well. Swift is open source; WebKit - you can go on there and just file any issue you want. I don't really feel that it's a hostile environment for developers or users. I know we hear the horror stories where some high school student reported a bug to Apple via radar and didn't hear anything back, and it was this huge security issue... There's a lot of horror stories, but to be honest, you go on Google's bug tracker and file an issue, there's a good chance you won't get -- I have issues that have been open for six years over there. It's just the nature of the game and it's part of the prioritization... But I would say it's a great platform to work on and build for.

**Amal Hussein:** Well, I'm really so happy to hear that feedback, because I don't think that -- it's just not a common sentiment, I think, outside of people who are doing the day-to-day work... Because I think a lot of us still have that perception of Apple, and its closed system, and Apple is really hostile towards the web, Apple keeps trying to kill PWAs, because they want things going through the App Store... So there's just kind of like Apple vs. Web and Apple vs. open source, the ecosystem -- you know, we can't even get their developers to come to a conference, for God's sake... There's still a level of reservedness which is there...

**Andrew Beyer:** What I would say is every company changes... I remember when I was 13, 14 years old, running -- I mean, I was running openSUSE 7.3 or something back in the day, just love-and-raging on how \*bleep\* Microsoft for the, you know, like "The man has got me down and I've gotta go Linux!" But look at Microsoft today. They own GitHub. They are pushing TypeScript. They are just crushing it in developer relations. And I would say Apple is probably on that trend as well.

It takes a lot of effort to move a company that big, and they have a lot of different challenges, both internally and externally, communication-wise, I'm sure, just like we do... But I would say they're on that trend as well. There were days when we would say "Internet Explorer is killing the internet", right? And look at them now. They're just another arguably pretty great Chromium browser these days.

**Amal Hussein:** Yeah. Well, I just wanna actually hand the mic back to Nick, because I think Nick had a point... But I just wanted to say - funny story about Internet Explorer... A lot of people think that it was the worst thing for the web, but in actually many ways it was like the best thing for the web, because it actually pushed the web -- it did its job so well that it's still relevant today. It kind of went off the track and really innovated hard. And yeah, it's a ton of stuff that's not standardized, or whatever, but it's all stuff that really pushed the web forward, and so in that way, it really actually did its job very well.

**Nick Nisi:** You really need a villain to push the heroes.

**Amal Hussein:** Yeah. But it's a perspective that people don't get to really think about often... And I was taught that by a friend of mine, who is kind of a platform nerd... But yeah - so Nick, you were saying...?

**Nick Nisi:** \[00:56:12.18\] Yeah, I hear that sentiment about Apple being like that. Not necessarily for the Mac, much more so for the iOS, and their close-mindedness on PWAs and things like that, and just the approach to the web, and the overall -- Safari being so far behind, and not allowing any other browser out there on iOS. I guess that's the bigger debate and the bigger controversy with Apple.

**Amal Hussein:** Yeah. Everything is WebKit, you know? Firefox on iOS, Edge on iOS, Chrome on iOS - it's all WebKit underneath.

**Nick Nisi:** Yeah.

**Mitchell Cohen:** But WebKit is great. We like the browser engine competition...

**Amal Hussein:** Of course. We don't mind WebKit, yeah. WebKit's great, yeah.

**Andrew Beyer:** I did not know we were gonna get into an Apple, Microsoft, Google debate, honestly, so I didn't come prepared for it... \[laughter\] But I will say that -- I mean, I am an iPhone user, I know at certain times there were Android phones that came prepackaged with antivirus, and stuff like that... And when it comes to my mobile platforms, I just want them to work really well, and s some of the closed nature do promote an environment that just works really well. Don't get me wrong, we have spent our fair share of praying for just our app not to get killed because we go over a RAM limit, or those kinds of things, and I really am excited about -- that's one of the things that's so exciting about web extensions on iOS to me... I saw the other day someone wrote an iOS web extension that allows you to use developer tools on your iPhone, or your iPad, basically. That's something that doesn't actually work natively. So you can actually start writing JavaScript there, you can manipulate the DOM... Like, the fact that they did that makes me think that Apple is definitely on the track where they understand the status quo... And they are willing to allow you to basically write a JavaScript app and run it in Safari on iOS and iPad OS.

I think it's gonna be super-exciting... I think that's gonna actually cause a surge in the market of browser extensions. Right now password managers and ad blockers are the big ones that everybody knows about, but I'm super-excited to see, even day one, from what I've seen on Twitter, there's a lot of really cool stuff coming out to iPhone, because of the fact that they're allowing JavaScript apps to just basically run inside the browser.

It'd be interesting to see how that works, and as we noted security before, it will be interesting to see -- I'm sure there will be some sort of level of fall-out or something that happens because of that. But I think Apple is becoming very open to the fact that -- and I think being fairly respectful of the web and a lot of the APIs and the platform APIs.

**Amal Hussein:** I'm so glad. Great. It's 2021. I'm glad they're coming to the party. They're not quite here yet, but they're in the cab. So we'll welcome them when they arrive. But just to kind of wrap this discussion up, I can't end this show without asking my burning questions, which are really around Web 3.0 and this world of permissionless apps that we're seeing with blockchain technologies... And I'm really curious where you all see, if you had to wave a magic wand and put your speculation hats on - where do you see digital identity really heading? Are we gonna be more anonymized, are we going to go the other way hard, integrating with technologies or services like CLEAR, biometrics verification...? So are we going to be real on the web, or are we going to be anonymized? What does permissionless mean for tools like 1Password? I'm curious if you guys are even part of the blockchain conversation around development.

**Mitchell Cohen:** So there's two parts to that answer... One is that we've been through several changes in user behavior on the web, in relation to their own privacy, security and digital identity, and we've always succeeded by adapting how 1Password works to how people actually think about their identity online.

\[01:00:12.00\] The first big transition was from an app to the web, and then to mobile, and then wanting it to become a collaborative sharing experience on the service... And now we're seeing another transition to passwordless, for a lack of a better term. And we want to be there too, because we don't wanna be telling people "Here is what you have to do to be productive, to be secure online." We want to help them do it the way they already want to. So obviously, we've done a lot to make sure that biometrics are a first-class feature of 1Password, so that -- it used to be all about what we used to call your master password, and now that's like a minor detail. Most of the time you're not even thinking of that password; you're interacting with us through the biometric interfaces on your device, and we keep sort of making that more central to the experience.

Beyond that though, we also are very interested to see how people are using passwordless services and SSO, as you mentioned, Amal, blockchain services for identity. And we wanna help them do that, because the one thing that we've seen that will always be true is there are all of these services competing for people's one true identity, but we're always gonna be there as kind of the source of truth for all these things you have to keep track of and pay attention to to keep yourself secure online. We're gonna be a safe place for you to store and use and interact with those services.

**Amal Hussein:** You guys are the shovels and the highways.

**Andrew Beyer:** Yeah, that's one of the reasons we don't have an SSO service ourselves. We saw it in the beginning days, but we wanna be that collection, that out of bad place that you store your entire digital life and digital identity... And I think we are gonna see more moves to passwordless, but I think you'll always have secrets you need to store, just like somehow I find things where I have to actually fax people information... And it's just one of those things where we have a bunch of stuff on our radar and on our long-term roadmap to support a lot of the transition, and kind of be the industry thought leaders in that space.

**Amal Hussein:** Right. That makes a lot of sense. You kind of mentioned something, Mitch, around SSO, and Adam, you did as well... So there's essentially kind of like these widely growing adoption of third party logins, whether you're logging in with Facebook everywhere, or Google, or GitHub, Twitter... And then there's kind of this centralization on the engineering side of services like Auth0, that are kind of gateways and providers for that login and auth handshake, right? So I'm just curious, do you see that as a good thing, a bad thing, a liability? Clearly, it's a vertical that you've intentionally chosen to stay out of, which I think is so smart... You wanna make sure that you're relevant in all cases, and you're not trying to compete here... So I think it's a very strategic move on your side, but I'm just curious what are your thoughts on these services. Because I'm personally starting to see Auth0 is a bigger and bigger liability for the web...

**Andrew Beyer:** I'll take one of them, and that is I have a recent personal SSO story... So I will share it with the group, just so if anybody else -- I was gonna write a blog post about it and I just haven't gotten around to it. But my recent personal SSO story was I've used Gmail basically since the beta days, when they released the -- I think it was at the time called Google Domains, and then it was like Google Apps, Google Suite, now Google Workspace... Whatever it was called, I basically always had my own personal domain, hosted on Gmail, using a G suite(ish) account. And just this year, I finally decided "You know what - it's time for me to take this off of the Google ecosystem." I actually switched to FastMail, who are very privacy and security-focused, and a really cool company that do contribute to a lot of open source technologies, and they're right over there, writing RFCs on JMAP, and if you haven't seen that, you should definitely check it out...

\[01:04:00.18\] Basically, I did do that, and I finally shut down my Google account. And of course, with that, I actually had Google Fi, which I basically couldn't close this G Suite account without switching my Google Fi to another carrier... And I had - not a lot, but quite a few little SSO sign-in websites where essentially once I closed that Google account, that no longer worked anymore.

So I look at SSO as kind of a "You're tying yourself to that company or that provider", and in some ways, that can be good. For example, I think it's really smart from a business perspective to off-board a user and just immediately kind of kill their access to various services... But from a personal perspective, especially in this day and age, if Facebook or Google or somebody does something that you don't wanna support them anymore, SSO is a way that you're really tied in, and it makes it very challenging to get out of that ecosystem.

**Amal Hussein:** Agreed. Quite frankly though, on that same note, the fact that people's emails are centralized and they don't own their domain, nor their content... You know, if Google cuts you off, there goes your email - that's a problem also, you know?

**Andrew Beyer:** Yeah, there's a ton of ramifications there. So that's why I'm a little mixed. Honestly, what I want is I want SSO in certain scenarios, I suppose, but I want a service like 1Password to basically keep track of all of my SSO logins - where they are, what they are... So if I do go through a transition like that, I know immediately "Alright, here's the accounts that are gonna be affected by it."

And I think that's a place where having a third-party who aren't invested in trying to lock you into their ecosystem is a huge benefit of using a product like 1Password.

**Amal Hussein:** That's awesome.

**Mitchell Cohen:** And to your question about the trends - I think users are eager to adopt passwordless technologies, but they wanna feel like they still have control, and that's something that a lot of these providers aren't really offering, or at least aren't being open enough about... Like, "What do I give up if I use my Microsoft account without a password for everything? How do I change my mind about that? How do I migrate?" So we kind of wanna help people have that control and flexibility, and we don't want to create another system of lock-in that forces people to do it the 1Password way instead of someone else's way.

**Amal Hussein:** That's pretty cool. So does that mean it's easy to migrate into 1Password as a customer, and migrate out as well?

**Andrew Beyer:** Yup. Essentially, we've always had the premise that it's your data, it's your secrets, so you can export them and take them anywhere with you. Also, if you sign up for a membership and you stop paying us, you'll essentially still have read-only access to that data. We'd never make it to the point where we're keeping anything from you. I think that's always been one of the big values of 1Password - we're gonna respect your privacy, and we're gonna do our dang best to keep everything as secure as possible... And something that we include into our design, even though it's sometimes user hostile - building something that's secure sometimes makes it more challenging to use... And you're always gonna have that data portability in and out of 1Password.

**Amal Hussein:** Yeah. Well, honestly, kudos to you all for even just doing what you've done. I'm really excited to check out your whitepapers; I'll link them in the show notes as well. Ultimately - I've said this tons of times, and I'll say it again... The internet was designed to be open, this open network between trusted peers, and architecting security into a system that was designed to be open is extremely challenging. That's why it's so painful.

\[01:07:49.07\] So if we could re-envision what the web could be, if we architected the web and created new protocols that were secure first, how game-changing could that be? Those would be great conversations to start having, but first we have to stop arguing about basic stuff.

So with that said... Actually, I do have a security question for you before we end. Do you know how with password managers you're always copying things onto your clipboard? I always find that a liability, because it's not a one-time copy... So I'm just curious if you guys have ever considered working with browser operating software folks to maybe change that, or develop a new standard for a password copy that's secure and one-time, and that's also time-limited? So if it's still on your clipboard and you haven't pasted it anywhere, it just goes away after 30 seconds, or something like that...

**Mitchell Cohen:** That's actually a feature of 1Password.

**Amal Hussein:** OMG.

**Mitchell Cohen:** Even in our new modern web-based frontends we use the system APIs to do that most effectively. So on macOS we actually use the secure clipboard, and clear it after a time-out; we even do this on Linux and Windows, in sort of native ways.

**Amal Hussein:** That's amazing.

**Andrew Beyer:** And on iOS and mobile platforms as well. Basically, that is one of the reasons we always go out of our way to support those APIs. And I'll be honest, that's actually a web extension API I would love to see, because we don't have one of those from the browser extension... But in the browser extension, one of the nice things is you can basically click on an item and have it automatically fill into the page, so it basically keeps your system clipboard or anybody listening to that clipboard kind of out of the loop.

**Amal Hussein:** That's awesome. Well, I'll tell you, you gained one customer today, I'll tell you that much. It's perfect timing.

**Andrew Beyer:** One by one. That's how we grew.

**Amal Hussein:** Yeah. I'm due for my LastPass renewal, so I'm sorry, LastPass; you guys have been great, but... Time for something new. It's been a pleasure having you all today... Seriously. Thank you so much.

**Andrew Beyer:** Yeah, absolutely. Thank you for having us. I will do one quick call-out, which is if anything we said sounded cool or something you're interested in, we are definitely hiring. I am looking for web developers. If you know TypeScript, you wanna come join us, just check out our Jobs page on 1Password.com. Honestly, we are a really cool group of people to work with, not to mention we're trying to really innovate, and there's opportunities with us if anybody's interested.

**Amal Hussein:** Awesome. And where can people find you all online

**Andrew Beyer:** You can find me on Twitter at @firebeyer. That's basically the only social media platform I use. I'm not a huge social person. Even LinkedIn, it just makes you a spearfishing target... So I've deleted pretty much every other social media platform... But you can find me there if you wanna chat or set something up. Obviously, you can find 1Password at 1Password.com. And then Mitch...

**Mitchell Cohen:** I am also really only on Twitter, @mitchchn. I've enjoyed all the conversation there about 1Password 8 and participated in it, so please feel free, hit me up with what you like, what you don't like, what you disagree with, what I said on this show... That's great; I really love this conversation, and - hey, you might find out that I agree with you and we'll get your change into the app... Because like I said, it's in early access and we still have some time to go before we're ready to release it to everyone... So now is the time to let us know what you think about 1Password. We're listening and we're working to make it great for you.

**Amal Hussein:** Yeah.

**Andrew Beyer:** Mitch does funny tweets of 1Password spinning on the desktop, because people thought that Electron couldn't do shaking, like we had in the old app... So some of his content is really funny to watch.

**Mitchell Cohen:** I also do real work, by the way... \[laughs\]

**Andrew Beyer:** He does some real work, by the way... And I will give a quick shout-out, if you are an iPhone user, iPad user, on Monday iOS 15 comes out, and 1Password will have, I'm hoping, the best web extension there, so you can see what it's like to run 1Password as a web app on an iOS device, which is pretty groundbreaking. It's really awesome.

**Amal Hussein:** Yeah, that's so cool. Thank you so much for listening to your customers, and thank you so much for helping drive really good decisions, and obviously, I would say, world-class user experiences. I think a lot of product companies, regardless of what they're doing for their customers, I think could take a few notes from you all. So thank you, again. It's been a pleasure. And that's a wrap, kids. It's been super-fun...

**Andrew Beyer:** Awesome. Thanks.

**Mitchell Cohen:** Thank you.
