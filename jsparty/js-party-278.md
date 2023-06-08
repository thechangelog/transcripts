**Kevin Ball:** Hello, JS Party people. Welcome to this week's fun party about the web. I'm Kball, I'm your host this week, and I am joined by the one, the only, Nick Nisi!

**Nick Nisi:** Hoy-hoy! How's it going, Kball?

**Kevin Ball:** It's going good. Well, and that "one only" is important for this episode, because we're doing an episode spotlight on Nick.

**Nick Nisi:** Oh, no...

**Kevin Ball:** Or rather, on Nick's toolbox. Because y'all may have heard us in previous episodes kind of reference a lot of the tools that he does. Nick publishes his dotfiles on GitHub, and so I think Jerod and I both just pull down his tooling configs and run them locally... And I understand maybe 30% of what it's doing, and I kind of go from there... But today, we're going to just kind of dig around and understand what are the ways, what are all the tools that you've put together, how do you configure them, how do you think about them, and what is and isn't working the way you want. But yeah, let's start. Maybe let's actually start with those dotfiles. So do you want to share what goes into your dotfiles? What do you configure every time you go to a new machine?

**Nick Nisi:** Yeah. So it started with just a place to put my vimrc way back in the day. I think 2011 was my first commit to it. I had been using Vim before that, but I wanted to have something more consistent, and that was actually mine. Because I think I was using one of my college teachers vimrc. And it even had like the abbreviations for his name in there. So if I typed a certain sequence, it would just type his name. But I wanted my own abbreviations. But what goes in there today are my now Neovim config files, my zsh config files, tmux config... Oh, and I have a brew file in there as well, to kind of manage what I by default want installed from Homebrew. And then just a random assortment of Bash scripts that I find are useful, or other tooling, like smaller tools that aren't necessarily like vital, although I guess they kind of are, in a lot of ways... Things like RipGrep, setting up a config for that, and other things.

**Kevin Ball:** Let's start with Homebrew. What are the things that you consider essential to install on your new machine?

**Nick Nisi:** Well, there's 64 things listed in that file... \[laughter\] No, the file is 64 lines long, but it's not all that... Because a brew file is a Ruby file, and so you can put some Ruby in there. So I do have one check where I check if it's a Mac. I've somewhat loosely tried to maintain compatibility with non-Mac, specifically Linux systems... And so when I'm on a Mac, I specifically want things like Kitty, and ImageOptim; I don't know why I want that anymore... But the 1Password CLI, and other specific Mac fonts. So I try and install my fonts from there, like JetBrains Mono, and the Nerd Symbols Font as well.

**Kevin Ball:** What's Kitty?

**Nick Nisi:** Kitty is a terminal. Sorry, I was just reading down my list, and it's a terminal emulator for all platforms. But I shouldn't have said it, because I don't actually use it anymore. And I might not use it anymore. Because I've found another terminal emulator that I really like.

**Kevin Ball:** Okay. What are the criteria by which you're judging your terminal emulators?

**Nick Nisi:** It's gotta be fast. That's why I don't use iTerm 2 anymore, because if you spend all day in the terminal, and specifically - I know I'm gonna get a lot of hate for this, but specifically if you use ligatures, iTerm 2 becomes very slow, because it's not GPU-rendering that anymore... And so there's other terminals; specifically, there's Kitty, Alacritty, and WezTerm that are fast; they're GPU-accelerated, and they work really well. And in the case of the one that I switched to, which is WezTerm, it's got a lot of nifty things that it just does by default out of the box, and I really liked that. Specifically, one thing that I thought was awesome with Kitty, that I didn't see with Alacritty, was the ability to use one font, but not have to patch that font to add in Nerd icons... Because that's just an annoying process, you know. And so I wanted to be able to have a different font for all of the Nerd ones. And with Alacritty, last I checked you couldn't do that. With Kitty, you can just set a symbol map for all UTF-8 symbols in this range, use this font, and then everything else use a different font. And you can do a similar thing in the settings of iTerm 2 as well. In WezTerm, the Nerd fonts are just built-in. So when you try and use those symbols, they just work. And you can install your own over it if you want, but by default, it will fall back to not just rendering like a blank square, it will render the font. And that's really awesome. So it just takes some of that mental load of having to maintain that configuration out, and I really like that.

**Kevin Ball:** Okay, I'm going to ask the dumb question - what are Nerd fonts?

**Nick Nisi:** \[05:53\] I'm glad you asked. So a lot of times, if you look at someone's setup, their vimrc, or Vim running, or anything like that, you'll see like the file drawer on the left side, usually, and in the file drawer you'll see things like a folder icon. And they might have several different versions; they might have like a folder icon, and an open folder icon. And then if they're working in like a React project, all .tsx or .jsx files might have the React symbol next to them. So these are like basic things that you'd expect in a GUI editor like VS Code. Well, we get that by placing a symbol right there, and then using a special font that has been patched with these special characters to actually render that in the terminal, so that we get all of that GUI goodness textually.

**Kevin Ball:** And you can map your own as well, you said?

**Nick Nisi:** You can map different symbols to different things, and you probably could modify your own, like create your own custom font and do that. I haven't done that.

**Kevin Ball:** I'm just wondering, can you do essentially slackmojis for your terminal, where it's just, whatever image, you put it in there, and there you go?

**Nick Nisi:** No, it can't be -- like, they're not very sophisticated images in terms of having a lot of color, or anything to them like that. They're very much like a single color, and relatively simple. But it adds a lot for me, being able to look over on the left and see "Oh, there's a TS file", or "There's a Node modules directory", or whatever. And it kind of helps to just visually separate things out.

**Kevin Ball:** Okay, cool. So that's our terminal emulator; you're doing that. And you mentioned you have zsh config, and you've got a bunch of Bash scripts. Let's work our way one step up - so how are you configuring the interactions in your terminal?

