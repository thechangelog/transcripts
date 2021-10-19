**Jerod Santo:** Hello, world! We are here and we are ready for a pretty big party. We have four panelists on the show today, and lots to talk about. Let's find out who's joining me, Jerod. First up, Suz Hinton. Suz, how are you doing?

**Suz Hinton:** Good day, there. How's it going?

**Jerod Santo:** Hangin' in there, hangin' in there. Next up, Chris Hiller. What's up, Chris?

**Christopher Hiller:** Hello!

**Jerod Santo:** And rounding out our panel today, Nick Nisi. What's up, Nick?

**Nick Nisi:** Hoy, hoy!

**Jerod Santo:** Hoy, hoy. Well, we have three awesome segments for you, as per the usual. First up, we're gonna do a news roundup. Lots going on, of course, in the JavaScript and web world. Then we're gonna turn our attention to the internet of JS things, in which probably Suz will do most of the talking, and tell us all about the whacky world of hardware and stuff going on there.

Finally, we'll finish up the show with some shout-outs to people and projects who we appreciate. Let's get started with the news. I think the biggest story of recent, and perhaps the most exciting and/or controversial (we'll find out) is this concept and announcement of built-in modules. Chrome just started shipping them. There is an article written by Philip Walton, who's an engineer at Google, who's working on the web platform, and he announces KV storage (key-value storage), akin to local storage, but asynchronous, is being launched alongside this concept. This is the web's first built-in module, so think of it like a standard library for JavaScript, where you don't have to bundle them with your other JS, or load them from a CDN; they're right there, in the browser.

Nick, you were talking about this... Do you wanna open up and tell us your thoughts on KV storage, built-in modules etc?

**Nick Nisi:** Yeah, so it's a pretty cool concept, potentially, that's now shipping. It really caught me by surprise, I just saw a tweet that you can use it in Chrome and start playing around with it today. The first standard module, or the first one that's built-in that they're shipping is what looks to be a wrapper around local storage... Which when I use local storage, I tend to write a quick module to make it easy to get and set things in there; that's one of the first things I do, so it seems like a good, easy first win for that.

The thing that I'm curious about (and I'm not actually sure), there is actually a stage one proposal from TC39 to add a standard library, and I'm not sure if this is part of that or not.

**Jerod Santo:** In the article which we'll include in the show notes he does reference the TC39's proposal, JavaScript standard library repo, stage one... Philip is at least referencing that, so it seems like it's potentially the same thing.

**Nick Nisi:** Yeah, so it's an interesting foray into this, and it will be cool to see what follows, I think. But I know that there are concerns with standard modules too, with a standard library, beyond just my Not Invented Here syndrome. \[laughter\]

**Jerod Santo:** \[04:15\] You write your own darn key-value storage... \[laughter\] Yeah, the concern always with standard libraries is rot. It seems like a lot of times a standard library can get out there and be used and then not be well-maintained. Now, in the browser world I guess it's even a unique scenario, where -- I mean you don't absolutely have a single vendor implementing these things... So if it's going to be in the browser by default, it has to be in all the browsers, or at least enough of them for you to use it, of course, with polyfills... But it seems like keeping all browser vendors in lockstep with introducing new things into the standard library, updating security fixes etc. is a huge undertaking, and one that could potentially go awry.

**Nick Nisi:** Well, we're fixing that by just getting rid of browser vendors, it sounds like... \[laughter\]

**Jerod Santo:** Uuh...

**Suz Hinton:** No comment. \[laughter\]

**Jerod Santo:** Is this some sort of a coup that's gonna happen?

**Christopher Hiller:** Yeah, I mean, if you're looking for ammo for that argument - there you go, it's happening already. Chrome makes -- I don't know what's behind this, but it appears to be a unilateral thing, that was just implemented at Google, in Chrome; I don't know if it's in Chromium... But yeah, I feel like that's a problem.

**Suz Hinton:** I disagree with starting out with KV storage as the first example, and part of that is because when you talk about a standard JavaScript library, you kind of just consider that it's only in a browser runtime... And you can't even limit it to things like "Well, it can also run as part of the Node.js runtime. JavaScript is going to be interpreted and run in environments outside of that, and I think by considering that KV storage is part of the standard library is actually not even specifically correct, when you think of it in that context... But I'm interested in other people's thoughts about that

**Christopher Hiller:** I haven't thought of that, but yeah, that's an issue. And Node doesn't have local storage; why would Node need local storage, right?

**Jerod Santo:** Right.

**Christopher Hiller:** I'm sure somebody in userland has made a polyfill, but... I think the concern from Node is, first off, they're going to be basically forced to implement this thing, and secondly, the namespacing going on is also -- it seems to be an open question about what this prefix, the std prefix, what should that be, what does that look like in Node. In the future Node, it looks like there's tentative plans to support this idea of built-in modules, and will they have to use the standard prefix, will they have to use a Node prefix? Is there a different prefix entirely? It creates problems for, yes, other browser vendors, but especially Node.

**Jerod Santo:** I don't know about everybody else, but from where I come from, std means something completely different.

**Suz Hinton:** \[laughs\] Yes, it means something different in Australia as well. Although it also used to stand for long-distance calls, as well. So if you're making a long-distance phone call, that would confuse the conversation even further.

**Jerod Santo:** Wow.

