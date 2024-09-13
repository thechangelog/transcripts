**Jerod Santo:** Hello, world. It's your internet friends, here with another JSParty. Nick Nisi is in the house. What's up, Nick?

**Nick Nisi:** Ahoy-hoy.

**Jerod Santo:** Ahoy-hoy to you. How's life? How's everything?

**Nick Nisi:** It's a whirlwind of delight.

**Jerod Santo:** Oh. I thought you were going to go for ghoulish overkill again, like you did last episode. But a whirlwind of delight sounds better than ghoulish overkill... Chris Hiller is also here, b0neskull. How are you doing?

**Christopher Hiller:** Alright. I hope everybody's having a nice weekday, whatever weekday it is.

**Jerod Santo:** Well, whatever weekday it is where you're listening, we hope it's good. Where we are recording it's Friday, which tends to be, of all the weekdays, one of the best, doesn't it?

**Christopher Hiller:** Definitely top three.

**Jerod Santo:** Yes, for sure top five. I would hazard to say top three as well. Well, we have a fun docket today... We're going to talk some news, we're going to play a song, and we're going to discuss Node.js, because that's what we do around here, on the JavaScript and web dev party show that you're listening to. Starting right away with RSpec, the next generation.

You know Star Trek was a pretty good show, but TNG was a great show, especially if you skip season one and go straight to season two, where they really caught their stride and figured it out. Nick, response? You opened your mouth.

**Nick Nisi:** I was shocked that you said that, and then I just remember trying to start TNG, and season one, like the Q episode, whatever, the first one... I felt asleep like four times.

**Jerod Santo:** It's so bad.

**Christopher Hiller:** What podcast am I on right now? What are you guys -- why?

**Jerod Santo:** Star Trek, The Next Generation.

**Christopher Hiller:** What does that have to do with anything?

**Jerod Santo:** Because I just said we're talking about RSpec, the next generation JavaScript bundler. And I was making a pop culture reference to Star Trek, The Next Generation.

**Christopher Hiller:** Oh.

**Jerod Santo:** Have you seen that show, Chris?

**Christopher Hiller:** Yes.

**Jerod Santo:** Do you like TNG?

**Christopher Hiller:** Meh...

**Jerod Santo:** How do you feel about season one?

**Christopher Hiller:** I don't know.

**Jerod Santo:** The worst season, I would hazard...

**Christopher Hiller:** Last time I watched it was when it was on TV.

**Nick Nisi:** Oh, wow.

**Jerod Santo:** That's when I watched it too, and then I tried to go back, and I thought -- as I try to do a Seinfeld, start at season one, episode one, and it's like... Yeah, you can skip season one of Seinfeld also. You know, it takes a little while for these shows to really like find themselves and catch their stride, and I just feel like - as a public service announcement, I'm just telling folks, skip season one, start at season two. You're going to enjoy that.

The next generation RSpec, a JavaScript bundler written in... Can you guys guess which language this is going to be written in? It's a next generation...

**Christopher Hiller:** Ruby!

**Jerod Santo:** That would be last generation. \[laughter\] That would be the original Star Trek.

**Nick Nisi:** Oh, I thought it was RSpac. Sorry.

**Jerod Santo:** No RSpac, S-P-A-C... That's a good guess, though. It's not DSpace9, it's not Voyager... It's written in Rust. Come on, guys, you could have guessed that, right?

**Nick Nisi:** I didn't want to.

**Jerod Santo:** All next-generation JavaScript build tools are written in Rust, aren't they? \[laughs\]

**Christopher Hiller:** Yeah. I mean, you kind of have to.

**Jerod Santo:** It's pretty much what's happening.

**Nick Nisi:** Do you, though?

**Jerod Santo:** I mean, I think if you want GitHub stars, you absolutely have to.

**Christopher Hiller:** If you want to be next generation, you have to write it in Rust.

**Jerod Santo:** Yeah.

**Nick Nisi:** I guess. But aren't things just fast enough?

**Jerod Santo:** Apparently not, because the RSpec team didn't think so. They have written this bundler in Rust. It's compatible with the WebPack API and ecosystem, and it is 10 times faster than WebPack. Dun-dun-dunnn...! Neither of you guys care, do you? Chris is like "I haven't used WebPack in years."

**Christopher Hiller:** I know of WebPack...

**Jerod Santo:** Okay. And Nick's like "I just use TypeScript all the time."

**Nick Nisi:** No, I'm excited. And I don't want to --

**Jerod Santo:** "I'm excited." \[laughs\]

**Nick Nisi:** It's awesome. It's awesome that it's written in that. But if we start seeing WebPack configs pop up again, what is this all for?

**Jerod Santo:** I still have a WebPack config. I'm excited, because I still have a WebPack config.

**Nick Nisi:** You've got to move to Vite, baby.

**Jerod Santo:** Yeah, you're on the Vite train. I just didn't want to rewrite anything. I didn't want to touch my config, so I just continued to use WebPack... And it builds everything in about three seconds, perhaps. But I'm thinking like, 300 milliseconds... That would be 10x faster, wouldn't it?

**Nick Nisi:** What are you going to do with those 2.7 seconds?

