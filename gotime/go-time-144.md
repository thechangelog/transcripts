**Mat Ryer:** Hello, and welcome to Go Time! I'm Mat Ryer. About six months ago - or, I suppose, three months, if you listen to this on 2x speed - we chatted with Elias about Gio, which is a way to draw graphical interfaces and build desktop apps in Go... And there's also the Fyne project, which gives you tools to build native UIs. But they kind of have a different thing to learn in order to get to use them, so we're gonna look today at an alternative approach, which probably will use a lot of existing skills that are already around, which is where we can mix the desktop and web technologies using the Wails project. That's what we're gonna talk about today.

Joining me on this quest, Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat. How are you?

**Mat Ryer:** I'm good, mate. Have you gotten all your jobs done that you were telling me about?

**Jon Calhoun:** I think I have most things done that I need to for today.

**Mat Ryer:** Oh, you're so good. It makes me feel bad, because I've achieved very little today. And joining us also, only the creator of Wails, Lea Anthony. Hello, Lea.

**Lea Anthony:** Good morning, afternoon and evening.

**Mat Ryer:** Welcome to Go Time, thanks for joining us.

**Lea Anthony:** Thanks for having me.

**Mat Ryer:** It's a pleasure. So maybe we could just start at the beginning - when we talk about desktop apps in Go, what do we mean, and why is it such an interesting subject, compared to other types of things that you can build in Go?

**Lea Anthony:** I think originally, when I first started with Go, I went on the same path as everybody else, making CLI apps, making servers... I'd come from a Node world at the time, so I was kind of doing similar things on the backend. One of the things that I thought about when I was learning Go was "How can I make visual things?" I love visual things, so the obvious thing to do there is to create a server and to hook up your browser to it and to see things visually that way.

\[00:04:10.25\] I sort of went along with that approach, I thought "What should I do? What sort of application should I make as a test?" I was using restic at the time to get my backups, and I thought "That's quite a good idea." It's fairly static, there's some information that you can get from the application... It didn't really have a good library - I still don't think it does, actually - so there's a bit of shelling and running code, and trying to parse it up, and all that stuff... But what I discovered pretty quickly was that what you could actually do through a web browser was by its very nature fairly restricted, and I kind of wanted to still use all of that funky JavaScript stuff on the frontend, or the nice libraries and tools that you could use to do visual stuff, but to hook it up to my Go application.

So like I said, I kind of hit that sort of sandbox restriction pretty quickly, and I thought "How can I marry the two things that I now really love? ...this amazing, traditionally backend language, with a very rich ecosystem and frontend technologies?" That's where it kind of started... And I didn't really get my first break on that until I found the WebView project. That allows you to present web frontend using \[unintelligible 00:05:30.28\] I started looking at that, and I thought "That's cool. That'd be really great if I could combine this with Go." They do allow you to do that, but there was a lot of technical stuff you had to deal with, of message parsing, and all that stuff... So that's really kind of like the birth of the project there - how do I make this easy for other people, and myself, obviously?

**Mat Ryer:** Yeah, that's cool then. So the idea is you wanna be able to use web technologies - JavaScript, HTML - and even web frameworks... And I noticed that by default, I think Wails comes with React, right? Or is it Vue?

**Lea Anthony:** It comes with both. One of the key things to start with -- and I noticed this at Rails, and it is a play on words on that... I actually called it that basically because I wanted this quick scaffolding way of building up an application, and Rails was the original to do that... So it was kind of a play on words - web view Rails... So it takes a kind of similar approach. It comes with a CLI, so you use that to scaffold out your project; it comes with a bunch of templates, so you can use Vue, React, Angular... There's a couple of Vue templates there that use Beautify to \[unintelligible 00:06:52.15\] and there's also a vanilla JavaScript one you can use as well.

**Mat Ryer:** Yeah, that's cool then. Because the point is you're gonna serve those static assets, essentially, whatever the frontend technology is gonna do to build -- essentially, it's gonna build a JavaScript, a CSS maybe, and some markup. And then Wails will serve that, won't it, into its own kind of frontend, which is web-based. Does that sum it up?

**Lea Anthony:** That's correct, yeah. Absolutely. So there's essentially two parts to your project - there's your Go part, which is your backend, and there's the web frontend. And they're sort of fairly loosely coupled. The concerns of the frontend are entirely yours; you can use whatever you want. At the end of the day, you basically compile down to your classic disk directory, and you have your bundles, and you essentially end up with 2 or 3 assets. And the way that's bound together is through basically that library that Wails provides.

You create your application, and then you, as part of the creation of that object, of that struct, you then give it a link to your assets essentially, and it will serve them for you. The way that it does that - it actually uses a packer; originally, I used Mark Bates' packer, and then he deprecated it, and I was very upset... So I took on the challenge and wrote something very similar, because I really liked the way it worked... And they're essentially just strings. You just pass a string to the object and it takes those and serves those.

**Mat Ryer:** \[00:08:26.29\] So the reason you do that then is so that when you ship the app, you don't have to ship alongside it those assets. They get bundled inside because of a build step inside the binary, don't they?

