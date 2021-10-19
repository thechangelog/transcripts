**Jerod Santo:** Alright everyone, welcome all to another JS Party... And we like to clear the stage right up front and say this is not - and I repeat, NOT - a JavaScript party. Do you hear me, Oracle's lawyers? This is a JS party, and we're not interested in any ceases or any desists, so... JS Party, thank you very much.

**Nick Nisi:** The Jerod Santo Party.

**Jerod Santo:** Oh yes, that does sound nice. Welcome to my party. My name is Jerod Santo, and I'm joined today by three awesome panelists. Nick Nisi, who promptly crawled out from underneath a pile of conference talks to be here with us... Nick, what is up, my man?

**Nick Nisi:** That is correct, yes. How are you doing?

**Jerod Santo:** Pretty good. Tell the people how many conference talks we have to go through by - what is it, Monday, or Tuesday of next week?

**Nick Nisi:** By Tuesday we have 160 conference talks to go through.

**Jerod Santo:** And how many have you read so far?

**Nick Nisi:** I have read nine.

**Jerod Santo:** Nine. So that's nine more than I have. \[laughter\]

**Kevin Ball:** I do not envy your weekend.

**Jerod Santo:** Yeah, exactly... So I'm just procrastinating for as long as I possibly can, and then I'll hate myself later. Safia Abdalla also here... Safia, it looks like you've been curling up with the Curl codebase lately...

**Safia Abdalla:** I have... Not just for the punny effect of it, with all this cold weather we're having in Chicago. I've been reading the Curl codebase and writing code anthropology blog posts about it. I actually just finished writing tomorrow's blog post a couple of minutes ago, so stay tuned for that!

**Jerod Santo:** Very cool. We did a show with Daniel Stenberg; I think it was "17 Years of Curl", and he told us all about his history with Curl, and we're actually having him back on the Changelog sometime this year, because he is now celebrating his 20th birthday - not his 20th, Curl's 20th birthday - which is pretty amazing for what is almost completely a one-man show in terms of the bulk of the code, so very cool.

We also have Kevin Ball here. Kevin, I listened back last week and I realized that Suz was referring to you as kball, and I wasn't; I was calling you Kevin. So now I feel like I was dissing you somehow. Is kball what we should call you from now on, or is Kevin cool? What do you like to be called?

**Kevin Ball:** Well, I'm more and more going by kball, professionally. There's 20 million Kevins out there, and I introduce myself and Kevin and five minutes later somebody says "Hey, what was your name again?" But if I say kball, people remember me, so go with kball.

**Jerod Santo:** Kball it is! Yeah, I also noticed when I try to @ mention you on Twitter from like the @JSPartyFM and I start typing out even 'kb', or 'kevin', there's a gazillion of them, so I feel your pain there.

**Kevin Ball:** \[04:08\] But only one kball.

