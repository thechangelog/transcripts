**Divya:** Hello, hello, and welcome to a new episode of JS Party. Today we have a wonderful guest, Ben Ilegbodu, but before I introduce him, I'd like to introduce the panel that we have with us. We have Amal...

**Amal Hussein:** Hello, everybody.

**Divya:** And we also have Suz!

**Suz Hinton:** Hello, how's it going?!

**Amal Hussein:** Did your accent just change? You said Suz in like an Aussie accent. Did you realize that? \[laughter\]

**Ben Ilegbodu:** That's awesome.

**Amal Hussein:** She's like "And with us, we have Suz!" I was like, "Okay... Hi, Suz."

**Divya:** Okay, yeah. You caught me.

**Amal Hussein:** I thought that was cute.

**Divya:** I don't know, sometimes I say things in weird voices. I don't know if you have this. I wanna introduce Ben before I jump into other things... \[laughter\]

**Ben Ilegbodu:** We're like 30 seconds in and it's already off the rails...

**Amal Hussein:** Yeah... Sorry. It's JS Party.

**Divya:** I grew up in a culture with different people from different backgrounds, so I code-switch a lot.

**Suz Hinton:** I do the same thing...

**Amal Hussein:** Same here, same here.

**Suz Hinton:** ...because I grew up in the Oceania.

**Divya:** Yeah... So my English now is actually not the English I speak at home. Anyway... And with us today we have Ben Ilegbodu! What's up, Ben?

**Ben Ilegbodu:** Hello, everyone. Hi all. Thank you for having me. Glad to be here.

**Divya:** Yeah, we're psyched! Before we dive in - well, we already sort of did, but...

**Ben Ilegbodu:** Yeah, we did... \[laughter\]

**Amal Hussein:** We dove deep, yeah...

**Divya:** Yeah, we started very deep... Would you care to introduce yourself just a little, so people know who you are and what you do?

**Ben Ilegbodu:** Sure, yeah. Like you said, Ben Ilegbodu. I am a principal frontend engineer at Stitch Fix. Most of you have probably heard of Stitch Fix, hopefully have used Stitch Fix, but for those who haven't heard about us yet, we're an online right now focusing on clothing service; we combine engineering, and algorithms, and a human stylist, put them together to get you great clothes at a timing of your choosing, so hopefully we can make you more stylish over time, is the plan... And you not have to spend time clicking around on a site, trying to find something that fits.

\[00:04:12.19\] So that's Stitch Fix... I'm a frontend engineer there, so I focused on our platform team; so not our features, but actually making the other developers awesome, and the features that they build awesome... Working on our design system, which is in TypeScript - we'll be talking about that more - and React, and then also focusing on kind of the backend of the frontend, or frontend dev ops, a.k.a. div ops, as I like it...

**Amal Hussein:** Oh, nice...

**Ben Ilegbodu:** Not Divya ops, but div ops... \[laughter\]

**Amal Hussein:** Yeah, new term. I like this, div ops...

**Ben Ilegbodu:** Yeah, a friend of mine coined it, and I've just been trying to broadcast it everywhere.

**Amal Hussein:** Yeah, yeah... Making fetch happen.

**Ben Ilegbodu:** So that's your Babels, your WebPacks, your ESLink configs, all that kind of stuff to make your site work - focusing on that as well.

**Divya:** That's awesome. I think we can just dive straight into it, because you talked a little bit about React and TypeScript, but I think what would be useful is we're gonna start just talking about TypeScript, and then from there we can move to how it adapts to React... But for the first segment, I think we just wanna talk about the TypeScript ecosystem, because we know you've been working a lot with TypeScript... And this is obviously a very loaded question, but what do you think from your perspective is the biggest benefit to using TypeScript in a project?

**Ben Ilegbodu:** I think the biggest benefit is communication. You no longer have to go and look at some code and figure out "Oh, what's the shape of this object that it takes?" or "Does it take a number AND a string, or just a number?" Or "Does it take three parameters or two parameters?" All those things that you have to figure out, TypeScript will enforce and let you know those kinds of details. So that's half of it, and the other half is just preventing bugs. So like "Oh, this thing can be undefined in a certain case, but I know what I'm doing, so I'm sure it's always gonna be defined..." But you know, that's not always the case. Our Bugsnag or Sentry reports tell us otherwise... So it helps with those sorts of situations to make sure you do your proper checks, and things like that. So it's both the typing, as well as the catching of our code.

**Suz Hinton:** Has Stitch Fix always used TypeScript, or is this something that was introduced a little bit later? Because I know that Stitch Fix is not a super-old company, so it's possible that that's how it started.

**Ben Ilegbodu:** Yeah. So I basically came and was like "TypeScript!"

**Suz Hinton:** It was you...? \[laughter\]

**Ben Ilegbodu:** Folks are like "We don't use TypeScript here", and I was like "Well, let's just see what it'd look like." So I did I guess a prototype or proof of concept in our React component library. I said "If we ever move to TypeScript in React, we're gonna want that component library to be in TypeScript, because that'll be super-helpful. So let me try it in there and see how it works." And slowly but surely, people have seen the benefits. I did a whole workshop in it as well, to kind of open people's eyes to what it could be... So yeah, that was the process.

**Amal Hussein:** That's really cool. So was it easy for you to slowly adapt TypeScript throughout your JavaScript codebase? Were you able to do it incrementally?

**Ben Ilegbodu:** Yeah, it's been incremental. So I did it from scratch in the component library. So I was building the component library from scratch. That was nice. I did the workshop, people were excited, and then a team decided to do it in one of their features... So they kind of all mob-programmed on a PR, and each one of them had to change a file over to TypeScript, so they could all feel comfortable doing it in that PR. Then they merged that PR, and now as they go through other files, they convert over to TypeScript. So it's been incremental. I never suggest whole rewrites, because that's not beneficial to anyone, really.

**Amal Hussein:** \[00:08:14.24\] That's throw out the baby with the bathwater, right?

**Ben Ilegbodu:** Yeah...

**Amal Hussein:** No, that's such a great strategy. I love that you all were collaborative, and everyone made that mental model shift... Like, "So here's something you know... Take something you know, and now write it in this other language." So the delta is the language, and you're learning all the things along the way... That's a really great strategy. I think the folks at Airbnb recently open-sourced ts-migrate as well, which we'll link in the show notes...

**Ben Ilegbodu:** Sweet.

**Amal Hussein:** Yeah. Ts-migrate takes your JavaScript codebase using ASTs, and just kind of makes it functional TypeScript. I haven't looked into how readable or what the bugs are, what the deltas are, but from my understanding, they were able to use it pretty effectively inside of Airbnb...

**Ben Ilegbodu:** Nice.

**Divya:** Nice.

**Amal Hussein:** ...and they're pretty big on code quality there, so...

**Ben Ilegbodu:** Yeah.

**Suz Hinton:** That's interesting.

