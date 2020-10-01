**Safia Abdalla:** Howdy, everybody. Welcome to JS Party. Today we are here to talk about everybody's topic - bugs. Not the creepy crawlies, the bugs that you find in your code.

Joining us today in this conversation is I, Safia (rhymes with mafia). We've got Kevin (Kball) with us, Suz Hinton, and Nick Nisi.

**Kevin Ball:** I like your "rhymes with mafia" idea. That's a good way to get it across. I'm trying to think what I could do with Kball. Kball, rhymes with... Ball. \[laughter\]

**Safia Abdalla:** There is a whole host of words you can use - ball, small, mall, call... I'm not as fortunate. \[laughter\]

**Kevin Ball:** Before I got into tech, I actually did some substitute teaching, and I remember going into a kindergarten class and being like "I'm Mr. Ball. Like a bouncing ball." That worked for worked for communicating to five-year-olds... Like, call yourself a basketball, and they're good.

**Safia Abdalla:** \[laughs\] Noted. That's a useful life tip for interacting with children. So today's conversation is we're just gonna talk about software bugs, specifically in JavaScript. I wanted to kick it off with a reference to an article that was published earlier this year, in January. It was published by Rollbar. For those of you who are unfamiliar, Rollbar is essentially like an error monitoring service; you can hook it up and capture any exceptions that occur in your application and get stats on them.

They published this really interesting article called "The Top 10 JavaScript Errors From 1,000 Projects, and How to Avoid them." I thought it'd be a really good way to start the conversation on some of the common bugs that we find in our JavaScript code, and how folks on the panel fix those bugs or get around them, prevent them from existing in the first place.

One of the first ones that they laid out is our favorite bug ever, it's "Uncaught TypeError: Cannot read property." I just had like a chill go down my spine when I read that. \[laughter\] Essentially, this is a specific variant of an error that occurs when you try to either fetch a property, or invoke a method on an object that is undefined - you get this error thrown at your face.

\[00:04:09.21\] If you think about it -- I've got this list of the top 5 errors, and most of them relate to things being undefined or null when we don't expect them to be. How do you all deal with those kinds of bugs in your code, handling null cases and undefined cases?

**Kevin Ball:** I feel like Nick is gonna have the mic-dropping answer here.

**Suz Hinton:** Yeah, I can see where this is going... \[laughter\]

**Nick Nisi:** Just use TypeScript! \[laughter\]

**Kevin Ball:** I mean, we're looking at these five bugs, and it's "Uncaught TypeError: Cannot read" "TypeError undefined", "TypeError null", "TypeError: undefined is not a function" - there's a common thread here, and it has to do with... Type.

**Suz Hinton:** And what's interesting is that that list is these are literally THE most common ones that happen... So by being able to shield yourself against all of these specific type errors, you're actually knocking down some of the most common things you're gonna find in your app... Which is fascinating, and I'm really glad that this list was shared, because it really does kind of call out that we do have an issue with this in JavaScript, for sure.

**Safia Abdalla:** Yeah, and for those who don't have a chance to read the list right now, it's essentially all of the different variants of the 'undefined' error that you might find in different browsers. It's something that each browser has a different way of telling you that you're running into the same bug. I think we need a working group on that.

**Kevin Ball:** That's actually cool. I hadn't quite put that together, but you're totally right; those are the same exact thing.

**Safia Abdalla:** Yeah. Chrome will alert you of the same bug using a different message than Firefox or Internet Explorer, but it's all the same thing in the end.

**Suz Hinton:** There's a talk by Brittany Storoz. She gave this talk earlier this year... I've been to so many conferences this year I'm embarrassed to say I forgot which one. I think it was JSConf EU. Brittany has been a teacher at a coding school before, and she proposed that we need to have better errors in our browsers, and also just in any of our JavaScript engines (like Node.js, for example), because sometimes even people who are new - this is going to be really confusing to them, to see that even different browsers spit out a slightly different error, and it's really hard to debug those things when you're really new... So I would definitely highly encourage people to watch that talk of hers; we'll drop a link in the show notes for that... But I'm interested if anyone else has seen any proposals to improve the errors that come out of just JavaScript in general, because other languages are sometimes a little better at this.

**Kevin Ball:** That's a really good point. I work with some folks who are a little bit more new to JavaScript, or junior, and a lot of times they'll come and say "Hey, I've got this stack trace, I have no idea what it means." And being able to point and say "Oh, that says 'TypeError: Cannot read property undefined of something that is null' - Well, let's go look for what's null." But they'd see this massive stack trace and these fairly obscure -- I won't say they're obscure, because you can understand them when you really dig in, but kind of pattern recognition-style error messages, rather than something that you get out of like Rust... The Rust compiler is phenomenal for pointing you what are you probably doing wrong that's resulting in this.

**Suz Hinton:** Exactly. And I've just looked it up, and the talk is called "A year of other's bugs: the sad state of error handling." She does actually call out other languages that are more helpful, such as Rust or even just Elm - which is technically still transpiling to JavaScript - and how they do much better error handling, at least for just trying to help people out.

