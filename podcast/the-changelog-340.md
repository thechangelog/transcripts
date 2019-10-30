**Adam Stacoviak:** Lucas, late in March we logged your blog post, "How I'm still not using GUIs in 2019", and in that post you said "GUIs are bloatware. Terminal rules. This is a guide to the terminal." What I found interesting about you, not only about this blog post, of course, that kind of gives this full summary of how to use the terminals in IDE, but the fact that you have the write command, the :w command tattooed on the back of your ankle... That's super-cool.

**Lucas Fernandes da Costa:** Yeah. I've done that the last time I've been to San Francisco. It's actually my first tattoo; I have a bunch too, but that one is the one I like the most. It was the first time I was traveling to San Francisco, so I think it was the proper place; at the time, I'd been using Vim for like two years, three years maybe, and I was just really passionate. I couldn't stop talking about it, and I really was finding out new things... Vim is really interesting, because the more I learn, the more I feel like I don't know anything; it's one of those things. It's quite interesting. It's such an amazing piece of software, it's so many things... It's quite nice, I quite like it.

**Adam Stacoviak:** The interesting thing about this tattoo -- it seems like, at least based on the picture, that it's on the back of your heel. Is that correct?

**Lucas Fernandes da Costa:** Yes, exactly.

**Adam Stacoviak:** So that means that as you're walking away, is it like a sign to the person behind you reading this, or is it just by happenstance that you put it on the back of your heel?

**Lucas Fernandes da Costa:** Actually, I put it there because I think it was the less painful place, and it was also visible enough...

**Jerod Santo:** Is it the ankle or the heel?

**Lucas Fernandes da Costa:** My ankle, yeah.

**Jerod Santo:** The ankle, okay.

**Lucas Fernandes da Costa:** But actually, no one ever talked to me about it before I ever said anything. I remember I was walking around at -- I think it was FluentConf, and I was expecting someone to say something about the tattoo, but actually I think no one noticed... Which was quite disappointing. But it's fine, I guess.

**Jerod Santo:** \[00:03:51.28\] Lucas, there's a guy that lives here in Omaha... He has a big mustache; one of those Monopoly man mustache, you could twirl it; and I see him \[unintelligible 00:04:04.01\] and on the side of it he's like a fixer guy, or a painter, I can't recall exactly what his business is... But on the side of his business truck, or his minivan or whatever it is, it's got the mustache. And he's worked it into his name and his brand... So I was talking about the mustache - he's had it his whole life now, he's like in his fifties... There's just no way he could get rid of that mustache; he's stuck with it. It's who he is... And I'm just curious if you feel like you can't quit Vim now, you're stuck with it for life... Because you're the guy with :w on your ankle.

**Lucas Fernandes da Costa:** Yeah, I'm definitely stuck with that for life. I've thought about trying Emacs, I gotta say that, but... It's just not who I am--

**Jerod Santo:** It's too late. It's too late for you.

**Lucas Fernandes da Costa:** It's too late, yeah.

**Jerod Santo:** \[laughs\] What began your love story with this text editor? So many people love Vim. We have a \#vimparty channel in our Slack team, which was a play on JS Party; it was like "We should have a Vim Party", because so many people on the JS Party podcast are Vim users... And people tend to love or hate it; there's learning curves, some people never get over that learning curve... There's jokes about "Vim, why can't I quit you?" We've made plenty of those jokes over the years on Twitter...

**Adam Stacoviak:** My favorite was the Singularity conversation. I think you said there's people that are trying to quit Vim as we speak, I believe there is almost rationally you said that.

**Jerod Santo:** Right. Yeah, so I'm always joking about that... It's a joke that's well used, maybe overused at this point, but I'm always one to beat a dead horse. That being said, why did you fall in love with Vim? This is obviously core to your idea of doing everything in the terminal, not using GUIs; Vim is a core piece of that... Neovim, specifically. So tell us how you fell in love with it and what you like about it so much that you're like "Hey, I'm gonna get this tattooed on my ankle.

**Lucas Fernandes da Costa:** It's been a few years now... I remember when I started, to be honest, I'd seen a friend of mine using it, and it looked so cool, and he was super-fast with it. So at the beginning I was more impressed than I actually -- it was not as if I had made any formal decision. I was just impressed by how things were happening.

I remember we were sitting next to each other in college. He was using Vim, and I was like, "Hey, how do you do things so fast?" And then he showed me his dotfiles, and the explained how the whole Vim code works... So then I just started trying it out in my free time, because at the time I was doing an internship. If I had used Vim during work, and stuff, I think I wouldn't have been productive enough, but after a month -- I just persisted; I just kept trying...

In the beginning, I've gotta say, it was very frustrating. But after a month, I was just so much faster, and my workflow got so much more comfortable that I just couldn't quit. And now that I started using CLI tools more often, all I know how to do, all my workflow revolves around CLI tools. I tried some IDEs, but it's just not the same thing, even with Vim mode. It's just not the same thing.

**Adam Stacoviak:** Where were you coming from in terms of a GUI or an IDE?

**Lucas Fernandes da Costa:** When I started out in college, we were using Eclipse. That was alright at the time, but one of the things I struggled the most - and I even talk about it in the post - is that, especially for people that are starting out, I think it's hard to figure out what's the limit of the IDE, where does the IDE stop and where does the language toolchain start.

\[00:08:14.28\] I think it gets a bit confusing for people, especially people that are new, what are the things that are related to their development environment and what are the things related to the toolchain they're using. I think that made things harder to understand.

Once I moved to Vim and I just started using my terminal all the time, I feel like I know what my machine is doing; it's not as if I was handing that to an IDE. I'm not just pressing buttons and expecting things to happen, and not really knowing what's going on in the background. I feel like I'm in full control, and if anything goes wrong, I know what the CLI tool or what the terminal is telling me... Because you get used to the terminology, you get used to how things fail, instead of just cryptic error messages, or just pop-ups or errors being hidden, or anything like that.

**Jerod Santo:** When you think about "Am I going to use the terminal -- if I'm gonna base my workflow around the keyboard or around a mouse", the arguments around the keyboard and a terminal versus GUIs, which usually require a mouse or another input device beyond just the keyboard, the factors are... Somewhat context switching, but I think it's speed of moving your hand off or on the keyboard, to the mouse, which is slower once you're there, but then it's fast, but that transition back and forth slows you down... And then also the idea of customizability or malleability... I think a lot of the modern text editors are catching up in the malleability category, if you look at just the way you can trick out VS Code or Sublime Text to the hilt, at this point... And so many things are built-in -- or not built-in, but available to be added, removed and customized.