**Nick Nisi:** Sure. Well, before I switch off of WezTerm, I want to say one more thing that really drew me to that editor, or that emulator, and that is the ability to style it in different ways. All of these terminal emulators have different themes built in. Kitty has like a whole kitten framework, where you can install themes from it, and all these plugins and stuff. With WezTerm, it's got a really easy configuration that's in Lua, and you can set gradients, and stuff. So I've got a very dark terminal, with just an ever so slight blue gradient, that kind of happens in the middle somewhere... And it's super-subtle. Like, I don't want it to be something that you notice all the time. But it's there, and it's really cool.

**Kevin Ball:** Alright...

**Nick Nisi:** Okay, so Z shell - yeah, I started using that before it was the default on macOS. Now it's the default, and now I feel I'm fine with that decision.

**Kevin Ball:** You don't feel like you need to find some other shell...

**Nick Nisi:** "Now I need to move to Fish!" No, I just have configured a lot of the good fishiness over in Z shell. And I guess I'm there for now. I really like it; I haven't really looked at switching. But specifically, the things that I like about it are the ability to have like an async prompt... So the way that I separate it out is I just want it to be pretty minimal with just the current path that I'm at. I don't need to know that I'm Nick Nisi, at whatever the name of this computer is; all of that stuff is --

**Kevin Ball:** You're able to track your identity. You don't have multiple identities you're swapping between as you move around.

**Nick Nisi:** I might, but they're very good at keeping track of themselves. \[laughs\] No, I just want to know where I'm at in the directory structure; like what project I'm in specifically. And I have that on one line; you can have multiple lines for your prompt. So I have that on one line, and then below that I just have like a single - I think like a triangle character, and that's where I'm going to start typing.

But then I also take advantage of the rprompt, which is the ability to put something on the right side. And over there, I have that asynchronously updating with my Git status. And the asynchronous part is important, because it's doing a lot of like checking every time, of like "Oh, git diff, see if there's anything changed, what's changed", and then it relays that to different Nerd symbols that it will put up there... So like a plus/minus if I have modifications, an up arrow if I have commits that I haven't pushed, a down arrow if I have commits that I haven't pulled, and an up/down arrow if I'm out of sync. And then there's other ones as well. Like, if I've deleted a file.

\[10:09\] But all of that can be slow, and it can slow down your terminal tremendously. But luckily, it's pretty easy to create a way to asynchronously hook into that and update that after the script has run, so that you don't slow down the terminal at all, and it will just come in when it's ready.

**Kevin Ball:** Alright. So okay, we're moving up, so now you're in Shell. What different -- you mentioned you install RipGrep... And what other shell commands are core for your configuration?

**Nick Nisi:** Yeah, RipGrep is core, I think, because that's the way that I search for things. And I use that in and out of Vim, and it's just a really nice enhancement to grep, that's very similar to \[unintelligible 00:10:50.03\] or the Silver Surfer... I can't remember what it was called. But anyway, it's very similar to those, where it's like a better grep, that adds in the ability to do specific filtering. I can say, "I want to RipGrep inside of all of the TypeScript files for this string", or whatever. And then I can give it like a path to only this subset of files, or whatever.

But you can also do like a -T flag, and I can say, "I want to do all lowercase t tsfiles, and then -T for spec", and that means look for all TypeScript files, but specifically ignore all that end in .spec.tsx. So I don't want to look in tests, I just want to look in source files, and then find this. And I can do a lot of that. And that spec part is not like a standard thing that you can search for, but luckily, RipGrep has a config file that you can create where you can create your own file types in there. So I can say spec equals any file that ends in .spec.ts, .spec.js, .spec.tsx etc. and I can really hone in on what I want to specifically be able to filter on, which is really nice.

Another tool that I use, it's called fzs, or -- it's basically a fuzzy finder. And I don't use it directly, I guess. I have it installed and configured with my shell, so that when I'm typing something, like a command, and I hit Ctrl+T, I can fuzzy-find from there. So if I need to find like from the current directory that I'm in a specific file to give the file path to that, to some command, I can just hit Ctrl+T and it will let me fuzzy-find recursively down the directory structure from where I'm currently at, to find that path... Which is really nice and easy to be able to fill in those paths. And then at the same time, I can hit Ctrl+R to -- I'm doing the math in my head, because I have it mapped to Caps Lock...

**Kevin Ball:** Oh, yeah, yeah, yeah... I also find -- like, my fingers have interpreted things and my brain doesn't even know what it is anymore. So there'll be things where I'm like "What is that? Okay, I've got to actually do it." And then "Oh, that's the key combination \[unintelligible 00:13:06.13\]

**Nick Nisi:** Yeah. But that is an important thing. The first thing I do on any computer is map Caps Lock to Control, and I just do that through the MacOS settings. But anyway, I'm hitting that, and if I hit Ctrl+R, then that lets me use fzf to fuzzy-find within my terminal history. And so I can go back and find a specific command that I ran... That's super-helpful when I'm running like Docker commands, or other ones, where I just -- it's a long string of stuff and I don't remember exactly, so I'll just fuzzy-find for it and get it.

**Kevin Ball:** I want to dive into that. So you use Caps Lock for your Control? What do you use for Escape?

**Nick Nisi:** Escape.

**Kevin Ball:** Alright. And you're a Vim user, so your pinky must be like long.

**Nick Nisi:** \[13:54\] It is, yes. I'm also a tmux user, and I remap their prefix from Ctrl+B to Ctrl+A, so then it's Caps Lock+A, and they're right next to each other, which makes it really easy. But yes, that's another thing that I observed about myself, I guess. I didn't even really realize it, but when I type - I can't believe that I'm going to admit this on a podcast... But when I type, I don't have to look at the keyboard at all, and I'm pretty fast. But for a majority of it, I'm only using on each hand my thumb, my index finger and my middle finger.

