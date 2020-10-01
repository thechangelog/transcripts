**Jerod Santo:** Doesn't the sound of that music just make you wanna kind of dance and have a party...? It does me. I'm excited for a JS Party. That means it always gets it going, and we are excited to have everyone here with us again this week.

We have an awesome panel, per the usual... And joining me today is Suz Hinton. Hey, Suz.

**Suz Hinton:** Hey, it's great to be back for another episode.

**Jerod Santo:** Excited to have you. Nick Nisi is here. What's up, Nick?

**Nick Nisi:** Hoy, hoy.

**Jerod Santo:** And last but certainly not least is Divya. Hey, Divya, what's up?

**Divya Sasidharan:** Heey!

**Jerod Santo:** Well, today we thought we would start with what's new and what's noteworthy - things going on around the JavaScript and web ecosystem. Some of these things might be new, some might just be noteworthy... Things that we thought might be interesting to talk about, and we thought we'd kick it off with what seems like to me is -- I don't know, it seemed like the coolest thing that I ran across recently, which is that the Caniuse team and the MDN (Mozilla Developer Network, I think MDN stands for) team are collaborating.

Way back in the day, Caniuse started collecting compatibility data on which features can be supported on which browsers, and then also Mozilla started collecting similar, but different, but similar, but different data on compatibility... And these were efforts that were running alongside each other, and really kind of duplicated efforts for a very long time.

Well, they're announcing -- Florian Scholz and Alexis Deveria from Mozilla wrote a blog post September 9th that Caniuse and MDN compatibility data are now gonna be collaborated on. So they're no longer going to be completely separate ecosystems. They're not gonna be merged and doing the exact same data, but they're gonna be integrated, which seems like a big deal... And really just a win for working together on the web. So this seems like a pretty cool thing to find out about.

Anybody have additional context you'd like to add to this story? Of course, all links in the show notes; for those who wanna read the announcement from Mozilla's site, we'll link that up. But Caniuse has been going along for a long time, ten years... Which surprises me; it made me feel a little bit old... Like, "Dang, I've been around all that time." And then MDN has been doing their effort for two years, so it's nice to just see some collaboration happening.

**Suz Hinton:** \[00:03:59.11\] Yeah... I sort of instinctually reach for Caniuse all the time, and I usually expect it to have very specific data in there, and sometimes I forget that it doesn't have everything; it's got mostly high-level browser APIs. I think that being able to have a single source of truth is actually really awesome. You can just look stuff up so quickly, especially when you're in the middle of a meeting and there's some kind of bikeshedding going on about something; you can just fix it straight away.

**Jerod Santo:** For sure. It seems like the difference in the data in terms of context was Caniuse - Suz, like you said - was kind of more high-level, like "Here's a big-picture feature", and then how does it work in the browsers and all the compatibility... And the Mozilla folks were much more granular, very specific APIs and their compatibility. So they've been running alongside each other, and there's overlap there, but there's not a one-to-one. They've always had these little bit different angles because of their use cases.

So what's gonna happen now is you can go to Caniuse and you can search their tables, but they're going to add the MDN data into the Caniuse website. Is that right?

**Suz Hinton:** Yeah.

**Jerod Santo:** I'm curious if this goes the other direction as well, when you're using the MDN stuff. The MDN data I think surfaces itself in other tools, not just on the Mozilla Developer Network... Which has finally eclipsed W3Schools in most searches, which was awesome...

**Suz Hinton:** \[laughs\]

**Jerod Santo:** ...because W3Schools was the dominant search results, with the least useful (in my humble opinion) website.

**Suz Hinton:** True. No, you don't have to type in "topic mdn" or "mdn;topic", or something like that.

**Jerod Santo:** Yeah, it's pretty nice. And I remember when MDN first launched, they even had a specific goal of "Hey, let's replace W3Schools." So there was like a hotlinking campaign... Or not hotliking, that's the wrong term. Backlinking. Like "Go link to us from your developer blog in order to increase our pagerank", and we all, like sheep, obliged to link to that website... And hey, it paid off for us sheeple. So that's a cool development...

One of the things that's happening is there's the Caniuse repo, and then there's the MDN compat data repo, and they've all (like I said) been working side-by-side, and they're gonna start to have collaboration across those, so I think people who have been contributing to Caniuse are gonna start doing the other side, and vice-versa... So it's data sharing, it's also just effort sharing, which hopefully will push the industry forward in a way that's less effort than it has been so far.

**Nick Nisi:** Yeah, I hope it'll lead to the development of more tools that can use that data.

