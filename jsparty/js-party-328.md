**Jerod Santo:** Hello, friends. I'm Jerod, your internet friend, and I am joined today by none of my panelists. It's just me here alone. Well, that would be super-awkward if I was entirely alone. I'm not alone. I am with Simon Grimm from Galaxies.dev. Welcome to JS Party, Simon.

**Simon Grimm:** Thanks for having me. I'm excited to be here.

**Jerod Santo:** I'm excited to have you as well, because we're going to talk about a topic today that we've touched on over the years, and I think we maybe did an episode, who knows, half a decade ago, but don't really talk about much, which is mobile development in the world of React Native. This is very much your world, isn't it?

**Simon Grimm:** Yeah, it is. I looked up your archive, I just searched for React Native just to see what you had in the past... And you had a Shopify engineer, I think a Meta or Airbnb engineer, and the guy who created React Native Web... So I'm a bit intimidated by the previous guests, but...

**Jerod Santo:** \[laughs\] Well, don't be, because you've been doing React Native a long time, and teaching folks all about it along the way... So I think you're very well qualified. And like I said, we haven't really talked about it much beyond those initial shows... And so here for it. We are here for it. How did you get into it? Why did you pick React Native, or switch to it? Tell us a little bit of your past with this framework, or whatever -- is it a framework?

**Simon Grimm:** Yeah, it's kind of a framework. I mean, at this point -- Expo is actually a framework we're gonna get into... Expo, and what it means to React Native, later.

**Jerod Santo:** Platform, I guess. React Native is a platform? What do you what do you call it? Ecosystem?

**Simon Grimm:** I mean, it's still a framework. It's still a framework, yeah. So my past is actually quite interesting... I got started as a native Swift developer as my first job. Soon after, I discovered this framework called Ionic, which was around 2014. Some of you might know, web development using AngularJS, and using Cordova, and bringing that to mobile apps... I've been actually doing this for a long time. I was at the Ionic Academy; that was my first online school to help people with Ionic.

**Jerod Santo:** Okay.

**Simon Grimm:** And I've been doing that for years. And I actually had in 2015 a video about React Native, which to this day is probably still my most popular video... Although I had hundreds of Ionic videos. But by the way, it's now overtaken by some random AI video. It's always the worst videos you do that get the most popular on YouTube. I don't know.

**Jerod Santo:** Yes, I have a theory about this... I call it Jerod's rule of virality. And it goes like this: the likelihood of a piece of content going viral is inversely proportional to the amount of effort I put into it.

**Simon Grimm:** 100% agree. Which makes me kind of sad, because this video -- we made a video about like switching from React to React Native, and I put a lot of editing time into it... After that, I thought "Simon, you know what this means? You spent two days editing. Nobody's going to watch the video."

**Jerod Santo:** "No one's gonna watch this thing." Yeah, exactly. Just throw something out there as fast as you can, and people will watch it. But put all your work into it, and... Crickets. Anyway.

**Simon Grimm:** So fast-forward, after using Ionic for some time, I decided it's time for something new, and that's when I came back to React Native, after not giving it a lot of attention... And so much had changed about React Native. Expo had become the thing people use. The performance has improved, there's a new architecture coming currently... There's just a lot of excitement in the React Native community, and I thought that "Well, there's actually not that much content out there."

\[00:08:12.21\] The big companies, Meta, Microsoft, everyone is using React Native, but the amount of like quality content you find out there is still kind of limited... Although React Native has been around like eight years, eight-ish, nine years. So I got more into doing React Native videos on YouTube... And that got quite popular. My channel is now getting close to 100k subs... Also, thanks again to the AI video.

In the meantime, I'm building up Galaxies.dev, as you said, which is my platform to help people get quickly into React Native... And I'm doing also a podcast. Rocket Ship podcast is my podcast where I talk with React Native developers and the creators and the brains behind it to share the good news about what's going on... Because there is a lot going on. I mean, we all live in the JavaScript ecosystem, so we know the pain of like not listening to the news for two weeks, and then like two major new versions are out... And it's the same pace in the React Native world.

**Jerod Santo:** That's interesting. So for those who are completely uninformed, or have heard the term React Native, but have never actually looked at it and said "Here's why I would use it, or choose it", what's the elevator pitch? Why would folks even pick up this platform, this framework, this toolkit?

**Simon Grimm:** So with React Native you can build cross-platform applications. The initial idea from Meta or from Facebook back then was that they wanted to have a better way to develop their own iOS and Android applications in a faster way, which has of course grown a lot... And at this point, you can build for so many mobile platforms; we'll talk about that later as well. But basically, you write one code, which is React code... It looks a bit different, because React Native has some own components. You don't have a div, you don't have DOM elements... So there are a couple of differences, but many things are the same. So that's the pitch of React. You learn it once and then you write everywhere.

