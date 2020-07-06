**Jerod Santo:** So we're joined by Ronak and Beth from the Safari team. Thanks so much for coming on the Changelog.

**Ronak Shah:** Great to be here.

**Beth Dakin:** Thanks for having us.

**Jerod Santo:** Fresh off of the big announcements at WWDC 2020. Lots going on in the Safari world. I feel like this was a particularly big Safari announcement, both for consumers and developers. Do you guys share that sentiment?

**Ronak Shah:** Totally. I mean, this is probably the biggest update we've done since we first introduced Safari. We're forwarding everything from performance, continuing to deliver industry-leading battery life, doing lots to continue protecting user privacy on the web, which is so important to us... And in addition to all of that, we have all of these amazing features - customizable start page, built-in translation, and a redesigned tab experience that I think users are gonna love. So just right there, it's a huge release. And then on top of that, for developers, doing things like supporting the web extension API, so that developers who have built extensions for other browsers, they're gonna be able to bring that over now to Safari really easily. So there's a lot there. This is a huge release for us.

**Jerod Santo:** This is a huge release indeed. I was just curious, from each of you - maybe we'll just start off with what your pet topics or features are. What do you think is the biggest release for developers? What are you the most excited about? ...both Beth and Ronak, take your turns.

**Beth Dakin:** I think it's gotta be the web extensions, when I think about developers this year. It's a huge, new world to open up to web extensions, and we've built some really nice tools to make it easy to bring those extensions over to Safari... So that's something that I'm really excited about.

**Ronak Shah:** \[00:04:05.03\] And to follow onto that, I think developers are gonna be excited that they can take advantage of the web extension API and the tools that we've built to make that process simple. And once they've done that, we spent the time to create this whole new category in the app store, just for Safari extensions... So all of that hard work that developers put in to bring extensions over - we're gonna be able to showcase that, so that users can easily find extensions that they're interested in and start using them right away. I'm really excited that we thought about this end-to-end, from the developer perspective, all the way to putting it on the store and getting it out to users.

**Adam Stacoviak:** When it comes to web extensions in particular, what was the hurdles in prior architecture? Why is the new way you're doing it now so much better than previous ways?

**Beth Dakin:** One of the things with web extensions that we really wanted to think about a lot is the privacy angle, where there's so many APIs available there, where if a user just installs this extension they might not realize the full extent of what it's capable of accessing... So we really wanted to think about a thoughtful way to give that power to developers while also empowering the users to only use that when they really want it, and to understand what that little program is able to do. So I'm really happy with what we came up with, where we have some extra privacy controls on the extension button, and we encourage users to consider enabling the extension only for a day, or only for certain websites, if that makes sense for them.

We came at this from an angle of privacy being our biggest concern, but the two other biggest things we're always thinking about are performance and power... And really, having those controls is huge for those also, because extensions can make web browsing slower, and they can use up a lot of battery. So just having a little bit extra ability for users to control the extension, and when it's running, and encouraging them to consider that makes me feel a lot more comfortable with how powerful web extensions are.

**Jerod Santo:** So this API that you're now supporting - this was developed by Mozilla? Is this an open specification, and Mozilla and Google have been supporting it and now Safari's supporting it? Give us a little bit of the history on that, because I'm not aware.

**Beth Dakin:** So it's technically not an open standard right now... It'll be interesting to see that, because we wanna contribute to it in an open and collaborative way. But I believe it started as Firefox. I could be wrong about that; I'm gonna wanna go double-check that... But I believe that they started a web extension API, and Google kind of took it and ran with it, and built a lot on top of that. And then it's been this thing where they're kind of all supporting the web extensions and catching up with each other, but it's not actually in an open standard. I would love to see it in an open standard, personally... So without being in an open standard, it's kind of being treated like one, where developers are creating extensions using it, and expecting them to mostly work interoperably between the browsers that support that API. So we're coming to the party now, and that'll be fun. \[laughter\]

**Jerod Santo:** Awesome.

**Adam Stacoviak:** Well, you've got a welcome from Mozilla on that front; Caitlin Neiman mentioned in a blog post on the Mozilla blog - she mentioned at the WWDC 2020 event that you announced this thing, and she even in her own words says "Similar to Firefox's Web Extensions API". But they're welcoming you to the web extensions community.

**Beth Dakin:** Oh, thanks!

**Ronak Shah:** That's awesome. It's gonna be great for developers to have this common set of APIs. And there may be differences here or there, but to have that common set of APIs that they can develop against is gonna be a big deal.

