**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, autumn?

**Autumn Nash:** I am obsessed with Nushell now.

**Justin Garrison:** Nushell is great. And that is the topic of the show today. Nushell's built a new shell... It's an alternative shell. It's a shell environment. And as someone who has -- like, one of the best tools I have learned in my career is how to use my shell well. And I spend a lot of time in Bash --

**Autumn Nash:** \[laughs\]

**Justin Garrison:** That's not even a joke. I'm serious.

**Autumn Nash:** I know it's not a joke, but the way that you said it and it rhymed, I just can't deal with you...

**Justin Garrison:** It was unintentional poetry... But I learned Bash early on, and I was like "Oh, this is fantastic." I learned Bash scripting -- I used to teach a course internally at my company for Zsh on how to use Zsh well. I actually taught it at a conference... I think it was LISA, or whatever... It's called "Mastering Zsh." You can go find it on my GitHub. It's old now, but it was all like unique things that Zsh could do when people were all in Bash. Like, "No, this is cool. You could do other things." And then I discovered Nushell, probably last year or the year before, and I kept wanting to use it, but there was enough gaps that I'm like "I don't have a use case." And so we go into it in the interview.

**Autumn Nash:** How do you need a use case for a shell? Just do something in it.

**Justin Garrison:** It's a programming language. Devyn and Jakub both said, it's a programming language that has really good interface for being a shell.

**Autumn Nash:** They were so nice. It was fun talking to them.

**Justin Garrison:** Yeah. If you don't listen to them and think like "The community is nice..."

**Autumn Nash:** That's what I'm saying...

**Justin Garrison:** You could just tell, like the vibe of the project isn't too serious, it's not like "Oh, we're doing this..." It's like, "We're building a shell, and it's really cool."

**Autumn Nash:** It's definitely good vibes, which is weird to say that with a shell or any kind of technique, because there's usually like some tech bros that are like old and salty... But they are the opposite of that. I love me a good, welcoming open source community. If there's two different projects and one's got a better community and better documentation, hands down. Because for one, people make it better; more people are going to contribute to it and use it and help you use it. And then do you have more people to write documentation or to help you get through something? Hands down, because there's so many -- like, in programming it's all building blocks, right? There's compute power, there's programming languages, there's so many things that do the same thing, so finding like good error messages, good people, good documentation makes a huge difference.

**Justin Garrison:** Yeah. And the amount of times in my past - which, again, is gonna date me - spent in IRC, trying to learn how I could do --

**Autumn Nash:** It makes me so happy every time we talk about how much of am old man you are... With your Dreamcast hat on.

**Justin Garrison:** \[unintelligible 00:03:29.25\] I'm wearing a Dreamcast hat, and Autumn asked where it was from, and I'm like "If you don't know the Dreamcast, I think we need to not be friends." \[laughs\]

**Autumn Nash:** You were gonna not be my friend...?!

**Justin Garrison:** I love the Dreamcast. The very first system with an internet connection, had four controller ports...

**Autumn Nash:** If I'm still your friend after you don't -- you don't even drink coffee, okay? Like, you don't get to not be my friend over Dreamcast and you don't even drink coffee, dude... Like, don't come at me, bro.

**Justin Garrison:** I almost bought a Dreamcast. I was in Japan for a vacation, and they had Dreamcast in the box. Like, it was like brand new, in the box. I'm like "I remember that." The VMU --

**Autumn Nash:** I don't know if I'm proud of you for not buying it, or if I'm really disappointed that you didn't buy it.

**Justin Garrison:** I had too much stuff already. And all I want to do with most of my old technology is to take it apart and like build new things out of it... So it probably would be a bad idea for me to --

**Autumn Nash:** I really want an old iMac laptop, like the colored ones, like in a box, but then I'm like "What the hell am I going to do with it?", but it's so pretty, and I love them so much.

**Justin Garrison:** Okay, so I've -- not a friend, but someone I know on TikTok that repurposes the old iBooks, the colored iBooks into iPad cases. And you could go buy them from him, and he --

**Autumn Nash:** I don't know if that would make me really happy, because they're pretty, but it would kind of make me sad that they gutted it. I would need to know it came from a good home, and like it was broken beyond repair... Because if it just got gutted to be my iPad case... Like, I'm talking about it like we've got like rescue dogs, and they're computers... I know. But I'd be so sad. I'd be like "They've murdered an iMac for my iPad case." I'd feel so bad. But send it to me, though. I'm gonna be like \[unintelligible 00:05:07.20\] just broken beyond repair, that happened to be pink or teal..."

**Justin Garrison:** SkipRetro. That's his store. SkipRetro. He does a bunch of other stuff, but he mainly started with the iPad, the iBook cases... And he goes into detail on his TikTok of like he finds them on eBay, not being used, sometimes he'll repair them... But usually, it's just he just needs a shell. A lot of times they were systems, and you can give the system -- like the internals, like there's retro Reddit clubs that like you can give that stuff to... But he has other things. He can 3D print one for your phone, so you have a little iBook phone case... It even has stickers from \[unintelligible 00:05:41.12\]

**Autumn Nash:** I need that.

**Justin Garrison:** So yeah, go -- I don't make commission. I've just been following it...

**Autumn Nash:** You're not helping my problems, okay?

**Justin Garrison:** They're not cheap, FYI... Because he needs like $200, $300 just to get an iBook shell. And then he's gonna put a wireless keyboard case into it, he puts like the magnets, and all the other stuff. So it's not a cheap thing. It's not like a "I'm gonna go buy a $30 iPad case."

**Autumn Nash:** That sounds so cool, but also, I just, like... It sounds very expensive.

**Justin Garrison:** But if you roll into a meeting with a tangerine iBook with your iPad inside, you are --

**Autumn Nash:** \[06:17\] It's gotta be pink. Have you seen my hair? Like...

**Justin Garrison:** They never made a pink iBook, okay?

**Autumn Nash:** I thought they did.

**Justin Garrison:** They didn't. A lot of people thought they did.

**Autumn Nash:** I had a teal.

**Justin Garrison:** I think he says like the green is the most rare, because they only made it for like one year, or something like that. He goes deep into it, because he definitely has a lot of nostalgia... More so than I do.

**Autumn Nash:** Are you trying to say he's older than you?

**Justin Garrison:** We're probably the same. He's probably younger than me.

**Autumn Nash:** Oh, Justin...

**Justin Garrison:** But he has all the cool 90's stuff.

**Autumn Nash:** At least you're still fun... Even if you are an old man...

**Justin Garrison:** \[laughs\] Wow. That was such a... Like "Well, it could be worse. You could be just a terrible, not fun person." So anyway... Devyn and Jakub, thank you for joining us. We'll jump into the interview, and we'll talk to you all after.

**Break**: \[07:08\]

**Justin Garrison:** Okay, thank you so much for coming on the show today, Devyn Cairns And Jakub Žádník. I want to start with just what is Nushell?

**Jakub Žádník:** So Nushell - it's a shell, but it's also a programming language. It's kind of a broad project. If you imagine you're typing some shell commands in your shell, and they're getting more and more complex, usually what you do is you pick up Python, or something, to step up the expression ability, and you want to grow your script... So initially, it's kind of aiming to bridge this gap, so you're able to write even complex projects in it. And we're also aiming to be cross-platform. So that's maybe one interesting point for this podcast, because there's a lot of assumptions that shell users have, which don't work on Windows at all. They don't know even have alternatives on Windows. But we're pretty hardcore about keeping as much functionality on Windows and other platforms as possible.