But if you had to think about what was the most important thing -- you seem to be focusing a little bit on the speed, because you say you feel like you're a little bit closer to the metal, so to speak... Maybe there's an analogy with driving a car, an enthusiast likes a manual transmission; regular people like automatic transmission. Is the speed really key for you?

**Lucas Fernandes da Costa:** I don't think actually the speed is the key for me. I think, of course, it's more comfortable to use a keyboard all the time... But actually most of the time I don't think we're writing code; I think most of the time we're just reading, we're thinking... And what I really feel that makes a huge difference for me is that I don't feel like there's anything in my way when I'm transposing thoughts to code. It's so much faster and it's so automatic now. Also, I can switch between environments often; when I pair with co-workers, I can just open a Terminal window, spin a Vim, and I'm fine without plugins, without anything... So I'm good to go everywhere, I don't need to install anything. Also, even if I need to, configurations are a lot more portable.

I think there are many more advantages than just being fast. Being fast is cool. When I'm doing a talk and I'm doing live coding, if I open Vim, I know that the subject of all the questions are gonna be about Vim, or at least 50% of them, and they are 50% about live coding. So it's fun, but I don't think it's the main reason why I use Vim. It's probably what got me started, but not what keeps me going in it.

**Adam Stacoviak:** \[00:11:57.26\] Yeah, it seems like the limitations of - as you've said in your post, too - the limitations of a GUI being bloatware for one, or just containing features that you don't really need... You in particular, or maybe even all users at large... For the most part, this is getting past that and sort of - back to the analogy of having access to bare metal - makes a lot of sense.

One thing you'd mentioned was how you persisted through learning Vim, which for me that's been my hang-up, personally. I still use VS Code; I'm a previous Sublime Text user, I know many of the Vim commands, and I'm an occasional coder, not an everyday coder, so I don't feel like I need to learn this today... And there's a part of me that has regret, like "Man, I really wish I would have persisted", like you did, on a side project, or found some sort of way through, because somehow, someway along the way... As you'd said, you'd fallen in love with the Vim way of things, versus a GUI way, and you couldn't go back. Can you talk about that persistence, and maybe some of the things you did to persist? What were the things that made you get over these learning hurdles of Vim?

**Lucas Fernandes da Costa:** I think the learning curve is indeed steep, but when you use a tool for a while, like you use an IDE or whatever your text editor is, I think the more you use it -- the faster you are on smaller tasks, it starts to matter more. So I think the learning curve is indeed worth it. Because if you use an IDE for a long time... Like, even though you learn some commands, you're not forced to learn key bindings, to learn shortcuts, or anything; you just keep clicking around. And many other programs - they don't even give you a great quantity of key bindings. So I think that for what us engineers do, I think it's a lot easier to use CLIs, because since you repeat tasks a lot, it's a lot easier for you to memorize a few words and just be accurate when you communicate with a machine, than actually keep searching for buttons, or anything like that.

My experience learning it was indeed very frustrating at the beginning, especially because I was using many plugins. I don't think I started it right... I think it's just pleasurable. It's something I still enjoy, just sitting down, configuring things, going through plugins, seeing what other people are using, and seeing if I can do something faster... Because I'm the kind of person that gets easily annoyed by tasks that I have to perform too often; I'd say I strive to be lazy - that's a phrase I've heard once, and I think it's what motivates me to keep going, keep using Vim... Because if I have to do something more than once, or if something feels boring, I would just try to automate it, or try to find an easier way of doing it, and I think that's a great attitude to have when you're learning Vim - just start to be lazy, and try to find easier ways of doing things. I think that's the key idea.

**Jerod Santo:** I'm in a little bit of a different situation, because I might be the only person who has persevered - not the only, but... A rare person who has persevered through learning Vim, and still doesn't like it... That much.

**Adam Stacoviak:** Careful!

**Jerod Santo:** Yeah... I don't dislike it. I feel like I have shared this before, but I'll share it again, just for the conversation. My introduction to Vim was by necessity. My teacher in college, teaching me C++ - the basically was a Vim die-hard, and he said "You're gonna SSH into this UNIX machine, and you're gonna use Vim. That's what you're gonna do, there's no if's, ands or buts about it. That's what you're gonna do to write your C++ programs."

\[00:16:05.26\] Therefore, I didn't have a choice. I think if I had a choice... In fact, he let us use -- it was either Pico or Nano. I think it was actually Pico, for the first two programs. Then he specifically said "By the way, Pico is (he specifically said) a text editor in which you should write letters to your grandma, but not write computer programs." So he was very opinionated...

**Adam Stacoviak:** Wow.

**Jerod Santo:** ...and made us laugh quite a bit. But he was like, "Don't use Pico to write programs. I just let you do that. Now you're gonna write Vim." So I learned Vim basically by necessity over the semester, and I didn't really know there was -- this was back in the early 2000's... I didn't even know there was a different world of GUIs, and IDEs, or any of these things. I just learned, I cut my teeth on Vim. So I'm very proficient with the editor. That being said, on a daily basis - and I write software on a day-to-day basis, and I rarely choose Vim as my primary editor. I'll use it on servers, I will use it as a secondary editor, but I almost always prefer and choose a graphical interface. Specifically, I use Sublime Text, but I feel very similar about VS Code. I actually feel like they're faster, in many cases, for me... And I think it's problematic -- I think we should be careful not to conflate the idea of a graphical interface with bloatware. If we say there's GUIs and there's IDEs - yes, an IDE is a graphic interface, but not all graphical interface is an IDE. An IDE is an environment; it's like an all-in-one... Similar to like a framework versus a library. It's like a framework.

Visual Studio, maybe Eclipse - these are things I don't have much experience with, but... Xcode I have some experience with - when you click the button to start it and you have to wait 30 seconds for it to launch, because it's bloated, in my opinion. But VS Code, Sublime Text, Atom, TextMate, Notepad++ (I don't know what's on the Windows side), these are things that to me they feel lean and mean; they don't feel like bloatware. They feel like fast, small, lean programs that I can extend.

In my current life, by the time I get Vim configured to do all the things that I want out of a text editor, it's slower than, in my case, Sublime Text, for many tasks.

**Adam Stacoviak:** I think what you said there too on the IDE front is pretty important... Don't confuse VS Code or Sublime Text - in particular those two, because those two because those are the ones I'm most familiar with, like you are - with, say, Eclipse, which is meant to be an integrated thing into the language. It's almost something you said too, Lucas - you said you're not really sure where the IDE ends and the language begins. You sort of have this missing piece. But IDE, just to spell it out for the listeners that may not be aware - it's an acronym, obviously, for Integrated Development Environments. So that just means that you're taking this environment, this GUI, and integrating it into a particular platform. It could be a framework, it could be a language in particular... There's ones around Ruby, there's ones around Java, there's ones around Go, and many of them... And they're for good reasons, because there's certain special, or magic, or sugar in the language or in the framework that you wanna extend to. A GUI just sort of speeds certain actions up that you repeat a lot... The same that you might do with a plugin, or an alias, or something like that. So that's where this really comes in. I think your point though, Jerod, to not confuse the two, is very important.

