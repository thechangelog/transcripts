**Kris Brandow:** Welcome to Go Time! It's yet another week and yet another episode, and I am your wonderful host, Kris, and today we are talking about supply chain security and dependencies. And joining me for this episode we have Ian and Johnny. How are you doing today, Ian?

**Ian Lopshire:** I'm doing great.

**Kris Brandow:** Awesome.

**Ian Lopshire:** Can't complain.

**Kris Brandow:** Nice. How are you doing today, Johnny?

**Johnny Boursiquot:** I'm checking to see if anything we use has anything to do with polyfill, or... \[laughter\] You know, just gonna do a quick check. That's how I'm doing.

**Kris Brandow:** Just a little check... A little grep of the codebase... So yeah, today what we're talking about is - a few things, but first up, we're gonna talk about this vulnerability, I guess, or this compromise, one could say, of polyfill.io. Ian, do you want to give the listeners a quick summary of what happened?

**Ian Lopshire:** Yeah, sure. So polyfill.io is a CDN that serves a JavaScript library for browser polyfills. And a couple months back, the maintainer of the JavaScript library warned not to use the polyfill.io CDN, which he does not own, and isn't associated with, because it was sold to a different company. And yeah, just now they started injecting malicious JavaScript, and it affects hundreds of thousands of websites, Hulu, and JSTOR, however you say that... All kinds of sites. They got caught redirecting to gambling sites, and all kinds that... So yeah, it's a pretty big deal.

**Johnny Boursiquot:** So as you were saying that, I'm thinking "Okay, CDNs. CDNs." specially in the frontend community, pretty much CDN reign supreme. Usually, any JavaScript libraries that you're using to build sort of your apps, or even sort of shipping stuff, there's usually a CDN URL, because that's the best practice. The CDNs are distributed all over the world, and your users are going to be close to hopefully one of those endpoints, and that means your website, your app loads up that much faster. That's the value of CDNs. But I don't think anybody ever stops to, or rather -- not that they don't, but I don't think people tend to pay close attention to CDNs, because they're kind of like... They're always there. They always work. You see a link to a - I'm gonna date myself here - a bootstrap CDN thing, and you just copy and paste it, and you're good to go. Now you've got Bootstrap, or whatever library of your choice you're using. It's almost you just assume that "Oh yeah, somebody's footing that bill. I don't have to worry about it. I just include it in my JavaScript, or in my app, and off I go." So it's kind of interesting that now you have - through a change in ownership of a domain name, you've got this thing popping up. Hot, interesting. And again, within the npm community -- well, that's not an npm-only thing. It's anybody that uses that polyfill. But I assume that it's libraries that are served up -- it's JavaScript libraries that are primarily affected by this, right?

**Kris Brandow:** Yeah.

**Ian Lopshire:** So not even JavaScript libraries. At least for this specific attack, it's just anyone that includes this, right?

**Johnny Boursiquot:** Yeah. Anybody.

**Ian Lopshire:** I mean, it's if jQuery or Google Analytics was --

**Kris Brandow:** Compromised.

**Ian Lopshire:** Attacked, compromised. How many sites would that affect that? Yeah.

**Kris Brandow:** I think it's interesting that one of the biggest advantages of any of these CDNs, especially the frontend CDN providers, is that if everybody's using the same one, then there's a good chance that whatever library you're using, whatever code you're trying to pull in is already cached. So there's not even a request that happens to the CDN, so it's super-fast. But that also makes them huge targets for attack, because it's included on so many websites. So if you just make a small change there, if you get in there, you can compromise a gigantic number of websites.

But it also kind of feels CDNs are at least a little bit a relic of the past, in some ways... Obviously, not CDNs in total, but CDNs for this specific purpose, in the same kind of way that I've come to see that having different subdomains for your assets is kind of a relic of the past... When we were all HTTP/1 we could only have six connections at the same time, and you wanted all your assets to load faster... And it's like, with HTTP/2 and /3 we don't need that as much, and usually you can compress a lot of the stuff down to be really small, and it's only going to be the first pageload where it gets hit... So it feels perhaps some of the reason why we keep using so many of these CDNs is because we're just so used to it, instead of actually needing to use it. Especially if you're a smaller site, or something that. So if you want to think about being more secure in the future, you could also always think about just not using a CDN, and serving it from your domain directly with the rest of the stuff that you have. Or using Google.

**Johnny Boursiquot:** So if you're a Go developer, how does this affect you? Or does it?

**Ian Lopshire:** It doesn't, but --

**Johnny Boursiquot:** Not directly.

**Ian Lopshire:** \[06:10\] Not directly. But the idea of these supply chain attacks does affect you as a Go developer. I think Go has done a lot to make it so we don't have to think about that as much, but it's still something that should be thought about. We've seen other pretty crafty supply chain attacks, even this year... If you've seen the -- what's the library called, the compression library?

**Kris Brandow:** Oh, xz?

**Ian Lopshire:** Yeah. If you've seen the xz attack, that one was actually -- someone basically bullied a maintainer and said they weren't updating stuff fast enough, and got themselves in as a maintainer... And then slowly, over years, committed different pieces of code that eventually got to this exploit.

**Johnny Boursiquot:** That is sophisticated.

**Ian Lopshire:** It is sophisticated.

**Johnny Boursiquot:** I mean, who's to say the bullier didn't get bullied into giving their GitHub --

**Ian Lopshire:** That's true, yeah.

**Johnny Boursiquot:** ...or whatever it is. So it might not even have been the original.

**Ian Lopshire:** I mean, based on the length of the attack, yeah. But yeah, a hundred percent.

**Johnny Boursiquot:** Yeah, it might have been. Yeah.

**Ian Lopshire:** Yeah, we don't know. But -- I mean, do you guys think about the supply chain when you're deploying things and building things?