**Justin Garrison:** The comparison there with Python is great, because that is like -- I like the Python REPL. I start IPython, and just start doing things that I normally would. Instead of writing a full script, and then executing, I can just start those things faster. Why not lean into Python? Why build a new shell, in a new language, that isn't something -- like, Python is, again, cross-platform. I could do a lot of the same stuff. What are the goals of Nushell that are different?

**Jakub Žádník:** So in Python, using it as a shell is not very comfortable. You cannot type cd, you don't have environment variables -- but you can manipulate environment variables. But nobody's using Python as a shell.

**Justin Garrison:** Nobody \*should\* be using Python as a shell...

**Devyn Cairns:** Yeah, there's like that one module that you can use, like the command SH module, or whatever it is, but...

**Jakub Žádník:** There's a project that actually somehow is like \[unintelligible 00:12:49.04\] I don't know how to pronounce it... But that actually aims to bring some kind of shell capability into Python. But yeah, we're also quite disciplined that, for example, we don't allow mutability in functions, and we're pretty strict about scoping. So for example - and usually we have pretty strong static analysis, where you can get very good LSP type functionality that in Python you cannot get, because it's a dynamic language. We don't have eval(), like Python or other shell languages, for example. So you cannot kind of modify the engine state while evaluating random strings. So we're also kind of strict on what you can evaluate, and when, and this gives us mostly the very powerful static analysis, and it's kind of disciplined.

**Justin Garrison:** Nushell is built in Rust, right?

**Devyn Cairns:** Right, yeah.

**Justin Garrison:** Is that an artifact because it's Rust? Or is that a design decision because you wanted it that way?

**Devyn Cairns:** No, Rust is sort of an imperative functional kind of language, so you've got the ability to do sort of anything. Rust can even do like low-level stuff where you can write code that's almost like C. So that's not really like a design decision that's specific to Rust. I think maybe some of it is a little bit influenced by, but there's also a lot of other influences in Nushell, like Haskell, and Ruby, and... Myself, I'm quite new to the project, but I just was so excited by it that I just started plugging stuff in... But I think part of the goal of it is just so that you can write scripts in a programming language that is -- you know, we say in the guide "Think of Nu like a compiled language." It's not really, it's an interpreted language, but we have type checking, and we have some things that sort of make it predictable, so that you when you run a script, you can be sure that it's going to fail quickly, rather than some number of lines down after it's eval-ed a whole bunch of stuff. And we give you some really good errors, too. I think that's one of the main sort of things that we do better, too.

**Justin Garrison:** I think that speed of learning is super-important today, with any shell... Because the Bash error of like "Command not found" just is not super-helpful, and like Stack Overflow is filled with "Command not found", "Library not found", "What do I do?" sort of thing. And some of the analysis you get out of Nushell is really cool, to say like "Oh, actually, that operator is not valid for this type", or whatever... But a little more informative of like what I should search for, right?

Devyn, how did you get -- you said you're new on the project. How did you get started? Why did you decide to become a maintainer, part of the core team here?

**Devyn Cairns:** \[15:33\] Yeah, I just started this year, and so I'm brand new to the project, basically... But computer languages have always been sort of like an interest of mine, and I was never really the type to really mod my shell a lot. I would do some stuff for convenience, but I had mostly sort of a static, set shell kind of setup. And I started using Nushell because I just -- I heard about it and I thought it was kind of interesting. And I was just kind of blown away by how much it rethinks some of the things that we just take for granted all of the time... That sort of traditional paradigm of sort of Unix commands where you you're typing stuff into other things to stream-transform them, right? But output formats are really different between different commands, and you've got like awk, and cut, and all these different things that are meant to sort of like work with all these different bespoke text formats that exist... And Nushell just does away with that, because it just uses structured data, and it also has ways for you to easily parse text coming from those other commands if you really want to, or you need to. And so I've found that really interesting.

I've found one of the things that was missing was a good plugin interface for extensibility. There was one, but it was really limited; you could only sort of write like commands that had like one result. You'd basically take a bunch of arguments and then you could do something and then return a result. But that was it. And so I tried to make them more like internal commands, so you could add all kinds of like stuff that like keeps running... And we actually ended up using it to pull the data frame support that was quite a large thing, that was difficult to compile, out of the main binary and into a plugin. So now that exists as the \[unintelligible 00:17:11.09\] plugin, and that's certainly one of the main achievements that I've had so far.

**Justin Garrison:** That's cool. Is the data piping inspired by PowerShell? I remember back in the day I used PowerShell, and the two coolest features of it was everything was data, so I could pipe and sort data in output tables, and all that sort of stuff... And the second thing was forward slashes worked in paths. Those were the two things I loved about PowerShell when I was using it on Windows and managing Windows systems. And then when I found Nushell, it was just like "Oh yeah, everything that you pipe is data, and now we can transform it like JSON to YAML, or a table output", or whatever. That just naturally works, without needing to find the right bespoke combination of sed plus column plus whatever to output it as if I'm dealing with raw text.

**Jakub Žádník:** I believe PowerShell was one of the influences... I think one of the two founders, Yehuda and Sophia... I think Yehuda was into PowerShell, if I remember correctly. I wasn't there at the time. I also joined later this project. But yeah, I think PowerShell was one of the inspirations...

**Justin Garrison:** I mean, that makes sense.

**Jakub Žádník:** Yeah. And three's this advantage that it's a Windows shell, again. I'm not sure if you can even compile it on Linux or use it on Linux.

**Justin Garrison:** It does work on Linux. They announced that. It was like 10 years ago or so they have a Linux build off it. But the worst part about PowerShell was their strict adherence to their naming scheme for every command, where it's a verb, noun sort of scheme, so everything was like longer words. And the more you wanted to do, the more words you typed. And there were some aliases, like cd, and ls, and those things worked... But once you wanted to do like a -- I think there was a curl alias, which caused a lot of problems, because if you had curl installed and you used PowerShell, it acted differently, and there was a big bug report back in the day for those sorts of things... But yeah, the data processing was the really, really cool part of it.

**Autumn Nash:** Do you guys have like day jobs, or are you guys just maintainers for this project?

**Devyn Cairns:** So for myself, I work on \[unintelligible 00:19:17.15\] which is like a platform for figuring out the highest and best use of parcels in the city. So whether you want to develop some kind of new apartment or something like that, we can figure out by just sort of like simulating all of the potential uses based on the zoning in a city, and then you can search through everything that we've kind of generated and find your ideal site.

**Justin Garrison:** Like SimCity IRL?

**Devyn Cairns:** Yeah, kinda like that. Yeah. \[laughs\]

**Justin Garrison:** That's awesome. Jakub, how did you start with the project? Do you do something similar in your day job, or is this full-time?

**Jakub Žádník:** \[19:58\] No, no. So in my day job, I'm a PhD researcher in computing science here in Finland... And yeah, I was using shell for Bash, for work, writing scripts, and so on... So it's the same story as I ended up programming Rust. I was also programming a lot of C, and then I was "Oh man, there are a lot of like weird things about it. Is there something better?" So I found Rust. And then I was programming Bash in my day job, and I was looking around if there is something better. I don't really enjoy writing Bash script, and its syntax. I never remember how to write if conditions; I always have to look it up. All those Bash quirks were eventually growing up on me, so... Yeah, I found Nushell, started contributing... I think the path commands were one of my first contributions, and I eventually joined the core team.