**Lucas Fernandes da Costa:** Yeah, I completely agree with that. I think even VS Code is a great application, Sublime as well. I really don't like IDE's, but I think there are still some disadvantages; of course, everyone has their preferences. For me, what motivates me to keep using Vim is that - I would say that when you're using command line interfaces, things are already written for you; it's easy to communicate between programs. As Douglas McIlroy has said, if you write programs that work well together and if you use the universal interface, which are just like text streams, I think it's just so easy to incorporate new things into your flow; things get so much more flexible, and I think you avoid writing software.

\[00:20:38.17\] I feel like there's also lots of duplication. If you already have tools available for you to do one thing, if you can use streams and you can combine much more programs, then I think many times you will avoid writing a plugin. Also, that's how I feel about Vim now - I don't try to make Vim an IDE, as I tried in the beginning; I just tried to go with the raw thing and tried to use the terminal the way it is supposed to be used, I guess... But of course, I think VS Code is great. I've seen lots of people using it already, and I think that's a very important distinction you made there... I just think that there are still some advantages if you're using the terminal.

**Jerod Santo:** Don't get me wrong, I'm a Terminal junkie... I'm just speaking specifically of having your primary editor in the terminal. That's pretty much the only thing that I don't do in the terminal. Everything else is. So I agree with all of the things that you're saying there, and I've found that Vim fits well in that workflow... So I'll use it as my $ editor in my environment variables, so that when I'm going to do a Git commit, it will open it in Vim. So I'm not completely on the other side of the fence here; I'm just a person who, when it comes time for day-to-day writing software, I do enjoy both the speed and - there's an aesthetic value to a graphical interface that draws me over Vim.

**Break:** \[00:22:18.02\]

**Jerod Santo:** So we've been talking about bloatware, and I'm trying to define some lines, because I think there's some GUIs that are, some that aren't... Lucas, you start off your post saying "GUIs are bloatware, and I've said it before", so this is something you've got your thoughts and reasons about... Expand on that for us, and why exactly this is a talking point for you.

**Lucas Fernandes da Costa:** I think as we were saying earlier, it's important to make those distinctions between GUIs in general and IDEs. Of course, I'm not a big fan of GUIs in general; I think they're just not optimal for what we do. I'm not saying GUIs are inherently bad, I'm just saying that due to the nature of the tasks we do, which involves a lot of repetition, which might involve a lot of need to automate things, a lot of need to integrate programs, combine programs, I think when you use CLI tools you are a lot more flexible when it comes to that; it's a lot easier to combine programs using streams, you can use many tools to automate what you're doing, it's a lot easier to create scripts, it's a lot easier to extend programs; you don't have to write a plugin... Many things are available right out of the box, because people have written great UNIX tools, everything's very readily available.

\[00:25:10.07\] I think also since we use those tools a lot, with a lot of frequency, I think it's a lot easier for you to memorize commands and just type them out, than it is to be searching around for buttons, or trying to remember a specific sequence of things you need to do, whilst you could have automated all of that.

So yeah, I think there are of course advantages to using GUIs, but I just think that due to the nature of the things we do, it's more productive to use CLI tools. Also, all the information they provide you... When it comes to how you communicate with the machine, it's also a lot more exact, it's a lot more precise. It's kind of like as if you were talking with a machine in its own language; it's easier for it to understand what it says, and it's easy for you to tell it in a precise way what you want it to do.

**Jerod Santo:** Another point that you make in your post which I appreciate and agree with is that when you invest learning time -- because that's really what you're doing when you're learning, you're investing in the future you... And when you're investing in command line and terminal UNIX-based, POSIX-compliant UNIX philosophy tools, these are portable skills, that can be moved to a new environment, a new language, the next thing that you're doing. It can be on a different machine altogether, you can SSH to any Linux box in the world and it's gonna have Vim; it'll probably have Pico on there too, if you don't want Vim... \[laughter\] It's gonna have ls, it's gonna have tree -- or will it have tree? Maybe it'll have tree. Point is, these things are portable, whereas on the other side, if you're using an IDE or a graphical interface that is a larger monolithic program, you're really investing in one thing. In stocks and bonds we say your portfolio isn't diversified. You can't take those IDE skills, move them elsewhere and use them. So I think that's a really big talking point and reason to invest in the CLI.

**Adam Stacoviak:** You're also assuming too that the visual goes with you; like you'd mentioned in college, Jerod, and we do this every day -- SSH into a machine... And I'm on a Digital Ocean box, or a Linode, or whatever... There's not actually a monitor there; there's not some sort of visual. The visual is the terminal. So when you invest in VS Code or a GUI in those cases, then you really can't take that with you from a visual standpoint, let alone just an installation option. Even if you could install VS Code on the machine, you can't see its interface, via SSH, for example.

**Jerod Santo:** True. Now, you can get fancy and do an SSH mount and use your local VS Code against the remote machine, or something like that, but... Yeah, point taken.

**Lucas Fernandes da Costa:** \[00:28:09.26\] Yeah, that's one of the reasons why I don't add too many things to my Vim configuration. I try to use it as minimal as possible. It's kind of like this disciplined pursuit for less, so that I can be comfortable in any environment.

When I'm pairing with a co-worker, many times I'll just fire up Vim and just use it without its syntax highlight or anything, because I just feel comfortable that way, and it's a lot easier for me to write code anywhere, on any device. It's very good.

**Adam Stacoviak:** Would you consider yourself a minimalist, or somebody that strives for minimalism, considering you said "this disciplined pursuit of less"?

**Lucas Fernandes da Costa:** I think the more I strive for less, the less software to -- yeah, sorry. I got a bit lost.

**Adam Stacoviak:** Yeah, so you agree with minimalism then, long story short.

**Lucas Fernandes da Costa:** \[laughs\] Yeah.

**Adam Stacoviak:** I like what you say in this post too around your advice, basically, for beginners at least, to resist this urge to just use all the plugins possible out there, and to sort of learn it incrementally, and then layer on plugins that may be useful to you as you gain more and more proficiency. When I asked you earlier in segment one what some of your tactics were to getting past the hurdle, it seems like maybe originally you tried all the plugins, and then at some point you gained some wisdom and said "Maybe actually if you're learning Vim for the first time, to get over this hurdle, don't try to use all the plugins possible", to actually achieve this minimalism we're camping out on here.