**Jerod Santo:** \[00:08:05.29\] Yeah, so as a web developer, a lot of the extensions that I end up wanting to install are developer-focused extensions... So these are a lot of people scratching their own itch. I even have created a couple over the years as well, and I've felt the pain of writing this common little JavaScript interaction, and then saying "Okay, now I have to create a Firefox extension, and a Chrome extension", and I am a Safari daily driver, so I'd create a Safari extension... But because of that extra step, a lot of developers, because they aren't using Safari as their development browser, they just don't take the time.

So as a Safari user myself, I would go find the cool extension, and it would be Chrome only; or it would be Chrome and Firefox. It seems like Safari wasn't in the party, as Beth said. So how easy is it now, when -- is this Safari 14, or is this 13.1? When the new stuff gets into Safari, this web extension support, how easy is it to get those Chrome extensions, those Firefox extensions either ported over, or is there no code changes...? How does that work?

**Beth Dakin:** So step one is you'll need Xcode. But from there, if you have an existing extension, it's super-easy. We built a command-line tool, Safari Web Extension Converter, that can take a Firefox extension, or a Chrome extension, or an Edge extension, and convert it to a Safari extension. It will create an empty app shell that you don't need to do any modifications to if you don't want to... But that's how part of how our extensions are bundled in the app store. Or you can choose to modify it. Up to you, of course.

And the script will let you know if there are keys in your manifest that aren't currently supported in Safari, so it sort of gives you that heads up about any needed changes... But what we've found - because we've been testing extensions and converting them ourselves to see if they work - is that many just convert and work right away.

**Jerod Santo:** So what happens to the current Safari extension store? It's been its own thing; I remember there was a web interface... Does it go away and everything's in the app store, or is it already sort of integrated into the app store? ...right now, when I open it up, it opens up a thing that says "Safari Extensions." It looks kind of like the app store app... But is this exposing it to more people? Or maybe that already happened and I just didn't notice.

**Ronak Shah:** So we're gonna continue to support our existing extension model. Both existing extensions, of which there are a lot of popular ones, like Honey and Grammarly that are already available on Safari... You're gonna be able to get those from the same new category in the Mac App Store as these new extensions that are based on the web extension API. So we're gonna have one convenient place in the app store... And what's cool is we're gonna actually have editorial top charts, all of the tools that people love to use in the app store, to make it really easy for people to find these. So from a user perspective, they're gonna be able to pick from this great selection, regardless of how a developer has built the extension.

**Adam Stacoviak:** I actually just installed Pocket, and following your own instructions, Jerod, I went to the app store preview, which launched the actual app store Mac app, that now shows me a preview of a few Safari extensions... And I was just telling you before the call that I think I just did this, because when I installed Pocket to Safari, it launched the Mac app store, I installed an app from the Mac app store, and then Safari could talk to something behind the scenes. As a user it was pretty interesting, but having been down this road before with Safari, installing extensions, it was foreign... But I was like "I think I just did this." \[laughter\]

So I see here on this Safari's extension preview page here in the Mac app store now that it's showing me Pocket, so I'm assuming that was true, based on it being there.

**Jerod Santo:** There you go.

**Beth Dakin:** Awesome.

**Jerod Santo:** Is this macOS only, or are you guys bringing extensions to Safari for mobile?

**Ronak Shah:** This is for macOS. We support extensions on Safari on macOS. We've certainly heard feedback about extensions on our other platforms, so we're aware of it... But we're talking about Mac today.

**Jerod Santo:** \[00:12:12.20\] Yeah, fair enough. Fair enough.

**Adam Stacoviak:** So what is the most important thing to developers when it comes to extensions? It might seem obvious, but what are the things that developers should be most excited about with web extensions?

**Beth Dakin:** Good question... One of the things that's just obvious is mostly what we've been talking about - that if you already have an extension, there's a whole audience out there for you. If you're starting from scratch and you wanna build an extension, it's also a great choice, for that same reason - the interoperability reason. And then in terms of the APIs, there's just a lot there. There's so much you can do, there are so many APIs... It's epic to go through the number of APIs, if you sum them all up throughout the different browsers, because not everyone implements everything. But the total possibility there is extreme. I think that that part is exciting as well; there's just a lot that you can do with them.

**Ronak Shah:** And I think just putting myself in the shoes of an extension developer, being able to reach this audience, this huge audience that we have of Safari users, who are really passionate, who are often super-enthusiastic about the apps that they run, the technologies that they use, and being able to reach them now with your extension, so that they can dial in their browsing experience is a really big deal too, I think.

**Adam Stacoviak:** Are those numbers you can disclose, to some degree? I know you have installs of Safari, of course, but actual active users of Safari...?

**Ronak Shah:** I don't have hard numbers to share, but we have tens of millions of Mac users out there, and a whole heck of a lot of them use Safari as their primary browser... So it's a lot of people. It's a lot of people who use the latest. They upgrade to the latest versions of macOS, and they're super-knowledgeable, and being able to reach them with your extension is gonna be great.