**Safia Abdalla:** \[00:07:58.06\] I don't do a lot of work with Rust, but I do do work with Elm, and it's got some great error messages when you're trying to get all your types in order and end up riffing inline. It's something that, as discussed, unfortunately we don't have in the JavaScript world. But I think that a big part of that might just be discrepancies in all the different JavaScript engines that we have running around in different browsers.

**Kevin Ball:** Coming back to prevention, we have Nick's easy (in some ways) answer, though I am ashamed to admit I still am not on TypeScript, at all... There are pure JavaScript solutions as well, that help you do some amount of type checking. For example, you could be using something like Flow, which lets you embed type-checking straight into vanilla JavaScript.

**Safia Abdalla:** Do you have experience using Flow in a codebase that you wanna share?

**Kevin Ball:** A little bit... My experience there definitely highlights both the positive and negative pieces of types. Types one let you communicate really clearly about what data structure looks like, and two let you catch a lot of these bugs ahead of time. There are scenarios where they can be extremely painful as well. Anytime you're doing any sort of metaprogramming, or where you have objects that are coming back in different ways, based on criteria... I mean, maybe this is my lack of skill with types, but I often found myself fighting the type checker or compiler to get it to express something, where I was like, okay, this thing had two different modes that it can be in, and you could get it, but it was often painful to get it to work right. I don't know, Nick, is that something that just goes away as you get better with it?

**Nick Nisi:** Yeah, maybe... You just get more experience with how to handle that when you see those problems, how to better handle it as you go. I was also going to say that you don't have to fully switch to TypeScript to get benefits from it. The big benefit is the tooling that it provides, and the TypeScript language service can actually infer a lot about your JavaScript code without having to switch fully to TypeScript. And in fact, that's what Visual Studio Code does for you automatically.

**Safia Abdalla:** Does anyone have non-technical engineering or best practice solutions that you've implemented in your team for catching these common bugs?

**Kevin Ball:** I don't know if I'd say for catching them, but for debugging, one of the things that I constantly come back to is making sure that you are very explicit about the assumptions you're making. You know, "I'm coming into this function and I believe these things are gonna be true", and then validating that those things are actually true... Because I find a lot of times where these bugs come from is we assume something, but then we kind of forget that we've made that as an assumption, and just take it for granted and move on... And then where that bites us is when that assumption turns out to not be true in all cases. Maybe it's true in most cases, but then when we hit this bug, it's actually not true, because it's coming from a different thing. And if we don't reassess the fact that that was an assumption and check it, it can be baffling to try to figure out "Why is this breaking? How could it possibly be breaking?" So it's about stepping back and saying, "Okay, what are all my assumptions and how do I validate them one by one...?"

**Suz Hinton:** I find that a code review comes in really handy for this too, because a lot of the time the people looking at what you've just written haven't been staring at the same code for as much time as you have, so they have probably less assumptions about what's being passed in and what the shape of it is, and things like that.

**Nick Nisi:** Yeah, and then also codifying that in a unit test to try and capture all the valid inputs that might occur, and if you discover something new as you're running the code, instead of just fixing it, try and add a unit test to that to make sure to capture for that in the future.

**Suz Hinton:** \[00:12:02.06\] I thought of tests too, and I thought that maybe test-driven development, if you wanted to get super nitty-gritty, highly detailed, you could be writing mini-tests for that... At which point you would almost start justifying something like flow or TypeScript anyway, because no one really wants to actually reimplement that just for their specific code. But if you didn't want to use something like TypeScript or Flow, you could perhaps write some guard rails during your TDD session, to ensure that you're not constantly changing the shape of something in order to get an undefined error happening.

**Safia Abdalla:** One of the skills or lessons that I learned actually a really long time ago from my high school computer science teacher (out of all things) was that whenever you write a test case for a function, make sure you're always testing the empty or undefined case. That prevents you from shooting your foot in most situations.

**Suz Hinton:** Totally. And you should almost test that your code even does that in the first place. You should test to make sure it does break in that way before you then write something to stop it breaking in that way, too... Then that helps with not making a set of assumptions on top of that as well.

**Kevin Ball:** Safia put a set of five top functions here, and four of them are type error related, and null and undefined and whatever... But then we have this "unknown script error." That one - I've seen it; I don't know any magic for it. Does anybody know any magic for debugging what the heck is going on when that happens?

**Nick Nisi:** I just saw this last week.

**Safia Abdalla:** Oh, do tell.

**Nick Nisi:** It was actually in the context of a unit test that was being kicked off over the web driver protocol, which was bringing up Electron, and running in Electron... And I just kept getting this script error over and over and over, and trying to understand what that was. For our case, it just ended up being the way that we were kicking those tests off in Electron, and I think it was that they were trying to make requests in a browsery way to a server that wasn't part of its domain... it was like a CORS error. I think that's what it was, at least. But that is a tough one, because it gives you no information.

**Kevin Ball:** Anyone else? No unknown script error? I feel like that's the JavaScript equivalent of throwing your hands up in the air and saying "I don't know! You got me!"

**Suz Hinton:** \[laughs\] Yeah, that's when you start looking at everything line by line, and it is just so painful.

