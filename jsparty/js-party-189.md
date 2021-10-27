**Amal Hussein:** Hello, party people! I'm so excited to be hosting Ahmad Awais today as our special guest. We're here to talk about all things Node automation. I think we'll be covering automation broadly, so for those of you who are listening to a JavaScript podcast who don't like JavaScript, I'm sure there's lots of transferable knowledge that we'll be sharing today... But maybe we'll convert you otherwise. So welcome, Ahmad.

**Ahmad Awais:** Hey, hey. Nice to be here.

**Amal Hussein:** And on the panel today we have Amelia...

**Amelia Wattenberger:** Hey-hey!

**Amal Hussein:** Jerod...

**Jerod Santo:** Hi, Amal. I'm excited to automate all the things. Or at least learn how to automate more things than I'm currently automating.

**Amal Hussein:** I have a feeling we're gonna blow some minds today, so... I have the most fun stories to share about automation. I'm such a nerd about this... I can't wait to get into that. But before we dive in, Ahmad Awais, if you could tell us a little bit about your background. You have a really interesting story. You're really involved with the open source community, you're involved with the developer community at large as an instructor and a thought leader and someone who really contributes a lot of great educational content... So tell us a little bit about yourself.

**Ahmad Awais:** Thank you for saying all that. I don't know what I can say beyond that... I'm Ahmad Awais, and a fun bit about me is right now I am the head of developer relations at this company called Rapid API. I have been a teacher -- I call this a genetic bug in me, because I come from a family of teachers, both grandparents and my parents are teachers... So I tried running away from it for a couple of years, and then I saw like "Okay, I have to teach, no matter what profession I'm working on."

So beyond that, I've spent a major part of my career writing open source software. I have over 200+ GitHub repositories, all free and open source software... And as you all know, I'm a big fan of automation; saving time, being productive... And I'm spending more time on automation than I'm supposed to.

\[04:05\] I have contributed to the core software of WordPress, WebPack, React... A teeny-tiny contribution to NASA's Ingenuity Mars Helicopter mission. That was a really big deal to me. And happy to be here.

**Amal Hussein:** That's amazing. We're so happy to have you. So would you consider yourself like a polyglot? Is JavaScript your favorite, or are you language-agnostic?

**Amelia Wattenberger:** So the fun story there is before me there were like 13 electrical engineers in my family, so every engineer was an electrical engineer from the same university. So when I asked "What should I do?", they were like "Electrical engineering is the mother field of everything. Even computer science." And they knew that I was interested in computer science. I was writing Python script shells back then, before college. Then I ended up becoming an electrical engineer, for a lack of guidance, or whatever you wanna say.

So I tried out like 26 different languages, and now I call myself a web purist; I love the web platform. There's nothing anyone can do to make me change my opinion on that. I used to be one of the few people who used to manage a couple of lines of JavaScript in the WordPress code, back when JavaScript was not cool at all. And now JavaScript is this big thing, and Node.js is this big thing.

So definitely, JavaScript and the web platform, as I said, being a web purist, is what I do. I love the web platform, the openness of it, the APIs, and everything.

**Amal Hussein:** Amen, brother. Preach on.

**Jerod Santo:** You're in good company, yeah.

**Amal Hussein:** Yeah. Amelia, did you catch that shade, where he was like "I became an electrical engineer, for a lack of a better guidance?" \[laughter\]

**Amelia Wattenberger:** I did...

**Jerod Santo:** So I've been automating things for many years, but I haven't used Node very much to do so. I think we're gonna focus on automation, but also Node-based automation. Ahmad, are you doing everything in Node nowadays? Do you automate in Bash, or do you use other things, or is it all Node-based?

**Ahmad Awais:** For the life of me, I was afraid of the terminal. I was like "I don't know who these people are." And the funny thing is I come from the world where I used to write firmware software. It doesn't get more meta than that. You're writing machine code by hand, counting those zeros and ones and everything... And I would just grab a couple of zeros and ones to do just switch to off. And that's how I started; I was like "Okay, if I grab \[unintelligible 00:06:32.16\] menu button it's sort of a fake security patch, so no one can press the menu button and go to the menu and see videos and photos or whatnot... Stuff like that.

I used to see people who would write really weird-looking Bash scripts, and do really fun stuff... So I kind of forced myself into learning Bash early on, because I wanted to kind of like -- I didn't even know back then that I would be pretty much excited about automating anything. I kind of foresaw that if I could automate just three things, like -- for example, I'm in this mindset that I want to work on this project. If it could just open up the browser and the code editor (the terminal), that would be it for me. Even if I'm watching Netflix or whatnot, if it just opens up at a particular time, I would start writing code, so I would be more productive. And that is how it started with Bash, as you all said.

And then I started \[unintelligible 00:07:28.03\] I don't know if I'm pronouncing his name right; he's an engineer \[unintelligible 00:07:35.05\] Google, and he has his dotfiles open-sourced. And then I learned about "Okay, dotfiles. Right." And everything about Bash and dotfiles got me away from Windows to Linux, and even to macOs, where dotfiles are a thing.

\[07:58\] And I think I've spent a couple of years writing only Bash, and when I really got excited about it, I kind of found out that the community that is around Bash automation is not that interactive. You know, you put a Node package on Npm and you can expect thousands of downloads by the end of the week, right? You put a Bash package - where and how, what is the package management there? What is the release cycle? How do you version it? It's a bunch of tangled mess, right? And that is what I'd never really liked about Bash. So when I started writing automation scripts in Node.js, and being a web purist, I love the web platform, I know the JavaScript syntax, I have always -- "hate" might be the wrong word, or too strong, but I could never remember how to write in Bash, how many square brackets it has to have, and what is that hyphen and z thing. So JavaScript is more natural to me as a web developer. But right now, I have been able to write so much automation software around my work that is in JavaScript, that allows me to not context-switch a lot. But there are definitely things that you cannot do in Node.js.

**Amelia Wattenberger:** I love your point about how important the ecosystem around the language is. I keep trying to learn Bash, but it never sticks, because you never get feedback, and there's no one place to go look to see what's available, or what the right way to do things is... So I thought that was a great point.

**Ahmad Awais:** Yeah, I think it came as a realization. It was not "Okay, Node.js has a better ecosystem." You know how you go to a particular cafe or a particular restaurant and they tell you their Wi-Fi password, and you have it stored, you just don't remember what that is? And now you're with friends, and the waiter is not coming; they're asking you "How are you able to connect to the Wi-Fi? What is the password? So you always have to dig through a bunch of files to see what was the password. So I wrote a Bash script Wi-Fi password that would just tell me the password for the Wi-Fi that I'm connected to, using the macOS keychain.

While CLI, the automation there was really fun. Everyone would have odd questions around "How do I install this Bash script? Where should I put it? On the desktop, or in some system resources folder, whatnot?" But I did the same thing with Node.js and now everyone knows "Okay, I'm just gonna Npm install it." Or even, Npx run it.

