**Jerod Santo:** There ain't no party like a JS Party, because the JS Party don't stop. Hey, y'all, it's Jerod, your internet friend, and I'm joined by a couple of my friends... It's Kball. What's up, Kball?

**Kevin Ball:** Hello, hello. How's it going?

**Jerod Santo:** It's going just fine. A lot better now, now that you're here. And Nick is also here. What's up, Nick?

**Nick Nisi:** Ahoy-hoy. It's going well.

**Jerod Santo:** Glad to hear it, and ahoy-hoy back to you, sir. So we have a fun show planned for you all today. We're gonna play an old game; pull it out, try it on for size, Explain It Like I'm 5. Now, if you recall, the last time we did some recurring segments, we had a good friend from Go Time, Mat Ryer on the show, and we ambushed him \[unintelligible 00:02:50.17\] asked him to come up with some new jingles on the spot... Well, unfortunately, Mat is not here, and we do not have an Explain It Like I'm 5 jingle. But I thought if I exploited Mat Ryer to get a jingle, who else could I exploit to get a jingle? And I realized I have kids, and I can use them to our great advantage. So I have a brand new jingle, ready for you right here.

**Jingle:** \[00:03:15.16\] to \[00:03:21.20\]

**Jerod Santo:** So, Explain It Like I'm 5. It's self-explanatory if you're older than five. We take complex technical subjects and we try to break it down, or metaphorize them, or do something to explain it to somebody who's younger than ourselves, maybe around five years old. So today we're gonna tackle three topics of varying degrees of difficulty. I think they're probably all pretty hard to explain. Web Assembly, React hooks, and Bitcoin.

So we randomly selected people to explain these -- no, we decided who is gonna explain these before the show, and it turns out Kball is going to Web Assembly for us. Kball, can you explain Web Assembly like we're five?

**Kevin Ball:** \[00:04:03.16\] Explain Web Assembly like we're five... Alright. So I was trying to think about different ways we could explain this, and I'm gonna try LEGOs. When you get a LEGO set, you've got these super-small, basic pieces, and then you have these instructions that kind of build up those basic pieces into larger chunks, and then you put the chunks together and you get a full, awesome Hogwarts castle, which was the biggest LEGO set we did recently.

So if you think about that the other way, if you start from the vision of what you wanna do, that's the most descriptive.

I wanna build a Hogwarts castle. We can think about that as a very descriptive programming language - JavaScript, or C++, or Rust, or something like that. Then we break it down into chunks, that are still potentially pretty descriptive. So in our Hogwarts castle that might be "Okay, we're gonna do the tower, or we're gonna do the secret chamber", or something like that. Those are our high-level language instructions; functions in JavaScript, or other things. But computers don't understand those high-level things. They need to get down all the way to the level of the LEGOs, and that is an assembly language. So this is true across all of our different software development; anything you do, web or not, you end up having to break it down into these very finite level instructions that are not very descriptive. And we have tools to do that; we have compilers that do that, we have runtime interpreters, things like that.

So that's one set of concepts, is we have these multiple layers of increasing complexity; we might call those layers of abstraction, but five-year-olds probably don't understand that... But we can call it LEGO blocks, chunks of LEGOs at the scale of a room, or like the whole set... And in order to get something to run, we need to map things down from those high-level concepts into the LEGO blocks and understand what they need to do.

Traditionally, on the web, the only way we've been able to do that is we get it down to the level of the intermediate blocks, JavaScript, and the browser does the translation into smaller LEGO blocks. And what Web Assembly is doing is saying "Okay, let's actually create a way to control things at the level of those smallest LEGO blocks. And what that lets us do is use other types of languages, other than JavaScript, to program for the web." So instead of just always having to build to JavaScript and trust that the browser is gonna translate that to LEGO blocks in a good way, we could build in another programming language. We could build in Rust, we could build in C++, we could build in something else, and use the compiler designed for this purpose to translate that down to these lowest-level LEGO blocks that are called Web Assembly. Does that feel like a five-year-old explanation?

**Jerod Santo:** \[laughs\] Maybe like you came up with it when you were five -- no. Nick, what do you think? Pretty good?

**Nick Nisi:** Dad, I just wanna play with my blocks...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Well, and you can. You can write raw Web Assembly. That's okay. Most people won't be doing that. So that's actually a really important thing to think about; if you're thinking "I'm gonna learn Web Assembly", you can do that and you can learn how to manipulate Assembly, but just like very few people who are coding for non-web environments are actually directly coding in Assembly, very few people who are coding for Web Assembly are going to be directly writing in Web Assembly. Most folks will be writing in some sort of higher-level language, and using a compiler to translate it down into Web Assembly.

**Jerod Santo:** So in this LEGO blocks metaphor, where does these other languages... Like, there's Rust bindings -- not bindings, but cross-compiled to Web Assembly, Go can compile to Web Assembly, I believe... Are these like LEGO instructions that are written in other people's languages, or...?

**Kevin Ball:** \[00:08:01.22\] Sure. Yeah, I think that's reasonable.

**Jerod Santo:** Dang it, I shouldn't have given you an out like that. That was such a good out.

**Kevin Ball:** Yeah, I think that's a good way to think about it. One interesting thing is probably the simplest to translate into Web Assembly and the languages that first created Web Assembly approaches are those without a runtime. So I don't know if we wanna get deep into runtimes or lack of runtimes or things like that, but JavaScript has a runtime, which means there's a set of libraries and function calls you can call... Web Assembly essentially has access to that same runtime, and it doesn't have extensively other pieces, like another language runtime, like you might have for example in Golang.