**Safia Abdalla:** In this Rollbar blog post, there are two fixes. To get the real error messages, it recommends doing the following - setting an Access-Control-Allow-Origin header on your web server, whether it's like Apache, or NGINX, or what have you... And then there's also setting the cross-origin attribute to anonymous on the script tag.

**Kevin Ball:** Interesting.

**Safia Abdalla:** That's two techniques for getting the full error message to be able to debug more effectively.

**Kevin Ball:** Oh, so basically that unknown script error is "Well, we probably know, but we're not allowed to tell you, because of cross-origin stuff"?

**Safia Abdalla:** "We're just trying to give you a hard time."

**Kevin Ball:** "Something went wrong, but it went wrong someplace that you're not allowed to see... So we're just gonna tell you, hey, this went wrong. Good luck!"

**Safia Abdalla:** Yeah. As was mentioned earlier, it usually happens in a cross-domain context, where you're trying to send a message or something, and instead of the external domain or whatever external thing you're accessing, sending you a stack trace with potentially useful information, and being kind of like a security loophole; it just says "There's a script error, but we're not gonna tell you what it is, because you might be a bad person."

**Suz Hinton:** \[00:15:58.02\] That makes a lot of sense. That's kind of how guard rails is set up in APIs, too. They don't return things like 404's or any kind of clue that "Yes, you were almost there, but you didn't authenticate properly", or something like that. And I know that that sometimes is very frustrating too, when you're trying to debug being a legitimate API user, because they do have things in there to stop people from being able to exploit their way in one little tiny breadcrumb at a time of clues... But yeah, I didn't actually think of just setting the cross-origin headers in order to alleviate that. That's actually something that I've learned today.

**Safia Abdalla:** Hurray! Yay for learning!

**Nick Nisi:** I was actually going to bring up an error message that we used to get, but we really don't get it anymore, and see if you all remember that... It's "unexpected identifier, string or number. Code: 0." Does anybody remember that?

**Suz Hinton:** Yes, I do!

**Safia Abdalla:** I have seen that. It's been a while. Do you know that meme where--

**Nick Nisi:** That one-- Sorry...

**Safia Abdalla:** Sorry, I was trying to make a relevant reference and be funny, but I totally fell on my face, because I'm a great antsy. \[laughter\] Go ahead.

**Nick Nisi:** Oh, this error used to cause me so much pain in the past, because I would only ever see it really in an Internet Explorer.

**Suz Hinton:** Yes, exactly.

**Nick Nisi:** And when it'll tell you what caused it, you'll know why... But you try and bring it up in Firefox or Chrome back in the day and the code would run fine. So you'd see this, and of course, Internet Explorer never gave you a correct line number or anything.

This always would cause me like a half hour of grief, until I remembered, "Oh yeah, this is actually caused by... Trailing commas."

**Safia Abdalla:** Wow.

**Nick Nisi:** But that error message just gave you nothing.

**Kevin Ball:** Well, it's a really interesting highlight of how much linters have reduced the set of errors that often show up... Because there's whole classes of bugs that used to be essentially runtime bugs that linters just catch, and they clean up for you and you don't have to ever worry about it. Linting is kind of like a half step to the level of validation that you get in something like TypeScript, but it gets you a lot.

**Suz Hinton:** That's very true, but also, thankfully, our JavaScript engines are a little bit more closely aligned in being spec-compliant. There's obviously still differences between them, but it's definitely not as bad as it was back in the day. I think even just in a previous episode I was talking about how one browser was using ECMAScript 3, and then the others were on ECMAScript 5, for example, and that was sort of the era at which you saw those kinds of errors as well, I believe. Things have gotten a lot better since then, which is really nice, and I totally agree with the linting thing, too. It just stops completely unnecessary errors.

**Safia Abdalla:** We're gonna take a quick break and then come back for a really interesting segment. We're gonna all get on the porch, sit on the rocking chairs and talk about the hardest bugs that we've had to debug in JavaScript... And that is right after the break.

**Break:** \[00:19:02.15\] to \[00:20:54.18\]

**Safia Abdalla:** We are back live here, to answer and share stories about a really interesting question, which is "What is the hardest bug you've had to debug in JavaScript?" What I wanna hear about is what made that bug hard to debug, how did you end up solving/fixing it, and then what did you capture about the debugging process, or what did you learn that you took on with you that you can share with us today? Anyone wanna start off with their own harrowing story of facing a very hard to fix bug?

**Kevin Ball:** I can go with mine... I don't know about hardest of all time, because the memories fade, the pain goes away... \[laughter\] We're not good at remembering pain... \[laughter\]

**Suz Hinton:** You just block it out. \[laughs\]

**Kevin Ball:** I know, it gets totally blocked. But this one actually happened recently enough that I remember it, and it turned out to be interesting enough that I jotted down notes to remind myself, so I could write it up at some point, because it was fascinating.

**Safia Abdalla:** Oh, wow.

