**Nick Nisi:** Hoy-hoy! Welcome to another exciting JS Party. I'm your host this week, Nick Nisi, and I am joined by my friend and yours, Jerod Santo. Jerod, how's it going?

**Jerod Santo:** Hey-hey! I am doing well. I have worn my JS Party T-shirt as a form of silent protest to this entire episode. \[laughter\]

**Nick Nisi:** That's okay, because to counter that I'm wearing my TypeScript Metal T-shirt, so...

**Jerod Santo:** Oh, gosh... Josh, what are you wearing over there?

**Josh Goldberg:** I'm so ashamed... I have TypeScript socks and shirts in the other room, and I didn't think to wear them.

**Nick Nisi:** Oh, no...!

**Josh Goldberg:** I'm gonna have to come back in another 10 years.

**Nick Nisi:** Well, that amazing voice is Josh Goldberg. Josh, welcome to the show. Welcome back to the show. How's it going?

**Josh Goldberg:** Thanks. I'm good. I'm excited to be here. That intro music is always a jam. So good.

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** It lifts you up, it gets you ready to rock.

**Josh Goldberg:** Yeah. I'm so ready to scream about TypeScript at Jerod now. It's primed me.

**Jerod Santo:** I'm actually not sure why I'm here, honestly... I stumbled into the room, you guys were here, and I was like "Oh, should we do a podcast? What are we talking about?" What are we talking about, Nick?

**Nick Nisi:** I'll tell you why you're here, Jerod... We are here to stage an intervention. So audience members, YouTube, here's Jerod's personal cell. We're gonna have you call and give him uplifting --

**Jerod Santo:** Are you doxing me? Am I here to get doxed? \[laughter\]

**Nick Nisi:** I'm kidding. That was an idea though, of setting up some hotline or something and having the audience call in and --

**Jerod Santo:** That would be funny. It'd be cool if you would have got like all JS Party panelists to join one at a time, like "Oh man, all my friends are here." And then like "We need to talk." \[laughter\]

**Nick Nisi:** Current and former. Just get them all in a room...

**Jerod Santo:** Yes. Just all of us. Well, I mean, I'm gonna hear a lot about it today, maybe I'll be converted... Don't hold your breath... But I'm excited to hear why you guys are so excited about a decade of TypeScript. A decade plus.

**Nick Nisi:** Yeah. So let's set that up. I tweeted a few days ago that I've officially been writing TypeScript, and almost completely exclusively for ten years now. The language is older than that. I think it's going to turn 11 in October of this year... And so I've been there pretty close to the start, and it'd be a fun episode to just kind of get together and talk about the last decade of web development. TypeScript has had such a big influence on it, I think, from my point of view at least, that it's worth talking about. And so Josh, I hear you know TypeScript; you might have even written a book about it... And you're a great guest to also wax poetic about this and help me counteract Jerod on this topic.

**Jerod Santo:** I'm just over here checking my email. You guys do your thing.

**Josh Goldberg:** Can we get the personal email also to the audience? \[laughter\] Wherever you go.

**Jerod Santo:** It's JoshuaKGoldberg@gmail.com. Actually, I might have just guessed yours correctly. We can bleep that if it's right... \[laughter\]

**Josh Goldberg:** I'm just thinking -- no, wait, I'm pretty sure that email was taken. So you just doxed someone else, who isn't Josh...

**Jerod Santo:** Somebody else...

**Josh Goldberg:** ...who may or may not care about TypeScript. At the end of the day, I think they definitely will though.

**Nick Nisi:** Yes. Sorry about that, other Josh...

**Jerod Santo:** Everybody email that address with your TypeScript hate, and then send them JS Party, and tell them "Hey, check this out." Hopefully, they're into the web.

**Josh Goldberg:** There is a small set of other Joshes who I've been in a perpetual SEO battle with for the last few years... And it's really annoying, because a lot of us have had steadily increasing career success at the same seeming rate...

**Jerod Santo:** Okay... Wow. Who's winning?

**Josh Goldberg:** ...so one of these days one of us will win. Not me, actually.

**Nick Nisi:** I'm really lucky on that account... I don't have really any SEO pressure from anyone else on my name.

**Jerod Santo:** Right.

**Nick Nisi:** I kind of own it. Somebody did offer me $1,000 for a Nisi domain name once, and I totally sold it, and they bought it and set something up, and now it's a parked domain, and so I'm waiting to get it back pretty soon.

**Jerod Santo:** Oh, that's a nice turn of events.

**Nick Nisi:** Yup.

**Jerod Santo:** So you have no SEO battle, but you also have no SEO content. You don't have a book you're selling, you blog once every other year...

**Nick Nisi:** But the potential.

**Jerod Santo:** That's right, you're full of potential.

**Josh Goldberg:** The potential.

**Nick Nisi:** My clout score is through the roof, right? \[laughs\]

**Jerod Santo:** That's right.

**Nick Nisi:** Remember Klout?

**Jerod Santo:** I do. Klout. It was like a website for tracking people's internet clout. I actually had an idea for this as well back in the day, which I think I've built a very early prototype... It was called Tallly. It was back when Dribbble was big. And the thing was like "Internet points - who cares?" And then it was like "We do." And it was like "We're tracking all the internet points." And the idea was make it into an API and so you could actually aggregate all your internet points, and have like a total score. Kind of like I think what Kloud did. And I was joking; it was a fun side project for a couple days... Klout did it as like a startup, I think, with VC money. And I was like "Why have Reddit points?" Not everybody needs to implement freaking points. Just do it once, and have an API, and we could all have them in one place. And then I started thinking, "Do I want to have the API of everyone's internet points? No, I don't." So I stopped. But then Klout came out and did it for real.

**Nick Nisi:** And to call back to the pre-show, I think there's a South Park episode on this, with theoretical internet dollars...

**Jerod Santo:** Oh... Are you talking NFT's, or what are you talking?

**Nick Nisi:** It was all of the people who were early memers, like the Chocolate Rain guy...

\[06:25\]

*Chocolate Rain... Some stay dry and others feel the pain...*

**Nick Nisi:** The Leave Britney Alone guy...

\[06:32\]

*Leave her alone...!*

**Jerod Santo:** Right. Star Wars boy?

**Nick Nisi:** Yup.

**Josh Goldberg:** Oh, yeah. We just watched that one.

**Jerod Santo:** And the whistle goes woo? You guys don't know that one? Insert soundbite right here.

\[06:46\]

*Nearly every muffler shop in Oakland is installing whistler tips. It's a piece of metal welded inside the exhaust pipes that makes the car audible for almost a mile.*

*Tell me about the whistles.*

*The whistles go "Woo...!"*

*Anybody that has it in their neighborhood is going to be totally driven crazy.*

*It sounds like what?*

*Well, you wanna woo-woo? It's that woo-woo...!*

**Jerod Santo:** What about them? Have they made real money? Is that the idea? What was the South Park about?

**Nick Nisi:** It's been so long... Josh, you just watched it.

**Josh Goldberg:** Yeah, the idea is they're still waiting for their checks. So they all beat each other up and more violent, in line. This was actually a really big episode. This is the one where Butters does What-what song, which I actually learned last week was an existing beam. They didn't just make that up on South Park.

**Jerod Santo:** Oh, really?

**Josh Goldberg:** Yeah. There's an actual What-what video online, predating South Park, of fame. Yeah.

**Nick Nisi:** Well, to that end, Cloud Time, I'm still waiting in line for my theoretical internet dollars...

**Jerod Santo:** For your check?

**Nick Nisi:** What-what? Where is it at? \[laughter\] Let's talk about TypeScript.

**Josh Goldberg:** Yeah.

**Jerod Santo:** Talk me into it.

**Josh Goldberg:** Are you convinced?

**Nick Nisi:** Yeah. Did that convince you, Jerod?

**Jerod Santo:** You've convinced me to talk about that, with that enthralling conversation...

