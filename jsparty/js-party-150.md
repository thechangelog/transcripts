**Jerod Santo:** Oh yes, you know the sounds of those BMC beats means it's our favorite time of the week, it's JS Party time. I'm Jerod, I'm your internet friend, and I'm joined by three of my friends. Kball is here. What's up, Kball?

**Kevin Ball:** Hey! These days an internet friend... Previously we actually saw each other every now and then...

**Jerod Santo:** Yes. In the before times, as Nick likes to call it. Nick is here... What's up, Nick?

**Nick Nisi:** Hoy-hoy!

**Jerod Santo:** And Amal joins us once again. What's up, Amal?

**Amal Hussein:** Hi, everybody. I may or may not be wearing a purple robe.

**Jerod Santo:** \[laughs\] Fact check - true. I can confirm that she may or may not be wearing a purple robe...

**Kevin Ball:** \[singing\] Purple robe...

**Amal Hussein:** Yeah, purple robe.

**Jerod Santo:** We may or may not serenade you later... Okay, let's get into the show.

**Amal Hussein:** Okay... \[laughs\] Princess!

**Jerod Santo:** Today we are talking about some hot new tech and some older tech. We had a call-in after our Frontend Feud episode listener TarponJargon wrote into our Request form. By the way, Changelog.com/request, select JS Party in the dropdown, let us know if you want us to talk about a specific topic, if you want us to have a specific guest on, if you like certain hosts and panelists better than others... Be nice, be kind, but let us know. We'd love to hear from you.

TarponJargon wrote in about jQuery, and they said they wanna have an honest conversation about jQuery. I'll read here a little bit... They said:

"Mostly it's because it's still widely used, yet it's considered nearly shameful by JS devs. There's a big disconnect there."

Emma had the asterisk to her answer on the last game show, adding "I don't use jQuery." In fact, we pulled that clip. I have it right here...

\[extract start\] \[03:26\]

**Jerod Santo:** Name a JavaScript library that you use often. We had React, which was the number one answer, 29 points, and we had jQuery, which was the number four answer, with six points. So you both did very well there.

Emma Bostian: I don't use jQuery, but it was the only thing I remembered...

\[extract end\] \[03:41\]

**Jerod Santo:** That's what he's referring to there. And they said "...ostensibly so people wouldn't think she used it. That's a very common theme. Even though I use the "modern" libraries and tooling, I love jQuery. I still find it very useful, and get sad when I hear it get trashed. It has made and still makes the web a better, richer and more interactive place. Even though you can do most things with vanilla JS, it's way more intuitive, and way less code to write. Anyway, I'd love to hear you guys address the jQuery elephant in the room, or on the web. I love the podcast!"

\[04:12\] So there it is... Thanks, TarponJargon for writing in and sharing your thoughts... And we're now going to share our thoughts. First of all, Emma's not here to speak to why she said that, but I think there definitely is this somewhat like "I don't use jQuery" sensation going around, because the truth is a lot of us don't use jQuery anymore, and new technologies have come about and have taken the web by storm.

But I will say that I love jQuery, I'm not ashamed to say that I love jQuery. In fact, Changelog.com is still a jQuery-esque web application...

**Nick Nisi:** What does that mean?

**Jerod Santo:** ...insofar as we use imperative callback-based selectors to manipulate the DOM at times that we find necessary. It does not use a component library, it does not use React, it does not use anything else... It doesn't actually use jQuery, it's using a thing called Umbrella JS, which is kind of a minimal jQuery, which is just less kilobytes. But I love it so much I wrote an ode to jQuery, and I thought maybe I'd read that ode to you guys right now. Does that sound fun?

**Amal Hussein:** That sounds amazing, Jerod. Can't wait.

**Jerod Santo:** jQuery, jQuery...

**Kevin Ball:** Try not to laugh in the middle... \[laughter\]

**Jerod Santo:** Alright, let me start over, because I'm already laughing. \[laughter\]

**Amal Hussein:** Thy jQuery, thy finest of summer dreams in the midnight... Just kidding. \[laughs\]

**Jerod Santo:** Don't steal my thunder here, Amal. This sounds a lot like what I wrote.

**Amal Hussein:** Yeah, this sounds like drunken Shakespeare, is what I just said...

**Jerod Santo:** Here we go, drunken Shakespeare version:

jQuery, jQuery, your API was sweet like honey,

We aliased you to dollar sign, because you made us so much money.

You're easy to grok, with docs and blogs plenty,

You made sure we waited till the DOM was ready.

You were well-adorned with animations and widgets galore,

And so, so many plugins for us devs to adore.

You taught many of us to map, filter and extend,

Those FP concepts keep paying dividends.

The web was hostile, but you made it better,

So we could build things fast, and collect that cheddar.

It may be time to called jQuery.fadeOut,

But you changed the world, and there is no doubt.

So thank you, jQuery for the amazing ride,

Dollar sign left paren, document, right paren dot hide.

**Amal Hussein:** \[laughs\]

**Jerod Santo:** The end.

**Kevin Ball:** Well-played, sir.

**Jerod Santo:** What do you guys think about jQuery?

**Kevin Ball:** Oh, I wrote a poem, too. \[laughter\]

**Jerod Santo:** Let's hear it.

**Amal Hussein:** This is like a jQuery-off, you realize that, right?

**Kevin Ball:** I know, right?

**Amal Hussein:** I'm gonna come up with like a rap battle, to throw my hat in this jQuery-off...

**Kevin Ball:** Absolutely. I mean, I don't know how much time Jerod put into this, but he told us this, so I've whipped it up on the side, as we--

**Amal Hussein:** On the fly?

**Jerod Santo:** He's already making his excuses why mine is gonna be better. Go ahead, Kball.

**Kevin Ball:** It's much shorter.

Oh, jQuery, hazzaa-hurray,

Let's treat everything like an array.

Seriously, jQuery, you're really the bomb,

There's nothing better for messing with the DOM.

**Jerod Santo:** Ooooh, short and sweet, Kball. I dig it.

**Amal Hussein:** You're gonna get snaps. Snaps for Kball.

**Nick Nisi:** Oh, hold on, hold on...

**Jerod Santo:** Nick, what did you write for jQuery?

**Nick Nisi:** Yeah, I couldn't let Jerod and Kball just get away with this... So after I heard that Jerod and then Kball wrote something, I will prefix that I wrote it after that... \[laughter\] But mine is in haiku form, so it has to be short. So here it is:

jQuery

Still there?

You made me love this language.

Now I love TypeScript.

\[laughter\]

**Jerod Santo:** It sounds like that might be more of a TypeScript poem than a jQuery poem, but... Well-played, well-played.

**Amal Hussein:** Yeah. Don't look at me... \[laughter\] My love is gonna come in the form of soliloquies.

**Jerod Santo:** It will be prose?

**Amal Hussein:** Yeah, soliloquies over the next segment.

