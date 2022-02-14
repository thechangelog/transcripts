**Jerod Santo:** Hello, friends. It's time once again for a JS Party. I'm Jerod, and I'm here to host a debate. This is our Yep/Nope format, wherein we come up with a premise, we team up, and we debate either side of that premise; whether or not we actually believe in the side that we're assigned we'll find out later.

I'm joined by four friends. Let's just get through it real quick - we've got Nick, Amal, Divya and Feross with us. What's up, everybody?

**Nick Nisi:** Hoy-hoy!

**Amal Hussein:** Hey, everybody.

**Feross Aboukhadijeh:** What's going on?

**Divya:** Helloooooo...

**Jerod Santo:** And our teams will be Divya and Feross versus Amal and Nick. Are you all ready?

**Divya:** Let's do it...!

**Jerod Santo:** Do we want any smack talk to get started, or announce how you're about to dominate, or anything like that?

**Divya:** \[laughs\] Like in WWE?

**Jerod Santo:** Yeah.

**Divya:** "Take you DOWN!!" I don't know what they say. Well, I used to watch it actually a lot, strangely...

**Jerod Santo:** Or do we just do a staredown like at a weigh-in for MMA, or something, where you just stare at each other. Oh, Nick's staring us down. It doesn't make for very good podcasting, so I'll move on...

The premise for today's debate is one that is debated online and in the industry sometimes, which is that web apps are fundamentally different than websites. So we will have one team representing the Yep, which is agreeing that web apps are fundamentally different than websites, and that will be team Amal. And then we'll have team Divya representing the Nope side of the debate, which argues that web apps are not fundamentally different than websites.

So two minutes on the board... We do this semi-formal. We don't get totally dressed up; we get dressed up a little bit... \[crickets\] That was a failed attempt at a semi-formal dance joke; I'm not sure if nobody got it, or if it just wasn't very funny... Oh well.

We set some timers... So there'll be a two-minute timer for you to make your case. If you run out of time, you'll hear this sound \[alert 00:04:37.01\] and your time will be up. If you run short, that's totally cool as well; just go ahead and concede the rest of your time... And we'll go back and forth.

So we'll have the Yeps first, team Amal, two minutes on the board. Who's going first for team Amal? Is it Amal or Nick?

**Amal Hussein:** I say gentlemen first, so...

**Jerod Santo:** Okay, reverse chivalry. Appreciate it. \[laughs\]

**Amal Hussein:** Yeah, I know...

**Jerod Santo:** Alright, Nick, you're on the board for two minutes.

**Amal Hussein:** I was gonna make a really bad joke about how, you know, men actually run the world anyway, so "Oh, well..." \[laughs\] Just kidding...

**Divya:** Amal dropping truth bombs... \[laughter\]

**Jerod Santo:** I like how Amal introduces her jokes by saying she was gonna make the joke, and then she makes it anyways... Kind of in a reverse, kind of a sneaky joke there... Alright.

**Amal Hussein:** It's a joke, not.

**Jerod Santo:** Nick, you're running the world. I'm running the clock. Two minutes on the board. Here we go, Nick.

**Nick Nisi:** Alright. Web apps are fundamentally different than websites. Now, my opponents here are probably going to say that to an end user it probably is no different, because you're just hitting them from a browser, you're going to a URL, and you're using whatever is there... And I'm going to say that I disagree with that, because they are fundamentally different. And when you look at it from the perspective of actually building them, they're really fundamentally different, or they can be fundamentally different.

But first, I'll start by trying to define what each one is, and I'll just say quickly that a website is informational, it's defined by its content, and it can be minimal on scripting, although that doesn't necessarily have to be the case. The content is typically static. In a web app, it's defined by its interaction with the user, so it's more "What can the user do with this?" and it definitely expects interaction, which means it probably has scripting on the heavier side, so a lot of JavaScript, a lot of other scripting languages in there, potentially, doing things.

So I think that they are fundamentally different, just in that definition, because a web app is something that you're going to interact with, and a website is going to be something that you're just going to look at and consume the data. Some examples of that is -- I think that GitHub is a really good website to look at my code, and to see what's going on there, and to do a little bit of minimal interaction. I can press a button to do a pull request, as long as everything is green, and I can't really change things, like resolve conflicts or anything, because it's just a website that's giving me a lot of information and letting me interact with it in a minimal way. But if I wanna go in and change my code, I'm going to load the Codespaces web app and use that to change my code. Or Vim, if I wanna actually be productive. \[laughter\]

Another example would be like I wanna look at pretty web design... \[alert\] Oh, alright.

**Jerod Santo:** Sorry, Nick, you wasted all your time doing Vim drops... \[laughter\] Which is time well-spent, I will say.

**Amal Hussein:** Great job, teammate, though...

