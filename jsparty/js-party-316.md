**Amal Hussein:** Hello, JS Party listeners. It's me, your host, Amal Hussein, and we're here with some really special guests today to talk about some real heavy topics. I hope everyone's comfortable, and seated, no one's -- okay, you could be driving, but please pay attention... Pay attention to the podcast and the road. We're here to welcome Alex Moore and James Moore, who are here on behalf of the Open Web Advocacy org. They've been doing a ton of incredible work in advocacy around browser choice, and all kinds of interoperability standards work in and around the web space. They've really helped move the needle on so, so many things, and we're gonna dig into all that stuff today... You know, the whole kind of Apple debacle with them breaking web apps... This is the org that helped kind of get that policy instated, and helped put a lot of pressure, that eventually led to kind of Apple seceding and reinstating that functionality. Anyways, tons of great stuff, so welcome, welcome, welcome, Alex and James. So excited to have you both on today.

**Alex Moore:** Yeah, thanks for inviting us. We're really happy to be here. It's great to have the opportunity to talk to you.

**James Moore:** Yeah, it's lovely to be here.

**Amal Hussein:** Yeah, absolutely. We're happy to have you. So before we dig into this monumentous work that the Open Web Advocacy group has been doing, can you tell us a little bit about yourselves? Y'all are just some regular ol' developers that are apparently saving the internet... But tell us a little bit about your origin story.

**Alex Moore:** Yeah, so I first got into web a very long time ago; I probably started around 1995, and started with little hobby projects... And then from about 2001 I started doing it professionally, mainly doing websites, and I think it was CSS 2 back in those days... And then very quickly got into what you'd consider more traditional applications, and sort of enterprise-like applications, financial systems, student management systems, that sort of thing.

And then later we started our own company, continuing to do complex web apps... And then it was after Steve Jobs' speech in - I think it was in 2007, when he was talking about mobile application development, we started getting very heavily into mobile and building sort of little side apps that would augment our major apps, so that people could access them on the go.

Then we just gradually got more and more into mobile, as they started becoming the predominant way that people access the ecosystem. And... Yeah, we did that ever since, until eventually one thing led to another and eventually Open Web Advocacy was born.

**Amal Hussein:** And the "we" here is you and James, I'm assuming...

**Alex Moore:** Yeah. Yup.

**Amal Hussein:** And you're brothers, right? You're siblings. Siblings in awesomeness, and internet advocacy, it seems... And also, you're in the same room, so - for some context, folks, usually our guests are in separate rooms, but this time we have... It's really nice to be able to see two people on one screen. And you're based in Australia, is that correct?

**James Moore:** Yes.

**Amal Hussein:** And so we're having this conversation at some pretty odd hours for me. I live on the East Coast of the United States, so it's pretty late or me, pretty early for you in Australia... I'm so glad we were able to finally coordinate this thought.

So we've had a very exciting few weeks on the web. Exciting in the sense that there's been a lot of news around this Digital Markets Act, and Apple's compliance, and lots of kind of froufrou with Apple lately, even just beyond the Digital Markets Act. EU fined them for some anti-competitive behavior with Spotify... Lots going on. So for me it's refreshing to see big tech get regulated, but what I'd like to do in today's show is kind of peel back the layers and kind of give folks some context to how we got here and why we got here. How do we get to the point where we're regulating these big companies, and why is this regulation important and necessary? So can you tell us a little bit about what the Open Web Advocacy group is aiming to do, how you all went from creating web apps to essentially doing a bunch of really important advocacy on behalf of people who use the internet?

**Alex Moore:** Yeah, so I think we have to rewind back to that Steve Jobs speech in 2007, where they announced "We've got a great new way to do --" You can watch the whole speech online, but he said "There's a great way to build web apps, because we have the whole Safari engine inside the iPhone. And there's no SDK required." Basically, for anyone who'd ever built mobile applications prior to that day, they were really difficult. They were kind of Java applets, and it was really complex to get a working mobile app onto a phone. And we just thought it was a great direction; we'd already had a lot of experience building web technology, and we started investing in learning how to port our apps or create side apps for mobile.

Then about a year later they announced native apps, the App Store and native apps. And at the time, both of us thought "Yeah, that's good." Especially back in 2008 web apps couldn't do everything, and so having another ecosystem that could fill those gaps just seemed reasonable. But then gradually what happened was there were all these features that would come out for native apps... And we kind of expected that there'd be a lag that we were getting for the web. You know, six months down the track, or a year down the track... And the one I remember the most was notifications. It came out for the iOS apps I think in 2009, by memory. And I was thinking "Oh, maybe next year we'll get notifications for web apps." But in 2010 it didn't happen, in 2011 it didn't happen...

\[00:10:06.02\] And at this point, there was -- originally, obviously it was only Safari. And when the App Store came out, Apple created a raw -- it was 2.5.6, all browsers must use the WebKit and JavaScript framework... Which is kind of not quite true. What they actually mean is "We're gonna ship a web view", which is kind of like a full-screen operating system component outside of the browser Chrome, where anything within that is exclusively controlled by Apple. So you know, you can do a menu, and you can do the tabs system, but whatever is actually in the web page itself was completely controlled by Apple. And browser vendors not only couldn't bring their own browser engines, they couldn't even make modifications to WebKit.

Now, at the time, back in 2011-2012, Safari was still a very competitive browser compared to what the other browsers were offering, especially considering that the Google Chrome team were also still on WebKit as well, so all their contributions were also going into WebKit and getting to developers that way.

**Amal Hussein:** So this is before the Blink fork?

**Alex Moore:** Before the Blink fork. So at this point we were still developing web apps, and we were waiting for these major features... But then Blink and WebKit fork. So suddenly you have all the features that were getting piled into WebKit suddenly sort of get cut off, and now they're only going into Chromium and Blink. And then the gap between what was possible on Android and Firefox, and what was possible in Safari started to get bigger and bigger as the time went on.

Then what we experienced was just an enormous number of bugs. Literally almost every second release Safari would break something critical. So there's IndexDB, which the listeners will be familiar with; it's for local storage. That would quite often break all the time, to the point there James and I used to joke it was built by the work experience kid at Apple... Because it was just so unstable, and parts of it didn't work.

Now, that was unfair. The reality actually is that Apple's investment in Safari was just so small that you couldn't possibly work on all these different things at the same time and have them work. So it wasn't a skill issue, it was simply not investing enough resources... Because they had no incentive; they moved parts of their team off onto their native app ecosystem to focus on that instead.

But we persisted, and we were still building web apps, including for iOS... Because you don't get a choice where your customers are. You have to build for your customers. And in particular, you have to build for the phone of the CEO, or the CTO of the company you're building for.

So that kept on going till 2015-2016, but the noise from developers was getting bigger and bigger. They're like "Right, we want push notifications." But Apple would pretty much -- they'd give these sort of proforma non-responses, like "We hear you" or "We wanna hear about the use cases", for which our response would always be "Well, the use cases are the same as they are for all the native apps. They're identical." Do you want a chat app without notifications? Do you want a social media app without chat notifications...?

\[00:13:47.27\] We got all the way to 2020, and James and I at the time were writing software, doing a point of sale system... And the first thing our customer asked us was "Hang on... These printers you're making us buy are really expensive. Can we use Bluetooth printers?" And we're like "Nah, sorry. Apple doesn't support web Bluetooth. We can do it for your Android devices, we can't do it for all the iPads." Because it was a franchisee kind of arrangement, they obviously couldn't get all the franchisees to swap out all of their iPads with Android devices, so it just wasn't an option.

Then about a few months later he came up and he said "Oh, for the product ordering system we really need notifications when products turn up." And again, we said to him "Well, we can't do that, because Apple hasn't implemented that functionality", to which he said "Why can't I just install another browser and get notifications on that browser?" And we're like "Ah, because they're all essentially the same." And that got me thinking, I was like "Yeah, that's actually ridiculous." Obviously, if there was another browser, you could just tell your users to switch to that browser. And the fact there isn't a browser means that Apple has no competitive pressure to implement any of these features, or invest in Safari, or make it stable, because there is no fear of losing users to another browser.

If there's a huge bug in Safari, that breaks lots of apps, then the apps rightly - and this is a good use case for it - could say "Look, it's broken in this one. Go use one of these other browsers instead." But that doesn't happen, because as developers we know what's functionally identical. We're not gonna push our users to go use another browser, because that's annoying, and bad practice, and all... So that competitive pressure never turns up, which means that the Apple management -- and I wanna be really clear here; this isn't stuff which is within the Safari WebKit's team control. It's management deciding what budget they get. And presumably, in some cases, what they can invest in.

So it was at that point I started reaching out to people that worked at Apple, and I'm like "Look, we really need notifications. It's been 10 years... What can we do to get this of the ground?" And we got no response. So we kept pushing, and eventually we created a bit post at WWDC, and we said "Look, Safari is years behind by Firefox and the Chromium browsers. We're missing all these core features for web apps. Safari needs a much bigger budget. What can we do to make sure that happens?" And it was the most upvoted, viewed post at WWDC that year.

**Amal Hussein:** And just for context to our listeners, that's like the annual Apple developer conference, right? So I guess there's a forum for you to be able to upload posts, I guess; there's some form of democracy there. I'm surprised to learn this...

**Alex Moore:** This was a COVID year, so they'd moved it all online.

**Amal Hussein:** All online, a-ha. Got it.

**Alex Moore:** It was 2021.

**Amal Hussein:** Got it.

**Alex Moore:** And again, we didn't get any response to that, so we thought "Okay, what else can we do to try and get Apple to do any of this stuff?" So we thought "How about we just emal the WebKit mailing list? Because all of the developers will be there, and at least we can sort of raise these concerns." So we emailed the developers list, didn't get a response there either... Then we popped into their developer channel and we asked in the developer channel. And then one of their most senior people - who presumably had permission or felt like he had permission to talk on behalf of Apple - just responded and said "We're not gonna engage in unfounded conspiracy theories related to our accusations of underfunding." And it was at that point we realized our only option to fix web apps was to go to regulators.

And so what we've done is we then just -- we just formed a group, and literally, I just got on Twitter and I searched for people who had the same sort of problems that we were raising building web apps... And I just one by one messaged them all and I said "Look, we need to get together, we need to fix this problem. Let's form a group and go talk to regulators and raise this issue with them."

