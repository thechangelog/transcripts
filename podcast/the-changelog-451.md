**Jerod Santo:** Alright, we have Nick Janetakis here. Nick, thanks for coming on the Changelog.

**Nick Janetakis:** Yeah, no problem. Happy to be on.

**Jerod Santo:** Happy to have you. I feel like we've talked a lot, been around each other a lot... We had you on Backstage, but this is your first time on the Changelog... You've been doing freelance development work, creating courses, you have the excellent Running in Production Podcast... Tell the folks a little bit more about yourself - the kind of courses you do and what you're into.

**Nick Janetakis:** Yeah, so I am a freelance developer, also a course creator, so the Running in Production Podcast is basically where I just talk to folks about how they're building and running web apps in production. In terms of courses, and blogs, and videos, all that fun stuff - yeah, it's just basically everything I've learned along the way, just being I guess a standard developer. I'm mostly focused on developing web apps, and deploying them, command line stuff...

**Jerod Santo:** So you're here because, like me, you're kind of a command line junkie, right? You do lots of command line stuff.

**Nick Janetakis:** A little bit, yeah.

**Jerod Santo:** A little bit. And you're also modest. More modest than I am, which is a nice thing. Today's show we thought we would talk about modern Unix. So there's this cool repo on GitHub, it's called "Modern Unix". It's maintained by a fella named Ibrahim Ahmed, who's an open source enthusiast and a freelancer in Toronto. And what he's put together - it's one of these kind of awesome list style repos, where it's really just a curation of a group of things that he thinks are high-quality... And this is specifically a collection of modern/faster/saner alternatives to common Unix commands. And as I scroll through this list, I saw a bunch of tools that we've kind of covered over the years on Changelog News, but I hadn't seen everything altogether in one place. If you like Unixy things, and maybe the initial tools leave you wanting, or you'd just like to have something new and shiny, this is a really cool place to go.

So looking at this repo, I had a few thoughts. First of all, what are the commands that developers actually use on a regular basis? I have a sample size of one, but I thought I'd get you on here to ask you that question as well, Nick - what are the common commands? What job do these commands perform for us? What are we trying to do with them? How are they serving us? And then are the age-old versions sufficient? Or are they long in the tooth? Do they have things that just don't keep up with what we do in modern times?

\[00:04:19.29\] And then we have all these modern replacements, and it's like "Are the modern versions better? How are they better? Is it worth the installation?" and so on and so forth. So that's the idea for today, I thought we would take up these topics. What do you think?

**Nick Janetakis:** Yeah, I think that's a great idea, because -- yeah, I've looked at that repo before at a glance, and there's maybe 10, 15, 20 different tools there... But in terms of "What do I use in my day-to-day?", you know, besides the super-basic ones like cd or ls or whatever, I'm using \[00:04:50.11\] sed... Cut? Do you know the cut utility?

**Jerod Santo:** I've used it in like a pipeline before, but I can't remember what it does. Can you tell us

**Nick Janetakis:** Yeah, so let's just say, for argument's sake, you have something like a CSV file that has a comma-separated file, and you just wanna get the third column there. So you can use cut there to be like "Okay, I want to delimit on a comment and get the third one." But you can do it on other things and a comma; basically, any character of your choosing. But it comes in handy just to parse out tabular data.

So those are probably my go-to's in my day-to-day. There's so many specific little things... I guess it's depending on where you're developing, but yeah, I would say grep and set are my go-to's for a lot of things.

**Adam Stacoviak:** My go-to is ll (Double L).

**Jerod Santo:** Double L, which is an alias, right?

**Adam Stacoviak:** It's an alias, yeah. And it's actually an alias via Oh My Zsh. I don't use anything but... And that's an alias that comes with that, which basically is ls.l, for long list.

**Jerod Santo:** Right.

**Adam Stacoviak:** And I just hate typing ls- anything really, so I'm just like ll. \[laugher\]

**Jerod Santo:** It's so much shorter.

**Adam Stacoviak:** It's just so much easier. I mean, I guess you could auto-ll on cd, but whatever... That's my most common one.

**Jerod Santo:** Yeah, so I have tons of ls aliases. Similar, I have ll as well, \[unintelligible 00:06:10.23\] I also have combinations like lld, which will long-list the directory, I think sorted by file size. And there's like lls, which is sorted by page, like last modified... I can't remember them; I'm doing them with my fingertips, I can't think of them out loud, but I have probably like eight ll and then some sort of modifier, just to save me from typing ls-lht, or whatever it is, to have to remember those incantations; it's nice to just remember the \[unintelligible 00:06:44.05\]

**Adam Stacoviak:** Mm-hm.

**Nick Janetakis:** Yeah, I think there's another one too, like -R. It does a recursive ls, and you can see all the files and different directories that you have.

**Jerod Santo:** Yeah, and I just made the mistake of typing that in as you talked, on a directory with a bunch of stuff in it, and it's still scrolling to this point.

**Nick Janetakis:** Yeah.

**Adam Stacoviak:** Is that similar to tree?

**Nick Janetakis:** Yeah, I was gonna say, it's a little bit similar, but it gives a little bit more information. So if you were to do your ll, imagine running ll but it goes through every directory and gives you the output of that, recursively.

**Jerod Santo:** Right.

**Adam Stacoviak:** Gotcha.

**Nick Janetakis:** Tree is kind of cool though. That's a good one that you brought up.

**Adam Stacoviak:** Tree is kind of like "What's in here", to the deepest level, or to a certain level.

**Jerod Santo:** Tree will actually lay out the hierarchy as well, correct?

**Nick Janetakis:** Yeah.

**Adam Stacoviak:** Yeah, it's more about -- yeah, exactly, the hierarchy of all the different directories beneath it.

**Jerod Santo:** And tree is a page, I believe. It's always -- um, let me see if that's true. No, it just spits it out. I think you can pipe in \[unintelligible 00:07:42.00\] to add pagination, but... I don't think tree is actually a built-in. I think tree is something that's like common, but...

**Adam Stacoviak:** It's not. It's definitely not on the Mac, that's for sure. I don't think it's built-in on Unix, personally.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** But I could be wrong. I do install it via Homebrew, thank you, and I do use it somewhat often; often enough to actually install it.

**Jerod Santo:** Yeah.

**Nick Janetakis:** \[00:08:02.27\] Yeah, I'm the same way. If I'm running Debian or Ubuntu, you just apt install tree and you're good to go.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So one thing that's interesting when we talk about Modern Unix tools, and I think there's confusion sometimes - and maybe I'm just projecting - about exactly what Unix is, versus Linux... There's like the all-caps UNIX, you'll see like just capital U Unix, you'll also see people using it as a non-proper noun, like unix-like, and it's lower-cased, then there's Linux... Adam just mentioned macOS is using tools that are on Linux, they're also on (you call them) Unix... And so I thought, what if we went ahead and gathered some of the information, just for people who don't know some of the history, some of the inner workings and the relationship between these terms and what they are, and provided a little bit of that context before we dive further into the individual tools that we're gonna cover. Sound good?

**Adam Stacoviak:** Sounds good.

**Nick Janetakis:** Sounds good. Although - it's funny you mentioned the lower-case unix, versus the capital U, versus like fully upper-case UNIX...

**Jerod Santo:** Yeah.

**Nick Janetakis:** ...it reminds of that English grammar trick, like the "Buffalo buffalo Buffalo buffalo" thing - do you know that one?

**Jerod Santo:** I don't. Please, tell us.

**Adam Stacoviak:** No. What is that?

**Nick Janetakis:** Like, if you literally say the word "buffalo" seven times in a row, with certain capitalizations, it ends up being a grammatically correct English sentence, based on what a buffalo is, and Buffalo the town in New York... I don't know it well enough to explain it, but it reminded me of that.

**Jerod Santo:** Yeah. Now that you say that, it does kind of ring a bell. I think I've tried to figure it out, and it doesn't seem like it would make sense, but when you see it in context, with all the capitalizations \[unintelligible 00:09:35.22\] it actually is a full sentence, right?

**Nick Janetakis:** Mm-hm.

**Jerod Santo:** That's crazy.

**Nick Janetakis:** But sorry to interrupt. Let us know the differences between Unix and Linux?

**Jerod Santo:** Yeah, so this is just going completely off the top of my head. I didn't read it off Wikipedia, but if I was gonna write a Wikipedia, I might say a few of these sentences. So the original Unix is AT&T Unix, and that was started in the late '60s, early '70s, at Bell Labs.

**Adam Stacoviak:** Right.

**Jerod Santo:** So that's like the OG. It wasn't even open source, it was proprietary. AT&T licensed Unix to various parties in the '70s, and that led to the different Unix variants, like UC Berkeley's BSD, Sun's Solaris, IBM's AIX, and there's more than just those. Now, all-caps UNIX - that's the trademark, which AT&T owned until the '90s; then it sold it to Novell, which then sold the Unix Business Group to somebody else, but then they kept a copyright, which eventually ended up at the Open Group, which is like a consortium of different entities... No idea if they still hold it or what. So all-caps UNIX - that's UNIX the trademark. Of course, there were legal disputes along the way, but those are not interesting.