**Jerod Santo:** Alright, well let's hear it, Amal. What do you think about jQuery? What do you think about what TarponJargon wrote about like is there dev shame, is there that icky feeling, like "Oh, I don't use it anymore because it's not cool", or is that overblown? What are your thoughts on that?

**Amal Hussein:** \[08:15\] Yeah... First of all, TarponJargon - coolest name ever. And second of all, really, I wanna plus a million on what you've shared as your observation in the community, where we've kind of shamed people for not using tooling that maybe requires more complexity, or requires a world-class engineering team to maintain and stay on top of...

So ultimately, I have no problem saying this, but there is a very serious disconnect in our community when it comes to reality, and fad, and like bubble, in the sense that there is the reality of the web and its vastness, and how most people are actually developing -- not even developing for the web, but authoring web content... Because quite frankly, not every company or team is like a world-class, modern JavaScript on the bleeding edge of the latest versions of Npm dependencies...

There is a certain amount of not only privilege, but knowledge, and just business expense that you need to be able to even have a team that can keep on top of that stuff... But a lot of people, a good chunk of the web still uses things like -- not even modern Kendo UI, but old-school Kendo UI... jQuery widgets, there's a lot of drag-and-drop plug-and-play... The world of people trying to build apps without having to build apps has really morphed in a way that has really (I think) actually overshadowed modern web development, if you look at the scale of adoption... And you look at things like WordPress, and how much of the web it actually powers, the number of websites on React compared to the number of websites on jQuery, and compared to the scale of the web... You know, modern \[unintelligible 00:10:05.24\] is definitely this tip of the sphere, and it's a very important thing we should keep innovating. But when we're disrespectful to tools that are old, or tools that help pave the way for where we are today, that's just really disrespecting your elders. That's to summarize my sentiment on this topic...

I know for a fact that Nick, yourself, and Kball and I all have respect for the fact that on the web we're standing on the shoulders of giants, and I know there's gonna be a lot of love for jQuery here today...

**Jerod Santo:** Absolutely.

**Amal Hussein:** So thank you for your comment, and I hope we're able to echo your sentiment today... So thank you for sharing.

**Jerod Santo:** Kball, anything to add?

**Kevin Ball:** Yeah. I have a couple things. So I think there's two dimensions to look at here. The first is that jQuery was so successful that it did what I think Laurie Voss termed "transcending", where a number of the features that were key to why jQuery was important and was making a difference for everyone got adopted by the language. They got moved up into the language.

So in some sense, we're all using jQuery today. We can use a lot of the functionality that you can do in vanilla JavaScript today because jQuery showed that that was a more effective way to interact with the DOM.

Secondly, I think we do have a huge challenge in our community of thinking about tools as the end, rather than outcomes as the end in what we're trying to get to... Folks will say "Hey, I wanna work in React" or "I want to work in Vue" or "I want to work in Ember" or what have you, and be thinking about the tool as the goal, doing something in there... Where those are tools with very specific problem domains that they work really well in, but not everyone has those problem domains, and I think there's quite a few problem domains right now where using React or Vue you're imposing a lot of additional costs on yourself relative to what you need... And you might actually be better off doing something with either vanilla JavaScript or jQuery, or something simple like that.

\[12:18\] jQuery thrives in some of those simpler, mostly server-driven situations where you're not trying to do lots of crazy stuff on the frontend. You're trying to have a progressively-enhanced website. Where it starts to fall down a little bit is when you have lots of different interactive pieces interacting, it's harder... It doesn't give you as much implicit structure out of the box, so if you're trying to build more of your application logic on the frontend, you may want to put some more structure in place.

Back in the day I remember that structure would be added by something like Backbone, which worked on top of jQuery... But these days that's built into a framework like Vue, or React, or Angular, largely... Though I imagine there are still folks out there using Backbone and Backbone Marionette.js as well.

**Amal Hussein:** Yeah, definitely the right tool for the right job.

**Nick Nisi:** Yeah, I kind of share the same sentiment as you, Kball. It seems like there's kind of a bifurcation of web app versus website... Or more like a very JavaScript-driven app is something that today we would reach for one of the more modern frameworks, because it makes it so much easier... Whereas -- I mean, I haven't used jQuery in years, but I assume that it's not as easy to build robust components using jQuery, and to manage that and to package it, in a way... But I would not want the craziness of React or Vue in just my blog, for example... Unless you're getting really crazy and doing that server-side with Next.js, or something... But as something that's actually running in the browser on your users' machines, jQuery was a somewhat lightweight way to really pave over a lot of the problems that we had with the early days of JavaScript... Specifically with things that just didn't make sense between browsers; there weren't the same APIs, or there were a lot of rough edges... It smoothed those out and made it really easy.

And tying back to Jerod's poem a little bit, it really did introduce us to some really cool functional programming paradigms and other paradigms that helped us grow as a community, as fans of this language, into more mature developers, and turning this into a real language, where we obviously make a lot of apps with it, we make a lot of money with it, and it powers the web. And as Laurie said, it transcended, so it's really adopted those.

But I was trying to think of things that I really would reach to jQuery for back in the day... And that was things like Ajax; it was just such a better API than XML HttpRequest. The jQuery object .on for event listeners, rather than "Where can I use on-click, versus at-event listener, and what is being passed to those event listeners?", things like that... And then obviously, getting rid of Document.getElementById( ) or trying to traverse the DOM in some weird way and just using CSS Selectors. It was so nice.

**Jerod Santo:** Yeah, I agree that the CSS selector-based interaction was really what made jQuery take off... Because it was so easy to learn, especially alongside CSS selectors; you were already learning how to select elements via CSS selectors in order to style that with your CSS... And you could learn right alongside that how to grab those elements and manipulate them in JavaScript via using that exact same syntax inside of a string.

\[15:48\] I think that was probably what did it -- now, there's always a bunch of conspiring events that make something transcend, but jQuery really became... I mean, React in mindshare is getting to that place, but it's not where jQuery was. jQuery was so pervasive that there were people that were jQuery developers. And I know there's people that are like "I'm a React developer", and I advise against doing that; please don't do that. If you need to market your skills, like "I know React" - fine. But don't define yourself as a React developer. People who were defining themselves in mass quantities as a jQuery developer - they didn't know that it was JavaScript. They thought that it was jQuery. That's how pervasive and ubiquitous it was.

Now, by the way, those people who were jQuery developers - how transferable are their skills into today's economy? Not very transferable, right? If they deem themselves a JavaScript developer, or - hey, drop the prefix altogether; be a software developer. Now you can play in any pool. But that selector engine was so game-changing it really made jQuery take off.

**Kevin Ball:** The combination of the selector engine and the kind of functional mindset for manipulating sets of elements - this idea of "Hey, I'm gonna use a selector to get a set of DOM elements..." They're just gonna be arrays, and I can filter them, and I can map them, and I can manipulate them.

I remember the first time I was introduced to jQuery. It was in 2007. I had been struggling with stuff on the frontend, and we had just hired somebody who had more frontend expertise, and he knew jQuery... And he was showing me this, and my mind was just blown with "Oh my God, this is-- you have taken my next three weeks and compacted them to two days." That type of improvement.

