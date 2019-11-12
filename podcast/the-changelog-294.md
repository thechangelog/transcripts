**Jerod Santo:** Lin, let's start with Code Cartoons, which is a very cool project. It seems like a multi-year project that you've been doing - and you're maybe not doing it anymore - and some of the questions that we have around it. This is where you basically are doing educational work by drawing awesome diagrams and cartoons around code. Can you tell us the concept, and when did you start doing this and why?

**Lin Clark:** Sure. Well, the idea behind Code Cartoons is to take this technology that people sometimes find intimidating, and explain it in terms of metaphors that almost anyone can understand. A lot of people think that because it's like that, and I'm using cartoons and stuff like that, that it's meant for novice developers... But really, it's meant for almost more senior engineers, because I find that a lot of senior engineers sometimes have a hard time saying that they don't understand something, that they don't know what's going on, and if you present it in a very clear way and in a way that they can relate to quickly, it brings down that concern about losing face, so it can make senior engineers more comfortable having these conversations without getting that kind of bluster of "I know what I'm doing."

So a lot of these posts are actually meant to help dialogues by reducing people's insecurity around not knowing something.

**Jerod Santo:** \[00:03:54.19\] That's interesting, because I realized that kind of without realizing it - for those following along at home, you can go to code-cartoons.com to see some of Lin's work there... The topics are not novice topics. There's a cartoon guide to Flux, to hot reloading and time travel debugging, to Redux - to really things that are difficult to understand even for what we call "seasoned software engineers."

You're really kind of bringing them down to a level that somebody -- it's like making them more approachable, and like you said, for people who may be too embarrassed to ask.

**Adam Stacoviak:** Yeah, and the visual aspect is a big piece too, because you can explain things, like you said, in metaphors, like "This person exchanges this paper with this person", so you can see the whatever it is moving from one place to another, and now the state has changed, or the responsibility of the state changes changed hands. You can see that in real visual artifacts that people can relate to, because they are in a real 3D world.

**Lin Clark:** And I think also giving personalities to the characters that are interacting helps people latch onto it and understand more why something acts in a certain way. For example with Redux - and Flux, actually - I talk about one of the characters being an overbearing bureaucrat, because it doesn't want anyone else touching the state. I think that that helped a lot of people understand more what's going on with not being able to touch the state independently from different components, only being able to send these messages to that component, and then have it make all of the changes to the state.

**Adam Stacoviak:** That's interesting, the personality comes through.

**Lin Clark:** Exactly, yeah.

**Jerod Santo:** And we should say it's not just cartoons. There's rich dialog and explanation around the cartoons. The drawings themselves are almost xkcd style, with stick figures and very simplistic, but draw with -- it's almost as if you draw them with skill, but you kind of draw them in a childish fashion on purpose. Do you have a background in drawing, or...?

**Lin Clark:** Yeah, I do have some background, I took some design courses at CMU. But the reason that I do it that way is because that is a way for me to get out of my head, to stop thinking "It needs to be perfect." If it's meant to be messy and if it's meant to be a little bit sloppy, then I can just get it done. Otherwise, I would be overanalyzing and I would never actually finish one of them.

**Adam Stacoviak:** The color blue is pretty interesting, too.

**Jerod Santo:** Yeah, was that -- I know that most of these were Facebook-related libraries at the time; was that a Facebook theme, or where did you get the color scheme?

**Lin Clark:** Well, kind of two things. It is partially because in the early days code cartoons were around React and the React ecosystem, so I did pick a blue that was close to that color blue because of that. But also, I just really like the visual style of blueprints, and so it's pretty close to the color that you would use in blueprints as well.

**Adam Stacoviak:** It's better than black, because just like when you sign a signature for official documents, they always say "Sign with a blue pen", and the reason is that it's less likely to be copied or it's just got this official feel to it, I guess. I think there's more than that behind it, but on the web most things are black and white - black text, white background; that's the primary colorscape of the internet basically, so having them be blue... They stand out.

There's a book to this though, too. Am I correct in saying that, or is there not a book?

**Lin Clark:** Things have kind of changed. I've not done a great job, I'm not very good at the brand management part of all of this. Originally, when I started code-cartoons, I wasn't working at Mozilla, I was just doing it in my spare time, and I planned to do a book around all of the React ecosystem, doing code cartoons. And then I got a job at Mozilla... I was working in dev tools at first, but I managed to turn Code Cartoons into my full-time job at Mozilla, so a lot of the latest work is on the Hacks blog (Mozilla's Hacks Blog). I can send a link for the show notes for that.

\[00:07:53.00\] There's no book in the works currently. There may be in the future, but I'm doing a lot more work around web technologies, things like WebAssembly, JavaScript, how the browser works right now.

**Jerod Santo:** You kind of answered one of my questions, because one of the things that I did notice on Code Cartoons is it doesn't appear that you've been publishing to that particular website anymore, so I was wondering if maybe the magic wore off, or if you got sick of drawing, or something... But it sounds like you just transitioned that into your day job, which is cool.

**Lin Clark:** Yeah, and I need to do a better job of actually updating my site so that it points to all of the recent stuff as well. Right now it's just a Medium blog, so I need to just spend one weekend making that all work, but it hasn't gotten to the top of the list yet.

**Adam Stacoviak:** Well, if I found the right place, there's a treasure trove of them, and the very first one is actually on a topic we'll talk about later in the show, which is ES Modules, a Cartoon Deep Dive, which is very recent, in March.