So if you know React, if you know hooks, and states, you use all of that with React Native, but from that code, React Native generates an iOS and an Android app. And the great thing here is that that's actually the difference to your like Flutter, Capacitor, Cordova, all these things out there, that React Native will render your React code the elements you use to native elements. So I get a native iOS text input, or an Android text input, or a scroll view, or whatever component. If you're using something like Capacitor or Ionic, you get a component that looks like the native input, but it's actually a web component styled with CSS.

And on the other hand you have Flutter, which is like the other popular, shiny thing that people use these days. If you use Flutter, they're basically like pixel-perfect drawing these text inputs \[unintelligible 00:10:51.17\] with that engine. So they're also not using the native components. So that's why React Native is actually probably the best cross-platform framework out there, as it gives you access -- it renders these native components. You just have to think about this... Apple engineers have spent like 10-15 years engineering that damn text input field. They know stuff about accessibility, and borders, and shadows... And why wouldn't I use that? It just doesn't make any sense to use something else. There are pain points with React Native, of course. Everything has some pain points. But that's the extended elevator pitch.

**Jerod Santo:** Yeah, totally. I think that's good. I think that historically, the plight of cross-platform frameworks is that uncanny valley of native, like you're talking about... Whether they just go completely their own way and say "Well, here's what widgets look like on this." And they'll look the same everywhere, but they're not going to look native to their environment. You can go that direction. If you have really good design, sometimes that works out just fine.

\[00:11:56.04\] The other one is like "We're going to emulate and simulate and try to look as close to native as possible, but we're still going to use web tech, we're still going to use our own rendering engine, and it's not going to be native widgets." And that has just always been so disappointing for end users, because you're like "This looks like what I expect it to be, but it's not what I expect it to be." And the finer points of that user experience, especially on a phone, something so personal, so in your hand and close to your eyes, and used all day long, to where like you can locate the different parts of the UI without looking at it, because you touch it so many times... Well, in this particular application it's off by 10 pixels, and so I don't actually get the touchdown. Those things really do degrade the way it feels to use an application. And so the fact that you can write once, run anywhere, but in each place they're not establishing their own paradigms and widgets, they're actually using native widgets, I think is, I guess, the killer feature of what React Native provides.

But what about platform-specific features? So a lot of times, you're then coding against the lowest common denominator, like "Well, Android has this thing, iOS has that thing. They're very similar, and so code it once and we'll do the right thing on each platform." But what about things that iOS does that Android will never do, and vice versa? Can you reach through React Native, and get to those very platform-specific features? Or are you locked out of that kind of stuff?

**Simon Grimm:** I mean, in general, of course, you have access to the native platform APIs. So if we take the easiest example, the camera, which is available on both Android and iOS... You use a package for that, React Native has a package for that... But by now, I'm a big fan of Expo, and - I mean, in a minute we should probably talk about it, as we've mentioned it a couple of times... But you just basically install a plug in, and you call expocamera.capture, and it calls the according native iOS or Android implementation.

Both Capacitor and Flutter, they all have this mechanism of reaching the native APIs at some point, they just do it in a different way. It's always some sort of bridge, if you want to keep it easy... And it's for React Native, until now, the same. These chords go through a bridge, and then they execute native Swift or native Kotlin code, and then you get back the result. So you usually don't have to mess up with the native APIs. However, as you said, if something just doesn't exist on Android, there's not a whole lot you can do. There will be a plugin, and the plugin has only an iOS implementation, and then you can use it.

We have to be honest, this is something people complain about often, or that I hear about often, is that Android is a little bit an afterthought in React Native. You can feel it sometimes. I just did a video about like all the cool things, big titles, automatically blurry header and stuff... And then people comment "Yeah, good luck on Android." I mean, platforms have just different philosophies. You've got Android with material design, and iOS with like their own Apple guidelines... So it's hard to unify UI stuff.

**Jerod Santo:** A hundred percent. Yeah. Alright, let's unpack Expo, because like you said, we've mentioned it a few times, and you seem to be a huge fan... I hadn't heard of it until I started watching some of your videos this morning. So Expo - what is it, and why do you like it so much?

**Simon Grimm:** Okay. So in the past, Expo was called Exponent, and it was like a suite of tools on top of React Native, and it kind of made your development flow a bit easier, but it was very hard to get out of it at some point. And that's what people usually complained about. Because projects get complicated, you get native modules, you need to tweak this and that... And you were kind of limited by Expo. However, Expo has over the last let's say two or three years completely turned that around. By now, the recommendation - actually, the real recommendation from React Native is to use Expo for new projects, and not the React Native CLI. And that's why Expo is now called a framework.

