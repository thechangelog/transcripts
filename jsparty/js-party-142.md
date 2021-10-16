**Jerod Santo:** Welcome back, everyone. This is Jerod. I'm your friend, and I'm joined by two of my friends. Nick Nisi is here... What's up, Nick?

**Nick Nisi:** Hoy-hoy!

**Jerod Santo:** And we have Divya here... What's up, Divya?

**Divya:** Hello, hello!

**Jerod Santo:** Well, today we have a very special show... We always say we have a special show, but this time we actually mean it, because we have a mystery guest, and we'll be hearing from that guest shortly. But first, we're gonna turn to the news... There's been a lot going on, especially in TypeScript world.

**Nick Nisi:** Whaaat...?!

**Jerod Santo:** So now I'll turn it over to Nick to talk for the next 30 minutes. \[laughter\] You're on it, Nick. TypeScript. What's up?

**Nick Nisi:** Not too much, actually... Just TypeScript 4.0 being released, which is pretty big news. But TypeScript doesn't really follow semantic versioning, so TypeScript 4 is just the version that comes after 3.9... So there's not crazy big features in it.

**Jerod Santo:** So it's not a big release, it just looks like another release. \[laughter\]

**Nick Nisi:** There are some cool things in there, and I'm excited to upgrade to it sometime soon... But some of the cool things that are in it - probably the biggest thing is variadic tuple types. This is pretty cool, because it lets you be more expressive with your TypeScript code without having to write too much TypeScript, which - one thing that I always hate with TypeScript is spending too much time writing TypeScript that I know never actually gets run by the frontend, or in JavaScript. It's just there to make me feel better about being type-complete. And variadic tuple types will help with that quite a bit.

**Jerod Santo:** What's a tuple, and how do you say it?

**Nick Nisi:** Good question. I don't know the answer to the second part of that... \[laughter\]

**Jerod Santo:** Pick your poison.

**Nick Nisi:** How do YOU say it?

**Jerod Santo:** I don't know, I'm asking you. I think I say it tuple \[topple\]. I've also said it tuple \[toople\], so I'm on the fence...

**Divya:** I've always said tuple \[topple\]

**Jerod Santo:** Is it tuple \[topple\]?

**Divya:** I don't think I've ever heard tuple \[toople\]...

**Nick Nisi:** I think I heard tuple \[toople\] first.

**Divya:** It's like tupperware. Tuple \[topple\]

**Jerod Santo:** Well, tupperware has two p's.

**Divya:** Hm...

**Jerod Santo:** \[00:04:00.17\] Hm... Argumentation. Anyway, it doesn't matter... It just matters on podcasts because we have to say it out loud, and most of us just type it and never have to think about it again. But forgetting how you say tuple, what is a tuple? Nick?

**Nick Nisi:** So the way that I think of tuples is that they're like a fixed-length array. You can use that as like a return type, and then you're technically returning two things, just wrapped in an array... Or more; two or more things. You know, it's two-ple...

**Jerod Santo:** See? Now you're making arguments for tuple \[toople\]... \[laughter\] Although that would be misleading, because you can have more than two elements in a tuple, right?

**Nick Nisi:** It's true, yeah.

**Jerod Santo:** That's why it's a tuple \[topple\].

**Nick Nisi:** You can return those, and then with destructuring, array destructuring, you can just act like you did actually just return two things. So the actual developer experience of working with them is much better.

**Jerod Santo:** Okay. So what's variadic mean? Or you already explained that and I was over here, trying to figure out how to say tuple...?

**Nick Nisi:** I did not explain that.

**Divya:** I've probably missed it, too...

**Nick Nisi:** No, not at all. I'm trying to remember what variadic means. I don't remember from a computer sciency background standpoint...

**Jerod Santo:** Right.

**Nick Nisi:** ...how to explain all this, so I'm very much in fear of explaining them incorrectly.

**Jerod Santo:** In mathematics and in computer programming, a variadic function is a function of indefinite arity.

**Divya:** Is variadic?

**Jerod Santo:** I just said that off the top of my head, I did not read it off Wikipedia...

**Divya:** My assumption with variadic is like "Is it varied? Like variables? Like varied variables?"

