**Natalie Pistunovich:** Welcome to another episode of Go Time. My name is Natalie, I'm very happy to be back from my European vacation, which does not mean a vacation that took place in Europe, but a vacation that was long, and throughout the entire summer... And Go Time is great, because today Johnny and Kris are joining me to ask for everybody to share their thoughts, but also to ask V. and about prototyping. How's everyone doing?

**Kris Brandow:** I'm doing well. Did you delete all of your emails upon your return from vacation?

**Natalie Pistunovich:** I never had emails. You know what you can do, like stop accepting emails...? \[laughs\]

**Johnny Boursiquot:** Oh, you can? Please, do share. How? \[laughs\]

**Natalie Pistunovich:** No, I did not do that, but I saw that there's an option that you can block that on Gmail, just rejecting... Same as when your inbox is full.

**Kris Brandow:** Return to sender. Okay.

**Johnny Boursiquot:** Return to sender. Nice, nice.

**Natalie Pistunovich:** Your email would be archived and recycled. Don't write again, don't follow up... \[laughs\]

**Kris Brandow:** We \[00:04:09.19\] compost our emails when we return from vacation, because it's sustainable.

**Johnny Boursiquot:** Every bite carefully selected...

**Natalie Pistunovich:** In the pre-show part we were making jokes about my cat, Java, who was named after the coffee beans... But actually, as we said, she's living up to her name, being not very efficient as a cat, let's say... \[laughter\]

**Johnny Boursiquot:** Shots fired...

**V Körbes:** You were asking Natalie "Why isn't your cat named Go? Why is your cat named Java?" And then Natalie left to lock the cat away, because it's a Go podcast so the cat can't participates. It's just illegal.

**Kris Brandow:** I mean, the cat was trying very hard to participate...

**Natalie Pistunovich:** Yeah. So yeah, Java for prototyping? Yes? No? What do we think about that? If we talk about prototyping in this episode, and we already talked about Java. Let's not start with the obvious, that is Go. Is Java a good language for prototyping? Does anybody here prototype in Java?

**V Körbes:** I used Java the last time five years ago, for about three months... And it was not. So that's my assessment.

**Kris Brandow:** I feel like maybe the JVM - like, if you're using some Clojure, some Kotlin, maybe some Scala... Those seem like languages that are fun to prototype in. But Java itself? I don't know about that.

**Johnny Boursiquot:** Well, perhaps you should define what you need out of a language, any language, in order for it to be deemed prototype-worthy.

**Natalie Pistunovich:** What would you look at in a language for that?

**Johnny Boursiquot:** Speed, don't hinder me, don't get in my way, don't force me to define types ahead of time... Because I'm just spitballing; I'm experimenting. I don't know yet what my types are gonna be. I just want to munge some data and

see what pops out.

**Kris Brandow:** So dynamic typing, as opposed to static typing. That's what you kind of want to do when you're doing the prototyping thought process, and just kind of spitting some code out onto the page.

**Johnny Boursiquot:** Yeah. \[00:06:13.29\] types yet.

**V Körbes:** I think, going back to Java, one thing is something that makes it easier to prototype is using an environment that is not very verbose, or that does not require a lot of scaffolding beforehand... Because to me, that was the problem, going back to Java - that it needed too much setup before I could get to the part that I wanted.

**Kris Brandow:** I think too having some sort of like repl environment, or just an environment that's fast to reload, or fast to see your changes happen. Because even if you have like a language that's dynamically typed, if it takes five minutes to compile, then prototyping is going to be a much slower process than it might be if you have quick feedback loops... Which is the thing you're aiming for, more or less, with prototyping; you just kind of want to get something down on the page and see if it works, and then iterate from there.

**Johnny Boursiquot:** I asked the internet, and... I don't know, people seem to think Python is the \[00:07:18.28\] bee's knees for prototyping. And if we're gonna do that, then let's toss Ruby in there, too.

**Natalie Pistunovich:** Yeah.

**Kris Brandow:** Ruby, PHP, Python...

**Natalie Pistunovich:** Ruby and Python showed up in the answers to a tweet I had about this... I was not surprised to find Python there, but Ruby was a surprise.

**Kris Brandow:** I feel like PHP is a pretty decent language to do some prototyping in. Maybe not the best, but...

**Johnny Boursiquot:** Nothing against PHP, but I don't like -- like, does PHP have a repl?

**Kris Brandow:** Yeah.

**Johnny Boursiquot:** I think having a repl is also kind of like -- if you can launch a repl, I'd toss that in the quick prototyping, sort of...

**Kris Brandow:** I believe that there's a repl environment. I guess the nature of PHP too is that just like page loads, so it's like, I don't know... Just kind of Cmd+R that, or Ctrl+R, refresh the page, boom... But I do think that -- I haven't read PHP in a very long time, but I do feel like there's probably some sort of repl-like environment.

**Johnny Boursiquot:** If I have to refresh the page, I lose my context.

**V Körbes:** What does repl mean?

**Kris Brandow:** Read, evaluate, print, loop.

**V Körbes:** Huh. Okay.

**Johnny Boursiquot:** if I have to refresh the page, I lose my context.

**Kris Brandow:** True.

**Johnny Boursiquot:** I need a running history, I need to reference a variable I declared, you know, five buffers ago, or something.

**Kris Brandow:** There is in fact an interactive shell for PHP.

**Johnny Boursiquot:** There is. Okay.

**Kris Brandow:** There's a repl you can have.

**Johnny Boursiquot:** Okay.

**Kris Brandow:** But I think any of these dynamic, webby languages are pretty good for prototyping. Definitely Python, definitely Ruby... I would throw Clojure in there as well, even though it runs on the JVM... Because, once again, it's very repl-like dynamic typing... And it's a Lisp. And Lisps are nice for prototyping and roughing stuff out.

**Johnny Boursiquot:** Nearly everything except JavaScript. Do we all hate JavaScript for prototyping? \[laughs\] V, you look like you wanna jump in and say something...

**V Körbes:** Yeah, is it time for polemic opinions yet? \[laughter\]

**Johnny Boursiquot:** Please, drop them in.

**V Körbes:** Yeah, so in the beginning I was just thinking about languages, and I kind of forgot everything I worked on in the past few years... Because you know, bad memory, I had too much coffee today... But then y'all started talking about repl and whatever the hell that is; I'm too old for those new acronyms... So anyway, that reminded me that I used to work at developer experience stuff, which I had completely forgotten, for whatever reason... And a lot of the stuff that I used to give talks about was basically how it is important to have a fast feedback loop; and the language in the end doesn't really matter. What matters is like you need to have a pre-prototype setup that works in your environment. So let's say "What does hello world look like for your setup?" And then you need to have a system that's basically watching your code and rebuilding and like refreshing, and doing that faster than you can think about it.

