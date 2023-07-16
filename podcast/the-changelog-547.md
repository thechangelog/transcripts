**Jerod Santo:** We're here with Daniel J. Barrett, author of the Linux Pocket Guide and more recently Efficient Linux at the Command Line. Daniel, thanks so much for coming on the show.

**Daniel J. Barrett:** Thanks for inviting me. It's fun to be here.

**Jerod Santo:** It's fun to have you. I was reading, 35+ years you've been using Linux. Is that correct?

**Daniel J. Barrett:** It's almost 40 at this point.

**Adam Stacoviak:** Wow.

**Daniel J. Barrett:** I don't recall exactly how long Linux has been around, but I worked with its predecessor Unix definitely in the mid '80s... And yeah, that is going back away, and makes me feel old and creaky.

**Adam Stacoviak:** Experienced.

**Daniel J. Barrett:** Experienced. I'll remember that one for next time. \[laughter\]

**Adam Stacoviak:** "I'm experienced and creaky."

**Jerod Santo:** Do you still learn new things, or do you feel like you just have it down pat at this point?

**Daniel J. Barrett:** Oh my goodness, always learning new things. It's such a deep topic., and even when you think the command line... For example, if you find it fun to read the Bash man page, which is only about 5 million screens long, there's always something in there that I'd never thought about before, didn't notice it, and I try it out and "Oh, I can see where that fits into my workflow." So yeah, always new stuff happening.

**Adam Stacoviak:** I guess Linux has changed a lot too over these years. Almost 40 years, predecessor Unix... There's a lot of, I guess -- even distros; the distros have changed, especially with Red Hat Enterprise Linux, and Fedora and CentOS, and all those changes there... I mean, that's more recent, but there's been a lot of changes over the years.

**Daniel J. Barrett:** Yeah, for sure. Distros come and go, the ones that are popular change... Absolutely right.

**Adam Stacoviak:** I committed the cardinal sin, I called it CentOS. I'm so sorry. Santos!

**Jerod Santo:** Ahh... They'll never forgive you. What's your distro of choice, and has it changed over the years?

**Daniel J. Barrett:** I use Ubuntu usually, the Kubuntu flavor of it, with KDE, Plasma... For the most part - I'm ashamed to admit it - the distro doesn't matter a heck of a lot to me. When you're especially working at the command line, the set of commands available to you are mostly the same where you can quickly install them. And as for window managers and so forth, as long as I've got Windows to move around, I can adapt to whatever GUI is available. So I don't have particular allegiances. I think I started off on Red Hat, and I moved over to CentOS for a while, then I used SUSE Linux for a while... But Ubuntu is a perfectly reasonable distro, and fine for use.

**Adam Stacoviak:** \[06:39\] There's some concerns about snaps, and stuff like that. Do you have those concerns? Like, the snaps packages, and uninstalling snaps... Like, there's a lot of concerns with the direction, I suppose, of Ubuntu and where it might go the next turn, the next major changes for it.

**Daniel J. Barrett:** Yeah, yeah, that's an interesting point. Snaps - I still feel like Snap is fairly new to me. I haven't used it that much. But I have noticed that some of the packages that I install using Snap are much, much slower as they run than the typical APT installs on Ubuntu... And so that's kind of unsatisfying. At the same time, the process of installation and removal is fairly simple, and you can do it user by user, which is nice. That's very different from the APT package management. So I can see advantages and disadvantages, but generally, if you're running your own Linux machine, you're the sysadmin, I don't see too much reason to use snap over the traditional package managers.

**Adam Stacoviak:** Do you ever find yourself looking at non-Linux? I'm not gonna say Windows, but maybe MacOS, for example... Do you look over the fence? Do you get any envy? I know I'm a daily Mac user and I also love Linux, but I'm not a Linux desktop user. So how do you live in that Linux world? Is it just like you're just so comfortable there, so everything you have is there, and MacOS has just never had a place for you?

**Daniel J. Barrett:** Oh gosh, I've used pretty much every OS out there at this point. I used to be a big Commodore Amiga fan, so I used that for many years. A lovely multitasking operating system on MPC format. So that was a lot of fun. Before that I was a Windows user, and also after that... Because you know, when you work in the industry, you don't always have the choice of which OS is on your desk. Today I'm using Mac, Linux and ChromeOS every day.

**Adam Stacoviak:** Cool.

**Jerod Santo:** Nice. So in your blog post you're writing about why you wrote this new book, Efficient Linux at the Command Line, and you mentioned how you were working with one of your colleagues there at Google on Python, and you were watching them kind of do Python code... And just the way that they were going about it - I think it was like quitting the editor, going back to the command line, probably up-arrowing to some test command or something, executing that, and then relaunching the editor, and then finding their spot again... And it was kind of driving you nuts, because there's just better ways to do it...

**Adam Stacoviak:** There are?!

**Jerod Santo:** ...but that resonated with me, because I cut my teeth on SSH-ing into a machine and coding on that machine in Vim, not because I wanted to, but because my teacher in college made us, which I'm appreciative for now... But I remember just being like "I don't even know what -- like, it's just a prompt", and I'm like "I'll learn a few commands, I'll learn how to CD, I'll learn how to nano (back then)." Eventually, he made us use Vim, and I learned Vim, but there was so much I didn't know. And then I realized you could up arrow to old commands and I was like "Okay, now we're talking." And I learned the history command... So then I realized you could take history, which is your history of commands you've typed before, and then you could like pipe it to grep and search for something new... Like, you start to kind of learn these things slowly... But that was back in like the early 2000s. And I'm telling you, just a few months ago I learned about Ctrl+R which, which all nerds already know about, but I just didn't. Somehow I just never knew about it... And you can just like start typing out, and fuzzy-match, and hit Enter... Anyways, my efficiency is up, even after 20 years of doing this stuff; like, in the last year I just doubled. And so I was reading that and I was like "Okay Daniel's on to something here." There's so much efficiency gains you could have if you just have someone tell you "Here's how to do it."

**Daniel J. Barrett:** \[10:17\] You have totally hit the nail on the head there. I got into efficient command line use largely because of the experiences like the one that you just cited, about the engineer who was quitting the editor and restarting it and wasn't aware of job control, where you can suspend and resume commands. And I should mention that was not at Google, by the way.

**Jerod Santo:** Oh, I'm sorry.

**Daniel J. Barrett:** My Google colleagues are wonderfully \[unintelligible 00:10:37.24\] at Linux. But it's amazing how many folks who use Linux have learned it through trial and error. And it's a fun operating system, and if you're a hobbyist, you want to try something out, that's great. But at a certain point, it will help to be a little more formal, so you can learn these capabilities like Ctrl+R, the Bash shell feature you just mentioned, that searches dynamically for your command history. It's so fast.

**Jerod Santo:** It's so much better, yeah. Like, "Why didn't anybody tell me about this for years?"

**Daniel J. Barrett:** Yeah. So there are probably -- I can think of maybe three or four completely transformative things that I learned at the command line, that each one of them just made me so much more efficient, and I never looked back. And that's kind of why I wrote the book Efficient Linux at the Command Line, because you can definitely double your speed at the command line. And there were fairly straightforward ways to do it if you're willing to put in five minutes or an hour, or whatever, just to learn some new skills.

**Jerod Santo:** Well, let's start right there, then. I mean, if you've got three or four, or five... Like, the big ones, the a-ha ones, where it's like minimal learning curve, but just maximum productivity boost. Hit us with the top ones.

**Daniel J. Barrett:** Okay. Alright. Before I jump into that, let me just sort of set the context

**Jerod Santo:** Okay.

**Daniel J. Barrett:** Command line interfaces - a lot of times people think about them as kind of basic, compared to these wonderful, windowing, icon-based OS'es, where you can click on something, or tap, and make things happen. But actually, command line interfaces are the most interesting, because every time you type a command, you are solving a puzzle. Maybe a little puzzle. You have a task that you want to do, like "I want to list my files", or "I want to edit this document", or whatever it might be, and you have to invent on the spot a command to do it. And sometimes it seems kind of trivial, like listing your files - you just type ls and hit Enter. But then there are other times where there is no Linux command for what you want to do... Like, let's say you're a Python programmer and you want to know how many Python files are in your current directory tree. There is no single command that will count Python files, so you have to take one command like ls or find, and pipe it to a command like word count, that counts lines in standard output. And when you mash them together with a pipeline, you've invented a command that didn't exist before.