**Kevin Ball:** So the situation is I was working in a Vue application using Nuxt.js, and I have a number of third-party things that I'm using... I was using Vue Select, which is kind of a combo typeahead selector thing. Super-cool little plugin... And I had just updated it to the latest version, and I noticed that it was not working right. It was not automatically filtering down options as I did the typeahead, and I thought "Is that a bug in the latest version? What's going on?" So I pulled down the latest version repo and I kind of ran through tests and the exact same thing was working fine when I just looked at the repo itself. I thought, "Okay, this is weird. Let me see if I'm using it wrong."

I couldn't find it, so I started digging more and more and more; I went back to the previous version. I discovered actually the previous version -- I don't think it was working quite right either. Actually, I don't remember that, so ignore that... But it wasn't working, and I saw that there was an odd warning message in the console. I didn't jot that down; I should actually go back and get that for when I write this up... But it was something about "Warning! You're redefining this thing as a method that was already a prop."

The warning was from down inside of this third-party library, and I thought "Okay, that's kind of weird. Let me dig through the source code of that library. Maybe I'm using it in a weird way..." I couldn't find it. That thing was there as a prop, there were no other references to anything of that name; I had no idea what could be causing this. And it's not even in my code, so it's like "What did I do here?"

The way I ended up eventually tracing it down is I put a breakpoint in the Vue Warn code. I wasn't getting a backtrace really, except through Vue Warn, so I would go into Vue Warn, I'd put a breakpoint there, and then when I ran it again, that let me look at the definitions that were coming in... And I saw, "Okay, this thing is getting a method with this name", and there was a pointer back to the source file before that method was being defined... And it turned out that method was actually being defined in a separate third-party library, that was creating essentially a mix-in for these Vue components with some method names. Neither library was namespacing...

The Vue Select didn't matter, because it was doing its own stuff... But this third-party library was setting up a global method for any component that utilized it that happened to have a naming clash with a property that the Vue Select was using.

**Suz Hinton:** \[00:24:47.04\] Oh...

**Kevin Ball:** Long story short - I pulled out the third-party library that was defining it, because it turned out I didn't need all of that at all. A collaborator had put it in for like one or two things that it did. So I pulled that out, reproduced the two things that it did, like pulled their code out and just did that piece as my own thing, and that solved the problem.

I quickly submitted an issue on that third-party library saying, "Hey, if you're gonna define these methods in a way that's gonna go into any component, you really should namespace them for your library, or at least give an option to namespace it."

**Suz Hinton:** Absolutely. That must have been so infuriating too, to figure out what it was... Because it's not necessarily something that you did wrong per se.

**Kevin Ball:** Exactly. Well, it tied a little bit into the way that some of the application frameworks work. If I were just using that library in a single component, it probably wouldn't have been a problem... But it was basically defining a set of common filters. This third-party library was like Vue Filters, or Vue Filters 2, or something like that... It was a set of common filters, so I just put it in the global plugin space where it gets included in every component, because we were using it all over the app. But that means that it's not only getting included in my own components, it's getting included in every third-party component everywhere.

So yeah, that was my recent really tricky bug, and it was a pain... But the thing I learned was you can put breakpoints anywhere, and if you're getting warnings like -- I've been using Vue a lot; I think React was good at this too, but it's been almost a year since I used React extensively... But Vue gives you lots of different informative warnings, and if you put a breakpoint in at those warnings, then you can actually get a lot of rich information about what's triggering that, that isn't there in the direct backtrace of the warning. You can get lots of context of where are the objects that are getting passed in that are resulting in this, what files are they coming from - all that stuff. So breakpoints are awesome.

**Suz Hinton:** Yeah, that's really handy.

**Safia Abdalla:** That's a helpful tip, yeah. And I'm so glad you made it out of battling that bug alive, Kball, to join us here today. \[laughter\]

**Kevin Ball:** Yeah, it felt actually -- like, I was angry a little bit, but it also felt really good to solve it, because it was like, "Wow...! That's a tricky one." \[laughter\]

**Safia Abdalla:** Yeah, there's that catharsis and satisfaction and endorphin rush you get after fixing a bug that's so good...

**Suz Hinton:** There's this sort of like "I can move on with my life feeling" as well, I think... \[laughter\]

**Safia Abdalla:** Yes... Just declutter.

**Kevin Ball:** And the nice thing actually about it being a combo of third-party things is you don't have the reaction of like "How could I have been so stupid?" Because it's not like "I introduced this by doing something really stupid, and then I spent all this time debugging." It's like, "No, this was a really interesting combination of things that were mostly outside of my control, certainly outside of my expectation, and yet we tracked it down." So it has a nice feeling for that.

**Suz Hinton:** \[00:27:55.08\] Yeah, I love blaming someone else. \[laughter\]

**Kevin Ball:** Exactly.

**Suz Hinton:** I can share one of mine. It just happens in JavaScript, but this could happen in a lot of different languages.

**Safia Abdalla:** Oh, that's great.

**Suz Hinton:** I was writing a JavaScript driver for a specific piece of hardware... So like -- yes, it's Suz; I'm gonna talk about hardware, I'm sorry. \[laughs\] I had a small display that you can plug into Arduino microcontrollers in order to be able to display things like -- you can write text, you can write pictures to it... It's essentially just a monochromatic screen that has pixels that light up or they don't light up, so there's only really two states that you can have.

