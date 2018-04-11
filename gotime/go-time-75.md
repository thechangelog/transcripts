**Adam Stacoviak:** Alright, it is GoTime, episode - I think, based on this document - 74... Or 75. Episode 75. I'm Adam Stacoviak, I never host this show; in fact, I've never hosted this show. I just come on as a thing on the wall, or something like that, but I'm not ever in the limelight here... But today I'm gonna host it, because why not, right? And obviously, I've got Carlisia here, so let's say hi, please...

**Carlisia Pinto:** Hi, everybody.

**Adam Stacoviak:** And I hate when we do that, so I always listen to Erik or Brian say "Hey, so say hi..." Somebody said in the chat a while back that it's like the circus, you're asking somebody to do something, so it's a weird thing. I will never do that again.

**Carlisia Pinto:** Oh, Brian always rebels against that.

**Adam Stacoviak:** He does, and I do too, and then I did it... So the cycle continues. And we've got a long-time listener, first-time caller, pinnacle person in Go from what I can tell; I'm merely an outsider here, but Florin Pățan, you're here - thank you so much for joining us today. Say hello.

**Florin Pățan:** Hey, everyone. I'm happy to be here.

**Adam Stacoviak:** Did I do a good job on the name? It was mostly okay, right?

**Florin Pățan:** Yeah, mostly okay, let's go with that.

**Adam Stacoviak:** So for those catching on the rebroadcast and/or live show of this, it's difficult to say his name, but I've got it, so there you go. And today, from what I understand, we're talking about [GoLand](https://www.jetbrains.com/go/); it's an IDE from our friends at JetBrains. Then we're also talking about Go the community, which is fun, and particularly the fact that you help lead the Gopher Slack, which considering how much it's grown over the years, it's gotta be a big job. But let's maybe start with your version of who you are in the Go community, what you're doing... Help people understand who you are.

**Florin Pățan:** \[00:04:03.23\] Okay, sure, that sounds fine. I've started with Go roughly five years ago, I guess. Back then, I kind of did a lot of PHP and I was like "Okay, let's see if I can learn something else." I couldn't learn Scala, that was not really my cup of tea... And yeah, I found Go, and ever since then I've switched to it full-time. I became initially a member of the Go Slack channel, after that I became an admin here, and ever since I've gotten a bunch of other Go jobs officially, I maintained some pet projects, and got involved in the JetBrains extension for Go. One thing led to another, and five years later, here I am, working now for them officially as a developer advocate.

**Adam Stacoviak:** This is like breaking news though, right? This is day one, or day two, from what I understand, of you being a JetBrains employee?

**Florin Pățan:** Yeah, pretty much. It's the first week I'm officially at JetBrains. Before that, I think people assumed I'm part of the JetBrains team, although I wasn't...

**Adam Stacoviak:** Because you're so active.

**Florin Pățan:** Oh yeah, pretty much. It's the editor that I personally enjoy using. I know it's a bit of a sensitive topic here, because everybody is used to their own workflows, their own editors, and people can get a bit more passionate about this... But yeah, overall I like this one, and I guess here we are.

**Adam Stacoviak:** Right. We've got Emacs, Vim, of course... You can't ever avoid those two. Those are not technically editors, but they are.

**Florin Pățan:** Well no, they --

**Adam Stacoviak:** Yeah, they are... Then you've got VS Code, which has become -- Carlisia, you use VS Code, right?

**Carlisia Pinto:** Yeah, that's what I've been using for a while.

**Adam Stacoviak:** But for a while there you were using Electron, weren't you? Not Electron, sorry; Atom. I always skip those up.

**Carlisia Pinto:** Atom, yes.

**Adam Stacoviak:** What made you switch away from that?

**Carlisia Pinto:** I don't remember anymore. I was having some troubles, and I think there was a speed issue, too. I don't remember, basically.

**Adam Stacoviak:** Well, I use VS Code, but I don't do any Golang programming at all, nothing whatsoever, which makes me totally an impostor here, but... The tagline for GoLand is "Capable and ergonomic." What is that?

**Carlisia Pinto:** Yeah, let's talk about that. What does ergonomic mean in this context?

**Florin Pățan:** In this context it means that it allows you to do whatever you need to do, and focus on the code, and let the IDE figure out for you where your mistakes are, as soon as you do them, or help you suggest fixes for them. Let's say you have a mistake in your code - you can quickly correct it. Sometimes the IDE itself is being able to provide fixes for it.

It also allows you to use it not only in Go contexts, but also for web development - for things like TypeScript, or... I've seen now there's more support for Vue.js as a framework, there's a bunch of React, Node.js support by default in the IDE... So it allows you to focus on development not only for Go, even if it's tailored for it, but also for a lot of other languages.

\[00:08:12.21\] Many people don't know this, but one of the tips to actually start using the IDE is unplug your mouse or turn off your touchpad, because you can do everything with just the keyboard.

**Adam Stacoviak:** So the way you got involved in this was through community aspects, plugins... Is that right?

**Florin Pățan:** Yes, pretty much. When I started learning Go, my editor back then was IntelliJ IDEA, and I noticed there was a plugin which wasn't really maintained at the time, and I learned Java in order to write Go, basically.

**Adam Stacoviak:** Learned Java to write Go. You don't hear that often... It's like, I'm concerned that there's actually some sort of -- the internet searches right now for your address to come and get your or something like that, because you shouldn't say stuff like that. Is that true? Does that happen often?

**Florin Pățan:** I don't think it happens that often. More often it happens that people may already know Java, and they are switching to Go. But I simply wanted to improve my development experience, and because the plugin was open source at the time, I could just jump in, send PRs and I became one of the contributors to the open source plugin... And yeah, I basically started learning Java alongside with Go, because I was so much into Go.

**Carlisia Pinto:** So I see here that the IDE - you need to pay for it after your trial is up, right?

**Florin Pățan:** Yes, that's correct.

**Carlisia Pinto:** So if people do a plugin, do they also get paid? Do they have the ability to sell a plugin?

**Florin Pățan:** Yeah, so there is a plugin that's available for IntelliJ IDEA Ultimate. The open source plugin that I used to maintain, at some point JetBrains took over it, still developed it as an open source project, and then they realized that they are spending way too much time on it and they said "Okay, we need to focus more resources on it." That's how we started having a proper IDE from them.

You need to pay for it, but you can also get it for free if you are an open source developer, or if you are a student, there's a discount for their licenses for one year. And you have some other discounts as well; user groups, for example, can get licenses for free if they meet a certain requirement in terms of how often they happen and how many people they have attending. So there's a lot of giving back to the community as well, not just asking for money from developers... Which is a nice thing. You don't really see that in too many companies, I guess.