And so this is one reason I just find Linux in some way a really joyful user experience, because you're constantly solving puzzles. And who doesn't like puzzles in our community, right? It's fun. But the thing is, it takes a little while to become a good puzzle solver... So when somebody asks you something a little more complicated, like "What's the most common initial in the last names of the users on this system?" There's absolutely no command to find the most popular last initial. But with a pipeline of five or six commands, you can do it. And if you can instantly produce that pipeline, because you've been learning the concepts, and so forth, you can move really quickly and solve fairly complicated-sounding challenges like puzzles, right at the command line. And those are the skills I tried to teach in Efficient Linux at the Command Line. But I do want to get to the question you asked, too.

**Jerod Santo:** \[14:04\] Yeah, absolutely. I think that's on point. That's kind of the joy of it all, is when you realize that you can actually send this to there, and now you've created this thing that does exactly what you wanted it to do by just like combining these three or four things together in novel ways. It's joyful. It's like you've put in that last piece in the puzzle, so I'm with you.

**Daniel J. Barrett:** Cool. So some of the techniques I've learned that have really made a difference - the first one is called command substitution, and it is a way of taking the output of one command and injecting it into the text of the command that you are typing. So it's not like a pipe where you're sending standard output of command one into standard input of command two. But I'll give you an example.

Suppose you want to edit all the files in the current directory that contain a particular word. And that's not an uncommon problem. You want to find a word and change it to something else, in all these files, and maybe you want to do it interactively to make sure you're not having any false positives on your matching... So there is a command that will tell you all the names of the files that contain a particular word; that will be grep-w for word matching, and -l for just printing the filename. So grep-w/grep-l. And there's a command for editing files; it could be Nano, or Vim or Emacs, or what have you, and you can combine these two pieces of information. Sometimes people use backticks on the command line, so you would say name of your editor, like Emacs, and then backtick grep-w/l and the word you're looking for, close backtick. And that will produce the list of names as if you had typed them on the command line. Everything between the backticks, which is taken as a command, is replaced by the output of that command.

**Jerod Santo:** Yeah, that is really powerful. I have one of those that I do all the time. So I have various scripts in various folders that are all in my path, that I've either written or whatever... And sometimes I want to just edit and tweak a script, and then execute it. But I don't really know where it lives, and I'm not anywhere near that, and so I'll type "which", the which command, and the script name. And that will print out the entire path to where that is on disk. And then I'll take that and I'll wrap it in backticks, and I'll say vim, backtick, which command, and it will then take the path and give it to Vim. So that's an example of just quickly editing that file without having to navigate to it or anything else, or even know where it is. I just know that the output of which can be substituted in to the command line for Vim, and that's cool.

**Daniel J. Barrett:** Yeah, that's a perfect use case for command substitution. And you can build some really complicated or complex computations using it. In fact, there are ways of nesting it, so that you produce output that then produces other output, that then goes into your command line. And we have lots of examples of that in my book.

And then there's another one that has a similar name to command substitution called process substitution. And the first time I saw this one, I didn't know what the heck was going on. I just didn't understand it. So I'll explain it, and the understanding will come probably in a minute as I'm speaking.

**Jerod Santo:** Okay.

**Daniel J. Barrett:** So some commands don't work well in pipelines. An example would be the move command. You don't pipe things into move, you're moving files, right? Or the diff command; you're diffing the contents of two files. So these are programs that really work just on disk files. But sometimes you want to use these kinds of commands with the output of other programs or commands. I'll give you a specific example... Let's say you're a Python programmer, and you're trying to debug the flags that you're passing into your program. And so you run your program twice, once with the flag and once without, and you want to compare the output. So the slow way to do this is you run the command the first time, redirect the output to file one, you run it a second time with your flag, redirect to file two, and then you diff the two files, and then you delete the two files.

**Jerod Santo:** That's how I would do it. \[laughs\]

**Daniel J. Barrett:** \[18:10\] Exactly. So process substitution is this brilliant technique that I only learned -- only learned 10 years ago; it doesn't -- I guess with 40 years of Unix, I didn't know it for the first 30... Process substitution allows you to create a sort of pretend file, a pretend disk file that fits right into the command line with you. So you wind up typing the word diff, the first command, that would have produced your first output file, the second command that would have produced your second output file, all in the same command line, but you're surrounding those two commands with a particular syntax that happens to be a less than sign, a left parenthesis, and at the other end a right parenthesis. So it winds up looking like diff, less than paren, first command, close paren, and then a space, and then left less than, left paren, the second command, close paren. And what that says is each of those two commands, when they produce their output, that output will behave as if it were in a disk file that doesn't have a name...

**Jerod Santo:** Okay.

**Daniel J. Barrett:** ...and diff will diff those two pieces of output right there in a single command.

**Jerod Santo:** So inside the less than parens section, the substitution section, is your actual Python execution process, right? In your example.

**Daniel J. Barrett:** Yes. You'd say less than, paren, Python, foo.py, close paren. And then \[unintelligible 00:19:37.18\]

**Jerod Santo:** Okay. So it's effectively like taking the output from a process and like giving us some sort of virtual file thing that links this until the command ends, kind of a thing?

**Daniel J. Barrett:** Exactly. And that's why it's called process substitution,

**Jerod Santo:** Okay, this is news to me. This is cool.

**Daniel J. Barrett:** Check it out, man.

**Adam Stacoviak:** Check it out, man... \[laughter\]

**Jerod Santo:** Yeah. I'm learning neat stuff. \[laughs\]

**Daniel J. Barrett:** You can even do stuff like create a pretend file and copy it to a disk file. You could say CP, and then one of these funky process substitutions, and then destination file. And the initial file never formally exists on disk, but you copy it. And that output can be whatever you want, and it just winds up in this sort of pretend file. I know that there are probably some Linux gurus out there grimacing every time I say pretend file, but for the purposes of our discussion here, it's kind of a simplified description. Really, it has to do more with file descriptors, but we'll kind of skip over that.

**Jerod Santo:** Yeah. Well, there's the practical knowledge of how to use the things, and then there's the deeper knowledge of how all the things work... And there's a place for both of them, but you don't necessarily have to have the latter in order to take advantage of the former. So I'm happy just to learn the commands, and then maybe eventually there's a reason why I dig deeper and realize exactly what's going on... But the beauty of it is when you don't necessarily have to. That's like a good abstraction, right?

Okay, so process substitution... Okay, I've got one new thing to go try... Do you have any other times where that might be useful? I mean, I think your example was a good one - two Python programs comparing the output. Are there other ones where that are kind of obvious? Or is it kind of just wait until you're in that moment and you'll know it?

**Daniel J. Barrett:** I think what would be valuable to say here is kind of the concept. When you are working with a command that requires a disk file, and you want to send it information that's coming from standard output rather than using a disk file, this is the widget that connects those two things up.

**Jerod Santo:** Gotcha.

**Daniel J. Barrett:** That's what I would say.

**Jerod Santo:** No, that's helpful.

**Daniel J. Barrett:** So anytime you have a program that works only with disk files, this is a quick way to make it work with files that produce standard output, or commands that produce standard output.

**Jerod Santo:** \[21:54\] And it would probably make sense with almost every command that follows the source file, destination file syntax. Like, \[unintelligible 00:21:58.21\] give me the source, then give me the destination. Diff - give me the left, and give me the right, or whatever it is.

**Daniel J. Barrett:** Yeah.

**Jerod Santo:** And I have that two argument default, versus just reading from STDIN, or something. Or STDOUT, excuse me. It'd probably useful for all of those such commands. Alright, awesome. So that's two. We've got command substitution, process substitution...

**Adam Stacoviak:** I've got a question for you, Jerod...

**Jerod Santo:** Yeah, go ahead, Adam.

**Adam Stacoviak:** This which command, Jerod - and I guess to you as well, Dan... Speed draw - who answers first? When you type which and you're finding that file, you want to find the path to that file, because you want to -- command substitution I believe is the one you're doing that with...

**Jerod Santo:** Right.