The way that you drive these screens specifically is that you encode all of the pixels just into straight up bytes, right? So one bit is a pixel, so if the bit has the value 0, then basically the pixel is dark; if you have it as a one, the pixel is actually lit up on the screen... So that seems very straightforward.

When I read the data sheet, I was like "Cool, I've got this. I understand how to do this." I hadn't really done a lot of bitwise manipulation in JavaScript before, so I really did learn a lot about it in this particular project that I was working on... But what I would end up doing is I would import a bitmap and then I would use bitwise operations to basically take that bitmap and convert it into a monochromatic one using whatever algorithm you wanna use for that; in this case it was Floyd-Steinberg, but that's not relevant.

I would then have to just take a framebuffer that was full of empty bytes, and start using bitwise operations to shift in all of the different pixel values that I needed... And I was like, "Yeah, this is just a linear thing, right?" It's like, the first byte is gonna be the first eight pixels of the picture, and then it's just going to go from left to right, and then when it gets to the next row of the actual picture, it will just keep sort going left to right and then back again.

This is very straightforward. Every time I sent the framebuffer that I was preparing with JavaScript bitwise operations, every time I sent it, the picture would just not be that. I think I was trying to send a picture of a parrot, and it would just be a complete gobbled nonsense on the screen, and I was very frustrated, because this is a very hard thing to debug, and I think even in JavaScript, doing bitwise operations - yes, you can spit out the final value of the byte and things like that, but you have to do a lot of mental math to then convert it back into the actual bit representation.

If you have a byte that's like 2C or something, unless you have this stuff memorized and you're very good at hexadecimal math, it's hard to figure out "Okay, is that 01101?", or trying to figure that out. That's something that I don't think is particularly intuitive, at least in JavaScript. You kind of almost have to come up with your own little tools in order to debug that... So the problem ended up being - just to cut the story short - I wasn't reading the data sheet correctly, and it turned out that each byte is actually a column of 8 pixels going down...

**Kevin Ball:** Oh, no...

**Suz Hinton:** Yeah, so you have to imagine it in that every time the first byte in this frame buffer array is actually just painting straight downwards, starting from the first -- the most significant bit is x0y0, and then the next bit in that byte is x0y1, for example, and it keeps going down. And then once you've satisfied that column, you move across one on the x axis, and then you start painting downwards again.

\[00:31:51.03\] The data sheet was actually very explicitly clear, but I just skipped over that section, as you do... You're like, "Yeah, I got this!" So it was very frustrating, because what I really should have done was I should have written a tool that was able to preview this stuff more on the client side, because when you send this stuff to hardware, it is enormously difficult to debug. You're just like, "Well, it's not doing what I wanna do, and I don't really have any feedback from that."

So what I learned was 1) read the data sheet properly, but 2) sometimes it's worth slowing down and spending maybe 15 minutes writing something that emulates the screen, for example, or emulates it in a way where you would expect it to show a certain order of pixels, for example. To be honest, I would have debugged it a lot faster, because I would have been able to verify that at least my initial assumption about the order of pixels - at least that I was dumping it out in the correct way, and so therefore it couldn't have been that.

So I did lose a lot of time debugging what was my initial assumption about what the order of pixels should be in the first place. So again, not very related to JavaScript, but kind of showing that I had a limited toolset to debug with, and so that's what made it so annoying.

**Kevin Ball:** Well, that also gets back to this question of validating assumptions, right? Which is, yeah, not limited to JavaScript, but so key.

**Suz Hinton:** Absolutely.

**Kevin Ball:** How do I even check what my assumptions are and then test them?

**Suz Hinton:** Yes. And so I never forgot it, too; I kind of did what you did, Kball, and I took copious notes about it, so that I didn't ever go back to that other assumption, and then I ended up writing a blog post about how LED screens work... So to be honest, I've actually referenced that blog post personally myself probably more than anyone else has... So it's been really good to write up.

**Kevin Ball:** That's the amazing thing about blogging - yeah, I search for my own blog posts all the time, because I'm like "I know I've figured this out already. How the heck did it work?"

**Suz Hinton:** It's so true.

**Safia Abdalla:** Nick, do you wanna show your own harrowing bug story?

**Nick Nisi:** Sure. As Kball said, it's kind of faded in my mind a little bit, so I'm trying to recollect myself as best I can, because I've tried for so long to block it out.

**Safia Abdalla:** It's okay. Whatever you need to heal.

**Nick Nisi:** Yeah. \[laughs\] This is therapy. I often get tasks through my job to, like, come in on a project and figure out a very specific bug, and then that's it. So this is one of those times where a client sent us their code and said "We're having this bug. We can't figure it out. It works fine in local development."

I was running their code locally; it's an Angular project (Angular 4, I think), and I tried to reproduce it and I could not reproduce it, except for when I used Chrome's Emulate 3G in the network tab to emulate a slow network connection. Then I could reproduce it every time. But the problem was they had this table on the page that had expandable rows, and when the rows expanded, they would introduce a link in there, and when you clicked the link, it would use Angular routing to navigate to another page, and then the contents of that page would not be fully filled out; you would just see like a small portion of it, unless you resized the window or did any kind of interaction with the page, like a click; then everything would just pop into place.