\[00:16:02.09\] They recently introduced this concept of frameworks, and it's actually the same for React. Every React developer these days is using Next.js, or maybe Remix. So you wouldn't spin up a React SPA anymore at this point. I don't know anyone doing this. And so everyone's doing this with Expo... But I think it's still confusing to people what Expo actually is, because Expo is also a company, they have what's called EAS, Expo Application Services, which is all around like building your mobile application in the cloud... If you don't have a Mac, you can build in the cloud, you can set up pipelines, you can submit your app automatically to the App Store, you can share preview versions with your colleagues... They have all these additional services, but under the hood Expo is also an open source framework, and I think this just makes it really complicated. I think they honestly have like a branding or marketing or positioning problem. I think they're kind of aware of that... It's just like hard to rebrand or persuade people that they're not the same as they were three years ago.

**Jerod Santo:** Right. Yeah, so you hit their website, expo.dev, and of course, they have Star Us on GitHub, and they say open source, but they also have Expo and EAS right there... And as a complete newb, I say EAS and I'm like "I have no idea what that means." But there's also pricing, and careers in their header... So this is very much one of those newfangled hybrids of a open source project meets a business, meets a service, or a platform... And a lot of times it is difficult as a developer to tease apart what exactly you're looking at, and what you're going to get on the open source side, and what you're not going to get. But it sounds like what you're saying, Simon, is if you don't have a server-side application, then EAS is maybe providing those kinds of things, I assume, for like push notifications, and user accounts, and storage, and all that kind of stuff?

**Simon Grimm:** No, not really. It's not like a database. Nothing like Supabase, or anything like that. It's more like DevOps tooling, I'd say... Like building your application, connecting it to --

**Jerod Santo:** Okay, so like building and deploying.

**Simon Grimm:** Yes, exactly.

**Jerod Santo:** Okay. Submitting... Okay, now I'm going through their things. Updating... Yeah, they have EAS Build, Submit, an Update on there.

**Simon Grimm:** And people love that, honestly. Companies really love that. If you're constantly you're releasing updates to the App Stores...

**Jerod Santo:** Is it a pain in the butt to just update your React Native app and ship it back to Apple and Android?

**Simon Grimm:** I mean, you can somehow automate this yourself, if you set up whatever kind of build system, and then there are like Fastlane tools you can configure... But it's a lot of manual stuff, and it can break, and they kind of like -- yeah, they played that game through and just give you the best of the best this point. But of course, you've got to pay for that.

**Jerod Santo:** Sure. What if I just say "Okay, I'm not gonna give these people any money. I'm just gonna go open source Expo." What do I get from that?

**Simon Grimm:** Okay, yeah. This is the free part, the expo SDK. There are tons of plugins; just as I said, camera, context, image picker, whatever. They have a list of - I don't know how many plugins they have. So you can use these plugins. They're in some cases a wrapper around an existing React Native community plug in, in some cases it is an Expo managed plugin... It's just a lot of plugins they offer that you can use.

Beyond that, they also have a super-interesting library called Expo router, which helps to - okay, we're getting really technical at this point... But traditionally, in native applications you navigate from screen to screen, you push stuff, you have a stack, and you have a tab bar, and all of that is like a loose concept. With Expo Router, Evan Bacon, the creator of it, actually implemented file-based routing for native applications. So what you're used to from Next.js, SvelteKit, or whatever - everyone's using file-based routing. And you can do the same now with Expo Router and React Native.

\[00:20:10.25\] So Expo Router sits on another navigation package, and you just put up like an index.tsx, and then you do a folder about something, and put another index in there... And the cool thing is that this gets you closer at some point to creating universal applications. So you can not only do iOS and Android apps, but if at that point you also build a web application, they're going to have the same path. So it's going to be like mypage.com/about, because the page is called about.tsx in your React Native project.

So this is one one of the Expo projects... It's really confusing. It's cool, actually, to see how confused outside people are, that have no idea, and I think as well putting EAS here in the title is really confusing, because you have no idea what this means.

Beyond that, I mean, they are, as far as I know, funding a lot of other projects. So Expo is putting money into making sure that specific key libraries are maintained. Like, they're sponsoring maintainers on GitHub. That's kind of happening behind the scenes, but... Yeah, they're investing a lot of money into the whole ecosystem, and at this point I think the community has recognized that Expo is now the way forward.

**Break**: \[00:21:25.14\]

**Jerod Santo:** So are there any ties between the expo team and the React Native team? Are they just simply simpatico, or are they ex React Native folks? Do you know any of the history or the relationship between these two? Because I'm seeing a similar relationship between the React team and Next.js and with Vercel, and it's very interesting... Especially around the launch of React Server Components, where they're like "You can get them inside Next 13." This was back six months, eight months ago. And it was like "Well, that's interesting... The React team has like an official push towards Next.js." And there's obviously technical reasons why that is; it's probably the best implementation using RSC that was out there. And of course, it's more for library and framework authors at this point than it is for end users... At least it was when they were pushing it. And I'm just like "That's weird", because there's no official relationship between Meta and Vercel. What about React Native team and Expo team? Is there anything there?