So it was a realization there, like - if I create more automation software in a language that people like me understand better, it would just be adopted more. There would be more people that would get excited about it, there would be more people contributing to it... The community part of it is much bigger now. Bash has a big history that Node.js just does not have... But Bash is still stuck there, where a bunch of things are not -- there are no standards there. And that is I think what is actually hurting Bash; not its syntax. It's the way we distribute it, the way we interact with it. \[unintelligible 00:11:06.20\] has to be ASCII. How are people generating that ASCII code? I've seen beginners ask such questions when learning Bash.

**Jerod Santo:** I think Bash is great for when you're just starting something. So if you have seven command line commands that you run all the time, you pull those seven out, you slap into a Bash script, verbatim, pretty much, make it executable, and run it. And now you have the start of something great. Maybe you're done, maybe it's never gonna leave your laptop, and it's just gonna work that way... But I think that's a very good point you're making. When it comes time to actually get serious about this automation, and distribute it, and have collaboration on it, you just need better tooling. And Bash is as old as time itself, so it existed and it began in a time where we just would -- you know, we'd just copy and paste somebody else's Bash script into our own Bash script, and that's how you'd distribute your code... Like, "Here. Either download this file and throw it in your path, or literally just copy the parts you want and type them out", or what have you.

\[12:13\] But I often start with Bash, and as soon as it gets complicated, maybe I'll do a little bit of looping, and that's about it. But once it gets beyond, like, these are shell commands that are run in order, and maybe I'm looping over some files and doing it again - beyond that, I'm reaching for a "real" programming language.

Now, I know a lot of Bash enthusiasts who go beyond that. Maybe they have a couple hundred line Bash scripts... But those are few and far between.

**Ahmad Awais:** Yeah, it has it charm. For example, when you start piping things in Bash, and you have to use some sort of UI... It may not even be UI; it may be just templating. Like, for example, I want to rename a couple of files and I want to rename it -- for example, I'm scrapping a couple of YouTube videos from a YouTube playlist and I want the name to look a particular way, I want to use a couple of things, the time and whatnot... Doing the same thing with JavaScript is just so easy. And with Bash, you have to have a cut command, pipe to that, and then a grep. It's more harder than regex for me, and that is why I like -- I used to completely lose hope... Only when I kind of got this realization "Maybe I should try Node.js for doing this."

I think about a year ago I did this Twitter poll, and I also did it on Reddit - "What do you really use Node.js for?" And I was able to pinpoint that people actually write a lot of scripts with Node.js. Whenever someone talks about automation, it's more Golang, Python, Bash or whatnot. But there were more votes for creating automation scripts with Node.js than creating APIs... Whereas you would think that Node.js is for APIs, right? But everyone is writing Npm scripts nowadays; it is sort of a small Node.js script. If you want to go beyond that packages and file you end up with something .js, because who likes to create a Bash file to run their unless they're trying to run on the server. And the server has also Node.js nowadays... So it comes from there, I think.

**Amal Hussein:** Yeah. You know, I've been trying to stick up for Bash here... Y'all have been bashing it down...

**Jerod Santo:** Haah! You just wanted to use that pun.

**Amal Hussein:** No, actually -- everyone's analysis is so on point. I think Bash is like this little curmudgeon in the corner, that nobody likes talking to... And I think always to your point about community - there is no community around Bash, really. There's maybe a small -- I would say like a hobbyist community, or people that are maybe super/hyper into automation, that are really Bash afficionados... But the majority of engineers I know - they have their set of Bash tricks, and they copy-pasta them again and again, because they don't even take the time to really internalize what is actually going on here. But for me, Bash does so much heavylifting, and it's just -- you know, Node.js is an abstraction that uses C++. C++ is kind of painful to write and maintain, and we just keep building these building blocks... And Npm packages are also abstractions. And I just feel like -- you know, the terminal is the most intimate conversation you're gonna have with your computer, and really when we're writing software, we're just telling other programs what to do. It's just a whole bunch of APIs talking to each other. And I really think Node, with the help of C++, is able to kind of like super-charge what you can do with JavaScript... And yeah, you might not be able to do everything you can do in Bash, but you can get pretty far.

**Ahmad Awais:** \[16:01\] Yeah, I'm not saying Bash should not exist... \[laughs\]

**Amal Hussein:** Of course.

**Ahmad Awais:** I once had this epiphany that all of my dotfiles should now be small CLIs in Node.js, so ungratefully I started with this mkd function I have in Bash, which also creates your directory and CDs into it in one go... And it turns out cannot really do that with Node.js. I've written hundreds of CLIs, and I was stuck at this basic thing, where it's a child process and it does not understand what was created, because it was sort of created at the OS, and not Node.js, and there are not APIs there... And I spent like two good days on creating a one-liner that Bash had in Node.js, and I just gave up. I was starting to really -- like, I think JavaScript and React has corrupted us... I have a bunch of files in a folder, and I am trying to list them and do things with them in Bash. I can do that, right? But I want to await that thing. \[laughs\] And I have no idea how I can do that with Bash. I want to make a UI, a loader, so I know it's happening in real time, and it's not a fake loading bar or whatnot.

There's a really great project called ZX, by Google. It's a tool that is actually a Node.js-based Bash scripting language, where you could just await something like this, await LS. So it's a bunch of Bash inside your JavaScript, inside Node.js, and it just works. So I think that tool actually came out of this frustration that people wanna write JavaScript, but they want to use some parts of Bash just as is, you know? So I think there is a fun exchange between these two languages.

**Amal Hussein:** Yeah, but don't you think that some of these problems are because these concepts don't actually exist in the lower-level languages? Like the concept of await, and promises - they don't exist in C, and they don't exist in these low-level languages. And funny-funny back-story, actually - coincidentally, I was having a conversation about this exact topic with Alex Russell yesterday, and he was explaining to me why they tried implementing promises with TC39 in 2010, and they just gave up... Because they kept trying to explain to these low-level implementers what are promises, why is this important to web developers. TC39 a long time ago didn't really have a good representation of web developers. It was mostly actually language designers and implementers, the folks who actually work on the engine in browsers... So you know, there was just no empathy. It was like "What is this promise thing? What are these web developers doing? Why do I need to deal with timing issues? Why do I need to introduce handling for asynchronicity?"

It's really interesting, concepts don't always translate one to one across languages and ecosystems as well... So there's a little bit of this uncanny valley where you need to kind of like make Bash do an await; like, how do you do that? I can't do it. If you gave me a million dollars I don't think I could do it today... So how did you solve that problem Awais? Tell us.

**Ahmad Awais:** Yeah, it's this library from Google that I talked about, ZX. Before that -- I think it's really new; it has like (I think) 20,000 stargazers on GitHub, or something... But before that, it was a bunch of different packages hacked together. Some of them had Web Assembly, some of them had lower-level Node.js and C++ code. That would allow you to, in a very hacky way, do this kind of stuff.

