**Jerod Santo:** Vim, the final frontier... Sorry, that's so lame. I've just always wanted to do that. Let's run it back. Vim, a modal text editor from 1991, with roots in Vi that go back to 1976. That's 45 years ago, and yet here we are in 2021, 30 years after Vim's initial release, and it's still used and loved by nerds around the world. You can't even really call it a comeback, because it's been popular for years.

On this special episode of the Changelog we thought it would be fun to hear a bit of Vim's story from the mouths of its users, so I gathered some friends, new and old, and asked them to tell me all about Vim and why they love it.

Thank you to our friends at Sourcegraph for partnering with us to make this episode interruption-free. Teams with large codebases and many repos struggle with the usefulness that grep and Cmd+Shift+F offer. They need a better way to search and discover all their code and open source dependencies. They need Sourcegraph. Point Sourcegraph at the repos you work with stored in any code host, then start searching. Stay in flow and find your answers quickly. Try Sourcegraph at info.sourcegraph.com/changelog.

Alright, let's meet our guests, starting with Julia Evans.

**Julia Evans:** I'm Julia, I've been using Vim for (I think) 17 years, and I'm a programmer and I currently for a living write comics about programming.

**Drew Neil:** Hi, I'm Drew Neil. You may know me as the voice of Vimcasts. I also wrote Practical Vim and Modern Vim. And aside from my sort of Vim work, I'm a web developer by day, and I also do, sort of related to all the Vimcasts and books and so on, I do training sessions about Vim. I've been using Vim since about 2008, something like that, I think.

**Gary Bernhardt:** I'm Gary Bernhardt. The thing people are most likely to know me from is a lightning talk called WAT, which is almost ten years old now... Right now I'm working on Execute Program, which is an interactive learning program that's kind of unique in that we mix lots of real code examples in with explanations, all running in your browser, real code examples in the browser.

I've been using Vim for about 15 years, since 2006. I was an Emacs user before that, and before that - Visual Studio, and more mainstream Windowsy kinds of editors. I also went back and forth between Emacs and Vim a number of times in the early days, so I have a lot of comparison reference points there.

**Suz Hinton:** I'm Suz Hinton. I do software development professionally, and also in my spare time as a hobby. I most frequently work in Golang, Ruby, JavaScript, but I kind of like to do a little bit of everything, from the top of the stack, right down to almost the bare metal; not quite Assembly. And I switched to using Vim around four years ago.

**Jerod Santo:** One thing that has always fascinated me is how people come to select their tools, techniques, programming languages and so on. As a developer, your text editor is one of the most important choices you make, because you use it all day, every day. It is the primary interface to the work that you do.

I learned Vim not because I chose to, but by dictate. My programming teacher in college was a staunch Vim proponent and forced us to write all of our programs SSH-ed into a Linux machine using Vim. I kind of hated him for it at the time, but I definitely appreciated in retrospect. Shout-out to John Clark if he's out there listening. I remember him once saying "Pico is a totally fine editor if you're writing emails to your grandma. If you're writing code, you'd better be using Vim." So that is how I came to know Vim. Here's how Drew got started.

**Drew Neil:** \[03:50\] Switching jobs... I was at a job where we all used Macs, and back then we were a Rails shop and everyone was using Textmate... And I switched to a job where it was all Linux workstations, and Textmate didn't run on Linux. So I had to pick another editor. I think the ones I was considering at the time were Emacs, Vim and Gedit, I think.