**Adam Stacoviak:** ...are you typing that filename out, or are you tabbing to discover that file name? Because I'm thinking, if your file name is challenging, and you have to remember that file name, it's like one more muscle memory to do in that process. Like, when you type that which command to find that file to vim it, how are you doing that? What's the exact keystrokes?

**Jerod Santo:** Yeah, the exact keystrokes. So most of the time, this is an executable file, because it's like a script that I've written, and so I know what it's called. We have one called "db recreate dev", which recreates the development environment. And so that's in my path somewhere, and it's executable. And so I can type "db\_ tab"...

**Adam Stacoviak:** Right, and that completes it.

**Jerod Santo:** ...and that will give me the full executable name. And then I'll usually just use Ctrl+A to go back to the beginning the line and type which, space, Enter.

**Adam Stacoviak:** Ah, I see.

**Jerod Santo:** That would be my full move, and then that would give me the entire path plus the file name. And then I'd wrap it in backticks and type vim.

**Adam Stacoviak:** Okay. That makes a lot more sense. I was thinking, if you're typing bim, and then the backtick, and then which - it's not gonna complete that file name, so then you have to remember it... And then here you are, hacking your time together well, like you're being efficient, but then you're manually typing the name of this file name, and you have to remember it... So you must have muscle memory of every file name you want to \[unintelligible 00:23:44.01\] your bin folder, and the executable file, or whatever.

**Jerod Santo:** Yeah... These are executables that I use often, or at least enough... But the same thing would work with anything. Like, the reason why you type which generally is because maybe there's multiple ls'es on your system, which in my case there are, because I actually \[unintelligible 00:24:00.15\] in my own little function. But in that case, you're kind of like "Hey, which version of Postgres am I actually calling?" So like which Postgres. It's going to show you the full absolute path. But if that executable happens to be a plain text file, which they almost always are, then you can just - in the case of my scripts, they are just text files. Then you can just vim it, and there you go.

**Adam Stacoviak:** I love it. That's a great little hack. Now, Dan, is that how you would do it? Is there a better way? ...given now you know his keystrokes to get there.

**Jerod Santo:** School us, Daniel. School us.

**Daniel J. Barrett:** No, I like your trick. In fact, one slight variation on it would be - let's say you wanted to make a local copy of that script that's somewhere out there in your search path. So you could say cp, backtick, which, name of script, close backtick, and then a space, and then a dot. And that will produce the command line cp full path to script dot, and make a local copy for you that you could then edit.

**Jerod Santo:** Right... Copy it in your local directory.

**Daniel J. Barrett:** Yeah.

**Jerod Santo:** Good idea.

**Daniel J. Barrett:** So... Ready for another one?

**Jerod Santo:** Yeah, man. Give us some more.

**Adam Stacoviak:** Hit us. Hit us.

**Daniel J. Barrett:** So since you mentioned the search path, I want to talk about one that a lot of people don't know about, but it's a real game-changer for navigating your file system. And that is called the CD path. I don't know if you're familiar with it, but... Think about what your search path is - it's a list of directories where executable programs are kept. So when you type just the bare name of a command at your command line, behind the scenes the shell searches that entire list of directories until it finds the first match, and it runs that program. So ls is sitting in your user bin or your bin directory, that's in your path, you type ls, and the shell finds the proper ls executable. There is a second variable, not path, but CD path, that does the same thing for just the command CD.

**Jerod Santo:** Okay...

**Daniel J. Barrett:** \[25:55\] It searches a list of directories for a destination that you type. So let's say that you've got a directory that you often visit of your own, somewhere deep in your home directory. Let's say it's your home directory, and then you have a subdirectory called finances, and under that you have a subdirectory called bank. And you often go to the bank subdirectory, because you want to look stuff up about your finances, let's say. So it's home, finances, bank. If you are off somewhere in the file system, doing your work, and you want to get to that deeply-nested directory, you have to type the full path. So CD~/finances/bank, and you can imagine 10 levels deep instead of two levels deep.

The CD path is a shortcut that lets you say, "I've got a collection of directories that I often visit, so I want you to search for the subdirectory I'm looking for in all of those directories till you find the first match, just like you search for a command and find the first match."

So I can set up a CD path that includes the directory Finances, and then no matter where I am in the file system, no matter where I am, I can type CD bank, and it'll bring me to ~/finances/bank, because the Finances directory is in my CD path. And if you are aware of this, and you set up a CD path let's say for all the first-level directories inside home, you can get to every directory, two levels deep, that you own, with a single CD, with no path typing.

**Jerod Santo:** I like that.

**Adam Stacoviak:** Now you're talking.

**Jerod Santo:** Yeah. I know there's third party tools that are like CD on steroids that provide that kind of thing. I think there's one called Jump, and one called Zoxide. But that's always like teach yourself how to use the Z instead of the CD, and it's like "Well, I've been typing CD for 20 years, man. I'm not gonna stop typing it." Yes, I know you can alias it, but... I didn't know that was built in. It's also nice the portability. Like, is that just a standard thing in probably every Linux out there, versus "Does this machine have Zoxide installed onto it? No, it doesn't. Oh, now I've gotta go get Rust", or whatever it is. I think it's probably precompiled, but you know what I'm saying.

So that's cool. So CD path... So you just set that in your environment, and you just put into it -- is it just like similar to the path, like colon separated list of names, or how do you do it?

**Daniel J. Barrett:** Exactly, exactly. And there are a couple of key items you can put into your CD path that make it even more useful. For example, you can put in the relative path dot dot. And what that means is you can CD to any sibling directory, because that's dot dot first, and then back to a sibling.

**Jerod Santo:** Oh...

**Daniel J. Barrett:** And so whereas the first explanation I gave you a CD path was about getting to absolute paths quickly, you can also CD to any of your siblings immediately with no path typing.

**Jerod Santo:** It feels like I'm gonna get like path overload or something at this point. Like, if I put so many -- no?

**Daniel J. Barrett:** It just works... Unless you have duplicated, identically-named subdirectories in some of these other directories... You have a race -- not a race condition, but you can have, you know, the first one wins. But the number of those compared to the utility of doing this is really small.

The dot dot example is really helpful. For example, when you're programming, let's say you've got a bin directory, a source directory, a lib directory, an etc directory, all local in your current directory, and you can jump back and forth between them just by typing CD etc, CD bin, CD lib... There's none of this dot dot stuff. It happens for you, because it's in the CD path.

**Break**: \[29:44\]

**Jerod Santo:** I can see that biting me if I have a bunch of code-generated projects. For people who have a lots of projects, especially - like, imagine a Next.js programmer who uses Next.js on every project, they're going to codegen, they're gonna skeleton out that app like seven times. And so maybe they have seven of those lib directories. I'm not sure if Next.js has a lib, but if they do, then you're like "Well, which one am I getting into?" And it's really just the first one you put in your CD path, I guess, but...

**Daniel J. Barrett:** Well, in this case, if they are all siblings, the bin, lib and so forth, you will only go to your local sibling if dot dot is in your path.

**Jerod Santo:** Oh, I see. You put dot dot first and then you're always gonna go...

**Adam Stacoviak:** So it's isolated to your current directory, essentially. Your working directory.

**Daniel J. Barrett:** Exactly.

**Jerod Santo:** Well, it hits that one first and then goes beyond, right?

**Daniel J. Barrett:** Right, because the meaning of dot changes depending on your position in the file system.

**Jerod Santo:** Okay, I'm back. You got me back. I was skeptical, but I'm back.

**Adam Stacoviak:** When you learn these hacks to sort of hack your Linux together the way you want to, isn't it a challenge though when you move to a different installation? Let's say you're SSH-ing into a remote server that does not have all these niceties set up. Is this primarily, a lot of this advice - one, just good knowledge to have, but then two, what you would probably do on your local Linux desktop? Like the thing you sort of tweak out, and every time you move to a new machine, you're tweaking it out. This is not something you do on every single machine, because - I mean, I can't imagine you're setting your CD path on every single machine you're going to. That would be tedious.

**Daniel J. Barrett:** Well, that's a great question, and in some sense, the practical answer is GitHub. Make a GitHub account, store your dotfiles there, and no matter where you go, just do a Git clone, and you're set... If you have write access to the machines that you're using, and you're allowed to make those changes. But if you can, it's great to have your dotfiles travel with you like that.