**Lea Anthony:** That's absolutely right, yeah.

**Mat Ryer:** So you still only have to ship one thing.

**Lea Anthony:** That's correct. There's no extra thing that you have to supply with it. The web view framework uses the web renderer that sits on your system, so you don't need to supply that. And there's pros and cons with that.

**Mat Ryer:** Yeah. Well, we can get into that. So what sort of apps can you build with Wails then?

**Lea Anthony:** I mean, that's like saying "What kind of websites can you build?"

**Mat Ryer:** What kind of websites can you build?

**Lea Anthony:** \[laughs\] I guess one of the key targets for this application would be somebody who wants the power of Go, somebody who wants to perhaps do low-level stuff, USB stuff... I've got a couple of projects that I noticed that are working in the cryptocurrency space, so there's a lot of \[unintelligible 00:09:36.27\] that happens... And it's for people who want to just present that sort of stuff visually, where you perhaps otherwise maybe use a web browser to connect to, but that's doesn't feel quite right... And it's something that you wanna interact with in real time, but still have that power of go. That's really your target.

There's a keyboard company in Japan called ergodox-ez. They create these amazing keyboards, the ones that have like a million different parts and they're super-ergonomic... One of their main developers contacted me a while back, and he was using WebView to do that firmware flasher. He's recently ported their application called Wally, which is their firmware flasher - he's ported it over to Wails. I've worked pretty closely with him; we didn't have to do much. He gave us some great feedback, and... Yeah, I was really happy about that, because it really shows the depth of application you could do.

**Mat Ryer:** Yeah, it's interesting, because we do think of Go a lot running as server with HTTP interfaces and thing... So when you start to then think "Well, now this is gonna be running in its entirety on a single machine for a person who is running it in the desktop context", it's kind of a different way of thinking, in some way... But does it end up being quite similar, because you have this frontend that's communicating somehow with the backend through some kind of remote procedure calls. That becomes the way that the backend and the frontend communicate, is that right?

**Lea Anthony:** Yeah, that's right. The difference is that that mechanism there - and this was a key part, the design of the project... That mechanism for communication is completely hidden from you. So instead of having to worry about messages, requests, parameters, all that sort of stuff, you actually just call functions. The IPC mechanism, the way that it works is that you essentially bind Go functions or struct methods to your application, and they get presented at the frontend through a JavaScript endpoint. So it'll be windows.backend. and then it'll be a package name, because you have to qualify the methods in your structs, and then just the name of the Go method that you bound. That receives the parameters that would be sent through to your backend code, your backend code will run, and the result of that would be sent back to JavaScript. That mapping was pretty interesting, and the way that it was done was through promises.

\[00:12:24.00\] What I sort of figured out early out was that if you had a Go method that returned a value and an error, that's essentially the same as a promise. And so what happens is if you send a value back and the error is null, then the promise resolves. If you send an error back, then the promise rejects. So you're able to easily deal with the backend calling the backend code as if it's part of your application... Which it is, obviously, but part of your frontend application.

**Mat Ryer:** Yeah. So does it preserve types as well then, if you're passing strings and integers? Can you call them in your JavaScript code using those types and they turn up as those types in the Go side?

**Lea Anthony:** Yes. Yes, is the answer, pretty much. It mostly does type conversions. I use one of the low-level Go functions to do that type conversion. So on the whole, yes. Structs appear as JSON in JavaScript. When you send structs down to Go, they appear as a standard map string interface. It can be tricky, but it deals with the 95% case, so that's kind of handy.

**Mat Ryer:** Yeah, that's so cool. How does it do that then? From the user's point of view, you're just calling JavaScript asynchronous functions, and there's a promise returned, and then they either resolve or they get rejected... So that makes sense from that point of view, but how does it actually communicate between the web view component and the Go code? What's the mechanism that's being used to make that work?

**Lea Anthony:** So web views provide the ability to call native functions. You can set up an endpoint in webview it's window.external.invoke and whatever you pass to that ends up on the listening end. So that method actually -- what I had to do early on was to kind of wrap that, and supply what you say, an IPC mechanism... And I chose to use JSON messages to capture that information, "Am I making a function call or am I trying to log? Am I trying to use the runtime?" So I've got a bunch of standard messages, they get sent through that mechanism where I have a listener in Go, a sort of dispatcher; it receives the message, works out what kind it is, and then sends it to various subsystems, based on the need. Once that's processed, the same thing happens, but in reverse.

**Jon Calhoun:** So when you're building things like this, what types of limitations do you see? A lot of times, when you see a big company and they're gonna build something for Windows or for macOS, they go out and look at .NET, or they look at Swift, and Xcode and all those tools... Presumably with this there are some limitations. Maybe they're not as far as what you can do with the system, but have you noticed any limitations or things like that, that would cause somebody to lean towards going with Xcode and Swift versus this? Or what types of projects, I guess, would you see going each way?

