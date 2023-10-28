**Jerod Santo:** We are here to talk about ntfy, spelled n-t-f-y, living at nty.sh, an open source Push Notification Service built on HTTP and Pub/Sub. Ntfy lets you send push notifications to your phone or desktop via scripts from any computer and/or using its REST API. It's created by Philipp C. Heckel. We'll call him Phil. And Phil is here with me... Hey, man. Welcome to the show.

**Philipp Heckel:** Hey, how are you?

**Jerod Santo:** I'm very good. I've been excited for this conversation. I've been a ntfy user... A casual user; I think I have a couple of things hanging out there. And I actually use it so infrequently that I'm excited when I get a push notification, because it's kind of -- it's a mixed bag, because usually when I get one, it means something went wrong, but I'm excited because everything's still working as planned and advertised... So I've been a user for a little while, and excited to share this cool tool with our audience.

Let's start with why you built this thing. It's been out there for a while, it's also open source, which is neat... But there are others. When I set out to find how to scratch this particular itch for myself - it's after a long time of using different things. I for a long time had like a special Gmail address that I would just email when things went wrong... And then from there you could dispatch write different things. I used to use the Twitter API back when it was awesome, and all you needed was a token, and you could then subscribe to some robot feed, and get DMs, or you could do all kinds of stuff with that. Various things throughout the years of like "Hey, just send me a push notification to my phone", without having like an Apple Developer subscription, all that kind of stuff. And so I asked our audience, or our Slack community I think it was, when I was looking forward over the summer... And there's a whole bunch of different services doing this one. I think the two that struck my eye was yours, as well as pushover.net. And ntfy was cool, because - no account. Just send it to an endpoint, and it's a beautiful thing. So that was really cool. That's why I selected ntfy. I really like it. But I'm curious, when you set out to build this, why? What made you want to build one versus using something else that's out there?

**Philipp Heckel:** Yeah, so this question gets asked a lot, and usually people, people start by saying, "Why didn't you just use this instead?", just like you did. And the reason for me building it wasn't particularly "I need to build this." It was more like "I need to build something." So it was multiple things. It was a) I was bored at work. Now I can say it, I don't work there anymore...

**Jerod Santo:** \[laughs\]

**Philipp Heckel:** So I was bored at work... I love open source, so I've done a number of open source projects in the past... None of them took off like this. And then of course, there was a personal itch. There was the same thing that you did - I had a bunch of scripts, I had backup scripts, and at the end of the script there was a thing that was supposed to send me something.

For a while, I sent it with email, and the mail command, and that was a pain in the neck to configure. And then I finally settled on -- I think it was called sendxmpp, or xmppsend, I forgot which way around... Which - XMPP is this chat protocol...

**Jerod Santo:** Jabber.

**Philipp Heckel:** Jabber. Jabber, yeah. Jabber, exactly. So Google was supporting Jabber and XMPP with Google Hangouts for a long time. So I made a Google account, and I called it Heinz Ketchup just to make it funny, and then I got messages from Heinz Ketchup every now and then to say "Your backup is done" and whatnot. And then eventually, Google killed XMPP and Hangouts. So you can sort of say the fact that ntfy is here is because Google killed the product again...

**Jerod Santo:** They say that about lots of stuff.

**Philipp Heckel:** I know. I know, right? So that's when I started dabbling. And I kind of always liked the idea of just using curl; just do things with curl. I don't want to install anything. I don't want to apt-get this, and have to... Whatever. I just use an API with curl. And so ntfy is built around the idea of simple, simple, simple. So it's a -- I don't know, 60-character curl command to send a push notification to your phone. That's pretty insane if you ask me.

\[00:08:14.21\] So the combination of bored at work, loving open source, and my own thing broke - I started working on it. And just as I said before, the fact that I wanted to just make something... I didn't go looking for something else, which was a really good thing in the beginning, just to make what you want to make without looking at competition. Because I didn't even know Gotify, or Pushover, or... I don't know, the other competitors, \[unintelligible 00:08:42.24\] competitors existed, because I didn't research. I just made the thing that I wanted to make.

And when I then released it, then of course people said "Why don't you...? How does this compare to...?" and so on. So yeah, that's how it came to be, and that's when I started looking at the others. And of course, I copied the features. "Oh, they've got that. That's a great idea." So I have some of the features, but I do have lots of features that the others don't... And yeah, so that's how it came to be.