**Kevin Ball:** What?!

**Nick Nisi:** I know... It's embarrassing.

**Kevin Ball:** Like, thumb, index, middle finger. So you're like basically T-Rexing it, except with your thumbs as well.

**Nick Nisi:** Yes. \[laughs\] I just lost all credibility, I'm sorry...

**Kevin Ball:** So then how much of your keyboard have you mapped in different ways to, shall we say -- how would I put this...? Um, cover for your handicap there of your missing fingers?

**Nick Nisi:** \[laughs\] That's it. I'm pretty fast with it, but... Yeah, I don't know. I need to learn. I need to take the time to do it. And I even want to play with one of those ergonomic, like, super-split keyboards, where they're on each side, and your hands can be six feet apart, and you just start typing... I want to do that, and I want to be good at it... So I just need to actually sit down and do the hard work of getting into that data flow, where you're not even thinking about the keys anymore.

**Kevin Ball:** So you brought up tmux. Are we ready to move up to that layer in your tool chest? Or are there more command line tools that you rely heavily on?

**Nick Nisi:** I think that those are probably -- yeah, those are probably the biggest ones. Oh, the other one that I guess I would throw in there is one called Zoxide. It's a really cool tool that just lets me hit Z instead of like CD. So when I open up a new fresh terminal, and I want to CD into my project, I would have to like know, "Oh, I put them in my home directory, in a /developer directory", and then inside of whatever project I'm working on, inside of that. And I'd have to know all of that. But instead, I can just type Z, and I can type z dot, and it will go look through my history of z-ing around and see "Oh, last time you did that, you accepted going to your dotfiles, which is in this directory", and it just takes me there. So it's just like a shortcut of like --

**Kevin Ball:** Oh, interesting... Because I will write aliases into my Bash, or zshrc, whatever. But this is basically like dynamic aliasing for your directories.

**Nick Nisi:** Yeah. Exactly.

**Kevin Ball:** Interesting.

**Nick Nisi:** It's really nice.

**Kevin Ball:** Alright, so I'm up to three tools so far that I'm not using out of your configuration yet, that I need to learn... Let's see how many we get to by the end.

**Nick Nisi:** Awesome.

**Kevin Ball:** So for those keeping track, the ones that I've definitely -- I need to get up on RipGrep. I think that looks great. I think I am using some amount of fzf, fuzzy finding, but I need to like dig a little further into that... And Zoxide now, which - that sounds like it's probably easy to learn, and immediate benefits.

**Nick Nisi:** Yeah. You set it up and you forget that it's there. All you have to do is remember to press Z instead of CD, and you're there. So it's really easy.

**Kevin Ball:** Amazing,

**Break:** \[17:15\]

**Kevin Ball:** Alright, so moving up into tmux then. Let's maybe quick do the breakdown of tmux for those who aren't already drinking the Kool Aid of the tmux world...

**Nick Nisi:** Sure. So tmux stands for terminal multiplexer, and what it does is it's an application, like a TUI, a terminal UI application that you can run inside of your terminal, and when you run it, effectively nothing changes; you just get into another space, depending on how you have it configured. But now you have these superpowers where you're actually running a terminal inside of tmux. And tmux gives you windowing ability, and it gives you panes. And so depending on how you have it configured - I actually have mine configured to not show the menu bar, the tmux status bar, until I have two windows, and then it will show. But once you get in, you'll have that the menu bar, and that will show you like a window, and then you'll have a single pane inside of that window, and you can do things. And then you can hit different prefixes or commands that you set up in your tmux config to split that. So if you needed to have your editor running in one terminal, and you wanted to open another terminal to run your tests, for me I just hit prefix, which is Caps Lock+A, or Ctrl+A, and then pipe. And that would open a vertical split. So on the right side now I could just start running tests, and I could see them over there. If I wanted a horizontal split, I just hit prefix dash, and I get a horizontal split. And I can have infinite splits within my windows. And then if I want, I can move and have another set of windows, and just switch between those.

**Kevin Ball:** \[20:15\] And you can copy and paste between them, and do all sorts of fun stuff, without your fingers ever having to leave the keyboard, unless you're only using three fingers on each hand, for some reason...

**Nick Nisi:** I'll never live this down...

**Kevin Ball:** I'm gonna tease you about it forever. \[laughs\] No, it's phenomenal. And that prefix is configurable...

**Nick Nisi:** It is.

**Kevin Ball:** ...because like, I already had -- my fingers were already pre-programmed with Ctrl+A for other things from Terminal days... So I've remapped it to Ctrl+G \[unintelligible 00:20:39.13\]

**Nick Nisi:** Ah, nice. By default, it's Ctrl+B. So that's just a little farther away, especially when you're only using three fingers... So yeah, it's -- Ctrl+A is the prefix that Screen uses, which is another competitor to tmux. And I like that prefix better, so I use the Screen prefix.

**Kevin Ball:** I remapped it when I was using Screen, too.

**Nick Nisi:** Oh, nice. But yeah, it's a really great way -- and this is really like starts getting us into what TJ DeVries would call your personal developer environment. I'm running Vim, and Vim and Neovim both have like built-in terminals, and you can do all of this stuff now straight in vim. But having it kind of outside of that is really nice, because I get to configure, and I can have Vim just be like a pane in this custom, bespoke editor that I'm creating. And then I can have splits that I open... I tend to just open them dynamically, but you could script them out to say, "When I'm working on this project, I want a 60% view in here, and a 20% vertical terminal, and then I want a small one at the bottom. And I just have these three that I can go through..." You can script all of that out. I'm more fluid, and I'm just like "Oh, I need one, I'll make one." And so I do that.

I have my prefixes set to like switch between panes. I just hit prefix, so Ctrl+A, and then H, J, K or L to move between them all, which is like really easy... And the other really cool thing that you can do with it is you can hit prefix+Z to fullscreen one of the panes. So it'll take up the full screen and hide the rest of them. And they're still there, and you can just like switch back to them, or hit prefix+Z again...