**Lucas Fernandes da Costa:** Yeah, I completely agree. I think there are some plugins that are quite useful when you're starting out, like NERD tree, or CtrlP, or fzf, which is what I use now... You know, just being able to easily find files, and seeing a file tree. I think people are so used to that in every single text editor or IDE that you use that; it's such an ubiquitous feature. I think those are quite useful. But many things I think they can just be done in vanilla, and I think it's just easier and more portable if you just do vanilla.

**Jerod Santo:** Let's expand from the Vim conversation and talk about some of the other tools that you're using. In this post you have the Terminal starter pack, and it includes Vim - or Neovim, in your case - Tmux, iTerm2, and Zsh, and Oh-my-zsh... And when I read these four things together, I think it's a very nice starter pack. I would say that on the zen minimalism side, if I could say the word; and what's stock on computers that you're gonna be using elsewhere... I would actually argue that I'm beating you in this category, because iTerm2 isn't on machines by default, Zsh sure isn't on a lot of machines by default, whereas Bash would be... That being said, Tmux is, and I'm a rabid Tmux user... So I'm just curious why this is your starter pack, and maybe give us the reason why you pick each of these tools and why you like them.

**Lucas Fernandes da Costa:** I think Neovim is a natural evolution for when you're using Vim. I think you end up getting annoyed by the synchronous tasks, and I think it's just a natural move, since configurations are compatible, and everything. I think also once you've used a couple terminal emulators like iTerm2 or Terminator or whatever you use, I think you just -- it's a natural evolution to go to Tmux, I think. Also, it's very configurable, all the plugins and everything; also being able to attach and detach sessions.

\[00:32:06.02\] I think Tmux integrates really nice with everything else that's on the terminal. I think, as you've said, iTerm2 is not available everywhere, that's true, but to be honest, when I started using it, I wasn't really very proficient with terminals, so I just started using iTerm2; I quite liked it. I used to replace lots of \[unintelligible 00:32:30.22\] features... You know, splitting panes and opening tabs...

**Jerod Santo:** Right...

**Lucas Fernandes da Costa:** And then I think what got me was how easy it was to import color schemes, and all that... And I think inertia.

**Jerod Santo:** Inertia. So I'll challenge you a little bit on that one, because I am a former iTerm2 user, and currently terminal.app. I think I accidentally talked Adam into just using the stock Terminal on the Mac.

**Adam Stacoviak:** Sure did.

**Jerod Santo:** Mostly because of how much -- previously I learned GNU Screen; I switched to Tmux probably five years ago, but I was a Screen user, which gives a very similar feature set to Tmux, just a little bit less usable, and modern, I should say.

I've found over time that iTerm2 wasn't actually providing any features that I needed, because I do so much with Tmux. The Terminal app - you can change the font, you can change the theme... And I don't really use tabs, so everything's in Tmux, with sessions. I like Tmuxinator; I think I recently wrote about that on Changelog.com, if you wanna read that.

I'm curious if iTerm2 has any killer features that you're still using it, or you're just kind of using it because that's what you learn, and that's what you like, and you haven't had any reason to stop?

**Lucas Fernandes da Costa:** To be honest, I think iTerm2 is more because of inertia, I'd say. I think that's just what I'm used to, and I find it so easy to configure the fonts, the color scheme, and all that; I'm just so used to it. And I think from all the things in the stack, the things I interact with the most, I think I replaced all the features I used to use from it by Tmux. So yeah, I think Tmux just makes my workflow so much more organized. If I'm writing code, and something urgent happens and I need to jump in to do support, or anything, I will just detach a session, create a new session, or just move to a new tab and do it very fast; I don't have to think too much about it. So I think Tmux ended up replacing all those features for me, and I just use it more out of inertia, I'd say.

**Adam Stacoviak:** So would you say that iTerm2 is questionable then for you? Terminal would do most of it?

**Lucas Fernandes da Costa:** Yeah, I'd say it's pretty questionable. I'd say it's more because it's just...

**Jerod Santo:** \[laughs\] From the minimalism perspective. There's nothing wrong with it, it's a great application.

**Adam Stacoviak:** Yeah.

**Lucas Fernandes da Costa:** Yeah, maybe you just talked me out of it. \[laughter\] I'll just uninstall it now maybe. I don't know, that's a very good point.

**Adam Stacoviak:** What brought this up for Jerod and I - this is about two years ago, when you got a new MacBook Pro, Jerod...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And you know, what hacker can resist the question of "So what are you installing on this new machine?" That's the age-old great conversation to have. So he was talking through certain things, and he says "You know, I'm actually gonna just use Terminal. I'm trying to resist", he said, I believe...

**Jerod Santo:** Right.

**Adam Stacoviak:** "I'm resisting installing iTerm2 because--"

**Jerod Santo:** Just to see if I can get by without it.

**Adam Stacoviak:** Right. Because the terminal is already here, why don't I just try to use this? And for these reasons... You know, he's already using Tmux and whatnot. So the next time I got a machine, I recalled that conversation; and I'm a fan of minimalism, I achieve and aspire to have less. It doesn't mean I always am a minimalistic person, that is my natural state of being though. So I was like, "You know what, I'm gonna follow in Jerod's footsteps and just resist iTerm2 and use Terminal", and I haven't looked back since. That's years now.

**Jerod Santo:** \[00:36:10.11\] And to be fair to iTerm2, the built-in Terminal app has gotten a lot better in recent years. There was a time where there was a huge disparity between what iTerm2 provided and what the built-in app provided; it was way better, in multiple ways. And most people use it because of the split pains... But like we said, if you have Tmux and you're familiar with that, it solves that problem for you.

So I think there used to be a bigger difference, and I think at this point it's less so. But that being said, if I go through and look at all of iTerm2's features, I can probably find reasons why I don't wanna use this. I can probably find reasons to install it. But my new philosophy is instead of asking "Why shouldn't I install something?", I ask "Why do I need to?" And if I don't need to, I don't do it. That's been the perspective, I believe... And how far can I get on just what's already available to me? When it comes to the command line in UNIX-based tools, you can live your life without installing very much.

That being said, Lucas, I'm curious if you've ever heard of Tmuxinator, or ever tried it, since you're a Tmux fan... Is that something you're familiar with, or...?

**Lucas Fernandes da Costa:** I haven't heard of it, actually. Tmuxinator...

