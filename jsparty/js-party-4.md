**Mikeal Rogers:** Hey, welcome to JS Party, where it's a party every week with Javascript. I'm gonna say that every time, until Alex's head explodes. Alright, so today we're gonna dive right into it and we're gonna talk about PWAs, we're gonna talk about Glitch, which is Jenn Schiffer's new thing, who is the best person in the world...

**Jenn Schiffer:** It's not just Jen...

**Alex Sexton:** Chill...

**Mikeal Rogers:** And we're gonna talk about everybody's favorite part of Javascript, the Date object. Alright, to kick it off - PWAs (Progressive Web Applications). This is a term that gets thrown around all the time, it's a term that I don't think anybody actually understands what it means... Rachel, based on your interpretation of what this means from maybe Reddit threads or tweets or headlines of things, what do you think Progressive Web Apps are?

**Rachel White:** First of all, I would never read anything about programming on Reddit. Second of all, I literally know nothing, even though I've seen people talk about it... So my interpretation of what a Progressive Web App is is just taking the name and assuming that it's not an application that deals with politics that have advancing views...

**Alex Sexton:** It's socially liberal.

**Mikeal Rogers:** It's not Conservative Web Applications...

**Alex Sexton:** Exactly.

**Rachel White:** Is it an app that progressively gets better...? Is it something that you improve on over time, or is it something -- I don't know, I have no idea what it is.

**Alex Sexton:** First step to shipping a Progressive Web Application is you just ship a white screen. You tweet it out, and that's your application. Then you're like, "Boom! A button." It progressively got better. Next week, "Boom! Three buttons." Better still.

**Mikeal Rogers:** Three buttons are always better than one button, no matter what it is. \[laughter\] No matter what the use case is, you need three buttons.

**Rachel White:** So what are the enhancements then? What is it doing...? Obviously, it's an application, but I wanna know what is the progressive part and what is the enhancement part? What does it take in order for it to be categorized as this thing?

**Alex Sexton:** Cool, so we'll start with your second question, which is what is the enhancement part? And I'll answer that by saying no one said the word enhancement until you did. I think you're getting that confused with progressive enhancement... Which is actually pretty related, so you're not all the way out of line there.

**Mikeal Rogers:** So wait a second... Progressive enhancement and Progressive Web Applications are two completely different things?

**Alex Sexton:** This is a loaded question...

**Mikeal Rogers:** We're looking at Alex like it's his fault, like he came up with this... \[laughs\]

**Alex Sexton:** They're absolutely in the same vein... They kind of come from two historically different places.

**Rachel White:** Wait, so progressive enhancements - would those be enhancements that are made progressively, and then a progressive -- I don't know, just tell me... \[laughs\]

**Alex Sexton:** So it has less to do with the development cycle. Progressive enhancement for a development cycle would mean like you're fixing bugs and making things better over time. Progressive enhancement generally implies that..

**Rachel White:** ...you're doing your job!

**Alex Sexton:** ...you build a web application that works on the worst browser, and then as browsers support features, then you can make the experience better, you can enhance the experience progressively based on those feature tests.

\[00:04:03.04\] Progressive enhancement - the word comes from the battled days when 20% of the internet disabled Javascript... So the whole mantra was "Make sure your website works without Javascript, and then progressively enhance it to have any Javascript whatsoever." That's where that term comes from.

Now it has been co-opted through each generation beautifully - I don't think that's a bad thing - so now progressive enhancement often implies that you're building a progressive web app, but a progressive web app is like a new term, mostly from the Google ilk, that I can break down if we're done doing the guessing section. I don't wanna ruin it for anybody. \[laughs\]

**Mikeal Rogers:** You can explain what it is now, that's okay.

**Alex Sexton:** Okay, cool. So first of all, if you wanna follow along at home, Google kind of is the pusher behind the term Progressive Web App. I'm not sure it came from them, but I'm pretty sure it came from them. They have a checklist - you can go to developers.google.com/web/progressive-web-apps/checklist and there's this simple 92-point checklist (maybe it's not 92; it's like 25, or something)...

**Mikeal Rogers:** Based on the simplicity of the URL, I'm guessing it's about 92.

**Alex Sexton:** Yeah... No, it's actually not bad. It's broken into sections... Baseline, and then Exemplary Progressive Web Apps. So before I go into this checklist, a Progressive Web App is generally something that is approaching a native app, in the sense that it loads offline and it's fast and secure and responsive on mobile devices; that's kind of like where it comes from.

Progressive Web App means that it can work on a desktop, but it also can work on your phone offline. The progressive enhancement that's happening here is that it is -- Mikeal brought it up last week as the offline-first crowd... There's another angle in the same space, which is -- the progressiveness is if you have a network, then you can enhance the experience, but if you don't have a network, your application still functions and works, much like a native app often does.

So really, if you boil down to everything, the word Progressive Web App really comes from the service worker kind of baseline, and you can actually do it without service workers of like old tech and some magic and some stuff... But really, service workers are what you need to build a modern Progressive Web App, and then kind of building from there is where it goes.

I can go through the checklist, but does that make sense so far?

**Rachel White:** Yeah, that does make sense... Just for anybody that doesn't know what service workers are - it's basically a script that you run that is separate from the stuff on your web page, that lets you have other things that you can -- I'm really bad at explaining things... So you can use it for having that offline loading, or handling push notifications or other things that don't necessarily need to get loaded on the DOM. Does that make sense?