**Jerod Santo:** Absolutely. One of the things that I've thought of with Caniuse is how myopic I can be as an engineer... Because I've used the Caniuse website all the time (it's ingrained), and I never once thought - probably everybody else thought this but me - like "What if this was just data that I could integrate into a tool and access from another place? I'm just like "We've got the website... Why would you want an API, or why would you want the raw data?" And then I started seeing what people started doing with the raw data and with the compatibility tables as data, versus as the website, and I'm like "Oh yeah, I'm kind of a shortsighted person, because this is way better."

**Nick Nisi:** Can you give an example?

**Jerod Santo:** Oh, an example... Basically, in-editor compatibility information. In VS Code or Sublime Text, where they start to pull in the compatibility right there in your editor, versus saying "Can I use this? Okay, Caniuse.com", and just going out and typing it in. You can get it right there, in your editor. That's one example. I think there are others that have crossed my radar, where I was like "That's cool!" I haven't necessarily used them myself, but... There's so many things you can do once you have it as JSON, or whatever.

**Divya Sasidharan:** \[00:07:53.13\] I use the Caniuse Alfred workflow, just because it's really nice to be able to just, as I'm typing something in VS Code - then I can just do Caniuse. It still pulls you to the site to look for stats, but it's a better way than going to your browser, and then creating a tab... It's multiple clicks, versus just one very quick shortcut.

**Suz Hinton:** Yeah, I can imagine being in Vim and being able to just highlight a word and then hit a macro or something, and it just pops up the page. It would be just as convenient, which would be awesome. I actually didn't know that there was an Alfred workflow. Today I learned. That's actually quite exciting; I might install that.

**Divya Sasidharan:** Yeah, I use Alfred for a lot of things. I use Dash as well for documentation lookup, just because it's really fast, and that gives me an excuse to never ever have to go to a website and a doc page ever.

**Jerod Santo:** So in the next bit of nerdy, video game-focused developer news - at long last, Mario has come to HTML. This is an unofficial port of Mario Brothers game to HTML -- really to JavaScript and HTML... To the Canvas, so it's definitely to HTML. But Nintendo did not sponsor this effort, and I bet if they found out about it -- well, maybe they would be nice about it, but they could definitely do a DMCA takedown if they wanted to... But very cool. Did you all check that link that I put into the show notes and play a little bit of Mario right there in your browser?

**Nick Nisi:** No playing.

**Suz Hinton:** I think it's interesting to look at the source code of a game with TypeScript. I think I'm used to seeing websites or web apps written in Typescript, but just looking at how it can be used in order to create better stability and things like that in games - I think it's actually a really interesting angle.

**Jerod Santo:** Any time I look at game code I think it's interesting, because it's so different to the code that I'm used to writing from an application perspective. It gives me a little bit of impostor syndrome, like "Am I even good enough to be reading this...?" But then I'm like "No, I can read this. Yeah, I guess I can read it. I don't know if I can write it, but..." It's cool nonetheless, and definitely just a different style, just different concerns, that I'm not used to addressing in my day-to-day.

**Suz Hinton:** I had trouble with this, because actually a lot of the initial programming that I did was related to games, or was related to something that basically had to always be performing in a loop. Even embedded hardware is exactly the same - you have your setup and your update functions... So it was very difficult for me to cross into things like CRUD applications, and even things like MVC, because I was like "This is so completely different to what I'm used to." I actually found the game programming more comforting for a while, just because it was what I knew. So it's really interesting hearing that you see the other way around, Jerod.

**Jerod Santo:** Yeah. Different foundations tend to have different perspectives, for sure. One thing I said jokingly about this on Changelog News is we have seen Nintendo start to port their games -- not port, that's the wrong term... Create games, based on their characters and their previous intellectual property, to mobile platforms. Dr. Mario World is on iOS, probably Android as well. Mario Kart also is coming soon to mobile devices... And I jokingly said "Well, here's Mario in html maybe it's time that they consider the web platform as their next platform", because they've moved from their own devices now to mobile devices, somebody else's platform.

But taking that joke seriously... Are things holding the web back that would stop Nintendo from actually being able to -- I mean, this is a simplified version of Mario World, of course; an 8-bit game from back in the '80s. We have seen some good web games out there, and frameworks and whatnot to help create those kind of games, but what about the games at a level of polish that a Nintendo would require...? Do you think they would ever consider the web as a potential platform?

**Divya Sasidharan:** \[00:11:49.22\] I think it was an interesting thing that happened a couple of years ago with WebAssembly coming to the fore... And one of the pivotal examples to show the strength of that platform was the idea of porting a game that was built in Unity into WebAssembly without having to write additional code... Because a lot of the times when your application or when you have a game that's already written for a specific framework, you have to rewrite everything because it's a different paradigm and a different platform, so that takes a lot of work... But then I think with WebAssembly -- basically, that example of porting a game showed that it was possible to take an existing codebase written in a completely different language and platform and then just port it over to the web, and it runs as quickly as it would in a native environment... Which I think is really cool.

I know very little about the gaming industry, but from my understanding, it seems like the route that a lot of companies will take if they wanted to port a game over to the web -- obviously, there's a couple of edge cases that they might have to deal with here and there, but that's probably the fastest way to do it, without having to completely rebuild the game from scratch for the web.

**Nick Nisi:** It does seem like the game industry is going in a direction that would align with this as well, with things like Google's Stadia... Where you don't actually own the console locally, but it's like a subscription, and then the console's running in the cloud somewhere. There's talk about what that might be like for the Playstation 5, and I know Xbox has their own version of that, where basically you play your games, and maybe you have a console locally, but you can play them on your phone or on your iPad, or wherever, and maybe the web is just one more place that you can do that. It's definitely catching up to be that kind of outlet, which would be really nice, being able to not have to download an app, and just stream a game locally... But I think the big thing holding that back for really big games is probably just network latency at this point. Maybe that's where having a Playstation locally still, and then just streaming to your phone fixes that for now.

**Jerod Santo:** The other side of that equation is really the payment processing and the requirement of payment. When you're shipping everything you have into the browser runtime, it's difficult to have secrets... It's a cat and mouse game with web-based things. It is with non-web-based things as well, but there's just less hiding with the web, because so much depends on the browser context, which is really in the hands of the user... Whereas in any console it's a black box to the user. You have to actually open it up to hack it. So perhaps the real Mario is not coming soon to HTML... Time will tell.

Let's move on to Nick-related news, because it's TypeScript-related news. \[laughter\] Nick has become the embodiment of TypeScript on JS Party. Congratulations, Nick. This was a cool thing to see... This happened just this week - Google has chimed in on TypeScript 3.5. Noteworthy to me because it's just interesting to see basically industry giants (Microsoft and Google) in the open source world, working on this thing that has so much interest from different parties... And here they are, providing Google-style feedback to a Microsoft-backed open source project that so many people use.

This was on GitHub issues, and they said \[unintelligible 00:15:18.06\] "We recently upgraded Google to use TypeScript 3.5. Here's some feedback on the upgrade." And then I like this part "For background, recall that Google is a monorepo of billions of lines of code. We use a single version of TypeScript, and a single set of compiler flags across all teams, and upgrade these simultaneously for everyone." So you can see the scale at which they're operating that there.

And then they provide a whole bunch of things that I didn't read, because it's TypeScript. I don't care. Just kidding, Nick...

**Nick Nisi:** I'm shocked.

**Jerod Santo:** Maybe, Nick, you can flesh out some context here. Is this good advice? Are these things that would only ever hit Google? I don't know how far you were into this list of recommendations.

**Nick Nisi:** \[00:15:58.03\] Yeah, I read them. It was cool, and I think that the big, cool thing about this is exactly what you've just read, where Google is using a monorepo and everything is in there. I can't say for sure, because I don't work at Google, but I assume that the person or team tasked with upgrading to TypeScript 3.5 had to go and fix all of the issues across billions of lines of code, that upgrading would bring forth. So it was a big task, and that is kind of a unique insight that only a Google or a Facebook or some big company using a big monorepo for everything can give you all at once. They can say "We upgraded to this version, and this is specifically what broke."

I did read the comments, and it more or less all stemmed from the first one, which is kind of a breaking change that they had for generics, where if you don't specify what a generic value is, before it would just basically assign that to be an empty object; that's what it would assume, and if you didn't explicitly say that this generic extends something else, then it would just extend an empty object. So things like the default functions that are available on all objects, like toString(), are always going to be available. But in 3.5 they've changed that to instead implicitly be the unknown type... Which can be anything still, except really null or undefined, is what it said there.

So it kind of narrowed the type a little bit, so things like expecting the toString() function to be on anything is not necessarily true, because it might be on null or undefined. That function would not be on null or undefined, and then it would throw an error. So it was narrowing the type, and that had some unintended consequences, which seemed to be most of what the feedback was about.

The thing I really liked about it was they described the problems they were having with some simple examples and some real-world examples... And they offered suggestions about what the TypeScript team could do in the future to help mitigate this, or ways that they could fix this. So they came with solutions, and not just problems.

**Suz Hinton:** I like that you called that out, because it was an incredibly diplomatic example of how to do open source, and I took a few notes just from that alone, beyond just the technical content, which I also thought was really well done.

**Jerod Santo:** The theme of this new-noteworthy is collaboration. We have Caniuse and MDN collaborating, we have Google and Microsoft collaborating... It reminds me of the end of Rocky IV. Has anybody seen Rocky IV? "If I can change... And yous can change... WE ALL CAN CHANGE!" That's my Rocky IV. \[laughter\]

**Suz Hinton:** I'm impressed you made it that far through the series. I thought that by the time you get to four, like whatever the Fast and Furious IV was...

**Jerod Santo:** Right... Well, I did not make it that far through Fast and Furious, but Rocky I definitely did, probably due to my age. I will say that Rocky IV has probably more -- what's the word... What's the word when there's music -- oh, montage. It has more montage per capita than probably any movie in history.

**Suz Hinton:** Amazing. Their montage is iconic.

**Jerod Santo:** Yes, and they just decided to go all-montage for Rocky IV. A huge portion of that movie is a montage, so...

**Nick Nisi:** I've never seen any Rocky, but now I just wanna see Rocky IV.

**Jerod Santo:** I highly recommend it, especially the end, because then you can judge my impersonation there and tell me how good it was.

**Suz Hinton:** \[laughs\]

**Jerod Santo:** Moving on... Firefox dev tools as inactive CSS overlay. This is pretty cool, I just saw this today. It's a new feature in Firefox dev tools that we will link in the show notes, because you wanna get the image; they provide an image in the tweet. Click through to the link to see the tweet there... Where in a CSS paint where it shows what CSS is applied to the particular element that you have in focus in your dev tools, they will now show you CSS that you have applied but isn't doing anything. So it's inactive CSS. And the best part is it they'll actually tell you why. And this is example is awesome...

\[00:20:13.27\] They have a flex-grow applied to it, and it says "Flex-grow has no effect on this element, since it's not a flex item." So they've applied flex-grow, but they forgot to put flex whatever, display flex... So it's just like "Hey, this doesn't do anything, so it's basically worthless code at this point. Go ahead and go fix that." It's such a cool -- it seems almost like... You know when things are obvious in retrospect? You're like "Of course we've always wanted this... I just didn't think of it." Am I the only one that's that excited about this feature, or is this pretty cool?

**Divya Sasidharan:** I think it's cool. Then it prevents us from having to do like "color: red", and various things in CSS \[laughter\]

**Jerod Santo:** Exactly.

**Divya Sasidharan:** It's such a great feature, because there are lots of times where you're debugging CSS and you don't know how things are working, or if things are working, and then you end up with a lot of redundant CSS. Sometimes you end up with codebases that have duplicates of multiple things, because earlier you wrote "border 1 pixel, solid black", and then later you wrote "1 pixel, solid dotted", or something else. That's probably not what people write, because that's very obvious... Like, position--

**Jerod Santo:** \[laughs\] Masochists might write that.

**Divya Sasidharan:** Yeah, exactly. \[laughs\] I think position, display, things like that are common properties that tend to be repeated. I actually just realized -- right before this call I was writing some CSS and I wrote content twice for a pseudo-property, pseudo-element... It was really dumb. Had I used the Firefox dev tools, it would have told me. I don't know, actually - does it tell you about redundancy?

**Jerod Santo:** I don't know. My level of knowledge is -- I'm at tweet levels of knowledge at this point. I saw the tweet and then I clicked the link, and that's where I'm sitting.

**Divya Sasidharan:** \[laughs\]

**Jerod Santo:** I haven't used it yet. I just saw this today and threw it in our notes. The other thing, speaking of collaboration, just to stay on theme now, is that the Chrome DevTools Twitter account tweeted this - or quote-tweeted it - and said something...

**Nick Nisi:** "Congratulations, Firefox dev tools. Great feature."

**Jerod Santo:** Yeah, very good. Thank you for pulling that in. So yeah, they're congratulating, they're seeing this... And really, this is the healthy competition collaboration that's happening when we have multiple teams working on things, to level up everybody and give everybody ideas. It's like "This idea should spread to Chrome", and that's the top reply to the tweet from the Firefox dev tools. "Hey, Chrome, we need this feature, as soon as you can." And it's like, "Yeah, good ideas should propagate", so that's cool.

**Nick Nisi:** I came across this not because I follow Chrome DevTools or Firefox dev tools on Twitter, but because I follow Horse JS. \[laughter\] The tweet was "Congratulations, Firefox dev tools. Great!" \[laughter\] So then I also follow Horseplain, which explains which tweet that was coming from... And it was this one. I don't know if it was just because of the way I came to it, that I just read this like a snarky thing from Chrome DevTools - "Great feature, whatever..." But it's probably not.

**Suz Hinton:** Adam Argyle, who is listening to our stream, says "They feel like the value is telling us why, not just that it's unused", and I think that's the valuable thing. And I agree with Divya about just catching you out on especially things like display, or positioning, or... Flexbox is the perfect example; that's why they had a screenshot of that.

And I had an example of this last week, where I was introduced to a brand new patent library, brand new components that I'd never seen before, that are very much plug-and-play, so that we can create a consistent user interface... But if you wanna put a couple of overrides on it just for convenience, there's a way to do that. But at the same time, you're not always privy to exactly every single property that's been applied to those components, just because they are like a basically copy-paste, plug-and-play set of React components.

\[00:24:04.03\] So this would have been so helpful to me last week if I'd known about it... Because I was sitting in the dev tools, looking at the CSS, and saying "Why is my stuff not overriding this correctly?" And I had to basically pick apart every single little property, to see "Well, is my top property not working because it has the default positioning attribute applied to it?", and things like that. So this is actually a life-saver, the more we start compartmentalizing reusable components especially.

**Divya Sasidharan:** I think it's also interesting to consider - and I don't have the answer to this, but how that would work with CSS-in-JS and CSS Modules, and things like that... Because a lot of the times, whenever you write CSS in a different style sheet, something that's more specific will override it. So this particular feature talks about specific properties that are not being applied properly, and gives you suggestions on what to do. And it'd be cool if it did like "Hey, there's another thing that's also overriding the thing that you're trying to do..." Because that tends to happen.

I was working on VuePress recently, and I was running into this issue where we would create components, but then it was like -- a single-file component, it was essentially that CSS overrides any other style sheet, because that is super-specific, because it gets the hash value. Very annoying, very frustrating, because then you're like -- I mean, you come to the point of almost wanting to do !important, just to add the style... \[laughter\] Which goes against writing CSS properly in the first place.

**Suz Hinton:** This reminds me of when you're playing Pokémon and you have an electric Pokémon versus a water Pokémon, and you try an attack... Maybe the water Pokémon tries something against the electric, and it wasn't very effective... \[laughs\] \[unintelligible 00:25:48.22\] actually goes forward and it actually explains why, rather than just "Yeah, that flopped."

**Jerod Santo:** Yeah, exactly.

**Break:** \[00:26:00.15\]

**Jerod Santo:** We learn things, as developers... Hopefully we're all moving, advancing, leveling up, learning stuff. Everybody knows that you learn things every day, hopefully. And "Today I learned" is a new segment we're trying... In which we share things that we've learned today... Or recently, because that would be a tall order; we're not even halfway through the day. Anyways, let's talk about things that we've learned recently.

I'll go first, to set the stage. I learned just recently - it wasn't today, but very recently - that the getUserMedia() function on the navigator object inside your local browser, especially if that browser happens to be Safari, does not work anymore. And I learned that because my code that was in production stopped working. And I should have known that a long time ago, because MDN tells you "It's been deprecated for a long time, y'all." I don't know how long, but it's probably been a couple of years deprecated.

**Suz Hinton:** It's been a long time. That's been popping up in your console for quite a while, too. I think that at least the current dev tools would bring up that little yellow warning, saying "By the way, you should really start using nesting."

**Jerod Santo:** \[00:27:58.17\] Yes... A little bit to my defense, this is code that has been in production for a while, and is not actively maintained in terms of I'm not adding things to it... So I'm not in that code on a day-to-day basis. It's like, it's in production... Basically, I should say that the getUserMedia() API is used to get access to webcams or audio streams inside of the browser. So I have a client application that uses the webcam in order to scan some QR codes, to do check-ins and outs of books into school classes. So it's just kind of been out there in production; I haven't been actively making changes until the day that it broke.

The funny thing is that the report back was "This no longer works." Actually, it wasn't "This no longer works", it was "We've tried to --" Basically, the way this school program works is we basically just say "You should use Chrome." Because it's that kind of an app, where we can just say "Use the latest Chrome and everything will be fine."

Well, some classrooms only have iPads, and "Can we get this working on iPads?" And I was like "Well, it pretty much should." Safari has had that access to the webcam for a while now in iOS, so it should work just fine. And they went out and tried different versions of mobile Safari on 12.1, 12.4... The funny thing is it stopped working and then it started working on 12.1.4, or something like this (weird), and then it stopped again. So the request back from the client was "Should we have an iPad app? Because we wanna be able to do this on iPads, but we can't do it in mobile Safari, because it isn't a thing." So then I went to the console and I was like "Well, that's because this is no longer a thing."

Anyways, long story short - I learned that you should not use Navigatorget.getUserMedia(), you should use MediaDevices .getUserMedia(), because that's the new shiny way of doing it... And it has a promise-based API, and is the golden path forward. So I just swapped it in there, gotten to the code and swapped it out, everything started working again, and I said "See, we don't need the iPad app now."

So if you're using the old one, you should make that switch. "Do not ignore deprecations for years and years" is the other long story short. So... There were go. Nick, how about you? What have you learned lately?

**Nick Nisi:** Oh, man... Kind of along the same vein of things that are deprecated that I didn't realize - I was working on an app and testing it on iOS; I accidentally double-tapped and it zoomed in, and I'm like "This is a responsive app. I don't want it to zoom." So I was like "Hey, I should add the meta tag that prevents user zooming, so you can't pinch to zoom or double-tap... And I mentioned that in the work Slack, I was just like "I'm just gonna add this." I went to add it, and it was already there. It was at that point that I realized that it actually no longer works, because it is an accessibility nightmare. So you can't prevent someone from zooming in if they want to on mobile devices, with that meta tag. So yeah, that is something that I learned; I'm using outdated technology as well. \[laughter\]

**Jerod Santo:** I'm not alone...!

**Suz Hinton:** When you said that you were trying to disable it, I didn't actually know that it stopped working as well, and in my head I was like "But accessibility...! No way you do that!" \[laughter\] So that makes me really happy.

**Nick Nisi:** Well, I don't know... The apps looks good. I was assuming on iOS if you set your font size to be bigger, than would apply to Safari as well, so maybe you wouldn't need to zoom in... I don't know, I'm not thinking deeply enough about accessibility issues on this particular case. I know there's several issues I'm overlooking, but... Yeah, so it doesn't work, and you can't stop someone  which is good for accessibility, and it's okay for that anyway; the app still works fine. I can just no double-tap or zoom out when I do.

**Suz Hinton:** \[00:32:01.28\] To a degree, you have to have boundaries where you give up control, and just be like "You know what - it's okay if the site fails because of some strange thing", that the user did for their own purposes of being able to actually use your app.

**Jerod Santo:** Good advice. Funny how accessibility is the first thing that you just toss out the window, and you're like "You know what, I don't need this anymore. It was a nice-to-have, not a need-to-have."

**Divya Sasidharan:** It's added to the backlog often...

**Jerod Santo:** Yeah.

**Divya Sasidharan:** You're like "We should create accessibility...!" I mean, I'm guilty of that on an application we're work on now, where it's like "Nice to have, but not post-release..."

**Jerod Santo:** Right. That's a problem. It's a hard thing to sell a business use case; or not use case, but business value. We know that the value is there, but it's hard to argue for that in a successful manner, because it's hard to see that value. Anyways... Suz, TIL. What did you learn lately?

**Suz Hinton:** Mine's actually accessibility-related... Yaay!

**Jerod Santo:** Yaay! \[laughter\]

**Suz Hinton:** I had some time off recently, and I was trying to just do a little bit of TLC on a GitHub repository. We actually were running automated accessibility tests for a while, and because I wrote a lot of the base HTML, it was very semantic HTML, which most of the time means that it's very accessible by default. So when we installed the automated accessibility testing, everything basically passed, and we'd already run it through accessibility insights, which is like a browser extension that uses XCore in the background. XCore is the backbone of a lot of automated static analysis testing for accessibility... And it had already passed all of that; so we were like "Cool, let's just turn on the tests, so that now we can actually start failing CI builds", and things like that. And what we didn't realize was that the way that we had installed the automatic accessibility testing, we were using XCore on a Vue.js-powered website, and it was actually just like passing it when it wasn't actually looking at the HTML at all... \[laughs\] So that's why things were passing. So I ended up just spending time repairing that and actually getting it to run.

Then once I actually got it to run, I got a really super-unexpected failure... So what I learned was I used jest-axe, which is kind of just like the Jest wrapper around XCore tests; so I used that and it failed on -- when you have a form, and you have a text input, for accessibility purposes you should always have a label tag that actually is connected to the input to describe what it is. So if it's first name, for example, then the label's text content would be a first name.

You can do this in a couple of different ways to link the inputs together, just in case people don't know... So you can have a label tag and an input tag, and then you can basically put an ID attribute on the input tag. And then on the label tag you have a for attribute, and you just match that ID. That links them together, so that when somebody is using a ScreenMeeter, or tapping around through the website, they actually know what that input field is and what they need to enter.

But there's another way you can do it which is still valid, which is you can create your label tag and then you can actually nest the input inside the set of label tags. That's what I was doing in the Vue app, because it sort of considered -- I don't know, it seems like it's a slightly more modern way to do it. And it was failing on that, randomly, and I had no idea that XCore will fail you if you have it nested in there, even though it's a valid way to do it. So I still wanna look into that...

I know this is a very oddly, extremely specific, odd Today I Learned, but I had no idea that that would actually be a natural failure... So I wonder if that's just the defaults in XCore or something, but I need to actually look into that more.

**Jerod Santo:** It sounds like a quintessential TIL right there. Good job. Divya, now that Suz has given the quintessential one, try following that... \[laughter\] Just kidding. But it is your turn. \[laughs\]

**Divya Sasidharan:** \[00:36:04.08\] Yeah, so I've been reading a lot on authentication and authorization, and there's various protocols. OAuth2 is the standard at this point; it's been for almost a decade, so there's various specificities around OAuth and the standard. People talk about it... And of course, it changes for each platform. The web has their version of OAuth, and then if you use a mobile app, it has a difference, slight variation for OAuth, because there's no way to securely store a client secret without exposing it, so there's specific tweaks to it. I think the mobile one is called Proof Key for Code Exchange. So I was reading that, and then I was like "Oh, okay, PKCE", and then I was listening to a podcast and someone called it "pixie". I was very confused, because I was like "What? Pixie? I've never heard it." Then I just kept googling pixie, and PixiJS kept coming up... \[laughs\] I was like, "I don't understand...!"

And then it just took a while for me to put those two things together to understand "Okay, this person was talking about mobile auth, and refers to it as pixie, so I think (I can deduce) that this is what they're talking about."

So that was kind of -- it's very specific. It feels weird, because in a way, me knowing it's called Pixie is not relevant at all... Just because I can still do my thing, I can still use it...

**Jerod Santo:** I can still do my thing...

**Divya Sasidharan:** Yeah, and I don't need to know how it's said. It's like saying gif \[jiff\] versus gif \[giff\], you can say it however you want, but it's still...

**Jerod Santo:** Well, not really though. \[laughs\] Just kidding.

**Divya Sasidharan:** Well, then...

**Jerod Santo:** I was like "Well, but there is a correct way... And it rhymes with gif." It does strike a chord and speaks to something that happens a lot with us as developers - we read things more than we hear them, and we type them more than we say them... So oftentimes - and this is an experience as a podcaster that I've run into time and time again - we don't actually know how stuff is pronounced lots of the times... Or we all just kind of like make up our own -- you just kind of read it and sound it out, and then when you're finally saying it aloud to somebody for the first time, you get all self-conscious, like "Am I saying this correctly? Because this sounds strange..."

**Divya Sasidharan:** Oh, for sure, yeah.

**Jerod Santo:** It's definitely noteworthy.

**Divya Sasidharan:** Yeah. Sometimes it makes me self-conscious when I say something wrongly, and then I realize everyone's been saying it a completely different way. It's almost a known that that's how you say it, and then I've just been saying it this weird way...

**Jerod Santo:** \[laughs\]

**Suz Hinton:** It happened to me when I moved to the U.S. from Australia. We actually say specific technical words totally differently. Instead of caching data \[cashing data\], we say cache-ing \[caching data\]. And people literally thought I was speaking a different technical language because of these random things. They're just like "We have no idea what you're saying right now..." And then I didn't know what they were saying... I guess this was before the big explosion of YouTube videos and people actually being able to hear how other people say technical terms in different accents as well... So I felt very stupid for a long time.

**Jerod Santo:** Or you think you feel very smart, because you said something and we're all like "What is she talking about? It must be really good."

**Suz Hinton:** \[laughs\]

**Nick Nisi:** I would just go along with it...

**Jerod Santo:** Smile and nod. Smile and nod... "Yes, caching."

**Divya Sasidharan:** \[laughs\] If I'm in the position of being a listener, I usually try get context clues to understand what you're trying to say... But I find that sometimes I come across as really rude, because I'll repeat the word... \[laughter\]

**Jerod Santo:** Just out loud, you just say that word...

**Divya Sasidharan:** It sounds like "Blah-blah-blah, caching, blah-blah-blah", and then I'll be like "Ohhh, cashing!" \[laughter\]

**Jerod Santo:** That's amazing...

**Divya Sasidharan:** But it's more just me thinking out loud... Like, "Oh, okay..." \[laughter\]

**Suz Hinton:** \[00:40:01.26\] No, it's certainly true. I once said something like "You know, we could just pass the JSON", and they were like "Where are we passing it to?" I'm like, "No, you parse it." They're like "Like, where? We're not talking about a function, or a bug..." And then I realized, and I said it in the American accent; I was like "No, I meant parsing", and they were like "Ohhh... Okay."

So there are certain words now that I say in an American accent, like parsing, just because it's too hard to communicate otherwise.

**Divya Sasidharan:** Yeah. Going down this rabbit hole of words, one of the confusing words that I tend to use is lift. So if I'm meeting someone in the lobby of a building, I'll be like "Oh, I'm in the lift." And they'll be like "What? We said we'll meet in the lobby. Why are you in the lift?!" \[laughter\]

**Suz Hinton:** Yeah, I totally do exactly the same thing. I have to say "elevator", or whatever.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** Well, that's not your fault, because the company stole the term.

**Divya Sasidharan:** I mean, I've been trying to be like -- amongst friends, we're like "Can we just call it like lyft?"

**Jerod Santo:** Lyft... \[laughter\]

**Suz Hinton:** Rideshare. I think I just default to Rideshare now.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** A long time ago we were interviewing the creator of the SQLite (I won't say the name yet, because it's part of the story). You know that embedded database. And I asked him, "Is it SQ Light? Sequel Light? How do you pronounce it?" I gave him those two examples, and they were both wrong. Nobody knows how to pronounce it the correct way, but it's actually like "meteorite", so it's like "esqualite". I can't even do it now. He went through this deep explanation of how to say it, and I was like "Dude, I hate to break it to you, but no one is say it that way. We have these two that we argue about, and you're over here on this third path. You're just completely out there, in the wild, by yourself."

**Suz Hinton:** Yeah, I always think of that as a beer... You know, like Coors Light. Sequel Light.

**Jerod Santo:** Yeah, Sequel Light. But no, it's like "esqualite." That's how he says it, "esqualite", or something weird.

**Divya Sasidharan:** But anyway, that's a trajectory that we went on. But the other thing that's really cool that learned recently - it wasn't today specifically, so not very accurate for today (maybe this week), but I learned that you can actually... So for GitHub searches it always annoyed me, because whenever you search for labels, it will only be inclusive, and I never knew how to do an exclusive search... And I realized you just put a minus in front of it. You do like minus label, and then it gives you those issues that are not that label.

**Jerod Santo:** Yeah, sounds awesome.

**Divya Sasidharan:** So handy! It took me -- I don't know, I feel like everyone knew about this, and I just recently was like "Oh..."

**Jerod Santo:** I don't think they did. I think there's some of us that are -- all these things, these little tips and things you learn, there are people that know that, and there's a whole bunch of them that don't... So let me just say, if you're out there listening and you've just learned that here from Divya, hit her up on Twitter (was it @shortdiv?) and say "I didn't know that... Thanks for sharing it."

**Break:** \[00:42:57.02\]

**Jerod Santo:** We are gonna finish off today's show with things that we are excited about. We call this "I'm excited about X", and in parentheses we say "where X is literally anything." So it doesn't have to be JavaScript or web-related, it doesn't have to be developer-related, it could be anything. It could even be an apple harvest, but I forecast... Let's start with somebody else. Divya, what are you excited about?

**Divya Sasidharan:** I guess I can start with something that's not technical and then move to something that's more technical. I'm excited to move; that'll be great. I'm currently in a somewhat temporary situation.

**Jerod Santo:** Where to?

**Divya Sasidharan:** Just somewhere else in the city...

**Jerod Santo:** Oh, okay.

**Divya Sasidharan:** I'm trying to figure that out.

**Jerod Santo:** You're in Chicago, correct?

**Divya Sasidharan:** Yeah.

**Jerod Santo:** So you're moving to a new place in Chicago.

**Divya Sasidharan:** Yeah, yeah. I'm just trying to find something long-term, or whatever.

**Jerod Santo:** But you moved there from Boston, so that was a recent move, and now there's another move.

**Divya Sasidharan:** Yeah. I mean, it's a lot of moves. I feel like that's the story of my life. Suz might understand.

**Suz Hinton:** I totally get this. \[laughter\]

**Divya Sasidharan:** So yeah, I'm excited about that. But I'm also excited about -- as I was mentioning earlier, I've been reading a lot about authentication, just because it's something that I realize I don't know a lot about, and it's something that I'm trying to deepen my knowledge of... And I came across this new standard, or this new protocol, or a proposal essentially, to replace OAuth2. OAuth2 is great, and people have used it for a long time, but there are issues with it.

For example, with OAuth standards oftentimes you have to give a lot of information to the authorization server on initial request... Some people consider that a bit scary, because then an attacker can intercept that and get a bunch of your information, which is not very good... So there's a new protocol called XYZ -- because I think they couldn't figure out a name for it, so they just called it XYZ...

**Jerod Santo:** Yeah, the last one...

**Divya Sasidharan:** \[laughs\] And XYZ is essentially a transactional model, so the authorization server can essentially declare what it wants from whom, so there's that ability -- I don't know too much about it, but I do know that you don't have to give that user information upfront, because with regular OAuth you have to be like "This is the client ID, the user", and all this extra information, including the scope that you want, and the permissions etc. So OAuth XYZ is more an intent-based system, so along the way you're not revealing a lot of information and passing along a lot of information, which means that an attacker can't intercept -- or if they do intercept, they won't be getting a lot out of it. So it's a slightly different way of doing it.

I believe this protocol is not super-compatible with OAuth2... Which is expected, because usually, whenever a standard changes, it's not compatible with the previous one. It happened with OAuth2 and OAuth2. So I think it's like an ongoing proposal, and I'm trying to understand all there is to know about it, just because I'm like "What's happening?" and "This thing is happening."

I feel like the authorization and authentication world feels like a completely different thing in and of itself, very separate from my web world... Even though it's kind of related. So it's kind of interesting to switch gears and think about something in a completely different way, and force myself to be outside of my comfort zone and learn something along the way, and not be afraid of that.

**Jerod Santo:** Well, you may not know this, but it's actually pronounced "GZXYZZ." \[laughter\] Who's next... Suz?

**Suz Hinton:** That was really good, Jerod. \[laughter\]

**Jerod Santo:** Well, thank you. Um, I broke the show.

**Suz Hinton:** \[00:47:51.11\] I'm gonna be a total cliché, as usual... This is JavaScript hardware-related. I'm very excited for the rebirth of the serial API, but for reals this time... At least in Chrome. But the history of this API is just that it was an experimental API that was only allowed to be accessed within either Chrome extensions or Chrome apps. It then got removed from Chrome extensions and was only available on ChromeOS within Chrome apps... And that was a bit of a downer, because that's such a small surface area to be able to use it.

So it's now an official, proper spec, rather than just an experimental API, and it is actually already in Chrome today; it's not a complete implementation, but it's starting to get there. Just so that people know what that means - it means things like you can plug an Arduino in and start basically reading any kind of data that it's sending via the serial port over to the browser. So instead of having to have these WebSockets because you're reading it from a Node.js program instead, and then you have to pass that along to the actual browser, which is running your front-end, you can just do it all directly in the browser now, and it actually has better security in that there has to be a user gesture that actually initiates the connection to the actual device itself, and things like that.

I'm pretty excited, because it means that I can port a bunch of my libraries to the browser, and have them actually work correctly... An example of this is if you go to create.arduino.cc, if you use that on a Chromebook right now, you can basically write code in the browser with their built-in browser editor, and you can then compile and flush the code over to your Arduino in order to test out your program, all in the browser. So you don't have to download the 100 MB-large Java fork of the processing IDE, and things like that. You can just get started in the browser, which is incredibly enabling.

So having that come to other platforms now, like on Windows, and macOS -- right now only in Chrome, but we really hope to see other browsers implement this soon... It's really exciting, because it just means that getting started with this stuff is a lot easier, and you don't have to have a super-powerful computer to get started either... So I'm just really excited about that.

**Jerod Santo:** Awesome. Nick, what are you excited about?

**Nick Nisi:** I am excited about Z shell. I've been learning a lot about it... I've used it for years. I don't use Oh My Zsh, because I wanted to learn everything that's happening in my shell. And I did, to an extent, but I have been going through and learning a lot more about some of the different features of Z shell... The difference between just writing things as scripts, versus auto-loading things as functions, and just updating my dotfiles a lot with different Z shell goodness... And I'm really enjoying doing that.

On a non-technical side, I've been the victim of the YouTube algorithm, and it got me started watching some videos on old Doom, the original Doom... Which was really cool and fun to play when I was a kid. I've found those on the Nintendo Switch store. Both Doom and Doom 2. I have been playing those, and reliving my childhood. I'm not much of a gamer, but those were definitely fun when I was a kid, and they're fun now.

**Jerod Santo:** Awesome. You've got something else on that list... Do you wanna say that one?

**Nick Nisi:** Yeah, another thing I'm really excited for is TypeScript Conf, which is happening next month in Seattle. I'm going to be co-MCing that with Cassidy Williams, so I'm really excited to do that.

**Divya Sasidharan:** Nice!

**Jerod Santo:** Awesome.

**Nick Nisi:** It'll be a lot of fun and a lot of terrible jokes.

**Suz Hinton:** You should come hang out too, Nick.

**Nick Nisi:** Yeah, definitely.

**Suz Hinton:** Yeah, when you come to Seattle, hit me up.

**Nick Nisi:** For sure.

**Jerod Santo:** So I will close this out here really quickly with something completely non-technical, and no, this is not referring to Apple releases... There is that time of year here, in Nebraska, where we are reaching harvest time, and one thing that we've been anticipating here at the Santo household for a few years now is apple harvest.

\[00:52:11.27\] About four years ago we moved out to a small acreage in rural Nebraska, outside of Omaha, about 8.5 acres, and we quickly planted 25 root trees on our land. Those are about three years old now, so for the first time ever we're actually gonna have some apples... Which is incredibly satisfying, because you've gotta hunker down and wait; you just can't really speed that process up. They take a few years to mature, and we've been tending to the apples trees, and maintaining, and keeping them alive, and pruning them and doing all the work for a couple years now, but we've never had any apples.

Well, for the first time, we have some apples this year. We've already harvested a few, because one of our varieties matures early in the season... We had lots of fun making apple pies, and eating our own apples. It's just an incredibly satisfying experience, and the kids are really enjoying that and learning all about how it works. So it's pretty cool, this will be our first year where we get -- we're not gonna have a full load, but next year we'll probably have a whole bunch of apples and won't know what to do with them. \[laughter\] Right now it's like the perfect size... But we're excited to maybe have a harvest party, and have a lot of people come over, and just come down, pick up apples, take them home with them, and maybe eventually sell a few, too.

**Suz Hinton:** Nice.

**Divya Sasidharan:** What kind of apples are they?

**Jerod Santo:** We have four different varieties. There's two reds and two yellows. There's Golden Delicious, if you know that type, and there's one called Scarlet Crush, which is pretty much like a Honeycrisp, and it tastes just like a Honeycrisp. It's my favorite.

**Suz Hinton:** I know Honeycrisps. They're my favorite, too.

**Divya Sasidharan:** Yeah, me too.

**Jerod Santo:** Yeah. And then there's one called Lodi, and they're the ones that actually ripened in July. They're a bright green, kind of a tart apple, which is great for baking. You can eat them, but you've got like tart apples... I like sweet apples more than tart apples myself, but some people really like those.

And then we have two pear trees, two peach trees, an apricot tree and a cherry tree.

**Suz Hinton:** Wow.

**Jerod Santo:** None of those are active. We actually got two pears... Not two pear trees, we actually had two pears this year. So next year we'll get some pears. But yeah, it's just -- I didn't realize that about myself, but I love taking care of plants, and trees, and doing that kind of stuff. It's completely different than standing in front of a computer and typing. You go out and touch the world, you know?

**Suz Hinton:** That's so cool. When are we gonna IoTify these? You know I was gonna ask... \[laughter\]

**Jerod Santo:** That's a good question. We should take that up soon. I don't know what we would do with them. Give me an idea, what would IoTing them look like?

**Suz Hinton:** Um... Smart irrigation, so you save water.

**Jerod Santo:** Uuh, I like that. I did buy a drone so I can go down and check on them without walking down there... But I still drive the drone down, and I just look at it. If it could actually just monitor them itself, I'd appreciate that. \[laughter\]

**Suz Hinton:** You could design something to count the apples on the tree from the drone footage. That would be fun.

**Divya Sasidharan:** Like some TensorFlow thing...

**Jerod Santo:** I already designed those, they're called children.

**Divya Sasidharan:** ...that identifies that it's an apple.

**Jerod Santo:** That would be cool. Yeah, I've gotta be careful not to do too much automated work, because we're doing this so that my kids have things to do. I've gotta put them to work a little bit, teach them the value of labor, and all that... So if I just automate it all, then my kids will just be watching TV...

**Suz Hinton:** Yeah, totally. I only automate the watering of my plants when I'm away. When I come back, I disconnect all of it, because I want the pride of having taken care of it. That's the whole point. It's not just because they're pretty to look at. I get it.

**Nick Nisi:** Just get your kids to automate it.

**Jerod Santo:** Boom. The grand idea, get the kids to automate it. But then I've gotta teach them how to do that.

**Suz Hinton:** They're not gonna do that, because they won't get allowance once they've automated it.

**Jerod Santo:** That's right.

**Suz Hinton:** They'll automate themselves out of their allowance. \[laughter\]

**Jerod Santo:** Yup.

**Nick Nisi:** Or they'll just bring their iPad down to trees and sit there while the automation happens. \[laughter\]

**Jerod Santo:** That might be worth it. The problem with that is I'd have to teach them how to automate it, and I don't know how. I'd be a really bad teacher. It's like that old Mitch Hedberg joke... He said "I taught myself how to play the guitar, but I didn't know how to play the guitar, so I was a really bad teacher." \[laughter\] That's how I feel with a lot of this stuff. I need to have Suz come teach me how to teach them how to IoT these things up.

Alright, that's our show, y'all. Thanks for sticking with us. I hope you enjoyed it. Let us know \[unintelligible 00:56:25.19\] You don't have to go home, but you can't stay here. See you next week!