**Jerod Santo:** Okay, so team Divya, you now have two minutes to respond. You can also just ignore everything Nick said and just state your case; however you wanna do it. Who's gonna go first for team Divya?

**Divya:** I can go.

**Jerod Santo:** Alright. Divya, you've got two minutes on the board. It's all yours, go ahead.

**Divya:** Alright, so websites and web applications are not fundamentally different, but I will make the argument that at one point in time the reason why there seems to be this artificial difference is because in the beginning websites or the way we see websites and web properties was static, in the sense that you had to SSH into your server, you had to FTP your content, everything was static, mostly HTML. But then in the early 2000's we saw full-stack frameworks coming to the fore, mainly LAMP stack and so on, and these were web applications in the sense that they were not static, they were not just plain HTML files; they were actual PHP running on a server, you needed Apache, and so on.

But as time moved on and as web development developed, we saw this shift where now we have software as a service, where there's hosted platforms that allow you to do things that were not possible before. And what I mean by that is that the traditional sense of the website and the traditional sense of web app no longer exists. The difference between them is fairly -- well, non-existent in this point... Because now whatever you can do with regards to this static versus dynamic is not really a dichotomy that you can talk about.

For example, Nick brought up this idea that there's minimal user interaction on a static site. Well, there actually is a lot of user interaction that you can include, because you have things like hosted databases that you can make calls to, sites can start static and then you can build up APIs using -- there's so many microservices, there's a whole API economy that allows you to do things. So you could have something super-dynamic, like a Shopify site, that is completely end-to-end. And therefore, websites and web applications are not very different. Feross, did you wanna add...?

**Jerod Santo:** Ten seconds.

**Feross Aboukhadijeh:** Okay, ten seconds, really? \[laughter\] I'll just give back the time and I'll take the ten seconds in the second part. \[alert\] Is that legal...?

**Jerod Santo:** Alright, fair enough. Yeah, we'll get you an extra ten on the next time.

**Feross Aboukhadijeh:** Alright.

**Jerod Santo:** Alright, that was Divya's turn. And of course, as your moderator, I'm here to provide real-time fact-checking... Nick asserted that you cannot perform merge conflicts - or you cannot fix merge conflicts on github.com. Fact-check - false. You can actually do that. Okay...

**Nick Nisi:** We can.

**Amal Hussein:** Limited. You can do limited merge conflict fixes now. Some things they still make you \[unintelligible 00:10:04.03\]

**Jerod Santo:** You can do limited--

**Amal Hussein:** Really?

**Jerod Santo:** Well, I don't know how fancy they're gonna get...

**Amal Hussein:** Limited, yeah. I think it's limited. But anyways...

**Jerod Santo:** Okay...

**Nick Nisi:** If there's a conflict--

**Jerod Santo:** But Nick did not say it, so you're fact-checking my fact-check, or what's going on here? \[laughter\]

**Nick Nisi:** \[unintelligible 00:10:17.08\]

**Jerod Santo:** Oh yeah, there's definitely a merge conflict resolution UI...

**Amal Hussein:** There is, there is...

**Jerod Santo:** I don't know how limited it is, because apparently my merge conflicts are all relatively simple, because I'm so basic...

**Nick Nisi:** When did GitHub become a web app? \[laughter\]

**Jerod Santo:** Alright, let's get back onto the board. We're going now back to team Amal, and to Amal herself, the chivalrous one... Amal, you get one minute to respond, because that's less time than the other people got; I don't know, it doesn't explain why, but go ahead. You've got one minute.

**Amal Hussein:** Sure. So I'd like to say that I'm gonna take a different approach with my one-minute, which is just like fundamentally assert that the web has evolved, and that websites and web apps are terms used to, I think, distinguish the level of complexity and expected interaction for users.

If I'm interacting on a website, I'm really expecting a more static experience; something that's typically a read. And when I'm interacting with web apps, there's a context shift there. There's a lot of read/write behavior. And I think it's really important for us as web developers to push the term of web app, because users have native apps on their phone, and we have progressive web apps that essentially are allowing web apps to compete with native apps in their domain... So users essentially can't distinguish sometimes between "Is this button launching a browser that's full-screen, or is this launching a native app?" \[alert\] Yes, that's it.

**Jerod Santo:** Okay.

**Amal Hussein:** I'll continue the rest of my argument later.

**Jerod Santo:** Good job, Amal. We'll go now to Feross. One minute and ten seconds to respond.

**Feross Aboukhadijeh:** Yeah, so we're talking about whether websites and web apps are different from each other, and I'll concede right away that obviously there are different types of websites; there's static blogs on one end, static sites that are basic HTML... And then on the other end there's things like full graphic editors, like Figma, and there's 3D multiplayer games... So there's obviously a huge range of different types of websites.