**Johnny Boursiquot:** So thankfully, I'm not loading things up at runtime. Even if I was serving up an app, through -- you can serve up a web app right through Go, right? You can just set up an HTTP server, serve up a static site, whatever it is... So in a way, if you were serving up a website through Go, and part of the HTML or JavaScript that you're loading and serving up to the client includes a library that you're loading at runtime, that points to polyfills to the end, you could be affected, right? That's a direct way you could be impacted. So your Go code is not being affected, but the front end that you're serving, that includes a library from that CDN could be affected.

So for Go itself, I rely on sort of the guarantees, or rather the steps that the Go team sort of have taken to ensure that the things that I'm shipping as part of my binary are indeed what I think I'm shipping. And I think you've linked out the list of things that we do, sort of how we mitigate supply chain attacks, in Go. so this was a post from Filippo Valsorda back in 2022 - and we'll link that in the show notes. So basically, from the locking of the builds, the versioning of the builds, to the contents of the build, the dependencies themselves never changing, because we're using that checksum database... To using your repository, the commit hashes as a source of truth, and building code -- and sort of just building doesn't execute code. There are certain attacks that can come from that.

And also, generally speaking, within the Go community, I think we go to great lengths to sort of not include random packages into our programs left and right... Or at least quite a few of us do. I'm certainly very critical of anything I import into my library. The notion of "A little copying is better than a little dependency" - a lot of us in the Go community take that to heart.

If I just need a quick library to do something, like a utility, a quick agility that does something sort of trivial, I'd rather find a library, see how they implemented it, and implement my own version. Or literally, copy the bits that I need, with attribution, put it in a package that I control, and I know exactly what's going on in there.

\[09:53\] So I think Go developers are very -- let's just put it this way; and perhaps that is an unpopular opinion. I think Go developers, on average, are more security-conscious, in my experience, than your typical frontend developer. I think your typical backend Go developer is more security-conscious than your typical frontend developer. That's my opinion, and I'm sticking to it.

**Kris Brandow:** I feel like some of this is path dependency as well. I've noticed how I've changed over time... When I first started writing Go, it was in the battle days, when it was just like "Oh, you just go get something, and it pulls whatever's at the top of master in Git", and that's what you get. And if it changes, and it breaks something, good luck with that. And so a lot of us -- dependencies were in some ways a liability for you, because if you want to go back and rebuild some old code, and you haven't vendored those dependencies or something like that, then you just in some cases won't be able to build it, or to spend hours digging up old commits, and carefully crafting your GOPATH to have just the right things in it.

So I think that pushed us as a community to have fewer dependencies, and have those dependencies be more stable, and I think in some ways smaller, so that there wasn't that much shifting... And then after that, we got all of these other things that we have, with the versioning, and the stable builds, and all of the cryptographic checks that we have, to ensure that things don't change underneath you. I think that just kind of solidified everything. Whereas I think in the Node world, or the JavaScript world as a whole, their path to all of this was a lot of "Just pull in everything. Don't have not-invented-here. Use proudly found-elsewhere." Just pull in dependencies. If someone's already written it, then you don't need to include it. Which is just a very fundamental -- it's this fundamentally different way of viewing your dependencies. And I think those two different paths have led to these two very different places now... Which I think in some cases does have Go engineers as a whole be more security-focused. But I don't necessarily know if those two things are related as much. I think maybe they're just kind of things that sit next to each other, but I really do think the big reason why we have fewer of these problems is because we are such a -- I guess in some ways a dependency-hostile community. We're like "Our standard library is good." Dependencies used to just be a very obnoxious thing to deal with, and that just got solidified into the community for the foreseeable future. That could change in the future, but I think if you add in the security stuff, I think that's what solidifies it going forward.

Whereas I think if we had been the type of community where we had a package manager at all from the beginning, we might be dealing with the same sorts of problems that, say, the JavaScript community is, or so many other communities are, where your package management is just kind of chaotic and a mess, and you have to do all this backfilling to get back to a place that is solid and stable.

**Johnny Boursiquot:** We're not immune to vulnerabilities, right?

**Kris Brandow:** No.

**Johnny Boursiquot:** I keep going back to the notion of the dependencies... And a lot of these sort of security problems and issues do come from dependencies. Every time you bring in a dependency from some third party, whether you're familiar with them or whether you're not, which is most likely you're not... Because you might be bringing in a dependency that itself has dependencies; perhaps you're familiar with the author of the dependency you're bringing in, but you're not familiar with the other authors of the dependency that dependency depends on... So at any given turn, you're bringing in a whole bunch of stuff into your world. So what's to stop somebody, now or in the future, from actually having malicious code?

\[13:46\] I mean, think of it this way. If I were to have a popular Go package, and I decide one day -- or maybe somebody one day gets a hold of my GitHub creds or something, and then they decide to sort of update my package to now maybe use the OS package to slurp up all of the environment variables of the application that you built, that you imported my package into. I slurp up all of the \[unintelligible 00:14:18.25\] I slurp them all up, and I send them, or rather the malicious actor sends them, \[unintelligible 00:14:27.17\] variables to some server somewhere. I mean, that's how trivial it is. Literally, somebody could just slurp up all your environment variables. Chances are, if you're following the 12-factor sort of application approach, popularized by the Heroku days, where you are configuring your application through environment variables, and you are storing secrets in there and whatnot, who's to stop somebody from slurping up all your environment variables and posting them to some random server, because you imported a library that does something you think it does, but it does more than that?

So things of that nature, which is why I'm very critical of sort of any package I bring into my world, and the packages that those packages bring. So usually, if I'm seeing lots of dependencies on a particular package, especially if the package is not used very often... Or rather, if I can go on pkg.go.dev, and I look up a particular package, I have enough metadata on the screen to help me judge. I can look at pkg.go.dev, I can look at the top portion, it tells me how many things are importing this package, how many packages did this thing import... So these things are factoring into my decision whether to import this package or not. Especially if it's a new package, not a lot of activity on it, not a lot of people are importing it, but it's importing a whole lot of things... Suspiciously doing more than it's out to, or on surface... To me, these are -- I'm immediately saying "Okay, I need to go to this repository. I need to start looking at the code. I need to start seeing what it does before I bring this thing in." And whatever it does has to be sufficiently sophisticated that I can't quickly come up with it myself.