So if you're going to ship a Go program as Web Assembly, you need to not only ship the program, but you have to ship the whole runtime as Web Assembly, so that you can run it there. Whereas runtimeless environments like Rust or C++ - those were the first languages to be shippable to Web Assembly, because you could just compile them down. And I see Mat is commenting in the chat, so he might be telling me where I'm wrong about Go.

**Jerod Santo:** Ah... Pay no attention to him.

**Nick Nisi:** Does he know Go?

**Kevin Ball:** I don't know...

**Jerod Santo:** That joke's a no-go...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Tell me how LEGO MindStorms fit into the mix...

**Kevin Ball:** Tell me what a LEGO MindStorm is.

**Jerod Santo:** \[laughs\] I'm just trying to make it harder on you... Alright. Well played, well played. Now, sometimes the problem with LEGOs is they can be expensive. Is Web Assembly expensive?

**Kevin Ball:** No, Web Assembly ships for free with your browser today.

**Jerod Santo:** Alright...

**Kevin Ball:** You can do it. And all of the toolchain for pretty much every language that I'm aware of that compiles to Web Assembly is free. The first versions were built entirely open source, and I don't know if there are proprietary compiler tools that also compile to Web Assembly at this point, but you should be able to get started for free.

**Jerod Santo:** Awesome. Thanks, dad. Alright... Nick, you're a dad.

**Nick Nisi:** Yeah.

**Jerod Santo:** You're a React daddy. Can you explain React hooks to Kball? This was Kball's request, so... I totally understand them, but Kball needs help. Please explain them to Kball like he's five.

**Nick Nisi:** Alright. Well, I'm gonna take a shot at this... And just so you know the mindset of which I'm coming to this from, I do have an almost five-year-old, and I was trying to think of how I would explain this to her, and kind of what her favorite things are right now. And her favorite bedtime routine right now is coming up with stories about our day that are just completely silly, and maybe tying in TV or movie references that she knows, to make them even more silly. So that's what I did with this... I'm gonna try and explain React hooks to Kball, who I'm thinking of as my five-year-old

**Kevin Ball:** I kind of act like I'm five...

**Nick Nisi:** \[laughs\] Once upon a time there was a community of JavaScript developers that lived on an island. I'm tying in Moana right now, in case you need to know... \[laughter\]

**Jerod Santo:** Thank you for the reference...

**Kevin Ball:** Oh, good. I know that one.

**Nick Nisi:** Spoilers for Moana, by the way... This was a very special island, full of proud people, who braved the waters of the JavaScript language, and even forged their own destiny by creating an add-on to the language called JSX. Now, over the years they moved on from a functional, class-like way of JavaScript and started to develop an elegant way to survive, and built a way to develop applications using component-based classes... Because JavaScript got classes.

Now, the chief developer learned the class-based way of her people, and she was very excited about that, but she always wondered if there was something more to the language that might be able to come in and play a role later on in our story.

**Jerod Santo:** Is this usually where she sings a song?

**Nick Nisi:** It is, yeah. I can do that, but I'll get us demonetized again. \[laughter\]

**Kevin Ball:** I think if you sing it it's fine, right?

**Nick Nisi:** I guess... But you don't want that.

**Jerod Santo:** You might get us banned.

**Nick Nisi:** \[00:12:04.07\] Yeah. \[laughs\] So she thought of the class-based approach to what they were doing was just too verbose, and she constantly pushed for a new way of doing things, but she was shut down because classes are the way of her people, of her development team.

**Kevin Ball:** And did she know the way?

**Nick Nisi:** She did because of that; that was all she'd ever done.

**Jerod Santo:** This is the way.

**Nick Nisi:** \[unintelligible 00:12:22.21\] programmer on the island - think of her grandma Tala, from Moana - showed her a hidden cave that contained JavaScript classes' true heritage, and she realized that they were once function-based, and they could be again... So she told her lead developer of this revelation, but he simply carried on that state could not be managed in a function, and that her ideas were as whacky as trying to go beyond the reef of their island. Well, that's exactly what she did. She set off to find the great JavaScript demigod Monad, to restore the state of the function-- \[laughter\] ...restore the state of the function and bring efficiency to her dev team.

Now, upon discovering Monad, he told her of the ways in which functions could not work until they set off to find his missing hook; only then could he restore the state and restore functional components.

**Kevin Ball:** Wait, you've gotta work your welcome in here somehow...

**Nick Nisi:** Yeah... \[laughs\] I don't know how.

**Kevin Ball:** \[singing\] I see what's happening here... You're face to face with JavaScript, then it's strange... You don't even know how to feel... It's adorable! It's nice to see that programmers never change... Open your eyes, let's begin... Yes, it's really me. It's Monad. Breath it in... I know it's a lot, the code, the state... When you're staring at programming concepts... What can I say, except you're welcome. Um, let's see...

**Jerod Santo:** Thank you so much for that...

**Kevin Ball:** I've lost my -- alright, if I'd thought of this ahead of time, I could have ridden this out, but I was trying to do it real-time and I just failed.

**Jerod Santo:** I disagree one hundred percent. That was not a fail.

**Nick Nisi:** Yeah, that was amazing.

**Jerod Santo:** Go on, Nick.

