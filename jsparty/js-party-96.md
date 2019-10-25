**Jerod Santo:** Alright, welcome back to JS Party, everyone. We are here with a very special show and a very special guest. It's Atul from NodeGUI and NodeGUI-React. Atul, thanks so much for joining JS Party with us today.

**Atul R:** Yeah, hi everyone. My name is Atul, I am a software engineer working with a fintech startup called Anyfin. I am currently based out of Stockholm, Sweden. I'm originally from India. I primarily work in the Javascript ecosystem, but occasionally I hack around with C++ and Rust in my free time... And I'm so excited to be here to talk about NodeGUI, which is my latest and most recent project that I'm working on.

**Jerod Santo:** Awesome! Great to have you. Joining me, my partner in crime today to chat with Atul is Nick Nisi. What's up, Nick?

**Nick Nisi:** Hoy, hoy.

**Jerod Santo:** Hoy, hoy. Well, we saw it on Instagram. I talked about it on the pre-show. I can't help but embarrass you a little bit here... You're fresh off of a bicycle injury. Tell everybody what happened, come on.

**Nick Nisi:** Oh, yeah... I was going too fast, and hit some unexpected mud, and luckily my helmet broke my fall... But yeah, I'm a little scraped up, but good.

**Jerod Santo:** Moral of the story is always wear your helmets, friends, when you're on your bike.

**Nick Nisi:** Yes.

**Jerod Santo:** And when you're trying to stay healthy, sometimes it backfires and you get less healthy. \[laughs\] It's the risks we take... But we're not here to talk about that and embarrass Nick, we're here to talk about NodeGUI and hopefully not embarrass Atul. A very cool project, NodeGUI and NodeGUI-React. This is an open source library for building cross-platform native desktop applications with Javascript and CSS-like styling. NodeGUI apps can run on the Mac, they can run on Windows and on Linux from a single codebase, so a somewhat typical story in the cross-platform regard... But it has some unique aspects to it, and so we're happy to talk about it.

It made quite a splash when you announced it last month, Atul. So we heard where you're from and what got you here, but tell us about NodeGUI and why you decided to make this project, and what makes it different from what we've seen before.

**Atul R:** Basically, where the story began is that I wanted to build a music player; I was in my home, and on my computer I primarily use Linux, and on my work computer I use Mac, but I wanted something that would work on both... So I set out for something that works nicely for me, but there was nothing. I wanted a small music player widget, which would just lie around on the right side and play my favorite music.

\[00:04:05.01\] I started building it out around a year and a half with Electron. I could build it out, I finished it, but the problem was that it started using a lot of CPU and memory on the side... And I was basically stuck, because I can't just play a music player and not do anything else on the side; that doesn't work.

I set out looking for other alternatives, but couldn't find anything which is really optimal... So I started building a small framework, which was NodeGUI. Back at that time I used to also work with Qt on my free time. Qt is basically a C++ framework to build cross-platform native desktop applications. The thing with Qt is that it's not as easy to work with, because it's C++, so you have to handle all the pointers and memory issues and everything... So I started creating a wrapper around it so that I could export it to Javascript.

After a while I figured that -- I basically started working on the music player, and now I started working on the complete framework itself. So I still haven't completed building out my music player yet, but hopefully that will happen someday... But I was also working on my professional time on React; I was kind of inspired by React Native. React Native makes it very simple to make mobile applications... And I used to work with Cordova back in the day, and it was kind of like a browser solution for the mobile apps, so I wanted something similar for the desktop application also. Currently, all the desktop frameworks are on Electron, which is a browser-based solution.

I really love Electron for its simplicity and documentation and everything, but I wanted something more, something small and much more lightweight... So I took some inspiration from React Native and I started building React NodeGUI, which is kind of like how people start transitioning from Cordova to React Native - I want the same thing to happen from Electron to hopefully React NodeGUI someday.