**Lea Anthony:** Yeah, I guess it just depends on the original project. The difference between running an application in native UI versus an application in a browser versus an application in WebView, which is even more limited than a browser - you're gonna hit some limitations somewhere, based on the use case. The obvious one is complexity on a native UI perspective. "How do I make that work on different platforms?" There are some approaches that you can take to do that.

\[00:16:03.16\] When you do a server app, obviously, you have that disconnect between the frontend and the backend... And in the browser as well you have things like local storage, which you don't actually have in WebView. So the limitation I'd say of writing a Wails app would be twofold. One is it isn't a full browser, which makes it good, in a way; it's slimline it's making good use of the resources... But you also don't necessarily know which libraries would necessarily work. There are so many libraries out there; if you use one that uses something that's native to a browser, then you're gonna hit that limitation. That's one.

The other one would be that Wails uses the native renderer on your system. There's pros and cons with that. The con is that on Windows it's still basically IE11, so you'd have to deal with that. And there's a lot of libraries that kind of get around. I've not really hit that problem, but some people do.

**Mat Ryer:** It probably would have been more of a problem in the past, like when IE6 was around, for example, when you had to basically write two versions of every website.

**Jon Calhoun:** You have like two CSS files. It's like "Here's for you people in IE, and here's for everybody else."

**Mat Ryer:** Yeah. Here's for all the cool people, and then 80% of the population of the planet is using IE6, so we still have to support that...

**Lea Anthony:** Yeah, that's right.

**Mat Ryer:** But Lea, you mentioned something interesting about multiple platforms... That's something we should actually highlight a little bit, because you literally can build one frontend, and you've got your Go code, and since Go code can be built for different targets, you can build Wails apps for different architectures - Windows, macOS and others - and it's the same code for all of them, right?

**Lea Anthony:** That's absolutely correct, yeah.

**Mat Ryer:** See, that's pretty massive.

**Lea Anthony:** Yeah, that is. Until fairly recently, the limitation around that was that you could only build the platform that you were actually compiling it on... And there's a couple of reasons for that. It uses cgo, so you have that complication... But fairly recently we had an amazing contribution to the project which allowed you to cross-compile using Docker. A big thanks to Travis as well, who works on the project; he spent quite a lot of time in getting that working really well.

**Mat Ryer:** Is that TravisCI?

**Lea Anthony:** \[laughs\] No... Travis McLane, he works on the project.

**Mat Ryer:** Alright.

**Lea Anthony:** Yeah, he managed to iron it out a bit, polish it off, and it works really well. You have your initial XGo download, which is fairly large - it's around 7 gigs, which to some people is a lot, to some others it isn't... But once you have it, you can compile multiple-platform targets on the same computer.

**Mat Ryer:** And speaking of TravisCI - you could probably easily build that into a continuous integration environment and have your build system build and deploy these apps, right? Using that image.

**Lea Anthony:** Yeah. One of the things moving forward - I wouldn't mind having a look at GoReleaser and seeing how I could integrate with that. Because that seems like a really good fit.

**Mat Ryer:** Yeah, I used that recently, actually, and it was really good. Basically, you'd tag your repo with a semver tag, and then you'd just run GoReleaser. It creates a release, uploads it to GitHub for you, it writes the changelog... And there's a lot more you can make it do, but by default it sort of does that. It would be great, something like that...

But the nice thing, I think, that makes this a really cool project is that however you build it, it's one codebase that's running everywhere. So you can really get a big saving. And if you think about all the things you can do in Go code, like accessing the file system, presumably you can access the file system in Wails apps, right?

**Lea Anthony:** \[00:19:57.27\] Absolutely. You can do whatever you would like to do on your Go side. There's no limitations on that. What I have done is provided a runtime which operates both in the JavaScript land and the Go end, so some of that stuff is wrapped up for you. Maybe you wanna show a file select dialogue, so you can call this runtime command in Go, and Wails version - which we'll talk about in a bit - you can also do that in the JavaScript land. So you can essentially call a function, open a dialogue, get the user to select something, and it just appears as a string in Go. So it's almost like a synchronous operation in your go where you're saying "I wanna get a file name", and it goes away and does it for you.

**Mat Ryer:** Is it like a file -- do you get literally the file scheme on that when it turns up in Go then? And is it just a path to a local file?

**Lea Anthony:** It's just a path to the local file, and then you can use open and just read in.

**Mat Ryer:** So it doesn't upload through the WebView. You're just selecting the string. I see.

**Lea Anthony:** Yeah, it's just a means of getting a string into Go.

**Mat Ryer:** I bet there's a big range of different things that you can suddenly do, which you wouldn't do probably in the server context... That's why I mean it's quite exciting when you start to think of building desktop apps like this in Go. Are there any other cool use cases that you've come across?

**Lea Anthony:** In terms of actually the stuff that you can build, or in terms of the tooling that's provided so that you can build them?

**Mat Ryer:** Either.