**Lin Clark:** Yes, just a few weeks ago. One of the things that I use Code Cartoons for is actually teaching myself about things that I need to learn anyways. For ES Modules I am working with the WebAssembly community group to standardize ES Module interoperability with WebAssembly modules, basically making it so that WebAssembly modules can be loaded using the ES Module API. That way, WebAssembly modules can be used in the same module graph as JavaScript modules, just as if they were JavaScript modules. But in order to do that, I really need to understand how ES Modules work at a deep level, so by doing the code cartoon about them, I taught it to myself, and it also is really helpful when I'm explaining it to, for example, people in the WebAssembly community group, who maybe haven't familiarized themselves with all the details. I can actually use these cartoons in the Standards Body presentations that I do... So it's a nice overlap.

**Jerod Santo:** I can say it's quite effective for me. I was reading in prep for this a recent post you had on the Mozilla Hacks Blog, which we'll talk about in detail, Making WebAssembly Better for Rust and for All Languages, and as I was reading along, I was -- I know Wasm a little bit, I get it from the outside, but even I didn't know that it only has support for taking integers, or erasing integers, or something like this...?

**Lin Clark:** Integers or floats, yeah.

**Jerod Santo:** Yeah, integers or floats, thank you. You can't pass strings, so you start going into the description of what we have to do in order to just have string support... And all of a sudden I'm seeing some code cartoons, and I'm following along, and I'm like "Oh, I'm learning. This is very effective." So I guess I would just compliment you on the effectiveness of sneaking them in there...

**Lin Clark:** Thank you.

**Jerod Santo:** ...and I'm learning by accident there.

**Adam Stacoviak:** I haven't gotten to catch one of your talks in person. Do you pull any of these into your slides, or is this a part of anything you do in person, or is this simply something you blog about and include on the web?

**Lin Clark:** All of my talks are actually code cartoons. I think it's even more important when you're giving a talk, because things are moving so quickly and people can't really change the pace to fit what their learning style is, so I try to make sure in my talks that I'm extremely clear in the diagrams that I'm using what exactly is going on, where we are in this process, so if people zone out for a second, they can come back and seamlessly get back into the flow of the talk.

**Adam Stacoviak:** I might be going a little too deep here, but I'm curious of the process of actually making them... Is it a computer-generated thing, or is it a pen?

**Jerod Santo:** Yeah, and I was actually thing - is that too deep, or is it cool for me to ask on that?

**Adam Stacoviak:** No, I mean... How do you make these things?

**Lin Clark:** There's the physical process of actually making the cartoons, and then there's the mental process of actually figuring out what should go in them. I'll start with the mental process, which is basically consuming everything I can on a subject - video, blog posts, the spec itself, all of that... And just filling my brain to the brim. Then doing a lot of yoga, and jogging; I try to load up in the morning on a particular topic, and then when I go for my run, I'll just have that going in the back-burner, because I find that thinking about it consciously a lot of times doesn't work. I have to let those metaphors come to me.

\[00:12:01.04\] So then, once I've had a few that come to me, I'll put them on post-it notes on my wall and I'll start filling in this wall of post-it notes until the narrative becomes clear through that. Then I fill another wall of post-it notes that actually have all of the images that I'm going to do in order. At the same time, I'll usually be recording... I don't actually write them, I say them out loud, because I find that that helps me keeps my words shorter.

If I imagine the person I'm explaining it to, I tend to explain it in a much more accessible way, so I actually will record it and then transcribe it. That will be happening at the same time that I'm putting these post-its on the wall that are all of the images. Then at that point it's just a matter of busting through all of those images and drawing them all out. For that, I use Photoshop and the Wacom Cintiq tablet.

**Adam Stacoviak:** I was thinking you might use something like that, because I've done a couple things that are drawing-related and I used my Wacom as well. My setup is left hand has the trackpad that Apple has (the Magic Trackpad), keyboard in the center, and then right hand is the Wacom. So I kind of got that -- I almost feel like a musician, but different instruments, because the left side is that. In a lot of ways it's like my left hand is the scroll, and zoom, and all the gestures - which is kind of funny, because I'm right-handed... But I can totally relate to what you're using.

**Lin Clark:** Well, it's funny, because I'm right-handed too, and I have the same setup. I have the trackpad on the left and the Wacom on the right.

**Adam Stacoviak:** I've heard it's become very popular. I've been doing this setup for six years, maybe more.

**Lin Clark:** Oh, wow.

**Jerod Santo:** What do you draw, Adam?

**Adam Stacoviak:** I make the internet, man, I don't know... \[laughter\] I draw signatures, I do a lot of -- just like doodles. Before, when I was doing a lot more interface design, I would hop into Photoshop, click the pen tool, and I might even have a particular setting for doing this, and I would just literally draw out interface, with the Wacom tablet, in Photoshop, and then save that and hand that to our design team.
I would product-manage and I would do UX design with them kind of in real-time, but we would sit there and -- this is going way deep into this, but maybe Lin's digging this and some of the audience at least...

**Jerod Santo:** \[laughs\] I'm digging it.

**Adam Stacoviak:** ...you know, you just draw some stuff out, and it's just -- it's paper and pen, basically, but it's not. And I would choose Lin's blue. That's my favorite -- not that particularly, but in that genre of blue... So we're definitely kindred spirits in that front.