Back in the '80s, the GNU Project began, which was an effort to create a free software Unix-like system. You've probably heard of GNU stands for GNU's Not Unix. It's not Unix, but it's Unix-like, and it's famous for many things, not just the invention of the recursive acronym, which is pretty rad and it's been copied over and over again.

What else does GNU do? The GPL, the GNU General Public License, GNU's Compiler Core... What's GCC stand for? GNU's Compiler-something... They've got GCC... Of course, the core utils, like ls, rm etc. and more. They have their own core utils that they implemented.

So GNU had a lot of things going, but they didn't really have a working kernel. There was GNU Hurd, which was being worked on back in the early '90s but didn't totally work yet when Linux came around. Of course, Linus Torvalds released Linux back in 1991, and that's a kernel. So the Linux kernel is an operating system kernel, it's not an entire operating system.

\[00:11:59.17\] He released that as GPL, so it got integrated with a bunch of other GPL stuff... And then there's also the BSD Unix effort, which was released in 1992. That led to NetBSD, FreeBSD, later on OpenBSD, and I think DragonFly... A few others. I obviously don't know very much about BSD's. I do know there are some people that are very passionate about BSD, but I don't know very much about BSD. What about you, Nick? Have you dove into the BSD side of things at all?

**Nick Janetakis:** I have not. It's funny - you know that story behind Richard Stallman, where... And I'm not calling him out to make fun of his philosophies or whatever, but - you know, Linux was called Linux, but then he thinks it should be called GNU Linux, because really, it's like, you're getting the Linux kernel, but you're also getting these GNU programs, like ls, and grep, and set, and all of them... So it kind of makes sense that you're combining both of these together to give you an endgame solution, so that we, the end user, actually have something to run in user land code.

**Jerod Santo:** Yeah, absolutely. Because Linux by itself is not an operating system. It's just a kernel. So you have to combine Linux with other things to create an operating system. These are the Linux distributions, which we know very well: Arch Linux, Ubuntu, Debian, Gentoo, Suse...

**Adam Stacoviak:** CentOS...

**Jerod Santo:** Fedora, Rocky Linux...

**Adam Stacoviak:** Rocky, yeah...

**Jerod Santo:** All these things. Like, just keep listing them and listing them.

**Nick Janetakis:** But you bring up a great point though, by the way, because there's such a difference between the GNU version of sed and the FreeBSD version of it. And that's why you can't use a certain set of flags on macOS versus maybe Debian or Ubuntu, whatever distro that you like to use that uses GNU sed. Have you ever noticed that, like with a -i flag? You can't do an in-place edit when you're trying to redirect out to a file in macOS...

**Jerod Santo:** I've been on macOS for so long that I don't know probably the intricacies. I don't work too much in Linux anymore, like I did back in the early aughts. I do notice some of the -- I have to send different flags... So like in my bashrc I'll have slightly different aliases, depending on if the OS is \[unintelligible 00:13:57.27\] or not, if I'm on a Mac or not. I don't remember what they are; I think maybe even ls might have a slightly different way of coloring files, or something like this. The DNS flushing, the DNS cache is slightly different... So that is interesting, and it's based on the roots of the operating system, the BSD side versus the Linux side.

**Nick Janetakis:** Mm-hm.

**Jerod Santo:** Yeah, so Linux and BSD - they have more in common than they have in difference. I mean, they're very similar, but the differences are what we focus on, of course, because those are the interesting bits. That's what makes it unique. That's why we should even have more than one in the first place. But what they have in common is the Unix philosophy and the Unix architecture.

The Unix philosophy is something we talk about on the show all the time. In fact, we've just talked about it with Mat Ryer, with his tool xbar and how it accidentally followed some of the Unix philosophy and had some awesome results from that. So we talk about that a lot.

The Unix philosophy includes ideas like "Make each program do one thing well", "Write programs that work together, and write programs that handle text streams", because that's universal interface. So everything is text; if you can assume it's text, then you can write more simple programs that work with more things.

Then there's the Unix architecture, which has the unified file system, that uses inter-process communication through pipes - we've already talked a little bit about pipes - to service the primary means of communication. It also includes a shell scripting and command syntax called the Unix shell, which kind of brings us full circle, right?

So when we talk about Unix tools, or modern Unix, we are mostly referring to programs that follow the Unix philosophy, run inside the Unix architecture, and are executed from a Unix shell. This could be on BSD, this could be on a Linux distro, or it could be on macOS, all of which are Unix-like systems... Just off the top of my head.

**Adam Stacoviak:** \[laughs\] Yeah, right.

**Nick Janetakis:** Yeah, that was a good one.

**Adam Stacoviak:** Well, the important thing with this discussion too, when you say "modern Unix tooling/tools that you can install" is that you don't have to accept the set that it comes with. You can accept an alternate that may be community-driven, which I think is empowering to users. Being able to install tree despite it not being installed directly on the OS.

\[00:16:09.12\] That's sort of par for the course, but new folks coming to the command-line even, being a daunting thing for them, understanding how they can choose the different tooling, maybe even installing it via Homebrew with their own macOS, or apt-get, or on Linux, or a different version of that - I think that's cool. Being able to say "Well, this version of ls comes with Unix", the GNU version, or whatever the history is that you've just described... But if that doesn't work for you, there's a community-driven version of it that might have different features, or different things, or maybe in this case modern, with the way modern things are going...

In fact, behind the scenes we have a unikernels post coming out soon by Ian Eyberg, and it talks a lot about how Unix, as you mentioned, Jerod, being developed by Bell Labs back in the '70s was built for computing in that day, where if we consider what an operating system for that data center might be, like, today, in 2021, how would we design that. And I think you might get different results with maybe -- ls is maybe not a good example, because it's just simply listing directories. But maybe sed might be different, or -- you know, with some of these tools you're gonna get different results based upon today's needs.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And \[unintelligible 00:17:25.08\] if you want to. Just - boom. Installed. You're done. Use it.

**Nick Janetakis:** Yeah, I think there's an interesting conversation around that, because it's like -- do you know some folks where they install Vim, and they're like "Well, I wanna be a purist and not install any plugins, so that if I were to ever SSH into another machine, then my environment there is gonna be the same as it is on my dev box, because Vim is probably gonna installed there, and you don't need to worry about different plugins." And I think that's similar to this type of thing that we're talking about here, because when it comes to installing a separate version of ls or something like that -- like, I don't know, it's a weird one, right? It's like, you kind of want to optimize for what you're doing most of the time, like 95% of the time. In the Vim case, that would mean like install whatever plugins you need to make things work... But I think one of the beautiful things about the command line in general is, you know, things like sed, and grep, and ls, and whatever - it's like, once you know them once, you kind of know them everywhere.

So I'd be curious to know -- like, you know, I haven't used the custom version of ls, the one from Modern Unix Tools, but I wonder if the flags are the same, or are they different. Because I think it would be harder to get me to use it if it were to be different.

**Adam Stacoviak:** Yeah. How compatible are they with -- while modern, how backwards-compatible are they? Are they simply additive, or subtractive? The same thing with me - I don't actually use Vim, but I use Vi a lot. I will favor Vi more than anything, because it's just simple. I'm just trying to get in, edit a file, get out. I'm not trying to do programming, I'm just more or less editing config files, or messing with DNS stuff, or whatever might be. Adding a cert, or confirming a cert is there in the known hosts, or whatever... That's the things I'm trying to do. So I'm not actually opening up Vim myself personally. I'm not installing a special version of Vi, for example.

**Jerod Santo:** I think that's a good example, because I think what you'd find, Adam, is that the base level that you're using Vi, using Vim you will find is identical. You wouldn't notice a difference. If you're just opening files, insert mode --

**Adam Stacoviak:** Every time I get into Vim, I get stuck, so... \[laughs\] That's why I've favored Vi...

**Jerod Santo:** Well, you get stuck --

**Adam Stacoviak:** ...for those reasons. Every time I'm trying to get out, I can't get out, so... \[laughs\]

**Jerod Santo:** Yeah. I'm not sure how you're getting out of Vi, but...

**Adam Stacoviak:** I don't know either.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Maybe I've found tricks. Maybe it's just simply fear that keeps me away, and less logic. It's more fear than logic.

**Jerod Santo:** Yeah. So I think that's a good example. I think a lot of these tools - we're gonna talk through some of them - some are meant to be direct replacements. So in the case of exa - we're gonna get into this with ls - basically, you could alias exa to ls, and not know the difference, and just keep typing ls, and it's supposed to be a drop-in replacement. Other ones are not really API-compatible. But command-compatible... I mean, the flags, for instance - I guess the flags are an API, to a certain extent - they're meant to be used instead of, but not really to plop on top of, or replace one-to-one an older version. So we can talk through some of those. I know I'm kind of in the "keep it vanilla" camp, Nick. I'm not sure -- it sounds like you're kind of in that one as well...