So that whole notion of dependencies being able to harm me - that's a very real thing. Because despite all the checks and balances that we have in the Go community for preventing malicious code from getting in, if you willingly bring in malicious code in the first place, that's on you. Because you could have gone and read the code, you could have gone and checked at least to make sure that this is actively maintained, and it's a popular package, or whatever your criteria for selection is; it's on YouTube... Put in some effort to do that.

Now, we're not perfect, and some things could fall through the cracks, but it should be habit for you to be reading repositories, and source code. And obviously, some libraries are large; you can't do that. But you can rely on sort of some anecdotes, you can rely on basically how many people are using this thing, how long has it been around, is it being maintained... You can rely on those signals to help you with your dependency. So to me, dependencies, just picking them up left and right and putting them in your Go program - that's a big no-no for me.

**Ian Lopshire:** I do think the whole -- this was a controversial opinion... Or I guess minimal version selection was controversial when we were doing all this package management stuff. But I do think it helps in these cases. It makes updating to newer versions of your dependencies, and the dependencies your dependencies depend on slower, right? Because it's bringing in the minimum version it can. But I do think that's safer. Versions aren't getting updated to new versions that might have malicious code... I don't know, I think that's interesting.

**Kris Brandow:** Well, I guess it depends on what the update -- if the update is to fix some vulnerability, then you definitely don't want some old version.

**Ian Lopshire:** It's kind of a double-edged sword here.

**Johnny Boursiquot:** \[17:55\] But then who's going in and checking every single update across every single package that they're importing into their program? If it's sufficiently large enough of a project. Are you really going through -- and I'm saying this fully knowing that I myself do this. I will update dependencies, hopefully to sort of a minor version, to hopefully catch patches, and security updates and things, not necessarily jumping to the next feature branch, or feature version... But a sufficiently large enough project - are you going through and checking to see all the commits, and that they are secure, and not bringing in malicious stuff?

**Kris Brandow:** I feel like for some things -- I mean, I don't necessarily... If any package is sufficiently large, I kind of rely on the Wikipedia effect of things, where if there's enough eyes on it, if there's a problem, that'll probably get surfaced pretty quickly. It's those slightly smaller packages, that aren't used by a ton of people, but used by some, that's like "Okay, that's the danger area."

**Johnny Boursiquot:** Suspect.

**Kris Brandow:** Yeah. So if it's a giant thing, and there's enough people looking at it, then I'm not going to be as worried, because even though that's a bigger target, the speed at which a vulnerability will be found is just much, much faster than other things. But I do think -- I've kind of been on this path for a while, of just not really liking that so much of software engineering has become configuring dependencies, instead of building stuff yourself... And I think that's definitely an unpopular opinion, of like you should try and build most of the stuff that you need yourself. Or at least you should understand how it works enough that you can go read the code and make sure it's doing what you think it should be doing. I think that's one of the biggest vulnerabilities of all, is when you don't know what the code is, and you don't understand what it's supposed to be doing. Because that's when there could be some sort of vulnerability in there that you're like "Oh, well, this code looks fine, because I don't understand this underlying thing that I'm trying to do." Obviously, there's a floor to that. You don't need to go read the Linux Kernel just because you want to build an application. But I think the bar is -- we've raised it a bit too high as far as what we as individual engineers should be looking at.

I think you're right, Johnny - people do need to be going into their dependencies, and the dependencies of the dependencies, to look at what's happening there. And if you don't want to do that, that's fine. But then import fewer dependencies, or find a better way to do it. But I think that's where we need to shift as an industry as a whole; part of this job is having to do the security stuff, and having to understand what is in the thing you're making. You can't manufacture a product, you can't sell people food, you can't go out there and just spew things out there if you have no idea what's in the thing. It wouldn't be acceptable in most other industries to just be like "Yeah, I don't know, there's just stuff. I can't validate the supply chain." People would be like "That's not cool. That's not great."

And I think we do criticize other industries when they do -- like the clothing industry, where it's always "Oh, there's some terrible, terrible labor practices going on. We need to fix this." And it's your responsibility as a company to know that this is happening in your supply chain; even if it's many steps removed from you, you should understand that that's happening, and you should remedy that as quickly as you can. And I think we're in the same sort of position, where it's like, it doesn't matter if it's a dependency of a dependency of a dependency that's vulnerable. You're responsible at the end of the day, so you need to make sure that your supply chain and your bill of materials is clean.

**Break**: \[21:33\]

**Ian Lopshire:** I'm gonna be honest, I do not update dependencies until the bot checker comes out and says there's a vulnerability. Are you actually going through your big projects on a cadence, and updating individual dependencies?

**Johnny Boursiquot:** I've done that... I have some scar tissue for this one, but back when the Go SDK for Open Telemetry was still maturing, basically - this was during my time at Heroku on the observability team. We basically were very early on and embracing Open Telemetry at Heroku. So we got a lot of cuts, if you will, from the dependencies changing constantly. All of a sudden a certain package path is no longer around, and now we have to go find where that particular type is now located, or a particular behavior is now tucked into a different location... I mean, we knew all this going in; we accepted that there would be churn, and we took that on and tried to do our best to sort of either contribute something back, or understand why things were changing to some degree, and sort of insulate ourselves to some degree... But this was one of those things that the timing of it - we knew that we were going to commit to Open Telemetry for the long term; we didn't want to create yet some opaque to us only, or mechanism only to us, because we needed to have better observability, but we didn't want to sort of commit to some sort of internal thing that nobody knows about, that as team makeup changes, people come in and out, whatever it is, they have to now educate themselves on some obscure thing. We were like "Hey, Open Telemetry - that's the standard, that's the direction where the world is moving to. Let's embrace it."