**Nick Nisi:** \[laughs\] Well, TypeScript came out in 2012, I think. October of 2012. And it was probably around the end of another heyday of a compile to JavaScript language called CoffeeScript. And Jerod, you look like you're probably a CoffeeScript guy... Is that accurate? And I say that only because I know that you have an affinity for Ruby, and it is a Ruby-like syntax.

**Jerod Santo:** Right. I was a CoffeeScript user. I liked CoffeeScript. I think CoffeeScript had a lot of really good ideas in it, and I think, and I'm glad that the JavaScript folks took some of those ideas and integrated them into the language. So I think it was somewhat -- I wouldn't call it revolutionary, but what's the word? It kind of like spurred on new innovation, which I appreciate.

**Nick Nisi:** Yeah.

**Jerod Santo:** And yeah, I like TypeScript... I don't have any problem with significant whitespace languages. Some people just hate those. I think they're kind of cool... And I liked it. But it was a thing that I migrated everything to, and then eventually, when JavaScript got better, I migrate everything off of... Which was a huge waste of time. \[laughs\]

**Nick Nisi:** There was a time where I feel like we cared so much more about whitespace. This is like the pre-Prettier days, the pre automatic formatting days. We cared about that stuff.

**Jerod Santo:** Right.

**Nick Nisi:** And there was problems -- or at least maybe I recall problems between using like spaces and tabs in whitespace- significant languages. Was that the case?

**Jerod Santo:** Yeah, for sure.

**Josh Goldberg:** I'm just now realizing, I think a lot of the tools we're talking about have two major value props, only one of which ended up being the really important one for that tool. CoffeeScript gave you the value of using what would become new JavaScript features much earlier, and it had the, in my opinion, dubious value of being a significant whitespace language. Dubious because that's not for everyone.

\[10:01\] And then what we cared about later on was that it gave you the new features. And looking back, the whitespace thing ended up not being so futureproof. And then in TypeScript, there's a parallel there, because TypeScript was similar. You get the new JavaScript features today, and then also the typesystem. And the typesystem now has been - what? It stood the test of time.

**Jerod Santo:** Hm. But Nick, you do like the new features aspect of TypeScript, don't you? You use it as your standard of what you can use because it's going to cross-compile or transpile back into something that's usable, with polyfills, or -- I don't know how it works, honestly.

**Nick Nisi:** Yeah, absolutely. I think that that's a big benefit that you get... Because back when this came out, the other competition for that was 6 to 5, which became Babel. And Babel plugins... And anyone can write a plugin, and then anyone can use that plugin, and who knows if it's going to actually become the way that language works later on, or if you're stuck with this weird Babel plugin to enable your weird syntax. And because of the restrictions on what actually gets added to TypeScript, and having the big power horse that is Microsoft backing that, they really only let stuff go into the language - except for decorators - when it was stage three or later. And so you're pretty much guaranteed that it was going to be something that was actually part of JavaScript, and this was just a way to add it to the compiler to use it today whenever possible.

**Jerod Santo:** But, to Josh's point, the type system - that's where it's at, right Josh? That's the horse.

**Josh Goldberg:** Yeah. I mean, it is nice and convenient that TypeScript lets you use new features now, and it has a transpiler... But these days, a lot of folks just use TypeScript for the type system.

**Nick Nisi:** Yeah, for sure.

**Josh Goldberg:** And then the fact that something is supported in syntax is like a nice "This is how it's going to be for us" kind of statement.

**Nick Nisi:** Yeah. And I think we can get into this too, but the -- back then too... Like, it came out in 2012. That's three years before ES6 really became finalized, which had like 30-something new features in it... And then there were so many significant new features every year... And I feel like we're still pushing that forward, but it seems less and less. Like, it's three or four a year maybe. And they're not massive, arrow-function level changes. They're more incremental, "Here's a new function for arrays", or "Here's a new function for -- a new way to handle promises", or things like that. So they're less significant. Not to say that they're insignificant at all; I think that there's a lot of cool stuff coming that I'm excited for... But it's more palatable, and it's not something where you're like clamoring to get at it... Whereas there were real pain points in JavaScript prior to 2015, and they started really being addressed in a significant way post 2015. And TypeScript was a way to opt into those features before they were actually ratified into the language, and available everywhere.

**Jerod Santo:** So you mentioned it's 11 years old...

**Nick Nisi:** Yeah.

**Jerod Santo:** And you've been using it for 10.

**Nick Nisi:** Yeah.

**Jerod Santo:** So what took you so long? \[laughter\]

**Nick Nisi:** I remember when I first heard about it... It might have been somewhere like Hacker News, or something like that... Like "Oh, this", and I saw, "Oh, great." First off, it was from Microsoft, which back then didn't have the reputation they have now, I don't think.

**Jerod Santo:** They've done a lot of repairing to their reputation over the last 10-15 years. Yeah.

**Nick Nisi:** Definitely, definitely. And then I never really -- like, I played with CoffeeScript a lot, but never really dug into it... And it felt like at the time like "Oh, this is a good thing, because it's kind of dying off and losing popularity... So I can skip TypeScript, because it's gonna be the same thing", which - it really wasn't. But I wasn't excited for it at all in the beginning. And then I was kind of led kicking and screaming into it at the company I worked at, because there was a lot of interest from a lot of the senior devs there, in it. And they started building a framework, like an MVC framework for it... And so I got exposed through that. But I really did not like it at the beginning. And I can get into why, but I'm curious what your stories are like when you first heard about TypeScript, and how you got led into it.

**Josh Goldberg:** \[14:08\] So I interned at Microsoft in 2014, over the summer. I started full-time end of the summer 2015, and just going back to GitHub, my first TypeScript pull requests are from spring of 2015. So I managed to intern at Microsoft a couple of years after TypeScript was publicized, and not adopt it. And I think the reason why I didn't was because, similar to you, I had seen CoffeeScript come and start to go. This was a new, untested thing; I didn't want to take a big bet in it. Especially since at the time I was trying to be more open source-oriented, and most folks did not know TypeScript. It was a big barrier of entry, in theory. But as TypeScript started to get more powerful, especially when they started adding -- I don't think at the time it was logical types in the type system, but a lot more type system ways to represent kind of the wacky JavaScript code. That's when it really solidified that "Okay, this is worth the barrier of entry, give or take." Never looked back.

**Jerod Santo:** So I first heard about it - it must have been 2015, because we had Anders... Help me with the last name, guys. Hejlsberg?

**Nick Nisi:** Hejlsberg.

**Jerod Santo:** Hejlsberg. It's one of those names that's got a J, and an L, and I lose all confidence. We first had Anders Hejlsberg and Jonathan Turner from Microsoft on the Changelog in April of 2015 to talk about TypeScript. So we knew it was a thing, we knew that it was a superset of JavaScript, we knew that Microsoft was very excited, and a few other people were also excited... And so we're like "Well, let's do what we do and do a Changelog episode", and I was very impressed by both those guys, and by the effort, and by a lot of the decision-making. Of course, the pedigree is there for like "Okay, this is a serious thing that seems like it's in very good hands with the people who are doing it." But I was writing CoffeeScript back then, so I already had a compiler compiling my stuff to JavaScript... And I actually had felt the pain of that over the long term, just having that transpile step, and the shifting sands underneath you, and all this kind of stuff... And so I never adopted it. I just thought it was cool, interesting... And it didn't really necessarily solve my particular pain points, which are not many, because I work in small teams, often just myself, on small codebases, often with JavaScript sprinkles; I'm just not writing so much JavaScript with people that I'm sharing it with that I just don't have a lot of the pain that a lot of other people are feeling... And so I just never had a reason to pick it up.

Then JS Party came around, and you came around, and you loved it so much that I just knew I had to take an antagonistic perspective on TypeScript. \[laughter\] And ever since then, I just can't try it, I can't like it. I can't, because I have an entire persona developed around hatred of this putrid language. So yeah, I couldn't use it if I wanted to, Nick, because my reputation precedes me at this point.

**Nick Nisi:** We'll all forgive you if you want to let go and try it.

**Jerod Santo:** \[laughs\] Yeah... That would be a cool storyline for JS Party, you know?

**Nick Nisi:** Yeah.