So I was working \[00:10:14.27\] before, the company has been bought by Docker; I don't know if anybody's still working on it, probably not... But that's something that we used to do, was just get that feedback loop super-fast. And basically, you would write a line of code, press Save, and then your changes are already there and already live. And I think to me that was a lot more important to make developers happy with fast iteration than the language itself; because the setup problem is always going to come up anyway. Sometimes you have Kubernetes, or sometimes you have, I don't know, Cloud Foundry, or whatever the hell you're using, and you need to be able to automate that beforehand. And then you need to integrate that with your systems, which also needs to be a thing beforehand... And when you get to actual prototyping, I do think that fast iteration velocity is the biggest defining factor to make it less frustrating to prototype things. This was supposed to be polemic; you guys are supposed to say "No, shut up. Go is good. Everything else is bad. Go away. You're wearing a Java people's shirt, shup up." \[laughter\]

**Natalie Pistunovich:** Nobody sees your shirt from the listeners, so... It's an important data point. Thanks for sharing it.

**V Körbes:** Oh, yeah, it's a VMware -- can you see this? Here, it's a VMware T-shirt, so \[00:11:27.16\]

**Johnny Boursiquot:** I mean, I think we're all pragmatic on this call; we've been around long enough to know there is no such thing as the perfect tool...

**V Körbes:** No, no, wait... A podcast where everybody agrees is no fun. So do I need to contradict myself and pick a fight with all of you because you agreed with me before now?

**Natalie Pistunovich:** We're going to have to allocate an opinion for each one, and just - like a debate; you're gonna have to just go with the opinion that you're assigned. But we can zoom in a little bit, right? We can say one time -- we will talk soon about doing a prototype for something related to work, and then it has to maybe fit into a larger thing... But now let's first focus - what if you prototype for fun? You went to a conference, you heard about the cool database, this cool whatever, and you want to convince your teammates to even try it on your hacking day, or something. So like individual prototyping. What's different in this specific scenario, when we zoom in on this one?

**Kris Brandow:** I don't know if that's so much prototyping as exploration of a new thing... But I definitely think if you want to demo using a new database, or a new technology, having a ready to go project... So like don't try and prototype something new in an area you don't understand. So if you have something you've built before in another language, or prototyped in another language, prototyping that same thing in your new language I think is a pretty good idea, and will help you move faster and kind of acquire more of the knowledge around that new language.

**Natalie Pistunovich:** You said an interesting thing, that differentiation between prototyping and exploration. Maybe we zoom in on the definition; I don't know if it's zooming in or out. Let's for a second define what do we mean with prototyping. What do you have in mind when you say that?

**Kris Brandow:** When I think of prototyping, I think I'm trying to rough out a specific idea. Like, there's something I know I want to build, and I aim toward that, and I start doing things to get myself there. I think exploration is more kind of just a wandering around, going about, figuring out how stuff works... When you want to learn a new language, I think that is an exploratory thing. Like, sure you can have a project, you try \[00:13:48.17\] but if it doesn't work, you can go do something else; figure out the kind of area of the space that you're operating within.

I think with prototyping though, you're like "I want to build this specific thing. I want to build a to-do list \[00:14:02.20\] or whatever. Those are trivial examples, but... An email client, an operating system, whatever it is you want to build; you're like "I want to prototype this specific area, I have a specific idea of what I'm trying to create." So I think like that's it for me, like kind of known quantities, versus kind of an unknown quantity.

**Natalie Pistunovich:** Interesting that you say the -- two things you said for prototyping versus exploration. One is when you have a specific idea that you want to implement, versus thinking around. And then - what was the second thing that you described, that for you is the big difference between prototyping and exploration?

**Kris Brandow:** So prototyping is like you have a known, defined quantity of what you're trying to do, and exploration is just kind of wandering around, trying to acquire new knowledge and information, perhaps discover something new. I guess they're both forms of discovery, but the success criteria for them is quite different... And I think that means that the types of tooling and kind of environment you want for each of them is also quite different.

**Natalie Pistunovich:** Okay, fair. Johnny, do you have a differentiation between exploration and prototyping? Or would you say it's pretty much the same for you?

**Johnny Boursiquot:** I don't know, Kris is a linguist, so he's gonna slice hairs here... \[laughs\] He's gonna split hairs here. But for me, they're kind of the same thing. I mean, right now I'm in the middle of doing some prototyping, aka proof of concept, aka whatever kind of work, whereby I'm using Go to integrate and to try and do an experiment with a third party system to basically explore the edges of it, see whether it's going to suit my needs or not. So to me, that is prototyping. So I'm not learning a programming language, I'm learning a system; I'm learning an API, I'm learning a product in this case. So that means I need to build something. So I have a very specific set of things that I'm trying to accomplish, and I use the best tool I know how to sort of experiment. In that case - I use Go every day, so to me, having to define types before I get to use them, I do it so often that it doesn't slow me, it doesn't hinder me in any way. If I was learning Go, then I'd have to spend a bit more time trying to understand the type system, trying to understand the quirks, the do's and don'ts and all that stuff, which to me is different. So basically I'm going on site to do a job, and I'm bringing my tools; I'm bringing my hammer, I'm bringing my saws, I'm bringing my whatever, right? Like, I'm not learning how to use a saw, or I'm not learning how to use a hammer on the job. I'm at a job site, trying to accomplish something, if that analogy makes sense.

**Natalie Pistunovich:** V, anything to add, or you take those definitions of prototyping versus exploration?

**V Körbes:** Yeah, I think there's a distinction between learning to use a tool, and learning to use a tool you already know in a different way. The baseline of how much stuff you need to set up beforehand is going to be very different. Because if you're learning to use a different tool, you don't need to be productive, you're just learning to speak a language. If you're trying to use a tool you already know in order to accomplish something, then you're gonna have some expectations for yourself, in terms of what you manage to accomplish or not.

So what I was saying before is that, like, me when I'm trying to play with something new, the first thing I do, I want to make sure it runs on all my computers, because who knows if I'm going to be here, or there, or whatever, on any given day... So I have an expectation that whatever I'm working on needs to run on every computer.

Another thing is, like I was saying before, I don't want to have to reload stuff by hand, because that just feels silly; it just takes my concentration away. So I don't want to have to like docker whatever, something-something, kubectl, bla, bla, bla, to rerun the thing I wanted. I want it to just like refresh instantly if I'm experimenting with a new system.