\[00:18:24.20\] And at the time, we honestly thought it was gonna be we write one document, we have one meeting with the regulators, send it off to them, and then kind of finish. But then that gradually just snowballed... And from one mini-success to another it then just organically grew into what we are today.

**Amal Hussein:** Yeah, what a fantastic story. It's like a David and Goliath story, if I've ever heard one, in the sense that there's this nifty group of developers getting frustrated about something, managed to actually shift the needle at one of the most powerful companies in the world... Pre-generative AI and Microsoft's stock going through the roof, they were the wealthiest company; they were like number one, I think they're number three now. But yeah, so that's amazing...

James can you tell us -- there's a lot that you shared there... I just kind of wanna unpack a few things before we move on. James, can you tell us a little bit about how browsers on iOS are not what they appear to be, in the sense that Chrome and Firefox are not really Chrome and Firefox on iOS, and how everything's really secretly just kind of WebKit?

**James Moore:** Sure, okay. So in the App Store guidelines they've got this rule 2.5.6, which said something like "Apps that browse the web must choose the appropriate WebKit framework and JavaScript framework." And what they mean by this is there's a specific component that's shipped with iOS, the WK WebView. And if you want to build a browser, you have to build your browser on top of this.

So if you think about it, it's like - if you think of the hundreds of thousands of hours of work that Mozilla have put into Firefox, or Google have put into Chrome/Blink, it's like throw all that away and build a brand new browser around this WebView that you're not allowed to edit or modify. Now, you can get some very minor features working, like bookmark syncing, for example... But in essence, they're just sort of branded versions of Safari. For example, if you look on caniuse.com, it doesn't even have a separate column, because you can't really fix any of these features; not in a sensible or reliable way. So functionally, there is no browser competition on iOS whatsoever.

**Amal Hussein:** Okay, so all these companies - Mozilla, Google, Edge, Opera... I don't know if Samsung Internet Browser has --

**Alex Moore:** Vivaldi...

**Amal Hussein:** What else, I'm sorry?

**Alex Moore:** Vivaldi, Brave...

**Amal Hussein:** Yeah, Vivaldi, Brave... Brave, of course. How can I forget Brave? I don't know if Samsung Internet Browser is on iOS or not. I think they're probably exclusive to their platform... But all of these companies are basically maintaining just thin wrappers around what is essentially just WebKit. And what that means is that any limitations that WebKit has, any bugs that WebKit has, any features that WebKit has - they're all the same. Essentially, there's nothing really super-special about these browsers, and they all share the same weak points and strengths... So for better or worse -- you know, it's like, you take off the mask, it's all the same Spiderman, right?

**Alex Moore:** Yeah. And all the same security bugs as well.

**Amal Hussein:** \[00:21:53.06\] Right, right. Fantastic for users, you know? \[laughs\]

**Alex Moore:** And more \[unintelligible 00:21:55.10\] than that, it's not just WebKit, it is the specific version they choose to ship, with the specific features that Apple chooses to turn on.

**James Moore:** That's a really interesting point. Let's say I as a browser vendor wanted to add a feature to WebKit. It doesn't even matter if I get that feature into the WebKit codebase, because Apple is under no obligation to include that in their build on iOS. So it really limits what -- it basically eliminates competition for platform features on iOS.

**Amal Hussein:** Yeah. And then it's also just good to point out that WebKit is an open source projects, it has contributors from outside of Apple... People at Intel, Sony... All kinds of places. Google... They're all kind of contributing to WebKit. So like you pointed out, Alex, if I go ahead and add service workers support to make everything -- you know, it being there doesn't mean it's gonna get turned on and enabled, right? So that's the key point there; thanks for making that.

To kind of go back to the wider problem of why you all started this work - essentially, Apple doesn't seem to have an incentive to really enable browser choice, but what's driving that? What's the dark horse here that's causing this tension in browser land for Apple? What's the other revenue source for them potentially that's impacting support for the web?

**James Moore:** Yeah, one of the really good things is if we go back to 2011, we have internal emails which were published as part of discovery with Apple's battle with Epic Games, and now these emails are public. So we can actually get a really good insight on how Apple's executives think. And I'd like to read just one email. It's an email titled "HTML 5 poses a threat to both Flash and the app store." Now, obviously, Flash dates it, because it's back in 2011, but it's from Philip Schiller, to Eddy Cue and Steve Jobs. And he says "Food for thought - do we think our 30%/70% split will last forever? I'm a staunch supporter of the 30%/70% split." They're talking about their 30% commission for the App Store. "But I don't think that will last unchallenged forever. I think someday we will see a challenge from another platform or web-based solution, and we'll need to adjust our model." And what this says is that even as far back as 2011 Apple's internal management team saw web apps as a threat.

And if you think about what the sort of economic reasons might be for that, you've got to look at Apple as a company, and kind of think about not only how they currently derive revenue, but how they're going to grow that revenue in the future. Currently, they have product lines; so they've got MacBooks, and iPhones, and iPads... But They're kind of all reaching their peak. Some already have reached their peak. Devices are lasting longer, upgrade cycles are not happening as quickly... They've already hit their --

**Alex Moore:** Saturation.

**James Moore:** Their saturation point. And so to grow the company and deliver value for shareholders, they have to find new sources of revenue. And one of the most important sources of revenue is what they call their services revenue. Two of those services are directly related to browser competition. And one of them is services revenue from the App Store, and from memory, that pulled in about 90 billion US dollars last year, of which Apple gets around a 30% cut... So I think they made 20 billion profit from apps in the App Store. And that's significant.

**Amal Hussein:** And that's one fiscal year.

**James Moore:** \[00:25:59.26\] That's one year, $20 billion of profit. Now, the reason Apple is able to make that $20 billion is because their App Store is the only option. It's not like on Mac, where you can just download an app and just install an app from another service. If you think about on Mac how many apps really going through the App Store, it's a very small amount. Again, we have another quote from Apple's internal documents. It's Philip Schiller, and he's Apple's upper management, and he's discussing the macOS App Store, and he says "Neva is on the store because they don't have to be. They can be on Mac and distribute to users without sharing the revenue with us." And so what he's saying is "We can't get that money on Mac, because there's nothing compelling them to share the revenue on us." On iOS, the App Store's the only shop in town, so developers have to go to the App Store, which means they have to provide that 30%.

**Amal Hussein:** Yeah, but isn't that strange though, this whole reasoning? They talk a lot about security, and there's all kinds of "Oh, no, we can't let developers download apps outside the App Store", and blah, blah, blah. Yet macOS arguably -- if there's going to be dangerous apps, I'd be much more worried about my desktop - as a developer maybe more so - than my phone.

**James Moore:** I think you could make an argument that there is more private data on your phone than your laptop... Because people use their phones for personal messages, taking photos, they have their conversations using their phone. But you're right in the sense that -- I mean, they're both just general-purpose operating systems. They've got very similar architectures. That said, you also have to consider how they built the App Store ecosystem. The App Store ecosystem was built really quickly; it was built in the space of one year. And the idea was to get it up as fast as possible, cram it full of features, and sort of things like privacy and security were not at the forefront of those designs. And so Apple's aim was to deliver functionality to their developers, rather than going "Right, we're going to make every API super-secure, and super-private."

The web has a different model. The web by necessity has to have those features built in. Because you can't have one website randomly accessing the content of another website, or making API calls to the operating system that is not allowed to. That level of security was only born out of 20-30 years of hard-earned experience. The app stores are nowhere near to the same level. In fact, a quote from Apple itself was "Safari/WebKit's sandbox is orders of magnitude more secure than those for native apps."

So if you think about the economic incentives in terms of the App Store and web apps, you can see that if web apps were a viable competitor to native apps, then suddenly you'd have all these apps which would then be able to make a decision, "Should we build a native app and have to share 30% of all of our revenue with Apple? Or should we just build a web app?" And so because it's such a significant amount of money for Apple, they're heavily economically incentivized to prevent web apps from ever being a true competitor to native apps.

**Break**: \[00:29:49.29\]

**Amal Hussein:** And what do you say to folks that are like "This just sounds like conspiracy theory. There's no proof. There's no proof in the pudding, Alex, and James..." Where's the proof here that Apple is holding web apps back?

**James Moore:** The thing is that their actions can be very subtle. They can kneecap the web simply by not investing. So all you need to do to kneecap the web is not develop a couple of important features, such as the ability to install an app not hidden behind various menus, and decrease the Safari WebKit team's budget to the point they can't actually build a stable ecosystem.

And in terms of other sort of evidence, you can just look at the sort of vast gap between the capabilities of what's available on Android compared to what's available on iOS, or even look at the capability gap between Firefox and Safari. Now, Firefox is a nonprofit, with a far smaller team of engineers, and they don't have the financial resources like Apple does... And they do a better job keeping up with standards than what Apple does.

**Alex Moore:** And stability.

**James Moore:** And stability. Firefox is genuinely more stable than Safari is.

**Amal Hussein:** Which is bad, because Safari being unstable also impacts the entire browsing experience on iOS. It impacts everything. It's like a much wider footprint than just Safari; it's like web on iOS, basically...

**James Moore:** And that extends to Android as well. Because the way I like to pitch this to people is imagine you're going to the CEO or the CTO of a company, and you have to pitch to them "We would like to build a web app instead of a native app to build your main product", and think about the sort of counter-arguments you would get back. And the fact that PWA's don't work properly on iOS really ruins them across the ecosystem. Because if they don't work on iOS, which has the majority of the wealthy, high-paying customers, including probably the CTO and CEO of the company that the developer's contracting to or working for, that's the important ecosystem. And so if it doesn't work for those devices, then these developers won't build them, and then they won't build them for Android either, because they're essentially pushed to go native.

**Amal Hussein:** Yeah, yeah. It just hurts every -- it's like the opposite of rising tides. It literally has a much wider impact, and that's a really good example that you just used... And so, for example, Google you would think would have these similar tensions in the sense that Android is a pretty big platform... I'd say Chrome, Android, search - these are all very big, competing, not always collaborative entities within Google. I don't know. Well, yeah, I call it a two-headed beast, you call it a three-headed beast, so you tell me.

**James Moore:** Yeah, I like to think -- Google's got different... I mean, the way I like to think about Google is I kind of like think of Google's -- it's the three-headed beast. You've got Chrome, you have Android, and you've got Google Play. And then up above, you've got god, which is Google Search.

**Amal Hussein:** Ad money. Okay.