**Nick Nisi:** So Monad told her that he needed to find his hook to be able to restore the state in functional components. That developer was curious though. "What is this hook you speak of?" she asked. And this is where I kind of trail into Coco, because that's another favorite of my daughter's right now.

So Monad says "Imagine that your ancestors are in the afterlife. If you want their memory or their state to live on, you need to put their picture up on the ofrenda, or in this case, call them as a function within your component." Now, when that happens - what happens to your state in that afterlife? Well, it lives in this magical world of memory; and it can live on in that memory for as long as you keep their picture on your ofrenda. As long as that's up there, it will be living and it can be accessed by your state component.

**Kevin Ball:** \[singing\] Remember me...

**Nick Nisi:** As soon as you neglect to call it, its state gets cast to the after-afterlife, called the garbage collector. Now, the order of which you put up those pictures really matters, or the order in which you call those functions really matters, because it helps the environment map the correct state to the correct hook call.

Monad also explained that hooks need to be called every time, and not just conditionally. Not just on Día de Muertos, but every day, every time... And they need to be called by the top-level functional component, and not just inside of some kind of callback.

Now, Monad continued to explain the basics of useState, useMemo, and useEffect to this developer. And then went on to explain that his hook was unlike any other. It was a custom hook. Now, with this custom hook, Monad could use the underlying functionality of the other hooks to construct the perfect hook to destroy the extremely verbose monster Teh Class, and restore the heart of the function (or the state of the function) to the development team.

**Jerod Santo:** Teh Class... Are you done?

**Nick Nisi:** \[00:16:11.05\] Almost...

**Jerod Santo:** Okay. \[laughs\] Because you stopped like you were waiting for an applause. I feel like we're not quite there yet. Please, continue.

**Nick Nisi:** \[laughs\] So Monad's custom hook could be used to recall the existing application's state, but it could also be used to have an effect on the world around it, because it could use effects. And he could also listen to the ocean, mouse clicks, page scrolls and other things, and he could establish a plan for when his component was cleaned up or removed, and he could talk to the all-knowing cloud by using fetch.

Now, as they faced Teh Class in an epic battle, the developer realized that she could make a custom hook, for hooks were just a way to hook into her environment - React in this case - and then combine that with the strength of other hooks, like Monad's hook. She could vanquish Teh Class to the murky syntactical depths.

Now, with this new power she returned to her people, and once and for all replaced their class-based components with functional components, supported by the power of hooks, that were within them all along. The end.

**Jerod Santo:** If I'm being honest, I haven't seen Coco, so you lost me there...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** ...but A for effort, and I have to say, you worked harder on that than I work on being productive in TypeScript, so... Congratulations.

**Nick Nisi:** Well, I'm so productive with TypeScript I had time for this...

**Jerod Santo:** You had time to write this story because your Vim and TypeScript tools just wrote themselves today, I suppose... Well, I surely can't follow that, so we'll have to break right here, so I have some time between me and that, to come up with my EILI5... So let's break. We'll be back in a bit.

**Break:** \[00:17:50.19\]

**Jerod Santo:** So, since Bitcoin is back in its bull run... It's just been a few years in a bear market and then came roaring back from something like $4,000 a year ago, to 60k per coin, and around there today... People are interested once again in this crazy world of cryptocurrencies, and so we thought it'd be fun to explain Bitcoin like you're five, because it is a difficult thing to explain, difficult to talk about, a lot of ins, a lot of outs, a lot of what-have-yous...

\[00:19:57.18\] The first way I would like to explain this is by stealing a tweet from Theophite on Twitter, which I thought that was a hilarious way to explain Bitcoin... Somebody tweeted out "I still don't get Bitcoin", and Theophite replied "Imagine if keeping your \[unintelligible 00:20:13.18\] for 24/7 produced solved Sudokus you could trade in for heroin." \[laughter\] That's pretty classic, right?

So of course, there's your bear explanation, and there are lots of downsides with Bitcoin specifically around energy use and whatnot... But there is also some real value to the network. And I'm not gonna explain how Bitcoin works like we're five, but I thought maybe I'd try to explain why some people think it's valuable like you're five... So here we go.

Imagine that you're playing Monopoly with some friends... And one person decides - maybe they're the homeowner. Usually house rules... They decide that they're gonna be both the banker and the rule enforcer. Pretty typical. Everything starts off okay, but then the banker starts doing some things that you don't appreciate as someone who plays the game. For example, they start injecting new money into the game, but not equally to everyone. Just to themselves and some of their friends.

They change the rules about how much money you get for passing Go, what you can go to jail for and for how long, they create over-the-top transfer fees and laws about who can trade with whom, etc.

Eventually, you and a few other people in the game decide that you want to transact without the banker's rules, permissions, fees and so on. But you can't use the Monopoly bucks, because the banker runs that whole system of things. So instead, you start a grouptext on your phones. And each time you wanna transfer money to and from each other, you put that in a text. Maybe you text "I'll send five Schrute Bucks to Kball." And then you text that out.

Everyone involved in this new way of sending money is in the grouptext, so that's how you keep each other honest. Bitcoin is the grouptext. The end. What do you think?

**Nick Nisi:** I like it.

**Jerod Santo:** "I like it." \[laughs\]

**Nick Nisi:** I'm going to package that recording up as a non-fungible token and sell it later...

**Jerod Santo:** Now you're talking... Kball? Thoughts?