So we sort of, with our eyes open, we deliberately went in that direction. But there was a lot of cuts; a lot of paper cuts as we adopted, and things kept changing. So yeah, this was one of the libraries that -- yeah, I would go in and update as things change, and then find all the places where a reference no longer is valid, and things of that nature.

So yeah, everything else we tried to keep sort of to point versions only, just patches, but the Open Telemetry stuff we kind of didn't have a choice; we kind of had to -- with every change, we kind of had to keep climbing up the ladder.

**Ian Lopshire:** Yeah, and I do think that's a good idea with something you know is going to change. Doing a bunch of small changes over time is easier than one big breaking change, right? I think it could be interesting if we kind of red-teamed this a little bit... If you were trying to get a vulnerability into a popular Go library - one, would it be possible? And two, how would you have to go about it?

**Johnny Boursiquot:** The first thing I can think of is somehow, if you can somehow manage to get the vulnerability database, or to some database, to maintain the same hash for the repository, despite the contents of the repository having changed. If you can somehow do that, then you're golden. Because what would happen is you'd have --

**Ian Lopshire:** That's interesting.

**Johnny Boursiquot:** Yeah. Because what would happen is the checksum -- the checksum sort of changes every time a new commit happens. So if you say "Hey, version 1.0.2 in this repository, this commit hash, everything about this repository at this point in time generally has a specific checksum." And that goes into the sumdb. And then now, all of a sudden, you manage to somehow have the same checksum, but having changed the repo somehow to include your malicious code. Then you're in. You're in. Because everybody will just -- the checks that happens that say "Hey, are these things lining up? Is the checksum and the security checks we have based on that - is everything lining up?" "Yup, you're good", but somehow we have new code coming in - that seems very improbable. But again, I mean, we're talking about the improbability of things here, right? Things that should never happen, but still happen.

**Ian Lopshire:** Does that seem improbable? Isn't that kind of how Bitcoin mining works? We're trying to append data, until a hash matches what we expect. Could you not?

**Kris Brandow:** I mean, modern day cryptography is built on the assumption that it's not impossible, but close enough, that collisions won't happen.

**Ian Lopshire:** It might take a million years, right? But you can do it.

**Kris Brandow:** I think it's more of like the XKCD comic where it's like "Oh, this person's used this level of cryptography. We'll never be able to break in", and it's like "Beat them with this wrench until they give you the password" right? \[laughter\] Instead of trying to circumvent this system as a whole -- instead of trying to circumvent the computing system, you should circumvent the human system, or find a vulnerability in that human system.

\[30:06\] So you find a package that maybe has -- like what happened with xz, where you have an overwhelmed maintainer. And then you offer some help, and you start doing things, and maybe at one point, in one innocuous commit you just sneak a package in. Your own package, that you control, that's just kind of not doing anything particularly fascinating or whatever. And then it's just there for a long time, and people just get used to it... And then after a while, you add some malicious code to that, and maybe in a little patch version -- you just bump the patch version, and then no one really notices... Especially if this is a package you update frequently; maybe you're adding a bunch of stuff to it, maybe you're building it out a lot... So it just kind of slips under the radar. Maybe it's a dependency of your dependency; you kind of get some levels of indirection going.

And then you just slip a little vulnerability in there, and then it kind of gets to everything. It's just like another routine update that everybody sees. You can't go and look at the code itself, because the code itself looks fine. It's like "Oh, there's nothing..." You didn't put any malicious code into the main dependency that people are looking at; it's at some further removed dependency, that might have gotten updated a while ago, and now it's just gotten trickled up. So you'd have to really chase down a lot of that. I think that's the vulnerability if you have a large package, with a lot of dependencies, where someone could sneak something this in. But I think that's a much more viable path than trying to break modern cryptography.

**Ian Lopshire:** Yeah, you'd almost have to hide it in plain -- well, not almost; you would have to hide it in plain sight. I think that's one of the advantages of how Go does things. For, say, a C program, you're often shipping a tarball with compiled stuff in it. So you can hide whatever you want in there.

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** I mean, you can, right?

**Johnny Boursiquot:** I mean, hopefully it comes with a checksum. You can at least verify.

**Ian Lopshire:** But it's not like you could hash your C code, and make sure that what's in that tarball is what's in your C code, because that's just not how it works. It's a precompiled piece.

**Kris Brandow:** Oh, you mean if you ship a --

**Ian Lopshire:** Like a DLL, or --

**Kris Brandow:** Yeah, an \[unintelligible 00:32:12.00\] or something.

**Ian Lopshire:** Yeah. I don't actually know how it works, to be perfectly honest, but I know you're not shipping the C code.

**Kris Brandow:** Yeah, if you just ship like the object code, and you're like "Oh, just link this in during the compile process", so that it's part of --

**Ian Lopshire:** Exactly. The fact that we ship the source code, we're not shipping precompiled bits... There's far less places to hide things, I think. So you really would have to slip it into plain sight slowly over time.

**Kris Brandow:** Yeah, I think that's one of the benefits. But that also means that we can't really ship -- the thing with C code... So I've started learning C again, and one of the things I want to do is be able to control one of my cameras with it... And Sony has an SDK that you can use, and they just ship the compiled object. Or maybe it's just a shared library. But they ship the compiled code for your platform to you, which allows them to provide an SDK to everybody, but they don't have to necessarily open source it... Which I think is an interesting model for code sharing, where it's like you can share the functionality without sharing the code... But that does come with the vulnerability that you could put whatever you want in that object file, and it can do whatever. But you can also just use other code scanning techniques to find the malicious code, and things. And other security techniques as well. In your example you had, Johnny, where it's like "Oh, if I just slurp up all of the environment variables and ship them off to somewhere" - well, if you prevent your process from contacting random URLs on the Internet, then yeah, sure, you've slurped up all the environment variables, but you can't send them anywhere, because you're not allowed to contact some random server.

