**Jerod Santo:** Hello one, hello all of our JS Party animals. I'm Jerod, your internet friend, and I'm joined today by my friend, Amal.

**Amal Hussein:** Hi, Jerod.

**Jerod Santo:** What's up, Amal?

**Amal Hussein:** I'm good. I feel like podcasting has now become my "Oh, I'm just gonna go to the grocery to pick up something for dinner" kind of thing, where I feel like I've been on the show so much recently, I'm just like podcasting -- I'm podcasting twice this week. That's insane.

**Jerod Santo:** Oh, my goodness.

**Amal Hussein:** I know.

**Jerod Santo:** You're like a pro podcaster now.

**Amal Hussein:** Yeah, yeah. I'm entering into the realm of Jerod and Adam, so... We'll see.

**Jerod Santo:** There you go. Pretty soon people will be sick of you, like they are surely sick of me at this point... Well, today we have an awesome topic. This is a requested topic, sort of. It's a requested guest, for sure - Gregg Tavares. Welcome to the show, Greg.

**Gregg Tavares:** Hello. I'm happy to be here.

**Jerod Santo:** Happy to have you. The author of WebGLfundamentals.org, and I'm sure you have many other things that you do as well. This show was requested by listener Daniel Buckmaster; wants to talk about WebGL, and so I thought "Hey, I don't know much about WebGL. I'll email Gregg and see if we can talk about WebGL." And he said "I'd love to come on the show. Are you sure you want to talk about WebGL?" Because WebGPU - that's the new hotness; it's going to be replacing WebGL 2, or kind of has, I don't know... You tell us what you told me, Greg, and why we're going to talk about WebGPU today.

**Gregg Tavares:** Right. Well, WebGPU shipped in Chrome in May, and it's going to be shipping in the other browsers as soon as they get it ready... Whereas WebGL shipped - I think it's 11 years ago, 12 years ago, so...

**Jerod Santo:** Old and busted, is that what you're saying? It's old and busted?

**Gregg Tavares:** It's not old and busted, but it's definitely done. I mean, there might be some minor modifications, but kind of time to move on. And WebGPU is the direction I think everybody's hoping it will go.

**Jerod Santo:** And it sounds like it is going that direction. You said Chrome shipped it, it's behind a flag, I believe, on Firefox and Safari. Edge, of course, Chromium-based, has green support on canIuse.com... So it's becoming a thing. It's not going to be a flash in the pan.

**Gregg Tavares:** It should not be a flash in the pan, no. There's a lot of people using it, a lot of different companies. I think Unity announced they're supporting WebGPU. I don't know if they've actually shipped anything other than a beta, but I'm pretty sure they announced that. If not, I'm in trouble. \[laughter\]

**Jerod Santo:** Breaking news.

**Gregg Tavares:** No, I'm pretty sure they announced that. And I know other people working on other things as well.

**Jerod Santo:** Okay. Well, tell us a little bit about yourself. Obviously, you've made this website, which is a comprehensive guide to WebGL... What's your background? What are you interested in, and how did you come to create this website and be interested in these technologies?

**Gregg Tavares:** I am actually a game developer, at least I used to call myself a game developer... I'd like to still consider myself a game developer, but the fact that the last game I wrote was in 2007 kind of suggests that maybe I should reconsider that title. And I actually came to Google in 2008, to write a game engine. That was called O3DE; you can look it up. It probably doesn't look quite like a game engine, but it was released and then abruptly cancelled. Google's never cancelled a project they've released...

**Jerod Santo:** No, that's new. That's new. You're the first one.

**Gregg Tavares:** \[00:07:41.17\] It was totally the right decision... And I ended up working on WebGL, which was the correct replacement; it's more it's more flexible, as people write their own engines, instead of having to deal with ours. And that was the better decision. And for whatever reason, I started answering questions on Stack Overflow, and one of the problems with these kinds of GPU APIs is they require a lot of setup... So you can answer it as quickly as you can answer most web API questions. If you want to draw a circle with a canvas to the API. It's like, you have a canvas, you create a context, you call arc, and then you call fill, and you get a circle, like four lines. No. It's like 70, 80, 100 lines to do that...

**Jerod Santo:** To draw a circle?

**Gregg Tavares:** Yeah, I don't know how small I can get it, but it's definitely not as small. It's very low-level. It's like assembly language, compared to a library. So people write libraries on top of technology like WebGL and WebGPU. And if you're smart, you use one of those; if you're a glutton for punishment, then you go your own direction, and do it all yourself.

**Jerod Santo:** I see.

**Amal Hussein:** Yeah, that's pretty cool. Just to confirm... So WebGL, the actual spec/web standard, is something that was driven by Google from the work that you were doing? Is that correct?

**Gregg Tavares:** No, I would say -- I'm gonna get these messed up. It was either somebody at Mozilla, or somebody at Opera, or both of them together kind of pushed for a WebGL at some point. Somebody, not me, decided "Yeah, that's the right direction. Let's go that way."

**Amal Hussein:** I see, I see. And how long has WebGL been a thing?

**Gregg Tavares:** I think it shipped in 2011...

**Amal Hussein:** Okay.

**Gregg Tavares:** So we started working on it before then, but I'm pretty sure it's shipped September 2011... I'd have to go double-check.

**Amal Hussein:** Wow.

**Gregg Tavares:** It's been so long, and I don't remember from yesterday.

**Amal Hussein:** Yeah, no, that's pretty cool. And so now it's on its next evolution, hopefully to be replaced by WebGPU, like you were saying.

**Gregg Tavares:** I think that would be the way to look at it. There's still some trade-offs at the moment, but we're trying to get rid of those. So anyway, I want to finish a little bit... Back to that as a story. So what happened was I would answer questions on Stack Overflow; and because the amount of knowledge you need to use it effectively is so large, you couldn't really answer a lot of the questions in the small format of StackOverflow. So I was like "Okay, fine, I'll go write some articles." Originally they were on my blog; after about five, I'm like "Okay, I should probably move to somewhere else, so maybe somebody else can contribute, or fix bugs, or things like that..." And it turned into WebGPU, or WebGL fundamentals.

