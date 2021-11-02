**Adam Stacoviak:** So Robert, this show goes back in history in two ways. One, in scheduling, and two, you were on episode \#61, which is a whole different era of this show. I look back at this show we've done, Jerod and I and others over the years, and it's just like - this show has eras. You've got the Wynn era, which was probably around that timeframe, episode \#61, somewhere around there... Then you've got the Kenneth Reitz and a few others, Andrew Thorp era, which was probably 30-40 episodes... And then Jerod, pretty much since then. So you were back in like the earliest echelon of this show, episode \#61, Oh My Zsh, Planet Argon, a lot of fun stuff... How have you been?

**Robby Russell:** I've been good. It's been many years, 10,5 years I think since that episode was recorded... I have vivid memories of it, because I took three months to go to Paris and rented an apartment... So I've recorded that from my little apartment in Paris. I have fond memories of that. I remember being very nervous about not having a good audio setup, and also just being on the podcast in the first place.

**Adam Stacoviak:** Gosh, man... I was also nervous. I was like, "I use this thing, I barely know about it..." And I kind of still barely know about it, but...

**Robby Russell:** It was only -- not even two years old at the time, so...

**Adam Stacoviak:** Barely. Yeah, I'm glad you did the math too, because that was May 26th, 2011. That was definitely more than ten years ago, just past... But I mean, that's a long time ago. So I think there's a lot of different ways we could take this, just to sort of forecast directions we might go. One, this is a really long project. Probably an unexpected success of a project, because I remember part of the early story where you just sort of did this and put it out there, and it was just helpful, and plugins came in, and kept growing and growing, and that kind of stuff... And then you've also got Planet Argon, which you do lot of Ruby stuff there; so you're a Rubyist and you've got a consultancy... So there's just a lot of different angles we could take here, but a maintainer for quite a while. Are you still in the maintainership part of Oh My Zsh? I see creator as your title on the site, but does that mean you're no longer a maintainer at all?

**Robby Russell:** \[03:59\] I do some maintaining on the project... We have another developer, Marc, who's based in Barcelona, who does a lot of the day to day, week to week maintenance on the project... And between the two of us, we do most of it. So we do some triaging together, we'll schedule time to do some pairing together, we'll triage issues and PRs together... And that's been something we've started doing this year, and it's been helpful for us.

Otherwise, he's been for the last -- I don't even know how many years now, he's been taking the lead on doing a lot of the PR triage, and working through that stuff.

I am more of the making sure that we're keeping it simple for new users, so I'm always kind of -- there's some bigger topics or ideas for the project around changing installers, or updates, or the sort of things that people need to know before they use Oh My Zsh. Then I start getting involved in "Well, let's make sure we're kind of aligning that with some of my goals with the project" that weren't necessarily goals when we created the project, but over time realized that what I really wanted to do was have this be a good entryway for people new to -- people that are maybe a little uncomfortable with working in the command line. They haven't done it that much, they might be new to being a software developer... So I just imagine these junior developers, junior full-stack developers that are like "Okay, I need to learn this thing called Git, I wanna use this stuff on the command line, I need to run these commands, I don't really understand exactly..." I'm like, I wanna instantly make their experience be a little bit more exciting, more friendly, something they can feel like they can customize a little bit, rather than just being this blinking cursor...

So I always take that into consideration when we're talking about new features and new updates and ways we can take the project. So that's part of my role... And then I obviously interact with the community a lot, like on social media, and then participate in the discussions, and we've got a very active Discord instance, and stuff that we've been using for the last few years... And in many ways, because it's been such a -- I hate to use the word "popular", but it's been a popular... A lot of people use it, and it's kind of always shocking... It's one of the fun things about open source - you don't really know how many people are using your software project; you just can kind of guess based off of -- like, GitHub has some very limited statistics on people hitting the website, or how many people are cloning... You'll see those numbers, like "Okay, how many daily clones...?" And they don't really tell you what that number means, but you're like "Oh, 25,000 clones a day", and you're like "Well, is that for a pull, or is that like a fresh, new clone?"

**Adam Stacoviak:** Right, because your install process is a shell command, and it is a curl command that pulls it down. So there's some raw stats there. I have to say that Oh My Zsh is a default install for me. If I'm on a machine that I control and I wanna keep using it for more than just a little bit... So like a random VPS - I'm probably not gonna put it on there. But like a local Raspberry Pi, or my Macs that I'm using locally and whatnot, or a Linux box locally... I'm upset if Oh My Zsh is not installed. My life is just different on a command line, managing it. So for me, it's a default install.

**Robby Russell:** I'm so glad to hear that. It's funny, because we have servers that I interact with that are using Bash, and then I never feel like I need them out there on those servers and stuff like that... But I've always thought of it more as like "This is my local environment I want it to be set up in." But I know a lot of people use it for their server, DevOps type work, and that's great. It's not what I really envision for the project, but I guess that's --

**Adam Stacoviak:** Well, the plugins really let you extend it, which we could talk to, because I --

**Robby Russell:** Yeah, exactly.

**Adam Stacoviak:** ...without going too far into it, one of the things I appreciate beyond just simply local dev stuff is - I'm doing some stuff with Docker, and Docker Compose, on Raspberry Pi's and whatnot, or a Linux box... So just having some of the niceties that you forget about or wanna do in the plugin is just helpful. The command line completion stuff that's in there, the shortcuts, or aliases that come on board with enabling that plugin, which just is there... And like, why would I not use something -- I didn't have to configure it. So for me it's like baked-in config. Just install Oh My Zsh, enable a couple plugins, I have to put Dracula Pro, so Zeno Rocha - I put Dracula Pro as my theme pretty easily on all my machines, enable it there... It's pretty easy to do that.

\[08:02\] I did learn something recently about custom which I didn't know before, which we can talk about... Which bit me on a Oh My Zsh upgrade. I kept hitting a git issue, because I wasn't putting my themes in Custom, long story short... So a decade later of using it, I finally realized "Oh, there's a Custom directory I should put things into..." So that's how it works.

**Robby Russell:** It's a lot of fun little things that we've had to work around over the years to allow things like that. I remember I wrote a blog post, I wanna say -- I don't know, maybe 5-6 years ago. It was kind of like "d'Oh My Zsh", how I accidentally created a monster of a project. I'll include a link to it, so you can share that in the show notes. But I was just talking through so many of the things that people really like and appreciate about Oh My Zsh were never there when I first started it; it was really like "Here's my handful of aliases and little shortcuts I wanna use, and I want my co-workers to use it, so when we're pairing we're all kind of on the same page."

So plugins, themes - those came in the weeks that followed after I first open-sourced it, and I was like, "Oh, that sounds interesting. Yeah, maybe there's just an easy way to do that." I've given a couple of talks on this too, at some coding schools, and I was just showing them literally "Here's the implementation." I'm not a crazy zsh command line scripter by any means; it was more like "Oh, we'll throw some things in this directory, and if you put them in here, it'll try to find a file with that file name, and then just load it, and then you get all this stuff." I always kind of think of that as like -- I feel like it was the newbie way of approaching a project. And in a weird way so many people can appreciate it, because it's also kind of simple just to interact with... Behind the scenes it's not a super-complicated software project by any means, but it's been awesome to see how it's been mimicked, cloned, how people are using it on Windows machines and different operating systems, and there's variations of that in different platforms... And I'm just like "It's an honor..."