**Suz Hinton:** I mean, partially why I am particularly vested and interested and concerned about this is because I have a number of libraries that I maintain that were written in JavaScript, that should run both in a Node environment and also in a browser environment, and I already have very interesting bundling entry points and setups, because for example we have a native -- I guess not native, but we have a WebSocket API that's available in all of the modern browsers, but we don't actually have that in Node.js, so I have to swap that out with a specific third-party library, and things like that... So introducing this concept actually just makes my life a lot harder in order to do this, and that's also where I'm coming from, even outside of just considering that key-value storage is not the best first standard module, I guess, to have out in the wild.

**Jerod Santo:** \[08:06\] What are some other modules that would make sense in terms of standard library? Chad mentioned we have a few things already - math and date, things that are in the global namespace, local storage in the browser; of course, also in the global namespace I do like the advantage of being able to only import and pull in things into the runtime that you need, and not having everything bog down the VM... But what are some other modules that are so globally useful, and yet don't exist, that can be put in in addition to this one, which like you said, Suz, isn't the best first one...? Does anybody have any ideas, or even a wishlist of standard libraries that they would wanna have in JavaScript?

**Suz Hinton:** I would like to see better binary manipulation support, I guess. That would be nice to have, because a lot of the bit manipulation techniques and everything - it's not 100% complete in JavaScript.

**Christopher Hiller:** I'm not sure this is actually necessary at all... \[laughter\] You know what I mean?

**Suz Hinton:** I'm with Chris on this, I really am. I'm trying so hard, but I just don't think -- I don't know, I can only see one advantage with this, and that is remember when Node.js first came out and people were accidentally npm-installing standard library modules such as FS, and Crypto, and things like that? And then that was obviously ripe for abuse, but also you were just installing and shipping things that you didn't actually need to, even if people were just uploading the exact same standard built-in... And I think that it can help with education when you're first learning what is part of the standard library, but I don't necessarily think that that's even compelling enough. If you learn the language and if you learn what comes standard, then you shouldn't need to have this, and I really don't think that the concerns are outweighed by that one small advantage... But I'm interested in Chris, given that I interrupted him; I'm sorry.

**Christopher Hiller:** Oh, I don't think that I had much more to say than that. They're throwing this stuff into a built-in module... I mean, yes, I understand that in the browser people are adding new APIs, and they go in the global namespace, and the global namespace gets polluted... So let's take stuff out of the global namespace and put it in these built-in modules. But I think the concern then is just that, "Well, how do these built-in modules work? How are they standardized?" And especially for Node, if they don't elect to try to implement such a thing, and for any given built-in module, the namespacing is kind of a concern, because Node may have different ideas about how they want to namespace their own internal modules, and if Chrome makes a decision that namespaces look like this, then -- I mean, I just feel like they jumped the gun, essentially...

I see advantages to built-in modules, but I don't know, it just kind of muddies the waters... "Is this a built-in module, instead of just another theme in the global namespace? What's the difference? Why can't I use it via some other method? Why do I have to start importing thing?" This means that I as a web developer - and I think there's an allusion to this in this post - wanna use standard KV storage, I have to create some sort of exception in my bundler that just goes ahead and leaves this import statement in there, instead of converting it to something else, downgrading for ES5, or whatever, new polyfills, and stuff, and that's also addressed, but... I think it makes the bundling situation even more complicated, essentially.

**Nick Nisi:** The biggest problem I have with it is the -- and maybe this would be solved later, but... What's on global and what do you have to import, and knowing when you have to do which I think will be just kind of confusing, not worth it. But it could be a potential good thing, as Korb has been saying in the chat room - potentially you could version the modules that you bring in; you wouldn't be polluting the global namespace and maybe we'll avoid any future problems like MooTools has already done it, or something like that.

**Jerod Santo:** \[12:18\] Well, it is still experimental. You can definitely go read the post, check it out, get involved, of course, if you have strong opinions one way or the other, to influence this. There are lots of concerns... Especially right now one of the things they bring up is import maps, which was a concept that was foreign to me until this; and of course, you have polyfills, so very much at the bleeding edge of the web, and something that the Google and Chrome teams are working on pushing forward, but still in the experimental phase.

Let's turn now to a little bit different kind of news... Not so much on the technical front, but on the community and sustainability front. If you recall back in JS Party \#48, which was called Foundation Foundations, a show live at Node.js Interactive - Suz, you were there, Nick, you were there, along with Kball, and talking about this plan to merge the JS Foundation and the Node Foundation... The news of the week is that happened, so now we have no longer the Node.js Foundation and the JS Foundation, we have the OpenJS Foundation, which they're calling the next phase of JavaScript ecosystem growth. This was announced at something like the Open Leadership Summit, a Linux Foundation event, just last week. So that's news... Thoughts on OpenJS Foundation? Is this going to make big waves, is this kind of just a formalization of what we all already knew was gonna happen, and what are your thoughts on this news?

**Suz Hinton:** I think that I mentioned in that episode, number 48, that I like the fact that it's merging together just because -- it's very similar to the things that I was saying actually in the previous topic, which is that it will help to unify and help everyone keep in mind that JavaScript doesn't just run in the environment that you're most biased to think about, which usually means your day job, or just your history with the language itself. I think that's a positive thing, but I tend to just not fully understand foundations properly... I know with this one anybody can join and you don't have to put money down, and things like that, but I usually have concerns just about foundations in general outside of that.

I think that as far as actually being able to consider that JavaScript should be thought of as all of these different environments in one, and not having their separate foundations - I think that's a good idea.