**Lea Anthony:** One of the things that I'm pretty proud of in the project is early on I realized that the IPC mechanism, the way that you communicate between the frontend and the backend - it's not dissimilar to WebSockets. So what I started thinking early on - because I wanted the project to be very developer-focused, like "How do I make it easy for the developer?" One of the things that I kind of hit early on was the integrated debugger in the tooling that comes with WebView is actually pretty limited compared to the things that you're used to. In Chrome, the DevTools are just incredible. And that's what people wanna use; they wanna use the things that they're used to. So what I did was to create a compile flag... Because you don't compile using go build, you use wails build. And the reason for that is because there's a bunch of stuff that it needs to do, including sorting dependencies, and packaging, and all kinds of stuff... So I've wrapped that all up, and you can pass a flag which essentially creates a headless version of your backend code, and sets up an actual web server inside your code.

What you can do then is if you run -- it tells you what command to run, you run the command, and the frontend gets served up by its native tools. In Vue I think it uses webpack-serve, or one of these runners. The frontend actually has some code that's injected into it, which connects to your backend code. So now you're running in the browser, but you're still connected to your backend. So you can open up the DevTools and you can start just calling your Go code from Chrome... And that becomes incredibly powerful, because you can all of a sudden start using your Vue tools, your React dev tools, all that kind of stuff.

The drawback of that is people get used to things working in the browser... So sometimes you get tickets raised that say "I don't understand - it works in serve mode, but it doesn't work in compile mode." And that's a tricky line to walk, because you do wanna provide the best tooling, but you also know that it's not entirely 100% like for like. It's pretty similar...

**Mat Ryer:** Yeah... It's kind of a trade-off.

**Lea Anthony:** Yes.

**Mat Ryer:** Yeah, I see what you mean. That's exactly it. The web view is more limited. And like you say, it comes from the operating system, so I guess on the Mac it would be Safari, would it, essentially?

**Lea Anthony:** It uses WebKit.

**Mat Ryer:** Alright, yeah... Which Safari uses, doesn't it?

**Lea Anthony:** That's right.

**Mat Ryer:** \[00:24:01.29\] Hm... And you mentioned events then as well, and that's quite an interesting thing, when we think about Go, and we have channels, and we have different ways of running things concurrently and communicating events... Can you also get those events to fire in the frontend part of the app? Like, something happens in the backend; maybe if it's gonna walk the filesystem, it's gonna take a long time... Maybe there's an event to say "I've just completed." How does that get into the frontend?

**Lea Anthony:** Good question. So as part of the runtime there's a unified events system. On the Go side you have emit and you have on, and it's the same in the frontend, too. And whenever you emit a message, you do it in the standard JavaScript way and it has a name, and it has that optional data along with it. If you fire that from Go, you can read it in Go and you can try to run it in JavaScript. And the reverse is true. So you could, say, have a JSON string, or whatever kind of data in the frontend, you could emit an event by a name, and receive that in Go. It was quite interesting early on, thinking about the differences between that and a call.

So yeah, that's where unified eventing really opens things up, because early on I hooked up jmeter, a web load testing tool. It's a library, essentially; it's just a library. And I wanted to put a frontend to that as a test and work out "How is this gonna work? How do I visualize this that it's doing?" Because obviously, it's gonna do a whole bunch of stuff in the background, and I wanna try and view that.

So you have the obvious thing of "Here's my URL. This is how long I want you to run, and these many concurrent threads..." And one of the things that the library did - and probably still does - is provide a callback so that every 1,000 events it just returns you some information. And in Go, that's a struct. It's a struct with all of that information in it... And what I did was I basically spun that off in a goroutine; so you have that running in the background, and every thousand requests or whatever you get this struct. And all I did was just emit it; so I just passed the struct into an emit call. On the frontend I had a listener; when it received that information -- initially, I just printed it out in the console. What was amazing was because the developers had put JSON tags in their struct, all of a sudden I had this really rich JSON object, with all of this information in it. And because these days components are very much driven by JSON state, you can just pop that straight into a state store and all of a sudden your frontend reacts to everything that's happening in your Go library... And that blew my mind, I've gotta say. It was just incredible to see.

**Mat Ryer:** Yeah, because you haven't had to do much work at all there for that quite powerful thing, the event-driven live updates occurring in your desktop app.

**Lea Anthony:** That's right.

**Mat Ryer:** It is quite exciting.

**Break:** \[00:27:24.28\]

**Jon Calhoun:** So as you were developing all this, it sounds like you had to come up with a lot of unique solutions to allow the two to communicate, and allow things to work the way that it makes the most sense... With things like Web Assembly coming along, do you think they would eventually make it so that this type of stuff would be easier to do, in almost any language? Or are there still gonna be big limitations?

**Lea Anthony:** Yeah, I don't really know too much about Web Assembly, I've gotta say... I've followed its journey in the early days, but I don't really know how it would impact things... I'm pretty excited that the technology exists. I think it's gonna be great. A part of my brain things we're sort of going back to the Flash days, as well... I don't really know why, but there's something in my head about that. But I do think it's a great opportunity.

In terms of the impact, I genuinely don't know. I think we're likely to see more and more Web Assembly targets, assemblies \[unintelligible 00:29:40.25\] kind of make sense... And maybe this project is kind of a stepping stone towards that sort of concept of "You write once and run many", which is sometimes that we've always tried to achieve in different ways.