**Jerod Santo:** Gotcha. It's interesting, you were looking for something to build, which made you not look around. I'm usually the exact opposite. The last thing I want to do is build something. And so of course, I look around and I say "Has anybody done this?" Usually, nobody has done it the exact way that I would want it to be done, and so I settle for something... But honestly, Phil, when I first used this, I'm like "This is what I would have built." I'm the same way. Especially like weird places, like inside of a cron job or something, where you can just curl an endpoint and get a notification; like, no extra tooling, no nothing, no sign up, no account... It's just beautiful. And so I guess I'm glad you didn't look around, but I looked around and I've found ntfy; otherwise maybe I would have built the exact same thing, at least at first glance. And so I'm glad that you built it, and I can just use it. That's pretty cool. How did you have this insight of - I guess you just liked curl so much. That was the answer.

**Philipp Heckel:** I do like simple things. So I am a software engineer at heart, and my day job is software engineering too, but user experience is ridiculously important. And we as developers, and sysadmins and whatnot, we are users. So you don't want to make a config file with an API key in it, or -- you know, you want to just send the message already. And yeah, that's how it came to be what it is.

**Jerod Santo:** Okay. So talk about what it is. Fill everybody in.

**Philipp Heckel:** Yeah, yeah. I mean, you gave a good intro. Ntfy is a push notification system. I think that the website calls it a Pub/Sub system, which I might change, because people don't know what Pub/Sub is, and they don't care. Because first and foremost, it is meant to send push notifications to your phone, from wherever you want. So the API is HTTP-based, so you can just send the actual message in the body of the HTTP request, and everything speaks HTTP. So you can send yourself whatever message you want.

The way to use it is you go to the website, or you go to Google Play or the App Store and you download the app; then you subscribe to a topic... So this is where the Pub/Sub comes in. You subscribe to a topic; the topic can be any word you can think of. And then you can push messages to this topic. And everybody who subscribed to the topic receive it. So that means you can have multiple subscribers to one topic. So if you're a group of people, they can all listen to the same topic, they will all get the same message. Or if you want to have a private topic, you can either pick something really complicated, similar to a password, or reserve a topic if you have a private instance. Since it's open source, you can host your own private instance, or you can purchase a plan for the Ntfy Pro Plan and reserve topics that way.

\[00:12:20.20\] And then the message itself can be just -- everybody's seen a push notification, so they know what they look like, but there's tons of stuff that you can do with it. You can give it a title, they have different priorities, different ringtones... You can override the Do Not Disturb, you can make it so that it persistently rings until you tap it, you can add emojis and tags that I've added as a classification method, and so on. Yeah, I mean, I could list all the \[unintelligible 00:12:53.24\]

**Jerod Santo:** That's a good intro to it. So the thing that makes it dead simple is this topic subscription feature, where as long as your notification data, that payload that you're sending isn't so top secret that it has to be super, super-secured with an account, and a username, and a password, and typical authentication schemes, you can simply pick an obscure topic name that only you know, or only people that you distribute that information to know... And you can subscribe to that. Which is effectively public, but it's obscure. So if you're dealing with the Crown Jewels, perhaps, maybe not. Maybe. It's up to you. But if you're not, like me, I'm basically notifying myself when a certain thing is down, or when a backup finishes, or these one-off ad hoc things that developers want to know about... Heck, I could even publish my topic to people; I don't really care if they spy on the fact that my backup succeeded, correct?

**Philipp Heckel:** Yeah. I've had this conversation so many times. I'm glad it's coming up again. You touch on the fact that the topic is public. And the topic is public in the same sense that a URL that you know is public. So when you share a link on Google Photos, or Apple iCloud, or whatever, that's a private link, the same way that this can be a private link.

So if you pick a really complicated password, or a really complicated topic, it's the same level of security that a private link for Google Photos has. Now, if you pick Jerod's Topic, that's the equivalent of a bad password. People would be able to guess that.

**Jerod Santo:** Or test1234, I'm assuming that's out there somewhere.

**Philipp Heckel:** Yeah, in that sense -- so when you look at competitors, and the way that they've done it with the API keys, and so on, when you look at the raw HTTP request, it is very similar what you're sending. In the ntfy case, the topic is in the path, and in the Pushover case, the topic is in the header. There is differences, obviously, but yes, it's not the Fort Knox tool, but that's the trade-off that you -- you get this simplicity by using this approach over API keys. But if you want to, you can self-host. If you are Fort Knox, or you don't want to share that your backup is finished, where you have more sensitive stuff that you distribute or that you notify yourself on, then yeah, you can self-host, and there's no phone home feature or anything; it's completely open source. You can have accounts, you can have proper access control. There's access control lists... You can go all the way in, or you can just send a message.

\[00:16:00.02\] It puts a little bit more control in the users hands, which I realize these days is controversial. Everything is secure by default to a crazy extent. For me, we are developers, so this is a developer and sysadmin tool. So we're not your average user, your grandpa and grandma. It's not made for that. I've had my mom install it, and she's like "Right, now what?" Because I can't send a message back. I sent her a message, and she's like "How do I respond?" And I'm like "That's not what it's for."