**Kevin Ball:** And you can resize them dynamically, and all those things.

**Nick Nisi:** Yup. And I'm totally not afraid to have mouse mode setup in everything, so I will just grab a border with my mouse and start dragging it; totally fine with that.

**Kevin Ball:** The ability to move around these panes and all of that just using the keyboard and stuff is honestly -- that's the thing that has kept me from trying to switch to VS Code. Because in VS Code - like, you can set it up with your Vim key bindings for within a file. But navigating across different files, and moving things, and like "I want these two files visible, and I want to swap between them, and then I want to do all these different things", like, you've got to bring your mouse into play. And why do we want to use our mouse? Mice are for -- that slows you down.

**Nick Nisi:** Yeah. Yeah, definitely. I tend to have -- so I use three fingers on the keyboard, and then on the right side, I've got an Apple Magic Mouse. And I just use that. I'm totally fine with it. I don't use it a ton, so maybe I don't realize the ergonomic issues that this mouse has... But then on the left side, I've got an external Apple trackpad. And so just depending on whatever hand is free, whatever three fingers are free, I just moved to the right or to the left and use that, and I'm pretty good with using the trackpad with my left hand or my right hand, and same with the mouse.

**Kevin Ball:** Three fingers \[unintelligible 00:23:51.10\] You know how athletes that have a lateral sport, like it's baseball, or whatever, they have one arm that's super-buff, and the other one is like --

**Nick Nisi:** Yeah. \[laughs\]

**Kevin Ball:** \[24:02\] But I'm just imagining your hands with like your thumb and your first few fingers like really muscular, and then these atrophied ring and pinky fingers.

**Nick Nisi:** Yeah. \[laughs\] I'm trying to think if there's anything that I really use my pinky... I mean, I do -- no, I don't. Nevermind. It's hard, because I don't look at it, so I have to look and like pretend to do something to actually see...

Another cool thing about tmux - and this is like one of the best parts. So I guess I'll say this, and then I'll get into the way that I use tmux. But the cool thing is that your terminal then is running inside of tmux, not inside of your terminal emulator. And it doesn't happen very often anymore, but one thing that used to be super-common in the past was your terminal emulator might just crash, or you might accidentally hit Command+Q and close it. And you just closed Vim, and then you've got all these swap files, and all that stuff... The really cool thing with this is if you kill your terminal, if your terminal crashes, whatever - oh, well, open up a new terminal, and hit tmux attach, and you're right back. Everything is just as you left it.

**Kevin Ball:** Yeah. It's a client server setup, right? So the terminals themselves are running on a server that's just kind of happening on your computer, and then what you're seeing in your terminal itself is a client to that, that's attached.

**Nick Nisi:** Exactly.

**Kevin Ball:** And if so if it dies - I mean, your terminals are safe. They're on the server.

**Nick Nisi:** Yup. And that enables me -- like, it's not associated with any specific terminal window, and so one really cool thing... Well, two things, actually. If you're ever in a situation where you're presenting, like up on stage, you can actually attach to the same tmux session twice. And so you could have like on your separate monitor, which is the projector, a terminal window, and have another one locally, and just look at the one on your computer and not have to like look back behind you and see what you're typing, and all of that. You can have them identical, and mirrored, and just see exactly what you're doing... And that is actually another really cool way to pair with people. I've never done this, but in theory, it's awesome... Because you could just have someone SSH into your machine, and tmux attach to the same thing, and then you're both editing in the same place. The downside of it is even if they're a Vim user, which is like less and less likely, it's such a personal editor, with personal key bindings.

**Kevin Ball:** Yeah, you configured it your way... And that configuration lives on the server. You can't have different clients that are configured a different way talking to the same.

**Nick Nisi:** Yeah.

**Kevin Ball:** But this environment - I remember, years ago, probably a decade ago now, I may or may not have spilled coffee on my laptop, and did not have a laptop, but I had a Chromebook. And so I set up a little virtual machine somewhere, so I could continue doing development while I got my main laptop repaired. And being used to "Everything lives in your terminal, and you move around" meant that that was not that much less productive than having a local development environment. The biggest challenge was dealing with static assets, trying to add static assets, and things like that... But yeah, I mean, you can do this in a virtual server somewhere and connect multiple people at the same time. That's pretty neat.

**Nick Nisi:** Yeah. And just that ability - and this is something that I actually use a lot more... As far as personal machines go, I only have a desktop Mac; I have a Mac Studio, which is not very portable, but I do have an iPad. And there are terminal emulators for the iPad, where I can SSH into my studio, and then hit tmux attach, and I'm right back to the same exact setup on my iPad.

**Kevin Ball:** Now, do you have a keyboard, or somehow typing with three fingers means typing on the iPad feels okay?

**Nick Nisi:** Yes... No, no, I do have the keyboard Folio case, or whatever; their magic Keyboard case... Which is fine, except it doesn't have an escape key, and on my iPad I also mapped Caps Lock to Control, so I need to...

**Kevin Ball:** So how do you get out of Vim? You're stuck, you can never quit.

**Nick Nisi:** \[28:05\] I actually map -- so Ctrl, and then open square bracket; it will send to Escape. But also I have mapped in my dotfiles JK. if I hit JK while I'm in insert mode really fast, that escapes as well.

**Kevin Ball:** "Just kidding, I'm out of here."

**Nick Nisi:** \[laughs\]

**Kevin Ball:** Alright, anything else on tmux? You wanted to dive into how you use it then.

**Nick Nisi:** Yes. So there's different ways that you can use it, and I guess I didn't realize this for almost a decade... Because I just use it the way I use it, and that's it.

**Kevin Ball:** I may have still not realized this...