**Jerod Santo:** I'm curious what your reservations are about foundations in general, if I might just poke and prod a little bit? I definitely see pros and cons with these things, but I generally come down on the side of more support is better, even if it's not ideal in certain circumstances, and organizing around supporting open source and JavaScript is a net win, even though there are drawbacks. So I'm just curious why you think -- you said you have reservations about foundations... Are you willing to unpack that at all?

**Suz Hinton:** Yeah, I can unpack that a little bit. To be honest, I don't have a heel to die on with this stuff, just to preface that... But I think that we need to get the money from somewhere, and that's obviously gonna come from big companies; but as far as choosing the kind of projects to support, it's usually gonna be skewed in favor of what projects are these big companies using... Which is great, because that's going to hopefully reduce some of the exploitation, where there's one or two people working on a specific project, and all of these companies are leveraging it to make millions. I think that that side of thing is probably the best expression we've seen of actually being able to put money towards these projects, but I think that it introduces some politics around only the filter or the way that we choose these projects, for example.

\[15:56\] And also, money usually has the most influence, right? And so that's what concerns me about what kind of influence are just general members going to be able to have, outside of their vote when it comes to having elections, and things like that... How much influence can that person really have? And I just don't think it also solves the problem of -- people who want to be involved with being able to develop the future of the JavaScript language or the JavaScript ecosystem as far as specs that get proposed to be put in browsers and things like that, I don't think that we do enough to really support those efforts, whereas in usual cases people have to actually join really large companies, such as a browser vendor company such as Microsoft, or Google, or Mozilla, just in order to even get their foot in the door with a spec... Because if you have a full-time job, it's very hard to justify traveling to things like TC39 meetings, or being able to actually work on a spec and get the help to carry it all the way through... And I think that we still don't do a good job of that, and after reading the information in the FAQ behind the OpenJS Foundation I still don't think that they're addressing these kinds of problems; to get a spec through you still, to a degree, have to have a certain amount of power on your side in order to be able to develop that.

**Christopher Hiller:** I can't really speak to the standardization side of things, but as far as companies having influence over the projects coming into the foundation... So companies who donate or essentially pay for membership - because this is a trade union type of non-profit - they're given a board seat, or something like that; this is all documented, I haven't read all the specifics... So they're given a board seat, but they don't have any say over what projects are allowed into the foundation. That is a process, and there's a set of criteria for different types of projects that want to come into the foundation... And they have to fulfill this criteria, they have to apply.

The board members - we can think of them as there's community representation, and I think they're working on an individual representation, in addition to your member companies... They don't have any say over what that criteria is. The criteria has been proposed and debated - and will continue to be - by something called (I think it's called) the CPC, Cross-Project Council, or Commission, or I don't know. But it's outside of the reach of the board, essentially. So they're gonna have the ultimate say over what you need to do to get into the foundation.

Then also they're going to be able to say "This is the criteria you have to fulfill in order to get these resources." For example, a project like Node, which has a very well-developed community and governance model, and has proven itself sustainable, is going to be in a position to receive more resources from the foundation, whereas a project that's much smaller essentially won't because, well, they don't need it. So there's lots of stuff that I think they have taken into account; I've been kind of a fly on the wall in terms of the merger of these two foundations, and from what I've seen, I think people are doing this very carefully. They're being very protective of the projects and their own self-determination, and trying to not let influence from any one company change and screw stuff up, essentially.

**Nick Nisi:** Will this have any effect on everyday users of these projects?

**Christopher Hiller:** \[20:01\] Probably not... And as far as if you use any project that's in the JS Foundation now, do you notice that it's the JS Foundation? Unless you're contributing to that project, probably not.

**Nick Nisi:** Yup. And even then, the only thing I notice is the CLA bot making sure that I've signed the contributor license agreement... Which I'll probably have to sign a new one. \[laughter\]

**Christopher Hiller:** Yeah, probably... Of course, with the JS Foundation projects - and I don't know as much about the Node Foundation - there's no monkeying with the technical stuff from some board member or somebody way up in the organization. Projects have full control over what they do.

**Jerod Santo:** Well, let's turn now to our last bit of news for this show, which is making a little bit of waves. Not exactly JavaScript-specific, but definitely related. For anybody trying to bust into the industry, Lambda School - which is well-known, one of those nine-month immersive programs that are teaching you everything you need to get started in web development, or iOS, or basically in software development - which already made waves by changing their funding model so that you don't pay them cash upfront, you actually go for free and then they take a portion of your salary once employed afterwards, which is interesting... They've now also, as of recently, added an \$18,000 stipend to select students.

Austen Allred, who's the co-founder and CEO, recently said "We know that one of the hardest parts of deciding to go back to school is figuring out how to make it work without a full-time salary."

So they are launching this living stipend pilot program. He says, "We are looking at how we can create more products in innovative ways to support our current students and to expand who can become a Lambda School student."

Cool idea, on the face of it. It seems like it's providing more access to people who, for financial reasons, wouldn't be able to try this out. What are your thoughts on Lambda School and this idea of basically paying people to go there while they're at school?

**Nick Nisi:** I don't know about all of you, but I get a lot of questions from non-developer friends who want to become developers, and they ask "How should I get started? How can I do this?" We've had coding schools in Omaha and around the country for a while, but they can be very immersive, and you'd never know really the quality of them unless you look through the curriculum, or go through it, or work on it. It's tough to know "Will this actually prepare someone for a real job?"