**Jerod Santo:** Yeah, it's about argument length. How many parameters a function takes. So if there's two arguments you can pass in, then the arity is two. What variadic means according to Wikipedia is indefinite arity, meaning it might take one, it might take two, it might take three... So that's the idea with varying - it's varying-length arguments.

**Nick Nisi:** Yeah. So with variadic tuple types, you can specify that without having to specify all of the possible combinations of that... Because as you said, it's indefinite, so you can't really do that.

I wanna say that I was listening to a Changelog podcast where they were talking about function overloading, and specifically only going out to eight arguments, because that's probably as far as out as you're gonna go... And then anything after that, the types are actually incorrect. But with this, the types will be correct indefinitely, because you can define and use the spread operator within your tuple type, and tell it that "This is going to be so many of this, and then so many of this", and concatenate them together to give you the full tuple type.

**Divya:** So then the idea would be you don't have to determine all the arguments that it takes. Because I think in TypeScript - isn't there a way in which you define a function, and then you sort of overload it as like "It does this, and then you can do this..." So with this particular feature then it means you don't have to do that anymore? ...it just allows you to write a function without having to overload it (I guess is the word) with all the possible combinations?

**Nick Nisi:** Yeah. One example that they give is you've always been able to use a rest parameter in there, to say "This type is going to be an array that has a number and then a string, and then however many strings after that, or booleans after that", or something. And the big difference here is that you can use those rest operators anywhere in there. So you can say that you're gonna have so many strings, and then so many numbers, and then follow it by like a boolean. That way you have a variadic length of how many arguments you can actually pass in there, or return from there, or whatever, to match that type, and it's not going to be limited by just overloading to hopefully take care of every possible use case that you would have in your app.

**Divya:** Right.

**Jerod Santo:** What else is new?

**Nick Nisi:** \[00:08:01.15\] Another cool thing with tuples is they can be labeled as well. So before, in TypeScript 3.9 and before, if you were going to say "This function is going to return you this tuple type", and it would be a string, followed by a string, followed by a string, and as you're looking at that in your autocomplete in your editor, you're just like "Well, what does that mean?" I'm getting three strings back, but now I have to go research what that actually means." Well, you can now label those types; you can say it's string:foo, and string:name, and string:lastname, and then your editor will help you determine what those are... So it'll just help with autocomplete and overall understanding of the data that you're working with.

**Jerod Santo:** So the label represents the kind of string or the kind of data that you are expecting that string to contain? Like, this is name? It's a string, but it's a name.

**Nick Nisi:** Right.

**Jerod Santo:** And it's really for tooling purposes.

**Nick Nisi:** I think I had that backwards. It's not string: whatever the name is, or the label; it's the label, colon string. Just like you would do with any other type in TypeScript.

**Divya:** Okay. So that's like a lot of other typed languages which allows you to do that. So you do like parameter and then type, and then parameter and then type, kind of thing...

**Nick Nisi:** Yup.

**Divya:** That's cool.

**Jerod Santo:** What else is new?

**Nick Nisi:** The third big thing in there is probably the short-circuit assignment. So we have that with several different logical operators, like plus and minus, where you can just say A plus-equals B and that will set the value of A to be whatever A was, plus B, and give that as the new value. So that's existed for like plus, minus, multiplication, division, exponents, things like that. Now it works with the And, Or, and... I'm forgetting the name of the two question marks. What is the two question marks?

**Jerod Santo:** Double pipe? Oh, two question marks...

**Divya:** Nullish coalescing.

**Nick Nisi:** Nullish coalescing, yeah. So it works with those.

**Jerod Santo:** Very nice, Divya.

**Divya:** I know all the facts. \[laughter\]

**Nick Nisi:** This just feels like an all-out war...

**Jerod Santo:** You coalesced that knowledge...

**Nick Nisi:** It feels like an all-out war on ternary operators. I don't like ternaries a lot, and people set crazy ESLint rules to say "Don't use ternaries" or "Don't use too many nested ternaries here." And what are you doing, a lot of times? ...you're checking to see if A exists, and if it does, then do something with it. Otherwise, here's B. And this is just a way to condense that down. So now I can sneak in more secret ternaries and get those in.

**Jerod Santo:** I'm for it. See, I'm anti-ternary, but I'm pro secret ternary, so... \[laughter\] What else is new?