**Justin Garrison:** Oh, that's cool. I've found it a while ago, but never had a real use case for it... And in the beginning of this year I had to transform like some dates; there was a CSV file with some dates. And one of the things I really loved was like, okay, I'm gonna try it in Bash with awk first, because that seemed like a natural way to do it. But awk doesn't know about date time format. It's not a thing; like, it's just strings, and I'm like "Okay, how do I modify this string?" And I never got it to work. So I was like "Let me do it with Python." And my Python script ended up being 15 lines or so, and I'm like "That's not that bad." I'm like "Let me try it in Nu. Let me just see if I can do it in Nushell." And in the community, the Discord community was so helpful, just because I was like "Hey, here's the thing I'm doing. I have this data, I want it to go here." And I think it was maybe an hour later, someone replied back, like "Oh, here's the three commands you need to string together." I was like "Okay, cool. But what about this last piece? I want to transform the date..." Like "Oh, yeah, here's the -- we know about datetime." Datetime is this data structure that exists inside of Nushell, and you can just change that format. And I was like "Really?" And so I ended up with like a one-liner in Nushell, and I was like "This is cool." This transformed the way that I wanted to interact with things. And I am one of the weirdos that likes writing Bash scripts. I always remember the Bash syntax, but I always know when to not write a Bash script.

**Autumn Nash:** You're an alien...

**Justin Garrison:** I know. My rules every time for writing Bash scripts is I move off of Bash scripts if it's more than 100 lines, more than two variable arguments that I'm sending to the script, or I need to do anything with like an array. Like a hash, or whatever. Like, as soon as you try to do like an associative array in Bash, you're in for pain. \[unintelligible 00:22:16.11\] something else.

**Autumn Nash:** I think the fact that you said it has better errors, and the fact that it's a good community, willing to help, those two things can make your product more successful just in general.

**Justin Garrison:** Absolutely.

**Autumn Nash:** Also, I feel like people are not great stewards of Bash sometimes...

**Justin Garrison:** It's evolved a lot, and it has a lot of warts that are very difficult.\\

**Autumn Nash:** It's not the language, I just think that people that have been doing it for so long forget what it's like to be new in Bash, because --

**Justin Garrison:** Oh, for sure.

**Autumn Nash:** Yeah. So I think it's harder... It's not hard to get started, it's just not -- like, I think there's so many people that are like beginners in Python, or beginners in like newer things, that the community is like "Yeah, come in", and then in Bash it's like "Go figure it out."

**Justin Garrison:** Well, and Bash is very obscure, because there's a lot of those commands that you just have to know the two or three letters that like do a thing. And then if you don't know the history behind why it's called sed, if you're just like "I don't know... I type sed." And I haven't switched to Nushell as my full-time shell yet, because I have to unlearn the Bash stuff that I know.

**Autumn Nash:** Can you incorporate Bash in Nushell?

**Devyn Cairns:** You can call Bash. We support external commands, so it's not like a self-contained language. That's part of the reason that it's designed that way, actually. It's a programming language, but it's also a shell in that you can just call external commands like normal commands, and they just work. There's nothing really that surprising there.

**Justin Garrison:** Shelling out doesn't feel like you're doing it wrong... Which is the thing that Python and Go, and a lot of other -- like, if you try to use a programming language, like "I need to shell out to something", you're like "Okay, well, os/exec, something, something..." And in Nushell it's just like "Oh yeah, I have a binary in my path. Please run it."

**Autumn Nash:** \[23:59\] Python is definitely my favorite scripting language, but I don't know if I would ever consider it a shell. It doesn't work the same way as you can write a 40-line Bash script and have it automated in that way... As much as Bash is painful...
**Justin Garrison:** And break for everyone that's on a Mac, or has the BSD option, versus the --

**Autumn Nash:** Yeah. \[laughs\] Well, not just that, but with Python's path in Mac, it's like always trying to pick the wrong path, and you're like "No. Stop it."

**Justin Garrison:** How do you deal with -- in Nushell you're calling out to other commands, but everything needs to be data. How do you deal with that sort of like "I'm gonna call ls..." I mean, you have a built-in ls, but like if you're calling another command that sends you text, what do you do with that to make sure that you can then pipe it somewhere inside of Nushell?

**Jakub Žádník:** Then we just get the text. You can translate it. When you call an external, it gives you text, because we don't know -- we cannot know. But we have commands that can help you with that. Like, we have a detect columns command for example, which can see, and if there are columns that align, it will split it up for you in a table. We have those automatic converters. Many commands nowadays, they support JSON output, so we can convert from JSON. JSON is a subset of Nushell, so you can base JSON into Nushell, and it's valid Nushell code. So you just need to translate it. But we provide helpers for that.

**Justin Garrison:** How do you do your testing cross-platform? Because you said Windows support... And actually, thinking about it now, this podcast is fully cross-platform, with the three major operating systems. How do you validate and test that stuff when the environment is so different between operating systems? I mean, mainly Windows is the outlier. I know Mac and Linux have a lot of differences, but at least some things function the same under the hood.

**Devyn Cairns:** It's hard. So GitHub Actions helped us a lot. We use that as a CI, and we're continuously testing every pull request on Windows, Mac, and Linux. The Mac one even is running on Apple silicon, so we even cover ARM there, which is great. So that's sort of our basic level of testing. And then we also have people who are regularly using Nushell off of the main branch, compiling every so often just the latest stuff... And there are people who use it on more exotic platforms. We don't have our CI testing, like the BSDs, or Android, or anything like that, but we have users who use that... We have people using Nushell on all sorts of things, so... Yeah.

**Justin Garrison:** And now I really want it on my iPad...

**Autumn Nash:** Yeah, I know. I want to go try it. I'm just like "Maybe I should start this instead of Bash..."

**Justin Garrison:** I poke at it occasionally, and I've had a couple different use cases since that first use case, of like "Oh, I bet I could do this in Nushell really quickly", or at least figure it out, because it has helpful error messages. Almost every time I end up in the Discord, asking the gap of like "I don't know what I'm searching for here." Like, there's enough in here that -- I don't know the word that I should pipe to, that'd be the most efficient way of doing this, or the correct way of doing it... Because again, I can escape out to some of my familiar tools. But it's really hard to try to -- I want to learn Nushell, and it would be cool to be on it as a full-time environment. \[unintelligible 00:27:06.11\]

**Autumn Nash:** People should talk about that more, of not knowing what you're looking for. I think programming is almost like building a building with blocks. And I think sometimes the gap is not knowing what the block is to use, you know?

**Justin Garrison:** Yeah, you just don't even know the word. You don't know the term, you don't know anything about it. And sometimes theming helps. Like, if someone has a theme around their projects, and you're like "Oh, what might this be called...?" But a lot of times it's still obscure. Do you know why it was called N-U-shell, instead of N-E-W, or other words?

**Jakub Žádník:** I think it's a wordplay, like new/nu... I might be lying, but I think it might have also some meaning behind it from Yehuda, one of the original creators... But I'm not 100% sure.

**Justin Garrison:** I'm realizing now on an audio podcast saying Nushell over and over again is going to be hard, because they're gonna end up at any new shell, and it's actually nushell.sh.

**Autumn Nash:** \[28:04\] I think a shell is so close to the operating system... Like, how did you guys get started in making those contributions? Because it's a very different thing than application programming, or app, or data science. Really playing with the interaction of the operating system is different, so how did you guys get into it?