**Jerod Santo:** \[laughs\] You know how many times -- it compounds, Nick. It compounds. I mean, before long, it's going to be an entire minute of savings.

**Christopher Hiller:** Well... It may not be that exciting to us, but there are a ton of people still using WebPack, which - I can't speak to how much of a drop-in replacement it is. I can't imagine it would -- maybe it just works, but you know... Certainly, if you can speed things up and you don't have to go in there and change a bunch of stuff... Well, yeah, it's great. Good news.

**Nick Nisi:** Yeah, that is a good point. I was totally not thinking of it from that point. I was totally thinking "Oh, here comes the return of 400-line config files."

**Jerod Santo:** \[06:16\] Oh, you think they've gone somewhere? No, they're still around.

**Nick Nisi:** Yeah. If you still have those around, then you just get these benefits for free. Yeah, that's great, actually.

**Jerod Santo:** So this is pitched as a tool for enterprises, and many have been using this. So this is built by the ByteDance team of TikTok fame, right? Isn't ByteDance TikTok?

**Christopher Hiller:** Yes.

**Jerod Santo:** Yes. And so it's used at TikTok. It's also used at places like Microsoft, Amazon, Intuit, Discord, and others. So lots of big WebPack configs probably floating around those organizations. And yeah, like you said, if you can just not have to rewrite anything and take your three-second compilation down to 300 milliseconds, why not? But even better, take your 13-second one down to 1.3 seconds. And if I'm doing my divisions by 10 accurately, that's a pretty good win for relatively free, right?

**Nick Nisi:** Yeah, definitely.

**Jerod Santo:** Alright. Well, congrats on the RSpec team for hitting their 1.0, and hopefully, if you didn't hear about it before, and you have a big, fat, slow WebPack config in your life, you can make it a big, fat, fast WebPack config with RSpec. \[laughter\]

Moving on to our favorite server-side runtime, Node.js. Have you heard of it? Yes, you have. How about TypeScript? Have you heard of it?

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** Node and TypeScript are like good friends now. They've tightened their relationship. We talked about it last time. Nick was all in a tizzy about it. He called an emergency pod over this, because Node added support for stripping the TypeScript types, which means you can write TypeScript, and it will ignore it and just run it like JavaScript. Which is a step without a build step. And as of Node version 22.7, which I think is probably the release right after 21, if incrementing things works the way it used to, there's another new flag. It's called experimental - not strip types; transform types. And what does this do? Well, nobody knows. No, just kidding. It's possible now to enable this transformation of TypeScript-only syntax into JavaScript code, which allows support for TypeScript features such as enum, or enum, if you will, and namespace. So I assume there's something about these, Nick, that they can't get stripped, or...

**Nick Nisi:** Yeah, those are two... Well, enum specifically is like the way that it writes it, it's creating this complex-looking object in TypeScript, to emulate that, so that you can still have the enum-like calling of that enum everywhere... Like direction.north, or whatever, and it'll be an object called direction that has a north property on it, that then has a string or whatever value for it. This will transform it. If it works like TypeScript, it'll just transform it into that object, which is great.

**Jerod Santo:** So the kind of thing you couldn't strip because it's useful code. Like, you're gonna be using that -- I'm trying to understand why you transform it instead of just strip it, because it's not a type.

**Christopher Hiller:** Enum is special in that it can't be stripped, because it actually just, it compiles down to --

**Jerod Santo:** A JavaScript object?

**Christopher Hiller:** A JavaScript object.

**Jerod Santo:** I see.

**Nick Nisi:** There's constenum, that is stripped.

**Jerod Santo:** What's constenum do?

**Nick Nisi:** If you had a value, it'll just replace it at compile time with whatever the value is.

**Jerod Santo:** I see.

**Christopher Hiller:** \[09:54\] Likewise, I think, namespace is another... I assume they just treat it like an object. An object create null type object, and you just throw properties in there. But that also would need to be compiled down. You cannot strip a namespace.

**Jerod Santo:** Fair. So if this was a two-phase adoption of TypeScript support, phase one would have been "Well, let's strip all the types we can just strip", and now phase two would be there's a few edge cases or things that you can't strip, because they have to be actually included in the compiled product, and so now let's go ahead and add support for transforming them into JavaScript at build time, or at Node - not build time, but Node run time. And now that's there. So no emergency pod for this one, but he's still smiling, he's still grinning... Because it further deepens TypeScript support in Node.

**Christopher Hiller:** However, this is an experimental flag, which means don't rely on it, because it may go away.

**Jerod Santo:** Oh. I thought it just meant it's going to be normal later.

**Christopher Hiller:** No, that is not what experimental means. A lot of things, most things that are experimental become stable, but some things go bye-bye. So you need to be careful if you want to rely on experimental flags.

**Nick Nisi:** I'm also kind of part of team don't ever use these features in TypeScript...

**Jerod Santo:** The enum and namespace, or...?

**Nick Nisi:** Yeah.

**Jerod Santo:** Okay, why is that?

**Nick Nisi:** I don't like that enums specifically are -- they're like opaque, right? If I want to use a string value, a string literal union is better than me having to also import this object to set the same string value, essentially. I'm just lazy.