For example, the other day I was learning some stuff for like \[00:18:07.03\] programming in DOS... And the thing is, I couldn't figure out a way to make DOS restart itself every time I did the \[00:18:15.17\] and that just drove me insane. I was like "So you're telling me every new thing I type here, I'm gonna have to stop thinking about that, and restart the thing, etc etc.?"

So there's an expectation of productivity, because I was trying to do something I already know to achieve an objective. But if I was just like "Oh, how do I--" Let's say I'm learning generics in Go, and I just want to see what does this do. Then I wouldn't have an expectation of productivity. So to me this difference between whatever the two words were - exploration and what? ...for me, the difference is like the expectation you have for your own what you're going to accomplish in that session.

**Natalie Pistunovich:** Cool. Okay, interesting. It almost feels like this is what would be the first question of the episode about prototyping. But I'm glad we got there. So now that we have the goal of playing with something, not trying new tools, but trying to either explore new features of the tool, but also reach a specific objective... Does it change your answer to the question "What requirements would you have from a language?" Or is it still simple to do the feedback loop? Is it still same for types, and so on, so kind of more spontaneous and less \[00:19:27.12\]

**Johnny Boursiquot:** It's whatever your fastest with, right? I know some people who write Java, and they can use Java to prototype like crazy. They're fast, they know how to get things set up, they have project templates, they can fire it off... They know how to be productive with it... Which for me is perhaps the most important trait; whatever tool you're using, basically does the tool not get in your way? Are you proficient enough that whatever tool you're using, you can get done what you're getting done without fighting the tool itself? So whatever language that is, whether it's Java, JavaScript, Ruby, Python, whatever, Lisp... If that's your jam, and you can be productive, and you can get things done quickly, then that's your tool. For me, I use Go everyday, so Go is my omni-tool, and I use it for all the things.

**Kris Brandow:** Yeah. I guess I would add to that, if there's only one language you're fluent in, then that is the language that is best for prototyping for you. If there are multiple languages that you are fluent in, then that's I think when you get into more of trade-offs between different things, depending on the type of mindset that you want to be in at a particular time. If you're building a system that needs to do low-level access to hardware, Python -- if you're familiar with Python and Rust, Rust is probably going to be a bit easier for you to use there than Python would be. Or maybe even C. If you're gonna go program an Arduino, there are things like the Python SDKs and libraries that you can use... But if you understand C at the same level you understand Python, then C would probably be a better fit there. But if you don't know C, and you're fluent in Python, then you should just use Python, because that's what you're fluent in.

So I think the important mark there is how fluent are you in the particular languages that you're assessing. Because if the answer is not fluent, then you're going to have a rough time prototyping in that language, even if it's "a good fit" for prototyping the particular thing you want to prototype.

**V Körbes:** Counterpoint. I think one thing to take into consideration is that -- for example, speaking of human languages... All humans talk about the same stuff across the world, basically. You just have to figure out what is the right words to say this thing in, I don't know, Chinese. But I'm sure everybody in China talks about dinner, just as we do over here. So that's a very bad metaphor, it's so bad that I'm proud of it...

**Natalie Pistunovich:** Fun fact... In Mandarin, when you say "Are you okay?" or "Did you eat?", you ask "Did you eat rice?" End of fun fact.

**V Körbes:** Thank you, Natalie, for sharing that. \[laughter\] But what I wanted to say is that sometimes you need to choose a language not for your fluency with it, but for what it can do out of the box. For example, for me C is a read language. I often read stuff in C, but I never write it. And the other day I was gonna try to write something and I realized, "I don't have all the string facilities in C out of the box that I have with Go." And I'm sure all the C programmers listening to this are gonna be "Oh, you should do this, you should do that. It's easy." And yeah, sure, but I didn't know that off the top of my mind, so I couldn't do all the strings stuff in C that I was used to be able to do in Go. So that was very frustrating to me. So in that case, maybe I should use a language that has more built-in stuff out of the box to do the thing that I want to do, which is what Kris was saying, like Python versus C for low-level stuff... So that's one thing.

Another thing is, for example the other day I was helping someone who's learning to program how to do stuff in - what is that thing called...? There's a programming environment that is very cute, and you can make like little dinosaurs walk around, and you drag and drop the if-else blocks together... Anybody remember the name of that?

**Natalie Pistunovich:** Scratch?

**V Körbes:** Yeah, that. So I had never used Scratch before, but it has all the primitives and built-ins for what my friend was trying to do. And because of the thing that I was saying, that whatever language you speak, you kind of always try to say the same things, I could very easily google how to do this or that in Scratch. So I was just googling things; I was not as fast as I would have been in Go, but I could get the things done. But it was just so much easier to get to the objective, because all the primitives were there. So I need a function to move my dinosaur from here to there? There was a primitive already built-in on Scratch. I need a thing to make a little beepy sound, or whatever? I had the primitive there. So in that case, I was not fluent at all in the language, but because the language had so much to offer towards my objective, then it became -- if I could have done that in Go, it probably would have been more work than just figuring out how to do things in Scratch.

**Natalie Pistunovich:** It's interesting, you're moving a little bit from the ease of yourself as the person who's doing that, which is like your fast at this language, or you need to pre-plan versus not, into a little bit the kind of ecosystem around that. So it has the libraries, or whatever representations that you find, of things. How about something like the other parts of the puzzle, like "Is the team that you're working with - will they be happy to contribute to that, or adopt it? And does it fit into the tech stack that whatever project this is being prototyped to be part of?" Are these considerations relevant, or is this as far advanced as a --

**V Körbes:** No, if you're a good enough rockstar, you don't need a team. The team can get lost. \[laughter\]

**Natalie Pistunovich:** The \[00:25:11.05\]

**Johnny Boursiquot:** Are you a 10x developer, V?

**Natalie Pistunovich:** 11X.

**V Körbes:** I'm a product manager. I don't write code.

**Kris Brandow:** The 10x developer is now gone. There was an article that got written on it. We had that interview with the people on Changelog. There's no more 10x developers. We stopped making those a couple of decades ago.

**Johnny Boursiquot:** Oh.

**V Körbes:** Did we go up to 11? \[laughter\]

**Kris Brandow:** No, now that we require them all to be over 9000, so... That's a nerdy joke, that some people will get.

**Johnny Boursiquot:** Yes, yes.