**Jerod Santo:** Like, "Jerod finally comes around, and now he likes TypeScript." I've written a little bit of TypeScript. I don't want to be completely ignorant of it... Although, why not, right? Because my level of disdain is like pure ignorance. I think, Josh, last time you were on the show you were trying to convince me that it was good, and I was like "No, dude, it's not gonna work. I'm not even listening to your arguments right now. They don't matter to me." Which is no way to improve as a human being, is it? \[laughter\]

**Josh Goldberg:** Yeah. What an interesting choice to make as an adult...

**Jerod Santo:** Right?

**Josh Goldberg:** Well, maybe you should be like a sleeper agent, like a double-crossed kind of thing, where you go learn TypeScript in order to be better informed in hating on it.

**Jerod Santo:** \[17:57\] Oh, that's true.

**Josh Goldberg:** Which, honestly, is how a lot of TypeScript enthusiasts started. They learned it in order to really understand how to criticize it, and then just realized how awesome it is in comparison.

**Jerod Santo:** That's a good way of converting people. Nick, thinking about your early hesitations - it reminds me of your early React hesitations.

**Nick Nisi:** Yes...

**Jerod Santo:** And now I'm starting to think, maybe another reason why our listeners might listen to JS Party is to just hear everything Nick Nisi thinks is bad when it comes out, and then just adopt that stuff and have a successful career... Because you seem to be against all the successful things when they first drop, and then years later you're like "Oh, this is great." But you don't like it right away. What's up with that?

**Nick Nisi:** Have you heard the good word of Tailwind? \[laughter\] I hated it when it came out.

**Jerod Santo:** Alright. Hook us all up. What do you hate right now? Like, what's the newest thing that just came out -- we know you like Lua, so we're not going to be interested in Lua. Don't adopt Lua, it's going down. What do you dislike right now? What's new?

**Nick Nisi:** Oh... I've always disliked non-modal text editing. Does that count?

**Jerod Santo:** That's long-term. No, it has to be a brand new technology that you're just like "Meh."

**Nick Nisi:** I don't know. That's tough. I'm a fan of React Server Components, and like this whole server-side renaissance within the React community... But it's not ready, in my opinion. It's not good now.

**Jerod Santo:** Okay. It's not good yet. Alright.

**Nick Nisi:** I want it to be.

**Jerod Santo:** Alright. It's not quite where we're looking for...

**Nick Nisi:** I know.

**Jerod Santo:** But if you come up with anything that's brand new, like it hits Hacker News number one and you're like "This is a terrible idea. It's never gonna work", let us know.

**Nick Nisi:** Will do.

**Jerod Santo:** And we'll do a show on it.

**Josh Goldberg:** Nick, I would love to see you try out Astro, and then use multiple --

**Nick Nisi:** I love Astro.

**Josh Goldberg:** Oh, dang. Nevermind. \[laughter\]

**Jerod Santo:** Now we're just throwing stuff at him, like "How do you feel about...?" I can't think of anything.

**Nick Nisi:** We actually had Fred on a few months ago now to talk about Astro 2, and after that I was like "Alright, I'm going to try it", because I was like "I really like the idea of being able to use React to make my blog", or whatever. And so I started down that path, and I'm like "Oh, cool, I'm gonna make a React component for this." And then I was like "Wait, it doesn't need to be a React component, it can just be an Astro component." And everything is an Astro component, and I don't have any React in there. So I went there because of React, and I'm there now because I think Astro is just awesome on its own.

**Jerod Santo:** Hm. Come for the React, stay for the Astro.

**Nick Nisi:** Yeah.

**Jerod Santo:** That's a good story.

**Nick Nisi:** I haven't played with the view transitions yet though. That's gonna be cool.

**Josh Goldberg:** Oh, it's so nice. I put -- it was like four lines of code, five at most, and now all my pages on my site just fade. I didn't customize it, I didn't do anything... It's just there's a fade now, instead of a sharp \[unintelligible 00:20:49.17\]

**Jerod Santo:** Nice.

**Josh Goldberg:** I know for a fact that in six months every website is going to look like this, and it's going to be like the bootstrap of 20-whatever. But for now, it's nice.

**Nick Nisi:** \[laughs\] So going back to the beginning, there's some things that I really hated about TypeScript that I wanted to air out, because it wasn't good in the beginning, I don't think. And I had valid reasons to not like it at the time. Mostly, it was just like the ergonomics of it. Going from using AMD, the Asynchronous Module Definition, and never needing a reload -- or sorry, needing a reload, but never needing like a compile step, or any kind of like even stopping to wait to concat files together, like with other popular module libraries at the time... It was just so nice being able to quickly make a change, hit refresh; make a change, hit refresh. And then TypeScript comes around and it's like "Ah, here's a compile step, and you have to wait for it to compile..." And I was using Vim back then too, and I didn't have any kind of tie-in... I don't even know if there was a language server back then.

**Jerod Santo:** Probably not.

**Nick Nisi:** \[21:56\] I think it predates the language server. Yeah. So I was just adding all these types, and like getting no feedback on it, except for at compile time, which wasn't great... And then when you compile, I specifically remember -- and I thought this was like a dream, so I had to go back and check. And I checked the first project that I worked on, and -- it's called Mayhem on GitHub; I can put a link in there. It's quite dead now... But I am listed -- like, over on the contributor site, I'm listed in there, but then I like cloned it and looked through the commits, and I have zero commits in there. So I have no idea why it even puts me, but...

**Jerod Santo:** Oh. You tricked them.

**Nick Nisi:** Yeah. I did work on it a little bit at some point, I think... But if you go look at the tsconfig in that project, there's no include or exclude. There's just a files array. And every file that you want TypeScript to transpile --

**Jerod Santo:** Oh, boy.

**Nick Nisi:** ...you have to manually list. And if you add a new file, you have to add it to that. And if you remove the file --

**Jerod Santo:** No wildcards, or no way of like doing folders... Yeah.

**Nick Nisi:** Nope. I think later on came like a files glob, and then later on came include, which was much easier. But then at the same time, when you did that compile - so let's say I had a file called model.ts. When I compile it, it would create a sibling file to that called model.js. And it was impossible to navigate the file tree in there, because you'd have like two files of everything, and I didn't have like the cool nerd icons at the time telling me this one was ts and this one was js. Usually, the extension was cut off, and I just picked the wrong one every time. It was terrible. Those are like little things, but it was not fun.

**Josh Goldberg:** I just looked it up, TypeScript 2.0. So 2.0, which was years later - it added strict null checks, fixing the billion-dollar mistake, it added optional -- a whole bunch of logic around optionals, and that added includes in your tsconfig.

**Nick Nisi:** Nice.

**Josh Goldberg:** That's wild.

**Nick Nisi:** Yeah. So 1.0, not super-great. But we stuck with it, and it was a good decision, for sure. So were there any things like that? You were at Microsoft at the time, Josh... Were there any pain points like that, that you remember early on?

**Josh Goldberg:** Yeah... That honestly was a big one. I think a big part of why that was so relevant for many people was that they weren't using Visual Studio; not VS Code, Visual Studio Core. And VS has projects which contain solutions, which generally explicitly list files... So there was this kind of difference between how a lot of Microsoft devs were writing JavaScript and then TypeScript, versus how a lot of the community was with things like Grunt and Gulp at the time. And that was honestly a pain point. I remember, because moving to TypeScript was when I decided that I would start using Gulp, because that was the future. Streams were the future of build tools, and Gulp was going to be the way we did it.

**Nick Nisi:** \[laughs\]

**Josh Goldberg:** Now, I think a lot of the complaints and blockers around me were mindset... JavaScript was still whacky at the time. We hadn't standardized or even come close to beginning to standardize imports and exports, for example... And I remember talking with multiple senior devs who just were not convinced that a typed superset, or anything that's supersetty or looks like JavaScript is the future. This one person who had decades of experience was convinced that we were just continuing to write C\#, and that ScriptSharp, which converted C\# to JavaScript would take over, and this ridiculous explicit imports and exports crap would go away, and we'd all be using what's now called namespaces in TypeScript. It's just so much FUD everywhere...