**Adam Stacoviak:** I know Jerod is nodding in his head, because he's been a die-hard Safari user forever.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I bounce around from Chrome, to Brave, to Firefox, now I'm back to Safari again... One thing I love most about the last two years has been the utter focus across the board for Apple when it comes to privacy. So I take that as a die-hard Apple user; you see a classic Mac behind me, you see the trash can behind me... The pseudonym for the prior Mac Pro... I'm using an iMac Pro right now, I've got an iPhone in my pocket, I've got an Apple Watch on my wrist... I'm an Apple user, long story short. And so to not use Safari primarily was kind of troublesome, and some of that was because of the lack of dev tools, or the differences between different browsers, which I'm sure we'll probably talk about... But Jerod nods his head every time I say Safari, so he's a die-hard Safari user. Whereas me, I'm wayward when it comes to browsers. \[laughter\]

**Jerod Santo:** "I'm wayward..." Experimental.

**Ronak Shah:** You've heard us say it before, but truly, we believe that privacy is a fundamental human right, and it's something that we think about deeply as we think about how we're building our products. And you see that. In Safari you've seen it over the years; we were actually the first browser to include private browsing. People forget this, but way back when we introduced the world to private browsing, we were the first browser to block cookies by default. We introduced intelligent tracking prevention a few years ago.

\[00:15:50.23\] People may not know this, but back in March we actually became the first browser to block all third-party cookies by default. I believe we're still the only browser to do that. So we have a long history here of being pioneers and protecting user privacy... And you see it even in this release from the protections that we've built into extensions into this release of Safari, to what we're doing with the privacy report. So users are aware of how they're being protected as they browse. There are things that we do to protect our user privacy. We're also doing them because we think that we can help push the industry forward on this, in the hopes that users become more aware and they demand more from the technologies and products that they choose.

**Adam Stacoviak:** Yeah, I think if we don't have people like you and Beth leading the charge, and the rest of Apple, to focus on privacy - I mean, it's a license to not care if you don't have companies like Apple stepping up to do that. At its core. Not just in the Safari world, but at its core.

**Ronak Shah:** Absolutely. And that's a responsibility that we take really seriously in the product. It's not who we are to not care; we care deeply about our products and our responsibility to our users. So this is something that you're gonna continue to see us pushing forward on, for sure.

**Jerod Santo:** So security, privacy and usability - these things are eternally at odds; you trade them off, and we see people trading privacy and security oftentimes for convenience, to our own detriment, and then it takes us a while to realize that that was bad idea and we start to learn. So one of the things that's been a long-time problem for web developers and web applications is "How do we do authentication? How do we do security? How do we manage these things in a way that's a) secure, b) not annoying, and c) usable?" And one of the things that seems cool is that you're bringing some of Apple's technology around Face ID, Touch ID and these passwordless authentication schemes to the web. And as a Face ID user, I just love when I can Face ID into an app.

If I can launch my bank app and not have to do a password, or if I can launch my -- whatever app that I would have to sign into, and just Face ID, boom. Or Touch ID, boom. Doing that on the web seems like it could be a nice balance between not giving up that security; removing the need for passwords maybe, but then also having the usability of "I can just look at it, or I can just double-click on my watch..." Tell us about Face ID and Touch ID for the web.

**Beth Dakin:** Yeah, we're super-excited about these. So this is using the web authentication API, which is an open standard JavaScript API... And we added support for web authentication for use with public keys last year; I think it was last year, unless it was the fall. Let's say last year. \[laughs\] And what's new now is that you can also use Face ID and Touch ID. I think that that's gonna be -- like you, from the user perspective, that's huge... Especially when I'm on my phone, typing in a really long password. Usually, I'll get the autofill, so that takes care of you, too...

**Jerod Santo:** Right.

**Beth Dakin:** But I just love that this will be an option, and I also love because it has this opportunity to give you that extra layer of security, because it can be as a second-factor authentication also... And another thing that's really exciting about the Face ID and Touch ID for the web is the Apple anonymous attestation part of it. I don't know if you have heard about that.

**Jerod Santo:** No.

**Beth Dakin:** \[00:19:50.00\] That's a thing -- so whenever you're doing one of these authentication processes, the website can ask for the security key or the phone, in the case of Face ID or Touch ID or Mac, to perform a process called attestation, to prove that it really is what it says it is. That can potentially be something - if it's always the same, if the security key is always returning the same attestation, then it's potentially a fingerprinting vector across different websites. But the way we'll do this for Face ID and Touch ID for the web is that each of the domains that you have a password with, that you have an account with, will get a different attestation. And that keeps it totally privacy-preserving, removes the possibility that there's a fingerprinting vector there. So that's one part of that technology that I'm really excited about.