I think this has a real benefit in the way that they will take money from you once you have a job; and the job has to be paying over \$50,000. So they're incentivized to give you the best education for your money, because they're only going to be able to take that if they can help you land a good job. So I've recommended this in the past to friends, but it's been difficult for them to be like "Okay, I'll put my life on hold and quit my job to go do this and be fully immersed in it." It's just not practical. But with this stipend, I think that that does really open the doors to others. I haven't looked at the curriculum personally myself, but just the way that their funding is set up, they are incentivized to make you succeed.

**Suz Hinton:** I had a look at the funding options in general on the site, and I think what I was most pleased about was not just that they're introducing this, but that there are actually three or four options for both studying and also being able to pay for the tuition, in this case. So if you don't want to do it for free upfront and then pay down a percentage of your salary, you can actually pay in upfront cost as well. That might work better for your arrangement, where you feel that "No, I'm absolutely committed to this" or "If I actually put this amount of money upfront, I'm going to be psychologically more committed to it, because I won't get that money back."

And I like the fact that there are a number of different options that can work for everybody. And even at this school, you don't just have to do it full-time for nine months, you can also do it part-time for 12 months as well. So for me, I just think that having these options here, and being able to weigh them all out, is a healthy thing to have as part of these schools.

**Jerod Santo:** \[24:10\] Absolutely. Anytime you provide more options for more people I think is a good thing. I'm trying to find -- Austen actually posted a nice image to Twitter; I'll put the link in the chat room... It really shows the options they have in terms of price upfront versus price afterwards with the regular Lambda school, and then plus the stipend. So basically what happens is if you are qualified for the stipend - and there's a couple of questions that they ask in order to do that - and you do decide to do the pay-afterwards approach, they'll give you a $2,000/month living stipend while you are in the course. You will then share 10% of your income over the next five years for a maximum payback of $50,000... Whereas if you go without the stipend, it's a 17% income share for two years, for a max payback of \$30,000. So they're absolutely recapturing those costs over time, but they're willing to take the risk... And I think it shows that they're betting on themselves to a certain degree, because they have to actually deliver for you. Not only are they giving you the upfront zero cost schooling, but now they're actually cash out of the business, into your pocket, in order to recapture it later. I think it takes a lot of confidence, I think it's an interesting proposal, and I think it's probably one that if successful, we'll see more coding schools around the country.

**Suz Hinton:** The only thing that I will say about this is that this model - and maybe you can correct me if the math doesn't work out this way for you - is very similar to other models, in that if you are the least financially privileged, you will end up paying more in the long run. That is the only comment that I will make.

The best-case scenario is that you have the tuition upfront, because looking at that, it looks like you save the most money there. The next best thing is that you can actually support yourself without the stipend, because your maximum payback over time will be less; even if you are spending your own money, you will probably not feel like you owe as much in the years after, if you get a job.

And then obviously, the maximum thing is that you pay nothing upfront and you have the stipend, and you're tied to pay that money back, and the most amount of money, over the longest period of time. Obviously, if you're supporting yourself, you're still spending that stipend, it's just you've created the stipend for yourself... But I'm definitely seeing that in a lot of cases it's the same with people saying "Why don't poor people bulk-purchase things, because they save money?" and it's because they just don't have the money upfront to be able to have those savings in the first place.

So that's the only comment I will make about that, but again, I think it's healthy that there are a number of different options in order to just get people into finding a career that's either more stimulating for them intellectually, or puts them into a better financial situation over the long-term.

**Jerod Santo:** Yeah, no doubt the disadvantaged is still disadvantaged under this system, but they now have access where they previously didn't.

**Suz Hinton:** Right. I just wanted both sides.

**Jerod Santo:** No, absolutely. A step in that direction, at least. Other thoughts before we call it a segment?

**Nick Nisi:** I think that if I were in this position I would probably be seriously considering this... Like, if I wasn't a developer, but wanted to become one - I'd be considering this as an option. I don't know what the pricing models are for other schools though, obviously.

**Jerod Santo:** Well, if you're out there in listener land and you're an aspiring JavaScript developer, definitely check out Lambda School and this new program.

**Break:** \[27:38\]

**Jerod Santo:** Next up, it's time for the Internet of JS Things. We have many folks here on the panel, myself excluded, who are big into IoT, bots, hardware hacking, doing all sorts of cool stuff with JavaScript that I never get to do... So the first thing I would like to do is just kind of go around and find out what everybody is doing, whether in their home, or on the road, with IoT devices, with JS... What are you all up to? Maybe we can dig into some ideas and some stuff there.

Suz, I know you've got the craziness going in with the plants that are talking... I don't even know. Maybe we'll start with you, because you seem to have the most going on, and you can impress us with what you're up to.

**Suz Hinton:** Yeah, I don't wanna repeat what I talked about in that OSCON bonus JS Party episode; that is actually a work in progress, and I have made a lot of progress in that... But I've also added in the fact that inside of my plants talking - like, the rest of the house is gonna talk, but my plants are actually gonna chirp at each other instead. \[laughter\]

**Jerod Santo:** Okay... What drove that decision?