**Amal Hussein:** Yeah, it is super-interesting. Ts-migrate on GitHub. I guess before we maybe jump into the TypeScript love train, I wanna talk a little bit about some of the controversial things...

**Ben Ilegbodu:** Okay... Just get them out early?

**Amal Hussein:** Yeah, get them out early... So TypeScript is definitely -- I would see it as a superset of JavaScript at this point. Everything in JavaScript should work in TypeScript. Everything in TypeScript obviously doesn't work in JavaScript; different compiler. But they kind of did go off the rails initially; there were features in TypeScript that really never made it into JavaScript, and there's some non-JavaScripty things... And now I think they've committed to staying with ECMA, which is great, but they kind of left those other things in... So it just kind of creates this murky kind of language for me. Do you have thoughts on that? And if that's been challenging for you...

**Ben Ilegbodu:** So the flipside is that the majority of the stuff they did come up with actually made it into ECMA... So classes, and things like that. They were really pushing the needle, in some respects... But yeah, there are things like enumerations, and interfaces especially, which are really core to TypeScript, which - I don't know what the plan is, if that's ever gonna be in JavaScript, but... I think it works out okay.

There is a confusion though, because especially with interfaces versus types, you can define an object in two different ways - with an interface or with a type. And even in their docs, it's really confusing as to what's the difference between one or the other... And whenever I talk about TypeScript, that's always the first question, like "Should I use an interface, or should I use a type? What's the difference between the two of them?" and I'm like "Hm... Maybe 95% of the time there's no difference." So it's already like a confusion right in the beginning...

**Amal Hussein:** Yeah. For me, this is exactly why standards bodies exist. Things take a long time, because they're well-thought, and they think about the present, the back-compat, and the future story... And so when you have a bunch of folks going off on their own, and "We're gonna make a thing" - sometimes you're solving solved problems, and you're potentially creating weirdness in the language. So language design is its own art, and there are people in the TC39 committee that specialize in language design, that aren't implementers or web developers. I like to call them language nerds, but Jordan Harband likes to use the word "language aficionados", which is maybe more...

**Ben Ilegbodu:** It has a positive spin on it.

**Amal Hussein:** Right, right. So yeah, I'll get off my train now, but -- or not my train; what do you call those things? Stepladder, or--

**Suz Hinton:** Soapbox?

**Amal Hussein:** My soapbox. I'll get off of it, yeah. Thank you.

**Divya:** \[00:12:06.20\] I think it's a really interesting point, because having worked on TypeScript projects with non-JavaScript developers, it's interesting to see the assumptions that you know from JavaScript, and then other languages, too. If you write another language, like C, you would use an interface for things, and then a JavaScript person might use types instead... Because interfaces is not common to the language. So it's really interesting, having worked in a codebase with more like systems-level programmers writing TypeScript - they write TypeScript at a totally, completely different level than a JavaScript engineer... Because I'm like "I think I know TypeScript", and then I'll work with like a systems person on a TypeScript project, and I'll be like "I have no idea what you're writing..." Because they would do various bindings...

**Amal Hussein:** Do they create their own custom types?

**Divya:** They would do bindings... For example, one of the libraries we're using is `capnp` which is like the protobuffer library for C... And then there's like a way in which you can take that and produce TypeScript types from it using a particular CLI command in order for you to use those libraries in a Java-- so it's like going one step further. So it's not just like typing your JavaScript, but allowing for interop with other languages, which I think is really interesting.

**Ben Ilegbodu:** Interesting.

**Divya:** It's like a very advanced use case.

**Amal Hussein:** Oh my God, that sounds like Kotlin, for the folks who write mobile -- Kotlin has this interesting interop story with Java, where you have Java code next to Kotlin code, and I'm like "What is this black magic?!" But that's compilers. That's like the compilers doing all of that context management.

**Ben Ilegbodu:** What I've also found is that TypeScript makes JavaScript approachable to people who write Java, C\#, and stuff like that... \[laughter\]

**Suz Hinton:** That's very true.

**Divya:** That's true.

**Ben Ilegbodu:** They're like "Oh... I see types, interfaces, classes... Oh yes, I know what to do with this."

**Suz Hinton:** I experienced that at Microsoft as well, watching people be able to move over to it from C\#... But they would still write it in a very C\# way, going back to what we were talking about... So there would be this onion skin of implementations, and I was like "Yup, this is definitely a C\# developer who wrote this."

**Amal Hussein:** Yeah. You can now over-engineer in JavaScript syntax...

**Divya:** Oh, yeah.

**Amal Hussein:** You know, I've been watching TypeScript from a distance, because I've only recently had to learn it because of work, and I literally was avoiding learning it... Because it just didn't speak to my nerd heart. I was too much of a grandma about it. \[laughter\] I understand the benefits now, I see the benefit, but there's still a separation of concerns here which I think the community needs to be clear on, which is that TypeScript is really good at type-checking, and I still don't think we should be using TypeScript to transpile. I think you should be using the @babel/types plugin to transpile, so that you have a separation of concerns... And you only use TypeScript for type checking.

**Ben Ilegbodu:** That's what I use.

**Amal Hussein:** Yeah, and it lets you do a lot of cool stuff with performance, too. I've had to do that recently... You can parallelize tasks, and especially for tests, and builds... You can do things in a cleaner, more parallelizable way, because you have a clear separation of concerns... But I get it, TypeScript makes JavaScript a much more approachable language for people coming in from other communities, and for me that's like a saving grace, because I think JavaScript's now been saved from the, like, only the compile target world. People still have to learn JavaScript to write TypeScript...

**Ben Ilegbodu:** Yeah.

**Divya:** \[00:15:45.04\] It's actually really interesting... I'm sort of similar, in that I've been watching TypeScript and having used it until maybe a year or so ago... And for me, writing TypeScript or understanding TypeScript required me learning a different language, and then coming back. I had to go learn a typed language like Go, and then come back and understand how it works... Because having worked in JavaScript, in vanilla and frameworks for a while, you sort of have assumptions on how things are written... So when you're for example faced with an interface, you're like "I don't understand how this works", so why I would use it, in what instances... And so when you work with a programming language where that's common, you sort of see use cases in which it's used. And for me, learning TypeScript - I've actually watched videos... Frontend Masters does a bunch of videos on TypeScript, and Egghead, and so on... I've watched those videos, trying to be like "Okay, you're gonna learn TypeScript", and I never understand it.

**Ben Ilegbodu:** Interesting.

**Divya:** It's a good community, but the docs are not very good. I find them very confusing in general... So for me, the journey of learning it required me going away and then coming back, which I don't know how common that is, but that's been really useful for me, because now when I write TypeScript, I'm like "Oh, okay, this is what I would do in Go", and now I understand how it applies in this particular use case.