**Jon Calhoun:** Yeah, I should definitely say I don't know a lot about Web Assembly, but the idea of "Write it, compile it into JavaScript and run it wherever" - that's appealing, in the sense that if I can just write regular code and it works, that's real nice. And we're all spoiled with Go, because it works pretty much everywhere... But when you have languages where that doesn't work, or anybody who's tried to ship a product that they wrote in Python or some other language, and you ship it to somebody and they're like "Well, it's not working", and it's because their macOS has a really old version of Python or something, and it's like "How do you handle these situations?"

I think that was one of the things that always made delivering any sort of software to a desktop user that wasn't written in their native language, which just could be a nightmare.

**Lea Anthony:** Yeah, that's right.

**Jon Calhoun:** I'm assuming this is sort of similar to how Electron works, but I don't know enough about Electron to say for sure. Is it comparable, in some ways?

**Lea Anthony:** Many people do draw that comparison, and I'm very reluctant to draw that comparison. I would say that the two projects are different; they've got different target audiences, and they kind of work a bit differently. The only overlap is that they essentially achieve a similar thing, which is a desktop application with web technologies. That's pretty much where I draw the comparison there.

**Jon Calhoun:** Okay. So do you know enough about Electron that I can ask questions to sort of flesh out some of those differences?

**Lea Anthony:** Yeah, sure. I know a little bit, but I'm definitely not the world's expert on it.

**Jon Calhoun:** So is Electron using web views?

**Lea Anthony:** No, it uses an embedded Chrome instance.

**Jon Calhoun:** Okay, so it uses something entirely different. So that would be one of those cases where it works on Chrome, but it could solve that type of problem, but it probably comes with its own set of challenges.

**Lea Anthony:** Resources, mainly.

**Jon Calhoun:** Okay.

**Lea Anthony:** It uses a lot resources.

**Jon Calhoun:** Okay, so from that point if view we start to step away; it's not even using web views, it's just something built entirely differently.

**Lea Anthony:** Yeah, it's almost like bundling Chrome with your application, where Chrome only executes your code, is my understanding. But it also gives you a very easy one single target problem... So as long as it works in Chrome, you get it.

**Jon Calhoun:** \[00:32:10.18\] So when you're running in WebView then, I assume you have the JavaScript running there... Do you run into some other limitations, like with browsers? One of the ones that comes to mind is cross-origin resource sharing; if you use the JavaScript to actually talk with an API, for some reason, which might not make sense with Wails, but I guess might be possible - not really sure... Well, first off, is that possible?

**Lea Anthony:** Yeah. It's kind of interesting, because the frontend and backend - they have similar ways of doing things. So you can make an HTTP request from JavaScript, but you could also do it from Go. So you'll likely hit -- whatever limitation you hit on one end, you'd hit on the other. The cross-origin - I don't think you have that problem; I'm pretty sure you don't, because it's not really running into a server, and there's not a browser that's gonna guard you from that kind of thing.

**Jon Calhoun:** I was gonna say, usually that's something browsers would prevent, and I wasn't sure if that itself was close enough to a browser that it had it or not, so I wasn't quite sure.

**Lea Anthony:** Yeah, I don't believe so. I think \[unintelligible 00:33:08.11\]

**Mat Ryer:** Well, even if you couldn't though, you can always just make it on the Go side, and then call a function, and...

**Jon Calhoun:** Yeah.

**Mat Ryer:** Probably that's how you'd want to do it anyway, I think - or at least I would - because frontend/backend does give you quite a nice boundary for testing. So it'd be a nice surface to test. If all your tests that were calling those public methods all passed, you'd have a level of confidence that the app itself is gonna work too, I suppose. So I would probably do that anyway; I would put as much of the logic as I could into the Go side, just because that's where I'm more comfortable. But it does let you do things like that - you could just make HTTP calls, you could make other kinds of connections that would be impossible in browsers, too... You could make bespoke binary protocols -- maybe some bespoke API or something, some service that you wanna consume... You do kind of solve that by having this environment that is both Go running natively, and also this web concept running right there, too.

**Lea Anthony:** You make a great distinction there, and it's one of the recommendations of the project when you build your application. Think about your state and your business logic really should be living in Go, and your web frontend really should just be a Vue on that... Which sometimes is a concept that's different to people who have used a lot of web technology, and kind of dealing with state on the frontend. The idea of the eventing system is really just to keep those in sync... More of a -- you should probably just take that approach of pushing the state, rather than trying to deal with it in two places. I know that some projects do try and keep those in sync, so you might end up in a kind of split-brain situation... And yeah, my recommendation is just don't bother. Just push your state to the frontend and react to your state on the frontend in a visual way.

**Jon Calhoun:** I think part of that might come from -- like, when you're building something with the web server, you have to worry about latency, especially if you have users who are in a low latency area... So they try to think "How can I keep this state and minimize some of that latency?" Whereas with something like this, where you're both running on the same server, there realistically shouldn't be much (if any) latency at all.