**Suz Hinton:** I've basically completed the prototype, and I'm not laying out the official PCB production version of that. It uses an audio data protocol, so that I can be offline. I think I mentioned on that previous episode that I wanted all of this to be offline, and so an easy way to not even have to set up a local network for yourself is to use something like an audio data protocol instead. That's obviously confined to a certain space, which is good, and there's already libraries out there that you can use, such as Chirp.io, which is what I'm using. So instead, my plants can all synchronize with each other by chirping out packets of data, they can basically show each other stats on the screens that are part of the PCB that I'm designing, and in that way I don't actually have to have any kind of network setup. So I feel that I'm less susceptive to the IoT cliché of hacked devices, and things like that.

**Christopher Hiller:** Do you use a dB speaker, or what kind of speaker do you use?

**Suz Hinton:** The first prototype had a regular, very tiny speaker that was attached to a headphone jack; that was kind of designed for iPhones and other smaller devices, but I was using a prototyping board that had an audio jack. So they all had their individual speakers that they could chirp out of, and then they each had MEMS microphone to be able to hear each other's chirps as well.

The second prototype is different. I'm actually going to be introducing another communication protocol called Bluetooth, which we're mostly familiar with. And they're each gonna connect to one Bluetooth speaker in turn, and use that as their broadcast loudspeaker to talk to each other.

**Christopher Hiller:** I need to see your code, and stuff. \[laughter\]

**Suz Hinton:** It's very fun! \[laughs\]

**Jerod Santo:** So you have an ETA on completion, or is this the ongoing project that continues to evolve and adapt?

**Suz Hinton:** \[31:41\] Yeah, that's a great question. I'm actually going on a really long vacation soon, and I have some plants that need to be watered while I'm actually away... So I would come back to them being not in a good state if they weren't watered while I was away. So right now, my deadline at least for the second working version - which could end up being a last-minute slapped together perfboard soldering situation if the PCBs don't arrive in time, or if there's a bit of a hitch on a wrong soldered joint on the PCB - that needs to be done in two weeks... So it's actually gonna be pretty soon.

**Christopher Hiller:** What did you use to design your PCB?

**Suz Hinton:** I used KiCad.

**Jerod Santo:** Tell us more. I have no idea what these things are.

**Suz Hinton:** Okay, so KiCad is the open source PCB/schematic parts layout program. It's really cool. I've used a bunch of different ones in the past. I've used Fritzing, because they support vectors properly, so if you wanna do really artistic, cool-looking silkscreens prints on the boards, you can use that... But that's a little bit limited. And Eagle to me was closed source, very proprietary, very expensive, so I ended up going with KiCad recently and have really been enjoying it.

The recent KiCad 5 was actually pretty big. There were a lot of improvements to the user experience, and I've found it a joy to use. The only problem is I think it has some form of memory leak, because if I leave it open on my computer for an hour, my computer will just start slowing down to a halt, and as soon as I quit it, it's fine.

**Christopher Hiller:** How did you learn to use KiCad?

**Suz Hinton:** Video tutorials, actually. There are some really good ones that I can link in the show notes that helped me a lot. I think the advantage that I had was I'd already played around with Eagle and Fritzing, and followed tutorials, and I've made several PCBs already... So for me, I was really just looking for "Oh, this is the equivalent functionality in this program..."

I think it's a little tricky to get started with, but I can definitely link the videos that for me were the most straightforward and clear.

**Jerod Santo:** Excellent. Please do that. We will put those in your show notes, listeners... So if you want to learn KiCad, links to KiCad, links to PCB stuff - whatever Suz gives us, we're gonna put in the show notes, so expect notes full of links in there, to get everybody started.

Let's hop over to Nick - you've got something in the list there... What's your home-hacking story? What are you up to?

**Nick Nisi:** Okay, first off, I'm not happy about following the amazing Suz on this, because...

**Jerod Santo:** I should have asked you first. We should have closed with Suz.

**Nick Nisi:** \[laughs\] Mine looks like child's play compared to the amazing stuff she's doing, so... That's awesome. I've never heard this Chirp thing, and it looks so cool. But some cool stuff that I've done, which is not really all that cool in comparison, is I've created a photo booth, and I used a Raspberry Pi for it. It was for my sister-in-law's wedding, I guess just a fun project to play around with that, but I got a whole bunch of scattered components from Amazon, including a display that you're supposed to wire into a car, but I wired it into a Raspberry Pi; then a whole bunch of buttons, and a breadboard, and then hooked that into a digital camera, so that the Raspberry Pi can send signals to the digital camera and tell it to take pictures. Those would automatically get transferred back to the Raspberry Pi, and then that would, every - I think I had a kron job every minute - R sync those up to a server, so that you could have a live photo booth and view the pictures right away, which was pretty cool.

It used, I think, Image Magic to combine all the pictures into -- I don't know what you call those... Like a photo thing, that you would have in a photo booth; multiple photos on it.

**Jerod Santo:** Like a collage.

**Nick Nisi:** Yeah, yeah, a collage. But the cool thing was it used physical buttons, and had an RGB LED on it, so it would be green when it's ready to take a picture, and then you push a button and then that would start blinking yellow, and then it would turn red and take a picture, and it would do that four times and then combine them all together, so you had this button just hanging off the side of it to do that... But I also had a hidden red button on the back of it, and that's because at the venue that it was actually being used at there was no Wi-Fi at all... So I had it just tethering to my phone, which you can program the Raspberry Pi to automatically look for a specific SSID and connect to it, and you can have the password in it, and all of that... But the problem is that was finicky, because if I walked more than a few feet away with my phone, it would disconnect, and then I'd have to figure out how to unplug it and plug it back in...