**Jakub Žádník:** I think I just ended up fixing bugs, and going into the path... So for me it was that I discovered something that I didn't like, and started fixing it, and then during that process I started learning about it. So I ended up learning too much about paths. \[laughter\]

**Autumn Nash:** You went down the rabbit hole.

**Jakub Žádník:** Yeah. But there's also a lot of application programming. A lot of Nushell is just code, and data processing, and all sorts of stuff. So large chunks of Nushell don't interact with the operating system at all.

**Autumn Nash:** What do you do in your PhD program?

**Jakub Žádník:** I'm doing lightweight compression algorithms... So it's more like \[unintelligible 00:29:03.13\] processing, but more on the implementation side. So on a global level of performance programming, implementing on different devices these compression algorithms...

**Autumn Nash:** what do you guys think was something that you were shocked by when contributing to Nushell or something, that was harder than you thought it would be, or maybe easier than you thought it would be?

**Devyn Cairns:** I mean, for me I guess easier... The process of contributing to Nushell is great. Everyone is really friendly. They have a system with basically -- we run everything, all the PRs through GitHub Actions, we do the tests... Sometimes someone sort of chimes in and does like a more detailed review, or they just kind of look at and test it and go like "Yup, this looks great." And then it's accepted. And we'll kind of will take anything from anyone if it doesn't conflict with our core philosophy for the shell. So there's is not really -- people are opinionated, but not mean, which is great.

**Autumn Nash:** Yeah. Sometimes you're like "Dude, calm down."

**Justin Garrison:** How do you decide what will become like a core command inside of Nushell, versus something that should be external? I'm looking through your commands list on the website right now, and there's a few of them. And some of that I don't even know why I would use this, or what this does. Like, lazy frame. I don't know what that does. Why is that a core command inside of Nushell, versus making that like an external thing, or some other application?

**Jakub Žádník:** Yeah, this is tricky. This is one of the points we keep refining... Because at some point we want to ship 1.0, but usually it is like 400 commands, and how do we guarantee that all of them are in 1.0 quality? So some commands are like language; it's a command, you can type help if. But it's also part of the language. So these are in. Then there are some file system commands. Cd, ls... So this is also kind of core functionality. But these are not part of the language, these are just commands.

So we're kind of in the process of it, and it keeps going and going, but we're constantly kind of categorizing the commands into categories like that, and then thinking about "Are we comfortable shipping this for 1.0, or is it going to be some extra commands that won't be included in the core Nushell?"

**Justin Garrison:** I just discovered the sys command as you were saying that stuff. I was like "What does that do?" It has great table output of everything about my computer. That's so cool.

**Autumn Nash:** What is your release process like? How do you break up what you're going to release at a time, and like your testing? By the way, I love GitHub Actions. I love that you use those.

**Devyn Cairns:** So basically, if we do integrate it into main before a release, it's going to be in the release. So if there's a PR that doesn't have enough time before the release, or needs some more polish, it doesn't go in.

**Autumn Nash:** Do you just have like a timeframe, like two weeks before release, or...?

**Devyn Cairns:** Yeah, so we release every month; it's on a clock schedule. And we freeze -- Jakub, I think it's two days, or one day before the release? We completely freeze.

**Jakub Žádník:** \[32:19\] Yeah. We 8ship on Tuesday, so during the weekend, we land the last PRs. On Sunday we freeze, and if there are any errors coming up, then we release on Tuesday, and then keep the freeze after the release for some time, also just to see if we need to do some hot fixes, like it was in the last release.

**Autumn Nash:** What is your actual release process like?

**Jakub Žádník:** Yeah, we are on a clock schedule, so... Just to keep things rolling.

**Justin Garrison:** So you freeze on a Sunday, and then Monday, basically, all the builds kickoff, and you're just like building artifacts, and testing, and validating integration tests, right?

**Devyn Cairns:** Yeah, we're not automatically kicking that off. Basically, someone has to volunteer to do the release. So whoever has the time in the core team will be like "I'm going to handle the release." Sometimes multiple people. And then we have a document that's been written by the core team, that just sort of lists all of those things that just have to be checked before, as the release happens... And a lot of those things are automated, but they just have to be kicked off and monitored, and it's getting easier and easier honestly, too.

**Justin Garrison:** Do you have an opt-in -- I know in the Kubernetes community we have a release process, and you can ask to be part of the release team, and you can shadow someone. You're like "Oh, I want to learn how this part of the release works." And so people can go in and shadow different aspects of the project, and say "Hey, I just want to learn how this works. Give me some responsibility. Like, I'll do a couple things. I'm not just going to take more of your time, hopefully." But it's a really cool way to getting people involved in open source, especially involved in a project, where it's like "Hey, even if you're not contributing code today, you can look at the checklist and then also improve the checklists for next time." That was always a big thing on those release processes, like "Hey, what gaps were there? Let's do a retro and figure out what things did we miss, what things do we want to add, what things are automated and we don't need to worry about anymore?" And make sure that the checklist is up to date. Do you have a process for someone to like -- every month, that's cool. Someone every month can be like learning more about your project, and just contributing in little ways that maybe aren't like "I'm not familiar with Rust enough to jump in and start doing things, but I'm part of the community and I want to help with that process and kind of ownership of the project."

**Jakub Žádník:** Yeah, we don't have anything like that we would invite non-core team members to do the release for us. I think the release, you also need to have some extra permissions to be able to publish \[unintelligible 00:34:37.18\] for example. But it's an interesting idea.

**Justin Garrison:** And there's still definitely levels of like, you know, if you have commit access, versus you're shadowing... But the shadow process is something that's always really interesting. And in Kubernetes we have like a docs team and a marketing team as part of the release. It's like "Hey, you're gonna write the blog post", and it says "Hey, this is the new feature. This is how this works", and show some examples and whatnot. So people can be involved without needing to be like "I write code, and here's how I get involved."

**Devyn Cairns:** Yeah. As I see it, we're still kind of a medium-sized open source project, so we're kind of growing, we're getting sort of more formal processes for certain things... But for example, when I joined the core team, I had the time to sort of start doing releases, so I volunteered to do that... And the first time I didn't do it, I just watched \[unintelligible 00:35:26.16\] do it. He's one of the other core team members. And he streamed it on Discord. And actually, the first time I did a release, I actually just did it publicly on our open mic, and anybody who was there could just watch me do it. So that was cool.

**Justin Garrison:** \[35:44\] Yeah. That welcoming community of jut sharing, like "Hey, we're just gonna walk through this. No pressure to come, no pressure to ask anything, but if you want to see how we're doing it..." I mean, I think Twitch has a lot of live developers that are doing this stuff, and it's lik "Oh, I don't actually know what I'm doing, but we're gonna figure it out for the next couple hours. If you want to come watch me struggle, you're welcome to." And I think that's really neat.

One of my favorite things about the Nushell Discord is the Cool Scripts channel, where people just share "I wrote a script that solved the problem for me", in the most obscure things that I've ever seen before. But it's a great idea, because I've looked in that channel and gotten ideas about things that I didn't know was possible, and about other subcommands in Nushell that I'm like "Oh, that's why you would use that piece of it", or how someone else might use it, even though it was not my use case. What are some surprising use cases that you've seen people using Nushell for, and writing scripts or solving their own problems?

**Jakub Žádník:** I've seen some people creating some wild aliases. In Rust we have the question mark, where you check for error type, so we can early exit... So I think someone was inspired by that and created like it checks for a null, and if it gets null, it does something. I don't remember exactly, but someone was creating kind of like a new syntax using aliases for Nushell, and it was pretty cool.