Even the name of the project wasn't something I intentionally had thought about. I had named something else called Oh My Science, about two months before, and it was just like kind of playing off the name of a different project, and that went nowhere... So it wasn't even like intentional on that front. So it was this completely accidental thing that a lot of people know about and know me for, and outside of selling some stickers and T-shirts it hasn't really made my any -- the person that makes that Dracula theme probably makes more money with that than I've ever made because of Oh My Zsh.

**Adam Stacoviak:** Yeah.

**Robby Russell:** So... Outside of maybe a few clients I've mentioned here and there.

**Adam Stacoviak:** We did a show with Zeno, so you can listen to that one if you want. He actually doesn't mind making money from his open source, too. Actually, the crux of that episode was like "Yes, you can make money from open source, and here's the way Zeno Rocha has done it, and why he feels it's okay." It's like, "Hey, you can do this too, if you want to."

**Robby Russell:** I know. I keep thinking about ways to monetize Oh My Zsh, and then I'm like "I don't wanna be accountable to anyone to do anything in terms of commercial support, or anything." Although I've been recently getting requested, because there's some companies that are starting -- like, the security teams are starting to say that they can't use Oh My Zsh; I don't know exactly why yet, but... They want me to go through these auditing processes, and I'm like "This is starting to feel like a lot of extra work to allow you to use it, so maybe there's like a corporate version of this product that allows me to at least talk to your security team to get it by-passed, so you can install it on your command line." So it's unfortunate.

**Jerod Santo:** Hm... Package it up and license it, you know?

**Robby Russell:** Yeah, maybe.

**Jerod Santo:** Why not. So let's speak to its popularity, because you said you don't like to say that it's that popular... But man, if you just look at the raw numbers - you mentioned the installs, or whatever those numbers represent... 1,900+ contributors, 300+ plugins, 140+ themes, 135,000 stars on GitHub, 23,000 (almost) forks as of this time... So - massively popular project. Now, on this podcast it's like 50% popular, or maybe I guess 66%, because it's yours... Adam's a loyal user... I'm not even a Zsh guy. I just use Bash. So maybe tell the people who are like me - because surely, there's many of us out there who are just happily using Bash, or maybe not using Bash... What got you into Zsh? Why did you like it more, and why was it worth building this project around?

**Robby Russell:** \[12:12\] It's a good question. At the time there was an element, and a lot of the ideas that came in for the initial version of my Zsh were from people I knew in the Ruby on Rails community... Even some of the initial code in Oh My Zsh was probably copied and pasted from their Zsh configuration that I had copied a year or two prior to that. A few people, like copied and pasted from their Zsh configuration that I had copied or two prior to that. I think a few people, like Rick Olson, had shared a bunch of things with me over the years...

**Adam Stacoviak:** Technoweenie.

**Robby Russell:** Yes, exactly. So at the time, Zsh versus Bash - Zsh had these really awesome autocompletion things built into it that I don't really recall being really simple to do in Bash, or if it even really existed at the time. So it was really just like -- there was stuff baked into it, with a couple of configuration changes, and all of a sudden it was like "Oh, I'm autocompleting SSH host names." Part of Planet Argon, part of our business used to be in hosting as well, so we had lots of servers, I was doing a lot of hostnames and stuff like that at times, and that was just like this really helpful little thing that I kind of just got out of the box. And then we've started just doing some scripting there. So I think it was more -- it wasn't the default, so there was probably this allure of being like "Oh, it's something else. It's not this default. You get these extra little things, you switch over to it... You know something that other people don't." When you read their documentation, it's a little bit more archaic, so if you figure something out, you feel maybe a little cleverer... I'm just being honest.

**Jerod Santo:** Sure.

**Robby Russell:** And now - I mean, I see people doing stuff in Bash now; there's like Bash It, and a couple other Oh My Zsh-like frameworks now that seem to have a lot of very similar features and functionality... And I'm like, "Okay, maybe side by side they don't really look that different anymore." Now I think it's the licensing is an aspect, and that's why Apple switched over to have Zsh be the default a couple years ago...

**Jerod Santo:** Yeah.

**Robby Russell:** ...which I was like "That was unexpected."

**Jerod Santo:** It's kind of ironic, right? Like, that's cool, but now you're the default... \[laughs\]

**Robby Russell:** Exactly. So now we're the default. But a lot of it, at the time - it was just like, there were some cool little features we got with like the autocompletion, and just being able to wire that stuff in, too. Git was still new at the time, and so being able to do some cool things like show your Git branch in your prompt... I'm sure you could figure out how to do that in Bash as well...

**Adam Stacoviak:** The problem is you don't have to go and figure it out.

**Robby Russell:** Yeah.

**Adam Stacoviak:** That's what I love about Oh My Zsh - it's batteries included. I don't have to go and learn how to trick out my prompt, or color it, or theme it... These things just come in, and I get to stand on the shoulders of giants and just use their work, which is the beauty of open source, really. It's getting to use that fun stuff, and I didn't have to worry about -- I don't even know I use Zsh over Bash. I don't have that opinion. But what I appreciate about it is whenever I type in --

**Jerod Santo:** You just do.

**Adam Stacoviak:** Exactly. And thankfully, Apple finally agree with me and Robby, of course, to follow suit... But you know, if I type "ssh" and then up arrow, it's just going through all my SSH history, so I don't have to rethink which machine on my local network do I want to SSH into, or even external, in cloud. It's just in my history, out of the box, and I don't have to go and config that in Bash. I'm sure I could, but I didn't have to.

It also easily organized my .zshrc file with extra aliases outside that, so managing where my path is at, or just anything really in there is just super-easy. So for me, it was like "Well, I like Zsh, I like Oh My Zsh. It's batteries included, easy to install", it's a simple command, given you trust the shell command at the side of this curl command that you're gonna install... Other than that, it's pretty easy. It installs a .ohmyzsh directory in your local root, essentially, and everything is just git-based to update it. It's too easy. It's too easy.

**Robby Russell:** \[15:54\] And it's really easy to remove and take it away... I always appreciate talking through how you perceive that, and why you said batteries included... It goes back to me wanting to make sure that it's really simple for those -- I just think of that junior, full-stack, backend/frontend developer coming into this new career of theirs, getting comfortable, and they're like, "Oh..." And maybe they're using VS Code and they pop up in the terminal part of it, and they've got that in there, they're just like "Okay, this looks a little nicer. It's a little cozier", and they can kind of customize it a little bit, but they don't really need to know a lot about the command line to start feeling like it's a comfortable space for them, having some control over that. So there's that part of it.

And I always remember there was a point when the project -- there were some people working on the project with me, and they were proposing some things that were gonna make it (I felt) way more complicated to keep updated, and to install, and configure. You would need to know a lot more about Git submodules. And I'm so glad we didn't go down that path.

**Adam Stacoviak:** Me too.

**Robby Russell:** But there was a point where we were talking about that for plugins and themes, because a lot of people will argue that Oh My Zsh is just completely bloated, you download all these stuff... I think it's a couple megabytes, I don't know... But it's bloated, you've got all this stuff, and you're just like full of security vulnerabilities, because there's all these random files on your machine. Well - I mean, I don't know how that's different than installing any other gem or library necessarily, but yes, you run it from Curl, there's potentially some security vulnerabilities running around that area, and I'm open to debating that...