**Natalie Pistunovich:** We'll leave the reference in the show notes for those who don't. Do you think of the rest of the stack, from the side of like will it be compatible at all with other tools that you have already in place, and what the preferences are of the other people involved in this? Or is this less of a consideration when it comes to prototyping?

**Kris Brandow:** I think it depends on what prototyping you're doing. Are you prototyping -- I guess this is definitionally the thing. Are you prototyping something just for yourself, or are you prototyping something as part of a team? So I think it's a lot of the same dynamics that I said before about like fluency, and appropriateness of the language for the fit... I think your point's a really good bit of nuance on what I said, V, of "Oh, if there's a tool that you're not as fluent in, but the productivity gains you'll get are much higher, then it's probably worth making that trade-off." And I think the same is true of a team, where if there's something that the team doesn't know super-well, but they'll be able to use it in a productive way, then that might be better over a tool or a language that they're already very much established in.

But I think the same general rules apply, of - you know, use the thing that the most people are fluent in, or that you can reasonably get the most number of people fluent in. I think it's even more important to have fluency when you're communicating between people... Because if you are trying to use something new, and no one on the team understands how the thing works, that can be very confusing and eat up a lot of time, of being like "Well, I read this StackOverflow post, so we should do it this way." And like "Well, I wrote this Medium article, and it says we should do it this other way."

So having some level of fluency can definitely be helpful there. But I think a lot of the things apply with that added layer of make sure that you can both read and write it rather fluently, or at the same level as everybody else... Because if you write something and someone else that you're prototyping with can't read that code, or doesn't understand it, that can also slow things down quite a bit.

**Johnny Boursiquot:** The only question you should ever ask yourself with regards to technology, or language, or whatever it is, is "Is my prototype going to end up in production?" \[laughs\]

**Kris Brandow:** The answer to that question should always be "No."

**V Körbes:** And it's always yes.

**Johnny Boursiquot:** Yeah, somehow... \[laughter\] Ship it!

**Kris Brandow:** The point of a prototype is to acquire information, so then you can go discard it and build the real thing.

**Johnny Boursiquot:** The business doesn't care. Basically, "Is it something that works?" "Yeah." "I ship it." \[laughs\]

**Kris Brandow:** Yeah... But I feel like it's on us as software people to not let the business do that.

**V Körbes:** I think in my experience when it comes to team setting, the most important part of the earlier stages is to make sure that people are only allowed to do a very tiny amount of things. Like, the bigger the team, the more constraints you need for things to not get out of hand. So for example, you have a developer experience team, they set up the environment, and the first rule you're ever going to find is developers are not allowed to change the environment. The environment's going to be the same for everybody; don't change anything. And that helps people stay in a box, let's say, and not go too crazy, so that things still work in between team members.

And I think -- if we go back to why was Go invented in the first place, if we go read the history, a lot of it was because C++ is too complicated when you're just out of school; people do all kinds of weird stuff. Go has a smaller number of primitives, and you can only mess up so much... And then that was one of the reasons that for Google it was easier to just standardize in a language that is simpler in terms of how much stuff there is. So I think we have a good rule of thumb that if you're prototyping with a team, trying to make the number of moving parts smaller is generally the best.

**Johnny Boursiquot:** Given this is a Go podcast, let us ask the question that most people are dying for us to answer... Is Go a great prototyping tool?

**Kris Brandow:** No! I mean, of course it is...

**Johnny Boursiquot:** That's a biased answer, sir...

**Kris Brandow:** I mean, we're on Go Time. This is a Go podcast. If you asked this question on JS Party, if they said Go, they would also be correct. But they wouldn't say Go.

**Johnny Boursiquot:** Are those folks still having a party over there?

**V Körbes:** I'm gonna put on my PM hat. To prototype what? You can't answer if you don't know what you're working with.

**Natalie Pistunovich:** So what is it good prototyping? What is good to prototype with it?

**V Körbes:** I think that's the right question.

**Kris Brandow:** I mean, it depends... It depends quite a lot. There's Go libraries to do basically anything you can do with a computer, in Go. It's gonna be rough... If you're trying to prototype a bootloader, possible in Go, yes. Should you do it in Go? No. But most other things, I think, reasonable; like, if we're gonna build a backend server, or a network service, or a command line utility, I think those are all good. Even GUI applications now. Like, we have the APIs and the libraries to do that... Even embedded programming, we have TinyGo and other things to be able to do that... Even browser with WASM. The space that Go inhabits is pretty wide. I think the only thing that I would be like "Don't prototype that in Go. Go use something else" would be firmware that is like running on a very constrained thing.

I don't know if I'd really want to be running TinyGo for, once again, my bootloader, or something like that, where you have to be very, very, very, very conscious about how much space you're using and how many resources you have... Because you don't get a lot of control over that in Go, and it might be a little bit tough. But anything else, I think. Even Arduino programming I think is fine.

**V Körbes:** No, I think you're wrong. Go is terrible. I mean, I'm a bit out of the loop here, but Go doesn't have, for example, 3D libraries out of the box. Like, if you're doing any kind of gaming, like a game engine, you don't have that out of the box... You don't have something like -- what is it called? Bootstrap. You don't have a web buttons thingy out of the box in Go. The templating library out of the box... It's like, dude, it's 2023. YAML is the stuff. You don't use Go templates; that's just silly. I mean Go is just -- it's really not all there.

**Johnny Boursiquot:** You're trolling, right? \[laughs\]

**V Körbes:** You're just missing so much stuff.

**Kris Brandow:** We want all the batteries included.

**Natalie Pistunovich:** That's a great way of showing how it can be the right tool for the right mission, but also how it can be the wrong one. That's a great way of making a point.

**V Körbes:** Yeah, I mean, all the AI stuff, like the GPU stuff... Do we have that out of the box in Go? You're gonna have to go hunt down your favorite library and waste a week trying to figure out which one's the best. If we're talking about, for example -- you need some distributed stuff, like maybe an application running on a billion different places at once, then you're going to need all the access control, you're going to need all the encryption stuff... Let's say you're in the government, you're going to need your crypto libraries to be compliant with for example FIPS, and a bunch of regulations like that... You don't have none of that stuff out of the box. So I mean, I think honestly Go is just a really bad language in general, but especially for prototyping.

**Johnny Boursiquot:** You don't have blockchain primitives, you know... You don't have any of the good stuff. \[laughs\]

**V Körbes:** Exactly. Oh, my God.

**Kris Brandow:** I mean, ironically, there are lots of --

**Johnny Boursiquot:** It just lacks so much stuff!