**Jerod Santo:** So you're against enum as a feature in general, not as a TypeScript feature?

**Nick Nisi:** Yeah, as like a list of hard-coded strings, I would rather just have a...

**Jerod Santo:** A list of hard-coded strings.

**Nick Nisi:** Yeah. I don't think that you get any additional type benefit from that. Maybe you get some refactoring benefit, but it's not that much.

**Jerod Santo:** Okay. And Chris, you were in agreement with Nick's premise. Is it for the same reason?

**Christopher Hiller:** Yeah. I mean, I don't use them. If I want to refer to something by a variable name, I will make an object and call it const, and import that, and just use the foo.bar or whatever I want to use. Yeah, and then you can extract a type from that easily, like type of key of, and then there you go. You're all set.

**Jerod Santo:** Okay. And namespace - similar logic?

**Nick Nisi:** Namespace used to be module. Like, before modules were a thing in JavaScript, it was module, and then they renamed it to namespace, and I never used it once.

**Christopher Hiller:** They're basically not needed anymore. ESM and the whole module system essentially just supersedes it. But certainly there's probably some old TypeScript code that's using namespace.

**Nick Nisi:** I think TypeScript itself used it for a long time. I think they might've switched away from it...

**Christopher Hiller:** But as far as I understand that -- or maybe enum is regretted. Like, "We probably shouldn't have done that." But your namespace was kind of "Well, we need something, so we're going to have to do this", and it's just kind of a vestige at this point.

**Jerod Santo:** Gotcha.

**Break**: \[13:36\]

**Jerod Santo:** IEEE Spectrum, which I believe is a website and used to be a publication, it might even still be kind of a magazine from IEEE...

**Christopher Hiller:** A journal?

**Jerod Santo:** A journal, if you will, yes... Has published on the 22nd of August the top programming languages of 2024. And Python wins. So... Surprise, surprise. What does that have to do with JS Party? Well, Java - second place. We're halfway there. We're halfway to JavaScript. Third place, JavaScript, with 0.4451. That would be, I guess, 44% of respondents, I suppose. I haven't gone deep on this dataset. But then what's interesting is C++ comes in in fourth, which - fine. It's just been there forever. And then fifth... Are you ready for it? TypeScript. This is why I pulled this story in, because - hey, we're getting screwed, people. We should be higher up the list. I mean, TypeScript and JavaScript - it's all the same thing, isn't it, Nick?

**Nick Nisi:** I was going to say, if you just add those two together, then it's like 0.6 something.

**Jerod Santo:** That's what I'm saying. We could be number -- well, I guess, not number one... We could be number two. We could beat Java. Which - honestly, we're beating Java. Aren't we beating Java?

**Nick Nisi:** Are we on three billion devices? Probably...

**Jerod Santo:** I would think so.

**Nick Nisi:** Anywhere that Java's running, there's a web browser, right?

**Jerod Santo:** That's a large assumption that I can't exactly process. I'm like "Is that right? I don't know." There's a lot of caveats in there, perhaps.

**Christopher Hiller:** So clicking through this horrible website, I've found the methodology, and it looks kind of skewed towards Academia, just for what it's worth.

**Jerod Santo:** Well, it is IEEE Spectrum, so that would make some sense, because their audience is more formalized, and academic. Some major proportion of the very few sources that they use are in Academia.

**Jerod Santo:** Rounding out the top 10, you have SQL...

**Nick Nisi:** Not a language.

**Jerod Santo:** \[laughs\] It's a language. The L stands for language. But is it a programming language? Is SQL Turing-complete? It probably is. Is it a programming language? It's kind of not. It's a declarative query language, but whatever. Followed by C\#, Go, good old-fashioned C, and then - hey, HTML, baby. It's official! HTML is a programming language. Even the academics will confess it.

**Nick Nisi:** I won't argue with that. I will with SQL. \[laughter\] My wife has to do SQL for her job, and I'm always like "Oh, you should learn more programming", and she's like "No, I hate it, because I hate SQL." I'm like "Don't base it on SQL..."

**Jerod Santo:** Right... Have you introduced her to LLaMA 3.1?

**Nick Nisi:** No...

**Jerod Santo:** Because I don't really write SQL anymore. I write plain English SQL that gets turned into actual SQL. And that's been pretty nice. That's been a life improvement for me. I mean, that's what LLMs have done in my life... You now copy-paste SQL, you know? You don't actually author it directly, which has been an improvement. Because I use it all the time, but just, is it an inner join? Is it a left outer join? How do I -- you know? Like, gosh, who has time for that? Not me. But I do have time to say "Here's what I'm looking at", and then I get a query that's close enough, and then you can tweak it from there. So maybe she would benefit from that.

**Christopher Hiller:** \[20:25\] Hey, Jerod, are you an Elixir guy?

**Jerod Santo:** Yes.

**Christopher Hiller:** It's 35th.

**Jerod Santo:** Ouch. Well, you know, that's Academia. They don't know what they're doing. Just kidding.

**Nick Nisi:** It's beaten out by Assembly.

**Jerod Santo:** More people are writing raw Assembly than they're writing Elixir? Ah, that's kind of embarrassing. \[laughter\]

**Christopher Hiller:** I'm sorry...