**Kevin Ball:** Yeah, I feel like it's okay. I might add that everytime you send a text, it actually has to send everybody -- or something about the ledger getting longer and longer. So you send a text, and it actually has to send the whole history of texts every time, so that you don't accidentally lose track of where the money has been.

**Jerod Santo:** That's true. So when you join a grouptext -- sometimes if you add someone to a private Slack channel, for example, it may say "Hey, do you want them to just start right now, or do you wanna give them the entire history of this conversation?" And with Bitcoin that's not optional. Everybody has to have the entire history.

Now, there are thin clients and stuff, where they don't have to have that, and you can trust other people to keep the entire history, but - yeah, well said. You're sending lots of texts around the world, aren't you.

**Kevin Ball:** Yeah. You could also add an element about the texts getting so long they fill up your phone, so you have to buy fancier phones...

**Jerod Santo:** Yeah, the whole mining and mathematical computation thing is not in the analogy; that's why the analogy falls apart... But that's why I said it's more about why people would want to do this, and less about how it works. Conceptually, this side-conversation that is outside of this other system, which doesn't have the rules that you may not appreciate is why people see the value there.

**Kevin Ball:** Yeah. I dig it.

**Jerod Santo:** Oh, boy. Chat room love it too, so... Yay for me. Maybe it's because mine wasn't like a 30-minute epic of multiple movies entwined together in order to tell a story of evil and good, although--

**Nick Nisi:** Gotta keep those kids entertained.

**Jerod Santo:** \[00:24:03.26\] It could be... \[laughs\]

**Kevin Ball:** I also liked how you focused on the financial piece of it, and not the whole blockchain thing... Because I feel like a lot of people go all-out on blockchain being a solution for stuff, rather than being a really slow distributed database...

**Jerod Santo:** Right.

**Kevin Ball:** But the financial aspect is where cryptocurrencies actually do have some pretty interesting characteristics, and the ability to create these micro-currencies, or -- I guess Bitcoin is pretty macro at this point. That has some really interesting potential effects.

**Jerod Santo:** Yeah, exactly. And I think long-term... Like, where does it go long-ter - I think Bitcoin is the idea, and an instantiation of the idea that made it possible... But I think that these multi-use, build on top of platforms, streaming money systems, ultimately become probably the end game. Or maybe not the end game, but like the major game down the road. And a lot of those are solving a lot of the problems that Bitcoin has, such as the energy use etc.

Alright. Well, that's Explain It Like I'm 5... Thanks for playing. Next up, we're going to change our focus to project focus, which is where we take a particular piece of software, a project out there, usually in the open source world, and we give a summary of it, we check it out, maybe we dig in a little deeper today... We like to actually dig in a little bit into some source code. And the topic of today's project focus is called Vite. Kball, yo mentioned Vite a few episodes back...

**Kevin Ball:** I did.

**Jerod Santo:** ...as something that's been on your radar; you've been interested in this. We haven't done a show on Vite; we did a show on WMR, which is a similar tool to Vite... But we thought we would spend some time, the three of us, just taking a look, reading about it, picking it apart, maybe finding some interesting bits about how it does what it does. Do you wanna kick us off, Kball, with what Vite is for everybody, and we'll go from there?

**Kevin Ball:** Yeah, so Vite is a very fast, modern frontend dev build tool. It takes advantage of a lot of the progress that's been made in terms of native ES modules and various other things to reimagine a Webpack-style thing, to do frontend tooling that is super, super-fast, has a universal plugin interface, and is fully typed using TypeScript... Which I don't know if anyone has ever dug into the WebPack build model, and their tapping and plugins and whatever... It's really, really hard to understand, so I'm excited to see something like this, that has typing built into it and has this sort of deep thinking built into it from the start.

It caught my interest because I sort of follow the Vue community, and it was initially developed by Evan You for Vue; but then he pulled out the Vue-specific parts and created this very tight core and plugin interface, so that it could be used with any frontend framework. And I thought that was a really interesting model, especially for somebody who is so deeply into the Vue community.

I used to do that, and when I saw folks who were involved with the React core team tweeting excitedly about Vite, I said "Okay, there's something here. It's not just Vue. This is actually pushing the whole industry forward in some way."

**Nick Nisi:** That's honestly what kept it off my radar for so long... I saw it, but I'm not really tied into the Vue community, and I kind of thought of it as a Vue-specific project... Much in the way when we talked about WMR I thought that was more of a Preact-specific project.

**Jerod Santo:** Right. Yeah, it's kind of interesting, because you borrow from the strength of the brand, which is powerful. This borrows from Vue's brand. Same people, same expectations etc. And WMR borrows from the Preact people's brand... But then by doing that, you also kind of pigeonhole yourself, at least in people's perceptions... Which can ultimately limit your exposure. So it's kind of a catch-22. But I definitely thought this was just a Vue thing for a very long time... Until today, honestly.

**Kevin Ball:** \[00:28:19.11\] Yeah, I saw you put the tweet out talking about Vite, the Vue project, and I was like "Um, Jerod, we're gonna have to put you right."

**Jerod Santo:** Yup, I hadn't done my homework yet. \[laughs\] Put me right, Kball. Put me right. So one thing that's cool about the way this works - and we can go through some of the comparisons, because it is similar to a lot of other tools out there right now - SnowPack and WMR specifically... One of the things they do that make it conceptually different or interesting is they kind of bifurcate the idea of not just development and production, but the idea of dependencies and source code. Did you guys see that?