**Adam Stacoviak:** You become dependent on these hacks though, to some degree. They're not really hacks, of course, but they're like fine-tuning your own machine.

**Jerod Santo:** Right.

**Daniel J. Barrett:** Yup.

**Jerod Santo:** Yeah, but if you SSH into some machine, and you're like "Oh, I'm so used to just not having to do the dot dot dance, and now I have to", well, then you just edit your bashrc and add CD path equals dot dot, and then you're good to go on that machine.

**Adam Stacoviak:** That's it, huh?

**Jerod Santo:** ...if you don't have Daniel's GitHub setup. I'm just saying, it's not like these things are difficult to replicate...

**Adam Stacoviak:** I'm thinking on the advice that we got from Gary Bernhardt on your Vim episode, Jerod. He keeps his Vim vanilla for a lot of reasons. And this is almost the same story - keep your Linux vanilla, to some degree, because then every Linux you go to is Linux.

**Jerod Santo:** Sure. This is the first one where it's actually a config though. I think Daniel has been just giving us actual command line skills, and now he has one that's a -- and you can export an environment variable, ad hoc, right there, in your current session, and have it disappear afterwards if you want.

**Daniel J. Barrett:** Yeah. I think I would also maybe add to what you said Adam, which is it's important to know how to use vanilla Linux. Now whether you want your primary machine to be vanilla Linux or not, that's another question. But vanilla VI, vanilla Emacs, that kind of stuff is a really good skill to have, because you will always be pointing up on a machine that you don't have your dotfiles.

**Jerod Santo:** Right. Alright, that's three. I like this. This one's new to me as well, so you're two for three on new ones for me. Do you have any other big wins?

**Daniel J. Barrett:** Oh yeah, I could keep going all afternoon, but... Another one that was really transformative to me was - it's a little bit inspired by the Lisp community where, you know, in Lisp code and data are fairly equivalent, because you can emit strings and execute them as code, and so forth... You can do similar things on the command line because your shell - I'm going to assume your shell is Bash, just for ease of conversation... Bash reads from standard input. And when you launch it, it's just a regular old command. Linux launches it for you when you log in, so it's kind of hidden in that way. But you can run "bash" and hit Enter, and it will do something; it'll start a shell, and then you hit Ctrl+D and exit, and the shell is done. It's just a plain old command. And if you know this, you can use that command to your advantage.

\[36:10\] For example, we all know the echo command; it just prints its arguments. So you can echo Hello World, and Hello World prints on the screen. You can also echo ls. Think about that for a minute. You echo ls. All that does is print the word ls on the screen. Not very useful, but you can also say "echo ls pipe bash". What do you think that does?

**Jerod Santo:** It probably tells Bash to execute that command?

**Daniel J. Barrett:** It executes the ls command that it received on STDIN. So what this means -- that's a trivial example. What this means is you can use other Linux commands to create sequences of commands that you would like to execute, and ultimately pipe them to Bash for execution.

Now, you may have seen things like this. There are a few software packages out there that ask you to run a curl command to download them and pipe them into a shell to install, and I always feel it's a little risky when folks do that... But that's an example of sending the output of a Linux command into Bash.

I'll give you a practical example of something you can do on your own, because when you're running a curl command, you're getting stuff from some third party and you don't know what's in it. But if it's your own stuff that you're generating, you're generating your own lines of text, you can check them 100 times before you send them to Bash. So here's an example that I ran into, actually, as I was writing Efficient Linux at the Command Line. At a certain point, I had 10 or 12 Chapter files, and I needed to create a new file and insert it into the middle of the book, a new chapter. So my chapters 5 through 10 had to become chapters 6 through 11. And I could sit there and type six or seven move commands by hand to make that happen, and move those files into names with integers that are one higher, and then create my new file. But I wanted to do this all in one shot, just for the challenge of it, and so I wrote a small script that generated the move commands I wanted. So it output the lines \[unintelligible 00:38:18.15\] chapter five, chapter six, and the chapter four, chapter five, and move chapter three to chapter four, and so forth. And that script was actually one command on the command line; it wasn't like a loop, or anything. And with that output, I just put at the end of it "pipe into bash" and then it ran.

**Jerod Santo:** Instead of like saving that as a file and executing the file, you just--

**Daniel J. Barrett:** Exactly. Or instead of writing a loop... Like, "For i going from five to 10, do this move command." And this -- it's probably easier to understand when you see it in the book, but the idea that you can generate any text you want and feed it to Bash for execution means that you can use all kinds of Linux tricks to produce sequences of commands that you can then run in one shot. Actually, now that I've talked about process substitution, and command substitution, and piping to Bash, there are probably 15 different ways you can run commands to produce various effects. You've got those three, you've got pipes, you've got a whole bunch of others that I haven't gone into yet. And the key here is flexibility. If you know how to do something in multiple ways, your toolbox is set up for you to work more efficiently.

Here's a trivial example: suppose you just wanted to list all the Python files in your current directory. ls star.py. That's what 99.9% of people would write. But if you've got 100 million files in your directory, that ls command is going to choke; actually, the shell is going to choke, because it's got a limited amount of buffer space to hold those file names after it expands that wildcard before it can pass them to ls. What do you do now? Well, you could also just list the files, just ls straight, no wildcards, no anything, and pipe that to grep to find file names that end with .py. That has no length limitations, because now we're talking about lines of text, not one line of text.

\[40:28\] And so the fact that you know two ways to list the files in your directory means that you can do things when you run into trouble, and one of them doesn't work. It's flexibility, and that's a skill that I try to communicate through a lot of conceptual examples in the book. I actually show, I think, 15 ways to list Python files in your current directory, and some of them are absolutely wacko.

**Jerod Santo:** Right. You probably would never do this, but here's another one.

**Daniel J. Barrett:** Yeah. But if you know these techniques, you will at some point find a use for them.

**Jerod Santo:** Right. So stepping back a moment to curl a URL and pipe it into Bash... Is that something that you would never do? Is that something you might do? Just your own personal like risk profile, Dan. Are you against it completely? Have you done it before? Would you do it again? What do you think?

**Daniel J. Barrett:** Yeah. Well, fortunately, instead of piping it to Bash, you can redirect it to a text file, and then you can read what the commands are that would be piped to Bash. And at that point, you're faced with a choice, because sometimes the commands are complicated, and you have to make a decision whether the source is trustworthy, how much your time is worth, how much you need the results of the execution... So yeah, it's a coin toss. I mean, I would never do it for a system that I'd never heard of before... But for example, if you're a Mac user and you use the brew command for installing software - I think brew installs by this technique initially. But brew has been around a long time and is highly trusted. And I suppose it's possible that the brew website could be hacked, and somebody could replace the commands in their installer, but it's not likely to happen the one day that you are running that command. So yeah, I'll do it sometimes. I wouldn't do it at work. But for myself -- you know, if I'm really worried, maybe I'll spin up a virtual machine and run it and see what happens.

**Adam Stacoviak:** There you go.

**Daniel J. Barrett:** But security - you know, it's layers, and you have to decide how much trust you're gonna have in the sources that you work with.

**Jerod Santo:** Right.

**Adam Stacoviak:** I was actually at the Homebrew site and I was gonna ask you about this... I was gonna say "Unpack exactly what this does for us", since you mentioned -- I think it's pretty straightforward though. It's /bin/bash -c, and then a dollar sign, obviously, open parenthesis and then the curl command, then it's -f, lowercase f, lowercase s, uppercase s, uppercase l, and then obviously, the string which is the URL to the .sh command that's on GitHub. And I suppose, to your credit, it might be gitnubusercontent.com versus GitHubusercontent.com. They could have hacked the website and redirected where this path might be, or where they just had the website versus the actual repository, potentially. But the point is, unpack that command - like, what does it do? What is that command to install Homebrew doing? ...which is like what most people do. I almost -- I just go there and copy it, and run this. I've trusted it, every single day.

**Daniel J. Barrett:** Sure. I'm so glad you brought up that example, because it has a couple of really nice techniques in it from a command line standpoint. One of them is I'll mention the dollar sign parenthesis that you saw... That is actually also command substitution. But instead of backticks, it's using a Bash-specific syntax of dollar paren. What's nice about the dollar paren syntax is it is nestable. You can have command substitutions within command substitutions, if you want to have a real exciting day command-line-wise.