**Alex Sexton:** Yeah. I think a key thing to know about service workers is that they're installed; there's not like an install pop-up, but they're inherently installed in cache, and then the installed service worker runs anytime that URL hits, and then they're inherently also coupled with a cache object. So those two primitives are very powerful, because once I go to AlexSexton.com, AlexSexton.com can install a service worker.

\[00:08:00.19\] One of the most beautiful things about service workers is that by definition on the first load you won't have one, so it forces -- we talked a little bit about this with AMP, they're trying to force people to have fast website, but they might actually be doing the opposite in some cases.

In this case, what they wanna force people is to work offline, but they don't want people to build websites that assume anything, assume a good network connection. Because once you're offline, everything's locally cached. The most beautiful thing about service workers is that the first time you load a page, the service worker cannot run because it couldn't have installed yet. So your website has to work on browsers that don't support service workers at all, as well as on the first load for browsers that do support it.

And on that first load, you can install the service worker, and then from then on out, that Javascript can run prior to the request for the page being made. That's kind of the key ingredient there - you now have Javascript that can run without any network request on future requests. So what you may do is say, "Alright, use my cache..." -- you can choose what to cache and you can choose what not to cache on all sorts of stuff. So I have a service worker, I load up a web page, and it doesn't use the service worker the first time, because I've never loaded this web page before, and then eventually some Javascript runs and says, "Okay, play this service worker onto AlexSexton.com". Then I reload AlexSexton.com and then I can say "Alright, I have a copy of the main page in my cache already. I'm just going to capture the network request and cut it off and not let it actually go out to the web, and just return what I have."

Then I'll actually go ahead -- if I have a network connection, I'm gonna go see if there are any updates, like "Does Alex have a new blog entry?" And if it does, I can kind of put a little thing on the top that says "There are new entries here" or just immediately pop it in, depending on the experience, or something like that.

So the idea is that data that you already have, a request that you already have can immediately be loaded, and then anything new in updates can come in secondarily. You can kind of manage that as is required by your application. Does that make sense for service workers?

**Rachel White:** Yes!

**Alex Sexton:** Cool. So that's service workers, which is just one part of Progressive Web Apps. I think the key ingredient to why this is a thing with a name -- because the rest is gonna not come as a surprise to many people... The checklist has things like "Serving the site over HTTPS", so you need a good TLS cert... But again, service workers is important here, because service workers don't work on non-HTTPS sites, so you could not do the service worker thing without an HTTPS site. Quick callout to LetsEncrypt, if you need a free cert that updates automatically.

The other thing is that it works on mobile, so it should be a responsive page - that's part of a progressive web app. It's kind of like... Responsive++ is maybe another way of thinking of Progressive Web Apps. It's a responsive web app that works like a mobile app, but also works offline with service workers.

So it works on mobile devices, and then it also works offline. Maybe not completely offline... You definitely need network connections for a real-time chat, and stuff like that. It's not like native apps don't need a network connection to do networky things... But you at least get an experience, and it can tell you "Hey, we don't have a network connection, maybe find your settings and change your Wi-Fi" or whatever.

**Rachel White:** Cool.

**Alex Sexton:** \[00:11:49.17\] Also, one thing that exists on Android is an "Add To Homescreen" button. You can add metadata to your web app and say "Allow this to be added to the home screen", and then using service workers you can kind of add a web page as a native app, directly to your home screen, and then you can click on it like an app, and the URL bar goes away, and all that kind of stuff... And it works exactly like an app.

That's on their essential checklist... I mean, it's not gonna work on half of the phones in existence for most audiences. That is very good, because it's not that difficult, but again, it's progressive in the sense that not everyone's gonna be able to use that.

The other things are mostly like it's cross-browser, so it still fits into web, and it's fast on 3G, so you're only loading critical CSS. These are a lot of things that are difficult to measure... "Fast" is subjective, in the sense that every website is slow, and we just don't agree on how extremely slow they are. Then that's like fast transitions in URLs, and stuff like that.

Server rendering gets into the Exemplary area... There's a bunch of things you can add; that way, you can have SEO and good history APIs and all sorts of different things, but I think those are less important for this discussion.

**Rachel White:** So who does this benefit? If a lot of it wouldn't necessarily be accessible for everyone right now, who would use this? Who would use these practices?

**Alex Sexton:** That's kind of why the word "progressive" is in there... That specific part isn't accessible to people with iOS devices, but it doesn't actually hurt their experience while they have a network connection. They don't have service workers or "Add To Home Screen", but when they go to the web page, it'll still be fast, it'll still be responsive, it'll still look and work exactly like it works on the other things... It's just once they have a crappy network connection or lose their network connection, it'll be the same experience they're used to across all their other websites. So it progressively gets better for people with more features... And I think I have also a catch-up here... I hate Safari for specifically service workers and some internationalization things, but I think they'll eventually cave here.

**Rachel White:** Cool. So the idea is just making it better for everybody, and there's not gonna be a degradation of services for people that might not have access to...

**Alex Sexton:** Right... And according to the guidelines, it should actually be better than the normal website because it's fast to load over 3G and has good caching principles, even outside of different things. But yeah, I think the key here is that Progressive Web Apps are web apps that are really going hard after a native experience. I think that's the end goal here, even if it's not necessarily explicitly stated. Native really eats our lunch in some cases, and if you really nail at a Progressive Web App, there's not a whole lot of different feel of a Progressive Web App to a native app, and then also it works on the web and is of the web, and is open and meets all the standards of URLs and all the things that we love and wanna keep about the web.