**Nick Nisi:** Yeah. I think that that piece though, like something that looks like JavaScript, is like part of the core keys to TypeScript's success.

**Jerod Santo:** I think so, too.

**Nick Nisi:** Yeah. Think about what was happening back then -- probably prior to this, probably 2009-2010 area... Google had a Chromium version called Dartium, that shipped with Dart and JavaScript as like languages in the browser. And they were trying for a long time to replace it with Dart. There was CoffeeScript, obviously, there was Elm, ClojureScript, PureScript, Reason... All of these languages.

**Jerod Santo:** \[26:13\] Oh, yeah, ReasonML.

**Nick Nisi:** Yeah. But they tried to extinguish JavaScript, rather than extend, and - what's the second part of that?

**Jerod Santo:** Embrace, extend, and then extinguish.

**Nick Nisi:** Yeah. There we go. We haven't gotten to the extinguish part yet with TypeScript, but maybe...

**Jerod Santo:** Right. They're just waiting for that hammer to drop...

**Nick Nisi:** \[laughs\] Yeah...

**Josh Goldberg:** Yeah. 20 years in! No I think that...

**Jerod Santo:** \[laughs\] Like "You know what? This entire thing was a worthless--" The other thing is for a long time people have been saying WebAssembly was going to make JavaScript no longer the lingua franca of the web, and make it to where you're writing C\# directly inside the browser, you're writing Rust, you're writing Go, you're writing -- whatever your language of choice is, right in the browser. And - I mean, they've been beating that drum for many, many years. And I think you see here or there a little bit of that, but I'm still waiting for a WASM to destroy JavaScript, and TypeScript by association. Of course, anytime someone says they use JavaScript, Nick Nisi, in his head, he actually has a regular expression that replaces it with TypeScript. Don't you, Nick?

**Nick Nisi:** Yeah. Do you as well, Josh?

**Josh Goldberg:** Yes, actually.

**Jerod Santo:** And then 99% of the time, you're right. I mean, pretty much, it's dominant now.

**Nick Nisi:** Yeah.

**Josh Goldberg:** It's like the E-Corp thing from Mr. Robot, for those who've seen that show. It's just, I don't even see the letter J anymore. \[laughter\] But actually, I think WebAssembly is a really interesting play for the future. It's a slow burn. They're taking their time with it. There are all sorts of parts of the WebAssembly spec, like local filesystem axes that have taken or are taking years to solidify, because they're trying to make that the futureproof standard. So unlike TypeScript, which kind of jumped onto the scene, was trying things out experimentally, WASM is going to be many, many years before it's ready to take over, or even start taking over. And even then, I think it's still up in the air of whether it will be able to. Whether they're going to, say, add in the ability to touch the DOM directly, which requires quite a few layers in the spec, like manual, or rather automatic memory management.

**Jerod Santo:** Right.

**Josh Goldberg:** So until then, we're were stuck without it, and a lot of people thinking that "We will soon take over", which is a little annoying.

**Jerod Santo:** And at that point, will there even be an impetus to write many other languages? I mean, there's always going to be other languages. But JavaScript - and TypeScript, by proxy - will be so ingrained in so many people who are coming into the industry, I say from today on, but even from go back a few years, where it's the first language learned, it's the sometimes only language learned... And it's like, at a certain point there's so many people with that as their core tool, their core language, that it's like "Hey, you can write this in Rust now", and it's like "Well, that's amazing for people who write Rust, which is not an insignificant number of people, but comparatively... Like, "Well, I like JavaScript, so I'm good here." I think there's still going to be so many people in that camp... Transliterate TypeScript and they're fine... Where it's like "Is it gonna kill it?" I don't think it's gonna kill it.

**Nick Nisi:** No. I think that it's such an approachable language, to compare to some of these other ones where you might have to do or think about these lower-level things. It's so ubiquitous, and it's easy to approach it, but also it's pretty darn powerful. Like, you can do a lot with it. And it's everywhere. And I think that -- it's Atwood's Law: "Everything can and will be written in JavaScript", or TypeScript, and there will always be a space for that.

Of course, there's going to be use cases where another language might make sense, especially one that can compile to WASM.

**Jerod Santo:** Oh, for sure.

**Nick Nisi:** And that's great. That's great that we have that option, or we'll have that option as it proliferates a little more... But yeah, I don't think it's going anywhere.

**Josh Goldberg:** \[29:59\] There's a lot of advantage to having a blessed path. A lot of people, especially bootcamps, they learn HTML, CSS, JavaScript, React, and then maybe TypeScript, in that order. And that means that a lot of community resources are much more fleshed out. It's a lot easier to find help, networking, social groups online. If we were to fragment into 12 different languages you can use to get started on the web, we might be able to innovate more by comparing them against each other, a battle royale competition of the languages, but it becomes a harder situation for newcomers.

**Nick Nisi:** Yeah. I think that we get a lot of that, or we have in the past at least gotten competition just within itself, through things like Babel, which allows anyone to write a plugin to immediately test out some new syntax. And that's like a really great way to prove out a use case for a proposal, to add it to the language proper, which is really nice.

So let's shift gears and talk kind of about the present in TypeScript; the present-day TypeScript, where we're at with it. And I'm just curious, what do you think is the most important or biggest improvement to the language since the earlier days? Josh, why don't you start?

**Josh Goldberg:** Gotta go with strict null checking.

**Nick Nisi:** Yeah?

**Josh Goldberg:** I've been floating the phrase in front of people for a little while now, the billion-dollar mistake typed languages traditionally allow you to pass null in a place that doesn't explicitly say it can be null... Which is why in so many interviews for years and years everyone was told to "Always check all your arguments to see if they're null, and throw an error if so..." Yeah, that's really exciting.

**Nick Nisi:** Yeah.

**Josh Goldberg:** I feel like that to me was awesome, not just because it's really useful, but because it's a feature that TypeScript added before a lot of other mainstream languages, such as Java and C\#. So that was TypeScript winning, instead of just catching up to everyone else.

**Jerod Santo:** I think that sounds like a sweet feature. I've never used it. And I'm not being sarcastic, that sounds like an actually really nice thing. I mean, a lot of my adult life has been dealing with null, and nil, and various forms of nothing... And it's difficult to write confident code when you're constantly having to check if the thing that you're dealing with is the thing that you want to be dealing with.

**Josh Goldberg:** You talk to people who have programmed in languages like, say, older C++, where null safety is very difficult, and they're like "Oh, my God, this is amazing." And then you talk to people who've never written not null-safe code, people in languages like Swift, for example, which I believe also has this concept, and they're like "What the heck?! How is that not the case to begin with?"

**Jerod Santo:** Right.

**Josh Goldberg:** So I think it's an instance of industry trends, of us learning how to make programming languages better, where one language in particular is what introduced that to people, but you actually start to see it quite a lot across the industry these days.

**Jerod Santo:** I think the best feature TypeScript has added was when they added Nick Nisi as the MC of TypeScript Conf. That was an excellent feature addition, when you began MC-ing TSConf. Isn't that right, Nick?

**Nick Nisi:** It was the start of the megachurch... \[laughter\]

**Jerod Santo:** That's when they really started getting a lot of people switching over, when Nick took over TSConf. And then they also -- they planted him on JS Party, and every time we had a show, he had to bring it up; just constantly bringing it up, until the point that people just adopted the thing. So those are the two best features I think they've added in the last 10 years...

**Josh Goldberg:** Can I put forward another one, though?

**Jerod Santo:** Oh, yeah. Go ahead, Josh.

**Josh Goldberg:** I just want to shout-out logical types, conditional types, now that you can do logic in the type system. Two reasons - one, it's hilarious. You can do all sorts of whacky stuff. Two, and more importantly, adding logical types and being able to have generic types that reference each other meant that TypeScript was able to represent really complex, and yet common JavaScript patterns, like in utility libraries such as Lodash, that would do weird things where you pass in a string and get a property based on that string, which is horrible and no one should ever do that... So I think once TypeScript got to the point where it could represent the weird pretty reliably, I think that's when it really tipped over and people felt more comfortable, or confident adopting it.