\[44:11\] So the inner part of what that command is doing is substituting into the command line the output of some other set of commands. And that string that is being produced by command substitution is being handed as an argument to Bash with the -c option. And bash -c is a very interesting and helpful construction. It tells Bash to execute whatever is in that string as a command. So you could say, as a trivial example, bash -c, in quotes, echo Hello World. And Bash will execute echo Hello World when you say Hello World. Or bash -c ls. That's another way of running the ls command. ls is just a string, it's being handed to Bash with the -c option, meaning "execute me." I'll give it a really great example of using bash -c in a minute that you may recognize, but what that command is doing is saying, "Hello, Homebrew. I'm taking a command that you're providing to me, I'm using a command substitution to insert new text onto a command line, and I'm handing that as a string to Bash to execute." So there's two levels of execution going on there. Within the dollar parentheses there's an execution happening to produce a string. And then that string is being handed to the Bash command explicitly.

**Adam Stacoviak:** So it's kind of like as if you would curl it, this URL, and it prints it out to STDOUT. It's as if that. Because at that point it's a string, and this program, or this .sh file, this executable - it's executable in the repository, but you grab it as a string, and you're saying to Bash "Just execute this string." Which is why it's also beautiful, as well as dangerous.

**Daniel J. Barrett:** Yeah. It's "Here, Bash, blindly execute this string I haven't read."

**Adam Stacoviak:** Right.

**Jerod Santo:** "Whatever comes back from this URL, go ahead and run it."

**Daniel J. Barrett:** Exactly.

**Jerod Santo:** Who wants to play a game of "Who knows their curl flags the best?" Because there's lowercase f, lowercase s...

**Daniel J. Barrett:** \[laughs\] Not me. I'm actually -- I'm a wget fan. I really like wget.

**Jerod Santo:** Ooh...! You don't like to have to specify the special flag to save it to a file; you just want it to save to a file right away? Is that your wget stance?

**Daniel J. Barrett:** Pretty much, yeah. Just grab a file from a URL and stick it, and save it locally. That's what I like. With curl, you have to use the -o option, or redirect to a file, or whatever...

**Jerod Santo:** Right.

**Daniel J. Barrett:** I probably use wget a lot more often, but curl is extremely useful, it's just I don't have the options memorized the way I do, a little better, with wget.

**Jerod Santo:** Alright, I'll try to look them up real quick. So the -f is the fail flag, which tells it to fail fast with no output. So if the HTTP response doesn't come back, it's not going to like barf; it's going to just fail quietly, it seems. Lowercase s - any guesses?

**Daniel J. Barrett:** It's probably silent. Don't print error messages.

**Jerod Santo:** I'm now scrolling... This is a long man page.

**Daniel J. Barrett:** It is...

**Jerod Santo:** Daniel Stenberg, you've been adding lots of flags... Lower case s, silence. Good call there, Dan. Capital S - show errors. So it's used with silent; it makes curl show an error message if it fails. So fail fast, show the errors, but be quiet otherwise. And then -l is the location flag. "If the server reports that the requested page has moved to a different location, this option will make curl redo the request on the new place." So I guess it's kind of like a follow redirects kind of thing...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** ...which is interesting, I guess. I wonder why you would have to specify that. I thought curl would follow redirects by default, but I'm getting a little bit upstream there. Apparently the Homebrew folks liked that flag enough to put it on their default installer.

**Adam Stacoviak:** Yeah. I dig this though. I'm glad you broke this down, because people do this every day and you have to be like "Okay, which of these options?" You know, if you had to leave one out, could you leave the l out, for example? And maybe you could, if you're like "I don't want to follow redirects. So I know the curl command enough, and it's options enough to say, "Okay, I trust this, but as I copy this from the brew.sh site, and I throw it into my terminal, I then edit that command to remove the l, because I just want to trust this single destination only", right? ...which gives you, to Dan's credit, superpowers. You understand your tools enough, and their options, so that when you do it at runtime, you have choices on how to do it three, four different ways... Or not at all.

**Daniel J. Barrett:** \[48:41\] Mm-hm. So since you were kind enough to create a curl options puzzle, I'd like to pose a puzzle as well.

**Adam Stacoviak:** Sweet.

**Daniel J. Barrett:** And this will be related to what we were just talking about. So suppose you've created a wonderful program, and you would like to have it send its output into a log file. So you might type the name of your program, greater than, /var/log/myfile.log. And of course, that's going to fail, because you don't have write permission in the log directory. So you throw a sudo in front of it, and you type "sudo, my program, greater than, path to the log file." That should do it, right?

**Jerod Santo:** Well...

**Daniel J. Barrett:** ...but it doesn't. It fails. It fails. And why does it fail?

**Jerod Santo:** It's a good question. You're escalating your privileges, but you're actually -- yeah, I'd say you're not actually switching users. I don't know why it would fail. My intuition is that it would fail, but I don't know why the intuition is that way. Adam, do you have any guesses?

**Adam Stacoviak:** Maybe because the output - it's maybe sudo on the first thing, but not on the second thing.

**Daniel J. Barrett:** You are close. You're on the right track. The sudo command -- let's make it a little more concrete. I'll give my command a name. Let's just say it's the who command, which prints a list of users on the system. So "sudo who" - it sounds like a Dr. Seuss book... "Sudo who, greater than, var log, myfile.log". Sudo does escalate the privileges of the who command. But the greater than symbol is a construct of the shell, not of the who command. So you have to escalate, you have to give root privileges for the whole command line. And the best way to do that is our friend bash -c.

**Adam Stacoviak:** Okay...

**Daniel J. Barrett:** Just like in Homebrew. So you say sudo bash -c, quote, who, greater than, var log, myfile.log, close quote. And that will work, because now the shell that is being invoked by Bash to run the string inside the quotes now has root privileges.

**Jerod Santo:** Gotcha. So I've run into that inside of cron tabs, where like the cron tab - it works when I'm running it from my environment, but inside Cron it doesn't work anymore, and so then you're like "Well, just bin bash -c and then do it, and it's gonna work." I never knew why that would actually work, I'm just like "That's my fix" and I just do that every time. That makes sense.

**Daniel J. Barrett:** Yup. So now you have the concepts for that, and it's one of 15 or so ways I mentioned of running commands: command substitution, process substitution, piping a Bash, pipelines in general, plain old commands, bash -c, and there's seven or eight others that once you know them, you have that flexibility that I was mentioning, too.

**Adam Stacoviak:** It's funny that Jerod uses it plenty of times. I didn't know about it at all. However, I've used it every time I've installed Homebrew, so there you go. But he didn't understand why it works. It's the why that's really important. And I really hate to go this far into a show and not mention ChatGPT. ChatGPT has taught me so much about Bash, about the shell, whether it's Zsh or a Bash shell... And that's just a cool thing. Now you can kind of learn. If you were like "Hey, I need to execute something inside of a cron job, and I need to make the whole command use the sudo command." Well, the ChatGPT LLM might tell you exactly what you just did, Dan. But here we are, having to wait to do this show for 14 years and finally get you on to explain why bash -c does that.

**Daniel J. Barrett:** \[52:23\] I'm glad you brought up ChatGPT, because I've seen a number of articles recently about exactly what you're describing, asking ChatGPT for a Linux command... So you give an English description, a description in whatever your home language is, and it tells you what command to run. And in every single one of the articles that I've seen, there's been at least one fatal, dangerous command produced by ChatGPT that is not noticed by the writer of the article. I'll give you one example.

I saw one article where a writer asked, I think, for a chmod command to make all the files in their current directory read-only. I don't remember exactly the way they phrased it to ChatGPT, but what it returned to the person was a recursive command that changes the permissions on all files in the entire tree. And the way the question was phrased, it could have meant either one - just the current directory, or current directory and all subdirectories. And if you are just taking instruction from ChatGPT and don't know what the options mean, you can destroy the permissions on far more files than you meant to change, with no way to restore them.