**James Moore:** Yeah, Google search and ad revenue. And that is - anything in either of the three, the three heads has to sort of kowtow to the god of search. And that's their primary economic model, is search and ad revenue. Now, obviously, Play wants to increase Play revenue, and they make significant revenue from the Play Store.

**Amal Hussein:** \[00:35:54.17\] Yeah, I was just gonna say, it's a similar percentage for them.

**James Moore:** Yeah. And obviously, that's a potential growth market for them. But they also make money from adverts, so you can assume that an increase in people using the web provides more opportunities for people to display advertising, which could also grow their advertising revenue. So different parts of Google are incentivized to help the web, whereas other parts aren't.

Now, the other thing to realize is that Google and Apple are kind of in cahoots with each other, in that Google pays Apple... I think last year they paid them 20 billion US dollars for search revenue in Safari. And this adds -- and this is practically for doing nothing. Apple has to do no work to implement that other than set the default search engine to Google. And then what that means is that it then becomes doubly important for Apple to completely hold on to their browser market share. Because the only reason they're able to negotiate that $20 billion is because they have the stranglehold over the browser market on iOS. And then presumably, if there were other competing browsers, other browsers would be grabbing that market share.

And so I think the way to sort of frame that entire --

**Alex Moore:** Apple have too powerful incentives not to let other browsers fairly compete on iOS.

**James Moore:** Because each 1% of search revenue is $200 million per year. It was 9% of Apple's net profit. And so if they start losing browser market share, that's going to significantly impact shareholder value, which is something Apple deeply cares about.

**Amal Hussein:** Yeah. I mean, if you think about it, Google pays Apple, as of the most recent check that they cut them 20 billion; I think it didn't start out at 20. It's been going up every year, gradually. It started out I think around 15-ish. And so they gave them $20 billion just to be the default search engine on Safari, on WebKit, basically... Which by default is going to be applied to all browsers, right?

**James Moore:** No, it's only applied to Safari.

**Amal Hussein:** Okay, good to know.

**James Moore:** But Safari has over 90% -- as far as we know, it has over 90% market share on iOS.

**Amal Hussein:** That's what it was. So that's the statistic I'm thinking about. So 90% of browser usage on iOS is actually just through Safari... And so think about all of the wealthy people that have iPhones in the world, 90% of them are using Safari, 90% of them have Google as their default search. They can go in and change that setting manually, but it has to be an action that users take, and not all users do that. And so they get $20 billion just for that. And yet their App Store revenue annually is about also 20 billion. So it's interesting to see these two numbers are comparable, yet one is coming from all of these different sources, and the other one is literally just like a little bribery check. It's fascinating.

**James Moore:** Also, it changes the incentive structure, because presumably, if Apple wasn't receiving the $20 billion from Google, Google would have gone after Apple in a legal sense a lot harder than they did. But presumably, the reason Google hasn't fought this hard... Now, obviously, Google would be interested in getting Chrome onto iOS... But the reason as an organization they've never sort of taken Apple to court or pushed really hard on that is because they've already got what they really want, which is all the users on Apple to use their search engine.

**Amal Hussein:** \[00:40:03.06\] Yeah, being redirected to Google. Yeah. Fascinating. And what's so interesting about this too, there's always the potential of having a higher bidder. So what if Microsoft comes along and is like "You know what? We'll offer you 22 billion. Send them to Bing." I mean, ultimately, Google -- this is a fight that should happen regardless, right? But it's interesting that "Okay, well, I'm appeased for now, so I'm not gonna care about this." You would think that of all of the companies in the world, Google would probably be the one to really want to have browser choice on iOS, because they're so invested in the web...

**James Moore:** Yeah, the problem is though that if you're talking about the economic model of browsers, and you talk about Google's economic model is to -- they use their browser to direct people to their search, which displays adverts, and they make ad revenue. Firefox's revenue model is to, again, direct people to search, and they get a cut back of that. Edge's economic model is to direct people to Bing. And Safari's economic model is to direct people to Google. So all of these browsers, their economic models are kind of centered around search.

**Alex Moore:** One difference there, of course, with Firefox and the other small browsers is they gain their market share through merit, not control of an operating system.

**James Moore:** So one really good thought experiment is how much money has Apple cost Firefox over the last 10 years? And we can just work it out; you just look at what percentage of market share Firefox has on Android, compared to what percentage market share they have currently on iOS, and they would have missed out on many, many, many billions of search engine revenue.

**Alex Moore:** Even if you're being really conservative... Let's say you say Firefox had a 3% market share on iOS. That's $600 million a year. Their entire budget was only around 440 last year.

**James Moore:** And so what Apple's done to browser competition on iOS has not only prevented web apps from taking off, they've completely gutted the funding of one of the only three remaining browser engines. And we've only got three left; we've only got Chromium, Gecko and WebKit. It's important to keep them around, but if Apple's sort of ensuring that nobody can compete on mobile ecosystems, then it's going to --

**Amal Hussein:** It's going to continue to hurt the weakest link, right? Yeah. Oh, man, this is like so much more insidious than I even thought.

**James Moore:** Also, it flows into features as well. So obviously, if you've got a small budget, then you can't hire as many engineers; you've got not as many engineers, you can't build as many features. You can't build as good a browser as if you had a big budget. Which would then lead into gaining more market share, which would gain more search engine revenue...

**Amal Hussein:** Yeah, it's like a self-fulfilling downward spiral. Oh, gosh... Alright. Well, so I feel like we've set the problem up really well. So I think folks understand what the problem is. So let's pick back up to - you all decided to do something about this. So you contacted regulators? I don't even know, would you go to regulator.com, or something? "Dear sir or madam... I have a problem." Where does one even get started with contacting a regulator as a software engineer?

**James Moore:** It's not far off that. It was really just "Hi, we're a group of web developers. We're really concerned about anti-competitive behavior. We'd like to give you a presentation on this, this, this, this, this. Can we have a meeting, please?" And that was literally how we got started.

\[00:44:13.03\] The UK Competitions and Markets Authority were running an investigation into mobile ecosystems, and they did kind of like a request for comments, and we did a short three-page submission, I think... And then we sent them an email and we asked if we could give them a presentation. And so we linked up with two other sort of fairly well-known web developers, Stuart Langridge and Bruce Lawson, who are both from Birmingham, and we asked Bruce and Stuart like "Hey, we want to go talk to the UK..." Because both James and I are UK citizens, but we're in Australia, so it felt a bit weird of just us two Australians went to talk to the UK regulator about browser competition in the UK...

**Amal Hussein:** You're like "I'm no longer paying taxes here, so... I need to bring a taxpaying citizen with me."

**James Moore:** That's right. And it was really important, because at the time I had no experience in doing public speaking, or presentation... But Bruce and Stuart had done it for a really long time. And when we were practicing our speeches and stuff, they just gave great feedback. And by the time we'd actually got to the meeting, we had this really good presentation where I went first, I told the story about the coffee shop, and web Bluetooth, and the printers, and then I talked about the notifications... And then we went on to Bruce, and he talked about accessibility, and he talked about people with lower-end phones, and why this lack of competition is impacting them... And then Stuart came in and he talked about security, and privacy... And the common theme across all three of our presentations were "Apple's holding back the --"

**Amal Hussein:** The web. Yeah. Literally, the web.

**James Moore:** The web and web apps from ever competing. And we were brought up notifications multiple times during that meeting with the CMA. And then just by pure, sheer coincidence, literally three weeks later after that meeting, the first commits in WebKit started hitting to implement notifications. And we're talking about -- this is 11-12 years of asking Apple for notifications... And they only start building them presumably after they started getting some regulatory pressure. Like, "Hang on, we hear you don't have notifications..."

**Amal Hussein:** Yeah, what's going on...? This is fascinating, because a lot of our listeners are in the US, but also a lot of our listeners are in Europe, all over the world, and in Asia, we've got some folks in Africa, Australia... The United States I can speak for, which is where I live - regulating big tech, big corporations is very, very difficult. It's something that doesn't really happen very often. And so we're unable to regulate even just like social media usage for kids. And these are really pretty detrimental things that are happening to young folks, using apps that they're not quite ready to be using. And so I'm just wondering, what is that even -- Apple getting regulated from the EU is great, but what about the rest of us? There's so many other places in the world that need this type of kind of slap on the wrist.

**Alex Moore:** I think what's happening at the moment is the EU is one of the first collection of countries, first jurisdictions that's really had a good crack at regulation. This is with the Digital Markets Act. And every other regulator on the planet is looking at this and going "Right, how's this going to work? What are the problems going to be?" And they're all on pause while they see how it pans out. And then they're going to plan their own regulatory regimes.

**Amal Hussein:** So you think this is like the domino? It's like the first big domino to fall was the EU, kind of being the leader?

**James Moore:** \[00:48:08.08\] The reason it's so difficult in the US is that all of the existing law in the US is built around traditional companies... Where you go, and you buy a product, and you take that product home, and then... I mean, you own that product, and it's in your house. The one we like to bring up is the microwave example. You don't go to the hardware store and you buy a microwave and you bring it home, and then suddenly, the microwave gets an update and says "Right, a new update. You're only allowed to buy food from authorized suppliers. You can't buy food from these people, because there might be poison in it, and we need to check that all the food suppliers don't poison you." Which - the ability to basically have that hand that remotely controls the device you have purchased is really a technology problem, which has only existed properly for the last 20 years... And sort of exacerbated with these very closed mobile ecosystems. So it's just the law has not caught up to that.

In terms of global regulation, the EU was the first to actually enact laws to combat the problems in browser competition. But so far, we've already got recommendations from the UK regulator, the Japanese regulator, and the Australian regulator. So there's sort of four major jurisdictions that are either in the process of making those laws, or have made recommendations that the laws need to be changed to facilitate browser and web app competition.

So from the Japanese Headquarters for Digital Market Competition, they said "Mandatory use of WebKit and the reluctance to support web apps and browsers, Apple, third-party browsers are forced to provide services based on WebKit, which lacks support for web apps, and competition through ingenuity among browsers may be impeded." So they've basically come out and they said they think it should be reversed.

And the in terms of the actual legislation, the UK is about to pass the DMCC bill, which is their Digital Markets bill, and that will empower the regulator to set code of conduct for each of the gatekeepers, which hopefully will include context related to browsers and web apps.