**Amal Hussein:** That's very cool. I'm super-curious about this, because there's been this huge barrier to entry with WebGL, because it's kind of -- I don't even know, I feel like you need computer brain to effectively use it... I always feel really dumb, and I'm like "Why can't I visualize a matrix in my head?" There's all kinds of stuff. So I'm just curious, can you talk a little bit about that friction? Because when you're designing a spec, obviously, as a spec author, there's a level of bias that you have, because you're like the expert on this thing... So how do you get feedback from people to say "Is this thing easy to use?" Because I can count on one hand, and on one hand it's one finger out of my huge network of the people that I know that are actively using this...

**Gregg Tavares:** Yeah, there's a bunch of answers to that question. So one is WebGL was based on OpenGL, which means it wasn't -- it was an existing standard, and WebGL's goal was just "How can we bring this to the web?" So they didn't really have the opportunity to redesign it. They were like "Let's go with an existing standard, and then all these things that are using that standard will be easy to use." Whereas if they wrote something entirely new, all those things would just have to start from scratch. So I think that was the thinking.

So outside of the web, there's OpenGL, which has been used since the early '90s. And lots of native apps use OpenGL. It's still popular on phones, as far as I know... And I think it's still popular even on desktop for some apps. And so yeah, WebGL kind of had their hands tied. If their thinking was "We're going to bring OpenGL to the web", then they couldn't really redesign API. All they could do is make it safe for the web and try to make it webby where it needed to be.

**Amal Hussein:** \[00:12:08.13\] Yeah, that makes sense. Thanks for sharing that context. That explains a lot. So this is a leaky abstraction in the worst of ways, where it's just like "Here's the JavaScript way to use this really complicated thing, that was complicated to begin with."

**Gregg Tavares:** The other way to look at both of these APIs is they're kind of like Web Assembly, where they've come out with this thing called Web Assembly, or WASM, and you don't generally write WASM; you use some other tool, like Enscripten, or -- Enscripten lets you write C++, and that translates to WASM. So C++ programmers can write web code if they want. You see all the emulators -- if you've ever gone to the archive and you look up Commodore 64 games, or Apple 2 games, they're all running through WASM, which are running an emulator that somebody wrote for native, and they just recompiled it. So yeah, most people don't write WASM directly. And in the same way, most people probably don't write either WebGL or WebGPU directly. They use a library. The most popular one is probably Three.js. Another popular one is Babylon.js.

If you're using MapsGL, or Google Maps embedded, both of those use it for you. You don't have to do anything, you're just doing something at a higher level. So that's the most common way to get those things in, get usage. You don't have to do it yourself.

**Jerod Santo:** Here's how you know you're low-level - it's when you have a higher level abstraction called Three.js, that people also write higher levels for. Three.js, which I have used, and has not too bad of a learning curve... Still has one. There's some verbosity there, and some things to understand... And that's on top of this. So you guys are down there... Why so low-level, and why these technologies in general? You mentioned gaming, and then Google Maps... So what are the use cases beyond maybe those two examples, or in addition to? And why so low-level? Can you not bring it up a level for even the library authors?

**Gregg Tavares:** Well, the reason it's low-level is because you get all this speed from being low-level. So you can optimize your solution for whatever you're trying to do. As far as examples, the hotness nowadays is machine learning, which uses these APIs. Also, everything on your display - your browser, all the text in it, all these camera images we're seeing, those are all done through the GPU. The browser handles it for you, and there are high-level APIs to do it, but if you want to do it yourself, Google Maps is an example; that one's all WebGL at the moment. I'm sure a WebGPU version is being worked on... I haven't seen it, but it goes without saying that it has to happen. So this is basically the basic technology of getting anything on the screen nowadays, is these low-level APIs.

And a good example -- I don't know if this is a good example. Let's see. Back when Chrome shipped, Chrome used the CPU to render, and they had a fast renderer, and it had its impressive demos. I don't remember -- they had like these bouncing ball physics demos that they showed off, and it was pretty neat \[unintelligible 00:15:02.25\] fast at the time. Then all the OS'es and the browsers added GPU rendering. Using the GPU itself will draw triangles for you, and based on that, you get all the stuff you see. Triangles with textures on them, so with images in them. And that's mostly how stuff works today. But lately, using something called compute shaders, which - this lets you kind of do generalized computing on GPUs. There are newer algorithms that take it even further. So there's a library called Vello, which you can look up - I think it's called Vello - that does structure graphics, like SVG type of stuff, and you can use it to render UIs and things like that. That's using completely software rendering; software meaning that... I don't know how to say that; they're not asking the GPU to use its older rasterizing functions. They're actually computing the pixels themselves. This is like a progression.

\[00:16:01.08\] Another examples is - I think Unreal has a renderer called Nanite, and they're also doing new techniques, where they're rendering things themselves in ways that just 5-10 years ago were very less common. So if we gave you a higher-level API, those things wouldn't be possible.

**Jerod Santo:** It makes sense.

**Gregg Tavares:** If we only give you SVG, you can't do the lower-level things.

**Amal Hussein:** That's really cool. So I kind of want to take a few steps back, and maybe we can use this Google Maps app that everyone's very familiar with to kind of walk through - okay, I'm an engineer on Google Maps. I have a ticket that's landed in my queue, that's like "Alright, here's a spike to explore and estimate what it's going to take to convert from our current implementation, which uses WebGL, to WebGPU. So here's the spike to go investigate, what's the effort? What's the gains? What's the migration path? What's gonna break? What works across what browsers? How do we handle this gracefully, so that we can progressively update?" Walk me through that spike. Because that's a very real use case, that a lot of engineers have to deal with, even within tools like React, for example. I remember back in the day when I was like -- I think I did the React 16 upgrade for my team, and... You know, we just had to figure out how this is going to impact us, and... You know. So can you walk us through that?

**Gregg Tavares:** That is gonna be hard... \[laughter\]

**Amal Hussein:** Yeah, it's gonna be like a bullet-pointed answer, right? I get that.

**Jerod Santo:** Well, that's his spike. He spiked it out, it's gonna be hard.

**Amal Hussein:** \[laughs\] I love it, Jerod.

