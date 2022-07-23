**Jerod Santo:** So we have Daniel here from Tauri. Or is it Towery? Or Torry? Help us out, Daniel. How do you say it?

**Daniel Thompson:** Well, it's all up to you. I think that in our community there's a lot of people who have different opinions about how to say it, and we always kind of just go with whatever people want to say. Personally, when I'm using it in a sentence, I would say Tauri is this, that, or the other thing. So for me it's Tauri. For Lucas, I think he says more Tauri, with a little bit of an o. For \[unintelligible 00:03:39.08\] it's maybe Tauri with a longer o... But, I mean, it's just a name.

**Jerod Santo:** If you put me in a vacuum and said "Pronounce this", I would probably pronounce it like Atari, without the a. Tauri. That's probably less accurate than the way either of you are doing it, but I'm happy to call it Tauri.

**Daniel Thompson:** Well, what about the star Centauri? Alpha Centauri. How would you say that?

**Jerod Santo:** Centauri, yeah. Same thing. Tauri. \[laughs\]

**Daniel Thompson:** \[04:04\] That's actually where we took the name from, it's from these binary stars. Yeah, it's a binary star. So you've got this core, or backend, and you've got the frontend, and that's kind of the design impulse behind it, and we just kind of went with it. And if you look at our logo, you will actually see that the blue part and the orangey/yellow part are very close to a very certain star.

**Jerod Santo:** Okay...

**Daniel Thompson:** I'll leave it to you to find out.

**Adam Stacoviak:** Very cool.

**Jerod Santo:** I thought it was like a cell dividing. That was my interpretation, was like cell division.

**Daniel Thompson:** It's also two people hugging.

**Jerod Santo:** Lots of interpretations here. Adam, how do you say "centaur"?

**Adam Stacoviak:** I would say like centaur, and I would say Alpha Centauri like... Alpha Centauri.

**Jerod Santo:** Like Atari.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So we're together. Of course, we're both Midwesterners here...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Daniel's over there in Malta, but also originally from the States...?

**Daniel Thompson:** Yeah. I grew up there, went to college there, and then I left in 2000.

**Jerod Santo:** So a long-time expat, now living in Malta.

**Adam Stacoviak:** I like the logo being after the two stars, because I'm a known person to know about space and stars and astronomy and whatnot, but I hadn't looked at Alpha Centauri in a while... And it's two stars.

**Jerod Santo:** Well played, guys. Well played.

**Daniel Thompson:** You know, that whole three-body problem thing is also kind of cool, if you think about it like -- you know, the all of these possibilities of the user, and the app, and the frontend and the backend, and how it's just recombinatorial in so many different ways... I don't know, it just seemed like that kind of fixed tidal gravitation was a nice visual acoustic idea/metaphor for it.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** If you look at the blank space, the non-space, it's actually also an infinity sign, right? Kind of...

**Adam Stacoviak:** Pretty close. It's either a sideways 8...

**Jerod Santo:** Or the number eight leaning over...

**Adam Stacoviak:** That's right.

**Jerod Santo:** A lot of depth to this. I think you guys have thought it through as the point that we're getting to, where you got very lucky, with a very cool logo... And a name that's unique, but hard to say for people around the world, depending on your dialect.

**Adam Stacoviak:** I like that though. I mean, the name - it makes it challenging in some cases, I guess, if you're trying to say "Hey, go check out Tauri." Well, you got to Tauri app..." "Well, how do you spell Tauri?" Well, you may spell it differently, because you may be thinking of Atari... A-T-A-R-R-I believe is how you spell Atari. So you may go just to Tarri as an example, versus T-A-U-R-I dot app. So it does make directing people to the brand somewhat challenging whenever you have a challenging name to pronounce.

**Daniel Thompson:** Tough question... What's the best circle constant?

**Jerod Santo:** \[laughs\] Tough question.

**Adam Stacoviak:** Yeah, it's a tough question.

**Jerod Santo:** What do you think?

**Daniel Thompson:** I would say tau. I'm a tau club fanboy. Just less division, right?

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Sure.

**Jerod Santo:** How much division is involved?

**Daniel Thompson:** Well, I mean, 2 x Pi x R. Isn't that how you calculate the area of a circle? But if you know tau, you don't need to do two times something; you just have it.

**Jerod Santo:** I like how he drops that, and then he just takes a long pause, and takes a drink of his drink while we just sit here and think about it. Okay. Very nice. Well, you're a deep thinker, Daniel. Maybe go deep with us on the origin of Tauri... Because you've been working on it a while. It's 1.0 now, but that was even after a very long, nine-month beta. So I'm assuming it took more than nine months to get to here, since you had a nine month beta. Give us the back-story, why you created this project, who's involved etc.

**Daniel Thompson:** Oh, gosh. Well, we've been working on it for just over three years now, since May... And it goes back to a different open source project that I was involved in. My friends and I, we were working on a project called Quasar, which is a Vue.js system for building websites and SPAs and SSR apps and Electron apps and Cordova apps. And I was always kind of interested in outreach and getting into other ecosystems, and I reached out to the wonderful people over at Purism.

\[08:23\] They make this PureOS open source-conform system. I mean, the company is following these ideas of open source, and the products are following these ideas... And I thought, "Well, hey, maybe I can stop over there and ask if it's possible for us to figure out a way to work together and we start putting some of these Quasar apps on their app store. And they're like "Oh, cool, that's awesome. So how are they made?" And I was like "Well, you know, we use Vue.js and Electron" and they're like "Whoa... We can't. Here's a long thread over at the FSF, and read through about \[unintelligible 00:09:06.26\] Chromium, and why some header files aren't appropriate..." And I was like "Okay..." So three days later, and miles of threads later, it was kind of clear that what I thought open source was wasn't always what open source really was. And just saying that something is open source and putting it on GitHub, doesn't mean it really fulfills the needs of the FLOSS community, right? I guess the difference between free/libre open source software and open source software, and open core software - everyone's kind of has these different feelings about how you enable other people to use your code. And at any rate, and as fate would have it kind of dejected, a couple of days later a really good friend said, "Hey, did you check out the WebView library?" And I was like, "Okay, well, fine. I'll go look at it." And this was like a combination of projects. There was a developer named ZSerge, who wrote a bunch of C and Objective-C bindings for the platform-specific web views on Windows, Mac, and Linux. And then we found a Rust port.

So we did a first practice, Lucas and, with Go. I think I did the first C example, and then Lucas did Go, and we're both like "This isn't really nice." And then we found the Rust library. The Rust library kind of helped us, and allowed us to get to a kind of proof of concept really quickly. And what we were seeing was kind of this, like "Daniel \[unintelligible 00:10:54.17\] Is this right? The app is only two megabytes." And we've been using Electron apps, and are used to things weighing 600-700 megabytes and then download. And okay, it was it was just a dot app. It wasn't like all of the crazy MSI installers and DMGs. And don't get me started on the Linuxes, but... It was kind of tangible and real. And we were both really new to Rust. Totally unaware of the complexities of the stuff we were getting ourselves into... And we had these proof of concepts, we got it working on Mac, and we got it working on Linux, and we got it working on Windows, and that's kind of the time when I think we got slashdotted. No, we got hacker-newsed first. And it was kind of this almost raging, how dare you not ship Chromium?! And it was interesting, because it kind of gave us an uptick, and it gave us some visibility to the larger community... And then just one after the other, these amazing people joined us, who really believed in "Yeah, we can make it more energy-efficient, we can make it more secure, and we can really follow in these open source ideals and do our best and stay transparent and accountable."