**Adam Stacoviak:** Well, I think if you inspect the shell file, that's your security. You can even just simply curl that down and then run the shell command locally, after you've confirmed that the SHA key matches, or something like that, if there is one... I don't think that's even an option, from what I can tell, to confirm some sort of checksum, or whatever; I guess you could do that. You could do it a bit more secure, but I trust hopefully your supply chain doesn't get hacked, and we're still good to go... But I never scrutinize it.

**Jerod Santo:** It's not something that you run on the daily, right? You run it once and you're done, unless maybe upgrades...

**Adam Stacoviak:** Right. On install only. And then from there, it's just a gitconfig. It's like a regular git repository. You know, the one command that brings me joy is the reload command. So anytime you make a change to your path, or you do something in your rc files, or whatever, locally, and you need to reload Zsh, rather than "How do I do that again? Let me google that", I land on Stack Overflow and I copy and paste it - it's just there; reload, bang. And then Zsh is reloaded. It's one of those things that just brings you joy to use the tool really, and I think that's what I liked always about it, because it always had reload, as far as I can remember. And just little things like that was just like a joy factor to use, so that's why it was a default install for me.

**Jerod Santo:** So there's a common trend, or maybe a pattern that we see with software developers, especially when you talk about juniors, people just getting started - when you learn a platform by way of a popular open source framework or tool, you often can't tell the difference between then platform and the tool. So you learn Ruby by way of Rails, and you're not sure, "Is this a Rails thing? Is this a Ruby thing?" Same thing with jQuery; there are a lot of people that called themselves jQuery developers for a long time, and they didn't know they knew some JavaScript.

The same thing is happening with React, to a certain degree... I imagine that might happen here, because there's all these plugins, and stuff... But I wonder if it really matters in practical use if you know what's Zsh and what's Oh My Zsh, and what's gonna be there in Bash... As long as you're able to have your setup, it's probably not the same thing where you really need those underpinnings. I think when you're programming, you need to learn the underpinnings of what's Ruby and what's a Rails function. But I think probably with your environment - I don't know, Robby, what do you think? It's probably not that big of a deal.

**Robby Russell:** It's not a big deal, but I would say that as someone that's not providing support to the general Zsh user community. I do know, and I've heard over the years - and part of that article I mentioned earlier, I included some screenshots from tweets and posts elsewhere... There are people that are more on the pure Zsh realm, who detest Oh My Zsh because people will go there with support problems... And they'll be like "Well, that's an Oh My Zsh issue you're dealing with, not a Zsh thing."

**Jerod Santo:** Sure.

**Robby Russell:** \[20:04\] I know people are like "What's the difference?" So for them, if any of them are listening, I apologize... But at the same time, you're welcome, because I think I've brought a lot of people -- or the project has brought a lot of people to use Zsh underlying, so I think that's great. I'm glad they're using Zsh. So I think that's been one part of it.

But yeah, I think the underpinnings - it's a good question. It is different than probably the Rails and Ruby comparison you had there, where -- I mean, if anything, it's more like learning how to just have some mental shortcuts to using... Like, if you're using a lot of the plugins, it's a lot of shortcuts and aliases, and some extra functions that will reduce the amount of things you need to type on your keyboard to do something... And figuring out how to use Tab a lot, to do stuff, and using your arrows, and navigating around and selecting things, stuff in your terminal. So yeah, I think that's an interesting aspect there.

**Jerod Santo:** Yeah. Well, here's the other aspect of it - as a Bash user, I'll say what annoys me... I'm always like "I wish I could do X", and then somebody will say "Well, with Oh My Zsh all you have to do is Y." And I'm always like "I don't care what you do over there in Oh My Zsh land!" I mean, it sounds cool, but come on, help me out where I stand.

**Adam Stacoviak:** We did say that a little bit in that show with Nick Janetakis, where we were talking about Unix tooling.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Even then I couldn't tell, is this an Oh My Zsh thing or is this a Zsh thing? Is this one of the aliases I made?

**Jerod Santo:** Right. \[laughs\]

**Adam Stacoviak:** Like the ll command, for example, which is a common thing you do when you go into a directory... You wanna list the contents. Well, in Jerod's case - what did you do, Jerod? You changed your CD command to automatically --

**Jerod Santo:** I overwrote my CD command to automatically do that, as well as do some other funky things that can bite people. But my ll is just my own Bash alias that's doing the same thing that Adam is doing, only I don't think he wrote his. I think \[unintelligible 00:21:49.15\]

**Adam Stacoviak:** I didn't write mine at all. It was the batteries that were included with Oh My Zsh.

**Jerod Santo:** Which I'm happy... Any code that I can not write - I mean, let's do that.

**Adam Stacoviak:** And then the dot-dot command, so going around directories - I don't know who came up with that Robby, if that was a contribution or genius on your part, but whomever did the simply just dot-dotting around versus slash-dot-dotting... It was pretty cool to me.

**Jerod Santo:** Yeah, that's rad.

**Adam Stacoviak:** You can do dot-dot-slash, dot-dot, and go back a couple different directories, and I just like a lot of the little niceties that come with it, which for me has just been a lot of easy using. Just install it, it's already there... My config to Oh My Zsh is minimum. Like, almost zero. It's kind of like on the Vim land side, Jerod; I almost go raw, except for plugins, and I'm not changing anything. Most of it is just my default aliases, which is just a small handful, if any, really... It's pretty much a stock install every time. Aside from the theme maybe. That's the only thing that is something I bring with me. And that's even optional, because you've got 30 themes or more in there, and you're not even taking contributions to themes, because there's just so many that could be in there... It's a beast.

**Jerod Santo:** There's your business mode - pay to get your theme included.

**Robby Russell:** Yeah. \[laughter\] It's true. I wish I had analytics on the ones that we could easily get rid of and not break anything for people. That's interesting, you mentioned -- out of curiosity, what is your alias, Jerod, for ll? Is it just ll-al?

**Jerod Santo:** Yeah, let me look... Probably.

**Robby Russell:** Because I think I used to do that in Bash. I'm pretty sure I had that as an alias myself back then, too. I don't remember what it is in Oh My Zsh.

**Jerod Santo:** Yes, ll is alias to ls-lh. And then I have la, and then llb... I've got a bunch of them - by date, by file size etc. They're just sorts.

**Robby Russell:** I feel like there were some Linux distributions I used to use that had included something like that... Because I remember that was definitely something I had known before Zsh, using ll for things... So I don't know if that might have been on certain installs and they had some Bash configuration stuff on top of it.

**Jerod Santo:** Yeah, I don't know... I mean, it's a very common practice, because everybody I talked about ll, they also have an ll of sorts... So I think maybe it's just one of those -- not a cargo cult, but it's a meme maybe; the idea just spreads. And it's so easy to do yourself. It's probably the first alias you learn in Linux 101, or whatever.

**Robby Russell:** \[24:12\] Probably.

**Adam Stacoviak:** Yeah. Well, if anyone out there knows the origin history of ll, please share it in the comments on this episode; we would greatly appreciate that.

**Jerod Santo:** Well, we could do a mash-up and have the history of LL Cool J and the history of ll, one episode.

**Adam Stacoviak:** Right. And we'll put music to it... It'll be fun.

**Jerod Santo:** \[laughs\] Don't call it a comeback, Adam.

**Robby Russell:** \[unintelligible 00:24:31.25\] Okay, that was not good. \[laughter\]

**Jerod Santo:** There you go... So while we're talking FOMO, I would love to hear from you, Robbie, what are some of your favorite plugins and cool stuff that people do with it? Just give me some more FOMO.

