**Jerod Santo:** You know the sound of those BMC beats means it's JS Party time, y'all. My name is Jerod, I am happy to be here, and I'm happy to be joined by regular panelists, Kball and Divya. What's up, y'all?

**Kevin Ball:** Yo, yo!

**Divya Sasidharan:** Hello, hello!

**Jerod Santo:** So we're kicking it live in 2020... We're no longer predicting 2020, we're living it! We're living it for reals. And we've found a very cool repo this week; shout-out to Luigi DeRosa, @luruke on Twitter; you can find him in the show notes and send him a tweet. He's putting together this really cool repo called Browser 2020, the pitch of which is "Things that you can do with a browser in 2020", and here we are, in 2020... So we thought "This would be a cool conversation piece.

His description is "This repo contains a non-exhaustive list of less known features implemented in browsers today", or in some cases just one browser today. We'll get to some of that. But it also says "This list isn't intended for a technical audience; instead it wants to be a 'I don't know we could that in a browser' list."

That being said, we're a technical audience, and yet there are things in here that I didn't know you could do in a browser, and so we assume listeners as well could learn a few things, as I did by going through this repo.

Let's go through it a little bit, and I wanted to start with this question of surprise, and things that we weren't aware of. We are technical; that being said, what items in this list were surprises to you all? What were new to JS people like us?

**Kevin Ball:** I was actually surprised by the Web Share API... Though partly I might be surprised by it because I think the UI is pretty terrible, from what I can tell, on non-mobile devices...

**Jerod Santo:** \[laughs\] That surprised you, how bad the UI is?

**Kevin Ball:** Well, I hadn't seen it, and then I realized the reason I hadn't seen it was for anything except a mobile device, the UI looks terrible. So if you do the web share test I think on Safari or Chrome or something like that, it just looks pretty ugly. But if you do it on a phone, you get access to your native system sharing thing, so... People are probably using this when they're doing mobile web, and then falling back to Share This, or something else that actually gives you a nice UI on desktop and mobile.

**Jerod Santo:** So the description of this, at least in the repo, is "Delegate the share of URLs or files to the OS, providing share options based on the installed apps and user preference." So there isn't a UI though, right? Because that's the whole point, you're passing the URL off. Are you saying that in the Web Share test, as far as on macOS, that little Share UI is subpar?

**Kevin Ball:** \[04:05\] Yes -- well, actually no. Now I'm testing it and it doesn't even exist on my Chrome. It's like "Oh, that's an unsupported feature." \[laughter\]

**Divya Sasidharan:** Well, you can sort of see it in the screencap in that repo; they show you what it looks like on Safari...

**Kevin Ball:** Oh, yes. It does work on Safari. It's ugly as sin.

**Divya Sasidharan:** Yeah, it work on Safari. It's not super-great...

**Jerod Santo:** Now, is that OS's fault, or is that the API's fault?

**Kevin Ball:** I think it's actually happening in the browser... But I don't know.

**Jerod Santo:** That doesn't make sense to me, because the whole point is to pass it off to the native OS.

**Kevin Ball:** That's true. Yes, so maybe that's macOS being like \[unintelligible 00:04:40.27\]

**Divya Sasidharan:** \[laughs\]

**Jerod Santo:** This was also surprising to me - I didn't realize this was a thing, and maybe because nobody's really using it, maybe because it doesn't work in all the browsers and whatnot, and maybe because the... Definitely the share sheets on mobile tend to be more refined than the ones on at least macOS. I'm not sure how Windows or Linux's share sheets work, if they have them at all.

But on mobile it's nice, because it will sub-select the apps you have, like if you have the Buffer app installed, or a Slack app installed - all of that stuff just works, whereas on your own webpage you are stuck implementing "Share to Twitter, share to Facebook, share to Reddit."

**Divya Sasidharan:** Yeah, I just always assumed it was only a mobile thing, I guess... Yeah, because I've only used it in that use case. Because oftentimes when you're on a mobile device, your clipboard doesn't really exist. It just has one thing it can ever save... And so for me, whenever I'm on something and I want to share it really quickly, it's very easy for me to just be like "Oh, I wanna share it on WhatsApp", and I don't have to go copy the link. Because also when you're on a mobile device they hide the URL bar, to give it more space...

**Jerod Santo:** Right.

**Divya Sasidharan:** So that's a really easy way for you to share a resource without having to find the URL, which sometimes is an AMP link, and then you have this giant URL that you're sending people... This is much cleaner.

**Kevin Ball:** I'd almost rather if it only worked on mobile... Because if you do proper feature detection, and you say "Okay, does this thing exist?", that doesn't tell you "Does this thing exist, but it's super-ugly, because you're actually on desktop Safari."

**Jerod Santo:** That's true. The example in the web.dev website shows the feature detection, if (navigator.share). So this exists inside the navigator object, and it's the .share function... So if that function exists or is defined, then call it, basically is all they're doing. And it's promise-based.

Question about Share buttons - I'm so anti-Share buttons. Maybe I'm a curmudgeon, but I like this because it's like "Well, if your OS will do it, cool." But if not, I don't know; copy and paste the URL, or something. I hate having Twitter's JavaScript on my website, and Facebook's JavaScript... I end up hand-rolling a lot of the Share things just to construct the URLs myself, because I'm just not a fan of the Share This, or like the "Here's the gigantic list of social buttons", that are slowing down my web page. What are you guys' thoughts on that? Am I a curmudgeon, or are you with me?

**Kevin Ball:** With my developer hat on, I'm 100% with you.

**Jerod Santo:** Put on your other hat.

**Kevin Ball:** Well, my other hat was as a small business owner, which I guess I still am, even though I'm working for a company now, at the recording's time, but...

**Jerod Santo:** \[laughs\] It's complicated.

**Kevin Ball:** It's complicated, yeah. My business relationship status is "It's complicated." But as a small business owner and doing marketing, it actually makes a huge difference.

**Jerod Santo:** It does.

**Divya Sasidharan:** \[07:48\] Yeah, because you can track those. Whenever someone shares directly from a Share URL, versus copying and pasting. I mean, unless you're doing some kind of cookie tracking, it's really hard for you to just follow that lead along...

**Kevin Ball:** Even without tracking. It makes a difference in the -- I mean, yeah, you can hand-roll it, and actually I do have a site where I hand-rolled them, because I didn't want third-party JavaScript on my site... And that's another question. But having the prompt and the easy "Click to share" that prefills things, I have observed that it makes a dramatic difference in the viral echo that you'll get on a piece of material.

**Jerod Santo:** That fascinates me, because as a user, I never click those buttons.

**Kevin Ball:** You're not the typical user, Jerod.

**Jerod Santo:** Well, I know that, but that's why I'm asking - do you guys click the Share button? If you just see a button that says "Pinterest", and it's all non-retina, it's in a list of a gazillion button - does that urge you to share it on Pinterest? Or would those people have shared it anyways, and they're just hitting the easy button, or not?

**Divya Sasidharan:** I think it's device-specific. When I'm on my mobile device, then I'm more likely to do it than I am on web. On web, I never click on it, and oftentimes when I'm on a website -- I mean, I'm on my laptop/desktop a lot, more than I am on mobile; I guess this is generally not a common statistic, but as a developer you're often on your laptop... But when I am on the go, it's really easy for me to share stuff. I'm not on Pinterest, so I don't really use that button...