**Nick Janetakis:** \[00:20:32.28\] Yeah.

**Jerod Santo:** ...but I think it's kind of like progressive enhancement on the web. So I have my personal CD built-in, wrapped with a cd function that I wrote, which provides additional functionality. And mostly what it does - I think maybe just the only thing it does - is it just automatically calls ls anytime I change to a directory, because I've just found what I did every single time... Like, what do you do right after you \[unintelligible 00:20:55.03\] So I just monkey-patch my cd to just do the ls for me, right when I enter any directory. Just go ahead and display what's in there. I find that to be additive though, kind of like a progressive enhancement. Because when I go to another system that doesn't have that, then it just doesn't do it. It's like an operator overload, but you're not making it do some sort of destructive or random thing that you wouldn't expect, so I don't find it problematic that way.

I think with Vim it is so complex where if you do trick it out completely, you go to another system and you don't know how to use the bog standard Vim anymore, because you're just so customized. I think that's what you're speaking to. But some of these are so simple, that as long as you're just adding functionality and not removing or changing it, then in practice I'm not sure if it would really be a problem.

**Nick Janetakis:** Yeah. I think that things stay the same, but you get more new stuff; that's a good way to go about it. I would be less opposed to not trying it out. You know how it is with some of these command line tools, right? Trying to remember some of those flags for all of them can be very difficult. Using the tar command or something to unzip a GZ file, right? Those flags are very, very confusing. The only way I remember that one -- there's like this stupid little Arnold Schwarzenegger meme where it has a picture of him, and then there's the flags, where it's like "Extract \[unintelligible 00:22:10.17\] or something like that...

**Jerod Santo:** Right. Yeah, I think tar is the poster child for inscrutable command line flags. We've all kind of memorized zxvf, csvz, and you're just like "I don't know what any of these mean..."

**Nick Janetakis:** But we've brought up about running an ls after cd is really cool. That's the really cool thing about using a shell - you can just make an alias to cd where \[unintelligible 00:22:37.08\] or whatever, right?

**Jerod Santo:** Yeah, I'm looking at it now... Basically, there's two if statements that are nested. The one condition is "Do I have any arguments or zero arguments?" So if I call cd with nothing, it goes home. If I call cd with arguments, it goes to where I say it's going to go. If the first case, it just calls the built-in, and then calls ls-g. If the second case, then there's another if statement... So it's probably like ten lines of code. If I'm passing dot-dot, which is to go up a directory, then it will take a specific case for that; otherwise, it just passes my arguments directly into the built-in and calls ls.

So yeah, you're basically just calling ls after you do what you're gonna do, with some slight little tweaks to make sure you don't futz up any of the arguments that you're receiving.

**Nick Janetakis:** Yeah. I've got similar aliases for Vim. I happen to use Vim on the command line, but you can use Vim to diff two files side by side, which is kind of nice. You kind of get like a GitHub side-by-side view of that... But as far as I know, Vim doesn't have a really great way to do diffing two different directories, multiple files in a directory... So I wrote a little alias that either runs Vim if you're passing in two files as arguments, but if you're passing in two directories, then it just runs a different command, which is like a Vim plugin that handles doing a directory diff. But from my point of view, I just run one command, and it figures out the dirty work behind the scenes.

**Adam Stacoviak:** \[00:23:57.06\] Yeah, one more shout-out to Oh My Zsh... I just do dot dot to move around as well. So if I'm in a directory and I wanna go back, rather than coing cd, space, dot-dot, I just type dot-dot.

**Jerod Santo:** Oh, man. It's so efficient.

**Adam Stacoviak:** It's cool, it's just so efficient.

**Jerod Santo:** Do you know what that's doing behind the scenes? It's just calling cd, I suppose.

**Adam Stacoviak:** I imagine, it's probably just doing cd...

**Jerod Santo:** Now, what if you go dot-dot-dot?

**Adam Stacoviak:** I don't know.

**Jerod Santo:** That's the other thing I remembered my cd function does. I'm starting to realize this thing is more powerful than I ever expected... It will take cd dot-dot-dot and go up two directories, and dot-dot-dot-dot and go up three.

**Adam Stacoviak:** It goes back three.

**Jerod Santo:** So Oh My Zsh does that? That's spectacular.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Because who wants to go dot-dot/dot-dot/dot-dot...?

**Adam Stacoviak:** Nobody.

**Jerod Santo:** Nick, you've been typing dot-dot/ all of this time, or what do you do?

**Nick Janetakis:** Okay, I have an interesting take on this one, because -- I would love to be able to do the dot-dot-dot stuff, but if you're recording video courses or doing YouTube videos, sometimes it's hard for other folks to follow along if they don't have those aliases set up. And if I have to segue into "By the way, I have this alias" for every single one, then it becomes not really sustainable. So yes, I do the dot-dot/dot-dot/dot-dot/

**Jerod Santo:** Like a chump. No, that's actually a really good reason. And also a good reason to keep your Vim standard, especially if you're gonna be pair-programming or if you're gonna be instructing people, is that if you have a completely customized Vim and you're trying to teach programming, all of a sudden you're teaching Vim customization, right?

**Nick Janetakis:** Sort of, kind of... I mean, I'm not required to optimize for me, so I do have like (I don't know) 50 or something plugins, and it's all set up... But I have all of that available on my dotfiles on GitHub, and I have everything installable where it'll work if you're using macOS, or any distro of Linux... So it's very easy for folks to just copy-paste stuff if they want. But yeah, when it comes to teaching a video course on programming, I try to -- like, sure, I'll link to my dotfiles and let people know how to set up their environment, but I don't want them to go on a side quest where it's like seven hours to get Vim configured, when they can just use VS Code, or Sublime Text, or whatever editor they happen to be using already.

**Adam Stacoviak:** So I did some more hunting while you were talking there, Nick... So every dot takes you back a directory. So as far back as you are, if you wanna go back five, you five-dots-enter. It's kinda cool.

**Nick Janetakis:** So what happens if you put in like 45 dots? Does it recursively go back around?

**Jerod Santo:** It goes back in time.

**Adam Stacoviak:** It might go back in time. I think it just goes back as far as it can.

**Jerod Santo:** To the rut, yeah.

**Adam Stacoviak:** Yeah.

**Break**: \[00:26:10.02\]

**Jerod Santo:** So you've probably used cat...

**Nick Janetakis:** A few times.

**Jerod Santo:** Same.

**Nick Janetakis:** Actually, what is that one command that you can run to see your most used commands that you've run in your history?

**Jerod Santo:** So history is the history command... There is a command that will do that; what was it, Adam? We were just using it the other day.

**Adam Stacoviak:** That's boggled my mind, too. I do recall it, though...

**Nick Janetakis:** It's one of those things where --

**Adam Stacoviak:** I think it's "history". No, it's not "history". History is just a list. I saw a bunch of numbers--

**Jerod Santo:** It'll sort them by the times you've used them and show them to you. We should actually look that up and we'll go back in, \[unintelligible 00:27:52.06\]

**Nick Janetakis:** Maybe one of those things where you're just piping together a couple of commands, like maybe history with sort, possibly? I'm not really too sure.

**Jerod Santo:** Yeah, I think it is...

**Nick Janetakis:** \[00:28:01.08\] But it's one of those things where it kind of is up there probably, as like a top(ish) type of command, along with git.

**Jerod Santo:** Let's see... Here it is. History, pipe into sed, pipe into sort, pipe into unique-c, pipe into sort-rn, head-10. So here's a good use of the Unix command line right here. I will throw it in the chat and we can all execute this... And you can see what makes your top ten. I don't have cat in here. Do you have cat?

**Nick Janetakis:** I do not. I feel like it would be for sure, but no.

**Jerod Santo:** I think it takes -- if it just did the commands themselves, I think \[unintelligible 00:28:29.05\] but for instance if you pass... Like, mix test is one of mine. So that's mix plus the specific command inside of the mix command. So in there I've got one, two, three of them are get. So that should just be one. So this particular one that I've found on Stack Overflow is not sufficient. I type exit a lot apparently... \[laughs\] That's because I like to quit for the day. Actually, that's probably getting out of different tmux shells.

**Adam Stacoviak:** I was gonna say, usually exit is like I'm SSH-ed into something, and usually it's exit to get out. And it' left on that machine, isn't it? I mean, wouldn't exit be there?

**Jerod Santo:** It depends. If you launch a screener tmux session in an SSH, you can set it up to dethatch, to where it'll hang...

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** But by default, if you exit enough times, it'll close the SSH session and the shell will close as well. So yeah, mine are mostly get, rspec, mix, ls, cd, and git x, which is launching a git GUI. What are yours, Nick? I'm just curious.

**Nick Janetakis:** My Bash history got cleared, and I don't have it handy, so I really don't know. But I'm gonna roll with--