\[12:27\] And you know, things went pretty well. We got further and further, and then boom, COVID happened. And I think, for those of us who were around and active in software, and especially open source, it kind of got to be -- I don't know, I mean... I know personally I had just this crazy experience of not knowing when to stop, and that kind of led to this weird COVID burnout, and we're all just like "Oh my gosh, alright, so the world's ending, let's go have a barbecue." And you know, things kind of got back on track, and then the investors started ringing the doorbell, and the venture capitalists, who will remain unnamed... I don't think there's anything wrong with open source software becoming commercialized, but it scared me, because I've been working in open source projects for almost two decades, and I didn't want this project to become corrupted by some kind of capital that starts dictating the direction it has to take. We kind of ghosted the first VCs to call us, and went into overdrive and registered Tauri as a program within the Commons Conservancy, which is a Dutch organization around NLnet, that really exists to support open source projects and protect them, and especially to protect the code and to protect the community. I mean, we've all heard of bus factor, but I think that the ability for money to corrupt ideas such that the original vision gets lost... I mean, I'm not saying that's the kind of militarization of open source that I'm most worried about... But for our project, we really wanted to keep it in the hands of the community. And I think that that was really the right decision at the time, because as time went on, we got really close. We built our betas, and then we decided to get audited, which is a little silly... I mean, who are we are...? It's just some friends and an open source project, and then we got some grant funding, and we took our donations together... And we had an external horizontal audit of all of the libraries, and a vertical audit of an example app... And I have to tell you, if you've never had your code audited, it can be scary, but I think what we all learn from the experience is that it's really exciting when your presumptions are challenged, and you get to a point where you realize through the help of the external pen testers or auditors or code reviewers, or whatever it is you want to call them, that you can actually continue to make your thing better.

And we obviously published the finding after we did six months of work, rebuilding the parts that were problematic... And yeah, now here we are, a couple of weeks post 1.0 launch, and it's so exciting to see the gravitas of the future in the team. Because you know, up till now, we -- we do have a change log that we implemented in probably the first six months, so that we can maintain the history of what we've built... But now you have other concerns, like what parts do we have to audit next? And what is our release strategy going to be? How are we going to branch this? And it's really exciting to see the working group come together.

**Adam Stacoviak:** \[16:16\] Well, it's a journey, for sure, into your story. I think, what stands out to me really is your desire to be true to what you consider open source roots to be. And we've covered all the aspects. And you're right, money can corrupt things, but it can also inject a lot of capital for the good. So there's both sides that I'm -- it's interesting to see how you were, you know... I can't recall the words you used... Afraid? Or you got fear from the VCs coming? What was the word that said there about your feelings... But just how it can corrupt things. And that's one thing I'm taking away from this intro, really, is just how this journey has been, and how the possibility of venture capital being able to corrupt that... Because that you also have a governance model in place, you have -- not only do you have that, you have a social contract... So you've done some things to put faith into the community and your trust in the community. That's definitely evident.

**Jerod Santo:** What's your personal end goal with this project? You personally.

**Daniel Thompson:** That's a longer story.

**Jerod Santo:** \[laughs\] Give us the TL;DR.

3:I mean, I'm a short filmmaker. That's where I come from. I graduated in the fine arts from Bauhaus University, and my thesis project was a real-time analog holographic projection system that I built from scratch, including five video projectors, back in 2004. And I've always been a filmmaker. It's how I started my studies in the US. And for me, thinking about new ways of collaboration for my filmmaker community is -- I got into Quasar because I liked the ideas behind it, but as I got deeper into it, I realized it needs a testing framework. And so I built that. And it's kind of like, the deeper I go down this rabbit hole of having the perfect tech, the deeper I have to continue going. And I think that, for me, finding that zen is when there's no more tools left to make; when I'm unable to find a better way to do something, when my friends and my community and my partners and the businesses I'm involved in all say "Well, guys, we did it." Then you'll find me in my studio, making films. Because I -- you know, I tried to follow my principles, and did my best to make the world a better place, but ultimately, honestly, I've been scratching my own itch. If something isn't working, why isn't it working? Can I fix it? If I can't fix it, can I build something better? Is it really truly better? I don't know, can I build something better than the other thing that we've built? And that's for me the end goal as a tool maker, as an artist, as a communicator. I think that the path is the goal, but... I don't know, endgame...? Gosh, it's hard to say.

**Adam Stacoviak:** Could you do both? I mean, why does it have to be an and or or? Can you make films AND pursue this pursuit?

**Daniel Thompson:** Absolutely. That's actually what I'm doing next week in Malta. I'm shooting a series of short films.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Nice.

**Jerod Santo:** The reason I asked that question is because it helps me understand why the fear of VC was there... Because the question was like" Where are you trying to take this thing?" and your answers are all beauty, art, perfection, curiosity, community, relationships, perfection... I already said that one.

**Adam Stacoviak:** Twice.

**Jerod Santo:** \[19:51\] But they're very much -- these are intangible, artistic things that aren't like "Well, I want to have everybody using this to build their desktop applications." I'm sure that's probably maybe a piece of one aspect of it, but I'm just trying to understand... I agree, there's the balance of the needs of the humans working on a project, and the goals of the project, and how that can be dangerous, depending on who's involved.

**Daniel Thompson:** Right now, we are collaborating with a couple of wonderful people from the Servo project, and are working on retrofitting Servo to become a web view provider for Tauri. And where we think this could go might be a truly secure and privacy respecting browser; maybe that's as far as I can think. It's a massive undertaking. It will require enormous amounts of capital, that will probably have to come from VCs, and the European Commission, and places like that.

I would like to backtrack a little bit to this point in time where the VCs started contacting us. We weren't ready as an organization, we weren't mature enough as a group to even consider those things as possible.

**Jerod Santo:** Sure.

**Daniel Thompson:** We didn't want to take capital until we knew we had a product, like a 1.0. And we might be taking capital in the near future, and we might be starting a company... It's a group decision, and there are some possibilities out there that are really exciting. And I'm just so glad we didn't go down that path too early, because I think from what I've seen in the investment world and in venture capital world when you go into early, I think what you sacrifice is a little bit of backbone, and knowing where you come from, what it is you're doing, where you're going. And I think that taking a massive amount of cash for a young group can also poison relationships, and make things challenging. I think after three years, it's something we're going to be looking at.