When I was thinking about people making JavaScript calls, I was sort of thinking somebody who maybe has the JavaScript app and they're like "Can we make something that -- a self-hosted type version, or something like that?" And I could see them making that mistake of just trying to port the same thing over, when the two approaches - while the UI might be similar, but some of the how you do it might be something you'd wanna change up.

**Lea Anthony:** Yeah, that's right.

**Mat Ryer:** So what about a desktop icon? Is that how this binary looks? Because normally in Go when you build a binary, you get a default terminal-looking application, and if you double-click it, nothing happens; you have to run it in the terminal. What's the asset you get after you've done the Wails build?

**Lea Anthony:** \[00:36:06.22\] So there's basically two build modes. Well, it's for two targets. There's a desktop application target, so a packaged version, which has an icon, and is something you can double click and run... And the other one is kind of like your standard Go output, which is just a terminal app that you run. You'd mainly use that for development. Like a Windows, for instance - it's good to run that in that mode, just so you can see the debug output, and all that kind of stuff.

But Wails does come with the ability to pack down to the package. So on Windows, that's essentially -- you know, it generates the manifest file, it generates a different range of icons, and you'd have different sizes into an icon file... And then it compiles that up into the .exe that you would expect from any other build tool.

For Mac it generates a .app directory structure, it creates the plist, it generates the icons... So it puts it together in a way that works on a Mac. So you don't need to package \[unintelligible 00:37:07.07\]

**Mat Ryer:** And of course, the assets are all embedded in the Go binary, so you don't have to even put the assets into that package either, do you?

**Lea Anthony:** Absolutely.

**Mat Ryer:** Yeah.

**Jon Calhoun:** So you mentioned that you have the wails build command, and you mentioned Packer, which I know from using it you have to use the packer build command... So I assume the wails build is in part to replicate that behavior of "Grab all the assets, turn them into byte slices and stick them in the binary." Are there other things going on behind the scenes when you're running Wails build? Can you talk about that a little bit?

**Lea Anthony:** Yeah, sure. Basically, all of the things that it does is essentially -- there's a project.json file, which basically tells Wails how to build your project. So what command do I run to install my frontend dependencies? What command do I use to compile my frontend to the assets? Once it does those two commands, it then gets those assets, it runs an external command which is something that I created - and now wish I haven't - which packs up those assets and puts them inside a Go file, pretty much the way Packer works. It then compiles everything in Go land, including your packed assets, into a single binary.

If you've decided to package it at that time, it will then consume through platform specifc packing, on windows I think it uses windres to compile that down to a single binary. On the Mac side it's a little bit more manual from a compile perspective, in that it just creates directories and puts things in various places... And that's pretty much what goes on.

It's fairly customizable, because the actual system assets that it generates - it comes with a default manifest file for Windows, it comes with a default icon, for instance... And it leaves those in your project directory once it's built. So if you change them, then that's your opportunity to customize your builds.

**Jon Calhoun:** So when you're embedding those assets - I know recently there was like an embed proposal for Go... Have you had a chance to check that out?

**Lea Anthony:** Yeah, it's definitely something that I wish had been there before I decided to try and make a packer. That would have been good. There's many solutions to this problem, so...

**Jon Calhoun:** Does that solution look like it would solve the needs you have then?

**Lea Anthony:** Yeah, I doubt that there's too much involved in packing a binary asset into your application. I mean, it only does one thing; so long as it does that, I think we're good.

**Mat Ryer:** \[00:39:38.03\] Yeah, I quite like the similarities... And Mark Bates was actually - or is working, or was, before this proposal, because this proposal may supersede it... But yeah, he was working on a new API that mirrored the OS package. So you basically open files, and you can stat them, and you use the existing API, essentially a copy of it... Except that it goes through this layer where they may be embedded in the binary, and you sort of can't tell.. And I think the go:draft proposal - and we'll post a link to it in the show notes - has that same kind of idea, which is nice, that you get to kind of use the learning you have already from existing APIs... That may well be cool. And the nice thing is Wails could adopt that and upgrade that, and it almost wouldn't change anything for anybody, would it? It's almost an internal piece which happens transparently, right?

**Lea Anthony:** That's right. It's one of those things as well -- pretty much the Go philosophy is that frameworks are frowned upon. And I tend to agree, even though I've created a framework. I kind of tend to agree that it's--

**Mat Ryer:** You frown upon it, even though you made it.

**Lea Anthony:** Exactly, yeah.

**Mat Ryer:** Do you do that with your kids as well?

**Lea Anthony:** \[laughs\]

**Mat Ryer:** You made them, but you're like--

**Lea Anthony:** No... Only with \[unintelligible 00:40:56.26\] But there is a place for it, right? So yes, I firmly believe in composition, and having choices, so long as you're okay with the cost of that... Which is you have to do the integration, you have to do the plumbing, you have to deal with the idiosyncrasies of all the various components.

And so whilst I've created this framework and there is some stuff that's hidden, like for compiling of the assets and the bundling of assets, you do have to ask the question "Do I care? Do I really wanna deal with that stuff? Is that something that an individual has the desire in?"