**Simon Grimm:** I don't know exactly if people from Meta are at Expo, or at Expo working at Meta. I just know that they definitely have very close connections. I see it in the GitHub issues that Meta is opening, and folks from the Expo team are replying, or fixing bugs... That's the interesting thing about the whole React Native community. There are companies, agencies, one is \[unintelligible 00:28:54.27\] Some of these folks do a lot of open source for React Native, for key libraries, and they sometimes also contribute to Expo. So it's very -- I don't know how I would call it, but it just keeps working. And on top of that, also Microsoft, for example, is actively contributing to React Native packages. So they have made React Native macOS and Windows, because with React Native you can actually build better Windows applications than with their own tools.

**Jerod Santo:** Really?

**Simon Grimm:** Yeah. At least I think they are better than Electron applications... Because many people made Electron applications for Windows, and then they made React Native for Windows, so...

**Jerod Santo:** Nice. So are you gonna get native Windows widgets with React Native?

**Simon Grimm:** I think you can do. I haven't done this. I'm a Mac user myself...

**Jerod Santo:** Sure.

**Simon Grimm:** But just last week I tried something else, which is pushed forward by Amazon... So they pushed the React Native TV OS stuff forward, so you can get it on Fire TV... And just last week, for fun, I did an Expo project, React Native, and deployed it to my Apple TV in my living room.

**Jerod Santo:** Nice. Was that hard?

**Simon Grimm:** No. Absolutely no.

**Jerod Santo:** \[laughs\] Okay. Tell me more.

**Simon Grimm:** I mean, I had forgotten to set one variable. That was the hard part. Once I had that, it actually --

**Jerod Santo:** That's always the hard part, isn't it?

**Simon Grimm:** It's always the hard part... Because you think you're smarter than the docs and you don't need that line, \[unintelligible 00:30:23.12\] And then of course, I had this -- but that's what I meant previously. It's not just iOS and Android at this point anymore. You can technically do -- as I said, Apple TV, and Fire TV, Fire tablet, you can do Mac and Windows apps, and I've seen demos of Expo applications on the Vision OS...

**Jerod Santo:** Really?

**Simon Grimm:** Yeah, and people run their applications in there.

**Jerod Santo:** Okay. So it's way beyond on mobile at this point.

**Simon Grimm:** Absolutely. It's way beyond mobile, and it's reaching into web as well... Which is funny, because -- I mean, initially it was meant for people from the web coming to native...

**Jerod Santo:** Wait a second, wait a second... React Native apps for the web?

**Simon Grimm:** Yeah... \[laughs\]

**Jerod Santo:** There's something kind of deliciously ironic about that.

**Simon Grimm:** It is, definitely. Yeah, I still wonder as well --

**Jerod Santo:** If only there was a React that went straight to the web, you know? Then we wouldn't need that. If we only had some sort of React for the web. That's cool, though. So is it feasible then? ...which is kind of the panacea, the silver bullet. The ultimate goal was like single codebase, deployed to every platform. You've got it on phones, you've got it on TVs, you've got it on the web, you've got it on... The command line...? Now I'm getting ambitious, but...

**Simon Grimm:** Probably.

**Jerod Santo:** Probably. Is that actually feasible, or is there so much difference, even inside React Native's and Expo's world, that you're still probably going to have different projects for certain things?

**Simon Grimm:** I think some platforms are just too different, especially if you're talking about an iOS application and something for the Fire TV, or so. I just learned the other week that building TV apps requires a completely different mindset. You have to think about people sitting three meters away from the screen, and being relaxed after work... So it's not just the screen is bigger, you have to make icons 100 times bigger.

\[00:32:14.02\] So I don't think that unifying everything works here. It is possible, as I said, for iOS, Android and the web. The web output, if you use Expo Router, or you get the file-based routing, you can actually use CSS at this point with Expo router in that web stuff... I think it's not entirely there yet. So if you have like a super-complex thing, I probably wouldn't go down that road yet, speaking right now, in 2024. But I think they're working in a very interesting and ambitious direction here.

There's a lot going on as well at Meta... So a couple of months ago they released or open-sourced a library called React Strict DOM. I don't know if you heard about it.

**Jerod Santo:** No.

**Simon Grimm:** It looks quite interesting. So you can technically use this in your React Native application, and then you don't have like these native-specific views, and scroll views, and text inputs, but you're actually using a tech that looks like html.div, html.h1, html.p. And that compiles, funnily, to real React Native, like what we said in the beginning. Native components. So that would probably be like the final solution to this after all, because it's giving web developers things they already know, like these tags, and it's also compiling down into really native stuff. But that was really super-early days for that React Strict DOM library, but it just shows that it's maybe possible at one point... So it's like a glimpse into the future of both React and React Native.

**Jerod Santo:** Yeah, I've found their GitHub repo, which we'll put into the show notes. They do call it an experimental integration of React DOM and StyleX...

**Simon Grimm:** Yeah, exactly.

**Jerod Santo:** ...that aims to improve and standardize the development of styled React components for web and native. So early days, like you said, but yeah, that can be very interesting if it matures.