**Jerod Santo:** Yeah... I've been using it long enough now that I'm just getting more and more skeptical of its responses, because it's been wrong enough... I think it's best at giving you information that you once knew. Because then you're like "Yup, that's it. I couldn't remember it, but you got it", but then when it gives you the one that's wrong, you're like "No, that's wrong. Like, you have to actually know that it's wrong, and able to be able to use it with confidence... Because it's been wrong so many times now for me that I'm just like "I'm not even gonna ask you anymore, because you get it wrong 9 out of 10." It's like, it started off much better. I don't know what's going on. Which reminds me - did you guys hear about this whole ChatGPT package hallucination security vulnerability going on right now?

**Adam Stacoviak:** No.

**Jerod Santo:** So I put it -- it was in Changelog News this week...

**Adam Stacoviak:** I missed it. I haven't listened yet. Spoiler.

**Jerod Santo:** Yeah, this is kind of scary... So there's a team at Vulcan, which is like an InfoSec company, I believe... And they've found a new vulnerability where if you ask Chad GBT - I think it's specifically like in the npm JavaScript world, mostly - for like libraries or solutions to problems that require you to install a third party library, it will sometimes hallucinate fake libraries that don't actually exist. And so malicious attackers will go out and they'll squat those libraries, and they'll make them exist, and they'll put their own malicious code into. It's called "AI package hallucination vulnerability." That's pretty bad.

**Daniel J. Barrett:** Yeah... Evil, evil, evil.

**Jerod Santo:** I mean, it's like a whole new thing that didn't exist.

**Daniel J. Barrett:** Yeah... I mean, this all kind of harkens back to something we talked about earlier, which is having that conceptual knowledge. Maybe you learned Linux through trial and error, and at a certain point it's very valuable to get those concepts... Because once you have them, you're just so much better equipped to be able to evaluate the answers that you're getting back from a bot, or what have you, in addition to the ability to create commands with more flexibility.

**Jerod Santo:** Hopefully, they will get better from here, but potentially not. Time will tell...

**Adam Stacoviak:** So these hallucinations are well known with what they're going to hallucinate. How was the attacker learning about the packages that are being hallucinated?

**Jerod Santo:** The attacker uses the tool in order to force it to hallucinate something. And then it goes and puts something in that location and just waits for somebody else to hit it with the same line of questioning, basically. That's their attack vector.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What question would the npm world have commonly that I can leverage as an attack vector?

**Jerod Santo:** "How would I leftpad a string with a bunch of spaces?"

**Adam Stacoviak:** Wow...

**Jerod Santo:** That's a little joke for those of us in the --

**Adam Stacoviak:** \[56:08\] No, that really is interesting. And to my credit, I do recall listening to that part of it, so do you recall the hallucination part.

**Jerod Santo:** Okay.

**Adam Stacoviak:** I didn't listen to the full episode yet though, but I did listen to that part.

**Jerod Santo:** Regardless...

**Adam Stacoviak:** Yes. Well, I had to get my back. I mean, I listen to our shows. I'm a listener, as well as a host... \[laughter\]

**Jerod Santo:** So Daniel, going back to the beginning of our show, I brought up that example from your post with the Python dev who doesn't work at Google, but works on Python nonetheless, who was doing kind of the dorky style back and forth... And you mentioned there's a much better way, and Adam said "There is?" and then we said, "Yes, there is", but we never actually explained it. Do you want to launch back around to that? You were talking about job control...

**Adam Stacoviak:** I want to learn this too, so please explain it.

**Jerod Santo:** You want to learn this. This is good.

**Daniel J. Barrett:** Yeah. So the use case we're talking about is you are working in a single terminal... So maybe you're over an SSH connection to a server... Because if you're able to create multiple windows, this whole thing, whole problem goes away, because you can compile in one window and edit in another. So what this engineer was doing was in a single window they would jump into their editor, they would fix whatever the next thing they wanted to do in their code, quit the editor, they would run the program or compile or whatever they needed to do, and see what happened, and then they would restart their editor, find where they had been before, and continue editing. So there was a lot of stopping and starting, and reestablishing the context of where they had previously been.

But the Linux shells all have a feature called job control, which allows you to temporarily suspend commands and bring them back into the foreground, as they're called. So when you're in your editor, for example, you can type a keystroke that will cause the shell to suspend the editor, which will just give you your prompt back. The editor is still running in memory - I should say it's still in memory, but it's been stopped. It has a different process state; it stopped. And then you can run your Python program, or compiler, whatever you want, and when you want to go back to restore the state of where you'd been, you simply type "fg", a short for foreground, and hit Enter, and it brings back into the foreground the process that had been suspended, which is your editor. And so that is a much quicker way to jump back where you were when you were editing, then quitting and restarting and trying to find where you were. And that particular individual shaved hours off of their coding time from this.

**Adam Stacoviak:** Oh my gosh, I can only imagine the fatigue...

**Jerod Santo:** Right...

**Daniel J. Barrett:** Yeah.

**Jerod Santo:** So this one - Adam, you mentioned Gary Bernhardt on our Vim episode... I remember he did that Vim With Me video... And he uses this extensively. And his fingers are so fast at it, that he just Ctrl+Z's and then fg's -- like, you Ctrl+Z, you run a rest, fg. And he does it so fast that you have to like stop him and say, "Would you just show me what you did there?" Because he's like hopping back and forth between Vim and the command line. And it is the fastest thing that you'll -- in terms of navigating in a single window.

**Adam Stacoviak:** So what's the command to get out of Vim then to do this?

**Jerod Santo:** Ctrl+Z, right?

**Daniel J. Barrett:** Yeah, Ctrl+Z, like zebra. That's right.

**Jerod Santo:** Yeah. And that will background it and send you back to the command line. And then fg to foreground it.

**Adam Stacoviak:** Wow. So I just had Vim opened, I was prepared for this... I Ctrl+Z'ed just now, and it says - for whatever reason; I guess the process number, PID - suspended Vim, and then the path my file was in. So to get back, it's just fg?

**Daniel J. Barrett:** Yup, fg. And if you happen to have multiple processes all suspended in the same shell, each of them has an integer job ID associated with it that you can refer to with the FG command. So if you want to resume job number three, it would be fg, space, percent, three. And that would bring job three back into the foreground.

\[59:55\] Now, jobs and processes are different things. You're familiar with process IDs; you type ps, you see the \[unintelligible 00:59:59.00\] process IDs... And those are known to Linux. Job IDs are only known to your running shell. The Linux operating system doesn't know about them. So within a single shell instance that you're running interactively, every command you launch is a job as well. And if you have a long-running job, and you happen to Ctrl+Z it to suspend it, it will have a job ID that you can access and put it in the foreground, throw it into the background, do what you like.

**Jerod Santo:** Right. So this isn't useful in the case of losing a connection to a remote server, because that job isn't going to sit around in memory if your connection disappears. Whereas you have tools like GNU Screen, or Tmux, where you can attach and detach those sessions, and they persist between connections. But this is more ephemeral than that. If you lose your shell, you lose your jobs, basically. Is that right?

**Daniel J. Barrett:** Yes. Yeah, pretty much. The fact that you mentioned remote connections is also interesting, because when you SSH to a remote server, sometimes you want to suspend that SSH connection and do a bunch of stuff and then resume it. And you can also use job control for that. But because you are running SSH on a remote server, you need to disambiguate whether your Ctrl+Z is for a process on the remote server, or if you want it to actually suspend SSH. And for that, you need to type the SSH escape character, which is a tilde on a line by itself. So like Enter tilde. And the next character you type will be a command to the SSH process, and you can suspend it. So tilde Ctrl+Z will suspend an SSH process, and then ordinary fg will just resume it again. And that's super-useful, especially if you've just got one terminal in front of you, or you're working on your phone or something over an SSH connection. That can be good.

**Jerod Santo:** Right. I think this is also a good argument for something like Screen or Tmux, because they provide a suite of tools specifically for this, as well as cool stuff like collaborating on a single terminal, and stuff... So connecting two people to one, cool stuff like that, which is kind of above and beyond what the foreground thing is... But this is just great, especially if you're just vimming away and you want to do something real quick and then get right back to it... Super-fast.

**Daniel J. Barrett:** Yeah.

**Jerod Santo:** Or nano-ing away, or emacs-ing a way. I don't want to be particular here.