**Gregg Tavares:** Well, I don't know what'd be easier to understand. To me a more interesting one is when they went from the old Google Maps, where it served tiled images, to the new Google Maps, where it used WebGL. And I don't remember if there was one in between. But that was a huge change, because it went from these prerendered tiles, to a system that -- when they announced that, they pointed out they can change whichever roads are labeled or which roads are highlighted, or they can show different things, all because they switched to dynamic rendering. And I think at the time they couldn't do it with a 2D canvas API, because it was too slow. But if you go into Google Maps now, and you zoom in and out, and you move around, if you're lucky, everything always runs butter-smooth.

**Amal Hussein:** It's impressive, actually, I have to say. That is one of the Google products that I use almost every day, and I've now converted my phone to -- I have an Apple device. I had an Android for many years; I was like an OG Android user. I had the Motorola Droid, all the way to like the Pixel 3, and then I was just like "I'm done", for lots of reasons, which maybe we can have another show about. But now that I'm an Apple user - obviously, who wants to use Apple Maps, right? Because I can always reliably use maps on web, on any device, and it works. It's really, really good.

**Jerod Santo:** It sounds like it's a prime candidate for cancellation, Greg. Don't you think they're going to be done with -- isn't it time that they just closed that project down? \[laughter\]

**Amal Hussein:** No, but I feel like people should know Maps uses tools like WebGL. And I think more so -- I wish it wasn't closed source, because I would love to see the engineering behind it.

**Gregg Tavares:** Yeah, that one is probably gonna stay closed...

**Jerod Santo:** It's probably gnarly, in my thinking.

**Gregg Tavares:** It is probably pretty gnarly... And you know, it's one of those things where there's petabytes of data probably. They did something recently where you can actually pull the data out and use it in 3D libraries. And there are examples of using it in Three.js, in Babylon, and in Unity, and other things. So maybe that'd be more relevant to see that source now. I have no idea, I haven't looked.

As for WebGL to WebGPU, nowadays - this is my personal point of view, I guess, but there's like three or four major graphics APIs. There's OpenGL, there's Vulkan, there's Metal on Apple devices, and there's DirectX 12, 11-12 on Windows devices... They're all different, but at a certain level they're all the same. So porting from WebGL to WebGPU, depending on how you look at it, is just a matter of "Okay, over here I call fillRect() and over there I call rectFill()." \[laughs\] It's not that simple... But at a certain level, it is.

**Amal Hussein:** \[00:20:17.23\] So what's the advantage? What I'm trying to understand is, as an engineer, there's two things I care about - how this thing performs, how this runs on the metal, how does it perform in the browser. The other thing I care about is the usability of the API. So what improvements do I get from using this? Is there a velocity increase in my productivity as a developer when using WebGPU? Or is it still the same complicated API?

**Gregg Tavares:** They're all complicated. They haven't gotten the less complicated.

**Amal Hussein:** Okay.

**Gregg Tavares:** The difference is new features have been added, that aren't available in the old APIs. So those new features can enable huge new features that you couldn't do before.

**Amal Hussein:** Okay.

**Jerod Santo:** So is there any reason to write WebGL today?

**Gregg Tavares:** So... Yes. Unfortunately. These new features require new hardware. So if you're targeting a market segment that is using very old hardware, you might find that WebGL reaches more users than WebGL 2, or WebGPU.

**Jerod Santo:** Gotcha.

**Gregg Tavares:** Those users that have these old equipment go down all the time. You can also decide to fall back. In Google Maps it will run without WebGL. It just goes into a mode that loses some of these features. You can't go in 3D; the roads and things like that might not get as dynamic. It doesn't run at 60 frames a second, or as smooth, but it still runs. Kind of like you can still get the -- well, I guess they're deprecating that, but you can still use the plain HTML version of Gmail...

**Jerod Santo:** Yeah... For now.

**Gregg Tavares:** ...versus the full app version. For now, yes.

**Amal Hussein:** But I wonder if there's an old .gmail.com, where you could forever use the HTML version.

**Jerod Santo:** Like old Reddit?

**Amal Hussein:** Like Reddit, yeah. So I guess - here's the thing... I think for me, this seems like a perfect use case for a progressive experience, where you have "Here are the old APIs, here's the new ones." We have a codebase that's going to live side by side until the hardware catches up more universally, or something like that... But I feel like there's definitely a marketing problem for WebGPU... Because if it can't run on all the same devices as WebGL, what's my incentive to spend the engineering time on this? Because I'd have to maintain two codebases, or two implementations.

**Gregg Tavares:** Well, I think you have to look at your particular market and decide whether the percentage of people who have these old machines, or somebody you want -- because let's say you're making a game; no matter what you do, the game is not going to run fast enough on their machine. So then there's no reason to target that old stuff, as an example. So it kind of really depends on what you're making. I don't know if I have anything else to say here, but...

**Amal Hussein:** Yeah, that makes sense.

**Jerod Santo:** What you're making and where you're starting. Like, are you starting fresh? And what are you targeting? Because I would actually come from the other angle. I would be like "Why not WebGPU?" That's what I would first ask myself. And if the answer is "Well, because I need to support these devices ongoing", well, then that's your answer. But otherwise, I'm looking forward, and I'm seeing support coming along for WebGPU, and I'm thinking "Why WebGL?"

**Gregg Tavares:** Another example is maybe the thing you want to do - you just can't do it any other way. So WebGPU gives the web page access to something called compute shaders. They're not available in the other APIs... And machine learning is pretty much compute shader-based. So if you want to do large language models in the browser, there are ways you could coerce it into the older APIs... But yeah, basically, the thing is you should probably want to use WebGPU.

**Amal Hussein:** Yeah, that makes sense. And so I'm curious, since these things are going to be living side by side more or less indefinitely, because of the arc of the web... Are there features going to -- I guess, is there a deprecation for WebGL? Because --

**Gregg Tavares:** \[00:24:06.11\] I don't know if we'd use that word yet... I just don't think there's going to be a lot of effort. All the people on the browser teams that would work on the two APIs -- well, they're the same people working on both, and so they only have so much time, and they all want to move forward. If they had to split their time between the both, that would be a huge drain, so...

**Amal Hussein:** So new features probably will exclusively be added, like high likely exclusively be added to WebGPU.

**Gregg Tavares:** That is my guess.

**Amal Hussein:** Okay, that makes sense.