**Divya:** Are you just gonna go down the feature lists? Tell us everything on there, so I don't have to read the doc... \[laughter\]

**Jerod Santo:** Nick reads the docs. It can be a whole segment.

**Divya:** Yes! It could be a whole segment, where you read the docs you... so you know you're not gonna read it...

**Nick Nisi:** That'd be pretty cool.

**Divya:** There has to be an audio version of docs, right?

**Jerod Santo:** There should be... I think we're just the team for the job.

**Divya:** Exactly. \[laughter\]

**Nick Nisi:** As you can see, there's not a ton of big things in TypeScript 4. There are a lot of other small things, like editor improvements, refactoring improvements that'll happen within VS Code, and presumably other editors... But one thing that I'm really excited about, for some reason, is this deprecated label that you can put in comments. So you can just, say, in a comment, put "@deprecated". And then in VS Code specifically - and probably other editors - when you try and use that method from then on, it will let yo use it, but it will have it squiggled out, so that you can visually see right in your editor you're using a deprecated method.

**Divya:** That's so cool!

**Nick Nisi:** \[00:11:45.22\] Yeah. That always seemed like one of the main things that I would want decorators for... In my very limited thinking about decorators, it's like "Oh, I wanna be able to decorate this method as being this way", but that always generated a runtime result, like a console log that said "Oh, you're using this method. Maybe you should use this method instead", whereas this is at edit time, in your editor. This is squiggled out because you shouldn't be using this anymore.

**Jerod Santo:** That begs the existential question, "Why would you write a method that you don't want anybody to use, Nick?"

**Nick Nisi:** Well, because you want to improve it with a better method, right?

**Jerod Santo:** \[laughs\] I prefer all my methods to be useful, but to each their own. \[laughter\]

**Nick Nisi:** You wanna give people a very safe upgrade path... So this can just gently warn them, "Oh, all of your code is squiggled out, and it'll be like that for maybe the next year, and then after that, then it's gonna break. But we warned you, and we put it in the editor..."

**Jerod Santo:** "We warned you... Put your to-do comment here and then ignore it until everything breaks later..."

**Divya:** I like that as an upgrade path. It's really smooth...

**Jerod Santo:** Yeah, that's cool.

**Divya:** ...because oftentimes you just don't know that it's gonna be deprecated unless you read the docs and then it tells you it will be deprecated... And within the code there's no way to tell, to make that connection. So this is really nice.

**Jerod Santo:** And as you've already stated, nobody reads the docs, so...

**Divya:** Yeah.

**Jerod Santo:** ...throw 'em a bone. What else is new? is that the end of our list?

**Nick Nisi:** I think so. Those are the main things. There are some things where it will automatically -- like I said with the editor, it can automatically put in the conditional... Man, I can't think of the term for these new things. What's the question mark dot (?.)?

**Jerod Santo:** Come on, Divya...

**Nick Nisi:** I swear, right? JavaScript, and TypeScript.

**Divya:** I don't actually know that one...

**Nick Nisi:** Conditional. It's just a conditional operator, right?

**Jerod Santo:** Incorrect. No, I don't know...

**Divya:** \[laughs\] You don't know the answer, too?

**Jerod Santo:** I'm pulling out my JS Danger soundboard, so when you guys figure it out, I will give you correct answers.

**Divya:** This is slowly turning into an episode... Yeah, I don't know.

**Jerod Santo:** Moving on...

**Divya:** Yes.

**Jerod Santo:** In TypeScript-related news there is a cool new project from the Airbnb team called ts-migrate, which as the name implies, is here to help you migrate your large codebase to TypeScript. They have been using this inside Airbnb to migrate a very large project with this tooling. Pretty cool stuff, right? Did you guys look at this?

**Nick Nisi:** I did. It looks really cool.

**Jerod Santo:** Insightful analysis from Nick. Divya, what do you have? \[laughter\]

**Divya:** Wait, so how does it work? What's the process in which it would work?