**Alex Moore:** Japan is currently writing their laws. I believe it covers four areas. I think it's app stores, payments, browsers, and one other; search maybe, perhaps.

**James Moore:** And we've deeply consulted with all of these jurisdictions, and intermitted hundreds of documents to go "This is globally important, and this is as important as App Store, if not more important than App Store regulation", which is kind of the message we're trying to get across.

**Amal Hussein:** That's a fantastic message. And thank you also for reminding me that the UK is no longer part of the EU. I was like "Wait, what's the UK doing on its own?" I was like "Oh, wait, they're not part of the EU anymore." I always forget that.

And so kind of taking a step back to like the EU's regulation... So you all are being very humble, because it's not just this "Oh, we talked to a bunch of regulators, and then notifications started to happen." No, this went much, much further. There's some pretty big things that you helped influence, that enabled some pretty cool things. So can you tell us a little bit about this Digital Markets Act? It's kind of huge. It's much bigger than I even thought at first, because I'd realized that the only parts that I was reading about were the parts about like the app stores, and browsers... But the Digital Markets Act extends to like a whole slew of things.

\[00:51:59.01\] And one of the words that Alex just used, and James - they used the word gatekeepers. We'll kind of define what those are, because that's actually a very specific definition, of what is a gatekeeper on the internet. So let's start with this DMA... And specifically, maybe just broad strokes what it is, and then we can kind of dig into the areas that you all helped shape and influence for these regulators.

**Alex Moore:** Right. Okay, so the Digital Markets Act is a new piece of legislation whose aim is - there are some particularly massive companies operating in the EU, who run platforms where they have enormous market power. So these are the gatekeepers. Now, at the moment there's only six of them. You have to be unbelievably big to be considered a gatekeeper. Currently, they are Google, Apple, Meta, ByteDance, who own TikTok, Microsoft, and Amazon. So they're the six.

**James Moore:** And just two days ago possibly Twitter, now X, and booking.com might be added to that list.

**Amal Hussein:** And what do you need to do to make it to that list? What's the criteria?

**Alex Moore:** Okay, so there's quantitative metrics to be automatically declared. The quantitive metric is 10% of the consumers in the EU, which is 45 million users have to be using your product. And at least - I think it was 10,000 business users. Now, that's to be automatically -- there was also a revenue requirement as well. You have to do X number of billions of dollars of revenue. I can't remember the amount.

**Amal Hussein:** Yeah, it was like around 75 billion Euros, I think, which is like 80 billion --

**Alex Moore:** Very large figures.

**Amal Hussein:** Yeah, some something like that.

**Alex Moore:** Yeah, I think they didn't want Linux being covered, or something like that.

**Amal Hussein:** Right. Exactly. Makes sense. Poor Linux. Yeah. Or the JavaScript equivalent, Node. That would bad, yeah. So essentially, these gatekeepers that you defined are these platforms that have massive, massive user adoption; they're like wealthy corporations, and so they have some sort of -- they have sway with users. So do these DMA rules only apply to these gatekeepers? Is that the deal?

**Alex Moore:** Correct. Basically, the idea here is let's say I own a massive platform, like an operating system. Under the DMA, it's all about fairness and contestability. So you're not allowed to use your control of that platform to self-advantage yourself in other products down the line, or extract excessive fees... So it's all about using the control of one platform for stuff lower down.

**Amal Hussein:** Yeah. You don't want to create a landscape that like tips things in your favor too much. You have to allow for competition. Is that the intent?

**Alex Moore:** Yes. By the way, you can still be declared a gatekeeper if you don't hit these quantitative metrics. They just need to do an investigation and say "Well, you don't hit the metrics, but we still think you're so important anyway, and we're going to include you anyway." It's just not automatic. Yes, so it also only applies if you're a particular type of core platform service. And they have a list of these categories. So one category is operating systems, one category is browsers... They've got this really weirdly-phrased one, which is called "Online intermediation service", which is basically things like Google Maps, and Amazon Marketplace, and the app stores... It's a sort of catch-all clause.

And if you have one of these platforms with sufficient scale, then suddenly there's a whole pile of rules that apply to you. Now, for particular core platform services, there might be extra rules that apply just for that type of core platform service.

\[00:56:04.19\] So there's specific rules for operating systems, there's specific rules for messaging services, there's specific rules for browsers. So we've got the list of what the designated \[unintelligible 00:56:13.20\] Maybe Alex can go through that.

**James Moore:** Yeah, So for social networks it's TikTok, Facebook, Instagram, and LinkedIn. You've got messaging services - WhatsApp and Messenger. There's YouTube, Google Search, Google Maps, Google Play, Google Shopping, Amazon Marketplace, the App Store, Meta Marketplace... There's the ad networks for Google, Amazon and Meta. And then there's the things that we really care about, which is the browsers; there's only two designated browsers. It's Chrome, and Safari. And there's three designated operating systems: Android, iOS, and Windows. And unfortunately, so far iPad is not included in iOS as part of that system.

**Amal Hussein:** Yeah, that's such a travesty, because they are like the same. I know there's some minor differences, but it's just sad that iPads didn't make it onto the list.

**James Moore:** There's a market investigation to add iPad OS, even though we believe it's essentially the same operating system. So hopefully, that will get added soon, in the next few months. But basically, when the Digital Markets Act - if we rewind back to 2021, there was nothing about browser engines or web apps in the legislation. And in fact, before we started our work, as far as we know, no regulator had really talked about browser engine competition or web app competition at all. And it's not surprising, because even lots of actual web developers didn't know that Apple had banned the other browsers on iOS. So it'd be a bit unfair to expect the regulators to do about it.

So we talked to the EU and we had quite a few meetings with them to talk about the how important it was to get both legislation into the Digital Markets Act on both browser engines and web apps, and how the web apps could really contest the native ecosystems on both Android and on iOS. But the problem was that at that point it was really late. The Digital Markets Act had already been sent off to all of the parliaments, and they were already getting ready to sign off, and doing sort of major changes to the act at that time would obviously be a very difficult ask. And so --

**Amal Hussein:** Yeah, that's like "Can you review my pull request at like five o'clock on a Friday? A 5000-linee pull request..." It's not everybody's favorite, but I'm sure people understood the importance of this, hopefully...

**James Moore:** Well, no, we were kind of kicking ourselves, because we were like "Why didn't we go talk to them a year ago? We could have got this in there." But at the same time, we were still heavily engaging with UK Competitions and Markets Authority. And then I think it was in January 2022 the UK published their mobile ecosystems report, which is this massive -- I think it's at least 1,000 pages of dense text long. It's a massive report, and about a third of it's dedicated to browsers and web apps. And that got published, and that just basically outlined "Yeah, this is a big issue. This needs fixing", and recommending all these interventions, including ensuring that browsers and web apps are allowed to fairly compete.

Literally, just a few weeks after that got published, somebody messaged me and they said "Oh, there's a copy of the DMA. You absolutely have to go read it." And they said "Specifically go have a look at 5.7." And then we spotted the newly-added text, which was "The gatekeepers shall not require end users to use or business users to use, or offer, or interoperate with an identification service, a web browser engine, or a payment service." And we were basically overjoyed that we'd managed to slip this in just at the very last second through basically just talking to both the EU directly, and to the UK regulator about how important this was.

\[01:00:30.02\] And the other text that was added was when gatekeepers operate and impose web browser engines, they are in a position to determine the functionality and standards that apply not only to their own web browsers, but also to competing web browsers, and in turn, web software applications...

**Amal Hussein:** Boom.

**James Moore:** ...which means in the law we have the purpose of having browser engines is to power web software applications. And that's in the text. That's going to be very hard for any gatekeeper to argue against. So that was a really big win. So that's in the EU. In the UK, they've also opened an investigation called Browsers and Cloud Gaming, and that's a market investigation reference. And the special thing about the market investigation reference is the UK, unlike most other jurisdictions, have very strong competition laws, which allow them to essentially impose conditions on gatekeepers if they open one of these references. It runs for about a year and a half, and at the end of it they can come along and they can just tell the gatekeepers what changes are required under the investigation.

Now, Apple had the entire case shut down, because they took the CMA to court, and some legal technicalities about when the investigation was started. And then the court agreed with Apple, and then they just closed the entire case down and froze it, which means obviously it was a big loss... But then the UK Competitions and Markets Authority appealed, and they won on appeal. So just on January 26th this year, that investigation started up again, but the clock resets, and then that investigation is ongoing. And then at the end of that investigation, they can impose conditions on Apple. And that's in addition to whatever the DMCC bill enables the UK to do.

**Alex Moore:** And just to highlight here, this isn't a normal investigation. This isn't "Oh, let's see how the market's going." This is a special type of investigation called a market investigation reference, which is the regulator has gone "This is badly broken, and companies are seriously misbehaving, and we're going to fix it." It's almost like Apple's on trial might be the way of thinking about it.

**Amal Hussein:** Wow...

**James Moore:** And not just Apple. It's Apple and Google.

**Alex Moore:** Oh, yes. It's \[unintelligible 01:03:13.01\] both.

**James Moore:** And Microsoft?

**Alex Moore:** I'm not sure. I think Apple and Google are the only ones mentioned in the press release.

**Amal Hussein:** And this is the UK doing this, right? Just to clarify.

**Alex Moore:** Correct.

**Amal Hussein:** Okay. Wow... And so what's their premise? What's the prosecutor's argument?

**James Moore:** They had a list of things, specifically Apple effectively banning the other browsers. There's a number of points there. The other one is -- do you remember the thing about how Apple wouldn't let the cloud gaming services onto the iOS App Store? That's the second focus of the investigation.

**Amal Hussein:** \[01:03:53.12\] Oh, my God, they're never gonna stop paying for that... Anyways, and why Google? What's Google getting roped into on this one with the UK?

**Alex Moore:** I would imagine it would be any way in which they are impeding browser competition on Android, would be my guess.

**Amal Hussein:** Interesting. Okay, so it's an investigation to see if there's any wrongdoing here... Which makes sense, because if they're looking at one platform, they should look at the other as well.

**Alex Moore:** Probably related to the complex set of contracts that Google has with all the OEMs, bundling the Google Play Store and Chrome together to be on the homepage.

**Amal Hussein:** Oh, interesting.

**James Moore:** Yeah, so Google has these complex contracts that they force on the OEMs, the original equipment manufacturers of Android devices, to essentially forced Google Chrome onto the homepage. And obviously, that has an adverse effect on browser competition.