The other side is arguing that there are differences in the types of websites that you can build, and that obviously makes sense. Our side will totally concede that. But at the end of the day, these are all just websites. The web is extremely capable and amazing. It can do all kinds of types of experiences; but fundamentally, we're dealing with the same web technology. You know, a user visits a URL, the server sends some HTML, the browser displays it, it runs some scripts, and all this stuff is running inside of the same thing, it's running inside of a web browser. All the same browser features work - the Back button, the Forward button, the Refresh button, the bookmarks, the history, your browser extensions, you can copy and paste URLs and share websites to other people...

So you know, if we were debating whether native apps and web apps are different, I would agree; but come on, we're talking about websites here. All these different types of things are websites. Just ask the W3C, or WATWG, or TC39 - they're all working on one set of standards for websites. They're not making a separate set of standards for other websites. So by this appeal to authority, you should see that we're talking about the same thing here. Not to mention the other side has already been fact-checked and proven wrong, so... Take that into account. \[laughter\]

**Jerod Santo:** Alright, real-time fact-check here... Feross stated that the Back button always works; fact-check - false... \[laughter\]

**Divya:** Oh, my God... No, it usually works, unless it's been tampered with. I think it's a fair point.

**Nick Nisi:** I was gonna argue that that's a key feature of a web app, is you don't have all of that built-in functionality working...

**Jerod Santo:** With that fact, we will take a break and we'll begin round two right after this.

**Break:** \[14:05\]

**Jerod Santo:** Round two of Yep/Nope. We are debating "Are web apps and websites fundamentally different? Yep? Nope?" We're here to find out. Divya, it is now your turn. You have two minutes to state a case or refute something that your opponent said. Go ahead.

**Divya:** Thank you for the floor. As Feross mentioned, I'd like to just build upon his case, which is a lot of the times when we talk about this artificial difference between websites and web applications, we actually mean the same thing, because we're talking about browsers, and browser technology, and how exactly these assets are viewed by users. And I know Amal had mentioned that the end user experience doesn't matter so much, and we should focus on the building of it as a whole... But I think it should account as a whole, because ultimately, when you look at websites, and maybe if you wanna call it web applications - which is basically a website - ultimately it's about how you build it, as well as how it's perceived from an end user's perspective.

What I've focused on so far is the building of a website and a web app - same thing, again. The idea that you can build a fully-functional, dynamic website using a lot of technologies without you having to artificially call it an application. So this difference between static and dynamic is kind of artificial. If anything, it's a range, as Feross had mentioned. Websites can range from something incredibly static, to something incredibly dynamic, like doing merge conflicts on GitHub, which is possible... And that is something that we should take into consideration.

And from a user's perspective, they also don't see that difference as a whole, because in addition to being able to see content directly, they can also interact directly with a website; to them, it's unperceivable, the difference. And of course, they would not know the terminology and the differences between them, but I think it matters to talk about and to focus on as well.

I think the other thing to talk about also is just how websites are served. We often talk about websites as static, where it's on a CDN, and web apps as something that are on servers. And the thing is that artificial difference makes sense when we think of static sites, and CDNs as hosting static properties. However, with the movement of edge computing, CDNs are getting more powerful. You can run a lot of logic at a CDN level. So when websites and web apps - that artificial difference is sort of removed completely, because you can make something incredibly static have logic, like redirects, for instance, where you can route a user from asset to another. \[alert\]

**Jerod Santo:** Very good.

**Divya:** That is all.

**Jerod Santo:** Okay. Amal, we pitch to you. Two minutes to respond.

**Amal Hussein:** Well, the only thing about that argument that was made that made sense to me was when she said the lines that web apps and websites - it makes sense for them to be distinguished as differently, so I just wanted to say thanks for agreeing with our argument in one line, Divya... \[laughter\]

**Divya:** I think that was taken out of context.

**Amal Hussein:** Yeah, whatever, anyways... Case in point--

**Divya:** What's the fallacy? \[laughter\]

**Amal Hussein:** Okay... \[laughs\]

**Jerod Santo:** It's the "Whatever..."

**Amal Hussein:** So I think it's really important for us to start educating users around the scale of the web, especially as users are accessing the web through mobile devices, understanding that a site, a simple kind of bulletin board for the web is really different than building a complex, interactive experience, with a lot of read/write, a lot of data usage, potentially more assets to download upfront... So I think it's important for us to start making the web more accessible in terms of its ability to have scales and tiers... And I think we all fundamentally agree that a web app is certainly an evolution of good old-fashioned websites... But they are absolutely not the same, and nor do they take the same level of skill to build, or create, or maintain.

I think tossing something up on WordPress as a static site is not the same level of effort as building a WASM game engine in the browser. So you have fundamentally different skills needed to perform the work, and therefore that alone for me just speaks to why they are fundamentally different things.