**Jerod Santo:** Yeah.

**Divya Sasidharan:** Particularly, I actually do not like the Twitter one. It's really annoying, because I think sometimes people embed them in an article, so as you're clicking or even selecting text, they'll be like "Do you wanna tweet this?" And I'm like "No! I'm just reading. I'm just reading and trying to keep my place." So I would rather those buttons be places in a certain spot, so if I want to access it, I can, and otherwise it's not in my way.

**Kevin Ball:** Yeah. I think if you're not -- I've totally lost what I was gonna say. \[laughter\]

**Jerod Santo:** I'm just gonna sit here and let you swim in it. \[laughter\]

**Kevin Ball:** You know what I'm gonna do... On my ZenDevs blog posts I use -- I think it's "Share This", and I have four default buttons, plus their Share thing. Let me log in - if I can remember the login - and see how many people actually click on those things... Because I think it'll tell me. If I can remember which account that's under; I guess it's this one. Social analytics... Oh, I don't have the analytics enabled.

**Jerod Santo:** This is compelling radio right here...

**Divya Sasidharan:** \[laughs\] It's a Mr. Rogers edition.

**Jerod Santo:** Hang tight, Kball's doing password reset flow... \[laughter\] Will he get the email, will he not? We'll never know...! Okay.

**Kevin Ball:** This will be fun, actually... Social activity over the course of 2019. Let's see if we can do that. This is by ShareThis's report. Sweet. Oh, interesting. So it tells me not only what did people click on to share, but it also tells me what things referred to me. These numbers don't look...

**Jerod Santo:** Very good?

**Kevin Ball:** Well, they're not very good--

**Jerod Santo:** You've got a bunch of Jerods reading your website?

**Kevin Ball:** Yeah... Oh, it's not actually giving me all of the -- that's the problem. I was like "These numbers look really small." I told it to do a year, but it's only showing me the last 30 days.

**Jerod Santo:** Well, here's something to Divya's point, on mobile at least... What I'm a bit confused about this is - the Share UI on mobile Safari and on other mobile things is right there in the browser's UI. You don't have to trigger it from a web page. So why wouldn't you just hit the little Share icon on your browser? Because you're on the URL, you assume you're gonna share this URL, right? Why would you want it in your page? Like as a strong call-to-action, like "Share this!" and it just pops their thing? I could see where that would be cool...

**Kevin Ball:** Yeah, that would be helpful. Yeah, people apparently share my stuff on WhatsApp, on SMS, on Blogger, on Evernote... All of these things.

**Jerod Santo:** So you're using one of those big "Share This" things that just includes all the social networks...

**Kevin Ball:** \[12:04\] What I have is I have four individual buttons: Facebook, Twitter, LinkedIn and Email. And then I have a generic Share that pops up one of those things. I set this up forever ago... And it's slow as sin, I totally get not wanting it. But yeah, it looks like people are going through those deep dives; they're digging down and finding the one they wanna do.

**Divya Sasidharan:** Interesting.

**Jerod Santo:** Alright, so there you have it - some people click on it, some people don't. Let's move to the next API, because Web Share is surprising, but probably not worth as much attention as we're probably giving it right now. Divya, what surprised you on this list of lesser-known APIs?

**Divya Sasidharan:** The Picture-in-Picture one mainly, because -- I mean, I never actually knew that that was an API. I always assumed it was just specific to YouTube, because it's the only thing I've ever seen use that... So it's just very -- it's not specific, it turns out. I guess that makes sense... And it makes sense that Google uses it in their own products...

**Jerod Santo:** Right.

**Divya Sasidharan:** But I find it really useful. I guess YouTube is very specific, and it's the only way that I've ever used it, but it's really nice, because oftentimes when I'm watching a video, I might wanna search for another video to queue it up almost... So being able to do that is really nice. And just not having to pause, or go to another tab, or whatever... I really enjoy that experience. So that is super-cool and interesting.

And honestly, I feel like I'm not thinking hard enough of all the potential possibilities of picture-in-picture. I'm sure there's lots... But I feel like video is the most compelling one...

**Jerod Santo:** Yeah.

**Divya Sasidharan:** ...just because of that playability. Maybe podcast could be one, too; the ability for you to play a podcast as you're reading something else, or doing something else.

**Kevin Ball:** Can't you do that now?

**Jerod Santo:** So does it work with different kind of media streams? Could you start a podcast and have it go picture-in-picture, and then navigate away from the website? Because I would definitely implement that on Changelog.com.

**Divya Sasidharan:** Yeah, that's really interesting. I'm not 100% sure. It seems like all the examples are video, media stream video support. No, there's audio playlists as well.

**Jerod Santo:** Cool.

**Divya Sasidharan:** So there's a potential for you to do that, yeah. I guess it would be good for podcast listening, as well as if you want Spotify to be playing in a separate thing... Because sometimes it's like "Oh, I lost a tab" or "I navigated away by accident", and then my music stops playing.

**Jerod Santo:** Right.

**Divya Sasidharan:** So yeah, lots of possibilities there... Really exciting and cool.

**Jerod Santo:** I'm with you. I thought that was just a YouTube thing, and I'm realizing that's actually an available API for anybody who's doing video, or I guess audio as well, to implement into their website... And it's a user-agreed-upon thing.

**Divya Sasidharan:** Yeah, exactly.

**Kevin Ball:** I think you might have to fake some video...

**Jerod Santo:** Oh, yeah?

**Kevin Ball:** Well, I'm just scanning through the doc here, and it says "Your promise may reject for any of the following reasons", and one of them was "Video file is audio only."

**Jerod Santo:** We could just do an animated GIF of Kball doing the salsa during JS Party... \[laughter\]

**Divya Sasidharan:** Well, is that the reason why -- actually, I don't know if this is even the reason why... Because you know how Spotify sometimes does these little GIFs that they have now... I don't know if it's in the web app, but it's in the mobile version definitely, whenever you're playing, and you look at what you're playing - there's like this little video that plays in the background, that loops...

**Kevin Ball:** That could be why.

**Divya Sasidharan:** I wonder if that's the reason, but I'm not 100% sure, and I'm not gonna say it is. Because it's very random; it's like "Okay, I don't really need this video... Why is it there? To drain my battery, or something?"

**Jerod Santo:** Right.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** Well, I'll say the most surprising one to me was the Web Coffee API. And I'll say it's Nick Nisi's favorite new API. I won't say anything else about it besides - link in the show notes. You should definitely click on the link in the show notes and check out the Web Coffee API.

**Kevin Ball:** \[16:12\] Oh, dear... 

**Jerod Santo:** Let's talk about the useful ones... Because surprising is one thing. And everybody likes Web Coffee APIs. Check it out if you haven't checked it out yet.

**Kevin Ball:** I just checked it out, and I was not sad.

**Jerod Santo:** \[laughs\] Not sad.

**Divya Sasidharan:** Caffeinated? \[laughs\]

**Kevin Ball:** You know I love coffee...

**Jerod Santo:** There you go.

**Divya Sasidharan:** \[unintelligible 00:16:26.25\]

**Jerod Santo:** What about useful? What are things that are on this list that you either are using today, or would love to integrate now into some sort of project, or waiting for an excuse to use? Things that people actually likely are interested in on this list here.