**Jerod Santo:** Oh, gosh... Yeah, well, it's not the most popular language, but it doesn't make it bad.

**Christopher Hiller:** What's ABAP?

**Jerod Santo:** Sounds like an acronym.

**Christopher Hiller:** Does anybody know what that is?

**Jerod Santo:** A-B-A-P?

**Christopher Hiller:** ABAP.

**Jerod Santo:** I've never heard of that in my life. And I've heard almost every tech acronym there is.

**Nick Nisi:** Advanced Business Application Programming, according to Claude.

**Christopher Hiller:** Ah... Okay, this looks like an SAP thing.

**Jerod Santo:** Oh... Yeah, I think this survey is invalid. I think you've proven it. \[laughs\]

**Christopher Hiller:** I mean, if people do this for a living, then I think it counts...

**Jerod Santo:** I mean, it helps put food on the table.

**Nick Nisi:** You know, I had my first encounter with Django a few months ago...

**Jerod Santo:** Oh, really?

**Nick Nisi:** Which was my first encounter with Python, for the most part... Aside from simple Arduino stuff. And I was like trying to get it running, and upgrade things, and I'm like "How the heck are dependencies managed in this?" Do you know where they put dependencies in Python?

**Jerod Santo:** Requirements.txt?

**Christopher Hiller:** Requirements.txt.

**Jerod Santo:** Yes.

**Nick Nisi:** I felt -- like, I was blown away.

**Jerod Santo:** \[laughs\] You were so disappointed?

**Nick Nisi:** I'm like "A text file...?!" Yeah.

**Jerod Santo:** Don't you like text files, Nick?

**Nick Nisi:** I mean...

**Jerod Santo:** You know JSON files are just text files with a different file extension.

**Nick Nisi:** I know, but my editor knows how to syntax highlight a JSON file.

**Jerod Santo:** \[laughs\] I bet it knows how to do a requirements.txt, too.

**Nick Nisi:** Not mine.

**Jerod Santo:** Okay. Well, you've got to install a Python extension, or something; the syntax. Yeah, I always thought that was -- what's the word? I don't know, rudimentary? It's probably from the late '90s.

**Christopher Hiller:** Yeah. That's been around forever, yeah.

**Jerod Santo:** Yeah. That's how Chris and I both knew it.

**Christopher Hiller:** And every year somebody comes up with a new way to do package management in Python.

**Jerod Santo:** Yes. I've had lots of conversations about package management in Python. And I've been told by Brett Cannon, who's our closest friend who does Python - he used to be on the steering council, or whatever - that pipx is the way to go. So after he told me that, I just quit wondering what to do. And I use pipx all the time, not because it's best, but because Brett Cannon told me it's the way to go. So that was just good for me.

**Christopher Hiller:** Wait, what's pipx?

**Jerod Santo:** He didn't tell me that part... \[laughs\] Pipx is a package installer like pip, which is the Python package installer that you probably know of... Only it installs everything locally, and so it's all siloed and stuff, and not like system wide... And so it's a nice way of just -- because a lot of times when you're installing Python stuff, you're not really writing Python. I mean, I'm not. I'm just like "I want to use this tool that happens to be written in Python." And so I want to install it on my system, but I don't want to like screw up whatever Apple's doing with Python on my system. I just feel like if you install it the pip way, you're just like blowing your user local away. Or you're just like -- I don't know, I'm going to break something that Apple doesn't want me to break. But pipx is like "Put it all in your own little--" I think it's your home directory or something, you know?

**Christopher Hiller:** Let Homebrew deal with it, if you just need to use like a Python script.

**Jerod Santo:** \[24:02\] A lot of Python scripts you can't just brew install.

**Christopher Hiller:** If they're good, you should be able to.

**Jerod Santo:** Alright...

**Christopher Hiller:** It's like, brew install Python dash whatever it is.

**Jerod Santo:** Brew install Python dash?

**Christopher Hiller:** No, no, no, no, no. The name of the package will just start with Python.

**Jerod Santo:** Gotcha. I will go on record to say that probably five tools that I've tried to install this year, mostly around trying to use language models and Whisper and stuff like this for transcriptions have not had brew-install. They've all just been like pip-install. And I get nervous.

**Christopher Hiller:** Wild West...

**Jerod Santo:** Yeah. Well, Python's packaging story has never been solid... Hence requirements.txt. Good language though, Nick. Did you enjoy your time with whitespace significance?

**Nick Nisi:** Oh, why would anyone do that? \[laughter\] Give me those sweet curly braces. The sweet embrace.

**Jerod Santo:** It's cleaner, dude. You just indent. You're going to indent anyways... Why not just make the indent matter? It's a good question.

**Nick Nisi:** My eyes just don't scan after using curly braces for every other year of my life. My programming years.

**Jerod Santo:** Don't you use tabs though?

**Nick Nisi:** I don't even know anymore...

**Jerod Santo:** Personally, don't you use tabs over spaces?

**Nick Nisi:** Whatever Prettier changes it to. I don't even care anymore.

**Jerod Santo:** Okay. Well, the reason I asked that is because you can make those tabs real big.

**Nick Nisi:** Yeah.

**Jerod Santo:** And that indentation is real significant.