It was a small company, but there were a fair few Vim users, so I thought "Well, if I start using Vim, I've got a few more people I can ask questions of..." So that was kind of what got me into Vim. And I knew -- at the time, I was aware that Vim had really good support for Rails, which was what I was mainly working with at the time, mainly thanks to TimPope, who created the [rails.vim](https://github.com/tpope/vim-rails) plugin way back... So in some ways, that was sort of the gateway drug to Vim. Coming from a Rails background, I think Vim was quite popular with Rails developers at the time, so it kind of felt like a natural step.

**Jerod Santo:** It's funny how the social -- not social pressure, but just the social environment around you helped make that decision.

**Drew Neil:** Yeah, that's true. I could have moved to a job where there were five Emacs users and two Vim users, and it would have worked out differently.

**Jerod Santo:** We'd be all watching EmacsCasts.

**Drew Neil:** Yeah. \[laughs\]

**Jerod Santo:** While Drew's experience may be somewhat common, Gary came to Vim from a completely different angle. And while I hadn't considered it before, I have to say it's a compelling reason.

**Gary Bernhardt:** For me -- I don't know how common this is, but for me it was motivated by fear of RSI, of injury. Programming long-term is dangerous for your hands. Fortunately not the rest of you, but for your hands and your wrists, totally dangerous. And I wanted to keep programming for many more decades... So I was using Emacs, a lot of chording in Emacs, a lot of Ctrl+Shift, Ctrl+Alt, Ctrl+Alt+Shift... And Vim has basically none of that. That for me is the most important difference between Vim and other editors - its input efficiency in terms of keystrokes. And a really easy way to sort of see a summary of that is - in Vim I almost never hit Ctrl, I never hit Alt. If there are keystrokes that require Alt, I don't even know them... And I rarely hit Shift. So most of my editing is normal mode, which is the mode that Vim boots up in, and just hitting the letter keys to do things, and punctuation. And that is very different from any kind of remotely "mainstream" editor.

**Jerod Santo:** Did you know that going into it, or did someone say "Vim's great for RSI", or how did you know that?

**Gary Bernhardt:** I had a bit of a scare; it's what caused me to take that path. Honestly, I probably just overused a muscle or something, and it was sore... Which is a common way to think you have RSI when you don't. So that went away. But having had that scare, I thought "If that was my RSI coming in permanently, it would change my life." It's a major thing. So I decided to do something about it, and Vim is what I did.

**Jerod Santo:** Julia has been using Vim for so long that she couldn't even remember what initially drew her in. Suz was also well aware of the editor for a while, but she only dove in somewhat recently.

**Suz Hinton:** I've always sort of messed around with rented Linux VPS'es... And when it's your own box, you tend to do all the dodgy stuff. You do all the cowgirl stuff on the server, you modify your NGINX config live, and things like that. And usually that's done in the shell session, so really the most practical options that you have are something like Nano, or Emacs or Vim or Vi... And it's installed out of the box on so many Linux machines, so it's just always there.

So usually I would pick it up if I needed to use it, and it was usually within that context, of just like messing around on Linux without some kind of display drivers or GUI. To be honest, nothing about the experience itself made me wanna pick it up. I knew how to go into insert mode and get out of insert mode, and sometimes, depending on the machine, you could actually get away with using the arrow keys instead of J and K and things like that...

I've been curious and felt that it was valuable to learn properly, and I knew other developers and colleagues who used it, but I just never really felt motivated enough at the time, which is why I really only picked it up four years ago.

**Jerod Santo:** Suz has said something interesting there, that I heard from others as well. She said it's installed out of the box on so many Linux machines, it's just always there. That is definitely a strength, and it turns out it's one of the things that Suz loves the most about Vim.

**Suz Hinton:** \[08:05\] Because of the ubiquity, you end up in the scene from Jurassic Park where it's like "This is Unix. I know this." So if you have to do something really quickly on a Raspberry Pi or something, you're just like "Oh, I know this. I can do this really quickly in Vim" and it's great. So that's the dream.

What I also like about it is that because it is on everything, it can be as simple or as customized as you like. The biggest sort of personal virtue for me about it is that I have a really bad short-term memory; I find it very difficult to hold a buffer in my head of what code I need to write next... Sometimes I have to pseudo-code things out, just so I remember the steps of what I'm doing, if it's complex.

And even just changing your mind about something and rewriting it, getting the code out of my brain and onto the screen in front of me as fast as possible actually really helps me not be so overloaded, and it's actually far less exhausting for me. And because Vim is designed to train your muscle memory to do very efficient shortcuts to make changes in your code, it is very targeted towards that, as compared to kind of clicking around with a mouse or just having maybe a smaller amount of shortcuts. It's designed in a way to just help you achieve that much faster... And I'm not really one of those _productivity porn_ people, but when you pitch it in the case of just finding coding far less frustrating, it's been hugely valuable for me in that.

**Drew Neil:** I guess one of the things I love most about it is the grammar, the slightly funky way of doing things, where -- like, in most text editors you select some text, usually by clicking with the mouse, or double-clicking, or whatever... And then having selected the text, you then run some operation on it, whether that's just deleting it, or wrapping it with something, or whatever... Whereas in Vim it's kind of the other way around. You start by saying "I'm gonna delete something, and then you say what you're gonna delete." So it's a little bit back to front, and it very much feels like the grammar you have in spoken languages. You have ways that you can assemble the verbs and the nouns and so on... With Vim, you have these operators and these motions, and I just love the fact that there's sort of an infinite space of combinations. I love the fact that you can install plugins that add new operators, or that add new motions or new text objects. I always feel like that's kind of like we've got our fixed grammar, and it's just like we're adding vocabulary, further expanding the space of operations that can be performed.

**Gary Bernhardt:** Vim is complicated. There's a lot of stuff in there. But the thing that makes Vim Vim is normal mode. The letter keys do things without modifiers. It's such a simple thing, but everything that is sort of special about Vim for me stems directly from that.

**Jerod Santo:** When you first open up a file with Vim, typing on your keyboard won't insert any characters. That's because you're in normal mode, like Gary was talking about. Normal mode is for doing non-character insertion things - moving your cursor, copying and pasting in-lines, manipulating text that's already there... Normal stuff like that. If you wanna insert characters, you have to switch to insert mode. This causes confusion to new Vim users, because it's backwards from what's expected. It can make you feel dumb, because here you are, in a text editor, and you can't even get the thing to edit any text. But it is one of those things that makes Vim Vim. And once you grok it, it actually makes a lot of sense.

Drew struggled with this concept, like most of us do, but he came up with a great analogy for Vim's different modes that may help you make more sense of it.

**Drew Neil:** The point where it starts to make sense really is when you accept the modal nature of Vim. And for me, I feel like the point where it started making sense was kind of where I started to see those trips into insert mode and back out again as being -- well, I draw an analogy with the way a painter works. I like to compare normal mode, which is the default mode in Vim, as being just like a painter, with the paintbrush not touching the canvas... Whereas in insert mode, it's like your paintbrush is touching the canvas. If you think of every little trip into insert mode as being like a brushstroke, then that sort of modal nature starts to really make sense.

\[11:57\] A couple of things that made that make sense to me was 1) realizing the way the Undo command works. If you make a trip into insert mode, you type some text, you pop back into normal mode - that's one little undoable chunk of work... Whereas in most text editors where you're generally in something like insert mode, you can type one word, or you can type a sentence, and then you can hit the Undo key, and how much text it's going to erase is a little bit of a -- you don't quite know.