**Robby Russell:** Yeah. I mean, the ones that I'm primarily using are -- I think it's called \[unintelligible 00:24:49.19\] There's two of them that do very similar things, but one of them, it's like, you install another little plugin related to it, but it's like a z command, and I can jump around to all different directories that I most commonly frequently jump to and am using... So I'll be like j -- like, part of like a project name, and then it jumps me over to that project that I'm working on, for like a client project, or something.

So I'm constantly hitting -- I said j, right? Not z.

**Adam Stacoviak:** J...

**Robby Russell:** J, and like, part of a client name, and it pops me over there. That always seems to really impress the people that I'm pairing with, like other people on the team, the other developers... They're like "Wow, how did you do that?" I'm like, "Oh, I just installed this little -- I have this plugin, Oh My Zsh."

**Adam Stacoviak:** What's the plugin called? Is it just called J, or is it called Jump?

**Robby Russell:** So that is using Autojump.

**Adam Stacoviak:** All one word, Autojump?

**Robby Russell:** Yup. Another -- I use stuff for Docker and Docker Compose plugins in there. One of my other favorites is called Extract, and it just detects the type of file that you're trying to unzip or untar, what have you, and it just does it...

**Jerod Santo:** Oh, I like that.

**Robby Russell:** So you just extract whatever the file name is, and then it'll figure that out for you. There's some wrappers there... There is the .env plugin, so you can use the .env stuff everywhere, and it'll prompt you when you go into different projects, like "Do you wanna load the .env file now, or always?" Things like that. That's very helpful when we're doing a lot of environmental variables in different projects.

There's Nvm, which is actually I think one of the slowest culprits to Oh My Zsh at the moment, but I do use it. It does slow the startup prompt a little bit, and to be figured out why that's the case... But it's kind of like Rbmb for Node version management. So if you work with Node a lot -- I mean, I also use Rbmv's plugin as well that we have in there.

And then there's some other ones... Since I'm on macOS, maybe I should have changed it from OSX to macOS as the name of the plugin, but it's got a couple of little features into the OSX plugin. You can even control your Spotify from the command line. We can do "spotify play", and it'll look it up and play it on your local Spotify...

**Jerod Santo:** That's cool.

**Robby Russell:** I have a custom one that I probably should just include at some point called ddig, which will allow me to copy and paste a URL into my terminal and have it run dig on that hostname, rather than having to copy and paste the hostname and strip out the HTTPS and all the other stuff in the rest of the URL. So I can just take the URL.

**Jerod Santo:** Right.

**Robby Russell:** That's been a recent thing that I made to scratch one of my own itches there... So those are a couple of the ones that I think are probably worth mentioning. Oh, Colorize is another one as well, and that gives you some stuff where it'll do file type detection. So rather than running like cat, if you run alias for ccat, two c's, it'll colorize the file. So if you do it on a Markdown file, it'll colorize that; or a Ruby file - it'll show syntax highlighting and stuff like that for that particular file based off of the file name format. So that's quite cool.

There's also web search, and it gives you things like Google searching, or DuckDuckGo type searching, and stuff like that. So you can just fire up your browser for a search or something, from the command line.

There's another one for JIRA that I use to open up JIRA tickets, because I'm one of those people that actually doesn't hate JIRA... \[laughter\]

**Jerod Santo:** \[28:00\] We could talk about that... \[laughs\]

**Adam Stacoviak:** Would you say then that because of this it's extensible, but would you say that Oh My Zsh gives a common API to do these things with the command line? Is that one of the suite features, I guess, if you wanna call it that? ...because you didn't come out with plugins originally, so it was an add-on later, so it was an after-thought really... But has it been this "Here's a common API to do Zsh scripting" or things like that - like you said, ccat, or searching, or ddig, or whatever? Is that what it is to you?

**Robby Russell:** I hadn't thought of it that way, but I guess that does make sense. Again, for me it's like, it's loading up a bunch of files based off of the things you tell it to load. So it's like, all those files are on your computer, and you're just like "Include these when Zsh starts up", and then you get all these aliases that were set there, rather than just having this really large zshrc file, which is what I think most of us would have had to deal with before, a really large bashrc file, or a bash\_profile file. That's funny to say out loud...

So yeah, I think it's just a way of keeping it contained. You can do custom plugins, and put your own custom themes, or if someone has themes online, you can just quickly throw them in the right directory, and then just ask to include it. It'll default to using what's in your custom over what's installed, that comes bundled with Oh My Zsh. So is that an API? I don't know; I don't feel like I'm a smart enough programmer to know what the true definition of what an API is there, so... Maybe.

**Jerod Santo:** So how hard is it to try out Oh My Zsh and still be able to opt out -- like, maybe can I have two tabs, one has my Bash setup, one has my Zsh setup... Is that relatively easy to do, or is it an all-in kind of a thing?

**Robby Russell:** Yeah, it's actually very easy. One, if you're using Bash already, it'll prompt you if you wanna switch over to use Zsh as part of the installer; so then you can just switch back, and that's like using -- whether or not you're familiar with bin/zhsh that you would probably run on your machine to switch it back to Bash, if you wanted to go from Zsh to Bash... But also if you already have Zsh installed, it's very polite when Oh My Zsh gets installed. It would be like "Oh, you already have a .zshrc file. I'm gonna go ahead and copy that over to a backup file", that's called like preomz, or something... And if you uninstall it, I believe the uninstaller will check to see if that's there, and then put it back where it belonged, and then kind of clean itself up.

So Oh My Zsh comes with an uninstaller; it's mentioned on the -- I'm pretty sure it's in the readme, how to run that once you install it as well. So it can kind of clean up after itself. Because it installs it into its own .ohmyzsh directory, and then that .zshrc file just points to that directory, and if you go back to your old .zshrc file, then it wouldn't point back there anymore, and you'd be where you were. So yeah, you can play around with it for 15 minutes and then go back and be like "Yup, maybe another day." But hopefully, you'll find more value out of it than that. \[laughter\]

**Break:** \[30:48\]

**Adam Stacoviak:** So Robby, if I go into the Oh My Zsh directory, which is actually a dot directory, so it's hidden from Finder if you're on macOS, or anywhere else; so it's kind of a hidden directory. But nonetheless, it doesn't matter. I'm in that directory because I have Oh My Zsh already installed; I just type ll, which is listing the directories. That's ls- probably your common beautiful things to make it human-readable... And when I see that, I see a few directories. Cash, custom, lib, log (not blog, but log), plugins, templates, themes, tools... And whenever I go into plugins there's lots of stuff in there.

In the last segment you mentioned some things you're using. Ccat was part of colorize... Finding these beautiful little hidden gems inside there. To me, this project seems like it just has so much opportunity to be such a useful tool. Obviously, it's been popular, as we've said. We shared the stats in the first segment, so it's quite popular... But I kind of feel like it's got even more life into it, with a little bit of work, I guess. I guess it kind of depends on how much more you wanna put into it.

What do you get from this project? What do you get in terms of motivation? How often do you show up? Why do you show up? What excites you about the opportunity here?