So people have asked for that, publish messages from the app, so many times. So yeah, I'm adding it. But it's not what it's for. But again, that's the beauty of it. It doesn't matter. Like, if you want to use it that way, then you can useit.

**Jerod Santo:** Yeah. It's a hacker's tool. I mean, that's what I love about it. Like, if I don't care, and I just want to send to an endpoint, and whatever happens, happens - fine. Maybe I'll just go test1234 and just send the data.

**Philipp Heckel:** Yeah.

**Jerod Santo:** But if I want to be Fort Knox, and self-host, and tie it into my SSO, and blah, blah, blah, blah, I'm sure those are all things that a hacker can do with an open source hacker tool that's self-hostable. So that's spectacular, because it starts with the user experience, and like really easy to get a win. I mean, this is something that I talk about a lot, is like give people wins as soon as you can, with whatever it is that you're building, and they're going to come back for more. They'll even sign up for your account if you've given them enough wins that it's a reasonable trade-off. I'm not against having an account on a system. I'm against you requiring me to have an account before I've actually even used the thing and seen if I liked it. So I think you're making the right trade-offs. I'm sure there's people who would prefer the other trade-off, and that's why there's a nice diversity of options out there, right?

**Philipp Heckel:** I do like the -- the no account thing was really important to me, because it's, again, the user experience and the way you get to interact with it are so different. You get to try it out without having to do anything. I rarely sign up for things anymore, because I'm like "That's a hassle to email", and then I have to generate a purpose-built email address so that I can not get spammed forever, and so on. So I like having the new account thing.

**Jerod Santo:** So one thing that can happen when you don't require accounts is people just spam your endpoints, I would assume. So a lot of us are casual users, just hitting it every once in a while, but I would think that abuse might be a concern. Has that been a problem?

**Philipp Heckel:** So has it been happening? Yes. Has it been a problem? No. So I've done this long enough to know that once you put something on the internet, you're gonna get spammed. Once it hits popularity, you're gonna get abused and spammed. So I've done this before at work, I've done this before for other services... I have a service called nopaste.net, which is -- I don't know if you remember from the olden days of IRC, where you wouldn't put large texts in the chat. Pastebin it's called these days; it's a pastebin service, which is - similarly to ntfy, you can use from curl, so you can pipe a file into curl, and so on. That one didn't hit a spot like ntfy did, but it taught me some lessons in terms of what to do and how to rate-limit.

So ntfy has a ridiculous amount of rate-limiting and logic around usage limits, logic around the constant abusers being banned, and so on. So there's a page in the docs around rate-limiting if you want to know more, but ultimately, it's a token bucket-based rate limiter, and there's a rate limiter in NGINX, which combined with \[unintelligible 00:19:58.09\] will ultimately ban people if they are real abusers.

But the application itself, every endpoint and everything has different rate limits. So the number of emails you can send, the number of messages you can send, the number of attachments, the amount of attachments, how big the attachments are, and so on. So that doesn't mean that there isn't a hole, so if you go and audit the software, you might find something, but I have been pretty happy with the way it's going, the service runs on one machine so far, which - it's like 20-something thousand active connections, and like thousands and millions of messages a day... Many of them are rejected. So many of them don't even hit ntfy, because people are banned. Sometimes it's just bad folks, but mostly it's bad scripts. It's really just the "Oh, I forgot that this is still running..."

**Jerod Santo:** ...in a loop...

**Philipp Heckel:** Yeah, in a loop,... It happens. It happens. Or somebody put, you know, every stack trace in a ntfy message, and then their application starts failing more, and suddenly you're doing 10,000 stack traces a day over ntfy. So yeah, that's what it is. But I've not hit any scary limits, because people are cut off really early.

**Break**: \[00:21:28.13\]

**Jerod Santo:** Do you have limits on the App Store size, like with Apple and/or Android? Like, how many push notifications you could actually send? Because you are basically funneling, I guess. Is it one app store credential that's sending for everybody?

**Philipp Heckel:** Yeah, so it's interesting, you're hitting on the "How does it work under the hood?", the message delivery, which maybe is a good small segue. So ntfy.sh does use Firebase, or Firebase Messaging - what is it called; FCM, Firebase Cloud Messaging - to deliver messages through Google. And then for Apple, for iOS devices, Firebase itself will forward to APNS, which is Apple's Apple Push Notification Service, which in turn will then deliver that to iPhones. There is other ways to deliver messages. For self-hosted instances, they don't go through Google. They go through regular WebSockets or HTTP stream. So obviously, there's no limits there. Interestingly, Google doesn't have limits on FCM. I'm literally pushing --