**Jerod Santo:** I think that's fair, and wise, especially when you're trying to figure out who you are as a group. Money makes things more complicated. Now, a lack of money can also make things very complicated... Like, "Hey, I can't work on Tauri today, because I have to go do a day job", or whatever it is.

**Adam Stacoviak:** Do my thing, yeah.

**Jerod Santo:** So these are different trade-offs that people make. Do you want to give the quick nutshell of what Tauri is, as it exists today? Because we're assuming the listener has some contacts, which I hope they have, but maybe they don't have. So just lay it on the table, what Tauri is, as a 1.0.

**Daniel Thompson:** Sure. Today, Tauri is a framework that lets you create desktop applications for the major OSes - and I'm counting Linux under the major OSes, because there's about a dozen there... And it does so by leveraging kind of the best of both worlds of software engineering. So people who are familiar with building frontends and GUIs with web tools like Vue, and React, and Angular, and Vite, and all of these great, crazy toolchains that allow you to compose JavaScript in a higher-level language like Svelte, or TypeScript, and render out basically HTML, JS and CSS, which gives you as a visual designer, as a user experience designer/builder, the opportunity to leverage the best parts of the browser, which are styling, and theming, and in some cases performance.

\[23:56\] While on the backend, what you have is a highly-tuned core, like an engine, if you will, that is built on Rust, and only ever ships the pieces of the project that you really need. And I guess, as opposed to shipping an entire Node.js runtime, one of the ways we get smaller is we only ship those code points that you actually need for your app. And it's not necessary for you to even know Rust; you can just consume the APIs. You do a little configuration file, that's all documented, and you can consume those APIs for Tauri in JavaScript, and the API call passes a string message to the Rust core, and the Rust core then responds, depending on what you want to do... You may want to open a new window, or visit a website, or send a notification.

And while a lot of these things are possible in the browser, by in putting this core system interface behind the confines of relatively safe Rust, what ends up happening is that this kind of barrier between the two systems provides a greater degree of operational security. And in a nutshell, Tauri provides a bundler that allows you to create versions of your app that are then compatible for the platform upon which it was built.

You can also use our open source GitHub Action to compile for all of your platforms, and we also provide a updater system, so that you can basically publish an update to your update service, and all of the apps that are online and listening will download an update. It sounds trivial, but it's along with package management maybe one of the more important parts of modern software.

Tauri also offers a plugin system, so that you can enhance the features and functionality of your app above and beyond what it is the core offers, such as a Yubikey integration. There's a Rust library that integrates with the Yubikey, and you can send a message from the user interface to the Rust core to say, "Hey, authenticate me, please" and then the Rust core negotiates all of that then with the Yubikey. That's just one example. I mean, there's lots of other things that people have been building, and that we also manage for the plugin ecosystem.

And maybe the coolest innovation that we have is an isolation pattern. The pattern was built in response to one of the audit findings, which more or less showed that our bridge between the frontend and the backend can be corrupted in the case of illicit code running in the browser. And so what this isolation service does is it only allows API commands that are authentic to run through the bridge. There's a wonderful write-up by the author, Chip, a member of the core team, who -- it goes into great lengths to explain the backdrop of it, but the important thing is, it is now possible to secure the frontend and backend communication against illicit injection, or XSS, or CSS attacks, or SVG attacks, or whatever.

**Jerod Santo:** Nice. So you have these three aspects of your philosophy; I think you're speaking to the security aspect, through that cool innovation.

**Daniel Thompson:** \[27:58\] Yes.

**Jerod Santo:** You also focus on privacy... This is from the 1.0 blog post - you have the security, privacy, and then the environmental impact... Which is an interesting way to think about what most of us developers tend to think about first, and have the environment as an afterthought, is performance. You put the environment first and have the performance be kind of the afterthought; I kind of liked that casting. But here you're speaking to the app size, I assume, the CPU cycles required etc. is your other third aspect?

**Daniel Thompson:** Well, the interesting part about shipping less code is there's less possibilities for gadget attacks to be introduced. So by shipping less code, you kind of fulfill the environmental aspect, as well as the security aspect. Now, with regard to the privacy aspect, this has a lot to do with the fact that we are working on helping younger engineers learn how to do things. And what I've noticed in my -- I don't know how many years on help desks, is that the tooling has gotten amazing. The developer experience is so great that you don't even have to know what you're doing anymore, and you can make and ship an app.

And where we're trying to -- it sounds terrible; we're not trying to educate people about doing things the right way... But we're more interested in fostering an environment for engineers to reconsider their perceived ideas about how software has to be developed. It's not free real estate. I mean, just the number of applications running massive, bloated binaries, and consuming transit resources is mind-boggling. And by developing from a secure perspective, where the things you build are always secure... Unlike building a developer app, and it's only going to be for insiders in my company, we try to take the other approach and say, "Yeah, you may take shortcuts, but you're making yourself vulnerable."

And so by kind of cementing these principles into what it is we do and how we talk about it, it's really our hope that we're able to present not only a framework for making better apps, but ultimately a community that's more aware of the fact the planet is burning; that every single thing that you can do to help that is so important. Even if you don't think it's much, every little act helps. And I'm really not greenwashing here. I mean, I live in Malta, it's 42 degrees. We have floods everywhere on the planet, except where there's no floods, and there's no water, and there's no basins. And I'm not saying that smarter software is going to solve these problems; smarter engineers will. And that's the next generation.

And to come back to your question, maybe that is the end game... Because literally, the week before we released the 1.0 of Tauri, Explorer got retired, and so did Atom Shell. And software projects like Tauri, like Atom, like Explorer - they have a shelf life. At a certain point, the next thing comes along, and - hey, maybe Tauri is able to continue evolving, maybe not. But what we can help people do is think about what it is they're doing, why they're doing it, and offer them a framework for thinking about better ways of doing things.

**Jerod Santo:** \[31:38\] That reminds me of a conversation we had with Jessica Lorde last fall, about Electron and her work on Electron, and how it changed the game and it allowed so many more people to develop cross-platform apps that otherwise wouldn't have been able to, because so much investment, both in education and just time, in building the same app for these different platforms. I'm sure you know that quite well at this point, building an application like Tauri that people build upon.

And she said -- I was asking her about how she feels when people hate on Electron on the internet - which is something that we do on the internet, is we hate on Electron. And she said the haters have a good reason to say the stuff that they're saying, because it's got a lot of wart, it's got a lot of problems, and one of the problems that it has are these large, hundreds of megabyte application bundles that are produced with Electron apps. And she said at that time, somebody - maybe it's the Electron team, but somebody needs to come out and innovate and change, and the next thing at some point will take over, or will augment, or challenge Electron to change the way they do things. Now, if it's completely built around Chromium versus not - that's the kind of foundational aspect of a technology, it seems, and so maybe a difficult pivot for Electron at this point... But Tauri definitely, I think, is well positioned because of these very small app sizes that you all produce, to change the game once again, and allow better cross-platform apps to be built.