**Mat Ryer:** Yeah, absolutely. And I think you're right; sometimes, if it's the right fit... And what's been valuable about this conversation is talking about the sorts of problems that Wails is gonna be good for. I think there are a class of applications, and certainly -- I mean, I've built an Electron app; I bought extra RAM and really wanted to put it through its paces, so I just built a basic Electron app. It was opinionated, and it did these things, and it also wasn't quite right. It wasn't what I was used to, and Wails kind of fit that perfectly; so I think there is a sweet spot for Wails, and that's why I'm glad we talked about this, and we got to hopefully get some people's eyes on it... Because the things you can build are kind of limitless, really. It's web technologies. We can even create images in Go using the image/draw packages you can actually build images, and things; so you'd be able to do even that kind of visualizations and stuff for Wails apps.

So in a way, it's extremely powerful, and it doesn't do too much, that's the other thing. It solves core problems, and then not much else. As a developer, you still have to solve those problems in a way that makes sense for your particular case, or for the particular problems you're solving. So I think it finds that nice sweet spot, personally; that's why I recommend people play with it and see what they can build. It's very exciting, because doing Go, we spend a lot of time in servers, or in web contexts, or building things that are quite abstract... And to have something that's just an actual application - I think it's gonna be quite nostalgic and quite fun for people that haven't done it before.

**Lea Anthony:** Yeah.

**Break:** \[00:43:25.14\]

**Mat Ryer:** It's time for Unpopular Opinions!

**Jingle:** \[00:45:27.15\]

**Mat Ryer:** Okay, do we have any unpopular opinions?

**Lea Anthony:** I've spent some time thinking about what the difference was between unpopular and controversial, and I wasn't really sure where that line was...

**Mat Ryer:** Okay... Well, I haven't got time to re-record the theme tune, but give us a controversial one, if it's controversial. We've never had to cut one of these, so if you can give us one that we have to cut, even better.

**Jon Calhoun:** Controversial means that at least maybe half the audience doesn't like it, or they disagree with it in some way...

**Mat Ryer:** Right.

**Jon Calhoun:** It's not, like, popular by majority, I guess...

**Lea Anthony:** Well, okay, so I guess half the audience potentially does not think that--

**Mat Ryer:** It can't be half. It's gotta be more than half, slightly... Just 51%, can we just say...?

**Lea Anthony:** \[laughs\]

**Mat Ryer:** The pedantic shoe is on the other foot... I mean, hand...

**Lea Anthony:** Unpopular opinion... Well, it's sometimes okay to mix Go and JavaScript code. Some people may think that that's not a great thing. I actually think that -- you know, use things to their strengths. Like we said about frameworks - I don't really have a problem with frameworks, I have a problem with frameworks that have opinions different to me. And I think that's the thing, isn't it - we all have our way of doing things. I guess that's the thing I love about Go - it doesn't really give you too many hard rules that you have to adhere to. Yeah, so I guess my unpopular opinion is everything is okay in whatever context it's okay in.

**Mat Ryer:** That's very nice.

**Jon Calhoun:** I was gonna say, everybody loves Rails until it doesn't work for them. And then they hate it. It's that one time when you need to configure something special, and it's like "No, we aren't gonna let you do that."

**Mat Ryer:** Yeah, that's right. And it is a trade-off, isn't it? It's almost the universal thing that we face all the time, of kind of optimizing for read, or optimizing for write. We choose a tool like Rails, and with scaffolding we can quickly build real things, and we're gonna put things in the database... But then, of course, as soon as you wanna do something different, or something more, or whatever - you then have to put in the time to do that.

And yeah, the problem is when you're fighting the framework. That's what I like about Wails - it doesn't force you to use a particular web technology. It's somewhat agnostic, so your teams will get to use expertise they already have in order to then build desktop apps... And I think that is quite a valuable thing in itself. It seems like if it was more opinionated, of course, then there's gonna be more cases where it hits up against things that it doesn't do naturally, or it doesn't do very well. So that's what I was saying, I think it has a nice sweet spot.

**Lea Anthony:** \[00:48:30.08\] I think you've actually made me realize something. I've completely mis-sold this thing, haven't I? It's actually a tool, it's not really a framework; because frameworks imply there's lots of opinions, and there isn't. It's really just a tool to compile things, to build things... Yeah, it's more like a developer tool. Interesting.

**Jon Calhoun:** A build tool is probably more accurate... Because we talked about Fyne I think the last time we looked at GUIs, and it's a lot more opinionated, I think, in how you -- like buttons, and things... I think all those things kind of look the same in that, if I recall correctly, and it has some basic scaffolding used to build things in the UI. And it gives you the ability to quickly throw something together and make it work on multiple operating systems, but there are limitations to that based on what they think things should look like, and what their version of a checkbox is, or something... So it goes both ways, and I think yours is probably as unopinionated as possible; that's probably what I'd call Wails.

**Mat Ryer:** And tell us about the name, because it happens to also sound like a country, doesn't it?