**V Körbes:** To be honest, blockchain is super 2022. Like, we've moved on to like - what, NFTs, and then AI. But still, same point applies.

**Johnny Boursiquot:** Such a bad language... \[laughter\]

**V Körbes:** I've been just really craving getting yelled at on Twitter, so that's what I'm going for...

**Kris Brandow:** I believe you mean x, formerly known as Twitter?

**V Körbes:** You know, I realized today that referring to Twitter as "my ex", air quotes, actually works pretty great. Lik, "Oh, I just shared some racy pictures with my ex." It sounds just as bad. Or "I just told my ex that I've been listening to these depressive songs from 2005..." You know? Is it worse if you're referring to X, or to your ex?

**Johnny Boursiquot:** "My ex is toxic...", you know... It kind of works, too... \[laughter\]

**Natalie Pistunovich:** Uff...

**Kris Brandow:** We're a little off the rails... Just slightly...

**Johnny Boursiquot:** Speaking of Rails...

**Natalie Pistunovich:** No... \[laughter\]

**Johnny Boursiquot:** Natalie's like "No, don't do it."

**Natalie Pistunovich:** So I asked ChatGPT "What are some bad considerations when evaluating a prototyping language?" So five bad considerations would be popularity, over-optimization, complexity, personal bias, and vendor lock-in. What other bad considerations are there?

**Johnny Boursiquot:** Who doesn't want to be locked in?

**Natalie Pistunovich:** The ex. \[laughter\]

**V Körbes:** I don't think lock-in is necessarily a bad thing if you know what you're getting into... It may get you where you want to get a lot faster and a lot easier, and that gives you knowledge, and with that you can make more informed decisions. So especially in the discovery phase, if you can learn what you need to learn faster, that's fine... Before you commit the whole business to whatever you're gonna get locked into.

**Johnny Boursiquot:** Yeah, move quickly.

**Kris Brandow:** And hopefully not break anything.

**V Körbes:** And pay good money to your vendors.

**Johnny Boursiquot:** Yeah. You're just keeping the economy going. That's cool.

**V Körbes:** Exactly.

**Natalie Pistunovich:** How about over-optimization?

**Kris Brandow:** In a prototype?

**Natalie Pistunovich:** Yeah. You can choose the really, really, really right tool for this task that you have, but you can find yourself going down the rabbit hole of over-optimization...So how far down do you go before you stop and say "That's a good enough choice"?

**Johnny Boursiquot:** I mean, unless you're prototyping in order to get an optimal solution, right? The prototype could be "How fast can I make this?" or "How memory-efficient can I make this, or CPU-efficient can I make this?" In which case you're definitely going in the deep end.

**Natalie Pistunovich:** How about personal bias? Using what you like, not what's needed. This is bad.

**Kris Brandow:** I mean, if it's just for a prototype, I don't know if it's bad, right? I guess that's part of it, right? Like, aren't prototypes the places where we should explore a little bit more, try some things out? I mean, if that prototype is gonna wind up in production, then don't do that, but... Prototypes don't belong in production.

**Johnny Boursiquot:** Or you can just climb the ranks high enough that you make your biases mandates, and nobody has to question anything you say. And then you just say "Hey, from now on we're using a hack", and everybody has to transition their codebase from whatever they had - Java, Node, whatever - to now start writing some PHP \[00:36:31.04\]

**Kris Brandow:** I do feel like it's a bit difficult to strike a balance between -- because sometimes it's just like everybody has to write the same language, because we want to have maximum efficiency. And other times, it's like "verybody can write in whatever language they want." That's the promise of microservices, and Docker... And it seems like both of those camps are wrong. There should be room for exploration option, but it seems like for things that are going to wind up in production, there should be that person that's like "No, no, we're going to use the boring tech, the stuff we know well, and we're going to make sure that this thing is going to be able to be run, and maintained, and tested, and we can add new features, and all of that." And I don't think that we should apply that to prototypes. I think that prototypes should be the place where you can venture out, and I think that people at the top, or more senior level engineers should let people explore a bit more... Because you might stumble upon a new technology you didn't think would work for you, and you can transition and move... Because some languages you might be really good at, but maybe we don't all want to be like Facebook and be stuck on PHP in 2023. Or I guess technically they're using \[00:37:41.24\] now, but still...

**V Körbes:** I think something important to be aware of is people who have a lot of experience and are very confident, they tend to make decisions that are really good if everybody else had the experience that they do, but nobody else does. So a lot of people, they reinvent the wheel to a huge extent, which - like, if we had 10 of that person, fine; it to be easy to do. But we don't. And -- I don't know, let's say somebody has a lot of experience with Go, and they think "Oh yeah, Go doesn't have this stuff out of the box, but we can just write our own. This is easy, we can do it. I could do it, so I'm sure my team can do it..." And now they can't; that's going to be a huge rabbit hole you're gonna get stuck in. So just use the other language that has all this stuff out of the box already available.

When talking about personal bias, I think that personal bias is not necessarily about what you like, but about how much you assume that everybody else knows just because you do. Yeah, I'm not sure what's the best way to counter that, but I think extremely smart people have a problem where they think everyone else is as smart as they are, or experienced, or use whatever term you want. And oftentimes, as we can see with Go - Go has a lot less primitives than most languages... And that's a good thing, because that makes it accessible. And I think a personal bias that is particularly dangerous is assuming everybody else can do whatever you personally have experience with.

**Johnny Boursiquot:** That's cultural though, right? Because if I'm really good at articulating myself, I'm really good at convincing other people, even if somebody doesn't have the same experience as I do, I can convince them that "Oh, no, it'll be just fine", right? And you outline a series of things, of reasons why they will be just fine. So if you're not in a team culture or a company culture where dissent is sort of not frowned upon, or where dialogue is welcomed, or questioning everything, good or bad, is welcome, then of course, everybody's gonna be like "Well, not my fight. I don't have a dog in this fight." Sorry for those animal lovers. You know, you don't have any skin in the game for this decision, so you're just gonna go along with it. Or maybe you think you're too low down the totem pole to be able to question something that's coming from three, four, five levels above you, or something like that. So I think it all depends on culture, whatever culture your engineering team has.