**Nick Nisi:** \[33:57\] For sure. That is so big. There are so many things that you can do, and some of the most mind-blowing examples that you can show people are these really complex types, that nobody ever has to really think about except for the person that wrote it, but they just make things so much easier. And I'm thinking like some of those ones that do string substitution type things... Like, we just added -- you know, we have this very sometimes deeply nested internationalization JSON file, that has all of our \[unintelligible 00:34:28.04\] keys in, and we made that typesafe by just like looking at the JSON and creating a path through that, so that every possible path through that is a string literal type that you can add to the function. It's just so much nicer.

**Jerod Santo:** Can you explain that more? Help me understand that.

**Nick Nisi:** Yeah. So if have a JSON object, and at the top you have like foo, the foo key, and then under there you have foo.name, and then .first. To get to that, you would have to type the string foo.name.first, or have that as your key to tell it how to go look through that. When you have one that's like ours, where it's like 3,000 lines long of all of these \[unintelligible 00:35:13.10\] keys, and you're way down on line 1400, and you're like "Okay, I see that this is called start date... But is that under some other thing?" You have to kind of look at the tabbing in to see how far deeply it's nested...

**Jerod Santo:** Yeah.

**Nick Nisi:** ...and then look up, and you kind of just have to go up and up until you find it, and then type that in. And then it either works... And it's usually like trial and error. Like, "Check it. Does it work? No."

**Jerod Santo:** Right. "Do I have the right key or not?"

**Nick Nisi:** Yeah. But we created a recursive type that just walks the path of that, and it just adds a dot separator in between every possible one, so then it gives you a giant string literal that is just foo.name.first. And that would be an approved string that you can pass to this function. So then you don't have to go look that up at all. The downside of it in our use case is it's thousands of lines long, which adds like a significant overhead to actually like parsing that type...

**Jerod Santo:** That's what I was thinking, is like when does that actual logic get applied? I'm assuming it's at compile time, right?

**Nick Nisi:** Well, it takes a while for the types even show up as your autocompleting in the editor...

**Jerod Santo:** Oh, I see. Because it can be updated. Right, right, right.

**Nick Nisi:** So kind of working around that... But for your smaller use cases, another use case that I just added was -- you know, I want it to be able to support some component things -- some different colors for components. And I wanted it to really support any color that we make available through our Tailwind config. So I made one that just walks our Tailwind config, our colors override, to set that up. So you have deep gray 900, deep gray 800, 700, all of those. And so you can add those all, and then we can create a type and pass in a prefix, too. So it can be like deep gray dash 900. Or it can be text dash deep gray dash 800, or whatever. And that's a much more finite set, so it's very fast to do it, and it works really well.

**Jerod Santo:** I'm trying to think of downsides of that, because it sounds like a crazy hack. But I'm trying to think -- besides the parse time of an infinitely growing unbound set of potential keys, are there downsides to that? Because it sounds pretty awesome.

**Nick Nisi:** No. \[laughter\] I mean, it adds that strict typing, right? The only downside is that it at some point --

**Jerod Santo:** There's no runtime implications.

**Nick Nisi:** No. Not at all.

**Josh Goldberg:** That exposes two theoretical pillars of TypeScript. One, no runtime implications, which except for very old, very rare features of TypeScript, that are debatable in the community, that's true. And then it also exposes that complex types come from complex logic. In both of those cases, I think, Nick, you're overcoming what could be perceived as a type deficiency in your setup. One is that you have this giant JSON file, and you're doing this very specific logic... Should you split that file up? Should you instead pass like an array of strings? Like, there are alternatives one could consider.

**Nick Nisi:** \[38:12\] Absolutely.

**Josh Goldberg:** And then, same thing with Tailwind. You want string parsing with an explicit allowed list of strings... If only Tailwind was typesafe, then you wouldn't have to do this. But it's not, so you do.

**Nick Nisi:** But the key is I set it up once, and I just check that in as a type, and I set that as like the -- you know, "This argument is going to be this type, for this function, or whatever, of this prop that I'm passing to a React component", and then everybody else benefits from it. So it's just a one and done set up.

**Jerod Santo:** Yeah, but if you go and make Tailwind typesafe, everybody else benefits from that as well. So you could do that work, Nick.

**Nick Nisi:** Can you make it typesafe?

**Jerod Santo:** I don't know... Can you? It's a challenge.

**Nick Nisi:** I have to think about that.

**Jerod Santo:** He's thinking about it... That long pause is Nick actually thinking about it. \[laughter\]

**Nick Nisi:** Yes.

**Jerod Santo:** Challenge maybe accepted?

**Nick Nisi:** I think that present day, the thing that benefits everyone, not just TypeScript devs, but JavaScript devs, and other languages as well, is the proliferation of the language server.

**Jerod Santo:** A hundred percent.

**Nick Nisi:** That is so nice.

**Break**: \[39:18\]

**Jerod Santo:** Did you see that Supabase even started a Postgres language server protocol? So you have like very specific completions of just Postgres syntax inside of an editor just because now there's a Postgres language server protocol. You don't think of it; it's the kind of thing you wouldn't think of. But of course, it does have its own flavor of SQL query language, right? And so that wouldn't exist if it wasn't for the underlying protocol that was invented alongside TypeScript, right? It's pretty cool.

**Josh Goldberg:** That's awesome. I did not know about that.

**Jerod Santo:** It's pretty new. I think it's alpha at this point, so... Your mileage may vary, but it's just like taking a thing and extending it where you wouldn't expect to extend it, and like "Oh, wow. That would be really, really nice."

**Nick Nisi:** Yeah.

**Jerod Santo:** And Neovim loves it...

**Nick Nisi:** Speaking of... I am learning though that -- I guess I didn't realize this at the time, but Typescript's language server, or whatever you want to call it, predates the actual LSP protocol... So there's features that they implement weirdly, or differently, which things have to work around. And I'm learning that through Neovim, specifically through Neovim plugins, like typescript.nvim, I think, and null-ls, which are both projects that have, as of last week, been archived, because the developer justifiably doesn't have the time to work on them anymore... And so they're out there on GitHub, someone can fork them, but he is --

**Jerod Santo:** \[42:24\] He's done.

**Nick Nisi:** ...archiving them to say he's done. And there's some significant changes coming to Neovim 0.10, that will probably break a lot of things that he's not ready or willing to fix.

**Jerod Santo:** Yeah... Did you see or hear Andy Walker on the Go Time podcast talking about Neovim?

**Nick Nisi:** I've just watched --

**Jerod Santo:** You just watched that clip that was posted the other day, or today maybe... He says that it's like having a Jeep, or having a hobby, where you end up spending so much time working on the thing, versus using it productively. I think he recently switched off of Neovim after a long time, just for that reason; there's so much -- I just thought of you when I heard that, because a lot of your time and effort, free time maybe even, or time that's not free, gets spent in now having to go find new little extensions, right? You've got to replace this -- was it IsNull? Or LsNull?

**Nick Nisi:** Null-ls.

**Jerod Santo:** Null-ls.

**Nick Nisi:** Yeah.

**Jerod Santo:** Well, that's just the wonderful world of open source, you know?

**Nick Nisi:** I did see that clip today, and it reminded me of a tweet that I saw yesterday; I refuse to call them anything but tweets, by the way... And -- I'll just read it. It's from Kaka Ruto, and I'll put a link in the show notes, but... "Well, VS Code is like a Toyota, Vim is like a Lambo. The difference is in the car and the driver of the car. Both can get you from point A to B, but the experience is vastly different. And I don't need to mention performance."

**Jerod Santo:** Well said.

**Nick Nisi:** "Let me light the editor wars again, find me."

**Josh Goldberg:** Wow...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** The thing about a Lambo is when you have a broken part, it's very expensive and time-consuming to find that replacement part on a Lamborghini.

**Nick Nisi:** Oh, fact.

**Jerod Santo:** \[laughs\]