**Jerod Santo:** I have two thoughts on this. The first one is I think Amy Hoy has a rant; I just loved, Lin, how you described your mental process first, and then you talked about the tools... Because we can all nerd out about "Which app are you using?" I think Amy Hoy has... I think it's a blog post where she has this -- you know, she's a great copywriter and a great designer, and she just puts out things that are envious... You see me like, "Oh, I wish I could have created that", and so many people ask her like "What app did you use?", as if you say "On a Wacom table" I can just go onto Amazon and acquire one and suddenly create what you're creating...

**Adam Stacoviak:** All the skill.

**Jerod Santo:** Exactly. And we tend to boil it down to like "What's your process?" as if it's magic, but really it's -- the process, get all of the stuff in your head, go for a run, right? Think it out, boil it down... Those are actually even more actionable for people that want to do similar things.

**Adam Stacoviak:** It just reminds me I get out less, not often enough to go through the thought process, and it just shows the commitment Lin has to what it takes to mentally break these things down, and then it also reveals what time is involved.

**Jerod Santo:** Right.

**Adam Stacoviak:** We see in plain view a fairly simple drawing, but behind the scenes there's all these thoughts, and the run, and the processing, and the filling to the brim and then all the post-it notes to the wall... It's a process, Lin, that's pretty intense. It's true artistry.

**Lin Clark:** \[00:15:57.16\] It is intense, and I'm so exhausted after every single one... I'm just ready to collapse.

**Jerod Santo:** In reading these, what I was reminded of was "Why's (Poignant) Guide to Ruby", why the lucky stiff - talk about bringing advanced concepts to people who are intimidated... And your drawings are more -- I don't even know if professional is the right word; his were more whimsical, it was kind of crazy. Lin, are you familiar with that book, "Why's (Poignant) Guide to Ruby"?

**Lin Clark:** I've never actually read it. A number of people have pointed me to it because they have said it reminds them of that guide...

**Jerod Santo:** It does.

**Lin Clark:** I still need to read it.

**Jerod Santo:** I guess that puts a bullet in my question... I was wondering if there's an inspiration from that direction, but if you have never heard of it, then apparently not. Where did you draw inspiration for this? Did you just take a shower one day and think "I'm gonna draw code cartoons"?

**Lin Clark:** Well, I've seen a few people doing kind of similar things, but where I really got the inspiration from was I told the BrooklynJS folks that I would give a talk there, and I chose Flux, because I wanted to learn more about it... And as I was diving deep into the internals of Flux, it sounded like a conversation to me between the different parts. It really sounded like people talking to each other, and I was like "Well, the best way to explain it if it sounds like people talking to each other is to draw stick figures and have them talking to each other." So I did it for that talk, and then that talk went over so well. People just kept coming up to me afterwards and saying "That helped me understand it so much more. I've been working with it, and I didn't really understand it", so I thought "Well, I'll put it in a blog post so that everybody can see it."

I put it in this blog post, it went up on Hacker News, got hundreds -- I think it's probably at 200k+ views now... So it was very successful, and I thought "Well, maybe other things would benefit from this kind of treatment", so I just started playing around and seeing if the style would help people learn other things as well. And when it consistently did help people, I thought "I should really run with this."

**Jerod Santo:** Yeah, you can tell by the numbers of claps these have on Medium. And I don't even know what a clap is anymore, because this is like pre-claps, right? This was back when there were just hearts, and now you can give like an infinity of hearts, or 50, or whatever... But lots of love on Medium; translated into multiple languages... That's when you know that you've really resonated. Did people approach you and say "Hey, I'd like to put this into Mandarin, or whatever language?"

**Lin Clark:** Yes, I still get that on a lot of the articles; people will just comment saying "Oh, here's a French version" or "Here's a Russian version", so it's great to have all of those translations and to make it accessible to even more people.

**Break:** \[00:18:46.28\]

**Jerod Santo:** So Lin, you are at Mozilla now, where you work on -- well, what do you work on at Mozilla, besides drawing more code cartoons?

**Lin Clark:** I do a few things. I work with some of the teams, like the WebAssembly team... As I mentioned before, I'm working on standardization of the interop between ECMAScript ES modules and WebAssembly modules. I also work a little bit with the Rust team on their work to make it possible to compile Rust to WebAssembly and making that integration between JavaScript and WebAssembly really nice to work with, so that you don't have to think "Oh no, I have to bring a WebAssembly module in here"; instead, it's just another module. So I work a lot with those teams.

I've also done a little bit of work with other teams like our CSS style engine Stylo, which came to Firefox -- it was developed in Servo, which was a web engine that we used to test out the idea of parallelizing everything in the browser engine, and so once we figured out that that really works well, we brought it over to Firefox last year. So I do jump around a little bit, and I get to work with a bunch of different teams, which is fun.

**Jerod Santo:** Let's focus in on Rust a little bit, and something that you wrote, the first sentence in this post back from March about making WebAssembly faster -- or sorry, not faster, but better for Rust, and for all languages... You say "One big 2018 goal for the Rust community is to become a web language." So I guess the first question is why, and then we'll go to how... Why does Rust wanna become a web language?

**Lin Clark:** Well, you can just reach so many more people; there are so many web developers out there, so making it possible for those people to use Rust in the context of their applications means that Rust can be used a lot more widely. And the Rust community also just really likes bringing down barriers, making sure that there's as few barriers as possible to working with Rust, so making sure that web developers can use it is a big part of that.