So one of the things they do is they solved the problem of slow server starts - this is like in Dev - and slow updates, and these problems... Like, as you get more and more code into your project, you've gotta wait seconds for your server to start up, you have to wait multiple seconds for your files to reload after hitting Save etc. Or in the browser even, to refresh between saves... So they're trying to solve that problem in Dev and make that way faster and way better... So they way they do that is that they split it up, just conceptually. They say, okay, everybody has dependencies, and every has source code. And what a lot of production bundlers do is their whole point is just "Well, we're gonna merge and shake and then minify, and then do all this transpilation and crap, and then we're gonna spit it out into one big thing."

The way they think about it though is they actually think about it in terms of your dependencies as one type of code, and then your source code as another type of code. So they take your dependencies and they use pre-bundling and they use esbuild, super-fast, and they treat it like it's a dependency. Well, how is a dependency different than source code? Well, it's not gonna change very often. You pull it in and you leave it, and you're gonna import it or whatever, but you're not gonna be changing it unless you upgrade a version, or something like that.

Whereas your source code - you're changing it constantly, there's certain aspects of the site you're working on, these are very high-churn... There are other aspects that you don't even need at all, because you're not working on those, so they can be shaken out, or whatever... And that allows them to make it way faster, the Dev server specifically, while you're working on it with Vite. I keep wanting to say Vite \[vyte\] even though I know it's Vite \[veet\]. Forgive me if I squeeze a Vite \[vyte\] in there.

**Kevin Ball:** Yeah. Looking at it a little bit, they go so strong as to say "Hey, we're actually gonna cache these things forever", essentially. And they key the cache with the version of the dependency. So if you upgrade your dependencies, it's gonna update that version, so that invalidates the cache and it works forward... But they are operating under the assumption here that default case your dependencies never change unless their versions have changed... Which makes a ton of sense for somebody working on a web app environment.

**Jerod Santo:** Yeah. And for those, they can use esbuild, which is the tool written in Go that's a thousand times faster than other bundlers. I don't know the exact numbers, but 10x to 100x, according to Vite's website. So I overstated by an order of magnitude... I take it back. 10x to 100x. Still pretty fast. And then the source code - they just use native ESM for that in dev... So a completely different way of handling it. So that was cool.

What else about Vite do y'all find interesting?

**Nick Nisi:** \[00:31:48.28\] Let me ask... Do you see Vite and WMR -- would you put it on the same level as things like esbuild, or is that at a different level in the stack? Or I guess another way to put it - do you see this as the modern descendence to things like WebPack and Parcel? More modern tooling written for modern ES module JavaScript?

**Kevin Ball:** I think it's introducing a layer. So you have WebPack, and you have WebPack Dev Server, and they kind of ship together... And I think they're reasonably entangled; or at least WebPack Dev Server just works with WebPack. This is built on top of esbuild and Rollup, and it is just that Dev server layer of utilizing the underlying bundling tools in a smarter (potentially) or at least taking more advantage of modern practices way... But it's handling the web server piece of it. How do we use these tools to package things together and do a Dev web environment that works really well, and that also then translates to production.

**Jerod Santo:** Right. So it's explicitly not a bundler. So in Dev it will take your dependencies and use esbuild to bundle those, and then it will leave your source code as native ESM, and just serve it natively in the browser. And then in production it uses Rollup to still produce a bundle, a single bundle. So some of that breaks down like "What's the difference between SnowPack and Vite?" and they're very similar. Some of the implementation is different, but basically how they go about building for production is different... But neither one of them are bundlers. So thinking about it as like "It uses bundlers, but it's not a bundler."

Now, WMR - there's a nice comparison page on this website, which we'll link up as well... Where they'll compare themselves to SnowPack, WMR and Web Dev Server. And the question around WMR is "Well, what's so different about those two?" And the answer is not all that much. I think Vite is trying to position itself as more general-purpose than WMR, which is like Preact + general-purpose, but has some Preacty things built right in... If you remember that show we did, Nick, where it'll generate a bunch of Preact stuff by default etc, like in the scaffolding... Whereas WMR I think is trying to head the way of more general-purpose. It sounds like Vite thinks that they're more general-purpose than WMR is, but that's according to their comparison page. Hard to say exactly.

The scopes are very similar. I'm not sure exactly if they work the same way... If you remember, Jason was talking about his Rollup plugin interface that they kind of standardized, and how WMR interacts with Rollup was they built the standard interface, and then Vite adopted that as well. So they're kind of playing off each other, learning from each other, doing things slightly different... And WMR is, I guess, fine-tuned for Preact, whereas Vite is not.

**Kevin Ball:** I just saw when looking at that site as they reference some of their inspirations for Vite, that the server is using Coa, which is kind of a fun alternative to Express, that is very async-focused, and it has some interesting programming models associated with it.

**Jerod Santo:** I wonder what gave them that decision; I'd be interested in what goes into that decision. So in addition to grokking the website and the readme, it would also be fun to kind of dig in a little bit further, hop into some of Vite's code at least conceptually... We're not gonna be over here reading aloud, dramatic readings of source code... It might be a good segment, but it's not this segment... \[laughs\] But poke around a little bit.

**Kevin Ball:** \[unintelligible 00:35:53.12\] Moana?