**Devyn Cairns:** Yeah, I remember that, too. Someone was doing like a pipe to question mark thing.

**Justin Garrison:** To like get help about something, or...?

**Jakub Žádník:** No, no. Like, something that outputs null instead of a value. So it unwraps the value, or returns if it's a null, or something like that. I remember someone was doing \[unintelligible 00:37:28.08\] the ampersand you use in Bash for a background process. And we were trying to hack putting processes in the background using this ampersand sign... But we don't have background processes in Nushell, so I don't know how they did it, or how successful was it, but...

**Justin Garrison:** There's no background process management. So if I hit Ctrl+Z to suspend a process, obviously in Nushell it doesn't do anything. There's no handling for that.

**Jakub Žádník:** No, no. It's kind of a planned feature; we want to solve it somehow. But we want to solve it such that it works on Windows as well. Someone was looking into it and got kind of burned out from doing those \[unintelligible 00:38:07.21\]

**Devyn Cairns:** One of the things that makes us a little unique is I think most shells, because they're either PowerShells targeting Windows very directly, and then you've got -- I mean, obviously it's on other platforms too, but I think its primary platform is Windows. And then on the other side you've got like Bash, and \[unintelligible 00:38:27.01\] and they're all targeting like Unixes... And they can all make certain expectations of the operating system. For us, because we're on all three, we kind of have to go for like whatever the intersection of all them is. And we try to only do things that we can do on all systems, because you don't wanna script it to only work on Unix; that's not the point of the shell. So...

**Justin Garrison:** That's valuable to users, but could hold back the project, because it's like "Oh, I have to wait for this kernel feature to be available on Windows before something like a background process", or whatever it is. But also, it's great to be able to start fresh, and say "Hey, this is not a POSIX shell. We're not POSIX compliant. We're not going to make sure that everything is compatible with all the things you've done in the past. This is a new thing."

**Devyn Cairns:** But on the other hand, someone might come up with like a really clever hack that gets something working on Windows that Windows users have never really had before. So that can be really cool.

**Autumn Nash:** It's amazing what users will do when you give them something that you'd never expect, and then all of a sudden they glue two things together and you're like "That's really cool. I don't know if I want to maintain it, but it's awesome."

**Justin Garrison:** Right. And the answer isn't always WsL. Like, don't use the Windows subsystem for Linux on Windows. It's a great system, but sometimes they just need the native Windows stuff, too.

Do you know like a spread of like how many users are on different platforms? Is that something that you keep track of? Are there any sort of like reporting back, to say like "Hey, there's 10% on Windows, and 50% on Mac"? Or is that even like a thing that is common for you to know about?

**Jakub Žádník:** \[40:03\] We had this survey, and we had this question there, and we had a pie with the ratio of Windows, Mac, Linux users... But I don't remember at all. I would need to look it up and send you the link, or something. I don't know, Devyn, if you remember, or...

**Devyn Cairns:** No, I don't remember what came out of that, but I do know that we have a lot of Windows users. There's always people talking, and I see people pasting stuff that's clearly from Windows... So it's a popular option. I mean, there aren't that many options on Windows. You've got PowerShell, and you've got us, and... I don't know, not that many other things.

**Justin Garrison:** Yeah.

**Autumn Nash:** \[unintelligible 00:40:40.22\] is there any hack way to use Bash on Windows? I don't think so, right?

**Devyn Cairns:** Sure. I mean, you've got Cygwin, you've got the Git Bash thing, you've got...

**Autumn Nash:** Ones that people really use, though... I feel like people just use --

**Justin Garrison:** Don't downplay Cygwin. That was a big one. But a lot of people moved to WsL as far as I know; that it's like the Windows Subsystem for Linux. It's just like a Linux environment. It's kind of an escape hatch, but like not -- it's kind of integrated. You can launch GUI applications now, but they're all -- it's like you're isolated in this Linux thing that kind of interacts with the Windows stuff. Your files are mounted, but beyond that, you don't get to call the registry or system commands, as far as I know, from the WsL environment.

**Devyn Cairns:** Right. And especially - like, WsL 1 was sort of this add-on in the Windows kernel that was meant to support Linux applications; it was sort of like an emulation layer of the API... Sort of like how Wine works on Linux, and sort of how FreeBSD has Linux binary support. It's the same kind of idea, but more exotic, because Windows is so different... But then WsL 2 is actually just like -- they gave up on that, and they just did like this virtualization layer, that basically just runs a Linux kernel.

**Justin Garrison:** Yeah. It's just HyperV.

**Autumn Nash:** Which is weird, because I feel like Microsoft has put more of an investment into Linux lately, but...

**Devyn Cairns:** Yeah, I mean, I think that was part of it. They wanted it to be more compatible than they felt like they could make it. So they just decided to make a really good virtualization layer that feels like you're just using it on Windows.

**Justin Garrison:** Yeah. Integrating the virtualization bits more into Windows, rather than integrating the kernel or kernel sys calls directly into the Windows kernel.

**Autumn Nash:** I think we all do that, where you're like "This is gonna be so cool, it's gonna be great." And then you get halfway through and you're like "Oh, this is horrible..."

**Devyn Cairns:** Yeah, I'm guessing they probably had a moment like that. But yeah, Nushell supports Windows natively. So you don't have to use WsL. You actually can just use Nushell on Windows and your paths don't -- I mean, that's the other thing... The backslash paths on Windows - normally on Unix shells they kind of like take after C, at least to some extent, with \[unintelligible 00:42:51.06\] and we do, but we only do that for double quotes. So if you're just using like a \[unintelligible 00:42:58.05\] we let you use the backslash, just like on Windows, and it's not a problem.

**Justin Garrison:** If someone wants to integrate their external command and make it available in Nushell as like a native source, is the best way to do something like output JSON, and then Nushell handles it? Or is there a more integrated way to say "I have a command line tool that I want to work better inside of the Nushell pipelines"? What would be the best way for me to go about making sure that works?

**Jakub Žádník:** Yeah, I think support some structured output, with like JSON... Or you can wrap it in a plugin. Because you could have the same application, just make it a plugin interface for it, so it can be registered as a Nushell plugin, and that way it acts as if it was built in command inside Nushell.

**Justin Garrison:** So I write a little Rust to wrap it, and then suck in the data and put it out natively?

**Jakub Žádník:** \[43:56\] It doesn't have to be Rust. You can write even in Python. You can write a Nushell plugin in Nushell. It's kind of pointless, but... \[laughs\]

**Justin Garrison:** Well, that was actually my last question I wanted to ask, was around like is the goal of Nushell, like a lot of programming languages, to eventually write in itself? Do you want to get rid of Rust? Is Nushell trying to get so big that you can do all that, or is it still isolated, like "We want this single use case"?

**Autumn Nash:** Is it only built in Rust?

**Jakub Žádník:** Yeah, it's built in Rust? But we don't aim to be self-hosting, at least not for 1.0. That's non-go. In theory in the future, if someone is really enthusiastic, really into it, maybe... But yeah, there's a question - like, it's a ton of work, and you would have to have a code generator, and all these layers sorted out... So the question is, how much value would it add to Nushell...? So...

**Autumn Nash:** I love that you asked that, and you said how much value, because some people are just like "I've made this, so I want to like write in this", and I'm like "But why?" At least you're asking the right questions.