**Jerod Santo:** That's very cool. So let's take a standard website that uses an email and password today, and they find out about Face ID and Touch ID for the web. What does it look like to integrate and get it set up? Maybe it's "Go read the web authentication API and leave us alone", but what does that look like? What are the steps, do you guys know?

**Beth Dakin:** It's not a lot. I don't have them in front of me, but basically there are really just a few JavaScript calls that you need to be able to make and use... And probably you need to add some user interface as well, where you're actually encouraging users to set up Face ID and Touch ID, because it won't be a replacement for your password, since it's tied to your device. In case you lost your device, that would be a problem. So you still need a regular password, so it's like a second step... So creating that user interface is probably the hardest part, to be honest. The actual JavaScript calls that you invoke - they're minimal and pretty straightforward.

We have a session at WWDC this year all about this - Meet Face ID and Touch ID for the Web - and there's some sample code in there that's very straightforward.

**Adam Stacoviak:** Jerod, you mentioned paswordless earlier; I didn't catch that as part of this talk... So is there something in there for passwordless that I missed, that they released?

**Jerod Santo:** Not that I know of. I was just saying that perhaps it's a way to go passwordless if you have a completely...

**Adam Stacoviak:** Face ID, Touch ID...

**Jerod Santo:** Yes.

**Adam Stacoviak:** Okay, gotcha. So I guess then that question might be "What about passwordless sites?" Because I know Changelog.com is passwordless.

**Jerod Santo:** We would probably add this as an alternative, or as a secondary way of authenticating. Like I said, two-factor auth is a actually a great use case for this, because you can always fall back to the SMS... But as we know, SMS-based two-factor auth is really fraught with all kinds of problems. Not to mention the one where it's not usually a second factor, because if you're on your Mac, it autofills it there without having to have another machine... But regardless of that, I think as a second factor it would make a lot of sense... Unless you had a website that was like maybe MacRumors.com. They could just go passwordless, Face ID auth only... But they're probably the only ones; or all the other Mac sites.

**Ronak Shah:** I think it's worth mentioning also that, of course, so many developers have adopted sign in with Apple to replace the traditional account, so that users have this really seamless way to sign in across apps and the web... And so that's something that we've seen huge success with. I think we've had 200 million accounts created using sign in with Apple already.

**Jerod Santo:** Wow.

**Adam Stacoviak:** That's a lot. That's a lot of millions. \[laughter\]

**Ronak Shah:** And a lot of developers are seeing actually an increase in accounts created, we think thanks in part to sign in with Apple. So we're super-excited about that as well.

**Adam Stacoviak:** Let's talk about the motivation there then for users to use sign in with Apple. Because you see sign in with \*fill in the blank\*, all over the place. Why do people choose sign in with Apple, and why is that successful, I suppose? What makes people use that, versus sign in with Twitter, LinkedIn, GitHub, you name it?

**Ronak Shah:** \[00:24:12.19\] Well, there are two big things here. One is that it's so simple to sign up. We've made that process seamless. You don't have to share your personal information; you're in control of it when you create an account. And you're not being tracked as you use apps, and across the web. We talked about how important privacy is, and this is just yet another example of that, of giving you a way to easily sign in, to be in control of your information and to do it in a way where people aren't tracking your behavior. You can kind of tell from the numbers that that's something that people care about, and it's a really big deal.

**Adam Stacoviak:** Well, as I read off the list too, my sub-thought was "Those were all social networks of some sort, and Apple is not a social network." So having my authentication tied to, say, Twitter, or GitHub - which isn't really a social network, but it kind of is, or LinkedIn, which totally is, or Facebook, which... Well, it's Facebook.

**Jerod Santo:** It totally is...

**Adam Stacoviak:** It totally is... So there's no scrutiny there... I guess I have less concern with if, for some reason, that got hacked somehow, I'd be tied to my social network being taken over by someone.

**Ronak Shah:** We're in the fortunate position where our business is built on doing what's best for the user, so we don't need to compromise when it comes to things like helping you log into a site. We get to put the users' best interest first, and you can see that in the product itself, the way that it gives users control.

**Jerod Santo:** So does the web authentication API -- I can back Beth up on her statement about the extensions API not being a simple thing... You know, it's not like you guys just added one API and you're like "Hey, it works now!" I actually clicked through on the link; we'll put it in the show notes... I just scrolled and scrolled and scrolled all of the -- I mean, there's tons of stuff inside that Web Extensions API.

**Beth Dakin:** It's mind-boggling.