**Jerod Santo:** Really?

**Philipp Heckel:** ...thousands. It's not millions of messages a day, but it's a lot of messages. Every day, it costs nothing. And I am scared that at one point they'll say "Yeah, that's enough." But there's no publish limits, there's no -- I have not experienced any rate limits, I have not experienced any disruptions in delivery because of FCM, because of Firebase. I will say this - the Firebase mechanism to deliver messages is much slower than the WebSocket, which is why it's called in the app when you select -- there's a checkbox called Instant Delivery. That's basically "Yeah, just do it over WebSocket and not over Firebase."

**Jerod Santo:** So WebSocket goes to where? What's the other side of the endpoint?

**Philipp Heckel:** Yeah, so the other side of the endpoint is ntfy.sh, or your self-hosted service. So basically, when you open your app, it's constantly connected to the ntfy.sh server. So when you push your message to ntfy.sh, it directly finds the correct WebSocket and pushes it through there.

**Jerod Santo:** What about apps that haven't been launched for a while?

**Philipp Heckel:** It's running in the background.

**Jerod Santo:** Gotcha.

**Philipp Heckel:** People, the first question when they hear that is "What about battery?" So it does consume more battery than Firebase. On my phone it's about a percent, half a percent a day. On other people's phones it has been more significant; it depends on the number of messages, it depends on how you travel, or how often you hop different mobile networks, and so on. But usually, it's like 1% to 2% max. There's some phone manufacturers that are notoriously bad, and sometimes apps get killed in the background so that it doesn't work well. But let's say that 98% or so of users are perfectly happy, don't complain about battery anymore. It had battery issues in the beginning, but now it's been solid for a long time.

**Jerod Santo:** Is this your first foray into native mobile app development? Because you have -- I'm assuming you have two apps out there, right?

**Philipp Heckel:** Yeah, I have the Android app and the iOS app. It was my first Android app. I learned Kotlin, which - I liked the language. It's beautiful. I didn't have to learn it. I felt like I knew. It was like an old friend that you had ever met.

**Jerod Santo:** \[00:30:01.14\] What languages were you familiar with coming into it that that made you feel that way?

**Philipp Heckel:** I mean, I've done Java in the past. It's Java-esque. It runs on the JDK. I've done Hava in the past, but I'm a Go fan. The ntfy server is written in Go. Yeah, so the Android side of things - it was odd, but it was okay. It felt like it's going quickly, relatively quickly... There's a lot of googling involved in Android Development. I feel like when I write Go, I don't have to google how basic things work, and Android development is weird. It's just really strange. For the iOS app - I don't have a Mac, and I don't have an iPhone, so...

**Jerod Santo:** It makes it harder.

**Philipp Heckel:** So I got an iPhone and a Mac.

**Jerod Santo:** There you go. \[laughter\]

**Philipp Heckel:** Yeah, so I bought a used MacBook, and I borrowed an iPhone, and I made the app. And I'm not happy with the iOS app. It's so terrible compared to the Android app. It has like 10% of the features, people complain all the time... I think the Android app is really solid. People mostly ask for new features. So I think one of the last shows, the Tauri guy - what was his name? David, I think?

**Jerod Santo:** Daniel.

**Philipp Heckel:** Daniel. Close. Sorry, Daniel. He talked about the issue bubble. And I think in the Android world, we are past the issue bubble. There's mostly features -- yes, people have issues, but mostly it's about features. And in iOS land -- I haven't touched the iOS app in a long, long time, and I just need to get back to it. It's just, Swift and that universe is just not my realm. I would love to have some help, so if somebody out there is listening and wants to...

**Jerod Santo:** And the apps are both open as well?

**Philipp Heckel:** Everything's open. Everything's open source. The iOS app is a little tricky to debug, because you need a physical device, and so on. But everything's open source, yeah.

**Jerod Santo:** Well, like I said, casual user, and mostly just install the app in order to subscribe to the ones that I am interested in, and then don't ever launch it unless I get a push notification from ntfy. So not having enough users to have feature requests, or have -- I remember thinking "Oh, this is bare bones", is what I thought. "This is like utilitarian, the app, compared to other apps. It just has what I need in order to get subscribed."

**Philipp Heckel:** Are you on Android or iOS?

**Jerod Santo:** On iOS.

**Philipp Heckel:** Oh, on iOS. Okay, I'm sorry you're getting such a terrible experience then.

**Jerod Santo:** \[laughs\] No, like I said, it's not terrible for me, because I don't launch it unless I get a push notification.

**Philipp Heckel:** But you don't know what you're missing.