**Josh Goldberg:** Nick, I thought you were a TypeScript dev, not a PHP dev...

**Nick Nisi:** As I'm learning, we're all slowly becoming PHP devs... Because every cool thing that's coming out in like Next and all these server languages, or server implementations, it's like "Oh, cool, Laravel's been doing that for years." So we're all just like slowly --

**Jerod Santo:** It's been kind of fun to watch all these frontenders discover server-side rendering, you know? It's like "Uh, hello guys... It's cute that you gave it its own name. It's kind of just the de facto way that people were making HTML pages for years..." But I think we get to a better place overall, because you kind of like loop back around with better foundations, and hopefully it's... I think it's all healthy, it's just the pace of innovation - there's this is like encyclical thing, where it doesn't go straight up, it goes like around in circles a little bit...

**Nick Nisi:** Yeah.

**Jerod Santo:** And that's difficult to overcome, because we don't have very much institutionalized knowledge, right? When you don't know the past, then you're doomed to commit the sins of the past... And that's a lot of what we do, is we come in and we have this very specific domain... We don't have the institutionalized knowledge passed down very well, and it's like now we're reinventing what people invented in the '70s, because there's no way for us to know that stuff was already worked on in the '70s, unless we have some sort of passing of the torch. Anyways, that's off topic, but something I think about a lot.

**Nick Nisi:** So one question I did want to ask about present-day TypeScript is how it fits in with learning. I'm obviously quite divorced from being a new developer at this point... And Josh, you wrote a book on learning TypeScript. I'm curious your thoughts on what it's like to have this -- you know, you want to get to this language, but do you go through JavaScript first, and then go there? Is it just de facto that you will end up at TypeScript today? It seems like a lot to take in when you're like "Oh, here's this language, but don't use that language. We're gonna use this language that compiles to that language... But it's mostly that language with some added things that you'll spend hours working on, that never actually get run, and..." You know, it's a lot.

**Josh Goldberg:** \[46:14\] Nick, I love this side of you, the TypeScript bashing side. \[laughter\]

**Jerod Santo:** My work here is done. I can just leave and let Nick do it. He's doing it better than I do.

**Nick Nisi:** That means you have to switch roles, Jerod.

**Jerod Santo:** I love it. I think it's the best thing since sliced bread. But Josh, you were gonna say something actually intelligent.

**Josh Goldberg:** Eh, debatable... \[laughter\] Yeah, I think we're in a transitory period, and the downside is, as you've described, it's this weird learning situation. A lot of people want to learn TypeScript and don't know JavaScript, and I've become more and more resolute that I don't think it's optimal to learn Typescript and JavaScript at the same time. And I've always been resolute that I don't think one should ever feel required to learn TypeScript in the general context of the industry. If you're applying for a specific job, or you're going for a specific team or role at work, and they need TypeScript, fine, that's the specific situation. But there are still companies that don't use TypeScript, and you can still be very good JS, or JS plus, whatever developer without knowing it.

**Nick Nisi:** Definitely.

**Josh Goldberg:** So yeah... There is a trend in the industry of "You need to learn x", where x is actually an array of 15 items, half of which are about to be archived... I don't like that. But I will say though that TypeScript is such a beautiful extension on top of JavaScript, just from a pure theoretical standpoint. The pedagogical line of "You learn all the runtime stuff in JavaScript, you get good enough to know why it's such a miserable experience at scale, and then TypeScript fits on top of that" - it's a very nice way to look at your JavaScript journey.

**Nick Nisi:** Yeah, definitely.

**Jerod Santo:** Sometimes you do have to feel the pain before you can actually appreciate the solvent to that pain.

**Josh Goldberg:** Yeah.

**Nick Nisi:** Yeah, that's something I think that is often overlooked in learning... Things are this way for a reason, and it might look obvious or seem silly from the outset, but when you did it the other way and realized why it's that way, it changes your perspective completely.

**Jerod Santo:** Yeah. Sometimes the best teachers let you go through that pain for a while, and then they reveal to you a better way. And you don't like them anymore, but you do learn. \[laughs\] Yeah, I've had that experience, and it's long-term beneficial, but short-term you're just like "Do you despise us? Why are you doing this to us?"

**Nick Nisi:** \[laughs\]

**Josh Goldberg:** One of the big misconceptions that I think causes people pain like that is what TypeScript folks call type-directed omit, which is not a thing that's generally done... It's changing your JavaScript code based on types in your TypeScript file. That's not a thing TypeScript does. For the most part, TypeScript file equals JavaScript file plus new type system features that don't happen at runtime. But folks who learn Typescript and JavaScript at the same time don't understand why they can't just solve their runtime problems by dynamically looking at the keys of an interface or other type-directed omit changes. And you need to walk through the process of why JavaScript runs the way it does, why it is that TypeScript is a development time only thing... And it's painful to get there, but the system evolved the way it is for a reason; a very good set of reasons.

**Nick Nisi:** Definitely. That's a really good example of that, too. When you're thinking about interfaces, or those type-only things -- I don't even realize it anymore, but that's just bifurcated in my mind; like, this is one namespace, and this is the other. And there's areas where they can't cross. I can't do something that would have runtime effects on something that is not going to exist in the runtime, and it's not always clear when that's going to be, or at least not without a lot of failing at that for a while. \[laughs\]

**Josh Goldberg:** I call it going upstream. That values can inform types, but types can't inform values. And whenever you're trying to go the opposite way, it's painful and annoying and you end up duplicating code.

**Nick Nisi:** Yeah.

**Josh Goldberg:** Which is why honestly a lot of more recent things in the community have done such a good job at this because they were designed with TypeScript in mind. Things like Zod are fantastic and great for typing, because the theology of them fits well with the TypeScript theology.

**Nick Nisi:** \[50:14\] Yeah. There was another thing I was gonna ask... Well, you mentioned a little while back about these lists of things they need to learn that are deprecated, and I was gonna ask you your thoughts on TSLint, since I've occasionally seen you commenting on an AI-generated list of like best practice things that constantly suggest TSLint as a solution... \[laughs\]

**Josh Goldberg:** I feel so bad -- I legitimately don't know who is the author of this Twitter bot. They're trying to do a nice service for the community, and they're using AI to help them generate tweets that point out useful things. And it's such a nice idea. And then this one thing is they keep recommending TSLint, which has been dead since 2019... It's so painful to me. I don't want to be mean online, but... Yeah. An example of one of the downsides of TypeScript, I think, is the complexity points of it. Now that it's been out for a decade plus, we understand the pros and cons. And one of the cons is that it's just -- it's added complexity for every part of your toolchain that has to do with syntax, especially the linter. Because back in the day we had TSLint, which was the TypeScript linter, and TSLint was killed because it was essentially a clone, but with different internals, of ESLint, which was much more widely accepted... But now the way that you have to use ESLint for TypeScript is kind of hacky and clutched together, because ESLint was never designed with this in mind. So it's this whole pain in the butt... I'm trying to maintain a PG13 at worst rating here.

**Nick Nisi:** \[laughs\]

**Josh Goldberg:** I will say, the ESLint team is working on this, we at \[unintelligible 00:51:49.10\] are working on making it simpler, but the large rewrite of ESLint that'll make it really beautiful is going to be many years in the future, I think. So... I don't know. Transitory pain. That's one of the downsides of being in a rapidly-evolving ecosystem like JavaScript, it's that things are shifting out from under you constantly, and they never really get settled until it's been a while.