**Jerod Santo:** So you're adding lots of support for new things. Now, one (I guess) reputation that Safari has got amongst developers and web developers is that y'all have been slow to add new features, really web platform features over the years... And this has got developers to grumble about Safari. There's some that have even called Safari "the new IE". I disagree with that, I think it's clickbait, but you've probably seen those kind of articles out there. Not in terms of like it's dominance, but just in terms of it slowly adding things, where it's like "Yeah, it works everywhere except for IE" was the old saying... And there's lots of features that worked in lots of places except for in Safari - web Bluetooth, WebVR, WebGPU. There's lots of them. I'm just curious what y'all feel about that criticism. Do you think it's unfounded? Are you well aware of it? Does it hurt your feelings? Are you trying to change that perspective? What are your thoughts on that?

**Beth Dakin:** We're definitely aware of it, and it does hurt my feelings, but we don't have to get into that... \[laughter\] But when we add APIs to Safari, we wanna be really thoughtful about it, because the most important things to us, our core principles as a browser and as a browser engine are privacy, power and performance. And if a new web API enables those things, then we're super-excited, we're all over it. A lot of the web APIs we've pioneered over the years have been APIs along those lines.

And for APIs where we take pause and we have some concerns in those areas, usually we wanna keep working with the standards bodies to mitigate those risks before we add support. I think that in some cases where we have those concerns about power, performance or privacy, that it can easily be viewed as like just not implementing the latest thing to give the capability, and "I wanna put all of my code together..." But we just have some deeper considerations that we wanna think through really carefully.

**Jerod Santo:** \[00:28:17.05\] That makes sense. Ronak, what do you think?

**Ronak Shah:** Yeah, it's funny, because I look back at the web standards process, and we've helped pioneer so many of the ways that we use the web today... So you go back in time - a good example is HTML5 video. We pushed hard for the industry to move to HTML5 video away from things like Flash, as an example... And Safari, especially on iPhone, played a huge role in that. And we've continued to do that, actually, over the years. But like Beth said, we want to push the web forward while also putting user privacy first, while putting battery life first. Our users care deeply, they want our devices to have great battery life, to deliver great performance, so we have to be really thoughtful about how we adopt these APIs, because that's so important to us, and it's so important to the user experience.

It's funny, because those decisions directly translate to the performance that we're able to deliver, they directly translate to our ability to deliver industry-leading battery life. I don't know if you've seen those numbers, but as an example, you can stream video on Safari up to three hours longer than Firefox and Chrome. That's not just because we pay attention to optimizing Safari, but because we're really careful about what we support in our engine.

**Adam Stacoviak:** I tried to look up what Chrome's mission was in terms of what they're optimizing for... So you often think about "What are you optimizing for?" and what you're optimizing for isn't market share, at least on the Safari front. Maybe in other areas you might be as a company. And these stats may not be accurate, but this is just a quick Google search - roughly 18.2% global market share for Safari, while Chrome sits at roughly 63.9%. So they may be optimizing for market share, you're optimizing for these three pillars you set upon, which is privacy, power and performance... Meaning that the moves you make for Safari aren't just focused on getting it to be the best, most-used browser. Maybe the best browser, but it may not be the most used browser.

**Ronak Shah:** You know, I think it gets even simpler than that. At Apple we built the products that we wanna use. And ultimately, numbers aside, that's what it comes down to. So we want a browser that protects our privacy. Just personally, that's the browser I wanna use. I want a browser that preserves my battery. I want a browser that I can use without slowing down my system. And we're always going to prioritize the user when we make these types of product decisions... And as we think about what we're gonna do in the future, it's really as simple as that.

**Adam Stacoviak:** It may be marketing -- it's on the marketing page, so it might be marketing, but you say "We've built Safari to be the best browser for your Mac, iPhone and iPad." Now, that makes sense, because you often build software to \[unintelligible 00:31:16.10\] very well with your hardware; it totally makes sense. But you've got other safe browser out there like Brave, and Chrome has been -- has issues; we've since moved to Brave or other browsers to do that, too... But I've always seen Safari as this privacy-focused, safe-focused, but it hadn't been as clear as you just put it, that as a mission of the company, not just simply the product of Safari, but you two as folks behind it, making it work, being so privacy-focused.

**Ronak Shah:** Yeah, absolutely.

**Beth Dakin:** Definitely.

**Ronak Shah:** Go ahead, Beth.

**Beth Dakin:** \[00:31:50.25\] I don't even remember what I was gonna say after definitely... I was maybe just like agreeing. \[laughter\]

**Adam Stacoviak:** Definitely. You echo that.

**Beth Dakin:** Yes.

**Adam Stacoviak:** Well, you know, I'd used Chrome for a while - as Jerod mentioned before, Safari not being the primary developer target as a browser; so when I would develop for the web and do different things, the browser I tended to focus on when it came to "Does it work first-pass?" was Chrome. DevTools, other things we could talk about are in the mix there, that may be different -- not so much lacking, but just definitely different in Safari... And at one point you all shared some similarities when it came to WebKit, prior to the move to -- what was it called, Jerod?