**Adam Stacoviak:** Some guesses?

**Nick Janetakis:** Some informed guesses, yeah. So mine are actually pretty similar... I've got a couple of custom aliases that I use pretty often, but it's funny that exit did make on that eighth spot... And it's so funny too, because I have these mental reminders where you just hit Ctrl+D to exit as well. That's like the same way to exit, and it's so much faster... But yeah, I always type exit as well, I don't know why.

But yeah, I've got drafts - it's like a custom alias I created that helps me create a draft blog post. But I've got 800 draft blog posts for comparison. There's a lot of them. So yeah, I run that a lot.

**Jerod Santo:** How many of those are published?

**Nick Janetakis:** Like 340 of them...

**Jerod Santo:** That's pretty good. You do publish quite often. I know many of us have way more drafts than we wished... Because we like to start a blog post, but finishing it is a lot more difficult.

**Nick Janetakis:** Yeah. So Vim is up here too, in the top 3... Just because I'm running vim-dot, vim-dot, vim-dot, all the time.

**Jerod Santo:** Right. Adam, did you get the command ran?

**Adam Stacoviak:** Well, apparently it's a Zsh thing or it's something else, because what the command returns is "zsh no match was found". And then it passes the regex part of it, which is like the 309 part of it. So I think maybe something's not right with Zsh, where it can't take this command properly, so I was googling when you asked that...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** ...with no indications of solutions.

**Jerod Santo:** So here we have an advertisement for using the standard Bash that's installed on most systems... Although isn't Zsh default on macOS?

**Adam Stacoviak:** It is, yeah.

**Jerod Santo:** I think they switched it...

**Nick Janetakis:** I think there's an escape hatch that you might be able to run now. If you've run bash -c, and then put double quotes in and paste that whole command in there, then that'll run it through Bash instead of z shell.

**Jerod Santo:** Nice. That's why I invited Nick, because he has that kind of knowledge at the \[unintelligible 00:31:34.16\]

**Adam Stacoviak:** Say that again, Nick? Can I try and do that right now?

**Nick Janetakis:** Yeah.

**Adam Stacoviak:** So what is it?

**Nick Janetakis:** Just run bash, space, -c...

**Adam Stacoviak:** -c, live, doing this on the podcast. We'll see if it makes it to the actual production...

**Nick Janetakis:** Space...

**Adam Stacoviak:** Okay, space...

**Nick Janetakis:** ...and then put in double quotes, and then pop the command in in the double quotes. Surround them in quotes.

**Adam Stacoviak:** Okay. Well, that says "Invalid command" for me.

**Jerod Santo:** Ha-ha! \[laughs\]

**Adam Stacoviak:** Maybe it's because there are some quotes already in there too, which are just the single quotes...

**Jerod Santo:** They're single quotes. The double quotes should work. Did you do regular -c, or did you go --c?

**Adam Stacoviak:** Literally -c.

**Jerod Santo:** Okay.

**Adam Stacoviak:** \[00:32:09.06\] Yeah. It seems like maybe it's a sed thing, because sed is actually \[unintelligible 00:32:11.25\]

**Jerod Santo:** Can't you just launch a Bash prompt somehow? Can't you just say like "Bash..."

**Adam Stacoviak:** That's not my history though, is it? \[unintelligible 00:32:21.12\] Zsh history? It's probably Bash history...

**Nick Janetakis:** That's a really good point too, because this would be the same as running Bash, and now you're in a Bash prompt, but yeah, your history is gonna be empty.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** What a bummer.

**Adam Stacoviak:** I mean, I know what I use...

**Jerod Santo:** "I know what I use..." \[laughs\]

**Adam Stacoviak:** And I can tell you...

**Jerod Santo:** He uses tree...

**Adam Stacoviak:** I'm npm-ing, things, I'm brewing things, I'm SSH-ing things...

**Jerod Santo:** Dot-dot...

**Adam Stacoviak:** I'm dot-dotting things, I'm ls-ing things, but I'm doing it via ll, because I'm cool J... That's pretty much it. Maybe a couple Node things. I'm checking versions often... Node -v... Which one do I got?

**Jerod Santo:** \[laughs\] "What's going on with this...?"

**Adam Stacoviak:** "What's going on here...?"

**Jerod Santo:** Yeah...

**Adam Stacoviak:** A lot of SSH-ing... As a matter of fact, I lied. It's not Vi, I'm nano-ing.

**Jerod Santo:** Oh, that makes more sense.

**Adam Stacoviak:** Yeah. Sorry. So I'm nano-ing. So if you listened to that, when I said Vi before, just replace with nano and it will make so much more sense.

**Jerod Santo:** That does make more sense. Because I was like "How is he getting out of Vi but he can't get out of Vim? It's the same exact thing!"

**Adam Stacoviak:** \[laughs\] Nano is a bit simpler.

**Jerod Santo:** Yeah, like Ctrl+C.

**Adam Stacoviak:** A few exits in my list here...

**Jerod Santo:** Alright.

**Adam Stacoviak:** A lot of gets... Get something, you know... Several alias type things.

**Nick Janetakis:** So Adam, I'm gonna put you on the spot here...

**Adam Stacoviak:** Yeah, go ahead.

**Nick Janetakis:** How do you exit nano?

**Adam Stacoviak:** How do I exit nano... I think it's Ctrl+X or Ctrl+C, I believe...

**Nick Janetakis:** Yeah, you got it. It's X.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I think nano actually displays it in the bottom of the UI while you have it open...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** ...which is a very nice feature. \[laughs\]

**Adam Stacoviak:** You know, "Just show me what I'm doing here. Don't make it be like--" Because the screen doesn't change in Vim or Vi. It's just very hard to grok what changed.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Anyways... And then quit is pretty easy, Ctrl+Q. It's pretty easy.

**Jerod Santo:** While we're trying to talk about cat, it turns out none of us use cat...

**Adam Stacoviak:** Well, I do use cat. The main times I will use cat is when I'm looking at, say, a markdown file, or in the cases that I'm doing, say, an SSH keygen... I might cat that and pipe that into the clipboard, kind of thing...

**Jerod Santo:** Yeah, pb copy.

**Adam Stacoviak:** Those are the times I'm using cat primarily. I'm not using it often, but... You know, if we're comparing cat to bat, why won't they do vat, or something closer to the C? Or zat. Because it'd just make my finger not move over two keys... The C key is two keys away from the B key, so... Muscle memory.

**Jerod Santo:** I think bat has a much better brand, because it says it's a cat with wings.

**Nick Janetakis:** Oh, that's good.

**Adam Stacoviak:** Oh, okay...

**Jerod Santo:** That's why they picked it.

**Adam Stacoviak:** Okay, that's making more sense now.

**Jerod Santo:** So cat, for the uninitiated, is short for concatenate, and it just prints file to stdout, and it'll also concatenate multiple files, which - one of the cool things that I have done, that you may not know, is it can actually concatenate multiple mp3 files into a longer mp3 file.

So let's imagine you have a couple text files and you wanna create a combination of them, one after the other. This is very common for certificates, where you'll take multiple certificates and a private key, whatever, and you'll concatenate them all together into one new file.

So you do cat, file one, file two, and then you do the greater-then (&gt;) to direct that, instead of to stdout, to direct it to this file, which is the next argument to file two, or file three. You can do that with mp3s, and it'll actually concatenate them as if they're text files. So if you wanna just splat a bunch together, you can say "cat 1.mp3, 2.mp3" and direct it to 3.mp3, and it'll work. You just listen to them and it just starts the second one after the first one in the new file, which is pretty cool.

**Adam Stacoviak:** That's a new way to get your Changelog Master feed.

**Jerod Santo:** Yeah, there you go. Just concatenate all of them.

**Adam Stacoviak:** Just cat them all together. Go, go, go.

**Jerod Santo:** There you go.

**Adam Stacoviak:** 24 hours of Changelog Master feed.

**Nick Janetakis:** \[00:35:56.16\] That's very cool. I never knew that. You can also use the star operator with cat as well. If you have to match on a file pattern, you can just do something like -- well, I've done this before in the past, where I have my notes set up to where I have like "2021-" and then 07.txt, like July 2021. But you can replace that 07 with a star, and then redirect with a greater-than sign, and export out to 2021, and now suddenly \[unintelligible 00:36:18.29\] redirected out to a single file for the year 2021.

**Jerod Santo:** Very cool.

**Nick Janetakis:** Yeah.

**Jerod Santo:** Is there anything missing in cat? Do you ever use it and you were like "I wish it did this..."?

**Nick Janetakis:** I mean, this is probably a good segue for what bat actually does, but yeah, syntax highlighting would be kind of nice, instead of having to open Vim up to get that...

**Jerod Santo:** There you go. Yeah, so that's basically what bat adds... So it's just like cat, only it default syntax highlights, as well as git integrations. So if you call bat in a git repo, it will show you the index of what's been plused and minused since the last commit. So it'll also do that for you. And it shows line numbers, and stuff... So it's really kind of a cat with focus on software development... Whereas if you're cat-ing mp3 files together you don't really want to see the syntax highlighting on the mp3's.