**Jerod Santo:** I don't. Well, that's why it's not so bad. I don't even know what I'm missing.

**Philipp Heckel:** You don't even have attachments. You can send files, and you have action buttons, and icons, and...

**Jerod Santo:** I don't have any of that, no. I don't.

**Philipp Heckel:** Oh, man. You should get an Android device.

**Jerod Santo:** I've never owned an Android device in the course of my life.

**Philipp Heckel:** Let's not have that discussion.

**Jerod Santo:** Yeah. I'm not against it, I just don't have one. Okay, so you need help on the iOS side. That's interesting. That leads me to think about money. I don't know if that makes you think about money, but I start thinking about money when I start thinking about "I need help programming something." What's the money situation? So obviously, there's a Pro Plan, you've got GitHub Sponsors going on, and I saw there's a decent amount; over 30. It seems like there's some people backing the project... But could you bring on somebody to work on the iOS, or you're not quite there yet? Where are you at financially?

**Philipp Heckel:** \[00:33:37.05\] Yeah, I mean, when I started the project - it's an open source side project. So that's what I started it as. I had open source projects in the past, as I've said, one of them called \[unintelligible 00:33:50.21\] which is... Think of like a Dropbox clone, but secure -- the website is still up, but it's pretty much defunct and abandoned. And that gained a little bit of popularity back then. And people started donating, and they started donating and donating. And the problem with \[unintelligible 00:34:08.20\] with that other project, was it was never really functional and finished, so I felt really bad for receiving so much money. And - I mean, it wasn't much. It was a couple thousand bucks. But at the time, I'm like "I have just this open source project." I didn't really expect anything. It felt like bad money to me. So for the longest time for ntfy I didn't accept money. I didn't accept donations, and I didn't have paid plans. And I even said it in the docs, I don't want any money, I don't want any donations. And then it gained traction, and suddenly it cost more money to run the server, and the Apple developer license, and all that... It kind of added up. And then I bought a Mac, and so on. So I just figured "Alright, I guess I could start asking for donations." And I did, and then beginning of this year - so I think it was March - I rolled out the paid plans as well. And it's not like I've been making bank with it, but it is still like in very much side project territory. I can give out a couple hundred to contributors, which I do, but it's not like I can quit my day job because of it... Sadly. Because I like ntfy, I like the concept.

On the other hand, I do like that it's entirely open, and that I don't depend financially on it. Because when you start depending on something financially, your perspective changes a lot. And so maybe your usage limits are not as generous as the free usage limits that I have. Maybe you do require a signup. Maybe you start talking about leads, and you start talking, and you require -- you know, I've done this dance.

**Jerod Santo:** Yeah. It changes.

**Philipp Heckel:** Your perspective on things starts changing, and it is very difficult to be a successful open source company. I mean, you've had a number of them on the podcast, right?

**Jerod Santo:** Yeah, it's not easy.

**Philipp Heckel:** It's not easy. And then eventually, you're going to have to take on money, VCs and whatnot. Am I ready to do that? Right now no. In the future, maybe. So ntfy makes a little bit of money. I'm not swimming in money, and that's okay.

**Jerod Santo:** Fair enough. I think it's at a scale right now where in your FAQ you get to say "What are the uptime guarantees?", you get to say "Best effort." You know?

**Philipp Heckel:** That's what it says. \[laughter\] So I've actually stolen this from -- do you know healthchecks.io?

**Jerod Santo:** No.

**Philipp Heckel:** It's a website that's based around the idea of a deadman switch, where you send a message to healthcheck.io every two minutes, or every whatever interval you choose...

**Jerod Santo:** Right. And then you stop --

**Philipp Heckel:** And then when you stop, it notifies you. It actually has notified integration now. It's great.

**Jerod Santo:** It seems like the opposite of ntfy, in a sense.

**Philipp Heckel:** It is and it isn't. There's a very small change that I have to make, and suddenly I can do that, too. But that's beside the point. My model is based on -- I forgot his name, but whoever the maintainer of that is... Because I said to myself, I want to be fully open source, I want to be transparent, and I want to be a good citizen, just like him. And he writes in his FAQs or in the terms and conditions, he writes, "I'm just one guy. And so if my Postgres server is down, I have backups... But it could be a couple hours. Or if I'm asleep then it could be more." So I do have ridiculously good uptime so far. I haven't really been down at all. There was one window where I was asleep, and people kept pinging me, and I didn't have my Opsgenie...

**Jerod Santo:** \[00:38:06.21\] Push notifications on?

**Philipp Heckel:** Yes, I didn't notify myself about ntfy being down. So there's an interesting use case.

**Jerod Santo:** Oh, you needed another service. That's how you signed up for Pushover.