**Daniel Thompson:** The smallest app size that I know of was 450 kilobytes for a functional Hello World MacOS app. Granted, the ICNS, the icon file for Mac, if you play it right, the icon is generally the largest piece of your codebase.

**Jerod Santo:** I was gonna say, they like to have nice, big icon files.

**Daniel Thompson:** Yeah. You know, there's your 700-800 kilobytes right there.

**Jerod Santo:** \[laughs\] Yeah, exactly.

**Daniel Thompson:** And the code that we need to build the app is 300 kilobytes if you write solid, tight, minified JavaScript, and you use SVGs, and you do the awesome parts of Rust compression, then you can absolutely get down to 2-3 megabytes for a small app. For massive apps - okay, sure, there's maybe a bit more JavaScript, and then it's 8 or 9 megabytes. But even then, one of the nice features that I really wish Electron would figure out, that we offer, is that we don't ship the blank JavaScript, because the .asar file that is shipped with Electron is basically the entire code to build the app. And because of the way that Tauri -- you know, it doesn't use a web server, we use a custom protocol, so there's no extra ports flying around... And because of the way that the entire bundle is crafted, I suppose you can introspect some strings in a hex editor, but recompiling it is a masterclass in reversing. It's not like somebody posting on Reddit, "Oh, I copied all your code and I made a fake app."

And I think for for the security-conscious out there, we understand that nothing is perfect, but every opportunity that you have to slow down an attacker, and make it hard for them, the less interest they're gonna have in breaking into your app, and hacking around. Obviously, everything is hackable. I mean, I'm on a computer right now, and it's hackable. I use a phone; it's software with hardware, and storage devices. It's hackable. But doing our best is better than making excuses, I think. And we try to really, you know, not just say that we're secure, or more secure, depending on who you talk to, but we back it up with the audit... And I guess that's the big thing from the 1.0, is that the 1.0 was audited, and we resolved all of the issues that were found.

**Break:** \[36:09\]

**Adam Stacoviak:** So we've talked about these three pillars of your philosophy, the Tauri philosophy: security, privacy, and environment, just to remind the listeners... But performance isn't in there, although it's kind of like part of the future of the web, or any sort of application like this to be performant. But I imagine that smaller file sizes lean towards performance, for obvious reasons; like, it downloads faster, it installs faster, it probably runs faster, it's less to load into memory... But yet, the word "performance" didn't make it into your philosophy. Why did it -- is it just baked into all three, or the grand vision? Or is it just missing?

**Daniel Thompson:** Sometimes we do call the apps high-performance, and there are bottlenecks. And in my experience with projects using Tauri, it really comes down to who's doing the architecture, what kind of architectural paradigms are they familiar with and comfortable with... As an example, you can use the crypto library from JavaScript to create a random number. And it'll take a couple cycles; it's JavaScript, it's still pretty fast. You can do the same calculation in Rust, and it might be slower because you have to pass a message, to have that performed, and then return the result across the bridge. But for me, the performance - that's not the big issue. I think a lot of people on the Twitterverse, and in Reddit, and Hacker News, and wherever are always looking at memory consumption and how much memory is being used.

\[40:03\] And you know, we do track and compare between like a Hello World with Electron and a Hello World with Tauri, and we find that the memory consumption is similar. Your boot time is similar. And a lot of that has to do with just the way that web views have been built and managed, as adopted stray cats for the browser ecosystem. And the standards bodies are run by a lot of super-intelligent people with vested interests, but there's no web view standard. The way that MacOS serves out their versions of the web view, as opposed to how Windows is now doing it, as opposed to the way that WebKitGTK tries to do it across Linux platforms shows that everybody is just kind of trying to figure it out while they go. And because of this, we see Tauri core at the moment kind of as a collection of ugly hacks and workarounds so we can get it to work. And we manage that, and it is working, but in the long-run it's not really tenable. The big performance issue that we have is the bridge, it's serialization. It's about passing data from one side to the other. There's no real shared memory between a frontend and a backend in a web view.

And where we're excited about working on Servo is rescuing this grand project had such lofty ideals, and repurposing it such that we can get the performance back from the web view bridge by using shared memory. And it'll be marginal, it might be a little bit better than we're at right now, maybe twice as fast, maybe 10 times as fast in some cases... But for me, and I think for the team, the most important features are the fact that it's secure and robust. I mean, we still need benchmarks for the GL windowing that we're bringing out. I do expect that to be several orders of magnitude faster than a web view, because it's just shader response. And, I mean, why not performance?

**Adam Stacoviak:** Well, you talk about the environment, too. In this 1.0 blog post you have a full-on table of how app size impacts the environment... But when we look at -- I suppose if Tauri is planning to be or attempting to be what Electron could not get right because of Chromium and other hurdles in its way to get to perfection, is performance. And every developer's issue with Electron when they cry on Hacker News, Lobste.rs, wherever they go, is usually app size, which you've already talked about, but then also performance. "Well, I've got this application, but it runs slow. It loads slow. It's not a native app, and I want native" etc, etc. So performance seems to be the key thing.

**Daniel Thompson:** \[43:33\] Well - see, that's exactly the thing, native apps. I believe that that was an attempt to throw mud in the face of Cordova, Electron, capacitor engineers, which is "Yeah, your app runs so slow, you don't even get 60 frames per second if you're running a list with 1,000 elements." And you know, that kind of performance - well, maybe we're sidestepping that, because when you use the UI, the user interface just to do user interface stuff, you've got lots of overhead. But if you're using it to do fetch, and WebSockets, and keep your interface GUI and also do some kind of random intervals, and you're stuck on this thread, maybe you've got a web worker, so if you're lucky, you've got two threads, but you're still sandboxed by the operating system, so at best you're gonna have to -- Node.js might have one or two, but with Tauri and the Rust core, you just take all the threads you need. If you need to do thousands of computations to the N-th position of tau or pi, I wonder which app would be faster. We might make that challenge on Twitter when this when this Changelog podcast comes out.

**Jerod Santo:** It's be a good one.

**Daniel Thompson:** Let's do a battle.

**Jerod Santo:** Tau battle. So a lot of people would want to use Tauri at this point, simply because they're going to get that two megabyte to five megabyte binary, right? I mean, I would. And a lot of Electron apps are very little Electron. It's just like the corners or the edges that you need. You know, maybe you have like a menu bar app; a lot of -- especially dev tools, right? We're scratching our own itch; I would love this to be a menu bar cross-platform. Maybe I have a little bit of code that runs, and I throw in Electron and some menu bar app now. And that's great, except for it's like 500 megabytes menu bar app; there's a lot of bloat there that could be avoided. Are people porting to Tauri? What does it look like to port, etc?

**Daniel Thompson:** Well, it really depends on how dependent you are on Electron.

**Jerod Santo:** Well, let's just take that simple case of I'm using it to help shim into the menu bar my otherwise CLI kind of style tool, that's like shelling out, and stuff. I mean, how much is there?