But yeah, this was a side project... When I launched it, I received a lot of traction, and I basically started working on it a bit more seriously... So yeah, that's pretty much the story.

**Jerod Santo:** I giggle a little bit - the fact that you don't have your music player yet... It reminds me, there's an old proverb where there's some scientist versus God, and they're trying to invent a sandwich from scratch... So the scientist goes out and they start trying to plant some wheat. And right when they get to digging, God stops them and says "Hey, get your own dirt." And I feel like as developers we're kind of like that; I mean, we're at a much higher abstraction than dirt at this point, especially in the Javascript ecosystem, but we're very much inventing our tools more than we're actually working on the things that we set out to do. It's like "Okay, now I have to invest the universe in order to create this little mp3 player."

**Atul R:** Yeah. But one thing which I focused on was not to reinvent everything, so I basically took out some inspiration from how Electron works internally. I even had a chat with the Electron team; they were pretty helpful. They basically scheduled a 15-minute video chat to discuss on how I can proceed... Even though we had kind of a competing framework. But it's pretty awesome to see how helpful and how awesome the open source community is, and especially the Electron team.

So yeah, based on that inspiration, I -- it follows kind of a similar architecture to what Electron does, but the only thing is it replaces Chromium with Qt. That's how it becomes lightweight.

**Nick Nisi:** I don't know much about Qt, but does that have a browser component in it then, that you're building around? Or is it more translating to native components within Qt?

**Atul R:** Yeah, so Qt is basically a cross-platform C++ framework, so it basically renders all your widgets on the native code. For example, on the operating system OS X it would render something with Cocoa framework... Things like that. But it also has a web browser engine, which I'm not using right now. But I will have a Web View component soon on NodeGUI itself.

\[00:08:04.15\] Currently, what it does is something like what React Native does - it runs the Javascript code, but in the end it makes native calls to the native APIs to generate native widgets on the fly.

**Nick Nisi:** Okay.

**Atul R:** And the good part of Qt is that it supports styling with CSS, so I get that right out of the box.

**Nick Nisi:** Oh, wow.

**Atul R:** So you now have Javascript and CSS, but not a browser, basically. So all your CSS styling is there, and that cascading stuff is there. You could basically select a particular widget with the IDE and then do pseudo selectors like hover, or things like that... Which is amazing. That's why I chose Qt.

**Jerod Santo:** That's pretty cool. I never knew you could do that with Qt. It seems odd...

**Atul R:** Yeah. \[laughs\]

**Jerod Santo:** ...which is just because CSS was such a known technology; did they add that once the web formalized around? Because Qt has been around a while, right?

**Atul R:** Yeah, it's been around for like 12 years or so. But I think CSS is the most underrated and the most powerful styling library--

**Jerod Santo:** System.

**Atul R:** System that I've used. I've used Android and even iOS systems before, but the most flexible one is still CSS, and that's why I think it's quite powerful; I think that's why they might have realized and implemented it.

**Jerod Santo:** I mentioned there's two projects here, worth making the distinction, because you've made the distinction in your repos, and I think in the way that you built it out... You have NodeGUI itself, and then you have NodeGUI-React. Tell us about that distinction and the React story here.

**Nick Nisi:** Yeah. So NodeGUI is basically a pure Javascript version. It does not use any other -- it's basically like writing document.createElement() in the web world, where you could just create a particular div, or things like that. But React NodeGUI is kind of a React renderer, something similar to what React Native is. You can write all the widgets as components, and then share state, or pass down props and everything. So it's a direct translation from NodeGUI, the syntax, to React syntax, and that allows a lot of flexibility, like managing states, and things like what React provides out of the box.

And why I chose React is basically I am mostly familiar with React, but there is also an Angular port coming out by another colleague of mine. He is working on an Angular port as we speak.