So the idea is it's the best of both worlds, and it doesn't break all the use cases. I think they're actively good... I'm sure some of the "Install to Home Screen" and stuff still has a way to go as far as security stuff; service workers have some security things, but I think it's all absolutely a great direction for the web, and kind of will help bring us into the next generation of user experiences that people expect, because of the native landscape.

**Mikeal Rogers:** So being that the base level here is the service workers, and being that service workers aren't supported in Edge yet, they're not supported in Safari (mobile or desktop), how much of this is Google just kind of pushing this on everybody, and how much of it is beyond that and much more widely supported than that?

**Alex Sexton:** \[00:16:15.01\] Pretty much everyone has intent to ship service workers, so it absolutely benefits you to build a website with service workers to get 40% of the people who use Android, or whatever... Like, that's not nothing; we do things for far fewer people. But as soon as service workers are turned on in these next versions of these browsers, you'll immediately reap both benefits, and that's kind of like the whole point.

I think everyone agrees that it's still early days, but it'll be a lot longer... If you think the service worker experience is good, I think Safari will implement it much more quickly if there are people actually building stuff with service workers, if that makes sense. So it's kind of push-pull. If no one builds anything with it, Safari won't ever build it and the experience will be worse. But if you build it now, you're gonna have to use the fallback, which is the regular old, poor network for Safari. Does that make sense?

**Rachel White:** Yes!

**Alex Sexton:** It's like an early adopter situation, in the sense that it's early for Safari and late for Google, but I think for the web, still not a whole lot of people are doing this, but absolutely you should, if you can.

They also have a tool called the Lighthouse tool that will run over your app and give you your score against all this... So you can search for "Google Web Developer Lighthouse Progressive Web App" and I'm sure it will come up.

**Mikeal Rogers:** Yeah... I feel like, why couldn't we have just talked about service workers? This seems like we have a lot of extra acronyms and ideas, but most of it seems to be really just about service workers.

**Alex Sexton:** I'd say it's responsive design + service workers, if that's fair.

**Mikeal Rogers:** Okay.

**Alex Sexton:** And responsive design is absolutely available on pretty much every platform. Mobile is the reason for all of this. People have solid desktop connections if they have a desktop, but there are now more phones than desktops. So I think that the fact that these web apps work on mobile -- the full design, not just like "You have stretchy divs" or whatever... Like, your interfaces adapt to the style and user experience that people would expect of a mobile device. I think that's critical to Progressive Web Apps.

**Mikeal Rogers:** Right, right. The way that you push around data for poor networks as well, and for offline, is very different. But a lot of those offline use cases seem to be either deprioritized or just not very visible in the Progressive Web App story. It seems like it's just become a shorthand for service workers in the meantime. But maybe as more people build offline apps, that'll become part of the story and we just have an early acronym here that hasn't really gotten filled out.

**Alex Sexton:** Yeah. Someone mentioned on Twitter, Dayton Lowell, that Safari does have "Add to Home Screen." It doesn't do any service worker stuff, it's just a link to a page. It's had that for a long time.

If you download one of Google's beta browsers or something like that, it actually says "Install Application." There are also things that I've seen demoed - I'm pretty sure they're live - to where if you visit a progressive web app enough times on the internet, Google will helpfully say "Hey, would you like to install this as an offline app on your homescreen?" So it's kind of like this beautiful world where the web becomes the app store again. It's a pipedream, I'm sure, but the closed network of the app store becomes the entire searchable web again, which is how it was in the early days of the web; the applications were just URLs, and now that's kind of different. Hopefully we can get that closer to that.

\[00:19:59.25\] I think it's a noble goal... I understand people's aversion to acronyms and to naming the same thing different ways, or pushing things that are new or hard or not necessary for everybody... But I don't think this is bad; I think it's net good, and if everyone did it, the web would be better.

**Mikeal Rogers:** On that note, we're gonna take a quick break, and when we come back we're gonna get into timezones. Stick around

**Break:** \[00:20:29.21\]

**Mikeal Rogers:** Alright, now we're gonna dive into date and timezones and this really rough corner of Javascript. I love Javascript as a language, it's really great in so many ways, and in this way it's really terrible. Anybody who's done Javascript for a long time or has used another language noticed how bad our Date/Time stuff is, especially what comes natively.

I don't know how much you all have had to deal with this, or if you have any horror stories that you wanna bring up right now... I'll leave it open for anybody to bring that up if you want.

**Alex Sexton:** Timezones?

**Mikeal Rogers:** Yeah, timezones and dates in general in Javascript.

**Alex Sexton:** Yeah, I sure have plenty of horror stories that I won't tell, but I think one of my favorite tweets was "I was really excited for us to colonize Mars until I realized how much harder date/time math would get in Javascript."

**Rachel White:** Oh my god...

**Alex Sexton:** Which is very fair.

**Rachel White:** I think that even though it is something that's hard and everybody complains about it -- if you can hear the children outside yelling, let me know and I'll shut my window and just sweat again.

**Alex Sexton:** We can, but I don't think it's significant...

**Rachel White:** \[laughs\] Okay. I think that it's also an interesting aspect of what new programmers try and utilize when they're trying something new. I remember someone got angry about somebody making an NPM module that would just do something super simple with a timer, but I think that new programmers just are like "This is something that I understand as a construct being time" and they want to be able to manipulate it with this cool new language that they're using, but that's probably why a lot of the date/time stuff sucks, honestly...

**Alex Sexton:** It's a lot easier to understand once you realize that time is a flat circle.

**Rachel White:** \[laughs\] Oh, god...