**Nick Nisi:** So in my limited deep-dive into it, it seems like it's a collection of code mods that will help you to migrate to TypeScript. They kind of have a diagram in the blog post that kind of shows -- you know, you start with your JavaScript code and you create a ts-config, so you configure TypeScript in the way that you would want it, with all of your hopefully strict set to true, and all of that. Then you can go through and rename all of your JS files to ts, or tsx, depending on what you're writing... And then you can run these code mods. And the code modes will do things like declare any missing class properties; anything that you didn't really have to do before in JavaScript because it didn't care, it will help you to infer that in your new code, and write that for you. So it'll output updated versions of that, of your code.

It's unclear to me if this is like you run these step-by-step, or all at once, or how that works... But that does seem like the -- they're utilizing code mods to do that, which is really cool. Code mods are so cool.

**Divya:** They are. I've not used them a lot, and I just wish I do more, because they're really useful.

**Nick Nisi:** Yeah. Have you written any?

**Divya:** I have not. But I think there was -- what made it more compelling for me was one of my friends, Simon, gave a talk at CascadiaJS last year, which was really good, where he talks about code mods, and just like the walkthrough of how to write them... Because oftentimes when you hear code mods, you're like "Oh, it seems complicated, and I don't even know where to start", and he does a walkthrough. It's really good. I think his talk is called "Refactoring JavaScript with JavaScript". It's not TypeScript, but it's the idea of explaining code mods, and he does it in a really excellent way, because it's sort of like walking you through the process of what a project is before a code mod, what the process is without using a code mod, and then writing the code mod, and then how it actually makes your process so much easier when you migrate code...

**Nick Nisi:** Nice.

**Divya:** I'll link that in the show notes. it's a really good talk.

**Nick Nisi:** \[00:16:12.09\] Yeah, they're really cool. Once you get your head around the AST, then it opens up so many possibilities for things that you can do... But that could be a tough thing to do.

**Divya:** Yeah, I think it's also understanding the AST itself, and oftentimes -- I understand ASTs, but every time I use the AST Explorer, which is the tool that people use, it's so confusing. I don't know how it works, and it's really frustrating. So if anyone has any tips on how to use that, that would be swell.

**Nick Nisi:** And then the AST that actually gets generated is dependent upon the tool that you're using to analyze it too, so...

**Divya:** Exactly, exactly.

**Nick Nisi:** ...TypeScript might be doing it one way, and Acorn, or Esprima - all of these different parsers might do it in different ways. And then figuring out how to actually traverse that code, and look through it and then make changes to it and then output it - it's all kind of crazy. But there's so many cool tools out there that will not only allow you to introspect your code like this, but it will then allow you to make changes and output the code... And there's so much to that part there that it's crazy... But you could just take the code and output it, and that might not be good enough, because you might have changed all of your tabs to spaces, or your single quotes to double quotes, or things like that... So you actually have to have a tool that is trying to match the style that it was originally, so that you're not making too many crazy changes. It's a fun problem.

**Divya:** Yeah. And then it makes you wonder, "Oh, should I just have done this by hand, faster?" \[laughs\]

**Jerod Santo:** Well, the Airbnb engineers did not wanna do it by hand. They have over six million lines...

**Divya:** Well, it's a large project...

**Jerod Santo:** Yeah. At this time they've done 86% of their six-million-line frontend monorepo... They've converted it using ts-migrate, and they're on track for 95% by the end of the year. So we are reaching out to this team; we'd like to do an interview with them and talk about all the nitty-gritty details, but that's it for now. We do have some real-time follow-up from Nathan in the chat. Hook it up, Nick... The question mark dot (?.) operator is optional chaining.

**Nick Nisi:** Yes.

**Jerod Santo:** So that's what that's called, so thank you, Nathan for getting that. You do get 500 points, congratulations.

**Break:** \[00:18:33.09\]

**Jerod Santo:** In other news, which should be more fun news and maybe not quite as useful news...

**Nick Nisi:** What...?!

**Jerod Santo:** ...but definitely JS news, is that the jf13kGames are underway. Once again, this is a JavaScript coding competition for HTML5 game developers. The cool thing about this competition - you're not just creating a game, but you're creating it with a file size of just 13 kilobytes. It started a few weeks back, August 13th, but it doesn't end yet until mid-September, so there's still time to get involved... And the cool thing about this is they have a theme this year which is 404. Does anybody know what 404 means? I tried to look it up, but I couldn't find the definition.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** I'm not really sure how you do a "404 Not Found"-themed video game... But Divya, you've been working on some video games, so do you have any ideas? What would be a good game you could make?