**Jerod Santo:** Well, this is following an architectural style which I have advocated for, which is to build your core libraries framework-agnostic, and then allow to plug into or use an adapter pattern or some sort of a wrapper or layer on top the APIs necessary for whatever things you're gonna integrate with. So I think you're doing it right in that regard, because React is the way to go today, but maybe not 2, 3, 4 years from now, and you'll be well-positioned with NodeGUI to still provide value down the road, even if React goes out of style, or you quit using it, or Angular takes off; you can serve more people for longer by making that abstraction, so I applaud you for that.

**Atul R:** Yeah, that's pretty much the same thinking that I followed. I was primarily interested in NodeGUI, but ended up investing a lot of time in React itself.

**Nick Nisi:** You mentioned one of the main reasons that you set off on this quest was because of the performance issues with Electron, and specifically being v8-based under that... What other insights have you seen since creating this, over something like Electron or React Native?

**Atul R:** \[00:11:37.04\] When I set out to build this, initially I thought it would be kind of simple; I could just export out Qt's widgets outside and make a Node.js native add-on... But it wasn't simple, because every GUI system has its own message loop or event loop, and Node.js has its own event loop. So if you want two loops to work in a single thread, it's kind of impossible... So in order to merge them into a single loop, that's where Electron's architecture came into play. I basically followed what Electron does under the hood, they merge Chormium's event loop and the Node.js event loop together to form a single event loop that works for both. Similarly, NodeGUI merges both Node.js and Qt's event loop to form a unified thing.

The best part of this is in most cases when the application is not in use, you would actually see a 0% CPU use with the applications that you build with NodeGUI, which is a super-plus, because it saves a lot of battery on laptops and everything. Other than that, for a simple Hello World app it will be around 20 MB of RAM, and there's only one thread running. So you don't see a helper thread running, like in the case of Electron or Chromium or Chrome, right? it's just one thread, one application running, with 20 MB of RAM, and a 0% or 1%-2% of CPU.

**Jerod Santo:** Sounds pretty nice to me. What about the developer experience in somebody who's familiar with Electron, or maybe already has an app on Electron? Is there any familiarity? Is there a path to porting, or is this just like "If you're starting fresh, try this", because they're way different in terms of use?

**Atul R:** It is not quite straightforward, unfortunately. But if you have React-based applications and you had followed the nice patterns of abstracting out your components, like you created your own text in Vue and other components, you could eventually port the entire stuff by rewriting only the Vue layer, the atoms of a particular project, like text or anything... But yeah, other than that, sadly at this point in time it's a complete rewrite. But it is quite similar to how you build applications on the web, so you don't have to learn anything new. You would do something similar to what you do on a web page for styling; it's just plain Javascript when you use it.

**Jerod Santo:** I guess the fact is complicated applications which have been architected in a way that have abstracted away their UI code probably have large portions of their codebase that would port over. They just have to rewrite the UI assuming that the UI is smaller than the rest of the app. Many of the small things that we write - it's like 99% UI, and there's this one little piece of functionality that we build, like "Play music." But if you have a complicated application, maybe your code surface is mostly business logic, and not mostly UI code, at which point that would make porting a little more manageable.

**Atul R:** Yes, exactly. That's also where React comes in; you could port out your components separately, and then it would work like nothing happened.

**Break:** \[00:14:45.21\]

**Jerod Santo:** \[00:15:33.00\] Let's talk a little bit about cross-platform frameworks... Because they have a long history, and some people have had success with them. I think Electron has been one of the most successful, definitely in the Javascript space. But in general, a lot of these things have been developed, and tried, and sometimes left behind, sometimes stuck with it... There's problems that they present, and it almost all falls back on Qt, I think, in the place of NodeGUI, but I'd be interested to hear your thoughts on it. You have the problem of lowest common denominator, application abilities, like how you access APIs in the native OSes... You have sometimes the uncanny valley of UI, where it looks pretty much like it belongs, but it doesn't actually look like it belongs; it's close, but it's kind of like weird, especially with windowing, and widgets and stuff... Other issues that prop up when you're building one piece of code to present on multiple platforms. So I'm curious how NodeGUI stacks up in that direction, and just your thoughts on that in general.