**Amal Hussein:** Yeah, that's right. That's probably a good time to get into this topic, which is like there's anti-competitive behavior. So ultimately, the DMA is a huge piece of legislation. It's got vertical legs, horizontal legs, it's pretty large... But the kind of thesis is mainly specifically around these large companies that have this massive market share... How do we kind of curb their anti-competitive behaviors, right? And so, specifically with browsers, can you give us some examples of anti-competitiveness? Both Chrome, Safari, they do things specifically around defaults, that I think are anti-competitive, and that do fall into that bucket of "Hm... Shady", right? And you just gave us an example with the OEM bundling, and having Chrome be on the homepage, and yada, yada, yada.

I guess, for me, where do you draw the line between "Hey, I have a product, and I'm just trying to sell it, and just market it, and like push the agenda", versus "Oh no, I'm really trying to kind of put my product ahead of others by like kicking people in the knees", or whatever, right?

**Alex Moore:** I think that comes with size. Obviously, if you're a startup and you're fighting for market share, it's expected that you're going to fight hard for market share. Once you get to a certain level of dominance, then it's fair that a certain level of rules then start applying to you. And if you're acting in dual roles, as both -- in both Apple and Google, they're both the gatekeeper of the operating system, and they're also supplying products to that operating system, which need to be open to competition. And so they shouldn't be using their control of the operating system to self-preference their own browser. Now, to answer your question about what's the sort of anti-competitive behavior - all of these companies engage in anti competitive behavior.

**Amal Hussein:** They wouldn't be good capitalists if they weren't, Alex...

**Alex Moore:** No, I suppose not...

**Amal Hussein:** \[laughs\] Like, come on...

**Alex Moore:** Not returning good value to shareholders, yes.

**Amal Hussein:** Yes. What about those shareholders, you know...?

**Alex Moore:** Oh, think about the poor shareholders... \[laughter\] \[unintelligible 01:07:07.02\] obviously the most extreme is Apple. They've just banned the other browsers, effectively... No other company on the planet has just flat out banned all of the competition. Can you imagine if Microsoft had even -- Microsoft got fined 540 million euros just for not displaying a pop up screen to suggest the user to install another browser. Can you imagine if they had banned all the other browsers?

**James Moore:** Like the dark ages... Like Internet Explorer, that's it. No other browsers.

**Alex Moore:** Yeah. It'd just be insane.

**Amal Hussein:** Yeah. Apple is basically like "I'm going to salt your earth. No one else gets to grow anything here. This is mine!"

**James Moore:** \[01:07:56.20\] Right. So Apple's number one. And there's a big list of stuff in there. Until 2019 they didn't even let you change the default browser. There's dark patterns in setting the default browser...

**Alex Moore:** It hides -- the panel to change browser disappears if your browser is Safari.

**Amal Hussein:** \[laughs\]

**James Moore:** Oh, we're not joking.

**Amal Hussein:** Oh, my God...

**James Moore:** If your default browser's Safari, the panel to change default browser - it suddenly disappears if you open Safari.

**Alex Moore:** It reappears if you change your browser. So there must be code in iOS to actually do that. And obviously, with web apps, you don't have the ability to have an install button, so you can't do install prompts... And there's basically a huge list of sort of other minor issues, but which all collectively really heavily push users to Safari. There's also the fact that they've got the default browser. Because lots of uses never change the default, and that's one of the reasons choice screens are getting introduced, is to combat that power of default.

**Amal Hussein:** So what are choice screens, and when are they coming to a platform near you?

**James Moore:** Well, it's still up for debate at the moment, because obviously, the gatekeepers again are going to shift towards whatever favors themselves. It's kind of like getting the foxes to design the henhouse. Like, they're going to design the choice screens. But Apple's design for choice screens was just ridiculous. It was like "Download one of these browsers", big Cancel button down at the bottom, Skip This, Do This Later, which we call the "Choose Safari" button... But presumably after several rounds of review with the Digital Markets Act team it will eventually get pushed into something that's reasonable.

It should be on set up of new device, it should be when you transfer from an old device to a new device, and we're arguing that it should also pop up once for every existing device, just to show "Right, which browser do you want to use? Yeah, maybe think about installing one of these other browsers." So that's Apple. We're going to Google... Obviously, nowhere near as -- in this space, you can make lots of cases for Google being anti-competitive in ad tech...

**Amal Hussein:** Every time I'm on Google Search on a non-Chromium browser, it's like "Do you want to be on Chrome?" It's like "Come on over to Chrome! That's where the party's at!", you know what I mean? It's just like "Oh, yeah, Chrome..." It's like "No..."

**Alex Moore:** You can make a case that that's probably not acceptable behavior anymore, to utilize one very successful platform to push another platform.

**James Moore:** And that comes with the concept of being big. Once you're big, and you're in the dominant position, you have to play by different rules. And that means -- so one of the big problems with growing is you shouldn't be allowed to leverage, say, YouTube, which is a very successful, or the most successful --

**Alex Moore:** And a gatekeeper...

**James Moore:** ...and a gatekeeper, to start pushing one of your other products, and then gaining market share by using one product unfairly. To put basically what's akin to an advert in positions that none of the other parties can compete for those positions.

**Amal Hussein:** But this feels like you're putting a monkey wrench into like the capitalist playbook. Like, this is like why companies like do mergers and acquisitions. You gobble this up, you gobble that up, you become big, then you can have the right hand selling to the left hand... That's just the way. But yeah, these things need to be curbed and regulated, in order to kind of make space and make air for choice and consumer choice. So glad that this is happening. But yeah, James, you had some thoughts?

**James Moore:** \[01:12:00.07\] Companies will always try to expand market share, make more money, get more customers, sometimes by making their product better, more features, more secure, more private, sometimes by an anti-competitive method like this. And what you want the regulators to do is you want to get them to align the incentives for doing good stuff to consumers with being successful. And it's basically just by banning these outlying behaviors.

**Alex Moore:** You want them to focus, you want them to win market share on merit. You want them to win market share, because consumers think "That is the better product, I want to use that." Chrome is a good example. If Chrome only won market share because people want to use it because it had the best features, that's a good thing. If Chrome's winning market share because they're using the other platforms, or using OEM contracts to push it onto the home screen, then that's a negative aspect of competition, because that doesn't deliver any values to developers or consumers.

**James Moore:** Yeah, you don't want companies competing on having the best lock-in or the best self-referencing.

**Amal Hussein:** Yeah. I mean, it makes perfect sense. I mean, it's like, work for your users, work for your market share. Yeah, don't use sleight of hand to kind of lead the sheep this way or that way. So I'm so here for it. And just to be fair, Edge - can we cover edge? Because I feel like they haven't been good players lately, especially trying to kind of switch your defaults... Oh, my gosh.

**Alex Moore:** We like to call Edge "Dark pattern central", because they've just got so many of them. You go to download another browser and then it pops up an advert, which kind of looks like it's in the web page, like "Hey, you really don't need to switch to that browser." And they do integrations into windows, so that it automatically locks it to Edge...

**James Moore:** On the screen where you change browsing windows they said "Preferred browser", or "Recommended browser - Edge."

**Alex Moore:** It's another problem because they're a gatekeeper. They're --

**James Moore:** Control of Windows.

**Alex Moore:** Their control of Windows, and they're using that control of Windows and the fact that Edge is the default browser to then try and stem people from moving to other browsers. Now, that being said, Edge is a minority browser. They don't have the dominant market share. You kind of want to -- you want them to compete. You want them to try and gain market share, and compete against Chrome and Safari.

**Amal Hussein:** But not through shady practices.

**Alex Moore:** Also, you don't want them stealing market share off of browsers like Brave and Mozilla and Vivaldi and Opera, and all the other browsers with smaller market share, because that's not going to deliver anything for consumers. And so unfortunately, Edge isn't designated under the DMA. Windows is. So they won't be able to do the quite a few of the blatant anti-competitive behavior in Windows, but it's not going to apply to the Edge browser itself. So there's gonna be limited tools in that.

**James Moore:** And again, Bing is also minority of quite -- it has an insufficient market share to be declared... So they'll be able to continue that behavior there.

**Alex Moore:** Now, just circling back to Google, one thing that we're -- because our organization's fairly narrow scoped, so we don't deal with advertising or search competition. We're basically browser competition, fair and equal browser competition, and fair and equal web app competition in comparison with native apps. They're really our two main goals.

\[01:15:45.03\] One of the problems on Android is that to install a web app properly, you have to use a process called WebAPK minting, which is currently exclusive to Chrome. And only Chrome can properly install a web app, to the point where it starts turning up in all the system menus, and you get security settings and stuff like that to turn off notifications etc. And we've already written a fairly large report saying that they need to be required to open that up to the other browser vendors. But it's all worth circling back to none of this is remotely comparable to Apple's behavior. It doesn't mean it's good, and both the practices of Google and Microsoft do need to get fixed, but the thing is, Apple's the one that's doing the most damage to browser competition overall.

**Amal Hussein:** Yeah. Well, this is a good time to segue into that damage, right? So we're recording this on March 5th, and it's so funny, we've been planning this show for weeks... Y'all have just been under the gun with all this stuff, dealing with regulators... I can only imagine how much work that is. Bruce was even supposed to join us. We were trying to work across like seven different time zones... So anyway, I'm glad we finally were able to do this show; we're recording on March 5th, evening of March 5th, and the DMA officially goes into law March 7th, is that correct?

**James Moore:** It went into law more than a year and a half ago. The gatekeepers got declared about six months ago. But it's not like you get declared, and it's like "Bang!", tomorrow you need to be complying with all this stuff. They give them a six-month grace period to get ready. That grace period ends on the seventh.

**Amal Hussein:** I see. So March 7th is the grace period deadline. Okay.

**Alex Moore:** They have to have fixed all the competition problems by the seventh. But spoiler alert, they won't have, so...

**Amal Hussein:** So they just get fined up the wazoo? Is that what happens?

**Alex Moore:** Okay, so basically on the seventh they need to publish their compliance plans, or their compliance document... Which in detail outlines all the ways in which they complied with the Digital Markets Act. Now, the thing is, we already know so far Microsoft and Google haven't really published much at all. So we're still up in the air about what's going to happen in their compliance plans. Apple has published quite a bit of documentation; they published it on January 25th. And so we already know that Apple's not going to be compliant already, because they've already published.

**James Moore:** We were not happy with what they published.