**Devyn Cairns:** Well, the thing is like it's a shell. So we're trying to stick to sort of an interpreted language, and maybe like making it better and faster and more complete and a more consistent interpreter. So there's not really any reason for us to go and like JIT-compile stuff, or like make ahead-of-time binaries, because this is sort of meant to fit the niche of Python, but when you want something that's like more shell-like, that works on strings more natively, that works with external commands more natively... And it's also just like a nice language to write in. But yeah.

**Jakub Žádník:** Compared to Python, it's more of a -- you can really think of Nushell as a compiled language, because we don't have eval... So a lot of the features are -- you need to think a bit as if it was a compiled programming language. So that part makes it easier to theoretically be able to compile it into native code, for example. It's not the goal of the project, but it's more imaginable than in the case of Python, for example.

**Devyn Cairns:** For sure.

**Justin Garrison:** But if PowerShell and Python had a baby that was written in Rust, it'd basically be Nushell.

**Autumn Nash:** Yeah, is it like Bash and Python having a baby, but yeah, PowerShell --

**Justin Garrison:** No, it's \[unintelligible 00:46:11.28\] PowerShell, yeah. I love the structure, I love the ability to kind of discover things with it. My goal this year was to learn more of it, so that I could switch to it full-time and not feel like I'm just always learning something new every day... But it's just slowly finding use cases and doing it myself.

**Devyn Cairns:** Yeah. My favorite tool, actually, within Nushell is you don't have to like go and google stuff often, you just do 'help if', and then whatever your search query is, and you can find a command probably that fits what you need.

**Justin Garrison:** Again, I just learned something new. I didn't know I could help if search. I just did \[unintelligible 00:46:53.23\] and I get the from JSON, and to JSON, and it shows me all of the parameters for both those commands, and that they're built-ins. That's awesome. That's a good tip right there.

**Jakub Žádník:** Yeah. Each command has a search term, so like related keywords that are searched by the help if. So even if it's not the command name directly, if it's a related term, it will show up.

**Justin Garrison:** There's some metadata about it to find it?

**Jakub Žádník:** Yeah.

**Justin Garrison:** Awesome. Well, thank you so much, Devyn and Jakub, for coming on the show and talking to us all about Nushell. I encourage anyone else that's interested in data-structured shell outputs, and maybe looking for a different shell, join the Discord, interact with people... Again, check out the Cool Scripts channel, because it just has a cool bunch of ideas that are constantly flowing through there, seeing how people are using it, and figuring out what problems they're solving... And then I've often stolen some of those things and said "Oh, I could do something like that in my own repertoire of shell commands."

**Autumn Nash:** I want to go join the Discord now. That's exciting.

**Justin Garrison:** It's fun. It's a great place. And again, anytime I've had questions, I've dropped a question in there, just like "Hey, I can't figure out this piece", and people have been very receptive and open and not just a "Go read the docs." I do read the docs first, I try... But I just learned about help if, so I'm gonna give that one a shot now too before I start asking questions.

**Autumn Nash:** I love a good, helpful tech community...

**Jakub Žádník:** \[48:13\] Yeah, that's the design goal of Nushell, to be cool and fun. And it's a project made for people; we're not like hardcore tech bros, but we want people to have fun, to be friendly... That's the main goal of Nushell, to provide something useful --

**Autumn Nash:** Those are usually the best projects... When you're trying to solve a problem and be user-friendly, you know?

**Jakub Žádník:** Yeah.

**Autumn Nash:** It was nice meeting you, guys. Your PhD sounds so cool, and so does the stuff that you work on.

**Devyn Cairns:** Thanks.

**Jakub Žádník:** Yeah. Thank you for hosting us.

**Devyn Cairns:** Yeah, it was great to meet you, and great to be on. Thanks for having us.

**Justin Garrison:** Thank you.

**Break**: \[48:50\]

**Justin Garrison:** Thank you so much, Devyn and Jakub for coming on and telling us all about Nushell. I hope that anyone listening is encouraged to go try it. It's just a fun thing. I have it installed on my systems. I don't use it as my default yet, but I still poke at it every once in a while... And even during this interview I learned to new things - the help outputs, and I also learned that plugins didn't have to be written in Rust. I did not know that. So now I have new ideas of writing plugins that wrap some of my own commands and make them native Nushell commands.

**Autumn Nash:** It's cool to see something awesome built in Rust, because I think Rust is going to be a language that a lot of really neat things are built in. So...

**Justin Garrison:** Yeah, it's taken over the world, especially at the lower levels of systems.

**Autumn Nash:** I don't think you can rewrite everything in Rust. People get a little overexcited. But I think Rust is one of the genuinely going to change things for the better type of deals. It's not just overly hyped, you know?

**Justin Garrison:** I mean, the government wants you to write it in Rust. The US government at least, right? They had a whole announcement of "This is safer code. You should use this."

**Autumn Nash:** And I love that they're trying really hard to start the open source community the right way, and partnering with other open source communities to kind of learn from them. I'm very hopeful for us. It's not one of those things that's just like a bunch of hype. I think Rust is going to do a lot of good things. Maybe let's not write everything in it, but like... But I think it's going to really make things more efficient and safer, so it's really cool to see it grow, and real projects be built in them, and...

**Justin Garrison:** For today's outro Autumn and I are gonna play a game.

**Autumn Nash:** I'm so excited.

**Justin Garrison:** We like playing games, they're fun. And so what we're doing is - I don't know what I'm calling this one. We're gonna call it "What the distro" or --

**Autumn Nash:** "What the distro" is so good! Let's do that!

**Justin Garrison:** What the Distro.

**Autumn Nash:** You can't see me, but I'm bouncing around in sheer excitement.

**Justin Garrison:** If you've ever been to distrowatch.com - again, this is an old person thing, but you used to go to distro watch and you would learn about new Linux distros, and you could find whichever one was the leading distro at the time. And this is a very loose term for leading, based on --

**Autumn Nash:** Is it the same thing as when they say leading like programming language? Because those are so skewed sometimes, and just like nobody uses --

**Justin Garrison:** It's somewhat a popularity contest, it's somewhat whoever wants to go vote for things... Because if I look at DistroWatch right now, they have a ranking list. MX Linux is the top distro, which I've never even heard of MX Linux... It's based on Debian. I don't know, it's a distro that -- origin from Greece. Okay. And it goes on ARM. I don't know. It does some stuff, but why is that one more popular than Linux Mint, which is the second one on the list right now? Or Endeavour OS... I heard of that one, never used it.

This is just a random popularity sort of thing. It's okay. You can vote for things, and they have a list, a top 100 list of Linux distros for all of the nerds that really care. But what Autumn and I are going to do is they have a distrowatch.com/random.php, and we're going to go to the random page and get a random distro, say the name and the other person has to guess what that distro is for, maybe what it does... Some focus of why this Linux distro exists in the world. And then the person who is on the page can tell them if they're right or wrong, and what it does. I'm gonna go first... Oh, and we can skip ones that are obvious.

**Autumn Nash:** Wait, pass me the --

**Justin Garrison:** It's in the chat.

**Autumn Nash:** It is not.

**Justin Garrison:** \[58:16\] It is, I've just put it in there. Along with a wiki page to Dreamcast, so you can see what the Dreamcast is. So we can skip obvious distros, because I just went to random and I ended up on Debian EDU, which is kind of obvious...

**Autumn Nash:** I was right -- Sonic was on Dreamcast.