**Atul R:** Yeah, one of the main reasons why I chose Qt was the same thing. When I used other frameworks out there to build out the desktop applications that I wanted, I couldn't style them to my needs. For example, they always gave me the native look, but sometimes I want to build something which is very custom... So what Qt does is it allows you to paint over the native widget itself. You could customize it to whatever you like. The same way that you do it on web - you could just style your buttons to look whatever you like using CSS, similarly you could do it with NodeGUI. So you could make it look like a mobile app, or you can make a macOS app look like a Windows app, for example. That kind of flexibility allows me to build any kind of styling or UI that I want.

Secondly, one of the most important things I felt was that in the case of React Native, why it's so successful, is that you could build out your own native widgets or native plugins other than what React Native provides. Something like a native plugin support was actually needed, which is what I released around 3-4 days ago. With this, you could actually build out or export out more widgets from Qt or any other C++ framework or anything native onto the NodeGUI world, by just writing an action plugin.

**Nick Nisi:** And would that plugin be in Javascript, or in C++?

**Atul R:** Yeah, so you would need to write a bit of native code if you wanna export out native functionalities... But the end user would always use the Javascript counterpart, which is what React Native also does, in the end, right? All the native plugins you write in either Java, or iOS code, and then you export it out to Javascript.

Yeah, so that was one of the primary focuses this time, this week. And one of the more interesting features are event support - so all the events that Qt supports are now exported out. Node.js support something called EventEmitter, so I just send all the events from the Qt world or the native desktop world to the event emitter, and the event emitter converts it to Javascript events. That way you have access to an entire event system, and all the style sheets that are provided by Qt; even Flexbox layering is supported.

React Native also uses something called Yoga, which is a layouting library; it allows you to do layouts based on Flexbox, things like line items, or justified content, or something like that... So now you can do that with NodeGUI also.

**Jerod Santo:** When you say React Native I think about mobile, and then you start talking about Qt, I wonder - does Qt have any sort of mobile story, or is there a path towards mobile, or is it just desktop-only?

**Atul R:** Yeah, Qt also supports mobile applications, but currently I haven't exported those functionalities to NodeGUI yet. But maybe... But I feel that React Native does a really good job in the end, and I really do not want to reinvent the wheel... But I want to match React NodeGUI's API to as close as possible to React Native, so that you could write the same codebase, and you could basically get out a mobile application to React Native also, so that way you don't reinvent the wheel too much. But Qt does support mobile applications as well, so it might not be too hard to export it.

**Jerod Santo:** \[00:19:48.04\] Do we know any public codebases, or even just maybe private codebases but publicly-known companies who are using Electron in such a fashion, where they have a desktop application in Electron and then they have a React Native application that's running from at least a shared codebase? Maybe they have separate aspects, but similar code... I'm asking both of you all; I don't know the answer to this. I'm just curious if that's a thing people are doing.

**Atul R:** I'm not sure as well. I don't know what Slack's mobile app is based on. We'd have to see.

**Jerod Santo:** The reason I ask is because that would be a pretty unique value proposition in addition to your performance and memory consumption differentiator... Because right now -- I mean, that's what you have to offer, is this 20 MB of RAM, which is incredibly tantalizing as a user, as a person who's low on RAM at all times on my work machine. And then low CPU usage as well. But if you also say "And by the way, from the same codebase you could build your GUI for both desktop and mobile", that would be pretty compelling.

**Atul R:** Yeah, maybe something for me to look at after we stop here.

**Nick Nisi:** I'm curious how these components expose things like CSS to you. If I'm coming to this from the React Native side, how do I know what classes are available to use, for example?