**Jerod Santo:** Totally.

**Amal Hussein:** Yeah. But you know what - Kball, you were talking about improvement to your workflow, and I think it might be worth it to kind of step things back for our listeners and talk about "Why was jQuery invented?" Can we summarize what problem it was solving? Because Nick touched upon it, about interop issues with browsers... We had the DOM wars going on at the time, and we had all these browsers that weren't talking to each other or following web standards, and we had IE that was innovating... And in an actually very interesting way, people think it was bad, and it definitely in hindsight was bad, but what it did for the web was we pushed it forward, and it's interesting Chrome is kind of doing that now... But there were all these proprietary APIs in IE, and that's kind of why IE is actually even still alive, because there's so many large enterprise companies that have internal tooling and software that's relying on these proprietary APIs that are not web standards... So that's why web standards are important and we should stick with them.

It's interesting, Chrome is actually doing that now with Fugu... So if we take a little segue into uber-modern web dev - Chrome has decided to experiment with a bunch of APIs; we'll link them in the show notes. It's all behind an experimental flag. This whole project is called Project Fugu, and Project Fugu's goal is to take Chrome and basically super-charge it so that it's able to compete with native apps on mobile devices. So we're giving you file access from your browser -- we're basically taking away the browser's sandbox, and we're giving you file access, and better insight into kind of device management APIs, all from a browser... With essentially the end goal being there should be no reason why a progressive web app can't really be one-to-one with a native web app, on many of the key features.

So Chrome is taking this really bold, kind of like thrown their spear pretty far, with the goal of hopefully trying to save the web, actually... Because they think the web hasn't been innovating hard enough or fast enough to compete with mobile clients. And when I say the web, I really am talking about the web clients, to be specific... Because obviously, mobile clients are still using the web.

**Jerod Santo:** Right. Web technologies.

**Amal Hussein:** Exactly. So it's interesting to see how this is -- history may be repeating itself in an interesting way... But IE -- and I've had this conversation with Alex Russell, whose Twitter account we will link in the show notes, because he's a very interesting person to follow if you're into this stuff... Alex is actually the technical lead for the Fugu Project at Chrome, and I remember asking him "Alex, I don't get it though... You're basically becoming IE again now." And he's like "Well, think about it - is that a bad thing?" He's like "IE was so good at what they did that they're still relevant today", right?

**Nick Nisi:** \[20:32\] They have the market share.

**Amal Hussein:** Yeah. And I can't disagree with that. So it's interesting; Chrome - all the other browsers seem to be competing with Chrome.

**Nick Nisi:** Or becoming Chrome.

**Amal Hussein:** Or becoming Chrome, right. One by one. Scary times. Mono web. Chrome is competing with Android, and that's a very serious competition, and I seriously want Chrome to win that one. So it's just a really interesting time for the web, but... Bringing it back to jQuery - jQuery has saved the web in so many ways, in the sense that it brought browsers time to get interoperable and get functional. jQuery was able to kind of deprecate itself, in the sense that it solved the core problems it was meant to solve, and with it we got a bunch of Ruby great patterns, APIs, we have jQuery lite, which is a good options if you're trying to build your blog and it having a bunch of nice utils... And then we have echoes of influence from Mocha, to Request, to Lodash... Just echoes and echoes of jQuery all throughout; libraries that have been invented after it.

And as web developers, we have to understand, when you're building a tool, it should be built to solve one thing. Once that problem is solved, it's okay to deprecate the tool, it's okay to say "This tool is done." We shouldn't poo-poo on it, and say "Oh, this is crap. They should add new features." No. Create another tool to solve those problems. Let's keep the scope of this problem defined.

I just feel like jQuery is very misunderstood by newer developers, because they're just really missing a lot of the historical context around why it was created, and how important it is and was to the web's success at the time.

**Jerod Santo:** The API was just brilliant. If we look at specifically what Kball said earlier about everything is a collection, \[unintelligible 00:22:33.10\] I write my code that way now because I realized that as a developer what you will like to do to simplify your code is to reduce the number of cases.

And one of the most common bifurcations of cases is I have one thing - there's you case one - and I have more than one thing, and there's my case two.

So tons of code out there is just like "Hey, is it one or is it many?" All over the place. And these are just unnecessary conditionals in your code. And I learned it from jQuery, because the only thing that makes one different than many is there's just one. But if you put it in an array, it's no longer a separate case. If it returns one, it's still a collection of one. And if it returns seven, that's a collection of seven. That's such a small API decision, versus just merely returning the bare object, if it's one... Return an array. And if there's zero, you return an empty array. It's just one big thing. It's just a list, and that list could have zero, one or many in it. And that reduces so much checking in your code that it's just the way to do it. I used to have all sorts of places in my code where I'd have the one case, and then I'd have the many case, and now I just have a collection, because I learned it from jQuery.

**Nick Nisi:** \[23:51\] It also kind of smoothed over a lot of APIs like that, in that case. Thinking back to how you might -- even today, how you would create a DOM element with just vanilla JavaScript. If I wanted to create a div, document.createElement("div"), and then if I wanna add a class to it, that's another line, another call. If I wanna add properties to it, that's another thing. And jQuery was like one line.

Or another thing that it introduced that is still kind of floating around today is this idea - or maybe it didn't introduce it, but it did to me - of a chained API \[unintelligible 00:24:21.15\] now do something with it. Oh, now add an event listener to it and now do another thing", and just keep returning that instant, so you keep chaining on calls to it. It's been a while since I've used it, but...

**Kevin Ball:** That pattern is so powerful. I also learned it from jQuery, and have used it in so many places to make much more intuitive APIs.

**Jerod Santo:** Absolutely. Explain, Kball, exactly how you implement that pattern, what you do with your code.

**Kevin Ball:** The key aspect there is that every function call returns the object itself. You basically have a core concept - in this case it's a jQuery collection - and anything that you do to manipulate it returns the object itself. So you can just keep calling additional things. You can call it .filter, .map, .whatever.

Now, one thing I might extend on it that is a challenge with jQuery right now is jQuery is imperative and proactive in it. So you do this, and each thing that you do actually does the change and then returns it. In many situations you actually want it to be lazy, so you want it to apply or use that to build up a set of manipulations, but then you deliberately decide when to execute it, rather than having it go step-by-step. And you can do fun optimizations with that, and things... This is a model that I've seen used. Arel in the Ruby world uses this for building SQL queries, and things like that, where you have a builder...

But yeah, this core concept of "I have an object that has a bunch of ways to manipulate it, and each one of those function calls to manipulate it returns another version of that object, so that I can keep just chaining on more calls to it" - it's such a powerful mental model.