**Adam Stacoviak:** Yeah, interesting... I'm looking on the different options -- when you click on Buy, it actually gives you a couple different ways you can, and then one of the ways you can find that is the "For Open Source Projects", which is free. It says "Non-commercial open source projects can qualify for free licenses to GoLand and other JetBrains tools, provided they meet a simple set of criteria." Are you familiar with that, the restrictions or constraints around that?

**Florin Pățan:** I'm not very familiar, as it's my first week here, but I'm happy to follow up on that. Usually, if you just write to them, they are very quick to reply. So if you're listening to this, just feel free to write to the sales team and ask them, and they will be happy to talk with you.

**Adam Stacoviak:** \[00:12:25.03\] Nice. So why do you choose this editor over other options? We've talked about the tried and true -- I know that Brian and Erik, I'm pretty sure they're Vim candidates; Carlisia, you use VS Code. I use VS Code. I'm sure there's lots of others out there listening that use VS Code, because it's very supportive of Go... But why choose GoLand over other options? Why is it perfect for you?

**Florin Pățan:** For me personally, it's the inspection engine that allows you to detect in real time issues that you have with your code, from the IDE. For example, if you have a compiler error, you don't need to necessarily wait for the Go build tool to actually compile your code; the IDE will know that. Or it's the fact that it integrates with other tools or languages, such as for example if you work with a database like Postgres, you can type a SQL query, and if you use either the standard library database SQL, or a library like pgx or sqlx, or Mark Bates' pop, it will recognize that the string is SQL query, it will start offering you auto-completion for SQL, and it will even tell you things like "Oh, you don't have that column in the database. Do you want to add it?" Or it allows you to preview the queries that you have. So there's a lot of intelligence in there.

Also, for me what I've found that's really useful is the refactoring support. If you want to rename something, or if you want to move types around, you can do that, which is pretty useful. And in general, the autocompletion engine is really spot on into figuring out what you want to type, as soon as you type it.

**Adam Stacoviak:** Can you speak to any of this, Carlisia, to like an alternate, how it works with VS Code for you, with some of the things he was mentioning?

**Carlisia Pinto:** I haven't enabled anything, basically. I mean, I have the Go plugin, but I haven't souped it up. I know that it can autocomplete things, I just haven't set it up. Other stuff, like correcting - it will highlight things that will be caught, like code formatting and a bunch of things... It will tell you if it's an error, or if it's a warning, it will tell you all of that, and you have the option to make it more in your face, or just quietly notify you of these errors or warnings.

I haven't used GoLand, so I don't know how it compares, but it sounds like VS Code does most, if not all of it. I don't know.

**Florin Pățan:** \[00:15:57.05\] Yeah, so in terms of features, some of these features you will find in other editors, like VS Code or Atom or Vim or Emacs as well. I'm not really sure, because those are things that I haven't tried as editors, sorry. But whereas in those editors you, for example, need to install the plugin, and then you need to install additional tooling and so on, for this IDE you just need to install the IDE and you're ready to go. You don't have any other setup need, let's say; you just have to install Go, the IDE and you can start working on your project.

Also, every time we release an update, you get all the features and so on without having to further update the tools. That would be another difference between this approach and what other editors are doing.

**Adam Stacoviak:** Are you familiar with the Dep integration portion of this? It sounds like there's some integration with [Dep](https://github.com/golang/dep) (the open source project) there.

**Florin Pățan:** Yes, we've just released that a couple weeks ago, in the latest release, in 2018.1. What it allows you to do is it allows you to have a project that uses Dep, and it figures out whenever you change the imports or you add a dependency on a library that's not imported yet, or not in your vendor folder - it figures out that it needs to run Dep, and it works its magic in the background to involve the necessary commands so that you can just continue typing.

**Carlisia Pinto:** That is very cool.

**Adam Stacoviak:** Why is that important to Go developers, having that kind of integration?

**Florin Pățan:** If you come from other languages, let's say Ruby, Python, PHP - that kind of integration you will see already in other editors there. For us, it's something that's missing, especially because of the fact that you actually need all the code to be there in order to compile the project, right? You would want to take that out of the user task, and not have the user have to go in the command line and say "Okay, now I need to go in my definition file, let that figure out the version that I need, and then run dep ensure." You would need to do that manually. Or you would need to run dep ensure add, and then the dependency itself, and that's what the IDE does in the background now for you. You don't have to take your focus away from the code; you can still have the context in front of you.

**Carlisia Pinto:** I guess for new people coming into Go, it's one more thing to learn on top of everything that they have to learn, so having it easier to manage in an IDE - I can see that being a benefit. And also, for the same reason people use Git integration in their IDE's. I don't, because I learned to do it on the command line, and I always know what's going on there, as opposed to the IDE where I need to learn another thing...