**Jerod Santo:** Yup, very good. Time's pretty much up, so we'll pass it now to Feross and give you, Feross, one minute to respond. Go ahead.

**Feross Aboukhadijeh:** So I'd like to remind everyone, the premise that we're debating here is that web apps are fundamentally different than websites... And I'll just focus on the word there "fundamental". That web apps are fundamentally different than websites. What we've heard from the other side is an argument that web apps and websites are kind of different; they've argued that web apps and websites are built a bit differently, that they're an evolution, and that users may perceive a bit of a difference in the degree to which a website versus a web app is dynamic, and you know, the degree to which the Back button may or may not work. But fundamentally here, the argument is about whether web apps are fundamentally different than websites.

And I think if we were debating the difference between websites and native apps, there would be a very fundamental difference there. But since we're talking about an issue of degree here - you know, a website can be a little bit more appy, or a little bit less appy - I'd argue that really, the difference between websites and web apps is really not that great, and it's certainly not great enough to rise to the level of describing it as fundamentally different. \[alert\] So for that reason, I urge you to support our side.

**Jerod Santo:** Okay, very good. Nick, the final word of this segment. You've got one minute.

**Nick Nisi:** Alright, so I'll just respond to both of my opponents real quick, and I'll say that in Divya's argument she talked about being able to do more at the CDN level, which stands for Content Delivery Network, Content being the key word there; so you're delivering content to consume... So therefore you're thinking more of websites. Whereas web apps would be more -- I lost where I was going with that thread, so let's just go to Feross...

**Amal Hussein:** The compute would happen somewhere else, typically a server. \[laughter\]

**Jerod Santo:** Phone a friends... Thanks, Amal. \[laughter\] Go on.

**Nick Nisi:** And Feross, you were talking about maybe if we were comparing web apps to native apps, for example... And I would say that with the underlying APIs that you get natively, like battery, and geolocation, and compass, and all of these, and with things like service workers, where can you draw the line between what's a native app and a web app? You can install them just like you would a regular app... It's just the underlying technology that they're built in. But they are applications, and... \[alert\] Saved by the bell.

**Jerod Santo:** Saved by the bell there... \[laughter\] We've now reached the conclusion of our semi-formal debate... I've been keeping score the entire time, and I'm not ready to claim the victor...

**Divya:** We won, clearly...

**Amal Hussein:** How does this algorithm work? Tell us.

**Nick Nisi:** He has a web application to do that...

**Amal Hussein:** Oh yeah, that makes sense.

**Jerod Santo:** And the winner of this debate is me, because the only way to win is by not participating. And I'm the only one here who did not actually play, so... I win. congratulations to me. After this break we're gonna come back and we're gonna peel back the veil; we're gonna talk about what our participants actually believe, maybe get into a real-world debate around the nuances here... Because there's no nuance in that premise, but there's a lot of nuance in this discussion. So we'll return and we will see what everybody really thinks right after this.

**Break:** \[25:10\]

**Jerod Santo:** Okay, so let's talk about what we really think about this. The premise was web apps and websites are fundamentally different, and that's worded in such a way that it is defensible from either side. I think Feross keyed in on the word "fundamental", which I thought was the strong argument myself, even though he still lost at the end of the day, but... \[laughter\] Remember, I was the only one that won, so... Sorry, but you participated, which was foolish. But what do you all really think? Do you make distinguishments? Are they different but not fundamentally different? If we can just relax and chat, what do you all really think about this?

**Divya:** I felt like there was -- the PWA argument was a good one, because it is the weird divide... In a way, I think there was two sets of arguments. It was the websites/web apps - actually, the part that was hardly talked about was the... Well, we talked about it a lot. It was that websites and web apps, the full-stack, versus JAMstack maybe is the term... And then there was the argument, which was like mobile and web merging... Which I thought that one was more nuanced. Because the first argument was like "It's very clear that we're moving away from this website/web app thing." But I felt like with mobile, and this idea of cross-platform, where it's like React Native, there's -- I guess NativeScript is still a thing, Ionic... And I guess Flutter is also really exciting for a lot of developers; or Flutter is unique... Actually, everything else is unique, except for React Native... Because React Native is building on a framework that developers already know. So if you're building websites (well, React apps), you would be able to build something hybrid. And there's a lot of other framework, like Nuxt, and Next, and they do kind of this idea of universal apps... But yeah, I thought that was a good argument, honestly. Just saying. Even though I still disagree... \[laughs\]

**Feross Aboukhadijeh:** I think the focus on how the technologies that are involved in building websites vs. web apps - that's one way of looking at the argument. I was looking at it more from like "What is the user experience like for the end user?" And I think that when you tell people about a website, you say "Hey, have you seen this app, or have you seen this site?" the main differentiating line that they think about in their mind is whether it's a website or it's an app... And an app meaning like a native app that they'll search for in their app store.