**Nick Nisi:** And jQuery was kind of object-oriented too, in that way... Every time you called the $ function and passed it something, it was actually returning you a new instance of this jQuery core object... But it hid all of that from you too, and that was another cool trick that I learned - how you could detect if something was called with new, and then call new for it, and then continue on. So kind of coalescing that, just like you were saying, Jerod, with one or many; is it a new instance, or did I just call the method directly? You can just make it one thing; it's that simple.

**Jerod Santo:** Yeah. Tons of cool stuff. It started with John Resig, but as it became pervasive, so many brilliant minds worked on that project, and probably some brilliant minds continue to maintain it to this day. Everybody really rallied around jQuery for years, so you could know that it was gonna do the best practice, it was gonna have the thing the right, and you didn't have to worry about it... And it was gonna smooth over the incompatible APIs between browsers, so that you could just get about your business. It was really powerful that way, too.

**Amal Hussein:** Yeah. I got to work with some of those brilliant minds, if I can give them a shout-out...

**Jerod Santo:** Go for it.

**Amal Hussein:** When I joined Bocoup - Bocoup is the company that was actually in many ways born out of the DOM wars, and folks who were working on jQuery who just started a company together, kind of... Many years ago, over a decade ago... Folks like Corey Frang, Rick Waldron, Boaz Sender, Jory Burson on the community side, Mike Pennisi I believe was involved also... And just a bunch. I'm forgetting people. Isaac... Corey Frang - I got to work with him; he was a tech lead on a project that I was working on very early when I joined the company... And I don't think I've ever worked with somebody who's so masterful at API design. And I'm like "Oh, I get it. I see why jQuery is the way it is. You helped work on things like Deferred, and all these wonderful APIs that have taught me and all these other wonderful engineers how to write good code."

\[28:08\] So it was just like a pleasure working under them. Maybe we can have them on the show one day and pick their brain... Because they have also the most number of Stack Overflow points I've ever seen. Their Stack Overflow credit is just like -- they're like "Hey, in case you ever want Stack Overflow credit, let me know. I'll toss a few your way." That's how many they have... Their pronouns are they/them.

The other thing about the brilliance of jQuery is just how much complexity it handled, especially with things like the Deferred API, which really laid the groundwork for having promise patterns in the client... And Deferred actually wasn't even an A+ promise. The API itself didn't adhere to that...

**Nick Nisi:** That caused me so much confusion...

**Amal Hussein:** Yeah, and the reason why it couldn't was because it was doing so much interop work. It had to do so much hackiness in order to get promises to work formally across the board in all these browsers. And for folks that are like "I don't understand. What is this interop problem?" Well, again, another history lesson. I'll keep this one short, don't worry, kids. \[laughs\]

So back in the day, when you were building a web app, or a website (to be more specific) at the time, someone would come to your website and the first thing that you would ask them on the server was like "Who are you?" And "Who are you?" is not like "Who are you user?" it's like "Who are you browser? Are you Netscape? Are you IE? What are you?" And based on what the response is, based on the browser type, you would send them different code. That's how bad it was. And it was a nightmare to maintain. jQuery just made that problem non-existent, essentially.

So we really have a lot to thank to jQuery, and I wish we could have gotten the numbers before this show; maybe we'll publish it afterwards... But most of the web is still running on jQuery, for the record...

**Jerod Santo:** Totally.

**Amal Hussein:** And the web is massive. They also set the standards for documentation, teaching, conferences, community... They paved so many things. jQuery documentation is still to me golden standard for docs, hands-down. And given the number of people that have to use it, it makes sense. It's also translated in different languages... It was written to support different versions... Just wonderful docs.

**Jerod Santo:** A rich history, and it definitely changed the world, as I said in my amazing poem... And it continues, like you said, to be deployed in massive quantities to this day. I think the number is around 83%. That was last year, and that could be off... So we will look it up and get it in the show notes. I didn't have a chance to grab that. But an unbelievable amount of websites still have the jQuery object defined in their JavaScript.

No shame in using jQuery today. As Kball said, it's the right tool for specific jobs. So you've gotta pick the right tool for the job that you have... And you shouldn't blanket-pick any technology when you set out to solve some sort of problem, because you're not doing your job at that point; you're just cargo-culting what you think should happen. You should analyze and decide. And there are problems for which jQuery is still a great solution, and the best of those are the ones that are already existing in production. They're out there, they're solving real-world use cases, and they aren't broken. Now, if they're broken and you can't move faster because you've got heaps and heaps of poorly-factored jQuery code, you might have to do something about that. But if they're out there providing value, and all you're doing is augmenting and extending them, if you swap that out for something else because jQuery is lame now, you're not a very thoughtful person. You need to think more, and rethink that decision.

So definitely no shame in the JS game if you're still using jQuery today.

**Amal Hussein:** \[31:59\] No shame at all. And Jerod, one last fact before we end this segment... Angular, another library that changed the web and was pivotal in the web's arch, for how we got to where we are - Angular, the several iterations of Angular, they launched it with jQuery lite under the hood. And the Angular API was very jQuery-esque. And they were able to do what they did, and the speed that they were able to do it in, and as well as they were able to do it - because of jQuery. jQuery was a huge component of Angular 1.x So just something else to keep in mind. Our giants are standing on the shoulders of giants, are standing on the shoulders of giants. And we're way beyond the moon at this point. It's really just exciting to see how far we've come, and I'm excited to see where we go.

**Break:** \[33:00\]

**Jerod Santo:** Hey, it's Judith and Rushali from Hot New Tech. Welcome to the party, ladies...

**Rushali:** Hello.

**Judith:** Thank you for having us.

**Rushali:** Yes.

**Judith:** Very excited.

**Jerod Santo:** So this is a cool colab between JS Party and Hot New Tech... Tell the folks what Hot New Tech is.

**Judith:** So it's hard to say what we are, but I can tell you what we do, which is every two weeks we review an emerging tech. As engineers, there's a lot of pressure to stay up to date, and it's more fun to do it together. We try to take the pain out of it, and we learn new things, and then we tell you the TL;DR, if it's worth learning for you, and the trip-ups we had, and some sociological commentary, just for fun.

**Jerod Santo:** There you go. Super-cool show, I'm a big fan... And we thought we would integrate some of your TL;DRs into JS Party from time to time. So here we are, we're gonna talk about tone.js. We're gonna roll your TL;DR section of your show into this show... But Rushali, what is tone.js, so that people know once you TL;DR it what the heck you're talking about?

**Rushali:** So tone.js is a web audio framework for basically doing audio on the internet. It's built on top of the Web Audio API. So that's what it is, in short...

**Jerod Santo:** Okay. So y'all tested it out. Anything that happened along the way, or anything that people need to know before they go into what you thought about tone.js, and whether or not they should use it?

**Rushali:** Yeah, so basically I learned JavaScript with tone.js. That was my introduction to JavaScript.

**Jerod Santo:** Okay...

**Rushali:** So it's a very interesting way to start learning how to code on the frontend... And the other interesting part is that back in the day, the internet had a lot of sounds; weird sounds. We remember the Windows 90's sounds, and all of these other sounds...