**Nick Nisi:** Now, I want to transition to talking about the future of TypeScript a little bit. But to do that, I want to talk about a trend that's been going on pretty much since the beginning, but it seems to be maybe growing or changing as we go along. I'll say, like, to tie them all together, in the past one of the biggest hurdles that I didn't like at the beginning about TypeScript was the compile step. And then I realized that all of these cool features coming to ES2015 at the time, and later, were going to require a compile step. And then that made it okay, because I got all this cool new stuff, and I could use it, and then the compile step just became a part of the way I work. Also, one thing that I went from like pre-TypeScript constantly doing was using the Chrome debugger to step through things, because I was like "Am I actually passing an array here? Is it actually an array?" and I'd have to go check. That precipitously dropped off after starting TypeScript, because I didn't have to go check that stuff anymore, and it was just accurate, which is great. But now we're seeing more of a trend, or there's always been like a steady trend of "Let's not use TypeScript. Let's just use JavaScript with JSDoc, and go from there", and then generate types for the TypeScript lovers out there, or for the JavaScript lovers, because they benefit from it too in the language server. Do you think that that trend is going to continue or grow? And I'll remind you that there's a proposal for type annotations to come to JavaScript, which might change it -- it changes my opinion on it at least.

**Josh Goldberg:** What a juicy set of topics... I want to start my essay by being annoying and nitpicking your phrasing...

**Nick Nisi:** Okay. Please do.

**Josh Goldberg:** \[53:57\] It is accurate, but not precise to say that folks who switched to JavaScript with JSDoc over .ts or .tsx files are dropping TypeScript. They're just dropping TypeScript-native syntax. I know you know this, but for the world at large, TypeScript is multiple things. It's the idea of the syntax, it's the language spec, and then it's also a whole bunch of tools built on JavaScript and TypeScript syntaxes... And you can drop just the TypeScript syntax and still get the benefits, as you've described - for example type generation - of the rest of the tool chain, the actual programmatic parts. There was some confusion when SvelteKit formed. Was it Svelte? One of them, for example, dropped just the syntax, but they're still using the tool chain.

**Jerod Santo:** Yeah, Nick and I argued about that when it happened, because I brought it up as like "Hey, this is interesting", and he was like "No, it's not", and then we talked about it, and then finally he was like "Well, I'm actually--" Once we talked it out - because I knew that it was just the comments in the first place... And then once he realized that, he's like "Oh, they're still using TypeScript." I'm like "Yeah." You know what I'm saying, Nick?

**Nick Nisi:** Yeah. I knew that all along, but I don't -- I don't know why anybody would preferred JSDoc syntax over just inlining the types. I don't understand...

**Jerod Santo:** Because we love writing comments. Our favorite thing to do is comments, commenting our code.

**Nick Nisi:** That's where Copilot excels. Copilot writes amazing comments for my code.

**Jerod Santo:** Oh... Type-annotated comments?

**Nick Nisi:** No, I don't type-annotate them, because they rely on TypeScript to know the types.

**Jerod Santo:** Right, but what if he didn't?

**Nick Nisi:** Who doesn't do that? \[laughter\]

**Josh Goldberg:** No one will ever know.

**Jerod Santo:** SvelteKit, apparently... You know... \[laughter\] Anyways. So yes, that is a distinction... I think that's a valid distinction to make, Josh, or a valid nitpick...

**Josh Goldberg:** Yes...!

**Jerod Santo:** ...because I think you're right, in principle.

**Nick Nisi:** For sure. For sure. But I don't know, my reasoning around asking this is you're leaving that to theoretically avoid a build step, right? ...but still get all of the benefits just with this worse, in my opinion - and definitely just my opinion - syntax.

**Jerod Santo:** It's a trade-off.

**Josh Goldberg:** No, no, that's not just an opinion; it is worse. JSDoc syntax is actively worse than TypeScript-native syntax. I'm not saying that it's not worth it sometimes, but it is a worse experience that actually has fewer features.

**Nick Nisi:** Definitely, definitely. But let's look five years in the future - 5-10 years in the future; I don't know how long the type annotations proposal will go through, if it will go through... But assuming that we're positive and that it does, then you get the best of both worlds.

**Jerod Santo:** Well, do you like it, Nick? When it first came out, did you like it?

**Nick Nisi:** I like it, because you don't -- like, I'll get the TypeScript without a compile step. You could just have that --

**Jerod Santo:** When it first came out, what did you think?

**Nick Nisi:** My concern is - and I don't really know...

**Jerod Santo:** \[laughs\] See? Okay, it's going in. It's going in. Nick didn't like it when it first came out, so it's going in. I've found one. I've found a good example.

**Josh Goldberg:** Beautiful. \[laughter\] We finally did it.

**Jerod Santo:** Yeah. So we can assume it's gonna go in, it's gonna be a standard.

**Nick Nisi:** Yes, it's guaranteed now. But that's gonna take away from that. Now you could have everything in line and it would work great, and look great, and be readable to a TypeScript developer, but you are not necessarily having that build step. And so will projects like Svelte or SvelteKit, whoever switched over - would they then switch back and just start inlining things, because it's a cleaner syntax? I don't know. Being forward-thinking it seems like TypeScript is the better solution to stay with, because if you assume that it will be just an ignored part of the language, then you're set.

My concern with that proposal though is will it hamstring TypeScript's development by forcing them to live within whatever sections they carve off? And will they be able to innovate as fast or as much as they have?

**Josh Goldberg:** What an interesting question. My guess is it won't hamstring TypeScript other than in good ways. TypeScript has always tried, especially the last majority of those 10 years, to just innovate in the type system, not in syntax, except for type system syntax. And they honestly haven't added, to my knowledge, any new type system spaces. They've changed how existing spaces such as declaring and then inside an interface, or an object type, or assertions, like as, or the exclamation mark. They've messed around with those a lot. But there's really very little new stuff going on.

**Nick Nisi:** \[58:24\] Sure.

**Josh Goldberg:** I would assume that for TypeScript the major areas of innovation are going to be around tooling and integrations, not so much radical new type system concepts. I mean, it's been a decade; what else is there?

**Nick Nisi:** True. But I feel like -- and I don't know, I haven't looked at the proposal in a long time... If I remember correctly, the interface keyword's not part of that, or the type keyword. So theoretically, if you wanted to go for a zero build system usage of a TypeScript-like language with that, then you probably have to put those in a different file, like a d.ts file or something, and then be able to reference them, is my guess. I don't know.

**Josh Goldberg:** Yeah... I mean, it's just a proposal, and it's the first proposal. In theory, there's nothing stopping them from adding those later. But that's going to be even more years...

**Nick Nisi:** Right.

**Josh Goldberg:** Yeah. I think long-term it might simplify things, but short term it's definitely not going to completely overhaul how we're doing everything.

**Nick Nisi:** Yup.

**Jerod Santo:** I agree with Josh. I agree with Josh.

**Josh Goldberg:** Thanks.

**Jerod Santo:** \[laughs\] It's a good take.

**Josh Goldberg:** I have a potentially hot take... I think it's damaging that we haven't had any major competitors to TypeScript since Flow flaked out.

**Nick Nisi:** Hmm... Yeah, I'm surprised every day that I remember that React is actually written in Flow.

**Josh Goldberg:** Yeah... It's the only thing.

**Nick Nisi:** Yes. \[laughs\]

**Jerod Santo:** It's the only thing. Where would a competitor come from? Where would a competing project potentially arise?

**Nick Nisi:** JS Party open source?

**Jerod Santo:** JS Party Hackathon? \[laughter\] CoffeeScript 2.0?

**Josh Goldberg:** Yeah, just make another CoffeeScript.

**Jerod Santo:** Yeah.

**Josh Goldberg:** But one of the things that helps ecosystems is competition.

**Nick Nisi:** For sure.

**Josh Goldberg:** A tool feels leak compared to another one, so it makes up for it... And the TypeScript team has done a great job of continuously innovating and working... No shade here. But it's the same paradigm, the same model. And there have been little prototypes of like dependence, or more advanced type systems, or writing it in Rust, but we haven't seen them get adoption enough to incentivize the industry.

**Nick Nisi:** Yeah, that's what I was gonna say, are things like the idea to rewrite it in Rust, or some of the things that the Deno team are doing to try and accommodate that. But I also think that Deno and Bun are helping to add that much-needed competition to Node and to that ecosystem.

**Jerod Santo:** Yeah. What are the major pain points today with TypeScript, like where you could actually carve out a niche and be like "We're 10x better at this"? Because that's usually how that kind of improvement is usually what a) motivates somebody to actually do a competitor, because it's a lot of work, and then b) oftentimes is enough to get - not the mainstream, but the existing incumbent (that's the word I'm looking for) to get the incumbent to actually react, usually you have to have some sort of a 10x improvement in some sort of key pain point.