**Daniel Thompson:** Well, jumping into a menu bar is probably going to require you to write a little bit of Rust. Menuing and that kind of task bar interaction is still a little complicated, but absolutely doable. The interesting thing that we've heard from a couple projects is they've been using Rust to write their Node.js libraries. So they use the N-API, and they've rendered the Rust out, and then they consume the N-API in their JavaScript and their Electron app, and they're like "Oh, this is great. I can just skip this compilation step and instantly consume my Rust that I've already written and know very well, and I have one less breakpoint." And it absolutely does work that way.

And for trivial apps, like a word a day app that is literally just some HTML, CSS and JS, you can take that entire rendered dist folder or whatever, and point the Tauri build command at it. And if you're not doing anything funky, you're done. And you didn't even have to really touch a line of Rust.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Maybe a different version of Jerod's question might be where's the sweet spot? If someone is porting. What kind of app could be ported, or greenfield that's the sweet spot for Tauri right now?

**Daniel Thompson:** We're seeing a couple of different groups of projects come together. Developer tooling is great, especially if you're consuming something remote over a WebSocket, or something. People can do that. You can use the WebSockets in the frontend or the backend of Tauri. It just depends on your side.

Security-focused things like password managers are interested in actually using Tauri right now. I'm not sure if I'm allowed to mention them...

**Adam Stacoviak:** They're a sponsor on your website, so...

**Jerod Santo:** \[47:54\] Maybe we can mention them, and you can neither confirm nor deny.

**Adam Stacoviak:** You don't have to say anything, we don't want to get you in trouble. I will say, one of our most popular episodes was a rebroadcast of a show about them being all-in on their web stacks.

**Jerod Santo:** That's true.

**Adam Stacoviak:** What they're doing around the web stack is very interesting to many.

**Daniel Thompson:** Well, I'm hesitant to name any kind of names, but things that are developer tools, that are utility tools. We saw somebody make a Twitch stream subtitle plugin system for OBS, for example. So I think the sweet spot are apps where you might have to do something like cryptography, or you might have to do something with general low-level access, or where you really want to have granular file permissions, because I think we do that pretty well. Like, the easiest way to get started if you're a Node.js developer is really literally just to npx create-tauri-app. And it'll tell you that you still have to install Rust if you haven't installed Rust yet. And then it will compile away after you set up the npm run dev command, or whatever, and you'll have it up and running.

So I think the neat part about it is just the diversity. It's hard to say... We have started our Awesome Tauri repo on GitHub, and every couple of days a new project floats on in, and it's just "Oh."

**Jerod Santo:** What about if the app wants to be your digital HQ, and maybe transform the way you work with one place for everyone and everything you need to get stuff done? Like maybe Slack.com.

**Daniel Thompson:** Oh, wow. Slack. As an experiment at one time, we did embed Slack.com into a Tauri app, and it worked. But I also know that Slack is a deep believer in Electron... And for good reason, because it's a wonderful user experience. I think amongst the 10 chat applications that I have, it's kind of the most well thought out.

**Jerod Santo:** I do appreciate their user experience. They have a lot of deep integration, so you have a lot of file access stuff, you have a lot of notifications, operating system level notifications... The kinds of places where I think that cross-platform apps usually fall down is like in the tighter way -- like, there's two ways that we think about native apps, perhaps. One of them is performance. Like, "Oh, it's native. It's fast." You were talking about the scrolling, right? But the other one is like how much does it feel like the other apps on your system, and how much does it have those native dialogues or those native file pickers etc. And I'm wondering where Tauri is with those kinds of features, those kind of integrations into the platforms?

**Daniel Thompson:** For Mac and Windows it's native; native windowing. So you can also modify it if -- you know, on macOS you've got this little stoplight at the top, and then the title of the app, and that's just kind of the generic \[unintelligible 00:51:11.22\] But you can remove that; you can make the entire window transparent, if you want. You can make it always on top, which actually isn't something that Mac does that much. But the file picker, the directory picker - that's just native NS elements.

**Jerod Santo:** Tabs? Native tabbing, native preferences?

**Daniel Thompson:** Yeah, and we are integrating with the system light and dark mode, so you're able to do that kind of deep insight into -- or not deep insight, but this kind of expected user experience where if they're on a dark mode, then the app registers that it's in a dark mode, and can pass that down to the user interface.

**Adam Stacoviak:** \[52:02\] This native talk really reminds me of like applications - or maybe even in particular developers, individual or conglomerate, whether a small team or not, they choose, let's say, for example, things; they're pretty much macOS-only. And I wonder sometimes if it's just because it's been super-difficult to multi-platform. And so it's easier in some cases just to be "I care so much/we care so much about, native look, and native speed, and native whatever", all these native things that make it feel like "This is Mac only." And some of that might be it's just hard to multi-platform, or they're just so focused on macOS, for whatever the reasons are.

**Daniel Thompson:** History question - does Windows seven have native notifications?

**Adam Stacoviak:** I wouldn't know... \[laughs\]

**Daniel Thompson:** It does not.

**Jerod Santo:** No idea.

**Adam Stacoviak:** It does not, okay.

**Daniel Thompson:** And I think, if we look back to the past 10 years of operating system evolution, on the one hand you have like this mass exodus from a style in the Linux community, where not only do you have a driver for your screen... X 11 was very popular for a while, but I heard it's being dropped. Okay, so you've got the driver. Then you have the user interface; maybe it's Gnome, maybe it's KDE, maybe it's something else. Now, each of these apps have different understandings of what the desktop does. Or not apps, but these GUIs. And different ways of registering them. And in some of them, they don't even like you to have a taskbar anymore. And what we've discovered along the way working inside of the Linux ecosystem is that the matrix of things that you have to understand about that entire ecosystem in order to make a multi-platform Linux app is mind-boggling. Even are you going to use AppImage or ship deb? What about \[unintelligible 00:54:02.24\] How do you get it to them? And it becomes this practice of finding the least worst compromise, I guess. And Windows, thankfully, believe it or not, they've built WebView2 on top of Chromium (Yay!). But what Windows finally did, and I think what they do better than all of the others - WKWebKit from Mac and WebKitGTK from the Linux community - is they have a rolling evergreen release, so that you can constantly just subscribe to that, and your system will keep the WebView2 up to date. And you can, as a developer, say "Nope, it's this version, and I'm shipping this version with you. Eat the 30 megabytes." But you have those options as a developer.

And to come back to your question about why is multi-platform so hard - it's because it's just different user experience dialects, and different source, different ecosystem requirements. I mean, on Mac we can't go back in time before 10.13. I don't know how long it's going to be until Mac just says, "Alright, you guys, anyone who's still using Intel is out of the game." And at that point, we definitely have a fractured ecosystem. So how do we even notarize Mac apps if they just deprecate the whole architecture? I don't know. \[laughs\]

**Adam Stacoviak:** Well, that'd be sad, because I do have some Intel machines lying around that I keep using; they're still useful to me.

**Jerod Santo:** I mean, it's gotta be 5-10 years away, because there's a lot of machines that are out there right now.