**Jerod Santo:** \[00:35:56.19\] Yes, exactly. We'll get all sorts of copyright problems if we continue hitting up Disney properties like this. Just poke around, see if we find anything interesting in the bits. Now, I guess a meta-question for you two, that I'll also throw in on a little bit, is when you come to a project and you're maybe beyond "I'm just gonna use this." You're kind of thinking "I wanna learn from this. I wanna read about it. I wanna read it. I wanna consume this and play with it maybe", and you land on the GitHub page, what do you do from there? How do you approach a new piece of source code in terms of grokking it, or trying to figure out how it all fits together?

**Nick Nisi:** The first thing I try and do is find the entrypoint into it. If it's a library or something, when I call this, what's the thing that I'm hitting first, and then how does it get routed to something else from there? It's typically what I'll look into.

For something like this it might be -- it's a little more difficult, because it's like trying to find how... I don't know. I guess that's a way of like establishing my footing, in some way.

**Jerod Santo:** Right. What about you, Kball?

**Kevin Ball:** I have some of the same... I'll often look for an entry point. Sometimes what I'll do is -- depending on "Is this code solving a problem that I'm already somewhat familiar with, or that touches on that?", sometimes I'll look for "Okay, this is touching this problem domain. Let me find where it's dealing with that." So I was looking at Vite a little bit, and I was that it was doing SSR, and I thought "Well, SSR is pretty framework-specific. I wonder what they're doing within Vite to deal with server-side rendering", given that that's something for example React does very different than Vue. So I just start digging around in that folder a little bit.

So that's the other approach - instead of looking for the entry point, how am I gonna call at this? Okay, I know it's dealing with this problem, and that problem is interesting to me for one reason or another. Let me go and find out how it's dealing with that.

**Nick Nisi:** And going to this -- I will say that one plugin that really helps navigate code on GitHub is one like Octotree, that gives you a file drawer right on GitHub, so you can easily look at the file tree without click, and then clicking, and then clicking... So it's much easier.

But immediately going to this, I see that it has a Packages directory, so that immediately makes me think "Oh, this is a monorepo." So exploring it from that sense of -- that's how I can figure out how to navigate it, is treating it as a monorepo. It's not using Lerna. That's the only monorepo configuration I'm familiar with.

**Jerod Santo:** Yeah. So places that I'll usually start - obviously, I'll start at the readme. That's the clear and obvious one, read the readme. Oftentimes in the readme there will be instructions on how to contribute. And usually that's where they'll give you entry points, or they'll give you places to start, or at least how to get it on your machine, etc.

This one has a nice contribution guide. So if you start in the readme, you find the contribution guide. That's normally going to tell you a whole bunch about getting started. In fact, theirs is pretty well written, better than most open source projects I come across. And they'll tell you how to get the repo set up, they'll tell you they're using yarn, they do tell you that this is a monorepo... So you drilled that, Nick. And they'll tell you where the packages live, where the test directories are... And then of course, PR guidelines and all that kind of stuff.

Now, it's different whether you're trying to actually just understand it, or if you're actually trying to hack on it; maybe you don't care about the PR guidelines. I don't, at this phase. I'm just trying to understand where things live. So start there...

And then also package.json. A lot of times you can figure out things about a project by its dependencies, and also its npm scripts, and stuff. If you go look at the scripts key in the package.json, you'll find a lot of the entry points. And this one is no different. At least you'll find out how to run the tests, what they're using, the subcommands they're using in order to run the tests... Tests are also a great place to start.

\[00:40:01.02\] So this is a monorepo. If you go inside packages, you can find out "Well, it has a plugin architecture. So there's a Vite directory, and then there's plugin Vue, plugin Vue JSX, plugin React Refresh, plugin Legacy. So now I know "Okay, there's some sort of plugin architecture that's being used, and these are the official first-party plugins. And this Vite directory is probably where the bulk of the logic is."

Then they also have the Playground, which -- is that... Maybe that's part of whatever monorepo system they're doing... Or is Playground a pretty typical directory path for monorepos or for projects? It's not something that I'm used to. Is that directory Playground pretty common?

**Nick Nisi:** Not that I've seen...

**Jerod Santo:** Yeah, me neither.

**Kevin Ball:** Yeah, I don't know...

**Jerod Santo:** Then you drill down in there and you see they have a bunch of .ts files. So then you close the browser tab and you move on...

**Nick Nisi:** What's that extension, what was that? \[laughter\]

**Jerod Santo:** Then you realize "This project is trash." Because the .ts is .trash. That's what it stands for; and you move on... No. So that's kind of how I get started. It's like, readme, tests, package.json, contributor guidelines. And if you can't get a good idea of at least where to start from there, it's probably not a repository worth spending time reading... Because reading is a great way to learn how to write software. Just like good writers read a lot, I think good software writers read a lot of code... And especially code from people that you think is a high quality of engineers, as the Vue and the Vite team are. I don't wanna give Vue too much credit, because it's the vitejs repo.

Anyways, as we dig in - you mentioned the SSR stuff... Kball, anything else pique your interest in the code itself?

**Kevin Ball:** I was looking around -- there's some interesting... Probably easier to understand than the SSR stuff, looking at how they do hot module reloading, or just kind of how their client is set up... Because they inject a client in with your app code - at least in development - to be able to do hot module reload. So that might be a fun place to start.

**Jerod Santo:** Cool, cool, cool. Anything else on Vite?

**Nick Nisi:** Now that I know that it's not Vue-specific, I see myself playing with it in the future. Not that I have anything against Vue, I just haven't gotten into Vue.