**Nick Nisi:** Yeah.

**Jerod Santo:** Not cost... What are the pain points? When you have a really large JSON blob and you try to --

**Nick Nisi:** Yeah, speed, I think.

**Jerod Santo:** Well, there's your Rust, perhaps, or like a lower-level systems language.

**Nick Nisi:** Right.

**Josh Goldberg:** Yeah. There's a particular team member of TypeScript who's just recently merged a change for the next TypeScript version that reduces its bundle size a lot by deduplicating files. Shout-out to Jake Bailey. But yeah, just thinking about structurally the things that someone wouldn't just see into TypeScript, in the existing structure, it's - yeah, native-level performance would be a big one. That unlocks, I think, two areas. One is just directly "It's fast now. Yay." Your JSON files are great.

**Jerod Santo:** Right.

**Josh Goldberg:** But then there are also more advanced type system concepts. I've referenced 10 seconds ago effects types, or dependent types, where the type system can understand that if let's say you call a particular function that changes a variable, that variable's type is narrowed or changed as a result of calling that function, which is not something TypeScript supports today, because that would be absurdly complex and difficult to do.

**Jerod Santo:** \[01:02:12.02\] Yeah.

**Josh Goldberg:** Just from a runtime perspective, that's a very complex operation, and JavaScript isn't really fast enough to do that type of thing.

**Jerod Santo:** Yeah. At a certain point you're getting into the esoteric, though... Whereas unless that kind of a shift or rethink allows some sort of massive tooling gain perhaps, which allows people to instantly be like "Well, it's like TypeScript, but look what it can do", I think that's probably a more difficult way to carve your way in, versus the performance move. But yeah, I would love to see come competition, always. So I agree with Josh's take... Not so hot.

**Nick Nisi:** There's a pattern here, I think...

**Jerod Santo:** Disagree with Nick, agree with Josh. \[laughter\] I'm a simple man... I have a simple algorithm.

**Nick Nisi:** So we're getting close on time, but I wanted to ask kind of as a closing thought, what would you like to see added or changed to either JavaScript or TypeScript going into the future? We might have already answered this a little bit, but I'm curious if you have any specific wants or needs. It can be something proposed as well.

**Josh Goldberg:** Remember the pipeline operator proposal?

**Nick Nisi:** I was gonna say this, yes...

**Josh Goldberg:** Yes...!

**Jerod Santo:** I love pipelines.

**Josh Goldberg:** Well, wait. Yeah, let me say it first, so that we get agreement instead of disagreement.

**Jerod Santo:** \[laughs\] I'm torn here. Nick likes it and Josh likes it. I don't know what to do. Actually, I love pipeline operators. I use them in other languages, and they're great. So I would love to see that work its way in. So that's a unanimous there. That's a JavaScript proposal, right?

**Nick Nisi:** Yeah.

**Josh Goldberg:** I want null and undefined to be merged into one word. I want a fork of JavaScript.

**Jerod Santo:** I agree with Josh. \[laughter\] That's actually a great idea.

**Nick Nisi:** That's it. A compiler to TypeScript that just merges those two together. There's our startup weekend...

**Jerod Santo:** Call it NullDefined, UndeNull. Now we've got to workshop the name; neither of those are hitting --

**Nick Nisi:** NunDefined.

**Jerod Santo:** NunDefined...

**Josh Goldberg:** NullNisi.

**Jerod Santo:** Ooh...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** NickNully... \[laughter\] Hm... That's a good note to end on.

**Nick Nisi:** Yeah. Cool. Well... \[laughter\]

**Jerod Santo:** Climactic.

**Josh Goldberg:** Great.

**Jerod Santo:** Poignant.

**Nick Nisi:** I guess I'll ask one more question... Jerod, do you have any current or future plans to use TypeScript?

**Jerod Santo:** Current or future... So what's the difference? I will note that I have used it. I used it with you, Nick. Remember we use it on a project right here at JS Party?

**Nick Nisi:** That's right.

**Jerod Santo:** Remember I was complaining about it? That was before it was good, though. I remember you saying "Well, this needs to be upgraded to 3.0" or something, when it really got good. So I have used it a little bit, even though my history with it is very minimal. I think Josh convinced me. I mean, I'm open to it. I would try it, in earnest, and report back. So is that a future plan? Yeah, I would call that a future plan. No current plans. I don't have an actual use case. But I wouldn't be open to trying it... Because of Josh. \[laughter\]

**Josh Goldberg:** I like how specific you are. Nick, it is not you. Don't feel good about this.

**Jerod Santo:** Well, Nick's been working on me for years, and I can give him the pleasure of having convinced me to change my mind. But Josh I can give that pleasure to, because that sounds like a more reasonable thing to do... So it's because of Josh's arguments...

**Josh Goldberg:** Two episodes with me and you're good to go.

**Jerod Santo:** Yeah, there you go.

**Josh Goldberg:** Multiple years of working with Nick - eh... \[laughter\]

**Jerod Santo:** He's the master.

**Nick Nisi:** Alright, well, I'll go ahead and end it there... And I'll end it with a call to action to our listeners. If there is a specific feature that you want Jerod to try out, tweet at him. Tweet at him that feature, tell him your favorite part of TypeScript or why he should do it... And yeah, we'll do that. That's less doxing, right?

**Jerod Santo:** That's right. Just tweet at me. I'm @JerodSanto on x.com. Futureproofing the episode by referring to it as x.com right now...

**Nick Nisi:** What's that...?

**Jerod Santo:** And I'm jerod@changelog.social if you're on the fediverse... From Blue Sky, I'm probably on there, but I haven't logged in yet... And I'm on Threads as @Nicknisi, so hit me up there. \[laughter\] Does that cover them all? Did I miss any networks? LinkedIn, you can get me there...

**Nick Nisi:** Yeah. MySpace...

**Josh Goldberg:** MySpace...

**Jerod Santo:** Send me a tweet on LinkedIn.

**Nick Nisi:** \[laughs\] Alright. And with that, thank you for joining us. Thank you, Josh, for joining us as well, and for being the voice that Jerod can actually hear. That's great. \[laughter\]

**Josh Goldberg:** My pleasure.

**Nick Nisi:** Awesome. Thank you so much, and we'll catch you next time.

**Outro**: \[01:07:01.25\]

**Nick Nisi:** Thanks, Josh. That was great.

**Josh Goldberg:** First of all, yes, thank you; this was a lot of fun. Thank you for having me. Second of all, Nick, I love how the more you get insulted, the happier both of you get... \[laughter\] As soon as we start crapping on Nick, it's smiles everywhere.

**Nick Nisi:** It's all I can do to hide the pain...

**Jerod Santo:** It's his comfort food, you know? It's the only thing he knows... \[laughter\] My favorite part of the show was when I asked you about type annotations proposal, what you thought about it initially, and you weren't really catching on. Josh and I were there already, but you were like actually trying to explain your thoughts, instead of like "No. How did you feel when it first was announced?" And then you finally realized it was a callback.

**Nick Nisi:** Yeah.

**Jerod Santo:** That was hilarious.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** So... Good show. Good show. Josh was the perfect guest for this show, so good choice, Nick. Josh, thanks for joining us. It was awesome.

**Josh Goldberg:** Thanks. Let's do it again in a decade. I'm serious, I would actually love to -- I'm not saying don't talk to me till then, but I think it would be cool to do like another decade thing.

**Nick Nisi:** I agree.

**Jerod Santo:** Set a reminder, Nick, for 2033.

**Nick Nisi:** I will.

**Jerod Santo:** We'll do it. By then, Josh will be like "WASM is just around the corner..." \[laughter\]

**Nick Nisi:** "Type annotations proposal's stage three now..."

**Josh Goldberg:** Yeah. \[laughs\] "You can use types in TypeScript now. It's hit stage three. It's great."

**Jerod Santo:** Awesome.