**Philipp Heckel:** No, I don't. Do you know what I do now?

**Jerod Santo:** You're on like a dev box in staging, or something.

**Philipp Heckel:** No, there's public ntfy servers that other people run.

**Jerod Santo:** Oh, nice.

**Philipp Heckel:** So if you look at the docs, there's an integrations and projects page at the bottom. There's a list --

**Jerod Santo:** So you're using somebody else's ntfy. You just pick a private topic, and boom.

**Philipp Heckel:** I do.

**Jerod Santo:** That's cool.

**Philipp Heckel:** And so yeah, it rings continue \[unintelligible 00:38:32.14\]

**Jerod Santo:** What's your infrastructure look like?

**Philipp Heckel:** It's, again --

**Jerod Santo:** You said one machine, didn't you?

**Philipp Heckel:** It's one box. It's one droplet on Digital Ocean. Given that it's running Go, and Go is really good at concurrency, I don't need more. I can scale much more than this. The reliability aspect of it is questionable, obviously.

**Jerod Santo:** Yeah. It wouldn't take too much to go to two, right?

**Philipp Heckel:** Right, yeah. So there's --

**Jerod Santo:** At this point you might be on -- like, if Digital Ocean has a problem, that's when you have a problem, kind of a thing... Where it's like, if you could just have two of everything, why not? It probably would take a few hours to get set up, and then you'd just have that one -- I mean, you'd go from like five nines to nine nines, or something, just having two of them.

**Philipp Heckel:** I would have to make changes in the app, too. Because right now it's backed by SQLite. SQLite is a file. And so if I back it by Postgres, or even an rqlite, or a somewhat distributed database, then it would be relatively easy to go to five nines, seven nines, or whatever. But right now, again, I'm still in the growth phase, I haven't experienced any issues, but I do -- it is around the corner. I want to do, just for my own sanity. I don't want to be woken up in the middle of the night, believe it or not. My kids do that enough. I don't need software to do that too.

**Jerod Santo:** Well, how big is that SQLite database? Just curious.

**Philipp Heckel:** So ntfy messages get pruned after 12 hours.

**Jerod Santo:** Okay. So it stays at a constant size, roughly.

**Philipp Heckel:** It roughly stays at a constant size. Right now it's 320,000. So that gives you a number of how many messages a day it is. It's like 600,000 messages a day, or almost 700k a day. But yeah, it gets pruned. Obviously, if you have pro plans, your messages get cached longer, and so on. But for the most part, it's 12 hours.

**Jerod Santo:** You might look into Litestream and some of the stuff that the Fly team is doing around SQLite, and allowing it to be --

**Philipp Heckel:** I have, I have.

**Jerod Santo:** You have.

**Philipp Heckel:** I have looked at a lot of things...

**Jerod Santo:** You're excited by that, or you're not going to do that, and instead you're gonna switch to the backend?

**Philipp Heckel:** No, I have explored so many different things, and there's 8 million things to do, and I just have to pick... The beauty of this being just me plus the contributors is that I can do fun-driven development. I've called it that, and I do the things that are fun for me... And sometimes that means I dabbled with the Android app, it almost never means I dabble with the iOS app... \[laughter\] And sometimes it means I do investigate the reliability aspect. But it takes a lot of time. That stuff takes a lot of time, and fine-tuning, so I haven't acted on it. There's many options.

**Break**: \[00:41:42.16\]

**Jerod Santo:** One thing about ntfy is when I asked folks for a solution, I had a handful all say "ntfy", and I wonder how you got the word out, how you established this tool... Because there's just so much noise these days, and so many cool things, and many competing services, even on this one particular thing. Did you do any -- I know you're not thinking in leads and stuff, but did you do any grassroots, like, get the word out kind of stuff? Or did you just put it out there and let fate take it?

**Philipp Heckel:** I don't think that works. \[laughter\] No, I don't think it --

**Jerod Santo:** Dang it. That's been my entire plan.

**Philipp Heckel:** No, you can't do that anymore. As you said, there's too much stuff, so you do have to do marketing, or advertising. And not in a traditional sense. It's open source, so you can say "Look, I've got this cool tool." So for the most part, what I did was Reddit; there's a fantastic Subreddit called Self-hosted, which they're really receptive, really fantastically nice people, and very much the target audience of like people that like to dabble with new and open source stuff. They don't really like hosted things, so I could always say "Look, you can try it out here, and then you install it yourself." So I did a number of posts there. The community has really, really been nice to me, have suggested features, and so on, they've integrated it into things, and so on. So let's say 90% was spent trying to "Here's a new feature" with that community.