**Jerod Santo:** I was gonna say, that's a sick burn... \[laughter\]

**Nick Nisi:** I want to get into it, I just haven't found a reason yet.

**Break:** \[00:42:22.05\]

**Jerod Santo:** So we do have a bit of a playground, Nick and I (but mostly Nick), is our quiz show repo... So if you ever listen to JS Danger or watched it on YouTube, you know that there's a pretty cool JS Danger gameboard that I imagined and Nick coded up, and Cody Peterson designed much of it... And it was originally written in Dojo, right Nick?

**Nick Nisi:** Yup.

**Jerod Santo:** \[00:44:14.13\] And it's still written in Dojo today. So if you wanna see a Dojo application written by Nick, that he's very proud of - I'm not sure about that last part, but... It's out there, it works...

**Nick Nisi:** Of course!

**Jerod Santo:** Yeah, it's awesome. It's TypeScript...

**Kevin Ball:** Oooh...

**Jerod Santo:** You can check that one out.

**Kevin Ball:** Is there gonna be a Dojo plugin for Vite?

**Jerod Santo:** Instead, I think he's gonna switch into React... \[laughter\] Is that right, Nick? You're rewriting it.

**Nick Nisi:** I have been playing with rewriting it in React, yes. But it's still TypeScript, because Jerod loves that.

**Jerod Santo:** Yeah... Long story short is I've started writing some TypeScript and got very angry... But lashed out in our JS Party channel in the Changelog Slack. So if you want more of me making fun of TypeScript or complaining about it, then join that channel. And Nick coming to its defense like Monad's hook, the hero of the story... \[laughter\]

Anyways, tell us about this rewrite. You were gonna use some React, you've been trying some Tailwind... What's going on there?

**Nick Nisi:** Yeah, I've been playing with React... Instead of using Dojo's middleware, using React hooks, and specifically React context to hold the application state of the game. And another new feature... Right now, if you wanna create a new game, what Jerod has to do is create a game.json file, put it into the repo into a certain place, and then change a string somewhere, and it will read that game.json and populate the game that way. But one thing I'm looking at is just having that pull from GitHub Gist, so you can just give it a query param of a Gist ID and it will go get that game from there, and then populate it.

And I got the concept of that working in my completely broken React branch... But it's pretty cool, and I think it will be fun to play around with... And it's moving from Dojo's build system that is based off of WebPack, to right now I'm playing with SnowPack... But I would also like to take a look at Vite and/or WMR for this, to kind of see a comparison. It's a fun playground to experiment with that, because it's a relatively small project, but still complex enough that it's fun to work with, and has a lot of good use cases.

**Jerod Santo:** Yeah, it has. It has state, obviously; the scores are tracked, the point values, it's reading in some data... Of course, it's just JSON blob, but you could change the way that that worked so that you could write it in a web interface, which would be cool... But it has some keyboard shortcuts, it has some music, some audio/sound integrations, a fairly interesting UI, with some overlays... And it looks like the Jeopardy board game.

**Nick Nisi:** And most importantly, it has never crashed during the game.

**Jerod Santo:** That's right. It works every time.

**Kevin Ball:** I have a question, looking at this... Oh, TypeScript master, I notice as I look at this code for the first time in this quiz show there's a file called app.m.css.d.ts.

**Nick Nisi:** \[laughs\]

**Kevin Ball:** First of all, that is far too many extensions for any file...

**Jerod Santo:** Cool, let's team up on him, Kball...

**Nick Nisi:** Oh, no... \[laughter\] Yeah, it's actually fascinating.

**Kevin Ball:** Yeah, can you expand on that?

**Nick Nisi:** Sure.

**Kevin Ball:** What's going on there? Because it looks like -- app.m.css, but I'm not sure what that m is doing there already... But it looks like just pretty vanilla CSS. Why do we need it to be typed?

**Nick Nisi:** Yeah. So it is just vanilla CSS. The .m signifies it as modular CSS, so it'll be scoped to that component; in that case app, or there's like a contestant on m.css, I think... And that has classes that will only be scoped to that, meaning that at build time the class names will be rewritten to something random, that is specific to that, so you kind of lose the cascade part of CSS, and it'll only be scoped to that file; it won't bleed out styles anywhere else.

\[00:48:17.18\] The .m.css.d.ts file is very simple to talk about, but it's just -- that's actually generated by the build system... So it's not something that I wrote directly.

The build tool is going in and looking at that CSS, and it sees all of the class names, and then it creates basically an interface for all of those classnames. So it's saying that when I import this module, this app.m.css - when I import that in my TypeScript, it's going to give me this interface that looks like this, so that I can have IntelliSense on my classnames, and then those will just be replaced with the random strings that get generated at build time. But it's just a way to have typed modular CSS, and then those files are just checked in.

**Jerod Santo:** Mm-hm. What do you think about that, Kball?

**Kevin Ball:** Alright... \[laughter\]

**Nick Nisi:** I like it better than CSS-in-JS, to be honest...

**Jerod Santo:** That's what I tell him...

**Kevin Ball:** Here's the one thing that I dislike - checking in generated files.

**Nick Nisi:** Yeah, totally.

**Jerod Santo:** You have to check it in?

**Nick Nisi:** Um, no... You could probably git ignore them. Because they're not important at runtime, right? I don't see why you would need to.

**Jerod Santo:** I don't know.