**Amal Hussein:** Yeah, they're like "You can't make us. We're not gonna."

**James Moore:** More subtle than that, but...

**Amal Hussein:** More subtle than that? Okay...

**Alex Moore:** From our perspective, Apple's lawyers just sat around for a year trying to work out how they could undermine the Digital Markets Act to the most extreme length possible, to the point where it would completely neuter both alternative app stores, and side-loading, as well as browser competition.

**Break**: \[01:19:05.10\]

**Amal Hussein:** So what I want to get into is like Apple caused some serious, I would say FUD, lots of just, I would say community drama, because they shipped a pretty big breaking release with iOS 17.4. And then they reverted it, thank God... But can you walk us through just kind of what happened with 17.4? What was going on? Was Apple just trying to say "Okay, we're getting close to that deadline, and the DMA is gonna come knocking on our door, and so I guess it's time to break web apps..."? What was going on? For folks who maybe completely missed the boat on this whole story, can you walk us through what happened?

**Alex Moore:** Okay, so I think we need to start remembering the text of the DMA. The text in the DMA says browser engines, basically, are to facilitate the functionality in web software applications, i.e. web apps. So when Apple first published their compliance report, their compliance proposal, let's call it, on January 25th, the first thing we noticed is there was nothing about how they were going to support web apps using other browser engines at all.

**Amal Hussein:** Even though the intent - just to clarify, the intent of this whole thing was for it to in theory open up the platform to other browsers, right? That's what the regulators wanted.

**Alex Moore:** Other browsers and other browser engines...

**Amal Hussein:** Other browser engines, yeah.

**Alex Moore:** Yeah, so to facilitate competition with browsers and web software applications. So that's in the text of the DMA. So we were obviously expecting that they would have built functionality to enable any browser to install a web app, and if you install a web app through that browser, that it would use that browser's engine. So basically, if you're going to Firefox, and I had the browser for Firefox, when I tap the icon, it's then using Firefox's engine, not Safari's engine. But then on January 25th there was nothing in their compliance document. And we obviously wrote a document, and we raised that as a concern with the DMA, and we wrote an email and said "Look, there's nothing about web software applications in there."

Then about - I think it was on either February 1st or February 2nd, we actually got an email to the Open Web Advocacy email address saying "The beta has just come out, and we think they've broken web apps." So we obviously started investigating, and I immediately messaged one of the OWA team who's in Europe, and I said --

**Amal Hussein:** And what date was this?

**Alex Moore:** Feb first, Feb second...

**Amal Hussein:** Feb first, okay.

**Alex Moore:** And I said "Oh, can you download a new beta and test this for me?" And he loaded up and sent me videos of it working... And what happened is the web apps that have previously worked, when you tapped, it would suddenly just open up in Safari. And we're like "Yeah, it's probably a bug... Because I can't believe even Apple would attempt to break web apps. It's just too ridiculous."

\[01:24:05.09\] But they also removed web app support from Vision Pro. So when the Vision Pro came out, there was no way to Add to Homescreen in Vision Pro, which is obviously a deliberate decision. So we're kind of like "Have they removed support, or is it just a bug?" And then we had other developers telling us "No, they're doing it deliberately." But we just thought it was kind of too outrageous for them to try it that.

**Amal Hussein:** You're like "There's no way they're gonna stoop this low." That's, that's -- yeah...

**Alex Moore:** Because there are many, many hundreds, thousands of companies using web apps despite Apple, you know...

**Amal Hussein:** Yeah, and I want to get into like the impact of this in just a second, but like to focus on like what they did. So that's the first. So at what point do we get confirmation that "Oh, no, actually, this was intentional"?

**Alex Moore:** It was pretty much one or two days later they released beta 2, and suddenly beta 2 popped up a prompt that says "Your homescreen web app or your web app will now use your default browser." And it was at that point we immediately knew it was broken. Because the thing to understand about web apps is web apps store their data in the browser itself. So if you install a web app with Firefox, that data lives within Firefox's collection of data. If you install it with Chrome, its data lives with Chrome.

If the user suddenly switches from one default browser to another, then suddenly it's kind of like you're wiping all the data, because you no longer have access to that locally-stored data. Not only that, the whole purpose of a web app is it needs to act like an app; it needs to be full screen... If you're switching from your chat to your web app, you need to switch from one to another... Whereas what was happening now - suddenly, it's a browser tab, which is just totally unviable for most apps. Imagine every app on your phone was in a browser tab. I mean, your phone would not be usable, because most people use multiple apps, and they constantly switch from one app to another.

**Amal Hussein:** The point of PWA wasn't to have bookmarks. It was to have like full-screen, installable apps, that have their own context, and yada-yada...

**Alex Moore:** Yeah. And full-screen is another one. So obviously, suddenly they're in the browser, and they're in a tab. Most users on iOS use Safari. Safari deletes. If you don't use a website for seven days, it deletes all the data. So suddenly, all of these web apps are going to get their data deleted every seven days. Notifications were gated behind install. So that means even though the Safari WebKit team had done all this work to build notifications and actually put it in the system, essentially they were removing that, and same with badging... Yeah, and so at that point we knew it was broken, and it was kind of obvious it was intentional. But Apple had not said anything. There was nothing in the release notes; there was a bug ticket that went up, none of the WebKit people responded whatsoever... Their developer relations people were not responding to comments on Twitter... So it's quite obvious, from an outsider, that they've been forbidden to even talk about it.

And so presumably, what Apple was doing is they were trying to sneak this in. Like, "We'll break all web apps, and then hopefully nobody will notice." Minor, tiny features get mentioned in the WebKit Safari release notes, let alone something that's gonna break thousands of apps.

**Amal Hussein:** So this was also intentionally left out of the release notes... Which is like a pretty big deal, right? Like you're saying, little things get noted there, and so it's quite a big deal for something that is such a massive breaking change for it not to be noted, right?

**James Moore:** \[01:28:03.08\] Well, the web's got a very long history of not breaking stuff. Even if something's like misdesigned, we keep it around, because we don't want to bake websites built in the '90s. And in the very rare case where a feature is removed, there's this whole song and dance about removing it, that often goes for years. So to not even include it in the release notes is just extraordinary. And we can't actually think of another example of something similar in like the history of web browsing.

**Alex Moore:** And the other thing you realize is that engineers had to sit down and they had to write code for this. They had to write code. This is a deliberate decision from Apple. And they knew it was going to break all the web apps, and they decided not to publish anything.

So at OWA we suddenly started having emergency meetings, and we were like "Well, Apple hasn't said anything. Is it possible they're going to build something in the next three weeks, and this is just an interim step, where the functionality is going to turn up and it's going to work, and we just can't see that happening?" But the problem is they haven't published anything, so we haven't got much we can go on. So we had emergency meetings, and we realized that the thing we need to do is raise pressure. And so we started doing our blog, we started contacting all these different companies, and we started a campaign, like "Apple is going to break the web." And it's not that they were going to break it in Europe. They were going to break web apps globally. They were going to ruin it indefinitely. No company would ever invest in web apps if they thought there was a possibility that Apple would rug pull the entire system.

And so suddenly, that's such a huge technological risk that if we allowed it to happen, that's pretty much PWA's -- apart from a certain group...

**Amal Hussein:** It's RIP.

**Alex Moore:** Yeah, globally. Not just Europe. Everywhere. Because nobody's going to invest the time and money if they think it's gonna get pulled out from under their feet. I mean, maybe you get some individual companies going "Oh, we hope that Apple will keep PWAs around in the US, so we'll build it in the US."

So we obviously contacted the DMA, we met with them, we discussed our concerns... But then we started to raise pressure. We were contacting developers, we were telling developers that all the apps are gonna break, and then we have loads of developers suddenly join OWA. And telling them "I don't know how my business is going to survive. Our entire business is built around this web app. If it stops working in Europe, then we're gonna have to fire all our staff, because literally all of our businesses is revolving around these web apps." And we have lots of companies writing and talking to us.

**Amal Hussein:** Yeah, can you share some examples, actually? Because I think it would help people understand the scope and breadth of this. Because one of the excuses that Apple made when they were like -- because they gave a little update saying "Oh no, this was intentional..." They had a little paragraph that they added and they said that "Oh, we're not that worried about it, because not that many people are using this feature." But actually, despite the fact that not that many people were using it, there were still -- like, the people that were using it were really very reliant on this. And can you give some examples? I know you can't share like everything, but for the folks that are comfortable sharing, could you give some examples of...?

**Alex Moore:** So we published -- so we went out and we created surveys, basically, because the EU as a regulator can't just do stuff because of hearsay. They can't just -- they need real solid evidence to be able to act on anything. And so obviously, the way they work is they talk to the different parties, they collect the information, and then they decide to do actions based on the information that they've collected. And so one of the things that we realized is that we didn't have enough solid evidence of the damage that this was going to immediately calls to European businesses. So that's ignoring the future damage to the web ecosystem, but the actual damage it was gonna do.

\[01:32:21.24\] And so we started a series of surveys. So we did two surveys where we asked developers lots of details about how exactly it was going to hurt their business. And in just a few days we got over 650 submissions for the first survey. And then the second survey, which is really detailed and had a lot more questions, I think we got at least 500. And suddenly, it becomes really obvious how critical web apps are. I mean, they might be only a small slice of the market, but it's still a decent slice of the market. And some of these companies had hundreds of thousands of users. And we're talking healthcare, education, government apps for doing internal government work.

And then we started getting all the comments in from developers about how it's gonna affect them. A few of them I'll read out to you. "I think it will kill my business." "I'm in a really bad position, with my credibility on the line." "This is a total, sudden disaster." "My user base consists of older users. I'm not going to be able to explain why this is happening, and that I can't do anything about it." "We worked so hard with service workers to get the perfect PWA app, and Apple was just throwing that thing away without any notice."

And then suddenly, we had all these developers coming into our group, like "Right, we're gonna have to rebuild as a native app. Does anyone know how to do that?" And then we had other users who were like "We can't build as a native app, because Apple's restrictive App Store rules won't let us build as a native app." And so even by this announcement, they're already sort of causing damage.

Now, luckily, we've got a really great dedicated group of people who volunteer at Open Web Advocacy. And essentially, everybody just worked around -- you know, it felt like during shifts. People working around the clock to produce like the open letter, we had people working on multiple regulatory submissions; we produced four large documents in that really short timeframe to -- because we've got to provide the evidence, we've got to show why it's damaging, and why this is such a big issue.