**Jerod Santo:** Yeah, it's pretty cool. If you have a lot of ongoing projects, which as a person who does client work, as well as coding stuff for Changelog.com, I have a lot of little projects going... And it's common to have different Tmux sessions for each of those projects, and hop back and forth. You detach one, attach another one, and it's all set up and ready to go.

Well, Tmuxinator unfortunately is a Ruby Gem, so it has a Ruby dependency upon it; I'd love it to be written in Bash, or something... But it's basically a way that you can create your own configurations for Tmux, name them, and then define all the panes and what each command will get run in each pane. And you just store them in YAML files in your home directory. Then you can just say "tmux changelog", and it'll just start that whole session for me, and save it for me from scratch, and I can have one of those for each particular thing I'm doing. It's pretty cool. Anybody who uses Tmux, I would suggest at least checking it out. It's a good idea.

**Lucas Fernandes da Costa:** I think it fits really well with what I usually do, because I have kind of these implicit rules for myself. Usually, when I'm working on a certain project, this first pane will always do this thing, the second pane is always gonna be for that thing...

**Jerod Santo:** Exactly.

**Lucas Fernandes da Costa:** So it's usually like, you know,first I runs things, and just keeps a window open in case I need to move files around, or anything. And the second one is always like Vim, and running some tests, or anything like that... And I can have these rules for myself. That automates it. I think it fits really nice with what most people do, actually.

**Jerod Santo:** Yeah, it's pretty cool. For Changelog.com, for instance, the first pane is the server, running, and then the second one is a console session, opened, with the whole framework loaded, and everything; the third one is the tests running, and then the fourth one is just a shell. So I can name them, I don't have to set them up every single time... Because you do find yourself doing the exact same thing.

What would be cool is if you could just have Tmux sessions last, persist through reboots... Which I feel like maybe there's some hacks out there that make that work, but they're just never really reliable for me. So those detach sessions will persist and live forever until you reboot your machine... So this is a nice way of just configuring it once per project, and not having to worry about it.

**Adam Stacoviak:** Well, most of the procrastination that could happen or would happen, would because of all the necessary cadence or ceremony to begin, right? That's some of the reason why people put off a task, because of all the necessary steps you need to do to actually begin the task, not just actually achieve the goal. So in this case, if you wanna work on a quick bug, or just anything really fastly, then if you had to do that ceremony every single time, you'd be less likely to...

**Jerod Santo:** To even get started.

**Adam Stacoviak:** Yeah, exactly.

**Jerod Santo:** \[00:40:13.02\] Or you just find yourself typing the same crap out all the time. As programmers, every time we type the same thing over and over again, our brains start thinking "How can I not do this every single time?" And that's a lot of the stuff Lucas has done; what you're sharing in your setup is really just you solving those problems. It's one of those things - I think the mindset of a terminal/in-terminal editor user, versus an IDE user is an IDE user generally is like "Just do all the things for me, give me a button, and I just wanna push it." I think that's a perfectly viable way of looking at it. But on the other side, it's kind of just the more hacker lifestyle of "Nah, I'm gonna create my own environment that's ideal and perfected, and I can smooth over all the little issues."

One thing that I've done years ago - I don't even realize it anymore; I think about it now because we're talking about this - is I just started realizing, in the command line every time you change directories into a new folder, what's the first thing you do pretty much? What's the next command?

**Lucas Fernandes da Costa:** Ls, right?

**Jerod Santo:** Ls, yeah. I'm in a directory -- it's similar to a text-based adventure, and you're like "I enter a room", and now you're like "Okay, tell me what's in the room." "I look around the room."

**Lucas Fernandes da Costa:** Yeah, real perception.

**Jerod Santo:** Yeah, cd and then ls, pretty much every time. And even if you didn't wanna ls, would it bother you if you did? Maybe ten years ago I just overwrote the cd command in my Bash dotfiles to just ls after I cd every single time for me... And so now that's just the way it works. I change directory, it prints it out... And that's just the cool stuff that you can do. And maybe I'm the only person in the world that likes that. That's fine; I'm the only person in the world that has it then.

**Adam Stacoviak:** The cool thing is we've kind of gotten into this sort of blacksmith kind of mentality of ages of old, whenever the blacksmith in the town was one of the most popular persons, because they would be the toolmaker. And this was just an age where it was common in a practice or a craft to form and create and manipulate your own tooling. I think that's kind of maybe even potentially a divide of hacker type; not so much that you have to fully adopt this, but that you can appreciate your ability to fine-tune your tooling. Like when you mentioned the IDE, Jerod, having the button - that's a perfectly viable option; however, the hacker way tends to be "You know what, I like the button, but - I want it to do this, this and this as well", so a GUI may not be the better fit, because that person is the kind of person using these tools to wanna make and fine-tune their own tooling to adapt and be the best practitioner.

**Lucas Fernandes da Costa:** Yeah, there's a lot of pleasure also when you do something yourself. You know exactly how it works, you know what you need to do in case you need to do any fixes... You know exactly what's happening. And I think it's also very pleasing, as you say.

**Jerod Santo:** There's absolutely a satisfaction to solving your own little problems. It feels empowering to just say "This bothered me - it was the smallest little thing - and I came up with the idea of "Why wouldn't I just change it?", \[unintelligible 00:43:32.05\] And from the point that I had that idea, to the point that I had it finished... I had to realize if you overwrite a built-in command in your function, you have to call the built-in; literally, the word "built-in" cd. That was the only part I had to figure out. From start to finish it was probably like 15 minutes, and it's been serving me like that for ten years of my life. That feels really good.

**Adam Stacoviak:** Those 15 minutes were well spent, to invest in the future.

**Jerod Santo:** Which I think was one of the main points, Lucas, you were driving home earlier.

**Lucas Fernandes da Costa:** \[00:44:09.11\] Yeah, exactly.

**Adam Stacoviak:** Something else you mentioned too though, Jerod, was Bash, and configuring it, and hacking it. The last piece on the terminal starter pack is Zsh, and maybe the extension of that is Robby Russel's Oh-my-zsh, which I'm a fan of personally... But you're using Bash, Jerod, so we're like two-to-one here.

**Jerod Santo:** Right. You got me cornered.

**Adam Stacoviak:** \[laughs\] Lucas, help us understand why is Zsh something you reach for, since you're a minimalist, and Bash, as Jerod said before, is on every machine.

**Lucas Fernandes da Costa:** When I started out I was using Bash, and then I think the thing that drew me to Zsh was the autocompletion. I think that was the clear thing for me, the clear feature; that's what brought me in. Also, all the \[unintelligible 00:45:00.28\] patterns, and all that... And I think just managing configuration with Oh-my-zsh is so easy; also \[unintelligible 00:45:10.02\] I think the killer feature for me was the autocompletion, and that you can get all the prior permissions with you were using.