**Adam Stacoviak:** Well, the reason why I brought up Things in particular in this idea of like the difficulty to multi-platform is like does Tauri -- and Electron has promised this, but some just don't go down that road... But does Tauri enable teams like Things, for example, to go beyond Mac? Because there is obviously a market share of people who wanna do to-do lists. I mean, I love Things. I'm a user of them, and that's why I'm mentioning them, because it's just got a phenomenal user experience on mobile and desktop. And I don't use other well known to-do apps, because their experience from one version to the next doesn't match. Things has been focused on that, and I'm just wondering, does Tauri enable a team like that to "more easily" multi-platform?

**Daniel Thompson:** \[56:36\] I would like to think so, but I don't know things tech stack.

**Adam Stacoviak:** Right. Specific things, yeah.

**Daniel Thompson:** Did they use Cocoa, or--

**Adam Stacoviak:** They've got sync, and stuff like that. Yeah.

**Jerod Santo:** It's been around a long time.

**Daniel Thompson:** They've put a lot of engineering effort into focusing on this platform, getting it right, and they've probably gone through iterations where they're like "Oh, no, what do you mean WebKit-whatever is gone now?!" And maybe they're not even using the WebKit. Maybe they're just 100% metal these days. Maybe they don't use Objective-C, maybe they do. Maybe they're writing in Swift.

I think once you start down a path -- that's kind of where we what we mean with brownfield. Once you start down a path, you kind of set your limits. And what I think Atom Shell and Electron and Node WebKit have done is they've allowed engineers to kind of hedge their bets... Because now you can, for the most of your code, take it from Electron and move it to Tauri. Or move it to somebody else who does something similar. Neutralino, for example. It's the HTML, JS and CSS that you care about, and then you just have to glue it together with the backend. And what that does is it allows your architectural debt to sort of resolve itself as a new technology comes along. You can take the stuff that you've been building and port it over. And yeah, I think that it has a lot to do with the team. I mean, I don't know what else to say.

**Jerod Santo:** What about other platforms? There are other platforms... I noticed you don't call yourself a desktop solution anywhere that I can see on the main website... I wonder if that's because there's other platforms that you have planned, such as these mobile devices that we all know and love so well...

**Daniel Thompson:** Yes, we actually have prototypes of iOS and Android working already.

**Jerod Santo:** Nice.

**Daniel Thompson:** We've been waiting until the 1.0 landed in order to bring them kind of more to the forefront. The place where they exist is in one of those three libraries that we talked about, \[unintelligible 00:58:51.10\] So we can do windowing, we can communicate with them, and now we have to raise them up to the Tauri layer, where they then interact with the APIs that you need, like the file system, the camera, the Bluetooth... And then also create the final APK, or Apple blob, and get those on the app stores. So it's very early days for that...

We're also interested in getting the apps on other devices. I remember when -- gosh, when was it? This was a year or two ago, when one of SpaceX's rockets went up, and somebody mentioned "That window - isn't that Electron?" And it turns out that we're using Electron on the rocket ship.

\[59:41\] And I think that -- okay, it's a nice dream to have, but as and if our civilization keeps on progressing, I do expect us to start being able to ship apps to other devices, like augmented reality, and to watches, and to your Smart TV, and even to embedded systems. I mean, one of the neat parts about Tauri is that you can use it as a CLI. You can interact with it from the perspective of a CLI. You can hook apps up together so that they're communicating in a distributed way. And I think, as people start to realize, "Okay, we can think about these applications, these devices that we're using - we can still think of them as thick clients, right?" It's not like it's just a dumb screen and a keyboard; these things have amazing processing power, and we can reduce these requirements of putting our data into corporate silos... And that's where the privacy comes back in, right? By allowing people to own their own data, to own their own identities, to manage their own things, because their devices are capable of it. Maybe that destroys some business models, but I think that for a growing type of engineer, it just makes more sense. Like, why would you pay for a cluster of highly available database servers and some API endpoints behind the CDN, when you can just have the apps talk to each other? You just have to negotiate a point where they can meet and they can send all their data. Why bother having databases when you can trust your users? And that might be the final paradigm shift that we're after.

**Break:** \[01:01:40.00\]

**Adam Stacoviak:** Daniel, there's, I'm sure, a mounting amount of people listening to the show now. 20, 30, 40, 50,000 people (who knows?) curious about the future of multi-platform native application development. And with Tauri, what's the first step? You've got some prerequisites. Rust is a prerequisite. Pretty easy from there, right? But then you've got --

**Daniel Thompson:** Actually, that's the only prereq. You can do your entire app in Rust. If you want to run all of the Tauri commands, you can use the Rust version of npm yarn, it's called Cargo. Generally speaking, the majority of people will need Node.js if they're doing something like a frontend language like Svelte, or Vue, or whatever. And depending on your development platform, you're probably going to need some other tooling. Chances are good that you already have it installed. But if you don't, we walk you through the couple things that you might need.

Basically, at the end of the day, you need a C compiler, because we still use -- Rust still uses... There's a couple ways to do it, but GCC, for example, is pretty common. And yeah, then you're good to go. You need a computer...

**Adam Stacoviak:** Obvious...

**Daniel Thompson:** We did have somebody trying to develop Tauri apps on Android, and kind of didn't work that well. You can develop headless; there's ways to test with xvfb on Linux, so you can kind of emulate a screen. But generally speaking, a keyboard, an IDE, and a development environment... A lot of people use VS Code, VSCodium... Take your pick, as long as you can edit some code. You might want to have Git installed. It's not a requirement, but modern engineering is kind of moving toward that distributed collaboration. It's what we use, but not a requirement.

\[01:08:06.26\] So, I mean, the easiest way to get started is probably for a lot of people - I would say the majority is going to be in the Node.js ecosystem, so pick your favorite framework and we probably have a starter kit for you. So you can run the Create Tauri app, which is a library that we built in Node.js, that scaffolds up your entire folder structure. So you get your -- if you're using React, or Svelte, or whatever, you've got all of those Node modules that you need to set it up, and you get a dev server that you then use to get your hot module reloading while you're developing the app... And yeah, it's pretty straightforward. We've tried pretty hard to get it to work for almost everybody. I think we're at parity now between the three majors - macOS, Linux, and Windows.

And then you're gonna want to build your app. And what we've found is bundling for all the platforms is complicated. And that has a lot to do with the way the compiler expects the architecture to work. And Rust - you can compile Rust for a number of different platforms, but where it always, always, always get sticky is compiling for macOS. Some people run a couple virtual machines. They maybe have a macOS as a main driver, and then they run a Linux in a Windows virtual machine, or they have a Linux as their main, and then they run a suite of virtual machines... And as a matter of fact, that's kind of how the CI works. So the Tauri Action on GitHub, that you can really easily hook into your GitHub workflow, basically takes your Tauri configuration file, which tells it what kind of app you want to build (for Mac, for Windows, for Linux), what kind of API features you want to embed into the system, because you're using them, or you don't want to embed... The kind of CSP security policy that you want... There's a lot of granular functionality inside of that configuration file, and it's actually all the CI really needs at the end of the day to build out for those other platforms. And I think that's kind of the skinny, the lowdown on what you need to consider when you want to build for multiple platforms.