**Jerod Santo:** So if most of us plebs are using this via libraries, are the libraries then being ported? So if I'm on Three.js, and I never wrote a line of WebGL, can I just be like "Hey, Three.js, switch to WebGPU mode" and I get to use that now?

**Gregg Tavares:** Pretty much. Yes.

**Jerod Santo:** Awesome!

**Amal Hussein:** It's pretty cool.

**Jerod Santo:** No more questions. \[laughs\]

**Amal Hussein:** Yeah, we're done now. End of podcast.

**Gregg Tavares:** It's all you needed to know. Yes.

**Amal Hussein:** Okay, actually, I do have questions about this API. So can you maybe tell us about what's new? You mentioned one of the shading things, and that's -- that's the term, shading things?

**Gregg Tavares:** So let me try to make fair -- yeah, these APIs basically just run functions on the GPU. And that's where all the complications comes from, because my analogy I like to use is there's functions like map and reduce, where you give them a function to run and they run them... So imagine you could transfer that function to another machine, and say "Run it over there." But in order to do that, you also have to transfer all the data over to the other machine, and then you need some way to tell that function "Okay, how do I find the data? Where did you put it? What is it called? What format is it in?" And that's where the complication comes from.

So in the older APIs -- well, in both APIs, there's something called vertex shaders. And these compute vertices on the screen; just positions to draw triangles. And whenever a triangle is computed, there's another function called a fragment shader, and as that triangle gets turned into pixels, it goes along and it says "Okay, I need to draw a pixel here, a pixel there, a pixel there", it calls the second function, the fragment shader, to say "What color should I make this?" And you tell it, and you provide a function to figure that out.

And then in WebGPU there's also a compute shader. A compute shader is just a function where you say "Call this function, this many times." And that's all you get; you get an iteration number in the function, and the rest is up to you. Use that iteration number to index into arrays, to write into arrays, to do some computation... But the complication that comes is that you have to write these functions in some other language that's not JavaScript; you transfer them over to the GPU, and then you have to transfer all of the data, and then wire it all up. And in WebGPU, that all happens by index. So you say "In index one, I put this data. In index two, I put that data. In index three, I put this data." And in your function, you have to say "Okay, this array, array number one comes from index 12, and array number nine comes from index three." And that's where it turns into more code than a higher-level API.

**Amal Hussein:** Yeah, yeah.

**Gregg Tavares:** And then generally, you don't want to deal with the numbers, so you're gonna write something much higher level for yourself; so you can deal with names and all that stuff, but underneath you have to wire it all up.

**Amal Hussein:** Yeah. And this is why this honestly makes me --

**Jerod Santo:** Greg's down there underneath, wiring it together...

**Amal Hussein:** ...my brain is like exploding right now. Honestly, this is triggering feelings that I had when trying to play around with this a few years ago. So is it safe to say that WebGL and WebGPU are kind of like -- it's like rendering on steroids? Because HTML assumes this document type structure. And in the world of the Web GPU and WebGL everything is just kind of like - I don't know, it's like you're in the matrix, and there are no linear shapes, or whatever. So I don't know, it's just -- it's really cool that we can do this type of rendering in the web.

**Gregg Tavares:** Yeah... I'm not sure what the question was already...

**Amal Hussein:** Yeah, no, I was just curious to see, is this -- I mean, how would you compare this to kind of the HTML rendering engines, essentially?

**Gregg Tavares:** \[00:28:15.25\] Well, I guess I would compare -- the maybe easier comparison is SVG versus canvas. In SVG you declare this hierarchy of elements, and then it renders it, and you can update the elements, and it'll update it. That's very similar to the DOM; in fact, it is the DOM. Versus the Canvas API, where you just call these functions to draw and they just put pixels in a rectangle... And there's no structure anymore. There's nothing left there.

**Jerod Santo:** It's more imperative versus declarative, right?

**Gregg Tavares:** Right.

**Jerod Santo:** So it's HTML, and with SVG you're declaring the shape of a thing. But with this, you're actually giving it instructions on how and where to draw, and when, and to update etc.

**Gregg Tavares:** Yeah. Except that, again, WebGPU brings in compute shaders, and now it's just \[unintelligible 00:29:00.01\] It doesn't have to be about drawing.

**Break:** \[00:29:09.11\]

**Jerod Santo:** The whole machine learning thing I think is definitely interesting. It's also concerning I guess for me as a guy who visits a website on my phone, and all of a sudden it's machine learning in my browser... It seems like there are security and privacy concerns with this... Isn't there?

**Gregg Tavares:** Yeah, that's a good question. And I have no idea.

**Jerod Santo:** Okay.

**Gregg Tavares:** I can tell you -- I think, I'm pretty positive this is true... If you go into a video chat app like we're in now, and it has the options to replace the background, or put a hat on your head, or eyeglass on your face, that's all compute shaders type of stuff.

**Jerod Santo:** Right.

**Gregg Tavares:** They might be using WebGL kind of coerced into kind of doing the same thing a compute shader would do better, because they didn't have compute shaders until now... But yeah, those kinds of things are things that are common to use the GPU for.

**Jerod Santo:** Do those things usually require permission, or like explicit from the end user, of like "Yes, you may use my GPU" or "No"?

**Gregg Tavares:** Not currently. Maybe some browsers have that option, to say "Hey, just don't allow pages to use this."

**Jerod Santo:** I mean, most people won't know what that is, but...

**Gregg Tavares:** Right.

**Jerod Santo:** ...you know, you go to a website, it's doing some inference inside of your browser, and your phone starts to get hot, and you're like "I didn't know you were doing inference inside the browser." That's what I mean by -- that's not really security... I don't know what it is. It's like abuse, to a certain extent.

**Gregg Tavares:** Yeah, that's a good question. I don't know that it's worse with GPUs than CPUs...

**Jerod Santo:** Well, just because of this new use case of compute, versus -- I thought you were saying WebGPU versus WebGL. But yeah, you could do it with a CPU, I guess, already.

**Gregg Tavares:** Yeah, you could spawn a bunch of workers and do a whole bunch of work on a CPU. It's not like it adds a new

capability...

**Jerod Santo:** Yeah. There's plenty of ways to abuse your end user out here...

**Gregg Tavares:** Right. Hopefully, it's either "Hey, every time I go to the site, my battery goes down. I'm not going in there anymore."