**Simon Grimm:** I mean, to wrap it up on the universal app thing - as I said, you can do good applications with React Native for both native and web. A good example I always give is the blog of Evan Bacon. He's the creator of Expo Router. So if you check out EvanBacon.dev, his blog, that looks actually legit, like a legit website. And then if you resize it, it becomes a tap bar, so on a mobile phone it would actually kind of look like a native application... It performs pretty good. He has some nice animations going on, and stuff. The cool thing is that this is open source, so there's a GitHub repository for that whole thing going on. So he's really dogfooding everything he's putting into Expo Router, which is cool to see.

But if you really want to get the latest and greatest, I think the only way currently, or probably the best way is to have like a mono repository in which you have a Next.js application and an expo application, and then use Next for the web, use Expo for native platforms, and then share the logic through some components.

**Jerod Santo:** Yeah. That makes total sense. So if I was going to start a React Native project today - you start with Expo, you don't start the React Native and pile it on. You actually go to Expo.dev, or go to the npminstall.expo, or whatever it is, and you start there, right? Like, it is basically interfaced into React Native for you?

**Simon Grimm:** You can use the Expo CLI. So you can just run \[unintelligible 00:35:36.16\] give it a name, and then select template, and then it bootstraps your template locally. And with one other command you already have the application up and running on like a simulator or your connected device. So Expo has this thing called Expo Go, which is like its own app. And in that app, they can serve you a preview of your app, which is quite nice. It's very limited, actually. You quickly outgrow that. But for folks that are new, that are getting into React Native, it's a cool thing, because you don't really have to open up Xcode, or Android Studio; you don't really need to mess with the native tooling. It just simplifies a lot of things.

**Jerod Santo:** \[00:36:16.28\] Let's say you're using the Expo on a Mac. Obviously, you have access to Xcode, and you want to run Android Simulator, or on Android stuff... What's your process there? Do you have to get another device that has Android on it? Is there an Android simulator for Mac?

**Simon Grimm:** Yeah, you can just use Android Studio. There you can set up an emulator. Actually, did you know there's a difference? So for Android it's called an emulator, because it emulates the hardware. For iOS it's called a simulator...

**Jerod Santo:** Okay... Because they're simulating the API calls as if it was a --

**Simon Grimm:** I don't know specifically... But yeah, it's something I learned. For Android it's an emulator, and for iOS it's a simulator.

**Jerod Santo:** Okay.

**Simon Grimm:** Things you never wanted to know...

**Jerod Santo:** Things you learn when you're deep into the weeds, and you're like "Why is it not an emulator?" You're sick of coding, and you're beating your head against that missing variable that you didn't realize was missing for 45 minutes, and you're like "Why is it an emulator...?"

**Simon Grimm:** Exactly. But yeah, no problem. With Android Studio you can set up as many emulators as you want; you can spin them up. And again, Expo has a tool for that. I think it's called -- what is it? Expo Orbit? So this is like in the macOS toolbar. It's also available for Windows by now... Where you can easily launch a simulator, and you can also pull down the builds from EAS and run it on a simulator... So at the last conference where Expo was, they said they're all on like iteration speed, because that's really important to most companies that are building native apps... And so yeah. I mean, you can just imagine, sharing your code is always challenging, especially then for native apps. They have to be built, or... You have a PR something going on, and they're building the tools - the paid tools, of course - to make that easier.

**Jerod Santo:** Right.

**Simon Grimm:** But to be honest, I think I haven't paid for Expo yet, and I'm using a lot of the stuff. I mean, they gave me access to some parts, of course. I did this for some videos. But you don't have to pay for Expo if you just want to create good React Native applications. That's just the truth as well.

**Jerod Santo:** I think you hit on something which is important that I think we web developers often take for granted, is just the ability to iterate and quickly deploy on the web is such a superpower that we live in. It's like the water that we swim in, so we don't think about it... But then you go develop for native, and mobile especially, with the app stores and the review process, and the beta process, which is onerous... And it's so painful compared to the web. And so there's a giant gap there. I mean, of course, the old joke is you SSH into the server, and you're like live editing index.php... Which isn't great development practices, but the fact that you can do that, and then your answer to your user who's reporting the bug is "Refresh the page", and they refresh the page and it's done. We just are used to that. Of course, our build and deploy processes are more than that, generally speaking... But still, you can roll out and you can deploy all day long, 100 times a day. And really, on mobile it's not like that. And so yeah, that gap - I can see where there's a lot of room to make money living in that gap, and bringing web-like development and deployment experience to native developers. People pay for that, because it's really valuable.

**Simon Grimm:** \[00:39:44.17\] Yeah. I mean, there are actually two things to this. So the first is that if you do it the traditional way, as you said, if you have to build an application, you have to submit it to Apple and Google, they will review it, and you can have like a speedy review if there's a critical bug... But you're at least looking at like half a day, or maybe a couple of days... And that's not even thinking about company internal review. In big companies, the review process of like a new push to something can be a week alone as well. So good luck fixing bug in something faster than a week.