**Jerod Santo:** How do you test those integrations?

**Daniel Thompson:** How do you test...

**Jerod Santo:** Sorry... The age-old question that sucks to answer...

**Daniel Thompson:** It is a sucky question... \[laughter\] But it's really, really important that you unit-test the code you've written...

**Jerod Santo:** Sure.

**Daniel Thompson:** ...but how do you integrate? And what we've built is an early version of a WebDriverIO-based protocol called Tauri Driver. So you can drive Windows and Linux, and basically test that if somebody wants to spawn a child window and clicks a button, that you can prove that that action actually works via normal WebDriverIO stuff. And because it's WebDriverIO, you get all of the other goodies that the ecosystem offers - visual regression testing, if that's your jam. Or I've seen even A/B stuff work.

\[01:11:49.29\] Where we do need help - and if you're listening, dear listenership, help with the macOS integration of that, because we just... We just couldn't get that to work. With GUI apps I know that, for example, Cypress does an amazing job of -- you know, the way you set up your Cypress tests, and the way that it runs through them, and it clicks through your user interface... It's really great for websites, for web apps, and you can actually leverage a lot of that thinking in Tauri apps.

So you can also run tests on your browser code. Certain things that have to hook into Tauri APIs - well, you've got to mock them. That's how that game works. And we do provide a plugin that helps you mock. And at the end of the day, if you're serious about it, you have a QA team, and they're on each of the platforms that are important to you.

I don't think the reality on the ground ever says that it's just okay to do automated testing. Without users giving you feedback on what you thought was a thing that was working is really important, especially because the guys and girls and folks and people writing the code - sure, they can write the tests, but they can't quality assure. You just always have these blind spots. I know I'm kind of going off on a tangent, and I'm not trying to avoid the question... The answer is --

**Jerod Santo:** Well, you answered the question, I think, as well as you can.

**Daniel Thompson:** You test in Rust, just like you test in JavaScript. You write your units, and you mock what you have to, and you build integration tests, and you do QA. Normal software engineering, I guess.

**Jerod Santo:** And is there any Tauri specific debugging stuff? Or is it just, again, the same answer, like "Well, how do you debug in Rust? How do you debug in JavaScript?"

**Daniel Thompson:** You know, there's a really amazing learning tool for Rust called Rustlings. If you haven't heard of it, go to GitHub, track it down, clone it, run it in your IDE... And the way Rustlings works is it gives you chapters of broken code. And the Rust compiler - say what you will about Rust mutability, about borrowing, about streams, about the complexity of the deep magic involved in unsafe code... What it does have that I wish I'd discovered somewhere a decade ago is a compiler that really tries really hard to help you. If it finds a mistake, it'll be like "Well, you've got a mistake here. You can't cast this to that." And it shows you with like an explainer text that you can call up and read about -- so the compiler helps you, and what I've found hard at the beginning of Rust was overcoming my \[unintelligible 01:15:01.28\] of how mutability worked. And I didn't have it at the time. Now what I really enjoy is finding out new parts of Rust that I didn't know existed before.

So the compiler is your friend. That's what people do for debugging. And in the near future, soon, trademark, whatever, we are building static analysis tools to help users, developers, for applications, discover where they can improve. We have this notion of an accept list. And the Accept list basically in the configuration file tells the Tauri bundler which parts of the rust API it should embed in the application. And if you don't know what you're doing, it's easy to just accept list the entire API, which makes your app about 1.5 megabytes bigger, because it's just extra stuff that you don't know you need, because it's very granular.

\[01:16:07.02\] And what we're looking forward to doing is introspecting in the code to find ways for you to improve your security, but also your footprint. And I know it's not exactly the same as debugging, but from the perspective of wanting to help people ship better software, these assumptions of its real estate are things that I think are a bug.

**Jerod Santo:** So the sense that I'm getting - and I want you to like true or false this, or tell me if my sense is off... It sounds like at this point the promise is somewhat like "You don't have to write any Rust", but the reality is kind of like "Yeah, you're probably gonna be writing a lot of Rust." Is that wrong, or is that on? Just for expectation setting.

**Daniel Thompson:** You do not have to write any Rust code. Absolutely. You don't. If everything is web-driven, web interface driven, and you're comfortable with the APIs that we offer you, you don't have to write any Rust. If you want to integrate a shiny library from the Rust ecosystem, or write your own for perfect random number generation or something, then you have to learn a little bit of Rust. And I think - and this is something we were actually talking about in the working group today... It's not just me. We think that because you don't need to write Rust from the beginning, you can make your entire app this way, just by using the APIs that you consume, and writing a configuration file in JSON... It lowers the barrier to entry because you can say you have now built a Rust-based application. And just being able to say this is kind of one of those visualization techniques of getting better at things; understanding that yes, you are capable of doing it. And the fact is, people get interested by it.

Over the three years we've been working on this project, a couple people have very visibly improved in their Rust. At the beginning they were like "This is hard." Everything is hard if you've never done it before, and having Tauri as a gateway to understanding "Well, okay, I need a compiler. Why do I need a compiler? Well, having a compiler is good, because it makes my app small." Great. So you get that out of the way. And then you discover that, "Oh, maybe there's this special constant fixture that you want to make", and you follow the instructions, and you write a couple lines of Rust, and the compiler is like "Oh, you did it wrong" and you're like "Oh, okay, what did I do wrong? Oh, that's what I did wrong" and you figure it out, and suddenly, you've written a couple lines of Rust.

So I see Tauri and projects like Tauri that offer an easy access to a complicated language paradigm as a definite win, not only for people who want to learn Rust, but also for those advanced projects that absolutely need Rust engineers. Suddenly, we're able to provide a marketplace for Rust engineers to go out and get jobs. Okay, maybe not suddenly; it might take a few months. We just got the 1.0. But I think that it's definitely a way forward. It's a way to grow as an engineer.

**Adam Stacoviak:** You mentioned before, teased, I should say, other platforms. What's the state of WASM as it is to Tauri? What's the future? Coming soon on the homepage, so...

**Daniel Thompson:** WASM and WASI are ultra-exciting. The concern I generally have with WASM in the browser has to do with the linear memory space out of WASM, and the fact that up until now, as far as I know, it still exists in the global scope. So any kind of security isolation that you thought you had, you don't really have.

\[01:20:15.28\] Where we're going to be going with WASM, first and foremost, is providing a WASM(ish) interface for WASM projects to interact with. One of them that's kind of common, or you might have heard of, is called UYEW. Another one is Dominator. And these are basically projects that are Rust-native, which means you write your entire user interface in Rust, and that gets rendered out to WASM. And the problem that those projects have right now is that it's very difficult for them to interact with the JavaScript API from WASM. So that's actually the very first step down that road.