**Jerod Santo:** "I'm not gonna go there anymore." \[laughter\]

**Gregg Tavares:** Don't reward bad behavior.

**Jerod Santo:** Right.

**Amal Hussein:** It's hard to know these days; there's so many battery-draining apps.

**Jerod Santo:** Yeah, that's true.

**Amal Hussein:** \[00:32:10.25\] But it does bring up an interesting ethical question though, which is "Should there be some type of user consent for heavy compute?" Where it's like "Hey, this is your device, this is your battery; maybe you're in an airport, maybe you're in a train station..." Imagine going to a website and just like having 10% of your battery drained in like five minutes. That would that would hurt, you know? And so I'm curious... Any thoughts on that, Greg?

**Gregg Tavares:** I'm not the person to answer... I would ask what's the difference between that and a native app? You go to the native app and it starts using whatever features it wants...

**Amal Hussein:** Yeah. I would say this applies probably across the board, just in general.

**Jerod Santo:** I would say there's a sentiment that when you visit a website, that you're not giving it what you're giving a native app. Like, I've installed you, I'm launching you from my desktop, versus I follow a link off of x.com to a new website... And all of a sudden it's just -- I just feel like it's more lightweight. It's the web. You've got tabs, and you close a tab, open a tab, visit a website, hit the Back button... It doesn't feel like you're giving it native app experience, unless of course you install it as a PWA or something, which is all good. So it does feel slightly different... But that being said, when I open up Google Maps on my phone inside of Safari and I'm using that, I understand it's doing some heavy stuff inside of there. And so maybe it's not super a problem. Definitely not one that Gregg has an answer for; he's made that clear...

**Amal Hussein:** \[laughs\]

**Jerod Santo:** So we're just kind of talking out loud here...

**Amal Hussein:** We'll just speculate on your behalf, Greg. It's fine.

**Jerod Santo:** Which is what you do usually, versus...

**Gregg Tavares:** Well, I mean... Yeah, speaking for myself - a lot of native apps are just a browser. And even if they're not, they're probably using some ad library, and they get updated every week, and you don't know that what you installed when you installed it is the same thing you're running now... And the ad libraries are bringing a third party, so they could have added something to it... It's not really that different of an experience. I know that it seems like it, but if you actually drill down to the tech, you're not actually getting a different experience. Especially with the autoupdating, all the time. Every time you go and -- who knows what technology \[unintelligible 00:34:25.18\] and to show the ads, where they're coming from, or what other third parties they've installed. Maybe even their database library is updated weekly, and it's a third party library... So it's not really that different.

**Amal Hussein:** Yeah, that's fair.

**Gregg Tavares:** I'm not trying to make excuses, just... It's a problem in general, and I don't know how to solve it.

**Jerod Santo:** Yes, agreed.

**Gregg Tavares:** I'm all for if you want to be able to block it, block it. For anything. I don't want a random website to access my camera, I don't want them to access my mic without permission... I could see the argument that some people might want them not to access -- I mean, people turn off JavaScript; there's people who just turn it off. They say "Hey, a site should not be able to access JavaScript, unless I allow it." And that's a totally reasonable request.

**Jerod Santo:** And I do think it's something that the browser builders can do. Because for instance, Safari on MacOS does have a feature where it's like "Hey, this tab is using more battery or more memory than we typically expect from a tab. Do you want to close it?" You know? And sometimes you say yes, and sometimes you say no, but at least then you know what's going on. So I think that definitely it's something that at the browser level I think we could provide affordances for people, just to know what's going on inside of their browser, and make decisions.

**Gregg Tavares:** File a feature request. On all the browsers.

**Amal Hussein:** Yeah, totally.

**Jerod Santo:** Absolutely. On all of them.

**Amal Hussein:** And speaking of features, I'm actually curious, Greg, to hear what is your favorite WebGL or WebGPU API, and what is it, and how does it work? And what does it do?

**Gregg Tavares:** I'm not even sure I know what that question means...

**Amal Hussein:** \[00:36:02.10\] Well, what's your favorite API? Do you like 2D rendering, 3D rendering? Do you like playing around with lighting? I don't know... Do you like doing stuff with textures? Shadows? I don't know, what's your favorite thing to do?

**Gregg Tavares:** I like games.

**Amal Hussein:** Okay, you like games. You like building games.

**Gregg Tavares:** I like games. So I want to enable games.

**Amal Hussein:** Okay.

**Gregg Tavares:** And I love seeing artists use this tech to make things I haven't seen before. So if you go look at -- I don't have one off the top of my head, but you can find... You go look on Steam, and you look at all the games; I'd like to see some of those be brought to the web, if possible. Or at least to enable them. That's the place that I guess I find the most inspiration.

**Jerod Santo:** Are there tools for game developers for cross-platform kind of ports over to the web via WebGPU or WebGL?

**Gregg Tavares:** There are. I mentioned Unity before. They already shipped long ago WebGL and WebGL 2 exporters for Unity games. And there are websites - I think \[unintelligible 00:37:00.04\] for example, is full of games; you can just click on them and they'll run in the browser.

**Jerod Santo:** Yeah. You effectively get that for free... I mean, sure, there's probably a little bit of --

**Gregg Tavares:** To some degree. There might be things like networking, that you have to use the right libraries; if you're using something that's native only, you'll have to figure out a way that it's going to run on the web. The biggest issue that people have with games is that games are often - especially big ones, are often like a gigabyte download, or multi gigs... And then that's not really a web thing. So the biggest problem I think developers have is they start just making a native game and then "Oh, I can push this button and get a web app? Okay, I'll push it." But did you actually design this for the web? No...

**Jerod Santo:** Right.

**Gregg Tavares:** So I think the games that will actually do well are going to require web-first design. And I haven't seen too many of those.

**Jerod Santo:** Yeah. I'm in the same boat there. By the way, side note, I read your recent blog post about Tears of the Kingdom, and I would love to maybe have a separate conversation with you about that game, because we have different takes on it, Greg. Different takes. Both being huge fans of Breath of the Wild. So maybe if you have time, you can stick around afterwards and chat with me about that. But I'm thinking about your teaching; you spent all this time, you've written all this stuff for WebGL Fundamentals... Is WebGPUFundamentals.org - is it a domain held? Are you rewriting it...?