**Divya:** I think that -- this is top of mind, because I've seen a couple of games come out related to... For example, Microsoft Edge created that surf game recently; I don't know if you saw it.

**Jerod Santo:** I did not.

**Divya:** \[00:20:11.11\] It was inspired by the Dino game that's on Chrome, when you essentially are not connected to the internet - you can play that Dino game.

**Jerod Santo:** Oh, that dinosaur, yeah.

**Divya:** Yeah. And when you're on Edge, there's a game that's called like a surf game, which is essentially you're surfing, because it's surfing the web...

**Jerod Santo:** Ahh, I get it...

**Divya:** Yeah. But you're like a little surfer person, and you're just like surfing as you're offline... Which I thought was really cool. That makes me think of like -- it's sort of related, because it's not really 404, because you're completely offline... \[laughter\] But that's one of the really fun ways in which you are -- for instance, the thing that comes to mind is like, when you encounter a 404, instead of just having a 404, it's like "Here's a game you can play. We don't have a page, but play this game that's really fun..." Which I think is cool, because it kind of takes that -- it's surprising, it's unexpected; they expect (I guess) a negative feeling, because they didn't get what they wanted, but they got something else, in a way, which I think is kind of an interesting way of introducing a game... Because often in the gaming industry that's not how -- people seek it out; you don't just encounter a game.

**Nick Nisi:** Yeah, I kind of took it as something that you might put on a 404 page, in a similar way to the Chrome dinosaur when you're offline, or what GitHub does on their 404 page, which is the moving background with the octocat falling, or something...

**Jerod Santo:** It made me think of Where's Waldo, because like "What's games where you can't find something?" Where's Waldo.

**Divya:** Oh, I like that.

**Jerod Santo:** You know, you're trying to find him, and you can't find him anywhere. It might be hard to squeeze that in a 13k because it's so visual, but I'm sure you could find some sort of way of procedurally generating non-Waldo characters, and then maybe have one Waldo in...

**Divya:** Actually, you could figure it out. There's this Netflix show I've been watching called High Score, which is essentially about--

**Jerod Santo:** Yess!! Are you watching that, too?

**Nick Nisi:** It's so good!

**Jerod Santo:** Ahh, the nostalgia...

**Divya:** Did you see?! There was one of the games where he was like "I was creating this game..." I forget what the game was called. And he goes like "I needed combatants in it", and then he couldn't figure it out, because the memory of that cartridge was so small and he used up so much of it... And he's like "Oh, there was one way I could squeeze more memory out, by XORing the bits! \[laughter\]

**Jerod Santo:** Yeah... Those guys are so leet, you're like "Oh, my goodness..."

**Divya:** So I think anything is possible, really. I mean, if those guys were able to create very interactive and compelling games with way less space than we have now...

**Jerod Santo:** Right. Meanwhile, Slack is using 16 GB of RAM, and just enjoying every last bit of memory... No offense, Slack, but you had it coming...

**Divya:** Yeah. It's Electron.

**Jerod Santo:** It's Electron...

**Divya:** It takes up a lot of space.

**Jerod Santo:** So if you are into games and you wanna make a game, you can make a tiny little game, squeeze it into 13k. There's some pretty cool prizes. They have 20+ different licenses, plans, accounts etc, all those kind of things. You can win a Magic Leap One. Pretty cool stuff, so check it out. We'll link it up in the show notes. And if you don't wanna make a game, at least you can wait till September - I believe it's the 13th - and just go play all the awesome ones that other folks come up with. That's usually what I do. I spend about 20 minutes just working around and being amazed by what people create, and I create nothing myself.

**Nick Nisi:** It reminds me of this... And it's probably based on another thing called JS1k, which was not necessarily a gaming contest, but just "What's something cool you can do in 1k of JavaScript or less?"

**Jerod Santo:** Right.

**Nick Nisi:** That's really cool. I think one famous thing that came out of something similar to that was there was a -- I could be getting this wrong, but I could have swore that there was a Java 4K, because you can't do anything in Java in 1K. And Minecraft came out of that. Isn't that true?