**Mikeal Rogers:** Alright... So beyond that, there's some real complexities in working with date/time and working with timezones. In the mid-2000s I actually worked on calendaring standards at CalConnect, and on like the CalDAV scheduling standards and stuff like that. So I'm very aware of the complexity you're trying to deal with... Javascript happens to have one of the least sophisticated and built out date/time objects, so it doesn't help you very much.

\[00:23:52.26\] Since really the early 2000s, we've been building these third-party libraries to deal with a lot of this. One of the problems that we continue to run into is that these are some of the largest libraries you have to include. MomentJS is really good, it does a lot of really good stuff, but it's huge, and it's not huge in a way where, "Oh, that should be a small module that does one thing..." All of the logic to do one of these things - 90% of that is required for doing the other thing. It defies a lot of the abstractions and a lot of the modularity that we like to talk about.

**Alex Sexton:** Do you want us to agree...?

**Mikeal Rogers:** Yeah, I want you to say, "Yes, Mikeal, you're right."

**Alex Sexton:** Okay, agreed. Yes, Mikeal. Seems fine. \[laughter\] Go on.

**Mikeal Rogers:** A funny story... When I used to work calendaring standards, a lot of different standards bodies were trying to standardize timezones, right? Trying to come up with some kind of a standard, and one of the problems that you continue to run into is that if you think about timezones as this logical thing that you can just go "Oh, this GPS coordinate you shift off that way, or this way" or "In this timezone there's some kind of rationality about when these offsets happen", you'll never get anywhere.

Every attempt to standardize it failed. Essentially, there was this one guy who's last name was Olson, and he maintained this thing called the Olson database, which was literally like a flat text file that had every timezone adjustment that ever happened.

**Alex Sexton:** Tz data.

**Mikeal Rogers:** Now it's called tz data, but back then it was called the Olson Database. If you look through it, you can realize what it kind of defied logic, because there's stuff in there like "new dictator takes over this country, adjust timezone by 15 minutes." So within this arbitrary geographic order, there's literally adjustments like that.

If ISIS ever gets its own country, one of the first things they'll do to prove that they're a country is adjust their timezone. It's just a dickhead thing to do, that you know they'll end up doing. \[laughs\]

**Alex Sexton:** Yeah, that's why ISIS is a dickhead, because of the timezone manipulation. \[laughter\] Yeah, I think a lot of people don't realize that there are 30-minute and 15-minute offset timezones, and then there are some people who don't abide by daylight savings, certain states.

**Rachel White:** Smart states.

**Alex Sexton:** Yeah, so it's definitely not something that's figure-outable by any programmatic means. You just need all of the data hardcoded.

**Mikeal Rogers:** Yeah, and even DST isn't standardized. DST is just like an extra offset that you do sometimes, that you have to map for. It's really annoying.

Yeah, so now we have tz data, but loading all that data takes a while. It's one of the things that makes these libraries so big, they have to load all that timezone data. So it'd be really great if the browser included that timezone data, or included a better timezone object.

**Alex Sexton:** Well, Mikeal... I have some good news for you.

**Mikeal Rogers:** Yeah, tell me.

**Alex Sexton:** Last week my project for the week was Intel. There is Intel daytime, so there is some motion here, for what it's worth.

**Mikeal Rogers:** Yeah, and there's a new standard, too...

**Alex Sexton:** Like before '02?

**Mikeal Rogers:** What is it...? I think it's called Temporal. Maggie Pint, who's done some work on MomentJS is keenly aware of how annoying this situation is, and has a new proposal that's gonna go to the next TC39 meeting for a Temporal object, which is closer to some of the stuff that they have in Java and some other newer languages.

**Rachel White:** A Temporal object?

**Mikeal Rogers:** Yeah. If you read the standard, it essentially introduces two new types. It introduces what's called a local date/time, and a zoned date/time. A zoned date/time obviously has a timezone attached to it, and a local date/time is what you used to call a floating time. This is one of the places where scheduling gets really crazy, because even with timezones, you can essentially take a date/time with the timezone offset and then figure out what this numeric value is. There's a number associated with it that you can move around and you know numerically if it is greater than, or less than, or within certain boundaries.

\[00:28:19.03\] But then you deal with floating times, and floating times are a real pain in the ass because it's literally a time somewhere. It should map to whatever you want to apply a localized date/time object. A good example of this is if you wanna say a particular day is a holiday globally, it would be that day, from the beginning of that day until the end of the day, in whatever timezone anybody happened to be in. So it would be a floating time, but that means that it isn't mapped to any kind of alphanumeric, which is really hard.

**Alex Sexton:** Yes, Mikeal.

**Mikeal Rogers:** It just sucks, it's really painful to deal with. \[laughs\]

**Alex Sexton:** So you're saying the solution is just wait till it goes through all stages at TC39 and then it gets implemented in the browser and then \*Boom!\* five years later we've got good natives in the browser?

**Mikeal Rogers:** So standards don't just make it through the standards process; they need help. One of the goals in bringing this up here - if you're interested and have had a painful time dealing with date/time objects of have any kind of experience, it'd be really great to get 1) your input on the standard (it's on GitHub, it will be in the show notes), but also, if you have any connection into the standards bodies to help this kind of stuff move along, the more people that kind of pitch in and help to push it along, the better. Because nothing happens in standards if one person is pushing it.

**Rachel White:** I have a weird question... Actually, it's not a weird question; we'll see. This might just be me being naive, but can't people just have time being shown for themselves relative to where they are in the world? Or I guess there's too many use cases for people needing date and time for it to be that simple, huh...?