**Justin Garrison:** Well, Sega owned Sonic as a character.

**Autumn Nash:** But it was, so I have seen a Dreamcast, so ha! I played Sonic on it.

**Justin Garrison:** \[laughs\] So for the distro, I'm gonna skip Debian EDU, because that's an obvious -- it's a Debian operating system meant for EDU or school environments. So let's go to another one. Rhino Linux. Alright, there we go. What is Rhino Linux? They have a cool logo. Autumn, you've gotta guess. What is Rhino Linux for?

**Autumn Nash:** I don't know. For like a zoo? I don't know... Rhino? Like, what is Rhino -- I don't know. I'm still trying to get this thing to work.

**Justin Garrison:** I'm actually -- I'm reading it right now, rhinolinux.com. I'm reading it right now, and it's basically a rolling release. So you don't have like big release updates...

**Autumn Nash:** What does that have to do with a rhino? I think people are just like "This sounds cool..."

**Justin Garrison:** The logo is like a round rhino, but it also looks like they're based on XFCE. So Pacstall and XFCE at its core. So it's just a different spin of Ubuntu with a rolling release as the main characteristic of it. Because a lot of people love Arch Linux, which is rolling... So I get it, people wanted the familiarity of Ubuntu, with XFCE as a lightweight desktop, and then a rolling release. Alright, they built a distro called Rhino Linux. What have you got?

**Autumn Nash:** I don't know if that sounds... I was like "I thought there was gonna be a cooler initiative."

**Justin Garrison:** We're not saying you should try these necessary. We're just saying these exist.

**Autumn Nash:** Diamond Linux-TT?

**Justin Garrison:** Diamond Linux? I feel like Diamond Linux has to be some sort of like hardened, secure Linux. They're building it -- it's probably, I would guess, Red Hat CentOS-based.

**Autumn Nash:** It's Debian-based. It's from Germany. That's pretty cool. It is for KDE Plasma desktops, with an eye towards making the interface look more familiar to former Windows users...

**Justin Garrison:** Ah, it's one of the Windows converts...

**Autumn Nash:** A Debian stable branch.

**Justin Garrison:** So it's basically Debian stable, and it's XFCE. But it's trying to get Windows users to have a Start menu.

**Autumn Nash:** What's KDE though?

**Justin Garrison:** KDE is a desktop environment. KDE has -- and Plasma is like their framework for it. The menu system is the Windows, it's all the fundamentals. I use GNOME - some people say G-nome - as my desktop of choice, my desktop environment. Xfce is a common low-utilization one for like smaller or lightweight systems. KDE is the like --

**Autumn Nash:** What is Plasma though? I've never heard of --

**Justin Garrison:** Plasma is like their framework. KDE is built on Plasma, so all the decorations and the cool things that your Windows might do is like a plasma engine sort of thing, but then KDE is like the actual environment encapsulation of what that does.

**Autumn Nash:** Interesting.

**Justin Garrison:** GNOME has their own framework that they build on top of, but Plasma is another one. I've got another distro called Pardus. And the logo is actually a really cool-looking cheetah head.

**Autumn Nash:** The logo show up for you on -- okay, I think this... All the logos I've got are like boring, so you can't even tell \[unintelligible 01:01:39.22\] Is it fast? Is it speed-based?

**Justin Garrison:** What distro do you think it's based on? There's a handful... There's Debian, Arch, Red Hat, Gentoo, and Slack. Slackware. Those are probably like the common like bases for a distro.

**Autumn Nash:** Ubuntu?

**Justin Garrison:** This one - it says it started as a Gentoo-based project. But Pardus is a distro jointly developed by the Scientific and Technology Research Council of Turkey.

**Autumn Nash:** \[01:02:08.04\] Oh, that's cool.

**Justin Garrison:** The National Academic Network and Information Center.

**Autumn Nash:** There's a lot of small distros I did not even know exist.

**Justin Garrison:** This one - it looks like it's XFCE based. Yeah, it has GNOME and XFCE desktops, but it focuses on the corporate version of \[unintelligible 01:02:21.07\] So it's like a corporate version of -- it's probably for like scientists, or something... But it looks like it's Turkey-specific. That's kind of cool.

**Autumn Nash:** That is very cool.

**Justin Garrison:** Yeah, if you go to the website, it's not in English, so I don't know anything.

**Autumn Nash:** I just saw one that was from Japan that was really cool, but I didn't think you were going to guess that, so I went to another one, because I didn't think you were going to be able to --

**Justin Garrison:** Alright, what other one you've got?

**Autumn Nash:** Wait, now I feel like I should go back, because you love stuff from Japan. Okay... I don't even know if I can -- here, I'll just send it to you, because I don't think I can pronounce that one. I don't want to mess it up. But this other one is pretty cool. What about 4MLinux? What do you think that one is?

**Justin Garrison:** 4M? It's for sticky notes. It's like advanced sticky notes. \[laughter\]

**Autumn Nash:** You and your damned dad jokes...

**Justin Garrison:** \[unintelligible 01:03:06.07\] as sticky notes. This is it. You can pick your colored sticky notes... It's like, every icon is a sticky note. That's what it is. It's a Linux distro, and all it is is sticky notes.

**Autumn Nash:** Okay, I low-key really miss Clippy, and I really miss sticky notes. Why did we get rid of those?

**Justin Garrison:** I still have sticky notes. I don't know why you got rid of them.

**Autumn Nash:** No, I mean like on --

**Justin Garrison:** Yeah, right here. They're in my drawer.

**Autumn Nash:** I mean on the computer...!

**Justin Garrison:** Oh. Well, the software sticky notes were always bad.

**Autumn Nash:** But they were cute, and I could use pink ones. And you could leave your significant other cute ones, if they were like nerdy enough...

**Justin Garrison:** I feel like they were for an era when you had one computing device. Because now you have to sync them to your phone... Because like now we have Apple Notes, and we have whatever Google calls Keep...

**Autumn Nash:** But also, I don't think anybody uses an iPad as intensely as you. You go hard, okay?

**Justin Garrison:** I was just on Corey Quinn's podcast, Screaming in the Cloud, and he and I both use iPads as our primary remote devices...

**Autumn Nash:** I'm both excited to hear that podcast, and scared of what y'all are gonna say, so... They let you and Cory in one room to do a podcast...? Several cloud companies are going to like go -- okay, what do you think this one's based on?

**Justin Garrison:** Oh, what was it again? I forgot I was guessing...

**Autumn Nash:** 4MLinux.

**Justin Garrison:** I told you, it was sticky notes. Oh, what is it based on? It's definitely based on Debian. That is a Debian-based --

**Autumn Nash:** No, it is not. It's independent.

**Justin Garrison:** Independent?

**Autumn Nash:** I know...!

**Justin Garrison:** You can just create a distro?

**Autumn Nash:** I know. Apparently you can. Oh, and it's from Poland. Isn't that cool?

**Justin Garrison:** Ooh... What's the package manager? Because that really tells you... Does it say? Is it RPM, or Deb, or PacMan?

**Autumn Nash:** It does not, I don't think...

**Justin Garrison:** They'll say it's like independent, and then they're like "Oh no, by the way, we use the desktop a package manager --

**Autumn Nash:** The desktop is JWM, but that's on the package manager...

**Justin Garrison:** No. That's desktop. Yeah.