**Ben Ilegbodu:** Well, the docs are written for somebody with just your experience; somebody who knows JavaScript, but who's also learned another typed language before. So there's all these analogies for them, like "Oh, when you do it this way, it's like THIS now in TypeScript." So you had to have known the previous typed way before to apply it... And I find that to be challenging in the docs as well.

I've had that background, so I understand it, but I can put myself in plenty of people's shoes where it's like "How would you understand what a generic is based upon how this is explained, if you hadn't used Java generics or C\# generics before?"

**Divya:** Yeah. It's the same with function overloading. I did not, for the life of me, understand it. I was like "Why would I need this?"

**Ben Ilegbodu:** Yup, yup.

**Divya:** And then it took me going somewhere else and being like "Okay, this is a use case in which you use function overloading..." And I still don't use it often. I don't reach for it, because there's no such thing in JavaScript.

**Ben Ilegbodu:** Yeah.

**Amal Hussein:** Yeah, there's certainly a level of also server code... For me, I feel like there's just so many patterns that are more common in server code, and now that we have TypeScript, and Node, you can kind of supercharge your Node apps, I think, to just do things in a cleaner way, using a JavaScript-like syntax... But I think that's why you're like "I don't reach for it." I think Python is really good at data management, because it has a bunch of really cool functions that let you do things in a streamlined way... And I think the same thing here - I think TypeScript is super-charging Node, from what I've seen so far from the teams that have adopted it on their backends. There's some really good patterns that you're able to actually do, so that's a plus.

**Suz Hinton:** Ben, how did you handle this education at Stitch Fix, when it came to people having to get over that hump? You mentioned that you got people to just rewrite the files they were familiar with in TypeScript, but were there struggles with people who had only ever written JavaScript and needed to learn all of these new typed terms?

**Ben Ilegbodu:** Yeah, so I mentioned in passing that I did a workshop... So everybody kind of had experience with React, frontend engineers were writing React code, or whatever... So I was like "Well, this is how we do things in TypeScript and React." So it was really a -- it was obviously educational, but also a sales pitch as well. It was like "This is how you do props in TypeScript, and you use interfaces... And these are all the different benefits you get, versus the struggles we have with React PropTypes. So you have to define your props, you can't just use them in your code; you can't pass in additional props if they're not defined. They have to be the right types. You can to define the structure of objects that you're passing in." All these different things that are kind of loosey-goosey with React PropTypes, you have to do with TypeScript... So there's lots of benefits there. And then kind of slowly introducing common patterns you do in React - this is how you do it in TypeScript.

\[00:20:12.19\] So it wasn't like a "Here's TypeScript. Oh, by the way, this is how you do it in React." It's like the reverse, to enable using TypeScript in an applied way. There was something else though, Amal, if I can jump in, that you said... Or continue, I guess.

**Amal Hussein:** Yeah, go for it.

**Ben Ilegbodu:** Jump in on myself...

**Amal Hussein:** Yeah, go for it.

**Ben Ilegbodu:** You mentioned Babel... And I think the Babel plugin or preset for TypeScript is what really helped TypeScript to take off in the JavaScript community... Because you had all these folks who were for better or worse invested in Babel, with all your plugins - your React plugin, your Babel Env plugin for getting stage three presets, or whatever the case may be... And if you wanted TypeScript, all of a sudden you had to throw all that stuff away and start using the TypeScript compiler to transpile your code, as well as type-check. Well, once they added that plugin, now you could use TypeScript in Babel, in your own ecosystem; just add in the plugin, and everything else is the same. And then you use the TypeScript compiler for actually type-checking. I think that was super-helpful for adoption in the community, and that's the approach I tell people to use. Babel is just a better transpiler, in my opinion.

**Amal Hussein:** It is, because that's what it's good for. That's what it's designed to do well. And with the Unix philosophy of "Do one thing well..." Let's use TypeScript's compiler for type checking - which is its responsibility, not like managing all the JavaScript idiosyncrasies across browsers, you know what I mean?

**Ben Ilegbodu:** Exactly.

**Amal Hussein:** And I can't say the word "idiosyncronacies", I think... I don't know. Well, I'll stop now.

**Break:** \[00:21:59.08\]

**Amal Hussein:** So Ben...

**Ben Ilegbodu:** Yes.

**Amal Hussein:** Yeah, Babel, TypeScript - it's the magic of the open source ecosystem that lets this cool synergy of improvements incrementally happen at an enormous scale. It's amazing how the Npm ecosystem has changed our worlds as engineers... Writing JavaScript, to be specific. But I'm curious - you have millions of packages written in JavaScript.

**Ben Ilegbodu:** I don't, but the community does. \[laughter\]

**Amal Hussein:** You, the royal you. Or the royal we.

**Ben Ilegbodu:** Yes, the community.

**Amal Hussein:** Yeah, We... Yeah.

**Ben Ilegbodu:** Something.

**Amal Hussein:** Something. So we have all these millions of packages written in JavaScript. Some of them ain't nobody gonna update. They've solved their problem, and it's widely adopted and used. We're not touching it. Redux is a good example of that, for example. But what happens when I have to use these packages in my TypeScript application, and there's no types, and the compiler barks... Can you talk to us about that journey, and how the community has kind of solved that problem?

**Ben Ilegbodu:** \[00:24:22.05\] Yeah. Just taking a step back, in order to use TypeScript in a strict mode, all of your dependencies have to be typed as well. That's how you know that when you call this function that you imported, that it takes a string and gives you back a number, for instance. So if that package isn't written in TypeScript, or doesn't at least contribute TypeScript definitions itself, the best alternative is to look at this repo called DefinitelyTyped. DefinitelyTyped is a repository of types for all of these public or popular packages; there's probably some unpopular ones in there too, but... Popular packages that don't have types. React is in there; I use that a lot. Even the Node API and such are in there. Basically, any package you want hopefully should be in there. So you import... If you're using React, you would also import @types/react, so to use the types scope. And then, when you import from React in your code, then it will look inside the Types package to get the types... If that made sense.

So that's how those two go together - TypeScript knows to look in that package if there are no definition files defined for it.

**Suz Hinton:** We had an interesting experience with that at Stripe, when our Node.js client library didn't have types out of the box. The community volunteered to do that. And then when we released types finally, which was February this year, something like that - first quarter of this year - we were really excited to announce it, but then the problem is that you'd have this overlap thing where if somebody is already committed to using the community supported types, they don't know necessarily that the new version of our library actually has the types in it... So we had to do a lot fo communicating, we have an email newsletter and we sort of tried to get that message out... But I would still talk to developers and just casually mention our types and say "How are you enjoying them?" and they'll say "Oh, we didn't even know." The community types didn't always stay up to date with the SDK, and things like that, so it was pretty problematic...

**Ben Ilegbodu:** Well, I don't know how this is done, but I've seen some packages where -- or maybe that's what they do. So the @types package -- yours would be @types/stripe, let's say. Or I don't know what the actual name is. What they would do is they would have a message in the package when you install it, that says "Well, the real package has type definitions now, so this package doesn't do anything anymore. You don't need this types package anymore." So maybe that's something that the community can do, is update that one to say it's a no-op, you don't need this anymore, and then now everything can come from the main one.