**Nick Nisi:** \[laughs\] But the way I tend to do it is like if I'm working, you know, for a client, or -- I was a consultant for a lot of years, so I had like different clients that I'd work with... And I would basically open up a new Tmux session for every client. And every client might have -- I might have multiple repositories that I'm working in, and so each individual repository would end up being its own window inside of that client session. And then I could have splits associated with that. And I could always fullscreen them, or not, within each window. But I was recently talking to a guy named Josh Medeski, and he was showing me his setup, and he actually runs a single tmux session per project. So if he was working on his dotfiles, that would be a single tmux session. And he has it scripted out to where it opens up immediately, one window that is the Vim window, and he uses a Nerd font to put that as the name, so it looks like the Vim logo... And then it would open up like a Lazygit in another window, like just a terminal for him to run commands in another window, and he could switch between all of those. And that was really interesting, just the different ways to think about doing it, how you break it down. And you could have a lot of structure to it, or you could have no structure, or you could just kind of on the fly configure it, or split and create new sessions in windows as you go.

**Kevin Ball:** Yeah. Well, I think that's what makes this interesting because as we've been talking about a lot of these - like your zsh setup, your tmux setup; we're probably about to get into your Vim setup... Like, these are general-purpose tools that you can configure to suit you.

So let's talk about vim. Or Neovim. The potential elephant here... You know, the editor \[unintelligible 00:30:26.25\]

**Nick Nisi:** Yeah.

**Kevin Ball:** The bar against which all of these newfangled editors try to strive and fail.

**Nick Nisi:** \[laughs\] Yes.

**Kevin Ball:** Can you share how you have configured Neovim, and how it works for you?

**Nick Nisi:** Yes. So my repo is over 10 years old now, and it's got a lot of history along with that... But I did switch probably in 2016 or 2017 to Neovim from straight Vim, and haven't looked back. It's really, really nice. Specifically, once you get your head around Lua, you never want to write vimscript again. Lua is so nice, and it's such a fun language. And now that I know Lua, I can also configure WezTerm with Lua. And it is a very portable language, that is used in more places than just one place where vimscript is used. So it has a lot more incentive to be learned, rather than the other one.

But yeah, I have gone through a lot of iterations about how to properly configure Vim, and specifically how to lay everything out. But I do -- like, in my dotfiles, I put it everything inside of a config, and then for Neovim, it's in an nvim directory under that. And that's the xdg config home. And so when my dotfiles get installed, the installer script will put everything from the config directory in there, it will symlink that into a .config directory in the home directory, and that's how I tie into the system and make sure everything is where it needs to be. But that's really nice, because then everything just exists in there. You create an init.lua, and your code exists in there.

\[32:09\] I wanted to check... I have 2,600 lines of code in my dotfiles directory, and almost 1,500 of that is Lua, with another 150 being vimscript. So a significant portion of my entire setup is dedicated to Vim, specifically Neovim. Yeah, it's really great. What do you want to know about the config?

**Kevin Ball:** Well, I guess first off, let's talk about -- especially for people coming from VS Code, or something like that... What is going to feel similar in terms of configuring Vim, versus how you might configure VS Code and put plugins in there, and what's going to be very different?

**Nick Nisi:** Yeah, it's going to be very jarringly different. I've only ever used VS Code very sparingly. I've never really dug into the config, and all of that. But it has a pretty solid GUI around like their JSON configs for everything, which is really nice. And then they have the marketplace that's just a tab within the editor, so you can go install plugins, and all of that. We have a similar thing, in that it's not at all similar in Neovim. First off, Vim doesn't really come with its own plugin manager; you have to select one, and then install it. And there's ways -- like, the one I'm using is called lazy.nvim. It's a really nice, new plugin manager, that's all written in Lua. And the way that I install it is it basically installs itself. It does like a quick check to see if it already exists. And if it doesn't, then it goes and fetches it, and then it will maintain itself -- it'll use Lazy to maintain Lazy and update Lazy, which is really cool. But then it gives you a really easy way to just configure a table in Lua, with all of the plugins that you might use. So it makes that really nice and easy. And I think I have 70 plugins installed... Yeah. I'm not afraid of plugins.

**Kevin Ball:** Well, so that's too many for us to break down one by one. Do you want to give us the classes of plugins that you're using?

**Nick Nisi:** Yeah. And just to clarify myself, it's 83. I have 83 installed.

**Kevin Ball:** \[laughs\] Alright, there you go.

**Nick Nisi:** So yeah, I have Lazy - that's like an essential one, obviously, because it's how I configure all of the other plugins. And then from within there, I've got pretty much like the essentials one, and this one has had a lot of iteration for me around it. Neovim comes with its own language server client, so it knows how to talk to LSPs, the TypeScript TS server. There's a Lua one, there's one for Rust, there's one for all sorts of different languages. There's one for Tailwind to help you autocomplete Tailwind classes, which is just - it alone is winning me used to make me adopt Tailwind everywhere, because it's just so nice. It makes it so nice.

But anyway, the main thing there is like you want to have all of this intelligence that you get from VS Code out of the box. And Neovim has the capabilities built in, but they have a separate plugin that they maintain called LSP config, that you use to configure the LSP. And then this way you can tell it what language servers you want to use, and how to configure them, how to send things to them... When they receive specific messages, you can override what they do with that. So if it's asking for like formatting, or if it's asking for a signature line, you can get in there and you could call the original thing and modify it in some way, or do your own thing... You can really tie in at any level.

\[35:45\] But the one thing that the LSP config does not do is it does not actually install any of the LSPs for you. Those are separate things, usually like Node modules that you have to install, like TypeScript, or any of those. And so you need a way to manage that. And for that, there's another plugin called Mason, that will manage your language servers and your formatters, and your linters, and all of that. So you can configure that to go through and install - and I can just type :Mason and see all of the installed language servers that I have. And it will also show me - like, right now, Lua Language Server and Rust Analyzer, and YAMLlint all have new versions available, so I can go update those. And it can do that all on its own. I just hit U to update, and it's going to update all three of those. And that's a really nice and easy way to do that.