**Jerod Santo:** So in order to do that, of course, WebAssembly is the gateway drug to the web for these other languages that are not JavaScript, right?

**Lin Clark:** Right, yeah. I mean, WebAssembly is pretty much the first opportunity that any language besides JavaScript has had to really be a part of the web platform.

**Adam Stacoviak:** What about Dart? Isn't that another language that was sort of aiming at similar type of desires, to be a browser component?

**Lin Clark:** Dart has shifted gears over the years from what I understand now. They had talked about having a fully separate virtual machine that would run Dart instead of JavaScript, and I think now they're compiling to JavaScript; I'm not totally up to date on what the Dart team is doing, but I think that that was what they decided to do.

The thing about WebAssembly is it actually runs in the same engine as JavaScript. It will give you a lot of the same capabilities as JavaScript, and give you a lot of the same access, and a lot of the same security protections that JavaScript has because it is part of that VM and it can reuse a lot of the code.

**Jerod Santo:** How should web developers who aren't very familiar with WebAssembly think about it? Is it a runtime, is it a compiler, is it a language, is it like Assembly language? What's the story on exactly what it is and what it provides?

**Lin Clark:** It's hard to completely describe it, because it's kind of the first of its kind on the web. It is kind of like Assembly language, but it's more like a virtual Assembly language. It gives you pretty low-level operations, but they're not exactly targeted for a particular machine, like Assembly code would be. That's because you don't know when you're sending a file across the web what machine that other person is running on, so you can't have Assembly code that is specific to that machine.

\[00:23:53.10\] What WebAssembly does is it gives you something that looks like Assembly and is pretty close to Assembly, but then the virtual machine will translate it into actual Assembly code for whatever machine that it's running on. So in the browser, the browser will do that short little hop between WebAssembly and actual Assembly.

**Jerod Santo:** So then for these other languages to run in the browser - so for Rust to run in the browser, its job is to somehow build or compile itself into a WebAssembly-compatible binary? Is that the right language?

**Lin Clark:** Yes, basically it targets WebAssembly. So you put in -- when you're compiling your Rust code, you'll say "Target WebAssembly." The exact flag right now is Wasm32-unknown-unknown, which is not the most descriptive flag that we could have... \[laughter\] But that will tell Rust the compiler "Okay, you need to turn this into a WebAssembly binary."
**Jerod Santo:** So any language that wants to run in like manner, the authors of that language, the community around it - whether it's Go, or Ruby, or any other language - would have to do similar work. Is Rust kind of leading the way? Do you know the landscape of different programming languages and their support for WebAssembly?

**Lin Clark:** The ones that really led the way were C and C++. The reason for that - it was really the games industry that was the first user of WebAssembly, because it was very hard to run games in browsers because of performance limitations. When you're playing a game, you don't wanna have the frame freeze while it has to do some computation, and you wanna have that really fine-grained control over performance.

So it was the games industry that really pushed WebAssembly forward for the first few years, and a lot of those folks are coding in C and C++, so those are the languages that have the best support for WebAssembly at the moment. Rust is coming along -- I'd say that Rust is right behind them. The work really only started in earnest to make WebAssembly compilation of Rust work well maybe six months ago, I'd say, but they've come a long way and are really pushing WebAssembly forward at this point.

There are also other languages that are starting, too. I think that Go actually just landed their initial support for compiling to WebAssembly in the main tree. So there are other languages that are pushing in this direction right now, but Rust is definitely behind C and C++ the one that's gotten the farthest.

**Jerod Santo:** And one thing that I was surprised to find about WebAssembly - we talk about support from the language side, but support from the browser side is actually pretty good. Pretty much every modern browser except for Edge has it in preview mode, which maybe you can tell me exactly what that means... But I mean, it's out there in the browsers to be used today.

**Lin Clark:** It's unique. The WebAssembly standardization effort is unique in how quickly and smoothly it went, I believe. They started standardization of it in earnest in 2015, and by 2017 all of the browsers were announcing that "This is ready, we're turning it on." So that was a really big deal. I think that a big part of that is that so much of the work and figuring out how it needs to work had already happened with asm.js; they'd figured out what you need for a minimum viable product of WebAssembly through that process. So it was really just standardizing, paving those cow paths but it's also a really functional standards body. They are able to move things along more quickly because they know how to work together really well.

**Jerod Santo:** There's a lot of people who love JavaScript, and then there's other people that don't like it so much, and then there's a lot of people that really dislike JavaScript... So people are excited about Wasm for different reasons, but some people who are really into Go, or really into Rust, they're excited because they think "I may never have to write JavaScript anymore."

\[00:28:01.16\] Some people may think the Rust community is trying to replace JavaScript ("You don't need it anymore, you need Rust"), but what I'm hearing from you and from other people - that's not the story here; there's more to it, or it's nuanced. What is the story with this interop and making them almost merge that you guys are trying to do, as opposed to just saying "Hey, we can just WebAssembly, we don't need JavaScript anymore"?

**Lin Clark:** Well, there are a lot of things that JavaScript does really well, and it does it without increasing the barrier to entry for new developers. We don't want to tell new developers "Oh, you have to go learn a language that might be more difficult", we want people to still have that easy onboarding ramp, so JavaScript gives that. And there are also just a lot of places where the performance of JavaScript is fine and you really don't need to have a really fine-tuned level of performance.