**Mikeal Rogers:** Well, the big one is like, when we scheduled this podcast, all three of us were in different timezones, so I can display a time to you that says 3 PM, but somewhere we have to know what those offsets mean in relation to each other in order to block out the same time to this podcast. Otherwise you're gonna be on here by yourself, and then Alex would come on, and then I would come on... \[laughs\]

**Alex Sexton:** Right. And as I joined, I was actually exiting the Earth at half the speed of light, so time was moving more quickly for me. Slowly... Alright.

**Rachel White:** So what are ways that some other languages handle it better? The one that I can think of off the top of my head was whenever I used to do a lot of Wordpress stuff and you wanted the PHP snippet in your footer, so that people knew what year your arbitrary copyright was... That was too totally easy to do. What are some other ways that other languages handle it that you like, that you know of?

**Alex Sexton:** I think it's less important to know what other languages do -- sorry, that was maybe a rude way to answer your question... But one of the key differences here is we have to ship this data to the browser a lot of times, so I think a lot of languages like PHP - it's been a while since I've done PHP, but I don't think the natives there are so amazing compared to Javascript's native stuff.

Maybe you don't get the weird month offset versus date offset thing that we get - that's just our own special joy - but we can't ship every last timezone and translation and everything of every different thing to the browser every time, because you're just gonna have to ship half a megabyte of time-related things with every single web app.

\[00:32:06.19\] I think it's very important that these become native, built-in standards that ship with browsers, much like collation, or whatever.

**Rachel White:** That makes sense.

**Mikeal Rogers:** Yeah. I mean, it's really complicated to load them dynamically, and if you send them all no matter what, then the Javascript bundle size is gonna be really big and then Alex Russell's gonna cry and he's gonna yell at you on Twitter, so you've gotta keep that down.

**Alex Sexton:** Both of those things are just guaranteed gonna happen regardless, so... \[laughter\] Change your behavior, basically... I mean, he's right, but...

**Mikeal Rogers:** \[laughs\] There you go. But other languages, 1) they actually do have better timezones built in, a lot of them do. And even when they don't, it's a backend; you can keep that stuff on disk and not really care.

**Alex Sexton:** ...hit the Linux, yeah.

**Mikeal Rogers:** Yeah. In doing the research for this, I was curious if Olson was still maintaining that database by himself or not...

**Alex Sexton:** There was just recently a change... Wasn't there like a copyright issue with that, or something?

**Mikeal Rogers:** Yeah, in 2011 he got sued by somebody, an Atlas company, because they claimed that he was using something from their Atlas. The end result is that the EFF got them to drop their lawsuit, but he put it into ICANN after that, so that he wouldn't be personally liable anymore and getting sued.

**Alex Sexton:** Yeah, donate to the EFF, everybody.

**Mikeal Rogers:** Yes, exactly. \[laughs\] So now it actually isn't a standards body, which is good. Hopefully we can see an easier path to getting it everywhere and in stuff by default.

**Alex Sexton:** This is only a slight tangent, but I really liked the arc of the MomentJS project; I think it's kind of a beautiful arc. Tim R. Wood starts MomentJS as a pretty new Javascript developer and he's like "Hey, I see the need for this all the time..." and you can even see him get better as a Javascript developer over time... The first internationalization efforts were all community-sourced in a pretty weird way, and I could verifiably tell you that 20% of them were wrong. Someone Google translated half the languages, or whatever... But it grew and grew, and obviously the size of the project grew because it's a complex, hard problem, but also the codebase became better and better and better, as more people started depending on it, to the point where it became a self-sufficient project without Tim, and had a lot of community support.

Then as more primitives and natives and more specific modules come out, it's seeing less usage and less contributions, and stuff like that. But it also got donated into the jQuery Foundation and now has the long-term support there. So the whole arc of the project is a very good example of people coming together and doing open source, and making the web a better place. It just makes me happy. Yes, Mike.

**Mikeal Rogers:** Yeah, MomentJS is fantastic. It's really good for creating human-readable date/times in your application. So everybody out there listening, if you're working with this and you need to display nice text about what's going on, definitely use MomentJS and don't try to write your own thing, please. Please, please, PLEASE don't write your own thing.

**Rachel White:** Please... You'll anger people and then they'll complain about it.

**Mikeal Rogers:** Yeah, it's just one of those problem spaces that is really easy to underestimate, let me put it that way.

**Rachel White:** Well, it's a concept that is ingrained into your being as a human. You would think that you understand it enough to be like, "Oh yeah, I could totally make something", but it's way more complicated than just being able to look at a clock and count.

**Mikeal Rogers:** And like most things, it's the people that make it difficult, right? It's the governments that make it difficult and complicated. With that, I think that we've maybe beaten this horse to death a little bit. We'll probably take a quick break, and when we come back we're gonna talk a little bit about Glitch.

**Rachel White:** Yaay!

**Break:** \[00:36:18.15\]

**Mikeal Rogers:** Alright, let's jump into it... We've got a new project of the week, Glitch. This is the first project that wasn't just an open source GitHub repo; this is actually like a slightly larger project for learning. Rachel, why don't you tell us a bit about this?

**Rachel White:** Sure. Glitch is this site that is from Fog Creek and it's really, really awesome, especially for pair programming. It's a coding environment that's similar to -- if you've used any web editors like the CodePen or JSFiddle or anything of that sort... Glitch takes that to the next level, that is a super awesome extreme level where you're able to build web applications in Node with a frontend and a backend. All of the structure is totally there, and then you can run that app in the browser.

But wait... There's more. It gets better. You can either use it for live coding to be able to show people what you're working on as you're working on it (in real time) or you can have it be real-time and collaborative. One situation that I could see this being useful for is I'm not very good at backend things, so if I'm working on something and I'm stuck, somebody would be able to jump into my app and I would be able to see what they're doing while they're doing it.