**Suz Hinton:** Oh...

**Nick Nisi:** Just a terrible bug, because you have to do it only on an emulating 3G, which slowed everything down, because there's a lot of stuff in development that was being downloaded... And I immediately started looking at the router, thinking "Oh, this a problem with routing, for some reason." But it was actually not part of that at all. The table that they were using on the previous page was ag-Grid, which is like a grid project specifically for Angular projects. That has some code in there that I ended up debugging down and figuring out that when the rows were being expanded, that was causing the problem. So if I just had the link on the page and clicked the link, then everything worked fine... So it had something to do with the rows being expanded in there; I was trying to figure out what that was, and it's really tough.

\[00:36:14.12\] This was also a really big deep dive into Angular for me, so trying to understand that and what it was actually doing... I had no idea how Angular was working internally. Angular relies on this project called Zone.js to listen to and update itself when asynchronous tasks happen - things like set timeouts or promises being resolved - and it uses that to trigger its diffing to understand when it needs to re-render portions of the page. And digging through the Angular code and then the Zone.js code, and then back up to the ag-Grid code and trying to figure out what was the problem in there, there was a method in ag-Grid where when those rows were being updated, it was actually calling a Zone.js method called Run Outside Angular, which means "Do this asynchronous action that was wrapped in a set timeout, but do it outside of Angular's change detection, so that Angular won't actually do any kind of updating on that."

So the nature of what they were doing with adding in new rows - it was being added in in a way that it wasn't fully flushing out all of the changes that it needed to from the change detection buffers that Angular was using. So when I'd go to the next page, there were still things that hadn't been cleared out of that, and so triggering click or resizing the window would actually cause the change detection to run again, see that it had changes, and then update the page.

**Suz Hinton:** Oh... Oh, my god...

**Nick Nisi:** Yeah... It was very traumatic, very terrible, but what ended up happening - I was going through, trying to figure out if I just remove this Run Outside Angular and get it to run normally, then everything works. But what I ended up recommending to the client is instead of just triggering an on-change callback, like they were doing for when the rows were getting reset, actually recalculate the rows, which would force Angular to realize that it had changes that needed to be applied to the DOM, and then everything worked okay. But it took a week of going back every couple of hours and saying "This is what I've found. I can investigate this further, I need more time etc." But just a week of back and forth on that, and it was not fun.

I learned a lot, and I think the big takeaway is asynchronous bugs are very hard, especially if they're not easily reproducible locally. And I just don't like the idea of overriding things like set timeout and promises to do change detection.

**Suz Hinton:** Yeah, that's really scary.

**Safia Abdalla:** One of the commonalities that I've seen in all of your stories is it's all about having to explore a breadth of code to debug a single issue, whether you're having to dive into third-party code, or just read through a lot of invocations... It's really just like processing a lot of information to try and find the one thing that's causing the problem.

**Kevin Ball:** Yeah, there's a lot of just trying to build up the picture of what the heck is going on... Our friend Bobby Tables..David Poindexter points out in the Slack that if you can figure out a reduced test case, it's super valuable. Suz, I think you mentioned that a little bit - what that lets you do if you can do it is really isolate that space of where you're trying to get the picture of what the heck is going on here. You can't always do it, and I think in that async example that you were giving, Nick, just trying to do an isolated case might have like -- you know, you were trying to run it outside of Angular networks, or whatever... That sort of points you in the right direction for where the heck do I look for this... But really, there's no science to this. We're just trying to create a map in our head of what the heck is happening.

**Suz Hinton:** \[00:40:16.29\] Totally. And I'm really stubborn too, and I'm too lazy... I'm like, "No, I'm gonna waste more time writing this test case. I betcha I'm just right on the brink of figuring this out", and so I will just cycle endlessly, rather than slow down and actually kind of explore and write verification for it... And that's something that I'm trying to work on as a developer in general constantly. It's like, don't think that this is a waste of time, because it's probably going to end up saving you more time in the long run if you just slow down and write something that will be able to either reproduce it in another case, or like what Nick did, "I'm gonna actually go off and try and look at how it behaves in this context.

**Nick Nisi:** I'm really glad you mentioned that, because I do that too, and it's just good to know that others do, as well. I'm too lazy, I don't wanna do this -- I don't wanna put in all of this work, because I'm right on the edge. I always feel like that and I always come out worse at the end, I feel... But yeah, thanks for sharing that.

**Suz Hinton:** I'm glad that I'm not the only one as well, so I'm very glad that I shared it.

**Safia Abdalla:** Those were some really interesting stories for our second segment. We've been talking a lot about bugs, and we've talked a little bit about ways to avoid them, or tips and tricks to keep in mind when trying to solve them... In the next segment when we come back, we're gonna provide you with some tools and techniques to reduce the numbers of bugs in your code, or help debug bugs... So stay tuned, and we'll be right back.

**Break:** \[00:41:52.22\] to \[00:44:31.14\]