**Gregg Tavares:** It's already there.

**Jerod Santo:** It exists, and it's done?

**Gregg Tavares:** It exists, and -- well, it's not done; not even close. But I'm working on it. If I get lucky, Google will give me some time to work on it... But doing it on my own, it's gonna take a long time. I think I calculated, to get all the same lessons from WebGL Fundamentals to WebGPU Fundamentals, it'll probably take another two months of full-time work. And so that's a lot of work.

**Jerod Santo:** That's a lot of work.

**Gregg Tavares:** And it's a lot of redoing it all, because you don't want to keep it -- obviously, you have to do... It's not just like copying it over verbatim and kind of translating; you're also like "Oh, this would be better if I did it this other way. Okay, let's spend some time on a new diagram", things like that.

**Jerod Santo:** It seems like something that Google would be incentivized to allow you to work on.

**Gregg Tavares:** Well, I think they would be, except that there's just too much other stuff I need to do. \[laughs\]

**Jerod Santo:** Other things that need doing.

**Gregg Tavares:** Yeah.

**Jerod Santo:** So what is your nine to five, in terms of what's your marching orders there? Are you down there implementing WebGPU implementation?

**Gregg Tavares:** I am.

**Amal Hussein:** S the Maps team hasn't -- they haven't sequestered you to help with their migration...

**Gregg Tavares:** I think -- no, they're mostly like "Yeah, get your low-level work done, so our \[unintelligible 00:39:30.26\] can get their work done." \[laughter\]

**Jerod Santo:** So you're lower-level than the low level. So we've got the real low-level guy here, Amal. This is nice. What about us high-level folk? What's the best on-ramp?

**Gregg Tavares:** To me the best on-ramp would be go to Threejs.org, click on the Manual button, and read the first page. It will get you some cubes on the screen just as an example... You can probably pick a loaded gltf file, which is a format for 3D files. They're easy to find online, and then once you know how to load one and display it, then you can start putting 3D together. You can deal with that in an hour or two of looking up -- or you can ask your favorite machine learning thing "How do I do this?" and it'll probably tell you...

**Jerod Santo:** \[00:40:20.10\] \[laughs\] Make sure it has access to the internet so it's not outdated... Because at least with WebGPU, it's a moving target at this point.

**Gregg Tavares:** With WebGPU no, but if you use a higher-level library Three.js, there's plenty of right tutorials that are not out of date.

**Jerod Santo:** Right. What about the gaming side? If I want to get started with gaming in the browser as a creator, what's your go-to?

**Gregg Tavares:** That's a hard question. There's something called Play Canvas; I've never used... It's one of the few full web-based, web-first engines, but I haven't actually built anything in it. Unity is obviously very popular, and you can just click the button, export, and you'll get something. It just comes back to that thinking about the web when you're designing for the web, as opposed to just like throwing in all of Grand Theft Auto assets level in there and saying "Hey, you've got to wait six hours while you download this before you can start playing."

**Jerod Santo:** Plus you've gotta worry about that new fee structure, you know... \[laughs\]

**Gregg Tavares:** The other one is -- yeah, exactly. The other one is -- for me, I like games; a lot of times - it really depends on what you want to make. You can prototype it in a much simpler way with the Canvas 2d API, or one of those others. Suppose you're making a 2D shooter or something like that - just get something working before you go crazy and turn it into 3D.

I don't know if you've ever seen, there's something called a fantasy console, the most famous of which is called PICO-8. And it's kind of emulating... It's not emulating, but it's kind of like "Hey, so I'm gonna give you a Commodore 64. Make a game." And the point is that with this limited system, it only has 32k memory, the screen is only 120 pixels by 120 pixels, it only has 16 colors... You free yourself from "Oh my God, how am I going to make this look as good as Elden Ring?" You just keep it simple, get it done. And so people find that a great way to start. And then they might start there with a prototype, and then once they've got something, "Oh, this is fun. Fine, let's make it beautiful, and we'll take it to another engine."

**Jerod Santo:** This is really cool. I will add this to the show notes. These are really neat games, just on their homepage.

**Amal Hussein:** Yeah. I'm curious, like, if you think that there's a future, or maybe even a present where you have generative AI basically creating the next Angry Birds, you know what I mean?

**Gregg Tavares:** It's already happened.

**Amal Hussein:** Okay, it's already happened. Could you tell us the story?

**Gregg Tavares:** Well, this is something like ChatGPT 2 or 3... Somebody said "Hey, write me some games in JavaScript", and they described the games, and they made -- you had to squint really hard, because they made \[unintelligible 00:42:50.28\] They made a tiny little Zelda adventure game, they made a -- \[unintelligible 00:42:55.15\] Okay, there's a block on the screen that represents the player, there's a block on the screen that represents enemies. I want the enemies to go to the player. If they touch the player, he loses hit points. If the player strikes one, she gets a gold point", those kinds of things. And they went through all the prompts they had to use to get it. And this was old. This is like three, four, five years ago. My mind might be bad, but...

**Jerod Santo:** You're way behind, Amal. Come on.

**Amal Hussein:** Yeah, I do remember that. I do remember that. But I guess my question was really specific to using JavaScript in the browser, creating these amazing, rich, browser-based games.

**Gregg Tavares:** Getting it to an amazing level... Yeah, it seems obvious...

**Jerod Santo:** That's the trick.

**Gregg Tavares:** It will happen. You'll ask Midjourney to make your art, and you'll ask some other thing to write your code, and it'll just work. I'm sure people are working on it. And I know there was some post where somebody made like a Magic the Gathering card generator... And I'm sure they can make a card game generator, and then glue those together.

There was also a talk - this is not AI-related, but there was a talk where somebody made a slot machine generator, and they actually published 1,500 of them... Until they got taken off the store. But they gave a talk about it at GDC...

**Amal Hussein:** \[00:44:16.07\] Wow...! That's hilarious.

**Gregg Tavares:** And they had made it -- so they just typed in a couple keywords, like, you know, unicorns and candy canes, and it would make slot machines with unicorns and candy canes and publish it.