**Kris Brandow:** I mean, I think that most, or many - probably most - engineering teams have this problem with kind of what you're saying, Johnny, where there's basically blinders for people that have been around a lot longer, because we have this sense that seniority is based on time. But as you grow in time, you become more invested, and the things that you know, the things that you use - and once again, you're right, people do start believing that "Everybody knows this. I know this, so everybody must know this thing." And I think that's actually where prototyping can have a kind of equalizing advantage if you allow it to, in that anybody can prototype something. Anybody can try building it and be like "Hey, here, take a look at this thing that I built", and therefore you should probably relax the rules around it, because it's a little -- like, prototyping the next feature you want to have in some new, weird thing, and it fails - okay, whatever, you didn't build that feature. But if you instead are being like "Oh, well, we're gonna change the entire database that we use for our whole system", you probably don't want to do that on just a whim. But you also probably don't want to be stuck with the same database forever if it doesn't fit your needs anymore.

So there's this equalization that needs to happen between the people who are senior by time being there, and the new people who come in. I think that prototyping is a space where we can actually make that happen, but I think that's kind of a broader problem with the way that we structure engineering departments. So I don't even know if it's a cultural problem as much as it is an organizational structure problem. Or it could be both. It could very much be both.

**V Körbes:** Yeah, this reminds me of something that I was thinking not long ago, that sometimes we have an issue when doing things as a team, that we're not aware of the team we have... Because teams change really fast; especially in tech, everybody's changing jobs all the time. You didn't even change your job, but this year you have one team, \[00:42:17.10\] your team is completely different.

I was thinking back to a time when I had a team where basically everybody was a genius, and you could just tell them "Hey, just do this thing", and they would figure it out, and they would go and study the possibilities, blah, blah... But you could give them a one-liner and they would build you the entire thing. But often you don't have that team. Often you have to go talk to people and be like "What is missing here? How much information do I need to tell you to make sure you understand what's needed?" And I'm speaking from a PM point of view, but this applies to all levels, let's say. If you want to prototype something and it works for you, maybe you hand that prototype off to somebody later, and they're gonna have no clue what to do with that, because they just don't have the assumptions that you do, and they won't understand the point you're trying to make when they see that proof of concept, let's say.

But yeah, this is not a prototyping question, it's an environmental, social question, of how we communicate with our teams... But I think especially in a team setting, you have a prototype, the prototype does X, you think the fact that it runs communicates something to other people, but it likely won't communicate everything you think it does... Was this too abstract? Did it make sense?

**Kris Brandow:** No, I think that actually brings up a good counterpoint to what I said earlier about the thing you're most fluent in... Because if the thing you're trying to do with a prototype is communicate things with people, you should choose something you're very much not fluent in, and force yourself to actually document your thinking and your struggles. I feel like people would be more likely to write down comments, and notes, and kind of describe their thinking if they're trying to figure out how to use a new language or something, than they are with something they're familiar with. If you're familiar with, you're like "Oh no, I know this. I don't need to write down what this particular piece of code is doing." But if you're not familiar, you're like "Oh, I want to do this thing", you might jot down a little bit of notes... "This function does X, Y and Z", and then you write it out, and then so the next person who gets it, who might also not have a lot of knowledge or context around it might think "Oh, okay, this function's supposed to be doing X, Y and Z", and they kind of piece things together more easily. So I think that can be like a downside of a lot of fluency, is that you probably are not going to document things as well as you might otherwise.

**V Körbes:** Yeah, it's like you show your colleague like five lines of regular expressions, and you just say "You get it, right?"

**Johnny Boursiquot:** I mean, these days -- I mean, I think even that is gonna become less important. Kris, what you said is less important. I'm calling you out on that right now. Here's why. I can literally go into a foreign codebase, \[00:44:53.21\] open it up in VS Code, highlight the piece of code or pieces of code that I want to understand, and right click and say "Explain with Copilot." \[laughs\] Without knowing anything about whatever it is. Now, I may not understand the domain that the code is working within. You still have to understand what business is this, what problem domain am I in. That's gonna come with time, and regardless of how well documented a piece of code is, you're still gonna have to spend time understanding the business that you're in. But just algorithmically, "Tell me what this code is doing", even though I don't understand the intricacies, the regular expressions, the symbols... I may not need to know anything about that. I can just highlight that code and say "Hey, tell me what this is doing." It will do a pretty darn good job of explaining what the code does. So documentation - I don't know, I think documentation is going to take a hit in the age of AI. Because we're just gonna let AI it.

**Kris Brandow:** I think that's a hot take that I vehemently disagree with... \[laughter\] I think in the age of AI we need more documentation, not less. Like, way more. Because you're having this thing explain this code to you, but that tells you nothing about what the person's intent was. It tells you "This is what this code does", and it can help you understand that. But probably that might not be what the person actually wanted the code to do.

**Johnny Boursiquot:** Then they did it wrong. Because if a machine can tell me exactly what the code is doing, and that's not what the person intended, somebody's wrong.

**Kris Brandow:** Yeah. And it's the machine in this case, because you wrote a bug. Like, you wrote the thing wrong... Yes, you've written it wrong. If you have documentation saying "This is what I meant it to do", then the person would look at it and be like "Oh, this isn't doing the thing it's supposed to be doing. Let's go figure that out." If you never wrote that, then the thing's gonna tell you "This is what this thing does", and you're like "Okay, but how do I know if that's right or wrong?" Like, yes, AI is very helpful; these algorithms and models and all that are very helpful. It is a tool to help enhance your understanding. But they don't replace the underlying need to have the actual understanding exist. You need to write that down somewhere. And I think the more that we do things with AI, the more that we depend on AI to explain things to us, the harder it's going to be for us to actually understand things. And it has a significant error rate in what it tells you. And I know we call it hallucination. It's not really hallucinating... It's just -- it's a predictive thing. You're using a predictive system. And most of the time, we only use predictive systems when we have to. You could have a hash map that is 99.99% correct, but I don't I would not want to use that hash map if I have one that's 100% correct. If 1 out of 10,000 inserts it into this hash map is going to get lost, I don't really want to use that. I would prefer to use one that's going to make sure it doesn't lose the stuff I put into it.

**Johnny Boursiquot:** It depends on my tolerance, though. It's my tolerance. Like, what do I have tolerance for? If that 0,01% cost me $1,000, but 99.99% of the time it's generating 100 million, I don't care about that 0,01%.

**Kris Brandow:** That is true, but in this case that's not the -- like, we're talking about "Should I have written down documentation?" versus "Should I have the AI do it for me?" The cost of having the AI do it for you is far higher than you just writing down what you were thinking. a) Because if you did write a bug, you can find it.

**Johnny Boursiquot:** We disagree there... \[laughs\]