Also, Apple might take like five or seven days if you're a big company, because they're checking the whole application, what do you changed. So it's just a nightmare if you have a bug, of course.

But, on the other hand, that's the cool thing about React Native as well... There's something that's called over the air updates. So you can technically replace assets and the JavaScript bundle of your application without going through that process. So as I said, it's called usually over the air updates, or code push, or whatever, if you want to look it up... And of course, you can do it with Expo, so they have a built service for that as well... I don't know what surprising is for this as well, but I know that many companies are using it, of course... Because you can, in that case, instantly fix a bug. But of course, this is only about the JavaScript code. So if you add like a new native plugin, you would have to build a new application and submit that. But still, in many cases, that's enough to fix the bug. You don't need a new plugin; you just forgot that variable somewhere, so it's a quick update... And then the user probably doesn't even notice it.

**Jerod Santo:** What other pain points are there, or are they trying to fix? I would assume automated testing - difficult on native. Are there helps there, or is it still a pain?

**Simon Grimm:** I think for automated testing Expo hasn't done anything yet. I think there's another company called Maestro. They are doing some pretty cool stuff with automated testing. So there were testing frameworks and tools in the past, and they're still used, but Maestro made especially UI testing a lot easier. You can like define click path... And people are quickly jumping onto that. So no, Expo hasn't done anything for that yet. I mean, pain points there are -- there are enough pain points.

**Jerod Santo:** Let's hear them. Let's hear them, because we want to paint a full picture.

**Simon Grimm:** If you look at the -- there's a state of React Native survey, just like there's a state of like web survey, that was done like probably half a year at this point, usually what's at the top of that list is debugging. Debugging and React Native - these words are definitely not friends. So every React Native developer has problems with that... Because on the web, you just bring up the browser tools, the console, and then from there you go. With React Native it has been a lot more challenging. If you open up the applications and something crashes, you're going to see like the worst kind of error log. It's really totally unhelpful. But Expo is improving that as well, so by now you can actually have sort of the web development console debugging with React Native. You can even debug like HTTP calls... So it's kind of sad that I have to mention it, because for web developers this is just standard tooling of the browser... But for React Native this is kind of a new thing. They had their own debuggers, like Flipper, or Reactotron... They all tried to improve the debugging experience, but then you had to like connect to a process, and then you refresh, and then you're disconnected again... So debugging is definitely challenging, and not super-great, but Expo is working on that part as well.

So yeah, that's one of the pain points. I don't know, I haven't looked at the survey for a long time. I don't know what else is at the top. I think what's usually the first complaint of people is that if you get into React Native, there are no real UI components. So on the web -- I don't know, most people are using Tailwind CSS, or something, so your page immediately looks good. With React Native, there's basically nothing. So you have a button, you have a text, you have a text input, you have something, but that's pretty much all. Like, how do I do a list, or how do I put a button in the \[unintelligible 00:43:53.07\]

**Jerod Santo:** That stuff's not in there?

**Simon Grimm:** \[00:43:56.20\] No, it's not in there.

**Jerod Santo:** Really?

**Simon Grimm:** Yeah.

**Jerod Santo:** And it's never gonna be in there? Because - I mean, it's been eight or nine years by now; you would think they would have gotten to their list component...

**Simon Grimm:** I mean, React Native focuses on different things... So this is taken care of by different UI libraries. But they all have different approaches... So to style your React Native applications, you use the stylesheet API, which is basically - it sort of looks like CSS; the names are just like -- what is it called? CamelCase, I guess. It's not like with the dashes, it's like text-aligned, and then the A is capital.

**Jerod Santo:** Yeah, CamelCase, or...

**Simon Grimm:** It's CamelCase, yeah. So this is how you usually style your stuff. But that also means you can't easily copy over your CSS from the web into React Native applications. Maybe with some AI it's probably possible... But if you want just good-looking components, there are many different libraries out there, and you have to spend at least like three days searching through what is the best solution for your use case. I think this is what people really hate when they get started.

**Jerod Santo:** Yeah. That sounds awful. \[laughs\]

**Simon Grimm:** It is, yeah.

**Jerod Santo:** Where's the Tailwind Native? Where's our Tailwind savior?

**Simon Grimm:** Yeah. Actually, that's a thing now as well. It's called Nativewind, which allows you to use Tailwind CSS with React Native. A genius called Mark Lawler has been working on that, and he put a lot of effort into like using actually native stuff under the hood, so animations are possible. If you use Tailwind stuff, then it runs native animations. It's fascinating. So it's coming to React Native, and to be honest, I think it's going to be the future, because people come from the web to React Native most of the time. They know Tailwind, so they will just bring it with them, because - yeah, it's just easy.

**Jerod Santo:** Okay, so that's in the works, but you can't download that and use it today.