So I've built sites before where people are searching for it in the app store, and they're like "I can't find your app", and it's like "Well, it's because it's a website. It's not an app, yet. So go to Safari and search for it there and you'll find it."

But from a user perspective, I actually agree with the side that I was assigned to... Because I don't think users are really thinking about, when they go to Safari or whatever browser on their phone, and they're going to some kind of website, they're not really thinking about whether it's an app or it's a website. It's just that they're in the web browser.

I don't know how you distinguish there for the user, because before we even had the concept of a web app, there were for example e-commerce sites that implemented things like shopping carts, where there was state on the server, and you're adding things to your card, and you're adjusting the quantity, and you're checking out, and you're doing all this very stateful stuff... And nowadays a site or an app like that would be built with more of the web appy technologies, like React or something, and you would very clearly argue "Oh, that's obviously an app, because it's using all this client-side stuff, and all this fancy routing, and all this really complicated machinery to do it... But we had that kind of stuff in the '90s, too. And back in the '90s, I think that would have been called a website, for sure, because it was just like a website with a PHP server on the backend doing some stateful things. So it's all very mixed up, and I don't think users really think about the difference. So if we're looking at it from the user perspective, then I think it's really the same.

**Jerod Santo:** To add to that... So when I think about a quintessential web app, maybe the first (at least for me) major web app was Gmail. As an informed user, I was like "This seems fundamentally different than other things." But it was still in my browser. And as less informed users, as maybe more mainstream users, I know that for instance my parents are on Gmail, and when I talk to them about their email, I'll tell them certain configurations, like blacklist, or whatever you're gonna do - those can only be done via the web, versus inside their mail app that's connected to Gmail. Their differentiation is "Is it in my mail app, or is it on the web?" And I'll tell them "Go to the web interface to do that", and to them there's no differentiation. If it's on the web, it's a website thing. And if it's in an app, it's an app thing. So I think that is an anecdotal piece of evidence around the concept that end users are like "Is it in a web browser or not?" And that's probably where they think about it. Or maybe the other way around - is it in an app or not? Which I think PWAs do kind of start to change that calculus a little bit... Because if you find it in the app store and you install it onto your phone, and it is a website that's being wrapped and doing fancy things, now it's different than a website.

**Divya:** Yeah, it's interesting to think about it that way, because a lot of native apps -- I know Facebook has their own browser thing that they're working on, and it's just like... It's an app, kind of, but it's an in-app browser window. So users are still interacting with the website, so to speak, but they see it in the app shell... So from that perspective it seems different.

**Amal Hussein:** I feel like maybe instead of developing their own browser, or browser extension, or whatever, maybe Facebook should just give all of their users cameras to put in their house... It would be easier to keep track of users.

**Nick Nisi:** It's called a portal. \[laughter\]

**Amal Hussein:** A portal, yeah. They already did that. \[laughter\] Alright, I'll stop the Facebook \[unintelligible 00:32:27.22\]

**Divya:** Amal is on fire...

**Amal Hussein:** No, it's fine, it's fine. Whatever. User privacy is important, but not to social media companies, so...

**Nick Nisi:** That was actually gonna be one of my arguments for the distinction between the two... A web app is something that you're going to use to do something for you, and a website is going to be something that is spying on you for their benefit. It's a bad argument... \[laughter\]

**Amal Hussein:** Yeah... So for me, this is super-nuanced, because I think it's very important that we continue to blur the lines between native desktop apps or native mobile apps and web apps, mainly because the web is definitely the better platform for users, because it's open, but it's also -- it's gotta get better; it's gotta get better for small screens, it's gotta get better for other ephemeral interactions...

**Jerod Santo:** I think it definitely does have to get better, and I think when we think about the difference between the two -- I think developers obviously talk about these things more often. Fundamentally, are they different? I don't think they're different, because - Feross' argument is strong; the technical ways that they're delivered and executed - it's all the same technology, it's all the same platform, so they aren't fundamentally different...

But what if we change that to "It's useful to distinguish." Because I think when we get to the side of somebody who's building one of these things, I think that's where we start to consider them different. Like, what am I building and how am I trying to build it? What's it going to be? Does that change the technologies that I select? Does that change the decisions that I make? And I think at that point maybe you can say fundamentally, but at least there is a distinguishment that says "I'm building a rich in-browser experience which is gonna be app-like, and I can probably enumerate what app-like means... And therefore I'm gonna pick this technology stack, or these particular ways of building it, or this architecture, in order to make that the best thing it can be..." Versus "What I'm really making over here is a content-first publishing website, and so I might reach for different technologies." I think that's where it starts to become more of a useful way of thinking about things... Or do you guys think that even that is not worth distinguishing?