**V Körbes:** I think the main issue with AI is that it's always going to be one layer of abstraction lower than the current frontier. So for example, you can have AI that can accurately describe with 100% certainty what any bit of assembly code does, of machine code. So let's say we had that in, I don't know, the early 90s. So any bit of machine code, the AI can 100% tell you what it does, 100% correct, 100% of the time. Okay, that's good. But then the industry is going to move to microservices, and suddenly, individual instructions are worthless. What's in play is the interactions between multiple separate bits of computation, let's say... And then the AI is not going to be able to describe that correctly until we can, as humans. Because it's going to learn from us, it's not going to teach us. We need to generate knowledge first, and then the AI learns from it.

And then let's say one day AI learns to do that, and it can describe those interactions perfectly. Now let's say, okay, I'm working on a system, we have 3,000 VMs across the world, there's firewall rules that are absolutely insane to communicate, and like service meshes and all that stuff... Until we can document that, AI is not going to figure it out. AI is not a system that can create solutions. It can learn solutions and replicate them.

So I'm sure that AI can always help you with whatever solved problem you're dealing with, but it cannot solve the problems as you move up in the complexity of the world, as that complexity expands.

**Kris Brandow:** I think it's also slightly worse than that, because I think we have a tendency to see the output of something that most people see as subjective, like AI, and be like "That thing is correct." Like, if I read a comment, and that comment doesn't match the code, I might be like "Okay, one of these things is incorrect. I'll maybe go talk to the person." But I won't immediately assume which one is correct. Or I might have a slight preference for thinking "Okay, this comment is probably correct, and the code just got shifted in some way..." But if I have some code, and I have the AI explaining it to me, and the AI explains it wrong, I think people will have much more of a deference to the AI system, because they're like "Well, this thing understands something that I clearly don't understand." So even if it's blatantly lying to your face about what the code does, I think people will still be defferent to it and say "I'm not seeing something that this is seeing. It must be correct."

And I think that was actually my point about probabilistic things. I think it's fine to use a probabilistic algorithm to do this if everybody understands that it's probabilistic. But I don't think that's how AI has been sold, and I don't think that's how people subconsciously process what the answer is that AI gives them. Hence the term hallucination in general. Hallucination implies that people believe that the fact that it has given you an answer that turned out to be wrong is a bug in the way the thing works. It's not a bug in the way the thing works, it's a part of the nature of what it is doing. And so I think we've got to be more careful with the whole AI thing. And also, I think you're right, it can't describe things that it hasn't seen before. And there's a lot of effort that goes into describing stuff to AI systems, and getting everything into its context, and these databases, and all of that. But if you're building something new, then it might not be able to tell you about it, or it might get confused by what's there.

**V Körbes:** Just today I was talking to a customer and they were saying "Oh, there was this thing that y'all have listed as a severity \[00:52:11.00\] but firrst it was a severity zero, because we had these other measures in place. And actually upgrading it was bad, because it changed a bunch of other things etc. So it's like, isn't an AI ever gonna figure out that mess? I don't think so. Not until there's a pattern to it, and the whole point is that there was no pattern to it. It was just a crazy thing.

**Natalie Pistunovich:** So it's probabilistics. I want to coil to one research that I don't know if you're familiar with... Cosmic ray bit-flip. Are you all familiar with it?

**Kris Brandow:** Yeah. That's why we have ECC RAM.

**Natalie Pistunovich:** So space radiation can change bits, which will affect memory. Specifically, a research from 2010 estimates that a computer with four gigabytes of commodity RAM has a 96% chance of experiencing a bit-flip within three days. But on memory, we rely blindly.

**Kris Brandow:** I mean, this is why we have error correcting RAM though, right? Like, we saw that problem, and we were like "If you care about RAM being correct all of the time, then you use this other type of RAM."

**Natalie Pistunovich:** Like a second degree verification, but it sounds like something you can do with AI, right? Explain this function. Another AI, explain the same thing. Do you agree?

**Kris Brandow:** Yeah, there's definitely ways to mitigate it. Once again, I'm not saying that we shouldn't use AI here. I'm just saying we should be much more careful about how much deference we give to it. In the same way with RAM too, right? Hard disks are even worse at this, where they will just straight up lie to you about what they've persisted, and if you lose power, you just lose all this data, right? It's like, we have to understand that the systems are not infallible, and we need to understand the boundaries of that infallibility. Once again, writing on a disk - also something you expect to be persistent, but it's not. So yeah, sometimes we can't trust RAM, and often you can't trust the AI. I guess my broader point is - sure, use the AI, but also writing comments about why you put something in a certain way in your prototype is a good idea. Extra levels of defense.

**Johnny Boursiquot:** If I'm prototyping, an AI helper is good enough, I would say. In most cases it is good enough. So that's why I think, rather than a language, a framework, or any particular tool, I think a thought partner, a code completionist, a logic suggester, whatever it is that can take my comment and produce code based on patterns that he has consumed way more than I could possibly in a lifetime, that I can rely on its output for most things. Yes. Should I verify? Yeah, that's part of my productionization process. You should double-check, make sure the algorithm is correct, make sure it's doing the right thing... Especially if I'm doing something mission-critical, or if it's something important, like maybe writing software for medical devices, or something... I don't want somebody's -- you know, \[00:55:04.29\] misfire because I relied solely on AI-generated code. So again, context for that. But for most of the time, I'll prototype with an AI partner, any day.

**Kris Brandow:** I mean, yeah, if you're gonna throw out the code...

**V Körbes:** Wait, Johnny... Knowing what you know about how AIs learn, would you trust an AI to know how to do something if you're trying to do it for the first time? If you're trying to solve a problem that it doesn't look like anybody has addressed before?

**Johnny Boursiquot:** See, but the way I solve problems is I break them up into very small pieces, and I solve those pieces individually. And I think AI is very good at that. You give it a small problem to solve, and then you start building blocks together. That's how I use it today. I don't say "Hey, I have an idea for a service. Generate all the things for me", and it spits it out, I'm like "Great. hip it." \[laughs\] No. I take what it gives me, piece by piece.

**V Körbes:** So what you're saying is you're gonna use AI to generate the sentences, but not to tell the story.

**Johnny Boursiquot:** Right. That's still me. That's still my job.

**Kris Brandow:** What you're describing is a compiler, right? I mean, we call it an AI... It's a compiler. This is exactly what compilers do. It takes something in one language and transforms it into a thing in another language, which is exactly -- like, "I've written a sentence in English. Please turn this into runnable code for me." I mean, we can call it AI, but it's just a compiler.

**V Körbes:** And the other day I wrote a sentence in German, it was wild.