I had this huge course on Lynda.com, I was trying to learn photography. I promise you, I've still not watched that thing... And really like a ten-hour long course. And somehow my ISP in Lynda was not working out really well, so I've figured they're not allowing me to download this. Maybe I could write a script to download it. But then downloading it would be really bad, because I didn't have that much space. It was like a terabyte, or something. It was really big, because it had draw files that that instructor wanted us to do look at, and whatnot...

\[20:14\] So I hacked together a bunch of CLIs, and I was able to download it through a CLI called YouTubeDL. Then I uploaded it to Dropbox through a server on DigitalOcean. And from there, I was able to kind of stream it on a peer-to-peer network. So my electrical engineering knowledge came to a little bit of help there.

But the fact that I was able to do that was impressive. I completely left -- you know, I had just bought a new DSLR for the first time, and this was like 6-7 years ago... And then I put that camera aside and I just got more and more excited about this whole new world of automation. Like, if I can do this, what can I do?

And then I started really liking data. Where I come from - the stock exchange actually still publishes numbers using PDFs. They don't have a public-level API that anyone could use. So I had to scrub those numbers from PDFs to create a sort of real-time database plus API... And that was so much fun.

I know it's a bunch of things that were hacked together and bashed together... The developer experience was just not there back then. And that is what I think Node.js does for me. If I have to do this same thing again, I just do it with Node.js. It just makes sense.

People are even crazier... They are trying to write CLIs with React. For me it's too much... \[laughter\] But people are doing that.

**Amal Hussein:** Yeah, I'm gonna refrain. I have no comment on that. \[laughter\] Yeah, that's just kind of like, you know, everybody seeing React as the nail, and they have the hammer, or whatever. Trying to fit it into places that it doesn't necessarily belong. But I once learned about a real-life project that used React's render lifecycle to control events in a drone. So they were using React's lifecycle hooks, and they were using React in a non-rendering capacity to run a drone. I'll see if I can find that project and link it in the show, but... Where there's a will though, there's a way.

**Amelia Wattenberger:** I'm surprised there's enough space on that drone hardware for the entire React runtime... That's amazing.

**Amal Hussein:** Agreed. I'm just amazed that an engineering manager approved this project... But that's besides the point. I think the point is maybe that all these things are just -- you know, everything's software, everything has an interface, and it's just bits talking to bits. And Node.js kind of gives you that -- it just gives you an entire ecosystem of reusable, composable utils that you can use to supercharge and solve all your problems. That's kind of like what I'm walking away from conversation with.

**Ahmad Awais:** Yeah. For me, on one end, I don't like UIs anymore. I love to design. I wanted to be a designer. I couldn't ever sketch. And then I found out like, okay, engineering is paying for the food on the table and everything... But on one end I create CLIs in the terminal which has no UI or whatnot and the other UI for me is components. It does not have to be even \[unintelligible 00:23:48.01\] It doesn't even have to be Markdown. I love React Components a lot.

\[23:58\] For example, my resume has gone through so many iterations over the last 15 years. It started with a Word document, and I used to have InDesign for my resume and whatnot. And now it's based on Next.js, because it's so easy... Like, there are numbers in there which are live, so whenever someone asks for my resume, I just send \[unintelligible 00:24:16.04\] and those numbers are live. They're my followers that are being pulled through the API and whatnot. So I just don't know of a better construct for UI than components. It's sort of minimal in that way to me.

**Amelia Wattenberger:** Yeah, I was waiting for the data viz expert to chime in here, because --

**Jerod Santo:** I was also deferring to Amelia on that one... \[laughter\]

**Amal Hussein:** She's thinking...

**Amelia Wattenberger:** I was thinking... I'm just a little slow today. I was thinking how interesting it is that you were interested in design, and then you switched to -- I think what you were saying is being more interested in component design, and the design of programs, which... I think that's a really interesting parallel between like - you don't have to be pushing pixels on a web page to be a designer, but if we're creating scripts, then we're also designing things for humans.

**Amal Hussein:** Yeah. Like, Bash has a user experience. It's painy, but it's there...

**Amelia Wattenberger:** Might need a few more designers...

**Amal Hussein:** But no, I mean -- like, I actually think not all CLIs are created equal, and there's a lot you can do when designing a tool that doesn't use a graphical user interface, no GUI... Yeah, there's a lot that you can do to make things easy or painful. Think Vim versus your favorite CLI tool. It's a much more delightful experience in the terminal when you have a sense of predictability, you have a way to get in, get out, you know it's coming, you have helpful messaging... So there's definitely an arc there, I think. Not all CLI tools are created equal.

**Ahmad Awais:** A recent trend that I've been looking at is a mixture of both. For example, whenever I want to send an API request, I love my terminal. I can send a call request. It's just when it's bigger than a GET request, it's a POST request when it has a bunch of data - I hate writing those. Slash this, slash that, slash... Right? I'm completely forgetting what the name of that company is, but it's a CLI -- I think it's called... I'm completely forgetting what it is.

**Amelia Wattenberger:** Are you talking about Fig?

**Ahmad Awais:** Yeah, it's Fig. Yeah. So inside the terminal, for the silly parts where there's a lot of repetition, it opens up a UI. That part of UI is really good. You can fill that data, the parameters there, and then it turns back to the CLI. So it's like Zapier with code, right? \[laughs\] If that makes sense.

**Amal Hussein:** No, totally. So we're gonna get into all the kind of nitty-gritties of this ecosystem... We'll be right back, kids.

**Break**: \[27:00\]

**Amelia Wattenberger:** Alright, so I'm curious - we were just talking about how to design good user experiences... I'm curious, how do you go about creating scripts in Node, and how do you know of build in that user experience that's easier to use for developers?

**Ahmad Awais:** Yeah, so I think there are two parts to this question. One is how do I end up thinking about "Okay, this should be a CLI", right? That is sort of a life choice I made; whenever I wake up, I open up my terminal and I write "dashboard", and it prints out everything I care about for that day. It has my to do list, it has the number of sales of my courses, the meetings I'm gonna go to... A bunch of things, all inside the terminal. And these things keep changing. I scrape a lot of data. I use \[unintelligible 00:28:57.15\] from GitHub as well.

So what I do is, for example -- I also don't watch news. It's been a long-term commitment; I think I'm in the 9th or 10th year of it. For example, a fun story here is -- Covid was happening, and I was the last person to realize that it was happening. I actually just quit my job to travel to 40 different countries throughout 2020, in Covid...

**Jerod Santo:** Wow.

**Ahmad Awais:** ...and I spent six months planning that. So I was the last person to find out like "Okay, this is something that is beyond -- It's global", right? And then there was just so much weird news out there, I just couldn't pinpoint what was the right thing... Even if I went to WHO's website, it was very hard to figure out where is the Covid data, where are the stats that would give me information the way I wanted. I don't think there's a news channel that would let you customize news the way you wanted. There's a good startup idea, by the way... \[laughs\]

So I created the CLI and I just put it out there... And that CLI has about 2.89 billion API requests. I'm just scrapping a bunch of Covid data, and I just put it on GitHub. And that is exactly what I do. Even for a really small thing as a CLI user experience on how to tell people "Press space" or "Press enter", in the Bash community -- and I'm not trying to bash them again... But there are just so many assumptions that a dollar sign -- that dollar sign kept me away from the terminal for so long. Whenever I would run a script, it would just not recognize the dollar sign.