**Feross Aboukhadijeh:** I mean, everybody's building their websites like web apps these days. A lot of people are just using the same tools for everything, so... But I agree, that is a more useful place to distinguish between the two, when you're thinking from a developer's perspective, like "How should I build this?" There's definitely different decisions that you can make there.

**Jerod Santo:** I think GitHub's such a fascinating case, because it really was a thing that moved from kind of website-looking things to actually some pretty rich interactions now... Although they've kept -- they're not a single-page app. They didn't come out and say "We are an app." It was a place to host your code. And of course, there's tons of stuff that makes that possible, which is very app-like. But the interface was very much like, you know, search for a thing, read a thing, find a thing, write, comment... These are very basic interactions, but over time it's gotten more and more rich... And they really have blurred the lines between the two.

**Divya:** Web 2.0...! The rise of user interactivity.

**Jerod Santo:** Yup.

**Divya:** Honestly, it's the same if you look at websites that were just like purely one way, where it's like a user didn't really interact; they kind of hyperlinked. It was just like hyperlinks to different things, and everything was static... And now a lot of sites are very interactive; you have things like sockets and WebRTC that allows people to communicate with each other on a single browser tab session... Which I think is really cool and powerful. So the line is blurred, definitely, but yeah, I think there's something to be said about from a user's perspective they might see the difference.

Actually, I think a really interesting argument that we can have later, like another Yep/Nope, is websites are \[unintelligible 00:36:17.21\] web apps, just to troll this argument further...

**Jerod Santo:** \[laughs\] There you go.

**Divya:** Write it down.

**Jerod Santo:** Write it down. Future premise. Oh, by the way, if you're out there listening, we do take episode requests. So if there's a specific Yep/Nope premise that you want debated, we are happy to take that up, we're happy to invite guests and other people to debate these topics, not just us regular panelists... To do that, all you have to do is head to changelog.com/request, select JS Party in the dropdown, drop a topic, drop a guest, you can pick your panelists... We know we've had specific panelists requested for specific topics; we're cool with that, too... So just a shout-out out there - if you're listening and you want to hear more debates like this, with premises that you come up with, please do drop us a note. We would love to hear from you.

Okay, final thoughts before we call it a day. This was a lot of fun... I always enjoy the argumentation, whether or not I agree or disagree, and I always enjoy declaring myself the winner. Nick, you've been quiet recently. Do you have any thoughts on the distinguishments, the usefulness, and what you really believe in this context?

**Nick Nisi:** Yeah, coming back to what Feross was saying about how everything is being built as a web app nowadays - that's totally true. My blog, that I really haven't posted on since 2015 - I just redid it with Eleventy, and it's all JavaScript... But at the end of the day it's no JavaScript at all running on the page. So it feels like an app that I'm working on, but it's served like a site. And to an end user, I don't think that there's any difference. I think that's the most important takeaway.

**Amal Hussein:** I have to say, to that point, Nick... People who can write or build web apps - we tend to kind of over-engineer everything. So you don't need React running your blog, for example, or even an npm dependency toolchain, for example. Obviously, you can do whatever you want; you're an engineer, you can do it. But I think it's important for us to really think about the future of the web, and for me, the future of the web needs to include more web authors and content creators, and what does that world look like. And not just like folks posting content through social media platforms like TikTok. You see the engagement level there for people who are interested in putting things out there onto the web... But I think it would be nice for people to be able to put content onto the open web without that intermediary. And for that, we're gonna need to have a more distinct, simpler, more accessible class of tools than -- you know, \[unintelligible 00:38:54.02\] That's actually really why I think the distinguishment between sites and apps can help define those boundaries for people on the other side of the spectrum.

**Nick Nisi:** Maybe if we can quantify the level of over-engineering that's going into something, we can distinguish it on a scale between website and web app...

**Jerod Santo:** And maybe we can do it on page size... Like, if it's 3 MB of JavaScript bundle, then it's a web app, right? \[laughter\]

**Nick Nisi:** But if it's 10 MB of images, then it's a website.

**Jerod Santo:** There you go... \[laughs\]

**Amal Hussein:** Totally fair argument.

**Divya:** I also think there's something to be said about the terminology. You know how web developer and software engineer - people choose whichever to use depending on how they want to be perceived... For example - I'll just give you my biased opinion... Which is whenever I tell people I'm a web developer, it's not as cool as saying I'm a software engineer. Because "I'm a software engineer" holds a lot of gravity. And also, in certain countries you're not allowed to say you're a software engineer without an actual degree. So there's this distinction. Which I imagine it's the same with websites and web apps to some extent, where it's not as cool when I say I'm working on a website. But when I say I'm working on a web app, people are like "That's awesome! What are you using?" But when it's website, it's like "Oh, it's just HTML and CSS. Whatever."