I did \[unintelligible 00:44:59.27\] Hacker News post that took off, or somebody else posted it and that took off... So that was nice. And then recently, very recently, it got picked up by Network Chuck on YouTube, and he has like 3 million subscribers, so that doubled the number of users. That was pretty cool.

But yeah, other than that, I've tried to make it as simple as possible, and make the docs the best docs that you could ever imagine. So the documentation has a lot of screenshots, and videos, and so on... And I think the easier it is for people to get started, the more hooked you get. When you look at others, you understand what it is, but sometimes it's like "Oh, how do I do this?" It's tricky to get started, and I think ntfy doesn't have that problem.

The other thing that I did was - in the very beginning there's a standard called Unified Push, where it's a set of specifications, is what they call it; it's not really an official standard. But it's a project that lets users choose how push notifications are delivered to their devices.

\[00:46:12.12\] So it's meant to be a competitor to Google's FCM Firebase, in an open source way. So instead of talking to Google servers, you can pick the provider that delivers your messages. And as ntfy, I worked with the Unified Push team to integrate ntfy as a distributor. So a lot of the traffic on ntfy.sh isn't people sending messages to themselves, it's your matrix client, your element and your various apps that support Unified Push, that just deliver messages from their app server to their Android app, and use ntfy as a sort of delivery person. So it notifies just the vessel to deliver the message to the local app. That sort of made people aware, because they installed Unified Push on their websites as "If you want to just get it going, use ntfy."

**Jerod Santo:** I see. So they find it because they install the app, they get the ntfy app, and now they're aware of the service.

**Philipp Heckel:** Correct.

**Jerod Santo:** Are the people building their own apps? Or is that just like "Why? Just use the ntfy app." I imagine if somebody would want to white label it, or... Is there any reason to just bypass the ntfy app and build your own sub on the Pub/Sub?

**Philipp Heckel:** So there's people trying to build on top of ntfy, which I think historically has been tricky, because they expect it to be white-labelable. \[laughs\]

**Jerod Santo:** Yeah.

**Philipp Heckel:** And sort of expect it to be what FCM is. So I think most people that try to build their app on top of ntfy really want Firebase, and don't know that Firebase exists. So a lot of people have reached out to me and want to contract me to help them integrate ntfy into things, and every now and then I do help people, but most of the time I say "What you really want is -- I'd love to, for you to give me money to help you work on your app, but what you really want is this." And it's mostly Firebase that they want. They want to deliver their custom push notifications to their \[unintelligible 00:48:28.06\] then that's not what it's for. It can work that way, but really, what you want is this.

**Jerod Santo:** That could be your moneymaker though. As long as FCM stays no limit, at zero prices, you could offer that for people to build their own house on top of ntfy.

**Philipp Heckel:** I could, I could. Again, fun-driven development.

**Jerod Santo:** Right. Not fun?

**Philipp Heckel:** I don't know. I'd rather do the features that people want. People wanted Markdown, and I was like "I don't really like too fancy styles. I want it to be clean and look nice." But people wanted Markdown, so I added markdown. People want end-to-end encryption, so they want to be able to send private messages, and I'm like "Yeah, that should really be up there." So I'll work on that next, probably. And so on.

**Jerod Santo:** So what's on your fun list though? What would you work on if it was just you using it? I mean, assuming that you'd still be working on it.

**Philipp Heckel:** Yeah, that's a good question. I didn't prepare that questions... \[laughter\]

**Jerod Santo:** Ha-ha! I've finally found one.

**Philipp Heckel:** You've found one.

**Jerod Santo:** He's not ready for this...

**Philipp Heckel:** What would I do...? So what I really wanted for a long time is to be able to update messages. And that's not just me wanting it. But the ability to send a message, and then send a second message to update the first one. So think of like you're downloading a large file, and you have a little progress bar in your phone that just shows... I don't know. Or you're downloading a movie, or you're -- there's 1,000 use cases for that.

\[00:50:06.10\] I just find the idea of having a progress bar on my phone for something that is somewhere else is kind of cool. I've tried implementing that, and the way I implemented it in the server - it makes it just tricky. It's not hard to do, it's just the way I initially designed the software makes it hard to refactor. But that's a feature that I always wanted.

**Jerod Santo:** A progress bar on your phone for something that's progressing elsewhere.

**Philipp Heckel:** I know it's weird... \[laughs\] But why not?

**Jerod Santo:** I've never wanted that before...

**Philipp Heckel:** I mean, there's so many things that you didn't know you wanted, right?

**Jerod Santo:** True. I mean, I \[unintelligible 00:50:43.29\] at this point, so...

**Philipp Heckel:** Exactly.

**Jerod Santo:** You're telling me stuff that I didn't know I wanted.