We think that having them work together better is really the answer, not saying "We're going to replace this really easy to use language with a host of other languages that may be harder to use." Also, there's just so much innovation that's happened in the JavaScript ecosystem because of this low barrier of entry. You have all of these different ideas that people -- you know, one person will create a library that does something cool, but maybe not in the most efficient way, and other people will jump in and help them make it more efficient... So I think that we really wanna capitalize on all of that innovation that's happening in the JavaScript ecosystem and make that available to people who are coding in other languages, make it seamless to integrate with those other tools.

**Jerod Santo:** What progress has been made there, and how exactly does it look like, the interoperability between the two? So you can use Rust when it makes sense, you can use JavaScript when it makes sense, and you don't have to have a partition between them. It sounds like there's a lot of glue that has to go into that.

**Lin Clark:** Yes, and we're trying to make some of that glue something that people don't even notice, that they don't see that they're using. One of the projects that we've been talking about at Mozilla is called wasm-bindgen, because as you noted earlier in the show, right now you can only pass integers and floats into WebAssembly functions, but a lot of times you need to do something like pass a string into it... And the way that you do that is by actually encoding the characters in the string into their number equivalents using something like the text encoder API, and then putting those numbers into an array buffer, which is basically just like a JavaScript array, but what it holds is bytes.

So you put it into this array buffer, and then on the WebAssembly side you just have to pass a pointer, (which is really just an integer) the array index; you pass that from JavaScript into your WebAssembly function, and then WebAssembly will use that array index to figure out "Okay, I need to start getting the bites for this string here, in this memory, and pull them out", and then it will decode them into characters again.

That's a pretty complicated process for a lot of JavaScript developers, and even for people who are not working with JavaScript; it's just very low-level... So we have a tool called wasm-bindgen which will automatically wrap your WebAssembly module with some JS code that will actually do that for you, all of that conversion, and it will also make it possible to use Rust structs in JavaScript as classes, it will do a lot of that wiring up and marshalling the data for you.

\[00:31:44.05\] So right now it is pretty Rust-specific. We're hoping that we can expand it to support other languages as well, so that all languages can then have this easy "Pass a string, pass a struct, pass whatever you want from JavaScript back to WebAssembly." And there's also some work that's happening in the WebAssembly community group to make this easier as well. There's a proposal called anyref, which will make it possible to take references and share them between JavaScript and WebAssembly, and there's also something called host bindings, which would do a lot of the translation of values at the boundary between JavaScript and WebAssembly.

**Adam Stacoviak:** I wanna say calling back to the cartoons, too - your visual description and then your code description of this is so much easier to step into, following along as you're talking through this... I mean, this post you wrote, and then obviously the code cartoons that go with it are just -- as you're talking through it, I can kind of almost hear you creating these in the transcription process that you mentioned earlier; I can hear your process for describing these complex things, and it's just so much easier to see as code cartoons.

**Lin Clark:** I agree, yeah. I wish that all podcasts were visual and I could just be drawing as I'm explaining things.

**Jerod Santo:** That would be an awesome. Maybe an opportunity to mention our Twitch channel, Adam, as we're doing a little bit more video; we have been livestreaming some coding sessions, and we'd love to be bringing guests on those. By the way, to the listeners - JS Party is back; I'm not sure if you've heard... Every Thursday we are doing the JS Party thing. We have a huge cast of experts on that show, so check it back out. If you haven't yet, changelog.com/jsparty.

We've talked about doing that live on Twitch, because you can always use a video component. We do believe in audio as a great final product, because of the versatility in which you can listen anywhere... But yeah, for certain things, especially talking about code, looking at code, drawing things, diagramming, doing the kind of stuff that, Lin, you're so good at doing, audio is definitely a constraining medium for your skills.

**Adam Stacoviak:** Can you talk a bit about the process for the other languages to take part? You'd mentioned that C, C++, obviously Rust, and even Go you'd mentioned... But you're inviting at the bottom of this post other languages to jump on board if you wanna start to support WebAssembly. What's the process for something like that to happen?

**Lin Clark:** Well, really any language that has a compiler of some sort can build in support in the compiler, and figure out exactly what the high-level language constructs translate to when you're talking about these low-level operations that WebAssembly gives you. I could go into great detail about exactly what kinds of operations it has, but it would probably take a half hour to explain...

Basically, it's this thing called a stack machine; if you wanna add two numbers together, you put two numbers into the stack, and then you say Add, and because the add command, the add operation, knows that it takes two things, it will take those two numbers off of the stack, add them together, and then put the value back onto the stack. Basically, you need to output code that can do things in that stack machine kind of way, with the operations that WebAssembly makes available.

One of the things that WebAssembly doesn't support yet that a lot of languages do need is integration with the garbage collection in the browser. You can write your own garbage collection and ship it down with your code, and that works fine, but it also makes the file size larger, it can be hard to - if you have objects that are going between JavaScript and WebAssembly, it can be hard to keep track of those... And it's just kind of tricky to write a good industrial-grade garbage collector, but all of the browsers have really good garbage collectors, so we're trying to over the next year really push that forward and make it possible for languages to depend on the garbage collection in the browser.

\[00:36:02.03\] Now, this isn't gonna work for all languages, but we think that there are a lot of languages that then will be able to target WebAssembly really easily.