**Jerod Santo:** Yeah, it's fuzzy.

**Drew Neil:** Yeah, it's fuzzy. It's a little bit like having some sort of Autosave feature that says "Okay, everytime you've paused for more than two seconds, we're gonna autosave." It's a similar sort of idea, where if you've paused for a certain amount of time, maybe it will put in a little Undo stop, or whatever you call it. Some text editors don't do that at all. You just hit Undo and it'll undo everything since you moved your cursor, or something like that.

Another point where I realized "Okay, I'm kind of thinking about this as like little chunks of undoable changes", and it really started to feel like brushstrokes... It started to feel like the idea of being in insert mode by default just felt wrong. It's like "Well, of course the painter doesn't have their paintbrush touching the canvas all the time. That's just weird."

So having that sort of being able to think in modes just made everything feel natural... And from there -- I mean, at that point you've still got a lot of Vim to learn, but at least your patterns of thought are aligned with Vim's ways of making you do things.

**Jerod Santo:** Normal mode and insert mode aren't the only modes in town. Vim's visual mode is great for selecting multiple characters, lines or blocks of text, and then performing some operation on that selection. I love visual mode. I use it all the time, and so does Julia.

**Julia Evans:** Yeah, I love visual mode. One of my favorite things about visual mode is - do you know how you can go into visual mode and then do :! and then type a Unix command, and it'll pipe the stuff you selected into that command, and then replace it with the output of the command?

**Jerod Santo:** No, I didn't know that...

**Julia Evans:** \[laughs\]

**Jerod Santo:** I think that sounds spectacular.

**Julia Evans:** It's spectacular. Sometimes I'll have a list that I wanna sort, so I'll just select it all and do :! sort, and then it'll sort it in my editor, and I don't need to go anywhere. I was making some shell scripts and I wanted them to have fancy headings, so I wrote a Python script to generate the headings... And then I piped it into the script in Vim. I don't use that so often, but every time I use it, I'm so happy.

**Jerod Santo:** I've never done that. I definitely knew about the execution of like a shell script from the command prompt, but I didn't know that whatever was selected in visual mode would go into that as an argument. That's pretty sweet.

**Julia Evans:** Yeah. And that's the joy of Vim - all of who use it... you always find out stuff you didn't know. \[laughs\]

**Jerod Santo:** Another joy of Vim is that it's extremely customizable and has inspired a rich plugin community. Some people really get into plugins.

**Drew Neil:** I install a lot of plugins, I'm not gonna lie.

**Jerod Santo:** How many?

**Drew Neil:** I don't know... 40 or 50, I think. Probably more.

**Jerod Santo:** Surely there you can whittle it down and give me some of your must-haves. What are your favorite plugins? What should people be checking out?

**Drew Neil:** Well, probably on everyone's list I think is [surround.vim](https://github.com/tpope/vim-surround) by Tim Pope. That feels so vim-ish that I kind of can't believe that it's not the default, core of Vim. It feels like that fits very nicely with the whole Vim grammar, and it adds a very useful set of operations for deleting surrounding things, adding surrounding things, changing surrounding things. It all feels very vim-ish.