**Kevin Ball:** I think payments is huge. I think we're already starting to see the impacts of payments, but mostly through apps, and stuff like that... But particularly when you look at mobile payment things like Apple Pay, or Google Pay, where you can authenticate with your thumb or your finger, or I guess in newer version of the phone with your face, what have you... But the frictions for buying something on the web, particularly in a mobile device, where typing and credit card numbers and things like that is a pain in the butt - it just takes that away.

We've had that, to some extent, with native apps for a while. I buy a lot of things with the Amazon mobile app, but... Opening that up to any e-commerce site out there really lowers the barrier to entry. That could be something that, for example, Shopify implements. In fact, I would bet that they do implement.

**Jerod Santo:** They do.

**Kevin Ball:** And suddenly, anyone who has an e-commerce store using Shopify - their products are available for somebody to buy in a seamless way, using their phone. That's a phenomenal increase in usability for e-commerce on mobile. I would bet that alone dramatically increased the conversation rates of mobile commerce.

**Jerod Santo:** Yeah, and it's reasonably well-supported; it's on 15% green on browsers, but it's got the big ones in terms of mobile - which is mobile Safari - and there's partial support in something like 74% according to Can I Use, so the Payment Request API... So it's pretty usable today. It's not gonna hit all the browsers, but it's gonna save a lot of people a lot of time, and really reduce that friction, like you said, Kball, and make it seamless for those who are ready to buy.

There's that moment when you're ready to buy, between the point that you want to and the point that you actually get it done, and lots of people drop off it that's long and tedious. I know I sure have. You make that as seamless and as easy as possible and you're making more money.

**Divya Sasidharan:** I love it because whenever I wanna purchase something -- because I'm one of the consumers who thinks multiple times before buying something... First I do a ton of research, and then when I'm at the point of buying, I'm also -- potentially, I might change my mind last-minute, when I'm already in the checkout process... So when it's super-easy to use, I'm more likely to buy it.

Whenever I'm typing the thing in, and it'll be like "Do you want to add your credit card information automatically?" and I'm like "Yes." Personally, I never pull out my credit card, because I memorize it. That's like a separate piece; really weird. \[laughter\] So I know it... No, actually I don't; well, I don't wanna admit that I know it, but I guess I just do.

**Kevin Ball:** \[laughs\]

**Jerod Santo:** Prove it, prove it. What is it?

**Kevin Ball:** Oh, snap! \[laughter\]

**Divya Sasidharan:** No... Even at gunpoint, I will not tell you. But. It is nice to not have to 1) remember it... Because sometimes I remember it poorly as well; that happens rarely, but it does happen. It's just the ability for you to -- you only need to know your CVV, essentially, just to prove that "This is the card you want to use", and that's the one way that... So it's easy, but there's that one step of just checking that you are the person using the card, or that is your card. Because you have to know that information. And that's like a three-digit number, so you can easily remember that. I like it. It's so smooth and so easy.

**Jerod Santo:** \[20:18\] Absolutely. And I would say -- as somebody who likes to support small, indie businesses and small e-commerce sites, and yet doesn't like to just sprinkle his credit card around the web, like fairy dust, for anybody just to fall into their lap, I have this weird dichotomy where I'm like "Well, I would love to just shop at random mom-and-pop shops on the internet", but I also don't want to do that a lot of times... Because I'm like "Well, are they gonna really--"

So just the proliferation of platforms like Shopify, Stripe... Like, when I see the Stripe dialogue, their built-in checkout, as somebody who understands all about how that works - I realize we're a subset here as well - I'm pretty excited about that. I'm like "Okay, this is something I feel like I can trust." I have more trust because of it. Same with Shopify. I think this API style leads to that, because you're allowing it through your OS, right?

**Kevin Ball:** Yeah. Be cautious on that...

**Jerod Santo:** Sure.

**Kevin Ball:** ...because the naive implementation of this, your credit card number still goes to that site.

**Jerod Santo:** Yeah.

**Kevin Ball:** There are token-based versions that are more secure, and I think the Apple Pay implementation and all those use token-based ones... But the simplest, most naive way to implement web payments API as a website - you still end up with a credit card number.

**Divya Sasidharan:** Yeah. Because I think if you natively just use web payments, it's not automatically using other services or APIs like Stripe, or anything like that... You're just using it on the site itself, so that site has access to that information.

**Jerod Santo:** The most naive implementation -- it's literally just an autofill; is that what you're saying?

**Kevin Ball:** Essentially, yeah.

**Divya Sasidharan:** Exactly, yeah.

**Jerod Santo:** Gotcha.

**Break:** \[21:58\]

**Jerod Santo:** No doubt that Web Payments API is very useful... What else looks useful on these things that you can do in 2020 and maybe you don't know about, but can be super-useful for folks?

**Divya Sasidharan:** This is something that I learned about when I went to Chrome Dev Summit last year, which is just the SMS Receiver API. I know there's some reservation around your app being able to read people's SMS, but there is some privacy requirement there, which is users have to opt-in. They have to be like "Yes, I want you to read my SMS." But when you do that, it's really nice for one-time passcode type things, because it's a very seamless way; so instead of having to navigate away...

This is for mobile, obviously. On desktop it's like, whatever... But on mobile it makes for a much more seamless experience, because having to switch is really annoying. And already as is, switching to the authenticator app to grab the code and then back in is such a pain... It's so necessary, but such a pain... And it's the same for SMS stuff as well.

Obviously, there are ways around it, that you don't have to use -- so the app reads your SMS... Because sometimes your SMS comes through as a notification, and then you can just quickly read the number and type it in, if you are good at remembering numbers... But in general, if you trust an application, it's a very easy flow of logging in.

\[24:14\] I think they showed an example of using that for re-authentication mainly. There are many applications where it's passwordless, so you would use a one-time passcode to login, but then because of a lot of issues with that, with Symatecs, and all kinds of things that come around with using your phone to authenticate, you would just essentially require a password and then use that OTP to re-auth, or just as an extra step in authenticating the user... But it does reduce that barrier to entry, specifically for two-factor or multi-factor auth, which tends to be a very clunky user experience. Many people refuse to use it just for that purpose. They're like "I'd rather my application be seamless, so I don't wanna use 2FA", which is not great... Especially if you're accepting credit card information or anything that's very personal and private.

**Jerod Santo:** Hm... I don't think I understand this API. Who gets the SMS? Is this a browser API?

**Kevin Ball:** I think so, yeah.

**Divya Sasidharan:** Yeah.

**Kevin Ball:** I'm looking through it as well... One of the things I'm trying to understand -- so basically you just get access to SMSes that happen...

**Divya Sasidharan:** Yeah. It would be with an SMS that has an OTP on an application that you're on.

**Jerod Santo:** OTP, one-time password, right?

**Divya Sasidharan:** Yeah, one-time password. So you're logging into PayPal, or something, and then they're like "You need a one-time password. We sent it to your via SMS" and then it's like "Cool." And then it just reads it. Because it's just automatic, it happens at that moment in time.

**Jerod Santo:** Yeah. I just don't understand how the front-end receives an SMS. It's the SMS Receiver API - like, who's sending it? You have to have access to that system.

**Kevin Ball:** I'm looking at code examples, because there's a repo for questions... Let me drop the repo I'm looking at here... So it looks like basically you run navigator.sms.receive() and you await the response, and then that probably asks for permission at that point...

**Divya Sasidharan:** Yeah, I think so.