\[36:21\] So I had a button on the back that would immediately tell the Raspberry Pi to just restart, so that it would reconnect to my phone, tethering, so that it could do that. And it worked, there was over 100 pictures taken and uploaded in that day, so it was pretty cool.

**Suz Hinton:** I noticed, Nick, that you're using PyGame, which is something that I've used on a Raspberry Pi as well to do hardware-related things. It almost gives you the Arduino setup and then loop functions... I think that's actually really good.

**Nick Nisi:** Yeah, and I should also caveat this - that part isn't really JavaScript. That's the only Python I've ever written, too. But it was a Node server that it was uploading everything to, so... Kind of a collage of technology going into it.

**Jerod Santo:** ...to reuse the term.

**Nick Nisi:** Yeah. \[laughs\]

**Suz Hinton:** Yeah, we should get you into Johnny-Five, Nick. I think you'll really like Johnny-Five if you liked working with the general Python GPIO stuff.

**Nick Nisi:** Actually -- so this was in May of 2015, and I left the day after this wedding and went to JS Conf 2015 and did the NodeBots Day with Rick Waldron, and built a little robot car with Johnny-Five. That was a lot of fun.

**Suz Hinton:** Yay, that's awesome! I think I would have been there too, now that I come to think of it... Because I've sort of been attending and helping out with those workshops for the last few years. That's awesome.

**Jerod Santo:** Well, you don't give yourself enough credit, Nick, because this is super-cool... And I hope you were wearing your wizard costume to this wedding, because this is some serious wizardry right here. \[laughter\]

**Suz Hinton:** Yeah, this is a really cool project. There's a lot of moving pieces, and it all came together really nicely.

**Nick Nisi:** Yeah, amazingly.

**Jerod Santo:** That's great when a good plan comes together, especially when you know that behind the scenes it's patched together with SuperGlue and string and tape... But nobody gots to know about it; it works great, and that's what hacking is all about, so that's spectacular.

Alright, Chris, how about you? Have you done any IoT stuff recently?

**Christopher Hiller:** No. \[laughter\] I moved last June, and then I moved again, and all my stuff is pretty much still packed, and it's in the garage... So I haven't gotten a chance to do much hacking. But there's a couple things - one was a question, the other is this particular issue in Node.js I wanted to bring to people's attention.

A little while ago - a couple weeks maybe - there was talk of actually removing support in Node for ARMv6. So ARMv6 - that's what Raspberry Pi 1 runs, and it's also what Raspberry Pi zeroes run. Essentially, there are Problems (capital P) with building on Node and running CI against these boards, the first one being that there's no cloud provider that will give you a whole bunch of ARM devices, any ARMv6 devices... So it looks like enough people saw this and they were like, "But, but, but... I use that", so it sounds like what's going to happen is they're not going to drop the support for ARMv6, but they're going to have to essentially move it into kind of like an experimental area of the build, where it doesn't always get run, but it seems like we're still gonna get ARMv6 support for now, which is great if you're trying to use Node on Pi 0.

\[39:52\] So my question - and I'm hoping maybe Suz has some insight into this - is what has happened lately in the JavaScript on microcontrollers space? I know last time I was looking at this there was a -- of course, there's always the Espruino stuff, but there was somebody who was working on essentially reimplementing Node, which would run on certain ESP32 devices... Essentially, the ones with much more RAM. What's going on there? I've heard some mumblings about there's some cool implementations out nowadays, but I don't really know much about it.

**Suz Hinton:** Yeah, so you might be talking about JerryScript, but I think there might also be another attempt to do Node. I know that JerryScript was focused more on the JavaScript side of it, but that's maybe what you're referring to...?

**Christopher Hiller:** No, it was like a fork of Duktape that runs on ESP32-WROVER, I think.

**Suz Hinton:** That's not something I have looked at yet. I do know that JerryScript is at least under the new JS Foundation, so I know that that's gonna have work continued on it. I've attended a couple of talks about some of the hacks that were needed to fit JavaScript on these devices, so to be honest I'm not super-excited or optimistic about it at this point; I would say just let it develop a little bit further.

There's MicroPython and CircuitPython, which is a fork of MicroPython. I think that they're having a lot more success than we're currently seeing with Node. I think it's a little too early right now. So using a device that's a little bit more powerful, such as the Raspberry Pi, or the Tessel even - the Tessel has a wonderful Node.js experience, because it runs on an OpenWrt-driven chip. I think that they're probably the most promising uses of Node and JavaScript on devices that I've seen to this date. The rest I would caution is mostly experimental, and you're gonna lose a lot of time to those new stuff, as opposed to the time you already lose due to wiring issues and all sorts of other power considerations, and the regular bugs that you run into when you're first learning hardware.

**Christopher Hiller:** There was another one I'm trying to -- it was some tricky sort of JavaScript implementation from a company, or it was like a project; I know it started with an M, but I'm having trouble finding it... That looked cool, too. But yeah, I've played around with Tessels, and all sorts of things like that, and to me at this point I'm not sure what Tessel is gonna buy you over just like a Raspberry Pi, or a Pi Zero, or whatever.

**Suz Hinton:** You get an ADC, which is very nice. My biggest frustration about Raspberry Pi's is that you have no built-in ADC... So a whole bunch of analog sensors that you might have also bought, that you're excited to use, need that external ADC, and I'm actually soldering one onto that PCB that I'm designing, just because I need it for one moisture sensor... Which is very frustrating.