**Amal Hussein:** That's hilarious that it got taken off the App Store. Why? What's the reason? And this is why -- I mean, for anyone listening, this is why it's really important to bring these technologies to the open web. Like, no one should be able to take down your app, or your store. There shouldn't be this \[unintelligible 00:44:38.23\]0\] stopping your creativity. Like, you want to publish 1000 websites? Knock yourself out. I think you should have the right to do that, you know?

**Gregg Tavares:** Yeah, totally. As for the app store, I think the App Store is both -- I don't know how. They have some limits... I have no idea why \[unintelligible 00:44:53.21\] Something's fishy is going on here. I have no idea. I'm not the person who decides.

**Amal Hussein:** Yeah, but maybe that's going to be the new normal in the world of \[unintelligible 00:45:02.13\] creation. I don't know, we're gonna greatly exponentiate the number of stuff that's on the web, and with that we're gonna have to figure out how we're going to curate it. I think curation is like our next big problem. How do we surface important stuff? How do we filter signal from noise? I think that's going to be our next challenge. In every genre: film, art... All the things.

**Gregg Tavares:** You'll probably just ask the AI, "Hey, what's the good stuff?"

**Amal Hussein:** \[laughs\] Yeah, to be meta, right?

**Jerod Santo:** Yes. Let them curate themselves for us.

**Amal Hussein:** Let them curate themselves for us... \[laughter\] Really, Jerod?

**Jerod Santo:** I mean, why are we working so hard?

**Amal Hussein:** I agree, you know? I mean, it's gonna be like "Alright, well, man, I'm feeling really lazy. I need to take a shower, but I don't feel like washing my hair." And it's gonna be like "Well--" My first thing will be like "Oh, can I get a bot to do that?" Is that gonna be our default to everything?

**Jerod Santo:** Pretty much...

**Amal Hussein:** Can I use AI for that?

**Jerod Santo:** We'll end up like the people on WALL-E. You know, open the spaceship, where they're just like -- they don't do anything; just kind of float around on their pods, and get overweight.

**Amal Hussein:** Oh, good Lord...

**Gregg Tavares:** I'm really excited about all that stuff, to be honest... You mentioned generating the games, and there are times when I want to make a game. The artists may be scared of this, but where I need assets, I need a character to move around, and I need a forest of trees, and piles, and a castle, and at some point I can just ask "Hey, make this..." I don't know if that's good or bad. I'm not trying to make a judgment.

And I don't think you're gonna get the style that you want, a cohesive style for anytime soon, maybe, where a real artist that you hire, or if you're an artist, to have a vision; it's probably not going to come from AI soon... But I don't know.

**Amal Hussein:** Yeah. I would agree, I'm very excited about like the assistive elements of AI. That's huge. I mean, I would love a team of engineers working with me, for free minus the cost of the planet, at any time of day. That'd be great. Engineers that are smarter than me too, that know more programming languages, and can fix more bugs than then they create... Yeah, all that sounds great.

**Jerod Santo:** Well, that leads me to my final question for you, Greg. A serious one. Why have you not created a game since 2007?

**Amal Hussein:** Wow...

**Gregg Tavares:** Yeah, that's a good question I ask myself every day.

**Jerod Santo:** \[laughs\]

**Gregg Tavares:** And I talk to friends, "Hey, we should make a game", and then yeah, we don't do it. One of it is golden handcuffs. You come to a big tech company and you're like "Oh, what? I don't have to crunch, and I get paid a lot more?" Another is that the industry changed. The last I shipped it was 2007-ish... The iPhone came out in 2007; mobile games became a thing. Free to play games became a thing. When I came to Google, I mentioned that I came to write a game engine; that was because at the time Unreal actually cost like a million dollars to use it.

\[00:48:18.13\] And I remember -- Unity might have been free, but they didn't have the reputation yet for "Oh, this is something you should use." So I came to Google to make an open source engine. That all changed. Now there's two -- they're not free, but they're free to use to prototype at least... And to even ship. It's only if you make a lot of money that they want some money.

And there's things like Godot, and there's a whole bunch of other engines out there now that weren't around back then. So that's changed it in multiple ways. It's made it easier... So theoretically, if those existed back in 2008, then I probably wouldn't ever have come to Google, and I would have just tried to make something... On the other hand, there's -- I don't remember what the numbers are. There's several thousand new games every day. And so it's just much harder to stick out, to look at that and go "I have an idea that's gonna sell." Oh, wait, I'm gonna put three years in, and it's gonna sell five copies? I've had friends that do that; they made the game look beautiful, they shipped it... I think they sold 80 units.

**Jerod Santo:** Yeah...

**Gregg Tavares:** And it was two years of their life. So games have always been that way. You're like "I'm going to be a rockstar.'

**Jerod Santo:** It's a moonshot.

**Gregg Tavares:** Yeah. Finding a way to be confident that I'm going to make something that's going to have a market... And it's something that -- I want to make something that's unique, and having a unique idea is also... I'm not complaining about anybody else's game, but there's so many games that are just like "That's just \[unintelligible 00:49:38.07\] Yeah, I've played Metroid, I don't need to play it again. I want something new.

**Amal Hussein:** Yeah, yeah, yeah, yeah.

**Jerod Santo:** Well, that's how I feel about modern music, modern movies... There's just a lot of -- they're remixes, but they're not inspired remixes. They're just kind of like shallow clones.

**Gregg Tavares:** Yeah. I'm not saying I don't get enjoyment out of them, but... I would like to do something that somehow sticks out, at least in my head. I know a lot of designers, they probably think their game is completely different, but I can't tell... At a glance. Maybe if I got into it I could tell.

**Amal Hussein:** Do you watch that show on Apple, Quest-Something?

**Gregg Tavares:** I have not. Mystic Quest I think it was called, something like that?

**Amal Hussein:** Mystic Quest, yes.

**Jerod Santo:** I haven't watched it either. Why? Is it good?

**Amal Hussein:** Yeah, I watched a few episodes... It seems interesting. For example Silicon Valley, that show on HBO, about the tech industry and startups - I can't... It's very triggering for me. I cannot watch that without thinking "Oh my God, that's like 50 people that I know are just like that..." It's really hard for me to sit through that show. I haven't watched anything past the second season, because I was like "Oh my God, this is too much." But I feel the same way about that show. It's just too much like work, and I'm just like "I can't..." I watch TV to like --

**Jerod Santo:** Because they work at like a game dev company; that's what the show is. It's a group of people that are creating video games.