**Adam Stacoviak:** Well, here I am about to say, you know what - if there was Oh-my-bash, I might... Because what actually draws me to Zsh is less about Zsh and more just the fact that Oh-my-zsh existed and made it so easy, and I like the easy button... There actually isn't Oh-my-bash.

**Jerod Santo:** Yeah, that's hilarious. So for us laymen over here, tell everybody what Oh-my-zsh is.

**Adam Stacoviak:** Well, I'll just read the description on the repo: "A delightful community-driven (with 1,300+ contributors) framework for managing your zsh configuration." So it's really about "Oh-my-zsh is awesome." \[laughter\] Robbie made this configuration for it; that's what Oh-my-zsh is now, to sort of make plugins, and this extension to use Rails, Git, and have all this configuration a lot easier... And that's what Oh-my-zsh is - this extension, this layering on top of Zsh to make your terminal prettier, and things like that... Just change and augment the visualization of your command prompt.

**Jerod Santo:** That episode was a long time ago, back in 2011. We'll put that one in the show notes. Go back and listen to the old Adam Stac.

**Adam Stacoviak:** That's right.

**Jerod Santo:** And Kenneth Reitz, Robby Russell...

**Adam Stacoviak:** The OG Adam Stac.

**Jerod Santo:** That's right. See how that audio sounded back then. So that's what Oh-my-zsh is... Adam, you got brought to Zsh because Oh-my-zsh was so cool.

**Adam Stacoviak:** Right.

**Jerod Santo:** And Lucas, you got brought to it because autocompletion was better than Bash. I'm not sure if that's still the case... I mean, Bash has autocompletion; maybe it's just not as good as Zsh's, but... I'll probably just stick with Bash.

**Lucas Fernandes da Costa:** Yeah, I think indeed Oh-my-zsh makes it a lot easier to get started with it, and the community is just so -- it's so easy to find ways of solving your problems, find help and documentation and everything you need. I think Oh-my-zsh really made it a lot easier for people to start using Zsh.

**Break:** \[00:47:36.20\]

**Jerod Santo:** So we talked about the four pillars, you might say, of your setup - Neovim, Tmux, iTerm2 and Zsh by way of Oh-my-zsh, of course. The command line and the terminal is way more than that, and the more of the commands that you know and learn and ingrain into your workflow, the better you are at it.

Now, one of the hard parts about the terminal, similar to an Alexa device, is discoverability isn't the best. It's difficult to ask the computer "What are all the things that you can do?" because, well, there aren't buttons to click on, which tell you what they do. So one of the things you have here at the end is "Other useful programs & and things to know" in order to get good at the terminal and use it instead of a GUI. Why don't you go ahead and we can talk about a few of these? There's a lot of beloved favorites in there. Curl, of course, at the top of the list; much beloved here. Daniel Stenberg is a hero of ours and a frequent guest on the show, for Curl and all he's done there... But I'll tee it over to you, Lucas, to talk about some of these other commands that you've found useful and you integrate into your terminal life.

**Lucas Fernandes da Costa:** I think these are the ones that make it easier for you to do everything you do in a GUI. I think those are the things that people do the most, so I think it was useful to put them down here, so people know "Hey, these are things I can use to replace whatever I'm doing right now", and maybe do it more efficiently and in a more flexible manner.

I think jq is really cool, especially because if you're using Curl, you're probably gonna get JSON back, and you want to work with it in a nice, simple way.

Also the stream editor, sed. I don't know how you guys call it... Sed?

**Jerod Santo:** That's what I call it, sed, but I don't know.

**Lucas Fernandes da Costa:** Yeah, I quite like sed also. Since I really use Vim quite frequently, I got very familiar with regular expressions, and I very rarely need to google a regular expression, because most of the things I do also are simple regular expressions.

Ag is very useful, especially when navigating through code, when trying to find something. I actually use it through fzf on Vim. So actually my fzf plugin uses ag. It's really easy to configure, I can just use configuration to ignore whatever is on my gitignore, so I don't get all those annoying Node modules when I'm searching for things... So it makes it really easy to navigate around and find things.

Awk - I always have to know exactly what I need to do...

**Jerod Santo:** Me too.

**Lucas Fernandes da Costa:** It's not very verbose, so I think it makes it harder for you to remember things... Unless it's something very basic, googling is required, but it's very useful.

Rsync - I saw a talk these days, and the guy was saying that rsync is made of magic, and I couldn't agree more. Rsync is indeed made of magic.

**Jerod Santo:** Why do you say that?

**Lucas Fernandes da Costa:** \[00:51:57.24\] It's ridiculously fast, and it just works so well. It's ridiculously simple to use. Just having an incremental file transfer that is so easy to use - it's just ridiculously magic.

Also grep. Grep is such a great tool. I was reading these days a post about why grep is so fast, and it was just -- all these things have so much magic into them... It's not just rsync. I think rsync and grep stand out, but I think both rsync and grep are great tools.

Also make. I think many people overlook make. I think it's such a great tool for automating tasks... And even though there's this joke around, of there only having been one makefile, and all the other makefiles are copies, a bit modified, of this first makefile... I actually think make is a great tool. I think it plays really well, even with Npm scripts and all of that.

I think sometimes things like \[unintelligible 00:53:00.01\] are quite annoying to configure maybe, so I'd say make does many things really well and is really simple to use; it has been around for a very long time, so I quite like it as well.

**Jerod Santo:** Lucas, for more on make, stay tuned to an upcoming episode, because Gerhard Lazu, our dev ops buddy, who just recently redid the Changelog.com infrastructure for 2019, is coming back on the show. If you guys recall, a while back we had him on - maybe it was 2018, maybe it was 2017; I don't recall. Our first time deploying Changelog.com as the open source CMS - that was with Ansible and Docker. Well, we've got a brand new setup, and Ansible is completely gone, Docker is still there... You'll definitely want to find out what we're doing this time, but I'll tell you - Gerhard is like a makefile guru, because all of our Ansible scripts have been replaced by one makefile, which is open source in our repo if you wanna go read it... This thing has all sorts of interesting features.

I never reach for make. I use it when other people have written makefiles; I wouldn't reach for it myself, but it's awesome to see how much you can do with a makefile. So just a quick plug for that, and... I agree, there's definitely a lot of tasks you can automate beyond just building and compiling code.