**Atul R:** Yeah, so one of the good parts of Qt is that it is a highly-documented framework... So I could basically link out most of the documentations to Qt itself, although I'm writing a lot of documentation right now. But Qt has a complete list of all the style properties you can use, all the paint properties like background color, foreground, ...etc. And it also has support for advanced cascading. You could choose an element which is indeed down nested inside, and you could also have access to something like pseudo-selectors, like hover, ...etc. which React Native doesn't support yet, because it uses its own styling engine... But yeah, this would support all of those.

**Nick Nisi:** Okay, very cool. Yeah, that's kind of where I was going - how full-featured can I get with styling this? And it seems like you can go pretty far.

**Atul R:** Yeah. I really tried it out, and you can do pretty intense stuff, like on hover over a button you could highlight the color of something else. Those are pretty cool, I would say.

**Jerod Santo:** What are some apps that are out there in the wild -- I know it's relatively new and your mp3 player isn't quite ready yet... That being said, you have some examples - there's calculators, there's things that you can see how nice it looks cross-platform showing off those Qt widgets... At a certain point you wonder, could it scale to a larger codebase, or lots of widgets, and do things change as it gets bigger? It'd be nice to have something that's substantial being used at before maybe people hop on board, so I'm curious if anybody else has adopted it already? I know it's early days... Or if you have built any -- you've gotta build out some examples as you're working on it, so I'm curious how complex you've gotten.

**Atul R:** Yeah, so there is one example out there of what I built; it is a password generator. But it's also a simple application, I would say. But yeah, people are trying it out. But the way I'm developing it is a little bit different. I start building a small app, and then add functionality to it as I go, instead of just randomly picking out functions from somewhere and then porting it. That way, whenever I notice a performance bottleneck or some issue with styling which I want better, I could basically look at it from the user's perspective. So that's what I'm doing right now - I'm building out example applications on the side, and then I'm porting out the necessary functionalities... That way I have even examples out, plus I could even look at it from an actual user's perspective.

**Nick Nisi:** What's the debugging story like, and how does it compare to something like React Native?

**Atul R:** The debugging story is pretty similar to what you are used to in Node.js. You could set up breakpoints and everything by just calling it with --inspect on the Javascript side. But even on the C++ side you have some part of debugging, because C++ supports something called as GDB. So even in VS Code you have GDB plugins which you can just plug in and you can debug your actual C++ code inside of NodeGUI, while you're working on it... If you want to do it, that is; otherwise, you could always inspect on the Javascript side by using regular Node debugging tools, like Node Inspector, or things like that.

**Nick Nisi:** \[00:24:18.28\] Yeah, nice.

**Atul R:** So you can just think of NodeGUI as a Node.js add-on that can exchange into Node.js, so that way you could use all the tools that Node.js supports for debugging.

**Jerod Santo:** What about if you take off the... for debugging, can you just use all Node.js compatible packages, like anything on Npm that runs on Node is gonna run here, or are there any gotchas?

**Atul R:** Yeah, so anything that runs on Node.js can run on this pretty seamlessly. Even the native plugins, with something like a SASS or things like that, if you wanna run, you could run it... If they have those C++ add-ons, they will run properly on this.

The only thing is while packaging a unit, to make sure that the Node add-ons that you are packaging, you actually also package the binaries with it, so that they actually run... But this is all taken care of by package library that I introduced; it's called NodeGUI Package. That basically is a webpack which collects all the add-ons, Javascript and everything, and packages it.

**Jerod Santo:** So once you have an app package, is there anything in there that would prevent it perhaps from being accepted in any of the popular app stores, or distribution mechanisms?

**Atul R:** Yeah, so I haven't really looked into it yet, because it's just a month since I've launched this... But yeah, I'm actually looking into it. But it is using the standard -- Qt provided these packaging libraries which I use, so they should be compatible, because Qt already takes care of those. But I would have to actually submit an application and then see if it actually works.