**Kevin Ball:** And then it comes back (I assume) with the next SMS that comes in. So if somebody happened to send you an SMS at the same time, you would get that one instead, which could be awkward, but...

**Divya Sasidharan:** That's interesting. I wonder if there's a -- yeah, I don't actually know if this particular API allows you to check where that message is coming from... I don't think so. Because yeah, if someone messages you something else - would that read it?

**Kevin Ball:** I would like it to be able to say -- and have this be part of the permission flow, too... Say "We'll get an SMS from this number", or from numbers matching these criteria, or something like that...

**Divya Sasidharan:** Yeah.

**Kevin Ball:** Because I'd be really hesitant to say "Yeah, sure, you can read whatever SMS comes in to me." But if it says "Okay, they're asking for permission to read SMSes from this number."

**Divya Sasidharan:** The documentation shows that essentially you're writing some regex to check whether it matches a specific thing... So you're checking whether it matches -- oftentimes an OTP would be like "OTP = whatever", or even a specific string of characters that's assumed that everything is numbers, or it starts with a specific letter... You can just check that that SMS matches that criteria and then grab it accordingly... But I don't know if it prevents -- but I think it would have to read any messages that come in at that point in time. So if there's two messages that come in, it would read both, and then grab the one that it needs.

**Jerod Santo:** Yeah, it seems like a worldwide race condition.

**Divya Sasidharan:** Yeah. \[laughter\]

**Jerod Santo:** \[28:07\] Like, who can send the SMS faster? This website that you just asked to, or significant other, who happens to be saying something to you, and now it's reading that to run a regex against it.

**Divya Sasidharan:** In numbers... It's like "Hey, OTP=..." \[laughter\]

**Jerod Santo:** Well, that's how my wife and I always chat...

**Kevin Ball:** Well, that regex could be whatever, right?

**Jerod Santo:** Exactly. It doesn't have to be a regex. It could probably just be like a slurp.

**Kevin Ball:** Yeah, it looks as though -- I mean, once again, I'm just looking at this example code right here... But it looks as though the regex stuff is in your code, it's in user code.

**Divya Sasidharan:** Yeah, it's in your user code.

**Kevin Ball:** So instead of regex, you could say "Post whatever you get back to my web server."

**Jerod Santo:** Exactly.

**Divya Sasidharan:** Oh, definitely. You would have to do that validation in the application, and if they don't do the validation, it will read anything...

**Jerod Santo:** So this one fits in our next category, which is "How many of these are ripe for abuse?'

**Kevin Ball:** Easy to abuse...

**Jerod Santo:** Yeah, exactly.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** This is definitely interesting... We should state this is in -- what's the status? It's very early days... Origin trial?

**Divya Sasidharan:** Yeah.

**Kevin Ball:** I wonder if -- do they ask you for permission each time, or do they only ask you for permission the first time?

**Divya Sasidharan:** I think they ask you once, and then the assumption is that you want it over and over again.

**Kevin Ball:** That's interesting... Because what if I ask for permission once, but then I just sit there, listening to every SMS that comes in? I have the valid approach of "Oh yeah, we're gonna do a two-factor authentication. Great. We send you an SMS, you verify that", but if it doesn't ask you for permission again the next time, you could just sit there waiting for SMS.

**Jerod Santo:** Mm-hm. Read every SMS that comes in until they leave your web page.

**Divya Sasidharan:** Interesting, yeah.

**Jerod Santo:** There's a nice warning on the SMS Receiver API announcement. It says "Attackers can spoof SMS and can hijack a person's phone number. Carriers can also recycle phone numbers to new users after an account was closed. While SMS one-time passwords is useful to verify a phone number for the use cases above, we recommend using additional and stronger forms of authentication to establish new sessions for these users."

**Divya Sasidharan:** Yeah, so it's not the primary way of logging in... Because that would be terrible.

**Jerod Santo:** Yeah. I don't know about you two, but I'm gonna give this API a hard pass in my life. I'm just like, not interested... I don't know. There's other ways, like AuthN; that's the other one.

**Divya Sasidharan:** That's fair, that's fair. I think AuthN is cool, honestly. This ties really well with AuthN, because AuthN is just like the ability for you to do extra OTP style thing, but with a security key.

**Jerod Santo:** And that's out there, right? Oh, it's on the list; it's in our document, WebAuthn.

**Divya Sasidharan:** That is not on the list. Yeah, sorry; I wrote that down as like it's coming. I think it's actually quite far in the process, because a lot of work has been done on WebAuthn, and it's pretty talked about in the authentication/security people community, just because it adds a lot of capabilities for you to use YubiKeys across applications. So you don't have to have -- the browser will automatically support it, so you don't have issues using that process of working. So like YubiKeys, or whatever security key you're using - you can just automatically use that to do authentication.

**Jerod Santo:** Gotcha. So maybe a thing you can do in 2021, not 2020.

**Divya Sasidharan:** Potentially... I actually don't know what--

**Jerod Santo:** Not sure.

**Divya Sasidharan:** Yeah. I have no idea where it is in the... Yeah.

**Jerod Santo:** When is the next version of you gonna come out? That's the question. \[laughter\]

**Divya Sasidharan:** Good question.

**Kevin Ball:** I don't think that counts as a browser API.

**Jerod Santo:** Not yet.

**Kevin Ball:** \[31:48\] Not yet. WebAuthn is actually really cool, because I feel like I have that experience now because i use a password manager, and I have it hooked into my biomarker of my fingerprint on both my phone and my laptop... And the WebAuthn approach basically means you could do that without having to understand password managers, and without having to deal with that stuff. You'd just have -- any user can authenticate with the biomarker, or a YubiKey, or whatever, and they don't have to deal with passwords. And the whole password stuffing, reused password etc. just goes away.

**Divya Sasidharan:** Yeah. And something to note also - I think specifically with authentication with biometric information like fingerprints, I think there's always the fear that the application will get access to your fingerprint, and then if it leaks, that will be out there... But that authentication actually happens locally, on your device, and that's never sent across the server... So that is extra added security.

**Kevin Ball:** Yeah, there is a spoofing question, though... Especially with things like iPhones and all of that, with using the face recognition.

**Divya Sasidharan:** Sure.

**Kevin Ball:** Wasn't there a great video of somebody going around--

**Divya Sasidharan:** Yes, there was. I think they put like cling film or something they did to their face, and then it just universally authenticated... Is that the one?

**Kevin Ball:** Oh, that wasn't the one... I was saying somebody -- their Airbnb host had a similar face authentication, and they were able to spoof it just with pictures from social media.

**Divya Sasidharan:** Oh... Yeah, I saw the other one, where someone did something to their face, and then it was just like a universal face, or something...

**Kevin Ball:** Yeah, it turns out faces may be not the best authentication approach... \[laughter\]

**Divya Sasidharan:** One of the biggest features of the Pixel 4 out here, but... Which I did not have.

**Jerod Santo:** It's great unless you have an \[33:42\] twin.

**Kevin Ball:** Or you don't have your bizarre avatar, Jerod, and your face is all over social media...

**Divya Sasidharan:** Yeah, that's true.

**Jerod Santo:** Ooh, points for me, for bizarre avatar.

**Divya Sasidharan:** \[laughs\] But then no one will know what you look like.

**Jerod Santo:** That's true. Let's go through a couple of these features that people are either likely using right now, or they're very approachable. I think prefers-color-scheme is a cool one, which basically allows you to detect light mode or dark mode, according to what the person has set OSwide.