**Jerod Santo:** Did it really?!

**Nick Nisi:** I think so.

**Divya:** \[00:24:02.08\] What?!

**Jerod Santo:** I hope that's canonical, because it's not worth spreading rumors... But that'd be awesome! It came out of Java 4k? And if not, we're just fake news over here. You guys can fact-check that in the chat room. Nick, you can look it up as I move on, and we'll get a real-time follow-up - did Minecraft come out of a Java 4k competition?

**Divya:** It said Minecraft 4k was an edition of Minecraft, developed for Java 4k.

**Jerod Santo:** Uuh... A slight shift in history. So there was a Minecraft version of--

**Divya:** It was a version, yeah.

**Jerod Santo:** ...inspired by Minecraft, but not the place that Minecraft was invented. Okay.

**Divya:** Correct.

**Jerod Santo:** So Divya, you get success, and Nick you get a wrong sound, because that was incorrect. In other news, we have a brand new - I don't know if it's brand new, but new to me - opinionated static site generator for Svelte. So if there's any Svelte fans in the audience, you can now check out Elder.js, which is exactly what I described - an opinionated static site generator and a web framework for Svelte, but it's built with SEO in mind. I'll link that up in the chat, and in the show notes as well.

It's just cool to see more projects rallying around and building out an ecosystem around the shiny, new framework in the world of Svelte. Has anybody checked out Elder, or have a plan to?

**Divya:** I don't use a lot of Svelte. I'm just curious about the naming... I guess anything is named oddly... Like, why is Eleventy called Eleventy? Who knows...?

**Jerod Santo:** Their mascot is an old man with his finger pointing to the sky... Kind of like "old man yells at cloud", but he's happier than that... So maybe it's just like "Old people know how to do SEO"? I don't know. I don't know why you would call it Elder.

**Divya:** I always assumed that all the names of frameworks are picked based on the mascot... At least I know that was the case for Pug. They picked Pug because they were like "We like pugs, and we wanted a pug mascot, so... Pug it is!" And it was called something else before that, and I cannot remember...

**Nick Nisi:** Jade.

**Divya:** Jade, that's right! Yeah, and they renamed it, I don't know why. I think they wanted a more compelling animal mascot, or something like that.

**Jerod Santo:** So things that Elder provides for you - build hooks and a highly-optimized build process, and it'll span all your CPU cores. So while Slack is using all your memory, Elder will use all your processors, and build it as fast as possible. It's built for large sites, and the SEO of sites of ten to a hundred thousand plus pages. It uses Svelte everywhere, including your SSR templates... And as well as partial hydration. So check it out. If Svelte is something you're interested in and you enjoy static sites/JAMstack things, maybe Elder will get you started.

**Divya:** This is like hybrid. This is static site generation with server-side rendering. So they prerender and then they hydrate from the server.

**Jerod Santo:** Yup. So I said JAMstacky, or JAMstackish, because it's not pure...

**Divya:** Yeah. Because I think JAMstack is more prerendered. I guess that it's like -- yeah, it's an evolving term, I guess, but...

**Jerod Santo:** It's a hybrid, yeah.

**Divya:** It's a hybrid.

**Jerod Santo:** Last bit of news, or I guess noteworthy things... Elijah Manor has a brand new cheatsheet out, which I thought was pretty cool. He creates these from time to time. This one helps you natively format JavaScript numbers, and it's a follow-up to his previous cheat, which was natively formatting JS dates and times. Now, every time JavaScript dates and times comes up, we mention MomentJS, and Date Functions, and all these different efforts... And those are nice to have. That being said, sometimes all you need is just to do it once, or a couple of times, and your own little function will do the trick. So it's nice to have a cheat sheet of "How do I just do this this one time, and move on with my life, versus pulling in a dependency that's either large - or even a small dependency is still a dependency."

So these cheat sheets are out there on his website, Elijahmanor.com. We'll provide them in the show notes for those who want to bookmark or print off. They're pretty well done.

**Nick Nisi:** \[00:28:04.25\] Yeah, it's really cool. It's a good helper for those built-in methods, to be able to do all of this... Because like so many built-in things in JavaScript, the APIs are so hard to follow along...

**Jerod Santo:** Totally.