So if the Raspberry Pi came out with an ADC on it, it would literally be the perfect thing to run JavaScript hardware on... That's my last little caveat there.

**Christopher Hiller:** And what kind of moisture sensors do you use? \[laughter\] I'm such a nerd...

**Suz Hinton:** I don't even know why we're laughing... \[laughter\]

**Jerod Santo:** It's just because he asked it in such a strange, creepy way, that's why...

**Suz Hinton:** It's like, "Hm, what kind of moisture sensors...?" \[laughter\] You can buy moisture sensors that have been integrated into a breakout board, and it can communicate via either SPI or I2C, which is perfect for the Raspberry Pi... But they can be really expensive, so I'm using a very rudimentary one, which basically just uses copper exposure -- you know, two rods that have the exposed copper on them, and then you basically drive that into the soil.

\[44:03\] So you're just measuring -- you give that power and ground, and then there is a signal wire that you're just literally reading your analog signal from. So when you do convert it to digital through the ADC, you end up with a value between 0 and 1023. So just keeping costs down alone, but also just knowing that out of the box no matter what sensor you buy will work is kind of important.

**Christopher Hiller:** When I have played with those before, whenever I used resistive sensors and I'd stuff it in the soil, and I'd water the plant, and it would sit in there, and I would pull it out maybe a month later, it would be all corroded.

**Suz Hinton:** Yeah, there's a hack for that.

**Christopher Hiller:** Do you have that problem?

**Suz Hinton:** Yes! The reason for that is that you're supplying power to it at all times, which is going to be causing that corrosion. Usually, what we recommend is that you -- and I was actually about to mention it, and I thought it was totally tangential... But when you have your power wire hooked up, instead of just hardwiring it to something that's always on, you hardwire it to a digital pin that you can just turn on to do the reading, and then turn back off again.

**Christopher Hiller:** Wow... Okay. Cool. So yeah, it's okay to buy those really cheap resistive ones, and you don't have to spend the money on a capacitive sensor. Awesome! Good to know.

**Suz Hinton:** Yeah. You've just gotta learn the hacks, I guess, but yeah, it is an unfortunate thing in that it's marked power, and so naturally you would hook it up so that it's always powered, but that does actually cause issues... So I'm really glad you asked that question.

**Break:** \[45:42\]

**Jerod Santo:** Okay, now it is time for shout-outs, which we love because we get to tell people who do awesome things that they're doing awesome things, and then also we hope you love it, because then you get to hear about awesome things that people are doing... And maybe you haven't heard of these awesome things, so you can check them out. With that being said, let's pass it over to Suz, to give her shout-outs. What do you have, Suz?

**Suz Hinton:** I'm really excited about GitHub Actions.

**Jerod Santo:** Oh, yes...!

**Suz Hinton:** And I know not everyone's in the beta, and I feel really bad and I'm sorry, but I'm in the beta and I'm very excited about it. \[laughs\]

**Jerod Santo:** A humble brag.

**Suz Hinton:** I think I just got lucky... You know, with the GitHub acquisition by Microsoft, a few of us were lucky enough to be in the alpha before the beta was even announced, so...

**Jerod Santo:** Nice.

**Suz Hinton:** So I've been playing around with these for a while, because I was given access to them a while ago. I think the biggest strength is that you can run GitHub Actions in any language you want. You know, obviously, try to just use a shell script to start with to do something simple, and if it gets more complicated, then that's where you can abstract out.

And essentially, the older way of doing things that's established is you have a webhook, and GitHub will hit that webhook on certain events that you're after... But you have to find a place to host that webhook. These days a lot of the time it's serverless, but you're still managing that infrastructure, you're still paying for it, you're still having to figure out how to deploy to it, and so what I like about GitHub Actions is if you can make a container that is able to just run the one command you need on the GitHub event payload that they send to you, then you can just throw that up in Docker Hub and GitHub will actually start that container up and run it every single time, on your behalf, without you having to host anything else. That's what I've been playing with recently...

\[48:27\] I've had a few Node.js scripts that will send GitHub events to my Twitch extension, so that when people are watching my stream they know when my tests have passed, for example, or they can tell me that someone opened a new pull request, so that I can go and check it out. That's been so fun... But I really like the fact that if you can create your own Docker container, then you can basically do anything you want with these payloads, without having to find a place to host them.

**Jerod Santo:** Which means free Bitcoin mining. Yaaay! \[laughter\]

**Suz Hinton:** I never thought of that, but someone always has to ruin it, don't they...?

**Jerod Santo:** This is why we can't have nice things, right?

**Suz Hinton:** Yeah, totally. Anyway, I'm working on a blog post about that...

**Jerod Santo:** Awesome!

**Suz Hinton:** ...so that should be out soon. And there's a few limitations right now. You can't automate a bunch of stuff, so it is a bit of a manual process... But I'm basically assuming that they're gonna start automating that a little bit more, so I'm hoping to move some webhooks over to GitHub Actins once that's all set up.

**Jerod Santo:** Very cool. Well, if you are not like Suz and lucky enough to get in on the beta yet, I know there's lots of people still awaiting... Well, while you wait, you can hear from Kyle Daigle all about it. We had him on the Changelog a few backs; I'll link that up - "GitHub Actions is the next big thing." We go deep into that, and he even answers my question about Bitcoin mining... So they have a response to the leeches out there who want to have the free compute power. So listen to that in the meantime, and hopefully we'll all get in that beta soon. Or hopefully it'll come out of beta and we can all start using it.