**Kris Brandow:** Technically, translation systems are also compilers. But yeah, I think if you look at it that way, for actually generating the code - okay, yeah, it's just a fancy compiler. It understands some English, it can kick out some nice code at the other end, you check to make sure it's right... I mean, how much of us check the machine code our compiler spit up? Like, after a while it gets good enough where it's probably okay. But I don't know. I don't like all the phrasing around AI. I'm like "What about the actual technologies? Can we talk about those?"

**Natalie Pistunovich:** No. No, no, no. That is a whole new episode. \[laughter\] At this point, I know, I know that cue. This is a cue for...

Jingle: \[00:57:08.11\]

**Natalie Pistunovich:** So AI. Right? Is that an unpopular opinion for anyone?

**Kris Brandow:** Like AI as a whole?

**Johnny Boursiquot:** Kris hates AI. You heard it here, folks, on Go Time.

**Kris Brandow:** I have issues with AI, yes. I have issues with how AI is used, mostly.

**Natalie Pistunovich:** Is that your unpopular opinion for now?

**Kris Brandow:** I don't know if it should be unpopular, but it probably is. I don't know, we use AI to like sentence people to jail, and that's terrible. And we should stop doing that. But in general, I guess one unpopular opinion would be "Stop calling AI and just call it by the underlying technologies that you're using." I think I've said this before. I don't like that we have this hypecycle around AI, and everybody's just taking -- a whole bunch of companies are like "We're using AI now." It's like, you were using algorithms before. You're not doing anything different.

So I think actually calling it by the things that they are, and being much more precise... Apple has been doing this in like their keynotes, where they refuse to say AI... And they'll be like "We're using transformers, or this, or that, or our neural engine", or what have you. I think that's a lot better, because I think it makes it more practical and tangible for people. When you say AI, I think it's a lot easier to get bamboozled or swindled, or trick yourself into thinking that things that are actually impossible are possible because AI...

**Johnny Boursiquot:** That is exactly why the term AI is used. I mean, we all know when we talk about AI, we think of the underlying technology; we're like "Well, okay, yeah, generally speaking AI for the lay people." But we know, so I don't think we should shy away from that. The same way like when the whole serverless thing first came about; we knew there were servers doing stuff in the backend, but to communicate it, to market it, to make money go up and all that, you need a nice, simple term, that everybody can rally around, that tech journalists can write about. You can lump that all behind AI.

**Natalie Pistunovich:** Okay. So more unpopular opinions...?

**V Körbes:** I'm not gonna say this is my opinion, or that I agree with it... I'm just gonna say it's a very unpopular opinion, so that's the disclaimer. Hype is not only good, but necessary. For example, if you go back to the '60s, and you talk about the space race, imagine if the public perception was "Well it's just like a car engine, but the exhaust is very inefficient and it puts out a lot of fire, and then the thing goes up. Like, the Moon is just a rock. You're just gonna bang your engine there..."

**Johnny Boursiquot:** What's a problem? \[laughs\]

**V Körbes:** You need the hype to get people motivated to do things, and to take unreasonable risks that change the status quo. And without the hype and the overhype, and the people over-investing in things that they shouldn't, and so on, things would never change. Look at Germany. Germany is a country where things never changed, and nobody's excited about anything. That is the whole German ethos. Nobody's excited about anything, ever. And it's the same country. People are still using faxes. Look at the bureaucracy of the thing.

I think if you look at why the US is the biggest economy in the world, it's because people get hyped up for anything. Like "Oh, you can now buy water in a Coca Cola can", or whatever that thing is called, and everybody's like "Holy s\*\*t, it's water, man! It's so cool!" I mean, sure, 99% of things are silly, but the 1% of things that actually make change, they come from the same primordial soup of the hype that exists for out of thin air.

So smartphones weren't a thing. Why did they become a thing? Because everybody was like "Yeah, the iPhone, man! It's crazy!" It was not crazy. It was just a silly, tiny computer that didn't do anything special. And then like every big change like that was just a silly little thing that's not any -- I mean, why do we care about computers? Why do we care about Go? It's just the same crap as before, packaged up differently, with a new label and a cute mascot at that time? So yeah, let's hype the bejesus out of everything, and if you can make money in the process, then good for you. And if you can't - well, nobody said life was going to be fair, so...

**Johnny Boursiquot:** Sucks for you. \[laughs\]

**V Körbes:** Was that unpopular? I think I got unpopular a little bit...

**Johnny Boursiquot:** You captured the gist of it, yeah.

**Kris Brandow:** That's unpopular with me...

**Natalie Pistunovich:** You also made a good argument for why does that make sense, so it's gonna be hard to make it unpopular.

**Kris Brandow:** It's gonna be easy to make it unpopular. What?! Like, hype? Hype is terrible. Hype is -- it's like a sugar high. It's like eating candy all the time. The actual change that happens in the world is done through a lot of sustained -- just consistent investment over time, which is the antithesis of hype. You actually can't do long-term investment with hype.

**V Körbes:** If people won't stop eating chocolate, just buy stocks in Nestle, or whatever.

**Natalie Pistunovich:** Johnny, do you have an unpopular opinion?

**Johnny Boursiquot:** I don't know... I don't think it's gonna be unpopular, because I think I made my case for it... But I think any sort of AI tooling or helper is the new prototyping tool. I don't think the language is going to matter anymore. I don't think the frameworks, whatever the tech stacks are - I don't think anything's gonna matter anymore.

**V Körbes:** You're saying because of AI you're now amenable to using Java, or JavaScript? \[laughter\]

**Johnny Boursiquot:** Ooh, you're calling me out here... \[laughter\] I don't know, maybe let me take that back... \[laughter\]

**Natalie Pistunovich:** And I will finish with my unpopular opinion... When traveling, don't go to the restaurants with the highest ranks. Don't go to the restaurants with the lowest ranks as well, but just don't look at the ranks. Go somewhere not popular, and just enter. See how that goes. But don't go to the places that have higher ranks.

**Kris Brandow:** So on the five-star scale, you're like "Go to the 4.6, not the 4.9 or 5."

**Natalie Pistunovich:** Oh, don't look at stars. Don't even look at the restaurant before you go in.

**Kris Brandow:** How do I know if I want the food that they serve?

**V Körbes:** Ask ChatGPT? \[laughter\]

**Johnny Boursiquot:** Yeah, yeah. Let AI decide.

**Natalie Pistunovich:** Thank you for joining the conversation on prototyping. That was interesting, and that was wide, as prototypes sometimes tend to go out of scope; so did this conversation, but it was very interesting. We hope everybody who listened enjoyed. Goodbye.

\[01:04:06.13\]