**Robby Russell:** Part of the thing that I really enjoy about being part of this project - and it's great that a lot of people use it, but it just seems like everybody that starts to use it and they embrace it are very vocal about it, they're very appreciative of it... So I just get a lot of these nice little -- you know, when you're running a business and you've got employees, and over many years of navigating through running a business and stuff, and dealing with clients, it's a much different level of engagement level. And I feel like with Oh My Zsh I get a lot more high frequency in positive endorphins, I suppose, from people just appreciating something that I help be part of. But again, the other part of it is that so much of the project has been, as you mentioned earlier - it's like, over 1,900 people that have code baked into Oh My Zsh, which is not a small number of people. So my goal by the end of the year is maybe we'll hit that 2,000. I think we'll be close.

But I think just knowing to be part of a project where I don't really feel like there's -- I don't have this huge maintenance team on the project; it's me and another person doing most of the work. I've got a handful of people that are part of our Discord to help moderate and keep those conversations going well, and organizing and answering questions on there in GitHub discussions... So there's like a high volume of things happening around the project, but I really don't need to spend a lot of time thinking about the project. Maybe put a couple hours a week, I think that probably would be my average right now...

And there's definitely been periods where I don't really do much on the project for a couple months, and it still goes. I always feel like it's feature-complete enough, in a way where everybody can keep installing it. Anybody that's waiting on a PR to get closed right now - they already have those changes probably in their own version of Oh My Zsh. If they were smart -- if they know enough about Git and they can fork the project and do that... They have what they want, but they wanna share it with the rest of the community, so sometimes I might be a bottleneck... Or we as maintainers, having the volume of people that are submitting code changes could be a bottleneck in having other people know about that... But I don't feel like people are saying "We've been waiting on this new feature for a long time. You promised us this." So I like that it's not super-demanding in that sense.

We've talked about like a next major version of the project and what will be changed, but we've been talking about that for like eight years, I think, and it hasn't happened... We're like "Let's just keep leaning on git."

Another aspect about the project - given that there's so many people that are using it, and we have so many people following the project on Twitter, posting about it on their Instagram, there's people talking about it on TikTok now... It's just like, "This is so weird and interesting."

**Adam Stacoviak:** TikTok? What?

**Robby Russell:** People post stuff on TikTok, and they're really excited about, like, "Look, I'm a hacker now, because I've got this cool command prompt thing on my thing", or "I got it to run on my phone", or whatever. And like, that's cool. So we planted the seed, like how people are excited about showing off a screenshot of their terminal on the internet to be like "Hey look, I'm getting to this point." They're kind of showing off a little bit, maybe to their peers, family, friends, or whatever... They're like "Look at me in this new career. I'm becoming a hacker, a software developer..." It's kind of adorable.

\[36:12\] The other part of it is I get to sell stickers and T-shirts and coffee mugs, and things like that. We get almost an order a day for something. It doesn't make much money for us whatsoever, but if I go back in my history of becoming a software programmer - because I never wanted to be a software programmer. That sounded like the most boring thing when I was young to do that, because most of the time I was always introduced to like "Here's a book on programming. If you write all the code over these few pages into this thing and you run it, then you can play this game." And I'm like, "That sounds boring. I'm gonna go outside and play." Like, why would I type something that someone else already wrote? I didn't understand why that would be remotely interesting.

Fast-forward several years, I'm a teenager, I'm really into punk music, I'm making stickers, I'm printing stickers out and I wanna sell them on the internet. How do I make a web page to do that? So I learned how to do some web stuff, make web pages, how to build CGI scripts so I can save information if someone submits something into a form... So I learned some of the early things for learning how to build websites, so that I could support wanting to run a sticker business on the internet back in the late '90s. That business went nowhere. That's how I got into writing software in the first place, so I could sell stickers on the internet.

**Adam Stacoviak:** \[laughter\]

**Robby Russell:** I can still sell stickers, and I'm like --

**Jerod Santo:** Small circle.

**Robby Russell:** ...I'm successful. I'm finally selling stickers!

**Adam Stacoviak:** Congrats.

**Robby Russell:** That's the highlight, I guess, is that people put stickers on their laptops.

**Adam Stacoviak:** I feel bad I haven't bought a sticker, and I'm such a fan. I feel like such a poser here, really.

**Robby Russell:** T-shirts, stickers - I've got it all. I've ran out of coffee mugs at the moment, but they also really have \[unintelligible 00:37:36.21\]

**Adam Stacoviak:** Yeah.

**Robby Russell:** So you can go buy some stickers and T-shirts on our website.

**Adam Stacoviak:** It's interesting, the angle that you came to that... You were against programming based on what you've just said there, and that led into somehow Planet Argon, which has been going longer than this project, successfully. You mentioned before doing hostings, so you've been an entrepreneur that tried different things, not just simply one thing and do it right and keep doing that... You took swings at other things, and they either were more or less successful than the other thing, but you've figured out a way to maintain a business, maintain great culture in a business, all from just trying to sell some stickers on the internet. That's interesting.

**Robby Russell:** I always think that there's a level of being ignorant about what I was getting myself into when I started the business. It's what has allowed me to "flourish" as a business owner, I suppose. Because running a business is hard; having employees, navigating a pandemic, navigating client relationships over the years... I've learned a lot. So programming is a big part of that, but a lot of it is all the relationships and things like that that you're managing along the way as well. So that's another thing about Oh My Zsh - I'm like, "I don't want more responsibility with this project", but I also wanna make sure it's being taken care of and we're not gonna add something that's gonna wipe out a quarter million people's computers all in one day because something got hacked, or something.

**Jerod Santo:** Right. Have you found - whether directly or indirectly - that your work on Oh My Zsh and your maintenance in the community and everything, over the course of a decade, has proven to be kind of a virtuous circle with Planet Argon? Because surely, you were dedicating some resources - your own, or whatever - to this, and it's a labor of love, and all that... But potentially, as a person who runs a software development consultancy, it also shows off your abilities, and how you can lead a group of people, and maybe impress some folks... Have you ever gotten business from it, or contacts, or anything indirectly?

**Robby Russell:** I don't think we've had anyone that I can recall that was specifically referred to us because they knew that Oh My Zsh was created initially... But I've been on sales calls, I've had clients that have technical people on their team that will bring it up a conversation or two into our sales process... And they're like, "Oh, I was talking to \[unintelligible 00:39:58.06\] on our tech team, and he's a huge fan of you. He says you're famous." And I'm like "What...?" Because most of my clients are people that work in different areas of a business. They're not always your software engineering people. But they might work with teams internally or elsewhere...

\[40:13\] We have a project that we've been working for like eight years for a client, and the client is gonna be ending the lifecycle of that particular project, and the new company that's coming in to build them a different platform - it was something that we inherited, so we're okay parting ways with it... But I was chatting with the new agency that's gonna be working on the project over the next six months, and they were like "We love Oh My Zsh." So it was funny, the client were feeling like there's gonna be this really awkward scenario where the two agencies were having to meet each other, and instead it was like "Oh, we're big fans of Robby and what they've done", and I'm like, "This feels good..."

**Jerod Santo:** Yeah.

**Adam Stacoviak:** There's some inherited trust there, really. Like, if you've ran the project well for a decade or more, which you have...

**Robby Russell:** Yeah.

**Adam Stacoviak:** ...if you've got great maintainers in place, a great community in place, consistency there in terms of releases, or support if it's needed... Just anything really that keeps the consistency and the trust going along with the project; I would imagine that that's inherited to Planet Argon. And I bet you if you dug further, you'd be surprised. I don't think you're looking for it; I bet you there's more juice flowing, basically, between the two.