**Jerod Santo:** That's right, and we've got him; we've got him here with us. I'm super excited, today's big topic - first of all, I wanna tell you what it's not. It's not personal digital assistants - remember those? Those are PDAs. It's not NWA, which is why they're considered to be one of the greatest and most influential groups in the history of hip-hop music; it's not NDAs or FrieNDAs (please don't do those). It's not the NRA, the NBA, the PBA, PBS, TBS, CBS or even TBN... Those are all TLAs, but they are not today's topic. That is PWAs, aka Progressive Web Apps.

Now, I know what the listeners might be thinking, especially if you're a hardcore and you've been listening to JS Party all the way back to episode \#4, which is when we had a show about PWAs... And yes, go back and listen to that; Alex, Mikeal and Rachel did a great job... But this is a different time, different panel, and things have changed with PWA.
We're here to talk about them today, and kball, this was your idea, so I'm gonna tee it off to you to go ahead and get us started, probably with the definition, and then we'll just go from there.

**Kevin Ball:** Yeah, for sure. Well, first I wanna say why have things changed, and the reason is it's no longer just Google. Back in the day, it was Google pushing this with Chrome, but now Safari has added support, Microsoft is treating PWAs as first-class citizens, so there's a whole new world when it comes to a PWA.

A PWA means "progressive web app", and it's kind of similar to thinking about progressive enhancement, where you're adding things -- in design, you would progressively enhance with JavaScript or things like that, except here it's talking about the network. So you want something that's going to function, in some form, even without a network connection or with a very slow network connection, and then scale up to be a full-featured web connected application.

**Jerod Santo:** So there's certain aspects of it which I guess are required... I mean, the PWA designation, first of all, is somewhat of a marketing term, or it's a loosey-goosey thing; there's checklists and stuff, but it's not like you're gonna go and be like "npm install pwa" or something like that. It's looseyer than that, right?

**Kevin Ball:** Oh yeah, it's much looser, and as we'll talk about each, one of the different platforms treats them a little bit differently, but there are some required features. You've gotta have service workers, which are super cool, even independent of the rest of this, and something worth talking about and diving into. You've gotta be running over HTTPS, so it's gotta be secure - same origin, and all these things tied into that. Then you need to have a manifest file, which is what makes your web application "installable." It describes it... It's similar to what you'd ship if you've ever built a browser extension or a native app where you have a manifest file that says "This is what this thing is. Here's where it lives, here's what the images are that you would use to show it on your homescreen", things like that.

**Safia Abdalla:** Can you talk a little bit about how these three things evolved to be the "required features"? What was the process for designating that if you want to be called progressive web app, you have to do at least these three things?

**Kevin Ball:** That's a great question. I don't know the behind the scenes on that, and one thing to remember is these things really started with Google pushing this. There's been this back and forth over time between Google and Apple, and Google and Apple saying web-focused, versus native app-focused, and Google started pushing these as a way to bridge the gap.

Now, I can give you my ideas for why those are the required ones. Service workers are kind of the minimal thing that you need in order to be able to function offline. They provide essentially a cash and proxy functionality where you can say okay, something that would go out to the web can store cache data and serve that up if it doesn't have a web access. HTTPS is saying "Well, we need these things to be secure if we wanna treat them as native applications; people need to be able to trust them in the same way."

\[08:11\] And the manifest is what gives you accessibility to sort of put something on the home screen and have it be installed. So those would be my thinking as to why those are the required sets, but I actually don't know the reasoning that went behind that.

**Nick Nisi:** I think that the actual first iteration of this kind of came from Apple in the first iPhone release, where the iPhone didn't really have an app store and there was no way to create native apps, and Steve Jobs' vision was HTML5 and Web 2.0 all the way for that... So you could from the very first iPhone install essentially a bookmark to the home screen. It was nothing like what they are today, but it was a way to kind of have that app-like functionality being able to extend the OS without doing that.

Then Apple really did nothing with that for years, and so it's good that Google has kind of picked that up and coined the term, and with these technologies really made it possible to have more of a native-like experience from just the web.

**Jerod Santo:** I remember when they announced that and it was like at the end of WWDC keynote, I believe, and they something like "We've got a really sweet solution for you", and everybody was pining to do apps on the iPhone, because I think it was the second round, iPhone 3G perhaps... Or maybe it was the original iPhone perhaps, and I think with the iPhone 3G maybe is when the App Store launched. I don't remember the history, but I do remember him say "We've got a really sweet solution", and he said web apps, basically (HTML), and the cloud just deflated as he said that...

The technology sucked back then. The amount of memory in the phone was so much that if you had a few open Safari tabs, they would refresh all the time; you couldn't really do it back then. Things have progressed, and Google has definitely pushed it.

**Safia Abdalla:** I was just gonna clarify, not just for myself, but for the audience - when you see a headline that says "Safari just added support for PWAs", what that's really saying is "Safari added features to the browser that would aid in the development of PWAs", things like maybe an API to access the cache, or service worker support, and things like that.

**Kevin Ball:** Yeah, they've turned on service workers is basically what it means.

**Nick Nisi:** Yeah, and very silently; they didn't even have an announcement about that in the release notes or anything.

**Safia Abdalla:** I'm having trouble phrasing this question, but is there a proactive effort behind the addition of these features, or do you think Apple is just trying to catch up with Google? Do you think there's a future for PWAs on iOS?

**Kevin Ball:** If you look at the drawbacks that iOS imposes, they have a really awkward install flow. They don't let you do the same -- Google lets you basically show a banner to install your... If you're on a website that is PWA, you can install it right there, and they don't have any way for you to do that. You have to know to click to Share, and then go to Bookmark it - essentially that old style... They don't support push notifications, they don't give you access to a bunch of the APIs that Android does, and they have some pretty weird limitations on data and uninstalling data if you haven't used it for a whole.

So my sense is they haven't fully bought in... And I don't know exactly why they've done anything, and that is probably pressure from the web world. Safari has kind of become the IE6 of modern browsers, in a lot of ways; they're lagging behind on so many dimensions, so they're probably feeling a lot of pressure there.

I know someone who works on their browser team - I haven't talked to her in years, but she was very, very adamant about web standards and pushing, so I'm sure that their engineers have a lot of desire to make this happen, but it doesn't seem to be a company priority.

**Safia Abdalla:** \[12:11\] Do you think that because iPhones and iOS are such popular devices with -- I don't wanna say the mass market, because I think iPhones are specifically popular in the West, but do you think the fact that there hasn't been a proactive effort to push PWAs by Apple, is like the average Joe and Jane aware of PWAs? Is this something that has reached the point where like the average consumer knows that they can use a web app?

**Nick Nisi:** I wouldn't think so. Kind of to what kball was saying with the awkwardness of even being able to install it, and if you look at some of the PWAs, the example apps out there, and real PWAs like Twitter Lite, and Lyft, and others... Apple will still show you the banner for installing the native app at the top of the screen, but there's no indication of really how to install the PWA, so it's very awkward. Kind of like what was mentioned, I just don't think that they're fully bought into it yet, so I think it's still an uphill battle for that.

**Jerod Santo:** I would challenge us to think about even ourselves, let alone mainstream mobile users... But how about tech developery, nerdy mobile users? I know what PWAs are, and I have zero installed on my phone. How about you guys? Am I an anomaly, or is it still just burgeoning, but hasn't arrived?

**Nick Nisi:** After service workers were supported in iOS, I installed Twitter Lite just to play with it and see what it's like, and I've had it on my phone ever since and I occasionally play with it, but I mostly use Tweetbot, so it's more of a curiosity rather than something that I actually use every day.

**Kevin Ball:** Yeah, I don't use them. This kind of brings up an interesting point of what is the audience for which these things really make sense? Even looking at -- as Safia pointed out, iOS is very much a Western phenomenon, you're talking the U.S. and the Western Europe are the ones where iOS has gotten huge penetration... But even in that audience, the behavior of folks on iOS devices versus Android devices is very different. There's documents, studies showing that folks would install way more applications on iOS, they're more willing to pay for things - all these different pieces, so they may not be the market for PWAs.

If I think about the folks that I interact with on a regular basis, the young man who's the most excited about PWAs lives in India, because you have this vast market of folks who are using slow connections, who are using either very low-end Android phones or feature phones that don't have space... If you dig through, one of the big benefits of a PWA is it's way smaller to install than a native application, but way less bandwidth-intensive than a web application. So you can target those folks who just don't have the data and the bandwidth to play with.

**Jerod Santo:** I think that's a very good point. One of the things that I'm thinking of - I don't have any of them installed on my phone, but yet Safari and mobile Safari on iOS is probably my top used app behind maybe mail, or maybe Tweetbot... But I live inside Safari tabs, and aren't these -- I mean, because PWA is very much like a progressively-enhanced thing and it's an opt-in to certain things, a lot of these features in these (and some are really just techniques) are still hugely beneficial, regardless of whether or not we're gonna hit "Install to Homescreen." You can still benefit your users without the last mile of getting your icon on their desktop.

**Safia Abdalla:** \[15:59\] That's a great point. I don't know if it was kball or Nick who was just discussing about their friend in India who had an interest in PWAs, but that reminded me of when I visited my hometown, which was probably pre when PWAs were really popular - this must have been like 2013 (2012 maybe)... And I'm from Sudan, so a pretty rural area; there's internet access, but it's not super fast or anything, and people tend to usually have Android phones... And one of the most popular ways for accessing things like Instagram and Facebook was mobile applications -- or sorry, not mobile applications; responsive mobile web-based apps.

It was a similar thing where people don't really make the jump to "I'm gonna add this to my homescreen and treat it like an app." It still very much resides within Safari, or Chrome, or whatever mobile browser they're using... But I think just the fact that -- for me it seems like progressive web apps are less a technology, as much as it is a way of forcing developers to think about design and programming in a certain way, and under certain constraints.

**Break:** \[17:35\]

**Jerod Santo:** Safia, you mentioned a set of methodologies, and as we've said a few times, progressively you can dip your toe in the water and then add more of these features, which make the mobile experience of a web app better. Let's talk about then what makes a minimally viable PWA... For instance, we have changelog.com - it's very much a content-focused site, but you can be signed in and there's lots to it, and we've had people ask (specifically one fella) even in our GitHub issues, "Hey, can you make this a PWA?" and I just said "Sure..." I don't really know what do I have to do to have answered that in the affirmative? So let's start there, and then we can build from there.

**Nick Nisi:** Google has a checklist that you can go through to say that. Now, I don't know if all of that is required for a minimum PWA, but it's a starting point.

**Jerod Santo:** Well, we talked about the required features - service workers, HTTPS and a manifest; we're already on HTTPS, so I guess check box one. When you say service workers is a required feature, what does that mean? Because a service worker is a generic API. You can use it for lots of stuff, right? What do you have to do with a service worker? Just invoke one or install one, and you've got a PWA? Is that helpful, or is it about offline caching? What's it about?

**Kevin Ball:** \[19:50\] I think it's really about providing some sort of interactive experience while you're offline. If we were to take the changelog.com example - is this either a static HTML, or when you logged in, is it acting basically as a single-page app, or is it hitting the server for every request to render HTML?

**Jerod Santo:** It hits a server every time.

**Kevin Ball:** My feeling is we'd probably need to rearchitect that a little bit, at least to have -- you could do something lightweight where you're actually hitting the server from a shell that pulls in the HTML, but basically you need some way to have an experience when there's no access to the server, and the service worker is what gives you that, because a service worker is basically an in-line proxy, something that is getting between your page/your app and the API, that can then cache things. So you could have a minimalistic experience that has your user info and, say, the last set of updates that was there cached, so that they have something to show you if there's no network connection.

**Safia Abdalla:** Yeah. While kball was just talking, I thought it would be fun to head over to changelog.com--

**Jerod Santo:** That's always fun.

**Safia Abdalla:** ...and run Lighthouse. \[laughs\] It's always fun. Lighthouse is the little automated tool that the Google team made that basically runs through the checklist of like PWA-type things to see how you measure up.

**Jerod Santo:** Are you sure you don't wanna run this on Zarf instead? I mean, this might be embarrassing for me... \[laughter\]

**Safia Abdalla:** Zarf is pretty good. There is a service where -- it's decent.

**Jerod Santo:** Alright. Tear us apart, what are we doing here?

**Safia Abdalla:** I'll start with what you performed best in, and then go down... So there's a section on the Lighthouse checklist for best practices, and you all scored 81% on that.

**Jerod Santo:** That's a B-, right?

**Safia Abdalla:** Yeah, but you're not gonna get grounded for that, so that's fine.

**Jerod Santo:** Okay, good.

**Safia Abdalla:** It looks like there's three things that it complained about. Four browser errors were logged onto the console, not using HTTP/2 for resources, and something about a manifest short name that was truncated when displayed on the home screen.

**Jerod Santo:** I have no idea what that means.

**Nick Nisi:** That's the name that -- like, if Changelog was like "The Awesome Changelog Website", if that was the title of this page, the short name would be what is actually displayed on the homescreen when you add it to a homescreen when you add it to a homescreen on Android or iOS. Actually, I don't know if iOS actually -- iOS does use that, but iOS allows you to change that, whereas Android I think doesn't.

**Jerod Santo:** Is that just a meta tag, basically?

**Nick Nisi:** It goes into manifest.json.

**Jerod Santo:** Okay.

**Safia Abdalla:** You did really good on SEO, you've got an 80%. Good job. There were just some links I guess that didn't have all the proper metadata.

**Jerod Santo:** Okay.

**Safia Abdalla:** 75% on Accessibility. Some things didn't have labels and color contrast. Progressive Web App is 55%... You just got grounded.

**Jerod Santo:** \[laughs\] Well, that's not grounded, that's failing. I just flunked.

**Safia Abdalla:** Like you've gotta repeat.

**Nick Nisi:** You gotta grade on a curve.

**Jerod Santo:** That's right. We've gotta remember we haven't been trying for that, so this is like a starting point for us; we can get better.

**Safia Abdalla:** I'll discuss some of the things that it says you did right. Congrats for using HTTPS and for redirecting all HTTP traffic to HTTPS. That was a plus.

**Jerod Santo:** Thank you.

**Safia Abdalla:** You've got pageload that is fast enough on a 3G networks, so woop for that.

**Jerod Santo:** Nice.

**Safia Abdalla:** It says that you also got a valid tag set up on like the viewport meta tag thing where you said it's like initial scale, or whatever... I'm not making any sense, but I think people know what I'm talking about. And content is sized correctly for the viewport, so I guess that's saying it's responsive... And it says "Contains some content when JavaScript is not available", so I guess it loads alright.

\[24:06\] You failed because you did not register a service worker - what kball was talking about earlier. It does not respond with HTTP status code 200 when offline. You don't prompt the user to install the web app; it's not configured with a custom splash screen, and the address bar does not match brand colors, which can be done, I guess, with the theme color meta tag.

**Jerod Santo:** The address bar? That's like super PWA, right? The address bar is matching our brand colors - actually, that's the kind of thing Adam will probably be into, so we should probably look into that.

**Safia Abdalla:** And it's got a nifty thing here also on this Lighthouse tool that says things you might wanna check manually, which is "Does your site work cross-browser? Do page transitions work smoothly? Does each page have a URL, so are things deeply-linkable?" So yeah, this is a cool tool. You did alright.

**Jerod Santo:** Thank you. We've got some real-time follow-up from the chat. Corvin points out that he ran it on Google.com, and that's like one of the best websites in the world, I hear... Google.com gets 55% as well on their progressive web app scoring, and so we're at least in decent company. Isn't this their idea? \[laughter\]

**Safia Abdalla:** Does anyone listening work at Google and wanna explain?

**Jerod Santo:** Yeah, that's the pot calling the kettle black, I believe...

**Kevin Ball:** Well, Google is targeting Android, right? And they bake search in, so they don't care. Search is already baked into all these mobile... What is interesting there though - so that's highlighting bullet point by bullet point, but it's not necessarily giving us any sense of how much of an architectural change would be needed to make it work. If your site is architected on this idea of "Everything is going back to the server to pull content", it's not clear, even if you're getting a reasonable score everywhere but service workers - I'm not sure if that's gonna be an easy implementation to do. Could we just put a service worker that caches HTML content? I don't know if that's sufficient.

**Jerod Santo:** I don't know either, and the question becomes... I mean, we're basically a content site, so think of Changelog.com -- for those who haven't been on the website for a while, of course, all of our podcasts are hosted there, and our homepage is filled with news items, which is... Think of it like a really amazing, like the best ever link log.

Besides what I've seen previously, what else could I cache and provide offline that would be of any use to somebody without hitting our server? There's really not much else there. Maybe recent episodes I've listened to, but now you're taking up a hundred megs of space... There's certain things, like LetsEncrypt, right? HTTPs - everybody should have HTTPS websites, but should everybody have PWAs? That's, I guess, the bigger question. Or is it for a certain class of things?

**Kevin Ball:** Good question. And some of it comes back to what Safia was saying about this not being just about something that we can handle offline behavior, but better performance, better interaction, right? If you can use a service worker to cache the most recent content and all your JavaScript and CSS or something like that, you can provide somebody something that feels like it's ready instantly, even if to interact with it you're gonna need to go back to the server, right? It's gonna be something that has a much better interaction paradigm for somebody who's on a slow network connection.

**Jerod Santo:** Fair enough. So aside from getting content when your connection is slow - that's basically the baseline here with service workers - the other big aspect of it is access to the homescreen. Now, there's certain people -- we have an article that we linked up to recently called "I built a PWA and published it into three app stores. Here's what I learned", and basically what they learned was it took a lot of work... Not building the PWA took a lot of work, but dealing with all the different app stores took a lot of work.

**Kevin Ball:** And particularly Apple.

**Jerod Santo:** Yes, particularly Apple. Is access to the app stores the carrot for these, or is it just the homepage?

**Kevin Ball:** Well, for everything but iOS, there's more than that; it's not just the app store, but like, if you install one of these things on Android, you get access to speech recognition APIs, you get access to other native functionality - I think you get access to Bluetooth and a couple other things. If you install one of these things on Windows via the Microsoft Store, you actually get first-class access to tons of Microsoft-specific APIs, even though this thing was built as a web page.

So it can get you access to a lot of other pieces. You can get push notification access, the ability to push notifications onto the device, which is huge for folks who are doing mobile marketing; that's one of the big pushes for getting people to install an app, so they can push junk to them. It's not great for consumers necessarily, but if they're done tastefully, that's valuable. All those things are available for devices that are not iOS.

**Safia Abdalla:** I'm curious to know, kball - it seems like a lot of the special features that you mentioned when it comes to something being a PWA on a mobile app is having access to these phone capabilities... So if you had a -- let's say you were consulting with a company and they came to you with their app, that was sort of like a web-based responsive app, and they were like "Oh, we wanna make this a PWA", what would you look for in their apps functionality or their codebase, where you would be like "You need to right away do these three things that would push you towards getting a PWA", or would you say "No, you're not really going to benefit that much from adding service workers to your app"?

**Kevin Ball:** \[30:17\] The first thing I look for is the same thing I'd look for in somebody who is thinking to package up a web app using PhoneGap, or something like that; or Cordova, which is what it's called now... Which is essentially "Do you have a clean separation between your front-end and your back-end? Is there a well-defined set of APIs that you're calling to get data, and your rendering is happening on the front-end, or is it fuzzy?" A lot of older applications - they may have pieces that are behaving kind of in a single-page app fashion, but they're also loading data, and they kind of render up an HTML page that also includes this app, and they do that to handle authentication and various other things.

If you've got that kind of inter-mingling, it's gonna be a little bit more of a pain to separate things out and make it feel clean, whereas if you've got a clean separation and you're already handling authentication and all of your API calls, expecting that your front-end is separated cleanly from your back-end, it's gonna be a lot simpler to put in a caching layer, to put in something separate, to basically treat this thing as something that will work offline.

When I look at folks who are saying, "Hey, I wanna package up a Cordova app", that's the first thing I look for - how well separated are your front-end and your back-end? There's architectural questions about how are you fetching data... Something I haven't had the chance to play around with that much, but I think makes for some very interesting things here is are you using a GraphQL-based fetch, where your back-end is essentially just serving up exactly what you want, or are you using a more REST-based approach, where you're fetching resources and kind of keeping track of those?

My intuition is it might be easier to do a true caching layer if you're fetching all the resources in a different way, but that might be just because I haven't fully wrapped my head around what GraphQL enables. The reason I go there is because I think in GraphQL you're fetching exactly what you want right now, which is great, but if you wanna provide sort of a full experience, that what you want is gonna change over time, so you'd have to think ahead of time "Okay, what's my base set? Okay, fetch that. Make sure I cache that."

Now that I'm talking about it, I don't know that that would actually be any harder, but it would be something to look at... It's like, "What is the structure of the API that this thing is talking to, and does it make for something that's gonna be easily cacheable?"

**Jerod Santo:** So we have a few example apps out there, which are bigger websites that usually have native apps; some of them still do. Twitter is the big one, which has Twitter Lite, and still has the Twitter mobile app for iOS and (I believe) Android, although I think they sunsetted the Mac app, which was a shame, because it was in disrepair. Anyhow... We have Twitter Lite.

Pinterest now has a PWA, and they recently released some metrics that say that their engagement on the Pinterest PWA has beaten their previous web experience, and then they said "...as well as their native app engagement", which seems pretty compelling if it's true. I don't know why they would say it if it wasn't true, but it seems almost unbelievable that it was more engaging than their native app.

Has anybody used these? Nick, you mentioned that you had Twitter Lite installed... Would you be happy with this, instead of your Tweetbot? I mean, I guess Tweetbot would be an unfair comparison... But your Twitter.app on your phone?

**Nick Nisi:** \[33:46\] Definitely. Aside from not being able to get push notifications, which actually could be a feature, it's a pretty nice experience, really. It's a little weird when you install it; Safia installed it during the break and ran into the same issues that I had installing it over again - it's just not really working right away... And also the apps, and I'm just talking specifically on iOS - it's still not quite there yet on iOS. It does feel like a native app once it's installed and actually I'm logged in and running, it's very smooth, very quick to do things, to navigate around, to tweet and do all of that, but it doesn't really have any integration with the rest of iOS at all. So any kind of external links are going to be thrown into a different app (Safari), and then there's really no way to get back to Twitter Lite from Safari without having to go back; it's not going to open Twitter.com in that PWA.

So it doesn't feel at home yet on iOS, but it is nice. I do like the idea that you can just go to the app in Safari and kind of try it before you install it, so you don't really have to do all of that; that's probably one of the biggest benefits of PWAs.

**Kevin Ball:** That's a really interesting point. It reminds me of something that a gentleman named Kieran Farr was talking about with WebVR, and why WebVR was a substantially better platform than native VR, because it lets you engage progressively. It lets you start and see some of the experience, and then get a little bit deeper, and then get a little bit deeper and a little bit deeper, and PWAs have the potential at least to give us that same thing for mobile applications.

I play with it on the web, and then get a little bit deeper and give it some permissions, and install it, and it feels as good as native in theory, or it could get there, but I was able to try that out. I had the time and not have to commit and give it a whole bunch of permissions up front, and whatever stuff.

**Nick Nisi:** Right. And an added benefit - you didn't have to download a 70 MB app to do anything with it; you could just download exactly what you were playing with, and then once you decided to install it, then you get to download everything else, but you don't have to do that up front.

**Kevin Ball:** The size thing is big, too. I was just glancing, as you were talking, through the Pinterest study, and they compare the size of an Android app download - about 10 MB, iOS - 56 MB, and the PWA, when you first install it, it's 150 kb, and it'll progressively load resources as it needs it.

**Jerod Santo:** That's a huge difference, it is.

**Kevin Ball:** And if you're on like a feature phone or something like that, where you have a few megabytes of memory, you're not even on one of these smartphones, going back to our thing about the audience - huge parts of the developing world, they're still on feature phones with barely any space.

**Break:** \[36:54\]

**Jerod Santo:** So we're definitely seeing some specific use cases where a PWA makes tons of sense, and then we're seeing other places where it's like "Well, you could benefit from certain features...", and we all agree that giving offline access or providing a cursory user experience to people who haven't gotten the full access to our data yet is a win all around... But thinking about what's really the sweet spot for PWAs, it seems like Pinterest may have found one, the Twitter Lite app makes a whole bunch of sense...

\[37:56\] I was thinking more about like what could Changelog.com be that's different than just a feed of links, and I was thinking on the audio side - one app which is on most people's phones is a podcast player, so I guess my question to the panel would be... Would it be weird or would it be appropriate -- maybe you go to Changelog.com website and it is what it is, it's news upfront, but when you say "Install to homescreen" or whatever you do, or maybe even in the app stores, when you install it, it's a different experience... Maybe it's a podcast player that has just Changelog network shows, but you could pre-fetch them, you could say "Save this for offline", you could create queues, which would be local... I guess, first of all, would that be off-putting, to have two separate experiences, or is that something people are doing?
Then secondly, would limitations on a phone -- I don't know how much data could we download... I just wanna open that up for you guys' thoughts.

**Kevin Ball:** Well, I already used the podcast app, and I think a lot of folks do, but what I don't get through that is the livestream, so what might be neat is "Hey, pull this thing down", and suddenly I've got a livestream capability that can do more in terms of pre-fetch or do whatever; maybe it's not quite live, but it's slightly behind live, and then stores it... Right now you have to log on live at that time to get the unfiltered and hear us joking around about rap, things like that, but maybe with the app you get that for the rest of the day, or something.

**Jerod Santo:** That's a good idea. Would it be a super-weird experience to have a website, and then when you say "Install to homepage" it's like a different thing altogether? Or would that be welcomed by people, do you think?

**Safia Abdalla:** I feel like it would be such a weird experience for the transition from a web app running on Safari to a progressive web app on my homescreen to be different... So on the break, I installed Pinterest, which as I'm scrolling through right now, I realize was a really bad decision, because it looks like I might have a new addiction... But you know, I have the same experience I had with Twitter where I signed up for a Pinterest account, and then set up my account or whatever, and then I went and did the "Save to screen" thing, and what I was expecting in like a dream Universe was basically everything I was doing in the browser would now be in an app on my screen, and I could switch, and I'd be on my feet again and ready to rock and roll... But it didn't work; I couldn't log in, weird things were happening, everything's breaking, the Universe is terrible...

So yeah, that experience -- and the same with Twitter, where it wasn't a seamless jump into the app from the web application. It kind of just turned me off a little bit, because I was expecting something more.

**Jerod Santo:** Maybe there's like an uncanny valley.

**Safia Abdalla:** Yeah, maybe it's the language that Apple uses where it says "Add to homescreen" - when I think about that, it feels like I'm adding whatever I was just doing to the homescreen, like it shouldn't be different; it's just like almost a way to organize it, I don't know... Am I making sense?

**Nick Nisi:** Do you think that that could be a limitation of iOS, in the way that PWAs are currently treated?

**Safia Abdalla:** Yeah. I should add that this is my experience on an iPhone 6s running iOS that's like very old and has been through a lot. My negative experiences thus far with both the Twitter PWA and the Pinterest PWA might just be my bad luck... But sans what device I was on, if I was turning something into an app on my homescreen, I expect the experience to be the same. As a user, one of the reasons I use a computer is because I can reliably get the same information and experience everytime I log on, and there's no surprises.

**Kevin Ball:** \[41:52\] I think that makes sense, and coming back to the point that was being made at the end of the last segment, you kind of want this to be progressive; you want it to kind of draw you further and further into the experience, so I don't think you'd necessarily want to take away functionality, but you might add more functionality.

**Jerod Santo:** Right, that makes a lot of sense. You don't wanna jolt people out of what their expectations are - principally surprise and all that, where you'd be like "Surprise! Now, we're a podcast app!" and it's like "Wait a second, I just wanted Changelog on my desktop." We may be suffering a little bit here from lack of diversity and mobile device usage, as -- kball, I'm not sure about you, but I think the rest of us are on iOS as our daily drivers...

**Kevin Ball:** Me too.

**Jerod Santo:** You as well, so we're four for four there... So we're not representing the Android experience very well - I guess we'll have to just apologize for that, and then maybe move on to something completely different, which is Microsoft's implementation. Kball, tell us about what's going on with the Microsoft store there.

**Kevin Ball:** Yeah, so that was something that was pretty interesting - Microsoft published a post saying "Hey, welcome PWAs to the Microsoft Store", and they have the ability for any progressive web app to be a first-class citizen in the store. You discover it in the store, you find it. They are adding things automatically, so they're scraping the web - they already do that for Edge - and if they find something as a PWA that scores highly or whatever, they will add it automatically to their store, to be discovered there. They also let you submit things in sort of the standard way.

What they do is they say "If you install through the store, then your PWA gets treated as a first-class citizen by Windows." They inject a whole bunch of Microsoft-specific APIs into your global JavaScript scope, so suddenly you can access all of these deep-in-the-guts pieces of Windows through JavaScript, and essentially do anything that any other app in the Microsoft ecosystem can.

It's different than the approach that Google has taken with Android, where they also exposed a bunch of things, but they've kind of tried to go through the standards bodies and say "Hey, we're gonna create a standard for how you access push notifications. It's a push API. We're gonna create a standard for how you access voice recognition, and then implement that in Chrome", and what have you.

Microsoft is basically saying "You know what, we'll just throw all of our APIs that are already implemented at you, and if you wanna use them, you can."

**Safia Abdalla:** And one of the things that those conversations jogged my memory about - Microsoft supporting PWAs is PWA support on Chromebooks, with Chrome OS. I own a sad little Chromebook that I use sometimes for writing, and stuff.

**Jerod Santo:** \[laughs\] Why is it sad?

**Safia Abdalla:** You know, he's got 32 GB of storage space, 2 GB of memory. He's like the baby of the computer family.

**Kevin Ball:** Have you used a Chromebook? They're kind of sad.

**Jerod Santo:** Are they? I've never used one.

**Safia Abdalla:** Yeah, I use them exclusively for writing.

**Jerod Santo:** Do you do that because the platform constrains you to only writing, because it can't do much else, or why do you do that?

**Safia Abdalla:** Oh, I do it because my big distraction in life if I can't write or do anything is to code, so since I can't really code on a Chromebook... I know some people do, but I personally don't; it forces me to concentrate on writing.

**Kevin Ball:** I had to do that once, code on a Chromebook... It was an interesting experience. What I ended up doing - I'm kind of old school, so I do all my development in the terminal; I use Tmux and Vim through everything...

**Nick Nisi:** Yes...!

**Kevin Ball:** So what I ended up doing is setting up a virtual server with an environment and just using the Chromebook to SSH in. So then most of my dev environment was just normal, because I'm using Vim in too much the same way I would otherwise... However, debugging was a pain in the ass, and dealing with assets... Because suddenly, any sort of local asset, I've gotta figure out "How do I get it up to my virtual server, and if it's not quite right, how am I gonna manipulate it and tinker with it?" That was where I really felt the pain.

**Jerod Santo:** \[46:02\] I've been considering a setup like that for streaming, because when I livecode on Twitch, my laptop starts on fire, because it's doing all the things... And specifically, our app is in Elixir, so that's a compiled language (to Erlang), and compilation times, which are normally like milliseconds and I don't even notice them, when I'm livestreaming and my video is doing its thing and my network is doing its thing, all of a sudden compile times take forever, and so now people are watching me livecode and we're like "Now we're gonna compile this and we're gonna sit here and twiddle our thumbs."

So I was like, "I need some sort of like remote box that's actually doing the heavylifting." I'm a terminal guy as well, although not as big of a Vim fan as you and Nick are, but yeah, I need some sort of setup like that, and I wouldn't do a Chromebook, but I'm just thinking of a remote coding setup that I could use, so...

**Safia Abdalla:** For those who are interested in Chromebooks for like productivity type stuff, I googled around and it looks like in response to Microsoft supporting PWAs on their desktop, Google started adding support for PWAs on Chrome OS, and it's under a feature flag, but it looks like you can do most of the same things, like adding it to your shelf, it autodetects when something is a PWA... The Starbucks app looks like it's the example they're referencing. So it's interesting to see this not just happening on mobile, where we think of it, but also on the desktop. It's kind of cool.

**Jerod Santo:** Well, let's round out the conversation by getting big picture perhaps again, and seeing if we can have any real actionable takeaways... So I guess I would start that conversation with this question - does what we've either discussed (or for some of us, like myself, have learned) today about the new state of support for PWAs and really the benefits of them, does this compel us in any way to change our day-to-day development practices, or... Safia, are you gonna go back to Zarf and install a manifest file if there is one? What are we gonna do in response to this, and then maybe a bigger question is what should our fellow developers be doing now with regard to these things?

**Safia Abdalla:** Yeah, so I do have a service worker running on Zarf right now; it's not the most robust thing in the world, but there are some ways that I can think of improving the progressive web app experience on Zarf that have been on my to-do list for a long time... And most of them don't deal with any of the things that we discussed explicitly; a lot of them are just about improving pageload performance and improving time to first meaningful paint, first interaction, and things like that.

Those are the big priorities for me... And I wouldn't say they're new priorities; they're things I knew I've had to do for a while, but haven't had the chance to get around to them... But now I'm reprioritizing then.

**Nick Nisi:** I haven't really worked on any client work where service workers or progressive web apps were really necessary, and I haven't really personally dug into them because they haven't been available on iOS, and I've run iOS forever personally... But now that they are there, I think that I'm definitely going to be on the lookout for potential ways to incorporate some of the features, if not all of them, in the future, on future things that I work on.

**Jerod Santo:** Maybe you could get nejsconf.com as offline available, so you could have the schedule even if you have your Wi-Fi turned off.

**Nick Nisi:** That would be really cool, actually. That's the perfect example.

**Jerod Santo:** Yeah, especially because conferences are the worst place for internet access, right? It's usually almost always Wi-Fi problems, so then everybody is on Verizon or AT&T's network, so those are bogged down as well.

**Nick Nisi:** \[50:00\] That's really funny, there's that app that -- gosh, I can't remember the name of it now, but it's basically like a JSFiddle for React native, and it lets you do that... I've seen examples of conference apps written in that so that you can install it basically outside of the app store, but a progressive web app would be much better.

**Jerod Santo:** Yeah, because don't make me install something... That's just my attitude towards things, unless it's like a daily use thing for a drive-by use case, like "Let me go to a website..." And again, going back to that conversation of not just progressively adding features, but as a user, what do we say? Slowly introducing it to you. Honestly, I love having tabs open in Safari, and that's as far as I'm probably gonna take it for a conference or for a drive-by scenario, so make that experience awesome!

**Kevin Ball:** Events and conferences is a perfect use case, just thinking about that more, right? Like, you go to the website and get a prompt saying "Hey, are you coming to the event? Add this to your homescreen and you'll always have the schedule." Then you get rid of it when you're done, and it doesn't matter that you don't have push notifications, or even the thing with -- you know, iOS will clear out your service workers if you don't use it for a few weeks; it doesn't matter. You're at a one-time event for a week, or a weekend, or what have you? Get all the info you need and have it locally without having to install a clunky, pain-in-the-butt application... Because there are these white label conference apps, and they're all terrible. Just have a simple mobile website that has your content when you need it, even if you don't have a connection. Boom!

**Jerod Santo:** Alright, you've convinced me. Nick, make it a reality.

**Nick Nisi:** Yes, we're doing that.

**Kevin Ball:** Are you seeing in the talks that people are proposing anybody talking about PWAs or service workers, or...?

**Jerod Santo:** Well, you heard that I read zero of them.

**Nick Nisi:** Not in the nine that I've gone over yet, but... Maybe.

**Jerod Santo:** \[laughs\] And have I scanned the topics? No, I haven't done anything; I'm the worst. Alright, parting thoughts as we wrap this up? Takeaways, action steps? Are we perhaps - and many people - still waiting for maybe a little bit better iOS support? Or go at it...? What would be your parting words with regard to this topic?

**Safia Abdalla:** I think they're interesting; it's definitely hard for me as an iPhone-owning 20-something with high-speed internet access to truly appreciate PWAs, so as a consumer I'm not too interested in them, unfortunately. As a developer, I am interested in them as a way to make sure that all of my customers are getting resilient and reliable access to the product I'm building.

**Nick Nisi:** My parting thought is gonna be based on our most recent topic, which is we might be thinking too big. When we think about these complex applications, the support is not there to necessarily make those feel as good in a PWA as it is in a native application. But when we think about these little micro-cases, like the conference website, the event website, things like that, suddenly we can have a dramatic shift forward from the status quo, with something that is really a very minor change.

\[53:01\] So I think we should possibly start thinking about what are the other small examples, that aren't these massive, complex applications, but places where just having this ability to save some basic content to be in a non-network situation for a short time is gonna be really valuable. Train schedules, events, other types of things where you have specific information you're gonna want to access, and you're not sure if you're gonna be in a networked scenario when you want to access it.

**Kevin Ball:** I think it'll get better. I like that Google is pushing this, kind of like you said, through standards, rather than just kind of throwing everything at it like Microsoft is doing... Pushing through standards means that there is a greater chance that a lot of the features that I would really like to see coming, things like push notifications, maybe geofencing along with that, and maybe more access to lower-level APIs on iOS specifically, because that's what I have. I think it will get better through those standard pushes.

**Jerod Santo:** Very cool. One last question coming in from the chat. @adamstac asks "Can you install from a particular URL, as opposed to going to Twitter.com?" or maybe the answer is lite.twitter.com, if it's a subdomain. But can you have like a subsection of your website be a PWA, or does the whole thing have to be one?

**Nick Nisi:** Yes, I think you can set what the top-level of what that is in the manifest, and then from there the service worker can have access at that level, I think.

**Jerod Santo:** Let's call that a wrap, folks. Hey, if you're not listening live - well, we just don't know what's wrong with y'all, because this is a community party that we have every Thursday at lunchtime(ish), depending on your local timezone... So come hang out, changelog.com/jsparty, you'll find a live link there; join our community Slack and Slack with us in real-time. You can participate in the show, much like Corvin and Adam have this time around.

That's it for this week. Until then, I guess just keep partying on your own, until we can party together.

**Nick Nisi:** Are you gonna rap for us?

**Jerod Santo:** This is a wrap, but I do not have a rap. The show is a wrap! See what I did there? I have a poorly-worded pun instead. Are you satisfied...?