**Nick Janetakis:** That's a great example of one where like -- I could see myself aliasing cat to bat. I cannot do it right now, because it's one of those things where I kind of want the syntax highlighting, but it's like, is it good enough to install another tool? Maybe.

**Jerod Santo:** Right. That's really the question that it comes down to... It's like, "How much work is this to adopt? Do I have to then take it with me everywhere?" Again, it would be a progressive enhancement because it doesn't syntax-highlight on some other machine; you're just like "Okay, don't care", because it's just a nice-to-have anyways.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Now, here's where it gets interesting with these two... Because bat is not a one-for-one replacement for cat, and here's why - it defaults to piping into less. So bat will be paged by default, whereas cat won't. So if you cat a JavaScript file, it'll just spit out the entire thing, and what you'll see if it scrolls your terminal is just the end. Whereas with bat, it's gonna syntax-highlight it, which adds to the feature, but then it's also gonna \[unintelligible 00:38:05.21\] which is a pager... So it's gonna let you navigate that file. So it kind of breaks API compatibility in that way.

**Nick Janetakis:** Yeah. I'm curious, does it have a flag to disable the paging and just have it go all the way?

**Jerod Santo:** It does have a flag to disable. So there's like a --paging=never. You can set that in your -- there's a configuration file. There's also a shorthand, which I don't know what it is. You can also alias cat to bat --paging=never. So you can make it as part of your alias so that it doesn't do that... But then it's also kind of smart insofar as if you're using it to concatenate files versus display them, it will turn it off automatically. It obviously won't got to a pager.

So if you're cat-ing files together the way you're talking about with multiple text files, it'll work just like cat. But when it comes time to print them to stdout is when the pager is in there. So you can turn it off, but I think if it was my choice, I'd probably say "Well, you can turn it on. If you wanna just page, go ahead and turn this on." But the author of bat must have thought that that was a big enough feature for them that it'd be worth breaking that compatbility.

**Adam Stacoviak:** You're just gonna need a batrc file.

**Jerod Santo:** Yeah, and then you've gotta ship that batrc file around, or something...

**Adam Stacoviak:** Well, at least on your main machine you've got it covered...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I guess if you're hopping around -- that's the question, too... I guess most people don't hop around to machines often. Maybe they do... I guess if you're a developer, maybe the reason you're using this Modern Unix Tools - you want the developery things of them, so maybe you are.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I guess I jump around to a lot of machines, but I'm not doing sophisticated things. So I guess it kind of depends (like most things) if you're taking these things with you... Because I'm mostly SSH-ing into Raspberry Pi's, and the occasional Mac Mini. That's about it for me. I'm not really doing a lot of Linux server management myself personally.

**Jerod Santo:** Yeah.

**Nick Janetakis:** Yeah. In that regard, I try to set up my servers so that I don't have to SSH into them. And if I do, it's very one-off things, like "Oh, go through this NGINX \[unintelligible 00:40:02.04\] couple things out."

**Adam Stacoviak:** \[00:40:04.19\] Yeah. \[unintelligible 00:40:05.03\] then trick away, and don't take the tools with you. Or don't feel like you have to. But you know, Jerod, a long time ago you said -- this must have been like four years ago, we were both upgrading operating systems at the same time, we happened to be getting new machines in the same timeframe, and I think you did just before me, and you were like "You know what - I'm not installing any extra stuff on this machine. I'm gonna keep it pristine... I'm using Terminal..."

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And ever since then, I've been using the Terminal, whereas before I was an iTerm user, I guess just because; not because it was better, but Terminal is good enough. And ever since then, I've been using just simply terminal. So I can kind of appreciate the minimalist approach to these things, and that's kind of the why cat versus bat, why bat over cat? Would you install it/should you install it?

**Jerod Santo:** Yeah. The other thing you can do is install it, but not alias it. Then you can just kind of use them both side by side, and maybe when you want the syntax highlighting, you just have to remember to type bat. Now, I'm the kind of person that will never remember I have it installed, and I'll just type cat, and I just will see it the old-school way. But if you are actually actively trying out the new one for a while and you wanna run it side by side, none of these are like "Install them and it replaces your cat with bat." That's not how it works, right? So that's nice... You can kind of limp in that way.

I am a fan of only installing what you use, and I do appreciate a purge every once in a while. I'm excited to upgrade my laptop, because it's getting long in the tooth again. And I'm gonna do it again, I'm gonna start fresh and I'm just gonna like -- you know, it's like Survivor for software... Who's not gonna get voted off the island?

**Nick Janetakis:** So what's your top one that you're probably gonna get rid of?

**Jerod Santo:** Well, that's the thing, is I'm gonna get rid of everything, and I only install what I need.

**Nick Janetakis:** Well, I guess I was trying to say, who's coming back on season two?

**Jerod Santo:** Who's coming back... \[laughs\] Good question. Tmux is coming back, git obviously... What else. I do have my dotfiles. I'll move them over. So it's not like I'm getting rid of all aliases. It's mostly like desktop apps, and command line tools that you have to install with Homebrew and whatnot. So yeah, all the typical things will be there. I'm sure I'll need Postgres right away, I'm sure I'm gonna need Elixir right away... Everything to run Changelog.com software development. Maybe I'll just leave VS Code off this time. I'm getting ready to just go back to Vim 100%, because VS Code has just been slowing down on me lately.

**Nick Janetakis:** Really?

**Jerod Santo:** Mm-hm...

**Adam Stacoviak:** Not me!

**Jerod Santo:** And it kind of annoyed me with the -- what's it called? That restricted mode... I'm not sure if you guys have gotten that yet.

**Nick Janetakis:** Is that what they do in a pop-up, where it's like "Hey, by the way, do you trust the files in this directory?" and there's like a Yes/No button, or something?

**Jerod Santo:** Yes. And it's new. It's like in a newer version, so I updated, and all of a sudden I have to trust all my own directories... And the reasoning is it's for security, but it has to do more with collaboration, so you can securely view other people's files, but not be afraid that they're gonna execute something, maybe in that shared mode, or whatever... And these are things I just never use, so for me it was, like, offensive. Like, this is the same folder I've been working with my entire life, and all of a sudden I have to tell you that I trust it? Like, you trusted it yesterday... So I got kind of bugged --

**Adam Stacoviak:** I didn't understand that, really. I was like, "Of course I trust in those." So I was like "Yes."

**Nick Janetakis:** Imagine that there's a new version of ls where every time you run it, it's like "By the way, are you sure you wanna view the contents of this directory?"

**Jerod Santo:** Exactly.

**Adam Stacoviak:** "Like... Yeah?"

**Jerod Santo:** That kind of perturbed me, and I was like "That, plus it's kind of been running slower, things, I'm waiting on it more..." I'm like, "Sorry, VS Code. You're kind of pissing me off. You might not be coming back next season. We'll see. We'll see."

**Adam Stacoviak:** We'll see.

**Nick Janetakis:** Well, Neovim 0.5 just came out recently...

**Jerod Santo:** I saw that release. Now, what's the skinny with Neovim? Why is everybody so excited about it? It's a performance thing, or what is it?

**Nick Janetakis:** So I use the regular, standard Vim, but Neovim 0.5 - it was a couple of years in the making, and I think one of the biggest features as far as I know is the built-in LSP support. So some of those nice things that you get from VS Code, like being able to do code complete, with really nice IntelliSense - functionality now is something you get with Neovim out of the box, without having to run an external LSP server, as far as I know.

**Jerod Santo:** \[00:44:12.08\] Gotcha.

**Nick Janetakis:** It's now built into the editor as maybe a core plugin, or something like that.

**Jerod Santo:** It may be time to dip back in and go full Vim... And give Neovim a try. Let's see if that cuts the mustard. Well, let's move on to some more of these Modern Unix Tools. So we've got cat and bat - there you go, listener. Decide if you wanna give bat a shot. It's definitely cool. I think the syntax highlighting is nice, especially if you do a lot of cat-ing of source code files.

Fzf - this is one, Nick, that you put into the document. Do you wanna tell us about that?

**Nick Janetakis:** Yeah. So this would be one, like, if I were purging out all my tools, it would come back for season two, season three, all the way to season eight. And then the show would end. But yeah...

**Jerod Santo:** \[laughs\] And Fzf would win.

**Nick Janetakis:** Okay, so if you're not using Fzf and you are on the command line and you want to rerun commands that you've run in the past before, like your history file, it becomes very tedious to find these commands. You can be one of those people who just hits the up arrow 400 times in a row to try to find that command that you ran six days ago... Or you can hit Ctrl+R. And this will work without any plugins - you can do it right now - and that is going to allow you to reverse-search your history.