**Safia Abdalla:** We are back for the last segment of this recording. We are going to be giving you the answers to life, the universe and everything... Not really. We're just gonna be helping you reduce the number of bugs in your code, sharing some tools and some programming principles to keep in mind.

Does anyone wanna share some things...? We've mentioned a few already on the podcast, but anything new you wanna share on how you avoid those pesky bugs? There's no way to avoid them... We're all screwed.

**Suz Hinton:** \[laughs\] TypeScript was a big one. I feel like we were gonna talk about TypeScript, but we've got there already... I mean, TypeScript is gonna solve a very specific problem for you... But outside of things like type errors and just the really cool linting that Visual Studio Code can do, are there any other plugins for IDEs, while we're on the topic, that anyone has really liked using, other than what we've already talked about?

**Kevin Ball:** I mean, I'm a hardcore Vim addict, so I don't really do those IDE things...\[laughs\]

**Nick Nisi:** I am too, and one plugin that comes to mind is the Asynchronous Linting Engine (ALE), which is great - it basically makes Vim yell at you like other editors would... So it'll give you a gutter on the left side of your code, and as you're typing, it checks things like your .eslintrc file, or TSLint, or talks to the TypeScript server if you're using TypeScript... And it will give you information about that line, and then put down in the little error message area at the bottom of the screen what the problem is; so if you're trailing a comma or whatever, it'll tell you that right there... But it also has a really nice feature called ALE Fix, which will do things like run your Prettier config and automatically update the file.

**Suz Hinton:** That's cool. Wait, is this for Vim, or another editor?

**Nick Nisi:** For Vim.

**Suz Hinton:** Heck yeah! I use Vim, so I'm gonna install this now. Thank you. I learned that today.

**Kevin Ball:** We really do need a Vim party, because it seems like just about everybody on here is all about it.

**Safia Abdalla:** Oh, boy... I used to be all about it, but then when I started working full-time, everyone at the company used VS Code, so now I'm on the VS Code... So now I'm on the VS Code train, and I actually quite like it... But unfortunately I don't have any new extensions to mention besides TSLint.

**Kevin Ball:** So in terms of practices, David in the Slack channel brought up something that I was going to, which is immutability, and trying not to mutate state. I think so many of the bugs that we run into, not just our -- so at one layer we could say these are about types and undefined, but at another layer it's just about this thing has changed from what we expect it to be, and it's way harder to reason about what we expect it to be and keeping it there if you were mutating state as you go along...

So the more you can write your code in a way where you're always creating new objects and you're being immutable and you have functions that are pure and that are not creating all these side effects, the more it becomes easier to reason about what's going on, the more it becomes easy to test, and you have a lot fewer challenges with bugs. And you can do that in a way where even if you are dealing with something that is fundamentally mutation-oriented - I'm thinking about, you know, one of the big contrasts between the way that Vue and Vuex handles state, and the way that React and Redux handle state is that Vue leans very heavily into this concept of reactivity, and you have data that you mutate and things react from that...

\[00:48:15.16\] But if you isolate that reactive piece, and so you're still doing -- you know, all of your changes are based on "I'm gonna take something, I'm gonna immutably come up with a new state, and then at that point I'm gonna do my assignment, so that my mutable store changes at that point..." But all of your logic and communication and thinking about is essentially treating these things as immutable. It just becomes so much easier to reason about the flows of data, and you don't end up with these objects where you're like "How the heck did that end up that way?"

**Suz Hinton:** It's so true, and it also does mean that it provides the opportunity for you to have really cool debugging things, like the time travel debugging and things like that, where you can actually start capturing that data every time you generate a new copy of it - that's basically like a little record in time, and that ends up opening the doors to all sorts of really cool stuff where you can actually watch something live, and you can actually capture that even from user data, so that you can actually see exactly what they were doing at that given time, and you can reproduce the state of your app as well. I think that by itself is really good, and then also what it opens up for debugging itself is kind of amazing.

Has anyone seen Code Lauren by Mary Rose Cook?

**Safia Abdalla:** I have not.

**Suz Hinton:** It's a really cool example of this. It's basically an old project; I don't even think that they work on it anymore... It's like game programming for beginners. It's basically a web-based IDE, and I think it's codelauren.com. They designed it in a way where you can draw shapes and compare things, and you can specify functions and data types and stuff like that, but also you can step backwards and forwards through the program as you're actually writing it as well. I think that that's really cool, to be able to learn how that approach to things like immutability and avoiding side effects and things like that could be really helpful.

**Safia Abdalla:** I have two programming principles that I wanted to share for helping reduce the number of bugs... One of them is just something that I always do and that I'm trying to do less of, which is having numerous cases in a single if statement. I'd be saying "if this combination of cases or this combination of cases, but not that combination of cases, then do this." And that's just like definitely asking to shoot myself in the foot later... But just being deliberate about how I'm implementing logic in my code is something that helps me reduce the number of bugs in it.

Then another one which I learned really recently is to void boolean traps. Boolean traps are cases where you essentially pass a boolean parameter to a function. Usually, what your intention is there is to treat a boolean flag or a parameter as some sort of flag, that internally your function may or may not do one thing, depending on what the value of the boolean is.