**Jerod Santo:** Oh, yeah.

**Rushali:** \[35:55\] And suddenly, they all went away. That was because browsers needed you to opt in for the sound to be played. You couldn't just start playing a random sound on the internet on any website. So that broke a lot of websites, apparently, in 2018... But now we can go back into the world of playing weird music online.

**Jerod Santo:** Awesome.

**Judith:** Yeah, you need to opt in to the audio, so that's one thing that we learned... We tried to make it on the hover states, but you couldn't just hover on it. I guess hovering is not considered opting in... So you have to actually click a button that enables the sounds... So that was an interesting experience.

Then we sort of went on a deep dive. It was like "When did you have to start opting in?" Because we didn't use to have to opt in.

**Jerod Santo:** Right.

**Judith:** So it's a whole internet history lesson as well.

**Jerod Santo:** It's unfortunate for the creator, because it kind of makes your creation less cool, because it can't just do a thing... But it's good for a user, because you don't wanna just go to a web page and all of a sudden it starts making noises at you without you knowing about it. So it's a trade-off, as most things are.

Well, really cool. Here's the TL;DR. Let's get right into it, shall we?

Hot New Tech Intro \[37:06\]

**Rushali:** Ease. Was it easy to use?

**Judith:** I would give it a seven... I think this is a complicated one, and I think it reflects the sort of to-do actions of the library. I don't think it's easy to create music, period... So this is not \[unintelligible 00:37:41.24\]

**Rushali:** I think we should say that it's not easy to create good music. You can make bad music very easily.

**Judith:** Interesting. I'm trying to decide if that's true or not. In my head, even creating bad music is hard, because there's like a level of vulnerability there... So I would say even bad music is maybe even harder, because you're more embarrassed.

Okay, I'm going back to the seven, because it wasn't -- it was doable, and there were enough examples and documentation... So it's definitely doable, but it's not like \[unintelligible 00:38:14.08\] It's not a ten... I'll give it a seven.

**Rushali:** Okay. So for ease I would give it a seven or an eight. A seven. I'll give it a seven, too. You know why? Because I have a bias \[unintelligible 00:38:26.14\] because I started this in 2017, so I have seen the docs before. I've done projects with it, and I learned JavaScript with tone. So I can't really give it a non-biased rating, and biased rating is 7 out of 10.

Docs. For documentation I would give it an 8 out of 10. Again, this is a biased opinion.

**Judith:** I was leaning more towards a 7 out of 10, because I like things to be spoon-fed to me, and I wanna do a copy and paste everything... So that's my definition of a ten. So the copy and paste didn't work so well... There were some little glitches with the JavaScript, and attaching yourself to DOM objects. However, I would say that the juice is on GitHub, because there's a million examples that work

I think it's underrated when a demo actually works. How many times have you looked at a library and you're like totally sold, and then you click on the demo page and the demo is broken, and you're like "Of course I'm not gonna use this library. The demo is broken."

So I have to say that the fact that all the demos in the tone.js library work - that's almost a ten right there. And then you can look into the code, and that code you can copy and paste for the most part... So I'm gonna meet you on the eight, because there are so many working demos that are awesome... So I'll meet you on the eight.

**Judith:** \[39:50\] Fun. I'm gonna give it a 9 out of 10... Because when I hovered on that button and it laughed, I laughed... \[laughs\] It's so simple, but it made me laugh. So that's a nine for me.

**Rushali:** That moment, to watch you hover and laugh to the laugh - it was just so satisfying, as just a viewer...

**Judith:** I think the delight of internet has really gone down the drain, and it kind of reminds me of the '90s, when the internet was just strange and delightful.

**Rushali:** Yeah.

**Judith:** And maybe back when audio was allowed and unrestricted, the internet was a better place. I don't know. When was the last time you laughed on a hover state?

**Rushali:** Yeah, exactly. "When was the last time you laughed on a hover state?" is the question we should all be asking ourselves in 2020. \[laughter\]

**Judith:** Heat. Oh, my god... So heat - I think that one might initially give it a low rating, because of the low market value of audio on the web... However, my argument would be that because data -- I would say data is the hottest thing on the market right now; everything is about data. Data visualization, data maximization, data privacy, data, data, data... It's all about data. But I think that data soundification has a lot of potential, and there you have it. You can do that with this library.

**Rushali:** I agree with all of the parts that you said. What is concerning to me is that when I graduated, I learned JavaScript through tone and p5, and when you basically apply to a job, if you know React, they're like "Yes, you're hired." And then if you go like "What JavaScript stuff do you know?" and I went like "I know tone", and they were like "What the f\*\*\* is tone?" So it wasn't very hot when I was job-hunting... But I had so much fun while learning it. So you win some, you lose some.

I wouldn't want to learn JavaScript with React. That just sounds very boring. 7 out of 10. I can't give it more than 7, because if there's a student who's learning how to code now listening to this and goes like "Oh, I'm gonna try tone, and add it to my resume", I don't know how many companies are gonna be like "Wow, what a great library to learn!" That's not what companies are looking for... Unless it's a specific audio company, which is also amazing.

But if you're gonna do open source stuff, then yeah. Use this library. It's fun, it's hot, to a certain degree... And it's fun, most of all.

**Judith:** Yeah, I definitely would agree with you that it shouldn't be the only JavaScript library on your resume... But I think it's a hot tool to have in your box.

**Rushali:** Oh, for sure. And if you're a musician, it's way too hot. If a musician walked up to me and was like "I can code music", I'd be like "This is good."

**Judith:** Clap, clap, clap. So we have to obviously have an average... So you say 7, I say 8. I prefer round numbers...

**Rushali:** Okay.

**Judith:** Can I sell you on the 8?

**Rushali:** Fine. Eight it is. Hours it took.

**Judith:** To get that C\# going, you're looking at 15 minutes. For us to get our hover states working, before we sort of knew about the audio opt-in, I would say like an hour. We also had a \[unintelligible 00:43:33.01\] with local audio, we had to spin up a server... So there were a couple of small challenges, which are always gonna happen with a new thing. So anyways, I would say an hour to get something custom working, and then to actually create a custom song... I've never done that. How long do you think it would take to make a real song?

**Rushali:** \[43:57\] Um, are we musicians or not?

**Judith:** How long did it take you to get your first build project going with tone?

**Rushali:** A day.

**Judith:** A day. Wow. Okay.

**Rushali:** But I didn't know anything. I didn't know what \[unintelligible 00:44:10.26\]

**Judith:** Right. But that's how it is; whoever's gonna come into this isn't gonna know anything. Or are you saying for an audio engineer coming into it?

**Rushali:** Yeah, if you know a lot of these concepts, you would know like "Oh, I think if I played \[unintelligible 00:44:20.25\]" I just made noise at the end of it.

**Judith:** Okay. How long it took for us to get something that we wanted working was one hour. I'm gonna go with that.

**Rushali:** Yes.

**Jingle:** \[44:41\] to \[44:54\]

**Break:** \[44:54\]