**Jerod Santo:** Blink.

**Adam Stacoviak:** Blink, yeah. So there has been some similarities in the past, but for some reason web developers keep choosing Chrome... I think because its concern is bleeding edge tech, pushing the web forward in those ways, whereas Safari's focus has been really around the browser you wanna use, rather than just simply the edge pusher.

**Beth Dakin:** I think there's something to that, and I think that we do care deeply about developers, too... And we care deeply about standards. We participate very actively in the standards processes, and we definitely think better APIs come out because of it. And we care deeply about developers; we do wanna know what APIs you wanna implement, and we don't want people to feel like we aren't listening, even though that can be the mood on Twitter sometimes, like you were saying... But we really welcome new feature requests, especially when you have a specific use case that you're trying to do, something you really wanna achieve - that's super-interesting to us, and you should definitely file requests for APIs that you wanna see.

And while we're talking about developer tools, I do wanna plug you to give a try to the Safari Web Inspector if you haven't tried it recently. We do have a session this week at WWDC about what's new in the Web Inspector in Safari... And there's a bunch of great stuff this year. A ton to get into. One of the bigger things that we're pretty excited about is local overrides, which we think is gonna be really useful when you're developing a bit of a more complicated system. It lets you intercept and replace response content that's loaded over the network in a nice way, and it will all stay stored nice in the Web Inspector. We have a session all about that.

The Web Inspector also has a nice, new look that uses the space a little better. So if you haven't checked it out in a while, you should. And we really develop the Web Inspector in Safari Technology Preview, which is our like about every two weeks release of Safari... And our developer tools team really views that as their vehicle to ship things. They don't so much think of the annual release or the software updates, they're thinking about Safari Technology Preview... So that's really where you wanna go if you wanna check out how the Inspector is doing these days.

**Adam Stacoviak:** Is there any content out there from that team that people can follow? If you wanna pay close attention, how do you pay close attention to that?

**Beth Dakin:** That's great. So yes, at webkit.org - we have a lot of blog posts there, and we do tend to post a good number about the Inspector... And we also have the Web Inspector Reference Guide on webkit.org, which is a pretty thorough documentation. We've also at the WebKit Twitter account been trying to post tips and tricks for the Web Inspector specifically. And I know that the Inspector team and our evangelists have been working together to pull those together.

**Adam Stacoviak:** I concur, the Web Inspector Reference is quite comprehensive. You've got search there, you've got filters there, you've got lots of different stuff, from the console, down to, as you mentioned, local overrides for network and sources etc. So there's a lot there to dig into. We'll drop that link in the show notes for the listeners.

**Beth Dakin:** Cool.

**Jerod Santo:** \[00:35:59.15\] The team that works on Web Inspector - is that like a Safari proper team? I'm always curious how these things work inside of an organization. I also wanna know how you do Safari for iOS and Safari for macOS, and if there's any shared infrastructure or code, or if they're just completely bifurcated... So this is a huge question, but does the Web Inspector team just sit next to everybody else working on consumer products, or is it separate? How does it work?

**Beth Dakin:** We're all one big happy team.

**Jerod Santo:** Really? How many folks?

**Beth Dakin:** Geez, I don't even know... But we all really sit together when we get to work from the office, from Apple Park. In fact, there's an Inspector engineer two doors down from me, so... That is one of the things that I think is unique about our team, compared to other browsers. The JavaScript core team is part of our team too, and I know other browsers there, whatever their JavaScript engine is is sort of a separate situation... But we all work very closely together; we work on all platforms, we collaborate on everything.

**Jerod Santo:** So there's one Safari team across all operating systems.

**Beth Dakin:** That's right. I've written code for iOS, watchOS, Mac OS, Mac Catalyst... \[laughs\]

**Ronak Shah:** And one of the things I have to add is we have these big releases here, and it's been pretty amazing to watch the team pull the release together amidst everything that's going on... To see them continue to work together and deliver such a huge release has been pretty amazing.

**Jerod Santo:** I don't even know how you orchestrate something like that, especially across -- specifically I think of iOS to Mac OS, because those Safaris seem to be pretty different, except for the rendering engine; I'm sure there's a bunch of shared code, but... Is there some technical infrastructure, some magic that y'all are doing to make those things merge at the right times? Or is there feature flags? How does it shake out?

**Beth Dakin:** Mostly we try to do really thoughtful abstractions, in terms of sharing as much code as possible. Of course, at the WebKit layer that's most things, but there are still some interesting diversions too, and you can see all of that in open source. We use the WebKit open source project; that's where we actively develop for all of our platforms. So in terms of WebKit, it's all just kind of out in the open.