**Amal Hussein:** Yeah. To me it sounds like we need two things here. We need a deprecation model for the community types, but one that has some notion of understanding at what point in the version is this deprecated... Like, if you're using an older version of Stripe's SDK, you still need this. And I think in order to communicate that back, I think it would be great for packages to maybe -- maybe we need a key in the package.json that's using types. And if the package is using types, then the community @types deprecation model would pick it, and would say "If you're using this version..." I don't know.

**Ben Ilegbodu:** So there is a key...

**Amal Hussein:** There's a way to do this, is what I'm trying to say. We just need a standard.

**Ben Ilegbodu:** \[00:28:06.08\] There's a key in your package that says you're using types, because you point to your types in the package.json of your package... But the problem is that community types doing that association, that deprecation model - that doesn't exist.

**Amal Hussein:** Yeah. I can open an issue for this though. I think it's worth opening an issue and discussing this.

**Ben Ilegbodu:** You have the power... \[laughter\]

**Amal Hussein:** Do you know why I have the power though? I think this is worth noting... The DefinitelyTyped repo is super-open governance. Our team at Indigo - we just added idle to mapbox, because we started using that, and we updated the types. They have this very open pull request workflow... It's pretty great. We'll link it in the show notes. There's a lot of robots involved, let's put it that way...

**Ben Ilegbodu:** Nice.

**Amal Hussein:** ...in managing PRs and changes and releases. It's really cool.

**Ben Ilegbodu:** Okay.

**Divya:** Cool.

**Ben Ilegbodu:** Yeah. I had this whole talk about creating the perfect package repo... And what I suggest is if you are going to provide TypeScript types, that you write your library in TypeScript. Because the worst is writing your library in JavaScript and then trying to type it correctly with TypeScript. Like Suz was saying, there's gonna be this incompatibility. You'll make mistakes, and the worst thing is having bad TypeScript types for your package. I'd rather you have none than have bad ones.

**Amal Hussein:** Yeah.

**Ben Ilegbodu:** It's just easier if it's written in TypeScript and they get auto-generated, and everything's good.

**Amal Hussein:** Yeah, I know, but I don't know if it's fair to force TypeScript on people though... Let's be honest. This is where I get upset about TypeScript, because I feel like we have created some additional burden for maintainers. If you look at the most popular packages in the JavaScript ecosystem, a lot of them are written in ES3 just so maintainers don't have to worry about the back-compat issues with using arrow functions. It's one less thing for them to maintain. And folks like Jordan, he's very lean about what fancy new JavaScript features he's gonna use. He's intentionally restrictive, so that he has less to maintain, and doesn't have to transpile, and add a bunch of tooling into it, like a library.

I feel like TypeScript is great for applications, great for some packages if you're okay with having a compiler and all that jazz... But it's the expectation on the community's part that I think sometimes can be burdensome for maintainers.

**Ben Ilegbodu:** That's my point. I'm saying it's either you write your package in TypeScript - that's my preference - or you don't provide TypeScript definitions at all, and you let the community create the types in DefinitelyTyped. If you have a package written in JavaScript ES3 or whatever, also trying to provide TypeScript definitions, usually that person is not that great at TypeScript; that's why they didn't write it in TypeScript. And writing type definitions is actually pretty difficult. You actually have to know some TypeScript, especially if your code is very JavaScripty; then you end up having broken types.

**Suz Hinton:** I attempted this with an old library of mine, just because I wanted it to be cool... \[laughter\] And I had no idea if anyone would even try to use it. But also, it was a good opportunity for me to learn TypeScript beyond just writing it, and what would it be like to retrofit a types file that you manually produce.

I've found it a really interesting exercise, but at the same time I was so scared that there would be something subtle that I messed up, that I ended up not merging it... So I definitely relate to what you're saying there. And I'm assuming that because none of my libraries are actually popular, because they're incredibly niche, I'm assuming no one's put anything in DefinitelyTyped for that specific hardware library...

**Ben Ilegbodu:** You should check. It may be. You never know.

**Suz Hinton:** It may be... I mean, it starts with A, so I don't have to scroll too much down the list when I'm doing my GitHub tree search...

**Amal Hussein:** \[00:32:19.08\] Are you kidding me? Are we talking about avrgirl?

**Suz Hinton:** Yeah.

**Amal Hussein:** That's such a popular library, what are you talking about, Suz? You're humble-bragging now.

**Suz Hinton:** It's "popular", as in, you know...

**Amal Hussein:** Well, it's popular within a subset of the community, and that's cool. You have your people.

**Suz Hinton:** \[laughs\] I appreciate it.

**Amal Hussein:** You're welcome.

**Suz Hinton:** It was a very interesting exercise just because of all the interfaces and everything in that library... Because I definitely tried to kind of rewrite it at some point in TypeScript, just because it can benefit from -- it has so many different ways to express the microchip that you're trying to flash that the interfaces would actually be very helpful for catching subtle problems.

**Amal Hussein:** Yeah. Actually, Divya, can we take a very minor segue to Suz?

**Divya:** Yeah, yeah.

**Amal Hussein:** Suz, can you tell the community about that one time you revolutionized how bug reporting works, or should work for avrgirl? \[laughter\] I know the back-story here, and I think people should hear it, because it's kind of amazing.

**Ben Ilegbodu:** Let's hear it.

**Suz Hinton:** I need to make sure that service is still up and running. I've put it in Azure a long time ago, and now I have to check on it...

**Amal Hussein:** It's okay, it's fine.

**Suz Hinton:** So avrgirl is usable on the command line... So I didn't usually get very good quality bug reports, and it was really hard to get reports that weren't necessarily bugs either, just to see "Did it work with this microchip? Did the library also work on this operating system? What was the error message, if there was one?" So I ended up making just a secret, hidden command - not so hidden, but just not really functional for you to get your work done, that it was called testpilot. So if you ran the command line avrgirl and then testpilot, it would basically pop up a browser, ask you to authenticate with your GitHub account, and then you could run a bunch of diagnostic tests.

So you would plug in an Arduino, tell it what type of Arduino it was, and then basically there was a backend Node process that could sniff out what operating system you were on, what version of avrgirl you were using, and what version of Node.js you were using. So it would try to kind of do a bunch of stuff with the chip, and then generate a report, and you could anonymize it if you wanted to; I just mostly use GitHub to avoid spam more than anything... And then it would basically go into a database and email me when I had a fresh report.

That actually did help me smoke out a lot of bugs with this system, and I ended up with basically -- you can create GitHub issue templates, but not everybody fills them out...

**Ben Ilegbodu:** Nope.