**Simon Grimm:** Yeah. I mean, you can use Nativewind. I think it's currently at version three. We're still waiting for version four, which is a big update... But yeah, you can use Nativewind. Just for reference, there are other libraries. One is called Tamagui, which looks very interesting, by the way, the website...

**Jerod Santo:** Tamagui?

**Simon Grimm:** Yeah. Have you heard of it?

**Jerod Santo:** No, it just is a weird word. I was just wondering -- is it GUI?

**Simon Grimm:** Yeah, look at the website. It looks awesome.

**Jerod Santo:** Okay. How do you spell that?

**Simon Grimm:** Just like I said, Tamagui.

**Jerod Santo:** Okay. Just like you said, Tamagui. Just sound it out, Jerod. Tamagui.

**Simon Grimm:** Tamagui.dev, yeah.

**Jerod Santo:** Oh, .dev. Like a fool, I went to the .com.

**Simon Grimm:** Yeah. Every cool kid uses .dev.

**Jerod Santo:** Like an old man.

**Simon Grimm:** \[laughs\] Look at .net. It's probably free.

**Jerod Santo:** Yeah, probably.

**Simon Grimm:** Yeah, I mean, that's just the thing that people might not like about React Native, something to get used to. And that's the thing -- you start a Flutter application, which I've also done. I've taken a look at -- Flutter, for those who don't know, is a cross-platform framework from Google. You write Dart, you get native applications, basically. You use Flutter, you have all these components; you have instant access to a variety of components. You're going to feel like you're in the paradise of UI components... And you don't have that with React Native. But there are downsides to Flutter as well. By the way, that's one thing I forgot in the beginning, when I was like saying "Oh, Capacitor is bad, and Flutter is bad." All of these three approaches have their applications. You can build for specific use cases really good applications with all of them. I'm just at this point the biggest fan of React Native, because I think most applications today should be built, because you get like "It's React, it's solid..." Not Solid. The solid thing; it's solid in itself. And you get like the native components. But with Capacitor, for example, this web approach, many business to -- is it b2b? I think b2b, or company internal tools are built with that, because they probably have a web application, and they just want to throw up something quickly for internal use - then no problem. Like, nobody cares if your app loads in one second or two seconds, or if the one transition or the shadow isn't correct. Nobody cares about that. You can build great stuff with that. And with Flutter, the interesting thing is -- I think you kind of mentioned this in the beginning... Because of this pixel-perfect drawing stuff, you can build applications that look exactly the same on iOS and Android. If I use React Native, my app definitely will look different. But for example, BMW is using Flutter for their app, because they have a very specific brand experience, and that should exactly be the same wherever the BMW app runs.

\[00:48:23.02\] So they all make sense in some case, and that's always -- people ask me "Simon, what is the best framework? Is Flutter better than React Native? It's so popular. Is React Native good?" There's no easy answer to this, I'm sorry. As always, it depends.

**Jerod Santo:** As always. It always does. Well, you have some answers on Galaxies.dev. Let's close up by talking about your training, your tutorials, what you're trying to do... It looks like you're trying to make a run at making a business out of this, so that's cool... You've got your YouTube channel... What are you up to with Galaxies.dev?

**Simon Grimm:** I'm trying to provide people with a shortcut to learn React Native at this point. I have tons of free material, and I completely understand if people can't pay for a paid membership... So feel free to check out the - I don't know how many videos on my YouTube channel. But on Galaxies I've just more structured courses on specific topics around React Native. So whether it is about push notifications, about routing, deep links, building your own native modules... I have tons of structured courses, and I'm a big fan of like just providing the most essential information in these courses to get you going.

So my courses are usually in the range of like two hours, because I'm super-intimidated -- if there's a course 30 hours, I know that I won't take it. I know people love these Udemy courses. "We have 100 hours of something", and then like after five hours they will just like vanish and not take a look at it again. So I'm just trying to take a really practical approach, help people get quickly into React Native, and then continue to help them through our community, answer questions, and provide the support they need... Because you eventually will hit roadblocks, and you're gonna have questions... Especially people coming from the web to React Native, it's just a mindset shift in general if you build native applications. It's not just that the screen is smaller, there are just a lot of things that work, different gestures, and concepts, and not even touching the App Store process, which can be its own story.

So, yeah, that's what I'm trying to do with Galaxies, and so far it's been pretty great. I think we have about -- I don't know, I haven't looked up the numbers, but probably like 10,003 members so far... And also many, many pro members. So I'm really happy to build this out, and I'm definitely not yet finished... Because - I don't know, do we have five minutes to talk about like the future of React Native as well?

**Jerod Santo:** Absolutely.

**Simon Grimm:** Yeah. So what's coming in the future to React Native? Cool that you asked. \[laughter\] It's so funny, I usually do like the questions, and now I'm sitting here... I don't know if I like it more to -- it's actually easier to be the podcast host, because...

**Jerod Santo:** A hundred percent.