So you can just start typing a command -- let's say you have \[unintelligible 00:45:16.29\] git command, or whatever commands that you run. You can just start typing it, first couple characters; it is going to find a match. And if it doesn't find a match, you can just hit Ctrol+R again to cycle through all these matches. So it's very handy for recalling commands that you've run in the past. And Fzf takes it to another level, because now it brings up a nice little menu that pops up, and it starts to fuzzy-find all of these -- basically every command in your history. So instead of just having to start the command off as we run it, it's gonna do a fuzzy match just like Ctrl+P (I guess) in VS Code, or whatever; if you're gonna try to open a file quickly - it's that, but for your Bash history.

**Adam Stacoviak:** I get something like that for free with Oh My Zsh.

**Nick Janetakis:** Do you?

**Adam Stacoviak:** Yeah.

**Nick Janetakis:** There's pop-up? Can you see it like --

**Adam Stacoviak:** It's not as GUI like this, but if I know the first few characters... Let's say I'm doing a git command. I do gi, or git even, and I just hit the up arrow, I'm gonna cycle through -- and I don't know if it's based in this sort of order. So it's not quite as sophisticated. And I do admit that Fzf is more sophisticated. But it's kind of most of what I want. And if I'm typing mix a lot, for example, I just do mi and I up arrow until the server one, the get deps one, the whatevers... I don't remember those things in my brain, thankfully; it's kind of there for free with Oh My Zsh.

**Nick Janetakis:** Yeah.

**Adam Stacoviak:** Which is why I kind of like take that with me everywhere.

**Nick Janetakis:** Right. Yeah, I don't use z shell personally, but that sounds like it's doing some type of like an autocomplete, and it's showing you a preview of the command in grey font, right? Or color? And then as you type, it starts filling it out.

**Adam Stacoviak:** No, it's just like -- just normal terminal.

**Nick Janetakis:** Okay.

**Adam Stacoviak:** You're just upping through them.

**Jerod Santo:** It's like upping through your history, but your history is scoped through those first couple of characters.

**Adam Stacoviak:** You're grepping it based upon what you typed, yeah, kind of. It's sort of delimiting based upon that, yeah.

**Jerod Santo:** So I'm installing Fzf as you speak, Nick, which means I missed the part where you talked about how I use it for my history. So if I just type fzf, it's like searching the files in my current folder.

**Nick Janetakis:** Right.

**Jerod Santo:** So how do I use it for my history then?

**Nick Janetakis:** I would say -- did you go to the Fzf git repo on GitHub?

**Jerod Santo:** No, I just brew-installed Fzf. I didn't have time for that. I also have not had time to read the docs; I need you to explain to me right now... \[laughs\]

**Adam Stacoviak:** Right now, right on this podcast... Go, Nick. Go.

**Nick Janetakis:** So I think the thing is - when I follow their instructions on the documentation, you may have to add something to your bashrc file or zshell file to have that enabled.

**Jerod Santo:** Gotcha.

**Nick Janetakis:** Okay, so Fzf is more than just reverse-searching your history, because it can go through your files and directories, too.

**Jerod Santo:** Yeah.

**Nick Janetakis:** But if you just do that in your home directory, you probably have tens of thousands of files in there, so I'd imagine that list got pretty filled up quickly.

**Jerod Santo:** So it's kind of like an interactive replacement for grep? Is that a good way to describe it? They say it's a general-purpose command line fuzzy finder. So grep is a command line finder...

**Nick Janetakis:** Well, you might use grep to grep through a file to filter out some content of the file, like if you're looking for specific log entries or whatever. This is more just like "Show me commands I've run in the past without me having to type in the start of the command, or whatever." Just like opening a file with a couple of characters... Like if you're opening up your mix.exs file or something like that, you can just type in like ix or something, and hit Enter.

**Jerod Santo:** \[00:48:18.07\] Yeah.

**Nick Janetakis:** That's a bad example, because it's such a short file name in the root of the project anyways, but you get the idea.

**Jerod Santo:** Sure, sure, sure.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So yeah, now I'm looking at their deal, and it looks like you have to set up their fuzzy completion key bindings through Homebrew, so I will do that offline... But I am excited about this, because - you know what? Even just Ctrl+R is not something I actively use. And not because I'm against it, it's because I don't remember it. What I do is lame... I do history alias to h, so I can type h for history... And I can just pipe that into grep for a part of the thing that I remember, and then hit Enter, and then there it was... Which is not cool. Even Ctrl+R is cooler than that, right?

**Nick Janetakis:** Mm-hm. Yeah. Also, Fzf works with Vim as well. So if you wanna open files very quickly in Vim, fuzzy-matching them, then it's the same interface in Vim. And you can also use it in Vim for other stuff too, like searching your Git commits, and even Vim snippets, because those are a little bit hard to remember... Yeah, it's pretty cool.

**Adam Stacoviak:** And it's like, you can always remember a little bit of something, not the full thing, so...

**Jerod Santo:** Right.

**Nick Janetakis:** I think that's an interesting thing too, because on the command line there's so many commands to run, so many flags to run, so many flags and commands to remember...

**Jerod Santo:** Yeah.

**Nick Janetakis:** I like using the command line; I still feel like it's a very good interface to find things, but sometimes -- I don't know... Psql is a great command to connect to a Postgres database and run some raw SQL or whatever you're doing in there, but sometimes GUI tools are just a little bit nicer.

**Jerod Santo:** One hundred percent. We've talked a lot about ls; we didn't mention specific modern replacements, so I'll do that now... There's one called exa and one called lsd, which is like ls with a d at the end...

**Adam Stacoviak:** Ha-ha!