**Suz Hinton:** ...whereas this was a very terse and in a database, so I could perform more kinds of analytics on what's the most popular operating system that people are using testpilot with, and what's the most common error that's coming out of it, and things like that, which was really helpful. So I'm assuming that types would help me probably avoid some of those errors, but we would see.

**Amal Hussein:** Yeah, that's amazing. But you'd actually be able to know that, because you can tell what version they're using, and when you introduce types, did the bug reports go down...

**Suz Hinton:** Totally, yeah.

**Amal Hussein:** That's so cool. And then you also have this community badging thing; people who reported a bug got a badge...

**Suz Hinton:** Oh, yeah.

**Amal Hussein:** You should use the social credit of "Get our badges to--"

**Suz Hinton:** It was so over-engineered...

**Ben Ilegbodu:** Gamification...

**Amal Hussein:** I thought it was really cool, and I just wanted to say I thought it was super-revolutionary. And you're freaking amazing, so...

**Suz Hinton:** Thank you.

**Amal Hussein:** That's cool. You should tell that story more often. It's a good story to tell.

**Suz Hinton:** I appreciate that, thanks.

**Amal Hussein:** You're welcome. Alright, so... Back to you, Divya. \[laughs\]

**Divya:** This is a really good discussion as to how TypeScript can sometimes help with certain things, and sometimes it doesn't.

**Amal Hussein:** It is. Thanks for bringing it back to TypeScript. That's great.

**Ben Ilegbodu:** Yeah. Full circle.

**Divya:** Yeah.

**Break:** \[00:36:15.05\]

**Divya:** TypeScript is really useful for many things, and one of the things that, Ben, you work on a lot is the integration of TypeScript and React, because that's the framework of your choice. I have no idea, because I don't use React anymore, what the general adoption rate of TypeScript is with React. Can you speak more to just the general ecosystem of TypeScript within React?

**Ben Ilegbodu:** That's a good question, actually... I think there's a lot of interest in using TypeScript with React. A lot of people wanna understand, is it worth the effort? Because there's definitely a learning curve with TypeScript; we've already talked about that. So what benefits do you get out of it.

There's a lot of interest. I'm not sure how many people are applying it into their apps yet, I haven't got a sense of that... But there's definitely a lot of interest, and I believe a lot of benefit in using it in React. I know that TypeScript is like mandatory in Angular, but for React there's a lot of interoperability with React as well, with TypeScript in React. So there's a lot of benefits that you get, like I was mentioning before, with using TypeScript in React. A lot of it is on the props, because in React basically props are just an object that's passed to a function, and TypeScript knows how to do that very well. So you end up basically piggy-backing a lot of what TypeScript does well, and improving React that way. Similarly, a lot of the hooks and stuff like that - they're just functions that React is calling, and TypeScript knows how to do that very well, too.

**Amal Hussein:** Controversial functions... I hope you know I'm like the only human being on the face of the planet that does like "HOOKS!"

**Ben Ilegbodu:** What did I just step into...?

**Amal Hussein:** I want my classes back...! \[laughs\]

**Divya:** Really, Amal...?

**Amal Hussein:** No, no, I get hooks. I get hooks. I get hooks. It's just too much black magic, the API is a little clunky... But you know, it's fine; I get that I am the minority opinion here, and it's okay.

**Ben Ilegbodu:** Yeah. You probably don't like using JSX either, huh? You wanna write all your create elements.

\[laughter\]

**Amal Hussein:** Not even create elements. I don't wanna take it that far... But I do have to say, everytime I use JSX, I know I'm doing something a little "dirty", you know what I mean? Because it's like writing my HTML in JavaScript that's not actually real HTML either, because there's certain things you can't do in JSX, that you can do in HTML... So that's the thing; that's the delta. So if we could just get rid of that delta, I'd be okay about it, because then I could just pretend I'm using string templates. There is a delta...

**Ben Ilegbodu:** \[00:40:12.07\] That's the whole point, they're not string templates.

**Amal Hussein:** No, no, no. Sorry, I meant tag template literals. I meant to be specific, sorry...

**Ben Ilegbodu:** Oh, yes.

**Amal Hussein:** You know what I mean?

**Ben Ilegbodu:** Yeah, yeah.

**Amal Hussein:** Yeah. Then I'd be like "Alright, I'm actually using JavaScript to create my HTML", but it isn't even HTML. It's like some cousin of it. But anyways, I'm segueing, I'm sorry. You were saying? You were talking to us about React in TypeScript.

**Ben Ilegbodu:** What was I saying? Oh yeah, I was talking about the wonderful, wonderful hooks, and how those are functions, and easy to type.

**Amal Hussein:** Yeah.

**Ben Ilegbodu:** So yeah, there's just lots of...

**Amal Hussein:** Thanks for the trolling.

**Ben Ilegbodu:** \[laughs\] ...lots of benefits, I think, with TypeScript in React. I always say React is -- and the community likes to say React is "just JavaScript"...

**Amal Hussein:** Yeah, I've said that before...

**Ben Ilegbodu:** Since it's just JavaScript, it benefits a lot from TypeScript, is kind of what it is. So a lot of your interface with components is props, so it helps there, but then just a lot of code you write is beneficial... As well as Visual Studio Code. There may be other editors that have great TypeScript integrations, but the integration between TypeScript and Visual Studio Code is just amazing. The autocompletion, all of the inline error messaging... I could write a whole app; as long as I didn't care what it looked like, I could write a whole app without having to leave my editor, just because of all of the information that it gives me.

**Amal Hussein:** Has anyone ever been able to use Visual Studio Code without their fan spinning though? I'm just curious, because that's the one issue I really have with it, performance.

**Ben Ilegbodu:** Really?

**Amal Hussein:** Yeah...

**Divya:** Interesting.

**Amal Hussein:** Yeah, I don't know...

**Divya:** I had this issue with Atom, but not much with VS Code.

**Ben Ilegbodu:** Yes, exactly.

**Divya:** I mean, the only time that my fan runs is if I have it in a dev container... Because that's basically Docker running in Visual Studio Code, and running all kinds of things.

**Amal Hussein:** Right, right.

**Suz Hinton:** It seems though that VS Code + TypeScript + React and then with the possible backend Node.js debugging seems like the perfect kind of ecosystem...

**Ben Ilegbodu:** Yeah.

**Suz Hinton:** And given that Microsoft created VS Code, the tight coupling to TypeScript support, things like that must make it a really well-classed experience.

**Ben Ilegbodu:** Yeah.

**Suz Hinton:** Is that the recommended way at Stitch Fix, Ben?

**Ben Ilegbodu:** Yeah, yeah. Basically, I have this thing where anytime I pair-program with someone, I'm like "You know VS Code exists as an editor... You know it does this, and you know it does that..." And I just try to gently suggest "Hey, why don't you use VS Code?" Because I was somebody who was "I don't know about this VS Code thing... It was built by Microsoft etc." \[laughter\]

**Amal Hussein:** What did you use before VS Code?