The possibilities are seriously endless for the ways that people are gonna be able to use this to help further people's learning, to help do collaborations on projects... People are gonna be able to work on really cool things without having to be in the same room, or without having to necessarily rely on having GitHub repositories with different branches to work on stuff. But then it gets even cooler, because if I'm trying to learn something, I can go to -- let's see, I'll go right now... Glitch... I spelled Glitch wrong...

**Mikeal Rogers:** \[laughs\] What seems to set this apart is really the focus on education. We've seen a lot of collaborative editors and web editors and all that, but this is really focused on teaching people.

**Rachel White:** \[00:40:01.07\] It's super focused, and it's broken down... It's still in the beta right now, so it's not hugely open to the public, while they're still trying to fill out some things, but if you go into the site you'll see that there's different curated collections of apps where you can go to Hello Worlds for certain things, or games, or hardware projects and bots... So you can go in and be like "Oh wow, this is a really cool Slack/commands" like we use for the how much time is left until JS Party is going to start. And if I wanted to make my own, I could click on that, hit "Remix my own" and I'd be able to see a whole entire codebase of it already working, and then I could just tweak it to fulfill the needs that I have. It seems really nice.

**Alex Sexton:** One of my favoritest, favorites, hottest takes on it that I saw on the internet was that it's kind of like a next generation GeoCities or Neopets or whatever you grew up with... members.aol.com/~username where people could very easily get going based on templates, and then there were endless tweakers and copiers and all sorts of stuff. Half the people I know who got started in web development was like trying to style their MySpace page or their Neopets page, or something like that. So I think this has a lot of potential to fulfill some of that stuff, but at a larger level, and I like that take a lot.

**Rachel White:** Yeah... The other thing that is also really great about it is - I might be biased here, but Jenn Schiffer left Beaucoup to join Fog Creek to head up working with community stuff and working on Glitch to help make it better, and I know that she cares a lot about teaching people and having code be more accessible, and really just getting people to make more stuff. Well, I think we have her, and she's gonna tell us more about Glitch.

**Jenn Schiffer:** Hi! Thank you for having me. Rachel described Glitch really well. Thank you, Rachel, and Mikeal and Alex - all of you for having me. I'm not very articulate about stuff because it's been a really busy week here at Fog Creek with launching the rename of Glitch and launching our Glitcher API, which is kind of like a partnership thing, and also just talking to a lot of people about how we're sort of doing things differently than a lot of other end browser IDEs do. That's focusing around the community around the product first, and focusing also on education.

We really wanna make an application that is for everyone - developers and non-developers - who want to have access to becoming a developer alike. So yeah, it's been exciting in the past few days, launching a bunch of stuff... We did a thing with Slack, with a new link ufurl, app unfurl endpoint, so I built something for them, I've been following what people have been building with Glitch, I've been doing some live coding and just seeing the kind of things that people want to make and haven't really been able to so easily because they might not necessarily know how to do dev ops stuff, getting things on the internet.

**Rachel White:** I know that when you all launched this officially on Monday I was super excited, because I could just think of so many times in my professional career when I didn't necessarily understand something that this would have been super helpful for me to brainstorm something and have it work as I code, and have people help me. What's some of the feedback that you've been getting from people that have gotten to mess around with this so far?

**Jenn Schiffer:** \[00:44:02.26\] Well, I've seen a lot of people who have had ideas... In the Maker Movement there are a lot of people who want to do stuff with code now, but they're not sure where to start. For me, when I was building web apps and consulting, one of the first things I would start is deploying a server and getting everything installed onto it, to set up for whether it's like a Node app, or a PHP app, or stuff like that... And that's really hard. And when I wanna teach people how to code, I can't really start setting them up with AWS and stuff like that, and I'm already getting feedback from educators who are like, "Oh, I can use this to teach my students. I could start up a new project, a new simple web application, have them remix it to add their own stuff to it."

Then we also have multiple user collaboration, and even more really cool, new features that aren't even out yet (they're coming out soon) that I think will make educators really happy, and also users who want to collaborate with their peers really well, so... So far so good. People seem to be enjoying it, and we've been really following tweets about it and talking to people, and we're out there listening and watching what you're all saying, so watch your back, Alex.

**Alex Sexton:** Okay. \[laughter\]

**Mikeal Rogers:** So Fog Creek does a lot of cool stuff... What made them wanna get into this educational stuff? It's really cool.

**Jenn Schiffer:** The project started out a couple years ago... My teammate Daniel came up with the idea, and he got the opportunity with Pirijan who's a designer/developer also here, to sort of flesh out this in-browser IDE. I guess through time it just organically made sense to not just focus on an editor in the browser, because again, there's lots of those, but focus on how this can stand out and what we can do to not only stand out, but also improve the culture in tech.

So starting out with community as a focus is a really big thing, I think. Usually, community moderation and all that stuff is an afterthought, and we've experienced many times in our industry how making inclusivity an afterthought can lead to disaster, so we're trying to not let that happen. That's sort of what the focus is.

And then it just makes sense, because everyone wants people to have the ability to learn how to code if they want to... I don't know why anybody would think otherwise. So education as a focus is the clear path to making that the case.

**Rachel White:** It also seems like it's a really good environment for people that are curious about wanting to try out more kinds of creative coding but might not necessarily know how to do a lot of things besides just experimenting with a language, and now that they can make an application and see it right in front of them is really cool, too... This is like solving the problem of somebody not open sourcing something, but you would just view the source of their site, so now you don't have to...