**Simon Grimm:** ...you just introduce 20 seconds of a question, and then you sit back and like you drink a bit of coffee...

**Jerod Santo:** It's so easy. I'm just over here, I'm having some coffee, I'm scrolling your website... I'm letting you rock and roll, Simon. Well, you know, every once in a while the podcast host drops the ball, and the guest has to ask themselves a question, you know? And so they might say, "Hey, self, what's the future of React Native look like?" But every once in a while, the host then adjusts and picks the ball back up and asks "Simon, what is the future of React Native? What's it looking like out there?

**Simon Grimm:** Oh, cool that you asked. That's a good question. So just recently, Evan Bacon - again, creator of Expo Router - made a pretty cool demo of using React Server Components with React Native. Okay, you'll probably have to think about that... \[laughs\]

**Jerod Santo:** Okay, I'm getting nervous now. I'm getting nervous.

**Simon Grimm:** \[00:51:54.19\] Okay, so these things -- we probably don't have to get too technical. And also, this is not yet ready. This is maybe end of this year, or like 2025, because Expo, of course, will provide us some hosting for the server components, so they can make probably a business model out of that. But he made a demo, and it's actually possible to like stream back these components, the code from the server to your app, and then within your app actually render native components. So on top of having code push available to fix your bugs, you then have another way of building more dynamic applications, because of course, you can change what's coming from the server pretty easily. So this is one thing coming to React Native.

As we touched on the React Strict DOM - it's experimental, but I'm curious where Meta is taking this in the future. If maybe at some point will they have like a unified language or syntax to create both native and web applications... Expo Router is pushing forward. I think they're going to do like one more major version, and then it's like really stable. They have planned this for four versions, and we're currently at 3.5... So at that point, you're going to have a really stable file-based routing, by the way. This is, once again, one of these funny things - you can actually have API routes with Expo Router already. You just need to take care of deploying them somewhere, because you can't deploy API routes in your native app... But you can technically have the code in your React Native application. You can have like an API folder, "define my git post", whatever in there, and then deploy it. So you have all the code in one repository.

**Jerod Santo:** Just no API to serve it from.

**Simon Grimm:** Yeah.

**Jerod Santo:** Alright.

**Simon Grimm:** So all these things, React Native server components, file-based routing, the improvements of Expo to debugging, the involvement of Microsoft, Meta and Amazon, Shopify, everyone in the React Native community... It's just very vibrant. And the last thing I want to mention is that at this point they're also rolling out something called the new architecture, which we definitely don't have to get into right now... But easily speaking, as I said in the beginning, there's this bridge in React Native applications. So from your JavaScript/React code you communicate with Swift and Kotlin. And through that bridge, you kind of have to like unify it all the time, the messages, with JSON; so they're like transformed to JSON, and then sent back. You can imagine that that is slow. And this was always a bottleneck of React Native applications. And for the last years, Meta and the whole community have been working on this new architecture, which basically completely gets rid of this model. You have like JSI, and code generation, and a lot of C++ going on to make that a whole lot faster. And this is by now becoming the new default. It's just not the default of all the plugins existing in the ecosystem; so many authors have to embrace this. But I kind of feel or hope that once the new architecture is completely there, and like the last rough edges are burned out, that - I don't know, maybe React Native can go to version one. Because we're still at 0.75 at this point.

**Jerod Santo:** Wow. Really? Well, before 1.0 is a good time to make major architectural changes, you know? So I'll give them credit for that. They didn't jump the gun on 1.0.

**Simon Grimm:** Honestly, I'm a bit concerned as well, because it's probably not that hard in the end. But if people hear about "Oh, a new architecture in React Native?", they're going to be really, really scared, especially like after all that time... But I really hope they put out the right messages and the right content around this, and... I don't know, they're following this strange versioning scheme, so I have no idea if they're gonna do version 1.0. I just would hope that it would give a signal to all the companies and people in the world that "Hey, React Native is now ready for primetime."

**Jerod Santo:** Yeah. Well, that would be cool. Let's see - well, all the links to all the things... I've got Galaxies, Evan Bacon, Tamagui... I've found it, Tamagui. React Strict on Expo, of course... And we'll link up Simon's YouTube channel as well. Is that the best way probably just to keep up generally with what's going on in the React Native world? Because I assume you're posting videos a lot of when the new architecture gets adopted, or when this brand new native \[unintelligible 00:56:17.00\] thing that's going to change the world goes official... Like, you're dropping videos a lot, right?

**Simon Grimm:** It might look like this. Yeah, I drop one video per week on my channel, Galaxies\_dev on YouTube, and every other week I release a podcast episode on the podcast, on the Rocket Ship Podcast... So if you enjoy listening to podcasts and want to learn more about React Native, check it out. We have casual interviews coming every other week. And yeah, just trying to keep the React Native community updated with my videos.

**Jerod Santo:** Love it. Awesome. Well, for Simon Grimm, I'm Jerod, this is JS Party, and we'll catch you all on the next one.