So that's why I think that, to dig in further, with some different ideas, not so much to commercialize it, but just to -- I think \[unintelligible 00:41:26.17\] was on Ship It recently and she talked about documentation being an API to a product. And I think the example that you shared with ccat or ddig - these are like little hidden gems inside of other plugins that I wouldn't think to enable, like colorize. I don't know what that is. There's an awareness, there's hidden gems within this project that people aren't aware of, and you're relying on TikTok essentially to expose --

**Jerod Santo:** Lots of people are relying on TikTok to expose things these days... \[laughs\]

**Adam Stacoviak:** Well, you know what I mean; not so much relying on it. I don't mean that negatively...

**Jerod Santo:** I know that.

**Adam Stacoviak:** I mean, there's an opportunity here, if captured well, because Zsh is the default on macOS now, it is a highly popular platform for the younger generation or the new generation into hackerdom (if that's a thing). We always say around here that we care about the past, present and future hackers. And so in many ways, we don't do offensive speech on this show, for many reasons, but one of the mains - if a young listener is listening to this show, we don't want them to be turned off, or have just this offensive speech all over the place, because we wanna have a place that's welcoming and open.

So I just think that there's a -- I don't know what yet, but something tells me me being a fan for so long that there's more. This dog hunts, so to speak. There's more stuff in there.

**Robby Russell:** I appreciate that. There's some ideas that Marc, the other maintainer and I have been talking about, kind of related to educational-type content, and things of that nature, to highlight things... And it's also just trying to remember to -- one of the other things that I also enjoy about the project is that -- because when people share articles on how to do things, or share off what they're doing, like broadcast that, they might have 20 followers, and then I'm able to retweet that to like 43,000 on Twitter, or whatever... And they're just like "Oh, wow." So I can amplify these people a little bit early on, as they're gaining their online reputation, or whatever you wanna call it. That part is interesting.

But yeah, it's interesting how even just reminding myself that if I just show off some of the fundamentals again and again, on how to do these really simple things... Even \[unintelligible 00:43:30.26\] that we're recording this, I couldn't remember how to do something in Ruby, on irb, to look up some details to figure out where a method might be defined while you're in irb... And I googled something, and I'm like "Oh, right, it's like that", and then I created a little coding screenshot and shared that on Twitter... It's my most liked tweet in probably a year or two. And I was like, "Oh, that's right. I need to remind myself that a lot of these things that I take for granted, small little things, can be brand new to a lot of people", and there's a big audience of people out there that are hungry for learning new, quick little bites of information, or little tips, like "Oh, if I use that one ccat thing - that's cool." Things of that nature.

\[44:10\] So beside just trying to do that for the community, but there's been talks of working on like an eBook, or video content for people... But who has the time for all of this...?

**Adam Stacoviak:** Yeah... Well, it depends too what you're optimizing for, personally. So while there may be this opportunity, it's like, "Is it the right timing for you?" I personally don't know that; you're on a podcast, you could share it if you want to, but I think where I would begin is like "What's the state of your personal passion?" Is it simply in Planet Argon, is it finding new, fun things? Is it like hobby things, where this could be hobby(ish), but find ways to commercialize some of your time involved? Or at least have some different end points or end games involved, and putting more into it. It all depends if what you're optimizing for leads you down the path that gives more to Oh My Zsh or it doesn't. And if it doesn't, then that's no big deal. But I think there's a lot of cool stuff happening in there, that with the right plan, you'd enjoy it and you'd get some stuff from it, too. I'm not sure what that stuff might be; it might be dollars, it might be more opportunity for your company, it might be community credibility, it might be additional trust, so the next client is easier to win... You can be like, "Hey, by the way, I'm Robby Russell from this project; I know you installed it, because everybody does, because it's so popular... By the way, we win business because of that." It's like, there's a lot of opportunity there. It depends.

**Robby Russell:** Thanks for the advice there. I'm gonna spend some time reflecting on that. Since you kind of alluded to the -- I've always kind of felt like this project, Oh My Zsh in particular, falls in maybe my top five or six things that I'm thinking about project-wise. Obviously, I'm running a business, it's a pretty big one... And I think if my employees are listening - it's number one, obviously, right? Maybe it's second or third... It's like, I play music, I'm in a band, recording albums, stuff like that - that's a big part of me; I've got my podcast, where I just wanna geek out and talk with people about long-term software maintenance challenges... So I've got a podcast called maintainable, called Maintainable.fm, and it's just interviews with people that are dealing with long-term challenges that companies and organizations face with dealing with legacy code. I'm not a greenfield application -- I'm not excited by new projects, blank canvas. I like working on messy, older things, and making them better, so I've been able to kind of frame that around the type of business that we're trying to bring in at Planet Argon as well... So that's been a good alignment.

And then Oh My Zsh is I guess another example of maintenance, it's a long-term project. We haven't needed to completely scrap it. I never thought Oh My Zsh would last more than 4-5 years; I'm like "There'll be better things that come along and deprecate this, or people will outgrow it", but some people just -- as you said, you install it and you just keep it around, and that's pretty awesome.

So just thinking about figuring out where Oh My Zsh fits into my priorities is an ebb and flow thing, depending on what season of my life it is. So I like that I can pick it up whenever I want to, and then I can kind of set it down for a while, until someone asks me to talk about it again on a podcast... I'm like, "Oh yeah, I do that. That's right. It's a thing."

**Break:** \[47:08\]

**Jerod Santo:** So we have many open source maintainers that listen to the pod, and it's always interesting to learn from one another. You have a successful, long-term project; every project has its own warts and wrinkles and pros and cons, so they're not all the same... But you've been successful in 1,900+ contributors. That's a major number. I hope you do get to 2,000 by the end of the year. That's a nice, rounder number. But surely it hasn't all been easy and awesome the entire way. So any struggles along the way, any community problems, or how do you manage to -- you have this Discord, so there's humans in there, and they offend each other... What's gotten wrong or what have you learned over the years?

**Robby Russell:** Earlier you'd mentioned -- we talked a little bit about the security aspect to the project. So given that everybody's installing the project through a Curl command, I'm very cognizant or at least aware of the fact that that could be a huge point where something bad could potentially happen. So I always felt for a really long time it was my responsibility to make sure every bit of code that was ever contributed and accepted to the project had my vetting, so that if everybody's laptops get wiped out at the same time, I can be like, "Sorry, it was my bad", and then hide away from the internet for the rest of my life. I haven't had to go there.

But for a long time, there was -- you know, we touched on, like, my initial time on the Changelog back in 2011, and I listened to that again recently... But I had made a point about saying I try to keep the number of open pull requests under a hundred. I think it's closer to 500 or so now, on a regular basis, that we have sitting there for us. And we're merging stuff. So it's not like there's stuff not there. But one of the challenges I had was trying to find and recruit maintainers, because I didn't really know how to go about doing it, because unlike -- I think if you look at a lot of other open source projects that might use Ruby on Rails, for example... Like, you get people on the core team - they probably have people that are working at companies that are using Ruby on Rails as part of their business.

\[52:02\] Oh My Zsh is kind of like this thing you're running - the end user puts it on their laptop, and it's not like a company thing, \[unintelligible 00:52:08.09\] spend some time contributing to this project." It's more like, "Oh, I use this thing, and it's kind of created by some person across the planet", or whatever. Anyway, so that was always a weird challenge, to try to figure out "How do I get people to participate and help more?"