**Break:** \[00:25:52.08\]

**Jerod Santo:** \[00:26:45.00\] So far, Atul, it's sounding pretty awesome. Are there dragons anywhere, or is it all just rainbows and unicorns? Are there any gotchas, or drawbacks, or things that people will run into and be like "Oh, it sounded so great on JS Party, but now I've found this out"? Where would be the dragons?

**Atul R:** Yeah, so the first dragon would be that currently it's not packing any pre-compiled libraries. So when you run it, it's gonna compile all the C++ on a system. So it's going to be slow in the first run, but eventually it gets faster, because it gets cached, and stuff. But yeah, there is a pre-compilation step coming up soon that should solve that.

That's one, because in most systems sometimes you don't have the necessary dependencies, and things like that, and most of the issues that I get on GitHub are based on that. But yeah, that's going to be solved soon, and we are solving it as we go.

Other than that, another dragon I would say is that you're not getting all the complete Qt widgets that you see on the Qt website right now. It is an ongoing process, and you will still need to help out there a bit by building other native plugins for it, or you could just wait it out, raise an issue, and then we would start building on it.

But yeah, there is a pretty good list of widgets already, which should be useful for most cases, but some cases (very specific ones) will not be solved yet.

**Nick Nisi:** \[00:28:07.18\] Is the focus primarily right now on windowed applications? Is there any availability or future plans to support things like -- I'm thinking on Mac, like a menu bar, or more advanced things like...

**Atul R:** Yeah. Like a service, right? Something like a Docker service. It is being currently worked on. We do have support for system tray icons that you see, but obviously the services part is not yet ready. You could basically create a system tray icon right now, but the menu part is being worked on, and should be out soon. I'm not making any big promises, but yeah, that is basically on the roadmap.

The reason is I have to build a music player in the end, and the music player cannot stay undone \[laughter\] it needs to happen.

**Jerod Santo:** I'm super-excited about this music player. Or maybe also consider a podcast integration, a little something under the table.

I have a question regarding that... Or maybe it's not even regarding that, but somewhat related - big features down the road, things that it's missing, things that you wanna add... So far you mostly said "I" and "me", and a few collaborators... I remember early on when Vue.js first hit the scene, we were interviewing Evan You and I said "React has the establishment behind it, and Vue is basically you, Evan..." Obviously, he's overcome that roadblock, but when you're going to use a cross-platform framework - the framework is a big dependency, right?

So one of the things that would stop me from using this potentially, or saying "Well, Electron has so many companies using it, it's been around a long time, it's not going anywhere... Yeah, I've got memory problems, but most of the issues maybe have been addressed." What's your story there? Are you going to be here for a while? Is this a flash in the pan? How are you gonna stick around, and are you gonna stick around?

**Atul R:** Yes, this is one of the most common questions that I get. The thing is, yes, I agree, there is not a big company yet behind this, but I see a lot of value and I see a lot of people seeing value to it, and I have basically got around 22-25 contributions already from our community in over a month; I think that's pretty impressive.

And I also wanted to join this podcast because I wanted to invite more people to join me. It is a pretty easy framework to get started; the codebase is pretty well organized for the contributions part. If you just poke around a bit, you can do it. And the thing is, you don't need to really know C++ to do this. You could hop around and take a look, and then implement the same thing which I did already...

There are a few code members already; there are two people apart from me who are also building actively on this, and there is another Angular board which is going on... So I see all of this as a positive, and I will continue to work on this since I'm very passionate about development.

I did start building this around a year ago, to be honest, and I stopped in-between. The reason is I thought I could build it out with Electron and other frameworks. There were pretty similar ideas coming out in the wild already.

The main focus here is on Linux, and I use Linux personally for as a desktop platform, and there are not many good applications over there for Linux. The reason is people don't develop it because you have to develop in native languages, and this is seen as a possible step towards it, because there are a lot of Javascript devs who are willing to work on open source technology. So yeah, it's primarily built for Linux, so that people could build out stuff for it.