**Nick Nisi:** ...but it's a good cheat sheet for that.

**Jerod Santo:** That's the best thing to learn an API, is get a cheat sheet, print it off, or have it as your background wallpaper, whatever it is. Keep it there visual, and refer to it. It saves you tons of time, and eventually you'll stop needing it, and you'll realize "Wow, I actually learned this API - not because I had to go look it up every time, but because I have it staring at me in the face." So these are great resources for anybody who is doing a lot of JavaScript.

Alright, there is your news. We'll be right back with a special mystery guest.

**Break:** \[00:28:53.03\]

**Horse JS:** [Hello JavaScript developers I just want to take a moment](https://twitter.com/horse_js/status/1210968330456174593)

**Jerod Santo:** Wow. Well, thanks so much for joining us. Horse JS, everybody. Horse JS is here... A little birdy actually told me that you're a big fan of JS Party.

**Horse JS:** [keep wondering about why JavaScript developed this culture](https://twitter.com/horse_js/status/1265859663469383686)

**Nick Nisi:** Hah! We ask ourselves that same thing every day... But I'm curious, what's your favorite episode so far?

**Horse JS:** [what if. what if we only call it "JavaScript"](https://twitter.com/horse_js/status/1280680602765836288)

**Jerod Santo:** Oh, you must be thinking about that episode, 101 -- do you guys remember the Yep/Nope debate on rebranding JavaScript? What if we renamed it...? I don't really remember -- what was the final conclusion of that? Did we decide to keep the name, or...? Do you remember, Divya?

**Divya:** I think so... Didn't we? Yep/Nope? Oh, wait... No, we kept the name. No, wait - did we?

**Jerod Santo:** I think we kept it.

**Divya:** I think we kept it, yeah.

**Jerod Santo:** It was inconclusive, so we just left it alone.

**Divya:** It was inconclusive, yeah. We couldn't come to a conclusion.

**Nick Nisi:** So we went with TypeScript then.

**Jerod Santo:** That was one thing we all unanimously decided not to do... \[laughter\]

**Divya:** I mean, I think that was the first thing we decided. It was the first point that came up, and we were like "No. Dismissed."

**Jerod Santo:** I'm glad to hear you liked that episode, Horse JS.

**Nick Nisi:** Horse JS, your voice keeps changing on us... What's going on?

**Horse JS:** [whatever Google decides is best](https://twitter.com/horse_js/status/1206788155258671107)

**Jerod Santo:** Okay...

**Nick Nisi:** Well, it's kind of hard to listen to, honestly...

**Horse JS:** [I have no time for JavaScript haters](https://twitter.com/horse_js/status/1195133103406231552)

**Divya:** Wow... We're not haters. We're really not. We talk a lot about JavaScript. Didn't you know this whole podcast is called JS Party?

**Jerod Santo:** Right.

**Divya:** But anyway... What are you doing? What have you been up to?

**Horse JS:** [this is a Rust stan account now.](https://twitter.com/horse_js/status/1245376044074401792)

**Jerod Santo:** A Rust stan account? I hadn't heard anything about Rust. What got you interested in Rust, Horse JS?

**Horse JS:** [Rust fan boys need to learn](https://twitter.com/horse_js/status/1265452374958772229)

**Nick Nisi:** What should they learn...?

**Horse JS:** [I had to learn Java in one day](https://twitter.com/horse_js/status/1230939070672625665)

**Divya:** Wow, that sucks. So did you learn anything from that?

**Horse JS:** [webpack is pretty great. Don't @ me.](https://twitter.com/horse_js/status/1228398099242115073) \[laughter\]

**Nick Nisi:** Everyone knows that. Tell us something though we don't know.

**Horse JS:** [I will clarify that I do not regret using redux](https://twitter.com/horse_js/status/1205287769091837954)

**Divya:** Oh, really? How about MobX? I heard that's pretty good.

**Horse JS:** [Redux, you’re asking for too much.](https://twitter.com/horse_js/status/1293949188095516673) \[laughter\]

**Nick Nisi:** I have to know... What's your reaction to all this TypeScript type?

**Horse JS:** [React. It's okay.](https://twitter.com/horse_js/status/1279264003768881152)

**Jerod Santo:** No, he said TypeScript, Horse JS.

**Horse JS:** \[00:32:08.23\] [React. It's okay.](https://twitter.com/horse_js/status/1279264003768881152)

**Jerod Santo:** I guess that's your Reac-tion to TypeScript?

**Horse JS:** [React. It's okay.](https://twitter.com/horse_js/status/1279264003768881152)

**Divya:** That's your view.

**Jerod Santo:** There you go. Well, I guess that's a few frontend things/takes. What about the server side? Do you have anything to say about server-side JS?

**Horse JS:** [Most exciting thing about Deno? Node](https://twitter.com/horse_js/status/1261066172650254336)

**Divya:** Oh, really?! Why? \[laughs\]

**Horse JS:** [NodeJS will be dead in 2 years and you shouldn’t learn node at all. 😬](https://twitter.com/horse_js/status/1261571317465329669)

**Divya:** Wow...

**Jerod Santo:** So, first you say it's the most exciting thing about Deno, then you say it's gonna be dead in two years... You're kind of contradicting yourself quite a bit here, Horse JS.

**Horse JS:** [I hate almost all code](https://twitter.com/horse_js/status/1262455449938472960)

**Nick Nisi:** Wow, you seem so negative. There's so much hate in your heart. Why?

**Horse JS:** [JavaScript, I just want you to know that I’ve cried](https://twitter.com/horse_js/status/1224472331566886919)

**Divya:** Oh, that's sad... But let's try to make this a little bit more uplifting. I think it took a negative turn. You must have something good to say about JavaScript, right? I mean, you are after all Horse JS.

**Horse JS:** [array.reduce is the best](https://twitter.com/horse_js/status/1213274114993119233) \[laughter\]

**Jerod Santo:** Okay, that's a start, I guess... You like Array reduce( ), very good. Anything else you can tell us that's good?

**Horse JS:** [Name a funnier person in the JS community. I'll wait.](https://twitter.com/horse_js/status/1186022908524683264)

**Nick Nisi:** There's a lot of funny people. Maybe not right on this show, but... \[laughter\] There's a lot of funny people. You're kind of full of yourself though, aren't you?

**Horse JS:** [Any JavaScript nerds wanna get rekt?](https://twitter.com/horse_js/status/1212155205489430530)

**Divya:** Wow... \[laughter\] Okay, Horse JS, I think you can air your grievances on TikTok. Maybe it's time for a new platform. Any final words before we let you go?

**Horse JS:** [Okay, let me toss out one last hand grenade before I go to bed: immutability is sometimes.](https://twitter.com/horse_js/status/1248492585393344512)

**Divya:** Cool.

**Jerod Santo:** Well, you heard it here first - Horse JS speaks, and they say "Immutability is sometimes." I guess thanks for joining us, and we'll talk to you again next time, Horse JS.

**Divya:** He didn't say bye. He just mic-dropped and left. It's so rude. Unacceptable. We're all friends here.

**Horse JS:** [Immutability is sometimes.](https://twitter.com/horse_js/status/1248492585393344512) \[laughter\]

**Divya:** That's not even a sentence. \[laughter\]

**Outro:** \[00:34:24.29\]

**Divya:** There was a project that I've found recently... It's a project called Metatyping, and he essentially wrote functions and algorithms in TypeScript. So he's just using various TypeScript hacks. Which is insane.

**Nick Nisi:** I was looking at that. That is amazing.

**Divya:** Yeah. I was like "Oh, that is a great way to learn TypeScript." I mean, I think this guy created that project as an endeavor to get better at TypeScript... So you're not actually writing JavaScript algorithms, you're essentially trying to use TypeScript to do things for you... Whether that be like merging an array, or flattening whatever... Yeah, it's really cool. And wild. It's just really complex if you go down. And it's organized in a way -- if you look at it, he does quicksort in TypeScript, and... Yeah. I thought that was cool.

**Nick Nisi:** I don't feel like this would help you learn TypeScript. I mean, it really would, but...

**Divya:** I think it really would. I honestly think it does. It's a bit intense, but...

**Nick Nisi:** Yes, yes.

**Horse JS:** [JavaScript, I just want you to know that I’ve cried](https://twitter.com/horse_js/status/1224472331566886919)