**Jerod Santo:** Right.

**Nick Nisi:** Divya's on Geocities again.

**Jerod Santo:** Right. Kinda, like, demeaning. Let me go on record and say "Websites are cool. Websites are cool." Come on, people.

**Feross Aboukhadijeh:** Yeah. What about the term "programmer?" Do any of you call yourselves programmers?

**Amal Hussein:** I call myself a brogrammer.

**Jerod Santo:** A brogrammer... \[laughter\] That's appropriation. \[laughter\]

**Divya:** Take it \[unintelligible 00:40:36.12\]

**Jerod Santo:** Yeah. "Don't steal my culture...!"

**Amal Hussein:** Yeah. That is total appropriation... \[laughter\]

**Jerod Santo:** It's funny. I've been around long enough to see the transition, and I know a lot of people actually take offense to certain -- I've seen blog posts like "Do not call me a coder", because they think coder is belittling... They're like "Don't call me a coder, call me a programmer. Don't call me a programmer, call me a developer. Don't call me a developer, call me an engineer. Oh, actually I'm an architect." I feel like we kind of get caught up on these things. And because each of us does view the world through a different lens, these words have different connotations.

I don't take it as speaking down to me to call me a developer versus an engineer. I couldn't care less. But I can see where for Divya, especially if it has to do with certain job opportunities or whatever, her context is "Engineer is more uplifting", and she'd rather be called that. So it's weird, because we all kind of just have our own ways of defining it in our heads what the words mean.

**Amal Hussein:** Yeah. I think that's a really interesting topic for a debate though, these words. I remember Silicon Valley, that show on HBO - I remember getting so distinctly annoyed every time I heard the word "coder." Because I was like -- I do personally feel like coder just belittles the craft a little.

**Jerod Santo:** Hm. What if coding was the craft?

**Amal Hussein:** Yeah, but this is completely subjective.

**Jerod Santo:** Right, that's why it's interesting, because we all bring our own contextual baggage to the words, and then we interpret them according to us... And I used to write for a blog called Fuel Your Coding, and I thought it was totally cool. Then I read somebody else saying what you've just said, like "Coding is not cool." And I'm like "Well, I thought it was cool..." But I think maybe coding attaches to the code monkey term, which is incredibly belittling... That whole "Just go grab a ticket and write the code." That makes us seem like we are not all that we are. So I understand that maybe there's an attachment there, but... It's a fascinating linguistics problem.

**Amal Hussein:** Yeah.

**Feross Aboukhadijeh:** Yeah... For some reason, I just feel like programmer is the most pure term. A person who makes programs. It doesn't have the baggage of coder... Software engineer feels a little bit grasping to me... In the same way that the term "computer science" is also grasping. It's like, "Oh, we've got to add the word science to make it seem real legit."

**Jerod Santo:** \[laughs\] Yeah... Please respect us.

**Feross Aboukhadijeh:** Yeah, yeah.

**Amal Hussein:** Oh, computer science?

**Jerod Santo:** Science.

**Feross Aboukhadijeh:** Yeah. Because you're adding the word science at the end. It's like, "Oh, the science of computers", when really it could just be called computation, or...

**Jerod Santo:** Computation... \[laughter\] I teach computation. I like that.

**Feross Aboukhadijeh:** Well, it's not about the physical computer hardware. You wouldn't call -- I'm trying to think of a good example... You wouldn't call -- it's weird to call an entire field, like name it based on the tool that you use, the physical tool that you use.

**Amal Hussein:** Oh, I see. Yeah.

**Feross Aboukhadijeh:** Really, what we're doing is more abstract.

**Amal Hussein:** Yeah. \[unintelligible 00:43:37.18\]

**Feross Aboukhadijeh:** Yeah, exactly. It's not like microscope science.

**Divya:** I think it's the same with like when you see people having degrees, and there's some countries where they call computer science "informatics". And then when you see that, you're like "Oh, they're not really a computer scientist", and you're like "We're studying the same thing!" Informatics is the study of computational systems. That's literally what computer science is.

**Amal Hussein:** Yeah, literally. I have to say, there is a sciency part to comp sci, and I think it starts at the graduate level... But there's a ton of theory, and I don't know if that really for me falls under the computation description...

**Divya:** Oh, interesting. So it's like research versus...

**Amal Hussein:** Computational theory could work, instead of computer science... But you know, there's a lot of theory, and...

**Jerod Santo:** Yeah.