And we have always wanted to branch out into other languages. And what I mean by that is yes, the core is written in Rust. We plan and want to continue offering further interfaces to Tauri. In one of our examples on the main repo we have \[unintelligible 01:21:26.23\] that allows you to harness Tauri Core from C. And where I think that's going to be able to go in the not so distant future is offering the same type of interface to a WASI environment.

So I guess the thing to think about is what is the target of the WASM blob, right? If it's going to be targeting the browser, the browser has a much different permission scope than a Tauri app does, by nature. So rendering a Tauri app as well as WASM might make sense in some circumstances, such as you maybe want to make a SPA, or a website from the same app. But at that point, I think we're still in the discussion phase about how much sense that makes. I mean, if you think about it, you're building a web app using web tech, such as Vue or Svelte, and then you're putting that into a Tauri app that you want to then turn into WASM, so you can put back in the browser. Why not just cut Tauri out entirely?

So for us the interesting sides of WASM are the use cases for the pure WASM community, and also looking forward to the WASI approaches that allow you to just run anywhere, in any context.

**Jerod Santo:** What's the best place or way to become part of the Tauri community? Is there a place y'all hang? Is there a forum, or a Discord, or a Slack HQ?

**Daniel Thompson:** There is an Electron app known as Discord that you can download; you can also put it on your phone. I think it's a capacitor app.

**Jerod Santo:** There's no Tauri app for this?

**Daniel Thompson:** ...and that's where you can come and get involved in the research behind Tauri core, and plugins, and get involved that way. You can also come and ask questions in one of the other channels about problems you might have... And if you like it, and you stick around, and maybe you file some pull requests and file some issues and start getting involved in the actual making of Tauri, chances are good that one of the people in the working group might reach out to you and be like "Hey, you're pretty awesome. Do you want to get more involved?" And that's our flat hierarchy.

\[01:24:17.21\] Basically, the way that works is we have a core team of a number of people who are the wardens, the gardeners of the project; make sure that when we cut a release, it has to be done by one of them. But by joining the working group, you would then get GitHub repo access to all the public repos, and you can work on a branch instead of a fork, which believe it or not improves security... And you can participate in the strategic discussions, and the WTF channels, and hangouts, and work together. We're super-open. If you get involved, you're part of the working group, and we want to know about it and bring you on board. I think that that low barrier to access is also a reason why we have such an amazing group of dedicated people who spend weekends and afternoons telling people how to do things, and at the same time building great stuff.

**Adam Stacoviak:** So if our listeners are listening to this and they're getting excited about the future of where this is going, what can you share about the organization? You mentioned before venture capital, maybe there's a company, maybe there's some things happening... And if they're going to invest in their time and building something, they want to build a strong foundation. So describe the direction of what you're doing and how the organization is forming; not so much if there's venture capital or not, but like what's happening company-wise to keep the core team involved, keep people around, keep the project and the idea sustainable.

**Daniel Thompson:** So we have a board of directors that get together to make strategic decisions about things "Do we get a trademark? How do we deal with managing the community? What about the book? How does that deal gonna work? Who gets how much finance?" Then we have the core team, which is, like I said, a number of people who have massively contributed to the project and are involved in the day to day decision-making. And then we have another volunteer group called the working group. Basically, the way that our organization makes decisions is by consensus. So if there's a veto, then we talk it out. If there's not a veto, then we discuss the best way forward.

For example, right now, we're having a multi-day discussion about our future release strategy. Now that we've gotten 1.0 behind us, how do we do deal with new features? How are we going to integrate the auditors? Do we call something a beta or an RC,? How often are we going to release a major? The reason why we even got audited in the first place is because we're going to continuously be audited. And I think that if someone is getting interested in Tauri right now, it's a great time to find out what we've built, and know that the stuff that we've built up until now has been proven to be as secure as possible, and is backed by a team of people who really deeply care about the project.

\[01:28:01.27\] We have been accepting donations over at Open Collective, and some organizations find the project useful and make regular donations, others are personal donors... And we use this money for things that are project-relevant, like paying for the audit, or the trademark, or for deciding on -- no, we didn't ever do travel costs; we've kept it lean. But that budget has also been really small.

And so in the discussions around forming a company, what we've realized is that, sure, up until now, for the past three years, it's been working really, really well on the backs of volunteers, which is almost the same as the instrumentalisation of the precariat, where people have time on weekends and evenings, and sacrifice social time in the real world, and then maybe they get new jobs, or they have to move, and they just don't focus anymore... And our documentation needs lots and lots of attention, and how do you manage a documentation project of that scope just with volunteers... So we've really come to the conclusion that in order for us to continue sustaining the community, we need to find the means by which we can employ members of the core team, we can employ members from the community and people who are interested in getting involved in Tauri. And that's the delicate balance of "How do you create a common good, while still participating in a capital market?" It's a really intriguing concept to even think about, because when you say "The value of our company isn't in what we're doing, it's in what other people are doing with us" - it's hard for financial people to really wrap their head around and grok and be like "Yeah, that makes sense, man..."

At the same time, if we don't continue getting donations for paying for one or two full-time roles, if that money were to dry up, people would have to start looking for other jobs, and the evolution of the project would stall. So in order to continue providing that common good, and doing it in the right way, is going to be a very delicate dance. But if you've been listening, you'll remember that not even the core team can change the license of the code. There is no rug pull possible here, because we put the code at such a privileged, central point of the project, that the only things that we could even really consider offering are things that are built around Tauri. There's no way for us to open-core it, there's no way for us to even legally gut it. It's owned by a foundation in Holland called the Commons Conservancy.

\[01:31:53.21\] So it's challenging to talk about, and I know that there are amazing open source projects out there that have succeeded, and we're taking inspiration from them... But at the same time, the promise that we made to ourselves when we made an open source project is that it stays open source; we're not going to weaponize it because we don't believe in your war. We're not going to, delete the code from npm because we don't believe in your police. I think that the greatest satisfaction that you can have as an open source software engineer is that somebody is using your code and enjoying it and contributing back. And that contribution back can simply be by building an app using it. Filing issues, filing pull requests, making donations - that's all really great, but the mere fact that it's being used is why open source exists. Now, we can get into the morality of what it means to be an honorable human being and a gentle person who cares for their environment and their fellow beings. We can talk about that. But that's why you have other instruments. That's why you have a community. You can take people out of your community if you don't like them, but open source - it's become more than a license, but at the end of the day, that's what it really is. So we have an agreement with the community and with each other that this project is open source, and it's staying open source.

Those are the arguments that I would bring to the table - that it's a stable core, it's been audited, and it is and will always be open source, and we're working really hard on finding an honorable way to support the engineers involved in building it.

**Adam Stacoviak:** Well, you've really thought through a lot of stuff here, you've got a great community behind, you've got great ideals in place in terms of how you're running the project, so this is all good things to build a foundation for this project, so I appreciate you sharing your time today. It's been awesome.