So I think also keeping in mind that there's other layers of protection that we can have, so that even if there is some sort of vulnerability, it won't necessarily affect us, is an important aspect of this. And I think in the world of C -- I mean, I'm not a C programmer or developer, so I don't really know how they do it... But where you don't have the ability to necessarily look at all of the source code that you might be using, you are forced to use these other sorts of protective mechanisms. Whereas we might not be as apt to use those in Go, because we can see all the source code, so we're like "Oh, we can look at it. If there's something wrong, we can see that there's something wrong."

\[34:26\] So we might not restrict our processes from contacting random servers in places... Even though we probably should. But that's like an operations thing, and that's usually the department, and that's usually going to be a little bit annoying... And probably some developer somewhere is gonna get annoyed, because they want to send some stuff to some random analytics thing, and they don't want to file a ticket with IT to open up the... You know, there's reasons why we don't do these things... But if you're kind of forced to do it for the base-level security, then I think that can help sometimes. But really, you should walk down your stuff by default, and then make it easy to open things up for good reasons.

**Johnny Boursiquot:** You don't allow your binaries to make random HTTP posts to wherever?

**Kris Brandow:** \[laughs\] I mean, if I'm running production infrastructure, no.

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** I'm gonna take some notes here real quick. I might need to look at a couple things...

**Johnny Boursiquot:** Like "Why does this thing need to contact some random server somewhere?" Although, once again, it's a trade-off, because engineers do love just pulling in... It's like "Oh, I've got to do this thing. Just get out of my way. I need to move. Let me get this dependency in, that does this thing. We're going to use this new service." It's like "Have you vetted that service? Have you made sure that they're good, they're solid?" It's like "No, no, we've just got to get this thing done and out the door." I've heard that excuse a lot.

**Johnny Boursiquot:** "What is this package that you're importing with a blank identifier? What does it do?" \[laughter\]

**Kris Brandow:** Yeah...

**Ian Lopshire:** Going back to the idea of hiding malicious code in plain sight in Go... I just cannot think of how to build something in Go that makes a POST request out without looking it's making a POST request out. Or at least looking like "You're doing something weird here." There's just not that many ways to hide stuff like that.

**Kris Brandow:** I mean, if you're clever...

**Ian Lopshire:** I'm sure there is. I can't think of one.

**Johnny Boursiquot:** I mean, the first I -- in my workflow for validating things, which includes looking at pkg.go.dev, and that metadata, whatever it is, if I dig sufficiently enough, one of the things that I do when I'm looking at repositories for some dependency that my dependency, or however many deep I have to go, if I just do a quick search for an HTTP package in the repository, if I find some... \[laughs\] Then I'm going to be very interested in this package. This thing is supposed to be, I don't know, flipping characters backwards, or something... Why is the HTTP package in here? What do you need? You kind of have to be critical. "This package is supposed to do this thing, very specific thing. Why is it doing network calls? What's going on?" Things like that, that should be obvious smells that you need to investigate. And these are what I'm talking about. We can't catch everything. And whatever our processes are that we think "Oh yeah, we go through umpteen different hoops we make people jump through, so we avoided vulnerabilities", security is a game of mitigation and sort of safeguards, and it's not something you can 100% sort of do. So part of that mitigation is you as a developer, you're kind of the first line of defense here. And sort of being critical of these things. I'm importing this package, it's supposed to do this... Why is it doing that?

**Kris Brandow:** \[38:07\] Yeah. Although, if we're red-teaming again, if I was going to build some sort of vulnerability, I wouldn't use the HTTP package. I would probably just use the OS package, and do some sys calls, set up the socket...

**Ian Lopshire:** Sys call... \[laughter\] Yeah, but exactly... I would see that and be like "Well, this looks strange. Why is this character flipping making sys calls?"

**Kris Brandow:** Or you do something and you say "Oh, this character flipping needs to be super-fast, so we've written it in Assembly", and then you just do all the sys call stuff for the Assembly, and then you're gonna be able to look at that and know what that's -- lik, can you tell the difference between flipping some characters around and setting up a socket in Assembly? It's...

**Ian Lopshire:** I think I could tell. I really do.

**Kris Brandow:** Maybe, maybe.

**Johnny Boursiquot:** You are a giant among people, Ian. \[laughter\]

**Ian Lopshire:** I have a feeling that the length of that Assembly, for one, would be much shorter than the other. But who am I to tell...?

**Kris Brandow:** I mean, it depends. Maybe there's some text blob you have somewhere else that's obfuscated code that actually unrolls into some more Assembly that does the thing... You can do some deep layers of this to really try and trick some people if you really wanted to. But once again, that's a lot of work where you could just use a wrench instead... There are other ways to exploit people.

**Johnny Boursiquot:** Right. It's the obvious. It's the obvious stuff you want to -- some things... I mean, if somebody is sufficiently motivated, you're gonna be hard-pressed to find all the things. It's the easy stuff; the script kiddies stuff. The easy, "Let me just use the HTTP package to send this stuff to my web server in my basement somewhere." It's the easy stuff you should at least be able to identify quickly.

Then again, I'm sure there's companies out there that specialize in this kind of thing too, like security companies. They can scan your binaries, and things, and I'm sure there are solutions you can bring into bear, that you can pay for, that do -- if you really want that extra layer of peace of mind, to some extent, you can bring in those third parties.

**Kris Brandow:** Yeah. Because at a point too, it's like "Oh, okay, well, I can't attack the code directly. Oh, you're running Kubernetes now. Maybe I can attack Kubernetes and get in that way." So as soon as you fortify one part of it enough, you can shift to another part of it where you can get in and do some damage.

