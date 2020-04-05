**Johnny Boursiquot:** Hello, and welcome to this episode of Go Time. I am Johnny Boursiquot. Along with Mr. Jon Calhoun, we are joined by a special guest, Thorsten Ball. If you've been in the Go community for a while, his name should sound familiar. He's the author of two very educational books on writing interpreters and compilers in Go. How are you, Mr. Ball?

**Thorsten Ball:** Hello! I'm fine, how are you?

**Johnny Boursiquot:** I'm doing well, I'm doing much better now because we're gonna be talking about tools, power tools. Before we get into that, Mr. Calhoun, how are you?

**Jon Calhoun:** I'm doing well. Excited to get into this one, because there's a lot of interesting things here.

**Johnny Boursiquot:** Yes, indeed. One thing we will not do - or I'm hoping we won't do, is talking about tools... And to be specific, we're talking about not just tools built in Go, although that's certainly part of it, and not just tools unique or specialized for Go development, but really all the things that make up your developer workflow. It could be editors, it could be containerization that you use locally, it could be how you do live reloading and testing, it could be your shell... All the tools that we as developers use to build and ship software.

But going back to my original point - we will try very hard not to start any wars over things like editors and whatnot, because everybody has their favorites... And it's the same thing for every tool on this list here. Maybe you have something that you really like, and you think it's the best thing since sliced bread, and that's okay, too. We're here to talk about a wide range of things, and then hopefully tie it all back to our daily Go development.

So let us start -- well, where to start...? This is such a broad field... We can start with editors, but I really want us to keep it -- not go too deep in the weeds a little bit. Personally, I use a combination of VS Code and Vim, depending on what I'm doing, the environment I'm in... Either one of these tools works for me. Thorsten, what do you think?

**Thorsten Ball:** I would say the number one tool that I would need on any computer that I work with would be a terminal, a shell. I often think about this question, because it's an interview question where I work, at Sourcegraph, so I get to ask it a bunch of times and discuss it a lot... And I think my answer would be a Unix environment, a shell, where you can boot up a bunch of tools.

\[00:04:08.00\] I use Vim, so I start up Vim a bunch of times, I put it in a background with Ctrl+C, I run ripgrep, everything is in a tmux session... I spawn a ton of different shells, close them, spawn new ones, close them...

When I try to switch to VS Code, for example, this was the thing that I noticed the most - it's not a specific syntax highlighting or theme or whatever, it is the ability to quickly run stuff in the shell and close the shell. So that's my number one must-have tool.

**Jon Calhoun:** I think it's interesting how everybody is very unique there. I see people who use VS Code and use the terminal built in... I can't do that. I'm just like, "I'm sorry." I want that terminal to go away and leave me alone, because it's just not what I'm using. Because I just have global hotkeys that bring up the terminal, and that's how I get back and forth between the two. But I use VS Code more than probably anything else.

**Thorsten Ball:** You have a global hotkey and it brings up the iTerm...

**Jon Calhoun:** Yeah, it brings up iTerm.

**Thorsten Ball:** ...thing at the top?

**Jon Calhoun:** Yup.

**Thorsten Ball:** And then what do you type in?

**Jon Calhoun:** Whatever I need to do, depending.

**Thorsten Ball:** But how do you get the output, for example, back into your editor, or something?

**Jon Calhoun:** What output do you want me to have back in the editor I guess? It kind of depends. Part of this is probably depending on what you're working on, too. If I'm working on a web server or something, there are a lot of ways... You can actually plug in the two, so that you can actually hold in Cmd and click on a line number, like a source file with a line number, and it'll open that up in VS Code. There are ways you can connect those things that they'll often work.

**Thorsten Ball:** Yeah.

**Jon Calhoun:** So you can actually jump back and forth and do things like that. The other option is just to sort of know shortcuts... So if you know it's this file and this line number, go back to VS Code and do whatever you need to do to get there.

But I do agree with you fully that a Unix environment is something that is really hard to not have in some capacity... Because this is a question I get asked by all of my friends that aren't developers - they always ask "Why don't you just run a Windows machine? Why do you need this Mac/Linux/or whatever it is?" And it's so hard to explain until you go try to do some sort of development in Windows, and when you wanna do those command-line tools or anything like that it's like "I have to learn an entire new workflow", compared to what I'm used to and what everybody else seems to be doing.

**Thorsten Ball:** It's hard to explain, right?