Another one by Tim Pope that I use a lot is [Fugitive](https://github.com/tpope/vim-fugitive), which adds Git functionality... And I love the way that that just gets out of your way. It's there when you need it. If I wanna do a git-blame, I can pull up git-blame. I don't want to have git-blame being sort of echoed on the line that my cursor is on all the time; I find that really distracting and annoying. Yeah, I like knowing that I can get to the information in Git really easily, and Fugitive lets me do that.

\[15:50\] Here's a really tiny one that I really enjoy using... It's called [Exchange](https://github.com/tommcdo/vim-exchange). You can kind of take two pieces of code and just swap them. I find that really, really useful. It's something I really miss when I don't have it. I really like sort of adding new vocabulary to Vim's grammar... So my favorite way of doing that is by adding custom text objects.

There's a plugin by Kana Natsuno called [vim-textobj-user](https://github.com/kana/vim-textobj-user). That's kind of a meta plugin that's like a framework for adding more text objects. So if you go to the GitHub page for that, there's a page on the wiki where he links to lots of other custom text objects that people have added.

Also, in the space of adding vocabulary that fits into the grammar, I really miss having an operator for toggling comments. Again, that's something that's not really built into Vim. I've tended to use [Commentary](https://github.com/tpope/vim-commentary), which is, again, by Tim Pope, but there are others out there. I'm not sure if that's the best one to use at the moment. But again, that lets you do an operator and then specify a paragraph, or a line, or a function, or whatever, and it'll comment it or uncomment it. I find that really useful.

**Jerod Santo:** But others like to keep it a little bit more out of the box...

**Suz Hinton:** I'm actually not a huge plugin user... And people do still get kind of pushy with me. I made the mistake of sharing my vimrc once on GitHub, and somebody pull-requested me adding a new plugin, and I was like "That's just so out of context, really weird, and very just jarring..."

**Jerod Santo:** I'm trying to think about a real-world equivalent of that... It's almost like you're at a restaurant and someone just walks up and puts some food on your plate, or something.

**Suz Hinton:** Yeah. It's like "You'd like this. You should try it. I really like it." \[laughs\] Exactly, exactly.

**Jerod Santo:** It's like "You have the croissants here... Let me put this croissant on your plate. Eat that."

**Suz Hinton:** It's a fantastic analogy. I love that.

**Jerod Santo:** \[laughs\] Such a weird thing to do...!

**Suz Hinton:** Yeah. I think people are disappointed that I don't use a lot of plugins, and they're trying to help. So I do use some basic plugins, and my plugins in my personal time vary greatly from the plugins I use for work... Which is actually a really interesting distinction. You know, at home I have some basic plugins, which are [NERDTree](https://github.com/preservim/nerdtree), so that I have a file browser; that's pretty ubiquitously used in the Vim community. And I have some code syntax highlighters, which - you know, you sort of take for granted that you get them out of the box with things like Sublime Text and stuff like that, but if you want something specific like JSX, for example, Vim is not gonna know what JSX was. Vim was written a long time ago. And so you do have to sometimes install custom things for React and Vue. It's definitely a frontend problem. And I'm assuming Rust has the same thing.

And then what else do I have... A very small list. [Vim-airline](https://github.com/vim-airline/vim-airline)... And that's mostly just trying to give nice aesthetics to my code editor, so I'm excited to use it. And it's pretty functional as well. It just gives you a nice-looking status bar.

I use [gitgutter](https://github.com/airblade/vim-gitgutter). Gitgutter essentially does what it says on the tin - it gives you \[18:38\] things in the gutter, next to your line numbers...

**Jerod Santo:** Like which lines you've added, which ones you've modified...

**Suz Hinton:** Exactly.

**Jerod Santo:** ...which ones are staged. Stuff like that. Cool.

**Suz Hinton:** So I want something really minimal... A lot of people really love Vim Fugitive, which is this kind of kitchen sink Git plugin...

**Jerod Santo:** Right. It's like, never leave Vim, and do all the Git things inside of Vim.

**Suz Hinton:** Yeah, it's amazing. And a lot of people really love that paradigm of "never leave Vim", and I get it, because if your hands are on the keyboard the whole time and you're not switching contexts, it is actually a really nice feeling. But it's just too heavy, and I can't justify... I still like to have a separate terminal pane next to me via tmux, to do stuff in there and mess around...

**Jerod Santo:** Same.

**Suz Hinton:** So I just use Gitgutter, because it's minimal and it gives me exactly the information that I wanna know on the fly, which is very helpful to me. And I use [Ctrl+P](https://github.com/ctrlpvim/ctrlp.vim) as my fuzzy search, which admittedly is not super-performant in really large codebases, but it works perfectly fine for me personally.

And then at work I basically run [Ale](https://github.com/dense-analysis/ale), which pokes into language engines and allows you to do things like linting within Vim, and highlighting certain lines that are wrong and having explanations as to why, and order-formatting and that kind of thing. So Vim Ale is fantastic, because it supports different languages, and it's particularly good with TypeScript... A lot of people at my job - we have a special internal documentation page on getting Vim working with all of that stuff, because VS Code is kind of like the unofficially embraced editor, and they always recommend installing Ale for that reason. So I do tend to run a heavier set of plugins at work, just because there's more complexity that I deal with in my day-to-day.

**Jerod Santo:** \[20:16\] If Suz's non-work setup sound minimal to you, you might describe Gary's as barebones.

**Gary Bernhardt:** I do use a few plugins, but I'm also firmly on the side of avoiding them as much as you can, especially as a beginner. What you don't wanna do is start with 50 Vim plugins, because then you're not learning Vim, you're learning this mess of plugins that doesn't match any other given Vim user.

Today I use exactly eight plugins. Six of those are for language support, so very basic stuff like syntax highlighting, showing type errors in TypeScript, that kind of stuff. One of them is my color scheme, so - pretty boring... And then the eighth one is my one indulgence, which is a plugin that slightly tweaks the way that search highlighting works... But that's it. So with the exception of language support, I'm basically using bog standard Vim, with the exception of my vimrc, which adds a few things.

The one plugin that I would recommend even a brand new Vim user use is some kind of fuzzy file finder. [Fzf](https://github.com/junegunn/fzf.vim) is a very popular one, very widely supported; it'll be easy to get support. I use one called [Selecta](https://github.com/garybernhardt/selecta), that I wrote myself. You can try that if you want. I like its matching, but of course, it doesn't have all the support of something like Fzf. But you do want something like that if you're coming from another editor, or otherwise you will be frustrated.

**Jerod Santo:** Gary mentioned his vimrc. If you're not familiar, that's Vim's configuration file, which people also tweak to the hilt and often share online for others to take as inspiration, or sometimes copy whole cloth.

**Gary Bernhardt:** My vimrc has a section titled basic editing configuration, and if you're just starting and you want a slightly more modern take on vimconfig, you could copy just that section. Not my whole vimrc. You don't want the whole thing, but just the basic editing configuration. that will change some of the defaults that are honestly old and not desirable nowadays. But it's still pretty small; it's under 100 lines, including comments.

**Julia Evans:** I don't actually know what setting in my vimrc does this, but I know that when I open a file, it goes to where I was the last time I was in that file; it jumps to my last position, and I really love that.

**Jerod Santo:** Even the column and the line?

**Julia Evans:** I think the column... Definitely the line, and maybe... The column - I'm not so bothered, honestly, even if it's not.

**Jerod Santo:** Sure.

**Julia Evans:** But yeah, definitely at least the line. And I just love that feeling of like - if I accidentally close a file, and I open it, I can just undo, even if I already closed the editor.

**Jerod Santo:** Is your vimrc out there, so we can link it?

**Julia Evans:** It's out there, yeah. It's really extremely based on this thing called basic.vim, which I would probably recommend using over my vimrc... Because mine mostly has extra garbage in it, in addition to what's in there. I think basic .vim is good, and my stuff just has some nonsense that I added in there.

**Jerod Santo:** Many Vim users will lug their must-have plugins and their personalized config with them to every machine they use, but that desire to have your Vim setup with you wherever you go extends even further. Vim mode is a thing. This is where other editors, productivity programs and web apps mirror Vim's command mode, in an attempt to make the Vim faithful feel more comfortable in a different environment. You'll find Vim mode in Sublime Text, VS Code, and even Emacs. Then there's Vimium, a Google Chrome extension which lets you browse the web like it's Vim... And of course, web apps like Gmail, Twitter and Trello make extensive use of Vim's H, J, K and L navigation keys. Some people love it, others not so much, but it's definitely a phenomenon worth knowing about. Here's Gary's take on Vim mode.

**Gary Bernhardt:** I used a couple of Emacs Vim minor modes in the old times, so I learned their strengths and weaknesses. I've used some kind of browser Vim thing a while back. It was, I think, before Vimium. I found it to be kind of buggy, because the browser was never designed to do that... And I've tried Vim emulations in a few graphical editors, but all of those - it took me only a couple minutes to hit a number of things that were missing... And that's because I know Vim proper so well. I want weird stuff, like -- if it doesn't have :g or whatever, I'm gonna be frustrated.

\[24:19\] Now, with that said, a good Vim emulation will get you the ergonomic benefits of Vim, which I think are the most important benefits. You will have less risk to your hands and your wrists. And if you don't know Vim proper, then you can use an emulation and get those benefits and not be frustrated. But if you are an expert Vim user, you'll probably gonna miss all the things that aren't there.

And when you think about what Vim is, it makes sense that the emulations are always lacking, because Vim is about 400,000 lines of C code. I checked before we started recording... And it was written over three decades. And then there's all the Vimscript on top of that. That is a lot of code. It's not just a couple dozen normal mode commands that you can implement in a little plugin and then be done.

So those couple dozen normal mode commands will get you a lot of the ergonomic benefit, but still, it's not Vim... And the better you know Vim, the less that's gonna satisfy you.

**Suz Hinton:** I know that's built into Facebook and built into Twitter, because it's built by nerds... You can actually use J and K to flip through tweets and posts... That's cool. I already know how to use voiceover on Mac, the screenreader, because I am a big accessibility advocate, and that to me is just how I write non-broken software - you make it accessible and you test it. So to me, I think I'm much more productive in that, because that's what it was sort of designed for... Whereas I think that a lot of these things are kind of this weird kind of shim, and it doesn't make a lot of sense.

VS Code feels really bad in Vim mode for me, I don't know why. I think it's just because it's just nowhere near as responsive. So you're hitting J/K and you're just like "It doesn't feel the same." It feels like someone's kind of pretending and pulling the ropes behind the scenes. So I kind of just abandoned that, and I was like "If I'm gonna use VS Code, I'm going to lead into the VS Code paradigm."

**Julia Evans:** I've used Vim mode... I think I've used it in VS Code, I've used it in Atom, I've used it in Sublime, I've used it in IntelliJ...

**Jerod Santo:** Oh, wow.

**Julia Evans:** ...and I've found it fine. Because I don't know how to type otherwise. It doesn't work for me. \[laughter\] So when I use those editors, the first thing I do is I install Vim mode. I liked it.

One thing that I find really charming about Vim is - in my email, I can do J and K to go between my emails. You find little tiny bits of Vim support in lots of places; it feels like you're in a secret club...

**Jerod Santo:** Totally.

**Julia Evans:** Like in the "Vim Club". Because you just like try it out, and then it works, and you're like "Oh, wow, thank you, Fastmail! That's nice.

**Jerod Santo:** That's funny, because that's actually a prerequisite for me using a mail app, is that kind of nav... Because once (I think) Gmail did it - maybe not first, but it was the first place I felt it - I was like, "Oh, I can actually just use Vim navigation to navigate."

**Julia Evans:** Yeah.

**Jerod Santo:** And then I wanted to use -- although I hate Gmail's interface altogether, but I like that aspect of it. I wanna use a native Mac client or something, so the built-in mail app for Mac can't get it done...

**Julia Evans:** Oh, no.

**Jerod Santo:** ...which makes sense, macOS-style things... So I go shopping for these other things, and it's the first thing I test - can I use J and K to go up and down a list? No? Okay, you're not gonna be my mail client. \[laughs\]

**Julia Evans:** Cancel.

**Jerod Santo:** So I'm with you.

**Julia Evans:** And I feel like, like Remember the Milk supported it back in the day. I mean, Remember the Milk is still around, but I feel like once I used it and it supported it, I was like "Oh, wow...!"

**Jerod Santo:** It is kind of like an insider nerd club. You're like "Oh, you're one of us." Whoever writes this is one of us, and I like this software a little bit more because they like it. That's cool.

**Drew Neil:** One place where I definitely expect to have Vim(ish) key bindings is in Gmail, actually. You can use J and K to navigate up and down in your inbox. I think it's Enter to open... Even once you're looking at the message, you can press J to go to the next message, or K to go to the previous message. (I might have that back to front.) I think X will archive a message, things like that. It's reminiscent of Vim; definitely inspired by...

I was setting up a new Gmail account the other day and hotkeys weren't turned on, and I felt quite at sea without them. So that is one where I feel like I depend on them.

**Jerod Santo:** \[28:00\] That's funny, because Julia said the exact same thing, and I'm in the exact same way...

**Drew Neil:** Really? \[laughs\]

**Jerod Santo:** So we're three for three on people that like Vim-style navigation in email. Any website that has it, I'm always pleasantly surprised. I'm like "Hey, they do this...!" I think Twitter even does it, although I don't really use it there. For some reason, I don't feel like a tweet has been selected. I'm just kind of scrolling. But I think you can actually select a tweet and go J/K up and down through them if you so fancy.

**Drew Neil:** Yeah.

**Jerod Santo:** Yeah, it's always fun to find Vim in weird places. And the more you look, the more you will find Vim, or things that smell like it, all over the place. But why? We've talked about aspects of Vim that these four love, but I also asked them specifically why exactly they think Vim is so stinkin' popular.

**Suz Hinton:** I think that once you start feeling the benefits of using Vim, it becomes very sticky for you. You said that you still juggle the two different code editors, right?

**Jerod Santo:** Right.

**Suz Hinton:** So something changed, but you're still hanging on to it, and I think that that actually says a lot. So I think it has that sticky factor once you start using it. The pessimistic take on this is that it may be a sunk cost fallacy, and you're like "Well, I've invested so much in this... I don't wanna let it go. I don't wanna forget all my shortcuts."

**Jerod Santo:** \[laughs\] That's a good take.

**Suz Hinton:** And it's also the ubiquity, as we've talked about. That seems to be my favorite word for this particular recording. Its persistence as a tool on Unix machines to get work done... I like that it's just become traditionally part of the toolbox everywhere, but even in a modern context. So consider like you're booting up a vanilla Raspberry Pi... It's a pain in the butt to have to get a keyboard and a mouse and a monitor and do all that kind of thing... So even just flashing Raspbian on an SD card, building it up, you throw it on your network on a switch, you shell in, and you're writing code.

So you can just get started with Vim and you're just not consuming a lot of resources on things like IoT devices, because again, it's very performant. So I think there's a lot of modern context for using Vim, which is why it's stuck around... And it's just nice to not have to use an entire VNC server and get yourself a GUI in order to boot something up that is more of like a modern code editor, if that makes sense.

And then the last thing I will say is that you have to admit, it kind of still has that really cool Hollywood hacker movie aesthetic vibes to it, right? You feel cool when you're using it, because there are those late connotations around it, whether or not that's fair or not fair... So sometimes it just feels kind of nice to just use your terminal and not have anything else open, and you're just living the dream... This is all very opinionated. It's not objective in any shape or form, but that's how I feel about it.

**Gary Bernhardt:** Vim is the best text editor that anyone ever wrote, that was widely used. But I mean that in a more narrow way than it probably sounds. So every editor is gonna be good at something; there's a reason that every editor was written. Even Nano was written because it's small and easy to install, right? If you want to spend your whole career customizing an editor to match you exactly, you probably want Emacs. If you want really deep language support, with automated refactorings and debuggers and all that, you probably want a full-on IDE. If you want a text editor that is extremely efficient at editing text, and maybe not quite as good at some other things as some other editors might be, then Vim is the best solution. And there's really not any kind of runner-up for editing efficiency, unless it's something that looks a lot like Vim. That's why it's still popular; that's why it's been popular for 50 years, is because it's so efficient, and anything that approaches it basically looks like Vim.

**Jerod Santo:** Vim has a lot going for it - ubiquity, a powerful grammar that builds on itself, it's hackable, there's a huge community around it, but it's not all rainbows and unicorns. I just had to ask these four - what frustrates them the most about Vim? What don't they like about it? Here's Drew.

**Drew Neil:** \[31:45\] One of the things I think Vim doesn't do very well is having files that have more than one language in them; something like an HTML file with a bit of CSS and a bit of JavaScript mixed in is quite a common scenario these days. I mean, Vim does support it. You can have JavaScript syntax highlighting for the script tags inside of an HTML file, but I think the way Vim has this idea of file type plugins, this idea of -- it's very easy to create a mapping in Vim, and if you create that mapping in Vim, and if you create that mapping in a file type plugin, you can say "Okay, this mapping will only be applied to Vim if you're editing a JavaScript file", which is really neat, but it kind of forces Vim's hand a little bit... Because when I think back to TextMate, which I don't know how many people are using TextMate today, but I know that TextMate got a lot of things right... And when I think Sublime came out and when VS Code came out, they said "Okay, well we support TextMate grammars or TextMate themes" or whatever. It's a way of having a new editor just suddenly look like it's got lots of plugins already written for it.

**Jerod Santo:** Right.

**Drew Neil:** One of the things I remember from my TextMate days is that it has this idea of scopes; I think that was the terminology used, where it's very much not just looking at the current file, but looking at the cursor position within the file... And you could have some sort of a command that would run and it would do something differently if it was in a JavaScript scope, versus an HTML scope. I might be misremembering the way that feature worked, but that was kind of how I remember it. And it meant that you could have a mapping that did one thing if you were in the HTML part of the file, and a different thing if you were in the JavaScript part of the file. And I think the way that Vim is so focused on file type plugins slightly just makes that awkward to do. I'm sure it's not impossible, but it doesn't feel like Vim is aligned well for files that contain more than one language.

**Jerod Santo:** What frustrates you, Julia?

**Julia Evans:** The configuration. I don't understand a lot of the stuff in my vimconfig. You have nnoremap... what is it? Like, I kind of know what it means...

**Jerod Santo:** What does it mean?

**Julia Evans:** I know it means you're mapping a shortcut to something else... I have one that's like leader N to remove highlights if I'm searching for something and it was highlighted and now I wanna unhighlight it... But I don't know what the noremap thing is about, but I know that I see it a lot of time.

**Jerod Santo:** I definitely have it in my vimconfig, and I definitely don't know what it does specifically...

**Julia Evans:** That's a little frustrating. It never really feels good when you have stuff on your computer that you use all the time and you don't know what it means...

**Jerod Santo:** Anything else that frustrates you about it?

**Julia Evans:** I think for a long time I didn't have paste working. Vim didn't interfere with my system clipboard, and I found that frustrating... And then one day I figured out how to do it and it was life-changing; now it does, and I'm just really happy... But I'm still literally surprised every time I can do that, even though I've had it for years now...

**Jerod Santo:** It didn't work long enough that you were trained to believe it won't work, so when it does, it surprises you.

**Julia Evans:** Yeah. I was going to say maybe one more thing that I find frustrating, actually... I think the default way Vim is set up -- whenever I use Vim on not my computer, it doesn't have my config, and there are just like some things about Vim's defaults, like it doesn't do indenting... If you're editing a function on a server - which you shouldn't be, but then you are, or I am... \[laughter\] And then I insert a new line and then it goes back to the beginning of the line, instead of indenting it nicely... Stuff like that.

**Jerod Santo:** Gary?

**Gary Bernhardt:** I'm pretty good at complaining, so I'll limit myself to just one thing... \[laughter\] Vimscript. To understand Vim's relationship to its scripting language, let me contrast with Emacs. Emacs is almost like an operating system that happens to ship with an editor... And long-term Emacs users will effectively end up rewriting parts of that editor sometimes, but it's still Emacs, because the layers underneath are still Emacs. So Emacs Lisp is a whole programming language, it was designed to be a programming language... Vim is not like this at all. Vim was designed to be a text editor. It had a configuration language; that configuration language grew over time to acquire normal programming constructs, and that is what we call Vimscript... So it's a hodgepodge, and it wasn't sort of designed all at once, and I don't think it's controversial to say it's kind of a mess.

\[36:00\] So that is the most frustrating part of Vim for me, and it's also one of the reasons that I avoid configuration when I can. I have a very sort of mostly stock Vim configuration, despite 15 years, and Vimscript is why.

**Jerod Santo:** Suz shared two frustrations, one social and one technical.

**Suz Hinton:** By far the most frustrating for me is, again, it's outside the editor itself, it's... the community and the culture around Vim can be very friendly. I wanna qualify that first. There's a lot of people that are really enthusiastic and happy to help you. But then there's also the dark side of the Vim community, which is that there can be a lot of dogma and some very brotastic culture. It becomes competitive, like who knows the most amount of shortcuts, who can customize this to be like the ultimate elite editor...

And the dogma around even just fuzzy finding search tools, the amount of people that have piled on me because I use [Ctrl+P](https://github.com/ctrlpvim/ctrlp.vim), and they think that that's too slow, and I should be using these other things... It's really frustrating. It's like any other hobby that you see people get enthusiastic about - sometimes they don't know how to sort of control those emotions or to understand that people come into that hobby or that code editor with completely different motivations to them, and to just maybe consider that there are those differences.

So I feel like Vim doesn't do the best job at selling itself as it is. We've talked about how it has a rep for having a steep learning curve, and this just adds extra awkwardness around the tool to people getting started with it. You almost don't wanna say "I'm starting with Vim", because you just know there's gonna be a deluge of overwhelming unsolicited advice that is absolutely not helpful to people when they're getting started. So that's one thing that disappoints me a little bit, and I definitely don't feel -- like, being on this Vim episode is really interesting to me because I don't consider myself a part of the community, even though I've had really good interactions with people such as Tim Pope; he's fantastic. He's written some of the most prolific Vim plugins out there, and he's great. I've had a really great experience working with him. He's even pull-requested one of my Vim plugins, and it's awesome. But those experiences tend to be few and far between for me, so... But I did wanna give a call-out to somebody who is really great at this.

When you are talking about Vim itself, when you're working with it, I still -- you know, my touch-typing is still not perfect. So sometimes I'll just accidentally hit a key I didn't mean to. And when you're typing as fast as you are, you'll just see something very dramatic happen in Vim, and you have absolutely no idea which key you hit and how to actually cancel that. Because if you don't know what you did, you don't know how to rescue it. So sometimes it can be frustrating because all of a sudden it'll be like a record scratch moment for you when you're in the middle of flow, and just trying to get back to where you were is annoying. I think that gets better with practice.

But I think everyone's done that thing where you accidentally toggle Caps Lock - if you haven't remapped your Caps Lock key, which is I'm sure why a lot of people do this... You toggle Caps Lock, you hit K because you're just trying to go up a line, you're trying to move your cursor in the file line and then all of a sudden the whole screen goes blank. You've accidentally hit the Jump to the Man Page for this specific thing. And usually, you're just writing arbitrary code, so there is no man page for the word that your cursor is on, and it starts yelling at you that it can't find it... And you're just like "Where is my code? Where did it go? Where did you take me? Give it back."

So some of those kind of jarring moments that happen sometimes... And I think that obviously they get less and less frequent, but for me, I still sometimes frustrated myself that way. You can really do a lot of damage with the efficiency of the program, if that makes sense.

**Jerod Santo:** For me it's always accidentally getting into macro recording mode.

**Suz Hinton:** Yes. Hitting Q...

**Jerod Santo:** I wanna hit Tab, and I hit Q on accident...

**Suz Hinton:** \[laughs\]

**Jerod Santo:** I'm tabbing, and I hit Q a couple of times, and all of a sudden I'm recording things that I don't wanna be recording, and I'm like "Aaargh! How do I stop this?!"

**Suz Hinton:** Yeah, I've recorded things for an entire half hour sometimes...

**Jerod Santo:** \[40:02\] \[laughs\]

**Suz Hinton:** So you hit Q again to toggle it off, and then you kind of go into a new buffer and you hit Play to see what you were recording... Because it's quite amusing. There are definitely times in my Twitch stream where people are like "Suz, you're recording right now", because it's just like in the corner of my little status bar... \[laughs\]

**Jerod Santo:** Yeah. \[40:16\]

**Suz Hinton:** But yeah, I think that Tab vs. Q thing is very common too, and it's exactly the same frustration.

**Jerod Santo:** Totally. There you have it, a few Vim frustrations... And of course, the learning curve is a big one for many folks. The question is, should you learn Vim today? Maybe you gave it a try once and you got stuck... Should you give it another go? Gary shared some excellent reasons why that might just be the case.

**Gary Bernhardt:** I absolutely would recommend it. I also recommend people not to beat themselves up over it if they decide they don't like it. There's kind of this weird sort of "You have to use the hard thing or you're not a real programmer" or whatever. Don't worry about any of that, but give it a try.

I can name three different reasons to do it, and I think all of them are sufficient on their own. First, RSI. It will prevent injury. It's a really important thing as a programmer if you wanna make a career out of this. The second is speed. Vim is unambiguously faster than other editors. Not even remotely controversial to say that. But the question of course is gonna be whether you value speed over what you may be giving up, things like deep language support from something like Visual Studio, or a JetBrains IDE, or whatever... So you're making a trade-off there. But for me, speed is even sufficient on its own, because every time you have to stop and slowly make some edits is a chance for you to forget what you were doing, to lose the state in your brain. Maybe you're eight levels deep in your stack and you're gonna start losing those levels if you have to get distracted. It's also just fun, honestly, to be fast...

And then the third reason is that Vim, unlike most other editors, is not gonna go away, the Vim keystrokes in particular. So many people have been so deep in their brains that 30 years from now you will absolutely be able to get an editor that has those keystrokes. I don't know whether it will be Vim, I don't know whether Bram Moolenaar will be maintaining it, but you will be able to use those keystrokes.

\[42:00\] So any of those for me is sufficient, especially for the last one. If you think about the timeline - just for me, 15 years; at the beginning of that time, TextMate was just becoming popular. Then it was Sublime Text was cool. Then Atom was cool. Then VS Code was cool. A lot of people switched between two of those, three of those, maybe all four of those, and that whole time I was just getting better and better and better at Vim... And you multiply that out by the length of a career, you use Vim for 40 years - you're gonna be so good at it by the end, and it's still gonna be totally relevant, I think.
