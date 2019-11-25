**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is episode number 40, and our sponsors for today are Toptal and The Ultimate Go Training Series.

On the show today we have myself, Erik St. Martin, we also have Carlisia Pinto - say hello, Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And our special guest today is actually Luna Duclos. I don't wanna spoil a little too much about what we're gonna talk about, so I'll let you give a little introduction about yourself and what you're working on.

**Luna Duclos:** Alright, hi everyone! I'm Luna Duclos, and I am one of the few game developers that works full-time with Go. Today we'll be talking a little bit more about that - what I do day-to-day, how the development stack at my current job works, and probably a bit about my previous job as well, and some of the open source stuff I do, and some of the community involvement stuff I participate in.

**Erik St. Martin:** The game development is one of the really exciting areas; you're one of the few people that I've heard do game development. Is this like backend server technology for MMOs, or is this actual frontend, OpenGL, DirectX stuff? Where is that line drawn with Go, versus other languages you might use?

**Luna Duclos:** In my case I don't touch the client computers at all. There won't be a single line of my code running on anyone's computer, except for our own servers. What I mostly work on is the web stack, as well as the game servers themselves.

In my case, I work on a game called the Hunter Classic. It is an online single and multiplayer game with regular competitions, leaderboards between hunters. A large website, regular competitions and that kind of stuff.

**Erik St. Martin:** That's really interesting. So I guess understanding the game a little bit helps with what the infrastructure is, because different types of games have different needs. Is this like a zone based game?

**Luna Duclos:** No, it is a lobby based game. If you've played Diablo, it's a perfect example. Diablo has a lobby; you can create a game, you can join other people's games... In the Hunter's case, the actual multiplayer is peer-to-peer, so there is no involvement from the server for the actual multiplayer play in the game that uses \[unintelligible 00:03:12.23\]

What the servers do is they handle all the competitions, the whole scoring system, as well as regular rotations, an in-game store, inventory management, that kind of stuff.

**Erik St. Martin:** Oh, excellent.

**Luna Duclos:** Basically, they handle all the stuff that persists between games, while the actual multiplayer within a game session is handled peer-to-peer.

**Brian Ketelsen:** And what sort of technologies are the client side the game's written in?

**Luna Duclos:** Like most other companies, we use C++ to write game clients. Avalanche Studios, which is my employer, has their own engine which they use to build all their games, so that's what's also being used for The Hunter Classic.

**Erik St. Martin:** \[00:03:59.28\] So what was the motivation for using Go on the server side, with already having a development group that is familiar with C++ and stuff? Was there a productivity gain, or...?