**Adam Stacoviak:** Vim, Jerod. Vim.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I moved to Vim. I used to be a Vi guy, or a Nano person. And then with all the Vim conversations we've had over the last couple years, I was like "I should just like learn the basics really, really well, and just force myself", and I did that.

**Jerod Santo:** What do you use, Daniel?

**Daniel J. Barrett:** I use Emacs. I started on an editor called Jove... It was just short for "Jonathan's own version of Emacs." It's a really simplified Emacs clone. At a certain point, it was no longer maintained. I don't know what happened to Jonathan... So I started using GNU Emacs. And when I started using it, CPUs were still fairly slow and memory was still fairly limited, so it was not a particularly pleasant experience... But today, it's just as fast as any other editor, and I really like the programming language built in. I read my mail in Emacs, which is really nice... Well, it gives you Emacs as a text editor for composing your replies and stuff, so... No, I do use Vim; I certainly have used it. If you like that kind of mode-switching model, then it's a wonderful editor. And it is also very flexible and configurable. But I've been using Emacs for so many years the muscle movements are hardcoded into my fingers at this point, and with my eyes closed I can edit... So I just keep using it.

**Jerod Santo:** Well, you're not alone in that. We come across Emacs users from time to time; they're less vocal and passionate from Vim folks. Vim folks like to talk about it a lot, but Emacs are the silent majority; they're just out there getting the work done...

**Daniel J. Barrett:** Yeah.

**Jerod Santo:** But yeah, I have never really used Emacs. Like I said, back in college I was just forced into Vim by my teacher, and once I got over that ridiculous learning curve, it's like "Hey, sunk costs fallacy." I put so much work into learning this, why would I try to go do something else? Like, I already know it now.

**Daniel J. Barrett:** \[01:04:16.03\] Yeah. Well, What's lovely about Vim is that a lot of the keystrokes that you use are also usable in other Linux commands, like Sed, and Ed. Actually, I lied. Ed was my first editor, which is a line editor where you don't see what you're working on. And you get a prompt and you type some weird substitution command, and it just works... And when I was in college, I had to use Ed for writing assembly language, and that was quite an experience. I'm sure I've forgotten all my assembly at this point... But if you know Vim, then using a stream editor like Sed, which is a fantastic command that's so flexible for producing powerful effects on the command line, then you're at an advantage if you use Vim, because you already know some of the syntax.

**Jerod Santo:** Well said. Do we have any more big wins? I know we're gonna get progressively smaller, but they're still going to be interesting... So I'll just keep going, Daniel, and you'll have to tell us \[unintelligible 01:05:12.23\]

**Adam Stacoviak:** \[laughs\]

**Daniel J. Barrett:** No, I've got one other win, and this was also one of the transformative concepts... And that was the use of what's called the directory stack for moving around the file system. So these are the commands called pushd, pushd, and dirs. Have you run across those?

**Jerod Santo:** I'm aware of them, I think mostly in reference with some of these other third party CD replacements, because they kind of have that whole stack thing and they're like "You don't have to use pushd and popd." But please, expand.

**Daniel J. Barrett:** Okay. Well, this changed my whole use of Linux. I type pushd and popd more often than I type CD these days. But before I geek out too much, let's give a little bit of context...
So normally, when you are working in Linux, you can CD by an absolute path, starting with slash, all the way from the root up. So you can say CD/a/b/d/d/f, and move long distances in the file system. The problem is when you do that, and you need to get back where you're where, you've got to keep typing these really long paths. And honestly, one of the biggest obstacles I think to new Linux users is typing all these long paths. And so the directory stack is a way to reduce your typing significantly when you are working in a collection of directories that you use frequently.

An example I give in the book Efficient Linux at the Command Line goes like this: let's say you're a web developer. And web developers frequently work in at least four different common directories in the Linux system. You've got the directory where you're developing. That could be anywhere in your home directory, let's say. Then you've got the Apache directory, where you've got to configure your web server. That's /etc/apache2, or whatever it might be. Then you've got a directory where SSL certificates are kept; that's like \[unintelligible 01:07:17.18\] And then you've got the directory where your web files get deployed, which is like \[unintelligible 01:07:23.06\] blah, blah, blah. So you've got to keep moving between all these different directories while you're working. And if you have four windows open, one to each directory, that's great. But if you're over an SSH connection, or you just want to work in one window, you've got a lot of CD-ing and a lot of slashes.

The directory stack gives you a quick ways to say "Bring me back to that place I was working a minute ago. It doesn't matter where it was, or what it was called, just get me back." The simplest use of this is to type CD, slash, and then a hyphen; just a dash. And a lot of people know that one. That's a good trick for --

**Jerod Santo:** I didn't know that was part of this system, but yeah, I use that all the time.

**Daniel J. Barrett:** \[01:08:05.20\] I'm not sure that it is, but it's all part of the shell, so I suppose in some sense it's part of the system.

**Jerod Santo:** Sure.

**Daniel J. Barrett:** But that's the easy one. That says "Take me back where I was." So if you were in your home work directory, and you need to go to the Apache directory, you can type in CD dash, CD dash, CD dash, and bounce back and forth between those two. The problem is if you CD anywhere else --

**Jerod Santo:** You've lost it.

**Daniel J. Barrett:** ...now you've lost context of where you are and you can't do that anymore, and now you're going to have to type some long path to get you back. The directory stack is not limited to two directories; it can be as many as you want, and they're arranged like a stack, like a traditional computer science stack. In computer science it's last in first out, and you can keep pushing directories onto the stack, piling them up, and then popping them off to go back where you were.

So the command pushd is a substitute for CD that says "CD where I want to go, but also push a directory onto the stack." And you keep doing pushd's, the stack grows, and then you can pop them off. And this is a great way to move around the file system, because not only can you push and pop, you can also swap. So you can have the same effect as cd-, but not lose your context. It's so great... Once you start using these commands, you will be absolutely hooked and you'll probably want to alias them to shorter names than pushd and popd.

**Jerod Santo:** I was about to say that... They seem like too long to be using that often.

**Daniel J. Barrett:** Yeah, yeah. So I do GD... My pushd is GD, for like get directory, and PD for popd. And so yeah, all the time... And then you can examine your stack, you can manipulate the stack, you can take things out of the middle of the stack, so it's really not a stack, it's more like a linked list... But you still call it a stack. And this completely changed my navigation. That and the CD path I mentioned earlier - it's so easy now to get anywhere I need to go in very little typing.

**Adam Stacoviak:** Have you ever made any videos of you doing this kind of stuff? An over the shoulder kind of situation, where you essentially -- instead of explaining to us how it works, you demonstrate to us how it works. Obviously, a podcast would not work for this in audio form only... But have you ever done that where it's like in video, over your shoulder, and you're explaining exactly what you did, but not in theory, but in actual practice?

**Daniel J. Barrett:** I would love to do some videos. I'm not particularly adept at video making, so I'd probably -- obviously, I can set up a phone and just talk, or a screen recorder... So at some point I'd like to do that, but at present, it's all in books, and a couple of articles here and there. But in the books, what I do is I show the output of every single stage of the command as it's being built. So let's say it's a ten-pipe command; I'll show what happens with the initial command, and then after one pipe, after two, after three, after four, and highlight what's different. So I try to make it very, very educational and easy to read... But I have not done the video way of doing things. I'd love to, when I can find the time.

**Adam Stacoviak:** Well, I've seen somebody called \[unintelligible 01:11:17.12\] if you've seen him out there... He's on YouTube; essentially took his terminal from vanilla Vim to phenomenal Vim, in a matter of like minutes. And you watch him -- similar to Gary Bernhardt, Jerod, as you were saying, with Ctrl+Z, fg... So fast. You see him move just so fast. And one, you want to not so much just see somebody be that fast, but you want to learn what they've learned to fine-tune their tool to enable them to be that efficient, just like you're saying with your book title, being efficient. And I just wonder, people who are like you all, who know this so deeply, and it's ingrained in you, how do you - aside from writing it down - demonstrate it in a way that is replicable? Could I go and watch a 10-video series of Daniel giving me the ten ways to be most efficient every day with Vim? Or not with Vim, but with Linux at large. That would be transformative for so many people, because it's video, you see it being demonstrated, and all you do is emulate it until you get mostly good at it, if not expert level at it.