**Adam Stacoviak:** What I love about this list - as you said, Jerod, with Alexa, which I think is actually a great analogy - is discoverability. The way that you discover these kinds of things is by somebody else going down the path, and doing a retrospective and sharing their learnings... Because you can assume impostor syndrome, or you don't know as much as somebody else, but meanwhile you're a few steps ahead of somebody else and you can always share back a little bit. This list alone is gonna be helpful for a future or up-and-coming programmer that is like "I never really knew make, or how to use it", and now they've got this list to go off of, and some experience.

**Lucas Fernandes da Costa:** I think make is definitely amazing. I even joke in one of my talks that -- we use make in lots of projects, and we even use make in Chai, because we're vintage and we don't like Gulp, Grunt or any of that. Just because it works...

**Jerod Santo:** Vintage. Hm...

**Lucas Fernandes da Costa:** ...and it's been around for such a long time, and it's just so well-documented and so easy to find materials about it. It's just amazing; I quite like make.

**Adam Stacoviak:** Not modern, Jerod. Vintage.

**Jerod Santo:** I like that, vintage. Minimalist... There's a lot that we can call make, but I don't think we can call it minimalist, right? \[laughter\]

**Lucas Fernandes da Costa:** Yeah. Vintage is a word I like. \[unintelligible 00:55:42.04\] that's the right word to use.

**Jerod Santo:** I love it. I also give my +1 to most of these. Rsync - I would be embarrassed to tell you how many things I'm still deploying or backing up with rsync, on different machines around the world. Such a useful tool.

\[00:56:01.16\] Ag - you talked about ag, and you didn't pause there very much... This is a search tool, similar to ack. So there's been this progression of search tools. Grep - which is built-in on all Linuxes, probably most UNIXes - is an awesome tool. Ack is a replacement for grep, but with a great website, better than grep.com.

Ag is called the Silver Searcher. It's just like ack, only it's focused on speed. I think it's written in POSIX-compliant C code... So is this ag (the Silver Searcher) - do you use this only inside of Vim, by way of a plugin, or do you just use it from the command line tool when you're searching a code directory...? Do you use it in place of grep, or do you also use grep in different contexts?

**Lucas Fernandes da Costa:** No, I also use grep. I use ag mostly inside of fzf indeed, but I will also use it when I'm navigating around... Sometimes I'll use git grep if I'm not in Vim, because I wanna ignore whatever is on gitignore, and just see what I'm dealing with in git... But yeah.

**Jerod Santo:** So when would be a time that you'd reach for git grep, versus ag, from the command line? Is it when you're searching for something specific, or...? I just don't understand why one would be used over the other.

**Lucas Fernandes da Costa:** You mean why would I use ag instead of git grep, or...?

**Jerod Santo:** Or vice versa, from the command line. Why doesn't ag fulfill all your needs, would be the question.

**Lucas Fernandes da Costa:** If I were to use ag, I would tell it to ignore -- well, actually I don't have to actually ignore by gitignore... Because when I started using fzf, I had to manually tell it "Hey, ag, ignore my gitignore." So I actually thought that I would have to always tell it to ignore my gitignore, but actually not. So I actually do something wrong, I've just realized.

**Jerod Santo:** \[laughs\] Okay. I wasn't trying to call you out, I'm actually trying to learn -- because I tend to use grep just because it's familiar to me; now, I also use ack, but I usually only use ack inside of the Vim search tools. I feel like at a certain point with ack I used to have to tell it what kind of a file I was looking for, like ack--perl, for instance, or --js, if I just wanted to search Javascript files... Whereas grep will, by default, search every file in the directory. But I'm just going from memory there. I was just curious if ag had specific places where it fell down... But maybe we should just all be using ag all the time.

**Lucas Fernandes da Costa:** Yeah, I guess so. I didn't know that. That's good to know.

**Jerod Santo:** Well, there's one common thread that binds all these tools together... We've talked about the UNIX philosophy, we've talked about small tools, loosely coupled, and the idea of sending your input and your output between these tools by piping... And really what's at the core of that is this concept of "everything is a file", and really the idea of plain text, or just passing text around, and the beauty of that.

You have another post called "In praise of plain text", which hilariously starts off how graphical interfaces are bloatware... \[laughter\] So we've sensed a theme here with you, Lucas... But go ahead and just riff on that, the concept of plain text, why it's so powerful and why it's so useful in this context.

**Lucas Fernandes da Costa:** Sure. I think that just having this interface readily available for you to integrate \[unintelligible 00:59:25.21\] makes it so easy for you to achieve tasks, and it also kind of encourages good design. Because when you're writing a program that needs to work by itself, that cannot communicate or that it's hard to communicate with other programs... Like when you're using a GUI, it's often hard to pass there from that GUI into other programs, whilst when you're using text interfaces it's quite easy to do that.

So since you don't have to worry about putting all those features into a graphical interface... You know, that's a very important thing in the UNIX flow - just doing one thing and doing it well. So I think programs get a lot smaller, and when you have less software, you have less things to worry about, you have less things to maintain, less things to update, there's less places where bugs can hide... So I think it not only makes it easier for you to accomplish tasks, but it also encourages good design in general.

\[01:00:27.10\] Another thing that's important here is that when you're using graphical interfaces, often the creators of graphical interfaces have to be thinking about "Hey, what are users going to do? What should we provide them with?" Well, if you're writing a CLI tool, you should just be concerned about what I want this specific tool to do, what's the real purpose of this tool... Because whatever else they want to do with the output of that, or whatever they want to provide as input is none of your concern... So I think that's really useful when developing applications, both from the point of view of the creators, because for them it's a lot easier, because they have to assume less things, and from the point of view of the user, where it becomes a lot easier to use them in whatever way they think is more suitable, so they can accomplish a wider range of tasks, I guess.

**Jerod Santo:** I like the way you end that post: "Text is timeless, precise and elegant. We should use it more."

**Lucas Fernandes da Costa:** Yeah, I think that when you're communicating to a machine, it's kind of like the language of mathematics - it's just a lot more precise. I think it's just so simple, so I quite like the idea of not having visual abstractions, or all these visual concepts, or things that you have to have seen before to understand what they do. Like when you see a symbol - that's a common idea between us humans, it's a common agreement between us that "Oh, this symbol does this thing." So if you don't know what a certain symbol it is, or if it looks confusing, it's just subjective... While text is just precise. You tell the computer precisely what you want it to do, and there's nothing subjective in that; there's no searching \[unintelligible 01:02:24.03\] there's no looking for an icon, or not finding something. It's always there, it's just exact and precise, and as I said, it's timeless.