**Nick Nisi:** I actually used to show significant whitespace... I'd had invisible characters displayed for tabs and spaces and all that...

**Jerod Santo:** Sure.

**Nick Nisi:** And after just becoming so comfortable with Prettier just rewriting everything, I was like "Why do I even care? Why do I need to see this anymore?" Because if I accidentally type a Tab, it's going to go away as soon as I save. So...

**Jerod Santo:** Sure. I think that's fair.

**Christopher Hiller:** But not in Python, not in YAML, not in Lua, et cetera, et cetera, et cetera.

**Nick Nisi:** Yeah... Lua is a language that I really like, that I guess doesn't have curly braces... As much.

**Jerod Santo:** Dude, Lua is indexed by one.

**Christopher Hiller:** Yeah...

**Jerod Santo:** So I have a hard time just even giving it the time of day. I mean, who indexes their arrays by one? Literally just Lua.

**Nick Nisi:** In today's world, where I'm not -- like, you're way less inclined in any other language to write a for loop, I would say. Would you agree?

**Jerod Santo:** In what language?

**Nick Nisi:** No, in any language.

**Jerod Santo:** To write a for loop?

**Nick Nisi:** Wouldn't you use like a for each method, or some other iterator method?

**Jerod Santo:** Have you ever written Go? It's all for loops. Go is entirely for loops. They have no other iteration techniques.

**Nick Nisi:** That's why I haven't written Go. \[laughter\]

**Jerod Santo:** I use for loops in Elixir. There's all kinds of iterators, but every once in a while the for loop is actually pretty functional.

But you don't actually have index references there either, so -- you can if you want them, but it's a different kind of for loop. It's not like a zero index for loop. C, C++... I mean, come on, man, aren't you polyglot? Are you ever writing anything besides TypeScript?

**Nick Nisi:** I'm writing PHP now... But my point is --

**Jerod Santo:** Zero indexed.

**Nick Nisi:** Yeah. But my point is I don't care about the zero index. I never am like --

**Jerod Santo:** You don't do for loops in PHP?

**Nick Nisi:** ...trying to get at the zeroth index. I'll like push or pop -- or what is it? Unshift, or... Like, use some method to get at it.

**Jerod Santo:** Unshift? Isn't that destructive?

**Christopher Hiller:** Yes.

**Jerod Santo:** Oh, don't ever do that, dude. You're going to totally regret that move. Immutable.

**Nick Nisi:** Mutations are fine. Mutations are fine... No, I'm kidding. I'm kidding. \[laughs\]

**Jerod Santo:** Immutability, please. I don't want to mutate my... That was my problem with Ruby, is there are so many different ways to mutate the current thing that I did it on accident a bunch, you know? And I'm like "Oh, crap."

**Nick Nisi:** Well, just monkey-patch a new way to do it, and then...

**Jerod Santo:** Exactly. Ruby is the best programming language if you don't need to show this code to anybody... Because you can just monkey patch like the core objects, and have all very nice utilities for yourself. Just don't ever share that, because no one's going to know how it's working. But it's very malleable, and makes writing stuff very enjoyable, as long as it's not to be collaborated on.

**Nick Nisi:** \[28:03\] Everything's just in method missing, right?

**Jerod Santo:** Well, you can definitely do that too, yeah.

**Christopher Hiller:** I think Nick is right about Lua, at least. I've written a fair amount of Lua, and have never worried about that. Like, I don't worry about the index.

**Jerod Santo:** How about the one index?

**Christopher Hiller:** No, no.

**Jerod Santo:** You never do a for loop and then you had to start with one?

**Christopher Hiller:** No, I don't use a for loop.

**Jerod Santo:** Okay.

**Nick Nisi:** They have like some -- I can't think of the syntax off the top of my head, but there's some method or some language construct to just like loop through everything, without me having to explicitly get access to the nth index of the object or of the table to get at something. It'll just give me an iterator to go through it.

**Jerod Santo:** Sure. So you're saying it's inconsequential.

**Nick Nisi:** Yes.

**Jerod Santo:** And I'm saying "Why they do it then?" What's the point? Like, why don't you just conform to the other languages, man?

**Nick Nisi:** That's true, I guess...

**Jerod Santo:** I've heard great things about Lua, never written any Lua... I just like to make fun of it because of that. But it's a --

**Nick Nisi:** I came over to it because of Neovim, and I really like it for that, and now I use it for a bunch of other things. I started looking --

**Jerod Santo:** Is it configuring Neovim, or is it like extending it?

**Nick Nisi:** Configuring it, yeah.

**Jerod Santo:** So you probably don't do very much looping there. Anyways...

**Nick Nisi:** I do, actually.

**Jerod Santo:** Like, what would you loop over in your config?

**Nick Nisi:** I have like a --

**Jerod Santo:** All your plugins... \[laughs\]

**Nick Nisi:** I have 60-something plugins, yeah.

**Jerod Santo:** Yeah, for each plugin, uninstall it.

**Nick Nisi:** But then it's like looping through things, like looping through the set of language servers that I want to set up, and doing specific things for specific ones, or things like that.

**Jerod Santo:** So it's like an array, and the array is only just TypeScript and it just loops over it? It like sets up the TypeScript server and you're done.