**Jerod Santo:** Going back to the bindgen conversation and what you're providing there - it sounds like all the plumbing necessary to convert things into the right formatting, the serialization or really the marshalling into classes and stuff on the JavaScript side... Recently I saw a Hello world Rust thing in WebAssembly; by the way, there's WebAssembly Studio, which I hadn't heard of until maybe today even, which is pretty cool. For those out there who would like to play around with this stuff, webassembly.studio (we'll link that up as well), and you can see examples of people doing things... And they have a very simple Hello world where it's using wasm-bindgen, and there is a function defined in the Rust side called greet, which takes a string as an argument, and then there is a function on the JavaScript side which I think you're probably familiar with - it's called alert... So that one's built right in.

They are both using the opposite functions - one of the JavaScript side, one on the Rust side. That is pretty cool. You can imagine all the places that could go, Lin. I mean, once you get this native support for all the functions over here and all the functions over there, now you have access to the best of both worlds, right?

**Lin Clark:** Exactly, yeah. And WebAssembly Studio is a great tool for people that just wanna try out playing around with Rust to WebAssembly compilation, or really any language to WebAssembly... Because it means that you don't have to download the compiler toolchain or anything; it'll just run in your browser, which is fantastic. We're actually building a project around that for JSConf EU - it's this light environment... It's a space that this artist that I know from Pittsburgh is building, that has all of these LED bricks all over for the big space, and you can program it to have different animations on these LED bricks. We are going to make it possible to program it using WebAssembly Studio and write animations that can then be shown on this pace while people are dancing inside of it, or whatever.

**Adam Stacoviak:** Is this a WebAssembly working group thing? Is that right what this is?

**Lin Clark:** That project in particular is a Mozilla thing, and the WebAssembly Studio is also a Mozilla thing. Michael Bebenita, who is one of our folks in emerging technologies, created WebAssembly Studio kind of in his spare time I think, and people were so excited about it that it's now something that he and a few other people work on.

**Break:** \[00:38:45.09\]

**Jerod Santo:** Lin, tell us about the work that you're doing with the Wasm ES modules spec. It sounds complicated.

**Lin Clark:** It is complicated. In a way, it's actually pretty straightforward because the WebAssembly group really designed the module system to eventually work with ES modules, and then when ES modules were taking longer to be standardized, they switched to having this imperative JavaScript API for instantiating WebAssembly modules. But it was really designed for it to easily interop with the JavaScript ES modules.

The complicated part is that you have to work with three different standards bodies that cross at least four different specs...

**Jerod Santo:** There's your complicated, yeah...

**Lin Clark:** Yeah. \[laughs\]

**Adam Stacoviak:** Red tape.

**Lin Clark:** So it's a lot of explaining to everybody what's going on, why we have to make the changes that we are making, and so far everybody's been on board, which is great, and hopefully it will continue to be that way. But the goal of the work is -- right now, as I said, there's an imperative JavaScript API; basically, you have to tell JavaScript to build this WebAssembly module for you, and you have to go step by step. You have to tell it "Okay, fetch the file first, and then take the imports that I need to pass into the module and initialize those. Then pass those in, instantiate the module using those imports", and then finally you can actually use whatever export from that module you wanted to whatever function or value you wanted to from that module.

So what we wanna do is move it to a declarative API, like what you have with ES modules, where you can just say "import foo from bar.js", and it just gives it to you; it does all of the other work for you. The tricky parts there are figuring out where exactly, because the ES module spec breaks up the process into three different phases. First you construct the module graph, you download all of the module files that you need, and you parse them into module records so that you know what's going on in this file... But this process has to happen in kind of an iterative way, because you first get the first file, then you have to parse that to figure out what modules it depends on, and then you go and fetch those from the web, then you parse them... So you have to keep going down and down and down, fetching and parsing and fetching and parsing through this whole module graph.

Then the second phase, once you have your whole module graph figured out, the second phase is linking them together, so finding places in memory for exports and then connecting both the export statement and the import statement to that same place in memory when they are referring to the same thing. Then you actually fill in the values that will be in those variables.

The second step, that linking step is called instantiation, and the third step is called evaluation. That's where you're actually evaluating the code that's outside the functions in the module. So figuring out how to make WebAssembly fit with this, but there are certain ways in which it can't quite, so figuring out what to do in those cases - that is a little bit tricky, but so far we have some good plans in place for how to make that work.

**Jerod Santo:** I can tell that you're deep in the weeds on this work, so we very much appreciate your efforts put in, because as you get these things ironed out and formalized, and then the implementation with Wasm... I mean, it affects everybody, because so many languages potentially can integrate.

Where are you looking at in terms of progress and what we can expect this work to be done, and you can finally go out and -- I don't know if you have a drink, or celebrate your success...? \[laughter\]

**Lin Clark:** It's always hard to say with standards, it's hard to give dates. We've been making good progress... I presented to the WebAssembly CG two weeks ago, basically explaining how exports are going to work in every kind of case - when you're importing JavaScript functions into WebAssembly, when you're exporting from WebAssembly to JavaScript, when you have cycles between the different things, and everybody seemed to be on board for the design, so now the next step is doing a rough draft of the spec text and making sure that everybody from the different groups is on board for that spec text.

\[00:44:11.19\] So I'll be going to TC39 in May to talk to them - they're the standards body in charge of JavaScript - and working with them to make sure that everything that we're doing makes sense from their perspective as well.