But then another thing that you probably want from VS Code is completion, right? You want to be able to start typing and have it know what signature this function has, and help you to autocomplete that in different ways, or just show you "Oh, you're trying to access this object? Well, here's the properties that actually exist on that." And so you can be assured of what you're actually using. So for that, you configure nvimcomp, or CMP, which will give you completion, and you can set up specifically how it does all of that completion, and what sources it's going to pull from. You can have it pull from the LSP, like what the LSP is returning, you can have it pull from other places, like file system; if it looks like you're typing a file path, start completing a file path from where you're at, or any of that. You can have a complete from other buffers that are open, and then just from -- there's actually one for Tailwind as well, to help you autocomplete Tailwind classes. So that's really nice. But all of that is configured through Mason.

So Mason manages all of that, but then you can also have Mason tie into the LSP config, and then there's another plugin, another set of plugins called null-ls. And what null-ls will do is it will take things that aren't language servers, and it will expose them as language servers, so that you can use them through the language server protocol thing. And that's things like ESLint, that's things like Prettier... And so you can set up Prettier to be the formatter. Whenever you call the format function from within the LSP, send that to Prettier, and do all of that.

So that has been the biggest source of change and confusion for my setup specifically in the last year, probably... It's like, I want the LSP. And I had it configured one way, and then it's like "Oh, I don't want to maintain all of these language servers, so I want Mason." But then "Oh, what's the difference between Mason and LLS? Oh, but then what's the difference between Mason and LLS and LSP config?" And then there's plugins that tie them all together, too. So that's how you get to 84 plugins.

**Kevin Ball:** Right... \[laughter\] So I think what's interesting here is kind of what a rabbit hole it is, and how far down you can go, and you can start digging deeper and deeper into fine-tuning your configuration. So let me just kind of ask - if you were to sum up the amount of time you've put into configuring this, as compared to the time that it saves you, what's winning?

**Nick Nisi:** Oh, definitely the time I've put in configuring this. Absolutely. And I'm ruined, I can't use another editor. I've tried, but I'm stuck here... And I really like it. It does sometimes get really frustrating, when -- you know, things change, plugins change, and then it's like "Oh, that's deprecated. That no longer exists", and you want to start your day coding, but you ran Lazy update, and now you can't even code, because your editor is broken, and no one's going to help you fix it, because it's so bespoke to you. That's where it can start getting really frustrating.

\[40:01\] But overall, I spend -- the other funny thing that I say a lot is I spend a lot of time trying to make Neovim be VS Code. And for the most part, it works really well. It's much faster, and I get what I want out of it. I even have -- like, another big plugin that I use all the time, and have for over a year, is Copilot.nvim, and it's an official GitHub plugin that gives me Copilot right within Neovim. And that's really nice, because then I get some of those features.

But I will say that one of the things that really has me question whether like a terminal UI editor like this can keep up are specifically all of the AI features that are coming to VS Code. Or from third parties that if they want to get their stuff in front of you -- like, I was just listening to the Changelog Anthology episode from, I think, OSCON, where they were talking to someone from... What's that? I can't remember the name of the company. Sourcegraph, I think. And they were talking about some AI thing that can be -- it can know about your code without being specifically trained on your code, or your documents... And so it's like all completely private, and that's really cool. Well, they did mention specifically that a Neovim plugin would be coming, so that's cool... But Will everybody have that? That's like a big thing.

**Kevin Ball:** I mean, I think there's enough weight in the community... At least for the next 20 years, until we all die off; there's all of us old-school hackers who are stuck in Vim, but we've managed to accumulate enough influence that these companies want to cater to us a little bit, so we talk about them on podcasts and yeah, and that sort of thing. \[laughter\] Keep that rolling. We need a new generation of Neovim users.

**Nick Nisi:** Yeah. And I totally think that it's capable of it. Another thing that you see a lot, or that's like coming down - I think in GitHub X there's Copilot Chat, where you can actually chat with your codebase, and have a ChatGPT-style interface to that. And what Vim has, if you use -- one of the main plugins that I use is called Telescope by TJ DeVries, and it's a fuzzy finder that uses RipGrep under the covers, or I configure it to... But it opens up a floating window right in my editor. And you could have similar floating windows open, that have chats directly to some AI or another. So I think that it's totally capable of it, and it's just gonna be really interesting to see how far the community pushes things like that.

**Kevin Ball:** So speaking of tools that have plugin interfaces, and that are very community-driven, another one I've heard you talk about is Obsidian.

**Nick Nisi:** Yes.

**Kevin Ball:** Do you want to dive into that?

**Nick Nisi:** Yeah, absolutely.

**Kevin Ball:** Before we get into there, one thing we haven't talked about, that I don't know if a Nick Nisi tooling interview would be complete without, is \[Amal Hussein\] \["His beloved TypeScript."\] Do you do anything other than "That's what I use for software"? Is there any configuration I should know about, that you're doing here?

**Nick Nisi:** Not really... Really, the only thing that I do that is custom, that actually TJ helped me set up when I was on his stream, his Twitch stream once, is this custom TypeScript LSP override that I do. If you're like saying 'go to reference', or go to the definition of a file, so I hit GD for that, if I'm on a function and I want to go see how that function is implemented... But it's like a third-party function, or maybe the types are separated, or something like that... What it will do is it'll open up a quick fix window that has everywhere that that's listed. So it could have the function definition, but then it will also have the type definition for it, and all of that. And I usually don't want that. So if there's more than one solution, I just ask it to give me the first one, which is usually the actual definition of it, and not the types. But that's really the only TypeScript-specific thing that I do, I think.