You end up shooting your foot especially in JavaScript, because there isn't a way to do named parameters in JavaScript besides the trick of passing an object to a function instead of a list of parameters. So what ends up happening is you pass a boolean to a function expecting it to do one thing, but that logic is obfuscated from you and that boolean flag doesn't actually do what you intend... And it sort of just follows a general programming principle of don't have functions that take booleans to dictate when an internal logic happens.

So yeah, those are two tips, especially around booleans. I feel like those booleans are one of the cellular places where bugs can happen in code, and those are some things I try and do to reduce them.

**Suz Hinton:** \[00:52:15.17\] I'm glad that booleans were brought up, because they really are not talked about as much as type errors and side effects and things like that... And it is bewildering when you are trying to use a library for the first time - and I'm guilty of this actually, because one of the first libraries I ever wrote for other people to consume was that one for the screen, and I am breaking the rule that we're talking about right now, where I am asking for arbitrary booleans to be passed into the function as an argument, and that does tend to be where it's very hard for other people who are also using the code you've written, in teams, to reason about those kinds of things as well.

Also with booleans one thing that I've gotten better at with time is just explicitly naming them properly, and using naming conventions for them as well. You've probably seen these recommendations on the internet a fair bit, where you can have a boolean that can be named with "is", "has" and "should" and things like that at the beginning, which makes it so much more clear what it is... So instead of calling a boolean for example "something"... Or I guess we can come up with a better example, such as...

**Kevin Ball:** "Hide", versus "is hidden."

**Suz Hinton:** Yes, thank you. That is perfect. Yeah, so "should hide" or "is hidden" or something like that is better than just the word "hide" or "hidden" or something. "If hidden" is not as clear as "is currently hidden" or something like that... And I think that that's really good to be a little more explicit in your boolean, so that people understand exactly what you're intending to do with them... Because they are such a simple primitive; it's like a true or a false, so there's not much you can extrapolate from there unless you name it properly.

**Safia Abdalla:** Yeah.

**Kevin Ball:** Naming is huge, and associated with that is just being extremely explicit, valuing explicitness over terseness. I think it's really easy to get sucked into how sexy metaprogramming is, and "Oh, I have so much power. I can do all these things, and I can write this really reusable code that does everything...", but code is read way more often than it is written, and the difference between writing one function and four or five functions is rarely that big in terms of time, but by being much more explicit you can really cut down on your bugs around "Oh, I didn't think about that case" or that sort of thing.

\[00:54:51.17\] I feel like I follow this trajectory that I think a lot of developers can probably resonate with, where I started out and I didn't know much what I was doing, and I just was happy to get it done; then I learned about metaprogramming and I was like "Oh, this is amazing! I'm gonna create these perfect systems, that are gonna be so cool", and doing all those fancy metaprogramming things... And you ended up in all these nightmare corner cases, and debugging, and "How the heck I did this?" and "How do I do that?" and whatever... And sort of went back to "Well, yeah, metaprogramming is a pretty useful tool occasionally, but for the vast majority of cases I'm gonna just be explicit, and just do the thing."

**Suz Hinton:** I have touched metaprogramming codebases before where other people wrote the metaprogramming, and I just think that that is also an area where it can get so subjective on how it's written depending on who wrote it. That's actually been one of the more difficult things for me as well, and I think that that's pretty much what you summarized right there.

**Safia Abdalla:** I think one of the great summary points that I take back from the conversation we've just had is if you write code that's easy to read, you're gonna write code that's easy to debug, and code that is also less likely to have bugs. So the root thing you're going for is always readability and accessibility.

**Suz Hinton:** Totally.

**Kevin Ball:** Also write less code.

**Safia Abdalla:** Oh, yeah.

**Kevin Ball:** If there's a CSS feature that does what you want, then use CSS. And let me go even more on that - use less powerful code the more that you can; so metaprogramming kind of fits into that, but even more - if you can do this thing in markup or in CSS instead of JavaScript, do it in markup or CSS... Code that you don't write doesn't have bugs. \[laughter\]

**Safia Abdalla:** That's quite true. That's actually the real solution... Just don't write code.

**Kevin Ball:** Don't write any code, yeah. Get out of the industry; no code required. But if we do it, you could take it in a number of dimensions, right? There's "Use the least powerful tool possible to get what you want", there's "Use well-used, well-validated frameworks and libraries", things where somebody else has probably already worked through this... And this isn't like "Use this random package that I've found on GitHub, that five people are using." This is like, "Okay, there's a reason why hundreds of thousands of people are using this library or this framework." It's got a lot of testing, it's got a lot of other things... Let's mostly use that, rather than reinventing the wheel.

**Safia Abdalla:** Alright. Those are some really useful tips. We are coming close to the end of the hour on here. Hopefully you all had a wonderful time listening to us and you learned something new about interesting cases where bugs can come up, and also how you can avoid those bugs in the first place.

Thanks for joining us here on the JS Party, the best party of all. Thank you to everyone joining me today - Kball, Nick, Suzie - and we shall see you next time.