And basically, everybody was volunteering. We were having meetings every single day, right up until they announced that they were going to walk back the decision. And probably our feeling is it's the combination of both the open letter, the negative press, but mostly that the European Union and the Digital Markets Act team opened a proper investigation to investigate the removal.

**Amal Hussein:** The removal, yeah. That's a pretty big thing. And thank you so much for sharing some of those impact stories... Because yeah, this is why we don't break the web. Like, the sheer size of the web... You break 1% and that's millions of people, and that's real businesses, real users that are impacted. So yeah, I hope you're able to kind of share some of that feedback with Apple, if possible; if folks who work at Apple are listening, hopefully you're hearing this now, but I do hope you have a chance to share that a bit more directly.

**Alex Moore:** We emailed Apple.

**Amal Hussein:** You did?

**Alex Moore:** Yeah, we emailed Apple. They know exactly. They knew very early on exactly the damage it was going to cause. And yeah, it still took them over two weeks to reverse that decision.

**Amal Hussein:** \[01:35:55.23\] Yeah. And I just want to say, thank you, kudos... You had about six things going in the background. One of them was the open letter. I know you can't talk about everything because of legal stuff. We'll just put legal stuff in quotations... But I know you all were doing a ton, and really, this was a pretty monumental move, to get them to reverse this. I wish we weren't having this conversation, right? Like, that would be ideal. The fact that this happened is horrible. But the fact that we were able to get that reversed is amazing, and that just goes to show - yeah, being organized, and... It still counts, you know?

**Alex Moore:** Yeah... Although if we didn't have the threat of the Digital Markets Act there, our chances of success would have been quite low, because Apple could have --

**Amal Hussein:** Just because there's just little people yelling, as opposed to --

**Alex Moore:** Well, and then Apple would just -- it'd just come down to "What damage is this going to do to our brand? Is this going to be big enough to damage our brand that we're willing to reverse the decision?" And the thing is, this decision is outside of this -- I'm pretty certain the Safari and WebKit team were not happy with this. I mean, there's no way you could dedicate your life to the web and be happy with these decisions. So these decisions would be coming from up the food chain, and imposed on them.

**James Moore:** Just one minor point that we missed from earlier is it took Apple two weeks to officially confirm that they were removing this functionality in the EU, and breaking out the web apps. And then about another two weeks to change their mind and go "Actually, we're keeping them after all."

**Amal Hussein:** Yeah, I mean, they just kind of look -- it's just embarrassing for like a trillion-dollar company, to like be playing games like this... It's just embarrassing, really. And I have to wonder, what would Steve Jobs say about this whole fiasco? I wonder, would Steve Jobs be like "Yeah, kick the little guys"? Or would Steve Jobs be like "Over my dead body?" I don't know. I have to wonder...

**James Moore:** I think Steve Jobs was very into the whole locking your users style of -- as visionary as he was, I don't think he was on the...

**Alex Moore:** Interoperability and competition side of things...

**Amal Hussein:** Yeah, sadly... Even though web apps were birthed... Like, the whole concept of using the web on your phone was started on an iPhone, started with Safari, in 2007. But anyways. So kind of moving on to -- okay, so now we're approaching March 7th, Apple came up with their plan, which you said isn't really compliant... We'll link to all this stuff in the show notes, so everyone can see... But what's next? Because we do need to get Apple to comply, we do need them to make room for other browser engines on iOS... And more importantly, we need this to be global. So do y'all need some more volunteers to help you in the United States? How do we support this important mission? So yeah, I don't know, I'll throw this over to you, James. Tell us what's next.

**James Moore:** Alright, so the grace period for the gatekeepers ends on the seventh. Now, I don't think anything will happen immediately. So the EU Commission is going to have to take some time to assess how well each of the gatekeepers is complying, and then work out who's infringing, and what the highest priority things to go after is. Now, it seems to us and a bunch of other observers that out of the gatekeepers, Apple is the most belligerent, and more clearly non-complying than the other gatekeepers. So they're likely going to have multiple what's called proceedings opened against them. These are essentially large investigations as to non-compliance with the DMA.

And one thing we haven't mentioned here is the DMA comes with the power to impose insanely large fines. I think it's 10% of global revenue, which in Apple's case would be, for a single fine, potentially, $78 billion. It's insane amounts.

**Alex Moore:** \[01:40:10.17\] 20% for repeat offenses.

**James Moore:** Or 20% for repeat offenses. And also, it's not like you get fined and that's it. It's you get fined and you still have to fix it, otherwise we can fine you again.

**Amal Hussein:** Wait, so is there like a payment plan? You come up with like 70... And then what happens with this money? Does this just go to hire more regulators?

**Alex Moore:** I honestly don't know.

**Amal Hussein:** Does this hopefully go to like roads, schools, bridges, teachers, firefighters, the NHS? Oh, sorry, not the UK, but the --

**Alex Moore:** That's why they left.

**Amal Hussein:** Yeah, that's why they left.

**James Moore:** The act does say that the fine has to be proportional. So I imagine there'll be a gradual stepping up, depending on the severity. Although we were already getting very big fines from the antitrust -- what was it, one and a half...?

**Amal Hussein:** The Spotify one? One and a half billion.

**James Moore:** 1.8. So that gives you an impression of the taste of what's to come.

**Amal Hussein:** Okay. Yeah, for sure, for sure. And they're not messing around. We'll link to the Spotify thing, but basically Spotify, along with Netflix and many other companies have stopped allowing their users to sign up for the app, and pay for the monthly subscriptions through the app, because they don't want to give 30% of their monthly fees to Apple... And so they send them to the web, and there's a hole -- and then Apple kind of did some stuff to kind of try to redirect users, and that was just like... That was not cool. And so the EU just came and they smacked down. We need the EU to come to the US, because there's so many smackdowns that also need to happen here... So can we spread the smackdown love a little bit...? Anyways, okay, so back to you, James.

**James Moore:** So first up, we will need to communicate to the commission exactly what we're not happy about with Apple's proposed contract to allow other browser engines on. At the moment, there are a number of reasonable conditions, like "You have to regularly patch your browser, you have to follow certain security standards", and all the browser vendors will be like "Yeah, thumbs up. We already do that." But then there's a series of unreasonable conditions after that. There are things like -- the scope of contract is very broad. It says "You agree to follow all rules in Apple materials", which basically, who knows what that means? Is that anything on apple.com/star?

**Alex Moore:** You agree to everything on star.apple.com/star...

**James Moore:** Including any changes. There's another clause that says "We can break any API, at any time, at no notice, and you agree, you're happy with that." There's another clause that says "If you do anything wrong, no matter how small, at Apple's discretion, we can delete your browser and every single other app your company offers, from every operating system that Apple sells, including macOS." This is the kind of stuff that's in the contract. Now, obviously -- so luckily, the DMA does have rules about this. With API access, they say the rules have to only be about security, and they have to be narrowly-scoped, necessary, reasonable, and justified. They also have this thing called FRND, which is Fair, Reasonable and Non-Discriminatory, which has to apply to their general App Store rules. So they're going to have to make some changes here to make it comply with the DMA.

**Alex Moore:** \[01:43:50.20\] The second one that we really have to go after hard is there's a bunch of conditions related to browser engines, which at least at the first review seem like it's going to force browser vendors to use Apple's UI components, which could possibly mean they'd have to rewrite huge sections of their browser to push it into iOS. And so --

**Amal Hussein:** That's wild that they're imposing that. It's like, talk about kicking and dragging and screaming. It's like, this is a weird, sadistic negotiations table, where it's like "Okay, you want me to do this? Sure. I'll do this, but you have to do this." It's like crazy. What the hell? Oh, my gosh. Anyways...

**Alex Moore:** The thing is, if they're reasonable conditions, they don't need to be mandatory. Browser vendors are gonna want to make their browsers work great on iOS. You don't need to come along and say "You have to use this particular piece of technology."

**Amal Hussein:** Well, it's like somebody who's obsessive compulsive that's like letting guests into their house for the first time. It's like "Here's my 350-page book. Here's my manual that I want you to read before you can be a guest in my house." It's like, there's just like common sense. These are also companies writing the most critical software on the web. Why would they be misbehaving in that way? But anywho. So essentially, Apple's playing hardball. So essentially, Apple was like "Okay, you want us to allow other browser engines into our little walled garden? We're going to come up with a bunch of silly rules. And so now you all are going to try to fight those and work with the regulators on combatting them etc."

**Alex Moore:** Yeah, and we would have already written these documents, but we had spent the last four weeks full-time fighting Apple's removal of web apps.

**Amal Hussein:** Yeah, yeah. Just to get you back to square one, right? Just to get you back to square one, essentially... Which sucks. Real talk. Oh my God, what a -- I wonder if that was some kind of a stall tactic, almost like...

**Alex Moore:** No, it would have been threats. I mean, the web poses a huge threat to Apple's ecosystem... And capable web apps is obviously -- Apple considers it a threat. We know they consider it a threat because of their internal documents. And so they were just thinking "Oh, maybe we can use--" I think what they were hoping is they could use the DMA as a tool to break web apps, and then blame the DMA.

**Amal Hussein:** And then there was a reporter, a Financial Times quote that I saw, where they were contrary to Apple's public disclaimer...

**James Moore:** Yes, that's the commission making this statement, and they said something along the lines of "Contrary to what Apple said in public, it was neither required nor justified by the DMA to make this change."

**Alex Moore:** And the thing is, Apple knew that, because Apple can probably phone-call the commission anytime they want, and go "Do we have to ban all the web apps because of this condition?" And they would have got an answer. I mean, it was an absurd stance to take.

**Amal Hussein:** Yeah. And for context, I think we didn't go over that, so I just want to make sure people know... So Apple did have a public response later, as to why they did what they did, and then reversed it... And then their excuse was like "Oh, we thought we had to." \[laughs\]

**James Moore:** I think what the plan was, was "Let's remove it, because we don't share it with the other browsers. We'll remove it in beta, we won't have it in the release notes... A couple of web people will complain on Twitter, but everyone will ignore them. We'll wait four weeks, we'll release it to the public. It will break a bunch of stuff, but then we'll go "Well, no one uses it anyway."

**Amal Hussein:** Yeah. Right. Right.

**James Moore:** I think that was the plan. I genuinely think that's what they were all thinking.