**Nick Nisi:** Pretty much.

**Jerod Santo:** Pretty much... Alright, fair enough. Moving on... Now we've covered languages that aren't web development languages... Although I'm sure you can run all those languages in a web browser via WASM or some other technique.

Transpilation, of course... We don't have to do that. We have pretty good languages in our browsers now.

**Christopher Hiller:** Actually, I was trying to remember about that Lua stuff, and then I remembered - oh, I stopped using Lua because I kind of hated it. \[laughter\] And what I ended up doing instead was using this thing called Moonscript, which is like CoffeeScript for Lua.

**Jerod Santo:** Oh, wow.

**Christopher Hiller:** Yeah.

**Jerod Santo:** So you were drinking it... You were putting some additional stuff in your Lua. Moonscript, huh?

**Christopher Hiller:** Moonscript.

**Jerod Santo:** And you hated Moonscript? Or you hated Lua, so you went for Moonscript?

**Christopher Hiller:** I didn't like Lua. It's a little too... I don't know. They don't use like many sigils, you know what I mean? They don't use like curlies, or braces so much... It can be kind of verbose. I got sick of typing function, essentially.

**Jerod Santo:** The word function?

**Christopher Hiller:** The word function. And so Moonscript stops that from happening. Moonscript.

**Jerod Santo:** I still write out the word function when I'm writing JavaScript.

**Nick Nisi:** My mouth is agape right now.

**Jerod Santo:** It is agape.

**Nick Nisi:** For our listeners...

**Jerod Santo:** It's just -- you know, I'm old, and I've been writing function for 20 years. I'm just going to keep writing it. Now, there are times where I need the facilities of the fat arrow, and so I'll use that function style. Like, the closures, and stuff. But I just write function.

**Christopher Hiller:** So in Lua it looks like four key comma value in something or other. And that's your iterator.

**Jerod Santo:** Four key comma value. And that key starts with one. Well, are you iterating over a hash there?

**Christopher Hiller:** Well, you don't need to use...

**Nick Nisi:** It's all tables.

**Christopher Hiller:** Yeah, it's all tables.

**Jerod Santo:** Okay.

**Christopher Hiller:** It always has been.

**Nick Nisi:** I'm looking at this Moonscript, and this is way more significant whitespace.

**Jerod Santo:** You must like significant whitespace, Chris.

**Christopher Hiller:** But it has like arrow functions, so that was more comfortable.

**Jerod Santo:** What were you writing this for?

**Christopher Hiller:** Oh, God... Satisfactory plugins?

**Jerod Santo:** \[31:55\] What's Satisfactory plugins? They are like good enough?

**Christopher Hiller:** Like mods. It's like plugins for a Satisfactory mod, written in Lua, but I use Moonscript. Anyway. And I've written stuff for like Computercraft.

**Jerod Santo:** Nick, do you know what Satisfactory is, and I'm ignorant? Or are we both in the dark here? What's Satisfactory, Chris?

**Christopher Hiller:** Satisfactory is a factory building game, like Factorio, and you automate things. But there's a modding scene, of course, and it gets all complex if you like that sort of thing.

**Jerod Santo:** Sure. Yeah, Lua really has its niche in like embeddable game stuff.

**Christopher Hiller:** Yeah, and I've written Lua stuff for Computercraft, or Open Computers, and Minecraft as well.

**Jerod Santo:** Minecraft scripting API nowadays - JavaScript, baby. It's all JavaScript. I know that because I just interviewed the -- it's both written in JavaScript, and you can use JavaScript. Of course, there's other languages as well.

**Christopher Hiller:** Wait, what?

**Jerod Santo:** The Minecraft API, the scripting API...

**Christopher Hiller:** Mindscript?

**Jerod Santo:** Minecraft... You know the game Minecraft? Is that what you said, Minecraft?

**Christopher Hiller:** That's what I was talking about, Minecraft.

**Jerod Santo:** It's all JavaScript now.

**Christopher Hiller:** What are you talking about?

**Jerod Santo:** Minecraft. The scripting API.

**Christopher Hiller:** Okay, Minecraft is written in Java, and it's also rewritten in C++, right?

**Jerod Santo:** 100%. The Minecraft scripting API, like all the modding stuff that you can do inside of Minecraft is JavaScript.

**Christopher Hiller:** Oh, right.

**Jerod Santo:** I just interviewed the two guys that run the show over there.

**Christopher Hiller:** Yeah, yeah. \[unintelligible 00:33:23.29\]

**Jerod Santo:** And you can use JavaScript.

**Christopher Hiller:** No, you can use JavaScript to write Minecraft mods, but some people do, some people don't.

**Jerod Santo:** 100%. I'm just saying, you don't need to use Lua anymore, or Moonscript.

**Christopher Hiller:** Well, you do if you want to write programs for ComputerCraft.

**Jerod Santo:** \[laughs\] I'm talking about Minecraft.

**Christopher Hiller:** ComputerCraft is a Minecraft mod, written in - I don't care, because it doesn't matter to me. But it provides an operating system, and all the code you write is Lua.