**Daniel J. Barrett:** \[01:12:24.26\] Yeah, that would be great. I would love to do something like that. It's pretty quick to put a video together, but then you have to go back and edit it, and take out the parts you've made the mistakes, and so forth... At the moment, I'm working on two other books, so it's kind of hard to partition my time in an efficient way, so that all that stuff can get done. \[laughs\]

**Adam Stacoviak:** So much efficiency. Well, the reason I also asked you that question is because it seems that your career track - which we have not talked about really at all - is you've been head of education of some sort, you've been the person who has been in charge of ensuring that other teams and the organization at large has someone on their side to help them learn better; essentially, an educator, if I understand your career path, to some degree. I would imagine with that kind of title and that kind of responsibility, you have resources that says "Okay, Dan is not great at video, but somebody else is", and they can essentially be your support... And you're just the talent. And not just in a negative way, but like all you've got to do is be who you are, and exude what you exude every day, like you're doing on this podcast, but in a form that's -- you know, people are gonna listen to this show, they're gonna buy your book, but it's gonna go so far. Because if you don't see it in the speed that you can do it at, and see the commands you're running, it doesn't quite get that full fidelity of learning.

**Daniel J. Barrett:** Yeah, that's a really good point. And you're right, in the workplace there's a video team, there are technical writers and so forth, who can jump in and help out with these kinds of things... I will mention that in both Efficient Linux at the Command Line and also the previous Linux Pocket Guide, there are downloadable examples which in a lot of cases will mimic exactly the directory structure that the commands in the book are running in. So you can type those commands and see exactly the same thing happen. So that can also be a way of educating. It's not video, but it's an additional way.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So these are both O'Reilly books, right?

**Daniel J. Barrett:** Yes, they're both O'Reilly books. I've been working with O'Reilly since the early '90s, and probably have done about 11 or 12 books with them at this point.

**Jerod Santo:** I imagine O'Reilly would be all over this, right? These are great marketing materials for the books, they're add on things...

**Daniel J. Barrett:** Yeah. They have asked me a number of times to do online Linux courses, and the timing has just never worked out. So never say never; it could happen, and it would be fun. But we have only so many hours in the day.

**Jerod Santo:** For sure. And two books in the works. Anything you want to tease out on that, or they're too far away to talk about?

**Daniel J. Barrett:** I'll say at this point that one is a Linux-related book, and the other one is completely different from anything I've ever written before. I mean, previous books I've done, there's one on SSH. SSH, the Definitive Guide is one that people may be familiar with. There's another one on media wiki. I'm very, very into the software that drives Wikipedia, and I've built some Wikipedia-based software in the past. There's one called the Linux Security Cookbook, which is a little about keeping your system secure... But that one is fairly old at this point. So for concepts it's good, but not necessarily for being up to date.

\[01:15:42.24\] There's a Mac Terminal Pocket Guide, which is just like the Linux Pocket Guide, but it's Mac-specific... But this new one is more about software practice in general within the world today. It's about how to be a responsible software engineer given all of the controversies that are swirling today around software that tracks you, and stuff like that; or the fact that every piece of software you write has a climate footprint of some kind, if it runs in a data center... So this book on responsible software engineering is a fairly new direction for me, and that's something that I'm working on right now.

**Jerod Santo:** Yeah. You'll definitely have to come back when that one is ready to print. We'd love to talk to you about those topics, absolutely.

**Daniel J. Barrett:** Cool.

**Adam Stacoviak:** I almost had a book title for you.

**Daniel J. Barrett:** Oh, yeah?

**Adam Stacoviak:** A suggestion, at least. Let me see if you liked this... "Cold ice cream and hot kisses."

**Jerod Santo:** What?! \[laughs\]

**Daniel J. Barrett:** You know, I don't think I can beat that one.

**Adam Stacoviak:** My Silicon Valley folks are really laughing right now, because --

**Jerod Santo:** Oh, gosh...

**Adam Stacoviak:** ...Gavin Belson went from -- in this show, Silicon Valley... I'm sorry, Jerod. I have to do this. You know I have to do this.

**Jerod Santo:** Oh, gosh...

**Adam Stacoviak:** Ring the bell...

**Jerod Santo:** Yup.

\[01:16:53.23\]

*There was a period of my life in which I would have rooted for the failure of Richard Hendricks... But that was a different Gavin Belson. That was tech icon Gavin Belson, not literary icon Gavin Belson. Since leaving Hooli, I've co-authored 37 adult romance novels... "Fondly, Margeaux." "The Lighthouse Dancer." "Cold ice cream and hot kisses." Over here, "The Prince of Puget Sound." And lastly, "His Hazel Glance." All international bestsellers...*

**Adam Stacoviak:** Gavin Belson is in the show Silicon Valley, and it's renowned as quite famous in our culture... And he was a tech icon. He ran the equivalent of what Google is, it was Hooli. And I think Hooli, in many ways, was synonymous to some degree, because it was a search engine, with Google. And so he ejected himself after he was sort of done with tech, and he wrote the book "Cold ice cream and hot kisses", which was a romance novel. So when you said, "Not at all about Linux", I was thinking, "I've got a title for you, Dan... I've got a title for you."

**Jerod Santo:** He's going way outside of this space...

**Daniel J. Barrett:** \[laughs\]

**Adam Stacoviak:** And so then when it was not at all about that, I had to bring it as a joke, because... Silicon Valley. We have a shtick around here where I say that. To be fully explanatory, Dan, I mention the show Silicon Valley often, and that was for the laughs... So there you go.

**Daniel J. Barrett:** That's funny. I think there may be a novel in me somewhere... But I'll save that for retirement. \[laughs\]

**Adam Stacoviak:** Okay. Alright.

**Jerod Santo:** Fair enough. Well, Daniel's website, danieljbarrett.com. There you'll see the books available, Efficient Linux at the Command Line, that's the new one. That's the one we've been talking about pretty much the whole show, available of course on Amazon, O'Reilly, all the places. Where's the best place people could buy this book to give you the most personal money, Daniel?

**Daniel J. Barrett:** Gosh...

**Jerod Santo:** You don't know the answer to that.

**Daniel J. Barrett:** Yeah, I mean, Amazon's fine. There's also bookshop.org. I like bookshop.org because they support independent book dealers.

**Jerod Santo:** Okay. Cool.

**Daniel J. Barrett:** Yeah, I'd say --

**Jerod Santo:** That's the one.

**Daniel J. Barrett:** ...however people find it most convenient to get it, that's wonderful.

**Jerod Santo:** So buy it however you like, but if you want to buy it Daniel's way, check out bookshop.org, supporting independence, something that we are definitely about here as independent media creators ourselves.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** I just wanna say thank you for coming on the show. man. This is awesome. I've learned a lot. I'm sure our listeners learned a lot. We got a Silicon Valley reference in, so the show can actually finish now without being incomplete... Adam, anything else to say before we --

**Adam Stacoviak:** No, I think that's really it. I love the idea of being more efficient with Linux. I loved how you describe how the path for anybody with Linux -- I'm much younger than you are in terms of a usage; you've got a lot more experience than I do with Linux, and I find myself learning as I go. And that's, I think, to some degree, the best way you learn how to use Linux and the command line of Linux, because you kind of use it and learn it as you go. And it's almost like you learn it at just the right time, when you've experienced just the right amount of pain to finally be like "I'm not going to close this editor and then go run my program, then reopen this editor, and go back to the line of code I was editing." Like, you have someone come along with a book like yours, with the knowledge you have, and express things we do every day to be more efficient... And I think that's the best time to learn, is when you're ready to learn it.

**Daniel J. Barrett:** Yeah, that's a great point... And I think I'll say, we are all blessed right now to have the web in front of us, that we can look up anything we want in the moment of need... But it doesn't really build conceptual knowledge that's going to help you when you're not right next to the web, or if you need to do something really quickly... And I think if people can take five minutes or an hour or whatever to really dig into the conceptual aspects of the command line, you'll save so much time in the future; you'll definitely get your time back many times over. So I highly recommend people do that.

**Adam Stacoviak:** Very cool. Well, Dan, thank you so much for being so efficient with us. We appreciate that.

**Daniel J. Barrett:** It's been lovely speaking with you. Thank you, again. Really fun, and... Thanks.