**Philipp Heckel:** Maybe I'll build a browser.

**Jerod Santo:** Heeey, there's a nice curveball. You know I want a browser... But there's a lot of people tackling that at this point, it seems like. Okay, I guess that would definitely be a scratch your own itch kind of a feature. Obviously, other people think it's cool as well. Have you ever considered just hanging it up?

**Philipp Heckel:** You mean --

**Jerod Santo:** Being done.

**Philipp Heckel:** Not working on it, being done?

**Jerod Santo:** Yeah. Hanging them up, you know? Putting your sign up. Finished.

**Philipp Heckel:** No...?

**Jerod Santo:** How long have you been working on it?

**Philipp Heckel:** Not very long. It's not even two years.

**Jerod Santo:** Okay.

**Philipp Heckel:** I do consider the Android app to be relatively complete... Because the idea is very Unixy. It's a tool. It does one thing and it does it really well, I think. And there's only so much you can add to notifications. So what else could you possibly do?

**Jerod Santo:** Progress bars.

**Philipp Heckel:** Of course, there's a thousand things. Progress bars... \[laughs\] No, I mean, if you look at the GitHub issues and sort them by thumbs up, there's a lot of things that people want. I'm not going to do all of them, I'm not going to do most of them, but a lot of people have great ideas of what could be added. And to keep a tool small and not complicated, like simple, simple, simple, you just have to stop at some point. And that's tricky if you like working on it. It's tricky to just stop. And hanging it up, definitely not, because that would imply that I let people down, and I don't want to let people

down.

**Jerod Santo:** It's self-hostable, Phil. You can't let anybody down.

**Philipp Heckel:** Well, you have to update software, you know that.

**Jerod Santo:** \[laughs\] That's true. Truly valuable tools that are open source will be picked up by somebody else. But I agree that you don't want to let anybody down. Top voted features right now - end to end encryption; you already talked about that one. Update/delete notifications. I believe that's your progress bar one right there. And then publish messages in the app, which you already talked about. So you're on top of it. These are things that people want. Synchronize between devices...

**Philipp Heckel:** \[00:53:04.03\] Yeah, that's a little odd. Ntfy was built by -- the same goes for the web app. It's a web app that only runs in the browser, and stores state in the browser. There's no account.

**Jerod Santo:** So it's just an API client.

**Philipp Heckel:** Yeah. Because ntfy started without accounts. Accounts were added later. The web app has to work in a way that it doesn't have accounts. So when you subscribe to a topic, it's stored in the local browser, local storage. The same way an Android app stores it just locally, because you don't have an account to link it to. Now that I have accounts, the web app syncs with that account, the Android app doesn't. So that feature is half done... But it's weird that you can log into an account from the Android app; it doesn't \[unintelligible 00:53:54.16\] subscribe topics. It doesn't behave like a WhatsApp would; when you read a message, that it's read everywhere. Basically, every client is independent, so that's what that means.

**Jerod Santo:** Cool, man. Anything I didn't ask you, that you had on your list of answers?

**Philipp Heckel:** \[laughs\] You make me sound like I'm overly prepared...

**Jerod Santo:** \[laughs\] No, you're just well prepared, not overly prepared. You're just well prepared, which I appreciate, and I'm sure our listener appreciates.

**Philipp Heckel:** I am German, so that's probably why.

**Jerod Santo:** I love anybody who's prepared for anything, so I appreciate you having some thoughts prepared. Anything that you expected me to ask, that I haven't asked, or that we haven't talked about? Any aspects of the project, anything that you think our listener would still want to hear about before we let them go?

**Philipp Heckel:** No, I mean, I just want to say thank you to all the ntfy users and people who have contributed code and ideas, and help other people in the Discord and in the Matrix chat. It's just fantastic to see a tiny little project grow. It's humbling to see yourself in like podcasts; it's weird to me. I appreciate the opportunity, and thank you very much for letting me be here and be a guest.

**Jerod Santo:** Well, you're welcome. Thanks for joining us. Like I said, I'm a user, I'm a fan, and I love that it's open source. Pretty much the spirit of what you're doing is combining with the spirit of things that I like. So that's why you're here, and I think our listeners are going to also -- if they don't know about it, I think they're gonna enjoy checking it out, setting it up for themselves, perhaps, self-hosting, or just curling the endpoint when their backups finish, and see that cool, non-Markdown, non-attachment version on their iOS apps... Until somebody hops in there and helps fill out with this iOS apps. I'm missing features, y'all. I didn't know this. I'm missing features.

**Philipp Heckel:** Please do help. Please do help me out.

**Jerod Santo:** Alright. Thanks, Phil. This has been lots of fun.

**Philipp Heckel:** Thank you.