Prefers-reduced-motion is another one that you can use. It's kind of an accessibility feature for those who can get -- what do you call it... Sick, I guess, with too much animation?

**Divya Sasidharan:** Yeah, motion-sick.

**Jerod Santo:** Motion sickeness, yeah.

**Divya Sasidharan:** Yeah. Or if you have any issues around fast-moving things.

**Jerod Santo:** I like features like these, because they just gracefully fallback, right? If the browser doesn't support prefers-reduced-motion, then it just doesn't reduce motion.

**Kevin Ball:** WebXR is pretty cool, too. Have y'all seen AFrame?

**Divya Sasidharan:** Yeah, it's great!

**Jerod Santo:** I've heard about it.

**Divya Sasidharan:** I think AFrame is so cool.

**Jerod Santo:** What is it?

**Divya Sasidharan:** Essentially, you can write VR things using HTML. So you don't actually have to write a lot of JavaScript. You just create various things for box, or whatever you need, and then it automatically...

**Jerod Santo:** Like a component library that turns it into VR?

**Divya Sasidharan:** It's like a component library, exactly. It's like a Web Components style library...

**Jerod Santo:** That's rad.

**Divya Sasidharan:** ...that allows you to access VR elements without you having to know a lot of the internals of VR, which generally is a very high barrier to entry... AFrame makes it so much easier, because you can just write it very easily in HTML.

**Kevin Ball:** The other thing that's really cool about WebAR and VR is that it's like your epitome of progressive engagement... Because you can interact with it without any sort of VR equipment, and it falls back to WebGL-type 3D rendering... And then if you get excited or you have the equipment, you can put it on and go deeper and deeper and deeper.

I've also heard that one of the things that WebVR exposes that other VR situations don't, that has the potential to make it more powerful that any other VR setting, is linkability. So you could link into different VR experiences, which is super-cool to think about.

**Divya Sasidharan:** \[36:07\] Yeah, that's true. The other thing also - I think in general the VR community started calling it XR, so it's like Extended Reality, or Augmented Reality...

**Jerod Santo:** Is that like the umbrella term for both AR and VR - XR?

**Divya Sasidharan:** Exactly, yeah. Because I remember reading about this sometime last year... Because when people talk about VR, they also might talk about AR, and vice-versa; there's a lot of overlap. Because generally, with VR specifically you would need a headset to access it, and then with AR you don't need a headset necessarily; some web browsers support it, and you can use your phone, and so on.

So I think they tried to create this overarching umbrella term called XR, so it covers all of it... And it's so cool. XR is really neat, because it just -- honestly, I'm not a huge gamer, and VR tends to be in that community, very much in the gaming world... And AR (augmented reality) feels more accessible to me, and something I would actually use.

For me, that moment of like "Oh wow, this is really useful", as when they did the measuring tape in one of the Apple keynotes...

**Jerod Santo:** Yeah, that was awesome.

**Divya Sasidharan:** I was like "This is so cool!" And I would totally use that. Similar to like if I want to buy -- this is really silly, but...

**Jerod Santo:** Bring it.

**Divya Sasidharan:** ...if you have an apartment, or you own a house and you want to know where to put furniture, that's really useful. I'm fully an adult now, because I'm thinking about these kinds of things... \[laughter\]

**Jerod Santo:** Fully an adult. IKEA is the main use case for this.

**Divya Sasidharan:** I know. IKEA and Wayfair as well. I think Wayfair has their own application that does that... Or they have a widget in their app that allows you to access that, so you can just be like "I want this furniture, and I wanna see what it looks like in the house."

**Jerod Santo:** This is Divya's heuristic of knowing when you're adult - when you find a new, interesting technology feature and you think "How can I use this to decorate my house?"

**Divya Sasidharan:** This is related, but Donald Glover has a stand-up episode on this where he talks about how you know you're old when you walk into a Home Depot and one of those stores and you're like "Oh, I could totally use any of these", or you have ideas for what you want in your house...

**Jerod Santo:** \[laughs\]

**Divya Sasidharan:** ...then you know you're fully just like an old person now.

**Kevin Ball:** Thanks.

**Divya Sasidharan:** Like, your childhood has just died... \[laughs\]

**Jerod Santo:** Kball, now that your childhood's dead, did you wanna say something?

**Kevin Ball:** Yeah, I was actually gonna comment that I was surprised to see not that long ago a really valuable business use for AR, which was as a way to collaborate between architects and general contractors, and things like that, as they were developing the architecture for what they were gonna build, and being able to essentially take the plans and see them, and walk around, and experience what it is, and feel what it's gonna look like, prior to actually building.

I thought that was a super-cool example of this technology, which has for a long time kind of felt like a cool tech in search of problem domains...

**Jerod Santo:** Yeah, demo...

**Kevin Ball:** ...being used for a really real problem domain.

**Divya Sasidharan:** I thought that similarly for when Google Glass came out and no one cared for a while... And then it died...

**Jerod Santo:** Yeah.

**Divya Sasidharan:** There was one use case for Google Glass that I thought was really compelling, which is for emergency respondents to talk to doctors, so they would be able to kind of overlay various -- the doctors would be able to see what they were doing, and they could overlay various images as they're assessing a patient... Which I thought was cool, because I'm like "Oh, there's a lot of cross-communication that can happen as a result", and someone who is not fully-versed or able to provide full medical support can be able to do -- can save a life somehow, with the aid of someone who is able to do that.

\[40:06\] It's a really neat use case, which I think -- yeah, unfortunately Google Glass doesn't exist... It was cool while it lasted, for like a month, or something...

**Kevin Ball:** But now you can get the Snap glasses, right?

**Divya Sasidharan:** Yeah, now you can use the Snap glasses to do Snapchat stuff, which I guess is cool...

**Jerod Santo:** Right. Everyone's taking a crack at it. They say Apple is releasing something-glasses in the next couple of years... I think ultimately somebody does need to crack that nut in order for it to go mainstream, these use cases...

**Divya Sasidharan:** For sure, yeah.

**Jerod Santo:** Because ultimately, you don't wanna hold your phone up, or your iPad up to do AR. It's cool and it's fine, but if you wanna be a regular part of consumers' everyday life, put it in our viewport, and do it in a way that we actually wanna wear it. I mean, that's the problem with Google Glass - you just looked like an idiot wearing it.

**Divya Sasidharan:** \[laughs\] I think people are also afraid, because they're like "Oh, if someone wore Google Glass and then they went to places that were considered private...", like if you went to the bathroom, or whatever...

**Jerod Santo:** Yeah, creepy factor, for sure.

**Divya Sasidharan:** Yeah, it has that creepy factor. But honestly, it's like a Sci-Fi fantasy to be able to just automatically pull up stats and see things, and have your reality augmented by additional things... Directions, for example; you don't have to constantly look at your phone, you just automatically can look at the street and tell what it's called without seeing "Is there a street sign?" or "How do I get around?"

I think there's safety implications as well, because if you're driving, you don't wanna constantly be -- obviously, you can have audio to help you, but there is a possibility of that safety aspect if you have a reality augmented onto your existing one, so you know where you're going at any given time.

**Kevin Ball:** But this challenge is something that any really disruptive and new technology goes through...

**Divya Sasidharan:** Yeah.