**Kevin Ball:** \[44:15\] Okay. Alright. So, Obsidian.

**Nick Nisi:** Yes. It is an amazing tool. I have always strived to be a good note-taker, and to have a lot of well thought out notes... And I read the book "How to take smart notes", which talks about the zettelkasten system, and all of that... And I really came around to liking that, specifically for book notes, and things like that; notes on something that I'm studying, or getting something out of. And that's a really cool framework, but I have played around with several editors. I think definitely the first one out of college that I started using - or maybe inside of college - was Evernote. I think everyone used Evernote at some point. It was a pretty good text notes app... But the thing that I never could get my head around, I just hated, was the WYSIWYG style of it. I just don't like WYSIWYG, because if you're moving around, you're trying to go fast, and you get caught in some formatting glitch, where it thinks that you still want italic or not, it's just so annoying. I hate that.

So I moved over to one called Bear, I think after that... And then I looked at Quiver. Quiver was amazing. It was specifically a Notes app for developers, but they never really had - last I checked - a mobile version. And I was like "I want my notes available on mobile somehow." And so then I got caught up in Notion. And Notion is really cool. It flips everything on its head, and everything is a table, and you can have tables inside of tables, and tables that relate to other tables, and build these views out of those tables to have different pages, or different dashboards for how you look at them... So cool. But the problem is, it's in their whatever proprietary format how they store all of this. So if you're trying to export it, it's a nightmare. And so I really wanted something that I could have more control over, especially if - you don't know if a tool like Notion... Notion's gotten a lot more popular since then, but you don't know if it's gonna die ever, and I don't want it to, but if it did, there goes all your notes, right? Because they won't export really well.

So then I started hearing about this tool called Obsidian. And I heard "Oh, it's just all markdown files, and that's really cool. The only problem is it's really ugly." And I'm like "Well, that's out. I don't want to do that. I'm a Mac user, everything has to be beautiful and immaculate." \[laughs\] Get it im-Mac-ulate...

**Kevin Ball:** There's gotta be a sound effect for that... \[Divya\] \["You did not just say that."\]

**Nick Nisi:** \[laughs\] And so I didn't look at it for a long time, and I kept going with Notion. And then finally, I just got so overwhelmed in the -- I got to the point where everything in my Notion database was a single table, and I just had different views on that table for how I separated things out, or looked at things. But effectively, everything was in one table, and it was unmanageable. And so I was like "Let me just look at something else", and I finally brought up Obsidian, and I think at this point they started supporting custom themes for it, and so you could make it look a little more pretty. And I just fell in love from the start, because it is 100% markdown. You create a vault. A vault is a folder on your Mac somewhere, or on your computer, and inside of that folder is a .obsidian directory. And that's how it denotes itself as a vault. But every file that you put in there is now part of your vault. When you create a new file in Obsidian, it puts a markdown file in that folder. And you know what you can do with that? You can back that folder up to Git, you can sync it with Dropbox, you can put it in an iCloud, you can use their syncing system, which I actually do use... And at the end of the day, it is a folder of markdown.

\[48:13\] And you know what else you can do with that? You can script it outside of Obsidian. You can use things like Hazel to go find -- or like automatically place notes in there; to go clean up notes that maybe are titled "untitled". That's what I do. Because I accidentally created them, or created them and then didn't actually use them... And so it just cleans them up. You can run scripts in them, you can add your own scripts... You can do anything like that, because it's just a folder of markdown files. And then on top of that, you can add plugins right within Obsidian. There's third-party plugins available for that.

**Kevin Ball:** Do they use Lua?

**Nick Nisi:** No, they use TypeScript.

**Kevin Ball:** Ah, even better.

**Nick Nisi:** Yeah. I have 52 plugins inside of Obsidian. But they're all pretty basic plugins, for the most part, and probably 90% of them I don't actually use, but I tried them and haven't uninstalled them yet... But they're really nice. And the way that it does its linking, or the way that it really kind of pushes you into it - you don't have to do it this way, but the really nice thing with Obsidian is pretty much everything that I put in there has no structure to it. I don't put specific files and specific folders, or anything like that. I just throw them in there. And they're linking ability is so good that that is kind of how I structure everything. So if I need a collection of notes, I'll create a document that has links to all of the other notes, and that is like a collection that I have.

And then they have this graph view that will show you like a constellation of all of the notes, and how they're actually related to each other, and you can view it from the perspective of an individual note. "So this note connects to these five notes." And you can see it right there. I have that just automatically every time I open a file in the right sidebar at the bottom; it just shows me the local graph, which is really cool. So I can immediately see what's all connected to it, and how this idea relates to that idea, or this action item that I took in this meeting note relates to Docker, or whatever I'm talking about. So that's really cool, and a nice, easy way to distort the notes without the mental overhead of "Where does this note go? What does it look like? How does it fit in?" Just create them and throw them in there, it's all good.

**Kevin Ball:** Alright, so we've talked about quite a bit of tooling, and we've come up to this layer of note-taking. We started very down in the what are the command line tools you install in your shell, and all of that, and kind of worked our way up... Any tools that are a key part of your daily or weekly process that we haven't talked about?

**Nick Nisi:** Yes, absolutely. And I'm glad you asked, because I was gonna say - once we broke out of the terminal, but the terminal is in a window, and now we moved over to Obsidian, which is in another window... But how do I manage those windows? I've had a long, fun journey with that, and I've used tools like Moom, and - I can't remember the names of all of the other ones that I'ev used; Magnet... All of these snap-to-grid window managers, that everyone creates for Mac, because Mac won't ship their own... And I finally settled on one that I actually really like a lot... And it's called Yabai. Yabai is -- I don't know if it stands for anything, but it's a tiling window manager that works specifically for macOS... And it's really nice. You install it from Homebrew, and then you say "brew services start yabai", turn it on, and it just starts sorting your windows, and puts everything in a perfect graph. And then you can configure that with Lua, to say like "Oh, in every window I want this amount of padding between them." So you have like nice lines between everything. And when you create a new window, the other windows will resize to place that window in its own box, and you can move them around, and you can do all of this from the keyboard. And when you close a window, the other windows resort to fill back up the space. So you're always using all of the space allotted to you, and as windows come in and leave, everything is readjusting and sorting itself, which is really cool.