**Jerod Santo:** Okay. And that's the kind of Minecraft scripting you like to do, is ComputerCraft. So is this a -- you install Minecraft and then you mod it with ComputerCraft, and then you mod ComputerCraft with Lua?

**Christopher Hiller:** Yes.

**Jerod Santo:** Okay.

**Nick Nisi:** But to solve all of your problems, there is a TypeScript to Lua compiler.

**Jerod Santo:** Bam! \[laughter\] Nick wins again.

**Christopher Hiller:** And maybe somebody's written some Lua for ComputerCraft that transp -- like, you can write JavaScript to write ComputerCraft code. Probably somebody has done this. If a TypeScript to Lua converter exists, then certainly it's possible. And I didn't know that, and so now I'm going to go back to my Moonscript and rewrite it in TypeScript.

**Jerod Santo:** Bam.

**Nick Nisi:** I support this.

**Jerod Santo:** So Nick really just made your days. I mean, this made it all worthwhile for you to show up for this particular show, because now you can just ditch Moonscript forever.

**Christopher Hiller:** I feel like everybody's ditched Moonscript, including the author...

**Jerod Santo:** I've never heard of Moonscript, but... I'm looking at the syntax and I like seeing the white space. This looks like a nice little language.

**Nick Nisi:** It would.

**Christopher Hiller:** Yeah, it's kind of like CoffeeScript.

**Jerod Santo:** Yeah, and I liked CoffeeScript as well. I thought it was very energizing.

**Break**: \[35:13\]

**Jerod Santo:** Okay, let's talk more Node. Chris, you had thoughts on Node's test runner. Please, open up this conversation.

**Christopher Hiller:** So when this was announced, I was like "This is a bad idea" because...

**Jerod Santo:** What's the idea?

**Christopher Hiller:** The idea of Node putting a test runner in itself. Having experience maintaining a test runner, there's all these edge cases and terrible things... And it's not the easiest egg to crack, right? And so I was kind of concerned about the maintenance burden. But - and I don't know if that's ever going to be a problem or not. Certainly, the people who know what those edge cases are, if it's going to be anybody, it's going to be those who work on Node core. And so I think they're well suited to handling some of those things.

But I picked it up recently to write some tests, instead of Mocha, and I was happy with it. It's not so restrictive in that you - you know, with some test runners they don't give you test suites. You only get tests, and they don't give you -- they discourage hooks, or whatever... But you get all that stuff in Node's test runner. And that was really all I needed. And so - yeah, it works great. It works great with -- I haven't tried the new TypeScript stripping thing with it, but if you use something like TSX, no problem. You can combine it with like C8 or something to get your coverage; much like Mocha, it doesn't have a lot of bells and whistles. However, Node - I think 20, or 22... I think it arrived in 18. I may be wrong. Anyway, one of the -- it was either 20 or 22, added some mocks and spies and stuff. There's a mocking API now. And that works pretty well. And that was one of the things that was kind of missing. And so yeah, I'm happy with that...

**Nick Nisi:** Wait, in... That's just like native...

**Christopher Hiller:** In Node.

**Nick Nisi:** Wow.

**Christopher Hiller:** Yeah, yeah. There's a whole mocking API now.

**Nick Nisi:** Does it work with ESM, in like being able to mock -- like, other modules? Like, that was one thing that I was wondering... It's been so long, I'm trying to remember. But do you know --

**Christopher Hiller:** I'm going to say no.

**Nick Nisi:** Okay.

**Christopher Hiller:** But it's actually pretty easy to do that nowadays. You can register a loader on the fly, and have it do those things.

**Nick Nisi:** Oh, okay.

**Christopher Hiller:** So it's a different, separate system. But yeah, you can do that sort of thing. I haven't needed to yet, and I can report back if I ever do... Which I'm sure I will, eventually. But yeah, the mocking stuff works great. Assert is still assert, which is not super... But there are other assertion libraries out there, too. And yeah, I'm pleased with it. I'm happy it's there. The more adoption it gets, the more terrible things that people are going to try to do with it, and so... Who knows if that's going to become an issue later. But for now, I'm really happy with it. It works great. And kudos to Colin and the rest who have been working on it. I think Rafael or something, too. But yeah, happy with that. Node's test runner.

**Jerod Santo:** Cool. Related discussion that we got Kball's opinion on recently, and I'd love your opinion, Chris... Kind of going up a level. What belongs in Node and what doesn't? What is your particular opinion on shoving a bunch of stuff into Node, versus keeping that relatively slim, and allowing third-party developers to innovate, etc? Do you have strong opinions one way or the other on where things belong inside of something like Node?

**Christopher Hiller:** \[40:20\] I know what goes too far. The Python standard library had something like an iTunes module built into it. And that goes too far.

**Jerod Santo:** Yeah.

**Christopher Hiller:** But I'm not like a small core advocate necessarily. I'm an advocate for whatever people commonly do that it would make sense to do out of the box. And over the past couple of years, I think that sentiment has kind of become more popular, and we've seen additions of things that the team five years ago wouldn't have considered adding. And so I'm happy with the direction, and yeah, I think it's good. There's globbing in the core now, so... Yay! So stuff like that.