And yeah, Safari - they are different apps, for sure, but when it's similar concepts, we try to just have really thoughtful abstractions, to share as much code as possible.

**Adam Stacoviak:** One of the things mentioned in the keynote - and Beth, you've got a nice feature in that keynote. Congratulations.

**Beth Dakin:** Thank you!

**Adam Stacoviak:** I was hoping that you can make this call as part of that, because I was like "Oh, it's Beth. Cool!"

**Beth Dakin:** \[laughs\]

**Adam Stacoviak:** Ronak, you mentioned making a browser you wanna use, and I would imagine the browser you wanna use renders pages super-fast, so page-loading is faster, JavaScript is faster... What was some of the behind-the-scenes to test and make sure JavaScript was faster, or page-loading was faster? Obviously, I think it's unanimous across Apple when they release anything, this version is always the next big thing, or the next best version, so... It's calm, and it's cool, and it would make sense to be faster, but give us--

**Jerod Santo:** Y'all should come out one time and say "This is actually worse than last version, but we've gotta release it because we ran out of time." \[laughter\]

**Adam Stacoviak:** That would never happen, but it'd be fun.

**Jerod Santo:** That would win some authenticity points, come on...

**Adam Stacoviak:** That's right, that's right. But what are the behind-the-scenes of actually making some of these things faster?

**Ronak Shah:** Sure. So we have a bunch of the details around our testing on the website; if you scroll down, you can take a look at that. But the idea behind the performance improvements this year was that we really wanted to improve performance of the things that you do every day. Of course, JavaScript is prevalent across the web, but loading sites that you load all the time - we wanna make that super-fast.

\[00:40:03.01\] So we picked a set of representative sites, some with tons of JavaScript, a variety of sites that we thought represented the types of sites users commonly visit, and the team spent a ton of time optimizing pageload, to make that a really great experience... And even in this first seed it feels really great. We're not done yet, but we're super-excited about how performance is looking this year. It's gonna be great.

**Beth Dakin:** We're pretty relentless about performance, too. We have a number of benchmarks that we run internally, including all of the public ones. We measure, we optimize, and we fix regressions; it's just a never-ending cycle. We always have at least a zero regression policy, which is why you won't see us coming out and saying that it's slower than last year, because we're constantly measuring... \[laughter\]

**Ronak Shah:** Going back to something that you said, Adam, about building Safari for users on Mac and iPhone and iPad - the other thing that we have a real luxury... We're not building a browser that has to target every platform. We get to optimize Safari for Apple devices and Apple hardware, and you see that. You see it as you use it. We do a lot in the product along those lines. For example, we use core animation to animate what you see on the web. We use native APIs that help us achieve that performance.

So we take a lot of pride in the craftsmanship that we put into Safari, taking advantage of the hardware APIs that have been heavily optimized to deliver that great performance.

**Jerod Santo:** Yeah, I was thinking about market share when Adam was talking about what you're optimizing for, and I was thinking if they wanted biggest audience there would be Safari for Android, and Safari for Windows. And then I thought "Well, there was a Safari for Windows at one point", wasn't there?

**Adam Stacoviak:** There sure was.

**Jerod Santo:** Is that thing still floating around?

**Ronak Shah:** No, I think we stopped shipping it several years ago. We did experiment with it, and I actually think that we learned a lot from doing that. I think one of the things that we did learn was that we would just have more fun when we were able to focus on our platforms and take advantage of what our platforms had to offer... And we've focused on that since.

**Beth Dakin:** And speaking of how we are one team, I also wrote code for Windows...

**Ronak Shah:** \[laughs\]

**Jerod Santo:** I was gonna say, also core competencies, right? Like, stick to what you're good at...

**Beth Dakin:** \[laughs\]

**Ronak Shah:** She can speak to this directly.

**Beth Dakin:** \[laughs\] Context menus. I did it.

**Adam Stacoviak:** That's awesome. What do you say to home screen web apps? We talk about this ecosystem of platform. We've got this scenario where you have apps installed, and obviously you're a fan of apps, because there's an app for that... But then you've got this home screen web apps - what's the state of that for Safari and for iOS?

**Ronak Shah:** So pretty much from the beginning on iOS you've been able to save a website to your home screen. In fact, that was the original app model on iPhone before we had third-party native apps. The idea was that you could save a website to your home screen and get to it with just a tab. So it's something that we've supported, and of course, on the Mac you can always just drag a site into the dock to get to it.

So having access to your favorite web content is possible right from the dock or the home screen today. We've been focused on that, and also delivering a great browsing experience inside the browser itself. We think that's something that users appreciate and use.