Once we've gotten everybody on board for the decisions and we have some spec text, we should be able to push it through... We also need to have some people implementing it, and I just saw on Twitter a few days ago that JavaScriptCore (JSC), the JavaScript engine that is in WebKit - they have already started playing around with an implementation, and we've had interest from other people, like folks on the Chrome team, folks in Node, so I think we're gonna be able to get the implementations done pretty quickly, too. So I think that it should be moving along at a nice pace.

**Jerod Santo:** Let's zoom back out again - we were talking about the low-level grinding that you and many other people are doing in order to push these things forward... Let's look at it from Firefox perspective, perhaps. All this goal for Rust to become a web language, all the progress on WebAssembly - what does this mean for Firefox?

**Lin Clark:** Well, Rust in particular means multiple things for Firefox. We're using Rust - not Rust compiled to WebAssembly, but just Rust - in our codebase in Firefox now. Actually, that will be what I'm speaking about at FluentConf in June, about how we're using Rust to make it possible to parallelize different parts of the engine in a fine-grained way without it being dangerous, because you can introduce really dangerous bugs that way, but Rust avoids those bugs. So Rust is helping Firefox in that way.

Once we have people compiling Rust to WebAssembly and using that on the web, WebAssembly is a lot easier for an engine to compile, so it's a lot easier for the VM that's in the browser to do a good job of making the code run fast when it's in WebAssembly than when it's in JavaScript... Because with JavaScript the engine has to make a lot of guesses about where it can cut corners with the code, and those guesses sometimes work out, sometimes they don't... It can be really unpredictable, and you have to have some really clever people working on the engine, figuring out what shortcuts they can take that won't negatively impact too many people's code.

So it will be nice for us if more code is in WebAssembly on the web, it will be nice that we don't have to do quite as many hacks and quite as many shortcuts in the JavaScript engine.

**Jerod Santo:** Do you see a world - maybe 3-5 years from now, maybe longer - where WebAssembly is powering a significant portion of the web, not similar to WordPress, but you know, WordPress powers 25% of the websites; or jQuery was a ridiculous amount of times -- you know, of the percentage of websites you can go to and open your console up and find the dollar sign defined as the jQuery constant. What about WebAssembly? If everything goes well, do you think it will be a niche where only things like games and high-powered rendering video or what have you needs WebAssembly, or do you think it will reach out and have common use amongst (we'll just call it) regular websites?

**Lin Clark:** I think that we are going to see it spreading. Once it gets into a few key pieces of software, I think we'll see it spreading pretty quickly. What we think is gonna happen is the frameworks will start building WebAssembly components within the framework, that everyone will be using them and nobody will realize that they're using WebAssembly, because they have a JavaScript interface to interact with that WebAssembly.

\[00:48:01.22\] I don't know if you've seen the EmberConf keynote that Yehuda Katz and Tom Dale gave maybe a month ago... They talked about their work to using WebAssembly in the Glimmer engine, and we've talked with the React team about how they might use WebAssembly; there are other frameworks I know that are looking at how they can use WebAssembly for parts of their framework that don't really need to be in JavaScript and where they could see performance gains from switching to something like WebAssembly.

**Jerod Santo:** We just had a show about Ember last week with Chad Hietala... Adam, did we talk about that? I mean, he talked about Glimmer quite a bit, but this doesn't ring a bell.

**Adam Stacoviak:** I don't recall us talking at all about WebAssembly.

**Jerod Santo:** I don't either. He held out on us. So you mentioned Fluent, and you have a keynote coming up at Fluent, and hey, what do you say, we'll be at Fluent! Adam, why don't you tell the good people about our role with Fluent this June.

**Adam Stacoviak:** Absolutely. So we have a fun working relationship with O'Reilly and we always enjoy working with them, and we're actually going to be there in the hallways, kind of doing the hallway track. We've got Kevin Ball going, also known on JS Party and the fun stuff he's done for foundations, and then Tim Smith is a recent hire for us, senior producer here at Changelog, and we're sending both of them over to FluentConf to kind of do the hallway track, get some interviews, we're sending a video camera... Doing some fun stuff. So we're trying to do more stuff for our YouTube channel, and just different stuff we haven't really had a chance to do yet. Kevin and Tim are gonna go to Fluent, and at the same time Velocity, because they're technically the same conference, in the same venue, but at the same time... And just sort of peel back the layer of the hallway track, talking to people, talking to some of the speakers obviously, maybe Cory Doctorow might get on camera with us... We'll see.

**Jerod Santo:** Will they have swag? Will they have stickers for people?

**Adam Stacoviak:** I can't see why not, I mean... I don't know how much it makes sense for them to carry, but maybe a few... It might be better to take names and numbers and addresses and say "Hey, we'll ship you something."

**Jerod Santo:** Yeah, like get these guys some stickers to hand out...

**Adam Stacoviak:** Well, stickers for sure, but T-shirts - we'll see. Stickers - definitely easy; we're 100% on that for sure.

**Jerod Santo:** Alright, so find the guys with the Changelog T-shirts, Tim and Kevin Ball; he likes to go by kball, I hear...

**Adam Stacoviak:** That's right, kball.

**Jerod Santo:** ...and hit 'em up for stickers at least, and hey, Adam's talking about T-shirts, so...

**Adam Stacoviak:** And check the show notes too if you're planning to go to FluentConf or you'd like to go. We have a coupon code for 20% off. The coupon is "changelog", and the URL will be in the show notes. It's kind of a cryptic one, it's one of those special ones, so use that. I think that might actually automatically get you the 20% off, but use the code "changelog" and you'll see a 20% off on most passes.

**Jerod Santo:** Very cool. Lin, you are keynoting, as you mentioned, and your talk is called The Parallel Future of the Browser. Summarize it for us once again; I know you've mentioned a little bit, but it sounds like a lot of the stuff you've been working on, and a lot of the stuff Mozilla is working on about trying to make Firefox better, faster, stronger...

**Lin Clark:** Yes, and in that talk I talk about not just what Firefox has to do, but what all browsers have to do to get faster over the next 10-20 years, because if you look at the direction that hardware is going, hardware is splitting up into multiple cores. You have these multicore architectures, and I know that you've had other people on the show to talk about this...

Basically, before we would get speed-ups at a certain rate, it looks like that rate of speed-ups and processors, like how fast a computer can work, at least when you have one ship - it looks like that has a limit. We're only going to be able to make the circuits that are in there so small before they start burning up. So the chip manufacturers have started splitting up into multiple cores, so that they can have a core-- because you can think of a core as kind of like a brain. If you have one brain working on a problem, it can only go so fast; if you have two brains or four brains working on that same problem, it can go faster, but you can have some costs of communicating/coordinating between these different brains.

\[00:52:15.13\] One way that people have gotten around that cost of communicating between the different brains is just have them work on pretty separate tasks. It's called core-screened parallelism. You might have one of the cores working on figuring out what to show inside the browser window, and another core working on the Chrome, the address bar or the scroll, or all of that stuff. And then another core working on whatever is in the background tab. That can lead to under-utilization of the cores. It can mean that you're leaving some of those cores without work to do, if the background tab isn't doing anything, if the address bar isn't changing.

What we wanna do, and what we have been doing over the past year and a half or so, is introducing fine-grained parallelism into the browser, making it possible to split up work not just at that cores level of one tab goes to one core and another tab goes to another, but actually having the work that happens inside a single tab be split up across different cores. So that's what I am talking about in this talk, it's exactly how we're doing that and why we're doing it, and also how application code could then also be split up among these different cores.

**Adam Stacoviak:** Is that kind of where Firefox is heading now? What are some of the things that Firefox has already done to get there that you'll sort of say "Hey, here's a great example!"?

**Lin Clark:** Yeah, so Firefox has really been looking at this. We released Firefox Quantum in November, and one of the big parts of that project was figuring out how we do this and actually taking some of the components from Servo, which was our web engine where we were exploring this, and moving them into Firefox. So one of these is Stylo, the CSS engine, where you can take all the different elements that you have on a page and split them up - split up figuring out which styles apply to those different elements across the different cores, so that you can speed up the CSS style computation, one part of rendering a web page.

You can speed that up by however many cores you have, because it's splitting up the work in a really efficient way across those different cores, and that means that as chip manufacturers add more and more cores, we'll see automatic speed-ups in Firefox for CSS style computation.

Another part of project Quantum is this thing called WebRender. When you're rendering a web page, you need to figure out the plan for what is gonna show up on the screen, that is parsing the HTML into DOM nodes and then figuring out the style for those, and then figuring out the measurements for where those things should go on the page (that's called layout). Once you have that plan in place, you actually need to paint it to the screen, you actually need to paint pixels.