**Johnny Boursiquot:** To be fair, the Windows development story from the lens of folks who are used to using a macOS, or something, or even a pure Linux environment - the story there in the Windows environment, I hear... I'm not a Windows user; I have nothing against Windows, I'm just not a Windows user... But I hear that story has gotten much better. I hear folks talk how happy they are with WSL, the Windows subsystem (I believe it's called) for Linux...

**Thorsten Ball:** Yeah.

**Johnny Boursiquot:** ...and it provides -- you can't quite tell that you're not in a Linux environment. From what I can tell, it's pretty much very similar, if not close to being the same thing. So I hear that story has sort of evolved a little bit. Every now and then I'll sort of peek at "Hey, what are the folks on the Windows playing around with these days?" But to me, the issue I've always had with Windows environments for tooling has really partly been driven by the development community itself.

A long time ago, when I first started doing coding and whatnot, all the tools that I needed to use were being built for Linux or Mac machines. So that sort of drove me towards adopting these tools, because that's where all the best tooling - at least for doing command-line kind of work, which I really enjoy doing - was being built, at least first. Over time, they were being ported, and... You know, with the Windows environment it always felt like we had to use some sort of a graphical user interface to use these tools.

\[00:07:56.06\] The moment I got a taste of the CLI, I was like "Okay, I wanna do everything in the command line." And Windows back then was just not -- and I'm talking like Windows '98, Windows 2000... To this day, Windows 2000 still remains my personal favorite, because that was the last one I used before I jumped to using a Mac... Actually, I went through Ubuntu first... But yeah, it feels like - and I'm sure some folks that are hearing this later are gonna corroborate that, and some folks in the channel with sort of jump in as well... The Windows story for tooling and development has gotten much better over the years.

**Thorsten Ball:** Yeah.

**Jon Calhoun:** When you look at things like Docker 2 that are coming out, they've all sort of helped push that... Because these days, anytime somebody asks -- even on a macOS, there are easy ways to install things like Postgres, but if you are familiar with Docker, there are much easier ways to just spin something up that's running Docker than installing it.

So knowing that that'll work on any operating system if you understand Docker is really helfpul, and I think that also really helps support that argument you're making where all these operating systems are kind of getting close to parity.

**Thorsten Ball:** I wonder whether Go itself has had some impact there... Cross-compilation is really easy to do, and I released a new CLI today, or a new version of our CLI today, and there's a Windows build included... And I'd never thought about it. It's just done automatically.

If I compare this, for example, to Ruby, which I worked in for a long, long time, this was never really supported, and since it's not a compiled language, you always have to bring the interpreter. You basically need to wait for the interpreter to build in all of these features. It's a slightly different thing, and I wonder whether cross-compilation in recent years has maybe allowed more people to use dev tools on Windows. Just a thought...

**Jon Calhoun:** I definitely think that's true... I remember the first time I tried to learn Rails I didn't know the Unix environment that well; I was still relatively young... And I tried it on a Windows machine and basically gave up after a while. I was like "This is not working on this machine. I need to get a Linux installed before I can even mess with this." And I gave it up for at least a couple months until I came back to it, and I actually had a Linux machine to do it at that point. So I know for some things having that ability to compile on different platforms - that definitely helps.

**Thorsten Ball:** It's funny, right? ...we said we don't start with the editors flame wars, but now we ended up talking about operating systems... \[laughter\]

**Jon Calhoun:** It's not a flame war though, it's more of a... It's nice to see they're all coming around and you can do everything.

**Thorsten Ball:** It's one of the two hot topics of the internet in 2005, or something... Either editors or operating systems.

**Johnny Boursiquot:** Or operating systems... Well, you did touch on the containerization stuff, and we were talking about Docker - I was thinking in my head, I remember there was a period when I used Vagrant a ton. Vagrant was, in my mind, the original tool that allowed me to have separate environments, and back when I worked at the agency I had different environments for different customers. I could boot up an environment and have everything - that particular customer - the tools, the products and services that we were working on for them, I could separate these things and easily spin up an environment to work in that particular project, or that particular project... So for me, before there was Docker, there was Vagrant, and I still look back fondly on that project...

But yeah, these days you can really -- with containerization you can kind of... Any sort of environment you want, you can kind of put together, combine them, and remix them however you need. It's a brand new world we've been living in. Well, how old is Docker now - 6, 7 years old? I can't remember. But yeah...

**Thorsten Ball:** Yeah, seven.

**Jon Calhoun:** Some of us are slow to adopt fully... \[laughter\]

**Johnny Boursiquot:** We're the laggards on the hype curve?

**Jon Calhoun:** \[00:11:54.15\] I've lagged a little bit with some of it. I mean, mostly because a lot of my projects are just me, so I don't experience the same problems that teams experience... But I have been on teams where -- I worked on one Rails project where one of the libraries we required got pulled from a package manager, or wherever it was... I think it was on Brew, or something, but it got pulled.

So every new person who came to the team would go to get set up and it wouldn't work, because that wouldn't be there, and the newer version would break something... When you experience that, you're like "Okay, I understand why this exists, and I definitely want it", but by the time Docker came around, I was no longer on that project so it didn't matter as much. Sometimes you don't learn and you're like, "Meh, I'll wait till I need it", and then when you need it, you're smacking your head off the wall.

**Thorsten Ball:** Yeah. I don't wanna go off on a rant here, but what you said, as in "I never experienced a problem, so I didn't get it, what it's for" - I think this happens so many times that people just don't add the context of the thing that they're describing.

Five years ago, people were saying "Oh, Docker is the cure for everything. You've gotta use containers." This was one side of the debate, and the other side was "I don't get it. What's so hard about installing this and that, images or something?" and what they're missing is Person A is working for 15 different clients, and in 15 different environments... Person B has a small, highly-skilled team of developers that build their own AWS images, that they upload every day, and they have a build process for it, so it's guaranteed to have the same stuff on every machine. And all of this is lost when they talk about the same thing, and they just talk past each other...

That happens all the time in programming, where people say "This is the best thing of all time." It's a person working for a 5,000-developer company, talking to another person working in a little agency with 3 developers. They go "You should use this", the other person goes to their boss and says "Somebody on the internet said we should use this."

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** If you could just put them in the same room, where they would have to carry a nametag with them, like "I work for company X, with so many employees, and we do this and that", that would clear up so much stuff.

**Johnny Boursiquot:** You need context. When you wanna bring something in, you don't wanna just say "Oh, so-and-so uses this thing, so it must mean it's good." The fact that some company or somebody here or on the internet uses a particular thing, that doesn't mean it's necessarily good for you. They had their reasons for choosing it.

There's this meme out there of folks using Kubernetes around blogs, or something... It's like having a giant 18-wheeler, just carrying a small little package in the back, on a truck bed. So it's like, again, using the right tools for the job, which is - I think we've touched on this in previous shows as well... There's so much of -- you see other community members doing something, or maybe somebody you respect/admire, you see them using a particular tool, or a particular technology, and in the back of your mind you're thinking "Well, I should be more objective with my selection criteria... But so-and-so is using it", so you start using it too because of that. There's this peer pressure that we don't wanna acknowledge; that's always in the back of our minds, and sometimes it acts on our decision-making without us even realizing it.

**Thorsten Ball:** Yeah. I openly admit that I still like using the terminal, because I thought it was cool when I was 14 years old. That's probably the main reason... \[laughter\]

**Jon Calhoun:** I think that's also why -- you get people who like Vim, or anything like that, and they stick with it once they've learned it, because it's productive for them... Even Johnny -- like, if I'm using VS Code, it's not that I think it's better than Vim, it's that for me particularly it's more productive, because I don't have to learn something new.

Speaking of that stuff, and things where people jump around, let's talk about some tools that you guys used for databases, and that sort of thing. I say "speaking of that", because you see people jump from one database to the next hot one... Whenever MongoDB came out, I remember every tutorial and everything on the internet was MongoDB... You know, the NoSQL phase, and all of those phases. I'm curious, what are you guys using? When you're building a new project or doing something like that, what sort of tools do you find helpful on that front?

**Thorsten Ball:** \[00:16:15.19\] Postgres as the database. I don't know how it's pronounced, actually. I got confused a couple days ago. Somebody wrote somewhere it's PostgreSQL, or something...

**Jon Calhoun:** I think it's usually referred to as Postgres, but it is like--

**Thorsten Ball:** Yeah, Postgres.

**Jon Calhoun:** SQL is in the end of the name, I believe.

**Thorsten Ball:** Yeah. The one with the elephant...

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** Yeah, that's the database of choice for me, for at least the last 6-8 years... And on Mac I use Postgres.app, which is this neat Mac app in the status bar at the top, where I can spin up a bunch of different Postgres versions, like 9.6, and 11, 12, and whatever... And yeah, control them. And then on the command line I have the psql, the command line client for Postgres... Which can be configured, if people don't know this; read in the dotfile. You can set a different prompt, you can turn on autocompletion, you can turn on different pagers, which change the way query output is printed... That's pretty neat, and you can customize it. That's basically it for database needs on my side.

**Johnny Boursiquot:** So we're not at the Unpopular Opinion segment yet, but I'm not sure if what I'm about to say is unpopular or not, but unless I have a requirement to have some sort of a distributed system where I need my data highly available, and I need the different instances of my services or backends to be accessing the same data, I'm okay with shipping a single-purpose -- basically, one program, and shipping a flat-file, or maybe using BoltDB, or Badger, or something like that to have my application use just a local file to serialize data and read data back out of.

You'd be amazed how many -- at least of your own personal, but also some production applications that don't need a distributed data store. You'd be amazed how far these things can take you. You don't always need a giant server to handle your storage, you don't always need that. Sometimes I think we just default to that out of habit, but you don't always need that... And it can actually simplify your deployment story if you just say "You know what - this thing needs to just read some file locally, and it'll serialize information back down, ease it and that's it. You move on.

**Thorsten Ball:** That's really interesting... Do you have one process usually that reads in a file when it boots up, and reads it in memory?

**Johnny Boursiquot:** Yeah, during start, typically, when I'm initializing my applications, I do flag-based and environment-based configurations. So I read in those flags, I read in the environment variables, and this is where the location of the file, and basically during initialization I just read in things, and if I need to deserialize whatever it is, I do it then. Usually, for the lifecycle of the application, basically there's just one thing in charge of writing back to storage.

Then if the application were to shut down, it'll handle signals gracefully; it'll just clean up after itself, make sure the file gets written to and closed properly...

**Thorsten Ball:** Can you give an example of which kind of data you write into the file? Is it a line-based record?

**Jon Calhoun:** I can give one example... When I first launched Gophercises, which was just like a free coding course type thing, my user system was very basic. You basically signed up, I would email you a URL that would log you in, and that URL would basically stay the same forever for each person... But each person had a unique URL to log in. And that entire system was built with BoltDB backing it.

\[00:20:07.13\] So while I did have to write users, it was such a rare occurrence that it didn't matter that it was BoltDB, because 99% of the time I was just reading data... And reading when a user logged in, or reading if they were trying to access different course materials, things like that. So it worked really well... And I wasn't hitting some millions of users scale; I think the highest that setup ever went to was like 25k-30k users, but it was never concurrently. It was spread out. And because of the way the app worked, people refresh a page once every ten minutes when they're done with the video. It's not like they're hitting multiple pages... So it just worked really well for that, and it made deployments and everything like that really easy. Even backing up the system was as simple as copying a BoltDB file and being like "Okay, I've got a back-up of my database now."

**Johnny Boursiquot:** One of the little pet projects that I'm working on right now is writing a port scanner, and basically just being able to ship a binary and say "Hey, you write the results of your port scans to this BoltDB database." Then at some point I send that to an S3 bucket, I just package it up as an object, store that, and I get the guarantee that S3 is not gonna go down on me... At least that's more reliable than anything I can build.

And even if I have a highly concurrent program, I sort of have a fan out/fan in approach and all my data gets written safely in. I don't know, it just works...

**Thorsten Ball:** Would you say you don't need querying then, or indexes, or something? It's just a data dump, in a sense?

**Johnny Boursiquot:** Well, you can have more sophisticated stuff. I can think of Bleve, for example; it's a goal-based indexer. So if you need searching capabilities, you can absolutely do that, and Bleve itself happens to support multiple storage back-ends... And BoltDB happens to be one of them. I'm sure there's a ton more. So chances are, if your use case, again, is not one where you require a highly-available distributed system, then storing on your local file system is fine, it's okay.

**Thorsten Ball:** I mean, I would say this breaks down as soon as you have multiple processes, even on the same machine, because then you would have concurrent writes, or reads to the same file, you need to share them between different processes, so...

**Jon Calhoun:** I mean, even BoltDB - you can't have two open connections to it at once. It doesn't let you do that. So you have to know from the get-go that you're either designing a system around that, so one process loads up everything, or you have to consider the fact that if you get to that point and you need to change what you're doing... But I do agree with Johnny that there are a lot of cases where people jump to these -- I mean, it's the same when you see people jumping to the NoSQL solutions when they really didn't need it. Consider your possibilities and what you expect that application to do, and if that works fine for your use case, then go for it.

**Thorsten Ball:** I have to say, I'm super-fascinated. This is to me like somebody saying "Yeah, my car doesn't have an engine. I just have a little hole at the bottom, I stick my feet out and just walk..." \[laughter\]

**Jon Calhoun:** I mean, I can tell you - I've actually seen things in production with SQLite powering them...

**Johnny Boursiquot:** Yup.

**Thorsten Ball:** Yeah, I mean... Hacker News \[unintelligible 00:23:16.12\] as far as I know... So I think it comes down to what exactly do you do with the data. Hacker News, for example - you have posts, comments, whatever; it's a pretty simple hierarchy. You can see how you can map that onto a file system. Every post is a folder, every comment is a file, whatever. Then you can use the file system... And the file systems nowadays are incredibly optimized and fast. We have SSDs... As soon as you can query the data you want without having to use an index, which is one of the big benefits of a database, then I guess you're fine. But as soon as you need different queries, and you need to group data, and you want it to be performant without loading it into memory - I guess then you need a database.

**Johnny Boursiquot:** \[00:24:07.10\] Yeah. If your needs extend to wanting to actually slice and dice a data, then I'd say "Hey, get the data out into some format you can actually work with." If you need to do SQL queries on that thing, dump it out; have some sort of transformer that takes the serialized format that's in the file and converts it into records in a database. Or if you wanted to use some NoSQL, whatever the latest and greatest thing is, that everybody is jumping onto, if you wanna do that, then write a transformer for that, too.

So you can transform the data into whatever format is optimal for your use case, for what you're trying to get done.

**Thorsten Ball:** Which brings me to another favorite tool of mine, jq.

**Johnny Boursiquot:** Yup.

**Thorsten Ball:** You could basically write a database with this, right? You could dump your data in a JSON file, and jq is this little command-line utility that allows you to query data in a JSON file, or in a JSON input stream, whatever... And you can map over every entry, say "Give me this field, give me that field, create a string out of these two fields", whatever. I use this ten times every day.

**Jon Calhoun:** I assume you're working with a lot of APIs that are giving you JSON data then...

**Thorsten Ball:** Yeah.

**Jon Calhoun:** Okay.

**Thorsten Ball:** Or just simple -- for example, at Sourcegraph our configuration system is JSON, so you have an editor where you can put in JSON... So there is a lot of JSON involved, and I actually have -- it's really trivial, but I have a mapping in Vim that pipes the JSON that I just selected to jq... So it formats it, and then you can pipe out and query it with jq, too.

**Johnny Boursiquot:** Cool.

**Thorsten Ball:** So I get a lot of mileage out of having jq installed

**Jon Calhoun:** See, that type of stuff is interesting to me, because I've found that it really depends on what your current project is. Jq is one of those tools that I've used in the past, and when I used it, I used it a good bit... But then when I wasn't using it, I found that I would have a new system and wouldn't install it for months, because I didn't realize I needed it... And then you go to use it and be like "Why isn't this installed right now?" It would just be a confusing thing.

Some others that stuck out to me like that were things like Postman, and Paw, and a couple other tools that are... I think ngrok was one that does -- so Postman and Paw, for anybody unfamiliar (we'll try to put them in the show notes) are tools that are used to make API queries into... They're basically really good tools for testing and asserting different things with APIs. Then ngrok was a tool that I've used that does -- it's like a tunnel... Is that what it--

**Johnny Boursiquot:** Tunneling, yeah.

**Jon Calhoun:** Basically, it allows you to expose some local host process to the web... And one of the processes I used that a lot for when I did web development stuff was anytime you'd need webhooks and you wanna test them locally, you want a tool like that where you could spin up your local environment, expose it to the web, get a webhook and actually use it... Because otherwise it was a nightmare to say "Does my code work?" And the last thing you wanna do is "I'll ship it to production. It'll work..."

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** Ngrok is one of these tools you recommended to somebody if they're working with webhooks, for example, and they always say "This is amazing. I just boot it up, it works. I get a little URL... This is my web app now, exposed to the internet securely etc. How could I live without this?" Then you don't have to work with webhooks anymore, and suddenly you never use it again. It's one of these tools, as soon as you need it, it fits the use case perfectly.

**Break:** \[00:27:43.23\]

**Jon Calhoun:** Another one that I've noticed along those lines... So there's the new GitHub CLI tool that came out. And when it came out, it reminded me of the hub tool which I found -- again, one of those ones where like when I was creating a lot of new repos and doing certain things like that with the team, I found myself using that tool more often. Then later - I don't know why - I just stopped using it as much. I don't know if it was that I wasn't interacting with a large team as much, so I didn't really have as much of like an issue process, and all the other stuff... I could just use Git and figure out things that way. I'm curious if there's any others along that line.

When you guys are working with source control, what tools do you find useful? Source control, and I guess maybe project management type stuff with your team - what tools are you finding useful in that front?

**Johnny Boursiquot:** I have this -- I don't even know how to describe it. Every time I use -- I've used Hub, definitely, in the past... And everytime I use one of those tools, which is almost really if you think about them, they're just like some sort of abstraction, or some sort of a wrapper around tools you already have locally. I always feel like somehow I'm cheating. I always feel like "You should know the actual wizardry and flags and things that the git command lets you do", I always feel like I somehow am not giving the appropriate level of attention that I should when I use these tools... And a lot of times I've stopped using these tools, because I'm like "You should know how to do this with the actual tool, and not get a wrapper, or some sort of thing around it", or something. It's a weird thing, but I do experience that sort of feeling.

**Thorsten Ball:** I use Hub a lot, or at least -- the new GitHub CLI has the same feature... I use it to list issues, basically. To talk to the GitHub API. I don't use it to create PRs or switch branches, or whatever... I do all my Git locally, with Git itself, on the command line. I have a bunch of helpers configured to have nice log output, a few aliases for faster git checkout, create feature branch, whatever, all of that stuff... And that's basically it.

I never used one of the graphical git clients. I'm weirdly proud of it, even though I know I probably should have used one of them when doing an interactive rebase, or whatever... Or you know, you've ran into some weird conflict when merging one branch into the other and rebasing it en-masse, or something... But yeah, I do like it on the command line, and I've found that - you know, I'm speaking from the experience of sitting next to a colleague who used Git Tower (I think it's called), the graphical client for Git...

He often had problems when he tried to rebase or he pushed to a branch or something, and stuff broke... And it was a combination of Git Tower in the back, automatically fetching new things, but him assuming "Oh, it's safe to rebase, because I haven't fetched the new stuff...", and then doing a manual rebase on the command line, but the graphical client getting in between him and the Git history and breaking stuff... And I'm not saying I'm right in what I'm doing.

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** \[00:32:19.11\] There's some (I think) advantage to knowing the abstraction layers, in a sense. You know, I haven't used it, so I can't really speak from experience, but I can imagine that if you do stuff in a graphical Git UI client that abstracts a lot of stuff away, it is as easy to shoot yourself into the foot as with Git on the command line... Because you don't actually know what's happening in the background, and for some use cases you might need to know.

**Jon Calhoun:** I view it as similar to people who use a framework or an ORM when they don't know SQL, for example. It's one of those cases where it's great to get you started and get you familiar and get you some sort of framework to learn from, but you shouldn't stop at that point. You should look at other ways to use it, and maybe sort of get slightly familiar with the command line, so that you really understand what it's doing behind the scenes... And then I think from that point on you can sort of branch out and actually be a little bit more sophisticated with what you're doing.

**Johnny Boursiquot:** When you said that, that immediately raised a flag in my mind... I'm having flashbacks to the days where I used to use WYSIWYG tools to build websites. If you've ever used HoTMetaL PRO, or DreamWeaver, or all these things...

**Thorsten Ball:** FrontPage...

**Johnny Boursiquot:** FrontPage... Oh my gosh, FrontPage... These tools - presented this layer between you and the actual code and the actual markup and scripts that got written... And at some point I was like, "Okay, if my objective is to get something done as quickly as possible, the graphical user interface is going to help me there." 99% of the time it will do the right thing, but in that 1% where it fails, I'm gonna have no idea how to actually fix it, and I'm more likely to just start over at some point and try and get it right, than I am to get under the hood and figure it out. But that is with the objective of getting something done as quickly as possible.

Whatever it is that I'm trying to get done is not an area where I desire to develop mastery or expertise in. If that area is something I really want to understand and master, then I will go through the pain of actually getting under the hood and doing the reading - reading the docs, reading the manuals - basically getting to the esoteric knowledge that allows me to become a master in that thing. But again, we have 24 hours in a day, and I don't know about you, but there's only so much I can spend time mastering, so I have to be deliberate about which thing am I willing to spend a good deal of time mastering... And these days, that field has narrowed for me quite a bit.

So if it means using a graphical user interface to get something done that I don't care to master or has no real impact on my livelihood as a professional, then I don't mind using the GUI. I'm fine clicking around in an interface somewhere and getting things done, so I can get back to the things that I actually care about. That's the lens that I bring to it, I guess.

**Thorsten Ball:** Yeah.

**Jon Calhoun:** Yeah, that definitely makes sense. I guess when I view the GUI stuff -- I've never used it for an extended period, but it is something where I've suggested people... Until you understand what Git is useful for, it's sometimes nice to look at it in this graphical view and just sort of get a feel for "Okay, what is a PR? What are these changes?" and then from there you can go back and start looking at the command line and looking at how things are different.

For example, I don't know how you guys typically do your PRs, but one of the things that I've been really adamant about, I guess, is that I like one commit to sort of be one complete change, like one idea... So where some people do a PR that's actually composed of ten commits, I will actually in my own personal history squash that all together into one big commit. And there are some problems with that, depending on what review tools you use, and things like that... But it is very helpful in some situations.

\[00:36:14.09\] If you've ever been on a team where you're trying to figure out where was this bug introduced, or when was this feature implemented or something, sometimes having that "every commit is one complete thing" is really helpful. I think that's something that'd be hard to explain to somebody the differences and the nuances, unless they have a broad overview of how Git works... And sometimes the graphical stuff can be useful to get that across. But then, like you said, if you really wanna get that mastery for it, you're unlikely to get that in a graphical user interface.

**Thorsten Ball:** First of all, I have to add that I was really anal about my Git history. Perfectly written commit messages; I did fantastic commit messages. I put so much love into them. And now at work we do squash and merge of pull requests. So they're all gone, like tears in the rain...

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** ...so now I just don't care anymore. It's like "Fix? I don't care..." They're gonna just put stuff up, it's gonna get squashed anyway.

**Johnny Boursiquot:** "Fixed stuff." \[laughter\]

**Thorsten Ball:** Yeah, "stuff", "fix", "let's try again", "wtf"... But I wanted to say... I think there's another dimension to it besides mastery, and that is these tools - we can say graphical tools, but what I mean is IDEs or integrated environments; you know, FrontPage is what triggered this thought... These tools are great as long as you stay in them. But as soon as you have to break out of them, you're lost. Because they get their value from being integrated. And just an example that I thought of, because you mentioned DreamWeaver, I used FrontPage back then...

So you would code up your web page in FrontPage, clicking all of the stuff together, moving it around, layouting it, and then you search on... What was it called back then - Altavista, Google? You search for "DHTML mouse cursors that follow your mouse", or something. And then the tutorial says "In your HTML add this to your head and add this to your body." And then in FrontPage you try to figure out "How do I get to the HTML?" and you get to the HTML and then it turns out "No, the head looks totally different here than it looks in the tutorial. It's not even close."

I think this is the same when you talk about IDEs, for example, where you have a nice interface to configure your build, or your test, or whatever... Like, which flags etc. As soon as you want to run another tool in this process, you're lost, because now you have to go around the tool and try to inject your own thing into it... Whereas if you started with combining your tools, you might have an easier time. But that's just a really generic thought on... I don't know, maybe it's about using tools from the bottom up and combining them, or just starting from the top down and just replacing what you don't need.

**Jon Calhoun:** I think some of it comes from figuring out which of those tools are the ones you need to replace too, though. Because like Johnny said, we don't have enough time to use everything. And even when it comes to tooling, one of the things I'm very guilty of, and I'm curious if you too are as well, is I will install all these different things and be like "Oh, this is gonna help me be so productive." I'll set up keyboard shortcuts and all these things, and a month later I'll have forgotten 95% of them. And that 5% that I've retained is like "Okay, cool. That's really helpful." But I'm still just like "Why did I spend all that time setting all these other things up, when I just don't use them often enough for that to stick in my head?" Whatever problem I thought it was gonna solve wasn't a problem that was big enough to justify a tool.

**Johnny Boursiquot:** \[00:40:03.16\] I have a guilty conscience with some of the tools that I use... Because I've found that sometimes I use the hunt for new tools to do things perhaps I already know how to do one way, albeit "the long way", or something... I'll go on a hunt for tools that helps speed things up. And when I sit back and I reflect, I'm like "Why did I spend two hours of my time? Two hours that I know I could have spent somewhere else, on something more productive. Why did I spend this time experimenting with these other things, with these other tools that would shave maybe 5 seconds on something/whatever I'm doing now. I've figured out that I use that as a form of procrastination to not do the actual work.

**Thorsten Ball:** That sounds bad, but I would also add that... It's fun.

**Johnny Boursiquot:** \[laughs\] It is.

**Thorsten Ball:** If you can shave off a couple of seconds... And if you enjoy it, that is good, because it gets you to do more work in the end. Or do more of the things that you wanna do... As in, you have a guitar - hang it in the background; I also play guitar. And if you talk to people who play guitar for a long time, they start talking about equipment, and it's the same thing. They go out and they chase this dream of "This next amplifier is gonna give me that sweet sound, and then I'm gonna finally sound like \*whoever\*. That next pickup on the guitar is gonna give me that" etc.

One thing I recognize this - as long as it gives you fun or joy while you practice or play or do your work, it's good, because it gets you to do the thing more often.

**Jon Calhoun:** I've also found when you're looking at those tools, it's so hard to decide which ones you're actually going to use, and which ones are going to be the 95% you don't ever touch. There have been a couple tools where I've set them up or wanted to use them and thought "Eh, I might use this. We'll see", and that's the only one I end up using out of everything I installed that day or that week, or whatever the timeframe was... And I'm just like "How was that the one that I'm using all the time?" and you wouldn't expect it to do much.

One silly example is I went at one point and set up a script just to make sure when I run go test that it has colors. And I think what I did was anything with a file and line number is yellow, anything that's like a fail is red, and anything that's a pass is green. And it's just a silly little Bash script, nothing crazy; when I did it, I'm like "Oh, this will just be nice to have. No big deal." And now I find that having those colors makes it much easier to read tests, to the point that when I run go test without it, I'm like "Oh man, I've gotta change whatever's running the test to run it with colors."

It's silly, but at the same time that's just something I've trained my brain to look very quickly and find "Okay, where's the actual line number in the test?"

**Thorsten Ball:** I think tools should come with -- or you should be able to install them with an expiration date.

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** So let's install this, and if I don't use it in the next 30 days at least five times, you remove it. That would be cool.

**Jon Calhoun:** I honestly feel like project management tools need that for anything you put in the task list.

**Johnny Boursiquot:** \[laughs\]

**Jon Calhoun:** I've been in so many teams where you put everything in the backlog, and then there's things that are like six years old in there, and you're like "We're not gonna do this. If we haven't done it in six years, it's not happening."

**Johnny Boursiquot:** Right. Just put a TTL.

**Thorsten Ball:** \[unintelligible 00:43:26.22\] Let's just keep it in there; let's not delete it.

**Johnny Boursiquot:** Someday. Someday.

**Thorsten Ball:** Yeah.

**Johnny Boursiquot:** Every task and every JIRA instance out there in the world, or Trello boards or whatever the cool kids are using these days - everything needs a TTL. After a while just eject it.

**Jon Calhoun:** Even if it pops you a little reminder that said "This is about to expire. Is it something you actually need to do?" Something to make you consciously say like "Yes, we're gonna do it" or "No, we're really not gonna do that. It's fine."

**Thorsten Ball:** It should be the other way around. It should delete it and say "I deleted this. If you really wanna bring it back, send me an email."

**Johnny Boursiquot:** \[laughs\]

**Thorsten Ball:** Actually, I think Trello... They started -- if you had a Trello card in a Trello board and you didn't move it for a couple of days, it started to show cracks, or something. It aged--

**Johnny Boursiquot:** \[00:44:20.09\] Oh, some sort of visual cue?

**Thorsten Ball:** Yeah.

**Johnny Boursiquot:** Yeah, "Maybe you don't really care about this thing you think you care about."

**Thorsten Ball:** Yeah.

**Jon Calhoun:** See, that sort of tooling is hard to figure out, because I think for some people the tool -- it's not about actually having the task in your task management system, it's about getting it out of your brain and somewhere else... And the only time you can get it out of your brain is to write it down or put it down somewhere... Because I know I'm guilty of this. I will write things down that I know the chances of me doing this in the next two years are virtually zero; but if I don't write it down, I'm gonna think about it randomly for the next two weeks, and I don't wanna do that.

So it's almost like you need some way of handling that, whether it's that aging process, or something... But it's hard to find tools that take that into account, I think.

**Break:** \[00:45:13.07\]

**Johnny Boursiquot:** That's actually a good segue into the non-developer-related tools that we use. We touched a little bit on the project management stuff, but that's gonna be part of lives, right? So if I sit down to do work for eight hours for my employer, a lot of things are happening. It's not like I'm sitting there from 9 o'clock to five o'clock without moving, without doing things, without having the world trying to get my attention for something... There's a bill that needs to get paid, I need to pick up my kids from the bus stop... All these things are always going on, and like you say, John, you need to be able to offload things out of your mind.

I'll be in the middle of writing a lot of code, and all of a sudden I remember something that I need to do in the house somewhere. I'm like "Oh, I forgot about that thing", and I need to quickly be able to make a note about it somewhere and get back to what I'm doing. That's how our brains work. it doesn't give you a choice as to when things pop up. Heck, books have been written about how we try to facilitate our brain to get into flow... But we have no control over that, so we have to be able to adjust and roll with the punches, so to speak, that our brain keeps throwing our way, to sort of still manage to get things done.

\[00:47:54.18\] So along those lines, I use a test management tool called Things. It has a nice keyboard shortcut, it quickly brings up a little HUD display, I quickly type something in, and I hit enter, and it's not on my brain... I think. I hope.

So things like that, like task management - that's something I rely on quite a bit. And I use my calendar, believe it or not, to actually track my time. What I'm working on when, where does my time go... At the end of the day I go through a process where I look at my day and I'm like "Hey, what did you get done today?"

If I don't have things on my calendar, I account for my time. That's my biggest pet peeve, not knowing where my time went... So I use the calendar to track that stuff. At the end of the week, I'm like "Okay, you had a productive week" or "You didn't. Do better."

Things like that - I find that the world around us affects our ability to be productive and get things done as we develop code... But these things too require tooling, I think.

**Thorsten Ball:** Now that you've mentioned it, I'm constantly surprised at how effective it is to just dump stuff out of your head into a to-do list, a notes file etc. Every time, it's the same. You go "I don't know how to manage all of this. It's so much, I cannot keep track of this." You get really anxious and you get stressed out. Then I go "Okay, I need to write down what I actually need to do." Then you end up with ten bullet points in a markdown file somewhere, as I do... And it's so much better. Then you look at the list and you go "Okay, it's not that much. Seven out of ten of these are not high-priority. I can do these next week, whatever. Out of the three of them, this one is number one. Let's just work on this."

I'm super-surprised how effective this -- isn't this from Getting Things Done, or something? ...where one of the big rules is just "Dump the stuff before you actually try to do it, or try to tackle it. Just dump it somewhere and then try to tackle it when you have the time."

**Johnny Boursiquot:** Yeah, get it out of your head,

**Jon Calhoun:** I will say I have learned that dumping them in the wrong spot is a terrible thing to do. For a while, what I would do is I would just email myself. If I found an article I wanted to read or anything, I just emailed it to myself... Because my phone and everything had an email client, so I'm like "Alright, this is an easy way to get it to myself."

Then I found later that cleaning my inbox or prioritizing things was just a nightmare, because I had all these things in there that I'm like "Well, I'm not ready to archive this, because I haven't read it, but I really don't have time to read it today..." It was just like this massive mess, where I was just like "Alright, I need to get all of this out of my inbox and be able to clean it up." That plus having a snooze feature in Gmail has been something that have really helped me clear my head, in that sense.

So if I have something where I'm like "I wanna deal with this email in a week", snoozing it for a week is really useful. Or if you have a flight, and you're like "I want this information, but I don't wanna think about it until then", that type of feature has been really useful.

My wife has always yelled at me because I would sit in the kitchen and be like "Here are the things I need to do..." and she'd be like "Why are you telling me?" and I'd realized I was offloading to her... And she was like "This does not help me de-stress." \[laughter\] I'm like, "Yeah, I need to not do it with her..."

**Thorsten Ball:** Yeah. Did you actually find that if you lose things, that it's a problem?

**Jon Calhoun:** Like an email?

**Thorsten Ball:** I'm saying this because I have a to-do list in Todoist, which is the tool I use... I call it my backlog. It is basically all of the dreams, it's a list of things that I would do if I was the person that I try to be, basically. A couple months ago I was honest with myself and said "I'm never gonna do this" and I just deleted the list.

It turns out I do this a bunch of times, I delete my to-read, all of the books I wanna read, all of the music I wanna listen, podcasts I wanna listen to, all of this... And I delete it every half year, or something, and it turns out I'm not missing anything. If it's really important, either I do it right away or it stays somewhere in my conscious for the next week or so. Otherwise it's just not important. Or if it becomes important, it will pop up again.

\[00:52:12.06\] I don't know if it's anxiety or whatever it is that you feel stressed out, or I feel stressed out, as in "Oh no, I cannot delete my to-read list", or whatever it is. Like, 50 books I've been collecting as "I want to read these for three years." It turns out no, I'm not gonna read them, and it's okay if I just delete this list.

**Jon Calhoun:** I think generally speaking you're right, getting rid of the list is completely fine. One quick example where it was not that was I started doing an algorithms course and I knew I was gonna be doing this, but I had to finish a couple other projects. So I'm like "It's like six months out." So when I'd come across something where I'm like "Oh, this is a really good inspiration" or something that I thought I'd wanna read it around that time, then I needed to have a list for that specific thing. But usually, I was like "I know exactly where this gets categorized." So it just came down to like "I need to get it to something that's for when that time comes." So it wouldn't be like a backlog task list, it would be like "This course, reading list", so I'd actually know how to classify it.

I agree with you, if it's just like a generic backlog, chances are you don't need it. Where I ran into issues is that I was just emailing myself all of these links, and some of them needed to be put somewhere and some of them were just things I was just never gonna get to reading... So it was kind of hard, because I just had too much going on at once.

So what I've started doing more recently is I just have a notion board is a list of just reading links. When I see things, I'll throw them in there, and every so often I'll go through and throw them into the correct areas where they might relate to... And anything else, I'm like "If I haven't read it to this point and I don't wanna read it right now and it doesn't go anywhere that I need it in the future, it gets deleted."

**Thorsten Ball:** Yeah.

**Jon Calhoun:** But I have to be more diligent about it in that sense, because like you said, you can get a big list of things that you don't really need, but you convince yourself you need.

**Thorsten Ball:** Yeah. I guess the difference is that one is archiving stuff for later retrieval, because you know you're gonna use it... So I do all my note-taking in markdown files that are in a Dropbox folder. Let's talk the next two hours about my note-taking system... \[laughter\] But that is the short version.

Stuff I put in there, a lot of the stuff, I know I'm not gonna look at on a regular basis, but I know it's there. I can search it, I can grep for it, whatever... For retrieval purposes. But I think there's a lot of tools that can solve this problem, except that they're marketed as to-do lists, or task managers, or check-off lists of whatever.

If you search in any app store for lists, you will find to-do lists. Things you have to check off, things you have to do. It's not "Maybe someday want to read books", it's always "To read." Maybe this is where this bad feeling comes from, as in -- you know, I curated this list of interesting things, but it says "To read", so now I feel bad about throwing it away, even though they're not interesting to me anymore. I don't know, maybe we need a different class of tools for this.

**Jon Calhoun:** I will say that you brought up markdown, and I think that's something that every developer should learn, only because it's such a useful tool for note-taking, and for -- I use it for so many things; it's kind of insane to me... Between note-taking, or just writing up readmes for a project, or anything along those lines... To the point where I don't even like using a preview for markdown, I just prefer looking at markdown with syntax highlighting, because that's just what I'm used to.

**Thorsten Ball:** I see.

**Jon Calhoun:** So every time I see these tools that are like "Let me give you a life", I'm like "I've written so much markdown at this point that that does not help me." But I definitely think any developer - that's something they should get familiar with, because I don't see markdown going away any time soon, and I suspect their life would be at least more proficient when they're writing docs, if they know how markdown works.

**Thorsten Ball:** \[00:56:04.07\] Yeah. The problem is once you have to start using a product that doesn't support markdown. Then you get mad... Like Confluence, for example. I don't wanna pick out a single tool, but... I do all my writing in markdown, locally, in a file somewhere; for example, Google Docs. There's no easy way to transfer markdown to Google docs, so you have to do this whole dance of previewing markdown in a tool that lets you copy the preview with the styling, so you can then paste it in Google Docs, including the formatting and all of that... And that is really, really bad.

**Jon Calhoun:** Yeah. It's like you said, when you leave the one tool you're leaving to go somewhere else, it's problematic. And that's not even one that you would expect to have that same issue. But even the tools that do support it... Like, Dropbox Paper has a way you can export into markdown, and then you can basically paste markdown in there, and it pretty much always works. But sometimes the way they export just isn't quite -- I don't know, it's just weird sometimes. I feel like it doesn't always match exactly what I'd expect it to be, so it's still tricky... But I still encourage people to learn markdown, because I'm like, "This is something I use a lot."

**Johnny Boursiquot:** Just don't go build your own markdown rendering engine, or something... I think we have enough of those, right? Unless you wanna do it for learning purposes, or something.

**Thorsten Ball:** Yeah, build a static site generator instead. \[laughter\]

**Johnny Boursiquot:** Yeah, isn't it time for a new Go router, or something? An HTTP router? I think we're due for another one. \[laughter \]

**Thorsten Ball:** Yeah... Or a logging framework.

**Jon Calhoun:** Is that your unpopular opinion, Johnny, that we don't need any more routers?

**Johnny Boursiquot:** Yeah, I'll stick with that one... Speaking of Unpopular Opinions.

**Jingle**: \[00:58:06.22\]

**Johnny Boursiquot:** Thorsten, do you have one?

**Thorsten Ball:** Oh, boy... I thought I had a lot, but I'm not sure right now, now that you're putting me on the spot. I think -- this might be unpopular, but I guess in this circle it's not... I wrote a blog post a couple of weeks ago and I've been thinking about this ever since... I think that some of the tools we use when programming might have an effect on us and how we program that is not always positive.

For example, you use a code prettifier, like Prettier, or GoFormat, or whatever... It kind of makes you ignore all of the formatting, which in GoFormat's case I think is fine... But if you do really adventurous JavaScript, for example, with React, JSX, whatever, you start to ignore what is easy to write and easy to read code just because the formatter makes sure that it is properly formatted... As in, you can just type stuff into your VS Code that is probably configured, and hit Save, and it just formats all of the stuff. The linter works, the compiler works, all of this works... And I think in that case the tools might be optimized too much for writing, but our tools for reading code and consuming code haven't necessarily kept up with that yet. I don't know...

**Jon Calhoun:** In some ways, I would say that I agree with it, but in others I disagree.

**Thorsten Ball:** Same here. \[laughs\]

**Johnny Boursiquot:** That's why it's unpopular. \[laughter\]

**Jon Calhoun:** Whatever I say I agree, like -- if you look at anybody who's just getting into programming, they very often don't pay attention to the details when it comes to formatting. They'll have really weird indentations everywhere... Unless they're in a language that enforces it. But a lot of times if they're not, they'll just have -- I've seen all sorts of weird codes just indented weirdly, it doesn't make any sense to my brain, and I'm just like "I don't know what you were doing here. Were you just randomly hitting Tab sometimes, or what was going on?"

\[01:00:12.28\] I think part of it is just because when you're just getting started, you don't realize how important that stuff is... So sort of learning to manually do it and getting an appreciation for the benefit of it is useful. And if you have a tool, like you said, that just formats for you, they don't really think about "Why do I need to do this? What's the point of it?" because it just happens. On the other hand, I don't know... I don't know if I could live without those tools, so...

**Thorsten Ball:** I'm not saying we should live without those tools, I'm just saying they might be a feedback loop that is not visible, where you kind of shape your code based on how easy the tools work with this kind of code. For example, I worked in Ruby, as I said, for a long time, and I can honestly admit that I wrote some code that was a feature that was meant to be tested, and probably meant to be thrown away if it doesn't play out... And since Ruby is a dynamic language and it doesn't have all of these tools that for example Go has, it is really hard to find all of the instances of an identifier, of a method, or a variable, or whatever.

So you would write this code with such a verbose name, just so you can easily grep it later on... You know where I'm getting at, right? I wrote code specifically because of the limitations of the tools that I was working with... And I think the other way also has an effect, where the tools give us a lot of power when writing code, but we lose the power when we read the code... And I'm just saying, it's -- look, I know that's really philosophical and it's probably not relevant to your day-to-day programming, so feel free to ignore this. I'm just saying this might be a thing to consider.

**Jon Calhoun:** Yeah... I can definitely say I've seen the opposite, where if I'm using a language where it's common to -- like, Go does this; if you have a struct and you have some fields in the types, it always puts an equal amount of spaces between them, so that all the types line up. I think it was Ruby, when you're doing maps, or whatever the heck they were, the hashes - it was common for people to sort of organize them that way, with an equal number of spaces... But if you didn't have a formatter that did it, you kind of avoided doing it, because you were like "I don't wanna go manually fix this or tweak this..."

So I've seen it the opposite way for sure, and I could see people leaning towards one certain style because -- that's not a good example; that probably makes it more readable, but I could see people leaning towards a certain style because they know their editor will auto-space things. So I could see it being the opposite, where while this other style might be easier, maybe the formatter doesn't quite like it, or it formats it weirdly, and all of a sudden it's not as useful as a style.

**Thorsten Ball:** \[01:03:03.03\] Yeah. That's exactly my point. People often say "Oh, typing is not a bottleneck. Programming pure thought stuff. This is all just abstract ideas, and I've just gotta write it out", as in writing it out is just a manual last step. You could basically dictate it to somebody, or something. But then, you're too lazy to add some spaces to format the thing. It then comes down to this, like "Okay, I added this new line, the code works... Yeah, I should format it, but I'm actually too lazy to add five spaces on five lines", or something.

So the act of writing code is still really real, in a sense, and it's still really bound by the tools we have available, and also limited by the tools we have.

**Jon Calhoun:** I can definitely say, going the opposite way, one of the ways that I think Go has helped with that is when you see slices and the last one is required to have a comma afterwards - that type of formatting in my opinion encourages the correct type of behavior, because then you're encouraged to space things out the way you'd kind of want them to be, because you don't have to worry about "Oh, well later I'm gonna have to add that comma there", or something.

**Thorsten Ball:** Yeah.

**Jon Calhoun:** So it definitely goes both ways. At the very least, I would agree that formatters can strongly influence whether or not you write code that is readable, depending on how that formatter is set up.

**Thorsten Ball:** Yeah, yeah.

**Jon Calhoun:** So if you have a good formatter, I think it encourages better styling and more readable code, but a bad formatter I could see doing the opposite.

**Thorsten Ball:** Agree.

**Johnny Boursiquot:** Well, on that note, I think we've touched on a number of different tools that some of us use as developers, and others for it to help us manage our thought processes, I think. Actually, I find that at this point, at this stage in my career - maybe I'm just getting up there, or something... But at this stage in my career I find that managing what I work on, so knowing what to work on is becoming increasingly more important than the nuances of a particular tool. It's always getting the most bang for your buck, and that really comes in sort of managing your time... And if you put effort into one tool or one task, you know how much you're gonna get back for that investment.

So yeah, it's definitely -- thinking along those lines, I think it sort of brings a different lens, a different level of clarity to the tools that we use in our day-to-day.

This was fun, Thorsten. Thank you very much for coming on the call and sharing your opinions, some popular, some not... \[laughs\]

**Thorsten Ball:** Thanks for having me, I enjoyed it.

**Johnny Boursiquot:** Alright. And thank you for joining me, Jon. With that, we thank you for listening, and we'll catch you back in the next Go Time.