**Jerod Santo:** Gotta have globbing. I say that seriously. I'm generally the same. I've probably been tracking Node's progress more in the last two years than ever in my life... And generally, almost all the decisions I see them making, I'm like "Yeah, good decision." I feel like they're making sound choices, and I feel like it's really steady progress over the last 18, 24 months. So I tend to agree with you.

**Christopher Hiller:** Yeah. And maybe some of that has to do with competition from Deno and Bun... But regardless, they're doing a good job.

**Jerod Santo:** Yeah. By the way, Deno 2 right around the corner, and Ryan Dahl right around the corner on JS Party as well. We'll be getting him back on around the launch of Deno 2, which I think is September... Late September. Anyways, let's close up. Nick, did you have anything to say about Node Test Runner, or anything that Chris just said?

**Nick Nisi:** So this was written from scratch. I'm just curious... You have experience with Mocha, obviously. Would there have ever been a precedent to just slurp up something like Mocha, and make it a first-class thing?

**Christopher Hiller:** No. I mean, it was from scratch. Nothing really fulfilled the requirements, I think, that they wanted. It was either too much, or not enough. Or it was --

**Jerod Santo:** Mocha was too much?

**Christopher Hiller:** Or it was janky.

**Jerod Santo:** \[laughs\] Too janky.

**Christopher Hiller:** Yeah. So it would not make sense to pull a Mocha into core now, because... Yeah, you don't want to do that. But it wouldn't necessarily make sense to pull -- I don't know, most of the test runners nowadays are going to have all those bells and whistles out of the box, and Node Test Runner doesn't have those things, similarly to Mocha. But yeah. So yeah, they did write it... I don't think anything out there was suitable to pull in. Just speaking from speculation, my opinion.

**Nick Nisi:** Yeah.

**Jerod Santo:** Sure.

**Nick Nisi:** That's awesome. Like you said, things like this -- especially when I want to do something quick and one-off, having to... I don't know, there's just a mental barrier to having to add something else, and then configure that, and then go.

Whereas if it's just built in, it's like "Oh, there's no barrier. I can just write my tests in this case." Or I can glob without having to jump through a bunch of hoops for that. That's really nice.

**Christopher Hiller:** No config file. No config file.

**Jerod Santo:** \[43:45\] That's nice. Very, very nice. Well, let's finish up this episode on a musical note. One thing I've always loved is the cross-section of software development and culture. Whether it's music, movies, video games, art... We featured all kinds of things over the years on our shows. Maybe you recall Nested Loops, a JavaScript band from back in the day, that would rap over JS-generated beats, and we had them on the show and featured some of their music... Of course, I've done features of STDOUT the Rapper, who's a software development rapper, probably the only one on Earth who has some actually really good music... And most recently, I've found out about the TC39 song. This comes by way of Bruce Lawson, who works at the Vivaldi browser, which - Chris, you're rocking Vivaldi today, huh?

**Christopher Hiller:** Yeah.

**Jerod Santo:** Are you a fan of this browser?

**Christopher Hiller:** Yes. Good. Good browser.

**Jerod Santo:** What do you like about it?

**Christopher Hiller:** It has some fancy things. And it doesn't slurp data like Chrome, and... Yeah, I like it.

**Jerod Santo:** Very cool. So you have b0neskull's endorsement of Vivaldi, Bruce's works there. And he recently traveled to Amsterdam earlier this summer to help MC JSNation conference out there... And he says on his blog "Naturally, the open ceremony required a JS-pop group", which is a subgenre of K-pop, which is a subgenre of pop... And they did, apparently, a carefully choreographed dance routine, and they lip-synced a song... He's got some pictures on his blog post, which we'll link up as well. But they have an original song that he wrote.

**Christopher Hiller:** Can we hear the song?

**Jerod Santo:** Yes! Is that too much setup for you?

**Christopher Hiller:** Yes.

**Jerod Santo:** Gosh... You're a curmudgeon. Alright, here's the song by Bruce Lawson... TC39 song, Chris...

**Song**: \[45:47\]

*I get so excited writing JavaScript I'm pretty easygoing, but now are you strict?*

*When I first began, I was in callback hell*

*Then I met you, and now it all goes well.*

*I love you when my tests pass,*

*Meet me in the moonlight, and extend my class...*

*You always keep your promises from the start,*

*Now you've shot your fat arrow straight to my heart...*

*Oh TC39, I'm so glad you're mine,*

*Say you will be with me till the end of time...*

*Oh TC39, you're so sublime,*

*Your specs are the best, my TC39.*

**Jerod Santo:** Alright, so shout-out to Bruce. There you have it. Check out Vivaldi. Check out BruceLawson.co.uk. We'll link it up... And let them know if you liked the TC39 song. Alright, that is our show for today. Any final words, Chris?

**Christopher Hiller:** No.

**Jerod Santo:** Nick? I feel like this is becoming a new routine you do... \[laughs\] Yeah, I put you on the spot and then you crumble. That's kind of our thing recently.

**Nick Nisi:** It's very easy.

**Jerod Santo:** Yeah, it's easy for you. It's easy for me as well. Alright... Thanks for hanging out. On behalf of Nick Nisi and Christopher b0neskull Hiller and JS Party... I'm Jerod, and we will talk to you all next week.