I tried to create so many packages. That could be just a couple of lines of code to make sure people were doing it. There's a CLI welcome package that so many CLIs are using, that I created. All it does is just branch out the header of a CLI. There is a CLI help package, and then there's a particular way people write so many spaces to generate help, and they are really good packages. Sindre Sorhus has a lot of work on this, like his [meow framework](https://github.com/sindresorhus/meow). Where it falls behind is when you have to write things that would contribute to user experience and the design of your CLI.

So I've matched a couple of different projects to create a tabular interface, so you would just have to create a JSON file - or a JavaScript object, if you may - to tell that CLI what is your flagged JavaScript object. In that object you can define, if you type let's say minimal or m, it would just print out the less designed version of the CLI right now.

But to be able to that in the Bash community - I don't know how they do it. They manually enter and calculate the amount of space, or they run a loop on something like that... But in JavaScript we have really good tools that could map things out like this.

\[32:02\] So throughout my journey of open-sourcing and creating CLI projects I have relied on creating lots and lots of small, tiny projects that I'm just pooling together to create CLIs. Once I'm done, it takes me literally less than five minutes when I start writing a CLI project to create a small CLI and to be able to publish it on GitHub, on Npm, with really good documentation and API reference of all the objects - less than five minutes for a small CLI. And that only happens because I have so many different packages, so many automations running for me... And I feel really good when I'm able to do that.

**Amelia Wattenberger:** What's your philosophy behind writing scripts for yourself and writing scripts and then publishing them on Npm for everyone to use?

**Ahmad Awais:** So I used to be like "You know, I should start writing open source code", and I started 15 or so years ago with WordPress. I've contributed to a bunch of different software: React, Next.js, WebPack... I actually helped React get relicensed as an MIT level... But things like that happen really rarely in your life; you cannot really wait. There's a child team concept in WordPress, and everyone knows it's just one functions.php file, then a style.css file where you just write one thing, that my parent team is this team. I created a small package for that, and that was a huge success. And it was like I think 8 or 9 years ago.

Then I realized that I can never decide what or which of my open source work is going to go viral and is going to be something that people are going to be crazy about. Or something that I would be good about, that it had a big impact. So what I decided was if I could automate a bunch of different things that are just wasteful... For example, you see how many automation scripts you find on GitHub gists... I think that happens because people are like "I don't wanna write a readme. I don't want to publish it on Npm. Maybe I'm on a machine where my things are not set up, but this is a really cool script that I just want to put out there." But the problem there is it's not really useful. People cannot pull that into their -- you know, you just broke JavaScript's community part. That was what it was good for, right?

So I automated all of these functions, so I don't have to worry about "Okay, now I have to have a changelog file, and now I have to publish notes on GitHub releases." I automated all of that, so all I could focus on was solving a small or big problem. That way, anything that I see when writing code in whatever project that "Okay, this could be useful", it takes me literally a really small amount. It's like copy-paste here, run a command... In my Node CLI of course I created a CLI that creates CLIs. I actually got so excited about it I ended up recording a huge amount of videos on it... But it's so intuitive that you only have to have done one command and it will know all your defaults, what should be in your changelog... Then I invented a small emoji log commit spec for messages, which relies on 5-7 emojis, nothing more than that... Which is really good for generating changelogs and generating release notes.

So a bunch of these things get automated by just writing good commit messages. So once I was able to do that, I was able to improve my output from churning out let's say a couple of open source software packages to 30-40 open source repositories, even if they are really small, even if they are not that useful.

For example, there's this month where all of our Muslims fast. It's called Ramadan. And we have sehar and iftar times. So I have a CLI for that... And a bunch of people use it. Every time you wake up, like 3 AM in the morning, and everyone's like what is the sehar time today? I only have to open up my terminal.

**Amal Hussein:** \[36:22\] I identify as a Muslim as well, and I love how your answer to "It's 3 AM and I don't know if I can eat yet" is like -- you know, I'm gonna just open up my laptop, run some commands in my shell... I love how that's your answer, versus like, you know, refresh this website that I may or may not have open. You've clearly gone to the other side, my friend, in a good way. And I just wanna step back a few, because you dropped a lot of good knowledge there.

First of all, thank you for the Covid CLI. I think that was the one project where I feel like "Wow, any JavaScript is actually useful." Just kidding. \[laughter\] No, it just made me really proud of Npm and the community and the ecosystem that we've built, that has really solved a lot of pain points around code distribution very well. So that's amazing about our ecosystem, and we're very lucky for that. Folks are coming into JavaScript without scars from prior lives. You don't know how good you have it, folks... We have a really nice ecosystem for code distribution.

But that being said, what you're talking about here is -- you're really humbly talking about good software design and good software architecture. And we're using automation as a use case... I feel like you're talking about principles of modularity, you're talking about really building out the pipelines so that you can actually focus on the problem that you're trying to solve... And I feel like one thing that really gets in the way for a lot of people when they're trying to get started with automation work or writing scripts - it's the pipeline piece... Because so often everybody knows what business logic or what method they need to write to do the thing that they need to do. It's all of the other pieces around like "How do I connect with my OS? How do I get it out? How do I get it in? How do users interact with it?" That's the stuff that really trips people up.

And it really feels like we're at a tipping point now where automation is really critical. I think it's a critical skill for developers to be able to really -- I hate to use the word "10x", but to 10x yourself. And I'm using this in a way that's really very much around the marathon that you have with yourself, not with others. If you wanna free yourself up to not work on the same problems again, look for ways to reuse tooling and code and being able to build these pipelines for yourself. But maybe we're at a point now where we don't even need people to learn how to make CLIs for CLIs, because - it's an open source tool; go use that. And then focus on the code you need to write to solve your problem. We'll take care of the plumbing. That's the beauty of open source.

**Ahmad Awais:** I think you kind of picked up on one thing I was trying to mention... For example, you would listen to \[unintelligible 00:39:18.29\] motivational speaker or something and then they are saying "You just have to pick yourself up and go to where you run. Nothing more. If you feel like running, you can go on. Your task is to get yourself in a car and drive to where you go to run." The rest, your body and your brain will just make things work for that.

For example, as I told you earlier, I was studying electrical engineering. I started double-majoring in CS; I had less time. Even to date, I have this alias called "o", and if I'm on my work computer, I go to my work terminal and I type "o" and press enter, it will just open up everything I need, the way I left it there, for that particular project. For example, there's a project for TypeScript, so it's "to", or it's something for recording, it's "ro" (recording open), so it would open up everything.

\[40:14\] So it gets me to that point where "Okay, now I have to open up ScreenFlow, and now I have to open up Adobe Audition, and now I have to set up all these three different screens I have..." You know, when you sit down to study and you're just sharpening your pencils, and you're like "Okay, I'm done for today." So for me, getting productive is -- I want to spend the most amount of time on the actual thing, and that is what I'm mostly excited about, not writing documentation. I know documentation is useful, but the fun begins when I'm trying to solve a problem and when I have solved a problem... And then it's all about "Okay, now I have to write TypeScript types" and whatnot to make it look really good. So I want to be able to get there as soon as possible. I'm wired that way I think.

**Jerod Santo:** So let's say I wanted to take your CLI superpowers and inject them into my body, to also become super-powerful like you. Where do I start? Because I see there's a Create Node CLI repo... Is that the one? Or where do people go to say "He's done all the work. I can create CLIs that are super-awesome, super-easy, just like he does"? Where do we go?

**Ahmad Awais:** There are a bunch of places you can go. First thing I would say is if you want something completely free, I have -- for example, I've been creating these CLIs for a while now, and people have been asking me to teach this, so I started a course called NodeCLI.com. It's a paid course, and I recorded 30 hours of content, I deleted two thirds of it. It's ten hours of content now, 20 projects, 100 videos. So I'll handpick you, I'll teach you what is Node, how people are teaching Node.js event loop in the wrong way, stuff like that. I will give you how to create templates, how to create -- it's more than just creating a CLI. It's more about "How can you automate your life as a software developer?" And the fun part is all of the exercises, all of the code that I created in that course is open source. So you can go to my github.com/ahmadawais and you can find it there. It's pinned right there.

Even if you don't want to go through that, even if you just want to create good CLIs, I created a project which was like two hours of videos, called "Create Node CLI." It's just like Create React App for Node.js and CLIs. It was a fun project. It can remember things locally; what was the author name you put in last, it can remember that kind of stuff. It's really \[unintelligible 00:42:41.20\] that way. It can generate all the files you need, it can set things up, wire things up in a way that you start right there with "Okay, this is the bunch of code I picked up from Stack Overflow, or I've figured it out." It has everything figured out - the documentation and everything else. So you just paste that code and now you have a CLI.

So Create Node CLI for something you want right away. My Node CLI projects on GitHub, which are completely open source, even the documentation is open source... And if you want paid videos, NodeCLI.com.

**Amelia Wattenberger:** I saw a tweet today that said something about "I don't understand why people pay for courses. I'd rather you just offer me a service and I'll pay for that. Don't make me pay to learn something..." which first of all, I totally disagree with... And second of all, I think it's funny that you're both offering a course to teach people, and you also have the automated scripts to do the services for them. I'm also curious, which do you see more interest in? Are more people using the automated script to make a Node CLI, or are more people interested in taking the course?

**Amal Hussein:** Wait, is this a trick question, Amelia? Because I just was curious if you were trying to bait at the engineers constantly reinventing the wheel problem... \[laughter\] You know what I mean? So Awais, do they use your awesome tool that's been vetted, or is everybody trying to...

**Jerod Santo:** Build their own.

**Amal Hussein:** ...fork and one-up your-- yeah, I'm just joking. Just kidding. Just kidding.

**Ahmad Awais:** \[44:22\] I think people learn in different ways. I think part of me open-sourced it because I come from open source and I've learned so much from open source. Every problem I have, I just go to GitHub and 
Sindre Sorhus \[laughter\]. If he has a package, I can just trust that package. So I kind of owe that to open source. But I'm also selfish here - I really want people to build CLIs, because I know I don't have all the time in the world, but they are gonna build something that I'm gonna use. So there are a bunch of CLIs that my students have created that I am using. So they paid me for my course and created something that is actually helping me. It's either being selfish or whatnot... I just wanted people to know that this is how I do it, and you should definitely do it, even if you don't use what I teach here.

**Amal Hussein:** Yeah. So I went through my own journey with automation, and overcoming my fear of Bash, and the term-- I would say going beyond surface-level terminal commands which most people are familiar with doing day-to-day work... And I have to say, just from my own experience, it's a journey, and not everybody's path is the same, you're not solving the same problems as other people... I really love this distinction of pipeline versus source code. If you can kind of really maybe just draw the line there - write the code that does the thing that you want it to do, and then tackle the problem of how does it connect to everything else and how do you get things in and out of it as a secondary step. Because I think sometimes when you start doing things that are so brand new, and -- you know, it can be daunting. It's hard to get steam and momentum. So you can kind of build on your successes incrementally in that way. But it really is a journey, and it's a journey that never ends; operating systems and languages, libraries, tools, new problems arise, new APIs come out, old problems creep up, security issues pop up... It's very much a living, breathing ecosystem, even though a lot of us think of the terminal as very static. Did y'all know there's new versions of Git? There's features being added to Git. Linux is a living, breathing project... There's just so much. So it's a journey, but it's foundational knowledge that really is like the missing manual for many web developers who started out kind of doing higher-level software design.

**Ahmad Awais:** I should probably just mention this - I used to think that creating automation is so hard, and what clicked for me was when Chris Coyier showed that you can actually write "cd", space, and then just drag and drop that folder, and it really just translated that path and just press enter. That was so easy. It was two years ago, and I learned that - okay, "usr" is not user. It's user system resources. And everyone says go to this user library. Not everyone has that deep, in-depth knowledge of how Linux was based on Unix, and how these resource folders were created, and whatnot.

For me, what was stopping me from jumping into this command line world was "How do I even cd to this folder?" I know it's on Desktop and this is it's name, but I don't know where is Desktop... When I was young. And just somebody showing me "Okay, you can just drag and drop and cd into it", I'm like "Okay." And there's a fair amount of \[unintelligible 00:48:04.25\] It starts with that thing, and then it's a big rabbit hole, you really start to enjoy it, and you spend more time writing automation software than actual software... But it's so much interesting.

**Amal Hussein:** \[48:18\] Yeah. Also, Awais -- Awais... I called you by your last name. Ahmad, to your point - it's a journey, but also a lot of software engineering is kind of fighting your distraction factor. You have to not be distracted by what you don't know. You don't have to know all of the methods in the jQuery API to use a few methods in jQuery. Or even create great apps using jQuery, right?

So the really beautiful thing about the shoulders of giants -- like, we're standing on the shoulders of giants because they've designed these great APIs that are very modular and can be used as individual segments.

So first you're learning how to use cd, then you're learning how to use mkdir, then you're learning how to use touch, then you're learning how to do pipes, and greps... These are all composable elements that you're gonna kind of put in your knowledge tool chain. So with that said, before we close this segment out, Ahmad, I'm gonna ask you a question. Do you have one inspiring thing to say to someone who's like "You know what - CLI? No way. Terminal? Yuck. I don't even use command line for Git, I use a GUI. The terminal is scary." What's an inspiring thing to say to that person to get them over the hump?

**Ahmad Awais:** Yeah, I don't know what that could be... For me it was like -- I wanted to be a designer, and now I love the terminal, the idea of automation. I haven't given up on design since. I love writing CSS from scratch. I've contributed to Bootstrap, but I've never really used Bootstrap. I am weird that way. I love the design part of things, but it doesn't always have to be GUI versus terminal.

If I'm git-bisecting something, I would definitely recommend doing that. It's so easy in a GUI. You just drag a branch here and drop it and it will just take care of everything. But everything else - I don't want to write a bunch of things. I think sometimes once you start writing automation, it's the same thing; you have like ten images and you want to rename them, or a hundred images and you want to rename them in a particular way, then you feel like "I don't know why I became a software engineer, if I can't even write something that would just--" I can see it, I can mentally imagine it, at least in JavaScript... If you just know what are the basic integrations, how to test the file system, how to read these files and rename them, everything else is just really, really easy. So it's a superpower that you can just have. It will pay its dividends over the years.

**Jerod Santo:** Amal, can I take a crack at answering that one?

**Amal Hussein:** Oh yeah, please.

**Jerod Santo:** So if you're sitting at your laptop and somebody comes over, and they look over your shoulder, maybe you're trying to impress them. Maybe it's a girl, maybe it's a boy. And you fire up your terminal, and you type in a command and fire it off and things start happening. They'll think you're really cool.

**Amal Hussein:** They'll think you're a hacker, man...!

**Jerod Santo:** That's right!

**Amal Hussein:** Dude... Bro...!

**Jerod Santo:** They'll think you're smarter than you actually are. There's a reason.

**Amal Hussein:** You're hacking the world. Yeah, it's so funny --

**Jerod Santo:** Do you need any other reason? It's fun.

**Amal Hussein:** No, legit, that's actually very true... Because I'll be doing work on airplanes sometimes, and then like an hour later I look up and the person next to me is like "You're my superhero." I'm like "Really? I was just struggling with some basic stuff for like 40 minutes, but I'm glad you think so."

\[51:57\] But yeah, Awais, to your point - know your shortcuts. If anything, just for your own ego, so you can feel superhuman and get a little closer to the metal. So that's it, we're gonna take a short break and we'll be right back with fun stories of our automation journeys, and fun examples... And our folks on Twitter who've shared their favorite automation tips... So - talk soon!

**Break**: \[52:23\]

**Amal Hussein:** Alright everyone, so we're back, and this is gonna be my favorite part of the show, which is like story time. Automation story time. And no, we haven't written a bunch of scripts that are using robot voices to narrate these stories. That's not happening.

**Horse JS**: Are you telling me I narrated this stories for no reason? Beep. Boop. Bummer.

**Amal Hussein:** These are true stories, real humans, real war stories and proud moments... So everyone, what's the thing that you're really proud of doing using automation? Even if it was renaming a thousand files... Like, that's a thousand files. That's cool. But what are some stories? Jerod, do you wanna go first?

**Jerod Santo:** Sure. So back when I first got started I actually didn't consider myself a programmer or a developer; I was more of a scripter. I was studying information security in school, and I liked to just script things, but I didn't actually think of myself as a developer. When I first got out of college, I was a network administrator, so I had managed some Linux machines, mail servers, stuff like that... And there was a lot of manual tasks on a network to keep it running. This is back in the early aughts... And I had a lot of jobs I had to do every single day. And then slowly I just automated every single one of those jobs to the point where I didn't really have a job anymore, but everything was still running smoothly. So I used that opportunity to learn web development on the job, while my job was doing the job for me... Which was pretty cool.

So I actually learned how to do web development while being a Linux network administrator, because I had automated all the things. So that was pretty powerful. But my more fun one - I'll do this one real fast - is that I like to smoke cigars, and there is a website... It's a cigar auction website, and they have a particular auction style called freefall, where they have these falling prices that reset on occasion. So the prices start high, and then they fall down to some sort of threshold, then they go back up. And the reason they do this is because they want you to sit there and watch it and buy it when you think it's low, but you're not sure exactly "Is this lowest, or could it get lower? I don't know, I'm gonna buy it anyways." But as a developer, I thought "You know, there's some sort of minimum amount that it's going to get to eventually. And it may not hit it every time through, but it's gonna hit it at some point."

\[56:07\] And one of my best friends used to have a job where he would make phone calls all day, so he would sit there and stare at the screen and watch them free-fall, and buy cigars for us at the lowest possible price. And then he doesn't work there anymore, and I didn't wanna stare at the screen all day, so I wrote a script that would basically imitate my eyes, watch for the lowest price, and let it run for hours upon hours on end, until it got to the lowest price, and it would log it... Then it'd come back and it'd say "Okay, here's the lowest possible price." Then I'd put it in buy mode and it would watch it again until that lowest price came in, and it would buy the cigars for me. I actually still use that. I just used it yesterday. It still works... And I think that's pretty cool.

**Amal Hussein:** Jerod, I think the biggest thing I'm surprised at is that you smoke cigars. You don't strike me as like a cigar guy, you know? This is fascinating.

**Jerod Santo:** Hm... What kind of a guy do I strike you as?

**Amal Hussein:** I don't know, not a cigar guy. Now I have to reevaluate my understanding of who you are.

**Jerod Santo:** Hm, the plot thickens.

**Amal Hussein:** Yeah, the plot thickens. I'm like "Jerod--"

**Jerod Santo:** I'm a multi-faceted person.

**Amal Hussein:** Twist! Yeah, I love this.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** You have depth.

**Jerod Santo:** Thank you. You thought I was shallow, but it turns out there's one facet...

**Amal Hussein:** I feel like a lot of people did that with the vaccine situation... I know I did. I built a little script that just refreshed and checked when appointments were available in my neighborhood. I didn't really wanna track like two hours to get a vaccine in the pandemic... So that's what we did. I think it's amazing how -- it feels like cheating, but...

**Ahmad Awais:** When I went there, I was the only one... \[laughs\]

**Jerod Santo:** I think anytime there's a job that's like "Refresh this web page over and over again", that's a key moment of like "Yeah, I'm gonna automate this, because I'm not gonna sit here and just hit refresh for hours", you know?

**Amal Hussein:** Yeah. And actually, speaking of which - so we did a Twitter poll, so we'll be sharing a few stories from what folks shared online... But Cypress - Cypress is a tool that is used for automated, end-to-end testing. It's like the little robot that clicks on your web apps... But there's developers who use Cypress to avoid having to get back into the same state and click a bunch of buttons and manually log in every time... So it's like -- Cypress is running in watch more, it gets them back to the exact same state that they need to be in for the code that they're writing. I'm like "That's genius."

I have to say, the worst part about UI development for me is all of the iteration cycles. So if I can get a robot to do that for me, and while also getting test coverage... Like, you're writing your test to continue testing your code, getting to this state, and then you're able to just reproduce it. And that's a trick that I learned a very long time ago, when I was very new to software engineering.

There's a senior engineer who has really shaped a lot of my thinking... I got a bug for the first time, and he's like "Alright, cool, let's figure out how to solve this." He was like "Well, the first thing we're gonna do is write a test. We're gonna write a test that reproduced the bug. And then we're gonna be able to keep running that test to reproduce the bug as we fix the software. And then by the time we fix the software, that test should start passing. It will be failing now." So I was like "Wow. I would never have thought of that on my own." I always give him credit for that... But that's another cool way to -- like, back to your refresh point, Jerod... That's a good way to bring that into your developer workflow, as opposed to like buying cigars on the internet. Nothing wrong with that though.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** So Amelia, how about you?

**Amelia Wattenberger:** \[59:46\] So Jerod, your story really resonates with me. I have done a lot of data viz client work where you're scraping data, or there's some cool stories there with automating getting from Google Sheets, or turning Google Docs into a CMS, which is crazy, but sometimes the right tool... But I don't want to talk about any of those, because there's a fresh one that I think is kind of interesting... I just did a quick exploration of -- like, we always look at our codebases as a series of folders and files, and I was wondering if maybe there is a different way to visualize that so you can kind of enhance your understanding of where files live... When you come into a new codebase you don't really know how big it is, or where things live, or what languages it's in... So I built this interactive tool in React for -- you type in your repo name, and then it can go look at your repo, it'll git clone it, and then it'll recursively look at all the files, and then visualize it for you...

But I was like "No one's gonna use this if it's not part of their existing workflow." So what I did was I created a Node script that you can use as a GitHub Action, which I've been using more and more recently. What it does is it actually renders that React component, because I didn't wanna spend a lot of time on it... Which spits out SVG. So I could use the exact same React component but call it from a Node script, and then save out an SVG file, which kind of blew my mind that things could be this easy. So that's one of the only things in my life that's been that easy, and I love it.

**Jerod Santo:** Well, while we're here, we've gotta give you props, because that repo visualization thing you did is spectacular. Amal and Ahmad, did you guys see what Amelia made?

**Amal Hussein:** No, I feel like I saw something on Twitter from you recently about something similar to this. I didn't see a repo visualization though. That's cool.

**Ahmad Awais:** Yeah. I saw somebody talking about it...

**Amal Hussein:** Yeah. I'm super-jealous that GitHub has you on their payroll. I feel like -- no offense to GitHub, but I just feel like you're like next-level, Amelia. They're very lucky.

**Amelia Wattenberger:** Thanks.

**Amal Hussein:** Seriously.

**Ahmad Awais:** Most definitely.

**Jerod Santo:** We'll link that up in the show notes so that the listeners can check it out as well.

**Amal Hussein:** Yeah, so that the listeners can visualize. \[laughter\]

**Ahmad Awais:** I actually have a fun (you could say) war story of automation. It was when I was at college... So we had been contracted by this bank to create some thing that was on top of a PLC, it was a hardware automation thing... And we would burn it with the same code, and it would work, we would show the manager "Look, it's working."

**Amal Hussein:** Wait, what's a PLC? Like a PoS, like a Point of Sale device?

**Ahmad Awais:** No, a PLC is a programmable logic controller, but it's huge. How you see is small \[unintelligible 01:02:54.12\] It used to be about this big like ten years ago.

**Amal Hussein:** Okay.

**Ahmad Awais:** I think they are completely deprecated now. But the software that was running in that PLC - we just created a small \[unintelligible 01:03:06.00\] module that we'd just set on top of it and automate a bunch of things in a bank. And we spent three days mind-boggling about it, like "What the heck is wrong with this?" We would burn the same code, it would pass all kinds of tests, we would show the manager, the thing would be working, and we would always go there after hours when the bank would open up... It would just flip the switch. Everything that should be on, would become off. It would happen momentarily, for some weird moments of the \[unintelligible 01:03:40.03\]

And I somehow wrote a small Bash script that helped me continuously basically DDOS that PLC to figure out "What are you thinking now? What are you thinking now?" And we've found out through that - so there was like \[unintelligible 01:03:55.09\] we had placed it in the wrong way, and it would get so much sunlight that it would get charged up, it would retain so much charge that it would start thinking "Okay, I'm in the on straight right now" and it would mess up with our code.

\[01:04:12.07\] So the hardware code was the same, but it would just stay flipped it was so mind numbing. This is one thing that I know it was really hard for any human to pick on something and learn, so I started looking at "Okay, automation is interesting." This was more of a nerdy example.

**Amal Hussein:** That was cool. I'm sorry I just interrupted you. That was really cool.

**Ahmad Awais:** \[laughs\]

**Amal Hussein:** No, seriously. I don't have a ton of hardware experience, but the little that I know is -- like, working with hardware is so complicated, because there's physics. Physics is a thing. And it's like this variable that's like -- you know, sometimes you know and sometimes you don't, and it's like "Oh, there's literally a piece of dust here" or "The spit has flipped" or... It's crazy.

**Ahmad Awais:** Yeah. Sometimes my electrical engineering background comes into play... Not anymore, but... I used to be famous that I used to \[unintelligible 01:05:08.21\] and one of my friends actually brought a lot of that; his mother has cooked that in the hostels when we were attempting exams, which were like a month long... And we put it in the hostel's kitchen, we called it a mess, and it was locked. It had an automated lock. And around 3 AM we felt so hungry that we felt like "Okay, we should just destroy that door. It's our bread, we need to eat it." And the fun thing that happened there was like -- since we were electrical engineers, we were able to figure out "Okay, this lock must have LMC555" so there is a timer and it must have LM393 it can definitely detect sound. The sound it used to detect was the sound of our... who used to lock the door with his voice signature. It was a company.

We were able to create a fake network of Wi-Fi around that lock, and put a patch inside it so that LMC timer would switch everything without code on a particular timebase that was around 3:47 AM. It took us about an hour to figure out. And then finally, we just had to clap and the door opened. It was so good... Because you know, the sound sensor picked up on the tap. It was \[unintelligible 01:06:28.21\] So it was such a cool hacking experiment for us... Like, okay, this is something we've gotta try out. We completely forgot about eating bread after that.

**Amelia Wattenberger:** This is like the best heist movie I've ever watched...

**Jerod Santo:** Totally.

**Amal Hussein:** I'm thinking this is why you should teach your kids science, math and engineering. That's what I'm thinking. This is just great, I love all this experimenting while you were so young. So when did you start writing software, Ahmad?

**Ahmad Awais:** I think I must have been like 11 or 12 years old.

**Amal Hussein:** Yeah, that's pretty young.

**Jerod Santo:** Pretty young.

**Amal Hussein:** Yeah. I mean, it's not like you're an 11-year-old in 2020, picking up Python or Ruby or JavaScript. There was no Npm. Was there even Ruby Gems? I don't know...

**Ahmad Awais:** Early 2000's. Ruby didn't exist, so... \[laughs\]

**Amal Hussein:** That's incredible. Well, my automation story -- I think the thing that I'm most proud of... And for me it's definitely a journey, it's still continuing... I always tell this to my DevOps teams, I don't wanna be a sysadmin when I grow up, but I wanna impress one. So that's like my goal, is to end my career as a software engineer having really mastered computer architecture, networking systems, all that back door, back alley knowledge that is just always with us as we switch jobs, and machines, and products...

\[01:08:08.17\] But for me it was actually working with ASTs. I kind of talked about this actually on the Changelog a few years ago... But I worked on a really cool project with the Microsoft Edge team while I was an open web engineer at Bocoup... And it was basically like taking a bunch of JavaScript files and tests for the web platform. They were actually tests that test CSS properties, and web APIs. But the tests themselves were totally still valid, but they used a lot of proprietary API hooks from IE. So they're valid tests, but we need to now have these tests be open-sourceable, as well as these tests need to run on all browsers, not just Edge IE. So how do we do that? We have thousands of test files, lots of repeatable patterns... And that was like my really deep, deep dive into ASTs, and something that would have taken like weeks of manual work that would have probably been error-prone. I was able to automate with Bash, Python, and JavaScript ASTs. So writing a bunch of custom transforms and identifiers. And of course, there was stuff that I couldn't transform...

By the way, ASTs are abstract syntax trees. It's like the thing that your compiler uses to read your code. So it's like this predictable tree that literally tells your compiler "This line has this character, and this function has this method", and whatever else. It's extremely precise, it's unlike regex. It's very reliable. That's why we have linting tools and all of that jazz, right? We trust them because they're using ASTs, they're not using a bunch of regex to format your code... So it's not static analysis.

But yeah, so we transformed like thousands of test files, did that successfully... That was when I was like "Wow, this is powerful stuff, and I really wanna invest in it." And I don't get to invest in that skill set as much as I would like, but it's always a goal of mine. It's a constant thing that I'm chipping away at.

**Jerod Santo:** Yeah, Amal, we had a deep dive on that conversation in episode 362, "Machine-powered refactoring with ASTs." So if you wanna hear Amal talk about that for over an hour (64 minutes), I'll link that one up in the show notes. \[laughter\]

**Amal Hussein:** Yap, yap, yap-yap-yap...

**Jerod Santo:** We go deep on that one.

**Amal Hussein:** Yeah. I mean, it's cool... Ultimately, we're software engineers because we're force-multiplying something. We just rarely get to turn that inwards. We rarely get to force-multiply ourselves, because we have a bias. We're like "No! I need to do it my way, and I need to write it again. I need to reinvent the wheel." And it's fine, everybody has this thought, everybody does that. You've just gotta fight the bias sometimes, and try something new and uncomfortable and see where the journey takes you. So do you wanna share some stuff from Twitter, Jerod?

**Jerod Santo:** You have the info, I don't have it.

**Amal Hussein:** Alright. Well, I'll show a couple... One was from someone who's similar to me... Like, I'm working on a set of good morning scripts. I don't wanna have to manually log into my VPN, do my authentication, blah-blah-blah. There's a whole like pull rebase other folks are doing that, and Peter Lions is hooking into even having a bunch of default tabs open with his good morning scripts... Which is kind of cool. All the right tabs open based on branch names, or something like that, like what JIRA tickets open -- it's crazy. He's gone totally out in the deep end, in the right way.

And then there's other folks that are doing all kinds of things with Android Automation, trying to automate turning off alarms, GPS locations, a lot of security stuff which you don't really think about, which is really smart to do.

\[01:11:59.28\] And then Jeff Posnick from Google - he works on Workbox, service worker tooling and other stuff. He's starting to write all of his build scripts in TypeScript. I don't know, do you wanna talk about that a little, Ahmad? You saw that thread, right?

**Ahmad Awais:** Yeah, I think ESM modules are really good, and everything, and TypeScript has its place... I just have -- in my experience, adding a layer of ESM, of TypeScript has been a performance bottleneck for me. For example, when I'm done recording my course, and it takes a long time, because I'm not a native English speaker, what I do is I run this CLI called ctime (course time) in the folder where there are all the rendered videos... And it just goes out and kind of figures out the total seconds of each video, and then prints out "Okay, your course is eight hours, this much long." That \[unintelligible 01:12:51.06\] "Okay. Finally, I'm done."

I wrote that thing with TypeScript, and then I converted it to ESM... And it was so slow, for some reason, and I could not for the life of me figure out what was making it so slow. But when I transpiled it to Node.js v12, I think back then, it was just so fast. It did it in milliseconds.

So from that, you know, my gut feeling whenever I'm doing something that has some production consequences, like whenever some CLI or automation is in production, I try to stay away from TypeScript and ESM. But Sindre Sorhus has been pushing a lot that we should all adopt ESM. So I think ESM is gonna get there sooner. I'm not so sure about TypeScript. But hopefully, soon.

**Amal Hussein:** I'm with you on the ESM part, but TypeScript - I'm not a fan of introducing transpiling unless I absolutely have to. So for server runtimes, I'm not a fan of TypeScript. Please don't hate me, internet... But I've come a long way with TypeScript. I'm just... Yeah. \[laughs\] We'll end it there. I'm just... Yeah.

**Jerod Santo:** I'm just... Yeah.

**Amal Hussein:** Dot. I'm just, yeah, full stop. Yeah, read between the lines. So yeah, Ahmad, it's been really wonderful having you. Sorry for pronouncing your name 12 different ways... We'll have to blame Ahmad Nasri, who's like the person who I talk to a lot, who has a similar spelling name, different pronunciation. For the record, do you wanna pronounce your name the right way for everybody, so that everybody can hear you say it, your full name?

**Ahmad Awais:** Yeah, for sure. And don't worry about it. All pronunciations were good. \[laughs\] So my name is Ahmad Awais, and the fun part is Awais is my actual name, and Ahmad is my family name. For some reason, my parents thought it would be fun to put my second name first... \[laughs\] So I kind of tell people, "Call me Awais", and they always feel odd about it, because it's my second name... So it's Ahmad Awais. \[laughs\]

**Jerod Santo:** See, Amal? You've been doing it right the whole time, calling him Awais.

**Ahmad Awais:** \[laughs\]

**Amal Hussein:** Apparently... My husband's Korean, and they do the same thing; every time we're in Asia, all of a sudden everybody is calling him Kim. I'm like "Who's Kim?" He's like "Last name first. That's the way we do it here. Get with the program." I'm like, "Okay, okay..." \[laughs\] But anyways...

**Ahmad Awais:** Yeah, here we don't do it like that. It's just my family... \[laughs\]

**Jerod Santo:** Just your family did it.

**Amal Hussein:** Well, clearly, a family of very special people, and we're really lucky to have you contributing to the web platform, Ahmad, as well as teaching with such enthusiasm... I think we all have a lot to learn from you. So we wish you the best of luck. We'll put all the links in the show notes, and we hope everyone is feeling a little more excited about their terminal, and trying something new. Just start with the problem that bugs you, and see where it takes you. And tell us about it. Tweet at us.

**Ahmad Awais:** Yeah, awesome. Awesome to be here. And I will just say one thing - if you're creating some CLI, definitely tweet at me, @mrahmadawais. I love using CLIs, so you never know...

**Amal Hussein:** Yeah, you should start a hashtag, you know?

**Ahmad Awais:** We should.

**Amal Hussein:** Yeah, we should. Alright, so Jerod, do you wanna take us out?

**Jerod Santo:** I do.