I'm excited for the community-shared workflows to start flowing towards my repo, so I don't have to write very much code, and I can get all the benefit. That's just kind of the lazy, selfish guy that I am.

Alright, thanks, Suz. Chris, you're up. How about some shout-outs from you?

**Christopher Hiller:** I just wanted to give a shout-out to Jory Burson, who's been helping the projects in the JS Foundation, and she's been involved with the foundation merger, talks and planning, and she's been doing an awesome, awesome job of helping out with the projects in the JS Foundation; essentially, what they need from the merged foundation, and basically any other question. She's been great, so... Thank you, Jory!

**Jerod Santo:** Awesome. Thanks, Jory. Give us a link to Jory and we'll link her up and y'all can connect with her on the interwebs. Alright. Nick, got shout-outs for me?

**Nick Nisi:** Yeah. So this isn't really a shout-out to a specific person, but it is a shout-out to a new feature that I really like a lot, and that is Suggested Changes on GitHub. When you're going through, doing a review of a pull request, sometimes you wanna be nitpicky, and that can come off as you're just being too verbose in your feedback... But this is the best of both worlds, because you can be that nitpicky and also make those changes yourself in a suggestion, and then the person can apply those changes... Which is great. So you're saving them work, but you're getting the results that you need.

It's pretty nice for projects where maybe you're not using something like Prettier, and everything formatted perfectly all the time... Or if you have suggestions about how something could be written better, or a bug fix, or you noticed a bug and fixed it - you can suggest that right in-line, and then all the other person has to do is click a button and that change is applied. A really cool feature, that makes working with reviews and working with people much easier, because in coding, people are the hard part.

**Jerod Santo:** \[52:05\] Absolutely. Pretty cool how many small features -- I'm just saying "small" in terms of surface area, not in terms of how you implement it... But GitHub has really been rolling out the incremental improvements to the platform really at a breakneck pace for the last few months, ever since the change in management and the new CEO and all that... So that's something that's new. Of course, Actions is a huge thing, but it's just all these little refinements they've been doing is making it a better place to be part of the community, so it's pretty awesome.

Alright, let's finish up this show with a few shout-outs for me. I couldn't help but alliterate, because I thought of two that started with a T, so I had to think of a third. I've got three quick ones - Turbolinks, Tmuxinator and tree... Yes, the tree command, which is super-cool.

First of all, Turbolinks, if you do not know, is a JavaScript library that allows your library to feel like a single-page app when it's not a single-page app. So you get a little bit of the best of both worlds. Basically, it hijacks anchor clicks, and requests the next page via Ajax, strips out the parts you don't want, and loads it into the page. It's very slick; we've been using it on Changelog.com for years, and it's how we accomplish our on-site player, which is static and sticky in the footer. So you go to an episode, you click play, and you continue to browse the site and that player stays there. Usually, that kind of feature is only available if you have a single-page app, but we do not have a single-page app. Every single page is rendered server-side, and Turbolinks makes it feel like an SPA... So shout-out to the folks at Turbolinks for that library. It's very cool.

Next one up - Nick, you might like this... Tmuxinator. Have you ever used Tmuxinator?

**Nick Nisi:** Right when I was first starting to use Tmux.

**Jerod Santo:** Oh, you graduated.

**Nick Nisi:** I don't like YAML... It's the only problem.

**Jerod Santo:** \[laughs\] So if you are a Tmux user -- I've been using Tmuxinator for many years... And admittedly, I just kind of set it up and I don't really do too much now, but what it is it's a configurator for Tmux. So if you think about a Tmux in terms of a bunch of different sessions, it makes a lot of sense in terms of projects you're working on, or individual libraries - if you have a separate setup for each one, and somewhat standard... For instance, for the Changelog website I'll have a server pane, a console, a shell, and then something running the tests, and I don't wanna set that up each and every time... So with Tmuxinator you basically get (yes, it's YAML) these little configurations for Tmux, and you can just say "tmuxinator" and then the name of the session and it will bring it to life over and over, and you can configure the dog doo out of it. It's pretty cool, so check that out, Tmuxinator. It is a Ruby gem, so you'll install it that way, but it is very cool.

Last and not least is the tree command. Nick, you've gotta like the tree command, right?

**Suz Hinton:** Oh, I love it!

**Jerod Santo:** Love it! So this is by Steve Baker... It's one of these almost built-ins; I think you actually do install, at least on the Mac, with Homebrew, and it may be installed on Linuxes by default... If not, I'm sure it's an apt-get or a yum install away. The tree command is like ls, only it will actually recourse the current directory structure that you're in, and print it out in a nice, digestible format. For you, Nick, you can think of it like "nerd tree" in your Vim tab, where it has them all printed out in nice color-coded ways, only just a one-off use... So if you have a new project, or you wanna know what the heck is going on in a certain directory, and just see how far down the rabbit hole you can go, you just use the tree command and it will show you that. I use it all the time, especially on new things. It's a great little utility.

Those are our shout-outs for today. As always, links to everything mentioned in today's show will be in the show notes. We have a very cool episode in the work for next week, talking about a brand new package manager, working with modern modules and stuff, called Pika... And we have a special guest to talk to us about that.

So that's our show for this week. We'll see you next time!