**Autumn Nash:** Okay, so it is a miniature Linux distribution focused on four capabilities: maintenance (as a system to rescue live CD), multimedia (for playing video, DVDs and other multimedia files), miniserver (using the inetd daemon), and mystery (providing several small Linux schemes). Distribution includes support for booting on -- what is it? UEFI-enabled machines... I've never heard of that.

**Justin Garrison:** Oh, UEFI?

**Autumn Nash:** Mm-hm.

**Justin Garrison:** I have a co-worker that would call it oofy, and I love that.

**Autumn Nash:** Oh, good Lord.

**Justin Garrison:** Oofy.

**Autumn Nash:** Oh, my goodness. This is cool, though. I've never heard of an independent-based --

**Justin Garrison:** Send me link on that one. I wanna see that one.

**Autumn Nash:** Okay.

**Justin Garrison:** I'm gonna do one more. q4os.

**Autumn Nash:** I'm looking for a cool one.

**Justin Garrison:** What do you think it's based on?

**Autumn Nash:** Raspberry Pi's on here... q4... Oh, wait, go back! Oh, this is a cool one! Wait, now I have two that I want to ask you about, because I accidentally went -- okay, sorry. q4os. Focus, focus. I don't know. Tell me what it is, so I can ask you this one, because I'm excited.

**Justin Garrison:** \[01:06:16.11\] I don't know what this one's for. q4os. It's based on Debian stable. It's a Debian-based distro designed to offer classic-style user interface called Trinity, and simple accessories. And they serve a stable API for complex third party applications such as Chrome, VirtualBox and development tools. I don't know. I don't know what this desktop environment Trinity is. It's probably a low hardware requirements sort of development platform, it looks like. It's Debian-based.

**Autumn Nash:** I feel like we learned a lot. It's pretty cool. Okay, Accessible Coconut.

**Justin Garrison:** Accessible Coconut.

**Autumn Nash:** Right?! I was so excited when I found it.

**Justin Garrison:** Is it designed for accessibility, for like screen readers?

**Autumn Nash:** Yes.

**Justin Garrison:** It's gotta be Ununtu-based, or Debian.

**Autumn Nash:** It is. It's both Ubuntu and Debian.

**Justin Garrison:** Yeah. Ubuntu is based on Debian, so that makes sense. And it's going to have Deb packages -- they're going to use Classic X, because X is better for accessibility. No Wayland, which also means --

**Autumn Nash:** It doesn't mention that, but I think you're right. Keep going.

**Justin Garrison:** ...which probably means -- I don't know if they're gonna be KDE or GNOME-based based on that. I would assume KDE, because I feel like KDE has some better accessibility...

**Autumn Nash:** It's MATE.

**Justin Garrison:** MATE. Okay. MATE was a Linux Mint fork of GNOME, which is like a GNOME 2.

**Autumn Nash:** Okay, guess where it's from.

**Justin Garrison:** Is it from the Bahamas?

**Autumn Nash:** It's from India. So cool.

**Justin Garrison:** That's cool.

**Autumn Nash:** Okay, the project's goal is to develop an eyes-free desktop environment. Some of the features of the distribution --

**Justin Garrison:** i3?

**Autumn Nash:** Eye-free. So you don't need to -- you know, accessibility for visually-impaired people.

**Justin Garrison:** Oh, okay.

**Autumn Nash:** And the distribution includes screen readers, print reading, a six-key input, accessible audio and video editing solutions, eBook speaker, screen magnification facilities, and accessible disk management solutions, among various others. That is so cool.

**Justin Garrison:** That's rad.

**Autumn Nash:** That is so, so cool. I love when people do like cool things to help other people use technology.

**Justin Garrison:** But not even that, I think of other use cases for this. Because if you don't need a monitor attached, then where else could you put this Linux distro? Like, embedded in earphones --

**Autumn Nash:** Oh, that's a good idea.

**Justin Garrison:** ...and I could use a Linux distro on the go...

**Autumn Nash:** Also, my kid used to like to use them when he's too lazy to read things. He just uses the accessibility features, and I'm like "Stop cheating and read it, dang it!"

**Justin Garrison:** You don't need to consume the information with your eyes. I am all on board.

**Autumn Nash:** Don't be on his side, okay? He's using my Libby account and all my Audible credits at the same time. He bribed his brother with candy to shake him down for his Audible credits, okay? Okay, DragonFly BSD.

**Justin Garrison:** Well, it's definitely BSD-based. Dragonfly? I feel like I've heard that before.

**Autumn Nash:** I don't know, but I thought the logo was so cool though...

**Justin Garrison:** So it's based on FreeBSD...

**Autumn Nash:** Yes. That was a given.

**Justin Garrison:** Yeah. I don't remember what desktop environment's popular on FreeBSD. I want to say it's like a GNOME 2 things, because they don't do --

**Autumn Nash:** It's a ton of desktops. It's Awesome, Cinnamon, Fluxbox, JWM, KDE Plasma, Lumina, MATE, Openbox...

**Justin Garrison:** But what is the purpose of this existing?

**Autumn Nash:** It is an operating system and environment designed to be a local continuation of the FreeBSD-4.x OS system.

**Justin Garrison:** Okay, so it's like a spiritual successor to FreeBSD 4.

**Autumn Nash:** These operating systems belong in the same class as Linux in that they are UNIX ideals and APIs. DragonFly is a fork path, so to speak, giving DBS base an opportunity to grow in an entirely new direction from the one taken in the FreeBSD 5. This is like medieval times when all the different churches started, because people started fighting... And then when the open source community start fighting, they're like deuces. "We're gonna go create our own forks." And then you end up with like five forks of the same thing.

**Justin Garrison:** \[01:10:12.28\] I mean, that's like the benefit of open source. If it's licensed freely...

**Autumn Nash:** Hell yeah, because people have good ideas.

**Justin Garrison:** If you have the time and you are going to maintain something, then sure, that is the thing that you can do. And that is --

**Autumn Nash:** Not just that, but you get multiple cool projects. It just sucks when people stop maintaining them, but you know...

**Justin Garrison:** Yeah, it's hard to pick and choose, but that splinters into -- like, if you're making this a religion battle of people picking their religion, and --

**Autumn Nash:** I was reading history books last night. I really like history documentaries. Like, sometimes I need a break from technology, even though -- I don't know, it's wild. I was watching "The men who built America", and it's about like the four richest dudes in like America, and it's like J.D. Rockefeller, Carnegie, and a couple other people, and I'm like "Y'all, we re all terrible people." Your stories are very interesting, but you kind of all had no soul, and it's kind of sounding a little familiar to like current times.

**Justin Garrison:** History repeats itself.

**Autumn Nash:** It does...

**Justin Garrison:** Thank you, everyone, for listening to the show. We hope you enjoyed this episode. If you want to hear a specific guest or topic, feel free to email it in. We have the ShipIt \[at\] change log.com email address, that we do read... I'm actually a little behind on replying to some of them, but I will get back to you. And yeah, so leave a comment, please.

**Autumn Nash:** I need to go reply this week.

**Justin Garrison:** We're also in the Changelog Slack, so you can hit us up in there...

**Autumn Nash:** I love the Slack.

**Justin Garrison:** And yeah, we look forward to talking to you again next week.

**Autumn Nash:** Everybody leave comments on Justin to buy a Dreamcast, so we can play Sonic.

**Justin Garrison:** If I had a Dreamcast, it would not be staying as a video game system. I'm gonna use the shell and do something else with it. So...

**Autumn Nash:** Ugh... Why are you like this?

**Justin Garrison:** Because that's what I like doing...