**Jerod Santo:** Alright, we all know what time it is... It's Pro Tip time!

**Jingle:** \[45:59\] to \[46:04\]

**Kevin Ball:** \[laughs\]

**Jerod Santo:** Thanks, Nick, for that amazing jingle...

**Kevin Ball:** Oh, my goodness... I hadn't heard that.

**Jerod Santo:** Well, let's let Nick go last, based on that jingle... Kball, you're up. Pro tips, what have you got?

**Kevin Ball:** Pro tips, okay. So mine is actually related to a change I did recently. For about the last month I've changed my work schedule. I now work from 5:30 AM till 2 PM, my local time... Which has a variety of reasons behind it; childcare, and other things, and also my body's natural inclination is towards being a morning person... But one of the things that it has done that I wanna highlight as a pro tip is it has kind of de facto separated my day into a focus period at the beginning of every day, and then a relationships and meeting period towards that end or latter half of my day.

So no matter what happens, there's almost nobody on my team who's awake when I'm first getting up. And the few people who are - we have a couple of folks in the U.K, and a couple folks on the East Coast - there's not much going on there. So I always get a chunk of time in the morning to focus... Which is amazing. I've been so incredibly productive with that time these last few weeks, and it's just amazing.

And the other thing that having that dedicated focus time has done is it's made me feel much more free to schedule just relationship-based one-on-ones. "Let's do a coffee chat." We used to walk to the coffee shop; we can't do that anymore, but let's each independently have our coffees and chat and catch up and see how you're doing. That's actually been wonderful too, because I feel more connected to both my co-workers, and I've been reaching out to friends I haven't talked to in a long time, and things like that.

So my pro tip is schedule your day, ideally find a way that you can block off -- I'm sort of implicitly blocking off that early focus time by just having it be a time when nobody else wants to be awake... But I think have that focus time, and then also deliberately block off some time or schedule some meetings, whatever it is, that are just about building relationships, connecting with people, having that interhuman contact that we all miss so much today in Covid land. That's my pro tip.

**Jerod Santo:** \[48:06\] I love it. Good stuff.

**Amal Hussein:** That's a legit pro tip. It's really serendipitous, because this week I've started adding focus time blocks on my calendar, because I was getting to the point where I'm not getting any of my work done because I'm putting out fires or helping other people, and I have to remind myself it's okay to say no sometimes...

So yeah, it's like the life of a tech lead... You're just constantly in -- a new term that I heard recently, called Push mode, where people are pushing things to you, and you're like "Yes. No. This way, that way. Blah-blah-blah-blah-blah." Literally, I do like ten code reviews a day, for example. That's one way of people pushing things to me. But then you need to do your pull work, you know... And that requires actively clearing your mind and pulling work... That's very different than push. And I thrive on push, because I'm very good at context-switching, etc. But pull is something I can do well if I plan for it and make the mental space... And that's my focus time, is working towards that goal.

So I set a 15-minute reminder for me before my focus time, so that I'm not late for my focus time. And it's at the same time every day, and I'm really trying to move meetings around, and cancel things, and ask people to reschedule if it's not an emergency... So I just need to train myself. I'm training to focus for 2,5 hours a day, and see if I can do it.

**Jerod Santo:** I was just gonna ask you how long that block is. It sounds like 2,5.

**Amal Hussein:** Yeah, 2,5 at the end of the day, because I just need to \[unintelligible 00:49:45.15\]

**Jerod Santo:** I have the hardest time focusing at the end of the day. That's usually where I do most of the push stuff... I'm not sure which one it is, but it's like emails, and check this, and read that... Because I've lost my ability to think deeply by then, usually.

**Amal Hussein:** Yeah, I hear you.

**Kevin Ball:** Yes... I totally have that. That's one of the reasons why I'm doing this... Because I used to grab my focus time when I could, and it would be at different times of day... And switching to the early schedule, so I always get that at the beginning, when I'm fresh, is so good. I got into it for childcare reasons... I think I'm gonna keep it. This is a life-changer, in some ways.

**Amal Hussein:** Yeah. Well, I guess for me - full disclosure, I have a secret focus time, which is like morning hours... But I don't tell anybody about it.

**Jerod Santo:** Don't schedule it... Yeah.

**Amal Hussein:** Yeah, I'm not responding to Slack messages before 10 AM, for example... \[laughs\] But it also helps. Some of my team - they're in the West Coast, so that helps a little bit... But I agree, mornings are absolutely the best. I just have to be available for meetings and stand-ups... That's the challenge for me.

**Jerod Santo:** Sure.

**Amal Hussein:** Those are primetime hours, and I have to just be available, unfortunately... But yeah. That's what Saturdays are for, right? Just kidding, just kidding. No working on weekends. I don't ever work on weekends, ever, ever.

**Jerod Santo:** Well, that has been your piling on the Kball's pro tip. Do you have your own pro tip?

**Amal Hussein:** Yeah. My pro tips are really different though, is I think Nick should Go, and then I'll go.

**Jerod Santo:** How do you know Nick's are gonna be the same?

**Amal Hussein:** I don't know if Nick's -- well, okay, because mine are like technical, and lame, and I think Kball's was like...

**Nick Nisi:** So are mine.

**Jerod Santo:** Oh, mine is also technical and lame.

**Amal Hussein:** Okay, fine, fine...

**Jerod Santo:** So we have no good options here... So get us started.

**Amal Hussein:** So then Kball wins on pro tips. Alright, so I have three pro tips. One is for folks doing a lot of responsive -- not even responsive... For folks responsibly designing web applications... I don't even wanna call it responsive design anymore; but unfortunately, the name of the app is Responsively. There's a great Chrome extension -- or any... I actually don't have the list of browsers supported, but unfortunately I do all my development on Chrome, and then I test on other browsers only because from Dev Tools this is what I'm most comfortable with. My primary browser, however, is Brave, or Firefox Focus, or Firefox. Those are my three that I use for everything else.

\[52:11\] But it's a really great extension called Responsively, and it lets you just very easily snap your site into all these different configurations, and it makes it really easy for you to capture where things look broken, in what size... And for right now, it's not even about your users having a mobile version, a tablet version, and a desktop version... Monitors are all different sizes.

I use something called Spectacle to manage my windows. Sometimes my browser is one third of my window... So your sites should really look good generally in multiple sizes, and it's a really great app that lets you do that.

And then if you're kind of struggling with layouts, and how to use Flex, there's an awesome website that gamifies how to learn using the Flex syntax, the CSS syntax. This is a really cool little Froggy game; I think it's like 30 steps or whatever, and by the time you get to the end, you kind of really understand how to lay things out in a grid using Flex, which is awesome... So just like an hour of your time--

**Kevin Ball:** Flexbox Froggy is amazing.

**Amal Hussein:** Yeah, Flexbox Froggy is crazy, so we'll link that. An hour of your time and you will have demystified years of "How do I move things to the left...?"