**Jenn Schiffer:** Yeah... When I was learning how to program, when I was learning how to make websites and stuff, I was viewing the source of everything and I was copying and pasting this language called Javascript, and things weren't working and I wasn't understanding script source. I was just pasting Javascript from a library that I hadn't embedded yet, and learning the hard ways I'd go through stuff... But that was a challenge that really got me into programming.

Nowadays it's culture -- a lot of people who are new to development or just are younger don't remember we're a part a of the whole "view source" aspect of building. We're building applications with frameworks that obfuscate... When you look at the source you don't see exactly what's there, so people aren't learning in that way... Which is fine. That's not saying that frameworks are bad, it's just that if you wanna teach people how to program, you really can't give them a React or Ember app and say "Learn how to build your first web page with this as an example."

\[00:48:19.01\] Not only that, but if you wanna teach Node, you can't view the source of a Node application, and Glitch allows you to view the code of the application, both the frontend and backend files, and I think that's pretty neat. You'll be able to now in the browser see how the actual guts of the application work, and I think that's really cool.

**Rachel White:** Yeah. I think it's also cool that you're making it a lot easier for companies that have APIs to be able to say that they want to be a part of this and to encourage more people to try and work with the API. Don't you have the partnership with Slack now where people can more easily and accessibly make Slack bots and stuff like that?

**Jenn Schiffer:** Yeah... Slack are good friends of ours, and for their app unfurl launch on Wednesday we worked with them to make sure that we had some cool apps available when the announcement came out. So I made an app unfurl that if you install the app and you post Glitch project links in your slack channel, it will unfurl to have links to view the code, remix and run the application, with a description of what the app is... Just like a richer experience within Slack, if you're into using Glitch.

We wanted to make something that was like "Okay, this exists, this is a new endpoint that's available. If you want this for your company, just take my app and remix it and update the good stuff - the part that comes to the unfurl - with what you want, and then you're good to go." You don't have to worry about rolling your own Slack OAuth and all that other fun stuff that we developers love to do when we have deadlines.

So that's another case where it is, you know our community page we have a lot of building block apps that you can remix off of and build your apps onto it just to save you time. That's another thing I think that we've been taking for granted from the past... One of the tenets of programming and software engineering is code reuse, and this makes it easier to reuse code.

**Rachel White:** Cool.

**Alex Sexton:** It's kind of like copy/pasting code, not really reusing, right? I think in an absolutely necessary way, but...

**Rachel White:** I think it's reused... Even if you're copy/pasting, you're still reusing something that somebody has written before.

**Alex Sexton:** Yeah, anyways... I was just being a jerk to Jenn, because I'm a jerk. Jenn, it's nice to meet you for the first time. \[laughter\]

**Jenn Schiffer:** Who are you...?

**Alex Sexton:** I actually have to go, but I have one question... How much did you guys find inspiration from the BestBuy remix API?

**Jenn Schiffer:** The BestBuy remix API? I'm not familiar...

**Alex Sexton:** \[laughs\] Oh, very surprising... They had actually some of these ideas... But that was also a failed joke, which brings me to the next point: I'm being kicked off the podcast \[unintelligible 00:51:21.10\] the third host... \[laughter\] So I hope you'll have better luck. But I really actually have to run...

**Jenn Schiffer:** ...to BestBuy!

**Alex Sexton:** But it was nice talking to you, Jenn.

**Jenn Schiffer:** Hey, thanks for having me.

**Mikeal Rogers:** That's fine, we'll be making a permanent replacement with Jenn Schiffer now, so goodbye Alex... \[laughter\]

**Alex Sexton:** Jenn, I hope you have a pick... For our picks, in a minute. \[laughter\]

**Rachel White:** Well, it is March Madness, so I'm sure she has plenty of picks. But back to Glitch... What is one of the coolest things that you've seen somebody make, that wasn't involved on the original -- somebody that doesn't work for Go Mix, that has jumped in since Monday, and went in and made something. What is your favorite thing that you've seen?

**Jenn Schiffer:** \[00:52:12.13\] Let's see... Let me think, there's been a lot of stuff. Somebody tweeted at me today this cool pixel art color analyzer... It's like all these visualizations where you add an image and it analyzes all the colors. That was really cool.

People have been sending me example apps with things that they've been working on at work. Marco \[unintelligible 00:52:41.03\] has been sending really cool stuff... I think some of it involves service workers. What else have people been making...? I've seen some cool weather Dark Sky's API apps, and that's like a really cool thing that we've been trying to drive - using this tool as a tool to prototype stuff with APIs, and we've got some cool features coming out in the future about that, especially with different other companies that we're working with, to get them closer to users who wanna use their APIs.

There's been a lot... It's been quite a whirlwind this past week, so I haven't had a chance to sit down and list everything, but that is something that we're doing. As we're finding cool stuff, we're curating them at Glitch.com, our community page... So you can see some of the interesting stuff that we've got there. We've got bots, we've got Learn To Code tutorial stuff, and even more...

**Rachel White:** Cool. So are you wanting places -- I mean, is a future goal to be able to get integration with companies that have APIs that would maybe need a token, or it might cost money, and then be able to have an integration where people can try it out without having to deal with any of that stuff?

**Jenn Schiffer:** Yeah, I think that when you have an API that you want users to use, one of the barriers is that the user first has to set up their environment to use it, and Glitch sort of takes that barrier away. So if you're a company and you want developers to use your stuff, we can help you out. We launched our partnership thing, it's called For Your API; if you go to glitch.com/foryourapi, you can learn how we can help you out.