**Kevin Ball:** We as a society need to figure out what are the ways that actually can use this, and help us in a way that's productive.

I remember seeing stuff around when we first adopted electricity - it took 50 years before we were fully reaping all the benefits of electricity... Because not only did we have to spread distribution and get it equally out - which we're still figuring out with AR, like what are the ways that it's going to be distributed - but we had to redesign how we use things, how we set up our houses, how we set up our workspaces, and all these other things. And we're getting faster at those things, but we haven't figured it out for AR and XR. It's just isolated niche cases so far. And I think the power of it is so large, that -- you know, between AR, XR and AI type things, those two things are places where we've made incredible strides and we're now in that figuring out stage of "How do we use these things throughout our lives and throughout our work to reap the benefits?"

**Divya Sasidharan:** I think there's also just like "What are the possibilities within it?" Because oftentimes when there's a new technology we're not sure what to do with it. To use an example, the Gutenberg press, when it came out, there was only one typeface, and that typeface was essentially mimicking the handwriting of monks, which was how things were copied back then... Because people were like "What else is there? This is the one way that people read books." So the possibility of typography didn't exist until much later, when people would be like "Oh, you could do so much more with it."

I think it's very similar in terms of when a new technology comes up - we tend to address it in terms of what we know, rather than what is possible, because our minds just haven't wrapped around the full spectrum of possibilities within that.

**Break:** \[43:50\]

**Jerod Santo:** So after looking deeply at the SMS Receiver API - not a huge fan. There's lots of APIs that you could look at and you're like "Why? Why are we doing this?"

**Divya Sasidharan:** Yeah, I think they jumped the gun a little bit, when we talked about just like "Oh, this is cool! Oh wait, these are the possibilities", and ripe for abuse...

**Jerod Santo:** Because that's how it kind of is, right? As a developer, you get excited about something, you look at it, it looks very interesting, and sometimes you hop into the details and you're like "Hm. I'm not so sure. I'll come back in six months and see how it looks."

**Divya Sasidharan:** I think it's purely like -- you have a use case for it. I would have built an application where I would totally use it, but I don't trust other people to build it well

**Jerod Santo:** \[laughs\] "I could use this, but I don't want you to use it, because you're gonna screw it up." I get that.

**Divya Sasidharan:** Well, I don't know... In general, I like to trust that developers are gonna use it well, but there's always bad actors, so it's very hard to gauge whether or not this will be good or bad. Oftentimes it's bad, because it just takes one person to just abuse it, and then no one wants to use it, or touch it, or go near it ever again.

**Kevin Ball:** And that person is usually Feross... \[laughter\]

**Divya Sasidharan:** Yes... Yes.

**Jerod Santo:** So I'll start on this one, because I have a bit of a beef with push notifications in general, because I feel like they are the robots running our lives, and we're supposed to be using them to help our lives... And they can very quickly take over. So now many websites have been asking if they could send push notifications, and it's like "I get enough push notifications already. I don't need one from your website."

Surely, this is best for web apps, versus websites... But any API that is generally available will be generally used. So the Push API allows browsers to register push notifications. You can send later, etc.

**Divya Sasidharan:** Honestly, I always block it. Always.

**Jerod Santo:** I say no every time.

**Divya Sasidharan:** Yeah. Because sometimes you'll be reading the news or something, and it'll be like "Do you want push notifications?" and I'm like "No, I don't!"

**Jerod Santo:** \[laughs\] Exactly. And aren't you kind of mad that they asked? I'm kind of offended. "Did you thought I might want this?"

**Divya Sasidharan:** Or a blog... Like, it's just the tenacity -- even a blog is just like "Do you want push notifications?" and I'm like "Oh, do you publish in every minute?"

**Jerod Santo:** "What I have to say is so important that you need to know immediately."

**Kevin Ball:** \[47:53\] There's a global principle here though, which is like "Don't ask for a privilege out of context." I land on your site; no, I don't want a freakin' push notification.

**Jerod Santo:** Right.

**Kevin Ball:** But if for example I'm using a calendar and I set something up and it says "Do you want a reminder? Okay, would you like that as a push?" then maybe I'll say yes. Like, put it in context. Why the heck would I wanna give you a push notification? I can think of some reasons... Calendars, if I'm using a web version of Slack, if I'm doing some other things - yeah, okay.

**Divya Sasidharan:** I think price drops, too. Like, if I'm buying a flight and I wanna know when the price dropped. That is useful to me. But otherwise...

**Kevin Ball:** Yeah. There are legitimate uses for this.

**Jerod Santo:** Wouldn't you want an email on that?

**Divya Sasidharan:** An email?

**Jerod Santo:** I would almost always want email in these cases... Unless the case of like a Slack application, like Kball said...

**Divya Sasidharan:** Yeah, but sometimes it requires an immediate thing... Let's say JSConf is releasing tickets, or whatever, and they go very quickly - you would want a push notification, just to be like "Hey, it's going on sale. You'd better get on your..." If it's in an email, I will not see it until it's gone. \[laughs\]

**Jerod Santo:** Maybe I'm just a hawk on my email too much.

**Divya Sasidharan:** I'm not.

**Jerod Santo:** I stay on top of it, so that works for me for certain contexts that it doesn't work for other people. A gift and a curse... But yeah, that makes sense. I like that. If there's tickets going out, and like this thing is gonna sell out now, and your only context is this browser, then send me a push notification.

But what if it just goes to your laptop then, and you're on the go? Missed it. You're gonna miss JSConf again. It definitely has some valid use cases...

**Kevin Ball:** You could say both, right?

**Divya Sasidharan:** Oh yeah, that's true.

**Jerod Santo:** Send this to my phone?

**Kevin Ball:** Yeah, you could do that, too. Once we open the realm of "This is something that we're actually in a dialogue with the user about how they want this to be used", there's a ton of possibilities. "I want this as soon as I can, wherever I am. Send it to my phone, send it to my email, send it to a push notification." "Okay, sure." There are situations I can imagine that.

**Divya Sasidharan:** Yeah, I think that's a very key point, because oftentimes when an app says they wanna push, I wanna know why they wanna push... Sometimes it would be a legitimate reason, that I'll be like "Yeah, that makes sense."

But I'm gonna go back to the blog thing. Let's say it's a blog that I read a lot, or CSS-Tricks, or something that I really enjoy reading. I would want a push notification when something new is published, because I'm like "I would probably read it." But then I would want them to tell me that that is the reason. Like "When we publish a new thing, we will notify you", and I'm like "Cool. I want that." Versus "Can we push notifications to you?" and I'm like "For what purpose? There's no reason why I need this." Which is such an anti-pattern, I think... Because now push notifications is so ubiquitous, and no one tells you why they need it.

It's the same for cookies... Now with GDPR and all websites have to tell you that they're tracking you, but it's really annoying, because you can't be like "No, I don't want you to track me", because there's never that option.

**Jerod Santo:** Yeah. It's "Okay" or "Leave this banner here until you leave the website."

**Divya Sasidharan:** Exactly, yeah.

**Kevin Ball:** That's a user experience choice though, and it happens to be the one they're all doing.

**Divya Sasidharan:** Oh, yeah.