I think, to some degree, a lot of it's about deterring, like doing lots of deterrence all over your system to make it harder and harder, so basically they go try and attack somebody else, because you're too difficult and not worth the time. And then hopefully we all start doing that and wind up in a better place, but that doesn't necessarily happen. You can't fix the industry all at once. But yeah, before we move on to the next segment, any last words on dependencies and vulnerabilities and all that?

**Johnny Boursiquot:** A little copying is better than a little dependency... \[laughs\]

**Kris Brandow:** Yup.

**Ian Lopshire:** I just wanted to say that Go does have a very good securities data plane, vulnerability database, and there are good bots to scan for those... So if you just want a first step, just put that in your CI system and update when it tells you. I think that'll go a long way.

**Kris Brandow:** Sounds good. And now, for our favorite little segment of the show, Unpopular Ppinions.

**Jingle:** \[41:34\]

**Kris Brandow:** Alright, who has an unpopular opinion?

**Johnny Boursiquot:** I'll reiterate mine from earlier. I think, on balance, backend developers are more security-conscious than frontend developers. Because - well, for a lot of reasons we just talked about, but the sheer number of vulnerabilities popping up from the npms of the world, and... It just seems to me like they're -- again, I'm painting broad strokes here, but to me it feels like it's too easy to simply copy-paste code components from frameworks, and then assume, simply assume that it's all taken care of. Some CDN, some library from some CDN here... Of course, that's what we always do in the community. There's a lot of assumptions that "Oh yeah, everything's secure by default. I don't have to sort of pay attention to it." And very rarely do I hear sort of frontend folks sort of sweat those details. Not to say that there aren't folks in those communities that do... I'm just saying that, on average, over the last few years, regardless of the backend community I've been in, there's always some care and attention, special attention being paid to dependencies, and security, and things of that nature. I get less of that from frontend communities.

**Kris Brandow:** I don't know. I mean, I definitely think that backend people... Yeah, I feel like because so much security is pushed onto the backend, like there's so much that needs to be done to secure it, and it's such a big target, I think people in the backend do tend to be a little bit more focused on that, instead of the other aspects of things. Where the frontend people are just mostly focused on trying to get the frontend to work, and wrangling with the many different browsers, and all of the weird things that happen between them.

I think it's also a level of control that you wind up having more of in the backend than you do on the frontend. At the end of the day, your code is running on someone else's computer, on top of one of many browsers... It's just like a stack you don't have control over, whereas in the backend you have a lot more control over your stack and everything that's happening with it.

**Ian Lopshire:** I do think backend developers should be more security-conscious. Just thinking about the stakes... A backend \[unintelligible 00:44:20.04\] might release your whole database. A frontend - it might be one user. Like...

**Johnny Boursiquot:** When I tried to go to JSTOR, it sends you to casino.com, or something. \[laughter\] You know, it's not nothing...

**Ian Lopshire:** No, it's not nothing. And I do think both should be, but... If I had to have one of my users attacked, I would rather it be individual users than my whole database.

**Kris Brandow:** I think part of it also comes from the fact that your backend code is within your security domain, and your frontend code is not, and you kind of have to treat your frontend code as if it's hostile, in all cases. So I think that kind of lowers the necessity in some cases of needing to be as security-conscious about what's going on in your frontend. And most of the time, a lot of the frontend vulnerabilities, like cross-site scripting, can be blocked or prevented on the backend side of things as well. But I do think the kind of lack of security awareness for frontend people, especially lack of cryptographic awareness, does hinder in some ways. I've noticed that there's not a huge amount of these, of the cryptography APIs in the browser, where that could be a much better way to do authentication and authorization. Because the browsers had APIs for years now where you can just create a public-private key pair that is locked into the browser, where another script, even on your subdomain, can't extract that key. And that would allow you to kind of uniquely identify that browser in a cryptographically secure way, and you're not passing around tokens that can be lifted, kind of no matter what, and someone can run some JavaScript on your website.

\[46:07\] So it's like, yeah, there's a little bit you can do through cross-site scripting. You can still make API requests, but you can't lift that key and send it to a server and start making a ton of requests, or anything that. Whereas you can do that with a \[unintelligible 00:46:18.05\] token. And I think some of the reason that's not done is because there isn't as much of a familiarity with these tools and these ideas in the frontend community, so there's not a lot of support for this type of stuff. I mean, we're starting to get it with things like passkeys, but that is super-late compared to what we could have had if we tried to start doing this much earlier.

**Johnny Boursiquot:** That's not an unpopular opinion. I don't know how passkeys work. I keep getting -- every website I'm using starts saying "Hey, use a passkey." I'm like "Oh." I might have read something from Microsoft once upon a time...

**Kris Brandow:** To massively simplify it, it is just what I described. It's asymmetric cryptography. So it's a public-private key pair, and then the public key gets registered with the server, and when you go to sign in, it signs a thing, and it sends it to the server. It does the whole dance to confirm that you actually have the passkey.

There's a whole bunch of other stuff that needs to get done for things that are like shared pass keys, to actually move them around between different places... But at its simplest, it's public key cryptography applied to the authentication process.

So yeah, it's a lot like what we do with SSH, or with a ton of other things. Or TLS. When you use mutual TLS, it does the same sort of thing. So it's just applying that to the browser. Passkey is great. I love passkeys.

**Johnny Boursiquot:** Great, except nobody knows how to use them. The setup process - I went through the setup process a couple times... I couldn't tell you what happened during the setup process. And it was slightly different when I did it for Google, and Apple's now doing it to me, and I've done it with Microsoft... They seem to be slightly different, or at least the experience of them helping me set up a passkey seems to be slightly different. Sometimes with my phone, sometimes with my laptop... Honestly, I don't know how it works. Maybe in a few years...

**Kris Brandow:** Because I use 1Password. So that's just all integrated.

**Johnny Boursiquot:** So do I, yeah.