**Ben Ilegbodu:** I used Atom.

**Amal Hussein:** Atom, okay.

**Suz Hinton:** Which technically is now owned by Microsoft, hilariously. \[laughter\]

**Ben Ilegbodu:** Yes, exactly.

**Amal Hussein:** Microsoft, on the pledge to buy the JavaScript ecosystem.

**Ben Ilegbodu:** So I was like, "You know what - I'll give VS Code a two-week trial", and I'm now three years into my two-week trial, or whatever the case may be... So it's been great in how it's been improving over time. I use my terminal inside of it, so I can run tests while running TypeScript, while running my code, my app... So yeah, it's a pretty great experience. The TypeScript + VS Code integration is just amazing.

**Amal Hussein:** That's amazing. So how does TypeScript make React better? I'm just curious, because in addition to just type-checking with JavaScript, does using the React APIs get better, too? Are there less opportunities for footgunning if you use TypeScript? Can you give us some examples of that?

**Ben Ilegbodu:** \[00:44:00.17\] Yeah, so because with your type definitions now if I'm writing -- let's just say I'm typing in an input field, it will autocomplete all of the different props or attributes that the input field has. I have an on-change handler for my input field, and I get back an e, the event. And I say "e dot" and it autocompletes what are all the options. And I say e.target - well, e.target is now a reference to an input field, and it tells me all of the options that I have for that. So I have value -- I actually found something new that apparently an input field has the other day. I forget what it was. It was something related to value, a different form of it. So just all that kind of information and autocompletion is helpful. I have an array of stuff, and I do an "array dot". It's like "Okay, map", and inside of that it tells me the first element is the first item, and it's of the right type, and what I can do to it... So it's like all these kind of micro helps. So it's not one big huge thing, like "Oh, this has changed the world. I couldn't do React before that." But it's all these little things to assure me that I have the right type and I'm doing the right thing... It's really helpful, I find.

**Divya:** I guess the big upside to TypeScript with React is that React was class-based, and a lot of TypeScript uses classes, so it's really easy to integrate quite simply... And the reason I bring that is because in Vue we have TypeScript also, but oftentimes writing Vue with TypeScript requires you to write a class, which is not common in Vue at all. So your Vue TypeScript code looks completely different from Vue without TypeScript. And I don't find that the case necessarily for working with React in TypeScript. Oftentimes it's sort of you're still writing React, you just see more types within it, some interfaces sprinkled in, and so on.

That parity is actually really nice, because you don't feel like you have to contact-switch completely. I love Vue a lot, but the one gripe I have with it is just that TypeScript support is not great.

**Ben Ilegbodu:** Yeah.

**Amal Hussein:** Yeah, I remember it was Angular, when they had their 2x++ release - I think they were on version 9, or 10, or I don't know what now... But they made a very intentional decision to actually rewrite the library in TypeScript, and then it was the first major framework to actually use TypeScript natively... And you could really use Angular without TypeScript. I thought that was a very bold move at the time, but now looking back on it, I think it's been advantageous to them, if you think about it.

**Divya:** Yeah, back then people weren't using TypeScript actively. I think they were the first framework to just be like "We're gonna use TypeScript now." And I think frameworks are following suit. I say Vue support for TypeScript is not good, but with Vue 3 they actually rewrote everything, because it didn't support TypeScript before, or the way it was written didn't support TypeScript, so they had to rewrite everything, so that now it supports TypeScript really well. And it's just really interesting to see the community moving in this sort of direction, with regards to using TypeScript within projects. It's not like an afterthought, it's almost like "Oh, we definitely should be using TypeScript."

**Ben Ilegbodu:** Yeah. You wanna at least make it possible. You want people like Amal to not have to use TypeScript, but you know... \[laughter\]

**Amal Hussein:** No, it's not. I mean --

**Ben Ilegbodu:** But for those of us who like it...

**Amal Hussein:** Oh, God... So in all fairness, I'm very skeptical of new technology, as somebody who has to evaluate new tools for a living... I've seen the dark side of early adoption, or adopting the right tool without even investing in people knowing how to use it. So adopting a tool responsibly at scale within an engineering org - you have to do it responsibly. You have to have a plan, and a roadmap, and an implementation, and you have to have a bunch of change management around it...

\[00:48:03.16\] So therefore, that's where that bias is coming from. I do see the benefit of TypeScript, absolutely, for large-scale projects with multiple engineers that are multi-year, no doubt. That's why Java is a thing. Java is great for large-scale enterprise multi-team, multi-year projects, because there's so much convention baked in; very hard to go off the rails. So I see the benefit.

I think it's more that -- I just am not a fan of one solution for everything, meaning if I have to write a simple script, I'm not going to write a simple script in TypeScript and bring in a bunch of tooling, and this and that. It depends on what I'm doing. TypeScript - I have to have a need for it, and I have to be able to justify that need.

It's like the people who put GraphQL in front of everything. GraphQL was meant to solve one problem. Do you need to solve this problem in this context? Do you need to make this website a progressive web app? Do you really need a service worker for this basic ass blog? There's just so much over-engineering, and we have a lot of bias that we need to check as engineers. You just have to check your own bias first.

**Ben Ilegbodu:** Right.

**Divya:** Speaking of migration and using TypeScript - is there an official React way of scaffolding a React project with TypeScript? Or are there tools that you recommend using?

**Amal Hussein:** It's a great question.

**Ben Ilegbodu:** Yeah, Create React App now supports TypeScript out of the box, using the Babel plugin that I was talking about earlier, that enables that. So when you're creating a React app, there's different templates that you can use, and TypeScript is one of it, so you get it right out of the box, and you have TypeScript support. So that's the easiest and best way if you're starting an app. And even if you have an existing Create React App, they have docs on how to convert over to using TypeScript in their docs.

And then if you're not using Create React App, you obviously go the Babel plugin route. So yeah, they provided those pathways...

**Divya:** That's cool. I've experimented a little with TSDX and what Jared Palmer has been doing with those libraries for zero config stuff... And it's really nice, because you can just scaffold it and then just start working. Everything is sort of configured for you.

**Ben Ilegbodu:** Yeah.

**Divya:** But yeah, I think that one is sort of independent of React. You don't have to use React in order to use TSDX... But yeah, cool.

**Amal Hussein:** I have a question, Ben... So we have Create React App, where you can maybe scaffold with a TypeScript template - I think it's a flag; it's like template-typescript, or something...

**Ben Ilegbodu:** Yeah.

**Amal Hussein:** But how has the ecosystem at large adapted tot this change? Because if I have a React app that's in TypeScript, and I was using Material UI or some other UI library that hasn't, is it just kind of the same sequence of the definitely-typed pull request that needs to happen from the community? So it's just that same workflow, essentially?