Alright, so the third pro tip is a really good one. It's a browser extension called Refined GitHub. It's just essentially a layer on top of the GitHub UI that really just makes the experience a lot better. Everything from being able to shut off comments when you're doing a review, when you're just like "I don't wanna see anyone else's comments." Just a better organization of repos... So many nice enhancements that aren't available on regular GitHub... And it's open source, publicly maintained, so pretty secure. I'd recommend that, and we'll link that in the show notes... So you can thank me for making your GitHub experiences better, for free.

**Jerod Santo:** Sounds awesome. Thank you, Amal.

**Amal Hussein:** Yeah, you're welcome.

**Nick Nisi:** Mine kind of ties into that one a little bit.

**Jerod Santo:** Okay, Nick, tie it in. Bring it all in. We'll have some synergies.

**Nick Nisi:** Yeah, in the idea or in the general direction of improving your GitHub time, I say just don't go to GitHub anymore...

**Jerod Santo:** Oooh...

**Nick Nisi:** And that is with the GitHub CLI. It can do so much... And if you're like me, I get lost in -- and maybe the refined GitHub would help me, but I get lost in the GitHub UI, where I'll just be like "Oh, looking at the newsfeed...", or seeing different comments, or jumping around... Or it just takes me a while because I don't easily navigate to the projects that I want when I go back to GitHub, or I have ten different GitHub tabs open.

So the GitHub CLI - with that you can check the status of your PRs; you can check out PRs to do reviews, or running them locally... You can check the CI status. So if you have any checks that are running, you can have all of those reported back to your command line, and check all of them.

And you can create PRs from there... Kind of very similar to the Hub wrapper around Git, if you've ever used that... But it lets you basically script that. So we have like a set way that we create PRs, with like what's in the title, and all of this... So I can just have all of that created for me with a script that ends up calling the GitHub command line, and then pops it over into the browser, and I can finish filling it out there, or drop in gifs, or anything that I want in the actual PR that I create... And you can also created aliases off of that.

Some really cool aliases that you might be able to do is, like I said, creating PRs in a specific way, or navigating to your project, or giving you a list of PRs that you're set as a reviewer on every morning, and then you can just check that there and go through it without having to get lost in the UI... And it also acts as an authenticated client to the GitHub GraphQL API... So you can create your own calls to that and have it do whatever, and then you can alias that just like you do with Git, where you create aliases...

**Jerod Santo:** \[56:10\] That's cool.

**Nick Nisi:** You can create GitHub aliases and just have those as repeatable commands. And you can share them, because they just go into a gh config, or -- I can't remember the exact name, but basically a gitconfig file.

**Amal Hussein:** Yeah. That's honestly incredible. I'm gonna totally share that with my team. I heard about the release, but I never looked into it; it's just information overload... So thank you so much for giving it the thumbs up.

**Nick Nisi:** Yeah, it's really cool.

**Jerod Santo:** Absolutely. And we have Mislav from the GitHub's CLI team on Go Time upcoming. So check the feed for that. The whole CLI is written in Go; they've just recorded it last week, so it'll be coming out soon. That should be an awesome episode. Even though it's Go Time... I mean...

**Kevin Ball:** Way to tee 'em up.

**Jerod Santo:** I know. It hurts... It hurts to actually point people towards Go Time, that putrid show...

**Kevin Ball:** \[laughs\]

**Jerod Santo:** ...but we'll take an exception this time.

**Kevin Ball:** Nah, those guys are fine.

**Jerod Santo:** Nah, just kidding. Just kidding.

**Kevin Ball:** I'm just wondering if Nick got paid under the table to bring that forward...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** This is all organic. This is organic content right here. And I also have a tie-in to the CLI... So my pro tip is to get to know your CLI a little bit. Spend more time in Bash. It's amazing how intimidating it can be if you're not a command line junkie, but how you can just learn a few things, and those few things can make you incredibly powerful. You don't have to master the thing all at once.

I've been using the CLI for many years, and there are many things about it I have no idea how to do, and there are many things that I do all the time and they save me tons of effort. So this was a thought that I had after being reminded of a really cool trick in the Bash prompt from Ali Spittle; remember Ali from the Frontend Feud episode a couple weeks back; she's one of the Lady Bugs... And she put out on Twitter about brace expansion. So I thought I'd share just a couple of quick shell tricks.

Brace expansion is a really cool trick where if you start to spell a word, you can put curly braces around any section of that word from the command line, and it will expand it into multiple versions. So why would you care about this? Well, you can create a bunch of files really quickly, all with the same names, by using that.

An example that she put in her tweet, which we'll link up as well, is if you use the touch command (it just creates a file), and then you say $ touch Button \[unintelligible 00:58:34.00\] it will create those three files. So it will create Button.js, Button.css, Button.html. It's a very cool trick.

**Kevin Ball:** Super-key for renaming things, too. If you have a file you just wanna rename slightly, it's so helpful.

**Jerod Santo:** Yes, absolutely. And you can do pattern-matching that as well.

**Amal Hussein:** I actually only use that to rename. I've never used it in the way that you described, Jerod... But I'm going to start doing that now.

**Jerod Santo:** Absolutely.

**Amal Hussein:** I use it to rename file extensions. Kball knows what I'm talking about.

**Jerod Santo:** Totally. So that's the cool thing about these tricks inside of the shell - everything's composable, so brace expansion is just a feature, and you can apply that feature in all these different contexts, like creating files, renaming files, finding files... And so maybe you didn't know you can use it that way. That's another way you can use it.

Another quick pro tip on the command line is the bang operator, the exclamation mark... So if you wanna go back through your history and you don't wanna hit the up arrow like 75 times, but you know you did that Git command recently, you can do exclamation mark, the bang, and then you can start to type the command. \[unintelligible 00:59:53.22\] and then maybe you remembered it was a git add, so you start to put add, and then you hit Enter - you don't have to do the whole thing. You have to match just the beginning. It will re-execute the last time you started a command with Git add. Now, sometimes that can be scary, because you're like "Well, did I do it the last time, or was it three times back? I can't remember..." So there's a way you can get around that by appending :p at the end. So if you do bang, and then your command you're trying to find, colon p, it will bring that command up and show it to you, but it won't actually execute it. So then you can look at it and be like "Yeah, that's the one I wanted." Just a great way to quickly pull up a history thing without having to go dig through the Bash history.

**Amal Hussein:** \[01:00:35.05\] Yeah, I think it's called recursive search.

**Jerod Santo:** Is that what it's called? I just thought it was called a bang. Nobody told me how to call it... So yeah, that sounds great.

**Amal Hussein:** You know what - I think that recursive search actually... It's all muscle memory for me. It involves R, so maybe not... But yeah, bang might just be the last one. Can I piggyback a small one?

**Jerod Santo:** Yeah. I've got one more, but pitch yours in and then we'll close this out.

**Amal Hussein:** Oh, you've got one more.

**Jerod Santo:** I've got one more.