\[52:26\] There is only one downside to it, and I'm actually not using it, but there's a lot more that it can do, where it can do like automatically moving windows from one screen to another. I actually have three screens here, so that would be really nice, but I can't use it... And it can do things like - it can shade the windows that are not active in different colors, so that they kind of fade out, and you're more focused on the window that you're actually interacting with. I can't use that either, because to be able to do that, it would have to hook more deeply into the dock code, the macOS dock code... And in order to do that, you actually need to disable system integrity protection on your Mac. And I'm not brave enough to really trust this app to do that, so I just don't do it.

**Kevin Ball:** You don't want to know the chaos that is my windows... I don't have a tool for this right now. I might have to try Yabai. But I understand that hesitancy...

**Nick Nisi:** Yeah, yeah. But it's really cool, being able to move things around like that, and sort things. Another tool that I've been using, that is kind of a switch-up over the last, I guess, decade... I have been an Alfred user for probably 10 years. Alfred's like a command space, fuzzy find, open naps -- like, that's the main thing you do, you hit Command+Space, and then type whatever. By default on Mac, that opens Spotlight, and then you can open things. But Alfred gives you a little bit more. And just recently, I made the switch to one called Raycast. And Raycast is actually pretty cool, in that it does all of that, but all of the plugins - there's a lot of plugins for it - they're all written in TypeScript, and so it's really easy to like dig into them, and to use them, or create your own... Which I haven't done, but aspirationally I like that. And I have plugins for it that it's connected to GitHub. So I can just like pull up a quick list of my PRs, or I can see the status of my PRs without actually having to open it. I can just see it in a floating window quickly. Same thing with JIRA, same thing with Obsidian. You can quickly tie into all of these tools, right from one tool. And then it's got a lot of built-in stuff as well. I used to use TextExpander, but this has its own kind of snippets built in, it has a clipboard manager built in... It has window management built in, so that you can like set up key bindings to automatically move windows around if you're not using something like Yabai... So that's really cool. And in the latest one, like as of a couple of weeks ago, they have a Pro version now, which is appealing to me specifically because it syncs all of the settings between Macs, and so I can have the same settings on my work Mac and on my personal Mac. But then it also has a built-in AI too, which is just ChatGPT-3.5. But it's actually kind of cool. I have it set up to where I hit Option+Space, it opens up a window right there, and I can immediately start typing, and GPT-3.5 is super-fast at responding. So if I just need like a quick answer on something, or a quick question, or a quick "Here's something I want to say, but take all the snark out of it", or something like that, it's really nice to be able to just like quickly get to that, without having to go to the site, and all of that. So I really like that. And I think I'm gonna stick with Raycast for a while.

\[55:47\] And then the only other tool I use daily is how Omnifocus. That is what I use for tasks. So I try not to keep any tasks in Obsidian, because it's not good at surfacing those to me, but like a dedicated to-do manager is essential, and one that works well on the iPhone as well, so that I can see exactly what -- I can plan my day from my phone. That's like the main thing I want to be able to do.

**Kevin Ball:** Does OmniFocus let you interact back and forth with Obsidian in some way? Because I am used to keeping a lot of to-do's in my notes, but you're right, it's not ideal for that.

**Nick Nisi:** Yeah, it does. Maybe not in that specific way, but Omni has this whole automation framework that they've built, and it's specifically built in JavaScript, so that you can do all of this scripting on your Mac, in JavaScript. And the nice thing, is because they control it, it's also built in. So if you set up a script, it's also set up on the phone. One that I have specifically set up, that I wrote custom, is - in my position at work, I have a lot of pull requests that I need to review. And I think that GitHub is totally falling over in like letting me manage that in any meaningful way. The Notifications tab is just not super-great, because I'm notified for everything. And so I wanted a way to like filter that down, and so I wrote a quick GraphQL query to the GitHub API that fetches everything, where not just I'm set up as a reviewer, but where I'm specifically mentioned as a reviewer. Because I'm brought in as a reviewer because of the code owners files a lot, and a lot of it is Dependabot crap that I don't care about... And so I just want to be able to like filter through that noise, and I can say -- I can even give it a list of approved people, like "Oh, if this person creates a pull request, and I'm somehow - whether it's directly or indirectly - listed, grab that." And then all of that, I can just push a button in OmniFocus, and it goes out to GitHub, gets all of that, and then it creates a bunch of to do's right in Omnifocus, with links out to the PRs, so that I can just go through that from one area, check them off as I go, and keep track of what I've done and what I haven't done.

**Kevin Ball:** Amazing. Alright. Well, I think then we are at the end of our episode digging through Nick Nisi's toolbox. Thank you, Nick.

**Nick Nisi:** Thank you.

**Kevin Ball:** I have a long list of things I want to try now... And I was already using a lot of your stuff. So yeah, blown away. So if you're listening to this, do you want more things like this? Is this the type of episode you'd like to see turned into a series? Do we want to dig through a bunch of other people's toolboxes? Let us know. You can let us know in the Slack channel, you can let us know by commenting on this episode on Changelog.com... However you want, but let us know - would you like to have "Digging through toolboxes" as a series on JS Party? We can make this recurring. Or this could be a one-off. Because I don't know if anybody's toolbox is quite going to match the level of detail that Nick Nisi has.

**Nick Nisi:** Oh, I can think of quite a few. It'd be fun.

**Kevin Ball:** Alright, that is it for today's JS Party. So thank you all, and let's keep having a party on the web.