**Ben Ilegbodu:** More and more React libraries are using TypeScript. You mentioned Material UI - it's actually using TypeScript. So that one's really nice. TypeScript has become more and more popular in the ecosystem, so more and more libraries, specifically those related to React, already have TypeScript support... So that's pretty nice. But then yeah, the fallback is always DefinitelyTyped. Generally, they've been pretty good. They're high-quality.

**Divya:** Cool.

**Suz Hinton:** I'm interested to hear a little bit more about the component system that you implemented in with TypeScript, and things like that. I don't tend to see -- I'm not really in the pattern library community, so I'm always interested to hear how that's been going when you have a team that has to use them, and how TypeScript has helped with that too, especially when people are getting to know new components that you might have introduced.

**Ben Ilegbodu:** \[00:52:05.00\] Yeah, TypeScript has been really great for component library, because there's always these weird associations between props, like "Oh, if you specify this prop, then you can't specify this prop." Or "This prop only makes sense if you specify this other prop." And you can make those kind of associations in TypeScript. They're more advanced associations, but you can do that in TypeScript, and be assured in the code that that contract was followed, which is really nice.

And then, one thing that I've borrowed from Material UI is this concept that root element can be changeable, I guess. So it's called -- I forget what the term is, but it's basically having an as prop for a component. So you can say "Oh, I have this link component, but I can set as to be a span instead of being an A tag, for instance. So now I'm able to have a link component and it has all of its props, but then if I change the underlying tag, now my component supports all the props of that underlying tag as well. So I could have a text component and then make it a label tag, and now it supports HTML 4, because I said it's a label, as opposed to being an h1, for instance. And now I get all of the props, and it's properly-typed as well because of that association. So using things like generics for your components really makes all those sorts of things possible.

I have a generic list, that you'd pass in a list of things, and then you have a render prop to render out each individual thing. Well, using generics you can make the association that the item passed to the render prop is of a specific type, based upon the items that were passed in. So all of these weird associations and contracts that happen by convention, or you have to just say in docs like "This is how these things work", you can enforce with TypeScript... Which happens a lot with shared libraries, and stuff like that.

**Suz Hinton:** That sounds really good. It even seems like that would be helpful with things like accessibility. So if somebody creates an image, it can immediately say that the outprop is required, or something like that, right?

**Ben Ilegbodu:** All those kind of things, yeah. You have to enforce these other props, yeah.

**Suz Hinton:** So it won't compile unless you put it in, which is good. It's the first step towards getting people writing high-quality components.

**Ben Ilegbodu:** \[laughs\] Exactly, exactly.

**Suz Hinton:** I like the composability of what you've just mentioned, too; you're basically being able to base things off different root elements. I've never really thought about creating that kind of flexibility in a component library. That's very cool.

**Ben Ilegbodu:** Yeah. Just that feature saves so much configurability... It's like "Oh, I wish this thing was a different thing" or "I need it to be this..." It's just like "Okay, just change whatever type it is underlying, and do what you need to." It's just that. It was a great thing that Material UI did, and I definitely copied it from them. \[laughter\]

**Suz Hinton:** It's good to copy patterns that are battle tested, and that sounds like a very highly valuable one. I would say that this is one of the big reasons why you would want to use types. I think that that just sells itself right there.

**Ben Ilegbodu:** I agree.

**Divya:** Awesome, yeah. I totally agree with the composability point, and I didn't even think much about that as well, until you mentioned it... But that makes a lot of sense. Because then you don't necessarily have to think about all the possible types that this particular component will -- or the different use cases that this component will be used for. You're just like, "Oh, here's a generic", and then you can just change it if you'd like.

**Ben Ilegbodu:** \[00:56:11.07\] Yeah. And the nice thing - it's still type safe. Because normally, you'll just say "Oh, I'm just gonna take all these props, assume they did it right, and pass it on to the underlying element" and hope they didn't pass anything that the element doesn't support. But if it's typed such that I know or TypeScript knows what that underlying element is supposed to be, but it's generic, then depending on if it's a span, versus a label, versus whatever, the supported props changes, but it's always gonna be type-safe. So if I say it's a label, I can't pass in an hfref. Or if I say it's one other tag, I can't pass in something else. So that's the benefit. It's really, really hard to type, though... The TypeScript gymnastics you have to do to make that work is really hard, but once it's in place, then it's nice.

**Divya:** Yeah, I think there have been times when I've had to -- this is with a separate compiler I was writing for, but it's sort of like you're just trying to appease the compiler sometimes...

**Ben Ilegbodu:** Yup.

**Divya:** Just like writing around it... I mean, within TypeScript you don't really get into that kind of situation too much, because oftentimes the advanced use cases are not as common. It's sort of like this one edge case that you work with, in which you have to do this sort of dance with the compiler; but most of the time it's fairly straightforward, and you understand based on the error that you're getting what you have to do.

**Ben Ilegbodu:** I would say that still happens in TypeScript. I'm gonna be honest.

**Divya:** Interesting. Okay...

**Ben Ilegbodu:** I find myself -- I'm developing TypeScript; not developing my app, I'm developing TypeScript, trying to appease it. But a lot of that happens when I have existing JavaScript that I'm trying to convert to TypeScript... I basically wrote it in a loose way, that is either not typable, or really difficult to type. So one thing I suggest to people is that when you are choosing to adopt TypeScript, you're choosing to make your code more strict, so you may have to change how your code is written in order to support what you're trying to do.

If you start from TypeScript from the beginning, then it's not gonna let you do some things right off the bat, especially if you have the VS Code integration and it's complaining as you do various different things... \[laughter\] So yeah, it's difficult sometimes.

The TypeScript errors - they are cryptic... They are hyper-specific, which is actually not a good thing in certain cases. You're just like "Yes, what you just said in that error is correct", but I need to deduce some things, or have seen this error 20 times and now know "Oh, okay. That means I need to do X", for the more complicated cases. For the simple stuff - yeah, it makes sense. So it's all a learning curve...

**Divya:** Yeah. I find myself getting into problems sometimes... I was working on a specific TypeScript project that was a bit complicated, but... For example, with event, I was like "Oh, it's using just an event", but then it assumes HTML event, and I'm like "No, it's not an HTML event, it's this other type of an event that's sort of being passed", and I have to go and figure out where that's coming from, and just trace back where the types are... And depending on how in-depth your project is -- it ended up me going back all the way to Web Assembly and being like "Oh, okay, this is the type from there, and this is how it trickles down to this component I'm using." And like "What did I miss? Oh, what is TypeScript telling me in terms of the way in which I define the types?"

**Ben Ilegbodu:** Right. So that part is annoying. There's no way to sugarcoat it. However, it ensures that you are accessing the right properties on that event, so you won't access something that doesn't exist, and if you're in VS Code, once you get the types right, it will tell you what does exist, which is pretty helpful, so you don't have to go and find the docs many times... So yeah.