**Nick Nisi:** I could be wrong, but I don't think so.

**Jerod Santo:** I also don't like checking in generated code, but that's just me. I know there's people that actually take their passwords, encrypt them, and check those into their repositories... And that's like common--

**Nick Nisi:** Why even encrypt them?

**Jerod Santo:** Why?

**Nick Nisi:** Yeah.

**Jerod Santo:** I mean, you could skip that step, I suppose. I'm sure people have. \[unintelligible 00:49:48.06\] where everything lives inside of Git, and as long as your encryption algorithm is not able to be brute-forced, then it's just as safe as anything else, I suppose... But over time all algorithms have fallen eventually, so you'll want to just rotate those keys on a regular basis.

**Nick Nisi:** Kball, I will tell you that in the React rewrite of this I've been trying to use Tailwind instead, and trying to write as little custom CSS as possible. Just rely on that.

So I have replaced these .m.css.d.ts with extremely long Tailwind strings right inside of my React component, that are just the classnames; all of the classes, listed out...

**Kevin Ball:** Yeah... I have not had the chance to really do much with Tailwind. I've been using StyledComponents recently... There is value to CSS-in-JS, but I'm not sure you get that much incremental value once you get beyond module scoping, honestly. I think the \[unintelligible 00:50:47.06\] I think LinkedIn published a project on this, and things like that... Being able to scope by component - super, super-valuable. Most of the rest of this stuff that is in CSS-in-JS - pretty annoying, to be honest...

**Nick Nisi:** For sure.

**Kevin Ball:** So there's a lot of -- I mean, I don't know. I'm dealing with it, it's fine... \[laughter\] But our tendency to push everything into JavaScript or TypeScript or whatever is... You know, there are situations in which it's extremely valuable, and for a very large number of projects, including this -- how many line project we have here? This 58-commit quiz show project - I suspect going all the way to CSS-in-JS is going to be overblown. So your Tailwind classes straight in there - that might actually be a better approach.

**Nick Nisi:** Yeah, except it doesn't look great, because it's just one long string. It doesn't get moved to multiple lines, or anything... I guess I could do that...

**Kevin Ball:** But that's kind of a Tailwind problem though, isn't it?

**Nick Nisi:** \[00:51:58.21\] Yeah, totally. One thing that I have been playing around with is -- well, at work I use Material-UI. That's a React library that's based on Material, and it has a whole bunch of components... And one in particular that I really like is called Box. And it's just like the most generic component, that has all of these properties that you can set on it. So you can set "my" for your padding \[unintelligible 00:52:21.29\] in both of those examples. You can just set all of these, and then it will pull those out and generate custom CSS and inject that into the page for that... So it's like, I go out of my way to just write what I want on these props, that are nice and neatly organized in the component itself, and then CSS is generated for them later.

**Jerod Santo:** Some real-time follow-up - I just ran Cloc on our repo. That's the command line tool Cloc, which counts lines of code... And there's about 682 lines of TypeScript and 300 lines of CSS, and 11 lines of HTML. That doesn't make sense... Or maybe it does. So under 1,000 lines of code project.

**Kevin Ball:** How many of those lines of TypeScript are types for your CSS?

**Jerod Santo:** Good question... \[laughter\] I do not have the Cloc skills to run the diffing and the right flags to figure that out, Kball... But after the show, Nick will count them by hand, I'm sure.

**Nick Nisi:** Oh, yes.

**Kevin Ball:** I mean, I'm just kind of poking holes here... Use the tools that work for you. All these are just tools; some of them work well in some situations, some of them work well in other situations. Small projects have different needs than large projects. Projects with many contributors have different needs than projects with one or two contributors... Do what works for you.

**Jerod Santo:** Yeah. I would love to see some more iterations of this project in different styles, in different toolkits... You know, Nick's gonna rewrite it in React, so \[unintelligible 00:53:53.17\] which is an older Dojo at this point, because a couple years ago you wrote this initially... Maybe 18 months ago.

**Nick Nisi:** About a year, yeah.

**Jerod Santo:** Okay, just a year. So maybe not that old Dojo... Just with other things. And like, "Oh, here's what it looks like like that, and here's what it looks like like this", and you compare and contrast. I know there's cool projects out there, like the Todo -- what's that one called, TodoMVC?

**Nick Nisi:** Mm-hm.

**Jerod Santo:** That is one. And there's one that's called RealWorld app or something, where it's more of a real-world app that people write, and it'll have an Ember implementation, a React implementation, and Angular etc. Those things, I've found, are pretty valuable.

**Nick Nisi:** Maybe we should turn this into a monorepo with several implementations.

**Jerod Santo:** There you go. Bust out your VS Code and get going on that, Nick.

**Nick Nisi:** What's that.

**Jerod Santo:** \#vimisdead. Alright, that is our show for this week. Thanks for hanging out with us, letting us explain things in ridiculous fashion, as if you were all five-year-olds... In ways that even five-year-olds couldn't understand... \[laughter\] Or poking around...

**Kevin Ball:** I don't know if I understood Nick's, and I'm a lot more than five. \[laughter\] But I loved it, don't get me wrong.

**Nick Nisi:** What can I say, except you're welcome...

**Jerod Santo:** Oh, gosh...

**Kevin Ball:** Param-ching!

**Jerod Santo:** With that, we just end the show, because there's nothing else to be said. He already said it, you're welcome. That's JS Party for this week. We'll talk to you next time.