**Jerod Santo:** Maybe - just maybe - NodeGUI will usher in the year of the Linux desktop.

**Atul R:** \[laughs\] Even I want to see that happening... So let's see.

**Jerod Santo:** \[laughs\] I think at this point it's kind of like -- what was that video game that came never came out? Duke Nukem Forever. It's kind of a running joke, but we know that Linux has made huge strides in mobile, just the desktop is still the niche nerdy environment that it always has been.

\[00:32:09.15\] That being said, it's awesome to see a lead dev who is on Linux, because usually that's the reason why it would not get the attention that it deserves, and oftentimes it's just like "Well, what OS does the lead developer run?" and that's basically the one that's gonna get the most love, so... It's nice to see you on Linux.

**Atul R:** I think it's highly underrated. If you're gonna just jump in, you could like it as much as you like OS X. We just won't get a shiny application set that you get with OS X, but yeah... \[laughs\] I would change that with NodeGUI, let's see.

**Nick Nisi:** So what are some of the biggest challenges that you have in the near and long-term?

**Atul R:** The primary challenges are on exporting the documentation part. I am actively trying to build out a system that auto-generates the documentation, but I feel that auto-generated documentations are not really helpful and are not really user-friendly... So I really love to write my own documentation. That way it's more personal, and people feel like you could actually read it, basically. That's one of the major challenges, since I would say documentation is live for the future... Because the application moves forward, but the documentation stays older; I wanna improve that also... But let's see how that goes on. If anyone has any ideas, feel free to come on GitHub and open an issue and let's discuss that.

**Nick Nisi:** I love the focus on documentation, because that's in the recipe to make this a huge success. And you're focused on it.

**Jerod Santo:** What are some other aspects of the community where people can pitch in, and how would they go about doing that? Is GitHub the place to be? Is there a chat room, is there a forum? Where does the community get together, or at least where would you like them to, to really rally behind NodeGUI and start to use it and start to help out?

**Atul R:** Initially, I was focusing only on GitHub. I thought GitHub was the best place to do this... But eventually, a lot of people came on GitHub and asked me where they can do a private chat, or things like that. I ended up opening a Spectrum forum for it. It's a GitHub-owned chat forum, so you can basically sign up with your GitHub IDE and then join the NodeGUI GitHub Spectrum forum. Then you can either privately chat, or discuss issues there, and we could just solve it out together.

The newer contributors who are joining me on this journey are also joining Spectrum, and asking me for help there, and we're gonna be sharing knowledge there, and looking forward to how it goes forward. So yeah, Spectrum is the way to go forward, and you can always open bugs and stuff like that on GitHub.

**Jerod Santo:** Very good, Atul. Well, this has been awesome. I'm very impressed with what you've put out so far, in such a short amount of time, with what seems to be a very small team... And the results have been impressive, to say the least. As I said, your announcement last month was very well-received and caught our eye here on JS Party. It looks like your announcement post has almost 200 comments on it, there's been a lot of activity on GitHub... So you're off to a great start, and I just wish you the best of luck on building this thing. I would love to see the community go out and give it a try.

The best thing you can do is maybe take a small open source Electron app that you're using, and if it's simple enough, maybe see how you could port it over to NodeGUI and what that process would be like, blog about it, make a YouTube video about it, share it with us... We'd be happy to share it with the whole JS community.

Any final words from you before we call it a show?

**Atul R:** Yeah, it has been a lot of fun doing this talk, and I really appreciate both of your time. Other than that, I encourage everyone to contribute. It's a very friendly community, and we basically try to help out as much as we can. That's pretty much it.

**Jerod Santo:** Awesome. Well, thank you so much for joining us. Once again, Nick, thanks for hanging with me. That's our show for this week. You don't have to go home, but you can't stay here. We'll see you next time.