Right now this site's completely free, but in the future we're gonna have some premium features that will get you even closer to developers and helping them out, and really part of my mission is making it easier for anybody to program - whether it's just Hello World stuff, or even more ambitious things.

If you want to be a part of that, I would ask you to reach out to me or tweet at Glitch, and we can help you out with that...

**Rachel White:** Cool.

**Jenn Schiffer:** ...whether you're a company or an individual developer.

**Rachel White:** Awesome. Do you have anything else to say, Mikeal? \[pause\] Are you there? \[pause\] Well, Mikeal left, too...

**Mikeal Rogers:** I was muted, I was muted! Ha-ha! \[laughter\] That happens too often. It's Amateur Hour over here. So I think we'll get into picks now... I'll go first, so that Jenn has some time to think of something.

**Rachel White:** Why don't you tell her what a pick is?

**Mikeal Rogers:** A pick is anything that you wanna talk about... Literally, anything. It doesn't have to be code, although many of them have been code in different projects that we wanna highlight. My pick this week is not code... A lot of people that follow me on Twitter see all of the amazing bread baking that I'm doing, but also I'm just doing other kinds of fermenting all the time, and those don't get posted on Twitter because they look grosser than beautiful, freshly baked bread.

\[00:56:05.12\] But my pick is this book called Wild Fermentation, by Sandor Katz. It's one of the best books on fermentation out there. He also wrote this much bigger book called The Art Of Fermentation... But Wild Fermentation is a book that you could just pick up and flip through and see awesome things that you can do at home real quick to ferment different foods. You have to think of it as like another form of cooking, basically. You're completely changing the flavors and everything going on, so that's my pick. Check out Wild Fermentation.

**Rachel White:** Okay... My pick for the week is going to be a repository that is a compilation of a bunch of companies that do not whiteboard you. There is a user on GitHub called Poteto (I hope that's how you pronounce it). It's really great, because I think that a lot of \[siren sound\] -- wow... Oh, it's a siren... I thought that was a yelling child. Hold on one second, the cops are coming, certainly... Okay, so apparently the NYPD has even more serious opinions on whiteboarding than I do... So this is a whole list of companies that don't whiteboard.

It's a bit source of a lot of anxiety, especially for people that are just starting out in their dev career, to be able to have to do all that stuff on the spot. So I just posted the URL... Well, in the wrong channel... It's right there. It's super helpful, and it even goes down to not only just hiring without whiteboards, they link to a site called "They Whiteboarded Me", and it lists companies and it says what kind of whiteboarding test did they do... Like, did they make you do live coding, did they make you do pair coding with somebody as their coding challenge, do you have to do tree things? It gets really intense.

So it's super informative for people that may be looking to switch jobs or are looking for a job for the first time.

**Mikeal Rogers:** Awesome. Jenn, you're up!

**Jenn Schiffer:** Oh, so I can pick anything?

**Mikeal Rogers:** Yeah.

**Jenn Schiffer:** Okay, because I think I have three quick things. One, I discovered Greek yogurt this week - plain Greek yogurt with granola, and that's been a game changer... Great source of protein.

**Mikeal Rogers:** Full fat, or not fat? Full fat's the best.

**Jenn Schiffer:** Full fat.

**Rachel White:** Did you have it at the Wing?

**Jenn Schiffer:** Yeah, I did.

**Rachel White:** It's so good.

**Jenn Schiffer:** Yeah... The Wing is a good pick. The Wing is a women's social club in New York. Rachel and I are members, and it's been a really great space, full of really awesome, ambitious women doing really cool stuff. It's essentially like a co-working space, but it's really nice... People typically think that if you get a group of really successful women together - there's like hundreds of us - that it would be very caddy, but everyone is so nice and welcoming. It's a really great time. I'm like, "How do we make the rest of the world like this?"

\[00:59:14.07\] Then another pick is - I'll post this in the Slack channel... There's this tweet by this guy - his name is splenda daddy... He posted a picture of a chameleon that he tried to draw from memory, and the tweet just said "I started crying in class because I tried to draw a chameleon from memory", and the picture of it just makes me cry as well. So I'm posting that on the Slack channel...

Anyway, those are my picks. Please like and subscribe. \[laughs\]

**Mikeal Rogers:** On that yogurt tip, if you wanna make your own yogurt, check out Wild Fermentation...

**Rachel White:** Oh my god...

**Jenn Schiffer:** Oh, I used to make my own yogurt all the time. My former partner had ulcerative colitis, and there was a time when he could only eat yogurt and he couldn't have anything storebox that had sugar in, so I would be making yogurt every day. It's a painstaking process. The temperatures have to be just right, and there is a lot of different steps to it.

**Mikeal Rogers:** No, here's the trick... Sous-vide machine. You just do the sous-vide and then stick it in the bag.

**Rachel White:** Oh, yeah! Everyone, pull out your sous-vide!

**Mikeal Rogers:** It'll be perfect temperature the whole time. It's great.

**Jenn Schiffer:** So I'm speaking at conferences again now... I think I'm gonna do a "Making Yogurt Using jQuery", because 3.2.0 goes out... jQuery 3.2.0 was my other pick, and that's it.

**Mikeal Rogers:** \[laughs\] Okay. Awesome! Those were the best picks so far. So thank you everybody for coming; definitely rate us on iTunes, rate us on everything... Follow us on Twitter, @JSPartyFM, and thank you for coming on!

**Jenn Schiffer:** Thanks for having me!

**Rachel White:** Thank you!