**Jerod Santo:** Well, you aren't gonna get any disagreements from me on that one. I'm a huge fan of plain text... I'm a huge fan of markdown, which has similar precepts, and really allows you to write prose; not engineering necessarily, unless you're doing documentation, but just the idea of writing prose to be read in a plain-text format, at least a format that is readable and legible and enjoyable in plain text, but then can be converted into HTML or any other format, for other needs. I think the simplicity is probably one of the reasons why markdown took off and began kind of a de facto language for technical writing.

**Adam Stacoviak:** Are there any resources you can share that's something you track pretty often? Maybe a text mode only newsletter, or something like that...

**Lucas Fernandes da Costa:** I tend to go to a lot of conferences, so I talk a lot to people about what they're using, and especially whenever I'm doing live coding, or whenever I'm using my Mac and I'm in my terminal - I'm quite approachable for people, and I also like CLI tools quite a lot, so... I think interacting with people is a very valuable way of learning these things.

\[01:03:57.06\] As I've said, one of the main motivations for wanting to use the terminal more is to get more efficient at what you're doing. When you get annoyed, you go there and you fix, and you try to find more efficient ways of doing things, but sometimes you don't realize that you're missing a more efficient way of doing things, because you think that what you're doing is already efficient enough. I think that's when talking to people comes and makes it a lot easier for you to realize what are the things that you could be improving, but you aren't, because you think they are already good enough, so you miss improvements on those points.

Also, on GitHub, I'm looking for people's dotfiles, to see what they're using. I think that's quite useful; I think I learned a lot by reading other people's dotfiles. Just seeing what's in there, how they use things, how they use tools, asking myself why a certain piece of configuration is there - I think that's also very useful.

Also, I find quite a lot of useful stuff on Hacker News, on Twitter \[unintelligible 01:05:11.12\] I keep myself updated when it comes to that.

**Adam Stacoviak:** I can say that I've learned a thing or two reading your dotfiles, Jerod. Particularly because you do some interesting things with Bash history, or just your rc file... Just different things that have been in your settings I've learned -- even though I don't use Bash all the time (this was back when I did), I always appreciate looking at somebody else's dotfiles... And just because you'd mentioned that, Lucas, I was like, you know what, I wonder, since we're such an awesome repo kind of fan place, Jerod, where pretty much anything that's awesome - awesome dotfiles, awesome Vim, awesome whatever, we're gonna try and log it. I found awesome dotfiles, which I actually--

**Jerod Santo:** I was gonna say, I guarantee there's some awesome dotfiles out there.

**Adam Stacoviak:** Yeah. It's a curated list of dotfile resources, so you can jump into a lot of different stuff. I think that's a great point, Lucas, to find learning materials; what I was trying to get at, for those listening, where can they find some good resources to just learn themselves? A lot of it is paying it forward by writing a blog post about where you've been, like you have, in both of these scenarios, to sort of give representation and give a path forward for somebody coming behind you. I think reading some of these dotfiles is quite enlightening sometimes. It's like "Wow, I didn't even imagine doing that", or "That's really interesting."

I think you were doing something in particular with history, Jerod, and I can't recall what, but that's the one thing that sticks out to me about your dotfiles. I think you had your history, like, an extreme amount, or something like that. 30,000, or something...

**Jerod Santo:** Oh, yeah. As big as it would possibly go. Because why wouldn't I want to have all that stuff there...?

**Adam Stacoviak:** Of course. That's my same idea, but I was like "I didn't know I was able to."

**Jerod Santo:** The alternative of that is to have no history; that way, no one can track your moves.

**Adam Stacoviak:** That's right, that's right.

**Jerod Santo:** That's the ninja move - erases their history as they go.

**Adam Stacoviak:** Yes.

**Jerod Santo:** But I'm the hoarder. I'm just like, "Well, let me keep as many lines as--", I think I just set it to the max available, because we have the resources now. I think the history command was probably written back in the day, when people were dealing with size constraints on their disk, but... No such problems.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It makes me wonder... So I agree with dotfiles in terms of a way of learning tips and tricks from other people, but it's so much more useful if somebody actually just walked you through the dotfiles, or explains why they do what they do, versus just trying to conjure their intent, or hope they have comments on what they're doing... So I'd be curious if you guys (you two), but also the listeners, if you'd like to tweet at us or comment on this episode on Changelog.com, if you'd be interested in watching kind of like a -- maybe not a livestream, but a video where somebody would actually walk you through their dotfiles, or explain some of the more interesting tidbits in a screencast, or even just two people sitting there, one person asking questions, one person answering... Because it seems like that's a more digestible format for me, versus -- I'm not just gonna go troll through other people's dotfiles anymore. Maybe back when I was in my early 20's I would do that... But if somebody served it up to me, like "Here's a person who I respect, and here's why they're doing their dotfiles the way they are", I think that might be interesting. Is that interesting to either of you two?

**Adam Stacoviak:** \[01:08:23.13\] It's interesting to me. I think that's the better way probably to do it. A good first pass would be accessible dotfiles. Second pass would be "Explain here, please."

**Lucas Fernandes da Costa:** I think also just seeing things in action, so that you can realize how the action feeds into someone's workflow.

**Jerod Santo:** Exactly.

**Lucas Fernandes da Costa:** Not just seeing a tool there and knowing what it does, but not knowing how someone uses it... So I think that's quite a useful thing to know.

**Adam Stacoviak:** I also too like what we did -- this isn't exactly a one-to-one, but we've got Lucas questioning iTerm2, just by looking through his choices.

**Jerod Santo:** That's right. A critical eye.

**Adam Stacoviak:** Yeah. "I was thinking, maybe Terminal actually is probably just fine..."

**Jerod Santo:** It's kind of like code review, or working in a pair. When you're all by yourself and you do things, you just do certain things; then when you're with somebody and you have to explain... Teaching does this to you, as well; someone's like "Why do you do it that way?" and you're like "Why do I do it that way? Hm... Why am I using iTerm2? I'm not sure. It made sense at the time... Maybe I don't need it anymore." So yeah, that's always an enlightening experience for everybody.

**Adam Stacoviak:** Well, it's been a fun conversation, Lucas. Thank you so much for sharing your thoughts in these two blog posts. I know that you gave a talk at NebraskaJS, which, Jerod, that's where you learned about Lucas from before...

**Jerod Santo:** That's right.

**Adam Stacoviak:** And then this awesome blog post, "How I'm still not using GUIs in 2019", which is a guide to using the terminal. For those listening out there, if you haven't read this, we'll link it up in the show notes and do a deep read into this; he shares his dotfiles, a lot of the stuff we've talked through obviously... All the links will be in the show notes. Lucas, thank you so much for your time, man. I appreciate it.

**Lucas Fernandes da Costa:** Thank you very much. I love this show, I'm really happy to be here, and it was really nice talking to you guys. Thank you.