Then, over time, people would volunteer a little bit here and there, and there were some people that would do some testing for me... But I was always like, "I don't really know them well enough to feel comfortable to give them just full access to merge into the main branch." And the other part of it is I honestly did not feel like I had a vision for the project, so how could I hold anyone to try to stay in the same plan, where this is kind of like the goal for the project. As I've mentioned earlier, I wanna have this be simple for newcomers to a command line... So like, okay, that became one of our core values, I guess, as a project. This isn't really written down; I think it's in a Google Doc somewhere that I've shared with a few people, but this isn't something we have on our --

**Adam Stacoviak:** Your Values page?

**Robby Russell:** Yeah.

**Adam Stacoviak:** OhMyZs-- what is it? The URL, essentially...

**Robby Russell:** That could be somewhere \[unintelligible 00:53:10.00\] So for a long time, like "Well, if I had more people...", then they'd start doing things, and then I would relinquish some control, I suppose, if I'm being honest, about the direction of the project. So I was nervous about that for a long time.

Eventually, I got a maintainer into the project, but the way that that happened was that because I was always the bottleneck for reviewing and merging stuff into the project - you know, a couple of people were working together, and one person in particular named Marc Cornella - he's based in Barcelona - he started putting together pull requests that packaged up other pull requests, and being like "I vetted all this", and he would send it over, like "This all looks good", and it would be like 20 things all included, and I'm like "Oh, you've just saved me so much work. This is awesome. Merge." And that became our thing. We did that for about probably a year, a year and a half, where he was just working around my limitations to be able to go individually. He would do that, and he'd come up with his own workflow. But I didn't ask him to do it, he just started doing it.

So after a while, I was like, "Alright, let's chat. Come in... Here, you can have access. Don't let me be the bottleneck anymore with that." So that's how Marc got in. He found a way to help the project, and he was persistent, and he just worked around me, came up with his own workflow, and didn't ask for permission, and just did it, and then eventually that gained enough confidence in me to be like "Cool. You're in."

**Jerod Santo:** What's his Why. Do you know his Why? Why did he do that? Has he ever told you?

**Robby Russell:** I feel like he's probably touched on that before... We've been working together for so long now that I'm just like "He's always been part of the project, right?" It's interesting, because he works in sysadmin stuff... My assumption is that -- maybe he'd be another good person to have on the show sometime, hearing his take on that, but I think it's just like something he felt like he could wrap his head around, and he was kind of excited to work on some Zsh stuff. He's really proud of the fact that he gets to be the primary contributor to the project, at least on maintaining it... And I know it's helped him with his career, and stuff like that as well, so that wasn't always the goal necessarily for him, but it has been helpful for him. So I appreciate that.

We've had other people that don't know a lot of coding skills, but they're really good maybe wanting to help out and grow the community. We've had someone else named Lucas who helped come up with our Discord stuff; he was the one who proposed that, and I'm like, "I don't have time to sit into Discord and answer questions all day", and they're like "Well, let's just see what happens." I'm like, "Cool, let's go with it." And now there's like -- I don't even know how many people are in that Discord, but there's a lot. And so many channels - we've got people who volunteered to be moderators... So that's been pretty cool. I don't know if you're familiar with Orbit, the software project, orbit.love...

**Adam Stacoviak:** Yup.

**Jerod Santo:** Nope.

**Robby Russell:** I got access to it almost a year ago, to start watching the community across Discord, Twitter, GitHub, and just seeing who's becoming part of the community through that... So I've been able to identify certain people to reach out and start asking questions... Because I'm like, "Hey, would you like to contribute more? I've noticed you've contributed like 15 different PRs you've reviewed... That's pretty awesome. Would you like to maybe help contribute more?"

\[56:02\] But also in parallel to running a business, we've been very mindful about trying to make sure that we're building a diverse team. So I've got plenty of cis white males that are happy to volunteer their time to work on the project, and I'm like "Maybe we can bring a couple more people into the project, but I would really like to expand that out and have women be contributing, and people of color be contributing..." I want to bring in a more diverse group for that maintainer group. So that's been another weird thing that I've been trying to navigate, because there's definitely people offering, but I'm like -- I wanna have a more intentional plan for that. So that's not been something I can necessarily prioritize a lot of thought and energy, outside of like reaching out to our newsletter groups, and stuff like that... Just trying to find those people and help them become part of that world, but again, it's just one of those things that I'm trying to think about when it comes to open source, because I don't want our project to turn into just another really male-dominated project. And not that it's not already, I think, in that capacity. So I wanna be intentional there.

**Jerod Santo:** Yeah. It's tough, because when you have somebody staying in front of you, willing to help, it's like - that's a tough No to receive. Or maybe it's just silence, I'm not sure what that will manifest as... But I get the struggle there, from both sides.

**Adam Stacoviak:** What about the vision? How close would you say you are to the vision now? Do you think you have the clarity? The reason I ask that question is often to lead, to be followed as a leader, it takes some awareness of the vision, so that you can cast that and inspire a direction. People follow you because you have a direction, and sometimes that begins with clarity on where you wanna go, or what you're trying to do with it. So that's kind of like back to that "What are you optimizing for?" Because -- we never really answered that, and I'm not asking you to answer it here on the show, because I'm sure it's more deep than just simply "Hey, I thought about this on the podcast. Here it is." That's sometimes the struggle with what you're dealing with, is the clarity around vision, and how you can lead. Because if you're not clear on that, what you're optimizing for personally - Jerod asked about Mark's Why - if you don't have your Why clear, it's gonna be hard for you to cast that vision, and just by inertia, have people follow you.

I think part of diversifying your maintainership too is sort of baked into that hidden gem stuff. If you spoke more into different areas where it's just cis white men, or men-dominated circles, if you spoke more into those places and extended an invitation, you'd probably get some followers in that regard.

**Robby Russell:** That's true. I think we have a very diverse user group. I think that's just part of seeing how the software developer and engineering communities evolving and growing over the last several years... And that's been good. So there's definitely a large, more diverse user group, seemingly, based off the data that I can find using Orbit as an example there... And I can say that even from just stickers and T-shirt orders, and stuff like that. We keep a lot of T-shirts in stock for women sizes, and they're being purchased, so that's great... But I think there's a difference between using the project and wanting to contribute to become a maintainer of something... Because a lot of the people that are using the project - they're working in different technologies, they're not probably wanting to program in a shell command line environment. That's not the thing that's maybe exciting and motivating them.

So it comes back to the values thing... Personally, a couple of years ago I had gone through this exercise of trying to navigate "What is my big Why? What's my big goal in life?" and I was kind of turning around to being -- the simplest way is I feel like I had a lot of opportunities open up for me, and my goal was to open up opportunities for other people as much as I possibly can. Something like Oh My Zsh I feel like is helping part of -- being a small part of someone's journey as a software engineer, especially, again, trying to make this simple and cozy and friendly, and most importantly, delightful for people new to the command line experience and just wanting to be part of their developer toolset. When I see Oh My Zsh ranked in people's top five developer tools, I'm like "That's such a great honor, to be part of such a list, or something like that."

\[01:00:02.15\] So I just wanna keep the energy there friendly. I think that's reflected in our social media content that we produce; it's always trying to be fun, delightful... When you have an audience like that, I can make up the weirdest tweets and have a lot of people engaged with things that don't have anything to do with anything, and I like the experimenting maybe in social open source marketing is probably a thing that I find myself being like a benefit of getting to work in this project; I get to experiment with a much larger audience than I would be able to just as like a Ruby on Rails developer, what I focused on most of the rest of my life.