**Kris Brandow:** So 1Password's just like "You can set up a passkey. \[unintelligible 00:48:24.25\] But it's fundamentally the same thing that we were doing with Yubikeys. I think the flow to setup a Yubikey is the same as the flow to setup a passkey. They're effectively the same. But yeah, it's slightly different on different platforms, but it's fundamentally doing the same thing, of being like "Here's a public key that identifies me. Okay, great." Obviously, there's a lot more nuance and a lot more details than that, but that's effectively what's happening here. Giving them a public key that identifies who you are, and then they ask you to prove it later. But yeah, I'm glad that we're kind of trying to retire passwords. That makes me very happy. But it is --

**Johnny Boursiquot:** Listen, passwords are gonna be the fax machines of tech. They will never go away. Never.

**Kris Brandow:** \[laughs\] Yeah...

**Johnny Boursiquot:** Somebody, somewhere -- it'll be like your old dentists doctor's office, or something, you need to send some proof of insurance, blah, blah... And they'll be like "Can you fax that to us?" I'm like "What?! What do you mean?"

**Kris Brandow:** It's like, will we be able to --

**Johnny Boursiquot:** "You think I have a fax machine laying around?" \[laughs\]

**Kris Brandow:** I did have to fax some things to the government, and I was like "Fax? Fax...?! Okay..." Passwords will never be completely gone, but they can be effectively gone for the vast majority of things. We've had social sign-ins for a long time. Now we have passkey. And you have password managers now, which is the -- go use one of those.

**Johnny Boursiquot:** And only now are general non-tech people starting to understand what they are and why they should use them. I don't expect my mother, bless her soul, in her seventies, to know how to use a password manager. Are you kidding me? The amount of handholding that I would have to do...

\[50:17\] Basically, I'd have to tell her that "Look, use a random password for every website. Yes, I know, it's painful, but keep those things safe somewhere on your phone, in a notes doc, or something... And then just don't use the same password everywhere, and be very careful. If anybody, at any point, asks you to send them a password, call me right away." These are the safeguards that I have, because I can't expect her to use a password manager. That's way too sophisticated or complicated.

**Kris Brandow:** Maybe it's an unpopular opinion, but I think anybody that can use the computer can learn how to do these. I think we introduced them too late. If we had started with this passkey revolution 20 years ago, like we could have, I think everybody would be used to it... Like, "Oh, why are you still using a password? That's so weird; you should be using this other thing that we have." But we just didn't build up the infrastructure.

I think the thing that's pushed passkeys forward is the biometrics in our phone, and on our computers, where now you can actually confirm that the person sitting at the computer is who you think it is, within a degree of certainty. But yeah, I think that a lot of this is -- it's hard to understand, because we're bad at explaining it, not because people fundamentally can't understand it. I'm sure your mom doesn't remember every single person's phone number. I bet she's figured out how to use the Contacts app on her phone and put all the phone numbers in there, and just be like "Oh, I'm gonna call this person. Let me click on their name in the Contacts app."

**Ian Lopshire:** I would disagree with that. \[laughter\]

**Johnny Boursiquot:** Your mom knows -- she has a phone number of everybody she's ever met in her head?

**Ian Lopshire:** No, just a bunch of random numbers in her text messages that are like "I don't know who that is, but I talk to them." \[laughter\]

**Johnny Boursiquot:** Oh, geez...

**Kris Brandow:** I mean, there'll always be some people that --

**Ian Lopshire:** It's not my mother I have specific in mind, but I have someone specific in mind.

**Kris Brandow:** There's just some people that will just do weird things like that. It's like "Oh, this is somebody's number. I don't know whose..." But I would say the vast majority of people understand how to work their Contacts app in their phone... Which is effectively a pretty similar thing. It's like "Oh, go look it up in your Contacts app. Okay, go look in your Password Manager, and click this and this." Okay, that was a tangent.

Ian, do you have an unpopular opinion?

**Ian Lopshire:** Yeah, this one's gonna be very unpopular... It's related to what we talked about. I don't think you really need to update dependencies until you have a reason to.

**Johnny Boursiquot:** I mean, yeah. That's fair.

**Kris Brandow:** I think that's... Literally, you only need to -- I don't know how that's unpopular. What do you mean? Do you think we just update our dependencies for no reason?

**Ian Lopshire:** I mean, yeah.

**Johnny Boursiquot:** People do that. Yeah.

**Ian Lopshire:** People do that. People go through monthly and update all their dependencies.

**Johnny Boursiquot:** Yeah.

**Ian Lopshire:** And I think that's a waste of time. Unless you have a reason to. Unless there's a vulnerability, a known vulnerability, I don't really think there's a reason to actively update your dependencies.

**Kris Brandow:** Unless it's like the API is changing, or you need some new feature... But yeah, if you just go through to update to keep everything updated... I mean, to be fair, I would say - maybe, to counter that a little bit, I would say I'd prefer if especially enterprises did that, as opposed to what they do, which is never update anything, and then there is a vulnerability, and then they don't update it, and then they get hacked. So I'd much rather if they had a process in place to always update everything, and at least then, when there is a vulnerability, they know how to update things. Because there is a risk that if you don't update things often enough, then you might not know how to when you need to.

The reason we do fire drills is because you need people to know what to do when there's an actual emergency, and the time to figure that out is not when the emergency is happening.

**Ian Lopshire:** \[54:16\] And I don't believe this in other languages. Like, if I was doing a JavaScript thing, I would be like "Yeah, I should probably update these every once in a while", because I don't know if you've ever not updated React for five versions, and then \[unintelligible 00:54:26.25\] \[laughter\]

**Kris Brandow:** Might as well throw out whole project and start again.

**Johnny Boursiquot:** Yeah, start over.

**Ian Lopshire:** Let me specify it... For a Go project I don't think you really need to proactively update dependencies, unless there's a known vulnerability, or you need a new feature.