**Divya:** Actually, that's so cool, because I have used that before when I talk about myself. I never talk about myself as a computer scientist, because I am not very theory-driven. I tend to be very vocation -- like, "How does it look? How do you implement it?"-driven. And I think I've used this distinction when I have certain conversations with people, when they talk about programming languages, and I talk about the syntax, and how exactly it works when you're building a thing, and the ergonomics \[unintelligible 00:44:57.17\] "Isn't it beautiful from a research perspective in terms of how the language is organized?" I'm like, "No, but it sucks to work with though..." \[laughs\]

**Jerod Santo:** Well, I think we have stumbled upon a couple of future Yep/Nope debates around terminology and its usefulness... But quite a ways upstream from where we started today, web apps and websites. That being said, a fun debate, a fun post-conversation... And gotta give a shout-out to Thomas Eckhart in the chat for the best joke of the day, which I missed on...

**Divya:** It was so good...

**Jerod Santo:** ...when Amal called herself a brogrammer... It was "abropriation"... \[laughter\]

**Amal Hussein:** That's so awesome. Oh my God, our listeners are so smart.

**Jerod Santo:** Yes. So you win, Thomas. So thanks everybody for listening. This is our show for this week, and we'll talk to you next time.

**Outro:** \[45:44\]

**Jerod Santo:** I had to fact-check you, because you'd just stated that one of your arguments is the other team got fact-checked... \[laughter\]

**Feross Aboukhadijeh:** That's true...

**Jerod Santo:** ...which shows how bad they are. And I was like, "Hold on, I was about to fact-check you."

**Feross Aboukhadijeh:** I was trying to use as many appeals to -- you know, different fallacies...

**Divya:** Oh, like different fallacies.

**Feross Aboukhadijeh:** Yeah, so I used the appeal to authority at the end, and then the one about them being fact-checked, the one where you disparage the other side's credibility...

**Jerod Santo:** Right. Like an ad hominem kind of a thing.

**Feross Aboukhadijeh:** Yeah, kind of. And then I tried to do -- I redefined... I don't know if that is one too, but I changed the goal posts.

**Jerod Santo:** Redefined the premise...

**Feross Aboukhadijeh:** Yes. I also did the thing that Biden does, where he's like "Come on..." \[laughter\] Or what does he say? Doesn't he say like--

**Jerod Santo:** Yeah, "Come on, man..."

**Feross Aboukhadijeh:** Yeah, yeah.

**Jerod Santo:** You should have said "That's a bunch of malarkey." \[laughter\]

**Amal Hussein:** We're gonna end up with so many adorable isms from him over the next four years...

**Jerod Santo:** "Come on, man..."

**Amal Hussein:** Yeah. He's a funny dude.

**Jerod Santo:** Alright, shall we hop back in? So not we'll flip the script and we'll go Divya and Feross first... Is that right? Yes. Because Nick was first-first, so...

**Divya:** Feross, did you wanna go first, or how do you feel...?

**Feross Aboukhadijeh:** No, you can go.

**Divya:** Okay.

**Feross Aboukhadijeh:** I've already dropped the mic, so... \[laughter\]

**Divya:** Pick it back up.

**Jerod Santo:** Pick it back up. \[laughter\] The show's not over.

**Jingle:** \[48:22\]

**Divya:** I love how Nick just said "Websites have content, and web apps..." \[laughter\]

**Nick Nisi:** I realized that I was making that argument, and I was just trying to step away...

**Divya:** They don't have content...? \[laughter\]

**Amal Hussein:** That was awesome. Wait - Jerod, you need to share this algorithm, dude...

**Jerod Santo:** Well, here's the algorithm - I listen to all you guys, and then I declare myself the winner. That's the algorithm. \[laughter\] It's a simple algorithm; it's just like "While true, Jerod wins."

**Amal Hussein:** Yeah, yeah. It makes sense.

**Jerod Santo:** So... Oh, thank you. I'm getting congratulated on our chat room. Thanks, Aaron. Cheers. Hey, Aaron - technically, you also won, because the only way you win is by not participating... And you and I both just sit around without participating.

**Divya:** Is that how kids' soccer works, too?

**Amal Hussein:** Oh, yeah... Everybody wins...

**Jerod Santo:** That's kind of different. Everybody wins. Here, nobody wins, except for me and Aaron Yoshitake.

**Divya:** This is the downside of being an adult... \[laughter\]

**Amal Hussein:** One of many...

**Jerod Santo:** The one thing that sucks about being an adult is we don't all get to win our little participation trophies...

**Divya:** I know...!

**Jerod Santo:** I mean, I'll send you a trophy if you want it.

**Divya:** I don't want a trophy, I just want orange slices. \[laughter\]

**Jerod Santo:** That's the other downside of being an adult - you've gotta buy your own orange slices.

**Divya:** You have to cut them yourself. If you want them sliced, you've gotta slice them.

**Jerod Santo:** I know...