**Adam Stacoviak:** I had this idea that might -- I don't know if it exists out there or not, but this idea of tour of duty, essentially. One, to define what a maintainer is for your project. I think generally there's a definition for open source software maintainer, and I think that can be intimidating to someone who's never done that before, but quite capable. And I think there's two sort of ideas I think could be deployed by you and tried out. One, define what a maintainer is of Oh My Zsh, what that person might do. It might be Marc, where you sort of just vet some pull requests, make a single pull request, and that's one thing. Or it could be help out with PRs, just commenting. A maintainer doesn't have to be somebody who literally maintains the code. It could be just simply like the similar terminology you might use for an employee. You don't have to be the senior director, you could just simply be an individual contributor.

So they're still both employees, and you still have input and value that you add, but maybe define what maintainership might be for your project. And then two, it might get easier to say yes to it if you shorten the timeframe. Give me a month or two of being this, and if you like it, you can keep doing it... But a tour of duty. Every three months where we visit your time here; if you wanna leave or you wanna depart, and for whatever your reasons are - help me find somebody else if you don't mind, but give some parameters to what the Yes is... Because sometimes the yes is not there because what it is is not clearly defined, and it's kind of spooky and scary, because hey, it's Halloween... At least this timeframe. But that's totally off the bat. This is October, by the way... But it's a little spooky and scary because you're like "I don't know what I'm saying yes to. Am I maintainer? I get imposter syndrome everywhere basically sprinkled on me, so I say no to most things." Not me, but I'm just saying this person might say that.

So if you can sort of like remove some of that opportunity for imposter syndrome, and say "You know what - you do belong here. Here's what I ask from maintainers. Here's some different maintainer types. Here's maybe a tour of duty idea", and it's a little easier to say yes. And you might get more yes'es than you think.

**Robby Russell:** Very timely. I literally got an email 36 hours ago from someone, and I've been like "How do I respond to this offer to help in some capacity?" I think you're right though, it is one of the challenges... Marc and I have our workflow that we've been working with, and I'm like "Who has the time to introduce another person into that mysterious thing that just has evolved between him and I?" So it's like, "Cool, let me throw into the deep end. I don't know what you should focus on first", but you make a good point. It does seem like something I should definitely spend some more time thinking through with Marc, to come up with a good plan for something like that.

We're trying to find "Here's the types of issues or things that would be really helpful to get testers out on", and we label things like that... Occasionally, we'll put out a call to get some assistance there, but there's not necessarily a lot of follow-up. Like, "Okay, cool, you did that. Maybe next time you could do something a little bit more" or something. It's interesting.

**Adam Stacoviak:** I'm definitely not saying it's easy. The burden of being a maintainer, or even the creator and leader of, which you're like sort of like maintainer-maintainer, because you maintain the maintainers - it's definitely a burden. So I have complete empathy. But we're here to say you can do it, and I think there's one lesson I learned elsewhere that sort of is a parallel, to some degree... It's this idea of career capital. This is why I feel so strongly about what you can do with Oh My Zsh, because there's this idea that throughout your career, in any career really, you gain some capital in terms of what you can do.

\[01:04:04.21\] And when you switch jobs, you change jobs or whatever, you don't wanna ruin that by going from being a lawyer to a software developer, or vice-versa. Maybe that works for some people, but there's this idea of career capital, that you can leverage it. I think there's a leverage opportunity for you and the community and Oh My Zsh, because it's just so popular. And I think if you look hard enough, you'll find how you can leverage it in a good way, in the positive ways, of course; the positive sides of leveraging things, that matches with what you're trying to optimize for, what the community could need and use... And you might be a great on-ramp to somebody's future in open source.

So I think there's just a lot of opportunity here. I don't know exactly what it is, but it's this idea of career capital. There's a lot of equity built up into this community, and I would just ask you to -- personally because I love using it, so don't stop maintaining it, keep it going... And obviously, we had you here on the show because love it, and I'm happy to sing the praises... Like I said, it's a default install for me. Happy to help out however possible to share the Oh My Zsh love and support and whatnot. Your podcast, Maintainable.fm is awesome... And I just wanna encourage you. Hopefully, when you walk away from this show, you dig a little deep and see what might be the future for you and Oh My Zsh.

**Robby Russell:** I appreciate that, Adam. I'm gonna definitely do some soul-searching on this in the near future.

**Adam Stacoviak:** Anything in closing? Anything left unsaid for you, for the community, for the Ruby on Rails community that you're deeply involved in? Anything? You've got the ear of hackers out there... What would you wanna say to them? Anything left?

**Robby Russell:** I just wanna remind people that there is this interesting thing or phenomenon in our industry, where most people are excited to work on new things early in their career, and I think there is an under-appreciation for -- most people who graduate from a bootcamp or go to coding school, your first job is probably not going to be working on a brand new application. You're probably gonna get hired by a company that has existing software, that's been around for a while. And that means it's been successful, because it's gotten to that point.

One of the things I would -- since I have a little bit of air time with the audience, it's just to think about being cautious around pitching, throwing out the idea of like "Let's rewrite things." I'm a big advocate against pushing back on the big rewrite... Because if you can't figure out how to get good at refactoring your code, rebuilding the whole thing from scratch might sound nice, but probably 95% of the time \[unintelligible 01:06:27.27\] it's gonna be a bad decision for you and the team that you're working on. You've gotta work on those skills, on how to get in debugging, work on existing software projects. That's, in my opinion, the job of a software engineer. It's not to build new stuff all the time, it's to take care of the stuff that we've already been building, and keep evolving it... Because we don't do that with like housing that often; we don't just plow the whole thing down and build it. You evolve things; you reinvest things, you take advantage of what's there.

Cities are all formed off of layers and layers of many generations of people living there, and that's similar with software code. Because it's software, we think we can just throw it out and replace it all the time, and I think that's very short-sighted. And I'm not saying that because I just make a career now out of just taking care of old Ruby on Rails applications (that's what I do), but there is an aspect of like -- I mentioned earlier, I'm not excited by the blank canvas. It's very daunting to me. I'd rather just jump in and work on stuff that's already working, and help make it better, and refine it, and improve upon it... And I think that's a big part of our job that I would like to see more people coming in the industry understand and be told that that's gonna be part of the job.

I've met a lot of engineers that are like "I'm gonna go work at this other company, because I don't get to work with new stuff enough... Like, the brand new, shiny stuff." I'm like, "Who does? In five years, that's gonna be old, and you need to learn how to build those skills up sooner than later." There's a lot of ways to do that, there's a lot of literature and great speakers on those topics, but...

**Adam Stacoviak:** You're a great speaker...

**Robby Russell:** Yup. And I speak with some of those people on the podcast.

**Adam Stacoviak:** I like your show. You've got a lot of great content on there, a lot of great guests on there, speaking very specifically about their -- \[unintelligible 01:07:57.16\] DHH was on your list recently... So I encourage people to check it out. Maintainable, which is an awesome podcast name... Maintainable.fm.

Robby, thank you so much for sharing all you have today... Thank you for open-sourcing Oh My Zsh and sharing it with the world, and then being open to grow it into what it is now. I look forward to your future with it, and what more might come from it. Thank you.

**Robby Russell:** I appreciate you both having me on the show, and thank you all for listening.