**Lea Anthony:** It does, Mat. It does. And you know what - it's really funny... Do you know sometimes you have a concept in your head, and you think "Oh, my context for this thing is this", and at some point something shifts and you're like "Oh my God, how could I not think about that?" This is a classic example of that. It was actually called Wails, just WebView Rails. That's all it was. No part of my brain at that time really associated it with the actual country I'm from... No idea why. \[laughter\] And then afterwards I thought, "Okay, yeah... Of course... That was probably there somewhere when I was naming this."

When I was looking for a logo, I kind of developed one which was a bit of a homage to the Wales flag... So yeah, there is a link there, albeit unintentional.

**Mat Ryer:** And if anybody doesn't know what the Welsh flag looks like, definitely google it. It's definitely one of the best flags there is. It's essentially a red dragon, which I think is really cool... And yeah, the Wails logo does invoke that; I think that's nice. It's nice to see a personal link this in a project, I think it's quite a cool thing. You don't see it too often.

**Jon Calhoun:** So how did this not lead to confusion in your real life, in your outside the computer world, where you're like "Yeah, I work on Wails" or "I created Wails" and they're like "You didn't create the country, bud..." \[laughter\] They didn't get confused?

**Lea Anthony:** There's a lot of confusion in my life, Jon.

**Mat Ryer:** They probably don't think he means he's created the country Wales. That probably isn't the--

**Jon Calhoun:** I mean, if he's out at the bar or something, and he's like "Yeah, I made this Wails--" They're like "Oh, this guys has just had too many. Let him be."

**Lea Anthony:** \[laughs\]

**Mat Ryer:** But you don't live there now, do you? You moved.

**Lea Anthony:** I moved a long time ago, yes. And honestly, there's a wonderful word in Welsh called Hiraeth which is pretty much untranslatable in English, but it kind of means this longing for -- this nostalgic longing for things that were... And any Welsh person listening to this will potentially understand what that is.

**Mat Ryer:** That's awesome. I feel like we should get some more Welsh on the show, because I think to people listening it sounds like Elvish, from Lord of the Rings. That's how I've heard people describe when they hear Welsh being spoken. That's like the close reference.

**Lea Anthony:** The irony of that is that a certain type of Elvish is actually based on Welsh, so... That's why.

**Mat Ryer:** Oh, that's why. Okay. Yeah, that makes sense.

**Jon Calhoun:** It makes way more sense now.

**Lea Anthony:** \[00:52:07.04\] Tolkien was obsessed with the language, which is kind of interesting. He was obsessed with languages in general, so...

**Mat Ryer:** Yeah, yeah. He made the whole language, didn't he? Didn't he make Elvish, the language, and actually did all the work to build it into a real language?

**Lea Anthony:** Yeah, I think that was his primary thing. That's what he really enjoyed doing. I don't know too much about it though.

**Mat Ryer:** He did Lord of the Rings on the side.

**Lea Anthony:** Yeah...

**Jon Calhoun:** He had to pay the bills somehow...

**Mat Ryer:** "Oh, I'm making up these bonkers languages and no one's gonna use them. I've gotta find a reason for people to use them. I'm gonna have to write a six-part epic."

**Lea Anthony:** That's it. This D&D genre is not gonna invest itself, so...

**Mat Ryer:** \[laughs\] Yeah. Magic.

**Jon Calhoun:** He didn't go the open source route and be like "We're gonna provide support for the language first." That didn't work. He had to go some other route.

**Mat Ryer:** Yeah, he had to build it into something he could sell.

**Jon Calhoun:** I like talking about tools like this, because I feel like there is a lot of potential in the learning space too for them, where when you build things and you're learning, the terminal is kind of bland for anybody who's just getting into programming... But if you can combine it with Wails so that they actually see visually what's happening in their code, it can actually help them out. I feel like there's a lot of ways that you could make learning a lot easier, or at least different for different types of people, who learn in different ways.

**Lea Anthony:** Yeah, you hit on a really good point there - combining Go code into your documentation or your teaching material is definitely possible. We know that that's possible already with the GoDocs stuff... But what this does is it actually allows you to embed components that are aware of Go code.

One of the things I wondered about early on was this concept of a package... And it's something I'm still kind of fleshing out in my mind - that components historically are just JavaScript; but imagine if you could have a package which bundled your backend, your Go code, as well as your frontend. So it's kind of Go-aware frontend components. So you're able to compose your Wails applications using people's different components, and potentially have this concept of a package manager where you can pull those in. I think it would lead to some really interesting projects.

**Mat Ryer:** Hm... We'll have to save that one for another day, I think. Okay, well that's all the time we have for today. Thank you so much to Lea Anthony for joining us. If you wanna build desktop apps with Go and web-based technologies, take a look at Wails. It's a genuine option, ready to go, it's past the v1 release, it's production-ready, you can build real things with it... So do it, and then tell us what you've built, please.

Thank you very much, Jon. Always a pleasure. Lea, thanks for coming.

**Lea Anthony:** Thanks for having me, it's been great.

**Mat Ryer:** See you next time.