**Amal Hussein:** Okay. Mine is just like - you know how when you're switching branches, it's super-annoying to keep typing out the branch name, especially if you don't have Bash autocompletion?

**Jerod Santo:** Yes.

**Amal Hussein:** So if you do "git checkout -", it'll just take it to the last branch. And you just keep doing that and you can switch back and forth between branches. "git checkout -" and it'll take you to the branch you last checked out.

**Jerod Santo:** Yeah, toggle back and forth. In fact, cd works the same way.

**Amal Hussein:** Yeah, just toggling.

**Jerod Santo:** Yeah, that's cool. So "cd -" will go back to the last directory you were in. And then it's the same thing, it'll toggle back and change directories. So again, multiple applications of that dash. It's awesome.

**Kevin Ball:** Do you all use pushd and popd?

**Jerod Santo:** No. Please, tell us about it.

**Amal Hussein:** I don't use pushd and popd.

**Jerod Santo:** Is that where you have a list of often used...

**Kevin Ball:** It lets you maintain a stack of directories. So I wanna go into this, I pushd in, and then when I'm done doing whatever I'm doing there, I popd and I'm back to wherever I was before. And you can do a nested stack \[unintelligible 01:01:58.25\]

**Jerod Santo:** We could have a whole episode on command line pro tips. This is getting good.

**Amal Hussein:** Yeah. Also tree. Download tree. Brew install tree. Tree is like one of the first things I do whenever I set up my dev machine... Which - by the way, people are starting to set up their own repos for dev box configs. It's like going beyond dotfiles now, it's like "Here's all the scripts I need everytime I set up a new machine", and that's really smart to do that.

**Jerod Santo:** This is the kind of stuff Nick just freaks out about.

**Amal Hussein:** Nick is like "Aaaaargh!"

**Jerod Santo:** \[laughs\] Nick is like "I have so many things to say..."

**Amal Hussein:** Jerod is like "We need to go..."

**Kevin Ball:** I use all of Nick's dotfiles, and I keep getting confused, because he's got so much in there... Like, "Wait, where did that come from? What's that thing?!"

**Nick Nisi:** I have to say one more thing that kind of ties into that, and it goes back to Git a little bit, or GitHub a little bit... One other pro tip is with GitHub Codespaces coming out, if you have a dotfiles repo on your GitHub, when you create a new codespace, it will look and see if you have a dotfiles repo, and it will set up your environment with that dotfile repo. In my case, I have an install.sh file in there. It will run that to set up my environment.

**Jerod Santo:** Wow...

**Nick Nisi:** Just so cool.

**Amal Hussein:** That's amazing. I got that demo live from Scott Hanselman, which is crazy... Months ago. It blew my mind. Thank you for reminding me that that exists. I tend to be very skeptical of big tech cloud software. I like waiting a year or to before getting on that bandwagon, because there's just a lot of "This is gonna change the world", and then it's dead.

**Jerod Santo:** Right.

**Amal Hussein:** So we'll have to see how widely Codespaces gets adopted before we can get excited about it.

**Nick Nisi:** With that getting automatically set up, it's really easy for me to then pop into my codespace, open the terminal full-screen and just use Vim

**Amal Hussein:** Game-changer for productivity, basically.

**Jerod Santo:** Game-changer... \[laughs\] You can also just use Vim on your computer, you know... It's right there.

**Nick Nisi:** Yeah, but now I can do it on my iPad...

**Amal Hussein:** Yeah, but this is cloud. Even in the cloud--

**Jerod Santo:** Let me show my last pro tip, dang it! I've got one more. \[laughter\]

**Amal Hussein:** Okay, sorry, Jerod. I'm ruining it.

**Jerod Santo:** \[01:04:03.12\] Come on, this is a good one. Alright, backticks. Backticks. Command substitution. So if you type a command like "which git" - do you guys know what that command will do? It will show you the full path to the Git binary that you're gonna execute when you type git. Because Linux has paths, and when your execution path picks up the first one, you might wanna know which Git I'm actually gonna run.

Now, if you wrap that in backticks, it'll actually return that value to the previous command. So backticks is like up with Tilde operator up there, on your upper-left side of the keyboard. Backticks and "which git". So if you have like a script in your path somewhere - many of us do - and you wanna edit that script, and you're not even sure where it is, all you have to do is type "vim", because that's what we all do with editing, is vim... And then space, backtick, which, and then the script name, backtick, and it will actually open it up in Vim. So it'll return the path and pass it back to Vim, Vim's expecting a file path, and it will open it. That's just one use case. There's tons of different ways that you can take those backticks and send the output of that command into other commands. Really cool.

**Kevin Ball:** Can I jump in briefly on that...?

**Jerod Santo:** Please do. Please do.

**Kevin Ball:** Generally -- so dollar parenthesis will do the same thing, but it's much easier to next things. So you can't really next things with backticks, but if you use dollar paren instead, then you can actually nest multiple dollar parentheses down inside, and you can do multi-layered substitutions.

**Jerod Santo:** Ooooh...

**Amal Hussein:** That is getting very fancy.

**Jerod Santo:** Yeah, you're getting very fancy. I was trying to keep it simple over here, guys... I was trying to make it approachable, but...

**Amal Hussein:** KISS, everybody...

**Jerod Santo:** Go ahead, Nick. Go another level or depth on us. \[laughter\]

**Nick Nisi:** I was just gonna \[unintelligible 01:05:48.15\] on it a little...

**Amal Hussein:** Stack Overflow...

**Nick Nisi:** If you're using ShellCheck, which is like a linter for shell scripts, it will actually tell you not to use backticks, and instead use the dollar sign, open parenthesis, close parenthesis.

**Jerod Santo:** I'm just talking about like doing stuff from your command line here. I'm not talking about writing shell scripts... With a linter? Come on...

**Nick Nisi:** \[laughs\]

**Amal Hussein:** Alright, everyone, I'm gonna do us all a favor and rein in this show... And I'm gonna related this all back to jQuery. Are you ready?

**Jerod Santo:** Okay, how are you gonna do it? Let's do it!

**Amal Hussein:** Alright, I'm gonna do it. So Unix is amazing, because it's like the original jQuery, if you think about it, in terms of API design. All this chainable, passing things into each other... The fact that you can parse a bunch of files, do a grep, take the results, use xargs, pass it into something else, pipe it into a script... It's just the original -- I don't know. I feel like chaining -- like, they invented programming chaining in a way that I think just set the bar for productivity and process improvement, and yet having some semblance of control flow... So kudos to Unix for maybe being the original grandfather of good computing patterns, I would say...

**Jerod Santo:** I will agree with that.

**Amal Hussein:** jQuery is the princess of the web. Always princess. Forever princess.

**Jerod Santo:** \[laughs\] You're forever our princess, jQuery, and we will forever appreciate you. Alright, that's our time, that's our show. Thanks so much for partying with us. Next week, you know what's coming back... By popular demand, Frontend Feud is back. We have a brand new cast of characters, and some returns as well.

Thanks for listening. We'll talk to you next week.