**Adam Stacoviak:** \[00:19:44.12\] I had the same feeling until recently, honestly. I was such a purist to say "I have aliases, I know Git, I'm smart, I'm cool enough... I can use the terminal, I can use Git on the terminal, and take it from me, I dare you." That was my opinion. Then I started to use [VS Code](https://code.visualstudio.com/), and I was like "Huh! I could just commit this one file, right here, because it's click." So what I ended up doing is doing both. It's not a replacement, it's not an either/or, it's a both scenario for me. Florin, what about you? Is it a both or an and/or for you for Git integrations, say an IDE or a VS Code type thing? How do you work with that?

**Florin Pățan:** I'm mostly working from the command line. I haven't managed to switch fully to the IDE side. I do use the IDE for doing things like differences between files whenever there's a conflict, and so on; I find it so much more convenient to do.

**Adam Stacoviak:** Yeah, definitely.

**Florin Pățan:** There are some features now that I was reading about in the latest releases that I will definitely give them a more careful consideration, because you can now do things like partially commit a file... Let's say if you change a few things in a file and you don't want to commit the whole file, now you can just select the areas that you want and you can commit that, and then have the rest of the file not committed. That sounds pretty interesting if you have a workflow where you add let's say debugging functions or some debugging values, but you don't want to commit them whenever you need to commit.

**Carlisia Pinto:** That's so very interesting.

**Adam Stacoviak:** Yeah, I'm actually in a different context, but I might be working on let's say a SaaS document, and I'm writing styles for let's say Changelog.com or something... And I don't want to commit every new rule set that I've changed, I only wanna commit these five lines... I'm with you. The partial committing is really interesting to me, because I don't even know if I know or could remember the syntax to get to do that in the terminal.

**Florin Pățan:** Yeah, that's the problem for me as well. I wouldn't figure out the whole syntax at all. And there are other things as well, like task management for example, which allows you to work on various tickets and group them in work units, so that you can quickly switch between let's say one task and another with just the click of a button. You'll have all the changes done there.

**Carlisia Pinto:** I didn't even know you could do that. Are you talking about commits, or at tracking?

**Florin Pățan:** Neither of them. Let's say for example you're working on a certain task right now, and then someone else comes to you quickly and asks you to do something... You can basically tell the IDE "Okay, these are the changes that I'm doing; mark them as such, and let's start a new session to edit the code." This session will be, let's say, a debugging session, or something that you show to the person. You can basically have two different change sets at the same time, not interfering with each other, as of the latest version... Allowing you to basically work on two tasks in the same file, if you want.

**Carlisia Pinto:** And you're not branching anything; that's something that the IDE is doing.

**Florin Pățan:** Yes, pretty much.

**Carlisia Pinto:** That's pretty cool.

**Adam Stacoviak:** I'm looking at the UI for this, too... It looks like what happens is you can select certain lines and say "I wanna commit these lines", and then it looks like you get the option to check boxes in the diff, in the gutter of the diff. So you can say like "I want these changes", because you're looking at the diff to say "What should I commit?" At least it seems that way from what I'm seeing here. And you can say "I want to just commit these four lines here", and you check the box next to the diff that says "This is what's being added", the tracked version versus your version, and boom, you commit that and ship it up to a branch or to whatever you're doing, to master if you've got that, and life moves on.

**Florin Pățan:** \[00:24:18.27\] Yeah, pretty much that's the workflow that you have.

**Adam Stacoviak:** I think before asking the question "How do you choose which editor?" - that's a never-ending war that will always go on... But when you add the three letters "IDE" after something, it stands for much more than just simply saying "Hey, this is an editor. This is an integrated tool..." -- Integrated Development Environment as a matter of fact is what it means, but why do you think somebody chooses an IDE or not? Carlisia, in your case, you're using VS Code, and it works great for Go, but as you said, to your own admission, you haven't really souped it up, as you had said... So you didn't make it have any special powers to make developing Go programs or Go language-based projects any easier for yourself - autocompletion, or different stuff like that. Do you think an IDE is for a beginner, for a novice? Is it for an expert? Who uses an IDE and why are they choosing an IDE over anything else that isn't?

**Carlisia Pinto:** I don't even like this question. \[laughter\] An IDE is for anybody. I mean, I see people who are extremely experienced using IDE's, and obviously IDE's are for beginners; I think especially an IDE that lets you get off the ground running with not much thought (VS Code is one) is great for beginners, because you're not required to learn a bunch of things, and then you can soup it up as you go along, as you find a need for things.

And an IDE makes a lot of things easier, rather than -- I don't know, what's the alternative... Like, Notepad? \[laughs\]

**Adam Stacoviak:** Well, it's kind of a trick question. The reason why I say that is that because it's like, to me, you can be a purist and revolt... "I'm command line-only" or "I'm Vim-only. Take it from me!" If Brian was here, he'd be saying that, I'm sure, because I've heard him say it before, so I'm just emulating him in that fact, but... You've got somebody who just wants to be efficient, that's how I think of it. Over my years of working on projects, I started out as a purist, and over time -- I actually said this the other day... I started out as a purist, and now I'm a pragmatist; that just means that I'm doing it the long-form way because I know how to use Git in the command line, for example; or I know how to do this, because I know all the documentation, or this function, or whatever it might be. I know it by heart, so I'm gonna hand-type it; don't autocomplete anything for me, because I wanna make sure every character is the way I want it to be. So it's control.

Then you've got the other side, which is like "Well, I just wanna save time, because I've got family, or a life, or other things...", you just wanna be more efficient. So to me it seems like now my opinions towards IDE's have changed, that maybe they're for people who care about efficiency, rather than simply saying "You're a new person" or "You're an expert", or whatever.

**Carlisia Pinto:** Yeah. In my case in specific in regards to Git and how I use Git in the command line and not in my IDE is because I learned Git in the command line. So it's sort of like laziness, because for me to use it in the IDE I now have to learn how this particular IDE works, and who knows, maybe tomorrow I'm changing the IDE, because it's a thing that I do, I change it once in a while; now I have to learn the other one. And if I don't keep using the command line, I'll forget, and then all of a sudden I need to use it on the command line and I'm like "Oh, how do I do that again?"

\[00:28:15.22\] So for me, it's pragmatic to keep using it, because I already know it and I don't wanna forget. And I like your contrast between purist and pragmatic; I also moved from being a purist... And purist in the sense of having consistency, like if I'm using one IDE, I have to put all my effort into learning everything about this IDE, or whatever. Like Vim, for example. I went through a phase where I was trying to just use Vim... And I learned a ton, but that didn't work for me, because -- and let me just finish my observation about contrasting purist vs pragmatic... Because now I'm more pragmatic and I say "Why just use one? Use two, use three." You don't have to just use one tool that does the same thing.

My IDE always has a Vim integration, because Vim can be very, very productive; you can be a lot faster using Vim. So what happened to me when I was trying to be a purist and use just Vim - I would learn a bunch of commands that I used all the time, and then I'd have to open a new file, or I'd have to move a file, and I'm like "How do I do that again?", because I didn't do that very often.

I am moving my cursor around, I'm doing that all the time; okay, I memorize this command. But now I need to open a new file - oh... I mean, when you are on a brand new project you're doing that all the time, but when you're working with legacy, you're not doing that very often. So I just kept running into that wall; I couldn't do everything without bending my mind and trying to remember and looking things up all the time, so I was like "Nah..."

**Adam Stacoviak:** What about you, Florin? What do you feel about this, what she was saying?

**Florin Pățan:** Well, that's the thing, I feel that if it works for you, then yeah, that's the thing. You being productive is the most important thing at the end of the day... Because as you said earlier, you may have family, you may have other things that you want to care about... And honestly, if you ask any of your users, they won't care in which IDE or editor or command line you write; they just want their product to work, right? So for me, being efficient trumps everything in terms of "Oh no, my editor is cool!", "Oh no, my IDE is better." That's not something that you should aim for. You should aim to have an environment that allows you to be as productive as you can be, and it helps you when you need to. It doesn't stand in your way.

**Adam Stacoviak:** Yeah, I like this "productive as you can be." Let's pull in some of the commentary here inside of GoTime FM Slack... So if you're listening to this in the aftermath, meaning it's produced and you're listening to it on the podcast feed, you can listen live every week. We broadcast [live](https://changelog.com/live) on Thursdays, and you can have things like these mentioned on the show. [Corey Lanou](https://twitter.com/corylanou) says "Command line or bust!". I like that. He's definitely a fan of [Brian](https://twitter.com/bketelsen), he's in that vein of like "Take it from me, I dare you!"

And then you've got other comments... This one is from Fernando, he's saying "I basically use VS Code for projects" -- I like this idea here. "I use VS Code for projects, and any single-fire one-off editing, maybe something that's happening inside a terminal, I'll just pop it up in Vim." So it's like "I'm gonna use the tool that's available for me in the right context. Maybe I don't know everything about Vim and I can just use it for quick in and outs", and that makes sense because Vim is everywhere, pretty much... You know, using the tools that are available to you to make it efficient. But Go specifically, programming in Go - you may want to use something that's a bit more souped up (in Carlisia's terms) for you.

\[00:32:09.25\] There's some other mentions of Git... You've got "Tower is a tool for using Git", you've got -- something else we've just mentioned was "It's [Magit](https://github.com/magit/magit)!" That's kind of a weird name for a project. (Magit instead of Magic). I don't know if that's how you pronounce it, but that's what it says.

**Florin Pățan:** Oh yeah, it's the Emacs integration. I've heard people that use that and they then forget how to use the command line.

**Adam Stacoviak:** Well, basically saying the different tools could be souped up, as you said, Carlisia. You can do some stuff with VS Code, you could do some stuff with Vim, obviously. There's endless ways you can fine-tune Vim to your control. Everything could be souped up, but an IDE seems to be specifically souped up for a particular language and/or workflow.

**Florin Pățan:** Yeah, and if you think about it... I know this is something that not many people want to acknowledge, but as soon as you start customizing your Vim or Emacs or whatever setup you have, it becomes pretty much an IDE, because it's your integrated development environment, right? You configure it the way you want, you add any plugins, any workflows you want, and that's pretty much it.

With something like GoLand, you kind of take all that integration and you adapt that integration to your workflow. You say "Oh no, I don't want automatic commits", or whatever; you turn that off. Or you turn it on, if you want. And so on. So the integration is already there, you just need to tell it how to behave for you.

**Carlisia Pinto:** Can you export those settings? Can you have everything in a file? Because with Vim - it's true what you said, but at least you can have all of that configuration in one place and you can move it around machines... And that's sort of easy to do.

**Florin Pățan:** Oh yeah, you can definitely do that, and there's actually now a plugin that I think we're bundling by default - I'm not really sure how the default setup looks anymore, but you basically have a plugin which is meant for syncing your settings in the cloud. Basically, whatever you configure on one machine, from the key-mapping to what plugins you use and so on, whenever you (let's say) go home, you can have the same setup, synchronized via the cloud.

**Adam Stacoviak:** What's that plugin name? Do you know the name?

**Florin Pățan:** I think it's the IDE Sync Settings... I'll give it to you in a minute; I just don't have it in front of me now.

**Adam Stacoviak:** That's interesting... So that's something I do - back to the purist method - like most hardcore developers, I use dotfiles, and I do my best to commit any changes to my dotfiles back to my dotfiles repo... And I manually -- I don't know if there's an automatic way to do this, but I manually sync those things up. So I tend to go back and forth from an iMac Pro to a MacBook Pro when I'm mobile, and I do code on both... And in my case I use VS Code, and I have those settings (like you were talking about, Carlisia) synced to my dotfiles. So I actually have them remapped -- let me recall what tool I'm using for that; I'll think about that in a second, but... Essentially, I just sync my stuff through dotfiles, and it's a manual process, and there's times when they're out of sync, and I'm not sure if they are in sync, so having some sort of cloud integration sounds kind of nice, but it takes that purist method away; now it's pragmatist, it's like "Well, I guess I can use the cloud, right? The cloud never lies..."

**Florin Pățan:** Well, it's there for you to use, so why not use it? We program on the cloud most of the time these days, or at least we hear about the cloud, so you might just as well use it for your editor as well.

**Adam Stacoviak:** \[00:36:12.11\] We might as well, huh...

**Florin Pățan:** Yeah, it's called the IDE Settings Sync, and I think it's bundled in by default, because you can't uninstall it.

**Adam Stacoviak:** Yeah, I was hoping to find this real quick... I used this one thing from thoughtbot - if you've heard of thoughtbot's Laptop project on GitHub, it's great for setting up a new machine... But as part of Laptop, they've done some other things to make new dev environments easy to not only create, but also to pull in dotfiles and such, so... They had this pretty interesting project that I can't recall the name of it now. But I'll find it and I'll put it in the show notes. If you're listening, check the show notes.

**Break:** \[00:37:01.01\]

**Adam Stacoviak:** Let's move on, let's talk about some of the things you've done... From what I understand -- how long has this Slack community been in place, the [Gophers Slack](https://gophers.slack.com/)? A couple years now, five years?

**Florin Pățan:** I think roughly four years.

**Adam Stacoviak:** Four years...

**Carlisia Pinto:** No less than four years, for sure. Maybe five years.

**Adam Stacoviak:** Five years...

**Carlisia Pinto:** [Bill Kennedy](https://twitter.com/goinggodotnet) would know; I think he was the one who started it.

**Florin Pățan:** Oh yeah, he's the one that started the whole thing.

**Adam Stacoviak:** And Tim just dropped a little link in there; what I was thinking about was called [rcm](https://github.com/thoughtbot/rcm)... So going back to what I've just said -- I won't bring it back; it's rc file (dotfile) management. It's from thoughtbot, so check that project out. It'll be in the show notes.

So four years... Who started this? Was it one person, was it a ghost? Who did this, who made this place possible?

**Carlisia Pinto:** I think it was Bill Kennedy.

**Florin Pățan:** Oh yeah, it was Bill and a few others that started the whole thing, which grew immensely in the last couple of years, actually.

**Adam Stacoviak:** It's been a while since I looked, but wow... Okay... This is a lot more than several years ago when I joined - 25,823 as of this recording. That's how many people are in General, which probably means that's how many people are in the community in general, right? Because General is the primary channel, and I think you have to actually -- can you actually even leave General? You can't leave General...

**Florin Pățan:** No, unfortunately Slack doesn't allow you to do that.

**Adam Stacoviak:** But you can mute it.

**Carlisia Pinto:** Yeah.

**Florin Pățan:** You can mute it if you want.

**Carlisia Pinto:** But why would you want to do that? \[laughter\]

**Adam Stacoviak:** Well, maybe you're there for one of the channels rather than the -- I look at this kind of like Twitter; General is the fire hose...

**Carlisia Pinto:** \[00:40:11.01\] No, I'm joking... It's muted for me. It's too much.

**Adam Stacoviak:** Too hard to keep up with...

**Carlisia Pinto:** It's mission impossible.

**Adam Stacoviak:** Well, for one, it just would sound off all the time, unless you've got it muted. It's not muted because you're like "I don't wanna listen", it's just more like "Don't tell me every time something's happening, because I will literally never get work done." I would just sit here and watch general all day long, and you'd be like "Hey, what did you do today?" "Um, I was in Gopher Slack watching General..."

**Carlisia Pinto:** Yeah. But Florin does watch it frequently, right?

**Adam Stacoviak:** Very active.

**Carlisia Pinto:** Actually, that is one of the things that I wanted to ask - how you have seen the character of Gopher Slack changing over these years? Because you're super active.

**Florin Pățan:** Well, that's the thing - I don't think it changed that much, because if you look at the community, it's probably one of the best communities out there; I just love it. All the people here are friendly, they help you whenever you have a problem or you're trying to work through something, either if you're a complete beginner - not necessarily with Go, but with programming - or a Go newbie, or even someone that's more experienced, they can come in, either ask in [General](https://gophers.slack.com/messages/General), or in [Golang Newbies](https://gophers.slack.com/messages/golang-newbies), or in any of the dedicated channels we have here, and people will be there, guiding you... Or if they don't know the answer, they will at least point you to (let's say) the mailing list, or the Go tracker, or who knows what other resource is available that explains how to solve your particular need. That's something that's really cool.

I'm happy that I've found this community when I did, and even though it looks a bit scary when you say "Oh, there's like 26k people in General. I'm not gonna ask a question, because who knows who's watching, and I'm not good enough to answer..." - nobody should feel like that, because everybody's here to help each other and to learn from each other, and that's great.

**Adam Stacoviak:** Do you guys feel like Slack is the -- not so much the epicenter, but at least one of maybe several epicenters? You've got obviously face-to-face meetups, you've got conferences, you've got different things happening, but do you feel like Gopher Slack is the place to be if you are a Go programmer?

**Florin Pățan:** I would say yes.

**Adam Stacoviak:** Do you feel like if you're not in it, you're missing out?

**Florin Pățan:** It depends, but go ahead, Carlisia.

**Carlisia Pinto:** \[laughs\] I was dying to jump in... I wouldn't say that, especially because people have different modes of working. That is sort of like saying "If you're not on Twitter, you're not a real developer." because I think that's how the question was first phrased.

**Adam Stacoviak:** Well, not so much that you're not a real developer, but just like, if they're missing out... What I'm trying to get at is "Is this the place to be? Should you be here?"

**Carlisia Pinto:** Definitely missing out, yes. Yes. Because a lot of conversation happens, and a lot of connections happen on Gopher Slack, and if you're not participating, you're missing out, yeah. But that doesn't mean you're not getting connections and getting benefits from other venues or channels. But definitely missing out. Just the volume that goes through the Gopher Slack is crazy. In the [Jobs channel](https://gophers.slack.com/messages/golang-jobs)... And there's so many channels. There's something for everybody.

**Florin Pățan:** And there's like a [Review channel](https://gophers.slack.com/messages/reviews). If you want to have your code reviewed by people, you can come here and ask for a review. And people will do it; it doesn't really matter how big the project is, or anything like that.

**Adam Stacoviak:** \[00:44:16.24\] While we were trying to invite people, I'm seeing Bill Kennedy in Slack mention -- he says "Not everyone can participate here because of our code of conduct rules. The ML is very powerful." I didn't know there was machine learning behind the scenes on this, but can somebody clue me into what he's talking about here?

**Florin Pățan:** He's referring to the code of conduct that we have and the Golang mailing list.

**Adam Stacoviak:** Yeah. When you say ML, I'm thinking Machine Learning, okay? Just so you know.

**Florin Pățan:** No, we refer to it as the golang-nuts and golang-dev mailing lists.

**Adam Stacoviak:** Gotcha, okay. I was like "Dang, we've got machine learning behind the code of conduct and getting into this Gopher Slack? That's a lot..." Anyways, my bad. Acronym replaced with Mailing List, moving on. Alright, so what does this mean? Who can't participate then? What is it filtering out, particular people, or particular types of people, or just things you shouldn't do?

**Carlisia Pinto:** Some people don't participate because they don't agree with the code of conduct. Or they infringe on the code of conduct; some people do that not knowing, and there are a bunch of admins who are active participants on Slack... There is a procedure to handle that. The first step is to let the person know "Hey, you're saying this, and we have a code of conduct, and that goes against the code of conduct."

Most people are like "Oh, I'm so sorry, I did not know", and we ask them to edit or delete whatever was the infringement, and they're happy to do it, and they're happy to be informed, so they don't continue to infringe.

And a very rare minority will revel against it, it will not comply, and they have to be removed from the space. And if they don't agree to abide, they can't rejoin, because the same thing will keep happening.

**Adam Stacoviak:** The suspensions happen in perpetuity, or is it temporary suspensions? How do these things get decided and how much work is it for the individuals involved?

**Florin Pățan:** It depends on a case-by-case basis. Some of them are just like, you know, maybe we'll say "Hey you need to call off, take a few days off, come back later." Or some of them are more permanent, because they really go well beyond the code of conduct, or common sense, because that's what it really is, at the end of the day. We try to be as inclusive as possible here, and welcome everyone to join us and learn, but sometimes people infringe on it.

**Carlisia Pinto:** Yeah, and I'm also an admin, so I participate in this conversation, and that's how I can pipe in... We're all volunteers, and we don't have a tool to suspend people and keep track of that. What we can say is "We are letting you know", and people usually comply. In some cases, say we're letting you know and the person still doesn't calm down, and we say "Hey, we're giving you a warning, we're gonna let it go this time..." It really depends on the situation. If the infraction reoccurs -- or maybe sometimes we say "If it happens again, we're going to have to kick you out." So it's sort of like...

**Adam Stacoviak:** \[00:48:05.05\] A last-ditch effort, basically. You're giving them several chances to correct.

**Carlisia Pinto:** Yeah. The middle of the road there is that we warn and that we're gonna give them another chance. Otherwise, we don't have a way to just suspend for 30 days, and then check who needs to be brought back in... You're gonna have to be kicked out.

**Adam Stacoviak:** So by saying that -- so there's no list of who is banned or has been removed, for whatever reason... There's no tracking of these things, so it's sort of like a personal scenario where you have a small collective - I'm just assuming this - of people who are admins, and you've got memory, and you're using your memory to recall people's infringements; you're not keeping lists or tabs on people, basically.

**Carlisia Pinto:** No, exactly. And also it wouldn't make sense, because we don't have a requirement that people use their real name, so they can join with a different username and I think it'd be a waste of time. If people really want to speak whatever way they want to speak, they have a recourse - they can just join in with a different account. So we just really need to be on top of it all the time.

**Adam Stacoviak:** Switching gears a little bit -- go ahead Florin, if you wanna mention something.

**Florin Pățan:** Sorry... Yeah, so I was actually reading the chat here, and Bill says that we have the message history, which is true. Pretty much, we have the history from the beginning of this Slack, so roughly 4-5 years of messages, and we have a private room where all the admins are chatting together, and whenever an incident comes up, we talk together there.

But also, for example if someone notices something whenever we don't look, you can either ping us directly or you have a channel called [Admin-Help](https://gophers.slack.com/messages/admin-help), and that's how we have a history of what happened... Because we are humans as well, and as Carlisia said, volunteers.

**Carlisia Pinto:** Yeah, and all the admins - we have an understanding that whenever we approach people... First of all, we do it in private, and we do it with the intention of -- how do I wanna say this...? Help me, Florin. We think start out thinking that the person didn't know about the code of conduct, or needs a little bit of guidance... We never try to shame or say "Oh, you did that wrong! That was so wrong!" - it's not what it's about. It's really about keeping the space safe for everybody, and comfortable, and kid-friendly, although that's debatable, what friendly should be, but...

**Adam Stacoviak:** Yeah, it's tough.

**Florin Pățan:** Yeah, pretty much that's the hardest part, trying to make sure that we give as much opportunity to people to express themselves, but at the same time not making it so in an uncomfortable manner for others.

We are fortunate enough that these kinds of things happen very rarely, like probably once a month or less, where we actually need to take action against anything here.

**Adam Stacoviak:** Maybe since earlier on in this conversation we were talking about how the numbers of people involved in Gopher Slack have grown over the years, kind of keying into evolution, maybe we could talk about the other point here, which is how the community compares to maybe other languages; maybe that speaks to maturity, in terms of the community and the different toolsets around it. What do you all feel around what helps this community be a good community? Not so much as Gopher Slack, but the conferences... How do you feel the Go community compares to other languages? Good and bad.

**Florin Pățan:** \[00:52:14.27\] At least from what I can see in our community, pretty much everything starts from the top. The people that started the language behaved in a certain way; when the language started to grow, the type of people that got into the language were of a certain manner, of a certain behavior, and I think that's something that persisted throughout its growth phase, until now.

I generally feel that there's not much difference between what we have today in the Go community and what we had maybe 3-4 years ago, just because whenever people come (let's say) in contact with the mailing list or with the Gopher Slack, they see that kind of behavior... And at some point, people will just try to emulate what they see, and if all this is someone being friendly to them, someone being helpful, giving them the respect they deserve, they will do the same for the next person that comes in and joins the community.

Other languages - I guess at some point they grow a lot bigger than what we currently have in Go. I still think we are maybe let's say a small to medium community. We are not as big as (let's say) the C++ or C community, or maybe even other scripting languages. There you have a lot more people; I don't know if they grew in the same way as the Go community grew, or it's maybe just because Go happened so recently compared to the others, and we are just able to teach Gophers, as part of becoming Go programmers, not only to be programmers, but also be nice to each other.

**Adam Stacoviak:** Yeah, good community members, good citizens.

**Carlisia Pinto:** Yeah.

**Adam Stacoviak:** That makes sense. When I look at the Go community, what I like most about it -- or at least (let's say) an outsider's perspective, because I still feel like an outsider, even though I've kind of been involved, I go to every GopherCon since the second one, I don't miss a GopherCon, I'm part of this cast here for this podcast and stuff... But I still feel like an outsider. But what I see is I just tend to see people who are encouraging, welcoming, and just general care for others. And I'm not saying I don't see that elsewhere; I'm more involved in this community than in others, so I can't say it's a comparison to say "This is how it is here, and it's not that way there..." But that's what I see as good attributes for this community - you just seem like you care about the future of the community, which has deep implications to how you act int he community. Do you agree?

**Florin Pățan:** Yes, pretty much.

**Carlisia Pinto:** I completely agree. And one thing to say too is when Go got started and when the community started growing, it was at a point where other communities had gone through a lot of experiences about dealing with harassment, dealing with infractions to the code of conduct, or not even having a code of conduct and dealing with the consequences of that... So when the Go community started developing, they had all of that experience to inform them. That was a big difference - Go is a newer community, so it's really almost unfair to compare, because we have the benefit of having that experience from other communities, right?

**Adam Stacoviak:** \[00:56:20.23\] Yeah, you've had a chance to kind of restart, so to speak, even though you're not re-anything. You're just starting somewhat fresh, because Go is about as old as the Changelog is; we started around the same time, 2009-ish.

**Carlisia Pinto:** Yeah, so you're starting out with the benefit of having information that other communities started out not having, because that just hadn't happened publicly enough to really come into consciousness. But the good thing about the Go community that we can also not discredit is the willingness to embrace that experience and say "We are going to avoid that at all costs. We're going to do everything we can to keep this community safe and inclusive, for now and for the future." That really deserves some big credit. And like Florin was saying, it comes from the top. That really helps, too.

**Adam Stacoviak:** There's one note here to talk about which, Florin, it sounds like you've got some thoughts that you've put into this, which is "What I wish the Go community would do going in the future." What does that mean to you? It's bold too, so I'm thinking maybe it's even more important to you.

**Florin Pățan:** Well, yeah, it's bold as in probably we should talk about it, because we are here now, and we grew a lot in the past years as a community as a whole, and I'm sure we just see a small portion of the community, we don't see necessarily all that's happening in the community outside of (let's say) Gopher Slack, or the mailing list. Not many people may join these places, or not many people may even speak English to be able to join this community... And I would really love to see more people coming forward, and helping them come forward and say "Hey, I'm a Go developer, I'm trying to learn Go, and my native language is maybe (let's say) Romanian", or some other language, and be able to help them out with documentation in their language, or be able to encourage them to speak at conferences, helping them move forward as a whole community.

I was talking to [Dave Cheney](https://twitter.com/davecheney) about this, and he mentioned that the Go community in Asia is so big, and we don't know so much about it because we don't really know how to interact well with that community. I would love to see more openness to that. I would love to benefit from their experience, because we have a lot of things that we can learn from there. And I would love to not have people write the HTTP routers anymore, because that's getting old. \[laughter\]

**Adam Stacoviak:** And how are we missing out on China? What's the barrier there? Language only, or is it the culture?

**Florin Pățan:** That's a good question, and that's something that would be interesting to solve, because on one hand, yes, probably there is some language barrier if you look at, let's say, all the resources that we have - the majority of time they are in English, right?

**Adam Stacoviak:** \[01:00:12.03\] Yeah. And books that have to be translated take time; documentation even. There's a translation process that things tend to happen in English -- from what I understand, this is actually regurgitating some of the podcasts I did before while at Node Interactive - the language Node; of I guess it's not even a language, it's more like something on top of... Anyways, Node, the platform. I was at that conference and I was talking to Shiya Luo - she was from China, from Shanghai, and she was talking about the Great Firewall of China, and essentially it's in the case of Javascript and Node, but I think it applied probably for the Go community as well; the barrier was a language difference in the fact that learning it and kind of keeping up - there was a latency because of the translation process and the ability to communicate back... And also, the literal digital firewall that may or may not be in place between China and the rest of the internet.

**Florin Pățan:** Yes, and I think that's one of the nice things that the Go team and Google managed to do recently, probably a couple months ago - they managed to take the golang.org and make it [accessible in China](https://blog.golang.org/hello-china). I know someone that I've met on Gopher Slack is from Iran, and the same thing - he couldn't access basic things like GoDoc.org, and now he can. And that's pretty much great, because now we have more people that can learn Go, and we can learn from them as well.

So yeah, that's the thing... Those are some of the steps that we need to take. Translating books I think is another, for sure. Being able to have more diversity in conferences, in meet-ups, in resources in general. Or even if you think about (let's say) online courses that we have - I'd be interested to know how many courses are available that are not in English.

**Carlisia Pinto:** Yeah, I haven't seen any investigation that has been done to explore the question that you asked, Adam, which was "Where are the barriers?" I think guessing that language is a big barrier would be an easy answer; I would guess that, too. We can actually verify this, but I would say the majority of people in China don't speak English, and you can extrapolate that the majority of programmers don't speak English by default, right? Statistically speaking...

**Adam Stacoviak:** Well, that's an assumption, I think. I made that same assumption, and I linked it up in the Slack, but also in the show notes... That was my assumption going into this conversation, which actually took place December 2016, so this is [a two-year-old conversation](https://changelog.com/spotlight/10) roughly, that I had with Shiya Lou... And that was my assumption, that it was just simply a language barrier. In fact, many of the programmers or people pursuing programming careers and/or just as a hobby in China -- a lot of China is bilingual, or at least pursues bilingualism, but specifically programmers are forced in a lot of ways to not only have Chinese as their first language, but then English as their second, because most of what happens in education and/or innovation happens in programming in English... That's the limitation there.

**Carlisia Pinto:** \[01:04:05.17\] Yeah, we can talk in terms of many, and I would never disagree with that... But we have to look very closely and explore what really is happening. We can assume anything... Because you can say, "Well, there are many", and a lot of people who are working with innovation are being forced to take English, but is that in a private setting, or is that being taught in school? Is it free? ...that's what I'm saying, because if it's not free and accessible to everyone, then people are being excluded, and I think some of those people might be developers that could otherwise be learning, or maybe having an easier time to learn the language and how to do things properly, in other words how to take advantage fully of what the language has to offer, if that wasn't something that they were struggling with, or they had to pay a fortune for.

So in that sense, unless it's being provided for free to all the potential programmer population... But in any case, that is an assumption, right? I have zero knowledge about China in that regard. So if that was the case, just take for example the [survey](https://blog.golang.org/survey2017-results) that the Go language team puts out every year - that survey is in English. So anybody who is using Go or is interested in using Go and doesn't know enough English to read that survey, won't be accounted for, right? Their experiences, their opinions won't be accounted for, because the result of that survey goes right back to the Go language team for them to make decisions on how to develop the language itself and everything around the language.

**Adam Stacoviak:** I was trying to scan really quick to see if there was even an ask in the survey of like "What is your primary language?", not programming language, but speaking language. Because it happens that [Jerod](https://twitter.com/jerodsanto) and I on the Changelog often -- and in a couple cases it happened accidentally where we didn't even consider it until afterwards, because we're just idiots sometimes... But we've had conversations with people that don't speak English first-hand, and we didn't realize that we actually had a full conversation, and at the end they're like "Huh, I'm tired." And we're like, "Why? We're willing to go, we're still excited! We've just had a great conversation!" and they're like "Well, I just had to think really hard, because my brain thinks in one language and I'm speaking in another..."

How fatiguing it is on somebody to real-time, just-in-time translate -- not to drop that pun in there, but that's pretty good, it's like "Just in time!" You're sort of like real-time translating your thoughts from one language to another in speaking, and how fatiguing it is... But I think it would be good to add that to the future surveys, because it would start to inform the community.

We examined this a few podcasts back on this show, where we were like "What's the impact of this survey? What do we learn from it?" and that's one thing that at least I am not seeing if somebody is \[unintelligible 01:07:29.22\] so that could at least give you some indicators, with 25% of the survey participants being in the United States of America; top 5 is US, Germany, UK, Canada, France and Russia, so... Was that six...? That was six, my bad; I can't count. That was a zero-based index.

Let's move on a little bit... Anything to talk about more about this, before we go into maybe projects and news, or \#FreeSoftwareFriday? We've got three minutes and twenty-seven seconds...

**Florin Pățan:** \[01:08:07.02\] Yeah, I think one last thing that we can add here...

**Adam Stacoviak:** Please do.

**Florin Pățan:** It's not just the language barrier which may be, but as Carlisia touched a bit at some point, it's also being able to have those resources maybe at a lower cost or for free, because that's also a big part of being able to learn something. Sometimes for many people five dollars can be nothing, but for some of them it can be maybe half a week or a week's worth of food. So there's also this component as well, and many others. It would be interesting if the community starts thinking about those kinds of problems as well.

**Adam Stacoviak:** I mean, not to elongate it a little further, but I'll say this as a response to that - I think it's important if you're gonna say that to then maybe attach at least your own opinion on who might be responsible for making that happen. So is it the community's problem, is it Google's problem? Because they primarily operate the language and/or a big artifact of the community because translations is not new to the web; it's a difficult thing to program around, it's a difficult thing for CMS's to deliver, and it's an even more difficult thing to do as you get one more thing to do as a maintainer and/or author and/or educator, to now not only communicate in your primary language, but then have the responsibility to translate it... So who's responsibility do you think this falls upon? Us, the community, or who? And who pays for it?

**Florin Pățan:** Ideally, I think it would be us, the community, because up to a certain point there's only so much Google can do. They should help us for sure, if possible, but we should start seeing some of this in the community just because it would show an increase in the level of maturity for the community.

**Carlisia Pinto:** Yeah, I guess you have to think what is the desired outcome of the language? What is the purpose -- for example, ask what does the Go language team have in mind for the language? What do they want to accomplish and how do they want to accomplish that? For me, an answer to that question - and to any question that applies to the community in general... It doesn't have to be one or the other, and I think it should be both - it should be a concerted effort between the language team and the community, and companies...

For me, for example, I see that the language team should sort of like have a direction and could help kick things off and enable local communities to pick things up and run with the ball, so to speak. But just one relying on the other, I don't see how that can work.

**Adam Stacoviak:** I'll say this then to the listening audience and those who listen after this live show... If you're listening to this and you've got better answers than we do, reach out. If you know somebody who's actively working to translate and/or expand beyond the English-only language for documentation or translating into your localized language, if you've got somebody that's been doing this kind of work and they've got far more insight than we do, or maybe even better opinions - not that ours are bad. Reach out, please. That'd be good. I think that portion there could use some additional attention, because that's the hard part, because "Who does the work?" is always the hardest question to answer. Who does the work?

\[01:12:06.27\] Alright, \#FreeSoftwareFriday... I put three more minutes back on the clock. So we've got three minutes, we've got \#FreeSoftwareFriday, and we've got maybe some Go news. So let's combine them. Carlisia, you go first - any news, any projects?

**Carlisia Pinto:** I didn't get anything.

**Adam Stacoviak:** No? Any news? What kind of news...? No news, alright. Florin, any news?

**Florin Pățan:** Unfortunately not for me.

**Adam Stacoviak:** No news?! Alright, you've gotta have a project at least. Give me a project.

**Florin Pățan:** Well, a project for \#FreeSoftwareFriday I can definitely do...

**Adam Stacoviak:** Okay. What's impacted you?

**Florin Pățan:** Well, it would be [Delve](https://github.com/derekparker/delve), the Go debugger. That's maintained mostly by Derek and Allesandro, and they are doing a fantastic job to get that working. It's available in all editors that we have today, and the amount of work and helpfulness from that team is just great. Thank you for all the efforts behind it.

**Adam Stacoviak:** Awesome. Well, I have no Go news, but I do have a project that I just came upon today... And I'm actually cheating, because we did a live show - the first live show we did for JS Party today, just before GoTime... The first one we've done in a while, because we're bringing it back. But I'm gonna borrow what Christopher Hiller mentioned, which was [going Dark on GitHub](https://github.com/StylishThemes/GitHub-Dark). I think this is super-interesting, because I love dark interfaces, specifically around just interfaces I hang out in too often, I just prefer -- like, if YouTube gives me a dark option, I'm using the dark option; if Overcast gives me a dark option, I'm using it. I wish Slack gave me a dark option, because I'd use that.

And this is pretty interesting, because you can check out the repo, follow the link at the top where it just says userstyles.org/ or whatever for the styles, unleash to a page and if you're using Google Chrome or whatever you're using, it will probably tell you to install something called "stylish", and that allows you to ship some customized settings. I'm sure that most people listening to this podcast hang out on GitHub way too often, or maybe just often enough...

And your eyes may appreciate this mention, because GitHub Dark is super cool; I've already switched, I'm not going back, and in fact, it's making you really want Changelog.com to be dark, too. We've already got a dark version of it on /podcast and /community, however, we don't have an actual mode for dark... And that bums me out, so I'm gonna work on putting a Trello card into the system, and getting that worked into our agile workflows -- our agile-ish workflows, because we're never perfectly agile. But anyways, how do you guys feel about going dark on GitHub? What do you think about that?

**Carlisia Pinto:** This is so funny, because I could second every word you said. Oh my gosh, I've just installed it...! Everything is dark. I do everything dark, just like you said - Overcast... Anything that can be dark, will be dark.

**Florin Pățan:** Yeah, pretty much. I have it already installed actually; I was like "Huh, I know that one..."

**Adam Stacoviak:** So you linked up a [dark Slack](https://chrome.google.com/webstore/detail/dark-theme-for-slack/begdfkhhegoognioipgofimponkeiiah), too...

**Florin Pățan:** Oh yes, but it's only for Chrome. When we do the live shows, Florin -- like I said, you're a long-time listener, first-time caller, but you're always in there, usually the first with links... Not to discount anybody else's efforts, but you're always so fast; I don't know how you do it. But a dark theme for Slack, I've gotta -- but this is gonna mess with my theme, though. So I like our Slack because I have a Changelog-branded, specific sidebar theme; does it jack with the sidebar themes?

**Florin Pățan:** No, you can still keep your sidebar if you want.

**Adam Stacoviak:** \[01:16:04.27\] Okay. I don't wanna mess my sidebar up; I like my sidebar. Well, cool, that's it for this show. Thanks so much for tuning in, for one, thank you for your attention and listening to this show, to the regulars in Slack - thank you; to the future regulars listening right now - thank you. Please join us, go to -- where do they go to join Gopher Slack? Where is the best place to go?

**Florin Pățan:** It's a bit of a longer one. It's [invite.slack.golangbridge.org](https://invite.slack.golangbridge.org).

**Adam Stacoviak:** Is there a way we can find a shorter version for that?

**Florin Pățan:** We can work on it.

**Adam Stacoviak:** Yeah, we need a shorter one. We need to actually talk to the Go folks and get something from them, like golang.org/slack, or /community. We need something that's much shorter, and like community-wide, not just GoBridge-wide; something that's off their URL, to make it much easier. Because I know that I wanna invite people, and I always like -- I even asked you the other day, Carlisia, to get Tim in; I'm like "How do I get somebody into this Slack? I don't even know."

**Carlisia Pinto:** So it's in the General channel topic box... But just a comment on what you were thinking - the Go language team, they don't want to keep track of those things, because if it's on their website or something, then it's sort of implied that they are endorsing it, and they are very careful about giving the impression that they are endorsing something in particular, especially if they don't have the bandwidth to keep track of what's going on, so... That might not happen is basically what I'm telling you.

**Adam Stacoviak:** Well, okay, so here's a better thing - golang.org/help, the third link down is Gopher Slack. But that [links](https://blog.gopheracademy.com/gophers-slack-community/) to a blog post written by Bill Kennedy in 2014, which doesn't have a clear link either. I'm just saying, find a better way to get people in.

**Carlisia Pinto:** Oh yeah, that should be deleted.

**Adam Stacoviak:** So if we can go back to update the link to that Gopher Slack, if that's editable, then just send people to Golang.org/help and say "Look for Gopher Slack" and that'll link to the invite, boom.

**Carlisia Pinto:** Oh yeah, it should definitely be there. I see what you're saying.

**Florin Pățan:** You can send a PR now and fix that.

**Adam Stacoviak:** I'm gonna do it. I'm gonna fix this. Unless you beat me to it. Is somebody gonna beat me to it...? I'm gonna fix it, either while I'm talking, or after the show, one of the two.

**Florin Pățan:** Yeah, the only problem is that we'll need to wait for the next Go deployment for that to work, so...

**Carlisia Pinto:** Yeah... \[laughs\]

**Adam Stacoviak:** Real problems. Alright, well that is officially the end of the show. Thank you so much again for tuning in. We will see you next week.