**Adam Stacoviak:** I would imagine Face ID and Touch ID brings those experiences a little closer. It doesn't give you quite log into the American Express or Bank of America app with your face; it's the same experience, but you're sort of giving some of the credence that you've put in apps into the web... And that's kind of where I'm going at; we've talked about it to some degree, but is there more behind the scenes of the adventure we'll have when it comes to home screen apps or web developers getting to appreciate the full web app experience?

**Ronak Shah:** \[00:44:18.00\] Well, I think you've seen us bring technologies to the web that do help deliver a great experience and take advantage of native technologies... Things like Apple Pay; being able to Apple-Pay on a website...

**Adam Stacoviak:** Yeah, I love that, personally.

**Ronak Shah:** ...or you've mentioned authentication - using sign in with Apple on the web. So I do think that we brought a lot of those capabilities to the web, for web developers to take advantage of... And they're experiences that I love to use, personally, so I'm super-excited about what we've done, and potentially what we could do in the future. We'll see.

**Jerod Santo:** Do you all believe that web apps can compete with native apps on a level playing field on iOS, on the long-term? Or will they always be behind, always be hamstrung by the technology access?

**Ronak Shah:** We love both native apps and web apps. That's why we have such a talented Safari team, a really good-size team that comes in every day trying to build the best web experience possible for our users... And it's why we do things like add amazing extension support, try to support the key standards out there on the web, build a browser that delivers great performance, so users want to use the web more... And so I think that developers can build great web apps... And certainly our users are using them, because we hear from them that they spend a lot of time in Safari, browsing the web using web apps. So it seems like there are great apps being written and used out there on our platforms and in our browser.

**Jerod Santo:** The reason I ask that is because it seems like when I look at the web technologies that y'all are usually slower to add, or haven't added yet, it makes total sense that you're going for the power, the performance and the privacy. I think that's a nice, killer three Ps. Adam and I both already memorized it, so you have a nice trio there... \[laughter\] Even us louts can memorize that one... That you add things that make sense - you've recently added lazy-loading images; that's one that we've all been waiting for, because that's performance, that's great for websites. WebP was one that maybe you thought had some performance problems... I'm just assuming things happen; you're adding WebP, HTTP/3... These are things that are being added, or have been added in Safari 14... But it's the platform features like web Bluetooth, WebVR, WebGPU, where it's really like "Hey, let's make the web a platform for apps that Safari doesn't support."

And I think a cynical black box view of that - I've seen it expressed out there as well - you guys are not incentivized to do that, because you have this native app platform, and that would compete with your native app platform. And from the outside, I can see where that's the conclusion made, but y'all are on the inside, so that's why I ask the questions... First of all, thanks so much for talking to us; this is awesome. What do you think of that particular angle, and why these particular features don't make it into Safari?

**Ronak Shah:** \[00:47:17.29\] You know, I don't think that's it. I think it's more that -- it goes back to something that we said earlier in the conversation, that we're incredibly thoughtful as we think about these standards that we add to Safari. One of the things that we've talked about a lot so far is privacy. And as we think about these standards and the idea that somebody could get a link and go to a website that's asking to do a Bluetooth scan - that's something that we think about a lot, right?

**Jerod Santo:** Yeah.

**Ronak Shah:** And that's our job, to protect our users and to think about privacy and to think about all the potential uses of these standards. So we're gonna continue to be really thoughtful about what we add to Safari, and we're gonna always continue to put the user first as we think about these things.

**Beth Dakin:** Yeah, and I think one way to think about it too is that a difference between the web and apps is that the web - you can stumble anywhere by accident, and we want that to be a safe place for you to end up. You could mistype a URL, somebody can send you a link and you don't know where it's pointing... But with apps, if you've gone out of your way to download it, then there's maybe a little bit more intention behind it. So the fact that it definitely is scanning for Bluetooth - maybe more thought got put into that.

If you're just stumbling across the internet and there are all of these potentially traps that you don't wanna fall into, we wanna really think that through. The web should be safe. You shouldn't be afraid to click a link. There shouldn't be consequences if you go to the wrong site.

**Jerod Santo:** So we're getting close to our time here... Is there anything on your list where you're like "I can't believe Adam and Jerod didn't ask us about X. We've been waiting for them to ask and they haven't asked"? What have we missed so far? There's lots to talk about, so it's hard to catch it all.

**Ronak Shah:** I think we covered a lot of the highlights.

**Beth Dakin:** I think we did, yeah.

**Ronak Shah:** This was a really good conversation. Good questions.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** Well, we certainly appreciate you all sitting down with us and sharing such deep insight to a browser we all love, and sharing similar desires for privacy. Same desires, not similar. Same, exactly... Because that's what I love most about Apple's direction at its core, and in particular with this conversation, Safari. So Beth, Ronak, thank you so much for your time today. It's been awesome.

**Beth Dakin:** Thank you so much, this was great.

**Ronak Shah:** Thanks so much. This was fun!