**Jerod Santo:** I don't take that choice. I take the "Just do what you've been doing" choice, and deal with the ramifications, I guess... Because a lot of that is based on a lawyer's advice based on an interpretation of a law in a place, and it's like CYA kind of a thing. And then you see a big website doing it, and you're a big website, and you're like "Shouldn't we be doing this? Because their lawyer probably knows what they're talking about." And then you go talk to your lawyer and they're like "Well, it's not clear according to these laws, but yeah, you should probably just put it up", and then all of a sudden you see it on every single website on the internet. Isn't that kind of how it goes?

**Kevin Ball:** Yeah, I mean... You could also choose to allow -- like, if you put that banner, give them an option saying "No, I don't wanna be tracked." "Okay."

**Jerod Santo:** Window.close.

**Divya Sasidharan:** Yeah. \[laughter\] "Window.close"...

**Jerod Santo:** \[52:02\] \[laughs\] They say no and it just autocloses the tab, like "Well, you didn't want it..." There you go.

**Kevin Ball:** Well, a lot of the stupid interaction or UI there is based on a very quick reaction of "We have tracking everywhere. It's gonna be hard for us to remove it, so we're gonna say 'Say yes, or don't use the website." But that's based on coming from a domain where it's free and easy to track everyone all the time. If you're building a new website, you don't have to make that choice anymore. You could say "I'm actually going to listen to what my users say and choose not to track them if they say no", for example.

**Jerod Santo:** I agree 100%. What other APIs are bad, in our humble opinions? Well, we talked about the File System API on our 2020 show, where I was worried that there might be potentially abuse... But it has a lot of opportunity. As Chris mentioned, there are cool things you can do with it, so it's not like it's bad... I guess it's just open for abuse.

But in terms of things where you look at this list and you wonder "How many developer hours are going into this feature that -- I don't know if browsers should really do this anyways", are there any of those?

**Kevin Ball:** I'm kind of wondering about that Vibration API...

**Jerod Santo:** Oh really? \[laughter\] What's that one? I didn't see that.

**Kevin Ball:** Basically, it's what it sounds like. \[laughter\] It's what it says in the description.

**Jerod Santo:** I was hoping for a surprise...

**Kevin Ball:** It provides access to the vibration mechanism of the hosting device. I mean, it kind of makes sense; you have a phone, you're doing stuff on there... There are situations, especially if you're doing games, where you want the device to vibrate. Okay, fine.

**Jerod Santo:** Yeah. Like a Rumble Pak on the old N64.

**Kevin Ball:** Sure. Okay. And I play games on my phone that use that to good effect. However, it's a very minor bonus. It doesn't help that much. Maybe it helps a little bit... And it just seems like it's so ripe for abuse.

**Divya Sasidharan:** \[laughs\] I often just have battery saver mode, and it just automatically turns off all vibrations, so...

**Kevin Ball:** \[singing\] Talkin' 'bout those good vibrations...

**Jerod Santo:** \[laughs\]

**Divya Sasidharan:** Maybe it's like "Do you want a push notification?" and then it vibrates... \[laughs\]

**Jerod Santo:** Yeah. Like, if you don't see it, it's like "Vibrate. Vibrate." "Hey, we're over here! Why aren't you looking at me?" \[laughter\]

**Kevin Ball:** I was thinking about mashups - there's also a page visibility API, so you get a callback or something, whenever your page is no longer visible... So I could just imagine, as soon as you tab away, your device vibrates...

**Divya Sasidharan:** Oh, no...!

**Jerod Santo:** Ooh...

**Divya Sasidharan:** It's like "Did you forget about us? Did you forget?"

**Jerod Santo:** That's an abusive relationship right there.

**Divya Sasidharan:** Or maybe shopping carts... There could be a reminder that you have a shopping cart that's abandoned... I guess I can see that, but I would be very annoyed by that personally. It's just like "Okay, I chose not to buy your thing, but it's in the shopping cart and I'm too lazy to go back and empty it."

**Jerod Santo:** Right.

**Kevin Ball:** You could also imagine -- well, I wondered, do laptops have a vibration mechanism, or is it just phones?

**Divya Sasidharan:** I don't think so... \[laughs\]

**Kevin Ball:** Because you can imagine - you have your laptop, and if you hover over something in particular, instead of it shaking visibly, your laptop buzzes...

**Divya Sasidharan:** Oh, my god...

**Kevin Ball:** That would be pretty funny.

**Divya Sasidharan:** I don't think your laptop has a gyroscope, does it? \[laughs\]

**Kevin Ball:** Not yet...

**Divya Sasidharan:** Oh, man...

**Jerod Santo:** Here's one that was probably a waste of time - the Force Touch API, which is an Apple-specific hardware feature, which they appear to be moving away from, because they're now going long-press on everything, and force touch is not longer en vogue... So all the effort into that -- I mean, it's still gonna work on devices that do that, but it's such a small niche, and it's gonna be a vanishing one over the years... So maybe efforts could have been put elsewhere. But you can detect force pressure.

**Divya Sasidharan:** \[55:59\] I think the other one that I have -- like, the Contacts API, to get access to contacts... I really hate that, just because I never wanna share my contacts with an app, ever. I know some people want to, because they're like "Oh, people have added their phone number to their Twitter account, and you can search and add them on Twitter really easily", but I never do that. I almost wanna keep those things separate. To me, anyone in my phone as contacts is very personal, and anything else is just more social, random...

**Kevin Ball:** Yeah, it sounds ripe for abuse.

**Jerod Santo:** Yeah, it does. That's another one that's in origin trial.

**Kevin Ball:** Do you remember those old apps (was it like Plexo?) where they would ask you and just pull and scrape all of the people in your email contacts, and things like that? Yeah, this sounds like viral abuse waiting to happen.

**Divya Sasidharan:** Oh, yeah. Yeah.

**Jerod Santo:** When would you like that feature? If you're gonna email somebody from inside an app, and it can get your contacts and they'll autofill their email address? Like, if it's a Gmail-style web app?

**Divya Sasidharan:** It if matches the person's name; you're typing the person's name, and they're like "Oh, this person."

**Jerod Santo:** I wonder if that allowed you to run a sync between an OS and a Gmail-style app. So you could just sync my contacts between Gmail and my native iCloud, or whatever... I guess Android already has that, if you're on Google. But that would be cool, because I definitely have a disparity between multiple Gmail accounts, plus my iCloud contacts. People exist in some places and not in others, and it'd be cool to have a sync.

**Divya Sasidharan:** I think for me if they're not in a certain place, I just forget that they exist.

**Jerod Santo:** \[laughs\]

**Divya Sasidharan:** I'm just like, "Oh, maybe I don't need to contact them. It's fine." And then if they pop up again, then I'll just add them, as needed. It's a way of purging contacts almost, instead of just migrating an ever-increasing--

**Jerod Santo:** It's relationship management, yeah.

**Divya Sasidharan:** Yeah, but if I go rock climbing and someone's like "Hey, we should climb sometime" and gives me their number and then they move away, and I'm like "I'm never gonna contact you ever again, and I don't want your number in my contacts", I wouldn't wanna migrate it...

**Jerod Santo:** It's a formalization that not everybody is worthy of.

**Kevin Ball:** I'd actually really like something that made it easy to clean up my contacts...

**Divya Sasidharan:** Yeah.

**Kevin Ball:** My contacts have gotten copied from phone, to phone, to phone, and at some point along the way they got duplicated... So I have like five versions of a bunch of people, but --

**Divya Sasidharan:** Oh, gosh...