**Amal Hussein:** Right. Right. Right. It's just, there's too much similarity with how I work, so... But yeah, I was just curious if you were a fan.

**Gregg Tavares:** I have not watched it. There is a book that I just read, that was recommended by a close friend who's also a game developer, called "Tomorrow and tomorrow and tomorrow." And I was kind of shocked that it has -- I don't remember if it's 70,000 or 120,000 reviews on Amazon. It's like "Wow, I'd never heard of this thing, and apparently it's pretty popular." But it's about two kids who meet in junior high school, and in college they make a game company. And it was really like "This is my dream! Why didn't I get to live this life?" \[laughter\]

**Amal Hussein:** Aw... You kind of have.

**Gregg Tavares:** Well, I did...

**Amal Hussein:** Yeah. Honestly, if you ask me... I mean, if you're someone who's contributing to the web platform at a low level like you are, you have a legacy that I think is cooler than creating games, in my opinion. Because you're enabling others to create games. So you're like the baseline, you know what I mean? So think about it that way. You're upstream now.

**Gregg Tavares:** Alright...

**Jerod Santo:** \[00:52:07.22\] "Alright..." \[laughter\] I don't think he's convinced. He's over there thinking "Okay, I'll think of it that way", but he's not really thinking about it that way. He's over there thinking about his game.

**Gregg Tavares:** It's like, you want to be the director, and you're making the canvas. \[laughter\]

**Amal Hussein:** He's like "I don't want to be writing scripts... What's a director and a camera person gonna do without a script?" Greg, you're writing the scripts, so...

**Gregg Tavares:** I think writing the scripts is the thing -- no, I'm making the pencils.

**Amal Hussein:** \[laughs\]

**Jerod Santo:** That's right. He's pretty low level.

**Amal Hussein:** Alright. Alright. Alright. Anyways...

**Gregg Tavares:** It needs to be done.

**Jerod Santo:** Well, I think what you need to do, Greg, is take WebGPU fundamentals.org and hand that off to ChatGPT. You've already written the first version... Just tell it to port WebGL over to this, and I'll spend my time creating the next great video game. I think that's your move.

**Gregg Tavares:** Yeah, well, I don't know about the thought of handing it over to ChatGPT, or whatever. It has crossed my mind. But the thought that all I'm doing is writing stuff to train ChatGPT... \[laughter\] Because nobody's actually going to come to the site; they're just going to ask ChatGPT, and it's going to tell it what it learned from my site. But you know what? That's fine, because that's just the way the world is gonna work in the future. All the kids are gonna ask their favorite large language thing or AI, and it's going to train it. And that's just the way it is now.

**Jerod Santo:** Right. In that case you're not even making pencils. You're like mining the lead, you know? \[laughter\]

**Gregg Tavares:** I'm teaching our overlords.

**Amal Hussein:** Geez...

**Jerod Santo:** Yeah, exactly.

**Amal Hussein:** Oh, man...

**Jerod Santo:** Well, we've come full circle somehow... Or haven't... But we need to close down. Any final questions, Amal, before we let Gregg go?

**Amal Hussein:** I would say that everyone should at least spend 15 minutes checking out this website. I think it's pretty cool. WebGPUFundamentals.org. Check it out. It's solid. No pun intended. \[laughter\]

**Gregg Tavares:** Yes, please check it out, and help out if you want. You're free to write articles. It doesn't have to be my thing. I don't know that anybody ever will write one, but... Yeah, it's definitely -- it's all open source. You can submit a PR if you find a typo, or you want to write an article, or you want to translate it. It's also set up to be easy to translate.

**Jerod Santo:** Nice.

**Gregg Tavares:** There's already, I think, six or seven articles that have been translated to Chinese, and two are to Japanese already... And yeah, people volunteer, so that's awesome.

**Amal Hussein:** Dope.

**Jerod Santo:** Very cool. Well, here's my final word... If you are out there building games on the web, or if you're using WebGL, or WebGPU for anything cool, contact Greg, let him know, thank him for the underlying work that he's been doing... And even just enabling folks like the Three.js folks to do what they do... Which perhaps you're building on top of.

So I will submit that to you. I know that that can go a long way, when you feel like you're just down there toiling, and maybe only the AI crawlers are going to be reading what you're writing... That's not a good feeling. So hook Gregg up with some props for enabling so many of us to build awesome things.

I will link up all of the -- specifically the game-related stuff, as well as the book you mentioned... All the things. If you're interested in \[unintelligible 00:55:21.12\] PICO-8 etc. in our show notes, as well as of course WebGPUFundamentals.org. So y'all can visit those things and check them out for yourself.

Greg, we appreciate you coming on the show, and for being a good sport, letting us pick on you a little bit, and schooling us as much as you can. I know that we couldn't quite go as deep as you can go... But we appreciate you joining us today.

**Gregg Tavares:** Thank you so much for having me. It was great. And yeah, check out the site if you want to actually know how to do it, because it's not something I think I've explained in \[unintelligible 00:55:51.03\]

**Amal Hussein:** He was about to say "in a podcast", but then he changed his mind. That was pretty funny.

**Jerod Santo:** Exactly.

**Amal Hussein:** You can't see his mouth, everyone. I saw his mouth. He started to say the word "p..." And he was like "Alright... Yeah, no." Alright, I get it. I mean, sometimes I wish our podcast had this \[unintelligible 00:56:08.00\] where it's like "Oh, here's like the AR version of our podcast. We can share screens with you."

But I think it's just as important for folks to understand how to talk about technology without a screen, because I think for me the most interesting conversations I have as an engineer are with my colleagues, when we're not sharing a screen. I just want to put that out there.

**Jerod Santo:** Cool. Well, my last word, even though I said I was gonna have a last word, is that podcasts aren't great for everything; different mediums for different things. What we can do though is we can expose people to new ideas and introduce them to places that they can go and extend their knowledge, such as WebGPUFundamentals.org. So hopefully, we have done that for you. Hopefully, Daniel Buckmaster at least is happy, as he requested this episode... But I think it'll be more than just himself.

Alright, I'm going to say goodbye before I continue talking even more. This is JS Party, I'm Jerod, that's Amal, with Gregg Tavares... We'll talk to you all next time.