**Luna Duclos:** There were multiple reasons. The main reason is that the existing servers before I started were not written in C++ to start with. They are written in PHP and Python, running on [AppEngine](https://cloud.google.com/appengine/). It works; the old servers are still powering the game and doing their thing, but Python being a weakly typed language means it's really fast to develop in, however it's really easy to break things in such a large codebase as the Hunter has, which is why there's now a process ongoing to start moving development of new features to Go.

We have several Go servers running on [Kubernetes](https://kubernetes.io/), and all new features are going to those servers, rather than the old Python app engine ones. We're also slowly migrating over all features to the new servers, as time allows. The main reason is mostly that Go is much faster, which means cheaper servers, and it's also much harder to break things with Go, compared to Python.

**Erik St. Martin:** Okay, so this is kind of like a microservice based architecture, and inventory management is handled by one service; rather than kind of continuing to maintain that particular service that may be running in PHP or Python, you're slowly rebuilding these things in Go.

**Luna Duclos:** That's right.

**Erik St. Martin:** Okay. And what kind of performance and resource benefits or gains have you seen from that? Are you significantly less servers now that you're rolling these things over?

**Luna Duclos:** There's two performance gains we've seen. One, we're moving from Python to Go - that's the obvious one, Go is much faster, consumes much less CPU. But there's a second gain as well, and that's moving from App Engine to actual VMs. App Engine servers are quite small, and constrained on CPU despite that fairly high price, so we've seen there's much gain from switching from Python to Go, as from switching from App Engine to actual virtual machines.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** You said you're also doing Kubernetes too, right?

**Luna Duclos:** Yeah, the whole new Go cluster is running in Kubernetes. It's running in Google Cloud on a [GKE](https://cloud.google.com/kubernetes-engine/) cluster, which is Google's managed Kubernetes offering. So we don't have to manage the cluster ourselves, Google does it for us.

**Brian Ketelsen:** One of the biggest things that I remember in the last couple of months that you did was the [Kube-Cert-Manager extension for Kubernetes](https://github.com/PalmStoneGames/kube-cert-manager). Can you tell us about that? That's really exciting.

**Luna Duclos:** Yeah, it was actually from my previous job, though. As some people might know, I used to be self-employed and had my own business called Palm Stone Games. I was also running Kubernetes clusters at Palm Stone games, and as part of that we were using [LetsEncrypt](https://letsencrypt.org/) as our SSL provider.

We did not want to request certs manually every month - that's just asking for things to expire - and neither did we want to use Kubernetes Ingress objects, which was the only way to get LetsEncrypt to work automatically at the time.

So I ended up deciding to fork Kelsey Hightower's Kube-Cert-Manager project. I took all the documentation, as well as the basic approach of how things work, and I decided to rewrite the whole codebase to use Xenolf/Lego instead of a self-rolled Lego library, which meant that Kube-Cert-Manager, my fork, magically had support for over 20 DNS providers, while there was only one in Kelsey's version.

\[00:08:11.11\] That was the main motivation for everything. There were already documentations in place, there was already a designing place for how things work, it just needed to be fleshed out to work with more DNS providers and be easier to deploy and set up. So that's what I did with the rewrite of it.

**Erik St. Martin:** Are these still two individual projects, or have they since been merged together?

**Luna Duclos:** They are two individual projects still, however there hasn't really been any activity on Kelsey's fork, so I'm not sure how alive it actually is.

**Brian Ketelsen:** Kelsey's was just a proof of concept that he wrote for a talk. I don't think he intended it to be a long-living project.

**Luna Duclos:** That's right.

**Brian Ketelsen:** So that's really cool. I've used your extension and it's awesome.

**Luna Duclos:** Thank you!

**Erik St. Martin:** And for anybody who might not be aware of what we're talking about, as you throw up individual services that may be publically exposed in Kubernetes, this is basically something that you can run inside your Kubernetes cluster to basically issue SSL certificates on the fly using LetsEncrypt for the things that you deploy, which is just awesome.

All of us remember struggling through -- you have to go to your SSL provider and you have to get all the certs and then upload them to all the servers... All of that is gone. I hate getting the emails... I actually spaced out my SSL cert renewals so that I wouldn't have to do a bunch at one time. \[laughter\]

**Brian Ketelsen:** Now I get emails from LetsEncrypt that says my certificates are expiring and it's yet another reminder of failed projects... You know, this thing that I started up a couple months ago, isn't in use anymore, your certificate is expiring... "Oh yeah, I remember when I did that." \[laughter\] It's just like the domain's expiring. "Oh, I remember registering that domain. Oops..."

**Erik St. Martin:** Whenever I get the domain renewals I have to question my motivation, like... I was pretty dumb for buying that before, and I've not used it for three years now. Um, I'm gonna renew it anyway...

**Brian Ketelsen:** Yeah, let's renew it. \[laughter\]

**Erik St. Martin:** You know, it's that whole "One day this might be useful to me."

**Luna Duclos:** Well, I guess they cost little enough, that's actually a valid reasoning too.

**Erik St. Martin:** So actually, here's proof... Brian had owned [GopherAcademy.com](https://gopheracademy.com/) for some reason long before we had ever considered a conference or anything like that, and it was like "Well, we kind of need an entity to run the conference... Hey, don't you still own GopherAcademy?"

**Brian Ketelsen:** Yeah, let me whip out my domain Rolodex and let's take a look.

**Luna Duclos:** That is awesome!

**Erik St. Martin:** So there is proof right there that this happens. It could be useful one day.

**Brian Ketelsen:** That's right. I'm validated. Thank you, Erik. I'm buying more domains now. I'll be back. \[laughter\]

**Erik St. Martin:** You're like, "But one of them... One of them was actually useful!" So what other projects are you working on these days?

**Luna Duclos:** I recently released a project called [Instrumented SQL](https://github.com/ExpansiveWorlds/instrumentedsql). With the Go 1.8 release we had this nice context that we could pass to the database SQL package, but no one seemed to have started working on instrumentation using that concept, so I ended up needing instrumentation at work, and after checking with the big boss, I was allowed to open source that instrumentation, which is how Instrumented SQL was born.

\[00:11:54.17\] It's a wrapping driver, basically. It will grab another SQL driver, it will wrap it with instrumentation and logging, and you can then call the wrapping driver using just a regular database SQL package, and everything will automatically be traced and logged for you based on the tracer and logger object in the contexts that are passed along.

There is one caveat, and that's it grabs tracers and loggers from the context - that means you cannot use the non-context functions, because those cannot be traced, because it doesn't know what request they belong to.

**Erik St. Martin:** Oh, interesting.

**Brian Ketelsen:** There aren't that many of the non-context functions in the 1.8 SQL though, are there? I'm trying to think...

**Luna Duclos:** They didn't remove any because of the Go 1.0 compatibility guarantee, so they're still all there... You just shouldn't be using them anymore if you want to instrument your SQL calls.

**Brian Ketelsen:** Yeah... What I was saying was there aren't that many that don't have an equivalent with context in the function...

**Luna Duclos:** Oh, yeah. You're right, there are none, to my knowledge, that don't have an equivalent, so... Yeah, it's just a matter of adding a bunch of context after every function call.

**Erik St. Martin:** So what kind of data is logged from here?

**Luna Duclos:** The instrumented SQL function can trace calls, so it can use [Open Tracing](https://opentracing.io/) or Google tracing to build up traces from every call, and it can also log every SQL call, so it spits out the SQL along with all the arguments that were passed to a logger that you can pass in. That's it. It's really simple, but it's been quite useful.

**Brian Ketelsen:** Yeah, it's crazy powerful.

**Erik St. Martin:** Even in the Rails space, being able to look through the log and see what queries were being run, and seeing time...

**Luna Duclos:** Yes, exactly.

**Brian Ketelsen:** Thank you, Active Record. \[laughter\]

**Luna Duclos:** Yeah, this is basically the same thing... It's five lines of code to get full tracing and full logging out of every SQL call that you do.

**Erik St. Martin:** What kind of configuration is there? Could you have it only log queries that take longer than some specified time?

**Luna Duclos:** Not currently, no. Currently, you can either log everything, log nothing, trace everything or trace nothing, and that's it. There's currently no middle ground. But one of the things planned is to add more generic hooks, so you can add some logic to decide whether you wanna trace things or not.

**Erik St. Martin:** It's still useful, especially with an open tracing backend to it to be able to submit to.

**Brian Ketelsen:** Yeah, that's really awesome. Really cool. That hasn't been out very long, has it? I think I probably first ran across that maybe two or three weeks ago.

**Luna Duclos:** It's a week old, so... Yeah, very new.

**Brian Ketelsen:** Now you understand my sense of time. \[laughter\]

**Luna Duclos:** Quite an interesting sense of time, actually.

**Carlisia Pinto:** I did wanna ask her a question that's related to gaming... I think I might have missed the boat.

**Erik St. Martin:** No, no... I had some more questions, too.

**Carlisia Pinto:** Luna, did you use libraries? Were there useful libraries that were helpful in developing game-specific functionality?

**Luna Duclos:** With Go, honestly, not really... Most of the server stuff I do isn't game-specific per se. There's some specific things, like handling achievements, handling user accounts, handling leaderboards and scores, but there's not really any libraries for any of that. So I haven't really been touching any of the Go game-specific libraries. They're all mostly aimed at making game clients, rather than making game servers.

**Carlisia Pinto:** Okay.

**Erik St. Martin:** \[00:15:54.13\] Yeah, in the game world, most people use some sort of engine which provides all the physics and all the graphic support, and then there's usually scripting languages and things like that built into it too for a lot of the frontend work. A few places work on their own, but a lot of people just lease, or - is there a right term for that? But yeah, they basically pay for the rights to use an engine. But you're right, a lot of work goes on the back side now. Very few games are client-only anymore.

**Luna Duclos:** Yeah... There's a couple that get away with just peer-to-peer multiplayer, but I think that's the lowest you can get away with these days. But yeah, a lot of games end up using at least a little bit of server work.

**Erik St. Martin:** Well, almost everybody has achievements, leaderboards or things like that... There's all kinds of things that need to happen there. And in the console world, you're starting to notice that even when they're single player games, content is being loaded in that may have been created through somebody else's game now, too.

**Luna Duclos:** That's true. On PC (at least) there's also a scheme that magically handles a lot of things for game devs... Like, Steam handles cloud saves, Steam handles achievements, Steam handles patching and all the hard infrastructure bits for a lot of game developers.

**Erik St. Martin:** Yeah, that's a lot of stuff that used to be duplicate work, and now you can just kind of...

**Luna Duclos:** Indeed... Now you can just go "Steam, do this stuff for me", and you have it done.

**Erik St. Martin:** And it's a marketplace... Almost like an app store or some things like that for mobile.

**Luna Duclos:** Yeah, indeed.

**Erik St. Martin:** And even for, say, my Mac, I don't really shop the internet for software, I open up the App Store and I type in a keyword... Like, "Huh, there's all the apps that do that."

So with your interest in Go and game development, have you played with any of the game engine, client-side stuff written in Go?

**Luna Duclos:** The ones written in Go, no. I haven't had a look at them, except for a quick glance. The main reason for that is that they can't really compete with a fully-funded UE4, or a fully-funded Unity with a whole development team dedicated behind them.

**Erik St. Martin:** Yeah, I guess that would be the thought... They'd be more targeted towards indie style games. A major title, you almost have to go with some of the common ones.

**Brian Ketelsen:** Unreal Engine...

**Luna Duclos:** Unreal, Unity, Frostbite...

**Erik St. Martin:** Yeah... If you're gonna build a major title, almost everybody uses those types of things, except for the people creating them.

**Luna Duclos:** Pretty much, yeah.

**Brian Ketelsen:** I'd like to change the subject just a little bit... Or did you need to take a sponsor break, Erik?

**Erik St. Martin:** Now is the perfect time for a sponsor break.

**Brian Ketelsen:** Okay, why don't you that, and then I will change the subject when we get back.

**Erik St. Martin:** Alright, so our first sponsor for today is Toptal.

**Break:** \[00:19:08.01\]

**Erik St. Martin:** Alright, we are back, talking to Luna Duclos. Just before the break, Brian, you wanted to change the subject. What is your new subject?

**Brian Ketelsen:** I wanna talk about something that's near and dear to my heart, probably my favorite thing in the entire world, and that's frontend web development... \[laughter\] Luna, I know you've had a lot of activity in the GopherJS world, and way back when I was trying to figure out whether I could actually do [GopherJS](https://github.com/gopherjs/gopherjs), you had written the Polymer bindings for GopherJS. Do you still spend a lot of time in GopherJS?

**Luna Duclos:** \[00:20:15.25\] I actually don't at all anymore... I haven't touched GopherJS since I changed jobs in December, unfortunately. Polymer is still a really interesting technology I'd like to spend more time on, as well. Unfortunately, currently I don't have enough time in a day to do so.

**Brian Ketelsen:** That's a shame.

**Luna Duclos:** I'm sorry. \[laughter\]

**Brian Ketelsen:** I love web development so much that, you know, it just breaks my heart.

**Erik St. Martin:** Do I need to read some scrollback here, Brian? You love web development... \[laughter\]

**Brian Ketelsen:** I am so frustrated right now with frontend web development, I would be happy to just throw the whole thing out... Just the whole thing. Done. I'm done.

**Luna Duclos:** Well, don't get me wrong, I still do quite a bit of frontend myself. The web stuff most always ends up on the lap of the backend people, so I'm still doing web development with JavaScript as well, just not with GopherJS anymore, unfortunately.

**Brian Ketelsen:** GopherJS is sure getting cool, though. Every time I look for a binding for the bigger packages there is one now, which is really cool.

**Luna Duclos:** Indeed, yeah.

**Brian Ketelsen:** And it's not that difficult to make your own.

**Luna Duclos:** Actually, do you know if anyone has made a binding for the second version of Polymer? My binding sticks to V1, so I'm actually curious if anyone took the torch, so to speak, and made one for V2.

**Brian Ketelsen:** I don't think so, but I haven't looked recently. I was looking at the Angular ones.

**Luna Duclos:** Oh, there's an Angular binding... That's cool.

**Brian Ketelsen:** Yeah, there is, and there are two or three different React bindings now, there's Mithril bindings, there's Vue bindings...

**Luna Duclos:** Very nice.

**Erik St. Martin:** I haven't played a lot with the bindings or GopherJS... I tend to just separate... There's the API, and there's kind of the frontend code.

**Luna Duclos:** Yeah, same here, pretty much. In an ideal world, I want to just deploy some static HTML, CSS and JavaScript and do everything on the REST API. But that's the perfect world scenario right there.

**Brian Ketelsen:** Yeah, my biggest problem with GopherJS is that although it's so much easier to write frontend code in GopherJS, I still have the lack of knowledge of frontend technologies, events, DOM, that sort of stuff... So now I've added another layer of translation that I have to make in order to use that, and it makes it harder for me, not easier.

**Luna Duclos:** Yeah. And there's also the fact that you're gonna have a hard time hiring someone that knows GopherJS already. You're almost always gonna have to teach them from scratch... At least if you hire a frontend dedicated developer. It's been one of the big show-stoppers for me for GopherJS, actually. It's not big enough yet to have a hiring pool.

**Erik St. Martin:** Yeah, because typically in a larger organization you're gonna have your frontend people and your backend people, so you would have to teach your frontend people Go in order to use GopherJS.

**Luna Duclos:** Indeed.

**Erik St. Martin:** That's interesting. And Brian, I think most of your struggles are usually because when you have to do fronted, you're usually trying to do it in a hurry. \[laughter\]

**Brian Ketelsen:** \[00:23:43.02\] That's not true. My struggles are because when I have to do frontend, it's a freakin' disaster. Has anybody actually looked at the JavaScript ecosystem recently? The problem I had - it was maybe two nights ago - was I was writing a TypeScript application for Angular 2, and then I had to bring in another library that wasn't TypeScript and it wasn't using the same module packaging format... Because I had to go down that rabbit hole, now I understand that there's AMD module packaging and UMD, and SystemJS and all of these different module packages... That's why I think the whole thing should just burn in a trash fire. \[laughter\] It's so complicated trying to make stuff work. It's frustrating.

**Luna Duclos:** I will not disagree with you. I've had my share of frustrations because of the same reason, and also because -- it was my experience; this is not a diss to all the frontend developers out there, but a lot of frontend developers don't seem to know what they're doing. It's just lots of copy/paste embeds from various places, made to work forcefully in the current context without actually making sense entirely. A lot of the code I've looked at is that way.

**Erik St. Martin:** Yeah, I think there's a couple of issues though, too... A lot of times you end up with frontend developers who are really designers and that's really where their interest is, and they're kind of forced to learn programming. Or you have backend programmers who are just trying to rush to get the frontend stuff done because that's not really what they wanna use...

It seems like there's a lot of fragmentation in that area, to Brian's point... There's so many different ways of doing those things, and I think it's one of the things I love about Go so much - enforcing these patterns. Mostly people do things the same way. There's not like "Well, how are you managing these things? How are you doing dependency management and asset pipelines and things like that?"

**Luna Duclos:** Yeah. I think if there was a Go equivalent - there thankfully isn't - it would be "Which context package are you using?" Thankfully, we haven't gone there.

**Brian Ketelsen:** Somebody on Twitter -- when I made my snarky tweet about all of the different package management systems and dependency management in JavaScript, somebody said "Well, we've got 28 versions of vendoring tools in Go", and that's true... But we have one vendor standard.

**Luna Duclos:** Yeah, and regardless of which one you use, it pretty much works.

**Brian Ketelsen:** So that is quite a bit different, although I understand that we have fragmentation, at least in the vendoring side. Apps are apps in Go, and it is quite a bit easier.

**Luna Duclos:** We're slowly solving it, though. Hopefully [Godep](https://github.com/tools/godep) comes out and fixed all those issues... Though I have my doubts a little bit, but we'll see how that goes.

**Brian Ketelsen:** Only time will tell.

**Luna Duclos:** Indeed.

**Erik St. Martin:** Where is Carlisia at?

**Carlisia Pinto:** I'm here... You guys are asking great questions. \[laughter\]

**Brian Ketelsen:** She's writing a new dependency manager for JavaScript for me. \[laughter\]

**Carlisia Pinto:** That's funny.

**Erik St. Martin:** She's just sitting here thinking about like "Wow, I didn't realize how much Brian needed frontend." \[laughter\]

**Brian Ketelsen:** It's not that I hate it. I mean... I actually crossed a point recently where I feel like I can understand TypeScript, because it's got classes, it's got types, it's much more strongly typed than regular JavaScript... I kind of get behind that; it's not bad. And Angular is pretty easy to do for me; it's easier than most of the others. So if it's just TypeScript and Angular, it's cool. It's when I have to add in all the other stuff. It's that whole web pipeline and Sass compiling...

Once you get into having to mix Gulp and Bauer and Webpack... Just shoot me in the head, right now.

**Luna Duclos:** Brian, how much frontend work have you been forced to do lately?

**Brian Ketelsen:** I'd say 60% of my work in the last month has been frontend. Maybe a little more. Too much.

**Luna Duclos:** \[00:28:08.24\] Fair enough.

**Brian Ketelsen:** I'm getting better slowly. But I'm an old dog.

**Erik St. Martin:** It's changed a lot in recent years.

**Luna Duclos:** It has.

**Erik St. Martin:** It used to be so much involved there, until we got into the "minimize everything", and...

**Luna Duclos:** And now we're moving away from that again with HTTP/2, which actually advises people not to pack all their files together.

**Brian Ketelsen:** Yeah, I got the biggest kick out of that. The rabbit hole that I went down... The people were talking about -- maybe it was on the SystemJS side, I don't remember, but one of the things was bundling to make a single file, but we don't do that anymore, because HTTP/2 means that you can send lots of multiple requests, so you need to decide whether your consumers are going to be HTTP/2 or not, because that affects completely how you bundle your whole app and what your pipeline is, and it's just yet another decision I don't want to make.

**Luna Duclos:** Indeed.

**Erik St. Martin:** I guess it would depend on the way you've had things set up, too. I don't know with a lot of the asset pipeline stuff whether people are still doing this, but one of the tricks that has been around for years is to just have multiple asset domains, because really the browser's limitation is one connection per host; so if you had multiple hosts that your assets were on, it could fetch from each host.

**Luna Duclos:** Yeah. In fact, some CDNs actually do that for you automatically. They'll distribute your content across several domains, and you'll see C1.whateverCDN.com, C2.whateverCDN.com and so on. It's been quite interesting seeing how some apps are starting to integrate with their CDNs more.

**Brian Ketelsen:** I remember that was one of the first Rails plugins that I wrote -- I don't even know what you would call that... A host multiplier that basically treated every server as if it were 20 servers, so you had 20 different asset servers instead of one; that was way back in the day. Asset hosts... Yeah, Steve St. Martin in the channel mentioned that. Before that existed, I wrote one of those... Back in 'Nam. \[laughter\]

**Erik St. Martin:** I can see you back in 'Nam, sharing Rails development stories. \[laughter\] Alright, does anybody wanna talk about anything else - interesting projects, news?

**Brian Ketelsen:** There's a lot of interesting stuff that came out this week. Probably the most exciting one - or at least the most interesting one is the Goggles application. Did anybody see that? From Kyle Banks. [GitHub.com/kylebanks/goggles](https://github.com/KyleBanks/goggles), it's an application that lets you search your GOPATH for code, and it shows you the GoDoc... It's almost like a little admin interface for your GOPATH - it will show you all of the code, all of the GoDoc... It's very pretty and well-written, and it's got a cute little pop-up gopher that comes up when you're searching... A nicely done app.

**Luna Duclos:** Oh yeah, that... I've seen that on Twitter. I've been meaning to try it out, actually. I should do that.

**Erik St. Martin:** You know, Brian, I'm actually really surprised that you installed it, because it requires working with NPM and Gulp.

**Brian Ketelsen:** I've got NPM installed, and Gulp, and Bauer, and Webpack, and... \[laughter\]

**Erik St. Martin:** No, I just mean you're using those things so much...

**Brian Ketelsen:** It's all right here, buddy... It's all right here. My chops are getting strong.

**Erik St. Martin:** I can picture it too, you're like "Wow, this looks really cool! Oh, NPM... How badly do I want this?" \[laughter\]

**Luna Duclos:** I wonder why this hasn't been all bundled in one neat, single Go binary that you can just start up.

**Carlisia Pinto:** \[00:32:03.05\] That's a good idea. I'm trying to get by without installing NPM and Gulp... I don't have those on this machine...

**Brian Ketelsen:** I can tell you, the reason for all of that is because it uses [Gallium](https://github.com/alexflint/gallium), which is the wrapper for the Chrome web app thing that makes it a native app, and I would bet you a dollar that Kyle does not have an Apple developer account, so he can't sign those web apps or sign those Gallium apps, which means that he can't distribute applications in the new MacOS, because they're not signed, so you have to build them yourself. This all boils down to developer signatures.

**Luna Duclos:** Is it Mac only though, or does it also work on Linux?

**Brian Ketelsen:** It's Mac only right now.

**Luna Duclos:** Aw...

**Erik St. Martin:** Well, it seems like most of it is written in Go and frontend stuff, so the Gallium part I think is just what wraps it into a native application. So in theory, there's no reason this couldn't be served up over HTTP and you could hit a local port or something, too.

**Luna Duclos:** Yeah, that's what I was expecting it to do, so... Maybe we should look at that.

**Brian Ketelsen:** If you dig through the source code, the whole system source file under package.sys is all Mac-specific, so it definitely will need at least Linux and Windows versions of that file before it's gonna fly.

**Luna Duclos:** They're very small files though, so it shouldn't be very difficult to get that done.

**Erik St. Martin:** I'm sure he would happily take pull requests, too...

**Brian Ketelsen:** Every time I turn anywhere, I've seen this app on Twitter, on Reddit... It's gotten a lot of attention recently. I think it was even on the Go newsletter today, so it should be getting more attention soon.

**Erik St. Martin:** Did that come too, already? I have not seen the newsletter today.

**Brian Ketelsen:** Yeah, I don't think it was that long ago, though. I think it was just maybe an hour before the show.

**Erik St. Martin:** Okay.

**Brian Ketelsen:** 1:30 PM our time.

**Erik St. Martin:** Alright. What else have we got?

**Brian Ketelsen:** I noticed that the [GoKit](https://github.com/go-kit/kit) team released their 0.4.0 release, and that moved to the inbuilt context library in Go 1.8, so no longer using the Xnet contact package anymore in GoKit, so that's a big release for them.

**Erik St. Martin:** Oh, cool.

**Brian Ketelsen:** Very exciting to see all of the cool stuff coming out of that GoKit package.

**Erik St. Martin:** And speaking of releases too, I think [Gobot](https://gobot.io/) just had a release this week too, didn't it?

**Brian Ketelsen:** I don't know... If they did, I missed it.

**Erik St. Martin:** I will google that.

**Brian Ketelsen:** Is it possible that I missed a release of something?

**Erik St. Martin:** It's quite possible.

**Brian Ketelsen:** Oh yeah, Gobot 1.3, you're right. Now supporting the BBC micro:bit and DragonBoard. Very cool.

**Luna Duclos:** Is anyone using Gobot here?

**Brian Ketelsen:** Yes!

**Luna Duclos:** I'm actually very curious about it, but I don't actually have one of those boards to try it out with.

**Erik St. Martin:** Actually, you can use it with just about anything; if you have a Raspberry Pi, or BeableBone... You can run Gobot on anything that basically has GPIO.

**Brian Ketelsen:** Yeah, Intel Edison... You name it. It runs on everything. I have a project called Cupid, which is a barbecue controlling application that runs on a Raspberry Pi, and it controls my barbecue. That all runs on Gobot.

**Luna Duclos:** That is awesome.

**Brian Ketelsen:** It really is cool. It's the only way to barbecue.

**Luna Duclos:** \[laughs\] You need to invite me to one of those.

**Brian Ketelsen:** Any day!

**Erik St. Martin:** Hardware is interesting, because I don't think many of us think much about it, aside from using embedded devices. But actually developing against it is really cool, because we all love programming and we love seeing the things that come to life... But being able to see it interact with physical objects is just ridiculously cool, like the smoker controlling the temperature... Like, there's Go code controlling that, and Brian wrote it!

**Brian Ketelsen:** \[00:36:08.27\] It's really cool. I also have used Gobot to control AR Drone drones at my kids' school. We do a thing every year called The Great American Teach-In where parents come in and talk about what they do. I couldn't explain to the students that my work is actually that boring, so I did Gobot with drones, and the kids who were eight years old programmed the drone to fly around the room, and they did a little fly-by of a teacher, and it was really cool. And all that is Go powered.

**Luna Duclos:** That sounds awesome.

**Erik St. Martin:** I wonder if there's a list somewhere of all the projects that are currently using it... They have interfaces with all kinds of cool little toys. Have you seen the Sphero? It's like a little ball that rolls around, and you can jump it, and you can play with it with your mobile phone... But they have an interface for that for Gobot. A ton of cool stuff. How about you, Carlisia? Did you see any cool projects or anything that you're excited about?

**Carlisia Pinto:** Oh, I thought you were going to ask me if I'm using Gobot...

**Erik St. Martin:** Or Gobot...

**Carlisia Pinto:** \[laughs\] No... Yes, I wanted to mentioned that the Women Who Go -- well, Sarah Adams, the founder of [Women Who Go](https://www.womenwhogo.org/) launched an initiative to send women Go developers to [GopherCon](https://www.gophercon.com/). There are a lot of us who would not be able to afford and who don't have their company sponsor, so there's a crowdfunding effort for that. If people wanna contribute $10, $1,000... Anything is welcome, of course.

**Erik St. Martin:** A million dollars...

**Carlisia Pinto:** A million dollars... \[laughter\] And it's tax-deductible, because women who Go now is part of [Bridge Foundry](https://bridgefoundry.org/), same as [GoBridge](https://golangbridge.org/). I don't know how the tax-deductible part of this works for the Women Who Go for this initiative, but I think it is tax-deductible.

**Erik St. Martin:** Yeah, the Bridge Foundry, which is a 501(c)(3) probably collects the money, which makes it tax-deductible.

**Carlisia Pinto:** I don't know, just because it's dumping at the website via this Generosity.com website, so I don't know how that applies.

**Erik St. Martin:** And we should soon too be... So in addition to trying to help with that, we also will be doing a diversity and economic hardship type scholarship initiative too, once we finish getting some more planning in place for some of the other GopherCon stuff. But there will be ways for people to apply for assistance to come to GopherCon too, who may not necessarily be women.

**Carlisia Pinto:** Yeah. GoBridge is also going to be doing something... They'll make an announcement in a little bit...

**Luna Duclos:** Are there any plans for a GopherCon outside of the U.S. yet? I wonder...

**Erik St. Martin:** We keep thinking and talking about that.

**Luna Duclos:** Oh, okay.

**Erik St. Martin:** We've also been saying that about regionals, too... I think it comes down to time, because right now Brian and I have day job stuff that pays the bills, and it's already kind of demanding enough on our nights and weeks and stuff to do the one event. So that's why we keep talking about, "Well, how crazy do we have to be to do more than one?" \[laughter\]

**Brian Ketelsen:** The answer to that is "Really crazy."

**Erik St. Martin:** But we keep talking about it, and if we can find ways to make that work schedule-wise, where we can have the time to work on more than one, yeah, we definitely keep talking about doing another one and where we might do it.

**Brian Ketelsen:** Sweden.

**Luna Duclos:** I would definitely dig Sweden, because I live there. So... Yes, please! \[laughter\]

**Erik St. Martin:** \[00:40:00.20\] I've never been to Sweden, sounds like fun.

**Carlisia Pinto:** Spain... \[laughs\]

**Brian Ketelsen:** Spain would be awesome.

**Carlisia Pinto:** Spain, yeah... Southern Spain.

**Luna Duclos:** Sounds good, too... I have to admit.

**Carlisia Pinto:** One more thing I wanted to mention - there is now an official [Go contribution guide](https://golang.org/doc/contribute.html). [Steve Francia](https://twitter.com/spf13) put it together recently (maybe last week). It gives you all the steps that you need to do to contribute to Go.

**Brian Ketelsen:** That's awesome. I haven't looked at it yet. I saw his announcement, but it's long overdue.

**Luna Duclos:** That's nice.

**Erik St. Martin:** He works ridiculously fast. We've just had him on a couple episodes ago and we were talking about some of this stuff, and he's already on it.

**Luna Duclos:** Way to go!

**Brian Ketelsen:** That's a big doc, too...

**Erik St. Martin:** Yeah, I can't believe I haven't even seen this.

**Carlisia Pinto:** I'll drop a link on Slack.

**Erik St. Martin:** Alright, I'm leaving a tab open... That's a "read later", which gets demoted to "read tomorrow" and then "read this weekend"...

**Brian Ketelsen:** And then "read never"... \[laughter\]

**Carlisia Pinto:** And then Chrome blows up...

**Erik St. Martin:** And then it becomes a bookmark... And two years from now I clean up my bookmarks. \[laughter\]

**Brian Ketelsen:** At least we're honest about it. You know, there was one more package that I wanted to talk about... CockroachDB actually had a blog post about it too, The Arbitrary Precision Decimal Package, so that they could manage data types at arbitrary precision with a little bit more speed than Go allows. So at [GitHub.com/CockroachDB/apd](https://www.cockroachlabs.com/blog/apd-arbitrary-precision-decimal-package/) there's a nice arbitrary precision decimal package. I don't have a link to the blog post, but maybe we can dig that up somewhere, too. I'm pretty sure there was a blog post that went with it.

**Erik St. Martin:** Yeah, we'll find it and we'll drop it in the show notes before this episode is released. So I think now is a perfect time for our second sponsor break. Our second sponsor for today is The Ultimate Go Training Series.

**Break:** \[00:42:10.18\]

**Erik St. Martin:** Alright, we are back, talking to Luna Duclos. Before this break we were just talking about interesting projects and news and stuff, but let's get a little personal here... If you were not developing backend systems for games, what would you be doing? I think this would be a fun thing to start asking people...

**Luna Duclos:** That's a really good question... What would I be doing?

**Erik St. Martin:** And it doesn't even have to be tech?

**Luna Duclos:** I think I would be full-time doing conferences, or working at some cloud provider somewhere on their cloud infrastructure... Or both.

**Erik St. Martin:** By doing conferences you mean hosting them, or attending all of them that you can, speaking at them? All of the above?

**Luna Duclos:** \[00:43:54.23\] Speaking at them and attending, and maybe organize some smaller ones. I've been organizing FOSDAM when I can, because the Go team hasn't been able to do it, so I took that over. Stuff like that, and meetups that aren't too huge to organize. I wouldn't be able to organize something like GopherCon like you guys are... That's just crazy.

**Erik St. Martin:** I don't even know if we can organize GopherCon...

**Luna Duclos:** Yeah, I think that's questionable.

**Erik St. Martin:** It's grown to a scale far beyond our ability, so over the years we've hired people to help with different parts and logistics and things like that. It's interesting though... I love the involvement with the community and doing things for the community, especially the day of the event, seeing how excited everybody is... It's infectious.

**Brian Ketelsen:** We need to make one of those GopherCon excitement curve graphics where you show the day of the conference - excitement level 11, and then four months before the conference - excitement level -50. \[laughter\] It's almost like the adoption curve, maturity model... During the conference it couldn't be any better, it's the best event that's ever happened and it's so awesome getting the community together, but when you're at that point where the conference is two or three months away and all you're doing is making website changes and booking things for speakers, and fighting vendors, and contract changes... All of that stuff, it's like "I wish this conference just be over with, please!"

**Luna Duclos:** I understand.

**Erik St. Martin:** As much as I hate to make the comparison, the way I see it is it's kind of like women in pregnancy...

**Brian Ketelsen:** Oh, danger, Will Robinson!

**Erik St. Martin:** "I'm never doing this again! I'm done!" Like, "I'm so ready for this baby..." and then later they see another cute baby, they're like "Oh, I want another one..." \[laughter\] It's the same thing for us. We go through our period where we're like "I don't know whether I wanna do this again" and then we're like "Oh my god, we need to do 20 conferences!" \[laughter\]

**Brian Ketelsen:** Yeah, three years in a row, we've said... And after the conference we're like "We're not doing this again!" \[laughter\]

**Luna Duclos:** You have been doing it again!

**Brian Ketelsen:** Yeah, it's amazing how that works.

**Erik St. Martin:** I think we should make this fair, too... We're gonna go around the virtual room here - if you are not writing code, Brian, what would you be doing?

**Brian Ketelsen:** I'd be a professional hitman. \[laughter\]

**Erik St. Martin:** I was not expecting that one.

**Luna Duclos:** I was expecting a full-time barbecue shop, actually.

**Brian Ketelsen:** There's no money in that... It's interesting, most of my older family members are in the restaurant business, and the restaurant industry has almost a Maslow's hierarchy of types of food, and barbecue is the lowest demand food when there is a recession in place. People eat barbecue last when there's a recession, so it's not a recession-proof restaurant... So I would just never open a barbecue restaurant.

Besides, I think you'd lose a lot of the fun if you were cooking for a paycheck instead of just cooking for the whole neighborhood, like I do.

**Luna Duclos:** That's true.

**Erik St. Martin:** What's really interesting about that though is it's the reverse of what you would expect. Barbecue actually started out in very poor areas, because you've got things like, the front quarter of a cow was almost waste for a long time, and they would just chop it up and grind it up and make sausage out of it, they'd slow cook it in the butcher shops and stuff like that to preserve it, and then they'd sell it with like chopped beef sandwiches and things like that. People would slow cook the toughest parts of the cow that nobody wanted until it was tender, and then eat it.

\[00:48:06.07\] Then it was somewhere along the line people started traveling to areas and tasting barbecue and being like "Oh my god, I love this!" and brisket went from 70 cents/pound to -- I don't even know what is it, like $700/pound now... It's ridiculous.

**Brian Ketelsen:** Eight million dollars a pound...

**Erik St. Martin:** \[laughs\] So it's kind of crazy that it's reversed like that, because the best way you could feed the most amount of people was to take a pig and throw the pig on...

Carlisia, you're not getting out of this... What would you be doing?

**Carlisia Pinto:** \[laughs\] The banter gave me time to think... I would be a professional investor, looking for opportunities to invest in things that would be not only profitable, but good to a certain standard - I'm not gonna get into it; I don't even know what that means. But whatever I think would generate good will in the world. And of course, a lot of it would be tech, because it's what I know and it's so crucial for the world.

**Erik St. Martin:** I think it'd be a lot of fun.

**Carlisia Pinto:** If I win the lottery, I will definitely become an investor.

**Brian Ketelsen:** What about you, Erik?

**Erik St. Martin:** Oh, I started this, I don't have to answer the question.

**Brian Ketelsen:** Oh, yeah, you do!

**Luna Duclos:** Yes, you do...

**Brian Ketelsen:** You could be my handler.

**Erik St. Martin:** I don't know, it's really hard though... The investment thing would be fun; I love doing community and conference related stuff... Maybe something in information security probably. The hard part is know people in the field and I know the different roles and some of the stuff that you wouldn't wanna do... But if I could have the ultimate -- like, I'd just get grants to sit around and hack technologies that they say are unhackable, I think that's be a lot of fun. Or inventing stuff.

Alright, I'm gonna go with that inventing stuff. Just sitting around with gadgets and electronics and coding, and just trying to solve problems.

**Brian Ketelsen:** You could be Q for me. That'd be awesome!

**Erik St. Martin:** I could be Q?

**Brian Ketelsen:** Q... You know, like James Bond. He walks into the room and Q gives him new tech gadgets... \[laughter\]

**Erik St. Martin:** Can I claim that I didn't know what they were being used for?

**Brian Ketelsen:** Sure. If it ever comes to a congressional committee, don't worry, you'll never make it to trial.

**Erik St. Martin:** "He said it was for hunting... He didn't say people!" \[laughter\] Alright, did anybody have any other cool things they wanna talk about? Or do we wanna do \#FreeSoftwareFriday?

**Brian Ketelsen:** Yes, we have to do \#FreeSoftwareFriday because I have a huge shoutout that everybody's gonna be blown away by, surprised! \[laughter\]

**Luna Duclos:** I'm eagerly waiting for that one!

**Brian Ketelsen:** Are you ready? So my \#FreeSoftwareFriday shoutout is to - drum roll, please - [Webpack](https://webpack.js.org/)! And the reason it's to Webpack is because the documentation on their website is some of the absolute best documentation I've ever seen. I was whining about Webpack on Twitter, and three people came up and said "Did you even RTFM, dude?" And I went to the documentation and I was like, "Holy cow... I should have, because I would probably solve all of my problems if I read this wonderful documentation. So huge shout out to the Webpack team.

It looks like the docs are community-sourced, so everybody in the Webpack community, thank you for all those fantastic documents. Nice!

**Erik St. Martin:** I think owe tremendous gratitude to anybody who works on documentation, because we all need it, and rarely do any of us want to actually contribute to the documentation. I think we have to show love to anybody who invests time in giving us great documentation. How about you, Carlisia?

**Carlisia Pinto:** I don't have one today.

**Erik St. Martin:** \[00:51:51.12\] And Luna... I'm pretty sure you've kind of gathered the gist of this... Every week we give a shoutout to a project or a maintainer (or plurals of those) just to show our love and appreciation.

**Luna Duclos:** Yeah, my shoutout goes, without the shadow of a doubt, to [Goa](https://goa.design/). Goa is a code generation framework that lets you declare a REST API, and will then generate all the validations, all the routes, all the security wrappers, all the middleware for you, without you having to do a thing.

It has saved me so much time, and it's taught me a lot by making designing the API an actual, explicit step of my development process, which is lacking in a lot of places where they just slap APIs together and see if it works afterwards, and to hell if it doesn't make sense.

**Brian Ketelsen:** I'm wearing my Goa shirt, so thumbs up to that one.

**Luna Duclos:** Nice!

**Erik St. Martin:** Yeah, Brian was preaching Goa for almost a year... What happened, Brian? \[laughter\]

**Brian Ketelsen:** Nothing, I still love Goa. I've been following the Goa 2.0 roadmap, and Goa 2.0 is gonna be amazing. They've moved everything into kind of a separation of concerns where your API is separate in the design from the delivery of your API, so you can have a beautiful REST API generated, as well as a nice gRPC API generated from the same design. It's gonna be really good.

**Luna Duclos:** I'm looking forward to that. How stable is it actually, do you know?

**Brian Ketelsen:** The Goa 2.0? It's not done... I was just reading the docs last night; it's not ready yet, but it's getting close. Knowing how fast Raphael codes, it's probably just a couple hours away, but I guess it's really just maybe two or three weeks based on the way it looked in my code review last night.

**Luna Duclos:** Very, very nice.

**Brian Ketelsen:** ...which means I have to rewrite Gorma. Again.

**Luna Duclos:** I will need to start looking at Goa 2.0 then.

**Erik St. Martin:** So that goes back to the whole argument about the fear of creating open source projects is you have to maintain them... Because people will start hounding you, like "Why is this not Goa2-compatible?"

**Luna Duclos:** I've actually experienced the reverse... When I open source things, people make pull requests and fix my bugs for me, without me having to actually do it.

**Erik St. Martin:** Even that has some overhead, though...

**Luna Duclos:** That's true.

**Erik St. Martin:** I get a lot of GitHub chatter, though it ends up in a folder that I rarely check, and then I will feel bad because somebody submitted a pull request or something, and I don't see it for like 9 months...

**Luna Duclos:** Ouch...

**Erik St. Martin:** And I'm like, "I'm a terrible person..." \[laughter\]

**Luna Duclos:** One ritual I have in the morning is when I wake up I go check my GitHub alerts, see if there's anything there. I respond... I can do this before I have my breakfast.

**Erik St. Martin:** Yeah, I need a better schedule, but I feel like the time there... So my \#FreeSoftwareFriday for today is [Helm](https://helm.sh/), which was worked on by the Deis group. I think it might be the first project that got graduated from beta directly into Kubernetes proper. So Helm is a cool tool -- they have these things called "Chart", which are basically pre-packaged applications for running, say, MySQL or Postgres on Kubernetes.

**Brian Ketelsen:** Helm is the bomb.

**Erik St. Martin:** Helm is awesome.

**Luna Duclos:** I need to try this.

**Erik St. Martin:** Because prior to Helm, everybody was pretty much rolling their own stuff.

**Brian Ketelsen:** Yeah, and that's work. I mean, Kubernetes makes your life easier, but not during the part where you're wiring together 62 different Docker files and putting it into YAML format... Oh my gosh!

**Erik St. Martin:** I still love Kubernetes, because the alternative is still worse.

**Brian Ketelsen:** \[00:56:05.06\] Oh yeah, don't get me wrong... I'm not complaining. Just saying that's the least favorite part.

**Erik St. Martin:** You're like, "Oh, man... I have to configure this YAML file to deploy my app" and before it was like, logging into servers...

**Brian Ketelsen:** Right. Well, you know, anything but YAML. Every single time I touch YAML, there is a space somewhere, or a tab somewhere that beats me. Anything but YAML.

**Luna Duclos:** You realize that `kubectl` can eat up JSON files as well, right? You don't have to use YAML if you don't wanna.

**Brian Ketelsen:** I did know that, yes. And now they have nice YAML verification built into the latest `kubectl`, so it's not as bad as it used to be. But when I was a kid, back before Kubernetes was 1.0... Yeah, it was eating my lunch all day long.

**Luna Duclos:** Fair enough,

**Erik St. Martin:** So on the question of what would you be doing - it wouldn't be Python programming, right? Even your spaces...

**Brian Ketelsen:** Oh, are you talking to me? \[laughter\] No... Actually, that's the biggest reason that I've never enjoyed Python, is because all of that white space means something. Stop, don't do that to me. Bad!

**Luna Duclos:** I used to love Python back when I was at school, and after school I went kind of like, "No, I don't actually want to use this to make real things! Too scary!"

**Erik St. Martin:** I don't mind it... I guess I don't really have hatred for any language; I just prefer some languages over others.

**Luna Duclos:** Oh, don't get me wrong, it's not actually because of the white space in my case... It's more the weak typing and all the errors being runtime, rather than compile time. That kind of stuff scares me.

**Erik St. Martin:** I've never had a runtime issue in production. If this was on video, my nose just grew, you know, like a mile long... \[laughter\] I love that about Go; you gain a lot of that stuff from dynamic languages, the way we write software and think about writing software, but that compile time safety is so nice.

**Brian Ketelsen:** It is.

**Luna Duclos:** Oh, yeah...

**Erik St. Martin:** You can't do that, you cannot pass a string where an integer is expected.

**Brian Ketelsen:** I tell you what, though... I was working on like a live admin app for [Buffalo](https://gobuffalo.io/en) this weekend with Ashley McNamara, we were pairing on it on Saturday, trying to figure out a way to make it really nice, like Django admin or Rails Active Admin, but for Buffalo, and I actually hit a point where I wished that Go had generics... It's the first time in seven(ish) year that I was like "Damn, generics would be really useful here." That's the first time it's happened to me. I almost stopped in my tracks and wrote it down.

**Erik St. Martin:** I guess it depends on the type of stuff you work on. There are some fields and problem spaces where I could see generics needing to be used regularly, but for most of us, we're like "Oh, that sucks... I wish I had generics", and we're like "Yeah, but there's another way, and I only have to do this once."

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** In code generation it helps.

**Brian Ketelsen:** Well, that's what I did. Instead of doing any generics, I just wrote a code generator that wrote a code generator, and now I'm done.

**Erik St. Martin:** But who wrote the code generator?

**Brian Ketelsen:** I did. \[laughter\] Which came first? The code or the generator? The answer is the rooster. \[laughter\]

**Erik St. Martin:** Carlisia, you're awfully quiet today.

**Carlisia Pinto:** I am, I don't know why. \[laughs\]

**Brian Ketelsen:** She's contemplating who she's gonna hire me to hit first. \[laughter\]

**Carlisia Pinto:** No, man... Sorry, you'd be out of business if you depended on me.

**Brian Ketelsen:** I'm gonna be starving.

**Carlisia Pinto:** Yeah...

**Brian Ketelsen:** World's shortest-lived hitman.

**Erik St. Martin:** \[00:59:59.20\] I think you should just stick to popping gators with pellet guns.

**Brian Ketelsen:** Shhhh... This is a PG show.

**Erik St. Martin:** Says the wannabe hitman...

**Brian Ketelsen:** \[laughs\] And we're done, so thanks everybody for coming to GoTime. Don't forget to hit us on GoTime.fm/ping, or something... \[laughter\] Oh, Erik... That was supposed to be our secret.

**Erik St. Martin:** Remember, children... Don't shoot at alligators, but you can shoot at people. \[laughs\]

**Brian Ketelsen:** So the back-story here is that there's a seven-foot gator in the pond behind our house - right behind my house, and I've got a BB gun and every time he comes near my shore, I shoot him in the butt because he needs to stay away from my family. This has been going on for about a week now. And you know, we're talking a small BB gun and a big gator; there's no chance I could hurt him, but I would like to provide some negative reinforcement for my neighborhood, so every time he comes nearby I shoot him in the butt with a BB gun, and he goes away.

I'm hoping that at some point shortly he's going to learn, "Hey, the South shore of this lake is a really painful place to be", and he just won't come back. Because he's getting too big. Seven feet is big enough to eat my dog.

**Carlisia Pinto:** Now, what if you're not there?

**Brian Ketelsen:** Well, somebody else will have to shoot him, I don't know...

**Luna Duclos:** I don't know anything about the U.S., but don't big gators eventually get shot or picked up by a zoo, or something?

**Brian Ketelsen:** Here what happens is they will leave the gator completely alone until someone complains about it. And at the point that they complain about it, they send in a trapper, and the trapper will kill it and render it for meat, and sell it. So there is no gator relocation program... If you make a phone call and say "This gator is too big", they're gonna come and kill it, and I certainly don't want any animals to die unnecessarily, especially ones that I can't eat... So I don't see any point in calling and having the gator removed, because it's just gonna die.

I would like him to harvest his little party somewhere else, not on my little shore. So I'm just using some negative reinforcement therapy.

**Erik St. Martin:** I keep telling him one of these nights that thing's gonna crawl under the window...

**Brian Ketelsen:** It's gonna try.

**Luna Duclos:** \[laughs\] The revenge of the gator!

**Brian Ketelsen:** Where did go off topic? So thanks for breaking out my story to the whole entire world, Erik. I appreciate that, I will remember this... Gator shooter.... \[laughter\]

**Erik St. Martin:** It's better than the alternative. I remember the first time I learned they put him down; I always thought they relocated him, but...

**Brian Ketelsen:** No...

**Erik St. Martin:** ...it turns out that is not correct. They're just worried because if they're a nuisance here, they may be a nuisance somewhere else, and it'll escalate.

**Brian Ketelsen:** Yeah...

**Erik St. Martin:** Most of the time it's not a problem as long as people aren't feeding them, and things like that. It's usually when they keep coming up on people's properties and people are dumb enough to feed them, and then they start coming to looking for dogs, and things like that.

**Brian Ketelsen:** Kids...

**Erik St. Martin:** \[01:03:03.18\] There's a lot of them... Like, a million, or a hundred thousand in Florida... There's a lot.

**Brian Ketelsen:** They used to be an endangered species back in the late '60s, early '70s, and now they are so many of them that they're opening more hunting seasons... It's ridiculous. They're overpopulated now. So our conservation efforts did a great job of keeping the gator alive, and now we have a BB gun problem.

**Erik St. Martin:** And now each citizen of the state of Florida is issued an alligator when they move here. \[laughter\] So with that, we should probably close out this show, and do a lot of this rambling in our after show... I don't know how many Go programmers are concerned about the gator population in Florida.

**Brian Ketelsen:** I don't know, but I think we just lost half of our listenership with this show... Between gators and hitmen, we're done. Maybe I'm just gonna get voted off the island.

**Erik St. Martin:** Adam's getting emails now from sponsors... \[laughs\]

**Brian Ketelsen:** Yeah... This is not a PG show anymore...

**Erik St. Martin:** Alright... So with that, thank you everybody for being on the show today. Huge thank you to our listeners, both live and everybody who will be listening to this when this episode is released; a giant thank you to our sponsors for today's episode - Toptal and the Ultimate Go Training Series.

Definitely share this show with fellow Go programmers, friends, family, co-workers... You can subscribe by going to GoTime.fm. We are on [Twitter](https://twitter.com/GoTimeFM), and if you wanna be on the show, have suggestions for guests or topics, [ping](https://github.com/GoTimeFM/ping) us.

And we have two Slack channels - there's a Changelog Slack, which we are \#GoTime in, and if you're on GopherSlack, it's [GoTimeFM](https://gophers.slack.com/messages/GoTimeFM). The messages actually cross back and forth, so it doesn't really matter which one you're in. It's kind of a shared channel. With that, we'll see you guys next week. Bye, everybody!

**Carlisia Pinto:** Bye!

**Brian Ketelsen:** Bye! Thanks, Luna!

**Luna Duclos:** Thank you! Bye-bye!