**Amal Hussein:** \[01:47:57.28\] Yeah, that makes a ton of sense. We're just gonna -- it'll be a slow death, quiet death. If a tree falls in the forest, and nobody hears it, did that even happen? This is actually the question I wanted to ask earlier, that kind of slipped my mind... I really want to hear from both of you on this take that kind of came up in a conversation that we had on the show a couple weeks ago, I think, where it was like "Only developers care about this problem", in the sense that your average person, your average Joe Schmoe that's walking around on the street doesn't know about this. This is a very obscure thing, but in general this, this is a problem of browser choice, and Apple not playing nice, and its walled garden, and all of this stuff... This is stuff that only developers care about, if even developers care. It's a subset of developers that even are aware of the problem, it's a subset of those people who are aware that care. And so how have you all been making this a case for everyone? Because ultimately, these regulators stepped in, you were able to talk to them... The browser stuff and interop stuff wasn't even on their radar until you started talking with them... So how do we make this something that more people know about and care about? And ultimately, what types of power dynamics need to be in place to kind of make this such that Apple doesn't feel like "Oh, well, it's just people on Twitter yelling." Is it just like brand tarnishing? What needs to happen to get this more sway?

**Alex Moore:** Yeah, the harms to consumers -- the reason consumers don't care is because the harm is completely hidden. It's very hard to see the app that has gone up in price by potentially double because of App Store fees, and the extra cost in having to build it for multiple operating systems. It's very hard to see the app that was never built, because it was made economically unviable by these gatekeepers. It's very hard for, say, the business that never built an app which they could have built for say $70,000, but they didn't do it, because actually when they wanted to budget for it, it cost $300,000. I mean, all of those harms are hidden.

The reason we've been able to get it across to regulators, is because regulators are staffed with economists and lawyers. And so you can describe all of these concepts in terms of economics, and describe why particular actions lead to damage in the ecosystem, and then onto sort of market economics.

**James Moore:** I would say I largely agree with your guests in terms of the average consumer not being aware of this. I think that's definitely true. But particularly because the install functionality on Safari is so hidden; you have to hit the Share button, and scroll down, Add to Home screen... It's very easy not to know that exists. I also think it doesn't matter whether the average consumer knows about it. All that's important is whether they're being harmed by it. That's what needs to be shown to regulators. Like, maybe one example you could think of is imagine we've got a factory that's pumping a bunch of pollution into a river. Most consumers don't know they're doing it, they don't know they've got slightly higher cancer risks, or whatever it's causing... Now, one option is you get a bunch of consumers along and they all boycott anything that factory is selling... You might be able to get that to work, but it's sort of complicated. You need experts, you need testing. Or you could have a regulator come in, test the water, fine the hell out of the factory and shut it down. You've got to think which one will be more effective.

**Amal Hussein:** Yeah, no, that's fair.

**Alex Moore:** So in terms of what we as developers can do... I mean, I think the time for just putting up with gatekeepers' anti-competitive behavior needs to come to an end. The sort of "Please sir, can I have some more features?" I mean, we just need to put a stop to it, and then loudly campaign for basically equality; equality in browser competition, and equality in web apps.

\[01:52:09.19\] And we shouldn't stop until we get that in every jurisdiction across the planet. And the thing is, the web's a global ecosystem. If we don't have it uniform across all the different jurisdictions, then its ability to compete with these locked, walled garden ecosystems is severely limited.

**Amal Hussein:** Yeah, so well said... And that's a good pivot to just say "Okay, well, what can we do to help you all?" We didn't get to talk too much about the backstory in terms of OWA's kind of organizational like structure, but essentially, you all were volunteering and doing all this stuff in addition to your regular day jobs. And then in the past year or two, I can't remember, and -- when I say "you", it's Alex and James, who are here on the podcast today, are two people that have been working on this full-time, just because it took up that much energy to kind of do all this work with regulators... And we are so thankful, we are so thankful for that. Really, we had Alex Russell on the show, and he said that the work that you all were doing is orders of magnitude just like some of the most important work that's happening on the web... And I would agree with him on that. You're working on the upstream, upstream, upstream problem that has like this huge ripple effect downstream. And I'm very emotional even just really trying to think of how important this work is... Because ultimately, it just comes down to impacting the health of the web, consumer choice, people's ability to not be limited by gatekeepy app stores when trying to ship products... Ultimately, it ties into just like freedom of speech, freedom of expression, freedom of all kinds of things. And so we need to be able to keep a healthy and open web, despite being on these closed ecosystems in terms of platforms. So just really, thank you all so, so much for the work that you're doing. So how can we help? What do you need from people, from -- how can people get involved? What can people do?

**Alex Moore:** Thank you, that's very kind. And obviously, we believe the same. We obviously thought that this isn't just the future of apps; we believed it was the future of all apps and the ecosystem, and the future of the web. And we thought if we didn't organize and get a group together to do something, that we would just lose that future forever. So that's the reason we invested so much time and effort in this particular advocacy work.

In terms of what people can do to help - I mean, there's a lot of stuff. We run a group on Discord, where most of us hang out every day. We need people to help push the message, helping individual countries, we've got engineering work that needs done... So people can volunteer time for helping go to the website, or setting up mailing lists... In fact, the open letter was about 10 people working around the clock just to get that up for three days, as an example of some fantastic volunteer work that's going on.

If you don't have time to donate in volunteering, we also need donations as well, because we do have a lot of costs... Obviously, James and I work full-time on this, and we keep our servers running, we have to fly out to meet regulators, and regulatory conferences, that kind of thing...

And I suppose the other thing people can do is sort of help amplify the message, help build pressure to get these problems fixed.

**Amal Hussein:** So write about it, right?

**Alex Moore:** Yeah, writing about it...

**Amal Hussein:** Educate people about it. Educate your leadership; your engineering leadership should know about these things, if they don't already, right?

**Alex Moore:** That's really important, making sure everybody knows about it, and everyone thinks it's a critical issue and it's really important.

**James Moore:** \[01:56:14.10\] And an issue that can be solved. And not just going "Oh, it's Apple. It's Google." We can fix this.

**Alex Moore:** And obviously, if your company is deeply invested in the web, and they don't have a conflict of interest with the stuff that we're doing, obviously we'd love to get donations from corporate entities as well. Other aspects would be in terms of if there's any of the listeners who have contacts in government or regulatory circles, in any country on the world, but especially the ones we're not currently working in, it'd be great to get in contact with you. Just reach out, either via email or Discord. And then hopefully, we can start spreading this jurisdiction by jurisdiction, with the aim of having a sort of global uniform browser and web app competition.

**Amal Hussein:** I couldn't agree with you more. So everyone, donate your time, money, expertise, put a mic on this issue... And when I said engineering leadership, I always think of product and design, and that circle, because there's no engineering without product and design. It's a triangle. So talk to your product owners and your designers about this, too. Everyone who's building for the web should know about this thing. And it's not because people don't care, it's just people just don't know. So help us spread the message. What's really cool is that y'all got a grant from Jack Dorsey's foundation, of all things... A $500,000 grant, which allowed you both to work on it full-time. But it's technically not forever, right?

**Alex Moore:** No... Also, the amount of work that OWA's involved is just so absurd, it'd be nice to get more people full-time as well. I mean, we could not have done it without the volunteers, but obviously, everyone's got day jobs; they're limited in the amount of time they can volunteer. If we were able to raise more money, maybe we could get more people full-time on it as well.

**Amal Hussein:** Right. So basically, the call here is if you could even help this organization raise money, write grants, get your company to write a big, fat check, whatever. This is important stuff, and so please, please support. I just want to thank you both so much for your time today. This has been really, deeply educational, and there's just a lot of just incredible context that you all set... And before we started the show, I told James and Alex like "Okay, the only rule is you have to explain everything like we're five, okay? We are developers, this is not the world that we live in, or think about..." And I was just really worried that they were going to be on like level 10, while like the rest of us plebs were like level two, three... So I just want to say thank you for slowing it down, thank you for setting the context.

I'm going to throw the last question at you, James... But it's not really a question, it's more like a troll question, like in the sense that -- I did want to talk about this on the show... It didn't really fit into any of the other parts, but I'm gonna toss this in. For folks who are like "Ah, this is just pushing Google's agenda for the web. PWA is just Google. Google's just trying to -- ugh!" So what do you say to that, James?

**James Moore:** \[01:59:32.05\] I would say what we want to get to is what we were talking about earlier, which is where browsers compete on merit. Consumers choose a particular browser because it offers the best features, the best stability, security, privacy, and we want to get to a situation where that is how browsers are gaining market share. Not through control of an operating system, or a search engine, or anything like that. Not for using one platform to get to other. For merit. And that's what we want to get to.

And we don't care which gatekeeper is doing the anti-competitive behavior. We've got a big list, we're working our way down it, and we will try and eliminate each of these types of ways that browser competition or web app competition's undermined. Google's on the list for a couple of the behaviors. They're not at the top of the list, but they are on the list, and we're just going to work down the list.

**Amal Hussein:** Amen to that. You're just gonna like Hungry Hippo Pac Man it away, you know? So thank you both. So where can folks connect with you online if they want to reach you? So there's the Discord server that we'll link to in the show notes... And besides that, what are your socials, and all of that?

**Alex Moore:** So we're on Twitter, @openwebadvocacy on Twitter, we're on Mastodon... It's all on our website. So go to open-web-advocacy.org. There's a list of links, but it's basically X, Mastodon, Twitter, Discord...

**James Moore:** LinkedIn...

**Alex Moore:** ...and LinkedIn that are our main channels at the moment. And we hope to get a mailing list properly set up sometime soon.

**Amal Hussein:** Yeah. Maybe somebody listening to this show can help with that, right? Seriously. And you check your emails, right? So if people write you an email that's like "Dear Sir or Madam..."

**Alex Moore:** Yeah, we check our email.

**Amal Hussein:** Okay, good. Excellent. Alright. Well, lots of links are gonna be in the show notes, everyone. This was a super-long show. I think this our record longest show, and... You know what, I'm so happy that this has the title... Before this it was a show that we did on React Server Components with Dan Abramov, who was like a professor just kind of like professing for two hours... And it was brilliant. And this now just tops it. So congratulations, you've made JS Party web history, Alex and James. With that said, thank you again. We'll see you all next week, everyone. Cheers!

**James Moore:** Thank you. See you!