**Jerod Santo:** Both written in Rust, which a lot of these modern tools seem to be Rusty or Goey (if that's a word). Written in Rust or written in Go. Fzf is written in Go, I believe, and these are written in Rust. Now, I just did a quick perusal of both of these tools. It seems like exa is a little more advantaged, with just features and more modern in terms of support... Like, maybe just a newer tool. I didn't look too much into lsd. But exa is like ls, only similar the way bat does for cat, exa will use more colors.

Now, there is ls in color mode, like we talked about before. So \[unintelligible 00:50:34.14\] you have ls support colors. But exa uses colors I guess more fully to distinguish file types and meta data. It also knows about symlinks, extended attributes, and it's git-aware... And then it's small and fast, and just in one single binary. But let's face it, ls is almost small, fast, and I assume it's a single binary, that's built-in.

Exa does have tree view built in. So there you go - if you install exa...

**Adam Stacoviak:** Tree for free.

**Jerod Santo:** ...you don't need tree, because you've got tree for free right there inside that... Which does feel a little more modern. It seems like tree would be a feature of ls if you thought about it, right? And other such things. So there you go, if you're interested in maybe ls on drugs, try lsd --

**Adam Stacoviak:** It's actually deluxe. I'm glad you said that, because I clicked through to it, and it's not lsd as you might thing, Jerod; it's lsdeluxe. So it's a bigger version of ls, essentially.

**Jerod Santo:** There you go. There you go.

**Adam Stacoviak:** The deluxe version that was never shipped.

**Jerod Santo:** Yeah. Or the exa version. And I think this one is as much compatible insofar as you can directly alias it, exa to ls, and they think you'll be happy.

**Adam Stacoviak:** I think it's smart to replace a given tool like ls, for example, but do it in a way that you keep compatibility in additive, like we've talked about. I think that's a -- I'm not sure, as we go through this list, how often that's a hallmark of each of these, but I'm hoping that's more of the case like it's common... Because if you do that, then it's a lot easier to adopt, because you're pretty much just able to alias it in the end. I wonder how much that's an optimization plan for the maintainers of these projects.

**Nick Janetakis:** Yeah. It just seems like a net win if you get the new stuff and don't have to worry about learning new stuff.

**Adam Stacoviak:** Yeah. Why would you not do that, basically?

**Break**: \[00:52:17.29\]

**Jerod Santo:** So next step we have man... Good old man pages, versus tldr, which is probably the best name for a modern Unix tool out there. Definitely not a one-to-one replacement for man, but trying to do something slightly different. And this project admits that we all love man pages, but we don't actually love the contents of the man pages, because many of them are old, not well-written, barebones perhaps, terse, don't have any examples... And tldr is kind of a new take on an old idea, mostly focused around "Hey, let's provide some examples." I think they actually use tar as the one that says "Well, what if we just showed you a bunch of ways you can use tar and what that does?" That's better than reading through a man page, which --

**Adam Stacoviak:** Totally. So much better.

**Jerod Santo:** ...I can definitely agree with. That being said, this is one where -- I don't know, I've just been reading man pages for so long (maybe it's Stockholm syndrome) I'm just okay with them. I can read a man page. And maybe it's better for people who haven't been initiated in subject to the pain of grokking man pages, but I just have that skill already. What about you, Nick?

**Nick Janetakis:** Yeah, I'm basically similar to you. But when it comes to some of these commands, I do really like seeing examples... So usually, for me it's like -- let's say I want to recursively google through files of a specific file type to count words, or something like that. That's something I don't have memorized, but I'll just google for that one thing and typically find a Stack Overflow example with the exact syntax and flags and stuff, a defined command. So yeah, I guess if tldr were searchable in that regard, that'd be kind of nice... But I can go either way on that one.

**Jerod Santo:** And that's a good thing, is you can go either way. Because the old-fashioned man pages aren't going anywhere. They're long-established, they're gonna continue to be there. They probably will not be updated or maintained very often. Of course, it's up to each individual author of the tool or maintainer of the tool to maintain that man page... So some man pages are better than others. People put more or less into their docs.

This tldr is a collaborative thing, which is cool... So it's not just gonna be the maintainers of the project, it's gonna be the community contributing examples. So in theory, that means it's gonna be actively maintained and improved over time. In practice, the latest commit - 43 minutes ago, and over 8,500 commits to the repo... So they're definitely working on it and keeping it up to date, so that's spectacular.

**Nick Janetakis:** Very cool. That's interesting though... So when you run the command and search through it, is it actually doing a network of requests out to somewhere, or is it all installed locally? Would you need to get a new build to get the new information that's contributed by the community?

**Jerod Santo:** \[00:56:13.18\] Great question. I just ran tldr tar, and it says "Local data is older than two weeks. Use --update to update it." So it sounds like it will cache locally probably the first time you run it, and then you have to manually go out and grab whatever is new. I don't think you have to update tldr itself. It probably just has some sort of source for the information that it caches and greps from, so...

**Nick Janetakis:** Yeah, it's a good way to go about t.

**Jerod Santo:** Kind of a middle ground -- yeah, I think that's a good way to do it as well. So there you are - if man is not doing it for you, check out tldr. Definitely practical examples is a great way to learn different command line tools.

Next up, ping. Well, a classic... Ping. The old ICMP.

**Nick Janetakis:** What's the alternative one? Was it gping, or something like that? Like the new one?

**Jerod Santo:** Yup.

**Nick Janetakis:** Yeah, so I think this one's like -- it depends on what you're using it for. For me, typically, when I'm running the regular ping command, I'm pinging some domain or whatever just to see if it's available, or just see what my latency is... It's a very hard sell for me to use something like gping for that use case, because it's like "Well, I can do ping, run it for two seconds, get the numbers and I'm done."

The graph is cool, it's awesome-looking, but it's like - is it really helping me that much in my day-to-day? But then if I wanted to see a graph of all the response times, then gping I guess would be really cool. But I just don't have that use case personally. What about you guys?

**Jerod Santo:** I'm the same way.

**Adam Stacoviak:** It's more for me like "Is it responding? Is it responding? Yes, it is. How fast is it?" That's it. I don't really personally care about the graph.

**Jerod Santo:** I used to be more of a network administrator back in the day, when I was making sure certain servers were available, and responding on time... And I had to debug routing errors, and stuff like that... So then I would actually look at ping and pay attention to the roundtrip times and stuff like that. And in that case, I needed more tools. So there are other tools besides ping that you can get into and use, and I think gping is definitely a step up in that regard, if you're doing network administration or a lot of network troubleshooting, maybe trying to see why your Raspberry Pi is so slow, or -- usually, it has to get outside of your local network for things to really matter in terms of roundtrip times, but... Back then, I definitely would have liked this tool. I rarely even use ping today, and when I do, it's just literally like "Is this thing gonna respond or not?"

**Adam Stacoviak:** Yeah. It's almost like "Is it there? Does it still have that IP address? Did it for some reason not get a new -- something from the DNS, or something like that?"

**Nick Janetakis:** Yeah.

**Adam Stacoviak:** I am running it side by side with a ping though on what is my home server here, and I don't think it's additive, personally. And no knock against the software, it's just the graph isn't necessary. I think ping is good enough.

**Nick Janetakis:** Yeah. I think in a similar vein there's also dig versus dog, where if you wanna look at what IP address is associated to this A record, or something, you can use dig and get that information. Jerod, does dog do the same thing but it's more colorized, I guess?

**Jerod Santo:** As far as I can tell, that's the gist... Because it's not providing any additional information. So if I just dig changelog.com, I'm getting back pretty much everything that dog -- so it's kind of just dig with colors.

**Nick Janetakis:** Right. That's kind of in the same thing--

**Adam Stacoviak:** Like ping with a graph.

**Nick Janetakis:** Right. It's like, it's cool, but it's like "Am I gonna install it? I don't know..." Not to be negative or whatever, but...

**Jerod Santo:** That being said, there's lots of options, there's lots of query options... So maybe we're just looking at it face-value and saying it's the same with colors; maybe once you dig in (pun not intended) maybe there are more differentiations that we just don't see at surface level. So maybe worth a look. Also written in Rust, so there we have a continuing theme here.

**Adam Stacoviak:** I will give them a +1 though on this, because we haven't said yet, in the gif on the repo, in the readme, it's showing a ping of two different domains at the same time. That's not something that I think I can do with ping. Can you ping two different endpoints at the same time with ping, and get the same results backwards, or it's sort of just one resource? Because this is pinging Google and Facebook, and sort of getting that graph with both pings in mind.

**Jerod Santo:** That's cool. Now, the regular ping is just one address or one domain.

**Adam Stacoviak:** \[01:00:28.06\] Yeah, so it's single-threaded, essentially. This is multi-threaded, when it comes to endpoints to ping.

**Nick Janetakis:** Yeah. It's basically the tmux of ping.

**Jerod Santo:** There you go... Or you could just use tmux and then do ping twice.

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** \[unintelligible 01:00:39.20\] Yeah, I do like that. So there's lots of these that are kind of in that same vein. There's a bunch of, by the way, kind of grep replacements... Fzf is kind of that; we talked about that specifically. There's also ack, ag, ripgrep... This has been a competition on which one is the fastest, less keystrokes... I always loved ack's little tagline -- well, first of all, the domain was better than grep.com. But secondly, the tagline is like "It's faster than grep, because it's only three characters instead of four", so it's 25% faster, or I don't know how it broke out, but... I always thought that was kind of funny. We don't need to dig into those too much.

Another one that I think probably lots of people are already using is jq. Not really a replacement -- I mean, a replacement functionality because you could use sed to basically get into certain aspects of a JSON blob of text... But it's not like sed has any sort of JSON-aware anything. That's been a big change over the last couple of decades, is most people who are doing data interchange are basically parsing and sending JSON around the web, right?

**Nick Janetakis:** Yeah. That one's really cool. I've done a little -- like, a couple one-liners, where it's like your Curl, something, like let's say maybe you're (I don't know) contacting GitHub's API, do a Curl response there, you get back that JSON result, type it into jq, and then you basically just read the JSON with jq. If you wanna get user.repos.whatever-whatever. You know, it's like an object-oriented way to access your JSON, which is way, way easier to parse than using something like grep or sed or whatever.

**Jerod Santo:** Yeah. And jq is pretty ubiquitous at this point. I see it all the time, I see it in a lot of people's tutorials, or in their readmes showing how to use their API. They'll often have jq, and so I don't think we're necessarily breaking news on this one, except to say that it really wasn't a modern Unix tool specifically for JSON, just because JSON is more of a modern format that didn't exist back when these tools were written. So js has placed itself -- now, there are alternatives to jq, which aren't on this repo. We can get into that in some other point; there's people who are trying to provide different ways of slicing and dicing JSON.

On a similar vein, there's an alternative to Curl. And there's lots of alternatives to Curl. Of course, we know wget. But that's not a modern alternative. Those two go back. More modern than those is HTTPie. That's just a very stark, less verbose way of just like requesting HTTP resources. And that's been around for a little while.

What's newer and I think more interesting from that is this project - which I actually didn't know anything about until I hit this repo, the Modern Unix repo - is Curlie. And Curlie is an attempt to take what was cool about HTTPie, which is really a simplified HTTP client for the command line, but doesn't provide very many of the facilities -- I mean, we all know how many things you can do with Curl. It's incredibly featureful. And HTTPie didn't really have a lot of those things, so whenever you needed slightly more functionality, you had to abandon ship and go back to Curl. And Curlie is an attempt of kind of providing the best of both worlds... So it gives you, what they say the power of Curl and the ease of use of HTTPie.

\[01:04:05.06\] The cool thing about that is it's actually just a frontend for Curl. So how do you get the power of Curl where you don't reimplement it? \[laughs\] You wrapper it. So everything inside of Curlie, every command that you come up with in Curlie, you can actually pass it a flag that says "Show me which command you're generating for Curl", which I thought was a really cool way of eventually just learning what it is that it's generating for you. Maybe you decide "I don't need this anymore, because I've learned", so it's kind of cool that way.

Definitely this is one that I would use. I did download it, I've been using it today, and it's kind of one that I think would stick with me, because I do like just the simplification of that command line, but still being able to reach under the covers when I need to.

**Nick Janetakis:** Yeah. I love that feature of just echoing out the actual raw command that it runs for Curl... I haven't heard of that one before, but yeah, I'm gonna check that one out.

**Adam Stacoviak:** So you're not replacing Curl with it though, right? Or you are.

**Jerod Santo:** Nope. You are calling Curl.

**Adam Stacoviak:** What I mean is are you using that instead of calling Curl yourself? So even if normal daily uses you'd say "Curl this", would you still do Curlie, or would you do Curl?

**Jerod Santo:** I'm gonna start doing Curlie for a little while and see what I think, basically.

**Adam Stacoviak:** Okay.

**Jerod Santo:** And remember that I am a basic Curl user, I'm not an advanced Curl user... So mostly, I'm looking at headers -- like, the most advanced thing I do is looking for redirects, looking at headers, I'll take the output from Curl, redirect it into a file, so I can inspect a file or something... That's mostly what I'm doing with Curl, so I think that this is gonna give me that pretty easily... But we'll see.

**Nick Janetakis:** Yeah. One more thing I do with Curl pretty often is -- I forget the flags to do it, but there's a way to just get the status code back, so like 200 or 500 or whatever you're looking for.

**Jerod Santo:** Yeah, totally. So there's Curlie... Getting to the end here. We have envsubst vs. envsubst. I don't know, Nick, you wrote that one down, so take it away.

**Nick Janetakis:** Yeah, so this one is not listed in the Modern Unix directory there, but...

**Jerod Santo:** Oh, you're cheating.

**Nick Janetakis:** Env substitute is a way for you to take - let's say an NGINX config file, or basically any config file that doesn't have the ability to do templating in it. And what you can do with env substitute is write out let's say your NGINX config or Kubernetes yaml file, or whatever you happen to be using, put in the shell style environment variables like $ and then whatever the environment variable is, and then pipe it into env substitute and it will go and take any set environment variables that you have and then update the config file and then spit that out at its output. So it's basically a way for you to template out config files that don't support templating naturally.

**Jerod Santo:** That's a cool thing. So what is a typical use case of that? Obviously, some sort of production deploy is where it makes sense to me, but give us a few hooks.

**Nick Janetakis:** Yeah. I've just used this a couple of days ago, where I was spinning up a Kubernetes cluster on AWS - and there's a lot of ways to do this one, and I just wanted to get the cluster up quickly. AWS has this tool called eksctl. It's a way for you to define maybe like 10-15 lines of yaml, and that'll just spin up the whole cluster with parameters that you define.

And I'm making this cluster to do client work, but I'm running this test cluster on my own personal AWS account. And there's certain variables of this cluster that I want to be different, like for example when I set it up on my personal account, I wanna be on US East 1, but my clients are on US West 2. So the region of the cluster needs to change. So that's like one variable. And then the other things, too - they wanna spin up like 15 servers, or like beefy ones, but I just wanna throw up a couple, just to see if things work.

Basically, long story short, there's like 4-5 things in this one config file that I wanna change between my environment and their environment. And I didn't wanna have to duplicate two config files that are basically the same, except for just like two or three or four different variables... So in this case, now I just have a .env file in the directory, I defined my versions that I want to use, like US East 1, with like a couple \[unintelligible 01:08:00.16\] and then I just pipe it through env substitute, and then you can pipe that into the eksctl command - it supports that, so then it's like, I can just pop in my dynamic config file... And it doesn't support that naturally, but now it does with env substitute.

**Jerod Santo:** \[01:08:16.22\] That's really cool. I think a lot of times you rely on your target platform or your runtimes that you're running to support templating, right? And a lot of them do it differently, or don't do it at all... Okay, it makes the most sense for when they don't support it at all, but it almost kind of provides a decoupled way of doing it, even if there are templating supported inside some of these tools that you're using together. You can have this standardized way that you do it, and inject those in, regardless of what's natively supported. Am I on point? Could you use it that way as well?

**Nick Janetakis:** Yeah, totally. But there is one gotcha with this one. So when you're dealing with environment variables on the shell, you can do $ blah-blah-blah, and then you can do :- and then you can supply the default value of that environment variable. So if that environment variable isn't set in your shell at all, then it's gonna fall back to this default value. And env substitute doesn't support that. So any environment variable that you plan to run through this program needs to be set on your terminal. So you have to do "export foo" or whatever, and then give it some value.

So I wrote this one down in the notes because there is another tool called env substitute -- it's like the same exact name, but it was rewritten in Go, and it supports that idea of having default variables in there. So you don't need to set them all, you can just set a reasonable default in the config, and then it works for however you want. And then you can optionally override that with your own environment variables.

**Jerod Santo:** Very cool. So that's why you have envsubst vs envsubst. I didn't see the parentheses, it says "Go version". I thought they were both Go. Okay, so there's--

**Nick Janetakis:** But this command, env substitute - I think it should be built in. Like, I don't have to install it on Ubuntu. I'm not sure about macOS, but I'm pretty sure you probably have it.

**Jerod Santo:** Yeah. News to me... TIL. That's cool. I definitely can find some uses for that in my life.

**Nick Janetakis:** Yeah. And you can just very easily try it out on your own. You can just use the echo command, and echo out an environment variable and then pipe it into env substitute, no arguments, and you can just see how it works.

**Jerod Santo:** It looks like it is here on macOS by default.

**Nick Janetakis:** So the play-by-play would be like "export hello=world."

**Jerod Santo:** Okay, gotcha...

**Nick Janetakis:** And then "echo $Hello", and then pipe that into envsubst.

**Jerod Santo:** Envsubst.

**Nick Janetakis:** Or if you wanna get fancy, tab-complete the command.

**Jerod Santo:** Do I need any sort of quotes, or...? It didn't echo anything.

**Nick Janetakis:** Did you export the variable first?

**Jerod Santo:** Oh, I exported it on the same command line. I should export it and then run the echo. Dork.

**Nick Janetakis:** Yeah, two separate commands.

**Jerod Santo:** Yeah. Tab completion for the win this time... Eeeey, it says "World." So cool.

**Nick Janetakis:** I mean, you don't need to do this one live, but the idea now is you can just take a file and just pipe that through there, and then send it over to whatever you need to, and it's gonna be the man in the middle that processes the file and turns it into a template that the tool understands.

**Jerod Santo:** Very neat. Well, we've come to the end of this show... We haven't come to the end of the Modern Unix Tools, so definitely check out the repo. All the little things that we mentioned will be linked up, including this env substitute with the Go version, so you can get that one if you're into defaults, which I certainly am... And I agree, should probably be built in by default anyhow... But nonetheless, there it is.

**Nick Janetakis:** Oh, hold on. Sorry to interrupt, but here is -- I don't know, a pro tip, or whatever... If you are in the command line and you're trying out the command that Jerod just ran, if you did define a default for that variable, it is going to work... But the only reason it's working is because your shell is actually interpreting that default variable. So it's a very tricky, subtle thing. So it's not gonna work if you have the variable in a file, but it will work in the command line, because the shell is pretty awesome.

**Jerod Santo:** That's the worst, when you have something like that where you're like "It's working right here in my shell. Why doesn't it work when I go to use it?"

**Nick Janetakis:** Yeah.

**Jerod Santo:** Good pro tip.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Anything left unsaid? Surely we've left some things unsaid, but anything else you wanna say before we tail off, Nick? Tell folks where they can check you out, the course work that you do etc.

**Nick Janetakis:** Yeah, so I have a personal blog at https://nickjanetakis.com/, and I put out a new post every week. A lot of them are YouTube videos lately, but I do have written versions of most of those. If there's a command line-heavy video, you're gonna see reference tables of the commands there. As for courses, I have a Build a SAAS App With Flask course, where we build a SAAS app with Flask, and use Stripe, and a whole bunch of different stuff there. I have an intro to Docker course, Dive Into Docker. I keep that one updated; basically, if you're new to Docker and you wanna figure it out, there's that. And there's also the runninginproduction.com podcast, where -- yeah, we went over that one before... Basically, I just talk to new folks every week about how they're building and running their stuff in production.

New courses on the way... I have a deployment course coming out; still working on it, but it's not available yet. But if you go to https://nickjanetakis.com/ you can get notified there when it ships. That's about it.

**Jerod Santo:** Excellent.

**Nick Janetakis:** I'm also on Twitter, @nickjanetakis.

**Adam Stacoviak:** All the places.

**Jerod Santo:** Everywhere.

**Adam Stacoviak:** All the places. We do link it up in the show notes, so you can find everything Nick just said pretty much there. We'll do our best to do a great job in the show notes. But guess what - they're also open source, so if you see that we've missed something, then you can step in. And if it's October, you get a T-shirt.

**Jerod Santo:** Not from us, from DigitalOcean.

**Adam Stacoviak:** That's right, from DigitalOcean...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Nick, you're always awesome. Big fan of what you do. Thanks for coming on the show, man; thank you for sharing your thoughts, your wisdom etc.

**Nick Janetakis:** Yeah, thanks a lot for having me. This was really fun.