**Kevin Ball:** But there's hundreds of them. So I'm not gonna manage those and remove those by hand, in my phone. If I had a spreadsheet API or something, like "Pull these into a spreadsheet, clean them up and dump them back out..."

**Divya Sasidharan:** It's like remove dupes, or something.

**Kevin Ball:** Exactly, remove dupes. That would be awesome. So yeah, I could see a really powerful, wonderful use case for that. In fact, I wonder -- I could maybe even write that. Like, what is this supported in? This gives me an idea for a hack project that would help my phone.

**Divya Sasidharan:** There you go. You can use the Contacts API for that.

**Jerod Santo:** There you go. So we go from like "This is lame, ripe for abuse" to like "I'm actually coding for this right now." I like that.

**Kevin Ball:** Yeah. Only supported for origin trial and Chrome for Android, so... Cannot work for right now.

**Divya Sasidharan:** Does it let you only do read, or does it only write? It's only read, I feel like...

**Kevin Ball:** It looks like it's only read.

**Jerod Santo:** Well, you could read them all out into a sheet, and then manage them, and then you could do an import some other way.

**Kevin Ball:** And then I'd get another set of duplicates, right?

**Divya Sasidharan:** Well, you would just delete all of your --

**Jerod Santo:** You'd clear out your Android -- you could do this without a web browser.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** According to Chris in the chat, Google does remove dupes for Contacts. I know there's a Merge button inside of Apple Contacts as well.

**Kevin Ball:** Is there?

**Jerod Santo:** \[01:00:01.27\] Kball, there's solutions out there for you.

**Divya Sasidharan:** I think it's only dupes if it's actually the same name. So if there's a weird space, or there's weird capitalization, I'm not sure it does that.

**Kevin Ball:** So I'm in Apple...

**Jerod Santo:** It sounds like the kind of domain that has probably 101 open source contact mergers out there; it just requires a little bit of effort to go find a good one and use it. I think we can get you there, Kball. We can get you fixed up.

**Kevin Ball:** Okay. Yeah, there's one person in my phone ten times... I don't know how that happened.

**Jerod Santo:** Ten times? You must really like them.

**Kevin Ball:** I mean, it's not even somebody I interact with very often.

**Jerod Santo:** Well, do it Divya - wipe that person from your life.

**Divya Sasidharan:** Yeah, they're gone.

**Jerod Santo:** They're gone. They're not worthy of Contacts.

**Divya Sasidharan:** Canceled.

**Kevin Ball:** From what I can tell, I have to -- to delete them, I have to click into them, then I have to go into Edit, I have to do another... It's three clicks per duplicate to delete it. Oh, and then I have to confirm that I want to delete it, and now I'm down to nine instead of ten.

**Jerod Santo:** Is this an Android phone?

**Kevin Ball:** No, it's an iOS phone.

**Jerod Santo:** Oh, it's an iOS one. So pop it open on your Mac, where it's gonna be less clicks. Or iCloud... Oh yeah, you're on like a six-versions-old Mac; not gonna work. Upgrade, baby. Catalina, here comes Kball.

**Kevin Ball:** Uh-oh...

**Jerod Santo:** Alright, any other APIs we would like to discuss before we call it a day?

**Kevin Ball:** I just wanted to bring up the potential mash-up of the native file system access and WebVR, so that you can just start walking through a 3D exploration of your computer...

**Divya Sasidharan:** That's cool.

**Jerod Santo:** Oh, like on Jurassic Park, when she's navigating the UNIX system.

**Kevin Ball:** I think that would be Sci-Fi come to life, right?

**Jerod Santo:** I like it.

**Divya Sasidharan:** Yeah. Your photo album will be like museum-mode...

**Kevin Ball:** Yeah...!

**Divya Sasidharan:** \[laughs\] Except more like an Isabella Stewart Gardner Museum of random things...

**Kevin Ball:** Well, you know, Google has this stuff where it'll take photos and it'll automatically automate them...

**Divya Sasidharan:** Oh my gosh, they'll create videos of your -- with music...

**Kevin Ball:** Yeah. The next step is do that into AR, so take these people and make them 3D, and automatically--

**Divya Sasidharan:** Oh, my gosh...

**Kevin Ball:** Yeah. The future is coming. It's like winter - winter is coming.

**Jerod Santo:** The future is coming indeed. Any other mash-ups before we stop?

**Kevin Ball:** \[01:02:37.20\] I mean, I mentioned my vibration plus page visibility mash-up, right?

**Jerod Santo:** Yeah.

**Kevin Ball:** Anything else we can add into that to make it even more ridiculous...

**Divya Sasidharan:** So many possibilities...

**Jerod Santo:** Well, you could have the Web Speech API... So when you page away, it vibrates and says "Hey! What are you doing?! Don't forget about me!"

**Kevin Ball:** \[laughs\]

**Divya Sasidharan:** I feel like you could go battery status in vibration; that could be actually very useful... Like "Hey, you're running out of battery."

**Jerod Santo:** Wouldn't that drain your battery faster?

**Divya Sasidharan:** That's true... \[laughter\] But I often need a reminder. I almost feel like it should do similar to what cars do; there's still a little bit of juice, but it won't tell you... And then just vibrate.

**Jerod Santo:** I'd be happy with just an accurate battery reading. Right now it's like "I'm at 12%" and then it just turns off. If you could just get the percentages to work, I would be a happy camper.

**Kevin Ball:** How about the combo of the native file access and the WebUSB, so you can automatically steal stuff from your computer? \[unintelligible 01:03:33.06\] USBs can already run executable code, so that might not be useful, but I was just thinking... Like, "Plug in your device, go to this website" and it proceeds to dig through and copy everything.

**Jerod Santo:** Some of these features and ideas remind me of the stoner character that Ben Stiller played on -- what's the stoner movie? Half Baked. He would say "Have you ever looked at a $20 bill? Have you ever looked at a $20 on weed?" That was his whole shtick. And a lot of this just seems like "Hey, have you ever used USB? Have you ever used it in your browser?" \[laughter\] It's almost just like "Well, I have a computer. I can just use it in my computer. Why do I have to send it through a browser?"

I feel like maybe there's a little bit of a browser obsession that we have.

**Kevin Ball:** I do think the WebUSB thing is super-cool for updating firmware. We talked about that on some other episode.

**Jerod Santo:** Yeah, and I know Suz was very excited about this.

**Divya Sasidharan:** Yeah.

**Kevin Ball:** There's some really cool things that it enables... But there's also some potential for abuse.

**Divya Sasidharan:** Definitely.

**Jerod Santo:** Alright, that's JS Party for this week. If you'd like us to discuss a specific topic, or to talk to a specific guest, or if you like certain panelists more than others, and you're like "Hey, bring us more Divya", you can hit us up at Changelog.com/request, select JS Party in the dropdown and let us know what you'd like to hear on the podcast. We'd be happy to oblige.

That's all we've got for you this time. Hey, get out there and use some APIs. Use them wisely. Use them in your browsers.

**Kevin Ball:** If you're ever looking for inspiration, go to Feross' website. \[laughter\] TheMostAnnoyingWebsite.com, I think.

**Jerod Santo:** If you learn one thing from today's show, check out the Web Coffee API.

**Divya Sasidharan:** Oh, Web Coffee AND the Vibrations API together. \[laughter\]

**Jerod Santo:** Ooh! Divya wins the pod! I love that.