**Johnny Boursiquot:** Yeah, a lot of that's going to depend on the sort of the discipline of the maintainers of the projects that you're on. I've been in situations where a security patch gets made to a version of a particular dependency that the patch has been added to an upgraded version, that I was not using... So that meant if I wanted the patch, I had to upgrade and then get the patch. So if they're not disciplined enough, or maybe they don't have the resources, to be frank, or the time to patch every version with that particular thing - which is labor intensive, right? - then your best bet might be sort of a forced upgrade, which could introduce breaking changes to your stuff, before you can actually get the patch that was applied to the appropriate level that you're trying to upgrade to. So you don't always have the choice. Again, you're kind of at the mercy of your dependencies, which is why I don't like to have that many of them.

**Ian Lopshire:** This is also coming from someone who has very few dependencies in any of the projects I work on, so I might be biased.

**Johnny Boursiquot:** Good for you. \[laughs\] You are blessed.

**Kris Brandow:** Okay. So my unpopular opinion - I feel like this is probably gonna be very unpopular... But I think everybody should learn C. Maybe not write everything in C, or write a lot of stuff in C, but I think everybody needs to learn C. I think that's a thing that we as an industry need to do. Because I don't think people understand nearly enough how any of this stuff works. I think too many languages do a very good job at hiding all of it from you.

**Johnny Boursiquot:** What about C specifically -- like, do your own memory management? Or what do you want them to get out of it?

**Kris Brandow:** Yeah, I think C is one of the few languages that is just basically touching the metal. It's right there. I mean, the lowest you can go is Assembly... Unless you're trying to handcode machine code for some reason. But there's Assembly, and then right above it is C. So you get a lot of nice higher level facilities that you get in other languages, but you have to understand how the machine works to write C, or even to learn C. You've gotta understand what this memory model is, you have to understand how your actual instructions are kind of flowing, to at least some degree, if you want to write C or other languages that don't have this procedural level to them, where they're more object-oriented, and things are more abstract. It can be more difficult to understand how your machine is actually functioning.

**Johnny Boursiquot:** Personally, ever since I've been doing Go, I don't miss OO. And some people will say "Oh, Go is object-oriented." I mean, that's a debate that's kind of gone on for quite some time... But I think writing Go feels more like writing C to me than any other language. So I'd say yeah, if you've never done C, and you want to know what it was like, or what it is like even still for some people that are still writing C code, then yeah, definitely take a peek. At least do a Hello World, or something a little bit beefier than that, just to give you an idea. And see what it's like to actually do your own memory allocation and freeing. Get a feel for what it is that you benefit from a more modern language, for sure.

\[58:17\] But as far as a sort of object orientation, multiple layers of abstractions, abstract types, and all these things - I don't really miss those things... The most abstract I ever want to go in my Go programs is using an interface, or something. That's the extent of OO I ever want to do, abstractions I ever want to do.

**Ian Lopshire:** I was gonna say, I'm not sure I agree everyone should learn C, but everyone should try, I don't know, like a C style language; Go, C, something like that. And I say this -- as someone who wrote in PHP and JavaScript for the first couple of years of my career, I had no idea that an HTTP request was just bytes over \[unintelligible 00:58:57.19\] I mean in JavaScript you have objects, and in PHP you have these big associative arrays, and I was like -- I had no connection of how those got switched between each other. Objects were just what they were, and I had no concept that everything is just bytes. And you make a lot of silly mistakes when you don't have that core concept. So doing something at kind of just a lower level I do think is important, even if you're only going to be working in those higher-level, more abstract languages.

**Kris Brandow:** Yeah. And the reason I think C specific -- I mean, a) C is the lingua franca of all systems out there. If you want to talk between two languages, you're doing it through C at the end of the day. But I also think maybe there's another language that we had, that just could show you more of the fundamentals of how machines work. That would also be helpful. Because I think one of the things with C, where it doesn't have anything -- it's not like in Go, where you can just be like "Oh, I'm gonna say go in front of my function, and it's gonna go spawn a goroutine. And yay, concurrency." It's like, no, you have to figure out how that works for what you're trying to do, and how multi-threading works... But also, you need to have some awareness of what is a cache line, and how does my CPU work? And how do all of these things work? I think enough people don't understand that now, and we write really bad software as a result.

**Johnny Boursiquot:** Because we've been told we have unlimited memory, unlimited disk space, unlimited CPU... Just throw another VCPU at it... We've been trained, in the cloud era, we've been trained to just think "Oh yeah, don't worry about these things. We'll throw more hardware at the problem." And back in a day we didn't have that luxury, right?

**Kris Brandow:** People also do this with -- we've talked about memory management, but it's the same thing with garbage collection. There's a whole thing of that line of like "Oh, we have a garbage collection problem." It's like, you don't have a garbage collection problem, you have a garbage problem, where you're creating too much garbage for your garbage collector to keep up with. You're just making too many things and throwing them away.

I think there's still this persistent idea that you don't do memory management in languages where you aren't doing manual memory management. It's like, no, you still need to do memory management, you still need to think about your memory, and how you're laying things out, and what you're doing with them, and how many of them you have when you're designing your application. But yeah, I think by going into the depths of C, I think you can learn a lot of this stuff and have enough of a familiarity to be better at the higher level languages.

**Johnny Boursiquot:** I don't disagree.

**Kris Brandow:** Alright. Well, that's it for today, folks. Thank you for listening, and make sure that your dependencies are all in check. Don't have any vulnerable code running out there, please. Pretty please.

**Johnny Boursiquot:** And do a quick grep on all your frontends. If you have polyfill.io anywhere in there...

**Ian Lopshire:** Get that out. Get rid of that.

**Johnny Boursiquot:** Do not walk. Run! To your closest VCS. \[laughter\]

**Kris Brandow:** Even do it on a Friday. This is a reason to deploy on a Friday. Anyway, thank you for joining me, Ian and Johnny. It was it was a great time. And thank you, listener. We'll catch you next time.

**Johnny Boursiquot:** Bye, y'all.