\[00:55:06.13\] So a lot of browsers, including us, have split things up into this compositing stage -- or rather a painting stage and then a compositing stage, where they create layers, and then basically put the layers together and take a picture of them. And what we're doing with WebRender is actually removing the distinction between those two, and making the work a lot more parallel by moving it to the graphics processing unit (GPU).

**Adam Stacoviak:** That's a popular thing happening nowadays too, especially as you talk about all the stuff happening with GPUs, and just the acceleration things happening on that front around NVIDIA and different hardware I've heard about. I'm not fluent in it, but I've heard a lot about GPU acceleration these days.

**Lin Clark:** One of the neat things about GPU is that you have a whole bunch of different cores. With a CPU, you usually have maybe two or four or six or eight; you don't have that many. With a GPU you have hundreds or thousands. But they can't really do things too independently from each other. A CPU - the different cores are like different brains; with a GPU, they all have to be basically working on the same task, so you need to figure out how to tell them to do things in a way that's efficient... So that's what WebRender really does - it makes it possible for us to give instructions to the GPU and pass off all of this work to the GPU and do it in an efficient way.

**Adam Stacoviak:** This isn't the roadmap for this year for Servo, right?

**Lin Clark:** Well, it's already landed in Servo; it is in the roadmap for Firefox this year.

**Jerod Santo:** For episodes on Servo, check out changelog.com/228. And for more on Moore's Law and high-performance computing, which is I think what perhaps Lin referenced there, episode \#284, Todd Gamblin. That was a recent favorite of a few of our listeners. So... Just cross-promoting over here. Just doing my job.

**Adam Stacoviak:** I love it.

**Jerod Santo:** Lin, it sounds like a great talk. Everybody, go to Fluent; use our code, "changelog", say hi to Lin and attend her keynote... Do you have anything else that you'd like to chat about before we call this a wrap?

**Lin Clark:** I think that we covered everything, and so many things. I'm excited about all of the things that we talked about today.

**Adam Stacoviak:** Well, thank you so much Lin for your time. It was awesome to have you on the show.

**Lin Clark:** Thank you so much for having me.