**Divya:** \[01:00:15.00\] Yeah, I've found that useful for user-facing stuff. We were building a project for work, and we're gonna have users use that particular tool a lot, and we didn't have types for it. I was more or less writing examples for users to look at, so that they'll understand how to use it, and found myself in weird areas where I had to go back into the Rust code and be like "Okay, what's the API?" and then understand how to write it in JavaScript. And I have deep context as to how this thing works, and I'm already struggling to understand if I'm accessing the right thing...

So just to think - you know, if you don't offer a way in which users can understand what the API types are... Because pre-TypeScript, I remember having to do -- you would do the definitions at the top, sort of a sense of comments, and you're like "These are the parameters and these are the possible types."

**Suz Hinton:** Oh, like JSDoc style.

**Divya:** Yeah, JSDoc. And then you would have that produced documentation for you, that shows you "These are the attributes that it takes in, and these are the types, all possible types." But it doesn't check it for you. You have to go back to the doc and check every time, to make sure that you're following it correctly. So yeah, with TypeScript, and having automatic VS Code tell you "These are things that are available" - as you're typing it, you do e. and then it's like "Here's all the possible things within that event object..." It's so useful, because it saves you so much time.

**Ben Ilegbodu:** Yup. Exactly.

**Suz Hinton:** One thing I will say is sometimes though I see people release something and think that there's no need to include documentation. There's nothing that frustrates me more than having to go and find a library on GitHub, click on the type definitions, and go through and actually find out how to use something... And I have to do that much more often than I'm expecting to these days. And I get that people auto-generate docs with types, which is very helpful; it's kind of the bare minimum. It's very terse, like JSDocs. But I'm also expecting to see examples as well, and several examples...

**Divya:** Yes.

**Suz Hinton:** And Divya, I think you touched on a really important point there, where - yes, it makes it easier for you to basically provide a strict documentation, especially if someone doesn't use VS Code; for example, I use Vim, and I don't like to clutter it up with lots of plugins... So I'm generally not benefitting from the autocomplete in that way. But at the same time, I'm an experienced developer, so I can grok documentation very quickly. So just give me something to go with...

So I want to remind people that TypeScript can actually help you at least generate the docs at the bare minimum, so there's no excuse for doing it and making people splunk through source code.

**Ben Ilegbodu:** Yeah.

**Divya:** I think you have to have two types of docs... And this is something that I've sort of tried to advocate for internally - that TypeScript gives you API docs, which is a very specific kind of docs. But if you want people to use it like -- it's a specific kind of person who looks at API docs and automatically uses the library and understands everything. But most users need example code, to be like "Okay, what are instances in which I can use this?" Like code snippets, let's say. And then I can sort of map that to the API.

**Suz Hinton:** Exactly.

**Divya:** And the API docs I would say is a reference; it's not really a thing that you go to read what the thing does... Because your API tells me nothing about what this library does; it just tells me how to use it. But I need to know in what cases I would use it, and how it's been used before, the edge cases, and so on.

**Suz Hinton:** Yeah, context is everything.

**Divya:** Yeah.

**Ben Ilegbodu:** Yeah, there's actually an article - and I mention this in a talk of mine, that there are actually four types of docs.

**Divya:** Oh yeah, I think I watched that talk before...

**Ben Ilegbodu:** There you go.

**Divya:** Was it at JSConf Hawaii?

**Ben Ilegbodu:** It was, yeah.

**Divya:** Okay.

**Ben Ilegbodu:** \[01:04:07.06\] So there's the API docs, which are what we're saying... It's like the bare minimum that happens. The examples, or recipes - that is another form, which are really helpful. I think the two of those are the bare minimum, really. And then there are tutorials that really walk you through things... And then workshops I believe is the last one. So all of those are kind of different forms of docs that target the different ways people learn. Because in my opinion, API docs are only really useful if you already know how the thing works. They don't really teach you how the thing works, so you need something else to kind of get you there. And then those API docs may make sense.

**Divya:** Yeah. Because API docs also send you down a rabbit hole sometimes... Because you just keep clicking on the type to go down to that actual--

**Suz Hinton:** It's so true... \[laughter\] Oh, it's so true.

**Divya:** ...and then understand what exactly you're trying to do. I've been in that rabbit hole so many times.

**Suz Hinton:** Oh, yeah. I wrote a VS Code extension recently, and the documentation there needs a lot of help. Just so many holding down Cmd and clicking on a type and then having another tab open, another tab, another tab, another tab... It was definitely my experience with that. It was not an enjoyable experience.

**Divya:** Yeah. It's definitely an important thing to know for library authors... You might know how the thing works, but your users don't.

**Ben Ilegbodu:** Exactly.

**Divya:** Awesome. Is there anything else that we missed, or that we should talk about before we close out? And before we close out, I wanted to just give a shout-out to where people can find you, and that kind of stuff... But Suz, do you have anything to add?

**Suz Hinton:** No, that was all. But I would really like to know where people can follow up with Ben.

**Divya:** Yeah, okay. Cool. Ben, can you just give us a sense of where people can follow up with you, where we can hear your talks? I know you're giving many workshops, too. Or minishops. Where can we find all this information?

**Ben Ilegbodu:** Yeah, so you can find me mainly on Twitter. My Twitter handle is @benmvp. I'm assuming that was why the JS Party edition was called "Ben, the MVP", because that is my handle... \[laughter\] So @benvmp on Twitter. My site is also benmvp.com. That's where you can find all the past talks, videos of the talks, lots of blog posts... I like to blog about things that people ask me about a lot. It's mostly about React, so - sorry, Divya, you won't find any Vue things there...

**Divya:** \[laughs\] I'm actually writing more React these days, so... I'm moving back in that direction.

**Ben Ilegbodu:** So on the topic of minishops - like you said, I do these three-hour or so mini workshops (I call them minishops) about different topics... Mainly React right now. So I host them online, virtual, and such... And I actually have a workshop called TypeScript for React developers that's on there. So if anybody is interested in learning - okay, let's dig into what it will look like to do TypeScript in React. I have a minishop on that. So if you go to benmvp.com, you'll see a link there about the minishops.

**Divya:** That's awesome. Do you also make people do squats at the beginning, like you do with your talks? \[laughter\]

**Ben Ilegbodu:** I don't... I save the squats for talks. It's a special thing for the live experience. It just doesn't seem like it would make sense in a workshop. I haven't, but maybe... Hm. I have to think of a way to incorporate that back in there. The funny thing is for the last two years I've been wanting to just not do them anymore, because they take time, and whatever... But people keep saying "Oh, I hope you don't make me do squats..." I'm like "Well, I guess I need to make you do squats then..." \[laughter\] There's so much excitement around them, so I just keep doing them.

**Divya:** It's a trademark.

**Ben Ilegbodu:** Yeah, exactly. It's funny.

**Divya:** Awesome. Well, thanks again for being on the show with us. It was lovely, as always.

**Ben Ilegbodu:** Thanks for having me.

**Divya:** Cool.
